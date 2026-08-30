/*
 * Filename: WallpaperTheme.ts
 * FullPath: modules/projects/image.ts/src/engine/WallpaperTheme.ts
 * Change date and time: 17.50.00_23.08.2026
 * Reason for changes: Live luma paper wins over KMeans/cache (light wallpaper ink revert).
 * FIND:wallpaper-ink
 * TAG:wallpaper-ink,veela,image
 */

import { formatHex, oklch, parse } from "culori";
import { getDominantColors } from "./KMean.js";
import { Q } from "@fest-lib/lure";

export type RgbTuple = [number, number, number];

/** Achromatic wallpaper paper + ink that sits on the photo (not app chrome). */
export type WallpaperPaperTokens = {
    underlying: string;
    contrast: string;
};

export type WallpaperThemeSeeds = {
    primary: string;
    secondary: string;
    tertiary: string;
    underlying?: string;
    contrast?: string;
};

/** Persisted JSON `{ primary, secondary, tertiary, underlying, contrast }` from last wallpaper extract. */
export const WALLPAPER_THEME_STORAGE_KEY = "rs-wallpaper-theme";
/** Convenience: last primary hex alone (for quick reads / debugging). */
export const WALLPAPER_PRIMARY_STORAGE_KEY = "rs-wallpaper-primary";
/** Wallpaper URL/data-URL key that produced the cached theme (skip re-KMeans when unchanged). */
export const WALLPAPER_THEME_SRC_STORAGE_KEY = "rs-wallpaper-theme-src";

const THEME_STORAGE_KEY = WALLPAPER_THEME_STORAGE_KEY;
const PRIMARY_STORAGE_KEY = WALLPAPER_PRIMARY_STORAGE_KEY;
const WALLPAPER_URL_KEY = WALLPAPER_THEME_SRC_STORAGE_KEY;

/** L split: above = light paper + dark ink; at/below = dark paper + light ink. */
const PAPER_L_SPLIT = 0.52;
const PAPER_CHROMA_CAP = 0.025;

const FALLBACK_PAPER: WallpaperPaperTokens = {
    underlying: "#16161a",
    contrast: "#f7f7f8",
};

/** Last paper from a real photo luma — KMeans/cache must not flip it back to white ink. */
let lastLivePaper: WallpaperPaperTokens | null = null;

/** Cleared WebGL/resize frames sit near 0; a real black photo is still > this. */
const USABLE_LUMA_MIN = 0.03;

/** Token names written onto theme hosts (veela / wf-demo / ui-window). */
const SEED_PROPS = [
    ["--color-primary", "primary"],
    ["--color-secondary", "secondary"],
    ["--color-tertiary", "tertiary"],
    ["--base-color", "primary"],
    ["--wf-md-primary", "primary"],
    ["--wf-md-seed", "primary"],
    /* COMPAT: lure StyleRules / legacy --primary */
    ["--primary", "primary"],
    ["--secondary", "secondary"],
    ["--tertiary", "tertiary"],
] as const;

type OklchSample = {
    rgb: RgbTuple;
    hex: string;
    l: number;
    c: number;
    h: number;
};

const clamp = (n: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, n));

const hexOklch = (l: number, c: number, h: number, fallback: string): string =>
    formatHex({ mode: "oklch", l, c, h }) || fallback;

const rgbToSample = (rgb: RgbTuple): OklchSample | null => {
    const [r, g, b] = rgb;
    if (![r, g, b].every((n) => Number.isFinite(n))) return null;
    const hex = formatHex({ mode: "rgb", r, g, b });
    if (!hex) return null;
    const ok = oklch({ mode: "rgb", r, g, b });
    return {
        rgb,
        hex,
        l: ok?.l ?? 0.5,
        c: ok?.c ?? 0,
        h: ok?.h ?? 0,
    };
};

const paperLFromHex = (hex: string): number => oklch(hex)?.l ?? 0.4;

const haloForPaper = (darkPaper: boolean): { shadow: string; glow: string } =>
    darkPaper
        ? { shadow: "rgb(0 0 0 / 0.88)", glow: "rgb(0 0 0 / 0.45)" }
        : { shadow: "rgb(255 255 255 / 0.72)", glow: "rgb(255 255 255 / 0.35)" };

const isUsablePaperLuma = (luma: number): boolean =>
    Number.isFinite(luma) && luma >= USABLE_LUMA_MIN && luma <= 1;

/**
 * WHY: Paper is the wallpaper's non-chromatic base (dark vs light photo), not the accent seed.
 * Polarity comes from pixel luma (or brighter-of mean/median centroids). Lowest-chroma is hue
 * only — a black speck must not outvote a light sky (that stamped white ink after a correct flash).
 */
