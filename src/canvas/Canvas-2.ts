/*
 * Filename: Canvas-2.ts
 * FullPath: modules/projects/image.ts/src/canvas/Canvas-2.ts
 * Change date and time: 23.35.00_29.08.2026
 * Reason for changes: Never paint/theme from a persisted blob: URL — they die on reload.
 * FIND:wallpaper-ink
 * TAG:wallpaper-ink,image
 */
/**
 * Underlying app canvas layer.
 *
 * Hosts background/image surface under shell windows.
 *
 * WHY: Photo data-URLs often exceed `localStorage` (~5MB). `setItem` throws, was
 * swallowed, paint updated in-memory only — reload restored the previous URL.
 * INVARIANT: durable custom wallpapers live in IndexedDB; `localStorage` holds
 * either a short URL (`/assets/…`) or the {@link WALLPAPER_IDB_MARKER} pointer.
 * INVARIANT: `blob:` object URLs are session-only. Never persist them; never
 * pass a stored `blob:` to `fetch` / KMeans (`ERR_FILE_NOT_FOUND` after reload).
 */

import {
    getCorrectOrientation,
    orientationNumberMap,
    whenAnyScreenChanges
} from "@fest-lib/dom";
import {
    applyThemeFromWallpaper,
    restoreWallpaperThemeCache
} from "../engine/WallpaperTheme.js";

const WALLPAPER_STORAGE_KEY = "rs-wallpaper-image";
const DEFAULT_WALLPAPER_URL = "/assets/wallpaper.jpg";
/** Marker stored in localStorage when bytes live in IndexedDB. */
export const WALLPAPER_IDB_MARKER = "idb:rs-wallpaper";
const IDB_NAME = "cwsp-wallpaper-v1";
const IDB_STORE = "blobs";
const IDB_KEY = "current";
/** Prefer IDB when payload is larger than this (or always for data:/blob:). */
const LOCAL_STORAGE_SAFE_CHARS = 512_000;

export type CanvasLayerState = {
    root: HTMLElement;
    canvas: HTMLCanvasElement;
    glow: HTMLDivElement;
    /** Stop screen/orient listeners for this canvas. */
    disposeOrient?: () => void;
};

let liveObjectUrl: string | null = null;
/** Bumped on revoke so an in-flight IDB restore cannot resurrect a dead object URL. */
let wallpaperEpoch = 0;

const currentOrientNumber = (): number =>
    orientationNumberMap?.[getCorrectOrientation()] ?? 0;

const isIdbPointer = (pointer: string): boolean =>
    pointer === WALLPAPER_IDB_MARKER || pointer.startsWith("idb:");

/** Stored `blob:` is always dead after reload; oversized `data:` is a quota leftover. */
const isUnusableStoredUrl = (pointer: string): boolean =>
    pointer.startsWith("blob:") ||
    (pointer.startsWith("data:") && pointer.length > LOCAL_STORAGE_SAFE_CHARS);

const revokeLiveObjectUrl = (): void => {
    wallpaperEpoch += 1;
    if (liveObjectUrl && liveObjectUrl.startsWith("blob:")) {
        try {
            URL.revokeObjectURL(liveObjectUrl);
        } catch {
            /* ignore */
        }
    }
    liveObjectUrl = null;
};

/** Reuse this session's object URL so a second resolve cannot revoke mid-theme-fetch. */
const adoptWallpaperBlob = (blob: Blob, epoch: number): string | null => {
    if (epoch !== wallpaperEpoch) return liveObjectUrl;
    if (liveObjectUrl) return liveObjectUrl;
    liveObjectUrl = URL.createObjectURL(blob);
    return liveObjectUrl;
};

const openWallpaperDb = (): Promise<IDBDatabase> =>
    new Promise((resolve, reject) => {
        if (typeof indexedDB === "undefined") {
            reject(new Error("indexedDB unavailable"));
            return;
        }
        const req = indexedDB.open(IDB_NAME, 1);
        req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains(IDB_STORE)) {
                db.createObjectStore(IDB_STORE);
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error || new Error("IDB open failed"));
    });

