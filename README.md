# Image.TS

`@fest-lib/image` — orientation-aware wallpaper / canvas paint plus K-Means theme extraction for Veela tokens (`--color-primary` / secondary / tertiary).

Caches the last wallpaper URL and seed colors so a reload can skip re-clustering.

## Install

```bash
npm install @fest-lib/image
```

```ts
import {
  applyThemeFromWallpaper,
  setAppWallpaper,
  syncAppWallpaperOrient
} from "@fest-lib/image";

await setAppWallpaper(url);
await applyThemeFromWallpaper(url);
syncAppWallpaperOrient();
```

## Layout

| Path | Role |
| --- | --- |
| `src/engine/KMean.ts` | dominant colors |
| `src/engine/WallpaperTheme.ts` | seeds → theme hosts |
| `src/canvas/Canvas.ts` | cover/orient paint |
| `src/canvas/Canvas-2.ts` | app wallpaper layer + IDB |

Peers: `@fest-lib/core`, `dom`, `object`, `lure`. Build: `npm run build`. Publish: `npm run publish`.