const deriveWallpaperPaperTokensFromSamples = (
    samples: OklchSample[],
    pixelLuma?: number
): WallpaperPaperTokens => {
    if (!samples.length && pixelLuma == null) return { ...FALLBACK_PAPER };
    const ls = samples.map((s) => s.l).sort((a, b) => a - b);
    const meanL = samples.length
        ? samples.reduce((sum, s) => sum + s.l, 0) / samples.length
        : (pixelLuma as number);
    const medianL = ls.length ? ls[Math.floor(ls.length / 2)]! : meanL;
    const paperL = clamp(
        pixelLuma != null && isUsablePaperLuma(pixelLuma) ? pixelLuma : Math.max(meanL, medianL),
        0.08,
        0.94
    );
    const paper = samples.length
        ? [...samples].sort(
              (a, b) => a.c - b.c || Math.abs(a.l - paperL) - Math.abs(b.l - paperL)
          )[0]!
        : null;
    const paperC = paper ? Math.min(PAPER_CHROMA_CAP, Math.max(0, paper.c * 0.2)) : 0;
    const h = paper?.h || 0;
    const darkPaper = paperL < PAPER_L_SPLIT;
    return {
        underlying: hexOklch(paperL, paperC, h, darkPaper ? FALLBACK_PAPER.underlying : "#e8e6e2"),
        contrast: hexOklch(darkPaper ? 0.93 : 0.16, 0.008, h, darkPaper ? FALLBACK_PAPER.contrast : "#141416"),
    };
};

/** Tiny downsample — same polarity as the statusbar canvas probe, without KMeans. */
const sampleImageMeanLuma = async (imgURL: string | Blob | File): Promise<number | null> => {
    try {
        const blob = imgURL instanceof Blob ? imgURL : await (await fetch(imgURL)).blob();
        if (!blob || blob.size <= 0) return null;
        const bitmap = await createImageBitmap(blob);
        const w = 48;
        const h = Math.max(1, Math.round((bitmap.height / Math.max(1, bitmap.width)) * w));
        const canvas =
            typeof OffscreenCanvas !== "undefined"
                ? new OffscreenCanvas(w, h)
                : Object.assign(document.createElement("canvas"), { width: w, height: h });
        if (!(canvas instanceof OffscreenCanvas)) {
            canvas.width = w;
            canvas.height = h;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            bitmap.close?.();
            return null;
        }
        ctx.drawImage(bitmap, 0, 0, w, h);
        bitmap.close?.();
        const data = ctx.getImageData(0, 0, w, h).data;
        let sum = 0;
        let n = 0;
        for (let i = 0; i < data.length; i += 16) {
            const a = data[i + 3] ?? 255;
            if (a < 16) continue;
            const r = data[i]! / 255;
            const g = data[i + 1]! / 255;
            const b = data[i + 2]! / 255;
            sum += 0.2126 * r + 0.7152 * g + 0.0722 * b;
            n++;
        }
        if (n < 8) return null;
        const luma = sum / n;
        return isUsablePaperLuma(luma) ? luma : null;
    } catch {
        return null;
    }
};

/** Fast luma path (statusbar canvas probe) — same token names as KMeans paper. */
export const deriveWallpaperPaperTokensFromLuma = (luma: number): WallpaperPaperTokens => {
    const darkPaper = luma <= PAPER_L_SPLIT;
    return darkPaper
        ? { ...FALLBACK_PAPER }
        : { underlying: "#e8e6e2", contrast: "#141416" };
};

const hasWallpaperPaper = (seeds: WallpaperThemeSeeds): seeds is WallpaperThemeSeeds & WallpaperPaperTokens =>
    Boolean(seeds.underlying && seeds.contrast);

/**
 * WHY: Hue-sorted KMeans often puts near-black first; UI accents need mid-L high-chroma
 * (nebula teal) as primary, then distinct secondary/tertiary clusters.
 */
export const rankWallpaperSeeds = (
    centroids: RgbTuple[],
    pixelLuma?: number
): WallpaperThemeSeeds | null => {
    const samples = centroids.map(rgbToSample).filter(Boolean) as OklchSample[];
    if (!samples.length) return null;

    const accentPool = samples
        .filter((s) => s.l >= 0.18 && s.l <= 0.88 && s.c >= 0.02)
        .sort((a, b) => b.c - a.c || Math.abs(b.l - 0.55) - Math.abs(a.l - 0.55));

    const pool = accentPool.length ? accentPool : [...samples].sort((a, b) => b.c - a.c);
    const primary = pool[0];
    if (!primary) return null;

    const hueDist = (a: number, b: number) => {
        const d = Math.abs(a - b) % 360;
        return d > 180 ? 360 - d : d;
    };

    const pickNext = (used: OklchSample[]): OklchSample => {
        const rest = pool.filter((s) => !used.includes(s));
        if (!rest.length) {
            /* Fallback: nudge lightness so secondary ≠ primary when only one cluster. */
            const base = used[used.length - 1] ?? primary;
            const nudged = formatHex({
                mode: "oklch",
                l: Math.min(0.85, Math.max(0.2, base.l + (used.length === 1 ? -0.12 : 0.1))),
                c: Math.max(0.04, base.c * 0.85),
                h: base.h,
            });
            return {
                ...base,
                hex: nudged || base.hex,
                l: base.l,
            };
        }
        const byHue = [...rest].sort(
            (a, b) =>
                Math.min(...used.map((u) => hueDist(b.h, u.h))) -
                    Math.min(...used.map((u) => hueDist(a.h, u.h))) || b.c - a.c
        );
        return byHue[0] ?? rest[0];
    };

    const secondary = pickNext([primary]);
    const tertiary = pickNext([primary, secondary]);
    const paper = deriveWallpaperPaperTokensFromSamples(samples, pixelLuma);

    return {
        primary: primary.hex,
        secondary: secondary.hex,
        tertiary: tertiary.hex,
        ...paper,
    };
};