const idbPutWallpaper = async (blob: Blob): Promise<void> => {
    const db = await openWallpaperDb();
    try {
        await new Promise<void>((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, "readwrite");
            tx.objectStore(IDB_STORE).put(blob, IDB_KEY);
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error || new Error("IDB put failed"));
        });
    } finally {
        db.close();
    }
};

const idbGetWallpaper = async (): Promise<Blob | null> => {
    const db = await openWallpaperDb();
    try {
        return await new Promise<Blob | null>((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, "readonly");
            const req = tx.objectStore(IDB_STORE).get(IDB_KEY);
            req.onsuccess = () => {
                const v = req.result;
                resolve(v instanceof Blob ? v : null);
            };
            req.onerror = () => reject(req.error || new Error("IDB get failed"));
        });
    } finally {
        db.close();
    }
};

const idbClearWallpaper = async (): Promise<void> => {
    try {
        const db = await openWallpaperDb();
        try {
            await new Promise<void>((resolve, reject) => {
                const tx = db.transaction(IDB_STORE, "readwrite");
                tx.objectStore(IDB_STORE).delete(IDB_KEY);
                tx.oncomplete = () => resolve();
                tx.onerror = () => reject(tx.error || new Error("IDB delete failed"));
            });
        } finally {
            db.close();
        }
    } catch {
        /* ignore */
    }
};

const readStoragePointer = (): string => {
    try {
        const value = localStorage.getItem(WALLPAPER_STORAGE_KEY);
        return value && value.trim() ? value.trim() : DEFAULT_WALLPAPER_URL;
    } catch {
        return DEFAULT_WALLPAPER_URL;
    }
};

const writeStoragePointer = (value: string): boolean => {
    if (value.startsWith("blob:")) {
        /* INVARIANT: blob: dies on reload — never persist as the pointer. */
        return false;
    }
    try {
        localStorage.setItem(WALLPAPER_STORAGE_KEY, value);
        return true;
    } catch {
        return false;
    }
};

const restoreWallpaperBlobUrl = async (): Promise<string | null> => {
    if (liveObjectUrl) return liveObjectUrl;
    const epoch = wallpaperEpoch;
    try {
        const blob = await idbGetWallpaper();
        if (!blob) return null;
        return adoptWallpaperBlob(blob, epoch);
    } catch (err) {
        console.warn("[fest/image] wallpaper IDB restore failed", err);
        return null;
    }
};

const isInlinePayload = (url: string): boolean =>
    url.startsWith("data:") || url.startsWith("blob:");

/**
 * Resolve the durable pointer to a paintable URL (may create a blob: object URL).
 * Callers that only need the pointer should use {@link getWallpaperStoragePointer}.
 */
export const resolveAppWallpaperUrl = async (): Promise<string> => {
    const pointer = readStoragePointer();
    if (isIdbPointer(pointer) || isUnusableStoredUrl(pointer)) {
        const url = await restoreWallpaperBlobUrl();
        if (url) {
            if (!isIdbPointer(pointer)) writeStoragePointer(WALLPAPER_IDB_MARKER);
            return url;
        }
        return DEFAULT_WALLPAPER_URL;
    }
    return pointer || DEFAULT_WALLPAPER_URL;
};

/** Durable pointer currently stored (`/assets/…` or {@link WALLPAPER_IDB_MARKER}). */
export const getWallpaperStoragePointer = (): string => readStoragePointer();

/**
 * INVARIANT: `ui-canvas` cover-rotate reads `data-orient` (see Canvas.ts).
 * Keep attr + CSS var in lockstep with {@link fixOrientToScreen} / `orientRef`.
 */
export const syncCanvasOrient = (canvas: HTMLCanvasElement): (() => void) => {
    const apply = (): void => {
        const n = currentOrientNumber();
        const s = String(n);
        if (canvas.getAttribute("data-orient") !== s) {
            canvas.setAttribute("data-orient", s);
        }
        if (canvas.getAttribute("orient") !== s) {
            canvas.setAttribute("orient", s);
        }
        canvas.style.setProperty("--orient", s);
        (canvas as HTMLElement & { orient?: number }).orient = n;
    };
    apply();
    return whenAnyScreenChanges(apply);
};

