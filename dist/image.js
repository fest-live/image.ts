import { getCorrectOrientation as Gr, makeRAFCycle as Jr, orientationNumberMap as Kr, whenAnyScreenChanges as Vr } from "@fest-lib/dom";
var wo = "electronBridge", xo = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, ur = (e, t) => {
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
}, Qr = {
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
}, ea = (e) => ur(Qr[e.toLowerCase()], 6), ta = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, ra = (e) => {
  let t;
  return (t = e.match(ta)) ? ur(parseInt(t[1], 16), t[1].length) : void 0;
}, P = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", ko = `(?:${P}|none)`, te = `${P}%`, _o = `(?:${P}%|none)`, yt = `(?:${P}%|${P})`, aa = `(?:${P}%|${P}|none)`, ia = `(?:${P}(deg|grad|rad|turn)|${P})`, $o = `(?:${P}(deg|grad|rad|turn)|${P}|none)`, j = "\\s*,\\s*", zo = new RegExp("^" + aa + "$"), oa = new RegExp(`^rgba?\\(\\s*${P}${j}${P}${j}${P}\\s*(?:,\\s*${yt}\\s*)?\\)$`), na = new RegExp(`^rgba?\\(\\s*${te}${j}${te}${j}${te}\\s*(?:,\\s*${yt}\\s*)?\\)$`), la = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(oa))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(na))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, sa = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? ga(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, Mt = (e = "rgb") => (t) => (t = sa(t, e)) !== void 0 ? t.mode === e ? t : S[t.mode][e] ? S[t.mode][e](t) : e === "rgb" ? S[t.mode].rgb(t) : S.rgb[e](S[t.mode].rgb(t)) : void 0, S = {}, fr = {}, ue = [], pr = {}, ha = (e) => e, m = (e) => (S[e.mode] = {
  ...S[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  S[t] || (S[t] = {}), S[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = ha);
}), fr[e.mode] = e, (e.parse || []).forEach((t) => {
  ca(t, e.mode);
}), Mt(e.mode)), da = (e) => fr[e], ca = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    pr[e] = t;
  } else typeof e == "function" && ue.indexOf(e) < 0 && ue.push(e);
}, lt = /[^\x00-\x7F]|[a-zA-Z_]/, va = /[^\x00-\x7F]|[-\w]/, s = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, u = 0;
function le(e) {
  let t = e[u], r = e[u + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[u + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function st(e) {
  if (u >= e.length) return !1;
  let t = e[u];
  if (lt.test(t)) return !0;
  if (t === "-") {
    if (e.length - u < 2) return !1;
    let r = e[u + 1];
    return !!(r === "-" || lt.test(r));
  }
  return !1;
}
var ua = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ee(e) {
  let t = "";
  if ((e[u] === "-" || e[u] === "+") && (t += e[u++]), t += se(e), e[u] === "." && /\d/.test(e[u + 1]) && (t += e[u++] + se(e)), (e[u] === "e" || e[u] === "E") && ((e[u + 1] === "-" || e[u + 1] === "+") && /\d/.test(e[u + 2]) ? t += e[u++] + e[u++] + se(e) : /\d/.test(e[u + 1]) && (t += e[u++] + se(e))), st(e)) {
    let r = fe(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * ua[r]
    } : void 0;
  }
  return e[u] === "%" ? (u++, {
    type: s.Percentage,
    value: +t
  }) : {
    type: s.Number,
    value: +t
  };
}
function se(e) {
  let t = "";
  for (; /\d/.test(e[u]); ) t += e[u++];
  return t;
}
function fe(e) {
  let t = "";
  for (; u < e.length && va.test(e[u]); ) t += e[u++];
  return t;
}
function fa(e) {
  let t = fe(e);
  return e[u] === "(" ? (u++, {
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
function pa(e = "") {
  let t = e.trim(), r = [], a;
  for (u = 0; u < t.length; ) {
    if (a = t[u++], a === `
` || a === "	" || a === " ") {
      for (; u < t.length && (t[u] === `
` || t[u] === "	" || t[u] === " "); ) u++;
      continue;
    }
    if (a === ",") return;
    if (a === ")") {
      r.push({ type: s.ParenClose });
      continue;
    }
    if (a === "+") {
      if (u--, le(t)) {
        r.push(ee(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (u--, le(t)) {
        r.push(ee(t));
        continue;
      }
      if (st(t)) {
        r.push({
          type: s.Ident,
          value: fe(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (u--, le(t)) {
        r.push(ee(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; u < t.length && (t[u] === `
` || t[u] === "	" || t[u] === " "); ) u++;
      let i;
      if (le(t) && (i = ee(t), i.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: i
        });
        continue;
      }
      if (st(t) && fe(t) === "none") {
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
      u--, r.push(ee(t));
      continue;
    }
    if (lt.test(a)) {
      u--, r.push(fa(t));
      continue;
    }
    return;
  }
  return r;
}
function ma(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = pr[t.value];
  if (!r) return;
  const a = { mode: r }, i = mr(e, !1);
  if (!i) return;
  const o = da(r).channels;
  for (let n = 0, l, d; n < o.length; n++)
    l = i[n], d = o[n], l.type !== s.None && (a[d] = l.type === s.Number ? l.value : l.value / 100, d === "alpha" && (a[d] = Math.max(0, Math.min(1, a[d]))));
  return a;
}
function mr(e, t) {
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
function ba(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = mr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var ga = (e) => {
  if (typeof e != "string") return;
  const t = pa(e), r = t ? ba(t, !0) : void 0;
  let a, i = 0, o = ue.length;
  for (; i < o; ) if ((a = ue[i++](e, r)) !== void 0) return a;
  return t ? ma(t) : void 0;
};
function ya(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value / 255 : o.value / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var Ma = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, wa = (e, t, r) => e + r * (t - e), xa = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, ka = (e) => (t) => {
  let r = xa(t);
  return (a) => {
    let i = a * r.length, o = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), n = r[o];
    return n === void 0 ? void 0 : e(n[0], n[1], i - o);
  };
}, h = ka(wa), M = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, B = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    ya,
    ra,
    la,
    ea,
    Ma,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: h,
    g: h,
    b: h,
    alpha: {
      use: h,
      fixup: M
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
}, qe = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Ot = (e) => {
  let t = qe(e.r), r = qe(e.g), a = qe(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Oe = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Wt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: Oe(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Oe(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Oe(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, We = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, F = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: We(e),
    g: We(t),
    b: We(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, O = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, De = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, Y = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let o = {
    mode: i,
    r: De(e),
    g: De(t),
    b: De(r)
  };
  return a !== void 0 && (o.alpha = a), o;
}, W = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Y({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, _a = {
  ...B,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Wt(O(e)),
    xyz65: Wt
  },
  toMode: {
    rgb: (e) => W(Ot(e)),
    xyz65: Ot
  }
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, $a = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let o = _(r);
  return a === 0 || e[a - 1] === void 0 ? o : t(o - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), A = (e) => $a(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), x = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], za = Math.PI / 180, Pa = 180 / Math.PI, Dt = x[3] * x[4], Xt = x[1] * x[4], jt = x[1] * x[2] - x[0] * x[3], Ta = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (jt * r + e * Dt - t * Xt) / (jt + Dt - Xt), o = r - i, n = (x[4] * (t - i) - x[2] * o) / x[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(o * o + n * n) / (x[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(n, o) * Pa - 120), a !== void 0 && (l.alpha = a), l;
}, Sa = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * za, r === void 0 && (r = 0);
  let o = t === void 0 ? 0 : t * r * (1 - r), n = Math.cos(e), l = Math.sin(e);
  return i.r = r + o * (x[0] * n + x[1] * l), i.g = r + o * (x[2] * n + x[3] * l), i.b = r + o * (x[4] * n + x[5] * l), a !== void 0 && (i.alpha = a), i;
}, we = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, Aa = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, xe = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, C = (e) => {
  let t = e.reduce((a, i) => {
    if (i !== void 0) {
      let o = i * Math.PI / 180;
      a.sin += Math.sin(o), a.cos += Math.cos(o);
    }
    return a;
  }, {
    sin: 0,
    cos: 0
  }), r = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return r < 0 ? 360 + r : r;
}, Ca = {
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
  fromMode: { rgb: Ta },
  toMode: { rgb: Sa },
  interpolate: {
    h: {
      use: h,
      fixup: A
    },
    s: h,
    l: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: we },
  average: { h: C }
}, E = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let o = Math.sqrt(t * t + r * r), n = {
    mode: i,
    l: e,
    c: o
  };
  return o && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, R = ({ l: e, c: t, h: r, alpha: a }, i = "lab") => {
  r === void 0 && (r = 0);
  let o = {
    mode: i,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (o.alpha = a), o;
}, br = Math.pow(29, 3) / Math.pow(3, 3), gr = Math.pow(6, 3) / Math.pow(29, 3), g = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, X = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, Po = Math.pow(29, 3) / Math.pow(3, 3), To = Math.pow(6, 3) / Math.pow(29, 3), Xe = (e) => Math.pow(e, 3) > gr ? Math.pow(e, 3) : (116 * e - 16) / br, yr = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz65",
    x: Xe(o) * X.X,
    y: Xe(i) * X.Y,
    z: Xe(n) * X.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, ke = (e) => W(yr(e)), je = (e) => e > gr ? Math.cbrt(e) : (br * e + 16) / 116, Mr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = je(e / X.X), o = je(t / X.Y), n = je(r / X.Z), l = {
    mode: "lab65",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, _e = (e) => {
  let t = Mr(O(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, re = 26 / 180 * Math.PI, pe = Math.cos(re), me = Math.sin(re), wr = 100 / Math.log(139 / 100), ht = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / wr) - 1) / 39e-4
  }, o = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, n = o * Math.cos(r / 180 * Math.PI - re), l = o * Math.sin(r / 180 * Math.PI - re);
  return i.a = n * pe - l / 0.83 * me, i.b = n * me + l / 0.83 * pe, a !== void 0 && (i.alpha = a), i;
}, dt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * pe + r * me, o = 0.83 * (r * pe - t * me), n = Math.sqrt(i * i + o * o), l = {
    mode: "dlch",
    l: wr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * n) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(o, i) + re) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, Bt = (e) => ht(E(e, "dlch")), Ft = (e) => R(dt(e), "dlab"), Ia = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Bt,
    rgb: (e) => ke(Bt(e))
  },
  fromMode: {
    lab65: Ft,
    rgb: (e) => Ft(_e(e))
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
    l: h,
    a: h,
    b: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Ea = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: ht,
    dlab: (e) => R(e, "dlab"),
    rgb: (e) => ke(ht(e))
  },
  fromMode: {
    lab65: dt,
    dlab: (e) => E(e, "dlch"),
    rgb: (e) => dt(_e(e))
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
    l: h,
    c: h,
    h: {
      use: h,
      fixup: A
    },
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: xe },
  average: { h: C }
};
function Ra({ h: e, s: t, i: r, alpha: a }) {
  e = _(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: r * (1 + t * (3 / (2 - i) - 1)),
        g: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        b: r * (1 - t)
      };
      break;
    case 1:
      o = {
        r: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        g: r * (1 + t * (3 / (2 - i) - 1)),
        b: r * (1 - t)
      };
      break;
    case 2:
      o = {
        r: r * (1 - t),
        g: r * (1 + t * (3 / (2 - i) - 1)),
        b: r * (1 + t * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    case 3:
      o = {
        r: r * (1 - t),
        g: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        b: r * (1 + t * (3 / (2 - i) - 1))
      };
      break;
    case 4:
      o = {
        r: r * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 / (2 - i) - 1))
      };
      break;
    case 5:
      o = {
        r: r * (1 + t * (3 / (2 - i) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    default:
      o = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return o.mode = "rgb", a !== void 0 && (o.alpha = a), o;
}
function Na({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * o / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var La = {
  mode: "hsi",
  toMode: { rgb: Ra },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: Na },
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
      use: h,
      fixup: A
    },
    s: h,
    i: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: we },
  average: { h: C }
};
function Ha({ h: e, s: t, l: r, alpha: a }) {
  e = _(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = r + t * (r < 0.5 ? r : 1 - r), o = i - (i - r) * 2 * Math.abs(e / 60 % 2 - 1), n;
  switch (Math.floor(e / 60)) {
    case 0:
      n = {
        r: i,
        g: o,
        b: 2 * r - i
      };
      break;
    case 1:
      n = {
        r: o,
        g: i,
        b: 2 * r - i
      };
      break;
    case 2:
      n = {
        r: 2 * r - i,
        g: i,
        b: o
      };
      break;
    case 3:
      n = {
        r: 2 * r - i,
        g: o,
        b: i
      };
      break;
    case 4:
      n = {
        r: o,
        g: 2 * r - i,
        b: i
      };
      break;
    case 5:
      n = {
        r: i,
        g: 2 * r - i,
        b: o
      };
      break;
    default:
      n = {
        r: 2 * r - i,
        g: 2 * r - i,
        b: 2 * r - i
      };
  }
  return n.mode = "rgb", a !== void 0 && (n.alpha = a), n;
}
function qa({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsl",
    s: i === o ? 0 : (i - o) / (1 - Math.abs(i + o - 1)),
    l: 0.5 * (i + o)
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Oa = (e, t) => {
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
}, Wa = new RegExp(`^hsla?\\(\\s*${ia}${j}${te}${j}${te}\\s*(?:,\\s*${yt}\\s*)?\\)$`), Da = (e) => {
  let t = e.match(Wa);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = Oa(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function Xa(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
  const r = { mode: "hsl" }, [, a, i, o, n] = t;
  if (a.type !== s.None) {
    if (a.type === s.Percentage) return;
    r.h = a.value;
  }
  if (i.type !== s.None) {
    if (i.type === s.Hue) return;
    r.s = i.value / 100;
  }
  if (o.type !== s.None) {
    if (o.type === s.Hue) return;
    r.l = o.value / 100;
  }
  return n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var xr = {
  mode: "hsl",
  toMode: { rgb: Ha },
  fromMode: { rgb: qa },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Xa, Da],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: h,
      fixup: A
    },
    s: h,
    l: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: we },
  average: { h: C }
};
function kr({ h: e, s: t, v: r, alpha: a }) {
  e = _(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r,
        g: r * (1 - t * i),
        b: r * (1 - t)
      };
      break;
    case 1:
      o = {
        r: r * (1 - t * i),
        g: r,
        b: r * (1 - t)
      };
      break;
    case 2:
      o = {
        r: r * (1 - t),
        g: r,
        b: r * (1 - t * i)
      };
      break;
    case 3:
      o = {
        r: r * (1 - t),
        g: r * (1 - t * i),
        b: r
      };
      break;
    case 4:
      o = {
        r: r * (1 - t * i),
        g: r * (1 - t),
        b: r
      };
      break;
    case 5:
      o = {
        r,
        g: r * (1 - t),
        b: r * (1 - t * i)
      };
      break;
    default:
      o = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return o.mode = "rgb", a !== void 0 && (o.alpha = a), o;
}
function _r({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - o / i,
    v: i
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var $r = {
  mode: "hsv",
  toMode: { rgb: kr },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: _r },
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
      use: h,
      fixup: A
    },
    s: h,
    v: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: we },
  average: { h: C }
};
function ja({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let i = t + r;
    t /= i, r /= i;
  }
  return kr({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function Ba(e) {
  let t = _r(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Fa(e, t) {
  if (!t || t[0] !== "hwb") return;
  const r = { mode: "hwb" }, [, a, i, o, n] = t;
  if (a.type !== s.None) {
    if (a.type === s.Percentage) return;
    r.h = a.value;
  }
  if (i.type !== s.None) {
    if (i.type === s.Hue) return;
    r.w = i.value / 100;
  }
  if (o.type !== s.None) {
    if (o.type === s.Hue) return;
    r.b = o.value / 100;
  }
  return n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var Ya = {
  mode: "hwb",
  toMode: { rgb: ja },
  fromMode: { rgb: Ba },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Fa],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: h,
      fixup: A
    },
    w: h,
    b: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: Aa },
  average: { h: C }
}, $e = 0.1593017578125, zr = 78.84375, ze = 0.8359375, Pe = 18.8515625, Te = 18.6875;
function Be(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / zr);
  return 1e4 * Math.pow(Math.max(0, t - ze) / (Pe - Te * t), 1 / $e);
}
function Fe(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, $e);
  return Math.pow((ze + Pe * t) / (1 + Te * t), zr);
}
var Ye = (e) => Math.max(e / 203, 0), Yt = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = Be(e + 0.008609037037932761 * t + 0.11102962500302593 * r), o = Be(e - 0.00860903703793275 * t - 0.11102962500302599 * r), n = Be(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: Ye(2.070152218389422 * i - 1.3263473389671556 * o + 0.2066510476294051 * n),
    y: Ye(0.3647385209748074 * i + 0.680566024947227 * o - 0.0453045459220346 * n),
    z: Ye(-0.049747207535812 * i - 0.0492609666966138 * o + 1.1880659249923042 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ze = (e = 0) => Math.max(e * 203, 0), Zt = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = Ze(e), o = Ze(t), n = Ze(r), l = Fe(0.3592832590121217 * i + 0.6976051147779502 * o - 0.0358915932320289 * n), d = Fe(-0.1920808463704995 * i + 1.1004767970374323 * o + 0.0753748658519118 * n), c = Fe(0.0070797844607477 * i + 0.0748396662186366 * o + 0.8433265453898765 * n), v = {
    mode: "itp",
    i: 0.5 * l + 0.5 * d,
    t: 1.61376953125 * l - 3.323486328125 * d + 1.709716796875 * c,
    p: 4.378173828125 * l - 4.24560546875 * d - 0.132568359375 * c
  };
  return a !== void 0 && (v.alpha = a), v;
}, Za = {
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
    xyz65: Yt,
    rgb: (e) => W(Yt(e))
  },
  fromMode: {
    xyz65: Zt,
    rgb: (e) => Zt(O(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: h,
    t: h,
    p: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Ua = 134.03437499999998, Ga = 16295499532821565e-27, Ue = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, $e);
  return Math.pow((ze + Pe * t) / (1 + Te * t), Ua);
}, Ge = (e = 0) => Math.max(e * 203, 0), Pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e = Ge(e), t = Ge(t), r = Ge(r);
  let i = 1.15 * e - 0.15 * r, o = 0.66 * t + 0.34 * e, n = Ue(0.41478972 * i + 0.579999 * o + 0.014648 * r), l = Ue(-0.20151 * i + 1.120649 * o + 0.0531008 * r), d = Ue(-0.0166008 * i + 0.2648 * o + 0.6684799 * r), c = (n + l) / 2, v = {
    mode: "jab",
    j: 0.44 * c / (1 - 0.56 * c) - Ga,
    a: 3.524 * n - 4.066708 * l + 0.542708 * d,
    b: 0.199076 * n + 1.096799 * l - 1.295875 * d
  };
  return a !== void 0 && (v.alpha = a), v;
}, Ja = 134.03437499999998, Ut = 16295499532821565e-27, Je = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Ja);
  return 1e4 * Math.pow((ze - t) / (Te * t - Pe), 1 / $e);
}, Ke = (e) => e / 203, Tr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + Ut) / (0.44 + 0.56 * (e + Ut)), o = Je(i + 0.13860504 * t + 0.058047316 * r), n = Je(i - 0.13860504 * t - 0.058047316 * r), l = Je(i - 0.096019242 * t - 0.8118919 * r), d = {
    mode: "xyz65",
    x: Ke(1.661373024652174 * o - 0.914523081304348 * n + 0.23136208173913045 * l),
    y: Ke(-0.3250758611844533 * o + 1.571847026732543 * n - 0.21825383453227928 * l),
    z: Ke(-0.090982811 * o - 0.31272829 * n + 1.5227666 * l)
  };
  return a !== void 0 && (d.alpha = a), d;
}, Sr = (e) => {
  let t = Pr(O(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ar = (e) => W(Tr(e)), Ka = {
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
    rgb: Sr,
    xyz65: Pr
  },
  toMode: {
    rgb: Ar,
    xyz65: Tr
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: h,
    a: h,
    b: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Gt = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, Jt = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Va = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: Jt,
    rgb: (e) => Ar(Jt(e))
  },
  fromMode: {
    rgb: (e) => Gt(Sr(e)),
    jab: Gt
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
      use: h,
      fixup: A
    },
    c: h,
    j: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: xe },
  average: { h: C }
}, Se = Math.pow(29, 3) / Math.pow(3, 3), wt = Math.pow(6, 3) / Math.pow(29, 3), Ve = (e) => Math.pow(e, 3) > wt ? Math.pow(e, 3) : (116 * e - 16) / Se, xt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz50",
    x: Ve(o) * g.X,
    y: Ve(i) * g.Y,
    z: Ve(n) * g.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, ie = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Y({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Cr = (e) => ie(xt(e)), oe = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Qe = (e) => e > wt ? Math.cbrt(e) : (Se * e + 16) / 116, kt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Qe(e / g.X), o = Qe(t / g.Y), n = Qe(r / g.Z), l = {
    mode: "lab",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ir = (e) => {
  let t = kt(oe(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Qa(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 125 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var _t = {
  mode: "lab",
  toMode: {
    xyz50: xt,
    rgb: Cr
  },
  fromMode: {
    xyz50: kt,
    rgb: Ir
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
  parse: [Qa],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: h,
    a: h,
    b: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, ei = {
  ..._t,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: yr,
    rgb: ke
  },
  fromMode: {
    xyz65: Mr,
    rgb: _e
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function ti(e, t) {
  if (!t || t[0] !== "lch") return;
  const r = { mode: "lch" }, [, a, i, o, n] = t;
  if (a.type !== s.None) {
    if (a.type === s.Hue) return;
    r.l = Math.min(Math.max(0, a.value), 100);
  }
  if (i.type !== s.None && (r.c = Math.max(0, i.type === s.Number ? i.value : i.value * 150 / 100)), o.type !== s.None) {
    if (o.type === s.Percentage) return;
    r.h = o.value;
  }
  return n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var $t = {
  mode: "lch",
  toMode: {
    lab: R,
    rgb: (e) => Cr(R(e))
  },
  fromMode: {
    rgb: (e) => E(Ir(e)),
    lab: E
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
  parse: [ti],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: h,
      fixup: A
    },
    c: h,
    l: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: xe },
  average: { h: C }
}, ri = {
  ...$t,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => R(e, "lab65"),
    rgb: (e) => ke(R(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => E(_e(e), "lch65"),
    lab65: (e) => E(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Er = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, Rr = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Nr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Lr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), ai = Nr(g.X, g.Y, g.Z), ii = Lr(g.X, g.Y, g.Z), oi = (e) => e <= wt ? Se * e : 116 * Math.cbrt(e) - 16, ct = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = oi(t / g.Y), o = Nr(e, t, r), n = Lr(e, t, r);
  !isFinite(o) || !isFinite(n) ? i = o = n = 0 : (o = 13 * i * (o - ai), n = 13 * i * (n - ii));
  let l = {
    mode: "luv",
    l: i,
    u: o,
    v: n
  };
  return a !== void 0 && (l.alpha = a), l;
}, ni = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), li = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), si = ni(g.X, g.Y, g.Z), hi = li(g.X, g.Y, g.Z), vt = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + si, o = r / (13 * e) + hi, n = g.Y * (e <= 8 ? e / Se : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: n * (9 * i) / (4 * o),
    y: n,
    z: n * (12 - 3 * i - 20 * o) / (4 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, di = (e) => Er(ct(oe(e))), ci = (e) => ie(vt(Rr(e))), vi = {
  mode: "lchuv",
  toMode: {
    luv: Rr,
    rgb: ci
  },
  fromMode: {
    rgb: di,
    luv: Er
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
      use: h,
      fixup: A
    },
    c: h,
    l: h,
    alpha: {
      use: h,
      fixup: M
    }
  },
  difference: { h: xe },
  average: { h: C }
}, ui = {
  ...B,
  mode: "lrgb",
  toMode: { rgb: Y },
  fromMode: { rgb: F },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, fi = {
  mode: "luv",
  toMode: {
    xyz50: vt,
    rgb: (e) => ie(vt(e))
  },
  fromMode: {
    xyz50: ct,
    rgb: (e) => ct(oe(e))
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
    l: h,
    u: h,
    v: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Hr = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), o = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), n = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * o - 0.0040720430116193 * n,
    a: 1.9779985324311684 * i - 2.42859224204858 * o + 0.450593709617411 * n,
    b: 0.0259040424655478 * i + 0.7827717124575296 * o - 0.8086757549230774 * n
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ae = (e) => {
  let t = Hr(F(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ne = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), o = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), n = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * o + 0.2309699031821044 * n,
    g: -1.2684379732850317 * i + 2.6097573492876887 * o - 0.3413193760026573 * n,
    b: -0.0041960761386756 * i - 0.7034186179359362 * o + 1.7076146940746117 * n
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ce = (e) => Y(ne(e));
function ut(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function be(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function pi(e, t) {
  let r, a, i, o, n, l, d, c;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, o = 0.75515197, n = 0.56771245, l = 4.0767416621, d = -3.3077115913, c = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, o = 0.1254107, n = 0.14503204, l = -1.2684380046, d = 2.6097574011, c = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, o = -0.50559606, n = 692167e-8, l = -0.0041960863, d = -0.7034186147, c = 1.707614701);
  let v = r + a * e + i * t + o * e * e + n * e * t, f = 0.3963377774 * e + 0.2158037573 * t, p = -0.1055613458 * e - 0.0638541728 * t, b = -0.0894841775 * e - 1.291485548 * t;
  {
    let y = 1 + v * f, k = 1 + v * p, w = 1 + v * b, z = y * y * y, $ = k * k * k, I = w * w * w, Z = 3 * f * y * y, U = 3 * p * k * k, G = 3 * b * w * w, J = 6 * f * f * y, K = 6 * p * p * k, V = 6 * b * b * w, D = l * z + d * $ + c * I, H = l * Z + d * U + c * G, Q = l * J + d * K + c * V;
    v = v - D * H / (H * H - 0.5 * D * Q);
  }
  return v;
}
function zt(e, t) {
  let r = pi(e, t), a = ne({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function mi(e, t, r, a, i, o = null) {
  o || (o = zt(e, t));
  let n;
  if ((r - i) * o[1] - (o[0] - i) * a <= 0) n = o[1] * i / (a * o[0] + o[1] * (i - r));
  else {
    n = o[1] * (i - 1) / (a * (o[0] - 1) + o[1] * (i - r));
    {
      let l = r - i, d = a, c = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, f = -0.0894841775 * e - 1.291485548 * t, p = l + d * c, b = l + d * v, y = l + d * f;
      {
        let k = i * (1 - n) + n * r, w = n * a, z = k + w * c, $ = k + w * v, I = k + w * f, Z = z * z * z, U = $ * $ * $, G = I * I * I, J = 3 * p * z * z, K = 3 * b * $ * $, V = 3 * y * I * I, D = 6 * p * p * z, H = 6 * b * b * $, Q = 6 * y * y * I, Et = 4.0767416621 * Z - 3.3077115913 * U + 0.2309699292 * G - 1, Ie = 4.0767416621 * J - 3.3077115913 * K + 0.2309699292 * V, Yr = 4.0767416621 * D - 3.3077115913 * H + 0.2309699292 * Q, Rt = Ie / (Ie * Ie - 0.5 * Et * Yr), Ee = -Et * Rt, Nt = -1.2684380046 * Z + 2.6097574011 * U - 0.3413193965 * G - 1, Re = -1.2684380046 * J + 2.6097574011 * K - 0.3413193965 * V, Zr = -1.2684380046 * D + 2.6097574011 * H - 0.3413193965 * Q, Lt = Re / (Re * Re - 0.5 * Nt * Zr), Ne = -Nt * Lt, Ht = -0.0041960863 * Z - 0.7034186147 * U + 1.707614701 * G - 1, Le = -0.0041960863 * J - 0.7034186147 * K + 1.707614701 * V, Ur = -0.0041960863 * D - 0.7034186147 * H + 1.707614701 * Q, qt = Le / (Le * Le - 0.5 * Ht * Ur), He = -Ht * qt;
        Ee = Rt >= 0 ? Ee : 1e6, Ne = Lt >= 0 ? Ne : 1e6, He = qt >= 0 ? He : 1e6, n += Math.min(Ee, Math.min(Ne, He));
      }
    }
  }
  return n;
}
function Pt(e, t, r = null) {
  r || (r = zt(e, t));
  let a = r[0], i = r[1];
  return [i / a, i / (1 - a)];
}
function qr(e, t, r) {
  let a = zt(t, r), i = mi(t, r, e, 1, e, a), o = Pt(t, r, a), n = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), d = i / Math.min(e * o[0], (1 - e) * o[1]), c = e * n, v = (1 - e) * l, f = 0.9 * d * Math.sqrt(Math.sqrt(1 / (1 / (c * c * c * c) + 1 / (v * v * v * v))));
  return c = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (c * c) + 1 / (v * v))),
    f,
    i
  ];
}
function Kt(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: ut(t)
  };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let o = Math.sqrt(r * r + a * a);
  if (!o)
    return i.s = 0, i;
  let [n, l, d] = qr(t, r / o, a / o), c;
  if (o < l) {
    let v = 0, f = 0.8 * n, p = 1 - f / l;
    c = (o - v) / (f + p * (o - v)) * 0.8;
  } else {
    let v = l, f = 0.2 * l * l * 1.25 * 1.25 / n, p = 1 - f / (d - l);
    c = 0.8 + 0.2 * ((o - v) / (f + p * (o - v)));
  }
  return c && (i.s = c, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function Vt(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: be(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let o = Math.cos(t / 180 * Math.PI), n = Math.sin(t / 180 * Math.PI), [l, d, c] = qr(i.l, o, n), v, f, p, b;
  r < 0.8 ? (v = 1.25 * r, f = 0, p = 0.8 * l, b = 1 - p / d) : (v = 5 * (r - 0.8), f = d, p = 0.2 * d * d * 1.25 * 1.25 / l, b = 1 - p / (c - d));
  let y = f + v * p / (1 - b * v);
  return i.a = y * o, i.b = y * n, i;
}
var bi = {
  ...xr,
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
    oklab: Kt,
    rgb: (e) => Kt(Ae(e))
  },
  toMode: {
    oklab: Vt,
    rgb: (e) => Ce(Vt(e))
  }
};
function Qt(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), o = i ? r / i : 1, n = i ? a / i : 1, [l, d] = Pt(o, n), c = 0.5, v = 1 - c / l, f = d / (i + t * d), p = f * t, b = f * i, y = be(p), k = b * y / p, w = ne({
    l: y,
    a: o * k,
    b: n * k
  }), z = Math.cbrt(1 / Math.max(w.r, w.g, w.b, 0));
  t = t / z, i = i / z * ut(t) / t, t = ut(t);
  const $ = {
    mode: "okhsv",
    s: i ? (c + d) * b / (d * c + d * v * b) : 0,
    v: t ? t / p : 0
  };
  return $.s && ($.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && ($.alpha = e.alpha), $;
}
function er(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, o = Math.cos(r / 180 * Math.PI), n = Math.sin(r / 180 * Math.PI), [l, d] = Pt(o, n), c = 0.5, v = 1 - c / l, f = 1 - a * c / (c + d - d * v * a), p = a * d * c / (c + d - d * v * a), b = be(f), y = p * b / f, k = ne({
    l: b,
    a: o * y,
    b: n * y
  }), w = Math.cbrt(1 / Math.max(k.r, k.g, k.b, 0)), z = be(i * f), $ = p * z / f;
  return t.l = z * w, t.a = $ * o * w, t.b = $ * n * w, t;
}
var gi = {
  ...$r,
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
    oklab: Qt,
    rgb: (e) => Qt(Ae(e))
  },
  toMode: {
    oklab: er,
    rgb: (e) => Ce(er(e))
  }
};
function yi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 0.4 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var Mi = {
  ..._t,
  mode: "oklab",
  toMode: {
    lrgb: ne,
    rgb: Ce
  },
  fromMode: {
    lrgb: Hr,
    rgb: Ae
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [yi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function wi(e, t) {
  if (!t || t[0] !== "oklch") return;
  const r = { mode: "oklch" }, [, a, i, o, n] = t;
  if (a.type !== s.None) {
    if (a.type === s.Hue) return;
    r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1);
  }
  if (i.type !== s.None && (r.c = Math.max(0, i.type === s.Number ? i.value : i.value * 0.4 / 100)), o.type !== s.None) {
    if (o.type === s.Percentage) return;
    r.h = o.value;
  }
  return n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var xi = {
  ...$t,
  mode: "oklch",
  toMode: {
    oklab: (e) => R(e, "oklab"),
    rgb: (e) => Ce(R(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => E(Ae(e), "oklch"),
    oklab: (e) => E(e, "oklch")
  },
  parse: [wi],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, tr = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, rr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Y({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (i.alpha = a), i;
}, ki = {
  ...B,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => rr(O(e)),
    xyz65: rr
  },
  toMode: {
    rgb: (e) => W(tr(e)),
    xyz65: tr
  }
}, et = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, ar = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: et(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: et(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: et(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, tt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, ir = (e) => {
  let t = tt(e.r), r = tt(e.g), a = tt(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, _i = {
  ...B,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: ar,
    rgb: (e) => ar(oe(e))
  },
  toMode: {
    xyz50: ir,
    rgb: (e) => ie(ir(e))
  }
}, $i = 1.09929682680944, zi = 0.018053968510807, rt = (e) => {
  const t = Math.abs(e);
  return t > zi ? (Math.sign(e) || 1) * ($i * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, or = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: rt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: rt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: rt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, nr = 1.09929682680944, Pi = 0.018053968510807, at = (e = 0) => {
  let t = Math.abs(e);
  return t < Pi * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + nr - 1) / nr, 1 / 0.45);
}, lr = (e) => {
  let t = at(e.r), r = at(e.g), a = at(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ti = {
  ...B,
  mode: "rec2020",
  fromMode: {
    xyz65: or,
    rgb: (e) => or(O(e))
  },
  toMode: {
    xyz65: lr,
    rgb: (e) => W(lr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, q = 0.0037930732552754493, Or = Math.cbrt(q), it = (e) => Math.cbrt(e) - Or, Si = (e) => {
  const { r: t, g: r, b: a, alpha: i } = F(e), o = it(0.3 * t + 0.622 * r + 0.078 * a + q), n = it(0.23 * t + 0.692 * r + 0.078 * a + q), l = it(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + q), d = {
    mode: "xyb",
    x: (o - n) / 2,
    y: (o + n) / 2,
    b: l - (o + n) / 2
  };
  return i !== void 0 && (d.alpha = i), d;
}, ot = (e) => Math.pow(e + Or, 3), Ai = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = ot(e + t) - q, o = ot(t - e) - q, n = ot(r + t) - q, l = Y({
    r: 11.031566904639861 * i - 9.866943908131562 * o - 0.16462299650829934 * n,
    g: -3.2541473810744237 * i + 4.418770377582723 * o - 0.16462299650829934 * n,
    b: -3.6588512867136815 * i + 2.7129230459360922 * o + 1.9459282407775895 * n
  });
  return a !== void 0 && (l.alpha = a), l;
}, Ci = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: Ai },
  fromMode: { rgb: Si },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: h,
    y: h,
    b: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Ii = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: ie,
    lab: kt
  },
  fromMode: {
    rgb: oe,
    lab: xt
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
    x: h,
    y: h,
    z: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Ei = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ri = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ni = {
  mode: "xyz65",
  toMode: {
    rgb: W,
    xyz50: Ei
  },
  fromMode: {
    rgb: O,
    xyz50: Ri
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
    x: h,
    y: h,
    z: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Li = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Hi = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, qi = {
  mode: "yiq",
  toMode: { rgb: Hi },
  fromMode: { rgb: Li },
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
    y: h,
    i: h,
    q: h,
    alpha: {
      use: h,
      fixup: M
    }
  }
}, Oi = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, Wi = (e = 4) => (t) => typeof t == "number" ? Oi(t, e) : t, So = Wi(2), Di = (e) => Math.max(0, Math.min(1, e || 0)), nt = (e) => Math.round(Di(e) * 255), Xi = Mt("rgb"), Ao = Mt("hsl"), ji = (e) => {
  if (e === void 0) return;
  let t = nt(e.r), r = nt(e.g), a = nt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, Wr = (e) => ji(Xi(e)), Co = m(_a), Io = m(Ca), Eo = m(Ia), Ro = m(Ea), No = m(La), Lo = m(xr), Ho = m($r), qo = m(Ya), Oo = m(Za), Wo = m(Ka), Do = m(Va), Xo = m(_t), jo = m(ei), Bo = m($t), Fo = m(ri), Yo = m(vi), Zo = m(ui), Uo = m(fi), Go = m(bi), Jo = m(gi), Ko = m(Mi), ft = m(xi), Vo = m(ki), Qo = m(_i), en = m(Ti), tn = m(B), rn = m(Ci), an = m(Ii), on = m(Ni), nn = m(qi), Dr = (e, t = "l") => e.sort((r, a) => Math.sign(ft({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - ft({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Tt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), Bi = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((a) => {
    let i = 1e4, o = 0;
    t.forEach((n, l) => {
      const d = Tt(a, n);
      (typeof i > "u" || i > d) && (i = d, o = l);
    }), r[o].points.push(a);
  }), r;
}, Fi = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], Yi = (e, t) => {
  let r = Dr(Zi(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const o = Bi(e, r).map((n) => n.points.length > 0 ? Fi(n.points) : null);
    if (o.every((n, l) => n && Tt(n, r[l]) < 1e-3)) break;
    r = o;
  }
  return r;
}, Zi = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((d) => Math.min(...r.map((c) => Tt(d, c)))), i = a.reduce((d, c) => d + c, 0), o = a.map((d) => d / i);
    let n = 0;
    const l = Math.random();
    for (let d = 0; d < o.length; d++)
      if (n += o[d], l < n) {
        r.push(e[d]);
        break;
      }
  }
  return r;
}, Ui = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((o) => o?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, Gi = async (e) => {
  const t = await Ui(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const i = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, o = r.width * r.height || 0, n = 1 / 255, l = [];
  for (let d = 0; d < o; d++) {
    const c = d * 4;
    l.push(i instanceof Float32Array || i instanceof Float16Array ? [
      i?.[c + 0] || 0,
      i?.[c + 1] || 0,
      i?.[c + 2] || 0
    ] : [
      (i?.[c + 0] || 0) * n,
      (i?.[c + 1] || 0) * n,
      (i?.[c + 2] || 0) * n
    ]);
  }
  return l;
}, Ji = async (e) => {
  const t = await Gi(e);
  return Dr(Yi(t, 4), "h");
}, Ki = "rs-wallpaper-theme", Vi = "rs-wallpaper-primary", Qi = "rs-wallpaper-theme-src", Xr = Ki, eo = Vi, sr = Qi, to = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], ro = (e) => {
  const [t, r, a] = e;
  if (![
    t,
    r,
    a
  ].every((n) => Number.isFinite(n))) return null;
  const i = Wr({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  if (!i) return null;
  const o = ft({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  return {
    rgb: e,
    hex: i,
    l: o?.l ?? 0.5,
    c: o?.c ?? 0,
    h: o?.h ?? 0
  };
}, ao = (e) => {
  const t = e.map(ro).filter(Boolean);
  if (!t.length) return null;
  const r = t.filter((c) => c.l >= 0.18 && c.l <= 0.88 && c.c >= 0.02).sort((c, v) => v.c - c.c || Math.abs(v.l - 0.55) - Math.abs(c.l - 0.55)), a = r.length ? r : [...t].sort((c, v) => v.c - c.c), i = a[0];
  if (!i) return null;
  const o = (c, v) => {
    const f = Math.abs(c - v) % 360;
    return f > 180 ? 360 - f : f;
  }, n = (c) => {
    const v = a.filter((f) => !c.includes(f));
    if (!v.length) {
      const f = c[c.length - 1] ?? i, p = Wr({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, f.l + (c.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, f.c * 0.85),
        h: f.h
      });
      return {
        ...f,
        hex: p || f.hex,
        l: f.l
      };
    }
    return [...v].sort((f, p) => Math.min(...c.map((b) => o(p.h, b.h))) - Math.min(...c.map((b) => o(f.h, b.h))) || p.c - f.c)[0] ?? v[0];
  }, l = n([i]), d = n([i, l]);
  return {
    primary: i.hex,
    secondary: l.hex,
    tertiary: d.hex
  };
}, io = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, de = (e) => {
  for (const t of io()) for (const [r, a] of to) t.style.setProperty(r, e[a]);
  document.querySelectorAll(".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings']").forEach((t) => {
    t.style.setProperty("--color-primary", e.primary), t.style.setProperty("--base-color", e.primary), t.style.setProperty("--color-secondary", e.secondary), t.style.setProperty("--color-tertiary", e.tertiary);
  });
  try {
    localStorage.setItem(Xr, JSON.stringify(e)), localStorage.setItem(eo, e.primary);
  } catch {
  }
  document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
    source: "wallpaper",
    seeds: e
  } }));
}, pt = () => {
  try {
    const e = localStorage.getItem(Xr);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, ge = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`;
  if (!t?.force) try {
    if (localStorage.getItem(sr) === r) {
      const a = pt();
      if (a)
        return de(a), a;
    }
  } catch {
  }
  try {
    const a = await Ji(e), i = ao(a);
    if (!i) return null;
    de(i);
    try {
      localStorage.setItem(sr, r);
    } catch {
    }
    return i;
  } catch (a) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", a);
    const i = pt();
    return i ? (de(i), i) : null;
  }
}, oo = () => {
  const e = pt();
  return e && de(e), e;
}, he = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new Map([]), hr = Jr(), ce = (e) => e?.naturalWidth || e?.width || 1, ve = (e) => e?.naturalHeight || e?.height || 1, lo = (e) => {
  const t = {
    alpha: !0,
    desynchronized: !0,
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0
  };
  for (const r of [
    "rec2100-hlg",
    "display-p3",
    "srgb"
  ]) try {
    const a = e.getContext("2d", {
      ...t,
      colorSpace: r
    });
    if (a) return a;
  } catch {
  }
  try {
    return e.getContext("2d", t);
  } catch {
    return e.getContext("2d");
  }
}, ln = (e, t) => {
  no.set(e, t);
}, so = (e, t, r = 1, a, i = 0) => {
  const o = e.canvas;
  e.translate(o.width / 2, o.height / 2), e.rotate((-i || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(ce(t) / 2) * r, -(ve(t) / 2) * r);
}, ho = (e) => {
  if (!he.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image)) {
    const t = createImageBitmap(e).catch((r) => {
      throw he.delete(e), r;
    });
    he.set(e, t);
  }
  return he.get(e);
}, jr = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[jr] ??= /* @__PURE__ */ new WeakMap();
var dr = globalThis[jr], co = (e, t) => {
  const r = dr.get(e);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return dr.set(e, a), a;
}, mt = null;
typeof HTMLCanvasElement < "u" ? mt = class extends HTMLCanvasElement {
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
  get #i() {
    const t = this.getAttribute("data-orient") ?? this.getAttribute("orient") ?? "0", r = Number.parseInt(t, 10);
    return Number.isFinite(r) ? r : 0;
  }
  set #i(t) {
    const r = String(t);
    this.setAttribute("data-orient", r), this.setAttribute("orient", r);
  }
  attributeChangedCallback(t, r, a) {
    t == "data-src" && this.#o(a), (t == "data-orient" || t == "orient") && this.#a(this.#r);
  }
  connectedCallback() {
    const t = this.parentNode;
    this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || t?.clientWidth || 1, 1), t?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || t?.clientHeight || 1, 1), t?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], this.#o(this.#t = this.dataset.src || this.#t), this.image && this.#a(this.#r);
  }
  constructor() {
    super();
    const t = this, r = this.parentNode, a = () => {
      const i = this.#e;
      this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], (i?.[0] != this.#e[0] || i?.[1] != this.#e[1]) && this.#a(this.#r);
    };
    hr?.shedule?.(() => {
      this.ctx = lo(t);
      try {
        this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" });
      } catch {
      }
      this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", "display-p3"), this.style.setProperty("background-color", "black", "important"), this.style.setProperty("opacity", "1", "important"), a(), new ResizeObserver((i) => {
        for (const o of i) {
          const n = o?.devicePixelContentBoxSize?.[0];
          if (n) {
            const l = this.#e;
            this.#e = [Math.max(n.inlineSize || this.width, 1), Math.max(n.blockSize || this.height, 1)], (l?.[0] != this.#e[0] || l?.[1] != this.#e[1]) && this.#a(this.#r);
          }
        }
      }).observe(this, { box: "device-pixel-content-box" }), this.#o(this.#t = this.dataset.src || this.#t), this.image && this.#a(this.#r || this.#t);
    });
  }
  async $useImageAsSource(t, r) {
    r ||= this.#t;
    const a = t instanceof ImageBitmap ? t : await ho(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const o = this.#i % 2 || 0, n = ce(i) <= ve(i) ? 1 : 0, l = Math.max(r[["height", "width"][o]] / (n ? ve(i) : ce(i)), r[["width", "height"][o]] / (n ? ce(i) : ve(i)));
      a.save(), a.clearRect(0, 0, r.width, r.height), so(a, i, l, n, this.#i), a.drawImage(i, 0, 0, i.width * l, i.height * l), a.restore();
    }
  }
  #o(t) {
    const r = t || this.#t;
    return this.#t = r, fetch(t, {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (a) => this.$useImageAsSource(await a.blob(), r)?.catch(console.warn.bind(console)))?.catch?.(console.warn.bind(console));
  }
  #a(t) {
    const r = this.ctx;
    this.image && r && (t == this.#t || !t) && hr?.shedule?.(co(this.$renderPass, this));
  }
} : mt = class {
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
  #i = "";
  #o = "";
  #a = [1, 1];
  ctx = null;
  image = null;
};
try {
  customElements.define("ui-canvas", mt, { extends: "canvas" });
} catch {
}
var Br = "rs-wallpaper-image", N = "/assets/wallpaper.jpg", bt = "idb:rs-wallpaper", vo = "cwsp-wallpaper-v1", L = "blobs", St = "current", Fr = 512e3, T = null, At = () => Kr?.[Gr()] ?? 0, ye = () => {
  if (T && T.startsWith("blob:")) try {
    URL.revokeObjectURL(T);
  } catch {
  }
  T = null;
}, Ct = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(vo, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(L) || a.createObjectStore(L);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), uo = async (e) => {
  const t = await Ct();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(L, "readwrite");
      i.objectStore(L).put(e, St), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, cr = async () => {
  const e = await Ct();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(L, "readonly").objectStore(L).get(St);
      a.onsuccess = () => {
        const i = a.result;
        t(i instanceof Blob ? i : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, fo = async () => {
  try {
    const e = await Ct();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(L, "readwrite");
        a.objectStore(L).delete(St), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, It = () => {
  try {
    const e = localStorage.getItem(Br);
    return e && e.trim() ? e.trim() : N;
  } catch {
    return N;
  }
}, Me = (e) => {
  try {
    return localStorage.setItem(Br, e), !0;
  } catch {
    return !1;
  }
}, po = (e) => e.startsWith("data:") || e.startsWith("blob:"), mo = async () => {
  const e = It();
  if (e === "idb:rs-wallpaper" || e.startsWith("idb:")) {
    try {
      const t = await cr();
      if (t)
        return ye(), T = URL.createObjectURL(t), T;
    } catch (t) {
      console.warn("[fest/image] wallpaper IDB restore failed", t);
    }
    return N;
  }
  if (e.startsWith("data:") && e.length > Fr) try {
    const t = await cr();
    if (t)
      return ye(), T = URL.createObjectURL(t), Me(bt), T;
  } catch {
  }
  return e || N;
}, dn = () => It(), vr = (e) => {
  const t = () => {
    const r = At(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), Vr(t);
}, cn = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = At(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, ae = (e) => {
  const t = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim() || "#5b86eb";
  e.style.background = `radial-gradient(circle at 15% 20%, color-mix(in oklab, ${t} 45%, transparent) 0%, transparent 40%), radial-gradient(circle at 75% 72%, color-mix(in oklab, ${t} 35%, transparent) 0%, transparent 43%)`;
}, gt = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(At());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, bo = async (e) => (await fetch(e)).blob(), go = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return yo(N), N;
  ye(), T = URL.createObjectURL(e), gt(T), ge(T, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ae);
  });
  try {
    await uo(e), Me(bt);
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, o) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => o(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !Me(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: bt,
      url: T
    } }));
  } catch {
  }
  return T;
}, vn = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "radial-gradient(circle at 18% 12%, #1b2a45 0%, #0f1728 42%, #060910 100%)";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "black", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const i = It(), o = i === "idb:rs-wallpaper" || i.startsWith("idb:") || i.startsWith("data:") ? N : i;
  a.setAttribute("data-src", o);
  const n = vr(a);
  return oo(), ae(r), mo().then((l) => (a.setAttribute("data-src", l), vr(a), ge(l).then(() => ae(r)))), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: n
  };
}, yo = (e) => {
  const t = String(e || "").trim() || N;
  if (po(t) || t.length > Fr) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await bo(t);
        await go(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r), gt(t), ge(t, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(ae);
        });
      }
    })();
    return;
  }
  fo(), ye(), Me(t) || console.warn("[fest/image] wallpaper pointer write failed"), gt(t), ge(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ae);
  });
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: t,
      url: t
    } }));
  } catch {
  }
};
export {
  mt as UICanvas,
  bt as WALLPAPER_IDB_MARKER,
  Vi as WALLPAPER_PRIMARY_STORAGE_KEY,
  Qi as WALLPAPER_THEME_SRC_STORAGE_KEY,
  Ki as WALLPAPER_THEME_STORAGE_KEY,
  ge as applyThemeFromWallpaper,
  de as applyWallpaperThemeSeeds,
  dr as bindCache,
  ln as callByFrame,
  so as cover,
  ho as createImageBitmapCache,
  wo as electronAPI,
  Ji as getDominantColors,
  dn as getWallpaperStoragePointer,
  vn as initializeAppCanvasLayer,
  pt as loadCachedWallpaperTheme,
  xo as qualityMode,
  ao as rankWallpaperSeeds,
  mo as resolveAppWallpaperUrl,
  oo as restoreWallpaperThemeCache,
  yo as setAppWallpaper,
  go as setAppWallpaperFromBlob,
  cn as syncAppWallpaperOrient,
  vr as syncCanvasOrient,
  io as themeHosts
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGdldENvcnJlY3RPcmllbnRhdGlvbiwgbWFrZVJBRkN5Y2xlLCBvcmllbnRhdGlvbk51bWJlck1hcCwgd2hlbkFueVNjcmVlbkNoYW5nZXMgfSBmcm9tIFwiQGZlc3QtbGliL2RvbVwiO1xuXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9Db25maWcudHNcbnZhciBlbGVjdHJvbkFQSSA9IFwiZWxlY3Ryb25CcmlkZ2VcIjtcbnZhciBxdWFsaXR5TW9kZSA9IHsgXCJmYXN0XCI6IHtcblx0ZGl2aXNvcjogNCxcblx0ZmlsdGVyOiBcImJsdXIoNHB4KVwiLFxuXHRzYW1wbGluZzogMTI4XG59IH07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU51bWJlci5qc1xudmFyIHBhcnNlTnVtYmVyID0gKGNvbG9yLCBsZW4pID0+IHtcblx0aWYgKHR5cGVvZiBjb2xvciAhPT0gXCJudW1iZXJcIikgcmV0dXJuO1xuXHRpZiAobGVuID09PSAzKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDggJiAxNSB8IGNvbG9yID4+IDQgJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA0ICYgMTUgfCBjb2xvciAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA0KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDEyICYgMTUgfCBjb2xvciA+PiA4ICYgMjQwKSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA2KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA4KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDI0ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGI6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY29sb3JzL25hbWVkLmpzXG52YXIgbmFtZWQgPSB7XG5cdGFsaWNlYmx1ZTogMTU3OTIzODMsXG5cdGFudGlxdWV3aGl0ZTogMTY0NDQzNzUsXG5cdGFxdWE6IDY1NTM1LFxuXHRhcXVhbWFyaW5lOiA4Mzg4NTY0LFxuXHRhenVyZTogMTU3OTQxNzUsXG5cdGJlaWdlOiAxNjExOTI2MCxcblx0YmlzcXVlOiAxNjc3MDI0NCxcblx0YmxhY2s6IDAsXG5cdGJsYW5jaGVkYWxtb25kOiAxNjc3MjA0NSxcblx0Ymx1ZTogMjU1LFxuXHRibHVldmlvbGV0OiA5MDU1MjAyLFxuXHRicm93bjogMTA4MjQyMzQsXG5cdGJ1cmx5d29vZDogMTQ1OTYyMzEsXG5cdGNhZGV0Ymx1ZTogNjI2NjUyOCxcblx0Y2hhcnRyZXVzZTogODM4ODM1Mixcblx0Y2hvY29sYXRlOiAxMzc4OTQ3MCxcblx0Y29yYWw6IDE2NzQ0MjcyLFxuXHRjb3JuZmxvd2VyYmx1ZTogNjU5MTk4MSxcblx0Y29ybnNpbGs6IDE2Nzc1Mzg4LFxuXHRjcmltc29uOiAxNDQyMzEwMCxcblx0Y3lhbjogNjU1MzUsXG5cdGRhcmtibHVlOiAxMzksXG5cdGRhcmtjeWFuOiAzNTcyMyxcblx0ZGFya2dvbGRlbnJvZDogMTIwOTI5MzksXG5cdGRhcmtncmF5OiAxMTExOTAxNyxcblx0ZGFya2dyZWVuOiAyNTYwMCxcblx0ZGFya2dyZXk6IDExMTE5MDE3LFxuXHRkYXJra2hha2k6IDEyNDMzMjU5LFxuXHRkYXJrbWFnZW50YTogOTEwOTY0Myxcblx0ZGFya29saXZlZ3JlZW46IDU1OTc5OTksXG5cdGRhcmtvcmFuZ2U6IDE2NzQ3NTIwLFxuXHRkYXJrb3JjaGlkOiAxMDA0MDAxMixcblx0ZGFya3JlZDogOTEwOTUwNCxcblx0ZGFya3NhbG1vbjogMTUzMDg0MTAsXG5cdGRhcmtzZWFncmVlbjogOTQxOTkxOSxcblx0ZGFya3NsYXRlYmx1ZTogNDczNDM0Nyxcblx0ZGFya3NsYXRlZ3JheTogMzEwMDQ5NSxcblx0ZGFya3NsYXRlZ3JleTogMzEwMDQ5NSxcblx0ZGFya3R1cnF1b2lzZTogNTI5NDUsXG5cdGRhcmt2aW9sZXQ6IDk2OTk1MzksXG5cdGRlZXBwaW5rOiAxNjcxNjk0Nyxcblx0ZGVlcHNreWJsdWU6IDQ5MTUxLFxuXHRkaW1ncmF5OiA2OTA4MjY1LFxuXHRkaW1ncmV5OiA2OTA4MjY1LFxuXHRkb2RnZXJibHVlOiAyMDAzMTk5LFxuXHRmaXJlYnJpY2s6IDExNjc0MTQ2LFxuXHRmbG9yYWx3aGl0ZTogMTY3NzU5MjAsXG5cdGZvcmVzdGdyZWVuOiAyMjYzODQyLFxuXHRmdWNoc2lhOiAxNjcxMTkzNSxcblx0Z2FpbnNib3JvOiAxNDQ3NDQ2MCxcblx0Z2hvc3R3aGl0ZTogMTYzMTY2NzEsXG5cdGdvbGQ6IDE2NzY2NzIwLFxuXHRnb2xkZW5yb2Q6IDE0MzI5MTIwLFxuXHRncmF5OiA4NDIxNTA0LFxuXHRncmVlbjogMzI3NjgsXG5cdGdyZWVueWVsbG93OiAxMTQwMzA1NSxcblx0Z3JleTogODQyMTUwNCxcblx0aG9uZXlkZXc6IDE1Nzk0MTYwLFxuXHRob3RwaW5rOiAxNjczODc0MCxcblx0aW5kaWFucmVkOiAxMzQ1ODUyNCxcblx0aW5kaWdvOiA0OTE1MzMwLFxuXHRpdm9yeTogMTY3NzcyMDAsXG5cdGtoYWtpOiAxNTc4NzY2MCxcblx0bGF2ZW5kZXI6IDE1MTMyNDEwLFxuXHRsYXZlbmRlcmJsdXNoOiAxNjc3MzM2NSxcblx0bGF3bmdyZWVuOiA4MTkwOTc2LFxuXHRsZW1vbmNoaWZmb246IDE2Nzc1ODg1LFxuXHRsaWdodGJsdWU6IDExMzkzMjU0LFxuXHRsaWdodGNvcmFsOiAxNTc2MTUzNixcblx0bGlnaHRjeWFuOiAxNDc0NTU5OSxcblx0bGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDE2NDQ4MjEwLFxuXHRsaWdodGdyYXk6IDEzODgyMzIzLFxuXHRsaWdodGdyZWVuOiA5NDk4MjU2LFxuXHRsaWdodGdyZXk6IDEzODgyMzIzLFxuXHRsaWdodHBpbms6IDE2NzU4NDY1LFxuXHRsaWdodHNhbG1vbjogMTY3NTI3NjIsXG5cdGxpZ2h0c2VhZ3JlZW46IDIxNDI4OTAsXG5cdGxpZ2h0c2t5Ymx1ZTogODkwMDM0Nixcblx0bGlnaHRzbGF0ZWdyYXk6IDc4MzM3NTMsXG5cdGxpZ2h0c2xhdGVncmV5OiA3ODMzNzUzLFxuXHRsaWdodHN0ZWVsYmx1ZTogMTE1ODQ3MzQsXG5cdGxpZ2h0eWVsbG93OiAxNjc3NzE4NCxcblx0bGltZTogNjUyODAsXG5cdGxpbWVncmVlbjogMzMyOTMzMCxcblx0bGluZW46IDE2NDQ1NjcwLFxuXHRtYWdlbnRhOiAxNjcxMTkzNSxcblx0bWFyb29uOiA4Mzg4NjA4LFxuXHRtZWRpdW1hcXVhbWFyaW5lOiA2NzM3MzIyLFxuXHRtZWRpdW1ibHVlOiAyMDUsXG5cdG1lZGl1bW9yY2hpZDogMTIyMTE2NjcsXG5cdG1lZGl1bXB1cnBsZTogOTY2MjY4Myxcblx0bWVkaXVtc2VhZ3JlZW46IDM5NzgwOTcsXG5cdG1lZGl1bXNsYXRlYmx1ZTogODA4Nzc5MCxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IDY0MTU0LFxuXHRtZWRpdW10dXJxdW9pc2U6IDQ3NzIzMDAsXG5cdG1lZGl1bXZpb2xldHJlZDogMTMwNDcxNzMsXG5cdG1pZG5pZ2h0Ymx1ZTogMTY0NDkxMixcblx0bWludGNyZWFtOiAxNjEyMTg1MCxcblx0bWlzdHlyb3NlOiAxNjc3MDI3Myxcblx0bW9jY2FzaW46IDE2NzcwMjI5LFxuXHRuYXZham93aGl0ZTogMTY3Njg2ODUsXG5cdG5hdnk6IDEyOCxcblx0b2xkbGFjZTogMTY2NDM1NTgsXG5cdG9saXZlOiA4NDIxMzc2LFxuXHRvbGl2ZWRyYWI6IDcwNDg3MzksXG5cdG9yYW5nZTogMTY3NTM5MjAsXG5cdG9yYW5nZXJlZDogMTY3MjkzNDQsXG5cdG9yY2hpZDogMTQzMTU3MzQsXG5cdHBhbGVnb2xkZW5yb2Q6IDE1NjU3MTMwLFxuXHRwYWxlZ3JlZW46IDEwMDI1ODgwLFxuXHRwYWxldHVycXVvaXNlOiAxMTUyOTk2Nixcblx0cGFsZXZpb2xldHJlZDogMTQzODEyMDMsXG5cdHBhcGF5YXdoaXA6IDE2NzczMDc3LFxuXHRwZWFjaHB1ZmY6IDE2NzY3NjczLFxuXHRwZXJ1OiAxMzQ2ODk5MSxcblx0cGluazogMTY3NjEwMzUsXG5cdHBsdW06IDE0NTI0NjM3LFxuXHRwb3dkZXJibHVlOiAxMTU5MTkxMCxcblx0cHVycGxlOiA4Mzg4NzM2LFxuXHRyZWJlY2NhcHVycGxlOiA2Njk3ODgxLFxuXHRyZWQ6IDE2NzExNjgwLFxuXHRyb3N5YnJvd246IDEyMzU3NTE5LFxuXHRyb3lhbGJsdWU6IDQyODY5NDUsXG5cdHNhZGRsZWJyb3duOiA5MTI3MTg3LFxuXHRzYWxtb246IDE2NDE2ODgyLFxuXHRzYW5keWJyb3duOiAxNjAzMjg2NCxcblx0c2VhZ3JlZW46IDMwNTAzMjcsXG5cdHNlYXNoZWxsOiAxNjc3NDYzOCxcblx0c2llbm5hOiAxMDUwNjc5Nyxcblx0c2lsdmVyOiAxMjYzMjI1Nixcblx0c2t5Ymx1ZTogODkwMDMzMSxcblx0c2xhdGVibHVlOiA2OTcwMDYxLFxuXHRzbGF0ZWdyYXk6IDczNzI5NDQsXG5cdHNsYXRlZ3JleTogNzM3Mjk0NCxcblx0c25vdzogMTY3NzU5MzAsXG5cdHNwcmluZ2dyZWVuOiA2NTQwNyxcblx0c3RlZWxibHVlOiA0NjIwOTgwLFxuXHR0YW46IDEzODA4NzgwLFxuXHR0ZWFsOiAzMjg5Nixcblx0dGhpc3RsZTogMTQyMDQ4ODgsXG5cdHRvbWF0bzogMTY3MzcwOTUsXG5cdHR1cnF1b2lzZTogNDI1MTg1Nixcblx0dmlvbGV0OiAxNTYzMTA4Nixcblx0d2hlYXQ6IDE2MTEzMzMxLFxuXHR3aGl0ZTogMTY3NzcyMTUsXG5cdHdoaXRlc21va2U6IDE2MTE5Mjg1LFxuXHR5ZWxsb3c6IDE2Nzc2OTYwLFxuXHR5ZWxsb3dncmVlbjogMTAxNDUwNzRcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU5hbWVkLmpzXG52YXIgcGFyc2VOYW1lZCA9IChjb2xvcikgPT4ge1xuXHRyZXR1cm4gcGFyc2VOdW1iZXIobmFtZWRbY29sb3IudG9Mb3dlckNhc2UoKV0sIDYpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlSGV4LmpzXG52YXIgaGV4ID0gL14jPyhbMC05YS1mXXs4fXxbMC05YS1mXXs2fXxbMC05YS1mXXs0fXxbMC05YS1mXXszfSkkL2k7XG52YXIgcGFyc2VIZXggPSAoY29sb3IpID0+IHtcblx0bGV0IG1hdGNoO1xuXHRyZXR1cm4gKG1hdGNoID0gY29sb3IubWF0Y2goaGV4KSkgPyBwYXJzZU51bWJlcihwYXJzZUludChtYXRjaFsxXSwgMTYpLCBtYXRjaFsxXS5sZW5ndGgpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9yZWdleC5qc1xudmFyIG51bSQxID0gXCIoWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcIjtcbnZhciBudW1fbm9uZSA9IGAoPzoke251bSQxfXxub25lKWA7XG52YXIgcGVyID0gYCR7bnVtJDF9JWA7XG52YXIgcGVyX25vbmUgPSBgKD86JHtudW0kMX0lfG5vbmUpYDtcbnZhciBudW1fcGVyID0gYCg/OiR7bnVtJDF9JXwke251bSQxfSlgO1xudmFyIG51bV9wZXJfbm9uZSA9IGAoPzoke251bSQxfSV8JHtudW0kMX18bm9uZSlgO1xudmFyIGh1ZSQxID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfSlgO1xudmFyIGh1ZV9ub25lID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfXxub25lKWA7XG52YXIgYyA9IGBcXFxccyosXFxcXHMqYDtcbnZhciByeF9udW1fcGVyX25vbmUgPSBuZXcgUmVnRXhwKFwiXlwiICsgbnVtX3Blcl9ub25lICsgXCIkXCIpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VSZ2JMZWdhY3kuanNcbnZhciByZ2JfbnVtX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtudW0kMX0ke2N9JHtudW0kMX0ke2N9JHtudW0kMX1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcmdiX3Blcl9vbGQgPSBuZXcgUmVnRXhwKGBecmdiYT9cXFxcKFxcXFxzKiR7cGVyfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlUmdiTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0bGV0IG1hdGNoO1xuXHRpZiAobWF0Y2ggPSBjb2xvci5tYXRjaChyZ2JfbnVtX29sZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCkgcmVzLnIgPSBtYXRjaFsxXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbMl0gIT09IHZvaWQgMCkgcmVzLmcgPSBtYXRjaFsyXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbM10gIT09IHZvaWQgMCkgcmVzLmIgPSBtYXRjaFszXSAvIDI1NTtcblx0fSBlbHNlIGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9wZXJfb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMTAwO1xuXHR9IGVsc2UgcmV0dXJuO1xuXHRpZiAobWF0Y2hbNF0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbWF0Y2hbNF0gLyAxMDApKTtcblx0ZWxzZSBpZiAobWF0Y2hbNV0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgK21hdGNoWzVdKSk7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9fcHJlcGFyZS5qc1xudmFyIHByZXBhcmUgPSAoY29sb3IsIG1vZGUpID0+IGNvbG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0eXBlb2YgY29sb3IgIT09IFwib2JqZWN0XCIgPyBwYXJzZShjb2xvcikgOiBjb2xvci5tb2RlICE9PSB2b2lkIDAgPyBjb2xvciA6IG1vZGUgPyB7XG5cdC4uLmNvbG9yLFxuXHRtb2RlXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb252ZXJ0ZXIuanNcbnZhciBjb252ZXJ0ZXIgPSAodGFyZ2V0X21vZGUgPSBcInJnYlwiKSA9PiAoY29sb3IpID0+IChjb2xvciA9IHByZXBhcmUoY29sb3IsIHRhcmdldF9tb2RlKSkgIT09IHZvaWQgMCA/IGNvbG9yLm1vZGUgPT09IHRhcmdldF9tb2RlID8gY29sb3IgOiBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdW3RhcmdldF9tb2RlXSA/IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdKGNvbG9yKSA6IHRhcmdldF9tb2RlID09PSBcInJnYlwiID8gY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpIDogY29udmVydGVycy5yZ2JbdGFyZ2V0X21vZGVdKGNvbnZlcnRlcnNbY29sb3IubW9kZV0ucmdiKGNvbG9yKSkgOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL21vZGVzLmpzXG52YXIgY29udmVydGVycyA9IHt9O1xudmFyIG1vZGVzID0ge307XG52YXIgcGFyc2VycyA9IFtdO1xudmFyIGNvbG9yUHJvZmlsZXMgPSB7fTtcbnZhciBpZGVudGl0eSA9ICh2KSA9PiB2O1xudmFyIHVzZU1vZGUgPSAoZGVmaW5pdGlvbikgPT4ge1xuXHRjb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0gPSB7XG5cdFx0Li4uY29udmVydGVyc1tkZWZpbml0aW9uLm1vZGVdLFxuXHRcdC4uLmRlZmluaXRpb24udG9Nb2RlXG5cdH07XG5cdE9iamVjdC5rZXlzKGRlZmluaXRpb24uZnJvbU1vZGUgfHwge30pLmZvckVhY2goKGspID0+IHtcblx0XHRpZiAoIWNvbnZlcnRlcnNba10pIGNvbnZlcnRlcnNba10gPSB7fTtcblx0XHRjb252ZXJ0ZXJzW2tdW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uLmZyb21Nb2RlW2tdO1xuXHR9KTtcblx0aWYgKCFkZWZpbml0aW9uLnJhbmdlcykgZGVmaW5pdGlvbi5yYW5nZXMgPSB7fTtcblx0aWYgKCFkZWZpbml0aW9uLmRpZmZlcmVuY2UpIGRlZmluaXRpb24uZGlmZmVyZW5jZSA9IHt9O1xuXHRkZWZpbml0aW9uLmNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwpID0+IHtcblx0XHRpZiAoZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPT09IHZvaWQgMCkgZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPSBbMCwgMV07XG5cdFx0aWYgKCFkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgaW50ZXJwb2xhdG9yIGZvcjogJHtjaGFubmVsfWApO1xuXHRcdGlmICh0eXBlb2YgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSA9PT0gXCJmdW5jdGlvblwiKSBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID0geyB1c2U6IGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gfTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXApIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXAgPSBpZGVudGl0eTtcblx0fSk7XG5cdG1vZGVzW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uO1xuXHQoZGVmaW5pdGlvbi5wYXJzZSB8fCBbXSkuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG5cdFx0dXNlUGFyc2VyKHBhcnNlciwgZGVmaW5pdGlvbi5tb2RlKTtcblx0fSk7XG5cdHJldHVybiBjb252ZXJ0ZXIoZGVmaW5pdGlvbi5tb2RlKTtcbn07XG52YXIgZ2V0TW9kZSA9IChtb2RlKSA9PiBtb2Rlc1ttb2RlXTtcbnZhciB1c2VQYXJzZXIgPSAocGFyc2VyLCBtb2RlKSA9PiB7XG5cdGlmICh0eXBlb2YgcGFyc2VyID09PSBcInN0cmluZ1wiKSB7XG5cdFx0aWYgKCFtb2RlKSB0aHJvdyBuZXcgRXJyb3IoYCdtb2RlJyByZXF1aXJlZCB3aGVuICdwYXJzZXInIGlzIGEgc3RyaW5nYCk7XG5cdFx0Y29sb3JQcm9maWxlc1twYXJzZXJdID0gbW9kZTtcblx0fSBlbHNlIGlmICh0eXBlb2YgcGFyc2VyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRpZiAocGFyc2Vycy5pbmRleE9mKHBhcnNlcikgPCAwKSBwYXJzZXJzLnB1c2gocGFyc2VyKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcGFyc2UuanNcbnZhciBJZGVudFN0YXJ0Q29kZVBvaW50ID0gL1teXFx4MDAtXFx4N0ZdfFthLXpBLVpfXS87XG52YXIgSWRlbnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18Wy1cXHddLztcbnZhciBUb2sgPSB7XG5cdEZ1bmN0aW9uOiBcImZ1bmN0aW9uXCIsXG5cdElkZW50OiBcImlkZW50XCIsXG5cdE51bWJlcjogXCJudW1iZXJcIixcblx0UGVyY2VudGFnZTogXCJwZXJjZW50YWdlXCIsXG5cdFBhcmVuQ2xvc2U6IFwiKVwiLFxuXHROb25lOiBcIm5vbmVcIixcblx0SHVlOiBcImh1ZVwiLFxuXHRBbHBoYTogXCJhbHBoYVwiXG59O1xudmFyIF9pID0gMDtcbmZ1bmN0aW9uIGlzX251bShjaGFycykge1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGxldCBjaDEgPSBjaGFyc1tfaSArIDFdO1xuXHRpZiAoY2ggPT09IFwiLVwiIHx8IGNoID09PSBcIitcIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKSB8fCBjaDEgPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSk7XG5cdGlmIChjaCA9PT0gXCIuXCIpIHJldHVybiAvXFxkLy50ZXN0KGNoMSk7XG5cdHJldHVybiAvXFxkLy50ZXN0KGNoKTtcbn1cbmZ1bmN0aW9uIGlzX2lkZW50KGNoYXJzKSB7XG5cdGlmIChfaSA+PSBjaGFycy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0bGV0IGNoID0gY2hhcnNbX2ldO1xuXHRpZiAoSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoKSkgcmV0dXJuIHRydWU7XG5cdGlmIChjaCA9PT0gXCItXCIpIHtcblx0XHRpZiAoY2hhcnMubGVuZ3RoIC0gX2kgPCAyKSByZXR1cm4gZmFsc2U7XG5cdFx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdFx0aWYgKGNoMSA9PT0gXCItXCIgfHwgSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoMSkpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG52YXIgaHVlbml0cyA9IHtcblx0ZGVnOiAxLFxuXHRyYWQ6IDE4MCAvIE1hdGguUEksXG5cdGdyYWQ6IDkgLyAxMCxcblx0dHVybjogMzYwXG59O1xuZnVuY3Rpb24gbnVtKGNoYXJzKSB7XG5cdGxldCB2YWx1ZSA9IFwiXCI7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLVwiIHx8IGNoYXJzW19pXSA9PT0gXCIrXCIpIHZhbHVlICs9IGNoYXJzW19pKytdO1xuXHR2YWx1ZSArPSBkaWdpdHMoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIi5cIiAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiZVwiIHx8IGNoYXJzW19pXSA9PT0gXCJFXCIpIHtcblx0XHRpZiAoKGNoYXJzW19pICsgMV0gPT09IFwiLVwiIHx8IGNoYXJzW19pICsgMV0gPT09IFwiK1wiKSAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMl0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0XHRlbHNlIGlmICgvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdH1cblx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdGxldCBpZCA9IGlkZW50KGNoYXJzKTtcblx0XHRpZiAoaWQgPT09IFwiZGVnXCIgfHwgaWQgPT09IFwicmFkXCIgfHwgaWQgPT09IFwidHVyblwiIHx8IGlkID09PSBcImdyYWRcIikgcmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5IdWUsXG5cdFx0XHR2YWx1ZTogdmFsdWUgKiBodWVuaXRzW2lkXVxuXHRcdH07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiJVwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLlBlcmNlbnRhZ2UsXG5cdFx0XHR2YWx1ZTogK3ZhbHVlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5OdW1iZXIsXG5cdFx0dmFsdWU6ICt2YWx1ZVxuXHR9O1xufVxuZnVuY3Rpb24gZGlnaXRzKGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKC9cXGQvLnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudChjaGFycykge1xuXHRsZXQgdiA9IFwiXCI7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCAmJiBJZGVudENvZGVQb2ludC50ZXN0KGNoYXJzW19pXSkpIHYgKz0gY2hhcnNbX2krK107XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gaWRlbnRsaWtlKGNoYXJzKSB7XG5cdGxldCB2ID0gaWRlbnQoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIihcIikge1xuXHRcdF9pKys7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5GdW5jdGlvbixcblx0XHRcdHZhbHVlOiB2XG5cdFx0fTtcblx0fVxuXHRpZiAodiA9PT0gXCJub25lXCIpIHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHR2YWx1ZTogdlxuXHR9O1xufVxuZnVuY3Rpb24gdG9rZW5pemUoc3RyID0gXCJcIikge1xuXHRsZXQgY2hhcnMgPSBzdHIudHJpbSgpO1xuXHRsZXQgdG9rZW5zID0gW107XG5cdGxldCBjaDtcblx0X2kgPSAwO1xuXHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGgpIHtcblx0XHRjaCA9IGNoYXJzW19pKytdO1xuXHRcdGlmIChjaCA9PT0gXCJcXG5cIiB8fCBjaCA9PT0gXCJcdFwiIHx8IGNoID09PSBcIiBcIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIixcIikgcmV0dXJuO1xuXHRcdGlmIChjaCA9PT0gXCIpXCIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHsgdHlwZTogVG9rLlBhcmVuQ2xvc2UgfSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIitcIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHRcdFx0XHR2YWx1ZTogaWRlbnQoY2hhcnMpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi5cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi9cIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRsZXQgYWxwaGE7XG5cdFx0XHRpZiAoaXNfbnVtKGNoYXJzKSkge1xuXHRcdFx0XHRhbHBoYSA9IG51bShjaGFycyk7XG5cdFx0XHRcdGlmIChhbHBoYS50eXBlICE9PSBUb2suSHVlKSB7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogVG9rLkFscGhhLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFscGhhXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0aWYgKGlkZW50KGNoYXJzKSA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZvaWQgMFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICgvXFxkLy50ZXN0KGNoKSkge1xuXHRcdFx0X2ktLTtcblx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2goaWRlbnRsaWtlKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBwYXJzZUNvbG9yU3ludGF4KHRva2Vucykge1xuXHR0b2tlbnMuX2kgPSAwO1xuXHRsZXQgdG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAoIXRva2VuIHx8IHRva2VuLnR5cGUgIT09IFRvay5GdW5jdGlvbiB8fCB0b2tlbi52YWx1ZSAhPT0gXCJjb2xvclwiKSByZXR1cm47XG5cdHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKHRva2VuLnR5cGUgIT09IFRvay5JZGVudCkgcmV0dXJuO1xuXHRjb25zdCBtb2RlID0gY29sb3JQcm9maWxlc1t0b2tlbi52YWx1ZV07XG5cdGlmICghbW9kZSkgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGUgfTtcblx0Y29uc3QgY29vcmRzID0gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGZhbHNlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29uc3QgY2hhbm5lbHMgPSBnZXRNb2RlKG1vZGUpLmNoYW5uZWxzO1xuXHRmb3IgKGxldCBpaSA9IDAsIGMsIGNoOyBpaSA8IGNoYW5uZWxzLmxlbmd0aDsgaWkrKykge1xuXHRcdGMgPSBjb29yZHNbaWldO1xuXHRcdGNoID0gY2hhbm5lbHNbaWldO1xuXHRcdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0XHRyZXNbY2hdID0gYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgLyAxMDA7XG5cdFx0XHRpZiAoY2ggPT09IFwiYWxwaGFcIikgcmVzW2NoXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJlc1tjaF0pKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdGNvbnN0IGNvb3JkcyA9IFtdO1xuXHRsZXQgdG9rZW47XG5cdHdoaWxlICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suTm9uZSB8fCB0b2tlbi50eXBlID09PSBUb2suTnVtYmVyIHx8IHRva2VuLnR5cGUgPT09IFRvay5BbHBoYSB8fCB0b2tlbi50eXBlID09PSBUb2suUGVyY2VudGFnZSB8fCBpbmNsdWRlSHVlICYmIHRva2VuLnR5cGUgPT09IFRvay5IdWUpIHtcblx0XHRcdGNvb3Jkcy5wdXNoKHRva2VuKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rLlBhcmVuQ2xvc2UpIHtcblx0XHRcdGlmICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoIDwgMyB8fCBjb29yZHMubGVuZ3RoID4gNCkgcmV0dXJuO1xuXHRpZiAoY29vcmRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdGlmIChjb29yZHNbM10udHlwZSAhPT0gVG9rLkFscGhhKSByZXR1cm47XG5cdFx0Y29vcmRzWzNdID0gY29vcmRzWzNdLnZhbHVlO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSAzKSBjb29yZHMucHVzaCh7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9KTtcblx0cmV0dXJuIGNvb3Jkcy5ldmVyeSgoYykgPT4gYy50eXBlICE9PSBUb2suQWxwaGEpID8gY29vcmRzIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uKSByZXR1cm47XG5cdGxldCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgaW5jbHVkZUh1ZSk7XG5cdGlmICghY29vcmRzKSByZXR1cm47XG5cdGNvb3Jkcy51bnNoaWZ0KHRva2VuLnZhbHVlKTtcblx0cmV0dXJuIGNvb3Jkcztcbn1cbnZhciBwYXJzZSA9IChjb2xvcikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm47XG5cdGNvbnN0IHRva2VucyA9IHRva2VuaXplKGNvbG9yKTtcblx0Y29uc3QgcGFyc2VkID0gdG9rZW5zID8gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCB0cnVlKSA6IHZvaWQgMDtcblx0bGV0IHJlc3VsdCA9IHZvaWQgMDtcblx0bGV0IGkgPSAwO1xuXHRsZXQgbGVuID0gcGFyc2Vycy5sZW5ndGg7XG5cdHdoaWxlIChpIDwgbGVuKSBpZiAoKHJlc3VsdCA9IHBhcnNlcnNbaSsrXShjb2xvciwgcGFyc2VkKSkgIT09IHZvaWQgMCkgcmV0dXJuIHJlc3VsdDtcblx0cmV0dXJuIHRva2VucyA/IHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSA6IHZvaWQgMDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYi5qc1xuZnVuY3Rpb24gcGFyc2VSZ2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwicmdiXCIgJiYgcGFyc2VkWzBdICE9PSBcInJnYmFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0Y29uc3QgWywgciwgZywgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoci50eXBlID09PSBUb2suSHVlIHx8IGcudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKHIudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5yID0gci50eXBlID09PSBUb2suTnVtYmVyID8gci52YWx1ZSAvIDI1NSA6IHIudmFsdWUgLyAxMDA7XG5cdGlmIChnLnR5cGUgIT09IFRvay5Ob25lKSByZXMuZyA9IGcudHlwZSA9PT0gVG9rLk51bWJlciA/IGcudmFsdWUgLyAyNTUgOiBnLnZhbHVlIC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIC8gMjU1IDogYi52YWx1ZSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VUcmFuc3BhcmVudC5qc1xudmFyIHBhcnNlVHJhbnNwYXJlbnQgPSAoYykgPT4gYyA9PT0gXCJ0cmFuc3BhcmVudFwiID8ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiAwLFxuXHRnOiAwLFxuXHRiOiAwLFxuXHRhbHBoYTogMFxufSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaW50ZXJwb2xhdGUvbGVycC5qc1xudmFyIGxlcnAgPSAoYSwgYiwgdCkgPT4gYSArIHQgKiAoYiAtIGEpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9waWVjZXdpc2UuanNcbnZhciBnZXRfY2xhc3NlcyA9IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0bGV0IGEgPSBhcnJbaV07XG5cdFx0bGV0IGIgPSBhcnJbaSArIDFdO1xuXHRcdGlmIChhID09PSB2b2lkIDAgJiYgYiA9PT0gdm9pZCAwKSBjbGFzc2VzLnB1c2godm9pZCAwKTtcblx0XHRlbHNlIGlmIChhICE9PSB2b2lkIDAgJiYgYiAhPT0gdm9pZCAwKSBjbGFzc2VzLnB1c2goW2EsIGJdKTtcblx0XHRlbHNlIGNsYXNzZXMucHVzaChhICE9PSB2b2lkIDAgPyBbYSwgYV0gOiBbYiwgYl0pO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcbnZhciBpbnRlcnBvbGF0b3JQaWVjZXdpc2UgPSAoaW50ZXJwb2xhdG9yKSA9PiAoYXJyKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gZ2V0X2NsYXNzZXMoYXJyKTtcblx0cmV0dXJuICh0KSA9PiB7XG5cdFx0bGV0IGNscyA9IHQgKiBjbGFzc2VzLmxlbmd0aDtcblx0XHRsZXQgaWR4ID0gdCA+PSAxID8gY2xhc3Nlcy5sZW5ndGggLSAxIDogTWF0aC5tYXgoTWF0aC5mbG9vcihjbHMpLCAwKTtcblx0XHRsZXQgcGFpciA9IGNsYXNzZXNbaWR4XTtcblx0XHRyZXR1cm4gcGFpciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJwb2xhdG9yKHBhaXJbMF0sIHBhaXJbMV0sIGNscyAtIGlkeCk7XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9saW5lYXIuanNcbnZhciBpbnRlcnBvbGF0b3JMaW5lYXIgPSBpbnRlcnBvbGF0b3JQaWVjZXdpc2UobGVycCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2FscGhhLmpzXG52YXIgZml4dXBBbHBoYSA9IChhcnIpID0+IHtcblx0bGV0IHNvbWVfZGVmaW5lZCA9IGZhbHNlO1xuXHRsZXQgcmVzID0gYXJyLm1hcCgodikgPT4ge1xuXHRcdGlmICh2ICE9PSB2b2lkIDApIHtcblx0XHRcdHNvbWVfZGVmaW5lZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9XG5cdFx0cmV0dXJuIDE7XG5cdH0pO1xuXHRyZXR1cm4gc29tZV9kZWZpbmVkID8gcmVzIDogYXJyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI3ID0ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiclwiLFxuXHRcdFwiZ1wiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1xuXHRcdHBhcnNlUmdiLFxuXHRcdHBhcnNlSGV4LFxuXHRcdHBhcnNlUmdiTGVnYWN5LFxuXHRcdHBhcnNlTmFtZWQsXG5cdFx0cGFyc2VUcmFuc3BhcmVudCxcblx0XHRcInNyZ2JcIlxuXHRdLFxuXHRzZXJpYWxpemU6IFwic3JnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRnOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRnYW11dDogdHJ1ZSxcblx0d2hpdGU6IHtcblx0XHRyOiAxLFxuXHRcdGc6IDEsXG5cdFx0YjogMVxuXHR9LFxuXHRibGFjazoge1xuXHRcdHI6IDAsXG5cdFx0ZzogMCxcblx0XHRiOiAwXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0QTk4VG9YeXo2NS5qc1xudmFyIGxpbmVhcml6ZSQyID0gKHYgPSAwKSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgNTYzIC8gMjU2KSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0QTk4VG9YeXo2NSA9IChhOTgpID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUkMihhOTgucik7XG5cdGxldCBnID0gbGluZWFyaXplJDIoYTk4LmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQyKGE5OC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjU3NjY2OTA0MjkxMDEzMDUgKiByICsgLjE4NTU1ODIzNzkwNjU0NjMgKiBnICsgLjE4ODIyODY0NjIzNDk5NDcgKiBiLFxuXHRcdHk6IC4yOTczNDQ5NzUyNTA1MzYgKiByICsgLjYyNzM2MzU2NjI1NTQ2NjEgKiBnICsgLjA3NTI5MTQ1ODQ5Mzk5NzkgKiBiLFxuXHRcdHo6IC4wMjcwMzEzNjEzODY0MTIzICogciArIC4wNzA2ODg4NTI1MzU4MjcyICogZyArIC45OTEzMzc1MzY4Mzc2Mzg2ICogYlxuXHR9O1xuXHRpZiAoYTk4LmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGE5OC5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0WHl6NjVUb0E5OC5qc1xudmFyIGdhbW1hJDIgPSAodikgPT4gTWF0aC5wb3coTWF0aC5hYnModiksIDI1NiAvIDU2MykgKiBNYXRoLnNpZ24odik7XG52YXIgY29udmVydFh5ejY1VG9BOTggPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJhOThcIixcblx0XHRyOiBnYW1tYSQyKHggKiAyLjA0MTU4NzkwMzgxMDc0NjUgLSB5ICogLjU2NTAwNjk3NDI3ODg1OTcgLSAuMzQ0NzMxMzUwNzc4MzI5NyAqIHopLFxuXHRcdGc6IGdhbW1hJDIoeCAqIC0uOTY5MjQzNjM2MjgwODc5OCArIHkgKiAxLjg3NTk2NzUwMTUwNzcyMDYgKyAuMDQxNTU1MDU3NDA3MTc1NiAqIHopLFxuXHRcdGI6IGdhbW1hJDIoeCAqIC4wMTM0NDQyODA2MzIwMzEyIC0geSAqIC4xMTgzNjIzOTIyMzEwMTg0ICsgMS4wMTUxNzQ5OTQzOTEyMDU4ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0UmdiVG9McmdiLmpzXG52YXIgZm4kMyA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA8PSAuMDQwNDUpIHJldHVybiBjIC8gMTIuOTI7XG5cdHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogTWF0aC5wb3coKGFicyArIC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59O1xudmFyIGNvbnZlcnRSZ2JUb0xyZ2IgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogZm4kMyhyKSxcblx0XHRnOiBmbiQzKGcpLFxuXHRcdGI6IGZuJDMoYilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFJnYlRvWHl6NjUuanNcbnZhciBjb252ZXJ0UmdiVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQxMjM5MDc5OTI2NTk1OTMgKiByICsgLjM1NzU4NDMzOTM4Mzg3OCAqIGcgKyAuMTgwNDgwNzg4NDAxODM0MyAqIGIsXG5cdFx0eTogLjIxMjYzOTAwNTg3MTUxMDIgKiByICsgLjcxNTE2ODY3ODc2Nzc1NiAqIGcgKyAuMDcyMTkyMzE1MzYwNzMzNyAqIGIsXG5cdFx0ejogLjAxOTMzMDgxODcxNTU5MTggKiByICsgLjExOTE5NDc3OTc5NDYyNiAqIGcgKyAuOTUwNTMyMTUyMjQ5NjYwNyAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0THJnYlRvUmdiLmpzXG52YXIgZm4kMiA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA+IC4wMDMxMzA4KSByZXR1cm4gKE1hdGguc2lnbihjKSB8fCAxKSAqICgxLjA1NSAqIE1hdGgucG93KGFicywgMSAvIDIuNCkgLSAuMDU1KTtcblx0cmV0dXJuIGMgKiAxMi45Mjtcbn07XG52YXIgY29udmVydExyZ2JUb1JnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0sIG1vZGUgPSBcInJnYlwiKSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRyOiBmbiQyKHIpLFxuXHRcdGc6IGZuJDIoZyksXG5cdFx0YjogZm4kMihiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo2NVRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMjQwOTY5OTQxOTA0NTIyNiAtIHkgKiAxLjUzNzM4MzE3NzU3MDA5NCAtIC40OTg2MTA3NjAyOTMwMDM0ICogeixcblx0XHRnOiB4ICogLS45NjkyNDM2MzYyODA4Nzk2ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNCArIC4wNDE1NTUwNTc0MDcxNzU2ICogeixcblx0XHRiOiB4ICogLjA1NTYzMDA3OTY5Njk5MzYgLSB5ICogLjIwMzk3Njk1ODg4ODk3NjUgKyAxLjA1Njk3MTUxNDI0Mjg3ODQgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hOTgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjYgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwiYTk4XCIsXG5cdHBhcnNlOiBbXCJhOTgtcmdiXCJdLFxuXHRzZXJpYWxpemU6IFwiYTk4LXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb0E5OChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0E5OFxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEE5OFRvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydEE5OFRvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9ub3JtYWxpemVIdWUuanNcbnZhciBub3JtYWxpemVIdWUgPSAoaHVlKSA9PiAoaHVlID0gaHVlICUgMzYwKSA8IDAgPyBodWUgKyAzNjAgOiBodWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2h1ZS5qc1xudmFyIGh1ZSA9IChodWVzLCBmbikgPT4ge1xuXHRyZXR1cm4gaHVlcy5tYXAoKGh1ZSwgaWR4LCBhcnIpID0+IHtcblx0XHRpZiAoaHVlID09PSB2b2lkIDApIHJldHVybiBodWU7XG5cdFx0bGV0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIdWUoaHVlKTtcblx0XHRpZiAoaWR4ID09PSAwIHx8IGh1ZXNbaWR4IC0gMV0gPT09IHZvaWQgMCkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdFx0cmV0dXJuIGZuKG5vcm1hbGl6ZWQgLSBub3JtYWxpemVIdWUoYXJyW2lkeCAtIDFdKSk7XG5cdH0pLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG5cdFx0aWYgKCFhY2MubGVuZ3RoIHx8IGN1cnIgPT09IHZvaWQgMCB8fCBhY2NbYWNjLmxlbmd0aCAtIDFdID09PSB2b2lkIDApIHtcblx0XHRcdGFjYy5wdXNoKGN1cnIpO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9XG5cdFx0YWNjLnB1c2goY3VyciArIGFjY1thY2MubGVuZ3RoIC0gMV0pO1xuXHRcdHJldHVybiBhY2M7XG5cdH0sIFtdKTtcbn07XG52YXIgZml4dXBIdWVTaG9ydGVyID0gKGFycikgPT4gaHVlKGFyciwgKGQpID0+IE1hdGguYWJzKGQpIDw9IDE4MCA/IGQgOiBkIC0gMzYwICogTWF0aC5zaWduKGQpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnN0YW50cy5qc1xudmFyIE0gPSBbXG5cdC0uMTQ4NjEsXG5cdDEuNzgyNzcsXG5cdC0uMjkyMjcsXG5cdC0uOTA2NDksXG5cdDEuOTcyOTQsXG5cdDBcbl07XG52YXIgZGVnVG9SYWQgPSBNYXRoLlBJIC8gMTgwO1xudmFyIHJhZFRvRGVnID0gMTgwIC8gTWF0aC5QSTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRSZ2JUb0N1YmVoZWxpeC5qc1xudmFyIERFID0gTVszXSAqIE1bNF07XG52YXIgQkUgPSBNWzFdICogTVs0XTtcbnZhciBCQ0FEID0gTVsxXSAqIE1bMl0gLSBNWzBdICogTVszXTtcbnZhciBjb252ZXJ0UmdiVG9DdWJlaGVsaXggPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBsID0gKEJDQUQgKiBiICsgciAqIERFIC0gZyAqIEJFKSAvIChCQ0FEICsgREUgLSBCRSk7XG5cdGxldCB4ID0gYiAtIGw7XG5cdGxldCB5ID0gKE1bNF0gKiAoZyAtIGwpIC0gTVsyXSAqIHgpIC8gTVszXTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRcdGwsXG5cdFx0czogbCA9PT0gMCB8fCBsID09PSAxID8gdm9pZCAwIDogTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpIC8gKE1bNF0gKiBsICogKDEgLSBsKSlcblx0fTtcblx0aWYgKHJlcy5zKSByZXMuaCA9IE1hdGguYXRhbjIoeSwgeCkgKiByYWRUb0RlZyAtIDEyMDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRDdWJlaGVsaXhUb1JnYi5qc1xudmFyIGNvbnZlcnRDdWJlaGVsaXhUb1JnYiA9ICh7IGgsIHMsIGwsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRoID0gKGggPT09IHZvaWQgMCA/IDAgOiBoICsgMTIwKSAqIGRlZ1RvUmFkO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IGFtcCA9IHMgPT09IHZvaWQgMCA/IDAgOiBzICogbCAqICgxIC0gbCk7XG5cdGxldCBjb3NoID0gTWF0aC5jb3MoaCk7XG5cdGxldCBzaW5oID0gTWF0aC5zaW4oaCk7XG5cdHJlcy5yID0gbCArIGFtcCAqIChNWzBdICogY29zaCArIE1bMV0gKiBzaW5oKTtcblx0cmVzLmcgPSBsICsgYW1wICogKE1bMl0gKiBjb3NoICsgTVszXSAqIHNpbmgpO1xuXHRyZXMuYiA9IGwgKyBhbXAgKiAoTVs0XSAqIGNvc2ggKyBNWzVdICogc2luaCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RpZmZlcmVuY2UuanNcbnZhciBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQucyB8fCAhc21wLnMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5zICogc21wLnMpICogZEg7XG59O1xudmFyIGRpZmZlcmVuY2VIdWVOYWl2ZSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwKSByZXR1cm4gMDtcblx0bGV0IHN0ZF9oID0gbm9ybWFsaXplSHVlKHN0ZC5oKTtcblx0bGV0IHNtcF9oID0gbm9ybWFsaXplSHVlKHNtcC5oKTtcblx0aWYgKE1hdGguYWJzKHNtcF9oIC0gc3RkX2gpID4gMTgwKSByZXR1cm4gc3RkX2ggLSAoc21wX2ggLSAzNjAgKiBNYXRoLnNpZ24oc21wX2ggLSBzdGRfaCkpO1xuXHRyZXR1cm4gc21wX2ggLSBzdGRfaDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZUNocm9tYSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQuYyB8fCAhc21wLmMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5jICogc21wLmMpICogZEg7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hdmVyYWdlLmpzXG52YXIgYXZlcmFnZUFuZ2xlID0gKHZhbCkgPT4ge1xuXHRsZXQgc3VtID0gdmFsLnJlZHVjZSgoc3VtLCB2YWwpID0+IHtcblx0XHRpZiAodmFsICE9PSB2b2lkIDApIHtcblx0XHRcdGxldCByYWQgPSB2YWwgKiBNYXRoLlBJIC8gMTgwO1xuXHRcdFx0c3VtLnNpbiArPSBNYXRoLnNpbihyYWQpO1xuXHRcdFx0c3VtLmNvcyArPSBNYXRoLmNvcyhyYWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VtO1xuXHR9LCB7XG5cdFx0c2luOiAwLFxuXHRcdGNvczogMFxuXHR9KTtcblx0bGV0IGFuZ2xlID0gTWF0aC5hdGFuMihzdW0uc2luLCBzdW0uY29zKSAqIDE4MCAvIE1hdGguUEk7XG5cdHJldHVybiBhbmdsZSA8IDAgPyAzNjAgKyBhbmdsZSA6IGFuZ2xlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI1ID0ge1xuXHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1jdWJlaGVsaXhcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWN1YmVoZWxpeFwiLFxuXHRyYW5nZXM6IHtcblx0XHRoOiBbMCwgMzYwXSxcblx0XHRzOiBbMCwgNC42MTRdLFxuXHRcdGw6IFswLCAxXVxuXHR9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCB9LFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0Q3ViZWhlbGl4VG9SZ2IgfSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMYWJUb0xjaC5qc1xudmFyIGNvbnZlcnRMYWJUb0xjaCA9ICh7IGwsIGEsIGIsIGFscGhhIH0sIG1vZGUgPSBcImxjaFwiKSA9PiB7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMY2hUb0xhYi5qc1xudmFyIGNvbnZlcnRMY2hUb0xhYiA9ICh7IGwsIGMsIGgsIGFscGhhIH0sIG1vZGUgPSBcImxhYlwiKSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGUsXG5cdFx0bCxcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnN0YW50cy5qc1xudmFyIGskMiA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMiA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb25zdGFudHMuanNcbnZhciBENTAgPSB7XG5cdFg6IC4zNDU3IC8gLjM1ODUsXG5cdFk6IDEsXG5cdFo6IC4yOTU4IC8gLjM1ODVcbn07XG52YXIgRDY1ID0ge1xuXHRYOiAuMzEyNyAvIC4zMjksXG5cdFk6IDEsXG5cdFo6IC4zNTgzIC8gLjMyOVxufTtcbnZhciBrJDEgPSBNYXRoLnBvdygyOSwgMykgLyBNYXRoLnBvdygzLCAzKTtcbnZhciBlJDEgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9YeXo2NS5qc1xudmFyIGZuJDEgPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlJDIgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gayQyO1xudmFyIGNvbnZlcnRMYWI2NVRvWHl6NjUgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogZm4kMShmeCkgKiBENjUuWCxcblx0XHR5OiBmbiQxKGZ5KSAqIEQ2NS5ZLFxuXHRcdHo6IGZuJDEoZnopICogRDY1Llpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9SZ2IuanNcbnZhciBjb252ZXJ0TGFiNjVUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRMYWI2NVRvWHl6NjUobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2NvbnZlcnRYeXo2NVRvTGFiNjUuanNcbnZhciBmJDEgPSAodmFsdWUpID0+IHZhbHVlID4gZSQyID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrJDIgKiB2YWx1ZSArIDE2KSAvIDExNjtcbnZhciBjb252ZXJ0WHl6NjVUb0xhYjY1ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmJDEoeCAvIEQ2NS5YKTtcblx0bGV0IGYxID0gZiQxKHkgLyBENjUuWSk7XG5cdGxldCBmMiA9IGYkMSh6IC8gRDY1LlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiNjVcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFJnYlRvTGFiNjUuanNcbnZhciBjb252ZXJ0UmdiVG9MYWI2NSA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo2NVRvTGFiNjUoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29uc3RhbnRzLmpzXG52YXIgzrggPSAyNiAvIDE4MCAqIE1hdGguUEk7XG52YXIgY29zzrggPSBNYXRoLmNvcyjOuCk7XG52YXIgc2luzrggPSBNYXRoLnNpbijOuCk7XG52YXIgZmFjdG9yID0gMTAwIC8gTWF0aC5sb2coMTM5IC8gMTAwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0RGxjaFRvTGFiNjUuanNcbnZhciBjb252ZXJ0RGxjaFRvTGFiNjUgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYyA9PT0gdm9pZCAwKSBjID0gMDtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IChNYXRoLmV4cChsICogMSAvIGZhY3RvcikgLSAxKSAvIC4wMDM5XG5cdH07XG5cdGxldCBHID0gKE1hdGguZXhwKC4wNDM1ICogYyAqIDEgKiAxKSAtIDEpIC8gLjA3NTtcblx0bGV0IGUgPSBHICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdGxldCBmID0gRyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJIC0gzrgpO1xuXHRyZXMuYSA9IGUgKiBjb3POuCAtIGYgLyAuODMgKiBzaW7OuDtcblx0cmVzLmIgPSBlICogc2luzrggKyBmIC8gLjgzICogY29zzrg7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29udmVydExhYjY1VG9EbGNoLmpzXG52YXIgY29udmVydExhYjY1VG9EbGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgZSA9IGEgKiBjb3POuCArIGIgKiBzaW7OuDtcblx0bGV0IGYgPSAuODMgKiAoYiAqIGNvc864IC0gYSAqIHNpbs64KTtcblx0bGV0IEcgPSBNYXRoLnNxcnQoZSAqIGUgKyBmICogZik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJkbGNoXCIsXG5cdFx0bDogZmFjdG9yIC8gMSAqIE1hdGgubG9nKDEgKyAuMDAzOSAqIGwpLFxuXHRcdGM6IE1hdGgubG9nKDEgKyAuMDc1ICogRykgLyAoLjA0MzUgKiAxICogMSlcblx0fTtcblx0aWYgKHJlcy5jKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZSgoTWF0aC5hdGFuMihmLCBlKSArIM64KSAvIE1hdGguUEkgKiAxODApO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGFiL2RlZmluaXRpb24uanNcbnZhciBjb252ZXJ0RGxhYlRvTGFiNjUgPSAoYykgPT4gY29udmVydERsY2hUb0xhYjY1KGNvbnZlcnRMYWJUb0xjaChjLCBcImRsY2hcIikpO1xudmFyIGNvbnZlcnRMYWI2NVRvRGxhYiA9IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoY29udmVydExhYjY1VG9EbGNoKGMpLCBcImRsYWJcIik7XG52YXIgZGVmaW5pdGlvbiQyNCA9IHtcblx0bW9kZTogXCJkbGFiXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sYWJcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGFiVG9MYWI2NSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxhYlRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsYWIoY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstNDAuMDksIDQ1LjUwMV0sXG5cdFx0YjogWy00MC40NjksIDQ0LjM0NF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMyA9IHtcblx0bW9kZTogXCJkbGNoXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sY2hcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGNoVG9MYWI2NSxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwiZGxhYlwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxjaFRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxjaCxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsY2goY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGM6IFswLCA1MS40ODRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2NvbnZlcnRIc2lUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzaVRvUmdiKHsgaCwgcywgaSwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRnOiBpICogKDEgLSBzKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0YjogaSAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydFJnYlRvSHNpLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic2koeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzaVwiLFxuXHRcdHM6IHIgKyBnICsgYiA9PT0gMCA/IDAgOiAxIC0gMyAqIG0gLyAociArIGcgKyBiKSxcblx0XHRpOiAociArIGcgKyBiKSAvIDNcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIyID0ge1xuXHRtb2RlOiBcImhzaVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHNpVG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHNpXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc2lcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic2kgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcImlcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvY29udmVydEhzbFRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNsVG9SZ2IoeyBoLCBzLCBsLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGxldCBtMSA9IGwgKyBzICogKGwgPCAuNSA/IGwgOiAxIC0gbCk7XG5cdGxldCBtMiA9IG0xIC0gKG0xIC0gbCkgKiAyICogTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IG0yLFxuXHRcdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGc6IG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogMiAqIGwgLSBtMSxcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0xLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0UmdiVG9Ic2wuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzbCh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNsXCIsXG5cdFx0czogTSA9PT0gbSA/IDAgOiAoTSAtIG0pIC8gKDEgLSBNYXRoLmFicyhNICsgbSAtIDEpKSxcblx0XHRsOiAuNSAqIChNICsgbSlcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9odWUuanNcbnZhciBodWVUb0RlZyA9ICh2YWwsIHVuaXQpID0+IHtcblx0c3dpdGNoICh1bml0KSB7XG5cdFx0Y2FzZSBcImRlZ1wiOiByZXR1cm4gK3ZhbDtcblx0XHRjYXNlIFwicmFkXCI6IHJldHVybiB2YWwgLyBNYXRoLlBJICogMTgwO1xuXHRcdGNhc2UgXCJncmFkXCI6IHJldHVybiB2YWwgLyAxMCAqIDk7XG5cdFx0Y2FzZSBcInR1cm5cIjogcmV0dXJuIHZhbCAqIDM2MDtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsTGVnYWN5LmpzXG52YXIgaHNsX29sZCA9IG5ldyBSZWdFeHAoYF5oc2xhP1xcXFwoXFxcXHMqJHtodWUkMX0ke2N9JHtwZXJ9JHtjfSR7cGVyfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciBwYXJzZUhzbExlZ2FjeSA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2ggPSBjb2xvci5tYXRjaChoc2xfb2xkKTtcblx0aWYgKCFtYXRjaCkgcmV0dXJuO1xuXHRsZXQgcmVzID0geyBtb2RlOiBcImhzbFwiIH07XG5cdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuaCA9ICttYXRjaFszXTtcblx0ZWxzZSBpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCAmJiBtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuaCA9IGh1ZVRvRGVnKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMucyA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzRdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzVdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs2XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs2XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs3XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbN10pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9wYXJzZUhzbC5qc1xuZnVuY3Rpb24gcGFyc2VIc2woY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHNsXCIgJiYgcGFyc2VkWzBdICE9PSBcImhzbGFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0Y29uc3QgWywgaCwgcywgbCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChzLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKHMudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5zID0gcy52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IGwudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjEgPSB7XG5cdG1vZGU6IFwiaHNsXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2xUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzbCB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdHBhcnNlOiBbcGFyc2VIc2wsIHBhcnNlSHNsTGVnYWN5XSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGhzbCgke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy5zICE9PSB2b2lkIDAgPyBjLnMgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MubCAhPT0gdm9pZCAwID8gYy5sICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2NvbnZlcnRIc3ZUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzdlRvUmdiKHsgaCwgcywgdiwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0Zzogdixcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzICogZiksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiB2ICogKDEgLSBzKSxcblx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0YjogdiAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydFJnYlRvSHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic3YoeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzdlwiLFxuXHRcdHM6IE0gPT09IDAgPyAwIDogMSAtIG0gLyBNLFxuXHRcdHY6IE1cblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIwID0ge1xuXHRtb2RlOiBcImhzdlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHN2VG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc3ZcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic3YgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydEh3YlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHdiVG9SZ2IoeyBoLCB3LCBiLCBhbHBoYSB9KSB7XG5cdGlmICh3ID09PSB2b2lkIDApIHcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0aWYgKHcgKyBiID4gMSkge1xuXHRcdGxldCBzID0gdyArIGI7XG5cdFx0dyAvPSBzO1xuXHRcdGIgLz0gcztcblx0fVxuXHRyZXR1cm4gY29udmVydEhzdlRvUmdiKHtcblx0XHRoLFxuXHRcdHM6IGIgPT09IDEgPyAxIDogMSAtIHcgLyAoMSAtIGIpLFxuXHRcdHY6IDEgLSBiLFxuXHRcdGFscGhhXG5cdH0pO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydFJnYlRvSHdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Id2IocmdiYSkge1xuXHRsZXQgaHN2ID0gY29udmVydFJnYlRvSHN2KHJnYmEpO1xuXHRpZiAoaHN2ID09PSB2b2lkIDApIHJldHVybiB2b2lkIDA7XG5cdGxldCBzID0gaHN2LnMgIT09IHZvaWQgMCA/IGhzdi5zIDogMDtcblx0bGV0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHdiXCIsXG5cdFx0dzogKDEgLSBzKSAqIHYsXG5cdFx0YjogMSAtIHZcblx0fTtcblx0aWYgKGhzdi5oICE9PSB2b2lkIDApIHJlcy5oID0gaHN2Lmg7XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gaHN2LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvcGFyc2VId2IuanNcbmZ1bmN0aW9uIFBhcnNlSHdiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImh3YlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJod2JcIiB9O1xuXHRjb25zdCBbLCBoLCB3LCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHcudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAody50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLncgPSB3LnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5iID0gYi52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOSA9IHtcblx0bW9kZTogXCJod2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEh3YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHdiIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJ3XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtQYXJzZUh3Yl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBod2IoJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSAke2MudyAhPT0gdm9pZCAwID8gYy53ICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHR3OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVOYWl2ZSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oZHIvdHJhbnNmZXIuanNcbnZhciBNMSA9IC4xNTkzMDE3NTc4MTI1O1xudmFyIE0yID0gNzguODQzNzU7XG52YXIgQzEgPSAuODM1OTM3NTtcbnZhciBDMiA9IDE4Ljg1MTU2MjU7XG52YXIgQzMgPSAxOC42ODc1O1xuZnVuY3Rpb24gdHJhbnNmZXJQcURlY29kZSh2KSB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGNvbnN0IGMgPSBNYXRoLnBvdyh2LCAxIC8gTTIpO1xuXHRyZXR1cm4gMWU0ICogTWF0aC5wb3coTWF0aC5tYXgoMCwgYyAtIEMxKSAvIChDMiAtIEMzICogYyksIDEgLyBNMSk7XG59XG5mdW5jdGlvbiB0cmFuc2ZlclBxRW5jb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogYykgLyAoMSArIEMzICogYyksIE0yKTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRJdHBUb1h5ejY1LmpzXG52YXIgdG9SZWwgPSAoYykgPT4gTWF0aC5tYXgoYyAvIDIwMywgMCk7XG52YXIgY29udmVydEl0cFRvWHl6NjUgPSAoeyBpLCB0LCBwLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAodCA9PT0gdm9pZCAwKSB0ID0gMDtcblx0aWYgKHAgPT09IHZvaWQgMCkgcCA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuMDA4NjA5MDM3MDM3OTMyNzYxICogdCArIC4xMTEwMjk2MjUwMDMwMjU5MyAqIHApO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcURlY29kZShpIC0gLjAwODYwOTAzNzAzNzkzMjc1ICogdCAtIC4xMTEwMjk2MjUwMDMwMjU5OSAqIHApO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcURlY29kZShpICsgLjU2MDAzMTMzNTcxMDY3OTEgKiB0IC0gLjMyMDYyNzE3NDk4NzMxODg1ICogcCk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogdG9SZWwoMi4wNzAxNTIyMTgzODk0MjIgKiBsIC0gMS4zMjYzNDczMzg5NjcxNTU2ICogbSArIC4yMDY2NTEwNDc2Mjk0MDUxICogcyksXG5cdFx0eTogdG9SZWwoLjM2NDczODUyMDk3NDgwNzQgKiBsICsgLjY4MDU2NjAyNDk0NzIyNyAqIG0gLSAuMDQ1MzA0NTQ1OTIyMDM0NiAqIHMpLFxuXHRcdHo6IHRvUmVsKC0uMDQ5NzQ3MjA3NTM1ODEyICogbCAtIC4wNDkyNjA5NjY2OTY2MTM4ICogbSArIDEuMTg4MDY1OTI0OTkyMzA0MiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9jb252ZXJ0WHl6NjVUb0l0cC5qc1xudmFyIHRvQWJzID0gKGMgPSAwKSA9PiBNYXRoLm1heChjICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0l0cCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0Y29uc3QgYWJzWCA9IHRvQWJzKHgpO1xuXHRjb25zdCBhYnNZID0gdG9BYnMoeSk7XG5cdGNvbnN0IGFic1ogPSB0b0Ficyh6KTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFFbmNvZGUoLjM1OTI4MzI1OTAxMjEyMTcgKiBhYnNYICsgLjY5NzYwNTExNDc3Nzk1MDIgKiBhYnNZIC0gLjAzNTg5MTU5MzIzMjAyODkgKiBhYnNaKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyUHFFbmNvZGUoLS4xOTIwODA4NDYzNzA0OTk1ICogYWJzWCArIDEuMTAwNDc2Nzk3MDM3NDMyMyAqIGFic1kgKyAuMDc1Mzc0ODY1ODUxOTExOCAqIGFic1opO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcUVuY29kZSguMDA3MDc5Nzg0NDYwNzQ3NyAqIGFic1ggKyAuMDc0ODM5NjY2MjE4NjM2NiAqIGFic1kgKyAuODQzMzI2NTQ1Mzg5ODc2NSAqIGFic1opO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJpdHBcIixcblx0XHRpOiAuNSAqIGwgKyAuNSAqIG0sXG5cdFx0dDogMS42MTM3Njk1MzEyNSAqIGwgLSAzLjMyMzQ4NjMyODEyNSAqIG0gKyAxLjcwOTcxNjc5Njg3NSAqIHMsXG5cdFx0cDogNC4zNzgxNzM4MjgxMjUgKiBsIC0gNC4yNDU2MDU0Njg3NSAqIG0gLSAuMTMyNTY4MzU5Mzc1ICogc1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTggPSB7XG5cdG1vZGU6IFwiaXRwXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJpXCIsXG5cdFx0XCJ0XCIsXG5cdFx0XCJwXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWljdGNwXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1pY3RjcFwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydEl0cFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRJdHBUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9JdHAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvSXRwKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0aTogWzAsIC41ODFdLFxuXHRcdHQ6IFstLjM2OSwgLjI3Ml0sXG5cdFx0cDogWy0uMTY0LCAuMzMxXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR0OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0cDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFh5ejY1VG9KYWIuanNcbnZhciBwJDEgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAkMSA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcUVuY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2biA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogdm4pIC8gKDEgKyBDMyAqIHZuKSwgcCQxKTtcbn07XG52YXIgYWJzID0gKHYgPSAwKSA9PiBNYXRoLm1heCh2ICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0phYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0eCA9IGFicyh4KTtcblx0eSA9IGFicyh5KTtcblx0eiA9IGFicyh6KTtcblx0bGV0IHhwID0gMS4xNSAqIHggLSAuMTUgKiB6O1xuXHRsZXQgeXAgPSAuNjYgKiB5ICsgLjM0ICogeDtcblx0bGV0IGwgPSBqYWJQcUVuY29kZSguNDE0Nzg5NzIgKiB4cCArIC41Nzk5OTkgKiB5cCArIC4wMTQ2NDggKiB6KTtcblx0bGV0IG0gPSBqYWJQcUVuY29kZSgtLjIwMTUxICogeHAgKyAxLjEyMDY0OSAqIHlwICsgLjA1MzEwMDggKiB6KTtcblx0bGV0IHMgPSBqYWJQcUVuY29kZSgtLjAxNjYwMDggKiB4cCArIC4yNjQ4ICogeXAgKyAuNjY4NDc5OSAqIHopO1xuXHRsZXQgaSA9IChsICsgbSkgLyAyO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0ajogLjQ0ICogaSAvICgxIC0gLjU2ICogaSkgLSBkMCQxLFxuXHRcdGE6IDMuNTI0ICogbCAtIDQuMDY2NzA4ICogbSArIC41NDI3MDggKiBzLFxuXHRcdGI6IC4xOTkwNzYgKiBsICsgMS4wOTY3OTkgKiBtIC0gMS4yOTU4NzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9YeXo2NS5qc1xudmFyIHAgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAgPSAxNjI5NTQ5OTUzMjgyMTU2NWUtMjc7XG52YXIgamFiUHFEZWNvZGUgPSAodikgPT4ge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRsZXQgdnAgPSBNYXRoLnBvdyh2LCAxIC8gcCk7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdygoQzEgLSB2cCkgLyAoQzMgKiB2cCAtIEMyKSwgMSAvIE0xKTtcbn07XG52YXIgcmVsID0gKHYpID0+IHYgLyAyMDM7XG52YXIgY29udmVydEphYlRvWHl6NjUgPSAoeyBqLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChqID09PSB2b2lkIDApIGogPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBpID0gKGogKyBkMCkgLyAoLjQ0ICsgLjU2ICogKGogKyBkMCkpO1xuXHRsZXQgbCA9IGphYlBxRGVjb2RlKGkgKyAuMTM4NjA1MDQgKiBhICsgLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgbSA9IGphYlBxRGVjb2RlKGkgLSAuMTM4NjA1MDQgKiBhIC0gLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgcyA9IGphYlBxRGVjb2RlKGkgLSAuMDk2MDE5MjQyICogYSAtIC44MTE4OTE5ICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IHJlbCgxLjY2MTM3MzAyNDY1MjE3NCAqIGwgLSAuOTE0NTIzMDgxMzA0MzQ4ICogbSArIC4yMzEzNjIwODE3MzkxMzA0NSAqIHMpLFxuXHRcdHk6IHJlbCgtLjMyNTA3NTg2MTE4NDQ1MzMgKiBsICsgMS41NzE4NDcwMjY3MzI1NDMgKiBtIC0gLjIxODI1MzgzNDUzMjI3OTI4ICogcyksXG5cdFx0ejogcmVsKC0uMDkwOTgyODExICogbCAtIC4zMTI3MjgyOSAqIG0gKyAxLjUyMjc2NjYgKiBzKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFJnYlRvSmFiLmpzXG52YXIgY29udmVydFJnYlRvSmFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9KYWIoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9SZ2IuanNcbnZhciBjb252ZXJ0SmFiVG9SZ2IgPSAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRKYWJUb1h5ejY1KGNvbG9yKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNyA9IHtcblx0bW9kZTogXCJqYWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tanphemJ6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemF6YnpcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0phYixcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9KYWJcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0SmFiVG9SZ2IsXG5cdFx0eHl6NjU6IGNvbnZlcnRKYWJUb1h5ejY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGo6IFswLCAuMjIyXSxcblx0XHRhOiBbLS4xMDksIC4xMjldLFxuXHRcdGI6IFstLjE4NSwgLjEzNF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamNoL2NvbnZlcnRKYWJUb0pjaC5qc1xudmFyIGNvbnZlcnRKYWJUb0pjaCA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImpjaFwiLFxuXHRcdGosXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEpjaFRvSmFiLmpzXG52YXIgY29udmVydEpjaFRvSmFiID0gKHsgaiwgYywgaCwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImphYlwiLFxuXHRcdGosXG5cdFx0YTogYyA/IGMgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSkgOiAwLFxuXHRcdGI6IGMgPyBjICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpIDogMFxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTYgPSB7XG5cdG1vZGU6IFwiamNoXCIsXG5cdHBhcnNlOiBbXCItLWp6Y3poelwiXSxcblx0c2VyaWFsaXplOiBcIi0tanpjemh6XCIsXG5cdHRvTW9kZToge1xuXHRcdGphYjogY29udmVydEpjaFRvSmFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRKYWJUb1JnYihjb252ZXJ0SmNoVG9KYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvSmNoKGNvbnZlcnRSZ2JUb0phYihjKSksXG5cdFx0amFiOiBjb252ZXJ0SmFiVG9KY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjFdLFxuXHRcdGM6IFswLCAuMTldLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ajogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29uc3RhbnRzLmpzXG52YXIgayA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1h5ejUwLmpzXG52YXIgZm4gPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlID8gTWF0aC5wb3codiwgMykgOiAoMTE2ICogdiAtIDE2KSAvIGs7XG52YXIgY29udmVydExhYlRvWHl6NTAgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogZm4oZngpICogRDUwLlgsXG5cdFx0eTogZm4oZnkpICogRDUwLlksXG5cdFx0ejogZm4oZnopICogRDUwLlpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29udmVydFh5ejUwVG9SZ2IuanNcbnZhciBjb252ZXJ0WHl6NTBUb1JnYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAzLjEzNDEzNTk1Njk5NTg3MDcgLSB5ICogMS42MTczODYzMzIxNjEyNTM4IC0gLjQ5MDY2MTk0NjAwODM1MzIgKiB6LFxuXHRcdGc6IHggKiAtLjk3ODc5NTUwMjkxMjA4OSArIHkgKiAxLjkxNjI1NDU2NzI1OTUyNCArIC4wMzM0NDI3MzExNjEzMTk0OSAqIHosXG5cdFx0YjogeCAqIC4wNzE5NTUzNzk4ODQxMTY3NyAtIHkgKiAuMjI4OTc2ODI2NDE1ODMyMiArIDEuNDA1Mzg2MDU4MzI0MTI1ICogelxuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWJUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMYWJUb1h5ejUwKGxhYikpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0UmdiVG9YeXo1MC5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejUwID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNDM2MDY1NzQyODI0ODExICogciArIC4zODUxNTE0Njg4MzM3OTEyICogZyArIC4xNDMwNzg0NTQ0MjI2NDE5NyAqIGIsXG5cdFx0eTogLjIyMjQ5MzE5MTc1NjIzNzAyICogciArIC43MTY4ODcwNTM4MjM4ODIzICogZyArIC4wNjA2MTk3OTA1MzYxNjUzNyAqIGIsXG5cdFx0ejogLjAxMzkyMzkwNDUwMDk0MzQ2NSAqIHIgKyAuMDk3MDgxMjg1NjY1NzQ2MzQgKiBnICsgLjcxNDA5OTM1ODQwMDUxNTUgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0WHl6NTBUb0xhYi5qc1xudmFyIGYgPSAodmFsdWUpID0+IHZhbHVlID4gZSA/IE1hdGguY2JydCh2YWx1ZSkgOiAoayAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTGFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmKHggLyBENTAuWCk7XG5cdGxldCBmMSA9IGYoeSAvIEQ1MC5ZKTtcblx0bGV0IGYyID0gZih6IC8gRDUwLlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiXCIsXG5cdFx0bDogMTE2ICogZjEgLSAxNixcblx0XHRhOiA1MDAgKiAoZjAgLSBmMSksXG5cdFx0YjogMjAwICogKGYxIC0gZjIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0UmdiVG9MYWIuanNcbnZhciBjb252ZXJ0UmdiVG9MYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NTBUb0xhYihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL3BhcnNlTGFiLmpzXG5mdW5jdGlvbiBwYXJzZUxhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGFiXCIgfTtcblx0Y29uc3QgWywgbCwgYSwgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlID09PSBUb2suSHVlIHx8IGEudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbC52YWx1ZSksIDEwMCk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIDEyNSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTUgPSB7XG5cdG1vZGU6IFwibGFiXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0TGFiVG9YeXo1MCxcblx0XHRyZ2I6IGNvbnZlcnRMYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRhOiBbLTEyNSwgMTI1XSxcblx0XHRiOiBbLTEyNSwgMTI1XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGFiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJsYWI2NVwiLFxuXHRwYXJzZTogW1wiLS1sYWItZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sYWItZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0TGFiNjVUb1h5ejY1LFxuXHRcdHJnYjogY29udmVydExhYjY1VG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9MYWI2NSxcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYjY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9wYXJzZUxjaC5qc1xuZnVuY3Rpb24gcGFyc2VMY2goY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwibGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImxjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0fVxuXHRpZiAoYy50eXBlICE9PSBUb2suTm9uZSkgcmVzLmMgPSBNYXRoLm1heCgwLCBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAqIDE1MCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTMgPSB7XG5cdG1vZGU6IFwibGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjogY29udmVydExjaFRvTGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb1JnYihjb252ZXJ0TGNoVG9MYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYihjKSksXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9MY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0cGFyc2U6IFtwYXJzZUxjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBsY2goJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYyAhPT0gdm9pZCAwID8gYy5jIDogXCJub25lXCJ9ICR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2g2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMiA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJsY2g2NVwiLFxuXHRwYXJzZTogW1wiLS1sY2gtZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2gtZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYjY1VG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYjY1KGMpLCBcImxjaDY1XCIpLFxuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwibGNoNjVcIilcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydEx1dlRvTGNodXYuanNcbnZhciBjb252ZXJ0THV2VG9MY2h1diA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKHUgPT09IHZvaWQgMCkgdSA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydCh1ICogdSArIHYgKiB2KTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxjaHV2XCIsXG5cdFx0bCxcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKHYsIHUpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaHV2L2NvbnZlcnRMY2h1dlRvTHV2LmpzXG52YXIgY29udmVydExjaHV2VG9MdXYgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1OiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0djogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0WHl6NTBUb0x1di5qc1xudmFyIHVfZm4kMSA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4kMSA9ICh4LCB5LCB6KSA9PiA5ICogeSAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHVuJDEgPSB1X2ZuJDEoRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4kMSA9IHZfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBsX2ZuID0gKHZhbHVlKSA9PiB2YWx1ZSA8PSBlID8gayAqIHZhbHVlIDogMTE2ICogTWF0aC5jYnJ0KHZhbHVlKSAtIDE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTHV2ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgbCA9IGxfZm4oeSAvIEQ1MC5ZKTtcblx0bGV0IHUgPSB1X2ZuJDEoeCwgeSwgeik7XG5cdGxldCB2ID0gdl9mbiQxKHgsIHksIHopO1xuXHRpZiAoIWlzRmluaXRlKHUpIHx8ICFpc0Zpbml0ZSh2KSkgbCA9IHUgPSB2ID0gMDtcblx0ZWxzZSB7XG5cdFx0dSA9IDEzICogbCAqICh1IC0gdW4kMSk7XG5cdFx0diA9IDEzICogbCAqICh2IC0gdm4kMSk7XG5cdH1cblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImx1dlwiLFxuXHRcdGwsXG5cdFx0dSxcblx0XHR2XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0THV2VG9YeXo1MC5qc1xudmFyIHVfZm4gPSAoeCwgeSwgeikgPT4gNCAqIHggLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB2X2ZuID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4gPSB1X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIHZuID0gdl9mbihENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBjb252ZXJ0THV2VG9YeXo1MCA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChsID09PSAwKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0ejogMFxuXHR9O1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCB1cCA9IHUgLyAoMTMgKiBsKSArIHVuO1xuXHRsZXQgdnAgPSB2IC8gKDEzICogbCkgKyB2bjtcblx0bGV0IHkgPSBENTAuWSAqIChsIDw9IDggPyBsIC8gayA6IE1hdGgucG93KChsICsgMTYpIC8gMTE2LCAzKSk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IHkgKiAoOSAqIHVwKSAvICg0ICogdnApLFxuXHRcdHksXG5cdFx0ejogeSAqICgxMiAtIDMgKiB1cCAtIDIwICogdnApIC8gKDQgKiB2cClcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xjaHV2ID0gKHJnYikgPT4gY29udmVydEx1dlRvTGNodXYoY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSkpO1xudmFyIGNvbnZlcnRMY2h1dlRvUmdiID0gKGxjaHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChjb252ZXJ0TGNodXZUb0x1dihsY2h1dikpKTtcbnZhciBkZWZpbml0aW9uJDExID0ge1xuXHRtb2RlOiBcImxjaHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdGx1djogY29udmVydExjaHV2VG9MdXYsXG5cdFx0cmdiOiBjb252ZXJ0TGNodXZUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvTGNodXYsXG5cdFx0bHV2OiBjb252ZXJ0THV2VG9MY2h1dlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1sY2h1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbGNodXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE3Ni45NTZdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJscmdiXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRMcmdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9McmdiIH0sXG5cdHBhcnNlOiBbXCJzcmdiLWxpbmVhclwiXSxcblx0c2VyaWFsaXplOiBcInNyZ2ItbGluZWFyXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ5ID0ge1xuXHRtb2RlOiBcImx1dlwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo1MDogY29udmVydEx1dlRvWHl6NTAsXG5cdFx0cmdiOiAobHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChsdXYpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0x1dixcblx0XHRyZ2I6IChyZ2IpID0+IGNvbnZlcnRYeXo1MFRvTHV2KGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJ1XCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWx1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbHV2XCIsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdHU6IFstODQuOTM2LCAxNzUuMDQyXSxcblx0XHR2OiBbLTEyNS44ODIsIDg3LjI0M11cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0dTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydExyZ2JUb09rbGFiLmpzXG52YXIgY29udmVydExyZ2JUb09rbGFiID0gKHsgciwgZywgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGguY2JydCguNDEyMjIxNDY5NDcwNzYzICogciArIC41MzYzMzI1MzcyNjE3MzQ4ICogZyArIC4wNTE0NDU5OTMyNjc1MDIyICogYik7XG5cdGxldCBNID0gTWF0aC5jYnJ0KC4yMTE5MDM0OTU4MTc4MjUyICogciArIC42ODA2OTk1NTA2NDUyMzQ0ICogZyArIC4xMDczOTY5NTM1MzY5NDA2ICogYik7XG5cdGxldCBTID0gTWF0aC5jYnJ0KC4wODgzMDI0NTkxOTAwNTY0ICogciArIC4yODE3MTg4MzkxMzYxMjE1ICogZyArIC42Mjk5Nzg3MDE2NzM4MjIyICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IC4yMTA0NTQyNjgzMDkzMTQgKiBMICsgLjc5MzYxNzc3NDcwMjMwNTQgKiBNIC0gLjAwNDA3MjA0MzAxMTYxOTMgKiBTLFxuXHRcdGE6IDEuOTc3OTk4NTMyNDMxMTY4NCAqIEwgLSAyLjQyODU5MjI0MjA0ODU4ICogTSArIC40NTA1OTM3MDk2MTc0MTEgKiBTLFxuXHRcdGI6IC4wMjU5MDQwNDI0NjU1NDc4ICogTCArIC43ODI3NzE3MTI0NTc1Mjk2ICogTSAtIC44MDg2NzU3NTQ5MjMwNzc0ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0UmdiVG9Pa2xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb09rbGFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb09rbGFiKGNvbnZlcnRSZ2JUb0xyZ2IocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRPa2xhYlRvTHJnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvTHJnYiA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IEwgPSBNYXRoLnBvdyhsICsgLjM5NjMzNzc3NzM3NjE3NDkgKiBhICsgLjIxNTgwMzc1NzMwOTkxMzYgKiBiLCAzKTtcblx0bGV0IE0gPSBNYXRoLnBvdyhsIC0gLjEwNTU2MTM0NTgxNTY1ODYgKiBhIC0gLjA2Mzg1NDE3MjgyNTgxMzMgKiBiLCAzKTtcblx0bGV0IFMgPSBNYXRoLnBvdyhsIC0gLjA4OTQ4NDE3NzUyOTgxMTkgKiBhIC0gMS4yOTE0ODU1NDgwMTk0MDkyICogYiwgMyk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogNC4wNzY3NDE2MzYwNzU5NTcgKiBMIC0gMy4zMDc3MTE1MzkyNTgwNjE2ICogTSArIC4yMzA5Njk5MDMxODIxMDQ0ICogUyxcblx0XHRnOiAtMS4yNjg0Mzc5NzMyODUwMzE3ICogTCArIDIuNjA5NzU3MzQ5Mjg3Njg4NyAqIE0gLSAuMzQxMzE5Mzc2MDAyNjU3MyAqIFMsXG5cdFx0YjogLS4wMDQxOTYwNzYxMzg2NzU2ICogTCAtIC43MDM0MTg2MTc5MzU5MzYyICogTSArIDEuNzA3NjE0Njk0MDc0NjExNyAqIFNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9SZ2IuanNcbnZhciBjb252ZXJ0T2tsYWJUb1JnYiA9IChjKSA9PiBjb252ZXJ0THJnYlRvUmdiKGNvbnZlcnRPa2xhYlRvTHJnYihjKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2hlbHBlcnMuanNcbmZ1bmN0aW9uIHRvZSh4KSB7XG5cdGNvbnN0IGtfMSA9IC4yMDY7XG5cdGNvbnN0IGtfMiA9IC4wMztcblx0Y29uc3Qga18zID0gMS4yMDYgLyAxLjAzO1xuXHRyZXR1cm4gLjUgKiAoa18zICogeCAtIGtfMSArIE1hdGguc3FydCgoa18zICogeCAtIGtfMSkgKiAoa18zICogeCAtIGtfMSkgKyA0ICoga18yICoga18zICogeCkpO1xufVxuZnVuY3Rpb24gdG9lX2ludih4KSB7XG5cdHJldHVybiAoeCAqIHggKyAuMjA2ICogeCkgLyAoMS4yMDYgLyAxLjAzICogKHggKyAuMDMpKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYikge1xuXHRsZXQgazAsIGsxLCBrMiwgazMsIGs0LCB3bCwgd20sIHdzO1xuXHRpZiAoLTEuODgxNzAzMjggKiBhIC0gLjgwOTM2NDkzICogYiA+IDEpIHtcblx0XHRrMCA9IDEuMTkwODYyNzc7XG5cdFx0azEgPSAxLjc2NTc2NzI4O1xuXHRcdGsyID0gLjU5NjYyNjQxO1xuXHRcdGszID0gLjc1NTE1MTk3O1xuXHRcdGs0ID0gLjU2NzcxMjQ1O1xuXHRcdHdsID0gNC4wNzY3NDE2NjIxO1xuXHRcdHdtID0gLTMuMzA3NzExNTkxMztcblx0XHR3cyA9IC4yMzA5Njk5MjkyO1xuXHR9IGVsc2UgaWYgKDEuODE0NDQxMDQgKiBhIC0gMS4xOTQ0NTI3NiAqIGIgPiAxKSB7XG5cdFx0azAgPSAuNzM5NTY1MTU7XG5cdFx0azEgPSAtLjQ1OTU0NDA0O1xuXHRcdGsyID0gLjA4Mjg1NDI3O1xuXHRcdGszID0gLjEyNTQxMDc7XG5cdFx0azQgPSAuMTQ1MDMyMDQ7XG5cdFx0d2wgPSAtMS4yNjg0MzgwMDQ2O1xuXHRcdHdtID0gMi42MDk3NTc0MDExO1xuXHRcdHdzID0gLS4zNDEzMTkzOTY1O1xuXHR9IGVsc2Uge1xuXHRcdGswID0gMS4zNTczMzY1Mjtcblx0XHRrMSA9IC0uMDA5MTU3OTk7XG5cdFx0azIgPSAtMS4xNTEzMDIxO1xuXHRcdGszID0gLS41MDU1OTYwNjtcblx0XHRrNCA9IC4wMDY5MjE2Nztcblx0XHR3bCA9IC0uMDA0MTk2MDg2Mztcblx0XHR3bSA9IC0uNzAzNDE4NjE0Nztcblx0XHR3cyA9IDEuNzA3NjE0NzAxO1xuXHR9XG5cdGxldCBTID0gazAgKyBrMSAqIGEgKyBrMiAqIGIgKyBrMyAqIGEgKiBhICsgazQgKiBhICogYjtcblx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdGxldCBrX3MgPSAtLjA4OTQ4NDE3NzUgKiBhIC0gMS4yOTE0ODU1NDggKiBiO1xuXHR7XG5cdFx0bGV0IGxfID0gMSArIFMgKiBrX2w7XG5cdFx0bGV0IG1fID0gMSArIFMgKiBrX207XG5cdFx0bGV0IHNfID0gMSArIFMgKiBrX3M7XG5cdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0bGV0IHMgPSBzXyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMgPSAzICoga19sICogbF8gKiBsXztcblx0XHRsZXQgbV9kUyA9IDMgKiBrX20gKiBtXyAqIG1fO1xuXHRcdGxldCBzX2RTID0gMyAqIGtfcyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMyID0gNiAqIGtfbCAqIGtfbCAqIGxfO1xuXHRcdGxldCBtX2RTMiA9IDYgKiBrX20gKiBrX20gKiBtXztcblx0XHRsZXQgc19kUzIgPSA2ICoga19zICoga19zICogc187XG5cdFx0bGV0IGYgPSB3bCAqIGwgKyB3bSAqIG0gKyB3cyAqIHM7XG5cdFx0bGV0IGYxID0gd2wgKiBsX2RTICsgd20gKiBtX2RTICsgd3MgKiBzX2RTO1xuXHRcdGxldCBmMiA9IHdsICogbF9kUzIgKyB3bSAqIG1fZFMyICsgd3MgKiBzX2RTMjtcblx0XHRTID0gUyAtIGYgKiBmMSAvIChmMSAqIGYxIC0gLjUgKiBmICogZjIpO1xuXHR9XG5cdHJldHVybiBTO1xufVxuZnVuY3Rpb24gZmluZF9jdXNwKGEsIGIpIHtcblx0bGV0IFNfY3VzcCA9IGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYik7XG5cdGxldCByZ2IgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IDEsXG5cdFx0YTogU19jdXNwICogYSxcblx0XHRiOiBTX2N1c3AgKiBiXG5cdH0pO1xuXHRsZXQgTF9jdXNwID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2IuciwgcmdiLmcsIHJnYi5iKSk7XG5cdHJldHVybiBbTF9jdXNwLCBMX2N1c3AgKiBTX2N1c3BdO1xufVxuZnVuY3Rpb24gZmluZF9nYW11dF9pbnRlcnNlY3Rpb24oYSwgYiwgTDEsIEMxLCBMMCwgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGEsIGIpO1xuXHRsZXQgdDtcblx0aWYgKChMMSAtIEwwKSAqIGN1c3BbMV0gLSAoY3VzcFswXSAtIEwwKSAqIEMxIDw9IDApIHQgPSBjdXNwWzFdICogTDAgLyAoQzEgKiBjdXNwWzBdICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdGVsc2Uge1xuXHRcdHQgPSBjdXNwWzFdICogKEwwIC0gMSkgLyAoQzEgKiAoY3VzcFswXSAtIDEpICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdFx0e1xuXHRcdFx0bGV0IGRMID0gTDEgLSBMMDtcblx0XHRcdGxldCBkQyA9IEMxO1xuXHRcdFx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0XHRcdGxldCBrX20gPSAtLjEwNTU2MTM0NTggKiBhIC0gLjA2Mzg1NDE3MjggKiBiO1xuXHRcdFx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdFx0XHRsZXQgbF9kdCA9IGRMICsgZEMgKiBrX2w7XG5cdFx0XHRsZXQgbV9kdCA9IGRMICsgZEMgKiBrX207XG5cdFx0XHRsZXQgc19kdCA9IGRMICsgZEMgKiBrX3M7XG5cdFx0XHR7XG5cdFx0XHRcdGxldCBMID0gTDAgKiAoMSAtIHQpICsgdCAqIEwxO1xuXHRcdFx0XHRsZXQgQyA9IHQgKiBDMTtcblx0XHRcdFx0bGV0IGxfID0gTCArIEMgKiBrX2w7XG5cdFx0XHRcdGxldCBtXyA9IEwgKyBDICoga19tO1xuXHRcdFx0XHRsZXQgc18gPSBMICsgQyAqIGtfcztcblx0XHRcdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0XHRcdGxldCBtID0gbV8gKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdCA9IDMgKiBsX2R0ICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG1kdCA9IDMgKiBtX2R0ICogbV8gKiBtXztcblx0XHRcdFx0bGV0IHNkdCA9IDMgKiBzX2R0ICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdDIgPSA2ICogbF9kdCAqIGxfZHQgKiBsXztcblx0XHRcdFx0bGV0IG1kdDIgPSA2ICogbV9kdCAqIG1fZHQgKiBtXztcblx0XHRcdFx0bGV0IHNkdDIgPSA2ICogc19kdCAqIHNfZHQgKiBzXztcblx0XHRcdFx0bGV0IHIgPSA0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIC4yMzA5Njk5MjkyICogcyAtIDE7XG5cdFx0XHRcdGxldCByMSA9IDQuMDc2NzQxNjYyMSAqIGxkdCAtIDMuMzA3NzExNTkxMyAqIG1kdCArIC4yMzA5Njk5MjkyICogc2R0O1xuXHRcdFx0XHRsZXQgcjIgPSA0LjA3Njc0MTY2MjEgKiBsZHQyIC0gMy4zMDc3MTE1OTEzICogbWR0MiArIC4yMzA5Njk5MjkyICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfciA9IHIxIC8gKHIxICogcjEgLSAuNSAqIHIgKiByMik7XG5cdFx0XHRcdGxldCB0X3IgPSAtciAqIHVfcjtcblx0XHRcdFx0bGV0IGcgPSAtMS4yNjg0MzgwMDQ2ICogbCArIDIuNjA5NzU3NDAxMSAqIG0gLSAuMzQxMzE5Mzk2NSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgZzEgPSAtMS4yNjg0MzgwMDQ2ICogbGR0ICsgMi42MDk3NTc0MDExICogbWR0IC0gLjM0MTMxOTM5NjUgKiBzZHQ7XG5cdFx0XHRcdGxldCBnMiA9IC0xLjI2ODQzODAwNDYgKiBsZHQyICsgMi42MDk3NTc0MDExICogbWR0MiAtIC4zNDEzMTkzOTY1ICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfZyA9IGcxIC8gKGcxICogZzEgLSAuNSAqIGcgKiBnMik7XG5cdFx0XHRcdGxldCB0X2cgPSAtZyAqIHVfZztcblx0XHRcdFx0bGV0IGIgPSAtLjAwNDE5NjA4NjMgKiBsIC0gLjcwMzQxODYxNDcgKiBtICsgMS43MDc2MTQ3MDEgKiBzIC0gMTtcblx0XHRcdFx0bGV0IGIxID0gLS4wMDQxOTYwODYzICogbGR0IC0gLjcwMzQxODYxNDcgKiBtZHQgKyAxLjcwNzYxNDcwMSAqIHNkdDtcblx0XHRcdFx0bGV0IGIyID0gLS4wMDQxOTYwODYzICogbGR0MiAtIC43MDM0MTg2MTQ3ICogbWR0MiArIDEuNzA3NjE0NzAxICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfYiA9IGIxIC8gKGIxICogYjEgLSAuNSAqIGIgKiBiMik7XG5cdFx0XHRcdGxldCB0X2IgPSAtYiAqIHVfYjtcblx0XHRcdFx0dF9yID0gdV9yID49IDAgPyB0X3IgOiAxZTY7XG5cdFx0XHRcdHRfZyA9IHVfZyA+PSAwID8gdF9nIDogMWU2O1xuXHRcdFx0XHR0X2IgPSB1X2IgPj0gMCA/IHRfYiA6IDFlNjtcblx0XHRcdFx0dCArPSBNYXRoLm1pbih0X3IsIE1hdGgubWluKHRfZywgdF9iKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0O1xufVxuZnVuY3Rpb24gZ2V0X1NUX21heChhXywgYl8sIGN1c3AgPSBudWxsKSB7XG5cdGlmICghY3VzcCkgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgTCA9IGN1c3BbMF07XG5cdGxldCBDID0gY3VzcFsxXTtcblx0cmV0dXJuIFtDIC8gTCwgQyAvICgxIC0gTCldO1xufVxuZnVuY3Rpb24gZ2V0X0NzKEwsIGFfLCBiXykge1xuXHRsZXQgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgQ19tYXggPSBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhXywgYl8sIEwsIDEsIEwsIGN1c3ApO1xuXHRsZXQgU1RfbWF4ID0gZ2V0X1NUX21heChhXywgYl8sIGN1c3ApO1xuXHRsZXQgU19taWQgPSAuMTE1MTY5OTMgKyAxIC8gKDcuNDQ3Nzg5NyArIDQuMTU5MDEyNCAqIGJfICsgYV8gKiAoLTIuMTk1NTczNDcgKyAxLjc1MTk4NDAxICogYl8gKyBhXyAqICgtMi4xMzcwNDk0OCAtIDEwLjAyMzAxMDQzICogYl8gKyBhXyAqICgtNC4yNDg5NDU2MSArIDUuMzg3NzA4MTkgKiBiXyArIDQuNjk4OTEwMTMgKiBhXykpKSk7XG5cdGxldCBUX21pZCA9IC4xMTIzOTY0MiArIDEgLyAoMS42MTMyMDMyIC0gLjY4MTI0Mzc5ICogYl8gKyBhXyAqICguNDAzNzA2MTIgKyAuOTAxNDgxMjMgKiBiXyArIGFfICogKC0uMjcwODc5NDMgKyAuNjEyMjM5OSAqIGJfICsgYV8gKiAoLjAwMjk5MjE1IC0gLjQ1Mzk5NTY4ICogYl8gLSAuMTQ2NjE4NzIgKiBhXykpKSk7XG5cdGxldCBrID0gQ19tYXggLyBNYXRoLm1pbihMICogU1RfbWF4WzBdLCAoMSAtIEwpICogU1RfbWF4WzFdKTtcblx0bGV0IENfYSA9IEwgKiBTX21pZDtcblx0bGV0IENfYiA9ICgxIC0gTCkgKiBUX21pZDtcblx0bGV0IENfbWlkID0gLjkgKiBrICogTWF0aC5zcXJ0KE1hdGguc3FydCgxIC8gKDEgLyAoQ19hICogQ19hICogQ19hICogQ19hKSArIDEgLyAoQ19iICogQ19iICogQ19iICogQ19iKSkpKTtcblx0Q19hID0gTCAqIC40O1xuXHRDX2IgPSAoMSAtIEwpICogLjg7XG5cdHJldHVybiBbXG5cdFx0TWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IpKSksXG5cdFx0Q19taWQsXG5cdFx0Q19tYXhcblx0XTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvY29udmVydE9rbGFiVG9Pa2hzbC5qc1xuZnVuY3Rpb24gY29udmVydE9rbGFiVG9Pa2hzbChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGNvbnN0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRjb25zdCBiID0gbGFiLmIgIT09IHZvaWQgMCA/IGxhYi5iIDogMDtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc2xcIixcblx0XHRsOiB0b2UobClcblx0fTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRpZiAoIWMpIHtcblx0XHRyZXQucyA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhsLCBhIC8gYywgYiAvIGMpO1xuXHRsZXQgcztcblx0aWYgKGMgPCBDX21pZCkge1xuXHRcdGxldCBrXzAgPSAwO1xuXHRcdGxldCBrXzEgPSAuOCAqIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHRcdHMgPSAoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSAqIC44O1xuXHR9IGVsc2Uge1xuXHRcdGxldCBrXzAgPSBDX21pZDtcblx0XHRsZXQga18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0bGV0IGtfMiA9IDEgLSBrXzEgLyAoQ19tYXggLSBDX21pZCk7XG5cdFx0cyA9IC44ICsgLjIgKiAoKGMgLSBrXzApIC8gKGtfMSArIGtfMiAqIChjIC0ga18wKSkpO1xuXHR9XG5cdGlmIChzKSB7XG5cdFx0cmV0LnMgPSBzO1xuXHRcdHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0fVxuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2toc2xUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc2xUb09rbGFiKGhzbCkge1xuXHRsZXQgaCA9IGhzbC5oICE9PSB2b2lkIDAgPyBoc2wuaCA6IDA7XG5cdGxldCBzID0gaHNsLnMgIT09IHZvaWQgMCA/IGhzbC5zIDogMDtcblx0bGV0IGwgPSBoc2wubCAhPT0gdm9pZCAwID8gaHNsLmwgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IHRvZV9pbnYobClcblx0fTtcblx0aWYgKGhzbC5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBoc2wuYWxwaGE7XG5cdGlmICghcyB8fCBsID09PSAxKSB7XG5cdFx0cmV0LmEgPSByZXQuYiA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGxldCBiXyA9IE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IFtDXzAsIENfbWlkLCBDX21heF0gPSBnZXRfQ3MocmV0LmwsIGFfLCBiXyk7XG5cdGxldCB0LCBrXzAsIGtfMSwga18yO1xuXHRpZiAocyA8IC44KSB7XG5cdFx0dCA9IDEuMjUgKiBzO1xuXHRcdGtfMCA9IDA7XG5cdFx0a18xID0gLjggKiBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHR9IGVsc2Uge1xuXHRcdHQgPSA1ICogKHMgLSAuOCk7XG5cdFx0a18wID0gQ19taWQ7XG5cdFx0a18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0fVxuXHRsZXQgQyA9IGtfMCArIHQgKiBrXzEgLyAoMSAtIGtfMiAqIHQpO1xuXHRyZXQuYSA9IEMgKiBhXztcblx0cmV0LmIgPSBDICogYl87XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL21vZGVPa2hzbC5qc1xudmFyIG1vZGVPa2hzbCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyMSxcblx0bW9kZTogXCJva2hzbFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1va2hzbFwiXSxcblx0c2VyaWFsaXplOiBcIi0tb2toc2xcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9rbGFiVG9Pa2hzbCxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb09raHNsKGNvbnZlcnRSZ2JUb09rbGFiKGMpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9raHNsVG9Pa2xhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb1JnYihjb252ZXJ0T2toc2xUb09rbGFiKGMpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2tsYWJUb09raHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHN2KGxhYikge1xuXHRsZXQgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGxldCBhID0gbGFiLmEgIT09IHZvaWQgMCA/IGxhYi5hIDogMDtcblx0bGV0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IGFfID0gYyA/IGEgLyBjIDogMTtcblx0bGV0IGJfID0gYyA/IGIgLyBjIDogMTtcblx0bGV0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGxldCBTXzAgPSAuNTtcblx0bGV0IGsgPSAxIC0gU18wIC8gU19tYXg7XG5cdGxldCB0ID0gVCAvIChjICsgbCAqIFQpO1xuXHRsZXQgTF92ID0gdCAqIGw7XG5cdGxldCBDX3YgPSB0ICogYztcblx0bGV0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGxldCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0bGV0IHJnYl9zY2FsZSA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogTF92dCxcblx0XHRhOiBhXyAqIENfdnQsXG5cdFx0YjogYl8gKiBDX3Z0XG5cdH0pO1xuXHRsZXQgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRsID0gbCAvIHNjYWxlX0w7XG5cdGMgPSBjIC8gc2NhbGVfTCAqIHRvZShsKSAvIGw7XG5cdGwgPSB0b2UobCk7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9raHN2XCIsXG5cdFx0czogYyA/IChTXzAgKyBUKSAqIENfdiAvIChUICogU18wICsgVCAqIGsgKiBDX3YpIDogMCxcblx0XHR2OiBsID8gbCAvIExfdiA6IDBcblx0fTtcblx0aWYgKHJldC5zKSByZXQuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChsYWIuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gbGFiLmFscGhhO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2toc3ZUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc3ZUb09rbGFiKGhzdikge1xuXHRjb25zdCByZXQgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRpZiAoaHN2LmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzdi5hbHBoYTtcblx0Y29uc3QgaCA9IGhzdi5oICE9PSB2b2lkIDAgPyBoc3YuaCA6IDA7XG5cdGNvbnN0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRjb25zdCB2ID0gaHN2LnYgIT09IHZvaWQgMCA/IGhzdi52IDogMDtcblx0Y29uc3QgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRjb25zdCBbU19tYXgsIFRdID0gZ2V0X1NUX21heChhXywgYl8pO1xuXHRjb25zdCBTXzAgPSAuNTtcblx0Y29uc3QgayA9IDEgLSBTXzAgLyBTX21heDtcblx0Y29uc3QgTF92ID0gMSAtIHMgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IENfdiA9IHMgKiBUICogU18wIC8gKFNfMCArIFQgLSBUICogayAqIHMpO1xuXHRjb25zdCBMX3Z0ID0gdG9lX2ludihMX3YpO1xuXHRjb25zdCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0Y29uc3QgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGNvbnN0IHNjYWxlX0wgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYl9zY2FsZS5yLCByZ2Jfc2NhbGUuZywgcmdiX3NjYWxlLmIsIDApKTtcblx0Y29uc3QgTF9uZXcgPSB0b2VfaW52KHYgKiBMX3YpO1xuXHRjb25zdCBDID0gQ192ICogTF9uZXcgLyBMX3Y7XG5cdHJldC5sID0gTF9uZXcgKiBzY2FsZV9MO1xuXHRyZXQuYSA9IEMgKiBhXyAqIHNjYWxlX0w7XG5cdHJldC5iID0gQyAqIGJfICogc2NhbGVfTDtcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc3YvbW9kZU9raHN2LmpzXG52YXIgbW9kZU9raHN2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDIwLFxuXHRtb2RlOiBcIm9raHN2XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzdlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHN2LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc3YoY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc3ZUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzdlRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL3BhcnNlT2tsYWIuanNcbmZ1bmN0aW9uIHBhcnNlT2tsYWIoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwib2tsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHRpZiAoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmEgPSBhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhLnZhbHVlIDogYS52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDggPSB7XG5cdC4uLmRlZmluaXRpb24kMTUsXG5cdG1vZGU6IFwib2tsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHJnYjogY29udmVydE9rbGFiVG9McmdiLFxuXHRcdHJnYjogY29udmVydE9rbGFiVG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0THJnYlRvT2tsYWIsXG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9Pa2xhYlxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YTogWy0uNCwgLjRdLFxuXHRcdGI6IFstLjQsIC40XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlT2tsYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgb2tsYWIoJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYSAhPT0gdm9pZCAwID8gYy5hIDogXCJub25lXCJ9ICR7Yy5iICE9PSB2b2lkIDAgPyBjLmIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvcGFyc2VPa2xjaC5qc1xuZnVuY3Rpb24gcGFyc2VPa2xjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xjaFwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogLjQgLyAxMDApO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNyA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJva2xjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjb252ZXJ0UmdiVG9Pa2xhYihjKSwgXCJva2xjaFwiKSxcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjLCBcIm9rbGNoXCIpXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YzogWzAsIC40XSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0UDNUb1h5ejY1LmpzXG52YXIgY29udmVydFAzVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQ4NjU3MDk0ODY0ODIxNiAqIHIgKyAuMjY1NjY3NjkzMTY5MDkzICogZyArIC4xOTgyMTcyODUyMzQzNjI1ICogYixcblx0XHR5OiAuMjI4OTc0NTY0MDY5NzQ4NyAqIHIgKyAuNjkxNzM4NTIxODM2NTA2MiAqIGcgKyAuMDc5Mjg2OTE0MDkzNzQ1ICogYixcblx0XHR6OiAwICogciArIC4wNDUxMTMzODE4NTg5MDI2ICogZyArIDEuMDQzOTQ0MzY4OTAwOTc2ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0WHl6NjVUb1AzLmpzXG52YXIgY29udmVydFh5ejY1VG9QMyA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAyLjQ5MzQ5NjkxMTk0MTQyNjMgLSB5ICogLjkzMTM4MzYxNzkxOTEyNDIgLSAuNDAyNzEwNzg0NDUwNzE3ICogeixcblx0XHRnOiB4ICogLS44Mjk0ODg5Njk1NjE1NzQ5ICsgeSAqIDEuNzYyNjY0MDYwMzE4MzQ2NSArIC4wMjM2MjQ2ODU4NDE5NDM2ICogeixcblx0XHRiOiB4ICogLjAzNTg0NTgzMDI0Mzc4NDUgLSB5ICogLjA3NjE3MjM4OTI2ODA0MTggKyAuOTU2ODg0NTI0MDA3Njg3MSAqIHpcblx0fSwgXCJwM1wiKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcDMvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJwM1wiLFxuXHRwYXJzZTogW1wiZGlzcGxheS1wM1wiXSxcblx0c2VyaWFsaXplOiBcImRpc3BsYXktcDNcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9QMyhjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1AzXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UDNUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRQM1RvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFh5ejUwVG9Qcm9waG90by5qc1xudmFyIGdhbW1hJDEgPSAodikgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPj0gMSAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMSAvIDEuOCk7XG5cdHJldHVybiAxNiAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo1MFRvUHJvcGhvdG8gPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJwcm9waG90b1wiLFxuXHRcdHI6IGdhbW1hJDEoeCAqIDEuMzQ1Nzg2ODgxNjQ3MTU4NSAtIHkgKiAuMjU1NTcyMDg3Mzc5Nzk0NiAtIC4wNTExMDE4NjQ5NzU1NDUzICogeiksXG5cdFx0ZzogZ2FtbWEkMSh4ICogLS41NDQ2MzA3MDUxMjQ5MDE5ICsgeSAqIDEuNTA4MjQ3NzQyODQ1MTQ2NiArIC4wMjA1Mjc0NDc0MzY0MjE0ICogeiksXG5cdFx0YjogZ2FtbWEkMSh4ICogMCArIHkgKiAwICsgMS4yMTE5Njc1NDU2Mzg5NDUyICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFByb3Bob3RvVG9YeXo1MC5qc1xudmFyIGxpbmVhcml6ZSQxID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxNiAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMS44KTtcblx0cmV0dXJuIHYgLyAxNjtcbn07XG52YXIgY29udmVydFByb3Bob3RvVG9YeXo1MCA9IChwcm9waG90bykgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLnIpO1xuXHRsZXQgZyA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNzk3NzY2NjQ0OTAwNjQyMyAqIHIgKyAuMTM1MTgxMjk3NDAwNTMzMSAqIGcgKyAuMDMxMzQ3NzM0MTI4MzkyMiAqIGIsXG5cdFx0eTogLjI4ODA3NDgyODgxOTQwMTMgKiByICsgLjcxMTgzNTIzNDI0MTg3MzEgKiBnICsgODk5MzY5Mzg3MjU2ZS0xNiAqIGIsXG5cdFx0ejogMCAqIHIgKyAwICogZyArIC44MjUxMDQ2MDI1MTA0NjAyICogYlxuXHR9O1xuXHRpZiAocHJvcGhvdG8uYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gcHJvcGhvdG8uYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ1ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdHBhcnNlOiBbXCJwcm9waG90by1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJwcm9waG90by1yZ2JcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9Qcm9waG90byxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejUwVG9Qcm9waG90byhjb252ZXJ0UmdiVG9YeXo1MChjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwKGNvbG9yKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0WHl6NjVUb1JlYzIwMjAuanNcbnZhciDOsSQxID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiQxID0gLjAxODA1Mzk2ODUxMDgwNztcbnZhciBnYW1tYSA9ICh2KSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID4gzrIkMSkgcmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiAozrEkMSAqIE1hdGgucG93KGFicywgLjQ1KSAtIC4wOTkyOTY4MjY4MDk0NDAwOCk7XG5cdHJldHVybiA0LjUgKiB2O1xufTtcbnZhciBjb252ZXJ0WHl6NjVUb1JlYzIwMjAgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZWMyMDIwXCIsXG5cdFx0cjogZ2FtbWEoeCAqIDEuNzE2NjUxMTg3OTcxMjY4MyAtIHkgKiAuMzU1NjcwNzgzNzc2MzkyNSAtIC4yNTMzNjYyODEzNzM2NTk5ICogeiksXG5cdFx0ZzogZ2FtbWEoeCAqIC0uNjY2Njg0MzUxODMyNDg5MyArIHkgKiAxLjYxNjQ4MTIzNjYzNDkzOTUgKyAuMDE1NzY4NTQ1ODEzOTExMSAqIHopLFxuXHRcdGI6IGdhbW1hKHggKiAuMDE3NjM5ODU3NDQ1MzEwOCAtIHkgKiAuMDQyNzcwNjEzMjU3ODA4NSArIC45NDIxMDMxMjEyMzU0NzM5ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0UmVjMjAyMFRvWHl6NjUuanNcbnZhciDOsSA9IDEuMDk5Mjk2ODI2ODA5NDQ7XG52YXIgzrIgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGxpbmVhcml6ZSA9ICh2ID0gMCkgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPCDOsiAqIDQuNSkgcmV0dXJuIHYgLyA0LjU7XG5cdHJldHVybiAoTWF0aC5zaWduKHYpIHx8IDEpICogTWF0aC5wb3coKGFicyArIM6xIC0gMSkgLyDOsSwgMSAvIC40NSk7XG59O1xudmFyIGNvbnZlcnRSZWMyMDIwVG9YeXo2NSA9IChyZWMyMDIwKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplKHJlYzIwMjAucik7XG5cdGxldCBnID0gbGluZWFyaXplKHJlYzIwMjAuZyk7XG5cdGxldCBiID0gbGluZWFyaXplKHJlYzIwMjAuYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC42MzY5NTgwNDgzMDEyOTExICogciArIC4xNDQ2MTY5MDM1ODYyMDgzICogZyArIC4xNjg4ODA5NzUxNjQxNzIxICogYixcblx0XHR5OiAuMjYyNzAwMjEyMDExMjY3ICogciArIC42Nzc5OTgwNzE1MTg4NzA4ICogZyArIC4wNTkzMDE3MTY0Njk4NjIgKiBiLFxuXHRcdHo6IDAgKiByICsgLjAyODA3MjY5MzA0OTA4NzQgKiBnICsgMS4wNjA5ODUwNTc3MTA3OTA5ICogYlxuXHR9O1xuXHRpZiAocmVjMjAyMC5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSByZWMyMDIwLmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInJlYzIwMjBcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9SZWMyMDIwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFJlYzIwMjBUb1h5ejY1LFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UmVjMjAyMFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRwYXJzZTogW1wicmVjMjAyMFwiXSxcblx0c2VyaWFsaXplOiBcInJlYzIwMjBcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnN0YW50cy5qc1xudmFyIGJpYXMgPSAuMDAzNzkzMDczMjU1Mjc1NDQ5MztcbnZhciBiaWFzX2NicnQgPSBNYXRoLmNicnQoYmlhcyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0UmdiVG9YeWIuanNcbnZhciB0cmFuc2ZlciQxID0gKHYpID0+IE1hdGguY2JydCh2KSAtIGJpYXNfY2JydDtcbnZhciBjb252ZXJ0UmdiVG9YeWIgPSAoY29sb3IpID0+IHtcblx0Y29uc3QgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihjb2xvcik7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlciQxKC4zICogciArIC42MjIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyJDEoLjIzICogciArIC42OTIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcyA9IHRyYW5zZmVyJDEoLjI0MzQyMjY4OTI0NTQ3ODIgKiByICsgLjIwNDc2NzQ0NDI0NDk2ODIgKiBnICsgLjU1MTgwOTg2NjUwOTU1MzUgKiBiICsgYmlhcyk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5YlwiLFxuXHRcdHg6IChsIC0gbSkgLyAyLFxuXHRcdHk6IChsICsgbSkgLyAyLFxuXHRcdGI6IHMgLSAobCArIG0pIC8gMlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29udmVydFh5YlRvUmdiLmpzXG52YXIgdHJhbnNmZXIgPSAodikgPT4gTWF0aC5wb3codiArIGJpYXNfY2JydCwgMyk7XG52YXIgY29udmVydFh5YlRvUmdiID0gKHsgeCwgeSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRjb25zdCBsID0gdHJhbnNmZXIoeCArIHkpIC0gYmlhcztcblx0Y29uc3QgbSA9IHRyYW5zZmVyKHkgLSB4KSAtIGJpYXM7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlcihiICsgeSkgLSBiaWFzO1xuXHRjb25zdCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiAxMS4wMzE1NjY5MDQ2Mzk4NjEgKiBsIC0gOS44NjY5NDM5MDgxMzE1NjIgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRnOiAtMy4yNTQxNDczODEwNzQ0MjM3ICogbCArIDQuNDE4NzcwMzc3NTgyNzIzICogbSAtIC4xNjQ2MjI5OTY1MDgyOTkzNCAqIHMsXG5cdFx0YjogLTMuNjU4ODUxMjg2NzEzNjgxNSAqIGwgKyAyLjcxMjkyMzA0NTkzNjA5MjIgKiBtICsgMS45NDU5MjgyNDA3Nzc1ODk1ICogc1xuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDMgPSB7XG5cdG1vZGU6IFwieHliXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJ4XCIsXG5cdFx0XCJ5XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLXh5YlwiXSxcblx0c2VyaWFsaXplOiBcIi0teHliXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRYeWJUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1h5YiB9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbLS4wMTU0LCAuMDI4MV0sXG5cdFx0eTogWzAsIC44NDUzXSxcblx0XHRiOiBbLS4yNzc4LCAuMzg4XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyID0ge1xuXHRtb2RlOiBcInh5ejUwXCIsXG5cdHBhcnNlOiBbXCJ4eXotZDUwXCJdLFxuXHRzZXJpYWxpemU6IFwieHl6LWQ1MFwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo1MFRvUmdiLFxuXHRcdGxhYjogY29udmVydFh5ejUwVG9MYWJcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb1h5ejUwLFxuXHRcdGxhYjogY29udmVydExhYlRvWHl6NTBcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NjRdLFxuXHRcdHk6IFswLCAuOTk5XSxcblx0XHR6OiBbMCwgLjgyNV1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejY1VG9YeXo1MC5qc1xudmFyIGNvbnZlcnRYeXo2NVRvWHl6NTAgPSAoeHl6NjUpID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejY1O1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAxLjA0NzkyOTgyMDg0MDU0ODggKiB4ICsgLjAyMjk0Njc5MzM0MTAxOTEgKiB5IC0gLjA1MDE5MjIyOTU0MzEzNTYgKiB6LFxuXHRcdHk6IC4wMjk2Mjc4MTU2ODgxNTkzICogeCArIC45OTA0MzQ0ODQ1NzMyNDkgKiB5IC0gLjAxNzA3MzgyNTAyOTM4NTEgKiB6LFxuXHRcdHo6IC0uMDA5MjQzMDU4MTUyNTkxMiAqIHggKyAuMDE1MDU1MTQ0ODk2NTc3OSAqIHkgKyAuNzUxODc0Mjg5OTU4MDAwOCAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejUwVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRYeXo1MFRvWHl6NjUgPSAoeHl6NTApID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejUwO1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuOTU1NDczNDUyNzA0MjE4MiAqIHggLSAuMDIzMDk4NTM2ODc0MjYxNCAqIHkgKyAuMDYzMjU5MzA4NjYxMDIxNyAqIHosXG5cdFx0eTogLS4wMjgzNjk3MDY5NjMyMDgxICogeCArIDEuMDA5OTk1NDU4MDA1ODIyNiAqIHkgKyAuMDIxMDQxMzk4OTY2OTQzICogeixcblx0XHR6OiAuMDEyMzE0MDAxNjg4MzE5OSAqIHggLSAuMDIwNTA3Njk2NDMzNDc3OSAqIHkgKyAxLjMzMDM2NTkzNjYwODA3NTMgKiB6XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEgPSB7XG5cdG1vZGU6IFwieHl6NjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0WHl6NjVUb1JnYixcblx0XHR4eXo1MDogY29udmVydFh5ejY1VG9YeXo1MFxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NjUsXG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NV0sXG5cdFx0eTogWzAsIDFdLFxuXHRcdHo6IFswLCAxLjA4OF1cblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcInh5elwiLCBcInh5ei1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDY1XCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR6OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3lpcS9jb252ZXJ0UmdiVG9ZaXEuanNcbnZhciBjb252ZXJ0UmdiVG9ZaXEgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInlpcVwiLFxuXHRcdHk6IC4yOTg4OTUzMSAqIHIgKyAuNTg2NjIyNDcgKiBnICsgLjExNDQ4MjIzICogYixcblx0XHRpOiAuNTk1OTc3OTkgKiByIC0gLjI3NDE3NjEgKiBnIC0gLjMyMTgwMTg5ICogYixcblx0XHRxOiAuMjExNDcwMTcgKiByIC0gLjUyMjYxNzExICogZyArIC4zMTExNDY5NCAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRZaXFUb1JnYi5qc1xudmFyIGNvbnZlcnRZaXFUb1JnYiA9ICh7IHksIGksIHEsIGFscGhhIH0pID0+IHtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAocSA9PT0gdm9pZCAwKSBxID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogeSArIC45NTYwODQ0NSAqIGkgKyAuNjIwODg4NSAqIHEsXG5cdFx0ZzogeSAtIC4yNzEzNzY2NCAqIGkgLSAuNjQ4NjA1OSAqIHEsXG5cdFx0YjogeSAtIDEuMTA1NjE3MjQgKiBpICsgMS43MDI1MDEyNiAqIHFcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uID0ge1xuXHRtb2RlOiBcInlpcVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0WWlxVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9ZaXEgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInlcIixcblx0XHRcImlcIixcblx0XHRcInFcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teWlxXCJdLFxuXHRzZXJpYWxpemU6IFwiLS15aXFcIixcblx0cmFuZ2VzOiB7XG5cdFx0aTogWy0uNTk1LCAuNTk1XSxcblx0XHRxOiBbLS41MjIsIC41MjJdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRxOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JvdW5kLmpzXG52YXIgciA9ICh2YWx1ZSwgcHJlY2lzaW9uKSA9PiBNYXRoLnJvdW5kKHZhbHVlICogKHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pKSkgLyBwcmVjaXNpb247XG52YXIgcm91bmQgPSAocHJlY2lzaW9uID0gNCkgPT4gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyByKHZhbHVlLCBwcmVjaXNpb24pIDogdmFsdWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2Zvcm1hdHRlci5qc1xudmFyIHR3b0RlY2ltYWxzID0gcm91bmQoMik7XG52YXIgY2xhbXAgPSAodmFsdWUpID0+IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbnZhciBmaXh1cCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZChjbGFtcCh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIHJnYlRvU2FtcGxlID0gKHJnYikgPT4ge1xuXHRjb25zdCBbciwgZywgYl0gPSByZ2I7XG5cdGlmICghW1xuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdF0uZXZlcnkoKG4pID0+IE51bWJlci5pc0Zpbml0ZShuKSkpIHJldHVybiBudWxsO1xuXHRjb25zdCBoZXggPSBmb3JtYXRIZXgoe1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0fSk7XG5cdGlmICghaGV4KSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgb2sgPSBva2xjaCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0cmV0dXJuIHtcblx0XHRyZ2IsXG5cdFx0aGV4LFxuXHRcdGw6IG9rPy5sID8/IC41LFxuXHRcdGM6IG9rPy5jID8/IDAsXG5cdFx0aDogb2s/LmggPz8gMFxuXHR9O1xufTtcbnZhciByYW5rV2FsbHBhcGVyU2VlZHMgPSAoY2VudHJvaWRzKSA9PiB7XG5cdGNvbnN0IHNhbXBsZXMgPSBjZW50cm9pZHMubWFwKHJnYlRvU2FtcGxlKS5maWx0ZXIoQm9vbGVhbik7XG5cdGlmICghc2FtcGxlcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXHRjb25zdCBhY2NlbnRQb29sID0gc2FtcGxlcy5maWx0ZXIoKHMpID0+IHMubCA+PSAuMTggJiYgcy5sIDw9IC44OCAmJiBzLmMgPj0gLjAyKS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMgfHwgTWF0aC5hYnMoYi5sIC0gLjU1KSAtIE1hdGguYWJzKGEubCAtIC41NSkpO1xuXHRjb25zdCBwb29sID0gYWNjZW50UG9vbC5sZW5ndGggPyBhY2NlbnRQb29sIDogWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGIuYyAtIGEuYyk7XG5cdGNvbnN0IHByaW1hcnkgPSBwb29sWzBdO1xuXHRpZiAoIXByaW1hcnkpIHJldHVybiBudWxsO1xuXHRjb25zdCBodWVEaXN0ID0gKGEsIGIpID0+IHtcblx0XHRjb25zdCBkID0gTWF0aC5hYnMoYSAtIGIpICUgMzYwO1xuXHRcdHJldHVybiBkID4gMTgwID8gMzYwIC0gZCA6IGQ7XG5cdH07XG5cdGNvbnN0IHBpY2tOZXh0ID0gKHVzZWQpID0+IHtcblx0XHRjb25zdCByZXN0ID0gcG9vbC5maWx0ZXIoKHMpID0+ICF1c2VkLmluY2x1ZGVzKHMpKTtcblx0XHRpZiAoIXJlc3QubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBiYXNlID0gdXNlZFt1c2VkLmxlbmd0aCAtIDFdID8/IHByaW1hcnk7XG5cdFx0XHRjb25zdCBudWRnZWQgPSBmb3JtYXRIZXgoe1xuXHRcdFx0XHRtb2RlOiBcIm9rbGNoXCIsXG5cdFx0XHRcdGw6IE1hdGgubWluKC44NSwgTWF0aC5tYXgoLjIsIGJhc2UubCArICh1c2VkLmxlbmd0aCA9PT0gMSA/IC0uMTIgOiAuMSkpKSxcblx0XHRcdFx0YzogTWF0aC5tYXgoLjA0LCBiYXNlLmMgKiAuODUpLFxuXHRcdFx0XHRoOiBiYXNlLmhcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uYmFzZSxcblx0XHRcdFx0aGV4OiBudWRnZWQgfHwgYmFzZS5oZXgsXG5cdFx0XHRcdGw6IGJhc2UubFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIFsuLi5yZXN0XS5zb3J0KChhLCBiKSA9PiBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChiLmgsIHUuaCkpKSAtIE1hdGgubWluKC4uLnVzZWQubWFwKCh1KSA9PiBodWVEaXN0KGEuaCwgdS5oKSkpIHx8IGIuYyAtIGEuYylbMF0gPz8gcmVzdFswXTtcblx0fTtcblx0Y29uc3Qgc2Vjb25kYXJ5ID0gcGlja05leHQoW3ByaW1hcnldKTtcblx0Y29uc3QgdGVydGlhcnkgPSBwaWNrTmV4dChbcHJpbWFyeSwgc2Vjb25kYXJ5XSk7XG5cdHJldHVybiB7XG5cdFx0cHJpbWFyeTogcHJpbWFyeS5oZXgsXG5cdFx0c2Vjb25kYXJ5OiBzZWNvbmRhcnkuaGV4LFxuXHRcdHRlcnRpYXJ5OiB0ZXJ0aWFyeS5oZXhcblx0fTtcbn07XG52YXIgdGhlbWVIb3N0cyA9ICgpID0+IHtcblx0Y29uc3Qgbm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRub2Rlcy5hZGQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbnYtc2hlbGwtcm9vdCwgLndmLWRlbW8tcm9vdCwgdWktd2luZG93XCIpLmZvckVhY2goKGVsKSA9PiBub2Rlcy5hZGQoZWwpKTtcblx0cmV0dXJuIFsuLi5ub2Rlc107XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyA9IChzZWVkcykgPT4ge1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgdGhlbWVIb3N0cygpKSBmb3IgKGNvbnN0IFtwcm9wLCBrZXldIG9mIFNFRURfUFJPUFMpIGhvc3Quc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgc2VlZHNba2V5XSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlldy1leHBsb3JlciwgW2RhdGEtdmlldz0nZXhwbG9yZXInXSwgLnZpZXctdmlld2VyLCBbZGF0YS12aWV3PSd2aWV3ZXInXSwgLnZpZXctc2V0dGluZ3MsIFtkYXRhLXZpZXc9J3NldHRpbmdzJ11cIikuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItcHJpbWFyeVwiLCBzZWVkcy5wcmltYXJ5KTtcblx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmFzZS1jb2xvclwiLCBzZWVkcy5wcmltYXJ5KTtcblx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3Itc2Vjb25kYXJ5XCIsIHNlZWRzLnNlY29uZGFyeSk7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXRlcnRpYXJ5XCIsIHNlZWRzLnRlcnRpYXJ5KTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNlZWRzKSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJJTUFSWV9TVE9SQUdFX0tFWSwgc2VlZHMucHJpbWFyeSk7XG5cdH0gY2F0Y2gge31cblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi10aGVtZS1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRzb3VyY2U6IFwid2FsbHBhcGVyXCIsXG5cdFx0c2VlZHNcblx0fSB9KSk7XG59O1xudmFyIGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9TVE9SQUdFX0tFWSk7XG5cdFx0aWYgKCFyYXcpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcblx0XHRpZiAoIXBhcnNlZD8ucHJpbWFyeSB8fCAhcGFyc2VkPy5zZWNvbmRhcnkgfHwgIXBhcnNlZD8udGVydGlhcnkpIHJldHVybiBudWxsO1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyID0gYXN5bmMgKGltZ1VSTCwgb3B0cykgPT4ge1xuXHRjb25zdCBzcmNLZXkgPSB0eXBlb2YgaW1nVVJMID09PSBcInN0cmluZ1wiID8gaW1nVVJMLnNsaWNlKDAsIDIwNDgpIDogYGJsb2I6JHtpbWdVUkwubmFtZSB8fCBcIndhbGxwYXBlclwifToke2ltZ1VSTC5zaXplfWA7XG5cdGlmICghb3B0cz8uZm9yY2UpIHRyeSB7XG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZKSA9PT0gc3JjS2V5KSB7XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0YXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKGNhY2hlZCk7XG5cdFx0XHRcdHJldHVybiBjYWNoZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2VudHJvaWRzID0gYXdhaXQgZ2V0RG9taW5hbnRDb2xvcnMoaW1nVVJMKTtcblx0XHRjb25zdCBzZWVkcyA9IHJhbmtXYWxscGFwZXJTZWVkcyhjZW50cm9pZHMpO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gc2VlZHM7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciBmYWlsZWRcIiwgZXJyKTtcblx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0XHRcdHJldHVybiBjYWNoZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlID0gKCkgPT4ge1xuXHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0aWYgKGNhY2hlZCkgYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKGNhY2hlZCk7XG5cdHJldHVybiBjYWNoZWQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvY2FudmFzL0NhbnZhcy50c1xudmFyIGJsb2JJbWFnZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGRlbGF5ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXSk7XG52YXIgc2hlZHVsZXIgPSBtYWtlUkFGQ3ljbGUoKTtcbnZhciBnZXRJbWdXaWR0aCA9IChpbWcpID0+IHtcblx0cmV0dXJuIGltZz8ubmF0dXJhbFdpZHRoIHx8IGltZz8ud2lkdGggfHwgMTtcbn07XG52YXIgZ2V0SW1nSGVpZ2h0ID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsSGVpZ2h0IHx8IGltZz8uaGVpZ2h0IHx8IDE7XG59O1xudmFyIGNyZWF0ZTJkQ29udGV4dCA9IChjYW52YXMpID0+IHtcblx0Y29uc3QgYmFzZSA9IHtcblx0XHRhbHBoYTogdHJ1ZSxcblx0XHRkZXN5bmNocm9uaXplZDogdHJ1ZSxcblx0XHRwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuXHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZVxuXHR9O1xuXHRmb3IgKGNvbnN0IGNvbG9yU3BhY2Ugb2YgW1xuXHRcdFwicmVjMjEwMC1obGdcIixcblx0XHRcImRpc3BsYXktcDNcIixcblx0XHRcInNyZ2JcIlxuXHRdKSB0cnkge1xuXHRcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwge1xuXHRcdFx0Li4uYmFzZSxcblx0XHRcdGNvbG9yU3BhY2Vcblx0XHR9KTtcblx0XHRpZiAoY3R4KSByZXR1cm4gY3R4O1xuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgYmFzZSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG59O1xudmFyIGNhbGxCeUZyYW1lID0gKHBvaW50ZXJJZCwgY2IpID0+IHtcblx0ZGVsYXllZC5zZXQocG9pbnRlcklkLCBjYik7XG59O1xudmFyIGNvdmVyID0gKGN0eCwgaW1nLCBzY2FsZSA9IDEsIHBvcnQsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3QgY2FudmFzID0gY3R4LmNhbnZhcztcblx0Y3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cdGN0eC5yb3RhdGUoKC1vcmllbnQgfHwgMCkgKiAoTWF0aC5QSSAqIC41KSk7XG5cdGN0eC5yb3RhdGUoKDEgLSBwb3J0KSAqIChNYXRoLlBJIC8gMikpO1xuXHRjdHgudHJhbnNsYXRlKC0oZ2V0SW1nV2lkdGgoaW1nKSAvIDIpICogc2NhbGUsIC0oZ2V0SW1nSGVpZ2h0KGltZykgLyAyKSAqIHNjYWxlKTtcbn07XG52YXIgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSA9IChibG9iKSA9PiB7XG5cdGlmICghYmxvYkltYWdlTWFwLmhhcyhibG9iKSAmJiAoYmxvYiBpbnN0YW5jZW9mIEJsb2IgfHwgYmxvYiBpbnN0YW5jZW9mIEZpbGUgfHwgYmxvYiBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCBibG9iIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXAgfHwgYmxvYiBpbnN0YW5jZW9mIEltYWdlKSkge1xuXHRcdGNvbnN0IHBlbmRpbmcgPSBjcmVhdGVJbWFnZUJpdG1hcChibG9iKS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRibG9iSW1hZ2VNYXAuZGVsZXRlKGJsb2IpO1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH0pO1xuXHRcdGJsb2JJbWFnZU1hcC5zZXQoYmxvYiwgcGVuZGluZyk7XG5cdH1cblx0cmV0dXJuIGJsb2JJbWFnZU1hcC5nZXQoYmxvYik7XG59O1xudmFyIGJpbmRDYWNoZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmluZENhY2hlXCIpO1xuZ2xvYmFsVGhpc1tiaW5kQ2FjaGVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQ2FjaGUgPSBnbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF07XG52YXIgYmluZENhY2hlZCA9IChjYiwgY3R4KSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGJpbmRDYWNoZS5nZXQoY2IpO1xuXHRpZiAodHlwZW9mIGNhY2hlZCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY2FjaGVkO1xuXHRjb25zdCBib3VuZCA9IGNiLmJpbmQoY3R4KTtcblx0YmluZENhY2hlLnNldChjYiwgYm91bmQpO1xuXHRyZXR1cm4gYm91bmQ7XG59O1xudmFyIFVJQ2FudmFzID0gbnVsbDtcbmlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIikgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyBleHRlbmRzIEhUTUxDYW52YXNFbGVtZW50IHtcblx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcblx0XHRcImRhdGEtc3JjXCIsXG5cdFx0XCJkYXRhLW9yaWVudFwiLFxuXHRcdFwib3JpZW50XCJcblx0XTtcblx0Y3R4ID0gbnVsbDtcblx0aW1hZ2UgPSBudWxsO1xuXHQjc2l6ZSA9IFsxLCAxXTtcblx0I2xvYWRpbmcgPSBcIlwiO1xuXHQjcmVhZHkgPSBcIlwiO1xuXHRnZXQgI29yaWVudCgpIHtcblx0XHRjb25zdCByYXcgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID8/IHRoaXMuZ2V0QXR0cmlidXRlKFwib3JpZW50XCIpID8/IFwiMFwiO1xuXHRcdGNvbnN0IG4gPSBOdW1iZXIucGFyc2VJbnQocmF3LCAxMCk7XG5cdFx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xuXHR9XG5cdHNldCAjb3JpZW50KHZhbHVlKSB7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBzKTtcblx0fVxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgXywgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSBcImRhdGEtc3JjXCIpIHRoaXMuI3ByZWxvYWQobmV3VmFsdWUpO1xuXHRcdGlmIChuYW1lID09IFwiZGF0YS1vcmllbnRcIiB8fCBuYW1lID09IFwib3JpZW50XCIpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdH1cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxaSwgMTAwZHZpKSlcIik7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMCUsIG1pbigxMDBjcWIsIDEwMGR2YikpXCIpO1xuXHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8ud2lkdGggfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSwgTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRIZWlnaHQgfHwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSwgMSksIHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8uaGVpZ2h0IHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdHRoaXMuI3ByZWxvYWQodGhpcy4jbG9hZGluZyA9IHRoaXMuZGF0YXNldC5zcmMgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBjYW52YXMgPSB0aGlzO1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblx0XHRjb25zdCBmaXhTaXplID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgb2xkID0gdGhpcy4jc2l6ZTtcblx0XHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8ud2lkdGggfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSwgTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRIZWlnaHQgfHwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSwgMSksIHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8uaGVpZ2h0IHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHR9O1xuXHRcdHNoZWR1bGVyPy5zaGVkdWxlPy4oKCkgPT4ge1xuXHRcdFx0dGhpcy5jdHggPSBjcmVhdGUyZENvbnRleHQoY2FudmFzKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY3R4Py5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHRcdGNhbnZhcz8uY29uZmlndXJlSGlnaER5bmFtaWNSYW5nZT8uKHsgbW9kZTogXCJleHRlbmRlZFwiIH0pO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0dGhpcy5pbmVydCA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0UG9zaXRpb24gPSBcImNlbnRlclwiO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwidS1jYW52YXNcIik7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1Mi1jYW52YXNcIik7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1aS1jYW52YXNcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWlubGluZS1zaXplXCIsIFwibWluKDEwMCUsIG1pbigxMDBjcWksIDEwMGR2aSkpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMCUsIG1pbigxMDBjcWIsIDEwMGR2YikpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImR5bmFtaWMtcmFuZ2UtbGltaXRcIiwgXCJuby1saW1pdFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zcGFjZVwiLCBcImRpc3BsYXktcDNcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0Zml4U2l6ZSgpO1xuXHRcdFx0bmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdFx0XHRcdGNvbnN0IGJveCA9IGVudHJ5Py5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplPy5bMF07XG5cdFx0XHRcdFx0aWYgKGJveCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb2xkID0gdGhpcy4jc2l6ZTtcblx0XHRcdFx0XHRcdHRoaXMuI3NpemUgPSBbTWF0aC5tYXgoYm94LmlubGluZVNpemUgfHwgdGhpcy53aWR0aCwgMSksIE1hdGgubWF4KGJveC5ibG9ja1NpemUgfHwgdGhpcy5oZWlnaHQsIDEpXTtcblx0XHRcdFx0XHRcdGlmIChvbGQ/LlswXSAhPSB0aGlzLiNzaXplWzBdIHx8IG9sZD8uWzFdICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KS5vYnNlcnZlKHRoaXMsIHsgYm94OiBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiIH0pO1xuXHRcdFx0dGhpcy4jcHJlbG9hZCh0aGlzLiNsb2FkaW5nID0gdGhpcy5kYXRhc2V0LnNyYyB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHRcdGlmICh0aGlzLmltYWdlKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0fSk7XG5cdH1cblx0YXN5bmMgJHVzZUltYWdlQXNTb3VyY2UoYmxvYiwgcmVhZHkpIHtcblx0XHRyZWFkeSB8fD0gdGhpcy4jbG9hZGluZztcblx0XHRjb25zdCBpbWcgPSBibG9iIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXAgPyBibG9iIDogYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZShibG9iKS5jYXRjaChjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0aWYgKGltZyAmJiByZWFkeSA9PSB0aGlzLiNsb2FkaW5nKSB7XG5cdFx0XHR0aGlzLmltYWdlID0gaW1nO1xuXHRcdFx0dGhpcy4jcmVuZGVyKHJlYWR5KTtcblx0XHR9XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjYW52YXMgPSB0aGlzLCBjdHggPSB0aGlzLmN0eCwgaW1nID0gdGhpcy5pbWFnZTtcblx0XHRpZiAoaW1nICYmIGN0eCAmJiAod2hhdElzUmVhZHkgPT0gdGhpcy4jbG9hZGluZyB8fCAhd2hhdElzUmVhZHkpKSB7XG5cdFx0XHRpZiAod2hhdElzUmVhZHkpIHRoaXMuI3JlYWR5ID0gd2hhdElzUmVhZHk7XG5cdFx0XHRpZiAodGhpcy53aWR0aCAhPSB0aGlzLiNzaXplWzBdKSB0aGlzLndpZHRoID0gdGhpcy4jc2l6ZVswXTtcblx0XHRcdGlmICh0aGlzLmhlaWdodCAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLmhlaWdodCA9IHRoaXMuI3NpemVbMV07XG5cdFx0XHR0aGlzLnN0eWxlLmFzcGVjdFJhdGlvID0gYCR7dGhpcy53aWR0aCB8fCAxfSAvICR7dGhpcy5oZWlnaHQgfHwgMX1gO1xuXHRcdFx0Y29uc3Qgb3ggPSB0aGlzLiNvcmllbnQgJSAyIHx8IDA7XG5cdFx0XHRjb25zdCBwb3J0ID0gZ2V0SW1nV2lkdGgoaW1nKSA8PSBnZXRJbWdIZWlnaHQoaW1nKSA/IDEgOiAwO1xuXHRcdFx0Y29uc3Qgc2NhbGUgPSBNYXRoLm1heChjYW52YXNbW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1bb3hdXSAvIChwb3J0ID8gZ2V0SW1nSGVpZ2h0KGltZykgOiBnZXRJbWdXaWR0aChpbWcpKSwgY2FudmFzW1tcIndpZHRoXCIsIFwiaGVpZ2h0XCJdW294XV0gLyAocG9ydCA/IGdldEltZ1dpZHRoKGltZykgOiBnZXRJbWdIZWlnaHQoaW1nKSkpO1xuXHRcdFx0Y3R4LnNhdmUoKTtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblx0XHRcdGNvdmVyKGN0eCwgaW1nLCBzY2FsZSwgcG9ydCwgdGhpcy4jb3JpZW50KTtcblx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGggKiBzY2FsZSwgaW1nLmhlaWdodCAqIHNjYWxlKTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9XG5cdCNwcmVsb2FkKHNyYykge1xuXHRcdGNvbnN0IHJlYWR5ID0gc3JjIHx8IHRoaXMuI2xvYWRpbmc7XG5cdFx0dGhpcy4jbG9hZGluZyA9IHJlYWR5O1xuXHRcdHJldHVybiBmZXRjaChzcmMsIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyc3ApID0+IHRoaXMuJHVzZUltYWdlQXNTb3VyY2UoYXdhaXQgcnNwLmJsb2IoKSwgcmVhZHkpPy5jYXRjaChjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpPy5jYXRjaD8uKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7XG5cdFx0Y29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cdFx0aWYgKHRoaXMuaW1hZ2UgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHNoZWR1bGVyPy5zaGVkdWxlPy4oYmluZENhY2hlZCh0aGlzLiRyZW5kZXJQYXNzLCB0aGlzKSk7XG5cdH1cbn07XG5lbHNlIFVJQ2FudmFzID0gY2xhc3MgVUlDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cdCRyZW5kZXJQYXNzKHdoYXRJc1JlYWR5KSB7fVxuXHQkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJldHVybiBibG9iO1xuXHR9XG5cdCNwcmVsb2FkKHNyYykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7fVxuXHQjb3JpZW50ID0gMDtcblx0I2xvYWRpbmcgPSBcIlwiO1xuXHQjcmVhZHkgPSBcIlwiO1xuXHQjc2l6ZSA9IFsxLCAxXTtcblx0Y3R4ID0gbnVsbDtcblx0aW1hZ2UgPSBudWxsO1xufTtcbnRyeSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZShcInVpLWNhbnZhc1wiLCBVSUNhbnZhcywgeyBleHRlbmRzOiBcImNhbnZhc1wiIH0pO1xufSBjYXRjaCAoZSkge31cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2NhbnZhcy9DYW52YXMtMi50c1xudmFyIFdBTExQQVBFUl9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLWltYWdlXCI7XG52YXIgREVGQVVMVF9XQUxMUEFQRVJfVVJMID0gXCIvYXNzZXRzL3dhbGxwYXBlci5qcGdcIjtcbnZhciBXQUxMUEFQRVJfSURCX01BUktFUiA9IFwiaWRiOnJzLXdhbGxwYXBlclwiO1xudmFyIElEQl9OQU1FID0gXCJjd3NwLXdhbGxwYXBlci12MVwiO1xudmFyIElEQl9TVE9SRSA9IFwiYmxvYnNcIjtcbnZhciBJREJfS0VZID0gXCJjdXJyZW50XCI7XG52YXIgTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTID0gNTEyZTM7XG52YXIgbGl2ZU9iamVjdFVybCA9IG51bGw7XG52YXIgY3VycmVudE9yaWVudE51bWJlciA9ICgpID0+IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG52YXIgcmV2b2tlTGl2ZU9iamVjdFVybCA9ICgpID0+IHtcblx0aWYgKGxpdmVPYmplY3RVcmwgJiYgbGl2ZU9iamVjdFVybC5zdGFydHNXaXRoKFwiYmxvYjpcIikpIHRyeSB7XG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChsaXZlT2JqZWN0VXJsKTtcblx0fSBjYXRjaCB7fVxuXHRsaXZlT2JqZWN0VXJsID0gbnVsbDtcbn07XG52YXIgb3BlbldhbGxwYXBlckRiID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRpZiAodHlwZW9mIGluZGV4ZWREQiA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHJlamVjdCgvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiaW5kZXhlZERCIHVuYXZhaWxhYmxlXCIpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oSURCX05BTUUsIDEpO1xuXHRyZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRiID0gcmVxLnJlc3VsdDtcblx0XHRpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoSURCX1NUT1JFKSkgZGIuY3JlYXRlT2JqZWN0U3RvcmUoSURCX1NUT1JFKTtcblx0fTtcblx0cmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCk7XG5cdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIG9wZW4gZmFpbGVkXCIpKTtcbn0pO1xudmFyIGlkYlB1dFdhbGxwYXBlciA9IGFzeW5jIChibG9iKSA9PiB7XG5cdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihJREJfU1RPUkUsIFwicmVhZHdyaXRlXCIpO1xuXHRcdFx0dHgub2JqZWN0U3RvcmUoSURCX1NUT1JFKS5wdXQoYmxvYiwgSURCX0tFWSk7XG5cdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0dHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIHB1dCBmYWlsZWRcIikpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRiLmNsb3NlKCk7XG5cdH1cbn07XG52YXIgaWRiR2V0V2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBkYiA9IGF3YWl0IG9wZW5XYWxscGFwZXJEYigpO1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCByZXEgPSBkYi50cmFuc2FjdGlvbihJREJfU1RPUkUsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoSURCX1NUT1JFKS5nZXQoSURCX0tFWSk7XG5cdFx0XHRyZXEub25zdWNjZXNzID0gKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2ID0gcmVxLnJlc3VsdDtcblx0XHRcdFx0cmVzb2x2ZSh2IGluc3RhbmNlb2YgQmxvYiA/IHYgOiBudWxsKTtcblx0XHRcdH07XG5cdFx0XHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBnZXQgZmFpbGVkXCIpKTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRkYi5jbG9zZSgpO1xuXHR9XG59O1xudmFyIGlkYkNsZWFyV2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihJREJfU1RPUkUsIFwicmVhZHdyaXRlXCIpO1xuXHRcdFx0XHR0eC5vYmplY3RTdG9yZShJREJfU1RPUkUpLmRlbGV0ZShJREJfS0VZKTtcblx0XHRcdFx0dHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcblx0XHRcdFx0dHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIGRlbGV0ZSBmYWlsZWRcIikpO1xuXHRcdFx0fSk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGRiLmNsb3NlKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xudmFyIHJlYWRTdG9yYWdlUG9pbnRlciA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSk7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRyaW0oKSA/IHZhbHVlLnRyaW0oKSA6IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxufTtcbnZhciB3cml0ZVN0b3JhZ2VQb2ludGVyID0gKHZhbHVlKSA9PiB7XG5cdHRyeSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZLCB2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBpc0lubGluZVBheWxvYWQgPSAodXJsKSA9PiB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHVybC5zdGFydHNXaXRoKFwiYmxvYjpcIik7XG52YXIgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRpZiAocG9pbnRlciA9PT0gXCJpZGI6cnMtd2FsbHBhcGVyXCIgfHwgcG9pbnRlci5zdGFydHNXaXRoKFwiaWRiOlwiKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBibG9iID0gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCk7XG5cdFx0XHRpZiAoYmxvYikge1xuXHRcdFx0XHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdFx0XHRcdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSB3YWxscGFwZXIgSURCIHJlc3RvcmUgZmFpbGVkXCIsIGVycik7XG5cdFx0fVxuXHRcdHJldHVybiBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdH1cblx0aWYgKHBvaW50ZXIuc3RhcnRzV2l0aChcImRhdGE6XCIpICYmIHBvaW50ZXIubGVuZ3RoID4gTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTKSB0cnkge1xuXHRcdGNvbnN0IGJsb2IgPSBhd2FpdCBpZGJHZXRXYWxscGFwZXIoKTtcblx0XHRpZiAoYmxvYikge1xuXHRcdFx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRcdFx0bGl2ZU9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHR3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0XHRcdHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gcG9pbnRlciB8fCBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG59O1xudmFyIGdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyID0gKCkgPT4gcmVhZFN0b3JhZ2VQb2ludGVyKCk7XG52YXIgc3luY0NhbnZhc09yaWVudCA9IChjYW52YXMpID0+IHtcblx0Y29uc3QgYXBwbHkgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbiA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRjb25zdCBzID0gU3RyaW5nKG4pO1xuXHRcdGlmIChjYW52YXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgIT09IHMpIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHRpZiAoY2FudmFzLmdldEF0dHJpYnV0ZShcIm9yaWVudFwiKSAhPT0gcykgY2FudmFzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBzKTtcblx0XHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudFwiLCBzKTtcblx0XHRjYW52YXMub3JpZW50ID0gbjtcblx0fTtcblx0YXBwbHkoKTtcblx0cmV0dXJuIHdoZW5BbnlTY3JlZW5DaGFuZ2VzKGFwcGx5KTtcbn07XG52YXIgc3luY0FwcFdhbGxwYXBlck9yaWVudCA9ICgpID0+IHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCIpLmZvckVhY2goKGNhbnZhcykgPT4ge1xuXHRcdGNvbnN0IG4gPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyhuKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBzKTtcblx0XHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudFwiLCBzKTtcblx0fSk7XG59O1xudmFyIHN5bmNHbG93VG9UaGVtZSA9IChnbG93KSA9PiB7XG5cdGNvbnN0IHByaW1hcnkgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY29sb3ItcHJpbWFyeVwiKS50cmltKCkgfHwgXCIjNWI4NmViXCI7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZCA9IGByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE1JSAyMCUsIGNvbG9yLW1peChpbiBva2xhYiwgJHtwcmltYXJ5fSA0NSUsIHRyYW5zcGFyZW50KSAwJSwgdHJhbnNwYXJlbnQgNDAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3NSUgNzIlLCBjb2xvci1taXgoaW4gb2tsYWIsICR7cHJpbWFyeX0gMzUlLCB0cmFuc3BhcmVudCkgMCUsIHRyYW5zcGFyZW50IDQzJSlgO1xufTtcbnZhciBwYWludFdhbGxwYXBlck9uQ2FudmFzZXMgPSAocGFpbnRVcmwpID0+IHtcblx0Y29uc3QgY2FudmFzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXNbaXM9XFxcInVpLWNhbnZhc1xcXCJdLCBbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhcy51aS1jYW52YXNcIik7XG5cdGNvbnN0IG9yaWVudCA9IFN0cmluZyhjdXJyZW50T3JpZW50TnVtYmVyKCkpO1xuXHRjYW52YXNlcy5mb3JFYWNoKChjYW52YXMpID0+IHtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgcGFpbnRVcmwpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBvcmllbnQpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgb3JpZW50KTtcblx0XHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudFwiLCBvcmllbnQpO1xuXHR9KTtcbn07XG52YXIgZGF0YVVybFRvQmxvYiA9IGFzeW5jIChkYXRhVXJsKSA9PiB7XG5cdHJldHVybiAoYXdhaXQgZmV0Y2goZGF0YVVybCkpLmJsb2IoKTtcbn07XG52YXIgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IgPSBhc3luYyAoYmxvYikgPT4ge1xuXHRpZiAoIShibG9iIGluc3RhbmNlb2YgQmxvYikgfHwgYmxvYi5zaXplIDw9IDApIHtcblx0XHRzZXRBcHBXYWxscGFwZXIoREVGQVVMVF9XQUxMUEFQRVJfVVJMKTtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG5cdHJldm9rZUxpdmVPYmplY3RVcmwoKTtcblx0bGl2ZU9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyhsaXZlT2JqZWN0VXJsKTtcblx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIobGl2ZU9iamVjdFVybCwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRhd2FpdCBpZGJQdXRXYWxscGFwZXIoYmxvYik7XG5cdFx0d3JpdGVTdG9yYWdlUG9pbnRlcihXQUxMUEFQRVJfSURCX01BUktFUik7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSB3YWxscGFwZXIgSURCIHBlcnNpc3QgZmFpbGVkXCIsIGVycik7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRjb25zdCBkYXRhVXJsID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShTdHJpbmcocmVhZGVyLnJlc3VsdCB8fCBcIlwiKSk7XG5cdFx0XHRcdHJlYWRlci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlYWRlci5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwicmVhZCBmYWlsZWRcIikpO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKGRhdGFVcmwgJiYgIXdyaXRlU3RvcmFnZVBvaW50ZXIoZGF0YVVybCkpIGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSB3YWxscGFwZXIgbG9jYWxTdG9yYWdlIHBlcnNpc3QgYWxzbyBmYWlsZWQgKHF1b3RhPylcIik7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cdHRyeSB7XG5cdFx0Z2xvYmFsVGhpcy5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwiY3dzcC13YWxscGFwZXItY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0XHRwb2ludGVyOiBXQUxMUEFQRVJfSURCX01BUktFUixcblx0XHRcdHVybDogbGl2ZU9iamVjdFVybFxuXHRcdH0gfSkpO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBsaXZlT2JqZWN0VXJsO1xufTtcbnZhciBpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIgPSAoY29udGFpbmVyKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBjb250YWluZXI7XG5cdHJvb3QucmVwbGFjZUNoaWxkcmVuKCk7XG5cdHJvb3QuZGF0YXNldC5hcHBMYXllciA9IFwiY2FudmFzXCI7XG5cdHJvb3Quc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdHJvb3Quc3R5bGUuaW5zZXQgPSBcIjBcIjtcblx0cm9vdC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdHJvb3Quc3R5bGUuYmFja2dyb3VuZCA9IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxOCUgMTIlLCAjMWIyYTQ1IDAlLCAjMGYxNzI4IDQyJSwgIzA2MDkxMCAxMDAlKVwiO1xuXHRjb25zdCBnbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Z2xvdy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2dsb3dcIjtcblx0Z2xvdy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Z2xvdy5zdHlsZS5pbnNldCA9IFwiLTIwJVwiO1xuXHRnbG93LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE1JSAyMCUsIHJnYmEoMTQ1LDE4NSwyNTUsMC40NSkgMCUsIHRyYW5zcGFyZW50IDQwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzUlIDcyJSwgcmdiYSg5MSwxMzQsMjM1LDAuMzUpIDAlLCB0cmFuc3BhcmVudCA0MyUpXCI7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwgeyBpczogXCJ1aS1jYW52YXNcIiB9KTtcblx0Y2FudmFzLmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19faW1hZ2UgdWktY2FudmFzXCI7XG5cdGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Y2FudmFzLnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdGNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdGNhbnZhcy5zdHlsZS5pbmxpbmVTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5ibG9ja1NpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLm1heElubGluZVNpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLm1heEJsb2NrU2l6ZSA9IFwiMTAwJVwiO1xuXHRjYW52YXMuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXHRjYW52YXMuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJub3JtYWxcIjtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImlzXCIsIFwidWktY2FudmFzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkeW5hbWljLXJhbmdlLWxpbWl0XCIsIFwibm8tbGltaXRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMVwiLCBcImltcG9ydGFudFwiKTtcblx0cm9vdC5hcHBlbmQoZ2xvdywgY2FudmFzKTtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRjb25zdCBjb2xkVXJsID0gcG9pbnRlciA9PT0gXCJpZGI6cnMtd2FsbHBhcGVyXCIgfHwgcG9pbnRlci5zdGFydHNXaXRoKFwiaWRiOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IERFRkFVTFRfV0FMTFBBUEVSX1VSTCA6IHBvaW50ZXI7XG5cdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBjb2xkVXJsKTtcblx0Y29uc3QgZGlzcG9zZU9yaWVudCA9IHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0cmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUoKTtcblx0c3luY0dsb3dUb1RoZW1lKGdsb3cpO1xuXHRyZXNvbHZlQXBwV2FsbHBhcGVyVXJsKCkudGhlbigod2FsbHBhcGVyKSA9PiB7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHdhbGxwYXBlcik7XG5cdFx0c3luY0NhbnZhc09yaWVudChjYW52YXMpO1xuXHRcdHJldHVybiBhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih3YWxscGFwZXIpLnRoZW4oKCkgPT4gc3luY0dsb3dUb1RoZW1lKGdsb3cpKTtcblx0fSk7XG5cdHJldHVybiB7XG5cdFx0cm9vdCxcblx0XHRjYW52YXMsXG5cdFx0Z2xvdyxcblx0XHRkaXNwb3NlT3JpZW50XG5cdH07XG59O1xudmFyIHNldEFwcFdhbGxwYXBlciA9ICh3YWxscGFwZXJVcmwpID0+IHtcblx0Y29uc3QgdmFsdWUgPSBTdHJpbmcod2FsbHBhcGVyVXJsIHx8IFwiXCIpLnRyaW0oKSB8fCBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdGlmIChpc0lubGluZVBheWxvYWQodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IExPQ0FMX1NUT1JBR0VfU0FGRV9DSEFSUykge1xuXHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBibG9iID0gdmFsdWUuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gYXdhaXQgKGF3YWl0IGZldGNoKHZhbHVlKSkuYmxvYigpIDogYXdhaXQgZGF0YVVybFRvQmxvYih2YWx1ZSk7XG5cdFx0XHRcdGF3YWl0IHNldEFwcFdhbGxwYXBlckZyb21CbG9iKGJsb2IpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSBzZXRBcHBXYWxscGFwZXIgaW5saW5lIHBlcnNpc3QgZmFpbGVkXCIsIGVycik7XG5cdFx0XHRcdHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyh2YWx1ZSk7XG5cdFx0XHRcdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKHZhbHVlLCB7IGZvcmNlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWNhbnZhc19fZ2xvd1wiKS5mb3JFYWNoKHN5bmNHbG93VG9UaGVtZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlkYkNsZWFyV2FsbHBhcGVyKCk7XG5cdHJldm9rZUxpdmVPYmplY3RVcmwoKTtcblx0aWYgKCF3cml0ZVN0b3JhZ2VQb2ludGVyKHZhbHVlKSkgY29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBwb2ludGVyIHdyaXRlIGZhaWxlZFwiKTtcblx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHZhbHVlKTtcblx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIodmFsdWUsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0Z2xvYmFsVGhpcy5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwiY3dzcC13YWxscGFwZXItY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0XHRwb2ludGVyOiB2YWx1ZSxcblx0XHRcdHVybDogdmFsdWVcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxufTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBVSUNhbnZhcywgV0FMTFBBUEVSX0lEQl9NQVJLRVIsIFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVksIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyLCBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMsIGJpbmRDYWNoZSwgY2FsbEJ5RnJhbWUsIGNvdmVyLCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlLCBlbGVjdHJvbkFQSSwgZ2V0RG9taW5hbnRDb2xvcnMsIGdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyLCBpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIsIGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSwgcXVhbGl0eU1vZGUsIHJhbmtXYWxscGFwZXJTZWVkcywgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCwgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUsIHNldEFwcFdhbGxwYXBlciwgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IsIHN5bmNBcHBXYWxscGFwZXJPcmllbnQsIHN5bmNDYW52YXNPcmllbnQsIHRoZW1lSG9zdHMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLHlCQUFBQSxJQUF1QixnQkFBQUMsSUFBYyx3QkFBQUMsSUFBc0Isd0JBQUFDLFVBQTRCO0FBR2hHLElBQUlDLEtBQWMsa0JBQ2RDLEtBQWMsRUFBRSxNQUFRO0FBQUEsRUFDM0IsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUNYLEVBQUUsR0FJRUMsS0FBYyxDQUFDQyxHQUFPQyxNQUFRO0FBQ2pDLE1BQUksT0FBT0QsS0FBVSxVQUNyQjtBQUFBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxJQUFJLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDMUMsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLElBQVEsT0FBTztBQUFBLE1BQ3JDLElBQUlBLElBQVEsS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxJQUN0QztBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDM0MsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDMUMsSUFBSUEsS0FBUyxJQUFJLEtBQUtBLElBQVEsT0FBTztBQUFBLE1BQ3JDLFFBQVFBLElBQVEsS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxJQUMxQztBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQ3hCLElBQUlBLElBQVEsT0FBTztBQUFBLElBQ3BCO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUN4QixRQUFRQSxJQUFRLE9BQU87QUFBQSxJQUN4QjtBQUFBO0FBQ0QsR0FJSUUsS0FBUTtBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsc0JBQXNCO0FBQUEsRUFDdEIsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1Isa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsUUFBUTtB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QVMsaUJBQWlCLG1CQUFtQixFQUFFLFFBQVFzaEIsRUFBZTtBQUFBLFFBQ3ZFLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRCxHQUFHO0FBQ0g7QUFBQSxFQUNEO0FBQ0EsRUFBQVgsR0FBa0IsR0FDbEJULEdBQW9CLEdBQ2ZXLEdBQW9CN2dCLENBQUssS0FBRyxRQUFRLEtBQUssNkNBQTZDLEdBQzNGd2hCLEdBQXlCeGhCLENBQUssR0FDOUJ1YyxHQUF3QnZjLEdBQU8sRUFBRSxPQUFPLEdBQUssQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUMxRCxhQUFTLGlCQUFpQixtQkFBbUIsRUFBRSxRQUFRc2hCLEVBQWU7QUFBQSxFQUN2RSxDQUFDO0FBQ0QsTUFBSTtBQUNILGVBQVcsZ0JBQWdCLElBQUksWUFBWSx5QkFBeUIsRUFBRSxRQUFRO0FBQUEsTUFDN0UsU0FBU3RoQjtBQUFBLE1BQ1QsS0FBS0E7QUFBQSxJQUNOLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDTCxRQUFRO0FBQUEsRUFBQztBQUNWOyIsCiAgIm5hbWVzIjogWyJnZXRDb3JyZWN0T3JpZW50YXRpb24iLCAibWFrZVJBRkN5Y2xlIiwgIm9yaWVudGF0aW9uTnVtYmVyTWFwIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgImVsZWN0cm9uQVBJIiwgInF1YWxpdHlNb2RlIiwgInBhcnNlTnVtYmVyIiwgImNvbG9yIiwgImxlbiIsICJuYW1lZCIsICJwYXJzZU5hbWVkIiwgImhleCIsICJwYXJzZUhleCIsICJtYXRjaCIsICJudW0kMSIsICJudW1fbm9uZSIsICJwZXIiLCAicGVyX25vbmUiLCAibnVtX3BlciIsICJudW1fcGVyX25vbmUiLCAiaHVlJDEiLCAiaHVlX25vbmUiLCAiYyIsICJyeF9udW1fcGVyX25vbmUiLCAicmdiX251bV9vbGQiLCAicmdiX3Blcl9vbGQiLCAicGFyc2VSZ2JMZWdhY3kiLCAicmVzIiwgInByZXBhcmUiLCAibW9kZSIsICJwYXJzZSIsICJjb252ZXJ0ZXIiLCAidGFyZ2V0X21vZGUiLCAiY29udmVydGVycyIsICJtb2RlcyIsICJwYXJzZXJzIiwgImNvbG9yUHJvZmlsZXMiLCAiaWRlbnRpdHkiLCAidiIsICJ1c2VNb2RlIiwgImRlZmluaXRpb24iLCAiayIsICJjaGFubmVsIiwgInBhcnNlciIsICJ1c2VQYXJzZXIiLCAiZ2V0TW9kZSIsICJJZGVudFN0YXJ0Q29kZVBvaW50IiwgIklkZW50Q29kZVBvaW50IiwgIlRvayIsICJfaSIsICJpc19udW0iLCAiY2hhcnMiLCAiY2giLCAiY2gxIiwgImlzX2lkZW50IiwgImh1ZW5pdHMiLCAibnVtIiwgInZhbHVlIiwgImRpZ2l0cyIsICJpZCIsICJpZGVudCIsICJpZGVudGxpa2UiLCAidG9rZW5pemUiLCAic3RyIiwgInRva2VucyIsICJhbHBoYSIsICJwYXJzZUNvbG9yU3ludGF4IiwgInRva2VuIiwgImNvb3JkcyIsICJjb25zdW1lQ29vcmRzIiwgImNoYW5uZWxzIiwgImlpIiwgImluY2x1ZGVIdWUiLCAicGFyc2VNb2Rlcm5TeW50YXgiLCAicGFyc2VkIiwgInJlc3VsdCIsICJwYXJzZVJnYiIsICJyIiwgImciLCAiYiIsICJwYXJzZVRyYW5zcGFyZW50IiwgImxlcnAiLCAiYSIsICJ0IiwgImdldF9jbGFzc2VzIiwgImFyciIsICJjbGFzc2VzIiwgImkiLCAiaW50ZXJwb2xhdG9yUGllY2V3aXNlIiwgImludGVycG9sYXRvciIsICJjbHMiLCAiaWR4IiwgInBhaXIiLCAiaW50ZXJwb2xhdG9yTGluZWFyIiwgImZpeHVwQWxwaGEiLCAic29tZV9kZWZpbmVkIiwgImRlZmluaXRpb24kMjciLCAibGluZWFyaXplJDIiLCAiY29udmVydEE5OFRvWHl6NjUiLCAiYTk4IiwgImdhbW1hJDIiLCAiY29udmVydFh5ejY1VG9BOTgiLCAieCIsICJ5IiwgInoiLCAiZm4kMyIsICJhYnMiLCAiY29udmVydFJnYlRvTHJnYiIsICJjb252ZXJ0UmdiVG9YeXo2NSIsICJyZ2IiLCAiZm4kMiIsICJjb252ZXJ0THJnYlRvUmdiIiwgImNvbnZlcnRYeXo2NVRvUmdiIiwgImRlZmluaXRpb24kMjYiLCAibm9ybWFsaXplSHVlIiwgImh1ZSIsICJodWVzIiwgImZuIiwgIm5vcm1hbGl6ZWQiLCAiYWNjIiwgImN1cnIiLCAiZml4dXBIdWVTaG9ydGVyIiwgImQiLCAiTSIsICJkZWdUb1JhZCIsICJyYWRUb0RlZyIsICJERSIsICJCRSIsICJCQ0FEIiwgImNvbnZlcnRSZ2JUb0N1YmVoZWxpeCIsICJsIiwgImNvbnZlcnRDdWJlaGVsaXhUb1JnYiIsICJoIiwgInMiLCAiYW1wIiwgImNvc2giLCAic2luaCIsICJkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiIsICJzdGQiLCAic21wIiwgInN0ZF9oIiwgInNtcF9oIiwgImRIIiwgImRpZmZlcmVuY2VIdWVOYWl2ZSIsICJkaWZmZXJlbmNlSHVlQ2hyb21hIiwgImF2ZXJhZ2VBbmdsZSIsICJ2YWwiLCAic3VtIiwgInJhZCIsICJhbmdsZSIsICJkZWZpbml0aW9uJDI1IiwgImNvbnZlcnRMYWJUb0xjaCIsICJjb252ZXJ0TGNoVG9MYWIiLCAiayQyIiwgImUkMiIsICJENTAiLCAiRDY1IiwgImskMSIsICJlJDEiLCAiZm4kMSIsICJjb252ZXJ0TGFiNjVUb1h5ejY1IiwgImZ5IiwgImZ4IiwgImZ6IiwgImNvbnZlcnRMYWI2NVRvUmdiIiwgImxhYiIsICJmJDEiLCAiY29udmVydFh5ejY1VG9MYWI2NSIsICJmMCIsICJmMSIsICJmMiIsICJjb252ZXJ0UmdiVG9MYWI2NSIsICLOuCIsICJjb3POuCIsICJzaW7OuCIsICJmYWN0b3IiLCAiY29udmVydERsY2hUb0xhYjY1IiwgIkciLCAiZSIsICJmIiwgImNvbnZlcnRMYWI2NVRvRGxjaCIsICJjb252ZXJ0RGxhYlRvTGFiNjUiLCAiY29udmVydExhYjY1VG9EbGFiIiwgImRlZmluaXRpb24kMjQiLCAiZGVmaW5pdGlvbiQyMyIsICJjb252ZXJ0SHNpVG9SZ2IiLCAiY29udmVydFJnYlRvSHNpIiwgIm0iLCAiZGVmaW5pdGlvbiQyMiIsICJjb252ZXJ0SHNsVG9SZ2IiLCAibTEiLCAibTIiLCAiY29udmVydFJnYlRvSHNsIiwgImh1ZVRvRGVnIiwgInVuaXQiLCAiaHNsX29sZCIsICJwYXJzZUhzbExlZ2FjeSIsICJwYXJzZUhzbCIsICJkZWZpbml0aW9uJDIxIiwgImNvbnZlcnRIc3ZUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic3YiLCAiZGVmaW5pdGlvbiQyMCIsICJjb252ZXJ0SHdiVG9SZ2IiLCAidyIsICJjb252ZXJ0UmdiVG9Id2IiLCAicmdiYSIsICJoc3YiLCAiUGFyc2VId2IiLCAiZGVmaW5pdGlvbiQxOSIsICJNMSIsICJNMiIsICJDMSIsICJDMiIsICJDMyIsICJ0cmFuc2ZlclBxRGVjb2RlIiwgInRyYW5zZmVyUHFFbmNvZGUiLCAidG9SZWwiLCAiY29udmVydEl0cFRvWHl6NjUiLCAicCIsICJ0b0FicyIsICJjb252ZXJ0WHl6NjVUb0l0cCIsICJhYnNYIiwgImFic1kiLCAiYWJzWiIsICJkZWZpbml0aW9uJDE4IiwgInAkMSIsICJkMCQxIiwgImphYlBxRW5jb2RlIiwgInZuIiwgImNvbnZlcnRYeXo2NVRvSmFiIiwgInhwIiwgInlwIiwgImQwIiwgImphYlBxRGVjb2RlIiwgInZwIiwgInJlbCIsICJjb252ZXJ0SmFiVG9YeXo2NSIsICJqIiwgImNvbnZlcnRSZ2JUb0phYiIsICJjb252ZXJ0SmFiVG9SZ2IiLCAiZGVmaW5pdGlvbiQxNyIsICJjb252ZXJ0SmFiVG9KY2giLCAiY29udmVydEpjaFRvSmFiIiwgImRlZmluaXRpb24kMTYiLCAiY29udmVydExhYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9SZ2IiLCAiY29udmVydExhYlRvUmdiIiwgImNvbnZlcnRSZ2JUb1h5ejUwIiwgImNvbnZlcnRYeXo1MFRvTGFiIiwgImNvbnZlcnRSZ2JUb0xhYiIsICJwYXJzZUxhYiIsICJkZWZpbml0aW9uJDE1IiwgImRlZmluaXRpb24kMTQiLCAicGFyc2VMY2giLCAiZGVmaW5pdGlvbiQxMyIsICJkZWZpbml0aW9uJDEyIiwgImNvbnZlcnRMdXZUb0xjaHV2IiwgInUiLCAiY29udmVydExjaHV2VG9MdXYiLCAidV9mbiQxIiwgInZfZm4kMSIsICJ1biQxIiwgInZuJDEiLCAibF9mbiIsICJjb252ZXJ0WHl6NTBUb0x1diIsICJ1X2ZuIiwgInZfZm4iLCAidW4iLCAiY29udmVydEx1dlRvWHl6NTAiLCAidXAiLCAiY29udmVydFJnYlRvTGNodXYiLCAiY29udmVydExjaHV2VG9SZ2IiLCAibGNodXYiLCAiZGVmaW5pdGlvbiQxMSIsICJkZWZpbml0aW9uJDEwIiwgImRlZmluaXRpb24kOSIsICJsdXYiLCAiY29udmVydExyZ2JUb09rbGFiIiwgIkwiLCAiUyIsICJjb252ZXJ0UmdiVG9Pa2xhYiIsICJjb252ZXJ0T2tsYWJUb0xyZ2IiLCAiY29udmVydE9rbGFiVG9SZ2IiLCAidG9lIiwgImtfMyIsICJ0b2VfaW52IiwgImNvbXB1dGVfbWF4X3NhdHVyYXRpb24iLCAiazAiLCAiazEiLCAiazIiLCAiazMiLCAiazQiLCAid2wiLCAid20iLCAid3MiLCAia19sIiwgImtfbSIsICJrX3MiLCAibF8iLCAibV8iLCAic18iLCAibF9kUyIsICJtX2RTIiwgInNfZFMiLCAibF9kUzIiLCAibV9kUzIiLCAic19kUzIiLCAiZmluZF9jdXNwIiwgIlNfY3VzcCIsICJMX2N1c3AiLCAiZmluZF9nYW11dF9pbnRlcnNlY3Rpb24iLCAiTDEiLCAiTDAiLCAiY3VzcCIsICJkTCIsICJkQyIsICJsX2R0IiwgIm1fZHQiLCAic19kdCIsICJDIiwgImxkdCIsICJtZHQiLCAic2R0IiwgImxkdDIiLCAibWR0MiIsICJzZHQyIiwgInIxIiwgInIyIiwgInVfciIsICJ0X3IiLCAiZzEiLCAiZzIiLCAidV9nIiwgInRfZyIsICJiMSIsICJiMiIsICJ1X2IiLCAidF9iIiwgImdldF9TVF9tYXgiLCAiYV8iLCAiYl8iLCAiZ2V0X0NzIiwgIkNfbWF4IiwgIlNUX21heCIsICJTX21pZCIsICJUX21pZCIsICJDX2EiLCAiQ19iIiwgIkNfbWlkIiwgImNvbnZlcnRPa2xhYlRvT2toc2wiLCAicmV0IiwgIkNfMCIsICJrXzAiLCAia18xIiwgImtfMiIsICJjb252ZXJ0T2toc2xUb09rbGFiIiwgImhzbCIsICJtb2RlT2toc2wiLCAiY29udmVydE9rbGFiVG9Pa2hzdiIsICJTX21heCIsICJUIiwgIlNfMCIsICJMX3YiLCAiQ192IiwgIkxfdnQiLCAiQ192dCIsICJyZ2Jfc2NhbGUiLCAic2NhbGVfTCIsICJjb252ZXJ0T2toc3ZUb09rbGFiIiwgIkxfbmV3IiwgIm1vZGVPa2hzdiIsICJwYXJzZU9rbGFiIiwgImRlZmluaXRpb24kOCIsICJwYXJzZU9rbGNoIiwgImRlZmluaXRpb24kNyIsICJjb252ZXJ0UDNUb1h5ejY1IiwgImNvbnZlcnRYeXo2NVRvUDMiLCAiZGVmaW5pdGlvbiQ2IiwgImdhbW1hJDEiLCAiY29udmVydFh5ejUwVG9Qcm9waG90byIsICJsaW5lYXJpemUkMSIsICJjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwIiwgInByb3Bob3RvIiwgImRlZmluaXRpb24kNSIsICLOsSQxIiwgIs6yJDEiLCAiZ2FtbWEiLCAiY29udmVydFh5ejY1VG9SZWMyMDIwIiwgIs6xIiwgIs6yIiwgImxpbmVhcml6ZSIsICJjb252ZXJ0UmVjMjAyMFRvWHl6NjUiLCAicmVjMjAyMCIsICJkZWZpbml0aW9uJDQiLCAiYmlhcyIsICJiaWFzX2NicnQiLCAidHJhbnNmZXIkMSIsICJjb252ZXJ0UmdiVG9YeWIiLCAidHJhbnNmZXIiLCAiY29udmVydFh5YlRvUmdiIiwgImRlZmluaXRpb24kMyIsICJkZWZpbml0aW9uJDIiLCAiY29udmVydFh5ejY1VG9YeXo1MCIsICJ4eXo2NSIsICJjb252ZXJ0WHl6NTBUb1h5ejY1IiwgInh5ejUwIiwgImRlZmluaXRpb24kMSIsICJjb252ZXJ0UmdiVG9ZaXEiLCAiY29udmVydFlpcVRvUmdiIiwgInEiLCAicHJlY2lzaW9uIiwgInJvdW5kIiwgInR3b0RlY2ltYWxzIiwgImNsYW1wIiwgImZpeHVwIiwgInJnYiQxIiwgImhzbCQxIiwgInNlcmlhbGl6ZUhleCIsICJmb3JtYXRIZXgiLCAiY3ViZWhlbGl4IiwgImRsYWIiLCAiZGxjaCIsICJoc2kiLCAiaHdiIiwgIml0cCIsICJqYWIiLCAiamNoIiwgImxhYjY1IiwgImxjaCIsICJsY2g2NSIsICJscmdiIiwgIm9raHNsIiwgIm9raHN2IiwgIm9rbGFiIiwgIm9rbGNoIiwgInAzIiwgInh5YiIsICJ5aXEiLCAic29ydENvbG9ycyIsICJsaXN0IiwgImNyaXRlcmlhIiwgImV1Y2xpZGVhbkRpc3RhbmNlIiwgImNvbG9yMSIsICJjb2xvcjIiLCAibWFrZUNsdXN0ZXJzIiwgImRhdGEiLCAiY2VudHJvaWRzIiwgImNsdXN0ZXJzIiwgInBvaW50IiwgIm1pbkRpc3RhbmNlIiwgIm1pbkRpc3RhbmNlQ2x1c3RlckluZGV4IiwgImNlbnRyb2lkIiwgImluZGV4IiwgImRpc3RhbmNlIiwgImNvbXB1dGVNZWFuIiwgInBvaW50cyIsICJrTWVhbnMiLCAiaW5pdGlhbGl6ZUNlbnRyb2lkcyIsICJtYXhJdGVyYXRpb25zIiwgIml0ZXJhdGlvbiIsICJuZXdDZW50cm9pZHMiLCAiY2x1c3RlciIsICJuZXdDZW50cm9pZCIsICJkaXN0YW5jZXMiLCAidG90YWxEaXN0YW5jZSIsICJwcm9iYWJpbGl0aWVzIiwgImN1bXVsYXRpdmVQcm9iYWJpbGl0eSIsICJyYW5kb21WYWx1ZSIsICJwcmVCbHVyUGl4ZWxzIiwgImltZ1VSTCIsICJibG9iIiwgImJpdG1hcCIsICJvZmZzZXQiLCAiY3R4IiwgImdldENsdXN0ZXJJbWFnZURhdGEiLCAiYWxsQ291bnQiLCAiZHYiLCAiZnAzMiIsICJpNCIsICJnZXREb21pbmFudENvbG9ycyIsICJXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSIsICJUSEVNRV9TVE9SQUdFX0tFWSIsICJQUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9VUkxfS0VZIiwgIlNFRURfUFJPUFMiLCAicmdiVG9TYW1wbGUiLCAib2siLCAicmFua1dhbGxwYXBlclNlZWRzIiwgInNhbXBsZXMiLCAiYWNjZW50UG9vbCIsICJwb29sIiwgInByaW1hcnkiLCAiaHVlRGlzdCIsICJwaWNrTmV4dCIsICJ1c2VkIiwgInJlc3QiLCAiYmFzZSIsICJudWRnZWQiLCAic2Vjb25kYXJ5IiwgInRlcnRpYXJ5IiwgInRoZW1lSG9zdHMiLCAibm9kZXMiLCAiZWwiLCAiYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzIiwgInNlZWRzIiwgImhvc3QiLCAicHJvcCIsICJrZXkiLCAibG9hZENhY2hlZFdhbGxwYXBlclRoZW1lIiwgInJhdyIsICJhcHBseVRoZW1lRnJvbVdhbGxwYXBlciIsICJvcHRzIiwgInNyY0tleSIsICJjYWNoZWQiLCAiZXJyIiwgInJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlIiwgImJsb2JJbWFnZU1hcCIsICJkZWxheWVkIiwgInNoZWR1bGVyIiwgImdldEltZ1dpZHRoIiwgImltZyIsICJnZXRJbWdIZWlnaHQiLCAiY3JlYXRlMmRDb250ZXh0IiwgImNhbnZhcyIsICJjb2xvclNwYWNlIiwgImNhbGxCeUZyYW1lIiwgInBvaW50ZXJJZCIsICJjYiIsICJjb3ZlciIsICJzY2FsZSIsICJwb3J0IiwgIm9yaWVudCIsICJjcmVhdGVJbWFnZUJpdG1hcENhY2hlIiwgInBlbmRpbmciLCAiYmluZENhY2hlU3ltYm9sIiwgImJpbmRDYWNoZSIsICJiaW5kQ2FjaGVkIiwgImJvdW5kIiwgIlVJQ2FudmFzIiwgIiNzaXplIiwgIiNsb2FkaW5nIiwgIiNyZWFkeSIsICIjb3JpZW50IiwgIm4iLCAibmFtZSIsICJfIiwgIm5ld1ZhbHVlIiwgIiNwcmVsb2FkIiwgIiNyZW5kZXIiLCAicGFyZW50IiwgImZpeFNpemUiLCAib2xkIiwgImVudHJpZXMiLCAiZW50cnkiLCAiYm94IiwgInJlYWR5IiwgIndoYXRJc1JlYWR5IiwgIm94IiwgInNyYyIsICJyc3AiLCAiV0FMTFBBUEVSX1NUT1JBR0VfS0VZIiwgIkRFRkFVTFRfV0FMTFBBUEVSX1VSTCIsICJXQUxMUEFQRVJfSURCX01BUktFUiIsICJJREJfTkFNRSIsICJJREJfU1RPUkUiLCAiSURCX0tFWSIsICJMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMiLCAibGl2ZU9iamVjdFVybCIsICJjdXJyZW50T3JpZW50TnVtYmVyIiwgInJldm9rZUxpdmVPYmplY3RVcmwiLCAib3BlbldhbGxwYXBlckRiIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInJlcSIsICJkYiIsICJpZGJQdXRXYWxscGFwZXIiLCAidHgiLCAiaWRiR2V0V2FsbHBhcGVyIiwgImlkYkNsZWFyV2FsbHBhcGVyIiwgInJlYWRTdG9yYWdlUG9pbnRlciIsICJ3cml0ZVN0b3JhZ2VQb2ludGVyIiwgImlzSW5saW5lUGF5bG9hZCIsICJ1cmwiLCAicmVzb2x2ZUFwcFdhbGxwYXBlclVybCIsICJwb2ludGVyIiwgImdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyIiwgInN5bmNDYW52YXNPcmllbnQiLCAiYXBwbHkiLCAic3luY0FwcFdhbGxwYXBlck9yaWVudCIsICJzeW5jR2xvd1RvVGhlbWUiLCAiZ2xvdyIsICJwYWludFdhbGxwYXBlck9uQ2FudmFzZXMiLCAicGFpbnRVcmwiLCAiY2FudmFzZXMiLCAiZGF0YVVybFRvQmxvYiIsICJkYXRhVXJsIiwgInNldEFwcFdhbGxwYXBlckZyb21CbG9iIiwgInNldEFwcFdhbGxwYXBlciIsICJyZWFkZXIiLCAiaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyIiwgImNvbnRhaW5lciIsICJyb290IiwgImNvbGRVcmwiLCAiZGlzcG9zZU9yaWVudCIsICJ3YWxscGFwZXIiLCAid2FsbHBhcGVyVXJsIl0KfQo=
