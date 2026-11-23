import { Q as Lr } from "@fest-lib/lure";
import { setStyleProperty as E } from "@fest-lib/style-lib";
import { getCorrectOrientation as Ia, makeRAFCycle as Wa, orientationNumberMap as Na, whenAnyScreenChanges as La } from "@fest-lib/dom";
var _o = "electronBridge", zo = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, Rr = (e, t) => {
  if (typeof e == "number") {
    if (t === 3) return {
      mode: "rgb",
      r: (e >> 8 & 15 | e >> 4 & 240) / 255,
      g: (e >> 4 & 15 | e & 240) / 255,
      b: (e & 15 | e << 4 & 240) / 255
    };
    if (t === 4) return {
      mode: "rgb",
      r: (e >> 12 & 15 | e >> 8 & 240) / 255,
      g: (e >> 8 & 15 | e >> 4 & 240) / 255,
      b: (e >> 4 & 15 | e & 240) / 255,
      alpha: (e & 15 | e << 4 & 240) / 255
    };
    if (t === 6) return {
      mode: "rgb",
      r: (e >> 16 & 255) / 255,
      g: (e >> 8 & 255) / 255,
      b: (e & 255) / 255
    };
    if (t === 8) return {
      mode: "rgb",
      r: (e >> 24 & 255) / 255,
      g: (e >> 16 & 255) / 255,
      b: (e >> 8 & 255) / 255,
      alpha: (e & 255) / 255
    };
  }
}, Ra = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Ha = (e) => Rr(Ra[e.toLowerCase()], 6), qa = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Oa = (e) => {
  let t;
  return (t = e.match(qa)) ? Rr(parseInt(t[1], 16), t[1].length) : void 0;
}, N = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", ce = `${N}%`, Et = `(?:${N}%|${N})`, Ba = `(?:${N}%|${N}|none)`, Da = `(?:${N}(deg|grad|rad|turn)|${N})`, V = "\\s*,\\s*", To = new RegExp("^" + Ba + "$"), Xa = new RegExp(`^rgba?\\(\\s*${N}${V}${N}${V}${N}\\s*(?:,\\s*${Et}\\s*)?\\)$`), Fa = new RegExp(`^rgba?\\(\\s*${ce}${V}${ce}${V}${ce}\\s*(?:,\\s*${Et}\\s*)?\\)$`), ja = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(Xa))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(Fa))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, Ya = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Br(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, It = (e = "rgb") => (t) => (t = Ya(t, e)) !== void 0 ? t.mode === e ? t : I[t.mode][e] ? I[t.mode][e](t) : e === "rgb" ? I[t.mode].rgb(t) : I.rgb[e](I[t.mode].rgb(t)) : void 0, I = {}, Hr = {}, Me = [], qr = {}, Za = (e) => e, b = (e) => (I[e.mode] = {
  ...I[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  I[t] || (I[t] = {}), I[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Za);
}), Hr[e.mode] = e, (e.parse || []).forEach((t) => {
  Ka(t, e.mode);
}), It(e.mode)), Ja = (e) => Hr[e], Ka = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    qr[e] = t;
  } else typeof e == "function" && Me.indexOf(e) < 0 && Me.push(e);
}, yt = /[^\x00-\x7F]|[a-zA-Z_]/, Ga = /[^\x00-\x7F]|[-\w]/, s = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, p = 0;
function me(e) {
  let t = e[p], r = e[p + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[p + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function Mt(e) {
  if (p >= e.length) return !1;
  let t = e[p];
  if (yt.test(t)) return !0;
  if (t === "-") {
    if (e.length - p < 2) return !1;
    let r = e[p + 1];
    return !!(r === "-" || yt.test(r));
  }
  return !1;
}
var Ua = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function le(e) {
  let t = "";
  if ((e[p] === "-" || e[p] === "+") && (t += e[p++]), t += ge(e), e[p] === "." && /\d/.test(e[p + 1]) && (t += e[p++] + ge(e)), (e[p] === "e" || e[p] === "E") && ((e[p + 1] === "-" || e[p + 1] === "+") && /\d/.test(e[p + 2]) ? t += e[p++] + e[p++] + ge(e) : /\d/.test(e[p + 1]) && (t += e[p++] + ge(e))), Mt(e)) {
    let r = we(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * Ua[r]
    } : void 0;
  }
  return e[p] === "%" ? (p++, {
    type: s.Percentage,
    value: +t
  }) : {
    type: s.Number,
    value: +t
  };
}
function ge(e) {
  let t = "";
  for (; /\d/.test(e[p]); ) t += e[p++];
  return t;
}
function we(e) {
  let t = "";
  for (; p < e.length && Ga.test(e[p]); ) t += e[p++];
  return t;
}
function Qa(e) {
  let t = we(e);
  return e[p] === "(" ? (p++, {
    type: s.Function,
    value: t
  }) : t === "none" ? {
    type: s.None,
    value: void 0
  } : {
    type: s.Ident,
    value: t
  };
}
function Va(e = "") {
  let t = e.trim(), r = [], a;
  for (p = 0; p < t.length; ) {
    if (a = t[p++], a === `
` || a === "	" || a === " ") {
      for (; p < t.length && (t[p] === `
` || t[p] === "	" || t[p] === " "); ) p++;
      continue;
    }
    if (a === ",") return;
    if (a === ")") {
      r.push({ type: s.ParenClose });
      continue;
    }
    if (a === "+") {
      if (p--, me(t)) {
        r.push(le(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (p--, me(t)) {
        r.push(le(t));
        continue;
      }
      if (Mt(t)) {
        r.push({
          type: s.Ident,
          value: we(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (p--, me(t)) {
        r.push(le(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; p < t.length && (t[p] === `
` || t[p] === "	" || t[p] === " "); ) p++;
      let i;
      if (me(t) && (i = le(t), i.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: i
        });
        continue;
      }
      if (Mt(t) && we(t) === "none") {
        r.push({
          type: s.Alpha,
          value: {
            type: s.None,
            value: void 0
          }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(a)) {
      p--, r.push(le(t));
      continue;
    }
    if (yt.test(a)) {
      p--, r.push(Qa(t));
      continue;
    }
    return;
  }
  return r;
}
function ei(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = qr[t.value];
  if (!r) return;
  const a = { mode: r }, i = Or(e, !1);
  if (!i) return;
  const n = Ja(r).channels;
  for (let o = 0, l, c; o < n.length; o++)
    l = i[o], c = n[o], l.type !== s.None && (a[c] = l.type === s.Number ? l.value : l.value / 100, c === "alpha" && (a[c] = Math.max(0, Math.min(1, a[c]))));
  return a;
}
function Or(e, t) {
  const r = [];
  let a;
  for (; e._i < e.length; ) {
    if (a = e[e._i++], a.type === s.None || a.type === s.Number || a.type === s.Alpha || a.type === s.Percentage || t && a.type === s.Hue) {
      r.push(a);
      continue;
    }
    if (a.type === s.ParenClose) {
      if (e._i < e.length) return;
      continue;
    }
    return;
  }
  if (!(r.length < 3 || r.length > 4)) {
    if (r.length === 4) {
      if (r[3].type !== s.Alpha) return;
      r[3] = r[3].value;
    }
    return r.length === 3 && r.push({
      type: s.None,
      value: void 0
    }), r.every((i) => i.type !== s.Alpha) ? r : void 0;
  }
}
function ti(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = Or(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var Br = (e) => {
  if (typeof e != "string") return;
  const t = Va(e), r = t ? ti(t, !0) : void 0;
  let a, i = 0, n = Me.length;
  for (; i < n; ) if ((a = Me[i++](e, r)) !== void 0) return a;
  return t ? ei(t) : void 0;
};
function ri(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value / 255 : n.value / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var ai = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, ii = (e, t, r) => e + r * (t - e), ni = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, oi = (e) => (t) => {
  let r = ni(t);
  return (a) => {
    let i = a * r.length, n = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), o = r[n];
    return o === void 0 ? void 0 : e(o[0], o[1], i - n);
  };
}, u = oi(ii), x = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, ee = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    ri,
    Oa,
    ja,
    Ha,
    ai,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: u,
    g: u,
    b: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  gamut: !0,
  white: {
    r: 1,
    g: 1,
    b: 1
  },
  black: {
    r: 0,
    g: 0,
    b: 0
  }
}, Ge = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), lr = (e) => {
  let t = Ge(e.r), r = Ge(e.g), a = Ge(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ue = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), sr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: Ue(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Ue(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Ue(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Qe = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, te = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: Qe(e),
    g: Qe(t),
    b: Qe(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Z = (e) => {
  let { r: t, g: r, b: a, alpha: i } = te(e), n = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Ve = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, re = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let n = {
    mode: i,
    r: Ve(e),
    g: Ve(t),
    b: Ve(r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, J = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = re({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, li = {
  ...ee,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => sr(Z(e)),
    xyz65: sr
  },
  toMode: {
    rgb: (e) => J(lr(e)),
    xyz65: lr
  }
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, si = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let n = _(r);
  return a === 0 || e[a - 1] === void 0 ? n : t(n - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), L = (e) => si(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), P = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], ci = Math.PI / 180, hi = 180 / Math.PI, cr = P[3] * P[4], hr = P[1] * P[4], ur = P[1] * P[2] - P[0] * P[3], ui = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (ur * r + e * cr - t * hr) / (ur + cr - hr), n = r - i, o = (P[4] * (t - i) - P[2] * n) / P[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(n * n + o * o) / (P[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(o, n) * hi - 120), a !== void 0 && (l.alpha = a), l;
}, di = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * ci, r === void 0 && (r = 0);
  let n = t === void 0 ? 0 : t * r * (1 - r), o = Math.cos(e), l = Math.sin(e);
  return i.r = r + n * (P[0] * o + P[1] * l), i.g = r + n * (P[2] * o + P[3] * l), i.b = r + n * (P[4] * o + P[5] * l), a !== void 0 && (i.alpha = a), i;
}, Ce = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, vi = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, Ee = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, R = (e) => {
  let t = e.reduce((a, i) => {
    if (i !== void 0) {
      let n = i * Math.PI / 180;
      a.sin += Math.sin(n), a.cos += Math.cos(n);
    }
    return a;
  }, {
    sin: 0,
    cos: 0
  }), r = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return r < 0 ? 360 + r : r;
}, pi = {
  mode: "cubehelix",
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  parse: ["--cubehelix"],
  serialize: "--cubehelix",
  ranges: {
    h: [0, 360],
    s: [0, 4.614],
    l: [0, 1]
  },
  fromMode: { rgb: ui },
  toMode: { rgb: di },
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    s: u,
    l: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ce },
  average: { h: R }
}, q = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.sqrt(t * t + r * r), o = {
    mode: i,
    l: e,
    c: n
  };
  return n && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, O = ({ l: e, c: t, h: r, alpha: a }, i = "lab") => {
  r === void 0 && (r = 0);
  let n = {
    mode: i,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (n.alpha = a), n;
}, Dr = Math.pow(29, 3) / Math.pow(3, 3), Xr = Math.pow(6, 3) / Math.pow(29, 3), w = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, U = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, $o = Math.pow(29, 3) / Math.pow(3, 3), Ao = Math.pow(6, 3) / Math.pow(29, 3), et = (e) => Math.pow(e, 3) > Xr ? Math.pow(e, 3) : (116 * e - 16) / Dr, Fr = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, n = t / 500 + i, o = i - r / 200, l = {
    mode: "xyz65",
    x: et(n) * U.X,
    y: et(i) * U.Y,
    z: et(o) * U.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ie = (e) => J(Fr(e)), tt = (e) => e > Xr ? Math.cbrt(e) : (Dr * e + 16) / 116, jr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = tt(e / U.X), n = tt(t / U.Y), o = tt(r / U.Z), l = {
    mode: "lab65",
    l: 116 * n - 16,
    a: 500 * (i - n),
    b: 200 * (n - o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, We = (e) => {
  let t = jr(Z(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ue = 26 / 180 * Math.PI, xe = Math.cos(ue), ke = Math.sin(ue), Yr = 100 / Math.log(139 / 100), wt = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / Yr) - 1) / 39e-4
  }, n = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, o = n * Math.cos(r / 180 * Math.PI - ue), l = n * Math.sin(r / 180 * Math.PI - ue);
  return i.a = o * xe - l / 0.83 * ke, i.b = o * ke + l / 0.83 * xe, a !== void 0 && (i.alpha = a), i;
}, xt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * xe + r * ke, n = 0.83 * (r * xe - t * ke), o = Math.sqrt(i * i + n * n), l = {
    mode: "dlch",
    l: Yr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(n, i) + ue) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, dr = (e) => wt(q(e, "dlch")), vr = (e) => O(xt(e), "dlab"), fi = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: dr,
    rgb: (e) => Ie(dr(e))
  },
  fromMode: {
    lab65: vr,
    rgb: (e) => vr(We(e))
  },
  channels: [
    "l",
    "a",
    "b",
    "alpha"
  ],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, mi = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: wt,
    dlab: (e) => O(e, "dlab"),
    rgb: (e) => Ie(wt(e))
  },
  fromMode: {
    lab65: xt,
    dlab: (e) => q(e, "dlch"),
    rgb: (e) => xt(We(e))
  },
  channels: [
    "l",
    "c",
    "h",
    "alpha"
  ],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: u,
    c: u,
    h: {
      use: u,
      fixup: L
    },
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ee },
  average: { h: R }
};
function gi({ h: e, s: t, i: r, alpha: a }) {
  e = _(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.abs(e / 60 % 2 - 1), n;
  switch (Math.floor(e / 60)) {
    case 0:
      n = {
        r: r * (1 + t * (3 / (2 - i) - 1)),
        g: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        b: r * (1 - t)
      };
      break;
    case 1:
      n = {
        r: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        g: r * (1 + t * (3 / (2 - i) - 1)),
        b: r * (1 - t)
      };
      break;
    case 2:
      n = {
        r: r * (1 - t),
        g: r * (1 + t * (3 / (2 - i) - 1)),
        b: r * (1 + t * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    case 3:
      n = {
        r: r * (1 - t),
        g: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        b: r * (1 + t * (3 / (2 - i) - 1))
      };
      break;
    case 4:
      n = {
        r: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 / (2 - i) - 1))
      };
      break;
    case 5:
      n = {
        r: r * (1 + t * (3 / (2 - i) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    default:
      n = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return n.mode = "rgb", a !== void 0 && (n.alpha = a), n;
}
function bi({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * n / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var yi = {
  mode: "hsi",
  toMode: { rgb: gi },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: bi },
  channels: [
    "h",
    "s",
    "i",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    s: u,
    i: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ce },
  average: { h: R }
};
function Mi({ h: e, s: t, l: r, alpha: a }) {
  e = _(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = r + t * (r < 0.5 ? r : 1 - r), n = i - (i - r) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: i,
        g: n,
        b: 2 * r - i
      };
      break;
    case 1:
      o = {
        r: n,
        g: i,
        b: 2 * r - i
      };
      break;
    case 2:
      o = {
        r: 2 * r - i,
        g: i,
        b: n
      };
      break;
    case 3:
      o = {
        r: 2 * r - i,
        g: n,
        b: i
      };
      break;
    case 4:
      o = {
        r: n,
        g: 2 * r - i,
        b: i
      };
      break;
    case 5:
      o = {
        r: i,
        g: 2 * r - i,
        b: n
      };
      break;
    default:
      o = {
        r: 2 * r - i,
        g: 2 * r - i,
        b: 2 * r - i
      };
  }
  return o.mode = "rgb", a !== void 0 && (o.alpha = a), o;
}
function wi({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsl",
    s: i === n ? 0 : (i - n) / (1 - Math.abs(i + n - 1)),
    l: 0.5 * (i + n)
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var xi = (e, t) => {
  switch (t) {
    case "deg":
      return +e;
    case "rad":
      return e / Math.PI * 180;
    case "grad":
      return e / 10 * 9;
    case "turn":
      return e * 360;
  }
}, ki = new RegExp(`^hsla?\\(\\s*${Da}${V}${ce}${V}${ce}\\s*(?:,\\s*${Et}\\s*)?\\)$`), Pi = (e) => {
  let t = e.match(ki);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = xi(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function Si(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
  const r = { mode: "hsl" }, [, a, i, n, o] = t;
  if (a.type !== s.None) {
    if (a.type === s.Percentage) return;
    r.h = a.value;
  }
  if (i.type !== s.None) {
    if (i.type === s.Hue) return;
    r.s = i.value / 100;
  }
  if (n.type !== s.None) {
    if (n.type === s.Hue) return;
    r.l = n.value / 100;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Zr = {
  mode: "hsl",
  toMode: { rgb: Mi },
  fromMode: { rgb: wi },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Si, Pi],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    s: u,
    l: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ce },
  average: { h: R }
};
function Jr({ h: e, s: t, v: r, alpha: a }) {
  e = _(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.abs(e / 60 % 2 - 1), n;
  switch (Math.floor(e / 60)) {
    case 0:
      n = {
        r,
        g: r * (1 - t * i),
        b: r * (1 - t)
      };
      break;
    case 1:
      n = {
        r: r * (1 - t * i),
        g: r,
        b: r * (1 - t)
      };
      break;
    case 2:
      n = {
        r: r * (1 - t),
        g: r,
        b: r * (1 - t * i)
      };
      break;
    case 3:
      n = {
        r: r * (1 - t),
        g: r * (1 - t * i),
        b: r
      };
      break;
    case 4:
      n = {
        r: r * (1 - t * i),
        g: r * (1 - t),
        b: r
      };
      break;
    case 5:
      n = {
        r,
        g: r * (1 - t),
        b: r * (1 - t * i)
      };
      break;
    default:
      n = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return n.mode = "rgb", a !== void 0 && (n.alpha = a), n;
}
function Kr({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - n / i,
    v: i
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var Gr = {
  mode: "hsv",
  toMode: { rgb: Jr },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Kr },
  channels: [
    "h",
    "s",
    "v",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    s: u,
    v: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ce },
  average: { h: R }
};
function _i({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let i = t + r;
    t /= i, r /= i;
  }
  return Jr({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function zi(e) {
  let t = Kr(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Ti(e, t) {
  if (!t || t[0] !== "hwb") return;
  const r = { mode: "hwb" }, [, a, i, n, o] = t;
  if (a.type !== s.None) {
    if (a.type === s.Percentage) return;
    r.h = a.value;
  }
  if (i.type !== s.None) {
    if (i.type === s.Hue) return;
    r.w = i.value / 100;
  }
  if (n.type !== s.None) {
    if (n.type === s.Hue) return;
    r.b = n.value / 100;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var $i = {
  mode: "hwb",
  toMode: { rgb: _i },
  fromMode: { rgb: zi },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Ti],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    w: u,
    b: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: vi },
  average: { h: R }
}, Ne = 0.1593017578125, Ur = 78.84375, Le = 0.8359375, Re = 18.8515625, He = 18.6875;
function rt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Ur);
  return 1e4 * Math.pow(Math.max(0, t - Le) / (Re - He * t), 1 / Ne);
}
function at(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Ne);
  return Math.pow((Le + Re * t) / (1 + He * t), Ur);
}
var it = (e) => Math.max(e / 203, 0), pr = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = rt(e + 0.008609037037932761 * t + 0.11102962500302593 * r), n = rt(e - 0.00860903703793275 * t - 0.11102962500302599 * r), o = rt(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: it(2.070152218389422 * i - 1.3263473389671556 * n + 0.2066510476294051 * o),
    y: it(0.3647385209748074 * i + 0.680566024947227 * n - 0.0453045459220346 * o),
    z: it(-0.049747207535812 * i - 0.0492609666966138 * n + 1.1880659249923042 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, nt = (e = 0) => Math.max(e * 203, 0), fr = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = nt(e), n = nt(t), o = nt(r), l = at(0.3592832590121217 * i + 0.6976051147779502 * n - 0.0358915932320289 * o), c = at(-0.1920808463704995 * i + 1.1004767970374323 * n + 0.0753748658519118 * o), h = at(0.0070797844607477 * i + 0.0748396662186366 * n + 0.8433265453898765 * o), v = {
    mode: "itp",
    i: 0.5 * l + 0.5 * c,
    t: 1.61376953125 * l - 3.323486328125 * c + 1.709716796875 * h,
    p: 4.378173828125 * l - 4.24560546875 * c - 0.132568359375 * h
  };
  return a !== void 0 && (v.alpha = a), v;
}, Ai = {
  mode: "itp",
  channels: [
    "i",
    "t",
    "p",
    "alpha"
  ],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: pr,
    rgb: (e) => J(pr(e))
  },
  fromMode: {
    xyz65: fr,
    rgb: (e) => fr(Z(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: u,
    t: u,
    p: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, Ci = 134.03437499999998, Ei = 16295499532821565e-27, ot = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Ne);
  return Math.pow((Le + Re * t) / (1 + He * t), Ci);
}, lt = (e = 0) => Math.max(e * 203, 0), Qr = ({ x: e, y: t, z: r, alpha: a }) => {
  e = lt(e), t = lt(t), r = lt(r);
  let i = 1.15 * e - 0.15 * r, n = 0.66 * t + 0.34 * e, o = ot(0.41478972 * i + 0.579999 * n + 0.014648 * r), l = ot(-0.20151 * i + 1.120649 * n + 0.0531008 * r), c = ot(-0.0166008 * i + 0.2648 * n + 0.6684799 * r), h = (o + l) / 2, v = {
    mode: "jab",
    j: 0.44 * h / (1 - 0.56 * h) - Ei,
    a: 3.524 * o - 4.066708 * l + 0.542708 * c,
    b: 0.199076 * o + 1.096799 * l - 1.295875 * c
  };
  return a !== void 0 && (v.alpha = a), v;
}, Ii = 134.03437499999998, mr = 16295499532821565e-27, st = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Ii);
  return 1e4 * Math.pow((Le - t) / (He * t - Re), 1 / Ne);
}, ct = (e) => e / 203, Vr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + mr) / (0.44 + 0.56 * (e + mr)), n = st(i + 0.13860504 * t + 0.058047316 * r), o = st(i - 0.13860504 * t - 0.058047316 * r), l = st(i - 0.096019242 * t - 0.8118919 * r), c = {
    mode: "xyz65",
    x: ct(1.661373024652174 * n - 0.914523081304348 * o + 0.23136208173913045 * l),
    y: ct(-0.3250758611844533 * n + 1.571847026732543 * o - 0.21825383453227928 * l),
    z: ct(-0.090982811 * n - 0.31272829 * o + 1.5227666 * l)
  };
  return a !== void 0 && (c.alpha = a), c;
}, ea = (e) => {
  let t = Qr(Z(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ta = (e) => J(Vr(e)), Wi = {
  mode: "jab",
  channels: [
    "j",
    "a",
    "b",
    "alpha"
  ],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: ea,
    xyz65: Qr
  },
  toMode: {
    rgb: ta,
    xyz65: Vr
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: u,
    a: u,
    b: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, gr = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), n = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, br = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Ni = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: br,
    rgb: (e) => ta(br(e))
  },
  fromMode: {
    rgb: (e) => gr(ea(e)),
    jab: gr
  },
  channels: [
    "j",
    "c",
    "h",
    "alpha"
  ],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    c: u,
    j: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ee },
  average: { h: R }
}, qe = Math.pow(29, 3) / Math.pow(3, 3), Wt = Math.pow(6, 3) / Math.pow(29, 3), ht = (e) => Math.pow(e, 3) > Wt ? Math.pow(e, 3) : (116 * e - 16) / qe, Nt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, n = t / 500 + i, o = i - r / 200, l = {
    mode: "xyz50",
    x: ht(n) * w.X,
    y: ht(i) * w.Y,
    z: ht(o) * w.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, ve = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = re({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, ra = (e) => ve(Nt(e)), pe = (e) => {
  let { r: t, g: r, b: a, alpha: i } = te(e), n = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, ut = (e) => e > Wt ? Math.cbrt(e) : (qe * e + 16) / 116, Lt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = ut(e / w.X), n = ut(t / w.Y), o = ut(r / w.Z), l = {
    mode: "lab",
    l: 116 * n - 16,
    a: 500 * (i - n),
    b: 200 * (n - o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, aa = (e) => {
  let t = Lt(pe(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Li(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 125 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Rt = {
  mode: "lab",
  toMode: {
    xyz50: Nt,
    rgb: ra
  },
  fromMode: {
    xyz50: Lt,
    rgb: aa
  },
  channels: [
    "l",
    "a",
    "b",
    "alpha"
  ],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Li],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, Ri = {
  ...Rt,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Fr,
    rgb: Ie
  },
  fromMode: {
    xyz65: jr,
    rgb: We
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Hi(e, t) {
  if (!t || t[0] !== "lch") return;
  const r = { mode: "lch" }, [, a, i, n, o] = t;
  if (a.type !== s.None) {
    if (a.type === s.Hue) return;
    r.l = Math.min(Math.max(0, a.value), 100);
  }
  if (i.type !== s.None && (r.c = Math.max(0, i.type === s.Number ? i.value : i.value * 150 / 100)), n.type !== s.None) {
    if (n.type === s.Percentage) return;
    r.h = n.value;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Ht = {
  mode: "lch",
  toMode: {
    lab: O,
    rgb: (e) => ra(O(e))
  },
  fromMode: {
    rgb: (e) => q(aa(e)),
    lab: q
  },
  channels: [
    "l",
    "c",
    "h",
    "alpha"
  ],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Hi],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    c: u,
    l: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ee },
  average: { h: R }
}, qi = {
  ...Ht,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => O(e, "lab65"),
    rgb: (e) => Ie(O(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => q(We(e), "lch65"),
    lab65: (e) => q(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, ia = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), n = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, na = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, oa = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), la = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Oi = oa(w.X, w.Y, w.Z), Bi = la(w.X, w.Y, w.Z), Di = (e) => e <= Wt ? qe * e : 116 * Math.cbrt(e) - 16, kt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Di(t / w.Y), n = oa(e, t, r), o = la(e, t, r);
  !isFinite(n) || !isFinite(o) ? i = n = o = 0 : (n = 13 * i * (n - Oi), o = 13 * i * (o - Bi));
  let l = {
    mode: "luv",
    l: i,
    u: n,
    v: o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Xi = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Fi = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), ji = Xi(w.X, w.Y, w.Z), Yi = Fi(w.X, w.Y, w.Z), Pt = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + ji, n = r / (13 * e) + Yi, o = w.Y * (e <= 8 ? e / qe : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: o * (9 * i) / (4 * n),
    y: o,
    z: o * (12 - 3 * i - 20 * n) / (4 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Zi = (e) => ia(kt(pe(e))), Ji = (e) => ve(Pt(na(e))), Ki = {
  mode: "lchuv",
  toMode: {
    luv: na,
    rgb: Ji
  },
  fromMode: {
    rgb: Zi,
    luv: ia
  },
  channels: [
    "l",
    "c",
    "h",
    "alpha"
  ],
  parse: ["--lchuv"],
  serialize: "--lchuv",
  ranges: {
    l: [0, 100],
    c: [0, 176.956],
    h: [0, 360]
  },
  interpolate: {
    h: {
      use: u,
      fixup: L
    },
    c: u,
    l: u,
    alpha: {
      use: u,
      fixup: x
    }
  },
  difference: { h: Ee },
  average: { h: R }
}, Gi = {
  ...ee,
  mode: "lrgb",
  toMode: { rgb: re },
  fromMode: { rgb: te },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Ui = {
  mode: "luv",
  toMode: {
    xyz50: Pt,
    rgb: (e) => ve(Pt(e))
  },
  fromMode: {
    xyz50: kt,
    rgb: (e) => kt(pe(e))
  },
  channels: [
    "l",
    "u",
    "v",
    "alpha"
  ],
  parse: ["--luv"],
  serialize: "--luv",
  ranges: {
    l: [0, 100],
    u: [-84.936, 175.042],
    v: [-125.882, 87.243]
  },
  interpolate: {
    l: u,
    u,
    v: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, sa = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), n = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * n - 0.0040720430116193 * o,
    a: 1.9779985324311684 * i - 2.42859224204858 * n + 0.450593709617411 * o,
    b: 0.0259040424655478 * i + 0.7827717124575296 * n - 0.8086757549230774 * o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Oe = (e) => {
  let t = sa(te(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, fe = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), n = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * n + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * n - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * n + 1.7076146940746117 * o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Be = (e) => re(fe(e));
function St(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function Pe(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function Qi(e, t) {
  let r, a, i, n, o, l, c, h;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, n = 0.75515197, o = 0.56771245, l = 4.0767416621, c = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, n = 0.1254107, o = 0.14503204, l = -1.2684380046, c = 2.6097574011, h = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, n = -0.50559606, o = 692167e-8, l = -0.0041960863, c = -0.7034186147, h = 1.707614701);
  let v = r + a * e + i * t + n * e * e + o * e * t, d = 0.3963377774 * e + 0.2158037573 * t, f = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t;
  {
    let g = 1 + v * d, y = 1 + v * f, M = 1 + v * m, S = g * g * g, k = y * y * y, A = M * M * M, D = 3 * d * g * g, X = 3 * f * y * y, H = 3 * m * M * M, ae = 6 * d * d * g, ie = 6 * f * f * y, ne = 6 * m * m * M, K = l * S + c * k + h * A, F = l * D + c * X + h * H, oe = l * ae + c * ie + h * ne;
    v = v - K * F / (F * F - 0.5 * K * oe);
  }
  return v;
}
function qt(e, t) {
  let r = Qi(e, t), a = fe({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function Vi(e, t, r, a, i, n = null) {
  n || (n = qt(e, t));
  let o;
  if ((r - i) * n[1] - (n[0] - i) * a <= 0) o = n[1] * i / (a * n[0] + n[1] * (i - r));
  else {
    o = n[1] * (i - 1) / (a * (n[0] - 1) + n[1] * (i - r));
    {
      let l = r - i, c = a, h = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, d = -0.0894841775 * e - 1.291485548 * t, f = l + c * h, m = l + c * v, g = l + c * d;
      {
        let y = i * (1 - o) + o * r, M = o * a, S = y + M * h, k = y + M * v, A = y + M * d, D = S * S * S, X = k * k * k, H = A * A * A, ae = 3 * f * S * S, ie = 3 * m * k * k, ne = 3 * g * A * A, K = 6 * f * f * S, F = 6 * m * m * k, oe = 6 * g * g * A, tr = 4.0767416621 * D - 3.3077115913 * X + 0.2309699292 * H - 1, Fe = 4.0767416621 * ae - 3.3077115913 * ie + 0.2309699292 * ne, Aa = 4.0767416621 * K - 3.3077115913 * F + 0.2309699292 * oe, rr = Fe / (Fe * Fe - 0.5 * tr * Aa), je = -tr * rr, ar = -1.2684380046 * D + 2.6097574011 * X - 0.3413193965 * H - 1, Ye = -1.2684380046 * ae + 2.6097574011 * ie - 0.3413193965 * ne, Ca = -1.2684380046 * K + 2.6097574011 * F - 0.3413193965 * oe, ir = Ye / (Ye * Ye - 0.5 * ar * Ca), Ze = -ar * ir, nr = -0.0041960863 * D - 0.7034186147 * X + 1.707614701 * H - 1, Je = -0.0041960863 * ae - 0.7034186147 * ie + 1.707614701 * ne, Ea = -0.0041960863 * K - 0.7034186147 * F + 1.707614701 * oe, or = Je / (Je * Je - 0.5 * nr * Ea), Ke = -nr * or;
        je = rr >= 0 ? je : 1e6, Ze = ir >= 0 ? Ze : 1e6, Ke = or >= 0 ? Ke : 1e6, o += Math.min(je, Math.min(Ze, Ke));
      }
    }
  }
  return o;
}
function Ot(e, t, r = null) {
  r || (r = qt(e, t));
  let a = r[0], i = r[1];
  return [i / a, i / (1 - a)];
}
function ca(e, t, r) {
  let a = qt(t, r), i = Vi(t, r, e, 1, e, a), n = Ot(t, r, a), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), c = i / Math.min(e * n[0], (1 - e) * n[1]), h = e * o, v = (1 - e) * l, d = 0.9 * c * Math.sqrt(Math.sqrt(1 / (1 / (h * h * h * h) + 1 / (v * v * v * v))));
  return h = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (h * h) + 1 / (v * v))),
    d,
    i
  ];
}
function yr(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: St(t)
  };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let n = Math.sqrt(r * r + a * a);
  if (!n)
    return i.s = 0, i;
  let [o, l, c] = ca(t, r / n, a / n), h;
  if (n < l) {
    let v = 0, d = 0.8 * o, f = 1 - d / l;
    h = (n - v) / (d + f * (n - v)) * 0.8;
  } else {
    let v = l, d = 0.2 * l * l * 1.25 * 1.25 / o, f = 1 - d / (c - l);
    h = 0.8 + 0.2 * ((n - v) / (d + f * (n - v)));
  }
  return h && (i.s = h, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function Mr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: Pe(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let n = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [l, c, h] = ca(i.l, n, o), v, d, f, m;
  r < 0.8 ? (v = 1.25 * r, d = 0, f = 0.8 * l, m = 1 - f / c) : (v = 5 * (r - 0.8), d = c, f = 0.2 * c * c * 1.25 * 1.25 / l, m = 1 - f / (h - c));
  let g = d + v * f / (1 - m * v);
  return i.a = g * n, i.b = g * o, i;
}
var en = {
  ...Zr,
  mode: "okhsl",
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: yr,
    rgb: (e) => yr(Oe(e))
  },
  toMode: {
    oklab: Mr,
    rgb: (e) => Be(Mr(e))
  }
};
function wr(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), n = i ? r / i : 1, o = i ? a / i : 1, [l, c] = Ot(n, o), h = 0.5, v = 1 - h / l, d = c / (i + t * c), f = d * t, m = d * i, g = Pe(f), y = m * g / f, M = fe({
    l: g,
    a: n * y,
    b: o * y
  }), S = Math.cbrt(1 / Math.max(M.r, M.g, M.b, 0));
  t = t / S, i = i / S * St(t) / t, t = St(t);
  const k = {
    mode: "okhsv",
    s: i ? (h + c) * m / (c * h + c * v * m) : 0,
    v: t ? t / f : 0
  };
  return k.s && (k.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && (k.alpha = e.alpha), k;
}
function xr(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, n = Math.cos(r / 180 * Math.PI), o = Math.sin(r / 180 * Math.PI), [l, c] = Ot(n, o), h = 0.5, v = 1 - h / l, d = 1 - a * h / (h + c - c * v * a), f = a * c * h / (h + c - c * v * a), m = Pe(d), g = f * m / d, y = fe({
    l: m,
    a: n * g,
    b: o * g
  }), M = Math.cbrt(1 / Math.max(y.r, y.g, y.b, 0)), S = Pe(i * d), k = f * S / d;
  return t.l = S * M, t.a = k * n * M, t.b = k * o * M, t;
}
var tn = {
  ...Gr,
  mode: "okhsv",
  channels: [
    "h",
    "s",
    "v",
    "alpha"
  ],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: wr,
    rgb: (e) => wr(Oe(e))
  },
  toMode: {
    oklab: xr,
    rgb: (e) => Be(xr(e))
  }
};
function rn(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 0.4 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var an = {
  ...Rt,
  mode: "oklab",
  toMode: {
    lrgb: fe,
    rgb: Be
  },
  fromMode: {
    lrgb: sa,
    rgb: Oe
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [rn],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function nn(e, t) {
  if (!t || t[0] !== "oklch") return;
  const r = { mode: "oklch" }, [, a, i, n, o] = t;
  if (a.type !== s.None) {
    if (a.type === s.Hue) return;
    r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1);
  }
  if (i.type !== s.None && (r.c = Math.max(0, i.type === s.Number ? i.value : i.value * 0.4 / 100)), n.type !== s.None) {
    if (n.type === s.Percentage) return;
    r.h = n.value;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var on = {
  ...Ht,
  mode: "oklch",
  toMode: {
    oklab: (e) => O(e, "oklab"),
    rgb: (e) => Be(O(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => q(Oe(e), "oklch"),
    oklab: (e) => q(e, "oklch")
  },
  parse: [nn],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, kr = (e) => {
  let { r: t, g: r, b: a, alpha: i } = te(e), n = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = re({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (i.alpha = a), i;
}, ln = {
  ...ee,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Pr(Z(e)),
    xyz65: Pr
  },
  toMode: {
    rgb: (e) => J(kr(e)),
    xyz65: kr
  }
}, dt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, Sr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: dt(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: dt(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: dt(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, vt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, _r = (e) => {
  let t = vt(e.r), r = vt(e.g), a = vt(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, sn = {
  ...ee,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Sr,
    rgb: (e) => Sr(pe(e))
  },
  toMode: {
    xyz50: _r,
    rgb: (e) => ve(_r(e))
  }
}, cn = 1.09929682680944, hn = 0.018053968510807, pt = (e) => {
  const t = Math.abs(e);
  return t > hn ? (Math.sign(e) || 1) * (cn * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, zr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: pt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: pt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: pt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Tr = 1.09929682680944, un = 0.018053968510807, ft = (e = 0) => {
  let t = Math.abs(e);
  return t < un * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Tr - 1) / Tr, 1 / 0.45);
}, $r = (e) => {
  let t = ft(e.r), r = ft(e.g), a = ft(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, dn = {
  ...ee,
  mode: "rec2020",
  fromMode: {
    xyz65: zr,
    rgb: (e) => zr(Z(e))
  },
  toMode: {
    xyz65: $r,
    rgb: (e) => J($r(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, Y = 0.0037930732552754493, ha = Math.cbrt(Y), mt = (e) => Math.cbrt(e) - ha, vn = (e) => {
  const { r: t, g: r, b: a, alpha: i } = te(e), n = mt(0.3 * t + 0.622 * r + 0.078 * a + Y), o = mt(0.23 * t + 0.692 * r + 0.078 * a + Y), l = mt(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + Y), c = {
    mode: "xyb",
    x: (n - o) / 2,
    y: (n + o) / 2,
    b: l - (n + o) / 2
  };
  return i !== void 0 && (c.alpha = i), c;
}, gt = (e) => Math.pow(e + ha, 3), pn = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = gt(e + t) - Y, n = gt(t - e) - Y, o = gt(r + t) - Y, l = re({
    r: 11.031566904639861 * i - 9.866943908131562 * n - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * n - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * n + 1.9459282407775895 * o
  });
  return a !== void 0 && (l.alpha = a), l;
}, fn = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: pn },
  fromMode: { rgb: vn },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: u,
    y: u,
    b: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, mn = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: ve,
    lab: Lt
  },
  fromMode: {
    rgb: pe,
    lab: Nt
  },
  channels: [
    "x",
    "y",
    "z",
    "alpha"
  ],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: u,
    y: u,
    z: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, gn = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let n = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, bn = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let n = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, yn = {
  mode: "xyz65",
  toMode: {
    rgb: J,
    xyz50: gn
  },
  fromMode: {
    rgb: Z,
    xyz50: bn
  },
  ranges: {
    x: [0, 0.95],
    y: [0, 1],
    z: [0, 1.088]
  },
  channels: [
    "x",
    "y",
    "z",
    "alpha"
  ],
  parse: ["xyz", "xyz-d65"],
  serialize: "xyz-d65",
  interpolate: {
    x: u,
    y: u,
    z: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, Mn = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, wn = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, xn = {
  mode: "yiq",
  toMode: { rgb: wn },
  fromMode: { rgb: Mn },
  channels: [
    "y",
    "i",
    "q",
    "alpha"
  ],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: u,
    i: u,
    q: u,
    alpha: {
      use: u,
      fixup: x
    }
  }
}, kn = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, Pn = (e = 4) => (t) => typeof t == "number" ? kn(t, e) : t, Co = Pn(2), Sn = (e) => Math.max(0, Math.min(1, e || 0)), bt = (e) => Math.round(Sn(e) * 255), _n = It("rgb"), Eo = It("hsl"), zn = (e) => {
  if (e === void 0) return;
  let t = bt(e.r), r = bt(e.g), a = bt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, Bt = (e) => zn(_n(e)), Io = b(li), Wo = b(pi), No = b(fi), Lo = b(mi), Ro = b(yi), Ho = b(Zr), qo = b(Gr), Oo = b($i), Bo = b(Ai), Do = b(Wi), Xo = b(Ni), Fo = b(Rt), jo = b(Ri), Yo = b(Ht), Zo = b(qi), Jo = b(Ki), Ko = b(Gi), Go = b(Ui), Uo = b(en), Qo = b(tn), Vo = b(an), Se = b(on), el = b(ln), tl = b(sn), rl = b(dn), al = b(ee), il = b(fn), nl = b(mn), ol = b(yn), ll = b(xn), ua = (e, t = "l") => e.sort((r, a) => Math.sign(Se({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - Se({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Dt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), Tn = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((a) => {
    let i = 1e4, n = 0;
    t.forEach((o, l) => {
      const c = Dt(a, o);
      (typeof i > "u" || i > c) && (i = c, n = l);
    }), r[n].points.push(a);
  }), r;
}, $n = (e) => e?.length > 0 ? e.reduce((t, r) => [
  r[0] + t[0],
  r[1] + t[1],
  r[2] + t[2]
], [
  0,
  0,
  0
]).map((t) => t / e.length) : [
  0,
  0,
  0
], An = (e, t) => {
  let r = ua(Cn(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const n = Tn(e, r).map((o) => o.points.length > 0 ? $n(o.points) : null);
    if (n.every((o, l) => o && Dt(o, r[l]) < 1e-3)) break;
    r = n;
  }
  return r;
}, Cn = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((c) => Math.min(...r.map((h) => Dt(c, h)))), i = a.reduce((c, h) => c + h, 0), n = a.map((c) => c / i);
    let o = 0;
    const l = Math.random();
    for (let c = 0; c < n.length; c++)
      if (o += n[c], l < o) {
        r.push(e[c]);
        break;
      }
  }
  return r;
}, En = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((n) => n?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, In = async (e) => {
  const t = await En(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const i = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, n = r.width * r.height || 0, o = 1 / 255, l = [];
  for (let c = 0; c < n; c++) {
    const h = c * 4;
    l.push(i instanceof Float32Array || i instanceof Float16Array ? [
      i?.[h + 0] || 0,
      i?.[h + 1] || 0,
      i?.[h + 2] || 0
    ] : [
      (i?.[h + 0] || 0) * o,
      (i?.[h + 1] || 0) * o,
      (i?.[h + 2] || 0) * o
    ]);
  }
  return l;
}, Wn = async (e) => {
  const t = await In(e);
  return ua(An(t, 4), "h");
}, Nn = "rs-wallpaper-theme", Ln = "rs-wallpaper-primary", Rn = "rs-wallpaper-theme-src", Xt = Nn, Hn = Ln, Ar = Rn, Ft = 0.52, qn = 0.025, he = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, W = null, On = 0.03, Bn = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], Dn = (e, t, r) => Math.min(r, Math.max(t, e)), Cr = (e, t, r, a) => Bt({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || a, Xn = (e) => {
  const [t, r, a] = e;
  if (![
    t,
    r,
    a
  ].every((o) => Number.isFinite(o))) return null;
  const i = Bt({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  if (!i) return null;
  const n = Se({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  return {
    rgb: e,
    hex: i,
    l: n?.l ?? 0.5,
    c: n?.c ?? 0,
    h: n?.h ?? 0
  };
}, Fn = (e) => Se(e)?.l ?? 0.4, jn = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, jt = (e) => Number.isFinite(e) && e >= On && e <= 1, Yn = (e, t) => {
  if (!e.length && t == null) return { ...he };
  const r = e.map((v) => v.l).sort((v, d) => v - d), a = e.length ? e.reduce((v, d) => v + d.l, 0) / e.length : t, i = r.length ? r[Math.floor(r.length / 2)] : a, n = Dn(t != null && jt(t) ? t : Math.max(a, i), 0.08, 0.94), o = e.length ? [...e].sort((v, d) => v.c - d.c || Math.abs(v.l - n) - Math.abs(d.l - n))[0] : null, l = o ? Math.min(qn, Math.max(0, o.c * 0.2)) : 0, c = o?.h || 0, h = n < Ft;
  return {
    underlying: Cr(n, l, c, h ? he.underlying : "#e8e6e2"),
    contrast: Cr(h ? 0.93 : 0.16, 8e-3, c, h ? he.contrast : "#141416")
  };
}, Zn = async (e) => {
  try {
    const t = e instanceof Blob ? e : await (await fetch(e)).blob();
    if (!t || t.size <= 0) return null;
    const r = await createImageBitmap(t), a = 48, i = Math.max(1, Math.round(r.height / Math.max(1, r.width) * a)), n = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(a, i) : Object.assign(document.createElement("canvas"), {
      width: a,
      height: i
    });
    n instanceof OffscreenCanvas || (n.width = a, n.height = i);
    const o = n.getContext("2d");
    if (!o)
      return r.close?.(), null;
    o.drawImage(r, 0, 0, a, i), r.close?.();
    const l = o.getImageData(0, 0, a, i).data;
    let c = 0, h = 0;
    for (let d = 0; d < l.length; d += 16) {
      if ((l[d + 3] ?? 255) < 16) continue;
      const f = l[d] / 255, m = l[d + 1] / 255, g = l[d + 2] / 255;
      c += 0.2126 * f + 0.7152 * m + 0.0722 * g, h++;
    }
    if (h < 8) return null;
    const v = c / h;
    return jt(v) ? v : null;
  } catch {
    return null;
  }
}, Jn = (e) => e <= Ft ? { ...he } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, Kn = (e) => !!(e.underlying && e.contrast), Gn = (e, t) => {
  const r = e.map(Xn).filter(Boolean);
  if (!r.length) return null;
  const a = r.filter((d) => d.l >= 0.18 && d.l <= 0.88 && d.c >= 0.02).sort((d, f) => f.c - d.c || Math.abs(f.l - 0.55) - Math.abs(d.l - 0.55)), i = a.length ? a : [...r].sort((d, f) => f.c - d.c), n = i[0];
  if (!n) return null;
  const o = (d, f) => {
    const m = Math.abs(d - f) % 360;
    return m > 180 ? 360 - m : m;
  }, l = (d) => {
    const f = i.filter((m) => !d.includes(m));
    if (!f.length) {
      const m = d[d.length - 1] ?? n, g = Bt({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, m.l + (d.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, m.c * 0.85),
        h: m.h
      });
      return {
        ...m,
        hex: g || m.hex,
        l: m.l
      };
    }
    return [...f].sort((m, g) => Math.min(...d.map((y) => o(g.h, y.h))) - Math.min(...d.map((y) => o(m.h, y.h))) || g.c - m.c)[0] ?? f[0];
  }, c = l([n]), h = l([n, c]), v = Yn(r, t);
  return {
    primary: n.hex,
    secondary: c.hex,
    tertiary: h.hex,
    ...v
  };
}, da = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, Un = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, j = (e) => !!Br(e), _t = (e, t = []) => {
  if (typeof document > "u") return;
  const r = Fn(e.underlying) < Ft, { shadow: a, glow: i } = jn(r), n = new Set(da());
  for (const l of t) n.add(l);
  if (!j(e.underlying) || !j(e.contrast) || !j(a) || !j(i)) return;
  se("--wallpaper-underlying-color", e.underlying), se("--wallpaper-contrast-color", e.contrast), se("--env-launcher-fg", e.contrast), se("--env-launcher-fg-shadow", a), se("--env-launcher-fg-glow", i);
  for (const l of n)
    E(l, "--wallpaper-underlying-color", e.underlying), E(l, "--wallpaper-contrast-color", e.contrast), E(l, "--env-launcher-fg", e.contrast), E(l, "--env-launcher-fg-shadow", a), E(l, "--env-launcher-fg-glow", i);
  const o = Lr("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  o.style.setProperty("--wallpaper-underlying-color", e.underlying), o.style.setProperty("--wallpaper-contrast-color", e.contrast), o.style.setProperty("--env-launcher-fg", e.contrast), o.style.setProperty("--env-launcher-fg-shadow", a), o.style.setProperty("--env-launcher-fg-glow", i);
}, se = (e, t = "#5a9ec8") => {
  try {
    CSS?.registerProperty?.({
      name: e,
      syntax: "<color>",
      inherits: !0,
      initialValue: t
    });
  } catch {
  }
}, Qn = (e) => {
  try {
    const t = _e();
    if (!t) return;
    localStorage.setItem(Xt, JSON.stringify({
      ...t,
      underlying: e.underlying,
      contrast: e.contrast
    }));
  } catch {
  }
}, Vn = (e, t = []) => {
  if (!jt(e))
    return W ? (_t(W, t), W) : { ...he };
  const r = Jn(e);
  return W = r, _t(r, t), Qn(r), r;
}, ye = (e) => {
  const t = W ? {
    ...e,
    ...W
  } : e;
  try {
    localStorage.setItem(Xt, JSON.stringify(t)), localStorage.setItem(Hn, t.primary);
  } catch {
  }
  if (Kn(t) && _t(t), !Un()) return;
  for (const a of da()) for (const [i, n] of Bn) E(a, i, t[n]);
  if (!j(t.primary) || !j(t.secondary) || !j(t.tertiary)) return;
  document.querySelectorAll("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((a) => {
    E(a, "--color-primary", t.primary), E(a, "--base-color", t.primary), E(a, "--color-secondary", t.secondary), E(a, "--color-tertiary", t.tertiary);
  });
  const r = Lr("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  r.style.setProperty("--color-primary", t.primary), r.style.setProperty("--base-color", t.primary), r.style.setProperty("--color-secondary", t.secondary), r.style.setProperty("--color-tertiary", t.tertiary), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
    source: "wallpaper",
    seeds: t
  } }));
}, _e = () => {
  try {
    const e = localStorage.getItem(Xt);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, ze = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`;
  if (typeof e == "string") {
    if (!e || globalThis[/* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc")]?.has(e) || e.startsWith("data:") && !/^data:image\//i.test(e) || /video\/mp2t/i.test(e)) return null;
    if (/\/assets\/wallpaper\.jpg(?:$|[?#])/i.test(e)) try {
      const i = String(document.documentElement?.dataset?.cwspSku || "").toLowerCase(), n = String(globalThis.location?.hostname || "").toLowerCase();
      if (i === "process" || n === "process.u2re.space" || n === "workcenter.u2re.space" || n === "ai.u2re.space") return null;
    } catch {
      return null;
    }
  } else if (e instanceof Blob && e.type && !e.type.startsWith("image/") && e.type !== "application/octet-stream") return null;
  const a = await Zn(e);
  if (a != null && Vn(a), !t?.force) try {
    if (localStorage.getItem(Ar) === r) {
      const i = _e();
      if (i)
        return ye(i), W ? {
          ...i,
          ...W
        } : i;
    }
  } catch {
  }
  try {
    const i = await Wn(e), n = Gn(i, a ?? void 0);
    if (!n) return null;
    ye(n);
    try {
      localStorage.setItem(Ar, r);
    } catch {
    }
    return W ? {
      ...n,
      ...W
    } : n;
  } catch (i) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", i);
    const n = _e();
    return n ? (ye(n), n) : null;
  }
}, eo = () => {
  const e = _e();
  return e && ye(e), e;
}, va = "rs-wallpaper-image", $ = "/assets/wallpaper.jpg", Yt = "/assets/user-wallpaper", pa = "cwsp-user-wallpaper", zt = "idb:rs-wallpaper", to = "cwsp-wallpaper-v1", B = "blobs", Zt = "current", fa = 512e3, z = null, De = 0, T = () => Na?.[Ia()] ?? 0, Te = (e) => e === "idb:rs-wallpaper" || e.startsWith("idb:"), ma = (e) => e.startsWith("blob:") || e.startsWith("data:") && (e.length > fa || !/^data:image\//i.test(e)), ga = () => {
  if (De += 1, z && z.startsWith("blob:")) try {
    URL.revokeObjectURL(z);
  } catch {
  }
  z = null;
}, ba = (e, t) => (t !== De || z || (z = URL.createObjectURL(e)), z), Jt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(to, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(B) || a.createObjectStore(B);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), ro = async (e) => {
  const t = await Jt();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(B, "readwrite");
      i.objectStore(B).put(e, Zt), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, Kt = async () => {
  const e = await Jt();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(B, "readonly").objectStore(B).get(Zt);
      a.onsuccess = () => {
        const i = a.result;
        t(i instanceof Blob ? i : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, ya = async (e) => {
  if (typeof caches > "u" || !(e instanceof Blob) || e.size <= 0) return;
  const t = await caches.open(pa), r = e.type && e.type.startsWith("image/") ? e.type : "image/jpeg";
  await t.put(new Request(Yt), new Response(e, { headers: { "Content-Type": r } }));
}, ao = async () => {
  if (!(typeof caches > "u"))
    try {
      await (await caches.open(pa)).delete(new Request(Yt));
    } catch {
    }
}, io = async () => {
  try {
    const e = await Jt();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(B, "readwrite");
        a.objectStore(B).delete(Zt), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, Xe = () => {
  try {
    const e = localStorage.getItem(va);
    return e && e.trim() ? e.trim() : $;
  } catch {
    return $;
  }
}, $e = (e) => {
  if (e.startsWith("blob:")) return !1;
  try {
    return localStorage.setItem(va, e), !0;
  } catch {
    return !1;
  }
}, no = async () => {
  if (z) return z;
  const e = De;
  try {
    const t = await Kt();
    return t ? ba(t, e) : null;
  } catch (t) {
    return console.warn("[fest/image] wallpaper IDB restore failed", t), null;
  }
}, oo = (e) => e.startsWith("data:") || e.startsWith("blob:"), Ma = async () => {
  const e = Xe();
  if (Te(e) || ma(e)) {
    const t = await no();
    return t ? (Te(e) || $e(zt), t) : At() ? "" : $;
  }
  return At() && (!e || e === $) ? "" : e || $;
}, G = null, lo = () => G || (G = (async () => {
  const e = Xe();
  if (Te(e) || ma(e)) {
    const i = await Kt();
    if (!i) return null;
    ya(i).catch(() => {
    });
    const n = ba(i, De);
    return n ? {
      url: n,
      blob: i
    } : null;
  }
  const t = e || $;
  if (!t || t === $) try {
    if (String(document.documentElement?.dataset?.cwspSku || "").toLowerCase() === "process") return null;
  } catch {
    return null;
  }
  if (!t) return null;
  const r = await fetch(t, {
    cache: "force-cache",
    priority: "high"
  });
  if (!r.ok) return null;
  const a = await r.blob();
  return !a.size || a.type && !a.type.startsWith("image/") ? null : {
    url: t,
    blob: a
  };
})().catch(() => null), G), so = async (e) => {
  if (!G || !e) return null;
  const t = await G;
  return t && (t.url === e || t.url === e.split("#")[0]) ? t.blob : null;
}, sl = () => Xe(), Er = (e) => {
  const t = () => {
    const r = T(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), La(t);
}, co = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = T(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, cl = () => {
  Ma().then((e) => {
    co(), Ae(e);
  });
}, Q = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, Ae = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(T());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, ho = async (e) => (await fetch(e)).blob(), uo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return mo($), $;
  ga(), z = URL.createObjectURL(e), Ae(z), ze(e, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(Q);
  });
  try {
    await ro(e), $e(zt), ya(e).catch(() => {
    });
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, n) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => n(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !$e(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: zt,
      url: z
    } }));
  } catch {
  }
  return z;
}, hl = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "none", t.style.backgroundColor = "transparent";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "0", r.style.pointerEvents = "none", r.style.opacity = "0", r.style.background = "none", r.style.backgroundColor = "transparent";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "min(100cqi, 100dvi)", a.style.blockSize = "min(100cqb, 100dvb)", a.style.maxInlineSize = "min(100cqi, 100dvi)", a.style.maxBlockSize = "min(100cqb, 100dvb)", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.style.filter = "none", a.style.backdropFilter = "none", a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", er() || "display-p3"), a.style.setProperty("background-color", "transparent", "important"), a.style.setProperty("opacity", "1", "important"), a.setAttribute("is", "ui-canvas");
  const i = document.createElement("img");
  i.className = "app-canvas__poster", i.alt = "", i.decoding = "async", i.setAttribute("fetchpriority", "high"), i.draggable = !1, i.style.position = "absolute", i.style.inset = "0", i.style.inlineSize = "min(100cqi, 100dvi)", i.style.blockSize = "min(100cqb, 100dvb)", i.style.objectFit = "cover", i.style.objectPosition = "center", i.style.pointerEvents = "none", t.append(a), i.addEventListener("load", () => {
    try {
      document.documentElement.removeAttribute("data-cwsp-wallpaper-poster");
    } catch {
    }
  }, { once: !0 }), i.addEventListener("error", () => {
    i.style.display = "none", i.src.includes("/assets/user-wallpaper") && i.removeAttribute("src");
  }), bo();
  const n = Xe(), o = Te(n) ? Yt : n.startsWith("data:") || n.startsWith("blob:") ? "" : n, l = lo();
  o && !C.has(o) && (a.setAttribute("data-src", o), i.src = o), l.then((h) => {
    if (!(!h || !i.isConnected)) {
      if (h.url.startsWith("blob:")) {
        i.src = h.url, a.setAttribute("data-src", h.url);
        return;
      }
      i.getAttribute("src") || (i.src = h.url);
    }
  });
  const c = Er(a);
  return wa(a, Vt()), eo(), Q(r), (async () => {
    const h = await Ma();
    if (!h || C.has(h)) {
      Q(r);
      return;
    }
    a.setAttribute("data-src", h), i.isConnected && (i.src = h), Er(a);
    const v = h.startsWith("blob:") && await Kt() || h, d = () => {
      ze(v).then(() => Q(r));
    }, f = globalThis.requestIdleCallback;
    typeof f == "function" ? f(d, { timeout: 1200 }) : globalThis.setTimeout?.(d, 320);
  })(), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: c
  };
}, Gt = "rs-wallpaper-layout", vo = '[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas', Ut = (e) => {
  const t = typeof e == "number" ? e : typeof e == "string" ? Number(e.trim().toLowerCase().replace(/x$/, "")) : NaN;
  return Number.isFinite(t) && t > 0 ? t : 1;
}, de = (e) => {
  const t = typeof e == "string" ? e.trim().toLowerCase() : "";
  if (t === "start" || t === "center" || t === "end") return t;
  if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)%$/.test(t)) {
    const r = Number(t.slice(0, -1));
    if (Number.isFinite(r)) return `${Math.max(0, Math.min(100, r))}%`;
  }
  return "center";
}, Ir = (e) => {
  const t = de(e);
  return t === "start" ? 0 : t === "center" ? 0.5 : t === "end" ? 1 : Number(t.slice(0, -1)) / 100;
}, Tt = (e) => ({
  scale: Ut(e?.scale || 1),
  positionX: de(e?.positionX ?? "center"),
  positionY: de(e?.positionY ?? "center")
}), $t, Qt = {
  scale: "1",
  "position-x": "center",
  "position-y": "center"
}, po = () => {
  try {
    const e = JSON.parse(localStorage.getItem(Gt) ?? "null");
    if (!e || typeof e != "object") return;
    Qt = {
      scale: String(Ut(e.scale)),
      "position-x": de(e.positionX ?? "center"),
      "position-y": de(e.positionY ?? "center")
    };
  } catch {
  }
}, fo = () => {
  const e = Vt();
  Qt = {
    scale: String(e.scale),
    "position-x": e.positionX,
    "position-y": e.positionY
  }, !(typeof document > "u") && document.querySelectorAll(vo).forEach((t) => wa(t, e));
};
po();
var Vt = () => {
  if ($t) return { ...$t };
  try {
    return Tt(JSON.parse(localStorage.getItem(Gt) ?? "null"));
  } catch {
    return Tt();
  }
}, wa = (e, t) => {
  e.setAttribute("scale", String(t.scale)), e.setAttribute("position-x", t.positionX), e.setAttribute("position-y", t.positionY);
}, ul = (e) => {
  const t = Tt({
    ...Vt(),
    ...e
  });
  $t = t;
  try {
    localStorage.setItem(Gt, JSON.stringify(t));
  } catch {
  }
  fo();
}, mo = (e) => {
  const t = String(e || "").trim() || $;
  if (oo(t) || t.length > fa) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await ho(t);
        await uo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r);
        const a = t.startsWith("blob:") ? $ : t;
        Ae(a), ze(a, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(Q);
        });
      }
    })();
    return;
  }
  io(), ao(), ga(), $e(t) || console.warn("[fest/image] wallpaper pointer write failed"), Ae(t), ze(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(Q);
  });
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: t,
      url: t
    } }));
  } catch {
  }
}, xa = /* @__PURE__ */ Symbol.for("image.canvas.blob");
globalThis[xa] ??= /* @__PURE__ */ new WeakMap();
var be = globalThis[xa], ka = /* @__PURE__ */ Symbol.for("image.canvas.delayed");
globalThis[ka] ??= /* @__PURE__ */ new Map([]);
var go = globalThis[ka], Pa = /* @__PURE__ */ Symbol.for("image.canvas.scheduler");
globalThis[Pa] ??= Wa();
var dl = globalThis[Pa], Sa = /* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc");
globalThis[Sa] ??= /* @__PURE__ */ new Set();
var C = globalThis[Sa], At = () => {
  try {
    if (String(document.documentElement?.dataset?.cwspSku || "").toLowerCase() === "process") return !0;
    const e = String(globalThis.location?.hostname || "").toLowerCase();
    return e === "process.u2re.space" || e === "workcenter.u2re.space" || e === "ai.u2re.space";
  } catch {
    return !1;
  }
}, bo = () => {
  At() && C.add($);
}, _a = (e) => e?.naturalWidth || e?.width || 1, za = (e) => e?.naturalHeight || e?.height || 1;
function er() {
  return window.matchMedia("(color-gamut: rec2020)").matches ? "rec2020" : window.matchMedia("(color-gamut: p3)").matches ? "display-p3" : (window.matchMedia("(color-gamut: srgb)").matches, "srgb");
}
var yo = (e) => {
  const t = {
    alpha: !0,
    desynchronized: !0,
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    colorSpace: er() || "display-p3",
    colorType: "float16",
    pixelFormat: "rgba-float16"
  };
  typeof document < "u" && document.documentElement?.dataset?.cwspNativeShell;
  try {
    return e.getContext("2d", t);
  } catch {
    return e.getContext("2d");
  }
}, Ta = 1.5707963267948966, vl = (e, t) => {
  go.set(e, t);
}, pl = (e, t, r = 1, a, i = 0) => {
  const n = e.canvas;
  e.translate(Math.round(n.width / 2), Math.round(n.height / 2)), e.rotate(Math.round((-i || 0) + (1 - a)) * Ta), e.translate(Math.round(-(_a(t) / 2) * r), Math.round(-(za(t) / 2) * r));
}, Mo = (e) => e ? typeof Blob == "function" && e instanceof Blob || typeof File == "function" && e instanceof File || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof Image == "function" && e instanceof Image ? !0 : typeof e == "object" : !1, wo = (e) => {
  if (!be.has(e) && Mo(e)) {
    const t = (() => {
      const a = Math.min(globalThis.devicePixelRatio || 1, 2), i = Math.max(globalThis.screen?.width || 0, globalThis.screen?.height || 0, 800);
      return Math.round(Math.max(16, i * a));
    })(), r = (async () => {
      if (typeof Blob == "function" && e instanceof Blob && e.size > 18e4) try {
        return await createImageBitmap(e, {
          resizeWidth: t,
          resizeQuality: "high"
        });
      } catch {
      }
      return createImageBitmap(e);
    })().catch((a) => {
      throw be.delete(e), a;
    });
    be.set(e, r);
  }
  return be.get(e);
}, $a = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[$a] ??= /* @__PURE__ */ new WeakMap();
var Wr = globalThis[$a], xo = (e, t) => {
  const r = Wr.get(t);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return Wr.set(t, a), a;
}, Nr = () => Promise.race([scheduler?.yield(), new Promise((e) => requestAnimationFrame(e))]), Ct = null;
typeof HTMLCanvasElement < "u" ? Ct = class extends HTMLCanvasElement {
  static observedAttributes = [
    "data-src",
    "data-orient",
    "orient",
    "scale",
    "position-x",
    "position-y"
  ];
  ctx = null;
  image = null;
  #e = [1, 1];
  #t = "";
  #r = "";
  get #a() {
    const t = this.getAttribute("data-orient") ?? this.getAttribute("orient") ?? "0", r = Number.parseInt(t, 10) || T();
    return Number.isFinite(r) ? r : T();
  }
  set #a(t) {
    const r = String(t ?? T());
    this.setAttribute("data-orient", r), this.setAttribute("orient", r);
  }
  attributeChangedCallback(t, r, a) {
    if (t === "data-src") {
      this.#l(a);
      return;
    }
    r !== a && this.#i(this.#r);
  }
  #n = !1;
  #o() {
    const t = this, r = this.parentNode, a = () => {
      const i = this.#e;
      try {
        this.#a = T();
      } catch {
      }
      this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)], (i?.[0] != this.#e[0] || i?.[1] != this.#e[1]) && this.#i(this.#r);
    };
    try {
      this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.contains("u-canvas") || this.classList.add("u-canvas"), this.classList.contains("u2-canvas") || this.classList.add("u2-canvas"), this.classList.contains("ui-canvas") || this.classList.add("ui-canvas"), this.style.setProperty("inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("block-size", "min(100cqb, 100dvb)"), this.style.setProperty("max-inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("max-block-size", "min(100cqb, 100dvb)"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", er() || "display-p3"), this.style.setProperty("background-color", "transparent", "important"), this.style.setProperty("opacity", "1", "important"), this.style.setProperty("image-rendering", "auto", "important"), this.style.setProperty("filter", "none"), this.style.setProperty("backdrop-filter", "none"), this.style.setProperty("mix-blend-mode", "normal"), this.style.setProperty("background-blend-mode", "normal"), this.style.setProperty("isolation", "isolate");
    } catch {
    }
    try {
      this.#a = T();
    } catch {
    }
    if (!this.#n) {
      Nr?.()?.then?.(() => {
        this.isConnected && a();
      }), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)], this.ctx = yo(t);
      try {
        this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" });
      } catch {
      }
      a();
      try {
        new ResizeObserver((i) => {
          for (const n of i) {
            const o = n?.devicePixelContentBoxSize?.[0] ?? n?.contentBoxSize?.[0];
            if (o) {
              const l = this.#e, c = n?.devicePixelContentBoxSize?.[0] ? 1 : devicePixelRatio || 1;
              this.#e = [Math.max(o.inlineSize * c || this.width, 1), Math.max(o.blockSize * c || this.height, 1)], this.#a = T(), (l?.[0] != this.#e[0] || l?.[1] != this.#e[1]) && this.#i(this.#r);
            }
          }
        }).observe(this, { box: "device-pixel-content-box" });
      } catch (i) {
        console.warn("[ui-canvas] ResizeObserver unavailable:", i);
      }
      this.#n = !0;
    }
    this.#l(this.#t = this.dataset.src || this.#t), this.#a = T(), this.image && this.#i(this.#r);
  }
  adoptedCallback() {
    this.#o(), this.image && this.#i(this.#r || this.#t);
  }
  connectedCallback() {
    this.#o(), this.image && this.#i(this.#r || this.#t);
  }
  constructor() {
    super();
  }
  async $useImageAsSource(t, r) {
    r ||= this.#t;
    const a = typeof ImageBitmap == "function" && t instanceof ImageBitmap ? t : await wo(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#i(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == null || t == this.#t || t == this.#r)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`, ((this.#a ?? T()) || 0) % 2;
      const n = _a(i), o = za(i), l = Math.round(1 - (n <= o ? 1 : 0) - (this.#a ?? T())), c = Math.abs(l % 2) === 1, h = c ? o : n, v = c ? n : o, d = Math.max(r.width / h, r.height / v), f = (H) => this.getAttribute(H) ?? Qt[H], m = d * Ut(f("scale")), g = n * m, y = o * m;
      if (!Number.isFinite(g) || !Number.isFinite(y)) return;
      const M = c ? y : g, S = c ? g : y, k = Ir(f("position-x")), A = Ir(f("position-y")), D = (r.width - M) * k, X = (r.height - S) * A;
      a.save();
      try {
        a.clearRect(0, 0, r.width, r.height), a.translate(D + M / 2, X + S / 2), a.rotate(l * Ta), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", a.drawImage(i, -g / 2, -y / 2, g, y);
      } finally {
        a.restore();
      }
    }
  }
  #l(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || C.has(r) ? Promise.resolve() : r.startsWith("data:") && !/^data:image\//i.test(r) ? (C.add(r), Promise.resolve()) : so(r).then((a) => a && r === this.#t ? this.$useImageAsSource(a, r)?.catch?.(() => {
      C.add(r);
    }) : fetch(r, {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (i) => {
      if (!i.ok) {
        C.add(r);
        return;
      }
      const n = await i.blob();
      if (!n?.size || n.type && !n.type.startsWith("image/")) {
        C.add(r);
        return;
      }
      return this.$useImageAsSource(n, r)?.catch?.(() => {
        C.add(r);
      });
    })?.catch?.(() => {
      C.add(r);
    }));
  }
  #i(t) {
    const r = this.ctx;
    this.image && r && (t == null || t == this.#t || t == this.#r) && Nr?.()?.then?.(() => xo(this.$renderPass, this)(t));
  }
} : Ct = class {
  constructor() {
  }
  $renderPass(t) {
  }
  $useImageAsSource(t, r) {
    return t;
  }
  #e(t) {
    return Promise.resolve();
  }
  #t(t) {
  }
  #r = T();
  #a = "";
  #n = "";
  #o = [1, 1];
  ctx = null;
  image = null;
};
try {
  customElements.define("ui-canvas", Ct, { extends: "canvas" });
} catch {
}
export {
  Ct as UICanvas,
  pa as USER_WALLPAPER_CACHE,
  Yt as USER_WALLPAPER_PATH,
  zt as WALLPAPER_IDB_MARKER,
  Ln as WALLPAPER_PRIMARY_STORAGE_KEY,
  Rn as WALLPAPER_THEME_SRC_STORAGE_KEY,
  Nn as WALLPAPER_THEME_STORAGE_KEY,
  ze as applyThemeFromWallpaper,
  Vn as applyWallpaperPaperFromLuma,
  _t as applyWallpaperPaperTokens,
  ye as applyWallpaperThemeSeeds,
  Wr as bindCache,
  be as blobImageMap,
  vl as callByFrame,
  pl as cover,
  wo as createImageBitmapCache,
  go as delayed,
  Jn as deriveWallpaperPaperTokensFromLuma,
  _o as electronAPI,
  C as failedWallpaperSrc,
  Vt as getAppWallpaperLayout,
  Wn as getDominantColors,
  sl as getWallpaperStoragePointer,
  hl as initializeAppCanvasLayer,
  _e as loadCachedWallpaperTheme,
  zo as qualityMode,
  Gn as rankWallpaperSeeds,
  cl as refreshAppWallpaperPaint,
  se as registerColorProperty,
  Ma as resolveAppWallpaperUrl,
  eo as restoreWallpaperThemeCache,
  dl as schedulerRf,
  mo as setAppWallpaper,
  uo as setAppWallpaperFromBlob,
  ul as setAppWallpaperLayout,
  co as syncAppWallpaperOrient,
  Er as syncCanvasOrient,
  fo as syncWallpaperLayoutAttrs,
  da as themeHosts,
  lo as warmAppWallpaper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFEgfSBmcm9tIFwiQGZlc3QtbGliL2x1cmVcIjtcbmltcG9ydCB7IHNldFN0eWxlUHJvcGVydHkgfSBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBtYWtlUkFGQ3ljbGUsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCB3aGVuQW55U2NyZWVuQ2hhbmdlcyB9IGZyb20gXCJAZmVzdC1saWIvZG9tXCI7XG5cbi8vIHNyYy9lbmdpbmUvQ29uZmlnLnRzXG52YXIgZWxlY3Ryb25BUEkgPSBcImVsZWN0cm9uQnJpZGdlXCI7XG52YXIgcXVhbGl0eU1vZGUgPSB7IFwiZmFzdFwiOiB7XG5cdGRpdmlzb3I6IDQsXG5cdGZpbHRlcjogXCJibHVyKDRweClcIixcblx0c2FtcGxpbmc6IDEyOFxufSB9O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VOdW1iZXIuanNcbnZhciBwYXJzZU51bWJlciA9IChjb2xvciwgbGVuKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwibnVtYmVyXCIpIHJldHVybjtcblx0aWYgKGxlbiA9PT0gMykgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiA4ICYgMTUgfCBjb2xvciA+PiA0ICYgMjQwKSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gNCAmIDE1IHwgY29sb3IgJiAyNDApIC8gMjU1LFxuXHRcdGI6IChjb2xvciAmIDE1IHwgY29sb3IgPDwgNCAmIDI0MCkgLyAyNTVcblx0fTtcblx0aWYgKGxlbiA9PT0gNCkgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiAxMiAmIDE1IHwgY29sb3IgPj4gOCAmIDI0MCkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDggJiAxNSB8IGNvbG9yID4+IDQgJiAyNDApIC8gMjU1LFxuXHRcdGI6IChjb2xvciA+PiA0ICYgMTUgfCBjb2xvciAmIDI0MCkgLyAyNTUsXG5cdFx0YWxwaGE6IChjb2xvciAmIDE1IHwgY29sb3IgPDwgNCAmIDI0MCkgLyAyNTVcblx0fTtcblx0aWYgKGxlbiA9PT0gNikgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxuXHRcdGI6IChjb2xvciAmIDI1NSkgLyAyNTVcblx0fTtcblx0aWYgKGxlbiA9PT0gOCkgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiAyNCAmIDI1NSkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcblx0XHRiOiAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXG5cdFx0YWxwaGE6IChjb2xvciAmIDI1NSkgLyAyNTVcblx0fTtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbG9ycy9uYW1lZC5qc1xudmFyIG5hbWVkID0ge1xuXHRhbGljZWJsdWU6IDE1NzkyMzgzLFxuXHRhbnRpcXVld2hpdGU6IDE2NDQ0Mzc1LFxuXHRhcXVhOiA2NTUzNSxcblx0YXF1YW1hcmluZTogODM4ODU2NCxcblx0YXp1cmU6IDE1Nzk0MTc1LFxuXHRiZWlnZTogMTYxMTkyNjAsXG5cdGJpc3F1ZTogMTY3NzAyNDQsXG5cdGJsYWNrOiAwLFxuXHRibGFuY2hlZGFsbW9uZDogMTY3NzIwNDUsXG5cdGJsdWU6IDI1NSxcblx0Ymx1ZXZpb2xldDogOTA1NTIwMixcblx0YnJvd246IDEwODI0MjM0LFxuXHRidXJseXdvb2Q6IDE0NTk2MjMxLFxuXHRjYWRldGJsdWU6IDYyNjY1MjgsXG5cdGNoYXJ0cmV1c2U6IDgzODgzNTIsXG5cdGNob2NvbGF0ZTogMTM3ODk0NzAsXG5cdGNvcmFsOiAxNjc0NDI3Mixcblx0Y29ybmZsb3dlcmJsdWU6IDY1OTE5ODEsXG5cdGNvcm5zaWxrOiAxNjc3NTM4OCxcblx0Y3JpbXNvbjogMTQ0MjMxMDAsXG5cdGN5YW46IDY1NTM1LFxuXHRkYXJrYmx1ZTogMTM5LFxuXHRkYXJrY3lhbjogMzU3MjMsXG5cdGRhcmtnb2xkZW5yb2Q6IDEyMDkyOTM5LFxuXHRkYXJrZ3JheTogMTExMTkwMTcsXG5cdGRhcmtncmVlbjogMjU2MDAsXG5cdGRhcmtncmV5OiAxMTExOTAxNyxcblx0ZGFya2toYWtpOiAxMjQzMzI1OSxcblx0ZGFya21hZ2VudGE6IDkxMDk2NDMsXG5cdGRhcmtvbGl2ZWdyZWVuOiA1NTk3OTk5LFxuXHRkYXJrb3JhbmdlOiAxNjc0NzUyMCxcblx0ZGFya29yY2hpZDogMTAwNDAwMTIsXG5cdGRhcmtyZWQ6IDkxMDk1MDQsXG5cdGRhcmtzYWxtb246IDE1MzA4NDEwLFxuXHRkYXJrc2VhZ3JlZW46IDk0MTk5MTksXG5cdGRhcmtzbGF0ZWJsdWU6IDQ3MzQzNDcsXG5cdGRhcmtzbGF0ZWdyYXk6IDMxMDA0OTUsXG5cdGRhcmtzbGF0ZWdyZXk6IDMxMDA0OTUsXG5cdGRhcmt0dXJxdW9pc2U6IDUyOTQ1LFxuXHRkYXJrdmlvbGV0OiA5Njk5NTM5LFxuXHRkZWVwcGluazogMTY3MTY5NDcsXG5cdGRlZXBza3libHVlOiA0OTE1MSxcblx0ZGltZ3JheTogNjkwODI2NSxcblx0ZGltZ3JleTogNjkwODI2NSxcblx0ZG9kZ2VyYmx1ZTogMjAwMzE5OSxcblx0ZmlyZWJyaWNrOiAxMTY3NDE0Nixcblx0ZmxvcmFsd2hpdGU6IDE2Nzc1OTIwLFxuXHRmb3Jlc3RncmVlbjogMjI2Mzg0Mixcblx0ZnVjaHNpYTogMTY3MTE5MzUsXG5cdGdhaW5zYm9ybzogMTQ0NzQ0NjAsXG5cdGdob3N0d2hpdGU6IDE2MzE2NjcxLFxuXHRnb2xkOiAxNjc2NjcyMCxcblx0Z29sZGVucm9kOiAxNDMyOTEyMCxcblx0Z3JheTogODQyMTUwNCxcblx0Z3JlZW46IDMyNzY4LFxuXHRncmVlbnllbGxvdzogMTE0MDMwNTUsXG5cdGdyZXk6IDg0MjE1MDQsXG5cdGhvbmV5ZGV3OiAxNTc5NDE2MCxcblx0aG90cGluazogMTY3Mzg3NDAsXG5cdGluZGlhbnJlZDogMTM0NTg1MjQsXG5cdGluZGlnbzogNDkxNTMzMCxcblx0aXZvcnk6IDE2Nzc3MjAwLFxuXHRraGFraTogMTU3ODc2NjAsXG5cdGxhdmVuZGVyOiAxNTEzMjQxMCxcblx0bGF2ZW5kZXJibHVzaDogMTY3NzMzNjUsXG5cdGxhd25ncmVlbjogODE5MDk3Nixcblx0bGVtb25jaGlmZm9uOiAxNjc3NTg4NSxcblx0bGlnaHRibHVlOiAxMTM5MzI1NCxcblx0bGlnaHRjb3JhbDogMTU3NjE1MzYsXG5cdGxpZ2h0Y3lhbjogMTQ3NDU1OTksXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiAxNjQ0ODIxMCxcblx0bGlnaHRncmF5OiAxMzg4MjMyMyxcblx0bGlnaHRncmVlbjogOTQ5ODI1Nixcblx0bGlnaHRncmV5OiAxMzg4MjMyMyxcblx0bGlnaHRwaW5rOiAxNjc1ODQ2NSxcblx0bGlnaHRzYWxtb246IDE2NzUyNzYyLFxuXHRsaWdodHNlYWdyZWVuOiAyMTQyODkwLFxuXHRsaWdodHNreWJsdWU6IDg5MDAzNDYsXG5cdGxpZ2h0c2xhdGVncmF5OiA3ODMzNzUzLFxuXHRsaWdodHNsYXRlZ3JleTogNzgzMzc1Myxcblx0bGlnaHRzdGVlbGJsdWU6IDExNTg0NzM0LFxuXHRsaWdodHllbGxvdzogMTY3NzcxODQsXG5cdGxpbWU6IDY1MjgwLFxuXHRsaW1lZ3JlZW46IDMzMjkzMzAsXG5cdGxpbmVuOiAxNjQ0NTY3MCxcblx0bWFnZW50YTogMTY3MTE5MzUsXG5cdG1hcm9vbjogODM4ODYwOCxcblx0bWVkaXVtYXF1YW1hcmluZTogNjczNzMyMixcblx0bWVkaXVtYmx1ZTogMjA1LFxuXHRtZWRpdW1vcmNoaWQ6IDEyMjExNjY3LFxuXHRtZWRpdW1wdXJwbGU6IDk2NjI2ODMsXG5cdG1lZGl1bXNlYWdyZWVuOiAzOTc4MDk3LFxuXHRtZWRpdW1zbGF0ZWJsdWU6IDgwODc3OTAsXG5cdG1lZGl1bXNwcmluZ2dyZWVuOiA2NDE1NCxcblx0bWVkaXVtdHVycXVvaXNlOiA0NzcyMzAwLFxuXHRtZWRpdW12aW9sZXRyZWQ6IDEzMDQ3MTczLFxuXHRtaWRuaWdodGJsdWU6IDE2NDQ5MTIsXG5cdG1pbnRjcmVhbTogMTYxMjE4NTAsXG5cdG1pc3R5cm9zZTogMTY3NzAyNzMsXG5cdG1vY2Nhc2luOiAxNjc3MDIyOSxcblx0bmF2YWpvd2hpdGU6IDE2NzY4Njg1LFxuXHRuYXZ5OiAxMjgsXG5cdG9sZGxhY2U6IDE2NjQzNTU4LFxuXHRvbGl2ZTogODQyMTM3Nixcblx0b2xpdmVkcmFiOiA3MDQ4NzM5LFxuXHRvcmFuZ2U6IDE2NzUzOTIwLFxuXHRvcmFuZ2VyZWQ6IDE2NzI5MzQ0LFxuXHRvcmNoaWQ6IDE0MzE1NzM0LFxuXHRwYWxlZ29sZGVucm9kOiAxNTY1NzEzMCxcblx0cGFsZWdyZWVuOiAxMDAyNTg4MCxcblx0cGFsZXR1cnF1b2lzZTogMTE1Mjk5NjYsXG5cdHBhbGV2aW9sZXRyZWQ6IDE0MzgxMjAzLFxuXHRwYXBheWF3aGlwOiAxNjc3MzA3Nyxcblx0cGVhY2hwdWZmOiAxNjc2NzY3Myxcblx0cGVydTogMTM0Njg5OTEsXG5cdHBpbms6IDE2NzYxMDM1LFxuXHRwbHVtOiAxNDUyNDYzNyxcblx0cG93ZGVyYmx1ZTogMTE1OTE5MTAsXG5cdHB1cnBsZTogODM4ODczNixcblx0cmViZWNjYXB1cnBsZTogNjY5Nzg4MSxcblx0cmVkOiAxNjcxMTY4MCxcblx0cm9zeWJyb3duOiAxMjM1NzUxOSxcblx0cm95YWxibHVlOiA0Mjg2OTQ1LFxuXHRzYWRkbGVicm93bjogOTEyNzE4Nyxcblx0c2FsbW9uOiAxNjQxNjg4Mixcblx0c2FuZHlicm93bjogMTYwMzI4NjQsXG5cdHNlYWdyZWVuOiAzMDUwMzI3LFxuXHRzZWFzaGVsbDogMTY3NzQ2MzgsXG5cdHNpZW5uYTogMTA1MDY3OTcsXG5cdHNpbHZlcjogMTI2MzIyNTYsXG5cdHNreWJsdWU6IDg5MDAzMzEsXG5cdHNsYXRlYmx1ZTogNjk3MDA2MSxcblx0c2xhdGVncmF5OiA3MzcyOTQ0LFxuXHRzbGF0ZWdyZXk6IDczNzI5NDQsXG5cdHNub3c6IDE2Nzc1OTMwLFxuXHRzcHJpbmdncmVlbjogNjU0MDcsXG5cdHN0ZWVsYmx1ZTogNDYyMDk4MCxcblx0dGFuOiAxMzgwODc4MCxcblx0dGVhbDogMzI4OTYsXG5cdHRoaXN0bGU6IDE0MjA0ODg4LFxuXHR0b21hdG86IDE2NzM3MDk1LFxuXHR0dXJxdW9pc2U6IDQyNTE4NTYsXG5cdHZpb2xldDogMTU2MzEwODYsXG5cdHdoZWF0OiAxNjExMzMzMSxcblx0d2hpdGU6IDE2Nzc3MjE1LFxuXHR3aGl0ZXNtb2tlOiAxNjExOTI4NSxcblx0eWVsbG93OiAxNjc3Njk2MCxcblx0eWVsbG93Z3JlZW46IDEwMTQ1MDc0XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VOYW1lZC5qc1xudmFyIHBhcnNlTmFtZWQgPSAoY29sb3IpID0+IHtcblx0cmV0dXJuIHBhcnNlTnVtYmVyKG5hbWVkW2NvbG9yLnRvTG93ZXJDYXNlKCldLCA2KTtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZUhleC5qc1xudmFyIGhleCA9IC9eIz8oWzAtOWEtZl17OH18WzAtOWEtZl17Nn18WzAtOWEtZl17NH18WzAtOWEtZl17M30pJC9pO1xudmFyIHBhcnNlSGV4ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaDtcblx0cmV0dXJuIChtYXRjaCA9IGNvbG9yLm1hdGNoKGhleCkpID8gcGFyc2VOdW1iZXIocGFyc2VJbnQobWF0Y2hbMV0sIDE2KSwgbWF0Y2hbMV0ubGVuZ3RoKSA6IHZvaWQgMDtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3V0aWwvcmVnZXguanNcbnZhciBudW0kMSA9IFwiKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXCI7XG52YXIgcGVyID0gYCR7bnVtJDF9JWA7XG52YXIgbnVtX3BlciA9IGAoPzoke251bSQxfSV8JHtudW0kMX0pYDtcbnZhciBudW1fcGVyX25vbmUgPSBgKD86JHtudW0kMX0lfCR7bnVtJDF9fG5vbmUpYDtcbnZhciBodWUkMSA9IGAoPzoke251bSQxfShkZWd8Z3JhZHxyYWR8dHVybil8JHtudW0kMX0pYDtcbnZhciBjID0gYFxcXFxzKixcXFxccypgO1xudmFyIHJ4X251bV9wZXJfbm9uZSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBudW1fcGVyX25vbmUgKyBcIiRcIik7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYkxlZ2FjeS5qc1xudmFyIHJnYl9udW1fb2xkID0gbmV3IFJlZ0V4cChgXnJnYmE/XFxcXChcXFxccyoke251bSQxfSR7Y30ke251bSQxfSR7Y30ke251bSQxfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciByZ2JfcGVyX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtwZXJ9JHtjfSR7cGVyfSR7Y30ke3Blcn1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcGFyc2VSZ2JMZWdhY3kgPSAoY29sb3IpID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRsZXQgbWF0Y2g7XG5cdGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9udW1fb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMjU1O1xuXHR9IGVsc2UgaWYgKG1hdGNoID0gY29sb3IubWF0Y2gocmdiX3Blcl9vbGQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdICE9PSB2b2lkIDApIHJlcy5yID0gbWF0Y2hbMV0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5nID0gbWF0Y2hbMl0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5iID0gbWF0Y2hbM10gLyAxMDA7XG5cdH0gZWxzZSByZXR1cm47XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs0XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbNV0pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL19wcmVwYXJlLmpzXG52YXIgcHJlcGFyZSA9IChjb2xvciwgbW9kZSkgPT4gY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR5cGVvZiBjb2xvciAhPT0gXCJvYmplY3RcIiA/IHBhcnNlKGNvbG9yKSA6IGNvbG9yLm1vZGUgIT09IHZvaWQgMCA/IGNvbG9yIDogbW9kZSA/IHtcblx0Li4uY29sb3IsXG5cdG1vZGVcbn0gOiB2b2lkIDA7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnZlcnRlci5qc1xudmFyIGNvbnZlcnRlciA9ICh0YXJnZXRfbW9kZSA9IFwicmdiXCIpID0+IChjb2xvcikgPT4gKGNvbG9yID0gcHJlcGFyZShjb2xvciwgdGFyZ2V0X21vZGUpKSAhPT0gdm9pZCAwID8gY29sb3IubW9kZSA9PT0gdGFyZ2V0X21vZGUgPyBjb2xvciA6IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdID8gY29udmVydGVyc1tjb2xvci5tb2RlXVt0YXJnZXRfbW9kZV0oY29sb3IpIDogdGFyZ2V0X21vZGUgPT09IFwicmdiXCIgPyBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdLnJnYihjb2xvcikgOiBjb252ZXJ0ZXJzLnJnYlt0YXJnZXRfbW9kZV0oY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpKSA6IHZvaWQgMDtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbW9kZXMuanNcbnZhciBjb252ZXJ0ZXJzID0ge307XG52YXIgbW9kZXMgPSB7fTtcbnZhciBwYXJzZXJzID0gW107XG52YXIgY29sb3JQcm9maWxlcyA9IHt9O1xudmFyIGlkZW50aXR5ID0gKHYpID0+IHY7XG52YXIgdXNlTW9kZSA9IChkZWZpbml0aW9uKSA9PiB7XG5cdGNvbnZlcnRlcnNbZGVmaW5pdGlvbi5tb2RlXSA9IHtcblx0XHQuLi5jb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0sXG5cdFx0Li4uZGVmaW5pdGlvbi50b01vZGVcblx0fTtcblx0T2JqZWN0LmtleXMoZGVmaW5pdGlvbi5mcm9tTW9kZSB8fCB7fSkuZm9yRWFjaCgoaykgPT4ge1xuXHRcdGlmICghY29udmVydGVyc1trXSkgY29udmVydGVyc1trXSA9IHt9O1xuXHRcdGNvbnZlcnRlcnNba11bZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb24uZnJvbU1vZGVba107XG5cdH0pO1xuXHRpZiAoIWRlZmluaXRpb24ucmFuZ2VzKSBkZWZpbml0aW9uLnJhbmdlcyA9IHt9O1xuXHRpZiAoIWRlZmluaXRpb24uZGlmZmVyZW5jZSkgZGVmaW5pdGlvbi5kaWZmZXJlbmNlID0ge307XG5cdGRlZmluaXRpb24uY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuXHRcdGlmIChkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9PT0gdm9pZCAwKSBkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9IFswLCAxXTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0pIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBpbnRlcnBvbGF0b3IgZm9yOiAke2NoYW5uZWx9YCk7XG5cdFx0aWYgKHR5cGVvZiBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID09PSBcImZ1bmN0aW9uXCIpIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gPSB7IHVzZTogZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSB9O1xuXHRcdGlmICghZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCkgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCA9IGlkZW50aXR5O1xuXHR9KTtcblx0bW9kZXNbZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb247XG5cdChkZWZpbml0aW9uLnBhcnNlIHx8IFtdKS5mb3JFYWNoKChwYXJzZXIpID0+IHtcblx0XHR1c2VQYXJzZXIocGFyc2VyLCBkZWZpbml0aW9uLm1vZGUpO1xuXHR9KTtcblx0cmV0dXJuIGNvbnZlcnRlcihkZWZpbml0aW9uLm1vZGUpO1xufTtcbnZhciBnZXRNb2RlID0gKG1vZGUpID0+IG1vZGVzW21vZGVdO1xudmFyIHVzZVBhcnNlciA9IChwYXJzZXIsIG1vZGUpID0+IHtcblx0aWYgKHR5cGVvZiBwYXJzZXIgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoIW1vZGUpIHRocm93IG5ldyBFcnJvcihgJ21vZGUnIHJlcXVpcmVkIHdoZW4gJ3BhcnNlcicgaXMgYSBzdHJpbmdgKTtcblx0XHRjb2xvclByb2ZpbGVzW3BhcnNlcl0gPSBtb2RlO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJzZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGlmIChwYXJzZXJzLmluZGV4T2YocGFyc2VyKSA8IDApIHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wYXJzZS5qc1xudmFyIElkZW50U3RhcnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18W2EtekEtWl9dLztcbnZhciBJZGVudENvZGVQb2ludCA9IC9bXlxceDAwLVxceDdGXXxbLVxcd10vO1xudmFyIFRvayA9IHtcblx0RnVuY3Rpb246IFwiZnVuY3Rpb25cIixcblx0SWRlbnQ6IFwiaWRlbnRcIixcblx0TnVtYmVyOiBcIm51bWJlclwiLFxuXHRQZXJjZW50YWdlOiBcInBlcmNlbnRhZ2VcIixcblx0UGFyZW5DbG9zZTogXCIpXCIsXG5cdE5vbmU6IFwibm9uZVwiLFxuXHRIdWU6IFwiaHVlXCIsXG5cdEFscGhhOiBcImFscGhhXCJcbn07XG52YXIgX2kgPSAwO1xuZnVuY3Rpb24gaXNfbnVtKGNoYXJzKSB7XG5cdGxldCBjaCA9IGNoYXJzW19pXTtcblx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdGlmIChjaCA9PT0gXCItXCIgfHwgY2ggPT09IFwiK1wiKSByZXR1cm4gL1xcZC8udGVzdChjaDEpIHx8IGNoMSA9PT0gXCIuXCIgJiYgL1xcZC8udGVzdChjaGFyc1tfaSArIDJdKTtcblx0aWYgKGNoID09PSBcIi5cIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKTtcblx0cmV0dXJuIC9cXGQvLnRlc3QoY2gpO1xufVxuZnVuY3Rpb24gaXNfaWRlbnQoY2hhcnMpIHtcblx0aWYgKF9pID49IGNoYXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdGlmIChjaGFycy5sZW5ndGggLSBfaSA8IDIpIHJldHVybiBmYWxzZTtcblx0XHRsZXQgY2gxID0gY2hhcnNbX2kgKyAxXTtcblx0XHRpZiAoY2gxID09PSBcIi1cIiB8fCBJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gxKSkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cbnZhciBodWVuaXRzID0ge1xuXHRkZWc6IDEsXG5cdHJhZDogMTgwIC8gTWF0aC5QSSxcblx0Z3JhZDogOSAvIDEwLFxuXHR0dXJuOiAzNjBcbn07XG5mdW5jdGlvbiBudW0oY2hhcnMpIHtcblx0bGV0IHZhbHVlID0gXCJcIjtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCItXCIgfHwgY2hhcnNbX2ldID09PSBcIitcIikgdmFsdWUgKz0gY2hhcnNbX2krK107XG5cdHZhbHVlICs9IGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCJlXCIgfHwgY2hhcnNbX2ldID09PSBcIkVcIikge1xuXHRcdGlmICgoY2hhcnNbX2kgKyAxXSA9PT0gXCItXCIgfHwgY2hhcnNbX2kgKyAxXSA9PT0gXCIrXCIpICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgY2hhcnNbX2krK10gKyBkaWdpdHMoY2hhcnMpO1xuXHRcdGVsc2UgaWYgKC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0fVxuXHRpZiAoaXNfaWRlbnQoY2hhcnMpKSB7XG5cdFx0bGV0IGlkID0gaWRlbnQoY2hhcnMpO1xuXHRcdGlmIChpZCA9PT0gXCJkZWdcIiB8fCBpZCA9PT0gXCJyYWRcIiB8fCBpZCA9PT0gXCJ0dXJuXCIgfHwgaWQgPT09IFwiZ3JhZFwiKSByZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkh1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSAqIGh1ZW5pdHNbaWRdXG5cdFx0fTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNoYXJzW19pXSA9PT0gXCIlXCIpIHtcblx0XHRfaSsrO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBUb2suUGVyY2VudGFnZSxcblx0XHRcdHZhbHVlOiArdmFsdWVcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk51bWJlcixcblx0XHR2YWx1ZTogK3ZhbHVlXG5cdH07XG59XG5mdW5jdGlvbiBkaWdpdHMoY2hhcnMpIHtcblx0bGV0IHYgPSBcIlwiO1xuXHR3aGlsZSAoL1xcZC8udGVzdChjaGFyc1tfaV0pKSB2ICs9IGNoYXJzW19pKytdO1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGlkZW50KGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIElkZW50Q29kZVBvaW50LnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudGxpa2UoY2hhcnMpIHtcblx0bGV0IHYgPSBpZGVudChjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiKFwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkZ1bmN0aW9uLFxuXHRcdFx0dmFsdWU6IHZcblx0XHR9O1xuXHR9XG5cdGlmICh2ID09PSBcIm5vbmVcIikgcmV0dXJuIHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdHZhbHVlOiB2XG5cdH07XG59XG5mdW5jdGlvbiB0b2tlbml6ZShzdHIgPSBcIlwiKSB7XG5cdGxldCBjaGFycyA9IHN0ci50cmltKCk7XG5cdGxldCB0b2tlbnMgPSBbXTtcblx0bGV0IGNoO1xuXHRfaSA9IDA7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCkge1xuXHRcdGNoID0gY2hhcnNbX2krK107XG5cdFx0aWYgKGNoID09PSBcIlxcblwiIHx8IGNoID09PSBcIlx0XCIgfHwgY2ggPT09IFwiIFwiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLFwiKSByZXR1cm47XG5cdFx0aWYgKGNoID09PSBcIilcIikge1xuXHRcdFx0dG9rZW5zLnB1c2goeyB0eXBlOiBUb2suUGFyZW5DbG9zZSB9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiK1wiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLVwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdFx0XHRcdHZhbHVlOiBpZGVudChjaGFycylcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLlwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiL1wiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGxldCBhbHBoYTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdGFscGhhID0gbnVtKGNoYXJzKTtcblx0XHRcdFx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5IdWUpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWxwaGFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHRpZiAoaWRlbnQoY2hhcnMpID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IFRvay5BbHBoYSxcblx0XHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFRvay5Ob25lLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdm9pZCAwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKC9cXGQvLnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKElkZW50U3RhcnRDb2RlUG9pbnQudGVzdChjaCkpIHtcblx0XHRcdF9pLS07XG5cdFx0XHR0b2tlbnMucHVzaChpZGVudGxpa2UoY2hhcnMpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0cmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uIHx8IHRva2VuLnZhbHVlICE9PSBcImNvbG9yXCIpIHJldHVybjtcblx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAodG9rZW4udHlwZSAhPT0gVG9rLklkZW50KSByZXR1cm47XG5cdGNvbnN0IG1vZGUgPSBjb2xvclByb2ZpbGVzW3Rva2VuLnZhbHVlXTtcblx0aWYgKCFtb2RlKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZSB9O1xuXHRjb25zdCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgZmFsc2UpO1xuXHRpZiAoIWNvb3JkcykgcmV0dXJuO1xuXHRjb25zdCBjaGFubmVscyA9IGdldE1vZGUobW9kZSkuY2hhbm5lbHM7XG5cdGZvciAobGV0IGlpID0gMCwgYywgY2g7IGlpIDwgY2hhbm5lbHMubGVuZ3RoOyBpaSsrKSB7XG5cdFx0YyA9IGNvb3Jkc1tpaV07XG5cdFx0Y2ggPSBjaGFubmVsc1tpaV07XG5cdFx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRcdHJlc1tjaF0gPSBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAvIDEwMDtcblx0XHRcdGlmIChjaCA9PT0gXCJhbHBoYVwiKSByZXNbY2hdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmVzW2NoXSkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0Y29uc3QgY29vcmRzID0gW107XG5cdGxldCB0b2tlbjtcblx0d2hpbGUgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHR0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRvay5Ob25lIHx8IHRva2VuLnR5cGUgPT09IFRvay5OdW1iZXIgfHwgdG9rZW4udHlwZSA9PT0gVG9rLkFscGhhIHx8IHRva2VuLnR5cGUgPT09IFRvay5QZXJjZW50YWdlIHx8IGluY2x1ZGVIdWUgJiYgdG9rZW4udHlwZSA9PT0gVG9rLkh1ZSkge1xuXHRcdFx0Y29vcmRzLnB1c2godG9rZW4pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suUGFyZW5DbG9zZSkge1xuXHRcdFx0aWYgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPCAzIHx8IGNvb3Jkcy5sZW5ndGggPiA0KSByZXR1cm47XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSA0KSB7XG5cdFx0aWYgKGNvb3Jkc1szXS50eXBlICE9PSBUb2suQWxwaGEpIHJldHVybjtcblx0XHRjb29yZHNbM10gPSBjb29yZHNbM10udmFsdWU7XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPT09IDMpIGNvb3Jkcy5wdXNoKHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH0pO1xuXHRyZXR1cm4gY29vcmRzLmV2ZXJ5KChjKSA9PiBjLnR5cGUgIT09IFRvay5BbHBoYSkgPyBjb29yZHMgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0dG9rZW5zLl9pID0gMDtcblx0bGV0IHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKCF0b2tlbiB8fCB0b2tlbi50eXBlICE9PSBUb2suRnVuY3Rpb24pIHJldHVybjtcblx0bGV0IGNvb3JkcyA9IGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29vcmRzLnVuc2hpZnQodG9rZW4udmFsdWUpO1xuXHRyZXR1cm4gY29vcmRzO1xufVxudmFyIHBhcnNlID0gKGNvbG9yKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwic3RyaW5nXCIpIHJldHVybjtcblx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemUoY29sb3IpO1xuXHRjb25zdCBwYXJzZWQgPSB0b2tlbnMgPyBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIHRydWUpIDogdm9pZCAwO1xuXHRsZXQgcmVzdWx0ID0gdm9pZCAwO1xuXHRsZXQgaSA9IDA7XG5cdGxldCBsZW4gPSBwYXJzZXJzLmxlbmd0aDtcblx0d2hpbGUgKGkgPCBsZW4pIGlmICgocmVzdWx0ID0gcGFyc2Vyc1tpKytdKGNvbG9yLCBwYXJzZWQpKSAhPT0gdm9pZCAwKSByZXR1cm4gcmVzdWx0O1xuXHRyZXR1cm4gdG9rZW5zID8gcGFyc2VDb2xvclN5bnRheCh0b2tlbnMpIDogdm9pZCAwO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlUmdiLmpzXG5mdW5jdGlvbiBwYXJzZVJnYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJyZ2JcIiAmJiBwYXJzZWRbMF0gIT09IFwicmdiYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRjb25zdCBbLCByLCBnLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChyLnR5cGUgPT09IFRvay5IdWUgfHwgZy50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAoci50eXBlICE9PSBUb2suTm9uZSkgcmVzLnIgPSByLnR5cGUgPT09IFRvay5OdW1iZXIgPyByLnZhbHVlIC8gMjU1IDogci52YWx1ZSAvIDEwMDtcblx0aWYgKGcudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5nID0gZy50eXBlID09PSBUb2suTnVtYmVyID8gZy52YWx1ZSAvIDI1NSA6IGcudmFsdWUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgLyAyNTUgOiBiLnZhbHVlIC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVRyYW5zcGFyZW50LmpzXG52YXIgcGFyc2VUcmFuc3BhcmVudCA9IChjKSA9PiBjID09PSBcInRyYW5zcGFyZW50XCIgPyB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IDAsXG5cdGc6IDAsXG5cdGI6IDAsXG5cdGFscGhhOiAwXG59IDogdm9pZCAwO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9sZXJwLmpzXG52YXIgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgdCAqIChiIC0gYSk7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL3BpZWNld2lzZS5qc1xudmFyIGdldF9jbGFzc2VzID0gKGFycikgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRsZXQgYSA9IGFycltpXTtcblx0XHRsZXQgYiA9IGFycltpICsgMV07XG5cdFx0aWYgKGEgPT09IHZvaWQgMCAmJiBiID09PSB2b2lkIDApIGNsYXNzZXMucHVzaCh2b2lkIDApO1xuXHRcdGVsc2UgaWYgKGEgIT09IHZvaWQgMCAmJiBiICE9PSB2b2lkIDApIGNsYXNzZXMucHVzaChbYSwgYl0pO1xuXHRcdGVsc2UgY2xhc3Nlcy5wdXNoKGEgIT09IHZvaWQgMCA/IFthLCBhXSA6IFtiLCBiXSk7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xudmFyIGludGVycG9sYXRvclBpZWNld2lzZSA9IChpbnRlcnBvbGF0b3IpID0+IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBnZXRfY2xhc3NlcyhhcnIpO1xuXHRyZXR1cm4gKHQpID0+IHtcblx0XHRsZXQgY2xzID0gdCAqIGNsYXNzZXMubGVuZ3RoO1xuXHRcdGxldCBpZHggPSB0ID49IDEgPyBjbGFzc2VzLmxlbmd0aCAtIDEgOiBNYXRoLm1heChNYXRoLmZsb29yKGNscyksIDApO1xuXHRcdGxldCBwYWlyID0gY2xhc3Nlc1tpZHhdO1xuXHRcdHJldHVybiBwYWlyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnRlcnBvbGF0b3IocGFpclswXSwgcGFpclsxXSwgY2xzIC0gaWR4KTtcblx0fTtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL2xpbmVhci5qc1xudmFyIGludGVycG9sYXRvckxpbmVhciA9IGludGVycG9sYXRvclBpZWNld2lzZShsZXJwKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvYWxwaGEuanNcbnZhciBmaXh1cEFscGhhID0gKGFycikgPT4ge1xuXHRsZXQgc29tZV9kZWZpbmVkID0gZmFsc2U7XG5cdGxldCByZXMgPSBhcnIubWFwKCh2KSA9PiB7XG5cdFx0aWYgKHYgIT09IHZvaWQgMCkge1xuXHRcdFx0c29tZV9kZWZpbmVkID0gdHJ1ZTtcblx0XHRcdHJldHVybiB2O1xuXHRcdH1cblx0XHRyZXR1cm4gMTtcblx0fSk7XG5cdHJldHVybiBzb21lX2RlZmluZWQgPyByZXMgOiBhcnI7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjcgPSB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJyXCIsXG5cdFx0XCJnXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXG5cdFx0cGFyc2VSZ2IsXG5cdFx0cGFyc2VIZXgsXG5cdFx0cGFyc2VSZ2JMZWdhY3ksXG5cdFx0cGFyc2VOYW1lZCxcblx0XHRwYXJzZVRyYW5zcGFyZW50LFxuXHRcdFwic3JnYlwiXG5cdF0sXG5cdHNlcmlhbGl6ZTogXCJzcmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0cjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGdhbXV0OiB0cnVlLFxuXHR3aGl0ZToge1xuXHRcdHI6IDEsXG5cdFx0ZzogMSxcblx0XHRiOiAxXG5cdH0sXG5cdGJsYWNrOiB7XG5cdFx0cjogMCxcblx0XHRnOiAwLFxuXHRcdGI6IDBcblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRBOThUb1h5ejY1LmpzXG52YXIgbGluZWFyaXplJDIgPSAodiA9IDApID0+IE1hdGgucG93KE1hdGguYWJzKHYpLCA1NjMgLyAyNTYpICogTWF0aC5zaWduKHYpO1xudmFyIGNvbnZlcnRBOThUb1h5ejY1ID0gKGE5OCkgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQyKGE5OC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUkMihhOTguZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDIoYTk4LmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNTc2NjY5MDQyOTEwMTMwNSAqIHIgKyAuMTg1NTU4MjM3OTA2NTQ2MyAqIGcgKyAuMTg4MjI4NjQ2MjM0OTk0NyAqIGIsXG5cdFx0eTogLjI5NzM0NDk3NTI1MDUzNiAqIHIgKyAuNjI3MzYzNTY2MjU1NDY2MSAqIGcgKyAuMDc1MjkxNDU4NDkzOTk3OSAqIGIsXG5cdFx0ejogLjAyNzAzMTM2MTM4NjQxMjMgKiByICsgLjA3MDY4ODg1MjUzNTgyNzIgKiBnICsgLjk5MTMzNzUzNjgzNzYzODYgKiBiXG5cdH07XG5cdGlmIChhOTguYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYTk4LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRYeXo2NVRvQTk4LmpzXG52YXIgZ2FtbWEkMiA9ICh2KSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgMjU2IC8gNTYzKSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0WHl6NjVUb0E5OCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImE5OFwiLFxuXHRcdHI6IGdhbW1hJDIoeCAqIDIuMDQxNTg3OTAzODEwNzQ2NSAtIHkgKiAuNTY1MDA2OTc0Mjc4ODU5NyAtIC4zNDQ3MzEzNTA3NzgzMjk3ICogeiksXG5cdFx0ZzogZ2FtbWEkMih4ICogLS45NjkyNDM2MzYyODA4Nzk4ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNiArIC4wNDE1NTUwNTc0MDcxNzU2ICogeiksXG5cdFx0YjogZ2FtbWEkMih4ICogLjAxMzQ0NDI4MDYzMjAzMTIgLSB5ICogLjExODM2MjM5MjIzMTAxODQgKyAxLjAxNTE3NDk5NDM5MTIwNTggKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRSZ2JUb0xyZ2IuanNcbnZhciBmbiQzID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzIDw9IC4wNDA0NSkgcmV0dXJuIGMgLyAxMi45Mjtcblx0cmV0dXJuIChNYXRoLnNpZ24oYykgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbn07XG52YXIgY29udmVydFJnYlRvTHJnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiBmbiQzKHIpLFxuXHRcdGc6IGZuJDMoZyksXG5cdFx0YjogZm4kMyhiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0UmdiVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDEyMzkwNzk5MjY1OTU5MyAqIHIgKyAuMzU3NTg0MzM5MzgzODc4ICogZyArIC4xODA0ODA3ODg0MDE4MzQzICogYixcblx0XHR5OiAuMjEyNjM5MDA1ODcxNTEwMiAqIHIgKyAuNzE1MTY4Njc4NzY3NzU2ICogZyArIC4wNzIxOTIzMTUzNjA3MzM3ICogYixcblx0XHR6OiAuMDE5MzMwODE4NzE1NTkxOCAqIHIgKyAuMTE5MTk0Nzc5Nzk0NjI2ICogZyArIC45NTA1MzIxNTIyNDk2NjA3ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRMcmdiVG9SZ2IuanNcbnZhciBmbiQyID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzID4gLjAwMzEzMDgpIHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogKDEuMDU1ICogTWF0aC5wb3coYWJzLCAxIC8gMi40KSAtIC4wNTUpO1xuXHRyZXR1cm4gYyAqIDEyLjkyO1xufTtcbnZhciBjb252ZXJ0THJnYlRvUmdiID0gKHsgciwgZywgYiwgYWxwaGEgfSwgbW9kZSA9IFwicmdiXCIpID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdHI6IGZuJDIociksXG5cdFx0ZzogZm4kMihnKSxcblx0XHRiOiBmbiQyKGIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnZlcnRYeXo2NVRvUmdiLmpzXG52YXIgY29udmVydFh5ejY1VG9SZ2IgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiB4ICogMy4yNDA5Njk5NDE5MDQ1MjI2IC0geSAqIDEuNTM3MzgzMTc3NTcwMDk0IC0gLjQ5ODYxMDc2MDI5MzAwMzQgKiB6LFxuXHRcdGc6IHggKiAtLjk2OTI0MzYzNjI4MDg3OTYgKyB5ICogMS44NzU5Njc1MDE1MDc3MjA0ICsgLjA0MTU1NTA1NzQwNzE3NTYgKiB6LFxuXHRcdGI6IHggKiAuMDU1NjMwMDc5Njk2OTkzNiAtIHkgKiAuMjAzOTc2OTU4ODg4OTc2NSArIDEuMDU2OTcxNTE0MjQyODc4NCAqIHpcblx0fSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJhOThcIixcblx0cGFyc2U6IFtcImE5OC1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJhOTgtcmdiXCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvQTk4KGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvQTk4XG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0QTk4VG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0QTk4VG9YeXo2NVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL25vcm1hbGl6ZUh1ZS5qc1xudmFyIG5vcm1hbGl6ZUh1ZSA9IChodWUpID0+IChodWUgPSBodWUgJSAzNjApIDwgMCA/IGh1ZSArIDM2MCA6IGh1ZTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvaHVlLmpzXG52YXIgaHVlID0gKGh1ZXMsIGZuKSA9PiB7XG5cdHJldHVybiBodWVzLm1hcCgoaHVlLCBpZHgsIGFycikgPT4ge1xuXHRcdGlmIChodWUgPT09IHZvaWQgMCkgcmV0dXJuIGh1ZTtcblx0XHRsZXQgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUh1ZShodWUpO1xuXHRcdGlmIChpZHggPT09IDAgfHwgaHVlc1tpZHggLSAxXSA9PT0gdm9pZCAwKSByZXR1cm4gbm9ybWFsaXplZDtcblx0XHRyZXR1cm4gZm4obm9ybWFsaXplZCAtIG5vcm1hbGl6ZUh1ZShhcnJbaWR4IC0gMV0pKTtcblx0fSkucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcblx0XHRpZiAoIWFjYy5sZW5ndGggfHwgY3VyciA9PT0gdm9pZCAwIHx8IGFjY1thY2MubGVuZ3RoIC0gMV0gPT09IHZvaWQgMCkge1xuXHRcdFx0YWNjLnB1c2goY3Vycik7XG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH1cblx0XHRhY2MucHVzaChjdXJyICsgYWNjW2FjYy5sZW5ndGggLSAxXSk7XG5cdFx0cmV0dXJuIGFjYztcblx0fSwgW10pO1xufTtcbnZhciBmaXh1cEh1ZVNob3J0ZXIgPSAoYXJyKSA9PiBodWUoYXJyLCAoZCkgPT4gTWF0aC5hYnMoZCkgPD0gMTgwID8gZCA6IGQgLSAzNjAgKiBNYXRoLnNpZ24oZCkpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29uc3RhbnRzLmpzXG52YXIgTSA9IFtcblx0LS4xNDg2MSxcblx0MS43ODI3Nyxcblx0LS4yOTIyNyxcblx0LS45MDY0OSxcblx0MS45NzI5NCxcblx0MFxuXTtcbnZhciBkZWdUb1JhZCA9IE1hdGguUEkgLyAxODA7XG52YXIgcmFkVG9EZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydFJnYlRvQ3ViZWhlbGl4LmpzXG52YXIgREUgPSBNWzNdICogTVs0XTtcbnZhciBCRSA9IE1bMV0gKiBNWzRdO1xudmFyIEJDQUQgPSBNWzFdICogTVsyXSAtIE1bMF0gKiBNWzNdO1xudmFyIGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGwgPSAoQkNBRCAqIGIgKyByICogREUgLSBnICogQkUpIC8gKEJDQUQgKyBERSAtIEJFKTtcblx0bGV0IHggPSBiIC0gbDtcblx0bGV0IHkgPSAoTVs0XSAqIChnIC0gbCkgLSBNWzJdICogeCkgLyBNWzNdO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdFx0bCxcblx0XHRzOiBsID09PSAwIHx8IGwgPT09IDEgPyB2b2lkIDAgOiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgLyAoTVs0XSAqIGwgKiAoMSAtIGwpKVxuXHR9O1xuXHRpZiAocmVzLnMpIHJlcy5oID0gTWF0aC5hdGFuMih5LCB4KSAqIHJhZFRvRGVnIC0gMTIwO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydEN1YmVoZWxpeFRvUmdiLmpzXG52YXIgY29udmVydEN1YmVoZWxpeFRvUmdiID0gKHsgaCwgcywgbCwgYWxwaGEgfSkgPT4ge1xuXHRsZXQgcmVzID0geyBtb2RlOiBcInJnYlwiIH07XG5cdGggPSAoaCA9PT0gdm9pZCAwID8gMCA6IGggKyAxMjApICogZGVnVG9SYWQ7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRsZXQgYW1wID0gcyA9PT0gdm9pZCAwID8gMCA6IHMgKiBsICogKDEgLSBsKTtcblx0bGV0IGNvc2ggPSBNYXRoLmNvcyhoKTtcblx0bGV0IHNpbmggPSBNYXRoLnNpbihoKTtcblx0cmVzLnIgPSBsICsgYW1wICogKE1bMF0gKiBjb3NoICsgTVsxXSAqIHNpbmgpO1xuXHRyZXMuZyA9IGwgKyBhbXAgKiAoTVsyXSAqIGNvc2ggKyBNWzNdICogc2luaCk7XG5cdHJlcy5iID0gbCArIGFtcCAqIChNWzRdICogY29zaCArIE1bNV0gKiBzaW5oKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGlmZmVyZW5jZS5qc1xudmFyIGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5zIHx8ICFzbXAucykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLnMgKiBzbXAucykgKiBkSDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZU5haXZlID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDApIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRpZiAoTWF0aC5hYnMoc21wX2ggLSBzdGRfaCkgPiAxODApIHJldHVybiBzdGRfaCAtIChzbXBfaCAtIDM2MCAqIE1hdGguc2lnbihzbXBfaCAtIHN0ZF9oKSk7XG5cdHJldHVybiBzbXBfaCAtIHN0ZF9oO1xufTtcbnZhciBkaWZmZXJlbmNlSHVlQ2hyb21hID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5jIHx8ICFzbXAuYykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLmMgKiBzbXAuYykgKiBkSDtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2F2ZXJhZ2UuanNcbnZhciBhdmVyYWdlQW5nbGUgPSAodmFsKSA9PiB7XG5cdGxldCBzdW0gPSB2YWwucmVkdWNlKChzdW0sIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwgIT09IHZvaWQgMCkge1xuXHRcdFx0bGV0IHJhZCA9IHZhbCAqIE1hdGguUEkgLyAxODA7XG5cdFx0XHRzdW0uc2luICs9IE1hdGguc2luKHJhZCk7XG5cdFx0XHRzdW0uY29zICs9IE1hdGguY29zKHJhZCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdW07XG5cdH0sIHtcblx0XHRzaW46IDAsXG5cdFx0Y29zOiAwXG5cdH0pO1xuXHRsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHN1bS5zaW4sIHN1bS5jb3MpICogMTgwIC8gTWF0aC5QSTtcblx0cmV0dXJuIGFuZ2xlIDwgMCA/IDM2MCArIGFuZ2xlIDogYW5nbGU7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjUgPSB7XG5cdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWN1YmVoZWxpeFwiXSxcblx0c2VyaWFsaXplOiBcIi0tY3ViZWhlbGl4XCIsXG5cdHJhbmdlczoge1xuXHRcdGg6IFswLCAzNjBdLFxuXHRcdHM6IFswLCA0LjYxNF0sXG5cdFx0bDogWzAsIDFdXG5cdH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvQ3ViZWhlbGl4IH0sXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRDdWJlaGVsaXhUb1JnYiB9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExhYlRvTGNoLmpzXG52YXIgY29udmVydExhYlRvTGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSwgbW9kZSA9IFwibGNoXCIpID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdGwsXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExjaFRvTGFiLmpzXG52YXIgY29udmVydExjaFRvTGFiID0gKHsgbCwgYywgaCwgYWxwaGEgfSwgbW9kZSA9IFwibGFiXCIpID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGE6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHRiOiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29uc3RhbnRzLmpzXG52YXIgayQyID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSQyID0gTWF0aC5wb3coNiwgMykgLyBNYXRoLnBvdygyOSwgMyk7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnN0YW50cy5qc1xudmFyIEQ1MCA9IHtcblx0WDogLjM0NTcgLyAuMzU4NSxcblx0WTogMSxcblx0WjogLjI5NTggLyAuMzU4NVxufTtcbnZhciBENjUgPSB7XG5cdFg6IC4zMTI3IC8gLjMyOSxcblx0WTogMSxcblx0WjogLjM1ODMgLyAuMzI5XG59O1xudmFyIGskMSA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1h5ejY1LmpzXG52YXIgZm4kMSA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUkMiA/IE1hdGgucG93KHYsIDMpIDogKDExNiAqIHYgLSAxNikgLyBrJDI7XG52YXIgY29udmVydExhYjY1VG9YeXo2NSA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiBmbiQxKGZ4KSAqIEQ2NS5YLFxuXHRcdHk6IGZuJDEoZnkpICogRDY1LlksXG5cdFx0ejogZm4kMShmeikgKiBENjUuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWI2NVRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydExhYjY1VG9YeXo2NShsYWIpKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFh5ejY1VG9MYWI2NS5qc1xudmFyIGYkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlJDIgPyBNYXRoLmNicnQodmFsdWUpIDogKGskMiAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo2NVRvTGFiNjUgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYkMSh4IC8gRDY1LlgpO1xuXHRsZXQgZjEgPSBmJDEoeSAvIEQ2NS5ZKTtcblx0bGV0IGYyID0gZiQxKHogLyBENjUuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IDExNiAqIGYxIC0gMTYsXG5cdFx0YTogNTAwICogKGYwIC0gZjEpLFxuXHRcdGI6IDIwMCAqIChmMSAtIGYyKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0UmdiVG9MYWI2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYjY1ID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9MYWI2NShjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb25zdGFudHMuanNcbnZhciDOuCA9IDI2IC8gMTgwICogTWF0aC5QSTtcbnZhciBjb3POuCA9IE1hdGguY29zKM64KTtcbnZhciBzaW7OuCA9IE1hdGguc2luKM64KTtcbnZhciBmYWN0b3IgPSAxMDAgLyBNYXRoLmxvZygxMzkgLyAxMDApO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2NvbnZlcnREbGNoVG9MYWI2NS5qc1xudmFyIGNvbnZlcnREbGNoVG9MYWI2NSA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChjID09PSB2b2lkIDApIGMgPSAwO1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxhYjY1XCIsXG5cdFx0bDogKE1hdGguZXhwKGwgKiAxIC8gZmFjdG9yKSAtIDEpIC8gLjAwMzlcblx0fTtcblx0bGV0IEcgPSAoTWF0aC5leHAoLjA0MzUgKiBjICogMSAqIDEpIC0gMSkgLyAuMDc1O1xuXHRsZXQgZSA9IEcgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSAtIM64KTtcblx0bGV0IGYgPSBHICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdHJlcy5hID0gZSAqIGNvc864IC0gZiAvIC44MyAqIHNpbs64O1xuXHRyZXMuYiA9IGUgKiBzaW7OuCArIGYgLyAuODMgKiBjb3POuDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0TGFiNjVUb0RsY2guanNcbnZhciBjb252ZXJ0TGFiNjVUb0RsY2ggPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBlID0gYSAqIGNvc864ICsgYiAqIHNpbs64O1xuXHRsZXQgZiA9IC44MyAqIChiICogY29zzrggLSBhICogc2luzrgpO1xuXHRsZXQgRyA9IE1hdGguc3FydChlICogZSArIGYgKiBmKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImRsY2hcIixcblx0XHRsOiBmYWN0b3IgLyAxICogTWF0aC5sb2coMSArIC4wMDM5ICogbCksXG5cdFx0YzogTWF0aC5sb2coMSArIC4wNzUgKiBHKSAvICguMDQzNSAqIDEgKiAxKVxuXHR9O1xuXHRpZiAocmVzLmMpIHJlcy5oID0gbm9ybWFsaXplSHVlKChNYXRoLmF0YW4yKGYsIGUpICsgzrgpIC8gTWF0aC5QSSAqIDE4MCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnREbGFiVG9MYWI2NSA9IChjKSA9PiBjb252ZXJ0RGxjaFRvTGFiNjUoY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSk7XG52YXIgY29udmVydExhYjY1VG9EbGFiID0gKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjb252ZXJ0TGFiNjVUb0RsY2goYyksIFwiZGxhYlwiKTtcbnZhciBkZWZpbml0aW9uJDI0ID0ge1xuXHRtb2RlOiBcImRsYWJcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxhYlwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsYWJUb0xhYjY1LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGFiVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxhYihjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy00MC4wOSwgNDUuNTAxXSxcblx0XHRiOiBbLTQwLjQ2OSwgNDQuMzQ0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIzID0ge1xuXHRtb2RlOiBcImRsY2hcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxjaFwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsY2hUb0xhYjY1LFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJkbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGNoVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGNoLFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJkbGNoXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxjaChjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDUxLjQ4NF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydEhzaVRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNpVG9SZ2IoeyBoLCBzLCBpLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxIC0gcyksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRcdGI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzaS9jb252ZXJ0UmdiVG9Ic2kuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzaSh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNpXCIsXG5cdFx0czogciArIGcgKyBiID09PSAwID8gMCA6IDEgLSAzICogbSAvIChyICsgZyArIGIpLFxuXHRcdGk6IChyICsgZyArIGIpIC8gM1xuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjIgPSB7XG5cdG1vZGU6IFwiaHNpXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2lUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc2lcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzaVwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzaSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwiaVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0SHNsVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRIc2xUb1JnYih7IGgsIHMsIGwsIGFscGhhIH0pIHtcblx0aCA9IG5vcm1hbGl6ZUh1ZShoICE9PSB2b2lkIDAgPyBoIDogMCk7XG5cdGlmIChzID09PSB2b2lkIDApIHMgPSAwO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IG0xID0gbCArIHMgKiAobCA8IC41ID8gbCA6IDEgLSBsKTtcblx0bGV0IG0yID0gbTEgLSAobTEgLSBsKSAqIDIgKiBNYXRoLmFicyhoIC8gNjAgJSAyIC0gMSk7XG5cdGxldCByZXM7XG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoIC8gNjApKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiBtMSxcblx0XHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiAyICogbCAtIG0xLFxuXHRcdFx0XHRnOiBtMixcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogcmVzID0ge1xuXHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0fTtcblx0fVxuXHRyZXMubW9kZSA9IFwicmdiXCI7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL2NvbnZlcnRSZ2JUb0hzbC5qc1xuZnVuY3Rpb24gY29udmVydFJnYlRvSHNsKHsgciwgZywgYiwgYWxwaGEgfSkge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTSA9IE1hdGgubWF4KHIsIGcsIGIpLCBtID0gTWF0aC5taW4ociwgZywgYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJoc2xcIixcblx0XHRzOiBNID09PSBtID8gMCA6IChNIC0gbSkgLyAoMSAtIE1hdGguYWJzKE0gKyBtIC0gMSkpLFxuXHRcdGw6IC41ICogKE0gKyBtKVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL2h1ZS5qc1xudmFyIGh1ZVRvRGVnID0gKHZhbCwgdW5pdCkgPT4ge1xuXHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRjYXNlIFwiZGVnXCI6IHJldHVybiArdmFsO1xuXHRcdGNhc2UgXCJyYWRcIjogcmV0dXJuIHZhbCAvIE1hdGguUEkgKiAxODA7XG5cdFx0Y2FzZSBcImdyYWRcIjogcmV0dXJuIHZhbCAvIDEwICogOTtcblx0XHRjYXNlIFwidHVyblwiOiByZXR1cm4gdmFsICogMzYwO1xuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvcGFyc2VIc2xMZWdhY3kuanNcbnZhciBoc2xfb2xkID0gbmV3IFJlZ0V4cChgXmhzbGE/XFxcXChcXFxccyoke2h1ZSQxfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlSHNsTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaCA9IGNvbG9yLm1hdGNoKGhzbF9vbGQpO1xuXHRpZiAoIW1hdGNoKSByZXR1cm47XG5cdGxldCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5oID0gK21hdGNoWzNdO1xuXHRlbHNlIGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwICYmIG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5oID0gaHVlVG9EZWcobWF0Y2hbMV0sIG1hdGNoWzJdKTtcblx0aWYgKG1hdGNoWzRdICE9PSB2b2lkIDApIHJlcy5zID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNF0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzVdICE9PSB2b2lkIDApIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNV0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzZdICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG1hdGNoWzZdIC8gMTAwKSk7XG5cdGVsc2UgaWYgKG1hdGNoWzddICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICttYXRjaFs3XSkpO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsLmpzXG5mdW5jdGlvbiBwYXJzZUhzbChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJoc2xcIiAmJiBwYXJzZWRbMF0gIT09IFwiaHNsYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJoc2xcIiB9O1xuXHRjb25zdCBbLCBoLCBzLCBsLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAocy50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLnMgPSBzLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5sID0gbC52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMSA9IHtcblx0bW9kZTogXCJoc2xcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEhzbFRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHNsIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtwYXJzZUhzbCwgcGFyc2VIc2xMZWdhY3ldLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgaHNsKCR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0gJHtjLnMgIT09IHZvaWQgMCA/IGMucyAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9ICR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydEhzdlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHN2VG9SZ2IoeyBoLCBzLCB2LCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYsXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzdi9jb252ZXJ0UmdiVG9Ic3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzdih7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHN2XCIsXG5cdFx0czogTSA9PT0gMCA/IDAgOiAxIC0gbSAvIE0sXG5cdFx0djogTVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjAgPSB7XG5cdG1vZGU6IFwiaHN2XCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc3ZUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzdlwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzdiB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwidlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0SHdiVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRId2JUb1JnYih7IGgsIHcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHcgPT09IHZvaWQgMCkgdyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRpZiAodyArIGIgPiAxKSB7XG5cdFx0bGV0IHMgPSB3ICsgYjtcblx0XHR3IC89IHM7XG5cdFx0YiAvPSBzO1xuXHR9XG5cdHJldHVybiBjb252ZXJ0SHN2VG9SZ2Ioe1xuXHRcdGgsXG5cdFx0czogYiA9PT0gMSA/IDEgOiAxIC0gdyAvICgxIC0gYiksXG5cdFx0djogMSAtIGIsXG5cdFx0YWxwaGFcblx0fSk7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0UmdiVG9Id2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0h3YihyZ2JhKSB7XG5cdGxldCBoc3YgPSBjb252ZXJ0UmdiVG9Ic3YocmdiYSk7XG5cdGlmIChoc3YgPT09IHZvaWQgMCkgcmV0dXJuIHZvaWQgMDtcblx0bGV0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRsZXQgdiA9IGhzdi52ICE9PSB2b2lkIDAgPyBoc3YudiA6IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJod2JcIixcblx0XHR3OiAoMSAtIHMpICogdixcblx0XHRiOiAxIC0gdlxuXHR9O1xuXHRpZiAoaHN2LmggIT09IHZvaWQgMCkgcmVzLmggPSBoc3YuaDtcblx0aWYgKGhzdi5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBoc3YuYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9wYXJzZUh3Yi5qc1xuZnVuY3Rpb24gUGFyc2VId2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHdiXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImh3YlwiIH07XG5cdGNvbnN0IFssIGgsIHcsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAody50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmICh3LnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMudyA9IHcudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGIudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmIgPSBiLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE5ID0ge1xuXHRtb2RlOiBcImh3YlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Id2IgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcIndcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRwYXJzZTogW1BhcnNlSHdiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGh3Yigke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy53ICE9PSB2b2lkIDAgPyBjLncgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZU5haXZlIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hkci90cmFuc2Zlci5qc1xudmFyIE0xID0gLjE1OTMwMTc1NzgxMjU7XG52YXIgTTIgPSA3OC44NDM3NTtcbnZhciBDMSA9IC44MzU5Mzc1O1xudmFyIEMyID0gMTguODUxNTYyNTtcbnZhciBDMyA9IDE4LjY4NzU7XG5mdW5jdGlvbiB0cmFuc2ZlclBxRGVjb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYsIDEgLyBNMik7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdyhNYXRoLm1heCgwLCBjIC0gQzEpIC8gKEMyIC0gQzMgKiBjKSwgMSAvIE0xKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZmVyUHFFbmNvZGUodikge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRjb25zdCBjID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiBjKSAvICgxICsgQzMgKiBjKSwgTTIpO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvY29udmVydEl0cFRvWHl6NjUuanNcbnZhciB0b1JlbCA9IChjKSA9PiBNYXRoLm1heChjIC8gMjAzLCAwKTtcbnZhciBjb252ZXJ0SXRwVG9YeXo2NSA9ICh7IGksIHQsIHAsIGFscGhhIH0pID0+IHtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmICh0ID09PSB2b2lkIDApIHQgPSAwO1xuXHRpZiAocCA9PT0gdm9pZCAwKSBwID0gMDtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFEZWNvZGUoaSArIC4wMDg2MDkwMzcwMzc5MzI3NjEgKiB0ICsgLjExMTAyOTYyNTAwMzAyNTkzICogcCk7XG5cdGNvbnN0IG0gPSB0cmFuc2ZlclBxRGVjb2RlKGkgLSAuMDA4NjA5MDM3MDM3OTMyNzUgKiB0IC0gLjExMTAyOTYyNTAwMzAyNTk5ICogcCk7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuNTYwMDMxMzM1NzEwNjc5MSAqIHQgLSAuMzIwNjI3MTc0OTg3MzE4ODUgKiBwKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiB0b1JlbCgyLjA3MDE1MjIxODM4OTQyMiAqIGwgLSAxLjMyNjM0NzMzODk2NzE1NTYgKiBtICsgLjIwNjY1MTA0NzYyOTQwNTEgKiBzKSxcblx0XHR5OiB0b1JlbCguMzY0NzM4NTIwOTc0ODA3NCAqIGwgKyAuNjgwNTY2MDI0OTQ3MjI3ICogbSAtIC4wNDUzMDQ1NDU5MjIwMzQ2ICogcyksXG5cdFx0ejogdG9SZWwoLS4wNDk3NDcyMDc1MzU4MTIgKiBsIC0gLjA0OTI2MDk2NjY5NjYxMzggKiBtICsgMS4xODgwNjU5MjQ5OTIzMDQyICogcylcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRYeXo2NVRvSXRwLmpzXG52YXIgdG9BYnMgPSAoYyA9IDApID0+IE1hdGgubWF4KGMgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSXRwID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRjb25zdCBhYnNYID0gdG9BYnMoeCk7XG5cdGNvbnN0IGFic1kgPSB0b0Ficyh5KTtcblx0Y29uc3QgYWJzWiA9IHRvQWJzKHopO1xuXHRjb25zdCBsID0gdHJhbnNmZXJQcUVuY29kZSguMzU5MjgzMjU5MDEyMTIxNyAqIGFic1ggKyAuNjk3NjA1MTE0Nzc3OTUwMiAqIGFic1kgLSAuMDM1ODkxNTkzMjMyMDI4OSAqIGFic1opO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcUVuY29kZSgtLjE5MjA4MDg0NjM3MDQ5OTUgKiBhYnNYICsgMS4xMDA0NzY3OTcwMzc0MzIzICogYWJzWSArIC4wNzUzNzQ4NjU4NTE5MTE4ICogYWJzWik7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRW5jb2RlKC4wMDcwNzk3ODQ0NjA3NDc3ICogYWJzWCArIC4wNzQ4Mzk2NjYyMTg2MzY2ICogYWJzWSArIC44NDMzMjY1NDUzODk4NzY1ICogYWJzWik7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcIml0cFwiLFxuXHRcdGk6IC41ICogbCArIC41ICogbSxcblx0XHR0OiAxLjYxMzc2OTUzMTI1ICogbCAtIDMuMzIzNDg2MzI4MTI1ICogbSArIDEuNzA5NzE2Nzk2ODc1ICogcyxcblx0XHRwOiA0LjM3ODE3MzgyODEyNSAqIGwgLSA0LjI0NTYwNTQ2ODc1ICogbSAtIC4xMzI1NjgzNTkzNzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOCA9IHtcblx0bW9kZTogXCJpdHBcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImlcIixcblx0XHRcInRcIixcblx0XHRcInBcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0taWN0Y3BcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWljdGNwXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0SXRwVG9YeXo2NSxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEl0cFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0l0cCxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9JdHAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbMCwgLjU4MV0sXG5cdFx0dDogWy0uMzY5LCAuMjcyXSxcblx0XHRwOiBbLS4xNjQsIC4zMzFdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHQ6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRwOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0WHl6NjVUb0phYi5qc1xudmFyIHAkMSA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCQxID0gMTYyOTU0OTk1MzI4MjE1NjVlLTI3O1xudmFyIGphYlBxRW5jb2RlID0gKHYpID0+IHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0bGV0IHZuID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiB2bikgLyAoMSArIEMzICogdm4pLCBwJDEpO1xufTtcbnZhciBhYnMgPSAodiA9IDApID0+IE1hdGgubWF4KHYgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSmFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHR4ID0gYWJzKHgpO1xuXHR5ID0gYWJzKHkpO1xuXHR6ID0gYWJzKHopO1xuXHRsZXQgeHAgPSAxLjE1ICogeCAtIC4xNSAqIHo7XG5cdGxldCB5cCA9IC42NiAqIHkgKyAuMzQgKiB4O1xuXHRsZXQgbCA9IGphYlBxRW5jb2RlKC40MTQ3ODk3MiAqIHhwICsgLjU3OTk5OSAqIHlwICsgLjAxNDY0OCAqIHopO1xuXHRsZXQgbSA9IGphYlBxRW5jb2RlKC0uMjAxNTEgKiB4cCArIDEuMTIwNjQ5ICogeXAgKyAuMDUzMTAwOCAqIHopO1xuXHRsZXQgcyA9IGphYlBxRW5jb2RlKC0uMDE2NjAwOCAqIHhwICsgLjI2NDggKiB5cCArIC42Njg0Nzk5ICogeik7XG5cdGxldCBpID0gKGwgKyBtKSAvIDI7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJqYWJcIixcblx0XHRqOiAuNDQgKiBpIC8gKDEgLSAuNTYgKiBpKSAtIGQwJDEsXG5cdFx0YTogMy41MjQgKiBsIC0gNC4wNjY3MDggKiBtICsgLjU0MjcwOCAqIHMsXG5cdFx0YjogLjE5OTA3NiAqIGwgKyAxLjA5Njc5OSAqIG0gLSAxLjI5NTg3NSAqIHNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1h5ejY1LmpzXG52YXIgcCA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcURlY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2cCA9IE1hdGgucG93KHYsIDEgLyBwKTtcblx0cmV0dXJuIDFlNCAqIE1hdGgucG93KChDMSAtIHZwKSAvIChDMyAqIHZwIC0gQzIpLCAxIC8gTTEpO1xufTtcbnZhciByZWwgPSAodikgPT4gdiAvIDIwMztcbnZhciBjb252ZXJ0SmFiVG9YeXo2NSA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGogPT09IHZvaWQgMCkgaiA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGkgPSAoaiArIGQwKSAvICguNDQgKyAuNTYgKiAoaiArIGQwKSk7XG5cdGxldCBsID0gamFiUHFEZWNvZGUoaSArIC4xMzg2MDUwNCAqIGEgKyAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBtID0gamFiUHFEZWNvZGUoaSAtIC4xMzg2MDUwNCAqIGEgLSAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBzID0gamFiUHFEZWNvZGUoaSAtIC4wOTYwMTkyNDIgKiBhIC0gLjgxMTg5MTkgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogcmVsKDEuNjYxMzczMDI0NjUyMTc0ICogbCAtIC45MTQ1MjMwODEzMDQzNDggKiBtICsgLjIzMTM2MjA4MTczOTEzMDQ1ICogcyksXG5cdFx0eTogcmVsKC0uMzI1MDc1ODYxMTg0NDUzMyAqIGwgKyAxLjU3MTg0NzAyNjczMjU0MyAqIG0gLSAuMjE4MjUzODM0NTMyMjc5MjggKiBzKSxcblx0XHR6OiByZWwoLS4wOTA5ODI4MTEgKiBsIC0gLjMxMjcyODI5ICogbSArIDEuNTIyNzY2NiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0UmdiVG9KYWIuanNcbnZhciBjb252ZXJ0UmdiVG9KYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NjVUb0phYihjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRKYWJUb1JnYiA9IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEphYlRvWHl6NjUoY29sb3IpKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE3ID0ge1xuXHRtb2RlOiBcImphYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1qemF6YnpcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWp6YXpielwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvSmFiLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0phYlxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRKYWJUb1JnYixcblx0XHR4eXo2NTogY29udmVydEphYlRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjJdLFxuXHRcdGE6IFstLjEwOSwgLjEyOV0sXG5cdFx0YjogWy0uMTg1LCAuMTM0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEphYlRvSmNoLmpzXG52YXIgY29udmVydEphYlRvSmNoID0gKHsgaiwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamNoXCIsXG5cdFx0aixcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9jb252ZXJ0SmNoVG9KYWIuanNcbnZhciBjb252ZXJ0SmNoVG9KYWIgPSAoeyBqLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0aixcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNiA9IHtcblx0bW9kZTogXCJqY2hcIixcblx0cGFyc2U6IFtcIi0tanpjemh6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemN6aHpcIixcblx0dG9Nb2RlOiB7XG5cdFx0amFiOiBjb252ZXJ0SmNoVG9KYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvUmdiKGNvbnZlcnRKY2hUb0phYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0SmFiVG9KY2goY29udmVydFJnYlRvSmFiKGMpKSxcblx0XHRqYWI6IGNvbnZlcnRKYWJUb0pjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRqOiBbMCwgLjIyMV0sXG5cdFx0YzogWzAsIC4xOV0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb25zdGFudHMuanNcbnZhciBrID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvWHl6NTAuanNcbnZhciBmbiA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gaztcbnZhciBjb252ZXJ0TGFiVG9YeXo1MCA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiBmbihmeCkgKiBENTAuWCxcblx0XHR5OiBmbihmeSkgKiBENTAuWSxcblx0XHR6OiBmbihmeikgKiBENTAuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0WHl6NTBUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo1MFRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMTM0MTM1OTU2OTk1ODcwNyAtIHkgKiAxLjYxNzM4NjMzMjE2MTI1MzggLSAuNDkwNjYxOTQ2MDA4MzUzMiAqIHosXG5cdFx0ZzogeCAqIC0uOTc4Nzk1NTAyOTEyMDg5ICsgeSAqIDEuOTE2MjU0NTY3MjU5NTI0ICsgLjAzMzQ0MjczMTE2MTMxOTQ5ICogeixcblx0XHRiOiB4ICogLjA3MTk1NTM3OTg4NDExNjc3IC0geSAqIC4yMjg5NzY4MjY0MTU4MzIyICsgMS40MDUzODYwNTgzMjQxMjUgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvUmdiLmpzXG52YXIgY29udmVydExhYlRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejUwVG9SZ2IoY29udmVydExhYlRvWHl6NTAobGFiKSk7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2NvbnZlcnRSZ2JUb1h5ejUwLmpzXG52YXIgY29udmVydFJnYlRvWHl6NTAgPSAocmdiKSA9PiB7XG5cdGxldCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKHJnYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC40MzYwNjU3NDI4MjQ4MTEgKiByICsgLjM4NTE1MTQ2ODgzMzc5MTIgKiBnICsgLjE0MzA3ODQ1NDQyMjY0MTk3ICogYixcblx0XHR5OiAuMjIyNDkzMTkxNzU2MjM3MDIgKiByICsgLjcxNjg4NzA1MzgyMzg4MjMgKiBnICsgLjA2MDYxOTc5MDUzNjE2NTM3ICogYixcblx0XHR6OiAuMDEzOTIzOTA0NTAwOTQzNDY1ICogciArIC4wOTcwODEyODU2NjU3NDYzNCAqIGcgKyAuNzE0MDk5MzU4NDAwNTE1NSAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRYeXo1MFRvTGFiLmpzXG52YXIgZiA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrICogdmFsdWUgKyAxNikgLyAxMTY7XG52YXIgY29udmVydFh5ejUwVG9MYWIgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYoeCAvIEQ1MC5YKTtcblx0bGV0IGYxID0gZih5IC8gRDUwLlkpO1xuXHRsZXQgZjIgPSBmKHogLyBENTAuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWJcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRSZ2JUb0xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYiA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo1MFRvTGFiKGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpO1xuXHRpZiAocmdiLnIgPT09IHJnYi5iICYmIHJnYi5iID09PSByZ2IuZykgcmVzLmEgPSByZXMuYiA9IDA7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvcGFyc2VMYWIuanNcbmZ1bmN0aW9uIHBhcnNlTGFiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImxhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0aWYgKGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hID0gYS50eXBlID09PSBUb2suTnVtYmVyID8gYS52YWx1ZSA6IGEudmFsdWUgKiAxMjUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNSA9IHtcblx0bW9kZTogXCJsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRMYWJUb1h5ejUwLFxuXHRcdHJnYjogY29udmVydExhYlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTGFiLFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VMYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgbGFiKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmEgIT09IHZvaWQgMCA/IGMuYSA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDE1LFxuXHRtb2RlOiBcImxhYjY1XCIsXG5cdHBhcnNlOiBbXCItLWxhYi1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxhYi1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NjU6IGNvbnZlcnRMYWI2NVRvWHl6NjUsXG5cdFx0cmdiOiBjb252ZXJ0TGFiNjVUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0xhYjY1LFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiNjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy0xMjUsIDEyNV0sXG5cdFx0YjogWy0xMjUsIDEyNV1cblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL3BhcnNlTGNoLmpzXG5mdW5jdGlvbiBwYXJzZUxjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsY2hcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudmFsdWUpLCAxMDApO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogMTUwIC8gMTAwKTtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMyA9IHtcblx0bW9kZTogXCJsY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiOiBjb252ZXJ0TGNoVG9MYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiKGMpKSxcblx0XHRsYWI6IGNvbnZlcnRMYWJUb0xjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlQ2hyb21hIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaDY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEyID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcImxjaDY1XCIsXG5cdHBhcnNlOiBbXCItLWxjaC1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxjaC1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiNjUoYyksIFwibGNoNjVcIiksXG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJsY2g2NVwiKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9jb252ZXJ0THV2VG9MY2h1di5qc1xudmFyIGNvbnZlcnRMdXZUb0xjaHV2ID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGNodXZcIixcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIodiwgdSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydExjaHV2VG9MdXYuanNcbnZhciBjb252ZXJ0TGNodXZUb0x1diA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsdXZcIixcblx0XHRsLFxuXHRcdHU6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHR2OiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRYeXo1MFRvTHV2LmpzXG52YXIgdV9mbiQxID0gKHgsIHksIHopID0+IDQgKiB4IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdl9mbiQxID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4kMSA9IHVfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciB2biQxID0gdl9mbiQxKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGxfZm4gPSAodmFsdWUpID0+IHZhbHVlIDw9IGUgPyBrICogdmFsdWUgOiAxMTYgKiBNYXRoLmNicnQodmFsdWUpIC0gMTY7XG52YXIgY29udmVydFh5ejUwVG9MdXYgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBsID0gbF9mbih5IC8gRDUwLlkpO1xuXHRsZXQgdSA9IHVfZm4kMSh4LCB5LCB6KTtcblx0bGV0IHYgPSB2X2ZuJDEoeCwgeSwgeik7XG5cdGlmICghaXNGaW5pdGUodSkgfHwgIWlzRmluaXRlKHYpKSBsID0gdSA9IHYgPSAwO1xuXHRlbHNlIHtcblx0XHR1ID0gMTMgKiBsICogKHUgLSB1biQxKTtcblx0XHR2ID0gMTMgKiBsICogKHYgLSB2biQxKTtcblx0fVxuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1LFxuXHRcdHZcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRMdXZUb1h5ejUwLmpzXG52YXIgdV9mbiA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4gPSAoeCwgeSwgeikgPT4gOSAqIHkgLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB1biA9IHVfZm4oRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4gPSB2X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGNvbnZlcnRMdXZUb1h5ejUwID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGwgPT09IDApIHJldHVybiB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH07XG5cdGlmICh1ID09PSB2b2lkIDApIHUgPSAwO1xuXHRpZiAodiA9PT0gdm9pZCAwKSB2ID0gMDtcblx0bGV0IHVwID0gdSAvICgxMyAqIGwpICsgdW47XG5cdGxldCB2cCA9IHYgLyAoMTMgKiBsKSArIHZuO1xuXHRsZXQgeSA9IEQ1MC5ZICogKGwgPD0gOCA/IGwgLyBrIDogTWF0aC5wb3coKGwgKyAxNikgLyAxMTYsIDMpKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogeSAqICg5ICogdXApIC8gKDQgKiB2cCksXG5cdFx0eSxcblx0XHR6OiB5ICogKDEyIC0gMyAqIHVwIC0gMjAgKiB2cCkgLyAoNCAqIHZwKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9kZWZpbml0aW9uLmpzXG52YXIgY29udmVydFJnYlRvTGNodXYgPSAocmdiKSA9PiBjb252ZXJ0THV2VG9MY2h1dihjb252ZXJ0WHl6NTBUb0x1dihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKSk7XG52YXIgY29udmVydExjaHV2VG9SZ2IgPSAobGNodXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGNvbnZlcnRMY2h1dlRvTHV2KGxjaHV2KSkpO1xudmFyIGRlZmluaXRpb24kMTEgPSB7XG5cdG1vZGU6IFwibGNodXZcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHV2OiBjb252ZXJ0TGNodXZUb0x1dixcblx0XHRyZ2I6IGNvbnZlcnRMY2h1dlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9MY2h1dixcblx0XHRsdXY6IGNvbnZlcnRMdXZUb0xjaHV2XG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWxjaHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2h1dlwiLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTc2Ljk1Nl0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEwID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcImxyZ2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydExyZ2JUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0xyZ2IgfSxcblx0cGFyc2U6IFtcInNyZ2ItbGluZWFyXCJdLFxuXHRzZXJpYWxpemU6IFwic3JnYi1saW5lYXJcIlxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDkgPSB7XG5cdG1vZGU6IFwibHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0THV2VG9YeXo1MCxcblx0XHRyZ2I6IChsdXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGx1dikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTHV2LFxuXHRcdHJnYjogKHJnYikgPT4gY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcInVcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tbHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sdXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0dTogWy04NC45MzYsIDE3NS4wNDJdLFxuXHRcdHY6IFstMTI1Ljg4MiwgODcuMjQzXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR1OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0THJnYlRvT2tsYWIuanNcbnZhciBjb252ZXJ0THJnYlRvT2tsYWIgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBMID0gTWF0aC5jYnJ0KC40MTIyMjE0Njk0NzA3NjMgKiByICsgLjUzNjMzMjUzNzI2MTczNDggKiBnICsgLjA1MTQ0NTk5MzI2NzUwMjIgKiBiKTtcblx0bGV0IE0gPSBNYXRoLmNicnQoLjIxMTkwMzQ5NTgxNzgyNTIgKiByICsgLjY4MDY5OTU1MDY0NTIzNDQgKiBnICsgLjEwNzM5Njk1MzUzNjk0MDYgKiBiKTtcblx0bGV0IFMgPSBNYXRoLmNicnQoLjA4ODMwMjQ1OTE5MDA1NjQgKiByICsgLjI4MTcxODgzOTEzNjEyMTUgKiBnICsgLjYyOTk3ODcwMTY3MzgyMjIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogLjIxMDQ1NDI2ODMwOTMxNCAqIEwgKyAuNzkzNjE3Nzc0NzAyMzA1NCAqIE0gLSAuMDA0MDcyMDQzMDExNjE5MyAqIFMsXG5cdFx0YTogMS45Nzc5OTg1MzI0MzExNjg0ICogTCAtIDIuNDI4NTkyMjQyMDQ4NTggKiBNICsgLjQ1MDU5MzcwOTYxNzQxMSAqIFMsXG5cdFx0YjogLjAyNTkwNDA0MjQ2NTU0NzggKiBMICsgLjc4Mjc3MTcxMjQ1NzUyOTYgKiBNIC0gLjgwODY3NTc1NDkyMzA3NzQgKiBTXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRSZ2JUb09rbGFiLmpzXG52YXIgY29udmVydFJnYlRvT2tsYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvT2tsYWIoY29udmVydFJnYlRvTHJnYihyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9McmdiLmpzXG52YXIgY29udmVydE9rbGFiVG9McmdiID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGgucG93KGwgKyAuMzk2MzM3Nzc3Mzc2MTc0OSAqIGEgKyAuMjE1ODAzNzU3MzA5OTEzNiAqIGIsIDMpO1xuXHRsZXQgTSA9IE1hdGgucG93KGwgLSAuMTA1NTYxMzQ1ODE1NjU4NiAqIGEgLSAuMDYzODU0MTcyODI1ODEzMyAqIGIsIDMpO1xuXHRsZXQgUyA9IE1hdGgucG93KGwgLSAuMDg5NDg0MTc3NTI5ODExOSAqIGEgLSAxLjI5MTQ4NTU0ODAxOTQwOTIgKiBiLCAzKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiA0LjA3Njc0MTYzNjA3NTk1NyAqIEwgLSAzLjMwNzcxMTUzOTI1ODA2MTYgKiBNICsgLjIzMDk2OTkwMzE4MjEwNDQgKiBTLFxuXHRcdGc6IC0xLjI2ODQzNzk3MzI4NTAzMTcgKiBMICsgMi42MDk3NTczNDkyODc2ODg3ICogTSAtIC4zNDEzMTkzNzYwMDI2NTczICogUyxcblx0XHRiOiAtLjAwNDE5NjA3NjEzODY3NTYgKiBMIC0gLjcwMzQxODYxNzkzNTkzNjIgKiBNICsgMS43MDc2MTQ2OTQwNzQ2MTE3ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0T2tsYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvUmdiID0gKGMpID0+IGNvbnZlcnRMcmdiVG9SZ2IoY29udmVydE9rbGFiVG9McmdiKGMpKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvaGVscGVycy5qc1xuZnVuY3Rpb24gdG9lKHgpIHtcblx0Y29uc3Qga18xID0gLjIwNjtcblx0Y29uc3Qga18yID0gLjAzO1xuXHRjb25zdCBrXzMgPSAxLjIwNiAvIDEuMDM7XG5cdHJldHVybiAuNSAqIChrXzMgKiB4IC0ga18xICsgTWF0aC5zcXJ0KChrXzMgKiB4IC0ga18xKSAqIChrXzMgKiB4IC0ga18xKSArIDQgKiBrXzIgKiBrXzMgKiB4KSk7XG59XG5mdW5jdGlvbiB0b2VfaW52KHgpIHtcblx0cmV0dXJuICh4ICogeCArIC4yMDYgKiB4KSAvICgxLjIwNiAvIDEuMDMgKiAoeCArIC4wMykpO1xufVxuZnVuY3Rpb24gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKSB7XG5cdGxldCBrMCwgazEsIGsyLCBrMywgazQsIHdsLCB3bSwgd3M7XG5cdGlmICgtMS44ODE3MDMyOCAqIGEgLSAuODA5MzY0OTMgKiBiID4gMSkge1xuXHRcdGswID0gMS4xOTA4NjI3Nztcblx0XHRrMSA9IDEuNzY1NzY3Mjg7XG5cdFx0azIgPSAuNTk2NjI2NDE7XG5cdFx0azMgPSAuNzU1MTUxOTc7XG5cdFx0azQgPSAuNTY3NzEyNDU7XG5cdFx0d2wgPSA0LjA3Njc0MTY2MjE7XG5cdFx0d20gPSAtMy4zMDc3MTE1OTEzO1xuXHRcdHdzID0gLjIzMDk2OTkyOTI7XG5cdH0gZWxzZSBpZiAoMS44MTQ0NDEwNCAqIGEgLSAxLjE5NDQ1Mjc2ICogYiA+IDEpIHtcblx0XHRrMCA9IC43Mzk1NjUxNTtcblx0XHRrMSA9IC0uNDU5NTQ0MDQ7XG5cdFx0azIgPSAuMDgyODU0Mjc7XG5cdFx0azMgPSAuMTI1NDEwNztcblx0XHRrNCA9IC4xNDUwMzIwNDtcblx0XHR3bCA9IC0xLjI2ODQzODAwNDY7XG5cdFx0d20gPSAyLjYwOTc1NzQwMTE7XG5cdFx0d3MgPSAtLjM0MTMxOTM5NjU7XG5cdH0gZWxzZSB7XG5cdFx0azAgPSAxLjM1NzMzNjUyO1xuXHRcdGsxID0gLS4wMDkxNTc5OTtcblx0XHRrMiA9IC0xLjE1MTMwMjE7XG5cdFx0azMgPSAtLjUwNTU5NjA2O1xuXHRcdGs0ID0gLjAwNjkyMTY3O1xuXHRcdHdsID0gLS4wMDQxOTYwODYzO1xuXHRcdHdtID0gLS43MDM0MTg2MTQ3O1xuXHRcdHdzID0gMS43MDc2MTQ3MDE7XG5cdH1cblx0bGV0IFMgPSBrMCArIGsxICogYSArIGsyICogYiArIGszICogYSAqIGEgKyBrNCAqIGEgKiBiO1xuXHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRsZXQga19tID0gLS4xMDU1NjEzNDU4ICogYSAtIC4wNjM4NTQxNzI4ICogYjtcblx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdHtcblx0XHRsZXQgbF8gPSAxICsgUyAqIGtfbDtcblx0XHRsZXQgbV8gPSAxICsgUyAqIGtfbTtcblx0XHRsZXQgc18gPSAxICsgUyAqIGtfcztcblx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRsZXQgbSA9IG1fICogbV8gKiBtXztcblx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRsZXQgbF9kUyA9IDMgKiBrX2wgKiBsXyAqIGxfO1xuXHRcdGxldCBtX2RTID0gMyAqIGtfbSAqIG1fICogbV87XG5cdFx0bGV0IHNfZFMgPSAzICoga19zICogc18gKiBzXztcblx0XHRsZXQgbF9kUzIgPSA2ICoga19sICoga19sICogbF87XG5cdFx0bGV0IG1fZFMyID0gNiAqIGtfbSAqIGtfbSAqIG1fO1xuXHRcdGxldCBzX2RTMiA9IDYgKiBrX3MgKiBrX3MgKiBzXztcblx0XHRsZXQgZiA9IHdsICogbCArIHdtICogbSArIHdzICogcztcblx0XHRsZXQgZjEgPSB3bCAqIGxfZFMgKyB3bSAqIG1fZFMgKyB3cyAqIHNfZFM7XG5cdFx0bGV0IGYyID0gd2wgKiBsX2RTMiArIHdtICogbV9kUzIgKyB3cyAqIHNfZFMyO1xuXHRcdFMgPSBTIC0gZiAqIGYxIC8gKGYxICogZjEgLSAuNSAqIGYgKiBmMik7XG5cdH1cblx0cmV0dXJuIFM7XG59XG5mdW5jdGlvbiBmaW5kX2N1c3AoYSwgYikge1xuXHRsZXQgU19jdXNwID0gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKTtcblx0bGV0IHJnYiA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogMSxcblx0XHRhOiBTX2N1c3AgKiBhLFxuXHRcdGI6IFNfY3VzcCAqIGJcblx0fSk7XG5cdGxldCBMX2N1c3AgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYi5yLCByZ2IuZywgcmdiLmIpKTtcblx0cmV0dXJuIFtMX2N1c3AsIExfY3VzcCAqIFNfY3VzcF07XG59XG5mdW5jdGlvbiBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhLCBiLCBMMSwgQzEsIEwwLCBjdXNwID0gbnVsbCkge1xuXHRpZiAoIWN1c3ApIGN1c3AgPSBmaW5kX2N1c3AoYSwgYik7XG5cdGxldCB0O1xuXHRpZiAoKEwxIC0gTDApICogY3VzcFsxXSAtIChjdXNwWzBdIC0gTDApICogQzEgPD0gMCkgdCA9IGN1c3BbMV0gKiBMMCAvIChDMSAqIGN1c3BbMF0gKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0ZWxzZSB7XG5cdFx0dCA9IGN1c3BbMV0gKiAoTDAgLSAxKSAvIChDMSAqIChjdXNwWzBdIC0gMSkgKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0XHR7XG5cdFx0XHRsZXQgZEwgPSBMMSAtIEwwO1xuXHRcdFx0bGV0IGRDID0gQzE7XG5cdFx0XHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRcdFx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdFx0XHRsZXQga19zID0gLS4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYjtcblx0XHRcdGxldCBsX2R0ID0gZEwgKyBkQyAqIGtfbDtcblx0XHRcdGxldCBtX2R0ID0gZEwgKyBkQyAqIGtfbTtcblx0XHRcdGxldCBzX2R0ID0gZEwgKyBkQyAqIGtfcztcblx0XHRcdHtcblx0XHRcdFx0bGV0IEwgPSBMMCAqICgxIC0gdCkgKyB0ICogTDE7XG5cdFx0XHRcdGxldCBDID0gdCAqIEMxO1xuXHRcdFx0XHRsZXQgbF8gPSBMICsgQyAqIGtfbDtcblx0XHRcdFx0bGV0IG1fID0gTCArIEMgKiBrX207XG5cdFx0XHRcdGxldCBzXyA9IEwgKyBDICoga19zO1xuXHRcdFx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0XHRcdGxldCBzID0gc18gKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0ID0gMyAqIGxfZHQgKiBsXyAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0ID0gMyAqIG1fZHQgKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0ID0gMyAqIHNfZHQgKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0MiA9IDYgKiBsX2R0ICogbF9kdCAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0MiA9IDYgKiBtX2R0ICogbV9kdCAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0MiA9IDYgKiBzX2R0ICogc19kdCAqIHNfO1xuXHRcdFx0XHRsZXQgciA9IDQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgLjIzMDk2OTkyOTIgKiBzIC0gMTtcblx0XHRcdFx0bGV0IHIxID0gNC4wNzY3NDE2NjIxICogbGR0IC0gMy4zMDc3MTE1OTEzICogbWR0ICsgLjIzMDk2OTkyOTIgKiBzZHQ7XG5cdFx0XHRcdGxldCByMiA9IDQuMDc2NzQxNjYyMSAqIGxkdDIgLSAzLjMwNzcxMTU5MTMgKiBtZHQyICsgLjIzMDk2OTkyOTIgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9yID0gcjEgLyAocjEgKiByMSAtIC41ICogciAqIHIyKTtcblx0XHRcdFx0bGV0IHRfciA9IC1yICogdV9yO1xuXHRcdFx0XHRsZXQgZyA9IC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIC4zNDEzMTkzOTY1ICogcyAtIDE7XG5cdFx0XHRcdGxldCBnMSA9IC0xLjI2ODQzODAwNDYgKiBsZHQgKyAyLjYwOTc1NzQwMTEgKiBtZHQgLSAuMzQxMzE5Mzk2NSAqIHNkdDtcblx0XHRcdFx0bGV0IGcyID0gLTEuMjY4NDM4MDA0NiAqIGxkdDIgKyAyLjYwOTc1NzQwMTEgKiBtZHQyIC0gLjM0MTMxOTM5NjUgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9nID0gZzEgLyAoZzEgKiBnMSAtIC41ICogZyAqIGcyKTtcblx0XHRcdFx0bGV0IHRfZyA9IC1nICogdV9nO1xuXHRcdFx0XHRsZXQgYiA9IC0uMDA0MTk2MDg2MyAqIGwgLSAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgYjEgPSAtLjAwNDE5NjA4NjMgKiBsZHQgLSAuNzAzNDE4NjE0NyAqIG1kdCArIDEuNzA3NjE0NzAxICogc2R0O1xuXHRcdFx0XHRsZXQgYjIgPSAtLjAwNDE5NjA4NjMgKiBsZHQyIC0gLjcwMzQxODYxNDcgKiBtZHQyICsgMS43MDc2MTQ3MDEgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9iID0gYjEgLyAoYjEgKiBiMSAtIC41ICogYiAqIGIyKTtcblx0XHRcdFx0bGV0IHRfYiA9IC1iICogdV9iO1xuXHRcdFx0XHR0X3IgPSB1X3IgPj0gMCA/IHRfciA6IDFlNjtcblx0XHRcdFx0dF9nID0gdV9nID49IDAgPyB0X2cgOiAxZTY7XG5cdFx0XHRcdHRfYiA9IHVfYiA+PSAwID8gdF9iIDogMWU2O1xuXHRcdFx0XHR0ICs9IE1hdGgubWluKHRfciwgTWF0aC5taW4odF9nLCB0X2IpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBMID0gY3VzcFswXTtcblx0bGV0IEMgPSBjdXNwWzFdO1xuXHRyZXR1cm4gW0MgLyBMLCBDIC8gKDEgLSBMKV07XG59XG5mdW5jdGlvbiBnZXRfQ3MoTCwgYV8sIGJfKSB7XG5cdGxldCBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBDX21heCA9IGZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uKGFfLCBiXywgTCwgMSwgTCwgY3VzcCk7XG5cdGxldCBTVF9tYXggPSBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCk7XG5cdGxldCBTX21pZCA9IC4xMTUxNjk5MyArIDEgLyAoNy40NDc3ODk3ICsgNC4xNTkwMTI0ICogYl8gKyBhXyAqICgtMi4xOTU1NzM0NyArIDEuNzUxOTg0MDEgKiBiXyArIGFfICogKC0yLjEzNzA0OTQ4IC0gMTAuMDIzMDEwNDMgKiBiXyArIGFfICogKC00LjI0ODk0NTYxICsgNS4zODc3MDgxOSAqIGJfICsgNC42OTg5MTAxMyAqIGFfKSkpKTtcblx0bGV0IFRfbWlkID0gLjExMjM5NjQyICsgMSAvICgxLjYxMzIwMzIgLSAuNjgxMjQzNzkgKiBiXyArIGFfICogKC40MDM3MDYxMiArIC45MDE0ODEyMyAqIGJfICsgYV8gKiAoLS4yNzA4Nzk0MyArIC42MTIyMzk5ICogYl8gKyBhXyAqICguMDAyOTkyMTUgLSAuNDUzOTk1NjggKiBiXyAtIC4xNDY2MTg3MiAqIGFfKSkpKTtcblx0bGV0IGsgPSBDX21heCAvIE1hdGgubWluKEwgKiBTVF9tYXhbMF0sICgxIC0gTCkgKiBTVF9tYXhbMV0pO1xuXHRsZXQgQ19hID0gTCAqIFNfbWlkO1xuXHRsZXQgQ19iID0gKDEgLSBMKSAqIFRfbWlkO1xuXHRsZXQgQ19taWQgPSAuOSAqIGsgKiBNYXRoLnNxcnQoTWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EgKiBDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IgKiBDX2IgKiBDX2IpKSkpO1xuXHRDX2EgPSBMICogLjQ7XG5cdENfYiA9ICgxIC0gTCkgKiAuODtcblx0cmV0dXJuIFtcblx0XHRNYXRoLnNxcnQoMSAvICgxIC8gKENfYSAqIENfYSkgKyAxIC8gKENfYiAqIENfYikpKSxcblx0XHRDX21pZCxcblx0XHRDX21heFxuXHRdO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2tsYWJUb09raHNsLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHNsKGxhYikge1xuXHRjb25zdCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0Y29uc3QgYSA9IGxhYi5hICE9PSB2b2lkIDAgPyBsYWIuYSA6IDA7XG5cdGNvbnN0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2hzbFwiLFxuXHRcdGw6IHRvZShsKVxuXHR9O1xuXHRpZiAobGFiLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGxhYi5hbHBoYTtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGlmICghYykge1xuXHRcdHJldC5zID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBbQ18wLCBDX21pZCwgQ19tYXhdID0gZ2V0X0NzKGwsIGEgLyBjLCBiIC8gYyk7XG5cdGxldCBzO1xuXHRpZiAoYyA8IENfbWlkKSB7XG5cdFx0bGV0IGtfMCA9IDA7XG5cdFx0bGV0IGtfMSA9IC44ICogQ18wO1xuXHRcdGxldCBrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdFx0cyA9IChjIC0ga18wKSAvIChrXzEgKyBrXzIgKiAoYyAtIGtfMCkpICogLjg7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IGtfMCA9IENfbWlkO1xuXHRcdGxldCBrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0XHRzID0gLjggKyAuMiAqICgoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSk7XG5cdH1cblx0aWYgKHMpIHtcblx0XHRyZXQucyA9IHM7XG5cdFx0cmV0LmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2NvbnZlcnRPa2hzbFRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzbFRvT2tsYWIoaHNsKSB7XG5cdGxldCBoID0gaHNsLmggIT09IHZvaWQgMCA/IGhzbC5oIDogMDtcblx0bGV0IHMgPSBoc2wucyAhPT0gdm9pZCAwID8gaHNsLnMgOiAwO1xuXHRsZXQgbCA9IGhzbC5sICE9PSB2b2lkIDAgPyBoc2wubCA6IDA7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogdG9lX2ludihsKVxuXHR9O1xuXHRpZiAoaHNsLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzbC5hbHBoYTtcblx0aWYgKCFzIHx8IGwgPT09IDEpIHtcblx0XHRyZXQuYSA9IHJldC5iID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhyZXQubCwgYV8sIGJfKTtcblx0bGV0IHQsIGtfMCwga18xLCBrXzI7XG5cdGlmIChzIDwgLjgpIHtcblx0XHR0ID0gMS4yNSAqIHM7XG5cdFx0a18wID0gMDtcblx0XHRrXzEgPSAuOCAqIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdH0gZWxzZSB7XG5cdFx0dCA9IDUgKiAocyAtIC44KTtcblx0XHRrXzAgPSBDX21pZDtcblx0XHRrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gKENfbWF4IC0gQ19taWQpO1xuXHR9XG5cdGxldCBDID0ga18wICsgdCAqIGtfMSAvICgxIC0ga18yICogdCk7XG5cdHJldC5hID0gQyAqIGFfO1xuXHRyZXQuYiA9IEMgKiBiXztcblx0cmV0dXJuIHJldDtcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvbW9kZU9raHNsLmpzXG52YXIgbW9kZU9raHNsID0ge1xuXHQuLi5kZWZpbml0aW9uJDIxLFxuXHRtb2RlOiBcIm9raHNsXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHNsXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzbFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHNsLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc2woY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc2xUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzbFRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2xhYlRvT2toc3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2xhYlRvT2toc3YobGFiKSB7XG5cdGxldCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0bGV0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRsZXQgYiA9IGxhYi5iICE9PSB2b2lkIDAgPyBsYWIuYiA6IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgYV8gPSBjID8gYSAvIGMgOiAxO1xuXHRsZXQgYl8gPSBjID8gYiAvIGMgOiAxO1xuXHRsZXQgW1NfbWF4LCBUXSA9IGdldF9TVF9tYXgoYV8sIGJfKTtcblx0bGV0IFNfMCA9IC41O1xuXHRsZXQgayA9IDEgLSBTXzAgLyBTX21heDtcblx0bGV0IHQgPSBUIC8gKGMgKyBsICogVCk7XG5cdGxldCBMX3YgPSB0ICogbDtcblx0bGV0IENfdiA9IHQgKiBjO1xuXHRsZXQgTF92dCA9IHRvZV9pbnYoTF92KTtcblx0bGV0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRsZXQgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGxldCBzY2FsZV9MID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2Jfc2NhbGUuciwgcmdiX3NjYWxlLmcsIHJnYl9zY2FsZS5iLCAwKSk7XG5cdGwgPSBsIC8gc2NhbGVfTDtcblx0YyA9IGMgLyBzY2FsZV9MICogdG9lKGwpIC8gbDtcblx0bCA9IHRvZShsKTtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc3ZcIixcblx0XHRzOiBjID8gKFNfMCArIFQpICogQ192IC8gKFQgKiBTXzAgKyBUICogayAqIENfdikgOiAwLFxuXHRcdHY6IGwgPyBsIC8gTF92IDogMFxuXHR9O1xuXHRpZiAocmV0LnMpIHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdHJldHVybiByZXQ7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2hzdlRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzdlRvT2tsYWIoaHN2KSB7XG5cdGNvbnN0IHJldCA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gaHN2LmFscGhhO1xuXHRjb25zdCBoID0gaHN2LmggIT09IHZvaWQgMCA/IGhzdi5oIDogMDtcblx0Y29uc3QgcyA9IGhzdi5zICE9PSB2b2lkIDAgPyBoc3YucyA6IDA7XG5cdGNvbnN0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRjb25zdCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0Y29uc3QgYl8gPSBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGNvbnN0IFNfMCA9IC41O1xuXHRjb25zdCBrID0gMSAtIFNfMCAvIFNfbWF4O1xuXHRjb25zdCBMX3YgPSAxIC0gcyAqIFNfMCAvIChTXzAgKyBUIC0gVCAqIGsgKiBzKTtcblx0Y29uc3QgQ192ID0gcyAqIFQgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGNvbnN0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRjb25zdCByZ2Jfc2NhbGUgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IExfdnQsXG5cdFx0YTogYV8gKiBDX3Z0LFxuXHRcdGI6IGJfICogQ192dFxuXHR9KTtcblx0Y29uc3Qgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRjb25zdCBMX25ldyA9IHRvZV9pbnYodiAqIExfdik7XG5cdGNvbnN0IEMgPSBDX3YgKiBMX25ldyAvIExfdjtcblx0cmV0LmwgPSBMX25ldyAqIHNjYWxlX0w7XG5cdHJldC5hID0gQyAqIGFfICogc2NhbGVfTDtcblx0cmV0LmIgPSBDICogYl8gKiBzY2FsZV9MO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9tb2RlT2toc3YuanNcbnZhciBtb2RlT2toc3YgPSB7XG5cdC4uLmRlZmluaXRpb24kMjAsXG5cdG1vZGU6IFwib2toc3ZcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tb2toc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLW9raHN2XCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2xhYlRvT2toc3YsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9Pa2hzdihjb252ZXJ0UmdiVG9Pa2xhYihjKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2hzdlRvT2tsYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydE9raHN2VG9Pa2xhYihjKSlcblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvcGFyc2VPa2xhYi5qc1xuZnVuY3Rpb24gcGFyc2VPa2xhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGNvbnN0IFssIGwsIGEsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSB8fCBhLnR5cGUgPT09IFRvay5IdWUgfHwgYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kOCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJva2xhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0T2tsYWJUb0xyZ2IsXG5cdFx0cmdiOiBjb252ZXJ0T2tsYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdGxyZ2I6IGNvbnZlcnRMcmdiVG9Pa2xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb09rbGFiXG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRhOiBbLS40LCAuNF0sXG5cdFx0YjogWy0uNCwgLjRdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xhYl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgXG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9wYXJzZU9rbGNoLmpzXG5mdW5jdGlvbiBwYXJzZU9rbGNoKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcIm9rbGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcIm9rbGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdH1cblx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5jID0gTWF0aC5tYXgoMCwgYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgKiAuNCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ3ID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcIm9rbGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb09rbGFiKGMpLCBcIm9rbGNoXCIpLFxuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwib2tsY2hcIilcblx0fSxcblx0cGFyc2U6IFtwYXJzZU9rbGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYG9rbGNoKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmMgIT09IHZvaWQgMCA/IGMuYyA6IFwibm9uZVwifSAke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRjOiBbMCwgLjRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRQM1RvWHl6NjUuanNcbnZhciBjb252ZXJ0UDNUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDg2NTcwOTQ4NjQ4MjE2ICogciArIC4yNjU2Njc2OTMxNjkwOTMgKiBnICsgLjE5ODIxNzI4NTIzNDM2MjUgKiBiLFxuXHRcdHk6IC4yMjg5NzQ1NjQwNjk3NDg3ICogciArIC42OTE3Mzg1MjE4MzY1MDYyICogZyArIC4wNzkyODY5MTQwOTM3NDUgKiBiLFxuXHRcdHo6IDAgKiByICsgLjA0NTExMzM4MTg1ODkwMjYgKiBnICsgMS4wNDM5NDQzNjg5MDA5NzYgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRYeXo2NVRvUDMuanNcbnZhciBjb252ZXJ0WHl6NjVUb1AzID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDIuNDkzNDk2OTExOTQxNDI2MyAtIHkgKiAuOTMxMzgzNjE3OTE5MTI0MiAtIC40MDI3MTA3ODQ0NTA3MTcgKiB6LFxuXHRcdGc6IHggKiAtLjgyOTQ4ODk2OTU2MTU3NDkgKyB5ICogMS43NjI2NjQwNjAzMTgzNDY1ICsgLjAyMzYyNDY4NTg0MTk0MzYgKiB6LFxuXHRcdGI6IHggKiAuMDM1ODQ1ODMwMjQzNzg0NSAtIHkgKiAuMDc2MTcyMzg5MjY4MDQxOCArIC45NTY4ODQ1MjQwMDc2ODcxICogelxuXHR9LCBcInAzXCIpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInAzXCIsXG5cdHBhcnNlOiBbXCJkaXNwbGF5LXAzXCJdLFxuXHRzZXJpYWxpemU6IFwiZGlzcGxheS1wM1wiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1AzKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvUDNcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRQM1RvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydFAzVG9YeXo2NVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0WHl6NTBUb1Byb3Bob3RvLmpzXG52YXIgZ2FtbWEkMSA9ICh2KSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxIC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxIC8gMS44KTtcblx0cmV0dXJuIDE2ICogdjtcbn07XG52YXIgY29udmVydFh5ejUwVG9Qcm9waG90byA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdFx0cjogZ2FtbWEkMSh4ICogMS4zNDU3ODY4ODE2NDcxNTg1IC0geSAqIC4yNTU1NzIwODczNzk3OTQ2IC0gLjA1MTEwMTg2NDk3NTU0NTMgKiB6KSxcblx0XHRnOiBnYW1tYSQxKHggKiAtLjU0NDYzMDcwNTEyNDkwMTkgKyB5ICogMS41MDgyNDc3NDI4NDUxNDY2ICsgLjAyMDUyNzQ0NzQzNjQyMTQgKiB6KSxcblx0XHRiOiBnYW1tYSQxKHggKiAwICsgeSAqIDAgKyAxLjIxMTk2NzU0NTYzODk0NTIgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLmpzXG52YXIgbGluZWFyaXplJDEgPSAodiA9IDApID0+IHtcblx0bGV0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID49IDE2IC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxLjgpO1xuXHRyZXR1cm4gdiAvIDE2O1xufTtcbnZhciBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwID0gKHByb3Bob3RvKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplJDEocHJvcGhvdG8ucik7XG5cdGxldCBnID0gbGluZWFyaXplJDEocHJvcGhvdG8uZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDEocHJvcGhvdG8uYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC43OTc3NjY2NDQ5MDA2NDIzICogciArIC4xMzUxODEyOTc0MDA1MzMxICogZyArIC4wMzEzNDc3MzQxMjgzOTIyICogYixcblx0XHR5OiAuMjg4MDc0ODI4ODE5NDAxMyAqIHIgKyAuNzExODM1MjM0MjQxODczMSAqIGcgKyA4OTkzNjkzODcyNTZlLTE2ICogYixcblx0XHR6OiAwICogciArIDAgKiBnICsgLjgyNTEwNDYwMjUxMDQ2MDIgKiBiXG5cdH07XG5cdGlmIChwcm9waG90by5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBwcm9waG90by5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3Byb3Bob3RvL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDUgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicHJvcGhvdG9cIixcblx0cGFyc2U6IFtcInByb3Bob3RvLXJnYlwiXSxcblx0c2VyaWFsaXplOiBcInByb3Bob3RvLXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvKGNvbnZlcnRSZ2JUb1h5ejUwKGNvbG9yKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRQcm9waG90b1RvWHl6NTAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRQcm9waG90b1RvWHl6NTAoY29sb3IpKVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRYeXo2NVRvUmVjMjAyMC5qc1xudmFyIM6xJDEgPSAxLjA5OTI5NjgyNjgwOTQ0O1xudmFyIM6yJDEgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGdhbW1hID0gKHYpID0+IHtcblx0Y29uc3QgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPiDOsiQxKSByZXR1cm4gKE1hdGguc2lnbih2KSB8fCAxKSAqICjOsSQxICogTWF0aC5wb3coYWJzLCAuNDUpIC0gLjA5OTI5NjgyNjgwOTQ0MDA4KTtcblx0cmV0dXJuIDQuNSAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo2NVRvUmVjMjAyMCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInJlYzIwMjBcIixcblx0XHRyOiBnYW1tYSh4ICogMS43MTY2NTExODc5NzEyNjgzIC0geSAqIC4zNTU2NzA3ODM3NzYzOTI1IC0gLjI1MzM2NjI4MTM3MzY1OTkgKiB6KSxcblx0XHRnOiBnYW1tYSh4ICogLS42NjY2ODQzNTE4MzI0ODkzICsgeSAqIDEuNjE2NDgxMjM2NjM0OTM5NSArIC4wMTU3Njg1NDU4MTM5MTExICogeiksXG5cdFx0YjogZ2FtbWEoeCAqIC4wMTc2Mzk4NTc0NDUzMTA4IC0geSAqIC4wNDI3NzA2MTMyNTc4MDg1ICsgLjk0MjEwMzEyMTIzNTQ3MzkgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRSZWMyMDIwVG9YeXo2NS5qc1xudmFyIM6xID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiA9IC4wMTgwNTM5Njg1MTA4MDc7XG52YXIgbGluZWFyaXplID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA8IM6yICogNC41KSByZXR1cm4gdiAvIDQuNTtcblx0cmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgzrEgLSAxKSAvIM6xLCAxIC8gLjQ1KTtcbn07XG52YXIgY29udmVydFJlYzIwMjBUb1h5ejY1ID0gKHJlYzIwMjApID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUocmVjMjAyMC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUocmVjMjAyMC5nKTtcblx0bGV0IGIgPSBsaW5lYXJpemUocmVjMjAyMC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjYzNjk1ODA0ODMwMTI5MTEgKiByICsgLjE0NDYxNjkwMzU4NjIwODMgKiBnICsgLjE2ODg4MDk3NTE2NDE3MjEgKiBiLFxuXHRcdHk6IC4yNjI3MDAyMTIwMTEyNjcgKiByICsgLjY3Nzk5ODA3MTUxODg3MDggKiBnICsgLjA1OTMwMTcxNjQ2OTg2MiAqIGIsXG5cdFx0ejogMCAqIHIgKyAuMDI4MDcyNjkzMDQ5MDg3NCAqIGcgKyAxLjA2MDk4NTA1NzcxMDc5MDkgKiBiXG5cdH07XG5cdGlmIChyZWMyMDIwLmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IHJlYzIwMjAuYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDQgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicmVjMjAyMFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmVjMjAyMChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0UmVjMjAyMFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRSZWMyMDIwVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHBhcnNlOiBbXCJyZWMyMDIwXCJdLFxuXHRzZXJpYWxpemU6IFwicmVjMjAyMFwiXG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29uc3RhbnRzLmpzXG52YXIgYmlhcyA9IC4wMDM3OTMwNzMyNTUyNzU0NDkzO1xudmFyIGJpYXNfY2JydCA9IE1hdGguY2JydChiaWFzKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnZlcnRSZ2JUb1h5Yi5qc1xudmFyIHRyYW5zZmVyJDEgPSAodikgPT4gTWF0aC5jYnJ0KHYpIC0gYmlhc19jYnJ0O1xudmFyIGNvbnZlcnRSZ2JUb1h5YiA9IChjb2xvcikgPT4ge1xuXHRjb25zdCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKGNvbG9yKTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyJDEoLjMgKiByICsgLjYyMiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBtID0gdHJhbnNmZXIkMSguMjMgKiByICsgLjY5MiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBzID0gdHJhbnNmZXIkMSguMjQzNDIyNjg5MjQ1NDc4MiAqIHIgKyAuMjA0NzY3NDQ0MjQ0OTY4MiAqIGcgKyAuNTUxODA5ODY2NTA5NTUzNSAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHliXCIsXG5cdFx0eDogKGwgLSBtKSAvIDIsXG5cdFx0eTogKGwgKyBtKSAvIDIsXG5cdFx0YjogcyAtIChsICsgbSkgLyAyXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0WHliVG9SZ2IuanNcbnZhciB0cmFuc2ZlciA9ICh2KSA9PiBNYXRoLnBvdyh2ICsgYmlhc19jYnJ0LCAzKTtcbnZhciBjb252ZXJ0WHliVG9SZ2IgPSAoeyB4LCB5LCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2Zlcih4ICsgeSkgLSBiaWFzO1xuXHRjb25zdCBtID0gdHJhbnNmZXIoeSAtIHgpIC0gYmlhcztcblx0Y29uc3QgcyA9IHRyYW5zZmVyKGIgKyB5KSAtIGJpYXM7XG5cdGNvbnN0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IDExLjAzMTU2NjkwNDYzOTg2MSAqIGwgLSA5Ljg2Njk0MzkwODEzMTU2MiAqIG0gLSAuMTY0NjIyOTk2NTA4Mjk5MzQgKiBzLFxuXHRcdGc6IC0zLjI1NDE0NzM4MTA3NDQyMzcgKiBsICsgNC40MTg3NzAzNzc1ODI3MjMgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRiOiAtMy42NTg4NTEyODY3MTM2ODE1ICogbCArIDIuNzEyOTIzMDQ1OTM2MDkyMiAqIG0gKyAxLjk0NTkyODI0MDc3NzU4OTUgKiBzXG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMyA9IHtcblx0bW9kZTogXCJ4eWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teHliXCJdLFxuXHRzZXJpYWxpemU6IFwiLS14eWJcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydFh5YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvWHliIH0sXG5cdHJhbmdlczoge1xuXHRcdHg6IFstLjAxNTQsIC4wMjgxXSxcblx0XHR5OiBbMCwgLjg0NTNdLFxuXHRcdGI6IFstLjI3NzgsIC4zODhdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIgPSB7XG5cdG1vZGU6IFwieHl6NTBcIixcblx0cGFyc2U6IFtcInh5ei1kNTBcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDUwXCIsXG5cdHRvTW9kZToge1xuXHRcdHJnYjogY29udmVydFh5ejUwVG9SZ2IsXG5cdFx0bGFiOiBjb252ZXJ0WHl6NTBUb0xhYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NTAsXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9YeXo1MFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk2NF0sXG5cdFx0eTogWzAsIC45OTldLFxuXHRcdHo6IFswLCAuODI1XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ejogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1h5ejUwLmpzXG52YXIgY29udmVydFh5ejY1VG9YeXo1MCA9ICh4eXo2NSkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NjU7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDEuMDQ3OTI5ODIwODQwNTQ4OCAqIHggKyAuMDIyOTQ2NzkzMzQxMDE5MSAqIHkgLSAuMDUwMTkyMjI5NTQzMTM1NiAqIHosXG5cdFx0eTogLjAyOTYyNzgxNTY4ODE1OTMgKiB4ICsgLjk5MDQzNDQ4NDU3MzI0OSAqIHkgLSAuMDE3MDczODI1MDI5Mzg1MSAqIHosXG5cdFx0ejogLS4wMDkyNDMwNTgxNTI1OTEyICogeCArIC4wMTUwNTUxNDQ4OTY1Nzc5ICogeSArIC43NTE4NzQyODk5NTgwMDA4ICogelxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NTBUb1h5ejY1LmpzXG52YXIgY29udmVydFh5ejUwVG9YeXo2NSA9ICh4eXo1MCkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NTA7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC45NTU0NzM0NTI3MDQyMTgyICogeCAtIC4wMjMwOTg1MzY4NzQyNjE0ICogeSArIC4wNjMyNTkzMDg2NjEwMjE3ICogeixcblx0XHR5OiAtLjAyODM2OTcwNjk2MzIwODEgKiB4ICsgMS4wMDk5OTU0NTgwMDU4MjI2ICogeSArIC4wMjEwNDEzOTg5NjY5NDMgKiB6LFxuXHRcdHo6IC4wMTIzMTQwMDE2ODgzMTk5ICogeCAtIC4wMjA1MDc2OTY0MzM0Nzc5ICogeSArIDEuMzMwMzY1OTM2NjA4MDc1MyAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMSA9IHtcblx0bW9kZTogXCJ4eXo2NVwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo2NVRvUmdiLFxuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NjVUb1h5ejUwXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9YeXo2NSxcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9YeXo2NVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk1XSxcblx0XHR5OiBbMCwgMV0sXG5cdFx0ejogWzAsIDEuMDg4XVxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wieHl6XCIsIFwieHl6LWQ2NVwiXSxcblx0c2VyaWFsaXplOiBcInh5ei1kNjVcIixcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRSZ2JUb1lpcS5qc1xudmFyIGNvbnZlcnRSZ2JUb1lpcSA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieWlxXCIsXG5cdFx0eTogLjI5ODg5NTMxICogciArIC41ODY2MjI0NyAqIGcgKyAuMTE0NDgyMjMgKiBiLFxuXHRcdGk6IC41OTU5Nzc5OSAqIHIgLSAuMjc0MTc2MSAqIGcgLSAuMzIxODAxODkgKiBiLFxuXHRcdHE6IC4yMTE0NzAxNyAqIHIgLSAuNTIyNjE3MTEgKiBnICsgLjMxMTE0Njk0ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvY29udmVydFlpcVRvUmdiLmpzXG52YXIgY29udmVydFlpcVRvUmdiID0gKHsgeSwgaSwgcSwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmIChxID09PSB2b2lkIDApIHEgPSAwO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiB5ICsgLjk1NjA4NDQ1ICogaSArIC42MjA4ODg1ICogcSxcblx0XHRnOiB5IC0gLjI3MTM3NjY0ICogaSAtIC42NDg2MDU5ICogcSxcblx0XHRiOiB5IC0gMS4xMDU2MTcyNCAqIGkgKyAxLjcwMjUwMTI2ICogcVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24gPSB7XG5cdG1vZGU6IFwieWlxXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRZaXFUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1lpcSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieVwiLFxuXHRcdFwiaVwiLFxuXHRcdFwicVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS15aXFcIl0sXG5cdHNlcmlhbGl6ZTogXCItLXlpcVwiLFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbLS41OTUsIC41OTVdLFxuXHRcdHE6IFstLjUyMiwgLjUyMl1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcm91bmQuanNcbnZhciByID0gKHZhbHVlLCBwcmVjaXNpb24pID0+IE1hdGgucm91bmQodmFsdWUgKiAocHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbikpKSAvIHByZWNpc2lvbjtcbnZhciByb3VuZCA9IChwcmVjaXNpb24gPSA0KSA9PiAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHIodmFsdWUsIHByZWNpc2lvbikgOiB2YWx1ZTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZm9ybWF0dGVyLmpzXG52YXIgdHdvRGVjaW1hbHMgPSByb3VuZCgyKTtcbnZhciBjbGFtcCQxID0gKHZhbHVlKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG52YXIgZml4dXAgPSAodmFsdWUpID0+IE1hdGgucm91bmQoY2xhbXAkMSh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBQQVBFUl9MX1NQTElUID0gLjUyO1xudmFyIFBBUEVSX0NIUk9NQV9DQVAgPSAuMDI1O1xudmFyIEZBTExCQUNLX1BBUEVSID0ge1xuXHR1bmRlcmx5aW5nOiBcIiMxNjE2MWFcIixcblx0Y29udHJhc3Q6IFwiI2Y3ZjdmOFwiXG59O1xudmFyIGxhc3RMaXZlUGFwZXIgPSBudWxsO1xudmFyIFVTQUJMRV9MVU1BX01JTiA9IC4wMztcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIGNsYW1wID0gKG4sIGxvLCBoaSkgPT4gTWF0aC5taW4oaGksIE1hdGgubWF4KGxvLCBuKSk7XG52YXIgaGV4T2tsY2ggPSAobCwgYywgaCwgZmFsbGJhY2spID0+IGZvcm1hdEhleCh7XG5cdG1vZGU6IFwib2tsY2hcIixcblx0bCxcblx0Yyxcblx0aFxufSkgfHwgZmFsbGJhY2s7XG52YXIgcmdiVG9TYW1wbGUgPSAocmdiKSA9PiB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IHJnYjtcblx0aWYgKCFbXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0XS5ldmVyeSgobikgPT4gTnVtYmVyLmlzRmluaXRlKG4pKSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGhleCA9IGZvcm1hdEhleCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0aWYgKCFoZXgpIHJldHVybiBudWxsO1xuXHRjb25zdCBvayA9IG9rbGNoKHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJnYixcblx0XHRoZXgsXG5cdFx0bDogb2s/LmwgPz8gLjUsXG5cdFx0Yzogb2s/LmMgPz8gMCxcblx0XHRoOiBvaz8uaCA/PyAwXG5cdH07XG59O1xudmFyIHBhcGVyTEZyb21IZXggPSAoaGV4KSA9PiBva2xjaChoZXgpPy5sID8/IC40O1xudmFyIGhhbG9Gb3JQYXBlciA9IChkYXJrUGFwZXIpID0+IGRhcmtQYXBlciA/IHtcblx0c2hhZG93OiBcInJnYigwIDAgMCAvIDAuODgpXCIsXG5cdGdsb3c6IFwicmdiKDAgMCAwIC8gMC40NSlcIlxufSA6IHtcblx0c2hhZG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuNzIpXCIsXG5cdGdsb3c6IFwicmdiKDI1NSAyNTUgMjU1IC8gMC4zNSlcIlxufTtcbnZhciBpc1VzYWJsZVBhcGVyTHVtYSA9IChsdW1hKSA9PiBOdW1iZXIuaXNGaW5pdGUobHVtYSkgJiYgbHVtYSA+PSBVU0FCTEVfTFVNQV9NSU4gJiYgbHVtYSA8PSAxO1xudmFyIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMgPSAoc2FtcGxlcywgcGl4ZWxMdW1hKSA9PiB7XG5cdGlmICghc2FtcGxlcy5sZW5ndGggJiYgcGl4ZWxMdW1hID09IG51bGwpIHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdGNvbnN0IGxzID0gc2FtcGxlcy5tYXAoKHMpID0+IHMubCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXHRjb25zdCBtZWFuTCA9IHNhbXBsZXMubGVuZ3RoID8gc2FtcGxlcy5yZWR1Y2UoKHN1bSwgcykgPT4gc3VtICsgcy5sLCAwKSAvIHNhbXBsZXMubGVuZ3RoIDogcGl4ZWxMdW1hO1xuXHRjb25zdCBtZWRpYW5MID0gbHMubGVuZ3RoID8gbHNbTWF0aC5mbG9vcihscy5sZW5ndGggLyAyKV0gOiBtZWFuTDtcblx0Y29uc3QgcGFwZXJMID0gY2xhbXAocGl4ZWxMdW1hICE9IG51bGwgJiYgaXNVc2FibGVQYXBlckx1bWEocGl4ZWxMdW1hKSA/IHBpeGVsTHVtYSA6IE1hdGgubWF4KG1lYW5MLCBtZWRpYW5MKSwgLjA4LCAuOTQpO1xuXHRjb25zdCBwYXBlciA9IHNhbXBsZXMubGVuZ3RoID8gWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGEuYyAtIGIuYyB8fCBNYXRoLmFicyhhLmwgLSBwYXBlckwpIC0gTWF0aC5hYnMoYi5sIC0gcGFwZXJMKSlbMF0gOiBudWxsO1xuXHRjb25zdCBwYXBlckMgPSBwYXBlciA/IE1hdGgubWluKFBBUEVSX0NIUk9NQV9DQVAsIE1hdGgubWF4KDAsIHBhcGVyLmMgKiAuMikpIDogMDtcblx0Y29uc3QgaCA9IHBhcGVyPy5oIHx8IDA7XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTCA8IFBBUEVSX0xfU1BMSVQ7XG5cdHJldHVybiB7XG5cdFx0dW5kZXJseWluZzogaGV4T2tsY2gocGFwZXJMLCBwYXBlckMsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLnVuZGVybHlpbmcgOiBcIiNlOGU2ZTJcIiksXG5cdFx0Y29udHJhc3Q6IGhleE9rbGNoKGRhcmtQYXBlciA/IC45MyA6IC4xNiwgLjAwOCwgaCwgZGFya1BhcGVyID8gRkFMTEJBQ0tfUEFQRVIuY29udHJhc3QgOiBcIiMxNDE0MTZcIilcblx0fTtcbn07XG52YXIgc2FtcGxlSW1hZ2VNZWFuTHVtYSA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiA/IGltZ1VSTCA6IGF3YWl0IChhd2FpdCBmZXRjaChpbWdVUkwpKS5ibG9iKCk7XG5cdFx0aWYgKCFibG9iIHx8IGJsb2Iuc2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHRjb25zdCB3ID0gNDg7XG5cdFx0Y29uc3QgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoYml0bWFwLmhlaWdodCAvIE1hdGgubWF4KDEsIGJpdG1hcC53aWR0aCkgKiB3KSk7XG5cdFx0Y29uc3QgY2FudmFzID0gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBPZmZzY3JlZW5DYW52YXModywgaCkgOiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHtcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoXG5cdFx0fSk7XG5cdFx0aWYgKCEoY2FudmFzIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSkge1xuXHRcdFx0Y2FudmFzLndpZHRoID0gdztcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBoO1xuXHRcdH1cblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGlmICghY3R4KSB7XG5cdFx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCB3LCBoKTtcblx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGE7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0bGV0IG4gPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTYpIHtcblx0XHRcdGlmICgoZGF0YVtpICsgM10gPz8gMjU1KSA8IDE2KSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHIgPSBkYXRhW2ldIC8gMjU1O1xuXHRcdFx0Y29uc3QgZyA9IGRhdGFbaSArIDFdIC8gMjU1O1xuXHRcdFx0Y29uc3QgYiA9IGRhdGFbaSArIDJdIC8gMjU1O1xuXHRcdFx0c3VtICs9IC4yMTI2ICogciArIC43MTUyICogZyArIC4wNzIyICogYjtcblx0XHRcdG4rKztcblx0XHR9XG5cdFx0aWYgKG4gPCA4KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBsdW1hID0gc3VtIC8gbjtcblx0XHRyZXR1cm4gaXNVc2FibGVQYXBlckx1bWEobHVtYSkgPyBsdW1hIDogbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSA9IChsdW1hKSA9PiB7XG5cdHJldHVybiBsdW1hIDw9IFBBUEVSX0xfU1BMSVQgPyB7IC4uLkZBTExCQUNLX1BBUEVSIH0gOiB7XG5cdFx0dW5kZXJseWluZzogXCIjZThlNmUyXCIsXG5cdFx0Y29udHJhc3Q6IFwiIzE0MTQxNlwiXG5cdH07XG59O1xudmFyIGhhc1dhbGxwYXBlclBhcGVyID0gKHNlZWRzKSA9PiBCb29sZWFuKHNlZWRzLnVuZGVybHlpbmcgJiYgc2VlZHMuY29udHJhc3QpO1xudmFyIHJhbmtXYWxscGFwZXJTZWVkcyA9IChjZW50cm9pZHMsIHBpeGVsTHVtYSkgPT4ge1xuXHRjb25zdCBzYW1wbGVzID0gY2VudHJvaWRzLm1hcChyZ2JUb1NhbXBsZSkuZmlsdGVyKEJvb2xlYW4pO1xuXHRpZiAoIXNhbXBsZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYWNjZW50UG9vbCA9IHNhbXBsZXMuZmlsdGVyKChzKSA9PiBzLmwgPj0gLjE4ICYmIHMubCA8PSAuODggJiYgcy5jID49IC4wMikuc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jIHx8IE1hdGguYWJzKGIubCAtIC41NSkgLSBNYXRoLmFicyhhLmwgLSAuNTUpKTtcblx0Y29uc3QgcG9vbCA9IGFjY2VudFBvb2wubGVuZ3RoID8gYWNjZW50UG9vbCA6IFsuLi5zYW1wbGVzXS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMpO1xuXHRjb25zdCBwcmltYXJ5ID0gcG9vbFswXTtcblx0aWYgKCFwcmltYXJ5KSByZXR1cm4gbnVsbDtcblx0Y29uc3QgaHVlRGlzdCA9IChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgZCA9IE1hdGguYWJzKGEgLSBiKSAlIDM2MDtcblx0XHRyZXR1cm4gZCA+IDE4MCA/IDM2MCAtIGQgOiBkO1xuXHR9O1xuXHRjb25zdCBwaWNrTmV4dCA9ICh1c2VkKSA9PiB7XG5cdFx0Y29uc3QgcmVzdCA9IHBvb2wuZmlsdGVyKChzKSA9PiAhdXNlZC5pbmNsdWRlcyhzKSk7XG5cdFx0aWYgKCFyZXN0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgYmFzZSA9IHVzZWRbdXNlZC5sZW5ndGggLSAxXSA/PyBwcmltYXJ5O1xuXHRcdFx0Y29uc3QgbnVkZ2VkID0gZm9ybWF0SGV4KHtcblx0XHRcdFx0bW9kZTogXCJva2xjaFwiLFxuXHRcdFx0XHRsOiBNYXRoLm1pbiguODUsIE1hdGgubWF4KC4yLCBiYXNlLmwgKyAodXNlZC5sZW5ndGggPT09IDEgPyAtLjEyIDogLjEpKSksXG5cdFx0XHRcdGM6IE1hdGgubWF4KC4wNCwgYmFzZS5jICogLjg1KSxcblx0XHRcdFx0aDogYmFzZS5oXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmJhc2UsXG5cdFx0XHRcdGhleDogbnVkZ2VkIHx8IGJhc2UuaGV4LFxuXHRcdFx0XHRsOiBiYXNlLmxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBbLi4ucmVzdF0uc29ydCgoYSwgYikgPT4gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYi5oLCB1LmgpKSkgLSBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChhLmgsIHUuaCkpKSB8fCBiLmMgLSBhLmMpWzBdID8/IHJlc3RbMF07XG5cdH07XG5cdGNvbnN0IHNlY29uZGFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5XSk7XG5cdGNvbnN0IHRlcnRpYXJ5ID0gcGlja05leHQoW3ByaW1hcnksIHNlY29uZGFyeV0pO1xuXHRjb25zdCBwYXBlciA9IGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMoc2FtcGxlcywgcGl4ZWxMdW1hKTtcblx0cmV0dXJuIHtcblx0XHRwcmltYXJ5OiBwcmltYXJ5LmhleCxcblx0XHRzZWNvbmRhcnk6IHNlY29uZGFyeS5oZXgsXG5cdFx0dGVydGlhcnk6IHRlcnRpYXJ5LmhleCxcblx0XHQuLi5wYXBlclxuXHR9O1xufTtcbnZhciB0aGVtZUhvc3RzID0gKCkgPT4ge1xuXHRjb25zdCBub2RlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdG5vZGVzLmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVudi1zaGVsbC1yb290LCAud2YtZGVtby1yb290LCB1aS13aW5kb3dcIikuZm9yRWFjaCgoZWwpID0+IG5vZGVzLmFkZChlbCkpO1xuXHRyZXR1cm4gWy4uLm5vZGVzXTtcbn07XG52YXIgd2FsbHBhcGVyU2VlZHNNYXlQYWludCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHNyYyA9IFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jb2xvclNvdXJjZSB8fCBcIlwiKTtcblx0aWYgKCFzcmMpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gc3JjID09PSBcIndhbGxwYXBlclwiIHx8IHNyYyA9PT0gXCJzcGVlZC1kaWFsXCIgfHwgc3JjID09PSBcInN5c3RlbS13YWxscGFwZXJcIjtcbn07XG52YXIgaXNWYWxpZENvbG9yID0gKGNvbG9yKSA9PiBCb29sZWFuKHBhcnNlKGNvbG9yKSk7XG52YXIgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyA9IChwYXBlciwgZXh0cmFIb3N0cyA9IFtdKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgZGFya1BhcGVyID0gcGFwZXJMRnJvbUhleChwYXBlci51bmRlcmx5aW5nKSA8IFBBUEVSX0xfU1BMSVQ7XG5cdGNvbnN0IHsgc2hhZG93LCBnbG93IH0gPSBoYWxvRm9yUGFwZXIoZGFya1BhcGVyKTtcblx0Y29uc3QgaG9zdHMgPSBuZXcgU2V0KHRoZW1lSG9zdHMoKSk7XG5cdGZvciAoY29uc3QgZWwgb2YgZXh0cmFIb3N0cykgaG9zdHMuYWRkKGVsKTtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIudW5kZXJseWluZykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIuY29udHJhc3QpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKHNoYWRvdykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IoZ2xvdykpIHJldHVybjtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHR9XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0Z2xvYmFsUXVlcnkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci1jb250cmFzdC1jb2xvclwiLCBwYXBlci5jb250cmFzdCk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1lbnYtbGF1bmNoZXItZmdcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLWdsb3dcIiwgZ2xvdyk7XG59O1xudmFyIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSA9IChuYW1lLCBpbml0aWFsVmFsdWUgPSBcIiM1YTllYzhcIikgPT4ge1xuXHR0cnkge1xuXHRcdENTUz8ucmVnaXN0ZXJQcm9wZXJ0eT8uKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRzeW50YXg6IFwiPGNvbG9yPlwiLFxuXHRcdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0XHRpbml0aWFsVmFsdWVcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHt9XG59O1xudmFyIHBlcnNpc3RMaXZlUGFwZXIgPSAocGFwZXIpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRpZiAoIWNhY2hlZCkgcmV0dXJuO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHR1bmRlcmx5aW5nOiBwYXBlci51bmRlcmx5aW5nLFxuXHRcdFx0Y29udHJhc3Q6IHBhcGVyLmNvbnRyYXN0XG5cdFx0fSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSA9IChsdW1hLCBleHRyYUhvc3RzID0gW10pID0+IHtcblx0aWYgKCFpc1VzYWJsZVBhcGVyTHVtYShsdW1hKSkge1xuXHRcdGlmIChsYXN0TGl2ZVBhcGVyKSB7XG5cdFx0XHRhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKGxhc3RMaXZlUGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRcdFx0cmV0dXJuIGxhc3RMaXZlUGFwZXI7XG5cdFx0fVxuXHRcdHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdH1cblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hKGx1bWEpO1xuXHRsYXN0TGl2ZVBhcGVyID0gcGFwZXI7XG5cdGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMocGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRwZXJzaXN0TGl2ZVBhcGVyKHBhcGVyKTtcblx0cmV0dXJuIHBhcGVyO1xufTtcbnZhciBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMgPSAoc2VlZHMpID0+IHtcblx0Y29uc3QgbmV4dCA9IGxhc3RMaXZlUGFwZXIgPyB7XG5cdFx0Li4uc2VlZHMsXG5cdFx0Li4ubGFzdExpdmVQYXBlclxuXHR9IDogc2VlZHM7XG5cdHRyeSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KG5leHQpKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUklNQVJZX1NUT1JBR0VfS0VZLCBuZXh0LnByaW1hcnkpO1xuXHR9IGNhdGNoIHt9XG5cdGlmIChoYXNXYWxscGFwZXJQYXBlcihuZXh0KSkgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyhuZXh0KTtcblx0aWYgKCF3YWxscGFwZXJTZWVkc01heVBhaW50KCkpIHJldHVybjtcblx0Zm9yIChjb25zdCBob3N0IG9mIHRoZW1lSG9zdHMoKSkgZm9yIChjb25zdCBbcHJvcCwga2V5XSBvZiBTRUVEX1BST1BTKSBzZXRTdHlsZVByb3BlcnR5KGhvc3QsIHByb3AsIG5leHRba2V5XSk7XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQucHJpbWFyeSkpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IobmV4dC5zZWNvbmRhcnkpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQudGVydGlhcnkpKSByZXR1cm47XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5LCBodG1sLCAud2YtZGVtby1yb290LCB1aS13aW5kb3csIC52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShlbCwgXCItLWNvbG9yLXByaW1hcnlcIiwgbmV4dC5wcmltYXJ5KTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGVsLCBcIi0tYmFzZS1jb2xvclwiLCBuZXh0LnByaW1hcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci10ZXJ0aWFyeVwiLCBuZXh0LnRlcnRpYXJ5KTtcblx0fSk7XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1wcmltYXJ5XCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXNlLWNvbG9yXCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItdGVydGlhcnlcIiwgbmV4dC50ZXJ0aWFyeSk7XG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidTItdGhlbWUtY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0c291cmNlOiBcIndhbGxwYXBlclwiLFxuXHRcdHNlZWRzOiBuZXh0XG5cdH0gfSkpO1xufTtcbnZhciBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVkpO1xuXHRcdGlmICghcmF3KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0aWYgKCFwYXJzZWQ/LnByaW1hcnkgfHwgIXBhcnNlZD8uc2Vjb25kYXJ5IHx8ICFwYXJzZWQ/LnRlcnRpYXJ5KSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciA9IGFzeW5jIChpbWdVUkwsIG9wdHMpID0+IHtcblx0Y29uc3Qgc3JjS2V5ID0gdHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIiA/IGltZ1VSTC5zbGljZSgwLCAyMDQ4KSA6IGBibG9iOiR7aW1nVVJMLm5hbWUgfHwgXCJ3YWxscGFwZXJcIn06JHtpbWdVUkwuc2l6ZX1gO1xuXHRpZiAodHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGlmICghaW1nVVJMKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmZhaWxlZFdhbGxwYXBlclNyY1wiKV0/LmhhcyhpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoaW1nVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAhL15kYXRhOmltYWdlXFwvL2kudGVzdChpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoL3ZpZGVvXFwvbXAydC9pLnRlc3QoaW1nVVJMKSkgcmV0dXJuIG51bGw7XG5cdFx0aWYgKC9cXC9hc3NldHNcXC93YWxscGFwZXJcXC5qcGcoPzokfFs/I10pL2kudGVzdChpbWdVUkwpKSB0cnkge1xuXHRcdFx0Y29uc3Qgc2t1ID0gU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcFNrdSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgaG9zdCA9IFN0cmluZyhnbG9iYWxUaGlzLmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHNrdSA9PT0gXCJwcm9jZXNzXCIgfHwgaG9zdCA9PT0gXCJwcm9jZXNzLnUycmUuc3BhY2VcIiB8fCBob3N0ID09PSBcIndvcmtjZW50ZXIudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwiYWkudTJyZS5zcGFjZVwiKSByZXR1cm4gbnVsbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbWdVUkwgaW5zdGFuY2VvZiBCbG9iICYmIGltZ1VSTC50eXBlICYmICFpbWdVUkwudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpICYmIGltZ1VSTC50eXBlICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgbGl2ZUx1bWEgPSBhd2FpdCBzYW1wbGVJbWFnZU1lYW5MdW1hKGltZ1VSTCk7XG5cdGlmIChsaXZlTHVtYSAhPSBudWxsKSBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEobGl2ZUx1bWEpO1xuXHRpZiAoIW9wdHM/LmZvcmNlKSB0cnkge1xuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXQUxMUEFQRVJfVVJMX0tFWSkgPT09IHNyY0tleSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdFx0XHR9IDogY2FjaGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdGNvbnN0IGNlbnRyb2lkcyA9IGF3YWl0IGdldERvbWluYW50Q29sb3JzKGltZ1VSTCk7XG5cdFx0Y29uc3Qgc2VlZHMgPSByYW5rV2FsbHBhcGVyU2VlZHMoY2VudHJvaWRzLCBsaXZlTHVtYSA/PyB2b2lkIDApO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdC4uLnNlZWRzLFxuXHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdH0gOiBzZWVkcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIGZhaWxlZFwiLCBlcnIpO1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRpZiAoY2FjaGVkKSBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8vIHNyYy9jYW52YXMvQ2FudmFzLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFVTRVJfV0FMTFBBUEVSX1BBVEggPSBcIi9hc3NldHMvdXNlci13YWxscGFwZXJcIjtcbnZhciBVU0VSX1dBTExQQVBFUl9DQUNIRSA9IFwiY3dzcC11c2VyLXdhbGxwYXBlclwiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciB3YWxscGFwZXJFcG9jaCA9IDA7XG52YXIgY3VycmVudE9yaWVudE51bWJlciA9ICgpID0+IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG52YXIgaXNJZGJQb2ludGVyID0gKHBvaW50ZXIpID0+IHBvaW50ZXIgPT09IFwiaWRiOnJzLXdhbGxwYXBlclwiIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImlkYjpcIik7XG52YXIgaXNVbnVzYWJsZVN0b3JlZFVybCA9IChwb2ludGVyKSA9PiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAocG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgfHwgIS9eZGF0YTppbWFnZVxcLy9pLnRlc3QocG9pbnRlcikpO1xudmFyIHJldm9rZUxpdmVPYmplY3RVcmwgPSAoKSA9PiB7XG5cdHdhbGxwYXBlckVwb2NoICs9IDE7XG5cdGlmIChsaXZlT2JqZWN0VXJsICYmIGxpdmVPYmplY3RVcmwuc3RhcnRzV2l0aChcImJsb2I6XCIpKSB0cnkge1xuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwobGl2ZU9iamVjdFVybCk7XG5cdH0gY2F0Y2gge31cblx0bGl2ZU9iamVjdFVybCA9IG51bGw7XG59O1xudmFyIGFkb3B0V2FsbHBhcGVyQmxvYiA9IChibG9iLCBlcG9jaCkgPT4ge1xuXHRpZiAoZXBvY2ggIT09IHdhbGxwYXBlckVwb2NoKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0aWYgKGxpdmVPYmplY3RVcmwpIHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIG9wZW5XYWxscGFwZXJEYiA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0aWYgKHR5cGVvZiBpbmRleGVkREIgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRyZWplY3QoLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcImluZGV4ZWREQiB1bmF2YWlsYWJsZVwiKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKElEQl9OQU1FLCAxKTtcblx0cmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcblx0XHRjb25zdCBkYiA9IHJlcS5yZXN1bHQ7XG5cdFx0aWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKElEQl9TVE9SRSkpIGRiLmNyZWF0ZU9iamVjdFN0b3JlKElEQl9TVE9SRSk7XG5cdH07XG5cdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xuXHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBvcGVuIGZhaWxlZFwiKSk7XG59KTtcbnZhciBpZGJQdXRXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRjb25zdCBkYiA9IGF3YWl0IG9wZW5XYWxscGFwZXJEYigpO1xuXHR0cnkge1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWR3cml0ZVwiKTtcblx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkucHV0KGJsb2IsIElEQl9LRVkpO1xuXHRcdFx0dHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcblx0XHRcdHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBwdXQgZmFpbGVkXCIpKTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRkYi5jbG9zZSgpO1xuXHR9XG59O1xudmFyIGlkYkdldFdhbGxwYXBlciA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZ2V0KElEQl9LRVkpO1xuXHRcdFx0cmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdiA9IHJlcS5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodiBpbnN0YW5jZW9mIEJsb2IgPyB2IDogbnVsbCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZ2V0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBjYWNoZVVzZXJXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkgcmV0dXJuO1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKFVTRVJfV0FMTFBBUEVSX0NBQ0hFKTtcblx0Y29uc3QgdHlwZSA9IGJsb2IudHlwZSAmJiBibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSA/IGJsb2IudHlwZSA6IFwiaW1hZ2UvanBlZ1wiO1xuXHRhd2FpdCBjYWNoZS5wdXQobmV3IFJlcXVlc3QoVVNFUl9XQUxMUEFQRVJfUEFUSCksIG5ldyBSZXNwb25zZShibG9iLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogdHlwZSB9IH0pKTtcbn07XG52YXIgY2xlYXJDYWNoZWRVc2VyV2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGF3YWl0IChhd2FpdCBjYWNoZXMub3BlbihVU0VSX1dBTExQQVBFUl9DQUNIRSkpLmRlbGV0ZShuZXcgUmVxdWVzdChVU0VSX1dBTExQQVBFUl9QQVRIKSk7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlckJsb2JVcmwgPSBhc3luYyAoKSA9PiB7XG5cdGlmIChsaXZlT2JqZWN0VXJsKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0Y29uc3QgZXBvY2ggPSB3YWxscGFwZXJFcG9jaDtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCk7XG5cdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIGVwb2NoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBpc0lubGluZVBheWxvYWQgPSAodXJsKSA9PiB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHVybC5zdGFydHNXaXRoKFwiYmxvYjpcIik7XG52YXIgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRpZiAoaXNJZGJQb2ludGVyKHBvaW50ZXIpIHx8IGlzVW51c2FibGVTdG9yZWRVcmwocG9pbnRlcikpIHtcblx0XHRjb25zdCB1cmwgPSBhd2FpdCByZXN0b3JlV2FsbHBhcGVyQmxvYlVybCgpO1xuXHRcdGlmICh1cmwpIHtcblx0XHRcdGlmICghaXNJZGJQb2ludGVyKHBvaW50ZXIpKSB3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0XHRcdHJldHVybiB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlcigpID8gXCJcIiA6IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRpZiAocHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIoKSAmJiAoIXBvaW50ZXIgfHwgcG9pbnRlciA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSkgcmV0dXJuIFwiXCI7XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgd2FybVByb21pc2UgPSBudWxsO1xudmFyIHdhcm1BcHBXYWxscGFwZXIgPSAoKSA9PiB7XG5cdGlmICh3YXJtUHJvbWlzZSkgcmV0dXJuIHdhcm1Qcm9taXNlO1xuXHR3YXJtUHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRcdGlmIChpc0lkYlBvaW50ZXIocG9pbnRlcikgfHwgaXNVbnVzYWJsZVN0b3JlZFVybChwb2ludGVyKSkge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHRcdFx0Y29uc3QgdXJsID0gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIHdhbGxwYXBlckVwb2NoKTtcblx0XHRcdHJldHVybiB1cmwgPyB7XG5cdFx0XHRcdHVybCxcblx0XHRcdFx0YmxvYlxuXHRcdFx0fSA6IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVybCA9IHBvaW50ZXIgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRcdGlmICghdXJsIHx8IHVybCA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSB0cnkge1xuXHRcdFx0aWYgKFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmRhdGFzZXQ/LmN3c3BTa3UgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9jZXNzXCIpIHJldHVybiBudWxsO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghdXJsKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCByc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KTtcblx0XHRpZiAoIXJzcC5vaykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0aWYgKCFibG9iLnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybCxcblx0XHRcdGJsb2Jcblx0XHR9O1xuXHR9KSgpLmNhdGNoKCgpID0+IG51bGwpO1xuXHRyZXR1cm4gd2FybVByb21pc2U7XG59O1xudmFyIHdhcm1lZEJsb2JGb3IgPSBhc3luYyAoc3JjKSA9PiB7XG5cdGlmICghd2FybVByb21pc2UgfHwgIXNyYykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHdhcm0gPSBhd2FpdCB3YXJtUHJvbWlzZTtcblx0aWYgKCF3YXJtKSByZXR1cm4gbnVsbDtcblx0aWYgKHdhcm0udXJsID09PSBzcmMgfHwgd2FybS51cmwgPT09IHNyYy5zcGxpdChcIiNcIilbMF0pIHJldHVybiB3YXJtLmJsb2I7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciA9ICgpID0+IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xudmFyIHN5bmNDYW52YXNPcmllbnQgPSAoY2FudmFzKSA9PiB7XG5cdGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG4gPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyhuKTtcblx0XHRpZiAoY2FudmFzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgIT09IHMpIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLm9yaWVudCA9IG47XG5cdH07XG5cdGFwcGx5KCk7XG5cdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcyhhcHBseSk7XG59O1xudmFyIHN5bmNBcHBXYWxscGFwZXJPcmllbnQgPSAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKS5mb3JFYWNoKChjYW52YXMpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdH0pO1xufTtcbnZhciByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQgPSAoKSA9PiB7XG5cdHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKS50aGVuKCh1cmwpID0+IHtcblx0XHRzeW5jQXBwV2FsbHBhcGVyT3JpZW50KCk7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdH0pO1xufTtcbnZhciBzeW5jR2xvd1RvVGhlbWUgPSAoZ2xvdykgPT4ge1xuXHRnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY29sb3ItcHJpbWFyeVwiKS50cmltKCk7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbn07XG52YXIgcGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzID0gKHBhaW50VXJsKSA9PiB7XG5cdGNvbnN0IGNhbnZhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCIpO1xuXHRjb25zdCBvcmllbnQgPSBTdHJpbmcoY3VycmVudE9yaWVudE51bWJlcigpKTtcblx0Y2FudmFzZXMuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHBhaW50VXJsKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgb3JpZW50KTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgb3JpZW50KTtcblx0fSk7XG59O1xudmFyIGRhdGFVcmxUb0Jsb2IgPSBhc3luYyAoZGF0YVVybCkgPT4ge1xuXHRyZXR1cm4gKGF3YWl0IGZldGNoKGRhdGFVcmwpKS5ibG9iKCk7XG59O1xudmFyIHNldEFwcFdhbGxwYXBlckZyb21CbG9iID0gYXN5bmMgKGJsb2IpID0+IHtcblx0aWYgKCEoYmxvYiBpbnN0YW5jZW9mIEJsb2IpIHx8IGJsb2Iuc2l6ZSA8PSAwKSB7XG5cdFx0c2V0QXBwV2FsbHBhcGVyKERFRkFVTFRfV0FMTFBBUEVSX1VSTCk7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMobGl2ZU9iamVjdFVybCk7XG5cdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKGJsb2IsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaWRiUHV0V2FsbHBhcGVyKGJsb2IpO1xuXHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIElEQiBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0Y29uc3QgZGF0YVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQgfHwgXCJcIikpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChyZWFkZXIuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcInJlYWQgZmFpbGVkXCIpKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChkYXRhVXJsICYmICF3cml0ZVN0b3JhZ2VQb2ludGVyKGRhdGFVcmwpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIGxvY2FsU3RvcmFnZSBwZXJzaXN0IGFsc28gZmFpbGVkIChxdW90YT8pXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHR0cnkge1xuXHRcdGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcImN3c3Atd2FsbHBhcGVyLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdFx0cG9pbnRlcjogV0FMTFBBUEVSX0lEQl9NQVJLRVIsXG5cdFx0XHR1cmw6IGxpdmVPYmplY3RVcmxcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcbn07XG52YXIgaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyID0gKGNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCByb290ID0gY29udGFpbmVyO1xuXHRyb290LnJlcGxhY2VDaGlsZHJlbigpO1xuXHRyb290LmRhdGFzZXQuYXBwTGF5ZXIgPSBcImNhbnZhc1wiO1xuXHRyb290LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRyb290LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRyb290LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGdsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRnbG93LmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fZ2xvd1wiO1xuXHRnbG93LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRnbG93LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdGdsb3cuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHsgaXM6IFwidWktY2FudmFzXCIgfSk7XG5cdGNhbnZhcy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2ltYWdlIHVpLWNhbnZhc1wiO1xuXHRjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdGNhbnZhcy5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRjYW52YXMuc3R5bGUuaW5saW5lU2l6ZSA9IFwibWluKDEwMGNxaSwgMTAwZHZpKVwiO1xuXHRjYW52YXMuc3R5bGUuYmxvY2tTaXplID0gXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhJbmxpbmVTaXplID0gXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhCbG9ja1NpemUgPSBcIm1pbigxMDBjcWIsIDEwMGR2YilcIjtcblx0Y2FudmFzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0Y2FudmFzLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwibm9ybWFsXCI7XG5cdGNhbnZhcy5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcblx0Y2FudmFzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJub25lXCI7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImR5bmFtaWMtcmFuZ2UtbGltaXRcIiwgXCJuby1saW1pdFwiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3Itc3BhY2VcIiwgZ2V0Q3VycmVudERpc3BsYXlDb2xvclNwYWNlKCkgfHwgXCJkaXNwbGF5LXAzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIiwgXCJpbXBvcnRhbnRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRjYW52YXMuc2V0QXR0cmlidXRlKFwiaXNcIiwgXCJ1aS1jYW52YXNcIik7XG5cdGNvbnN0IHBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHBvc3Rlci5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX3Bvc3RlclwiO1xuXHRwb3N0ZXIuYWx0ID0gXCJcIjtcblx0cG9zdGVyLmRlY29kaW5nID0gXCJhc3luY1wiO1xuXHRwb3N0ZXIuc2V0QXR0cmlidXRlKFwiZmV0Y2hwcmlvcml0eVwiLCBcImhpZ2hcIik7XG5cdHBvc3Rlci5kcmFnZ2FibGUgPSBmYWxzZTtcblx0cG9zdGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRwb3N0ZXIuc3R5bGUuaW5zZXQgPSBcIjBcIjtcblx0cG9zdGVyLnN0eWxlLmlubGluZVNpemUgPSBcIm1pbigxMDBjcWksIDEwMGR2aSlcIjtcblx0cG9zdGVyLnN0eWxlLmJsb2NrU2l6ZSA9IFwibWluKDEwMGNxYiwgMTAwZHZiKVwiO1xuXHRwb3N0ZXIuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRwb3N0ZXIuc3R5bGUub2JqZWN0UG9zaXRpb24gPSBcImNlbnRlclwiO1xuXHRwb3N0ZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRyb290LmFwcGVuZChjYW52YXMpO1xuXHRwb3N0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jd3NwLXdhbGxwYXBlci1wb3N0ZXJcIik7XG5cdFx0fSBjYXRjaCB7fVxuXHR9LCB7IG9uY2U6IHRydWUgfSk7XG5cdHBvc3Rlci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xuXHRcdHBvc3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0aWYgKHBvc3Rlci5zcmMuaW5jbHVkZXMoXCIvYXNzZXRzL3VzZXItd2FsbHBhcGVyXCIpKSBwb3N0ZXIucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHR9KTtcblx0cmVtZW1iZXJNaXNzaW5nRGVmYXVsdFdhbGxwYXBlcigpO1xuXHRjb25zdCBwb2ludGVyID0gcmVhZFN0b3JhZ2VQb2ludGVyKCk7XG5cdGNvbnN0IGNvbGRVcmwgPSBpc0lkYlBvaW50ZXIocG9pbnRlcikgPyBVU0VSX1dBTExQQVBFUl9QQVRIIDogcG9pbnRlci5zdGFydHNXaXRoKFwiZGF0YTpcIikgfHwgcG9pbnRlci5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBcIlwiIDogcG9pbnRlcjtcblx0Y29uc3Qgd2FybWluZyA9IHdhcm1BcHBXYWxscGFwZXIoKTtcblx0aWYgKGNvbGRVcmwgJiYgIWZhaWxlZFdhbGxwYXBlclNyYy5oYXMoY29sZFVybCkpIHtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgY29sZFVybCk7XG5cdFx0cG9zdGVyLnNyYyA9IGNvbGRVcmw7XG5cdH1cblx0d2FybWluZy50aGVuKCh3YXJtKSA9PiB7XG5cdFx0aWYgKCF3YXJtIHx8ICFwb3N0ZXIuaXNDb25uZWN0ZWQpIHJldHVybjtcblx0XHRpZiAod2FybS51cmwuc3RhcnRzV2l0aChcImJsb2I6XCIpKSB7XG5cdFx0XHRwb3N0ZXIuc3JjID0gd2FybS51cmw7XG5cdFx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgd2FybS51cmwpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXBvc3Rlci5nZXRBdHRyaWJ1dGUoXCJzcmNcIikpIHBvc3Rlci5zcmMgPSB3YXJtLnVybDtcblx0fSk7XG5cdGNvbnN0IGRpc3Bvc2VPcmllbnQgPSBzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdGFwcGx5V2FsbHBhcGVyTGF5b3V0KGNhbnZhcywgZ2V0QXBwV2FsbHBhcGVyTGF5b3V0KCkpO1xuXHRyZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSgpO1xuXHRzeW5jR2xvd1RvVGhlbWUoZ2xvdyk7XG5cdChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgd2FsbHBhcGVyID0gYXdhaXQgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCgpO1xuXHRcdGlmICghd2FsbHBhcGVyIHx8IGZhaWxlZFdhbGxwYXBlclNyYy5oYXMod2FsbHBhcGVyKSkge1xuXHRcdFx0c3luY0dsb3dUb1RoZW1lKGdsb3cpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgd2FsbHBhcGVyKTtcblx0XHRpZiAocG9zdGVyLmlzQ29ubmVjdGVkKSBwb3N0ZXIuc3JjID0gd2FsbHBhcGVyO1xuXHRcdHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0XHRjb25zdCB0aGVtZVNyYyA9IHdhbGxwYXBlci5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBhd2FpdCBpZGJHZXRXYWxscGFwZXIoKSB8fCB3YWxscGFwZXIgOiB3YWxscGFwZXI7XG5cdFx0Y29uc3QgZXh0cmFjdCA9ICgpID0+IHtcblx0XHRcdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKHRoZW1lU3JjKS50aGVuKCgpID0+IHN5bmNHbG93VG9UaGVtZShnbG93KSk7XG5cdFx0fTtcblx0XHRjb25zdCByaWMgPSBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5cdFx0aWYgKHR5cGVvZiByaWMgPT09IFwiZnVuY3Rpb25cIikgcmljKGV4dHJhY3QsIHsgdGltZW91dDogMTIwMCB9KTtcblx0XHRlbHNlIGdsb2JhbFRoaXMuc2V0VGltZW91dD8uKGV4dHJhY3QsIDMyMCk7XG5cdH0pKCk7XG5cdHJldHVybiB7XG5cdFx0cm9vdCxcblx0XHRjYW52YXMsXG5cdFx0Z2xvdyxcblx0XHRkaXNwb3NlT3JpZW50XG5cdH07XG59O1xudmFyIFdBTExQQVBFUl9MQVlPVVRfS0VZID0gXCJycy13YWxscGFwZXItbGF5b3V0XCI7XG52YXIgQVBQX1dBTExQQVBFUl9DQU5WQVNfU0VMRUNUT1IgPSBcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCI7XG52YXIgbm9ybWFsaXplV2FsbHBhcGVyU2NhbGUgPSAocmF3KSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gdHlwZW9mIHJhdyA9PT0gXCJudW1iZXJcIiA/IHJhdyA6IHR5cGVvZiByYXcgPT09IFwic3RyaW5nXCIgPyBOdW1iZXIocmF3LnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3gkLywgXCJcIikpIDogTmFOO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+IDAgPyB2YWx1ZSA6IDE7XG59O1xudmFyIG5vcm1hbGl6ZVdhbGxwYXBlclBvc2l0aW9uID0gKHJhdykgPT4ge1xuXHRjb25zdCB2YWx1ZSA9IHR5cGVvZiByYXcgPT09IFwic3RyaW5nXCIgPyByYXcudHJpbSgpLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xuXHRpZiAodmFsdWUgPT09IFwic3RhcnRcIiB8fCB2YWx1ZSA9PT0gXCJjZW50ZXJcIiB8fCB2YWx1ZSA9PT0gXCJlbmRcIikgcmV0dXJuIHZhbHVlO1xuXHRpZiAoL15bKy1dPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKyklJC8udGVzdCh2YWx1ZSkpIHtcblx0XHRjb25zdCBwZXJjZW50ID0gTnVtYmVyKHZhbHVlLnNsaWNlKDAsIC0xKSk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShwZXJjZW50KSkgcmV0dXJuIGAke01hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgcGVyY2VudCkpfSVgO1xuXHR9XG5cdHJldHVybiBcImNlbnRlclwiO1xufTtcbnZhciB3YWxscGFwZXJQb3NpdGlvblJhdGlvID0gKHJhdykgPT4ge1xuXHRjb25zdCBwb3NpdGlvbiA9IG5vcm1hbGl6ZVdhbGxwYXBlclBvc2l0aW9uKHJhdyk7XG5cdGlmIChwb3NpdGlvbiA9PT0gXCJzdGFydFwiKSByZXR1cm4gMDtcblx0aWYgKHBvc2l0aW9uID09PSBcImNlbnRlclwiKSByZXR1cm4gLjU7XG5cdGlmIChwb3NpdGlvbiA9PT0gXCJlbmRcIikgcmV0dXJuIDE7XG5cdHJldHVybiBOdW1iZXIocG9zaXRpb24uc2xpY2UoMCwgLTEpKSAvIDEwMDtcbn07XG52YXIgbm9ybWFsaXplV2FsbHBhcGVyTGF5b3V0ID0gKGxheW91dCkgPT4gKHtcblx0c2NhbGU6IG5vcm1hbGl6ZVdhbGxwYXBlclNjYWxlKGxheW91dD8uc2NhbGUgfHwgMSksXG5cdHBvc2l0aW9uWDogbm9ybWFsaXplV2FsbHBhcGVyUG9zaXRpb24obGF5b3V0Py5wb3NpdGlvblggPz8gXCJjZW50ZXJcIiksXG5cdHBvc2l0aW9uWTogbm9ybWFsaXplV2FsbHBhcGVyUG9zaXRpb24obGF5b3V0Py5wb3NpdGlvblkgPz8gXCJjZW50ZXJcIilcbn0pO1xudmFyIHNlc3Npb25XYWxscGFwZXJMYXlvdXQ7XG52YXIgZGVmYXVsdFdhbGxwYXBlckxheW91dEF0dHJzID0ge1xuXHRzY2FsZTogXCIxXCIsXG5cdFwicG9zaXRpb24teFwiOiBcImNlbnRlclwiLFxuXHRcInBvc2l0aW9uLXlcIjogXCJjZW50ZXJcIlxufTtcbnZhciByZWFkU3RvcmVkV2FsbHBhcGVyTGF5b3V0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX0xBWU9VVF9LRVkpID8/IFwibnVsbFwiKTtcblx0XHRpZiAoIXJhdyB8fCB0eXBlb2YgcmF3ICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG5cdFx0ZGVmYXVsdFdhbGxwYXBlckxheW91dEF0dHJzID0ge1xuXHRcdFx0c2NhbGU6IFN0cmluZyhub3JtYWxpemVXYWxscGFwZXJTY2FsZShyYXcuc2NhbGUpKSxcblx0XHRcdFwicG9zaXRpb24teFwiOiBub3JtYWxpemVXYWxscGFwZXJQb3NpdGlvbihyYXcucG9zaXRpb25YID8/IFwiY2VudGVyXCIpLFxuXHRcdFx0XCJwb3NpdGlvbi15XCI6IG5vcm1hbGl6ZVdhbGxwYXBlclBvc2l0aW9uKHJhdy5wb3NpdGlvblkgPz8gXCJjZW50ZXJcIilcblx0XHR9O1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIHN5bmNXYWxscGFwZXJMYXlvdXRBdHRycyA9ICgpID0+IHtcblx0Y29uc3QgbGF5b3V0ID0gZ2V0QXBwV2FsbHBhcGVyTGF5b3V0KCk7XG5cdGRlZmF1bHRXYWxscGFwZXJMYXlvdXRBdHRycyA9IHtcblx0XHRzY2FsZTogU3RyaW5nKGxheW91dC5zY2FsZSksXG5cdFx0XCJwb3NpdGlvbi14XCI6IGxheW91dC5wb3NpdGlvblgsXG5cdFx0XCJwb3NpdGlvbi15XCI6IGxheW91dC5wb3NpdGlvbllcblx0fTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEFQUF9XQUxMUEFQRVJfQ0FOVkFTX1NFTEVDVE9SKS5mb3JFYWNoKChjYW52YXMpID0+IGFwcGx5V2FsbHBhcGVyTGF5b3V0KGNhbnZhcywgbGF5b3V0KSk7XG59O1xucmVhZFN0b3JlZFdhbGxwYXBlckxheW91dCgpO1xudmFyIGdldEFwcFdhbGxwYXBlckxheW91dCA9ICgpID0+IHtcblx0aWYgKHNlc3Npb25XYWxscGFwZXJMYXlvdXQpIHJldHVybiB7IC4uLnNlc3Npb25XYWxscGFwZXJMYXlvdXQgfTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbm9ybWFsaXplV2FsbHBhcGVyTGF5b3V0KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX0xBWU9VVF9LRVkpID8/IFwibnVsbFwiKSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBub3JtYWxpemVXYWxscGFwZXJMYXlvdXQoKTtcblx0fVxufTtcbnZhciBhcHBseVdhbGxwYXBlckxheW91dCA9IChjYW52YXMsIGxheW91dCkgPT4ge1xuXHRjYW52YXMuc2V0QXR0cmlidXRlKFwic2NhbGVcIiwgU3RyaW5nKGxheW91dC5zY2FsZSkpO1xuXHRjYW52YXMuc2V0QXR0cmlidXRlKFwicG9zaXRpb24teFwiLCBsYXlvdXQucG9zaXRpb25YKTtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uLXlcIiwgbGF5b3V0LnBvc2l0aW9uWSk7XG59O1xudmFyIHNldEFwcFdhbGxwYXBlckxheW91dCA9IChwYXRjaCkgPT4ge1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVXYWxscGFwZXJMYXlvdXQoe1xuXHRcdC4uLmdldEFwcFdhbGxwYXBlckxheW91dCgpLFxuXHRcdC4uLnBhdGNoXG5cdH0pO1xuXHRzZXNzaW9uV2FsbHBhcGVyTGF5b3V0ID0gbGF5b3V0O1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9MQVlPVVRfS0VZLCBKU09OLnN0cmluZ2lmeShsYXlvdXQpKTtcblx0fSBjYXRjaCB7fVxuXHRzeW5jV2FsbHBhcGVyTGF5b3V0QXR0cnMoKTtcbn07XG52YXIgc2V0QXBwV2FsbHBhcGVyID0gKHdhbGxwYXBlclVybCkgPT4ge1xuXHRjb25zdCB2YWx1ZSA9IFN0cmluZyh3YWxscGFwZXJVcmwgfHwgXCJcIikudHJpbSgpIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0aWYgKGlzSW5saW5lUGF5bG9hZCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID4gTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTKSB7XG5cdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSB2YWx1ZS5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBhd2FpdCAoYXdhaXQgZmV0Y2godmFsdWUpKS5ibG9iKCkgOiBhd2FpdCBkYXRhVXJsVG9CbG9iKHZhbHVlKTtcblx0XHRcdFx0YXdhaXQgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IoYmxvYik7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHNldEFwcFdhbGxwYXBlciBpbmxpbmUgcGVyc2lzdCBmYWlsZWRcIiwgZXJyKTtcblx0XHRcdFx0Y29uc3QgZmFsbGJhY2sgPSB2YWx1ZS5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBERUZBVUxUX1dBTExQQVBFUl9VUkwgOiB2YWx1ZTtcblx0XHRcdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKGZhbGxiYWNrKTtcblx0XHRcdFx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIoZmFsbGJhY2ssIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWRiQ2xlYXJXYWxscGFwZXIoKTtcblx0Y2xlYXJDYWNoZWRVc2VyV2FsbHBhcGVyKCk7XG5cdHJldm9rZUxpdmVPYmplY3RVcmwoKTtcblx0aWYgKCF3cml0ZVN0b3JhZ2VQb2ludGVyKHZhbHVlKSkgY29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBwb2ludGVyIHdyaXRlIGZhaWxlZFwiKTtcblx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHZhbHVlKTtcblx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIodmFsdWUsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0Z2xvYmFsVGhpcy5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwiY3dzcC13YWxscGFwZXItY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0XHRwb2ludGVyOiB2YWx1ZSxcblx0XHRcdHVybDogdmFsdWVcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxufTtcbnZhciBibG9iSW1hZ2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmJsb2JcIik7XG5nbG9iYWxUaGlzW2Jsb2JJbWFnZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJsb2JJbWFnZU1hcCA9IGdsb2JhbFRoaXNbYmxvYkltYWdlU3ltYm9sXTtcbnZhciBkZWxheWVkU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5kZWxheWVkXCIpO1xuZ2xvYmFsVGhpc1tkZWxheWVkU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoW10pO1xudmFyIGRlbGF5ZWQgPSBnbG9iYWxUaGlzW2RlbGF5ZWRTeW1ib2xdO1xudmFyIHNjaGVkdWxlclN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuc2NoZWR1bGVyXCIpO1xuZ2xvYmFsVGhpc1tzY2hlZHVsZXJTeW1ib2xdID8/PSBtYWtlUkFGQ3ljbGUoKTtcbnZhciBzY2hlZHVsZXJSZiA9IGdsb2JhbFRoaXNbc2NoZWR1bGVyU3ltYm9sXTtcbnZhciBmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmZhaWxlZFdhbGxwYXBlclNyY1wiKTtcbmdsb2JhbFRoaXNbZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBmYWlsZWRXYWxscGFwZXJTcmMgPSBnbG9iYWxUaGlzW2ZhaWxlZFdhbGxwYXBlclNyY1N5bWJvbF07XG52YXIgcHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmRhdGFzZXQ/LmN3c3BTa3UgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9jZXNzXCIpIHJldHVybiB0cnVlO1xuXHRcdGNvbnN0IGhvc3QgPSBTdHJpbmcoZ2xvYmFsVGhpcy5sb2NhdGlvbj8uaG9zdG5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gaG9zdCA9PT0gXCJwcm9jZXNzLnUycmUuc3BhY2VcIiB8fCBob3N0ID09PSBcIndvcmtjZW50ZXIudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwiYWkudTJyZS5zcGFjZVwiO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVtZW1iZXJNaXNzaW5nRGVmYXVsdFdhbGxwYXBlciA9ICgpID0+IHtcblx0aWYgKHByb2Nlc3NIb3N0U2tpcHNCdW5kbGVkV2FsbHBhcGVyKCkpIGZhaWxlZFdhbGxwYXBlclNyYy5hZGQoREVGQVVMVF9XQUxMUEFQRVJfVVJMKTtcbn07XG52YXIgZ2V0SW1nV2lkdGggPSAoaW1nKSA9PiB7XG5cdHJldHVybiBpbWc/Lm5hdHVyYWxXaWR0aCB8fCBpbWc/LndpZHRoIHx8IDE7XG59O1xudmFyIGdldEltZ0hlaWdodCA9IChpbWcpID0+IHtcblx0cmV0dXJuIGltZz8ubmF0dXJhbEhlaWdodCB8fCBpbWc/LmhlaWdodCB8fCAxO1xufTtcbmZ1bmN0aW9uIGdldEN1cnJlbnREaXNwbGF5Q29sb3JTcGFjZSgpIHtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKGNvbG9yLWdhbXV0OiByZWMyMDIwKVwiKS5tYXRjaGVzKSByZXR1cm4gXCJyZWMyMDIwXCI7XG5cdGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKGNvbG9yLWdhbXV0OiBwMylcIikubWF0Y2hlcykgcmV0dXJuIFwiZGlzcGxheS1wM1wiO1xuXHRlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihjb2xvci1nYW11dDogc3JnYilcIikubWF0Y2hlcykgcmV0dXJuIFwic3JnYlwiO1xuXHRyZXR1cm4gXCJzcmdiXCI7XG59XG52YXIgY3JlYXRlMmRDb250ZXh0ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBiYXNlID0ge1xuXHRcdGFscGhhOiB0cnVlLFxuXHRcdGRlc3luY2hyb25pemVkOiB0cnVlLFxuXHRcdHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdGNvbG9yU3BhY2U6IGdldEN1cnJlbnREaXNwbGF5Q29sb3JTcGFjZSgpIHx8IFwiZGlzcGxheS1wM1wiLFxuXHRcdGNvbG9yVHlwZTogXCJmbG9hdDE2XCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDE2XCJcblx0fTtcblx0dHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcE5hdGl2ZVNoZWxsO1xuXHR0cnkge1xuXHRcdHJldHVybiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIGJhc2UpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0fVxufTtcbnZhciBIQUxGX1BJID0gMS41NzA3OTYzMjY3OTQ4OTY2O1xudmFyIGNhbGxCeUZyYW1lID0gKHBvaW50ZXJJZCwgY2IpID0+IHtcblx0ZGVsYXllZC5zZXQocG9pbnRlcklkLCBjYik7XG59O1xudmFyIGNvdmVyID0gKGN0eCwgaW1nLCBzY2FsZSA9IDEsIHBvcnQsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3QgY2FudmFzID0gY3R4LmNhbnZhcztcblx0Y3R4LnRyYW5zbGF0ZShNYXRoLnJvdW5kKGNhbnZhcy53aWR0aCAvIDIpLCBNYXRoLnJvdW5kKGNhbnZhcy5oZWlnaHQgLyAyKSk7XG5cdGN0eC5yb3RhdGUoTWF0aC5yb3VuZCgoLW9yaWVudCB8fCAwKSArICgxIC0gcG9ydCkpICogSEFMRl9QSSk7XG5cdGN0eC50cmFuc2xhdGUoTWF0aC5yb3VuZCgtKGdldEltZ1dpZHRoKGltZykgLyAyKSAqIHNjYWxlKSwgTWF0aC5yb3VuZCgtKGdldEltZ0hlaWdodChpbWcpIC8gMikgKiBzY2FsZSkpO1xufTtcbnZhciBpc0RlY29kYWJsZVNvdXJjZSA9IChibG9iKSA9PiB7XG5cdGlmICghYmxvYikgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJiBibG9iIGluc3RhbmNlb2YgQmxvYikgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgRmlsZSA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBGaWxlKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgPT09IFwiZnVuY3Rpb25cIiAmJiBibG9iIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiBJbWFnZUJpdG1hcCA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCkgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgSW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBibG9iIGluc3RhbmNlb2YgSW1hZ2UpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gdHlwZW9mIGJsb2IgPT09IFwib2JqZWN0XCI7XG59O1xudmFyIGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUgPSAoYmxvYikgPT4ge1xuXHRpZiAoIWJsb2JJbWFnZU1hcC5oYXMoYmxvYikgJiYgaXNEZWNvZGFibGVTb3VyY2UoYmxvYikpIHtcblx0XHRjb25zdCBlZGdlID0gKCgpID0+IHtcblx0XHRcdGNvbnN0IGRwciA9IE1hdGgubWluKGdsb2JhbFRoaXMuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcblx0XHRcdGNvbnN0IGNzcyA9IE1hdGgubWF4KGdsb2JhbFRoaXMuc2NyZWVuPy53aWR0aCB8fCAwLCBnbG9iYWxUaGlzLnNjcmVlbj8uaGVpZ2h0IHx8IDAsIDgwMCk7XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1heCgxNiwgY3NzICogZHByKSk7XG5cdFx0fSkoKTtcblx0XHRjb25zdCBwZW5kaW5nID0gKGFzeW5jICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBCbG9iICYmIGJsb2Iuc2l6ZSA+IDE4ZTQpIHRyeSB7XG5cdFx0XHRcdHJldHVybiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iLCB7XG5cdFx0XHRcdFx0cmVzaXplV2lkdGg6IGVkZ2UsXG5cdFx0XHRcdFx0cmVzaXplUXVhbGl0eTogXCJoaWdoXCJcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRyZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYik7XG5cdFx0fSkoKS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRibG9iSW1hZ2VNYXAuZGVsZXRlKGJsb2IpO1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH0pO1xuXHRcdGJsb2JJbWFnZU1hcC5zZXQoYmxvYiwgcGVuZGluZyk7XG5cdH1cblx0cmV0dXJuIGJsb2JJbWFnZU1hcC5nZXQoYmxvYik7XG59O1xudmFyIGJpbmRDYWNoZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmluZENhY2hlXCIpO1xuZ2xvYmFsVGhpc1tiaW5kQ2FjaGVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQ2FjaGUgPSBnbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF07XG52YXIgYmluZENhY2hlZCA9IChjYiwgY3R4KSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGJpbmRDYWNoZS5nZXQoY3R4KTtcblx0aWYgKHR5cGVvZiBjYWNoZWQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGNhY2hlZDtcblx0Y29uc3QgYm91bmQgPSBjYi5iaW5kKGN0eCk7XG5cdGJpbmRDYWNoZS5zZXQoY3R4LCBib3VuZCk7XG5cdHJldHVybiBib3VuZDtcbn07XG52YXIgcmFmWWllbGQgPSAoKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLnJhY2UoW3NjaGVkdWxlcj8ueWllbGQoKSwgbmV3IFByb21pc2UoKHJ2KSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnYpKV0pO1xufTtcbnZhciBVSUNhbnZhcyA9IG51bGw7XG5pZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9IFwidW5kZWZpbmVkXCIpIFVJQ2FudmFzID0gY2xhc3MgVUlDYW52YXMgZXh0ZW5kcyBIVE1MQ2FudmFzRWxlbWVudCB7XG5cdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXG5cdFx0XCJkYXRhLXNyY1wiLFxuXHRcdFwiZGF0YS1vcmllbnRcIixcblx0XHRcIm9yaWVudFwiLFxuXHRcdFwic2NhbGVcIixcblx0XHRcInBvc2l0aW9uLXhcIixcblx0XHRcInBvc2l0aW9uLXlcIlxuXHRdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG5cdCNzaXplID0gWzEsIDFdO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdGdldCAjb3JpZW50KCkge1xuXHRcdGNvbnN0IHJhdyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPz8gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgPz8gXCIwXCI7XG5cdFx0Y29uc3QgbiA9IE51bWJlci5wYXJzZUludChyYXcsIDEwKSB8fCBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdH1cblx0c2V0ICNvcmllbnQodmFsdWUpIHtcblx0XHRjb25zdCBzID0gU3RyaW5nKHZhbHVlID8/IGN1cnJlbnRPcmllbnROdW1iZXIoKSk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBzKTtcblx0fVxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT09IFwiZGF0YS1zcmNcIikge1xuXHRcdFx0dGhpcy4jcHJlbG9hZChuZXdWYWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdH1cblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cdCNpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy4jb3JpZW50ID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIGdsb2JhbFRoaXM/LnNjcmVlbj8uYXZhaWxXaWR0aCB8fCBzY3JlZW4/LndpZHRoKSB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIGdsb2JhbFRoaXM/LnNjcmVlbj8uYXZhaWxIZWlnaHQgfHwgc2NyZWVuPy5oZWlnaHQpIHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHR9O1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdFx0XHRpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwidS1jYW52YXNcIikpIHRoaXMuY2xhc3NMaXN0LmFkZChcInUtY2FudmFzXCIpO1xuXHRcdFx0aWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcInUyLWNhbnZhc1wiKSkgdGhpcy5jbGFzc0xpc3QuYWRkKFwidTItY2FudmFzXCIpO1xuXHRcdFx0aWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcInVpLWNhbnZhc1wiKSkgdGhpcy5jbGFzc0xpc3QuYWRkKFwidWktY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImlubGluZS1zaXplXCIsIFwibWluKDEwMGNxaSwgMTAwZHZpKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJibG9jay1zaXplXCIsIFwibWluKDEwMGNxYiwgMTAwZHZiKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMGNxYiwgMTAwZHZiKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkeW5hbWljLXJhbmdlLWxpbWl0XCIsIFwibm8tbGltaXRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3Itc3BhY2VcIiwgZ2V0Q3VycmVudERpc3BsYXlDb2xvclNwYWNlKCkgfHwgXCJkaXNwbGF5LXAzXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMVwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJhdXRvXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImZpbHRlclwiLCBcIm5vbmVcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2Ryb3AtZmlsdGVyXCIsIFwibm9uZVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtaXgtYmxlbmQtbW9kZVwiLCBcIm5vcm1hbFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWJsZW5kLW1vZGVcIiwgXCJub3JtYWxcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiaXNvbGF0aW9uXCIsIFwiaXNvbGF0ZVwiKTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLiNvcmllbnQgPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XG5cdFx0XHRyYWZZaWVsZD8uKCk/LnRoZW4/LigoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuXHRcdFx0XHRmaXhTaXplKCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIGdsb2JhbFRoaXM/LnNjcmVlbj8uYXZhaWxXaWR0aCB8fCBzY3JlZW4/LndpZHRoKSB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIGdsb2JhbFRoaXM/LnNjcmVlbj8uYXZhaWxIZWlnaHQgfHwgc2NyZWVuPy5oZWlnaHQpIHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdFx0dGhpcy5jdHggPSBjcmVhdGUyZENvbnRleHQoY2FudmFzKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY3R4Py5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHRcdGNhbnZhcz8uY29uZmlndXJlSGlnaER5bmFtaWNSYW5nZT8uKHsgbW9kZTogXCJleHRlbmRlZFwiIH0pO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Zml4U2l6ZSgpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBib3ggPSBlbnRyeT8uZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZT8uWzBdID8/IGVudHJ5Py5jb250ZW50Qm94U2l6ZT8uWzBdO1xuXHRcdFx0XHRcdFx0aWYgKGJveCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkcHIgPSBlbnRyeT8uZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZT8uWzBdID8gMSA6IGRldmljZVBpeGVsUmF0aW8gfHwgMTtcblx0XHRcdFx0XHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1heChib3guaW5saW5lU2l6ZSAqIGRwciB8fCB0aGlzLndpZHRoLCAxKSwgTWF0aC5tYXgoYm94LmJsb2NrU2l6ZSAqIGRwciB8fCB0aGlzLmhlaWdodCwgMSldO1xuXHRcdFx0XHRcdFx0XHR0aGlzLiNvcmllbnQgPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0XHRcdFx0XHRcdGlmIChvbGQ/LlswXSAhPSB0aGlzLiNzaXplWzBdIHx8IG9sZD8uWzFdICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5vYnNlcnZlKHRoaXMsIHsgYm94OiBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiIH0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIlt1aS1jYW52YXNdIFJlc2l6ZU9ic2VydmVyIHVuYXZhaWxhYmxlOlwiLCBlcnIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4jaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLiNwcmVsb2FkKHRoaXMuI2xvYWRpbmcgPSB0aGlzLmRhdGFzZXQuc3JjIHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdHRoaXMuI29yaWVudCA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRpZiAodGhpcy5pbWFnZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRhZG9wdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy4jaW5pdGlhbGl6ZSgpO1xuXHRcdGlmICh0aGlzLmltYWdlKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkgfHwgdGhpcy4jbG9hZGluZyk7XG5cdH1cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy4jaW5pdGlhbGl6ZSgpO1xuXHRcdGlmICh0aGlzLmltYWdlKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkgfHwgdGhpcy4jbG9hZGluZyk7XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXHRhc3luYyAkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJlYWR5IHx8PSB0aGlzLiNsb2FkaW5nO1xuXHRcdGNvbnN0IGltZyA9IHR5cGVvZiBJbWFnZUJpdG1hcCA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCA/IGJsb2IgOiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlKGJsb2IpLmNhdGNoKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHRpZiAoaW1nICYmIHJlYWR5ID09IHRoaXMuI2xvYWRpbmcpIHtcblx0XHRcdHRoaXMuaW1hZ2UgPSBpbWc7XG5cdFx0XHR0aGlzLiNyZW5kZXIocmVhZHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gYmxvYjtcblx0fVxuXHQkcmVuZGVyUGFzcyh3aGF0SXNSZWFkeSkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMsIGN0eCA9IHRoaXMuY3R4LCBpbWcgPSB0aGlzLmltYWdlO1xuXHRcdGlmIChpbWcgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSBudWxsIHx8IHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgd2hhdElzUmVhZHkgPT0gdGhpcy4jcmVhZHkpKSB7XG5cdFx0XHRpZiAod2hhdElzUmVhZHkpIHRoaXMuI3JlYWR5ID0gd2hhdElzUmVhZHk7XG5cdFx0XHRpZiAodGhpcy53aWR0aCAhPSB0aGlzLiNzaXplWzBdKSB0aGlzLndpZHRoID0gdGhpcy4jc2l6ZVswXTtcblx0XHRcdGlmICh0aGlzLmhlaWdodCAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLmhlaWdodCA9IHRoaXMuI3NpemVbMV07XG5cdFx0XHR0aGlzLnN0eWxlLmFzcGVjdFJhdGlvID0gYCR7dGhpcy53aWR0aCB8fCAxfSAvICR7dGhpcy5oZWlnaHQgfHwgMX1gO1xuXHRcdFx0KCh0aGlzLiNvcmllbnQgPz8gY3VycmVudE9yaWVudE51bWJlcigpKSB8fCAwKSAlIDI7XG5cdFx0XHRjb25zdCBpbWdXaWR0aCA9IGdldEltZ1dpZHRoKGltZyk7XG5cdFx0XHRjb25zdCBpbWdIZWlnaHQgPSBnZXRJbWdIZWlnaHQoaW1nKTtcblx0XHRcdGNvbnN0IHR1cm5zID0gTWF0aC5yb3VuZCgxIC0gKGltZ1dpZHRoIDw9IGltZ0hlaWdodCA/IDEgOiAwKSAtICh0aGlzLiNvcmllbnQgPz8gY3VycmVudE9yaWVudE51bWJlcigpKSk7XG5cdFx0XHRjb25zdCBzd2Fwc0F4ZXMgPSBNYXRoLmFicyh0dXJucyAlIDIpID09PSAxO1xuXHRcdFx0Y29uc3Qgcm90YXRlZFdpZHRoID0gc3dhcHNBeGVzID8gaW1nSGVpZ2h0IDogaW1nV2lkdGg7XG5cdFx0XHRjb25zdCByb3RhdGVkSGVpZ2h0ID0gc3dhcHNBeGVzID8gaW1nV2lkdGggOiBpbWdIZWlnaHQ7XG5cdFx0XHRjb25zdCBjb3ZlclNjYWxlID0gTWF0aC5tYXgoY2FudmFzLndpZHRoIC8gcm90YXRlZFdpZHRoLCBjYW52YXMuaGVpZ2h0IC8gcm90YXRlZEhlaWdodCk7XG5cdFx0XHRjb25zdCBsYXlvdXRBdHRyID0gKG5hbWUpID0+IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpID8/IGRlZmF1bHRXYWxscGFwZXJMYXlvdXRBdHRyc1tuYW1lXTtcblx0XHRcdGNvbnN0IHNjYWxlID0gY292ZXJTY2FsZSAqIG5vcm1hbGl6ZVdhbGxwYXBlclNjYWxlKGxheW91dEF0dHIoXCJzY2FsZVwiKSk7XG5cdFx0XHRjb25zdCBkcmF3V2lkdGggPSBpbWdXaWR0aCAqIHNjYWxlO1xuXHRcdFx0Y29uc3QgZHJhd0hlaWdodCA9IGltZ0hlaWdodCAqIHNjYWxlO1xuXHRcdFx0aWYgKCFOdW1iZXIuaXNGaW5pdGUoZHJhd1dpZHRoKSB8fCAhTnVtYmVyLmlzRmluaXRlKGRyYXdIZWlnaHQpKSByZXR1cm47XG5cdFx0XHRjb25zdCBib3VuZHNXaWR0aCA9IHN3YXBzQXhlcyA/IGRyYXdIZWlnaHQgOiBkcmF3V2lkdGg7XG5cdFx0XHRjb25zdCBib3VuZHNIZWlnaHQgPSBzd2Fwc0F4ZXMgPyBkcmF3V2lkdGggOiBkcmF3SGVpZ2h0O1xuXHRcdFx0Y29uc3QgeCA9IHdhbGxwYXBlclBvc2l0aW9uUmF0aW8obGF5b3V0QXR0cihcInBvc2l0aW9uLXhcIikpO1xuXHRcdFx0Y29uc3QgeSA9IHdhbGxwYXBlclBvc2l0aW9uUmF0aW8obGF5b3V0QXR0cihcInBvc2l0aW9uLXlcIikpO1xuXHRcdFx0Y29uc3QgbGVmdCA9IChjYW52YXMud2lkdGggLSBib3VuZHNXaWR0aCkgKiB4O1xuXHRcdFx0Y29uc3QgdG9wID0gKGNhbnZhcy5oZWlnaHQgLSBib3VuZHNIZWlnaHQpICogeTtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0XHRcdGN0eC50cmFuc2xhdGUobGVmdCArIGJvdW5kc1dpZHRoIC8gMiwgdG9wICsgYm91bmRzSGVpZ2h0IC8gMik7XG5cdFx0XHRcdGN0eC5yb3RhdGUodHVybnMgKiBIQUxGX1BJKTtcblx0XHRcdFx0Y3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGN0eC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBcImhpZ2hcIjtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIC1kcmF3V2lkdGggLyAyLCAtZHJhd0hlaWdodCAvIDIsIGRyYXdXaWR0aCwgZHJhd0hlaWdodCk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQjcHJlbG9hZChzcmMpIHtcblx0XHRjb25zdCByZWFkeSA9IHNyYyB8fCB0aGlzLiNsb2FkaW5nO1xuXHRcdHRoaXMuI2xvYWRpbmcgPSByZWFkeTtcblx0XHRpZiAoIXJlYWR5IHx8IHR5cGVvZiByZWFkeSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmIChmYWlsZWRXYWxscGFwZXJTcmMuaGFzKHJlYWR5KSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmIChyZWFkeS5zdGFydHNXaXRoKFwiZGF0YTpcIikgJiYgIS9eZGF0YTppbWFnZVxcLy9pLnRlc3QocmVhZHkpKSB7XG5cdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHdhcm1lZEJsb2JGb3IocmVhZHkpLnRoZW4oKGJsb2IpID0+IHtcblx0XHRcdGlmIChibG9iICYmIHJlYWR5ID09PSB0aGlzLiNsb2FkaW5nKSByZXR1cm4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGZldGNoKHJlYWR5LCB7XG5cdFx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiXG5cdFx0XHR9KT8udGhlbj8uKGFzeW5jIChyc3ApID0+IHtcblx0XHRcdFx0aWYgKCFyc3Aub2spIHtcblx0XHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0XHRcdGlmICghYmxvYj8uc2l6ZSB8fCBibG9iLnR5cGUgJiYgIWJsb2IudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG5cdFx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLiR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KT8uY2F0Y2g/LigoKSA9PiB7XG5cdFx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjdHggPSB0aGlzLmN0eDtcblx0XHRpZiAodGhpcy5pbWFnZSAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IG51bGwgfHwgd2hhdElzUmVhZHkgPT0gdGhpcy4jbG9hZGluZyB8fCB3aGF0SXNSZWFkeSA9PSB0aGlzLiNyZWFkeSkpIHJhZllpZWxkPy4oKT8udGhlbj8uKCgpID0+IGJpbmRDYWNoZWQodGhpcy4kcmVuZGVyUGFzcywgdGhpcykod2hhdElzUmVhZHkpKTtcblx0fVxufTtcbmVsc2UgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge31cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHt9XG5cdCR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHt9XG5cdCNvcmllbnQgPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdCNsb2FkaW5nID0gXCJcIjtcblx0I3JlYWR5ID0gXCJcIjtcblx0I3NpemUgPSBbMSwgMV07XG5cdGN0eCA9IG51bGw7XG5cdGltYWdlID0gbnVsbDtcbn07XG50cnkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ1aS1jYW52YXNcIiwgVUlDYW52YXMsIHsgZXh0ZW5kczogXCJjYW52YXNcIiB9KTtcbn0gY2F0Y2ggKGUpIHt9XG5cbmV4cG9ydCB7IFVJQ2FudmFzLCBVU0VSX1dBTExQQVBFUl9DQUNIRSwgVVNFUl9XQUxMUEFQRVJfUEFUSCwgV0FMTFBBUEVSX0lEQl9NQVJLRVIsIFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVksIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyLCBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEsIGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMsIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcywgYmluZENhY2hlLCBibG9iSW1hZ2VNYXAsIGNhbGxCeUZyYW1lLCBjb3ZlciwgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSwgZGVsYXllZCwgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSwgZWxlY3Ryb25BUEksIGZhaWxlZFdhbGxwYXBlclNyYywgZ2V0QXBwV2FsbHBhcGVyTGF5b3V0LCBnZXREb21pbmFudENvbG9ycywgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIsIGluaXRpYWxpemVBcHBDYW52YXNMYXllciwgbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lLCBxdWFsaXR5TW9kZSwgcmFua1dhbGxwYXBlclNlZWRzLCByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQsIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSwgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCwgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUsIHNjaGVkdWxlclJmLCBzZXRBcHBXYWxscGFwZXIsIHNldEFwcFdhbGxwYXBlckZyb21CbG9iLCBzZXRBcHBXYWxscGFwZXJMYXlvdXQsIHN5bmNBcHBXYWxscGFwZXJPcmllbnQsIHN5bmNDYW52YXNPcmllbnQsIHN5bmNXYWxscGFwZXJMYXlvdXRBdHRycywgdGhlbWVIb3N0cywgd2FybUFwcFdhbGxwYXBlciB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsS0FBQUEsVUFBUztBQUNsQixTQUFTLG9CQUFBQyxTQUF3QjtBQUNqQyxTQUFTLHlCQUFBQyxJQUF1QixnQkFBQUMsSUFBYyx3QkFBQUMsSUFBc0Isd0JBQUFDLFVBQTRCO0FBR2hHLElBQUlDLEtBQWMsa0JBQ2RDLEtBQWMsRUFBRSxNQUFRO0FBQUEsRUFDM0IsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUNYLEVBQUUsR0FHRUMsS0FBYyxDQUFDQyxHQUFPQyxNQUFRO0FBQ2pDLE1BQUksT0FBT0QsS0FBVSxVQUNyQjtBQUFBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxJQUFJLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDMUMsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLElBQVEsT0FBTztBQUFBLE1BQ3JDLElBQUlBLElBQVEsS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxJQUN0QztBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDM0MsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDMUMsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLElBQVEsT0FBTztBQUFBLE1BQ3JDLFFBQVFBLElBQVEsS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxJQUMxQztBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQ3hCLElBQUlBLElBQVEsT0FBTztBQUFBLElBQ3BCO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUN4QixRQUFRQSxJQUFRLE9BQU87QUFBQSxJQUN4QjtBQUFBO0FBQ0QsR0FHSUUsS0FBUTtBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsc0JBQXNCO0FBQUEsRUFDdEIsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1Isa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztB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QUFrQnRPLEdBQU1zTyxDQUFLLEdBQUcsUUFBUSxNQUFNO0FBQ3pELFFBQUF2RSxFQUFtQixJQUFJdUUsQ0FBSztBQUFBLE1BQzdCLENBQUM7QUFBQSxJQUNGLENBQUMsR0FBRyxRQUFRLE1BQU07QUFDakIsTUFBQXZFLEVBQW1CLElBQUl1RSxDQUFLO0FBQUEsSUFDN0IsQ0FBQyxDQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0FULEdBQVFVLEdBQWE7QUFDcEIsVUFBTXBPLElBQU0sS0FBSztBQUNqQixJQUFJLEtBQUssU0FBU0EsTUFBUW9PLEtBQWUsUUFBUUEsS0FBZSxLQUFLaEIsTUFBWWdCLEtBQWUsS0FBS2YsT0FBU0wsS0FBVyxHQUFHLE9BQU8sTUFBTUYsR0FBVyxLQUFLLGFBQWEsSUFBSSxFQUFFc0IsQ0FBVyxDQUFDO0FBQUEsRUFDekw7QUFDRCxJQUNLbEIsS0FBVyxNQUFlO0FBQUEsRUFDOUIsY0FBYztBQUFBLEVBQUM7QUFBQSxFQUNmLFlBQVlrQixHQUFhO0FBQUEsRUFBQztBQUFBLEVBQzFCLGtCQUFrQnZPLEdBQU1zTyxHQUFPO0FBQzlCLFdBQU90TztBQUFBLEVBQ1I7QUFBQSxFQUNBNE4sR0FBUzNKLEdBQUs7QUFDYixXQUFPLFFBQVEsUUFBUTtBQUFBLEVBQ3hCO0FBQUEsRUFDQTRKLEdBQVFVLEdBQWE7QUFBQSxFQUFDO0FBQUEsRUFDdEJkLEtBQVVqSCxFQUFvQjtBQUFBLEVBQzlCK0csS0FBVztBQUFBLEVBQ1hDLEtBQVM7QUFBQSxFQUNURixLQUFRLENBQUMsR0FBRyxDQUFDO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ1Q7QUFDQSxJQUFJO0FBQ0gsaUJBQWUsT0FBTyxhQUFhRCxJQUFVLEVBQUUsU0FBUyxTQUFTLENBQUM7QUFDbkUsUUFBWTtBQUFDOyIsCiAgIm5hbWVzIjogWyJRIiwgInNldFN0eWxlUHJvcGVydHkiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm1ha2VSQUZDeWNsZSIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJlbGVjdHJvbkFQSSIsICJxdWFsaXR5TW9kZSIsICJwYXJzZU51bWJlciIsICJjb2xvciIsICJsZW4iLCAibmFtZWQiLCAicGFyc2VOYW1lZCIsICJoZXgiLCAicGFyc2VIZXgiLCAibWF0Y2giLCAibnVtJDEiLCAicGVyIiwgIm51bV9wZXIiLCAibnVtX3Blcl9ub25lIiwgImh1ZSQxIiwgImMiLCAicnhfbnVtX3Blcl9ub25lIiwgInJnYl9udW1fb2xkIiwgInJnYl9wZXJfb2xkIiwgInBhcnNlUmdiTGVnYWN5IiwgInJlcyIsICJwcmVwYXJlIiwgIm1vZGUiLCAicGFyc2UiLCAiY29udmVydGVyIiwgInRhcmdldF9tb2RlIiwgImNvbnZlcnRlcnMiLCAibW9kZXMiLCAicGFyc2VycyIsICJjb2xvclByb2ZpbGVzIiwgImlkZW50aXR5IiwgInYiLCAidXNlTW9kZSIsICJkZWZpbml0aW9uIiwgImsiLCAiY2hhbm5lbCIsICJwYXJzZXIiLCAidXNlUGFyc2VyIiwgImdldE1vZGUiLCAiSWRlbnRTdGFydENvZGVQb2ludCIsICJJZGVudENvZGVQb2ludCIsICJUb2siLCAiX2kiLCAiaXNfbnVtIiwgImNoYXJzIiwgImNoIiwgImNoMSIsICJpc19pZGVudCIsICJodWVuaXRzIiwgIm51bSIsICJ2YWx1ZSIsICJkaWdpdHMiLCAiaWQiLCAiaWRlbnQiLCAiaWRlbnRsaWtlIiwgInRva2VuaXplIiwgInN0ciIsICJ0b2tlbnMiLCAiYWxwaGEiLCAicGFyc2VDb2xvclN5bnRheCIsICJ0b2tlbiIsICJjb29yZHMiLCAiY29uc3VtZUNvb3JkcyIsICJjaGFubmVscyIsICJpaSIsICJpbmNsdWRlSHVlIiwgInBhcnNlTW9kZXJuU3ludGF4IiwgInBhcnNlZCIsICJyZXN1bHQiLCAicGFyc2VSZ2IiLCAiciIsICJnIiwgImIiLCAicGFyc2VUcmFuc3BhcmVudCIsICJsZXJwIiwgImEiLCAidCIsICJnZXRfY2xhc3NlcyIsICJhcnIiLCAiY2xhc3NlcyIsICJpIiwgImludGVycG9sYXRvclBpZWNld2lzZSIsICJpbnRlcnBvbGF0b3IiLCAiY2xzIiwgImlkeCIsICJwYWlyIiwgImludGVycG9sYXRvckxpbmVhciIsICJmaXh1cEFscGhhIiwgInNvbWVfZGVmaW5lZCIsICJkZWZpbml0aW9uJDI3IiwgImxpbmVhcml6ZSQyIiwgImNvbnZlcnRBOThUb1h5ejY1IiwgImE5OCIsICJnYW1tYSQyIiwgImNvbnZlcnRYeXo2NVRvQTk4IiwgIngiLCAieSIsICJ6IiwgImZuJDMiLCAiYWJzIiwgImNvbnZlcnRSZ2JUb0xyZ2IiLCAiY29udmVydFJnYlRvWHl6NjUiLCAicmdiIiwgImZuJDIiLCAiY29udmVydExyZ2JUb1JnYiIsICJjb252ZXJ0WHl6NjVUb1JnYiIsICJkZWZpbml0aW9uJDI2IiwgIm5vcm1hbGl6ZUh1ZSIsICJodWUiLCAiaHVlcyIsICJmbiIsICJub3JtYWxpemVkIiwgImFjYyIsICJjdXJyIiwgImZpeHVwSHVlU2hvcnRlciIsICJkIiwgIk0iLCAiZGVnVG9SYWQiLCAicmFkVG9EZWciLCAiREUiLCAiQkUiLCAiQkNBRCIsICJjb252ZXJ0UmdiVG9DdWJlaGVsaXgiLCAibCIsICJjb252ZXJ0Q3ViZWhlbGl4VG9SZ2IiLCAiaCIsICJzIiwgImFtcCIsICJjb3NoIiwgInNpbmgiLCAiZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24iLCAic3RkIiwgInNtcCIsICJzdGRfaCIsICJzbXBfaCIsICJkSCIsICJkaWZmZXJlbmNlSHVlTmFpdmUiLCAiZGlmZmVyZW5jZUh1ZUNocm9tYSIsICJhdmVyYWdlQW5nbGUiLCAidmFsIiwgInN1bSIsICJyYWQiLCAiYW5nbGUiLCAiZGVmaW5pdGlvbiQyNSIsICJjb252ZXJ0TGFiVG9MY2giLCAiY29udmVydExjaFRvTGFiIiwgImskMiIsICJlJDIiLCAiRDUwIiwgIkQ2NSIsICJrJDEiLCAiZSQxIiwgImZuJDEiLCAiY29udmVydExhYjY1VG9YeXo2NSIsICJmeSIsICJmeCIsICJmeiIsICJjb252ZXJ0TGFiNjVUb1JnYiIsICJsYWIiLCAiZiQxIiwgImNvbnZlcnRYeXo2NVRvTGFiNjUiLCAiZjAiLCAiZjEiLCAiZjIiLCAiY29udmVydFJnYlRvTGFiNjUiLCAizrgiLCAiY29zzrgiLCAic2luzrgiLCAiZmFjdG9yIiwgImNvbnZlcnREbGNoVG9MYWI2NSIsICJHIiwgImUiLCAiZiIsICJjb252ZXJ0TGFiNjVUb0RsY2giLCAiY29udmVydERsYWJUb0xhYjY1IiwgImNvbnZlcnRMYWI2NVRvRGxhYiIsICJkZWZpbml0aW9uJDI0IiwgImRlZmluaXRpb24kMjMiLCAiY29udmVydEhzaVRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzaSIsICJtIiwgImRlZmluaXRpb24kMjIiLCAiY29udmVydEhzbFRvUmdiIiwgIm0xIiwgIm0yIiwgImNvbnZlcnRSZ2JUb0hzbCIsICJodWVUb0RlZyIsICJ1bml0IiwgImhzbF9vbGQiLCAicGFyc2VIc2xMZWdhY3kiLCAicGFyc2VIc2wiLCAiZGVmaW5pdGlvbiQyMSIsICJjb252ZXJ0SHN2VG9SZ2IiLCAiY29udmVydFJnYlRvSHN2IiwgImRlZmluaXRpb24kMjAiLCAiY29udmVydEh3YlRvUmdiIiwgInciLCAiY29udmVydFJnYlRvSHdiIiwgInJnYmEiLCAiaHN2IiwgIlBhcnNlSHdiIiwgImRlZmluaXRpb24kMTkiLCAiTTEiLCAiTTIiLCAiQzEiLCAiQzIiLCAiQzMiLCAidHJhbnNmZXJQcURlY29kZSIsICJ0cmFuc2ZlclBxRW5jb2RlIiwgInRvUmVsIiwgImNvbnZlcnRJdHBUb1h5ejY1IiwgInAiLCAidG9BYnMiLCAiY29udmVydFh5ejY1VG9JdHAiLCAiYWJzWCIsICJhYnNZIiwgImFic1oiLCAiZGVmaW5pdGlvbiQxOCIsICJwJDEiLCAiZDAkMSIsICJqYWJQcUVuY29kZSIsICJ2biIsICJjb252ZXJ0WHl6NjVUb0phYiIsICJ4cCIsICJ5cCIsICJkMCIsICJqYWJQcURlY29kZSIsICJ2cCIsICJyZWwiLCAiY29udmVydEphYlRvWHl6NjUiLCAiaiIsICJjb252ZXJ0UmdiVG9KYWIiLCAiY29udmVydEphYlRvUmdiIiwgImRlZmluaXRpb24kMTciLCAiY29udmVydEphYlRvSmNoIiwgImNvbnZlcnRKY2hUb0phYiIsICJkZWZpbml0aW9uJDE2IiwgImNvbnZlcnRMYWJUb1h5ejUwIiwgImNvbnZlcnRYeXo1MFRvUmdiIiwgImNvbnZlcnRMYWJUb1JnYiIsICJjb252ZXJ0UmdiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb0xhYiIsICJjb252ZXJ0UmdiVG9MYWIiLCAicGFyc2VMYWIiLCAiZGVmaW5pdGlvbiQxNSIsICJkZWZpbml0aW9uJDE0IiwgInBhcnNlTGNoIiwgImRlZmluaXRpb24kMTMiLCAiZGVmaW5pdGlvbiQxMiIsICJjb252ZXJ0THV2VG9MY2h1diIsICJ1IiwgImNvbnZlcnRMY2h1dlRvTHV2IiwgInVfZm4kMSIsICJ2X2ZuJDEiLCAidW4kMSIsICJ2biQxIiwgImxfZm4iLCAiY29udmVydFh5ejUwVG9MdXYiLCAidV9mbiIsICJ2X2ZuIiwgInVuIiwgImNvbnZlcnRMdXZUb1h5ejUwIiwgInVwIiwgImNvbnZlcnRSZ2JUb0xjaHV2IiwgImNvbnZlcnRMY2h1dlRvUmdiIiwgImxjaHV2IiwgImRlZmluaXRpb24kMTEiLCAiZGVmaW5pdGlvbiQxMCIsICJkZWZpbml0aW9uJDkiLCAibHV2IiwgImNvbnZlcnRMcmdiVG9Pa2xhYiIsICJMIiwgIlMiLCAiY29udmVydFJnYlRvT2tsYWIiLCAiY29udmVydE9rbGFiVG9McmdiIiwgImNvbnZlcnRPa2xhYlRvUmdiIiwgInRvZSIsICJrXzMiLCAidG9lX2ludiIsICJjb21wdXRlX21heF9zYXR1cmF0aW9uIiwgImswIiwgImsxIiwgImsyIiwgImszIiwgIms0IiwgIndsIiwgIndtIiwgIndzIiwgImtfbCIsICJrX20iLCAia19zIiwgImxfIiwgIm1fIiwgInNfIiwgImxfZFMiLCAibV9kUyIsICJzX2RTIiwgImxfZFMyIiwgIm1fZFMyIiwgInNfZFMyIiwgImZpbmRfY3VzcCIsICJTX2N1c3AiLCAiTF9jdXNwIiwgImZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uIiwgIkwxIiwgIkwwIiwgImN1c3AiLCAiZEwiLCAiZEMiLCAibF9kdCIsICJtX2R0IiwgInNfZHQiLCAiQyIsICJsZHQiLCAibWR0IiwgInNkdCIsICJsZHQyIiwgIm1kdDIiLCAic2R0MiIsICJyMSIsICJyMiIsICJ1X3IiLCAidF9yIiwgImcxIiwgImcyIiwgInVfZyIsICJ0X2ciLCAiYjEiLCAiYjIiLCAidV9iIiwgInRfYiIsICJnZXRfU1RfbWF4IiwgImFfIiwgImJfIiwgImdldF9DcyIsICJDX21heCIsICJTVF9tYXgiLCAiU19taWQiLCAiVF9taWQiLCAiQ19hIiwgIkNfYiIsICJDX21pZCIsICJjb252ZXJ0T2tsYWJUb09raHNsIiwgInJldCIsICJDXzAiLCAia18wIiwgImtfMSIsICJrXzIiLCAiY29udmVydE9raHNsVG9Pa2xhYiIsICJoc2wiLCAibW9kZU9raHNsIiwgImNvbnZlcnRPa2xhYlRvT2toc3YiLCAiU19tYXgiLCAiVCIsICJTXzAiLCAiTF92IiwgIkNfdiIsICJMX3Z0IiwgIkNfdnQiLCAicmdiX3NjYWxlIiwgInNjYWxlX0wiLCAiY29udmVydE9raHN2VG9Pa2xhYiIsICJMX25ldyIsICJtb2RlT2toc3YiLCAicGFyc2VPa2xhYiIsICJkZWZpbml0aW9uJDgiLCAicGFyc2VPa2xjaCIsICJkZWZpbml0aW9uJDciLCAiY29udmVydFAzVG9YeXo2NSIsICJjb252ZXJ0WHl6NjVUb1AzIiwgImRlZmluaXRpb24kNiIsICJnYW1tYSQxIiwgImNvbnZlcnRYeXo1MFRvUHJvcGhvdG8iLCAibGluZWFyaXplJDEiLCAiY29udmVydFByb3Bob3RvVG9YeXo1MCIsICJwcm9waG90byIsICJkZWZpbml0aW9uJDUiLCAizrEkMSIsICLOsiQxIiwgImdhbW1hIiwgImNvbnZlcnRYeXo2NVRvUmVjMjAyMCIsICLOsSIsICLOsiIsICJsaW5lYXJpemUiLCAiY29udmVydFJlYzIwMjBUb1h5ejY1IiwgInJlYzIwMjAiLCAiZGVmaW5pdGlvbiQ0IiwgImJpYXMiLCAiYmlhc19jYnJ0IiwgInRyYW5zZmVyJDEiLCAiY29udmVydFJnYlRvWHliIiwgInRyYW5zZmVyIiwgImNvbnZlcnRYeWJUb1JnYiIsICJkZWZpbml0aW9uJDMiLCAiZGVmaW5pdGlvbiQyIiwgImNvbnZlcnRYeXo2NVRvWHl6NTAiLCAieHl6NjUiLCAiY29udmVydFh5ejUwVG9YeXo2NSIsICJ4eXo1MCIsICJkZWZpbml0aW9uJDEiLCAiY29udmVydFJnYlRvWWlxIiwgImNvbnZlcnRZaXFUb1JnYiIsICJxIiwgInByZWNpc2lvbiIsICJyb3VuZCIsICJ0d29EZWNpbWFscyIsICJjbGFtcCQxIiwgImZpeHVwIiwgInJnYiQxIiwgImhzbCQxIiwgInNlcmlhbGl6ZUhleCIsICJmb3JtYXRIZXgiLCAiY3ViZWhlbGl4IiwgImRsYWIiLCAiZGxjaCIsICJoc2kiLCAiaHdiIiwgIml0cCIsICJqYWIiLCAiamNoIiwgImxhYjY1IiwgImxjaCIsICJsY2g2NSIsICJscmdiIiwgIm9raHNsIiwgIm9raHN2IiwgIm9rbGFiIiwgIm9rbGNoIiwgInAzIiwgInh5YiIsICJ5aXEiLCAic29ydENvbG9ycyIsICJsaXN0IiwgImNyaXRlcmlhIiwgImV1Y2xpZGVhbkRpc3RhbmNlIiwgImNvbG9yMSIsICJjb2xvcjIiLCAibWFrZUNsdXN0ZXJzIiwgImRhdGEiLCAiY2VudHJvaWRzIiwgImNsdXN0ZXJzIiwgInBvaW50IiwgIm1pbkRpc3RhbmNlIiwgIm1pbkRpc3RhbmNlQ2x1c3RlckluZGV4IiwgImNlbnRyb2lkIiwgImluZGV4IiwgImRpc3RhbmNlIiwgImNvbXB1dGVNZWFuIiwgInBvaW50cyIsICJrTWVhbnMiLCAiaW5pdGlhbGl6ZUNlbnRyb2lkcyIsICJtYXhJdGVyYXRpb25zIiwgIml0ZXJhdGlvbiIsICJuZXdDZW50cm9pZHMiLCAiY2x1c3RlciIsICJuZXdDZW50cm9pZCIsICJkaXN0YW5jZXMiLCAidG90YWxEaXN0YW5jZSIsICJwcm9iYWJpbGl0aWVzIiwgImN1bXVsYXRpdmVQcm9iYWJpbGl0eSIsICJyYW5kb21WYWx1ZSIsICJwcmVCbHVyUGl4ZWxzIiwgImltZ1VSTCIsICJibG9iIiwgImJpdG1hcCIsICJvZmZzZXQiLCAiY3R4IiwgImdldENsdXN0ZXJJbWFnZURhdGEiLCAiYWxsQ291bnQiLCAiZHYiLCAiZnAzMiIsICJpNCIsICJnZXREb21pbmFudENvbG9ycyIsICJXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSIsICJUSEVNRV9TVE9SQUdFX0tFWSIsICJQUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9VUkxfS0VZIiwgIlBBUEVSX0xfU1BMSVQiLCAiUEFQRVJfQ0hST01BX0NBUCIsICJGQUxMQkFDS19QQVBFUiIsICJsYXN0TGl2ZVBhcGVyIiwgIlVTQUJMRV9MVU1BX01JTiIsICJTRUVEX1BST1BTIiwgImNsYW1wIiwgIm4iLCAibG8iLCAiaGkiLCAiaGV4T2tsY2giLCAiZmFsbGJhY2siLCAicmdiVG9TYW1wbGUiLCAib2siLCAicGFwZXJMRnJvbUhleCIsICJoYWxvRm9yUGFwZXIiLCAiZGFya1BhcGVyIiwgImlzVXNhYmxlUGFwZXJMdW1hIiwgImx1bWEiLCAiZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tU2FtcGxlcyIsICJzYW1wbGVzIiwgInBpeGVsTHVtYSIsICJscyIsICJtZWFuTCIsICJtZWRpYW5MIiwgInBhcGVyTCIsICJwYXBlciIsICJwYXBlckMiLCAic2FtcGxlSW1hZ2VNZWFuTHVtYSIsICJjYW52YXMiLCAiZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSIsICJoYXNXYWxscGFwZXJQYXBlciIsICJzZWVkcyIsICJyYW5rV2FsbHBhcGVyU2VlZHMiLCAiYWNjZW50UG9vbCIsICJwb29sIiwgInByaW1hcnkiLCAiaHVlRGlzdCIsICJwaWNrTmV4dCIsICJ1c2VkIiwgInJlc3QiLCAiYmFzZSIsICJudWRnZWQiLCAic2Vjb25kYXJ5IiwgInRlcnRpYXJ5IiwgInRoZW1lSG9zdHMiLCAibm9kZXMiLCAiZWwiLCAid2FsbHBhcGVyU2VlZHNNYXlQYWludCIsICJzcmMiLCAiaXNWYWxpZENvbG9yIiwgImFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMiLCAiZXh0cmFIb3N0cyIsICJzaGFkb3ciLCAiZ2xvdyIsICJob3N0cyIsICJyZWdpc3RlckNvbG9yUHJvcGVydHkiLCAiaG9zdCIsICJnbG9iYWxRdWVyeSIsICJuYW1lIiwgImluaXRpYWxWYWx1ZSIsICJwZXJzaXN0TGl2ZVBhcGVyIiwgImNhY2hlZCIsICJsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUiLCAiYXBwbHlXYWxscGFwZXJQYXBlckZyb21MdW1hIiwgImFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyIsICJuZXh0IiwgInByb3AiLCAia2V5IiwgInJhdyIsICJhcHBseVRoZW1lRnJvbVdhbGxwYXBlciIsICJvcHRzIiwgInNyY0tleSIsICJza3UiLCAibGl2ZUx1bWEiLCAiZXJyIiwgInJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlIiwgIldBTExQQVBFUl9TVE9SQUdFX0tFWSIsICJERUZBVUxUX1dBTExQQVBFUl9VUkwiLCAiVVNFUl9XQUxMUEFQRVJfUEFUSCIsICJVU0VSX1dBTExQQVBFUl9DQUNIRSIsICJXQUxMUEFQRVJfSURCX01BUktFUiIsICJJREJfTkFNRSIsICJJREJfU1RPUkUiLCAiSURCX0tFWSIsICJMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMiLCAibGl2ZU9iamVjdFVybCIsICJ3YWxscGFwZXJFcG9jaCIsICJjdXJyZW50T3JpZW50TnVtYmVyIiwgImlzSWRiUG9pbnRlciIsICJwb2ludGVyIiwgImlzVW51c2FibGVTdG9yZWRVcmwiLCAicmV2b2tlTGl2ZU9iamVjdFVybCIsICJhZG9wdFdhbGxwYXBlckJsb2IiLCAiZXBvY2giLCAib3BlbldhbGxwYXBlckRiIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInJlcSIsICJkYiIsICJpZGJQdXRXYWxscGFwZXIiLCAidHgiLCAiaWRiR2V0V2FsbHBhcGVyIiwgImNhY2hlVXNlcldhbGxwYXBlciIsICJjYWNoZSIsICJ0eXBlIiwgImNsZWFyQ2FjaGVkVXNlcldhbGxwYXBlciIsICJpZGJDbGVhcldhbGxwYXBlciIsICJyZWFkU3RvcmFnZVBvaW50ZXIiLCAid3JpdGVTdG9yYWdlUG9pbnRlciIsICJyZXN0b3JlV2FsbHBhcGVyQmxvYlVybCIsICJpc0lubGluZVBheWxvYWQiLCAidXJsIiwgInJlc29sdmVBcHBXYWxscGFwZXJVcmwiLCAicHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIiLCAid2FybVByb21pc2UiLCAid2FybUFwcFdhbGxwYXBlciIsICJyc3AiLCAid2FybWVkQmxvYkZvciIsICJ3YXJtIiwgImdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyIiwgInN5bmNDYW52YXNPcmllbnQiLCAiYXBwbHkiLCAic3luY0FwcFdhbGxwYXBlck9yaWVudCIsICJyZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQiLCAicGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzIiwgInN5bmNHbG93VG9UaGVtZSIsICJwYWludFVybCIsICJjYW52YXNlcyIsICJvcmllbnQiLCAiZGF0YVVybFRvQmxvYiIsICJkYXRhVXJsIiwgInNldEFwcFdhbGxwYXBlckZyb21CbG9iIiwgInNldEFwcFdhbGxwYXBlciIsICJyZWFkZXIiLCAiaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyIiwgImNvbnRhaW5lciIsICJyb290IiwgImdldEN1cnJlbnREaXNwbGF5Q29sb3JTcGFjZSIsICJwb3N0ZXIiLCAicmVtZW1iZXJNaXNzaW5nRGVmYXVsdFdhbGxwYXBlciIsICJjb2xkVXJsIiwgIndhcm1pbmciLCAiZmFpbGVkV2FsbHBhcGVyU3JjIiwgImRpc3Bvc2VPcmllbnQiLCAiYXBwbHlXYWxscGFwZXJMYXlvdXQiLCAiZ2V0QXBwV2FsbHBhcGVyTGF5b3V0IiwgIndhbGxwYXBlciIsICJ0aGVtZVNyYyIsICJleHRyYWN0IiwgInJpYyIsICJXQUxMUEFQRVJfTEFZT1VUX0tFWSIsICJBUFBfV0FMTFBBUEVSX0NBTlZBU19TRUxFQ1RPUiIsICJub3JtYWxpemVXYWxscGFwZXJTY2FsZSIsICJub3JtYWxpemVXYWxscGFwZXJQb3NpdGlvbiIsICJwZXJjZW50IiwgIndhbGxwYXBlclBvc2l0aW9uUmF0aW8iLCAicG9zaXRpb24iLCAibm9ybWFsaXplV2FsbHBhcGVyTGF5b3V0IiwgImxheW91dCIsICJzZXNzaW9uV2FsbHBhcGVyTGF5b3V0IiwgImRlZmF1bHRXYWxscGFwZXJMYXlvdXRBdHRycyIsICJyZWFkU3RvcmVkV2FsbHBhcGVyTGF5b3V0IiwgInN5bmNXYWxscGFwZXJMYXlvdXRBdHRycyIsICJzZXRBcHBXYWxscGFwZXJMYXlvdXQiLCAicGF0Y2giLCAid2FsbHBhcGVyVXJsIiwgImJsb2JJbWFnZVN5bWJvbCIsICJibG9iSW1hZ2VNYXAiLCAiZGVsYXllZFN5bWJvbCIsICJkZWxheWVkIiwgInNjaGVkdWxlclN5bWJvbCIsICJzY2hlZHVsZXJSZiIsICJmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2wiLCAiZ2V0SW1nV2lkdGgiLCAiaW1nIiwgImdldEltZ0hlaWdodCIsICJjcmVhdGUyZENvbnRleHQiLCAiSEFMRl9QSSIsICJjYWxsQnlGcmFtZSIsICJwb2ludGVySWQiLCAiY2IiLCAiY292ZXIiLCAic2NhbGUiLCAicG9ydCIsICJpc0RlY29kYWJsZVNvdXJjZSIsICJjcmVhdGVJbWFnZUJpdG1hcENhY2hlIiwgImVkZ2UiLCAiZHByIiwgImNzcyIsICJwZW5kaW5nIiwgImJpbmRDYWNoZVN5bWJvbCIsICJiaW5kQ2FjaGUiLCAiYmluZENhY2hlZCIsICJib3VuZCIsICJyYWZZaWVsZCIsICJydiIsICJVSUNhbnZhcyIsICIjc2l6ZSIsICIjbG9hZGluZyIsICIjcmVhZHkiLCAiI29yaWVudCIsICJvbGRWYWx1ZSIsICJuZXdWYWx1ZSIsICIjcHJlbG9hZCIsICIjcmVuZGVyIiwgIiNpbml0aWFsaXplZCIsICIjaW5pdGlhbGl6ZSIsICJwYXJlbnQiLCAiZml4U2l6ZSIsICJvbGQiLCAiZW50cmllcyIsICJlbnRyeSIsICJib3giLCAicmVhZHkiLCAid2hhdElzUmVhZHkiLCAiaW1nV2lkdGgiLCAiaW1nSGVpZ2h0IiwgInR1cm5zIiwgInN3YXBzQXhlcyIsICJyb3RhdGVkV2lkdGgiLCAicm90YXRlZEhlaWdodCIsICJjb3ZlclNjYWxlIiwgImxheW91dEF0dHIiLCAiZHJhd1dpZHRoIiwgImRyYXdIZWlnaHQiLCAiYm91bmRzV2lkdGgiLCAiYm91bmRzSGVpZ2h0IiwgImxlZnQiLCAidG9wIl0KfQo=
