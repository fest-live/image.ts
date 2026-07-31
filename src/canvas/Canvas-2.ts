/*
 * Filename: Canvas-2.ts
 * FullPath: modules/projects/image.ts/src/canvas/Canvas-2.ts
 * Change date and time: 16.40.00_31.07.2026
 * Reason for changes: Apply wallpaper-derived theme seeds after paint URL changes.
 */
/**
 * Underlying app canvas layer.
 *
 * Hosts background/image surface under shell windows.
 */

import {
    getCorrectOrientation,
    orientationNumberMap,
    whenAnyScreenChanges
} from "fest/dom";
import {
    applyThemeFromWallpaper,
    restoreWallpaperThemeCache
} from "../engine/WallpaperTheme.js";

const WALLPAPER_STORAGE_KEY = "rs-wallpaper-image";
const DEFAULT_WALLPAPER_URL = "/assets/wallpaper.jpg";

export type CanvasLayerState = {
    root: HTMLElement;
    canvas: HTMLCanvasElement;
    glow: HTMLDivElement;
    /** Stop screen/orient listeners for this canvas. */
    disposeOrient?: () => void;
};

const currentOrientNumber = (): number =>
    orientationNumberMap?.[getCorrectOrientation()] ?? 0;

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

/** Tint the soft glow with the wallpaper primary (falls back to cool blue). */
const syncGlowToTheme = (glow: HTMLElement): void => {
    const primary =
        getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim() ||
        "#5b86eb";
    glow.style.background =
        `radial-gradient(circle at 15% 20%, color-mix(in oklab, ${primary} 45%, transparent) 0%, transparent 40%),` +
        ` radial-gradient(circle at 75% 72%, color-mix(in oklab, ${primary} 35%, transparent) 0%, transparent 43%)`;
};

export const initializeAppCanvasLayer = (container: HTMLElement): CanvasLayerState => {
    const root = container;
    root.replaceChildren();
    /* INVARIANT: {@link setAppWallpaper} queries `[data-app-layer="canvas"] canvas[is="ui-canvas"]`. */
    root.dataset.appLayer = "canvas";
    root.style.position = "absolute";
    root.style.inset = "0";
    root.style.overflow = "hidden";
    root.style.background = "radial-gradient(circle at 18% 12%, #1b2a45 0%, #0f1728 42%, #060910 100%)";

    const glow = document.createElement("div");
    glow.className = "app-canvas__glow";
    glow.style.position = "absolute";
    glow.style.inset = "-20%";
    glow.style.pointerEvents = "none";
    glow.style.opacity = "0.7";
    glow.style.background =
        "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";

    const canvas = document.createElement("canvas", { is: "ui-canvas" }) as HTMLCanvasElement;
    canvas.className = "app-canvas__image ui-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.inlineSize = "100%";
    canvas.style.blockSize = "100%";
    canvas.style.maxInlineSize = "100%";
    canvas.style.maxBlockSize = "100%";
    canvas.style.opacity = "0.88";
    canvas.style.mixBlendMode = "normal";
    canvas.setAttribute("is", "ui-canvas");

    root.append(glow, canvas);

    const wallpaper = loadWallpaperUrl();
    canvas.setAttribute("data-src", wallpaper);
    const disposeOrient = syncCanvasOrient(canvas);

    /* Cold paint: restore last seeds, then re-extract from current wallpaper. */
    restoreWallpaperThemeCache();
    syncGlowToTheme(glow);
    void applyThemeFromWallpaper(wallpaper).then(() => syncGlowToTheme(glow));

    return { root, canvas, glow, disposeOrient };
};

export const setAppWallpaper = (wallpaperUrl: string): void => {
    const value = String(wallpaperUrl || "").trim() || DEFAULT_WALLPAPER_URL;
    try {
        localStorage.setItem(WALLPAPER_STORAGE_KEY, value);
    } catch {
        // ignore storage errors
    }

    const canvases = document.querySelectorAll<HTMLCanvasElement>(
        '[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'
    );
    const orient = String(currentOrientNumber());
    canvases.forEach((canvas) => {
        canvas.setAttribute("data-src", value);
        // WHY: src swap must not leave stale/missing orient (ui-canvas re-renders on both).
        canvas.setAttribute("data-orient", orient);
        canvas.setAttribute("orient", orient);
        canvas.style.setProperty("--orient", orient);
    });

    void applyThemeFromWallpaper(value, { force: true }).then(() => {
        document.querySelectorAll<HTMLElement>(".app-canvas__glow").forEach(syncGlowToTheme);
    });
};

const loadWallpaperUrl = (): string => {
    try {
        const value = localStorage.getItem(WALLPAPER_STORAGE_KEY);
        return value && value.trim() ? value.trim() : DEFAULT_WALLPAPER_URL;
    } catch {
        return DEFAULT_WALLPAPER_URL;
    }
};
