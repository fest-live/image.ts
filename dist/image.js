import { getCorrectOrientation as Ur, makeRAFCycle as Gr, orientationNumberMap as Jr, whenAnyScreenChanges as Kr } from "/home/u2re-dev/U2RE.space/modules/shared/fest/dom";
var yo = "electronBridge", Mo = { fast: {
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
}, Vr = {
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
}, Qr = (e) => ur(Vr[e.toLowerCase()], 6), ea = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, ta = (e) => {
  let t;
  return (t = e.match(ea)) ? ur(parseInt(t[1], 16), t[1].length) : void 0;
}, P = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", wo = `(?:${P}|none)`, te = `${P}%`, xo = `(?:${P}%|none)`, yt = `(?:${P}%|${P})`, ra = `(?:${P}%|${P}|none)`, aa = `(?:${P}(deg|grad|rad|turn)|${P})`, ko = `(?:${P}(deg|grad|rad|turn)|${P}|none)`, j = "\\s*,\\s*", _o = new RegExp("^" + ra + "$"), ia = new RegExp(`^rgba?\\(\\s*${P}${j}${P}${j}${P}\\s*(?:,\\s*${yt}\\s*)?\\)$`), oa = new RegExp(`^rgba?\\(\\s*${te}${j}${te}${j}${te}\\s*(?:,\\s*${yt}\\s*)?\\)$`), na = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(ia))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(oa))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, la = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? ba(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, Mt = (e = "rgb") => (t) => (t = la(t, e)) !== void 0 ? t.mode === e ? t : S[t.mode][e] ? S[t.mode][e](t) : e === "rgb" ? S[t.mode].rgb(t) : S.rgb[e](S[t.mode].rgb(t)) : void 0, S = {}, fr = {}, ce = [], pr = {}, sa = (e) => e, m = (e) => (S[e.mode] = {
  ...S[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  S[t] || (S[t] = {}), S[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = sa);
}), fr[e.mode] = e, (e.parse || []).forEach((t) => {
  da(t, e.mode);
}), Mt(e.mode)), ha = (e) => fr[e], da = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    pr[e] = t;
  } else typeof e == "function" && ce.indexOf(e) < 0 && ce.push(e);
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
var ca = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ee(e) {
  let t = "";
  if ((e[u] === "-" || e[u] === "+") && (t += e[u++]), t += se(e), e[u] === "." && /\d/.test(e[u + 1]) && (t += e[u++] + se(e)), (e[u] === "e" || e[u] === "E") && ((e[u + 1] === "-" || e[u + 1] === "+") && /\d/.test(e[u + 2]) ? t += e[u++] + e[u++] + se(e) : /\d/.test(e[u + 1]) && (t += e[u++] + se(e))), st(e)) {
    let r = ue(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * ca[r]
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
function ue(e) {
  let t = "";
  for (; u < e.length && va.test(e[u]); ) t += e[u++];
  return t;
}
function ua(e) {
  let t = ue(e);
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
function fa(e = "") {
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
          value: ue(t)
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
      if (st(t) && ue(t) === "none") {
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
      u--, r.push(ua(t));
      continue;
    }
    return;
  }
  return r;
}
function pa(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = pr[t.value];
  if (!r) return;
  const a = { mode: r }, i = mr(e, !1);
  if (!i) return;
  const o = ha(r).channels;
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
function ma(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = mr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var ba = (e) => {
  if (typeof e != "string") return;
  const t = fa(e), r = t ? ma(t, !0) : void 0;
  let a, i = 0, o = ce.length;
  for (; i < o; ) if ((a = ce[i++](e, r)) !== void 0) return a;
  return t ? pa(t) : void 0;
};
function ga(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value / 255 : o.value / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var ya = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, Ma = (e, t, r) => e + r * (t - e), wa = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, xa = (e) => (t) => {
  let r = wa(t);
  return (a) => {
    let i = a * r.length, o = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), n = r[o];
    return n === void 0 ? void 0 : e(n[0], n[1], i - o);
  };
}, h = xa(Ma), M = (e) => {
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
    ga,
    ta,
    na,
    Qr,
    ya,
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
}, He = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Ot = (e) => {
  let t = He(e.r), r = He(e.g), a = He(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, qe = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Wt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: qe(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: qe(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: qe(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Oe = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, F = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: Oe(e),
    g: Oe(t),
    b: Oe(r)
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
}, We = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, Y = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let o = {
    mode: i,
    r: We(e),
    g: We(t),
    b: We(r)
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
}, ka = {
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
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, _a = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let o = _(r);
  return a === 0 || e[a - 1] === void 0 ? o : t(o - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), A = (e) => _a(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), x = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], $a = Math.PI / 180, za = 180 / Math.PI, Dt = x[3] * x[4], Xt = x[1] * x[4], jt = x[1] * x[2] - x[0] * x[3], Pa = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (jt * r + e * Dt - t * Xt) / (jt + Dt - Xt), o = r - i, n = (x[4] * (t - i) - x[2] * o) / x[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(o * o + n * n) / (x[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(n, o) * za - 120), a !== void 0 && (l.alpha = a), l;
}, Ta = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * $a, r === void 0 && (r = 0);
  let o = t === void 0 ? 0 : t * r * (1 - r), n = Math.cos(e), l = Math.sin(e);
  return i.r = r + o * (x[0] * n + x[1] * l), i.g = r + o * (x[2] * n + x[3] * l), i.b = r + o * (x[4] * n + x[5] * l), a !== void 0 && (i.alpha = a), i;
}, Me = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, Sa = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, we = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, I = (e) => {
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
}, Aa = {
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
  fromMode: { rgb: Pa },
  toMode: { rgb: Ta },
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
  difference: { h: Me },
  average: { h: I }
}, C = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
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
}, $o = Math.pow(29, 3) / Math.pow(3, 3), zo = Math.pow(6, 3) / Math.pow(29, 3), De = (e) => Math.pow(e, 3) > gr ? Math.pow(e, 3) : (116 * e - 16) / br, yr = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz65",
    x: De(o) * X.X,
    y: De(i) * X.Y,
    z: De(n) * X.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, xe = (e) => W(yr(e)), Xe = (e) => e > gr ? Math.cbrt(e) : (br * e + 16) / 116, Mr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Xe(e / X.X), o = Xe(t / X.Y), n = Xe(r / X.Z), l = {
    mode: "lab65",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, ke = (e) => {
  let t = Mr(O(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, re = 26 / 180 * Math.PI, fe = Math.cos(re), pe = Math.sin(re), wr = 100 / Math.log(139 / 100), ht = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / wr) - 1) / 39e-4
  }, o = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, n = o * Math.cos(r / 180 * Math.PI - re), l = o * Math.sin(r / 180 * Math.PI - re);
  return i.a = n * fe - l / 0.83 * pe, i.b = n * pe + l / 0.83 * fe, a !== void 0 && (i.alpha = a), i;
}, dt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * fe + r * pe, o = 0.83 * (r * fe - t * pe), n = Math.sqrt(i * i + o * o), l = {
    mode: "dlch",
    l: wr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * n) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(o, i) + re) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, Bt = (e) => ht(C(e, "dlch")), Ft = (e) => R(dt(e), "dlab"), Ia = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Bt,
    rgb: (e) => xe(Bt(e))
  },
  fromMode: {
    lab65: Ft,
    rgb: (e) => Ft(ke(e))
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
    rgb: (e) => xe(ht(e))
  },
  fromMode: {
    lab65: dt,
    dlab: (e) => C(e, "dlch"),
    rgb: (e) => dt(ke(e))
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
  difference: { h: we },
  average: { h: I }
};
function Ca({ h: e, s: t, i: r, alpha: a }) {
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
function Ra({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * o / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Na = {
  mode: "hsi",
  toMode: { rgb: Ca },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: Ra },
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
  difference: { h: Me },
  average: { h: I }
};
function La({ h: e, s: t, l: r, alpha: a }) {
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
function Ha({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsl",
    s: i === o ? 0 : (i - o) / (1 - Math.abs(i + o - 1)),
    l: 0.5 * (i + o)
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var qa = (e, t) => {
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
}, Oa = new RegExp(`^hsla?\\(\\s*${aa}${j}${te}${j}${te}\\s*(?:,\\s*${yt}\\s*)?\\)$`), Wa = (e) => {
  let t = e.match(Oa);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = qa(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function Da(e, t) {
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
  toMode: { rgb: La },
  fromMode: { rgb: Ha },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Da, Wa],
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
  difference: { h: Me },
  average: { h: I }
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
  difference: { h: Me },
  average: { h: I }
};
function Xa({ h: e, w: t, b: r, alpha: a }) {
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
function ja(e) {
  let t = _r(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Ba(e, t) {
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
var Fa = {
  mode: "hwb",
  toMode: { rgb: Xa },
  fromMode: { rgb: ja },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Ba],
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
  difference: { h: Sa },
  average: { h: I }
}, _e = 0.1593017578125, zr = 78.84375, $e = 0.8359375, ze = 18.8515625, Pe = 18.6875;
function je(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / zr);
  return 1e4 * Math.pow(Math.max(0, t - $e) / (ze - Pe * t), 1 / _e);
}
function Be(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, _e);
  return Math.pow(($e + ze * t) / (1 + Pe * t), zr);
}
var Fe = (e) => Math.max(e / 203, 0), Yt = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = je(e + 0.008609037037932761 * t + 0.11102962500302593 * r), o = je(e - 0.00860903703793275 * t - 0.11102962500302599 * r), n = je(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: Fe(2.070152218389422 * i - 1.3263473389671556 * o + 0.2066510476294051 * n),
    y: Fe(0.3647385209748074 * i + 0.680566024947227 * o - 0.0453045459220346 * n),
    z: Fe(-0.049747207535812 * i - 0.0492609666966138 * o + 1.1880659249923042 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ye = (e = 0) => Math.max(e * 203, 0), Zt = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = Ye(e), o = Ye(t), n = Ye(r), l = Be(0.3592832590121217 * i + 0.6976051147779502 * o - 0.0358915932320289 * n), d = Be(-0.1920808463704995 * i + 1.1004767970374323 * o + 0.0753748658519118 * n), v = Be(0.0070797844607477 * i + 0.0748396662186366 * o + 0.8433265453898765 * n), c = {
    mode: "itp",
    i: 0.5 * l + 0.5 * d,
    t: 1.61376953125 * l - 3.323486328125 * d + 1.709716796875 * v,
    p: 4.378173828125 * l - 4.24560546875 * d - 0.132568359375 * v
  };
  return a !== void 0 && (c.alpha = a), c;
}, Ya = {
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
}, Za = 134.03437499999998, Ua = 16295499532821565e-27, Ze = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, _e);
  return Math.pow(($e + ze * t) / (1 + Pe * t), Za);
}, Ue = (e = 0) => Math.max(e * 203, 0), Pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e = Ue(e), t = Ue(t), r = Ue(r);
  let i = 1.15 * e - 0.15 * r, o = 0.66 * t + 0.34 * e, n = Ze(0.41478972 * i + 0.579999 * o + 0.014648 * r), l = Ze(-0.20151 * i + 1.120649 * o + 0.0531008 * r), d = Ze(-0.0166008 * i + 0.2648 * o + 0.6684799 * r), v = (n + l) / 2, c = {
    mode: "jab",
    j: 0.44 * v / (1 - 0.56 * v) - Ua,
    a: 3.524 * n - 4.066708 * l + 0.542708 * d,
    b: 0.199076 * n + 1.096799 * l - 1.295875 * d
  };
  return a !== void 0 && (c.alpha = a), c;
}, Ga = 134.03437499999998, Ut = 16295499532821565e-27, Ge = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Ga);
  return 1e4 * Math.pow(($e - t) / (Pe * t - ze), 1 / _e);
}, Je = (e) => e / 203, Tr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + Ut) / (0.44 + 0.56 * (e + Ut)), o = Ge(i + 0.13860504 * t + 0.058047316 * r), n = Ge(i - 0.13860504 * t - 0.058047316 * r), l = Ge(i - 0.096019242 * t - 0.8118919 * r), d = {
    mode: "xyz65",
    x: Je(1.661373024652174 * o - 0.914523081304348 * n + 0.23136208173913045 * l),
    y: Je(-0.3250758611844533 * o + 1.571847026732543 * n - 0.21825383453227928 * l),
    z: Je(-0.090982811 * o - 0.31272829 * n + 1.5227666 * l)
  };
  return a !== void 0 && (d.alpha = a), d;
}, Sr = (e) => {
  let t = Pr(O(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ar = (e) => W(Tr(e)), Ja = {
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
}, Ka = {
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
  difference: { h: we },
  average: { h: I }
}, Te = Math.pow(29, 3) / Math.pow(3, 3), wt = Math.pow(6, 3) / Math.pow(29, 3), Ke = (e) => Math.pow(e, 3) > wt ? Math.pow(e, 3) : (116 * e - 16) / Te, xt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz50",
    x: Ke(o) * g.X,
    y: Ke(i) * g.Y,
    z: Ke(n) * g.Z
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
}, Ir = (e) => ie(xt(e)), oe = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ve = (e) => e > wt ? Math.cbrt(e) : (Te * e + 16) / 116, kt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Ve(e / g.X), o = Ve(t / g.Y), n = Ve(r / g.Z), l = {
    mode: "lab",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Er = (e) => {
  let t = kt(oe(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Va(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 125 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var _t = {
  mode: "lab",
  toMode: {
    xyz50: xt,
    rgb: Ir
  },
  fromMode: {
    xyz50: kt,
    rgb: Er
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
  parse: [Va],
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
}, Qa = {
  ..._t,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: yr,
    rgb: xe
  },
  fromMode: {
    xyz65: Mr,
    rgb: ke
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function ei(e, t) {
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
    rgb: (e) => Ir(R(e))
  },
  fromMode: {
    rgb: (e) => C(Er(e)),
    lab: C
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
  parse: [ei],
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
  difference: { h: we },
  average: { h: I }
}, ti = {
  ...$t,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => R(e, "lab65"),
    rgb: (e) => xe(R(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => C(ke(e), "lch65"),
    lab65: (e) => C(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Cr = ({ l: e, u: t, v: r, alpha: a }) => {
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
}, Nr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Lr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), ri = Nr(g.X, g.Y, g.Z), ai = Lr(g.X, g.Y, g.Z), ii = (e) => e <= wt ? Te * e : 116 * Math.cbrt(e) - 16, vt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = ii(t / g.Y), o = Nr(e, t, r), n = Lr(e, t, r);
  !isFinite(o) || !isFinite(n) ? i = o = n = 0 : (o = 13 * i * (o - ri), n = 13 * i * (n - ai));
  let l = {
    mode: "luv",
    l: i,
    u: o,
    v: n
  };
  return a !== void 0 && (l.alpha = a), l;
}, oi = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), ni = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), li = oi(g.X, g.Y, g.Z), si = ni(g.X, g.Y, g.Z), ct = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + li, o = r / (13 * e) + si, n = g.Y * (e <= 8 ? e / Te : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: n * (9 * i) / (4 * o),
    y: n,
    z: n * (12 - 3 * i - 20 * o) / (4 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, hi = (e) => Cr(vt(oe(e))), di = (e) => ie(ct(Rr(e))), vi = {
  mode: "lchuv",
  toMode: {
    luv: Rr,
    rgb: di
  },
  fromMode: {
    rgb: hi,
    luv: Cr
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
  difference: { h: we },
  average: { h: I }
}, ci = {
  ...B,
  mode: "lrgb",
  toMode: { rgb: Y },
  fromMode: { rgb: F },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, ui = {
  mode: "luv",
  toMode: {
    xyz50: ct,
    rgb: (e) => ie(ct(e))
  },
  fromMode: {
    xyz50: vt,
    rgb: (e) => vt(oe(e))
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
}, Se = (e) => {
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
}, Ae = (e) => Y(ne(e));
function ut(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function me(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function fi(e, t) {
  let r, a, i, o, n, l, d, v;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, o = 0.75515197, n = 0.56771245, l = 4.0767416621, d = -3.3077115913, v = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, o = 0.1254107, n = 0.14503204, l = -1.2684380046, d = 2.6097574011, v = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, o = -0.50559606, n = 692167e-8, l = -0.0041960863, d = -0.7034186147, v = 1.707614701);
  let c = r + a * e + i * t + o * e * e + n * e * t, f = 0.3963377774 * e + 0.2158037573 * t, p = -0.1055613458 * e - 0.0638541728 * t, b = -0.0894841775 * e - 1.291485548 * t;
  {
    let y = 1 + c * f, k = 1 + c * p, w = 1 + c * b, z = y * y * y, $ = k * k * k, E = w * w * w, Z = 3 * f * y * y, U = 3 * p * k * k, G = 3 * b * w * w, J = 6 * f * f * y, K = 6 * p * p * k, V = 6 * b * b * w, D = l * z + d * $ + v * E, H = l * Z + d * U + v * G, Q = l * J + d * K + v * V;
    c = c - D * H / (H * H - 0.5 * D * Q);
  }
  return c;
}
function zt(e, t) {
  let r = fi(e, t), a = ne({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function pi(e, t, r, a, i, o = null) {
  o || (o = zt(e, t));
  let n;
  if ((r - i) * o[1] - (o[0] - i) * a <= 0) n = o[1] * i / (a * o[0] + o[1] * (i - r));
  else {
    n = o[1] * (i - 1) / (a * (o[0] - 1) + o[1] * (i - r));
    {
      let l = r - i, d = a, v = 0.3963377774 * e + 0.2158037573 * t, c = -0.1055613458 * e - 0.0638541728 * t, f = -0.0894841775 * e - 1.291485548 * t, p = l + d * v, b = l + d * c, y = l + d * f;
      {
        let k = i * (1 - n) + n * r, w = n * a, z = k + w * v, $ = k + w * c, E = k + w * f, Z = z * z * z, U = $ * $ * $, G = E * E * E, J = 3 * p * z * z, K = 3 * b * $ * $, V = 3 * y * E * E, D = 6 * p * p * z, H = 6 * b * b * $, Q = 6 * y * y * E, Ct = 4.0767416621 * Z - 3.3077115913 * U + 0.2309699292 * G - 1, Ie = 4.0767416621 * J - 3.3077115913 * K + 0.2309699292 * V, Fr = 4.0767416621 * D - 3.3077115913 * H + 0.2309699292 * Q, Rt = Ie / (Ie * Ie - 0.5 * Ct * Fr), Ee = -Ct * Rt, Nt = -1.2684380046 * Z + 2.6097574011 * U - 0.3413193965 * G - 1, Ce = -1.2684380046 * J + 2.6097574011 * K - 0.3413193965 * V, Yr = -1.2684380046 * D + 2.6097574011 * H - 0.3413193965 * Q, Lt = Ce / (Ce * Ce - 0.5 * Nt * Yr), Re = -Nt * Lt, Ht = -0.0041960863 * Z - 0.7034186147 * U + 1.707614701 * G - 1, Ne = -0.0041960863 * J - 0.7034186147 * K + 1.707614701 * V, Zr = -0.0041960863 * D - 0.7034186147 * H + 1.707614701 * Q, qt = Ne / (Ne * Ne - 0.5 * Ht * Zr), Le = -Ht * qt;
        Ee = Rt >= 0 ? Ee : 1e6, Re = Lt >= 0 ? Re : 1e6, Le = qt >= 0 ? Le : 1e6, n += Math.min(Ee, Math.min(Re, Le));
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
  let a = zt(t, r), i = pi(t, r, e, 1, e, a), o = Pt(t, r, a), n = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), d = i / Math.min(e * o[0], (1 - e) * o[1]), v = e * n, c = (1 - e) * l, f = 0.9 * d * Math.sqrt(Math.sqrt(1 / (1 / (v * v * v * v) + 1 / (c * c * c * c))));
  return v = e * 0.4, c = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (v * v) + 1 / (c * c))),
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
  let [n, l, d] = qr(t, r / o, a / o), v;
  if (o < l) {
    let c = 0, f = 0.8 * n, p = 1 - f / l;
    v = (o - c) / (f + p * (o - c)) * 0.8;
  } else {
    let c = l, f = 0.2 * l * l * 1.25 * 1.25 / n, p = 1 - f / (d - l);
    v = 0.8 + 0.2 * ((o - c) / (f + p * (o - c)));
  }
  return v && (i.s = v, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function Vt(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: me(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let o = Math.cos(t / 180 * Math.PI), n = Math.sin(t / 180 * Math.PI), [l, d, v] = qr(i.l, o, n), c, f, p, b;
  r < 0.8 ? (c = 1.25 * r, f = 0, p = 0.8 * l, b = 1 - p / d) : (c = 5 * (r - 0.8), f = d, p = 0.2 * d * d * 1.25 * 1.25 / l, b = 1 - p / (v - d));
  let y = f + c * p / (1 - b * c);
  return i.a = y * o, i.b = y * n, i;
}
var mi = {
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
    rgb: (e) => Kt(Se(e))
  },
  toMode: {
    oklab: Vt,
    rgb: (e) => Ae(Vt(e))
  }
};
function Qt(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), o = i ? r / i : 1, n = i ? a / i : 1, [l, d] = Pt(o, n), v = 0.5, c = 1 - v / l, f = d / (i + t * d), p = f * t, b = f * i, y = me(p), k = b * y / p, w = ne({
    l: y,
    a: o * k,
    b: n * k
  }), z = Math.cbrt(1 / Math.max(w.r, w.g, w.b, 0));
  t = t / z, i = i / z * ut(t) / t, t = ut(t);
  const $ = {
    mode: "okhsv",
    s: i ? (v + d) * b / (d * v + d * c * b) : 0,
    v: t ? t / p : 0
  };
  return $.s && ($.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && ($.alpha = e.alpha), $;
}
function er(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, o = Math.cos(r / 180 * Math.PI), n = Math.sin(r / 180 * Math.PI), [l, d] = Pt(o, n), v = 0.5, c = 1 - v / l, f = 1 - a * v / (v + d - d * c * a), p = a * d * v / (v + d - d * c * a), b = me(f), y = p * b / f, k = ne({
    l: b,
    a: o * y,
    b: n * y
  }), w = Math.cbrt(1 / Math.max(k.r, k.g, k.b, 0)), z = me(i * f), $ = p * z / f;
  return t.l = z * w, t.a = $ * o * w, t.b = $ * n * w, t;
}
var bi = {
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
    rgb: (e) => Qt(Se(e))
  },
  toMode: {
    oklab: er,
    rgb: (e) => Ae(er(e))
  }
};
function gi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 0.4 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var yi = {
  ..._t,
  mode: "oklab",
  toMode: {
    lrgb: ne,
    rgb: Ae
  },
  fromMode: {
    lrgb: Hr,
    rgb: Se
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [gi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Mi(e, t) {
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
var wi = {
  ...$t,
  mode: "oklch",
  toMode: {
    oklab: (e) => R(e, "oklab"),
    rgb: (e) => Ae(R(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => C(Se(e), "oklch"),
    oklab: (e) => C(e, "oklch")
  },
  parse: [Mi],
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
}, xi = {
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
}, Qe = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, ar = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: Qe(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: Qe(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: Qe(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, et = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, ir = (e) => {
  let t = et(e.r), r = et(e.g), a = et(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, ki = {
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
}, or = 1.09929682680944, _i = 0.018053968510807, tt = (e) => {
  const t = Math.abs(e);
  return t > _i ? (Math.sign(e) || 1) * (or * Math.pow(t, 0.45) - (or - 1)) : 4.5 * e;
}, nr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: tt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: tt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: tt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, lr = 1.09929682680944, $i = 0.018053968510807, rt = (e = 0) => {
  let t = Math.abs(e);
  return t < $i * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + lr - 1) / lr, 1 / 0.45);
}, sr = (e) => {
  let t = rt(e.r), r = rt(e.g), a = rt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, zi = {
  ...B,
  mode: "rec2020",
  fromMode: {
    xyz65: nr,
    rgb: (e) => nr(O(e))
  },
  toMode: {
    xyz65: sr,
    rgb: (e) => W(sr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, q = 0.0037930732552754493, Or = Math.cbrt(q), at = (e) => Math.cbrt(e) - Or, Pi = (e) => {
  const { r: t, g: r, b: a, alpha: i } = F(e), o = at(0.3 * t + 0.622 * r + 0.078 * a + q), n = at(0.23 * t + 0.692 * r + 0.078 * a + q), l = at(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + q), d = {
    mode: "xyb",
    x: (o - n) / 2,
    y: (o + n) / 2,
    b: l - (o + n) / 2
  };
  return i !== void 0 && (d.alpha = i), d;
}, it = (e) => Math.pow(e + Or, 3), Ti = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = it(e + t) - q, o = it(t - e) - q, n = it(r + t) - q, l = Y({
    r: 11.031566904639861 * i - 9.866943908131562 * o - 0.16462299650829934 * n,
    g: -3.2541473810744237 * i + 4.418770377582723 * o - 0.16462299650829934 * n,
    b: -3.6588512867136815 * i + 2.7129230459360922 * o + 1.9459282407775895 * n
  });
  return a !== void 0 && (l.alpha = a), l;
}, Si = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: Ti },
  fromMode: { rgb: Pi },
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
}, Ai = {
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
}, Ii = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ei = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ci = {
  mode: "xyz65",
  toMode: {
    rgb: W,
    xyz50: Ii
  },
  fromMode: {
    rgb: O,
    xyz50: Ei
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
}, Ri = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Ni = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Li = {
  mode: "yiq",
  toMode: { rgb: Ni },
  fromMode: { rgb: Ri },
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
}, Hi = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, qi = (e = 4) => (t) => typeof t == "number" ? Hi(t, e) : t, Po = qi(2), Oi = (e) => Math.max(0, Math.min(1, e || 0)), ot = (e) => Math.round(Oi(e) * 255), Wi = Mt("rgb"), To = Mt("hsl"), Di = (e) => {
  if (e === void 0) return;
  let t = ot(e.r), r = ot(e.g), a = ot(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, Wr = (e) => Di(Wi(e)), So = m(ka), Ao = m(Aa), Io = m(Ia), Eo = m(Ea), Co = m(Na), Ro = m(xr), No = m($r), Lo = m(Fa), Ho = m(Ya), qo = m(Ja), Oo = m(Ka), Wo = m(_t), Do = m(Qa), Xo = m($t), jo = m(ti), Bo = m(vi), Fo = m(ci), Yo = m(ui), Zo = m(mi), Uo = m(bi), Go = m(yi), ft = m(wi), Jo = m(xi), Ko = m(ki), Vo = m(zi), Qo = m(B), en = m(Si), tn = m(Ai), rn = m(Ci), an = m(Li), Dr = (e, t = "l") => e.sort((r, a) => Math.sign(ft({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - ft({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Tt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), Xi = (e, t) => {
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
}, ji = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], Bi = (e, t) => {
  let r = Dr(Fi(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const o = Xi(e, r).map((n) => n.points.length > 0 ? ji(n.points) : null);
    if (o.every((n, l) => n && Tt(n, r[l]) < 1e-3)) break;
    r = o;
  }
  return r;
}, Fi = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((d) => Math.min(...r.map((v) => Tt(d, v)))), i = a.reduce((d, v) => d + v, 0), o = a.map((d) => d / i);
    let n = 0;
    const l = Math.random();
    for (let d = 0; d < o.length; d++)
      if (n += o[d], l < n) {
        r.push(e[d]);
        break;
      }
  }
  return r;
}, Yi = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((o) => o?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, Zi = async (e) => {
  const t = await Yi(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const i = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, o = r.width * r.height || 0, n = 1 / 255, l = [];
  for (let d = 0; d < o; d++) {
    const v = d * 4;
    l.push(i instanceof Float32Array || i instanceof Float16Array ? [
      i?.[v + 0] || 0,
      i?.[v + 1] || 0,
      i?.[v + 2] || 0
    ] : [
      (i?.[v + 0] || 0) * n,
      (i?.[v + 1] || 0) * n,
      (i?.[v + 2] || 0) * n
    ]);
  }
  return l;
}, Ui = async (e) => {
  const t = await Zi(e);
  return Dr(Bi(t, 4), "h");
}, Gi = "rs-wallpaper-theme", Ji = "rs-wallpaper-primary", Ki = "rs-wallpaper-theme-src", Xr = Gi, Vi = Ji, hr = Ki, Qi = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], eo = (e) => {
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
}, to = (e) => {
  const t = e.map(eo).filter(Boolean);
  if (!t.length) return null;
  const r = t.filter((v) => v.l >= 0.18 && v.l <= 0.88 && v.c >= 0.02).sort((v, c) => c.c - v.c || Math.abs(c.l - 0.55) - Math.abs(v.l - 0.55)), a = r.length ? r : [...t].sort((v, c) => c.c - v.c), i = a[0];
  if (!i) return null;
  const o = (v, c) => {
    const f = Math.abs(v - c) % 360;
    return f > 180 ? 360 - f : f;
  }, n = (v) => {
    const c = a.filter((f) => !v.includes(f));
    if (!c.length) {
      const f = v[v.length - 1] ?? i, p = Wr({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, f.l + (v.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, f.c * 0.85),
        h: f.h
      });
      return {
        ...f,
        hex: p || f.hex,
        l: f.l
      };
    }
    return [...c].sort((f, p) => Math.min(...v.map((b) => o(p.h, b.h))) - Math.min(...v.map((b) => o(f.h, b.h))) || p.c - f.c)[0] ?? c[0];
  }, l = n([i]), d = n([i, l]);
  return {
    primary: i.hex,
    secondary: l.hex,
    tertiary: d.hex
  };
}, ro = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, he = (e) => {
  for (const t of ro()) for (const [r, a] of Qi) t.style.setProperty(r, e[a]);
  document.querySelectorAll(".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings']").forEach((t) => {
    t.style.setProperty("--color-primary", e.primary), t.style.setProperty("--base-color", e.primary), t.style.setProperty("--color-secondary", e.secondary), t.style.setProperty("--color-tertiary", e.tertiary);
  });
  try {
    localStorage.setItem(Xr, JSON.stringify(e)), localStorage.setItem(Vi, e.primary);
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
}, be = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`;
  if (!t?.force) try {
    if (localStorage.getItem(hr) === r) {
      const a = pt();
      if (a)
        return he(a), a;
    }
  } catch {
  }
  try {
    const a = await Ui(e), i = to(a);
    if (!i) return null;
    he(i);
    try {
      localStorage.setItem(hr, r);
    } catch {
    }
    return i;
  } catch (a) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", a);
    const i = pt();
    return i ? (he(i), i) : null;
  }
}, ao = () => {
  const e = pt();
  return e && he(e), e;
}, nt = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new Map([]), dr = Gr(), de = (e) => e?.naturalWidth || e?.width || 1, ve = (e) => e?.naturalHeight || e?.height || 1, on = (e, t) => {
  io.set(e, t);
}, oo = (e, t, r = 1, a, i = 0) => {
  const o = e.canvas;
  e.translate(o.width / 2, o.height / 2), e.rotate((-i || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(de(t) / 2) * r, -(ve(t) / 2) * r);
}, no = (e) => (!nt.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image) && nt.set(e, createImageBitmap(e)), nt.get(e)), lo = /* @__PURE__ */ new WeakMap(), so = (e, t) => lo?.getOrInsertComputed?.(e, () => e?.bind?.(t)), mt = null;
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
    dr?.shedule?.(() => {
      this.ctx = t.getContext("2d", {
        alpha: !0,
        desynchronized: !0,
        powerPreference: "high-performance",
        preserveDrawingBuffer: !0,
        colorSpace: "rec2100-hlg"
      }), this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" }), this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", "display-p3"), this.style.setProperty("background-color", "black", "important"), this.style.setProperty("opacity", "1", "important"), a(), new ResizeObserver((i) => {
        for (const o of i) {
          const n = o?.devicePixelContentBoxSize?.[0];
          if (n) {
            const l = this.#e;
            this.#e = [Math.max(n.inlineSize || this.width, 1), Math.max(n.blockSize || this.height, 1)], (l?.[0] != this.#e[0] || l?.[1] != this.#e[1]) && this.#a(this.#r);
          }
        }
      }).observe(this, { box: "device-pixel-content-box" }), this.#o(this.#t = this.dataset.src || this.#t);
    });
  }
  async $useImageAsSource(t, r) {
    r ||= this.#t;
    const a = t instanceof ImageBitmap ? t : await no(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const o = this.#i % 2 || 0, n = de(i) <= ve(i) ? 1 : 0, l = Math.max(r[["height", "width"][o]] / (n ? ve(i) : de(i)), r[["width", "height"][o]] / (n ? de(i) : ve(i)));
      a.save(), a.clearRect(0, 0, r.width, r.height), oo(a, i, l, n, this.#i), a.drawImage(i, 0, 0, i.width * l, i.height * l), a.restore();
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
    this.image && r && (t == this.#t || !t) && dr?.shedule?.(so(this.$renderPass, this));
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
var jr = "rs-wallpaper-image", N = "/assets/wallpaper.jpg", bt = "idb:rs-wallpaper", ho = "cwsp-wallpaper-v1", L = "blobs", St = "current", Br = 512e3, T = null, At = () => Jr?.[Ur()] ?? 0, ge = () => {
  if (T && T.startsWith("blob:")) try {
    URL.revokeObjectURL(T);
  } catch {
  }
  T = null;
}, It = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(ho, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(L) || a.createObjectStore(L);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), vo = async (e) => {
  const t = await It();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(L, "readwrite");
      i.objectStore(L).put(e, St), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, vr = async () => {
  const e = await It();
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
}, co = async () => {
  try {
    const e = await It();
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
}, Et = () => {
  try {
    const e = localStorage.getItem(jr);
    return e && e.trim() ? e.trim() : N;
  } catch {
    return N;
  }
}, ye = (e) => {
  try {
    return localStorage.setItem(jr, e), !0;
  } catch {
    return !1;
  }
}, uo = (e) => e.startsWith("data:") || e.startsWith("blob:"), fo = async () => {
  const e = Et();
  if (e === "idb:rs-wallpaper" || e.startsWith("idb:")) {
    try {
      const t = await vr();
      if (t)
        return ge(), T = URL.createObjectURL(t), T;
    } catch (t) {
      console.warn("[fest/image] wallpaper IDB restore failed", t);
    }
    return N;
  }
  if (e.startsWith("data:") && e.length > Br) try {
    const t = await vr();
    if (t)
      return ge(), T = URL.createObjectURL(t), ye(bt), T;
  } catch {
  }
  return e || N;
}, sn = () => Et(), cr = (e) => {
  const t = () => {
    const r = At(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), Kr(t);
}, hn = () => {
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
}, po = async (e) => (await fetch(e)).blob(), mo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return bo(N), N;
  ge(), T = URL.createObjectURL(e), gt(T), be(T, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ae);
  });
  try {
    await vo(e), ye(bt);
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, o) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => o(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !ye(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
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
}, dn = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "radial-gradient(circle at 18% 12%, #1b2a45 0%, #0f1728 42%, #060910 100%)";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "black", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const i = Et(), o = i === "idb:rs-wallpaper" || i.startsWith("idb:") || i.startsWith("data:") ? N : i;
  a.setAttribute("data-src", o);
  const n = cr(a);
  return ao(), ae(r), fo().then((l) => (a.setAttribute("data-src", l), cr(a), be(l).then(() => ae(r)))), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: n
  };
}, bo = (e) => {
  const t = String(e || "").trim() || N;
  if (uo(t) || t.length > Br) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await po(t);
        await mo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r), gt(t), be(t, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(ae);
        });
      }
    })();
    return;
  }
  co(), ge(), ye(t) || console.warn("[fest/image] wallpaper pointer write failed"), gt(t), be(t, { force: !0 }).then(() => {
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
  Ji as WALLPAPER_PRIMARY_STORAGE_KEY,
  Ki as WALLPAPER_THEME_SRC_STORAGE_KEY,
  Gi as WALLPAPER_THEME_STORAGE_KEY,
  be as applyThemeFromWallpaper,
  he as applyWallpaperThemeSeeds,
  on as callByFrame,
  oo as cover,
  no as createImageBitmapCache,
  yo as electronAPI,
  Ui as getDominantColors,
  sn as getWallpaperStoragePointer,
  dn as initializeAppCanvasLayer,
  pt as loadCachedWallpaperTheme,
  Mo as qualityMode,
  to as rankWallpaperSeeds,
  fo as resolveAppWallpaperUrl,
  ao as restoreWallpaperThemeCache,
  bo as setAppWallpaper,
  mo as setAppWallpaperFromBlob,
  hn as syncAppWallpaperOrient,
  cr as syncCanvasOrient,
  ro as themeHosts
};
