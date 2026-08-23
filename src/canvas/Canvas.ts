/*
 * Filename: Canvas.ts
 * FullPath: modules/projects/image.ts/src/canvas/Canvas.ts
 * Change date and time: 23.10.00_23.08.2026
 * Reason for changes: Skip 404 wallpaper fetch/decode — CRX missing /assets/wallpaper.jpg threw on open.
 */
import { makeRAFCycle } from "@fest-lib/dom";

//
const blobImageMap = new WeakMap(), delayed = new Map<number, Function | null>([]);
const sheduler = makeRAFCycle();
/** PERF: CRX often has no /assets/wallpaper.jpg — do not refetch/decode a known miss. */
const failedWallpaperSrc = new Set<string>();

//
const getImgWidth = (img)=>{
    return img?.naturalWidth || img?.width || 1;
}

//
const getImgHeight = (img)=>{
    return img?.naturalHeight || img?.height || 1;
}

/**
 * WHY: Chromium often rejects `rec2100-hlg` / `rec2100-pq` as PredefinedColorSpace.
 * A bare throw aborts ui-canvas init (no ctx, no ResizeObserver) → blank wallpaper.
 * INVARIANT: always return a usable 2d context when the browser allows any.
 */
const create2dContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D | null => {
    const base: CanvasRenderingContext2DSettings = {
        alpha: true,
        desynchronized: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
    };
    for (const colorSpace of ["rec2100-hlg", "display-p3", "srgb"] as const) {
        try {
            const ctx = canvas.getContext("2d", { ...base, colorSpace });
            if (ctx) return ctx;
        } catch {
            /* unsupported colorSpace enum */
        }
    }
    try {
        return canvas.getContext("2d", base);
    } catch {
        return canvas.getContext("2d");
    }
};

//
export const callByFrame = (pointerId, cb)=>{ delayed.set(pointerId, cb); }
export const cover = (ctx, img, scale = 1, port, orient = 0) => {
    const canvas = ctx.canvas;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((-orient || 0) * (Math.PI * 0.5));
    ctx.rotate((1 - port) * (Math.PI / 2));
    ctx.translate(-(getImgWidth(img) / 2) * scale, -(getImgHeight(img) / 2) * scale);
};