export const themeHosts = (): HTMLElement[] => {
    const nodes = new Set<HTMLElement>();
    nodes.add(document.documentElement);
    document
        .querySelectorAll<HTMLElement>(".env-shell-root, .wf-demo-root, ui-window")
        .forEach((el) => nodes.add(el));
    return [...nodes];
};

const wallpaperSeedsMayPaint = (): boolean => {
    if (typeof document === "undefined") return true;
    const src = String(document.documentElement.dataset.colorSource || "");
    if (!src) return true;
    return src === "wallpaper" || src === "speed-dial" || src === "system-wallpaper";
};

const isValidColor = (color: string): boolean => Boolean(parse(color));

/**
 * INVARIANT: paper/ink follow the photo even when colorSource is Material You
 * (`--base-color` stays gated; labels/rail still sit on the wallpaper).
 */
export const applyWallpaperPaperTokens = (
    paper: WallpaperPaperTokens,
    extraHosts: Iterable<HTMLElement> = []
): void => {

    //
    if (typeof document === "undefined") return;
    const darkPaper = paperLFromHex(paper.underlying) < PAPER_L_SPLIT;
    const { shadow, glow } = haloForPaper(darkPaper);
    const hosts = new Set<HTMLElement>(themeHosts());
    for (const el of extraHosts) hosts.add(el);

    if (!isValidColor(paper.underlying)) return;
    if (!isValidColor(paper.contrast)) return;
    if (!isValidColor(shadow)) return;
    if (!isValidColor(glow)) return;

    registerColorProperty("--wallpaper-underlying-color", paper.underlying);
    registerColorProperty("--wallpaper-contrast-color", paper.contrast);
    registerColorProperty("--env-launcher-fg", paper.contrast);
    registerColorProperty("--env-launcher-fg-shadow", shadow);
    registerColorProperty("--env-launcher-fg-glow", glow);

    for (const host of hosts) {
        host.style.setProperty("--wallpaper-underlying-color", paper.underlying);
        host.style.setProperty("--wallpaper-contrast-color", paper.contrast);
        host.style.setProperty("--env-launcher-fg", paper.contrast);
        host.style.setProperty("--env-launcher-fg-shadow", shadow);
        host.style.setProperty("--env-launcher-fg-glow", glow);
    }

    const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
    globalQuery.style.setProperty("--wallpaper-underlying-color", paper.underlying);
    globalQuery.style.setProperty("--wallpaper-contrast-color", paper.contrast);
    globalQuery.style.setProperty("--env-launcher-fg", paper.contrast);
    globalQuery.style.setProperty("--env-launcher-fg-shadow", shadow);
    globalQuery.style.setProperty("--env-launcher-fg-glow", glow);
};


//
export const registerColorProperty = (name: string, initialValue: string = "#5a9ec8")=>{
    try {
        CSS?.registerProperty?.({
            name,
            syntax: "<color>",
            inherits: true,
            initialValue,
        });
    } catch (error) {
        console.debug(error);
    }
}

const persistLivePaper = (paper: WallpaperPaperTokens): void => {
    try {
        const cached = loadCachedWallpaperTheme();
        if (!cached) return;
        localStorage.setItem(
            THEME_STORAGE_KEY,
            JSON.stringify({ ...cached, underlying: paper.underlying, contrast: paper.contrast })
        );
    } catch {
        /* ignore quota / private mode */
    }
};

/** Early paint from canvas luma — KMeans/cache may not overwrite this polarity. */
export const applyWallpaperPaperFromLuma = (
    luma: number,
    extraHosts: Iterable<HTMLElement> = []
): WallpaperPaperTokens => {
    if (!isUsablePaperLuma(luma)) {
        if (lastLivePaper) {
            applyWallpaperPaperTokens(lastLivePaper, extraHosts);
            return lastLivePaper;
        }
        /* WHY: empty/cleared buffer — do not stamp FALLBACK white ink over a light photo. */
        return { ...FALLBACK_PAPER };
    }
    const paper = deriveWallpaperPaperTokensFromLuma(luma);
    lastLivePaper = paper;
    applyWallpaperPaperTokens(paper, extraHosts);
    persistLivePaper(paper);
    return paper;
};

