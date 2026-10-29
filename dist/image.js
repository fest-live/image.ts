import { Q as Tr } from "@fest-lib/lure";
import { setStyleProperty as A } from "@fest-lib/style-lib";
import { getCorrectOrientation as wa, makeRAFCycle as xa, orientationNumberMap as ka, whenAnyScreenChanges as Pa } from "@fest-lib/dom";
var co = "electronBridge", uo = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, $r = (e, t) => {
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
}, _a = {
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
}, za = (e) => $r(_a[e.toLowerCase()], 6), Sa = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Ta = (e) => {
  let t;
  return (t = e.match(Sa)) ? $r(parseInt(t[1], 16), t[1].length) : void 0;
}, T = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", vo = `(?:${T}|none)`, he = `${T}%`, po = `(?:${T}%|none)`, At = `(?:${T}%|${T})`, $a = `(?:${T}%|${T}|none)`, Ca = `(?:${T}(deg|grad|rad|turn)|${T})`, fo = `(?:${T}(deg|grad|rad|turn)|${T}|none)`, K = "\\s*,\\s*", mo = new RegExp("^" + $a + "$"), Aa = new RegExp(`^rgba?\\(\\s*${T}${K}${T}${K}${T}\\s*(?:,\\s*${At}\\s*)?\\)$`), Ea = new RegExp(`^rgba?\\(\\s*${he}${K}${he}${K}${he}\\s*(?:,\\s*${At}\\s*)?\\)$`), Ia = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(Aa))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(Ea))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, Na = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Ir(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, Et = (e = "rgb") => (t) => (t = Na(t, e)) !== void 0 ? t.mode === e ? t : E[t.mode][e] ? E[t.mode][e](t) : e === "rgb" ? E[t.mode].rgb(t) : E.rgb[e](E[t.mode].rgb(t)) : void 0, E = {}, Cr = {}, we = [], Ar = {}, Wa = (e) => e, g = (e) => (E[e.mode] = {
  ...E[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  E[t] || (E[t] = {}), E[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Wa);
}), Cr[e.mode] = e, (e.parse || []).forEach((t) => {
  La(t, e.mode);
}), Et(e.mode)), Ra = (e) => Cr[e], La = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    Ar[e] = t;
  } else typeof e == "function" && we.indexOf(e) < 0 && we.push(e);
}, Mt = /[^\x00-\x7F]|[a-zA-Z_]/, Ha = /[^\x00-\x7F]|[-\w]/, s = {
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
var qa = {
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
      value: t * qa[r]
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
  for (; p < e.length && Ha.test(e[p]); ) t += e[p++];
  return t;
}
function Oa(e) {
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
function Ba(e = "") {
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
      p--, r.push(Oa(t));
      continue;
    }
    return;
  }
  return r;
}
function Da(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = Ar[t.value];
  if (!r) return;
  const i = { mode: r }, a = Er(e, !1);
  if (!a) return;
  const n = Ra(r).channels;
  for (let o = 0, l, h; o < n.length; o++)
    l = a[o], h = n[o], l.type !== s.None && (i[h] = l.type === s.Number ? l.value : l.value / 100, h === "alpha" && (i[h] = Math.max(0, Math.min(1, i[h]))));
  return i;
}
function Er(e, t) {
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
function ja(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let i = Er(e, t);
  if (i)
    return i.unshift(r.value), i;
}
var Ir = (e) => {
  if (typeof e != "string") return;
  const t = Ba(e), r = t ? ja(t, !0) : void 0;
  let i, a = 0, n = we.length;
  for (; a < n; ) if ((i = we[a++](e, r)) !== void 0) return i;
  return t ? Da(t) : void 0;
};
function Xa(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, i, a, n, o] = t;
  if (!(i.type === s.Hue || a.type === s.Hue || n.type === s.Hue))
    return i.type !== s.None && (r.r = i.type === s.Number ? i.value / 255 : i.value / 100), a.type !== s.None && (r.g = a.type === s.Number ? a.value / 255 : a.value / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value / 255 : n.value / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Fa = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, Ya = (e, t, r) => e + r * (t - e), Za = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let i = e[r], a = e[r + 1];
    i === void 0 && a === void 0 ? t.push(void 0) : i !== void 0 && a !== void 0 ? t.push([i, a]) : t.push(i !== void 0 ? [i, i] : [a, a]);
  }
  return t;
}, Ga = (e) => (t) => {
  let r = Za(t);
  return (i) => {
    let a = i * r.length, n = i >= 1 ? r.length - 1 : Math.max(Math.floor(a), 0), o = r[n];
    return o === void 0 ? void 0 : e(o[0], o[1], a - n);
  };
}, c = Ga(Ya), w = (e) => {
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
    Xa,
    Ta,
    Ia,
    za,
    Fa,
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
}, Ja = {
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
}, P = (e) => (e = e % 360) < 0 ? e + 360 : e, Ka = (e, t) => e.map((r, i, a) => {
  if (r === void 0) return r;
  let n = P(r);
  return i === 0 || e[i - 1] === void 0 ? n : t(n - P(a[i - 1]));
}).reduce((r, i) => !r.length || i === void 0 || r[r.length - 1] === void 0 ? (r.push(i), r) : (r.push(i + r[r.length - 1]), r), []), N = (e) => Ka(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), k = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], Ua = Math.PI / 180, Qa = 180 / Math.PI, ar = k[3] * k[4], ir = k[1] * k[4], nr = k[1] * k[2] - k[0] * k[3], Va = ({ r: e, g: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (nr * r + e * ar - t * ir) / (nr + ar - ir), n = r - a, o = (k[4] * (t - a) - k[2] * n) / k[3], l = {
    mode: "cubehelix",
    l: a,
    s: a === 0 || a === 1 ? void 0 : Math.sqrt(n * n + o * o) / (k[4] * a * (1 - a))
  };
  return l.s && (l.h = Math.atan2(o, n) * Qa - 120), i !== void 0 && (l.alpha = i), l;
}, ei = ({ h: e, s: t, l: r, alpha: i }) => {
  let a = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Ua, r === void 0 && (r = 0);
  let n = t === void 0 ? 0 : t * r * (1 - r), o = Math.cos(e), l = Math.sin(e);
  return a.r = r + n * (k[0] * o + k[1] * l), a.g = r + n * (k[2] * o + k[3] * l), a.b = r + n * (k[4] * o + k[5] * l), i !== void 0 && (a.alpha = i), a;
}, Ee = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = P(e.h), i = P(t.h), a = Math.sin((i - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * a;
}, ti = (e, t) => {
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
}, ri = {
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
  fromMode: { rgb: Va },
  toMode: { rgb: ei },
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
}, Nr = Math.pow(29, 3) / Math.pow(3, 3), Wr = Math.pow(6, 3) / Math.pow(29, 3), M = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, Z = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, go = Math.pow(29, 3) / Math.pow(3, 3), bo = Math.pow(6, 3) / Math.pow(29, 3), tt = (e) => Math.pow(e, 3) > Wr ? Math.pow(e, 3) : (116 * e - 16) / Nr, Rr = ({ l: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (e + 16) / 116, n = t / 500 + a, o = a - r / 200, l = {
    mode: "xyz65",
    x: tt(n) * Z.X,
    y: tt(a) * Z.Y,
    z: tt(o) * Z.Z
  };
  return i !== void 0 && (l.alpha = i), l;
}, Ne = (e) => X(Rr(e)), rt = (e) => e > Wr ? Math.cbrt(e) : (Nr * e + 16) / 116, Lr = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = rt(e / Z.X), n = rt(t / Z.Y), o = rt(r / Z.Z), l = {
    mode: "lab65",
    l: 116 * n - 16,
    a: 500 * (a - n),
    b: 200 * (n - o)
  };
  return i !== void 0 && (l.alpha = i), l;
}, We = (e) => {
  let t = Lr(j(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, de = 26 / 180 * Math.PI, ke = Math.cos(de), Pe = Math.sin(de), Hr = 100 / Math.log(139 / 100), xt = ({ l: e, c: t, h: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "lab65",
    l: (Math.exp(e * 1 / Hr) - 1) / 39e-4
  }, n = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, o = n * Math.cos(r / 180 * Math.PI - de), l = n * Math.sin(r / 180 * Math.PI - de);
  return a.a = o * ke - l / 0.83 * Pe, a.b = o * Pe + l / 0.83 * ke, i !== void 0 && (a.alpha = i), a;
}, kt = ({ l: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = t * ke + r * Pe, n = 0.83 * (r * ke - t * Pe), o = Math.sqrt(a * a + n * n), l = {
    mode: "dlch",
    l: Hr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = P((Math.atan2(n, a) + de) / Math.PI * 180)), i !== void 0 && (l.alpha = i), l;
}, or = (e) => xt(L(e, "dlch")), lr = (e) => H(kt(e), "dlab"), ai = {
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
}, ii = {
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
function ni({ h: e, s: t, i: r, alpha: i }) {
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
function oi({ r: e, g: t, b: r, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * n / (e + t + r),
    i: (e + t + r) / 3
  };
  return a - n !== 0 && (o.h = (a === e ? (t - r) / (a - n) + (t < r) * 6 : a === t ? (r - e) / (a - n) + 2 : (e - t) / (a - n) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
var li = {
  mode: "hsi",
  toMode: { rgb: ni },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: oi },
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
function si({ h: e, s: t, l: r, alpha: i }) {
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
function hi({ r: e, g: t, b: r, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsl",
    s: a === n ? 0 : (a - n) / (1 - Math.abs(a + n - 1)),
    l: 0.5 * (a + n)
  };
  return a - n !== 0 && (o.h = (a === e ? (t - r) / (a - n) + (t < r) * 6 : a === t ? (r - e) / (a - n) + 2 : (e - t) / (a - n) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
var ci = (e, t) => {
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
}, di = new RegExp(`^hsla?\\(\\s*${Ca}${K}${he}${K}${he}\\s*(?:,\\s*${At}\\s*)?\\)$`), ui = (e) => {
  let t = e.match(di);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = ci(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function vi(e, t) {
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
var qr = {
  mode: "hsl",
  toMode: { rgb: si },
  fromMode: { rgb: hi },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [vi, ui],
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
function Or({ h: e, s: t, v: r, alpha: i }) {
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
function Br({ r: e, g: t, b: r, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsv",
    s: a === 0 ? 0 : 1 - n / a,
    v: a
  };
  return a - n !== 0 && (o.h = (a === e ? (t - r) / (a - n) + (t < r) * 6 : a === t ? (r - e) / (a - n) + 2 : (e - t) / (a - n) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
var Dr = {
  mode: "hsv",
  toMode: { rgb: Or },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Br },
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
function pi({ h: e, w: t, b: r, alpha: i }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let a = t + r;
    t /= a, r /= a;
  }
  return Or({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: i
  });
}
function fi(e) {
  let t = Br(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, i = t.v !== void 0 ? t.v : 0, a = {
    mode: "hwb",
    w: (1 - r) * i,
    b: 1 - i
  };
  return t.h !== void 0 && (a.h = t.h), t.alpha !== void 0 && (a.alpha = t.alpha), a;
}
function mi(e, t) {
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
var gi = {
  mode: "hwb",
  toMode: { rgb: pi },
  fromMode: { rgb: fi },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [mi],
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
  difference: { h: ti },
  average: { h: W }
}, Re = 0.1593017578125, jr = 78.84375, Le = 0.8359375, He = 18.8515625, qe = 18.6875;
function at(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / jr);
  return 1e4 * Math.pow(Math.max(0, t - Le) / (He - qe * t), 1 / Re);
}
function it(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Re);
  return Math.pow((Le + He * t) / (1 + qe * t), jr);
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
}, bi = {
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
}, yi = 134.03437499999998, Mi = 16295499532821565e-27, lt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Re);
  return Math.pow((Le + He * t) / (1 + qe * t), yi);
}, st = (e = 0) => Math.max(e * 203, 0), Xr = ({ x: e, y: t, z: r, alpha: i }) => {
  e = st(e), t = st(t), r = st(r);
  let a = 1.15 * e - 0.15 * r, n = 0.66 * t + 0.34 * e, o = lt(0.41478972 * a + 0.579999 * n + 0.014648 * r), l = lt(-0.20151 * a + 1.120649 * n + 0.0531008 * r), h = lt(-0.0166008 * a + 0.2648 * n + 0.6684799 * r), d = (o + l) / 2, v = {
    mode: "jab",
    j: 0.44 * d / (1 - 0.56 * d) - Mi,
    a: 3.524 * o - 4.066708 * l + 0.542708 * h,
    b: 0.199076 * o + 1.096799 * l - 1.295875 * h
  };
  return i !== void 0 && (v.alpha = i), v;
}, wi = 134.03437499999998, cr = 16295499532821565e-27, ht = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / wi);
  return 1e4 * Math.pow((Le - t) / (qe * t - He), 1 / Re);
}, ct = (e) => e / 203, Fr = ({ j: e, a: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = (e + cr) / (0.44 + 0.56 * (e + cr)), n = ht(a + 0.13860504 * t + 0.058047316 * r), o = ht(a - 0.13860504 * t - 0.058047316 * r), l = ht(a - 0.096019242 * t - 0.8118919 * r), h = {
    mode: "xyz65",
    x: ct(1.661373024652174 * n - 0.914523081304348 * o + 0.23136208173913045 * l),
    y: ct(-0.3250758611844533 * n + 1.571847026732543 * o - 0.21825383453227928 * l),
    z: ct(-0.090982811 * n - 0.31272829 * o + 1.5227666 * l)
  };
  return i !== void 0 && (h.alpha = i), h;
}, Yr = (e) => {
  let t = Xr(j(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Zr = (e) => X(Fr(e)), xi = {
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
    rgb: Yr,
    xyz65: Xr
  },
  toMode: {
    rgb: Zr,
    xyz65: Fr
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
}, ki = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: ur,
    rgb: (e) => Zr(ur(e))
  },
  fromMode: {
    rgb: (e) => dr(Yr(e)),
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
}, Gr = (e) => ue(Nt(e)), ve = (e) => {
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
}, Jr = (e) => {
  let t = Wt(ve(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Pi(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, i, a, n, o] = t;
  if (!(i.type === s.Hue || a.type === s.Hue || n.type === s.Hue))
    return i.type !== s.None && (r.l = Math.min(Math.max(0, i.value), 100)), a.type !== s.None && (r.a = a.type === s.Number ? a.value : a.value * 125 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 125 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Rt = {
  mode: "lab",
  toMode: {
    xyz50: Nt,
    rgb: Gr
  },
  fromMode: {
    xyz50: Wt,
    rgb: Jr
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
  parse: [Pi],
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
}, _i = {
  ...Rt,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Rr,
    rgb: Ne
  },
  fromMode: {
    xyz65: Lr,
    rgb: We
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function zi(e, t) {
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
    rgb: (e) => Gr(H(e))
  },
  fromMode: {
    rgb: (e) => L(Jr(e)),
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
  parse: [zi],
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
}, Si = {
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
}, Kr = ({ l: e, u: t, v: r, alpha: i }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.sqrt(t * t + r * r), n = {
    mode: "lchuv",
    l: e,
    c: a
  };
  return a && (n.h = P(Math.atan2(r, t) * 180 / Math.PI)), i !== void 0 && (n.alpha = i), n;
}, Ur = ({ l: e, c: t, h: r, alpha: i }) => {
  r === void 0 && (r = 0);
  let a = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Qr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Vr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Ti = Qr(M.X, M.Y, M.Z), $i = Vr(M.X, M.Y, M.Z), Ci = (e) => e <= It ? Oe * e : 116 * Math.cbrt(e) - 16, Pt = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Ci(t / M.Y), n = Qr(e, t, r), o = Vr(e, t, r);
  !isFinite(n) || !isFinite(o) ? a = n = o = 0 : (n = 13 * a * (n - Ti), o = 13 * a * (o - $i));
  let l = {
    mode: "luv",
    l: a,
    u: n,
    v: o
  };
  return i !== void 0 && (l.alpha = i), l;
}, Ai = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Ei = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Ii = Ai(M.X, M.Y, M.Z), Ni = Ei(M.X, M.Y, M.Z), _t = ({ l: e, u: t, v: r, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = t / (13 * e) + Ii, n = r / (13 * e) + Ni, o = M.Y * (e <= 8 ? e / Oe : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: o * (9 * a) / (4 * n),
    y: o,
    z: o * (12 - 3 * a - 20 * n) / (4 * n)
  };
  return i !== void 0 && (l.alpha = i), l;
}, Wi = (e) => Kr(Pt(ve(e))), Ri = (e) => ue(_t(Ur(e))), Li = {
  mode: "lchuv",
  toMode: {
    luv: Ur,
    rgb: Ri
  },
  fromMode: {
    rgb: Wi,
    luv: Kr
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
}, Hi = {
  ...U,
  mode: "lrgb",
  toMode: { rgb: V },
  fromMode: { rgb: Q },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, qi = {
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
}, ea = ({ r: e, g: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), n = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * a + 0.7936177747023054 * n - 0.0040720430116193 * o,
    a: 1.9779985324311684 * a - 2.42859224204858 * n + 0.450593709617411 * o,
    b: 0.0259040424655478 * a + 0.7827717124575296 * n - 0.8086757549230774 * o
  };
  return i !== void 0 && (l.alpha = i), l;
}, Be = (e) => {
  let t = ea(Q(e));
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
function Oi(e, t) {
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
  let r = Oi(e, t), i = pe({
    l: 1,
    a: r * e,
    b: r * t
  }), a = Math.cbrt(1 / Math.max(i.r, i.g, i.b));
  return [a, a * r];
}
function Bi(e, t, r, i, a, n = null) {
  n || (n = Ht(e, t));
  let o;
  if ((r - a) * n[1] - (n[0] - a) * i <= 0) o = n[1] * a / (i * n[0] + n[1] * (a - r));
  else {
    o = n[1] * (a - 1) / (i * (n[0] - 1) + n[1] * (a - r));
    {
      let l = r - a, h = i, d = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, u = -0.0894841775 * e - 1.291485548 * t, f = l + h * d, m = l + h * v, b = l + h * u;
      {
        let y = a * (1 - o) + o * r, x = o * i, S = y + x * d, _ = y + x * v, R = y + x * u, ee = S * S * S, te = _ * _ * _, re = R * R * R, ae = 3 * f * S * S, ie = 3 * m * _ * _, ne = 3 * b * R * R, F = 6 * f * f * S, O = 6 * m * m * _, oe = 6 * b * b * R, Jt = 4.0767416621 * ee - 3.3077115913 * te + 0.2309699292 * re - 1, Fe = 4.0767416621 * ae - 3.3077115913 * ie + 0.2309699292 * ne, ba = 4.0767416621 * F - 3.3077115913 * O + 0.2309699292 * oe, Kt = Fe / (Fe * Fe - 0.5 * Jt * ba), Ye = -Jt * Kt, Ut = -1.2684380046 * ee + 2.6097574011 * te - 0.3413193965 * re - 1, Ze = -1.2684380046 * ae + 2.6097574011 * ie - 0.3413193965 * ne, ya = -1.2684380046 * F + 2.6097574011 * O - 0.3413193965 * oe, Qt = Ze / (Ze * Ze - 0.5 * Ut * ya), Ge = -Ut * Qt, Vt = -0.0041960863 * ee - 0.7034186147 * te + 1.707614701 * re - 1, Je = -0.0041960863 * ae - 0.7034186147 * ie + 1.707614701 * ne, Ma = -0.0041960863 * F - 0.7034186147 * O + 1.707614701 * oe, er = Je / (Je * Je - 0.5 * Vt * Ma), Ke = -Vt * er;
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
function ta(e, t, r) {
  let i = Ht(t, r), a = Bi(t, r, e, 1, e, i), n = qt(t, r, i), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), h = a / Math.min(e * n[0], (1 - e) * n[1]), d = e * o, v = (1 - e) * l, u = 0.9 * h * Math.sqrt(Math.sqrt(1 / (1 / (d * d * d * d) + 1 / (v * v * v * v))));
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
  let [o, l, h] = ta(t, r / n, i / n), d;
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
  let n = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [l, h, d] = ta(a.l, n, o), v, u, f, m;
  r < 0.8 ? (v = 1.25 * r, u = 0, f = 0.8 * l, m = 1 - f / h) : (v = 5 * (r - 0.8), u = h, f = 0.2 * h * h * 1.25 * 1.25 / l, m = 1 - f / (d - h));
  let b = u + v * f / (1 - m * v);
  return a.a = b * n, a.b = b * o, a;
}
var Di = {
  ...qr,
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
var ji = {
  ...Dr,
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
function Xi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, i, a, n, o] = t;
  if (!(i.type === s.Hue || a.type === s.Hue || n.type === s.Hue))
    return i.type !== s.None && (r.l = Math.min(Math.max(0, i.type === s.Number ? i.value : i.value / 100), 1)), a.type !== s.None && (r.a = a.type === s.Number ? a.value : a.value * 0.4 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 0.4 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Fi = {
  ...Rt,
  mode: "oklab",
  toMode: {
    lrgb: pe,
    rgb: De
  },
  fromMode: {
    lrgb: ea,
    rgb: Be
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Xi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Yi(e, t) {
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
var Zi = {
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
  parse: [Yi],
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
}, Gi = {
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
}, Ji = {
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
}, Ki = 1.09929682680944, Ui = 0.018053968510807, ft = (e) => {
  const t = Math.abs(e);
  return t > Ui ? (Math.sign(e) || 1) * (Ki * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, wr = ({ x: e, y: t, z: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "rec2020",
    r: ft(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: ft(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: ft(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return i !== void 0 && (a.alpha = i), a;
}, xr = 1.09929682680944, Qi = 0.018053968510807, mt = (e = 0) => {
  let t = Math.abs(e);
  return t < Qi * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + xr - 1) / xr, 1 / 0.45);
}, kr = (e) => {
  let t = mt(e.r), r = mt(e.g), i = mt(e.b), a = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * i,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * i,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, Vi = {
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
}, D = 0.0037930732552754493, ra = Math.cbrt(D), gt = (e) => Math.cbrt(e) - ra, en = (e) => {
  const { r: t, g: r, b: i, alpha: a } = Q(e), n = gt(0.3 * t + 0.622 * r + 0.078 * i + D), o = gt(0.23 * t + 0.692 * r + 0.078 * i + D), l = gt(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * i + D), h = {
    mode: "xyb",
    x: (n - o) / 2,
    y: (n + o) / 2,
    b: l - (n + o) / 2
  };
  return a !== void 0 && (h.alpha = a), h;
}, bt = (e) => Math.pow(e + ra, 3), tn = ({ x: e, y: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = bt(e + t) - D, n = bt(t - e) - D, o = bt(r + t) - D, l = V({
    r: 11.031566904639861 * a - 9.866943908131562 * n - 0.16462299650829934 * o,
    g: -3.2541473810744237 * a + 4.418770377582723 * n - 0.16462299650829934 * o,
    b: -3.6588512867136815 * a + 2.7129230459360922 * n + 1.9459282407775895 * o
  });
  return i !== void 0 && (l.alpha = i), l;
}, rn = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: tn },
  fromMode: { rgb: en },
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
}, an = {
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
}, nn = (e) => {
  let { x: t, y: r, z: i, alpha: a } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), i === void 0 && (i = 0);
  let n = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * i,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * i,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, on = (e) => {
  let { x: t, y: r, z: i, alpha: a } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), i === void 0 && (i = 0);
  let n = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * i,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * i,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * i
  };
  return a !== void 0 && (n.alpha = a), n;
}, ln = {
  mode: "xyz65",
  toMode: {
    rgb: X,
    xyz50: nn
  },
  fromMode: {
    rgb: j,
    xyz50: on
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
}, sn = ({ r: e, g: t, b: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, hn = ({ y: e, i: t, q: r, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const a = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, cn = {
  mode: "yiq",
  toMode: { rgb: hn },
  fromMode: { rgb: sn },
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
}, dn = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, un = (e = 4) => (t) => typeof t == "number" ? dn(t, e) : t, yo = un(2), vn = (e) => Math.max(0, Math.min(1, e || 0)), yt = (e) => Math.round(vn(e) * 255), pn = Et("rgb"), Mo = Et("hsl"), fn = (e) => {
  if (e === void 0) return;
  let t = yt(e.r), r = yt(e.g), i = yt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | i).toString(16).slice(1);
}, Ot = (e) => fn(pn(e)), wo = g(Ja), xo = g(ri), ko = g(ai), Po = g(ii), _o = g(li), zo = g(qr), So = g(Dr), To = g(gi), $o = g(bi), Co = g(xi), Ao = g(ki), Eo = g(Rt), Io = g(_i), No = g(Lt), Wo = g(Si), Ro = g(Li), Lo = g(Hi), Ho = g(qi), qo = g(Di), Oo = g(ji), Bo = g(Fi), ze = g(Zi), Do = g(Gi), jo = g(Ji), Xo = g(Vi), Fo = g(U), Yo = g(rn), Zo = g(an), Go = g(ln), Jo = g(cn), aa = (e, t = "l") => e.sort((r, i) => Math.sign(ze({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - ze({
  mode: "rgb",
  r: i[0],
  g: i[1],
  b: i[2]
})?.[t]) || 0), Bt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), mn = (e, t) => {
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
}, gn = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], bn = (e, t) => {
  let r = aa(yn(e, t));
  const i = 10;
  for (let a = 0; a < i; a++) {
    const n = mn(e, r).map((o) => o.points.length > 0 ? gn(o.points) : null);
    if (n.every((o, l) => o && Bt(o, r[l]) < 1e-3)) break;
    r = n;
  }
  return r;
}, yn = (e, t) => {
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
}, Mn = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((n) => n?.blob?.()), r = await createImageBitmap(t), i = new OffscreenCanvas(r.width, r.height), a = i.getContext("2d");
  return a.filter = "blur(16px)", a?.drawImage?.(r, 0, 0, i.width, i.height), i;
}, wn = async (e) => {
  const t = await Mn(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), i = r.getContext("2d");
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
}, xn = async (e) => {
  const t = await wn(e);
  return aa(bn(t, 4), "h");
}, kn = "rs-wallpaper-theme", Pn = "rs-wallpaper-primary", _n = "rs-wallpaper-theme-src", Dt = kn, zn = Pn, Pr = _n, jt = 0.52, Sn = 0.025, ce = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, I = null, Tn = 0.03, $n = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], Cn = (e, t, r) => Math.min(r, Math.max(t, e)), _r = (e, t, r, i) => Ot({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || i, An = (e) => {
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
}, En = (e) => ze(e)?.l ?? 0.4, In = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, Xt = (e) => Number.isFinite(e) && e >= Tn && e <= 1, Nn = (e, t) => {
  if (!e.length && t == null) return { ...ce };
  const r = e.map((v) => v.l).sort((v, u) => v - u), i = e.length ? e.reduce((v, u) => v + u.l, 0) / e.length : t, a = r.length ? r[Math.floor(r.length / 2)] : i, n = Cn(t != null && Xt(t) ? t : Math.max(i, a), 0.08, 0.94), o = e.length ? [...e].sort((v, u) => v.c - u.c || Math.abs(v.l - n) - Math.abs(u.l - n))[0] : null, l = o ? Math.min(Sn, Math.max(0, o.c * 0.2)) : 0, h = o?.h || 0, d = n < jt;
  return {
    underlying: _r(n, l, h, d ? ce.underlying : "#e8e6e2"),
    contrast: _r(d ? 0.93 : 0.16, 8e-3, h, d ? ce.contrast : "#141416")
  };
}, Wn = async (e) => {
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
}, Rn = (e) => e <= jt ? { ...ce } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, Ln = (e) => !!(e.underlying && e.contrast), Hn = (e, t) => {
  const r = e.map(An).filter(Boolean);
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
  }, h = l([n]), d = l([n, h]), v = Nn(r, t);
  return {
    primary: n.hex,
    secondary: h.hex,
    tertiary: d.hex,
    ...v
  };
}, ia = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, qn = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, B = (e) => !!Ir(e), St = (e, t = []) => {
  if (typeof document > "u") return;
  const r = En(e.underlying) < jt, { shadow: i, glow: a } = In(r), n = new Set(ia());
  for (const l of t) n.add(l);
  if (!B(e.underlying) || !B(e.contrast) || !B(i) || !B(a)) return;
  se("--wallpaper-underlying-color", e.underlying), se("--wallpaper-contrast-color", e.contrast), se("--env-launcher-fg", e.contrast), se("--env-launcher-fg-shadow", i), se("--env-launcher-fg-glow", a);
  for (const l of n)
    A(l, "--wallpaper-underlying-color", e.underlying), A(l, "--wallpaper-contrast-color", e.contrast), A(l, "--env-launcher-fg", e.contrast), A(l, "--env-launcher-fg-shadow", i), A(l, "--env-launcher-fg-glow", a);
  const o = Tr("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
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
}, On = (e) => {
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
}, Bn = (e, t = []) => {
  if (!Xt(e))
    return I ? (St(I, t), I) : { ...ce };
  const r = Rn(e);
  return I = r, St(r, t), On(r), r;
}, be = (e) => {
  const t = I ? {
    ...e,
    ...I
  } : e;
  try {
    localStorage.setItem(Dt, JSON.stringify(t)), localStorage.setItem(zn, t.primary);
  } catch {
  }
  if (Ln(t) && St(t), !qn()) return;
  for (const i of ia()) for (const [a, n] of $n) A(i, a, t[n]);
  if (!B(t.primary) || !B(t.secondary) || !B(t.tertiary)) return;
  document.querySelectorAll("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((i) => {
    A(i, "--color-primary", t.primary), A(i, "--base-color", t.primary), A(i, "--color-secondary", t.secondary), A(i, "--color-tertiary", t.tertiary);
  });
  const r = Tr("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
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
  const i = await Wn(e);
  if (i != null && Bn(i), !t?.force) try {
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
    const a = await xn(e), n = Hn(a, i ?? void 0);
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
}, Dn = () => {
  const e = Se();
  return e && be(e), e;
}, na = "rs-wallpaper-image", $ = "/assets/wallpaper.jpg", Ft = "/assets/user-wallpaper", oa = "cwsp-user-wallpaper", Tt = "idb:rs-wallpaper", jn = "cwsp-wallpaper-v1", q = "blobs", Yt = "current", la = 512e3, z = null, je = 0, G = () => ka?.[wa()] ?? 0, $e = (e) => e === "idb:rs-wallpaper" || e.startsWith("idb:"), sa = (e) => e.startsWith("blob:") || e.startsWith("data:") && (e.length > la || !/^data:image\//i.test(e)), ha = () => {
  if (je += 1, z && z.startsWith("blob:")) try {
    URL.revokeObjectURL(z);
  } catch {
  }
  z = null;
}, ca = (e, t) => (t !== je || z || (z = URL.createObjectURL(e)), z), Zt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(jn, 1);
  r.onupgradeneeded = () => {
    const i = r.result;
    i.objectStoreNames.contains(q) || i.createObjectStore(q);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), Xn = async (e) => {
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
}, da = async (e) => {
  if (typeof caches > "u" || !(e instanceof Blob) || e.size <= 0) return;
  const t = await caches.open(oa), r = e.type && e.type.startsWith("image/") ? e.type : "image/jpeg";
  await t.put(new Request(Ft), new Response(e, { headers: { "Content-Type": r } }));
}, Fn = async () => {
  if (!(typeof caches > "u"))
    try {
      await (await caches.open(oa)).delete(new Request(Ft));
    } catch {
    }
}, Yn = async () => {
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
    const e = localStorage.getItem(na);
    return e && e.trim() ? e.trim() : $;
  } catch {
    return $;
  }
}, Ce = (e) => {
  if (e.startsWith("blob:")) return !1;
  try {
    return localStorage.setItem(na, e), !0;
  } catch {
    return !1;
  }
}, Zn = async () => {
  if (z) return z;
  const e = je;
  try {
    const t = await Gt();
    return t ? ca(t, e) : null;
  } catch (t) {
    return console.warn("[fest/image] wallpaper IDB restore failed", t), null;
  }
}, Gn = (e) => e.startsWith("data:") || e.startsWith("blob:"), ua = async () => {
  const e = Xe();
  if ($e(e) || sa(e)) {
    const t = await Zn();
    return t ? ($e(e) || Ce(Tt), t) : $t() ? "" : $;
  }
  return $t() && (!e || e === $) ? "" : e || $;
}, Y = null, Jn = () => Y || (Y = (async () => {
  const e = Xe();
  if ($e(e) || sa(e)) {
    const a = await Gt();
    if (!a) return null;
    da(a).catch(() => {
    });
    const n = ca(a, je);
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
})().catch(() => null), Y), Kn = async (e) => {
  if (!Y || !e) return null;
  const t = await Y;
  return t && (t.url === e || t.url === e.split("#")[0]) ? t.blob : null;
}, Ko = () => Xe(), zr = (e) => {
  const t = () => {
    const r = G(), i = String(r);
    e.getAttribute("data-orient") !== i && e.setAttribute("data-orient", i), e.getAttribute("orient") !== i && e.setAttribute("orient", i), e.style.setProperty("--orient", i), e.orient = r;
  };
  return t(), Pa(t);
}, Un = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = G(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, Uo = () => {
  ua().then((e) => {
    Un(), Ae(e);
  });
}, J = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, Ae = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(G());
  t.forEach((i) => {
    i.setAttribute("data-src", e), i.setAttribute("data-orient", r), i.setAttribute("orient", r), i.style.setProperty("--orient", r);
  });
}, Qn = async (e) => (await fetch(e)).blob(), Vn = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return eo($), $;
  ha(), z = URL.createObjectURL(e), Ae(z), Te(e, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(J);
  });
  try {
    await Xn(e), Ce(Tt), da(e).catch(() => {
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
}, Qo = (e) => {
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
  }), ro();
  const n = Xe(), o = $e(n) ? Ft : n.startsWith("data:") || n.startsWith("blob:") ? "" : n, l = Jn();
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
  return Dn(), J(r), (async () => {
    const d = await ua();
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
}, eo = (e) => {
  const t = String(e || "").trim() || $;
  if (Gn(t) || t.length > la) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await Qn(t);
        await Vn(r);
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
  Yn(), Fn(), ha(), Ce(t) || console.warn("[fest/image] wallpaper pointer write failed"), Ae(t), Te(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(J);
  });
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: t,
      url: t
    } }));
  } catch {
  }
}, va = /* @__PURE__ */ Symbol.for("image.canvas.blob");
globalThis[va] ??= /* @__PURE__ */ new WeakMap();
var ge = globalThis[va], pa = /* @__PURE__ */ Symbol.for("image.canvas.delayed");
globalThis[pa] ??= /* @__PURE__ */ new Map([]);
var to = globalThis[pa], fa = /* @__PURE__ */ Symbol.for("image.canvas.scheduler");
globalThis[fa] ??= xa();
var Vo = globalThis[fa], ma = /* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc");
globalThis[ma] ??= /* @__PURE__ */ new Set();
var C = globalThis[ma], $t = () => {
  try {
    if (String(document.documentElement?.dataset?.cwspSku || "").toLowerCase() === "process") return !0;
    const e = String(globalThis.location?.hostname || "").toLowerCase();
    return e === "process.u2re.space" || e === "workcenter.u2re.space" || e === "ai.u2re.space";
  } catch {
    return !1;
  }
}, ro = () => {
  $t() && C.add($);
}, ye = (e) => e?.naturalWidth || e?.width || 1, Me = (e) => e?.naturalHeight || e?.height || 1, ao = (e) => {
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
  to.set(e, t);
}, io = (e, t, r = 1, i, a = 0) => {
  const n = e.canvas;
  e.translate(n.width / 2, n.height / 2), e.rotate((-a || 0) * (Math.PI * 0.5)), e.rotate((1 - i) * (Math.PI / 2)), e.translate(-(ye(t) / 2) * r, -(Me(t) / 2) * r);
}, no = (e) => {
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
}, ga = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[ga] ??= /* @__PURE__ */ new WeakMap();
var Sr = globalThis[ga], oo = (e, t) => {
  const r = Sr.get(e);
  if (typeof r == "function") return r;
  const i = e.bind(t);
  return Sr.set(e, i), i;
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
    scheduler?.yield?.()?.then?.(() => {
      this.ctx = ao(t);
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
    const i = t instanceof ImageBitmap ? t : await no(t).catch(console.warn.bind(console));
    return i && r == this.#t && (this.image = i, this.#i(r)), t;
  }
  $renderPass(t) {
    const r = this, i = this.ctx, a = this.image;
    if (a && i && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const n = this.#a % 2 || 0, o = ye(a) <= Me(a) ? 1 : 0, l = Math.max(r[["height", "width"][n]] / (o ? Me(a) : ye(a)), r[["width", "height"][n]] / (o ? ye(a) : Me(a)));
      i.save(), i.clearRect(0, 0, r.width, r.height), io(i, a, l, o, this.#a), i.drawImage(a, 0, 0, a.width * l, a.height * l), i.restore();
    }
  }
  #n(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || C.has(r) ? Promise.resolve() : r.startsWith("data:") && !/^data:image\//i.test(r) ? (C.add(r), Promise.resolve()) : Kn(r).then((i) => i && r === this.#t ? this.$useImageAsSource(i, r)?.catch?.(() => {
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
    this.image && r && (t == this.#t || !t) && scheduler?.yield?.()?.then?.(oo(this.$renderPass, this));
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
  oa as USER_WALLPAPER_CACHE,
  Ft as USER_WALLPAPER_PATH,
  Tt as WALLPAPER_IDB_MARKER,
  Pn as WALLPAPER_PRIMARY_STORAGE_KEY,
  _n as WALLPAPER_THEME_SRC_STORAGE_KEY,
  kn as WALLPAPER_THEME_STORAGE_KEY,
  Te as applyThemeFromWallpaper,
  Bn as applyWallpaperPaperFromLuma,
  St as applyWallpaperPaperTokens,
  be as applyWallpaperThemeSeeds,
  Sr as bindCache,
  ge as blobImageMap,
  el as callByFrame,
  io as cover,
  no as createImageBitmapCache,
  to as delayed,
  Rn as deriveWallpaperPaperTokensFromLuma,
  co as electronAPI,
  C as failedWallpaperSrc,
  xn as getDominantColors,
  Ko as getWallpaperStoragePointer,
  Qo as initializeAppCanvasLayer,
  Se as loadCachedWallpaperTheme,
  uo as qualityMode,
  Hn as rankWallpaperSeeds,
  Uo as refreshAppWallpaperPaint,
  se as registerColorProperty,
  ua as resolveAppWallpaperUrl,
  Dn as restoreWallpaperThemeCache,
  Vo as schedulerRf,
  eo as setAppWallpaper,
  Vn as setAppWallpaperFromBlob,
  Un as syncAppWallpaperOrient,
  zr as syncCanvasOrient,
  ia as themeHosts,
  Jn as warmAppWallpaper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFEgfSBmcm9tIFwiQGZlc3QtbGliL2x1cmVcIjtcbmltcG9ydCB7IHNldFN0eWxlUHJvcGVydHkgfSBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBtYWtlUkFGQ3ljbGUsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCB3aGVuQW55U2NyZWVuQ2hhbmdlcyB9IGZyb20gXCJAZmVzdC1saWIvZG9tXCI7XG5cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0NvbmZpZy50c1xudmFyIGVsZWN0cm9uQVBJID0gXCJlbGVjdHJvbkJyaWRnZVwiO1xudmFyIHF1YWxpdHlNb2RlID0geyBcImZhc3RcIjoge1xuXHRkaXZpc29yOiA0LFxuXHRmaWx0ZXI6IFwiYmx1cig0cHgpXCIsXG5cdHNhbXBsaW5nOiAxMjhcbn0gfTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlTnVtYmVyLmpzXG52YXIgcGFyc2VOdW1iZXIgPSAoY29sb3IsIGxlbikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcIm51bWJlclwiKSByZXR1cm47XG5cdGlmIChsZW4gPT09IDMpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRiOiAoY29sb3IgJiAxNSB8IGNvbG9yIDw8IDQgJiAyNDApIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDQpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMTIgJiAxNSB8IGNvbG9yID4+IDggJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA4ICYgMTUgfCBjb2xvciA+PiA0ICYgMjQwKSAvIDI1NSxcblx0XHRiOiAoY29sb3IgPj4gNCAmIDE1IHwgY29sb3IgJiAyNDApIC8gMjU1LFxuXHRcdGFscGhhOiAoY29sb3IgJiAxNSB8IGNvbG9yIDw8IDQgJiAyNDApIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDYpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRiOiAoY29sb3IgJiAyNTUpIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDgpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMjQgJiAyNTUpIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxuXHRcdGFscGhhOiAoY29sb3IgJiAyNTUpIC8gMjU1XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb2xvcnMvbmFtZWQuanNcbnZhciBuYW1lZCA9IHtcblx0YWxpY2VibHVlOiAxNTc5MjM4Myxcblx0YW50aXF1ZXdoaXRlOiAxNjQ0NDM3NSxcblx0YXF1YTogNjU1MzUsXG5cdGFxdWFtYXJpbmU6IDgzODg1NjQsXG5cdGF6dXJlOiAxNTc5NDE3NSxcblx0YmVpZ2U6IDE2MTE5MjYwLFxuXHRiaXNxdWU6IDE2NzcwMjQ0LFxuXHRibGFjazogMCxcblx0YmxhbmNoZWRhbG1vbmQ6IDE2NzcyMDQ1LFxuXHRibHVlOiAyNTUsXG5cdGJsdWV2aW9sZXQ6IDkwNTUyMDIsXG5cdGJyb3duOiAxMDgyNDIzNCxcblx0YnVybHl3b29kOiAxNDU5NjIzMSxcblx0Y2FkZXRibHVlOiA2MjY2NTI4LFxuXHRjaGFydHJldXNlOiA4Mzg4MzUyLFxuXHRjaG9jb2xhdGU6IDEzNzg5NDcwLFxuXHRjb3JhbDogMTY3NDQyNzIsXG5cdGNvcm5mbG93ZXJibHVlOiA2NTkxOTgxLFxuXHRjb3Juc2lsazogMTY3NzUzODgsXG5cdGNyaW1zb246IDE0NDIzMTAwLFxuXHRjeWFuOiA2NTUzNSxcblx0ZGFya2JsdWU6IDEzOSxcblx0ZGFya2N5YW46IDM1NzIzLFxuXHRkYXJrZ29sZGVucm9kOiAxMjA5MjkzOSxcblx0ZGFya2dyYXk6IDExMTE5MDE3LFxuXHRkYXJrZ3JlZW46IDI1NjAwLFxuXHRkYXJrZ3JleTogMTExMTkwMTcsXG5cdGRhcmtraGFraTogMTI0MzMyNTksXG5cdGRhcmttYWdlbnRhOiA5MTA5NjQzLFxuXHRkYXJrb2xpdmVncmVlbjogNTU5Nzk5OSxcblx0ZGFya29yYW5nZTogMTY3NDc1MjAsXG5cdGRhcmtvcmNoaWQ6IDEwMDQwMDEyLFxuXHRkYXJrcmVkOiA5MTA5NTA0LFxuXHRkYXJrc2FsbW9uOiAxNTMwODQxMCxcblx0ZGFya3NlYWdyZWVuOiA5NDE5OTE5LFxuXHRkYXJrc2xhdGVibHVlOiA0NzM0MzQ3LFxuXHRkYXJrc2xhdGVncmF5OiAzMTAwNDk1LFxuXHRkYXJrc2xhdGVncmV5OiAzMTAwNDk1LFxuXHRkYXJrdHVycXVvaXNlOiA1Mjk0NSxcblx0ZGFya3Zpb2xldDogOTY5OTUzOSxcblx0ZGVlcHBpbms6IDE2NzE2OTQ3LFxuXHRkZWVwc2t5Ymx1ZTogNDkxNTEsXG5cdGRpbWdyYXk6IDY5MDgyNjUsXG5cdGRpbWdyZXk6IDY5MDgyNjUsXG5cdGRvZGdlcmJsdWU6IDIwMDMxOTksXG5cdGZpcmVicmljazogMTE2NzQxNDYsXG5cdGZsb3JhbHdoaXRlOiAxNjc3NTkyMCxcblx0Zm9yZXN0Z3JlZW46IDIyNjM4NDIsXG5cdGZ1Y2hzaWE6IDE2NzExOTM1LFxuXHRnYWluc2Jvcm86IDE0NDc0NDYwLFxuXHRnaG9zdHdoaXRlOiAxNjMxNjY3MSxcblx0Z29sZDogMTY3NjY3MjAsXG5cdGdvbGRlbnJvZDogMTQzMjkxMjAsXG5cdGdyYXk6IDg0MjE1MDQsXG5cdGdyZWVuOiAzMjc2OCxcblx0Z3JlZW55ZWxsb3c6IDExNDAzMDU1LFxuXHRncmV5OiA4NDIxNTA0LFxuXHRob25leWRldzogMTU3OTQxNjAsXG5cdGhvdHBpbms6IDE2NzM4NzQwLFxuXHRpbmRpYW5yZWQ6IDEzNDU4NTI0LFxuXHRpbmRpZ286IDQ5MTUzMzAsXG5cdGl2b3J5OiAxNjc3NzIwMCxcblx0a2hha2k6IDE1Nzg3NjYwLFxuXHRsYXZlbmRlcjogMTUxMzI0MTAsXG5cdGxhdmVuZGVyYmx1c2g6IDE2NzczMzY1LFxuXHRsYXduZ3JlZW46IDgxOTA5NzYsXG5cdGxlbW9uY2hpZmZvbjogMTY3NzU4ODUsXG5cdGxpZ2h0Ymx1ZTogMTEzOTMyNTQsXG5cdGxpZ2h0Y29yYWw6IDE1NzYxNTM2LFxuXHRsaWdodGN5YW46IDE0NzQ1NTk5LFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogMTY0NDgyMTAsXG5cdGxpZ2h0Z3JheTogMTM4ODIzMjMsXG5cdGxpZ2h0Z3JlZW46IDk0OTgyNTYsXG5cdGxpZ2h0Z3JleTogMTM4ODIzMjMsXG5cdGxpZ2h0cGluazogMTY3NTg0NjUsXG5cdGxpZ2h0c2FsbW9uOiAxNjc1Mjc2Mixcblx0bGlnaHRzZWFncmVlbjogMjE0Mjg5MCxcblx0bGlnaHRza3libHVlOiA4OTAwMzQ2LFxuXHRsaWdodHNsYXRlZ3JheTogNzgzMzc1Myxcblx0bGlnaHRzbGF0ZWdyZXk6IDc4MzM3NTMsXG5cdGxpZ2h0c3RlZWxibHVlOiAxMTU4NDczNCxcblx0bGlnaHR5ZWxsb3c6IDE2Nzc3MTg0LFxuXHRsaW1lOiA2NTI4MCxcblx0bGltZWdyZWVuOiAzMzI5MzMwLFxuXHRsaW5lbjogMTY0NDU2NzAsXG5cdG1hZ2VudGE6IDE2NzExOTM1LFxuXHRtYXJvb246IDgzODg2MDgsXG5cdG1lZGl1bWFxdWFtYXJpbmU6IDY3MzczMjIsXG5cdG1lZGl1bWJsdWU6IDIwNSxcblx0bWVkaXVtb3JjaGlkOiAxMjIxMTY2Nyxcblx0bWVkaXVtcHVycGxlOiA5NjYyNjgzLFxuXHRtZWRpdW1zZWFncmVlbjogMzk3ODA5Nyxcblx0bWVkaXVtc2xhdGVibHVlOiA4MDg3NzkwLFxuXHRtZWRpdW1zcHJpbmdncmVlbjogNjQxNTQsXG5cdG1lZGl1bXR1cnF1b2lzZTogNDc3MjMwMCxcblx0bWVkaXVtdmlvbGV0cmVkOiAxMzA0NzE3Myxcblx0bWlkbmlnaHRibHVlOiAxNjQ0OTEyLFxuXHRtaW50Y3JlYW06IDE2MTIxODUwLFxuXHRtaXN0eXJvc2U6IDE2NzcwMjczLFxuXHRtb2NjYXNpbjogMTY3NzAyMjksXG5cdG5hdmFqb3doaXRlOiAxNjc2ODY4NSxcblx0bmF2eTogMTI4LFxuXHRvbGRsYWNlOiAxNjY0MzU1OCxcblx0b2xpdmU6IDg0MjEzNzYsXG5cdG9saXZlZHJhYjogNzA0ODczOSxcblx0b3JhbmdlOiAxNjc1MzkyMCxcblx0b3JhbmdlcmVkOiAxNjcyOTM0NCxcblx0b3JjaGlkOiAxNDMxNTczNCxcblx0cGFsZWdvbGRlbnJvZDogMTU2NTcxMzAsXG5cdHBhbGVncmVlbjogMTAwMjU4ODAsXG5cdHBhbGV0dXJxdW9pc2U6IDExNTI5OTY2LFxuXHRwYWxldmlvbGV0cmVkOiAxNDM4MTIwMyxcblx0cGFwYXlhd2hpcDogMTY3NzMwNzcsXG5cdHBlYWNocHVmZjogMTY3Njc2NzMsXG5cdHBlcnU6IDEzNDY4OTkxLFxuXHRwaW5rOiAxNjc2MTAzNSxcblx0cGx1bTogMTQ1MjQ2MzcsXG5cdHBvd2RlcmJsdWU6IDExNTkxOTEwLFxuXHRwdXJwbGU6IDgzODg3MzYsXG5cdHJlYmVjY2FwdXJwbGU6IDY2OTc4ODEsXG5cdHJlZDogMTY3MTE2ODAsXG5cdHJvc3licm93bjogMTIzNTc1MTksXG5cdHJveWFsYmx1ZTogNDI4Njk0NSxcblx0c2FkZGxlYnJvd246IDkxMjcxODcsXG5cdHNhbG1vbjogMTY0MTY4ODIsXG5cdHNhbmR5YnJvd246IDE2MDMyODY0LFxuXHRzZWFncmVlbjogMzA1MDMyNyxcblx0c2Vhc2hlbGw6IDE2Nzc0NjM4LFxuXHRzaWVubmE6IDEwNTA2Nzk3LFxuXHRzaWx2ZXI6IDEyNjMyMjU2LFxuXHRza3libHVlOiA4OTAwMzMxLFxuXHRzbGF0ZWJsdWU6IDY5NzAwNjEsXG5cdHNsYXRlZ3JheTogNzM3Mjk0NCxcblx0c2xhdGVncmV5OiA3MzcyOTQ0LFxuXHRzbm93OiAxNjc3NTkzMCxcblx0c3ByaW5nZ3JlZW46IDY1NDA3LFxuXHRzdGVlbGJsdWU6IDQ2MjA5ODAsXG5cdHRhbjogMTM4MDg3ODAsXG5cdHRlYWw6IDMyODk2LFxuXHR0aGlzdGxlOiAxNDIwNDg4OCxcblx0dG9tYXRvOiAxNjczNzA5NSxcblx0dHVycXVvaXNlOiA0MjUxODU2LFxuXHR2aW9sZXQ6IDE1NjMxMDg2LFxuXHR3aGVhdDogMTYxMTMzMzEsXG5cdHdoaXRlOiAxNjc3NzIxNSxcblx0d2hpdGVzbW9rZTogMTYxMTkyODUsXG5cdHllbGxvdzogMTY3NzY5NjAsXG5cdHllbGxvd2dyZWVuOiAxMDE0NTA3NFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlTmFtZWQuanNcbnZhciBwYXJzZU5hbWVkID0gKGNvbG9yKSA9PiB7XG5cdHJldHVybiBwYXJzZU51bWJlcihuYW1lZFtjb2xvci50b0xvd2VyQ2FzZSgpXSwgNik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VIZXguanNcbnZhciBoZXggPSAvXiM/KFswLTlhLWZdezh9fFswLTlhLWZdezZ9fFswLTlhLWZdezR9fFswLTlhLWZdezN9KSQvaTtcbnZhciBwYXJzZUhleCA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2g7XG5cdHJldHVybiAobWF0Y2ggPSBjb2xvci5tYXRjaChoZXgpKSA/IHBhcnNlTnVtYmVyKHBhcnNlSW50KG1hdGNoWzFdLCAxNiksIG1hdGNoWzFdLmxlbmd0aCkgOiB2b2lkIDA7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL3JlZ2V4LmpzXG52YXIgbnVtJDEgPSBcIihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVwiO1xudmFyIG51bV9ub25lID0gYCg/OiR7bnVtJDF9fG5vbmUpYDtcbnZhciBwZXIgPSBgJHtudW0kMX0lYDtcbnZhciBwZXJfbm9uZSA9IGAoPzoke251bSQxfSV8bm9uZSlgO1xudmFyIG51bV9wZXIgPSBgKD86JHtudW0kMX0lfCR7bnVtJDF9KWA7XG52YXIgbnVtX3Blcl9ub25lID0gYCg/OiR7bnVtJDF9JXwke251bSQxfXxub25lKWA7XG52YXIgaHVlJDEgPSBgKD86JHtudW0kMX0oZGVnfGdyYWR8cmFkfHR1cm4pfCR7bnVtJDF9KWA7XG52YXIgaHVlX25vbmUgPSBgKD86JHtudW0kMX0oZGVnfGdyYWR8cmFkfHR1cm4pfCR7bnVtJDF9fG5vbmUpYDtcbnZhciBjID0gYFxcXFxzKixcXFxccypgO1xudmFyIHJ4X251bV9wZXJfbm9uZSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBudW1fcGVyX25vbmUgKyBcIiRcIik7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYkxlZ2FjeS5qc1xudmFyIHJnYl9udW1fb2xkID0gbmV3IFJlZ0V4cChgXnJnYmE/XFxcXChcXFxccyoke251bSQxfSR7Y30ke251bSQxfSR7Y30ke251bSQxfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciByZ2JfcGVyX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtwZXJ9JHtjfSR7cGVyfSR7Y30ke3Blcn1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcGFyc2VSZ2JMZWdhY3kgPSAoY29sb3IpID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRsZXQgbWF0Y2g7XG5cdGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9udW1fb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMjU1O1xuXHR9IGVsc2UgaWYgKG1hdGNoID0gY29sb3IubWF0Y2gocmdiX3Blcl9vbGQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdICE9PSB2b2lkIDApIHJlcy5yID0gbWF0Y2hbMV0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5nID0gbWF0Y2hbMl0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5iID0gbWF0Y2hbM10gLyAxMDA7XG5cdH0gZWxzZSByZXR1cm47XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs0XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbNV0pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL19wcmVwYXJlLmpzXG52YXIgcHJlcGFyZSA9IChjb2xvciwgbW9kZSkgPT4gY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR5cGVvZiBjb2xvciAhPT0gXCJvYmplY3RcIiA/IHBhcnNlKGNvbG9yKSA6IGNvbG9yLm1vZGUgIT09IHZvaWQgMCA/IGNvbG9yIDogbW9kZSA/IHtcblx0Li4uY29sb3IsXG5cdG1vZGVcbn0gOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnZlcnRlci5qc1xudmFyIGNvbnZlcnRlciA9ICh0YXJnZXRfbW9kZSA9IFwicmdiXCIpID0+IChjb2xvcikgPT4gKGNvbG9yID0gcHJlcGFyZShjb2xvciwgdGFyZ2V0X21vZGUpKSAhPT0gdm9pZCAwID8gY29sb3IubW9kZSA9PT0gdGFyZ2V0X21vZGUgPyBjb2xvciA6IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdID8gY29udmVydGVyc1tjb2xvci5tb2RlXVt0YXJnZXRfbW9kZV0oY29sb3IpIDogdGFyZ2V0X21vZGUgPT09IFwicmdiXCIgPyBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdLnJnYihjb2xvcikgOiBjb252ZXJ0ZXJzLnJnYlt0YXJnZXRfbW9kZV0oY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpKSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbW9kZXMuanNcbnZhciBjb252ZXJ0ZXJzID0ge307XG52YXIgbW9kZXMgPSB7fTtcbnZhciBwYXJzZXJzID0gW107XG52YXIgY29sb3JQcm9maWxlcyA9IHt9O1xudmFyIGlkZW50aXR5ID0gKHYpID0+IHY7XG52YXIgdXNlTW9kZSA9IChkZWZpbml0aW9uKSA9PiB7XG5cdGNvbnZlcnRlcnNbZGVmaW5pdGlvbi5tb2RlXSA9IHtcblx0XHQuLi5jb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0sXG5cdFx0Li4uZGVmaW5pdGlvbi50b01vZGVcblx0fTtcblx0T2JqZWN0LmtleXMoZGVmaW5pdGlvbi5mcm9tTW9kZSB8fCB7fSkuZm9yRWFjaCgoaykgPT4ge1xuXHRcdGlmICghY29udmVydGVyc1trXSkgY29udmVydGVyc1trXSA9IHt9O1xuXHRcdGNvbnZlcnRlcnNba11bZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb24uZnJvbU1vZGVba107XG5cdH0pO1xuXHRpZiAoIWRlZmluaXRpb24ucmFuZ2VzKSBkZWZpbml0aW9uLnJhbmdlcyA9IHt9O1xuXHRpZiAoIWRlZmluaXRpb24uZGlmZmVyZW5jZSkgZGVmaW5pdGlvbi5kaWZmZXJlbmNlID0ge307XG5cdGRlZmluaXRpb24uY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuXHRcdGlmIChkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9PT0gdm9pZCAwKSBkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9IFswLCAxXTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0pIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBpbnRlcnBvbGF0b3IgZm9yOiAke2NoYW5uZWx9YCk7XG5cdFx0aWYgKHR5cGVvZiBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID09PSBcImZ1bmN0aW9uXCIpIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gPSB7IHVzZTogZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSB9O1xuXHRcdGlmICghZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCkgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCA9IGlkZW50aXR5O1xuXHR9KTtcblx0bW9kZXNbZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb247XG5cdChkZWZpbml0aW9uLnBhcnNlIHx8IFtdKS5mb3JFYWNoKChwYXJzZXIpID0+IHtcblx0XHR1c2VQYXJzZXIocGFyc2VyLCBkZWZpbml0aW9uLm1vZGUpO1xuXHR9KTtcblx0cmV0dXJuIGNvbnZlcnRlcihkZWZpbml0aW9uLm1vZGUpO1xufTtcbnZhciBnZXRNb2RlID0gKG1vZGUpID0+IG1vZGVzW21vZGVdO1xudmFyIHVzZVBhcnNlciA9IChwYXJzZXIsIG1vZGUpID0+IHtcblx0aWYgKHR5cGVvZiBwYXJzZXIgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoIW1vZGUpIHRocm93IG5ldyBFcnJvcihgJ21vZGUnIHJlcXVpcmVkIHdoZW4gJ3BhcnNlcicgaXMgYSBzdHJpbmdgKTtcblx0XHRjb2xvclByb2ZpbGVzW3BhcnNlcl0gPSBtb2RlO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJzZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGlmIChwYXJzZXJzLmluZGV4T2YocGFyc2VyKSA8IDApIHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wYXJzZS5qc1xudmFyIElkZW50U3RhcnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18W2EtekEtWl9dLztcbnZhciBJZGVudENvZGVQb2ludCA9IC9bXlxceDAwLVxceDdGXXxbLVxcd10vO1xudmFyIFRvayA9IHtcblx0RnVuY3Rpb246IFwiZnVuY3Rpb25cIixcblx0SWRlbnQ6IFwiaWRlbnRcIixcblx0TnVtYmVyOiBcIm51bWJlclwiLFxuXHRQZXJjZW50YWdlOiBcInBlcmNlbnRhZ2VcIixcblx0UGFyZW5DbG9zZTogXCIpXCIsXG5cdE5vbmU6IFwibm9uZVwiLFxuXHRIdWU6IFwiaHVlXCIsXG5cdEFscGhhOiBcImFscGhhXCJcbn07XG52YXIgX2kgPSAwO1xuZnVuY3Rpb24gaXNfbnVtKGNoYXJzKSB7XG5cdGxldCBjaCA9IGNoYXJzW19pXTtcblx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdGlmIChjaCA9PT0gXCItXCIgfHwgY2ggPT09IFwiK1wiKSByZXR1cm4gL1xcZC8udGVzdChjaDEpIHx8IGNoMSA9PT0gXCIuXCIgJiYgL1xcZC8udGVzdChjaGFyc1tfaSArIDJdKTtcblx0aWYgKGNoID09PSBcIi5cIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKTtcblx0cmV0dXJuIC9cXGQvLnRlc3QoY2gpO1xufVxuZnVuY3Rpb24gaXNfaWRlbnQoY2hhcnMpIHtcblx0aWYgKF9pID49IGNoYXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdGlmIChjaGFycy5sZW5ndGggLSBfaSA8IDIpIHJldHVybiBmYWxzZTtcblx0XHRsZXQgY2gxID0gY2hhcnNbX2kgKyAxXTtcblx0XHRpZiAoY2gxID09PSBcIi1cIiB8fCBJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gxKSkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cbnZhciBodWVuaXRzID0ge1xuXHRkZWc6IDEsXG5cdHJhZDogMTgwIC8gTWF0aC5QSSxcblx0Z3JhZDogOSAvIDEwLFxuXHR0dXJuOiAzNjBcbn07XG5mdW5jdGlvbiBudW0oY2hhcnMpIHtcblx0bGV0IHZhbHVlID0gXCJcIjtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCItXCIgfHwgY2hhcnNbX2ldID09PSBcIitcIikgdmFsdWUgKz0gY2hhcnNbX2krK107XG5cdHZhbHVlICs9IGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCJlXCIgfHwgY2hhcnNbX2ldID09PSBcIkVcIikge1xuXHRcdGlmICgoY2hhcnNbX2kgKyAxXSA9PT0gXCItXCIgfHwgY2hhcnNbX2kgKyAxXSA9PT0gXCIrXCIpICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgY2hhcnNbX2krK10gKyBkaWdpdHMoY2hhcnMpO1xuXHRcdGVsc2UgaWYgKC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0fVxuXHRpZiAoaXNfaWRlbnQoY2hhcnMpKSB7XG5cdFx0bGV0IGlkID0gaWRlbnQoY2hhcnMpO1xuXHRcdGlmIChpZCA9PT0gXCJkZWdcIiB8fCBpZCA9PT0gXCJyYWRcIiB8fCBpZCA9PT0gXCJ0dXJuXCIgfHwgaWQgPT09IFwiZ3JhZFwiKSByZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkh1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSAqIGh1ZW5pdHNbaWRdXG5cdFx0fTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNoYXJzW19pXSA9PT0gXCIlXCIpIHtcblx0XHRfaSsrO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBUb2suUGVyY2VudGFnZSxcblx0XHRcdHZhbHVlOiArdmFsdWVcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk51bWJlcixcblx0XHR2YWx1ZTogK3ZhbHVlXG5cdH07XG59XG5mdW5jdGlvbiBkaWdpdHMoY2hhcnMpIHtcblx0bGV0IHYgPSBcIlwiO1xuXHR3aGlsZSAoL1xcZC8udGVzdChjaGFyc1tfaV0pKSB2ICs9IGNoYXJzW19pKytdO1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGlkZW50KGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIElkZW50Q29kZVBvaW50LnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudGxpa2UoY2hhcnMpIHtcblx0bGV0IHYgPSBpZGVudChjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiKFwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkZ1bmN0aW9uLFxuXHRcdFx0dmFsdWU6IHZcblx0XHR9O1xuXHR9XG5cdGlmICh2ID09PSBcIm5vbmVcIikgcmV0dXJuIHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdHZhbHVlOiB2XG5cdH07XG59XG5mdW5jdGlvbiB0b2tlbml6ZShzdHIgPSBcIlwiKSB7XG5cdGxldCBjaGFycyA9IHN0ci50cmltKCk7XG5cdGxldCB0b2tlbnMgPSBbXTtcblx0bGV0IGNoO1xuXHRfaSA9IDA7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCkge1xuXHRcdGNoID0gY2hhcnNbX2krK107XG5cdFx0aWYgKGNoID09PSBcIlxcblwiIHx8IGNoID09PSBcIlx0XCIgfHwgY2ggPT09IFwiIFwiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLFwiKSByZXR1cm47XG5cdFx0aWYgKGNoID09PSBcIilcIikge1xuXHRcdFx0dG9rZW5zLnB1c2goeyB0eXBlOiBUb2suUGFyZW5DbG9zZSB9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiK1wiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLVwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdFx0XHRcdHZhbHVlOiBpZGVudChjaGFycylcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLlwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiL1wiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGxldCBhbHBoYTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdGFscGhhID0gbnVtKGNoYXJzKTtcblx0XHRcdFx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5IdWUpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWxwaGFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHRpZiAoaWRlbnQoY2hhcnMpID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IFRvay5BbHBoYSxcblx0XHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFRvay5Ob25lLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdm9pZCAwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKC9cXGQvLnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKElkZW50U3RhcnRDb2RlUG9pbnQudGVzdChjaCkpIHtcblx0XHRcdF9pLS07XG5cdFx0XHR0b2tlbnMucHVzaChpZGVudGxpa2UoY2hhcnMpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0cmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uIHx8IHRva2VuLnZhbHVlICE9PSBcImNvbG9yXCIpIHJldHVybjtcblx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAodG9rZW4udHlwZSAhPT0gVG9rLklkZW50KSByZXR1cm47XG5cdGNvbnN0IG1vZGUgPSBjb2xvclByb2ZpbGVzW3Rva2VuLnZhbHVlXTtcblx0aWYgKCFtb2RlKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZSB9O1xuXHRjb25zdCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgZmFsc2UpO1xuXHRpZiAoIWNvb3JkcykgcmV0dXJuO1xuXHRjb25zdCBjaGFubmVscyA9IGdldE1vZGUobW9kZSkuY2hhbm5lbHM7XG5cdGZvciAobGV0IGlpID0gMCwgYywgY2g7IGlpIDwgY2hhbm5lbHMubGVuZ3RoOyBpaSsrKSB7XG5cdFx0YyA9IGNvb3Jkc1tpaV07XG5cdFx0Y2ggPSBjaGFubmVsc1tpaV07XG5cdFx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRcdHJlc1tjaF0gPSBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAvIDEwMDtcblx0XHRcdGlmIChjaCA9PT0gXCJhbHBoYVwiKSByZXNbY2hdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmVzW2NoXSkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0Y29uc3QgY29vcmRzID0gW107XG5cdGxldCB0b2tlbjtcblx0d2hpbGUgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHR0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRvay5Ob25lIHx8IHRva2VuLnR5cGUgPT09IFRvay5OdW1iZXIgfHwgdG9rZW4udHlwZSA9PT0gVG9rLkFscGhhIHx8IHRva2VuLnR5cGUgPT09IFRvay5QZXJjZW50YWdlIHx8IGluY2x1ZGVIdWUgJiYgdG9rZW4udHlwZSA9PT0gVG9rLkh1ZSkge1xuXHRcdFx0Y29vcmRzLnB1c2godG9rZW4pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suUGFyZW5DbG9zZSkge1xuXHRcdFx0aWYgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPCAzIHx8IGNvb3Jkcy5sZW5ndGggPiA0KSByZXR1cm47XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSA0KSB7XG5cdFx0aWYgKGNvb3Jkc1szXS50eXBlICE9PSBUb2suQWxwaGEpIHJldHVybjtcblx0XHRjb29yZHNbM10gPSBjb29yZHNbM10udmFsdWU7XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPT09IDMpIGNvb3Jkcy5wdXNoKHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH0pO1xuXHRyZXR1cm4gY29vcmRzLmV2ZXJ5KChjKSA9PiBjLnR5cGUgIT09IFRvay5BbHBoYSkgPyBjb29yZHMgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0dG9rZW5zLl9pID0gMDtcblx0bGV0IHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKCF0b2tlbiB8fCB0b2tlbi50eXBlICE9PSBUb2suRnVuY3Rpb24pIHJldHVybjtcblx0bGV0IGNvb3JkcyA9IGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29vcmRzLnVuc2hpZnQodG9rZW4udmFsdWUpO1xuXHRyZXR1cm4gY29vcmRzO1xufVxudmFyIHBhcnNlID0gKGNvbG9yKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwic3RyaW5nXCIpIHJldHVybjtcblx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemUoY29sb3IpO1xuXHRjb25zdCBwYXJzZWQgPSB0b2tlbnMgPyBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIHRydWUpIDogdm9pZCAwO1xuXHRsZXQgcmVzdWx0ID0gdm9pZCAwO1xuXHRsZXQgaSA9IDA7XG5cdGxldCBsZW4gPSBwYXJzZXJzLmxlbmd0aDtcblx0d2hpbGUgKGkgPCBsZW4pIGlmICgocmVzdWx0ID0gcGFyc2Vyc1tpKytdKGNvbG9yLCBwYXJzZWQpKSAhPT0gdm9pZCAwKSByZXR1cm4gcmVzdWx0O1xuXHRyZXR1cm4gdG9rZW5zID8gcGFyc2VDb2xvclN5bnRheCh0b2tlbnMpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlUmdiLmpzXG5mdW5jdGlvbiBwYXJzZVJnYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJyZ2JcIiAmJiBwYXJzZWRbMF0gIT09IFwicmdiYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRjb25zdCBbLCByLCBnLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChyLnR5cGUgPT09IFRvay5IdWUgfHwgZy50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAoci50eXBlICE9PSBUb2suTm9uZSkgcmVzLnIgPSByLnR5cGUgPT09IFRvay5OdW1iZXIgPyByLnZhbHVlIC8gMjU1IDogci52YWx1ZSAvIDEwMDtcblx0aWYgKGcudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5nID0gZy50eXBlID09PSBUb2suTnVtYmVyID8gZy52YWx1ZSAvIDI1NSA6IGcudmFsdWUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgLyAyNTUgOiBiLnZhbHVlIC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVRyYW5zcGFyZW50LmpzXG52YXIgcGFyc2VUcmFuc3BhcmVudCA9IChjKSA9PiBjID09PSBcInRyYW5zcGFyZW50XCIgPyB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IDAsXG5cdGc6IDAsXG5cdGI6IDAsXG5cdGFscGhhOiAwXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9sZXJwLmpzXG52YXIgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgdCAqIChiIC0gYSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL3BpZWNld2lzZS5qc1xudmFyIGdldF9jbGFzc2VzID0gKGFycikgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRsZXQgYSA9IGFycltpXTtcblx0XHRsZXQgYiA9IGFycltpICsgMV07XG5cdFx0aWYgKGEgPT09IHZvaWQgMCAmJiBiID09PSB2b2lkIDApIGNsYXNzZXMucHVzaCh2b2lkIDApO1xuXHRcdGVsc2UgaWYgKGEgIT09IHZvaWQgMCAmJiBiICE9PSB2b2lkIDApIGNsYXNzZXMucHVzaChbYSwgYl0pO1xuXHRcdGVsc2UgY2xhc3Nlcy5wdXNoKGEgIT09IHZvaWQgMCA/IFthLCBhXSA6IFtiLCBiXSk7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xudmFyIGludGVycG9sYXRvclBpZWNld2lzZSA9IChpbnRlcnBvbGF0b3IpID0+IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBnZXRfY2xhc3NlcyhhcnIpO1xuXHRyZXR1cm4gKHQpID0+IHtcblx0XHRsZXQgY2xzID0gdCAqIGNsYXNzZXMubGVuZ3RoO1xuXHRcdGxldCBpZHggPSB0ID49IDEgPyBjbGFzc2VzLmxlbmd0aCAtIDEgOiBNYXRoLm1heChNYXRoLmZsb29yKGNscyksIDApO1xuXHRcdGxldCBwYWlyID0gY2xhc3Nlc1tpZHhdO1xuXHRcdHJldHVybiBwYWlyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnRlcnBvbGF0b3IocGFpclswXSwgcGFpclsxXSwgY2xzIC0gaWR4KTtcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL2xpbmVhci5qc1xudmFyIGludGVycG9sYXRvckxpbmVhciA9IGludGVycG9sYXRvclBpZWNld2lzZShsZXJwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvYWxwaGEuanNcbnZhciBmaXh1cEFscGhhID0gKGFycikgPT4ge1xuXHRsZXQgc29tZV9kZWZpbmVkID0gZmFsc2U7XG5cdGxldCByZXMgPSBhcnIubWFwKCh2KSA9PiB7XG5cdFx0aWYgKHYgIT09IHZvaWQgMCkge1xuXHRcdFx0c29tZV9kZWZpbmVkID0gdHJ1ZTtcblx0XHRcdHJldHVybiB2O1xuXHRcdH1cblx0XHRyZXR1cm4gMTtcblx0fSk7XG5cdHJldHVybiBzb21lX2RlZmluZWQgPyByZXMgOiBhcnI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjcgPSB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJyXCIsXG5cdFx0XCJnXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXG5cdFx0cGFyc2VSZ2IsXG5cdFx0cGFyc2VIZXgsXG5cdFx0cGFyc2VSZ2JMZWdhY3ksXG5cdFx0cGFyc2VOYW1lZCxcblx0XHRwYXJzZVRyYW5zcGFyZW50LFxuXHRcdFwic3JnYlwiXG5cdF0sXG5cdHNlcmlhbGl6ZTogXCJzcmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0cjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGdhbXV0OiB0cnVlLFxuXHR3aGl0ZToge1xuXHRcdHI6IDEsXG5cdFx0ZzogMSxcblx0XHRiOiAxXG5cdH0sXG5cdGJsYWNrOiB7XG5cdFx0cjogMCxcblx0XHRnOiAwLFxuXHRcdGI6IDBcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRBOThUb1h5ejY1LmpzXG52YXIgbGluZWFyaXplJDIgPSAodiA9IDApID0+IE1hdGgucG93KE1hdGguYWJzKHYpLCA1NjMgLyAyNTYpICogTWF0aC5zaWduKHYpO1xudmFyIGNvbnZlcnRBOThUb1h5ejY1ID0gKGE5OCkgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQyKGE5OC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUkMihhOTguZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDIoYTk4LmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNTc2NjY5MDQyOTEwMTMwNSAqIHIgKyAuMTg1NTU4MjM3OTA2NTQ2MyAqIGcgKyAuMTg4MjI4NjQ2MjM0OTk0NyAqIGIsXG5cdFx0eTogLjI5NzM0NDk3NTI1MDUzNiAqIHIgKyAuNjI3MzYzNTY2MjU1NDY2MSAqIGcgKyAuMDc1MjkxNDU4NDkzOTk3OSAqIGIsXG5cdFx0ejogLjAyNzAzMTM2MTM4NjQxMjMgKiByICsgLjA3MDY4ODg1MjUzNTgyNzIgKiBnICsgLjk5MTMzNzUzNjgzNzYzODYgKiBiXG5cdH07XG5cdGlmIChhOTguYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYTk4LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRYeXo2NVRvQTk4LmpzXG52YXIgZ2FtbWEkMiA9ICh2KSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgMjU2IC8gNTYzKSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0WHl6NjVUb0E5OCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImE5OFwiLFxuXHRcdHI6IGdhbW1hJDIoeCAqIDIuMDQxNTg3OTAzODEwNzQ2NSAtIHkgKiAuNTY1MDA2OTc0Mjc4ODU5NyAtIC4zNDQ3MzEzNTA3NzgzMjk3ICogeiksXG5cdFx0ZzogZ2FtbWEkMih4ICogLS45NjkyNDM2MzYyODA4Nzk4ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNiArIC4wNDE1NTUwNTc0MDcxNzU2ICogeiksXG5cdFx0YjogZ2FtbWEkMih4ICogLjAxMzQ0NDI4MDYzMjAzMTIgLSB5ICogLjExODM2MjM5MjIzMTAxODQgKyAxLjAxNTE3NDk5NDM5MTIwNTggKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRSZ2JUb0xyZ2IuanNcbnZhciBmbiQzID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzIDw9IC4wNDA0NSkgcmV0dXJuIGMgLyAxMi45Mjtcblx0cmV0dXJuIChNYXRoLnNpZ24oYykgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbn07XG52YXIgY29udmVydFJnYlRvTHJnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiBmbiQzKHIpLFxuXHRcdGc6IGZuJDMoZyksXG5cdFx0YjogZm4kMyhiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0UmdiVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDEyMzkwNzk5MjY1OTU5MyAqIHIgKyAuMzU3NTg0MzM5MzgzODc4ICogZyArIC4xODA0ODA3ODg0MDE4MzQzICogYixcblx0XHR5OiAuMjEyNjM5MDA1ODcxNTEwMiAqIHIgKyAuNzE1MTY4Njc4NzY3NzU2ICogZyArIC4wNzIxOTIzMTUzNjA3MzM3ICogYixcblx0XHR6OiAuMDE5MzMwODE4NzE1NTkxOCAqIHIgKyAuMTE5MTk0Nzc5Nzk0NjI2ICogZyArIC45NTA1MzIxNTIyNDk2NjA3ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRMcmdiVG9SZ2IuanNcbnZhciBmbiQyID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzID4gLjAwMzEzMDgpIHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogKDEuMDU1ICogTWF0aC5wb3coYWJzLCAxIC8gMi40KSAtIC4wNTUpO1xuXHRyZXR1cm4gYyAqIDEyLjkyO1xufTtcbnZhciBjb252ZXJ0THJnYlRvUmdiID0gKHsgciwgZywgYiwgYWxwaGEgfSwgbW9kZSA9IFwicmdiXCIpID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdHI6IGZuJDIociksXG5cdFx0ZzogZm4kMihnKSxcblx0XHRiOiBmbiQyKGIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnZlcnRYeXo2NVRvUmdiLmpzXG52YXIgY29udmVydFh5ejY1VG9SZ2IgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiB4ICogMy4yNDA5Njk5NDE5MDQ1MjI2IC0geSAqIDEuNTM3MzgzMTc3NTcwMDk0IC0gLjQ5ODYxMDc2MDI5MzAwMzQgKiB6LFxuXHRcdGc6IHggKiAtLjk2OTI0MzYzNjI4MDg3OTYgKyB5ICogMS44NzU5Njc1MDE1MDc3MjA0ICsgLjA0MTU1NTA1NzQwNzE3NTYgKiB6LFxuXHRcdGI6IHggKiAuMDU1NjMwMDc5Njk2OTkzNiAtIHkgKiAuMjAzOTc2OTU4ODg4OTc2NSArIDEuMDU2OTcxNTE0MjQyODc4NCAqIHpcblx0fSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJhOThcIixcblx0cGFyc2U6IFtcImE5OC1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJhOTgtcmdiXCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvQTk4KGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvQTk4XG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0QTk4VG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0QTk4VG9YeXo2NVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL25vcm1hbGl6ZUh1ZS5qc1xudmFyIG5vcm1hbGl6ZUh1ZSA9IChodWUpID0+IChodWUgPSBodWUgJSAzNjApIDwgMCA/IGh1ZSArIDM2MCA6IGh1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvaHVlLmpzXG52YXIgaHVlID0gKGh1ZXMsIGZuKSA9PiB7XG5cdHJldHVybiBodWVzLm1hcCgoaHVlLCBpZHgsIGFycikgPT4ge1xuXHRcdGlmIChodWUgPT09IHZvaWQgMCkgcmV0dXJuIGh1ZTtcblx0XHRsZXQgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUh1ZShodWUpO1xuXHRcdGlmIChpZHggPT09IDAgfHwgaHVlc1tpZHggLSAxXSA9PT0gdm9pZCAwKSByZXR1cm4gbm9ybWFsaXplZDtcblx0XHRyZXR1cm4gZm4obm9ybWFsaXplZCAtIG5vcm1hbGl6ZUh1ZShhcnJbaWR4IC0gMV0pKTtcblx0fSkucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcblx0XHRpZiAoIWFjYy5sZW5ndGggfHwgY3VyciA9PT0gdm9pZCAwIHx8IGFjY1thY2MubGVuZ3RoIC0gMV0gPT09IHZvaWQgMCkge1xuXHRcdFx0YWNjLnB1c2goY3Vycik7XG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH1cblx0XHRhY2MucHVzaChjdXJyICsgYWNjW2FjYy5sZW5ndGggLSAxXSk7XG5cdFx0cmV0dXJuIGFjYztcblx0fSwgW10pO1xufTtcbnZhciBmaXh1cEh1ZVNob3J0ZXIgPSAoYXJyKSA9PiBodWUoYXJyLCAoZCkgPT4gTWF0aC5hYnMoZCkgPD0gMTgwID8gZCA6IGQgLSAzNjAgKiBNYXRoLnNpZ24oZCkpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29uc3RhbnRzLmpzXG52YXIgTSA9IFtcblx0LS4xNDg2MSxcblx0MS43ODI3Nyxcblx0LS4yOTIyNyxcblx0LS45MDY0OSxcblx0MS45NzI5NCxcblx0MFxuXTtcbnZhciBkZWdUb1JhZCA9IE1hdGguUEkgLyAxODA7XG52YXIgcmFkVG9EZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydFJnYlRvQ3ViZWhlbGl4LmpzXG52YXIgREUgPSBNWzNdICogTVs0XTtcbnZhciBCRSA9IE1bMV0gKiBNWzRdO1xudmFyIEJDQUQgPSBNWzFdICogTVsyXSAtIE1bMF0gKiBNWzNdO1xudmFyIGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGwgPSAoQkNBRCAqIGIgKyByICogREUgLSBnICogQkUpIC8gKEJDQUQgKyBERSAtIEJFKTtcblx0bGV0IHggPSBiIC0gbDtcblx0bGV0IHkgPSAoTVs0XSAqIChnIC0gbCkgLSBNWzJdICogeCkgLyBNWzNdO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdFx0bCxcblx0XHRzOiBsID09PSAwIHx8IGwgPT09IDEgPyB2b2lkIDAgOiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgLyAoTVs0XSAqIGwgKiAoMSAtIGwpKVxuXHR9O1xuXHRpZiAocmVzLnMpIHJlcy5oID0gTWF0aC5hdGFuMih5LCB4KSAqIHJhZFRvRGVnIC0gMTIwO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydEN1YmVoZWxpeFRvUmdiLmpzXG52YXIgY29udmVydEN1YmVoZWxpeFRvUmdiID0gKHsgaCwgcywgbCwgYWxwaGEgfSkgPT4ge1xuXHRsZXQgcmVzID0geyBtb2RlOiBcInJnYlwiIH07XG5cdGggPSAoaCA9PT0gdm9pZCAwID8gMCA6IGggKyAxMjApICogZGVnVG9SYWQ7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRsZXQgYW1wID0gcyA9PT0gdm9pZCAwID8gMCA6IHMgKiBsICogKDEgLSBsKTtcblx0bGV0IGNvc2ggPSBNYXRoLmNvcyhoKTtcblx0bGV0IHNpbmggPSBNYXRoLnNpbihoKTtcblx0cmVzLnIgPSBsICsgYW1wICogKE1bMF0gKiBjb3NoICsgTVsxXSAqIHNpbmgpO1xuXHRyZXMuZyA9IGwgKyBhbXAgKiAoTVsyXSAqIGNvc2ggKyBNWzNdICogc2luaCk7XG5cdHJlcy5iID0gbCArIGFtcCAqIChNWzRdICogY29zaCArIE1bNV0gKiBzaW5oKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGlmZmVyZW5jZS5qc1xudmFyIGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5zIHx8ICFzbXAucykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLnMgKiBzbXAucykgKiBkSDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZU5haXZlID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDApIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRpZiAoTWF0aC5hYnMoc21wX2ggLSBzdGRfaCkgPiAxODApIHJldHVybiBzdGRfaCAtIChzbXBfaCAtIDM2MCAqIE1hdGguc2lnbihzbXBfaCAtIHN0ZF9oKSk7XG5cdHJldHVybiBzbXBfaCAtIHN0ZF9oO1xufTtcbnZhciBkaWZmZXJlbmNlSHVlQ2hyb21hID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5jIHx8ICFzbXAuYykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLmMgKiBzbXAuYykgKiBkSDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2F2ZXJhZ2UuanNcbnZhciBhdmVyYWdlQW5nbGUgPSAodmFsKSA9PiB7XG5cdGxldCBzdW0gPSB2YWwucmVkdWNlKChzdW0sIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwgIT09IHZvaWQgMCkge1xuXHRcdFx0bGV0IHJhZCA9IHZhbCAqIE1hdGguUEkgLyAxODA7XG5cdFx0XHRzdW0uc2luICs9IE1hdGguc2luKHJhZCk7XG5cdFx0XHRzdW0uY29zICs9IE1hdGguY29zKHJhZCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdW07XG5cdH0sIHtcblx0XHRzaW46IDAsXG5cdFx0Y29zOiAwXG5cdH0pO1xuXHRsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHN1bS5zaW4sIHN1bS5jb3MpICogMTgwIC8gTWF0aC5QSTtcblx0cmV0dXJuIGFuZ2xlIDwgMCA/IDM2MCArIGFuZ2xlIDogYW5nbGU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjUgPSB7XG5cdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWN1YmVoZWxpeFwiXSxcblx0c2VyaWFsaXplOiBcIi0tY3ViZWhlbGl4XCIsXG5cdHJhbmdlczoge1xuXHRcdGg6IFswLCAzNjBdLFxuXHRcdHM6IFswLCA0LjYxNF0sXG5cdFx0bDogWzAsIDFdXG5cdH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvQ3ViZWhlbGl4IH0sXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRDdWJlaGVsaXhUb1JnYiB9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExhYlRvTGNoLmpzXG52YXIgY29udmVydExhYlRvTGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSwgbW9kZSA9IFwibGNoXCIpID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdGwsXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExjaFRvTGFiLmpzXG52YXIgY29udmVydExjaFRvTGFiID0gKHsgbCwgYywgaCwgYWxwaGEgfSwgbW9kZSA9IFwibGFiXCIpID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGE6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHRiOiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29uc3RhbnRzLmpzXG52YXIgayQyID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSQyID0gTWF0aC5wb3coNiwgMykgLyBNYXRoLnBvdygyOSwgMyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnN0YW50cy5qc1xudmFyIEQ1MCA9IHtcblx0WDogLjM0NTcgLyAuMzU4NSxcblx0WTogMSxcblx0WjogLjI5NTggLyAuMzU4NVxufTtcbnZhciBENjUgPSB7XG5cdFg6IC4zMTI3IC8gLjMyOSxcblx0WTogMSxcblx0WjogLjM1ODMgLyAuMzI5XG59O1xudmFyIGskMSA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1h5ejY1LmpzXG52YXIgZm4kMSA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUkMiA/IE1hdGgucG93KHYsIDMpIDogKDExNiAqIHYgLSAxNikgLyBrJDI7XG52YXIgY29udmVydExhYjY1VG9YeXo2NSA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiBmbiQxKGZ4KSAqIEQ2NS5YLFxuXHRcdHk6IGZuJDEoZnkpICogRDY1LlksXG5cdFx0ejogZm4kMShmeikgKiBENjUuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWI2NVRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydExhYjY1VG9YeXo2NShsYWIpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFh5ejY1VG9MYWI2NS5qc1xudmFyIGYkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlJDIgPyBNYXRoLmNicnQodmFsdWUpIDogKGskMiAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo2NVRvTGFiNjUgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYkMSh4IC8gRDY1LlgpO1xuXHRsZXQgZjEgPSBmJDEoeSAvIEQ2NS5ZKTtcblx0bGV0IGYyID0gZiQxKHogLyBENjUuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IDExNiAqIGYxIC0gMTYsXG5cdFx0YTogNTAwICogKGYwIC0gZjEpLFxuXHRcdGI6IDIwMCAqIChmMSAtIGYyKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0UmdiVG9MYWI2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYjY1ID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9MYWI2NShjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb25zdGFudHMuanNcbnZhciDOuCA9IDI2IC8gMTgwICogTWF0aC5QSTtcbnZhciBjb3POuCA9IE1hdGguY29zKM64KTtcbnZhciBzaW7OuCA9IE1hdGguc2luKM64KTtcbnZhciBmYWN0b3IgPSAxMDAgLyBNYXRoLmxvZygxMzkgLyAxMDApO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2NvbnZlcnREbGNoVG9MYWI2NS5qc1xudmFyIGNvbnZlcnREbGNoVG9MYWI2NSA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChjID09PSB2b2lkIDApIGMgPSAwO1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxhYjY1XCIsXG5cdFx0bDogKE1hdGguZXhwKGwgKiAxIC8gZmFjdG9yKSAtIDEpIC8gLjAwMzlcblx0fTtcblx0bGV0IEcgPSAoTWF0aC5leHAoLjA0MzUgKiBjICogMSAqIDEpIC0gMSkgLyAuMDc1O1xuXHRsZXQgZSA9IEcgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSAtIM64KTtcblx0bGV0IGYgPSBHICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdHJlcy5hID0gZSAqIGNvc864IC0gZiAvIC44MyAqIHNpbs64O1xuXHRyZXMuYiA9IGUgKiBzaW7OuCArIGYgLyAuODMgKiBjb3POuDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0TGFiNjVUb0RsY2guanNcbnZhciBjb252ZXJ0TGFiNjVUb0RsY2ggPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBlID0gYSAqIGNvc864ICsgYiAqIHNpbs64O1xuXHRsZXQgZiA9IC44MyAqIChiICogY29zzrggLSBhICogc2luzrgpO1xuXHRsZXQgRyA9IE1hdGguc3FydChlICogZSArIGYgKiBmKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImRsY2hcIixcblx0XHRsOiBmYWN0b3IgLyAxICogTWF0aC5sb2coMSArIC4wMDM5ICogbCksXG5cdFx0YzogTWF0aC5sb2coMSArIC4wNzUgKiBHKSAvICguMDQzNSAqIDEgKiAxKVxuXHR9O1xuXHRpZiAocmVzLmMpIHJlcy5oID0gbm9ybWFsaXplSHVlKChNYXRoLmF0YW4yKGYsIGUpICsgzrgpIC8gTWF0aC5QSSAqIDE4MCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnREbGFiVG9MYWI2NSA9IChjKSA9PiBjb252ZXJ0RGxjaFRvTGFiNjUoY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSk7XG52YXIgY29udmVydExhYjY1VG9EbGFiID0gKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjb252ZXJ0TGFiNjVUb0RsY2goYyksIFwiZGxhYlwiKTtcbnZhciBkZWZpbml0aW9uJDI0ID0ge1xuXHRtb2RlOiBcImRsYWJcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxhYlwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsYWJUb0xhYjY1LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGFiVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxhYihjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy00MC4wOSwgNDUuNTAxXSxcblx0XHRiOiBbLTQwLjQ2OSwgNDQuMzQ0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIzID0ge1xuXHRtb2RlOiBcImRsY2hcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxjaFwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsY2hUb0xhYjY1LFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJkbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGNoVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGNoLFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJkbGNoXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxjaChjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDUxLjQ4NF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydEhzaVRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNpVG9SZ2IoeyBoLCBzLCBpLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxIC0gcyksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRcdGI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzaS9jb252ZXJ0UmdiVG9Ic2kuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzaSh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNpXCIsXG5cdFx0czogciArIGcgKyBiID09PSAwID8gMCA6IDEgLSAzICogbSAvIChyICsgZyArIGIpLFxuXHRcdGk6IChyICsgZyArIGIpIC8gM1xuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjIgPSB7XG5cdG1vZGU6IFwiaHNpXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2lUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc2lcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzaVwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzaSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwiaVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0SHNsVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRIc2xUb1JnYih7IGgsIHMsIGwsIGFscGhhIH0pIHtcblx0aCA9IG5vcm1hbGl6ZUh1ZShoICE9PSB2b2lkIDAgPyBoIDogMCk7XG5cdGlmIChzID09PSB2b2lkIDApIHMgPSAwO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IG0xID0gbCArIHMgKiAobCA8IC41ID8gbCA6IDEgLSBsKTtcblx0bGV0IG0yID0gbTEgLSAobTEgLSBsKSAqIDIgKiBNYXRoLmFicyhoIC8gNjAgJSAyIC0gMSk7XG5cdGxldCByZXM7XG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoIC8gNjApKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiBtMSxcblx0XHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiAyICogbCAtIG0xLFxuXHRcdFx0XHRnOiBtMixcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogcmVzID0ge1xuXHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0fTtcblx0fVxuXHRyZXMubW9kZSA9IFwicmdiXCI7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL2NvbnZlcnRSZ2JUb0hzbC5qc1xuZnVuY3Rpb24gY29udmVydFJnYlRvSHNsKHsgciwgZywgYiwgYWxwaGEgfSkge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTSA9IE1hdGgubWF4KHIsIGcsIGIpLCBtID0gTWF0aC5taW4ociwgZywgYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJoc2xcIixcblx0XHRzOiBNID09PSBtID8gMCA6IChNIC0gbSkgLyAoMSAtIE1hdGguYWJzKE0gKyBtIC0gMSkpLFxuXHRcdGw6IC41ICogKE0gKyBtKVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL2h1ZS5qc1xudmFyIGh1ZVRvRGVnID0gKHZhbCwgdW5pdCkgPT4ge1xuXHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRjYXNlIFwiZGVnXCI6IHJldHVybiArdmFsO1xuXHRcdGNhc2UgXCJyYWRcIjogcmV0dXJuIHZhbCAvIE1hdGguUEkgKiAxODA7XG5cdFx0Y2FzZSBcImdyYWRcIjogcmV0dXJuIHZhbCAvIDEwICogOTtcblx0XHRjYXNlIFwidHVyblwiOiByZXR1cm4gdmFsICogMzYwO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvcGFyc2VIc2xMZWdhY3kuanNcbnZhciBoc2xfb2xkID0gbmV3IFJlZ0V4cChgXmhzbGE/XFxcXChcXFxccyoke2h1ZSQxfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlSHNsTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaCA9IGNvbG9yLm1hdGNoKGhzbF9vbGQpO1xuXHRpZiAoIW1hdGNoKSByZXR1cm47XG5cdGxldCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5oID0gK21hdGNoWzNdO1xuXHRlbHNlIGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwICYmIG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5oID0gaHVlVG9EZWcobWF0Y2hbMV0sIG1hdGNoWzJdKTtcblx0aWYgKG1hdGNoWzRdICE9PSB2b2lkIDApIHJlcy5zID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNF0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzVdICE9PSB2b2lkIDApIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNV0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzZdICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG1hdGNoWzZdIC8gMTAwKSk7XG5cdGVsc2UgaWYgKG1hdGNoWzddICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICttYXRjaFs3XSkpO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsLmpzXG5mdW5jdGlvbiBwYXJzZUhzbChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJoc2xcIiAmJiBwYXJzZWRbMF0gIT09IFwiaHNsYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJoc2xcIiB9O1xuXHRjb25zdCBbLCBoLCBzLCBsLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAocy50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLnMgPSBzLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5sID0gbC52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMSA9IHtcblx0bW9kZTogXCJoc2xcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEhzbFRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHNsIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtwYXJzZUhzbCwgcGFyc2VIc2xMZWdhY3ldLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgaHNsKCR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0gJHtjLnMgIT09IHZvaWQgMCA/IGMucyAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9ICR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydEhzdlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHN2VG9SZ2IoeyBoLCBzLCB2LCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYsXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzdi9jb252ZXJ0UmdiVG9Ic3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzdih7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHN2XCIsXG5cdFx0czogTSA9PT0gMCA/IDAgOiAxIC0gbSAvIE0sXG5cdFx0djogTVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjAgPSB7XG5cdG1vZGU6IFwiaHN2XCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc3ZUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzdlwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzdiB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwidlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0SHdiVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRId2JUb1JnYih7IGgsIHcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHcgPT09IHZvaWQgMCkgdyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRpZiAodyArIGIgPiAxKSB7XG5cdFx0bGV0IHMgPSB3ICsgYjtcblx0XHR3IC89IHM7XG5cdFx0YiAvPSBzO1xuXHR9XG5cdHJldHVybiBjb252ZXJ0SHN2VG9SZ2Ioe1xuXHRcdGgsXG5cdFx0czogYiA9PT0gMSA/IDEgOiAxIC0gdyAvICgxIC0gYiksXG5cdFx0djogMSAtIGIsXG5cdFx0YWxwaGFcblx0fSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0UmdiVG9Id2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0h3YihyZ2JhKSB7XG5cdGxldCBoc3YgPSBjb252ZXJ0UmdiVG9Ic3YocmdiYSk7XG5cdGlmIChoc3YgPT09IHZvaWQgMCkgcmV0dXJuIHZvaWQgMDtcblx0bGV0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRsZXQgdiA9IGhzdi52ICE9PSB2b2lkIDAgPyBoc3YudiA6IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJod2JcIixcblx0XHR3OiAoMSAtIHMpICogdixcblx0XHRiOiAxIC0gdlxuXHR9O1xuXHRpZiAoaHN2LmggIT09IHZvaWQgMCkgcmVzLmggPSBoc3YuaDtcblx0aWYgKGhzdi5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBoc3YuYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9wYXJzZUh3Yi5qc1xuZnVuY3Rpb24gUGFyc2VId2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHdiXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImh3YlwiIH07XG5cdGNvbnN0IFssIGgsIHcsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAody50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmICh3LnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMudyA9IHcudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGIudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmIgPSBiLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE5ID0ge1xuXHRtb2RlOiBcImh3YlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Id2IgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcIndcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRwYXJzZTogW1BhcnNlSHdiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGh3Yigke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy53ICE9PSB2b2lkIDAgPyBjLncgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZU5haXZlIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hkci90cmFuc2Zlci5qc1xudmFyIE0xID0gLjE1OTMwMTc1NzgxMjU7XG52YXIgTTIgPSA3OC44NDM3NTtcbnZhciBDMSA9IC44MzU5Mzc1O1xudmFyIEMyID0gMTguODUxNTYyNTtcbnZhciBDMyA9IDE4LjY4NzU7XG5mdW5jdGlvbiB0cmFuc2ZlclBxRGVjb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYsIDEgLyBNMik7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdyhNYXRoLm1heCgwLCBjIC0gQzEpIC8gKEMyIC0gQzMgKiBjKSwgMSAvIE0xKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZmVyUHFFbmNvZGUodikge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRjb25zdCBjID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiBjKSAvICgxICsgQzMgKiBjKSwgTTIpO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvY29udmVydEl0cFRvWHl6NjUuanNcbnZhciB0b1JlbCA9IChjKSA9PiBNYXRoLm1heChjIC8gMjAzLCAwKTtcbnZhciBjb252ZXJ0SXRwVG9YeXo2NSA9ICh7IGksIHQsIHAsIGFscGhhIH0pID0+IHtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmICh0ID09PSB2b2lkIDApIHQgPSAwO1xuXHRpZiAocCA9PT0gdm9pZCAwKSBwID0gMDtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFEZWNvZGUoaSArIC4wMDg2MDkwMzcwMzc5MzI3NjEgKiB0ICsgLjExMTAyOTYyNTAwMzAyNTkzICogcCk7XG5cdGNvbnN0IG0gPSB0cmFuc2ZlclBxRGVjb2RlKGkgLSAuMDA4NjA5MDM3MDM3OTMyNzUgKiB0IC0gLjExMTAyOTYyNTAwMzAyNTk5ICogcCk7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuNTYwMDMxMzM1NzEwNjc5MSAqIHQgLSAuMzIwNjI3MTc0OTg3MzE4ODUgKiBwKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiB0b1JlbCgyLjA3MDE1MjIxODM4OTQyMiAqIGwgLSAxLjMyNjM0NzMzODk2NzE1NTYgKiBtICsgLjIwNjY1MTA0NzYyOTQwNTEgKiBzKSxcblx0XHR5OiB0b1JlbCguMzY0NzM4NTIwOTc0ODA3NCAqIGwgKyAuNjgwNTY2MDI0OTQ3MjI3ICogbSAtIC4wNDUzMDQ1NDU5MjIwMzQ2ICogcyksXG5cdFx0ejogdG9SZWwoLS4wNDk3NDcyMDc1MzU4MTIgKiBsIC0gLjA0OTI2MDk2NjY5NjYxMzggKiBtICsgMS4xODgwNjU5MjQ5OTIzMDQyICogcylcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRYeXo2NVRvSXRwLmpzXG52YXIgdG9BYnMgPSAoYyA9IDApID0+IE1hdGgubWF4KGMgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSXRwID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRjb25zdCBhYnNYID0gdG9BYnMoeCk7XG5cdGNvbnN0IGFic1kgPSB0b0Ficyh5KTtcblx0Y29uc3QgYWJzWiA9IHRvQWJzKHopO1xuXHRjb25zdCBsID0gdHJhbnNmZXJQcUVuY29kZSguMzU5MjgzMjU5MDEyMTIxNyAqIGFic1ggKyAuNjk3NjA1MTE0Nzc3OTUwMiAqIGFic1kgLSAuMDM1ODkxNTkzMjMyMDI4OSAqIGFic1opO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcUVuY29kZSgtLjE5MjA4MDg0NjM3MDQ5OTUgKiBhYnNYICsgMS4xMDA0NzY3OTcwMzc0MzIzICogYWJzWSArIC4wNzUzNzQ4NjU4NTE5MTE4ICogYWJzWik7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRW5jb2RlKC4wMDcwNzk3ODQ0NjA3NDc3ICogYWJzWCArIC4wNzQ4Mzk2NjYyMTg2MzY2ICogYWJzWSArIC44NDMzMjY1NDUzODk4NzY1ICogYWJzWik7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcIml0cFwiLFxuXHRcdGk6IC41ICogbCArIC41ICogbSxcblx0XHR0OiAxLjYxMzc2OTUzMTI1ICogbCAtIDMuMzIzNDg2MzI4MTI1ICogbSArIDEuNzA5NzE2Nzk2ODc1ICogcyxcblx0XHRwOiA0LjM3ODE3MzgyODEyNSAqIGwgLSA0LjI0NTYwNTQ2ODc1ICogbSAtIC4xMzI1NjgzNTkzNzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOCA9IHtcblx0bW9kZTogXCJpdHBcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImlcIixcblx0XHRcInRcIixcblx0XHRcInBcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0taWN0Y3BcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWljdGNwXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0SXRwVG9YeXo2NSxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEl0cFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0l0cCxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9JdHAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbMCwgLjU4MV0sXG5cdFx0dDogWy0uMzY5LCAuMjcyXSxcblx0XHRwOiBbLS4xNjQsIC4zMzFdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHQ6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRwOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0WHl6NjVUb0phYi5qc1xudmFyIHAkMSA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCQxID0gMTYyOTU0OTk1MzI4MjE1NjVlLTI3O1xudmFyIGphYlBxRW5jb2RlID0gKHYpID0+IHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0bGV0IHZuID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiB2bikgLyAoMSArIEMzICogdm4pLCBwJDEpO1xufTtcbnZhciBhYnMgPSAodiA9IDApID0+IE1hdGgubWF4KHYgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSmFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHR4ID0gYWJzKHgpO1xuXHR5ID0gYWJzKHkpO1xuXHR6ID0gYWJzKHopO1xuXHRsZXQgeHAgPSAxLjE1ICogeCAtIC4xNSAqIHo7XG5cdGxldCB5cCA9IC42NiAqIHkgKyAuMzQgKiB4O1xuXHRsZXQgbCA9IGphYlBxRW5jb2RlKC40MTQ3ODk3MiAqIHhwICsgLjU3OTk5OSAqIHlwICsgLjAxNDY0OCAqIHopO1xuXHRsZXQgbSA9IGphYlBxRW5jb2RlKC0uMjAxNTEgKiB4cCArIDEuMTIwNjQ5ICogeXAgKyAuMDUzMTAwOCAqIHopO1xuXHRsZXQgcyA9IGphYlBxRW5jb2RlKC0uMDE2NjAwOCAqIHhwICsgLjI2NDggKiB5cCArIC42Njg0Nzk5ICogeik7XG5cdGxldCBpID0gKGwgKyBtKSAvIDI7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJqYWJcIixcblx0XHRqOiAuNDQgKiBpIC8gKDEgLSAuNTYgKiBpKSAtIGQwJDEsXG5cdFx0YTogMy41MjQgKiBsIC0gNC4wNjY3MDggKiBtICsgLjU0MjcwOCAqIHMsXG5cdFx0YjogLjE5OTA3NiAqIGwgKyAxLjA5Njc5OSAqIG0gLSAxLjI5NTg3NSAqIHNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1h5ejY1LmpzXG52YXIgcCA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcURlY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2cCA9IE1hdGgucG93KHYsIDEgLyBwKTtcblx0cmV0dXJuIDFlNCAqIE1hdGgucG93KChDMSAtIHZwKSAvIChDMyAqIHZwIC0gQzIpLCAxIC8gTTEpO1xufTtcbnZhciByZWwgPSAodikgPT4gdiAvIDIwMztcbnZhciBjb252ZXJ0SmFiVG9YeXo2NSA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGogPT09IHZvaWQgMCkgaiA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGkgPSAoaiArIGQwKSAvICguNDQgKyAuNTYgKiAoaiArIGQwKSk7XG5cdGxldCBsID0gamFiUHFEZWNvZGUoaSArIC4xMzg2MDUwNCAqIGEgKyAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBtID0gamFiUHFEZWNvZGUoaSAtIC4xMzg2MDUwNCAqIGEgLSAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBzID0gamFiUHFEZWNvZGUoaSAtIC4wOTYwMTkyNDIgKiBhIC0gLjgxMTg5MTkgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogcmVsKDEuNjYxMzczMDI0NjUyMTc0ICogbCAtIC45MTQ1MjMwODEzMDQzNDggKiBtICsgLjIzMTM2MjA4MTczOTEzMDQ1ICogcyksXG5cdFx0eTogcmVsKC0uMzI1MDc1ODYxMTg0NDUzMyAqIGwgKyAxLjU3MTg0NzAyNjczMjU0MyAqIG0gLSAuMjE4MjUzODM0NTMyMjc5MjggKiBzKSxcblx0XHR6OiByZWwoLS4wOTA5ODI4MTEgKiBsIC0gLjMxMjcyODI5ICogbSArIDEuNTIyNzY2NiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0UmdiVG9KYWIuanNcbnZhciBjb252ZXJ0UmdiVG9KYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NjVUb0phYihjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRKYWJUb1JnYiA9IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEphYlRvWHl6NjUoY29sb3IpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE3ID0ge1xuXHRtb2RlOiBcImphYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1qemF6YnpcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWp6YXpielwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvSmFiLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0phYlxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRKYWJUb1JnYixcblx0XHR4eXo2NTogY29udmVydEphYlRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjJdLFxuXHRcdGE6IFstLjEwOSwgLjEyOV0sXG5cdFx0YjogWy0uMTg1LCAuMTM0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEphYlRvSmNoLmpzXG52YXIgY29udmVydEphYlRvSmNoID0gKHsgaiwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamNoXCIsXG5cdFx0aixcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9jb252ZXJ0SmNoVG9KYWIuanNcbnZhciBjb252ZXJ0SmNoVG9KYWIgPSAoeyBqLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0aixcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNiA9IHtcblx0bW9kZTogXCJqY2hcIixcblx0cGFyc2U6IFtcIi0tanpjemh6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemN6aHpcIixcblx0dG9Nb2RlOiB7XG5cdFx0amFiOiBjb252ZXJ0SmNoVG9KYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvUmdiKGNvbnZlcnRKY2hUb0phYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0SmFiVG9KY2goY29udmVydFJnYlRvSmFiKGMpKSxcblx0XHRqYWI6IGNvbnZlcnRKYWJUb0pjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRqOiBbMCwgLjIyMV0sXG5cdFx0YzogWzAsIC4xOV0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb25zdGFudHMuanNcbnZhciBrID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvWHl6NTAuanNcbnZhciBmbiA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gaztcbnZhciBjb252ZXJ0TGFiVG9YeXo1MCA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiBmbihmeCkgKiBENTAuWCxcblx0XHR5OiBmbihmeSkgKiBENTAuWSxcblx0XHR6OiBmbihmeikgKiBENTAuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0WHl6NTBUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo1MFRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMTM0MTM1OTU2OTk1ODcwNyAtIHkgKiAxLjYxNzM4NjMzMjE2MTI1MzggLSAuNDkwNjYxOTQ2MDA4MzUzMiAqIHosXG5cdFx0ZzogeCAqIC0uOTc4Nzk1NTAyOTEyMDg5ICsgeSAqIDEuOTE2MjU0NTY3MjU5NTI0ICsgLjAzMzQ0MjczMTE2MTMxOTQ5ICogeixcblx0XHRiOiB4ICogLjA3MTk1NTM3OTg4NDExNjc3IC0geSAqIC4yMjg5NzY4MjY0MTU4MzIyICsgMS40MDUzODYwNTgzMjQxMjUgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvUmdiLmpzXG52YXIgY29udmVydExhYlRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejUwVG9SZ2IoY29udmVydExhYlRvWHl6NTAobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2NvbnZlcnRSZ2JUb1h5ejUwLmpzXG52YXIgY29udmVydFJnYlRvWHl6NTAgPSAocmdiKSA9PiB7XG5cdGxldCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKHJnYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC40MzYwNjU3NDI4MjQ4MTEgKiByICsgLjM4NTE1MTQ2ODgzMzc5MTIgKiBnICsgLjE0MzA3ODQ1NDQyMjY0MTk3ICogYixcblx0XHR5OiAuMjIyNDkzMTkxNzU2MjM3MDIgKiByICsgLjcxNjg4NzA1MzgyMzg4MjMgKiBnICsgLjA2MDYxOTc5MDUzNjE2NTM3ICogYixcblx0XHR6OiAuMDEzOTIzOTA0NTAwOTQzNDY1ICogciArIC4wOTcwODEyODU2NjU3NDYzNCAqIGcgKyAuNzE0MDk5MzU4NDAwNTE1NSAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRYeXo1MFRvTGFiLmpzXG52YXIgZiA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrICogdmFsdWUgKyAxNikgLyAxMTY7XG52YXIgY29udmVydFh5ejUwVG9MYWIgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYoeCAvIEQ1MC5YKTtcblx0bGV0IGYxID0gZih5IC8gRDUwLlkpO1xuXHRsZXQgZjIgPSBmKHogLyBENTAuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWJcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRSZ2JUb0xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYiA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo1MFRvTGFiKGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpO1xuXHRpZiAocmdiLnIgPT09IHJnYi5iICYmIHJnYi5iID09PSByZ2IuZykgcmVzLmEgPSByZXMuYiA9IDA7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvcGFyc2VMYWIuanNcbmZ1bmN0aW9uIHBhcnNlTGFiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImxhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0aWYgKGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hID0gYS50eXBlID09PSBUb2suTnVtYmVyID8gYS52YWx1ZSA6IGEudmFsdWUgKiAxMjUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNSA9IHtcblx0bW9kZTogXCJsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRMYWJUb1h5ejUwLFxuXHRcdHJnYjogY29udmVydExhYlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTGFiLFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VMYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgbGFiKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmEgIT09IHZvaWQgMCA/IGMuYSA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDE1LFxuXHRtb2RlOiBcImxhYjY1XCIsXG5cdHBhcnNlOiBbXCItLWxhYi1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxhYi1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NjU6IGNvbnZlcnRMYWI2NVRvWHl6NjUsXG5cdFx0cmdiOiBjb252ZXJ0TGFiNjVUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0xhYjY1LFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiNjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy0xMjUsIDEyNV0sXG5cdFx0YjogWy0xMjUsIDEyNV1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL3BhcnNlTGNoLmpzXG5mdW5jdGlvbiBwYXJzZUxjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsY2hcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudmFsdWUpLCAxMDApO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogMTUwIC8gMTAwKTtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMyA9IHtcblx0bW9kZTogXCJsY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiOiBjb252ZXJ0TGNoVG9MYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiKGMpKSxcblx0XHRsYWI6IGNvbnZlcnRMYWJUb0xjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlQ2hyb21hIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaDY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEyID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcImxjaDY1XCIsXG5cdHBhcnNlOiBbXCItLWxjaC1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxjaC1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiNjUoYyksIFwibGNoNjVcIiksXG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJsY2g2NVwiKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9jb252ZXJ0THV2VG9MY2h1di5qc1xudmFyIGNvbnZlcnRMdXZUb0xjaHV2ID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGNodXZcIixcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIodiwgdSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydExjaHV2VG9MdXYuanNcbnZhciBjb252ZXJ0TGNodXZUb0x1diA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsdXZcIixcblx0XHRsLFxuXHRcdHU6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHR2OiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRYeXo1MFRvTHV2LmpzXG52YXIgdV9mbiQxID0gKHgsIHksIHopID0+IDQgKiB4IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdl9mbiQxID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4kMSA9IHVfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciB2biQxID0gdl9mbiQxKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGxfZm4gPSAodmFsdWUpID0+IHZhbHVlIDw9IGUgPyBrICogdmFsdWUgOiAxMTYgKiBNYXRoLmNicnQodmFsdWUpIC0gMTY7XG52YXIgY29udmVydFh5ejUwVG9MdXYgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBsID0gbF9mbih5IC8gRDUwLlkpO1xuXHRsZXQgdSA9IHVfZm4kMSh4LCB5LCB6KTtcblx0bGV0IHYgPSB2X2ZuJDEoeCwgeSwgeik7XG5cdGlmICghaXNGaW5pdGUodSkgfHwgIWlzRmluaXRlKHYpKSBsID0gdSA9IHYgPSAwO1xuXHRlbHNlIHtcblx0XHR1ID0gMTMgKiBsICogKHUgLSB1biQxKTtcblx0XHR2ID0gMTMgKiBsICogKHYgLSB2biQxKTtcblx0fVxuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1LFxuXHRcdHZcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRMdXZUb1h5ejUwLmpzXG52YXIgdV9mbiA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4gPSAoeCwgeSwgeikgPT4gOSAqIHkgLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB1biA9IHVfZm4oRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4gPSB2X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGNvbnZlcnRMdXZUb1h5ejUwID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGwgPT09IDApIHJldHVybiB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH07XG5cdGlmICh1ID09PSB2b2lkIDApIHUgPSAwO1xuXHRpZiAodiA9PT0gdm9pZCAwKSB2ID0gMDtcblx0bGV0IHVwID0gdSAvICgxMyAqIGwpICsgdW47XG5cdGxldCB2cCA9IHYgLyAoMTMgKiBsKSArIHZuO1xuXHRsZXQgeSA9IEQ1MC5ZICogKGwgPD0gOCA/IGwgLyBrIDogTWF0aC5wb3coKGwgKyAxNikgLyAxMTYsIDMpKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogeSAqICg5ICogdXApIC8gKDQgKiB2cCksXG5cdFx0eSxcblx0XHR6OiB5ICogKDEyIC0gMyAqIHVwIC0gMjAgKiB2cCkgLyAoNCAqIHZwKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9kZWZpbml0aW9uLmpzXG52YXIgY29udmVydFJnYlRvTGNodXYgPSAocmdiKSA9PiBjb252ZXJ0THV2VG9MY2h1dihjb252ZXJ0WHl6NTBUb0x1dihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKSk7XG52YXIgY29udmVydExjaHV2VG9SZ2IgPSAobGNodXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGNvbnZlcnRMY2h1dlRvTHV2KGxjaHV2KSkpO1xudmFyIGRlZmluaXRpb24kMTEgPSB7XG5cdG1vZGU6IFwibGNodXZcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHV2OiBjb252ZXJ0TGNodXZUb0x1dixcblx0XHRyZ2I6IGNvbnZlcnRMY2h1dlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9MY2h1dixcblx0XHRsdXY6IGNvbnZlcnRMdXZUb0xjaHV2XG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWxjaHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2h1dlwiLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTc2Ljk1Nl0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEwID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcImxyZ2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydExyZ2JUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0xyZ2IgfSxcblx0cGFyc2U6IFtcInNyZ2ItbGluZWFyXCJdLFxuXHRzZXJpYWxpemU6IFwic3JnYi1saW5lYXJcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDkgPSB7XG5cdG1vZGU6IFwibHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0THV2VG9YeXo1MCxcblx0XHRyZ2I6IChsdXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGx1dikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTHV2LFxuXHRcdHJnYjogKHJnYikgPT4gY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcInVcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tbHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sdXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0dTogWy04NC45MzYsIDE3NS4wNDJdLFxuXHRcdHY6IFstMTI1Ljg4MiwgODcuMjQzXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR1OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0THJnYlRvT2tsYWIuanNcbnZhciBjb252ZXJ0THJnYlRvT2tsYWIgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBMID0gTWF0aC5jYnJ0KC40MTIyMjE0Njk0NzA3NjMgKiByICsgLjUzNjMzMjUzNzI2MTczNDggKiBnICsgLjA1MTQ0NTk5MzI2NzUwMjIgKiBiKTtcblx0bGV0IE0gPSBNYXRoLmNicnQoLjIxMTkwMzQ5NTgxNzgyNTIgKiByICsgLjY4MDY5OTU1MDY0NTIzNDQgKiBnICsgLjEwNzM5Njk1MzUzNjk0MDYgKiBiKTtcblx0bGV0IFMgPSBNYXRoLmNicnQoLjA4ODMwMjQ1OTE5MDA1NjQgKiByICsgLjI4MTcxODgzOTEzNjEyMTUgKiBnICsgLjYyOTk3ODcwMTY3MzgyMjIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogLjIxMDQ1NDI2ODMwOTMxNCAqIEwgKyAuNzkzNjE3Nzc0NzAyMzA1NCAqIE0gLSAuMDA0MDcyMDQzMDExNjE5MyAqIFMsXG5cdFx0YTogMS45Nzc5OTg1MzI0MzExNjg0ICogTCAtIDIuNDI4NTkyMjQyMDQ4NTggKiBNICsgLjQ1MDU5MzcwOTYxNzQxMSAqIFMsXG5cdFx0YjogLjAyNTkwNDA0MjQ2NTU0NzggKiBMICsgLjc4Mjc3MTcxMjQ1NzUyOTYgKiBNIC0gLjgwODY3NTc1NDkyMzA3NzQgKiBTXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRSZ2JUb09rbGFiLmpzXG52YXIgY29udmVydFJnYlRvT2tsYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvT2tsYWIoY29udmVydFJnYlRvTHJnYihyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9McmdiLmpzXG52YXIgY29udmVydE9rbGFiVG9McmdiID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGgucG93KGwgKyAuMzk2MzM3Nzc3Mzc2MTc0OSAqIGEgKyAuMjE1ODAzNzU3MzA5OTEzNiAqIGIsIDMpO1xuXHRsZXQgTSA9IE1hdGgucG93KGwgLSAuMTA1NTYxMzQ1ODE1NjU4NiAqIGEgLSAuMDYzODU0MTcyODI1ODEzMyAqIGIsIDMpO1xuXHRsZXQgUyA9IE1hdGgucG93KGwgLSAuMDg5NDg0MTc3NTI5ODExOSAqIGEgLSAxLjI5MTQ4NTU0ODAxOTQwOTIgKiBiLCAzKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiA0LjA3Njc0MTYzNjA3NTk1NyAqIEwgLSAzLjMwNzcxMTUzOTI1ODA2MTYgKiBNICsgLjIzMDk2OTkwMzE4MjEwNDQgKiBTLFxuXHRcdGc6IC0xLjI2ODQzNzk3MzI4NTAzMTcgKiBMICsgMi42MDk3NTczNDkyODc2ODg3ICogTSAtIC4zNDEzMTkzNzYwMDI2NTczICogUyxcblx0XHRiOiAtLjAwNDE5NjA3NjEzODY3NTYgKiBMIC0gLjcwMzQxODYxNzkzNTkzNjIgKiBNICsgMS43MDc2MTQ2OTQwNzQ2MTE3ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0T2tsYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvUmdiID0gKGMpID0+IGNvbnZlcnRMcmdiVG9SZ2IoY29udmVydE9rbGFiVG9McmdiKGMpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvaGVscGVycy5qc1xuZnVuY3Rpb24gdG9lKHgpIHtcblx0Y29uc3Qga18xID0gLjIwNjtcblx0Y29uc3Qga18yID0gLjAzO1xuXHRjb25zdCBrXzMgPSAxLjIwNiAvIDEuMDM7XG5cdHJldHVybiAuNSAqIChrXzMgKiB4IC0ga18xICsgTWF0aC5zcXJ0KChrXzMgKiB4IC0ga18xKSAqIChrXzMgKiB4IC0ga18xKSArIDQgKiBrXzIgKiBrXzMgKiB4KSk7XG59XG5mdW5jdGlvbiB0b2VfaW52KHgpIHtcblx0cmV0dXJuICh4ICogeCArIC4yMDYgKiB4KSAvICgxLjIwNiAvIDEuMDMgKiAoeCArIC4wMykpO1xufVxuZnVuY3Rpb24gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKSB7XG5cdGxldCBrMCwgazEsIGsyLCBrMywgazQsIHdsLCB3bSwgd3M7XG5cdGlmICgtMS44ODE3MDMyOCAqIGEgLSAuODA5MzY0OTMgKiBiID4gMSkge1xuXHRcdGswID0gMS4xOTA4NjI3Nztcblx0XHRrMSA9IDEuNzY1NzY3Mjg7XG5cdFx0azIgPSAuNTk2NjI2NDE7XG5cdFx0azMgPSAuNzU1MTUxOTc7XG5cdFx0azQgPSAuNTY3NzEyNDU7XG5cdFx0d2wgPSA0LjA3Njc0MTY2MjE7XG5cdFx0d20gPSAtMy4zMDc3MTE1OTEzO1xuXHRcdHdzID0gLjIzMDk2OTkyOTI7XG5cdH0gZWxzZSBpZiAoMS44MTQ0NDEwNCAqIGEgLSAxLjE5NDQ1Mjc2ICogYiA+IDEpIHtcblx0XHRrMCA9IC43Mzk1NjUxNTtcblx0XHRrMSA9IC0uNDU5NTQ0MDQ7XG5cdFx0azIgPSAuMDgyODU0Mjc7XG5cdFx0azMgPSAuMTI1NDEwNztcblx0XHRrNCA9IC4xNDUwMzIwNDtcblx0XHR3bCA9IC0xLjI2ODQzODAwNDY7XG5cdFx0d20gPSAyLjYwOTc1NzQwMTE7XG5cdFx0d3MgPSAtLjM0MTMxOTM5NjU7XG5cdH0gZWxzZSB7XG5cdFx0azAgPSAxLjM1NzMzNjUyO1xuXHRcdGsxID0gLS4wMDkxNTc5OTtcblx0XHRrMiA9IC0xLjE1MTMwMjE7XG5cdFx0azMgPSAtLjUwNTU5NjA2O1xuXHRcdGs0ID0gLjAwNjkyMTY3O1xuXHRcdHdsID0gLS4wMDQxOTYwODYzO1xuXHRcdHdtID0gLS43MDM0MTg2MTQ3O1xuXHRcdHdzID0gMS43MDc2MTQ3MDE7XG5cdH1cblx0bGV0IFMgPSBrMCArIGsxICogYSArIGsyICogYiArIGszICogYSAqIGEgKyBrNCAqIGEgKiBiO1xuXHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRsZXQga19tID0gLS4xMDU1NjEzNDU4ICogYSAtIC4wNjM4NTQxNzI4ICogYjtcblx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdHtcblx0XHRsZXQgbF8gPSAxICsgUyAqIGtfbDtcblx0XHRsZXQgbV8gPSAxICsgUyAqIGtfbTtcblx0XHRsZXQgc18gPSAxICsgUyAqIGtfcztcblx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRsZXQgbSA9IG1fICogbV8gKiBtXztcblx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRsZXQgbF9kUyA9IDMgKiBrX2wgKiBsXyAqIGxfO1xuXHRcdGxldCBtX2RTID0gMyAqIGtfbSAqIG1fICogbV87XG5cdFx0bGV0IHNfZFMgPSAzICoga19zICogc18gKiBzXztcblx0XHRsZXQgbF9kUzIgPSA2ICoga19sICoga19sICogbF87XG5cdFx0bGV0IG1fZFMyID0gNiAqIGtfbSAqIGtfbSAqIG1fO1xuXHRcdGxldCBzX2RTMiA9IDYgKiBrX3MgKiBrX3MgKiBzXztcblx0XHRsZXQgZiA9IHdsICogbCArIHdtICogbSArIHdzICogcztcblx0XHRsZXQgZjEgPSB3bCAqIGxfZFMgKyB3bSAqIG1fZFMgKyB3cyAqIHNfZFM7XG5cdFx0bGV0IGYyID0gd2wgKiBsX2RTMiArIHdtICogbV9kUzIgKyB3cyAqIHNfZFMyO1xuXHRcdFMgPSBTIC0gZiAqIGYxIC8gKGYxICogZjEgLSAuNSAqIGYgKiBmMik7XG5cdH1cblx0cmV0dXJuIFM7XG59XG5mdW5jdGlvbiBmaW5kX2N1c3AoYSwgYikge1xuXHRsZXQgU19jdXNwID0gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKTtcblx0bGV0IHJnYiA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogMSxcblx0XHRhOiBTX2N1c3AgKiBhLFxuXHRcdGI6IFNfY3VzcCAqIGJcblx0fSk7XG5cdGxldCBMX2N1c3AgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYi5yLCByZ2IuZywgcmdiLmIpKTtcblx0cmV0dXJuIFtMX2N1c3AsIExfY3VzcCAqIFNfY3VzcF07XG59XG5mdW5jdGlvbiBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhLCBiLCBMMSwgQzEsIEwwLCBjdXNwID0gbnVsbCkge1xuXHRpZiAoIWN1c3ApIGN1c3AgPSBmaW5kX2N1c3AoYSwgYik7XG5cdGxldCB0O1xuXHRpZiAoKEwxIC0gTDApICogY3VzcFsxXSAtIChjdXNwWzBdIC0gTDApICogQzEgPD0gMCkgdCA9IGN1c3BbMV0gKiBMMCAvIChDMSAqIGN1c3BbMF0gKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0ZWxzZSB7XG5cdFx0dCA9IGN1c3BbMV0gKiAoTDAgLSAxKSAvIChDMSAqIChjdXNwWzBdIC0gMSkgKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0XHR7XG5cdFx0XHRsZXQgZEwgPSBMMSAtIEwwO1xuXHRcdFx0bGV0IGRDID0gQzE7XG5cdFx0XHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRcdFx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdFx0XHRsZXQga19zID0gLS4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYjtcblx0XHRcdGxldCBsX2R0ID0gZEwgKyBkQyAqIGtfbDtcblx0XHRcdGxldCBtX2R0ID0gZEwgKyBkQyAqIGtfbTtcblx0XHRcdGxldCBzX2R0ID0gZEwgKyBkQyAqIGtfcztcblx0XHRcdHtcblx0XHRcdFx0bGV0IEwgPSBMMCAqICgxIC0gdCkgKyB0ICogTDE7XG5cdFx0XHRcdGxldCBDID0gdCAqIEMxO1xuXHRcdFx0XHRsZXQgbF8gPSBMICsgQyAqIGtfbDtcblx0XHRcdFx0bGV0IG1fID0gTCArIEMgKiBrX207XG5cdFx0XHRcdGxldCBzXyA9IEwgKyBDICoga19zO1xuXHRcdFx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0XHRcdGxldCBzID0gc18gKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0ID0gMyAqIGxfZHQgKiBsXyAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0ID0gMyAqIG1fZHQgKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0ID0gMyAqIHNfZHQgKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0MiA9IDYgKiBsX2R0ICogbF9kdCAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0MiA9IDYgKiBtX2R0ICogbV9kdCAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0MiA9IDYgKiBzX2R0ICogc19kdCAqIHNfO1xuXHRcdFx0XHRsZXQgciA9IDQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgLjIzMDk2OTkyOTIgKiBzIC0gMTtcblx0XHRcdFx0bGV0IHIxID0gNC4wNzY3NDE2NjIxICogbGR0IC0gMy4zMDc3MTE1OTEzICogbWR0ICsgLjIzMDk2OTkyOTIgKiBzZHQ7XG5cdFx0XHRcdGxldCByMiA9IDQuMDc2NzQxNjYyMSAqIGxkdDIgLSAzLjMwNzcxMTU5MTMgKiBtZHQyICsgLjIzMDk2OTkyOTIgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9yID0gcjEgLyAocjEgKiByMSAtIC41ICogciAqIHIyKTtcblx0XHRcdFx0bGV0IHRfciA9IC1yICogdV9yO1xuXHRcdFx0XHRsZXQgZyA9IC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIC4zNDEzMTkzOTY1ICogcyAtIDE7XG5cdFx0XHRcdGxldCBnMSA9IC0xLjI2ODQzODAwNDYgKiBsZHQgKyAyLjYwOTc1NzQwMTEgKiBtZHQgLSAuMzQxMzE5Mzk2NSAqIHNkdDtcblx0XHRcdFx0bGV0IGcyID0gLTEuMjY4NDM4MDA0NiAqIGxkdDIgKyAyLjYwOTc1NzQwMTEgKiBtZHQyIC0gLjM0MTMxOTM5NjUgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9nID0gZzEgLyAoZzEgKiBnMSAtIC41ICogZyAqIGcyKTtcblx0XHRcdFx0bGV0IHRfZyA9IC1nICogdV9nO1xuXHRcdFx0XHRsZXQgYiA9IC0uMDA0MTk2MDg2MyAqIGwgLSAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgYjEgPSAtLjAwNDE5NjA4NjMgKiBsZHQgLSAuNzAzNDE4NjE0NyAqIG1kdCArIDEuNzA3NjE0NzAxICogc2R0O1xuXHRcdFx0XHRsZXQgYjIgPSAtLjAwNDE5NjA4NjMgKiBsZHQyIC0gLjcwMzQxODYxNDcgKiBtZHQyICsgMS43MDc2MTQ3MDEgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9iID0gYjEgLyAoYjEgKiBiMSAtIC41ICogYiAqIGIyKTtcblx0XHRcdFx0bGV0IHRfYiA9IC1iICogdV9iO1xuXHRcdFx0XHR0X3IgPSB1X3IgPj0gMCA/IHRfciA6IDFlNjtcblx0XHRcdFx0dF9nID0gdV9nID49IDAgPyB0X2cgOiAxZTY7XG5cdFx0XHRcdHRfYiA9IHVfYiA+PSAwID8gdF9iIDogMWU2O1xuXHRcdFx0XHR0ICs9IE1hdGgubWluKHRfciwgTWF0aC5taW4odF9nLCB0X2IpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBMID0gY3VzcFswXTtcblx0bGV0IEMgPSBjdXNwWzFdO1xuXHRyZXR1cm4gW0MgLyBMLCBDIC8gKDEgLSBMKV07XG59XG5mdW5jdGlvbiBnZXRfQ3MoTCwgYV8sIGJfKSB7XG5cdGxldCBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBDX21heCA9IGZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uKGFfLCBiXywgTCwgMSwgTCwgY3VzcCk7XG5cdGxldCBTVF9tYXggPSBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCk7XG5cdGxldCBTX21pZCA9IC4xMTUxNjk5MyArIDEgLyAoNy40NDc3ODk3ICsgNC4xNTkwMTI0ICogYl8gKyBhXyAqICgtMi4xOTU1NzM0NyArIDEuNzUxOTg0MDEgKiBiXyArIGFfICogKC0yLjEzNzA0OTQ4IC0gMTAuMDIzMDEwNDMgKiBiXyArIGFfICogKC00LjI0ODk0NTYxICsgNS4zODc3MDgxOSAqIGJfICsgNC42OTg5MTAxMyAqIGFfKSkpKTtcblx0bGV0IFRfbWlkID0gLjExMjM5NjQyICsgMSAvICgxLjYxMzIwMzIgLSAuNjgxMjQzNzkgKiBiXyArIGFfICogKC40MDM3MDYxMiArIC45MDE0ODEyMyAqIGJfICsgYV8gKiAoLS4yNzA4Nzk0MyArIC42MTIyMzk5ICogYl8gKyBhXyAqICguMDAyOTkyMTUgLSAuNDUzOTk1NjggKiBiXyAtIC4xNDY2MTg3MiAqIGFfKSkpKTtcblx0bGV0IGsgPSBDX21heCAvIE1hdGgubWluKEwgKiBTVF9tYXhbMF0sICgxIC0gTCkgKiBTVF9tYXhbMV0pO1xuXHRsZXQgQ19hID0gTCAqIFNfbWlkO1xuXHRsZXQgQ19iID0gKDEgLSBMKSAqIFRfbWlkO1xuXHRsZXQgQ19taWQgPSAuOSAqIGsgKiBNYXRoLnNxcnQoTWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EgKiBDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IgKiBDX2IgKiBDX2IpKSkpO1xuXHRDX2EgPSBMICogLjQ7XG5cdENfYiA9ICgxIC0gTCkgKiAuODtcblx0cmV0dXJuIFtcblx0XHRNYXRoLnNxcnQoMSAvICgxIC8gKENfYSAqIENfYSkgKyAxIC8gKENfYiAqIENfYikpKSxcblx0XHRDX21pZCxcblx0XHRDX21heFxuXHRdO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2tsYWJUb09raHNsLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHNsKGxhYikge1xuXHRjb25zdCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0Y29uc3QgYSA9IGxhYi5hICE9PSB2b2lkIDAgPyBsYWIuYSA6IDA7XG5cdGNvbnN0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2hzbFwiLFxuXHRcdGw6IHRvZShsKVxuXHR9O1xuXHRpZiAobGFiLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGxhYi5hbHBoYTtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGlmICghYykge1xuXHRcdHJldC5zID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBbQ18wLCBDX21pZCwgQ19tYXhdID0gZ2V0X0NzKGwsIGEgLyBjLCBiIC8gYyk7XG5cdGxldCBzO1xuXHRpZiAoYyA8IENfbWlkKSB7XG5cdFx0bGV0IGtfMCA9IDA7XG5cdFx0bGV0IGtfMSA9IC44ICogQ18wO1xuXHRcdGxldCBrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdFx0cyA9IChjIC0ga18wKSAvIChrXzEgKyBrXzIgKiAoYyAtIGtfMCkpICogLjg7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IGtfMCA9IENfbWlkO1xuXHRcdGxldCBrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0XHRzID0gLjggKyAuMiAqICgoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSk7XG5cdH1cblx0aWYgKHMpIHtcblx0XHRyZXQucyA9IHM7XG5cdFx0cmV0LmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2NvbnZlcnRPa2hzbFRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzbFRvT2tsYWIoaHNsKSB7XG5cdGxldCBoID0gaHNsLmggIT09IHZvaWQgMCA/IGhzbC5oIDogMDtcblx0bGV0IHMgPSBoc2wucyAhPT0gdm9pZCAwID8gaHNsLnMgOiAwO1xuXHRsZXQgbCA9IGhzbC5sICE9PSB2b2lkIDAgPyBoc2wubCA6IDA7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogdG9lX2ludihsKVxuXHR9O1xuXHRpZiAoaHNsLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzbC5hbHBoYTtcblx0aWYgKCFzIHx8IGwgPT09IDEpIHtcblx0XHRyZXQuYSA9IHJldC5iID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhyZXQubCwgYV8sIGJfKTtcblx0bGV0IHQsIGtfMCwga18xLCBrXzI7XG5cdGlmIChzIDwgLjgpIHtcblx0XHR0ID0gMS4yNSAqIHM7XG5cdFx0a18wID0gMDtcblx0XHRrXzEgPSAuOCAqIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdH0gZWxzZSB7XG5cdFx0dCA9IDUgKiAocyAtIC44KTtcblx0XHRrXzAgPSBDX21pZDtcblx0XHRrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gKENfbWF4IC0gQ19taWQpO1xuXHR9XG5cdGxldCBDID0ga18wICsgdCAqIGtfMSAvICgxIC0ga18yICogdCk7XG5cdHJldC5hID0gQyAqIGFfO1xuXHRyZXQuYiA9IEMgKiBiXztcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvbW9kZU9raHNsLmpzXG52YXIgbW9kZU9raHNsID0ge1xuXHQuLi5kZWZpbml0aW9uJDIxLFxuXHRtb2RlOiBcIm9raHNsXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHNsXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzbFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHNsLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc2woY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc2xUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzbFRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2xhYlRvT2toc3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2xhYlRvT2toc3YobGFiKSB7XG5cdGxldCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0bGV0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRsZXQgYiA9IGxhYi5iICE9PSB2b2lkIDAgPyBsYWIuYiA6IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgYV8gPSBjID8gYSAvIGMgOiAxO1xuXHRsZXQgYl8gPSBjID8gYiAvIGMgOiAxO1xuXHRsZXQgW1NfbWF4LCBUXSA9IGdldF9TVF9tYXgoYV8sIGJfKTtcblx0bGV0IFNfMCA9IC41O1xuXHRsZXQgayA9IDEgLSBTXzAgLyBTX21heDtcblx0bGV0IHQgPSBUIC8gKGMgKyBsICogVCk7XG5cdGxldCBMX3YgPSB0ICogbDtcblx0bGV0IENfdiA9IHQgKiBjO1xuXHRsZXQgTF92dCA9IHRvZV9pbnYoTF92KTtcblx0bGV0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRsZXQgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGxldCBzY2FsZV9MID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2Jfc2NhbGUuciwgcmdiX3NjYWxlLmcsIHJnYl9zY2FsZS5iLCAwKSk7XG5cdGwgPSBsIC8gc2NhbGVfTDtcblx0YyA9IGMgLyBzY2FsZV9MICogdG9lKGwpIC8gbDtcblx0bCA9IHRvZShsKTtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc3ZcIixcblx0XHRzOiBjID8gKFNfMCArIFQpICogQ192IC8gKFQgKiBTXzAgKyBUICogayAqIENfdikgOiAwLFxuXHRcdHY6IGwgPyBsIC8gTF92IDogMFxuXHR9O1xuXHRpZiAocmV0LnMpIHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2hzdlRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzdlRvT2tsYWIoaHN2KSB7XG5cdGNvbnN0IHJldCA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gaHN2LmFscGhhO1xuXHRjb25zdCBoID0gaHN2LmggIT09IHZvaWQgMCA/IGhzdi5oIDogMDtcblx0Y29uc3QgcyA9IGhzdi5zICE9PSB2b2lkIDAgPyBoc3YucyA6IDA7XG5cdGNvbnN0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRjb25zdCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0Y29uc3QgYl8gPSBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGNvbnN0IFNfMCA9IC41O1xuXHRjb25zdCBrID0gMSAtIFNfMCAvIFNfbWF4O1xuXHRjb25zdCBMX3YgPSAxIC0gcyAqIFNfMCAvIChTXzAgKyBUIC0gVCAqIGsgKiBzKTtcblx0Y29uc3QgQ192ID0gcyAqIFQgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGNvbnN0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRjb25zdCByZ2Jfc2NhbGUgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IExfdnQsXG5cdFx0YTogYV8gKiBDX3Z0LFxuXHRcdGI6IGJfICogQ192dFxuXHR9KTtcblx0Y29uc3Qgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRjb25zdCBMX25ldyA9IHRvZV9pbnYodiAqIExfdik7XG5cdGNvbnN0IEMgPSBDX3YgKiBMX25ldyAvIExfdjtcblx0cmV0LmwgPSBMX25ldyAqIHNjYWxlX0w7XG5cdHJldC5hID0gQyAqIGFfICogc2NhbGVfTDtcblx0cmV0LmIgPSBDICogYl8gKiBzY2FsZV9MO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9tb2RlT2toc3YuanNcbnZhciBtb2RlT2toc3YgPSB7XG5cdC4uLmRlZmluaXRpb24kMjAsXG5cdG1vZGU6IFwib2toc3ZcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tb2toc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLW9raHN2XCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2xhYlRvT2toc3YsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9Pa2hzdihjb252ZXJ0UmdiVG9Pa2xhYihjKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2hzdlRvT2tsYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydE9raHN2VG9Pa2xhYihjKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvcGFyc2VPa2xhYi5qc1xuZnVuY3Rpb24gcGFyc2VPa2xhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGNvbnN0IFssIGwsIGEsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSB8fCBhLnR5cGUgPT09IFRvay5IdWUgfHwgYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kOCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJva2xhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0T2tsYWJUb0xyZ2IsXG5cdFx0cmdiOiBjb252ZXJ0T2tsYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdGxyZ2I6IGNvbnZlcnRMcmdiVG9Pa2xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb09rbGFiXG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRhOiBbLS40LCAuNF0sXG5cdFx0YjogWy0uNCwgLjRdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xhYl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9wYXJzZU9rbGNoLmpzXG5mdW5jdGlvbiBwYXJzZU9rbGNoKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcIm9rbGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcIm9rbGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdH1cblx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5jID0gTWF0aC5tYXgoMCwgYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgKiAuNCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ3ID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcIm9rbGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb09rbGFiKGMpLCBcIm9rbGNoXCIpLFxuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwib2tsY2hcIilcblx0fSxcblx0cGFyc2U6IFtwYXJzZU9rbGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYG9rbGNoKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmMgIT09IHZvaWQgMCA/IGMuYyA6IFwibm9uZVwifSAke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRjOiBbMCwgLjRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRQM1RvWHl6NjUuanNcbnZhciBjb252ZXJ0UDNUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDg2NTcwOTQ4NjQ4MjE2ICogciArIC4yNjU2Njc2OTMxNjkwOTMgKiBnICsgLjE5ODIxNzI4NTIzNDM2MjUgKiBiLFxuXHRcdHk6IC4yMjg5NzQ1NjQwNjk3NDg3ICogciArIC42OTE3Mzg1MjE4MzY1MDYyICogZyArIC4wNzkyODY5MTQwOTM3NDUgKiBiLFxuXHRcdHo6IDAgKiByICsgLjA0NTExMzM4MTg1ODkwMjYgKiBnICsgMS4wNDM5NDQzNjg5MDA5NzYgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRYeXo2NVRvUDMuanNcbnZhciBjb252ZXJ0WHl6NjVUb1AzID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDIuNDkzNDk2OTExOTQxNDI2MyAtIHkgKiAuOTMxMzgzNjE3OTE5MTI0MiAtIC40MDI3MTA3ODQ0NTA3MTcgKiB6LFxuXHRcdGc6IHggKiAtLjgyOTQ4ODk2OTU2MTU3NDkgKyB5ICogMS43NjI2NjQwNjAzMTgzNDY1ICsgLjAyMzYyNDY4NTg0MTk0MzYgKiB6LFxuXHRcdGI6IHggKiAuMDM1ODQ1ODMwMjQzNzg0NSAtIHkgKiAuMDc2MTcyMzg5MjY4MDQxOCArIC45NTY4ODQ1MjQwMDc2ODcxICogelxuXHR9LCBcInAzXCIpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInAzXCIsXG5cdHBhcnNlOiBbXCJkaXNwbGF5LXAzXCJdLFxuXHRzZXJpYWxpemU6IFwiZGlzcGxheS1wM1wiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1AzKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvUDNcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRQM1RvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydFAzVG9YeXo2NVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0WHl6NTBUb1Byb3Bob3RvLmpzXG52YXIgZ2FtbWEkMSA9ICh2KSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxIC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxIC8gMS44KTtcblx0cmV0dXJuIDE2ICogdjtcbn07XG52YXIgY29udmVydFh5ejUwVG9Qcm9waG90byA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdFx0cjogZ2FtbWEkMSh4ICogMS4zNDU3ODY4ODE2NDcxNTg1IC0geSAqIC4yNTU1NzIwODczNzk3OTQ2IC0gLjA1MTEwMTg2NDk3NTU0NTMgKiB6KSxcblx0XHRnOiBnYW1tYSQxKHggKiAtLjU0NDYzMDcwNTEyNDkwMTkgKyB5ICogMS41MDgyNDc3NDI4NDUxNDY2ICsgLjAyMDUyNzQ0NzQzNjQyMTQgKiB6KSxcblx0XHRiOiBnYW1tYSQxKHggKiAwICsgeSAqIDAgKyAxLjIxMTk2NzU0NTYzODk0NTIgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLmpzXG52YXIgbGluZWFyaXplJDEgPSAodiA9IDApID0+IHtcblx0bGV0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID49IDE2IC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxLjgpO1xuXHRyZXR1cm4gdiAvIDE2O1xufTtcbnZhciBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwID0gKHByb3Bob3RvKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplJDEocHJvcGhvdG8ucik7XG5cdGxldCBnID0gbGluZWFyaXplJDEocHJvcGhvdG8uZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDEocHJvcGhvdG8uYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC43OTc3NjY2NDQ5MDA2NDIzICogciArIC4xMzUxODEyOTc0MDA1MzMxICogZyArIC4wMzEzNDc3MzQxMjgzOTIyICogYixcblx0XHR5OiAuMjg4MDc0ODI4ODE5NDAxMyAqIHIgKyAuNzExODM1MjM0MjQxODczMSAqIGcgKyA4OTkzNjkzODcyNTZlLTE2ICogYixcblx0XHR6OiAwICogciArIDAgKiBnICsgLjgyNTEwNDYwMjUxMDQ2MDIgKiBiXG5cdH07XG5cdGlmIChwcm9waG90by5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBwcm9waG90by5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3Byb3Bob3RvL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDUgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicHJvcGhvdG9cIixcblx0cGFyc2U6IFtcInByb3Bob3RvLXJnYlwiXSxcblx0c2VyaWFsaXplOiBcInByb3Bob3RvLXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvKGNvbnZlcnRSZ2JUb1h5ejUwKGNvbG9yKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRQcm9waG90b1RvWHl6NTAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRQcm9waG90b1RvWHl6NTAoY29sb3IpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRYeXo2NVRvUmVjMjAyMC5qc1xudmFyIM6xJDEgPSAxLjA5OTI5NjgyNjgwOTQ0O1xudmFyIM6yJDEgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGdhbW1hID0gKHYpID0+IHtcblx0Y29uc3QgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPiDOsiQxKSByZXR1cm4gKE1hdGguc2lnbih2KSB8fCAxKSAqICjOsSQxICogTWF0aC5wb3coYWJzLCAuNDUpIC0gLjA5OTI5NjgyNjgwOTQ0MDA4KTtcblx0cmV0dXJuIDQuNSAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo2NVRvUmVjMjAyMCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInJlYzIwMjBcIixcblx0XHRyOiBnYW1tYSh4ICogMS43MTY2NTExODc5NzEyNjgzIC0geSAqIC4zNTU2NzA3ODM3NzYzOTI1IC0gLjI1MzM2NjI4MTM3MzY1OTkgKiB6KSxcblx0XHRnOiBnYW1tYSh4ICogLS42NjY2ODQzNTE4MzI0ODkzICsgeSAqIDEuNjE2NDgxMjM2NjM0OTM5NSArIC4wMTU3Njg1NDU4MTM5MTExICogeiksXG5cdFx0YjogZ2FtbWEoeCAqIC4wMTc2Mzk4NTc0NDUzMTA4IC0geSAqIC4wNDI3NzA2MTMyNTc4MDg1ICsgLjk0MjEwMzEyMTIzNTQ3MzkgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRSZWMyMDIwVG9YeXo2NS5qc1xudmFyIM6xID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiA9IC4wMTgwNTM5Njg1MTA4MDc7XG52YXIgbGluZWFyaXplID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA8IM6yICogNC41KSByZXR1cm4gdiAvIDQuNTtcblx0cmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgzrEgLSAxKSAvIM6xLCAxIC8gLjQ1KTtcbn07XG52YXIgY29udmVydFJlYzIwMjBUb1h5ejY1ID0gKHJlYzIwMjApID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUocmVjMjAyMC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUocmVjMjAyMC5nKTtcblx0bGV0IGIgPSBsaW5lYXJpemUocmVjMjAyMC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjYzNjk1ODA0ODMwMTI5MTEgKiByICsgLjE0NDYxNjkwMzU4NjIwODMgKiBnICsgLjE2ODg4MDk3NTE2NDE3MjEgKiBiLFxuXHRcdHk6IC4yNjI3MDAyMTIwMTEyNjcgKiByICsgLjY3Nzk5ODA3MTUxODg3MDggKiBnICsgLjA1OTMwMTcxNjQ2OTg2MiAqIGIsXG5cdFx0ejogMCAqIHIgKyAuMDI4MDcyNjkzMDQ5MDg3NCAqIGcgKyAxLjA2MDk4NTA1NzcxMDc5MDkgKiBiXG5cdH07XG5cdGlmIChyZWMyMDIwLmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IHJlYzIwMjAuYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDQgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicmVjMjAyMFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmVjMjAyMChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0UmVjMjAyMFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRSZWMyMDIwVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHBhcnNlOiBbXCJyZWMyMDIwXCJdLFxuXHRzZXJpYWxpemU6IFwicmVjMjAyMFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29uc3RhbnRzLmpzXG52YXIgYmlhcyA9IC4wMDM3OTMwNzMyNTUyNzU0NDkzO1xudmFyIGJpYXNfY2JydCA9IE1hdGguY2JydChiaWFzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnZlcnRSZ2JUb1h5Yi5qc1xudmFyIHRyYW5zZmVyJDEgPSAodikgPT4gTWF0aC5jYnJ0KHYpIC0gYmlhc19jYnJ0O1xudmFyIGNvbnZlcnRSZ2JUb1h5YiA9IChjb2xvcikgPT4ge1xuXHRjb25zdCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKGNvbG9yKTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyJDEoLjMgKiByICsgLjYyMiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBtID0gdHJhbnNmZXIkMSguMjMgKiByICsgLjY5MiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBzID0gdHJhbnNmZXIkMSguMjQzNDIyNjg5MjQ1NDc4MiAqIHIgKyAuMjA0NzY3NDQ0MjQ0OTY4MiAqIGcgKyAuNTUxODA5ODY2NTA5NTUzNSAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHliXCIsXG5cdFx0eDogKGwgLSBtKSAvIDIsXG5cdFx0eTogKGwgKyBtKSAvIDIsXG5cdFx0YjogcyAtIChsICsgbSkgLyAyXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0WHliVG9SZ2IuanNcbnZhciB0cmFuc2ZlciA9ICh2KSA9PiBNYXRoLnBvdyh2ICsgYmlhc19jYnJ0LCAzKTtcbnZhciBjb252ZXJ0WHliVG9SZ2IgPSAoeyB4LCB5LCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2Zlcih4ICsgeSkgLSBiaWFzO1xuXHRjb25zdCBtID0gdHJhbnNmZXIoeSAtIHgpIC0gYmlhcztcblx0Y29uc3QgcyA9IHRyYW5zZmVyKGIgKyB5KSAtIGJpYXM7XG5cdGNvbnN0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IDExLjAzMTU2NjkwNDYzOTg2MSAqIGwgLSA5Ljg2Njk0MzkwODEzMTU2MiAqIG0gLSAuMTY0NjIyOTk2NTA4Mjk5MzQgKiBzLFxuXHRcdGc6IC0zLjI1NDE0NzM4MTA3NDQyMzcgKiBsICsgNC40MTg3NzAzNzc1ODI3MjMgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRiOiAtMy42NTg4NTEyODY3MTM2ODE1ICogbCArIDIuNzEyOTIzMDQ1OTM2MDkyMiAqIG0gKyAxLjk0NTkyODI0MDc3NzU4OTUgKiBzXG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMyA9IHtcblx0bW9kZTogXCJ4eWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teHliXCJdLFxuXHRzZXJpYWxpemU6IFwiLS14eWJcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydFh5YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvWHliIH0sXG5cdHJhbmdlczoge1xuXHRcdHg6IFstLjAxNTQsIC4wMjgxXSxcblx0XHR5OiBbMCwgLjg0NTNdLFxuXHRcdGI6IFstLjI3NzgsIC4zODhdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIgPSB7XG5cdG1vZGU6IFwieHl6NTBcIixcblx0cGFyc2U6IFtcInh5ei1kNTBcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDUwXCIsXG5cdHRvTW9kZToge1xuXHRcdHJnYjogY29udmVydFh5ejUwVG9SZ2IsXG5cdFx0bGFiOiBjb252ZXJ0WHl6NTBUb0xhYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NTAsXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9YeXo1MFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk2NF0sXG5cdFx0eTogWzAsIC45OTldLFxuXHRcdHo6IFswLCAuODI1XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ejogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1h5ejUwLmpzXG52YXIgY29udmVydFh5ejY1VG9YeXo1MCA9ICh4eXo2NSkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NjU7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDEuMDQ3OTI5ODIwODQwNTQ4OCAqIHggKyAuMDIyOTQ2NzkzMzQxMDE5MSAqIHkgLSAuMDUwMTkyMjI5NTQzMTM1NiAqIHosXG5cdFx0eTogLjAyOTYyNzgxNTY4ODE1OTMgKiB4ICsgLjk5MDQzNDQ4NDU3MzI0OSAqIHkgLSAuMDE3MDczODI1MDI5Mzg1MSAqIHosXG5cdFx0ejogLS4wMDkyNDMwNTgxNTI1OTEyICogeCArIC4wMTUwNTUxNDQ4OTY1Nzc5ICogeSArIC43NTE4NzQyODk5NTgwMDA4ICogelxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NTBUb1h5ejY1LmpzXG52YXIgY29udmVydFh5ejUwVG9YeXo2NSA9ICh4eXo1MCkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NTA7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC45NTU0NzM0NTI3MDQyMTgyICogeCAtIC4wMjMwOTg1MzY4NzQyNjE0ICogeSArIC4wNjMyNTkzMDg2NjEwMjE3ICogeixcblx0XHR5OiAtLjAyODM2OTcwNjk2MzIwODEgKiB4ICsgMS4wMDk5OTU0NTgwMDU4MjI2ICogeSArIC4wMjEwNDEzOTg5NjY5NDMgKiB6LFxuXHRcdHo6IC4wMTIzMTQwMDE2ODgzMTk5ICogeCAtIC4wMjA1MDc2OTY0MzM0Nzc5ICogeSArIDEuMzMwMzY1OTM2NjA4MDc1MyAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMSA9IHtcblx0bW9kZTogXCJ4eXo2NVwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo2NVRvUmdiLFxuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NjVUb1h5ejUwXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9YeXo2NSxcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9YeXo2NVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk1XSxcblx0XHR5OiBbMCwgMV0sXG5cdFx0ejogWzAsIDEuMDg4XVxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wieHl6XCIsIFwieHl6LWQ2NVwiXSxcblx0c2VyaWFsaXplOiBcInh5ei1kNjVcIixcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRSZ2JUb1lpcS5qc1xudmFyIGNvbnZlcnRSZ2JUb1lpcSA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieWlxXCIsXG5cdFx0eTogLjI5ODg5NTMxICogciArIC41ODY2MjI0NyAqIGcgKyAuMTE0NDgyMjMgKiBiLFxuXHRcdGk6IC41OTU5Nzc5OSAqIHIgLSAuMjc0MTc2MSAqIGcgLSAuMzIxODAxODkgKiBiLFxuXHRcdHE6IC4yMTE0NzAxNyAqIHIgLSAuNTIyNjE3MTEgKiBnICsgLjMxMTE0Njk0ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvY29udmVydFlpcVRvUmdiLmpzXG52YXIgY29udmVydFlpcVRvUmdiID0gKHsgeSwgaSwgcSwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmIChxID09PSB2b2lkIDApIHEgPSAwO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiB5ICsgLjk1NjA4NDQ1ICogaSArIC42MjA4ODg1ICogcSxcblx0XHRnOiB5IC0gLjI3MTM3NjY0ICogaSAtIC42NDg2MDU5ICogcSxcblx0XHRiOiB5IC0gMS4xMDU2MTcyNCAqIGkgKyAxLjcwMjUwMTI2ICogcVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24gPSB7XG5cdG1vZGU6IFwieWlxXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRZaXFUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1lpcSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieVwiLFxuXHRcdFwiaVwiLFxuXHRcdFwicVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS15aXFcIl0sXG5cdHNlcmlhbGl6ZTogXCItLXlpcVwiLFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbLS41OTUsIC41OTVdLFxuXHRcdHE6IFstLjUyMiwgLjUyMl1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcm91bmQuanNcbnZhciByID0gKHZhbHVlLCBwcmVjaXNpb24pID0+IE1hdGgucm91bmQodmFsdWUgKiAocHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbikpKSAvIHByZWNpc2lvbjtcbnZhciByb3VuZCA9IChwcmVjaXNpb24gPSA0KSA9PiAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHIodmFsdWUsIHByZWNpc2lvbikgOiB2YWx1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZm9ybWF0dGVyLmpzXG52YXIgdHdvRGVjaW1hbHMgPSByb3VuZCgyKTtcbnZhciBjbGFtcCQxID0gKHZhbHVlKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG52YXIgZml4dXAgPSAodmFsdWUpID0+IE1hdGgucm91bmQoY2xhbXAkMSh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBQQVBFUl9MX1NQTElUID0gLjUyO1xudmFyIFBBUEVSX0NIUk9NQV9DQVAgPSAuMDI1O1xudmFyIEZBTExCQUNLX1BBUEVSID0ge1xuXHR1bmRlcmx5aW5nOiBcIiMxNjE2MWFcIixcblx0Y29udHJhc3Q6IFwiI2Y3ZjdmOFwiXG59O1xudmFyIGxhc3RMaXZlUGFwZXIgPSBudWxsO1xudmFyIFVTQUJMRV9MVU1BX01JTiA9IC4wMztcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIGNsYW1wID0gKG4sIGxvLCBoaSkgPT4gTWF0aC5taW4oaGksIE1hdGgubWF4KGxvLCBuKSk7XG52YXIgaGV4T2tsY2ggPSAobCwgYywgaCwgZmFsbGJhY2spID0+IGZvcm1hdEhleCh7XG5cdG1vZGU6IFwib2tsY2hcIixcblx0bCxcblx0Yyxcblx0aFxufSkgfHwgZmFsbGJhY2s7XG52YXIgcmdiVG9TYW1wbGUgPSAocmdiKSA9PiB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IHJnYjtcblx0aWYgKCFbXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0XS5ldmVyeSgobikgPT4gTnVtYmVyLmlzRmluaXRlKG4pKSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGhleCA9IGZvcm1hdEhleCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0aWYgKCFoZXgpIHJldHVybiBudWxsO1xuXHRjb25zdCBvayA9IG9rbGNoKHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJnYixcblx0XHRoZXgsXG5cdFx0bDogb2s/LmwgPz8gLjUsXG5cdFx0Yzogb2s/LmMgPz8gMCxcblx0XHRoOiBvaz8uaCA/PyAwXG5cdH07XG59O1xudmFyIHBhcGVyTEZyb21IZXggPSAoaGV4KSA9PiBva2xjaChoZXgpPy5sID8/IC40O1xudmFyIGhhbG9Gb3JQYXBlciA9IChkYXJrUGFwZXIpID0+IGRhcmtQYXBlciA/IHtcblx0c2hhZG93OiBcInJnYigwIDAgMCAvIDAuODgpXCIsXG5cdGdsb3c6IFwicmdiKDAgMCAwIC8gMC40NSlcIlxufSA6IHtcblx0c2hhZG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuNzIpXCIsXG5cdGdsb3c6IFwicmdiKDI1NSAyNTUgMjU1IC8gMC4zNSlcIlxufTtcbnZhciBpc1VzYWJsZVBhcGVyTHVtYSA9IChsdW1hKSA9PiBOdW1iZXIuaXNGaW5pdGUobHVtYSkgJiYgbHVtYSA+PSBVU0FCTEVfTFVNQV9NSU4gJiYgbHVtYSA8PSAxO1xudmFyIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMgPSAoc2FtcGxlcywgcGl4ZWxMdW1hKSA9PiB7XG5cdGlmICghc2FtcGxlcy5sZW5ndGggJiYgcGl4ZWxMdW1hID09IG51bGwpIHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdGNvbnN0IGxzID0gc2FtcGxlcy5tYXAoKHMpID0+IHMubCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXHRjb25zdCBtZWFuTCA9IHNhbXBsZXMubGVuZ3RoID8gc2FtcGxlcy5yZWR1Y2UoKHN1bSwgcykgPT4gc3VtICsgcy5sLCAwKSAvIHNhbXBsZXMubGVuZ3RoIDogcGl4ZWxMdW1hO1xuXHRjb25zdCBtZWRpYW5MID0gbHMubGVuZ3RoID8gbHNbTWF0aC5mbG9vcihscy5sZW5ndGggLyAyKV0gOiBtZWFuTDtcblx0Y29uc3QgcGFwZXJMID0gY2xhbXAocGl4ZWxMdW1hICE9IG51bGwgJiYgaXNVc2FibGVQYXBlckx1bWEocGl4ZWxMdW1hKSA/IHBpeGVsTHVtYSA6IE1hdGgubWF4KG1lYW5MLCBtZWRpYW5MKSwgLjA4LCAuOTQpO1xuXHRjb25zdCBwYXBlciA9IHNhbXBsZXMubGVuZ3RoID8gWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGEuYyAtIGIuYyB8fCBNYXRoLmFicyhhLmwgLSBwYXBlckwpIC0gTWF0aC5hYnMoYi5sIC0gcGFwZXJMKSlbMF0gOiBudWxsO1xuXHRjb25zdCBwYXBlckMgPSBwYXBlciA/IE1hdGgubWluKFBBUEVSX0NIUk9NQV9DQVAsIE1hdGgubWF4KDAsIHBhcGVyLmMgKiAuMikpIDogMDtcblx0Y29uc3QgaCA9IHBhcGVyPy5oIHx8IDA7XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTCA8IFBBUEVSX0xfU1BMSVQ7XG5cdHJldHVybiB7XG5cdFx0dW5kZXJseWluZzogaGV4T2tsY2gocGFwZXJMLCBwYXBlckMsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLnVuZGVybHlpbmcgOiBcIiNlOGU2ZTJcIiksXG5cdFx0Y29udHJhc3Q6IGhleE9rbGNoKGRhcmtQYXBlciA/IC45MyA6IC4xNiwgLjAwOCwgaCwgZGFya1BhcGVyID8gRkFMTEJBQ0tfUEFQRVIuY29udHJhc3QgOiBcIiMxNDE0MTZcIilcblx0fTtcbn07XG52YXIgc2FtcGxlSW1hZ2VNZWFuTHVtYSA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiA/IGltZ1VSTCA6IGF3YWl0IChhd2FpdCBmZXRjaChpbWdVUkwpKS5ibG9iKCk7XG5cdFx0aWYgKCFibG9iIHx8IGJsb2Iuc2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHRjb25zdCB3ID0gNDg7XG5cdFx0Y29uc3QgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoYml0bWFwLmhlaWdodCAvIE1hdGgubWF4KDEsIGJpdG1hcC53aWR0aCkgKiB3KSk7XG5cdFx0Y29uc3QgY2FudmFzID0gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBPZmZzY3JlZW5DYW52YXModywgaCkgOiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHtcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoXG5cdFx0fSk7XG5cdFx0aWYgKCEoY2FudmFzIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSkge1xuXHRcdFx0Y2FudmFzLndpZHRoID0gdztcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBoO1xuXHRcdH1cblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGlmICghY3R4KSB7XG5cdFx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCB3LCBoKTtcblx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGE7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0bGV0IG4gPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTYpIHtcblx0XHRcdGlmICgoZGF0YVtpICsgM10gPz8gMjU1KSA8IDE2KSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHIgPSBkYXRhW2ldIC8gMjU1O1xuXHRcdFx0Y29uc3QgZyA9IGRhdGFbaSArIDFdIC8gMjU1O1xuXHRcdFx0Y29uc3QgYiA9IGRhdGFbaSArIDJdIC8gMjU1O1xuXHRcdFx0c3VtICs9IC4yMTI2ICogciArIC43MTUyICogZyArIC4wNzIyICogYjtcblx0XHRcdG4rKztcblx0XHR9XG5cdFx0aWYgKG4gPCA4KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBsdW1hID0gc3VtIC8gbjtcblx0XHRyZXR1cm4gaXNVc2FibGVQYXBlckx1bWEobHVtYSkgPyBsdW1hIDogbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSA9IChsdW1hKSA9PiB7XG5cdHJldHVybiBsdW1hIDw9IFBBUEVSX0xfU1BMSVQgPyB7IC4uLkZBTExCQUNLX1BBUEVSIH0gOiB7XG5cdFx0dW5kZXJseWluZzogXCIjZThlNmUyXCIsXG5cdFx0Y29udHJhc3Q6IFwiIzE0MTQxNlwiXG5cdH07XG59O1xudmFyIGhhc1dhbGxwYXBlclBhcGVyID0gKHNlZWRzKSA9PiBCb29sZWFuKHNlZWRzLnVuZGVybHlpbmcgJiYgc2VlZHMuY29udHJhc3QpO1xudmFyIHJhbmtXYWxscGFwZXJTZWVkcyA9IChjZW50cm9pZHMsIHBpeGVsTHVtYSkgPT4ge1xuXHRjb25zdCBzYW1wbGVzID0gY2VudHJvaWRzLm1hcChyZ2JUb1NhbXBsZSkuZmlsdGVyKEJvb2xlYW4pO1xuXHRpZiAoIXNhbXBsZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYWNjZW50UG9vbCA9IHNhbXBsZXMuZmlsdGVyKChzKSA9PiBzLmwgPj0gLjE4ICYmIHMubCA8PSAuODggJiYgcy5jID49IC4wMikuc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jIHx8IE1hdGguYWJzKGIubCAtIC41NSkgLSBNYXRoLmFicyhhLmwgLSAuNTUpKTtcblx0Y29uc3QgcG9vbCA9IGFjY2VudFBvb2wubGVuZ3RoID8gYWNjZW50UG9vbCA6IFsuLi5zYW1wbGVzXS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMpO1xuXHRjb25zdCBwcmltYXJ5ID0gcG9vbFswXTtcblx0aWYgKCFwcmltYXJ5KSByZXR1cm4gbnVsbDtcblx0Y29uc3QgaHVlRGlzdCA9IChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgZCA9IE1hdGguYWJzKGEgLSBiKSAlIDM2MDtcblx0XHRyZXR1cm4gZCA+IDE4MCA/IDM2MCAtIGQgOiBkO1xuXHR9O1xuXHRjb25zdCBwaWNrTmV4dCA9ICh1c2VkKSA9PiB7XG5cdFx0Y29uc3QgcmVzdCA9IHBvb2wuZmlsdGVyKChzKSA9PiAhdXNlZC5pbmNsdWRlcyhzKSk7XG5cdFx0aWYgKCFyZXN0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgYmFzZSA9IHVzZWRbdXNlZC5sZW5ndGggLSAxXSA/PyBwcmltYXJ5O1xuXHRcdFx0Y29uc3QgbnVkZ2VkID0gZm9ybWF0SGV4KHtcblx0XHRcdFx0bW9kZTogXCJva2xjaFwiLFxuXHRcdFx0XHRsOiBNYXRoLm1pbiguODUsIE1hdGgubWF4KC4yLCBiYXNlLmwgKyAodXNlZC5sZW5ndGggPT09IDEgPyAtLjEyIDogLjEpKSksXG5cdFx0XHRcdGM6IE1hdGgubWF4KC4wNCwgYmFzZS5jICogLjg1KSxcblx0XHRcdFx0aDogYmFzZS5oXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmJhc2UsXG5cdFx0XHRcdGhleDogbnVkZ2VkIHx8IGJhc2UuaGV4LFxuXHRcdFx0XHRsOiBiYXNlLmxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBbLi4ucmVzdF0uc29ydCgoYSwgYikgPT4gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYi5oLCB1LmgpKSkgLSBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChhLmgsIHUuaCkpKSB8fCBiLmMgLSBhLmMpWzBdID8/IHJlc3RbMF07XG5cdH07XG5cdGNvbnN0IHNlY29uZGFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5XSk7XG5cdGNvbnN0IHRlcnRpYXJ5ID0gcGlja05leHQoW3ByaW1hcnksIHNlY29uZGFyeV0pO1xuXHRjb25zdCBwYXBlciA9IGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMoc2FtcGxlcywgcGl4ZWxMdW1hKTtcblx0cmV0dXJuIHtcblx0XHRwcmltYXJ5OiBwcmltYXJ5LmhleCxcblx0XHRzZWNvbmRhcnk6IHNlY29uZGFyeS5oZXgsXG5cdFx0dGVydGlhcnk6IHRlcnRpYXJ5LmhleCxcblx0XHQuLi5wYXBlclxuXHR9O1xufTtcbnZhciB0aGVtZUhvc3RzID0gKCkgPT4ge1xuXHRjb25zdCBub2RlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdG5vZGVzLmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVudi1zaGVsbC1yb290LCAud2YtZGVtby1yb290LCB1aS13aW5kb3dcIikuZm9yRWFjaCgoZWwpID0+IG5vZGVzLmFkZChlbCkpO1xuXHRyZXR1cm4gWy4uLm5vZGVzXTtcbn07XG52YXIgd2FsbHBhcGVyU2VlZHNNYXlQYWludCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHNyYyA9IFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jb2xvclNvdXJjZSB8fCBcIlwiKTtcblx0aWYgKCFzcmMpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gc3JjID09PSBcIndhbGxwYXBlclwiIHx8IHNyYyA9PT0gXCJzcGVlZC1kaWFsXCIgfHwgc3JjID09PSBcInN5c3RlbS13YWxscGFwZXJcIjtcbn07XG52YXIgaXNWYWxpZENvbG9yID0gKGNvbG9yKSA9PiBCb29sZWFuKHBhcnNlKGNvbG9yKSk7XG52YXIgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyA9IChwYXBlciwgZXh0cmFIb3N0cyA9IFtdKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgZGFya1BhcGVyID0gcGFwZXJMRnJvbUhleChwYXBlci51bmRlcmx5aW5nKSA8IFBBUEVSX0xfU1BMSVQ7XG5cdGNvbnN0IHsgc2hhZG93LCBnbG93IH0gPSBoYWxvRm9yUGFwZXIoZGFya1BhcGVyKTtcblx0Y29uc3QgaG9zdHMgPSBuZXcgU2V0KHRoZW1lSG9zdHMoKSk7XG5cdGZvciAoY29uc3QgZWwgb2YgZXh0cmFIb3N0cykgaG9zdHMuYWRkKGVsKTtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIudW5kZXJseWluZykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIuY29udHJhc3QpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKHNoYWRvdykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IoZ2xvdykpIHJldHVybjtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHR9XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0Z2xvYmFsUXVlcnkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci1jb250cmFzdC1jb2xvclwiLCBwYXBlci5jb250cmFzdCk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1lbnYtbGF1bmNoZXItZmdcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLWdsb3dcIiwgZ2xvdyk7XG59O1xudmFyIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSA9IChuYW1lLCBpbml0aWFsVmFsdWUgPSBcIiM1YTllYzhcIikgPT4ge1xuXHR0cnkge1xuXHRcdENTUz8ucmVnaXN0ZXJQcm9wZXJ0eT8uKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRzeW50YXg6IFwiPGNvbG9yPlwiLFxuXHRcdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0XHRpbml0aWFsVmFsdWVcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHt9XG59O1xudmFyIHBlcnNpc3RMaXZlUGFwZXIgPSAocGFwZXIpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRpZiAoIWNhY2hlZCkgcmV0dXJuO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHR1bmRlcmx5aW5nOiBwYXBlci51bmRlcmx5aW5nLFxuXHRcdFx0Y29udHJhc3Q6IHBhcGVyLmNvbnRyYXN0XG5cdFx0fSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSA9IChsdW1hLCBleHRyYUhvc3RzID0gW10pID0+IHtcblx0aWYgKCFpc1VzYWJsZVBhcGVyTHVtYShsdW1hKSkge1xuXHRcdGlmIChsYXN0TGl2ZVBhcGVyKSB7XG5cdFx0XHRhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKGxhc3RMaXZlUGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRcdFx0cmV0dXJuIGxhc3RMaXZlUGFwZXI7XG5cdFx0fVxuXHRcdHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdH1cblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hKGx1bWEpO1xuXHRsYXN0TGl2ZVBhcGVyID0gcGFwZXI7XG5cdGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMocGFwZXIsIGV4dHJhSG9zdHMpO1xuXHRwZXJzaXN0TGl2ZVBhcGVyKHBhcGVyKTtcblx0cmV0dXJuIHBhcGVyO1xufTtcbnZhciBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMgPSAoc2VlZHMpID0+IHtcblx0Y29uc3QgbmV4dCA9IGxhc3RMaXZlUGFwZXIgPyB7XG5cdFx0Li4uc2VlZHMsXG5cdFx0Li4ubGFzdExpdmVQYXBlclxuXHR9IDogc2VlZHM7XG5cdHRyeSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KG5leHQpKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUklNQVJZX1NUT1JBR0VfS0VZLCBuZXh0LnByaW1hcnkpO1xuXHR9IGNhdGNoIHt9XG5cdGlmIChoYXNXYWxscGFwZXJQYXBlcihuZXh0KSkgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyhuZXh0KTtcblx0aWYgKCF3YWxscGFwZXJTZWVkc01heVBhaW50KCkpIHJldHVybjtcblx0Zm9yIChjb25zdCBob3N0IG9mIHRoZW1lSG9zdHMoKSkgZm9yIChjb25zdCBbcHJvcCwga2V5XSBvZiBTRUVEX1BST1BTKSBzZXRTdHlsZVByb3BlcnR5KGhvc3QsIHByb3AsIG5leHRba2V5XSk7XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQucHJpbWFyeSkpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IobmV4dC5zZWNvbmRhcnkpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQudGVydGlhcnkpKSByZXR1cm47XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5LCBodG1sLCAud2YtZGVtby1yb290LCB1aS13aW5kb3csIC52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShlbCwgXCItLWNvbG9yLXByaW1hcnlcIiwgbmV4dC5wcmltYXJ5KTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGVsLCBcIi0tYmFzZS1jb2xvclwiLCBuZXh0LnByaW1hcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci10ZXJ0aWFyeVwiLCBuZXh0LnRlcnRpYXJ5KTtcblx0fSk7XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1wcmltYXJ5XCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXNlLWNvbG9yXCIsIG5leHQucHJpbWFyeSk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItdGVydGlhcnlcIiwgbmV4dC50ZXJ0aWFyeSk7XG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidTItdGhlbWUtY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0c291cmNlOiBcIndhbGxwYXBlclwiLFxuXHRcdHNlZWRzOiBuZXh0XG5cdH0gfSkpO1xufTtcbnZhciBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVkpO1xuXHRcdGlmICghcmF3KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0aWYgKCFwYXJzZWQ/LnByaW1hcnkgfHwgIXBhcnNlZD8uc2Vjb25kYXJ5IHx8ICFwYXJzZWQ/LnRlcnRpYXJ5KSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciA9IGFzeW5jIChpbWdVUkwsIG9wdHMpID0+IHtcblx0Y29uc3Qgc3JjS2V5ID0gdHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIiA/IGltZ1VSTC5zbGljZSgwLCAyMDQ4KSA6IGBibG9iOiR7aW1nVVJMLm5hbWUgfHwgXCJ3YWxscGFwZXJcIn06JHtpbWdVUkwuc2l6ZX1gO1xuXHRpZiAodHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGlmICghaW1nVVJMKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmZhaWxlZFdhbGxwYXBlclNyY1wiKV0/LmhhcyhpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoaW1nVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAhL15kYXRhOmltYWdlXFwvL2kudGVzdChpbWdVUkwpKSByZXR1cm4gbnVsbDtcblx0XHRpZiAoL3ZpZGVvXFwvbXAydC9pLnRlc3QoaW1nVVJMKSkgcmV0dXJuIG51bGw7XG5cdFx0aWYgKC9cXC9hc3NldHNcXC93YWxscGFwZXJcXC5qcGcoPzokfFs/I10pL2kudGVzdChpbWdVUkwpKSB0cnkge1xuXHRcdFx0Y29uc3Qgc2t1ID0gU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcFNrdSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgaG9zdCA9IFN0cmluZyhnbG9iYWxUaGlzLmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHNrdSA9PT0gXCJwcm9jZXNzXCIgfHwgaG9zdCA9PT0gXCJwcm9jZXNzLnUycmUuc3BhY2VcIiB8fCBob3N0ID09PSBcIndvcmtjZW50ZXIudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwiYWkudTJyZS5zcGFjZVwiKSByZXR1cm4gbnVsbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpbWdVUkwgaW5zdGFuY2VvZiBCbG9iICYmIGltZ1VSTC50eXBlICYmICFpbWdVUkwudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpICYmIGltZ1VSTC50eXBlICE9PSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgbGl2ZUx1bWEgPSBhd2FpdCBzYW1wbGVJbWFnZU1lYW5MdW1hKGltZ1VSTCk7XG5cdGlmIChsaXZlTHVtYSAhPSBudWxsKSBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEobGl2ZUx1bWEpO1xuXHRpZiAoIW9wdHM/LmZvcmNlKSB0cnkge1xuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXQUxMUEFQRVJfVVJMX0tFWSkgPT09IHNyY0tleSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdFx0XHR9IDogY2FjaGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdGNvbnN0IGNlbnRyb2lkcyA9IGF3YWl0IGdldERvbWluYW50Q29sb3JzKGltZ1VSTCk7XG5cdFx0Y29uc3Qgc2VlZHMgPSByYW5rV2FsbHBhcGVyU2VlZHMoY2VudHJvaWRzLCBsaXZlTHVtYSA/PyB2b2lkIDApO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdC4uLnNlZWRzLFxuXHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdH0gOiBzZWVkcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIGZhaWxlZFwiLCBlcnIpO1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRpZiAoY2FjaGVkKSBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9jYW52YXMvQ2FudmFzLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFVTRVJfV0FMTFBBUEVSX1BBVEggPSBcIi9hc3NldHMvdXNlci13YWxscGFwZXJcIjtcbnZhciBVU0VSX1dBTExQQVBFUl9DQUNIRSA9IFwiY3dzcC11c2VyLXdhbGxwYXBlclwiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciB3YWxscGFwZXJFcG9jaCA9IDA7XG52YXIgY3VycmVudE9yaWVudE51bWJlciA9ICgpID0+IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG52YXIgaXNJZGJQb2ludGVyID0gKHBvaW50ZXIpID0+IHBvaW50ZXIgPT09IFwiaWRiOnJzLXdhbGxwYXBlclwiIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImlkYjpcIik7XG52YXIgaXNVbnVzYWJsZVN0b3JlZFVybCA9IChwb2ludGVyKSA9PiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiAocG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgfHwgIS9eZGF0YTppbWFnZVxcLy9pLnRlc3QocG9pbnRlcikpO1xudmFyIHJldm9rZUxpdmVPYmplY3RVcmwgPSAoKSA9PiB7XG5cdHdhbGxwYXBlckVwb2NoICs9IDE7XG5cdGlmIChsaXZlT2JqZWN0VXJsICYmIGxpdmVPYmplY3RVcmwuc3RhcnRzV2l0aChcImJsb2I6XCIpKSB0cnkge1xuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwobGl2ZU9iamVjdFVybCk7XG5cdH0gY2F0Y2gge31cblx0bGl2ZU9iamVjdFVybCA9IG51bGw7XG59O1xudmFyIGFkb3B0V2FsbHBhcGVyQmxvYiA9IChibG9iLCBlcG9jaCkgPT4ge1xuXHRpZiAoZXBvY2ggIT09IHdhbGxwYXBlckVwb2NoKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0aWYgKGxpdmVPYmplY3RVcmwpIHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIG9wZW5XYWxscGFwZXJEYiA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0aWYgKHR5cGVvZiBpbmRleGVkREIgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRyZWplY3QoLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcImluZGV4ZWREQiB1bmF2YWlsYWJsZVwiKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKElEQl9OQU1FLCAxKTtcblx0cmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcblx0XHRjb25zdCBkYiA9IHJlcS5yZXN1bHQ7XG5cdFx0aWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKElEQl9TVE9SRSkpIGRiLmNyZWF0ZU9iamVjdFN0b3JlKElEQl9TVE9SRSk7XG5cdH07XG5cdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xuXHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBvcGVuIGZhaWxlZFwiKSk7XG59KTtcbnZhciBpZGJQdXRXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRjb25zdCBkYiA9IGF3YWl0IG9wZW5XYWxscGFwZXJEYigpO1xuXHR0cnkge1xuXHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWR3cml0ZVwiKTtcblx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkucHV0KGJsb2IsIElEQl9LRVkpO1xuXHRcdFx0dHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcblx0XHRcdHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBwdXQgZmFpbGVkXCIpKTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRkYi5jbG9zZSgpO1xuXHR9XG59O1xudmFyIGlkYkdldFdhbGxwYXBlciA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVxID0gZGIudHJhbnNhY3Rpb24oSURCX1NUT1JFLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZ2V0KElEQl9LRVkpO1xuXHRcdFx0cmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdiA9IHJlcS5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodiBpbnN0YW5jZW9mIEJsb2IgPyB2IDogbnVsbCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZ2V0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBjYWNoZVVzZXJXYWxscGFwZXIgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkgcmV0dXJuO1xuXHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKFVTRVJfV0FMTFBBUEVSX0NBQ0hFKTtcblx0Y29uc3QgdHlwZSA9IGJsb2IudHlwZSAmJiBibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSA/IGJsb2IudHlwZSA6IFwiaW1hZ2UvanBlZ1wiO1xuXHRhd2FpdCBjYWNoZS5wdXQobmV3IFJlcXVlc3QoVVNFUl9XQUxMUEFQRVJfUEFUSCksIG5ldyBSZXNwb25zZShibG9iLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogdHlwZSB9IH0pKTtcbn07XG52YXIgY2xlYXJDYWNoZWRVc2VyV2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAodHlwZW9mIGNhY2hlcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGF3YWl0IChhd2FpdCBjYWNoZXMub3BlbihVU0VSX1dBTExQQVBFUl9DQUNIRSkpLmRlbGV0ZShuZXcgUmVxdWVzdChVU0VSX1dBTExQQVBFUl9QQVRIKSk7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlckJsb2JVcmwgPSBhc3luYyAoKSA9PiB7XG5cdGlmIChsaXZlT2JqZWN0VXJsKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0Y29uc3QgZXBvY2ggPSB3YWxscGFwZXJFcG9jaDtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCk7XG5cdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIGVwb2NoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBpc0lubGluZVBheWxvYWQgPSAodXJsKSA9PiB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHVybC5zdGFydHNXaXRoKFwiYmxvYjpcIik7XG52YXIgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRpZiAoaXNJZGJQb2ludGVyKHBvaW50ZXIpIHx8IGlzVW51c2FibGVTdG9yZWRVcmwocG9pbnRlcikpIHtcblx0XHRjb25zdCB1cmwgPSBhd2FpdCByZXN0b3JlV2FsbHBhcGVyQmxvYlVybCgpO1xuXHRcdGlmICh1cmwpIHtcblx0XHRcdGlmICghaXNJZGJQb2ludGVyKHBvaW50ZXIpKSB3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0XHRcdHJldHVybiB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlcigpID8gXCJcIiA6IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRpZiAocHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIoKSAmJiAoIXBvaW50ZXIgfHwgcG9pbnRlciA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSkgcmV0dXJuIFwiXCI7XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgd2FybVByb21pc2UgPSBudWxsO1xudmFyIHdhcm1BcHBXYWxscGFwZXIgPSAoKSA9PiB7XG5cdGlmICh3YXJtUHJvbWlzZSkgcmV0dXJuIHdhcm1Qcm9taXNlO1xuXHR3YXJtUHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRcdGlmIChpc0lkYlBvaW50ZXIocG9pbnRlcikgfHwgaXNVbnVzYWJsZVN0b3JlZFVybChwb2ludGVyKSkge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHRcdFx0Y29uc3QgdXJsID0gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIHdhbGxwYXBlckVwb2NoKTtcblx0XHRcdHJldHVybiB1cmwgPyB7XG5cdFx0XHRcdHVybCxcblx0XHRcdFx0YmxvYlxuXHRcdFx0fSA6IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVybCA9IHBvaW50ZXIgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRcdGlmICghdXJsIHx8IHVybCA9PT0gREVGQVVMVF9XQUxMUEFQRVJfVVJMKSB0cnkge1xuXHRcdFx0aWYgKFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/LmRhdGFzZXQ/LmN3c3BTa3UgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJwcm9jZXNzXCIpIHJldHVybiBudWxsO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghdXJsKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCByc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KTtcblx0XHRpZiAoIXJzcC5vaykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0aWYgKCFibG9iLnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVybCxcblx0XHRcdGJsb2Jcblx0XHR9O1xuXHR9KSgpLmNhdGNoKCgpID0+IG51bGwpO1xuXHRyZXR1cm4gd2FybVByb21pc2U7XG59O1xudmFyIHdhcm1lZEJsb2JGb3IgPSBhc3luYyAoc3JjKSA9PiB7XG5cdGlmICghd2FybVByb21pc2UgfHwgIXNyYykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHdhcm0gPSBhd2FpdCB3YXJtUHJvbWlzZTtcblx0aWYgKCF3YXJtKSByZXR1cm4gbnVsbDtcblx0aWYgKHdhcm0udXJsID09PSBzcmMgfHwgd2FybS51cmwgPT09IHNyYy5zcGxpdChcIiNcIilbMF0pIHJldHVybiB3YXJtLmJsb2I7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciA9ICgpID0+IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xudmFyIHN5bmNDYW52YXNPcmllbnQgPSAoY2FudmFzKSA9PiB7XG5cdGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG4gPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyhuKTtcblx0XHRpZiAoY2FudmFzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgIT09IHMpIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLm9yaWVudCA9IG47XG5cdH07XG5cdGFwcGx5KCk7XG5cdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcyhhcHBseSk7XG59O1xudmFyIHN5bmNBcHBXYWxscGFwZXJPcmllbnQgPSAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKS5mb3JFYWNoKChjYW52YXMpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdH0pO1xufTtcbnZhciByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQgPSAoKSA9PiB7XG5cdHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKS50aGVuKCh1cmwpID0+IHtcblx0XHRzeW5jQXBwV2FsbHBhcGVyT3JpZW50KCk7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdH0pO1xufTtcbnZhciBzeW5jR2xvd1RvVGhlbWUgPSAoZ2xvdykgPT4ge1xuXHRnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY29sb3ItcHJpbWFyeVwiKS50cmltKCk7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbn07XG52YXIgcGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzID0gKHBhaW50VXJsKSA9PiB7XG5cdGNvbnN0IGNhbnZhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCIpO1xuXHRjb25zdCBvcmllbnQgPSBTdHJpbmcoY3VycmVudE9yaWVudE51bWJlcigpKTtcblx0Y2FudmFzZXMuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHBhaW50VXJsKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgb3JpZW50KTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgb3JpZW50KTtcblx0fSk7XG59O1xudmFyIGRhdGFVcmxUb0Jsb2IgPSBhc3luYyAoZGF0YVVybCkgPT4ge1xuXHRyZXR1cm4gKGF3YWl0IGZldGNoKGRhdGFVcmwpKS5ibG9iKCk7XG59O1xudmFyIHNldEFwcFdhbGxwYXBlckZyb21CbG9iID0gYXN5bmMgKGJsb2IpID0+IHtcblx0aWYgKCEoYmxvYiBpbnN0YW5jZW9mIEJsb2IpIHx8IGJsb2Iuc2l6ZSA8PSAwKSB7XG5cdFx0c2V0QXBwV2FsbHBhcGVyKERFRkFVTFRfV0FMTFBBUEVSX1VSTCk7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMobGl2ZU9iamVjdFVybCk7XG5cdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKGJsb2IsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaWRiUHV0V2FsbHBhcGVyKGJsb2IpO1xuXHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHRcdGNhY2hlVXNlcldhbGxwYXBlcihibG9iKS5jYXRjaCgoKSA9PiB2b2lkIDApO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIElEQiBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0Y29uc3QgZGF0YVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQgfHwgXCJcIikpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChyZWFkZXIuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcInJlYWQgZmFpbGVkXCIpKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChkYXRhVXJsICYmICF3cml0ZVN0b3JhZ2VQb2ludGVyKGRhdGFVcmwpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIGxvY2FsU3RvcmFnZSBwZXJzaXN0IGFsc28gZmFpbGVkIChxdW90YT8pXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHR0cnkge1xuXHRcdGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcImN3c3Atd2FsbHBhcGVyLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdFx0cG9pbnRlcjogV0FMTFBBUEVSX0lEQl9NQVJLRVIsXG5cdFx0XHR1cmw6IGxpdmVPYmplY3RVcmxcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcbn07XG52YXIgaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyID0gKGNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCByb290ID0gY29udGFpbmVyO1xuXHRyb290LnJlcGxhY2VDaGlsZHJlbigpO1xuXHRyb290LmRhdGFzZXQuYXBwTGF5ZXIgPSBcImNhbnZhc1wiO1xuXHRyb290LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRyb290LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRyb290LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGdsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRnbG93LmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fZ2xvd1wiO1xuXHRnbG93LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRnbG93LnN0eWxlLmluc2V0ID0gXCItMjAlXCI7XG5cdGdsb3cuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwgeyBpczogXCJ1aS1jYW52YXNcIiB9KTtcblx0Y2FudmFzLmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19faW1hZ2UgdWktY2FudmFzXCI7XG5cdGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Y2FudmFzLnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdGNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdGNhbnZhcy5zdHlsZS5pbmxpbmVTaXplID0gXCJtaW4oMTAwY3FpLCAxMDBkdmkpXCI7XG5cdGNhbnZhcy5zdHlsZS5ibG9ja1NpemUgPSBcIm1pbigxMDBjcWIsIDEwMGR2YilcIjtcblx0Y2FudmFzLnN0eWxlLm1heElubGluZVNpemUgPSBcIm1pbigxMDBjcWksIDEwMGR2aSlcIjtcblx0Y2FudmFzLnN0eWxlLm1heEJsb2NrU2l6ZSA9IFwibWluKDEwMGNxYiwgMTAwZHZiKVwiO1xuXHRjYW52YXMuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXHRjYW52YXMuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJub3JtYWxcIjtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImlzXCIsIFwidWktY2FudmFzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkeW5hbWljLXJhbmdlLWxpbWl0XCIsIFwibm8tbGltaXRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIsIFwiaW1wb3J0YW50XCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMVwiLCBcImltcG9ydGFudFwiKTtcblx0Y29uc3QgcG9zdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cG9zdGVyLmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fcG9zdGVyXCI7XG5cdHBvc3Rlci5hbHQgPSBcIlwiO1xuXHRwb3N0ZXIuZGVjb2RpbmcgPSBcImFzeW5jXCI7XG5cdHBvc3Rlci5zZXRBdHRyaWJ1dGUoXCJmZXRjaHByaW9yaXR5XCIsIFwiaGlnaFwiKTtcblx0cG9zdGVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuXHRwb3N0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdHBvc3Rlci5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRwb3N0ZXIuc3R5bGUuaW5saW5lU2l6ZSA9IFwibWluKDEwMGNxaSwgMTAwZHZpKVwiO1xuXHRwb3N0ZXIuc3R5bGUuYmxvY2tTaXplID0gXCJtaW4oMTAwY3FiLCAxMDBkdmIpXCI7XG5cdHBvc3Rlci5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cdHBvc3Rlci5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdHBvc3Rlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdHJvb3QuYXBwZW5kKHBvc3RlciwgZ2xvdywgY2FudmFzKTtcblx0cG9zdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY3dzcC13YWxscGFwZXItcG9zdGVyXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fSwgeyBvbmNlOiB0cnVlIH0pO1xuXHRwb3N0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHtcblx0XHRpZiAocG9zdGVyLnNyYy5pbmNsdWRlcyhcIi9hc3NldHMvdXNlci13YWxscGFwZXJcIikpIHBvc3Rlci5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cdH0pO1xuXHRyZW1lbWJlck1pc3NpbmdEZWZhdWx0V2FsbHBhcGVyKCk7XG5cdGNvbnN0IHBvaW50ZXIgPSByZWFkU3RvcmFnZVBvaW50ZXIoKTtcblx0Y29uc3QgY29sZFVybCA9IGlzSWRiUG9pbnRlcihwb2ludGVyKSA/IFVTRVJfV0FMTFBBUEVSX1BBVEggOiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IFwiXCIgOiBwb2ludGVyO1xuXHRjb25zdCB3YXJtaW5nID0gd2FybUFwcFdhbGxwYXBlcigpO1xuXHRpZiAoY29sZFVybCAmJiAhZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyhjb2xkVXJsKSkge1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBjb2xkVXJsKTtcblx0XHRwb3N0ZXIuc3JjID0gY29sZFVybDtcblx0fVxuXHR3YXJtaW5nLnRoZW4oKHdhcm0pID0+IHtcblx0XHRpZiAoIXdhcm0gfHwgIXBvc3Rlci5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuXHRcdGlmICh3YXJtLnVybC5zdGFydHNXaXRoKFwiYmxvYjpcIikpIHtcblx0XHRcdHBvc3Rlci5zcmMgPSB3YXJtLnVybDtcblx0XHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCB3YXJtLnVybCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghcG9zdGVyLmdldEF0dHJpYnV0ZShcInNyY1wiKSkgcG9zdGVyLnNyYyA9IHdhcm0udXJsO1xuXHR9KTtcblx0Y29uc3QgZGlzcG9zZU9yaWVudCA9IHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0cmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUoKTtcblx0c3luY0dsb3dUb1RoZW1lKGdsb3cpO1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHdhbGxwYXBlciA9IGF3YWl0IHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKTtcblx0XHRpZiAoIXdhbGxwYXBlciB8fCBmYWlsZWRXYWxscGFwZXJTcmMuaGFzKHdhbGxwYXBlcikpIHtcblx0XHRcdHN5bmNHbG93VG9UaGVtZShnbG93KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHdhbGxwYXBlcik7XG5cdFx0aWYgKHBvc3Rlci5pc0Nvbm5lY3RlZCkgcG9zdGVyLnNyYyA9IHdhbGxwYXBlcjtcblx0XHRzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdFx0Y29uc3QgdGhlbWVTcmMgPSB3YWxscGFwZXIuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCkgfHwgd2FsbHBhcGVyIDogd2FsbHBhcGVyO1xuXHRcdGNvbnN0IGV4dHJhY3QgPSAoKSA9PiB7XG5cdFx0XHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih0aGVtZVNyYykudGhlbigoKSA9PiBzeW5jR2xvd1RvVGhlbWUoZ2xvdykpO1xuXHRcdH07XG5cdFx0Y29uc3QgcmljID0gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXHRcdGlmICh0eXBlb2YgcmljID09PSBcImZ1bmN0aW9uXCIpIHJpYyhleHRyYWN0LCB7IHRpbWVvdXQ6IDEyMDAgfSk7XG5cdFx0ZWxzZSBnbG9iYWxUaGlzLnNldFRpbWVvdXQ/LihleHRyYWN0LCAzMjApO1xuXHR9KSgpO1xuXHRyZXR1cm4ge1xuXHRcdHJvb3QsXG5cdFx0Y2FudmFzLFxuXHRcdGdsb3csXG5cdFx0ZGlzcG9zZU9yaWVudFxuXHR9O1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXIgPSAod2FsbHBhcGVyVXJsKSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gU3RyaW5nKHdhbGxwYXBlclVybCB8fCBcIlwiKS50cmltKCkgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRpZiAoaXNJbmxpbmVQYXlsb2FkKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMpIHtcblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IGF3YWl0IChhd2FpdCBmZXRjaCh2YWx1ZSkpLmJsb2IoKSA6IGF3YWl0IGRhdGFVcmxUb0Jsb2IodmFsdWUpO1xuXHRcdFx0XHRhd2FpdCBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYihibG9iKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gc2V0QXBwV2FsbHBhcGVyIGlubGluZSBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdFx0XHRjb25zdCBmYWxsYmFjayA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IERFRkFVTFRfV0FMTFBBUEVSX1VSTCA6IHZhbHVlO1xuXHRcdFx0XHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMoZmFsbGJhY2spO1xuXHRcdFx0XHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcihmYWxsYmFjaywgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KSgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZGJDbGVhcldhbGxwYXBlcigpO1xuXHRjbGVhckNhY2hlZFVzZXJXYWxscGFwZXIoKTtcblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRpZiAoIXdyaXRlU3RvcmFnZVBvaW50ZXIodmFsdWUpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIHBvaW50ZXIgd3JpdGUgZmFpbGVkXCIpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModmFsdWUpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih2YWx1ZSwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IHZhbHVlLFxuXHRcdFx0dXJsOiB2YWx1ZVxuXHRcdH0gfSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGJsb2JJbWFnZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmxvYlwiKTtcbmdsb2JhbFRoaXNbYmxvYkltYWdlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmxvYkltYWdlTWFwID0gZ2xvYmFsVGhpc1tibG9iSW1hZ2VTeW1ib2xdO1xudmFyIGRlbGF5ZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmRlbGF5ZWRcIik7XG5nbG9iYWxUaGlzW2RlbGF5ZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXSk7XG52YXIgZGVsYXllZCA9IGdsb2JhbFRoaXNbZGVsYXllZFN5bWJvbF07XG52YXIgc2NoZWR1bGVyU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5zY2hlZHVsZXJcIik7XG5nbG9iYWxUaGlzW3NjaGVkdWxlclN5bWJvbF0gPz89IG1ha2VSQUZDeWNsZSgpO1xudmFyIHNjaGVkdWxlclJmID0gZ2xvYmFsVGhpc1tzY2hlZHVsZXJTeW1ib2xdO1xudmFyIGZhaWxlZFdhbGxwYXBlclNyY1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuZmFpbGVkV2FsbHBhcGVyU3JjXCIpO1xuZ2xvYmFsVGhpc1tmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGZhaWxlZFdhbGxwYXBlclNyYyA9IGdsb2JhbFRoaXNbZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sXTtcbnZhciBwcm9jZXNzSG9zdFNraXBzQnVuZGxlZFdhbGxwYXBlciA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRpZiAoU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uZGF0YXNldD8uY3dzcFNrdSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcInByb2Nlc3NcIikgcmV0dXJuIHRydWU7XG5cdFx0Y29uc3QgaG9zdCA9IFN0cmluZyhnbG9iYWxUaGlzLmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBob3N0ID09PSBcInByb2Nlc3MudTJyZS5zcGFjZVwiIHx8IGhvc3QgPT09IFwid29ya2NlbnRlci51MnJlLnNwYWNlXCIgfHwgaG9zdCA9PT0gXCJhaS51MnJlLnNwYWNlXCI7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciByZW1lbWJlck1pc3NpbmdEZWZhdWx0V2FsbHBhcGVyID0gKCkgPT4ge1xuXHRpZiAocHJvY2Vzc0hvc3RTa2lwc0J1bmRsZWRXYWxscGFwZXIoKSkgZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChERUZBVUxUX1dBTExQQVBFUl9VUkwpO1xufTtcbnZhciBnZXRJbWdXaWR0aCA9IChpbWcpID0+IHtcblx0cmV0dXJuIGltZz8ubmF0dXJhbFdpZHRoIHx8IGltZz8ud2lkdGggfHwgMTtcbn07XG52YXIgZ2V0SW1nSGVpZ2h0ID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsSGVpZ2h0IHx8IGltZz8uaGVpZ2h0IHx8IDE7XG59O1xudmFyIGNyZWF0ZTJkQ29udGV4dCA9IChjYW52YXMpID0+IHtcblx0Y29uc3QgYmFzZSA9IHtcblx0XHRhbHBoYTogdHJ1ZSxcblx0XHRkZXN5bmNocm9uaXplZDogdHJ1ZSxcblx0XHRwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuXHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZVxuXHR9O1xuXHRjb25zdCBzcGFjZXMgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5kYXRhc2V0Py5jd3NwTmF0aXZlU2hlbGwgPT09IFwiY2FwYWNpdG9yXCIgPyBbXCJzcmdiXCIsIFwiZGlzcGxheS1wM1wiXSA6IFtcblx0XHRcInJlYzIxMDAtaGxnXCIsXG5cdFx0XCJkaXNwbGF5LXAzXCIsXG5cdFx0XCJzcmdiXCJcblx0XTtcblx0Zm9yIChjb25zdCBjb2xvclNwYWNlIG9mIHNwYWNlcykgdHJ5IHtcblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIHtcblx0XHRcdC4uLmJhc2UsXG5cdFx0XHRjb2xvclNwYWNlXG5cdFx0fSk7XG5cdFx0aWYgKGN0eCkgcmV0dXJuIGN0eDtcblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdHJldHVybiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIGJhc2UpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0fVxufTtcbnZhciBjYWxsQnlGcmFtZSA9IChwb2ludGVySWQsIGNiKSA9PiB7XG5cdGRlbGF5ZWQuc2V0KHBvaW50ZXJJZCwgY2IpO1xufTtcbnZhciBjb3ZlciA9IChjdHgsIGltZywgc2NhbGUgPSAxLCBwb3J0LCBvcmllbnQgPSAwKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGN0eC5jYW52YXM7XG5cdGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xuXHRjdHgucm90YXRlKCgtb3JpZW50IHx8IDApICogKE1hdGguUEkgKiAuNSkpO1xuXHRjdHgucm90YXRlKCgxIC0gcG9ydCkgKiAoTWF0aC5QSSAvIDIpKTtcblx0Y3R4LnRyYW5zbGF0ZSgtKGdldEltZ1dpZHRoKGltZykgLyAyKSAqIHNjYWxlLCAtKGdldEltZ0hlaWdodChpbWcpIC8gMikgKiBzY2FsZSk7XG59O1xudmFyIGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUgPSAoYmxvYikgPT4ge1xuXHRpZiAoIWJsb2JJbWFnZU1hcC5oYXMoYmxvYikgJiYgKGJsb2IgaW5zdGFuY2VvZiBCbG9iIHx8IGJsb2IgaW5zdGFuY2VvZiBGaWxlIHx8IGJsb2IgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXMgfHwgYmxvYiBpbnN0YW5jZW9mIEltYWdlQml0bWFwIHx8IGJsb2IgaW5zdGFuY2VvZiBJbWFnZSkpIHtcblx0XHRjb25zdCBlZGdlID0gKCgpID0+IHtcblx0XHRcdGNvbnN0IGRwciA9IE1hdGgubWluKGdsb2JhbFRoaXMuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAyKTtcblx0XHRcdGNvbnN0IGNzcyA9IE1hdGgubWF4KGdsb2JhbFRoaXMuc2NyZWVuPy53aWR0aCB8fCAwLCBnbG9iYWxUaGlzLnNjcmVlbj8uaGVpZ2h0IHx8IDAsIDgwMCk7XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1pbigxNjAwLCBjc3MgKiBkcHIpKTtcblx0XHR9KSgpO1xuXHRcdGNvbnN0IHBlbmRpbmcgPSAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKGJsb2IgaW5zdGFuY2VvZiBCbG9iICYmIGJsb2Iuc2l6ZSA+IDE4ZTQpIHRyeSB7XG5cdFx0XHRcdHJldHVybiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iLCB7XG5cdFx0XHRcdFx0cmVzaXplV2lkdGg6IGVkZ2UsXG5cdFx0XHRcdFx0cmVzaXplUXVhbGl0eTogXCJtZWRpdW1cIlxuXHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHR9KSgpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGJsb2JJbWFnZU1hcC5kZWxldGUoYmxvYik7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdFx0YmxvYkltYWdlTWFwLnNldChibG9iLCBwZW5kaW5nKTtcblx0fVxuXHRyZXR1cm4gYmxvYkltYWdlTWFwLmdldChibG9iKTtcbn07XG52YXIgYmluZENhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5iaW5kQ2FjaGVcIik7XG5nbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRDYWNoZSA9IGdsb2JhbFRoaXNbYmluZENhY2hlU3ltYm9sXTtcbnZhciBiaW5kQ2FjaGVkID0gKGNiLCBjdHgpID0+IHtcblx0Y29uc3QgY2FjaGVkID0gYmluZENhY2hlLmdldChjYik7XG5cdGlmICh0eXBlb2YgY2FjaGVkID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjYWNoZWQ7XG5cdGNvbnN0IGJvdW5kID0gY2IuYmluZChjdHgpO1xuXHRiaW5kQ2FjaGUuc2V0KGNiLCBib3VuZCk7XG5cdHJldHVybiBib3VuZDtcbn07XG52YXIgVUlDYW52YXMgPSBudWxsO1xuaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiKSBVSUNhbnZhcyA9IGNsYXNzIFVJQ2FudmFzIGV4dGVuZHMgSFRNTENhbnZhc0VsZW1lbnQge1xuXHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xuXHRcdFwiZGF0YS1zcmNcIixcblx0XHRcImRhdGEtb3JpZW50XCIsXG5cdFx0XCJvcmllbnRcIlxuXHRdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG5cdCNzaXplID0gWzEsIDFdO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdGdldCAjb3JpZW50KCkge1xuXHRcdGNvbnN0IHJhdyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPz8gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgPz8gXCIwXCI7XG5cdFx0Y29uc3QgbiA9IE51bWJlci5wYXJzZUludChyYXcsIDEwKTtcblx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG5cdH1cblx0c2V0ICNvcmllbnQodmFsdWUpIHtcblx0XHRjb25zdCBzID0gU3RyaW5nKHZhbHVlKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHR9XG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09IFwiZGF0YS1zcmNcIikgdGhpcy4jcHJlbG9hZChuZXdWYWx1ZSk7XG5cdFx0aWYgKG5hbWUgPT0gXCJkYXRhLW9yaWVudFwiIHx8IG5hbWUgPT0gXCJvcmllbnRcIikgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1pbmxpbmUtc2l6ZVwiLCBcIm1pbigxMDBjcWksIDEwMGR2aSlcIik7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMGNxYiwgMTAwZHZiKVwiKTtcblx0XHR0aGlzLiNzaXplID0gW01hdGgubWluKE1hdGgubWluKE1hdGgubWF4KHRoaXMuY2xpZW50V2lkdGggfHwgcGFyZW50Py5jbGllbnRXaWR0aCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRXaWR0aCB8fCAxKSAqICh0aGlzLmN1cnJlbnRDU1Nab29tIHx8IDEpLCBNYXRoLm1pbihzY3JlZW4/LndpZHRoLCBnbG9iYWxUaGlzPy5zY3JlZW4/LmF2YWlsV2lkdGggfHwgc2NyZWVuPy53aWR0aCkgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSwgTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRIZWlnaHQgfHwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSwgMSksIHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBnbG9iYWxUaGlzPy5zY3JlZW4/LmF2YWlsSGVpZ2h0IHx8IHNjcmVlbj8uaGVpZ2h0KSB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpXTtcblx0XHR0aGlzLiNwcmVsb2FkKHRoaXMuI2xvYWRpbmcgPSB0aGlzLmRhdGFzZXQuc3JjIHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdHRoaXMuI29yaWVudCA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRpZiAodGhpcy5pbWFnZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgZ2xvYmFsVGhpcz8uc2NyZWVuPy5hdmFpbFdpZHRoIHx8IHNjcmVlbj8ud2lkdGgpIHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSksIE1hdGgubWluKE1hdGgubWluKE1hdGgubWF4KHRoaXMuY2xpZW50SGVpZ2h0IHx8IHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxKSAqICh0aGlzLmN1cnJlbnRDU1Nab29tIHx8IDEpLCBNYXRoLm1pbihzY3JlZW4/LmhlaWdodCwgZ2xvYmFsVGhpcz8uc2NyZWVuPy5hdmFpbEhlaWdodCB8fCBzY3JlZW4/LmhlaWdodCkgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0XHRpZiAob2xkPy5bMF0gIT0gdGhpcy4jc2l6ZVswXSB8fCBvbGQ/LlsxXSAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHRcdH07XG5cdFx0c2NoZWR1bGVyPy55aWVsZD8uKCk/LnRoZW4/LigoKSA9PiB7XG5cdFx0XHR0aGlzLmN0eCA9IGNyZWF0ZTJkQ29udGV4dChjYW52YXMpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jdHg/LmNvbmZpZ3VyZUhpZ2hEeW5hbWljUmFuZ2U/Lih7IG1vZGU6IFwiZXh0ZW5kZWRcIiB9KTtcblx0XHRcdFx0Y2FudmFzPy5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR0aGlzLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1LWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInUyLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInVpLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJpbmxpbmUtc2l6ZVwiLCBcIm1pbigxMDBjcWksIDEwMGR2aSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiYmxvY2stc2l6ZVwiLCBcIm1pbigxMDBjcWIsIDEwMGR2YilcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWlubGluZS1zaXplXCIsIFwibWluKDEwMGNxaSwgMTAwZHZpKVwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtYmxvY2stc2l6ZVwiLCBcIm1pbigxMDBjcWIsIDEwMGR2YilcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiZHluYW1pYy1yYW5nZS1saW1pdFwiLCBcIm5vLWxpbWl0XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHRmaXhTaXplKCk7XG5cdFx0XHRuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gZW50cnk/LmRldmljZVBpeGVsQ29udGVudEJveFNpemU/LlswXTtcblx0XHRcdFx0XHRpZiAoYm94KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0XHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1heChib3guaW5saW5lU2l6ZSB8fCB0aGlzLndpZHRoLCAxKSwgTWF0aC5tYXgoYm94LmJsb2NrU2l6ZSB8fCB0aGlzLmhlaWdodCwgMSldO1xuXHRcdFx0XHRcdFx0dGhpcy4jb3JpZW50ID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdFx0XHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLm9ic2VydmUodGhpcywgeyBib3g6IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCIgfSk7XG5cdFx0XHR0aGlzLiNwcmVsb2FkKHRoaXMuI2xvYWRpbmcgPSB0aGlzLmRhdGFzZXQuc3JjIHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdFx0dGhpcy4jb3JpZW50ID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHR9KTtcblx0fVxuXHRhc3luYyAkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJlYWR5IHx8PSB0aGlzLiNsb2FkaW5nO1xuXHRcdGNvbnN0IGltZyA9IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCA/IGJsb2IgOiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlKGJsb2IpLmNhdGNoKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHRpZiAoaW1nICYmIHJlYWR5ID09IHRoaXMuI2xvYWRpbmcpIHtcblx0XHRcdHRoaXMuaW1hZ2UgPSBpbWc7XG5cdFx0XHR0aGlzLiNyZW5kZXIocmVhZHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gYmxvYjtcblx0fVxuXHQkcmVuZGVyUGFzcyh3aGF0SXNSZWFkeSkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMsIGN0eCA9IHRoaXMuY3R4LCBpbWcgPSB0aGlzLmltYWdlO1xuXHRcdGlmIChpbWcgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHtcblx0XHRcdGlmICh3aGF0SXNSZWFkeSkgdGhpcy4jcmVhZHkgPSB3aGF0SXNSZWFkeTtcblx0XHRcdGlmICh0aGlzLndpZHRoICE9IHRoaXMuI3NpemVbMF0pIHRoaXMud2lkdGggPSB0aGlzLiNzaXplWzBdO1xuXHRcdFx0aWYgKHRoaXMuaGVpZ2h0ICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuaGVpZ2h0ID0gdGhpcy4jc2l6ZVsxXTtcblx0XHRcdHRoaXMuc3R5bGUuYXNwZWN0UmF0aW8gPSBgJHt0aGlzLndpZHRoIHx8IDF9IC8gJHt0aGlzLmhlaWdodCB8fCAxfWA7XG5cdFx0XHRjb25zdCBveCA9IHRoaXMuI29yaWVudCAlIDIgfHwgMDtcblx0XHRcdGNvbnN0IHBvcnQgPSBnZXRJbWdXaWR0aChpbWcpIDw9IGdldEltZ0hlaWdodChpbWcpID8gMSA6IDA7XG5cdFx0XHRjb25zdCBzY2FsZSA9IE1hdGgubWF4KGNhbnZhc1tbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVtveF1dIC8gKHBvcnQgPyBnZXRJbWdIZWlnaHQoaW1nKSA6IGdldEltZ1dpZHRoKGltZykpLCBjYW52YXNbW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1bb3hdXSAvIChwb3J0ID8gZ2V0SW1nV2lkdGgoaW1nKSA6IGdldEltZ0hlaWdodChpbWcpKSk7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0Y292ZXIoY3R4LCBpbWcsIHNjYWxlLCBwb3J0LCB0aGlzLiNvcmllbnQpO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCAqIHNjYWxlLCBpbWcuaGVpZ2h0ICogc2NhbGUpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0Y29uc3QgcmVhZHkgPSBzcmMgfHwgdGhpcy4jbG9hZGluZztcblx0XHR0aGlzLiNsb2FkaW5nID0gcmVhZHk7XG5cdFx0aWYgKCFyZWFkeSB8fCB0eXBlb2YgcmVhZHkgIT09IFwic3RyaW5nXCIpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZiAoZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyhyZWFkeSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZiAocmVhZHkuc3RhcnRzV2l0aChcImRhdGE6XCIpICYmICEvXmRhdGE6aW1hZ2VcXC8vaS50ZXN0KHJlYWR5KSkge1xuXHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiB3YXJtZWRCbG9iRm9yKHJlYWR5KS50aGVuKChibG9iKSA9PiB7XG5cdFx0XHRpZiAoYmxvYiAmJiByZWFkeSA9PT0gdGhpcy4jbG9hZGluZykgcmV0dXJuIHRoaXMuJHVzZUltYWdlQXNTb3VyY2UoYmxvYiwgcmVhZHkpPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBmZXRjaChyZWFkeSwge1xuXHRcdFx0XHRjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxuXHRcdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdFx0fSk/LnRoZW4/Lihhc3luYyAocnNwKSA9PiB7XG5cdFx0XHRcdGlmICghcnNwLm9rKSB7XG5cdFx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCByc3AuYmxvYigpO1xuXHRcdFx0XHRpZiAoIWJsb2I/LnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xuXHRcdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7XG5cdFx0Y29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cdFx0aWYgKHRoaXMuaW1hZ2UgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHNjaGVkdWxlcj8ueWllbGQ/LigpPy50aGVuPy4oYmluZENhY2hlZCh0aGlzLiRyZW5kZXJQYXNzLCB0aGlzKSk7XG5cdH1cbn07XG5lbHNlIFVJQ2FudmFzID0gY2xhc3MgVUlDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cdCRyZW5kZXJQYXNzKHdoYXRJc1JlYWR5KSB7fVxuXHQkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJldHVybiBibG9iO1xuXHR9XG5cdCNwcmVsb2FkKHNyYykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7fVxuXHQjb3JpZW50ID0gMDtcblx0I2xvYWRpbmcgPSBcIlwiO1xuXHQjcmVhZHkgPSBcIlwiO1xuXHQjc2l6ZSA9IFsxLCAxXTtcblx0Y3R4ID0gbnVsbDtcblx0aW1hZ2UgPSBudWxsO1xufTtcbnRyeSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZShcInVpLWNhbnZhc1wiLCBVSUNhbnZhcywgeyBleHRlbmRzOiBcImNhbnZhc1wiIH0pO1xufSBjYXRjaCAoZSkge31cblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBVSUNhbnZhcywgVVNFUl9XQUxMUEFQRVJfQ0FDSEUsIFVTRVJfV0FMTFBBUEVSX1BBVEgsIFdBTExQQVBFUl9JREJfTUFSS0VSLCBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSwgV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSwgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZLCBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciwgYXBwbHlXYWxscGFwZXJQYXBlckZyb21MdW1hLCBhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zLCBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMsIGJpbmRDYWNoZSwgYmxvYkltYWdlTWFwLCBjYWxsQnlGcmFtZSwgY292ZXIsIGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUsIGRlbGF5ZWQsIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEsIGVsZWN0cm9uQVBJLCBmYWlsZWRXYWxscGFwZXJTcmMsIGdldERvbWluYW50Q29sb3JzLCBnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciwgaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyLCBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUsIHF1YWxpdHlNb2RlLCByYW5rV2FsbHBhcGVyU2VlZHMsIHJlZnJlc2hBcHBXYWxscGFwZXJQYWludCwgcmVnaXN0ZXJDb2xvclByb3BlcnR5LCByZXNvbHZlQXBwV2FsbHBhcGVyVXJsLCByZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSwgc2NoZWR1bGVyUmYsIHNldEFwcFdhbGxwYXBlciwgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IsIHN5bmNBcHBXYWxscGFwZXJPcmllbnQsIHN5bmNDYW52YXNPcmllbnQsIHRoZW1lSG9zdHMsIHdhcm1BcHBXYWxscGFwZXIgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLEtBQUFBLFVBQVM7QUFDbEIsU0FBUyxvQkFBQUMsU0FBd0I7QUFDakMsU0FBUyx5QkFBQUMsSUFBdUIsZ0JBQUFDLElBQWMsd0JBQUFDLElBQXNCLHdCQUFBQyxVQUE0QjtBQUdoRyxJQUFJQyxLQUFjLGtCQUNkQyxLQUFjLEVBQUUsTUFBUTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFDWCxFQUFFLEdBSUVDLEtBQWMsQ0FBQ0MsR0FBT0MsTUFBUTtBQUNqQyxNQUFJLE9BQU9ELEtBQVUsVUFDckI7QUFBQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsSUFBSSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzFDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxJQUFRLE9BQU87QUFBQSxNQUNyQyxJQUFJQSxJQUFRLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsSUFDdEM7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzNDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzFDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxJQUFRLE9BQU87QUFBQSxNQUNyQyxRQUFRQSxJQUFRLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsSUFDMUM7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUN4QixJQUFJQSxJQUFRLE9BQU87QUFBQSxJQUNwQjtBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDeEIsUUFBUUEsSUFBUSxPQUFPO0FBQUEsSUFDeEI7QUFBQTtBQUNELEdBSUlFLEtBQVE7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLHNCQUFzQjtBQUFBLEVBQ3RCLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLG1CQUFtQjtBQUFBLEVBQ25CLGlCQUFpQjtBQUFBLEVBQ2pCLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLFFBQVE7QUFBQSxFQUNSLGVBQWU7QUFBQSxFQUNmLEtBQUs7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLFFB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LE1BQWU7QUFBQSxFQUM5QixjQUFjO0FBQUEsRUFBQztBQUFBLEVBQ2YsWUFBWWdCLEdBQWE7QUFBQSxFQUFDO0FBQUEsRUFDMUIsa0JBQWtCak4sR0FBTWdOLEdBQU87QUFDOUIsV0FBT2hOO0FBQUEsRUFDUjtBQUFBLEVBQ0F3TSxHQUFTdkksR0FBSztBQUNiLFdBQU8sUUFBUSxRQUFRO0FBQUEsRUFDeEI7QUFBQSxFQUNBd0ksR0FBUVEsR0FBYTtBQUFBLEVBQUM7QUFBQSxFQUN0QlosS0FBVTtBQUFBLEVBQ1ZGLEtBQVc7QUFBQSxFQUNYQyxLQUFTO0FBQUEsRUFDVEYsS0FBUSxDQUFDLEdBQUcsQ0FBQztBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNUO0FBQ0EsSUFBSTtBQUNILGlCQUFlLE9BQU8sYUFBYUQsSUFBVSxFQUFFLFNBQVMsU0FBUyxDQUFDO0FBQ25FLFFBQVk7QUFBQzsiLAogICJuYW1lcyI6IFsiUSIsICJzZXRTdHlsZVByb3BlcnR5IiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJtYWtlUkFGQ3ljbGUiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAiZWxlY3Ryb25BUEkiLCAicXVhbGl0eU1vZGUiLCAicGFyc2VOdW1iZXIiLCAiY29sb3IiLCAibGVuIiwgIm5hbWVkIiwgInBhcnNlTmFtZWQiLCAiaGV4IiwgInBhcnNlSGV4IiwgIm1hdGNoIiwgIm51bSQxIiwgIm51bV9ub25lIiwgInBlciIsICJwZXJfbm9uZSIsICJudW1fcGVyIiwgIm51bV9wZXJfbm9uZSIsICJodWUkMSIsICJodWVfbm9uZSIsICJjIiwgInJ4X251bV9wZXJfbm9uZSIsICJyZ2JfbnVtX29sZCIsICJyZ2JfcGVyX29sZCIsICJwYXJzZVJnYkxlZ2FjeSIsICJyZXMiLCAicHJlcGFyZSIsICJtb2RlIiwgInBhcnNlIiwgImNvbnZlcnRlciIsICJ0YXJnZXRfbW9kZSIsICJjb252ZXJ0ZXJzIiwgIm1vZGVzIiwgInBhcnNlcnMiLCAiY29sb3JQcm9maWxlcyIsICJpZGVudGl0eSIsICJ2IiwgInVzZU1vZGUiLCAiZGVmaW5pdGlvbiIsICJrIiwgImNoYW5uZWwiLCAicGFyc2VyIiwgInVzZVBhcnNlciIsICJnZXRNb2RlIiwgIklkZW50U3RhcnRDb2RlUG9pbnQiLCAiSWRlbnRDb2RlUG9pbnQiLCAiVG9rIiwgIl9pIiwgImlzX251bSIsICJjaGFycyIsICJjaCIsICJjaDEiLCAiaXNfaWRlbnQiLCAiaHVlbml0cyIsICJudW0iLCAidmFsdWUiLCAiZGlnaXRzIiwgImlkIiwgImlkZW50IiwgImlkZW50bGlrZSIsICJ0b2tlbml6ZSIsICJzdHIiLCAidG9rZW5zIiwgImFscGhhIiwgInBhcnNlQ29sb3JTeW50YXgiLCAidG9rZW4iLCAiY29vcmRzIiwgImNvbnN1bWVDb29yZHMiLCAiY2hhbm5lbHMiLCAiaWkiLCAiaW5jbHVkZUh1ZSIsICJwYXJzZU1vZGVyblN5bnRheCIsICJwYXJzZWQiLCAicmVzdWx0IiwgImkiLCAicGFyc2VSZ2IiLCAiciIsICJnIiwgImIiLCAicGFyc2VUcmFuc3BhcmVudCIsICJsZXJwIiwgImEiLCAidCIsICJnZXRfY2xhc3NlcyIsICJhcnIiLCAiY2xhc3NlcyIsICJpbnRlcnBvbGF0b3JQaWVjZXdpc2UiLCAiaW50ZXJwb2xhdG9yIiwgImNscyIsICJpZHgiLCAicGFpciIsICJpbnRlcnBvbGF0b3JMaW5lYXIiLCAiZml4dXBBbHBoYSIsICJzb21lX2RlZmluZWQiLCAiZGVmaW5pdGlvbiQyNyIsICJsaW5lYXJpemUkMiIsICJjb252ZXJ0QTk4VG9YeXo2NSIsICJhOTgiLCAiZ2FtbWEkMiIsICJjb252ZXJ0WHl6NjVUb0E5OCIsICJ4IiwgInkiLCAieiIsICJmbiQzIiwgImFicyIsICJjb252ZXJ0UmdiVG9McmdiIiwgImNvbnZlcnRSZ2JUb1h5ejY1IiwgInJnYiIsICJmbiQyIiwgImNvbnZlcnRMcmdiVG9SZ2IiLCAiY29udmVydFh5ejY1VG9SZ2IiLCAiZGVmaW5pdGlvbiQyNiIsICJub3JtYWxpemVIdWUiLCAiaHVlIiwgImh1ZXMiLCAiZm4iLCAibm9ybWFsaXplZCIsICJhY2MiLCAiY3VyciIsICJmaXh1cEh1ZVNob3J0ZXIiLCAiZCIsICJNIiwgImRlZ1RvUmFkIiwgInJhZFRvRGVnIiwgIkRFIiwgIkJFIiwgIkJDQUQiLCAiY29udmVydFJnYlRvQ3ViZWhlbGl4IiwgImwiLCAiY29udmVydEN1YmVoZWxpeFRvUmdiIiwgImgiLCAicyIsICJhbXAiLCAiY29zaCIsICJzaW5oIiwgImRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIiwgInN0ZCIsICJzbXAiLCAic3RkX2giLCAic21wX2giLCAiZEgiLCAiZGlmZmVyZW5jZUh1ZU5haXZlIiwgImRpZmZlcmVuY2VIdWVDaHJvbWEiLCAiYXZlcmFnZUFuZ2xlIiwgInZhbCIsICJzdW0iLCAicmFkIiwgImFuZ2xlIiwgImRlZmluaXRpb24kMjUiLCAiY29udmVydExhYlRvTGNoIiwgImNvbnZlcnRMY2hUb0xhYiIsICJrJDIiLCAiZSQyIiwgIkQ1MCIsICJENjUiLCAiayQxIiwgImUkMSIsICJmbiQxIiwgImNvbnZlcnRMYWI2NVRvWHl6NjUiLCAiZnkiLCAiZngiLCAiZnoiLCAiY29udmVydExhYjY1VG9SZ2IiLCAibGFiIiwgImYkMSIsICJjb252ZXJ0WHl6NjVUb0xhYjY1IiwgImYwIiwgImYxIiwgImYyIiwgImNvbnZlcnRSZ2JUb0xhYjY1IiwgIs64IiwgImNvc864IiwgInNpbs64IiwgImZhY3RvciIsICJjb252ZXJ0RGxjaFRvTGFiNjUiLCAiRyIsICJlIiwgImYiLCAiY29udmVydExhYjY1VG9EbGNoIiwgImNvbnZlcnREbGFiVG9MYWI2NSIsICJjb252ZXJ0TGFiNjVUb0RsYWIiLCAiZGVmaW5pdGlvbiQyNCIsICJkZWZpbml0aW9uJDIzIiwgImNvbnZlcnRIc2lUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic2kiLCAibSIsICJkZWZpbml0aW9uJDIyIiwgImNvbnZlcnRIc2xUb1JnYiIsICJtMSIsICJtMiIsICJjb252ZXJ0UmdiVG9Ic2wiLCAiaHVlVG9EZWciLCAidW5pdCIsICJoc2xfb2xkIiwgInBhcnNlSHNsTGVnYWN5IiwgInBhcnNlSHNsIiwgImRlZmluaXRpb24kMjEiLCAiY29udmVydEhzdlRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzdiIsICJkZWZpbml0aW9uJDIwIiwgImNvbnZlcnRId2JUb1JnYiIsICJ3IiwgImNvbnZlcnRSZ2JUb0h3YiIsICJyZ2JhIiwgImhzdiIsICJQYXJzZUh3YiIsICJkZWZpbml0aW9uJDE5IiwgIk0xIiwgIk0yIiwgIkMxIiwgIkMyIiwgIkMzIiwgInRyYW5zZmVyUHFEZWNvZGUiLCAidHJhbnNmZXJQcUVuY29kZSIsICJ0b1JlbCIsICJjb252ZXJ0SXRwVG9YeXo2NSIsICJwIiwgInRvQWJzIiwgImNvbnZlcnRYeXo2NVRvSXRwIiwgImFic1giLCAiYWJzWSIsICJhYnNaIiwgImRlZmluaXRpb24kMTgiLCAicCQxIiwgImQwJDEiLCAiamFiUHFFbmNvZGUiLCAidm4iLCAiY29udmVydFh5ejY1VG9KYWIiLCAieHAiLCAieXAiLCAiZDAiLCAiamFiUHFEZWNvZGUiLCAidnAiLCAicmVsIiwgImNvbnZlcnRKYWJUb1h5ejY1IiwgImoiLCAiY29udmVydFJnYlRvSmFiIiwgImNvbnZlcnRKYWJUb1JnYiIsICJkZWZpbml0aW9uJDE3IiwgImNvbnZlcnRKYWJUb0pjaCIsICJjb252ZXJ0SmNoVG9KYWIiLCAiZGVmaW5pdGlvbiQxNiIsICJjb252ZXJ0TGFiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb1JnYiIsICJjb252ZXJ0TGFiVG9SZ2IiLCAiY29udmVydFJnYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9MYWIiLCAiY29udmVydFJnYlRvTGFiIiwgInBhcnNlTGFiIiwgImRlZmluaXRpb24kMTUiLCAiZGVmaW5pdGlvbiQxNCIsICJwYXJzZUxjaCIsICJkZWZpbml0aW9uJDEzIiwgImRlZmluaXRpb24kMTIiLCAiY29udmVydEx1dlRvTGNodXYiLCAidSIsICJjb252ZXJ0TGNodXZUb0x1diIsICJ1X2ZuJDEiLCAidl9mbiQxIiwgInVuJDEiLCAidm4kMSIsICJsX2ZuIiwgImNvbnZlcnRYeXo1MFRvTHV2IiwgInVfZm4iLCAidl9mbiIsICJ1biIsICJjb252ZXJ0THV2VG9YeXo1MCIsICJ1cCIsICJjb252ZXJ0UmdiVG9MY2h1diIsICJjb252ZXJ0TGNodXZUb1JnYiIsICJsY2h1diIsICJkZWZpbml0aW9uJDExIiwgImRlZmluaXRpb24kMTAiLCAiZGVmaW5pdGlvbiQ5IiwgImx1diIsICJjb252ZXJ0THJnYlRvT2tsYWIiLCAiTCIsICJTIiwgImNvbnZlcnRSZ2JUb09rbGFiIiwgImNvbnZlcnRPa2xhYlRvTHJnYiIsICJjb252ZXJ0T2tsYWJUb1JnYiIsICJ0b2UiLCAia18zIiwgInRvZV9pbnYiLCAiY29tcHV0ZV9tYXhfc2F0dXJhdGlvbiIsICJrMCIsICJrMSIsICJrMiIsICJrMyIsICJrNCIsICJ3bCIsICJ3bSIsICJ3cyIsICJrX2wiLCAia19tIiwgImtfcyIsICJsXyIsICJtXyIsICJzXyIsICJsX2RTIiwgIm1fZFMiLCAic19kUyIsICJsX2RTMiIsICJtX2RTMiIsICJzX2RTMiIsICJmaW5kX2N1c3AiLCAiU19jdXNwIiwgIkxfY3VzcCIsICJmaW5kX2dhbXV0X2ludGVyc2VjdGlvbiIsICJMMSIsICJMMCIsICJjdXNwIiwgImRMIiwgImRDIiwgImxfZHQiLCAibV9kdCIsICJzX2R0IiwgIkMiLCAibGR0IiwgIm1kdCIsICJzZHQiLCAibGR0MiIsICJtZHQyIiwgInNkdDIiLCAicjEiLCAicjIiLCAidV9yIiwgInRfciIsICJnMSIsICJnMiIsICJ1X2ciLCAidF9nIiwgImIxIiwgImIyIiwgInVfYiIsICJ0X2IiLCAiZ2V0X1NUX21heCIsICJhXyIsICJiXyIsICJnZXRfQ3MiLCAiQ19tYXgiLCAiU1RfbWF4IiwgIlNfbWlkIiwgIlRfbWlkIiwgIkNfYSIsICJDX2IiLCAiQ19taWQiLCAiY29udmVydE9rbGFiVG9Pa2hzbCIsICJyZXQiLCAiQ18wIiwgImtfMCIsICJrXzEiLCAia18yIiwgImNvbnZlcnRPa2hzbFRvT2tsYWIiLCAiaHNsIiwgIm1vZGVPa2hzbCIsICJjb252ZXJ0T2tsYWJUb09raHN2IiwgIlNfbWF4IiwgIlQiLCAiU18wIiwgIkxfdiIsICJDX3YiLCAiTF92dCIsICJDX3Z0IiwgInJnYl9zY2FsZSIsICJzY2FsZV9MIiwgImNvbnZlcnRPa2hzdlRvT2tsYWIiLCAiTF9uZXciLCAibW9kZU9raHN2IiwgInBhcnNlT2tsYWIiLCAiZGVmaW5pdGlvbiQ4IiwgInBhcnNlT2tsY2giLCAiZGVmaW5pdGlvbiQ3IiwgImNvbnZlcnRQM1RvWHl6NjUiLCAiY29udmVydFh5ejY1VG9QMyIsICJkZWZpbml0aW9uJDYiLCAiZ2FtbWEkMSIsICJjb252ZXJ0WHl6NTBUb1Byb3Bob3RvIiwgImxpbmVhcml6ZSQxIiwgImNvbnZlcnRQcm9waG90b1RvWHl6NTAiLCAicHJvcGhvdG8iLCAiZGVmaW5pdGlvbiQ1IiwgIs6xJDEiLCAizrIkMSIsICJnYW1tYSIsICJjb252ZXJ0WHl6NjVUb1JlYzIwMjAiLCAizrEiLCAizrIiLCAibGluZWFyaXplIiwgImNvbnZlcnRSZWMyMDIwVG9YeXo2NSIsICJyZWMyMDIwIiwgImRlZmluaXRpb24kNCIsICJiaWFzIiwgImJpYXNfY2JydCIsICJ0cmFuc2ZlciQxIiwgImNvbnZlcnRSZ2JUb1h5YiIsICJ0cmFuc2ZlciIsICJjb252ZXJ0WHliVG9SZ2IiLCAiZGVmaW5pdGlvbiQzIiwgImRlZmluaXRpb24kMiIsICJjb252ZXJ0WHl6NjVUb1h5ejUwIiwgInh5ejY1IiwgImNvbnZlcnRYeXo1MFRvWHl6NjUiLCAieHl6NTAiLCAiZGVmaW5pdGlvbiQxIiwgImNvbnZlcnRSZ2JUb1lpcSIsICJjb252ZXJ0WWlxVG9SZ2IiLCAicSIsICJwcmVjaXNpb24iLCAicm91bmQiLCAidHdvRGVjaW1hbHMiLCAiY2xhbXAkMSIsICJmaXh1cCIsICJyZ2IkMSIsICJoc2wkMSIsICJzZXJpYWxpemVIZXgiLCAiZm9ybWF0SGV4IiwgImN1YmVoZWxpeCIsICJkbGFiIiwgImRsY2giLCAiaHNpIiwgImh3YiIsICJpdHAiLCAiamFiIiwgImpjaCIsICJsYWI2NSIsICJsY2giLCAibGNoNjUiLCAibHJnYiIsICJva2hzbCIsICJva2hzdiIsICJva2xhYiIsICJva2xjaCIsICJwMyIsICJ4eWIiLCAieWlxIiwgInNvcnRDb2xvcnMiLCAibGlzdCIsICJjcml0ZXJpYSIsICJldWNsaWRlYW5EaXN0YW5jZSIsICJjb2xvcjEiLCAiY29sb3IyIiwgIm1ha2VDbHVzdGVycyIsICJkYXRhIiwgImNlbnRyb2lkcyIsICJjbHVzdGVycyIsICJwb2ludCIsICJtaW5EaXN0YW5jZSIsICJtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCIsICJjZW50cm9pZCIsICJpbmRleCIsICJkaXN0YW5jZSIsICJjb21wdXRlTWVhbiIsICJwb2ludHMiLCAia01lYW5zIiwgImluaXRpYWxpemVDZW50cm9pZHMiLCAibWF4SXRlcmF0aW9ucyIsICJpdGVyYXRpb24iLCAibmV3Q2VudHJvaWRzIiwgImNsdXN0ZXIiLCAibmV3Q2VudHJvaWQiLCAiZGlzdGFuY2VzIiwgInRvdGFsRGlzdGFuY2UiLCAicHJvYmFiaWxpdGllcyIsICJjdW11bGF0aXZlUHJvYmFiaWxpdHkiLCAicmFuZG9tVmFsdWUiLCAicHJlQmx1clBpeGVscyIsICJpbWdVUkwiLCAiYmxvYiIsICJiaXRtYXAiLCAib2Zmc2V0IiwgImN0eCIsICJnZXRDbHVzdGVySW1hZ2VEYXRhIiwgImFsbENvdW50IiwgImR2IiwgImZwMzIiLCAiaTQiLCAiZ2V0RG9taW5hbnRDb2xvcnMiLCAiV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVkiLCAiVEhFTUVfU1RPUkFHRV9LRVkiLCAiUFJJTUFSWV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfVVJMX0tFWSIsICJQQVBFUl9MX1NQTElUIiwgIlBBUEVSX0NIUk9NQV9DQVAiLCAiRkFMTEJBQ0tfUEFQRVIiLCAibGFzdExpdmVQYXBlciIsICJVU0FCTEVfTFVNQV9NSU4iLCAiU0VFRF9QUk9QUyIsICJjbGFtcCIsICJuIiwgImxvIiwgImhpIiwgImhleE9rbGNoIiwgImZhbGxiYWNrIiwgInJnYlRvU2FtcGxlIiwgIm9rIiwgInBhcGVyTEZyb21IZXgiLCAiaGFsb0ZvclBhcGVyIiwgImRhcmtQYXBlciIsICJpc1VzYWJsZVBhcGVyTHVtYSIsICJsdW1hIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMiLCAic2FtcGxlcyIsICJwaXhlbEx1bWEiLCAibHMiLCAibWVhbkwiLCAibWVkaWFuTCIsICJwYXBlckwiLCAicGFwZXIiLCAicGFwZXJDIiwgInNhbXBsZUltYWdlTWVhbkx1bWEiLCAiY2FudmFzIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEiLCAiaGFzV2FsbHBhcGVyUGFwZXIiLCAic2VlZHMiLCAicmFua1dhbGxwYXBlclNlZWRzIiwgImFjY2VudFBvb2wiLCAicG9vbCIsICJwcmltYXJ5IiwgImh1ZURpc3QiLCAicGlja05leHQiLCAidXNlZCIsICJyZXN0IiwgImJhc2UiLCAibnVkZ2VkIiwgInNlY29uZGFyeSIsICJ0ZXJ0aWFyeSIsICJ0aGVtZUhvc3RzIiwgIm5vZGVzIiwgImVsIiwgIndhbGxwYXBlclNlZWRzTWF5UGFpbnQiLCAic3JjIiwgImlzVmFsaWRDb2xvciIsICJhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zIiwgImV4dHJhSG9zdHMiLCAic2hhZG93IiwgImdsb3ciLCAiaG9zdHMiLCAicmVnaXN0ZXJDb2xvclByb3BlcnR5IiwgImhvc3QiLCAiZ2xvYmFsUXVlcnkiLCAibmFtZSIsICJpbml0aWFsVmFsdWUiLCAicGVyc2lzdExpdmVQYXBlciIsICJjYWNoZWQiLCAibG9hZENhY2hlZFdhbGxwYXBlclRoZW1lIiwgImFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSIsICJhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMiLCAibmV4dCIsICJwcm9wIiwgImtleSIsICJyYXciLCAiYXBwbHlUaGVtZUZyb21XYWxscGFwZXIiLCAib3B0cyIsICJzcmNLZXkiLCAic2t1IiwgImxpdmVMdW1hIiwgImVyciIsICJyZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSIsICJXQUxMUEFQRVJfU1RPUkFHRV9LRVkiLCAiREVGQVVMVF9XQUxMUEFQRVJfVVJMIiwgIlVTRVJfV0FMTFBBUEVSX1BBVEgiLCAiVVNFUl9XQUxMUEFQRVJfQ0FDSEUiLCAiV0FMTFBBUEVSX0lEQl9NQVJLRVIiLCAiSURCX05BTUUiLCAiSURCX1NUT1JFIiwgIklEQl9LRVkiLCAiTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTIiwgImxpdmVPYmplY3RVcmwiLCAid2FsbHBhcGVyRXBvY2giLCAiY3VycmVudE9yaWVudE51bWJlciIsICJpc0lkYlBvaW50ZXIiLCAicG9pbnRlciIsICJpc1VudXNhYmxlU3RvcmVkVXJsIiwgInJldm9rZUxpdmVPYmplY3RVcmwiLCAiYWRvcHRXYWxscGFwZXJCbG9iIiwgImVwb2NoIiwgIm9wZW5XYWxscGFwZXJEYiIsICJyZXNvbHZlIiwgInJlamVjdCIsICJyZXEiLCAiZGIiLCAiaWRiUHV0V2FsbHBhcGVyIiwgInR4IiwgImlkYkdldFdhbGxwYXBlciIsICJjYWNoZVVzZXJXYWxscGFwZXIiLCAiY2FjaGUiLCAidHlwZSIsICJjbGVhckNhY2hlZFVzZXJXYWxscGFwZXIiLCAiaWRiQ2xlYXJXYWxscGFwZXIiLCAicmVhZFN0b3JhZ2VQb2ludGVyIiwgIndyaXRlU3RvcmFnZVBvaW50ZXIiLCAicmVzdG9yZVdhbGxwYXBlckJsb2JVcmwiLCAiaXNJbmxpbmVQYXlsb2FkIiwgInVybCIsICJyZXNvbHZlQXBwV2FsbHBhcGVyVXJsIiwgInByb2Nlc3NIb3N0U2tpcHNCdW5kbGVkV2FsbHBhcGVyIiwgIndhcm1Qcm9taXNlIiwgIndhcm1BcHBXYWxscGFwZXIiLCAicnNwIiwgIndhcm1lZEJsb2JGb3IiLCAid2FybSIsICJnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciIsICJzeW5jQ2FudmFzT3JpZW50IiwgImFwcGx5IiwgInN5bmNBcHBXYWxscGFwZXJPcmllbnQiLCAicmVmcmVzaEFwcFdhbGxwYXBlclBhaW50IiwgInBhaW50V2FsbHBhcGVyT25DYW52YXNlcyIsICJzeW5jR2xvd1RvVGhlbWUiLCAicGFpbnRVcmwiLCAiY2FudmFzZXMiLCAib3JpZW50IiwgImRhdGFVcmxUb0Jsb2IiLCAiZGF0YVVybCIsICJzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiIsICJzZXRBcHBXYWxscGFwZXIiLCAicmVhZGVyIiwgImluaXRpYWxpemVBcHBDYW52YXNMYXllciIsICJjb250YWluZXIiLCAicm9vdCIsICJwb3N0ZXIiLCAicmVtZW1iZXJNaXNzaW5nRGVmYXVsdFdhbGxwYXBlciIsICJjb2xkVXJsIiwgIndhcm1pbmciLCAiZmFpbGVkV2FsbHBhcGVyU3JjIiwgImRpc3Bvc2VPcmllbnQiLCAid2FsbHBhcGVyIiwgInRoZW1lU3JjIiwgImV4dHJhY3QiLCAicmljIiwgIndhbGxwYXBlclVybCIsICJibG9iSW1hZ2VTeW1ib2wiLCAiYmxvYkltYWdlTWFwIiwgImRlbGF5ZWRTeW1ib2wiLCAiZGVsYXllZCIsICJzY2hlZHVsZXJTeW1ib2wiLCAic2NoZWR1bGVyUmYiLCAiZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sIiwgImdldEltZ1dpZHRoIiwgImltZyIsICJnZXRJbWdIZWlnaHQiLCAiY3JlYXRlMmRDb250ZXh0IiwgInNwYWNlcyIsICJjb2xvclNwYWNlIiwgImNhbGxCeUZyYW1lIiwgInBvaW50ZXJJZCIsICJjYiIsICJjb3ZlciIsICJzY2FsZSIsICJwb3J0IiwgImNyZWF0ZUltYWdlQml0bWFwQ2FjaGUiLCAiZWRnZSIsICJkcHIiLCAiY3NzIiwgInBlbmRpbmciLCAiYmluZENhY2hlU3ltYm9sIiwgImJpbmRDYWNoZSIsICJiaW5kQ2FjaGVkIiwgImJvdW5kIiwgIlVJQ2FudmFzIiwgIiNzaXplIiwgIiNsb2FkaW5nIiwgIiNyZWFkeSIsICIjb3JpZW50IiwgIl8iLCAibmV3VmFsdWUiLCAiI3ByZWxvYWQiLCAiI3JlbmRlciIsICJwYXJlbnQiLCAiZml4U2l6ZSIsICJvbGQiLCAiZW50cmllcyIsICJlbnRyeSIsICJib3giLCAicmVhZHkiLCAid2hhdElzUmVhZHkiLCAib3giXQp9Cg==