/** Re-apply orient on every live wallpaper canvas (e.g. after late mount). */
export const syncAppWallpaperOrient = (): void => {
    const canvases = document.querySelectorAll<HTMLCanvasElement>(
        '[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'
    );
    canvases.forEach((canvas) => {
        const n = currentOrientNumber();
        const s = String(n);
        canvas.setAttribute("data-orient", s);
        canvas.setAttribute("orient", s);
        canvas.style.setProperty("--orient", s);
    });
};

/** Re-resolve storage/IDB pointer and repaint — after HOME/back or WebView resume. */
export const refreshAppWallpaperPaint = (): void => {
    void resolveAppWallpaperUrl().then((url) => {
        paintWallpaperOnCanvases(url);
        syncAppWallpaperOrient();
    });
};

/** Tint the soft glow with the wallpaper primary (falls back to cool blue). */
const syncGlowToTheme = (glow: HTMLElement): void => {
    const primary =
        getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim() ||
        "#5b86eb";
    /*glow.style.background =
        `radial-gradient(circle at 15% 20%, color-mix(in oklab, ${primary} 45%, transparent) 0%, transparent 40%),` +
        ` radial-gradient(circle at 75% 72%, color-mix(in oklab, ${primary} 35%, transparent) 0%, transparent 43%)`;*/
    glow.style.background = "none";
    glow.style.backgroundColor = "transparent";
};

const paintWallpaperOnCanvases = (paintUrl: string): void => {
    const canvases = document.querySelectorAll<HTMLCanvasElement>(
        '[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'
    );
    const orient = String(currentOrientNumber());
    canvases.forEach((canvas) => {
        canvas.setAttribute("data-src", paintUrl);
        // WHY: src swap must not leave stale/missing orient (ui-canvas re-renders on both).
        canvas.setAttribute("data-orient", orient);
        canvas.setAttribute("orient", orient);
        canvas.style.setProperty("--orient", orient);
    });
};

const dataUrlToBlob = async (dataUrl: string): Promise<Blob> => {
    const res = await fetch(dataUrl);
    return res.blob();
};

/**
 * Persist + paint a wallpaper blob/File (preferred entry for file pickers).
 * Stores bytes in IndexedDB and the durable marker in localStorage.
 */
export const setAppWallpaperFromBlob = async (blob: Blob): Promise<string> => {
    if (!(blob instanceof Blob) || blob.size <= 0) {
        setAppWallpaper(DEFAULT_WALLPAPER_URL);
        return DEFAULT_WALLPAPER_URL;
    }
    revokeLiveObjectUrl();
    liveObjectUrl = URL.createObjectURL(blob);
    paintWallpaperOnCanvases(liveObjectUrl);
    /* WHY: pass Blob, not the object URL — revoke/re-resolve must not kill KMeans fetch. */
    void applyThemeFromWallpaper(blob, { force: true }).then(() => {
        document.querySelectorAll<HTMLElement>(".app-canvas__glow").forEach(syncGlowToTheme);
    });
    try {
        await idbPutWallpaper(blob);
        writeStoragePointer(WALLPAPER_IDB_MARKER);
    } catch (err) {
        console.warn("[fest/image] wallpaper IDB persist failed", err);
        /* Last resort: try localStorage data URL (may still quota-fail). */
        try {
            const reader = new FileReader();
            const dataUrl = await new Promise<string>((resolve, reject) => {
                reader.onload = () => resolve(String(reader.result || ""));
                reader.onerror = () => reject(reader.error || new Error("read failed"));
                reader.readAsDataURL(blob);
            });
            if (dataUrl && !writeStoragePointer(dataUrl)) {
                console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
            }
        } catch {
            /* ignore */
        }
    }
    try {
        globalThis.dispatchEvent?.(
            new CustomEvent("cwsp-wallpaper-change", {
                detail: { pointer: WALLPAPER_IDB_MARKER, url: liveObjectUrl }
            })
        );
    } catch {
        /* ignore */
    }
    return liveObjectUrl;
};

