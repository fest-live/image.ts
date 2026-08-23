import { getCorrectOrientation as ra, makeRAFCycle as aa, orientationNumberMap as ia, whenAnyScreenChanges as oa } from "@fest-lib/dom";
var No = "electronBridge", Lo = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, br = (e, t) => {
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
}, na = {
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
}, la = (e) => br(na[e.toLowerCase()], 6), sa = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, ha = (e) => {
  let t;
  return (t = e.match(sa)) ? br(parseInt(t[1], 16), t[1].length) : void 0;
}, $ = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Ho = `(?:${$}|none)`, re = `${$}%`, Wo = `(?:${$}%|none)`, wt = `(?:${$}%|${$})`, da = `(?:${$}%|${$}|none)`, ca = `(?:${$}(deg|grad|rad|turn)|${$})`, qo = `(?:${$}(deg|grad|rad|turn)|${$}|none)`, B = "\\s*,\\s*", Oo = new RegExp("^" + da + "$"), va = new RegExp(`^rgba?\\(\\s*${$}${B}${$}${B}${$}\\s*(?:,\\s*${wt}\\s*)?\\)$`), ua = new RegExp(`^rgba?\\(\\s*${re}${B}${re}${B}${re}\\s*(?:,\\s*${wt}\\s*)?\\)$`), pa = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(va))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(ua))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, fa = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Pa(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, xt = (e = "rgb") => (t) => (t = fa(t, e)) !== void 0 ? t.mode === e ? t : S[t.mode][e] ? S[t.mode][e](t) : e === "rgb" ? S[t.mode].rgb(t) : S.rgb[e](S[t.mode].rgb(t)) : void 0, S = {}, yr = {}, fe = [], Mr = {}, ma = (e) => e, m = (e) => (S[e.mode] = {
  ...S[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  S[t] || (S[t] = {}), S[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = ma);
}), yr[e.mode] = e, (e.parse || []).forEach((t) => {
  ba(t, e.mode);
}), xt(e.mode)), ga = (e) => yr[e], ba = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    Mr[e] = t;
  } else typeof e == "function" && fe.indexOf(e) < 0 && fe.push(e);
}, ct = /[^\x00-\x7F]|[a-zA-Z_]/, ya = /[^\x00-\x7F]|[-\w]/, s = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, u = 0;
function se(e) {
  let t = e[u], r = e[u + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[u + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function vt(e) {
  if (u >= e.length) return !1;
  let t = e[u];
  if (ct.test(t)) return !0;
  if (t === "-") {
    if (e.length - u < 2) return !1;
    let r = e[u + 1];
    return !!(r === "-" || ct.test(r));
  }
  return !1;
}
var Ma = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ee(e) {
  let t = "";
  if ((e[u] === "-" || e[u] === "+") && (t += e[u++]), t += he(e), e[u] === "." && /\d/.test(e[u + 1]) && (t += e[u++] + he(e)), (e[u] === "e" || e[u] === "E") && ((e[u + 1] === "-" || e[u + 1] === "+") && /\d/.test(e[u + 2]) ? t += e[u++] + e[u++] + he(e) : /\d/.test(e[u + 1]) && (t += e[u++] + he(e))), vt(e)) {
    let r = me(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * Ma[r]
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
function he(e) {
  let t = "";
  for (; /\d/.test(e[u]); ) t += e[u++];
  return t;
}
function me(e) {
  let t = "";
  for (; u < e.length && ya.test(e[u]); ) t += e[u++];
  return t;
}
function wa(e) {
  let t = me(e);
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
function xa(e = "") {
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
      if (u--, se(t)) {
        r.push(ee(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (u--, se(t)) {
        r.push(ee(t));
        continue;
      }
      if (vt(t)) {
        r.push({
          type: s.Ident,
          value: me(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (u--, se(t)) {
        r.push(ee(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; u < t.length && (t[u] === `
` || t[u] === "	" || t[u] === " "); ) u++;
      let i;
      if (se(t) && (i = ee(t), i.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: i
        });
        continue;
      }
      if (vt(t) && me(t) === "none") {
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
    if (ct.test(a)) {
      u--, r.push(wa(t));
      continue;
    }
    return;
  }
  return r;
}
function ka(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = Mr[t.value];
  if (!r) return;
  const a = { mode: r }, i = wr(e, !1);
  if (!i) return;
  const o = ga(r).channels;
  for (let n = 0, l, h; n < o.length; n++)
    l = i[n], h = o[n], l.type !== s.None && (a[h] = l.type === s.Number ? l.value : l.value / 100, h === "alpha" && (a[h] = Math.max(0, Math.min(1, a[h]))));
  return a;
}
function wr(e, t) {
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
function _a(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = wr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var Pa = (e) => {
  if (typeof e != "string") return;
  const t = xa(e), r = t ? _a(t, !0) : void 0;
  let a, i = 0, o = fe.length;
  for (; i < o; ) if ((a = fe[i++](e, r)) !== void 0) return a;
  return t ? ka(t) : void 0;
};
function za(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value / 255 : o.value / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var $a = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, Ta = (e, t, r) => e + r * (t - e), Sa = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, Aa = (e) => (t) => {
  let r = Sa(t);
  return (a) => {
    let i = a * r.length, o = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), n = r[o];
    return n === void 0 ? void 0 : e(n[0], n[1], i - o);
  };
}, d = Aa(Ta), M = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, j = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    za,
    ha,
    pa,
    la,
    $a,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: d,
    g: d,
    b: d,
    alpha: {
      use: d,
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
}, Xe = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Bt = (e) => {
  let t = Xe(e.r), r = Xe(e.g), a = Xe(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Be = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), jt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: Be(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Be(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Be(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, je = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, F = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: je(e),
    g: je(t),
    b: je(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, q = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Fe = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, Y = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let o = {
    mode: i,
    r: Fe(e),
    g: Fe(t),
    b: Fe(r)
  };
  return a !== void 0 && (o.alpha = a), o;
}, O = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Y({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Ca = {
  ...j,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => jt(q(e)),
    xyz65: jt
  },
  toMode: {
    rgb: (e) => O(Bt(e)),
    xyz65: Bt
  }
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, Ea = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let o = _(r);
  return a === 0 || e[a - 1] === void 0 ? o : t(o - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), A = (e) => Ea(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), x = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], Ia = Math.PI / 180, Ra = 180 / Math.PI, Ft = x[3] * x[4], Yt = x[1] * x[4], Zt = x[1] * x[2] - x[0] * x[3], Na = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (Zt * r + e * Ft - t * Yt) / (Zt + Ft - Yt), o = r - i, n = (x[4] * (t - i) - x[2] * o) / x[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(o * o + n * n) / (x[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(n, o) * Ra - 120), a !== void 0 && (l.alpha = a), l;
}, La = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Ia, r === void 0 && (r = 0);
  let o = t === void 0 ? 0 : t * r * (1 - r), n = Math.cos(e), l = Math.sin(e);
  return i.r = r + o * (x[0] * n + x[1] * l), i.g = r + o * (x[2] * n + x[3] * l), i.b = r + o * (x[4] * n + x[5] * l), a !== void 0 && (i.alpha = a), i;
}, Pe = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, Ha = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, ze = (e, t) => {
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
}, Wa = {
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
  fromMode: { rgb: Na },
  toMode: { rgb: La },
  interpolate: {
    h: {
      use: d,
      fixup: A
    },
    s: d,
    l: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: Pe },
  average: { h: C }
}, I = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
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
}, xr = Math.pow(29, 3) / Math.pow(3, 3), kr = Math.pow(6, 3) / Math.pow(29, 3), y = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, X = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, Do = Math.pow(29, 3) / Math.pow(3, 3), Xo = Math.pow(6, 3) / Math.pow(29, 3), Ye = (e) => Math.pow(e, 3) > kr ? Math.pow(e, 3) : (116 * e - 16) / xr, _r = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz65",
    x: Ye(o) * X.X,
    y: Ye(i) * X.Y,
    z: Ye(n) * X.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, $e = (e) => O(_r(e)), Ze = (e) => e > kr ? Math.cbrt(e) : (xr * e + 16) / 116, Pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Ze(e / X.X), o = Ze(t / X.Y), n = Ze(r / X.Z), l = {
    mode: "lab65",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Te = (e) => {
  let t = Pr(q(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ae = 26 / 180 * Math.PI, ge = Math.cos(ae), be = Math.sin(ae), zr = 100 / Math.log(139 / 100), ut = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / zr) - 1) / 39e-4
  }, o = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, n = o * Math.cos(r / 180 * Math.PI - ae), l = o * Math.sin(r / 180 * Math.PI - ae);
  return i.a = n * ge - l / 0.83 * be, i.b = n * be + l / 0.83 * ge, a !== void 0 && (i.alpha = a), i;
}, pt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * ge + r * be, o = 0.83 * (r * ge - t * be), n = Math.sqrt(i * i + o * o), l = {
    mode: "dlch",
    l: zr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * n) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(o, i) + ae) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, Ut = (e) => ut(I(e, "dlch")), Gt = (e) => R(pt(e), "dlab"), qa = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Ut,
    rgb: (e) => $e(Ut(e))
  },
  fromMode: {
    lab65: Gt,
    rgb: (e) => Gt(Te(e))
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
    l: d,
    a: d,
    b: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, Oa = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: ut,
    dlab: (e) => R(e, "dlab"),
    rgb: (e) => $e(ut(e))
  },
  fromMode: {
    lab65: pt,
    dlab: (e) => I(e, "dlch"),
    rgb: (e) => pt(Te(e))
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
    l: d,
    c: d,
    h: {
      use: d,
      fixup: A
    },
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: ze },
  average: { h: C }
};
function Da({ h: e, s: t, i: r, alpha: a }) {
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
function Xa({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * o / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Ba = {
  mode: "hsi",
  toMode: { rgb: Da },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: Xa },
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
      use: d,
      fixup: A
    },
    s: d,
    i: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: Pe },
  average: { h: C }
};
function ja({ h: e, s: t, l: r, alpha: a }) {
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
function Fa({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsl",
    s: i === o ? 0 : (i - o) / (1 - Math.abs(i + o - 1)),
    l: 0.5 * (i + o)
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Ya = (e, t) => {
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
}, Za = new RegExp(`^hsla?\\(\\s*${ca}${B}${re}${B}${re}\\s*(?:,\\s*${wt}\\s*)?\\)$`), Ua = (e) => {
  let t = e.match(Za);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = Ya(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function Ga(e, t) {
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
var $r = {
  mode: "hsl",
  toMode: { rgb: ja },
  fromMode: { rgb: Fa },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Ga, Ua],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: A
    },
    s: d,
    l: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: Pe },
  average: { h: C }
};
function Tr({ h: e, s: t, v: r, alpha: a }) {
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
function Sr({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - o / i,
    v: i
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Ar = {
  mode: "hsv",
  toMode: { rgb: Tr },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Sr },
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
      use: d,
      fixup: A
    },
    s: d,
    v: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: Pe },
  average: { h: C }
};
function Ka({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let i = t + r;
    t /= i, r /= i;
  }
  return Tr({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function Ja(e) {
  let t = Sr(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Va(e, t) {
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
var Qa = {
  mode: "hwb",
  toMode: { rgb: Ka },
  fromMode: { rgb: Ja },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Va],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: A
    },
    w: d,
    b: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: Ha },
  average: { h: C }
}, Se = 0.1593017578125, Cr = 78.84375, Ae = 0.8359375, Ce = 18.8515625, Ee = 18.6875;
function Ue(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Cr);
  return 1e4 * Math.pow(Math.max(0, t - Ae) / (Ce - Ee * t), 1 / Se);
}
function Ge(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Se);
  return Math.pow((Ae + Ce * t) / (1 + Ee * t), Cr);
}
var Ke = (e) => Math.max(e / 203, 0), Kt = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = Ue(e + 0.008609037037932761 * t + 0.11102962500302593 * r), o = Ue(e - 0.00860903703793275 * t - 0.11102962500302599 * r), n = Ue(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: Ke(2.070152218389422 * i - 1.3263473389671556 * o + 0.2066510476294051 * n),
    y: Ke(0.3647385209748074 * i + 0.680566024947227 * o - 0.0453045459220346 * n),
    z: Ke(-0.049747207535812 * i - 0.0492609666966138 * o + 1.1880659249923042 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Je = (e = 0) => Math.max(e * 203, 0), Jt = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = Je(e), o = Je(t), n = Je(r), l = Ge(0.3592832590121217 * i + 0.6976051147779502 * o - 0.0358915932320289 * n), h = Ge(-0.1920808463704995 * i + 1.1004767970374323 * o + 0.0753748658519118 * n), v = Ge(0.0070797844607477 * i + 0.0748396662186366 * o + 0.8433265453898765 * n), c = {
    mode: "itp",
    i: 0.5 * l + 0.5 * h,
    t: 1.61376953125 * l - 3.323486328125 * h + 1.709716796875 * v,
    p: 4.378173828125 * l - 4.24560546875 * h - 0.132568359375 * v
  };
  return a !== void 0 && (c.alpha = a), c;
}, ei = {
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
    xyz65: Kt,
    rgb: (e) => O(Kt(e))
  },
  fromMode: {
    xyz65: Jt,
    rgb: (e) => Jt(q(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: d,
    t: d,
    p: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, ti = 134.03437499999998, ri = 16295499532821565e-27, Ve = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Se);
  return Math.pow((Ae + Ce * t) / (1 + Ee * t), ti);
}, Qe = (e = 0) => Math.max(e * 203, 0), Er = ({ x: e, y: t, z: r, alpha: a }) => {
  e = Qe(e), t = Qe(t), r = Qe(r);
  let i = 1.15 * e - 0.15 * r, o = 0.66 * t + 0.34 * e, n = Ve(0.41478972 * i + 0.579999 * o + 0.014648 * r), l = Ve(-0.20151 * i + 1.120649 * o + 0.0531008 * r), h = Ve(-0.0166008 * i + 0.2648 * o + 0.6684799 * r), v = (n + l) / 2, c = {
    mode: "jab",
    j: 0.44 * v / (1 - 0.56 * v) - ri,
    a: 3.524 * n - 4.066708 * l + 0.542708 * h,
    b: 0.199076 * n + 1.096799 * l - 1.295875 * h
  };
  return a !== void 0 && (c.alpha = a), c;
}, ai = 134.03437499999998, Vt = 16295499532821565e-27, et = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / ai);
  return 1e4 * Math.pow((Ae - t) / (Ee * t - Ce), 1 / Se);
}, tt = (e) => e / 203, Ir = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + Vt) / (0.44 + 0.56 * (e + Vt)), o = et(i + 0.13860504 * t + 0.058047316 * r), n = et(i - 0.13860504 * t - 0.058047316 * r), l = et(i - 0.096019242 * t - 0.8118919 * r), h = {
    mode: "xyz65",
    x: tt(1.661373024652174 * o - 0.914523081304348 * n + 0.23136208173913045 * l),
    y: tt(-0.3250758611844533 * o + 1.571847026732543 * n - 0.21825383453227928 * l),
    z: tt(-0.090982811 * o - 0.31272829 * n + 1.5227666 * l)
  };
  return a !== void 0 && (h.alpha = a), h;
}, Rr = (e) => {
  let t = Er(q(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Nr = (e) => O(Ir(e)), ii = {
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
    rgb: Rr,
    xyz65: Er
  },
  toMode: {
    rgb: Nr,
    xyz65: Ir
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: d,
    a: d,
    b: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, Qt = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, er = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, oi = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: er,
    rgb: (e) => Nr(er(e))
  },
  fromMode: {
    rgb: (e) => Qt(Rr(e)),
    jab: Qt
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
      use: d,
      fixup: A
    },
    c: d,
    j: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: ze },
  average: { h: C }
}, Ie = Math.pow(29, 3) / Math.pow(3, 3), kt = Math.pow(6, 3) / Math.pow(29, 3), rt = (e) => Math.pow(e, 3) > kt ? Math.pow(e, 3) : (116 * e - 16) / Ie, _t = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz50",
    x: rt(o) * y.X,
    y: rt(i) * y.Y,
    z: rt(n) * y.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, oe = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Y({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Lr = (e) => oe(_t(e)), ne = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, at = (e) => e > kt ? Math.cbrt(e) : (Ie * e + 16) / 116, Pt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = at(e / y.X), o = at(t / y.Y), n = at(r / y.Z), l = {
    mode: "lab",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Hr = (e) => {
  let t = Pt(ne(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function ni(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 125 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var zt = {
  mode: "lab",
  toMode: {
    xyz50: _t,
    rgb: Lr
  },
  fromMode: {
    xyz50: Pt,
    rgb: Hr
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
  parse: [ni],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: d,
    a: d,
    b: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, li = {
  ...zt,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: _r,
    rgb: $e
  },
  fromMode: {
    xyz65: Pr,
    rgb: Te
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function si(e, t) {
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
    rgb: (e) => Lr(R(e))
  },
  fromMode: {
    rgb: (e) => I(Hr(e)),
    lab: I
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
  parse: [si],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: A
    },
    c: d,
    l: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: ze },
  average: { h: C }
}, hi = {
  ...$t,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => R(e, "lab65"),
    rgb: (e) => $e(R(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => I(Te(e), "lch65"),
    lab65: (e) => I(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Wr = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, qr = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Or = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Dr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), di = Or(y.X, y.Y, y.Z), ci = Dr(y.X, y.Y, y.Z), vi = (e) => e <= kt ? Ie * e : 116 * Math.cbrt(e) - 16, ft = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = vi(t / y.Y), o = Or(e, t, r), n = Dr(e, t, r);
  !isFinite(o) || !isFinite(n) ? i = o = n = 0 : (o = 13 * i * (o - di), n = 13 * i * (n - ci));
  let l = {
    mode: "luv",
    l: i,
    u: o,
    v: n
  };
  return a !== void 0 && (l.alpha = a), l;
}, ui = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), pi = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), fi = ui(y.X, y.Y, y.Z), mi = pi(y.X, y.Y, y.Z), mt = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + fi, o = r / (13 * e) + mi, n = y.Y * (e <= 8 ? e / Ie : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: n * (9 * i) / (4 * o),
    y: n,
    z: n * (12 - 3 * i - 20 * o) / (4 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, gi = (e) => Wr(ft(ne(e))), bi = (e) => oe(mt(qr(e))), yi = {
  mode: "lchuv",
  toMode: {
    luv: qr,
    rgb: bi
  },
  fromMode: {
    rgb: gi,
    luv: Wr
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
      use: d,
      fixup: A
    },
    c: d,
    l: d,
    alpha: {
      use: d,
      fixup: M
    }
  },
  difference: { h: ze },
  average: { h: C }
}, Mi = {
  ...j,
  mode: "lrgb",
  toMode: { rgb: Y },
  fromMode: { rgb: F },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, wi = {
  mode: "luv",
  toMode: {
    xyz50: mt,
    rgb: (e) => oe(mt(e))
  },
  fromMode: {
    xyz50: ft,
    rgb: (e) => ft(ne(e))
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
    l: d,
    u: d,
    v: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, Xr = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), o = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), n = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * o - 0.0040720430116193 * n,
    a: 1.9779985324311684 * i - 2.42859224204858 * o + 0.450593709617411 * n,
    b: 0.0259040424655478 * i + 0.7827717124575296 * o - 0.8086757549230774 * n
  };
  return a !== void 0 && (l.alpha = a), l;
}, Re = (e) => {
  let t = Xr(F(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, le = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), o = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), n = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * o + 0.2309699031821044 * n,
    g: -1.2684379732850317 * i + 2.6097573492876887 * o - 0.3413193760026573 * n,
    b: -0.0041960761386756 * i - 0.7034186179359362 * o + 1.7076146940746117 * n
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ne = (e) => Y(le(e));
function gt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function ye(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function xi(e, t) {
  let r, a, i, o, n, l, h, v;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, o = 0.75515197, n = 0.56771245, l = 4.0767416621, h = -3.3077115913, v = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, o = 0.1254107, n = 0.14503204, l = -1.2684380046, h = 2.6097574011, v = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, o = -0.50559606, n = 692167e-8, l = -0.0041960863, h = -0.7034186147, v = 1.707614701);
  let c = r + a * e + i * t + o * e * e + n * e * t, f = 0.3963377774 * e + 0.2158037573 * t, p = -0.1055613458 * e - 0.0638541728 * t, g = -0.0894841775 * e - 1.291485548 * t;
  {
    let b = 1 + c * f, k = 1 + c * p, w = 1 + c * g, z = b * b * b, P = k * k * k, E = w * w * w, Z = 3 * f * b * b, U = 3 * p * k * k, G = 3 * g * w * w, K = 6 * f * f * b, J = 6 * p * p * k, V = 6 * g * g * w, D = l * z + h * P + v * E, H = l * Z + h * U + v * G, Q = l * K + h * J + v * V;
    c = c - D * H / (H * H - 0.5 * D * Q);
  }
  return c;
}
function Tt(e, t) {
  let r = xi(e, t), a = le({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function ki(e, t, r, a, i, o = null) {
  o || (o = Tt(e, t));
  let n;
  if ((r - i) * o[1] - (o[0] - i) * a <= 0) n = o[1] * i / (a * o[0] + o[1] * (i - r));
  else {
    n = o[1] * (i - 1) / (a * (o[0] - 1) + o[1] * (i - r));
    {
      let l = r - i, h = a, v = 0.3963377774 * e + 0.2158037573 * t, c = -0.1055613458 * e - 0.0638541728 * t, f = -0.0894841775 * e - 1.291485548 * t, p = l + h * v, g = l + h * c, b = l + h * f;
      {
        let k = i * (1 - n) + n * r, w = n * a, z = k + w * v, P = k + w * c, E = k + w * f, Z = z * z * z, U = P * P * P, G = E * E * E, K = 3 * p * z * z, J = 3 * g * P * P, V = 3 * b * E * E, D = 6 * p * p * z, H = 6 * g * g * P, Q = 6 * b * b * E, Ht = 4.0767416621 * Z - 3.3077115913 * U + 0.2309699292 * G - 1, Le = 4.0767416621 * K - 3.3077115913 * J + 0.2309699292 * V, Qr = 4.0767416621 * D - 3.3077115913 * H + 0.2309699292 * Q, Wt = Le / (Le * Le - 0.5 * Ht * Qr), He = -Ht * Wt, qt = -1.2684380046 * Z + 2.6097574011 * U - 0.3413193965 * G - 1, We = -1.2684380046 * K + 2.6097574011 * J - 0.3413193965 * V, ea = -1.2684380046 * D + 2.6097574011 * H - 0.3413193965 * Q, Ot = We / (We * We - 0.5 * qt * ea), qe = -qt * Ot, Dt = -0.0041960863 * Z - 0.7034186147 * U + 1.707614701 * G - 1, Oe = -0.0041960863 * K - 0.7034186147 * J + 1.707614701 * V, ta = -0.0041960863 * D - 0.7034186147 * H + 1.707614701 * Q, Xt = Oe / (Oe * Oe - 0.5 * Dt * ta), De = -Dt * Xt;
        He = Wt >= 0 ? He : 1e6, qe = Ot >= 0 ? qe : 1e6, De = Xt >= 0 ? De : 1e6, n += Math.min(He, Math.min(qe, De));
      }
    }
  }
  return n;
}
function St(e, t, r = null) {
  r || (r = Tt(e, t));
  let a = r[0], i = r[1];
  return [i / a, i / (1 - a)];
}
function Br(e, t, r) {
  let a = Tt(t, r), i = ki(t, r, e, 1, e, a), o = St(t, r, a), n = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), h = i / Math.min(e * o[0], (1 - e) * o[1]), v = e * n, c = (1 - e) * l, f = 0.9 * h * Math.sqrt(Math.sqrt(1 / (1 / (v * v * v * v) + 1 / (c * c * c * c))));
  return v = e * 0.4, c = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (v * v) + 1 / (c * c))),
    f,
    i
  ];
}
function tr(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: gt(t)
  };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let o = Math.sqrt(r * r + a * a);
  if (!o)
    return i.s = 0, i;
  let [n, l, h] = Br(t, r / o, a / o), v;
  if (o < l) {
    let c = 0, f = 0.8 * n, p = 1 - f / l;
    v = (o - c) / (f + p * (o - c)) * 0.8;
  } else {
    let c = l, f = 0.2 * l * l * 1.25 * 1.25 / n, p = 1 - f / (h - l);
    v = 0.8 + 0.2 * ((o - c) / (f + p * (o - c)));
  }
  return v && (i.s = v, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function rr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: ye(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let o = Math.cos(t / 180 * Math.PI), n = Math.sin(t / 180 * Math.PI), [l, h, v] = Br(i.l, o, n), c, f, p, g;
  r < 0.8 ? (c = 1.25 * r, f = 0, p = 0.8 * l, g = 1 - p / h) : (c = 5 * (r - 0.8), f = h, p = 0.2 * h * h * 1.25 * 1.25 / l, g = 1 - p / (v - h));
  let b = f + c * p / (1 - g * c);
  return i.a = b * o, i.b = b * n, i;
}
var _i = {
  ...$r,
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
    oklab: tr,
    rgb: (e) => tr(Re(e))
  },
  toMode: {
    oklab: rr,
    rgb: (e) => Ne(rr(e))
  }
};
function ar(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), o = i ? r / i : 1, n = i ? a / i : 1, [l, h] = St(o, n), v = 0.5, c = 1 - v / l, f = h / (i + t * h), p = f * t, g = f * i, b = ye(p), k = g * b / p, w = le({
    l: b,
    a: o * k,
    b: n * k
  }), z = Math.cbrt(1 / Math.max(w.r, w.g, w.b, 0));
  t = t / z, i = i / z * gt(t) / t, t = gt(t);
  const P = {
    mode: "okhsv",
    s: i ? (v + h) * g / (h * v + h * c * g) : 0,
    v: t ? t / p : 0
  };
  return P.s && (P.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && (P.alpha = e.alpha), P;
}
function ir(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, o = Math.cos(r / 180 * Math.PI), n = Math.sin(r / 180 * Math.PI), [l, h] = St(o, n), v = 0.5, c = 1 - v / l, f = 1 - a * v / (v + h - h * c * a), p = a * h * v / (v + h - h * c * a), g = ye(f), b = p * g / f, k = le({
    l: g,
    a: o * b,
    b: n * b
  }), w = Math.cbrt(1 / Math.max(k.r, k.g, k.b, 0)), z = ye(i * f), P = p * z / f;
  return t.l = z * w, t.a = P * o * w, t.b = P * n * w, t;
}
var Pi = {
  ...Ar,
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
    oklab: ar,
    rgb: (e) => ar(Re(e))
  },
  toMode: {
    oklab: ir,
    rgb: (e) => Ne(ir(e))
  }
};
function zi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 0.4 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var $i = {
  ...zt,
  mode: "oklab",
  toMode: {
    lrgb: le,
    rgb: Ne
  },
  fromMode: {
    lrgb: Xr,
    rgb: Re
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [zi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Ti(e, t) {
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
var Si = {
  ...$t,
  mode: "oklch",
  toMode: {
    oklab: (e) => R(e, "oklab"),
    rgb: (e) => Ne(R(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => I(Re(e), "oklch"),
    oklab: (e) => I(e, "oklch")
  },
  parse: [Ti],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, or = (e) => {
  let { r: t, g: r, b: a, alpha: i } = F(e), o = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, nr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Y({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (i.alpha = a), i;
}, Ai = {
  ...j,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => nr(q(e)),
    xyz65: nr
  },
  toMode: {
    rgb: (e) => O(or(e)),
    xyz65: or
  }
}, it = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, lr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: it(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: it(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: it(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, ot = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, sr = (e) => {
  let t = ot(e.r), r = ot(e.g), a = ot(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ci = {
  ...j,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: lr,
    rgb: (e) => lr(ne(e))
  },
  toMode: {
    xyz50: sr,
    rgb: (e) => oe(sr(e))
  }
}, Ei = 1.09929682680944, Ii = 0.018053968510807, nt = (e) => {
  const t = Math.abs(e);
  return t > Ii ? (Math.sign(e) || 1) * (Ei * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, hr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: nt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: nt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: nt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, dr = 1.09929682680944, Ri = 0.018053968510807, lt = (e = 0) => {
  let t = Math.abs(e);
  return t < Ri * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + dr - 1) / dr, 1 / 0.45);
}, cr = (e) => {
  let t = lt(e.r), r = lt(e.g), a = lt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ni = {
  ...j,
  mode: "rec2020",
  fromMode: {
    xyz65: hr,
    rgb: (e) => hr(q(e))
  },
  toMode: {
    xyz65: cr,
    rgb: (e) => O(cr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, W = 0.0037930732552754493, jr = Math.cbrt(W), st = (e) => Math.cbrt(e) - jr, Li = (e) => {
  const { r: t, g: r, b: a, alpha: i } = F(e), o = st(0.3 * t + 0.622 * r + 0.078 * a + W), n = st(0.23 * t + 0.692 * r + 0.078 * a + W), l = st(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + W), h = {
    mode: "xyb",
    x: (o - n) / 2,
    y: (o + n) / 2,
    b: l - (o + n) / 2
  };
  return i !== void 0 && (h.alpha = i), h;
}, ht = (e) => Math.pow(e + jr, 3), Hi = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = ht(e + t) - W, o = ht(t - e) - W, n = ht(r + t) - W, l = Y({
    r: 11.031566904639861 * i - 9.866943908131562 * o - 0.16462299650829934 * n,
    g: -3.2541473810744237 * i + 4.418770377582723 * o - 0.16462299650829934 * n,
    b: -3.6588512867136815 * i + 2.7129230459360922 * o + 1.9459282407775895 * n
  });
  return a !== void 0 && (l.alpha = a), l;
}, Wi = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: Hi },
  fromMode: { rgb: Li },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: d,
    y: d,
    b: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, qi = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: oe,
    lab: Pt
  },
  fromMode: {
    rgb: ne,
    lab: _t
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
    x: d,
    y: d,
    z: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, Oi = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Di = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Xi = {
  mode: "xyz65",
  toMode: {
    rgb: O,
    xyz50: Oi
  },
  fromMode: {
    rgb: q,
    xyz50: Di
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
    x: d,
    y: d,
    z: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, Bi = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, ji = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Fi = {
  mode: "yiq",
  toMode: { rgb: ji },
  fromMode: { rgb: Bi },
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
    y: d,
    i: d,
    q: d,
    alpha: {
      use: d,
      fixup: M
    }
  }
}, Yi = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, Zi = (e = 4) => (t) => typeof t == "number" ? Yi(t, e) : t, Bo = Zi(2), Ui = (e) => Math.max(0, Math.min(1, e || 0)), dt = (e) => Math.round(Ui(e) * 255), Gi = xt("rgb"), jo = xt("hsl"), Ki = (e) => {
  if (e === void 0) return;
  let t = dt(e.r), r = dt(e.g), a = dt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, At = (e) => Ki(Gi(e)), Fo = m(Ca), Yo = m(Wa), Zo = m(qa), Uo = m(Oa), Go = m(Ba), Ko = m($r), Jo = m(Ar), Vo = m(Qa), Qo = m(ei), en = m(ii), tn = m(oi), rn = m(zt), an = m(li), on = m($t), nn = m(hi), ln = m(yi), sn = m(Mi), hn = m(wi), dn = m(_i), cn = m(Pi), vn = m($i), Me = m(Si), un = m(Ai), pn = m(Ci), fn = m(Ni), mn = m(j), gn = m(Wi), bn = m(qi), yn = m(Xi), Mn = m(Fi), Fr = (e, t = "l") => e.sort((r, a) => Math.sign(Me({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - Me({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Ct = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), Ji = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((a) => {
    let i = 1e4, o = 0;
    t.forEach((n, l) => {
      const h = Ct(a, n);
      (typeof i > "u" || i > h) && (i = h, o = l);
    }), r[o].points.push(a);
  }), r;
}, Vi = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], Qi = (e, t) => {
  let r = Fr(eo(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const o = Ji(e, r).map((n) => n.points.length > 0 ? Vi(n.points) : null);
    if (o.every((n, l) => n && Ct(n, r[l]) < 1e-3)) break;
    r = o;
  }
  return r;
}, eo = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((h) => Math.min(...r.map((v) => Ct(h, v)))), i = a.reduce((h, v) => h + v, 0), o = a.map((h) => h / i);
    let n = 0;
    const l = Math.random();
    for (let h = 0; h < o.length; h++)
      if (n += o[h], l < n) {
        r.push(e[h]);
        break;
      }
  }
  return r;
}, to = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((o) => o?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, ro = async (e) => {
  const t = await to(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const i = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, o = r.width * r.height || 0, n = 1 / 255, l = [];
  for (let h = 0; h < o; h++) {
    const v = h * 4;
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
}, ao = async (e) => {
  const t = await ro(e);
  return Fr(Qi(t, 4), "h");
}, io = "rs-wallpaper-theme", oo = "rs-wallpaper-primary", no = "rs-wallpaper-theme-src", Yr = io, lo = oo, vr = no, Et = 0.52, so = 0.025, ce = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, ho = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], co = (e, t, r) => Math.min(r, Math.max(t, e)), ur = (e, t, r, a) => At({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || a, vo = (e) => {
  const [t, r, a] = e;
  if (![
    t,
    r,
    a
  ].every((n) => Number.isFinite(n))) return null;
  const i = At({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  if (!i) return null;
  const o = Me({
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
}, uo = (e) => Me(e)?.l ?? 0.4, po = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, fo = (e) => {
  if (!e.length) return { ...ce };
  const t = e.reduce((l, h) => l + h.l, 0) / e.length, r = [...e].sort((l, h) => l.c - h.c || Math.abs(l.l - t) - Math.abs(h.l - t))[0], a = co(r.l * 0.35 + t * 0.65, 0.08, 0.94), i = Math.min(so, Math.max(0, r.c * 0.2)), o = r.h || 0, n = a < Et;
  return {
    underlying: ur(a, i, o, n ? ce.underlying : "#e8e6e2"),
    contrast: ur(n ? 0.93 : 0.16, 8e-3, o, n ? ce.contrast : "#141416")
  };
}, mo = (e) => e <= Et ? { ...ce } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, go = (e) => !!(e.underlying && e.contrast), bo = (e) => {
  const t = e.map(vo).filter(Boolean);
  if (!t.length) return null;
  const r = t.filter((c) => c.l >= 0.18 && c.l <= 0.88 && c.c >= 0.02).sort((c, f) => f.c - c.c || Math.abs(f.l - 0.55) - Math.abs(c.l - 0.55)), a = r.length ? r : [...t].sort((c, f) => f.c - c.c), i = a[0];
  if (!i) return null;
  const o = (c, f) => {
    const p = Math.abs(c - f) % 360;
    return p > 180 ? 360 - p : p;
  }, n = (c) => {
    const f = a.filter((p) => !c.includes(p));
    if (!f.length) {
      const p = c[c.length - 1] ?? i, g = At({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, p.l + (c.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, p.c * 0.85),
        h: p.h
      });
      return {
        ...p,
        hex: g || p.hex,
        l: p.l
      };
    }
    return [...f].sort((p, g) => Math.min(...c.map((b) => o(g.h, b.h))) - Math.min(...c.map((b) => o(p.h, b.h))) || g.c - p.c)[0] ?? f[0];
  }, l = n([i]), h = n([i, l]), v = fo(t);
  return {
    primary: i.hex,
    secondary: l.hex,
    tertiary: h.hex,
    ...v
  };
}, Zr = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, yo = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, Ur = (e, t = []) => {
  if (typeof document > "u") return;
  const r = uo(e.underlying) < Et, { shadow: a, glow: i } = po(r), o = new Set(Zr());
  for (const n of t) o.add(n);
  for (const n of o)
    n.style.setProperty("--wallpaper-underlying-color", e.underlying), n.style.setProperty("--wallpaper-contrast-color", e.contrast), n.style.setProperty("--env-launcher-fg", e.contrast), n.style.setProperty("--env-launcher-fg-shadow", a), n.style.setProperty("--env-launcher-fg-glow", i);
}, wn = (e, t = []) => {
  const r = mo(e);
  return Ur(r, t), r;
}, ve = (e) => {
  const t = e;
  try {
    localStorage.setItem(Yr, JSON.stringify(t)), localStorage.setItem(lo, t.primary);
  } catch {
  }
  if (go(t) && Ur(t), !!yo()) {
    for (const r of Zr()) for (const [a, i] of ho) r.style.setProperty(a, t[i]);
    document.querySelectorAll(".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((r) => {
      r.style.setProperty("--color-primary", t.primary), r.style.setProperty("--base-color", t.primary), r.style.setProperty("--color-secondary", t.secondary), r.style.setProperty("--color-tertiary", t.tertiary);
    }), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
      source: "wallpaper",
      seeds: t
    } }));
  }
}, bt = () => {
  try {
    const e = localStorage.getItem(Yr);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, we = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`;
  if (!t?.force) try {
    if (localStorage.getItem(vr) === r) {
      const a = bt();
      if (a)
        return ve(a), a;
    }
  } catch {
  }
  try {
    const a = await ao(e), i = bo(a);
    if (!i) return null;
    ve(i);
    try {
      localStorage.setItem(vr, r);
    } catch {
    }
    return i;
  } catch (a) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", a);
    const i = bt();
    return i ? (ve(i), i) : null;
  }
}, Mo = () => {
  const e = bt();
  return e && ve(e), e;
}, de = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new Map([]), pr = aa(), te = /* @__PURE__ */ new Set(), ue = (e) => e?.naturalWidth || e?.width || 1, pe = (e) => e?.naturalHeight || e?.height || 1, xo = (e) => {
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
}, xn = (e, t) => {
  wo.set(e, t);
}, ko = (e, t, r = 1, a, i = 0) => {
  const o = e.canvas;
  e.translate(o.width / 2, o.height / 2), e.rotate((-i || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(ue(t) / 2) * r, -(pe(t) / 2) * r);
}, _o = (e) => {
  if (!de.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image)) {
    const t = createImageBitmap(e).catch((r) => {
      throw de.delete(e), r;
    });
    de.set(e, t);
  }
  return de.get(e);
}, Gr = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[Gr] ??= /* @__PURE__ */ new WeakMap();
var fr = globalThis[Gr], Po = (e, t) => {
  const r = fr.get(e);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return fr.set(e, a), a;
}, yt = null;
typeof HTMLCanvasElement < "u" ? yt = class extends HTMLCanvasElement {
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
    pr?.shedule?.(() => {
      this.ctx = xo(t);
      try {
        this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" });
      } catch {
      }
      this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", "display-p3"), this.style.setProperty("background-color", "transparent", "important"), this.style.setProperty("opacity", "1", "important"), a(), new ResizeObserver((i) => {
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
    const a = t instanceof ImageBitmap ? t : await _o(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const o = this.#i % 2 || 0, n = ue(i) <= pe(i) ? 1 : 0, l = Math.max(r[["height", "width"][o]] / (n ? pe(i) : ue(i)), r[["width", "height"][o]] / (n ? ue(i) : pe(i)));
      a.save(), a.clearRect(0, 0, r.width, r.height), ko(a, i, l, n, this.#i), a.drawImage(i, 0, 0, i.width * l, i.height * l), a.restore();
    }
  }
  #o(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || te.has(r) ? Promise.resolve() : fetch(r, {
      cache: "force-cache",
      mode: "same-origin"
    })?.then?.(async (a) => {
      if (!a.ok) {
        te.add(r);
        return;
      }
      const i = await a.blob();
      if (!i?.size || i.type && !i.type.startsWith("image/")) {
        te.add(r);
        return;
      }
      return this.$useImageAsSource(i, r)?.catch?.(() => {
        te.add(r);
      });
    })?.catch?.(() => {
      te.add(r);
    });
  }
  #a(t) {
    const r = this.ctx;
    this.image && r && (t == this.#t || !t) && pr?.shedule?.(Po(this.$renderPass, this));
  }
} : yt = class {
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
  customElements.define("ui-canvas", yt, { extends: "canvas" });
} catch {
}
var Kr = "rs-wallpaper-image", N = "/assets/wallpaper.jpg", Mt = "idb:rs-wallpaper", zo = "cwsp-wallpaper-v1", L = "blobs", It = "current", Jr = 512e3, T = null, Rt = () => ia?.[ra()] ?? 0, xe = () => {
  if (T && T.startsWith("blob:")) try {
    URL.revokeObjectURL(T);
  } catch {
  }
  T = null;
}, Nt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(zo, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(L) || a.createObjectStore(L);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), $o = async (e) => {
  const t = await Nt();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(L, "readwrite");
      i.objectStore(L).put(e, It), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, mr = async () => {
  const e = await Nt();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(L, "readonly").objectStore(L).get(It);
      a.onsuccess = () => {
        const i = a.result;
        t(i instanceof Blob ? i : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, To = async () => {
  try {
    const e = await Nt();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(L, "readwrite");
        a.objectStore(L).delete(It), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, Lt = () => {
  try {
    const e = localStorage.getItem(Kr);
    return e && e.trim() ? e.trim() : N;
  } catch {
    return N;
  }
}, ke = (e) => {
  try {
    return localStorage.setItem(Kr, e), !0;
  } catch {
    return !1;
  }
}, So = (e) => e.startsWith("data:") || e.startsWith("blob:"), Vr = async () => {
  const e = Lt();
  if (e === "idb:rs-wallpaper" || e.startsWith("idb:")) {
    try {
      const t = await mr();
      if (t)
        return xe(), T = URL.createObjectURL(t), T;
    } catch (t) {
      console.warn("[fest/image] wallpaper IDB restore failed", t);
    }
    return N;
  }
  if (e.startsWith("data:") && e.length > Jr) try {
    const t = await mr();
    if (t)
      return xe(), T = URL.createObjectURL(t), ke(Mt), T;
  } catch {
  }
  return e || N;
}, Pn = () => Lt(), gr = (e) => {
  const t = () => {
    const r = Rt(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), oa(t);
}, Ao = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = Rt(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, zn = () => {
  Vr().then((e) => {
    _e(e), Ao();
  });
}, ie = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, _e = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(Rt());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, Co = async (e) => (await fetch(e)).blob(), Eo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return Io(N), N;
  xe(), T = URL.createObjectURL(e), _e(T), we(T, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ie);
  });
  try {
    await $o(e), ke(Mt);
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, o) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => o(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !ke(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: Mt,
      url: T
    } }));
  } catch {
  }
  return T;
}, $n = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "none", t.style.backgroundColor = "transparent";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "none", r.style.backgroundColor = "transparent";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "transparent", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const i = Lt(), o = i === "idb:rs-wallpaper" || i.startsWith("idb:") || i.startsWith("data:") ? N : i;
  a.setAttribute("data-src", o);
  const n = gr(a);
  return Mo(), ie(r), Vr().then((l) => (a.setAttribute("data-src", l), gr(a), we(l).then(() => ie(r)))), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: n
  };
}, Io = (e) => {
  const t = String(e || "").trim() || N;
  if (So(t) || t.length > Jr) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await Co(t);
        await Eo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r), _e(t), we(t, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(ie);
        });
      }
    })();
    return;
  }
  To(), xe(), ke(t) || console.warn("[fest/image] wallpaper pointer write failed"), _e(t), we(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ie);
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
  yt as UICanvas,
  Mt as WALLPAPER_IDB_MARKER,
  oo as WALLPAPER_PRIMARY_STORAGE_KEY,
  no as WALLPAPER_THEME_SRC_STORAGE_KEY,
  io as WALLPAPER_THEME_STORAGE_KEY,
  we as applyThemeFromWallpaper,
  wn as applyWallpaperPaperFromLuma,
  Ur as applyWallpaperPaperTokens,
  ve as applyWallpaperThemeSeeds,
  fr as bindCache,
  xn as callByFrame,
  ko as cover,
  _o as createImageBitmapCache,
  mo as deriveWallpaperPaperTokensFromLuma,
  No as electronAPI,
  ao as getDominantColors,
  Pn as getWallpaperStoragePointer,
  $n as initializeAppCanvasLayer,
  bt as loadCachedWallpaperTheme,
  Lo as qualityMode,
  bo as rankWallpaperSeeds,
  zn as refreshAppWallpaperPaint,
  Vr as resolveAppWallpaperUrl,
  Mo as restoreWallpaperThemeCache,
  Io as setAppWallpaper,
  Eo as setAppWallpaperFromBlob,
  Ao as syncAppWallpaperOrient,
  gr as syncCanvasOrient,
  Zr as themeHosts
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGdldENvcnJlY3RPcmllbnRhdGlvbiwgbWFrZVJBRkN5Y2xlLCBvcmllbnRhdGlvbk51bWJlck1hcCwgd2hlbkFueVNjcmVlbkNoYW5nZXMgfSBmcm9tIFwiQGZlc3QtbGliL2RvbVwiO1xuXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9Db25maWcudHNcbnZhciBlbGVjdHJvbkFQSSA9IFwiZWxlY3Ryb25CcmlkZ2VcIjtcbnZhciBxdWFsaXR5TW9kZSA9IHsgXCJmYXN0XCI6IHtcblx0ZGl2aXNvcjogNCxcblx0ZmlsdGVyOiBcImJsdXIoNHB4KVwiLFxuXHRzYW1wbGluZzogMTI4XG59IH07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU51bWJlci5qc1xudmFyIHBhcnNlTnVtYmVyID0gKGNvbG9yLCBsZW4pID0+IHtcblx0aWYgKHR5cGVvZiBjb2xvciAhPT0gXCJudW1iZXJcIikgcmV0dXJuO1xuXHRpZiAobGVuID09PSAzKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDggJiAxNSB8IGNvbG9yID4+IDQgJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA0ICYgMTUgfCBjb2xvciAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA0KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDEyICYgMTUgfCBjb2xvciA+PiA4ICYgMjQwKSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA2KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA4KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDI0ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGI6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY29sb3JzL25hbWVkLmpzXG52YXIgbmFtZWQgPSB7XG5cdGFsaWNlYmx1ZTogMTU3OTIzODMsXG5cdGFudGlxdWV3aGl0ZTogMTY0NDQzNzUsXG5cdGFxdWE6IDY1NTM1LFxuXHRhcXVhbWFyaW5lOiA4Mzg4NTY0LFxuXHRhenVyZTogMTU3OTQxNzUsXG5cdGJlaWdlOiAxNjExOTI2MCxcblx0YmlzcXVlOiAxNjc3MDI0NCxcblx0YmxhY2s6IDAsXG5cdGJsYW5jaGVkYWxtb25kOiAxNjc3MjA0NSxcblx0Ymx1ZTogMjU1LFxuXHRibHVldmlvbGV0OiA5MDU1MjAyLFxuXHRicm93bjogMTA4MjQyMzQsXG5cdGJ1cmx5d29vZDogMTQ1OTYyMzEsXG5cdGNhZGV0Ymx1ZTogNjI2NjUyOCxcblx0Y2hhcnRyZXVzZTogODM4ODM1Mixcblx0Y2hvY29sYXRlOiAxMzc4OTQ3MCxcblx0Y29yYWw6IDE2NzQ0MjcyLFxuXHRjb3JuZmxvd2VyYmx1ZTogNjU5MTk4MSxcblx0Y29ybnNpbGs6IDE2Nzc1Mzg4LFxuXHRjcmltc29uOiAxNDQyMzEwMCxcblx0Y3lhbjogNjU1MzUsXG5cdGRhcmtibHVlOiAxMzksXG5cdGRhcmtjeWFuOiAzNTcyMyxcblx0ZGFya2dvbGRlbnJvZDogMTIwOTI5MzksXG5cdGRhcmtncmF5OiAxMTExOTAxNyxcblx0ZGFya2dyZWVuOiAyNTYwMCxcblx0ZGFya2dyZXk6IDExMTE5MDE3LFxuXHRkYXJra2hha2k6IDEyNDMzMjU5LFxuXHRkYXJrbWFnZW50YTogOTEwOTY0Myxcblx0ZGFya29saXZlZ3JlZW46IDU1OTc5OTksXG5cdGRhcmtvcmFuZ2U6IDE2NzQ3NTIwLFxuXHRkYXJrb3JjaGlkOiAxMDA0MDAxMixcblx0ZGFya3JlZDogOTEwOTUwNCxcblx0ZGFya3NhbG1vbjogMTUzMDg0MTAsXG5cdGRhcmtzZWFncmVlbjogOTQxOTkxOSxcblx0ZGFya3NsYXRlYmx1ZTogNDczNDM0Nyxcblx0ZGFya3NsYXRlZ3JheTogMzEwMDQ5NSxcblx0ZGFya3NsYXRlZ3JleTogMzEwMDQ5NSxcblx0ZGFya3R1cnF1b2lzZTogNTI5NDUsXG5cdGRhcmt2aW9sZXQ6IDk2OTk1MzksXG5cdGRlZXBwaW5rOiAxNjcxNjk0Nyxcblx0ZGVlcHNreWJsdWU6IDQ5MTUxLFxuXHRkaW1ncmF5OiA2OTA4MjY1LFxuXHRkaW1ncmV5OiA2OTA4MjY1LFxuXHRkb2RnZXJibHVlOiAyMDAzMTk5LFxuXHRmaXJlYnJpY2s6IDExNjc0MTQ2LFxuXHRmbG9yYWx3aGl0ZTogMTY3NzU5MjAsXG5cdGZvcmVzdGdyZWVuOiAyMjYzODQyLFxuXHRmdWNoc2lhOiAxNjcxMTkzNSxcblx0Z2FpbnNib3JvOiAxNDQ3NDQ2MCxcblx0Z2hvc3R3aGl0ZTogMTYzMTY2NzEsXG5cdGdvbGQ6IDE2NzY2NzIwLFxuXHRnb2xkZW5yb2Q6IDE0MzI5MTIwLFxuXHRncmF5OiA4NDIxNTA0LFxuXHRncmVlbjogMzI3NjgsXG5cdGdyZWVueWVsbG93OiAxMTQwMzA1NSxcblx0Z3JleTogODQyMTUwNCxcblx0aG9uZXlkZXc6IDE1Nzk0MTYwLFxuXHRob3RwaW5rOiAxNjczODc0MCxcblx0aW5kaWFucmVkOiAxMzQ1ODUyNCxcblx0aW5kaWdvOiA0OTE1MzMwLFxuXHRpdm9yeTogMTY3NzcyMDAsXG5cdGtoYWtpOiAxNTc4NzY2MCxcblx0bGF2ZW5kZXI6IDE1MTMyNDEwLFxuXHRsYXZlbmRlcmJsdXNoOiAxNjc3MzM2NSxcblx0bGF3bmdyZWVuOiA4MTkwOTc2LFxuXHRsZW1vbmNoaWZmb246IDE2Nzc1ODg1LFxuXHRsaWdodGJsdWU6IDExMzkzMjU0LFxuXHRsaWdodGNvcmFsOiAxNTc2MTUzNixcblx0bGlnaHRjeWFuOiAxNDc0NTU5OSxcblx0bGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDE2NDQ4MjEwLFxuXHRsaWdodGdyYXk6IDEzODgyMzIzLFxuXHRsaWdodGdyZWVuOiA5NDk4MjU2LFxuXHRsaWdodGdyZXk6IDEzODgyMzIzLFxuXHRsaWdodHBpbms6IDE2NzU4NDY1LFxuXHRsaWdodHNhbG1vbjogMTY3NTI3NjIsXG5cdGxpZ2h0c2VhZ3JlZW46IDIxNDI4OTAsXG5cdGxpZ2h0c2t5Ymx1ZTogODkwMDM0Nixcblx0bGlnaHRzbGF0ZWdyYXk6IDc4MzM3NTMsXG5cdGxpZ2h0c2xhdGVncmV5OiA3ODMzNzUzLFxuXHRsaWdodHN0ZWVsYmx1ZTogMTE1ODQ3MzQsXG5cdGxpZ2h0eWVsbG93OiAxNjc3NzE4NCxcblx0bGltZTogNjUyODAsXG5cdGxpbWVncmVlbjogMzMyOTMzMCxcblx0bGluZW46IDE2NDQ1NjcwLFxuXHRtYWdlbnRhOiAxNjcxMTkzNSxcblx0bWFyb29uOiA4Mzg4NjA4LFxuXHRtZWRpdW1hcXVhbWFyaW5lOiA2NzM3MzIyLFxuXHRtZWRpdW1ibHVlOiAyMDUsXG5cdG1lZGl1bW9yY2hpZDogMTIyMTE2NjcsXG5cdG1lZGl1bXB1cnBsZTogOTY2MjY4Myxcblx0bWVkaXVtc2VhZ3JlZW46IDM5NzgwOTcsXG5cdG1lZGl1bXNsYXRlYmx1ZTogODA4Nzc5MCxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IDY0MTU0LFxuXHRtZWRpdW10dXJxdW9pc2U6IDQ3NzIzMDAsXG5cdG1lZGl1bXZpb2xldHJlZDogMTMwNDcxNzMsXG5cdG1pZG5pZ2h0Ymx1ZTogMTY0NDkxMixcblx0bWludGNyZWFtOiAxNjEyMTg1MCxcblx0bWlzdHlyb3NlOiAxNjc3MDI3Myxcblx0bW9jY2FzaW46IDE2NzcwMjI5LFxuXHRuYXZham93aGl0ZTogMTY3Njg2ODUsXG5cdG5hdnk6IDEyOCxcblx0b2xkbGFjZTogMTY2NDM1NTgsXG5cdG9saXZlOiA4NDIxMzc2LFxuXHRvbGl2ZWRyYWI6IDcwNDg3MzksXG5cdG9yYW5nZTogMTY3NTM5MjAsXG5cdG9yYW5nZXJlZDogMTY3MjkzNDQsXG5cdG9yY2hpZDogMTQzMTU3MzQsXG5cdHBhbGVnb2xkZW5yb2Q6IDE1NjU3MTMwLFxuXHRwYWxlZ3JlZW46IDEwMDI1ODgwLFxuXHRwYWxldHVycXVvaXNlOiAxMTUyOTk2Nixcblx0cGFsZXZpb2xldHJlZDogMTQzODEyMDMsXG5cdHBhcGF5YXdoaXA6IDE2NzczMDc3LFxuXHRwZWFjaHB1ZmY6IDE2NzY3NjczLFxuXHRwZXJ1OiAxMzQ2ODk5MSxcblx0cGluazogMTY3NjEwMzUsXG5cdHBsdW06IDE0NTI0NjM3LFxuXHRwb3dkZXJibHVlOiAxMTU5MTkxMCxcblx0cHVycGxlOiA4Mzg4NzM2LFxuXHRyZWJlY2NhcHVycGxlOiA2Njk3ODgxLFxuXHRyZWQ6IDE2NzExNjgwLFxuXHRyb3N5YnJvd246IDEyMzU3NTE5LFxuXHRyb3lhbGJsdWU6IDQyODY5NDUsXG5cdHNhZGRsZWJyb3duOiA5MTI3MTg3LFxuXHRzYWxtb246IDE2NDE2ODgyLFxuXHRzYW5keWJyb3duOiAxNjAzMjg2NCxcblx0c2VhZ3JlZW46IDMwNTAzMjcsXG5cdHNlYXNoZWxsOiAxNjc3NDYzOCxcblx0c2llbm5hOiAxMDUwNjc5Nyxcblx0c2lsdmVyOiAxMjYzMjI1Nixcblx0c2t5Ymx1ZTogODkwMDMzMSxcblx0c2xhdGVibHVlOiA2OTcwMDYxLFxuXHRzbGF0ZWdyYXk6IDczNzI5NDQsXG5cdHNsYXRlZ3JleTogNzM3Mjk0NCxcblx0c25vdzogMTY3NzU5MzAsXG5cdHNwcmluZ2dyZWVuOiA2NTQwNyxcblx0c3RlZWxibHVlOiA0NjIwOTgwLFxuXHR0YW46IDEzODA4NzgwLFxuXHR0ZWFsOiAzMjg5Nixcblx0dGhpc3RsZTogMTQyMDQ4ODgsXG5cdHRvbWF0bzogMTY3MzcwOTUsXG5cdHR1cnF1b2lzZTogNDI1MTg1Nixcblx0dmlvbGV0OiAxNTYzMTA4Nixcblx0d2hlYXQ6IDE2MTEzMzMxLFxuXHR3aGl0ZTogMTY3NzcyMTUsXG5cdHdoaXRlc21va2U6IDE2MTE5Mjg1LFxuXHR5ZWxsb3c6IDE2Nzc2OTYwLFxuXHR5ZWxsb3dncmVlbjogMTAxNDUwNzRcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU5hbWVkLmpzXG52YXIgcGFyc2VOYW1lZCA9IChjb2xvcikgPT4ge1xuXHRyZXR1cm4gcGFyc2VOdW1iZXIobmFtZWRbY29sb3IudG9Mb3dlckNhc2UoKV0sIDYpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlSGV4LmpzXG52YXIgaGV4ID0gL14jPyhbMC05YS1mXXs4fXxbMC05YS1mXXs2fXxbMC05YS1mXXs0fXxbMC05YS1mXXszfSkkL2k7XG52YXIgcGFyc2VIZXggPSAoY29sb3IpID0+IHtcblx0bGV0IG1hdGNoO1xuXHRyZXR1cm4gKG1hdGNoID0gY29sb3IubWF0Y2goaGV4KSkgPyBwYXJzZU51bWJlcihwYXJzZUludChtYXRjaFsxXSwgMTYpLCBtYXRjaFsxXS5sZW5ndGgpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9yZWdleC5qc1xudmFyIG51bSQxID0gXCIoWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcIjtcbnZhciBudW1fbm9uZSA9IGAoPzoke251bSQxfXxub25lKWA7XG52YXIgcGVyID0gYCR7bnVtJDF9JWA7XG52YXIgcGVyX25vbmUgPSBgKD86JHtudW0kMX0lfG5vbmUpYDtcbnZhciBudW1fcGVyID0gYCg/OiR7bnVtJDF9JXwke251bSQxfSlgO1xudmFyIG51bV9wZXJfbm9uZSA9IGAoPzoke251bSQxfSV8JHtudW0kMX18bm9uZSlgO1xudmFyIGh1ZSQxID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfSlgO1xudmFyIGh1ZV9ub25lID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfXxub25lKWA7XG52YXIgYyA9IGBcXFxccyosXFxcXHMqYDtcbnZhciByeF9udW1fcGVyX25vbmUgPSBuZXcgUmVnRXhwKFwiXlwiICsgbnVtX3Blcl9ub25lICsgXCIkXCIpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VSZ2JMZWdhY3kuanNcbnZhciByZ2JfbnVtX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtudW0kMX0ke2N9JHtudW0kMX0ke2N9JHtudW0kMX1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcmdiX3Blcl9vbGQgPSBuZXcgUmVnRXhwKGBecmdiYT9cXFxcKFxcXFxzKiR7cGVyfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlUmdiTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0bGV0IG1hdGNoO1xuXHRpZiAobWF0Y2ggPSBjb2xvci5tYXRjaChyZ2JfbnVtX29sZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCkgcmVzLnIgPSBtYXRjaFsxXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbMl0gIT09IHZvaWQgMCkgcmVzLmcgPSBtYXRjaFsyXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbM10gIT09IHZvaWQgMCkgcmVzLmIgPSBtYXRjaFszXSAvIDI1NTtcblx0fSBlbHNlIGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9wZXJfb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMTAwO1xuXHR9IGVsc2UgcmV0dXJuO1xuXHRpZiAobWF0Y2hbNF0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbWF0Y2hbNF0gLyAxMDApKTtcblx0ZWxzZSBpZiAobWF0Y2hbNV0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgK21hdGNoWzVdKSk7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9fcHJlcGFyZS5qc1xudmFyIHByZXBhcmUgPSAoY29sb3IsIG1vZGUpID0+IGNvbG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0eXBlb2YgY29sb3IgIT09IFwib2JqZWN0XCIgPyBwYXJzZShjb2xvcikgOiBjb2xvci5tb2RlICE9PSB2b2lkIDAgPyBjb2xvciA6IG1vZGUgPyB7XG5cdC4uLmNvbG9yLFxuXHRtb2RlXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb252ZXJ0ZXIuanNcbnZhciBjb252ZXJ0ZXIgPSAodGFyZ2V0X21vZGUgPSBcInJnYlwiKSA9PiAoY29sb3IpID0+IChjb2xvciA9IHByZXBhcmUoY29sb3IsIHRhcmdldF9tb2RlKSkgIT09IHZvaWQgMCA/IGNvbG9yLm1vZGUgPT09IHRhcmdldF9tb2RlID8gY29sb3IgOiBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdW3RhcmdldF9tb2RlXSA/IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdKGNvbG9yKSA6IHRhcmdldF9tb2RlID09PSBcInJnYlwiID8gY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpIDogY29udmVydGVycy5yZ2JbdGFyZ2V0X21vZGVdKGNvbnZlcnRlcnNbY29sb3IubW9kZV0ucmdiKGNvbG9yKSkgOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL21vZGVzLmpzXG52YXIgY29udmVydGVycyA9IHt9O1xudmFyIG1vZGVzID0ge307XG52YXIgcGFyc2VycyA9IFtdO1xudmFyIGNvbG9yUHJvZmlsZXMgPSB7fTtcbnZhciBpZGVudGl0eSA9ICh2KSA9PiB2O1xudmFyIHVzZU1vZGUgPSAoZGVmaW5pdGlvbikgPT4ge1xuXHRjb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0gPSB7XG5cdFx0Li4uY29udmVydGVyc1tkZWZpbml0aW9uLm1vZGVdLFxuXHRcdC4uLmRlZmluaXRpb24udG9Nb2RlXG5cdH07XG5cdE9iamVjdC5rZXlzKGRlZmluaXRpb24uZnJvbU1vZGUgfHwge30pLmZvckVhY2goKGspID0+IHtcblx0XHRpZiAoIWNvbnZlcnRlcnNba10pIGNvbnZlcnRlcnNba10gPSB7fTtcblx0XHRjb252ZXJ0ZXJzW2tdW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uLmZyb21Nb2RlW2tdO1xuXHR9KTtcblx0aWYgKCFkZWZpbml0aW9uLnJhbmdlcykgZGVmaW5pdGlvbi5yYW5nZXMgPSB7fTtcblx0aWYgKCFkZWZpbml0aW9uLmRpZmZlcmVuY2UpIGRlZmluaXRpb24uZGlmZmVyZW5jZSA9IHt9O1xuXHRkZWZpbml0aW9uLmNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwpID0+IHtcblx0XHRpZiAoZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPT09IHZvaWQgMCkgZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPSBbMCwgMV07XG5cdFx0aWYgKCFkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgaW50ZXJwb2xhdG9yIGZvcjogJHtjaGFubmVsfWApO1xuXHRcdGlmICh0eXBlb2YgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSA9PT0gXCJmdW5jdGlvblwiKSBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID0geyB1c2U6IGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gfTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXApIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXAgPSBpZGVudGl0eTtcblx0fSk7XG5cdG1vZGVzW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uO1xuXHQoZGVmaW5pdGlvbi5wYXJzZSB8fCBbXSkuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG5cdFx0dXNlUGFyc2VyKHBhcnNlciwgZGVmaW5pdGlvbi5tb2RlKTtcblx0fSk7XG5cdHJldHVybiBjb252ZXJ0ZXIoZGVmaW5pdGlvbi5tb2RlKTtcbn07XG52YXIgZ2V0TW9kZSA9IChtb2RlKSA9PiBtb2Rlc1ttb2RlXTtcbnZhciB1c2VQYXJzZXIgPSAocGFyc2VyLCBtb2RlKSA9PiB7XG5cdGlmICh0eXBlb2YgcGFyc2VyID09PSBcInN0cmluZ1wiKSB7XG5cdFx0aWYgKCFtb2RlKSB0aHJvdyBuZXcgRXJyb3IoYCdtb2RlJyByZXF1aXJlZCB3aGVuICdwYXJzZXInIGlzIGEgc3RyaW5nYCk7XG5cdFx0Y29sb3JQcm9maWxlc1twYXJzZXJdID0gbW9kZTtcblx0fSBlbHNlIGlmICh0eXBlb2YgcGFyc2VyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRpZiAocGFyc2Vycy5pbmRleE9mKHBhcnNlcikgPCAwKSBwYXJzZXJzLnB1c2gocGFyc2VyKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcGFyc2UuanNcbnZhciBJZGVudFN0YXJ0Q29kZVBvaW50ID0gL1teXFx4MDAtXFx4N0ZdfFthLXpBLVpfXS87XG52YXIgSWRlbnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18Wy1cXHddLztcbnZhciBUb2sgPSB7XG5cdEZ1bmN0aW9uOiBcImZ1bmN0aW9uXCIsXG5cdElkZW50OiBcImlkZW50XCIsXG5cdE51bWJlcjogXCJudW1iZXJcIixcblx0UGVyY2VudGFnZTogXCJwZXJjZW50YWdlXCIsXG5cdFBhcmVuQ2xvc2U6IFwiKVwiLFxuXHROb25lOiBcIm5vbmVcIixcblx0SHVlOiBcImh1ZVwiLFxuXHRBbHBoYTogXCJhbHBoYVwiXG59O1xudmFyIF9pID0gMDtcbmZ1bmN0aW9uIGlzX251bShjaGFycykge1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGxldCBjaDEgPSBjaGFyc1tfaSArIDFdO1xuXHRpZiAoY2ggPT09IFwiLVwiIHx8IGNoID09PSBcIitcIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKSB8fCBjaDEgPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSk7XG5cdGlmIChjaCA9PT0gXCIuXCIpIHJldHVybiAvXFxkLy50ZXN0KGNoMSk7XG5cdHJldHVybiAvXFxkLy50ZXN0KGNoKTtcbn1cbmZ1bmN0aW9uIGlzX2lkZW50KGNoYXJzKSB7XG5cdGlmIChfaSA+PSBjaGFycy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0bGV0IGNoID0gY2hhcnNbX2ldO1xuXHRpZiAoSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoKSkgcmV0dXJuIHRydWU7XG5cdGlmIChjaCA9PT0gXCItXCIpIHtcblx0XHRpZiAoY2hhcnMubGVuZ3RoIC0gX2kgPCAyKSByZXR1cm4gZmFsc2U7XG5cdFx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdFx0aWYgKGNoMSA9PT0gXCItXCIgfHwgSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoMSkpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG52YXIgaHVlbml0cyA9IHtcblx0ZGVnOiAxLFxuXHRyYWQ6IDE4MCAvIE1hdGguUEksXG5cdGdyYWQ6IDkgLyAxMCxcblx0dHVybjogMzYwXG59O1xuZnVuY3Rpb24gbnVtKGNoYXJzKSB7XG5cdGxldCB2YWx1ZSA9IFwiXCI7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLVwiIHx8IGNoYXJzW19pXSA9PT0gXCIrXCIpIHZhbHVlICs9IGNoYXJzW19pKytdO1xuXHR2YWx1ZSArPSBkaWdpdHMoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIi5cIiAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiZVwiIHx8IGNoYXJzW19pXSA9PT0gXCJFXCIpIHtcblx0XHRpZiAoKGNoYXJzW19pICsgMV0gPT09IFwiLVwiIHx8IGNoYXJzW19pICsgMV0gPT09IFwiK1wiKSAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMl0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0XHRlbHNlIGlmICgvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdH1cblx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdGxldCBpZCA9IGlkZW50KGNoYXJzKTtcblx0XHRpZiAoaWQgPT09IFwiZGVnXCIgfHwgaWQgPT09IFwicmFkXCIgfHwgaWQgPT09IFwidHVyblwiIHx8IGlkID09PSBcImdyYWRcIikgcmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5IdWUsXG5cdFx0XHR2YWx1ZTogdmFsdWUgKiBodWVuaXRzW2lkXVxuXHRcdH07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiJVwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLlBlcmNlbnRhZ2UsXG5cdFx0XHR2YWx1ZTogK3ZhbHVlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5OdW1iZXIsXG5cdFx0dmFsdWU6ICt2YWx1ZVxuXHR9O1xufVxuZnVuY3Rpb24gZGlnaXRzKGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKC9cXGQvLnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudChjaGFycykge1xuXHRsZXQgdiA9IFwiXCI7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCAmJiBJZGVudENvZGVQb2ludC50ZXN0KGNoYXJzW19pXSkpIHYgKz0gY2hhcnNbX2krK107XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gaWRlbnRsaWtlKGNoYXJzKSB7XG5cdGxldCB2ID0gaWRlbnQoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIihcIikge1xuXHRcdF9pKys7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5GdW5jdGlvbixcblx0XHRcdHZhbHVlOiB2XG5cdFx0fTtcblx0fVxuXHRpZiAodiA9PT0gXCJub25lXCIpIHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHR2YWx1ZTogdlxuXHR9O1xufVxuZnVuY3Rpb24gdG9rZW5pemUoc3RyID0gXCJcIikge1xuXHRsZXQgY2hhcnMgPSBzdHIudHJpbSgpO1xuXHRsZXQgdG9rZW5zID0gW107XG5cdGxldCBjaDtcblx0X2kgPSAwO1xuXHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGgpIHtcblx0XHRjaCA9IGNoYXJzW19pKytdO1xuXHRcdGlmIChjaCA9PT0gXCJcXG5cIiB8fCBjaCA9PT0gXCJcdFwiIHx8IGNoID09PSBcIiBcIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIixcIikgcmV0dXJuO1xuXHRcdGlmIChjaCA9PT0gXCIpXCIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHsgdHlwZTogVG9rLlBhcmVuQ2xvc2UgfSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIitcIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHRcdFx0XHR2YWx1ZTogaWRlbnQoY2hhcnMpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi5cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi9cIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRsZXQgYWxwaGE7XG5cdFx0XHRpZiAoaXNfbnVtKGNoYXJzKSkge1xuXHRcdFx0XHRhbHBoYSA9IG51bShjaGFycyk7XG5cdFx0XHRcdGlmIChhbHBoYS50eXBlICE9PSBUb2suSHVlKSB7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogVG9rLkFscGhhLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFscGhhXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0aWYgKGlkZW50KGNoYXJzKSA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZvaWQgMFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICgvXFxkLy50ZXN0KGNoKSkge1xuXHRcdFx0X2ktLTtcblx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2goaWRlbnRsaWtlKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBwYXJzZUNvbG9yU3ludGF4KHRva2Vucykge1xuXHR0b2tlbnMuX2kgPSAwO1xuXHRsZXQgdG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAoIXRva2VuIHx8IHRva2VuLnR5cGUgIT09IFRvay5GdW5jdGlvbiB8fCB0b2tlbi52YWx1ZSAhPT0gXCJjb2xvclwiKSByZXR1cm47XG5cdHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKHRva2VuLnR5cGUgIT09IFRvay5JZGVudCkgcmV0dXJuO1xuXHRjb25zdCBtb2RlID0gY29sb3JQcm9maWxlc1t0b2tlbi52YWx1ZV07XG5cdGlmICghbW9kZSkgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGUgfTtcblx0Y29uc3QgY29vcmRzID0gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGZhbHNlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29uc3QgY2hhbm5lbHMgPSBnZXRNb2RlKG1vZGUpLmNoYW5uZWxzO1xuXHRmb3IgKGxldCBpaSA9IDAsIGMsIGNoOyBpaSA8IGNoYW5uZWxzLmxlbmd0aDsgaWkrKykge1xuXHRcdGMgPSBjb29yZHNbaWldO1xuXHRcdGNoID0gY2hhbm5lbHNbaWldO1xuXHRcdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0XHRyZXNbY2hdID0gYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgLyAxMDA7XG5cdFx0XHRpZiAoY2ggPT09IFwiYWxwaGFcIikgcmVzW2NoXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJlc1tjaF0pKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdGNvbnN0IGNvb3JkcyA9IFtdO1xuXHRsZXQgdG9rZW47XG5cdHdoaWxlICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suTm9uZSB8fCB0b2tlbi50eXBlID09PSBUb2suTnVtYmVyIHx8IHRva2VuLnR5cGUgPT09IFRvay5BbHBoYSB8fCB0b2tlbi50eXBlID09PSBUb2suUGVyY2VudGFnZSB8fCBpbmNsdWRlSHVlICYmIHRva2VuLnR5cGUgPT09IFRvay5IdWUpIHtcblx0XHRcdGNvb3Jkcy5wdXNoKHRva2VuKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rLlBhcmVuQ2xvc2UpIHtcblx0XHRcdGlmICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoIDwgMyB8fCBjb29yZHMubGVuZ3RoID4gNCkgcmV0dXJuO1xuXHRpZiAoY29vcmRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdGlmIChjb29yZHNbM10udHlwZSAhPT0gVG9rLkFscGhhKSByZXR1cm47XG5cdFx0Y29vcmRzWzNdID0gY29vcmRzWzNdLnZhbHVlO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSAzKSBjb29yZHMucHVzaCh7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9KTtcblx0cmV0dXJuIGNvb3Jkcy5ldmVyeSgoYykgPT4gYy50eXBlICE9PSBUb2suQWxwaGEpID8gY29vcmRzIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uKSByZXR1cm47XG5cdGxldCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgaW5jbHVkZUh1ZSk7XG5cdGlmICghY29vcmRzKSByZXR1cm47XG5cdGNvb3Jkcy51bnNoaWZ0KHRva2VuLnZhbHVlKTtcblx0cmV0dXJuIGNvb3Jkcztcbn1cbnZhciBwYXJzZSA9IChjb2xvcikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm47XG5cdGNvbnN0IHRva2VucyA9IHRva2VuaXplKGNvbG9yKTtcblx0Y29uc3QgcGFyc2VkID0gdG9rZW5zID8gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCB0cnVlKSA6IHZvaWQgMDtcblx0bGV0IHJlc3VsdCA9IHZvaWQgMDtcblx0bGV0IGkgPSAwO1xuXHRsZXQgbGVuID0gcGFyc2Vycy5sZW5ndGg7XG5cdHdoaWxlIChpIDwgbGVuKSBpZiAoKHJlc3VsdCA9IHBhcnNlcnNbaSsrXShjb2xvciwgcGFyc2VkKSkgIT09IHZvaWQgMCkgcmV0dXJuIHJlc3VsdDtcblx0cmV0dXJuIHRva2VucyA/IHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSA6IHZvaWQgMDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYi5qc1xuZnVuY3Rpb24gcGFyc2VSZ2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwicmdiXCIgJiYgcGFyc2VkWzBdICE9PSBcInJnYmFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0Y29uc3QgWywgciwgZywgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoci50eXBlID09PSBUb2suSHVlIHx8IGcudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKHIudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5yID0gci50eXBlID09PSBUb2suTnVtYmVyID8gci52YWx1ZSAvIDI1NSA6IHIudmFsdWUgLyAxMDA7XG5cdGlmIChnLnR5cGUgIT09IFRvay5Ob25lKSByZXMuZyA9IGcudHlwZSA9PT0gVG9rLk51bWJlciA/IGcudmFsdWUgLyAyNTUgOiBnLnZhbHVlIC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIC8gMjU1IDogYi52YWx1ZSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VUcmFuc3BhcmVudC5qc1xudmFyIHBhcnNlVHJhbnNwYXJlbnQgPSAoYykgPT4gYyA9PT0gXCJ0cmFuc3BhcmVudFwiID8ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiAwLFxuXHRnOiAwLFxuXHRiOiAwLFxuXHRhbHBoYTogMFxufSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaW50ZXJwb2xhdGUvbGVycC5qc1xudmFyIGxlcnAgPSAoYSwgYiwgdCkgPT4gYSArIHQgKiAoYiAtIGEpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9waWVjZXdpc2UuanNcbnZhciBnZXRfY2xhc3NlcyA9IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0bGV0IGEgPSBhcnJbaV07XG5cdFx0bGV0IGIgPSBhcnJbaSArIDFdO1xuXHRcdGlmIChhID09PSB2b2lkIDAgJiYgYiA9PT0gdm9pZCAwKSBjbGFzc2VzLnB1c2godm9pZCAwKTtcblx0XHRlbHNlIGlmIChhICE9PSB2b2lkIDAgJiYgYiAhPT0gdm9pZCAwKSBjbGFzc2VzLnB1c2goW2EsIGJdKTtcblx0XHRlbHNlIGNsYXNzZXMucHVzaChhICE9PSB2b2lkIDAgPyBbYSwgYV0gOiBbYiwgYl0pO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcbnZhciBpbnRlcnBvbGF0b3JQaWVjZXdpc2UgPSAoaW50ZXJwb2xhdG9yKSA9PiAoYXJyKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gZ2V0X2NsYXNzZXMoYXJyKTtcblx0cmV0dXJuICh0KSA9PiB7XG5cdFx0bGV0IGNscyA9IHQgKiBjbGFzc2VzLmxlbmd0aDtcblx0XHRsZXQgaWR4ID0gdCA+PSAxID8gY2xhc3Nlcy5sZW5ndGggLSAxIDogTWF0aC5tYXgoTWF0aC5mbG9vcihjbHMpLCAwKTtcblx0XHRsZXQgcGFpciA9IGNsYXNzZXNbaWR4XTtcblx0XHRyZXR1cm4gcGFpciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJwb2xhdG9yKHBhaXJbMF0sIHBhaXJbMV0sIGNscyAtIGlkeCk7XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9saW5lYXIuanNcbnZhciBpbnRlcnBvbGF0b3JMaW5lYXIgPSBpbnRlcnBvbGF0b3JQaWVjZXdpc2UobGVycCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2FscGhhLmpzXG52YXIgZml4dXBBbHBoYSA9IChhcnIpID0+IHtcblx0bGV0IHNvbWVfZGVmaW5lZCA9IGZhbHNlO1xuXHRsZXQgcmVzID0gYXJyLm1hcCgodikgPT4ge1xuXHRcdGlmICh2ICE9PSB2b2lkIDApIHtcblx0XHRcdHNvbWVfZGVmaW5lZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9XG5cdFx0cmV0dXJuIDE7XG5cdH0pO1xuXHRyZXR1cm4gc29tZV9kZWZpbmVkID8gcmVzIDogYXJyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI3ID0ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiclwiLFxuXHRcdFwiZ1wiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1xuXHRcdHBhcnNlUmdiLFxuXHRcdHBhcnNlSGV4LFxuXHRcdHBhcnNlUmdiTGVnYWN5LFxuXHRcdHBhcnNlTmFtZWQsXG5cdFx0cGFyc2VUcmFuc3BhcmVudCxcblx0XHRcInNyZ2JcIlxuXHRdLFxuXHRzZXJpYWxpemU6IFwic3JnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRnOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRnYW11dDogdHJ1ZSxcblx0d2hpdGU6IHtcblx0XHRyOiAxLFxuXHRcdGc6IDEsXG5cdFx0YjogMVxuXHR9LFxuXHRibGFjazoge1xuXHRcdHI6IDAsXG5cdFx0ZzogMCxcblx0XHRiOiAwXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0QTk4VG9YeXo2NS5qc1xudmFyIGxpbmVhcml6ZSQyID0gKHYgPSAwKSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgNTYzIC8gMjU2KSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0QTk4VG9YeXo2NSA9IChhOTgpID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUkMihhOTgucik7XG5cdGxldCBnID0gbGluZWFyaXplJDIoYTk4LmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQyKGE5OC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjU3NjY2OTA0MjkxMDEzMDUgKiByICsgLjE4NTU1ODIzNzkwNjU0NjMgKiBnICsgLjE4ODIyODY0NjIzNDk5NDcgKiBiLFxuXHRcdHk6IC4yOTczNDQ5NzUyNTA1MzYgKiByICsgLjYyNzM2MzU2NjI1NTQ2NjEgKiBnICsgLjA3NTI5MTQ1ODQ5Mzk5NzkgKiBiLFxuXHRcdHo6IC4wMjcwMzEzNjEzODY0MTIzICogciArIC4wNzA2ODg4NTI1MzU4MjcyICogZyArIC45OTEzMzc1MzY4Mzc2Mzg2ICogYlxuXHR9O1xuXHRpZiAoYTk4LmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGE5OC5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0WHl6NjVUb0E5OC5qc1xudmFyIGdhbW1hJDIgPSAodikgPT4gTWF0aC5wb3coTWF0aC5hYnModiksIDI1NiAvIDU2MykgKiBNYXRoLnNpZ24odik7XG52YXIgY29udmVydFh5ejY1VG9BOTggPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJhOThcIixcblx0XHRyOiBnYW1tYSQyKHggKiAyLjA0MTU4NzkwMzgxMDc0NjUgLSB5ICogLjU2NTAwNjk3NDI3ODg1OTcgLSAuMzQ0NzMxMzUwNzc4MzI5NyAqIHopLFxuXHRcdGc6IGdhbW1hJDIoeCAqIC0uOTY5MjQzNjM2MjgwODc5OCArIHkgKiAxLjg3NTk2NzUwMTUwNzcyMDYgKyAuMDQxNTU1MDU3NDA3MTc1NiAqIHopLFxuXHRcdGI6IGdhbW1hJDIoeCAqIC4wMTM0NDQyODA2MzIwMzEyIC0geSAqIC4xMTgzNjIzOTIyMzEwMTg0ICsgMS4wMTUxNzQ5OTQzOTEyMDU4ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0UmdiVG9McmdiLmpzXG52YXIgZm4kMyA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA8PSAuMDQwNDUpIHJldHVybiBjIC8gMTIuOTI7XG5cdHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogTWF0aC5wb3coKGFicyArIC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59O1xudmFyIGNvbnZlcnRSZ2JUb0xyZ2IgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogZm4kMyhyKSxcblx0XHRnOiBmbiQzKGcpLFxuXHRcdGI6IGZuJDMoYilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFJnYlRvWHl6NjUuanNcbnZhciBjb252ZXJ0UmdiVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQxMjM5MDc5OTI2NTk1OTMgKiByICsgLjM1NzU4NDMzOTM4Mzg3OCAqIGcgKyAuMTgwNDgwNzg4NDAxODM0MyAqIGIsXG5cdFx0eTogLjIxMjYzOTAwNTg3MTUxMDIgKiByICsgLjcxNTE2ODY3ODc2Nzc1NiAqIGcgKyAuMDcyMTkyMzE1MzYwNzMzNyAqIGIsXG5cdFx0ejogLjAxOTMzMDgxODcxNTU5MTggKiByICsgLjExOTE5NDc3OTc5NDYyNiAqIGcgKyAuOTUwNTMyMTUyMjQ5NjYwNyAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0THJnYlRvUmdiLmpzXG52YXIgZm4kMiA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA+IC4wMDMxMzA4KSByZXR1cm4gKE1hdGguc2lnbihjKSB8fCAxKSAqICgxLjA1NSAqIE1hdGgucG93KGFicywgMSAvIDIuNCkgLSAuMDU1KTtcblx0cmV0dXJuIGMgKiAxMi45Mjtcbn07XG52YXIgY29udmVydExyZ2JUb1JnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0sIG1vZGUgPSBcInJnYlwiKSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRyOiBmbiQyKHIpLFxuXHRcdGc6IGZuJDIoZyksXG5cdFx0YjogZm4kMihiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo2NVRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMjQwOTY5OTQxOTA0NTIyNiAtIHkgKiAxLjUzNzM4MzE3NzU3MDA5NCAtIC40OTg2MTA3NjAyOTMwMDM0ICogeixcblx0XHRnOiB4ICogLS45NjkyNDM2MzYyODA4Nzk2ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNCArIC4wNDE1NTUwNTc0MDcxNzU2ICogeixcblx0XHRiOiB4ICogLjA1NTYzMDA3OTY5Njk5MzYgLSB5ICogLjIwMzk3Njk1ODg4ODk3NjUgKyAxLjA1Njk3MTUxNDI0Mjg3ODQgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hOTgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjYgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwiYTk4XCIsXG5cdHBhcnNlOiBbXCJhOTgtcmdiXCJdLFxuXHRzZXJpYWxpemU6IFwiYTk4LXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb0E5OChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0E5OFxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEE5OFRvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydEE5OFRvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9ub3JtYWxpemVIdWUuanNcbnZhciBub3JtYWxpemVIdWUgPSAoaHVlKSA9PiAoaHVlID0gaHVlICUgMzYwKSA8IDAgPyBodWUgKyAzNjAgOiBodWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2h1ZS5qc1xudmFyIGh1ZSA9IChodWVzLCBmbikgPT4ge1xuXHRyZXR1cm4gaHVlcy5tYXAoKGh1ZSwgaWR4LCBhcnIpID0+IHtcblx0XHRpZiAoaHVlID09PSB2b2lkIDApIHJldHVybiBodWU7XG5cdFx0bGV0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIdWUoaHVlKTtcblx0XHRpZiAoaWR4ID09PSAwIHx8IGh1ZXNbaWR4IC0gMV0gPT09IHZvaWQgMCkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdFx0cmV0dXJuIGZuKG5vcm1hbGl6ZWQgLSBub3JtYWxpemVIdWUoYXJyW2lkeCAtIDFdKSk7XG5cdH0pLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG5cdFx0aWYgKCFhY2MubGVuZ3RoIHx8IGN1cnIgPT09IHZvaWQgMCB8fCBhY2NbYWNjLmxlbmd0aCAtIDFdID09PSB2b2lkIDApIHtcblx0XHRcdGFjYy5wdXNoKGN1cnIpO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9XG5cdFx0YWNjLnB1c2goY3VyciArIGFjY1thY2MubGVuZ3RoIC0gMV0pO1xuXHRcdHJldHVybiBhY2M7XG5cdH0sIFtdKTtcbn07XG52YXIgZml4dXBIdWVTaG9ydGVyID0gKGFycikgPT4gaHVlKGFyciwgKGQpID0+IE1hdGguYWJzKGQpIDw9IDE4MCA/IGQgOiBkIC0gMzYwICogTWF0aC5zaWduKGQpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnN0YW50cy5qc1xudmFyIE0gPSBbXG5cdC0uMTQ4NjEsXG5cdDEuNzgyNzcsXG5cdC0uMjkyMjcsXG5cdC0uOTA2NDksXG5cdDEuOTcyOTQsXG5cdDBcbl07XG52YXIgZGVnVG9SYWQgPSBNYXRoLlBJIC8gMTgwO1xudmFyIHJhZFRvRGVnID0gMTgwIC8gTWF0aC5QSTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRSZ2JUb0N1YmVoZWxpeC5qc1xudmFyIERFID0gTVszXSAqIE1bNF07XG52YXIgQkUgPSBNWzFdICogTVs0XTtcbnZhciBCQ0FEID0gTVsxXSAqIE1bMl0gLSBNWzBdICogTVszXTtcbnZhciBjb252ZXJ0UmdiVG9DdWJlaGVsaXggPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBsID0gKEJDQUQgKiBiICsgciAqIERFIC0gZyAqIEJFKSAvIChCQ0FEICsgREUgLSBCRSk7XG5cdGxldCB4ID0gYiAtIGw7XG5cdGxldCB5ID0gKE1bNF0gKiAoZyAtIGwpIC0gTVsyXSAqIHgpIC8gTVszXTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRcdGwsXG5cdFx0czogbCA9PT0gMCB8fCBsID09PSAxID8gdm9pZCAwIDogTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpIC8gKE1bNF0gKiBsICogKDEgLSBsKSlcblx0fTtcblx0aWYgKHJlcy5zKSByZXMuaCA9IE1hdGguYXRhbjIoeSwgeCkgKiByYWRUb0RlZyAtIDEyMDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRDdWJlaGVsaXhUb1JnYi5qc1xudmFyIGNvbnZlcnRDdWJlaGVsaXhUb1JnYiA9ICh7IGgsIHMsIGwsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRoID0gKGggPT09IHZvaWQgMCA/IDAgOiBoICsgMTIwKSAqIGRlZ1RvUmFkO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IGFtcCA9IHMgPT09IHZvaWQgMCA/IDAgOiBzICogbCAqICgxIC0gbCk7XG5cdGxldCBjb3NoID0gTWF0aC5jb3MoaCk7XG5cdGxldCBzaW5oID0gTWF0aC5zaW4oaCk7XG5cdHJlcy5yID0gbCArIGFtcCAqIChNWzBdICogY29zaCArIE1bMV0gKiBzaW5oKTtcblx0cmVzLmcgPSBsICsgYW1wICogKE1bMl0gKiBjb3NoICsgTVszXSAqIHNpbmgpO1xuXHRyZXMuYiA9IGwgKyBhbXAgKiAoTVs0XSAqIGNvc2ggKyBNWzVdICogc2luaCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RpZmZlcmVuY2UuanNcbnZhciBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQucyB8fCAhc21wLnMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5zICogc21wLnMpICogZEg7XG59O1xudmFyIGRpZmZlcmVuY2VIdWVOYWl2ZSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwKSByZXR1cm4gMDtcblx0bGV0IHN0ZF9oID0gbm9ybWFsaXplSHVlKHN0ZC5oKTtcblx0bGV0IHNtcF9oID0gbm9ybWFsaXplSHVlKHNtcC5oKTtcblx0aWYgKE1hdGguYWJzKHNtcF9oIC0gc3RkX2gpID4gMTgwKSByZXR1cm4gc3RkX2ggLSAoc21wX2ggLSAzNjAgKiBNYXRoLnNpZ24oc21wX2ggLSBzdGRfaCkpO1xuXHRyZXR1cm4gc21wX2ggLSBzdGRfaDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZUNocm9tYSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQuYyB8fCAhc21wLmMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5jICogc21wLmMpICogZEg7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hdmVyYWdlLmpzXG52YXIgYXZlcmFnZUFuZ2xlID0gKHZhbCkgPT4ge1xuXHRsZXQgc3VtID0gdmFsLnJlZHVjZSgoc3VtLCB2YWwpID0+IHtcblx0XHRpZiAodmFsICE9PSB2b2lkIDApIHtcblx0XHRcdGxldCByYWQgPSB2YWwgKiBNYXRoLlBJIC8gMTgwO1xuXHRcdFx0c3VtLnNpbiArPSBNYXRoLnNpbihyYWQpO1xuXHRcdFx0c3VtLmNvcyArPSBNYXRoLmNvcyhyYWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VtO1xuXHR9LCB7XG5cdFx0c2luOiAwLFxuXHRcdGNvczogMFxuXHR9KTtcblx0bGV0IGFuZ2xlID0gTWF0aC5hdGFuMihzdW0uc2luLCBzdW0uY29zKSAqIDE4MCAvIE1hdGguUEk7XG5cdHJldHVybiBhbmdsZSA8IDAgPyAzNjAgKyBhbmdsZSA6IGFuZ2xlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI1ID0ge1xuXHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1jdWJlaGVsaXhcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWN1YmVoZWxpeFwiLFxuXHRyYW5nZXM6IHtcblx0XHRoOiBbMCwgMzYwXSxcblx0XHRzOiBbMCwgNC42MTRdLFxuXHRcdGw6IFswLCAxXVxuXHR9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCB9LFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0Q3ViZWhlbGl4VG9SZ2IgfSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMYWJUb0xjaC5qc1xudmFyIGNvbnZlcnRMYWJUb0xjaCA9ICh7IGwsIGEsIGIsIGFscGhhIH0sIG1vZGUgPSBcImxjaFwiKSA9PiB7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMY2hUb0xhYi5qc1xudmFyIGNvbnZlcnRMY2hUb0xhYiA9ICh7IGwsIGMsIGgsIGFscGhhIH0sIG1vZGUgPSBcImxhYlwiKSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGUsXG5cdFx0bCxcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnN0YW50cy5qc1xudmFyIGskMiA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMiA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb25zdGFudHMuanNcbnZhciBENTAgPSB7XG5cdFg6IC4zNDU3IC8gLjM1ODUsXG5cdFk6IDEsXG5cdFo6IC4yOTU4IC8gLjM1ODVcbn07XG52YXIgRDY1ID0ge1xuXHRYOiAuMzEyNyAvIC4zMjksXG5cdFk6IDEsXG5cdFo6IC4zNTgzIC8gLjMyOVxufTtcbnZhciBrJDEgPSBNYXRoLnBvdygyOSwgMykgLyBNYXRoLnBvdygzLCAzKTtcbnZhciBlJDEgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9YeXo2NS5qc1xudmFyIGZuJDEgPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlJDIgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gayQyO1xudmFyIGNvbnZlcnRMYWI2NVRvWHl6NjUgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogZm4kMShmeCkgKiBENjUuWCxcblx0XHR5OiBmbiQxKGZ5KSAqIEQ2NS5ZLFxuXHRcdHo6IGZuJDEoZnopICogRDY1Llpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9SZ2IuanNcbnZhciBjb252ZXJ0TGFiNjVUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRMYWI2NVRvWHl6NjUobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2NvbnZlcnRYeXo2NVRvTGFiNjUuanNcbnZhciBmJDEgPSAodmFsdWUpID0+IHZhbHVlID4gZSQyID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrJDIgKiB2YWx1ZSArIDE2KSAvIDExNjtcbnZhciBjb252ZXJ0WHl6NjVUb0xhYjY1ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmJDEoeCAvIEQ2NS5YKTtcblx0bGV0IGYxID0gZiQxKHkgLyBENjUuWSk7XG5cdGxldCBmMiA9IGYkMSh6IC8gRDY1LlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiNjVcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFJnYlRvTGFiNjUuanNcbnZhciBjb252ZXJ0UmdiVG9MYWI2NSA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo2NVRvTGFiNjUoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29uc3RhbnRzLmpzXG52YXIgzrggPSAyNiAvIDE4MCAqIE1hdGguUEk7XG52YXIgY29zzrggPSBNYXRoLmNvcyjOuCk7XG52YXIgc2luzrggPSBNYXRoLnNpbijOuCk7XG52YXIgZmFjdG9yID0gMTAwIC8gTWF0aC5sb2coMTM5IC8gMTAwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0RGxjaFRvTGFiNjUuanNcbnZhciBjb252ZXJ0RGxjaFRvTGFiNjUgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYyA9PT0gdm9pZCAwKSBjID0gMDtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IChNYXRoLmV4cChsICogMSAvIGZhY3RvcikgLSAxKSAvIC4wMDM5XG5cdH07XG5cdGxldCBHID0gKE1hdGguZXhwKC4wNDM1ICogYyAqIDEgKiAxKSAtIDEpIC8gLjA3NTtcblx0bGV0IGUgPSBHICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdGxldCBmID0gRyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJIC0gzrgpO1xuXHRyZXMuYSA9IGUgKiBjb3POuCAtIGYgLyAuODMgKiBzaW7OuDtcblx0cmVzLmIgPSBlICogc2luzrggKyBmIC8gLjgzICogY29zzrg7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29udmVydExhYjY1VG9EbGNoLmpzXG52YXIgY29udmVydExhYjY1VG9EbGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgZSA9IGEgKiBjb3POuCArIGIgKiBzaW7OuDtcblx0bGV0IGYgPSAuODMgKiAoYiAqIGNvc864IC0gYSAqIHNpbs64KTtcblx0bGV0IEcgPSBNYXRoLnNxcnQoZSAqIGUgKyBmICogZik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJkbGNoXCIsXG5cdFx0bDogZmFjdG9yIC8gMSAqIE1hdGgubG9nKDEgKyAuMDAzOSAqIGwpLFxuXHRcdGM6IE1hdGgubG9nKDEgKyAuMDc1ICogRykgLyAoLjA0MzUgKiAxICogMSlcblx0fTtcblx0aWYgKHJlcy5jKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZSgoTWF0aC5hdGFuMihmLCBlKSArIM64KSAvIE1hdGguUEkgKiAxODApO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGFiL2RlZmluaXRpb24uanNcbnZhciBjb252ZXJ0RGxhYlRvTGFiNjUgPSAoYykgPT4gY29udmVydERsY2hUb0xhYjY1KGNvbnZlcnRMYWJUb0xjaChjLCBcImRsY2hcIikpO1xudmFyIGNvbnZlcnRMYWI2NVRvRGxhYiA9IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoY29udmVydExhYjY1VG9EbGNoKGMpLCBcImRsYWJcIik7XG52YXIgZGVmaW5pdGlvbiQyNCA9IHtcblx0bW9kZTogXCJkbGFiXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sYWJcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGFiVG9MYWI2NSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxhYlRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsYWIoY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstNDAuMDksIDQ1LjUwMV0sXG5cdFx0YjogWy00MC40NjksIDQ0LjM0NF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMyA9IHtcblx0bW9kZTogXCJkbGNoXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sY2hcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGNoVG9MYWI2NSxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwiZGxhYlwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxjaFRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxjaCxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsY2goY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGM6IFswLCA1MS40ODRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2NvbnZlcnRIc2lUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzaVRvUmdiKHsgaCwgcywgaSwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRnOiBpICogKDEgLSBzKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0YjogaSAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydFJnYlRvSHNpLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic2koeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzaVwiLFxuXHRcdHM6IHIgKyBnICsgYiA9PT0gMCA/IDAgOiAxIC0gMyAqIG0gLyAociArIGcgKyBiKSxcblx0XHRpOiAociArIGcgKyBiKSAvIDNcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIyID0ge1xuXHRtb2RlOiBcImhzaVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHNpVG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHNpXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc2lcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic2kgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcImlcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvY29udmVydEhzbFRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNsVG9SZ2IoeyBoLCBzLCBsLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGxldCBtMSA9IGwgKyBzICogKGwgPCAuNSA/IGwgOiAxIC0gbCk7XG5cdGxldCBtMiA9IG0xIC0gKG0xIC0gbCkgKiAyICogTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IG0yLFxuXHRcdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGc6IG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogMiAqIGwgLSBtMSxcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0xLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0UmdiVG9Ic2wuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzbCh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNsXCIsXG5cdFx0czogTSA9PT0gbSA/IDAgOiAoTSAtIG0pIC8gKDEgLSBNYXRoLmFicyhNICsgbSAtIDEpKSxcblx0XHRsOiAuNSAqIChNICsgbSlcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9odWUuanNcbnZhciBodWVUb0RlZyA9ICh2YWwsIHVuaXQpID0+IHtcblx0c3dpdGNoICh1bml0KSB7XG5cdFx0Y2FzZSBcImRlZ1wiOiByZXR1cm4gK3ZhbDtcblx0XHRjYXNlIFwicmFkXCI6IHJldHVybiB2YWwgLyBNYXRoLlBJICogMTgwO1xuXHRcdGNhc2UgXCJncmFkXCI6IHJldHVybiB2YWwgLyAxMCAqIDk7XG5cdFx0Y2FzZSBcInR1cm5cIjogcmV0dXJuIHZhbCAqIDM2MDtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsTGVnYWN5LmpzXG52YXIgaHNsX29sZCA9IG5ldyBSZWdFeHAoYF5oc2xhP1xcXFwoXFxcXHMqJHtodWUkMX0ke2N9JHtwZXJ9JHtjfSR7cGVyfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciBwYXJzZUhzbExlZ2FjeSA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2ggPSBjb2xvci5tYXRjaChoc2xfb2xkKTtcblx0aWYgKCFtYXRjaCkgcmV0dXJuO1xuXHRsZXQgcmVzID0geyBtb2RlOiBcImhzbFwiIH07XG5cdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuaCA9ICttYXRjaFszXTtcblx0ZWxzZSBpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCAmJiBtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuaCA9IGh1ZVRvRGVnKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMucyA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzRdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzVdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs2XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs2XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs3XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbN10pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9wYXJzZUhzbC5qc1xuZnVuY3Rpb24gcGFyc2VIc2woY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHNsXCIgJiYgcGFyc2VkWzBdICE9PSBcImhzbGFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0Y29uc3QgWywgaCwgcywgbCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChzLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKHMudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5zID0gcy52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IGwudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjEgPSB7XG5cdG1vZGU6IFwiaHNsXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2xUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzbCB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdHBhcnNlOiBbcGFyc2VIc2wsIHBhcnNlSHNsTGVnYWN5XSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGhzbCgke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy5zICE9PSB2b2lkIDAgPyBjLnMgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MubCAhPT0gdm9pZCAwID8gYy5sICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2NvbnZlcnRIc3ZUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzdlRvUmdiKHsgaCwgcywgdiwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0Zzogdixcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzICogZiksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiB2ICogKDEgLSBzKSxcblx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0YjogdiAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydFJnYlRvSHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic3YoeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzdlwiLFxuXHRcdHM6IE0gPT09IDAgPyAwIDogMSAtIG0gLyBNLFxuXHRcdHY6IE1cblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIwID0ge1xuXHRtb2RlOiBcImhzdlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHN2VG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc3ZcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic3YgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydEh3YlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHdiVG9SZ2IoeyBoLCB3LCBiLCBhbHBoYSB9KSB7XG5cdGlmICh3ID09PSB2b2lkIDApIHcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0aWYgKHcgKyBiID4gMSkge1xuXHRcdGxldCBzID0gdyArIGI7XG5cdFx0dyAvPSBzO1xuXHRcdGIgLz0gcztcblx0fVxuXHRyZXR1cm4gY29udmVydEhzdlRvUmdiKHtcblx0XHRoLFxuXHRcdHM6IGIgPT09IDEgPyAxIDogMSAtIHcgLyAoMSAtIGIpLFxuXHRcdHY6IDEgLSBiLFxuXHRcdGFscGhhXG5cdH0pO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydFJnYlRvSHdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Id2IocmdiYSkge1xuXHRsZXQgaHN2ID0gY29udmVydFJnYlRvSHN2KHJnYmEpO1xuXHRpZiAoaHN2ID09PSB2b2lkIDApIHJldHVybiB2b2lkIDA7XG5cdGxldCBzID0gaHN2LnMgIT09IHZvaWQgMCA/IGhzdi5zIDogMDtcblx0bGV0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHdiXCIsXG5cdFx0dzogKDEgLSBzKSAqIHYsXG5cdFx0YjogMSAtIHZcblx0fTtcblx0aWYgKGhzdi5oICE9PSB2b2lkIDApIHJlcy5oID0gaHN2Lmg7XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gaHN2LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvcGFyc2VId2IuanNcbmZ1bmN0aW9uIFBhcnNlSHdiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImh3YlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJod2JcIiB9O1xuXHRjb25zdCBbLCBoLCB3LCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHcudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAody50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLncgPSB3LnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5iID0gYi52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOSA9IHtcblx0bW9kZTogXCJod2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEh3YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHdiIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJ3XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtQYXJzZUh3Yl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBod2IoJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSAke2MudyAhPT0gdm9pZCAwID8gYy53ICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHR3OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVOYWl2ZSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oZHIvdHJhbnNmZXIuanNcbnZhciBNMSA9IC4xNTkzMDE3NTc4MTI1O1xudmFyIE0yID0gNzguODQzNzU7XG52YXIgQzEgPSAuODM1OTM3NTtcbnZhciBDMiA9IDE4Ljg1MTU2MjU7XG52YXIgQzMgPSAxOC42ODc1O1xuZnVuY3Rpb24gdHJhbnNmZXJQcURlY29kZSh2KSB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGNvbnN0IGMgPSBNYXRoLnBvdyh2LCAxIC8gTTIpO1xuXHRyZXR1cm4gMWU0ICogTWF0aC5wb3coTWF0aC5tYXgoMCwgYyAtIEMxKSAvIChDMiAtIEMzICogYyksIDEgLyBNMSk7XG59XG5mdW5jdGlvbiB0cmFuc2ZlclBxRW5jb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogYykgLyAoMSArIEMzICogYyksIE0yKTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRJdHBUb1h5ejY1LmpzXG52YXIgdG9SZWwgPSAoYykgPT4gTWF0aC5tYXgoYyAvIDIwMywgMCk7XG52YXIgY29udmVydEl0cFRvWHl6NjUgPSAoeyBpLCB0LCBwLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAodCA9PT0gdm9pZCAwKSB0ID0gMDtcblx0aWYgKHAgPT09IHZvaWQgMCkgcCA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuMDA4NjA5MDM3MDM3OTMyNzYxICogdCArIC4xMTEwMjk2MjUwMDMwMjU5MyAqIHApO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcURlY29kZShpIC0gLjAwODYwOTAzNzAzNzkzMjc1ICogdCAtIC4xMTEwMjk2MjUwMDMwMjU5OSAqIHApO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcURlY29kZShpICsgLjU2MDAzMTMzNTcxMDY3OTEgKiB0IC0gLjMyMDYyNzE3NDk4NzMxODg1ICogcCk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogdG9SZWwoMi4wNzAxNTIyMTgzODk0MjIgKiBsIC0gMS4zMjYzNDczMzg5NjcxNTU2ICogbSArIC4yMDY2NTEwNDc2Mjk0MDUxICogcyksXG5cdFx0eTogdG9SZWwoLjM2NDczODUyMDk3NDgwNzQgKiBsICsgLjY4MDU2NjAyNDk0NzIyNyAqIG0gLSAuMDQ1MzA0NTQ1OTIyMDM0NiAqIHMpLFxuXHRcdHo6IHRvUmVsKC0uMDQ5NzQ3MjA3NTM1ODEyICogbCAtIC4wNDkyNjA5NjY2OTY2MTM4ICogbSArIDEuMTg4MDY1OTI0OTkyMzA0MiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9jb252ZXJ0WHl6NjVUb0l0cC5qc1xudmFyIHRvQWJzID0gKGMgPSAwKSA9PiBNYXRoLm1heChjICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0l0cCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0Y29uc3QgYWJzWCA9IHRvQWJzKHgpO1xuXHRjb25zdCBhYnNZID0gdG9BYnMoeSk7XG5cdGNvbnN0IGFic1ogPSB0b0Ficyh6KTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFFbmNvZGUoLjM1OTI4MzI1OTAxMjEyMTcgKiBhYnNYICsgLjY5NzYwNTExNDc3Nzk1MDIgKiBhYnNZIC0gLjAzNTg5MTU5MzIzMjAyODkgKiBhYnNaKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyUHFFbmNvZGUoLS4xOTIwODA4NDYzNzA0OTk1ICogYWJzWCArIDEuMTAwNDc2Nzk3MDM3NDMyMyAqIGFic1kgKyAuMDc1Mzc0ODY1ODUxOTExOCAqIGFic1opO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcUVuY29kZSguMDA3MDc5Nzg0NDYwNzQ3NyAqIGFic1ggKyAuMDc0ODM5NjY2MjE4NjM2NiAqIGFic1kgKyAuODQzMzI2NTQ1Mzg5ODc2NSAqIGFic1opO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJpdHBcIixcblx0XHRpOiAuNSAqIGwgKyAuNSAqIG0sXG5cdFx0dDogMS42MTM3Njk1MzEyNSAqIGwgLSAzLjMyMzQ4NjMyODEyNSAqIG0gKyAxLjcwOTcxNjc5Njg3NSAqIHMsXG5cdFx0cDogNC4zNzgxNzM4MjgxMjUgKiBsIC0gNC4yNDU2MDU0Njg3NSAqIG0gLSAuMTMyNTY4MzU5Mzc1ICogc1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTggPSB7XG5cdG1vZGU6IFwiaXRwXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJpXCIsXG5cdFx0XCJ0XCIsXG5cdFx0XCJwXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWljdGNwXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1pY3RjcFwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydEl0cFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRJdHBUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9JdHAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvSXRwKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0aTogWzAsIC41ODFdLFxuXHRcdHQ6IFstLjM2OSwgLjI3Ml0sXG5cdFx0cDogWy0uMTY0LCAuMzMxXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR0OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0cDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFh5ejY1VG9KYWIuanNcbnZhciBwJDEgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAkMSA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcUVuY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2biA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogdm4pIC8gKDEgKyBDMyAqIHZuKSwgcCQxKTtcbn07XG52YXIgYWJzID0gKHYgPSAwKSA9PiBNYXRoLm1heCh2ICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0phYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0eCA9IGFicyh4KTtcblx0eSA9IGFicyh5KTtcblx0eiA9IGFicyh6KTtcblx0bGV0IHhwID0gMS4xNSAqIHggLSAuMTUgKiB6O1xuXHRsZXQgeXAgPSAuNjYgKiB5ICsgLjM0ICogeDtcblx0bGV0IGwgPSBqYWJQcUVuY29kZSguNDE0Nzg5NzIgKiB4cCArIC41Nzk5OTkgKiB5cCArIC4wMTQ2NDggKiB6KTtcblx0bGV0IG0gPSBqYWJQcUVuY29kZSgtLjIwMTUxICogeHAgKyAxLjEyMDY0OSAqIHlwICsgLjA1MzEwMDggKiB6KTtcblx0bGV0IHMgPSBqYWJQcUVuY29kZSgtLjAxNjYwMDggKiB4cCArIC4yNjQ4ICogeXAgKyAuNjY4NDc5OSAqIHopO1xuXHRsZXQgaSA9IChsICsgbSkgLyAyO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0ajogLjQ0ICogaSAvICgxIC0gLjU2ICogaSkgLSBkMCQxLFxuXHRcdGE6IDMuNTI0ICogbCAtIDQuMDY2NzA4ICogbSArIC41NDI3MDggKiBzLFxuXHRcdGI6IC4xOTkwNzYgKiBsICsgMS4wOTY3OTkgKiBtIC0gMS4yOTU4NzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9YeXo2NS5qc1xudmFyIHAgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAgPSAxNjI5NTQ5OTUzMjgyMTU2NWUtMjc7XG52YXIgamFiUHFEZWNvZGUgPSAodikgPT4ge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRsZXQgdnAgPSBNYXRoLnBvdyh2LCAxIC8gcCk7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdygoQzEgLSB2cCkgLyAoQzMgKiB2cCAtIEMyKSwgMSAvIE0xKTtcbn07XG52YXIgcmVsID0gKHYpID0+IHYgLyAyMDM7XG52YXIgY29udmVydEphYlRvWHl6NjUgPSAoeyBqLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChqID09PSB2b2lkIDApIGogPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBpID0gKGogKyBkMCkgLyAoLjQ0ICsgLjU2ICogKGogKyBkMCkpO1xuXHRsZXQgbCA9IGphYlBxRGVjb2RlKGkgKyAuMTM4NjA1MDQgKiBhICsgLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgbSA9IGphYlBxRGVjb2RlKGkgLSAuMTM4NjA1MDQgKiBhIC0gLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgcyA9IGphYlBxRGVjb2RlKGkgLSAuMDk2MDE5MjQyICogYSAtIC44MTE4OTE5ICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IHJlbCgxLjY2MTM3MzAyNDY1MjE3NCAqIGwgLSAuOTE0NTIzMDgxMzA0MzQ4ICogbSArIC4yMzEzNjIwODE3MzkxMzA0NSAqIHMpLFxuXHRcdHk6IHJlbCgtLjMyNTA3NTg2MTE4NDQ1MzMgKiBsICsgMS41NzE4NDcwMjY3MzI1NDMgKiBtIC0gLjIxODI1MzgzNDUzMjI3OTI4ICogcyksXG5cdFx0ejogcmVsKC0uMDkwOTgyODExICogbCAtIC4zMTI3MjgyOSAqIG0gKyAxLjUyMjc2NjYgKiBzKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFJnYlRvSmFiLmpzXG52YXIgY29udmVydFJnYlRvSmFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9KYWIoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9SZ2IuanNcbnZhciBjb252ZXJ0SmFiVG9SZ2IgPSAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRKYWJUb1h5ejY1KGNvbG9yKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNyA9IHtcblx0bW9kZTogXCJqYWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tanphemJ6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemF6YnpcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0phYixcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9KYWJcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0SmFiVG9SZ2IsXG5cdFx0eHl6NjU6IGNvbnZlcnRKYWJUb1h5ejY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGo6IFswLCAuMjIyXSxcblx0XHRhOiBbLS4xMDksIC4xMjldLFxuXHRcdGI6IFstLjE4NSwgLjEzNF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamNoL2NvbnZlcnRKYWJUb0pjaC5qc1xudmFyIGNvbnZlcnRKYWJUb0pjaCA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImpjaFwiLFxuXHRcdGosXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEpjaFRvSmFiLmpzXG52YXIgY29udmVydEpjaFRvSmFiID0gKHsgaiwgYywgaCwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImphYlwiLFxuXHRcdGosXG5cdFx0YTogYyA/IGMgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSkgOiAwLFxuXHRcdGI6IGMgPyBjICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpIDogMFxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTYgPSB7XG5cdG1vZGU6IFwiamNoXCIsXG5cdHBhcnNlOiBbXCItLWp6Y3poelwiXSxcblx0c2VyaWFsaXplOiBcIi0tanpjemh6XCIsXG5cdHRvTW9kZToge1xuXHRcdGphYjogY29udmVydEpjaFRvSmFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRKYWJUb1JnYihjb252ZXJ0SmNoVG9KYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvSmNoKGNvbnZlcnRSZ2JUb0phYihjKSksXG5cdFx0amFiOiBjb252ZXJ0SmFiVG9KY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjFdLFxuXHRcdGM6IFswLCAuMTldLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ajogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29uc3RhbnRzLmpzXG52YXIgayA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1h5ejUwLmpzXG52YXIgZm4gPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlID8gTWF0aC5wb3codiwgMykgOiAoMTE2ICogdiAtIDE2KSAvIGs7XG52YXIgY29udmVydExhYlRvWHl6NTAgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogZm4oZngpICogRDUwLlgsXG5cdFx0eTogZm4oZnkpICogRDUwLlksXG5cdFx0ejogZm4oZnopICogRDUwLlpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29udmVydFh5ejUwVG9SZ2IuanNcbnZhciBjb252ZXJ0WHl6NTBUb1JnYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAzLjEzNDEzNTk1Njk5NTg3MDcgLSB5ICogMS42MTczODYzMzIxNjEyNTM4IC0gLjQ5MDY2MTk0NjAwODM1MzIgKiB6LFxuXHRcdGc6IHggKiAtLjk3ODc5NTUwMjkxMjA4OSArIHkgKiAxLjkxNjI1NDU2NzI1OTUyNCArIC4wMzM0NDI3MzExNjEzMTk0OSAqIHosXG5cdFx0YjogeCAqIC4wNzE5NTUzNzk4ODQxMTY3NyAtIHkgKiAuMjI4OTc2ODI2NDE1ODMyMiArIDEuNDA1Mzg2MDU4MzI0MTI1ICogelxuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWJUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMYWJUb1h5ejUwKGxhYikpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0UmdiVG9YeXo1MC5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejUwID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNDM2MDY1NzQyODI0ODExICogciArIC4zODUxNTE0Njg4MzM3OTEyICogZyArIC4xNDMwNzg0NTQ0MjI2NDE5NyAqIGIsXG5cdFx0eTogLjIyMjQ5MzE5MTc1NjIzNzAyICogciArIC43MTY4ODcwNTM4MjM4ODIzICogZyArIC4wNjA2MTk3OTA1MzYxNjUzNyAqIGIsXG5cdFx0ejogLjAxMzkyMzkwNDUwMDk0MzQ2NSAqIHIgKyAuMDk3MDgxMjg1NjY1NzQ2MzQgKiBnICsgLjcxNDA5OTM1ODQwMDUxNTUgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0WHl6NTBUb0xhYi5qc1xudmFyIGYgPSAodmFsdWUpID0+IHZhbHVlID4gZSA/IE1hdGguY2JydCh2YWx1ZSkgOiAoayAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTGFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmKHggLyBENTAuWCk7XG5cdGxldCBmMSA9IGYoeSAvIEQ1MC5ZKTtcblx0bGV0IGYyID0gZih6IC8gRDUwLlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiXCIsXG5cdFx0bDogMTE2ICogZjEgLSAxNixcblx0XHRhOiA1MDAgKiAoZjAgLSBmMSksXG5cdFx0YjogMjAwICogKGYxIC0gZjIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0UmdiVG9MYWIuanNcbnZhciBjb252ZXJ0UmdiVG9MYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NTBUb0xhYihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL3BhcnNlTGFiLmpzXG5mdW5jdGlvbiBwYXJzZUxhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGFiXCIgfTtcblx0Y29uc3QgWywgbCwgYSwgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlID09PSBUb2suSHVlIHx8IGEudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbC52YWx1ZSksIDEwMCk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIDEyNSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTUgPSB7XG5cdG1vZGU6IFwibGFiXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0TGFiVG9YeXo1MCxcblx0XHRyZ2I6IGNvbnZlcnRMYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRhOiBbLTEyNSwgMTI1XSxcblx0XHRiOiBbLTEyNSwgMTI1XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGFiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJsYWI2NVwiLFxuXHRwYXJzZTogW1wiLS1sYWItZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sYWItZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0TGFiNjVUb1h5ejY1LFxuXHRcdHJnYjogY29udmVydExhYjY1VG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9MYWI2NSxcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYjY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9wYXJzZUxjaC5qc1xuZnVuY3Rpb24gcGFyc2VMY2goY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwibGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImxjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0fVxuXHRpZiAoYy50eXBlICE9PSBUb2suTm9uZSkgcmVzLmMgPSBNYXRoLm1heCgwLCBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAqIDE1MCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTMgPSB7XG5cdG1vZGU6IFwibGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjogY29udmVydExjaFRvTGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb1JnYihjb252ZXJ0TGNoVG9MYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYihjKSksXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9MY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0cGFyc2U6IFtwYXJzZUxjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBsY2goJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYyAhPT0gdm9pZCAwID8gYy5jIDogXCJub25lXCJ9ICR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2g2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMiA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJsY2g2NVwiLFxuXHRwYXJzZTogW1wiLS1sY2gtZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2gtZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYjY1VG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYjY1KGMpLCBcImxjaDY1XCIpLFxuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwibGNoNjVcIilcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydEx1dlRvTGNodXYuanNcbnZhciBjb252ZXJ0THV2VG9MY2h1diA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKHUgPT09IHZvaWQgMCkgdSA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydCh1ICogdSArIHYgKiB2KTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxjaHV2XCIsXG5cdFx0bCxcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKHYsIHUpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaHV2L2NvbnZlcnRMY2h1dlRvTHV2LmpzXG52YXIgY29udmVydExjaHV2VG9MdXYgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1OiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0djogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0WHl6NTBUb0x1di5qc1xudmFyIHVfZm4kMSA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4kMSA9ICh4LCB5LCB6KSA9PiA5ICogeSAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHVuJDEgPSB1X2ZuJDEoRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4kMSA9IHZfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBsX2ZuID0gKHZhbHVlKSA9PiB2YWx1ZSA8PSBlID8gayAqIHZhbHVlIDogMTE2ICogTWF0aC5jYnJ0KHZhbHVlKSAtIDE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTHV2ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgbCA9IGxfZm4oeSAvIEQ1MC5ZKTtcblx0bGV0IHUgPSB1X2ZuJDEoeCwgeSwgeik7XG5cdGxldCB2ID0gdl9mbiQxKHgsIHksIHopO1xuXHRpZiAoIWlzRmluaXRlKHUpIHx8ICFpc0Zpbml0ZSh2KSkgbCA9IHUgPSB2ID0gMDtcblx0ZWxzZSB7XG5cdFx0dSA9IDEzICogbCAqICh1IC0gdW4kMSk7XG5cdFx0diA9IDEzICogbCAqICh2IC0gdm4kMSk7XG5cdH1cblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImx1dlwiLFxuXHRcdGwsXG5cdFx0dSxcblx0XHR2XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0THV2VG9YeXo1MC5qc1xudmFyIHVfZm4gPSAoeCwgeSwgeikgPT4gNCAqIHggLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB2X2ZuID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4gPSB1X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIHZuID0gdl9mbihENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBjb252ZXJ0THV2VG9YeXo1MCA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChsID09PSAwKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0ejogMFxuXHR9O1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCB1cCA9IHUgLyAoMTMgKiBsKSArIHVuO1xuXHRsZXQgdnAgPSB2IC8gKDEzICogbCkgKyB2bjtcblx0bGV0IHkgPSBENTAuWSAqIChsIDw9IDggPyBsIC8gayA6IE1hdGgucG93KChsICsgMTYpIC8gMTE2LCAzKSk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IHkgKiAoOSAqIHVwKSAvICg0ICogdnApLFxuXHRcdHksXG5cdFx0ejogeSAqICgxMiAtIDMgKiB1cCAtIDIwICogdnApIC8gKDQgKiB2cClcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xjaHV2ID0gKHJnYikgPT4gY29udmVydEx1dlRvTGNodXYoY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSkpO1xudmFyIGNvbnZlcnRMY2h1dlRvUmdiID0gKGxjaHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChjb252ZXJ0TGNodXZUb0x1dihsY2h1dikpKTtcbnZhciBkZWZpbml0aW9uJDExID0ge1xuXHRtb2RlOiBcImxjaHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdGx1djogY29udmVydExjaHV2VG9MdXYsXG5cdFx0cmdiOiBjb252ZXJ0TGNodXZUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvTGNodXYsXG5cdFx0bHV2OiBjb252ZXJ0THV2VG9MY2h1dlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1sY2h1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbGNodXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE3Ni45NTZdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJscmdiXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRMcmdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9McmdiIH0sXG5cdHBhcnNlOiBbXCJzcmdiLWxpbmVhclwiXSxcblx0c2VyaWFsaXplOiBcInNyZ2ItbGluZWFyXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ5ID0ge1xuXHRtb2RlOiBcImx1dlwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo1MDogY29udmVydEx1dlRvWHl6NTAsXG5cdFx0cmdiOiAobHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChsdXYpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0x1dixcblx0XHRyZ2I6IChyZ2IpID0+IGNvbnZlcnRYeXo1MFRvTHV2KGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJ1XCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWx1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbHV2XCIsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdHU6IFstODQuOTM2LCAxNzUuMDQyXSxcblx0XHR2OiBbLTEyNS44ODIsIDg3LjI0M11cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0dTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydExyZ2JUb09rbGFiLmpzXG52YXIgY29udmVydExyZ2JUb09rbGFiID0gKHsgciwgZywgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGguY2JydCguNDEyMjIxNDY5NDcwNzYzICogciArIC41MzYzMzI1MzcyNjE3MzQ4ICogZyArIC4wNTE0NDU5OTMyNjc1MDIyICogYik7XG5cdGxldCBNID0gTWF0aC5jYnJ0KC4yMTE5MDM0OTU4MTc4MjUyICogciArIC42ODA2OTk1NTA2NDUyMzQ0ICogZyArIC4xMDczOTY5NTM1MzY5NDA2ICogYik7XG5cdGxldCBTID0gTWF0aC5jYnJ0KC4wODgzMDI0NTkxOTAwNTY0ICogciArIC4yODE3MTg4MzkxMzYxMjE1ICogZyArIC42Mjk5Nzg3MDE2NzM4MjIyICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IC4yMTA0NTQyNjgzMDkzMTQgKiBMICsgLjc5MzYxNzc3NDcwMjMwNTQgKiBNIC0gLjAwNDA3MjA0MzAxMTYxOTMgKiBTLFxuXHRcdGE6IDEuOTc3OTk4NTMyNDMxMTY4NCAqIEwgLSAyLjQyODU5MjI0MjA0ODU4ICogTSArIC40NTA1OTM3MDk2MTc0MTEgKiBTLFxuXHRcdGI6IC4wMjU5MDQwNDI0NjU1NDc4ICogTCArIC43ODI3NzE3MTI0NTc1Mjk2ICogTSAtIC44MDg2NzU3NTQ5MjMwNzc0ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0UmdiVG9Pa2xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb09rbGFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb09rbGFiKGNvbnZlcnRSZ2JUb0xyZ2IocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRPa2xhYlRvTHJnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvTHJnYiA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IEwgPSBNYXRoLnBvdyhsICsgLjM5NjMzNzc3NzM3NjE3NDkgKiBhICsgLjIxNTgwMzc1NzMwOTkxMzYgKiBiLCAzKTtcblx0bGV0IE0gPSBNYXRoLnBvdyhsIC0gLjEwNTU2MTM0NTgxNTY1ODYgKiBhIC0gLjA2Mzg1NDE3MjgyNTgxMzMgKiBiLCAzKTtcblx0bGV0IFMgPSBNYXRoLnBvdyhsIC0gLjA4OTQ4NDE3NzUyOTgxMTkgKiBhIC0gMS4yOTE0ODU1NDgwMTk0MDkyICogYiwgMyk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogNC4wNzY3NDE2MzYwNzU5NTcgKiBMIC0gMy4zMDc3MTE1MzkyNTgwNjE2ICogTSArIC4yMzA5Njk5MDMxODIxMDQ0ICogUyxcblx0XHRnOiAtMS4yNjg0Mzc5NzMyODUwMzE3ICogTCArIDIuNjA5NzU3MzQ5Mjg3Njg4NyAqIE0gLSAuMzQxMzE5Mzc2MDAyNjU3MyAqIFMsXG5cdFx0YjogLS4wMDQxOTYwNzYxMzg2NzU2ICogTCAtIC43MDM0MTg2MTc5MzU5MzYyICogTSArIDEuNzA3NjE0Njk0MDc0NjExNyAqIFNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9SZ2IuanNcbnZhciBjb252ZXJ0T2tsYWJUb1JnYiA9IChjKSA9PiBjb252ZXJ0THJnYlRvUmdiKGNvbnZlcnRPa2xhYlRvTHJnYihjKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2hlbHBlcnMuanNcbmZ1bmN0aW9uIHRvZSh4KSB7XG5cdGNvbnN0IGtfMSA9IC4yMDY7XG5cdGNvbnN0IGtfMiA9IC4wMztcblx0Y29uc3Qga18zID0gMS4yMDYgLyAxLjAzO1xuXHRyZXR1cm4gLjUgKiAoa18zICogeCAtIGtfMSArIE1hdGguc3FydCgoa18zICogeCAtIGtfMSkgKiAoa18zICogeCAtIGtfMSkgKyA0ICoga18yICoga18zICogeCkpO1xufVxuZnVuY3Rpb24gdG9lX2ludih4KSB7XG5cdHJldHVybiAoeCAqIHggKyAuMjA2ICogeCkgLyAoMS4yMDYgLyAxLjAzICogKHggKyAuMDMpKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYikge1xuXHRsZXQgazAsIGsxLCBrMiwgazMsIGs0LCB3bCwgd20sIHdzO1xuXHRpZiAoLTEuODgxNzAzMjggKiBhIC0gLjgwOTM2NDkzICogYiA+IDEpIHtcblx0XHRrMCA9IDEuMTkwODYyNzc7XG5cdFx0azEgPSAxLjc2NTc2NzI4O1xuXHRcdGsyID0gLjU5NjYyNjQxO1xuXHRcdGszID0gLjc1NTE1MTk3O1xuXHRcdGs0ID0gLjU2NzcxMjQ1O1xuXHRcdHdsID0gNC4wNzY3NDE2NjIxO1xuXHRcdHdtID0gLTMuMzA3NzExNTkxMztcblx0XHR3cyA9IC4yMzA5Njk5MjkyO1xuXHR9IGVsc2UgaWYgKDEuODE0NDQxMDQgKiBhIC0gMS4xOTQ0NTI3NiAqIGIgPiAxKSB7XG5cdFx0azAgPSAuNzM5NTY1MTU7XG5cdFx0azEgPSAtLjQ1OTU0NDA0O1xuXHRcdGsyID0gLjA4Mjg1NDI3O1xuXHRcdGszID0gLjEyNTQxMDc7XG5cdFx0azQgPSAuMTQ1MDMyMDQ7XG5cdFx0d2wgPSAtMS4yNjg0MzgwMDQ2O1xuXHRcdHdtID0gMi42MDk3NTc0MDExO1xuXHRcdHdzID0gLS4zNDEzMTkzOTY1O1xuXHR9IGVsc2Uge1xuXHRcdGswID0gMS4zNTczMzY1Mjtcblx0XHRrMSA9IC0uMDA5MTU3OTk7XG5cdFx0azIgPSAtMS4xNTEzMDIxO1xuXHRcdGszID0gLS41MDU1OTYwNjtcblx0XHRrNCA9IC4wMDY5MjE2Nztcblx0XHR3bCA9IC0uMDA0MTk2MDg2Mztcblx0XHR3bSA9IC0uNzAzNDE4NjE0Nztcblx0XHR3cyA9IDEuNzA3NjE0NzAxO1xuXHR9XG5cdGxldCBTID0gazAgKyBrMSAqIGEgKyBrMiAqIGIgKyBrMyAqIGEgKiBhICsgazQgKiBhICogYjtcblx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdGxldCBrX3MgPSAtLjA4OTQ4NDE3NzUgKiBhIC0gMS4yOTE0ODU1NDggKiBiO1xuXHR7XG5cdFx0bGV0IGxfID0gMSArIFMgKiBrX2w7XG5cdFx0bGV0IG1fID0gMSArIFMgKiBrX207XG5cdFx0bGV0IHNfID0gMSArIFMgKiBrX3M7XG5cdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0bGV0IHMgPSBzXyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMgPSAzICoga19sICogbF8gKiBsXztcblx0XHRsZXQgbV9kUyA9IDMgKiBrX20gKiBtXyAqIG1fO1xuXHRcdGxldCBzX2RTID0gMyAqIGtfcyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMyID0gNiAqIGtfbCAqIGtfbCAqIGxfO1xuXHRcdGxldCBtX2RTMiA9IDYgKiBrX20gKiBrX20gKiBtXztcblx0XHRsZXQgc19kUzIgPSA2ICoga19zICoga19zICogc187XG5cdFx0bGV0IGYgPSB3bCAqIGwgKyB3bSAqIG0gKyB3cyAqIHM7XG5cdFx0bGV0IGYxID0gd2wgKiBsX2RTICsgd20gKiBtX2RTICsgd3MgKiBzX2RTO1xuXHRcdGxldCBmMiA9IHdsICogbF9kUzIgKyB3bSAqIG1fZFMyICsgd3MgKiBzX2RTMjtcblx0XHRTID0gUyAtIGYgKiBmMSAvIChmMSAqIGYxIC0gLjUgKiBmICogZjIpO1xuXHR9XG5cdHJldHVybiBTO1xufVxuZnVuY3Rpb24gZmluZF9jdXNwKGEsIGIpIHtcblx0bGV0IFNfY3VzcCA9IGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYik7XG5cdGxldCByZ2IgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IDEsXG5cdFx0YTogU19jdXNwICogYSxcblx0XHRiOiBTX2N1c3AgKiBiXG5cdH0pO1xuXHRsZXQgTF9jdXNwID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2IuciwgcmdiLmcsIHJnYi5iKSk7XG5cdHJldHVybiBbTF9jdXNwLCBMX2N1c3AgKiBTX2N1c3BdO1xufVxuZnVuY3Rpb24gZmluZF9nYW11dF9pbnRlcnNlY3Rpb24oYSwgYiwgTDEsIEMxLCBMMCwgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGEsIGIpO1xuXHRsZXQgdDtcblx0aWYgKChMMSAtIEwwKSAqIGN1c3BbMV0gLSAoY3VzcFswXSAtIEwwKSAqIEMxIDw9IDApIHQgPSBjdXNwWzFdICogTDAgLyAoQzEgKiBjdXNwWzBdICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdGVsc2Uge1xuXHRcdHQgPSBjdXNwWzFdICogKEwwIC0gMSkgLyAoQzEgKiAoY3VzcFswXSAtIDEpICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdFx0e1xuXHRcdFx0bGV0IGRMID0gTDEgLSBMMDtcblx0XHRcdGxldCBkQyA9IEMxO1xuXHRcdFx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0XHRcdGxldCBrX20gPSAtLjEwNTU2MTM0NTggKiBhIC0gLjA2Mzg1NDE3MjggKiBiO1xuXHRcdFx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdFx0XHRsZXQgbF9kdCA9IGRMICsgZEMgKiBrX2w7XG5cdFx0XHRsZXQgbV9kdCA9IGRMICsgZEMgKiBrX207XG5cdFx0XHRsZXQgc19kdCA9IGRMICsgZEMgKiBrX3M7XG5cdFx0XHR7XG5cdFx0XHRcdGxldCBMID0gTDAgKiAoMSAtIHQpICsgdCAqIEwxO1xuXHRcdFx0XHRsZXQgQyA9IHQgKiBDMTtcblx0XHRcdFx0bGV0IGxfID0gTCArIEMgKiBrX2w7XG5cdFx0XHRcdGxldCBtXyA9IEwgKyBDICoga19tO1xuXHRcdFx0XHRsZXQgc18gPSBMICsgQyAqIGtfcztcblx0XHRcdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0XHRcdGxldCBtID0gbV8gKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdCA9IDMgKiBsX2R0ICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG1kdCA9IDMgKiBtX2R0ICogbV8gKiBtXztcblx0XHRcdFx0bGV0IHNkdCA9IDMgKiBzX2R0ICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdDIgPSA2ICogbF9kdCAqIGxfZHQgKiBsXztcblx0XHRcdFx0bGV0IG1kdDIgPSA2ICogbV9kdCAqIG1fZHQgKiBtXztcblx0XHRcdFx0bGV0IHNkdDIgPSA2ICogc19kdCAqIHNfZHQgKiBzXztcblx0XHRcdFx0bGV0IHIgPSA0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIC4yMzA5Njk5MjkyICogcyAtIDE7XG5cdFx0XHRcdGxldCByMSA9IDQuMDc2NzQxNjYyMSAqIGxkdCAtIDMuMzA3NzExNTkxMyAqIG1kdCArIC4yMzA5Njk5MjkyICogc2R0O1xuXHRcdFx0XHRsZXQgcjIgPSA0LjA3Njc0MTY2MjEgKiBsZHQyIC0gMy4zMDc3MTE1OTEzICogbWR0MiArIC4yMzA5Njk5MjkyICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfciA9IHIxIC8gKHIxICogcjEgLSAuNSAqIHIgKiByMik7XG5cdFx0XHRcdGxldCB0X3IgPSAtciAqIHVfcjtcblx0XHRcdFx0bGV0IGcgPSAtMS4yNjg0MzgwMDQ2ICogbCArIDIuNjA5NzU3NDAxMSAqIG0gLSAuMzQxMzE5Mzk2NSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgZzEgPSAtMS4yNjg0MzgwMDQ2ICogbGR0ICsgMi42MDk3NTc0MDExICogbWR0IC0gLjM0MTMxOTM5NjUgKiBzZHQ7XG5cdFx0XHRcdGxldCBnMiA9IC0xLjI2ODQzODAwNDYgKiBsZHQyICsgMi42MDk3NTc0MDExICogbWR0MiAtIC4zNDEzMTkzOTY1ICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfZyA9IGcxIC8gKGcxICogZzEgLSAuNSAqIGcgKiBnMik7XG5cdFx0XHRcdGxldCB0X2cgPSAtZyAqIHVfZztcblx0XHRcdFx0bGV0IGIgPSAtLjAwNDE5NjA4NjMgKiBsIC0gLjcwMzQxODYxNDcgKiBtICsgMS43MDc2MTQ3MDEgKiBzIC0gMTtcblx0XHRcdFx0bGV0IGIxID0gLS4wMDQxOTYwODYzICogbGR0IC0gLjcwMzQxODYxNDcgKiBtZHQgKyAxLjcwNzYxNDcwMSAqIHNkdDtcblx0XHRcdFx0bGV0IGIyID0gLS4wMDQxOTYwODYzICogbGR0MiAtIC43MDM0MTg2MTQ3ICogbWR0MiArIDEuNzA3NjE0NzAxICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfYiA9IGIxIC8gKGIxICogYjEgLSAuNSAqIGIgKiBiMik7XG5cdFx0XHRcdGxldCB0X2IgPSAtYiAqIHVfYjtcblx0XHRcdFx0dF9yID0gdV9yID49IDAgPyB0X3IgOiAxZTY7XG5cdFx0XHRcdHRfZyA9IHVfZyA+PSAwID8gdF9nIDogMWU2O1xuXHRcdFx0XHR0X2IgPSB1X2IgPj0gMCA/IHRfYiA6IDFlNjtcblx0XHRcdFx0dCArPSBNYXRoLm1pbih0X3IsIE1hdGgubWluKHRfZywgdF9iKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0O1xufVxuZnVuY3Rpb24gZ2V0X1NUX21heChhXywgYl8sIGN1c3AgPSBudWxsKSB7XG5cdGlmICghY3VzcCkgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgTCA9IGN1c3BbMF07XG5cdGxldCBDID0gY3VzcFsxXTtcblx0cmV0dXJuIFtDIC8gTCwgQyAvICgxIC0gTCldO1xufVxuZnVuY3Rpb24gZ2V0X0NzKEwsIGFfLCBiXykge1xuXHRsZXQgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgQ19tYXggPSBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhXywgYl8sIEwsIDEsIEwsIGN1c3ApO1xuXHRsZXQgU1RfbWF4ID0gZ2V0X1NUX21heChhXywgYl8sIGN1c3ApO1xuXHRsZXQgU19taWQgPSAuMTE1MTY5OTMgKyAxIC8gKDcuNDQ3Nzg5NyArIDQuMTU5MDEyNCAqIGJfICsgYV8gKiAoLTIuMTk1NTczNDcgKyAxLjc1MTk4NDAxICogYl8gKyBhXyAqICgtMi4xMzcwNDk0OCAtIDEwLjAyMzAxMDQzICogYl8gKyBhXyAqICgtNC4yNDg5NDU2MSArIDUuMzg3NzA4MTkgKiBiXyArIDQuNjk4OTEwMTMgKiBhXykpKSk7XG5cdGxldCBUX21pZCA9IC4xMTIzOTY0MiArIDEgLyAoMS42MTMyMDMyIC0gLjY4MTI0Mzc5ICogYl8gKyBhXyAqICguNDAzNzA2MTIgKyAuOTAxNDgxMjMgKiBiXyArIGFfICogKC0uMjcwODc5NDMgKyAuNjEyMjM5OSAqIGJfICsgYV8gKiAoLjAwMjk5MjE1IC0gLjQ1Mzk5NTY4ICogYl8gLSAuMTQ2NjE4NzIgKiBhXykpKSk7XG5cdGxldCBrID0gQ19tYXggLyBNYXRoLm1pbihMICogU1RfbWF4WzBdLCAoMSAtIEwpICogU1RfbWF4WzFdKTtcblx0bGV0IENfYSA9IEwgKiBTX21pZDtcblx0bGV0IENfYiA9ICgxIC0gTCkgKiBUX21pZDtcblx0bGV0IENfbWlkID0gLjkgKiBrICogTWF0aC5zcXJ0KE1hdGguc3FydCgxIC8gKDEgLyAoQ19hICogQ19hICogQ19hICogQ19hKSArIDEgLyAoQ19iICogQ19iICogQ19iICogQ19iKSkpKTtcblx0Q19hID0gTCAqIC40O1xuXHRDX2IgPSAoMSAtIEwpICogLjg7XG5cdHJldHVybiBbXG5cdFx0TWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IpKSksXG5cdFx0Q19taWQsXG5cdFx0Q19tYXhcblx0XTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvY29udmVydE9rbGFiVG9Pa2hzbC5qc1xuZnVuY3Rpb24gY29udmVydE9rbGFiVG9Pa2hzbChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGNvbnN0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRjb25zdCBiID0gbGFiLmIgIT09IHZvaWQgMCA/IGxhYi5iIDogMDtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc2xcIixcblx0XHRsOiB0b2UobClcblx0fTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRpZiAoIWMpIHtcblx0XHRyZXQucyA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhsLCBhIC8gYywgYiAvIGMpO1xuXHRsZXQgcztcblx0aWYgKGMgPCBDX21pZCkge1xuXHRcdGxldCBrXzAgPSAwO1xuXHRcdGxldCBrXzEgPSAuOCAqIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHRcdHMgPSAoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSAqIC44O1xuXHR9IGVsc2Uge1xuXHRcdGxldCBrXzAgPSBDX21pZDtcblx0XHRsZXQga18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0bGV0IGtfMiA9IDEgLSBrXzEgLyAoQ19tYXggLSBDX21pZCk7XG5cdFx0cyA9IC44ICsgLjIgKiAoKGMgLSBrXzApIC8gKGtfMSArIGtfMiAqIChjIC0ga18wKSkpO1xuXHR9XG5cdGlmIChzKSB7XG5cdFx0cmV0LnMgPSBzO1xuXHRcdHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0fVxuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2toc2xUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc2xUb09rbGFiKGhzbCkge1xuXHRsZXQgaCA9IGhzbC5oICE9PSB2b2lkIDAgPyBoc2wuaCA6IDA7XG5cdGxldCBzID0gaHNsLnMgIT09IHZvaWQgMCA/IGhzbC5zIDogMDtcblx0bGV0IGwgPSBoc2wubCAhPT0gdm9pZCAwID8gaHNsLmwgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IHRvZV9pbnYobClcblx0fTtcblx0aWYgKGhzbC5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBoc2wuYWxwaGE7XG5cdGlmICghcyB8fCBsID09PSAxKSB7XG5cdFx0cmV0LmEgPSByZXQuYiA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGxldCBiXyA9IE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IFtDXzAsIENfbWlkLCBDX21heF0gPSBnZXRfQ3MocmV0LmwsIGFfLCBiXyk7XG5cdGxldCB0LCBrXzAsIGtfMSwga18yO1xuXHRpZiAocyA8IC44KSB7XG5cdFx0dCA9IDEuMjUgKiBzO1xuXHRcdGtfMCA9IDA7XG5cdFx0a18xID0gLjggKiBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHR9IGVsc2Uge1xuXHRcdHQgPSA1ICogKHMgLSAuOCk7XG5cdFx0a18wID0gQ19taWQ7XG5cdFx0a18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0fVxuXHRsZXQgQyA9IGtfMCArIHQgKiBrXzEgLyAoMSAtIGtfMiAqIHQpO1xuXHRyZXQuYSA9IEMgKiBhXztcblx0cmV0LmIgPSBDICogYl87XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL21vZGVPa2hzbC5qc1xudmFyIG1vZGVPa2hzbCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyMSxcblx0bW9kZTogXCJva2hzbFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1va2hzbFwiXSxcblx0c2VyaWFsaXplOiBcIi0tb2toc2xcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9rbGFiVG9Pa2hzbCxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb09raHNsKGNvbnZlcnRSZ2JUb09rbGFiKGMpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9raHNsVG9Pa2xhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb1JnYihjb252ZXJ0T2toc2xUb09rbGFiKGMpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2tsYWJUb09raHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHN2KGxhYikge1xuXHRsZXQgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGxldCBhID0gbGFiLmEgIT09IHZvaWQgMCA/IGxhYi5hIDogMDtcblx0bGV0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IGFfID0gYyA/IGEgLyBjIDogMTtcblx0bGV0IGJfID0gYyA/IGIgLyBjIDogMTtcblx0bGV0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGxldCBTXzAgPSAuNTtcblx0bGV0IGsgPSAxIC0gU18wIC8gU19tYXg7XG5cdGxldCB0ID0gVCAvIChjICsgbCAqIFQpO1xuXHRsZXQgTF92ID0gdCAqIGw7XG5cdGxldCBDX3YgPSB0ICogYztcblx0bGV0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGxldCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0bGV0IHJnYl9zY2FsZSA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogTF92dCxcblx0XHRhOiBhXyAqIENfdnQsXG5cdFx0YjogYl8gKiBDX3Z0XG5cdH0pO1xuXHRsZXQgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRsID0gbCAvIHNjYWxlX0w7XG5cdGMgPSBjIC8gc2NhbGVfTCAqIHRvZShsKSAvIGw7XG5cdGwgPSB0b2UobCk7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9raHN2XCIsXG5cdFx0czogYyA/IChTXzAgKyBUKSAqIENfdiAvIChUICogU18wICsgVCAqIGsgKiBDX3YpIDogMCxcblx0XHR2OiBsID8gbCAvIExfdiA6IDBcblx0fTtcblx0aWYgKHJldC5zKSByZXQuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChsYWIuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gbGFiLmFscGhhO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2toc3ZUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc3ZUb09rbGFiKGhzdikge1xuXHRjb25zdCByZXQgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRpZiAoaHN2LmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzdi5hbHBoYTtcblx0Y29uc3QgaCA9IGhzdi5oICE9PSB2b2lkIDAgPyBoc3YuaCA6IDA7XG5cdGNvbnN0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRjb25zdCB2ID0gaHN2LnYgIT09IHZvaWQgMCA/IGhzdi52IDogMDtcblx0Y29uc3QgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRjb25zdCBbU19tYXgsIFRdID0gZ2V0X1NUX21heChhXywgYl8pO1xuXHRjb25zdCBTXzAgPSAuNTtcblx0Y29uc3QgayA9IDEgLSBTXzAgLyBTX21heDtcblx0Y29uc3QgTF92ID0gMSAtIHMgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IENfdiA9IHMgKiBUICogU18wIC8gKFNfMCArIFQgLSBUICogayAqIHMpO1xuXHRjb25zdCBMX3Z0ID0gdG9lX2ludihMX3YpO1xuXHRjb25zdCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0Y29uc3QgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGNvbnN0IHNjYWxlX0wgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYl9zY2FsZS5yLCByZ2Jfc2NhbGUuZywgcmdiX3NjYWxlLmIsIDApKTtcblx0Y29uc3QgTF9uZXcgPSB0b2VfaW52KHYgKiBMX3YpO1xuXHRjb25zdCBDID0gQ192ICogTF9uZXcgLyBMX3Y7XG5cdHJldC5sID0gTF9uZXcgKiBzY2FsZV9MO1xuXHRyZXQuYSA9IEMgKiBhXyAqIHNjYWxlX0w7XG5cdHJldC5iID0gQyAqIGJfICogc2NhbGVfTDtcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc3YvbW9kZU9raHN2LmpzXG52YXIgbW9kZU9raHN2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDIwLFxuXHRtb2RlOiBcIm9raHN2XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzdlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHN2LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc3YoY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc3ZUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzdlRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL3BhcnNlT2tsYWIuanNcbmZ1bmN0aW9uIHBhcnNlT2tsYWIoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwib2tsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHRpZiAoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmEgPSBhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhLnZhbHVlIDogYS52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDggPSB7XG5cdC4uLmRlZmluaXRpb24kMTUsXG5cdG1vZGU6IFwib2tsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHJnYjogY29udmVydE9rbGFiVG9McmdiLFxuXHRcdHJnYjogY29udmVydE9rbGFiVG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0THJnYlRvT2tsYWIsXG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9Pa2xhYlxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YTogWy0uNCwgLjRdLFxuXHRcdGI6IFstLjQsIC40XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlT2tsYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgb2tsYWIoJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYSAhPT0gdm9pZCAwID8gYy5hIDogXCJub25lXCJ9ICR7Yy5iICE9PSB2b2lkIDAgPyBjLmIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvcGFyc2VPa2xjaC5qc1xuZnVuY3Rpb24gcGFyc2VPa2xjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xjaFwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogLjQgLyAxMDApO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNyA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJva2xjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjb252ZXJ0UmdiVG9Pa2xhYihjKSwgXCJva2xjaFwiKSxcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjLCBcIm9rbGNoXCIpXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YzogWzAsIC40XSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0UDNUb1h5ejY1LmpzXG52YXIgY29udmVydFAzVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQ4NjU3MDk0ODY0ODIxNiAqIHIgKyAuMjY1NjY3NjkzMTY5MDkzICogZyArIC4xOTgyMTcyODUyMzQzNjI1ICogYixcblx0XHR5OiAuMjI4OTc0NTY0MDY5NzQ4NyAqIHIgKyAuNjkxNzM4NTIxODM2NTA2MiAqIGcgKyAuMDc5Mjg2OTE0MDkzNzQ1ICogYixcblx0XHR6OiAwICogciArIC4wNDUxMTMzODE4NTg5MDI2ICogZyArIDEuMDQzOTQ0MzY4OTAwOTc2ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0WHl6NjVUb1AzLmpzXG52YXIgY29udmVydFh5ejY1VG9QMyA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAyLjQ5MzQ5NjkxMTk0MTQyNjMgLSB5ICogLjkzMTM4MzYxNzkxOTEyNDIgLSAuNDAyNzEwNzg0NDUwNzE3ICogeixcblx0XHRnOiB4ICogLS44Mjk0ODg5Njk1NjE1NzQ5ICsgeSAqIDEuNzYyNjY0MDYwMzE4MzQ2NSArIC4wMjM2MjQ2ODU4NDE5NDM2ICogeixcblx0XHRiOiB4ICogLjAzNTg0NTgzMDI0Mzc4NDUgLSB5ICogLjA3NjE3MjM4OTI2ODA0MTggKyAuOTU2ODg0NTI0MDA3Njg3MSAqIHpcblx0fSwgXCJwM1wiKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcDMvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJwM1wiLFxuXHRwYXJzZTogW1wiZGlzcGxheS1wM1wiXSxcblx0c2VyaWFsaXplOiBcImRpc3BsYXktcDNcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9QMyhjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1AzXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UDNUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRQM1RvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFh5ejUwVG9Qcm9waG90by5qc1xudmFyIGdhbW1hJDEgPSAodikgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPj0gMSAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMSAvIDEuOCk7XG5cdHJldHVybiAxNiAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo1MFRvUHJvcGhvdG8gPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJwcm9waG90b1wiLFxuXHRcdHI6IGdhbW1hJDEoeCAqIDEuMzQ1Nzg2ODgxNjQ3MTU4NSAtIHkgKiAuMjU1NTcyMDg3Mzc5Nzk0NiAtIC4wNTExMDE4NjQ5NzU1NDUzICogeiksXG5cdFx0ZzogZ2FtbWEkMSh4ICogLS41NDQ2MzA3MDUxMjQ5MDE5ICsgeSAqIDEuNTA4MjQ3NzQyODQ1MTQ2NiArIC4wMjA1Mjc0NDc0MzY0MjE0ICogeiksXG5cdFx0YjogZ2FtbWEkMSh4ICogMCArIHkgKiAwICsgMS4yMTE5Njc1NDU2Mzg5NDUyICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFByb3Bob3RvVG9YeXo1MC5qc1xudmFyIGxpbmVhcml6ZSQxID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxNiAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMS44KTtcblx0cmV0dXJuIHYgLyAxNjtcbn07XG52YXIgY29udmVydFByb3Bob3RvVG9YeXo1MCA9IChwcm9waG90bykgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLnIpO1xuXHRsZXQgZyA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNzk3NzY2NjQ0OTAwNjQyMyAqIHIgKyAuMTM1MTgxMjk3NDAwNTMzMSAqIGcgKyAuMDMxMzQ3NzM0MTI4MzkyMiAqIGIsXG5cdFx0eTogLjI4ODA3NDgyODgxOTQwMTMgKiByICsgLjcxMTgzNTIzNDI0MTg3MzEgKiBnICsgODk5MzY5Mzg3MjU2ZS0xNiAqIGIsXG5cdFx0ejogMCAqIHIgKyAwICogZyArIC44MjUxMDQ2MDI1MTA0NjAyICogYlxuXHR9O1xuXHRpZiAocHJvcGhvdG8uYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gcHJvcGhvdG8uYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ1ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdHBhcnNlOiBbXCJwcm9waG90by1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJwcm9waG90by1yZ2JcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9Qcm9waG90byxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejUwVG9Qcm9waG90byhjb252ZXJ0UmdiVG9YeXo1MChjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwKGNvbG9yKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0WHl6NjVUb1JlYzIwMjAuanNcbnZhciDOsSQxID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiQxID0gLjAxODA1Mzk2ODUxMDgwNztcbnZhciBnYW1tYSA9ICh2KSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID4gzrIkMSkgcmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiAozrEkMSAqIE1hdGgucG93KGFicywgLjQ1KSAtIC4wOTkyOTY4MjY4MDk0NDAwOCk7XG5cdHJldHVybiA0LjUgKiB2O1xufTtcbnZhciBjb252ZXJ0WHl6NjVUb1JlYzIwMjAgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZWMyMDIwXCIsXG5cdFx0cjogZ2FtbWEoeCAqIDEuNzE2NjUxMTg3OTcxMjY4MyAtIHkgKiAuMzU1NjcwNzgzNzc2MzkyNSAtIC4yNTMzNjYyODEzNzM2NTk5ICogeiksXG5cdFx0ZzogZ2FtbWEoeCAqIC0uNjY2Njg0MzUxODMyNDg5MyArIHkgKiAxLjYxNjQ4MTIzNjYzNDkzOTUgKyAuMDE1NzY4NTQ1ODEzOTExMSAqIHopLFxuXHRcdGI6IGdhbW1hKHggKiAuMDE3NjM5ODU3NDQ1MzEwOCAtIHkgKiAuMDQyNzcwNjEzMjU3ODA4NSArIC45NDIxMDMxMjEyMzU0NzM5ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0UmVjMjAyMFRvWHl6NjUuanNcbnZhciDOsSA9IDEuMDk5Mjk2ODI2ODA5NDQ7XG52YXIgzrIgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGxpbmVhcml6ZSA9ICh2ID0gMCkgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPCDOsiAqIDQuNSkgcmV0dXJuIHYgLyA0LjU7XG5cdHJldHVybiAoTWF0aC5zaWduKHYpIHx8IDEpICogTWF0aC5wb3coKGFicyArIM6xIC0gMSkgLyDOsSwgMSAvIC40NSk7XG59O1xudmFyIGNvbnZlcnRSZWMyMDIwVG9YeXo2NSA9IChyZWMyMDIwKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplKHJlYzIwMjAucik7XG5cdGxldCBnID0gbGluZWFyaXplKHJlYzIwMjAuZyk7XG5cdGxldCBiID0gbGluZWFyaXplKHJlYzIwMjAuYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC42MzY5NTgwNDgzMDEyOTExICogciArIC4xNDQ2MTY5MDM1ODYyMDgzICogZyArIC4xNjg4ODA5NzUxNjQxNzIxICogYixcblx0XHR5OiAuMjYyNzAwMjEyMDExMjY3ICogciArIC42Nzc5OTgwNzE1MTg4NzA4ICogZyArIC4wNTkzMDE3MTY0Njk4NjIgKiBiLFxuXHRcdHo6IDAgKiByICsgLjAyODA3MjY5MzA0OTA4NzQgKiBnICsgMS4wNjA5ODUwNTc3MTA3OTA5ICogYlxuXHR9O1xuXHRpZiAocmVjMjAyMC5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSByZWMyMDIwLmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInJlYzIwMjBcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9SZWMyMDIwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFJlYzIwMjBUb1h5ejY1LFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UmVjMjAyMFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRwYXJzZTogW1wicmVjMjAyMFwiXSxcblx0c2VyaWFsaXplOiBcInJlYzIwMjBcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnN0YW50cy5qc1xudmFyIGJpYXMgPSAuMDAzNzkzMDczMjU1Mjc1NDQ5MztcbnZhciBiaWFzX2NicnQgPSBNYXRoLmNicnQoYmlhcyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0UmdiVG9YeWIuanNcbnZhciB0cmFuc2ZlciQxID0gKHYpID0+IE1hdGguY2JydCh2KSAtIGJpYXNfY2JydDtcbnZhciBjb252ZXJ0UmdiVG9YeWIgPSAoY29sb3IpID0+IHtcblx0Y29uc3QgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihjb2xvcik7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlciQxKC4zICogciArIC42MjIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyJDEoLjIzICogciArIC42OTIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcyA9IHRyYW5zZmVyJDEoLjI0MzQyMjY4OTI0NTQ3ODIgKiByICsgLjIwNDc2NzQ0NDI0NDk2ODIgKiBnICsgLjU1MTgwOTg2NjUwOTU1MzUgKiBiICsgYmlhcyk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5YlwiLFxuXHRcdHg6IChsIC0gbSkgLyAyLFxuXHRcdHk6IChsICsgbSkgLyAyLFxuXHRcdGI6IHMgLSAobCArIG0pIC8gMlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29udmVydFh5YlRvUmdiLmpzXG52YXIgdHJhbnNmZXIgPSAodikgPT4gTWF0aC5wb3codiArIGJpYXNfY2JydCwgMyk7XG52YXIgY29udmVydFh5YlRvUmdiID0gKHsgeCwgeSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRjb25zdCBsID0gdHJhbnNmZXIoeCArIHkpIC0gYmlhcztcblx0Y29uc3QgbSA9IHRyYW5zZmVyKHkgLSB4KSAtIGJpYXM7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlcihiICsgeSkgLSBiaWFzO1xuXHRjb25zdCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiAxMS4wMzE1NjY5MDQ2Mzk4NjEgKiBsIC0gOS44NjY5NDM5MDgxMzE1NjIgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRnOiAtMy4yNTQxNDczODEwNzQ0MjM3ICogbCArIDQuNDE4NzcwMzc3NTgyNzIzICogbSAtIC4xNjQ2MjI5OTY1MDgyOTkzNCAqIHMsXG5cdFx0YjogLTMuNjU4ODUxMjg2NzEzNjgxNSAqIGwgKyAyLjcxMjkyMzA0NTkzNjA5MjIgKiBtICsgMS45NDU5MjgyNDA3Nzc1ODk1ICogc1xuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDMgPSB7XG5cdG1vZGU6IFwieHliXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJ4XCIsXG5cdFx0XCJ5XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLXh5YlwiXSxcblx0c2VyaWFsaXplOiBcIi0teHliXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRYeWJUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1h5YiB9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbLS4wMTU0LCAuMDI4MV0sXG5cdFx0eTogWzAsIC44NDUzXSxcblx0XHRiOiBbLS4yNzc4LCAuMzg4XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyID0ge1xuXHRtb2RlOiBcInh5ejUwXCIsXG5cdHBhcnNlOiBbXCJ4eXotZDUwXCJdLFxuXHRzZXJpYWxpemU6IFwieHl6LWQ1MFwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo1MFRvUmdiLFxuXHRcdGxhYjogY29udmVydFh5ejUwVG9MYWJcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb1h5ejUwLFxuXHRcdGxhYjogY29udmVydExhYlRvWHl6NTBcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NjRdLFxuXHRcdHk6IFswLCAuOTk5XSxcblx0XHR6OiBbMCwgLjgyNV1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejY1VG9YeXo1MC5qc1xudmFyIGNvbnZlcnRYeXo2NVRvWHl6NTAgPSAoeHl6NjUpID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejY1O1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAxLjA0NzkyOTgyMDg0MDU0ODggKiB4ICsgLjAyMjk0Njc5MzM0MTAxOTEgKiB5IC0gLjA1MDE5MjIyOTU0MzEzNTYgKiB6LFxuXHRcdHk6IC4wMjk2Mjc4MTU2ODgxNTkzICogeCArIC45OTA0MzQ0ODQ1NzMyNDkgKiB5IC0gLjAxNzA3MzgyNTAyOTM4NTEgKiB6LFxuXHRcdHo6IC0uMDA5MjQzMDU4MTUyNTkxMiAqIHggKyAuMDE1MDU1MTQ0ODk2NTc3OSAqIHkgKyAuNzUxODc0Mjg5OTU4MDAwOCAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejUwVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRYeXo1MFRvWHl6NjUgPSAoeHl6NTApID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejUwO1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuOTU1NDczNDUyNzA0MjE4MiAqIHggLSAuMDIzMDk4NTM2ODc0MjYxNCAqIHkgKyAuMDYzMjU5MzA4NjYxMDIxNyAqIHosXG5cdFx0eTogLS4wMjgzNjk3MDY5NjMyMDgxICogeCArIDEuMDA5OTk1NDU4MDA1ODIyNiAqIHkgKyAuMDIxMDQxMzk4OTY2OTQzICogeixcblx0XHR6OiAuMDEyMzE0MDAxNjg4MzE5OSAqIHggLSAuMDIwNTA3Njk2NDMzNDc3OSAqIHkgKyAxLjMzMDM2NTkzNjYwODA3NTMgKiB6XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEgPSB7XG5cdG1vZGU6IFwieHl6NjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0WHl6NjVUb1JnYixcblx0XHR4eXo1MDogY29udmVydFh5ejY1VG9YeXo1MFxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NjUsXG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NV0sXG5cdFx0eTogWzAsIDFdLFxuXHRcdHo6IFswLCAxLjA4OF1cblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcInh5elwiLCBcInh5ei1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDY1XCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR6OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3lpcS9jb252ZXJ0UmdiVG9ZaXEuanNcbnZhciBjb252ZXJ0UmdiVG9ZaXEgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInlpcVwiLFxuXHRcdHk6IC4yOTg4OTUzMSAqIHIgKyAuNTg2NjIyNDcgKiBnICsgLjExNDQ4MjIzICogYixcblx0XHRpOiAuNTk1OTc3OTkgKiByIC0gLjI3NDE3NjEgKiBnIC0gLjMyMTgwMTg5ICogYixcblx0XHRxOiAuMjExNDcwMTcgKiByIC0gLjUyMjYxNzExICogZyArIC4zMTExNDY5NCAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRZaXFUb1JnYi5qc1xudmFyIGNvbnZlcnRZaXFUb1JnYiA9ICh7IHksIGksIHEsIGFscGhhIH0pID0+IHtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAocSA9PT0gdm9pZCAwKSBxID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogeSArIC45NTYwODQ0NSAqIGkgKyAuNjIwODg4NSAqIHEsXG5cdFx0ZzogeSAtIC4yNzEzNzY2NCAqIGkgLSAuNjQ4NjA1OSAqIHEsXG5cdFx0YjogeSAtIDEuMTA1NjE3MjQgKiBpICsgMS43MDI1MDEyNiAqIHFcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uID0ge1xuXHRtb2RlOiBcInlpcVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0WWlxVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9ZaXEgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInlcIixcblx0XHRcImlcIixcblx0XHRcInFcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teWlxXCJdLFxuXHRzZXJpYWxpemU6IFwiLS15aXFcIixcblx0cmFuZ2VzOiB7XG5cdFx0aTogWy0uNTk1LCAuNTk1XSxcblx0XHRxOiBbLS41MjIsIC41MjJdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRxOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JvdW5kLmpzXG52YXIgciA9ICh2YWx1ZSwgcHJlY2lzaW9uKSA9PiBNYXRoLnJvdW5kKHZhbHVlICogKHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pKSkgLyBwcmVjaXNpb247XG52YXIgcm91bmQgPSAocHJlY2lzaW9uID0gNCkgPT4gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyByKHZhbHVlLCBwcmVjaXNpb24pIDogdmFsdWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2Zvcm1hdHRlci5qc1xudmFyIHR3b0RlY2ltYWxzID0gcm91bmQoMik7XG52YXIgY2xhbXAkMSA9ICh2YWx1ZSkgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUgfHwgMCkpO1xudmFyIGZpeHVwID0gKHZhbHVlKSA9PiBNYXRoLnJvdW5kKGNsYW1wJDEodmFsdWUpICogMjU1KTtcbnZhciByZ2IkMSA9IGNvbnZlcnRlcihcInJnYlwiKTtcbnZhciBoc2wkMSA9IGNvbnZlcnRlcihcImhzbFwiKTtcbnZhciBzZXJpYWxpemVIZXggPSAoY29sb3IpID0+IHtcblx0aWYgKGNvbG9yID09PSB2b2lkIDApIHJldHVybjtcblx0bGV0IHIgPSBmaXh1cChjb2xvci5yKTtcblx0bGV0IGcgPSBmaXh1cChjb2xvci5nKTtcblx0bGV0IGIgPSBmaXh1cChjb2xvci5iKTtcblx0cmV0dXJuIFwiI1wiICsgKDEgPDwgMjQgfCByIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xufTtcbnZhciBmb3JtYXRIZXggPSAoYykgPT4gc2VyaWFsaXplSGV4KHJnYiQxKGMpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaW5kZXguanNcbnZhciBhOTggPSB1c2VNb2RlKGRlZmluaXRpb24kMjYpO1xudmFyIGN1YmVoZWxpeCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNSk7XG52YXIgZGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNCk7XG52YXIgZGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMyk7XG52YXIgaHNpID0gdXNlTW9kZShkZWZpbml0aW9uJDIyKTtcbnZhciBoc2wgPSB1c2VNb2RlKGRlZmluaXRpb24kMjEpO1xudmFyIGhzdiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMCk7XG52YXIgaHdiID0gdXNlTW9kZShkZWZpbml0aW9uJDE5KTtcbnZhciBpdHAgPSB1c2VNb2RlKGRlZmluaXRpb24kMTgpO1xudmFyIGphYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNyk7XG52YXIgamNoID0gdXNlTW9kZShkZWZpbml0aW9uJDE2KTtcbnZhciBsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kMTUpO1xudmFyIGxhYjY1ID0gdXNlTW9kZShkZWZpbml0aW9uJDE0KTtcbnZhciBsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTMpO1xudmFyIGxjaDY1ID0gdXNlTW9kZShkZWZpbml0aW9uJDEyKTtcbnZhciBsY2h1diA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMSk7XG52YXIgbHJnYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMCk7XG52YXIgbHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDkpO1xudmFyIG9raHNsID0gdXNlTW9kZShtb2RlT2toc2wpO1xudmFyIG9raHN2ID0gdXNlTW9kZShtb2RlT2toc3YpO1xudmFyIG9rbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDgpO1xudmFyIG9rbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDcpO1xudmFyIHAzID0gdXNlTW9kZShkZWZpbml0aW9uJDYpO1xudmFyIHByb3Bob3RvID0gdXNlTW9kZShkZWZpbml0aW9uJDUpO1xudmFyIHJlYzIwMjAgPSB1c2VNb2RlKGRlZmluaXRpb24kNCk7XG52YXIgcmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDI3KTtcbnZhciB4eWIgPSB1c2VNb2RlKGRlZmluaXRpb24kMyk7XG52YXIgeHl6NTAgPSB1c2VNb2RlKGRlZmluaXRpb24kMik7XG52YXIgeHl6NjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMSk7XG52YXIgeWlxID0gdXNlTW9kZShkZWZpbml0aW9uKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9LTWVhbi50c1xudmFyIHNvcnRDb2xvcnMgPSAobGlzdCwgY3JpdGVyaWEgPSBcImxcIikgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBNYXRoLnNpZ24ob2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBhWzBdLFxuXHRnOiBhWzFdLFxuXHRiOiBhWzJdXG59KT8uW2NyaXRlcmlhXSAtIG9rbGNoKHtcblx0bW9kZTogXCJyZ2JcIixcblx0cjogYlswXSxcblx0ZzogYlsxXSxcblx0YjogYlsyXVxufSk/Lltjcml0ZXJpYV0pIHx8IDApO1xudmFyIGV1Y2xpZGVhbkRpc3RhbmNlID0gKGNvbG9yMSwgY29sb3IyKSA9PiBNYXRoLmh5cG90KGNvbG9yMVswXSAtIGNvbG9yMlswXSwgY29sb3IxWzFdIC0gY29sb3IyWzFdLCBjb2xvcjFbMl0gLSBjb2xvcjJbMl0pO1xudmFyIG1ha2VDbHVzdGVycyA9IChkYXRhLCBjZW50cm9pZHMpID0+IHtcblx0bGV0IGNsdXN0ZXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogY2VudHJvaWRzLmxlbmd0aCB9LCAoKSA9PiAoe1xuXHRcdHBvaW50czogW10sXG5cdFx0bWVhbjogbnVsbFxuXHR9KSk7XG5cdGRhdGEuZm9yRWFjaCgocG9pbnQpID0+IHtcblx0XHRsZXQgbWluRGlzdGFuY2UgPSAxZTQ7XG5cdFx0bGV0IG1pbkRpc3RhbmNlQ2x1c3RlckluZGV4ID0gMDtcblx0XHRjZW50cm9pZHMuZm9yRWFjaCgoY2VudHJvaWQsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IGV1Y2xpZGVhbkRpc3RhbmNlKHBvaW50LCBjZW50cm9pZCk7XG5cdFx0XHRpZiAodHlwZW9mIG1pbkRpc3RhbmNlID09PSBcInVuZGVmaW5lZFwiIHx8IG1pbkRpc3RhbmNlID4gZGlzdGFuY2UpIHtcblx0XHRcdFx0bWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSBpbmRleDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjbHVzdGVyc1ttaW5EaXN0YW5jZUNsdXN0ZXJJbmRleF0ucG9pbnRzLnB1c2gocG9pbnQpO1xuXHR9KTtcblx0cmV0dXJuIGNsdXN0ZXJzO1xufTtcbnZhciBjb21wdXRlTWVhbiA9IChwb2ludHMpID0+IHtcblx0cmV0dXJuIHBvaW50cz8ubGVuZ3RoID4gMCA/IHBvaW50cy5yZWR1Y2UoKGFjYywgcG9pbnQpID0+IFtcblx0XHRwb2ludFswXSArIGFjY1swXSxcblx0XHRwb2ludFsxXSArIGFjY1sxXSxcblx0XHRwb2ludFsyXSArIGFjY1syXVxuXHRdLCBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XSkubWFwKCh2YWwpID0+IHZhbCAvIHBvaW50cy5sZW5ndGgpIDogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQwXG5cdF07XG59O1xudmFyIGtNZWFucyA9IChkYXRhLCBrKSA9PiB7XG5cdGxldCBjZW50cm9pZHMgPSBzb3J0Q29sb3JzKGluaXRpYWxpemVDZW50cm9pZHMoZGF0YSwgaykpO1xuXHRjb25zdCBtYXhJdGVyYXRpb25zID0gMTA7XG5cdGZvciAobGV0IGl0ZXJhdGlvbiA9IDA7IGl0ZXJhdGlvbiA8IG1heEl0ZXJhdGlvbnM7IGl0ZXJhdGlvbisrKSB7XG5cdFx0Y29uc3QgbmV3Q2VudHJvaWRzID0gbWFrZUNsdXN0ZXJzKGRhdGEsIGNlbnRyb2lkcykubWFwKChjbHVzdGVyKSA9PiBjbHVzdGVyLnBvaW50cy5sZW5ndGggPiAwID8gY29tcHV0ZU1lYW4oY2x1c3Rlci5wb2ludHMpIDogbnVsbCk7XG5cdFx0aWYgKG5ld0NlbnRyb2lkcy5ldmVyeSgobmV3Q2VudHJvaWQsIGluZGV4KSA9PiBuZXdDZW50cm9pZCAmJiBldWNsaWRlYW5EaXN0YW5jZShuZXdDZW50cm9pZCwgY2VudHJvaWRzW2luZGV4XSkgPCAuMDAxKSkgYnJlYWs7XG5cdFx0Y2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuXHR9XG5cdHJldHVybiBjZW50cm9pZHM7XG59O1xudmFyIGluaXRpYWxpemVDZW50cm9pZHMgPSAoZGF0YSwgaykgPT4ge1xuXHRjb25zdCBjZW50cm9pZHMgPSBbZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCldXTtcblx0d2hpbGUgKGNlbnRyb2lkcy5sZW5ndGggPCBrKSB7XG5cdFx0Y29uc3QgZGlzdGFuY2VzID0gZGF0YS5tYXAoKHBvaW50KSA9PiBNYXRoLm1pbiguLi5jZW50cm9pZHMubWFwKChjZW50cm9pZCkgPT4gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKSkpKTtcblx0XHRjb25zdCB0b3RhbERpc3RhbmNlID0gZGlzdGFuY2VzLnJlZHVjZSgoc3VtLCBkKSA9PiBzdW0gKyBkLCAwKTtcblx0XHRjb25zdCBwcm9iYWJpbGl0aWVzID0gZGlzdGFuY2VzLm1hcCgoZCkgPT4gZCAvIHRvdGFsRGlzdGFuY2UpO1xuXHRcdGxldCBjdW11bGF0aXZlUHJvYmFiaWxpdHkgPSAwO1xuXHRcdGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2JhYmlsaXRpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1bXVsYXRpdmVQcm9iYWJpbGl0eSArPSBwcm9iYWJpbGl0aWVzW2ldO1xuXHRcdFx0aWYgKHJhbmRvbVZhbHVlIDwgY3VtdWxhdGl2ZVByb2JhYmlsaXR5KSB7XG5cdFx0XHRcdGNlbnRyb2lkcy5wdXNoKGRhdGFbaV0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgcHJlQmx1clBpeGVscyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgYmxvYiA9IGltZ1VSTCBpbnN0YW5jZW9mIEJsb2IgfHwgaW1nVVJMIGluc3RhbmNlb2YgRmlsZSA/IGltZ1VSTCA6IGF3YWl0IGZldGNoKGltZ1VSTCk/LnRoZW4/LigocikgPT4gcj8uYmxvYj8uKCkpO1xuXHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGgsIGJpdG1hcC5oZWlnaHQpO1xuXHRjb25zdCBjdHggPSBvZmZzZXQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRjdHguZmlsdGVyID0gXCJibHVyKDE2cHgpXCI7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRyZXR1cm4gb2Zmc2V0O1xufTtcbnZhciBnZXRDbHVzdGVySW1hZ2VEYXRhID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBiaXRtYXAgPSBhd2FpdCBwcmVCbHVyUGl4ZWxzKGltZ1VSTCk7XG5cdGNvbnN0IG9mZnNldCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoYml0bWFwLndpZHRoICogLjEyNSwgYml0bWFwLmhlaWdodCAqIC4xMjUpO1xuXHRjb25zdCBjdHggPSBvZmZzZXQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRjdHg/LmRyYXdJbWFnZT8uKGJpdG1hcCwgMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0KTtcblx0Y29uc3QgZGF0YSA9IChjdHg/LmdldEltYWdlRGF0YT8uKDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCwge1xuXHRcdHN0b3JhZ2VGb3JtYXQ6IFwiZmxvYXQzMlwiLFxuXHRcdHBpeGVsRm9ybWF0OiBcInJnYmEtZmxvYXQzMlwiLFxuXHRcdGNvbG9yU3BhY2U6IFwic3JnYlwiXG5cdH0pKS5kYXRhO1xuXHRjb25zdCBhbGxDb3VudCA9IG9mZnNldC53aWR0aCAqIG9mZnNldC5oZWlnaHQgfHwgMDtcblx0Y29uc3QgZHYgPSAxIC8gMjU1O1xuXHRjb25zdCBmcDMyID0gW107XG5cdGZvciAobGV0IHMgPSAwOyBzIDwgYWxsQ291bnQ7IHMrKykge1xuXHRcdGNvbnN0IGk0ID0gcyAqIDQ7XG5cdFx0ZnAzMi5wdXNoKGRhdGEgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHwgZGF0YSBpbnN0YW5jZW9mIEZsb2F0MTZBcnJheSA/IFtcblx0XHRcdGRhdGE/LltpNCArIDBdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAxXSB8fCAwLFxuXHRcdFx0ZGF0YT8uW2k0ICsgMl0gfHwgMFxuXHRcdF0gOiBbXG5cdFx0XHQoZGF0YT8uW2k0ICsgMF0gfHwgMCkgKiBkdixcblx0XHRcdChkYXRhPy5baTQgKyAxXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDJdIHx8IDApICogZHZcblx0XHRdKTtcblx0fVxuXHRyZXR1cm4gZnAzMjtcbn07XG52YXIgZ2V0RG9taW5hbnRDb2xvcnMgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDbHVzdGVySW1hZ2VEYXRhKGltZ1VSTCk7XG5cdHJldHVybiBzb3J0Q29sb3JzKGtNZWFucyhkYXRhLCA0KSwgXCJoXCIpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9XYWxscGFwZXJUaGVtZS50c1xudmFyIFdBTExQQVBFUl9USEVNRV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXRoZW1lXCI7XG52YXIgV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVkgPSBcInJzLXdhbGxwYXBlci1wcmltYXJ5XCI7XG52YXIgV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXRoZW1lLXNyY1wiO1xudmFyIFRIRU1FX1NUT1JBR0VfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZO1xudmFyIFBSSU1BUllfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWTtcbnZhciBXQUxMUEFQRVJfVVJMX0tFWSA9IFdBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVk7XG52YXIgUEFQRVJfTF9TUExJVCA9IC41MjtcbnZhciBQQVBFUl9DSFJPTUFfQ0FQID0gLjAyNTtcbnZhciBGQUxMQkFDS19QQVBFUiA9IHtcblx0dW5kZXJseWluZzogXCIjMTYxNjFhXCIsXG5cdGNvbnRyYXN0OiBcIiNmN2Y3ZjhcIlxufTtcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIGNsYW1wID0gKG4sIGxvLCBoaSkgPT4gTWF0aC5taW4oaGksIE1hdGgubWF4KGxvLCBuKSk7XG52YXIgaGV4T2tsY2ggPSAobCwgYywgaCwgZmFsbGJhY2spID0+IGZvcm1hdEhleCh7XG5cdG1vZGU6IFwib2tsY2hcIixcblx0bCxcblx0Yyxcblx0aFxufSkgfHwgZmFsbGJhY2s7XG52YXIgcmdiVG9TYW1wbGUgPSAocmdiKSA9PiB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IHJnYjtcblx0aWYgKCFbXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0XS5ldmVyeSgobikgPT4gTnVtYmVyLmlzRmluaXRlKG4pKSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGhleCA9IGZvcm1hdEhleCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0aWYgKCFoZXgpIHJldHVybiBudWxsO1xuXHRjb25zdCBvayA9IG9rbGNoKHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJnYixcblx0XHRoZXgsXG5cdFx0bDogb2s/LmwgPz8gLjUsXG5cdFx0Yzogb2s/LmMgPz8gMCxcblx0XHRoOiBvaz8uaCA/PyAwXG5cdH07XG59O1xudmFyIHBhcGVyTEZyb21IZXggPSAoaGV4KSA9PiBva2xjaChoZXgpPy5sID8/IC40O1xudmFyIGhhbG9Gb3JQYXBlciA9IChkYXJrUGFwZXIpID0+IGRhcmtQYXBlciA/IHtcblx0c2hhZG93OiBcInJnYigwIDAgMCAvIDAuODgpXCIsXG5cdGdsb3c6IFwicmdiKDAgMCAwIC8gMC40NSlcIlxufSA6IHtcblx0c2hhZG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuNzIpXCIsXG5cdGdsb3c6IFwicmdiKDI1NSAyNTUgMjU1IC8gMC4zNSlcIlxufTtcbnZhciBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21TYW1wbGVzID0gKHNhbXBsZXMpID0+IHtcblx0aWYgKCFzYW1wbGVzLmxlbmd0aCkgcmV0dXJuIHsgLi4uRkFMTEJBQ0tfUEFQRVIgfTtcblx0Y29uc3QgbWVhbkwgPSBzYW1wbGVzLnJlZHVjZSgoc3VtLCBzKSA9PiBzdW0gKyBzLmwsIDApIC8gc2FtcGxlcy5sZW5ndGg7XG5cdGNvbnN0IHBhcGVyID0gWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGEuYyAtIGIuYyB8fCBNYXRoLmFicyhhLmwgLSBtZWFuTCkgLSBNYXRoLmFicyhiLmwgLSBtZWFuTCkpWzBdO1xuXHRjb25zdCBwYXBlckwgPSBjbGFtcChwYXBlci5sICogLjM1ICsgbWVhbkwgKiAuNjUsIC4wOCwgLjk0KTtcblx0Y29uc3QgcGFwZXJDID0gTWF0aC5taW4oUEFQRVJfQ0hST01BX0NBUCwgTWF0aC5tYXgoMCwgcGFwZXIuYyAqIC4yKSk7XG5cdGNvbnN0IGggPSBwYXBlci5oIHx8IDA7XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTCA8IFBBUEVSX0xfU1BMSVQ7XG5cdHJldHVybiB7XG5cdFx0dW5kZXJseWluZzogaGV4T2tsY2gocGFwZXJMLCBwYXBlckMsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLnVuZGVybHlpbmcgOiBcIiNlOGU2ZTJcIiksXG5cdFx0Y29udHJhc3Q6IGhleE9rbGNoKGRhcmtQYXBlciA/IC45MyA6IC4xNiwgLjAwOCwgaCwgZGFya1BhcGVyID8gRkFMTEJBQ0tfUEFQRVIuY29udHJhc3QgOiBcIiMxNDE0MTZcIilcblx0fTtcbn07XG52YXIgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSA9IChsdW1hKSA9PiB7XG5cdHJldHVybiBsdW1hIDw9IFBBUEVSX0xfU1BMSVQgPyB7IC4uLkZBTExCQUNLX1BBUEVSIH0gOiB7XG5cdFx0dW5kZXJseWluZzogXCIjZThlNmUyXCIsXG5cdFx0Y29udHJhc3Q6IFwiIzE0MTQxNlwiXG5cdH07XG59O1xudmFyIGhhc1dhbGxwYXBlclBhcGVyID0gKHNlZWRzKSA9PiBCb29sZWFuKHNlZWRzLnVuZGVybHlpbmcgJiYgc2VlZHMuY29udHJhc3QpO1xudmFyIHJhbmtXYWxscGFwZXJTZWVkcyA9IChjZW50cm9pZHMpID0+IHtcblx0Y29uc3Qgc2FtcGxlcyA9IGNlbnRyb2lkcy5tYXAocmdiVG9TYW1wbGUpLmZpbHRlcihCb29sZWFuKTtcblx0aWYgKCFzYW1wbGVzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGFjY2VudFBvb2wgPSBzYW1wbGVzLmZpbHRlcigocykgPT4gcy5sID49IC4xOCAmJiBzLmwgPD0gLjg4ICYmIHMuYyA+PSAuMDIpLnNvcnQoKGEsIGIpID0+IGIuYyAtIGEuYyB8fCBNYXRoLmFicyhiLmwgLSAuNTUpIC0gTWF0aC5hYnMoYS5sIC0gLjU1KSk7XG5cdGNvbnN0IHBvb2wgPSBhY2NlbnRQb29sLmxlbmd0aCA/IGFjY2VudFBvb2wgOiBbLi4uc2FtcGxlc10uc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jKTtcblx0Y29uc3QgcHJpbWFyeSA9IHBvb2xbMF07XG5cdGlmICghcHJpbWFyeSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGh1ZURpc3QgPSAoYSwgYikgPT4ge1xuXHRcdGNvbnN0IGQgPSBNYXRoLmFicyhhIC0gYikgJSAzNjA7XG5cdFx0cmV0dXJuIGQgPiAxODAgPyAzNjAgLSBkIDogZDtcblx0fTtcblx0Y29uc3QgcGlja05leHQgPSAodXNlZCkgPT4ge1xuXHRcdGNvbnN0IHJlc3QgPSBwb29sLmZpbHRlcigocykgPT4gIXVzZWQuaW5jbHVkZXMocykpO1xuXHRcdGlmICghcmVzdC5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGJhc2UgPSB1c2VkW3VzZWQubGVuZ3RoIC0gMV0gPz8gcHJpbWFyeTtcblx0XHRcdGNvbnN0IG51ZGdlZCA9IGZvcm1hdEhleCh7XG5cdFx0XHRcdG1vZGU6IFwib2tsY2hcIixcblx0XHRcdFx0bDogTWF0aC5taW4oLjg1LCBNYXRoLm1heCguMiwgYmFzZS5sICsgKHVzZWQubGVuZ3RoID09PSAxID8gLS4xMiA6IC4xKSkpLFxuXHRcdFx0XHRjOiBNYXRoLm1heCguMDQsIGJhc2UuYyAqIC44NSksXG5cdFx0XHRcdGg6IGJhc2UuaFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5iYXNlLFxuXHRcdFx0XHRoZXg6IG51ZGdlZCB8fCBiYXNlLmhleCxcblx0XHRcdFx0bDogYmFzZS5sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gWy4uLnJlc3RdLnNvcnQoKGEsIGIpID0+IE1hdGgubWluKC4uLnVzZWQubWFwKCh1KSA9PiBodWVEaXN0KGIuaCwgdS5oKSkpIC0gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYS5oLCB1LmgpKSkgfHwgYi5jIC0gYS5jKVswXSA/PyByZXN0WzBdO1xuXHR9O1xuXHRjb25zdCBzZWNvbmRhcnkgPSBwaWNrTmV4dChbcHJpbWFyeV0pO1xuXHRjb25zdCB0ZXJ0aWFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5LCBzZWNvbmRhcnldKTtcblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21TYW1wbGVzKHNhbXBsZXMpO1xuXHRyZXR1cm4ge1xuXHRcdHByaW1hcnk6IHByaW1hcnkuaGV4LFxuXHRcdHNlY29uZGFyeTogc2Vjb25kYXJ5LmhleCxcblx0XHR0ZXJ0aWFyeTogdGVydGlhcnkuaGV4LFxuXHRcdC4uLnBhcGVyXG5cdH07XG59O1xudmFyIHRoZW1lSG9zdHMgPSAoKSA9PiB7XG5cdGNvbnN0IG5vZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0bm9kZXMuYWRkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZW52LXNoZWxsLXJvb3QsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvd1wiKS5mb3JFYWNoKChlbCkgPT4gbm9kZXMuYWRkKGVsKSk7XG5cdHJldHVybiBbLi4ubm9kZXNdO1xufTtcbnZhciB3YWxscGFwZXJTZWVkc01heVBhaW50ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gdHJ1ZTtcblx0Y29uc3Qgc3JjID0gU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LmNvbG9yU291cmNlIHx8IFwiXCIpO1xuXHRpZiAoIXNyYykgcmV0dXJuIHRydWU7XG5cdHJldHVybiBzcmMgPT09IFwid2FsbHBhcGVyXCIgfHwgc3JjID09PSBcInNwZWVkLWRpYWxcIiB8fCBzcmMgPT09IFwic3lzdGVtLXdhbGxwYXBlclwiO1xufTtcbnZhciBhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zID0gKHBhcGVyLCBleHRyYUhvc3RzID0gW10pID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRjb25zdCBkYXJrUGFwZXIgPSBwYXBlckxGcm9tSGV4KHBhcGVyLnVuZGVybHlpbmcpIDwgUEFQRVJfTF9TUExJVDtcblx0Y29uc3QgeyBzaGFkb3csIGdsb3cgfSA9IGhhbG9Gb3JQYXBlcihkYXJrUGFwZXIpO1xuXHRjb25zdCBob3N0cyA9IG5ldyBTZXQodGhlbWVIb3N0cygpKTtcblx0Zm9yIChjb25zdCBlbCBvZiBleHRyYUhvc3RzKSBob3N0cy5hZGQoZWwpO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcblx0XHRob3N0LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0XHRob3N0LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRcdGhvc3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0aG9zdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRcdGhvc3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHR9XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSA9IChsdW1hLCBleHRyYUhvc3RzID0gW10pID0+IHtcblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hKGx1bWEpO1xuXHRhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKHBhcGVyLCBleHRyYUhvc3RzKTtcblx0cmV0dXJuIHBhcGVyO1xufTtcbnZhciBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMgPSAoc2VlZHMpID0+IHtcblx0Y29uc3QgbmV4dCA9IHNlZWRzO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShuZXh0KSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJJTUFSWV9TVE9SQUdFX0tFWSwgbmV4dC5wcmltYXJ5KTtcblx0fSBjYXRjaCB7fVxuXHRpZiAoaGFzV2FsbHBhcGVyUGFwZXIobmV4dCkpIGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMobmV4dCk7XG5cdGlmICghd2FsbHBhcGVyU2VlZHNNYXlQYWludCgpKSByZXR1cm47XG5cdGZvciAoY29uc3QgaG9zdCBvZiB0aGVtZUhvc3RzKCkpIGZvciAoY29uc3QgW3Byb3AsIGtleV0gb2YgU0VFRF9QUk9QUykgaG9zdC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBuZXh0W2tleV0pO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIikuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItcHJpbWFyeVwiLCBuZXh0LnByaW1hcnkpO1xuXHRcdGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXNlLWNvbG9yXCIsIG5leHQucHJpbWFyeSk7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXNlY29uZGFyeVwiLCBuZXh0LnNlY29uZGFyeSk7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXRlcnRpYXJ5XCIsIG5leHQudGVydGlhcnkpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ1Mi10aGVtZS1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRzb3VyY2U6IFwid2FsbHBhcGVyXCIsXG5cdFx0c2VlZHM6IG5leHRcblx0fSB9KSk7XG59O1xudmFyIGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9TVE9SQUdFX0tFWSk7XG5cdFx0aWYgKCFyYXcpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcblx0XHRpZiAoIXBhcnNlZD8ucHJpbWFyeSB8fCAhcGFyc2VkPy5zZWNvbmRhcnkgfHwgIXBhcnNlZD8udGVydGlhcnkpIHJldHVybiBudWxsO1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyID0gYXN5bmMgKGltZ1VSTCwgb3B0cykgPT4ge1xuXHRjb25zdCBzcmNLZXkgPSB0eXBlb2YgaW1nVVJMID09PSBcInN0cmluZ1wiID8gaW1nVVJMLnNsaWNlKDAsIDIwNDgpIDogYGJsb2I6JHtpbWdVUkwubmFtZSB8fCBcIndhbGxwYXBlclwifToke2ltZ1VSTC5zaXplfWA7XG5cdGlmICghb3B0cz8uZm9yY2UpIHRyeSB7XG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZKSA9PT0gc3JjS2V5KSB7XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0YXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKGNhY2hlZCk7XG5cdFx0XHRcdHJldHVybiBjYWNoZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2VudHJvaWRzID0gYXdhaXQgZ2V0RG9taW5hbnRDb2xvcnMoaW1nVVJMKTtcblx0XHRjb25zdCBzZWVkcyA9IHJhbmtXYWxscGFwZXJTZWVkcyhjZW50cm9pZHMpO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gc2VlZHM7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciBmYWlsZWRcIiwgZXJyKTtcblx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0XHRcdHJldHVybiBjYWNoZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlID0gKCkgPT4ge1xuXHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0aWYgKGNhY2hlZCkgYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKGNhY2hlZCk7XG5cdHJldHVybiBjYWNoZWQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvY2FudmFzL0NhbnZhcy50c1xudmFyIGJsb2JJbWFnZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGRlbGF5ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXSk7XG52YXIgc2hlZHVsZXIgPSBtYWtlUkFGQ3ljbGUoKTtcbnZhciBmYWlsZWRXYWxscGFwZXJTcmMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGdldEltZ1dpZHRoID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsV2lkdGggfHwgaW1nPy53aWR0aCB8fCAxO1xufTtcbnZhciBnZXRJbWdIZWlnaHQgPSAoaW1nKSA9PiB7XG5cdHJldHVybiBpbWc/Lm5hdHVyYWxIZWlnaHQgfHwgaW1nPy5oZWlnaHQgfHwgMTtcbn07XG52YXIgY3JlYXRlMmRDb250ZXh0ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBiYXNlID0ge1xuXHRcdGFscGhhOiB0cnVlLFxuXHRcdGRlc3luY2hyb25pemVkOiB0cnVlLFxuXHRcdHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlXG5cdH07XG5cdGZvciAoY29uc3QgY29sb3JTcGFjZSBvZiBbXG5cdFx0XCJyZWMyMTAwLWhsZ1wiLFxuXHRcdFwiZGlzcGxheS1wM1wiLFxuXHRcdFwic3JnYlwiXG5cdF0pIHRyeSB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7XG5cdFx0XHQuLi5iYXNlLFxuXHRcdFx0Y29sb3JTcGFjZVxuXHRcdH0pO1xuXHRcdGlmIChjdHgpIHJldHVybiBjdHg7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRyZXR1cm4gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCBiYXNlKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH1cbn07XG52YXIgY2FsbEJ5RnJhbWUgPSAocG9pbnRlcklkLCBjYikgPT4ge1xuXHRkZWxheWVkLnNldChwb2ludGVySWQsIGNiKTtcbn07XG52YXIgY292ZXIgPSAoY3R4LCBpbWcsIHNjYWxlID0gMSwgcG9ydCwgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBjdHguY2FudmFzO1xuXHRjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblx0Y3R4LnJvdGF0ZSgoLW9yaWVudCB8fCAwKSAqIChNYXRoLlBJICogLjUpKTtcblx0Y3R4LnJvdGF0ZSgoMSAtIHBvcnQpICogKE1hdGguUEkgLyAyKSk7XG5cdGN0eC50cmFuc2xhdGUoLShnZXRJbWdXaWR0aChpbWcpIC8gMikgKiBzY2FsZSwgLShnZXRJbWdIZWlnaHQoaW1nKSAvIDIpICogc2NhbGUpO1xufTtcbnZhciBjcmVhdGVJbWFnZUJpdG1hcENhY2hlID0gKGJsb2IpID0+IHtcblx0aWYgKCFibG9iSW1hZ2VNYXAuaGFzKGJsb2IpICYmIChibG9iIGluc3RhbmNlb2YgQmxvYiB8fCBibG9iIGluc3RhbmNlb2YgRmlsZSB8fCBibG9iIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzIHx8IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCB8fCBibG9iIGluc3RhbmNlb2YgSW1hZ2UpKSB7XG5cdFx0Y29uc3QgcGVuZGluZyA9IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGJsb2JJbWFnZU1hcC5kZWxldGUoYmxvYik7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdFx0YmxvYkltYWdlTWFwLnNldChibG9iLCBwZW5kaW5nKTtcblx0fVxuXHRyZXR1cm4gYmxvYkltYWdlTWFwLmdldChibG9iKTtcbn07XG52YXIgYmluZENhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5iaW5kQ2FjaGVcIik7XG5nbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRDYWNoZSA9IGdsb2JhbFRoaXNbYmluZENhY2hlU3ltYm9sXTtcbnZhciBiaW5kQ2FjaGVkID0gKGNiLCBjdHgpID0+IHtcblx0Y29uc3QgY2FjaGVkID0gYmluZENhY2hlLmdldChjYik7XG5cdGlmICh0eXBlb2YgY2FjaGVkID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjYWNoZWQ7XG5cdGNvbnN0IGJvdW5kID0gY2IuYmluZChjdHgpO1xuXHRiaW5kQ2FjaGUuc2V0KGNiLCBib3VuZCk7XG5cdHJldHVybiBib3VuZDtcbn07XG52YXIgVUlDYW52YXMgPSBudWxsO1xuaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiKSBVSUNhbnZhcyA9IGNsYXNzIFVJQ2FudmFzIGV4dGVuZHMgSFRNTENhbnZhc0VsZW1lbnQge1xuXHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xuXHRcdFwiZGF0YS1zcmNcIixcblx0XHRcImRhdGEtb3JpZW50XCIsXG5cdFx0XCJvcmllbnRcIlxuXHRdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG5cdCNzaXplID0gWzEsIDFdO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdGdldCAjb3JpZW50KCkge1xuXHRcdGNvbnN0IHJhdyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPz8gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgPz8gXCIwXCI7XG5cdFx0Y29uc3QgbiA9IE51bWJlci5wYXJzZUludChyYXcsIDEwKTtcblx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG5cdH1cblx0c2V0ICNvcmllbnQodmFsdWUpIHtcblx0XHRjb25zdCBzID0gU3RyaW5nKHZhbHVlKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHR9XG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09IFwiZGF0YS1zcmNcIikgdGhpcy4jcHJlbG9hZChuZXdWYWx1ZSk7XG5cdFx0aWYgKG5hbWUgPT0gXCJkYXRhLW9yaWVudFwiIHx8IG5hbWUgPT0gXCJvcmllbnRcIikgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1pbmxpbmUtc2l6ZVwiLCBcIm1pbigxMDAlLCBtaW4oMTAwY3FpLCAxMDBkdmkpKVwiKTtcblx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxYiwgMTAwZHZiKSlcIik7XG5cdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy53aWR0aCB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy5oZWlnaHQgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0dGhpcy4jcHJlbG9hZCh0aGlzLiNsb2FkaW5nID0gdGhpcy5kYXRhc2V0LnNyYyB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHRpZiAodGhpcy5pbWFnZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy53aWR0aCB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy5oZWlnaHQgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0XHRpZiAob2xkPy5bMF0gIT0gdGhpcy4jc2l6ZVswXSB8fCBvbGQ/LlsxXSAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHRcdH07XG5cdFx0c2hlZHVsZXI/LnNoZWR1bGU/LigoKSA9PiB7XG5cdFx0XHR0aGlzLmN0eCA9IGNyZWF0ZTJkQ29udGV4dChjYW52YXMpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jdHg/LmNvbmZpZ3VyZUhpZ2hEeW5hbWljUmFuZ2U/Lih7IG1vZGU6IFwiZXh0ZW5kZWRcIiB9KTtcblx0XHRcdFx0Y2FudmFzPy5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR0aGlzLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1LWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInUyLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInVpLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxaSwgMTAwZHZpKSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxYiwgMTAwZHZiKSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiZHluYW1pYy1yYW5nZS1saW1pdFwiLCBcIm5vLWxpbWl0XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHRmaXhTaXplKCk7XG5cdFx0XHRuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gZW50cnk/LmRldmljZVBpeGVsQ29udGVudEJveFNpemU/LlswXTtcblx0XHRcdFx0XHRpZiAoYm94KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0XHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1heChib3guaW5saW5lU2l6ZSB8fCB0aGlzLndpZHRoLCAxKSwgTWF0aC5tYXgoYm94LmJsb2NrU2l6ZSB8fCB0aGlzLmhlaWdodCwgMSldO1xuXHRcdFx0XHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLm9ic2VydmUodGhpcywgeyBib3g6IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCIgfSk7XG5cdFx0XHR0aGlzLiNwcmVsb2FkKHRoaXMuI2xvYWRpbmcgPSB0aGlzLmRhdGFzZXQuc3JjIHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHR9KTtcblx0fVxuXHRhc3luYyAkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJlYWR5IHx8PSB0aGlzLiNsb2FkaW5nO1xuXHRcdGNvbnN0IGltZyA9IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCA/IGJsb2IgOiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlKGJsb2IpLmNhdGNoKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHRpZiAoaW1nICYmIHJlYWR5ID09IHRoaXMuI2xvYWRpbmcpIHtcblx0XHRcdHRoaXMuaW1hZ2UgPSBpbWc7XG5cdFx0XHR0aGlzLiNyZW5kZXIocmVhZHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gYmxvYjtcblx0fVxuXHQkcmVuZGVyUGFzcyh3aGF0SXNSZWFkeSkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMsIGN0eCA9IHRoaXMuY3R4LCBpbWcgPSB0aGlzLmltYWdlO1xuXHRcdGlmIChpbWcgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHtcblx0XHRcdGlmICh3aGF0SXNSZWFkeSkgdGhpcy4jcmVhZHkgPSB3aGF0SXNSZWFkeTtcblx0XHRcdGlmICh0aGlzLndpZHRoICE9IHRoaXMuI3NpemVbMF0pIHRoaXMud2lkdGggPSB0aGlzLiNzaXplWzBdO1xuXHRcdFx0aWYgKHRoaXMuaGVpZ2h0ICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuaGVpZ2h0ID0gdGhpcy4jc2l6ZVsxXTtcblx0XHRcdHRoaXMuc3R5bGUuYXNwZWN0UmF0aW8gPSBgJHt0aGlzLndpZHRoIHx8IDF9IC8gJHt0aGlzLmhlaWdodCB8fCAxfWA7XG5cdFx0XHRjb25zdCBveCA9IHRoaXMuI29yaWVudCAlIDIgfHwgMDtcblx0XHRcdGNvbnN0IHBvcnQgPSBnZXRJbWdXaWR0aChpbWcpIDw9IGdldEltZ0hlaWdodChpbWcpID8gMSA6IDA7XG5cdFx0XHRjb25zdCBzY2FsZSA9IE1hdGgubWF4KGNhbnZhc1tbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVtveF1dIC8gKHBvcnQgPyBnZXRJbWdIZWlnaHQoaW1nKSA6IGdldEltZ1dpZHRoKGltZykpLCBjYW52YXNbW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1bb3hdXSAvIChwb3J0ID8gZ2V0SW1nV2lkdGgoaW1nKSA6IGdldEltZ0hlaWdodChpbWcpKSk7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0Y292ZXIoY3R4LCBpbWcsIHNjYWxlLCBwb3J0LCB0aGlzLiNvcmllbnQpO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCAqIHNjYWxlLCBpbWcuaGVpZ2h0ICogc2NhbGUpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0Y29uc3QgcmVhZHkgPSBzcmMgfHwgdGhpcy4jbG9hZGluZztcblx0XHR0aGlzLiNsb2FkaW5nID0gcmVhZHk7XG5cdFx0aWYgKCFyZWFkeSB8fCB0eXBlb2YgcmVhZHkgIT09IFwic3RyaW5nXCIpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZiAoZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyhyZWFkeSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRyZXR1cm4gZmV0Y2gocmVhZHksIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyc3ApID0+IHtcblx0XHRcdGlmICghcnNwLm9rKSB7XG5cdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBibG9iID0gYXdhaXQgcnNwLmJsb2IoKTtcblx0XHRcdGlmICghYmxvYj8uc2l6ZSB8fCBibG9iLnR5cGUgJiYgIWJsb2IudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG5cdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdH0pO1xuXHRcdH0pPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdH0pO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjdHggPSB0aGlzLmN0eDtcblx0XHRpZiAodGhpcy5pbWFnZSAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgIXdoYXRJc1JlYWR5KSkgc2hlZHVsZXI/LnNoZWR1bGU/LihiaW5kQ2FjaGVkKHRoaXMuJHJlbmRlclBhc3MsIHRoaXMpKTtcblx0fVxufTtcbmVsc2UgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge31cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHt9XG5cdCR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHt9XG5cdCNvcmllbnQgPSAwO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdCNzaXplID0gWzEsIDFdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG59O1xudHJ5IHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidWktY2FudmFzXCIsIFVJQ2FudmFzLCB7IGV4dGVuZHM6IFwiY2FudmFzXCIgfSk7XG59IGNhdGNoIChlKSB7fVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvY2FudmFzL0NhbnZhcy0yLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciBjdXJyZW50T3JpZW50TnVtYmVyID0gKCkgPT4gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcbnZhciByZXZva2VMaXZlT2JqZWN0VXJsID0gKCkgPT4ge1xuXHRpZiAobGl2ZU9iamVjdFVybCAmJiBsaXZlT2JqZWN0VXJsLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgdHJ5IHtcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKGxpdmVPYmplY3RVcmwpO1xuXHR9IGNhdGNoIHt9XG5cdGxpdmVPYmplY3RVcmwgPSBudWxsO1xufTtcbnZhciBvcGVuV2FsbHBhcGVyRGIgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGlmICh0eXBlb2YgaW5kZXhlZERCID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0cmVqZWN0KC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJpbmRleGVkREIgdW5hdmFpbGFibGVcIikpO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCByZXEgPSBpbmRleGVkREIub3BlbihJREJfTkFNRSwgMSk7XG5cdHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGIgPSByZXEucmVzdWx0O1xuXHRcdGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhJREJfU1RPUkUpKSBkYi5jcmVhdGVPYmplY3RTdG9yZShJREJfU1RPUkUpO1xuXHR9O1xuXHRyZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXEucmVzdWx0KTtcblx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgb3BlbiBmYWlsZWRcIikpO1xufSk7XG52YXIgaWRiUHV0V2FsbHBhcGVyID0gYXN5bmMgKGJsb2IpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHR0eC5vYmplY3RTdG9yZShJREJfU1RPUkUpLnB1dChibG9iLCBJREJfS0VZKTtcblx0XHRcdHR4Lm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG5cdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgcHV0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBpZGJHZXRXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHJlcSA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShJREJfU1RPUkUpLmdldChJREJfS0VZKTtcblx0XHRcdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHYgPSByZXEucmVzdWx0O1xuXHRcdFx0XHRyZXNvbHZlKHYgaW5zdGFuY2VvZiBCbG9iID8gdiA6IG51bGwpO1xuXHRcdFx0fTtcblx0XHRcdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIGdldCBmYWlsZWRcIikpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRiLmNsb3NlKCk7XG5cdH1cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0dHJ5IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXQUxMUEFQRVJfU1RPUkFHRV9LRVksIHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGlzSW5saW5lUGF5bG9hZCA9ICh1cmwpID0+IHVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikgfHwgdXJsLnN0YXJ0c1dpdGgoXCJibG9iOlwiKTtcbnZhciByZXNvbHZlQXBwV2FsbHBhcGVyVXJsID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwb2ludGVyID0gcmVhZFN0b3JhZ2VQb2ludGVyKCk7XG5cdGlmIChwb2ludGVyID09PSBcImlkYjpycy13YWxscGFwZXJcIiB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJpZGI6XCIpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCBpZGJHZXRXYWxscGFwZXIoKTtcblx0XHRcdGlmIChibG9iKSB7XG5cdFx0XHRcdHJldm9rZUxpdmVPYmplY3RVcmwoKTtcblx0XHRcdFx0bGl2ZU9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHR9XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRpZiAocG9pbnRlci5zdGFydHNXaXRoKFwiZGF0YTpcIikgJiYgcG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMpIHRyeSB7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdGlmIChibG9iKSB7XG5cdFx0XHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdFx0XHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHRcdFx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIgPSAoKSA9PiByZWFkU3RvcmFnZVBvaW50ZXIoKTtcbnZhciBzeW5jQ2FudmFzT3JpZW50ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBhcHBseSA9ICgpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSAhPT0gcykgY2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGlmIChjYW52YXMuZ2V0QXR0cmlidXRlKFwib3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5vcmllbnQgPSBuO1xuXHR9O1xuXHRhcHBseSgpO1xuXHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoYXBwbHkpO1xufTtcbnZhciBzeW5jQXBwV2FsbHBhcGVyT3JpZW50ID0gKCkgPT4ge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXNbaXM9XFxcInVpLWNhbnZhc1xcXCJdLCBbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhcy51aS1jYW52YXNcIikuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y29uc3QgbiA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRjb25zdCBzID0gU3RyaW5nKG4pO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIHMpO1xuXHR9KTtcbn07XG52YXIgcmVmcmVzaEFwcFdhbGxwYXBlclBhaW50ID0gKCkgPT4ge1xuXHRyZXNvbHZlQXBwV2FsbHBhcGVyVXJsKCkudGhlbigodXJsKSA9PiB7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdFx0c3luY0FwcFdhbGxwYXBlck9yaWVudCgpO1xuXHR9KTtcbn07XG52YXIgc3luY0dsb3dUb1RoZW1lID0gKGdsb3cpID0+IHtcblx0Z2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCItLWNvbG9yLXByaW1hcnlcIikudHJpbSgpO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG59O1xudmFyIHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyA9IChwYWludFVybCkgPT4ge1xuXHRjb25zdCBjYW52YXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKTtcblx0Y29uc3Qgb3JpZW50ID0gU3RyaW5nKGN1cnJlbnRPcmllbnROdW1iZXIoKSk7XG5cdGNhbnZhc2VzLmZvckVhY2goKGNhbnZhcykgPT4ge1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBwYWludFVybCk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBvcmllbnQpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIG9yaWVudCk7XG5cdH0pO1xufTtcbnZhciBkYXRhVXJsVG9CbG9iID0gYXN5bmMgKGRhdGFVcmwpID0+IHtcblx0cmV0dXJuIChhd2FpdCBmZXRjaChkYXRhVXJsKSkuYmxvYigpO1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiA9IGFzeW5jIChibG9iKSA9PiB7XG5cdGlmICghKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkge1xuXHRcdHNldEFwcFdhbGxwYXBlcihERUZBVUxUX1dBTExQQVBFUl9VUkwpO1xuXHRcdHJldHVybiBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdH1cblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKGxpdmVPYmplY3RVcmwpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcihsaXZlT2JqZWN0VXJsLCB7IGZvcmNlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWNhbnZhc19fZ2xvd1wiKS5mb3JFYWNoKHN5bmNHbG93VG9UaGVtZSk7XG5cdH0pO1xuXHR0cnkge1xuXHRcdGF3YWl0IGlkYlB1dFdhbGxwYXBlcihibG9iKTtcblx0XHR3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcGVyc2lzdCBmYWlsZWRcIiwgZXJyKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdGNvbnN0IGRhdGFVcmwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKFN0cmluZyhyZWFkZXIucmVzdWx0IHx8IFwiXCIpKTtcblx0XHRcdFx0cmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVhZGVyLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJyZWFkIGZhaWxlZFwiKSk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoZGF0YVVybCAmJiAhd3JpdGVTdG9yYWdlUG9pbnRlcihkYXRhVXJsKSkgY29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBsb2NhbFN0b3JhZ2UgcGVyc2lzdCBhbHNvIGZhaWxlZCAocXVvdGE/KVwiKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IFdBTExQQVBFUl9JREJfTUFSS0VSLFxuXHRcdFx0dXJsOiBsaXZlT2JqZWN0VXJsXG5cdFx0fSB9KSk7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIGluaXRpYWxpemVBcHBDYW52YXNMYXllciA9IChjb250YWluZXIpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGNvbnRhaW5lcjtcblx0cm9vdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblx0cm9vdC5kYXRhc2V0LmFwcExheWVyID0gXCJjYW52YXNcIjtcblx0cm9vdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0cm9vdC5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRyb290LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG5cdHJvb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXHRjb25zdCBnbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Z2xvdy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2dsb3dcIjtcblx0Z2xvdy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Z2xvdy5zdHlsZS5pbnNldCA9IFwiLTIwJVwiO1xuXHRnbG93LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHsgaXM6IFwidWktY2FudmFzXCIgfSk7XG5cdGNhbnZhcy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2ltYWdlIHVpLWNhbnZhc1wiO1xuXHRjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdGNhbnZhcy5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRjYW52YXMuc3R5bGUuaW5saW5lU2l6ZSA9IFwiMTAwJVwiO1xuXHRjYW52YXMuc3R5bGUuYmxvY2tTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhJbmxpbmVTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhCbG9ja1NpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0Y2FudmFzLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwibm9ybWFsXCI7XG5cdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBcInVpLWNhbnZhc1wiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiZHluYW1pYy1yYW5nZS1saW1pdFwiLCBcIm5vLWxpbWl0XCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zcGFjZVwiLCBcImRpc3BsYXktcDNcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImltcG9ydGFudFwiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIiwgXCJpbXBvcnRhbnRcIik7XG5cdHJvb3QuYXBwZW5kKGdsb3csIGNhbnZhcyk7XG5cdGNvbnN0IHBvaW50ZXIgPSByZWFkU3RvcmFnZVBvaW50ZXIoKTtcblx0Y29uc3QgY29sZFVybCA9IHBvaW50ZXIgPT09IFwiaWRiOnJzLXdhbGxwYXBlclwiIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImlkYjpcIikgfHwgcG9pbnRlci5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBERUZBVUxUX1dBTExQQVBFUl9VUkwgOiBwb2ludGVyO1xuXHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgY29sZFVybCk7XG5cdGNvbnN0IGRpc3Bvc2VPcmllbnQgPSBzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlKCk7XG5cdHN5bmNHbG93VG9UaGVtZShnbG93KTtcblx0cmVzb2x2ZUFwcFdhbGxwYXBlclVybCgpLnRoZW4oKHdhbGxwYXBlcikgPT4ge1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCB3YWxscGFwZXIpO1xuXHRcdHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0XHRyZXR1cm4gYXBwbHlUaGVtZUZyb21XYWxscGFwZXIod2FsbHBhcGVyKS50aGVuKCgpID0+IHN5bmNHbG93VG9UaGVtZShnbG93KSk7XG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJvb3QsXG5cdFx0Y2FudmFzLFxuXHRcdGdsb3csXG5cdFx0ZGlzcG9zZU9yaWVudFxuXHR9O1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXIgPSAod2FsbHBhcGVyVXJsKSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gU3RyaW5nKHdhbGxwYXBlclVybCB8fCBcIlwiKS50cmltKCkgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHRpZiAoaXNJbmxpbmVQYXlsb2FkKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMpIHtcblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IGF3YWl0IChhd2FpdCBmZXRjaCh2YWx1ZSkpLmJsb2IoKSA6IGF3YWl0IGRhdGFVcmxUb0Jsb2IodmFsdWUpO1xuXHRcdFx0XHRhd2FpdCBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYihibG9iKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gc2V0QXBwV2FsbHBhcGVyIGlubGluZSBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdFx0XHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModmFsdWUpO1xuXHRcdFx0XHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih2YWx1ZSwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KSgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZGJDbGVhcldhbGxwYXBlcigpO1xuXHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdGlmICghd3JpdGVTdG9yYWdlUG9pbnRlcih2YWx1ZSkpIGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSB3YWxscGFwZXIgcG9pbnRlciB3cml0ZSBmYWlsZWRcIik7XG5cdHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyh2YWx1ZSk7XG5cdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKHZhbHVlLCB7IGZvcmNlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWNhbnZhc19fZ2xvd1wiKS5mb3JFYWNoKHN5bmNHbG93VG9UaGVtZSk7XG5cdH0pO1xuXHR0cnkge1xuXHRcdGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcImN3c3Atd2FsbHBhcGVyLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdFx0cG9pbnRlcjogdmFsdWUsXG5cdFx0XHR1cmw6IHZhbHVlXG5cdFx0fSB9KSk7XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgVUlDYW52YXMsIFdBTExQQVBFUl9JREJfTUFSS0VSLCBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSwgV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSwgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZLCBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciwgYXBwbHlXYWxscGFwZXJQYXBlckZyb21MdW1hLCBhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zLCBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMsIGJpbmRDYWNoZSwgY2FsbEJ5RnJhbWUsIGNvdmVyLCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlLCBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hLCBlbGVjdHJvbkFQSSwgZ2V0RG9taW5hbnRDb2xvcnMsIGdldFdhbGxwYXBlclN0b3JhZ2VQb2ludGVyLCBpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIsIGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSwgcXVhbGl0eU1vZGUsIHJhbmtXYWxscGFwZXJTZWVkcywgcmVmcmVzaEFwcFdhbGxwYXBlclBhaW50LCByZXNvbHZlQXBwV2FsbHBhcGVyVXJsLCByZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSwgc2V0QXBwV2FsbHBhcGVyLCBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiwgc3luY0FwcFdhbGxwYXBlck9yaWVudCwgc3luY0NhbnZhc09yaWVudCwgdGhlbWVIb3N0cyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMseUJBQUFBLElBQXVCLGdCQUFBQyxJQUFjLHdCQUFBQyxJQUFzQix3QkFBQUMsVUFBNEI7QUFHaEcsSUFBSUMsS0FBYyxrQkFDZEMsS0FBYyxFQUFFLE1BQVE7QUFBQSxFQUMzQixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQ1gsRUFBRSxHQUlFQyxLQUFjLENBQUNDLEdBQU9DLE1BQVE7QUFDakMsTUFBSSxPQUFPRCxLQUFVLFVBQ3JCO0FBQUEsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLElBQUksS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMxQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsSUFBUSxPQUFPO0FBQUEsTUFDckMsSUFBSUEsSUFBUSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLElBQ3RDO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMzQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMxQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsSUFBUSxPQUFPO0FBQUEsTUFDckMsUUFBUUEsSUFBUSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLElBQzFDO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDeEIsSUFBSUEsSUFBUSxPQUFPO0FBQUEsSUFDcEI7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQ3hCLFFBQVFBLElBQVEsT0FBTztBQUFBLElBQ3hCO0FBQUE7QUFDRCxHQUlJRSxLQUFRO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixhQUFhO0FBQ2QsR0FJSUMsS0FBYSxDQUFDSCxNQUNWRCxHQUFZRyxHQUFNRixFQUFNLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FLN0NJLEtBQU0sMERBQ05DLEtBQVcsQ0FBQ0wsTUFBVTtBQUN6QixNQUFJTTtBQUNKLFVBQVFBLElBQVFOLEVBQU0sTUFBTUksRUFBRyxLQUFLTCxHQUFZLFNBQVNPLEVBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBR0EsRUFBTSxDQUFDLEVBQUUsTUFBTSxJQUFJO0FBQzVGLEdBSUlDLElBQVEseUNBQ1JDLEtBQVcsTUFBTUQsQ0FBSyxVQUN0QkUsS0FBTSxHQUFHRixDQUFLLEtBQ2RHLEtBQVcsTUFBTUgsQ0FBSyxXQUN0QkksS0FBVSxNQUFNSixDQUFLLEtBQUtBLENBQUssS0FDL0JLLEtBQWUsTUFBTUwsQ0FBSyxLQUFLQSxDQUFLLFVBQ3BDTSxLQUFRLE1BQU1OLENBQUssdUJBQXVCQSxDQUFLLEtBQy9DTyxLQUFXLE1BQU1QLENBQUssdUJBQXVCQSxDQUFLLFVBQ2xEUSxJQUFJLGFBQ0pDLEtBQWtCLElBQUksT0FBTyxNQUFNSixLQUFlLEdBQUcsR0FJckRLLEtBQWMsSUFBSSxPQUFPLGdCQUFnQlYsQ0FBSyxHQUFHUSxDQUFDLEdBQUdSLENBQUssR0FBR1EsQ0FBQyxHQUFHUixDQUFLLGVBQWVJLEVBQU8sWUFBWSxHQUN4R08sS0FBYyxJQUFJLE9BQU8sZ0JBQWdCVCxFQUFHLEdBQUdNLENBQUMsR0FBR04sRUFBRyxHQUFHTSxDQUFDLEdBQUdOLEVBQUcsZUFBZUUsRUFBTyxZQUFZLEdBQ2xHUSxLQUFpQixDQUFDbkIsTUFBVTtBQUMvQixNQUFJb0IsSUFBTSxFQUFFLE1BQU0sTUFBTSxHQUNwQmQ7QUFDSixNQUFJQSxJQUFRTixFQUFNLE1BQU1pQixFQUFXO0FBQ2xDLElBQUlYLEVBQU0sQ0FBQyxNQUFNLFdBQVFjLEVBQUksSUFBSWQsRUFBTSxDQUFDLElBQUksTUFDeENBLEVBQU0sQ0FBQyxNQUFNLFdBQVFjLEVBQUksSUFBSWQsRUFBTSxDQUFDLElBQUksTUFDeENBLEVBQU0sQ0FBQyxNQUFNLFdBQVFjLEVBQUksSUFBSWQsRUFBTSxDQUFDLElBQUk7QUFBQSxXQUNsQ0EsSUFBUU4sRUFBTSxNQUFNa0IsRUFBVztBQUN6QyxJQUFJWixFQUFNLENBQUMsTUFBTSxXQUFRYyxFQUFJLElBQUlkLEVBQU0sQ0FBQyxJQUFJLE1BQ3hDQSxFQUFNLENBQUMsTUFBTSxXQUFRYyxFQUFJLElBQUlkLEVBQU0sQ0FBQyxJQUFJLE1BQ3hDQSxFQUFNLENBQUMsTUFBTSxXQUFRYyxFQUFJLElBQUlkLEVBQU0sQ0FBQyxJQUFJO0FBQUEsTUFDdEM7QUFDUCxTQUFJQSxFQUFNLENBQUMsTUFBTSxTQUFRYyxFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdkLEVBQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUNuRUEsRUFBTSxDQUFDLE1BQU0sV0FBUWMsRUFBSSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUNkLEVBQU0sQ0FBQyxDQUFDLENBQUMsSUFDckVjO0FBQ1IsR0FJSUMsS0FBVSxDQUFDckIsR0FBT3NCLE1BQVN0QixNQUFVLFNBQVMsU0FBUyxPQUFPQSxLQUFVLFdBQVd1QixHQUFNdkIsQ0FBSyxJQUFJQSxFQUFNLFNBQVMsU0FBU0EsSUFBUXNCLElBQU87QUFBQSxFQUM1SSxHQUFHdEI7QUFBQSxFQUNILE1BQUFzQjtBQUNELElBQUksUUFJQUUsS0FBWSxDQUFDQyxJQUFjLFVBQVUsQ0FBQ3pCLE9BQVdBLElBQVFxQixHQUFRckIsR0FBT3lCLENBQVcsT0FBTyxTQUFTekIsRUFBTSxTQUFTeUIsSUFBY3pCLElBQVEwQixFQUFXMUIsRUFBTSxJQUFJLEVBQUV5QixDQUFXLElBQUlDLEVBQVcxQixFQUFNLElBQUksRUFBRXlCLENBQVcsRUFBRXpCLENBQUssSUFBSXlCLE1BQWdCLFFBQVFDLEVBQVcxQixFQUFNLElBQUksRUFBRSxJQUFJQSxDQUFLLElBQUkwQixFQUFXLElBQUlELENBQVcsRUFBRUMsRUFBVzFCLEVBQU0sSUFBSSxFQUFFLElBQUlBLENBQUssQ0FBQyxJQUFJLFFBSXhWMEIsSUFBYSxDQUFDLEdBQ2RDLEtBQVEsQ0FBQyxHQUNUQyxLQUFVLENBQUMsR0FDWEMsS0FBZ0IsQ0FBQyxHQUNqQkMsS0FBVyxDQUFDQyxNQUFNQSxHQUNsQkMsSUFBVSxDQUFDQyxPQUNkUCxFQUFXTyxFQUFXLElBQUksSUFBSTtBQUFBLEVBQzdCLEdBQUdQLEVBQVdPLEVBQVcsSUFBSTtBQUFBLEVBQzdCLEdBQUdBLEVBQVc7QUFDZixHQUNBLE9BQU8sS0FBS0EsRUFBVyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQ0MsTUFBTTtBQUNyRCxFQUFLUixFQUFXUSxDQUFDLE1BQUdSLEVBQVdRLENBQUMsSUFBSSxDQUFDLElBQ3JDUixFQUFXUSxDQUFDLEVBQUVELEVBQVcsSUFBSSxJQUFJQSxFQUFXLFNBQVNDLENBQUM7QUFDdkQsQ0FBQyxHQUNJRCxFQUFXLFdBQVFBLEVBQVcsU0FBUyxDQUFDLElBQ3hDQSxFQUFXLGVBQVlBLEVBQVcsYUFBYSxDQUFDLElBQ3JEQSxFQUFXLFNBQVMsUUFBUSxDQUFDRSxNQUFZO0FBRXhDLE1BRElGLEVBQVcsT0FBT0UsQ0FBTyxNQUFNLFdBQVFGLEVBQVcsT0FBT0UsQ0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQ3pFLENBQUNGLEVBQVcsWUFBWUUsQ0FBTyxFQUFHLE9BQU0sSUFBSSxNQUFNLDZCQUE2QkEsQ0FBTyxFQUFFO0FBQzVGLEVBQUksT0FBT0YsRUFBVyxZQUFZRSxDQUFPLEtBQU0sZUFBWUYsRUFBVyxZQUFZRSxDQUFPLElBQUksRUFBRSxLQUFLRixFQUFXLFlBQVlFLENBQU8sRUFBRSxJQUMvSEYsRUFBVyxZQUFZRSxDQUFPLEVBQUUsVUFBT0YsRUFBVyxZQUFZRSxDQUFPLEVBQUUsUUFBUUw7QUFDckYsQ0FBQyxHQUNESCxHQUFNTSxFQUFXLElBQUksSUFBSUEsSUFDeEJBLEVBQVcsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDRyxNQUFXO0FBQzVDLEVBQUFDLEdBQVVELEdBQVFILEVBQVcsSUFBSTtBQUNsQyxDQUFDLEdBQ01ULEdBQVVTLEVBQVcsSUFBSSxJQUU3QkssS0FBVSxDQUFDaEIsTUFBU0ssR0FBTUwsQ0FBSSxHQUM5QmUsS0FBWSxDQUFDRCxHQUFRZCxNQUFTO0FBQ2pDLE1BQUksT0FBT2MsS0FBVyxVQUFVO0FBQy9CLFFBQUksQ0FBQ2QsRUFBTSxPQUFNLElBQUksTUFBTSwyQ0FBMkM7QUFDdEUsSUFBQU8sR0FBY08sQ0FBTSxJQUFJZDtBQUFBLEVBQ3pCLE1BQU8sQ0FBSSxPQUFPYyxLQUFXLGNBQ3hCUixHQUFRLFFBQVFRLENBQU0sSUFBSSxLQUFHUixHQUFRLEtBQUtRLENBQU07QUFFdEQsR0FJSUcsS0FBc0IsMEJBQ3RCQyxLQUFpQixzQkFDakJDLElBQU07QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFDUixHQUNJQyxJQUFLO0FBQ1QsU0FBU0MsR0FBT0MsR0FBTztBQUN0QixNQUFJQyxJQUFLRCxFQUFNRixDQUFFLEdBQ2JJLElBQU1GLEVBQU1GLElBQUssQ0FBQztBQUN0QixTQUFJRyxNQUFPLE9BQU9BLE1BQU8sTUFBWSxLQUFLLEtBQUtDLENBQUcsS0FBS0EsTUFBUSxPQUFPLEtBQUssS0FBS0YsRUFBTUYsSUFBSyxDQUFDLENBQUMsSUFDekZHLE1BQU8sTUFBWSxLQUFLLEtBQUtDLENBQUcsSUFDN0IsS0FBSyxLQUFLRCxDQUFFO0FBQ3BCO0FBQ0EsU0FBU0UsR0FBU0gsR0FBTztBQUN4QixNQUFJRixLQUFNRSxFQUFNLE9BQVEsUUFBTztBQUMvQixNQUFJQyxJQUFLRCxFQUFNRixDQUFFO0FBQ2pCLE1BQUlILEdBQW9CLEtBQUtNLENBQUUsRUFBRyxRQUFPO0FBQ3pDLE1BQUlBLE1BQU8sS0FBSztBQUNmLFFBQUlELEVBQU0sU0FBU0YsSUFBSyxFQUFHLFFBQU87QUFDbEMsUUFBSUksSUFBTUYsRUFBTUYsSUFBSyxDQUFDO0FBQ3RCLFdBQUksR0FBQUksTUFBUSxPQUFPUCxHQUFvQixLQUFLTyxDQUFHO0FBQUEsRUFFaEQ7QUFDQSxTQUFPO0FBQ1I7QUFDQSxJQUFJRSxLQUFVO0FBQUEsRUFDYixLQUFLO0FBQUEsRUFDTCxLQUFLLE1BQU0sS0FBSztBQUFBLEVBQ2hCLE1BQU0sSUFBSTtBQUFBLEVBQ1YsTUFBTTtBQUNQO0FBQ0EsU0FBU0MsR0FBSUwsR0FBTztBQUNuQixNQUFJTSxJQUFRO0FBUVosT0FQSU4sRUFBTUYsQ0FBRSxNQUFNLE9BQU9FLEVBQU1GLENBQUUsTUFBTSxTQUFLUSxLQUFTTixFQUFNRixHQUFJLElBQy9EUSxLQUFTQyxHQUFPUCxDQUFLLEdBQ2pCQSxFQUFNRixDQUFFLE1BQU0sT0FBTyxLQUFLLEtBQUtFLEVBQU1GLElBQUssQ0FBQyxDQUFDLE1BQUdRLEtBQVNOLEVBQU1GLEdBQUksSUFBSVMsR0FBT1AsQ0FBSyxLQUNsRkEsRUFBTUYsQ0FBRSxNQUFNLE9BQU9FLEVBQU1GLENBQUUsTUFBTSxVQUNqQ0UsRUFBTUYsSUFBSyxDQUFDLE1BQU0sT0FBT0UsRUFBTUYsSUFBSyxDQUFDLE1BQU0sUUFBUSxLQUFLLEtBQUtFLEVBQU1GLElBQUssQ0FBQyxDQUFDLElBQUdRLEtBQVNOLEVBQU1GLEdBQUksSUFBSUUsRUFBTUYsR0FBSSxJQUFJUyxHQUFPUCxDQUFLLElBQzFILEtBQUssS0FBS0EsRUFBTUYsSUFBSyxDQUFDLENBQUMsTUFBR1EsS0FBU04sRUFBTUYsR0FBSSxJQUFJUyxHQUFPUCxDQUFLLEtBRW5FRyxHQUFTSCxDQUFLLEdBQUc7QUFDcEIsUUFBSVEsSUFBS0MsR0FBTVQsQ0FBSztBQUNwQixXQUFJUSxNQUFPLFNBQVNBLE1BQU8sU0FBU0EsTUFBTyxVQUFVQSxNQUFPLFNBQWU7QUFBQSxNQUMxRSxNQUFNWCxFQUFJO0FBQUEsTUFDVixPQUFPUyxJQUFRRixHQUFRSSxDQUFFO0FBQUEsSUFDMUIsSUFDQTtBQUFBLEVBQ0Q7QUFDQSxTQUFJUixFQUFNRixDQUFFLE1BQU0sT0FDakJBLEtBQ087QUFBQSxJQUNOLE1BQU1ELEVBQUk7QUFBQSxJQUNWLE9BQU8sQ0FBQ1M7QUFBQSxFQUNULEtBRU07QUFBQSxJQUNOLE1BQU1ULEVBQUk7QUFBQSxJQUNWLE9BQU8sQ0FBQ1M7QUFBQSxFQUNUO0FBQ0Q7QUFDQSxTQUFTQyxHQUFPUCxHQUFPO0FBQ3RCLE1BQUliLElBQUk7QUFDUixTQUFPLEtBQUssS0FBS2EsRUFBTUYsQ0FBRSxDQUFDLElBQUcsQ0FBQVgsS0FBS2EsRUFBTUYsR0FBSTtBQUM1QyxTQUFPWDtBQUNSO0FBQ0EsU0FBU3NCLEdBQU1ULEdBQU87QUFDckIsTUFBSWIsSUFBSTtBQUNSLFNBQU9XLElBQUtFLEVBQU0sVUFBVUosR0FBZSxLQUFLSSxFQUFNRixDQUFFLENBQUMsSUFBRyxDQUFBWCxLQUFLYSxFQUFNRixHQUFJO0FBQzNFLFNBQU9YO0FBQ1I7QUFDQSxTQUFTdUIsR0FBVVYsR0FBTztBQUN6QixNQUFJYixJQUFJc0IsR0FBTVQsQ0FBSztBQUNuQixTQUFJQSxFQUFNRixDQUFFLE1BQU0sT0FDakJBLEtBQ087QUFBQSxJQUNOLE1BQU1ELEVBQUk7QUFBQSxJQUNWLE9BQU9WO0FBQUEsRUFDUixLQUVHQSxNQUFNLFNBQWU7QUFBQSxJQUN4QixNQUFNVSxFQUFJO0FBQUEsSUFDVixPQUFPO0FBQUEsRUFDUixJQUNPO0FBQUEsSUFDTixNQUFNQSxFQUFJO0FBQUEsSUFDVixPQUFPVjtBQUFBLEVBQ1I7QUFDRDtBQUNBLFNBQVN3QixHQUFTQyxJQUFNLElBQUk7QUFDM0IsTUFBSVosSUFBUVksRUFBSSxLQUFLLEdBQ2pCQyxJQUFTLENBQUMsR0FDVlo7QUFFSixPQURBSCxJQUFLLEdBQ0VBLElBQUtFLEVBQU0sVUFBUTtBQUV6QixRQURBQyxJQUFLRCxFQUFNRixHQUFJLEdBQ1hHLE1BQU87QUFBQSxLQUFRQSxNQUFPLE9BQU9BLE1BQU8sS0FBSztBQUM1QyxhQUFPSCxJQUFLRSxFQUFNLFdBQVdBLEVBQU1GLENBQUUsTUFBTTtBQUFBLEtBQVFFLEVBQU1GLENBQUUsTUFBTSxPQUFPRSxFQUFNRixDQUFFLE1BQU0sT0FBTSxDQUFBQTtBQUM1RjtBQUFBLElBQ0Q7QUFDQSxRQUFJRyxNQUFPLElBQUs7QUFDaEIsUUFBSUEsTUFBTyxLQUFLO0FBQ2YsTUFBQVksRUFBTyxLQUFLLEVBQUUsTUFBTWhCLEVBQUksV0FBVyxDQUFDO0FBQ3BDO0FBQUEsSUFDRDtBQUNBLFFBQUlJLE1BQU8sS0FBSztBQUVmLFVBREFILEtBQ0lDLEdBQU9DLENBQUssR0FBRztBQUNsQixRQUFBYSxFQUFPLEtBQUtSLEdBQUlMLENBQUssQ0FBQztBQUN0QjtBQUFBLE1BQ0Q7QUFDQTtBQUFBLElBQ0Q7QUFDQSxRQUFJQyxNQUFPLEtBQUs7QUFFZixVQURBSCxLQUNJQyxHQUFPQyxDQUFLLEdBQUc7QUFDbEIsUUFBQWEsRUFBTyxLQUFLUixHQUFJTCxDQUFLLENBQUM7QUFDdEI7QUFBQSxNQUNEO0FBQ0EsVUFBSUcsR0FBU0gsQ0FBSyxHQUFHO0FBQ3BCLFFBQUFhLEVBQU8sS0FBSztBQUFBLFVBQ1gsTUFBTWhCLEVBQUk7QUFBQSxVQUNWLE9BQU9ZLEdBQU1ULENBQUs7QUFBQSxRQUNuQixDQUFDO0FBQ0Q7QUFBQSxNQUNEO0FBQ0E7QUFBQSxJQUNEO0FBQ0EsUUFBSUMsTUFBTyxLQUFLO0FBRWYsVUFEQUgsS0FDSUMsR0FBT0MsQ0FBSyxHQUFHO0FBQ2xCLFFBQUFhLEVBQU8sS0FBS1IsR0FBSUwsQ0FBSyxDQUFDO0FBQ3RCO0FBQUEsTUFDRDtBQUNBO0FBQUEsSUFDRDtBQUNBLFFBQUlDLE1BQU8sS0FBSztBQUNmLGFBQU9ILElBQUtFLEVBQU0sV0FBV0EsRUFBTUYsQ0FBRSxNQUFNO0FBQUEsS0FBUUUsRUFBTUYsQ0FBRSxNQUFNLE9BQU9FLEVBQU1GLENBQUUsTUFBTSxPQUFNLENBQUFBO0FBQzVGLFVBQUlnQjtBQUNKLFVBQUlmLEdBQU9DLENBQUssTUFDZmMsSUFBUVQsR0FBSUwsQ0FBSyxHQUNiYyxFQUFNLFNBQVNqQixFQUFJLE1BQUs7QUFDM0IsUUFBQWdCLEVBQU8sS0FBSztBQUFBLFVBQ1gsTUFBTWhCLEVBQUk7QUFBQSxVQUNWLE9BQU9pQjtBQUFBLFFBQ1IsQ0FBQztBQUNEO0FBQUEsTUFDRDtBQUVELFVBQUlYLEdBQVNILENBQUssS0FDYlMsR0FBTVQsQ0FBSyxNQUFNLFFBQVE7QUFDNUIsUUFBQWEsRUFBTyxLQUFLO0FBQUEsVUFDWCxNQUFNaEIsRUFBSTtBQUFBLFVBQ1YsT0FBTztBQUFBLFlBQ04sTUFBTUEsRUFBSTtBQUFBLFlBQ1YsT0FBTztBQUFBLFVBQ1I7QUFBQSxRQUNELENBQUM7QUFDRDtBQUFBLE1BQ0Q7QUFFRDtBQUFBLElBQ0Q7QUFDQSxRQUFJLEtBQUssS0FBS0ksQ0FBRSxHQUFHO0FBQ2xCLE1BQUFILEtBQ0FlLEVBQU8sS0FBS1IsR0FBSUwsQ0FBSyxDQUFDO0FBQ3RCO0FBQUEsSUFDRDtBQUNBLFFBQUlMLEdBQW9CLEtBQUtNLENBQUUsR0FBRztBQUNqQyxNQUFBSCxLQUNBZSxFQUFPLEtBQUtILEdBQVVWLENBQUssQ0FBQztBQUM1QjtBQUFBLElBQ0Q7QUFDQTtBQUFBLEVBQ0Q7QUFDQSxTQUFPYTtBQUNSO0FBQ0EsU0FBU0UsR0FBaUJGLEdBQVE7QUFDakMsRUFBQUEsRUFBTyxLQUFLO0FBQ1osTUFBSUcsSUFBUUgsRUFBT0EsRUFBTyxJQUFJO0FBRzlCLE1BRkksQ0FBQ0csS0FBU0EsRUFBTSxTQUFTbkIsRUFBSSxZQUFZbUIsRUFBTSxVQUFVLFlBQzdEQSxJQUFRSCxFQUFPQSxFQUFPLElBQUksR0FDdEJHLEVBQU0sU0FBU25CLEVBQUksT0FBTztBQUM5QixRQUFNbkIsSUFBT08sR0FBYytCLEVBQU0sS0FBSztBQUN0QyxNQUFJLENBQUN0QyxFQUFNO0FBQ1gsUUFBTUYsSUFBTSxFQUFFLE1BQUFFLEVBQUssR0FDYnVDLElBQVNDLEdBQWNMLEdBQVEsRUFBSztBQUMxQyxNQUFJLENBQUNJLEVBQVE7QUFDYixRQUFNRSxJQUFXekIsR0FBUWhCLENBQUksRUFBRTtBQUMvQixXQUFTMEMsSUFBSyxHQUFHakQsR0FBRzhCLEdBQUltQixJQUFLRCxFQUFTLFFBQVFDO0FBQzdDLElBQUFqRCxJQUFJOEMsRUFBT0csQ0FBRSxHQUNibkIsSUFBS2tCLEVBQVNDLENBQUUsR0FDWmpELEVBQUUsU0FBUzBCLEVBQUksU0FDbEJyQixFQUFJeUIsQ0FBRSxJQUFJOUIsRUFBRSxTQUFTMEIsRUFBSSxTQUFTMUIsRUFBRSxRQUFRQSxFQUFFLFFBQVEsS0FDbEQ4QixNQUFPLFlBQVN6QixFQUFJeUIsQ0FBRSxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHekIsRUFBSXlCLENBQUUsQ0FBQyxDQUFDO0FBR2hFLFNBQU96QjtBQUNSO0FBQ0EsU0FBUzBDLEdBQWNMLEdBQVFRLEdBQVk7QUFDMUMsUUFBTUosSUFBUyxDQUFDO0FBQ2hCLE1BQUlEO0FBQ0osU0FBT0gsRUFBTyxLQUFLQSxFQUFPLFVBQVE7QUFFakMsUUFEQUcsSUFBUUgsRUFBT0EsRUFBTyxJQUFJLEdBQ3RCRyxFQUFNLFNBQVNuQixFQUFJLFFBQVFtQixFQUFNLFNBQVNuQixFQUFJLFVBQVVtQixFQUFNLFNBQVNuQixFQUFJLFNBQVNtQixFQUFNLFNBQVNuQixFQUFJLGNBQWN3QixLQUFjTCxFQUFNLFNBQVNuQixFQUFJLEtBQUs7QUFDOUosTUFBQW9CLEVBQU8sS0FBS0QsQ0FBSztBQUNqQjtBQUFBLElBQ0Q7QUFDQSxRQUFJQSxFQUFNLFNBQVNuQixFQUFJLFlBQVk7QUFDbEMsVUFBSWdCLEVBQU8sS0FBS0EsRUFBTyxPQUFRO0FBQy9CO0FBQUEsSUFDRDtBQUNBO0FBQUEsRUFDRDtBQUNBLE1BQUksRUFBQUksRUFBTyxTQUFTLEtBQUtBLEVBQU8sU0FBUyxJQUN6QztBQUFBLFFBQUlBLEVBQU8sV0FBVyxHQUFHO0FBQ3hCLFVBQUlBLEVBQU8sQ0FBQyxFQUFFLFNBQVNwQixFQUFJLE1BQU87QUFDbEMsTUFBQW9CLEVBQU8sQ0FBQyxJQUFJQSxFQUFPLENBQUMsRUFBRTtBQUFBLElBQ3ZCO0FBQ0EsV0FBSUEsRUFBTyxXQUFXLEtBQUdBLEVBQU8sS0FBSztBQUFBLE1BQ3BDLE1BQU1wQixFQUFJO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDUixDQUFDLEdBQ01vQixFQUFPLE1BQU0sQ0FBQzlDLE1BQU1BLEVBQUUsU0FBUzBCLEVBQUksS0FBSyxJQUFJb0IsSUFBUztBQUFBO0FBQzdEO0FBQ0EsU0FBU0ssR0FBa0JULEdBQVFRLEdBQVk7QUFDOUMsRUFBQVIsRUFBTyxLQUFLO0FBQ1osTUFBSUcsSUFBUUgsRUFBT0EsRUFBTyxJQUFJO0FBQzlCLE1BQUksQ0FBQ0csS0FBU0EsRUFBTSxTQUFTbkIsRUFBSSxTQUFVO0FBQzNDLE1BQUlvQixJQUFTQyxHQUFjTCxHQUFRUSxDQUFVO0FBQzdDLE1BQUtKO0FBQ0wsV0FBQUEsRUFBTyxRQUFRRCxFQUFNLEtBQUssR0FDbkJDO0FBQ1I7QUFDQSxJQUFJdEMsS0FBUSxDQUFDdkIsTUFBVTtBQUN0QixNQUFJLE9BQU9BLEtBQVUsU0FBVTtBQUMvQixRQUFNeUQsSUFBU0YsR0FBU3ZELENBQUssR0FDdkJtRSxJQUFTVixJQUFTUyxHQUFrQlQsR0FBUSxFQUFJLElBQUk7QUFDMUQsTUFBSVcsR0FDQSxJQUFJLEdBQ0puRSxJQUFNMkIsR0FBUTtBQUNsQixTQUFPLElBQUkzQixJQUFLLE1BQUttRSxJQUFTeEMsR0FBUSxHQUFHLEVBQUU1QixHQUFPbUUsQ0FBTSxPQUFPLE9BQVEsUUFBT0M7QUFDOUUsU0FBT1gsSUFBU0UsR0FBaUJGLENBQU0sSUFBSTtBQUM1QztBQUlBLFNBQVNZLEdBQVNyRSxHQUFPbUUsR0FBUTtBQUNoQyxNQUFJLENBQUNBLEtBQVVBLEVBQU8sQ0FBQyxNQUFNLFNBQVNBLEVBQU8sQ0FBQyxNQUFNLE9BQVE7QUFDNUQsUUFBTS9DLElBQU0sRUFBRSxNQUFNLE1BQU0sR0FDcEIsQ0FBQyxFQUFFa0QsR0FBR0MsR0FBR0MsR0FBR2QsQ0FBSyxJQUFJUztBQUMzQixNQUFJLEVBQUFHLEVBQUUsU0FBUzdCLEVBQUksT0FBTzhCLEVBQUUsU0FBUzlCLEVBQUksT0FBTytCLEVBQUUsU0FBUy9CLEVBQUk7QUFDL0QsV0FBSTZCLEVBQUUsU0FBUzdCLEVBQUksU0FBTXJCLEVBQUksSUFBSWtELEVBQUUsU0FBUzdCLEVBQUksU0FBUzZCLEVBQUUsUUFBUSxNQUFNQSxFQUFFLFFBQVEsTUFDL0VDLEVBQUUsU0FBUzlCLEVBQUksU0FBTXJCLEVBQUksSUFBSW1ELEVBQUUsU0FBUzlCLEVBQUksU0FBUzhCLEVBQUUsUUFBUSxNQUFNQSxFQUFFLFFBQVEsTUFDL0VDLEVBQUUsU0FBUy9CLEVBQUksU0FBTXJCLEVBQUksSUFBSW9ELEVBQUUsU0FBUy9CLEVBQUksU0FBUytCLEVBQUUsUUFBUSxNQUFNQSxFQUFFLFFBQVEsTUFDL0VkLEVBQU0sU0FBU2pCLEVBQUksU0FBTXJCLEVBQUksUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBR3NDLEVBQU0sU0FBU2pCLEVBQUksU0FBU2lCLEVBQU0sUUFBUUEsRUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUN0SHRDO0FBQ1I7QUFJQSxJQUFJcUQsS0FBbUIsQ0FBQzFELE1BQU1BLE1BQU0sZ0JBQWdCO0FBQUEsRUFDbkQsTUFBTTtBQUFBLEVBQ04sR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsT0FBTztBQUNSLElBQUksUUFJQTJELEtBQU8sQ0FBQ0MsR0FBR0gsR0FBR0ksTUFBTUQsSUFBSUMsS0FBS0osSUFBSUcsSUFJakNFLEtBQWMsQ0FBQ0MsTUFBUTtBQUMxQixNQUFJQyxJQUFVLENBQUM7QUFDZixXQUFTQyxJQUFJLEdBQUdBLElBQUlGLEVBQUksU0FBUyxHQUFHRSxLQUFLO0FBQ3hDLFFBQUksSUFBSUYsRUFBSUUsQ0FBQyxHQUNUUixJQUFJTSxFQUFJRSxJQUFJLENBQUM7QUFDakIsSUFBSSxNQUFNLFVBQVVSLE1BQU0sU0FBUU8sRUFBUSxLQUFLLE1BQU0sSUFDNUMsTUFBTSxVQUFVUCxNQUFNLFNBQVFPLEVBQVEsS0FBSyxDQUFDLEdBQUdQLENBQUMsQ0FBQyxJQUNyRE8sRUFBUSxLQUFLLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEdBQUdBLENBQUMsQ0FBQztBQUFBLEVBQ2pEO0FBQ0EsU0FBT087QUFDUixHQUNJRSxLQUF3QixDQUFDQyxNQUFpQixDQUFDSixNQUFRO0FBQ3RELE1BQUlDLElBQVVGLEdBQVlDLENBQUc7QUFDN0IsU0FBTyxDQUFDRixNQUFNO0FBQ2IsUUFBSU8sSUFBTVAsSUFBSUcsRUFBUSxRQUNsQkssSUFBTVIsS0FBSyxJQUFJRyxFQUFRLFNBQVMsSUFBSSxLQUFLLElBQUksS0FBSyxNQUFNSSxDQUFHLEdBQUcsQ0FBQyxHQUMvREUsSUFBT04sRUFBUUssQ0FBRztBQUN0QixXQUFPQyxNQUFTLFNBQVMsU0FBU0gsRUFBYUcsRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHRixJQUFNQyxDQUFHO0FBQUEsRUFDM0U7QUFDRCxHQUlJRSxJQUFxQkwsR0FBc0JQLEVBQUksR0FJL0NhLElBQWEsQ0FBQ1QsTUFBUTtBQUN6QixNQUFJVSxJQUFlLElBQ2ZwRSxJQUFNMEQsRUFBSSxJQUFJLENBQUMvQyxNQUNkQSxNQUFNLFVBQ1R5RCxJQUFlLElBQ1J6RCxLQUVELENBQ1A7QUFDRCxTQUFPeUQsSUFBZXBFLElBQU0wRDtBQUM3QixHQUlJVyxJQUFnQjtBQUFBLEVBQ25CLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ05wQjtBQUFBLElBQ0FoRTtBQUFBLElBQ0FjO0FBQUEsSUFDQWhCO0FBQUEsSUFDQXNFO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxJQUNaLEdBQUdhO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsSUFDTixHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLEVBQ0o7QUFDRCxHQUlJRyxLQUFjLENBQUMzRCxJQUFJLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSUEsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssS0FBS0EsQ0FBQyxHQUN2RTRELEtBQW9CLENBQUNDLE1BQVE7QUFDaEMsTUFBSXRCLElBQUlvQixHQUFZRSxFQUFJLENBQUMsR0FDckJyQixJQUFJbUIsR0FBWUUsRUFBSSxDQUFDLEdBQ3JCcEIsSUFBSWtCLEdBQVlFLEVBQUksQ0FBQyxHQUNyQnhFLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcscUJBQW9Ca0QsSUFBSSxxQkFBb0JDLElBQUkscUJBQW9CQztBQUFBLElBQ3ZFLEdBQUcsb0JBQW1CRixJQUFJLHFCQUFvQkMsSUFBSSxxQkFBb0JDO0FBQUEsSUFDdEUsR0FBRyxxQkFBb0JGLElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkM7QUFBQSxFQUN4RTtBQUNBLFNBQUlvQixFQUFJLFVBQVUsV0FBUXhFLEVBQUksUUFBUXdFLEVBQUksUUFDbkN4RTtBQUNSLEdBSUl5RSxLQUFVLENBQUM5RCxNQUFNLEtBQUssSUFBSSxLQUFLLElBQUlBLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLEtBQUtBLENBQUMsR0FDL0QrRCxLQUFvQixDQUFDLEVBQUUsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUMvQyxFQUFJcUMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJN0UsSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBR3lFLEdBQVFFLElBQUkscUJBQXFCQyxJQUFJLHFCQUFvQixxQkFBb0JDLENBQUM7QUFBQSxJQUNqRixHQUFHSixHQUFRRSxJQUFJLHNCQUFxQkMsSUFBSSxxQkFBcUIscUJBQW9CQyxDQUFDO0FBQUEsSUFDbEYsR0FBR0osR0FBUUUsSUFBSSxxQkFBb0JDLElBQUkscUJBQW9CLHFCQUFxQkMsQ0FBQztBQUFBLEVBQ2xGO0FBQ0EsU0FBSXZDLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJOEUsS0FBTyxDQUFDbkYsSUFBSSxNQUFNO0FBQ3JCLFFBQU1vRixJQUFNLEtBQUssSUFBSXBGLENBQUM7QUFDdEIsU0FBSW9GLEtBQU8sVUFBZXBGLElBQUksU0FDdEIsS0FBSyxLQUFLQSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUtvRixJQUFNLFNBQVEsT0FBTyxHQUFHO0FBQ2hFLEdBQ0lDLElBQW1CLENBQUMsRUFBRSxHQUFBOUIsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQWQsRUFBTSxNQUFNO0FBQzlDLE1BQUl0QyxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHOEUsR0FBSzVCLENBQUM7QUFBQSxJQUNULEdBQUc0QixHQUFLM0IsQ0FBQztBQUFBLElBQ1QsR0FBRzJCLEdBQUsxQixDQUFDO0FBQUEsRUFDVjtBQUNBLFNBQUlkLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJaUYsSUFBb0IsQ0FBQ0MsTUFBUTtBQUNoQyxNQUFJLEVBQUUsR0FBQWhDLEdBQUcsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLE9BQUFkLEVBQU0sSUFBSTBDLEVBQWlCRSxDQUFHLEdBQ3pDbEYsSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBRyxxQkFBb0JrRCxJQUFJLG9CQUFtQkMsSUFBSSxxQkFBb0JDO0FBQUEsSUFDdEUsR0FBRyxxQkFBb0JGLElBQUksb0JBQW1CQyxJQUFJLHFCQUFvQkM7QUFBQSxJQUN0RSxHQUFHLHFCQUFvQkYsSUFBSSxvQkFBbUJDLElBQUkscUJBQW9CQztBQUFBLEVBQ3ZFO0FBQ0EsU0FBSWQsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUltRixLQUFPLENBQUN4RixJQUFJLE1BQU07QUFDckIsUUFBTW9GLElBQU0sS0FBSyxJQUFJcEYsQ0FBQztBQUN0QixTQUFJb0YsSUFBTSxZQUFrQixLQUFLLEtBQUtwRixDQUFDLEtBQUssTUFBTSxRQUFRLEtBQUssSUFBSW9GLEdBQUssSUFBSSxHQUFHLElBQUksU0FDNUVwRixJQUFJO0FBQ1osR0FDSXlGLElBQW1CLENBQUMsRUFBRSxHQUFBbEMsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQWQsRUFBTSxHQUFHcEMsSUFBTyxVQUFVO0FBQzVELE1BQUlGLElBQU07QUFBQSxJQUNULE1BQUFFO0FBQUEsSUFDQSxHQUFHaUYsR0FBS2pDLENBQUM7QUFBQSxJQUNULEdBQUdpQyxHQUFLaEMsQ0FBQztBQUFBLElBQ1QsR0FBR2dDLEdBQUsvQixDQUFDO0FBQUEsRUFDVjtBQUNBLFNBQUlkLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJcUYsSUFBb0IsQ0FBQyxFQUFFLEdBQUFWLEdBQUcsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLE9BQUF2QyxFQUFNLE1BQU07QUFDL0MsRUFBSXFDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSTdFLElBQU1vRixFQUFpQjtBQUFBLElBQzFCLEdBQUdULElBQUkscUJBQXFCQyxJQUFJLG9CQUFvQixxQkFBb0JDO0FBQUEsSUFDeEUsR0FBR0YsSUFBSSxzQkFBcUJDLElBQUkscUJBQXFCLHFCQUFvQkM7QUFBQSxJQUN6RSxHQUFHRixJQUFJLHFCQUFvQkMsSUFBSSxxQkFBb0IscUJBQXFCQztBQUFBLEVBQ3pFLENBQUM7QUFDRCxTQUFJdkMsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUlzRixLQUFnQjtBQUFBLEVBQ25CLEdBQUdqQjtBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFNBQVM7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsSUFDVCxLQUFLLENBQUN6RixNQUFVOEYsR0FBa0JPLEVBQWtCckcsQ0FBSyxDQUFDO0FBQUEsSUFDMUQsT0FBTzhGO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsS0FBSyxDQUFDOUYsTUFBVXlHLEVBQWtCZCxHQUFrQjNGLENBQUssQ0FBQztBQUFBLElBQzFELE9BQU8yRjtBQUFBLEVBQ1I7QUFDRCxHQUlJZ0IsSUFBZSxDQUFDQyxPQUFTQSxJQUFNQSxJQUFNLE9BQU8sSUFBSUEsSUFBTSxNQUFNQSxHQUk1REEsS0FBTSxDQUFDQyxHQUFNQyxNQUNURCxFQUFLLElBQUksQ0FBQ0QsR0FBS3hCLEdBQUtOLE1BQVE7QUFDbEMsTUFBSThCLE1BQVEsT0FBUSxRQUFPQTtBQUMzQixNQUFJRyxJQUFhSixFQUFhQyxDQUFHO0FBQ2pDLFNBQUl4QixNQUFRLEtBQUt5QixFQUFLekIsSUFBTSxDQUFDLE1BQU0sU0FBZTJCLElBQzNDRCxFQUFHQyxJQUFhSixFQUFhN0IsRUFBSU0sSUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRCxDQUFDLEVBQUUsT0FBTyxDQUFDNEIsR0FBS0MsTUFDWCxDQUFDRCxFQUFJLFVBQVVDLE1BQVMsVUFBVUQsRUFBSUEsRUFBSSxTQUFTLENBQUMsTUFBTSxVQUM3REEsRUFBSSxLQUFLQyxDQUFJLEdBQ05ELE1BRVJBLEVBQUksS0FBS0MsSUFBT0QsRUFBSUEsRUFBSSxTQUFTLENBQUMsQ0FBQyxHQUM1QkEsSUFDTCxDQUFDLENBQUMsR0FFRkUsSUFBa0IsQ0FBQ3BDLE1BQVE4QixHQUFJOUIsR0FBSyxDQUFDcUMsTUFBTSxLQUFLLElBQUlBLENBQUMsS0FBSyxNQUFNQSxJQUFJQSxJQUFJLE1BQU0sS0FBSyxLQUFLQSxDQUFDLENBQUMsR0FJMUZDLElBQUk7QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRCxHQUNJQyxLQUFXLEtBQUssS0FBSyxLQUNyQkMsS0FBVyxNQUFNLEtBQUssSUFJdEJDLEtBQUtILEVBQUUsQ0FBQyxJQUFJQSxFQUFFLENBQUMsR0FDZkksS0FBS0osRUFBRSxDQUFDLElBQUlBLEVBQUUsQ0FBQyxHQUNmSyxLQUFPTCxFQUFFLENBQUMsSUFBSUEsRUFBRSxDQUFDLElBQUlBLEVBQUUsQ0FBQyxJQUFJQSxFQUFFLENBQUMsR0FDL0JNLEtBQXdCLENBQUMsRUFBRSxHQUFBcEQsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQWQsRUFBTSxNQUFNO0FBQ25ELEVBQUlZLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSW1ELEtBQUtGLEtBQU9qRCxJQUFJRixJQUFJaUQsS0FBS2hELElBQUlpRCxPQUFPQyxLQUFPRixLQUFLQyxLQUNoRHpCLElBQUl2QixJQUFJbUQsR0FDUjNCLEtBQUtvQixFQUFFLENBQUMsS0FBSzdDLElBQUlvRCxLQUFLUCxFQUFFLENBQUMsSUFBSXJCLEtBQUtxQixFQUFFLENBQUMsR0FDckNoRyxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFBdUc7QUFBQSxJQUNBLEdBQUdBLE1BQU0sS0FBS0EsTUFBTSxJQUFJLFNBQVMsS0FBSyxLQUFLNUIsSUFBSUEsSUFBSUMsSUFBSUEsQ0FBQyxLQUFLb0IsRUFBRSxDQUFDLElBQUlPLEtBQUssSUFBSUE7QUFBQSxFQUM5RTtBQUNBLFNBQUl2RyxFQUFJLE1BQUdBLEVBQUksSUFBSSxLQUFLLE1BQU00RSxHQUFHRCxDQUFDLElBQUl1QixLQUFXLE1BQzdDNUQsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUl3RyxLQUF3QixDQUFDLEVBQUUsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLEdBQUFILEdBQUcsT0FBQWpFLEVBQU0sTUFBTTtBQUNuRCxNQUFJdEMsSUFBTSxFQUFFLE1BQU0sTUFBTTtBQUN4QixFQUFBeUcsS0FBS0EsTUFBTSxTQUFTLElBQUlBLElBQUksT0FBT1IsSUFDL0JNLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJSSxJQUFNRCxNQUFNLFNBQVMsSUFBSUEsSUFBSUgsS0FBSyxJQUFJQSxJQUN0Q0ssSUFBTyxLQUFLLElBQUlILENBQUMsR0FDakJJLElBQU8sS0FBSyxJQUFJSixDQUFDO0FBQ3JCLFNBQUF6RyxFQUFJLElBQUl1RyxJQUFJSSxLQUFPWCxFQUFFLENBQUMsSUFBSVksSUFBT1osRUFBRSxDQUFDLElBQUlhLElBQ3hDN0csRUFBSSxJQUFJdUcsSUFBSUksS0FBT1gsRUFBRSxDQUFDLElBQUlZLElBQU9aLEVBQUUsQ0FBQyxJQUFJYSxJQUN4QzdHLEVBQUksSUFBSXVHLElBQUlJLEtBQU9YLEVBQUUsQ0FBQyxJQUFJWSxJQUFPWixFQUFFLENBQUMsSUFBSWEsSUFDcEN2RSxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSThHLEtBQTBCLENBQUNDLEdBQUtDLE1BQVE7QUFDM0MsTUFBSUQsRUFBSSxNQUFNLFVBQVVDLEVBQUksTUFBTSxVQUFVLENBQUNELEVBQUksS0FBSyxDQUFDQyxFQUFJLEVBQUcsUUFBTztBQUNyRSxNQUFJQyxJQUFRMUIsRUFBYXdCLEVBQUksQ0FBQyxHQUMxQkcsSUFBUTNCLEVBQWF5QixFQUFJLENBQUMsR0FDMUJHLElBQUssS0FBSyxLQUFLRCxJQUFRRCxJQUFRLE9BQU8sSUFBSSxLQUFLLEtBQUssR0FBRztBQUMzRCxTQUFPLElBQUksS0FBSyxLQUFLRixFQUFJLElBQUlDLEVBQUksQ0FBQyxJQUFJRztBQUN2QyxHQUNJQyxLQUFxQixDQUFDTCxHQUFLQyxNQUFRO0FBQ3RDLE1BQUlELEVBQUksTUFBTSxVQUFVQyxFQUFJLE1BQU0sT0FBUSxRQUFPO0FBQ2pELE1BQUlDLElBQVExQixFQUFhd0IsRUFBSSxDQUFDLEdBQzFCRyxJQUFRM0IsRUFBYXlCLEVBQUksQ0FBQztBQUM5QixTQUFJLEtBQUssSUFBSUUsSUFBUUQsQ0FBSyxJQUFJLE1BQVlBLEtBQVNDLElBQVEsTUFBTSxLQUFLLEtBQUtBLElBQVFELENBQUssS0FDakZDLElBQVFEO0FBQ2hCLEdBQ0lJLEtBQXNCLENBQUNOLEdBQUtDLE1BQVE7QUFDdkMsTUFBSUQsRUFBSSxNQUFNLFVBQVVDLEVBQUksTUFBTSxVQUFVLENBQUNELEVBQUksS0FBSyxDQUFDQyxFQUFJLEVBQUcsUUFBTztBQUNyRSxNQUFJQyxJQUFRMUIsRUFBYXdCLEVBQUksQ0FBQyxHQUMxQkcsSUFBUTNCLEVBQWF5QixFQUFJLENBQUMsR0FDMUJHLElBQUssS0FBSyxLQUFLRCxJQUFRRCxJQUFRLE9BQU8sSUFBSSxLQUFLLEtBQUssR0FBRztBQUMzRCxTQUFPLElBQUksS0FBSyxLQUFLRixFQUFJLElBQUlDLEVBQUksQ0FBQyxJQUFJRztBQUN2QyxHQUlJRyxJQUFlLENBQUNDLE1BQVE7QUFDM0IsTUFBSUMsSUFBTUQsRUFBSSxPQUFPLENBQUNDLEdBQUtELE1BQVE7QUFDbEMsUUFBSUEsTUFBUSxRQUFRO0FBQ25CLFVBQUlFLElBQU1GLElBQU0sS0FBSyxLQUFLO0FBQzFCLE1BQUFDLEVBQUksT0FBTyxLQUFLLElBQUlDLENBQUcsR0FDdkJELEVBQUksT0FBTyxLQUFLLElBQUlDLENBQUc7QUFBQSxJQUN4QjtBQUNBLFdBQU9EO0FBQUEsRUFDUixHQUFHO0FBQUEsSUFDRixLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsRUFDTixDQUFDLEdBQ0dFLElBQVEsS0FBSyxNQUFNRixFQUFJLEtBQUtBLEVBQUksR0FBRyxJQUFJLE1BQU0sS0FBSztBQUN0RCxTQUFPRSxJQUFRLElBQUksTUFBTUEsSUFBUUE7QUFDbEMsR0FJSUMsS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU8sQ0FBQyxhQUFhO0FBQUEsRUFDckIsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLElBQ1YsR0FBRyxDQUFDLEdBQUcsS0FBSztBQUFBLElBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFVBQVUsRUFBRSxLQUFLckIsR0FBc0I7QUFBQSxFQUN2QyxRQUFRLEVBQUUsS0FBS0UsR0FBc0I7QUFBQSxFQUNyQyxhQUFhO0FBQUEsSUFDWixHQUFHO0FBQUEsTUFDRixLQUFLdEM7QUFBQSxNQUNMLE9BQU80QjtBQUFBLElBQ1I7QUFBQSxJQUNBLEdBQUc1QjtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQUEsRUFDQSxZQUFZLEVBQUUsR0FBRzJDLEdBQXdCO0FBQUEsRUFDekMsU0FBUyxFQUFFLEdBQUdRLEVBQWE7QUFDNUIsR0FJSU0sSUFBa0IsQ0FBQyxFQUFFLEdBQUFyQixHQUFHLEdBQUFoRCxHQUFHLEdBQUFILEdBQUcsT0FBQWQsRUFBTSxHQUFHcEMsSUFBTyxVQUFVO0FBQzNELEVBQUlxRCxNQUFNLFdBQVFBLElBQUksSUFDbEJILE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJekQsSUFBSSxLQUFLLEtBQUs0RCxJQUFJQSxJQUFJSCxJQUFJQSxDQUFDLEdBQzNCcEQsSUFBTTtBQUFBLElBQ1QsTUFBQUU7QUFBQSxJQUNBLEdBQUFxRztBQUFBLElBQ0EsR0FBQTVHO0FBQUEsRUFDRDtBQUNBLFNBQUlBLE1BQUdLLEVBQUksSUFBSXVGLEVBQWEsS0FBSyxNQUFNbkMsR0FBR0csQ0FBQyxJQUFJLE1BQU0sS0FBSyxFQUFFLElBQ3hEakIsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUk2SCxJQUFrQixDQUFDLEVBQUUsR0FBQXRCLEdBQUcsR0FBQTVHLEdBQUcsR0FBQThHLEdBQUcsT0FBQW5FLEVBQU0sR0FBR3BDLElBQU8sVUFBVTtBQUMzRCxFQUFJdUcsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUl6RyxJQUFNO0FBQUEsSUFDVCxNQUFBRTtBQUFBLElBQ0EsR0FBQXFHO0FBQUEsSUFDQSxHQUFHNUcsSUFBSUEsSUFBSSxLQUFLLElBQUk4RyxJQUFJLE1BQU0sS0FBSyxFQUFFLElBQUk7QUFBQSxJQUN6QyxHQUFHOUcsSUFBSUEsSUFBSSxLQUFLLElBQUk4RyxJQUFJLE1BQU0sS0FBSyxFQUFFLElBQUk7QUFBQSxFQUMxQztBQUNBLFNBQUluRSxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSThILEtBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsR0FDckNDLEtBQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FJckNDLElBQU07QUFBQSxFQUNULEdBQUcsU0FBUTtBQUFBLEVBQ1gsR0FBRztBQUFBLEVBQ0gsR0FBRyxTQUFRO0FBQ1osR0FDSUMsSUFBTTtBQUFBLEVBQ1QsR0FBRyxTQUFRO0FBQUEsRUFDWCxHQUFHO0FBQUEsRUFDSCxHQUFHLFNBQVE7QUFDWixHQUNJQyxLQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLEdBQ3JDQyxLQUFNLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEdBSXJDQyxLQUFPLENBQUN6SCxNQUFNLEtBQUssSUFBSUEsR0FBRyxDQUFDLElBQUlvSCxLQUFNLEtBQUssSUFBSXBILEdBQUcsQ0FBQyxLQUFLLE1BQU1BLElBQUksTUFBTW1ILElBQ3ZFTyxLQUFzQixDQUFDLEVBQUUsR0FBQTlCLEdBQUcsR0FBQWhELEdBQUcsR0FBQUgsR0FBRyxPQUFBZCxFQUFNLE1BQU07QUFDakQsRUFBSWlFLE1BQU0sV0FBUUEsSUFBSSxJQUNsQmhELE1BQU0sV0FBUUEsSUFBSSxJQUNsQkgsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUlrRixLQUFNL0IsSUFBSSxNQUFNLEtBQ2hCZ0MsSUFBS2hGLElBQUksTUFBTStFLEdBQ2ZFLElBQUtGLElBQUtsRixJQUFJLEtBQ2RwRCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHb0ksR0FBS0csQ0FBRSxJQUFJTixFQUFJO0FBQUEsSUFDbEIsR0FBR0csR0FBS0UsQ0FBRSxJQUFJTCxFQUFJO0FBQUEsSUFDbEIsR0FBR0csR0FBS0ksQ0FBRSxJQUFJUCxFQUFJO0FBQUEsRUFDbkI7QUFDQSxTQUFJM0YsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUl5SSxLQUFvQixDQUFDQyxNQUFRckQsRUFBa0JnRCxHQUFvQkssQ0FBRyxDQUFDLEdBSXZFQyxLQUFNLENBQUM3RyxNQUFVQSxJQUFRaUcsS0FBTSxLQUFLLEtBQUtqRyxDQUFLLEtBQUtnRyxLQUFNaEcsSUFBUSxNQUFNLEtBQ3ZFOEcsS0FBc0IsQ0FBQyxFQUFFLEdBQUFqRSxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBdkMsRUFBTSxNQUFNO0FBQ2pELEVBQUlxQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUlnRSxJQUFLRixHQUFJaEUsSUFBSXNELEVBQUksQ0FBQyxHQUNsQmEsSUFBS0gsR0FBSS9ELElBQUlxRCxFQUFJLENBQUMsR0FDbEJjLElBQUtKLEdBQUk5RCxJQUFJb0QsRUFBSSxDQUFDLEdBQ2xCakksSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBRyxNQUFNOEksSUFBSztBQUFBLElBQ2QsR0FBRyxPQUFPRCxJQUFLQztBQUFBLElBQ2YsR0FBRyxPQUFPQSxJQUFLQztBQUFBLEVBQ2hCO0FBQ0EsU0FBSXpHLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJZ0osS0FBb0IsQ0FBQzlELE1BQVE7QUFDaEMsTUFBSWxGLElBQU00SSxHQUFvQjNELEVBQWtCQyxDQUFHLENBQUM7QUFDcEQsU0FBSUEsRUFBSSxNQUFNQSxFQUFJLEtBQUtBLEVBQUksTUFBTUEsRUFBSSxNQUFHbEYsRUFBSSxJQUFJQSxFQUFJLElBQUksSUFDakRBO0FBQ1IsR0FJSWlKLEtBQUksS0FBSyxNQUFNLEtBQUssSUFDcEJDLEtBQU8sS0FBSyxJQUFJRCxFQUFDLEdBQ2pCRSxLQUFPLEtBQUssSUFBSUYsRUFBQyxHQUNqQkcsS0FBUyxNQUFNLEtBQUssSUFBSSxNQUFNLEdBQUcsR0FJakNDLEtBQXFCLENBQUMsRUFBRSxHQUFBOUMsR0FBRyxHQUFBNUcsR0FBRyxHQUFBOEcsR0FBRyxPQUFBbkUsRUFBTSxNQUFNO0FBQ2hELEVBQUlpRSxNQUFNLFdBQVFBLElBQUksSUFDbEI1RyxNQUFNLFdBQVFBLElBQUksSUFDbEI4RyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSXpHLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLElBQUksS0FBSyxJQUFJdUcsSUFBSSxJQUFJNkMsRUFBTSxJQUFJLEtBQUs7QUFBQSxFQUNyQyxHQUNJRSxLQUFLLEtBQUssSUFBSSxTQUFRM0osSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQ3hDNEosSUFBSUQsSUFBSSxLQUFLLElBQUk3QyxJQUFJLE1BQU0sS0FBSyxLQUFLd0MsRUFBQyxHQUN0Q08sSUFBSUYsSUFBSSxLQUFLLElBQUk3QyxJQUFJLE1BQU0sS0FBSyxLQUFLd0MsRUFBQztBQUMxQyxTQUFBakosRUFBSSxJQUFJdUosSUFBSUwsS0FBT00sSUFBSSxPQUFNTCxJQUM3Qm5KLEVBQUksSUFBSXVKLElBQUlKLEtBQU9LLElBQUksT0FBTU4sSUFDekI1RyxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSXlKLEtBQXFCLENBQUMsRUFBRSxHQUFBbEQsR0FBRyxHQUFBaEQsR0FBRyxHQUFBSCxHQUFHLE9BQUFkLEVBQU0sTUFBTTtBQUNoRCxFQUFJaUUsTUFBTSxXQUFRQSxJQUFJLElBQ2xCaEQsTUFBTSxXQUFRQSxJQUFJLElBQ2xCSCxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSW1HLElBQUloRyxJQUFJMkYsS0FBTzlGLElBQUkrRixJQUNuQkssSUFBSSxRQUFPcEcsSUFBSThGLEtBQU8zRixJQUFJNEYsS0FDMUJHLElBQUksS0FBSyxLQUFLQyxJQUFJQSxJQUFJQyxJQUFJQSxDQUFDLEdBQzNCeEosSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBR29KLEtBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxRQUFRN0MsQ0FBQztBQUFBLElBQ3RDLEdBQUcsS0FBSyxJQUFJLElBQUksUUFBTytDLENBQUMsS0FBSyxTQUFRLElBQUk7QUFBQSxFQUMxQztBQUNBLFNBQUl0SixFQUFJLE1BQUdBLEVBQUksSUFBSXVGLEdBQWMsS0FBSyxNQUFNaUUsR0FBR0QsQ0FBQyxJQUFJTixNQUFLLEtBQUssS0FBSyxHQUFHLElBQ2xFM0csTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUkwSixLQUFxQixDQUFDL0osTUFBTTBKLEdBQW1CekIsRUFBZ0JqSSxHQUFHLE1BQU0sQ0FBQyxHQUN6RWdLLEtBQXFCLENBQUNoSyxNQUFNa0ksRUFBZ0I0QixHQUFtQjlKLENBQUMsR0FBRyxNQUFNLEdBQ3pFaUssS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsY0FBYztBQUFBLEVBQ3RCLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxJQUNQLE9BQU9GO0FBQUEsSUFDUCxLQUFLLENBQUMvSixNQUFNOEksR0FBa0JpQixHQUFtQi9KLENBQUMsQ0FBQztBQUFBLEVBQ3BEO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxPQUFPZ0s7QUFBQSxJQUNQLEtBQUssQ0FBQ2hLLE1BQU1nSyxHQUFtQlgsR0FBa0JySixDQUFDLENBQUM7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsUUFBUSxNQUFNO0FBQUEsSUFDbEIsR0FBRyxDQUFDLFNBQVMsTUFBTTtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWixHQUFHdUU7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ04sS0FBS0E7QUFBQSxNQUNMLE9BQU9DO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFDRCxHQUlJMEYsS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsY0FBYztBQUFBLEVBQ3RCLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxJQUNQLE9BQU9SO0FBQUEsSUFDUCxNQUFNLENBQUMxSixNQUFNa0ksRUFBZ0JsSSxHQUFHLE1BQU07QUFBQSxJQUN0QyxLQUFLLENBQUNBLE1BQU04SSxHQUFrQlksR0FBbUIxSixDQUFDLENBQUM7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1QsT0FBTzhKO0FBQUEsSUFDUCxNQUFNLENBQUM5SixNQUFNaUksRUFBZ0JqSSxHQUFHLE1BQU07QUFBQSxJQUN0QyxLQUFLLENBQUNBLE1BQU04SixHQUFtQlQsR0FBa0JySixDQUFDLENBQUM7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsR0FBRyxNQUFNO0FBQUEsSUFDYixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsRUFDWDtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1osR0FBR3VFO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0YsS0FBS0E7QUFBQSxNQUNMLE9BQU80QjtBQUFBLElBQ1I7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLEtBQUs1QjtBQUFBLE1BQ0wsT0FBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUFBLEVBQ0EsWUFBWSxFQUFFLEdBQUdrRCxHQUFvQjtBQUFBLEVBQ3JDLFNBQVMsRUFBRSxHQUFHQyxFQUFhO0FBQzVCO0FBSUEsU0FBU3dDLEdBQWdCLEVBQUUsR0FBQXJELEdBQUcsR0FBQUMsR0FBRyxHQUFBOUMsR0FBRyxPQUFBdEIsRUFBTSxHQUFHO0FBQzVDLEVBQUFtRSxJQUFJbEIsRUFBYWtCLE1BQU0sU0FBU0EsSUFBSSxDQUFDLEdBQ2pDQyxNQUFNLFdBQVFBLElBQUksSUFDbEI5QyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSTRGLElBQUksS0FBSyxJQUFJL0MsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUMzQnpHO0FBQ0osVUFBUSxLQUFLLE1BQU15RyxJQUFJLEVBQUUsR0FBRztBQUFBLElBQzNCLEtBQUs7QUFDSixNQUFBekcsSUFBTTtBQUFBLFFBQ0wsR0FBRzRELEtBQUssSUFBSThDLEtBQUssS0FBSyxJQUFJOEMsS0FBSztBQUFBLFFBQy9CLEdBQUc1RixLQUFLLElBQUk4QyxLQUFLLEtBQUssSUFBSThDLE1BQU0sSUFBSUEsS0FBSztBQUFBLFFBQ3pDLEdBQUc1RixLQUFLLElBQUk4QztBQUFBLE1BQ2I7QUFDQTtBQUFBLElBQ0QsS0FBSztBQUNKLE1BQUExRyxJQUFNO0FBQUEsUUFDTCxHQUFHNEQsS0FBSyxJQUFJOEMsS0FBSyxLQUFLLElBQUk4QyxNQUFNLElBQUlBLEtBQUs7QUFBQSxRQUN6QyxHQUFHNUYsS0FBSyxJQUFJOEMsS0FBSyxLQUFLLElBQUk4QyxLQUFLO0FBQUEsUUFDL0IsR0FBRzVGLEtBQUssSUFBSThDO0FBQUEsTUFDYjtBQUNBO0FBQUEsSUFDRCxLQUFLO0FBQ0osTUFBQTFHLElBQU07QUFBQSxRQUNMLEdBQUc0RCxLQUFLLElBQUk4QztBQUFBLFFBQ1osR0FBRzlDLEtBQUssSUFBSThDLEtBQUssS0FBSyxJQUFJOEMsS0FBSztBQUFBLFFBQy9CLEdBQUc1RixLQUFLLElBQUk4QyxLQUFLLEtBQUssSUFBSThDLE1BQU0sSUFBSUEsS0FBSztBQUFBLE1BQzFDO0FBQ0E7QUFBQSxJQUNELEtBQUs7QUFDSixNQUFBeEosSUFBTTtBQUFBLFFBQ0wsR0FBRzRELEtBQUssSUFBSThDO0FBQUEsUUFDWixHQUFHOUMsS0FBSyxJQUFJOEMsS0FBSyxLQUFLLElBQUk4QyxNQUFNLElBQUlBLEtBQUs7QUFBQSxRQUN6QyxHQUFHNUYsS0FBSyxJQUFJOEMsS0FBSyxLQUFLLElBQUk4QyxLQUFLO0FBQUEsTUFDaEM7QUFDQTtBQUFBLElBQ0QsS0FBSztBQUNKLE1BQUF4SixJQUFNO0FBQUEsUUFDTCxHQUFHNEQsS0FBSyxJQUFJOEMsS0FBSyxLQUFLLElBQUk4QyxNQUFNLElBQUlBLEtBQUs7QUFBQSxRQUN6QyxHQUFHNUYsS0FBSyxJQUFJOEM7QUFBQSxRQUNaLEdBQUc5QyxLQUFLLElBQUk4QyxLQUFLLEtBQUssSUFBSThDLEtBQUs7QUFBQSxNQUNoQztBQUNBO0FBQUEsSUFDRCxLQUFLO0FBQ0osTUFBQXhKLElBQU07QUFBQSxRQUNMLEdBQUc0RCxLQUFLLElBQUk4QyxLQUFLLEtBQUssSUFBSThDLEtBQUs7QUFBQSxRQUMvQixHQUFHNUYsS0FBSyxJQUFJOEM7QUFBQSxRQUNaLEdBQUc5QyxLQUFLLElBQUk4QyxLQUFLLEtBQUssSUFBSThDLE1BQU0sSUFBSUEsS0FBSztBQUFBLE1BQzFDO0FBQ0E7QUFBQSxJQUNEO0FBQVMsTUFBQXhKLElBQU07QUFBQSxRQUNkLEdBQUc0RCxLQUFLLElBQUk4QztBQUFBLFFBQ1osR0FBRzlDLEtBQUssSUFBSThDO0FBQUEsUUFDWixHQUFHOUMsS0FBSyxJQUFJOEM7QUFBQSxNQUNiO0FBQUEsRUFDRDtBQUNBLFNBQUExRyxFQUFJLE9BQU8sT0FDUHNDLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUjtBQUlBLFNBQVMrSixHQUFnQixFQUFFLEdBQUE3RyxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBZCxFQUFNLEdBQUc7QUFDNUMsRUFBSVksTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJNEMsSUFBSSxLQUFLLElBQUk5QyxHQUFHQyxHQUFHQyxDQUFDLEdBQUc0RyxJQUFJLEtBQUssSUFBSTlHLEdBQUdDLEdBQUdDLENBQUMsR0FDM0NwRCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHa0QsSUFBSUMsSUFBSUMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJNEcsS0FBSzlHLElBQUlDLElBQUlDO0FBQUEsSUFDOUMsSUFBSUYsSUFBSUMsSUFBSUMsS0FBSztBQUFBLEVBQ2xCO0FBQ0EsU0FBSTRDLElBQUlnRSxNQUFNLE1BQUdoSyxFQUFJLEtBQUtnRyxNQUFNOUMsS0FBS0MsSUFBSUMsTUFBTTRDLElBQUlnRSxNQUFNN0csSUFBSUMsS0FBSyxJQUFJNEMsTUFBTTdDLEtBQUtDLElBQUlGLE1BQU04QyxJQUFJZ0UsS0FBSyxLQUFLOUcsSUFBSUMsTUFBTTZDLElBQUlnRSxLQUFLLEtBQUssS0FDN0gxSCxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1I7QUFJQSxJQUFJaUssS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixRQUFRLEVBQUUsS0FBS0gsR0FBZ0I7QUFBQSxFQUMvQixPQUFPLENBQUMsT0FBTztBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsVUFBVSxFQUFFLEtBQUtDLEdBQWdCO0FBQUEsRUFDakMsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDdEIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLElBQ1osR0FBRztBQUFBLE1BQ0YsS0FBSzdGO0FBQUEsTUFDTCxPQUFPNEI7QUFBQSxJQUNSO0FBQUEsSUFDQSxHQUFHNUI7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxPQUFPO0FBQUEsTUFDTixLQUFLQTtBQUFBLE1BQ0wsT0FBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUFBLEVBQ0EsWUFBWSxFQUFFLEdBQUcyQyxHQUF3QjtBQUFBLEVBQ3pDLFNBQVMsRUFBRSxHQUFHUSxFQUFhO0FBQzVCO0FBSUEsU0FBUzRDLEdBQWdCLEVBQUUsR0FBQXpELEdBQUcsR0FBQUMsR0FBRyxHQUFBSCxHQUFHLE9BQUFqRSxFQUFNLEdBQUc7QUFDNUMsRUFBQW1FLElBQUlsQixFQUFha0IsTUFBTSxTQUFTQSxJQUFJLENBQUMsR0FDakNDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkgsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUk0RCxJQUFLNUQsSUFBSUcsS0FBS0gsSUFBSSxNQUFLQSxJQUFJLElBQUlBLElBQy9CNkQsSUFBS0QsS0FBTUEsSUFBSzVELEtBQUssSUFBSSxLQUFLLElBQUlFLElBQUksS0FBSyxJQUFJLENBQUMsR0FDaER6RztBQUNKLFVBQVEsS0FBSyxNQUFNeUcsSUFBSSxFQUFFLEdBQUc7QUFBQSxJQUMzQixLQUFLO0FBQ0osTUFBQXpHLElBQU07QUFBQSxRQUNMLEdBQUdtSztBQUFBLFFBQ0gsR0FBR0M7QUFBQSxRQUNILEdBQUcsSUFBSTdELElBQUk0RDtBQUFBLE1BQ1o7QUFDQTtBQUFBLElBQ0QsS0FBSztBQUNKLE1BQUFuSyxJQUFNO0FBQUEsUUFDTCxHQUFHb0s7QUFBQSxRQUNILEdBQUdEO0FBQUEsUUFDSCxHQUFHLElBQUk1RCxJQUFJNEQ7QUFBQSxNQUNaO0FBQ0E7QUFBQSxJQUNELEtBQUs7QUFDSixNQUFBbkssSUFBTTtBQUFBLFFBQ0wsR0FBRyxJQUFJdUcsSUFBSTREO0FBQUEsUUFDWCxHQUFHQTtBQUFBLFFBQ0gsR0FBR0M7QUFBQSxNQUNKO0FBQ0E7QUFBQSxJQUNELEtBQUs7QUFDSixNQUFBcEssSUFBTTtBQUFBLFFBQ0wsR0FBRyxJQUFJdUcsSUFBSTREO0FBQUEsUUFDWCxHQUFHQztBQUFBLFFBQ0gsR0FBR0Q7QUFBQSxNQUNKO0FBQ0E7QUFBQSxJQUNELEtBQUs7QUFDSixNQUFBbkssSUFBTTtBQUFBLFFBQ0wsR0FBR29LO0FBQUEsUUFDSCxHQUFHLElBQUk3RCxJQUFJNEQ7QUFBQSxRQUNYLEdBQUdBO0FBQUEsTUFDSjtBQUNBO0FBQUEsSUFDRCxLQUFLO0FBQ0osTUFBQW5LLElBQU07QUFBQSxRQUNMLEdBQUdtSztBQUFBLFFBQ0gsR0FBRyxJQUFJNUQsSUFBSTREO0FBQUEsUUFDWCxHQUFHQztBQUFBLE1BQ0o7QUFDQTtBQUFBLElBQ0Q7QUFBUyxNQUFBcEssSUFBTTtBQUFBLFFBQ2QsR0FBRyxJQUFJdUcsSUFBSTREO0FBQUEsUUFDWCxHQUFHLElBQUk1RCxJQUFJNEQ7QUFBQSxRQUNYLEdBQUcsSUFBSTVELElBQUk0RDtBQUFBLE1BQ1o7QUFBQSxFQUNEO0FBQ0EsU0FBQW5LLEVBQUksT0FBTyxPQUNQc0MsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSO0FBSUEsU0FBU3FLLEdBQWdCLEVBQUUsR0FBQW5ILEdBQUcsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLE9BQUFkLEVBQU0sR0FBRztBQUM1QyxFQUFJWSxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUk0QyxJQUFJLEtBQUssSUFBSTlDLEdBQUdDLEdBQUdDLENBQUMsR0FBRzRHLElBQUksS0FBSyxJQUFJOUcsR0FBR0MsR0FBR0MsQ0FBQyxHQUMzQ3BELElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUdnRyxNQUFNZ0UsSUFBSSxLQUFLaEUsSUFBSWdFLE1BQU0sSUFBSSxLQUFLLElBQUloRSxJQUFJZ0UsSUFBSSxDQUFDO0FBQUEsSUFDbEQsR0FBRyxPQUFNaEUsSUFBSWdFO0FBQUEsRUFDZDtBQUNBLFNBQUloRSxJQUFJZ0UsTUFBTSxNQUFHaEssRUFBSSxLQUFLZ0csTUFBTTlDLEtBQUtDLElBQUlDLE1BQU00QyxJQUFJZ0UsTUFBTTdHLElBQUlDLEtBQUssSUFBSTRDLE1BQU03QyxLQUFLQyxJQUFJRixNQUFNOEMsSUFBSWdFLEtBQUssS0FBSzlHLElBQUlDLE1BQU02QyxJQUFJZ0UsS0FBSyxLQUFLLEtBQzdIMUgsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSO0FBSUEsSUFBSXNLLEtBQVcsQ0FBQy9DLEdBQUtnRCxNQUFTO0FBQzdCLFVBQVFBLEdBQU07QUFBQSxJQUNiLEtBQUs7QUFBTyxhQUFPLENBQUNoRDtBQUFBLElBQ3BCLEtBQUs7QUFBTyxhQUFPQSxJQUFNLEtBQUssS0FBSztBQUFBLElBQ25DLEtBQUs7QUFBUSxhQUFPQSxJQUFNLEtBQUs7QUFBQSxJQUMvQixLQUFLO0FBQVEsYUFBT0EsSUFBTTtBQUFBLEVBQzNCO0FBQ0QsR0FJSWlELEtBQVUsSUFBSSxPQUFPLGdCQUFnQi9LLEVBQUssR0FBR0UsQ0FBQyxHQUFHTixFQUFHLEdBQUdNLENBQUMsR0FBR04sRUFBRyxlQUFlRSxFQUFPLFlBQVksR0FDaEdrTCxLQUFpQixDQUFDN0wsTUFBVTtBQUMvQixNQUFJTSxJQUFRTixFQUFNLE1BQU00TCxFQUFPO0FBQy9CLE1BQUksQ0FBQ3RMLEVBQU87QUFDWixNQUFJYyxJQUFNLEVBQUUsTUFBTSxNQUFNO0FBQ3hCLFNBQUlkLEVBQU0sQ0FBQyxNQUFNLFNBQVFjLEVBQUksSUFBSSxDQUFDZCxFQUFNLENBQUMsSUFDaENBLEVBQU0sQ0FBQyxNQUFNLFVBQVVBLEVBQU0sQ0FBQyxNQUFNLFdBQVFjLEVBQUksSUFBSXNLLEdBQVNwTCxFQUFNLENBQUMsR0FBR0EsRUFBTSxDQUFDLENBQUMsSUFDcEZBLEVBQU0sQ0FBQyxNQUFNLFdBQVFjLEVBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUdkLEVBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQ3BFQSxFQUFNLENBQUMsTUFBTSxXQUFRYyxFQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHZCxFQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUNwRUEsRUFBTSxDQUFDLE1BQU0sU0FBUWMsRUFBSSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHZCxFQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsSUFDbkVBLEVBQU0sQ0FBQyxNQUFNLFdBQVFjLEVBQUksUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDZCxFQUFNLENBQUMsQ0FBQyxDQUFDLElBQ3JFYztBQUNSO0FBSUEsU0FBUzBLLEdBQVM5TCxHQUFPbUUsR0FBUTtBQUNoQyxNQUFJLENBQUNBLEtBQVVBLEVBQU8sQ0FBQyxNQUFNLFNBQVNBLEVBQU8sQ0FBQyxNQUFNLE9BQVE7QUFDNUQsUUFBTS9DLElBQU0sRUFBRSxNQUFNLE1BQU0sR0FDcEIsQ0FBQyxFQUFFeUcsR0FBR0MsR0FBR0gsR0FBR2pFLENBQUssSUFBSVM7QUFDM0IsTUFBSTBELEVBQUUsU0FBU3BGLEVBQUksTUFBTTtBQUN4QixRQUFJb0YsRUFBRSxTQUFTcEYsRUFBSSxXQUFZO0FBQy9CLElBQUFyQixFQUFJLElBQUl5RyxFQUFFO0FBQUEsRUFDWDtBQUNBLE1BQUlDLEVBQUUsU0FBU3JGLEVBQUksTUFBTTtBQUN4QixRQUFJcUYsRUFBRSxTQUFTckYsRUFBSSxJQUFLO0FBQ3hCLElBQUFyQixFQUFJLElBQUkwRyxFQUFFLFFBQVE7QUFBQSxFQUNuQjtBQUNBLE1BQUlILEVBQUUsU0FBU2xGLEVBQUksTUFBTTtBQUN4QixRQUFJa0YsRUFBRSxTQUFTbEYsRUFBSSxJQUFLO0FBQ3hCLElBQUFyQixFQUFJLElBQUl1RyxFQUFFLFFBQVE7QUFBQSxFQUNuQjtBQUNBLFNBQUlqRSxFQUFNLFNBQVNqQixFQUFJLFNBQU1yQixFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdzQyxFQUFNLFNBQVNqQixFQUFJLFNBQVNpQixFQUFNLFFBQVFBLEVBQU0sUUFBUSxHQUFHLENBQUMsSUFDdEh0QztBQUNSO0FBSUEsSUFBSTJLLEtBQWdCO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sUUFBUSxFQUFFLEtBQUtULEdBQWdCO0FBQUEsRUFDL0IsVUFBVSxFQUFFLEtBQUtHLEdBQWdCO0FBQUEsRUFDakMsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDdEIsT0FBTztBQUFBLEVBQ1AsT0FBTyxDQUFDSyxJQUFVRCxFQUFjO0FBQUEsRUFDaEMsV0FBVyxDQUFDOUssTUFBTSxPQUFPQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sSUFBSUEsRUFBRSxNQUFNLFNBQVNBLEVBQUUsSUFBSSxNQUFNLE1BQU0sTUFBTSxJQUFJQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sTUFBTSxNQUFNLEdBQUdBLEVBQUUsUUFBUSxJQUFJLE1BQU1BLEVBQUUsS0FBSyxLQUFLLEVBQUU7QUFBQSxFQUNyTCxhQUFhO0FBQUEsSUFDWixHQUFHO0FBQUEsTUFDRixLQUFLdUU7QUFBQSxNQUNMLE9BQU80QjtBQUFBLElBQ1I7QUFBQSxJQUNBLEdBQUc1QjtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQUEsRUFDQSxZQUFZLEVBQUUsR0FBRzJDLEdBQXdCO0FBQUEsRUFDekMsU0FBUyxFQUFFLEdBQUdRLEVBQWE7QUFDNUI7QUFJQSxTQUFTc0QsR0FBZ0IsRUFBRSxHQUFBbkUsR0FBRyxHQUFBQyxHQUFHLEdBQUEvRixHQUFHLE9BQUEyQixFQUFNLEdBQUc7QUFDNUMsRUFBQW1FLElBQUlsQixFQUFha0IsTUFBTSxTQUFTQSxJQUFJLENBQUMsR0FDakNDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQi9GLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJNkksSUFBSSxLQUFLLElBQUkvQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQzNCekc7QUFDSixVQUFRLEtBQUssTUFBTXlHLElBQUksRUFBRSxHQUFHO0FBQUEsSUFDM0IsS0FBSztBQUNKLE1BQUF6RyxJQUFNO0FBQUEsUUFDTFc7QUFBQSxRQUNBLEdBQUdBLEtBQUssSUFBSStGLElBQUk4QztBQUFBLFFBQ2hCLEdBQUc3SSxLQUFLLElBQUkrRjtBQUFBLE1BQ2I7QUFDQTtBQUFBLElBQ0QsS0FBSztBQUNKLE1BQUExRyxJQUFNO0FBQUEsUUFDTCxHQUFHVyxLQUFLLElBQUkrRixJQUFJOEM7QUFBQSxRQUNoQixHQUFHN0k7QUFBQSxRQUNILEdBQUdBLEtBQUssSUFBSStGO0FBQUEsTUFDYjtBQUNBO0FBQUEsSUFDRCxLQUFLO0FBQ0osTUFBQTFHLElBQU07QUFBQSxRQUNMLEdBQUdXLEtBQUssSUFBSStGO0FBQUEsUUFDWixHQUFHL0Y7QUFBQSxRQUNILEdBQUdBLEtBQUssSUFBSStGLElBQUk4QztBQUFBLE1BQ2pCO0FBQ0E7QUFBQSxJQUNELEtBQUs7QUFDSixNQUFBeEosSUFBTTtBQUFBLFFBQ0wsR0FBR1csS0FBSyxJQUFJK0Y7QUFBQSxRQUNaLEdBQUcvRixLQUFLLElBQUkrRixJQUFJOEM7QUFBQSxRQUNoQixHQUFHN0k7QUFBQSxNQUNKO0FBQ0E7QUFBQSxJQUNELEtBQUs7QUFDSixNQUFBWCxJQUFNO0FBQUEsUUFDTCxHQUFHVyxLQUFLLElBQUkrRixJQUFJOEM7QUFBQSxRQUNoQixHQUFHN0ksS0FBSyxJQUFJK0Y7QUFBQSxRQUNaLEdBQUcvRjtBQUFBLE1BQ0o7QUFDQTtBQUFBLElBQ0QsS0FBSztBQUNKLE1BQUFYLElBQU07QUFBQSxRQUNMVztBQUFBLFFBQ0EsR0FBR0EsS0FBSyxJQUFJK0Y7QUFBQSxRQUNaLEdBQUcvRixLQUFLLElBQUkrRixJQUFJOEM7QUFBQSxNQUNqQjtBQUNBO0FBQUEsSUFDRDtBQUFTLE1BQUF4SixJQUFNO0FBQUEsUUFDZCxHQUFHVyxLQUFLLElBQUkrRjtBQUFBLFFBQ1osR0FBRy9GLEtBQUssSUFBSStGO0FBQUEsUUFDWixHQUFHL0YsS0FBSyxJQUFJK0Y7QUFBQSxNQUNiO0FBQUEsRUFDRDtBQUNBLFNBQUExRyxFQUFJLE9BQU8sT0FDUHNDLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUjtBQUlBLFNBQVM2SyxHQUFnQixFQUFFLEdBQUEzSCxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBZCxFQUFNLEdBQUc7QUFDNUMsRUFBSVksTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJNEMsSUFBSSxLQUFLLElBQUk5QyxHQUFHQyxHQUFHQyxDQUFDLEdBQUc0RyxJQUFJLEtBQUssSUFBSTlHLEdBQUdDLEdBQUdDLENBQUMsR0FDM0NwRCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHZ0csTUFBTSxJQUFJLElBQUksSUFBSWdFLElBQUloRTtBQUFBLElBQ3pCLEdBQUdBO0FBQUEsRUFDSjtBQUNBLFNBQUlBLElBQUlnRSxNQUFNLE1BQUdoSyxFQUFJLEtBQUtnRyxNQUFNOUMsS0FBS0MsSUFBSUMsTUFBTTRDLElBQUlnRSxNQUFNN0csSUFBSUMsS0FBSyxJQUFJNEMsTUFBTTdDLEtBQUtDLElBQUlGLE1BQU04QyxJQUFJZ0UsS0FBSyxLQUFLOUcsSUFBSUMsTUFBTTZDLElBQUlnRSxLQUFLLEtBQUssS0FDN0gxSCxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1I7QUFJQSxJQUFJOEssS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixRQUFRLEVBQUUsS0FBS0YsR0FBZ0I7QUFBQSxFQUMvQixPQUFPLENBQUMsT0FBTztBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsVUFBVSxFQUFFLEtBQUtDLEdBQWdCO0FBQUEsRUFDakMsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDdEIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLElBQ1osR0FBRztBQUFBLE1BQ0YsS0FBSzNHO0FBQUEsTUFDTCxPQUFPNEI7QUFBQSxJQUNSO0FBQUEsSUFDQSxHQUFHNUI7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxPQUFPO0FBQUEsTUFDTixLQUFLQTtBQUFBLE1BQ0wsT0FBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUFBLEVBQ0EsWUFBWSxFQUFFLEdBQUcyQyxHQUF3QjtBQUFBLEVBQ3pDLFNBQVMsRUFBRSxHQUFHUSxFQUFhO0FBQzVCO0FBSUEsU0FBU3lELEdBQWdCLEVBQUUsR0FBQXRFLEdBQUcsR0FBQXVFLEdBQUcsR0FBQTVILEdBQUcsT0FBQWQsRUFBTSxHQUFHO0FBRzVDLE1BRkkwSSxNQUFNLFdBQVFBLElBQUksSUFDbEI1SCxNQUFNLFdBQVFBLElBQUksSUFDbEI0SCxJQUFJNUgsSUFBSSxHQUFHO0FBQ2QsUUFBSXNELElBQUlzRSxJQUFJNUg7QUFDWixJQUFBNEgsS0FBS3RFLEdBQ0x0RCxLQUFLc0Q7QUFBQSxFQUNOO0FBQ0EsU0FBT2tFLEdBQWdCO0FBQUEsSUFDdEIsR0FBQW5FO0FBQUEsSUFDQSxHQUFHckQsTUFBTSxJQUFJLElBQUksSUFBSTRILEtBQUssSUFBSTVIO0FBQUEsSUFDOUIsR0FBRyxJQUFJQTtBQUFBLElBQ1AsT0FBQWQ7QUFBQSxFQUNELENBQUM7QUFDRjtBQUlBLFNBQVMySSxHQUFnQkMsR0FBTTtBQUM5QixNQUFJQyxJQUFNTixHQUFnQkssQ0FBSTtBQUM5QixNQUFJQyxNQUFRLE9BQVE7QUFDcEIsTUFBSXpFLElBQUl5RSxFQUFJLE1BQU0sU0FBU0EsRUFBSSxJQUFJLEdBQy9CeEssSUFBSXdLLEVBQUksTUFBTSxTQUFTQSxFQUFJLElBQUksR0FDL0JuTCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixJQUFJLElBQUkwRyxLQUFLL0Y7QUFBQSxJQUNiLEdBQUcsSUFBSUE7QUFBQSxFQUNSO0FBQ0EsU0FBSXdLLEVBQUksTUFBTSxXQUFRbkwsRUFBSSxJQUFJbUwsRUFBSSxJQUM5QkEsRUFBSSxVQUFVLFdBQVFuTCxFQUFJLFFBQVFtTCxFQUFJLFFBQ25Dbkw7QUFDUjtBQUlBLFNBQVNvTCxHQUFTeE0sR0FBT21FLEdBQVE7QUFDaEMsTUFBSSxDQUFDQSxLQUFVQSxFQUFPLENBQUMsTUFBTSxNQUFPO0FBQ3BDLFFBQU0vQyxJQUFNLEVBQUUsTUFBTSxNQUFNLEdBQ3BCLENBQUMsRUFBRXlHLEdBQUd1RSxHQUFHNUgsR0FBR2QsQ0FBSyxJQUFJUztBQUMzQixNQUFJMEQsRUFBRSxTQUFTcEYsRUFBSSxNQUFNO0FBQ3hCLFFBQUlvRixFQUFFLFNBQVNwRixFQUFJLFdBQVk7QUFDL0IsSUFBQXJCLEVBQUksSUFBSXlHLEVBQUU7QUFBQSxFQUNYO0FBQ0EsTUFBSXVFLEVBQUUsU0FBUzNKLEVBQUksTUFBTTtBQUN4QixRQUFJMkosRUFBRSxTQUFTM0osRUFBSSxJQUFLO0FBQ3hCLElBQUFyQixFQUFJLElBQUlnTCxFQUFFLFFBQVE7QUFBQSxFQUNuQjtBQUNBLE1BQUk1SCxFQUFFLFNBQVMvQixFQUFJLE1BQU07QUFDeEIsUUFBSStCLEVBQUUsU0FBUy9CLEVBQUksSUFBSztBQUN4QixJQUFBckIsRUFBSSxJQUFJb0QsRUFBRSxRQUFRO0FBQUEsRUFDbkI7QUFDQSxTQUFJZCxFQUFNLFNBQVNqQixFQUFJLFNBQU1yQixFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdzQyxFQUFNLFNBQVNqQixFQUFJLFNBQVNpQixFQUFNLFFBQVFBLEVBQU0sUUFBUSxHQUFHLENBQUMsSUFDdEh0QztBQUNSO0FBSUEsSUFBSXFMLEtBQWdCO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sUUFBUSxFQUFFLEtBQUtOLEdBQWdCO0FBQUEsRUFDL0IsVUFBVSxFQUFFLEtBQUtFLEdBQWdCO0FBQUEsRUFDakMsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDdEIsT0FBTztBQUFBLEVBQ1AsT0FBTyxDQUFDRyxFQUFRO0FBQUEsRUFDaEIsV0FBVyxDQUFDekwsTUFBTSxPQUFPQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sSUFBSUEsRUFBRSxNQUFNLFNBQVNBLEVBQUUsSUFBSSxNQUFNLE1BQU0sTUFBTSxJQUFJQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sTUFBTSxNQUFNLEdBQUdBLEVBQUUsUUFBUSxJQUFJLE1BQU1BLEVBQUUsS0FBSyxLQUFLLEVBQUU7QUFBQSxFQUNyTCxhQUFhO0FBQUEsSUFDWixHQUFHO0FBQUEsTUFDRixLQUFLdUU7QUFBQSxNQUNMLE9BQU80QjtBQUFBLElBQ1I7QUFBQSxJQUNBLEdBQUc1QjtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQUEsRUFDQSxZQUFZLEVBQUUsR0FBR2lELEdBQW1CO0FBQUEsRUFDcEMsU0FBUyxFQUFFLEdBQUdFLEVBQWE7QUFDNUIsR0FJSWdFLEtBQUssaUJBQ0xDLEtBQUssVUFDTEMsS0FBSyxXQUNMQyxLQUFLLFlBQ0xDLEtBQUs7QUFDVCxTQUFTQyxHQUFpQmhMLEdBQUc7QUFDNUIsTUFBSUEsSUFBSSxFQUFHLFFBQU87QUFDbEIsUUFBTWhCLElBQUksS0FBSyxJQUFJZ0IsR0FBRyxJQUFJNEssRUFBRTtBQUM1QixTQUFPLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHNUwsSUFBSTZMLEVBQUUsS0FBS0MsS0FBS0MsS0FBSy9MLElBQUksSUFBSTJMLEVBQUU7QUFDbEU7QUFDQSxTQUFTTSxHQUFpQmpMLEdBQUc7QUFDNUIsTUFBSUEsSUFBSSxFQUFHLFFBQU87QUFDbEIsUUFBTWhCLElBQUksS0FBSyxJQUFJZ0IsSUFBSSxLQUFLMkssRUFBRTtBQUM5QixTQUFPLEtBQUssS0FBS0UsS0FBS0MsS0FBSzlMLE1BQU0sSUFBSStMLEtBQUsvTCxJQUFJNEwsRUFBRTtBQUNqRDtBQUlBLElBQUlNLEtBQVEsQ0FBQ2xNLE1BQU0sS0FBSyxJQUFJQSxJQUFJLEtBQUssQ0FBQyxHQUNsQ21NLEtBQW9CLENBQUMsRUFBRSxHQUFBbEksR0FBRyxHQUFHLEdBQUFtSSxHQUFHLE9BQUF6SixFQUFNLE1BQU07QUFDL0MsRUFBSXNCLE1BQU0sV0FBUUEsSUFBSSxJQUNsQixNQUFNLFdBQVEsSUFBSSxJQUNsQm1JLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixRQUFNeEYsSUFBSW9GLEdBQWlCL0gsSUFBSSx1QkFBc0IsSUFBSSxzQkFBcUJtSSxDQUFDLEdBQ3pFL0IsSUFBSTJCLEdBQWlCL0gsSUFBSSxzQkFBcUIsSUFBSSxzQkFBcUJtSSxDQUFDLEdBQ3hFckYsSUFBSWlGLEdBQWlCL0gsSUFBSSxxQkFBb0IsSUFBSSxzQkFBcUJtSSxDQUFDLEdBQ3ZFL0wsSUFBTTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sR0FBRzZMLEdBQU0sb0JBQW9CdEYsSUFBSSxxQkFBcUJ5RCxJQUFJLHFCQUFvQnRELENBQUM7QUFBQSxJQUMvRSxHQUFHbUYsR0FBTSxxQkFBb0J0RixJQUFJLG9CQUFtQnlELElBQUkscUJBQW9CdEQsQ0FBQztBQUFBLElBQzdFLEdBQUdtRixHQUFNLHFCQUFvQnRGLElBQUkscUJBQW9CeUQsSUFBSSxxQkFBcUJ0RCxDQUFDO0FBQUEsRUFDaEY7QUFDQSxTQUFJcEUsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUlnTSxLQUFRLENBQUNyTSxJQUFJLE1BQU0sS0FBSyxJQUFJQSxJQUFJLEtBQUssQ0FBQyxHQUN0Q3NNLEtBQW9CLENBQUMsRUFBRSxHQUFBdEgsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUMvQyxRQUFNNEosSUFBT0YsR0FBTXJILENBQUMsR0FDZHdILElBQU9ILEdBQU1wSCxDQUFDLEdBQ2R3SCxJQUFPSixHQUFNbkgsQ0FBQyxHQUNkLElBQUkrRyxHQUFpQixxQkFBb0JNLElBQU8scUJBQW9CQyxJQUFPLHFCQUFvQkMsQ0FBSSxHQUNuR3BDLElBQUk0QixHQUFpQixzQkFBcUJNLElBQU8scUJBQXFCQyxJQUFPLHFCQUFvQkMsQ0FBSSxHQUNyRzFGLElBQUlrRixHQUFpQixxQkFBb0JNLElBQU8scUJBQW9CQyxJQUFPLHFCQUFvQkMsQ0FBSSxHQUNuR3BNLElBQU07QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLEdBQUcsTUFBSyxJQUFJLE1BQUtnSztBQUFBLElBQ2pCLEdBQUcsZ0JBQWdCLElBQUksaUJBQWlCQSxJQUFJLGlCQUFpQnREO0FBQUEsSUFDN0QsR0FBRyxpQkFBaUIsSUFBSSxnQkFBZ0JzRCxJQUFJLGlCQUFnQnREO0FBQUEsRUFDN0Q7QUFDQSxTQUFJcEUsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUlxTSxLQUFnQjtBQUFBLEVBQ25CLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxDQUFDLFNBQVM7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsSUFDUCxPQUFPUDtBQUFBLElBQ1AsS0FBSyxDQUFDbE4sTUFBVXlHLEVBQWtCeUcsR0FBa0JsTixDQUFLLENBQUM7QUFBQSxFQUMzRDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1QsT0FBT3FOO0FBQUEsSUFDUCxLQUFLLENBQUNyTixNQUFVcU4sR0FBa0JoSCxFQUFrQnJHLENBQUssQ0FBQztBQUFBLEVBQzNEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxLQUFJO0FBQUEsSUFDWCxHQUFHLENBQUMsUUFBTyxLQUFJO0FBQUEsSUFDZixHQUFHLENBQUMsUUFBTyxLQUFJO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNaLEdBQUdzRjtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxPQUFPO0FBQUEsTUFDTixLQUFLQTtBQUFBLE1BQ0wsT0FBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUNELEdBSUltSSxLQUFNLG9CQUNOQyxLQUFPLHVCQUNQQyxLQUFjLENBQUM3TCxNQUFNO0FBQ3hCLE1BQUlBLElBQUksRUFBRyxRQUFPO0FBQ2xCLE1BQUk4TCxJQUFLLEtBQUssSUFBSTlMLElBQUksS0FBSzJLLEVBQUU7QUFDN0IsU0FBTyxLQUFLLEtBQUtFLEtBQUtDLEtBQUtnQixNQUFPLElBQUlmLEtBQUtlLElBQUtILEVBQUc7QUFDcEQsR0FDSXZILEtBQU0sQ0FBQ3BFLElBQUksTUFBTSxLQUFLLElBQUlBLElBQUksS0FBSyxDQUFDLEdBQ3BDK0wsS0FBb0IsQ0FBQyxFQUFFLEdBQUEvSCxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBdkMsRUFBTSxNQUFNO0FBQy9DLEVBQUFxQyxJQUFJSSxHQUFJSixDQUFDLEdBQ1RDLElBQUlHLEdBQUlILENBQUMsR0FDVEMsSUFBSUUsR0FBSUYsQ0FBQztBQUNULE1BQUk4SCxJQUFLLE9BQU9oSSxJQUFJLE9BQU1FLEdBQ3RCK0gsSUFBSyxPQUFNaEksSUFBSSxPQUFNRCxHQUNyQjRCLElBQUlpRyxHQUFZLGFBQVlHLElBQUssV0FBVUMsSUFBSyxXQUFVL0gsQ0FBQyxHQUMzRG1GLElBQUl3QyxHQUFZLFdBQVVHLElBQUssV0FBV0MsSUFBSyxZQUFXL0gsQ0FBQyxHQUMzRDZCLElBQUk4RixHQUFZLGFBQVlHLElBQUssU0FBUUMsSUFBSyxZQUFXL0gsQ0FBQyxHQUMxRGpCLEtBQUsyQyxJQUFJeUQsS0FBSyxHQUNkaEssSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBRyxPQUFNNEQsS0FBSyxJQUFJLE9BQU1BLEtBQUsySTtBQUFBLElBQzdCLEdBQUcsUUFBUWhHLElBQUksV0FBV3lELElBQUksV0FBVXREO0FBQUEsSUFDeEMsR0FBRyxXQUFVSCxJQUFJLFdBQVd5RCxJQUFJLFdBQVd0RDtBQUFBLEVBQzVDO0FBQ0EsU0FBSXBFLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJK0wsS0FBSSxvQkFDSmMsS0FBSyx1QkFDTEMsS0FBYyxDQUFDbk0sTUFBTTtBQUN4QixNQUFJQSxJQUFJLEVBQUcsUUFBTztBQUNsQixNQUFJb00sSUFBSyxLQUFLLElBQUlwTSxHQUFHLElBQUlvTCxFQUFDO0FBQzFCLFNBQU8sTUFBTSxLQUFLLEtBQUtQLEtBQUt1QixNQUFPckIsS0FBS3FCLElBQUt0QixLQUFLLElBQUlILEVBQUU7QUFDekQsR0FDSTBCLEtBQU0sQ0FBQ3JNLE1BQU1BLElBQUksS0FDakJzTSxLQUFvQixDQUFDLEVBQUUsR0FBQUMsR0FBRyxHQUFBM0osR0FBRyxHQUFBSCxHQUFHLE9BQUFkLEVBQU0sTUFBTTtBQUMvQyxFQUFJNEssTUFBTSxXQUFRQSxJQUFJLElBQ2xCM0osTUFBTSxXQUFRQSxJQUFJLElBQ2xCSCxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSSxLQUFLOEosSUFBSUwsT0FBTyxPQUFNLFFBQU9LLElBQUlMLE1BQ2pDdEcsSUFBSXVHLEdBQVksSUFBSSxhQUFZdkosSUFBSSxjQUFhSCxDQUFDLEdBQ2xENEcsSUFBSThDLEdBQVksSUFBSSxhQUFZdkosSUFBSSxjQUFhSCxDQUFDLEdBQ2xEc0QsSUFBSW9HLEdBQVksSUFBSSxjQUFhdkosSUFBSSxZQUFXSCxDQUFDLEdBQ2pEcEQsSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBR2dOLEdBQUksb0JBQW9CekcsSUFBSSxvQkFBbUJ5RCxJQUFJLHNCQUFxQnRELENBQUM7QUFBQSxJQUM1RSxHQUFHc0csR0FBSSxzQkFBcUJ6RyxJQUFJLG9CQUFvQnlELElBQUksc0JBQXFCdEQsQ0FBQztBQUFBLElBQzlFLEdBQUdzRyxHQUFJLGVBQWN6RyxJQUFJLGFBQVl5RCxJQUFJLFlBQVl0RCxDQUFDO0FBQUEsRUFDdkQ7QUFDQSxTQUFJcEUsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUltTixLQUFrQixDQUFDakksTUFBUTtBQUM5QixNQUFJbEYsSUFBTTBNLEdBQWtCekgsRUFBa0JDLENBQUcsQ0FBQztBQUNsRCxTQUFJQSxFQUFJLE1BQU1BLEVBQUksS0FBS0EsRUFBSSxNQUFNQSxFQUFJLE1BQUdsRixFQUFJLElBQUlBLEVBQUksSUFBSSxJQUNqREE7QUFDUixHQUlJb04sS0FBa0IsQ0FBQ3hPLE1BQVV5RyxFQUFrQjRILEdBQWtCck8sQ0FBSyxDQUFDLEdBSXZFeU8sS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU8sQ0FBQyxVQUFVO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLElBQ1QsS0FBS0Y7QUFBQSxJQUNMLE9BQU9UO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsS0FBS1U7QUFBQSxJQUNMLE9BQU9IO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsS0FBSTtBQUFBLElBQ1gsR0FBRyxDQUFDLFFBQU8sS0FBSTtBQUFBLElBQ2YsR0FBRyxDQUFDLFFBQU8sS0FBSTtBQUFBLEVBQ2hCO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWixHQUFHL0k7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ04sS0FBS0E7QUFBQSxNQUNMLE9BQU9DO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFDRCxHQUlJbUosS0FBa0IsQ0FBQyxFQUFFLEdBQUFKLEdBQUcsR0FBQTNKLEdBQUcsR0FBQUgsR0FBRyxPQUFBZCxFQUFNLE1BQU07QUFDN0MsRUFBSWlCLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkgsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUl6RCxJQUFJLEtBQUssS0FBSzRELElBQUlBLElBQUlILElBQUlBLENBQUMsR0FDM0JwRCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFBa047QUFBQSxJQUNBLEdBQUF2TjtBQUFBLEVBQ0Q7QUFDQSxTQUFJQSxNQUFHSyxFQUFJLElBQUl1RixFQUFhLEtBQUssTUFBTW5DLEdBQUdHLENBQUMsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUN4RGpCLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJdU4sS0FBa0IsQ0FBQyxFQUFFLEdBQUFMLEdBQUcsR0FBQXZOLEdBQUcsR0FBQThHLEdBQUcsT0FBQW5FLEVBQU0sTUFBTTtBQUM3QyxFQUFJbUUsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUl6RyxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFBa047QUFBQSxJQUNBLEdBQUd2TixJQUFJQSxJQUFJLEtBQUssSUFBSThHLElBQUksTUFBTSxLQUFLLEVBQUUsSUFBSTtBQUFBLElBQ3pDLEdBQUc5RyxJQUFJQSxJQUFJLEtBQUssSUFBSThHLElBQUksTUFBTSxLQUFLLEVBQUUsSUFBSTtBQUFBLEVBQzFDO0FBQ0EsU0FBSW5FLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJd04sS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsVUFBVTtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxJQUNQLEtBQUtEO0FBQUEsSUFDTCxLQUFLLENBQUM1TixNQUFNeU4sR0FBZ0JHLEdBQWdCNU4sQ0FBQyxDQUFDO0FBQUEsRUFDL0M7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNULEtBQUssQ0FBQ0EsTUFBTTJOLEdBQWdCSCxHQUFnQnhOLENBQUMsQ0FBQztBQUFBLElBQzlDLEtBQUsyTjtBQUFBLEVBQ047QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsS0FBSTtBQUFBLElBQ1gsR0FBRyxDQUFDLEdBQUcsSUFBRztBQUFBLElBQ1YsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLEVBQ1g7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNaLEdBQUc7QUFBQSxNQUNGLEtBQUtwSjtBQUFBLE1BQ0wsT0FBTzRCO0FBQUEsSUFDUjtBQUFBLElBQ0EsR0FBRzVCO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ04sS0FBS0E7QUFBQSxNQUNMLE9BQU9DO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFlBQVksRUFBRSxHQUFHa0QsR0FBb0I7QUFBQSxFQUNyQyxTQUFTLEVBQUUsR0FBR0MsRUFBYTtBQUM1QixHQUlJeEcsS0FBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUNuQ3lJLEtBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FJbkM3RCxLQUFLLENBQUMvRSxNQUFNLEtBQUssSUFBSUEsR0FBRyxDQUFDLElBQUk0SSxLQUFJLEtBQUssSUFBSTVJLEdBQUcsQ0FBQyxLQUFLLE1BQU1BLElBQUksTUFBTUcsSUFDbkUyTSxLQUFvQixDQUFDLEVBQUUsR0FBQWxILEdBQUcsR0FBQWhELEdBQUcsR0FBQUgsR0FBRyxPQUFBZCxFQUFNLE1BQU07QUFDL0MsRUFBSWlFLE1BQU0sV0FBUUEsSUFBSSxJQUNsQmhELE1BQU0sV0FBUUEsSUFBSSxJQUNsQkgsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUlrRixLQUFNL0IsSUFBSSxNQUFNLEtBQ2hCZ0MsSUFBS2hGLElBQUksTUFBTStFLEdBQ2ZFLElBQUtGLElBQUtsRixJQUFJLEtBQ2RwRCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHMEYsR0FBRzZDLENBQUUsSUFBSVAsRUFBSTtBQUFBLElBQ2hCLEdBQUd0QyxHQUFHNEMsQ0FBRSxJQUFJTixFQUFJO0FBQUEsSUFDaEIsR0FBR3RDLEdBQUc4QyxDQUFFLElBQUlSLEVBQUk7QUFBQSxFQUNqQjtBQUNBLFNBQUkxRixNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSTBOLEtBQW9CLENBQUMsRUFBRSxHQUFBL0ksR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUMvQyxFQUFJcUMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJN0UsSUFBTW9GLEVBQWlCO0FBQUEsSUFDMUIsR0FBR1QsSUFBSSxxQkFBcUJDLElBQUkscUJBQXFCLHFCQUFvQkM7QUFBQSxJQUN6RSxHQUFHRixJQUFJLHFCQUFvQkMsSUFBSSxvQkFBb0Isc0JBQXFCQztBQUFBLElBQ3hFLEdBQUdGLElBQUksc0JBQXFCQyxJQUFJLHFCQUFvQixvQkFBb0JDO0FBQUEsRUFDekUsQ0FBQztBQUNELFNBQUl2QyxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSTJOLEtBQWtCLENBQUNqRixNQUFRZ0YsR0FBa0JELEdBQWtCL0UsQ0FBRyxDQUFDLEdBSW5Fa0YsS0FBb0IsQ0FBQzFJLE1BQVE7QUFDaEMsTUFBSSxFQUFFLEdBQUFoQyxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBZCxFQUFNLElBQUkwQyxFQUFpQkUsQ0FBRyxHQUN6Q2xGLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcsb0JBQW1Ca0QsSUFBSSxxQkFBb0JDLElBQUksc0JBQXFCQztBQUFBLElBQ3ZFLEdBQUcsc0JBQXFCRixJQUFJLHFCQUFvQkMsSUFBSSxzQkFBcUJDO0FBQUEsSUFDekUsR0FBRyx1QkFBc0JGLElBQUksc0JBQXFCQyxJQUFJLHFCQUFvQkM7QUFBQSxFQUMzRTtBQUNBLFNBQUlkLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJd0osS0FBSSxDQUFDMUgsTUFBVUEsSUFBUXlILEtBQUksS0FBSyxLQUFLekgsQ0FBSyxLQUFLaEIsS0FBSWdCLElBQVEsTUFBTSxLQUNqRStMLEtBQW9CLENBQUMsRUFBRSxHQUFBbEosR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUMvQyxFQUFJcUMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJZ0UsSUFBS1csR0FBRTdFLElBQUlxRCxFQUFJLENBQUMsR0FDaEJjLElBQUtVLEdBQUU1RSxJQUFJb0QsRUFBSSxDQUFDLEdBQ2hCZSxJQUFLUyxHQUFFM0UsSUFBSW1ELEVBQUksQ0FBQyxHQUNoQmhJLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcsTUFBTThJLElBQUs7QUFBQSxJQUNkLEdBQUcsT0FBT0QsSUFBS0M7QUFBQSxJQUNmLEdBQUcsT0FBT0EsSUFBS0M7QUFBQSxFQUNoQjtBQUNBLFNBQUl6RyxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSThOLEtBQWtCLENBQUM1SSxNQUFRO0FBQzlCLE1BQUlsRixJQUFNNk4sR0FBa0JELEdBQWtCMUksQ0FBRyxDQUFDO0FBQ2xELFNBQUlBLEVBQUksTUFBTUEsRUFBSSxLQUFLQSxFQUFJLE1BQU1BLEVBQUksTUFBR2xGLEVBQUksSUFBSUEsRUFBSSxJQUFJLElBQ2pEQTtBQUNSO0FBSUEsU0FBUytOLEdBQVNuUCxHQUFPbUUsR0FBUTtBQUNoQyxNQUFJLENBQUNBLEtBQVVBLEVBQU8sQ0FBQyxNQUFNLE1BQU87QUFDcEMsUUFBTS9DLElBQU0sRUFBRSxNQUFNLE1BQU0sR0FDcEIsQ0FBQyxFQUFFdUcsR0FBR2hELEdBQUdILEdBQUdkLENBQUssSUFBSVM7QUFDM0IsTUFBSSxFQUFBd0QsRUFBRSxTQUFTbEYsRUFBSSxPQUFPa0MsRUFBRSxTQUFTbEMsRUFBSSxPQUFPK0IsRUFBRSxTQUFTL0IsRUFBSTtBQUMvRCxXQUFJa0YsRUFBRSxTQUFTbEYsRUFBSSxTQUFNckIsRUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksR0FBR3VHLEVBQUUsS0FBSyxHQUFHLEdBQUcsSUFDL0RoRCxFQUFFLFNBQVNsQyxFQUFJLFNBQU1yQixFQUFJLElBQUl1RCxFQUFFLFNBQVNsQyxFQUFJLFNBQVNrQyxFQUFFLFFBQVFBLEVBQUUsUUFBUSxNQUFNLE1BQy9FSCxFQUFFLFNBQVMvQixFQUFJLFNBQU1yQixFQUFJLElBQUlvRCxFQUFFLFNBQVMvQixFQUFJLFNBQVMrQixFQUFFLFFBQVFBLEVBQUUsUUFBUSxNQUFNLE1BQy9FZCxFQUFNLFNBQVNqQixFQUFJLFNBQU1yQixFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdzQyxFQUFNLFNBQVNqQixFQUFJLFNBQVNpQixFQUFNLFFBQVFBLEVBQU0sUUFBUSxHQUFHLENBQUMsSUFDdEh0QztBQUNSO0FBSUEsSUFBSWdPLEtBQWdCO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ1AsT0FBT1A7QUFBQSxJQUNQLEtBQUtFO0FBQUEsRUFDTjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1QsT0FBT0U7QUFBQSxJQUNQLEtBQUtDO0FBQUEsRUFDTjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsTUFBTSxHQUFHO0FBQUEsSUFDYixHQUFHLENBQUMsTUFBTSxHQUFHO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTyxDQUFDQyxFQUFRO0FBQUEsRUFDaEIsV0FBVyxDQUFDcE8sTUFBTSxPQUFPQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sSUFBSUEsRUFBRSxNQUFNLFNBQVNBLEVBQUUsSUFBSSxNQUFNLElBQUlBLEVBQUUsTUFBTSxTQUFTQSxFQUFFLElBQUksTUFBTSxHQUFHQSxFQUFFLFFBQVEsSUFBSSxNQUFNQSxFQUFFLEtBQUssS0FBSyxFQUFFO0FBQUEsRUFDN0osYUFBYTtBQUFBLElBQ1osR0FBR3VFO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQ0QsR0FJSThKLEtBQWdCO0FBQUEsRUFDbkIsR0FBR0Q7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQyxXQUFXO0FBQUEsRUFDbkIsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ1AsT0FBTzNGO0FBQUEsSUFDUCxLQUFLSTtBQUFBLEVBQ047QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNULE9BQU9HO0FBQUEsSUFDUCxLQUFLSTtBQUFBLEVBQ047QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLEdBQUcsQ0FBQyxHQUFHLEdBQUc7QUFBQSxJQUNWLEdBQUcsQ0FBQyxNQUFNLEdBQUc7QUFBQSxJQUNiLEdBQUcsQ0FBQyxNQUFNLEdBQUc7QUFBQSxFQUNkO0FBQ0Q7QUFJQSxTQUFTa0YsR0FBU3RQLEdBQU9tRSxHQUFRO0FBQ2hDLE1BQUksQ0FBQ0EsS0FBVUEsRUFBTyxDQUFDLE1BQU0sTUFBTztBQUNwQyxRQUFNL0MsSUFBTSxFQUFFLE1BQU0sTUFBTSxHQUNwQixDQUFDLEVBQUV1RyxHQUFHNUcsR0FBRzhHLEdBQUduRSxDQUFLLElBQUlTO0FBQzNCLE1BQUl3RCxFQUFFLFNBQVNsRixFQUFJLE1BQU07QUFDeEIsUUFBSWtGLEVBQUUsU0FBU2xGLEVBQUksSUFBSztBQUN4QixJQUFBckIsRUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksR0FBR3VHLEVBQUUsS0FBSyxHQUFHLEdBQUc7QUFBQSxFQUMzQztBQUVBLE1BREk1RyxFQUFFLFNBQVMwQixFQUFJLFNBQU1yQixFQUFJLElBQUksS0FBSyxJQUFJLEdBQUdMLEVBQUUsU0FBUzBCLEVBQUksU0FBUzFCLEVBQUUsUUFBUUEsRUFBRSxRQUFRLE1BQU0sR0FBRyxJQUM5RjhHLEVBQUUsU0FBU3BGLEVBQUksTUFBTTtBQUN4QixRQUFJb0YsRUFBRSxTQUFTcEYsRUFBSSxXQUFZO0FBQy9CLElBQUFyQixFQUFJLElBQUl5RyxFQUFFO0FBQUEsRUFDWDtBQUNBLFNBQUluRSxFQUFNLFNBQVNqQixFQUFJLFNBQU1yQixFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdzQyxFQUFNLFNBQVNqQixFQUFJLFNBQVNpQixFQUFNLFFBQVFBLEVBQU0sUUFBUSxHQUFHLENBQUMsSUFDdEh0QztBQUNSO0FBSUEsSUFBSW1PLEtBQWdCO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ1AsS0FBS3RHO0FBQUEsSUFDTCxLQUFLLENBQUNsSSxNQUFNZ08sR0FBZ0I5RixFQUFnQmxJLENBQUMsQ0FBQztBQUFBLEVBQy9DO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxLQUFLLENBQUNBLE1BQU1pSSxFQUFnQmtHLEdBQWdCbk8sQ0FBQyxDQUFDO0FBQUEsSUFDOUMsS0FBS2lJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsRUFDWDtBQUFBLEVBQ0EsT0FBTyxDQUFDc0csRUFBUTtBQUFBLEVBQ2hCLFdBQVcsQ0FBQ3ZPLE1BQU0sT0FBT0EsRUFBRSxNQUFNLFNBQVNBLEVBQUUsSUFBSSxNQUFNLElBQUlBLEVBQUUsTUFBTSxTQUFTQSxFQUFFLElBQUksTUFBTSxJQUFJQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sR0FBR0EsRUFBRSxRQUFRLElBQUksTUFBTUEsRUFBRSxLQUFLLEtBQUssRUFBRTtBQUFBLEVBQzdKLGFBQWE7QUFBQSxJQUNaLEdBQUc7QUFBQSxNQUNGLEtBQUt1RTtBQUFBLE1BQ0wsT0FBTzRCO0FBQUEsSUFDUjtBQUFBLElBQ0EsR0FBRzVCO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ04sS0FBS0E7QUFBQSxNQUNMLE9BQU9DO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFlBQVksRUFBRSxHQUFHa0QsR0FBb0I7QUFBQSxFQUNyQyxTQUFTLEVBQUUsR0FBR0MsRUFBYTtBQUM1QixHQUlJOEcsS0FBZ0I7QUFBQSxFQUNuQixHQUFHRDtBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFdBQVc7QUFBQSxFQUNuQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsSUFDUCxPQUFPLENBQUN4TyxNQUFNa0ksRUFBZ0JsSSxHQUFHLE9BQU87QUFBQSxJQUN4QyxLQUFLLENBQUNBLE1BQU04SSxHQUFrQlosRUFBZ0JsSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQzFEO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxLQUFLLENBQUNBLE1BQU1pSSxFQUFnQm9CLEdBQWtCckosQ0FBQyxHQUFHLE9BQU87QUFBQSxJQUN6RCxPQUFPLENBQUNBLE1BQU1pSSxFQUFnQmpJLEdBQUcsT0FBTztBQUFBLEVBQ3pDO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsRUFDWDtBQUNELEdBSUkwTyxLQUFvQixDQUFDLEVBQUUsR0FBQTlILEdBQUcsR0FBQStILEdBQUcsR0FBQTNOLEdBQUcsT0FBQTJCLEVBQU0sTUFBTTtBQUMvQyxFQUFJZ00sTUFBTSxXQUFRQSxJQUFJLElBQ2xCM04sTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUloQixJQUFJLEtBQUssS0FBSzJPLElBQUlBLElBQUkzTixJQUFJQSxDQUFDLEdBQzNCWCxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFBdUc7QUFBQSxJQUNBLEdBQUE1RztBQUFBLEVBQ0Q7QUFDQSxTQUFJQSxNQUFHSyxFQUFJLElBQUl1RixFQUFhLEtBQUssTUFBTTVFLEdBQUcyTixDQUFDLElBQUksTUFBTSxLQUFLLEVBQUUsSUFDeERoTSxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSXVPLEtBQW9CLENBQUMsRUFBRSxHQUFBaEksR0FBRyxHQUFBNUcsR0FBRyxHQUFBOEcsR0FBRyxPQUFBbkUsRUFBTSxNQUFNO0FBQy9DLEVBQUltRSxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSXpHLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUF1RztBQUFBLElBQ0EsR0FBRzVHLElBQUlBLElBQUksS0FBSyxJQUFJOEcsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUFJO0FBQUEsSUFDekMsR0FBRzlHLElBQUlBLElBQUksS0FBSyxJQUFJOEcsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUFJO0FBQUEsRUFDMUM7QUFDQSxTQUFJbkUsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUl3TyxLQUFTLENBQUM3SixHQUFHQyxHQUFHQyxNQUFNLElBQUlGLEtBQUtBLElBQUksS0FBS0MsSUFBSSxJQUFJQyxJQUNoRDRKLEtBQVMsQ0FBQzlKLEdBQUdDLEdBQUdDLE1BQU0sSUFBSUQsS0FBS0QsSUFBSSxLQUFLQyxJQUFJLElBQUlDLElBQ2hENkosS0FBT0YsR0FBT3hHLEVBQUksR0FBR0EsRUFBSSxHQUFHQSxFQUFJLENBQUMsR0FDakMyRyxLQUFPRixHQUFPekcsRUFBSSxHQUFHQSxFQUFJLEdBQUdBLEVBQUksQ0FBQyxHQUNqQzRHLEtBQU8sQ0FBQzlNLE1BQVVBLEtBQVN5SCxLQUFJekksS0FBSWdCLElBQVEsTUFBTSxLQUFLLEtBQUtBLENBQUssSUFBSSxJQUNwRStNLEtBQW9CLENBQUMsRUFBRSxHQUFBbEssR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUMvQyxFQUFJcUMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJMEIsSUFBSXFJLEdBQUtoSyxJQUFJb0QsRUFBSSxDQUFDLEdBQ2xCc0csSUFBSUUsR0FBTzdKLEdBQUdDLEdBQUdDLENBQUMsR0FDbEJsRSxJQUFJOE4sR0FBTzlKLEdBQUdDLEdBQUdDLENBQUM7QUFDdEIsRUFBSSxDQUFDLFNBQVN5SixDQUFDLEtBQUssQ0FBQyxTQUFTM04sQ0FBQyxJQUFHNEYsSUFBSStILElBQUkzTixJQUFJLEtBRTdDMk4sSUFBSSxLQUFLL0gsS0FBSytILElBQUlJLEtBQ2xCL04sSUFBSSxLQUFLNEYsS0FBSzVGLElBQUlnTztBQUVuQixNQUFJM08sSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBQXVHO0FBQUEsSUFDQSxHQUFBK0g7QUFBQSxJQUNBLEdBQUEzTjtBQUFBLEVBQ0Q7QUFDQSxTQUFJMkIsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUk4TyxLQUFPLENBQUNuSyxHQUFHQyxHQUFHQyxNQUFNLElBQUlGLEtBQUtBLElBQUksS0FBS0MsSUFBSSxJQUFJQyxJQUM5Q2tLLEtBQU8sQ0FBQ3BLLEdBQUdDLEdBQUdDLE1BQU0sSUFBSUQsS0FBS0QsSUFBSSxLQUFLQyxJQUFJLElBQUlDLElBQzlDbUssS0FBS0YsR0FBSzlHLEVBQUksR0FBR0EsRUFBSSxHQUFHQSxFQUFJLENBQUMsR0FDN0J5RSxLQUFLc0MsR0FBSy9HLEVBQUksR0FBR0EsRUFBSSxHQUFHQSxFQUFJLENBQUMsR0FDN0JpSCxLQUFvQixDQUFDLEVBQUUsR0FBQTFJLEdBQUcsR0FBQStILEdBQUcsR0FBQTNOLEdBQUcsT0FBQTJCLEVBQU0sTUFBTTtBQUUvQyxNQURJaUUsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQSxNQUFNLEVBQUcsUUFBTztBQUFBLElBQ25CLE1BQU07QUFBQSxJQUNOLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxFQUNKO0FBQ0EsRUFBSStILE1BQU0sV0FBUUEsSUFBSSxJQUNsQjNOLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJdU8sSUFBS1osS0FBSyxLQUFLL0gsS0FBS3lJLElBQ3BCakMsSUFBS3BNLEtBQUssS0FBSzRGLEtBQUtrRyxJQUNwQjdILElBQUlvRCxFQUFJLEtBQUt6QixLQUFLLElBQUlBLElBQUl6RixLQUFJLEtBQUssS0FBS3lGLElBQUksTUFBTSxLQUFLLENBQUMsSUFDeER2RyxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHNEUsS0FBSyxJQUFJc0ssTUFBTyxJQUFJbkM7QUFBQSxJQUN2QixHQUFBbkk7QUFBQSxJQUNBLEdBQUdBLEtBQUssS0FBSyxJQUFJc0ssSUFBSyxLQUFLbkMsTUFBTyxJQUFJQTtBQUFBLEVBQ3ZDO0FBQ0EsU0FBSXpLLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJbVAsS0FBb0IsQ0FBQ2pLLE1BQVFtSixHQUFrQlEsR0FBa0JqQixHQUFrQjFJLENBQUcsQ0FBQyxDQUFDLEdBQ3hGa0ssS0FBb0IsQ0FBQ0MsTUFBVTNCLEdBQWtCdUIsR0FBa0JWLEdBQWtCYyxDQUFLLENBQUMsQ0FBQyxHQUM1RkMsS0FBZ0I7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDUCxLQUFLZjtBQUFBLElBQ0wsS0FBS2E7QUFBQSxFQUNOO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxLQUFLRDtBQUFBLElBQ0wsS0FBS2Q7QUFBQSxFQUNOO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU8sQ0FBQyxTQUFTO0FBQUEsRUFDakIsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLElBQ1YsR0FBRyxDQUFDLEdBQUcsT0FBTztBQUFBLElBQ2QsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLEVBQ1g7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNaLEdBQUc7QUFBQSxNQUNGLEtBQUtuSztBQUFBLE1BQ0wsT0FBTzRCO0FBQUEsSUFDUjtBQUFBLElBQ0EsR0FBRzVCO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ04sS0FBS0E7QUFBQSxNQUNMLE9BQU9DO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFlBQVksRUFBRSxHQUFHa0QsR0FBb0I7QUFBQSxFQUNyQyxTQUFTLEVBQUUsR0FBR0MsRUFBYTtBQUM1QixHQUlJaUksS0FBZ0I7QUFBQSxFQUNuQixHQUFHbEw7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLFFBQVEsRUFBRSxLQUFLZSxFQUFpQjtBQUFBLEVBQ2hDLFVBQVUsRUFBRSxLQUFLSixFQUFpQjtBQUFBLEVBQ2xDLE9BQU8sQ0FBQyxhQUFhO0FBQUEsRUFDckIsV0FBVztBQUNaLEdBSUl3SyxLQUFlO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ1AsT0FBT1A7QUFBQSxJQUNQLEtBQUssQ0FBQ1EsTUFBUS9CLEdBQWtCdUIsR0FBa0JRLENBQUcsQ0FBQztBQUFBLEVBQ3ZEO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxPQUFPWjtBQUFBLElBQ1AsS0FBSyxDQUFDM0osTUFBUTJKLEdBQWtCakIsR0FBa0IxSSxDQUFHLENBQUM7QUFBQSxFQUN2RDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPLENBQUMsT0FBTztBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLElBQ1YsR0FBRyxDQUFDLFNBQVMsT0FBTztBQUFBLElBQ3BCLEdBQUcsQ0FBQyxVQUFVLE1BQU07QUFBQSxFQUNyQjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1osR0FBR2hCO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQ0QsR0FJSXVMLEtBQXFCLENBQUMsRUFBRSxHQUFBeE0sR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQWQsRUFBTSxNQUFNO0FBQ2hELEVBQUlZLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSXVNLElBQUksS0FBSyxLQUFLLG9CQUFtQnpNLElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkMsQ0FBQyxHQUNsRjRDLElBQUksS0FBSyxLQUFLLHFCQUFvQjlDLElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkMsQ0FBQyxHQUNuRndNLElBQUksS0FBSyxLQUFLLHFCQUFvQjFNLElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkMsQ0FBQyxHQUNuRnBELElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcsb0JBQW1CMlAsSUFBSSxxQkFBb0IzSixJQUFJLHFCQUFvQjRKO0FBQUEsSUFDdEUsR0FBRyxxQkFBcUJELElBQUksbUJBQW1CM0osSUFBSSxvQkFBbUI0SjtBQUFBLElBQ3RFLEdBQUcscUJBQW9CRCxJQUFJLHFCQUFvQjNKLElBQUkscUJBQW9CNEo7QUFBQSxFQUN4RTtBQUNBLFNBQUl0TixNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSTZQLEtBQW9CLENBQUMzSyxNQUFRO0FBQ2hDLE1BQUlsRixJQUFNMFAsR0FBbUIxSyxFQUFpQkUsQ0FBRyxDQUFDO0FBQ2xELFNBQUlBLEVBQUksTUFBTUEsRUFBSSxLQUFLQSxFQUFJLE1BQU1BLEVBQUksTUFBR2xGLEVBQUksSUFBSUEsRUFBSSxJQUFJLElBQ2pEQTtBQUNSLEdBSUk4UCxLQUFxQixDQUFDLEVBQUUsR0FBQXZKLEdBQUcsR0FBQWhELEdBQUcsR0FBQUgsR0FBRyxPQUFBZCxFQUFNLE1BQU07QUFDaEQsRUFBSWlFLE1BQU0sV0FBUUEsSUFBSSxJQUNsQmhELE1BQU0sV0FBUUEsSUFBSSxJQUNsQkgsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLE1BQUl1TSxJQUFJLEtBQUssSUFBSXBKLElBQUkscUJBQW9CaEQsSUFBSSxxQkFBb0JILEdBQUcsQ0FBQyxHQUNqRTRDLElBQUksS0FBSyxJQUFJTyxJQUFJLHFCQUFvQmhELElBQUkscUJBQW9CSCxHQUFHLENBQUMsR0FDakV3TSxJQUFJLEtBQUssSUFBSXJKLElBQUkscUJBQW9CaEQsSUFBSSxxQkFBcUJILEdBQUcsQ0FBQyxHQUNsRXBELElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcsb0JBQW9CMlAsSUFBSSxxQkFBcUIzSixJQUFJLHFCQUFvQjRKO0FBQUEsSUFDeEUsR0FBRyxzQkFBc0JELElBQUkscUJBQXFCM0osSUFBSSxxQkFBb0I0SjtBQUFBLElBQzFFLEdBQUcsc0JBQXFCRCxJQUFJLHFCQUFvQjNKLElBQUkscUJBQXFCNEo7QUFBQSxFQUMxRTtBQUNBLFNBQUl0TixNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSStQLEtBQW9CLENBQUNwUSxNQUFNeUYsRUFBaUIwSyxHQUFtQm5RLENBQUMsQ0FBQztBQUlyRSxTQUFTcVEsR0FBSXJMLEdBQUc7QUFHZixRQUFNc0wsSUFBTTtBQUNaLFNBQU8sT0FBTUEsSUFBTXRMLElBQUksUUFBTSxLQUFLLE1BQU1zTCxJQUFNdEwsSUFBSSxVQUFRc0wsSUFBTXRMLElBQUksU0FBTyxJQUFJLE9BQU1zTCxJQUFNdEwsQ0FBQztBQUM3RjtBQUNBLFNBQVN1TCxHQUFRdkwsR0FBRztBQUNuQixVQUFRQSxJQUFJQSxJQUFJLFFBQU9BLE1BQU0sUUFBUSxRQUFRQSxJQUFJO0FBQ2xEO0FBQ0EsU0FBU3dMLEdBQXVCNU0sR0FBR0gsR0FBRztBQUNyQyxNQUFJZ04sR0FBSUMsR0FBSUMsR0FBSUMsR0FBSUMsR0FBSUMsR0FBSUMsR0FBSUM7QUFDaEMsRUFBSSxjQUFjcE4sSUFBSSxhQUFZSCxJQUFJLEtBQ3JDZ04sSUFBSyxZQUNMQyxJQUFLLFlBQ0xDLElBQUssWUFDTEMsSUFBSyxZQUNMQyxJQUFLLFlBQ0xDLElBQUssY0FDTEMsSUFBSyxlQUNMQyxJQUFLLGdCQUNLLGFBQWFwTixJQUFJLGFBQWFILElBQUksS0FDNUNnTixJQUFLLFlBQ0xDLElBQUssYUFDTEMsSUFBSyxZQUNMQyxJQUFLLFdBQ0xDLElBQUssWUFDTEMsSUFBSyxlQUNMQyxJQUFLLGNBQ0xDLElBQUssa0JBRUxQLElBQUssWUFDTEMsSUFBSyxZQUNMQyxJQUFLLFlBQ0xDLElBQUssYUFDTEMsSUFBSyxXQUNMQyxJQUFLLGVBQ0xDLElBQUssZUFDTEMsSUFBSztBQUVOLE1BQUlmLElBQUlRLElBQUtDLElBQUs5TSxJQUFJK00sSUFBS2xOLElBQUltTixJQUFLaE4sSUFBSUEsSUFBSWlOLElBQUtqTixJQUFJSCxHQUNqRHdOLElBQU0sZUFBY3JOLElBQUksZUFBY0gsR0FDdEN5TixJQUFNLGdCQUFldE4sSUFBSSxlQUFjSCxHQUN2QzBOLElBQU0sZ0JBQWV2TixJQUFJLGNBQWNIO0FBQzNDO0FBQ0MsUUFBSTJOLElBQUssSUFBSW5CLElBQUlnQixHQUNiSSxJQUFLLElBQUlwQixJQUFJaUIsR0FDYkksSUFBSyxJQUFJckIsSUFBSWtCLEdBQ2J2SyxJQUFJd0ssSUFBS0EsSUFBS0EsR0FDZC9HLElBQUlnSCxJQUFLQSxJQUFLQSxHQUNkdEssSUFBSXVLLElBQUtBLElBQUtBLEdBQ2RDLElBQU8sSUFBSU4sSUFBTUcsSUFBS0EsR0FDdEJJLElBQU8sSUFBSU4sSUFBTUcsSUFBS0EsR0FDdEJJLElBQU8sSUFBSU4sSUFBTUcsSUFBS0EsR0FDdEJJLElBQVEsSUFBSVQsSUFBTUEsSUFBTUcsR0FDeEJPLElBQVEsSUFBSVQsSUFBTUEsSUFBTUcsR0FDeEJPLElBQVEsSUFBSVQsSUFBTUEsSUFBTUcsR0FDeEJ6SCxJQUFJaUgsSUFBS2xLLElBQUltSyxJQUFLMUcsSUFBSTJHLElBQUtqSyxHQUMzQm9DLElBQUsySCxJQUFLUyxJQUFPUixJQUFLUyxJQUFPUixJQUFLUyxHQUNsQ3JJLElBQUswSCxJQUFLWSxJQUFRWCxJQUFLWSxJQUFRWCxJQUFLWTtBQUN4QyxJQUFBM0IsSUFBSUEsSUFBSXBHLElBQUlWLEtBQU1BLElBQUtBLElBQUssTUFBS1UsSUFBSVQ7QUFBQSxFQUN0QztBQUNBLFNBQU82RztBQUNSO0FBQ0EsU0FBUzRCLEdBQVVqTyxHQUFHSCxHQUFHO0FBQ3hCLE1BQUlxTyxJQUFTdEIsR0FBdUI1TSxHQUFHSCxDQUFDLEdBQ3BDOEIsSUFBTTRLLEdBQW1CO0FBQUEsSUFDNUIsR0FBRztBQUFBLElBQ0gsR0FBRzJCLElBQVNsTztBQUFBLElBQ1osR0FBR2tPLElBQVNyTztBQUFBLEVBQ2IsQ0FBQyxHQUNHc08sSUFBUyxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUl4TSxFQUFJLEdBQUdBLEVBQUksR0FBR0EsRUFBSSxDQUFDLENBQUM7QUFDeEQsU0FBTyxDQUFDd00sR0FBUUEsSUFBU0QsQ0FBTTtBQUNoQztBQUNBLFNBQVNFLEdBQXdCcE8sR0FBR0gsR0FBR3dPLEdBQUlwRyxHQUFJcUcsR0FBSUMsSUFBTyxNQUFNO0FBQy9ELEVBQUtBLE1BQU1BLElBQU9OLEdBQVVqTyxHQUFHSCxDQUFDO0FBQ2hDLE1BQUlJO0FBQ0osT0FBS29PLElBQUtDLEtBQU1DLEVBQUssQ0FBQyxLQUFLQSxFQUFLLENBQUMsSUFBSUQsS0FBTXJHLEtBQU0sRUFBRyxDQUFBaEksSUFBSXNPLEVBQUssQ0FBQyxJQUFJRCxLQUFNckcsSUFBS3NHLEVBQUssQ0FBQyxJQUFJQSxFQUFLLENBQUMsS0FBS0QsSUFBS0Q7QUFBQSxPQUNsRztBQUNKLElBQUFwTyxJQUFJc08sRUFBSyxDQUFDLEtBQUtELElBQUssTUFBTXJHLEtBQU1zRyxFQUFLLENBQUMsSUFBSSxLQUFLQSxFQUFLLENBQUMsS0FBS0QsSUFBS0Q7QUFDL0Q7QUFDQyxVQUFJRyxJQUFLSCxJQUFLQyxHQUNWRyxJQUFLeEcsR0FDTG9GLElBQU0sZUFBY3JOLElBQUksZUFBY0gsR0FDdEN5TixJQUFNLGdCQUFldE4sSUFBSSxlQUFjSCxHQUN2QzBOLElBQU0sZ0JBQWV2TixJQUFJLGNBQWNILEdBQ3ZDNk8sSUFBT0YsSUFBS0MsSUFBS3BCLEdBQ2pCc0IsSUFBT0gsSUFBS0MsSUFBS25CLEdBQ2pCc0IsSUFBT0osSUFBS0MsSUFBS2xCO0FBQ3JCO0FBQ0MsWUFBSW5CLElBQUlrQyxLQUFNLElBQUlyTyxLQUFLQSxJQUFJb08sR0FDdkJRLElBQUk1TyxJQUFJZ0ksR0FDUnVGLElBQUtwQixJQUFJeUMsSUFBSXhCLEdBQ2JJLElBQUtyQixJQUFJeUMsSUFBSXZCLEdBQ2JJLElBQUt0QixJQUFJeUMsSUFBSXRCLEdBQ2J2SyxJQUFJd0ssSUFBS0EsSUFBS0EsR0FDZC9HLElBQUlnSCxJQUFLQSxJQUFLQSxHQUNkdEssSUFBSXVLLElBQUtBLElBQUtBLEdBQ2RvQixJQUFNLElBQUlKLElBQU9sQixJQUFLQSxHQUN0QnVCLElBQU0sSUFBSUosSUFBT2xCLElBQUtBLEdBQ3RCdUIsSUFBTSxJQUFJSixJQUFPbEIsSUFBS0EsR0FDdEJ1QixJQUFPLElBQUlQLElBQU9BLElBQU9sQixHQUN6QjBCLElBQU8sSUFBSVAsSUFBT0EsSUFBT2xCLEdBQ3pCMEIsSUFBTyxJQUFJUCxJQUFPQSxJQUFPbEIsR0FDekIvTixLQUFJLGVBQWVxRCxJQUFJLGVBQWV5RCxJQUFJLGVBQWN0RCxJQUFJLEdBQzVEaU0sS0FBSyxlQUFlTixJQUFNLGVBQWVDLElBQU0sZUFBY0MsR0FDN0RLLEtBQUssZUFBZUosSUFBTyxlQUFlQyxJQUFPLGVBQWNDLEdBQy9ERyxLQUFNRixNQUFNQSxLQUFLQSxLQUFLLE1BQUt6UCxLQUFJMFAsS0FDL0JFLEtBQU0sQ0FBQzVQLEtBQUkyUCxJQUNYMVAsS0FBSSxnQkFBZ0JvRCxJQUFJLGVBQWV5RCxJQUFJLGVBQWN0RCxJQUFJLEdBQzdEcU0sS0FBSyxnQkFBZ0JWLElBQU0sZUFBZUMsSUFBTSxlQUFjQyxHQUM5RFMsS0FBSyxnQkFBZ0JSLElBQU8sZUFBZUMsSUFBTyxlQUFjQyxHQUNoRU8sS0FBTUYsTUFBTUEsS0FBS0EsS0FBSyxNQUFLNVAsS0FBSTZQLEtBQy9CRSxLQUFNLENBQUMvUCxLQUFJOFAsSUFDWDdQLEtBQUksZ0JBQWVtRCxJQUFJLGVBQWN5RCxJQUFJLGNBQWN0RCxJQUFJLEdBQzNEeU0sS0FBSyxnQkFBZWQsSUFBTSxlQUFjQyxJQUFNLGNBQWNDLEdBQzVEYSxLQUFLLGdCQUFlWixJQUFPLGVBQWNDLElBQU8sY0FBY0MsR0FDOURXLEtBQU1GLE1BQU1BLEtBQUtBLEtBQUssTUFBSy9QLEtBQUlnUSxLQUMvQkUsS0FBTSxDQUFDbFEsS0FBSWlRO0FBQ2YsUUFBQVAsS0FBTUQsTUFBTyxJQUFJQyxLQUFNLEtBQ3ZCSSxLQUFNRCxNQUFPLElBQUlDLEtBQU0sS0FDdkJJLEtBQU1ELE1BQU8sSUFBSUMsS0FBTSxLQUN2QjlQLEtBQUssS0FBSyxJQUFJc1AsSUFBSyxLQUFLLElBQUlJLElBQUtJLEVBQUcsQ0FBQztBQUFBLE1BQ3RDO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDQSxTQUFPOVA7QUFDUjtBQUNBLFNBQVMrUCxHQUFXQyxHQUFJQyxHQUFJM0IsSUFBTyxNQUFNO0FBQ3hDLEVBQUtBLE1BQU1BLElBQU9OLEdBQVVnQyxHQUFJQyxDQUFFO0FBQ2xDLE1BQUk5RCxJQUFJbUMsRUFBSyxDQUFDLEdBQ1ZNLElBQUlOLEVBQUssQ0FBQztBQUNkLFNBQU8sQ0FBQ00sSUFBSXpDLEdBQUd5QyxLQUFLLElBQUl6QyxFQUFFO0FBQzNCO0FBQ0EsU0FBUytELEdBQU8vRCxHQUFHNkQsR0FBSUMsR0FBSTtBQUMxQixNQUFJM0IsSUFBT04sR0FBVWdDLEdBQUlDLENBQUUsR0FDdkJFLElBQVFoQyxHQUF3QjZCLEdBQUlDLEdBQUk5RCxHQUFHLEdBQUdBLEdBQUdtQyxDQUFJLEdBQ3JEOEIsSUFBU0wsR0FBV0MsR0FBSUMsR0FBSTNCLENBQUksR0FDaEMrQixJQUFRLGFBQVksS0FBSyxZQUFZLFlBQVlKLElBQUtELEtBQU0sY0FBYyxhQUFhQyxJQUFLRCxLQUFNLGNBQWMsY0FBY0MsSUFBS0QsS0FBTSxjQUFjLGFBQWFDLElBQUssYUFBYUQsT0FDdExNLElBQVEsYUFBWSxLQUFLLFlBQVksYUFBWUwsSUFBS0QsS0FBTSxhQUFZLGFBQVlDLElBQUtELEtBQU0sY0FBYSxZQUFXQyxJQUFLRCxLQUFNLFlBQVksYUFBWUMsSUFBSyxhQUFZRCxPQUMzSzFTLElBQUk2UyxJQUFRLEtBQUssSUFBSWhFLElBQUlpRSxFQUFPLENBQUMsSUFBSSxJQUFJakUsS0FBS2lFLEVBQU8sQ0FBQyxDQUFDLEdBQ3ZERyxJQUFNcEUsSUFBSWtFLEdBQ1ZHLEtBQU8sSUFBSXJFLEtBQUttRSxHQUNoQkcsSUFBUSxNQUFLblQsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBS2lULElBQU1BLElBQU1BLElBQU1BLEtBQU8sS0FBS0MsSUFBTUEsSUFBTUEsSUFBTUEsR0FBSyxDQUFDO0FBQ3pHLFNBQUFELElBQU1wRSxJQUFJLEtBQ1ZxRSxLQUFPLElBQUlyRSxLQUFLLEtBQ1Q7QUFBQSxJQUNOLEtBQUssS0FBSyxLQUFLLEtBQUtvRSxJQUFNQSxLQUFPLEtBQUtDLElBQU1BLEdBQUs7QUFBQSxJQUNqREM7QUFBQSxJQUNBTjtBQUFBLEVBQ0Q7QUFDRDtBQUlBLFNBQVNPLEdBQW9CeEwsR0FBSztBQUNqQyxRQUFNbkMsSUFBSW1DLEVBQUksTUFBTSxTQUFTQSxFQUFJLElBQUksR0FDL0JuRixJQUFJbUYsRUFBSSxNQUFNLFNBQVNBLEVBQUksSUFBSSxHQUMvQnRGLElBQUlzRixFQUFJLE1BQU0sU0FBU0EsRUFBSSxJQUFJLEdBQy9CeUwsSUFBTTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sR0FBR25FLEdBQUl6SixDQUFDO0FBQUEsRUFDVDtBQUNBLEVBQUltQyxFQUFJLFVBQVUsV0FBUXlMLEVBQUksUUFBUXpMLEVBQUk7QUFDMUMsTUFBSS9JLElBQUksS0FBSyxLQUFLNEQsSUFBSUEsSUFBSUgsSUFBSUEsQ0FBQztBQUMvQixNQUFJLENBQUN6RDtBQUNKLFdBQUF3VSxFQUFJLElBQUksR0FDREE7QUFFUixNQUFJLENBQUNDLEdBQUtILEdBQU9OLENBQUssSUFBSUQsR0FBT25OLEdBQUdoRCxJQUFJNUQsR0FBR3lELElBQUl6RCxDQUFDLEdBQzVDK0c7QUFDSixNQUFJL0csSUFBSXNVLEdBQU87QUFDZCxRQUFJSSxJQUFNLEdBQ05DLElBQU0sTUFBS0YsR0FDWEcsSUFBTSxJQUFJRCxJQUFNTDtBQUNwQixJQUFBdk4sS0FBSy9HLElBQUkwVSxNQUFRQyxJQUFNQyxLQUFPNVUsSUFBSTBVLE1BQVE7QUFBQSxFQUMzQyxPQUFPO0FBQ04sUUFBSUEsSUFBTUosR0FDTkssSUFBTSxNQUFLTCxJQUFRQSxJQUFRLE9BQU8sT0FBT0csR0FDekNHLElBQU0sSUFBSUQsS0FBT1gsSUFBUU07QUFDN0IsSUFBQXZOLElBQUksTUFBSyxRQUFPL0csSUFBSTBVLE1BQVFDLElBQU1DLEtBQU81VSxJQUFJMFU7QUFBQSxFQUM5QztBQUNBLFNBQUkzTixNQUNIeU4sRUFBSSxJQUFJek4sR0FDUnlOLEVBQUksSUFBSTVPLEVBQWEsS0FBSyxNQUFNbkMsR0FBR0csQ0FBQyxJQUFJLE1BQU0sS0FBSyxFQUFFLElBRS9DNFE7QUFDUjtBQUlBLFNBQVNLLEdBQW9CQyxHQUFLO0FBQ2pDLE1BQUloTyxJQUFJZ08sRUFBSSxNQUFNLFNBQVNBLEVBQUksSUFBSSxHQUMvQi9OLElBQUkrTixFQUFJLE1BQU0sU0FBU0EsRUFBSSxJQUFJLEdBQy9CbE8sSUFBSWtPLEVBQUksTUFBTSxTQUFTQSxFQUFJLElBQUk7QUFDbkMsUUFBTU4sSUFBTTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sR0FBR2pFLEdBQVEzSixDQUFDO0FBQUEsRUFDYjtBQUVBLE1BRElrTyxFQUFJLFVBQVUsV0FBUU4sRUFBSSxRQUFRTSxFQUFJLFFBQ3RDLENBQUMvTixLQUFLSCxNQUFNO0FBQ2YsV0FBQTROLEVBQUksSUFBSUEsRUFBSSxJQUFJLEdBQ1RBO0FBRVIsTUFBSVgsSUFBSyxLQUFLLElBQUkvTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEdBQy9CZ04sSUFBSyxLQUFLLElBQUloTixJQUFJLE1BQU0sS0FBSyxFQUFFLEdBQy9CLENBQUMyTixHQUFLSCxHQUFPTixDQUFLLElBQUlELEdBQU9TLEVBQUksR0FBR1gsR0FBSUMsQ0FBRSxHQUMxQ2pRLEdBQUc2USxHQUFLQyxHQUFLQztBQUNqQixFQUFJN04sSUFBSSxPQUNQbEQsSUFBSSxPQUFPa0QsR0FDWDJOLElBQU0sR0FDTkMsSUFBTSxNQUFLRixHQUNYRyxJQUFNLElBQUlELElBQU1MLE1BRWhCelEsSUFBSSxLQUFLa0QsSUFBSSxNQUNiMk4sSUFBTUosR0FDTkssSUFBTSxNQUFLTCxJQUFRQSxJQUFRLE9BQU8sT0FBT0csR0FDekNHLElBQU0sSUFBSUQsS0FBT1gsSUFBUU07QUFFMUIsTUFBSTdCLElBQUlpQyxJQUFNN1EsSUFBSThRLEtBQU8sSUFBSUMsSUFBTS9RO0FBQ25DLFNBQUEyUSxFQUFJLElBQUkvQixJQUFJb0IsR0FDWlcsRUFBSSxJQUFJL0IsSUFBSXFCLEdBQ0xVO0FBQ1I7QUFJQSxJQUFJTyxLQUFZO0FBQUEsRUFDZixHQUFHL0o7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxDQUFDLFNBQVM7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsSUFDVCxPQUFPdUo7QUFBQSxJQUNQLEtBQUssQ0FBQ3ZVLE1BQU11VSxHQUFvQnJFLEdBQWtCbFEsQ0FBQyxDQUFDO0FBQUEsRUFDckQ7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLE9BQU82VTtBQUFBLElBQ1AsS0FBSyxDQUFDN1UsTUFBTW9RLEdBQWtCeUUsR0FBb0I3VSxDQUFDLENBQUM7QUFBQSxFQUNyRDtBQUNEO0FBSUEsU0FBU2dWLEdBQW9Cak0sR0FBSztBQUNqQyxNQUFJbkMsSUFBSW1DLEVBQUksTUFBTSxTQUFTQSxFQUFJLElBQUksR0FDL0JuRixJQUFJbUYsRUFBSSxNQUFNLFNBQVNBLEVBQUksSUFBSSxHQUMvQnRGLElBQUlzRixFQUFJLE1BQU0sU0FBU0EsRUFBSSxJQUFJLEdBQy9CL0ksSUFBSSxLQUFLLEtBQUs0RCxJQUFJQSxJQUFJSCxJQUFJQSxDQUFDLEdBQzNCb1EsSUFBSzdULElBQUk0RCxJQUFJNUQsSUFBSSxHQUNqQjhULElBQUs5VCxJQUFJeUQsSUFBSXpELElBQUksR0FDakIsQ0FBQ2lWLEdBQU9DLENBQUMsSUFBSXRCLEdBQVdDLEdBQUlDLENBQUUsR0FDOUJxQixJQUFNLEtBQ05oVSxJQUFJLElBQUlnVSxJQUFNRixHQUNkcFIsSUFBSXFSLEtBQUtsVixJQUFJNEcsSUFBSXNPLElBQ2pCRSxJQUFNdlIsSUFBSStDLEdBQ1Z5TyxJQUFNeFIsSUFBSTdELEdBQ1ZzVixJQUFPL0UsR0FBUTZFLENBQUcsR0FDbEJHLElBQU9GLElBQU1DLElBQU9GLEdBQ3BCSSxJQUFZckYsR0FBbUI7QUFBQSxJQUNsQyxHQUFHbUY7QUFBQSxJQUNILEdBQUd6QixJQUFLMEI7QUFBQSxJQUNSLEdBQUd6QixJQUFLeUI7QUFBQSxFQUNULENBQUMsR0FDR0UsSUFBVSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUlELEVBQVUsR0FBR0EsRUFBVSxHQUFHQSxFQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzlFLEVBQUE1TyxJQUFJQSxJQUFJNk8sR0FDUnpWLElBQUlBLElBQUl5VixJQUFVcEYsR0FBSXpKLENBQUMsSUFBSUEsR0FDM0JBLElBQUl5SixHQUFJekosQ0FBQztBQUNULFFBQU00TixJQUFNO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixHQUFHeFUsS0FBS21WLElBQU1ELEtBQUtHLEtBQU9ILElBQUlDLElBQU1ELElBQUkvVCxJQUFJa1UsS0FBTztBQUFBLElBQ25ELEdBQUd6TyxJQUFJQSxJQUFJd08sSUFBTTtBQUFBLEVBQ2xCO0FBQ0EsU0FBSVosRUFBSSxNQUFHQSxFQUFJLElBQUk1TyxFQUFhLEtBQUssTUFBTW5DLEdBQUdHLENBQUMsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUM1RG1GLEVBQUksVUFBVSxXQUFReUwsRUFBSSxRQUFRekwsRUFBSSxRQUNuQ3lMO0FBQ1I7QUFJQSxTQUFTa0IsR0FBb0JsSyxHQUFLO0FBQ2pDLFFBQU1nSixJQUFNLEVBQUUsTUFBTSxRQUFRO0FBQzVCLEVBQUloSixFQUFJLFVBQVUsV0FBUWdKLEVBQUksUUFBUWhKLEVBQUk7QUFDMUMsUUFBTTFFLElBQUkwRSxFQUFJLE1BQU0sU0FBU0EsRUFBSSxJQUFJLEdBQy9CekUsSUFBSXlFLEVBQUksTUFBTSxTQUFTQSxFQUFJLElBQUksR0FDL0J4SyxJQUFJd0ssRUFBSSxNQUFNLFNBQVNBLEVBQUksSUFBSSxHQUMvQnFJLElBQUssS0FBSyxJQUFJL00sSUFBSSxNQUFNLEtBQUssRUFBRSxHQUMvQmdOLElBQUssS0FBSyxJQUFJaE4sSUFBSSxNQUFNLEtBQUssRUFBRSxHQUMvQixDQUFDbU8sR0FBT0MsQ0FBQyxJQUFJdEIsR0FBV0MsR0FBSUMsQ0FBRSxHQUM5QnFCLElBQU0sS0FDTmhVLElBQUksSUFBSWdVLElBQU1GLEdBQ2RHLElBQU0sSUFBSXJPLElBQUlvTyxLQUFPQSxJQUFNRCxJQUFJQSxJQUFJL1QsSUFBSTRGLElBQ3ZDc08sSUFBTXRPLElBQUltTyxJQUFJQyxLQUFPQSxJQUFNRCxJQUFJQSxJQUFJL1QsSUFBSTRGLElBQ3ZDdU8sSUFBTy9FLEdBQVE2RSxDQUFHLEdBQ2xCRyxJQUFPRixJQUFNQyxJQUFPRixHQUNwQkksSUFBWXJGLEdBQW1CO0FBQUEsSUFDcEMsR0FBR21GO0FBQUEsSUFDSCxHQUFHekIsSUFBSzBCO0FBQUEsSUFDUixHQUFHekIsSUFBS3lCO0FBQUEsRUFDVCxDQUFDLEdBQ0tFLElBQVUsS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJRCxFQUFVLEdBQUdBLEVBQVUsR0FBR0EsRUFBVSxHQUFHLENBQUMsQ0FBQyxHQUMxRUcsSUFBUXBGLEdBQVF2UCxJQUFJb1UsQ0FBRyxHQUN2QjNDLElBQUk0QyxJQUFNTSxJQUFRUDtBQUN4QixTQUFBWixFQUFJLElBQUltQixJQUFRRixHQUNoQmpCLEVBQUksSUFBSS9CLElBQUlvQixJQUFLNEIsR0FDakJqQixFQUFJLElBQUkvQixJQUFJcUIsSUFBSzJCLEdBQ1ZqQjtBQUNSO0FBSUEsSUFBSW9CLEtBQVk7QUFBQSxFQUNmLEdBQUd6SztBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPLENBQUMsU0FBUztBQUFBLEVBQ2pCLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxJQUNULE9BQU82SjtBQUFBLElBQ1AsS0FBSyxDQUFDaFYsTUFBTWdWLEdBQW9COUUsR0FBa0JsUSxDQUFDLENBQUM7QUFBQSxFQUNyRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsT0FBTzBWO0FBQUEsSUFDUCxLQUFLLENBQUMxVixNQUFNb1EsR0FBa0JzRixHQUFvQjFWLENBQUMsQ0FBQztBQUFBLEVBQ3JEO0FBQ0Q7QUFJQSxTQUFTNlYsR0FBVzVXLEdBQU9tRSxHQUFRO0FBQ2xDLE1BQUksQ0FBQ0EsS0FBVUEsRUFBTyxDQUFDLE1BQU0sUUFBUztBQUN0QyxRQUFNL0MsSUFBTSxFQUFFLE1BQU0sUUFBUSxHQUN0QixDQUFDLEVBQUV1RyxHQUFHaEQsR0FBR0gsR0FBR2QsQ0FBSyxJQUFJUztBQUMzQixNQUFJLEVBQUF3RCxFQUFFLFNBQVNsRixFQUFJLE9BQU9rQyxFQUFFLFNBQVNsQyxFQUFJLE9BQU8rQixFQUFFLFNBQVMvQixFQUFJO0FBQy9ELFdBQUlrRixFQUFFLFNBQVNsRixFQUFJLFNBQU1yQixFQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHdUcsRUFBRSxTQUFTbEYsRUFBSSxTQUFTa0YsRUFBRSxRQUFRQSxFQUFFLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFDckdoRCxFQUFFLFNBQVNsQyxFQUFJLFNBQU1yQixFQUFJLElBQUl1RCxFQUFFLFNBQVNsQyxFQUFJLFNBQVNrQyxFQUFFLFFBQVFBLEVBQUUsUUFBUSxNQUFLLE1BQzlFSCxFQUFFLFNBQVMvQixFQUFJLFNBQU1yQixFQUFJLElBQUlvRCxFQUFFLFNBQVMvQixFQUFJLFNBQVMrQixFQUFFLFFBQVFBLEVBQUUsUUFBUSxNQUFLLE1BQzlFZCxFQUFNLFNBQVNqQixFQUFJLFNBQU1yQixFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdzQyxFQUFNLFNBQVNqQixFQUFJLFNBQVNpQixFQUFNLFFBQVFBLEVBQU0sUUFBUSxHQUFHLENBQUMsSUFDdEh0QztBQUNSO0FBSUEsSUFBSXlWLEtBQWU7QUFBQSxFQUNsQixHQUFHekg7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNQLE1BQU04QjtBQUFBLElBQ04sS0FBS0M7QUFBQSxFQUNOO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxNQUFNTDtBQUFBLElBQ04sS0FBS0c7QUFBQSxFQUNOO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQUEsSUFDUixHQUFHLENBQUMsTUFBSyxHQUFFO0FBQUEsSUFDWCxHQUFHLENBQUMsTUFBSyxHQUFFO0FBQUEsRUFDWjtBQUFBLEVBQ0EsT0FBTyxDQUFDMkYsRUFBVTtBQUFBLEVBQ2xCLFdBQVcsQ0FBQzdWLE1BQU0sU0FBU0EsRUFBRSxNQUFNLFNBQVNBLEVBQUUsSUFBSSxNQUFNLElBQUlBLEVBQUUsTUFBTSxTQUFTQSxFQUFFLElBQUksTUFBTSxJQUFJQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sR0FBR0EsRUFBRSxRQUFRLElBQUksTUFBTUEsRUFBRSxLQUFLLEtBQUssRUFBRTtBQUNoSztBQUlBLFNBQVMrVixHQUFXOVcsR0FBT21FLEdBQVE7QUFDbEMsTUFBSSxDQUFDQSxLQUFVQSxFQUFPLENBQUMsTUFBTSxRQUFTO0FBQ3RDLFFBQU0vQyxJQUFNLEVBQUUsTUFBTSxRQUFRLEdBQ3RCLENBQUMsRUFBRXVHLEdBQUc1RyxHQUFHOEcsR0FBR25FLENBQUssSUFBSVM7QUFDM0IsTUFBSXdELEVBQUUsU0FBU2xGLEVBQUksTUFBTTtBQUN4QixRQUFJa0YsRUFBRSxTQUFTbEYsRUFBSSxJQUFLO0FBQ3hCLElBQUFyQixFQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHdUcsRUFBRSxTQUFTbEYsRUFBSSxTQUFTa0YsRUFBRSxRQUFRQSxFQUFFLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNqRjtBQUVBLE1BREk1RyxFQUFFLFNBQVMwQixFQUFJLFNBQU1yQixFQUFJLElBQUksS0FBSyxJQUFJLEdBQUdMLEVBQUUsU0FBUzBCLEVBQUksU0FBUzFCLEVBQUUsUUFBUUEsRUFBRSxRQUFRLE1BQUssR0FBRyxJQUM3RjhHLEVBQUUsU0FBU3BGLEVBQUksTUFBTTtBQUN4QixRQUFJb0YsRUFBRSxTQUFTcEYsRUFBSSxXQUFZO0FBQy9CLElBQUFyQixFQUFJLElBQUl5RyxFQUFFO0FBQUEsRUFDWDtBQUNBLFNBQUluRSxFQUFNLFNBQVNqQixFQUFJLFNBQU1yQixFQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdzQyxFQUFNLFNBQVNqQixFQUFJLFNBQVNpQixFQUFNLFFBQVFBLEVBQU0sUUFBUSxHQUFHLENBQUMsSUFDdEh0QztBQUNSO0FBSUEsSUFBSTJWLEtBQWU7QUFBQSxFQUNsQixHQUFHeEg7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNQLE9BQU8sQ0FBQ3hPLE1BQU1rSSxFQUFnQmxJLEdBQUcsT0FBTztBQUFBLElBQ3hDLEtBQUssQ0FBQ0EsTUFBTW9RLEdBQWtCbEksRUFBZ0JsSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQzFEO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDVCxLQUFLLENBQUNBLE1BQU1pSSxFQUFnQmlJLEdBQWtCbFEsQ0FBQyxHQUFHLE9BQU87QUFBQSxJQUN6RCxPQUFPLENBQUNBLE1BQU1pSSxFQUFnQmpJLEdBQUcsT0FBTztBQUFBLEVBQ3pDO0FBQUEsRUFDQSxPQUFPLENBQUMrVixFQUFVO0FBQUEsRUFDbEIsV0FBVyxDQUFDL1YsTUFBTSxTQUFTQSxFQUFFLE1BQU0sU0FBU0EsRUFBRSxJQUFJLE1BQU0sSUFBSUEsRUFBRSxNQUFNLFNBQVNBLEVBQUUsSUFBSSxNQUFNLElBQUlBLEVBQUUsTUFBTSxTQUFTQSxFQUFFLElBQUksTUFBTSxHQUFHQSxFQUFFLFFBQVEsSUFBSSxNQUFNQSxFQUFFLEtBQUssS0FBSyxFQUFFO0FBQUEsRUFDL0osUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUFBLElBQ1IsR0FBRyxDQUFDLEdBQUcsR0FBRTtBQUFBLElBQ1QsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLEVBQ1g7QUFDRCxHQUlJaVcsS0FBbUIsQ0FBQzFRLE1BQVE7QUFDL0IsTUFBSSxFQUFFLEdBQUFoQyxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBZCxFQUFNLElBQUkwQyxFQUFpQkUsQ0FBRyxHQUN6Q2xGLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcsb0JBQW1Ca0QsSUFBSSxvQkFBbUJDLElBQUkscUJBQW9CQztBQUFBLElBQ3JFLEdBQUcscUJBQW9CRixJQUFJLHFCQUFvQkMsSUFBSSxvQkFBbUJDO0FBQUEsSUFDdEUsR0FBRyxJQUFJRixJQUFJLHFCQUFvQkMsSUFBSSxvQkFBb0JDO0FBQUEsRUFDeEQ7QUFDQSxTQUFJZCxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSTZWLEtBQW1CLENBQUMsRUFBRSxHQUFBbFIsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUM5QyxFQUFJcUMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJN0UsSUFBTW9GLEVBQWlCO0FBQUEsSUFDMUIsR0FBR1QsSUFBSSxxQkFBcUJDLElBQUkscUJBQW9CLG9CQUFtQkM7QUFBQSxJQUN2RSxHQUFHRixJQUFJLHNCQUFxQkMsSUFBSSxxQkFBcUIscUJBQW9CQztBQUFBLElBQ3pFLEdBQUdGLElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQixxQkFBb0JDO0FBQUEsRUFDeEUsR0FBRyxJQUFJO0FBQ1AsU0FBSXZDLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJOFYsS0FBZTtBQUFBLEVBQ2xCLEdBQUd6UjtBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFlBQVk7QUFBQSxFQUNwQixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsSUFDVCxLQUFLLENBQUN6RixNQUFVaVgsR0FBaUI1USxFQUFrQnJHLENBQUssQ0FBQztBQUFBLElBQ3pELE9BQU9pWDtBQUFBLEVBQ1I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLEtBQUssQ0FBQ2pYLE1BQVV5RyxFQUFrQnVRLEdBQWlCaFgsQ0FBSyxDQUFDO0FBQUEsSUFDekQsT0FBT2dYO0FBQUEsRUFDUjtBQUNELEdBSUlHLEtBQVUsQ0FBQ3BWLE1BQU07QUFDcEIsTUFBSW9FLElBQU0sS0FBSyxJQUFJcEUsQ0FBQztBQUNwQixTQUFJb0UsS0FBTyxJQUFJLE1BQVksS0FBSyxLQUFLcEUsQ0FBQyxJQUFJLEtBQUssSUFBSW9FLEdBQUssSUFBSSxHQUFHLElBQ3hELEtBQUtwRTtBQUNiLEdBQ0lxVixLQUF5QixDQUFDLEVBQUUsR0FBQXJSLEdBQUcsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLE9BQUF2QyxFQUFNLE1BQU07QUFDcEQsRUFBSXFDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSTdFLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcrVixHQUFRcFIsSUFBSSxxQkFBcUJDLElBQUkscUJBQW9CLHFCQUFvQkMsQ0FBQztBQUFBLElBQ2pGLEdBQUdrUixHQUFRcFIsSUFBSSxzQkFBcUJDLElBQUkscUJBQXFCLHFCQUFvQkMsQ0FBQztBQUFBLElBQ2xGLEdBQUdrUixHQUFRcFIsSUFBSSxJQUFJQyxJQUFJLElBQUkscUJBQXFCQyxDQUFDO0FBQUEsRUFDbEQ7QUFDQSxTQUFJdkMsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUlpVyxLQUFjLENBQUN0VixJQUFJLE1BQU07QUFDNUIsTUFBSW9FLElBQU0sS0FBSyxJQUFJcEUsQ0FBQztBQUNwQixTQUFJb0UsS0FBTyxLQUFLLE1BQVksS0FBSyxLQUFLcEUsQ0FBQyxJQUFJLEtBQUssSUFBSW9FLEdBQUssR0FBRyxJQUNyRHBFLElBQUk7QUFDWixHQUNJdVYsS0FBeUIsQ0FBQ0MsTUFBYTtBQUMxQyxNQUFJalQsSUFBSStTLEdBQVlFLEVBQVMsQ0FBQyxHQUMxQmhULElBQUk4UyxHQUFZRSxFQUFTLENBQUMsR0FDMUIvUyxJQUFJNlMsR0FBWUUsRUFBUyxDQUFDLEdBQzFCblcsSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBRyxxQkFBb0JrRCxJQUFJLHFCQUFvQkMsSUFBSSxxQkFBb0JDO0FBQUEsSUFDdkUsR0FBRyxxQkFBb0JGLElBQUkscUJBQW9CQyxJQUFJLG1CQUFtQkM7QUFBQSxJQUN0RSxHQUFHLElBQUlGLElBQUksSUFBSUMsSUFBSSxxQkFBb0JDO0FBQUEsRUFDeEM7QUFDQSxTQUFJK1MsRUFBUyxVQUFVLFdBQVFuVyxFQUFJLFFBQVFtVyxFQUFTLFFBQzdDblc7QUFDUixHQUlJb1csS0FBZTtBQUFBLEVBQ2xCLEdBQUcvUjtBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLGNBQWM7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsSUFDVCxPQUFPMlI7QUFBQSxJQUNQLEtBQUssQ0FBQ3BYLE1BQVVvWCxHQUF1QnBJLEdBQWtCaFAsQ0FBSyxDQUFDO0FBQUEsRUFDaEU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLE9BQU9zWDtBQUFBLElBQ1AsS0FBSyxDQUFDdFgsTUFBVThPLEdBQWtCd0ksR0FBdUJ0WCxDQUFLLENBQUM7QUFBQSxFQUNoRTtBQUNELEdBSUl5WCxLQUFNLGtCQUNOQyxLQUFNLG1CQUNOQyxLQUFRLENBQUM1VixNQUFNO0FBQ2xCLFFBQU1vRSxJQUFNLEtBQUssSUFBSXBFLENBQUM7QUFDdEIsU0FBSW9FLElBQU11UixNQUFhLEtBQUssS0FBSzNWLENBQUMsS0FBSyxNQUFNMFYsS0FBTSxLQUFLLElBQUl0UixHQUFLLElBQUcsSUFBSSx1QkFDakUsTUFBTXBFO0FBQ2QsR0FDSTZWLEtBQXdCLENBQUMsRUFBRSxHQUFBN1IsR0FBRyxHQUFBQyxHQUFHLEdBQUFDLEdBQUcsT0FBQXZDLEVBQU0sTUFBTTtBQUNuRCxFQUFJcUMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixNQUFJN0UsSUFBTTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sR0FBR3VXLEdBQU01UixJQUFJLHFCQUFxQkMsSUFBSSxxQkFBb0IscUJBQW9CQyxDQUFDO0FBQUEsSUFDL0UsR0FBRzBSLEdBQU01UixJQUFJLHNCQUFxQkMsSUFBSSxxQkFBcUIscUJBQW9CQyxDQUFDO0FBQUEsSUFDaEYsR0FBRzBSLEdBQU01UixJQUFJLHFCQUFvQkMsSUFBSSxxQkFBb0IscUJBQW9CQyxDQUFDO0FBQUEsRUFDL0U7QUFDQSxTQUFJdkMsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUl5VyxLQUFJLGtCQUNKQyxLQUFJLG1CQUNKQyxLQUFZLENBQUNoVyxJQUFJLE1BQU07QUFDMUIsTUFBSW9FLElBQU0sS0FBSyxJQUFJcEUsQ0FBQztBQUNwQixTQUFJb0UsSUFBTTJSLEtBQUksTUFBWS9WLElBQUksT0FDdEIsS0FBSyxLQUFLQSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUtvRSxJQUFNMFIsS0FBSSxLQUFLQSxJQUFHLElBQUksSUFBRztBQUNqRSxHQUNJRyxLQUF3QixDQUFDQyxNQUFZO0FBQ3hDLE1BQUkzVCxJQUFJeVQsR0FBVUUsRUFBUSxDQUFDLEdBQ3ZCMVQsSUFBSXdULEdBQVVFLEVBQVEsQ0FBQyxHQUN2QnpULElBQUl1VCxHQUFVRSxFQUFRLENBQUMsR0FDdkI3VyxJQUFNO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixHQUFHLHFCQUFvQmtELElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkM7QUFBQSxJQUN2RSxHQUFHLG9CQUFtQkYsSUFBSSxxQkFBb0JDLElBQUksb0JBQW1CQztBQUFBLElBQ3JFLEdBQUcsSUFBSUYsSUFBSSxxQkFBb0JDLElBQUkscUJBQXFCQztBQUFBLEVBQ3pEO0FBQ0EsU0FBSXlULEVBQVEsVUFBVSxXQUFRN1csRUFBSSxRQUFRNlcsRUFBUSxRQUMzQzdXO0FBQ1IsR0FJSThXLEtBQWU7QUFBQSxFQUNsQixHQUFHelM7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNULE9BQU9tUztBQUFBLElBQ1AsS0FBSyxDQUFDNVgsTUFBVTRYLEdBQXNCdlIsRUFBa0JyRyxDQUFLLENBQUM7QUFBQSxFQUMvRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsT0FBT2dZO0FBQUEsSUFDUCxLQUFLLENBQUNoWSxNQUFVeUcsRUFBa0J1UixHQUFzQmhZLENBQUssQ0FBQztBQUFBLEVBQy9EO0FBQUEsRUFDQSxPQUFPLENBQUMsU0FBUztBQUFBLEVBQ2pCLFdBQVc7QUFDWixHQUlJbVksSUFBTyx1QkFDUEMsS0FBWSxLQUFLLEtBQUtELENBQUksR0FJMUJFLEtBQWEsQ0FBQ3RXLE1BQU0sS0FBSyxLQUFLQSxDQUFDLElBQUlxVyxJQUNuQ0UsS0FBa0IsQ0FBQ3RZLE1BQVU7QUFDaEMsUUFBTSxFQUFFLEdBQUFzRSxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBZCxFQUFNLElBQUkwQyxFQUFpQnBHLENBQUssR0FDM0MySCxJQUFJMFEsR0FBVyxNQUFLL1QsSUFBSSxRQUFPQyxJQUFJLFFBQU9DLElBQUkyVCxDQUFJLEdBQ2xEL00sSUFBSWlOLEdBQVcsT0FBTS9ULElBQUksUUFBT0MsSUFBSSxRQUFPQyxJQUFJMlQsQ0FBSSxHQUNuRHJRLElBQUl1USxHQUFXLHFCQUFvQi9ULElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkMsSUFBSTJULENBQUksR0FDM0YvVyxJQUFNO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixJQUFJdUcsSUFBSXlELEtBQUs7QUFBQSxJQUNiLElBQUl6RCxJQUFJeUQsS0FBSztBQUFBLElBQ2IsR0FBR3RELEtBQUtILElBQUl5RCxLQUFLO0FBQUEsRUFDbEI7QUFDQSxTQUFJMUgsTUFBVSxXQUFRdEMsRUFBSSxRQUFRc0MsSUFDM0J0QztBQUNSLEdBSUltWCxLQUFXLENBQUN4VyxNQUFNLEtBQUssSUFBSUEsSUFBSXFXLElBQVcsQ0FBQyxHQUMzQ0ksS0FBa0IsQ0FBQyxFQUFFLEdBQUF6UyxHQUFHLEdBQUFDLEdBQUcsR0FBQXhCLEdBQUcsT0FBQWQsRUFBTSxNQUFNO0FBQzdDLEVBQUlxQyxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQnhCLE1BQU0sV0FBUUEsSUFBSTtBQUN0QixRQUFNbUQsSUFBSTRRLEdBQVN4UyxJQUFJQyxDQUFDLElBQUltUyxHQUN0Qi9NLElBQUltTixHQUFTdlMsSUFBSUQsQ0FBQyxJQUFJb1MsR0FDdEJyUSxJQUFJeVEsR0FBUy9ULElBQUl3QixDQUFDLElBQUltUyxHQUN0Qi9XLElBQU1vRixFQUFpQjtBQUFBLElBQzVCLEdBQUcscUJBQXFCbUIsSUFBSSxvQkFBb0J5RCxJQUFJLHNCQUFxQnREO0FBQUEsSUFDekUsR0FBRyxzQkFBc0JILElBQUksb0JBQW9CeUQsSUFBSSxzQkFBcUJ0RDtBQUFBLElBQzFFLEdBQUcsc0JBQXNCSCxJQUFJLHFCQUFxQnlELElBQUkscUJBQXFCdEQ7QUFBQSxFQUM1RSxDQUFDO0FBQ0QsU0FBSXBFLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJcVgsS0FBZTtBQUFBLEVBQ2xCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxDQUFDLE9BQU87QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLFFBQVEsRUFBRSxLQUFLRCxHQUFnQjtBQUFBLEVBQy9CLFVBQVUsRUFBRSxLQUFLRixHQUFnQjtBQUFBLEVBQ2pDLFFBQVE7QUFBQSxJQUNQLEdBQUcsQ0FBQyxTQUFRLE1BQUs7QUFBQSxJQUNqQixHQUFHLENBQUMsR0FBRyxNQUFLO0FBQUEsSUFDWixHQUFHLENBQUMsU0FBUSxLQUFJO0FBQUEsRUFDakI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNaLEdBQUdoVDtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxPQUFPO0FBQUEsTUFDTixLQUFLQTtBQUFBLE1BQ0wsT0FBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUNELEdBSUltVCxLQUFlO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sT0FBTyxDQUFDLFNBQVM7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsSUFDUCxLQUFLNUo7QUFBQSxJQUNMLEtBQUtHO0FBQUEsRUFDTjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1QsS0FBS0Q7QUFBQSxJQUNMLEtBQUtIO0FBQUEsRUFDTjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxHQUFHLENBQUMsR0FBRyxLQUFJO0FBQUEsSUFDWCxHQUFHLENBQUMsR0FBRyxLQUFJO0FBQUEsSUFDWCxHQUFHLENBQUMsR0FBRyxLQUFJO0FBQUEsRUFDWjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1osR0FBR3ZKO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQ0QsR0FJSW9ULEtBQXNCLENBQUNDLE1BQVU7QUFDcEMsTUFBSSxFQUFFLEdBQUE3UyxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBdkMsRUFBTSxJQUFJa1Y7QUFDekIsRUFBSTdTLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSTdFLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcscUJBQXFCMkUsSUFBSSxxQkFBb0JDLElBQUkscUJBQW9CQztBQUFBLElBQ3hFLEdBQUcscUJBQW9CRixJQUFJLG9CQUFtQkMsSUFBSSxxQkFBb0JDO0FBQUEsSUFDdEUsR0FBRyxzQkFBcUJGLElBQUkscUJBQW9CQyxJQUFJLHFCQUFvQkM7QUFBQSxFQUN6RTtBQUNBLFNBQUl2QyxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSXlYLEtBQXNCLENBQUNDLE1BQVU7QUFDcEMsTUFBSSxFQUFFLEdBQUEvUyxHQUFHLEdBQUFDLEdBQUcsR0FBQUMsR0FBRyxPQUFBdkMsRUFBTSxJQUFJb1Y7QUFDekIsRUFBSS9TLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJLElBQ2xCQyxNQUFNLFdBQVFBLElBQUk7QUFDdEIsTUFBSTdFLElBQU07QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLEdBQUcscUJBQW9CMkUsSUFBSSxxQkFBb0JDLElBQUkscUJBQW9CQztBQUFBLElBQ3ZFLEdBQUcsc0JBQXFCRixJQUFJLHFCQUFxQkMsSUFBSSxvQkFBbUJDO0FBQUEsSUFDeEUsR0FBRyxxQkFBb0JGLElBQUkscUJBQW9CQyxJQUFJLHFCQUFxQkM7QUFBQSxFQUN6RTtBQUNBLFNBQUl2QyxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSTJYLEtBQWU7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDUCxLQUFLdFM7QUFBQSxJQUNMLE9BQU9rUztBQUFBLEVBQ1I7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNULEtBQUt0UztBQUFBLElBQ0wsT0FBT3dTO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsR0FBRyxDQUFDLEdBQUcsSUFBRztBQUFBLElBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUFBLElBQ1IsR0FBRyxDQUFDLEdBQUcsS0FBSztBQUFBLEVBQ2I7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxDQUFDLE9BQU8sU0FBUztBQUFBLEVBQ3hCLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxJQUNaLEdBQUd2VDtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILEdBQUdBO0FBQUEsSUFDSCxPQUFPO0FBQUEsTUFDTixLQUFLQTtBQUFBLE1BQ0wsT0FBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUNELEdBSUl5VCxLQUFrQixDQUFDLEVBQUUsR0FBQTFVLEdBQUcsR0FBQUMsR0FBRyxHQUFBQyxHQUFHLE9BQUFkLEVBQU0sTUFBTTtBQUM3QyxFQUFJWSxNQUFNLFdBQVFBLElBQUksSUFDbEJDLE1BQU0sV0FBUUEsSUFBSSxJQUNsQkMsTUFBTSxXQUFRQSxJQUFJO0FBQ3RCLFFBQU1wRCxJQUFNO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixHQUFHLGFBQVlrRCxJQUFJLGFBQVlDLElBQUksYUFBWUM7QUFBQSxJQUMvQyxHQUFHLGFBQVlGLElBQUksWUFBV0MsSUFBSSxhQUFZQztBQUFBLElBQzlDLEdBQUcsYUFBWUYsSUFBSSxhQUFZQyxJQUFJLGFBQVlDO0FBQUEsRUFDaEQ7QUFDQSxTQUFJZCxNQUFVLFdBQVF0QyxFQUFJLFFBQVFzQyxJQUMzQnRDO0FBQ1IsR0FJSTZYLEtBQWtCLENBQUMsRUFBRSxHQUFBalQsR0FBRyxHQUFBaEIsR0FBRyxHQUFBa1UsR0FBRyxPQUFBeFYsRUFBTSxNQUFNO0FBQzdDLEVBQUlzQyxNQUFNLFdBQVFBLElBQUksSUFDbEJoQixNQUFNLFdBQVFBLElBQUksSUFDbEJrVSxNQUFNLFdBQVFBLElBQUk7QUFDdEIsUUFBTTlYLElBQU07QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLEdBQUc0RSxJQUFJLGFBQVloQixJQUFJLFlBQVdrVTtBQUFBLElBQ2xDLEdBQUdsVCxJQUFJLGFBQVloQixJQUFJLFlBQVdrVTtBQUFBLElBQ2xDLEdBQUdsVCxJQUFJLGFBQWFoQixJQUFJLGFBQWFrVTtBQUFBLEVBQ3RDO0FBQ0EsU0FBSXhWLE1BQVUsV0FBUXRDLEVBQUksUUFBUXNDLElBQzNCdEM7QUFDUixHQUlJYSxLQUFhO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sUUFBUSxFQUFFLEtBQUtnWCxHQUFnQjtBQUFBLEVBQy9CLFVBQVUsRUFBRSxLQUFLRCxHQUFnQjtBQUFBLEVBQ2pDLFVBQVU7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTyxDQUFDLE9BQU87QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxJQUNQLEdBQUcsQ0FBQyxRQUFPLEtBQUk7QUFBQSxJQUNmLEdBQUcsQ0FBQyxRQUFPLEtBQUk7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1osR0FBRzFUO0FBQUEsSUFDSCxHQUFHQTtBQUFBLElBQ0gsR0FBR0E7QUFBQSxJQUNILE9BQU87QUFBQSxNQUNOLEtBQUtBO0FBQUEsTUFDTCxPQUFPQztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBQ0QsR0FJSWpCLEtBQUksQ0FBQ3BCLEdBQU9pVyxNQUFjLEtBQUssTUFBTWpXLEtBQVNpVyxJQUFZLEtBQUssSUFBSSxJQUFJQSxDQUFTLEVBQUUsSUFBSUEsR0FDdEZDLEtBQVEsQ0FBQ0QsSUFBWSxNQUFNLENBQUNqVyxNQUFVLE9BQU9BLEtBQVUsV0FBV29CLEdBQUVwQixHQUFPaVcsQ0FBUyxJQUFJalcsR0FJeEZtVyxLQUFjRCxHQUFNLENBQUMsR0FDckJFLEtBQVUsQ0FBQ3BXLE1BQVUsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUdBLEtBQVMsQ0FBQyxDQUFDLEdBQ3hEcVcsS0FBUSxDQUFDclcsTUFBVSxLQUFLLE1BQU1vVyxHQUFRcFcsQ0FBSyxJQUFJLEdBQUcsR0FDbERzVyxLQUFRaFksR0FBVSxLQUFLLEdBQ3ZCaVksS0FBUWpZLEdBQVUsS0FBSyxHQUN2QmtZLEtBQWUsQ0FBQzFaLE1BQVU7QUFDN0IsTUFBSUEsTUFBVSxPQUFRO0FBQ3RCLE1BQUlzRSxJQUFJaVYsR0FBTXZaLEVBQU0sQ0FBQyxHQUNqQnVFLElBQUlnVixHQUFNdlosRUFBTSxDQUFDLEdBQ2pCd0UsSUFBSStVLEdBQU12WixFQUFNLENBQUM7QUFDckIsU0FBTyxPQUFPLEtBQUssS0FBS3NFLEtBQUssS0FBS0MsS0FBSyxJQUFJQyxHQUFHLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQztBQUNuRSxHQUNJbVYsS0FBWSxDQUFDNVksTUFBTTJZLEdBQWFGLEdBQU16WSxDQUFDLENBQUMsR0FJeEM2RSxLQUFNNUQsRUFBUTBFLEVBQWEsR0FDM0JrVCxLQUFZNVgsRUFBUStHLEVBQWEsR0FDakM4USxLQUFPN1gsRUFBUWdKLEVBQWEsR0FDNUI4TyxLQUFPOVgsRUFBUWlKLEVBQWEsR0FDNUI4TyxLQUFNL1gsRUFBUXFKLEVBQWEsR0FDM0J3SyxLQUFNN1QsRUFBUStKLEVBQWEsR0FDM0JRLEtBQU12SyxFQUFRa0ssRUFBYSxHQUMzQjhOLEtBQU1oWSxFQUFReUssRUFBYSxHQUMzQndOLEtBQU1qWSxFQUFReUwsRUFBYSxHQUMzQnlNLEtBQU1sWSxFQUFReU0sRUFBYSxHQUMzQjBMLEtBQU1uWSxFQUFRNE0sRUFBYSxHQUMzQjlFLEtBQU05SCxFQUFRb04sRUFBYSxHQUMzQmdMLEtBQVFwWSxFQUFRcU4sRUFBYSxHQUM3QmdMLEtBQU1yWSxFQUFRdU4sRUFBYSxHQUMzQitLLEtBQVF0WSxFQUFRd04sRUFBYSxHQUM3QmlCLEtBQVF6TyxFQUFRME8sRUFBYSxHQUM3QjZKLEtBQU92WSxFQUFRMk8sRUFBYSxHQUM1QkUsS0FBTTdPLEVBQVE0TyxFQUFZLEdBQzFCNEosS0FBUXhZLEVBQVE4VCxFQUFTLEdBQ3pCMkUsS0FBUXpZLEVBQVEyVSxFQUFTLEdBQ3pCK0QsS0FBUTFZLEVBQVE2VSxFQUFZLEdBQzVCOEQsS0FBUTNZLEVBQVErVSxFQUFZLEdBQzVCNkQsS0FBSzVZLEVBQVFrVixFQUFZLEdBQ3pCSyxLQUFXdlYsRUFBUXdWLEVBQVksR0FDL0JTLEtBQVVqVyxFQUFRa1csRUFBWSxHQUM5QjVSLEtBQU10RSxFQUFReUQsQ0FBYSxHQUMzQm9WLEtBQU03WSxFQUFReVcsRUFBWSxHQUMxQkssS0FBUTlXLEVBQVEwVyxFQUFZLEdBQzVCRSxLQUFRNVcsRUFBUStXLEVBQVksR0FDNUIrQixLQUFNOVksRUFBUUMsRUFBVSxHQUl4QjhZLEtBQWEsQ0FBQ0MsR0FBTUMsSUFBVyxRQUFRRCxFQUFLLEtBQUssQ0FBQ3JXLEdBQUdILE1BQU0sS0FBSyxLQUFLbVcsR0FBTTtBQUFBLEVBQzlFLE1BQU07QUFBQSxFQUNOLEdBQUdoVyxFQUFFLENBQUM7QUFBQSxFQUNOLEdBQUdBLEVBQUUsQ0FBQztBQUFBLEVBQ04sR0FBR0EsRUFBRSxDQUFDO0FBQ1AsQ0FBQyxJQUFJc1csQ0FBUSxJQUFJTixHQUFNO0FBQUEsRUFDdEIsTUFBTTtBQUFBLEVBQ04sR0FBR25XLEVBQUUsQ0FBQztBQUFBLEVBQ04sR0FBR0EsRUFBRSxDQUFDO0FBQUEsRUFDTixHQUFHQSxFQUFFLENBQUM7QUFDUCxDQUFDLElBQUl5VyxDQUFRLENBQUMsS0FBSyxDQUFDLEdBQ2hCQyxLQUFvQixDQUFDQyxHQUFRQyxNQUFXLEtBQUssTUFBTUQsRUFBTyxDQUFDLElBQUlDLEVBQU8sQ0FBQyxHQUFHRCxFQUFPLENBQUMsSUFBSUMsRUFBTyxDQUFDLEdBQUdELEVBQU8sQ0FBQyxJQUFJQyxFQUFPLENBQUMsQ0FBQyxHQUN0SEMsS0FBZSxDQUFDQyxHQUFNQyxNQUFjO0FBQ3ZDLE1BQUlDLElBQVcsTUFBTSxLQUFLLEVBQUUsUUFBUUQsRUFBVSxPQUFPLEdBQUcsT0FBTztBQUFBLElBQzlELFFBQVEsQ0FBQztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1AsRUFBRTtBQUNGLFNBQUFELEVBQUssUUFBUSxDQUFDRyxNQUFVO0FBQ3ZCLFFBQUlDLElBQWMsS0FDZEMsSUFBMEI7QUFDOUIsSUFBQUosRUFBVSxRQUFRLENBQUNLLEdBQVVDLE1BQVU7QUFDdEMsWUFBTUMsSUFBV1osR0FBa0JPLEdBQU9HLENBQVE7QUFDbEQsT0FBSSxPQUFPRixJQUFnQixPQUFlQSxJQUFjSSxPQUN2REosSUFBY0ksR0FDZEgsSUFBMEJFO0FBQUEsSUFFNUIsQ0FBQyxHQUNETCxFQUFTRyxDQUF1QixFQUFFLE9BQU8sS0FBS0YsQ0FBSztBQUFBLEVBQ3BELENBQUMsR0FDTUQ7QUFDUixHQUNJTyxLQUFjLENBQUNDLE1BQ1hBLEdBQVEsU0FBUyxJQUFJQSxFQUFPLE9BQU8sQ0FBQ2hWLEdBQUt5VSxNQUFVO0FBQUEsRUFDekRBLEVBQU0sQ0FBQyxJQUFJelUsRUFBSSxDQUFDO0FBQUEsRUFDaEJ5VSxFQUFNLENBQUMsSUFBSXpVLEVBQUksQ0FBQztBQUFBLEVBQ2hCeVUsRUFBTSxDQUFDLElBQUl6VSxFQUFJLENBQUM7QUFDakIsR0FBRztBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNELENBQUMsRUFBRSxJQUFJLENBQUMyQixNQUFRQSxJQUFNcVQsRUFBTyxNQUFNLElBQUk7QUFBQSxFQUN0QztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0QsR0FFR0MsS0FBUyxDQUFDWCxHQUFNcFosTUFBTTtBQUN6QixNQUFJcVosSUFBWVIsR0FBV21CLEdBQW9CWixHQUFNcFosQ0FBQyxDQUFDO0FBQ3ZELFFBQU1pYSxJQUFnQjtBQUN0QixXQUFTQyxJQUFZLEdBQUdBLElBQVlELEdBQWVDLEtBQWE7QUFDL0QsVUFBTUMsSUFBZWhCLEdBQWFDLEdBQU1DLENBQVMsRUFBRSxJQUFJLENBQUNlLE1BQVlBLEVBQVEsT0FBTyxTQUFTLElBQUlQLEdBQVlPLEVBQVEsTUFBTSxJQUFJLElBQUk7QUFDbEksUUFBSUQsRUFBYSxNQUFNLENBQUNFLEdBQWFWLE1BQVVVLEtBQWVyQixHQUFrQnFCLEdBQWFoQixFQUFVTSxDQUFLLENBQUMsSUFBSSxJQUFJLEVBQUc7QUFDeEgsSUFBQU4sSUFBWWM7QUFBQSxFQUNiO0FBQ0EsU0FBT2Q7QUFDUixHQUNJVyxLQUFzQixDQUFDWixHQUFNcFosTUFBTTtBQUN0QyxRQUFNcVosSUFBWSxDQUFDRCxFQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSUEsRUFBSyxNQUFNLENBQUMsQ0FBQztBQUNoRSxTQUFPQyxFQUFVLFNBQVNyWixLQUFHO0FBQzVCLFVBQU1zYSxJQUFZbEIsRUFBSyxJQUFJLENBQUNHLE1BQVUsS0FBSyxJQUFJLEdBQUdGLEVBQVUsSUFBSSxDQUFDSyxNQUFhVixHQUFrQk8sR0FBT0csQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUM1R2EsSUFBZ0JELEVBQVUsT0FBTyxDQUFDNVQsR0FBS3pCLE1BQU15QixJQUFNekIsR0FBRyxDQUFDLEdBQ3ZEdVYsSUFBZ0JGLEVBQVUsSUFBSSxDQUFDclYsTUFBTUEsSUFBSXNWLENBQWE7QUFDNUQsUUFBSUUsSUFBd0I7QUFDNUIsVUFBTUMsSUFBYyxLQUFLLE9BQU87QUFDaEMsYUFBUzVYLElBQUksR0FBR0EsSUFBSTBYLEVBQWMsUUFBUTFYO0FBRXpDLFVBREEyWCxLQUF5QkQsRUFBYzFYLENBQUMsR0FDcEM0WCxJQUFjRCxHQUF1QjtBQUN4QyxRQUFBcEIsRUFBVSxLQUFLRCxFQUFLdFcsQ0FBQyxDQUFDO0FBQ3RCO0FBQUEsTUFDRDtBQUFBLEVBRUY7QUFDQSxTQUFPdVc7QUFDUixHQUNJc0IsS0FBZ0IsT0FBT0MsTUFBVztBQUNyQyxRQUFNQyxJQUFPRCxhQUFrQixRQUFRQSxhQUFrQixPQUFPQSxJQUFTLE1BQU0sTUFBTUEsQ0FBTSxHQUFHLE9BQU8sQ0FBQ3hZLE1BQU1BLEdBQUcsT0FBTyxDQUFDLEdBQ2pIMFksSUFBUyxNQUFNLGtCQUFrQkQsQ0FBSSxHQUNyQ0UsSUFBUyxJQUFJLGdCQUFnQkQsRUFBTyxPQUFPQSxFQUFPLE1BQU0sR0FDeERFLElBQU1ELEVBQU8sV0FBVyxJQUFJO0FBQ2xDLFNBQUFDLEVBQUksU0FBUyxjQUNiQSxHQUFLLFlBQVlGLEdBQVEsR0FBRyxHQUFHQyxFQUFPLE9BQU9BLEVBQU8sTUFBTSxHQUNuREE7QUFDUixHQUNJRSxLQUFzQixPQUFPTCxNQUFXO0FBQzNDLFFBQU1FLElBQVMsTUFBTUgsR0FBY0MsQ0FBTSxHQUNuQ0csSUFBUyxJQUFJLGdCQUFnQkQsRUFBTyxRQUFRLE9BQU1BLEVBQU8sU0FBUyxLQUFJLEdBQ3RFRSxJQUFNRCxFQUFPLFdBQVcsSUFBSTtBQUNsQyxFQUFBQyxHQUFLLFlBQVlGLEdBQVEsR0FBRyxHQUFHQyxFQUFPLE9BQU9BLEVBQU8sTUFBTTtBQUMxRCxRQUFNM0IsS0FBUTRCLEdBQUssZUFBZSxHQUFHLEdBQUdELEVBQU8sT0FBT0EsRUFBTyxRQUFRO0FBQUEsSUFDcEUsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2IsQ0FBQyxHQUFHLE1BQ0VHLElBQVdILEVBQU8sUUFBUUEsRUFBTyxVQUFVLEdBQzNDSSxJQUFLLElBQUksS0FDVEMsSUFBTyxDQUFDO0FBQ2QsV0FBU3hWLElBQUksR0FBR0EsSUFBSXNWLEdBQVV0VixLQUFLO0FBQ2xDLFVBQU15VixJQUFLelYsSUFBSTtBQUNmLElBQUF3VixFQUFLLEtBQUtoQyxhQUFnQixnQkFBZ0JBLGFBQWdCLGVBQWU7QUFBQSxNQUN4RUEsSUFBT2lDLElBQUssQ0FBQyxLQUFLO0FBQUEsTUFDbEJqQyxJQUFPaUMsSUFBSyxDQUFDLEtBQUs7QUFBQSxNQUNsQmpDLElBQU9pQyxJQUFLLENBQUMsS0FBSztBQUFBLElBQ25CLElBQUk7QUFBQSxPQUNGakMsSUFBT2lDLElBQUssQ0FBQyxLQUFLLEtBQUtGO0FBQUEsT0FDdkIvQixJQUFPaUMsSUFBSyxDQUFDLEtBQUssS0FBS0Y7QUFBQSxPQUN2Qi9CLElBQU9pQyxJQUFLLENBQUMsS0FBSyxLQUFLRjtBQUFBLElBQ3pCLENBQUM7QUFBQSxFQUNGO0FBQ0EsU0FBT0M7QUFDUixHQUNJRSxLQUFvQixPQUFPVixNQUFXO0FBQ3pDLFFBQU14QixJQUFPLE1BQU02QixHQUFvQkwsQ0FBTTtBQUM3QyxTQUFPL0IsR0FBV2tCLEdBQU9YLEdBQU0sQ0FBQyxHQUFHLEdBQUc7QUFDdkMsR0FJSW1DLEtBQThCLHNCQUM5QkMsS0FBZ0Msd0JBQ2hDQyxLQUFrQywwQkFDbENDLEtBQW9CSCxJQUNwQkksS0FBc0JILElBQ3RCSSxLQUFvQkgsSUFDcEJJLEtBQWdCLE1BQ2hCQyxLQUFtQixPQUNuQkMsS0FBaUI7QUFBQSxFQUNwQixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQ1gsR0FDSUMsS0FBYTtBQUFBLEVBQ2hCLENBQUMsbUJBQW1CLFNBQVM7QUFBQSxFQUM3QixDQUFDLHFCQUFxQixXQUFXO0FBQUEsRUFDakMsQ0FBQyxvQkFBb0IsVUFBVTtBQUFBLEVBQy9CLENBQUMsZ0JBQWdCLFNBQVM7QUFBQSxFQUMxQixDQUFDLG1CQUFtQixTQUFTO0FBQUEsRUFDN0IsQ0FBQyxnQkFBZ0IsU0FBUztBQUFBLEVBQzFCLENBQUMsYUFBYSxTQUFTO0FBQUEsRUFDdkIsQ0FBQyxlQUFlLFdBQVc7QUFBQSxFQUMzQixDQUFDLGNBQWMsVUFBVTtBQUMxQixHQUNJQyxLQUFRLENBQUNDLEdBQUdDLEdBQUlDLE1BQU8sS0FBSyxJQUFJQSxHQUFJLEtBQUssSUFBSUQsR0FBSUQsQ0FBQyxDQUFDLEdBQ25ERyxLQUFXLENBQUM1VyxHQUFHNUcsR0FBRzhHLEdBQUcyVyxNQUFhN0UsR0FBVTtBQUFBLEVBQy9DLE1BQU07QUFBQSxFQUNOLEdBQUFoUztBQUFBLEVBQ0EsR0FBQTVHO0FBQUEsRUFDQSxHQUFBOEc7QUFDRCxDQUFDLEtBQUsyVyxHQUNGQyxLQUFjLENBQUNuWSxNQUFRO0FBQzFCLFFBQU0sQ0FBQ2hDLEdBQUdDLEdBQUdDLENBQUMsSUFBSThCO0FBQ2xCLE1BQUksQ0FBQztBQUFBLElBQ0poQztBQUFBLElBQ0FDO0FBQUEsSUFDQUM7QUFBQSxFQUNELEVBQUUsTUFBTSxDQUFDLE1BQU0sT0FBTyxTQUFTLENBQUMsQ0FBQyxFQUFHLFFBQU87QUFDM0MsUUFBTXBFLElBQU11WixHQUFVO0FBQUEsSUFDckIsTUFBTTtBQUFBLElBQ04sR0FBQXJWO0FBQUEsSUFDQSxHQUFBQztBQUFBLElBQ0EsR0FBQUM7QUFBQSxFQUNELENBQUM7QUFDRCxNQUFJLENBQUNwRSxFQUFLLFFBQU87QUFDakIsUUFBTXNlLElBQUsvRCxHQUFNO0FBQUEsSUFDaEIsTUFBTTtBQUFBLElBQ04sR0FBQXJXO0FBQUEsSUFDQSxHQUFBQztBQUFBLElBQ0EsR0FBQUM7QUFBQSxFQUNELENBQUM7QUFDRCxTQUFPO0FBQUEsSUFDTixLQUFBOEI7QUFBQSxJQUNBLEtBQUFsRztBQUFBLElBQ0EsR0FBR3NlLEdBQUksS0FBSztBQUFBLElBQ1osR0FBR0EsR0FBSSxLQUFLO0FBQUEsSUFDWixHQUFHQSxHQUFJLEtBQUs7QUFBQSxFQUNiO0FBQ0QsR0FDSUMsS0FBZ0IsQ0FBQ3ZlLE1BQVF1YSxHQUFNdmEsQ0FBRyxHQUFHLEtBQUssS0FDMUN3ZSxLQUFlLENBQUNDLE1BQWNBLElBQVk7QUFBQSxFQUM3QyxRQUFRO0FBQUEsRUFDUixNQUFNO0FBQ1AsSUFBSTtBQUFBLEVBQ0gsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUNQLEdBQ0lDLEtBQXdDLENBQUNDLE1BQVk7QUFDeEQsTUFBSSxDQUFDQSxFQUFRLE9BQVEsUUFBTyxFQUFFLEdBQUdkLEdBQWU7QUFDaEQsUUFBTWUsSUFBUUQsRUFBUSxPQUFPLENBQUNuVyxHQUFLZCxNQUFNYyxJQUFNZCxFQUFFLEdBQUcsQ0FBQyxJQUFJaVgsRUFBUSxRQUMzREUsSUFBUSxDQUFDLEdBQUdGLENBQU8sRUFBRSxLQUFLLENBQUNwYSxHQUFHSCxNQUFNRyxFQUFFLElBQUlILEVBQUUsS0FBSyxLQUFLLElBQUlHLEVBQUUsSUFBSXFhLENBQUssSUFBSSxLQUFLLElBQUl4YSxFQUFFLElBQUl3YSxDQUFLLENBQUMsRUFBRSxDQUFDLEdBQ2pHRSxJQUFTZixHQUFNYyxFQUFNLElBQUksT0FBTUQsSUFBUSxNQUFLLE1BQUssSUFBRyxHQUNwREcsSUFBUyxLQUFLLElBQUluQixJQUFrQixLQUFLLElBQUksR0FBR2lCLEVBQU0sSUFBSSxHQUFFLENBQUMsR0FDN0RwWCxJQUFJb1gsRUFBTSxLQUFLLEdBQ2ZKLElBQVlLLElBQVNuQjtBQUMzQixTQUFPO0FBQUEsSUFDTixZQUFZUSxHQUFTVyxHQUFRQyxHQUFRdFgsR0FBR2dYLElBQVlaLEdBQWUsYUFBYSxTQUFTO0FBQUEsSUFDekYsVUFBVU0sR0FBU00sSUFBWSxPQUFNLE1BQUssTUFBTWhYLEdBQUdnWCxJQUFZWixHQUFlLFdBQVcsU0FBUztBQUFBLEVBQ25HO0FBQ0QsR0FDSW1CLEtBQXFDLENBQUNDLE1BQ2xDQSxLQUFRdEIsS0FBZ0IsRUFBRSxHQUFHRSxHQUFlLElBQUk7QUFBQSxFQUN0RCxZQUFZO0FBQUEsRUFDWixVQUFVO0FBQ1gsR0FFR3FCLEtBQW9CLENBQUNDLE1BQVUsR0FBUUEsRUFBTSxjQUFjQSxFQUFNLFdBQ2pFQyxLQUFxQixDQUFDakUsTUFBYztBQUN2QyxRQUFNd0QsSUFBVXhELEVBQVUsSUFBSWtELEVBQVcsRUFBRSxPQUFPLE9BQU87QUFDekQsTUFBSSxDQUFDTSxFQUFRLE9BQVEsUUFBTztBQUM1QixRQUFNVSxJQUFhVixFQUFRLE9BQU8sQ0FBQ2pYLE1BQU1BLEVBQUUsS0FBSyxRQUFPQSxFQUFFLEtBQUssUUFBT0EsRUFBRSxLQUFLLElBQUcsRUFBRSxLQUFLLENBQUNuRCxHQUFHSCxNQUFNQSxFQUFFLElBQUlHLEVBQUUsS0FBSyxLQUFLLElBQUlILEVBQUUsSUFBSSxJQUFHLElBQUksS0FBSyxJQUFJRyxFQUFFLElBQUksSUFBRyxDQUFDLEdBQ2hKK2EsSUFBT0QsRUFBVyxTQUFTQSxJQUFhLENBQUMsR0FBR1YsQ0FBTyxFQUFFLEtBQUssQ0FBQ3BhLEdBQUdILE1BQU1BLEVBQUUsSUFBSUcsRUFBRSxDQUFDLEdBQzdFZ2IsSUFBVUQsRUFBSyxDQUFDO0FBQ3RCLE1BQUksQ0FBQ0MsRUFBUyxRQUFPO0FBQ3JCLFFBQU1DLElBQVUsQ0FBQ2piLEdBQUdILE1BQU07QUFDekIsVUFBTTJDLElBQUksS0FBSyxJQUFJeEMsSUFBSUgsQ0FBQyxJQUFJO0FBQzVCLFdBQU8yQyxJQUFJLE1BQU0sTUFBTUEsSUFBSUE7QUFBQSxFQUM1QixHQUNNMFksSUFBVyxDQUFDQyxNQUFTO0FBQzFCLFVBQU1DLElBQU9MLEVBQUssT0FBTyxDQUFDNVgsTUFBTSxDQUFDZ1ksRUFBSyxTQUFTaFksQ0FBQyxDQUFDO0FBQ2pELFFBQUksQ0FBQ2lZLEVBQUssUUFBUTtBQUNqQixZQUFNQyxJQUFPRixFQUFLQSxFQUFLLFNBQVMsQ0FBQyxLQUFLSCxHQUNoQ00sSUFBU3RHLEdBQVU7QUFBQSxRQUN4QixNQUFNO0FBQUEsUUFDTixHQUFHLEtBQUssSUFBSSxNQUFLLEtBQUssSUFBSSxLQUFJcUcsRUFBSyxLQUFLRixFQUFLLFdBQVcsSUFBSSxRQUFPLElBQUcsQ0FBQztBQUFBLFFBQ3ZFLEdBQUcsS0FBSyxJQUFJLE1BQUtFLEVBQUssSUFBSSxJQUFHO0FBQUEsUUFDN0IsR0FBR0EsRUFBSztBQUFBLE1BQ1QsQ0FBQztBQUNELGFBQU87QUFBQSxRQUNOLEdBQUdBO0FBQUEsUUFDSCxLQUFLQyxLQUFVRCxFQUFLO0FBQUEsUUFDcEIsR0FBR0EsRUFBSztBQUFBLE1BQ1Q7QUFBQSxJQUNEO0FBQ0EsV0FBTyxDQUFDLEdBQUdELENBQUksRUFBRSxLQUFLLENBQUNwYixHQUFHSCxNQUFNLEtBQUssSUFBSSxHQUFHc2IsRUFBSyxJQUFJLENBQUNwUSxNQUFNa1EsRUFBUXBiLEVBQUUsR0FBR2tMLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksR0FBR29RLEVBQUssSUFBSSxDQUFDcFEsTUFBTWtRLEVBQVFqYixFQUFFLEdBQUcrSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUtsTCxFQUFFLElBQUlHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBS29iLEVBQUssQ0FBQztBQUFBLEVBQzdKLEdBQ01HLElBQVlMLEVBQVMsQ0FBQ0YsQ0FBTyxDQUFDLEdBQzlCUSxJQUFXTixFQUFTLENBQUNGLEdBQVNPLENBQVMsQ0FBQyxHQUN4Q2pCLElBQVFILEdBQXNDQyxDQUFPO0FBQzNELFNBQU87QUFBQSxJQUNOLFNBQVNZLEVBQVE7QUFBQSxJQUNqQixXQUFXTyxFQUFVO0FBQUEsSUFDckIsVUFBVUMsRUFBUztBQUFBLElBQ25CLEdBQUdsQjtBQUFBLEVBQ0o7QUFDRCxHQUNJbUIsS0FBYSxNQUFNO0FBQ3RCLFFBQU1DLElBQXdCLG9CQUFJLElBQUk7QUFDdEMsU0FBQUEsRUFBTSxJQUFJLFNBQVMsZUFBZSxHQUNsQyxTQUFTLGlCQUFpQiwyQ0FBMkMsRUFBRSxRQUFRLENBQUNDLE1BQU9ELEVBQU0sSUFBSUMsQ0FBRSxDQUFDLEdBQzdGLENBQUMsR0FBR0QsQ0FBSztBQUNqQixHQUNJRSxLQUF5QixNQUFNO0FBQ2xDLE1BQUksT0FBTyxXQUFhLElBQWEsUUFBTztBQUM1QyxRQUFNQyxJQUFNLE9BQU8sU0FBUyxnQkFBZ0IsUUFBUSxlQUFlLEVBQUU7QUFDckUsU0FBS0EsSUFDRUEsTUFBUSxlQUFlQSxNQUFRLGdCQUFnQkEsTUFBUSxxQkFEN0M7QUFFbEIsR0FDSUMsS0FBNEIsQ0FBQ3hCLEdBQU95QixJQUFhLENBQUMsTUFBTTtBQUMzRCxNQUFJLE9BQU8sV0FBYSxJQUFhO0FBQ3JDLFFBQU03QixJQUFZRixHQUFjTSxFQUFNLFVBQVUsSUFBSWxCLElBQzlDLEVBQUUsUUFBQTRDLEdBQVEsTUFBQUMsRUFBSyxJQUFJaEMsR0FBYUMsQ0FBUyxHQUN6Q2dDLElBQVEsSUFBSSxJQUFJVCxHQUFXLENBQUM7QUFDbEMsYUFBV0UsS0FBTUksRUFBWSxDQUFBRyxFQUFNLElBQUlQLENBQUU7QUFDekMsYUFBV1EsS0FBUUQ7QUFDbEIsSUFBQUMsRUFBSyxNQUFNLFlBQVksZ0NBQWdDN0IsRUFBTSxVQUFVLEdBQ3ZFNkIsRUFBSyxNQUFNLFlBQVksOEJBQThCN0IsRUFBTSxRQUFRLEdBQ25FNkIsRUFBSyxNQUFNLFlBQVkscUJBQXFCN0IsRUFBTSxRQUFRLEdBQzFENkIsRUFBSyxNQUFNLFlBQVksNEJBQTRCSCxDQUFNLEdBQ3pERyxFQUFLLE1BQU0sWUFBWSwwQkFBMEJGLENBQUk7QUFFdkQsR0FDSUcsS0FBOEIsQ0FBQzFCLEdBQU1xQixJQUFhLENBQUMsTUFBTTtBQUM1RCxRQUFNekIsSUFBUUcsR0FBbUNDLENBQUk7QUFDckQsU0FBQW9CLEdBQTBCeEIsR0FBT3lCLENBQVUsR0FDcEN6QjtBQUNSLEdBQ0krQixLQUEyQixDQUFDekIsTUFBVTtBQUN6QyxRQUFNMEIsSUFBTzFCO0FBQ2IsTUFBSTtBQUNILGlCQUFhLFFBQVEzQixJQUFtQixLQUFLLFVBQVVxRCxDQUFJLENBQUMsR0FDNUQsYUFBYSxRQUFRcEQsSUFBcUJvRCxFQUFLLE9BQU87QUFBQSxFQUN2RCxRQUFRO0FBQUEsRUFBQztBQUVULE1BREkzQixHQUFrQjJCLENBQUksS0FBR1IsR0FBMEJRLENBQUksR0FDdkQsRUFBQ1YsR0FBdUIsR0FDNUI7QUFBQSxlQUFXTyxLQUFRVixHQUFXLEVBQUcsWUFBVyxDQUFDYyxHQUFNQyxDQUFHLEtBQUtqRCxHQUFZLENBQUE0QyxFQUFLLE1BQU0sWUFBWUksR0FBTUQsRUFBS0UsQ0FBRyxDQUFDO0FBQzdHLGFBQVMsaUJBQWlCLDZKQUE2SixFQUFFLFFBQVEsQ0FBQ2IsTUFBTztBQUN4TSxNQUFBQSxFQUFHLE1BQU0sWUFBWSxtQkFBbUJXLEVBQUssT0FBTyxHQUNwRFgsRUFBRyxNQUFNLFlBQVksZ0JBQWdCVyxFQUFLLE9BQU8sR0FDakRYLEVBQUcsTUFBTSxZQUFZLHFCQUFxQlcsRUFBSyxTQUFTLEdBQ3hEWCxFQUFHLE1BQU0sWUFBWSxvQkFBb0JXLEVBQUssUUFBUTtBQUFBLElBQ3ZELENBQUMsR0FDRCxTQUFTLGNBQWMsSUFBSSxZQUFZLG1CQUFtQixFQUFFLFFBQVE7QUFBQSxNQUNuRSxRQUFRO0FBQUEsTUFDUixPQUFPQTtBQUFBLElBQ1IsRUFBRSxDQUFDLENBQUM7QUFBQTtBQUNMLEdBQ0lHLEtBQTJCLE1BQU07QUFDcEMsTUFBSTtBQUNILFVBQU1DLElBQU0sYUFBYSxRQUFRekQsRUFBaUI7QUFDbEQsUUFBSSxDQUFDeUQsRUFBSyxRQUFPO0FBQ2pCLFVBQU1sZCxJQUFTLEtBQUssTUFBTWtkLENBQUc7QUFDN0IsV0FBSSxDQUFDbGQsR0FBUSxXQUFXLENBQUNBLEdBQVEsYUFBYSxDQUFDQSxHQUFRLFdBQWlCLE9BQ2pFQTtBQUFBLEVBQ1IsUUFBUTtBQUNQLFdBQU87QUFBQSxFQUNSO0FBQ0QsR0FDSW1kLEtBQTBCLE9BQU94RSxHQUFReUUsTUFBUztBQUNyRCxRQUFNQyxJQUFTLE9BQU8xRSxLQUFXLFdBQVdBLEVBQU8sTUFBTSxHQUFHLElBQUksSUFBSSxRQUFRQSxFQUFPLFFBQVEsV0FBVyxJQUFJQSxFQUFPLElBQUk7QUFDckgsTUFBSSxDQUFDeUUsR0FBTSxNQUFPLEtBQUk7QUFDckIsUUFBSSxhQUFhLFFBQVF6RCxFQUFpQixNQUFNMEQsR0FBUTtBQUN2RCxZQUFNQyxJQUFTTCxHQUF5QjtBQUN4QyxVQUFJSztBQUNILGVBQUFULEdBQXlCUyxDQUFNLEdBQ3hCQTtBQUFBLElBRVQ7QUFBQSxFQUNELFFBQVE7QUFBQSxFQUFDO0FBQ1QsTUFBSTtBQUNILFVBQU1sRyxJQUFZLE1BQU1pQyxHQUFrQlYsQ0FBTSxHQUMxQ3lDLElBQVFDLEdBQW1CakUsQ0FBUztBQUMxQyxRQUFJLENBQUNnRSxFQUFPLFFBQU87QUFDbkIsSUFBQXlCLEdBQXlCekIsQ0FBSztBQUM5QixRQUFJO0FBQ0gsbUJBQWEsUUFBUXpCLElBQW1CMEQsQ0FBTTtBQUFBLElBQy9DLFFBQVE7QUFBQSxJQUFDO0FBQ1QsV0FBT2pDO0FBQUEsRUFDUixTQUFTbUMsR0FBSztBQUNiLFlBQVEsS0FBSywrQ0FBK0NBLENBQUc7QUFDL0QsVUFBTUQsSUFBU0wsR0FBeUI7QUFDeEMsV0FBSUssS0FDSFQsR0FBeUJTLENBQU0sR0FDeEJBLEtBRUQ7QUFBQSxFQUNSO0FBQ0QsR0FDSUUsS0FBNkIsTUFBTTtBQUN0QyxRQUFNRixJQUFTTCxHQUF5QjtBQUN4QyxTQUFJSyxLQUFRVCxHQUF5QlMsQ0FBTSxHQUNwQ0E7QUFDUixHQUlJRyxLQUErQixvQkFBSSxRQUFRLEdBQzNDQyxLQUEwQixvQkFBSSxJQUFJLENBQUMsQ0FBQyxHQUNwQ0MsS0FBV3BpQixHQUFhLEdBQ3hCcWlCLEtBQXFDLG9CQUFJLElBQUksR0FDN0NDLEtBQWMsQ0FBQ0MsTUFDWEEsR0FBSyxnQkFBZ0JBLEdBQUssU0FBUyxHQUV2Q0MsS0FBZSxDQUFDRCxNQUNaQSxHQUFLLGlCQUFpQkEsR0FBSyxVQUFVLEdBRXpDRSxLQUFrQixDQUFDQyxNQUFXO0FBQ2pDLFFBQU1wQyxJQUFPO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxJQUNoQixpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxFQUN4QjtBQUNBLGFBQVdxQyxLQUFjO0FBQUEsSUFDeEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0QsRUFBRyxLQUFJO0FBQ04sVUFBTW5GLElBQU1rRixFQUFPLFdBQVcsTUFBTTtBQUFBLE1BQ25DLEdBQUdwQztBQUFBLE1BQ0gsWUFBQXFDO0FBQUEsSUFDRCxDQUFDO0FBQ0QsUUFBSW5GLEVBQUssUUFBT0E7QUFBQSxFQUNqQixRQUFRO0FBQUEsRUFBQztBQUNULE1BQUk7QUFDSCxXQUFPa0YsRUFBTyxXQUFXLE1BQU1wQyxDQUFJO0FBQUEsRUFDcEMsUUFBUTtBQUNQLFdBQU9vQyxFQUFPLFdBQVcsSUFBSTtBQUFBLEVBQzlCO0FBQ0QsR0FDSUUsS0FBYyxDQUFDQyxHQUFXQyxNQUFPO0FBQ3BDLEVBQUFYLEdBQVEsSUFBSVUsR0FBV0MsQ0FBRTtBQUMxQixHQUNJQyxLQUFRLENBQUN2RixHQUFLK0UsR0FBS1MsSUFBUSxHQUFHQyxHQUFNQyxJQUFTLE1BQU07QUFDdEQsUUFBTVIsSUFBU2xGLEVBQUk7QUFDbkIsRUFBQUEsRUFBSSxVQUFVa0YsRUFBTyxRQUFRLEdBQUdBLEVBQU8sU0FBUyxDQUFDLEdBQ2pEbEYsRUFBSSxRQUFRLENBQUMwRixLQUFVLE1BQU0sS0FBSyxLQUFLLElBQUcsR0FDMUMxRixFQUFJLFFBQVEsSUFBSXlGLE1BQVMsS0FBSyxLQUFLLEVBQUUsR0FDckN6RixFQUFJLFVBQVUsRUFBRThFLEdBQVlDLENBQUcsSUFBSSxLQUFLUyxHQUFPLEVBQUVSLEdBQWFELENBQUcsSUFBSSxLQUFLUyxDQUFLO0FBQ2hGLEdBQ0lHLEtBQXlCLENBQUM5RixNQUFTO0FBQ3RDLE1BQUksQ0FBQzZFLEdBQWEsSUFBSTdFLENBQUksTUFBTUEsYUFBZ0IsUUFBUUEsYUFBZ0IsUUFBUUEsYUFBZ0IsbUJBQW1CQSxhQUFnQixlQUFlQSxhQUFnQixRQUFRO0FBQ3pLLFVBQU0rRixJQUFVLGtCQUFrQi9GLENBQUksRUFBRSxNQUFNLENBQUMyRSxNQUFRO0FBQ3RELFlBQUFFLEdBQWEsT0FBTzdFLENBQUksR0FDbEIyRTtBQUFBLElBQ1AsQ0FBQztBQUNELElBQUFFLEdBQWEsSUFBSTdFLEdBQU0rRixDQUFPO0FBQUEsRUFDL0I7QUFDQSxTQUFPbEIsR0FBYSxJQUFJN0UsQ0FBSTtBQUM3QixHQUNJZ0csS0FBa0IsdUJBQU8sSUFBSSx3QkFBd0I7QUFDekQsV0FBV0EsRUFBZSxNQUFzQixvQkFBSSxRQUFRO0FBQzVELElBQUlDLEtBQVksV0FBV0QsRUFBZSxHQUN0Q0UsS0FBYSxDQUFDVCxHQUFJdEYsTUFBUTtBQUM3QixRQUFNdUUsSUFBU3VCLEdBQVUsSUFBSVIsQ0FBRTtBQUMvQixNQUFJLE9BQU9mLEtBQVcsV0FBWSxRQUFPQTtBQUN6QyxRQUFNeUIsSUFBUVYsRUFBRyxLQUFLdEYsQ0FBRztBQUN6QixTQUFBOEYsR0FBVSxJQUFJUixHQUFJVSxDQUFLLEdBQ2hCQTtBQUNSLEdBQ0lDLEtBQVc7QUFDWCxPQUFPLG9CQUFxQixNQUFhQSxLQUFXLGNBQXVCLGtCQUFrQjtBQUFBLEVBQ2hHLE9BQU8scUJBQXFCO0FBQUEsSUFDM0I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSQyxLQUFRLENBQUMsR0FBRyxDQUFDO0FBQUEsRUFDYkMsS0FBVztBQUFBLEVBQ1hDLEtBQVM7QUFBQSxFQUNULElBQUlDLEtBQVU7QUFDYixVQUFNbEMsSUFBTSxLQUFLLGFBQWEsYUFBYSxLQUFLLEtBQUssYUFBYSxRQUFRLEtBQUssS0FDekVqRCxJQUFJLE9BQU8sU0FBU2lELEdBQUssRUFBRTtBQUNqQyxXQUFPLE9BQU8sU0FBU2pELENBQUMsSUFBSUEsSUFBSTtBQUFBLEVBQ2pDO0FBQUEsRUFDQSxJQUFJbUYsR0FBUXJnQixHQUFPO0FBQ2xCLFVBQU00RSxJQUFJLE9BQU81RSxDQUFLO0FBQ3RCLFNBQUssYUFBYSxlQUFlNEUsQ0FBQyxHQUNsQyxLQUFLLGFBQWEsVUFBVUEsQ0FBQztBQUFBLEVBQzlCO0FBQUEsRUFDQSx5QkFBeUIwYixHQUFNQyxHQUFHQyxHQUFVO0FBQzNDLElBQUlGLEtBQVEsY0FBWSxLQUFLRyxHQUFTRCxDQUFRLElBQzFDRixLQUFRLGlCQUFpQkEsS0FBUSxhQUFVLEtBQUtJLEdBQVEsS0FBS04sRUFBTTtBQUFBLEVBQ3hFO0FBQUEsRUFDQSxvQkFBb0I7QUFDbkIsVUFBTU8sSUFBUyxLQUFLO0FBQ3BCLFNBQUssTUFBTSxZQUFZLG1CQUFtQixnQ0FBZ0MsR0FDMUUsS0FBSyxNQUFNLFlBQVksa0JBQWtCLGdDQUFnQyxHQUN6RSxLQUFLVCxLQUFRLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxlQUFlUyxHQUFRLGVBQWUsR0FBRyxDQUFDLEdBQUdBLEdBQVEsZUFBZSxDQUFDLEtBQUssS0FBSyxrQkFBa0IsSUFBSSxRQUFRLFNBQVMsQ0FBQyxLQUFLLG9CQUFvQixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssZ0JBQWdCQSxHQUFRLGdCQUFnQixHQUFHLENBQUMsR0FBR0EsR0FBUSxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssa0JBQWtCLElBQUksUUFBUSxVQUFVLENBQUMsS0FBSyxvQkFBb0IsRUFBRSxHQUN4WCxLQUFLRixHQUFTLEtBQUtOLEtBQVcsS0FBSyxRQUFRLE9BQU8sS0FBS0EsRUFBUSxHQUMzRCxLQUFLLFNBQU8sS0FBS08sR0FBUSxLQUFLTixFQUFNO0FBQUEsRUFDekM7QUFBQSxFQUNBLGNBQWM7QUFDYixVQUFNO0FBQ04sVUFBTWxCLElBQVMsTUFDVHlCLElBQVMsS0FBSyxZQUNkQyxJQUFVLE1BQU07QUFDckIsWUFBTUMsSUFBTSxLQUFLWDtBQUNqQixXQUFLQSxLQUFRLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxlQUFlUyxHQUFRLGVBQWUsR0FBRyxDQUFDLEdBQUdBLEdBQVEsZUFBZSxDQUFDLEtBQUssS0FBSyxrQkFBa0IsSUFBSSxRQUFRLFNBQVMsQ0FBQyxLQUFLLG9CQUFvQixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssZ0JBQWdCQSxHQUFRLGdCQUFnQixHQUFHLENBQUMsR0FBR0EsR0FBUSxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssa0JBQWtCLElBQUksUUFBUSxVQUFVLENBQUMsS0FBSyxvQkFBb0IsRUFBRSxJQUNwWEUsSUFBTSxDQUFDLEtBQUssS0FBS1gsR0FBTSxDQUFDLEtBQUtXLElBQU0sQ0FBQyxLQUFLLEtBQUtYLEdBQU0sQ0FBQyxNQUFHLEtBQUtRLEdBQVEsS0FBS04sRUFBTTtBQUFBLElBQ3JGO0FBQ0EsSUFBQXhCLElBQVUsVUFBVSxNQUFNO0FBQ3pCLFdBQUssTUFBTUssR0FBZ0JDLENBQU07QUFDakMsVUFBSTtBQUNILGFBQUssS0FBSyw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQyxHQUMxREEsR0FBUSw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUFBLE1BQ3pELFFBQVE7QUFBQSxNQUFDO0FBQ1QsV0FBSyxRQUFRLElBQ2IsS0FBSyxNQUFNLFlBQVksU0FDdkIsS0FBSyxNQUFNLGlCQUFpQixVQUM1QixLQUFLLFVBQVUsSUFBSSxVQUFVLEdBQzdCLEtBQUssVUFBVSxJQUFJLFdBQVcsR0FDOUIsS0FBSyxVQUFVLElBQUksV0FBVyxHQUM5QixLQUFLLE1BQU0sWUFBWSxtQkFBbUIsZ0NBQWdDLEdBQzFFLEtBQUssTUFBTSxZQUFZLGtCQUFrQixnQ0FBZ0MsR0FDekUsS0FBSyxNQUFNLFlBQVksdUJBQXVCLFVBQVUsR0FDeEQsS0FBSyxNQUFNLFlBQVksZUFBZSxZQUFZLEdBQ2xELEtBQUssTUFBTSxZQUFZLG9CQUFvQixlQUFlLFdBQVcsR0FDckUsS0FBSyxNQUFNLFlBQVksV0FBVyxLQUFLLFdBQVcsR0FDbEQwQixFQUFRLEdBQ1IsSUFBSSxlQUFlLENBQUNFLE1BQVk7QUFDL0IsbUJBQVdDLEtBQVNELEdBQVM7QUFDNUIsZ0JBQU1FLElBQU1ELEdBQU8sNEJBQTRCLENBQUM7QUFDaEQsY0FBSUMsR0FBSztBQUNSLGtCQUFNSCxJQUFNLEtBQUtYO0FBQ2pCLGlCQUFLQSxLQUFRLENBQUMsS0FBSyxJQUFJYyxFQUFJLGNBQWMsS0FBSyxPQUFPLENBQUMsR0FBRyxLQUFLLElBQUlBLEVBQUksYUFBYSxLQUFLLFFBQVEsQ0FBQyxDQUFDLElBQzlGSCxJQUFNLENBQUMsS0FBSyxLQUFLWCxHQUFNLENBQUMsS0FBS1csSUFBTSxDQUFDLEtBQUssS0FBS1gsR0FBTSxDQUFDLE1BQUcsS0FBS1EsR0FBUSxLQUFLTixFQUFNO0FBQUEsVUFDckY7QUFBQSxRQUNEO0FBQUEsTUFDRCxDQUFDLEVBQUUsUUFBUSxNQUFNLEVBQUUsS0FBSywyQkFBMkIsQ0FBQyxHQUNwRCxLQUFLSyxHQUFTLEtBQUtOLEtBQVcsS0FBSyxRQUFRLE9BQU8sS0FBS0EsRUFBUSxHQUMzRCxLQUFLLFNBQU8sS0FBS08sR0FBUSxLQUFLTixNQUFVLEtBQUtELEVBQVE7QUFBQSxJQUMxRCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTSxrQkFBa0J0RyxHQUFNb0gsR0FBTztBQUNwQyxJQUFBQSxNQUFVLEtBQUtkO0FBQ2YsVUFBTXBCLElBQU1sRixhQUFnQixjQUFjQSxJQUFPLE1BQU04RixHQUF1QjlGLENBQUksRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sQ0FBQztBQUNwSCxXQUFJa0YsS0FBT2tDLEtBQVMsS0FBS2QsT0FDeEIsS0FBSyxRQUFRcEIsR0FDYixLQUFLMkIsR0FBUU8sQ0FBSyxJQUVacEg7QUFBQSxFQUNSO0FBQUEsRUFDQSxZQUFZcUgsR0FBYTtBQUN4QixVQUFNaEMsSUFBUyxNQUFNbEYsSUFBTSxLQUFLLEtBQUsrRSxJQUFNLEtBQUs7QUFDaEQsUUFBSUEsS0FBTy9FLE1BQVFrSCxLQUFlLEtBQUtmLE1BQVksQ0FBQ2UsSUFBYztBQUNqRSxNQUFJQSxNQUFhLEtBQUtkLEtBQVNjLElBQzNCLEtBQUssU0FBUyxLQUFLaEIsR0FBTSxDQUFDLE1BQUcsS0FBSyxRQUFRLEtBQUtBLEdBQU0sQ0FBQyxJQUN0RCxLQUFLLFVBQVUsS0FBS0EsR0FBTSxDQUFDLE1BQUcsS0FBSyxTQUFTLEtBQUtBLEdBQU0sQ0FBQyxJQUM1RCxLQUFLLE1BQU0sY0FBYyxHQUFHLEtBQUssU0FBUyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUM7QUFDakUsWUFBTWlCLElBQUssS0FBS2QsS0FBVSxLQUFLLEdBQ3pCWixJQUFPWCxHQUFZQyxDQUFHLEtBQUtDLEdBQWFELENBQUcsSUFBSSxJQUFJLEdBQ25EUyxJQUFRLEtBQUssSUFBSU4sRUFBTyxDQUFDLFVBQVUsT0FBTyxFQUFFaUMsQ0FBRSxDQUFDLEtBQUsxQixJQUFPVCxHQUFhRCxDQUFHLElBQUlELEdBQVlDLENBQUcsSUFBSUcsRUFBTyxDQUFDLFNBQVMsUUFBUSxFQUFFaUMsQ0FBRSxDQUFDLEtBQUsxQixJQUFPWCxHQUFZQyxDQUFHLElBQUlDLEdBQWFELENBQUcsRUFBRTtBQUN2TCxNQUFBL0UsRUFBSSxLQUFLLEdBQ1RBLEVBQUksVUFBVSxHQUFHLEdBQUdrRixFQUFPLE9BQU9BLEVBQU8sTUFBTSxHQUMvQ0ssR0FBTXZGLEdBQUsrRSxHQUFLUyxHQUFPQyxHQUFNLEtBQUtZLEVBQU8sR0FDekNyRyxFQUFJLFVBQVUrRSxHQUFLLEdBQUcsR0FBR0EsRUFBSSxRQUFRUyxHQUFPVCxFQUFJLFNBQVNTLENBQUssR0FDOUR4RixFQUFJLFFBQVE7QUFBQSxJQUNiO0FBQUEsRUFDRDtBQUFBLEVBQ0F5RyxHQUFTbkQsR0FBSztBQUNiLFVBQU0yRCxJQUFRM0QsS0FBTyxLQUFLNkM7QUFHMUIsV0FGQSxLQUFLQSxLQUFXYyxHQUNaLENBQUNBLEtBQVMsT0FBT0EsS0FBVSxZQUMzQnBDLEdBQW1CLElBQUlvQyxDQUFLLElBQVUsUUFBUSxRQUFRLElBQ25ELE1BQU1BLEdBQU87QUFBQSxNQUNuQixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUCxDQUFDLEdBQUcsT0FBTyxPQUFPRyxNQUFRO0FBQ3pCLFVBQUksQ0FBQ0EsRUFBSSxJQUFJO0FBQ1osUUFBQXZDLEdBQW1CLElBQUlvQyxDQUFLO0FBQzVCO0FBQUEsTUFDRDtBQUNBLFlBQU1wSCxJQUFPLE1BQU11SCxFQUFJLEtBQUs7QUFDNUIsVUFBSSxDQUFDdkgsR0FBTSxRQUFRQSxFQUFLLFFBQVEsQ0FBQ0EsRUFBSyxLQUFLLFdBQVcsUUFBUSxHQUFHO0FBQ2hFLFFBQUFnRixHQUFtQixJQUFJb0MsQ0FBSztBQUM1QjtBQUFBLE1BQ0Q7QUFDQSxhQUFPLEtBQUssa0JBQWtCcEgsR0FBTW9ILENBQUssR0FBRyxRQUFRLE1BQU07QUFDekQsUUFBQXBDLEdBQW1CLElBQUlvQyxDQUFLO0FBQUEsTUFDN0IsQ0FBQztBQUFBLElBQ0YsQ0FBQyxHQUFHLFFBQVEsTUFBTTtBQUNqQixNQUFBcEMsR0FBbUIsSUFBSW9DLENBQUs7QUFBQSxJQUM3QixDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0FQLEdBQVFRLEdBQWE7QUFDcEIsVUFBTWxILElBQU0sS0FBSztBQUNqQixJQUFJLEtBQUssU0FBU0EsTUFBUWtILEtBQWUsS0FBS2YsTUFBWSxDQUFDZSxNQUFjdEMsSUFBVSxVQUFVbUIsR0FBVyxLQUFLLGFBQWEsSUFBSSxDQUFDO0FBQUEsRUFDaEk7QUFDRCxJQUNLRSxLQUFXLE1BQWU7QUFBQSxFQUM5QixjQUFjO0FBQUEsRUFBQztBQUFBLEVBQ2YsWUFBWWlCLEdBQWE7QUFBQSxFQUFDO0FBQUEsRUFDMUIsa0JBQWtCckgsR0FBTW9ILEdBQU87QUFDOUIsV0FBT3BIO0FBQUEsRUFDUjtBQUFBLEVBQ0E0RyxHQUFTbkQsR0FBSztBQUNiLFdBQU8sUUFBUSxRQUFRO0FBQUEsRUFDeEI7QUFBQSxFQUNBb0QsR0FBUVEsR0FBYTtBQUFBLEVBQUM7QUFBQSxFQUN0QmIsS0FBVTtBQUFBLEVBQ1ZGLEtBQVc7QUFBQSxFQUNYQyxLQUFTO0FBQUEsRUFDVEYsS0FBUSxDQUFDLEdBQUcsQ0FBQztBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNUO0FBQ0EsSUFBSTtBQUNILGlCQUFlLE9BQU8sYUFBYUQsSUFBVSxFQUFFLFNBQVMsU0FBUyxDQUFDO0FBQ25FLFFBQVk7QUFBQztBQUliLElBQUlvQixLQUF3QixzQkFDeEJDLElBQXdCLHlCQUN4QkMsS0FBdUIsb0JBQ3ZCQyxLQUFXLHFCQUNYQyxJQUFZLFNBQ1pDLEtBQVUsV0FDVkMsS0FBMkIsT0FDM0JDLElBQWdCLE1BQ2hCQyxLQUFzQixNQUFNcGxCLEtBQXVCRixHQUFzQixDQUFDLEtBQUssR0FDL0V1bEIsS0FBc0IsTUFBTTtBQUMvQixNQUFJRixLQUFpQkEsRUFBYyxXQUFXLE9BQU8sRUFBRyxLQUFJO0FBQzNELFFBQUksZ0JBQWdCQSxDQUFhO0FBQUEsRUFDbEMsUUFBUTtBQUFBLEVBQUM7QUFDVCxFQUFBQSxJQUFnQjtBQUNqQixHQUNJRyxLQUFrQixNQUFNLElBQUksUUFBUSxDQUFDQyxHQUFTQyxNQUFXO0FBQzVELE1BQUksT0FBTyxZQUFjLEtBQWE7QUFDckMsSUFBQUEsRUFBdUIsb0JBQUksTUFBTSx1QkFBdUIsQ0FBQztBQUN6RDtBQUFBLEVBQ0Q7QUFDQSxRQUFNQyxJQUFNLFVBQVUsS0FBS1YsSUFBVSxDQUFDO0FBQ3RDLEVBQUFVLEVBQUksa0JBQWtCLE1BQU07QUFDM0IsVUFBTUMsSUFBS0QsRUFBSTtBQUNmLElBQUtDLEVBQUcsaUJBQWlCLFNBQVNWLENBQVMsS0FBR1UsRUFBRyxrQkFBa0JWLENBQVM7QUFBQSxFQUM3RSxHQUNBUyxFQUFJLFlBQVksTUFBTUYsRUFBUUUsRUFBSSxNQUFNLEdBQ3hDQSxFQUFJLFVBQVUsTUFBTUQsRUFBT0MsRUFBSSxTQUF5QixvQkFBSSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JGLENBQUMsR0FDR0UsS0FBa0IsT0FBT3ZJLE1BQVM7QUFDckMsUUFBTXNJLElBQUssTUFBTUosR0FBZ0I7QUFDakMsTUFBSTtBQUNILFVBQU0sSUFBSSxRQUFRLENBQUNDLEdBQVNDLE1BQVc7QUFDdEMsWUFBTUksSUFBS0YsRUFBRyxZQUFZVixHQUFXLFdBQVc7QUFDaEQsTUFBQVksRUFBRyxZQUFZWixDQUFTLEVBQUUsSUFBSTVILEdBQU02SCxFQUFPLEdBQzNDVyxFQUFHLGFBQWEsTUFBTUwsRUFBUSxHQUM5QkssRUFBRyxVQUFVLE1BQU1KLEVBQU9JLEVBQUcsU0FBeUIsb0JBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLElBQ2xGLENBQUM7QUFBQSxFQUNGLFVBQUU7QUFDRCxJQUFBRixFQUFHLE1BQU07QUFBQSxFQUNWO0FBQ0QsR0FDSUcsS0FBa0IsWUFBWTtBQUNqQyxRQUFNSCxJQUFLLE1BQU1KLEdBQWdCO0FBQ2pDLE1BQUk7QUFDSCxXQUFPLE1BQU0sSUFBSSxRQUFRLENBQUNDLEdBQVNDLE1BQVc7QUFDN0MsWUFBTUMsSUFBTUMsRUFBRyxZQUFZVixHQUFXLFVBQVUsRUFBRSxZQUFZQSxDQUFTLEVBQUUsSUFBSUMsRUFBTztBQUNwRixNQUFBUSxFQUFJLFlBQVksTUFBTTtBQUNyQixjQUFNcmpCLElBQUlxakIsRUFBSTtBQUNkLFFBQUFGLEVBQVFuakIsYUFBYSxPQUFPQSxJQUFJLElBQUk7QUFBQSxNQUNyQyxHQUNBcWpCLEVBQUksVUFBVSxNQUFNRCxFQUFPQyxFQUFJLFNBQXlCLG9CQUFJLE1BQU0sZ0JBQWdCLENBQUM7QUFBQSxJQUNwRixDQUFDO0FBQUEsRUFDRixVQUFFO0FBQ0QsSUFBQUMsRUFBRyxNQUFNO0FBQUEsRUFDVjtBQUNELEdBQ0lJLEtBQW9CLFlBQVk7QUFDbkMsTUFBSTtBQUNILFVBQU1KLElBQUssTUFBTUosR0FBZ0I7QUFDakMsUUFBSTtBQUNILFlBQU0sSUFBSSxRQUFRLENBQUNDLEdBQVNDLE1BQVc7QUFDdEMsY0FBTUksSUFBS0YsRUFBRyxZQUFZVixHQUFXLFdBQVc7QUFDaEQsUUFBQVksRUFBRyxZQUFZWixDQUFTLEVBQUUsT0FBT0MsRUFBTyxHQUN4Q1csRUFBRyxhQUFhLE1BQU1MLEVBQVEsR0FDOUJLLEVBQUcsVUFBVSxNQUFNSixFQUFPSSxFQUFHLFNBQXlCLG9CQUFJLE1BQU0sbUJBQW1CLENBQUM7QUFBQSxNQUNyRixDQUFDO0FBQUEsSUFDRixVQUFFO0FBQ0QsTUFBQUYsRUFBRyxNQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0QsUUFBUTtBQUFBLEVBQUM7QUFDVixHQUNJSyxLQUFxQixNQUFNO0FBQzlCLE1BQUk7QUFDSCxVQUFNeGlCLElBQVEsYUFBYSxRQUFRcWhCLEVBQXFCO0FBQ3hELFdBQU9yaEIsS0FBU0EsRUFBTSxLQUFLLElBQUlBLEVBQU0sS0FBSyxJQUFJc2hCO0FBQUEsRUFDL0MsUUFBUTtBQUNQLFdBQU9BO0FBQUEsRUFDUjtBQUNELEdBQ0ltQixLQUFzQixDQUFDemlCLE1BQVU7QUFDcEMsTUFBSTtBQUNILHdCQUFhLFFBQVFxaEIsSUFBdUJyaEIsQ0FBSyxHQUMxQztBQUFBLEVBQ1IsUUFBUTtBQUNQLFdBQU87QUFBQSxFQUNSO0FBQ0QsR0FDSTBpQixLQUFrQixDQUFDQyxNQUFRQSxFQUFJLFdBQVcsT0FBTyxLQUFLQSxFQUFJLFdBQVcsT0FBTyxHQUM1RUMsS0FBeUIsWUFBWTtBQUN4QyxRQUFNQyxJQUFVTCxHQUFtQjtBQUNuQyxNQUFJSyxNQUFZLHNCQUFzQkEsRUFBUSxXQUFXLE1BQU0sR0FBRztBQUNqRSxRQUFJO0FBQ0gsWUFBTWhKLElBQU8sTUFBTXlJLEdBQWdCO0FBQ25DLFVBQUl6STtBQUNILGVBQUFpSSxHQUFvQixHQUNwQkYsSUFBZ0IsSUFBSSxnQkFBZ0IvSCxDQUFJLEdBQ2pDK0g7QUFBQSxJQUVULFNBQVNwRCxHQUFLO0FBQ2IsY0FBUSxLQUFLLDZDQUE2Q0EsQ0FBRztBQUFBLElBQzlEO0FBQ0EsV0FBTzhDO0FBQUEsRUFDUjtBQUNBLE1BQUl1QixFQUFRLFdBQVcsT0FBTyxLQUFLQSxFQUFRLFNBQVNsQixHQUEwQixLQUFJO0FBQ2pGLFVBQU05SCxJQUFPLE1BQU15SSxHQUFnQjtBQUNuQyxRQUFJekk7QUFDSCxhQUFBaUksR0FBb0IsR0FDcEJGLElBQWdCLElBQUksZ0JBQWdCL0gsQ0FBSSxHQUN4QzRJLEdBQW9CbEIsRUFBb0IsR0FDakNLO0FBQUEsRUFFVCxRQUFRO0FBQUEsRUFBQztBQUNULFNBQU9pQixLQUFXdkI7QUFDbkIsR0FDSXdCLEtBQTZCLE1BQU1OLEdBQW1CLEdBQ3RETyxLQUFtQixDQUFDN0QsTUFBVztBQUNsQyxRQUFNOEQsSUFBUSxNQUFNO0FBQ25CLFVBQU05SCxJQUFJMkcsR0FBb0IsR0FDeEJqZCxJQUFJLE9BQU9zVyxDQUFDO0FBQ2xCLElBQUlnRSxFQUFPLGFBQWEsYUFBYSxNQUFNdGEsS0FBR3NhLEVBQU8sYUFBYSxlQUFldGEsQ0FBQyxHQUM5RXNhLEVBQU8sYUFBYSxRQUFRLE1BQU10YSxLQUFHc2EsRUFBTyxhQUFhLFVBQVV0YSxDQUFDLEdBQ3hFc2EsRUFBTyxNQUFNLFlBQVksWUFBWXRhLENBQUMsR0FDdENzYSxFQUFPLFNBQVNoRTtBQUFBLEVBQ2pCO0FBQ0EsU0FBQThILEVBQU0sR0FDQ3RtQixHQUFxQnNtQixDQUFLO0FBQ2xDLEdBQ0lDLEtBQXlCLE1BQU07QUFDbEMsV0FBUyxpQkFBaUIsOEZBQW9HLEVBQUUsUUFBUSxDQUFDL0QsTUFBVztBQUNuSixVQUFNaEUsSUFBSTJHLEdBQW9CLEdBQ3hCamQsSUFBSSxPQUFPc1csQ0FBQztBQUNsQixJQUFBZ0UsRUFBTyxhQUFhLGVBQWV0YSxDQUFDLEdBQ3BDc2EsRUFBTyxhQUFhLFVBQVV0YSxDQUFDLEdBQy9Cc2EsRUFBTyxNQUFNLFlBQVksWUFBWXRhLENBQUM7QUFBQSxFQUN2QyxDQUFDO0FBQ0YsR0FDSXNlLEtBQTJCLE1BQU07QUFDcEMsRUFBQU4sR0FBdUIsRUFBRSxLQUFLLENBQUNELE1BQVE7QUFDdEMsSUFBQVEsR0FBeUJSLENBQUcsR0FDNUJNLEdBQXVCO0FBQUEsRUFDeEIsQ0FBQztBQUNGLEdBQ0lHLEtBQWtCLENBQUMxRixNQUFTO0FBQy9CLG1CQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsaUJBQWlCLEVBQUUsS0FBSyxHQUNwRkEsRUFBSyxNQUFNLGFBQWEsUUFDeEJBLEVBQUssTUFBTSxrQkFBa0I7QUFDOUIsR0FDSXlGLEtBQTJCLENBQUNFLE1BQWE7QUFDNUMsUUFBTUMsSUFBVyxTQUFTLGlCQUFpQiw4RkFBb0csR0FDekk1RCxJQUFTLE9BQU9tQyxHQUFvQixDQUFDO0FBQzNDLEVBQUF5QixFQUFTLFFBQVEsQ0FBQ3BFLE1BQVc7QUFDNUIsSUFBQUEsRUFBTyxhQUFhLFlBQVltRSxDQUFRLEdBQ3hDbkUsRUFBTyxhQUFhLGVBQWVRLENBQU0sR0FDekNSLEVBQU8sYUFBYSxVQUFVUSxDQUFNLEdBQ3BDUixFQUFPLE1BQU0sWUFBWSxZQUFZUSxDQUFNO0FBQUEsRUFDNUMsQ0FBQztBQUNGLEdBQ0k2RCxLQUFnQixPQUFPQyxPQUNsQixNQUFNLE1BQU1BLENBQU8sR0FBRyxLQUFLLEdBRWhDQyxLQUEwQixPQUFPNUosTUFBUztBQUM3QyxNQUFJLEVBQUVBLGFBQWdCLFNBQVNBLEVBQUssUUFBUTtBQUMzQyxXQUFBNkosR0FBZ0JwQyxDQUFxQixHQUM5QkE7QUFFUixFQUFBUSxHQUFvQixHQUNwQkYsSUFBZ0IsSUFBSSxnQkFBZ0IvSCxDQUFJLEdBQ3hDc0osR0FBeUJ2QixDQUFhLEdBQ3RDeEQsR0FBd0J3RCxHQUFlLEVBQUUsT0FBTyxHQUFLLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDbEUsYUFBUyxpQkFBaUIsbUJBQW1CLEVBQUUsUUFBUXdCLEVBQWU7QUFBQSxFQUN2RSxDQUFDO0FBQ0QsTUFBSTtBQUNILFVBQU1oQixHQUFnQnZJLENBQUksR0FDMUI0SSxHQUFvQmxCLEVBQW9CO0FBQUEsRUFDekMsU0FBUy9DLEdBQUs7QUFDYixZQUFRLEtBQUssNkNBQTZDQSxDQUFHO0FBQzdELFFBQUk7QUFDSCxZQUFNbUYsSUFBUyxJQUFJLFdBQVcsR0FDeEJILElBQVUsTUFBTSxJQUFJLFFBQVEsQ0FBQ3hCLEdBQVNDLE1BQVc7QUFDdEQsUUFBQTBCLEVBQU8sU0FBUyxNQUFNM0IsRUFBUSxPQUFPMkIsRUFBTyxVQUFVLEVBQUUsQ0FBQyxHQUN6REEsRUFBTyxVQUFVLE1BQU0xQixFQUFPMEIsRUFBTyxTQUF5QixvQkFBSSxNQUFNLGFBQWEsQ0FBQyxHQUN0RkEsRUFBTyxjQUFjOUosQ0FBSTtBQUFBLE1BQzFCLENBQUM7QUFDRCxNQUFJMkosS0FBVyxDQUFDZixHQUFvQmUsQ0FBTyxLQUFHLFFBQVEsS0FBSyxrRUFBa0U7QUFBQSxJQUM5SCxRQUFRO0FBQUEsSUFBQztBQUFBLEVBQ1Y7QUFDQSxNQUFJO0FBQ0gsZUFBVyxnQkFBZ0IsSUFBSSxZQUFZLHlCQUF5QixFQUFFLFFBQVE7QUFBQSxNQUM3RSxTQUFTakM7QUFBQSxNQUNULEtBQUtLO0FBQUEsSUFDTixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ0wsUUFBUTtBQUFBLEVBQUM7QUFDVCxTQUFPQTtBQUNSLEdBQ0lnQyxLQUEyQixDQUFDQyxNQUFjO0FBQzdDLFFBQU1DLElBQU9EO0FBQ2IsRUFBQUMsRUFBSyxnQkFBZ0IsR0FDckJBLEVBQUssUUFBUSxXQUFXLFVBQ3hCQSxFQUFLLE1BQU0sV0FBVyxZQUN0QkEsRUFBSyxNQUFNLFFBQVEsS0FDbkJBLEVBQUssTUFBTSxXQUFXLFVBQ3RCQSxFQUFLLE1BQU0sYUFBYSxRQUN4QkEsRUFBSyxNQUFNLGtCQUFrQjtBQUM3QixRQUFNcEcsSUFBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxFQUFBQSxFQUFLLFlBQVksb0JBQ2pCQSxFQUFLLE1BQU0sV0FBVyxZQUN0QkEsRUFBSyxNQUFNLFFBQVEsUUFDbkJBLEVBQUssTUFBTSxnQkFBZ0IsUUFDM0JBLEVBQUssTUFBTSxVQUFVLE9BQ3JCQSxFQUFLLE1BQU0sYUFBYSxRQUN4QkEsRUFBSyxNQUFNLGtCQUFrQjtBQUM3QixRQUFNd0IsSUFBUyxTQUFTLGNBQWMsVUFBVSxFQUFFLElBQUksWUFBWSxDQUFDO0FBQ25FLEVBQUFBLEVBQU8sWUFBWSwrQkFDbkJBLEVBQU8sTUFBTSxXQUFXLFlBQ3hCQSxFQUFPLE1BQU0sUUFBUSxLQUNyQkEsRUFBTyxNQUFNLGdCQUFnQixRQUM3QkEsRUFBTyxNQUFNLGFBQWEsUUFDMUJBLEVBQU8sTUFBTSxZQUFZLFFBQ3pCQSxFQUFPLE1BQU0sZ0JBQWdCLFFBQzdCQSxFQUFPLE1BQU0sZUFBZSxRQUM1QkEsRUFBTyxNQUFNLFVBQVUsS0FDdkJBLEVBQU8sTUFBTSxlQUFlLFVBQzVCQSxFQUFPLGFBQWEsTUFBTSxXQUFXLEdBQ3JDQSxFQUFPLE1BQU0sWUFBWSx1QkFBdUIsVUFBVSxHQUMxREEsRUFBTyxNQUFNLFlBQVksZUFBZSxZQUFZLEdBQ3BEQSxFQUFPLE1BQU0sWUFBWSxvQkFBb0IsZUFBZSxXQUFXLEdBQ3ZFQSxFQUFPLE1BQU0sWUFBWSxXQUFXLEtBQUssV0FBVyxHQUNwRDRFLEVBQUssT0FBT3BHLEdBQU13QixDQUFNO0FBQ3hCLFFBQU0yRCxJQUFVTCxHQUFtQixHQUM3QnVCLElBQVVsQixNQUFZLHNCQUFzQkEsRUFBUSxXQUFXLE1BQU0sS0FBS0EsRUFBUSxXQUFXLE9BQU8sSUFBSXZCLElBQXdCdUI7QUFDdEksRUFBQTNELEVBQU8sYUFBYSxZQUFZNkUsQ0FBTztBQUN2QyxRQUFNQyxJQUFnQmpCLEdBQWlCN0QsQ0FBTTtBQUM3QyxTQUFBVCxHQUEyQixHQUMzQjJFLEdBQWdCMUYsQ0FBSSxHQUNwQmtGLEdBQXVCLEVBQUUsS0FBSyxDQUFDcUIsT0FDOUIvRSxFQUFPLGFBQWEsWUFBWStFLENBQVMsR0FDekNsQixHQUFpQjdELENBQU0sR0FDaEJkLEdBQXdCNkYsQ0FBUyxFQUFFLEtBQUssTUFBTWIsR0FBZ0IxRixDQUFJLENBQUMsRUFDMUUsR0FDTTtBQUFBLElBQ04sTUFBQW9HO0FBQUEsSUFDQSxRQUFBNUU7QUFBQSxJQUNBLE1BQUF4QjtBQUFBLElBQ0EsZUFBQXNHO0FBQUEsRUFDRDtBQUNELEdBQ0lOLEtBQWtCLENBQUNRLE1BQWlCO0FBQ3ZDLFFBQU1sa0IsSUFBUSxPQUFPa2tCLEtBQWdCLEVBQUUsRUFBRSxLQUFLLEtBQUs1QztBQUNuRCxNQUFJb0IsR0FBZ0IxaUIsQ0FBSyxLQUFLQSxFQUFNLFNBQVMyaEIsSUFBMEI7QUFDdEUsS0FBQyxZQUFZO0FBQ1osVUFBSTtBQUNILGNBQU05SCxJQUFPN1osRUFBTSxXQUFXLE9BQU8sSUFBSSxPQUFPLE1BQU0sTUFBTUEsQ0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNdWpCLEdBQWN2akIsQ0FBSztBQUN0RyxjQUFNeWpCLEdBQXdCNUosQ0FBSTtBQUFBLE1BQ25DLFNBQVMyRSxHQUFLO0FBQ2IsZ0JBQVEsS0FBSyxzREFBc0RBLENBQUcsR0FDdEUyRSxHQUF5Qm5qQixDQUFLLEdBQzlCb2UsR0FBd0JwZSxHQUFPLEVBQUUsT0FBTyxHQUFLLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDMUQsbUJBQVMsaUJBQWlCLG1CQUFtQixFQUFFLFFBQVFvakIsRUFBZTtBQUFBLFFBQ3ZFLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRCxHQUFHO0FBQ0g7QUFBQSxFQUNEO0FBQ0EsRUFBQWIsR0FBa0IsR0FDbEJULEdBQW9CLEdBQ2ZXLEdBQW9CemlCLENBQUssS0FBRyxRQUFRLEtBQUssNkNBQTZDLEdBQzNGbWpCLEdBQXlCbmpCLENBQUssR0FDOUJvZSxHQUF3QnBlLEdBQU8sRUFBRSxPQUFPLEdBQUssQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUMxRCxhQUFTLGlCQUFpQixtQkFBbUIsRUFBRSxRQUFRb2pCLEVBQWU7QUFBQSxFQUN2RSxDQUFDO0FBQ0QsTUFBSTtBQUNILGVBQVcsZ0JBQWdCLElBQUksWUFBWSx5QkFBeUIsRUFBRSxRQUFRO0FBQUEsTUFDN0UsU0FBU3BqQjtBQUFBLE1BQ1QsS0FBS0E7QUFBQSxJQUNOLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDTCxRQUFRO0FBQUEsRUFBQztBQUNWOyIsCiAgIm5hbWVzIjogWyJnZXRDb3JyZWN0T3JpZW50YXRpb24iLCAibWFrZVJBRkN5Y2xlIiwgIm9yaWVudGF0aW9uTnVtYmVyTWFwIiwgIndoZW5BbnlTY3JlZW5DaGFuZ2VzIiwgImVsZWN0cm9uQVBJIiwgInF1YWxpdHlNb2RlIiwgInBhcnNlTnVtYmVyIiwgImNvbG9yIiwgImxlbiIsICJuYW1lZCIsICJwYXJzZU5hbWVkIiwgImhleCIsICJwYXJzZUhleCIsICJtYXRjaCIsICJudW0kMSIsICJudW1fbm9uZSIsICJwZXIiLCAicGVyX25vbmUiLCAibnVtX3BlciIsICJudW1fcGVyX25vbmUiLCAiaHVlJDEiLCAiaHVlX25vbmUiLCAiYyIsICJyeF9udW1fcGVyX25vbmUiLCAicmdiX251bV9vbGQiLCAicmdiX3Blcl9vbGQiLCAicGFyc2VSZ2JMZWdhY3kiLCAicmVzIiwgInByZXBhcmUiLCAibW9kZSIsICJwYXJzZSIsICJjb252ZXJ0ZXIiLCAidGFyZ2V0X21vZGUiLCAiY29udmVydGVycyIsICJtb2RlcyIsICJwYXJzZXJzIiwgImNvbG9yUHJvZmlsZXMiLCAiaWRlbnRpdHkiLCAidiIsICJ1c2VNb2RlIiwgImRlZmluaXRpb24iLCAiayIsICJjaGFubmVsIiwgInBhcnNlciIsICJ1c2VQYXJzZXIiLCAiZ2V0TW9kZSIsICJJZGVudFN0YXJ0Q29kZVBvaW50IiwgIklkZW50Q29kZVBvaW50IiwgIlRvayIsICJfaSIsICJpc19udW0iLCAiY2hhcnMiLCAiY2giLCAiY2gxIiwgImlzX2lkZW50IiwgImh1ZW5pdHMiLCAibnVtIiwgInZhbHVlIiwgImRpZ2l0cyIsICJpZCIsICJpZGVudCIsICJpZGVudGxpa2UiLCAidG9rZW5pemUiLCAic3RyIiwgInRva2VucyIsICJhbHBoYSIsICJwYXJzZUNvbG9yU3ludGF4IiwgInRva2VuIiwgImNvb3JkcyIsICJjb25zdW1lQ29vcmRzIiwgImNoYW5uZWxzIiwgImlpIiwgImluY2x1ZGVIdWUiLCAicGFyc2VNb2Rlcm5TeW50YXgiLCAicGFyc2VkIiwgInJlc3VsdCIsICJwYXJzZVJnYiIsICJyIiwgImciLCAiYiIsICJwYXJzZVRyYW5zcGFyZW50IiwgImxlcnAiLCAiYSIsICJ0IiwgImdldF9jbGFzc2VzIiwgImFyciIsICJjbGFzc2VzIiwgImkiLCAiaW50ZXJwb2xhdG9yUGllY2V3aXNlIiwgImludGVycG9sYXRvciIsICJjbHMiLCAiaWR4IiwgInBhaXIiLCAiaW50ZXJwb2xhdG9yTGluZWFyIiwgImZpeHVwQWxwaGEiLCAic29tZV9kZWZpbmVkIiwgImRlZmluaXRpb24kMjciLCAibGluZWFyaXplJDIiLCAiY29udmVydEE5OFRvWHl6NjUiLCAiYTk4IiwgImdhbW1hJDIiLCAiY29udmVydFh5ejY1VG9BOTgiLCAieCIsICJ5IiwgInoiLCAiZm4kMyIsICJhYnMiLCAiY29udmVydFJnYlRvTHJnYiIsICJjb252ZXJ0UmdiVG9YeXo2NSIsICJyZ2IiLCAiZm4kMiIsICJjb252ZXJ0THJnYlRvUmdiIiwgImNvbnZlcnRYeXo2NVRvUmdiIiwgImRlZmluaXRpb24kMjYiLCAibm9ybWFsaXplSHVlIiwgImh1ZSIsICJodWVzIiwgImZuIiwgIm5vcm1hbGl6ZWQiLCAiYWNjIiwgImN1cnIiLCAiZml4dXBIdWVTaG9ydGVyIiwgImQiLCAiTSIsICJkZWdUb1JhZCIsICJyYWRUb0RlZyIsICJERSIsICJCRSIsICJCQ0FEIiwgImNvbnZlcnRSZ2JUb0N1YmVoZWxpeCIsICJsIiwgImNvbnZlcnRDdWJlaGVsaXhUb1JnYiIsICJoIiwgInMiLCAiYW1wIiwgImNvc2giLCAic2luaCIsICJkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiIsICJzdGQiLCAic21wIiwgInN0ZF9oIiwgInNtcF9oIiwgImRIIiwgImRpZmZlcmVuY2VIdWVOYWl2ZSIsICJkaWZmZXJlbmNlSHVlQ2hyb21hIiwgImF2ZXJhZ2VBbmdsZSIsICJ2YWwiLCAic3VtIiwgInJhZCIsICJhbmdsZSIsICJkZWZpbml0aW9uJDI1IiwgImNvbnZlcnRMYWJUb0xjaCIsICJjb252ZXJ0TGNoVG9MYWIiLCAiayQyIiwgImUkMiIsICJENTAiLCAiRDY1IiwgImskMSIsICJlJDEiLCAiZm4kMSIsICJjb252ZXJ0TGFiNjVUb1h5ejY1IiwgImZ5IiwgImZ4IiwgImZ6IiwgImNvbnZlcnRMYWI2NVRvUmdiIiwgImxhYiIsICJmJDEiLCAiY29udmVydFh5ejY1VG9MYWI2NSIsICJmMCIsICJmMSIsICJmMiIsICJjb252ZXJ0UmdiVG9MYWI2NSIsICLOuCIsICJjb3POuCIsICJzaW7OuCIsICJmYWN0b3IiLCAiY29udmVydERsY2hUb0xhYjY1IiwgIkciLCAiZSIsICJmIiwgImNvbnZlcnRMYWI2NVRvRGxjaCIsICJjb252ZXJ0RGxhYlRvTGFiNjUiLCAiY29udmVydExhYjY1VG9EbGFiIiwgImRlZmluaXRpb24kMjQiLCAiZGVmaW5pdGlvbiQyMyIsICJjb252ZXJ0SHNpVG9SZ2IiLCAiY29udmVydFJnYlRvSHNpIiwgIm0iLCAiZGVmaW5pdGlvbiQyMiIsICJjb252ZXJ0SHNsVG9SZ2IiLCAibTEiLCAibTIiLCAiY29udmVydFJnYlRvSHNsIiwgImh1ZVRvRGVnIiwgInVuaXQiLCAiaHNsX29sZCIsICJwYXJzZUhzbExlZ2FjeSIsICJwYXJzZUhzbCIsICJkZWZpbml0aW9uJDIxIiwgImNvbnZlcnRIc3ZUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic3YiLCAiZGVmaW5pdGlvbiQyMCIsICJjb252ZXJ0SHdiVG9SZ2IiLCAidyIsICJjb252ZXJ0UmdiVG9Id2IiLCAicmdiYSIsICJoc3YiLCAiUGFyc2VId2IiLCAiZGVmaW5pdGlvbiQxOSIsICJNMSIsICJNMiIsICJDMSIsICJDMiIsICJDMyIsICJ0cmFuc2ZlclBxRGVjb2RlIiwgInRyYW5zZmVyUHFFbmNvZGUiLCAidG9SZWwiLCAiY29udmVydEl0cFRvWHl6NjUiLCAicCIsICJ0b0FicyIsICJjb252ZXJ0WHl6NjVUb0l0cCIsICJhYnNYIiwgImFic1kiLCAiYWJzWiIsICJkZWZpbml0aW9uJDE4IiwgInAkMSIsICJkMCQxIiwgImphYlBxRW5jb2RlIiwgInZuIiwgImNvbnZlcnRYeXo2NVRvSmFiIiwgInhwIiwgInlwIiwgImQwIiwgImphYlBxRGVjb2RlIiwgInZwIiwgInJlbCIsICJjb252ZXJ0SmFiVG9YeXo2NSIsICJqIiwgImNvbnZlcnRSZ2JUb0phYiIsICJjb252ZXJ0SmFiVG9SZ2IiLCAiZGVmaW5pdGlvbiQxNyIsICJjb252ZXJ0SmFiVG9KY2giLCAiY29udmVydEpjaFRvSmFiIiwgImRlZmluaXRpb24kMTYiLCAiY29udmVydExhYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9SZ2IiLCAiY29udmVydExhYlRvUmdiIiwgImNvbnZlcnRSZ2JUb1h5ejUwIiwgImNvbnZlcnRYeXo1MFRvTGFiIiwgImNvbnZlcnRSZ2JUb0xhYiIsICJwYXJzZUxhYiIsICJkZWZpbml0aW9uJDE1IiwgImRlZmluaXRpb24kMTQiLCAicGFyc2VMY2giLCAiZGVmaW5pdGlvbiQxMyIsICJkZWZpbml0aW9uJDEyIiwgImNvbnZlcnRMdXZUb0xjaHV2IiwgInUiLCAiY29udmVydExjaHV2VG9MdXYiLCAidV9mbiQxIiwgInZfZm4kMSIsICJ1biQxIiwgInZuJDEiLCAibF9mbiIsICJjb252ZXJ0WHl6NTBUb0x1diIsICJ1X2ZuIiwgInZfZm4iLCAidW4iLCAiY29udmVydEx1dlRvWHl6NTAiLCAidXAiLCAiY29udmVydFJnYlRvTGNodXYiLCAiY29udmVydExjaHV2VG9SZ2IiLCAibGNodXYiLCAiZGVmaW5pdGlvbiQxMSIsICJkZWZpbml0aW9uJDEwIiwgImRlZmluaXRpb24kOSIsICJsdXYiLCAiY29udmVydExyZ2JUb09rbGFiIiwgIkwiLCAiUyIsICJjb252ZXJ0UmdiVG9Pa2xhYiIsICJjb252ZXJ0T2tsYWJUb0xyZ2IiLCAiY29udmVydE9rbGFiVG9SZ2IiLCAidG9lIiwgImtfMyIsICJ0b2VfaW52IiwgImNvbXB1dGVfbWF4X3NhdHVyYXRpb24iLCAiazAiLCAiazEiLCAiazIiLCAiazMiLCAiazQiLCAid2wiLCAid20iLCAid3MiLCAia19sIiwgImtfbSIsICJrX3MiLCAibF8iLCAibV8iLCAic18iLCAibF9kUyIsICJtX2RTIiwgInNfZFMiLCAibF9kUzIiLCAibV9kUzIiLCAic19kUzIiLCAiZmluZF9jdXNwIiwgIlNfY3VzcCIsICJMX2N1c3AiLCAiZmluZF9nYW11dF9pbnRlcnNlY3Rpb24iLCAiTDEiLCAiTDAiLCAiY3VzcCIsICJkTCIsICJkQyIsICJsX2R0IiwgIm1fZHQiLCAic19kdCIsICJDIiwgImxkdCIsICJtZHQiLCAic2R0IiwgImxkdDIiLCAibWR0MiIsICJzZHQyIiwgInIxIiwgInIyIiwgInVfciIsICJ0X3IiLCAiZzEiLCAiZzIiLCAidV9nIiwgInRfZyIsICJiMSIsICJiMiIsICJ1X2IiLCAidF9iIiwgImdldF9TVF9tYXgiLCAiYV8iLCAiYl8iLCAiZ2V0X0NzIiwgIkNfbWF4IiwgIlNUX21heCIsICJTX21pZCIsICJUX21pZCIsICJDX2EiLCAiQ19iIiwgIkNfbWlkIiwgImNvbnZlcnRPa2xhYlRvT2toc2wiLCAicmV0IiwgIkNfMCIsICJrXzAiLCAia18xIiwgImtfMiIsICJjb252ZXJ0T2toc2xUb09rbGFiIiwgImhzbCIsICJtb2RlT2toc2wiLCAiY29udmVydE9rbGFiVG9Pa2hzdiIsICJTX21heCIsICJUIiwgIlNfMCIsICJMX3YiLCAiQ192IiwgIkxfdnQiLCAiQ192dCIsICJyZ2Jfc2NhbGUiLCAic2NhbGVfTCIsICJjb252ZXJ0T2toc3ZUb09rbGFiIiwgIkxfbmV3IiwgIm1vZGVPa2hzdiIsICJwYXJzZU9rbGFiIiwgImRlZmluaXRpb24kOCIsICJwYXJzZU9rbGNoIiwgImRlZmluaXRpb24kNyIsICJjb252ZXJ0UDNUb1h5ejY1IiwgImNvbnZlcnRYeXo2NVRvUDMiLCAiZGVmaW5pdGlvbiQ2IiwgImdhbW1hJDEiLCAiY29udmVydFh5ejUwVG9Qcm9waG90byIsICJsaW5lYXJpemUkMSIsICJjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwIiwgInByb3Bob3RvIiwgImRlZmluaXRpb24kNSIsICLOsSQxIiwgIs6yJDEiLCAiZ2FtbWEiLCAiY29udmVydFh5ejY1VG9SZWMyMDIwIiwgIs6xIiwgIs6yIiwgImxpbmVhcml6ZSIsICJjb252ZXJ0UmVjMjAyMFRvWHl6NjUiLCAicmVjMjAyMCIsICJkZWZpbml0aW9uJDQiLCAiYmlhcyIsICJiaWFzX2NicnQiLCAidHJhbnNmZXIkMSIsICJjb252ZXJ0UmdiVG9YeWIiLCAidHJhbnNmZXIiLCAiY29udmVydFh5YlRvUmdiIiwgImRlZmluaXRpb24kMyIsICJkZWZpbml0aW9uJDIiLCAiY29udmVydFh5ejY1VG9YeXo1MCIsICJ4eXo2NSIsICJjb252ZXJ0WHl6NTBUb1h5ejY1IiwgInh5ejUwIiwgImRlZmluaXRpb24kMSIsICJjb252ZXJ0UmdiVG9ZaXEiLCAiY29udmVydFlpcVRvUmdiIiwgInEiLCAicHJlY2lzaW9uIiwgInJvdW5kIiwgInR3b0RlY2ltYWxzIiwgImNsYW1wJDEiLCAiZml4dXAiLCAicmdiJDEiLCAiaHNsJDEiLCAic2VyaWFsaXplSGV4IiwgImZvcm1hdEhleCIsICJjdWJlaGVsaXgiLCAiZGxhYiIsICJkbGNoIiwgImhzaSIsICJod2IiLCAiaXRwIiwgImphYiIsICJqY2giLCAibGFiNjUiLCAibGNoIiwgImxjaDY1IiwgImxyZ2IiLCAib2toc2wiLCAib2toc3YiLCAib2tsYWIiLCAib2tsY2giLCAicDMiLCAieHliIiwgInlpcSIsICJzb3J0Q29sb3JzIiwgImxpc3QiLCAiY3JpdGVyaWEiLCAiZXVjbGlkZWFuRGlzdGFuY2UiLCAiY29sb3IxIiwgImNvbG9yMiIsICJtYWtlQ2x1c3RlcnMiLCAiZGF0YSIsICJjZW50cm9pZHMiLCAiY2x1c3RlcnMiLCAicG9pbnQiLCAibWluRGlzdGFuY2UiLCAibWluRGlzdGFuY2VDbHVzdGVySW5kZXgiLCAiY2VudHJvaWQiLCAiaW5kZXgiLCAiZGlzdGFuY2UiLCAiY29tcHV0ZU1lYW4iLCAicG9pbnRzIiwgImtNZWFucyIsICJpbml0aWFsaXplQ2VudHJvaWRzIiwgIm1heEl0ZXJhdGlvbnMiLCAiaXRlcmF0aW9uIiwgIm5ld0NlbnRyb2lkcyIsICJjbHVzdGVyIiwgIm5ld0NlbnRyb2lkIiwgImRpc3RhbmNlcyIsICJ0b3RhbERpc3RhbmNlIiwgInByb2JhYmlsaXRpZXMiLCAiY3VtdWxhdGl2ZVByb2JhYmlsaXR5IiwgInJhbmRvbVZhbHVlIiwgInByZUJsdXJQaXhlbHMiLCAiaW1nVVJMIiwgImJsb2IiLCAiYml0bWFwIiwgIm9mZnNldCIsICJjdHgiLCAiZ2V0Q2x1c3RlckltYWdlRGF0YSIsICJhbGxDb3VudCIsICJkdiIsICJmcDMyIiwgImk0IiwgImdldERvbWluYW50Q29sb3JzIiwgIldBTExQQVBFUl9USEVNRV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZIiwgIlRIRU1FX1NUT1JBR0VfS0VZIiwgIlBSSU1BUllfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1VSTF9LRVkiLCAiUEFQRVJfTF9TUExJVCIsICJQQVBFUl9DSFJPTUFfQ0FQIiwgIkZBTExCQUNLX1BBUEVSIiwgIlNFRURfUFJPUFMiLCAiY2xhbXAiLCAibiIsICJsbyIsICJoaSIsICJoZXhPa2xjaCIsICJmYWxsYmFjayIsICJyZ2JUb1NhbXBsZSIsICJvayIsICJwYXBlckxGcm9tSGV4IiwgImhhbG9Gb3JQYXBlciIsICJkYXJrUGFwZXIiLCAiZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tU2FtcGxlcyIsICJzYW1wbGVzIiwgIm1lYW5MIiwgInBhcGVyIiwgInBhcGVyTCIsICJwYXBlckMiLCAiZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSIsICJsdW1hIiwgImhhc1dhbGxwYXBlclBhcGVyIiwgInNlZWRzIiwgInJhbmtXYWxscGFwZXJTZWVkcyIsICJhY2NlbnRQb29sIiwgInBvb2wiLCAicHJpbWFyeSIsICJodWVEaXN0IiwgInBpY2tOZXh0IiwgInVzZWQiLCAicmVzdCIsICJiYXNlIiwgIm51ZGdlZCIsICJzZWNvbmRhcnkiLCAidGVydGlhcnkiLCAidGhlbWVIb3N0cyIsICJub2RlcyIsICJlbCIsICJ3YWxscGFwZXJTZWVkc01heVBhaW50IiwgInNyYyIsICJhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zIiwgImV4dHJhSG9zdHMiLCAic2hhZG93IiwgImdsb3ciLCAiaG9zdHMiLCAiaG9zdCIsICJhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEiLCAiYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzIiwgIm5leHQiLCAicHJvcCIsICJrZXkiLCAibG9hZENhY2hlZFdhbGxwYXBlclRoZW1lIiwgInJhdyIsICJhcHBseVRoZW1lRnJvbVdhbGxwYXBlciIsICJvcHRzIiwgInNyY0tleSIsICJjYWNoZWQiLCAiZXJyIiwgInJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlIiwgImJsb2JJbWFnZU1hcCIsICJkZWxheWVkIiwgInNoZWR1bGVyIiwgImZhaWxlZFdhbGxwYXBlclNyYyIsICJnZXRJbWdXaWR0aCIsICJpbWciLCAiZ2V0SW1nSGVpZ2h0IiwgImNyZWF0ZTJkQ29udGV4dCIsICJjYW52YXMiLCAiY29sb3JTcGFjZSIsICJjYWxsQnlGcmFtZSIsICJwb2ludGVySWQiLCAiY2IiLCAiY292ZXIiLCAic2NhbGUiLCAicG9ydCIsICJvcmllbnQiLCAiY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSIsICJwZW5kaW5nIiwgImJpbmRDYWNoZVN5bWJvbCIsICJiaW5kQ2FjaGUiLCAiYmluZENhY2hlZCIsICJib3VuZCIsICJVSUNhbnZhcyIsICIjc2l6ZSIsICIjbG9hZGluZyIsICIjcmVhZHkiLCAiI29yaWVudCIsICJuYW1lIiwgIl8iLCAibmV3VmFsdWUiLCAiI3ByZWxvYWQiLCAiI3JlbmRlciIsICJwYXJlbnQiLCAiZml4U2l6ZSIsICJvbGQiLCAiZW50cmllcyIsICJlbnRyeSIsICJib3giLCAicmVhZHkiLCAid2hhdElzUmVhZHkiLCAib3giLCAicnNwIiwgIldBTExQQVBFUl9TVE9SQUdFX0tFWSIsICJERUZBVUxUX1dBTExQQVBFUl9VUkwiLCAiV0FMTFBBUEVSX0lEQl9NQVJLRVIiLCAiSURCX05BTUUiLCAiSURCX1NUT1JFIiwgIklEQl9LRVkiLCAiTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTIiwgImxpdmVPYmplY3RVcmwiLCAiY3VycmVudE9yaWVudE51bWJlciIsICJyZXZva2VMaXZlT2JqZWN0VXJsIiwgIm9wZW5XYWxscGFwZXJEYiIsICJyZXNvbHZlIiwgInJlamVjdCIsICJyZXEiLCAiZGIiLCAiaWRiUHV0V2FsbHBhcGVyIiwgInR4IiwgImlkYkdldFdhbGxwYXBlciIsICJpZGJDbGVhcldhbGxwYXBlciIsICJyZWFkU3RvcmFnZVBvaW50ZXIiLCAid3JpdGVTdG9yYWdlUG9pbnRlciIsICJpc0lubGluZVBheWxvYWQiLCAidXJsIiwgInJlc29sdmVBcHBXYWxscGFwZXJVcmwiLCAicG9pbnRlciIsICJnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciIsICJzeW5jQ2FudmFzT3JpZW50IiwgImFwcGx5IiwgInN5bmNBcHBXYWxscGFwZXJPcmllbnQiLCAicmVmcmVzaEFwcFdhbGxwYXBlclBhaW50IiwgInBhaW50V2FsbHBhcGVyT25DYW52YXNlcyIsICJzeW5jR2xvd1RvVGhlbWUiLCAicGFpbnRVcmwiLCAiY2FudmFzZXMiLCAiZGF0YVVybFRvQmxvYiIsICJkYXRhVXJsIiwgInNldEFwcFdhbGxwYXBlckZyb21CbG9iIiwgInNldEFwcFdhbGxwYXBlciIsICJyZWFkZXIiLCAiaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyIiwgImNvbnRhaW5lciIsICJyb290IiwgImNvbGRVcmwiLCAiZGlzcG9zZU9yaWVudCIsICJ3YWxscGFwZXIiLCAid2FsbHBhcGVyVXJsIl0KfQo=