export const applyWallpaperThemeSeeds = (seeds: WallpaperThemeSeeds): void => {
    /* INVARIANT: live photo luma wins paper/ink; seeds still own Material You accents. */
    const next = lastLivePaper ? { ...seeds, ...lastLivePaper } : seeds;
    try {
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(next));
        localStorage.setItem(PRIMARY_STORAGE_KEY, next.primary);
    } catch {
        /* ignore quota / private mode */
    }
    /* WHY: old cache without paper must not stamp light ink over a light photo. */
    if (hasWallpaperPaper(next)) applyWallpaperPaperTokens(next);
    /* WHY: Material You / custom must keep `--base-color`; cache extract for later. */
    if (!wallpaperSeedsMayPaint()) return;
    for (const host of themeHosts()) {
        for (const [prop, key] of SEED_PROPS) {
            host.style.setProperty(prop, next[key]);
        }
    }
    
    if (!isValidColor(next.primary)) return;
    if (!isValidColor(next.secondary)) return;
    if (!isValidColor(next.tertiary)) return;

    /* Late-mounted views inherit :root; stamp open roots for shadow isolation. */
    document
        .querySelectorAll<HTMLElement>(
            "body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host"
        )
        .forEach((el) => {
            el.style.setProperty("--color-primary", next.primary);
            el.style.setProperty("--base-color", next.primary);
            el.style.setProperty("--color-secondary", next.secondary);
            el.style.setProperty("--color-tertiary", next.tertiary);
        });

    //
    const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
    globalQuery.style.setProperty("--color-primary", next.primary);
    globalQuery.style.setProperty("--base-color", next.primary);
    globalQuery.style.setProperty("--color-secondary", next.secondary);
    globalQuery.style.setProperty("--color-tertiary", next.tertiary);

    //
    document.dispatchEvent(
        new CustomEvent("u2-theme-change", { detail: { source: "wallpaper", seeds: next } })
    );
};

export const loadCachedWallpaperTheme = (): WallpaperThemeSeeds | null => {
    try {
        const raw = localStorage.getItem(THEME_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as WallpaperThemeSeeds;
        if (!parsed?.primary || !parsed?.secondary || !parsed?.tertiary) return null;
        return parsed;
    } catch {
        return null;
    }
};

/**
 * Extract dominant colors from wallpaper URL/Blob/data-URL and write CSS seeds.
 * INVARIANT: surfaces stay `--u2-color-mod(var(--base-color), N)`; only hue seeds change.
 */
export const applyThemeFromWallpaper = async (
    imgURL: string | Blob | File,
    opts?: { force?: boolean }
): Promise<WallpaperThemeSeeds | null> => {
    const srcKey =
        typeof imgURL === "string"
            ? imgURL.slice(0, 2048)
            : `blob:${(imgURL as File).name || "wallpaper"}:${(imgURL as Blob).size}`;

    const liveLuma = await sampleImageMeanLuma(imgURL);
    if (liveLuma != null) applyWallpaperPaperFromLuma(liveLuma);

    if (!opts?.force) {
        try {
            if (localStorage.getItem(WALLPAPER_URL_KEY) === srcKey) {
                const cached = loadCachedWallpaperTheme();
                if (cached) {
                    applyWallpaperThemeSeeds(cached);
                    return lastLivePaper ? { ...cached, ...lastLivePaper } : cached;
                }
            }
        } catch {
            /* continue extract */
        }
    }

    try {
        const centroids = (await getDominantColors(imgURL)) as RgbTuple[];
        const seeds = rankWallpaperSeeds(centroids, liveLuma ?? undefined);
        if (!seeds) return null;
        applyWallpaperThemeSeeds(seeds);
        try {
            localStorage.setItem(WALLPAPER_URL_KEY, srcKey);
        } catch {
            /* ignore */
        }
        return lastLivePaper ? { ...seeds, ...lastLivePaper } : seeds;
    } catch (err) {
        console.warn("[fest/image] applyThemeFromWallpaper failed", err);
        const cached = loadCachedWallpaperTheme();
        if (cached) {
            applyWallpaperThemeSeeds(cached);
            return cached;
        }
        return null;
    }
};

/** Cold-start: restore last seeds before async re-extract finishes. */
export const restoreWallpaperThemeCache = (): WallpaperThemeSeeds | null => {
    const cached = loadCachedWallpaperTheme();
    if (cached) applyWallpaperThemeSeeds(cached);
    return cached;
};
