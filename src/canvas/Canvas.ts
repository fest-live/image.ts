/*
 * Filename: Canvas.ts
 * FullPath: modules/projects/image.ts/src/canvas/Canvas.ts
 * Change date and time: 20.30.00_23.11.2026
 * FIND:wallpaper-boot
 * TAG:wallpaper-layout
 * Reason for changes: Stored wallpaper framing (scale/position) applies on cold boot and
 * non-canvas-layer hosts; layout sync helper for the interactive WallpaperComposer.
 */
import { makeRAFCycle } from "@fest-lib/dom";

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
/**
 * Stable same-origin URL for a custom photo.
 * INVARIANT: bytes live in Cache `cwsp-user-wallpaper`; SW `addRoutes` serves this
 * path from that cache before the worker starts, so the stock file is not requested.
 */
export const USER_WALLPAPER_PATH = "/assets/user-wallpaper";
export const USER_WALLPAPER_CACHE = "cwsp-user-wallpaper";
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
    (pointer.startsWith("data:") &&
        (pointer.length > LOCAL_STORAGE_SAFE_CHARS || !/^data:image\//i.test(pointer)));

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

const cacheUserWallpaper = async (blob: Blob): Promise<void> => {
    if (typeof caches === "undefined" || !(blob instanceof Blob) || blob.size <= 0) return;
    const cache = await caches.open(USER_WALLPAPER_CACHE);
    const type = blob.type && blob.type.startsWith("image/") ? blob.type : "image/jpeg";
    await cache.put(
        new Request(USER_WALLPAPER_PATH),
        new Response(blob, { headers: { "Content-Type": type } })
    );
};

const clearCachedUserWallpaper = async (): Promise<void> => {
    if (typeof caches === "undefined") return;
    try {
        const cache = await caches.open(USER_WALLPAPER_CACHE);
        await cache.delete(new Request(USER_WALLPAPER_PATH));
    } catch {
        /* ignore */
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
        return processHostSkipsBundledWallpaper() ? "" : DEFAULT_WALLPAPER_URL;
    }
    if (processHostSkipsBundledWallpaper() && (!pointer || pointer === DEFAULT_WALLPAPER_URL)) {
        return "";
    }
    return pointer || DEFAULT_WALLPAPER_URL;
};

type WarmedWallpaper = { url: string; blob: Blob };
let warmPromise: Promise<WarmedWallpaper | null> | null = null;

/**
 * PERF: start IDB/network wallpaper bytes during boot, before the shell canvas exists.
 * First Capacitor launch otherwise waits for CSS + custom-element setup before fetch.
 */
export const warmAppWallpaper = (): Promise<WarmedWallpaper | null> => {
    if (warmPromise) return warmPromise;
    warmPromise = (async (): Promise<WarmedWallpaper | null> => {
        const pointer = readStoragePointer();
        if (isIdbPointer(pointer) || isUnusableStoredUrl(pointer)) {
            const blob = await idbGetWallpaper();
            if (!blob) return null;
            /* WHY: next navigation hits addRoutes / the early script without opening IDB. */
            void cacheUserWallpaper(blob).catch(() => undefined);
            const url = adoptWallpaperBlob(blob, wallpaperEpoch);
            return url ? { url, blob } : null;
        }
        const url = pointer || DEFAULT_WALLPAPER_URL;
        if (!url || url === DEFAULT_WALLPAPER_URL) {
            try {
                const sku = String(document.documentElement?.dataset?.cwspSku || "").toLowerCase();
                if (sku === "process") return null;
            } catch {
                return null;
            }
        }
        if (!url) return null;
        const rsp = await fetch(url, { cache: "force-cache", priority: "high" } as RequestInit);
        if (!rsp.ok) return null;
        const blob = await rsp.blob();
        if (!blob.size || (blob.type && !blob.type.startsWith("image/"))) return null;
        return { url, blob };
    })().catch(() => null);
    return warmPromise;
};

const warmedBlobFor = async (src: string): Promise<Blob | null> => {
    if (!warmPromise || !src) return null;
    const warm = await warmPromise;
    if (!warm) return null;
    if (warm.url === src || warm.url === src.split("#")[0]) return warm.blob;
    return null;
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
        syncAppWallpaperOrient();
        paintWallpaperOnCanvases(url);
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
        void cacheUserWallpaper(blob).catch(() => undefined);
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
    glow.style.inset = "0";
    glow.style.pointerEvents = "none";
    glow.style.opacity = "0";
    glow.style.background = "none";
    glow.style.backgroundColor = "transparent";
    /*glow.style.background =
        "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";*/

    const canvas = document.createElement("canvas", { is: "ui-canvas" }) as HTMLCanvasElement;
    canvas.className = "app-canvas__image ui-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.inlineSize = "min(100cqi, 100dvi)";
    canvas.style.blockSize = "min(100cqb, 100dvb)";
    canvas.style.maxInlineSize = "min(100cqi, 100dvi)";
    canvas.style.maxBlockSize = "min(100cqb, 100dvb)";
    canvas.style.opacity = "1";
    canvas.style.mixBlendMode = "normal";
    canvas.style.filter = "none";
    canvas.style.backdropFilter = "none";
    canvas.style.setProperty("dynamic-range-limit", "no-limit");
    canvas.style.setProperty("color-space", getCurrentDisplayColorSpace() || "display-p3");
    canvas.style.setProperty("background-color", "transparent", "important");
    canvas.style.setProperty("opacity", "1", "important");
    canvas.setAttribute("is", "ui-canvas");

    // TODO: corrent orientation of poster...
    const poster = document.createElement("img");
    poster.className = "app-canvas__poster";
    poster.alt = "";
    poster.decoding = "async";
    poster.setAttribute("fetchpriority", "high");
    poster.draggable = false;
    poster.style.position = "absolute";
    poster.style.inset = "0";
    poster.style.inlineSize = "min(100cqi, 100dvi)";
    poster.style.blockSize = "min(100cqb, 100dvb)";
    poster.style.objectFit = "cover";
    poster.style.objectPosition = "center";
    poster.style.pointerEvents = "none";
    root.append(/*poster,*glow*/ canvas);
    poster.addEventListener("load", () => {
        try {
            document.documentElement.removeAttribute("data-cwsp-wallpaper-poster");
        } catch {
            /* ignore */
        }
    }, { once: true });
    poster.addEventListener("error", () => {
        poster.style.display = "none";
        /* Cache miss: keep the document photo (IDB blob) instead of a broken stock frame. */
        if (poster.src.includes(USER_WALLPAPER_PATH)) poster.removeAttribute("src");
    });

    rememberMissingDefaultWallpaper();
    const pointer = readStoragePointer();
    /* WHY: an IDB photo must not cold-start the bundled file — that frame paints first. */
    const coldUrl = isIdbPointer(pointer)
        ? USER_WALLPAPER_PATH
        : pointer.startsWith("data:") || pointer.startsWith("blob:")
            ? ""
            : pointer;
    const warming = warmAppWallpaper();
    if (coldUrl && !failedWallpaperSrc.has(coldUrl)) {
        canvas.setAttribute("data-src", coldUrl);
        /* WHY: <img> paints before ui-canvas has a 2d context (first Capacitor frame). */
        poster.src = coldUrl;
    }
    void warming.then((warm) => {
        if (!warm || !poster.isConnected) return;
        if (warm.url.startsWith("blob:")) {
            poster.src = warm.url;
            canvas.setAttribute("data-src", warm.url);
            return;
        }
        if (!poster.getAttribute("src")) poster.src = warm.url;
    });
    const disposeOrient = syncCanvasOrient(canvas);
    /* WHY: paint the stored framing immediately (attrs, not the module cache) —
     * the canvas re-renders on each attr change. */
    applyWallpaperLayout(canvas, getAppWallpaperLayout());

    /* Cold paint: restore last seeds, then re-extract from current wallpaper. */
    restoreWallpaperThemeCache();
    syncGlowToTheme(glow);

    void (async () => {
        const wallpaper = await resolveAppWallpaperUrl();
        if (!wallpaper || failedWallpaperSrc.has(wallpaper)) {
            syncGlowToTheme(glow);
            return;
        }
        canvas.setAttribute("data-src", wallpaper);
        if (poster.isConnected) poster.src = wallpaper;
        syncCanvasOrient(canvas);
        const themeSrc =
            wallpaper.startsWith("blob:") ? (await idbGetWallpaper()) || wallpaper : wallpaper;
        /* PERF: KMeans decode fights the first wallpaper paint. Seeds already restored. */
        const extract = (): void => {
            void applyThemeFromWallpaper(themeSrc).then(() => syncGlowToTheme(glow));
        };
        const ric = (globalThis as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
        if (typeof ric === "function") ric(extract, { timeout: 1200 });
        else globalThis.setTimeout?.(extract, 320);
    })();

    return { root, canvas, glow, disposeOrient };
};

const WALLPAPER_LAYOUT_KEY = "rs-wallpaper-layout";
const APP_WALLPAPER_CANVAS_SELECTOR =
    '[data-app-layer="canvas"] canvas[is="ui-canvas"], ' +
    '[data-app-layer="canvas"] canvas.ui-canvas';

export type WallpaperPosition = "start" | "center" | "end" | `${number}%`;

export type WallpaperLayout = {
    scale: number;
    positionX: WallpaperPosition;
    positionY: WallpaperPosition;
};

const normalizeWallpaperScale = (raw: unknown): number => {
    const value = typeof raw === "number"
        ? raw
        : typeof raw === "string"
            ? Number(raw.trim().toLowerCase().replace(/x$/, ""))
            : NaN;

    return Number.isFinite(value) && value > 0 ? value : 1;
};

const normalizeWallpaperPosition = (raw: unknown): WallpaperPosition => {
    const value = typeof raw === "string" ? raw.trim().toLowerCase() : "";
    if (value === "start" || value === "center" || value === "end") return value;

    if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)%$/.test(value)) {
        const percent = Number(value.slice(0, -1));
        if (Number.isFinite(percent)) {
            return `${Math.max(0, Math.min(100, percent))}%`;
        }
    }

    return "center";
};

const wallpaperPositionRatio = (raw: string | null): number => {
    const position = normalizeWallpaperPosition(raw);
    if (position === "start") return 0;
    if (position === "center") return 0.5;
    if (position === "end") return 1;
    return Number(position.slice(0, -1)) / 100;
};

const normalizeWallpaperLayout = (
    layout?: Partial<WallpaperLayout> | null
): WallpaperLayout => ({
    scale: normalizeWallpaperScale(layout?.scale || 1),
    positionX: normalizeWallpaperPosition(layout?.positionX ?? "center"),
    positionY: normalizeWallpaperPosition(layout?.positionY ?? "center")
});

let sessionWallpaperLayout: WallpaperLayout | undefined;

/**
 * Cached `scale` / `position-x` / `position-y` fallbacks for `ui-canvas` hosts that
 * never receive explicit layout attrs (SpeedDial backdrop, window-frame canvases).
 * INVARIANT: written only by {@link readStoredWallpaperLayout} /
 * {@link syncWallpaperLayoutAttrs} — keep in lockstep with `rs-wallpaper-layout`
 * in localStorage (single writer: {@link setAppWallpaperLayout}).
 */
let defaultWallpaperLayoutAttrs: { scale: string; "position-x": string; "position-y": string } = {
    scale: "1",
    "position-x": "center",
    "position-y": "center"
};

const readStoredWallpaperLayout = (): void => {
    try {
        const raw = JSON.parse(localStorage.getItem(WALLPAPER_LAYOUT_KEY) ?? "null");
        if (!raw || typeof raw !== "object") return;
        defaultWallpaperLayoutAttrs = {
            scale: String(normalizeWallpaperScale((raw as any).scale)),
            "position-x": normalizeWallpaperPosition((raw as any).positionX ?? "center"),
            "position-y": normalizeWallpaperPosition((raw as any).positionY ?? "center")
        };
    } catch {
        /* keep defaults */
    }
};

/** Push the current layout to the attr cache and every live app-canvas. */
export const syncWallpaperLayoutAttrs = (): void => {
    const layout = getAppWallpaperLayout();
    defaultWallpaperLayoutAttrs = {
        scale: String(layout.scale),
        "position-x": layout.positionX,
        "position-y": layout.positionY
    };
    if (typeof document === "undefined") return;
    document
        .querySelectorAll<HTMLCanvasElement>(APP_WALLPAPER_CANVAS_SELECTOR)
        .forEach((canvas) => applyWallpaperLayout(canvas, layout));
};

/* WHY: the stored framing must be known before any canvas paints (cold boot). */
readStoredWallpaperLayout();

export const getAppWallpaperLayout = (): WallpaperLayout => {
    if (sessionWallpaperLayout) return { ...sessionWallpaperLayout };
    try {
        return normalizeWallpaperLayout(
            JSON.parse(localStorage.getItem(WALLPAPER_LAYOUT_KEY) ?? "null")
        );
    } catch {
        return normalizeWallpaperLayout();
    }
};

const applyWallpaperLayout = (
    canvas: HTMLCanvasElement,
    layout: WallpaperLayout
): void => {
    canvas.setAttribute("scale", String(layout.scale));
    canvas.setAttribute("position-x", layout.positionX);
    canvas.setAttribute("position-y", layout.positionY);
};

export const setAppWallpaperLayout = (patch: Partial<WallpaperLayout>): void => {
    const layout = normalizeWallpaperLayout({ ...getAppWallpaperLayout(), ...patch });
    sessionWallpaperLayout = layout;

    try {
        localStorage.setItem(WALLPAPER_LAYOUT_KEY, JSON.stringify(layout));
    } catch {
        // Настройки продолжат работать в текущей сессии.
    }

    syncWallpaperLayoutAttrs();
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
    void clearCachedUserWallpaper();
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

//
const blobImageSymbol = Symbol.for("image.canvas.blob");
globalThis[blobImageSymbol] ??= new WeakMap();
export const blobImageMap = globalThis[blobImageSymbol];

//
const delayedSymbol = Symbol.for("image.canvas.delayed");
globalThis[delayedSymbol] ??= new Map<number, Function | null>([]);
export const delayed = globalThis[delayedSymbol];

//
const schedulerSymbol = Symbol.for("image.canvas.scheduler");
globalThis[schedulerSymbol] ??= makeRAFCycle();
export const schedulerRf = globalThis[schedulerSymbol];

//
const failedWallpaperSrcSymbol = Symbol.for("image.canvas.failedWallpaperSrc");
globalThis[failedWallpaperSrcSymbol] ??= new Set<string>();
export const failedWallpaperSrc = globalThis[failedWallpaperSrcSymbol];

/** Process PWA does not ship `/assets/wallpaper.jpg` — skip the 404 + decode loop. */
const processHostSkipsBundledWallpaper = (): boolean => {
    try {
        const sku = String(document.documentElement?.dataset?.cwspSku || "").toLowerCase();
        if (sku === "process") return true;
        const host = String(globalThis.location?.hostname || "").toLowerCase();
        return host === "process.u2re.space" || host === "workcenter.u2re.space" || host === "ai.u2re.space";
    } catch {
        return false;
    }
};

const rememberMissingDefaultWallpaper = (): void => {
    if (processHostSkipsBundledWallpaper()) failedWallpaperSrc.add(DEFAULT_WALLPAPER_URL);
};

//
const getImgWidth = (img)=>{
    return img?.naturalWidth || img?.width || 1;
}

//
const getImgHeight = (img)=>{
    return img?.naturalHeight || img?.height || 1;
}

function getCurrentDisplayColorSpace() {
    if (window.matchMedia('(color-gamut: rec2020)').matches) {
        return 'rec2020';
    } else if (window.matchMedia('(color-gamut: p3)').matches) {
        return 'display-p3';
    } else if (window.matchMedia('(color-gamut: srgb)').matches) {
        return 'srgb';
    }
    return 'srgb'; // Fallback standard
}

/**
 * WHY: Chromium often rejects `rec2100-hlg` / `rec2100-pq` as PredefinedColorSpace.
 * A bare throw aborts ui-canvas init (no ctx, no ResizeObserver) → blank wallpaper.
 * INVARIANT: always return a usable 2d context when the browser allows any.
 */
const create2dContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D | null => {
    const colorSpace = getCurrentDisplayColorSpace() || "display-p3";
    const base: CanvasRenderingContext2DSettings = {
        alpha: true,
        desynchronized: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
        colorSpace, colorType: "float16", pixelFormat: "rgba-float16"
    };
    
    const native =
        typeof document !== "undefined" &&
        document.documentElement?.dataset?.cwspNativeShell === "capacitor";

    try {
        return canvas.getContext("2d", base);
    } catch {
        return canvas.getContext("2d");
    }
};

//
const HALF_PI = 1.5707963267948966192313216916397514420985846996876;

//
export const callByFrame = (pointerId, cb)=>{ delayed.set(pointerId, cb); }
export const cover = (ctx, img, scale = 1, port, orient = 0) => {
    const canvas = ctx.canvas;
    ctx.translate(Math.round(canvas.width / 2), Math.round(canvas.height / 2));
    ctx.rotate(Math.round((-orient || 0) + (1 - port)) * HALF_PI);
    ctx.translate(Math.round(-(getImgWidth(img) / 2) * scale), Math.round(-(getImgHeight(img) / 2) * scale));
};

//
/** WHY: `instanceof` against a missing global throws ReferenceError — a WebView
 *  without OffscreenCanvas/Image would abort the decode and mark the wallpaper
 *  as failed (blank canvas). Probe the constructors instead. */
const isDecodableSource = (blob: any): boolean => {
    if (!blob) return false;
    const ctor = (globalThis as any);
    if (typeof Blob === "function" && blob instanceof Blob) return true;
    if (typeof File === "function" && blob instanceof File) return true;
    if (typeof OffscreenCanvas === "function" && blob instanceof OffscreenCanvas) return true;
    if (typeof ImageBitmap === "function" && blob instanceof ImageBitmap) return true;
    if (typeof Image === "function" && blob instanceof Image) return true;
    return typeof blob === "object";
};

//
export const createImageBitmapCache = (blob)=>{
    if (!blobImageMap.has(blob) && isDecodableSource(blob)) {
        // WHY: do not cache a rejected promise forever — first decode race would stick.
        const edge = (() => {
            const dpr = Math.min(globalThis.devicePixelRatio || 1, 2);
            const css = Math.max(globalThis.screen?.width || 0, globalThis.screen?.height || 0, 800);
            return Math.round(Math.max(16, css * dpr));
        })();
        const pending = (async () => {
            if (typeof Blob === "function" && blob instanceof Blob && blob.size > 180_000) {
                try {
                    return await createImageBitmap(blob, {
                        resizeWidth: edge,
                        resizeQuality: "high"
                    });
                } catch {
                    /* older WebView: full decode */
                }
            }
            return createImageBitmap(blob);
        })().catch((err) => {
            blobImageMap.delete(blob);
            throw err;
        });
        blobImageMap.set(blob, pending);
    }
    return blobImageMap.get(blob);
}

//
const bindCacheSymbol = Symbol.for("image.canvas.bindCache");
globalThis[bindCacheSymbol] ??= new WeakMap();
export const bindCache = globalThis[bindCacheSymbol];

/**
 * WHY: `WeakMap.set` returns the map, not the value — `get() ?? set() ?? bind()` used to
 * schedule the WeakMap itself on the first paint (blank wallpaper until a later #render).
 * INVARIANT: the cache is keyed per ELEMENT — `$renderPass` lives on the prototype, so a
 * function-keyed cache would hand the second canvas the FIRST canvas's context and the
 * visible one would stay blank.
 */
const bindCached = (cb, ctx) => {
    const cached = bindCache.get(ctx);
    if (typeof cached === "function") return cached;
    const bound = cb.bind(ctx);
    bindCache.set(ctx, bound);
    return bound;
};

//
const rafYield = ()=>{
    return Promise.race([
        scheduler?.yield(),
        new Promise((rv)=> requestAnimationFrame(rv))
    ]);
}

//
let UICanvas: any = null;
if (typeof HTMLCanvasElement != "undefined") {
    UICanvas = class UICanvas extends HTMLCanvasElement {
        /* COMPAT: `fixOrientToScreen` / hosts may set `orient`; SpeedDial / Canvas-2 use `data-orient`. */
        static observedAttributes = [
            "data-src", "data-orient", "orient", "scale", "position-x", "position-y"
        ];

        //
        ctx: CanvasRenderingContext2D | null = null;
        image: ImageBitmap | null = null;
        #size: [number, number] = [1, 1];
        #loading: string | Blob | File = "";
        #ready: string | Blob | File = "";

        //
        get #orient() {
            const raw = this.getAttribute("data-orient") ?? this.getAttribute("orient") ?? "0";
            const n = Number.parseInt(raw, 10) || currentOrientNumber();
            return Number.isFinite(n) ? n : currentOrientNumber();
        }
        set #orient(value: number) {
            const s = String(value ?? currentOrientNumber());
            this.setAttribute("data-orient", s);
            this.setAttribute("orient", s);
        }


        attributeChangedCallback(
            name: string,
            oldValue: string | null,
            newValue: string | null
        ): void {
            if (name === "data-src") {
                this.#preload(newValue);
                return;
            }

            if (oldValue !== newValue) this.#render(this.#ready);
        }

        //
        #initialized = false;
        #initialize() {
            const canvas = this as HTMLCanvasElement;
            const parent = this.parentNode as HTMLElement;

            //
            const fixSize = () => {
                const old = this.#size;
                try { this.#orient = currentOrientNumber(); } catch (e) { };
                this.#size = [ // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientWidth || parent?.clientWidth || 1, 1), parent?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)
                ];

                //
                if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                    this.#render(this.#ready);
                }
            }

            //
            try {
                //
                this.inert = true;
                this.style.objectFit = "cover";
                this.style.objectPosition = "center";
                if (!this.classList.contains("u-canvas")) this.classList.add("u-canvas");
                if (!this.classList.contains("u2-canvas")) this.classList.add("u2-canvas");
                if (!this.classList.contains("ui-canvas")) this.classList.add("ui-canvas");


                //
                this.style.setProperty("inline-size", "min(100cqi, 100dvi)");
                this.style.setProperty("block-size", "min(100cqb, 100dvb)");
                this.style.setProperty("max-inline-size", "min(100cqi, 100dvi)");
                this.style.setProperty("max-block-size", "min(100cqb, 100dvb)");
                this.style.setProperty("dynamic-range-limit", "no-limit");
                this.style.setProperty("color-space", getCurrentDisplayColorSpace() || "display-p3");
                this.style.setProperty("background-color", "transparent", "important");
                this.style.setProperty("opacity", "1", "important");
                this.style.setProperty("image-rendering", "auto", "important");
                this.style.setProperty("filter", "none");
                this.style.setProperty("backdrop-filter", "none");
                this.style.setProperty("mix-blend-mode", "normal");
                this.style.setProperty("background-blend-mode", "normal");
                this.style.setProperty("isolation", "isolate");
            } catch (e) {

            }

            try {
                this.#orient = currentOrientNumber();
            } catch (e) {

            }

            //
            if (!this.#initialized) {
                /* WHY: measure on the NEXT frame — at synchronous connectedCallback the
                 * stylesheet/layout is not applied yet, clientWidth reads 0 and the
                 * canvas would stay a 1px dot until the next orient/resize trigger.
                 * (Pre-6aca6a8 behavior deferred the whole init through rafYield.) */
                rafYield?.()?.then?.(() => {
                    if (!this.isConnected) return;
                    fixSize();
                });
                this.#size = [ // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientWidth || parent?.clientWidth || 1, 1), parent?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)
                ];

                //
                this.ctx = create2dContext(canvas);
                try {
                    this.ctx?.configureHighDynamicRange?.({ mode: "extended" });
                    canvas?.configureHighDynamicRange?.({ mode: "extended" });
                } catch {
                    /* HDR optional */
                }

                //
                fixSize();

                //
                /* COMPAT: a missing/failing ResizeObserver must not abort the rest
                 * of the init — otherwise the canvas keeps a 1px box and the
                 * wallpaper stays invisible with no error in the console. */
                try {
                    new ResizeObserver((entries) => {
                        for (const entry of entries) {
                            /* COMPAT: devicePixelContentBoxSize is missing on older WebViews —
                             * without a fallback #size never recovers and the wallpaper paints
                             * only after the next screen-orientation trigger. */
                            const box = entry?.devicePixelContentBoxSize?.[0]
                                ?? entry?.contentBoxSize?.[0];
                            if (box) {
                                const old = this.#size;
                                const dpr = entry?.devicePixelContentBoxSize?.[0] ? 1 : (devicePixelRatio || 1);
                                this.#size = [ // @ts-ignore
                                    Math.max(box.inlineSize * dpr || this.width, 1),
                                    Math.max(box.blockSize * dpr || this.height, 1)
                                ];
                                this.#orient = currentOrientNumber();
                                if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                                    this.#render(this.#ready);
                                }
                            }
                        }
                    }).observe(this, { box: "device-pixel-content-box" });
                } catch (err) {
                    console.warn("[ui-canvas] ResizeObserver unavailable:", err);
                }

                // WHY: data-src / connectedCallback may have finished preload before ctx existed.
                this.#initialized = true;
            }

            this.#preload(this.#loading = this.dataset.src || this.#loading);
            // WHY: late connect after orient attr was set before CE upgrade — force one paint pass.
            this.#orient = currentOrientNumber();
            if (this.image) this.#render(this.#ready);
        }

        //
        adoptedCallback() {
            this.#initialize();
            if (this.image) this.#render(this.#ready || this.#loading);
        }

        //
        connectedCallback() {
            this.#initialize();
            if (this.image) this.#render(this.#ready || this.#loading);
        }

        //
        constructor() {
            super();
        }

        //
        async $useImageAsSource(blob, ready?: any | null) {
            ready ||= this.#loading;
            const img = (typeof ImageBitmap === "function" && blob instanceof ImageBitmap) ? blob : (await createImageBitmapCache(blob).catch(console.warn.bind(console)));
            if (img && ready == this.#loading) { this.image = img; this.#render(ready); }
            return blob;
        }

        //
        $renderPass(whatIsReady?: File | Blob | string) {
            const canvas = this, ctx = this.ctx, img = this.image;
            /* WHY: `whatIsReady` must be the payload id, not the rafYield resolution
             * value (rAF resolves with a timestamp number → the guard below would
             * reject the pass and the canvas would stay blank). */
            if (img && ctx && (whatIsReady == null || whatIsReady == this.#loading || whatIsReady == this.#ready)) {
                if (whatIsReady) { this.#ready = whatIsReady; };
                if (this.width != this.#size[0]) { this.width = this.#size[0]; };
                if (this.height != this.#size[1]) { this.height = this.#size[1]; };
                this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
                //this.style.containIntrinsicInlineSize = `${this.width  || 1}px`;
                //this.style.containIntrinsicBlockSize  = `${this.height || 1}px`;

                //
                const ox = (((this.#orient ?? currentOrientNumber()) || 0) % 2);
                /*const scale = Math.max(
                    canvas[["height", "width"][ox]] / (port ? getImgHeight(img) : getImgWidth(img)),
                    canvas[["width", "height"][ox]] / (port ? getImgWidth(img) : getImgHeight(img))
                );*/

                //
                const imgWidth = getImgWidth(img);
                const imgHeight = getImgHeight(img);
                const port = imgWidth <= imgHeight ? 1 : 0;
                const turns = Math.round(1 - port - (this.#orient ?? currentOrientNumber()));
                const swapsAxes = Math.abs(turns % 2) === 1;

                const rotatedWidth = swapsAxes ? imgHeight : imgWidth;
                const rotatedHeight = swapsAxes ? imgWidth : imgHeight;
                const coverScale = Math.max(
                    canvas.width / rotatedWidth,
                    canvas.height / rotatedHeight
                );
                /* WHY: SpeedDial / window-frame hosts paint plain `ui-canvas` without layout
                 * attrs; the stored framing must still apply (Canvas-layer canvases get
                 * explicit attrs via {@link applyWallpaperLayout}, others fall back here). */
                const layoutAttr = (name: "scale" | "position-x" | "position-y"): string | null =>
                    this.getAttribute(name) ?? defaultWallpaperLayoutAttrs[name];

                const scale = coverScale * normalizeWallpaperScale(layoutAttr("scale"));

                const drawWidth  = imgWidth  * scale;
                const drawHeight = imgHeight * scale;
                if (!Number.isFinite(drawWidth) || !Number.isFinite(drawHeight)) return;

                const boundsWidth = swapsAxes ? drawHeight : drawWidth;
                const boundsHeight = swapsAxes ? drawWidth : drawHeight;
                const x = wallpaperPositionRatio(layoutAttr("position-x"));
                const y = wallpaperPositionRatio(layoutAttr("position-y"));

                // Процент применяется к разнице между размером канваса и изображения,
                // как у CSS object-position, а не к ширине или высоте самого канваса.
                const left = (canvas.width - boundsWidth) * x;
                const top = (canvas.height - boundsHeight) * y;

                ctx.save();
                try {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.translate(left + boundsWidth / 2, top + boundsHeight / 2);
                    ctx.rotate(turns * HALF_PI);
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = "high";
                    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
                } finally {
                    ctx.restore();
                }
            }
        }

        //
        #preload(src) {
            const ready = src || this.#loading;
            this.#loading = ready;
            if (!ready || typeof ready !== "string") return Promise.resolve();
            if (failedWallpaperSrc.has(ready)) return Promise.resolve();
            if (ready.startsWith("data:") && !/^data:image\//i.test(ready)) {
                failedWallpaperSrc.add(ready);
                return Promise.resolve();
            }
            const warmed = warmedBlobFor(ready);
            return warmed.then((blob) => {
                if (blob && ready === this.#loading) {
                    return this.$useImageAsSource(blob, ready)?.catch?.(() => {
                        failedWallpaperSrc.add(ready);
                    });
                }
                return fetch(ready, {
                    cache: "force-cache",
                    mode: "same-origin",
                    priority: "high"
                } as RequestInit)?.then?.(async (rsp) => {
                if (!rsp.ok) {
                    failedWallpaperSrc.add(ready);
                    return;
                }
                const blob = await rsp.blob();
                if (!blob?.size || (blob.type && !blob.type.startsWith("image/"))) {
                    failedWallpaperSrc.add(ready);
                    return;
                }
                return this.$useImageAsSource(blob, ready)?.catch?.(() => {
                    failedWallpaperSrc.add(ready);
                });
            })?.catch?.(() => {
                failedWallpaperSrc.add(ready);
            });
            });
        }
        #render(whatIsReady?: File | Blob | string) {
            const ctx = this.ctx, img = this.image;
            /* WHY: pass the payload id explicitly — `.then(fn)` would forward the
             * rafYield resolution value (rAF timestamp) as `whatIsReady`. */
            if (img && ctx && (whatIsReady == null || whatIsReady == this.#loading || whatIsReady == this.#ready)) {
                rafYield?.()?.then?.(() => bindCached(this.$renderPass, this)(whatIsReady));
            }
        }
    }
} else {
    UICanvas = class UICanvas {
        constructor() { }
        $renderPass(whatIsReady?: File | Blob | string) { }
        $useImageAsSource(blob, ready?: any | null) { return blob; }
        #preload(src) { return Promise.resolve(); }
        #render(whatIsReady?: File | Blob | string) { }
        #orient: number = currentOrientNumber();
        #loading: string | Blob | File = "";
        #ready: string | Blob | File = "";
        #size: [number, number] = [1, 1];
        ctx: CanvasRenderingContext2D | null = null;
        image: ImageBitmap | null = null;
    }
}

//
export { UICanvas };
export default UICanvas;

//
try { customElements.define('ui-canvas', UICanvas, {extends: 'canvas'}); } catch(e) {};
