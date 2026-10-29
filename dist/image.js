import { Q as $r } from "@fest-lib/lure";
import { setStyleProperty as A } from "@fest-lib/style-lib";
import { getCorrectOrientation as xa, makeRAFCycle as ka, orientationNumberMap as Pa, whenAnyScreenChanges as _a } from "@fest-lib/dom";
var uo = "electronBridge", vo = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, Cr = (e, t) => {
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
}, za = {
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
}, Sa = (e) => Cr(za[e.toLowerCase()], 6), Ta = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, $a = (e) => {
  let t;
  return (t = e.match(Ta)) ? Cr(parseInt(t[1], 16), t[1].length) : void 0;
}, T = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", po = `(?:${T}|none)`, he = `${T}%`, fo = `(?:${T}%|none)`, At = `(?:${T}%|${T})`, Ca = `(?:${T}%|${T}|none)`, Aa = `(?:${T}(deg|grad|rad|turn)|${T})`, mo = `(?:${T}(deg|grad|rad|turn)|${T}|none)`, K = "\\s*,\\s*", go = new RegExp("^" + Ca + "$"), Ea = new RegExp(`^rgba?\\(\\s*${T}${K}${T}${K}${T}\\s*(?:,\\s*${At}\\s*)?\\)$`), Ia = new RegExp(`^rgba?\\(\\s*${he}${K}${he}${K}${he}\\s*(?:,\\s*${At}\\s*)?\\)$`), Na = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(Ea))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(Ia))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, Wa = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Nr(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, Et = (e = "rgb") => (t) => (t = Wa(t, e)) !== void 0 ? t.mode === e ? t : E[t.mode][e] ? E[t.mode][e](t) : e === "rgb" ? E[t.mode].rgb(t) : E.rgb[e](E[t.mode].rgb(t)) : void 0, E = {}, Ar = {}, we = [], Er = {}, Ra = (e) => e, g = (e) => (E[e.mode] = {
  ...E[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  E[t] || (E[t] = {}), E[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Ra);
}), Ar[e.mode] = e, (e.parse || []).forEach((t) => {
  Ha(t, e.mode);
}), Et(e.mode)), La = (e) => Ar[e], Ha = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    Er[e] = t;
  } else typeof e == "function" && we.indexOf(e) < 0 && we.push(e);
}, Mt = /[^\x00-\x7F]|[a-zA-Z_]/, qa = /[^\x00-\x7F]|[-\w]/, s = {
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
function wt(e) {
  if (p >= e.length) return !1;
  let t = e[p];
  if (Mt.test(t)) return !0;
  if (t === "-") {
    if (e.length - p < 2) return !1;
    let r = e[p + 1];
    return !!(r === "-" || Mt.test(r));
  }
  return !1;
}
var Oa = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function le(e) {
  let t = "";
  if ((e[p] === "-" || e[p] === "+") && (t += e[p++]), t += me(e), e[p] === "." && /\d/.test(e[p + 1]) && (t += e[p++] + me(e)), (e[p] === "e" || e[p] === "E") && ((e[p + 1] === "-" || e[p + 1] === "+") && /\d/.test(e[p + 2]) ? t += e[p++] + e[p++] + me(e) : /\d/.test(e[p + 1]) && (t += e[p++] + me(e))), wt(e)) {
    let r = xe(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * Oa[r]
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
function xe(e) {
  let t = "";
  for (; p < e.length && qa.test(e[p]); ) t += e[p++];
  return t;
}
function Ba(e) {
  let t = xe(e);
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
function Da(e = "") {
  let t = e.trim(), r = [], i;
  for (p = 0; p < t.length; ) {
    if (i = t[p++], i === `
` || i === "	" || i === " ") {
      for (; p < t.length && (t[p] === `
` || t[p] === "	" || t[p] === " "); ) p++;
      continue;
    }
    if (i === ",") return;
    if (i === ")") {
      r.push({ type: s.ParenClose });
      continue;
    }
    if (i === "+") {
      if (p--, fe(t)) {
        r.push(le(t));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (p--, fe(t)) {
        r.push(le(t));
        continue;
      }
      if (wt(t)) {
        r.push({
          type: s.Ident,
          value: xe(t)
        });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (p--, fe(t)) {
        r.push(le(t));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; p < t.length && (t[p] === `
` || t[p] === "	" || t[p] === " "); ) p++;
      let a;
      if (fe(t) && (a = le(t), a.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: a
        });
        continue;
      }
      if (wt(t) && xe(t) === "none") {
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
    if (/\d/.test(i)) {
      p--, r.push(le(t));
      continue;
    }
    if (Mt.test(i)) {
      p--, r.push(Ba(t));
      continue;
    }
    return;
  }
  return r;
}
function ja(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = Er[t.value];
  if (!r) return;
  const i = { mode: r }, a = Ir(e, !1);
  if (!a) return;
  const n = La(r).channels;
  for (let o = 0, l, h; o < n.length; o++)
    l = a[o], h = n[o], l.type !== s.None && (i[h] = l.type === s.Number ? l.value : l.value / 100, h === "alpha" && (i[h] = Math.max(0, Math.min(1, i[h]))));
  return i;
}
function Ir(e, t) {
  const r = [];
  let i;
  for (; e._i < e.length; ) {
    if (i = e[e._i++], i.type === s.None || i.type === s.Number || i.type === s.Alpha || i.type === s.Percentage || t && i.type === s.Hue) {
      r.push(i);
      continue;
    }
    if (i.type === s.ParenClose) {
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
    }), r.every((a) => a.type !== s.Alpha) ? r : void 0;
  }
}
function Xa(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let i = Ir(e, t);
  if (i)
    return i.unshift(r.value), i;
}
var Nr = (e) => {
  if (typeof e != "string") return;
  const t = Da(e), r = t ? Xa(t, !0) : void 0;
  let i, a = 0, n = we.length;
  for (; a < n; ) if ((i = we[a++](e, r)) !== void 0) return i;
  return t ? ja(t) : void 0;
};
function Fa(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, i, a, n, o] = t;
  if (!(i.type === s.Hue || a.type === s.Hue || n.type === s.Hue))
    return i.type !== s.None && (r.r = i.type === s.Number ? i.value / 255 : i.value / 100), a.type !== s.None && (r.g = a.type === s.Number ? a.value / 255 : a.value / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value / 255 : n.value / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Ya = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, Za = (e, t, r) => e + r * (t - e), Ga = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let i = e[r], a = e[r + 1];
    i === void 0 && a === void 0 ? t.push(void 0) : i !== void 0 && a !== void 0 ? t.push([i, a]) : t.push(i !== void 0 ? [i, i] : [a, a]);
  }
  return t;
}, Ja = (e) => (t) => {
  let r = Ga(t);
  return (i) => {
    let a = i * r.length, n = i >= 1 ? r.length - 1 : Math.max(Math.floor(a), 0), o = r[n];
    return o === void 0 ? void 0 : e(o[0], o[1], a - n);
  };
}, c = Ja(Za), w = (e) => {
  let t = !1, r = e.map((i) => i !== void 0 ? (t = !0, i) : 1);
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
    Fa,
    $a,
    Na,
    Sa,
    Ya,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: c,
    g: c,
    b: c,
    alpha: {
      use: c,
      fixup: w
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
}, Ue = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), tr = (e) => {
  let t = Ue(e.r), r = Ue(e.g), i = Ue(e.b), a = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * i,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * i,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, Qe = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), rr = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "a98",
    r: Qe(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Qe(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Qe(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return i !== void 0 && (a.alpha = i), a;
}, Ve = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, Q = ({ r: e, g: t, b: r, alpha: i }) => {
  let a = {
    mode: "lrgb",
    r: Ve(e),
    g: Ve(t),
    b: Ve(r)
  };
  return i !== void 0 && (a.alpha = i), a;
}, j = (e) => {
  let { r: t, g: r, b: i, alpha: a } = Q(e), n = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * i,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * i,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, et = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, V = ({ r: e, g: t, b: r, alpha: i }, a = "rgb") => {
  let n = {
    mode: a,
    r: et(e),
    g: et(t),
    b: et(r)
  };
  return i !== void 0 && (n.alpha = i), n;
}, X = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = V({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return i !== void 0 && (a.alpha = i), a;
}, Ka = {
  ...U,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => rr(j(e)),
    xyz65: rr
  },
  toMode: {
    rgb: (e) => X(tr(e)),
    xyz65: tr
  }
}, P = (e) => (e = e % 360) < 0 ? e + 360 : e, Ua = (e, t) => e.map((r, i, a) => {
  if (r === void 0) return r;
  let n = P(r);
  return i === 0 || e[i - 1] === void 0 ? n : t(n - P(a[i - 1]));
}).reduce((r, i) => !r.length || i === void 0 || r[r.length - 1] === void 0 ? (r.push(i), r) : (r.push(i + r[r.length - 1]), r), []), N = (e) => Ua(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), k = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], Qa = Math.PI / 180, Va = 180 / Math.PI, ar = k[3] * k[4], ir = k[1] * k[4], nr = k[1] * k[2] - k[0] * k[3], ei = ({ r: e, g: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (nr * r + e * ar - t * ir) / (nr + ar - ir), n = r - a, o = (k[4] * (t - a) - k[2] * n) / k[3], l = {
    mode: "cubehelix",
    l: a,
    s: a === 0 || a === 1 ? void 0 : Math.sqrt(n * n + o * o) / (k[4] * a * (1 - a))
  };
  return l.s && (l.h = Math.atan2(o, n) * Va - 120), i !== void 0 && (l.alpha = i), l;
}, ti = ({ h: e, s: t, l: r, alpha: i }) => {
  let a = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Qa, r === void 0 && (r = 0);
  let n = t === void 0 ? 0 : t * r * (1 - r), o = Math.cos(e), l = Math.sin(e);
  return a.r = r + n * (k[0] * o + k[1] * l), a.g = r + n * (k[2] * o + k[3] * l), a.b = r + n * (k[4] * o + k[5] * l), i !== void 0 && (a.alpha = i), a;
}, Ee = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = P(e.h), i = P(t.h), a = Math.sin((i - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * a;
}, ri = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = P(e.h), i = P(t.h);
  return Math.abs(i - r) > 180 ? r - (i - 360 * Math.sign(i - r)) : i - r;
}, Ie = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = P(e.h), i = P(t.h), a = Math.sin((i - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * a;
}, W = (e) => {
  let t = e.reduce((i, a) => {
    if (a !== void 0) {
      let n = a * Math.PI / 180;
      i.sin += Math.sin(n), i.cos += Math.cos(n);
    }
    return i;
  }, {
    sin: 0,
    cos: 0
  }), r = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return r < 0 ? 360 + r : r;
}, ai = {
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
  fromMode: { rgb: ei },
  toMode: { rgb: ti },
  interpolate: {
    h: {
      use: c,
      fixup: N
    },
    s: c,
    l: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ee },
  average: { h: W }
}, L = ({ l: e, a: t, b: r, alpha: i }, a = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.sqrt(t * t + r * r), o = {
    mode: a,
    l: e,
    c: n
  };
  return n && (o.h = P(Math.atan2(r, t) * 180 / Math.PI)), i !== void 0 && (o.alpha = i), o;
}, H = ({ l: e, c: t, h: r, alpha: i }, a = "lab") => {
  r === void 0 && (r = 0);
  let n = {
    mode: a,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return i !== void 0 && (n.alpha = i), n;
}, Wr = Math.pow(29, 3) / Math.pow(3, 3), Rr = Math.pow(6, 3) / Math.pow(29, 3), M = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, Z = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, bo = Math.pow(29, 3) / Math.pow(3, 3), yo = Math.pow(6, 3) / Math.pow(29, 3), tt = (e) => Math.pow(e, 3) > Rr ? Math.pow(e, 3) : (116 * e - 16) / Wr, Lr = ({ l: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (e + 16) / 116, n = t / 500 + a, o = a - r / 200, l = {
    mode: "xyz65",
    x: tt(n) * Z.X,
    y: tt(a) * Z.Y,
    z: tt(o) * Z.Z
  };
  return i !== void 0 && (l.alpha = i), l;
}, Ne = (e) => X(Lr(e)), rt = (e) => e > Rr ? Math.cbrt(e) : (Wr * e + 16) / 116, Hr = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = rt(e / Z.X), n = rt(t / Z.Y), o = rt(r / Z.Z), l = {
    mode: "lab65",
    l: 116 * n - 16,
    a: 500 * (a - n),
    b: 200 * (n - o)
  };
  return i !== void 0 && (l.alpha = i), l;
}, We = (e) => {
  let t = Hr(j(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, de = 26 / 180 * Math.PI, ke = Math.cos(de), Pe = Math.sin(de), qr = 100 / Math.log(139 / 100), xt = ({ l: e, c: t, h: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "lab65",
    l: (Math.exp(e * 1 / qr) - 1) / 39e-4
  }, n = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, o = n * Math.cos(r / 180 * Math.PI - de), l = n * Math.sin(r / 180 * Math.PI - de);
  return a.a = o * ke - l / 0.83 * Pe, a.b = o * Pe + l / 0.83 * ke, i !== void 0 && (a.alpha = i), a;
}, kt = ({ l: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = t * ke + r * Pe, n = 0.83 * (r * ke - t * Pe), o = Math.sqrt(a * a + n * n), l = {
    mode: "dlch",
    l: qr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = P((Math.atan2(n, a) + de) / Math.PI * 180)), i !== void 0 && (l.alpha = i), l;
}, or = (e) => xt(L(e, "dlch")), lr = (e) => H(kt(e), "dlab"), ii = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: or,
    rgb: (e) => Ne(or(e))
  },
  fromMode: {
    lab65: lr,
    rgb: (e) => lr(We(e))
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
    l: c,
    a: c,
    b: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, ni = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: xt,
    dlab: (e) => H(e, "dlab"),
    rgb: (e) => Ne(xt(e))
  },
  fromMode: {
    lab65: kt,
    dlab: (e) => L(e, "dlch"),
    rgb: (e) => kt(We(e))
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
    l: c,
    c,
    h: {
      use: c,
      fixup: N
    },
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ie },
  average: { h: W }
};
function oi({ h: e, s: t, i: r, alpha: i }) {
  e = P(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.abs(e / 60 % 2 - 1), n;
  switch (Math.floor(e / 60)) {
    case 0:
      n = {
        r: r * (1 + t * (3 / (2 - a) - 1)),
        g: r * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        b: r * (1 - t)
      };
      break;
    case 1:
      n = {
        r: r * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        g: r * (1 + t * (3 / (2 - a) - 1)),
        b: r * (1 - t)
      };
      break;
    case 2:
      n = {
        r: r * (1 - t),
        g: r * (1 + t * (3 / (2 - a) - 1)),
        b: r * (1 + t * (3 * (1 - a) / (2 - a) - 1))
      };
      break;
    case 3:
      n = {
        r: r * (1 - t),
        g: r * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        b: r * (1 + t * (3 / (2 - a) - 1))
      };
      break;
    case 4:
      n = {
        r: r * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 / (2 - a) - 1))
      };
      break;
    case 5:
      n = {
        r: r * (1 + t * (3 / (2 - a) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 * (1 - a) / (2 - a) - 1))
      };
      break;
    default:
      n = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return n.mode = "rgb", i !== void 0 && (n.alpha = i), n;
}
function li({ r: e, g: t, b: r, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * n / (e + t + r),
    i: (e + t + r) / 3
  };
  return a - n !== 0 && (o.h = (a === e ? (t - r) / (a - n) + (t < r) * 6 : a === t ? (r - e) / (a - n) + 2 : (e - t) / (a - n) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
var si = {
  mode: "hsi",
  toMode: { rgb: oi },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: li },
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
      use: c,
      fixup: N
    },
    s: c,
    i: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ee },
  average: { h: W }
};
function hi({ h: e, s: t, l: r, alpha: i }) {
  e = P(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = r + t * (r < 0.5 ? r : 1 - r), n = a - (a - r) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: a,
        g: n,
        b: 2 * r - a
      };
      break;
    case 1:
      o = {
        r: n,
        g: a,
        b: 2 * r - a
      };
      break;
    case 2:
      o = {
        r: 2 * r - a,
        g: a,
        b: n
      };
      break;
    case 3:
      o = {
        r: 2 * r - a,
        g: n,
        b: a
      };
      break;
    case 4:
      o = {
        r: n,
        g: 2 * r - a,
        b: a
      };
      break;
    case 5:
      o = {
        r: a,
        g: 2 * r - a,
        b: n
      };
      break;
    default:
      o = {
        r: 2 * r - a,
        g: 2 * r - a,
        b: 2 * r - a
      };
  }
  return o.mode = "rgb", i !== void 0 && (o.alpha = i), o;
}
function ci({ r: e, g: t, b: r, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsl",
    s: a === n ? 0 : (a - n) / (1 - Math.abs(a + n - 1)),
    l: 0.5 * (a + n)
  };
  return a - n !== 0 && (o.h = (a === e ? (t - r) / (a - n) + (t < r) * 6 : a === t ? (r - e) / (a - n) + 2 : (e - t) / (a - n) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
var di = (e, t) => {
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
}, ui = new RegExp(`^hsla?\\(\\s*${Aa}${K}${he}${K}${he}\\s*(?:,\\s*${At}\\s*)?\\)$`), vi = (e) => {
  let t = e.match(ui);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = di(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function pi(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
  const r = { mode: "hsl" }, [, i, a, n, o] = t;
  if (i.type !== s.None) {
    if (i.type === s.Percentage) return;
    r.h = i.value;
  }
  if (a.type !== s.None) {
    if (a.type === s.Hue) return;
    r.s = a.value / 100;
  }
  if (n.type !== s.None) {
    if (n.type === s.Hue) return;
    r.l = n.value / 100;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Or = {
  mode: "hsl",
  toMode: { rgb: hi },
  fromMode: { rgb: ci },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [pi, vi],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: c,
      fixup: N
    },
    s: c,
    l: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ee },
  average: { h: W }
};
function Br({ h: e, s: t, v: r, alpha: i }) {
  e = P(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.abs(e / 60 % 2 - 1), n;
  switch (Math.floor(e / 60)) {
    case 0:
      n = {
        r,
        g: r * (1 - t * a),
        b: r * (1 - t)
      };
      break;
    case 1:
      n = {
        r: r * (1 - t * a),
        g: r,
        b: r * (1 - t)
      };
      break;
    case 2:
      n = {
        r: r * (1 - t),
        g: r,
        b: r * (1 - t * a)
      };
      break;
    case 3:
      n = {
        r: r * (1 - t),
        g: r * (1 - t * a),
        b: r
      };
      break;
    case 4:
      n = {
        r: r * (1 - t * a),
        g: r * (1 - t),
        b: r
      };
      break;
    case 5:
      n = {
        r,
        g: r * (1 - t),
        b: r * (1 - t * a)
      };
      break;
    default:
      n = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return n.mode = "rgb", i !== void 0 && (n.alpha = i), n;
}
function Dr({ r: e, g: t, b: r, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsv",
    s: a === 0 ? 0 : 1 - n / a,
    v: a
  };
  return a - n !== 0 && (o.h = (a === e ? (t - r) / (a - n) + (t < r) * 6 : a === t ? (r - e) / (a - n) + 2 : (e - t) / (a - n) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
var jr = {
  mode: "hsv",
  toMode: { rgb: Br },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Dr },
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
      use: c,
      fixup: N
    },
    s: c,
    v: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ee },
  average: { h: W }
};
function fi({ h: e, w: t, b: r, alpha: i }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let a = t + r;
    t /= a, r /= a;
  }
  return Br({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: i
  });
}
function mi(e) {
  let t = Dr(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, i = t.v !== void 0 ? t.v : 0, a = {
    mode: "hwb",
    w: (1 - r) * i,
    b: 1 - i
  };
  return t.h !== void 0 && (a.h = t.h), t.alpha !== void 0 && (a.alpha = t.alpha), a;
}
function gi(e, t) {
  if (!t || t[0] !== "hwb") return;
  const r = { mode: "hwb" }, [, i, a, n, o] = t;
  if (i.type !== s.None) {
    if (i.type === s.Percentage) return;
    r.h = i.value;
  }
  if (a.type !== s.None) {
    if (a.type === s.Hue) return;
    r.w = a.value / 100;
  }
  if (n.type !== s.None) {
    if (n.type === s.Hue) return;
    r.b = n.value / 100;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var bi = {
  mode: "hwb",
  toMode: { rgb: fi },
  fromMode: { rgb: mi },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [gi],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: c,
      fixup: N
    },
    w: c,
    b: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: ri },
  average: { h: W }
}, Re = 0.1593017578125, Xr = 78.84375, Le = 0.8359375, He = 18.8515625, qe = 18.6875;
function at(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Xr);
  return 1e4 * Math.pow(Math.max(0, t - Le) / (He - qe * t), 1 / Re);
}
function it(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Re);
  return Math.pow((Le + He * t) / (1 + qe * t), Xr);
}
var nt = (e) => Math.max(e / 203, 0), sr = ({ i: e, t, p: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = at(e + 0.008609037037932761 * t + 0.11102962500302593 * r), n = at(e - 0.00860903703793275 * t - 0.11102962500302599 * r), o = at(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: nt(2.070152218389422 * a - 1.3263473389671556 * n + 0.2066510476294051 * o),
    y: nt(0.3647385209748074 * a + 0.680566024947227 * n - 0.0453045459220346 * o),
    z: nt(-0.049747207535812 * a - 0.0492609666966138 * n + 1.1880659249923042 * o)
  };
  return i !== void 0 && (l.alpha = i), l;
}, ot = (e = 0) => Math.max(e * 203, 0), hr = ({ x: e, y: t, z: r, alpha: i }) => {
  const a = ot(e), n = ot(t), o = ot(r), l = it(0.3592832590121217 * a + 0.6976051147779502 * n - 0.0358915932320289 * o), h = it(-0.1920808463704995 * a + 1.1004767970374323 * n + 0.0753748658519118 * o), d = it(0.0070797844607477 * a + 0.0748396662186366 * n + 0.8433265453898765 * o), v = {
    mode: "itp",
    i: 0.5 * l + 0.5 * h,
    t: 1.61376953125 * l - 3.323486328125 * h + 1.709716796875 * d,
    p: 4.378173828125 * l - 4.24560546875 * h - 0.132568359375 * d
  };
  return i !== void 0 && (v.alpha = i), v;
}, yi = {
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
    xyz65: sr,
    rgb: (e) => X(sr(e))
  },
  fromMode: {
    xyz65: hr,
    rgb: (e) => hr(j(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: c,
    t: c,
    p: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, Mi = 134.03437499999998, wi = 16295499532821565e-27, lt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Re);
  return Math.pow((Le + He * t) / (1 + qe * t), Mi);
}, st = (e = 0) => Math.max(e * 203, 0), Fr = ({ x: e, y: t, z: r, alpha: i }) => {
  e = st(e), t = st(t), r = st(r);
  let a = 1.15 * e - 0.15 * r, n = 0.66 * t + 0.34 * e, o = lt(0.41478972 * a + 0.579999 * n + 0.014648 * r), l = lt(-0.20151 * a + 1.120649 * n + 0.0531008 * r), h = lt(-0.0166008 * a + 0.2648 * n + 0.6684799 * r), d = (o + l) / 2, v = {
    mode: "jab",
    j: 0.44 * d / (1 - 0.56 * d) - wi,
    a: 3.524 * o - 4.066708 * l + 0.542708 * h,
    b: 0.199076 * o + 1.096799 * l - 1.295875 * h
  };
  return i !== void 0 && (v.alpha = i), v;
}, xi = 134.03437499999998, cr = 16295499532821565e-27, ht = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / xi);
  return 1e4 * Math.pow((Le - t) / (qe * t - He), 1 / Re);
}, ct = (e) => e / 203, Yr = ({ j: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (e + cr) / (0.44 + 0.56 * (e + cr)), n = ht(a + 0.13860504 * t + 0.058047316 * r), o = ht(a - 0.13860504 * t - 0.058047316 * r), l = ht(a - 0.096019242 * t - 0.8118919 * r), h = {
    mode: "xyz65",
    x: ct(1.661373024652174 * n - 0.914523081304348 * o + 0.23136208173913045 * l),
    y: ct(-0.3250758611844533 * n + 1.571847026732543 * o - 0.21825383453227928 * l),
    z: ct(-0.090982811 * n - 0.31272829 * o + 1.5227666 * l)
  };
  return i !== void 0 && (h.alpha = i), h;
}, Zr = (e) => {
  let t = Fr(j(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Gr = (e) => X(Yr(e)), ki = {
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
    rgb: Zr,
    xyz65: Fr
  },
  toMode: {
    rgb: Gr,
    xyz65: Yr
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: c,
    a: c,
    b: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, dr = ({ j: e, a: t, b: r, alpha: i }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.sqrt(t * t + r * r), n = {
    mode: "jch",
    j: e,
    c: a
  };
  return a && (n.h = P(Math.atan2(r, t) * 180 / Math.PI)), i !== void 0 && (n.alpha = i), n;
}, ur = ({ j: e, c: t, h: r, alpha: i }) => {
  r === void 0 && (r = 0);
  let a = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Pi = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: ur,
    rgb: (e) => Gr(ur(e))
  },
  fromMode: {
    rgb: (e) => dr(Zr(e)),
    jab: dr
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
      use: c,
      fixup: N
    },
    c,
    j: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ie },
  average: { h: W }
}, Oe = Math.pow(29, 3) / Math.pow(3, 3), It = Math.pow(6, 3) / Math.pow(29, 3), dt = (e) => Math.pow(e, 3) > It ? Math.pow(e, 3) : (116 * e - 16) / Oe, Nt = ({ l: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (e + 16) / 116, n = t / 500 + a, o = a - r / 200, l = {
    mode: "xyz50",
    x: dt(n) * M.X,
    y: dt(a) * M.Y,
    z: dt(o) * M.Z
  };
  return i !== void 0 && (l.alpha = i), l;
}, ue = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = V({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return i !== void 0 && (a.alpha = i), a;
}, Jr = (e) => ue(Nt(e)), ve = (e) => {
  let { r: t, g: r, b: i, alpha: a } = Q(e), n = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * i,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * i,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, ut = (e) => e > It ? Math.cbrt(e) : (Oe * e + 16) / 116, Wt = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = ut(e / M.X), n = ut(t / M.Y), o = ut(r / M.Z), l = {
    mode: "lab",
    l: 116 * n - 16,
    a: 500 * (a - n),
    b: 200 * (n - o)
  };
  return i !== void 0 && (l.alpha = i), l;
}, Kr = (e) => {
  let t = Wt(ve(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function _i(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, i, a, n, o] = t;
  if (!(i.type === s.Hue || a.type === s.Hue || n.type === s.Hue))
    return i.type !== s.None && (r.l = Math.min(Math.max(0, i.value), 100)), a.type !== s.None && (r.a = a.type === s.Number ? a.value : a.value * 125 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 125 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Rt = {
  mode: "lab",
  toMode: {
    xyz50: Nt,
    rgb: Jr
  },
  fromMode: {
    xyz50: Wt,
    rgb: Kr
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
  parse: [_i],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: c,
    a: c,
    b: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, zi = {
  ...Rt,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Lr,
    rgb: Ne
  },
  fromMode: {
    xyz65: Hr,
    rgb: We
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Si(e, t) {
  if (!t || t[0] !== "lch") return;
  const r = { mode: "lch" }, [, i, a, n, o] = t;
  if (i.type !== s.None) {
    if (i.type === s.Hue) return;
    r.l = Math.min(Math.max(0, i.value), 100);
  }
  if (a.type !== s.None && (r.c = Math.max(0, a.type === s.Number ? a.value : a.value * 150 / 100)), n.type !== s.None) {
    if (n.type === s.Percentage) return;
    r.h = n.value;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Lt = {
  mode: "lch",
  toMode: {
    lab: H,
    rgb: (e) => Jr(H(e))
  },
  fromMode: {
    rgb: (e) => L(Kr(e)),
    lab: L
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
  parse: [Si],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: c,
      fixup: N
    },
    c,
    l: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ie },
  average: { h: W }
}, Ti = {
  ...Lt,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => H(e, "lab65"),
    rgb: (e) => Ne(H(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => L(We(e), "lch65"),
    lab65: (e) => L(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Ur = ({ l: e, u: t, v: r, alpha: i }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.sqrt(t * t + r * r), n = {
    mode: "lchuv",
    l: e,
    c: a
  };
  return a && (n.h = P(Math.atan2(r, t) * 180 / Math.PI)), i !== void 0 && (n.alpha = i), n;
}, Qr = ({ l: e, c: t, h: r, alpha: i }) => {
  r === void 0 && (r = 0);
  let a = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Vr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), ea = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), $i = Vr(M.X, M.Y, M.Z), Ci = ea(M.X, M.Y, M.Z), Ai = (e) => e <= It ? Oe * e : 116 * Math.cbrt(e) - 16, Pt = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Ai(t / M.Y), n = Vr(e, t, r), o = ea(e, t, r);
  !isFinite(n) || !isFinite(o) ? a = n = o = 0 : (n = 13 * a * (n - $i), o = 13 * a * (o - Ci));
  let l = {
    mode: "luv",
    l: a,
    u: n,
    v: o
  };
  return i !== void 0 && (l.alpha = i), l;
}, Ei = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Ii = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Ni = Ei(M.X, M.Y, M.Z), Wi = Ii(M.X, M.Y, M.Z), _t = ({ l: e, u: t, v: r, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = t / (13 * e) + Ni, n = r / (13 * e) + Wi, o = M.Y * (e <= 8 ? e / Oe : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: o * (9 * a) / (4 * n),
    y: o,
    z: o * (12 - 3 * a - 20 * n) / (4 * n)
  };
  return i !== void 0 && (l.alpha = i), l;
}, Ri = (e) => Ur(Pt(ve(e))), Li = (e) => ue(_t(Qr(e))), Hi = {
  mode: "lchuv",
  toMode: {
    luv: Qr,
    rgb: Li
  },
  fromMode: {
    rgb: Ri,
    luv: Ur
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
      use: c,
      fixup: N
    },
    c,
    l: c,
    alpha: {
      use: c,
      fixup: w
    }
  },
  difference: { h: Ie },
  average: { h: W }
}, qi = {
  ...U,
  mode: "lrgb",
  toMode: { rgb: V },
  fromMode: { rgb: Q },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Oi = {
  mode: "luv",
  toMode: {
    xyz50: _t,
    rgb: (e) => ue(_t(e))
  },
  fromMode: {
    xyz50: Pt,
    rgb: (e) => Pt(ve(e))
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
    l: c,
    u: c,
    v: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, ta = ({ r: e, g: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), n = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * a + 0.7936177747023054 * n - 0.0040720430116193 * o,
    a: 1.9779985324311684 * a - 2.42859224204858 * n + 0.450593709617411 * o,
    b: 0.0259040424655478 * a + 0.7827717124575296 * n - 0.8086757549230774 * o
  };
  return i !== void 0 && (l.alpha = i), l;
}, Be = (e) => {
  let t = ta(Q(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, pe = ({ l: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), n = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * a - 3.3077115392580616 * n + 0.2309699031821044 * o,
    g: -1.2684379732850317 * a + 2.6097573492876887 * n - 0.3413193760026573 * o,
    b: -0.0041960761386756 * a - 0.7034186179359362 * n + 1.7076146940746117 * o
  };
  return i !== void 0 && (l.alpha = i), l;
}, De = (e) => V(pe(e));
function zt(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function _e(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function Bi(e, t) {
  let r, i, a, n, o, l, h, d;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, i = 1.76576728, a = 0.59662641, n = 0.75515197, o = 0.56771245, l = 4.0767416621, h = -3.3077115913, d = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, i = -0.45954404, a = 0.08285427, n = 0.1254107, o = 0.14503204, l = -1.2684380046, h = 2.6097574011, d = -0.3413193965) : (r = 1.35733652, i = -915799e-8, a = -1.1513021, n = -0.50559606, o = 692167e-8, l = -0.0041960863, h = -0.7034186147, d = 1.707614701);
  let v = r + i * e + a * t + n * e * e + o * e * t, u = 0.3963377774 * e + 0.2158037573 * t, f = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t;
  {
    let b = 1 + v * u, y = 1 + v * f, x = 1 + v * m, S = b * b * b, _ = y * y * y, R = x * x * x, ee = 3 * u * b * b, te = 3 * f * y * y, re = 3 * m * x * x, ae = 6 * u * u * b, ie = 6 * f * f * y, ne = 6 * m * m * x, F = l * S + h * _ + d * R, O = l * ee + h * te + d * re, oe = l * ae + h * ie + d * ne;
    v = v - F * O / (O * O - 0.5 * F * oe);
  }
  return v;
}
function Ht(e, t) {
  let r = Bi(e, t), i = pe({
    l: 1,
    a: r * e,
    b: r * t
  }), a = Math.cbrt(1 / Math.max(i.r, i.g, i.b));
  return [a, a * r];
}
function Di(e, t, r, i, a, n = null) {
  n || (n = Ht(e, t));
  let o;
  if ((r - a) * n[1] - (n[0] - a) * i <= 0) o = n[1] * a / (i * n[0] + n[1] * (a - r));
  else {
    o = n[1] * (a - 1) / (i * (n[0] - 1) + n[1] * (a - r));
    {
      let l = r - a, h = i, d = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, u = -0.0894841775 * e - 1.291485548 * t, f = l + h * d, m = l + h * v, b = l + h * u;
      {
        let y = a * (1 - o) + o * r, x = o * i, S = y + x * d, _ = y + x * v, R = y + x * u, ee = S * S * S, te = _ * _ * _, re = R * R * R, ae = 3 * f * S * S, ie = 3 * m * _ * _, ne = 3 * b * R * R, F = 6 * f * f * S, O = 6 * m * m * _, oe = 6 * b * b * R, Jt = 4.0767416621 * ee - 3.3077115913 * te + 0.2309699292 * re - 1, Fe = 4.0767416621 * ae - 3.3077115913 * ie + 0.2309699292 * ne, ya = 4.0767416621 * F - 3.3077115913 * O + 0.2309699292 * oe, Kt = Fe / (Fe * Fe - 0.5 * Jt * ya), Ye = -Jt * Kt, Ut = -1.2684380046 * ee + 2.6097574011 * te - 0.3413193965 * re - 1, Ze = -1.2684380046 * ae + 2.6097574011 * ie - 0.3413193965 * ne, Ma = -1.2684380046 * F + 2.6097574011 * O - 0.3413193965 * oe, Qt = Ze / (Ze * Ze - 0.5 * Ut * Ma), Ge = -Ut * Qt, Vt = -0.0041960863 * ee - 0.7034186147 * te + 1.707614701 * re - 1, Je = -0.0041960863 * ae - 0.7034186147 * ie + 1.707614701 * ne, wa = -0.0041960863 * F - 0.7034186147 * O + 1.707614701 * oe, er = Je / (Je * Je - 0.5 * Vt * wa), Ke = -Vt * er;
        Ye = Kt >= 0 ? Ye : 1e6, Ge = Qt >= 0 ? Ge : 1e6, Ke = er >= 0 ? Ke : 1e6, o += Math.min(Ye, Math.min(Ge, Ke));
      }
    }
  }
  return o;
}
function qt(e, t, r = null) {
  r || (r = Ht(e, t));
  let i = r[0], a = r[1];
  return [a / i, a / (1 - i)];
}
function ra(e, t, r) {
  let i = Ht(t, r), a = Di(t, r, e, 1, e, i), n = qt(t, r, i), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), h = a / Math.min(e * n[0], (1 - e) * n[1]), d = e * o, v = (1 - e) * l, u = 0.9 * h * Math.sqrt(Math.sqrt(1 / (1 / (d * d * d * d) + 1 / (v * v * v * v))));
  return d = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (d * d) + 1 / (v * v))),
    u,
    a
  ];
}
function vr(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, a = {
    mode: "okhsl",
    l: zt(t)
  };
  e.alpha !== void 0 && (a.alpha = e.alpha);
  let n = Math.sqrt(r * r + i * i);
  if (!n)
    return a.s = 0, a;
  let [o, l, h] = ra(t, r / n, i / n), d;
  if (n < l) {
    let v = 0, u = 0.8 * o, f = 1 - u / l;
    d = (n - v) / (u + f * (n - v)) * 0.8;
  } else {
    let v = l, u = 0.2 * l * l * 1.25 * 1.25 / o, f = 1 - u / (h - l);
    d = 0.8 + 0.2 * ((n - v) / (u + f * (n - v)));
  }
  return d && (a.s = d, a.h = P(Math.atan2(i, r) * 180 / Math.PI)), a;
}
function pr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const a = {
    mode: "oklab",
    l: _e(i)
  };
  if (e.alpha !== void 0 && (a.alpha = e.alpha), !r || i === 1)
    return a.a = a.b = 0, a;
  let n = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [l, h, d] = ra(a.l, n, o), v, u, f, m;
  r < 0.8 ? (v = 1.25 * r, u = 0, f = 0.8 * l, m = 1 - f / h) : (v = 5 * (r - 0.8), u = h, f = 0.2 * h * h * 1.25 * 1.25 / l, m = 1 - f / (d - h));
  let b = u + v * f / (1 - m * v);
  return a.a = b * n, a.b = b * o, a;
}
var ji = {
  ...Or,
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
    oklab: vr,
    rgb: (e) => vr(Be(e))
  },
  toMode: {
    oklab: pr,
    rgb: (e) => De(pr(e))
  }
};
function fr(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, a = Math.sqrt(r * r + i * i), n = a ? r / a : 1, o = a ? i / a : 1, [l, h] = qt(n, o), d = 0.5, v = 1 - d / l, u = h / (a + t * h), f = u * t, m = u * a, b = _e(f), y = m * b / f, x = pe({
    l: b,
    a: n * y,
    b: o * y
  }), S = Math.cbrt(1 / Math.max(x.r, x.g, x.b, 0));
  t = t / S, a = a / S * zt(t) / t, t = zt(t);
  const _ = {
    mode: "okhsv",
    s: a ? (d + h) * m / (h * d + h * v * m) : 0,
    v: t ? t / f : 0
  };
  return _.s && (_.h = P(Math.atan2(i, r) * 180 / Math.PI)), e.alpha !== void 0 && (_.alpha = e.alpha), _;
}
function mr(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, a = e.v !== void 0 ? e.v : 0, n = Math.cos(r / 180 * Math.PI), o = Math.sin(r / 180 * Math.PI), [l, h] = qt(n, o), d = 0.5, v = 1 - d / l, u = 1 - i * d / (d + h - h * v * i), f = i * h * d / (d + h - h * v * i), m = _e(u), b = f * m / u, y = pe({
    l: m,
    a: n * b,
    b: o * b
  }), x = Math.cbrt(1 / Math.max(y.r, y.g, y.b, 0)), S = _e(a * u), _ = f * S / u;
  return t.l = S * x, t.a = _ * n * x, t.b = _ * o * x, t;
}
var Xi = {
  ...jr,
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
    oklab: fr,
    rgb: (e) => fr(Be(e))
  },
  toMode: {
    oklab: mr,
    rgb: (e) => De(mr(e))
  }
};
function Fi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, i, a, n, o] = t;
  if (!(i.type === s.Hue || a.type === s.Hue || n.type === s.Hue))
    return i.type !== s.None && (r.l = Math.min(Math.max(0, i.type === s.Number ? i.value : i.value / 100), 1)), a.type !== s.None && (r.a = a.type === s.Number ? a.value : a.value * 0.4 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 0.4 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Yi = {
  ...Rt,
  mode: "oklab",
  toMode: {
    lrgb: pe,
    rgb: De
  },
  fromMode: {
    lrgb: ta,
    rgb: Be
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Fi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Zi(e, t) {
  if (!t || t[0] !== "oklch") return;
  const r = { mode: "oklch" }, [, i, a, n, o] = t;
  if (i.type !== s.None) {
    if (i.type === s.Hue) return;
    r.l = Math.min(Math.max(0, i.type === s.Number ? i.value : i.value / 100), 1);
  }
  if (a.type !== s.None && (r.c = Math.max(0, a.type === s.Number ? a.value : a.value * 0.4 / 100)), n.type !== s.None) {
    if (n.type === s.Percentage) return;
    r.h = n.value;
  }
  return o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Gi = {
  ...Lt,
  mode: "oklch",
  toMode: {
    oklab: (e) => H(e, "oklab"),
    rgb: (e) => De(H(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => L(Be(e), "oklch"),
    oklab: (e) => L(e, "oklch")
  },
  parse: [Zi],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, gr = (e) => {
  let { r: t, g: r, b: i, alpha: a } = Q(e), n = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * i,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * i,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, br = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = V({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return i !== void 0 && (a.alpha = i), a;
}, Ji = {
  ...U,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => br(j(e)),
    xyz65: br
  },
  toMode: {
    rgb: (e) => X(gr(e)),
    xyz65: gr
  }
}, vt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, yr = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "prophoto",
    r: vt(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: vt(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: vt(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return i !== void 0 && (a.alpha = i), a;
}, pt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, Mr = (e) => {
  let t = pt(e.r), r = pt(e.g), i = pt(e.b), a = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * i,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * i,
    z: 0 * t + 0 * r + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, Ki = {
  ...U,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: yr,
    rgb: (e) => yr(ve(e))
  },
  toMode: {
    xyz50: Mr,
    rgb: (e) => ue(Mr(e))
  }
}, Ui = 1.09929682680944, Qi = 0.018053968510807, ft = (e) => {
  const t = Math.abs(e);
  return t > Qi ? (Math.sign(e) || 1) * (Ui * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, wr = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "rec2020",
    r: ft(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: ft(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: ft(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return i !== void 0 && (a.alpha = i), a;
}, xr = 1.09929682680944, Vi = 0.018053968510807, mt = (e = 0) => {
  let t = Math.abs(e);
  return t < Vi * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + xr - 1) / xr, 1 / 0.45);
}, kr = (e) => {
  let t = mt(e.r), r = mt(e.g), i = mt(e.b), a = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * i,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * i,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, en = {
  ...U,
  mode: "rec2020",
  fromMode: {
    xyz65: wr,
    rgb: (e) => wr(j(e))
  },
  toMode: {
    xyz65: kr,
    rgb: (e) => X(kr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, D = 0.0037930732552754493, aa = Math.cbrt(D), gt = (e) => Math.cbrt(e) - aa, tn = (e) => {
  const { r: t, g: r, b: i, alpha: a } = Q(e), n = gt(0.3 * t + 0.622 * r + 0.078 * i + D), o = gt(0.23 * t + 0.692 * r + 0.078 * i + D), l = gt(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * i + D), h = {
    mode: "xyb",
    x: (n - o) / 2,
    y: (n + o) / 2,
    b: l - (n + o) / 2
  };
  return a !== void 0 && (h.alpha = a), h;
}, bt = (e) => Math.pow(e + aa, 3), rn = ({ x: e, y: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = bt(e + t) - D, n = bt(t - e) - D, o = bt(r + t) - D, l = V({
    r: 11.031566904639861 * a - 9.866943908131562 * n - 0.16462299650829934 * o,
    g: -3.2541473810744237 * a + 4.418770377582723 * n - 0.16462299650829934 * o,
    b: -3.6588512867136815 * a + 2.7129230459360922 * n + 1.9459282407775895 * o
  });
  return i !== void 0 && (l.alpha = i), l;
}, an = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: rn },
  fromMode: { rgb: tn },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: c,
    y: c,
    b: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, nn = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: ue,
    lab: Wt
  },
  fromMode: {
    rgb: ve,
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
    x: c,
    y: c,
    z: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, on = (e) => {
  let { x: t, y: r, z: i, alpha: a } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), i === void 0 && (i = 0);
  let n = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * i,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * i,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, ln = (e) => {
  let { x: t, y: r, z: i, alpha: a } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), i === void 0 && (i = 0);
  let n = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * i,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * i,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, sn = {
  mode: "xyz65",
  toMode: {
    rgb: X,
    xyz50: on
  },
  fromMode: {
    rgb: j,
    xyz50: ln
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
    x: c,
    y: c,
    z: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, hn = ({ r: e, g: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, cn = ({ y: e, i: t, q: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, dn = {
  mode: "yiq",
  toMode: { rgb: cn },
  fromMode: { rgb: hn },
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
    y: c,
    i: c,
    q: c,
    alpha: {
      use: c,
      fixup: w
    }
  }
}, un = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, vn = (e = 4) => (t) => typeof t == "number" ? un(t, e) : t, Mo = vn(2), pn = (e) => Math.max(0, Math.min(1, e || 0)), yt = (e) => Math.round(pn(e) * 255), fn = Et("rgb"), wo = Et("hsl"), mn = (e) => {
  if (e === void 0) return;
  let t = yt(e.r), r = yt(e.g), i = yt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | i).toString(16).slice(1);
}, Ot = (e) => mn(fn(e)), xo = g(Ka), ko = g(ai), Po = g(ii), _o = g(ni), zo = g(si), So = g(Or), To = g(jr), $o = g(bi), Co = g(yi), Ao = g(ki), Eo = g(Pi), Io = g(Rt), No = g(zi), Wo = g(Lt), Ro = g(Ti), Lo = g(Hi), Ho = g(qi), qo = g(Oi), Oo = g(ji), Bo = g(Xi), Do = g(Yi), ze = g(Gi), jo = g(Ji), Xo = g(Ki), Fo = g(en), Yo = g(U), Zo = g(an), Go = g(nn), Jo = g(sn), Ko = g(dn), ia = (e, t = "l") => e.sort((r, i) => Math.sign(ze({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - ze({
  mode: "rgb",
  r: i[0],
  g: i[1],
  b: i[2]
})?.[t]) || 0), Bt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), gn = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((i) => {
    let a = 1e4, n = 0;
    t.forEach((o, l) => {
      const h = Bt(i, o);
      (typeof a > "u" || a > h) && (a = h, n = l);
    }), r[n].points.push(i);
  }), r;
}, bn = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], yn = (e, t) => {
  let r = ia(Mn(e, t));
  const i = 10;
  for (let a = 0; a < i; a++) {
    const n = gn(e, r).map((o) => o.points.length > 0 ? bn(o.points) : null);
    if (n.every((o, l) => o && Bt(o, r[l]) < 1e-3)) break;
    r = n;
  }
  return r;
}, Mn = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const i = e.map((h) => Math.min(...r.map((d) => Bt(h, d)))), a = i.reduce((h, d) => h + d, 0), n = i.map((h) => h / a);
    let o = 0;
    const l = Math.random();
    for (let h = 0; h < n.length; h++)
      if (o += n[h], l < o) {
        r.push(e[h]);
        break;
      }
  }
  return r;
}, wn = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((n) => n?.blob?.()), r = await createImageBitmap(t), i = new OffscreenCanvas(r.width, r.height), a = i.getContext("2d");
  return a.filter = "blur(16px)", a?.drawImage?.(r, 0, 0, i.width, i.height), i;
}, xn = async (e) => {
  const t = await wn(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), i = r.getContext("2d");
  i?.drawImage?.(t, 0, 0, r.width, r.height);
  const a = (i?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, n = r.width * r.height || 0, o = 1 / 255, l = [];
  for (let h = 0; h < n; h++) {
    const d = h * 4;
    l.push(a instanceof Float32Array || a instanceof Float16Array ? [
      a?.[d + 0] || 0,
      a?.[d + 1] || 0,
      a?.[d + 2] || 0
    ] : [
      (a?.[d + 0] || 0) * o,
      (a?.[d + 1] || 0) * o,
      (a?.[d + 2] || 0) * o
    ]);
  }
  return l;
}, kn = async (e) => {
  const t = await xn(e);
  return ia(yn(t, 4), "h");
}, Pn = "rs-wallpaper-theme", _n = "rs-wallpaper-primary", zn = "rs-wallpaper-theme-src", Dt = Pn, Sn = _n, Pr = zn, jt = 0.52, Tn = 0.025, ce = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, I = null, $n = 0.03, Cn = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], An = (e, t, r) => Math.min(r, Math.max(t, e)), _r = (e, t, r, i) => Ot({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || i, En = (e) => {
  const [t, r, i] = e;
  if (![
    t,
    r,
    i
  ].every((o) => Number.isFinite(o))) return null;
  const a = Ot({
    mode: "rgb",
    r: t,
    g: r,
    b: i
  });
  if (!a) return null;
  const n = ze({
    mode: "rgb",
    r: t,
    g: r,
    b: i
  });
  return {
    rgb: e,
    hex: a,
    l: n?.l ?? 0.5,
    c: n?.c ?? 0,
    h: n?.h ?? 0
  };
}, In = (e) => ze(e)?.l ?? 0.4, Nn = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, Xt = (e) => Number.isFinite(e) && e >= $n && e <= 1, Wn = (e, t) => {
  if (!e.length && t == null) return { ...ce };
  const r = e.map((v) => v.l).sort((v, u) => v - u), i = e.length ? e.reduce((v, u) => v + u.l, 0) / e.length : t, a = r.length ? r[Math.floor(r.length / 2)] : i, n = An(t != null && Xt(t) ? t : Math.max(i, a), 0.08, 0.94), o = e.length ? [...e].sort((v, u) => v.c - u.c || Math.abs(v.l - n) - Math.abs(u.l - n))[0] : null, l = o ? Math.min(Tn, Math.max(0, o.c * 0.2)) : 0, h = o?.h || 0, d = n < jt;
  return {
    underlying: _r(n, l, h, d ? ce.underlying : "#e8e6e2"),
    contrast: _r(d ? 0.93 : 0.16, 8e-3, h, d ? ce.contrast : "#141416")
  };
}, Rn = async (e) => {
  try {
    const t = e instanceof Blob ? e : await (await fetch(e)).blob();
    if (!t || t.size <= 0) return null;
    const r = await createImageBitmap(t), i = 48, a = Math.max(1, Math.round(r.height / Math.max(1, r.width) * i)), n = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(i, a) : Object.assign(document.createElement("canvas"), {
      width: i,
      height: a
    });
    n instanceof OffscreenCanvas || (n.width = i, n.height = a);
    const o = n.getContext("2d");
    if (!o)
      return r.close?.(), null;
    o.drawImage(r, 0, 0, i, a), r.close?.();
    const l = o.getImageData(0, 0, i, a).data;
    let h = 0, d = 0;
    for (let u = 0; u < l.length; u += 16) {
      if ((l[u + 3] ?? 255) < 16) continue;
      const f = l[u] / 255, m = l[u + 1] / 255, b = l[u + 2] / 255;
      h += 0.2126 * f + 0.7152 * m + 0.0722 * b, d++;
    }
    if (d < 8) return null;
    const v = h / d;
    return Xt(v) ? v : null;
  } catch {
    return null;
  }
}, Ln = (e) => e <= jt ? { ...ce } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, Hn = (e) => !!(e.underlying && e.contrast), qn = (e, t) => {
  const r = e.map(En).filter(Boolean);
  if (!r.length) return null;
  const i = r.filter((u) => u.l >= 0.18 && u.l <= 0.88 && u.c >= 0.02).sort((u, f) => f.c - u.c || Math.abs(f.l - 0.55) - Math.abs(u.l - 0.55)), a = i.length ? i : [...r].sort((u, f) => f.c - u.c), n = a[0];
  if (!n) return null;
  const o = (u, f) => {
    const m = Math.abs(u - f) % 360;
    return m > 180 ? 360 - m : m;
  }, l = (u) => {
    const f = a.filter((m) => !u.includes(m));
    if (!f.length) {
      const m = u[u.length - 1] ?? n, b = Ot({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, m.l + (u.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, m.c * 0.85),
        h: m.h
      });
      return {
        ...m,
        hex: b || m.hex,
        l: m.l
      };
    }
    return [...f].sort((m, b) => Math.min(...u.map((y) => o(b.h, y.h))) - Math.min(...u.map((y) => o(m.h, y.h))) || b.c - m.c)[0] ?? f[0];
  }, h = l([n]), d = l([n, h]), v = Wn(r, t);
  return {
    primary: n.hex,
    secondary: h.hex,
    tertiary: d.hex,
    ...v
  };
}, na = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, On = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, B = (e) => !!Nr(e), St = (e, t = []) => {
  if (typeof document > "u") return;
  const r = In(e.underlying) < jt, { shadow: i, glow: a } = Nn(r), n = new Set(na());
  for (const l of t) n.add(l);
  if (!B(e.underlying) || !B(e.contrast) || !B(i) || !B(a)) return;
  se("--wallpaper-underlying-color", e.underlying), se("--wallpaper-contrast-color", e.contrast), se("--env-launcher-fg", e.contrast), se("--env-launcher-fg-shadow", i), se("--env-launcher-fg-glow", a);
  for (const l of n)
    A(l, "--wallpaper-underlying-color", e.underlying), A(l, "--wallpaper-contrast-color", e.contrast), A(l, "--env-launcher-fg", e.contrast), A(l, "--env-launcher-fg-shadow", i), A(l, "--env-launcher-fg-glow", a);
  const o = $r("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  o.style.setProperty("--wallpaper-underlying-color", e.underlying), o.style.setProperty("--wallpaper-contrast-color", e.contrast), o.style.setProperty("--env-launcher-fg", e.contrast), o.style.setProperty("--env-launcher-fg-shadow", i), o.style.setProperty("--env-launcher-fg-glow", a);
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
}, Bn = (e) => {
  try {
    const t = Se();
    if (!t) return;
    localStorage.setItem(Dt, JSON.stringify({
      ...t,
      underlying: e.underlying,
      contrast: e.contrast
    }));
  } catch {
  }
}, Dn = (e, t = []) => {
  if (!Xt(e))
    return I ? (St(I, t), I) : { ...ce };
  const r = Ln(e);
  return I = r, St(r, t), Bn(r), r;
}, be = (e) => {
  const t = I ? {
    ...e,
    ...I
  } : e;
  try {
    localStorage.setItem(Dt, JSON.stringify(t)), localStorage.setItem(Sn, t.primary);
  } catch {
  }
  if (Hn(t) && St(t), !On()) return;
  for (const i of na()) for (const [a, n] of Cn) A(i, a, t[n]);
  if (!B(t.primary) || !B(t.secondary) || !B(t.tertiary)) return;
  document.querySelectorAll("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((i) => {
    A(i, "--color-primary", t.primary), A(i, "--base-color", t.primary), A(i, "--color-secondary", t.secondary), A(i, "--color-tertiary", t.tertiary);
  });
  const r = $r("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  r.style.setProperty("--color-primary", t.primary), r.style.setProperty("--base-color", t.primary), r.style.setProperty("--color-secondary", t.secondary), r.style.setProperty("--color-tertiary", t.tertiary), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
    source: "wallpaper",
    seeds: t
  } }));
}, Se = () => {
  try {
    const e = localStorage.getItem(Dt);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, Te = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`;
  if (typeof e == "string") {
    if (!e || globalThis[/* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc")]?.has(e) || e.startsWith("data:") && !/^data:image\//i.test(e) || /video\/mp2t/i.test(e)) return null;
    if (/\/assets\/wallpaper\.jpg(?:$|[?#])/i.test(e)) try {
      const a = String(document.documentElement?.dataset?.cwspSku || "").toLowerCase(), n = String(globalThis.location?.hostname || "").toLowerCase();
      if (a === "process" || n === "process.u2re.space" || n === "workcenter.u2re.space" || n === "ai.u2re.space") return null;
    } catch {
      return null;
    }
  } else if (e instanceof Blob && e.type && !e.type.startsWith("image/") && e.type !== "application/octet-stream") return null;
  const i = await Rn(e);
  if (i != null && Dn(i), !t?.force) try {
    if (localStorage.getItem(Pr) === r) {
      const a = Se();
      if (a)
        return be(a), I ? {
          ...a,
          ...I
        } : a;
    }
  } catch {
  }
  try {
    const a = await kn(e), n = qn(a, i ?? void 0);
    if (!n) return null;
    be(n);
    try {
      localStorage.setItem(Pr, r);
    } catch {
    }
    return I ? {
      ...n,
      ...I
    } : n;
  } catch (a) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", a);
    const n = Se();
    return n ? (be(n), n) : null;
  }
}, jn = () => {
  const e = Se();
  return e && be(e), e;
}, oa = "rs-wallpaper-image", $ = "/assets/wallpaper.jpg", Ft = "/assets/user-wallpaper", la = "cwsp-user-wallpaper", Tt = "idb:rs-wallpaper", Xn = "cwsp-wallpaper-v1", q = "blobs", Yt = "current", sa = 512e3, z = null, je = 0, G = () => Pa?.[xa()] ?? 0, $e = (e) => e === "idb:rs-wallpaper" || e.startsWith("idb:"), ha = (e) => e.startsWith("blob:") || e.startsWith("data:") && (e.length > sa || !/^data:image\//i.test(e)), ca = () => {
  if (je += 1, z && z.startsWith("blob:")) try {
    URL.revokeObjectURL(z);
  } catch {
  }
  z = null;
}, da = (e, t) => (t !== je || z || (z = URL.createObjectURL(e)), z), Zt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(Xn, 1);
  r.onupgradeneeded = () => {
    const i = r.result;
    i.objectStoreNames.contains(q) || i.createObjectStore(q);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), Fn = async (e) => {
  const t = await Zt();
  try {
    await new Promise((r, i) => {
      const a = t.transaction(q, "readwrite");
      a.objectStore(q).put(e, Yt), a.oncomplete = () => r(), a.onerror = () => i(a.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, Gt = async () => {
  const e = await Zt();
  try {
    return await new Promise((t, r) => {
      const i = e.transaction(q, "readonly").objectStore(q).get(Yt);
      i.onsuccess = () => {
        const a = i.result;
        t(a instanceof Blob ? a : null);
      }, i.onerror = () => r(i.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, ua = async (e) => {
  if (typeof caches > "u" || !(e instanceof Blob) || e.size <= 0) return;
  const t = await caches.open(la), r = e.type && e.type.startsWith("image/") ? e.type : "image/jpeg";
  await t.put(new Request(Ft), new Response(e, { headers: { "Content-Type": r } }));
}, Yn = async () => {
  if (!(typeof caches > "u"))
    try {
      await (await caches.open(la)).delete(new Request(Ft));
    } catch {
    }
}, Zn = async () => {
  try {
    const e = await Zt();
    try {
      await new Promise((t, r) => {
        const i = e.transaction(q, "readwrite");
        i.objectStore(q).delete(Yt), i.oncomplete = () => t(), i.onerror = () => r(i.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, Xe = () => {
  try {
    const e = localStorage.getItem(oa);
    return e && e.trim() ? e.trim() : $;
  } catch {
    return $;
  }
}, Ce = (e) => {
  if (e.startsWith("blob:")) return !1;
  try {
    return localStorage.setItem(oa, e), !0;
  } catch {
    return !1;
  }
}, Gn = async () => {
  if (z) return z;
  const e = je;
  try {
    const t = await Gt();
    return t ? da(t, e) : null;
  } catch (t) {
    return console.warn("[fest/image] wallpaper IDB restore failed", t), null;
  }
}, Jn = (e) => e.startsWith("data:") || e.startsWith("blob:"), va = async () => {
  const e = Xe();
  if ($e(e) || ha(e)) {
    const t = await Gn();
    return t ? ($e(e) || Ce(Tt), t) : $t() ? "" : $;
  }
  return $t() && (!e || e === $) ? "" : e || $;
}, Y = null, Kn = () => Y || (Y = (async () => {
  const e = Xe();
  if ($e(e) || ha(e)) {
    const a = await Gt();
    if (!a) return null;
    ua(a).catch(() => {
    });
    const n = da(a, je);
    return n ? {
      url: n,
      blob: a
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
  const i = await r.blob();
  return !i.size || i.type && !i.type.startsWith("image/") ? null : {
    url: t,
    blob: i
  };
})().catch(() => null), Y), Un = async (e) => {
  if (!Y || !e) return null;
  const t = await Y;
  return t && (t.url === e || t.url === e.split("#")[0]) ? t.blob : null;
}, Uo = () => Xe(), zr = (e) => {
  const t = () => {
    const r = G(), i = String(r);
    e.getAttribute("data-orient") !== i && e.setAttribute("data-orient", i), e.getAttribute("orient") !== i && e.setAttribute("orient", i), e.style.setProperty("--orient", i), e.orient = r;
  };
  return t(), _a(t);
}, Qn = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = G(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, Qo = () => {
  va().then((e) => {
    Qn(), Ae(e);
  });
}, J = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, Ae = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(G());
  t.forEach((i) => {
    i.setAttribute("data-src", e), i.setAttribute("data-orient", r), i.setAttribute("orient", r), i.style.setProperty("--orient", r);
  });
}, Vn = async (e) => (await fetch(e)).blob(), eo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return to($), $;
  ca(), z = URL.createObjectURL(e), Ae(z), Te(e, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(J);
  });
  try {
    await Fn(e), Ce(Tt), ua(e).catch(() => {
    });
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), i = await new Promise((a, n) => {
        r.onload = () => a(String(r.result || "")), r.onerror = () => n(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      i && !Ce(i) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: Tt,
      url: z
    } }));
  } catch {
  }
  return z;
}, Vo = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "none", t.style.backgroundColor = "transparent";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "none", r.style.backgroundColor = "transparent";
  const i = document.createElement("canvas", { is: "ui-canvas" });
  i.className = "app-canvas__image ui-canvas", i.style.position = "absolute", i.style.inset = "0", i.style.pointerEvents = "none", i.style.inlineSize = "min(100cqi, 100dvi)", i.style.blockSize = "min(100cqb, 100dvb)", i.style.maxInlineSize = "min(100cqi, 100dvi)", i.style.maxBlockSize = "min(100cqb, 100dvb)", i.style.opacity = "1", i.style.mixBlendMode = "normal", i.setAttribute("is", "ui-canvas"), i.style.setProperty("dynamic-range-limit", "no-limit"), i.style.setProperty("color-space", "display-p3"), i.style.setProperty("background-color", "transparent", "important"), i.style.setProperty("opacity", "1", "important");
  const a = document.createElement("img");
  a.className = "app-canvas__poster", a.alt = "", a.decoding = "async", a.setAttribute("fetchpriority", "high"), a.draggable = !1, a.style.position = "absolute", a.style.inset = "0", a.style.inlineSize = "min(100cqi, 100dvi)", a.style.blockSize = "min(100cqb, 100dvb)", a.style.objectFit = "cover", a.style.objectPosition = "center", a.style.pointerEvents = "none", t.append(a, r, i), a.addEventListener("load", () => {
    try {
      document.documentElement.removeAttribute("data-cwsp-wallpaper-poster");
    } catch {
    }
  }, { once: !0 }), a.addEventListener("error", () => {
    a.src.includes("/assets/user-wallpaper") && a.removeAttribute("src");
  }), ao();
  const n = Xe(), o = $e(n) ? Ft : n.startsWith("data:") || n.startsWith("blob:") ? "" : n, l = Kn();
  o && !C.has(o) && (i.setAttribute("data-src", o), a.src = o), l.then((d) => {
    if (!(!d || !a.isConnected)) {
      if (d.url.startsWith("blob:")) {
        a.src = d.url, i.setAttribute("data-src", d.url);
        return;
      }
      a.getAttribute("src") || (a.src = d.url);
    }
  });
  const h = zr(i);
  return jn(), J(r), (async () => {
    const d = await va();
    if (!d || C.has(d)) {
      J(r);
      return;
    }
    i.setAttribute("data-src", d), a.isConnected && (a.src = d), zr(i);
    const v = d.startsWith("blob:") && await Gt() || d, u = () => {
      Te(v).then(() => J(r));
    }, f = globalThis.requestIdleCallback;
    typeof f == "function" ? f(u, { timeout: 1200 }) : globalThis.setTimeout?.(u, 320);
  })(), {
    root: t,
    canvas: i,
    glow: r,
    disposeOrient: h
  };
}, to = (e) => {
  const t = String(e || "").trim() || $;
  if (Jn(t) || t.length > sa) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await Vn(t);
        await eo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r);
        const i = t.startsWith("blob:") ? $ : t;
        Ae(i), Te(i, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(J);
        });
      }
    })();
    return;
  }
  Zn(), Yn(), ca(), Ce(t) || console.warn("[fest/image] wallpaper pointer write failed"), Ae(t), Te(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(J);
  });
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: t,
      url: t
    } }));
  } catch {
  }
}, pa = /* @__PURE__ */ Symbol.for("image.canvas.blob");
globalThis[pa] ??= /* @__PURE__ */ new WeakMap();
var ge = globalThis[pa], fa = /* @__PURE__ */ Symbol.for("image.canvas.delayed");
globalThis[fa] ??= /* @__PURE__ */ new Map([]);
var ro = globalThis[fa], ma = /* @__PURE__ */ Symbol.for("image.canvas.sheduler");
globalThis[ma] ??= ka();
var Sr = globalThis[ma], ga = /* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc");
globalThis[ga] ??= /* @__PURE__ */ new Set();
var C = globalThis[ga], $t = () => {
  try {
    if (String(document.documentElement?.dataset?.cwspSku || "").toLowerCase() === "process") return !0;
    const e = String(globalThis.location?.hostname || "").toLowerCase();
    return e === "process.u2re.space" || e === "workcenter.u2re.space" || e === "ai.u2re.space";
  } catch {
    return !1;
  }
}, ao = () => {
  $t() && C.add($);
}, ye = (e) => e?.naturalWidth || e?.width || 1, Me = (e) => e?.naturalHeight || e?.height || 1, io = (e) => {
  const t = {
    alpha: !0,
    desynchronized: !0,
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0
  }, r = typeof document < "u" && document.documentElement?.dataset?.cwspNativeShell === "capacitor" ? ["srgb", "display-p3"] : [
    "rec2100-hlg",
    "display-p3",
    "srgb"
  ];
  for (const i of r) try {
    const a = e.getContext("2d", {
      ...t,
      colorSpace: i
    });
    if (a) return a;
  } catch {
  }
  try {
    return e.getContext("2d", t);
  } catch {
    return e.getContext("2d");
  }
}, el = (e, t) => {
  ro.set(e, t);
}, no = (e, t, r = 1, i, a = 0) => {
  const n = e.canvas;
  e.translate(n.width / 2, n.height / 2), e.rotate((-a || 0) * (Math.PI * 0.5)), e.rotate((1 - i) * (Math.PI / 2)), e.translate(-(ye(t) / 2) * r, -(Me(t) / 2) * r);
}, oo = (e) => {
  if (!ge.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image)) {
    const t = (() => {
      const i = Math.min(globalThis.devicePixelRatio || 1, 2), a = Math.max(globalThis.screen?.width || 0, globalThis.screen?.height || 0, 800);
      return Math.round(Math.min(1600, a * i));
    })(), r = (async () => {
      if (e instanceof Blob && e.size > 18e4) try {
        return await createImageBitmap(e, {
          resizeWidth: t,
          resizeQuality: "medium"
        });
      } catch {
      }
      return createImageBitmap(e);
    })().catch((i) => {
      throw ge.delete(e), i;
    });
    ge.set(e, r);
  }
  return ge.get(e);
}, ba = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[ba] ??= /* @__PURE__ */ new WeakMap();
var Tr = globalThis[ba], lo = (e, t) => {
  const r = Tr.get(e);
  if (typeof r == "function") return r;
  const i = e.bind(t);
  return Tr.set(e, i), i;
}, Ct = null;
typeof HTMLCanvasElement < "u" ? Ct = class extends HTMLCanvasElement {
  static observedAttributes = [
    "data-src",
    "data-orient",
    "orient"
  ];
  ctx = null;
  image = null;
  #e = [1, 1];
  #t = "";
  #r = "";
  get #a() {
    const t = this.getAttribute("data-orient") ?? this.getAttribute("orient") ?? "0", r = Number.parseInt(t, 10);
    return Number.isFinite(r) ? r : 0;
  }
  set #a(t) {
    const r = String(t);
    this.setAttribute("data-orient", r), this.setAttribute("orient", r);
  }
  attributeChangedCallback(t, r, i) {
    t == "data-src" && this.#n(i), (t == "data-orient" || t == "orient") && this.#i(this.#r);
  }
  connectedCallback() {
    const t = this.parentNode;
    this.style.setProperty("max-inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("max-block-size", "min(100cqb, 100dvb)"), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || t?.clientWidth || 1, 1), t?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || t?.clientHeight || 1, 1), t?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)], this.#n(this.#t = this.dataset.src || this.#t), this.#a = G(), this.image && this.#i(this.#r);
  }
  constructor() {
    super();
    const t = this, r = this.parentNode, i = () => {
      const a = this.#e;
      this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), Math.min(screen?.width, globalThis?.screen?.availWidth || screen?.width) || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), Math.min(screen?.height, globalThis?.screen?.availHeight || screen?.height) || 1) * (devicePixelRatio || 1)], (a?.[0] != this.#e[0] || a?.[1] != this.#e[1]) && this.#i(this.#r);
    };
    Sr?.shedule?.(() => {
      this.ctx = io(t);
      try {
        this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" });
      } catch {
      }
      this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("block-size", "min(100cqb, 100dvb)"), this.style.setProperty("max-inline-size", "min(100cqi, 100dvi)"), this.style.setProperty("max-block-size", "min(100cqb, 100dvb)"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", "display-p3"), this.style.setProperty("background-color", "transparent", "important"), this.style.setProperty("opacity", "1", "important"), i(), new ResizeObserver((a) => {
        for (const n of a) {
          const o = n?.devicePixelContentBoxSize?.[0];
          if (o) {
            const l = this.#e;
            this.#e = [Math.max(o.inlineSize || this.width, 1), Math.max(o.blockSize || this.height, 1)], this.#a = G(), (l?.[0] != this.#e[0] || l?.[1] != this.#e[1]) && this.#i(this.#r);
          }
        }
      }).observe(this, { box: "device-pixel-content-box" }), this.#n(this.#t = this.dataset.src || this.#t), this.#a = G(), this.image && this.#i(this.#r || this.#t);
    });
  }
  async $useImageAsSource(t, r) {
    r ||= this.#t;
    const i = t instanceof ImageBitmap ? t : await oo(t).catch(console.warn.bind(console));
    return i && r == this.#t && (this.image = i, this.#i(r)), t;
  }
  $renderPass(t) {
    const r = this, i = this.ctx, a = this.image;
    if (a && i && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const n = this.#a % 2 || 0, o = ye(a) <= Me(a) ? 1 : 0, l = Math.max(r[["height", "width"][n]] / (o ? Me(a) : ye(a)), r[["width", "height"][n]] / (o ? ye(a) : Me(a)));
      i.save(), i.clearRect(0, 0, r.width, r.height), no(i, a, l, o, this.#a), i.drawImage(a, 0, 0, a.width * l, a.height * l), i.restore();
    }
  }
  #n(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || C.has(r) ? Promise.resolve() : r.startsWith("data:") && !/^data:image\//i.test(r) ? (C.add(r), Promise.resolve()) : Un(r).then((i) => i && r === this.#t ? this.$useImageAsSource(i, r)?.catch?.(() => {
      C.add(r);
    }) : fetch(r, {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (a) => {
      if (!a.ok) {
        C.add(r);
        return;
      }
      const n = await a.blob();
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
    this.image && r && (t == this.#t || !t) && Sr?.shedule?.(lo(this.$renderPass, this));
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
  #r = 0;
  #a = "";
  #n = "";
  #i = [1, 1];
  ctx = null;
  image = null;
};
try {
  customElements.define("ui-canvas", Ct, { extends: "canvas" });
} catch {
}
export {
  Ct as UICanvas,
  la as USER_WALLPAPER_CACHE,
  Ft as USER_WALLPAPER_PATH,
  Tt as WALLPAPER_IDB_MARKER,
  _n as WALLPAPER_PRIMARY_STORAGE_KEY,
  zn as WALLPAPER_THEME_SRC_STORAGE_KEY,
  Pn as WALLPAPER_THEME_STORAGE_KEY,
  Te as applyThemeFromWallpaper,
  Dn as applyWallpaperPaperFromLuma,
  St as applyWallpaperPaperTokens,
  be as applyWallpaperThemeSeeds,
  Tr as bindCache,
  ge as blobImageMap,
  el as callByFrame,
  no as cover,
  oo as createImageBitmapCache,
  ro as delayed,
  Ln as deriveWallpaperPaperTokensFromLuma,
  uo as electronAPI,
  C as failedWallpaperSrc,
  kn as getDominantColors,
  Uo as getWallpaperStoragePointer,
  Vo as initializeAppCanvasLayer,
  Se as loadCachedWallpaperTheme,
  vo as qualityMode,
  qn as rankWallpaperSeeds,
  Qo as refreshAppWallpaperPaint,
  se as registerColorProperty,
  va as resolveAppWallpaperUrl,
  jn as restoreWallpaperThemeCache,
  to as setAppWallpaper,
  eo as setAppWallpaperFromBlob,
  Sr as sheduler,
  Qn as syncAppWallpaperOrient,
  zr as syncCanvasOrient,
  na as themeHosts,
  Kn as warmAppWallpaper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFEgfSBmcm9tIFwiQGZlc3QtbGliL2x1cmVcIjtcbmltcG9ydCB7IHNldFN0eWxlUHJvcGVydHkgfSBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBtYWtlUkFGQ3ljbGUsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCB3aGVuQW55U2NyZWVuQ2hhbmdlcyB9IGZyb20gXCJAZmVzdC1saWIvZG9tXCI7XG5cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0NvbmZpZy50c1xudmFyIGVsZWN0cm9uQVBJID0gXCJlbGVjdHJvbkJyaWRnZVwiO1xudmFyIHF1YWxpdHlNb2RlID0geyBcImZhc3RcIjoge1xuXHRkaXZpc29yOiA0LFxuXHRmaWx0ZXI6IFwiYmx1cig0cHgpXCIsXG5cdHNhbXBsaW5nOiAxMjhcbn0gfTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlTnVtYmVyLmpzXG52YXIgcGFyc2VOdW1iZXIgPSAoY29sb3IsIGxlbikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcIm51bWJlclwiKSByZXR1cm47XG5cdGlmIChsZW4gPT09IDMpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRiOiAoY29sb3IgJiAxNSB8IGNvbG9yIDw8IDQgJiAyNDApIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDQpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMTIgJiAxNSB8IGNvbG9yID4+IDggJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA4ICYgMTUgfCBjb2xvciA+PiA0ICYgMjQwKSAvIDI1NSxcblx0XHRiOiAoY29sb3IgPj4gNCAmIDE1IHwgY29sb3IgJiAyNDApIC8gMjU1LFxuXHRcdGFscGhhOiAoY29sb3IgJiAxNSB8IGNvbG9yIDw8IDQgJiAyNDApIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDYpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRiOiAoY29sb3IgJiAyNTUpIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDgpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMjQgJiAyNTUpIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxuXHRcdGFscGhhOiAoY29sb3IgJiAyNTUpIC8gMjU1XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb2xvcnMvbmFtZWQuanNcbnZhciBuYW1lZCA9IHtcblx0YWxpY2VibHVlOiAxNTc5MjM4Myxcblx0YW50aXF1ZXdoaXRlOiAxNjQ0NDM3NSxcblx0YXF1YTogNjU1MzUsXG5cdGFxdWFtYXJpbmU6IDgzODg1NjQsXG5cdGF6dXJlOiAxNTc5NDE3NSxcblx0YmVpZ2U6IDE2MTE5MjYwLFxuXHRiaXNxdWU6IDE2NzcwMjQ0LFxuXHRibGFjazogMCxcblx0YmxhbmNoZWRhbG1vbmQ6IDE2NzcyMDQ1LFxuXHRibHVlOiAyNTUsXG5cdGJsdWV2aW9sZXQ6IDkwNTUyMDIsXG5cdGJyb3duOiAxMDgyNDIzNCxcblx0YnVybHl3b29kOiAxNDU5NjIzMSxcblx0Y2FkZXRibHVlOiA2MjY2NTI4LFxuXHRjaGFydHJldXNlOiA4Mzg4MzUyLFxuXHRjaG9jb2xhdGU6IDEzNzg5NDcwLFxuXHRjb3JhbDogMTY3NDQyNzIsXG5cdGNvcm5mbG93ZXJibHVlOiA2NTkxOTgxLFxuXHRjb3Juc2lsazogMTY3NzUzODgsXG5cdGNyaW1zb246IDE0NDIzMTAwLFxuXHRjeWFuOiA2NTUzNSxcblx0ZGFya2JsdWU6IDEzOSxcblx0ZGFya2N5YW46IDM1NzIzLFxuXHRkYXJrZ29sZGVucm9kOiAxMjA5MjkzOSxcblx0ZGFya2dyYXk6IDExMTE5MDE3LFxuXHRkYXJrZ3JlZW46IDI1NjAwLFxuXHRkYXJrZ3JleTogMTExMTkwMTcsXG5cdGRhcmtraGFraTogMTI0MzMyNTksXG5cdGRhcmttYWdlbnRhOiA5MTA5NjQzLFxuXHRkYXJrb2xpdmVncmVlbjogNTU5Nzk5OSxcblx0ZGFya29yYW5nZTogMTY3NDc1MjAsXG5cdGRhcmtvcmNoaWQ6IDEwMDQwMDEyLFxuXHRkYXJrcmVkOiA5MTA5NTA0LFxuXHRkYXJrc2FsbW9uOiAxNTMwODQxMCxcblx0ZGFya3NlYWdyZWVuOiA5NDE5OTE5LFxuXHRkYXJrc2xhdGVibHVlOiA0NzM0MzQ3LFxuXHRkYXJrc2xhdGVncmF5OiAzMTAwNDk1LFxuXHRkYXJrc2xhdGVncmV5OiAzMTAwNDk1LFxuXHRkYXJrdHVycXVvaXNlOiA1Mjk0NSxcblx0ZGFya3Zpb2xldDogOTY5OTUzOSxcblx0ZGVlcHBpbms6IDE2NzE2OTQ3LFxuXHRkZWVwc2t5Ymx1ZTogNDkxNTEsXG5cdGRpbWdyYXk6IDY5MDgyNjUsXG5cdGRpbWdyZXk6IDY5MDgyNjUsXG5cdGRvZGdlcmJsdWU6IDIwMDMxOTksXG5cdGZpcmVicmljazogMTE2NzQxNDYsXG5cdGZsb3JhbHdoaXRlOiAxNjc3NTkyMCxcblx0Zm9yZXN0Z3JlZW46IDIyNjM4NDIsXG5cdGZ1Y2hzaWE6IDE2NzExOTM1LFxuXHRnYWluc2Jvcm86IDE0NDc0NDYwLFxuXHRnaG9zdHdoaXRlOiAxNjMxNjY3MSxcblx0Z29sZDogMTY3NjY3MjAsXG5cdGdvbGRlbnJvZDogMTQzMjkxMjAsXG5cdGdyYXk6IDg0MjE1MDQsXG5cdGdyZWVuOiAzMjc2OCxcblx0Z3JlZW55ZWxsb3c6IDExNDAzMDU1LFxuXHRncmV5OiA4NDIxNTA0LFxuXHRob25leWRldzogMTU3OTQxNjAsXG5cdGhvdHBpbms6IDE2NzM4NzQwLFxuXHRpbmRpYW5yZWQ6IDEzNDU4NTI0LFxuXHRpbmRpZ286IDQ5MTUzMzAsXG5cdGl2b3J5OiAxNjc3NzIwMCxcblx0a2hha2k6IDE1Nzg3NjYwLFxuXHRsYXZlbmRlcjogMTUxMzI0MTAsXG5cdGxhdmVuZGVyYmx1c2g6IDE2NzczMzY1LFxuXHRsYXduZ3JlZW46IDgxOTA5NzYsXG5cdGxlbW9uY2hpZmZvbjogMTY3NzU4ODUsXG5cdGxpZ2h0Ymx1ZTogMTEzOTMyNTQsXG5cdGxpZ2h0Y29yYWw6IDE1NzYxNTM2LFxuXHRsaWdodGN5YW46IDE0NzQ1NTk5LFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogMTY0NDgyMTAsXG5cdGxpZ2h0Z3JheTogMTM4ODIzMjMsXG5cdGxpZ2h0Z3JlZW46IDk0OTgyNTYsXG5cdGxpZ2h0Z3JleTogMTM4ODIzMjMsXG5cdGxpZ2h0cGluazogMTY3NTg0NjUsXG5cdGxpZ2h0c2FsbW9uOiAxNjc1Mjc2Mixcblx0bGlnaHRzZWFncmVlbjogMjE0Mjg5MCxcblx0bGlnaHRza3libHVlOiA4OTAwMzQ2LFxuXHRsaWdodHNsYXRlZ3JheTogNzgzMzc1Myxcblx0bGlnaHRzbGF0ZWdyZXk6IDc4MzM3NTMsXG5cdGxpZ2h0c3RlZWxibHVlOiAxMTU4NDczNCxcblx0bGlnaHR5ZWxsb3c6IDE2Nzc3MTg0LFxuXHRsaW1lOiA2NTI4MCxcblx0bGltZWdyZWVuOiAzMzI5MzMwLFxuXHRsaW5lbjogMTY0NDU2NzAsXG5cdG1hZ2VudGE6IDE2NzExOTM1LFxuXHRtYXJvb246IDgzODg2MDgsXG5cdG1lZGl1bWFxdWFtYXJpbmU6IDY3MzczMjIsXG5cdG1lZGl1bWJsdWU6IDIwNSxcblx0bWVkaXVtb3JjaGlkOiAxMjIxMTY2Nyxcblx0bWVkaXVtcHVycGxlOiA5NjYyNjgzLFxuXHRtZWRpdW1zZWFncmVlbjogMzk3ODA5Nyxcblx0bWVkaXVtc2xhdGVibHVlOiA4MDg3NzkwLFxuXHRtZWRpdW1zcHJpbmdncmVlbjogNjQxNTQsXG5cdG1lZGl1bXR1cnF1b2lzZTogNDc3MjMwMCxcblx0bWVkaXVtdmlvbGV0cmVkOiAxMzA0NzE3Myxcblx0bWlkbmlnaHRibHVlOiAxNjQ0OTEyLFxuXHRtaW50Y3JlYW06IDE2MTIxODUwLFxuXHRtaXN0eXJvc2U6IDE2NzcwMjczLFxuXHRtb2NjYXNpbjogMTY3NzAyMjksXG5cdG5hdmFqb3doaXRlOiAxNjc2ODY4NSxcblx0bmF2eTogMTI4LFxuXHRvbGRsYWNlOiAxNjY0MzU1OCxcblx0b2xpdmU6IDg0MjEzNzYsXG5cdG9saXZlZHJhYjogNzA0ODczOSxcblx0b3JhbmdlOiAxNjc1MzkyMCxcblx0b3JhbmdlcmVkOiAxNjcyOTM0NCxcblx0b3JjaGlkOiAxNDMxNTczNCxcblx0cGFsZWdvbGRlbnJvZDogMTU2NTcxMzAsXG5cdHBhbGVncmVlbjogMTAwMjU4ODAsXG5cdHBhbGV0dXJxdW9pc2U6IDExNTI5OTY2LFxuXHRwYWxldmlvbGV0cmVkOiAxNDM4MTIwMyxcblx0cGFwYXlhd2hpcDogMTY3NzMwNzcsXG5cdHBlYWNocHVmZjogMTY3Njc2NzMsXG5cdHBlcnU6IDEzNDY4OTkxLFxuXHRwaW5rOiAxNjc2MTAzNSxcblx0cGx1bTogMTQ1MjQ2MzcsXG5cdHBvd2RlcmJsdWU6IDExNTkxOTEwLFxuXHRwdXJwbGU6IDgzODg3MzYsXG5cdHJlYmVjY2FwdXJwbGU6IDY2OTc4ODEsXG5cdHJlZDogMTY3MTE2ODAsXG5cdHJvc3licm93bjogMTIzNTc1MTksXG5cdHJveWFsYmx1ZTogNDI4Njk0NSxcblx0c2FkZGxlYnJvd246IDkxMjcxODcsXG5cdHNhbG1vbjogMTY0MTY4ODIsXG5cdHNhbmR5YnJvd246IDE2MDMyODY0LFxuXHRzZWFncmVlbjogMzA1MDMyNyxcblx0c2Vhc2hlbGw6IDE2Nzc0NjM4LFxuXHRzaWVubmE6IDEwNTA2Nzk3LFxuXHRzaWx2ZXI6IDEyNjMyMjU2LFxuXHRza3libHVlOiA4OTAwMzMxLFxuXHRzbGF0ZWJsdWU6IDY5NzAwNjEsXG5cdHNsYXRlZ3JheTogNzM3Mjk0NCxcblx0c2xhdGVncmV5OiA3MzcyOTQ0LFxuXHRzbm93OiAxNjc3NTkzMCxcblx0c3ByaW5nZ3JlZW46IDY1NDA3LFxuXHRzdGVlbGJsdWU6IDQ2MjA5ODAsXG5cdHRhbjogMTM4MDg3ODAsXG5cdHRlYWw6IDMyODk2LFxuXHR0aGlzdGxlOiAxNDIwNDg4OCxcblx0dG9tYXRvOiAxNjczNzA5NSxcblx0dHVycXVvaXNlOiA0MjUxODU2LFxuXHR2aW9sZXQ6IDE1NjMxMDg2LFxuXHR3aGVhdDogMTYxMTMzMzEsXG5cdHdoaXRlOiAxNjc3NzIxNSxcblx0d2hpdGVzbW9rZTogMTYxMTkyODUsXG5cdHllbGxvdzogMTY3NzY5NjAsXG5cdHllbGxvd2dyZWVuOiAxMDE0NTA3NFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlTmFtZWQuanNcbnZhciBwYXJzZU5hbWVkID0gKGNvbG9yKSA9PiB7XG5cdHJldHVybiBwYXJzZU51bWJlcihuYW1lZFtjb2xvci50b0xvd2VyQ2FzZSgpXSwgNik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VIZXguanNcbnZhciBoZXggPSAvXiM/KFswLTlhLWZdezh9fFswLTlhLWZdezZ9fFswLTlhLWZdezR9fFswLTlhLWZdezN9KSQvaTtcbnZhciBwYXJzZUhleCA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2g7XG5cdHJldHVybiAobWF0Y2ggPSBjb2xvci5tYXRjaChoZXgpKSA/IHBhcnNlTnVtYmVyKHBhcnNlSW50KG1hdGNoWzFdLCAxNiksIG1hdGNoWzFdLmxlbmd0aCkgOiB2b2lkIDA7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL3JlZ2V4LmpzXG52YXIgbnVtJDEgPSBcIihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVwiO1xudmFyIG51bV9ub25lID0gYCg/OiR7bnVtJDF9fG5vbmUpYDtcbnZhciBwZXIgPSBgJHtudW0kMX0lYDtcbnZhciBwZXJfbm9uZSA9IGAoPzoke251bSQxfSV8bm9uZSlgO1xudmFyIG51bV9wZXIgPSBgKD86JHtudW0kMX0lfCR7bnVtJDF9KWA7XG52YXIgbnVtX3Blcl9ub25lID0gYCg/OiR7bnVtJDF9JXwke251bSQxfXxub25lKWA7XG52YXIgaHVlJDEgPSBgKD86JHtudW0kMX0oZGVnfGdyYWR8cmFkfHR1cm4pfCR7bnVtJDF9KWA7XG52YXIgaHVlX25vbmUgPSBgKD86JHtudW0kMX0oZGVnfGdyYWR8cmFkfHR1cm4pfCR7bnVtJDF9fG5vbmUpYDtcbnZhciBjID0gYFxcXFxzKixcXFxccypgO1xudmFyIHJ4X251bV9wZXJfbm9uZSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBudW1fcGVyX25vbmUgKyBcIiRcIik7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYkxlZ2FjeS5qc1xudmFyIHJnYl9udW1fb2xkID0gbmV3IFJlZ0V4cChgXnJnYmE/XFxcXChcXFxccyoke251bSQxfSR7Y30ke251bSQxfSR7Y30ke251bSQxfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciByZ2JfcGVyX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtwZXJ9JHtjfSR7cGVyfSR7Y30ke3Blcn1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcGFyc2VSZ2JMZWdhY3kgPSAoY29sb3IpID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRsZXQgbWF0Y2g7XG5cdGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9udW1fb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMjU1O1xuXHR9IGVsc2UgaWYgKG1hdGNoID0gY29sb3IubWF0Y2gocmdiX3Blcl9vbGQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdICE9PSB2b2lkIDApIHJlcy5yID0gbWF0Y2hbMV0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5nID0gbWF0Y2hbMl0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5iID0gbWF0Y2hbM10gLyAxMDA7XG5cdH0gZWxzZSByZXR1cm47XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs0XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbNV0pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL19wcmVwYXJlLmpzXG52YXIgcHJlcGFyZSA9IChjb2xvciwgbW9kZSkgPT4gY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR5cGVvZiBjb2xvciAhPT0gXCJvYmplY3RcIiA/IHBhcnNlKGNvbG9yKSA6IGNvbG9yLm1vZGUgIT09IHZvaWQgMCA/IGNvbG9yIDogbW9kZSA/IHtcblx0Li4uY29sb3IsXG5cdG1vZGVcbn0gOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnZlcnRlci5qc1xudmFyIGNvbnZlcnRlciA9ICh0YXJnZXRfbW9kZSA9IFwicmdiXCIpID0+IChjb2xvcikgPT4gKGNvbG9yID0gcHJlcGFyZShjb2xvciwgdGFyZ2V0X21vZGUpKSAhPT0gdm9pZCAwID8gY29sb3IubW9kZSA9PT0gdGFyZ2V0X21vZGUgPyBjb2xvciA6IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdID8gY29udmVydGVyc1tjb2xvci5tb2RlXVt0YXJnZXRfbW9kZV0oY29sb3IpIDogdGFyZ2V0X21vZGUgPT09IFwicmdiXCIgPyBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdLnJnYihjb2xvcikgOiBjb252ZXJ0ZXJzLnJnYlt0YXJnZXRfbW9kZV0oY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpKSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbW9kZXMuanNcbnZhciBjb252ZXJ0ZXJzID0ge307XG52YXIgbW9kZXMgPSB7fTtcbnZhciBwYXJzZXJzID0gW107XG52YXIgY29sb3JQcm9maWxlcyA9IHt9O1xudmFyIGlkZW50aXR5ID0gKHYpID0+IHY7XG52YXIgdXNlTW9kZSA9IChkZWZpbml0aW9uKSA9PiB7XG5cdGNvbnZlcnRlcnNbZGVmaW5pdGlvbi5tb2RlXSA9IHtcblx0XHQuLi5jb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0sXG5cdFx0Li4uZGVmaW5pdGlvbi50b01vZGVcblx0fTtcblx0T2JqZWN0LmtleXMoZGVmaW5pdGlvbi5mcm9tTW9kZSB8fCB7fSkuZm9yRWFjaCgoaykgPT4ge1xuXHRcdGlmICghY29udmVydGVyc1trXSkgY29udmVydGVyc1trXSA9IHt9O1xuXHRcdGNvbnZlcnRlcnNba11bZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb24uZnJvbU1vZGVba107XG5cdH0pO1xuXHRpZiAoIWRlZmluaXRpb24ucmFuZ2VzKSBkZWZpbml0aW9uLnJhbmdlcyA9IHt9O1xuXHRpZiAoIWRlZmluaXRpb24uZGlmZmVyZW5jZSkgZGVmaW5pdGlvbi5kaWZmZXJlbmNlID0ge307XG5cdGRlZmluaXRpb24uY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuXHRcdGlmIChkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9PT0gdm9pZCAwKSBkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9IFswLCAxXTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0pIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBpbnRlcnBvbGF0b3IgZm9yOiAke2NoYW5uZWx9YCk7XG5cdFx0aWYgKHR5cGVvZiBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID09PSBcImZ1bmN0aW9uXCIpIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gPSB7IHVzZTogZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSB9O1xuXHRcdGlmICghZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCkgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCA9IGlkZW50aXR5O1xuXHR9KTtcblx0bW9kZXNbZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb247XG5cdChkZWZpbml0aW9uLnBhcnNlIHx8IFtdKS5mb3JFYWNoKChwYXJzZXIpID0+IHtcblx0XHR1c2VQYXJzZXIocGFyc2VyLCBkZWZpbml0aW9uLm1vZGUpO1xuXHR9KTtcblx0cmV0dXJuIGNvbnZlcnRlcihkZWZpbml0aW9uLm1vZGUpO1xufTtcbnZhciBnZXRNb2RlID0gKG1vZGUpID0+IG1vZGVzW21vZGVdO1xudmFyIHVzZVBhcnNlciA9IChwYXJzZXIsIG1vZGUpID0+IHtcblx0aWYgKHR5cGVvZiBwYXJzZXIgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoIW1vZGUpIHRocm93IG5ldyBFcnJvcihgJ21vZGUnIHJlcXVpcmVkIHdoZW4gJ3BhcnNlcicgaXMgYSBzdHJpbmdgKTtcblx0XHRjb2xvclByb2ZpbGVzW3BhcnNlcl0gPSBtb2RlO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJzZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGlmIChwYXJzZXJzLmluZGV4T2YocGFyc2VyKSA8IDApIHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wYXJzZS5qc1xudmFyIElkZW50U3RhcnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18W2EtekEtWl9dLztcbnZhciBJZGVudENvZGVQb2ludCA9IC9bXlxceDAwLVxceDdGXXxbLVxcd10vO1xudmFyIFRvayA9IHtcblx0RnVuY3Rpb246IFwiZnVuY3Rpb25cIixcblx0SWRlbnQ6IFwiaWRlbnRcIixcblx0TnVtYmVyOiBcIm51bWJlclwiLFxuXHRQZXJjZW50YWdlOiBcInBlcmNlbnRhZ2VcIixcblx0UGFyZW5DbG9zZTogXCIpXCIsXG5cdE5vbmU6IFwibm9uZVwiLFxuXHRIdWU6IFwiaHVlXCIsXG5cdEFscGhhOiBcImFscGhhXCJcbn07XG52YXIgX2kgPSAwO1xuZnVuY3Rpb24gaXNfbnVtKGNoYXJzKSB7XG5cdGxldCBjaCA9IGNoYXJzW19pXTtcblx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdGlmIChjaCA9PT0gXCItXCIgfHwgY2ggPT09IFwiK1wiKSByZXR1cm4gL1xcZC8udGVzdChjaDEpIHx8IGNoMSA9PT0gXCIuXCIgJiYgL1xcZC8udGVzdChjaGFyc1tfaSArIDJdKTtcblx0aWYgKGNoID09PSBcIi5cIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKTtcblx0cmV0dXJuIC9cXGQvLnRlc3QoY2gpO1xufVxuZnVuY3Rpb24gaXNfaWRlbnQoY2hhcnMpIHtcblx0aWYgKF9pID49IGNoYXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdGlmIChjaGFycy5sZW5ndGggLSBfaSA8IDIpIHJldHVybiBmYWxzZTtcblx0XHRsZXQgY2gxID0gY2hhcnNbX2kgKyAxXTtcblx0XHRpZiAoY2gxID09PSBcIi1cIiB8fCBJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gxKSkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cbnZhciBodWVuaXRzID0ge1xuXHRkZWc6IDEsXG5cdHJhZDogMTgwIC8gTWF0aC5QSSxcblx0Z3JhZDogOSAvIDEwLFxuXHR0dXJuOiAzNjBcbn07XG5mdW5jdGlvbiBudW0oY2hhcnMpIHtcblx0bGV0IHZhbHVlID0gXCJcIjtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCItXCIgfHwgY2hhcnNbX2ldID09PSBcIitcIikgdmFsdWUgKz0gY2hhcnNbX2krK107XG5cdHZhbHVlICs9IGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCJlXCIgfHwgY2hhcnNbX2ldID09PSBcIkVcIikge1xuXHRcdGlmICgoY2hhcnNbX2kgKyAxXSA9PT0gXCItXCIgfHwgY2hhcnNbX2kgKyAxXSA9PT0gXCIrXCIpICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgY2hhcnNbX2krK10gKyBkaWdpdHMoY2hhcnMpO1xuXHRcdGVsc2UgaWYgKC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0fVxuXHRpZiAoaXNfaWRlbnQoY2hhcnMpKSB7XG5cdFx0bGV0IGlkID0gaWRlbnQoY2hhcnMpO1xuXHRcdGlmIChpZCA9PT0gXCJkZWdcIiB8fCBpZCA9PT0gXCJyYWRcIiB8fCBpZCA9PT0gXCJ0dXJuXCIgfHwgaWQgPT09IFwiZ3JhZFwiKSByZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkh1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSAqIGh1ZW5pdHNbaWRdXG5cdFx0fTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNoYXJzW19pXSA9PT0gXCIlXCIpIHtcblx0XHRfaSsrO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBUb2suUGVyY2VudGFnZSxcblx0XHRcdHZhbHVlOiArdmFsdWVcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk51bWJlcixcblx0XHR2YWx1ZTogK3ZhbHVlXG5cdH07XG59XG5mdW5jdGlvbiBkaWdpdHMoY2hhcnMpIHtcblx0bGV0IHYgPSBcIlwiO1xuXHR3aGlsZSAoL1xcZC8udGVzdChjaGFyc1tfaV0pKSB2ICs9IGNoYXJzW19pKytdO1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGlkZW50KGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIElkZW50Q29kZVBvaW50LnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudGxpa2UoY2hhcnMpIHtcblx0bGV0IHYgPSBpZGVudChjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiKFwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkZ1bmN0aW9uLFxuXHRcdFx0dmFsdWU6IHZcblx0XHR9O1xuXHR9XG5cdGlmICh2ID09PSBcIm5vbmVcIikgcmV0dXJuIHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdHZhbHVlOiB2XG5cdH07XG59XG5mdW5jdGlvbiB0b2tlbml6ZShzdHIgPSBcIlwiKSB7XG5cdGxldCBjaGFycyA9IHN0ci50cmltKCk7XG5cdGxldCB0b2tlbnMgPSBbXTtcblx0bGV0IGNoO1xuXHRfaSA9IDA7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCkge1xuXHRcdGNoID0gY2hhcnNbX2krK107XG5cdFx0aWYgKGNoID09PSBcIlxcblwiIHx8IGNoID09PSBcIlx0XCIgfHwgY2ggPT09IFwiIFwiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLFwiKSByZXR1cm47XG5cdFx0aWYgKGNoID09PSBcIilcIikge1xuXHRcdFx0dG9rZW5zLnB1c2goeyB0eXBlOiBUb2suUGFyZW5DbG9zZSB9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiK1wiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLVwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdFx0XHRcdHZhbHVlOiBpZGVudChjaGFycylcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLlwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiL1wiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGxldCBhbHBoYTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdGFscGhhID0gbnVtKGNoYXJzKTtcblx0XHRcdFx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5IdWUpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWxwaGFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHRpZiAoaWRlbnQoY2hhcnMpID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IFRvay5BbHBoYSxcblx0XHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFRvay5Ob25lLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdm9pZCAwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKC9cXGQvLnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKElkZW50U3RhcnRDb2RlUG9pbnQudGVzdChjaCkpIHtcblx0XHRcdF9pLS07XG5cdFx0XHR0b2tlbnMucHVzaChpZGVudGxpa2UoY2hhcnMpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0cmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uIHx8IHRva2VuLnZhbHVlICE9PSBcImNvbG9yXCIpIHJldHVybjtcblx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAodG9rZW4udHlwZSAhPT0gVG9rLklkZW50KSByZXR1cm47XG5cdGNvbnN0IG1vZGUgPSBjb2xvclByb2ZpbGVzW3Rva2VuLnZhbHVlXTtcblx0aWYgKCFtb2RlKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZSB9O1xuXHRjb25zdCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgZmFsc2UpO1xuXHRpZiAoIWNvb3JkcykgcmV0dXJuO1xuXHRjb25zdCBjaGFubmVscyA9IGdldE1vZGUobW9kZSkuY2hhbm5lbHM7XG5cdGZvciAobGV0IGlpID0gMCwgYywgY2g7IGlpIDwgY2hhbm5lbHMubGVuZ3RoOyBpaSsrKSB7XG5cdFx0YyA9IGNvb3Jkc1tpaV07XG5cdFx0Y2ggPSBjaGFubmVsc1tpaV07XG5cdFx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRcdHJlc1tjaF0gPSBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAvIDEwMDtcblx0XHRcdGlmIChjaCA9PT0gXCJhbHBoYVwiKSByZXNbY2hdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmVzW2NoXSkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0Y29uc3QgY29vcmRzID0gW107XG5cdGxldCB0b2tlbjtcblx0d2hpbGUgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHR0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRvay5Ob25lIHx8IHRva2VuLnR5cGUgPT09IFRvay5OdW1iZXIgfHwgdG9rZW4udHlwZSA9PT0gVG9rLkFscGhhIHx8IHRva2VuLnR5cGUgPT09IFRvay5QZXJjZW50YWdlIHx8IGluY2x1ZGVIdWUgJiYgdG9rZW4udHlwZSA9PT0gVG9rLkh1ZSkge1xuXHRcdFx0Y29vcmRzLnB1c2godG9rZW4pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suUGFyZW5DbG9zZSkge1xuXHRcdFx0aWYgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPCAzIHx8IGNvb3Jkcy5sZW5ndGggPiA0KSByZXR1cm47XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSA0KSB7XG5cdFx0aWYgKGNvb3Jkc1szXS50eXBlICE9PSBUb2suQWxwaGEpIHJldHVybjtcblx0XHRjb29yZHNbM10gPSBjb29yZHNbM10udmFsdWU7XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPT09IDMpIGNvb3Jkcy5wdXNoKHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH0pO1xuXHRyZXR1cm4gY29vcmRzLmV2ZXJ5KChjKSA9PiBjLnR5cGUgIT09IFRvay5BbHBoYSkgPyBjb29yZHMgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0dG9rZW5zLl9pID0gMDtcblx0bGV0IHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKCF0b2tlbiB8fCB0b2tlbi50eXBlICE9PSBUb2suRnVuY3Rpb24pIHJldHVybjtcblx0bGV0IGNvb3JkcyA9IGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29vcmRzLnVuc2hpZnQodG9rZW4udmFsdWUpO1xuXHRyZXR1cm4gY29vcmRzO1xufVxudmFyIHBhcnNlID0gKGNvbG9yKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwic3RyaW5nXCIpIHJldHVybjtcblx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemUoY29sb3IpO1xuXHRjb25zdCBwYXJzZWQgPSB0b2tlbnMgPyBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIHRydWUpIDogdm9pZCAwO1xuXHRsZXQgcmVzdWx0ID0gdm9pZCAwO1xuXHRsZXQgaSA9IDA7XG5cdGxldCBsZW4gPSBwYXJzZXJzLmxlbmd0aDtcblx0d2hpbGUgKGkgPCBsZW4pIGlmICgocmVzdWx0ID0gcGFyc2Vyc1tpKytdKGNvbG9yLCBwYXJzZWQpKSAhPT0gdm9pZCAwKSByZXR1cm4gcmVzdWx0O1xuXHRyZXR1cm4gdG9rZW5zID8gcGFyc2VDb2xvclN5bnRheCh0b2tlbnMpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlUmdiLmpzXG5mdW5jdGlvbiBwYXJzZVJnYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJyZ2JcIiAmJiBwYXJzZWRbMF0gIT09IFwicmdiYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRjb25zdCBbLCByLCBnLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChyLnR5cGUgPT09IFRvay5IdWUgfHwgZy50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAoci50eXBlICE9PSBUb2suTm9uZSkgcmVzLnIgPSByLnR5cGUgPT09IFRvay5OdW1iZXIgPyByLnZhbHVlIC8gMjU1IDogci52YWx1ZSAvIDEwMDtcblx0aWYgKGcudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5nID0gZy50eXBlID09PSBUb2suTnVtYmVyID8gZy52YWx1ZSAvIDI1NSA6IGcudmFsdWUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgLyAyNTUgOiBiLnZhbHVlIC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVRyYW5zcGFyZW50LmpzXG52YXIgcGFyc2VUcmFuc3BhcmVudCA9IChjKSA9PiBjID09PSBcInRyYW5zcGFyZW50XCIgPyB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IDAsXG5cdGc6IDAsXG5cdGI6IDAsXG5cdGFscGhhOiAwXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9sZXJwLmpzXG52YXIgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgdCAqIChiIC0gYSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL3BpZWNld2lzZS5qc1xudmFyIGdldF9jbGFzc2VzID0gKGFycikgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRsZXQgYSA9IGFycltpXTtcblx0XHRsZXQgYiA9IGFycltpICsgMV07XG5cdFx0aWYgKGEgPT09IHZvaWQgMCAmJiBiID09PSB2b2lkIDApIGNsYXNzZXMucHVzaCh2b2lkIDApO1xuXHRcdGVsc2UgaWYgKGEgIT09IHZvaWQgMCAmJiBiICE9PSB2b2lkIDApIGNsYXNzZXMucHVzaChbYSwgYl0pO1xuXHRcdGVsc2UgY2xhc3Nlcy5wdXNoKGEgIT09IHZvaWQgMCA/IFthLCBhXSA6IFtiLCBiXSk7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xudmFyIGludGVycG9sYXRvclBpZWNld2lzZSA9IChpbnRlcnBvbGF0b3IpID0+IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBnZXRfY2xhc3NlcyhhcnIpO1xuXHRyZXR1cm4gKHQpID0+IHtcblx0XHRsZXQgY2xzID0gdCAqIGNsYXNzZXMubGVuZ3RoO1xuXHRcdGxldCBpZHggPSB0ID49IDEgPyBjbGFzc2VzLmxlbmd0aCAtIDEgOiBNYXRoLm1heChNYXRoLmZsb29yKGNscyksIDApO1xuXHRcdGxldCBwYWlyID0gY2xhc3Nlc1tpZHhdO1xuXHRcdHJldHVybiBwYWlyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnRlcnBvbGF0b3IocGFpclswXSwgcGFpclsxXSwgY2xzIC0gaWR4KTtcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL2xpbmVhci5qc1xudmFyIGludGVycG9sYXRvckxpbmVhciA9IGludGVycG9sYXRvclBpZWNld2lzZShsZXJwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvYWxwaGEuanNcbnZhciBmaXh1cEFscGhhID0gKGFycikgPT4ge1xuXHRsZXQgc29tZV9kZWZpbmVkID0gZmFsc2U7XG5cdGxldCByZXMgPSBhcnIubWFwKCh2KSA9PiB7XG5cdFx0aWYgKHYgIT09IHZvaWQgMCkge1xuXHRcdFx0c29tZV9kZWZpbmVkID0gdHJ1ZTtcblx0XHRcdHJldHVybiB2O1xuXHRcdH1cblx0XHRyZXR1cm4gMTtcblx0fSk7XG5cdHJldHVybiBzb21lX2RlZmluZWQgPyByZXMgOiBhcnI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjcgPSB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJyXCIsXG5cdFx0XCJnXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXG5cdFx0cGFyc2VSZ2IsXG5cdFx0cGFyc2VIZXgsXG5cdFx0cGFyc2VSZ2JMZWdhY3ksXG5cdFx0cGFyc2VOYW1lZCxcblx0XHRwYXJzZVRyYW5zcGFyZW50LFxuXHRcdFwic3JnYlwiXG5cdF0sXG5cdHNlcmlhbGl6ZTogXCJzcmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0cjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGdhbXV0OiB0cnVlLFxuXHR3aGl0ZToge1xuXHRcdHI6IDEsXG5cdFx0ZzogMSxcblx0XHRiOiAxXG5cdH0sXG5cdGJsYWNrOiB7XG5cdFx0cjogMCxcblx0XHRnOiAwLFxuXHRcdGI6IDBcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRBOThUb1h5ejY1LmpzXG52YXIgbGluZWFyaXplJDIgPSAodiA9IDApID0+IE1hdGgucG93KE1hdGguYWJzKHYpLCA1NjMgLyAyNTYpICogTWF0aC5zaWduKHYpO1xudmFyIGNvbnZlcnRBOThUb1h5ejY1ID0gKGE5OCkgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQyKGE5OC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUkMihhOTguZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDIoYTk4LmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNTc2NjY5MDQyOTEwMTMwNSAqIHIgKyAuMTg1NTU4MjM3OTA2NTQ2MyAqIGcgKyAuMTg4MjI4NjQ2MjM0OTk0NyAqIGIsXG5cdFx0eTogLjI5NzM0NDk3NTI1MDUzNiAqIHIgKyAuNjI3MzYzNTY2MjU1NDY2MSAqIGcgKyAuMDc1MjkxNDU4NDkzOTk3OSAqIGIsXG5cdFx0ejogLjAyNzAzMTM2MTM4NjQxMjMgKiByICsgLjA3MDY4ODg1MjUzNTgyNzIgKiBnICsgLjk5MTMzNzUzNjgzNzYzODYgKiBiXG5cdH07XG5cdGlmIChhOTguYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYTk4LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRYeXo2NVRvQTk4LmpzXG52YXIgZ2FtbWEkMiA9ICh2KSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgMjU2IC8gNTYzKSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0WHl6NjVUb0E5OCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImE5OFwiLFxuXHRcdHI6IGdhbW1hJDIoeCAqIDIuMDQxNTg3OTAzODEwNzQ2NSAtIHkgKiAuNTY1MDA2OTc0Mjc4ODU5NyAtIC4zNDQ3MzEzNTA3NzgzMjk3ICogeiksXG5cdFx0ZzogZ2FtbWEkMih4ICogLS45NjkyNDM2MzYyODA4Nzk4ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNiArIC4wNDE1NTUwNTc0MDcxNzU2ICogeiksXG5cdFx0YjogZ2FtbWEkMih4ICogLjAxMzQ0NDI4MDYzMjAzMTIgLSB5ICogLjExODM2MjM5MjIzMTAxODQgKyAxLjAxNTE3NDk5NDM5MTIwNTggKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRSZ2JUb0xyZ2IuanNcbnZhciBmbiQzID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzIDw9IC4wNDA0NSkgcmV0dXJuIGMgLyAxMi45Mjtcblx0cmV0dXJuIChNYXRoLnNpZ24oYykgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbn07XG52YXIgY29udmVydFJnYlRvTHJnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiBmbiQzKHIpLFxuXHRcdGc6IGZuJDMoZyksXG5cdFx0YjogZm4kMyhiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0UmdiVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDEyMzkwNzk5MjY1OTU5MyAqIHIgKyAuMzU3NTg0MzM5MzgzODc4ICogZyArIC4xODA0ODA3ODg0MDE4MzQzICogYixcblx0XHR5OiAuMjEyNjM5MDA1ODcxNTEwMiAqIHIgKyAuNzE1MTY4Njc4NzY3NzU2ICogZyArIC4wNzIxOTIzMTUzNjA3MzM3ICogYixcblx0XHR6OiAuMDE5MzMwODE4NzE1NTkxOCAqIHIgKyAuMTE5MTk0Nzc5Nzk0NjI2ICogZyArIC45NTA1MzIxNTIyNDk2NjA3ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRMcmdiVG9SZ2IuanNcbnZhciBmbiQyID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzID4gLjAwMzEzMDgpIHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogKDEuMDU1ICogTWF0aC5wb3coYWJzLCAxIC8gMi40KSAtIC4wNTUpO1xuXHRyZXR1cm4gYyAqIDEyLjkyO1xufTtcbnZhciBjb252ZXJ0THJnYlRvUmdiID0gKHsgciwgZywgYiwgYWxwaGEgfSwgbW9kZSA9IFwicmdiXCIpID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdHI6IGZuJDIociksXG5cdFx0ZzogZm4kMihnKSxcblx0XHRiOiBmbiQyKGIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnZlcnRYeXo2NVRvUmdiLmpzXG52YXIgY29udmVydFh5ejY1VG9SZ2IgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiB4ICogMy4yNDA5Njk5NDE5MDQ1MjI2IC0geSAqIDEuNTM3MzgzMTc3NTcwMDk0IC0gLjQ5ODYxMDc2MDI5MzAwMzQgKiB6LFxuXHRcdGc6IHggKiAtLjk2OTI0MzYzNjI4MDg3OTYgKyB5ICogMS44NzU5Njc1MDE1MDc3MjA0ICsgLjA0MTU1NTA1NzQwNzE3NTYgKiB6LFxuXHRcdGI6IHggKiAuMDU1NjMwMDc5Njk2OTkzNiAtIHkgKiAuMjAzOTc2OTU4ODg4OTc2NSArIDEuMDU2OTcxNTE0MjQyODc4NCAqIHpcblx0fSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJhOThcIixcblx0cGFyc2U6IFtcImE5OC1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJhOTgtcmdiXCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvQTk4KGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvQTk4XG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0QTk4VG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0QTk4VG9YeXo2NVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL25vcm1hbGl6ZUh1ZS5qc1xudmFyIG5vcm1hbGl6ZUh1ZSA9IChodWUpID0+IChodWUgPSBodWUgJSAzNjApIDwgMCA/IGh1ZSArIDM2MCA6IGh1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvaHVlLmpzXG52YXIgaHVlID0gKGh1ZXMsIGZuKSA9PiB7XG5cdHJldHVybiBodWVzLm1hcCgoaHVlLCBpZHgsIGFycikgPT4ge1xuXHRcdGlmIChodWUgPT09IHZvaWQgMCkgcmV0dXJuIGh1ZTtcblx0XHRsZXQgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUh1ZShodWUpO1xuXHRcdGlmIChpZHggPT09IDAgfHwgaHVlc1tpZHggLSAxXSA9PT0gdm9pZCAwKSByZXR1cm4gbm9ybWFsaXplZDtcblx0XHRyZXR1cm4gZm4obm9ybWFsaXplZCAtIG5vcm1hbGl6ZUh1ZShhcnJbaWR4IC0gMV0pKTtcblx0fSkucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcblx0XHRpZiAoIWFjYy5sZW5ndGggfHwgY3VyciA9PT0gdm9pZCAwIHx8IGFjY1thY2MubGVuZ3RoIC0gMV0gPT09IHZvaWQgMCkge1xuXHRcdFx0YWNjLnB1c2goY3Vycik7XG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH1cblx0XHRhY2MucHVzaChjdXJyICsgYWNjW2FjYy5sZW5ndGggLSAxXSk7XG5cdFx0cmV0dXJuIGFjYztcblx0fSwgW10pO1xufTtcbnZhciBmaXh1cEh1ZVNob3J0ZXIgPSAoYXJyKSA9PiBodWUoYXJyLCAoZCkgPT4gTWF0aC5hYnMoZCkgPD0gMTgwID8gZCA6IGQgLSAzNjAgKiBNYXRoLnNpZ24oZCkpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29uc3RhbnRzLmpzXG52YXIgTSA9IFtcblx0LS4xNDg2MSxcblx0MS43ODI3Nyxcblx0LS4yOTIyNyxcblx0LS45MDY0OSxcblx0MS45NzI5NCxcblx0MFxuXTtcbnZhciBkZWdUb1JhZCA9IE1hdGguUEkgLyAxODA7XG52YXIgcmFkVG9EZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydFJnYlRvQ3ViZWhlbGl4LmpzXG52YXIgREUgPSBNWzNdICogTVs0XTtcbnZhciBCRSA9IE1bMV0gKiBNWzRdO1xudmFyIEJDQUQgPSBNWzFdICogTVsyXSAtIE1bMF0gKiBNWzNdO1xudmFyIGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGwgPSAoQkNBRCAqIGIgKyByICogREUgLSBnICogQkUpIC8gKEJDQUQgKyBERSAtIEJFKTtcblx0bGV0IHggPSBiIC0gbDtcblx0bGV0IHkgPSAoTVs0XSAqIChnIC0gbCkgLSBNWzJdICogeCkgLyBNWzNdO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdFx0bCxcblx0XHRzOiBsID09PSAwIHx8IGwgPT09IDEgPyB2b2lkIDAgOiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgLyAoTVs0XSAqIGwgKiAoMSAtIGwpKVxuXHR9O1xuXHRpZiAocmVzLnMpIHJlcy5oID0gTWF0aC5hdGFuMih5LCB4KSAqIHJhZFRvRGVnIC0gMTIwO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydEN1YmVoZWxpeFRvUmdiLmpzXG52YXIgY29udmVydEN1YmVoZWxpeFRvUmdiID0gKHsgaCwgcywgbCwgYWxwaGEgfSkgPT4ge1xuXHRsZXQgcmVzID0geyBtb2RlOiBcInJnYlwiIH07XG5cdGggPSAoaCA9PT0gdm9pZCAwID8gMCA6IGggKyAxMjApICogZGVnVG9SYWQ7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRsZXQgYW1wID0gcyA9PT0gdm9pZCAwID8gMCA6IHMgKiBsICogKDEgLSBsKTtcblx0bGV0IGNvc2ggPSBNYXRoLmNvcyhoKTtcblx0bGV0IHNpbmggPSBNYXRoLnNpbihoKTtcblx0cmVzLnIgPSBsICsgYW1wICogKE1bMF0gKiBjb3NoICsgTVsxXSAqIHNpbmgpO1xuXHRyZXMuZyA9IGwgKyBhbXAgKiAoTVsyXSAqIGNvc2ggKyBNWzNdICogc2luaCk7XG5cdHJlcy5iID0gbCArIGFtcCAqIChNWzRdICogY29zaCArIE1bNV0gKiBzaW5oKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGlmZmVyZW5jZS5qc1xudmFyIGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5zIHx8ICFzbXAucykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLnMgKiBzbXAucykgKiBkSDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZU5haXZlID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDApIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRpZiAoTWF0aC5hYnMoc21wX2ggLSBzdGRfaCkgPiAxODApIHJldHVybiBzdGRfaCAtIChzbXBfaCAtIDM2MCAqIE1hdGguc2lnbihzbXBfaCAtIHN0ZF9oKSk7XG5cdHJldHVybiBzbXBfaCAtIHN0ZF9oO1xufTtcbnZhciBkaWZmZXJlbmNlSHVlQ2hyb21hID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5jIHx8ICFzbXAuYykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLmMgKiBzbXAuYykgKiBkSDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2F2ZXJhZ2UuanNcbnZhciBhdmVyYWdlQW5nbGUgPSAodmFsKSA9PiB7XG5cdGxldCBzdW0gPSB2YWwucmVkdWNlKChzdW0sIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwgIT09IHZvaWQgMCkge1xuXHRcdFx0bGV0IHJhZCA9IHZhbCAqIE1hdGguUEkgLyAxODA7XG5cdFx0XHRzdW0uc2luICs9IE1hdGguc2luKHJhZCk7XG5cdFx0XHRzdW0uY29zICs9IE1hdGguY29zKHJhZCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdW07XG5cdH0sIHtcblx0XHRzaW46IDAsXG5cdFx0Y29zOiAwXG5cdH0pO1xuXHRsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHN1bS5zaW4sIHN1bS5jb3MpICogMTgwIC8gTWF0aC5QSTtcblx0cmV0dXJuIGFuZ2xlIDwgMCA/IDM2MCArIGFuZ2xlIDogYW5nbGU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjUgPSB7XG5cdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWN1YmVoZWxpeFwiXSxcblx0c2VyaWFsaXplOiBcIi0tY3ViZWhlbGl4XCIsXG5cdHJhbmdlczoge1xuXHRcdGg6IFswLCAzNjBdLFxuXHRcdHM6IFswLCA0LjYxNF0sXG5cdFx0bDogWzAsIDFdXG5cdH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvQ3ViZWhlbGl4IH0sXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRDdWJlaGVsaXhUb1JnYiB9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExhYlRvTGNoLmpzXG52YXIgY29udmVydExhYlRvTGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSwgbW9kZSA9IFwibGNoXCIpID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdGwsXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExjaFRvTGFiLmpzXG52YXIgY29udmVydExjaFRvTGFiID0gKHsgbCwgYywgaCwgYWxwaGEgfSwgbW9kZSA9IFwibGFiXCIpID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGE6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHRiOiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29uc3RhbnRzLmpzXG52YXIgayQyID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSQyID0gTWF0aC5wb3coNiwgMykgLyBNYXRoLnBvdygyOSwgMyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnN0YW50cy5qc1xudmFyIEQ1MCA9IHtcblx0WDogLjM0NTcgLyAuMzU4NSxcblx0WTogMSxcblx0WjogLjI5NTggLyAuMzU4NVxufTtcbnZhciBENjUgPSB7XG5cdFg6IC4zMTI3IC8gLjMyOSxcblx0WTogMSxcblx0WjogLjM1ODMgLyAuMzI5XG59O1xudmFyIGskMSA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1h5ejY1LmpzXG52YXIgZm4kMSA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUkMiA/IE1hdGgucG93KHYsIDMpIDogKDExNiAqIHYgLSAxNikgLyBrJDI7XG52YXIgY29udmVydExhYjY1VG9YeXo2NSA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiBmbiQxKGZ4KSAqIEQ2NS5YLFxuXHRcdHk6IGZuJDEoZnkpICogRDY1LlksXG5cdFx0ejogZm4kMShmeikgKiBENjUuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWI2NVRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydExhYjY1VG9YeXo2NShsYWIpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFh5ejY1VG9MYWI2NS5qc1xudmFyIGYkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlJDIgPyBNYXRoLmNicnQodmFsdWUpIDogKGskMiAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo2NVRvTGFiNjUgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYkMSh4IC8gRDY1LlgpO1xuXHRsZXQgZjEgPSBmJDEoeSAvIEQ2NS5ZKTtcblx0bGV0IGYyID0gZiQxKHogLyBENjUuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IDExNiAqIGYxIC0gMTYsXG5cdFx0YTogNTAwICogKGYwIC0gZjEpLFxuXHRcdGI6IDIwMCAqIChmMSAtIGYyKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0UmdiVG9MYWI2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYjY1ID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9MYWI2NShjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb25zdGFudHMuanNcbnZhciDOuCA9IDI2IC8gMTgwICogTWF0aC5QSTtcbnZhciBjb3POuCA9IE1hdGguY29zKM64KTtcbnZhciBzaW7OuCA9IE1hdGguc2luKM64KTtcbnZhciBmYWN0b3IgPSAxMDAgLyBNYXRoLmxvZygxMzkgLyAxMDApO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2NvbnZlcnREbGNoVG9MYWI2NS5qc1xudmFyIGNvbnZlcnREbGNoVG9MYWI2NSA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChjID09PSB2b2lkIDApIGMgPSAwO1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxhYjY1XCIsXG5cdFx0bDogKE1hdGguZXhwKGwgKiAxIC8gZmFjdG9yKSAtIDEpIC8gLjAwMzlcblx0fTtcblx0bGV0IEcgPSAoTWF0aC5leHAoLjA0MzUgKiBjICogMSAqIDEpIC0gMSkgLyAuMDc1O1xuXHRsZXQgZSA9IEcgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSAtIM64KTtcblx0bGV0IGYgPSBHICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdHJlcy5hID0gZSAqIGNvc864IC0gZiAvIC44MyAqIHNpbs64O1xuXHRyZXMuYiA9IGUgKiBzaW7OuCArIGYgLyAuODMgKiBjb3POuDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0TGFiNjVUb0RsY2guanNcbnZhciBjb252ZXJ0TGFiNjVUb0RsY2ggPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBlID0gYSAqIGNvc864ICsgYiAqIHNpbs64O1xuXHRsZXQgZiA9IC44MyAqIChiICogY29zzrggLSBhICogc2luzrgpO1xuXHRsZXQgRyA9IE1hdGguc3FydChlICogZSArIGYgKiBmKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImRsY2hcIixcblx0XHRsOiBmYWN0b3IgLyAxICogTWF0aC5sb2coMSArIC4wMDM5ICogbCksXG5cdFx0YzogTWF0aC5sb2coMSArIC4wNzUgKiBHKSAvICguMDQzNSAqIDEgKiAxKVxuXHR9O1xuXHRpZiAocmVzLmMpIHJlcy5oID0gbm9ybWFsaXplSHVlKChNYXRoLmF0YW4yKGYsIGUpICsgzrgpIC8gTWF0aC5QSSAqIDE4MCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnREbGFiVG9MYWI2NSA9IChjKSA9PiBjb252ZXJ0RGxjaFRvTGFiNjUoY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSk7XG52YXIgY29udmVydExhYjY1VG9EbGFiID0gKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjb252ZXJ0TGFiNjVUb0RsY2goYyksIFwiZGxhYlwiKTtcbnZhciBkZWZpbml0aW9uJDI0ID0ge1xuXHRtb2RlOiBcImRsYWJcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxhYlwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsYWJUb0xhYjY1LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGFiVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxhYihjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy00MC4wOSwgNDUuNTAxXSxcblx0XHRiOiBbLTQwLjQ2OSwgNDQuMzQ0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIzID0ge1xuXHRtb2RlOiBcImRsY2hcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxjaFwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsY2hUb0xhYjY1LFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJkbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGNoVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGNoLFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJkbGNoXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxjaChjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDUxLjQ4NF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydEhzaVRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNpVG9SZ2IoeyBoLCBzLCBpLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxIC0gcyksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRcdGI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzaS9jb252ZXJ0UmdiVG9Ic2kuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzaSh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNpXCIsXG5cdFx0czogciArIGcgKyBiID09PSAwID8gMCA6IDEgLSAzICogbSAvIChyICsgZyArIGIpLFxuXHRcdGk6IChyICsgZyArIGIpIC8gM1xuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjIgPSB7XG5cdG1vZGU6IFwiaHNpXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2lUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc2lcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzaVwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzaSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwiaVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0SHNsVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRIc2xUb1JnYih7IGgsIHMsIGwsIGFscGhhIH0pIHtcblx0aCA9IG5vcm1hbGl6ZUh1ZShoICE9PSB2b2lkIDAgPyBoIDogMCk7XG5cdGlmIChzID09PSB2b2lkIDApIHMgPSAwO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IG0xID0gbCArIHMgKiAobCA8IC41ID8gbCA6IDEgLSBsKTtcblx0bGV0IG0yID0gbTEgLSAobTEgLSBsKSAqIDIgKiBNYXRoLmFicyhoIC8gNjAgJSAyIC0gMSk7XG5cdGxldCByZXM7XG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoIC8gNjApKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiBtMSxcblx0XHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiAyICogbCAtIG0xLFxuXHRcdFx0XHRnOiBtMixcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogcmVzID0ge1xuXHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0fTtcblx0fVxuXHRyZXMubW9kZSA9IFwicmdiXCI7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL2NvbnZlcnRSZ2JUb0hzbC5qc1xuZnVuY3Rpb24gY29udmVydFJnYlRvSHNsKHsgciwgZywgYiwgYWxwaGEgfSkge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTSA9IE1hdGgubWF4KHIsIGcsIGIpLCBtID0gTWF0aC5taW4ociwgZywgYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJoc2xcIixcblx0XHRzOiBNID09PSBtID8gMCA6IChNIC0gbSkgLyAoMSAtIE1hdGguYWJzKE0gKyBtIC0gMSkpLFxuXHRcdGw6IC41ICogKE0gKyBtKVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL2h1ZS5qc1xudmFyIGh1ZVRvRGVnID0gKHZhbCwgdW5pdCkgPT4ge1xuXHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRjYXNlIFwiZGVnXCI6IHJldHVybiArdmFsO1xuXHRcdGNhc2UgXCJyYWRcIjogcmV0dXJuIHZhbCAvIE1hdGguUEkgKiAxODA7XG5cdFx0Y2FzZSBcImdyYWRcIjogcmV0dXJuIHZhbCAvIDEwICogOTtcblx0XHRjYXNlIFwidHVyblwiOiByZXR1cm4gdmFsICogMzYwO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvcGFyc2VIc2xMZWdhY3kuanNcbnZhciBoc2xfb2xkID0gbmV3IFJlZ0V4cChgXmhzbGE/XFxcXChcXFxccyoke2h1ZSQxfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlSHNsTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaCA9IGNvbG9yLm1hdGNoKGhzbF9vbGQpO1xuXHRpZiAoIW1hdGNoKSByZXR1cm47XG5cdGxldCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5oID0gK21hdGNoWzNdO1xuXHRlbHNlIGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwICYmIG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5oID0gaHVlVG9EZWcobWF0Y2hbMV0sIG1hdGNoWzJdKTtcblx0aWYgKG1hdGNoWzRdICE9PSB2b2lkIDApIHJlcy5zID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNF0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzVdICE9PSB2b2lkIDApIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNV0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzZdICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG1hdGNoWzZdIC8gMTAwKSk7XG5cdGVsc2UgaWYgKG1hdGNoWzddICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICttYXRjaFs3XSkpO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsLmpzXG5mdW5jdGlvbiBwYXJzZUhzbChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJoc2xcIiAmJiBwYXJzZWRbMF0gIT09IFwiaHNsYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJoc2xcIiB9O1xuXHRjb25zdCBbLCBoLCBzLCBsLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAocy50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLnMgPSBzLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5sID0gbC52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMSA9IHtcblx0bW9kZTogXCJoc2xcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEhzbFRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHNsIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtwYXJzZUhzbCwgcGFyc2VIc2xMZWdhY3ldLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgaHNsKCR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0gJHtjLnMgIT09IHZvaWQgMCA/IGMucyAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9ICR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydEhzdlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHN2VG9SZ2IoeyBoLCBzLCB2LCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYsXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzdi9jb252ZXJ0UmdiVG9Ic3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzdih7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHN2XCIsXG5cdFx0czogTSA9PT0gMCA/IDAgOiAxIC0gbSAvIE0sXG5cdFx0djogTVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjAgPSB7XG5cdG1vZGU6IFwiaHN2XCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc3ZUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzdlwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzdiB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwidlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0SHdiVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRId2JUb1JnYih7IGgsIHcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHcgPT09IHZvaWQgMCkgdyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRpZiAodyArIGIgPiAxKSB7XG5cdFx0bGV0IHMgPSB3ICsgYjtcblx0XHR3IC89IHM7XG5cdFx0YiAvPSBzO1xuXHR9XG5cdHJldHVybiBjb252ZXJ0SHN2VG9SZ2Ioe1xuXHRcdGgsXG5cdFx0czogYiA9PT0gMSA/IDEgOiAxIC0gdyAvICgxIC0gYiksXG5cdFx0djogMSAtIGIsXG5cdFx0YWxwaGFcblx0fSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0UmdiVG9Id2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0h3YihyZ2JhKSB7XG5cdGxldCBoc3YgPSBjb252ZXJ0UmdiVG9Ic3YocmdiYSk7XG5cdGlmIChoc3YgPT09IHZvaWQgMCkgcmV0dXJuIHZvaWQgMDtcblx0bGV0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRsZXQgdiA9IGhzdi52ICE9PSB2b2lkIDAgPyBoc3YudiA6IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJod2JcIixcblx0XHR3OiAoMSAtIHMpICogdixcblx0XHRiOiAxIC0gdlxuXHR9O1xuXHRpZiAoaHN2LmggIT09IHZvaWQgMCkgcmVzLmggPSBoc3YuaDtcblx0aWYgKGhzdi5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBoc3YuYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9wYXJzZUh3Yi5qc1xuZnVuY3Rpb24gUGFyc2VId2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHdiXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImh3YlwiIH07XG5cdGNvbnN0IFssIGgsIHcsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAody50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmICh3LnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMudyA9IHcudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGIudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmIgPSBiLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE5ID0ge1xuXHRtb2RlOiBcImh3YlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Id2IgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcIndcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRwYXJzZTogW1BhcnNlSHdiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGh3Yigke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy53ICE9PSB2b2lkIDAgPyBjLncgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZU5haXZlIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hkci90cmFuc2Zlci5qc1xudmFyIE0xID0gLjE1OTMwMTc1NzgxMjU7XG52YXIgTTIgPSA3OC44NDM3NTtcbnZhciBDMSA9IC44MzU5Mzc1O1xudmFyIEMyID0gMTguODUxNTYyNTtcbnZhciBDMyA9IDE4LjY4NzU7XG5mdW5jdGlvbiB0cmFuc2ZlclBxRGVjb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYsIDEgLyBNMik7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdyhNYXRoLm1heCgwLCBjIC0gQzEpIC8gKEMyIC0gQzMgKiBjKSwgMSAvIE0xKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZmVyUHFFbmNvZGUodikge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRjb25zdCBjID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiBjKSAvICgxICsgQzMgKiBjKSwgTTIpO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvY29udmVydEl0cFRvWHl6NjUuanNcbnZhciB0b1JlbCA9IChjKSA9PiBNYXRoLm1heChjIC8gMjAzLCAwKTtcbnZhciBjb252ZXJ0SXRwVG9YeXo2NSA9ICh7IGksIHQsIHAsIGFscGhhIH0pID0+IHtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmICh0ID09PSB2b2lkIDApIHQgPSAwO1xuXHRpZiAocCA9PT0gdm9pZCAwKSBwID0gMDtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFEZWNvZGUoaSArIC4wMDg2MDkwMzcwMzc5MzI3NjEgKiB0ICsgLjExMTAyOTYyNTAwMzAyNTkzICogcCk7XG5cdGNvbnN0IG0gPSB0cmFuc2ZlclBxRGVjb2RlKGkgLSAuMDA4NjA5MDM3MDM3OTMyNzUgKiB0IC0gLjExMTAyOTYyNTAwMzAyNTk5ICogcCk7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuNTYwMDMxMzM1NzEwNjc5MSAqIHQgLSAuMzIwNjI3MTc0OTg3MzE4ODUgKiBwKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiB0b1JlbCgyLjA3MDE1MjIxODM4OTQyMiAqIGwgLSAxLjMyNjM0NzMzODk2NzE1NTYgKiBtICsgLjIwNjY1MTA0NzYyOTQwNTEgKiBzKSxcblx0XHR5OiB0b1JlbCguMzY0NzM4NTIwOTc0ODA3NCAqIGwgKyAuNjgwNTY2MDI0OTQ3MjI3ICogbSAtIC4wNDUzMDQ1NDU5MjIwMzQ2ICogcyksXG5cdFx0ejogdG9SZWwoLS4wNDk3NDcyMDc1MzU4MTIgKiBsIC0gLjA0OTI2MDk2NjY5NjYxMzggKiBtICsgMS4xODgwNjU5MjQ5OTIzMDQyICogcylcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRYeXo2NVRvSXRwLmpzXG52YXIgdG9BYnMgPSAoYyA9IDApID0+IE1hdGgubWF4KGMgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSXRwID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRjb25zdCBhYnNYID0gdG9BYnMoeCk7XG5cdGNvbnN0IGFic1kgPSB0b0Ficyh5KTtcblx0Y29uc3QgYWJzWiA9IHRvQWJzKHopO1xuXHRjb25zdCBsID0gdHJhbnNmZXJQcUVuY29kZSguMzU5MjgzMjU5MDEyMTIxNyAqIGFic1ggKyAuNjk3NjA1MTE0Nzc3OTUwMiAqIGFic1kgLSAuMDM1ODkxNTkzMjMyMDI4OSAqIGFic1opO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcUVuY29kZSgtLjE5MjA4MDg0NjM3MDQ5OTUgKiBhYnNYICsgMS4xMDA0NzY3OTcwMzc0MzIzICogYWJzWSArIC4wNzUzNzQ4NjU4NTE5MTE4ICogYWJzWik7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRW5jb2RlKC4wMDcwNzk3ODQ0NjA3NDc3ICogYWJzWCArIC4wNzQ4Mzk2NjYyMTg2MzY2ICogYWJzWSArIC44NDMzMjY1NDUzODk4NzY1ICogYWJzWik7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcIml0cFwiLFxuXHRcdGk6IC41ICogbCArIC41ICogbSxcblx0XHR0OiAxLjYxMzc2OTUzMTI1ICogbCAtIDMuMzIzNDg2MzI4MTI1ICogbSArIDEuNzA5NzE2Nzk2ODc1ICogcyxcblx0XHRwOiA0LjM3ODE3MzgyODEyNSAqIGwgLSA0LjI0NTYwNTQ2ODc1ICogbSAtIC4xMzI1NjgzNTkzNzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOCA9IHtcblx0bW9kZTogXCJpdHBcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImlcIixcblx0XHRcInRcIixcblx0XHRcInBcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0taWN0Y3BcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWljdGNwXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0SXRwVG9YeXo2NSxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEl0cFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0l0cCxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9JdHAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbMCwgLjU4MV0sXG5cdFx0dDogWy0uMzY5LCAuMjcyXSxcblx0XHRwOiBbLS4xNjQsIC4zMzFdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHQ6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRwOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0WHl6NjVUb0phYi5qc1xudmFyIHAkMSA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCQxID0gMTYyOTU0OTk1MzI4MjE1NjVlLTI3O1xudmFyIGphYlBxRW5jb2RlID0gKHYpID0+IHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0bGV0IHZuID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiB2bikgLyAoMSArIEMzICogdm4pLCBwJDEpO1xufTtcbnZhciBhYnMgPSAodiA9IDApID0+IE1hdGgubWF4KHYgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSmFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHR4ID0gYWJzKHgpO1xuXHR5ID0gYWJzKHkpO1xuXHR6ID0gYWJzKHopO1xuXHRsZXQgeHAgPSAxLjE1ICogeCAtIC4xNSAqIHo7XG5cdGxldCB5cCA9IC42NiAqIHkgKyAuMzQgKiB4O1xuXHRsZXQgbCA9IGphYlBxRW5jb2RlKC40MTQ3ODk3MiAqIHhwICsgLjU3OTk5OSAqIHlwICsgLjAxNDY0OCAqIHopO1xuXHRsZXQgbSA9IGphYlBxRW5jb2RlKC0uMjAxNTEgKiB4cCArIDEuMTIwNjQ5ICogeXAgKyAuMDUzMTAwOCAqIHopO1xuXHRsZXQgcyA9IGphYlBxRW5jb2RlKC0uMDE2NjAwOCAqIHhwICsgLjI2NDggKiB5cCArIC42Njg0Nzk5ICogeik7XG5cdGxldCBpID0gKGwgKyBtKSAvIDI7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJqYWJcIixcblx0XHRqOiAuNDQgKiBpIC8gKDEgLSAuNTYgKiBpKSAtIGQwJDEsXG5cdFx0YTogMy41MjQgKiBsIC0gNC4wNjY3MDggKiBtICsgLjU0MjcwOCAqIHMsXG5cdFx0YjogLjE5OTA3NiAqIGwgKyAxLjA5Njc5OSAqIG0gLSAxLjI5NTg3NSAqIHNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1h5ejY1LmpzXG52YXIgcCA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcURlY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2cCA9IE1hdGgucG93KHYsIDEgLyBwKTtcblx0cmV0dXJuIDFlNCAqIE1hdGgucG93KChDMSAtIHZwKSAvIChDMyAqIHZwIC0gQzIpLCAxIC8gTTEpO1xufTtcbnZhciByZWwgPSAodikgPT4gdiAvIDIwMztcbnZhciBjb252ZXJ0SmFiVG9YeXo2NSA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGogPT09IHZvaWQgMCkgaiA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGkgPSAoaiArIGQwKSAvICguNDQgKyAuNTYgKiAoaiArIGQwKSk7XG5cdGxldCBsID0gamFiUHFEZWNvZGUoaSArIC4xMzg2MDUwNCAqIGEgKyAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBtID0gamFiUHFEZWNvZGUoaSAtIC4xMzg2MDUwNCAqIGEgLSAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBzID0gamFiUHFEZWNvZGUoaSAtIC4wOTYwMTkyNDIgKiBhIC0gLjgxMTg5MTkgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogcmVsKDEuNjYxMzczMDI0NjUyMTc0ICogbCAtIC45MTQ1MjMwODEzMDQzNDggKiBtICsgLjIzMTM2MjA4MTczOTEzMDQ1ICogcyksXG5cdFx0eTogcmVsKC0uMzI1MDc1ODYxMTg0NDUzMyAqIGwgKyAxLjU3MTg0NzAyNjczMjU0MyAqIG0gLSAuMjE4MjUzODM0NTMyMjc5MjggKiBzKSxcblx0XHR6OiByZWwoLS4wOTA5ODI4MTEgKiBsIC0gLjMxMjcyODI5ICogbSArIDEuNTIyNzY2NiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0UmdiVG9KYWIuanNcbnZhciBjb252ZXJ0UmdiVG9KYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NjVUb0phYihjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRKYWJUb1JnYiA9IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEphYlRvWHl6NjUoY29sb3IpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE3ID0ge1xuXHRtb2RlOiBcImphYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1qemF6YnpcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWp6YXpielwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvSmFiLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0phYlxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRKYWJUb1JnYixcblx0XHR4eXo2NTogY29udmVydEphYlRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjJdLFxuXHRcdGE6IFstLjEwOSwgLjEyOV0sXG5cdFx0YjogWy0uMTg1LCAuMTM0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEphYlRvSmNoLmpzXG52YXIgY29udmVydEphYlRvSmNoID0gKHsgaiwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamNoXCIsXG5cdFx0aixcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9jb252ZXJ0SmNoVG9KYWIuanNcbnZhciBjb252ZXJ0SmNoVG9KYWIgPSAoeyBqLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0aixcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNiA9IHtcblx0bW9kZTogXCJqY2hcIixcblx0cGFyc2U6IFtcIi0tanpjemh6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemN6aHpcIixcblx0dG9Nb2RlOiB7XG5cdFx0amFiOiBjb252ZXJ0SmNoVG9KYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvUmdiKGNvbnZlcnRKY2hUb0phYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0SmFiVG9KY2goY29udmVydFJnYlRvSmFiKGMpKSxcblx0XHRqYWI6IGNvbnZlcnRKYWJUb0pjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRqOiBbMCwgLjIyMV0sXG5cdFx0YzogWzAsIC4xOV0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb25zdGFudHMuanNcbnZhciBrID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvWHl6NTAuanNcbnZhciBmbiA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gaztcbnZhciBjb252ZXJ0TGFiVG9YeXo1MCA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiBmbihmeCkgKiBENTAuWCxcblx0XHR5OiBmbihmeSkgKiBENTAuWSxcblx0XHR6OiBmbihmeikgKiBENTAuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0WHl6NTBUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo1MFRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMTM0MTM1OTU2OTk1ODcwNyAtIHkgKiAxLjYxNzM4NjMzMjE2MTI1MzggLSAuNDkwNjYxOTQ2MDA4MzUzMiAqIHosXG5cdFx0ZzogeCAqIC0uOTc4Nzk1NTAyOTEyMDg5ICsgeSAqIDEuOTE2MjU0NTY3MjU5NTI0ICsgLjAzMzQ0MjczMTE2MTMxOTQ5ICogeixcblx0XHRiOiB4ICogLjA3MTk1NTM3OTg4NDExNjc3IC0geSAqIC4yMjg5NzY4MjY0MTU4MzIyICsgMS40MDUzODYwNTgzMjQxMjUgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvUmdiLmpzXG52YXIgY29udmVydExhYlRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejUwVG9SZ2IoY29udmVydExhYlRvWHl6NTAobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2NvbnZlcnRSZ2JUb1h5ejUwLmpzXG52YXIgY29udmVydFJnYlRvWHl6NTAgPSAocmdiKSA9PiB7XG5cdGxldCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKHJnYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC40MzYwNjU3NDI4MjQ4MTEgKiByICsgLjM4NTE1MTQ2ODgzMzc5MTIgKiBnICsgLjE0MzA3ODQ1NDQyMjY0MTk3ICogYixcblx0XHR5OiAuMjIyNDkzMTkxNzU2MjM3MDIgKiByICsgLjcxNjg4NzA1MzgyMzg4MjMgKiBnICsgLjA2MDYxOTc5MDUzNjE2NTM3ICogYixcblx0XHR6OiAuMDEzOTIzOTA0NTAwOTQzNDY1ICogciArIC4wOTcwODEyODU2NjU3NDYzNCAqIGcgKyAuNzE0MDk5MzU4NDAwNTE1NSAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRYeXo1MFRvTGFiLmpzXG52YXIgZiA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrICogdmFsdWUgKyAxNikgLyAxMTY7XG52YXIgY29udmVydFh5ejUwVG9MYWIgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYoeCAvIEQ1MC5YKTtcblx0bGV0IGYxID0gZih5IC8gRDUwLlkpO1xuXHRsZXQgZjIgPSBmKHogLyBENTAuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWJcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRSZ2JUb0xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYiA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo1MFRvTGFiKGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpO1xuXHRpZiAocmdiLnIgPT09IHJnYi5iICYmIHJnYi5iID09PSByZ2IuZykgcmVzLmEgPSByZXMuYiA9IDA7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvcGFyc2VMYWIuanNcbmZ1bmN0aW9uIHBhcnNlTGFiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImxhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0aWYgKGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hID0gYS50eXBlID09PSBUb2suTnVtYmVyID8gYS52YWx1ZSA6IGEudmFsdWUgKiAxMjUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNSA9IHtcblx0bW9kZTogXCJsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRMYWJUb1h5ejUwLFxuXHRcdHJnYjogY29udmVydExhYlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTGFiLFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VMYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgbGFiKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmEgIT09IHZvaWQgMCA/IGMuYSA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDE1LFxuXHRtb2RlOiBcImxhYjY1XCIsXG5cdHBhcnNlOiBbXCItLWxhYi1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxhYi1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NjU6IGNvbnZlcnRMYWI2NVRvWHl6NjUsXG5cdFx0cmdiOiBjb252ZXJ0TGFiNjVUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0xhYjY1LFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiNjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy0xMjUsIDEyNV0sXG5cdFx0YjogWy0xMjUsIDEyNV1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL3BhcnNlTGNoLmpzXG5mdW5jdGlvbiBwYXJzZUxjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsY2hcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudmFsdWUpLCAxMDApO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogMTUwIC8gMTAwKTtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMyA9IHtcblx0bW9kZTogXCJsY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiOiBjb252ZXJ0TGNoVG9MYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiKGMpKSxcblx0XHRsYWI6IGNvbnZlcnRMYWJUb0xjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlQ2hyb21hIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaDY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEyID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcImxjaDY1XCIsXG5cdHBhcnNlOiBbXCItLWxjaC1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxjaC1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiNjUoYyksIFwibGNoNjVcIiksXG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJsY2g2NVwiKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9jb252ZXJ0THV2VG9MY2h1di5qc1xudmFyIGNvbnZlcnRMdXZUb0xjaHV2ID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGNodXZcIixcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIodiwgdSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydExjaHV2VG9MdXYuanNcbnZhciBjb252ZXJ0TGNodXZUb0x1diA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsdXZcIixcblx0XHRsLFxuXHRcdHU6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHR2OiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRYeXo1MFRvTHV2LmpzXG52YXIgdV9mbiQxID0gKHgsIHksIHopID0+IDQgKiB4IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdl9mbiQxID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4kMSA9IHVfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciB2biQxID0gdl9mbiQxKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGxfZm4gPSAodmFsdWUpID0+IHZhbHVlIDw9IGUgPyBrICogdmFsdWUgOiAxMTYgKiBNYXRoLmNicnQodmFsdWUpIC0gMTY7XG52YXIgY29udmVydFh5ejUwVG9MdXYgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBsID0gbF9mbih5IC8gRDUwLlkpO1xuXHRsZXQgdSA9IHVfZm4kMSh4LCB5LCB6KTtcblx0bGV0IHYgPSB2X2ZuJDEoeCwgeSwgeik7XG5cdGlmICghaXNGaW5pdGUodSkgfHwgIWlzRmluaXRlKHYpKSBsID0gdSA9IHYgPSAwO1xuXHRlbHNlIHtcblx0XHR1ID0gMTMgKiBsICogKHUgLSB1biQxKTtcblx0XHR2ID0gMTMgKiBsICogKHYgLSB2biQxKTtcblx0fVxuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1LFxuXHRcdHZcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRMdXZUb1h5ejUwLmpzXG52YXIgdV9mbiA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4gPSAoeCwgeSwgeikgPT4gOSAqIHkgLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB1biA9IHVfZm4oRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4gPSB2X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGNvbnZlcnRMdXZUb1h5ejUwID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGwgPT09IDApIHJldHVybiB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH07XG5cdGlmICh1ID09PSB2b2lkIDApIHUgPSAwO1xuXHRpZiAodiA9PT0gdm9pZCAwKSB2ID0gMDtcblx0bGV0IHVwID0gdSAvICgxMyAqIGwpICsgdW47XG5cdGxldCB2cCA9IHYgLyAoMTMgKiBsKSArIHZuO1xuXHRsZXQgeSA9IEQ1MC5ZICogKGwgPD0gOCA/IGwgLyBrIDogTWF0aC5wb3coKGwgKyAxNikgLyAxMTYsIDMpKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogeSAqICg5ICogdXApIC8gKDQgKiB2cCksXG5cdFx0eSxcblx0XHR6OiB5ICogKDEyIC0gMyAqIHVwIC0gMjAgKiB2cCkgLyAoNCAqIHZwKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9kZWZpbml0aW9uLmpzXG52YXIgY29udmVydFJnYlRvTGNodXYgPSAocmdiKSA9PiBjb252ZXJ0THV2VG9MY2h1dihjb252ZXJ0WHl6NTBUb0x1dihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKSk7XG52YXIgY29udmVydExjaHV2VG9SZ2IgPSAobGNodXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGNvbnZlcnRMY2h1dlRvTHV2KGxjaHV2KSkpO1xudmFyIGRlZmluaXRpb24kMTEgPSB7XG5cdG1vZGU6IFwibGNodXZcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHV2OiBjb252ZXJ0TGNodXZUb0x1dixcblx0XHRyZ2I6IGNvbnZlcnRMY2h1dlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9MY2h1dixcblx0XHRsdXY6IGNvbnZlcnRMdXZUb0xjaHV2XG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWxjaHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2h1dlwiLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTc2Ljk1Nl0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEwID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcImxyZ2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydExyZ2JUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0xyZ2IgfSxcblx0cGFyc2U6IFtcInNyZ2ItbGluZWFyXCJdLFxuXHRzZXJpYWxpemU6IFwic3JnYi1saW5lYXJcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDkgPSB7XG5cdG1vZGU6IFwibHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0THV2VG9YeXo1MCxcblx0XHRyZ2I6IChsdXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGx1dikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTHV2LFxuXHRcdHJnYjogKHJnYikgPT4gY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcInVcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tbHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sdXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0dTogWy04NC45MzYsIDE3NS4wNDJdLFxuXHRcdHY6IFstMTI1Ljg4MiwgODcuMjQzXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR1OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0THJnYlRvT2tsYWIuanNcbnZhciBjb252ZXJ0THJnYlRvT2tsYWIgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBMID0gTWF0aC5jYnJ0KC40MTIyMjE0Njk0NzA3NjMgKiByICsgLjUzNjMzMjUzNzI2MTczNDggKiBnICsgLjA1MTQ0NTk5MzI2NzUwMjIgKiBiKTtcblx0bGV0IE0gPSBNYXRoLmNicnQoLjIxMTkwMzQ5NTgxNzgyNTIgKiByICsgLjY4MDY5OTU1MDY0NTIzNDQgKiBnICsgLjEwNzM5Njk1MzUzNjk0MDYgKiBiKTtcblx0bGV0IFMgPSBNYXRoLmNicnQoLjA4ODMwMjQ1OTE5MDA1NjQgKiByICsgLjI4MTcxODgzOTEzNjEyMTUgKiBnICsgLjYyOTk3ODcwMTY3MzgyMjIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogLjIxMDQ1NDI2ODMwOTMxNCAqIEwgKyAuNzkzNjE3Nzc0NzAyMzA1NCAqIE0gLSAuMDA0MDcyMDQzMDExNjE5MyAqIFMsXG5cdFx0YTogMS45Nzc5OTg1MzI0MzExNjg0ICogTCAtIDIuNDI4NTkyMjQyMDQ4NTggKiBNICsgLjQ1MDU5MzcwOTYxNzQxMSAqIFMsXG5cdFx0YjogLjAyNTkwNDA0MjQ2NTU0NzggKiBMICsgLjc4Mjc3MTcxMjQ1NzUyOTYgKiBNIC0gLjgwODY3NTc1NDkyMzA3NzQgKiBTXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRSZ2JUb09rbGFiLmpzXG52YXIgY29udmVydFJnYlRvT2tsYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvT2tsYWIoY29udmVydFJnYlRvTHJnYihyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9McmdiLmpzXG52YXIgY29udmVydE9rbGFiVG9McmdiID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGgucG93KGwgKyAuMzk2MzM3Nzc3Mzc2MTc0OSAqIGEgKyAuMjE1ODAzNzU3MzA5OTEzNiAqIGIsIDMpO1xuXHRsZXQgTSA9IE1hdGgucG93KGwgLSAuMTA1NTYxMzQ1ODE1NjU4NiAqIGEgLSAuMDYzODU0MTcyODI1ODEzMyAqIGIsIDMpO1xuXHRsZXQgUyA9IE1hdGgucG93KGwgLSAuMDg5NDg0MTc3NTI5ODExOSAqIGEgLSAxLjI5MTQ4NTU0ODAxOTQwOTIgKiBiLCAzKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiA0LjA3Njc0MTYzNjA3NTk1NyAqIEwgLSAzLjMwNzcxMTUzOTI1ODA2MTYgKiBNICsgLjIzMDk2OTkwMzE4MjEwNDQgKiBTLFxuXHRcdGc6IC0xLjI2ODQzNzk3MzI4NTAzMTcgKiBMICsgMi42MDk3NTczNDkyODc2ODg3ICogTSAtIC4zNDEzMTkzNzYwMDI2NTczICogUyxcblx0XHRiOiAtLjAwNDE5NjA3NjEzODY3NTYgKiBMIC0gLjcwMzQxODYxNzkzNTkzNjIgKiBNICsgMS43MDc2MTQ2OTQwNzQ2MTE3ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0T2tsYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvUmdiID0gKGMpID0+IGNvbnZlcnRMcmdiVG9SZ2IoY29udmVydE9rbGFiVG9McmdiKGMpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvaGVscGVycy5qc1xuZnVuY3Rpb24gdG9lKHgpIHtcblx0Y29uc3Qga18xID0gLjIwNjtcblx0Y29uc3Qga18yID0gLjAzO1xuXHRjb25zdCBrXzMgPSAxLjIwNiAvIDEuMDM7XG5cdHJldHVybiAuNSAqIChrXzMgKiB4IC0ga18xICsgTWF0aC5zcXJ0KChrXzMgKiB4IC0ga18xKSAqIChrXzMgKiB4IC0ga18xKSArIDQgKiBrXzIgKiBrXzMgKiB4KSk7XG59XG5mdW5jdGlvbiB0b2VfaW52KHgpIHtcblx0cmV0dXJuICh4ICogeCArIC4yMDYgKiB4KSAvICgxLjIwNiAvIDEuMDMgKiAoeCArIC4wMykpO1xufVxuZnVuY3Rpb24gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKSB7XG5cdGxldCBrMCwgazEsIGsyLCBrMywgazQsIHdsLCB3bSwgd3M7XG5cdGlmICgtMS44ODE3MDMyOCAqIGEgLSAuODA5MzY0OTMgKiBiID4gMSkge1xuXHRcdGswID0gMS4xOTA4NjI3Nztcblx0XHRrMSA9IDEuNzY1NzY3Mjg7XG5cdFx0azIgPSAuNTk2NjI2NDE7XG5cdFx0azMgPSAuNzU1MTUxOTc7XG5cdFx0azQgPSAuNTY3NzEyNDU7XG5cdFx0d2wgPSA0LjA3Njc0MTY2MjE7XG5cdFx0d20gPSAtMy4zMDc3MTE1OTEzO1xuXHRcdHdzID0gLjIzMDk2OTkyOTI7XG5cdH0gZWxzZSBpZiAoMS44MTQ0NDEwNCAqIGEgLSAxLjE5NDQ1Mjc2ICogYiA+IDEpIHtcblx0XHRrMCA9IC43Mzk1NjUxNTtcblx0XHRrMSA9IC0uNDU5NTQ0MDQ7XG5cdFx0azIgPSAuMDgyODU0Mjc7XG5cdFx0azMgPSAuMTI1NDEwNztcblx0XHRrNCA9IC4xNDUwMzIwNDtcblx0XHR3bCA9IC0xLjI2ODQzODAwNDY7XG5cdFx0d20gPSAyLjYwOTc1NzQwMTE7XG5cdFx0d3MgPSAtLjM0MTMxOTM5NjU7XG5cdH0gZWxzZSB7XG5cdFx0azAgPSAxLjM1NzMzNjUyO1xuXHRcdGsxID0gLS4wMDkxNTc5OTtcblx0XHRrMiA9IC0xLjE1MTMwMjE7XG5cdFx0azMgPSAtLjUwNTU5NjA2O1xuXHRcdGs0ID0gLjAwNjkyMTY3O1xuXHRcdHdsID0gLS4wMDQxOTYwODYzO1xuXHRcdHdtID0gLS43MDM0MTg2MTQ3O1xuXHRcdHdzID0gMS43MDc2MTQ3MDE7XG5cdH1cblx0bGV0IFMgPSBrMCArIGsxICogYSArIGsyICogYiArIGszICogYSAqIGEgKyBrNCAqIGEgKiBiO1xuXHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRsZXQga19tID0gLS4xMDU1NjEzNDU4ICogYSAtIC4wNjM4NTQxNzI4ICogYjtcblx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdHtcblx0XHRsZXQgbF8gPSAxICsgUyAqIGtfbDtcblx0XHRsZXQgbV8gPSAxICsgUyAqIGtfbTtcblx0XHRsZXQgc18gPSAxICsgUyAqIGtfcztcblx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRsZXQgbSA9IG1fICogbV8gKiBtXztcblx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRsZXQgbF9kUyA9IDMgKiBrX2wgKiBsXyAqIGxfO1xuXHRcdGxldCBtX2RTID0gMyAqIGtfbSAqIG1fICogbV87XG5cdFx0bGV0IHNfZFMgPSAzICoga19zICogc18gKiBzXztcblx0XHRsZXQgbF9kUzIgPSA2ICoga19sICoga19sICogbF87XG5cdFx0bGV0IG1fZFMyID0gNiAqIGtfbSAqIGtfbSAqIG1fO1xuXHRcdGxldCBzX2RTMiA9IDYgKiBrX3MgKiBrX3MgKiBzXztcblx0XHRsZXQgZiA9IHdsICogbCArIHdtICogbSArIHdzICogcztcblx0XHRsZXQgZjEgPSB3bCAqIGxfZFMgKyB3bSAqIG1fZFMgKyB3cyAqIHNfZFM7XG5cdFx0bGV0IGYyID0gd2wgKiBsX2RTMiArIHdtICogbV9kUzIgKyB3cyAqIHNfZFMyO1xuXHRcdFMgPSBTIC0gZiAqIGYxIC8gKGYxICogZjEgLSAuNSAqIGYgKiBmMik7XG5cdH1cblx0cmV0dXJuIFM7XG59XG5mdW5jdGlvbiBmaW5kX2N1c3AoYSwgYikge1xuXHRsZXQgU19jdXNwID0gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKTtcblx0bGV0IHJnYiA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogMSxcblx0XHRhOiBTX2N1c3AgKiBhLFxuXHRcdGI6IFNfY3VzcCAqIGJcblx0fSk7XG5cdGxldCBMX2N1c3AgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYi5yLCByZ2IuZywgcmdiLmIpKTtcblx0cmV0dXJuIFtMX2N1c3AsIExfY3VzcCAqIFNfY3VzcF07XG59XG5mdW5jdGlvbiBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhLCBiLCBMMSwgQzEsIEwwLCBjdXNwID0gbnVsbCkge1xuXHRpZiAoIWN1c3ApIGN1c3AgPSBmaW5kX2N1c3AoYSwgYik7XG5cdGxldCB0O1xuXHRpZiAoKEwxIC0gTDApICogY3VzcFsxXSAtIChjdXNwWzBdIC0gTDApICogQzEgPD0gMCkgdCA9IGN1c3BbMV0gKiBMMCAvIChDMSAqIGN1c3BbMF0gKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0ZWxzZSB7XG5cdFx0dCA9IGN1c3BbMV0gKiAoTDAgLSAxKSAvIChDMSAqIChjdXNwWzBdIC0gMSkgKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0XHR7XG5cdFx0XHRsZXQgZEwgPSBMMSAtIEwwO1xuXHRcdFx0bGV0IGRDID0gQzE7XG5cdFx0XHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRcdFx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdFx0XHRsZXQga19zID0gLS4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYjtcblx0XHRcdGxldCBsX2R0ID0gZEwgKyBkQyAqIGtfbDtcblx0XHRcdGxldCBtX2R0ID0gZEwgKyBkQyAqIGtfbTtcblx0XHRcdGxldCBzX2R0ID0gZEwgKyBkQyAqIGtfcztcblx0XHRcdHtcblx0XHRcdFx0bGV0IEwgPSBMMCAqICgxIC0gdCkgKyB0ICogTDE7XG5cdFx0XHRcdGxldCBDID0gdCAqIEMxO1xuXHRcdFx0XHRsZXQgbF8gPSBMICsgQyAqIGtfbDtcblx0XHRcdFx0bGV0IG1fID0gTCArIEMgKiBrX207XG5cdFx0XHRcdGxldCBzXyA9IEwgKyBDICoga19zO1xuXHRcdFx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0XHRcdGxldCBzID0gc18gKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0ID0gMyAqIGxfZHQgKiBsXyAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0ID0gMyAqIG1fZHQgKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0ID0gMyAqIHNfZHQgKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0MiA9IDYgKiBsX2R0ICogbF9kdCAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0MiA9IDYgKiBtX2R0ICogbV9kdCAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0MiA9IDYgKiBzX2R0ICogc19kdCAqIHNfO1xuXHRcdFx0XHRsZXQgciA9IDQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgLjIzMDk2OTkyOTIgKiBzIC0gMTtcblx0XHRcdFx0bGV0IHIxID0gNC4wNzY3NDE2NjIxICogbGR0IC0gMy4zMDc3MTE1OTEzICogbWR0ICsgLjIzMDk2OTkyOTIgKiBzZHQ7XG5cdFx0XHRcdGxldCByMiA9IDQuMDc2NzQxNjYyMSAqIGxkdDIgLSAzLjMwNzcxMTU5MTMgKiBtZHQyICsgLjIzMDk2OTkyOTIgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9yID0gcjEgLyAocjEgKiByMSAtIC41ICogciAqIHIyKTtcblx0XHRcdFx0bGV0IHRfciA9IC1yICogdV9yO1xuXHRcdFx0XHRsZXQgZyA9IC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIC4zNDEzMTkzOTY1ICogcyAtIDE7XG5cdFx0XHRcdGxldCBnMSA9IC0xLjI2ODQzODAwNDYgKiBsZHQgKyAyLjYwOTc1NzQwMTEgKiBtZHQgLSAuMzQxMzE5Mzk2NSAqIHNkdDtcblx0XHRcdFx0bGV0IGcyID0gLTEuMjY4NDM4MDA0NiAqIGxkdDIgKyAyLjYwOTc1NzQwMTEgKiBtZHQyIC0gLjM0MTMxOTM5NjUgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9nID0gZzEgLyAoZzEgKiBnMSAtIC41ICogZyAqIGcyKTtcblx0XHRcdFx0bGV0IHRfZyA9IC1nICogdV9nO1xuXHRcdFx0XHRsZXQgYiA9IC0uMDA0MTk2MDg2MyAqIGwgLSAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgYjEgPSAtLjAwNDE5NjA4NjMgKiBsZHQgLSAuNzAzNDE4NjE0NyAqIG1kdCArIDEuNzA3NjE0NzAxICogc2R0O1xuXHRcdFx0XHRsZXQgYjIgPSAtLjAwNDE5NjA4NjMgKiBsZHQyIC0gLjcwMzQxODYxNDcgKiBtZHQyICsgMS43MDc2MTQ3MDEgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9iID0gYjEgLyAoYjEgKiBiMSAtIC41ICogYiAqIGIyKTtcblx0XHRcdFx0bGV0IHRfYiA9IC1iICogdV9iO1xuXHRcdFx0XHR0X3IgPSB1X3IgPj0gMCA/IHRfciA6IDFlNjtcblx0XHRcdFx0dF9nID0gdV9nID49IDAgPyB0X2cgOiAxZTY7XG5cdFx0XHRcdHRfYiA9IHVfYiA+PSAwID8gdF9iIDogMWU2O1xuXHRcdFx0XHR0ICs9IE1hdGgubWluKHRfciwgTWF0aC5taW4odF9nLCB0X2IpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBMID0gY3VzcFswXTtcblx0bGV0IEMgPSBjdXNwWzFdO1xuXHRyZXR1cm4gW0MgLyBMLCBDIC8gKDEgLSBMKV07XG59XG5mdW5jdGlvbiBnZXRfQ3MoTCwgYV8sIGJfKSB7XG5cdGxldCBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBDX21heCA9IGZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uKGFfLCBiXywgTCwgMSwgTCwgY3VzcCk7XG5cdGxldCBTVF9tYXggPSBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCk7XG5cdGxldCBTX21pZCA9IC4xMTUxNjk5MyArIDEgLyAoNy40NDc3ODk3ICsgNC4xNTkwMTI0ICogYl8gKyBhXyAqICgtMi4xOTU1NzM0NyArIDEuNzUxOTg0MDEgKiBiXyArIGFfICogKC0yLjEzNzA0OTQ4IC0gMTAuMDIzMDEwNDMgKiBiXyArIGFfICogKC00LjI0ODk0NTYxICsgNS4zODc3MDgxOSAqIGJfICsgNC42OTg5MTAxMyAqIGFfKSkpKTtcblx0bGV0IFRfbWlkID0gLjExMjM5NjQyICsgMSAvICgxLjYxMzIwMzIgLSAuNjgxMjQzNzkgKiBiXyArIGFfICogKC40MDM3MDYxMiArIC45MDE0ODEyMyAqIGJfICsgYV8gKiAoLS4yNzA4Nzk0MyArIC42MTIyMzk5ICogYl8gKyBhXyAqICguMDAyOTkyMTUgLSAuNDUzOTk1NjggKiBiXyAtIC4xNDY2MTg3MiAqIGFfKSkpKTtcblx0bGV0IGsgPSBDX21heCAvIE1hdGgubWluKEwgKiBTVF9tYXhbMF0sICgxIC0gTCkgKiBTVF9tYXhbMV0pO1xuXHRsZXQgQ19hID0gTCAqIFNfbWlkO1xuXHRsZXQgQ19iID0gKDEgLSBMKSAqIFRfbWlkO1xuXHRsZXQgQ19taWQgPSAuOSAqIGsgKiBNYXRoLnNxcnQoTWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EgKiBDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IgKiBDX2IgKiBDX2IpKSkpO1xuXHRDX2EgPSBMICogLjQ7XG5cdENfYiA9ICgxIC0gTCkgKiAuODtcblx0cmV0dXJuIFtcblx0XHRNYXRoLnNxcnQoMSAvICgxIC8gKENfYSAqIENfYSkgKyAxIC8gKENfYiAqIENfYikpKSxcblx0XHRDX21pZCxcblx0XHRDX21heFxuXHRdO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2tsYWJUb09raHNsLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHNsKGxhYikge1xuXHRjb25zdCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0Y29uc3QgYSA9IGxhYi5hICE9PSB2b2lkIDAgPyBsYWIuYSA6IDA7XG5cdGNvbnN0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2hzbFwiLFxuXHRcdGw6IHRvZShsKVxuXHR9O1xuXHRpZiAobGFiLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGxhYi5hbHBoYTtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGlmICghYykge1xuXHRcdHJldC5zID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBbQ18wLCBDX21pZCwgQ19tYXhdID0gZ2V0X0NzKGwsIGEgLyBjLCBiIC8gYyk7XG5cdGxldCBzO1xuXHRpZiAoYyA8IENfbWlkKSB7XG5cdFx0bGV0IGtfMCA9IDA7XG5cdFx0bGV0IGtfMSA9IC44ICogQ18wO1xuXHRcdGxldCBrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdFx0cyA9IChjIC0ga18wKSAvIChrXzEgKyBrXzIgKiAoYyAtIGtfMCkpICogLjg7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IGtfMCA9IENfbWlkO1xuXHRcdGxldCBrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0XHRzID0gLjggKyAuMiAqICgoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSk7XG5cdH1cblx0aWYgKHMpIHtcblx0XHRyZXQucyA9IHM7XG5cdFx0cmV0LmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2NvbnZlcnRPa2hzbFRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzbFRvT2tsYWIoaHNsKSB7XG5cdGxldCBoID0gaHNsLmggIT09IHZvaWQgMCA/IGhzbC5oIDogMDtcblx0bGV0IHMgPSBoc2wucyAhPT0gdm9pZCAwID8gaHNsLnMgOiAwO1xuXHRsZXQgbCA9IGhzbC5sICE9PSB2b2lkIDAgPyBoc2wubCA6IDA7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogdG9lX2ludihsKVxuXHR9O1xuXHRpZiAoaHNsLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzbC5hbHBoYTtcblx0aWYgKCFzIHx8IGwgPT09IDEpIHtcblx0XHRyZXQuYSA9IHJldC5iID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhyZXQubCwgYV8sIGJfKTtcblx0bGV0IHQsIGtfMCwga18xLCBrXzI7XG5cdGlmIChzIDwgLjgpIHtcblx0XHR0ID0gMS4yNSAqIHM7XG5cdFx0a18wID0gMDtcblx0XHRrXzEgPSAuOCAqIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdH0gZWxzZSB7XG5cdFx0dCA9IDUgKiAocyAtIC44KTtcblx0XHRrXzAgPSBDX21pZDtcblx0XHRrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gKENfbWF4IC0gQ19taWQpO1xuXHR9XG5cdGxldCBDID0ga18wICsgdCAqIGtfMSAvICgxIC0ga18yICogdCk7XG5cdHJldC5hID0gQyAqIGFfO1xuXHRyZXQuYiA9IEMgKiBiXztcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvbW9kZU9raHNsLmpzXG52YXIgbW9kZU9raHNsID0ge1xuXHQuLi5kZWZpbml0aW9uJDIxLFxuXHRtb2RlOiBcIm9raHNsXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHNsXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzbFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHNsLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc2woY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc2xUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzbFRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2xhYlRvT2toc3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2xhYlRvT2toc3YobGFiKSB7XG5cdGxldCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0bGV0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRsZXQgYiA9IGxhYi5iICE9PSB2b2lkIDAgPyBsYWIuYiA6IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgYV8gPSBjID8gYSAvIGMgOiAxO1xuXHRsZXQgYl8gPSBjID8gYiAvIGMgOiAxO1xuXHRsZXQgW1NfbWF4LCBUXSA9IGdldF9TVF9tYXgoYV8sIGJfKTtcblx0bGV0IFNfMCA9IC41O1xuXHRsZXQgayA9IDEgLSBTXzAgLyBTX21heDtcblx0bGV0IHQgPSBUIC8gKGMgKyBsICogVCk7XG5cdGxldCBMX3YgPSB0ICogbDtcblx0bGV0IENfdiA9IHQgKiBjO1xuXHRsZXQgTF92dCA9IHRvZV9pbnYoTF92KTtcblx0bGV0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRsZXQgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGxldCBzY2FsZV9MID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2Jfc2NhbGUuciwgcmdiX3NjYWxlLmcsIHJnYl9zY2FsZS5iLCAwKSk7XG5cdGwgPSBsIC8gc2NhbGVfTDtcblx0YyA9IGMgLyBzY2FsZV9MICogdG9lKGwpIC8gbDtcblx0bCA9IHRvZShsKTtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc3ZcIixcblx0XHRzOiBjID8gKFNfMCArIFQpICogQ192IC8gKFQgKiBTXzAgKyBUICogayAqIENfdikgOiAwLFxuXHRcdHY6IGwgPyBsIC8gTF92IDogMFxuXHR9O1xuXHRpZiAocmV0LnMpIHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2hzdlRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzdlRvT2tsYWIoaHN2KSB7XG5cdGNvbnN0IHJldCA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gaHN2LmFscGhhO1xuXHRjb25zdCBoID0gaHN2LmggIT09IHZvaWQgMCA/IGhzdi5oIDogMDtcblx0Y29uc3QgcyA9IGhzdi5zICE9PSB2b2lkIDAgPyBoc3YucyA6IDA7XG5cdGNvbnN0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRjb25zdCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0Y29uc3QgYl8gPSBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGNvbnN0IFNfMCA9IC41O1xuXHRjb25zdCBrID0gMSAtIFNfMCAvIFNfbWF4O1xuXHRjb25zdCBMX3YgPSAxIC0gcyAqIFNfMCAvIChTXzAgKyBUIC0gVCAqIGsgKiBzKTtcblx0Y29uc3QgQ192ID0gcyAqIFQgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGNvbnN0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRjb25zdCByZ2Jfc2NhbGUgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IExfdnQsXG5cdFx0YTogYV8gKiBDX3Z0LFxuXHRcdGI6IGJfICogQ192dFxuXHR9KTtcblx0Y29uc3Qgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRjb25zdCBMX25ldyA9IHRvZV9pbnYodiAqIExfdik7XG5cdGNvbnN0IEMgPSBDX3YgKiBMX25ldyAvIExfdjtcblx0cmV0LmwgPSBMX25ldyAqIHNjYWxlX0w7XG5cdHJldC5hID0gQyAqIGFfICogc2NhbGVfTDtcblx0cmV0LmIgPSBDICogYl8gKiBzY2FsZV9MO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9tb2RlT2toc3YuanNcbnZhciBtb2RlT2toc3YgPSB7XG5cdC4uLmRlZmluaXRpb24kMjAsXG5cdG1vZGU6IFwib2toc3ZcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tb2toc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLW9raHN2XCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2xhYlRvT2toc3YsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9Pa2hzdihjb252ZXJ0UmdiVG9Pa2xhYihjKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2hzdlRvT2tsYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydE9raHN2VG9Pa2xhYihjKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvcGFyc2VPa2xhYi5qc1xuZnVuY3Rpb24gcGFyc2VPa2xhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGNvbnN0IFssIGwsIGEsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSB8fCBhLnR5cGUgPT09IFRvay5IdWUgfHwgYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kOCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJva2xhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0T2tsYWJUb0xyZ2IsXG5cdFx0cmdiOiBjb252ZXJ0T2tsYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdGxyZ2I6IGNvbnZlcnRMcmdiVG9Pa2xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb09rbGFiXG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRhOiBbLS40LCAuNF0sXG5cdFx0YjogWy0uNCwgLjRdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xhYl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9wYXJzZU9rbGNoLmpzXG5mdW5jdGlvbiBwYXJzZU9rbGNoKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcIm9rbGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcIm9rbGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdH1cblx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5jID0gTWF0aC5tYXgoMCwgYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgKiAuNCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ3ID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcIm9rbGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb09rbGFiKGMpLCBcIm9rbGNoXCIpLFxuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwib2tsY2hcIilcblx0fSxcblx0cGFyc2U6IFtwYXJzZU9rbGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYG9rbGNoKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmMgIT09IHZvaWQgMCA/IGMuYyA6IFwibm9uZVwifSAke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRjOiBbMCwgLjRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRQM1RvWHl6NjUuanNcbnZhciBjb252ZXJ0UDNUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDg2NTcwOTQ4NjQ4MjE2ICogciArIC4yNjU2Njc2OTMxNjkwOTMgKiBnICsgLjE5ODIxNzI4NTIzNDM2MjUgKiBiLFxuXHRcdHk6IC4yMjg5NzQ1NjQwNjk3NDg3ICogciArIC42OTE3Mzg1MjE4MzY1MDYyICogZyArIC4wNzkyODY5MTQwOTM3NDUgKiBiLFxuXHRcdHo6IDAgKiByICsgLjA0NTExMzM4MTg1ODkwMjYgKiBnICsgMS4wNDM5NDQzNjg5MDA5NzYgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRYeXo2NVRvUDMuanNcbnZhciBjb252ZXJ0WHl6NjVUb1AzID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDIuNDkzNDk2OTExOTQxNDI2MyAtIHkgKiAuOTMxMzgzNjE3OTE5MTI0MiAtIC40MDI3MTA3ODQ0NTA3MTcgKiB6LFxuXHRcdGc6IHggKiAtLjgyOTQ4ODk2OTU2MTU3NDkgKyB5ICogMS43NjI2NjQwNjAzMTgzNDY1ICsgLjAyMzYyNDY4NTg0MTk0MzYgKiB6LFxuXHRcdGI6IHggKiAuMDM1ODQ1ODMwMjQzNzg0NSAtIHkgKiAuMDc2MTcyMzg5MjY4MDQxOCArIC45NTY4ODQ1MjQwMDc2ODcxICogelxuXHR9LCBcInAzXCIpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInAzXCIsXG5cdHBhcnNlOiBbXCJkaXNwbGF5LXAzXCJdLFxuXHRzZXJpYWxpemU6IFwiZGlzcGxheS1wM1wiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1AzKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvUDNcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRQM1RvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydFAzVG9YeXo2NVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0WHl6NTBUb1Byb3Bob3RvLmpzXG52YXIgZ2FtbWEkMSA9ICh2KSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxIC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxIC8gMS44KTtcblx0cmV0dXJuIDE2ICogdjtcbn07XG52YXIgY29udmVydFh5ejUwVG9Qcm9waG90byA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdFx0cjogZ2FtbWEkMSh4ICogMS4zNDU3ODY4ODE2NDcxNTg1IC0geSAqIC4yNTU1NzIwODczNzk3OTQ2IC0gLjA1MTEwMTg2NDk3NTU0NTMgKiB6KSxcblx0XHRnOiBnYW1tYSQxKHggKiAtLjU0NDYzMDcwNTEyNDkwMTkgKyB5ICogMS41MDgyNDc3NDI4NDUxNDY2ICsgLjAyMDUyNzQ0NzQzNjQyMTQgKiB6KSxcblx0XHRiOiBnYW1tYSQxKHggKiAwICsgeSAqIDAgKyAxLjIxMTk2NzU0NTYzODk0NTIgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLmpzXG52YXIgbGluZWFyaXplJDEgPSAodiA9IDApID0+IHtcblx0bGV0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID49IDE2IC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxLjgpO1xuXHRyZXR1cm4gdiAvIDE2O1xufTtcbnZhciBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwID0gKHByb3Bob3RvKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplJDEocHJvcGhvdG8ucik7XG5cdGxldCBnID0gbGluZWFyaXplJDEocHJvcGhvdG8uZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDEocHJvcGhvdG8uYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC43OTc3NjY2NDQ5MDA2NDIzICogciArIC4xMzUxODEyOTc0MDA1MzMxICogZyArIC4wMzEzNDc3MzQxMjgzOTIyICogYixcblx0XHR5OiAuMjg4MDc0ODI4ODE5NDAxMyAqIHIgKyAuNzExODM1MjM0MjQxODczMSAqIGcgKyA4OTkzNjkzODcyNTZlLTE2ICogYixcblx0XHR6OiAwICogciArIDAgKiBnICsgLjgyNTEwNDYwMjUxMDQ2MDIgKiBiXG5cdH07XG5cdGlmIChwcm9waG90by5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBwcm9waG90by5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3Byb3Bob3RvL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDUgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicHJvcGhvdG9cIixcblx0cGFyc2U6IFtcInByb3Bob3RvLXJnYlwiXSxcblx0c2VyaWFsaXplOiBcInByb3Bob3RvLXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvKGNvbnZlcnRSZ2JUb1h5ejUwKGNvbG9yKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRQcm9waG90b1RvWHl6NTAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRQcm9waG90b1RvWHl6NTAoY29sb3IpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRYeXo2NVRvUmVjMjAyMC5qc1xudmFyIM6xJDEgPSAxLjA5OTI5NjgyNjgwOTQ0O1xudmFyIM6yJDEgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGdhbW1hID0gKHYpID0+IHtcblx0Y29uc3QgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPiDOsiQxKSByZXR1cm4gKE1hdGguc2lnbih2KSB8fCAxKSAqICjOsSQxICogTWF0aC5wb3coYWJzLCAuNDUpIC0gLjA5OTI5NjgyNjgwOTQ0MDA4KTtcblx0cmV0dXJuIDQuNSAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo2NVRvUmVjMjAyMCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInJlYzIwMjBcIixcblx0XHRyOiBnYW1tYSh4ICogMS43MTY2NTExODc5NzEyNjgzIC0geSAqIC4zNTU2NzA3ODM3NzYzOTI1IC0gLjI1MzM2NjI4MTM3MzY1OTkgKiB6KSxcblx0XHRnOiBnYW1tYSh4ICogLS42NjY2ODQzNTE4MzI0ODkzICsgeSAqIDEuNjE2NDgxMjM2NjM0OTM5NSArIC4wMTU3Njg1NDU4MTM5MTExICogeiksXG5cdFx0YjogZ2FtbWEoeCAqIC4wMTc2Mzk4NTc0NDUzMTA4IC0geSAqIC4wNDI3NzA2MTMyNTc4MDg1ICsgLjk0MjEwMzEyMTIzNTQ3MzkgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRSZWMyMDIwVG9YeXo2NS5qc1xudmFyIM6xID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiA9IC4wMTgwNTM5Njg1MTA4MDc7XG52YXIgbGluZWFyaXplID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA8IM6yICogNC41KSByZXR1cm4gdiAvIDQuNTtcblx0cmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgzrEgLSAxKSAvIM6xLCAxIC8gLjQ1KTtcbn07XG52YXIgY29udmVydFJlYzIwMjBUb1h5ejY1ID0gKHJlYzIwMjApID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUocmVjMjAyMC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUocmVjMjAyMC5nKTtcblx0bGV0IGIgPSBsaW5lYXJpemUocmVjMjAyMC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjYzNjk1ODA0ODMwMTI5MTEgKiByICsgLjE0NDYxNjkwMzU4NjIwODMgKiBnICsgLjE2ODg4MDk3NTE2NDE3MjEgKiBiLFxuXHRcdHk6IC4yNjI3MDAyMTIwMTEyNjcgKiByICsgLjY3Nzk5ODA3MTUxODg3MDggKiBnICsgLjA1OTMwMTcxNjQ2OTg2MiAqIGIsXG5cdFx0ejogMCAqIHIgKyAuMDI4MDcyNjkzMDQ5MDg3NCAqIGcgKyAxLjA2MDk4NTA1NzcxMDc5MDkgKiBiXG5cdH07XG5cdGlmIChyZWMyMDIwLmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IHJlYzIwMjAuYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDQgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicmVjMjAyMFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmVjMjAyMChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0UmVjMjAyMFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRSZWMyMDIwVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHBhcnNlOiBbXCJyZWMyMDIwXCJdLFxuXHRzZXJpYWxpemU6IFwicmVjMjAyMFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29uc3RhbnRzLmpzXG52YXIgYmlhcyA9IC4wMDM3OTMwNzMyNTUyNzU0NDkzO1xudmFyIGJpYXNfY2JydCA9IE1hdGguY2JydChiaWFzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnZlcnRSZ2JUb1h5Yi5qc1xudmFyIHRyYW5zZmVyJDEgPSAodikgPT4gTWF0aC5jYnJ0KHYpIC0gYmlhc19jYnJ0O1xudmFyIGNvbnZlcnRSZ2JUb1h5YiA9IChjb2xvcikgPT4ge1xuXHRjb25zdCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKGNvbG9yKTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyJDEoLjMgKiByICsgLjYyMiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBtID0gdHJhbnNmZXIkMSguMjMgKiByICsgLjY5MiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBzID0gdHJhbnNmZXIkMSguMjQzNDIyNjg5MjQ1NDc4MiAqIHIgKyAuMjA0NzY3NDQ0MjQ0OTY4MiAqIGcgKyAuNTUxODA5ODY2NTA5NTUzNSAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHliXCIsXG5cdFx0eDogKGwgLSBtKSAvIDIsXG5cdFx0eTogKGwgKyBtKSAvIDIsXG5cdFx0YjogcyAtIChsICsgbSkgLyAyXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0WHliVG9SZ2IuanNcbnZhciB0cmFuc2ZlciA9ICh2KSA9PiBNYXRoLnBvdyh2ICsgYmlhc19jYnJ0LCAzKTtcbnZhciBjb252ZXJ0WHliVG9SZ2IgPSAoeyB4LCB5LCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2Zlcih4ICsgeSkgLSBiaWFzO1xuXHRjb25zdCBtID0gdHJhbnNmZXIoeSAtIHgpIC0gYmlhcztcblx0Y29uc3QgcyA9IHRyYW5zZmVyKGIgKyB5KSAtIGJpYXM7XG5cdGNvbnN0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IDExLjAzMTU2NjkwNDYzOTg2MSAqIGwgLSA5Ljg2Njk0MzkwODEzMTU2MiAqIG0gLSAuMTY0NjIyOTk2NTA4Mjk5MzQgKiBzLFxuXHRcdGc6IC0zLjI1NDE0NzM4MTA3NDQyMzcgKiBsICsgNC40MTg3NzAzNzc1ODI3MjMgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRiOiAtMy42NTg4NTEyODY3MTM2ODE1ICogbCArIDIuNzEyOTIzMDQ1OTM2MDkyMiAqIG0gKyAxLjk0NTkyODI0MDc3NzU4OTUgKiBzXG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMyA9IHtcblx0bW9kZTogXCJ4eWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teHliXCJdLFxuXHRzZXJpYWxpemU6IFwiLS14eWJcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydFh5YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvWHliIH0sXG5cdHJhbmdlczoge1xuXHRcdHg6IFstLjAxNTQsIC4wMjgxXSxcblx0XHR5OiBbMCwgLjg0NTNdLFxuXHRcdGI6IFstLjI3NzgsIC4zODhdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIgPSB7XG5cdG1vZGU6IFwieHl6NTBcIixcblx0cGFyc2U6IFtcInh5ei1kNTBcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDUwXCIsXG5cdHRvTW9kZToge1xuXHRcdHJnYjogY29udmVydFh5ejUwVG9SZ2IsXG5cdFx0bGFiOiBjb252ZXJ0WHl6NTBUb0xhYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NTAsXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9YeXo1MFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk2NF0sXG5cdFx0eTogWzAsIC45OTldLFxuXHRcdHo6IFswLCAuODI1XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ejogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1h5ejUwLmpzXG52YXIgY29udmVydFh5ejY1VG9YeXo1MCA9ICh4eXo2NSkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NjU7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDEuMDQ3OTI5ODIwODQwNTQ4OCAqIHggKyAuMDIyOTQ2NzkzMzQxMDE5MSAqIHkgLSAuMDUwMTkyMjI5NTQzMTM1NiAqIHosXG5cdFx0eTogLjAyOTYyNzgxNTY4ODE1OTMgKiB4ICsgLjk5MDQzNDQ4NDU3MzI0OSAqIHkgLSAuMDE3MDczODI1MDI5Mzg1MSAqIHosXG5cdFx0ejogLS4wMDkyNDMwNTgxNTI1OTEyICogeCArIC4wMTUwNTUxNDQ4OTY1Nzc5ICogeSArIC43NTE4NzQyODk5NTgwMDA4ICogelxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NTBUb1h5ejY1LmpzXG52YXIgY29udmVydFh5ejUwVG9YeXo2NSA9ICh4eXo1MCkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NTA7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC45NTU0NzM0NTI3MDQyMTgyICogeCAtIC4wMjMwOTg1MzY4NzQyNjE0ICogeSArIC4wNjMyNTkzMDg2NjEwMjE3ICogeixcblx0XHR5OiAtLjAyODM2OTcwNjk2MzIwODEgKiB4ICsgMS4wMDk5OTU0NTgwMDU4MjI2ICogeSArIC4wMjEwNDEzOTg5NjY5NDMgKiB6LFxuXHRcdHo6IC4wMTIzMTQwMDE2ODgzMTk5ICogeCAtIC4wMjA1MDc2OTY0MzM0Nzc5ICogeSArIDEuMzMwMzY1OTM2NjA4MDc1MyAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMSA9IHtcblx0bW9kZTogXCJ4eXo2NVwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo2NVRvUmdiLFxuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NjVUb1h5ejUwXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9YeXo2NSxcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9YeXo2NVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk1XSxcblx0XHR5OiBbMCwgMV0sXG5cdFx0ejogWzAsIDEuMDg4XVxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wieHl6XCIsIFwieHl6LWQ2NVwiXSxcblx0c2VyaWFsaXplOiBcInh5ei1kNjVcIixcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRSZ2JUb1lpcS5qc1xudmFyIGNvbnZlcnRSZ2JUb1lpcSA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieWlxXCIsXG5cdFx0eTogLjI5ODg5NTMxICogciArIC41ODY2MjI0NyAqIGcgKyAuMTE0NDgyMjMgKiBiLFxuXHRcdGk6IC41OTU5Nzc5OSAqIHIgLSAuMjc0MTc2MSAqIGcgLSAuMzIxODAxODkgKiBiLFxuXHRcdHE6IC4yMTE0NzAxNyAqIHIgLSAuNTIyNjE3MTEgKiBnICsgLjMxMTE0Njk0ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvY29udmVydFlpcVRvUmdiLmpzXG52YXIgY29udmVydFlpcVRvUmdiID0gKHsgeSwgaSwgcSwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmIChxID09PSB2b2lkIDApIHEgPSAwO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiB5ICsgLjk1NjA4NDQ1ICogaSArIC42MjA4ODg1ICogcSxcblx0XHRnOiB5IC0gLjI3MTM3NjY0ICogaSAtIC42NDg2MDU5ICogcSxcblx0XHRiOiB5IC0gMS4xMDU2MTcyNCAqIGkgKyAxLjcwMjUwMTI2ICogcVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24gPSB7XG5cdG1vZGU6IFwieWlxXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRZaXFUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1lpcSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieVwiLFxuXHRcdFwiaVwiLFxuXHRcdFwicVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS15aXFcIl0sXG5cdHNlcmlhbGl6ZTogXCItLXlpcVwiLFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbLS41OTUsIC41OTVdLFxuXHRcdHE6IFstLjUyMiwgLjUyMl1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcm91bmQuanNcbnZhciByID0gKHZhbHVlLCBwcmVjaXNpb24pID0+IE1hdGgucm91bmQodmFsdWUgKiAocHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbikpKSAvIHByZWNpc2lvbjtcbnZhciByb3VuZCA9IChwcmVjaXNpb24gPSA0KSA9PiAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHIodmFsdWUsIHByZWNpc2lvbikgOiB2YWx1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZm9ybWF0dGVyLmpzXG52YXIgdHdvRGVjaW1hbHMgPSByb3VuZCgyKTtcbnZhciBjbGFtcCQxID0gKHZhbHVlKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG52YXIgZml4dXAgPSAodmFsdWUpID0+IE1hdGgucm91bmQoY2xhbXAkMSh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBQQVBFUl9MX1NQTElUID0gLjUyO1xudmFyIFBBUEVSX0NIUk9NQV9DQVAgPSAuMDI1O1xudmFyIEZBTExCQUNLX1BBUEVSID0ge1xuXHR1bmRlcmx5aW5nOiBcIiMxNjE2MWFcIixcblx0Y29udHJhc3Q6IFwiI2Y3ZjdmOFwiXG59O1xudmFyIGxhc3RMaXZlUGFwZXIgPSBudWxsO1xudmFyIFVTQUJMRV9MVU1BX01JTiA9IC4wMztcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIGNsYW1wID0gKG4sIGxvLCBoaSkgPT4gTWF0aC5taW4oaGksIE1hdGgubWF4KGxvLCBuKSk7XG52YXIgaGV4T2tsY2ggPSAobCwgYywgaCwgZmFsbGJhY2spID0+IGZvcm1hdEhleCh7XG5cdG1vZGU6IFwib2tsY2hcIixcblx0bCxcblx0Yyxcblx0aFxufSkgfHwgZmFsbGJhY2s7XG52YXIgcmdiVG9TYW1wbGUgPSAocmdiKSA9PiB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IHJnYjtcblx0aWYgKCFbXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0XS5ldmVyeSgobikgPT4gTnVtYmVyLmlzRmluaXRlKG4pKSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGhleCA9IGZvcm1hdEhleCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0aWYgKCFoZXgpIHJldHVybiBudWxsO1xuXHRjb25zdCBvayA9IG9rbGNoKHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJnYixcblx0XHRoZXgsXG5cdFx0bDogb2s/LmwgPz8gLjUsXG5cdFx0Yzogb2s/LmMgPz8gMCxcblx0XHRoOiBvaz8uaCA/PyAwXG5cdH07XG59O1xudmFyIHBhcGVyTEZyb21IZXggPSAoaGV4KSA9PiBva2xjaChoZXgpPy5sID8/IC40O1xudmFyIGhhbG9Gb3JQYXBlciA9IChkYXJrUGFwZXIpID0+IGRhcmtQYXBlciA/IHtcblx0c2hhZG93OiBcInJnYigwIDAgMCAvIDAuODgpXCIsXG5cdGdsb3c6IFwicmdiKDAgMCAwIC8gMC40NSlcIlxufSA6IHtcblx0c2hhZG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuNzIpXCIsXG5cdGdsb3c6IFwicmdiKDI1NSAyNTUgMjU1IC8gMC4zNSlcIlxufTtcbnZhciBpc1VzYWJsZVBhcGVyTHVtYSA9IChsdW1hKSA9PiBOdW1iZXIuaXNGaW5pdGUobHVtYSkgJiYgbHVtYSA+PSBVU0FCTEVfTFVNQV9NSU4gJiYgbHVtYSA8PSAxO1xudmFyIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMgPSAoc2FtcGxlcywgcGl4ZWxMdW1hKSA9PiB7XG5cdGlmICghc2FtcGxlcy5sZW5ndGggJiYgcGl4ZWxMdW1hID09IG51bGwpIHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdGNvbnN0IGxzID0gc2FtcGxlcy5tYXAoKHMpID0+IHMubCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXHRjb25zdCBtZWFuTCA9IHNhbXBsZXMubGVuZ3RoID8gc2FtcGxlcy5yZWR1Y2UoKHN1bSwgcykgPT4gc3VtICsgcy5sLCAwKSAvIHNhbXBsZXMubGVuZ3RoIDogcGl4ZWxMdW1hO1xuXHRjb25zdCBtZWRpYW5MID0gbHMubGVuZ3RoID8gbHNbTWF0aC5mbG9vcihscy5sZW5ndGggLyAyKV0gOiBtZWFuTDtcblx0Y29uc3QgcGFwZXJMID0gY2xhbXAocGl4ZWxMdW1hICE9IG51bGwgJiYgaXNVc2FibGVQYXBlckx1bWEocGl4ZWxMdW1hKSA/IHBpeGVsTHVtYSA6IE1hdGgubWF4KG1lYW5MLCBtZWRpYW5MKSwgLjA4LCAuOTQpO1xuXHRjb25zdCBwYXBlciA9IHNhbXBsZXMubGVuZ3RoID8gWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGEuYyAtIGIuYyB8fCBNYXRoLmFicyhhLmwgLSBwYXBlckwpIC0gTWF0aC5hYnMoYi5sIC0gcGFwZXJMKSlbMF0gOiBudWxsO1xuXHRjb25zdCBwYXBlckMgPSBwYXBlciA/IE1hdGgubWluKFBBUEVSX0NIUk9NQV9DQVAsIE1hdGgubWF4KDAsIHBhcGVyLmMgKiAuMikpIDogMDtcblx0Y29uc3QgaCA9IHBhcGVyPy5oIHx8IDA7XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTCA8IFBBUEVSX0xfU1BMSVQ7XG5cdHJldHVybiB7XG5cdFx0dW5kZXJseWluZzogaGV4T2tsY2gocGFwZXJMLCBwYXBlckMsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLnVuZGVybHlpbmcgOiBcIiNlOGU2ZTJcIiksXG5cdFx0Y29udHJhc3Q6IGhleE9rbGNoKGRhcmtQYXBlciA/IC45MyA6IC4xNiwgLjAwOCwgaCwgZGFya1BhcGVyID8gRkFMTEJBQ0tfUEFQRVIuY29udHJhc3QgOiBcIiMxNDE0MTZcIilcblx0fTtcbn07XG52YXIgc2FtcGxlSW1hZ2VNZWFuTHVtYSA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiA/IGltZ1VSTCA6IGF3YWl0IChhd2FpdCBmZXRjaChpbWdVUkwpKS5ibG9iKCk7XG5cdFx0aWYgKCFibG9iIHx8IGJsb2Iuc2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHRjb25zdCB3ID0gNDg7XG5cdFx0Y29uc3QgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoYml0bWFwLmhlaWdodCAvIE1hdGgubWF4KDEsIGJpdG1hcC53aWR0aCkgKiB3KSk7XG5cdFx0Y29uc3QgY2FudmFzID0gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBPZmZzY3JlZW5DYW52YXModywgaCkgOiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHtcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoXG5cdFx0fSk7XG5cdFx0aWYgKCEoY2FudmFzIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSkge1xuXHRcdFx0Y2FudmFzLndpZHRoID0gdztcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBoO1xuXHRcdH1cblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGlmICghY3R4KSB7XG5cdFx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCB3LCBoKTtcblx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGE7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0bGV0IG4gPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTYpIHtcblx0XHRcdGlmICgoZGF0YVtpICsgM10gPz8gMjU1KSA8IDE2KSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHIgPSBkYXRhW2ldIC8gMjU1O1xuXHRcdFx0Y29uc3QgZyA9IGRhdGFbaSArIDFdIC8gMjU1O1xuXHRcdFx0Y29uc3QgYiA9IGRhdGFbaSArIDJdIC8gMjU1O1xuXHRcdFx0c3VtICs9IC4yMTI2ICogciArIC43MTUyICogZyArIC4wNzIyICogYjtcblx0XHRcdG4rKztcblx0XHR9XG5cdFx0aWYgKG4gPCA4KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBsdW1hID0gc3VtIC8gbjtcblx0XHRyZXR1cm4gaXNVc2FibGVQYXBlckx1bWEobHVtYSkgPyBsdW1hIDogbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSA9IChsdW1hKSA9PiB7XG5cdHJldHVybiBsdW1hIDw9IFBBUEVSX0xfU1BMSVQgPyB7IC4uLkZBTExCQUNLX1BBUEVSIH0gOiB7XG5cdFx0dW5kZXJseWluZzogXCIjZThlNmUyXCIsXG5cdFx0Y29udHJhc3Q6IFwiIzE0MTQxNlwiXG5cdH07XG59O1xudmFyIGhhc1dhbGxwYXBlclBhcGVyID0gKHNlZWRzKSA9PiBCb29sZWFuKHNlZWRzLnVuZGVybHlpbmcgJiYgc2VlZHMuY29udHJhc3QpO1xudmFyIHJhbmtXYWxscGFwZXJTZWVkcyA9IChjZW50cm9pZHMsIHBpeGVsTHVtYSkgPT4ge1xuXHRjb25zdCBzYW1wbGVzID0gY2VudHJvaWRzLm1hcChyZ2JUb1NhbXBsZSkuZmlsdGVyKEJvb2xlYW4pO1xuXHRpZiAoIXNhbXBsZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYWNjZW50UG9vbCA9IHNhbXBsZXMuZmlsdGVyKChzKSA9PiBzLmwgPj0gLjE4ICYmIHMubCA8PSAuODggJiYgcy5jID49IC4wMikuc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jIHx8IE1hdGguYWJzKGIubCAtIC41NSkgLSBNYXRoLmFicyhhLmwgLSAuNTUpKTtcblx0Y29uc3QgcG9vbCA9IGFjY2VudFBvb2wubGVuZ3RoID8gYWNjZW50UG9vbCA6IFsuLi5zYW1wbGVzXS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMpO1xuXHRjb25zdCBwcmltYXJ5ID0gcG9vbFswXTtcblx0aWYgKCFwcmltYXJ5KSByZXR1cm4gbnVsbDtcblx0Y29uc3QgaHVlRGlzdCA9IChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgZCA9IE1hdGguYWJzKGEgLSBiKSAlIDM2MDtcblx0XHRyZXR1cm4gZCA+IDE4MCA/IDM2MCAtIGQgOiBkO1xuXHR9O1xuXHRjb25zdCBwaWNrTmV4dCA9ICh1c2VkKSA9PiB7XG5cdFx0Y29uc3QgcmVzdCA9IHBvb2wuZmlsdGVyKChzKSA9PiAhdXNlZC5pbmNsdWRlcyhzKSk7XG5cdFx0aWYgKCFyZXN0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgYmFzZSA9IHVzZWRbdXNlZC5sZW5ndGggLSAxXSA/PyBwcmltYXJ5O1xuXHRcdFx0Y29uc3QgbnVkZ2VkID0gZm9ybWF0SGV4KHtcblx0XHRcdFx0bW9kZTogXCJva2xjaFwiLFxuXHRcdFx0XHRsOiBNYXRoLm1pbiguODUsIE1hdGgubWF4KC4yLCBiYXNlLmwgKyAodXNlZC5sZW5ndGggPT09IDEgPyAtLjEyIDogLjEpKSksXG5cdFx0XHRcdGM6IE1hdGgubWF4KC4wNCwgYmFzZS5jICogLjg1KSxcblx0XHRcdFx0aDogYmFzZS5oXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmJhc2UsXG5cdFx0XHRcdGhleDogbnVkZ2VkIHx8IGJhc2UuaGV4LFxuXHRcdFx0XHRsOiBiYXNlLmxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBbLi4ucmVzdF0uc29ydCgoYSwgYikgPT4gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYi5oLCB1LmgpKSkgLSBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChhLmgsIHUuaCkpKSB8fCBiLmMgLSBhLmMpWzBdID8/IHJlc3RbMF07XG5cdH07XG5cdGNvbnN0IHNlY29uZGFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5XSk7XG5cdGNvbnN0IHRlcnRpYXJ5ID0gcGlja05leHQoW3ByaW1hcnksIHNlY29uZGFyeV0pO1xuXHRjb25zdCBwYXBlciA9IGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMoc2FtcGxlcywgcGl4ZWxMdW1hKTtcblx0cmV0dXJuIHtcblx0XHRwcmltYXJ5OiBwcmltYXJ5LmhleCxcblx0XHRzZWNvbmRhcnk6IHNlY29uZGFyeS5oZXgsXG5cdFx0dGVydGlhcnk6IHRlcnRpYXJ5LmhleCxcblx0XHQuLi5wYXBlclxuXHR9O1xufTtcbnZhciB0aGVtZUhvc3RzID0gKCkgPT4ge1xuXHRjb25zdCBub2RlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdG5vZGVzLmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVudi1zaGVsbC1yb290LCAud2YtZGVtby1yb290LCB1aS13aW5kb3dcIikuZm9yRWFjaCgoZWwpID0+IG5vZGVzLmFkZChlbCkpO1xuXHRyZXR1cm4gWy4uLm5vZGVzXTtcbn07XG52YXIgd2FsbHBhcGVyU2VlZHNNYXlQYWludCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHNyYyA9IFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jb2xvclNvdXJjZSB8fCBcIlwiKTtcblx0aWYgKCFzcmMpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gc3JjID09PSBcIndhbGxwYXBlclwiIHx8IHNyYyA9PT0gXCJzcGVlZC1kaWFsXCIgfHwgc3JjID09PSBcInN5c3RlbS13YWxscGFwZXJcIjtcbn07XG52YXIgaXNWYWxpZENvbG9yID0gKGNvbG9yKSA9PiBCb29sZWFuKHBhcnNlKGNvbG9yKSk7XG52YXIgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyA9IChwYXBlciwgZXh0cmFIb3N0cyA9IFtdKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgZGFya1BhcGVyID0gcGFwZXJMRnJvbUhleChwYXBlci51bmRlcmx5aW5nKSA8IFBBUEVSX0xfU1BMSVQ7XG5cdGNvbnN0IHsgc2hhZG93LCBnbG93IH0gPSBoYWxvRm9yUGFwZXIoZGFya1BhcGVyKTtcblx0Y29uc3QgaG9zdHMgPSBuZXcgU2V0KHRoZW1lSG9zdHMoKSk7XG5cdGZvciAoY29uc3QgZWwgb2YgZXh0cmFIb3N0cykgaG9zdHMuYWRkKGVsKTtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIudW5kZXJseWluZykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIuY29udHJhc3QpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKHNoYWRvdykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IoZ2xvdykpIHJldHVybjtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHR9XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0Z2xvYmFsUXVlcnkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci1jb250cmFzdC1jb2xvclwiLCBwYXBlci5jb250cmFzdCk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1lbnYtbGF1bmNoZXItZmdcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLWdsb3dcIiwgZ2xvdyk7XG59O1xudmFyIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSA9IChuYW1lLCBpbml0aWFsVmFsdWUgPSBcIiM1YTllYzhcIikgPT4ge1xuXHR0cnkge1xuXHRcdENTUz8ucmVnaXN0ZXJQcm9wZXJ0eT8uKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRzeW50YXg6IFwiPGNvbG9yPlwiLFxuXHRcdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0XHRpbml0aWFsVmFsdWVcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHt9XG59O1xudmFyIHBlcnNpc3RMaXZlUGFwZXIgPSAocGFwZXIpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRpZiAoIWNhY2hlZCkgcmV0dXJuO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHR1bmRlcmx5aW5nOiBwYXBlci51bmRlcmx5aW5nLFxuXHRcdFx0Y29udHJhc3Q6IHBhcGVyLmNvbnRyYXN0XG5cdFx0fSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSA9IChsdW1hLCBleHRyYUhvc3RzID0gW10pID0+IHtcblx0aWYgKCFpc1VzYWJsZVBhcGVyTHVtYShsdW1hKSkge1xuXHRcdGlmIChsYXN0TGl2ZVBhcGVyKSB7XG5cdFx0XHRhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKGxhc3RMaXZlUGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRcdFx0cmV0dXJuIGxhc3RMaXZlUGFwZXI7XG5cdFx0fVxuXHRcdHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdH1cblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hKGx1bWEpO1xuXHRsYXN0TGl2ZVBhcGVyID0gcGFwZXI7XG5cdGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMocGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRwZXJzaXN0TGl2ZVBhcGVyKHBhcGVyKTtcblx0cmV0dXJuIHBhcGVyO1xufTtcbnZhciBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMgPSAoc2VlZHMpID0+IHtcblx0Y29uc3QgbmV4dCA9IGxhc3RMaXZlUGFwZXIgPyB7XG5cdFx0Li4uc2VlZHMsXG5cdFx0Li4ubGFzdExpdmVQYXBlclxuXHR9IDogc2VlZHM7XG5cdHRyeSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KG5leHQpKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUklNQVJZX1NUT1JBR0VfS0VZLCBuZXh0LnByaW1hcnkpO1xuXHR9IGNhdGNoIHt9XG5cdGlmIChoYXNXYWxscGFwZXJQYXBlcihuZXh0KSkgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyhuZXh0KTtcblx0aWYgKCF3YWxscGFwZXJTZWVkc01heVBhaW50KCkpIHJldHVybjtcblx0Zm9yIChjb25zdCBob3N0IG9mIHRoZW1lSG9zdHMoKSkgZm9yIChjb25zdCBbcHJvcCwga2V5XSBvZiBTRUVEX1BST1BTKSBzZXRTdHlsZVByb3BlcnR5KGhvc3QsIHByb3AsIG5leHRba2V5XSk7XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQucHJpbWFyeSkpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IobmV4dC5zZWNvbmRhcnkpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQudGVydGlhcnkpKSByZXR1cm47XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5LCBodG1sLCAud2YtZGVtby1yb290LCB1aS13aW5kb3csIC52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShlbCwgXCItLWNvbG9yLXByaW1hcnlcIiwgbmV4dC5wcmltYXJ5KTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGVsLCBcIi0tYmFzZS1jb2xvclwiLCBuZXh0LnByaW1hcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci10ZXJ0aWFyeVwiLCBuZXh0LnRlcnRpYXJ5KTtcblx0fSk7XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1wcmltYXJ5XCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXNlLWNvbG9yXCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItdGVydGlhcnlcIiwgbmV4dC50ZXJ0aWFyeSk7XG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidTItdGhlbWUtY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0c291cmNlOiBcIndhbGxwYXBlclwiLFxuXHRcdHNlZWRzOiBuZXh0XG5cdH0gfSkpO1xufTtcbnZhciBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVkpO1xuXHRcdGlmICghcmF3KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0aWYgKCFwYXJzZWQ/LnByaW1hcnkgfHwgIXBhcnNlZD8uc2Vjb25kYXJ5IHx8ICFwYXJzZWQ/LnRlcnRpYXJ5KSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciA9IGFzeW5jIChpbWdVUkwsIG9wdHMpID0+IHtcblx0Y29uc3Qgc3JjS2V5ID0gdHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIiA/IGltZ1VSTC5zbGljZSgwLCAyMDQ4KSA6IGBibG9iOiR7aW1nVVJMLm5hbWUgfHwgXCJ3YWxscGFwZXJcIn06JHtpbWdVUkwuc2l6ZX1gO1xuXHRpZiAodHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGlmICghaW1nVVJMKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmZhaWxlZFdhbGxwYXBlclNyY1wiKV0/LmhhcyhpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoaW1nVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAhL15kYXRhOmltYWdlXFwvL2kudGVzdChpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoL3ZpZGVvXFwvbXAydC9pLnRlc3QoaW1nVVJMKSkgcmV0dXJuIG51bGw7XG5cdFx0aWYgKC9cXC9hc3NldHNcXC93YWxscGFwZXJcXC5qcGcoPzokfFs/I10pL2kudGVzdChpbWdVUkwpKSB0cnkge1xuXHRcdFx0Y29uc3Qgc2t1ID0gU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcFNrdSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgaG9zdCA9IFN0cmluZyhnbG9iYWxUaGlzLmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHNrdSA9PT0gXCJwcm9jZXNzXCIgfHwgaG9zdCA9PT0gXCJwcm9jZXNzLnUycmUuc3BhY2VcIiB8fCBob3N0ID09PSBcIndvcmtjZW50ZXIudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwiYWkudTJyZS5zcGFjZVwiKSByZXR1cm4gbnVsbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbWdVUkwgaW5zdGFuY2VvZiBCbG9iICYmIGltZ1VSTC50eXBlICYmICFpbWdVUkwudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpICYmIGltZ1VSTC50eXBlICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgbGl2ZUx1bWEgPSBhd2FpdCBzYW1wbGVJbWFnZU1lYW5MdW1hKGltZ1VSTCk7XG5cdGlmIChsaXZlTHVtYSAhPSBudWxsKSBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEobGl2ZUx1bWEpO1xuXHRpZiAoIW9wdHM/LmZvcmNlKSB0cnkge1xuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXQUxMUEFQRVJfVVJMX0tFWSkgPT09IHNyY0tleSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdFx0XHR9IDogY2FjaGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdGNvbnN0IGNlbnRyb2lkcyA9IGF3YWl0IGdldERvbWluYW50Q29sb3JzKGltZ1VSTCk7XG5cdFx0Y29uc3Qgc2VlZHMgPSByYW5rV2FsbHBhcGVyU2VlZHMoY2VudHJvaWRzLCBsaXZlTHVtYSA/PyB2b2lkIDApO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdC4uLnNlZWRzLFxuXHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdH0gOiBzZWVkcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIGZhaWxlZFwiLCBlcnIpO1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRpZiAoY2FjaGVkKSBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9jYW52YXMvQ2FudmFzLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFVTRVJfV0FMTFBBUEVSX1BBVEggPSBcIi9hc3NldHMvdXNlci13YWxscGFwZXJcIjtcbnZhciBVU0VSX1dBTExQQVBFUl9DQUNIRSA9IFwiY3dzcC11c2VyLXdhbGxwYXBlclwiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciB3YWxscGFwZXJFcG9jaCA9IDA7XG52YXIgY3VycmVudE9yaWVudE51bWJlciA9ICgpID0+IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG52YXIgaXNJZGJQb2ludGVyID0gKHBvaW50ZXIpID0+IHBvaW50ZXIgPT09IFwiaWRiOnJzLXdhbGxwYXBlclwiIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImlkYjpcIik7XG52YXIgaXNVbnVzYWJsZVN0b3JlZFVybCA9IChwb2ludGVyKSA9PiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAocG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgfHwgIS9eZGF0YTppbWFnZVxcLy9pLnRlc3QocG9pbnRlcikpO1xudmFyIHJldm9rZUxpdmVPYmplY3RVcmwgPSAoKSA9PiB7XG5cdHdhbGxwYXBlckVwb2NoICs9IDE7XG5cdGlmIChsaXZlT2JqZWN0VXJsICYmIGxpdmVPYmplY3RVcmwuc3RhcnRzV2l0aChcImJsb2I6XCIpKSB0cnkge1xuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwobGl2ZU9iamVjdFVybCk7XG5cdH0gY2F0Y2gge31cblx0bGl2ZU9iamVjdFVybCA9IG51bGw7XG59O1xudmFyIGFkb3B0V2FsbHBhcGVyQmxvYiA9IChibG9iLCBlcG9jaCkgPT4ge1xuXHRpZiAoZXBvY2ggIT09IHdhbGxwYXBlckVwb2NoKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0aWYgKGxpdmVPYmplY3RVcmwpIHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIG9wZW5XYWxscGFwZXJEYiA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0aWYgKHR5cGVvZiBpbmRleGVkREIgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRyZWplY3QoLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcImluZGV4ZWREQiB1bmF2YWlsYWJsZVwiKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKElEQl9OQU1FLCAxKTtcblx0cmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcblx0XHRjb25zdCBkYiA9IHJlcS5yZXN1bHQ7XG5cdFx0aWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKElEQl9TVE9SRSkpIGRiLmNyZWF0ZU9iamVjdFN0b3JlKElEQl9TVE9SRSk7XG5cdH07XG5cdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xuXHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBvcGVuIGZhaWxlZFwiKSk7XG59KTtcbnZhciBpZGJQdXRXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRjb25zdCBkYiA9IGF3YWl0IG9wZW5XYWxscGFwZXJEYigpO1xuXHR0cnkge1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWR3cml0ZVwiKTtcblx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkucHV0KGJsb2IsIElEQl9LRVkpO1xuXHRcdFx0dHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcblx0XHRcdHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBwdXQgZmFpbGVkXCIpKTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRkYi5jbG9zZSgpO1xuXHR9XG59O1xudmFyIGlkYkdldFdhbGxwYXBlciA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZ2V0KElEQl9LRVkpO1xuXHRcdFx0cmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdiA9IHJlcS5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodiBpbnN0YW5jZW9mIEJsb2IgPyB2IDogbnVsbCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZ2V0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBjYWNoZVVzZXJXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkgcmV0dXJuO1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKFVTRVJfV0FMTFBBUEVSX0NBQ0hFKTtcblx0Y29uc3QgdHlwZSA9IGJsb2IudHlwZSAmJiBibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSA/IGJsb2IudHlwZSA6IFwiaW1hZ2UvanBlZ1wiO1xuXHRhd2FpdCBjYWNoZS5wdXQobmV3IFJlcXVlc3QoVVNFUl9XQUxMUEFQRVJfUEFUSCksIG5ldyBSZXNwb25zZShibG9iLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogdHlwZSB9IH0pKTtcbn07XG52YXIgY2xlYXJDYWNoZWRVc2VyV2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGF3YWl0IChhd2FpdCBjYWNoZXMub3BlbihVU0VSX1dBTExQQVBFUl9DQUNIRSkpLmRlbGV0ZShuZXcgUmVxdWVzdChVU0VSX1dBTExQQVBFUl9QQVRIKSk7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlckJsb2JVcmwgPSBhc3luYyAoKSA9PiB7XG5cdGlmIChsaXZlT2JqZWN0VXJsKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0Y29uc3QgZXBvY2ggPSB3YWxscGFwZXJFcG9jaDtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCk7XG5cdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIGVwb2NoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBpc0lubGluZVBheWxvYWQgPSAodXJsKSA9PiB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHVybC5zdGFydHNXaXRoKFwiYmxvYjpcIik7XG52YXIgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRpZiAoaXNJZGJQb2ludGVyKHBvaW50ZXIpIHx8IGlzVW51c2FibGVTdG9yZWRVcmwocG9pbnRlcikpIHtcblx0XHRjb25zdCB1cmwgPSBhd2FpdCByZXN0b3JlV2FsbHBhcGVyQmxvYlVybCgpO1xuXHRcdGlmICh1cmwpIHtcblx0XHRcdGlmICghaXNJZGJQb2ludGVyKHBvaW50ZXIpKSB3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0XHRcdHJldHVybiB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlcigpID8gXCJcIiA6IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRpZiAocHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIoKSAmJiAoIXBvaW50ZXIgfHwgcG9pbnRlciA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSkgcmV0dXJuIFwiXCI7XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgd2FybVByb21pc2UgPSBudWxsO1xudmFyIHdhcm1BcHBXYWxscGFwZXIgPSAoKSA9PiB7XG5cdGlmICh3YXJtUHJvbWlzZSkgcmV0dXJuIHdhcm1Qcm9taXNlO1xuXHR3YXJtUHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRcdGlmIChpc0lkYlBvaW50ZXIocG9pbnRlcikgfHwgaXNVbnVzYWJsZVN0b3JlZFVybChwb2ludGVyKSkge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHRcdFx0Y29uc3QgdXJsID0gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIHdhbGxwYXBlckVwb2NoKTtcblx0XHRcdHJldHVybiB1cmwgPyB7XG5cdFx0XHRcdHVybCxcblx0XHRcdFx0YmxvYlxuXHRcdFx0fSA6IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVybCA9IHBvaW50ZXIgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRcdGlmICghdXJsIHx8IHVybCA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSB0cnkge1xuXHRcdFx0aWYgKFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmRhdGFzZXQ/LmN3c3BTa3UgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9jZXNzXCIpIHJldHVybiBudWxsO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghdXJsKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCByc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KTtcblx0XHRpZiAoIXJzcC5vaykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0aWYgKCFibG9iLnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybCxcblx0XHRcdGJsb2Jcblx0XHR9O1xuXHR9KSgpLmNhdGNoKCgpID0+IG51bGwpO1xuXHRyZXR1cm4gd2FybVByb21pc2U7XG59O1xudmFyIHdhcm1lZEJsb2JGb3IgPSBhc3luYyAoc3JjKSA9PiB7XG5cdGlmICghd2FybVByb21pc2UgfHwgIXNyYykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHdhcm0gPSBhd2FpdCB3YXJtUHJvbWlzZTtcblx0aWYgKCF3YXJtKSByZXR1cm4gbnVsbDtcblx0aWYgKHdhcm0udXJsID09PSBzcmMgfHwgd2FybS51cmwgPT09IHNyYy5zcGxpdChcIiNcIilbMF0pIHJldHVybiB3YXJtLmJsb2I7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciA9ICgpID0+IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xudmFyIHN5bmNDYW52YXNPcmllbnQgPSAoY2FudmFzKSA9PiB7XG5cdGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG4gPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyhuKTtcblx0XHRpZiAoY2FudmFzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgIT09IHMpIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLm9yaWVudCA9IG47XG5cdH07XG5cdGFwcGx5KCk7XG5cdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcyhhcHBseSk7XG59O1xudmFyIHN5bmNBcHBXYWxscGFwZXJPcmllbnQgPSAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKS5mb3JFYWNoKChjYW52YXMpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdH0pO1xufTtcbnZhciByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQgPSAoKSA9PiB7XG5cdHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKS50aGVuKCh1cmwpID0+IHtcblx0XHRzeW5jQXBwV2FsbHBhcGVyT3JpZW50KCk7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdH0pO1xufTtcbnZhciBzeW5jR2xvd1RvVGhlbWUgPSAoZ2xvdykgPT4ge1xuXHRnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY29sb3ItcHJpbWFyeVwiKS50cmltKCk7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbn07XG52YXIgcGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzID0gKHBhaW50VXJsKSA9PiB7XG5cdGNvbnN0IGNhbnZhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCIpO1xuXHRjb25zdCBvcmllbnQgPSBTdHJpbmcoY3VycmVudE9yaWVudE51bWJlcigpKTtcblx0Y2FudmFzZXMuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHBhaW50VXJsKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgb3JpZW50KTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgb3JpZW50KTtcblx0fSk7XG59O1xudmFyIGRhdGFVcmxUb0Jsb2IgPSBhc3luYyAoZGF0YVVybCkgPT4ge1xuXHRyZXR1cm4gKGF3YWl0IGZldGNoKGRhdGFVcmwpKS5ibG9iKCk7XG59O1xudmFyIHNldEFwcFdhbGxwYXBlckZyb21CbG9iID0gYXN5bmMgKGJsb2IpID0+IHtcblx0aWYgKCEoYmxvYiBpbnN0YW5jZW9mIEJsb2IpIHx8IGJsb2Iuc2l6ZSA8PSAwKSB7XG5cdFx0c2V0QXBwV2FsbHBhcGVyKERFRkFVTFRfV0FMTFBBUEVSX1VSTCk7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMobGl2ZU9iamVjdFVybCk7XG5cdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKGJsb2IsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaWRiUHV0V2FsbHBhcGVyKGJsb2IpO1xuXHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIElEQiBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0Y29uc3QgZGF0YVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQgfHwgXCJcIikpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChyZWFkZXIuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcInJlYWQgZmFpbGVkXCIpKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChkYXRhVXJsICYmICF3cml0ZVN0b3JhZ2VQb2ludGVyKGRhdGFVcmwpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIGxvY2FsU3RvcmFnZSBwZXJzaXN0IGFsc28gZmFpbGVkIChxdW90YT8pXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHR0cnkge1xuXHRcdGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcImN3c3Atd2FsbHBhcGVyLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdFx0cG9pbnRlcjogV0FMTFBBUEVSX0lEQl9NQVJLRVIsXG5cdFx0XHR1cmw6IGxpdmVPYmplY3RVcmxcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcbn07XG52YXIgaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyID0gKGNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCByb290ID0gY29udGFpbmVyO1xuXHRyb290LnJlcGxhY2VDaGlsZHJlbigpO1xuXHRyb290LmRhdGFzZXQuYXBwTGF5ZXIgPSBcImNhbnZhc1wiO1xuXHRyb290LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRyb290LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRyb290LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGdsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRnbG93LmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fZ2xvd1wiO1xuXHRnbG93LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRnbG93LnN0eWxlLmluc2V0ID0gXCItMjAlXCI7XG5cdGdsb3cuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwgeyBpczogXCJ1aS1jYW52YXNcIiB9KTtcblx0Y2FudmFzLmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19faW1hZ2UgdWktY2FudmFzXCI7XG5cdGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Y2FudmFzLnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdGNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdGNhbnZhcy5zdHlsZS5pbmxpbmVTaXplID0gXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCI7XG5cdGNhbnZhcy5zdHlsZS5ibG9ja1NpemUgPSBcIm1pbigxMDBjcWIsIDEwMGR2YilcIjtcblx0Y2FudmFzLnN0eWxlLm1heElubGluZVNpemUgPSBcIm1pbigxMDBjcWksIDEwMGR2aSlcIjtcblx0Y2FudmFzLnN0eWxlLm1heEJsb2NrU2l6ZSA9IFwibWluKDEwMGNxYiwgMTAwZHZiKVwiO1xuXHRjYW52YXMuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXHRjYW52YXMuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJub3JtYWxcIjtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImlzXCIsIFwidWktY2FudmFzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkeW5hbWljLXJhbmdlLWxpbWl0XCIsIFwibm8tbGltaXRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIsIFwiaW1wb3J0YW50XCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMVwiLCBcImltcG9ydGFudFwiKTtcblx0Y29uc3QgcG9zdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cG9zdGVyLmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fcG9zdGVyXCI7XG5cdHBvc3Rlci5hbHQgPSBcIlwiO1xuXHRwb3N0ZXIuZGVjb2RpbmcgPSBcImFzeW5jXCI7XG5cdHBvc3Rlci5zZXRBdHRyaWJ1dGUoXCJmZXRjaHByaW9yaXR5XCIsIFwiaGlnaFwiKTtcblx0cG9zdGVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuXHRwb3N0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdHBvc3Rlci5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRwb3N0ZXIuc3R5bGUuaW5saW5lU2l6ZSA9IFwibWluKDEwMGNxaSwgMTAwZHZpKVwiO1xuXHRwb3N0ZXIuc3R5bGUuYmxvY2tTaXplID0gXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCI7XG5cdHBvc3Rlci5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cdHBvc3Rlci5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdHBvc3Rlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdHJvb3QuYXBwZW5kKHBvc3RlciwgZ2xvdywgY2FudmFzKTtcblx0cG9zdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY3dzcC13YWxscGFwZXItcG9zdGVyXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fSwgeyBvbmNlOiB0cnVlIH0pO1xuXHRwb3N0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHtcblx0XHRpZiAocG9zdGVyLnNyYy5pbmNsdWRlcyhcIi9hc3NldHMvdXNlci13YWxscGFwZXJcIikpIHBvc3Rlci5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cdH0pO1xuXHRyZW1lbWJlck1pc3NpbmdEZWZhdWx0V2FsbHBhcGVyKCk7XG5cdGNvbnN0IHBvaW50ZXIgPSByZWFkU3RvcmFnZVBvaW50ZXIoKTtcblx0Y29uc3QgY29sZFVybCA9IGlzSWRiUG9pbnRlcihwb2ludGVyKSA/IFVTRVJfV0FMTFBBUEVSX1BBVEggOiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IFwiXCIgOiBwb2ludGVyO1xuXHRjb25zdCB3YXJtaW5nID0gd2FybUFwcFdhbGxwYXBlcigpO1xuXHRpZiAoY29sZFVybCAmJiAhZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyhjb2xkVXJsKSkge1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBjb2xkVXJsKTtcblx0XHRwb3N0ZXIuc3JjID0gY29sZFVybDtcblx0fVxuXHR3YXJtaW5nLnRoZW4oKHdhcm0pID0+IHtcblx0XHRpZiAoIXdhcm0gfHwgIXBvc3Rlci5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuXHRcdGlmICh3YXJtLnVybC5zdGFydHNXaXRoKFwiYmxvYjpcIikpIHtcblx0XHRcdHBvc3Rlci5zcmMgPSB3YXJtLnVybDtcblx0XHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCB3YXJtLnVybCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghcG9zdGVyLmdldEF0dHJpYnV0ZShcInNyY1wiKSkgcG9zdGVyLnNyYyA9IHdhcm0udXJsO1xuXHR9KTtcblx0Y29uc3QgZGlzcG9zZU9yaWVudCA9IHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0cmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUoKTtcblx0c3luY0dsb3dUb1RoZW1lKGdsb3cpO1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHdhbGxwYXBlciA9IGF3YWl0IHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKTtcblx0XHRpZiAoIXdhbGxwYXBlciB8fCBmYWlsZWRXYWxscGFwZXJTcmMuaGFzKHdhbGxwYXBlcikpIHtcblx0XHRcdHN5bmNHbG93VG9UaGVtZShnbG93KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHdhbGxwYXBlcik7XG5cdFx0aWYgKHBvc3Rlci5pc0Nvbm5lY3RlZCkgcG9zdGVyLnNyYyA9IHdhbGxwYXBlcjtcblx0XHRzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdFx0Y29uc3QgdGhlbWVTcmMgPSB3YWxscGFwZXIuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCkgfHwgd2FsbHBhcGVyIDogd2FsbHBhcGVyO1xuXHRcdGNvbnN0IGV4dHJhY3QgPSAoKSA9PiB7XG5cdFx0XHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih0aGVtZVNyYykudGhlbigoKSA9PiBzeW5jR2xvd1RvVGhlbWUoZ2xvdykpO1xuXHRcdH07XG5cdFx0Y29uc3QgcmljID0gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXHRcdGlmICh0eXBlb2YgcmljID09PSBcImZ1bmN0aW9uXCIpIHJpYyhleHRyYWN0LCB7IHRpbWVvdXQ6IDEyMDAgfSk7XG5cdFx0ZWxzZSBnbG9iYWxUaGlzLnNldFRpbWVvdXQ/LihleHRyYWN0LCAzMjApO1xuXHR9KSgpO1xuXHRyZXR1cm4ge1xuXHRcdHJvb3QsXG5cdFx0Y2FudmFzLFxuXHRcdGdsb3csXG5cdFx0ZGlzcG9zZU9yaWVudFxuXHR9O1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXIgPSAod2FsbHBhcGVyVXJsKSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gU3RyaW5nKHdhbGxwYXBlclVybCB8fCBcIlwiKS50cmltKCkgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRpZiAoaXNJbmxpbmVQYXlsb2FkKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMpIHtcblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IGF3YWl0IChhd2FpdCBmZXRjaCh2YWx1ZSkpLmJsb2IoKSA6IGF3YWl0IGRhdGFVcmxUb0Jsb2IodmFsdWUpO1xuXHRcdFx0XHRhd2FpdCBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYihibG9iKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gc2V0QXBwV2FsbHBhcGVyIGlubGluZSBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdFx0XHRjb25zdCBmYWxsYmFjayA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IERFRkFVTFRfV0FMTFBBUEVSX1VSTCA6IHZhbHVlO1xuXHRcdFx0XHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMoZmFsbGJhY2spO1xuXHRcdFx0XHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcihmYWxsYmFjaywgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KSgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZGJDbGVhcldhbGxwYXBlcigpO1xuXHRjbGVhckNhY2hlZFVzZXJXYWxscGFwZXIoKTtcblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRpZiAoIXdyaXRlU3RvcmFnZVBvaW50ZXIodmFsdWUpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIHBvaW50ZXIgd3JpdGUgZmFpbGVkXCIpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModmFsdWUpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih2YWx1ZSwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IHZhbHVlLFxuXHRcdFx0dXJsOiB2YWx1ZVxuXHRcdH0gfSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGJsb2JJbWFnZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmxvYlwiKTtcbmdsb2JhbFRoaXNbYmxvYkltYWdlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmxvYkltYWdlTWFwID0gZ2xvYmFsVGhpc1tibG9iSW1hZ2VTeW1ib2xdO1xudmFyIGRlbGF5ZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmRlbGF5ZWRcIik7XG5nbG9iYWxUaGlzW2RlbGF5ZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXSk7XG52YXIgZGVsYXllZCA9IGdsb2JhbFRoaXNbZGVsYXllZFN5bWJvbF07XG52YXIgc2hlZHVsZXJTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLnNoZWR1bGVyXCIpO1xuZ2xvYmFsVGhpc1tzaGVkdWxlclN5bWJvbF0gPz89IG1ha2VSQUZDeWNsZSgpO1xudmFyIHNoZWR1bGVyID0gZ2xvYmFsVGhpc1tzaGVkdWxlclN5bWJvbF07XG52YXIgZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5mYWlsZWRXYWxscGFwZXJTcmNcIik7XG5nbG9iYWxUaGlzW2ZhaWxlZFdhbGxwYXBlclNyY1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgZmFpbGVkV2FsbHBhcGVyU3JjID0gZ2xvYmFsVGhpc1tmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2xdO1xudmFyIHByb2Nlc3NIb3N0U2tpcHNCdW5kbGVkV2FsbHBhcGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGlmIChTdHJpbmcoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5kYXRhc2V0Py5jd3NwU2t1IHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwicHJvY2Vzc1wiKSByZXR1cm4gdHJ1ZTtcblx0XHRjb25zdCBob3N0ID0gU3RyaW5nKGdsb2JhbFRoaXMubG9jYXRpb24/Lmhvc3RuYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIGhvc3QgPT09IFwicHJvY2Vzcy51MnJlLnNwYWNlXCIgfHwgaG9zdCA9PT0gXCJ3b3JrY2VudGVyLnUycmUuc3BhY2VcIiB8fCBob3N0ID09PSBcImFpLnUycmUuc3BhY2VcIjtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlbWVtYmVyTWlzc2luZ0RlZmF1bHRXYWxscGFwZXIgPSAoKSA9PiB7XG5cdGlmIChwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlcigpKSBmYWlsZWRXYWxscGFwZXJTcmMuYWRkKERFRkFVTFRfV0FMTFBBUEVSX1VSTCk7XG59O1xudmFyIGdldEltZ1dpZHRoID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsV2lkdGggfHwgaW1nPy53aWR0aCB8fCAxO1xufTtcbnZhciBnZXRJbWdIZWlnaHQgPSAoaW1nKSA9PiB7XG5cdHJldHVybiBpbWc/Lm5hdHVyYWxIZWlnaHQgfHwgaW1nPy5oZWlnaHQgfHwgMTtcbn07XG52YXIgY3JlYXRlMmRDb250ZXh0ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBiYXNlID0ge1xuXHRcdGFscGhhOiB0cnVlLFxuXHRcdGRlc3luY2hyb25pemVkOiB0cnVlLFxuXHRcdHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlXG5cdH07XG5cdGNvbnN0IHNwYWNlcyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmRhdGFzZXQ/LmN3c3BOYXRpdmVTaGVsbCA9PT0gXCJjYXBhY2l0b3JcIiA/IFtcInNyZ2JcIiwgXCJkaXNwbGF5LXAzXCJdIDogW1xuXHRcdFwicmVjMjEwMC1obGdcIixcblx0XHRcImRpc3BsYXktcDNcIixcblx0XHRcInNyZ2JcIlxuXHRdO1xuXHRmb3IgKGNvbnN0IGNvbG9yU3BhY2Ugb2Ygc3BhY2VzKSB0cnkge1xuXHRcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwge1xuXHRcdFx0Li4uYmFzZSxcblx0XHRcdGNvbG9yU3BhY2Vcblx0XHR9KTtcblx0XHRpZiAoY3R4KSByZXR1cm4gY3R4O1xuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgYmFzZSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG59O1xudmFyIGNhbGxCeUZyYW1lID0gKHBvaW50ZXJJZCwgY2IpID0+IHtcblx0ZGVsYXllZC5zZXQocG9pbnRlcklkLCBjYik7XG59O1xudmFyIGNvdmVyID0gKGN0eCwgaW1nLCBzY2FsZSA9IDEsIHBvcnQsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3QgY2FudmFzID0gY3R4LmNhbnZhcztcblx0Y3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cdGN0eC5yb3RhdGUoKC1vcmllbnQgfHwgMCkgKiAoTWF0aC5QSSAqIC41KSk7XG5cdGN0eC5yb3RhdGUoKDEgLSBwb3J0KSAqIChNYXRoLlBJIC8gMikpO1xuXHRjdHgudHJhbnNsYXRlKC0oZ2V0SW1nV2lkdGgoaW1nKSAvIDIpICogc2NhbGUsIC0oZ2V0SW1nSGVpZ2h0KGltZykgLyAyKSAqIHNjYWxlKTtcbn07XG52YXIgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSA9IChibG9iKSA9PiB7XG5cdGlmICghYmxvYkltYWdlTWFwLmhhcyhibG9iKSAmJiAoYmxvYiBpbnN0YW5jZW9mIEJsb2IgfHwgYmxvYiBpbnN0YW5jZW9mIEZpbGUgfHwgYmxvYiBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCBibG9iIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXAgfHwgYmxvYiBpbnN0YW5jZW9mIEltYWdlKSkge1xuXHRcdGNvbnN0IGVkZ2UgPSAoKCkgPT4ge1xuXHRcdFx0Y29uc3QgZHByID0gTWF0aC5taW4oZ2xvYmFsVGhpcy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuXHRcdFx0Y29uc3QgY3NzID0gTWF0aC5tYXgoZ2xvYmFsVGhpcy5zY3JlZW4/LndpZHRoIHx8IDAsIGdsb2JhbFRoaXMuc2NyZWVuPy5oZWlnaHQgfHwgMCwgODAwKTtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWluKDE2MDAsIGNzcyAqIGRwcikpO1xuXHRcdH0pKCk7XG5cdFx0Y29uc3QgcGVuZGluZyA9IChhc3luYyAoKSA9PiB7XG5cdFx0XHRpZiAoYmxvYiBpbnN0YW5jZW9mIEJsb2IgJiYgYmxvYi5zaXplID4gMThlNCkgdHJ5IHtcblx0XHRcdFx0cmV0dXJuIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IsIHtcblx0XHRcdFx0XHRyZXNpemVXaWR0aDogZWRnZSxcblx0XHRcdFx0XHRyZXNpemVRdWFsaXR5OiBcIm1lZGl1bVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0cmV0dXJuIGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRcdH0pKCkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0YmxvYkltYWdlTWFwLmRlbGV0ZShibG9iKTtcblx0XHRcdHRocm93IGVycjtcblx0XHR9KTtcblx0XHRibG9iSW1hZ2VNYXAuc2V0KGJsb2IsIHBlbmRpbmcpO1xuXHR9XG5cdHJldHVybiBibG9iSW1hZ2VNYXAuZ2V0KGJsb2IpO1xufTtcbnZhciBiaW5kQ2FjaGVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmJpbmRDYWNoZVwiKTtcbmdsb2JhbFRoaXNbYmluZENhY2hlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZENhY2hlID0gZ2xvYmFsVGhpc1tiaW5kQ2FjaGVTeW1ib2xdO1xudmFyIGJpbmRDYWNoZWQgPSAoY2IsIGN0eCkgPT4ge1xuXHRjb25zdCBjYWNoZWQgPSBiaW5kQ2FjaGUuZ2V0KGNiKTtcblx0aWYgKHR5cGVvZiBjYWNoZWQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGNhY2hlZDtcblx0Y29uc3QgYm91bmQgPSBjYi5iaW5kKGN0eCk7XG5cdGJpbmRDYWNoZS5zZXQoY2IsIGJvdW5kKTtcblx0cmV0dXJuIGJvdW5kO1xufTtcbnZhciBVSUNhbnZhcyA9IG51bGw7XG5pZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9IFwidW5kZWZpbmVkXCIpIFVJQ2FudmFzID0gY2xhc3MgVUlDYW52YXMgZXh0ZW5kcyBIVE1MQ2FudmFzRWxlbWVudCB7XG5cdHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXG5cdFx0XCJkYXRhLXNyY1wiLFxuXHRcdFwiZGF0YS1vcmllbnRcIixcblx0XHRcIm9yaWVudFwiXG5cdF07XG5cdGN0eCA9IG51bGw7XG5cdGltYWdlID0gbnVsbDtcblx0I3NpemUgPSBbMSwgMV07XG5cdCNsb2FkaW5nID0gXCJcIjtcblx0I3JlYWR5ID0gXCJcIjtcblx0Z2V0ICNvcmllbnQoKSB7XG5cdFx0Y29uc3QgcmF3ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSA/PyB0aGlzLmdldEF0dHJpYnV0ZShcIm9yaWVudFwiKSA/PyBcIjBcIjtcblx0XHRjb25zdCBuID0gTnVtYmVyLnBhcnNlSW50KHJhdywgMTApO1xuXHRcdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcblx0fVxuXHRzZXQgI29yaWVudCh2YWx1ZSkge1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcodmFsdWUpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdH1cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIF8sIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gXCJkYXRhLXNyY1wiKSB0aGlzLiNwcmVsb2FkKG5ld1ZhbHVlKTtcblx0XHRpZiAobmFtZSA9PSBcImRhdGEtb3JpZW50XCIgfHwgbmFtZSA9PSBcIm9yaWVudFwiKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHR9XG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWlubGluZS1zaXplXCIsIFwibWluKDEwMGNxaSwgMTAwZHZpKVwiKTtcblx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCIpO1xuXHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIE1hdGgubWluKHNjcmVlbj8ud2lkdGgsIGdsb2JhbFRoaXM/LnNjcmVlbj8uYXZhaWxXaWR0aCB8fCBzY3JlZW4/LndpZHRoKSB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIGdsb2JhbFRoaXM/LnNjcmVlbj8uYXZhaWxIZWlnaHQgfHwgc2NyZWVuPy5oZWlnaHQpIHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdHRoaXMuI3ByZWxvYWQodGhpcy4jbG9hZGluZyA9IHRoaXMuZGF0YXNldC5zcmMgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0dGhpcy4jb3JpZW50ID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGlmICh0aGlzLmltYWdlKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc3QgY2FudmFzID0gdGhpcztcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0Y29uc3QgZml4U2l6ZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IG9sZCA9IHRoaXMuI3NpemU7XG5cdFx0XHR0aGlzLiNzaXplID0gW01hdGgubWluKE1hdGgubWluKE1hdGgubWF4KHRoaXMuY2xpZW50V2lkdGggfHwgcGFyZW50Py5jbGllbnRXaWR0aCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRXaWR0aCB8fCAxKSAqICh0aGlzLmN1cnJlbnRDU1Nab29tIHx8IDEpLCBNYXRoLm1pbihzY3JlZW4/LndpZHRoLCBnbG9iYWxUaGlzPy5zY3JlZW4/LmF2YWlsV2lkdGggfHwgc2NyZWVuPy53aWR0aCkgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSwgTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRIZWlnaHQgfHwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSwgMSksIHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBnbG9iYWxUaGlzPy5zY3JlZW4/LmF2YWlsSGVpZ2h0IHx8IHNjcmVlbj8uaGVpZ2h0KSB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpXTtcblx0XHRcdGlmIChvbGQ/LlswXSAhPSB0aGlzLiNzaXplWzBdIHx8IG9sZD8uWzFdICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdFx0fTtcblx0XHRzaGVkdWxlcj8uc2hlZHVsZT8uKCgpID0+IHtcblx0XHRcdHRoaXMuY3R4ID0gY3JlYXRlMmRDb250ZXh0KGNhbnZhcyk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLmN0eD8uY29uZmlndXJlSGlnaER5bmFtaWNSYW5nZT8uKHsgbW9kZTogXCJleHRlbmRlZFwiIH0pO1xuXHRcdFx0XHRjYW52YXM/LmNvbmZpZ3VyZUhpZ2hEeW5hbWljUmFuZ2U/Lih7IG1vZGU6IFwiZXh0ZW5kZWRcIiB9KTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdHRoaXMuaW5lcnQgPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cdFx0XHR0aGlzLnN0eWxlLm9iamVjdFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInUtY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwidTItY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwidWktY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImlubGluZS1zaXplXCIsIFwibWluKDEwMGNxaSwgMTAwZHZpKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJibG9jay1zaXplXCIsIFwibWluKDEwMGNxYiwgMTAwZHZiKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMGNxYiwgMTAwZHZiKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkeW5hbWljLXJhbmdlLWxpbWl0XCIsIFwibm8tbGltaXRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3Itc3BhY2VcIiwgXCJkaXNwbGF5LXAzXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMVwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdGZpeFNpemUoKTtcblx0XHRcdG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRcdFx0XHRjb25zdCBib3ggPSBlbnRyeT8uZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZT8uWzBdO1xuXHRcdFx0XHRcdGlmIChib3gpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG9sZCA9IHRoaXMuI3NpemU7XG5cdFx0XHRcdFx0XHR0aGlzLiNzaXplID0gW01hdGgubWF4KGJveC5pbmxpbmVTaXplIHx8IHRoaXMud2lkdGgsIDEpLCBNYXRoLm1heChib3guYmxvY2tTaXplIHx8IHRoaXMuaGVpZ2h0LCAxKV07XG5cdFx0XHRcdFx0XHR0aGlzLiNvcmllbnQgPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0XHRcdFx0XHRpZiAob2xkPy5bMF0gIT0gdGhpcy4jc2l6ZVswXSB8fCBvbGQ/LlsxXSAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSkub2JzZXJ2ZSh0aGlzLCB7IGJveDogXCJkZXZpY2UtcGl4ZWwtY29udGVudC1ib3hcIiB9KTtcblx0XHRcdHRoaXMuI3ByZWxvYWQodGhpcy4jbG9hZGluZyA9IHRoaXMuZGF0YXNldC5zcmMgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0XHR0aGlzLiNvcmllbnQgPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0XHRpZiAodGhpcy5pbWFnZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5IHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdH0pO1xuXHR9XG5cdGFzeW5jICR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmVhZHkgfHw9IHRoaXMuI2xvYWRpbmc7XG5cdFx0Y29uc3QgaW1nID0gYmxvYiBpbnN0YW5jZW9mIEltYWdlQml0bWFwID8gYmxvYiA6IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUoYmxvYikuY2F0Y2goY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHRcdGlmIChpbWcgJiYgcmVhZHkgPT0gdGhpcy4jbG9hZGluZykge1xuXHRcdFx0dGhpcy5pbWFnZSA9IGltZztcblx0XHRcdHRoaXMuI3JlbmRlcihyZWFkeSk7XG5cdFx0fVxuXHRcdHJldHVybiBibG9iO1xuXHR9XG5cdCRyZW5kZXJQYXNzKHdoYXRJc1JlYWR5KSB7XG5cdFx0Y29uc3QgY2FudmFzID0gdGhpcywgY3R4ID0gdGhpcy5jdHgsIGltZyA9IHRoaXMuaW1hZ2U7XG5cdFx0aWYgKGltZyAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgIXdoYXRJc1JlYWR5KSkge1xuXHRcdFx0aWYgKHdoYXRJc1JlYWR5KSB0aGlzLiNyZWFkeSA9IHdoYXRJc1JlYWR5O1xuXHRcdFx0aWYgKHRoaXMud2lkdGggIT0gdGhpcy4jc2l6ZVswXSkgdGhpcy53aWR0aCA9IHRoaXMuI3NpemVbMF07XG5cdFx0XHRpZiAodGhpcy5oZWlnaHQgIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy5oZWlnaHQgPSB0aGlzLiNzaXplWzFdO1xuXHRcdFx0dGhpcy5zdHlsZS5hc3BlY3RSYXRpbyA9IGAke3RoaXMud2lkdGggfHwgMX0gLyAke3RoaXMuaGVpZ2h0IHx8IDF9YDtcblx0XHRcdGNvbnN0IG94ID0gdGhpcy4jb3JpZW50ICUgMiB8fCAwO1xuXHRcdFx0Y29uc3QgcG9ydCA9IGdldEltZ1dpZHRoKGltZykgPD0gZ2V0SW1nSGVpZ2h0KGltZykgPyAxIDogMDtcblx0XHRcdGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoY2FudmFzW1tcImhlaWdodFwiLCBcIndpZHRoXCJdW294XV0gLyAocG9ydCA/IGdldEltZ0hlaWdodChpbWcpIDogZ2V0SW1nV2lkdGgoaW1nKSksIGNhbnZhc1tbXCJ3aWR0aFwiLCBcImhlaWdodFwiXVtveF1dIC8gKHBvcnQgPyBnZXRJbWdXaWR0aChpbWcpIDogZ2V0SW1nSGVpZ2h0KGltZykpKTtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0XHRjb3ZlcihjdHgsIGltZywgc2NhbGUsIHBvcnQsIHRoaXMuI29yaWVudCk7XG5cdFx0XHRjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoICogc2NhbGUsIGltZy5oZWlnaHQgKiBzY2FsZSk7XG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdH1cblx0fVxuXHQjcHJlbG9hZChzcmMpIHtcblx0XHRjb25zdCByZWFkeSA9IHNyYyB8fCB0aGlzLiNsb2FkaW5nO1xuXHRcdHRoaXMuI2xvYWRpbmcgPSByZWFkeTtcblx0XHRpZiAoIXJlYWR5IHx8IHR5cGVvZiByZWFkeSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmIChmYWlsZWRXYWxscGFwZXJTcmMuaGFzKHJlYWR5KSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmIChyZWFkeS5zdGFydHNXaXRoKFwiZGF0YTpcIikgJiYgIS9eZGF0YTppbWFnZVxcLy9pLnRlc3QocmVhZHkpKSB7XG5cdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHdhcm1lZEJsb2JGb3IocmVhZHkpLnRoZW4oKGJsb2IpID0+IHtcblx0XHRcdGlmIChibG9iICYmIHJlYWR5ID09PSB0aGlzLiNsb2FkaW5nKSByZXR1cm4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGZldGNoKHJlYWR5LCB7XG5cdFx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiXG5cdFx0XHR9KT8udGhlbj8uKGFzeW5jIChyc3ApID0+IHtcblx0XHRcdFx0aWYgKCFyc3Aub2spIHtcblx0XHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0XHRcdGlmICghYmxvYj8uc2l6ZSB8fCBibG9iLnR5cGUgJiYgIWJsb2IudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG5cdFx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLiR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KT8uY2F0Y2g/LigoKSA9PiB7XG5cdFx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjdHggPSB0aGlzLmN0eDtcblx0XHRpZiAodGhpcy5pbWFnZSAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgIXdoYXRJc1JlYWR5KSkgc2hlZHVsZXI/LnNoZWR1bGU/LihiaW5kQ2FjaGVkKHRoaXMuJHJlbmRlclBhc3MsIHRoaXMpKTtcblx0fVxufTtcbmVsc2UgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge31cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHt9XG5cdCR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHt9XG5cdCNvcmllbnQgPSAwO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdCNzaXplID0gWzEsIDFdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG59O1xudHJ5IHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidWktY2FudmFzXCIsIFVJQ2FudmFzLCB7IGV4dGVuZHM6IFwiY2FudmFzXCIgfSk7XG59IGNhdGNoIChlKSB7fVxuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IFVJQ2FudmFzLCBVU0VSX1dBTExQQVBFUl9DQUNIRSwgVVNFUl9XQUxMUEFQRVJfUEFUSCwgV0FMTFBBUEVSX0lEQl9NQVJLRVIsIFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVksIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyLCBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEsIGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMsIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcywgYmluZENhY2hlLCBibG9iSW1hZ2VNYXAsIGNhbGxCeUZyYW1lLCBjb3ZlciwgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSwgZGVsYXllZCwgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSwgZWxlY3Ryb25BUEksIGZhaWxlZFdhbGxwYXBlclNyYywgZ2V0RG9taW5hbnRDb2xvcnMsIGdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyLCBpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIsIGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSwgcXVhbGl0eU1vZGUsIHJhbmtXYWxscGFwZXJTZWVkcywgcmVmcmVzaEFwcFdhbGxwYXBlclBhaW50LCByZWdpc3RlckNvbG9yUHJvcGVydHksIHJlc29sdmVBcHBXYWxscGFwZXJVcmwsIHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlLCBzZXRBcHBXYWxscGFwZXIsIHNldEFwcFdhbGxwYXBlckZyb21CbG9iLCBzaGVkdWxlciwgc3luY0FwcFdhbGxwYXBlck9yaWVudCwgc3luY0NhbnZhc09yaWVudCwgdGhlbWVIb3N0cywgd2FybUFwcFdhbGxwYXBlciB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsS0FBQUEsVUFBUztBQUNsQixTQUFTLG9CQUFBQyxTQUF3QjtBQUNqQyxTQUFTLHlCQUFBQyxJQUF1QixnQkFBQUMsSUFBYyx3QkFBQUMsSUFBc0Isd0JBQUFDLFVBQTRCO0FBR2hHLElBQUlDLEtBQWMsa0JBQ2RDLEtBQWMsRUFBRSxNQUFRO0FBQUEsRUFDM0IsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUNYLEVBQUUsR0FJRUMsS0FBYyxDQUFDQyxHQUFPQyxNQUFRO0FBQ2pDLE1BQUksT0FBT0QsS0FBVSxVQUNyQjtBQUFBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxJQUFJLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDMUMsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLElBQVEsT0FBTztBQUFBLE1BQ3JDLElBQUlBLElBQVEsS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxJQUN0QztBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDM0MsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDMUMsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLElBQVEsT0FBTztBQUFBLE1BQ3JDLFFBQVFBLElBQVEsS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxJQUMxQztBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQ3hCLElBQUlBLElBQVEsT0FBTztBQUFBLElBQ3BCO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUN4QixRQUFRQSxJQUFRLE9BQU87QUFBQSxJQUN4QjtBQUFBO0FBQ0QsR0FJSUUsS0FBUTtBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsc0JBQXNCO0FBQUEsRUFDdEIsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1Isa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsYUFBYTtBQUNkLEdBSUlD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ZixZQUFZZ0IsR0FBYTtBQUFBLEVBQUM7QUFBQSxFQUMxQixrQkFBa0JqTixHQUFNZ04sR0FBTztBQUM5QixXQUFPaE47QUFBQSxFQUNSO0FBQUEsRUFDQXdNLEdBQVN2SSxHQUFLO0FBQ2IsV0FBTyxRQUFRLFFBQVE7QUFBQSxFQUN4QjtBQUFBLEVBQ0F3SSxHQUFRUSxHQUFhO0FBQUEsRUFBQztBQUFBLEVBQ3RCWixLQUFVO0FBQUEsRUFDVkYsS0FBVztBQUFBLEVBQ1hDLEtBQVM7QUFBQSxFQUNURixLQUFRLENBQUMsR0FBRyxDQUFDO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ1Q7QUFDQSxJQUFJO0FBQ0gsaUJBQWUsT0FBTyxhQUFhRCxJQUFVLEVBQUUsU0FBUyxTQUFTLENBQUM7QUFDbkUsUUFBWTtBQUFDOyIsCiAgIm5hbWVzIjogWyJRIiwgInNldFN0eWxlUHJvcGVydHkiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm1ha2VSQUZDeWNsZSIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJlbGVjdHJvbkFQSSIsICJxdWFsaXR5TW9kZSIsICJwYXJzZU51bWJlciIsICJjb2xvciIsICJsZW4iLCAibmFtZWQiLCAicGFyc2VOYW1lZCIsICJoZXgiLCAicGFyc2VIZXgiLCAibWF0Y2giLCAibnVtJDEiLCAibnVtX25vbmUiLCAicGVyIiwgInBlcl9ub25lIiwgIm51bV9wZXIiLCAibnVtX3Blcl9ub25lIiwgImh1ZSQxIiwgImh1ZV9ub25lIiwgImMiLCAicnhfbnVtX3Blcl9ub25lIiwgInJnYl9udW1fb2xkIiwgInJnYl9wZXJfb2xkIiwgInBhcnNlUmdiTGVnYWN5IiwgInJlcyIsICJwcmVwYXJlIiwgIm1vZGUiLCAicGFyc2UiLCAiY29udmVydGVyIiwgInRhcmdldF9tb2RlIiwgImNvbnZlcnRlcnMiLCAibW9kZXMiLCAicGFyc2VycyIsICJjb2xvclByb2ZpbGVzIiwgImlkZW50aXR5IiwgInYiLCAidXNlTW9kZSIsICJkZWZpbml0aW9uIiwgImsiLCAiY2hhbm5lbCIsICJwYXJzZXIiLCAidXNlUGFyc2VyIiwgImdldE1vZGUiLCAiSWRlbnRTdGFydENvZGVQb2ludCIsICJJZGVudENvZGVQb2ludCIsICJUb2siLCAiX2kiLCAiaXNfbnVtIiwgImNoYXJzIiwgImNoIiwgImNoMSIsICJpc19pZGVudCIsICJodWVuaXRzIiwgIm51bSIsICJ2YWx1ZSIsICJkaWdpdHMiLCAiaWQiLCAiaWRlbnQiLCAiaWRlbnRsaWtlIiwgInRva2VuaXplIiwgInN0ciIsICJ0b2tlbnMiLCAiYWxwaGEiLCAicGFyc2VDb2xvclN5bnRheCIsICJ0b2tlbiIsICJjb29yZHMiLCAiY29uc3VtZUNvb3JkcyIsICJjaGFubmVscyIsICJpaSIsICJpbmNsdWRlSHVlIiwgInBhcnNlTW9kZXJuU3ludGF4IiwgInBhcnNlZCIsICJyZXN1bHQiLCAiaSIsICJwYXJzZVJnYiIsICJyIiwgImciLCAiYiIsICJwYXJzZVRyYW5zcGFyZW50IiwgImxlcnAiLCAiYSIsICJ0IiwgImdldF9jbGFzc2VzIiwgImFyciIsICJjbGFzc2VzIiwgImludGVycG9sYXRvclBpZWNld2lzZSIsICJpbnRlcnBvbGF0b3IiLCAiY2xzIiwgImlkeCIsICJwYWlyIiwgImludGVycG9sYXRvckxpbmVhciIsICJmaXh1cEFscGhhIiwgInNvbWVfZGVmaW5lZCIsICJkZWZpbml0aW9uJDI3IiwgImxpbmVhcml6ZSQyIiwgImNvbnZlcnRBOThUb1h5ejY1IiwgImE5OCIsICJnYW1tYSQyIiwgImNvbnZlcnRYeXo2NVRvQTk4IiwgIngiLCAieSIsICJ6IiwgImZuJDMiLCAiYWJzIiwgImNvbnZlcnRSZ2JUb0xyZ2IiLCAiY29udmVydFJnYlRvWHl6NjUiLCAicmdiIiwgImZuJDIiLCAiY29udmVydExyZ2JUb1JnYiIsICJjb252ZXJ0WHl6NjVUb1JnYiIsICJkZWZpbml0aW9uJDI2IiwgIm5vcm1hbGl6ZUh1ZSIsICJodWUiLCAiaHVlcyIsICJmbiIsICJub3JtYWxpemVkIiwgImFjYyIsICJjdXJyIiwgImZpeHVwSHVlU2hvcnRlciIsICJkIiwgIk0iLCAiZGVnVG9SYWQiLCAicmFkVG9EZWciLCAiREUiLCAiQkUiLCAiQkNBRCIsICJjb252ZXJ0UmdiVG9DdWJlaGVsaXgiLCAibCIsICJjb252ZXJ0Q3ViZWhlbGl4VG9SZ2IiLCAiaCIsICJzIiwgImFtcCIsICJjb3NoIiwgInNpbmgiLCAiZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24iLCAic3RkIiwgInNtcCIsICJzdGRfaCIsICJzbXBfaCIsICJkSCIsICJkaWZmZXJlbmNlSHVlTmFpdmUiLCAiZGlmZmVyZW5jZUh1ZUNocm9tYSIsICJhdmVyYWdlQW5nbGUiLCAidmFsIiwgInN1bSIsICJyYWQiLCAiYW5nbGUiLCAiZGVmaW5pdGlvbiQyNSIsICJjb252ZXJ0TGFiVG9MY2giLCAiY29udmVydExjaFRvTGFiIiwgImskMiIsICJlJDIiLCAiRDUwIiwgIkQ2NSIsICJrJDEiLCAiZSQxIiwgImZuJDEiLCAiY29udmVydExhYjY1VG9YeXo2NSIsICJmeSIsICJmeCIsICJmeiIsICJjb252ZXJ0TGFiNjVUb1JnYiIsICJsYWIiLCAiZiQxIiwgImNvbnZlcnRYeXo2NVRvTGFiNjUiLCAiZjAiLCAiZjEiLCAiZjIiLCAiY29udmVydFJnYlRvTGFiNjUiLCAizrgiLCAiY29zzrgiLCAic2luzrgiLCAiZmFjdG9yIiwgImNvbnZlcnREbGNoVG9MYWI2NSIsICJHIiwgImUiLCAiZiIsICJjb252ZXJ0TGFiNjVUb0RsY2giLCAiY29udmVydERsYWJUb0xhYjY1IiwgImNvbnZlcnRMYWI2NVRvRGxhYiIsICJkZWZpbml0aW9uJDI0IiwgImRlZmluaXRpb24kMjMiLCAiY29udmVydEhzaVRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzaSIsICJtIiwgImRlZmluaXRpb24kMjIiLCAiY29udmVydEhzbFRvUmdiIiwgIm0xIiwgIm0yIiwgImNvbnZlcnRSZ2JUb0hzbCIsICJodWVUb0RlZyIsICJ1bml0IiwgImhzbF9vbGQiLCAicGFyc2VIc2xMZWdhY3kiLCAicGFyc2VIc2wiLCAiZGVmaW5pdGlvbiQyMSIsICJjb252ZXJ0SHN2VG9SZ2IiLCAiY29udmVydFJnYlRvSHN2IiwgImRlZmluaXRpb24kMjAiLCAiY29udmVydEh3YlRvUmdiIiwgInciLCAiY29udmVydFJnYlRvSHdiIiwgInJnYmEiLCAiaHN2IiwgIlBhcnNlSHdiIiwgImRlZmluaXRpb24kMTkiLCAiTTEiLCAiTTIiLCAiQzEiLCAiQzIiLCAiQzMiLCAidHJhbnNmZXJQcURlY29kZSIsICJ0cmFuc2ZlclBxRW5jb2RlIiwgInRvUmVsIiwgImNvbnZlcnRJdHBUb1h5ejY1IiwgInAiLCAidG9BYnMiLCAiY29udmVydFh5ejY1VG9JdHAiLCAiYWJzWCIsICJhYnNZIiwgImFic1oiLCAiZGVmaW5pdGlvbiQxOCIsICJwJDEiLCAiZDAkMSIsICJqYWJQcUVuY29kZSIsICJ2biIsICJjb252ZXJ0WHl6NjVUb0phYiIsICJ4cCIsICJ5cCIsICJkMCIsICJqYWJQcURlY29kZSIsICJ2cCIsICJyZWwiLCAiY29udmVydEphYlRvWHl6NjUiLCAiaiIsICJjb252ZXJ0UmdiVG9KYWIiLCAiY29udmVydEphYlRvUmdiIiwgImRlZmluaXRpb24kMTciLCAiY29udmVydEphYlRvSmNoIiwgImNvbnZlcnRKY2hUb0phYiIsICJkZWZpbml0aW9uJDE2IiwgImNvbnZlcnRMYWJUb1h5ejUwIiwgImNvbnZlcnRYeXo1MFRvUmdiIiwgImNvbnZlcnRMYWJUb1JnYiIsICJjb252ZXJ0UmdiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb0xhYiIsICJjb252ZXJ0UmdiVG9MYWIiLCAicGFyc2VMYWIiLCAiZGVmaW5pdGlvbiQxNSIsICJkZWZpbml0aW9uJDE0IiwgInBhcnNlTGNoIiwgImRlZmluaXRpb24kMTMiLCAiZGVmaW5pdGlvbiQxMiIsICJjb252ZXJ0THV2VG9MY2h1diIsICJ1IiwgImNvbnZlcnRMY2h1dlRvTHV2IiwgInVfZm4kMSIsICJ2X2ZuJDEiLCAidW4kMSIsICJ2biQxIiwgImxfZm4iLCAiY29udmVydFh5ejUwVG9MdXYiLCAidV9mbiIsICJ2X2ZuIiwgInVuIiwgImNvbnZlcnRMdXZUb1h5ejUwIiwgInVwIiwgImNvbnZlcnRSZ2JUb0xjaHV2IiwgImNvbnZlcnRMY2h1dlRvUmdiIiwgImxjaHV2IiwgImRlZmluaXRpb24kMTEiLCAiZGVmaW5pdGlvbiQxMCIsICJkZWZpbml0aW9uJDkiLCAibHV2IiwgImNvbnZlcnRMcmdiVG9Pa2xhYiIsICJMIiwgIlMiLCAiY29udmVydFJnYlRvT2tsYWIiLCAiY29udmVydE9rbGFiVG9McmdiIiwgImNvbnZlcnRPa2xhYlRvUmdiIiwgInRvZSIsICJrXzMiLCAidG9lX2ludiIsICJjb21wdXRlX21heF9zYXR1cmF0aW9uIiwgImswIiwgImsxIiwgImsyIiwgImszIiwgIms0IiwgIndsIiwgIndtIiwgIndzIiwgImtfbCIsICJrX20iLCAia19zIiwgImxfIiwgIm1fIiwgInNfIiwgImxfZFMiLCAibV9kUyIsICJzX2RTIiwgImxfZFMyIiwgIm1fZFMyIiwgInNfZFMyIiwgImZpbmRfY3VzcCIsICJTX2N1c3AiLCAiTF9jdXNwIiwgImZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uIiwgIkwxIiwgIkwwIiwgImN1c3AiLCAiZEwiLCAiZEMiLCAibF9kdCIsICJtX2R0IiwgInNfZHQiLCAiQyIsICJsZHQiLCAibWR0IiwgInNkdCIsICJsZHQyIiwgIm1kdDIiLCAic2R0MiIsICJyMSIsICJyMiIsICJ1X3IiLCAidF9yIiwgImcxIiwgImcyIiwgInVfZyIsICJ0X2ciLCAiYjEiLCAiYjIiLCAidV9iIiwgInRfYiIsICJnZXRfU1RfbWF4IiwgImFfIiwgImJfIiwgImdldF9DcyIsICJDX21heCIsICJTVF9tYXgiLCAiU19taWQiLCAiVF9taWQiLCAiQ19hIiwgIkNfYiIsICJDX21pZCIsICJjb252ZXJ0T2tsYWJUb09raHNsIiwgInJldCIsICJDXzAiLCAia18wIiwgImtfMSIsICJrXzIiLCAiY29udmVydE9raHNsVG9Pa2xhYiIsICJoc2wiLCAibW9kZU9raHNsIiwgImNvbnZlcnRPa2xhYlRvT2toc3YiLCAiU19tYXgiLCAiVCIsICJTXzAiLCAiTF92IiwgIkNfdiIsICJMX3Z0IiwgIkNfdnQiLCAicmdiX3NjYWxlIiwgInNjYWxlX0wiLCAiY29udmVydE9raHN2VG9Pa2xhYiIsICJMX25ldyIsICJtb2RlT2toc3YiLCAicGFyc2VPa2xhYiIsICJkZWZpbml0aW9uJDgiLCAicGFyc2VPa2xjaCIsICJkZWZpbml0aW9uJDciLCAiY29udmVydFAzVG9YeXo2NSIsICJjb252ZXJ0WHl6NjVUb1AzIiwgImRlZmluaXRpb24kNiIsICJnYW1tYSQxIiwgImNvbnZlcnRYeXo1MFRvUHJvcGhvdG8iLCAibGluZWFyaXplJDEiLCAiY29udmVydFByb3Bob3RvVG9YeXo1MCIsICJwcm9waG90byIsICJkZWZpbml0aW9uJDUiLCAizrEkMSIsICLOsiQxIiwgImdhbW1hIiwgImNvbnZlcnRYeXo2NVRvUmVjMjAyMCIsICLOsSIsICLOsiIsICJsaW5lYXJpemUiLCAiY29udmVydFJlYzIwMjBUb1h5ejY1IiwgInJlYzIwMjAiLCAiZGVmaW5pdGlvbiQ0IiwgImJpYXMiLCAiYmlhc19jYnJ0IiwgInRyYW5zZmVyJDEiLCAiY29udmVydFJnYlRvWHliIiwgInRyYW5zZmVyIiwgImNvbnZlcnRYeWJUb1JnYiIsICJkZWZpbml0aW9uJDMiLCAiZGVmaW5pdGlvbiQyIiwgImNvbnZlcnRYeXo2NVRvWHl6NTAiLCAieHl6NjUiLCAiY29udmVydFh5ejUwVG9YeXo2NSIsICJ4eXo1MCIsICJkZWZpbml0aW9uJDEiLCAiY29udmVydFJnYlRvWWlxIiwgImNvbnZlcnRZaXFUb1JnYiIsICJxIiwgInByZWNpc2lvbiIsICJyb3VuZCIsICJ0d29EZWNpbWFscyIsICJjbGFtcCQxIiwgImZpeHVwIiwgInJnYiQxIiwgImhzbCQxIiwgInNlcmlhbGl6ZUhleCIsICJmb3JtYXRIZXgiLCAiY3ViZWhlbGl4IiwgImRsYWIiLCAiZGxjaCIsICJoc2kiLCAiaHdiIiwgIml0cCIsICJqYWIiLCAiamNoIiwgImxhYjY1IiwgImxjaCIsICJsY2g2NSIsICJscmdiIiwgIm9raHNsIiwgIm9raHN2IiwgIm9rbGFiIiwgIm9rbGNoIiwgInAzIiwgInh5YiIsICJ5aXEiLCAic29ydENvbG9ycyIsICJsaXN0IiwgImNyaXRlcmlhIiwgImV1Y2xpZGVhbkRpc3RhbmNlIiwgImNvbG9yMSIsICJjb2xvcjIiLCAibWFrZUNsdXN0ZXJzIiwgImRhdGEiLCAiY2VudHJvaWRzIiwgImNsdXN0ZXJzIiwgInBvaW50IiwgIm1pbkRpc3RhbmNlIiwgIm1pbkRpc3RhbmNlQ2x1c3RlckluZGV4IiwgImNlbnRyb2lkIiwgImluZGV4IiwgImRpc3RhbmNlIiwgImNvbXB1dGVNZWFuIiwgInBvaW50cyIsICJrTWVhbnMiLCAiaW5pdGlhbGl6ZUNlbnRyb2lkcyIsICJtYXhJdGVyYXRpb25zIiwgIml0ZXJhdGlvbiIsICJuZXdDZW50cm9pZHMiLCAiY2x1c3RlciIsICJuZXdDZW50cm9pZCIsICJkaXN0YW5jZXMiLCAidG90YWxEaXN0YW5jZSIsICJwcm9iYWJpbGl0aWVzIiwgImN1bXVsYXRpdmVQcm9iYWJpbGl0eSIsICJyYW5kb21WYWx1ZSIsICJwcmVCbHVyUGl4ZWxzIiwgImltZ1VSTCIsICJibG9iIiwgImJpdG1hcCIsICJvZmZzZXQiLCAiY3R4IiwgImdldENsdXN0ZXJJbWFnZURhdGEiLCAiYWxsQ291bnQiLCAiZHYiLCAiZnAzMiIsICJpNCIsICJnZXREb21pbmFudENvbG9ycyIsICJXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSIsICJUSEVNRV9TVE9SQUdFX0tFWSIsICJQUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9VUkxfS0VZIiwgIlBBUEVSX0xfU1BMSVQiLCAiUEFQRVJfQ0hST01BX0NBUCIsICJGQUxMQkFDS19QQVBFUiIsICJsYXN0TGl2ZVBhcGVyIiwgIlVTQUJMRV9MVU1BX01JTiIsICJTRUVEX1BST1BTIiwgImNsYW1wIiwgIm4iLCAibG8iLCAiaGkiLCAiaGV4T2tsY2giLCAiZmFsbGJhY2siLCAicmdiVG9TYW1wbGUiLCAib2siLCAicGFwZXJMRnJvbUhleCIsICJoYWxvRm9yUGFwZXIiLCAiZGFya1BhcGVyIiwgImlzVXNhYmxlUGFwZXJMdW1hIiwgImx1bWEiLCAiZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tU2FtcGxlcyIsICJzYW1wbGVzIiwgInBpeGVsTHVtYSIsICJscyIsICJtZWFuTCIsICJtZWRpYW5MIiwgInBhcGVyTCIsICJwYXBlciIsICJwYXBlckMiLCAic2FtcGxlSW1hZ2VNZWFuTHVtYSIsICJjYW52YXMiLCAiZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSIsICJoYXNXYWxscGFwZXJQYXBlciIsICJzZWVkcyIsICJyYW5rV2FsbHBhcGVyU2VlZHMiLCAiYWNjZW50UG9vbCIsICJwb29sIiwgInByaW1hcnkiLCAiaHVlRGlzdCIsICJwaWNrTmV4dCIsICJ1c2VkIiwgInJlc3QiLCAiYmFzZSIsICJudWRnZWQiLCAic2Vjb25kYXJ5IiwgInRlcnRpYXJ5IiwgInRoZW1lSG9zdHMiLCAibm9kZXMiLCAiZWwiLCAid2FsbHBhcGVyU2VlZHNNYXlQYWludCIsICJzcmMiLCAiaXNWYWxpZENvbG9yIiwgImFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMiLCAiZXh0cmFIb3N0cyIsICJzaGFkb3ciLCAiZ2xvdyIsICJob3N0cyIsICJyZWdpc3RlckNvbG9yUHJvcGVydHkiLCAiaG9zdCIsICJnbG9iYWxRdWVyeSIsICJuYW1lIiwgImluaXRpYWxWYWx1ZSIsICJwZXJzaXN0TGl2ZVBhcGVyIiwgImNhY2hlZCIsICJsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUiLCAiYXBwbHlXYWxscGFwZXJQYXBlckZyb21MdW1hIiwgImFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyIsICJuZXh0IiwgInByb3AiLCAia2V5IiwgInJhdyIsICJhcHBseVRoZW1lRnJvbVdhbGxwYXBlciIsICJvcHRzIiwgInNyY0tleSIsICJza3UiLCAibGl2ZUx1bWEiLCAiZXJyIiwgInJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlIiwgIldBTExQQVBFUl9TVE9SQUdFX0tFWSIsICJERUZBVUxUX1dBTExQQVBFUl9VUkwiLCAiVVNFUl9XQUxMUEFQRVJfUEFUSCIsICJVU0VSX1dBTExQQVBFUl9DQUNIRSIsICJXQUxMUEFQRVJfSURCX01BUktFUiIsICJJREJfTkFNRSIsICJJREJfU1RPUkUiLCAiSURCX0tFWSIsICJMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMiLCAibGl2ZU9iamVjdFVybCIsICJ3YWxscGFwZXJFcG9jaCIsICJjdXJyZW50T3JpZW50TnVtYmVyIiwgImlzSWRiUG9pbnRlciIsICJwb2ludGVyIiwgImlzVW51c2FibGVTdG9yZWRVcmwiLCAicmV2b2tlTGl2ZU9iamVjdFVybCIsICJhZG9wdFdhbGxwYXBlckJsb2IiLCAiZXBvY2giLCAib3BlbldhbGxwYXBlckRiIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInJlcSIsICJkYiIsICJpZGJQdXRXYWxscGFwZXIiLCAidHgiLCAiaWRiR2V0V2FsbHBhcGVyIiwgImNhY2hlVXNlcldhbGxwYXBlciIsICJjYWNoZSIsICJ0eXBlIiwgImNsZWFyQ2FjaGVkVXNlcldhbGxwYXBlciIsICJpZGJDbGVhcldhbGxwYXBlciIsICJyZWFkU3RvcmFnZVBvaW50ZXIiLCAid3JpdGVTdG9yYWdlUG9pbnRlciIsICJyZXN0b3JlV2FsbHBhcGVyQmxvYlVybCIsICJpc0lubGluZVBheWxvYWQiLCAidXJsIiwgInJlc29sdmVBcHBXYWxscGFwZXJVcmwiLCAicHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIiLCAid2FybVByb21pc2UiLCAid2FybUFwcFdhbGxwYXBlciIsICJyc3AiLCAid2FybWVkQmxvYkZvciIsICJ3YXJtIiwgImdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyIiwgInN5bmNDYW52YXNPcmllbnQiLCAiYXBwbHkiLCAic3luY0FwcFdhbGxwYXBlck9yaWVudCIsICJyZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQiLCAicGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzIiwgInN5bmNHbG93VG9UaGVtZSIsICJwYWludFVybCIsICJjYW52YXNlcyIsICJvcmllbnQiLCAiZGF0YVVybFRvQmxvYiIsICJkYXRhVXJsIiwgInNldEFwcFdhbGxwYXBlckZyb21CbG9iIiwgInNldEFwcFdhbGxwYXBlciIsICJyZWFkZXIiLCAiaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyIiwgImNvbnRhaW5lciIsICJyb290IiwgInBvc3RlciIsICJyZW1lbWJlck1pc3NpbmdEZWZhdWx0V2FsbHBhcGVyIiwgImNvbGRVcmwiLCAid2FybWluZyIsICJmYWlsZWRXYWxscGFwZXJTcmMiLCAiZGlzcG9zZU9yaWVudCIsICJ3YWxscGFwZXIiLCAidGhlbWVTcmMiLCAiZXh0cmFjdCIsICJyaWMiLCAid2FsbHBhcGVyVXJsIiwgImJsb2JJbWFnZVN5bWJvbCIsICJibG9iSW1hZ2VNYXAiLCAiZGVsYXllZFN5bWJvbCIsICJkZWxheWVkIiwgInNoZWR1bGVyU3ltYm9sIiwgInNoZWR1bGVyIiwgImZhaWxlZFdhbGxwYXBlclNyY1N5bWJvbCIsICJnZXRJbWdXaWR0aCIsICJpbWciLCAiZ2V0SW1nSGVpZ2h0IiwgImNyZWF0ZTJkQ29udGV4dCIsICJzcGFjZXMiLCAiY29sb3JTcGFjZSIsICJjYWxsQnlGcmFtZSIsICJwb2ludGVySWQiLCAiY2IiLCAiY292ZXIiLCAic2NhbGUiLCAicG9ydCIsICJjcmVhdGVJbWFnZUJpdG1hcENhY2hlIiwgImVkZ2UiLCAiZHByIiwgImNzcyIsICJwZW5kaW5nIiwgImJpbmRDYWNoZVN5bWJvbCIsICJiaW5kQ2FjaGUiLCAiYmluZENhY2hlZCIsICJib3VuZCIsICJVSUNhbnZhcyIsICIjc2l6ZSIsICIjbG9hZGluZyIsICIjcmVhZHkiLCAiI29yaWVudCIsICJfIiwgIm5ld1ZhbHVlIiwgIiNwcmVsb2FkIiwgIiNyZW5kZXIiLCAicGFyZW50IiwgImZpeFNpemUiLCAib2xkIiwgImVudHJpZXMiLCAiZW50cnkiLCAiYm94IiwgInJlYWR5IiwgIndoYXRJc1JlYWR5IiwgIm94Il0KfQo=
