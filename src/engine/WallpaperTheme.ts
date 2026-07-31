/*
 * Filename: WallpaperTheme.ts
 * FullPath: modules/projects/image.ts/src/engine/WallpaperTheme.ts
 * Change date and time: 16.40.00_31.07.2026
 * Reason for changes: Derive --color-primary/secondary/tertiary from wallpaper KMeans.
 */

import { formatHex, oklch } from "culori";
import { getDominantColors } from "./KMean.js";

export type RgbTuple = [number, number, number];

export type WallpaperThemeSeeds = {
    primary: string;
    secondary: string;
    tertiary: string;
};

/** Persisted JSON `{ primary, secondary, tertiary }` from last wallpaper extract. */
export const WALLPAPER_THEME_STORAGE_KEY = "rs-wallpaper-theme";
/** Convenience: last primary hex alone (for quick reads / debugging). */
export const WALLPAPER_PRIMARY_STORAGE_KEY = "rs-wallpaper-primary";
/** Wallpaper URL/data-URL key that produced the cached theme (skip re-KMeans when unchanged). */
export const WALLPAPER_THEME_SRC_STORAGE_KEY = "rs-wallpaper-theme-src";

const THEME_STORAGE_KEY = WALLPAPER_THEME_STORAGE_KEY;
const PRIMARY_STORAGE_KEY = WALLPAPER_PRIMARY_STORAGE_KEY;
const WALLPAPER_URL_KEY = WALLPAPER_THEME_SRC_STORAGE_KEY;

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

/**
 * WHY: Hue-sorted KMeans often puts near-black first; UI accents need mid-L high-chroma
 * (nebula teal) as primary, then distinct secondary/tertiary clusters.
 */
export const rankWallpaperSeeds = (centroids: RgbTuple[]): WallpaperThemeSeeds | null => {
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

    return {
        primary: primary.hex,
        secondary: secondary.hex,
        tertiary: tertiary.hex,
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

export const applyWallpaperThemeSeeds = (seeds: WallpaperThemeSeeds): void => {
    for (const host of themeHosts()) {
        for (const [prop, key] of SEED_PROPS) {
            host.style.setProperty(prop, seeds[key]);
        }
    }
    /* Late-mounted views inherit :root; stamp open roots for shadow isolation. */
    document
        .querySelectorAll<HTMLElement>(
            ".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings']"
        )
        .forEach((el) => {
            el.style.setProperty("--color-primary", seeds.primary);
            el.style.setProperty("--base-color", seeds.primary);
            el.style.setProperty("--color-secondary", seeds.secondary);
            el.style.setProperty("--color-tertiary", seeds.tertiary);
        });
    try {
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(seeds));
        localStorage.setItem(PRIMARY_STORAGE_KEY, seeds.primary);
    } catch {
        /* ignore quota / private mode */
    }
    document.dispatchEvent(
        new CustomEvent("u2-theme-change", { detail: { source: "wallpaper", seeds } })
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

    if (!opts?.force) {
        try {
            if (localStorage.getItem(WALLPAPER_URL_KEY) === srcKey) {
                const cached = loadCachedWallpaperTheme();
                if (cached) {
                    applyWallpaperThemeSeeds(cached);
                    return cached;
                }
            }
        } catch {
            /* continue extract */
        }
    }

    try {
        const centroids = (await getDominantColors(imgURL)) as RgbTuple[];
        const seeds = rankWallpaperSeeds(centroids);
        if (!seeds) return null;
        applyWallpaperThemeSeeds(seeds);
        try {
            localStorage.setItem(WALLPAPER_URL_KEY, srcKey);
        } catch {
            /* ignore */
        }
        return seeds;
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