//
export const createImageBitmapCache = (blob)=>{
    if (!blobImageMap.has(blob) && (blob instanceof Blob || blob instanceof File || blob instanceof OffscreenCanvas || blob instanceof ImageBitmap || blob instanceof Image)) {
        // WHY: do not cache a rejected promise forever — first decode race would stick.
        const pending = createImageBitmap(blob).catch((err) => {
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
 */
const bindCached = (cb, ctx) => {
    const cached = bindCache.get(cb);
    if (typeof cached === "function") return cached;
    const bound = cb.bind(ctx);
    bindCache.set(cb, bound);
    return bound;
};

//
let UICanvas: any = null;
if (typeof HTMLCanvasElement != "undefined") {
    UICanvas = class UICanvas extends HTMLCanvasElement {
        /* COMPAT: `fixOrientToScreen` / hosts may set `orient`; SpeedDial / Canvas-2 use `data-orient`. */
        static observedAttributes = ["data-src", "data-orient", "orient"];

        //
        ctx: CanvasRenderingContext2D | null = null;
        image: ImageBitmap | null = null;
        #size: [number, number] = [1, 1];
        #loading: string | Blob | File = "";
        #ready: string | Blob | File = "";

        //
        get #orient() {
            const raw = this.getAttribute("data-orient") ?? this.getAttribute("orient") ?? "0";
            const n = Number.parseInt(raw, 10);
            return Number.isFinite(n) ? n : 0;
        }
        set #orient(value: number) {
            const s = String(value);
            this.setAttribute("data-orient", s);
            this.setAttribute("orient", s);
        }

        //
        attributeChangedCallback(name, _, newValue) {
            if (name == "data-src") { this.#preload(newValue); };
            if (name == "data-orient" || name == "orient") { this.#render(this.#ready); };
        }

        //
        connectedCallback() {
            const parent: HTMLElement = this.parentNode as HTMLElement;
            this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))");
            this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))");
            this.#size = [ // @ts-ignore
                Math.min(Math.min(Math.max(this.clientWidth || parent?.clientWidth || 1, 1), parent?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), // @ts-ignore
                Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)
            ];
            this.#preload(this.#loading = this.dataset.src || this.#loading);
            // WHY: late connect after orient attr was set before CE upgrade — force one paint pass.
            if (this.image) this.#render(this.#ready);
        }

        //
        constructor() {
            super();

            //
            const canvas = this as HTMLCanvasElement;
            const parent = this.parentNode as HTMLElement;

            //
            const fixSize = () => {
                const old = this.#size;
                this.#size = [ // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientWidth || parent?.clientWidth || 1, 1), parent?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)
                ];

                //
                if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                    this.#render(this.#ready);
                }
            }

            //
            sheduler?.shedule?.(() => {
                this.ctx = create2dContext(canvas);
                try {
                    this.ctx?.configureHighDynamicRange?.({ mode: "extended" });
                    canvas?.configureHighDynamicRange?.({ mode: "extended" });
                } catch {
                    /* HDR optional */
                }

                //
                this.inert = true;
                this.style.objectFit = "cover";
                this.style.objectPosition = "center";
                this.classList.add("u-canvas");
                this.classList.add("u2-canvas");
                this.classList.add("ui-canvas");

                //
                this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))");
                this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))");
                this.style.setProperty("dynamic-range-limit", "no-limit");
                this.style.setProperty("color-space", "display-p3");
                this.style.setProperty("background-color", "black", "important");
                this.style.setProperty("opacity", "1", "important");

                //
                fixSize();

                //
                new ResizeObserver((entries) => {
                    for (const entry of entries) {
                        const box = entry?.devicePixelContentBoxSize?.[0];
                        if (box) {
                            const old = this.#size;
                            this.#size = [ // @ts-ignore
                                Math.max(/*contentBox.inlineSize * devicePixelRatio*/box.inlineSize || this.width, 1),
                                Math.max(/*contentBox.blockSize  * devicePixelRatio*/box.blockSize || this.height, 1)
                            ];
                            if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                                this.#render(this.#ready);
                            }
                        }
                    }
                }).observe(this, { box: "device-pixel-content-box" });

                // WHY: data-src / connectedCallback may have finished preload before ctx existed.
                this.#preload(this.#loading = this.dataset.src || this.#loading);
                if (this.image) this.#render(this.#ready || this.#loading);
            });
        }

        //
        async $useImageAsSource(blob, ready?: any | null) {
            ready ||= this.#loading;
            const img = (blob instanceof ImageBitmap) ? blob : (await createImageBitmapCache(blob).catch(console.warn.bind(console)));
            if (img && ready == this.#loading) { this.image = img; this.#render(ready); }
            return blob;
        }

        //
        $renderPass(whatIsReady?: File | Blob | string) {
            const canvas = this, ctx = this.ctx, img = this.image;
            if (img && ctx && (whatIsReady == this.#loading || !whatIsReady)) {
                if (whatIsReady) { this.#ready = whatIsReady; };
                if (this.width != this.#size[0]) { this.width = this.#size[0]; };
                if (this.height != this.#size[1]) { this.height = this.#size[1]; };
                this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
                //this.style.containIntrinsicInlineSize = `${this.width  || 1}px`;
                //this.style.containIntrinsicBlockSize  = `${this.height || 1}px`;

                //
                const ox = (this.#orient % 2) || 0;
                const port = getImgWidth(img) <= getImgHeight(img) ? 1 : 0;
                const scale = Math.max(
                    canvas[["height", "width"][ox]] / (port ? getImgHeight(img) : getImgWidth(img)),
                    canvas[["width", "height"][ox]] / (port ? getImgWidth(img) : getImgHeight(img))
                );

                //
                ctx.save();
                ctx.clearRect(0, 0, canvas.width, canvas.height); cover(ctx, img, scale, port, this.#orient);
                ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
                ctx.restore();
            }
        }

        //
        #preload(src) {
            const ready = src || this.#loading;
            this.#loading = ready;
            if (!ready || typeof ready !== "string") return Promise.resolve();
            if (failedWallpaperSrc.has(ready)) return Promise.resolve();
            return fetch(ready, {
                cache: "force-cache",
                mode: "same-origin",
            })?.then?.(async (rsp) => {
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
        }
        #render(whatIsReady?: File | Blob | string) {
            const ctx = this.ctx, img = this.image;
            if (img && ctx && (whatIsReady == this.#loading || !whatIsReady)) { sheduler?.shedule?.(bindCached(this.$renderPass, this)); }
        }
    }
} else {
    UICanvas = class UICanvas {
        constructor() { }
        $renderPass(whatIsReady?: File | Blob | string) { }
        $useImageAsSource(blob, ready?: any | null) { return blob; }
        #preload(src) { return Promise.resolve(); }
        #render(whatIsReady?: File | Blob | string) { }
        #orient: number = 0;
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
