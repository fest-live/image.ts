<p align="center">
  <strong>@fest-lib/image</strong><br>
  Orientation-aware wallpaper canvas + K-Means seeds for Veela (<code>--color-primary</code> / secondary / tertiary).
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@fest-lib/image"><img src="https://img.shields.io/npm/v/@fest-lib/image?style=flat-square" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@fest-lib/image?style=flat-square" alt="MIT"></a>
  <a href="https://github.com/fest-live/image.ts"><img src="https://img.shields.io/github/stars/fest-live/image.ts?style=flat-square" alt="stars"></a>
</p>

Caches the last wallpaper URL and seed colors so a reload can skip re-clustering. Paint target: `[data-app-layer="canvas"] canvas[is="ui-canvas"]`.

```text
core · dom · object · lure
 └── fest/image       ← you are here
      └── shell wallpaper · Material You seed
```

## Install

```bash
npm install @fest-lib/core @fest-lib/dom @fest-lib/object @fest-lib/lure @fest-lib/image
```

Peers: `core`, `dom`, `object`, `lure`. Also uses `culori`.

```ts
import {
    setAppWallpaper,
    setAppWallpaperFromBlob,
    applyThemeFromWallpaper,
    syncAppWallpaperOrient
} from "@fest-lib/image";

setAppWallpaper("/wallpapers/desk.jpg");
await applyThemeFromWallpaper("/wallpapers/desk.jpg");
syncAppWallpaperOrient();

await setAppWallpaperFromBlob(file); // Blob | File
```

`setAppWallpaper(url)` is sync at the call site (persist + theme run in the background). `applyThemeFromWallpaper(url, { force: true })` re-clusters even if the URL matches the cache.

## Layout

| Path | Role |
| --- | --- |
| `src/engine/KMean.ts` | dominant colors |
| `src/engine/WallpaperTheme.ts` | seeds → theme hosts |
| `src/canvas/Canvas.ts` | cover / orient paint |
| `src/canvas/Canvas-2.ts` | app wallpaper layer + IDB |

Do not rewrite K-Means or the Canvas-2 paint path unless that is the task — they are the SoT for shell wallpaper.

## Workspace

```bash
cd modules/projects/image.ts
npm run dev
npm run build
npm run publish
```

License: [MIT](LICENSE).
