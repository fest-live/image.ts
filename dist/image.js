import { Q as Er } from "@fest-lib/lure";
import { setStyleProperty as E } from "@fest-lib/style-lib";
import { getCorrectOrientation as Aa, makeRAFCycle as Ca, orientationNumberMap as Ea, whenAnyScreenChanges as Ia } from "@fest-lib/dom";
var ko = "electronBridge", Po = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, Ir = (e, t) => {
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
}, Na = {
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
}, Wa = (e) => Ir(Na[e.toLowerCase()], 6), La = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Ra = (e) => {
  let t;
  return (t = e.match(La)) ? Ir(parseInt(t[1], 16), t[1].length) : void 0;
}, W = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", ce = `${W}%`, Et = `(?:${W}%|${W})`, Ha = `(?:${W}%|${W}|none)`, qa = `(?:${W}(deg|grad|rad|turn)|${W})`, G = "\\s*,\\s*", _o = new RegExp("^" + Ha + "$"), Oa = new RegExp(`^rgba?\\(\\s*${W}${G}${W}${G}${W}\\s*(?:,\\s*${Et}\\s*)?\\)$`), Ba = new RegExp(`^rgba?\\(\\s*${ce}${G}${ce}${G}${ce}\\s*(?:,\\s*${Et}\\s*)?\\)$`), Da = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(Oa))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(Ba))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, Fa = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Rr(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, It = (e = "rgb") => (t) => (t = Fa(t, e)) !== void 0 ? t.mode === e ? t : I[t.mode][e] ? I[t.mode][e](t) : e === "rgb" ? I[t.mode].rgb(t) : I.rgb[e](I[t.mode].rgb(t)) : void 0, I = {}, Nr = {}, ye = [], Wr = {}, Xa = (e) => e, g = (e) => (I[e.mode] = {
  ...I[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  I[t] || (I[t] = {}), I[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Xa);
}), Nr[e.mode] = e, (e.parse || []).forEach((t) => {
  Ya(t, e.mode);
}), It(e.mode)), ja = (e) => Nr[e], Ya = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    Wr[e] = t;
  } else typeof e == "function" && ye.indexOf(e) < 0 && ye.push(e);
}, bt = /[^\x00-\x7F]|[a-zA-Z_]/, Za = /[^\x00-\x7F]|[-\w]/, s = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, p = 0;
function fe(e) {
  let t = e[p], r = e[p + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[p + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function yt(e) {
  if (p >= e.length) return !1;
  let t = e[p];
  if (bt.test(t)) return !0;
  if (t === "-") {
    if (e.length - p < 2) return !1;
    let r = e[p + 1];
    return !!(r === "-" || bt.test(r));
  }
  return !1;
}
var Ja = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function le(e) {
  let t = "";
  if ((e[p] === "-" || e[p] === "+") && (t += e[p++]), t += me(e), e[p] === "." && /\d/.test(e[p + 1]) && (t += e[p++] + me(e)), (e[p] === "e" || e[p] === "E") && ((e[p + 1] === "-" || e[p + 1] === "+") && /\d/.test(e[p + 2]) ? t += e[p++] + e[p++] + me(e) : /\d/.test(e[p + 1]) && (t += e[p++] + me(e))), yt(e)) {
    let r = Me(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * Ja[r]
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
function me(e) {
  let t = "";
  for (; /\d/.test(e[p]); ) t += e[p++];
  return t;
}
function Me(e) {
  let t = "";
  for (; p < e.length && Za.test(e[p]); ) t += e[p++];
  return t;
}
function Ka(e) {
  let t = Me(e);
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
function Ga(e = "") {
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
      if (p--, fe(t)) {
        r.push(le(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (p--, fe(t)) {
        r.push(le(t));
        continue;
      }
      if (yt(t)) {
        r.push({
          type: s.Ident,
          value: Me(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (p--, fe(t)) {
        r.push(le(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; p < t.length && (t[p] === `
` || t[p] === "	" || t[p] === " "); ) p++;
      let i;
      if (fe(t) && (i = le(t), i.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: i
        });
        continue;
      }
      if (yt(t) && Me(t) === "none") {
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
    if (bt.test(a)) {
      p--, r.push(Ka(t));
      continue;
    }
    return;
  }
  return r;
}
function Ua(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = Wr[t.value];
  if (!r) return;
  const a = { mode: r }, i = Lr(e, !1);
  if (!i) return;
  const n = ja(r).channels;
  for (let o = 0, l, c; o < n.length; o++)
    l = i[o], c = n[o], l.type !== s.None && (a[c] = l.type === s.Number ? l.value : l.value / 100, c === "alpha" && (a[c] = Math.max(0, Math.min(1, a[c]))));
  return a;
}
function Lr(e, t) {
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
function Qa(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = Lr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var Rr = (e) => {
  if (typeof e != "string") return;
  const t = Ga(e), r = t ? Qa(t, !0) : void 0;
  let a, i = 0, n = ye.length;
  for (; i < n; ) if ((a = ye[i++](e, r)) !== void 0) return a;
  return t ? Ua(t) : void 0;
};
function Va(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value / 255 : n.value / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var ei = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, ti = (e, t, r) => e + r * (t - e), ri = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, ai = (e) => (t) => {
  let r = ri(t);
  return (a) => {
    let i = a * r.length, n = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), o = r[n];
    return o === void 0 ? void 0 : e(o[0], o[1], i - n);
  };
}, u = ai(ti), x = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, U = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    Va,
    Ra,
    Da,
    Wa,
    ei,
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
}, Ke = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), ar = (e) => {
  let t = Ke(e.r), r = Ke(e.g), a = Ke(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ge = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), ir = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: Ge(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Ge(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Ge(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Ue = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, Q = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: Ue(e),
    g: Ue(t),
    b: Ue(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, X = (e) => {
  let { r: t, g: r, b: a, alpha: i } = Q(e), n = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Qe = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, V = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let n = {
    mode: i,
    r: Qe(e),
    g: Qe(t),
    b: Qe(r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, j = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = V({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, ii = {
  ...U,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => ir(X(e)),
    xyz65: ir
  },
  toMode: {
    rgb: (e) => j(ar(e)),
    xyz65: ar
  }
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, ni = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let n = _(r);
  return a === 0 || e[a - 1] === void 0 ? n : t(n - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), L = (e) => ni(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), P = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], oi = Math.PI / 180, li = 180 / Math.PI, nr = P[3] * P[4], or = P[1] * P[4], lr = P[1] * P[2] - P[0] * P[3], si = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (lr * r + e * nr - t * or) / (lr + nr - or), n = r - i, o = (P[4] * (t - i) - P[2] * n) / P[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(n * n + o * o) / (P[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(o, n) * li - 120), a !== void 0 && (l.alpha = a), l;
}, ci = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * oi, r === void 0 && (r = 0);
  let n = t === void 0 ? 0 : t * r * (1 - r), o = Math.cos(e), l = Math.sin(e);
  return i.r = r + n * (P[0] * o + P[1] * l), i.g = r + n * (P[2] * o + P[3] * l), i.b = r + n * (P[4] * o + P[5] * l), a !== void 0 && (i.alpha = a), i;
}, Ae = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, hi = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, Ce = (e, t) => {
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
}, ui = {
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
  fromMode: { rgb: si },
  toMode: { rgb: ci },
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
  difference: { h: Ae },
  average: { h: R }
}, H = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.sqrt(t * t + r * r), o = {
    mode: i,
    l: e,
    c: n
  };
  return n && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, q = ({ l: e, c: t, h: r, alpha: a }, i = "lab") => {
  r === void 0 && (r = 0);
  let n = {
    mode: i,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (n.alpha = a), n;
}, Hr = Math.pow(29, 3) / Math.pow(3, 3), qr = Math.pow(6, 3) / Math.pow(29, 3), w = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, J = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, So = Math.pow(29, 3) / Math.pow(3, 3), zo = Math.pow(6, 3) / Math.pow(29, 3), Ve = (e) => Math.pow(e, 3) > qr ? Math.pow(e, 3) : (116 * e - 16) / Hr, Or = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, n = t / 500 + i, o = i - r / 200, l = {
    mode: "xyz65",
    x: Ve(n) * J.X,
    y: Ve(i) * J.Y,
    z: Ve(o) * J.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ee = (e) => j(Or(e)), et = (e) => e > qr ? Math.cbrt(e) : (Hr * e + 16) / 116, Br = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = et(e / J.X), n = et(t / J.Y), o = et(r / J.Z), l = {
    mode: "lab65",
    l: 116 * n - 16,
    a: 500 * (i - n),
    b: 200 * (n - o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ie = (e) => {
  let t = Br(X(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ue = 26 / 180 * Math.PI, we = Math.cos(ue), xe = Math.sin(ue), Dr = 100 / Math.log(139 / 100), Mt = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / Dr) - 1) / 39e-4
  }, n = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, o = n * Math.cos(r / 180 * Math.PI - ue), l = n * Math.sin(r / 180 * Math.PI - ue);
  return i.a = o * we - l / 0.83 * xe, i.b = o * xe + l / 0.83 * we, a !== void 0 && (i.alpha = a), i;
}, wt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * we + r * xe, n = 0.83 * (r * we - t * xe), o = Math.sqrt(i * i + n * n), l = {
    mode: "dlch",
    l: Dr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(n, i) + ue) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, sr = (e) => Mt(H(e, "dlch")), cr = (e) => q(wt(e), "dlab"), di = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: sr,
    rgb: (e) => Ee(sr(e))
  },
  fromMode: {
    lab65: cr,
    rgb: (e) => cr(Ie(e))
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
}, vi = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Mt,
    dlab: (e) => q(e, "dlab"),
    rgb: (e) => Ee(Mt(e))
  },
  fromMode: {
    lab65: wt,
    dlab: (e) => H(e, "dlch"),
    rgb: (e) => wt(Ie(e))
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
  difference: { h: Ce },
  average: { h: R }
};
function pi({ h: e, s: t, i: r, alpha: a }) {
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
function fi({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * n / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var mi = {
  mode: "hsi",
  toMode: { rgb: pi },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: fi },
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
  difference: { h: Ae },
  average: { h: R }
};
function gi({ h: e, s: t, l: r, alpha: a }) {
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
function bi({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsl",
    s: i === n ? 0 : (i - n) / (1 - Math.abs(i + n - 1)),
    l: 0.5 * (i + n)
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var yi = (e, t) => {
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
}, Mi = new RegExp(`^hsla?\\(\\s*${qa}${G}${ce}${G}${ce}\\s*(?:,\\s*${Et}\\s*)?\\)$`), wi = (e) => {
  let t = e.match(Mi);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = yi(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function xi(e, t) {
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
var Fr = {
  mode: "hsl",
  toMode: { rgb: gi },
  fromMode: { rgb: bi },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [xi, wi],
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
  difference: { h: Ae },
  average: { h: R }
};
function Xr({ h: e, s: t, v: r, alpha: a }) {
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
function jr({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - n / i,
    v: i
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var Yr = {
  mode: "hsv",
  toMode: { rgb: Xr },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: jr },
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
  difference: { h: Ae },
  average: { h: R }
};
function ki({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let i = t + r;
    t /= i, r /= i;
  }
  return Xr({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function Pi(e) {
  let t = jr(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function _i(e, t) {
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
var Si = {
  mode: "hwb",
  toMode: { rgb: ki },
  fromMode: { rgb: Pi },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [_i],
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
  difference: { h: hi },
  average: { h: R }
}, Ne = 0.1593017578125, Zr = 78.84375, We = 0.8359375, Le = 18.8515625, Re = 18.6875;
function tt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Zr);
  return 1e4 * Math.pow(Math.max(0, t - We) / (Le - Re * t), 1 / Ne);
}
function rt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Ne);
  return Math.pow((We + Le * t) / (1 + Re * t), Zr);
}
var at = (e) => Math.max(e / 203, 0), hr = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = tt(e + 0.008609037037932761 * t + 0.11102962500302593 * r), n = tt(e - 0.00860903703793275 * t - 0.11102962500302599 * r), o = tt(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: at(2.070152218389422 * i - 1.3263473389671556 * n + 0.2066510476294051 * o),
    y: at(0.3647385209748074 * i + 0.680566024947227 * n - 0.0453045459220346 * o),
    z: at(-0.049747207535812 * i - 0.0492609666966138 * n + 1.1880659249923042 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, it = (e = 0) => Math.max(e * 203, 0), ur = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = it(e), n = it(t), o = it(r), l = rt(0.3592832590121217 * i + 0.6976051147779502 * n - 0.0358915932320289 * o), c = rt(-0.1920808463704995 * i + 1.1004767970374323 * n + 0.0753748658519118 * o), h = rt(0.0070797844607477 * i + 0.0748396662186366 * n + 0.8433265453898765 * o), v = {
    mode: "itp",
    i: 0.5 * l + 0.5 * c,
    t: 1.61376953125 * l - 3.323486328125 * c + 1.709716796875 * h,
    p: 4.378173828125 * l - 4.24560546875 * c - 0.132568359375 * h
  };
  return a !== void 0 && (v.alpha = a), v;
}, zi = {
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
    xyz65: hr,
    rgb: (e) => j(hr(e))
  },
  fromMode: {
    xyz65: ur,
    rgb: (e) => ur(X(e))
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
}, Ti = 134.03437499999998, $i = 16295499532821565e-27, nt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Ne);
  return Math.pow((We + Le * t) / (1 + Re * t), Ti);
}, ot = (e = 0) => Math.max(e * 203, 0), Jr = ({ x: e, y: t, z: r, alpha: a }) => {
  e = ot(e), t = ot(t), r = ot(r);
  let i = 1.15 * e - 0.15 * r, n = 0.66 * t + 0.34 * e, o = nt(0.41478972 * i + 0.579999 * n + 0.014648 * r), l = nt(-0.20151 * i + 1.120649 * n + 0.0531008 * r), c = nt(-0.0166008 * i + 0.2648 * n + 0.6684799 * r), h = (o + l) / 2, v = {
    mode: "jab",
    j: 0.44 * h / (1 - 0.56 * h) - $i,
    a: 3.524 * o - 4.066708 * l + 0.542708 * c,
    b: 0.199076 * o + 1.096799 * l - 1.295875 * c
  };
  return a !== void 0 && (v.alpha = a), v;
}, Ai = 134.03437499999998, dr = 16295499532821565e-27, lt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Ai);
  return 1e4 * Math.pow((We - t) / (Re * t - Le), 1 / Ne);
}, st = (e) => e / 203, Kr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + dr) / (0.44 + 0.56 * (e + dr)), n = lt(i + 0.13860504 * t + 0.058047316 * r), o = lt(i - 0.13860504 * t - 0.058047316 * r), l = lt(i - 0.096019242 * t - 0.8118919 * r), c = {
    mode: "xyz65",
    x: st(1.661373024652174 * n - 0.914523081304348 * o + 0.23136208173913045 * l),
    y: st(-0.3250758611844533 * n + 1.571847026732543 * o - 0.21825383453227928 * l),
    z: st(-0.090982811 * n - 0.31272829 * o + 1.5227666 * l)
  };
  return a !== void 0 && (c.alpha = a), c;
}, Gr = (e) => {
  let t = Jr(X(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ur = (e) => j(Kr(e)), Ci = {
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
    rgb: Gr,
    xyz65: Jr
  },
  toMode: {
    rgb: Ur,
    xyz65: Kr
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
}, vr = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), n = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, pr = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Ei = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: pr,
    rgb: (e) => Ur(pr(e))
  },
  fromMode: {
    rgb: (e) => vr(Gr(e)),
    jab: vr
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
  difference: { h: Ce },
  average: { h: R }
}, He = Math.pow(29, 3) / Math.pow(3, 3), Nt = Math.pow(6, 3) / Math.pow(29, 3), ct = (e) => Math.pow(e, 3) > Nt ? Math.pow(e, 3) : (116 * e - 16) / He, Wt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, n = t / 500 + i, o = i - r / 200, l = {
    mode: "xyz50",
    x: ct(n) * w.X,
    y: ct(i) * w.Y,
    z: ct(o) * w.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, de = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = V({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Qr = (e) => de(Wt(e)), ve = (e) => {
  let { r: t, g: r, b: a, alpha: i } = Q(e), n = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, ht = (e) => e > Nt ? Math.cbrt(e) : (He * e + 16) / 116, Lt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = ht(e / w.X), n = ht(t / w.Y), o = ht(r / w.Z), l = {
    mode: "lab",
    l: 116 * n - 16,
    a: 500 * (i - n),
    b: 200 * (n - o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Vr = (e) => {
  let t = Lt(ve(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Ii(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 125 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Rt = {
  mode: "lab",
  toMode: {
    xyz50: Wt,
    rgb: Qr
  },
  fromMode: {
    xyz50: Lt,
    rgb: Vr
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
  parse: [Ii],
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
}, Ni = {
  ...Rt,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Or,
    rgb: Ee
  },
  fromMode: {
    xyz65: Br,
    rgb: Ie
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Wi(e, t) {
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
    lab: q,
    rgb: (e) => Qr(q(e))
  },
  fromMode: {
    rgb: (e) => H(Vr(e)),
    lab: H
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
  parse: [Wi],
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
  difference: { h: Ce },
  average: { h: R }
}, Li = {
  ...Ht,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => q(e, "lab65"),
    rgb: (e) => Ee(q(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => H(Ie(e), "lch65"),
    lab65: (e) => H(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, ea = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), n = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, ta = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, ra = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), aa = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Ri = ra(w.X, w.Y, w.Z), Hi = aa(w.X, w.Y, w.Z), qi = (e) => e <= Nt ? He * e : 116 * Math.cbrt(e) - 16, xt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = qi(t / w.Y), n = ra(e, t, r), o = aa(e, t, r);
  !isFinite(n) || !isFinite(o) ? i = n = o = 0 : (n = 13 * i * (n - Ri), o = 13 * i * (o - Hi));
  let l = {
    mode: "luv",
    l: i,
    u: n,
    v: o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Oi = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Bi = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Di = Oi(w.X, w.Y, w.Z), Fi = Bi(w.X, w.Y, w.Z), kt = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + Di, n = r / (13 * e) + Fi, o = w.Y * (e <= 8 ? e / He : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: o * (9 * i) / (4 * n),
    y: o,
    z: o * (12 - 3 * i - 20 * n) / (4 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Xi = (e) => ea(xt(ve(e))), ji = (e) => de(kt(ta(e))), Yi = {
  mode: "lchuv",
  toMode: {
    luv: ta,
    rgb: ji
  },
  fromMode: {
    rgb: Xi,
    luv: ea
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
  difference: { h: Ce },
  average: { h: R }
}, Zi = {
  ...U,
  mode: "lrgb",
  toMode: { rgb: V },
  fromMode: { rgb: Q },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Ji = {
  mode: "luv",
  toMode: {
    xyz50: kt,
    rgb: (e) => de(kt(e))
  },
  fromMode: {
    xyz50: xt,
    rgb: (e) => xt(ve(e))
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
}, ia = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), n = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * n - 0.0040720430116193 * o,
    a: 1.9779985324311684 * i - 2.42859224204858 * n + 0.450593709617411 * o,
    b: 0.0259040424655478 * i + 0.7827717124575296 * n - 0.8086757549230774 * o
  };
  return a !== void 0 && (l.alpha = a), l;
}, qe = (e) => {
  let t = ia(Q(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, pe = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), n = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * n + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * n - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * n + 1.7076146940746117 * o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Oe = (e) => V(pe(e));
function Pt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function ke(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function Ki(e, t) {
  let r, a, i, n, o, l, c, h;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, n = 0.75515197, o = 0.56771245, l = 4.0767416621, c = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, n = 0.1254107, o = 0.14503204, l = -1.2684380046, c = 2.6097574011, h = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, n = -0.50559606, o = 692167e-8, l = -0.0041960863, c = -0.7034186147, h = 1.707614701);
  let v = r + a * e + i * t + n * e * e + o * e * t, d = 0.3963377774 * e + 0.2158037573 * t, f = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t;
  {
    let b = 1 + v * d, y = 1 + v * f, M = 1 + v * m, S = b * b * b, k = y * y * y, A = M * M * M, ee = 3 * d * b * b, te = 3 * f * y * y, re = 3 * m * M * M, ae = 6 * d * d * b, ie = 6 * f * f * y, ne = 6 * m * m * M, Y = l * S + c * k + h * A, B = l * ee + c * te + h * re, oe = l * ae + c * ie + h * ne;
    v = v - Y * B / (B * B - 0.5 * Y * oe);
  }
  return v;
}
function qt(e, t) {
  let r = Ki(e, t), a = pe({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function Gi(e, t, r, a, i, n = null) {
  n || (n = qt(e, t));
  let o;
  if ((r - i) * n[1] - (n[0] - i) * a <= 0) o = n[1] * i / (a * n[0] + n[1] * (i - r));
  else {
    o = n[1] * (i - 1) / (a * (n[0] - 1) + n[1] * (i - r));
    {
      let l = r - i, c = a, h = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, d = -0.0894841775 * e - 1.291485548 * t, f = l + c * h, m = l + c * v, b = l + c * d;
      {
        let y = i * (1 - o) + o * r, M = o * a, S = y + M * h, k = y + M * v, A = y + M * d, ee = S * S * S, te = k * k * k, re = A * A * A, ae = 3 * f * S * S, ie = 3 * m * k * k, ne = 3 * b * A * A, Y = 6 * f * f * S, B = 6 * m * m * k, oe = 6 * b * b * A, Ut = 4.0767416621 * ee - 3.3077115913 * te + 0.2309699292 * re - 1, Fe = 4.0767416621 * ae - 3.3077115913 * ie + 0.2309699292 * ne, za = 4.0767416621 * Y - 3.3077115913 * B + 0.2309699292 * oe, Qt = Fe / (Fe * Fe - 0.5 * Ut * za), Xe = -Ut * Qt, Vt = -1.2684380046 * ee + 2.6097574011 * te - 0.3413193965 * re - 1, je = -1.2684380046 * ae + 2.6097574011 * ie - 0.3413193965 * ne, Ta = -1.2684380046 * Y + 2.6097574011 * B - 0.3413193965 * oe, er = je / (je * je - 0.5 * Vt * Ta), Ye = -Vt * er, tr = -0.0041960863 * ee - 0.7034186147 * te + 1.707614701 * re - 1, Ze = -0.0041960863 * ae - 0.7034186147 * ie + 1.707614701 * ne, $a = -0.0041960863 * Y - 0.7034186147 * B + 1.707614701 * oe, rr = Ze / (Ze * Ze - 0.5 * tr * $a), Je = -tr * rr;
        Xe = Qt >= 0 ? Xe : 1e6, Ye = er >= 0 ? Ye : 1e6, Je = rr >= 0 ? Je : 1e6, o += Math.min(Xe, Math.min(Ye, Je));
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
function na(e, t, r) {
  let a = qt(t, r), i = Gi(t, r, e, 1, e, a), n = Ot(t, r, a), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), c = i / Math.min(e * n[0], (1 - e) * n[1]), h = e * o, v = (1 - e) * l, d = 0.9 * c * Math.sqrt(Math.sqrt(1 / (1 / (h * h * h * h) + 1 / (v * v * v * v))));
  return h = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (h * h) + 1 / (v * v))),
    d,
    i
  ];
}
function fr(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: Pt(t)
  };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let n = Math.sqrt(r * r + a * a);
  if (!n)
    return i.s = 0, i;
  let [o, l, c] = na(t, r / n, a / n), h;
  if (n < l) {
    let v = 0, d = 0.8 * o, f = 1 - d / l;
    h = (n - v) / (d + f * (n - v)) * 0.8;
  } else {
    let v = l, d = 0.2 * l * l * 1.25 * 1.25 / o, f = 1 - d / (c - l);
    h = 0.8 + 0.2 * ((n - v) / (d + f * (n - v)));
  }
  return h && (i.s = h, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function mr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: ke(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let n = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [l, c, h] = na(i.l, n, o), v, d, f, m;
  r < 0.8 ? (v = 1.25 * r, d = 0, f = 0.8 * l, m = 1 - f / c) : (v = 5 * (r - 0.8), d = c, f = 0.2 * c * c * 1.25 * 1.25 / l, m = 1 - f / (h - c));
  let b = d + v * f / (1 - m * v);
  return i.a = b * n, i.b = b * o, i;
}
var Ui = {
  ...Fr,
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
    oklab: fr,
    rgb: (e) => fr(qe(e))
  },
  toMode: {
    oklab: mr,
    rgb: (e) => Oe(mr(e))
  }
};
function gr(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), n = i ? r / i : 1, o = i ? a / i : 1, [l, c] = Ot(n, o), h = 0.5, v = 1 - h / l, d = c / (i + t * c), f = d * t, m = d * i, b = ke(f), y = m * b / f, M = pe({
    l: b,
    a: n * y,
    b: o * y
  }), S = Math.cbrt(1 / Math.max(M.r, M.g, M.b, 0));
  t = t / S, i = i / S * Pt(t) / t, t = Pt(t);
  const k = {
    mode: "okhsv",
    s: i ? (h + c) * m / (c * h + c * v * m) : 0,
    v: t ? t / f : 0
  };
  return k.s && (k.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && (k.alpha = e.alpha), k;
}
function br(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, n = Math.cos(r / 180 * Math.PI), o = Math.sin(r / 180 * Math.PI), [l, c] = Ot(n, o), h = 0.5, v = 1 - h / l, d = 1 - a * h / (h + c - c * v * a), f = a * c * h / (h + c - c * v * a), m = ke(d), b = f * m / d, y = pe({
    l: m,
    a: n * b,
    b: o * b
  }), M = Math.cbrt(1 / Math.max(y.r, y.g, y.b, 0)), S = ke(i * d), k = f * S / d;
  return t.l = S * M, t.a = k * n * M, t.b = k * o * M, t;
}
var Qi = {
  ...Yr,
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
    oklab: gr,
    rgb: (e) => gr(qe(e))
  },
  toMode: {
    oklab: br,
    rgb: (e) => Oe(br(e))
  }
};
function Vi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 0.4 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var en = {
  ...Rt,
  mode: "oklab",
  toMode: {
    lrgb: pe,
    rgb: Oe
  },
  fromMode: {
    lrgb: ia,
    rgb: qe
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Vi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function tn(e, t) {
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
var rn = {
  ...Ht,
  mode: "oklch",
  toMode: {
    oklab: (e) => q(e, "oklab"),
    rgb: (e) => Oe(q(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => H(qe(e), "oklch"),
    oklab: (e) => H(e, "oklch")
  },
  parse: [tn],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, yr = (e) => {
  let { r: t, g: r, b: a, alpha: i } = Q(e), n = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Mr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = V({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (i.alpha = a), i;
}, an = {
  ...U,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Mr(X(e)),
    xyz65: Mr
  },
  toMode: {
    rgb: (e) => j(yr(e)),
    xyz65: yr
  }
}, ut = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, wr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: ut(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: ut(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: ut(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, dt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, xr = (e) => {
  let t = dt(e.r), r = dt(e.g), a = dt(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, nn = {
  ...U,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: wr,
    rgb: (e) => wr(ve(e))
  },
  toMode: {
    xyz50: xr,
    rgb: (e) => de(xr(e))
  }
}, on = 1.09929682680944, ln = 0.018053968510807, vt = (e) => {
  const t = Math.abs(e);
  return t > ln ? (Math.sign(e) || 1) * (on * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, kr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: vt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: vt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: vt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Pr = 1.09929682680944, sn = 0.018053968510807, pt = (e = 0) => {
  let t = Math.abs(e);
  return t < sn * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Pr - 1) / Pr, 1 / 0.45);
}, _r = (e) => {
  let t = pt(e.r), r = pt(e.g), a = pt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, cn = {
  ...U,
  mode: "rec2020",
  fromMode: {
    xyz65: kr,
    rgb: (e) => kr(X(e))
  },
  toMode: {
    xyz65: _r,
    rgb: (e) => j(_r(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, F = 0.0037930732552754493, oa = Math.cbrt(F), ft = (e) => Math.cbrt(e) - oa, hn = (e) => {
  const { r: t, g: r, b: a, alpha: i } = Q(e), n = ft(0.3 * t + 0.622 * r + 0.078 * a + F), o = ft(0.23 * t + 0.692 * r + 0.078 * a + F), l = ft(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + F), c = {
    mode: "xyb",
    x: (n - o) / 2,
    y: (n + o) / 2,
    b: l - (n + o) / 2
  };
  return i !== void 0 && (c.alpha = i), c;
}, mt = (e) => Math.pow(e + oa, 3), un = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = mt(e + t) - F, n = mt(t - e) - F, o = mt(r + t) - F, l = V({
    r: 11.031566904639861 * i - 9.866943908131562 * n - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * n - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * n + 1.9459282407775895 * o
  });
  return a !== void 0 && (l.alpha = a), l;
}, dn = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: un },
  fromMode: { rgb: hn },
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
}, vn = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: de,
    lab: Lt
  },
  fromMode: {
    rgb: ve,
    lab: Wt
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
}, pn = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let n = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, fn = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let n = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, mn = {
  mode: "xyz65",
  toMode: {
    rgb: j,
    xyz50: pn
  },
  fromMode: {
    rgb: X,
    xyz50: fn
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
}, gn = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, bn = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, yn = {
  mode: "yiq",
  toMode: { rgb: bn },
  fromMode: { rgb: gn },
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
}, Mn = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, wn = (e = 4) => (t) => typeof t == "number" ? Mn(t, e) : t, To = wn(2), xn = (e) => Math.max(0, Math.min(1, e || 0)), gt = (e) => Math.round(xn(e) * 255), kn = It("rgb"), $o = It("hsl"), Pn = (e) => {
  if (e === void 0) return;
  let t = gt(e.r), r = gt(e.g), a = gt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, Bt = (e) => Pn(kn(e)), Ao = g(ii), Co = g(ui), Eo = g(di), Io = g(vi), No = g(mi), Wo = g(Fr), Lo = g(Yr), Ro = g(Si), Ho = g(zi), qo = g(Ci), Oo = g(Ei), Bo = g(Rt), Do = g(Ni), Fo = g(Ht), Xo = g(Li), jo = g(Yi), Yo = g(Zi), Zo = g(Ji), Jo = g(Ui), Ko = g(Qi), Go = g(en), Pe = g(rn), Uo = g(an), Qo = g(nn), Vo = g(cn), el = g(U), tl = g(dn), rl = g(vn), al = g(mn), il = g(yn), la = (e, t = "l") => e.sort((r, a) => Math.sign(Pe({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - Pe({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Dt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), _n = (e, t) => {
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
}, Sn = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], zn = (e, t) => {
  let r = la(Tn(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const n = _n(e, r).map((o) => o.points.length > 0 ? Sn(o.points) : null);
    if (n.every((o, l) => o && Dt(o, r[l]) < 1e-3)) break;
    r = n;
  }
  return r;
}, Tn = (e, t) => {
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
}, $n = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((n) => n?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, An = async (e) => {
  const t = await $n(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
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
}, Cn = async (e) => {
  const t = await An(e);
  return la(zn(t, 4), "h");
}, En = "rs-wallpaper-theme", In = "rs-wallpaper-primary", Nn = "rs-wallpaper-theme-src", Ft = En, Wn = In, Sr = Nn, Xt = 0.52, Ln = 0.025, he = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, N = null, Rn = 0.03, Hn = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], qn = (e, t, r) => Math.min(r, Math.max(t, e)), zr = (e, t, r, a) => Bt({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || a, On = (e) => {
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
  const n = Pe({
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
}, Bn = (e) => Pe(e)?.l ?? 0.4, Dn = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, jt = (e) => Number.isFinite(e) && e >= Rn && e <= 1, Fn = (e, t) => {
  if (!e.length && t == null) return { ...he };
  const r = e.map((v) => v.l).sort((v, d) => v - d), a = e.length ? e.reduce((v, d) => v + d.l, 0) / e.length : t, i = r.length ? r[Math.floor(r.length / 2)] : a, n = qn(t != null && jt(t) ? t : Math.max(a, i), 0.08, 0.94), o = e.length ? [...e].sort((v, d) => v.c - d.c || Math.abs(v.l - n) - Math.abs(d.l - n))[0] : null, l = o ? Math.min(Ln, Math.max(0, o.c * 0.2)) : 0, c = o?.h || 0, h = n < Xt;
  return {
    underlying: zr(n, l, c, h ? he.underlying : "#e8e6e2"),
    contrast: zr(h ? 0.93 : 0.16, 8e-3, c, h ? he.contrast : "#141416")
  };
}, Xn = async (e) => {
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
      const f = l[d] / 255, m = l[d + 1] / 255, b = l[d + 2] / 255;
      c += 0.2126 * f + 0.7152 * m + 0.0722 * b, h++;
    }
    if (h < 8) return null;
    const v = c / h;
    return jt(v) ? v : null;
  } catch {
    return null;
  }
}, jn = (e) => e <= Xt ? { ...he } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, Yn = (e) => !!(e.underlying && e.contrast), Zn = (e, t) => {
  const r = e.map(On).filter(Boolean);
  if (!r.length) return null;
  const a = r.filter((d) => d.l >= 0.18 && d.l <= 0.88 && d.c >= 0.02).sort((d, f) => f.c - d.c || Math.abs(f.l - 0.55) - Math.abs(d.l - 0.55)), i = a.length ? a : [...r].sort((d, f) => f.c - d.c), n = i[0];
  if (!n) return null;
  const o = (d, f) => {
    const m = Math.abs(d - f) % 360;
    return m > 180 ? 360 - m : m;
  }, l = (d) => {
    const f = i.filter((m) => !d.includes(m));
    if (!f.length) {
      const m = d[d.length - 1] ?? n, b = Bt({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, m.l + (d.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, m.c * 0.85),
        h: m.h
      });
      return {
        ...m,
        hex: b || m.hex,
        l: m.l
      };
    }
    return [...f].sort((m, b) => Math.min(...d.map((y) => o(b.h, y.h))) - Math.min(...d.map((y) => o(m.h, y.h))) || b.c - m.c)[0] ?? f[0];
  }, c = l([n]), h = l([n, c]), v = Fn(r, t);
  return {
    primary: n.hex,
    secondary: c.hex,
    tertiary: h.hex,
    ...v
  };
}, sa = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, Jn = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, D = (e) => !!Rr(e), _t = (e, t = []) => {
  if (typeof document > "u") return;
  const r = Bn(e.underlying) < Xt, { shadow: a, glow: i } = Dn(r), n = new Set(sa());
  for (const l of t) n.add(l);
  if (!D(e.underlying) || !D(e.contrast) || !D(a) || !D(i)) return;
  se("--wallpaper-underlying-color", e.underlying), se("--wallpaper-contrast-color", e.contrast), se("--env-launcher-fg", e.contrast), se("--env-launcher-fg-shadow", a), se("--env-launcher-fg-glow", i);
  for (const l of n)
    E(l, "--wallpaper-underlying-color", e.underlying), E(l, "--wallpaper-contrast-color", e.contrast), E(l, "--env-launcher-fg", e.contrast), E(l, "--env-launcher-fg-shadow", a), E(l, "--env-launcher-fg-glow", i);
  const o = Er("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
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
}, Kn = (e) => {
  try {
    const t = _e();
    if (!t) return;
    localStorage.setItem(Ft, JSON.stringify({
      ...t,
      underlying: e.underlying,
      contrast: e.contrast
    }));
  } catch {
  }
}, Gn = (e, t = []) => {
  if (!jt(e))
    return N ? (_t(N, t), N) : { ...he };
  const r = jn(e);
  return N = r, _t(r, t), Kn(r), r;
}, be = (e) => {
  const t = N ? {
    ...e,
    ...N
  } : e;
  try {
    localStorage.setItem(Ft, JSON.stringify(t)), localStorage.setItem(Wn, t.primary);
  } catch {
  }
  if (Yn(t) && _t(t), !Jn()) return;
  for (const a of sa()) for (const [i, n] of Hn) E(a, i, t[n]);
  if (!D(t.primary) || !D(t.secondary) || !D(t.tertiary)) return;
  document.querySelectorAll("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((a) => {
    E(a, "--color-primary", t.primary), E(a, "--base-color", t.primary), E(a, "--color-secondary", t.secondary), E(a, "--color-tertiary", t.tertiary);
  });
  const r = Er("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  r.style.setProperty("--color-primary", t.primary), r.style.setProperty("--base-color", t.primary), r.style.setProperty("--color-secondary", t.secondary), r.style.setProperty("--color-tertiary", t.tertiary), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
    source: "wallpaper",
    seeds: t
  } }));
}, _e = () => {
  try {
    const e = localStorage.getItem(Ft);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, Se = async (e, t) => {
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
  const a = await Xn(e);
  if (a != null && Gn(a), !t?.force) try {
    if (localStorage.getItem(Sr) === r) {
      const i = _e();
      if (i)
        return be(i), N ? {
          ...i,
          ...N
        } : i;
    }
  } catch {
  }
  try {
    const i = await Cn(e), n = Zn(i, a ?? void 0);
    if (!n) return null;
    be(n);
    try {
      localStorage.setItem(Sr, r);
    } catch {
    }
    return N ? {
      ...n,
      ...N
    } : n;
  } catch (i) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", i);
    const n = _e();
    return n ? (be(n), n) : null;
  }
}, Un = () => {
  const e = _e();
  return e && be(e), e;
}, ca = "rs-wallpaper-image", $ = "/assets/wallpaper.jpg", Yt = "/assets/user-wallpaper", ha = "cwsp-user-wallpaper", St = "idb:rs-wallpaper", Qn = "cwsp-wallpaper-v1", O = "blobs", Zt = "current", ua = 512e3, z = null, Be = 0, T = () => Ea?.[Aa()] ?? 0, ze = (e) => e === "idb:rs-wallpaper" || e.startsWith("idb:"), da = (e) => e.startsWith("blob:") || e.startsWith("data:") && (e.length > ua || !/^data:image\//i.test(e)), va = () => {
  if (Be += 1, z && z.startsWith("blob:")) try {
    URL.revokeObjectURL(z);
  } catch {
  }
  z = null;
}, pa = (e, t) => (t !== Be || z || (z = URL.createObjectURL(e)), z), Jt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(Qn, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(O) || a.createObjectStore(O);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), Vn = async (e) => {
  const t = await Jt();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(O, "readwrite");
      i.objectStore(O).put(e, Zt), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, Kt = async () => {
  const e = await Jt();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(O, "readonly").objectStore(O).get(Zt);
      a.onsuccess = () => {
        const i = a.result;
        t(i instanceof Blob ? i : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, fa = async (e) => {
  if (typeof caches > "u" || !(e instanceof Blob) || e.size <= 0) return;
  const t = await caches.open(ha), r = e.type && e.type.startsWith("image/") ? e.type : "image/jpeg";
  await t.put(new Request(Yt), new Response(e, { headers: { "Content-Type": r } }));
}, eo = async () => {
  if (!(typeof caches > "u"))
    try {
      await (await caches.open(ha)).delete(new Request(Yt));
    } catch {
    }
}, to = async () => {
  try {
    const e = await Jt();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(O, "readwrite");
        a.objectStore(O).delete(Zt), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, De = () => {
  try {
    const e = localStorage.getItem(ca);
    return e && e.trim() ? e.trim() : $;
  } catch {
    return $;
  }
}, Te = (e) => {
  if (e.startsWith("blob:")) return !1;
  try {
    return localStorage.setItem(ca, e), !0;
  } catch {
    return !1;
  }
}, ro = async () => {
  if (z) return z;
  const e = Be;
  try {
    const t = await Kt();
    return t ? pa(t, e) : null;
  } catch (t) {
    return console.warn("[fest/image] wallpaper IDB restore failed", t), null;
  }
}, ao = (e) => e.startsWith("data:") || e.startsWith("blob:"), ma = async () => {
  const e = De();
  if (ze(e) || da(e)) {
    const t = await ro();
    return t ? (ze(e) || Te(St), t) : At() ? "" : $;
  }
  return At() && (!e || e === $) ? "" : e || $;
}, Z = null, io = () => Z || (Z = (async () => {
  const e = De();
  if (ze(e) || da(e)) {
    const i = await Kt();
    if (!i) return null;
    fa(i).catch(() => {
    });
    const n = pa(i, Be);
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
})().catch(() => null), Z), no = async (e) => {
  if (!Z || !e) return null;
  const t = await Z;
  return t && (t.url === e || t.url === e.split("#")[0]) ? t.blob : null;
}, nl = () => De(), Tr = (e) => {
  const t = () => {
    const r = T(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), Ia(t);
}, oo = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = T(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, ol = () => {
  ma().then((e) => {
    oo(), $e(e);
  });
}, K = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, $e = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(T());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, lo = async (e) => (await fetch(e)).blob(), so = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return vo($), $;
  va(), z = URL.createObjectURL(e), $e(z), Se(e, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(K);
  });
  try {
    await Vn(e), Te(St), fa(e).catch(() => {
    });
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, n) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => n(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !Te(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: St,
      url: z
    } }));
  } catch {
  }
  return z;
}, ll = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "none", t.style.backgroundColor = "transparent";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "0", r.style.pointerEvents = "none", r.style.opacity = "0", r.style.background = "none", r.style.backgroundColor = "transparent";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "min(100cqi, 100dvi)", a.style.blockSize = "min(100cqb, 100dvb)", a.style.maxInlineSize = "min(100cqi, 100dvi)", a.style.maxBlockSize = "min(100cqb, 100dvb)", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.style.filter = "none", a.style.backdropFilter = "none", a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", Gt() || "display-p3"), a.style.setProperty("background-color", "transparent", "important"), a.style.setProperty("opacity", "1", "important"), a.setAttribute("is", "ui-canvas");
  const i = document.createElement("img");
  i.className = "app-canvas__poster", i.alt = "", i.decoding = "async", i.setAttribute("fetchpriority", "high"), i.draggable = !1, i.style.position = "absolute", i.style.inset = "0", i.style.inlineSize = "min(100cqi, 100dvi)", i.style.blockSize = "min(100cqb, 100dvb)", i.style.objectFit = "cover", i.style.objectPosition = "center", i.style.pointerEvents = "none", t.append(a), i.addEventListener("load", () => {
    try {
      document.documentElement.removeAttribute("data-cwsp-wallpaper-poster");
    } catch {
    }
  }, { once: !0 }), i.addEventListener("error", () => {
    i.style.display = "none", i.src.includes("/assets/user-wallpaper") && i.removeAttribute("src");
  }), fo();
  const n = De(), o = ze(n) ? Yt : n.startsWith("data:") || n.startsWith("blob:") ? "" : n, l = io();
  o && !C.has(o) && (a.setAttribute("data-src", o), i.src = o), l.then((h) => {
    if (!(!h || !i.isConnected)) {
      if (h.url.startsWith("blob:")) {
        i.src = h.url, a.setAttribute("data-src", h.url);
        return;
      }
      i.getAttribute("src") || (i.src = h.url);
    }
  });
  const c = Tr(a);
  return Un(), K(r), (async () => {
    const h = await ma();
    if (!h || C.has(h)) {
      K(r);
      return;
    }
    a.setAttribute("data-src", h), i.isConnected && (i.src = h), Tr(a);
    const v = h.startsWith("blob:") && await Kt() || h, d = () => {
      Se(v).then(() => K(r));
    }, f = globalThis.requestIdleCallback;
    typeof f == "function" ? f(d, { timeout: 1200 }) : globalThis.setTimeout?.(d, 320);
  })(), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: c
  };
}, ga = "rs-wallpaper-layout", co = '[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas', ba = (e) => {
  const t = typeof e == "number" ? e : typeof e == "string" ? Number(e.trim().toLowerCase().replace(/x$/, "")) : NaN;
  return Number.isFinite(t) && t > 0 ? t : 1;
}, zt = (e) => {
  const t = typeof e == "string" ? e.trim().toLowerCase() : "";
  if (t === "start" || t === "center" || t === "end") return t;
  if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)%$/.test(t)) {
    const r = Number(t.slice(0, -1));
    if (Number.isFinite(r)) return `${Math.max(0, Math.min(100, r))}%`;
  }
  return "center";
}, $r = (e) => {
  const t = zt(e);
  return t === "start" ? 0 : t === "center" ? 0.5 : t === "end" ? 1 : Number(t.slice(0, -1)) / 100;
}, Tt = (e) => ({
  scale: ba(e?.scale || 1),
  positionX: zt(e?.positionX ?? "center"),
  positionY: zt(e?.positionY ?? "center")
}), $t, ho = () => {
  if ($t) return { ...$t };
  try {
    return Tt(JSON.parse(localStorage.getItem(ga) ?? "null"));
  } catch {
    return Tt();
  }
}, uo = (e, t) => {
  e.setAttribute("scale", String(t.scale)), e.setAttribute("position-x", t.positionX), e.setAttribute("position-y", t.positionY);
}, sl = (e) => {
  const t = Tt({
    ...ho(),
    ...e
  });
  $t = t;
  try {
    localStorage.setItem(ga, JSON.stringify(t));
  } catch {
  }
  typeof document < "u" && document.querySelectorAll(co).forEach((r) => uo(r, t));
}, vo = (e) => {
  const t = String(e || "").trim() || $;
  if (ao(t) || t.length > ua) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await lo(t);
        await so(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r);
        const a = t.startsWith("blob:") ? $ : t;
        $e(a), Se(a, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(K);
        });
      }
    })();
    return;
  }
  to(), eo(), va(), Te(t) || console.warn("[fest/image] wallpaper pointer write failed"), $e(t), Se(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(K);
  });
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: t,
      url: t
    } }));
  } catch {
  }
}, ya = /* @__PURE__ */ Symbol.for("image.canvas.blob");
globalThis[ya] ??= /* @__PURE__ */ new WeakMap();
var ge = globalThis[ya], Ma = /* @__PURE__ */ Symbol.for("image.canvas.delayed");
globalThis[Ma] ??= /* @__PURE__ */ new Map([]);
var po = globalThis[Ma], wa = /* @__PURE__ */ Symbol.for("image.canvas.scheduler");
globalThis[wa] ??= Ca();
var cl = globalThis[wa], xa = /* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc");
globalThis[xa] ??= /* @__PURE__ */ new Set();
var C = globalThis[xa], At = () => {
  try {
    if (String(document.documentElement?.dataset?.cwspSku || "").toLowerCase() === "process") return !0;
    const e = String(globalThis.location?.hostname || "").toLowerCase();
    return e === "process.u2re.space" || e === "workcenter.u2re.space" || e === "ai.u2re.space";
  } catch {
    return !1;
  }
}, fo = () => {
  At() && C.add($);
}, ka = (e) => e?.naturalWidth || e?.width || 1, Pa = (e) => e?.naturalHeight || e?.height || 1;
function Gt() {
  return window.matchMedia("(color-gamut: rec2020)").matches ? "rec2020" : window.matchMedia("(color-gamut: p3)").matches ? "display-p3" : (window.matchMedia("(color-gamut: srgb)").matches, "srgb");
}
var mo = (e) => {
  const t = {
    alpha: !0,
    desynchronized: !0,
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    colorSpace: Gt() || "display-p3",
    colorType: "float16",
    pixelFormat: "rgba-float16"
  };
  typeof document < "u" && document.documentElement?.dataset?.cwspNativeShell;
  try {
    return e.getContext("2d", t);
  } catch {
    return e.getContext("2d");
  }
}, _a = 1.5707963267948966, hl = (e, t) => {
  po.set(e, t);
}, ul = (e, t, r = 1, a, i = 0) => {
  const n = e.canvas;
  e.translate(Math.round(n.width / 2), Math.round(n.height / 2)), e.rotate(Math.round((-i || 0) + (1 - a)) * _a), e.translate(Math.round(-(ka(t) / 2) * r), Math.round(-(Pa(t) / 2) * r));
}, go = (e) => e ? typeof Blob == "function" && e instanceof Blob || typeof File == "function" && e instanceof File || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof Image == "function" && e instanceof Image ? !0 : typeof e == "object" : !1, bo = (e) => {
  if (!ge.has(e) && go(e)) {
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
      throw ge.delete(e), a;
    });
    ge.set(e, r);
  }
  return ge.get(e);
}, Sa = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[Sa] ??= /* @__PURE__ */ new WeakMap();
var Ar = globalThis[Sa], yo = (e, t) => {
  const r = Ar.get(t);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return Ar.set(t, a), a;
}, Cr = () => Promise.race([scheduler?.yield(), new Promise((e) => requestAnimationFrame(e))]), Ct = null;
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
      this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.contains("u-canvas") || this.classList.add("u-canvas"), this.classList.contains("u2-canvas") || this.classList.add("u2-canvas"), this.classList.contains("ui-canvas") || this.classList.add("ui-canvas"), this.style.setProperty("inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("block-size", "min(100cqb, 100dvb)"), this.style.setProperty("max-inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("max-block-size", "min(100cqb, 100dvb)"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", Gt() || "display-p3"), this.style.setProperty("background-color", "transparent", "important"), this.style.setProperty("opacity", "1", "important"), this.style.setProperty("image-rendering", "auto", "important"), this.style.setProperty("filter", "none"), this.style.setProperty("backdrop-filter", "none"), this.style.setProperty("mix-blend-mode", "normal"), this.style.setProperty("background-blend-mode", "normal"), this.style.setProperty("isolation", "isolate");
    } catch {
    }
    try {
      this.#a = T();
    } catch {
    }
    if (!this.#n) {
      Cr?.()?.then?.(() => {
        this.isConnected && a();
      }), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)], this.ctx = mo(t);
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
    const a = typeof ImageBitmap == "function" && t instanceof ImageBitmap ? t : await bo(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#i(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == null || t == this.#t || t == this.#r)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`, ((this.#a ?? T()) || 0) % 2;
      const n = ka(i), o = Pa(i), l = Math.round(1 - (n <= o ? 1 : 0) - (this.#a ?? T())), c = Math.abs(l % 2) === 1, h = c ? o : n, v = c ? n : o, d = Math.max(r.width / h, r.height / v) * ba(this.getAttribute("scale")), f = n * d, m = o * d;
      if (!Number.isFinite(f) || !Number.isFinite(m)) return;
      const b = c ? m : f, y = c ? f : m, M = $r(this.getAttribute("position-x")), S = $r(this.getAttribute("position-y")), k = (r.width - b) * M, A = (r.height - y) * S;
      a.save();
      try {
        a.clearRect(0, 0, r.width, r.height), a.translate(k + b / 2, A + y / 2), a.rotate(l * _a), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", a.drawImage(i, -f / 2, -m / 2, f, m);
      } finally {
        a.restore();
      }
    }
  }
  #l(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || C.has(r) ? Promise.resolve() : r.startsWith("data:") && !/^data:image\//i.test(r) ? (C.add(r), Promise.resolve()) : no(r).then((a) => a && r === this.#t ? this.$useImageAsSource(a, r)?.catch?.(() => {
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
    this.image && r && (t == null || t == this.#t || t == this.#r) && Cr?.()?.then?.(() => yo(this.$renderPass, this)(t));
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
  ha as USER_WALLPAPER_CACHE,
  Yt as USER_WALLPAPER_PATH,
  St as WALLPAPER_IDB_MARKER,
  In as WALLPAPER_PRIMARY_STORAGE_KEY,
  Nn as WALLPAPER_THEME_SRC_STORAGE_KEY,
  En as WALLPAPER_THEME_STORAGE_KEY,
  Se as applyThemeFromWallpaper,
  Gn as applyWallpaperPaperFromLuma,
  _t as applyWallpaperPaperTokens,
  be as applyWallpaperThemeSeeds,
  Ar as bindCache,
  ge as blobImageMap,
  hl as callByFrame,
  ul as cover,
  bo as createImageBitmapCache,
  po as delayed,
  jn as deriveWallpaperPaperTokensFromLuma,
  ko as electronAPI,
  C as failedWallpaperSrc,
  ho as getAppWallpaperLayout,
  Cn as getDominantColors,
  nl as getWallpaperStoragePointer,
  ll as initializeAppCanvasLayer,
  _e as loadCachedWallpaperTheme,
  Po as qualityMode,
  Zn as rankWallpaperSeeds,
  ol as refreshAppWallpaperPaint,
  se as registerColorProperty,
  ma as resolveAppWallpaperUrl,
  Un as restoreWallpaperThemeCache,
  cl as schedulerRf,
  vo as setAppWallpaper,
  so as setAppWallpaperFromBlob,
  sl as setAppWallpaperLayout,
  oo as syncAppWallpaperOrient,
  Tr as syncCanvasOrient,
  sa as themeHosts,
  io as warmAppWallpaper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFEgfSBmcm9tIFwiQGZlc3QtbGliL2x1cmVcIjtcbmltcG9ydCB7IHNldFN0eWxlUHJvcGVydHkgfSBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBtYWtlUkFGQ3ljbGUsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCB3aGVuQW55U2NyZWVuQ2hhbmdlcyB9IGZyb20gXCJAZmVzdC1saWIvZG9tXCI7XG5cbi8vIHNyYy9lbmdpbmUvQ29uZmlnLnRzXG52YXIgZWxlY3Ryb25BUEkgPSBcImVsZWN0cm9uQnJpZGdlXCI7XG52YXIgcXVhbGl0eU1vZGUgPSB7IFwiZmFzdFwiOiB7XG5cdGRpdmlzb3I6IDQsXG5cdGZpbHRlcjogXCJibHVyKDRweClcIixcblx0c2FtcGxpbmc6IDEyOFxufSB9O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VOdW1iZXIuanNcbnZhciBwYXJzZU51bWJlciA9IChjb2xvciwgbGVuKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwibnVtYmVyXCIpIHJldHVybjtcblx0aWYgKGxlbiA9PT0gMykgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiA4ICYgMTUgfCBjb2xvciA+PiA0ICYgMjQwKSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gNCAmIDE1IHwgY29sb3IgJiAyNDApIC8gMjU1LFxuXHRcdGI6IChjb2xvciAmIDE1IHwgY29sb3IgPDwgNCAmIDI0MCkgLyAyNTVcblx0fTtcblx0aWYgKGxlbiA9PT0gNCkgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiAxMiAmIDE1IHwgY29sb3IgPj4gOCAmIDI0MCkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDggJiAxNSB8IGNvbG9yID4+IDQgJiAyNDApIC8gMjU1LFxuXHRcdGI6IChjb2xvciA+PiA0ICYgMTUgfCBjb2xvciAmIDI0MCkgLyAyNTUsXG5cdFx0YWxwaGE6IChjb2xvciAmIDE1IHwgY29sb3IgPDwgNCAmIDI0MCkgLyAyNTVcblx0fTtcblx0aWYgKGxlbiA9PT0gNikgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxuXHRcdGI6IChjb2xvciAmIDI1NSkgLyAyNTVcblx0fTtcblx0aWYgKGxlbiA9PT0gOCkgcmV0dXJuIHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHI6IChjb2xvciA+PiAyNCAmIDI1NSkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcblx0XHRiOiAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXG5cdFx0YWxwaGE6IChjb2xvciAmIDI1NSkgLyAyNTVcblx0fTtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbG9ycy9uYW1lZC5qc1xudmFyIG5hbWVkID0ge1xuXHRhbGljZWJsdWU6IDE1NzkyMzgzLFxuXHRhbnRpcXVld2hpdGU6IDE2NDQ0Mzc1LFxuXHRhcXVhOiA2NTUzNSxcblx0YXF1YW1hcmluZTogODM4ODU2NCxcblx0YXp1cmU6IDE1Nzk0MTc1LFxuXHRiZWlnZTogMTYxMTkyNjAsXG5cdGJpc3F1ZTogMTY3NzAyNDQsXG5cdGJsYWNrOiAwLFxuXHRibGFuY2hlZGFsbW9uZDogMTY3NzIwNDUsXG5cdGJsdWU6IDI1NSxcblx0Ymx1ZXZpb2xldDogOTA1NTIwMixcblx0YnJvd246IDEwODI0MjM0LFxuXHRidXJseXdvb2Q6IDE0NTk2MjMxLFxuXHRjYWRldGJsdWU6IDYyNjY1MjgsXG5cdGNoYXJ0cmV1c2U6IDgzODgzNTIsXG5cdGNob2NvbGF0ZTogMTM3ODk0NzAsXG5cdGNvcmFsOiAxNjc0NDI3Mixcblx0Y29ybmZsb3dlcmJsdWU6IDY1OTE5ODEsXG5cdGNvcm5zaWxrOiAxNjc3NTM4OCxcblx0Y3JpbXNvbjogMTQ0MjMxMDAsXG5cdGN5YW46IDY1NTM1LFxuXHRkYXJrYmx1ZTogMTM5LFxuXHRkYXJrY3lhbjogMzU3MjMsXG5cdGRhcmtnb2xkZW5yb2Q6IDEyMDkyOTM5LFxuXHRkYXJrZ3JheTogMTExMTkwMTcsXG5cdGRhcmtncmVlbjogMjU2MDAsXG5cdGRhcmtncmV5OiAxMTExOTAxNyxcblx0ZGFya2toYWtpOiAxMjQzMzI1OSxcblx0ZGFya21hZ2VudGE6IDkxMDk2NDMsXG5cdGRhcmtvbGl2ZWdyZWVuOiA1NTk3OTk5LFxuXHRkYXJrb3JhbmdlOiAxNjc0NzUyMCxcblx0ZGFya29yY2hpZDogMTAwNDAwMTIsXG5cdGRhcmtyZWQ6IDkxMDk1MDQsXG5cdGRhcmtzYWxtb246IDE1MzA4NDEwLFxuXHRkYXJrc2VhZ3JlZW46IDk0MTk5MTksXG5cdGRhcmtzbGF0ZWJsdWU6IDQ3MzQzNDcsXG5cdGRhcmtzbGF0ZWdyYXk6IDMxMDA0OTUsXG5cdGRhcmtzbGF0ZWdyZXk6IDMxMDA0OTUsXG5cdGRhcmt0dXJxdW9pc2U6IDUyOTQ1LFxuXHRkYXJrdmlvbGV0OiA5Njk5NTM5LFxuXHRkZWVwcGluazogMTY3MTY5NDcsXG5cdGRlZXBza3libHVlOiA0OTE1MSxcblx0ZGltZ3JheTogNjkwODI2NSxcblx0ZGltZ3JleTogNjkwODI2NSxcblx0ZG9kZ2VyYmx1ZTogMjAwMzE5OSxcblx0ZmlyZWJyaWNrOiAxMTY3NDE0Nixcblx0ZmxvcmFsd2hpdGU6IDE2Nzc1OTIwLFxuXHRmb3Jlc3RncmVlbjogMjI2Mzg0Mixcblx0ZnVjaHNpYTogMTY3MTE5MzUsXG5cdGdhaW5zYm9ybzogMTQ0NzQ0NjAsXG5cdGdob3N0d2hpdGU6IDE2MzE2NjcxLFxuXHRnb2xkOiAxNjc2NjcyMCxcblx0Z29sZGVucm9kOiAxNDMyOTEyMCxcblx0Z3JheTogODQyMTUwNCxcblx0Z3JlZW46IDMyNzY4LFxuXHRncmVlbnllbGxvdzogMTE0MDMwNTUsXG5cdGdyZXk6IDg0MjE1MDQsXG5cdGhvbmV5ZGV3OiAxNTc5NDE2MCxcblx0aG90cGluazogMTY3Mzg3NDAsXG5cdGluZGlhbnJlZDogMTM0NTg1MjQsXG5cdGluZGlnbzogNDkxNTMzMCxcblx0aXZvcnk6IDE2Nzc3MjAwLFxuXHRraGFraTogMTU3ODc2NjAsXG5cdGxhdmVuZGVyOiAxNTEzMjQxMCxcblx0bGF2ZW5kZXJibHVzaDogMTY3NzMzNjUsXG5cdGxhd25ncmVlbjogODE5MDk3Nixcblx0bGVtb25jaGlmZm9uOiAxNjc3NTg4NSxcblx0bGlnaHRibHVlOiAxMTM5MzI1NCxcblx0bGlnaHRjb3JhbDogMTU3NjE1MzYsXG5cdGxpZ2h0Y3lhbjogMTQ3NDU1OTksXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiAxNjQ0ODIxMCxcblx0bGlnaHRncmF5OiAxMzg4MjMyMyxcblx0bGlnaHRncmVlbjogOTQ5ODI1Nixcblx0bGlnaHRncmV5OiAxMzg4MjMyMyxcblx0bGlnaHRwaW5rOiAxNjc1ODQ2NSxcblx0bGlnaHRzYWxtb246IDE2NzUyNzYyLFxuXHRsaWdodHNlYWdyZWVuOiAyMTQyODkwLFxuXHRsaWdodHNreWJsdWU6IDg5MDAzNDYsXG5cdGxpZ2h0c2xhdGVncmF5OiA3ODMzNzUzLFxuXHRsaWdodHNsYXRlZ3JleTogNzgzMzc1Myxcblx0bGlnaHRzdGVlbGJsdWU6IDExNTg0NzM0LFxuXHRsaWdodHllbGxvdzogMTY3NzcxODQsXG5cdGxpbWU6IDY1MjgwLFxuXHRsaW1lZ3JlZW46IDMzMjkzMzAsXG5cdGxpbmVuOiAxNjQ0NTY3MCxcblx0bWFnZW50YTogMTY3MTE5MzUsXG5cdG1hcm9vbjogODM4ODYwOCxcblx0bWVkaXVtYXF1YW1hcmluZTogNjczNzMyMixcblx0bWVkaXVtYmx1ZTogMjA1LFxuXHRtZWRpdW1vcmNoaWQ6IDEyMjExNjY3LFxuXHRtZWRpdW1wdXJwbGU6IDk2NjI2ODMsXG5cdG1lZGl1bXNlYWdyZWVuOiAzOTc4MDk3LFxuXHRtZWRpdW1zbGF0ZWJsdWU6IDgwODc3OTAsXG5cdG1lZGl1bXNwcmluZ2dyZWVuOiA2NDE1NCxcblx0bWVkaXVtdHVycXVvaXNlOiA0NzcyMzAwLFxuXHRtZWRpdW12aW9sZXRyZWQ6IDEzMDQ3MTczLFxuXHRtaWRuaWdodGJsdWU6IDE2NDQ5MTIsXG5cdG1pbnRjcmVhbTogMTYxMjE4NTAsXG5cdG1pc3R5cm9zZTogMTY3NzAyNzMsXG5cdG1vY2Nhc2luOiAxNjc3MDIyOSxcblx0bmF2YWpvd2hpdGU6IDE2NzY4Njg1LFxuXHRuYXZ5OiAxMjgsXG5cdG9sZGxhY2U6IDE2NjQzNTU4LFxuXHRvbGl2ZTogODQyMTM3Nixcblx0b2xpdmVkcmFiOiA3MDQ4NzM5LFxuXHRvcmFuZ2U6IDE2NzUzOTIwLFxuXHRvcmFuZ2VyZWQ6IDE2NzI5MzQ0LFxuXHRvcmNoaWQ6IDE0MzE1NzM0LFxuXHRwYWxlZ29sZGVucm9kOiAxNTY1NzEzMCxcblx0cGFsZWdyZWVuOiAxMDAyNTg4MCxcblx0cGFsZXR1cnF1b2lzZTogMTE1Mjk5NjYsXG5cdHBhbGV2aW9sZXRyZWQ6IDE0MzgxMjAzLFxuXHRwYXBheWF3aGlwOiAxNjc3MzA3Nyxcblx0cGVhY2hwdWZmOiAxNjc2NzY3Myxcblx0cGVydTogMTM0Njg5OTEsXG5cdHBpbms6IDE2NzYxMDM1LFxuXHRwbHVtOiAxNDUyNDYzNyxcblx0cG93ZGVyYmx1ZTogMTE1OTE5MTAsXG5cdHB1cnBsZTogODM4ODczNixcblx0cmViZWNjYXB1cnBsZTogNjY5Nzg4MSxcblx0cmVkOiAxNjcxMTY4MCxcblx0cm9zeWJyb3duOiAxMjM1NzUxOSxcblx0cm95YWxibHVlOiA0Mjg2OTQ1LFxuXHRzYWRkbGVicm93bjogOTEyNzE4Nyxcblx0c2FsbW9uOiAxNjQxNjg4Mixcblx0c2FuZHlicm93bjogMTYwMzI4NjQsXG5cdHNlYWdyZWVuOiAzMDUwMzI3LFxuXHRzZWFzaGVsbDogMTY3NzQ2MzgsXG5cdHNpZW5uYTogMTA1MDY3OTcsXG5cdHNpbHZlcjogMTI2MzIyNTYsXG5cdHNreWJsdWU6IDg5MDAzMzEsXG5cdHNsYXRlYmx1ZTogNjk3MDA2MSxcblx0c2xhdGVncmF5OiA3MzcyOTQ0LFxuXHRzbGF0ZWdyZXk6IDczNzI5NDQsXG5cdHNub3c6IDE2Nzc1OTMwLFxuXHRzcHJpbmdncmVlbjogNjU0MDcsXG5cdHN0ZWVsYmx1ZTogNDYyMDk4MCxcblx0dGFuOiAxMzgwODc4MCxcblx0dGVhbDogMzI4OTYsXG5cdHRoaXN0bGU6IDE0MjA0ODg4LFxuXHR0b21hdG86IDE2NzM3MDk1LFxuXHR0dXJxdW9pc2U6IDQyNTE4NTYsXG5cdHZpb2xldDogMTU2MzEwODYsXG5cdHdoZWF0OiAxNjExMzMzMSxcblx0d2hpdGU6IDE2Nzc3MjE1LFxuXHR3aGl0ZXNtb2tlOiAxNjExOTI4NSxcblx0eWVsbG93OiAxNjc3Njk2MCxcblx0eWVsbG93Z3JlZW46IDEwMTQ1MDc0XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VOYW1lZC5qc1xudmFyIHBhcnNlTmFtZWQgPSAoY29sb3IpID0+IHtcblx0cmV0dXJuIHBhcnNlTnVtYmVyKG5hbWVkW2NvbG9yLnRvTG93ZXJDYXNlKCldLCA2KTtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZUhleC5qc1xudmFyIGhleCA9IC9eIz8oWzAtOWEtZl17OH18WzAtOWEtZl17Nn18WzAtOWEtZl17NH18WzAtOWEtZl17M30pJC9pO1xudmFyIHBhcnNlSGV4ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaDtcblx0cmV0dXJuIChtYXRjaCA9IGNvbG9yLm1hdGNoKGhleCkpID8gcGFyc2VOdW1iZXIocGFyc2VJbnQobWF0Y2hbMV0sIDE2KSwgbWF0Y2hbMV0ubGVuZ3RoKSA6IHZvaWQgMDtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3V0aWwvcmVnZXguanNcbnZhciBudW0kMSA9IFwiKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXCI7XG52YXIgcGVyID0gYCR7bnVtJDF9JWA7XG52YXIgbnVtX3BlciA9IGAoPzoke251bSQxfSV8JHtudW0kMX0pYDtcbnZhciBudW1fcGVyX25vbmUgPSBgKD86JHtudW0kMX0lfCR7bnVtJDF9fG5vbmUpYDtcbnZhciBodWUkMSA9IGAoPzoke251bSQxfShkZWd8Z3JhZHxyYWR8dHVybil8JHtudW0kMX0pYDtcbnZhciBjID0gYFxcXFxzKixcXFxccypgO1xudmFyIHJ4X251bV9wZXJfbm9uZSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBudW1fcGVyX25vbmUgKyBcIiRcIik7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYkxlZ2FjeS5qc1xudmFyIHJnYl9udW1fb2xkID0gbmV3IFJlZ0V4cChgXnJnYmE/XFxcXChcXFxccyoke251bSQxfSR7Y30ke251bSQxfSR7Y30ke251bSQxfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciByZ2JfcGVyX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtwZXJ9JHtjfSR7cGVyfSR7Y30ke3Blcn1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcGFyc2VSZ2JMZWdhY3kgPSAoY29sb3IpID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRsZXQgbWF0Y2g7XG5cdGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9udW1fb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMjU1O1xuXHR9IGVsc2UgaWYgKG1hdGNoID0gY29sb3IubWF0Y2gocmdiX3Blcl9vbGQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdICE9PSB2b2lkIDApIHJlcy5yID0gbWF0Y2hbMV0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5nID0gbWF0Y2hbMl0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5iID0gbWF0Y2hbM10gLyAxMDA7XG5cdH0gZWxzZSByZXR1cm47XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs0XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbNV0pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL19wcmVwYXJlLmpzXG52YXIgcHJlcGFyZSA9IChjb2xvciwgbW9kZSkgPT4gY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR5cGVvZiBjb2xvciAhPT0gXCJvYmplY3RcIiA/IHBhcnNlKGNvbG9yKSA6IGNvbG9yLm1vZGUgIT09IHZvaWQgMCA/IGNvbG9yIDogbW9kZSA/IHtcblx0Li4uY29sb3IsXG5cdG1vZGVcbn0gOiB2b2lkIDA7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnZlcnRlci5qc1xudmFyIGNvbnZlcnRlciA9ICh0YXJnZXRfbW9kZSA9IFwicmdiXCIpID0+IChjb2xvcikgPT4gKGNvbG9yID0gcHJlcGFyZShjb2xvciwgdGFyZ2V0X21vZGUpKSAhPT0gdm9pZCAwID8gY29sb3IubW9kZSA9PT0gdGFyZ2V0X21vZGUgPyBjb2xvciA6IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdID8gY29udmVydGVyc1tjb2xvci5tb2RlXVt0YXJnZXRfbW9kZV0oY29sb3IpIDogdGFyZ2V0X21vZGUgPT09IFwicmdiXCIgPyBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdLnJnYihjb2xvcikgOiBjb252ZXJ0ZXJzLnJnYlt0YXJnZXRfbW9kZV0oY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpKSA6IHZvaWQgMDtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbW9kZXMuanNcbnZhciBjb252ZXJ0ZXJzID0ge307XG52YXIgbW9kZXMgPSB7fTtcbnZhciBwYXJzZXJzID0gW107XG52YXIgY29sb3JQcm9maWxlcyA9IHt9O1xudmFyIGlkZW50aXR5ID0gKHYpID0+IHY7XG52YXIgdXNlTW9kZSA9IChkZWZpbml0aW9uKSA9PiB7XG5cdGNvbnZlcnRlcnNbZGVmaW5pdGlvbi5tb2RlXSA9IHtcblx0XHQuLi5jb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0sXG5cdFx0Li4uZGVmaW5pdGlvbi50b01vZGVcblx0fTtcblx0T2JqZWN0LmtleXMoZGVmaW5pdGlvbi5mcm9tTW9kZSB8fCB7fSkuZm9yRWFjaCgoaykgPT4ge1xuXHRcdGlmICghY29udmVydGVyc1trXSkgY29udmVydGVyc1trXSA9IHt9O1xuXHRcdGNvbnZlcnRlcnNba11bZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb24uZnJvbU1vZGVba107XG5cdH0pO1xuXHRpZiAoIWRlZmluaXRpb24ucmFuZ2VzKSBkZWZpbml0aW9uLnJhbmdlcyA9IHt9O1xuXHRpZiAoIWRlZmluaXRpb24uZGlmZmVyZW5jZSkgZGVmaW5pdGlvbi5kaWZmZXJlbmNlID0ge307XG5cdGRlZmluaXRpb24uY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuXHRcdGlmIChkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9PT0gdm9pZCAwKSBkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9IFswLCAxXTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0pIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBpbnRlcnBvbGF0b3IgZm9yOiAke2NoYW5uZWx9YCk7XG5cdFx0aWYgKHR5cGVvZiBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID09PSBcImZ1bmN0aW9uXCIpIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gPSB7IHVzZTogZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSB9O1xuXHRcdGlmICghZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCkgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCA9IGlkZW50aXR5O1xuXHR9KTtcblx0bW9kZXNbZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb247XG5cdChkZWZpbml0aW9uLnBhcnNlIHx8IFtdKS5mb3JFYWNoKChwYXJzZXIpID0+IHtcblx0XHR1c2VQYXJzZXIocGFyc2VyLCBkZWZpbml0aW9uLm1vZGUpO1xuXHR9KTtcblx0cmV0dXJuIGNvbnZlcnRlcihkZWZpbml0aW9uLm1vZGUpO1xufTtcbnZhciBnZXRNb2RlID0gKG1vZGUpID0+IG1vZGVzW21vZGVdO1xudmFyIHVzZVBhcnNlciA9IChwYXJzZXIsIG1vZGUpID0+IHtcblx0aWYgKHR5cGVvZiBwYXJzZXIgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoIW1vZGUpIHRocm93IG5ldyBFcnJvcihgJ21vZGUnIHJlcXVpcmVkIHdoZW4gJ3BhcnNlcicgaXMgYSBzdHJpbmdgKTtcblx0XHRjb2xvclByb2ZpbGVzW3BhcnNlcl0gPSBtb2RlO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJzZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGlmIChwYXJzZXJzLmluZGV4T2YocGFyc2VyKSA8IDApIHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wYXJzZS5qc1xudmFyIElkZW50U3RhcnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18W2EtekEtWl9dLztcbnZhciBJZGVudENvZGVQb2ludCA9IC9bXlxceDAwLVxceDdGXXxbLVxcd10vO1xudmFyIFRvayA9IHtcblx0RnVuY3Rpb246IFwiZnVuY3Rpb25cIixcblx0SWRlbnQ6IFwiaWRlbnRcIixcblx0TnVtYmVyOiBcIm51bWJlclwiLFxuXHRQZXJjZW50YWdlOiBcInBlcmNlbnRhZ2VcIixcblx0UGFyZW5DbG9zZTogXCIpXCIsXG5cdE5vbmU6IFwibm9uZVwiLFxuXHRIdWU6IFwiaHVlXCIsXG5cdEFscGhhOiBcImFscGhhXCJcbn07XG52YXIgX2kgPSAwO1xuZnVuY3Rpb24gaXNfbnVtKGNoYXJzKSB7XG5cdGxldCBjaCA9IGNoYXJzW19pXTtcblx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdGlmIChjaCA9PT0gXCItXCIgfHwgY2ggPT09IFwiK1wiKSByZXR1cm4gL1xcZC8udGVzdChjaDEpIHx8IGNoMSA9PT0gXCIuXCIgJiYgL1xcZC8udGVzdChjaGFyc1tfaSArIDJdKTtcblx0aWYgKGNoID09PSBcIi5cIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKTtcblx0cmV0dXJuIC9cXGQvLnRlc3QoY2gpO1xufVxuZnVuY3Rpb24gaXNfaWRlbnQoY2hhcnMpIHtcblx0aWYgKF9pID49IGNoYXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdGlmIChjaGFycy5sZW5ndGggLSBfaSA8IDIpIHJldHVybiBmYWxzZTtcblx0XHRsZXQgY2gxID0gY2hhcnNbX2kgKyAxXTtcblx0XHRpZiAoY2gxID09PSBcIi1cIiB8fCBJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gxKSkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cbnZhciBodWVuaXRzID0ge1xuXHRkZWc6IDEsXG5cdHJhZDogMTgwIC8gTWF0aC5QSSxcblx0Z3JhZDogOSAvIDEwLFxuXHR0dXJuOiAzNjBcbn07XG5mdW5jdGlvbiBudW0oY2hhcnMpIHtcblx0bGV0IHZhbHVlID0gXCJcIjtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCItXCIgfHwgY2hhcnNbX2ldID09PSBcIitcIikgdmFsdWUgKz0gY2hhcnNbX2krK107XG5cdHZhbHVlICs9IGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCJlXCIgfHwgY2hhcnNbX2ldID09PSBcIkVcIikge1xuXHRcdGlmICgoY2hhcnNbX2kgKyAxXSA9PT0gXCItXCIgfHwgY2hhcnNbX2kgKyAxXSA9PT0gXCIrXCIpICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgY2hhcnNbX2krK10gKyBkaWdpdHMoY2hhcnMpO1xuXHRcdGVsc2UgaWYgKC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0fVxuXHRpZiAoaXNfaWRlbnQoY2hhcnMpKSB7XG5cdFx0bGV0IGlkID0gaWRlbnQoY2hhcnMpO1xuXHRcdGlmIChpZCA9PT0gXCJkZWdcIiB8fCBpZCA9PT0gXCJyYWRcIiB8fCBpZCA9PT0gXCJ0dXJuXCIgfHwgaWQgPT09IFwiZ3JhZFwiKSByZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkh1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSAqIGh1ZW5pdHNbaWRdXG5cdFx0fTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNoYXJzW19pXSA9PT0gXCIlXCIpIHtcblx0XHRfaSsrO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBUb2suUGVyY2VudGFnZSxcblx0XHRcdHZhbHVlOiArdmFsdWVcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk51bWJlcixcblx0XHR2YWx1ZTogK3ZhbHVlXG5cdH07XG59XG5mdW5jdGlvbiBkaWdpdHMoY2hhcnMpIHtcblx0bGV0IHYgPSBcIlwiO1xuXHR3aGlsZSAoL1xcZC8udGVzdChjaGFyc1tfaV0pKSB2ICs9IGNoYXJzW19pKytdO1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGlkZW50KGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIElkZW50Q29kZVBvaW50LnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudGxpa2UoY2hhcnMpIHtcblx0bGV0IHYgPSBpZGVudChjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiKFwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkZ1bmN0aW9uLFxuXHRcdFx0dmFsdWU6IHZcblx0XHR9O1xuXHR9XG5cdGlmICh2ID09PSBcIm5vbmVcIikgcmV0dXJuIHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdHZhbHVlOiB2XG5cdH07XG59XG5mdW5jdGlvbiB0b2tlbml6ZShzdHIgPSBcIlwiKSB7XG5cdGxldCBjaGFycyA9IHN0ci50cmltKCk7XG5cdGxldCB0b2tlbnMgPSBbXTtcblx0bGV0IGNoO1xuXHRfaSA9IDA7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCkge1xuXHRcdGNoID0gY2hhcnNbX2krK107XG5cdFx0aWYgKGNoID09PSBcIlxcblwiIHx8IGNoID09PSBcIlx0XCIgfHwgY2ggPT09IFwiIFwiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLFwiKSByZXR1cm47XG5cdFx0aWYgKGNoID09PSBcIilcIikge1xuXHRcdFx0dG9rZW5zLnB1c2goeyB0eXBlOiBUb2suUGFyZW5DbG9zZSB9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiK1wiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLVwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdFx0XHRcdHZhbHVlOiBpZGVudChjaGFycylcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLlwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiL1wiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGxldCBhbHBoYTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdGFscGhhID0gbnVtKGNoYXJzKTtcblx0XHRcdFx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5IdWUpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWxwaGFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHRpZiAoaWRlbnQoY2hhcnMpID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IFRvay5BbHBoYSxcblx0XHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFRvay5Ob25lLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdm9pZCAwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKC9cXGQvLnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKElkZW50U3RhcnRDb2RlUG9pbnQudGVzdChjaCkpIHtcblx0XHRcdF9pLS07XG5cdFx0XHR0b2tlbnMucHVzaChpZGVudGxpa2UoY2hhcnMpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0cmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uIHx8IHRva2VuLnZhbHVlICE9PSBcImNvbG9yXCIpIHJldHVybjtcblx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAodG9rZW4udHlwZSAhPT0gVG9rLklkZW50KSByZXR1cm47XG5cdGNvbnN0IG1vZGUgPSBjb2xvclByb2ZpbGVzW3Rva2VuLnZhbHVlXTtcblx0aWYgKCFtb2RlKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZSB9O1xuXHRjb25zdCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgZmFsc2UpO1xuXHRpZiAoIWNvb3JkcykgcmV0dXJuO1xuXHRjb25zdCBjaGFubmVscyA9IGdldE1vZGUobW9kZSkuY2hhbm5lbHM7XG5cdGZvciAobGV0IGlpID0gMCwgYywgY2g7IGlpIDwgY2hhbm5lbHMubGVuZ3RoOyBpaSsrKSB7XG5cdFx0YyA9IGNvb3Jkc1tpaV07XG5cdFx0Y2ggPSBjaGFubmVsc1tpaV07XG5cdFx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRcdHJlc1tjaF0gPSBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAvIDEwMDtcblx0XHRcdGlmIChjaCA9PT0gXCJhbHBoYVwiKSByZXNbY2hdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmVzW2NoXSkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0Y29uc3QgY29vcmRzID0gW107XG5cdGxldCB0b2tlbjtcblx0d2hpbGUgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHR0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRvay5Ob25lIHx8IHRva2VuLnR5cGUgPT09IFRvay5OdW1iZXIgfHwgdG9rZW4udHlwZSA9PT0gVG9rLkFscGhhIHx8IHRva2VuLnR5cGUgPT09IFRvay5QZXJjZW50YWdlIHx8IGluY2x1ZGVIdWUgJiYgdG9rZW4udHlwZSA9PT0gVG9rLkh1ZSkge1xuXHRcdFx0Y29vcmRzLnB1c2godG9rZW4pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suUGFyZW5DbG9zZSkge1xuXHRcdFx0aWYgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPCAzIHx8IGNvb3Jkcy5sZW5ndGggPiA0KSByZXR1cm47XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSA0KSB7XG5cdFx0aWYgKGNvb3Jkc1szXS50eXBlICE9PSBUb2suQWxwaGEpIHJldHVybjtcblx0XHRjb29yZHNbM10gPSBjb29yZHNbM10udmFsdWU7XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPT09IDMpIGNvb3Jkcy5wdXNoKHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH0pO1xuXHRyZXR1cm4gY29vcmRzLmV2ZXJ5KChjKSA9PiBjLnR5cGUgIT09IFRvay5BbHBoYSkgPyBjb29yZHMgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0dG9rZW5zLl9pID0gMDtcblx0bGV0IHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKCF0b2tlbiB8fCB0b2tlbi50eXBlICE9PSBUb2suRnVuY3Rpb24pIHJldHVybjtcblx0bGV0IGNvb3JkcyA9IGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29vcmRzLnVuc2hpZnQodG9rZW4udmFsdWUpO1xuXHRyZXR1cm4gY29vcmRzO1xufVxudmFyIHBhcnNlID0gKGNvbG9yKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwic3RyaW5nXCIpIHJldHVybjtcblx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemUoY29sb3IpO1xuXHRjb25zdCBwYXJzZWQgPSB0b2tlbnMgPyBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIHRydWUpIDogdm9pZCAwO1xuXHRsZXQgcmVzdWx0ID0gdm9pZCAwO1xuXHRsZXQgaSA9IDA7XG5cdGxldCBsZW4gPSBwYXJzZXJzLmxlbmd0aDtcblx0d2hpbGUgKGkgPCBsZW4pIGlmICgocmVzdWx0ID0gcGFyc2Vyc1tpKytdKGNvbG9yLCBwYXJzZWQpKSAhPT0gdm9pZCAwKSByZXR1cm4gcmVzdWx0O1xuXHRyZXR1cm4gdG9rZW5zID8gcGFyc2VDb2xvclN5bnRheCh0b2tlbnMpIDogdm9pZCAwO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlUmdiLmpzXG5mdW5jdGlvbiBwYXJzZVJnYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJyZ2JcIiAmJiBwYXJzZWRbMF0gIT09IFwicmdiYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRjb25zdCBbLCByLCBnLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChyLnR5cGUgPT09IFRvay5IdWUgfHwgZy50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAoci50eXBlICE9PSBUb2suTm9uZSkgcmVzLnIgPSByLnR5cGUgPT09IFRvay5OdW1iZXIgPyByLnZhbHVlIC8gMjU1IDogci52YWx1ZSAvIDEwMDtcblx0aWYgKGcudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5nID0gZy50eXBlID09PSBUb2suTnVtYmVyID8gZy52YWx1ZSAvIDI1NSA6IGcudmFsdWUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgLyAyNTUgOiBiLnZhbHVlIC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVRyYW5zcGFyZW50LmpzXG52YXIgcGFyc2VUcmFuc3BhcmVudCA9IChjKSA9PiBjID09PSBcInRyYW5zcGFyZW50XCIgPyB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IDAsXG5cdGc6IDAsXG5cdGI6IDAsXG5cdGFscGhhOiAwXG59IDogdm9pZCAwO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9sZXJwLmpzXG52YXIgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgdCAqIChiIC0gYSk7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL3BpZWNld2lzZS5qc1xudmFyIGdldF9jbGFzc2VzID0gKGFycikgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRsZXQgYSA9IGFycltpXTtcblx0XHRsZXQgYiA9IGFycltpICsgMV07XG5cdFx0aWYgKGEgPT09IHZvaWQgMCAmJiBiID09PSB2b2lkIDApIGNsYXNzZXMucHVzaCh2b2lkIDApO1xuXHRcdGVsc2UgaWYgKGEgIT09IHZvaWQgMCAmJiBiICE9PSB2b2lkIDApIGNsYXNzZXMucHVzaChbYSwgYl0pO1xuXHRcdGVsc2UgY2xhc3Nlcy5wdXNoKGEgIT09IHZvaWQgMCA/IFthLCBhXSA6IFtiLCBiXSk7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xudmFyIGludGVycG9sYXRvclBpZWNld2lzZSA9IChpbnRlcnBvbGF0b3IpID0+IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBnZXRfY2xhc3NlcyhhcnIpO1xuXHRyZXR1cm4gKHQpID0+IHtcblx0XHRsZXQgY2xzID0gdCAqIGNsYXNzZXMubGVuZ3RoO1xuXHRcdGxldCBpZHggPSB0ID49IDEgPyBjbGFzc2VzLmxlbmd0aCAtIDEgOiBNYXRoLm1heChNYXRoLmZsb29yKGNscyksIDApO1xuXHRcdGxldCBwYWlyID0gY2xhc3Nlc1tpZHhdO1xuXHRcdHJldHVybiBwYWlyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnRlcnBvbGF0b3IocGFpclswXSwgcGFpclsxXSwgY2xzIC0gaWR4KTtcblx0fTtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL2xpbmVhci5qc1xudmFyIGludGVycG9sYXRvckxpbmVhciA9IGludGVycG9sYXRvclBpZWNld2lzZShsZXJwKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvYWxwaGEuanNcbnZhciBmaXh1cEFscGhhID0gKGFycikgPT4ge1xuXHRsZXQgc29tZV9kZWZpbmVkID0gZmFsc2U7XG5cdGxldCByZXMgPSBhcnIubWFwKCh2KSA9PiB7XG5cdFx0aWYgKHYgIT09IHZvaWQgMCkge1xuXHRcdFx0c29tZV9kZWZpbmVkID0gdHJ1ZTtcblx0XHRcdHJldHVybiB2O1xuXHRcdH1cblx0XHRyZXR1cm4gMTtcblx0fSk7XG5cdHJldHVybiBzb21lX2RlZmluZWQgPyByZXMgOiBhcnI7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjcgPSB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJyXCIsXG5cdFx0XCJnXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXG5cdFx0cGFyc2VSZ2IsXG5cdFx0cGFyc2VIZXgsXG5cdFx0cGFyc2VSZ2JMZWdhY3ksXG5cdFx0cGFyc2VOYW1lZCxcblx0XHRwYXJzZVRyYW5zcGFyZW50LFxuXHRcdFwic3JnYlwiXG5cdF0sXG5cdHNlcmlhbGl6ZTogXCJzcmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0cjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGdhbXV0OiB0cnVlLFxuXHR3aGl0ZToge1xuXHRcdHI6IDEsXG5cdFx0ZzogMSxcblx0XHRiOiAxXG5cdH0sXG5cdGJsYWNrOiB7XG5cdFx0cjogMCxcblx0XHRnOiAwLFxuXHRcdGI6IDBcblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRBOThUb1h5ejY1LmpzXG52YXIgbGluZWFyaXplJDIgPSAodiA9IDApID0+IE1hdGgucG93KE1hdGguYWJzKHYpLCA1NjMgLyAyNTYpICogTWF0aC5zaWduKHYpO1xudmFyIGNvbnZlcnRBOThUb1h5ejY1ID0gKGE5OCkgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQyKGE5OC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUkMihhOTguZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDIoYTk4LmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNTc2NjY5MDQyOTEwMTMwNSAqIHIgKyAuMTg1NTU4MjM3OTA2NTQ2MyAqIGcgKyAuMTg4MjI4NjQ2MjM0OTk0NyAqIGIsXG5cdFx0eTogLjI5NzM0NDk3NTI1MDUzNiAqIHIgKyAuNjI3MzYzNTY2MjU1NDY2MSAqIGcgKyAuMDc1MjkxNDU4NDkzOTk3OSAqIGIsXG5cdFx0ejogLjAyNzAzMTM2MTM4NjQxMjMgKiByICsgLjA3MDY4ODg1MjUzNTgyNzIgKiBnICsgLjk5MTMzNzUzNjgzNzYzODYgKiBiXG5cdH07XG5cdGlmIChhOTguYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYTk4LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRYeXo2NVRvQTk4LmpzXG52YXIgZ2FtbWEkMiA9ICh2KSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgMjU2IC8gNTYzKSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0WHl6NjVUb0E5OCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImE5OFwiLFxuXHRcdHI6IGdhbW1hJDIoeCAqIDIuMDQxNTg3OTAzODEwNzQ2NSAtIHkgKiAuNTY1MDA2OTc0Mjc4ODU5NyAtIC4zNDQ3MzEzNTA3NzgzMjk3ICogeiksXG5cdFx0ZzogZ2FtbWEkMih4ICogLS45NjkyNDM2MzYyODA4Nzk4ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNiArIC4wNDE1NTUwNTc0MDcxNzU2ICogeiksXG5cdFx0YjogZ2FtbWEkMih4ICogLjAxMzQ0NDI4MDYzMjAzMTIgLSB5ICogLjExODM2MjM5MjIzMTAxODQgKyAxLjAxNTE3NDk5NDM5MTIwNTggKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRSZ2JUb0xyZ2IuanNcbnZhciBmbiQzID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzIDw9IC4wNDA0NSkgcmV0dXJuIGMgLyAxMi45Mjtcblx0cmV0dXJuIChNYXRoLnNpZ24oYykgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbn07XG52YXIgY29udmVydFJnYlRvTHJnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiBmbiQzKHIpLFxuXHRcdGc6IGZuJDMoZyksXG5cdFx0YjogZm4kMyhiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0UmdiVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDEyMzkwNzk5MjY1OTU5MyAqIHIgKyAuMzU3NTg0MzM5MzgzODc4ICogZyArIC4xODA0ODA3ODg0MDE4MzQzICogYixcblx0XHR5OiAuMjEyNjM5MDA1ODcxNTEwMiAqIHIgKyAuNzE1MTY4Njc4NzY3NzU2ICogZyArIC4wNzIxOTIzMTUzNjA3MzM3ICogYixcblx0XHR6OiAuMDE5MzMwODE4NzE1NTkxOCAqIHIgKyAuMTE5MTk0Nzc5Nzk0NjI2ICogZyArIC45NTA1MzIxNTIyNDk2NjA3ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRMcmdiVG9SZ2IuanNcbnZhciBmbiQyID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzID4gLjAwMzEzMDgpIHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogKDEuMDU1ICogTWF0aC5wb3coYWJzLCAxIC8gMi40KSAtIC4wNTUpO1xuXHRyZXR1cm4gYyAqIDEyLjkyO1xufTtcbnZhciBjb252ZXJ0THJnYlRvUmdiID0gKHsgciwgZywgYiwgYWxwaGEgfSwgbW9kZSA9IFwicmdiXCIpID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdHI6IGZuJDIociksXG5cdFx0ZzogZm4kMihnKSxcblx0XHRiOiBmbiQyKGIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnZlcnRYeXo2NVRvUmdiLmpzXG52YXIgY29udmVydFh5ejY1VG9SZ2IgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiB4ICogMy4yNDA5Njk5NDE5MDQ1MjI2IC0geSAqIDEuNTM3MzgzMTc3NTcwMDk0IC0gLjQ5ODYxMDc2MDI5MzAwMzQgKiB6LFxuXHRcdGc6IHggKiAtLjk2OTI0MzYzNjI4MDg3OTYgKyB5ICogMS44NzU5Njc1MDE1MDc3MjA0ICsgLjA0MTU1NTA1NzQwNzE3NTYgKiB6LFxuXHRcdGI6IHggKiAuMDU1NjMwMDc5Njk2OTkzNiAtIHkgKiAuMjAzOTc2OTU4ODg4OTc2NSArIDEuMDU2OTcxNTE0MjQyODc4NCAqIHpcblx0fSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJhOThcIixcblx0cGFyc2U6IFtcImE5OC1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJhOTgtcmdiXCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvQTk4KGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvQTk4XG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0QTk4VG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0QTk4VG9YeXo2NVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL25vcm1hbGl6ZUh1ZS5qc1xudmFyIG5vcm1hbGl6ZUh1ZSA9IChodWUpID0+IChodWUgPSBodWUgJSAzNjApIDwgMCA/IGh1ZSArIDM2MCA6IGh1ZTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvaHVlLmpzXG52YXIgaHVlID0gKGh1ZXMsIGZuKSA9PiB7XG5cdHJldHVybiBodWVzLm1hcCgoaHVlLCBpZHgsIGFycikgPT4ge1xuXHRcdGlmIChodWUgPT09IHZvaWQgMCkgcmV0dXJuIGh1ZTtcblx0XHRsZXQgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUh1ZShodWUpO1xuXHRcdGlmIChpZHggPT09IDAgfHwgaHVlc1tpZHggLSAxXSA9PT0gdm9pZCAwKSByZXR1cm4gbm9ybWFsaXplZDtcblx0XHRyZXR1cm4gZm4obm9ybWFsaXplZCAtIG5vcm1hbGl6ZUh1ZShhcnJbaWR4IC0gMV0pKTtcblx0fSkucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcblx0XHRpZiAoIWFjYy5sZW5ndGggfHwgY3VyciA9PT0gdm9pZCAwIHx8IGFjY1thY2MubGVuZ3RoIC0gMV0gPT09IHZvaWQgMCkge1xuXHRcdFx0YWNjLnB1c2goY3Vycik7XG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH1cblx0XHRhY2MucHVzaChjdXJyICsgYWNjW2FjYy5sZW5ndGggLSAxXSk7XG5cdFx0cmV0dXJuIGFjYztcblx0fSwgW10pO1xufTtcbnZhciBmaXh1cEh1ZVNob3J0ZXIgPSAoYXJyKSA9PiBodWUoYXJyLCAoZCkgPT4gTWF0aC5hYnMoZCkgPD0gMTgwID8gZCA6IGQgLSAzNjAgKiBNYXRoLnNpZ24oZCkpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29uc3RhbnRzLmpzXG52YXIgTSA9IFtcblx0LS4xNDg2MSxcblx0MS43ODI3Nyxcblx0LS4yOTIyNyxcblx0LS45MDY0OSxcblx0MS45NzI5NCxcblx0MFxuXTtcbnZhciBkZWdUb1JhZCA9IE1hdGguUEkgLyAxODA7XG52YXIgcmFkVG9EZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydFJnYlRvQ3ViZWhlbGl4LmpzXG52YXIgREUgPSBNWzNdICogTVs0XTtcbnZhciBCRSA9IE1bMV0gKiBNWzRdO1xudmFyIEJDQUQgPSBNWzFdICogTVsyXSAtIE1bMF0gKiBNWzNdO1xudmFyIGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGwgPSAoQkNBRCAqIGIgKyByICogREUgLSBnICogQkUpIC8gKEJDQUQgKyBERSAtIEJFKTtcblx0bGV0IHggPSBiIC0gbDtcblx0bGV0IHkgPSAoTVs0XSAqIChnIC0gbCkgLSBNWzJdICogeCkgLyBNWzNdO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdFx0bCxcblx0XHRzOiBsID09PSAwIHx8IGwgPT09IDEgPyB2b2lkIDAgOiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgLyAoTVs0XSAqIGwgKiAoMSAtIGwpKVxuXHR9O1xuXHRpZiAocmVzLnMpIHJlcy5oID0gTWF0aC5hdGFuMih5LCB4KSAqIHJhZFRvRGVnIC0gMTIwO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydEN1YmVoZWxpeFRvUmdiLmpzXG52YXIgY29udmVydEN1YmVoZWxpeFRvUmdiID0gKHsgaCwgcywgbCwgYWxwaGEgfSkgPT4ge1xuXHRsZXQgcmVzID0geyBtb2RlOiBcInJnYlwiIH07XG5cdGggPSAoaCA9PT0gdm9pZCAwID8gMCA6IGggKyAxMjApICogZGVnVG9SYWQ7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRsZXQgYW1wID0gcyA9PT0gdm9pZCAwID8gMCA6IHMgKiBsICogKDEgLSBsKTtcblx0bGV0IGNvc2ggPSBNYXRoLmNvcyhoKTtcblx0bGV0IHNpbmggPSBNYXRoLnNpbihoKTtcblx0cmVzLnIgPSBsICsgYW1wICogKE1bMF0gKiBjb3NoICsgTVsxXSAqIHNpbmgpO1xuXHRyZXMuZyA9IGwgKyBhbXAgKiAoTVsyXSAqIGNvc2ggKyBNWzNdICogc2luaCk7XG5cdHJlcy5iID0gbCArIGFtcCAqIChNWzRdICogY29zaCArIE1bNV0gKiBzaW5oKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGlmZmVyZW5jZS5qc1xudmFyIGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5zIHx8ICFzbXAucykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLnMgKiBzbXAucykgKiBkSDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZU5haXZlID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDApIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRpZiAoTWF0aC5hYnMoc21wX2ggLSBzdGRfaCkgPiAxODApIHJldHVybiBzdGRfaCAtIChzbXBfaCAtIDM2MCAqIE1hdGguc2lnbihzbXBfaCAtIHN0ZF9oKSk7XG5cdHJldHVybiBzbXBfaCAtIHN0ZF9oO1xufTtcbnZhciBkaWZmZXJlbmNlSHVlQ2hyb21hID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5jIHx8ICFzbXAuYykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLmMgKiBzbXAuYykgKiBkSDtcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2F2ZXJhZ2UuanNcbnZhciBhdmVyYWdlQW5nbGUgPSAodmFsKSA9PiB7XG5cdGxldCBzdW0gPSB2YWwucmVkdWNlKChzdW0sIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwgIT09IHZvaWQgMCkge1xuXHRcdFx0bGV0IHJhZCA9IHZhbCAqIE1hdGguUEkgLyAxODA7XG5cdFx0XHRzdW0uc2luICs9IE1hdGguc2luKHJhZCk7XG5cdFx0XHRzdW0uY29zICs9IE1hdGguY29zKHJhZCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdW07XG5cdH0sIHtcblx0XHRzaW46IDAsXG5cdFx0Y29zOiAwXG5cdH0pO1xuXHRsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHN1bS5zaW4sIHN1bS5jb3MpICogMTgwIC8gTWF0aC5QSTtcblx0cmV0dXJuIGFuZ2xlIDwgMCA/IDM2MCArIGFuZ2xlIDogYW5nbGU7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjUgPSB7XG5cdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWN1YmVoZWxpeFwiXSxcblx0c2VyaWFsaXplOiBcIi0tY3ViZWhlbGl4XCIsXG5cdHJhbmdlczoge1xuXHRcdGg6IFswLCAzNjBdLFxuXHRcdHM6IFswLCA0LjYxNF0sXG5cdFx0bDogWzAsIDFdXG5cdH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvQ3ViZWhlbGl4IH0sXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRDdWJlaGVsaXhUb1JnYiB9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExhYlRvTGNoLmpzXG52YXIgY29udmVydExhYlRvTGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSwgbW9kZSA9IFwibGNoXCIpID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdGwsXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExjaFRvTGFiLmpzXG52YXIgY29udmVydExjaFRvTGFiID0gKHsgbCwgYywgaCwgYWxwaGEgfSwgbW9kZSA9IFwibGFiXCIpID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGE6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHRiOiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29uc3RhbnRzLmpzXG52YXIgayQyID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSQyID0gTWF0aC5wb3coNiwgMykgLyBNYXRoLnBvdygyOSwgMyk7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnN0YW50cy5qc1xudmFyIEQ1MCA9IHtcblx0WDogLjM0NTcgLyAuMzU4NSxcblx0WTogMSxcblx0WjogLjI5NTggLyAuMzU4NVxufTtcbnZhciBENjUgPSB7XG5cdFg6IC4zMTI3IC8gLjMyOSxcblx0WTogMSxcblx0WjogLjM1ODMgLyAuMzI5XG59O1xudmFyIGskMSA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1h5ejY1LmpzXG52YXIgZm4kMSA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUkMiA/IE1hdGgucG93KHYsIDMpIDogKDExNiAqIHYgLSAxNikgLyBrJDI7XG52YXIgY29udmVydExhYjY1VG9YeXo2NSA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiBmbiQxKGZ4KSAqIEQ2NS5YLFxuXHRcdHk6IGZuJDEoZnkpICogRDY1LlksXG5cdFx0ejogZm4kMShmeikgKiBENjUuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWI2NVRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydExhYjY1VG9YeXo2NShsYWIpKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFh5ejY1VG9MYWI2NS5qc1xudmFyIGYkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlJDIgPyBNYXRoLmNicnQodmFsdWUpIDogKGskMiAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo2NVRvTGFiNjUgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYkMSh4IC8gRDY1LlgpO1xuXHRsZXQgZjEgPSBmJDEoeSAvIEQ2NS5ZKTtcblx0bGV0IGYyID0gZiQxKHogLyBENjUuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IDExNiAqIGYxIC0gMTYsXG5cdFx0YTogNTAwICogKGYwIC0gZjEpLFxuXHRcdGI6IDIwMCAqIChmMSAtIGYyKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0UmdiVG9MYWI2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYjY1ID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9MYWI2NShjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb25zdGFudHMuanNcbnZhciDOuCA9IDI2IC8gMTgwICogTWF0aC5QSTtcbnZhciBjb3POuCA9IE1hdGguY29zKM64KTtcbnZhciBzaW7OuCA9IE1hdGguc2luKM64KTtcbnZhciBmYWN0b3IgPSAxMDAgLyBNYXRoLmxvZygxMzkgLyAxMDApO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2NvbnZlcnREbGNoVG9MYWI2NS5qc1xudmFyIGNvbnZlcnREbGNoVG9MYWI2NSA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChjID09PSB2b2lkIDApIGMgPSAwO1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxhYjY1XCIsXG5cdFx0bDogKE1hdGguZXhwKGwgKiAxIC8gZmFjdG9yKSAtIDEpIC8gLjAwMzlcblx0fTtcblx0bGV0IEcgPSAoTWF0aC5leHAoLjA0MzUgKiBjICogMSAqIDEpIC0gMSkgLyAuMDc1O1xuXHRsZXQgZSA9IEcgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSAtIM64KTtcblx0bGV0IGYgPSBHICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdHJlcy5hID0gZSAqIGNvc864IC0gZiAvIC44MyAqIHNpbs64O1xuXHRyZXMuYiA9IGUgKiBzaW7OuCArIGYgLyAuODMgKiBjb3POuDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0TGFiNjVUb0RsY2guanNcbnZhciBjb252ZXJ0TGFiNjVUb0RsY2ggPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBlID0gYSAqIGNvc864ICsgYiAqIHNpbs64O1xuXHRsZXQgZiA9IC44MyAqIChiICogY29zzrggLSBhICogc2luzrgpO1xuXHRsZXQgRyA9IE1hdGguc3FydChlICogZSArIGYgKiBmKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImRsY2hcIixcblx0XHRsOiBmYWN0b3IgLyAxICogTWF0aC5sb2coMSArIC4wMDM5ICogbCksXG5cdFx0YzogTWF0aC5sb2coMSArIC4wNzUgKiBHKSAvICguMDQzNSAqIDEgKiAxKVxuXHR9O1xuXHRpZiAocmVzLmMpIHJlcy5oID0gbm9ybWFsaXplSHVlKChNYXRoLmF0YW4yKGYsIGUpICsgzrgpIC8gTWF0aC5QSSAqIDE4MCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnREbGFiVG9MYWI2NSA9IChjKSA9PiBjb252ZXJ0RGxjaFRvTGFiNjUoY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSk7XG52YXIgY29udmVydExhYjY1VG9EbGFiID0gKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjb252ZXJ0TGFiNjVUb0RsY2goYyksIFwiZGxhYlwiKTtcbnZhciBkZWZpbml0aW9uJDI0ID0ge1xuXHRtb2RlOiBcImRsYWJcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxhYlwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsYWJUb0xhYjY1LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGFiVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxhYihjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy00MC4wOSwgNDUuNTAxXSxcblx0XHRiOiBbLTQwLjQ2OSwgNDQuMzQ0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIzID0ge1xuXHRtb2RlOiBcImRsY2hcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxjaFwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsY2hUb0xhYjY1LFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJkbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGNoVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGNoLFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJkbGNoXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxjaChjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDUxLjQ4NF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydEhzaVRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNpVG9SZ2IoeyBoLCBzLCBpLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxIC0gcyksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRcdGI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzaS9jb252ZXJ0UmdiVG9Ic2kuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzaSh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNpXCIsXG5cdFx0czogciArIGcgKyBiID09PSAwID8gMCA6IDEgLSAzICogbSAvIChyICsgZyArIGIpLFxuXHRcdGk6IChyICsgZyArIGIpIC8gM1xuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjIgPSB7XG5cdG1vZGU6IFwiaHNpXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2lUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc2lcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzaVwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzaSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwiaVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0SHNsVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRIc2xUb1JnYih7IGgsIHMsIGwsIGFscGhhIH0pIHtcblx0aCA9IG5vcm1hbGl6ZUh1ZShoICE9PSB2b2lkIDAgPyBoIDogMCk7XG5cdGlmIChzID09PSB2b2lkIDApIHMgPSAwO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IG0xID0gbCArIHMgKiAobCA8IC41ID8gbCA6IDEgLSBsKTtcblx0bGV0IG0yID0gbTEgLSAobTEgLSBsKSAqIDIgKiBNYXRoLmFicyhoIC8gNjAgJSAyIC0gMSk7XG5cdGxldCByZXM7XG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoIC8gNjApKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiBtMSxcblx0XHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiAyICogbCAtIG0xLFxuXHRcdFx0XHRnOiBtMixcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogcmVzID0ge1xuXHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0fTtcblx0fVxuXHRyZXMubW9kZSA9IFwicmdiXCI7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL2NvbnZlcnRSZ2JUb0hzbC5qc1xuZnVuY3Rpb24gY29udmVydFJnYlRvSHNsKHsgciwgZywgYiwgYWxwaGEgfSkge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTSA9IE1hdGgubWF4KHIsIGcsIGIpLCBtID0gTWF0aC5taW4ociwgZywgYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJoc2xcIixcblx0XHRzOiBNID09PSBtID8gMCA6IChNIC0gbSkgLyAoMSAtIE1hdGguYWJzKE0gKyBtIC0gMSkpLFxuXHRcdGw6IC41ICogKE0gKyBtKVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL2h1ZS5qc1xudmFyIGh1ZVRvRGVnID0gKHZhbCwgdW5pdCkgPT4ge1xuXHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRjYXNlIFwiZGVnXCI6IHJldHVybiArdmFsO1xuXHRcdGNhc2UgXCJyYWRcIjogcmV0dXJuIHZhbCAvIE1hdGguUEkgKiAxODA7XG5cdFx0Y2FzZSBcImdyYWRcIjogcmV0dXJuIHZhbCAvIDEwICogOTtcblx0XHRjYXNlIFwidHVyblwiOiByZXR1cm4gdmFsICogMzYwO1xuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvcGFyc2VIc2xMZWdhY3kuanNcbnZhciBoc2xfb2xkID0gbmV3IFJlZ0V4cChgXmhzbGE/XFxcXChcXFxccyoke2h1ZSQxfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlSHNsTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaCA9IGNvbG9yLm1hdGNoKGhzbF9vbGQpO1xuXHRpZiAoIW1hdGNoKSByZXR1cm47XG5cdGxldCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5oID0gK21hdGNoWzNdO1xuXHRlbHNlIGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwICYmIG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5oID0gaHVlVG9EZWcobWF0Y2hbMV0sIG1hdGNoWzJdKTtcblx0aWYgKG1hdGNoWzRdICE9PSB2b2lkIDApIHJlcy5zID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNF0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzVdICE9PSB2b2lkIDApIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNV0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzZdICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG1hdGNoWzZdIC8gMTAwKSk7XG5cdGVsc2UgaWYgKG1hdGNoWzddICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICttYXRjaFs3XSkpO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsLmpzXG5mdW5jdGlvbiBwYXJzZUhzbChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJoc2xcIiAmJiBwYXJzZWRbMF0gIT09IFwiaHNsYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJoc2xcIiB9O1xuXHRjb25zdCBbLCBoLCBzLCBsLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAocy50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLnMgPSBzLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5sID0gbC52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMSA9IHtcblx0bW9kZTogXCJoc2xcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEhzbFRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHNsIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtwYXJzZUhzbCwgcGFyc2VIc2xMZWdhY3ldLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgaHNsKCR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0gJHtjLnMgIT09IHZvaWQgMCA/IGMucyAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9ICR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydEhzdlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHN2VG9SZ2IoeyBoLCBzLCB2LCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYsXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzdi9jb252ZXJ0UmdiVG9Ic3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzdih7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHN2XCIsXG5cdFx0czogTSA9PT0gMCA/IDAgOiAxIC0gbSAvIE0sXG5cdFx0djogTVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjAgPSB7XG5cdG1vZGU6IFwiaHN2XCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc3ZUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzdlwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzdiB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwidlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0SHdiVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRId2JUb1JnYih7IGgsIHcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHcgPT09IHZvaWQgMCkgdyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRpZiAodyArIGIgPiAxKSB7XG5cdFx0bGV0IHMgPSB3ICsgYjtcblx0XHR3IC89IHM7XG5cdFx0YiAvPSBzO1xuXHR9XG5cdHJldHVybiBjb252ZXJ0SHN2VG9SZ2Ioe1xuXHRcdGgsXG5cdFx0czogYiA9PT0gMSA/IDEgOiAxIC0gdyAvICgxIC0gYiksXG5cdFx0djogMSAtIGIsXG5cdFx0YWxwaGFcblx0fSk7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0UmdiVG9Id2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0h3YihyZ2JhKSB7XG5cdGxldCBoc3YgPSBjb252ZXJ0UmdiVG9Ic3YocmdiYSk7XG5cdGlmIChoc3YgPT09IHZvaWQgMCkgcmV0dXJuIHZvaWQgMDtcblx0bGV0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRsZXQgdiA9IGhzdi52ICE9PSB2b2lkIDAgPyBoc3YudiA6IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJod2JcIixcblx0XHR3OiAoMSAtIHMpICogdixcblx0XHRiOiAxIC0gdlxuXHR9O1xuXHRpZiAoaHN2LmggIT09IHZvaWQgMCkgcmVzLmggPSBoc3YuaDtcblx0aWYgKGhzdi5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBoc3YuYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9wYXJzZUh3Yi5qc1xuZnVuY3Rpb24gUGFyc2VId2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHdiXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImh3YlwiIH07XG5cdGNvbnN0IFssIGgsIHcsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAody50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmICh3LnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMudyA9IHcudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGIudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmIgPSBiLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE5ID0ge1xuXHRtb2RlOiBcImh3YlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Id2IgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcIndcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRwYXJzZTogW1BhcnNlSHdiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGh3Yigke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy53ICE9PSB2b2lkIDAgPyBjLncgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZU5haXZlIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hkci90cmFuc2Zlci5qc1xudmFyIE0xID0gLjE1OTMwMTc1NzgxMjU7XG52YXIgTTIgPSA3OC44NDM3NTtcbnZhciBDMSA9IC44MzU5Mzc1O1xudmFyIEMyID0gMTguODUxNTYyNTtcbnZhciBDMyA9IDE4LjY4NzU7XG5mdW5jdGlvbiB0cmFuc2ZlclBxRGVjb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYsIDEgLyBNMik7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdyhNYXRoLm1heCgwLCBjIC0gQzEpIC8gKEMyIC0gQzMgKiBjKSwgMSAvIE0xKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZmVyUHFFbmNvZGUodikge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRjb25zdCBjID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiBjKSAvICgxICsgQzMgKiBjKSwgTTIpO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvY29udmVydEl0cFRvWHl6NjUuanNcbnZhciB0b1JlbCA9IChjKSA9PiBNYXRoLm1heChjIC8gMjAzLCAwKTtcbnZhciBjb252ZXJ0SXRwVG9YeXo2NSA9ICh7IGksIHQsIHAsIGFscGhhIH0pID0+IHtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmICh0ID09PSB2b2lkIDApIHQgPSAwO1xuXHRpZiAocCA9PT0gdm9pZCAwKSBwID0gMDtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFEZWNvZGUoaSArIC4wMDg2MDkwMzcwMzc5MzI3NjEgKiB0ICsgLjExMTAyOTYyNTAwMzAyNTkzICogcCk7XG5cdGNvbnN0IG0gPSB0cmFuc2ZlclBxRGVjb2RlKGkgLSAuMDA4NjA5MDM3MDM3OTMyNzUgKiB0IC0gLjExMTAyOTYyNTAwMzAyNTk5ICogcCk7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuNTYwMDMxMzM1NzEwNjc5MSAqIHQgLSAuMzIwNjI3MTc0OTg3MzE4ODUgKiBwKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiB0b1JlbCgyLjA3MDE1MjIxODM4OTQyMiAqIGwgLSAxLjMyNjM0NzMzODk2NzE1NTYgKiBtICsgLjIwNjY1MTA0NzYyOTQwNTEgKiBzKSxcblx0XHR5OiB0b1JlbCguMzY0NzM4NTIwOTc0ODA3NCAqIGwgKyAuNjgwNTY2MDI0OTQ3MjI3ICogbSAtIC4wNDUzMDQ1NDU5MjIwMzQ2ICogcyksXG5cdFx0ejogdG9SZWwoLS4wNDk3NDcyMDc1MzU4MTIgKiBsIC0gLjA0OTI2MDk2NjY5NjYxMzggKiBtICsgMS4xODgwNjU5MjQ5OTIzMDQyICogcylcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRYeXo2NVRvSXRwLmpzXG52YXIgdG9BYnMgPSAoYyA9IDApID0+IE1hdGgubWF4KGMgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSXRwID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRjb25zdCBhYnNYID0gdG9BYnMoeCk7XG5cdGNvbnN0IGFic1kgPSB0b0Ficyh5KTtcblx0Y29uc3QgYWJzWiA9IHRvQWJzKHopO1xuXHRjb25zdCBsID0gdHJhbnNmZXJQcUVuY29kZSguMzU5MjgzMjU5MDEyMTIxNyAqIGFic1ggKyAuNjk3NjA1MTE0Nzc3OTUwMiAqIGFic1kgLSAuMDM1ODkxNTkzMjMyMDI4OSAqIGFic1opO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcUVuY29kZSgtLjE5MjA4MDg0NjM3MDQ5OTUgKiBhYnNYICsgMS4xMDA0NzY3OTcwMzc0MzIzICogYWJzWSArIC4wNzUzNzQ4NjU4NTE5MTE4ICogYWJzWik7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRW5jb2RlKC4wMDcwNzk3ODQ0NjA3NDc3ICogYWJzWCArIC4wNzQ4Mzk2NjYyMTg2MzY2ICogYWJzWSArIC44NDMzMjY1NDUzODk4NzY1ICogYWJzWik7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcIml0cFwiLFxuXHRcdGk6IC41ICogbCArIC41ICogbSxcblx0XHR0OiAxLjYxMzc2OTUzMTI1ICogbCAtIDMuMzIzNDg2MzI4MTI1ICogbSArIDEuNzA5NzE2Nzk2ODc1ICogcyxcblx0XHRwOiA0LjM3ODE3MzgyODEyNSAqIGwgLSA0LjI0NTYwNTQ2ODc1ICogbSAtIC4xMzI1NjgzNTkzNzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOCA9IHtcblx0bW9kZTogXCJpdHBcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImlcIixcblx0XHRcInRcIixcblx0XHRcInBcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0taWN0Y3BcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWljdGNwXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0SXRwVG9YeXo2NSxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEl0cFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0l0cCxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9JdHAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbMCwgLjU4MV0sXG5cdFx0dDogWy0uMzY5LCAuMjcyXSxcblx0XHRwOiBbLS4xNjQsIC4zMzFdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHQ6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRwOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0WHl6NjVUb0phYi5qc1xudmFyIHAkMSA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCQxID0gMTYyOTU0OTk1MzI4MjE1NjVlLTI3O1xudmFyIGphYlBxRW5jb2RlID0gKHYpID0+IHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0bGV0IHZuID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiB2bikgLyAoMSArIEMzICogdm4pLCBwJDEpO1xufTtcbnZhciBhYnMgPSAodiA9IDApID0+IE1hdGgubWF4KHYgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSmFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHR4ID0gYWJzKHgpO1xuXHR5ID0gYWJzKHkpO1xuXHR6ID0gYWJzKHopO1xuXHRsZXQgeHAgPSAxLjE1ICogeCAtIC4xNSAqIHo7XG5cdGxldCB5cCA9IC42NiAqIHkgKyAuMzQgKiB4O1xuXHRsZXQgbCA9IGphYlBxRW5jb2RlKC40MTQ3ODk3MiAqIHhwICsgLjU3OTk5OSAqIHlwICsgLjAxNDY0OCAqIHopO1xuXHRsZXQgbSA9IGphYlBxRW5jb2RlKC0uMjAxNTEgKiB4cCArIDEuMTIwNjQ5ICogeXAgKyAuMDUzMTAwOCAqIHopO1xuXHRsZXQgcyA9IGphYlBxRW5jb2RlKC0uMDE2NjAwOCAqIHhwICsgLjI2NDggKiB5cCArIC42Njg0Nzk5ICogeik7XG5cdGxldCBpID0gKGwgKyBtKSAvIDI7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJqYWJcIixcblx0XHRqOiAuNDQgKiBpIC8gKDEgLSAuNTYgKiBpKSAtIGQwJDEsXG5cdFx0YTogMy41MjQgKiBsIC0gNC4wNjY3MDggKiBtICsgLjU0MjcwOCAqIHMsXG5cdFx0YjogLjE5OTA3NiAqIGwgKyAxLjA5Njc5OSAqIG0gLSAxLjI5NTg3NSAqIHNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1h5ejY1LmpzXG52YXIgcCA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcURlY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2cCA9IE1hdGgucG93KHYsIDEgLyBwKTtcblx0cmV0dXJuIDFlNCAqIE1hdGgucG93KChDMSAtIHZwKSAvIChDMyAqIHZwIC0gQzIpLCAxIC8gTTEpO1xufTtcbnZhciByZWwgPSAodikgPT4gdiAvIDIwMztcbnZhciBjb252ZXJ0SmFiVG9YeXo2NSA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGogPT09IHZvaWQgMCkgaiA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGkgPSAoaiArIGQwKSAvICguNDQgKyAuNTYgKiAoaiArIGQwKSk7XG5cdGxldCBsID0gamFiUHFEZWNvZGUoaSArIC4xMzg2MDUwNCAqIGEgKyAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBtID0gamFiUHFEZWNvZGUoaSAtIC4xMzg2MDUwNCAqIGEgLSAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBzID0gamFiUHFEZWNvZGUoaSAtIC4wOTYwMTkyNDIgKiBhIC0gLjgxMTg5MTkgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogcmVsKDEuNjYxMzczMDI0NjUyMTc0ICogbCAtIC45MTQ1MjMwODEzMDQzNDggKiBtICsgLjIzMTM2MjA4MTczOTEzMDQ1ICogcyksXG5cdFx0eTogcmVsKC0uMzI1MDc1ODYxMTg0NDUzMyAqIGwgKyAxLjU3MTg0NzAyNjczMjU0MyAqIG0gLSAuMjE4MjUzODM0NTMyMjc5MjggKiBzKSxcblx0XHR6OiByZWwoLS4wOTA5ODI4MTEgKiBsIC0gLjMxMjcyODI5ICogbSArIDEuNTIyNzY2NiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0UmdiVG9KYWIuanNcbnZhciBjb252ZXJ0UmdiVG9KYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NjVUb0phYihjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRKYWJUb1JnYiA9IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEphYlRvWHl6NjUoY29sb3IpKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE3ID0ge1xuXHRtb2RlOiBcImphYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1qemF6YnpcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWp6YXpielwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvSmFiLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0phYlxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRKYWJUb1JnYixcblx0XHR4eXo2NTogY29udmVydEphYlRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjJdLFxuXHRcdGE6IFstLjEwOSwgLjEyOV0sXG5cdFx0YjogWy0uMTg1LCAuMTM0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEphYlRvSmNoLmpzXG52YXIgY29udmVydEphYlRvSmNoID0gKHsgaiwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamNoXCIsXG5cdFx0aixcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9jb252ZXJ0SmNoVG9KYWIuanNcbnZhciBjb252ZXJ0SmNoVG9KYWIgPSAoeyBqLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0aixcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNiA9IHtcblx0bW9kZTogXCJqY2hcIixcblx0cGFyc2U6IFtcIi0tanpjemh6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemN6aHpcIixcblx0dG9Nb2RlOiB7XG5cdFx0amFiOiBjb252ZXJ0SmNoVG9KYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvUmdiKGNvbnZlcnRKY2hUb0phYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0SmFiVG9KY2goY29udmVydFJnYlRvSmFiKGMpKSxcblx0XHRqYWI6IGNvbnZlcnRKYWJUb0pjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRqOiBbMCwgLjIyMV0sXG5cdFx0YzogWzAsIC4xOV0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb25zdGFudHMuanNcbnZhciBrID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvWHl6NTAuanNcbnZhciBmbiA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gaztcbnZhciBjb252ZXJ0TGFiVG9YeXo1MCA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiBmbihmeCkgKiBENTAuWCxcblx0XHR5OiBmbihmeSkgKiBENTAuWSxcblx0XHR6OiBmbihmeikgKiBENTAuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0WHl6NTBUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo1MFRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMTM0MTM1OTU2OTk1ODcwNyAtIHkgKiAxLjYxNzM4NjMzMjE2MTI1MzggLSAuNDkwNjYxOTQ2MDA4MzUzMiAqIHosXG5cdFx0ZzogeCAqIC0uOTc4Nzk1NTAyOTEyMDg5ICsgeSAqIDEuOTE2MjU0NTY3MjU5NTI0ICsgLjAzMzQ0MjczMTE2MTMxOTQ5ICogeixcblx0XHRiOiB4ICogLjA3MTk1NTM3OTg4NDExNjc3IC0geSAqIC4yMjg5NzY4MjY0MTU4MzIyICsgMS40MDUzODYwNTgzMjQxMjUgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvUmdiLmpzXG52YXIgY29udmVydExhYlRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejUwVG9SZ2IoY29udmVydExhYlRvWHl6NTAobGFiKSk7XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2NvbnZlcnRSZ2JUb1h5ejUwLmpzXG52YXIgY29udmVydFJnYlRvWHl6NTAgPSAocmdiKSA9PiB7XG5cdGxldCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKHJnYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC40MzYwNjU3NDI4MjQ4MTEgKiByICsgLjM4NTE1MTQ2ODgzMzc5MTIgKiBnICsgLjE0MzA3ODQ1NDQyMjY0MTk3ICogYixcblx0XHR5OiAuMjIyNDkzMTkxNzU2MjM3MDIgKiByICsgLjcxNjg4NzA1MzgyMzg4MjMgKiBnICsgLjA2MDYxOTc5MDUzNjE2NTM3ICogYixcblx0XHR6OiAuMDEzOTIzOTA0NTAwOTQzNDY1ICogciArIC4wOTcwODEyODU2NjU3NDYzNCAqIGcgKyAuNzE0MDk5MzU4NDAwNTE1NSAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRYeXo1MFRvTGFiLmpzXG52YXIgZiA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrICogdmFsdWUgKyAxNikgLyAxMTY7XG52YXIgY29udmVydFh5ejUwVG9MYWIgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYoeCAvIEQ1MC5YKTtcblx0bGV0IGYxID0gZih5IC8gRDUwLlkpO1xuXHRsZXQgZjIgPSBmKHogLyBENTAuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWJcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRSZ2JUb0xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYiA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo1MFRvTGFiKGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpO1xuXHRpZiAocmdiLnIgPT09IHJnYi5iICYmIHJnYi5iID09PSByZ2IuZykgcmVzLmEgPSByZXMuYiA9IDA7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvcGFyc2VMYWIuanNcbmZ1bmN0aW9uIHBhcnNlTGFiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImxhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0aWYgKGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hID0gYS50eXBlID09PSBUb2suTnVtYmVyID8gYS52YWx1ZSA6IGEudmFsdWUgKiAxMjUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNSA9IHtcblx0bW9kZTogXCJsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRMYWJUb1h5ejUwLFxuXHRcdHJnYjogY29udmVydExhYlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTGFiLFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VMYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgbGFiKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmEgIT09IHZvaWQgMCA/IGMuYSA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDE1LFxuXHRtb2RlOiBcImxhYjY1XCIsXG5cdHBhcnNlOiBbXCItLWxhYi1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxhYi1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NjU6IGNvbnZlcnRMYWI2NVRvWHl6NjUsXG5cdFx0cmdiOiBjb252ZXJ0TGFiNjVUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0xhYjY1LFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiNjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy0xMjUsIDEyNV0sXG5cdFx0YjogWy0xMjUsIDEyNV1cblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL3BhcnNlTGNoLmpzXG5mdW5jdGlvbiBwYXJzZUxjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsY2hcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudmFsdWUpLCAxMDApO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogMTUwIC8gMTAwKTtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMyA9IHtcblx0bW9kZTogXCJsY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiOiBjb252ZXJ0TGNoVG9MYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiKGMpKSxcblx0XHRsYWI6IGNvbnZlcnRMYWJUb0xjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlQ2hyb21hIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaDY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEyID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcImxjaDY1XCIsXG5cdHBhcnNlOiBbXCItLWxjaC1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxjaC1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiNjUoYyksIFwibGNoNjVcIiksXG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJsY2g2NVwiKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9jb252ZXJ0THV2VG9MY2h1di5qc1xudmFyIGNvbnZlcnRMdXZUb0xjaHV2ID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGNodXZcIixcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIodiwgdSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydExjaHV2VG9MdXYuanNcbnZhciBjb252ZXJ0TGNodXZUb0x1diA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsdXZcIixcblx0XHRsLFxuXHRcdHU6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHR2OiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRYeXo1MFRvTHV2LmpzXG52YXIgdV9mbiQxID0gKHgsIHksIHopID0+IDQgKiB4IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdl9mbiQxID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4kMSA9IHVfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciB2biQxID0gdl9mbiQxKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGxfZm4gPSAodmFsdWUpID0+IHZhbHVlIDw9IGUgPyBrICogdmFsdWUgOiAxMTYgKiBNYXRoLmNicnQodmFsdWUpIC0gMTY7XG52YXIgY29udmVydFh5ejUwVG9MdXYgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBsID0gbF9mbih5IC8gRDUwLlkpO1xuXHRsZXQgdSA9IHVfZm4kMSh4LCB5LCB6KTtcblx0bGV0IHYgPSB2X2ZuJDEoeCwgeSwgeik7XG5cdGlmICghaXNGaW5pdGUodSkgfHwgIWlzRmluaXRlKHYpKSBsID0gdSA9IHYgPSAwO1xuXHRlbHNlIHtcblx0XHR1ID0gMTMgKiBsICogKHUgLSB1biQxKTtcblx0XHR2ID0gMTMgKiBsICogKHYgLSB2biQxKTtcblx0fVxuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1LFxuXHRcdHZcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRMdXZUb1h5ejUwLmpzXG52YXIgdV9mbiA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4gPSAoeCwgeSwgeikgPT4gOSAqIHkgLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB1biA9IHVfZm4oRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4gPSB2X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGNvbnZlcnRMdXZUb1h5ejUwID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGwgPT09IDApIHJldHVybiB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH07XG5cdGlmICh1ID09PSB2b2lkIDApIHUgPSAwO1xuXHRpZiAodiA9PT0gdm9pZCAwKSB2ID0gMDtcblx0bGV0IHVwID0gdSAvICgxMyAqIGwpICsgdW47XG5cdGxldCB2cCA9IHYgLyAoMTMgKiBsKSArIHZuO1xuXHRsZXQgeSA9IEQ1MC5ZICogKGwgPD0gOCA/IGwgLyBrIDogTWF0aC5wb3coKGwgKyAxNikgLyAxMTYsIDMpKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogeSAqICg5ICogdXApIC8gKDQgKiB2cCksXG5cdFx0eSxcblx0XHR6OiB5ICogKDEyIC0gMyAqIHVwIC0gMjAgKiB2cCkgLyAoNCAqIHZwKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9kZWZpbml0aW9uLmpzXG52YXIgY29udmVydFJnYlRvTGNodXYgPSAocmdiKSA9PiBjb252ZXJ0THV2VG9MY2h1dihjb252ZXJ0WHl6NTBUb0x1dihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKSk7XG52YXIgY29udmVydExjaHV2VG9SZ2IgPSAobGNodXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGNvbnZlcnRMY2h1dlRvTHV2KGxjaHV2KSkpO1xudmFyIGRlZmluaXRpb24kMTEgPSB7XG5cdG1vZGU6IFwibGNodXZcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHV2OiBjb252ZXJ0TGNodXZUb0x1dixcblx0XHRyZ2I6IGNvbnZlcnRMY2h1dlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9MY2h1dixcblx0XHRsdXY6IGNvbnZlcnRMdXZUb0xjaHV2XG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWxjaHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2h1dlwiLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTc2Ljk1Nl0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEwID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcImxyZ2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydExyZ2JUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0xyZ2IgfSxcblx0cGFyc2U6IFtcInNyZ2ItbGluZWFyXCJdLFxuXHRzZXJpYWxpemU6IFwic3JnYi1saW5lYXJcIlxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDkgPSB7XG5cdG1vZGU6IFwibHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0THV2VG9YeXo1MCxcblx0XHRyZ2I6IChsdXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGx1dikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTHV2LFxuXHRcdHJnYjogKHJnYikgPT4gY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcInVcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tbHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sdXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0dTogWy04NC45MzYsIDE3NS4wNDJdLFxuXHRcdHY6IFstMTI1Ljg4MiwgODcuMjQzXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR1OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0THJnYlRvT2tsYWIuanNcbnZhciBjb252ZXJ0THJnYlRvT2tsYWIgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBMID0gTWF0aC5jYnJ0KC40MTIyMjE0Njk0NzA3NjMgKiByICsgLjUzNjMzMjUzNzI2MTczNDggKiBnICsgLjA1MTQ0NTk5MzI2NzUwMjIgKiBiKTtcblx0bGV0IE0gPSBNYXRoLmNicnQoLjIxMTkwMzQ5NTgxNzgyNTIgKiByICsgLjY4MDY5OTU1MDY0NTIzNDQgKiBnICsgLjEwNzM5Njk1MzUzNjk0MDYgKiBiKTtcblx0bGV0IFMgPSBNYXRoLmNicnQoLjA4ODMwMjQ1OTE5MDA1NjQgKiByICsgLjI4MTcxODgzOTEzNjEyMTUgKiBnICsgLjYyOTk3ODcwMTY3MzgyMjIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogLjIxMDQ1NDI2ODMwOTMxNCAqIEwgKyAuNzkzNjE3Nzc0NzAyMzA1NCAqIE0gLSAuMDA0MDcyMDQzMDExNjE5MyAqIFMsXG5cdFx0YTogMS45Nzc5OTg1MzI0MzExNjg0ICogTCAtIDIuNDI4NTkyMjQyMDQ4NTggKiBNICsgLjQ1MDU5MzcwOTYxNzQxMSAqIFMsXG5cdFx0YjogLjAyNTkwNDA0MjQ2NTU0NzggKiBMICsgLjc4Mjc3MTcxMjQ1NzUyOTYgKiBNIC0gLjgwODY3NTc1NDkyMzA3NzQgKiBTXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRSZ2JUb09rbGFiLmpzXG52YXIgY29udmVydFJnYlRvT2tsYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvT2tsYWIoY29udmVydFJnYlRvTHJnYihyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9McmdiLmpzXG52YXIgY29udmVydE9rbGFiVG9McmdiID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGgucG93KGwgKyAuMzk2MzM3Nzc3Mzc2MTc0OSAqIGEgKyAuMjE1ODAzNzU3MzA5OTEzNiAqIGIsIDMpO1xuXHRsZXQgTSA9IE1hdGgucG93KGwgLSAuMTA1NTYxMzQ1ODE1NjU4NiAqIGEgLSAuMDYzODU0MTcyODI1ODEzMyAqIGIsIDMpO1xuXHRsZXQgUyA9IE1hdGgucG93KGwgLSAuMDg5NDg0MTc3NTI5ODExOSAqIGEgLSAxLjI5MTQ4NTU0ODAxOTQwOTIgKiBiLCAzKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiA0LjA3Njc0MTYzNjA3NTk1NyAqIEwgLSAzLjMwNzcxMTUzOTI1ODA2MTYgKiBNICsgLjIzMDk2OTkwMzE4MjEwNDQgKiBTLFxuXHRcdGc6IC0xLjI2ODQzNzk3MzI4NTAzMTcgKiBMICsgMi42MDk3NTczNDkyODc2ODg3ICogTSAtIC4zNDEzMTkzNzYwMDI2NTczICogUyxcblx0XHRiOiAtLjAwNDE5NjA3NjEzODY3NTYgKiBMIC0gLjcwMzQxODYxNzkzNTkzNjIgKiBNICsgMS43MDc2MTQ2OTQwNzQ2MTE3ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0T2tsYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvUmdiID0gKGMpID0+IGNvbnZlcnRMcmdiVG9SZ2IoY29udmVydE9rbGFiVG9McmdiKGMpKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvaGVscGVycy5qc1xuZnVuY3Rpb24gdG9lKHgpIHtcblx0Y29uc3Qga18xID0gLjIwNjtcblx0Y29uc3Qga18yID0gLjAzO1xuXHRjb25zdCBrXzMgPSAxLjIwNiAvIDEuMDM7XG5cdHJldHVybiAuNSAqIChrXzMgKiB4IC0ga18xICsgTWF0aC5zcXJ0KChrXzMgKiB4IC0ga18xKSAqIChrXzMgKiB4IC0ga18xKSArIDQgKiBrXzIgKiBrXzMgKiB4KSk7XG59XG5mdW5jdGlvbiB0b2VfaW52KHgpIHtcblx0cmV0dXJuICh4ICogeCArIC4yMDYgKiB4KSAvICgxLjIwNiAvIDEuMDMgKiAoeCArIC4wMykpO1xufVxuZnVuY3Rpb24gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKSB7XG5cdGxldCBrMCwgazEsIGsyLCBrMywgazQsIHdsLCB3bSwgd3M7XG5cdGlmICgtMS44ODE3MDMyOCAqIGEgLSAuODA5MzY0OTMgKiBiID4gMSkge1xuXHRcdGswID0gMS4xOTA4NjI3Nztcblx0XHRrMSA9IDEuNzY1NzY3Mjg7XG5cdFx0azIgPSAuNTk2NjI2NDE7XG5cdFx0azMgPSAuNzU1MTUxOTc7XG5cdFx0azQgPSAuNTY3NzEyNDU7XG5cdFx0d2wgPSA0LjA3Njc0MTY2MjE7XG5cdFx0d20gPSAtMy4zMDc3MTE1OTEzO1xuXHRcdHdzID0gLjIzMDk2OTkyOTI7XG5cdH0gZWxzZSBpZiAoMS44MTQ0NDEwNCAqIGEgLSAxLjE5NDQ1Mjc2ICogYiA+IDEpIHtcblx0XHRrMCA9IC43Mzk1NjUxNTtcblx0XHRrMSA9IC0uNDU5NTQ0MDQ7XG5cdFx0azIgPSAuMDgyODU0Mjc7XG5cdFx0azMgPSAuMTI1NDEwNztcblx0XHRrNCA9IC4xNDUwMzIwNDtcblx0XHR3bCA9IC0xLjI2ODQzODAwNDY7XG5cdFx0d20gPSAyLjYwOTc1NzQwMTE7XG5cdFx0d3MgPSAtLjM0MTMxOTM5NjU7XG5cdH0gZWxzZSB7XG5cdFx0azAgPSAxLjM1NzMzNjUyO1xuXHRcdGsxID0gLS4wMDkxNTc5OTtcblx0XHRrMiA9IC0xLjE1MTMwMjE7XG5cdFx0azMgPSAtLjUwNTU5NjA2O1xuXHRcdGs0ID0gLjAwNjkyMTY3O1xuXHRcdHdsID0gLS4wMDQxOTYwODYzO1xuXHRcdHdtID0gLS43MDM0MTg2MTQ3O1xuXHRcdHdzID0gMS43MDc2MTQ3MDE7XG5cdH1cblx0bGV0IFMgPSBrMCArIGsxICogYSArIGsyICogYiArIGszICogYSAqIGEgKyBrNCAqIGEgKiBiO1xuXHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRsZXQga19tID0gLS4xMDU1NjEzNDU4ICogYSAtIC4wNjM4NTQxNzI4ICogYjtcblx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdHtcblx0XHRsZXQgbF8gPSAxICsgUyAqIGtfbDtcblx0XHRsZXQgbV8gPSAxICsgUyAqIGtfbTtcblx0XHRsZXQgc18gPSAxICsgUyAqIGtfcztcblx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRsZXQgbSA9IG1fICogbV8gKiBtXztcblx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRsZXQgbF9kUyA9IDMgKiBrX2wgKiBsXyAqIGxfO1xuXHRcdGxldCBtX2RTID0gMyAqIGtfbSAqIG1fICogbV87XG5cdFx0bGV0IHNfZFMgPSAzICoga19zICogc18gKiBzXztcblx0XHRsZXQgbF9kUzIgPSA2ICoga19sICoga19sICogbF87XG5cdFx0bGV0IG1fZFMyID0gNiAqIGtfbSAqIGtfbSAqIG1fO1xuXHRcdGxldCBzX2RTMiA9IDYgKiBrX3MgKiBrX3MgKiBzXztcblx0XHRsZXQgZiA9IHdsICogbCArIHdtICogbSArIHdzICogcztcblx0XHRsZXQgZjEgPSB3bCAqIGxfZFMgKyB3bSAqIG1fZFMgKyB3cyAqIHNfZFM7XG5cdFx0bGV0IGYyID0gd2wgKiBsX2RTMiArIHdtICogbV9kUzIgKyB3cyAqIHNfZFMyO1xuXHRcdFMgPSBTIC0gZiAqIGYxIC8gKGYxICogZjEgLSAuNSAqIGYgKiBmMik7XG5cdH1cblx0cmV0dXJuIFM7XG59XG5mdW5jdGlvbiBmaW5kX2N1c3AoYSwgYikge1xuXHRsZXQgU19jdXNwID0gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKTtcblx0bGV0IHJnYiA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogMSxcblx0XHRhOiBTX2N1c3AgKiBhLFxuXHRcdGI6IFNfY3VzcCAqIGJcblx0fSk7XG5cdGxldCBMX2N1c3AgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYi5yLCByZ2IuZywgcmdiLmIpKTtcblx0cmV0dXJuIFtMX2N1c3AsIExfY3VzcCAqIFNfY3VzcF07XG59XG5mdW5jdGlvbiBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhLCBiLCBMMSwgQzEsIEwwLCBjdXNwID0gbnVsbCkge1xuXHRpZiAoIWN1c3ApIGN1c3AgPSBmaW5kX2N1c3AoYSwgYik7XG5cdGxldCB0O1xuXHRpZiAoKEwxIC0gTDApICogY3VzcFsxXSAtIChjdXNwWzBdIC0gTDApICogQzEgPD0gMCkgdCA9IGN1c3BbMV0gKiBMMCAvIChDMSAqIGN1c3BbMF0gKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0ZWxzZSB7XG5cdFx0dCA9IGN1c3BbMV0gKiAoTDAgLSAxKSAvIChDMSAqIChjdXNwWzBdIC0gMSkgKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0XHR7XG5cdFx0XHRsZXQgZEwgPSBMMSAtIEwwO1xuXHRcdFx0bGV0IGRDID0gQzE7XG5cdFx0XHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRcdFx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdFx0XHRsZXQga19zID0gLS4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYjtcblx0XHRcdGxldCBsX2R0ID0gZEwgKyBkQyAqIGtfbDtcblx0XHRcdGxldCBtX2R0ID0gZEwgKyBkQyAqIGtfbTtcblx0XHRcdGxldCBzX2R0ID0gZEwgKyBkQyAqIGtfcztcblx0XHRcdHtcblx0XHRcdFx0bGV0IEwgPSBMMCAqICgxIC0gdCkgKyB0ICogTDE7XG5cdFx0XHRcdGxldCBDID0gdCAqIEMxO1xuXHRcdFx0XHRsZXQgbF8gPSBMICsgQyAqIGtfbDtcblx0XHRcdFx0bGV0IG1fID0gTCArIEMgKiBrX207XG5cdFx0XHRcdGxldCBzXyA9IEwgKyBDICoga19zO1xuXHRcdFx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0XHRcdGxldCBzID0gc18gKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0ID0gMyAqIGxfZHQgKiBsXyAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0ID0gMyAqIG1fZHQgKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0ID0gMyAqIHNfZHQgKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0MiA9IDYgKiBsX2R0ICogbF9kdCAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0MiA9IDYgKiBtX2R0ICogbV9kdCAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0MiA9IDYgKiBzX2R0ICogc19kdCAqIHNfO1xuXHRcdFx0XHRsZXQgciA9IDQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgLjIzMDk2OTkyOTIgKiBzIC0gMTtcblx0XHRcdFx0bGV0IHIxID0gNC4wNzY3NDE2NjIxICogbGR0IC0gMy4zMDc3MTE1OTEzICogbWR0ICsgLjIzMDk2OTkyOTIgKiBzZHQ7XG5cdFx0XHRcdGxldCByMiA9IDQuMDc2NzQxNjYyMSAqIGxkdDIgLSAzLjMwNzcxMTU5MTMgKiBtZHQyICsgLjIzMDk2OTkyOTIgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9yID0gcjEgLyAocjEgKiByMSAtIC41ICogciAqIHIyKTtcblx0XHRcdFx0bGV0IHRfciA9IC1yICogdV9yO1xuXHRcdFx0XHRsZXQgZyA9IC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIC4zNDEzMTkzOTY1ICogcyAtIDE7XG5cdFx0XHRcdGxldCBnMSA9IC0xLjI2ODQzODAwNDYgKiBsZHQgKyAyLjYwOTc1NzQwMTEgKiBtZHQgLSAuMzQxMzE5Mzk2NSAqIHNkdDtcblx0XHRcdFx0bGV0IGcyID0gLTEuMjY4NDM4MDA0NiAqIGxkdDIgKyAyLjYwOTc1NzQwMTEgKiBtZHQyIC0gLjM0MTMxOTM5NjUgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9nID0gZzEgLyAoZzEgKiBnMSAtIC41ICogZyAqIGcyKTtcblx0XHRcdFx0bGV0IHRfZyA9IC1nICogdV9nO1xuXHRcdFx0XHRsZXQgYiA9IC0uMDA0MTk2MDg2MyAqIGwgLSAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgYjEgPSAtLjAwNDE5NjA4NjMgKiBsZHQgLSAuNzAzNDE4NjE0NyAqIG1kdCArIDEuNzA3NjE0NzAxICogc2R0O1xuXHRcdFx0XHRsZXQgYjIgPSAtLjAwNDE5NjA4NjMgKiBsZHQyIC0gLjcwMzQxODYxNDcgKiBtZHQyICsgMS43MDc2MTQ3MDEgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9iID0gYjEgLyAoYjEgKiBiMSAtIC41ICogYiAqIGIyKTtcblx0XHRcdFx0bGV0IHRfYiA9IC1iICogdV9iO1xuXHRcdFx0XHR0X3IgPSB1X3IgPj0gMCA/IHRfciA6IDFlNjtcblx0XHRcdFx0dF9nID0gdV9nID49IDAgPyB0X2cgOiAxZTY7XG5cdFx0XHRcdHRfYiA9IHVfYiA+PSAwID8gdF9iIDogMWU2O1xuXHRcdFx0XHR0ICs9IE1hdGgubWluKHRfciwgTWF0aC5taW4odF9nLCB0X2IpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBMID0gY3VzcFswXTtcblx0bGV0IEMgPSBjdXNwWzFdO1xuXHRyZXR1cm4gW0MgLyBMLCBDIC8gKDEgLSBMKV07XG59XG5mdW5jdGlvbiBnZXRfQ3MoTCwgYV8sIGJfKSB7XG5cdGxldCBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBDX21heCA9IGZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uKGFfLCBiXywgTCwgMSwgTCwgY3VzcCk7XG5cdGxldCBTVF9tYXggPSBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCk7XG5cdGxldCBTX21pZCA9IC4xMTUxNjk5MyArIDEgLyAoNy40NDc3ODk3ICsgNC4xNTkwMTI0ICogYl8gKyBhXyAqICgtMi4xOTU1NzM0NyArIDEuNzUxOTg0MDEgKiBiXyArIGFfICogKC0yLjEzNzA0OTQ4IC0gMTAuMDIzMDEwNDMgKiBiXyArIGFfICogKC00LjI0ODk0NTYxICsgNS4zODc3MDgxOSAqIGJfICsgNC42OTg5MTAxMyAqIGFfKSkpKTtcblx0bGV0IFRfbWlkID0gLjExMjM5NjQyICsgMSAvICgxLjYxMzIwMzIgLSAuNjgxMjQzNzkgKiBiXyArIGFfICogKC40MDM3MDYxMiArIC45MDE0ODEyMyAqIGJfICsgYV8gKiAoLS4yNzA4Nzk0MyArIC42MTIyMzk5ICogYl8gKyBhXyAqICguMDAyOTkyMTUgLSAuNDUzOTk1NjggKiBiXyAtIC4xNDY2MTg3MiAqIGFfKSkpKTtcblx0bGV0IGsgPSBDX21heCAvIE1hdGgubWluKEwgKiBTVF9tYXhbMF0sICgxIC0gTCkgKiBTVF9tYXhbMV0pO1xuXHRsZXQgQ19hID0gTCAqIFNfbWlkO1xuXHRsZXQgQ19iID0gKDEgLSBMKSAqIFRfbWlkO1xuXHRsZXQgQ19taWQgPSAuOSAqIGsgKiBNYXRoLnNxcnQoTWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EgKiBDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IgKiBDX2IgKiBDX2IpKSkpO1xuXHRDX2EgPSBMICogLjQ7XG5cdENfYiA9ICgxIC0gTCkgKiAuODtcblx0cmV0dXJuIFtcblx0XHRNYXRoLnNxcnQoMSAvICgxIC8gKENfYSAqIENfYSkgKyAxIC8gKENfYiAqIENfYikpKSxcblx0XHRDX21pZCxcblx0XHRDX21heFxuXHRdO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2tsYWJUb09raHNsLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHNsKGxhYikge1xuXHRjb25zdCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0Y29uc3QgYSA9IGxhYi5hICE9PSB2b2lkIDAgPyBsYWIuYSA6IDA7XG5cdGNvbnN0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2hzbFwiLFxuXHRcdGw6IHRvZShsKVxuXHR9O1xuXHRpZiAobGFiLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGxhYi5hbHBoYTtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGlmICghYykge1xuXHRcdHJldC5zID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBbQ18wLCBDX21pZCwgQ19tYXhdID0gZ2V0X0NzKGwsIGEgLyBjLCBiIC8gYyk7XG5cdGxldCBzO1xuXHRpZiAoYyA8IENfbWlkKSB7XG5cdFx0bGV0IGtfMCA9IDA7XG5cdFx0bGV0IGtfMSA9IC44ICogQ18wO1xuXHRcdGxldCBrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdFx0cyA9IChjIC0ga18wKSAvIChrXzEgKyBrXzIgKiAoYyAtIGtfMCkpICogLjg7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IGtfMCA9IENfbWlkO1xuXHRcdGxldCBrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0XHRzID0gLjggKyAuMiAqICgoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSk7XG5cdH1cblx0aWYgKHMpIHtcblx0XHRyZXQucyA9IHM7XG5cdFx0cmV0LmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2NvbnZlcnRPa2hzbFRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzbFRvT2tsYWIoaHNsKSB7XG5cdGxldCBoID0gaHNsLmggIT09IHZvaWQgMCA/IGhzbC5oIDogMDtcblx0bGV0IHMgPSBoc2wucyAhPT0gdm9pZCAwID8gaHNsLnMgOiAwO1xuXHRsZXQgbCA9IGhzbC5sICE9PSB2b2lkIDAgPyBoc2wubCA6IDA7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogdG9lX2ludihsKVxuXHR9O1xuXHRpZiAoaHNsLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzbC5hbHBoYTtcblx0aWYgKCFzIHx8IGwgPT09IDEpIHtcblx0XHRyZXQuYSA9IHJldC5iID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhyZXQubCwgYV8sIGJfKTtcblx0bGV0IHQsIGtfMCwga18xLCBrXzI7XG5cdGlmIChzIDwgLjgpIHtcblx0XHR0ID0gMS4yNSAqIHM7XG5cdFx0a18wID0gMDtcblx0XHRrXzEgPSAuOCAqIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdH0gZWxzZSB7XG5cdFx0dCA9IDUgKiAocyAtIC44KTtcblx0XHRrXzAgPSBDX21pZDtcblx0XHRrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gKENfbWF4IC0gQ19taWQpO1xuXHR9XG5cdGxldCBDID0ga18wICsgdCAqIGtfMSAvICgxIC0ga18yICogdCk7XG5cdHJldC5hID0gQyAqIGFfO1xuXHRyZXQuYiA9IEMgKiBiXztcblx0cmV0dXJuIHJldDtcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvbW9kZU9raHNsLmpzXG52YXIgbW9kZU9raHNsID0ge1xuXHQuLi5kZWZpbml0aW9uJDIxLFxuXHRtb2RlOiBcIm9raHNsXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHNsXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzbFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHNsLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc2woY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc2xUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzbFRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2xhYlRvT2toc3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2xhYlRvT2toc3YobGFiKSB7XG5cdGxldCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0bGV0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRsZXQgYiA9IGxhYi5iICE9PSB2b2lkIDAgPyBsYWIuYiA6IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgYV8gPSBjID8gYSAvIGMgOiAxO1xuXHRsZXQgYl8gPSBjID8gYiAvIGMgOiAxO1xuXHRsZXQgW1NfbWF4LCBUXSA9IGdldF9TVF9tYXgoYV8sIGJfKTtcblx0bGV0IFNfMCA9IC41O1xuXHRsZXQgayA9IDEgLSBTXzAgLyBTX21heDtcblx0bGV0IHQgPSBUIC8gKGMgKyBsICogVCk7XG5cdGxldCBMX3YgPSB0ICogbDtcblx0bGV0IENfdiA9IHQgKiBjO1xuXHRsZXQgTF92dCA9IHRvZV9pbnYoTF92KTtcblx0bGV0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRsZXQgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGxldCBzY2FsZV9MID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2Jfc2NhbGUuciwgcmdiX3NjYWxlLmcsIHJnYl9zY2FsZS5iLCAwKSk7XG5cdGwgPSBsIC8gc2NhbGVfTDtcblx0YyA9IGMgLyBzY2FsZV9MICogdG9lKGwpIC8gbDtcblx0bCA9IHRvZShsKTtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc3ZcIixcblx0XHRzOiBjID8gKFNfMCArIFQpICogQ192IC8gKFQgKiBTXzAgKyBUICogayAqIENfdikgOiAwLFxuXHRcdHY6IGwgPyBsIC8gTF92IDogMFxuXHR9O1xuXHRpZiAocmV0LnMpIHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdHJldHVybiByZXQ7XG59XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2hzdlRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzdlRvT2tsYWIoaHN2KSB7XG5cdGNvbnN0IHJldCA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gaHN2LmFscGhhO1xuXHRjb25zdCBoID0gaHN2LmggIT09IHZvaWQgMCA/IGhzdi5oIDogMDtcblx0Y29uc3QgcyA9IGhzdi5zICE9PSB2b2lkIDAgPyBoc3YucyA6IDA7XG5cdGNvbnN0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRjb25zdCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0Y29uc3QgYl8gPSBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGNvbnN0IFNfMCA9IC41O1xuXHRjb25zdCBrID0gMSAtIFNfMCAvIFNfbWF4O1xuXHRjb25zdCBMX3YgPSAxIC0gcyAqIFNfMCAvIChTXzAgKyBUIC0gVCAqIGsgKiBzKTtcblx0Y29uc3QgQ192ID0gcyAqIFQgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGNvbnN0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRjb25zdCByZ2Jfc2NhbGUgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IExfdnQsXG5cdFx0YTogYV8gKiBDX3Z0LFxuXHRcdGI6IGJfICogQ192dFxuXHR9KTtcblx0Y29uc3Qgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRjb25zdCBMX25ldyA9IHRvZV9pbnYodiAqIExfdik7XG5cdGNvbnN0IEMgPSBDX3YgKiBMX25ldyAvIExfdjtcblx0cmV0LmwgPSBMX25ldyAqIHNjYWxlX0w7XG5cdHJldC5hID0gQyAqIGFfICogc2NhbGVfTDtcblx0cmV0LmIgPSBDICogYl8gKiBzY2FsZV9MO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9tb2RlT2toc3YuanNcbnZhciBtb2RlT2toc3YgPSB7XG5cdC4uLmRlZmluaXRpb24kMjAsXG5cdG1vZGU6IFwib2toc3ZcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tb2toc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLW9raHN2XCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2xhYlRvT2toc3YsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9Pa2hzdihjb252ZXJ0UmdiVG9Pa2xhYihjKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2hzdlRvT2tsYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydE9raHN2VG9Pa2xhYihjKSlcblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvcGFyc2VPa2xhYi5qc1xuZnVuY3Rpb24gcGFyc2VPa2xhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGNvbnN0IFssIGwsIGEsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSB8fCBhLnR5cGUgPT09IFRvay5IdWUgfHwgYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kOCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJva2xhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0T2tsYWJUb0xyZ2IsXG5cdFx0cmdiOiBjb252ZXJ0T2tsYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdGxyZ2I6IGNvbnZlcnRMcmdiVG9Pa2xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb09rbGFiXG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRhOiBbLS40LCAuNF0sXG5cdFx0YjogWy0uNCwgLjRdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xhYl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgXG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9wYXJzZU9rbGNoLmpzXG5mdW5jdGlvbiBwYXJzZU9rbGNoKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcIm9rbGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcIm9rbGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdH1cblx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5jID0gTWF0aC5tYXgoMCwgYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgKiAuNCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ3ID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcIm9rbGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb09rbGFiKGMpLCBcIm9rbGNoXCIpLFxuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwib2tsY2hcIilcblx0fSxcblx0cGFyc2U6IFtwYXJzZU9rbGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYG9rbGNoKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmMgIT09IHZvaWQgMCA/IGMuYyA6IFwibm9uZVwifSAke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRjOiBbMCwgLjRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRQM1RvWHl6NjUuanNcbnZhciBjb252ZXJ0UDNUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDg2NTcwOTQ4NjQ4MjE2ICogciArIC4yNjU2Njc2OTMxNjkwOTMgKiBnICsgLjE5ODIxNzI4NTIzNDM2MjUgKiBiLFxuXHRcdHk6IC4yMjg5NzQ1NjQwNjk3NDg3ICogciArIC42OTE3Mzg1MjE4MzY1MDYyICogZyArIC4wNzkyODY5MTQwOTM3NDUgKiBiLFxuXHRcdHo6IDAgKiByICsgLjA0NTExMzM4MTg1ODkwMjYgKiBnICsgMS4wNDM5NDQzNjg5MDA5NzYgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRYeXo2NVRvUDMuanNcbnZhciBjb252ZXJ0WHl6NjVUb1AzID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDIuNDkzNDk2OTExOTQxNDI2MyAtIHkgKiAuOTMxMzgzNjE3OTE5MTI0MiAtIC40MDI3MTA3ODQ0NTA3MTcgKiB6LFxuXHRcdGc6IHggKiAtLjgyOTQ4ODk2OTU2MTU3NDkgKyB5ICogMS43NjI2NjQwNjAzMTgzNDY1ICsgLjAyMzYyNDY4NTg0MTk0MzYgKiB6LFxuXHRcdGI6IHggKiAuMDM1ODQ1ODMwMjQzNzg0NSAtIHkgKiAuMDc2MTcyMzg5MjY4MDQxOCArIC45NTY4ODQ1MjQwMDc2ODcxICogelxuXHR9LCBcInAzXCIpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInAzXCIsXG5cdHBhcnNlOiBbXCJkaXNwbGF5LXAzXCJdLFxuXHRzZXJpYWxpemU6IFwiZGlzcGxheS1wM1wiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1AzKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvUDNcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRQM1RvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydFAzVG9YeXo2NVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0WHl6NTBUb1Byb3Bob3RvLmpzXG52YXIgZ2FtbWEkMSA9ICh2KSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxIC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxIC8gMS44KTtcblx0cmV0dXJuIDE2ICogdjtcbn07XG52YXIgY29udmVydFh5ejUwVG9Qcm9waG90byA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdFx0cjogZ2FtbWEkMSh4ICogMS4zNDU3ODY4ODE2NDcxNTg1IC0geSAqIC4yNTU1NzIwODczNzk3OTQ2IC0gLjA1MTEwMTg2NDk3NTU0NTMgKiB6KSxcblx0XHRnOiBnYW1tYSQxKHggKiAtLjU0NDYzMDcwNTEyNDkwMTkgKyB5ICogMS41MDgyNDc3NDI4NDUxNDY2ICsgLjAyMDUyNzQ0NzQzNjQyMTQgKiB6KSxcblx0XHRiOiBnYW1tYSQxKHggKiAwICsgeSAqIDAgKyAxLjIxMTk2NzU0NTYzODk0NTIgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLmpzXG52YXIgbGluZWFyaXplJDEgPSAodiA9IDApID0+IHtcblx0bGV0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID49IDE2IC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxLjgpO1xuXHRyZXR1cm4gdiAvIDE2O1xufTtcbnZhciBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwID0gKHByb3Bob3RvKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplJDEocHJvcGhvdG8ucik7XG5cdGxldCBnID0gbGluZWFyaXplJDEocHJvcGhvdG8uZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDEocHJvcGhvdG8uYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC43OTc3NjY2NDQ5MDA2NDIzICogciArIC4xMzUxODEyOTc0MDA1MzMxICogZyArIC4wMzEzNDc3MzQxMjgzOTIyICogYixcblx0XHR5OiAuMjg4MDc0ODI4ODE5NDAxMyAqIHIgKyAuNzExODM1MjM0MjQxODczMSAqIGcgKyA4OTkzNjkzODcyNTZlLTE2ICogYixcblx0XHR6OiAwICogciArIDAgKiBnICsgLjgyNTEwNDYwMjUxMDQ2MDIgKiBiXG5cdH07XG5cdGlmIChwcm9waG90by5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBwcm9waG90by5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3Byb3Bob3RvL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDUgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicHJvcGhvdG9cIixcblx0cGFyc2U6IFtcInByb3Bob3RvLXJnYlwiXSxcblx0c2VyaWFsaXplOiBcInByb3Bob3RvLXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvKGNvbnZlcnRSZ2JUb1h5ejUwKGNvbG9yKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRQcm9waG90b1RvWHl6NTAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRQcm9waG90b1RvWHl6NTAoY29sb3IpKVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRYeXo2NVRvUmVjMjAyMC5qc1xudmFyIM6xJDEgPSAxLjA5OTI5NjgyNjgwOTQ0O1xudmFyIM6yJDEgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGdhbW1hID0gKHYpID0+IHtcblx0Y29uc3QgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPiDOsiQxKSByZXR1cm4gKE1hdGguc2lnbih2KSB8fCAxKSAqICjOsSQxICogTWF0aC5wb3coYWJzLCAuNDUpIC0gLjA5OTI5NjgyNjgwOTQ0MDA4KTtcblx0cmV0dXJuIDQuNSAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo2NVRvUmVjMjAyMCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInJlYzIwMjBcIixcblx0XHRyOiBnYW1tYSh4ICogMS43MTY2NTExODc5NzEyNjgzIC0geSAqIC4zNTU2NzA3ODM3NzYzOTI1IC0gLjI1MzM2NjI4MTM3MzY1OTkgKiB6KSxcblx0XHRnOiBnYW1tYSh4ICogLS42NjY2ODQzNTE4MzI0ODkzICsgeSAqIDEuNjE2NDgxMjM2NjM0OTM5NSArIC4wMTU3Njg1NDU4MTM5MTExICogeiksXG5cdFx0YjogZ2FtbWEoeCAqIC4wMTc2Mzk4NTc0NDUzMTA4IC0geSAqIC4wNDI3NzA2MTMyNTc4MDg1ICsgLjk0MjEwMzEyMTIzNTQ3MzkgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRSZWMyMDIwVG9YeXo2NS5qc1xudmFyIM6xID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiA9IC4wMTgwNTM5Njg1MTA4MDc7XG52YXIgbGluZWFyaXplID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA8IM6yICogNC41KSByZXR1cm4gdiAvIDQuNTtcblx0cmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgzrEgLSAxKSAvIM6xLCAxIC8gLjQ1KTtcbn07XG52YXIgY29udmVydFJlYzIwMjBUb1h5ejY1ID0gKHJlYzIwMjApID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUocmVjMjAyMC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUocmVjMjAyMC5nKTtcblx0bGV0IGIgPSBsaW5lYXJpemUocmVjMjAyMC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjYzNjk1ODA0ODMwMTI5MTEgKiByICsgLjE0NDYxNjkwMzU4NjIwODMgKiBnICsgLjE2ODg4MDk3NTE2NDE3MjEgKiBiLFxuXHRcdHk6IC4yNjI3MDAyMTIwMTEyNjcgKiByICsgLjY3Nzk5ODA3MTUxODg3MDggKiBnICsgLjA1OTMwMTcxNjQ2OTg2MiAqIGIsXG5cdFx0ejogMCAqIHIgKyAuMDI4MDcyNjkzMDQ5MDg3NCAqIGcgKyAxLjA2MDk4NTA1NzcxMDc5MDkgKiBiXG5cdH07XG5cdGlmIChyZWMyMDIwLmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IHJlYzIwMjAuYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDQgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicmVjMjAyMFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmVjMjAyMChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0UmVjMjAyMFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRSZWMyMDIwVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHBhcnNlOiBbXCJyZWMyMDIwXCJdLFxuXHRzZXJpYWxpemU6IFwicmVjMjAyMFwiXG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29uc3RhbnRzLmpzXG52YXIgYmlhcyA9IC4wMDM3OTMwNzMyNTUyNzU0NDkzO1xudmFyIGJpYXNfY2JydCA9IE1hdGguY2JydChiaWFzKTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnZlcnRSZ2JUb1h5Yi5qc1xudmFyIHRyYW5zZmVyJDEgPSAodikgPT4gTWF0aC5jYnJ0KHYpIC0gYmlhc19jYnJ0O1xudmFyIGNvbnZlcnRSZ2JUb1h5YiA9IChjb2xvcikgPT4ge1xuXHRjb25zdCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKGNvbG9yKTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyJDEoLjMgKiByICsgLjYyMiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBtID0gdHJhbnNmZXIkMSguMjMgKiByICsgLjY5MiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBzID0gdHJhbnNmZXIkMSguMjQzNDIyNjg5MjQ1NDc4MiAqIHIgKyAuMjA0NzY3NDQ0MjQ0OTY4MiAqIGcgKyAuNTUxODA5ODY2NTA5NTUzNSAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHliXCIsXG5cdFx0eDogKGwgLSBtKSAvIDIsXG5cdFx0eTogKGwgKyBtKSAvIDIsXG5cdFx0YjogcyAtIChsICsgbSkgLyAyXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0WHliVG9SZ2IuanNcbnZhciB0cmFuc2ZlciA9ICh2KSA9PiBNYXRoLnBvdyh2ICsgYmlhc19jYnJ0LCAzKTtcbnZhciBjb252ZXJ0WHliVG9SZ2IgPSAoeyB4LCB5LCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2Zlcih4ICsgeSkgLSBiaWFzO1xuXHRjb25zdCBtID0gdHJhbnNmZXIoeSAtIHgpIC0gYmlhcztcblx0Y29uc3QgcyA9IHRyYW5zZmVyKGIgKyB5KSAtIGJpYXM7XG5cdGNvbnN0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IDExLjAzMTU2NjkwNDYzOTg2MSAqIGwgLSA5Ljg2Njk0MzkwODEzMTU2MiAqIG0gLSAuMTY0NjIyOTk2NTA4Mjk5MzQgKiBzLFxuXHRcdGc6IC0zLjI1NDE0NzM4MTA3NDQyMzcgKiBsICsgNC40MTg3NzAzNzc1ODI3MjMgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRiOiAtMy42NTg4NTEyODY3MTM2ODE1ICogbCArIDIuNzEyOTIzMDQ1OTM2MDkyMiAqIG0gKyAxLjk0NTkyODI0MDc3NzU4OTUgKiBzXG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMyA9IHtcblx0bW9kZTogXCJ4eWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teHliXCJdLFxuXHRzZXJpYWxpemU6IFwiLS14eWJcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydFh5YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvWHliIH0sXG5cdHJhbmdlczoge1xuXHRcdHg6IFstLjAxNTQsIC4wMjgxXSxcblx0XHR5OiBbMCwgLjg0NTNdLFxuXHRcdGI6IFstLjI3NzgsIC4zODhdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIgPSB7XG5cdG1vZGU6IFwieHl6NTBcIixcblx0cGFyc2U6IFtcInh5ei1kNTBcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDUwXCIsXG5cdHRvTW9kZToge1xuXHRcdHJnYjogY29udmVydFh5ejUwVG9SZ2IsXG5cdFx0bGFiOiBjb252ZXJ0WHl6NTBUb0xhYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NTAsXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9YeXo1MFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk2NF0sXG5cdFx0eTogWzAsIC45OTldLFxuXHRcdHo6IFswLCAuODI1XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ejogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1h5ejUwLmpzXG52YXIgY29udmVydFh5ejY1VG9YeXo1MCA9ICh4eXo2NSkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NjU7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDEuMDQ3OTI5ODIwODQwNTQ4OCAqIHggKyAuMDIyOTQ2NzkzMzQxMDE5MSAqIHkgLSAuMDUwMTkyMjI5NTQzMTM1NiAqIHosXG5cdFx0eTogLjAyOTYyNzgxNTY4ODE1OTMgKiB4ICsgLjk5MDQzNDQ4NDU3MzI0OSAqIHkgLSAuMDE3MDczODI1MDI5Mzg1MSAqIHosXG5cdFx0ejogLS4wMDkyNDMwNTgxNTI1OTEyICogeCArIC4wMTUwNTUxNDQ4OTY1Nzc5ICogeSArIC43NTE4NzQyODk5NTgwMDA4ICogelxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NTBUb1h5ejY1LmpzXG52YXIgY29udmVydFh5ejUwVG9YeXo2NSA9ICh4eXo1MCkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NTA7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC45NTU0NzM0NTI3MDQyMTgyICogeCAtIC4wMjMwOTg1MzY4NzQyNjE0ICogeSArIC4wNjMyNTkzMDg2NjEwMjE3ICogeixcblx0XHR5OiAtLjAyODM2OTcwNjk2MzIwODEgKiB4ICsgMS4wMDk5OTU0NTgwMDU4MjI2ICogeSArIC4wMjEwNDEzOTg5NjY5NDMgKiB6LFxuXHRcdHo6IC4wMTIzMTQwMDE2ODgzMTk5ICogeCAtIC4wMjA1MDc2OTY0MzM0Nzc5ICogeSArIDEuMzMwMzY1OTM2NjA4MDc1MyAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMSA9IHtcblx0bW9kZTogXCJ4eXo2NVwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo2NVRvUmdiLFxuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NjVUb1h5ejUwXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9YeXo2NSxcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9YeXo2NVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk1XSxcblx0XHR5OiBbMCwgMV0sXG5cdFx0ejogWzAsIDEuMDg4XVxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wieHl6XCIsIFwieHl6LWQ2NVwiXSxcblx0c2VyaWFsaXplOiBcInh5ei1kNjVcIixcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRSZ2JUb1lpcS5qc1xudmFyIGNvbnZlcnRSZ2JUb1lpcSA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieWlxXCIsXG5cdFx0eTogLjI5ODg5NTMxICogciArIC41ODY2MjI0NyAqIGcgKyAuMTE0NDgyMjMgKiBiLFxuXHRcdGk6IC41OTU5Nzc5OSAqIHIgLSAuMjc0MTc2MSAqIGcgLSAuMzIxODAxODkgKiBiLFxuXHRcdHE6IC4yMTE0NzAxNyAqIHIgLSAuNTIyNjE3MTEgKiBnICsgLjMxMTE0Njk0ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvY29udmVydFlpcVRvUmdiLmpzXG52YXIgY29udmVydFlpcVRvUmdiID0gKHsgeSwgaSwgcSwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmIChxID09PSB2b2lkIDApIHEgPSAwO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiB5ICsgLjk1NjA4NDQ1ICogaSArIC42MjA4ODg1ICogcSxcblx0XHRnOiB5IC0gLjI3MTM3NjY0ICogaSAtIC42NDg2MDU5ICogcSxcblx0XHRiOiB5IC0gMS4xMDU2MTcyNCAqIGkgKyAxLjcwMjUwMTI2ICogcVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24gPSB7XG5cdG1vZGU6IFwieWlxXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRZaXFUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1lpcSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieVwiLFxuXHRcdFwiaVwiLFxuXHRcdFwicVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS15aXFcIl0sXG5cdHNlcmlhbGl6ZTogXCItLXlpcVwiLFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbLS41OTUsIC41OTVdLFxuXHRcdHE6IFstLjUyMiwgLjUyMl1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcm91bmQuanNcbnZhciByID0gKHZhbHVlLCBwcmVjaXNpb24pID0+IE1hdGgucm91bmQodmFsdWUgKiAocHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbikpKSAvIHByZWNpc2lvbjtcbnZhciByb3VuZCA9IChwcmVjaXNpb24gPSA0KSA9PiAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHIodmFsdWUsIHByZWNpc2lvbikgOiB2YWx1ZTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZm9ybWF0dGVyLmpzXG52YXIgdHdvRGVjaW1hbHMgPSByb3VuZCgyKTtcbnZhciBjbGFtcCQxID0gKHZhbHVlKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG52YXIgZml4dXAgPSAodmFsdWUpID0+IE1hdGgucm91bmQoY2xhbXAkMSh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBQQVBFUl9MX1NQTElUID0gLjUyO1xudmFyIFBBUEVSX0NIUk9NQV9DQVAgPSAuMDI1O1xudmFyIEZBTExCQUNLX1BBUEVSID0ge1xuXHR1bmRlcmx5aW5nOiBcIiMxNjE2MWFcIixcblx0Y29udHJhc3Q6IFwiI2Y3ZjdmOFwiXG59O1xudmFyIGxhc3RMaXZlUGFwZXIgPSBudWxsO1xudmFyIFVTQUJMRV9MVU1BX01JTiA9IC4wMztcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIGNsYW1wID0gKG4sIGxvLCBoaSkgPT4gTWF0aC5taW4oaGksIE1hdGgubWF4KGxvLCBuKSk7XG52YXIgaGV4T2tsY2ggPSAobCwgYywgaCwgZmFsbGJhY2spID0+IGZvcm1hdEhleCh7XG5cdG1vZGU6IFwib2tsY2hcIixcblx0bCxcblx0Yyxcblx0aFxufSkgfHwgZmFsbGJhY2s7XG52YXIgcmdiVG9TYW1wbGUgPSAocmdiKSA9PiB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IHJnYjtcblx0aWYgKCFbXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0XS5ldmVyeSgobikgPT4gTnVtYmVyLmlzRmluaXRlKG4pKSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGhleCA9IGZvcm1hdEhleCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0aWYgKCFoZXgpIHJldHVybiBudWxsO1xuXHRjb25zdCBvayA9IG9rbGNoKHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJnYixcblx0XHRoZXgsXG5cdFx0bDogb2s/LmwgPz8gLjUsXG5cdFx0Yzogb2s/LmMgPz8gMCxcblx0XHRoOiBvaz8uaCA/PyAwXG5cdH07XG59O1xudmFyIHBhcGVyTEZyb21IZXggPSAoaGV4KSA9PiBva2xjaChoZXgpPy5sID8/IC40O1xudmFyIGhhbG9Gb3JQYXBlciA9IChkYXJrUGFwZXIpID0+IGRhcmtQYXBlciA/IHtcblx0c2hhZG93OiBcInJnYigwIDAgMCAvIDAuODgpXCIsXG5cdGdsb3c6IFwicmdiKDAgMCAwIC8gMC40NSlcIlxufSA6IHtcblx0c2hhZG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuNzIpXCIsXG5cdGdsb3c6IFwicmdiKDI1NSAyNTUgMjU1IC8gMC4zNSlcIlxufTtcbnZhciBpc1VzYWJsZVBhcGVyTHVtYSA9IChsdW1hKSA9PiBOdW1iZXIuaXNGaW5pdGUobHVtYSkgJiYgbHVtYSA+PSBVU0FCTEVfTFVNQV9NSU4gJiYgbHVtYSA8PSAxO1xudmFyIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMgPSAoc2FtcGxlcywgcGl4ZWxMdW1hKSA9PiB7XG5cdGlmICghc2FtcGxlcy5sZW5ndGggJiYgcGl4ZWxMdW1hID09IG51bGwpIHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdGNvbnN0IGxzID0gc2FtcGxlcy5tYXAoKHMpID0+IHMubCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXHRjb25zdCBtZWFuTCA9IHNhbXBsZXMubGVuZ3RoID8gc2FtcGxlcy5yZWR1Y2UoKHN1bSwgcykgPT4gc3VtICsgcy5sLCAwKSAvIHNhbXBsZXMubGVuZ3RoIDogcGl4ZWxMdW1hO1xuXHRjb25zdCBtZWRpYW5MID0gbHMubGVuZ3RoID8gbHNbTWF0aC5mbG9vcihscy5sZW5ndGggLyAyKV0gOiBtZWFuTDtcblx0Y29uc3QgcGFwZXJMID0gY2xhbXAocGl4ZWxMdW1hICE9IG51bGwgJiYgaXNVc2FibGVQYXBlckx1bWEocGl4ZWxMdW1hKSA/IHBpeGVsTHVtYSA6IE1hdGgubWF4KG1lYW5MLCBtZWRpYW5MKSwgLjA4LCAuOTQpO1xuXHRjb25zdCBwYXBlciA9IHNhbXBsZXMubGVuZ3RoID8gWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGEuYyAtIGIuYyB8fCBNYXRoLmFicyhhLmwgLSBwYXBlckwpIC0gTWF0aC5hYnMoYi5sIC0gcGFwZXJMKSlbMF0gOiBudWxsO1xuXHRjb25zdCBwYXBlckMgPSBwYXBlciA/IE1hdGgubWluKFBBUEVSX0NIUk9NQV9DQVAsIE1hdGgubWF4KDAsIHBhcGVyLmMgKiAuMikpIDogMDtcblx0Y29uc3QgaCA9IHBhcGVyPy5oIHx8IDA7XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTCA8IFBBUEVSX0xfU1BMSVQ7XG5cdHJldHVybiB7XG5cdFx0dW5kZXJseWluZzogaGV4T2tsY2gocGFwZXJMLCBwYXBlckMsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLnVuZGVybHlpbmcgOiBcIiNlOGU2ZTJcIiksXG5cdFx0Y29udHJhc3Q6IGhleE9rbGNoKGRhcmtQYXBlciA/IC45MyA6IC4xNiwgLjAwOCwgaCwgZGFya1BhcGVyID8gRkFMTEJBQ0tfUEFQRVIuY29udHJhc3QgOiBcIiMxNDE0MTZcIilcblx0fTtcbn07XG52YXIgc2FtcGxlSW1hZ2VNZWFuTHVtYSA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiA/IGltZ1VSTCA6IGF3YWl0IChhd2FpdCBmZXRjaChpbWdVUkwpKS5ibG9iKCk7XG5cdFx0aWYgKCFibG9iIHx8IGJsb2Iuc2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHRjb25zdCB3ID0gNDg7XG5cdFx0Y29uc3QgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoYml0bWFwLmhlaWdodCAvIE1hdGgubWF4KDEsIGJpdG1hcC53aWR0aCkgKiB3KSk7XG5cdFx0Y29uc3QgY2FudmFzID0gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBPZmZzY3JlZW5DYW52YXModywgaCkgOiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHtcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoXG5cdFx0fSk7XG5cdFx0aWYgKCEoY2FudmFzIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSkge1xuXHRcdFx0Y2FudmFzLndpZHRoID0gdztcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBoO1xuXHRcdH1cblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGlmICghY3R4KSB7XG5cdFx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCB3LCBoKTtcblx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGE7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0bGV0IG4gPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTYpIHtcblx0XHRcdGlmICgoZGF0YVtpICsgM10gPz8gMjU1KSA8IDE2KSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHIgPSBkYXRhW2ldIC8gMjU1O1xuXHRcdFx0Y29uc3QgZyA9IGRhdGFbaSArIDFdIC8gMjU1O1xuXHRcdFx0Y29uc3QgYiA9IGRhdGFbaSArIDJdIC8gMjU1O1xuXHRcdFx0c3VtICs9IC4yMTI2ICogciArIC43MTUyICogZyArIC4wNzIyICogYjtcblx0XHRcdG4rKztcblx0XHR9XG5cdFx0aWYgKG4gPCA4KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBsdW1hID0gc3VtIC8gbjtcblx0XHRyZXR1cm4gaXNVc2FibGVQYXBlckx1bWEobHVtYSkgPyBsdW1hIDogbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSA9IChsdW1hKSA9PiB7XG5cdHJldHVybiBsdW1hIDw9IFBBUEVSX0xfU1BMSVQgPyB7IC4uLkZBTExCQUNLX1BBUEVSIH0gOiB7XG5cdFx0dW5kZXJseWluZzogXCIjZThlNmUyXCIsXG5cdFx0Y29udHJhc3Q6IFwiIzE0MTQxNlwiXG5cdH07XG59O1xudmFyIGhhc1dhbGxwYXBlclBhcGVyID0gKHNlZWRzKSA9PiBCb29sZWFuKHNlZWRzLnVuZGVybHlpbmcgJiYgc2VlZHMuY29udHJhc3QpO1xudmFyIHJhbmtXYWxscGFwZXJTZWVkcyA9IChjZW50cm9pZHMsIHBpeGVsTHVtYSkgPT4ge1xuXHRjb25zdCBzYW1wbGVzID0gY2VudHJvaWRzLm1hcChyZ2JUb1NhbXBsZSkuZmlsdGVyKEJvb2xlYW4pO1xuXHRpZiAoIXNhbXBsZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYWNjZW50UG9vbCA9IHNhbXBsZXMuZmlsdGVyKChzKSA9PiBzLmwgPj0gLjE4ICYmIHMubCA8PSAuODggJiYgcy5jID49IC4wMikuc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jIHx8IE1hdGguYWJzKGIubCAtIC41NSkgLSBNYXRoLmFicyhhLmwgLSAuNTUpKTtcblx0Y29uc3QgcG9vbCA9IGFjY2VudFBvb2wubGVuZ3RoID8gYWNjZW50UG9vbCA6IFsuLi5zYW1wbGVzXS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMpO1xuXHRjb25zdCBwcmltYXJ5ID0gcG9vbFswXTtcblx0aWYgKCFwcmltYXJ5KSByZXR1cm4gbnVsbDtcblx0Y29uc3QgaHVlRGlzdCA9IChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgZCA9IE1hdGguYWJzKGEgLSBiKSAlIDM2MDtcblx0XHRyZXR1cm4gZCA+IDE4MCA/IDM2MCAtIGQgOiBkO1xuXHR9O1xuXHRjb25zdCBwaWNrTmV4dCA9ICh1c2VkKSA9PiB7XG5cdFx0Y29uc3QgcmVzdCA9IHBvb2wuZmlsdGVyKChzKSA9PiAhdXNlZC5pbmNsdWRlcyhzKSk7XG5cdFx0aWYgKCFyZXN0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgYmFzZSA9IHVzZWRbdXNlZC5sZW5ndGggLSAxXSA/PyBwcmltYXJ5O1xuXHRcdFx0Y29uc3QgbnVkZ2VkID0gZm9ybWF0SGV4KHtcblx0XHRcdFx0bW9kZTogXCJva2xjaFwiLFxuXHRcdFx0XHRsOiBNYXRoLm1pbiguODUsIE1hdGgubWF4KC4yLCBiYXNlLmwgKyAodXNlZC5sZW5ndGggPT09IDEgPyAtLjEyIDogLjEpKSksXG5cdFx0XHRcdGM6IE1hdGgubWF4KC4wNCwgYmFzZS5jICogLjg1KSxcblx0XHRcdFx0aDogYmFzZS5oXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmJhc2UsXG5cdFx0XHRcdGhleDogbnVkZ2VkIHx8IGJhc2UuaGV4LFxuXHRcdFx0XHRsOiBiYXNlLmxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBbLi4ucmVzdF0uc29ydCgoYSwgYikgPT4gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYi5oLCB1LmgpKSkgLSBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChhLmgsIHUuaCkpKSB8fCBiLmMgLSBhLmMpWzBdID8/IHJlc3RbMF07XG5cdH07XG5cdGNvbnN0IHNlY29uZGFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5XSk7XG5cdGNvbnN0IHRlcnRpYXJ5ID0gcGlja05leHQoW3ByaW1hcnksIHNlY29uZGFyeV0pO1xuXHRjb25zdCBwYXBlciA9IGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMoc2FtcGxlcywgcGl4ZWxMdW1hKTtcblx0cmV0dXJuIHtcblx0XHRwcmltYXJ5OiBwcmltYXJ5LmhleCxcblx0XHRzZWNvbmRhcnk6IHNlY29uZGFyeS5oZXgsXG5cdFx0dGVydGlhcnk6IHRlcnRpYXJ5LmhleCxcblx0XHQuLi5wYXBlclxuXHR9O1xufTtcbnZhciB0aGVtZUhvc3RzID0gKCkgPT4ge1xuXHRjb25zdCBub2RlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdG5vZGVzLmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVudi1zaGVsbC1yb290LCAud2YtZGVtby1yb290LCB1aS13aW5kb3dcIikuZm9yRWFjaCgoZWwpID0+IG5vZGVzLmFkZChlbCkpO1xuXHRyZXR1cm4gWy4uLm5vZGVzXTtcbn07XG52YXIgd2FsbHBhcGVyU2VlZHNNYXlQYWludCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHNyYyA9IFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jb2xvclNvdXJjZSB8fCBcIlwiKTtcblx0aWYgKCFzcmMpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gc3JjID09PSBcIndhbGxwYXBlclwiIHx8IHNyYyA9PT0gXCJzcGVlZC1kaWFsXCIgfHwgc3JjID09PSBcInN5c3RlbS13YWxscGFwZXJcIjtcbn07XG52YXIgaXNWYWxpZENvbG9yID0gKGNvbG9yKSA9PiBCb29sZWFuKHBhcnNlKGNvbG9yKSk7XG52YXIgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyA9IChwYXBlciwgZXh0cmFIb3N0cyA9IFtdKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgZGFya1BhcGVyID0gcGFwZXJMRnJvbUhleChwYXBlci51bmRlcmx5aW5nKSA8IFBBUEVSX0xfU1BMSVQ7XG5cdGNvbnN0IHsgc2hhZG93LCBnbG93IH0gPSBoYWxvRm9yUGFwZXIoZGFya1BhcGVyKTtcblx0Y29uc3QgaG9zdHMgPSBuZXcgU2V0KHRoZW1lSG9zdHMoKSk7XG5cdGZvciAoY29uc3QgZWwgb2YgZXh0cmFIb3N0cykgaG9zdHMuYWRkKGVsKTtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIudW5kZXJseWluZykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIuY29udHJhc3QpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKHNoYWRvdykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IoZ2xvdykpIHJldHVybjtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHR9XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0Z2xvYmFsUXVlcnkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci1jb250cmFzdC1jb2xvclwiLCBwYXBlci5jb250cmFzdCk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1lbnYtbGF1bmNoZXItZmdcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLWdsb3dcIiwgZ2xvdyk7XG59O1xudmFyIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSA9IChuYW1lLCBpbml0aWFsVmFsdWUgPSBcIiM1YTllYzhcIikgPT4ge1xuXHR0cnkge1xuXHRcdENTUz8ucmVnaXN0ZXJQcm9wZXJ0eT8uKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRzeW50YXg6IFwiPGNvbG9yPlwiLFxuXHRcdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0XHRpbml0aWFsVmFsdWVcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHt9XG59O1xudmFyIHBlcnNpc3RMaXZlUGFwZXIgPSAocGFwZXIpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRpZiAoIWNhY2hlZCkgcmV0dXJuO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHR1bmRlcmx5aW5nOiBwYXBlci51bmRlcmx5aW5nLFxuXHRcdFx0Y29udHJhc3Q6IHBhcGVyLmNvbnRyYXN0XG5cdFx0fSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSA9IChsdW1hLCBleHRyYUhvc3RzID0gW10pID0+IHtcblx0aWYgKCFpc1VzYWJsZVBhcGVyTHVtYShsdW1hKSkge1xuXHRcdGlmIChsYXN0TGl2ZVBhcGVyKSB7XG5cdFx0XHRhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKGxhc3RMaXZlUGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRcdFx0cmV0dXJuIGxhc3RMaXZlUGFwZXI7XG5cdFx0fVxuXHRcdHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdH1cblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hKGx1bWEpO1xuXHRsYXN0TGl2ZVBhcGVyID0gcGFwZXI7XG5cdGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMocGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRwZXJzaXN0TGl2ZVBhcGVyKHBhcGVyKTtcblx0cmV0dXJuIHBhcGVyO1xufTtcbnZhciBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMgPSAoc2VlZHMpID0+IHtcblx0Y29uc3QgbmV4dCA9IGxhc3RMaXZlUGFwZXIgPyB7XG5cdFx0Li4uc2VlZHMsXG5cdFx0Li4ubGFzdExpdmVQYXBlclxuXHR9IDogc2VlZHM7XG5cdHRyeSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KG5leHQpKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUklNQVJZX1NUT1JBR0VfS0VZLCBuZXh0LnByaW1hcnkpO1xuXHR9IGNhdGNoIHt9XG5cdGlmIChoYXNXYWxscGFwZXJQYXBlcihuZXh0KSkgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyhuZXh0KTtcblx0aWYgKCF3YWxscGFwZXJTZWVkc01heVBhaW50KCkpIHJldHVybjtcblx0Zm9yIChjb25zdCBob3N0IG9mIHRoZW1lSG9zdHMoKSkgZm9yIChjb25zdCBbcHJvcCwga2V5XSBvZiBTRUVEX1BST1BTKSBzZXRTdHlsZVByb3BlcnR5KGhvc3QsIHByb3AsIG5leHRba2V5XSk7XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQucHJpbWFyeSkpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IobmV4dC5zZWNvbmRhcnkpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQudGVydGlhcnkpKSByZXR1cm47XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5LCBodG1sLCAud2YtZGVtby1yb290LCB1aS13aW5kb3csIC52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShlbCwgXCItLWNvbG9yLXByaW1hcnlcIiwgbmV4dC5wcmltYXJ5KTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGVsLCBcIi0tYmFzZS1jb2xvclwiLCBuZXh0LnByaW1hcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci10ZXJ0aWFyeVwiLCBuZXh0LnRlcnRpYXJ5KTtcblx0fSk7XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1wcmltYXJ5XCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXNlLWNvbG9yXCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItdGVydGlhcnlcIiwgbmV4dC50ZXJ0aWFyeSk7XG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidTItdGhlbWUtY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0c291cmNlOiBcIndhbGxwYXBlclwiLFxuXHRcdHNlZWRzOiBuZXh0XG5cdH0gfSkpO1xufTtcbnZhciBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVkpO1xuXHRcdGlmICghcmF3KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0aWYgKCFwYXJzZWQ/LnByaW1hcnkgfHwgIXBhcnNlZD8uc2Vjb25kYXJ5IHx8ICFwYXJzZWQ/LnRlcnRpYXJ5KSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciA9IGFzeW5jIChpbWdVUkwsIG9wdHMpID0+IHtcblx0Y29uc3Qgc3JjS2V5ID0gdHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIiA/IGltZ1VSTC5zbGljZSgwLCAyMDQ4KSA6IGBibG9iOiR7aW1nVVJMLm5hbWUgfHwgXCJ3YWxscGFwZXJcIn06JHtpbWdVUkwuc2l6ZX1gO1xuXHRpZiAodHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGlmICghaW1nVVJMKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmZhaWxlZFdhbGxwYXBlclNyY1wiKV0/LmhhcyhpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoaW1nVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAhL15kYXRhOmltYWdlXFwvL2kudGVzdChpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoL3ZpZGVvXFwvbXAydC9pLnRlc3QoaW1nVVJMKSkgcmV0dXJuIG51bGw7XG5cdFx0aWYgKC9cXC9hc3NldHNcXC93YWxscGFwZXJcXC5qcGcoPzokfFs/I10pL2kudGVzdChpbWdVUkwpKSB0cnkge1xuXHRcdFx0Y29uc3Qgc2t1ID0gU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcFNrdSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgaG9zdCA9IFN0cmluZyhnbG9iYWxUaGlzLmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHNrdSA9PT0gXCJwcm9jZXNzXCIgfHwgaG9zdCA9PT0gXCJwcm9jZXNzLnUycmUuc3BhY2VcIiB8fCBob3N0ID09PSBcIndvcmtjZW50ZXIudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwiYWkudTJyZS5zcGFjZVwiKSByZXR1cm4gbnVsbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbWdVUkwgaW5zdGFuY2VvZiBCbG9iICYmIGltZ1VSTC50eXBlICYmICFpbWdVUkwudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpICYmIGltZ1VSTC50eXBlICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgbGl2ZUx1bWEgPSBhd2FpdCBzYW1wbGVJbWFnZU1lYW5MdW1hKGltZ1VSTCk7XG5cdGlmIChsaXZlTHVtYSAhPSBudWxsKSBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEobGl2ZUx1bWEpO1xuXHRpZiAoIW9wdHM/LmZvcmNlKSB0cnkge1xuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXQUxMUEFQRVJfVVJMX0tFWSkgPT09IHNyY0tleSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdFx0XHR9IDogY2FjaGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdGNvbnN0IGNlbnRyb2lkcyA9IGF3YWl0IGdldERvbWluYW50Q29sb3JzKGltZ1VSTCk7XG5cdFx0Y29uc3Qgc2VlZHMgPSByYW5rV2FsbHBhcGVyU2VlZHMoY2VudHJvaWRzLCBsaXZlTHVtYSA/PyB2b2lkIDApO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdC4uLnNlZWRzLFxuXHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdH0gOiBzZWVkcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIGZhaWxlZFwiLCBlcnIpO1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRpZiAoY2FjaGVkKSBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8vIHNyYy9jYW52YXMvQ2FudmFzLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFVTRVJfV0FMTFBBUEVSX1BBVEggPSBcIi9hc3NldHMvdXNlci13YWxscGFwZXJcIjtcbnZhciBVU0VSX1dBTExQQVBFUl9DQUNIRSA9IFwiY3dzcC11c2VyLXdhbGxwYXBlclwiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciB3YWxscGFwZXJFcG9jaCA9IDA7XG52YXIgY3VycmVudE9yaWVudE51bWJlciA9ICgpID0+IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG52YXIgaXNJZGJQb2ludGVyID0gKHBvaW50ZXIpID0+IHBvaW50ZXIgPT09IFwiaWRiOnJzLXdhbGxwYXBlclwiIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImlkYjpcIik7XG52YXIgaXNVbnVzYWJsZVN0b3JlZFVybCA9IChwb2ludGVyKSA9PiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAocG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgfHwgIS9eZGF0YTppbWFnZVxcLy9pLnRlc3QocG9pbnRlcikpO1xudmFyIHJldm9rZUxpdmVPYmplY3RVcmwgPSAoKSA9PiB7XG5cdHdhbGxwYXBlckVwb2NoICs9IDE7XG5cdGlmIChsaXZlT2JqZWN0VXJsICYmIGxpdmVPYmplY3RVcmwuc3RhcnRzV2l0aChcImJsb2I6XCIpKSB0cnkge1xuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwobGl2ZU9iamVjdFVybCk7XG5cdH0gY2F0Y2gge31cblx0bGl2ZU9iamVjdFVybCA9IG51bGw7XG59O1xudmFyIGFkb3B0V2FsbHBhcGVyQmxvYiA9IChibG9iLCBlcG9jaCkgPT4ge1xuXHRpZiAoZXBvY2ggIT09IHdhbGxwYXBlckVwb2NoKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0aWYgKGxpdmVPYmplY3RVcmwpIHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIG9wZW5XYWxscGFwZXJEYiA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0aWYgKHR5cGVvZiBpbmRleGVkREIgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRyZWplY3QoLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcImluZGV4ZWREQiB1bmF2YWlsYWJsZVwiKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKElEQl9OQU1FLCAxKTtcblx0cmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcblx0XHRjb25zdCBkYiA9IHJlcS5yZXN1bHQ7XG5cdFx0aWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKElEQl9TVE9SRSkpIGRiLmNyZWF0ZU9iamVjdFN0b3JlKElEQl9TVE9SRSk7XG5cdH07XG5cdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xuXHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBvcGVuIGZhaWxlZFwiKSk7XG59KTtcbnZhciBpZGJQdXRXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRjb25zdCBkYiA9IGF3YWl0IG9wZW5XYWxscGFwZXJEYigpO1xuXHR0cnkge1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWR3cml0ZVwiKTtcblx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkucHV0KGJsb2IsIElEQl9LRVkpO1xuXHRcdFx0dHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcblx0XHRcdHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBwdXQgZmFpbGVkXCIpKTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRkYi5jbG9zZSgpO1xuXHR9XG59O1xudmFyIGlkYkdldFdhbGxwYXBlciA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZ2V0KElEQl9LRVkpO1xuXHRcdFx0cmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdiA9IHJlcS5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodiBpbnN0YW5jZW9mIEJsb2IgPyB2IDogbnVsbCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZ2V0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBjYWNoZVVzZXJXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkgcmV0dXJuO1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKFVTRVJfV0FMTFBBUEVSX0NBQ0hFKTtcblx0Y29uc3QgdHlwZSA9IGJsb2IudHlwZSAmJiBibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSA/IGJsb2IudHlwZSA6IFwiaW1hZ2UvanBlZ1wiO1xuXHRhd2FpdCBjYWNoZS5wdXQobmV3IFJlcXVlc3QoVVNFUl9XQUxMUEFQRVJfUEFUSCksIG5ldyBSZXNwb25zZShibG9iLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogdHlwZSB9IH0pKTtcbn07XG52YXIgY2xlYXJDYWNoZWRVc2VyV2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGF3YWl0IChhd2FpdCBjYWNoZXMub3BlbihVU0VSX1dBTExQQVBFUl9DQUNIRSkpLmRlbGV0ZShuZXcgUmVxdWVzdChVU0VSX1dBTExQQVBFUl9QQVRIKSk7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlckJsb2JVcmwgPSBhc3luYyAoKSA9PiB7XG5cdGlmIChsaXZlT2JqZWN0VXJsKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0Y29uc3QgZXBvY2ggPSB3YWxscGFwZXJFcG9jaDtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCk7XG5cdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIGVwb2NoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBpc0lubGluZVBheWxvYWQgPSAodXJsKSA9PiB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHVybC5zdGFydHNXaXRoKFwiYmxvYjpcIik7XG52YXIgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRpZiAoaXNJZGJQb2ludGVyKHBvaW50ZXIpIHx8IGlzVW51c2FibGVTdG9yZWRVcmwocG9pbnRlcikpIHtcblx0XHRjb25zdCB1cmwgPSBhd2FpdCByZXN0b3JlV2FsbHBhcGVyQmxvYlVybCgpO1xuXHRcdGlmICh1cmwpIHtcblx0XHRcdGlmICghaXNJZGJQb2ludGVyKHBvaW50ZXIpKSB3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0XHRcdHJldHVybiB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlcigpID8gXCJcIiA6IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRpZiAocHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIoKSAmJiAoIXBvaW50ZXIgfHwgcG9pbnRlciA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSkgcmV0dXJuIFwiXCI7XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgd2FybVByb21pc2UgPSBudWxsO1xudmFyIHdhcm1BcHBXYWxscGFwZXIgPSAoKSA9PiB7XG5cdGlmICh3YXJtUHJvbWlzZSkgcmV0dXJuIHdhcm1Qcm9taXNlO1xuXHR3YXJtUHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRcdGlmIChpc0lkYlBvaW50ZXIocG9pbnRlcikgfHwgaXNVbnVzYWJsZVN0b3JlZFVybChwb2ludGVyKSkge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHRcdFx0Y29uc3QgdXJsID0gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIHdhbGxwYXBlckVwb2NoKTtcblx0XHRcdHJldHVybiB1cmwgPyB7XG5cdFx0XHRcdHVybCxcblx0XHRcdFx0YmxvYlxuXHRcdFx0fSA6IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVybCA9IHBvaW50ZXIgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRcdGlmICghdXJsIHx8IHVybCA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSB0cnkge1xuXHRcdFx0aWYgKFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmRhdGFzZXQ/LmN3c3BTa3UgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9jZXNzXCIpIHJldHVybiBudWxsO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghdXJsKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCByc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KTtcblx0XHRpZiAoIXJzcC5vaykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0aWYgKCFibG9iLnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybCxcblx0XHRcdGJsb2Jcblx0XHR9O1xuXHR9KSgpLmNhdGNoKCgpID0+IG51bGwpO1xuXHRyZXR1cm4gd2FybVByb21pc2U7XG59O1xudmFyIHdhcm1lZEJsb2JGb3IgPSBhc3luYyAoc3JjKSA9PiB7XG5cdGlmICghd2FybVByb21pc2UgfHwgIXNyYykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHdhcm0gPSBhd2FpdCB3YXJtUHJvbWlzZTtcblx0aWYgKCF3YXJtKSByZXR1cm4gbnVsbDtcblx0aWYgKHdhcm0udXJsID09PSBzcmMgfHwgd2FybS51cmwgPT09IHNyYy5zcGxpdChcIiNcIilbMF0pIHJldHVybiB3YXJtLmJsb2I7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciA9ICgpID0+IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xudmFyIHN5bmNDYW52YXNPcmllbnQgPSAoY2FudmFzKSA9PiB7XG5cdGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG4gPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyhuKTtcblx0XHRpZiAoY2FudmFzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgIT09IHMpIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLm9yaWVudCA9IG47XG5cdH07XG5cdGFwcGx5KCk7XG5cdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcyhhcHBseSk7XG59O1xudmFyIHN5bmNBcHBXYWxscGFwZXJPcmllbnQgPSAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKS5mb3JFYWNoKChjYW52YXMpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdH0pO1xufTtcbnZhciByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQgPSAoKSA9PiB7XG5cdHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKS50aGVuKCh1cmwpID0+IHtcblx0XHRzeW5jQXBwV2FsbHBhcGVyT3JpZW50KCk7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdH0pO1xufTtcbnZhciBzeW5jR2xvd1RvVGhlbWUgPSAoZ2xvdykgPT4ge1xuXHRnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY29sb3ItcHJpbWFyeVwiKS50cmltKCk7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbn07XG52YXIgcGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzID0gKHBhaW50VXJsKSA9PiB7XG5cdGNvbnN0IGNhbnZhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCIpO1xuXHRjb25zdCBvcmllbnQgPSBTdHJpbmcoY3VycmVudE9yaWVudE51bWJlcigpKTtcblx0Y2FudmFzZXMuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHBhaW50VXJsKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgb3JpZW50KTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgb3JpZW50KTtcblx0fSk7XG59O1xudmFyIGRhdGFVcmxUb0Jsb2IgPSBhc3luYyAoZGF0YVVybCkgPT4ge1xuXHRyZXR1cm4gKGF3YWl0IGZldGNoKGRhdGFVcmwpKS5ibG9iKCk7XG59O1xudmFyIHNldEFwcFdhbGxwYXBlckZyb21CbG9iID0gYXN5bmMgKGJsb2IpID0+IHtcblx0aWYgKCEoYmxvYiBpbnN0YW5jZW9mIEJsb2IpIHx8IGJsb2Iuc2l6ZSA8PSAwKSB7XG5cdFx0c2V0QXBwV2FsbHBhcGVyKERFRkFVTFRfV0FMTFBBUEVSX1VSTCk7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMobGl2ZU9iamVjdFVybCk7XG5cdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKGJsb2IsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaWRiUHV0V2FsbHBhcGVyKGJsb2IpO1xuXHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIElEQiBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0Y29uc3QgZGF0YVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQgfHwgXCJcIikpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChyZWFkZXIuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcInJlYWQgZmFpbGVkXCIpKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChkYXRhVXJsICYmICF3cml0ZVN0b3JhZ2VQb2ludGVyKGRhdGFVcmwpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIGxvY2FsU3RvcmFnZSBwZXJzaXN0IGFsc28gZmFpbGVkIChxdW90YT8pXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHR0cnkge1xuXHRcdGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcImN3c3Atd2FsbHBhcGVyLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdFx0cG9pbnRlcjogV0FMTFBBUEVSX0lEQl9NQVJLRVIsXG5cdFx0XHR1cmw6IGxpdmVPYmplY3RVcmxcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcbn07XG52YXIgaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyID0gKGNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCByb290ID0gY29udGFpbmVyO1xuXHRyb290LnJlcGxhY2VDaGlsZHJlbigpO1xuXHRyb290LmRhdGFzZXQuYXBwTGF5ZXIgPSBcImNhbnZhc1wiO1xuXHRyb290LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRyb290LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRyb290LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGdsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRnbG93LmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fZ2xvd1wiO1xuXHRnbG93LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRnbG93LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdGdsb3cuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHsgaXM6IFwidWktY2FudmFzXCIgfSk7XG5cdGNhbnZhcy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2ltYWdlIHVpLWNhbnZhc1wiO1xuXHRjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdGNhbnZhcy5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRjYW52YXMuc3R5bGUuaW5saW5lU2l6ZSA9IFwibWluKDEwMGNxaSwgMTAwZHZpKVwiO1xuXHRjYW52YXMuc3R5bGUuYmxvY2tTaXplID0gXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhJbmxpbmVTaXplID0gXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhCbG9ja1NpemUgPSBcIm1pbigxMDBjcWIsIDEwMGR2YilcIjtcblx0Y2FudmFzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0Y2FudmFzLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwibm9ybWFsXCI7XG5cdGNhbnZhcy5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcblx0Y2FudmFzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJub25lXCI7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImR5bmFtaWMtcmFuZ2UtbGltaXRcIiwgXCJuby1saW1pdFwiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3Itc3BhY2VcIiwgZ2V0Q3VycmVudERpc3BsYXlDb2xvclNwYWNlKCkgfHwgXCJkaXNwbGF5LXAzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIiwgXCJpbXBvcnRhbnRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRjYW52YXMuc2V0QXR0cmlidXRlKFwiaXNcIiwgXCJ1aS1jYW52YXNcIik7XG5cdGNvbnN0IHBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHBvc3Rlci5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX3Bvc3RlclwiO1xuXHRwb3N0ZXIuYWx0ID0gXCJcIjtcblx0cG9zdGVyLmRlY29kaW5nID0gXCJhc3luY1wiO1xuXHRwb3N0ZXIuc2V0QXR0cmlidXRlKFwiZmV0Y2hwcmlvcml0eVwiLCBcImhpZ2hcIik7XG5cdHBvc3Rlci5kcmFnZ2FibGUgPSBmYWxzZTtcblx0cG9zdGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRwb3N0ZXIuc3R5bGUuaW5zZXQgPSBcIjBcIjtcblx0cG9zdGVyLnN0eWxlLmlubGluZVNpemUgPSBcIm1pbigxMDBjcWksIDEwMGR2aSlcIjtcblx0cG9zdGVyLnN0eWxlLmJsb2NrU2l6ZSA9IFwibWluKDEwMGNxYiwgMTAwZHZiKVwiO1xuXHRwb3N0ZXIuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRwb3N0ZXIuc3R5bGUub2JqZWN0UG9zaXRpb24gPSBcImNlbnRlclwiO1xuXHRwb3N0ZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRyb290LmFwcGVuZChjYW52YXMpO1xuXHRwb3N0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jd3NwLXdhbGxwYXBlci1wb3N0ZXJcIik7XG5cdFx0fSBjYXRjaCB7fVxuXHR9LCB7IG9uY2U6IHRydWUgfSk7XG5cdHBvc3Rlci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xuXHRcdHBvc3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0aWYgKHBvc3Rlci5zcmMuaW5jbHVkZXMoXCIvYXNzZXRzL3VzZXItd2FsbHBhcGVyXCIpKSBwb3N0ZXIucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHR9KTtcblx0cmVtZW1iZXJNaXNzaW5nRGVmYXVsdFdhbGxwYXBlcigpO1xuXHRjb25zdCBwb2ludGVyID0gcmVhZFN0b3JhZ2VQb2ludGVyKCk7XG5cdGNvbnN0IGNvbGRVcmwgPSBpc0lkYlBvaW50ZXIocG9pbnRlcikgPyBVU0VSX1dBTExQQVBFUl9QQVRIIDogcG9pbnRlci5zdGFydHNXaXRoKFwiZGF0YTpcIikgfHwgcG9pbnRlci5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBcIlwiIDogcG9pbnRlcjtcblx0Y29uc3Qgd2FybWluZyA9IHdhcm1BcHBXYWxscGFwZXIoKTtcblx0aWYgKGNvbGRVcmwgJiYgIWZhaWxlZFdhbGxwYXBlclNyYy5oYXMoY29sZFVybCkpIHtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgY29sZFVybCk7XG5cdFx0cG9zdGVyLnNyYyA9IGNvbGRVcmw7XG5cdH1cblx0d2FybWluZy50aGVuKCh3YXJtKSA9PiB7XG5cdFx0aWYgKCF3YXJtIHx8ICFwb3N0ZXIuaXNDb25uZWN0ZWQpIHJldHVybjtcblx0XHRpZiAod2FybS51cmwuc3RhcnRzV2l0aChcImJsb2I6XCIpKSB7XG5cdFx0XHRwb3N0ZXIuc3JjID0gd2FybS51cmw7XG5cdFx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgd2FybS51cmwpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXBvc3Rlci5nZXRBdHRyaWJ1dGUoXCJzcmNcIikpIHBvc3Rlci5zcmMgPSB3YXJtLnVybDtcblx0fSk7XG5cdGNvbnN0IGRpc3Bvc2VPcmllbnQgPSBzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlKCk7XG5cdHN5bmNHbG93VG9UaGVtZShnbG93KTtcblx0KGFzeW5jICgpID0+IHtcblx0XHRjb25zdCB3YWxscGFwZXIgPSBhd2FpdCByZXNvbHZlQXBwV2FsbHBhcGVyVXJsKCk7XG5cdFx0aWYgKCF3YWxscGFwZXIgfHwgZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyh3YWxscGFwZXIpKSB7XG5cdFx0XHRzeW5jR2xvd1RvVGhlbWUoZ2xvdyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCB3YWxscGFwZXIpO1xuXHRcdGlmIChwb3N0ZXIuaXNDb25uZWN0ZWQpIHBvc3Rlci5zcmMgPSB3YWxscGFwZXI7XG5cdFx0c3luY0NhbnZhc09yaWVudChjYW52YXMpO1xuXHRcdGNvbnN0IHRoZW1lU3JjID0gd2FsbHBhcGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpIHx8IHdhbGxwYXBlciA6IHdhbGxwYXBlcjtcblx0XHRjb25zdCBleHRyYWN0ID0gKCkgPT4ge1xuXHRcdFx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIodGhlbWVTcmMpLnRoZW4oKCkgPT4gc3luY0dsb3dUb1RoZW1lKGdsb3cpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHJpYyA9IGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjaztcblx0XHRpZiAodHlwZW9mIHJpYyA9PT0gXCJmdW5jdGlvblwiKSByaWMoZXh0cmFjdCwgeyB0aW1lb3V0OiAxMjAwIH0pO1xuXHRcdGVsc2UgZ2xvYmFsVGhpcy5zZXRUaW1lb3V0Py4oZXh0cmFjdCwgMzIwKTtcblx0fSkoKTtcblx0cmV0dXJuIHtcblx0XHRyb290LFxuXHRcdGNhbnZhcyxcblx0XHRnbG93LFxuXHRcdGRpc3Bvc2VPcmllbnRcblx0fTtcbn07XG52YXIgV0FMTFBBUEVSX0xBWU9VVF9LRVkgPSBcInJzLXdhbGxwYXBlci1sYXlvdXRcIjtcbnZhciBBUFBfV0FMTFBBUEVSX0NBTlZBU19TRUxFQ1RPUiA9IFwiW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXNbaXM9XFxcInVpLWNhbnZhc1xcXCJdLCBbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhcy51aS1jYW52YXNcIjtcbnZhciBub3JtYWxpemVXYWxscGFwZXJTY2FsZSA9IChyYXcpID0+IHtcblx0Y29uc3QgdmFsdWUgPSB0eXBlb2YgcmF3ID09PSBcIm51bWJlclwiID8gcmF3IDogdHlwZW9mIHJhdyA9PT0gXCJzdHJpbmdcIiA/IE51bWJlcihyYXcudHJpbSgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgveCQvLCBcIlwiKSkgOiBOYU47XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMCA/IHZhbHVlIDogMTtcbn07XG52YXIgbm9ybWFsaXplV2FsbHBhcGVyUG9zaXRpb24gPSAocmF3KSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gdHlwZW9mIHJhdyA9PT0gXCJzdHJpbmdcIiA/IHJhdy50cmltKCkudG9Mb3dlckNhc2UoKSA6IFwiXCI7XG5cdGlmICh2YWx1ZSA9PT0gXCJzdGFydFwiIHx8IHZhbHVlID09PSBcImNlbnRlclwiIHx8IHZhbHVlID09PSBcImVuZFwiKSByZXR1cm4gdmFsdWU7XG5cdGlmICgvXlsrLV0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKSUkLy50ZXN0KHZhbHVlKSkge1xuXHRcdGNvbnN0IHBlcmNlbnQgPSBOdW1iZXIodmFsdWUuc2xpY2UoMCwgLTEpKTtcblx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKHBlcmNlbnQpKSByZXR1cm4gYCR7TWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwZXJjZW50KSl9JWA7XG5cdH1cblx0cmV0dXJuIFwiY2VudGVyXCI7XG59O1xudmFyIHdhbGxwYXBlclBvc2l0aW9uUmF0aW8gPSAocmF3KSA9PiB7XG5cdGNvbnN0IHBvc2l0aW9uID0gbm9ybWFsaXplV2FsbHBhcGVyUG9zaXRpb24ocmF3KTtcblx0aWYgKHBvc2l0aW9uID09PSBcInN0YXJ0XCIpIHJldHVybiAwO1xuXHRpZiAocG9zaXRpb24gPT09IFwiY2VudGVyXCIpIHJldHVybiAuNTtcblx0aWYgKHBvc2l0aW9uID09PSBcImVuZFwiKSByZXR1cm4gMTtcblx0cmV0dXJuIE51bWJlcihwb3NpdGlvbi5zbGljZSgwLCAtMSkpIC8gMTAwO1xufTtcbnZhciBub3JtYWxpemVXYWxscGFwZXJMYXlvdXQgPSAobGF5b3V0KSA9PiAoe1xuXHRzY2FsZTogbm9ybWFsaXplV2FsbHBhcGVyU2NhbGUobGF5b3V0Py5zY2FsZSB8fCAxKSxcblx0cG9zaXRpb25YOiBub3JtYWxpemVXYWxscGFwZXJQb3NpdGlvbihsYXlvdXQ/LnBvc2l0aW9uWCA/PyBcImNlbnRlclwiKSxcblx0cG9zaXRpb25ZOiBub3JtYWxpemVXYWxscGFwZXJQb3NpdGlvbihsYXlvdXQ/LnBvc2l0aW9uWSA/PyBcImNlbnRlclwiKVxufSk7XG52YXIgc2Vzc2lvbldhbGxwYXBlckxheW91dDtcbnZhciBnZXRBcHBXYWxscGFwZXJMYXlvdXQgPSAoKSA9PiB7XG5cdGlmIChzZXNzaW9uV2FsbHBhcGVyTGF5b3V0KSByZXR1cm4geyAuLi5zZXNzaW9uV2FsbHBhcGVyTGF5b3V0IH07XG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZVdhbGxwYXBlckxheW91dChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdBTExQQVBFUl9MQVlPVVRfS0VZKSA/PyBcIm51bGxcIikpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplV2FsbHBhcGVyTGF5b3V0KCk7XG5cdH1cbn07XG52YXIgYXBwbHlXYWxscGFwZXJMYXlvdXQgPSAoY2FudmFzLCBsYXlvdXQpID0+IHtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcInNjYWxlXCIsIFN0cmluZyhsYXlvdXQuc2NhbGUpKTtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uLXhcIiwgbGF5b3V0LnBvc2l0aW9uWCk7XG5cdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvbi15XCIsIGxheW91dC5wb3NpdGlvblkpO1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXJMYXlvdXQgPSAocGF0Y2gpID0+IHtcblx0Y29uc3QgbGF5b3V0ID0gbm9ybWFsaXplV2FsbHBhcGVyTGF5b3V0KHtcblx0XHQuLi5nZXRBcHBXYWxscGFwZXJMYXlvdXQoKSxcblx0XHQuLi5wYXRjaFxuXHR9KTtcblx0c2Vzc2lvbldhbGxwYXBlckxheW91dCA9IGxheW91dDtcblx0dHJ5IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXQUxMUEFQRVJfTEFZT1VUX0tFWSwgSlNPTi5zdHJpbmdpZnkobGF5b3V0KSk7XG5cdH0gY2F0Y2gge31cblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChBUFBfV0FMTFBBUEVSX0NBTlZBU19TRUxFQ1RPUikuZm9yRWFjaCgoY2FudmFzKSA9PiBhcHBseVdhbGxwYXBlckxheW91dChjYW52YXMsIGxheW91dCkpO1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXIgPSAod2FsbHBhcGVyVXJsKSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gU3RyaW5nKHdhbGxwYXBlclVybCB8fCBcIlwiKS50cmltKCkgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRpZiAoaXNJbmxpbmVQYXlsb2FkKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMpIHtcblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IGF3YWl0IChhd2FpdCBmZXRjaCh2YWx1ZSkpLmJsb2IoKSA6IGF3YWl0IGRhdGFVcmxUb0Jsb2IodmFsdWUpO1xuXHRcdFx0XHRhd2FpdCBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYihibG9iKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gc2V0QXBwV2FsbHBhcGVyIGlubGluZSBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdFx0XHRjb25zdCBmYWxsYmFjayA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IERFRkFVTFRfV0FMTFBBUEVSX1VSTCA6IHZhbHVlO1xuXHRcdFx0XHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMoZmFsbGJhY2spO1xuXHRcdFx0XHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcihmYWxsYmFjaywgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KSgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZGJDbGVhcldhbGxwYXBlcigpO1xuXHRjbGVhckNhY2hlZFVzZXJXYWxscGFwZXIoKTtcblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRpZiAoIXdyaXRlU3RvcmFnZVBvaW50ZXIodmFsdWUpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIHBvaW50ZXIgd3JpdGUgZmFpbGVkXCIpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModmFsdWUpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih2YWx1ZSwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IHZhbHVlLFxuXHRcdFx0dXJsOiB2YWx1ZVxuXHRcdH0gfSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGJsb2JJbWFnZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmxvYlwiKTtcbmdsb2JhbFRoaXNbYmxvYkltYWdlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmxvYkltYWdlTWFwID0gZ2xvYmFsVGhpc1tibG9iSW1hZ2VTeW1ib2xdO1xudmFyIGRlbGF5ZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmRlbGF5ZWRcIik7XG5nbG9iYWxUaGlzW2RlbGF5ZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXSk7XG52YXIgZGVsYXllZCA9IGdsb2JhbFRoaXNbZGVsYXllZFN5bWJvbF07XG52YXIgc2NoZWR1bGVyU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5zY2hlZHVsZXJcIik7XG5nbG9iYWxUaGlzW3NjaGVkdWxlclN5bWJvbF0gPz89IG1ha2VSQUZDeWNsZSgpO1xudmFyIHNjaGVkdWxlclJmID0gZ2xvYmFsVGhpc1tzY2hlZHVsZXJTeW1ib2xdO1xudmFyIGZhaWxlZFdhbGxwYXBlclNyY1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuZmFpbGVkV2FsbHBhcGVyU3JjXCIpO1xuZ2xvYmFsVGhpc1tmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGZhaWxlZFdhbGxwYXBlclNyYyA9IGdsb2JhbFRoaXNbZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sXTtcbnZhciBwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlciA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRpZiAoU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcFNrdSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcInByb2Nlc3NcIikgcmV0dXJuIHRydWU7XG5cdFx0Y29uc3QgaG9zdCA9IFN0cmluZyhnbG9iYWxUaGlzLmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBob3N0ID09PSBcInByb2Nlc3MudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwid29ya2NlbnRlci51MnJlLnNwYWNlXCIgfHwgaG9zdCA9PT0gXCJhaS51MnJlLnNwYWNlXCI7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciByZW1lbWJlck1pc3NpbmdEZWZhdWx0V2FsbHBhcGVyID0gKCkgPT4ge1xuXHRpZiAocHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIoKSkgZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChERUZBVUxUX1dBTExQQVBFUl9VUkwpO1xufTtcbnZhciBnZXRJbWdXaWR0aCA9IChpbWcpID0+IHtcblx0cmV0dXJuIGltZz8ubmF0dXJhbFdpZHRoIHx8IGltZz8ud2lkdGggfHwgMTtcbn07XG52YXIgZ2V0SW1nSGVpZ2h0ID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsSGVpZ2h0IHx8IGltZz8uaGVpZ2h0IHx8IDE7XG59O1xuZnVuY3Rpb24gZ2V0Q3VycmVudERpc3BsYXlDb2xvclNwYWNlKCkge1xuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIoY29sb3ItZ2FtdXQ6IHJlYzIwMjApXCIpLm1hdGNoZXMpIHJldHVybiBcInJlYzIwMjBcIjtcblx0ZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIoY29sb3ItZ2FtdXQ6IHAzKVwiKS5tYXRjaGVzKSByZXR1cm4gXCJkaXNwbGF5LXAzXCI7XG5cdGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKGNvbG9yLWdhbXV0OiBzcmdiKVwiKS5tYXRjaGVzKSByZXR1cm4gXCJzcmdiXCI7XG5cdHJldHVybiBcInNyZ2JcIjtcbn1cbnZhciBjcmVhdGUyZENvbnRleHQgPSAoY2FudmFzKSA9PiB7XG5cdGNvbnN0IGJhc2UgPSB7XG5cdFx0YWxwaGE6IHRydWUsXG5cdFx0ZGVzeW5jaHJvbml6ZWQ6IHRydWUsXG5cdFx0cG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIixcblx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0Y29sb3JTcGFjZTogZ2V0Q3VycmVudERpc3BsYXlDb2xvclNwYWNlKCkgfHwgXCJkaXNwbGF5LXAzXCIsXG5cdFx0Y29sb3JUeXBlOiBcImZsb2F0MTZcIixcblx0XHRwaXhlbEZvcm1hdDogXCJyZ2JhLWZsb2F0MTZcIlxuXHR9O1xuXHR0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5kYXRhc2V0Py5jd3NwTmF0aXZlU2hlbGw7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgYmFzZSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG59O1xudmFyIEhBTEZfUEkgPSAxLjU3MDc5NjMyNjc5NDg5NjY7XG52YXIgY2FsbEJ5RnJhbWUgPSAocG9pbnRlcklkLCBjYikgPT4ge1xuXHRkZWxheWVkLnNldChwb2ludGVySWQsIGNiKTtcbn07XG52YXIgY292ZXIgPSAoY3R4LCBpbWcsIHNjYWxlID0gMSwgcG9ydCwgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBjdHguY2FudmFzO1xuXHRjdHgudHJhbnNsYXRlKE1hdGgucm91bmQoY2FudmFzLndpZHRoIC8gMiksIE1hdGgucm91bmQoY2FudmFzLmhlaWdodCAvIDIpKTtcblx0Y3R4LnJvdGF0ZShNYXRoLnJvdW5kKCgtb3JpZW50IHx8IDApICsgKDEgLSBwb3J0KSkgKiBIQUxGX1BJKTtcblx0Y3R4LnRyYW5zbGF0ZShNYXRoLnJvdW5kKC0oZ2V0SW1nV2lkdGgoaW1nKSAvIDIpICogc2NhbGUpLCBNYXRoLnJvdW5kKC0oZ2V0SW1nSGVpZ2h0KGltZykgLyAyKSAqIHNjYWxlKSk7XG59O1xudmFyIGlzRGVjb2RhYmxlU291cmNlID0gKGJsb2IpID0+IHtcblx0aWYgKCFibG9iKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBCbG9iKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiBGaWxlID09PSBcImZ1bmN0aW9uXCIgJiYgYmxvYiBpbnN0YW5jZW9mIEZpbGUpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIE9mZnNjcmVlbkNhbnZhcyA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXMpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIEltYWdlQml0bWFwID09PSBcImZ1bmN0aW9uXCIgJiYgYmxvYiBpbnN0YW5jZW9mIEltYWdlQml0bWFwKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiBJbWFnZSA9PT0gXCJmdW5jdGlvblwiICYmIGJsb2IgaW5zdGFuY2VvZiBJbWFnZSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiB0eXBlb2YgYmxvYiA9PT0gXCJvYmplY3RcIjtcbn07XG52YXIgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSA9IChibG9iKSA9PiB7XG5cdGlmICghYmxvYkltYWdlTWFwLmhhcyhibG9iKSAmJiBpc0RlY29kYWJsZVNvdXJjZShibG9iKSkge1xuXHRcdGNvbnN0IGVkZ2UgPSAoKCkgPT4ge1xuXHRcdFx0Y29uc3QgZHByID0gTWF0aC5taW4oZ2xvYmFsVGhpcy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuXHRcdFx0Y29uc3QgY3NzID0gTWF0aC5tYXgoZ2xvYmFsVGhpcy5zY3JlZW4/LndpZHRoIHx8IDAsIGdsb2JhbFRoaXMuc2NyZWVuPy5oZWlnaHQgfHwgMCwgODAwKTtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KDE2LCBjc3MgKiBkcHIpKTtcblx0XHR9KSgpO1xuXHRcdGNvbnN0IHBlbmRpbmcgPSAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiYgYmxvYiBpbnN0YW5jZW9mIEJsb2IgJiYgYmxvYi5zaXplID4gMThlNCkgdHJ5IHtcblx0XHRcdFx0cmV0dXJuIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IsIHtcblx0XHRcdFx0XHRyZXNpemVXaWR0aDogZWRnZSxcblx0XHRcdFx0XHRyZXNpemVRdWFsaXR5OiBcImhpZ2hcIlxuXHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHR9KSgpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGJsb2JJbWFnZU1hcC5kZWxldGUoYmxvYik7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdFx0YmxvYkltYWdlTWFwLnNldChibG9iLCBwZW5kaW5nKTtcblx0fVxuXHRyZXR1cm4gYmxvYkltYWdlTWFwLmdldChibG9iKTtcbn07XG52YXIgYmluZENhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5iaW5kQ2FjaGVcIik7XG5nbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRDYWNoZSA9IGdsb2JhbFRoaXNbYmluZENhY2hlU3ltYm9sXTtcbnZhciBiaW5kQ2FjaGVkID0gKGNiLCBjdHgpID0+IHtcblx0Y29uc3QgY2FjaGVkID0gYmluZENhY2hlLmdldChjdHgpO1xuXHRpZiAodHlwZW9mIGNhY2hlZCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY2FjaGVkO1xuXHRjb25zdCBib3VuZCA9IGNiLmJpbmQoY3R4KTtcblx0YmluZENhY2hlLnNldChjdHgsIGJvdW5kKTtcblx0cmV0dXJuIGJvdW5kO1xufTtcbnZhciByYWZZaWVsZCA9ICgpID0+IHtcblx0cmV0dXJuIFByb21pc2UucmFjZShbc2NoZWR1bGVyPy55aWVsZCgpLCBuZXcgUHJvbWlzZSgocnYpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShydikpXSk7XG59O1xudmFyIFVJQ2FudmFzID0gbnVsbDtcbmlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIikgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyBleHRlbmRzIEhUTUxDYW52YXNFbGVtZW50IHtcblx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcblx0XHRcImRhdGEtc3JjXCIsXG5cdFx0XCJkYXRhLW9yaWVudFwiLFxuXHRcdFwib3JpZW50XCIsXG5cdFx0XCJzY2FsZVwiLFxuXHRcdFwicG9zaXRpb24teFwiLFxuXHRcdFwicG9zaXRpb24teVwiXG5cdF07XG5cdGN0eCA9IG51bGw7XG5cdGltYWdlID0gbnVsbDtcblx0I3NpemUgPSBbMSwgMV07XG5cdCNsb2FkaW5nID0gXCJcIjtcblx0I3JlYWR5ID0gXCJcIjtcblx0Z2V0ICNvcmllbnQoKSB7XG5cdFx0Y29uc3QgcmF3ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSA/PyB0aGlzLmdldEF0dHJpYnV0ZShcIm9yaWVudFwiKSA/PyBcIjBcIjtcblx0XHRjb25zdCBuID0gTnVtYmVyLnBhcnNlSW50KHJhdywgMTApIHx8IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0fVxuXHRzZXQgI29yaWVudCh2YWx1ZSkge1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcodmFsdWUgPz8gY3VycmVudE9yaWVudE51bWJlcigpKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHR9XG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PT0gXCJkYXRhLXNyY1wiKSB7XG5cdFx0XHR0aGlzLiNwcmVsb2FkKG5ld1ZhbHVlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHQjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0I2luaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgY2FudmFzID0gdGhpcztcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0Y29uc3QgZml4U2l6ZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IG9sZCA9IHRoaXMuI3NpemU7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLiNvcmllbnQgPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgZ2xvYmFsVGhpcz8uc2NyZWVuPy5hdmFpbFdpZHRoIHx8IHNjcmVlbj8ud2lkdGgpIHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSksIE1hdGgubWluKE1hdGgubWluKE1hdGgubWF4KHRoaXMuY2xpZW50SGVpZ2h0IHx8IHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxKSAqICh0aGlzLmN1cnJlbnRDU1Nab29tIHx8IDEpLCBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgZ2xvYmFsVGhpcz8uc2NyZWVuPy5hdmFpbEhlaWdodCB8fCBzY3JlZW4/LmhlaWdodCkgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0XHRpZiAob2xkPy5bMF0gIT0gdGhpcy4jc2l6ZVswXSB8fCBvbGQ/LlsxXSAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHRcdH07XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuaW5lcnQgPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cdFx0XHR0aGlzLnN0eWxlLm9iamVjdFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcblx0XHRcdGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJ1LWNhbnZhc1wiKSkgdGhpcy5jbGFzc0xpc3QuYWRkKFwidS1jYW52YXNcIik7XG5cdFx0XHRpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwidTItY2FudmFzXCIpKSB0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1Mi1jYW52YXNcIik7XG5cdFx0XHRpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwidWktY2FudmFzXCIpKSB0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1aS1jYW52YXNcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImJsb2NrLXNpemVcIiwgXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1pbmxpbmUtc2l6ZVwiLCBcIm1pbigxMDBjcWksIDEwMGR2aSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImR5bmFtaWMtcmFuZ2UtbGltaXRcIiwgXCJuby1saW1pdFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zcGFjZVwiLCBnZXRDdXJyZW50RGlzcGxheUNvbG9yU3BhY2UoKSB8fCBcImRpc3BsYXktcDNcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImltYWdlLXJlbmRlcmluZ1wiLCBcImF1dG9cIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiZmlsdGVyXCIsIFwibm9uZVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZHJvcC1maWx0ZXJcIiwgXCJub25lXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1peC1ibGVuZC1tb2RlXCIsIFwibm9ybWFsXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmQtYmxlbmQtbW9kZVwiLCBcIm5vcm1hbFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJpc29sYXRpb25cIiwgXCJpc29sYXRlXCIpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuI29yaWVudCA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJhZllpZWxkPy4oKT8udGhlbj8uKCgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG5cdFx0XHRcdGZpeFNpemUoKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgZ2xvYmFsVGhpcz8uc2NyZWVuPy5hdmFpbFdpZHRoIHx8IHNjcmVlbj8ud2lkdGgpIHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSksIE1hdGgubWluKE1hdGgubWluKE1hdGgubWF4KHRoaXMuY2xpZW50SGVpZ2h0IHx8IHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxKSAqICh0aGlzLmN1cnJlbnRDU1Nab29tIHx8IDEpLCBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgZ2xvYmFsVGhpcz8uc2NyZWVuPy5hdmFpbEhlaWdodCB8fCBzY3JlZW4/LmhlaWdodCkgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0XHR0aGlzLmN0eCA9IGNyZWF0ZTJkQ29udGV4dChjYW52YXMpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jdHg/LmNvbmZpZ3VyZUhpZ2hEeW5hbWljUmFuZ2U/Lih7IG1vZGU6IFwiZXh0ZW5kZWRcIiB9KTtcblx0XHRcdFx0Y2FudmFzPy5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRmaXhTaXplKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGJveCA9IGVudHJ5Py5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplPy5bMF0gPz8gZW50cnk/LmNvbnRlbnRCb3hTaXplPy5bMF07XG5cdFx0XHRcdFx0XHRpZiAoYm94KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9sZCA9IHRoaXMuI3NpemU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRwciA9IGVudHJ5Py5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplPy5bMF0gPyAxIDogZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXHRcdFx0XHRcdFx0XHR0aGlzLiNzaXplID0gW01hdGgubWF4KGJveC5pbmxpbmVTaXplICogZHByIHx8IHRoaXMud2lkdGgsIDEpLCBNYXRoLm1heChib3guYmxvY2tTaXplICogZHByIHx8IHRoaXMuaGVpZ2h0LCAxKV07XG5cdFx0XHRcdFx0XHRcdHRoaXMuI29yaWVudCA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRcdFx0XHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLm9ic2VydmUodGhpcywgeyBib3g6IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCIgfSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW3VpLWNhbnZhc10gUmVzaXplT2JzZXJ2ZXIgdW5hdmFpbGFibGU6XCIsIGVycik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuI3ByZWxvYWQodGhpcy4jbG9hZGluZyA9IHRoaXMuZGF0YXNldC5zcmMgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0dGhpcy4jb3JpZW50ID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGlmICh0aGlzLmltYWdlKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHR9XG5cdGFkb3B0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLiNpbml0aWFsaXplKCk7XG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSB8fCB0aGlzLiNsb2FkaW5nKTtcblx0fVxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLiNpbml0aWFsaXplKCk7XG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSB8fCB0aGlzLiNsb2FkaW5nKTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cdGFzeW5jICR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmVhZHkgfHw9IHRoaXMuI2xvYWRpbmc7XG5cdFx0Y29uc3QgaW1nID0gdHlwZW9mIEltYWdlQml0bWFwID09PSBcImZ1bmN0aW9uXCIgJiYgYmxvYiBpbnN0YW5jZW9mIEltYWdlQml0bWFwID8gYmxvYiA6IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUoYmxvYikuY2F0Y2goY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdGlmIChpbWcgJiYgcmVhZHkgPT0gdGhpcy4jbG9hZGluZykge1xuXHRcdFx0dGhpcy5pbWFnZSA9IGltZztcblx0XHRcdHRoaXMuI3JlbmRlcihyZWFkeSk7XG5cdFx0fVxuXHRcdHJldHVybiBibG9iO1xuXHR9XG5cdCRyZW5kZXJQYXNzKHdoYXRJc1JlYWR5KSB7XG5cdFx0Y29uc3QgY2FudmFzID0gdGhpcywgY3R4ID0gdGhpcy5jdHgsIGltZyA9IHRoaXMuaW1hZ2U7XG5cdFx0aWYgKGltZyAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IG51bGwgfHwgd2hhdElzUmVhZHkgPT0gdGhpcy4jbG9hZGluZyB8fCB3aGF0SXNSZWFkeSA9PSB0aGlzLiNyZWFkeSkpIHtcblx0XHRcdGlmICh3aGF0SXNSZWFkeSkgdGhpcy4jcmVhZHkgPSB3aGF0SXNSZWFkeTtcblx0XHRcdGlmICh0aGlzLndpZHRoICE9IHRoaXMuI3NpemVbMF0pIHRoaXMud2lkdGggPSB0aGlzLiNzaXplWzBdO1xuXHRcdFx0aWYgKHRoaXMuaGVpZ2h0ICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuaGVpZ2h0ID0gdGhpcy4jc2l6ZVsxXTtcblx0XHRcdHRoaXMuc3R5bGUuYXNwZWN0UmF0aW8gPSBgJHt0aGlzLndpZHRoIHx8IDF9IC8gJHt0aGlzLmhlaWdodCB8fCAxfWA7XG5cdFx0XHQoKHRoaXMuI29yaWVudCA/PyBjdXJyZW50T3JpZW50TnVtYmVyKCkpIHx8IDApICUgMjtcblx0XHRcdGNvbnN0IGltZ1dpZHRoID0gZ2V0SW1nV2lkdGgoaW1nKTtcblx0XHRcdGNvbnN0IGltZ0hlaWdodCA9IGdldEltZ0hlaWdodChpbWcpO1xuXHRcdFx0Y29uc3QgdHVybnMgPSBNYXRoLnJvdW5kKDEgLSAoaW1nV2lkdGggPD0gaW1nSGVpZ2h0ID8gMSA6IDApIC0gKHRoaXMuI29yaWVudCA/PyBjdXJyZW50T3JpZW50TnVtYmVyKCkpKTtcblx0XHRcdGNvbnN0IHN3YXBzQXhlcyA9IE1hdGguYWJzKHR1cm5zICUgMikgPT09IDE7XG5cdFx0XHRjb25zdCByb3RhdGVkV2lkdGggPSBzd2Fwc0F4ZXMgPyBpbWdIZWlnaHQgOiBpbWdXaWR0aDtcblx0XHRcdGNvbnN0IHJvdGF0ZWRIZWlnaHQgPSBzd2Fwc0F4ZXMgPyBpbWdXaWR0aCA6IGltZ0hlaWdodDtcblx0XHRcdGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoY2FudmFzLndpZHRoIC8gcm90YXRlZFdpZHRoLCBjYW52YXMuaGVpZ2h0IC8gcm90YXRlZEhlaWdodCkgKiBub3JtYWxpemVXYWxscGFwZXJTY2FsZSh0aGlzLmdldEF0dHJpYnV0ZShcInNjYWxlXCIpKTtcblx0XHRcdGNvbnN0IGRyYXdXaWR0aCA9IGltZ1dpZHRoICogc2NhbGU7XG5cdFx0XHRjb25zdCBkcmF3SGVpZ2h0ID0gaW1nSGVpZ2h0ICogc2NhbGU7XG5cdFx0XHRpZiAoIU51bWJlci5pc0Zpbml0ZShkcmF3V2lkdGgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZHJhd0hlaWdodCkpIHJldHVybjtcblx0XHRcdGNvbnN0IGJvdW5kc1dpZHRoID0gc3dhcHNBeGVzID8gZHJhd0hlaWdodCA6IGRyYXdXaWR0aDtcblx0XHRcdGNvbnN0IGJvdW5kc0hlaWdodCA9IHN3YXBzQXhlcyA/IGRyYXdXaWR0aCA6IGRyYXdIZWlnaHQ7XG5cdFx0XHRjb25zdCB4ID0gd2FsbHBhcGVyUG9zaXRpb25SYXRpbyh0aGlzLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uLXhcIikpO1xuXHRcdFx0Y29uc3QgeSA9IHdhbGxwYXBlclBvc2l0aW9uUmF0aW8odGhpcy5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvbi15XCIpKTtcblx0XHRcdGNvbnN0IGxlZnQgPSAoY2FudmFzLndpZHRoIC0gYm91bmRzV2lkdGgpICogeDtcblx0XHRcdGNvbnN0IHRvcCA9IChjYW52YXMuaGVpZ2h0IC0gYm91bmRzSGVpZ2h0KSAqIHk7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0XHRjdHgudHJhbnNsYXRlKGxlZnQgKyBib3VuZHNXaWR0aCAvIDIsIHRvcCArIGJvdW5kc0hlaWdodCAvIDIpO1xuXHRcdFx0XHRjdHgucm90YXRlKHR1cm5zICogSEFMRl9QSSk7XG5cdFx0XHRcdGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRjdHguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gXCJoaWdoXCI7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1nLCAtZHJhd1dpZHRoIC8gMiwgLWRyYXdIZWlnaHQgLyAyLCBkcmF3V2lkdGgsIGRyYXdIZWlnaHQpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0Y29uc3QgcmVhZHkgPSBzcmMgfHwgdGhpcy4jbG9hZGluZztcblx0XHR0aGlzLiNsb2FkaW5nID0gcmVhZHk7XG5cdFx0aWYgKCFyZWFkeSB8fCB0eXBlb2YgcmVhZHkgIT09IFwic3RyaW5nXCIpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZiAoZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyhyZWFkeSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZiAocmVhZHkuc3RhcnRzV2l0aChcImRhdGE6XCIpICYmICEvXmRhdGE6aW1hZ2VcXC8vaS50ZXN0KHJlYWR5KSkge1xuXHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiB3YXJtZWRCbG9iRm9yKHJlYWR5KS50aGVuKChibG9iKSA9PiB7XG5cdFx0XHRpZiAoYmxvYiAmJiByZWFkeSA9PT0gdGhpcy4jbG9hZGluZykgcmV0dXJuIHRoaXMuJHVzZUltYWdlQXNTb3VyY2UoYmxvYiwgcmVhZHkpPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBmZXRjaChyZWFkeSwge1xuXHRcdFx0XHRjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxuXHRcdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdFx0fSk/LnRoZW4/Lihhc3luYyAocnNwKSA9PiB7XG5cdFx0XHRcdGlmICghcnNwLm9rKSB7XG5cdFx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCByc3AuYmxvYigpO1xuXHRcdFx0XHRpZiAoIWJsb2I/LnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xuXHRcdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7XG5cdFx0Y29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cdFx0aWYgKHRoaXMuaW1hZ2UgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSBudWxsIHx8IHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgd2hhdElzUmVhZHkgPT0gdGhpcy4jcmVhZHkpKSByYWZZaWVsZD8uKCk/LnRoZW4/LigoKSA9PiBiaW5kQ2FjaGVkKHRoaXMuJHJlbmRlclBhc3MsIHRoaXMpKHdoYXRJc1JlYWR5KSk7XG5cdH1cbn07XG5lbHNlIFVJQ2FudmFzID0gY2xhc3MgVUlDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cdCRyZW5kZXJQYXNzKHdoYXRJc1JlYWR5KSB7fVxuXHQkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJldHVybiBibG9iO1xuXHR9XG5cdCNwcmVsb2FkKHNyYykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7fVxuXHQjb3JpZW50ID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdCNzaXplID0gWzEsIDFdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG59O1xudHJ5IHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidWktY2FudmFzXCIsIFVJQ2FudmFzLCB7IGV4dGVuZHM6IFwiY2FudmFzXCIgfSk7XG59IGNhdGNoIChlKSB7fVxuXG5leHBvcnQgeyBVSUNhbnZhcywgVVNFUl9XQUxMUEFQRVJfQ0FDSEUsIFVTRVJfV0FMTFBBUEVSX1BBVEgsIFdBTExQQVBFUl9JREJfTUFSS0VSLCBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSwgV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSwgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZLCBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciwgYXBwbHlXYWxscGFwZXJQYXBlckZyb21MdW1hLCBhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zLCBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMsIGJpbmRDYWNoZSwgYmxvYkltYWdlTWFwLCBjYWxsQnlGcmFtZSwgY292ZXIsIGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUsIGRlbGF5ZWQsIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEsIGVsZWN0cm9uQVBJLCBmYWlsZWRXYWxscGFwZXJTcmMsIGdldEFwcFdhbGxwYXBlckxheW91dCwgZ2V0RG9taW5hbnRDb2xvcnMsIGdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyLCBpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIsIGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSwgcXVhbGl0eU1vZGUsIHJhbmtXYWxscGFwZXJTZWVkcywgcmVmcmVzaEFwcFdhbGxwYXBlclBhaW50LCByZWdpc3RlckNvbG9yUHJvcGVydHksIHJlc29sdmVBcHBXYWxscGFwZXJVcmwsIHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlLCBzY2hlZHVsZXJSZiwgc2V0QXBwV2FsbHBhcGVyLCBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiwgc2V0QXBwV2FsbHBhcGVyTGF5b3V0LCBzeW5jQXBwV2FsbHBhcGVyT3JpZW50LCBzeW5jQ2FudmFzT3JpZW50LCB0aGVtZUhvc3RzLCB3YXJtQXBwV2FsbHBhcGVyIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxLQUFBQSxVQUFTO0FBQ2xCLFNBQVMsb0JBQUFDLFNBQXdCO0FBQ2pDLFNBQVMseUJBQUFDLElBQXVCLGdCQUFBQyxJQUFjLHdCQUFBQyxJQUFzQix3QkFBQUMsVUFBNEI7QUFHaEcsSUFBSUMsS0FBYyxrQkFDZEMsS0FBYyxFQUFFLE1BQVE7QUFBQSxFQUMzQixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQ1gsRUFBRSxHQUdFQyxLQUFjLENBQUNDLEdBQU9DLE1BQVE7QUFDakMsTUFBSSxPQUFPRCxLQUFVLFVBQ3JCO0FBQUEsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLElBQUksS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMxQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsSUFBUSxPQUFPO0FBQUEsTUFDckMsSUFBSUEsSUFBUSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLElBQ3RDO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMzQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMxQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsSUFBUSxPQUFPO0FBQUEsTUFDckMsUUFBUUEsSUFBUSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLElBQzFDO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDeEIsSUFBSUEsSUFBUSxPQUFPO0FBQUEsSUFDcEI7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQ3hCLFFBQVFBLElBQVEsT0FBTztBQUFBLElBQ3hCO0FBQUE7QUFDRCxHQUdJRSxLQUFRO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixRQUFRO0FB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Q3ljbGUiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAiZWxlY3Ryb25BUEkiLCAicXVhbGl0eU1vZGUiLCAicGFyc2VOdW1iZXIiLCAiY29sb3IiLCAibGVuIiwgIm5hbWVkIiwgInBhcnNlTmFtZWQiLCAiaGV4IiwgInBhcnNlSGV4IiwgIm1hdGNoIiwgIm51bSQxIiwgInBlciIsICJudW1fcGVyIiwgIm51bV9wZXJfbm9uZSIsICJodWUkMSIsICJjIiwgInJ4X251bV9wZXJfbm9uZSIsICJyZ2JfbnVtX29sZCIsICJyZ2JfcGVyX29sZCIsICJwYXJzZVJnYkxlZ2FjeSIsICJyZXMiLCAicHJlcGFyZSIsICJtb2RlIiwgInBhcnNlIiwgImNvbnZlcnRlciIsICJ0YXJnZXRfbW9kZSIsICJjb252ZXJ0ZXJzIiwgIm1vZGVzIiwgInBhcnNlcnMiLCAiY29sb3JQcm9maWxlcyIsICJpZGVudGl0eSIsICJ2IiwgInVzZU1vZGUiLCAiZGVmaW5pdGlvbiIsICJrIiwgImNoYW5uZWwiLCAicGFyc2VyIiwgInVzZVBhcnNlciIsICJnZXRNb2RlIiwgIklkZW50U3RhcnRDb2RlUG9pbnQiLCAiSWRlbnRDb2RlUG9pbnQiLCAiVG9rIiwgIl9pIiwgImlzX251bSIsICJjaGFycyIsICJjaCIsICJjaDEiLCAiaXNfaWRlbnQiLCAiaHVlbml0cyIsICJudW0iLCAidmFsdWUiLCAiZGlnaXRzIiwgImlkIiwgImlkZW50IiwgImlkZW50bGlrZSIsICJ0b2tlbml6ZSIsICJzdHIiLCAidG9rZW5zIiwgImFscGhhIiwgInBhcnNlQ29sb3JTeW50YXgiLCAidG9rZW4iLCAiY29vcmRzIiwgImNvbnN1bWVDb29yZHMiLCAiY2hhbm5lbHMiLCAiaWkiLCAiaW5jbHVkZUh1ZSIsICJwYXJzZU1vZGVyblN5bnRheCIsICJwYXJzZWQiLCAicmVzdWx0IiwgInBhcnNlUmdiIiwgInIiLCAiZyIsICJiIiwgInBhcnNlVHJhbnNwYXJlbnQiLCAibGVycCIsICJhIiwgInQiLCAiZ2V0X2NsYXNzZXMiLCAiYXJyIiwgImNsYXNzZXMiLCAiaSIsICJpbnRlcnBvbGF0b3JQaWVjZXdpc2UiLCAiaW50ZXJwb2xhdG9yIiwgImNscyIsICJpZHgiLCAicGFpciIsICJpbnRlcnBvbGF0b3JMaW5lYXIiLCAiZml4dXBBbHBoYSIsICJzb21lX2RlZmluZWQiLCAiZGVmaW5pdGlvbiQyNyIsICJsaW5lYXJpemUkMiIsICJjb252ZXJ0QTk4VG9YeXo2NSIsICJhOTgiLCAiZ2FtbWEkMiIsICJjb252ZXJ0WHl6NjVUb0E5OCIsICJ4IiwgInkiLCAieiIsICJmbiQzIiwgImFicyIsICJjb252ZXJ0UmdiVG9McmdiIiwgImNvbnZlcnRSZ2JUb1h5ejY1IiwgInJnYiIsICJmbiQyIiwgImNvbnZlcnRMcmdiVG9SZ2IiLCAiY29udmVydFh5ejY1VG9SZ2IiLCAiZGVmaW5pdGlvbiQyNiIsICJub3JtYWxpemVIdWUiLCAiaHVlIiwgImh1ZXMiLCAiZm4iLCAibm9ybWFsaXplZCIsICJhY2MiLCAiY3VyciIsICJmaXh1cEh1ZVNob3J0ZXIiLCAiZCIsICJNIiwgImRlZ1RvUmFkIiwgInJhZFRvRGVnIiwgIkRFIiwgIkJFIiwgIkJDQUQiLCAiY29udmVydFJnYlRvQ3ViZWhlbGl4IiwgImwiLCAiY29udmVydEN1YmVoZWxpeFRvUmdiIiwgImgiLCAicyIsICJhbXAiLCAiY29zaCIsICJzaW5oIiwgImRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIiwgInN0ZCIsICJzbXAiLCAic3RkX2giLCAic21wX2giLCAiZEgiLCAiZGlmZmVyZW5jZUh1ZU5haXZlIiwgImRpZmZlcmVuY2VIdWVDaHJvbWEiLCAiYXZlcmFnZUFuZ2xlIiwgInZhbCIsICJzdW0iLCAicmFkIiwgImFuZ2xlIiwgImRlZmluaXRpb24kMjUiLCAiY29udmVydExhYlRvTGNoIiwgImNvbnZlcnRMY2hUb0xhYiIsICJrJDIiLCAiZSQyIiwgIkQ1MCIsICJENjUiLCAiayQxIiwgImUkMSIsICJmbiQxIiwgImNvbnZlcnRMYWI2NVRvWHl6NjUiLCAiZnkiLCAiZngiLCAiZnoiLCAiY29udmVydExhYjY1VG9SZ2IiLCAibGFiIiwgImYkMSIsICJjb252ZXJ0WHl6NjVUb0xhYjY1IiwgImYwIiwgImYxIiwgImYyIiwgImNvbnZlcnRSZ2JUb0xhYjY1IiwgIs64IiwgImNvc864IiwgInNpbs64IiwgImZhY3RvciIsICJjb252ZXJ0RGxjaFRvTGFiNjUiLCAiRyIsICJlIiwgImYiLCAiY29udmVydExhYjY1VG9EbGNoIiwgImNvbnZlcnREbGFiVG9MYWI2NSIsICJjb252ZXJ0TGFiNjVUb0RsYWIiLCAiZGVmaW5pdGlvbiQyNCIsICJkZWZpbml0aW9uJDIzIiwgImNvbnZlcnRIc2lUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic2kiLCAibSIsICJkZWZpbml0aW9uJDIyIiwgImNvbnZlcnRIc2xUb1JnYiIsICJtMSIsICJtMiIsICJjb252ZXJ0UmdiVG9Ic2wiLCAiaHVlVG9EZWciLCAidW5pdCIsICJoc2xfb2xkIiwgInBhcnNlSHNsTGVnYWN5IiwgInBhcnNlSHNsIiwgImRlZmluaXRpb24kMjEiLCAiY29udmVydEhzdlRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzdiIsICJkZWZpbml0aW9uJDIwIiwgImNvbnZlcnRId2JUb1JnYiIsICJ3IiwgImNvbnZlcnRSZ2JUb0h3YiIsICJyZ2JhIiwgImhzdiIsICJQYXJzZUh3YiIsICJkZWZpbml0aW9uJDE5IiwgIk0xIiwgIk0yIiwgIkMxIiwgIkMyIiwgIkMzIiwgInRyYW5zZmVyUHFEZWNvZGUiLCAidHJhbnNmZXJQcUVuY29kZSIsICJ0b1JlbCIsICJjb252ZXJ0SXRwVG9YeXo2NSIsICJwIiwgInRvQWJzIiwgImNvbnZlcnRYeXo2NVRvSXRwIiwgImFic1giLCAiYWJzWSIsICJhYnNaIiwgImRlZmluaXRpb24kMTgiLCAicCQxIiwgImQwJDEiLCAiamFiUHFFbmNvZGUiLCAidm4iLCAiY29udmVydFh5ejY1VG9KYWIiLCAieHAiLCAieXAiLCAiZDAiLCAiamFiUHFEZWNvZGUiLCAidnAiLCAicmVsIiwgImNvbnZlcnRKYWJUb1h5ejY1IiwgImoiLCAiY29udmVydFJnYlRvSmFiIiwgImNvbnZlcnRKYWJUb1JnYiIsICJkZWZpbml0aW9uJDE3IiwgImNvbnZlcnRKYWJUb0pjaCIsICJjb252ZXJ0SmNoVG9KYWIiLCAiZGVmaW5pdGlvbiQxNiIsICJjb252ZXJ0TGFiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb1JnYiIsICJjb252ZXJ0TGFiVG9SZ2IiLCAiY29udmVydFJnYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9MYWIiLCAiY29udmVydFJnYlRvTGFiIiwgInBhcnNlTGFiIiwgImRlZmluaXRpb24kMTUiLCAiZGVmaW5pdGlvbiQxNCIsICJwYXJzZUxjaCIsICJkZWZpbml0aW9uJDEzIiwgImRlZmluaXRpb24kMTIiLCAiY29udmVydEx1dlRvTGNodXYiLCAidSIsICJjb252ZXJ0TGNodXZUb0x1diIsICJ1X2ZuJDEiLCAidl9mbiQxIiwgInVuJDEiLCAidm4kMSIsICJsX2ZuIiwgImNvbnZlcnRYeXo1MFRvTHV2IiwgInVfZm4iLCAidl9mbiIsICJ1biIsICJjb252ZXJ0THV2VG9YeXo1MCIsICJ1cCIsICJjb252ZXJ0UmdiVG9MY2h1diIsICJjb252ZXJ0TGNodXZUb1JnYiIsICJsY2h1diIsICJkZWZpbml0aW9uJDExIiwgImRlZmluaXRpb24kMTAiLCAiZGVmaW5pdGlvbiQ5IiwgImx1diIsICJjb252ZXJ0THJnYlRvT2tsYWIiLCAiTCIsICJTIiwgImNvbnZlcnRSZ2JUb09rbGFiIiwgImNvbnZlcnRPa2xhYlRvTHJnYiIsICJjb252ZXJ0T2tsYWJUb1JnYiIsICJ0b2UiLCAia18zIiwgInRvZV9pbnYiLCAiY29tcHV0ZV9tYXhfc2F0dXJhdGlvbiIsICJrMCIsICJrMSIsICJrMiIsICJrMyIsICJrNCIsICJ3bCIsICJ3bSIsICJ3cyIsICJrX2wiLCAia19tIiwgImtfcyIsICJsXyIsICJtXyIsICJzXyIsICJsX2RTIiwgIm1fZFMiLCAic19kUyIsICJsX2RTMiIsICJtX2RTMiIsICJzX2RTMiIsICJmaW5kX2N1c3AiLCAiU19jdXNwIiwgIkxfY3VzcCIsICJmaW5kX2dhbXV0X2ludGVyc2VjdGlvbiIsICJMMSIsICJMMCIsICJjdXNwIiwgImRMIiwgImRDIiwgImxfZHQiLCAibV9kdCIsICJzX2R0IiwgIkMiLCAibGR0IiwgIm1kdCIsICJzZHQiLCAibGR0MiIsICJtZHQyIiwgInNkdDIiLCAicjEiLCAicjIiLCAidV9yIiwgInRfciIsICJnMSIsICJnMiIsICJ1X2ciLCAidF9nIiwgImIxIiwgImIyIiwgInVfYiIsICJ0X2IiLCAiZ2V0X1NUX21heCIsICJhXyIsICJiXyIsICJnZXRfQ3MiLCAiQ19tYXgiLCAiU1RfbWF4IiwgIlNfbWlkIiwgIlRfbWlkIiwgIkNfYSIsICJDX2IiLCAiQ19taWQiLCAiY29udmVydE9rbGFiVG9Pa2hzbCIsICJyZXQiLCAiQ18wIiwgImtfMCIsICJrXzEiLCAia18yIiwgImNvbnZlcnRPa2hzbFRvT2tsYWIiLCAiaHNsIiwgIm1vZGVPa2hzbCIsICJjb252ZXJ0T2tsYWJUb09raHN2IiwgIlNfbWF4IiwgIlQiLCAiU18wIiwgIkxfdiIsICJDX3YiLCAiTF92dCIsICJDX3Z0IiwgInJnYl9zY2FsZSIsICJzY2FsZV9MIiwgImNvbnZlcnRPa2hzdlRvT2tsYWIiLCAiTF9uZXciLCAibW9kZU9raHN2IiwgInBhcnNlT2tsYWIiLCAiZGVmaW5pdGlvbiQ4IiwgInBhcnNlT2tsY2giLCAiZGVmaW5pdGlvbiQ3IiwgImNvbnZlcnRQM1RvWHl6NjUiLCAiY29udmVydFh5ejY1VG9QMyIsICJkZWZpbml0aW9uJDYiLCAiZ2FtbWEkMSIsICJjb252ZXJ0WHl6NTBUb1Byb3Bob3RvIiwgImxpbmVhcml6ZSQxIiwgImNvbnZlcnRQcm9waG90b1RvWHl6NTAiLCAicHJvcGhvdG8iLCAiZGVmaW5pdGlvbiQ1IiwgIs6xJDEiLCAizrIkMSIsICJnYW1tYSIsICJjb252ZXJ0WHl6NjVUb1JlYzIwMjAiLCAizrEiLCAizrIiLCAibGluZWFyaXplIiwgImNvbnZlcnRSZWMyMDIwVG9YeXo2NSIsICJyZWMyMDIwIiwgImRlZmluaXRpb24kNCIsICJiaWFzIiwgImJpYXNfY2JydCIsICJ0cmFuc2ZlciQxIiwgImNvbnZlcnRSZ2JUb1h5YiIsICJ0cmFuc2ZlciIsICJjb252ZXJ0WHliVG9SZ2IiLCAiZGVmaW5pdGlvbiQzIiwgImRlZmluaXRpb24kMiIsICJjb252ZXJ0WHl6NjVUb1h5ejUwIiwgInh5ejY1IiwgImNvbnZlcnRYeXo1MFRvWHl6NjUiLCAieHl6NTAiLCAiZGVmaW5pdGlvbiQxIiwgImNvbnZlcnRSZ2JUb1lpcSIsICJjb252ZXJ0WWlxVG9SZ2IiLCAicSIsICJwcmVjaXNpb24iLCAicm91bmQiLCAidHdvRGVjaW1hbHMiLCAiY2xhbXAkMSIsICJmaXh1cCIsICJyZ2IkMSIsICJoc2wkMSIsICJzZXJpYWxpemVIZXgiLCAiZm9ybWF0SGV4IiwgImN1YmVoZWxpeCIsICJkbGFiIiwgImRsY2giLCAiaHNpIiwgImh3YiIsICJpdHAiLCAiamFiIiwgImpjaCIsICJsYWI2NSIsICJsY2giLCAibGNoNjUiLCAibHJnYiIsICJva2hzbCIsICJva2hzdiIsICJva2xhYiIsICJva2xjaCIsICJwMyIsICJ4eWIiLCAieWlxIiwgInNvcnRDb2xvcnMiLCAibGlzdCIsICJjcml0ZXJpYSIsICJldWNsaWRlYW5EaXN0YW5jZSIsICJjb2xvcjEiLCAiY29sb3IyIiwgIm1ha2VDbHVzdGVycyIsICJkYXRhIiwgImNlbnRyb2lkcyIsICJjbHVzdGVycyIsICJwb2ludCIsICJtaW5EaXN0YW5jZSIsICJtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCIsICJjZW50cm9pZCIsICJpbmRleCIsICJkaXN0YW5jZSIsICJjb21wdXRlTWVhbiIsICJwb2ludHMiLCAia01lYW5zIiwgImluaXRpYWxpemVDZW50cm9pZHMiLCAibWF4SXRlcmF0aW9ucyIsICJpdGVyYXRpb24iLCAibmV3Q2VudHJvaWRzIiwgImNsdXN0ZXIiLCAibmV3Q2VudHJvaWQiLCAiZGlzdGFuY2VzIiwgInRvdGFsRGlzdGFuY2UiLCAicHJvYmFiaWxpdGllcyIsICJjdW11bGF0aXZlUHJvYmFiaWxpdHkiLCAicmFuZG9tVmFsdWUiLCAicHJlQmx1clBpeGVscyIsICJpbWdVUkwiLCAiYmxvYiIsICJiaXRtYXAiLCAib2Zmc2V0IiwgImN0eCIsICJnZXRDbHVzdGVySW1hZ2VEYXRhIiwgImFsbENvdW50IiwgImR2IiwgImZwMzIiLCAiaTQiLCAiZ2V0RG9taW5hbnRDb2xvcnMiLCAiV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVkiLCAiVEhFTUVfU1RPUkFHRV9LRVkiLCAiUFJJTUFSWV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfVVJMX0tFWSIsICJQQVBFUl9MX1NQTElUIiwgIlBBUEVSX0NIUk9NQV9DQVAiLCAiRkFMTEJBQ0tfUEFQRVIiLCAibGFzdExpdmVQYXBlciIsICJVU0FCTEVfTFVNQV9NSU4iLCAiU0VFRF9QUk9QUyIsICJjbGFtcCIsICJuIiwgImxvIiwgImhpIiwgImhleE9rbGNoIiwgImZhbGxiYWNrIiwgInJnYlRvU2FtcGxlIiwgIm9rIiwgInBhcGVyTEZyb21IZXgiLCAiaGFsb0ZvclBhcGVyIiwgImRhcmtQYXBlciIsICJpc1VzYWJsZVBhcGVyTHVtYSIsICJsdW1hIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMiLCAic2FtcGxlcyIsICJwaXhlbEx1bWEiLCAibHMiLCAibWVhbkwiLCAibWVkaWFuTCIsICJwYXBlckwiLCAicGFwZXIiLCAicGFwZXJDIiwgInNhbXBsZUltYWdlTWVhbkx1bWEiLCAiY2FudmFzIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEiLCAiaGFzV2FsbHBhcGVyUGFwZXIiLCAic2VlZHMiLCAicmFua1dhbGxwYXBlclNlZWRzIiwgImFjY2VudFBvb2wiLCAicG9vbCIsICJwcmltYXJ5IiwgImh1ZURpc3QiLCAicGlja05leHQiLCAidXNlZCIsICJyZXN0IiwgImJhc2UiLCAibnVkZ2VkIiwgInNlY29uZGFyeSIsICJ0ZXJ0aWFyeSIsICJ0aGVtZUhvc3RzIiwgIm5vZGVzIiwgImVsIiwgIndhbGxwYXBlclNlZWRzTWF5UGFpbnQiLCAic3JjIiwgImlzVmFsaWRDb2xvciIsICJhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zIiwgImV4dHJhSG9zdHMiLCAic2hhZG93IiwgImdsb3ciLCAiaG9zdHMiLCAicmVnaXN0ZXJDb2xvclByb3BlcnR5IiwgImhvc3QiLCAiZ2xvYmFsUXVlcnkiLCAibmFtZSIsICJpbml0aWFsVmFsdWUiLCAicGVyc2lzdExpdmVQYXBlciIsICJjYWNoZWQiLCAibG9hZENhY2hlZFdhbGxwYXBlclRoZW1lIiwgImFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSIsICJhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMiLCAibmV4dCIsICJwcm9wIiwgImtleSIsICJyYXciLCAiYXBwbHlUaGVtZUZyb21XYWxscGFwZXIiLCAib3B0cyIsICJzcmNLZXkiLCAic2t1IiwgImxpdmVMdW1hIiwgImVyciIsICJyZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSIsICJXQUxMUEFQRVJfU1RPUkFHRV9LRVkiLCAiREVGQVVMVF9XQUxMUEFQRVJfVVJMIiwgIlVTRVJfV0FMTFBBUEVSX1BBVEgiLCAiVVNFUl9XQUxMUEFQRVJfQ0FDSEUiLCAiV0FMTFBBUEVSX0lEQl9NQVJLRVIiLCAiSURCX05BTUUiLCAiSURCX1NUT1JFIiwgIklEQl9LRVkiLCAiTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTIiwgImxpdmVPYmplY3RVcmwiLCAid2FsbHBhcGVyRXBvY2giLCAiY3VycmVudE9yaWVudE51bWJlciIsICJpc0lkYlBvaW50ZXIiLCAicG9pbnRlciIsICJpc1VudXNhYmxlU3RvcmVkVXJsIiwgInJldm9rZUxpdmVPYmplY3RVcmwiLCAiYWRvcHRXYWxscGFwZXJCbG9iIiwgImVwb2NoIiwgIm9wZW5XYWxscGFwZXJEYiIsICJyZXNvbHZlIiwgInJlamVjdCIsICJyZXEiLCAiZGIiLCAiaWRiUHV0V2FsbHBhcGVyIiwgInR4IiwgImlkYkdldFdhbGxwYXBlciIsICJjYWNoZVVzZXJXYWxscGFwZXIiLCAiY2FjaGUiLCAidHlwZSIsICJjbGVhckNhY2hlZFVzZXJXYWxscGFwZXIiLCAiaWRiQ2xlYXJXYWxscGFwZXIiLCAicmVhZFN0b3JhZ2VQb2ludGVyIiwgIndyaXRlU3RvcmFnZVBvaW50ZXIiLCAicmVzdG9yZVdhbGxwYXBlckJsb2JVcmwiLCAiaXNJbmxpbmVQYXlsb2FkIiwgInVybCIsICJyZXNvbHZlQXBwV2FsbHBhcGVyVXJsIiwgInByb2Nlc3NIb3N0U2tpcHNCdW5kbGVkV2FsbHBhcGVyIiwgIndhcm1Qcm9taXNlIiwgIndhcm1BcHBXYWxscGFwZXIiLCAicnNwIiwgIndhcm1lZEJsb2JGb3IiLCAid2FybSIsICJnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciIsICJzeW5jQ2FudmFzT3JpZW50IiwgImFwcGx5IiwgInN5bmNBcHBXYWxscGFwZXJPcmllbnQiLCAicmVmcmVzaEFwcFdhbGxwYXBlclBhaW50IiwgInBhaW50V2FsbHBhcGVyT25DYW52YXNlcyIsICJzeW5jR2xvd1RvVGhlbWUiLCAicGFpbnRVcmwiLCAiY2FudmFzZXMiLCAib3JpZW50IiwgImRhdGFVcmxUb0Jsb2IiLCAiZGF0YVVybCIsICJzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiIsICJzZXRBcHBXYWxscGFwZXIiLCAicmVhZGVyIiwgImluaXRpYWxpemVBcHBDYW52YXNMYXllciIsICJjb250YWluZXIiLCAicm9vdCIsICJnZXRDdXJyZW50RGlzcGxheUNvbG9yU3BhY2UiLCAicG9zdGVyIiwgInJlbWVtYmVyTWlzc2luZ0RlZmF1bHRXYWxscGFwZXIiLCAiY29sZFVybCIsICJ3YXJtaW5nIiwgImZhaWxlZFdhbGxwYXBlclNyYyIsICJkaXNwb3NlT3JpZW50IiwgIndhbGxwYXBlciIsICJ0aGVtZVNyYyIsICJleHRyYWN0IiwgInJpYyIsICJXQUxMUEFQRVJfTEFZT1VUX0tFWSIsICJBUFBfV0FMTFBBUEVSX0NBTlZBU19TRUxFQ1RPUiIsICJub3JtYWxpemVXYWxscGFwZXJTY2FsZSIsICJub3JtYWxpemVXYWxscGFwZXJQb3NpdGlvbiIsICJwZXJjZW50IiwgIndhbGxwYXBlclBvc2l0aW9uUmF0aW8iLCAicG9zaXRpb24iLCAibm9ybWFsaXplV2FsbHBhcGVyTGF5b3V0IiwgImxheW91dCIsICJzZXNzaW9uV2FsbHBhcGVyTGF5b3V0IiwgImdldEFwcFdhbGxwYXBlckxheW91dCIsICJhcHBseVdhbGxwYXBlckxheW91dCIsICJzZXRBcHBXYWxscGFwZXJMYXlvdXQiLCAicGF0Y2giLCAid2FsbHBhcGVyVXJsIiwgImJsb2JJbWFnZVN5bWJvbCIsICJibG9iSW1hZ2VNYXAiLCAiZGVsYXllZFN5bWJvbCIsICJkZWxheWVkIiwgInNjaGVkdWxlclN5bWJvbCIsICJzY2hlZHVsZXJSZiIsICJmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2wiLCAiZ2V0SW1nV2lkdGgiLCAiaW1nIiwgImdldEltZ0hlaWdodCIsICJjcmVhdGUyZENvbnRleHQiLCAiSEFMRl9QSSIsICJjYWxsQnlGcmFtZSIsICJwb2ludGVySWQiLCAiY2IiLCAiY292ZXIiLCAic2NhbGUiLCAicG9ydCIsICJpc0RlY29kYWJsZVNvdXJjZSIsICJjcmVhdGVJbWFnZUJpdG1hcENhY2hlIiwgImVkZ2UiLCAiZHByIiwgImNzcyIsICJwZW5kaW5nIiwgImJpbmRDYWNoZVN5bWJvbCIsICJiaW5kQ2FjaGUiLCAiYmluZENhY2hlZCIsICJib3VuZCIsICJyYWZZaWVsZCIsICJydiIsICJVSUNhbnZhcyIsICIjc2l6ZSIsICIjbG9hZGluZyIsICIjcmVhZHkiLCAiI29yaWVudCIsICJvbGRWYWx1ZSIsICJuZXdWYWx1ZSIsICIjcHJlbG9hZCIsICIjcmVuZGVyIiwgIiNpbml0aWFsaXplZCIsICIjaW5pdGlhbGl6ZSIsICJwYXJlbnQiLCAiZml4U2l6ZSIsICJvbGQiLCAiZW50cmllcyIsICJlbnRyeSIsICJib3giLCAicmVhZHkiLCAid2hhdElzUmVhZHkiLCAiaW1nV2lkdGgiLCAiaW1nSGVpZ2h0IiwgInR1cm5zIiwgInN3YXBzQXhlcyIsICJyb3RhdGVkV2lkdGgiLCAicm90YXRlZEhlaWdodCIsICJkcmF3V2lkdGgiLCAiZHJhd0hlaWdodCIsICJib3VuZHNXaWR0aCIsICJib3VuZHNIZWlnaHQiLCAibGVmdCIsICJ0b3AiXQp9Cg==