export const initializeAppCanvasLayer = (container: HTMLElement): CanvasLayerState => {
    const root = container;
    root.replaceChildren();
    /* INVARIANT: {@link setAppWallpaper} queries `[data-app-layer="canvas"] canvas[is="ui-canvas"]`. */
    root.dataset.appLayer = "canvas";
    root.style.position = "absolute";
    root.style.inset = "0";
    root.style.overflow = "hidden";
    root.style.background = "none";
    root.style.backgroundColor = "transparent";
    //root.style.background = "radial-gradient(circle at 18% 12%, #1b2a45 0%, #0f1728 42%, #060910 100%)";

    const glow = document.createElement("div");
    glow.className = "app-canvas__glow";
    glow.style.position = "absolute";
    glow.style.inset = "-20%";
    glow.style.pointerEvents = "none";
    glow.style.opacity = "0.7";
    glow.style.background = "none";
    glow.style.backgroundColor = "transparent";
    /*glow.style.background =
        "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";*/

    const canvas = document.createElement("canvas", { is: "ui-canvas" }) as HTMLCanvasElement;
    canvas.className = "app-canvas__image ui-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.inlineSize = "100%";
    canvas.style.blockSize = "100%";
    canvas.style.maxInlineSize = "100%";
    canvas.style.maxBlockSize = "100%";
    canvas.style.opacity = "1";
    canvas.style.mixBlendMode = "normal";
    canvas.setAttribute("is", "ui-canvas");
    canvas.style.setProperty("dynamic-range-limit", "no-limit");
    canvas.style.setProperty("color-space", "display-p3");
    canvas.style.setProperty("background-color", "transparent", "important");
    canvas.style.setProperty("opacity", "1", "important");

    root.append(glow, canvas);

    const pointer = readStoragePointer();
    const coldUrl =
        isIdbPointer(pointer) || pointer.startsWith("data:") || pointer.startsWith("blob:")
            ? DEFAULT_WALLPAPER_URL
            : pointer;
    canvas.setAttribute("data-src", coldUrl);
    const disposeOrient = syncCanvasOrient(canvas);

    /* Cold paint: restore last seeds, then re-extract from current wallpaper. */
    restoreWallpaperThemeCache();
    syncGlowToTheme(glow);

    void (async () => {
        const wallpaper = await resolveAppWallpaperUrl();
        canvas.setAttribute("data-src", wallpaper);
        syncCanvasOrient(canvas);
        const themeSrc =
            wallpaper.startsWith("blob:") ? (await idbGetWallpaper()) || wallpaper : wallpaper;
        await applyThemeFromWallpaper(themeSrc);
        syncGlowToTheme(glow);
    })();

    return { root, canvas, glow, disposeOrient };
};

/**
 * Set wallpaper from a URL. Short asset paths stay in localStorage; `data:` / `blob:` /
 * oversized payloads are persisted to IndexedDB with {@link WALLPAPER_IDB_MARKER}.
 */
export const setAppWallpaper = (wallpaperUrl: string): void => {
    const value = String(wallpaperUrl || "").trim() || DEFAULT_WALLPAPER_URL;

    if (isInlinePayload(value) || value.length > LOCAL_STORAGE_SAFE_CHARS) {
        void (async () => {
            try {
                const blob = value.startsWith("blob:")
                    ? await (await fetch(value)).blob()
                    : await dataUrlToBlob(value);
                await setAppWallpaperFromBlob(blob);
            } catch (err) {
                console.warn("[fest/image] setAppWallpaper inline persist failed", err);
                /* Dead/foreign blob: must not be fetched for paint or KMeans. */
                const fallback = value.startsWith("blob:") ? DEFAULT_WALLPAPER_URL : value;
                paintWallpaperOnCanvases(fallback);
                void applyThemeFromWallpaper(fallback, { force: true }).then(() => {
                    document.querySelectorAll<HTMLElement>(".app-canvas__glow").forEach(syncGlowToTheme);
                });
            }
        })();
        return;
    }

    void idbClearWallpaper();
    revokeLiveObjectUrl();
    if (!writeStoragePointer(value)) {
        console.warn("[fest/image] wallpaper pointer write failed");
    }
    paintWallpaperOnCanvases(value);
    void applyThemeFromWallpaper(value, { force: true }).then(() => {
        document.querySelectorAll<HTMLElement>(".app-canvas__glow").forEach(syncGlowToTheme);
    });
    try {
        globalThis.dispatchEvent?.(
            new CustomEvent("cwsp-wallpaper-change", { detail: { pointer: value, url: value } })
        );
    } catch {
        /* ignore */
    }
};
