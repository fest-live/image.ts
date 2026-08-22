import { getCorrectOrientation as Jr, makeRAFCycle as Kr, orientationNumberMap as Vr, whenAnyScreenChanges as Qr } from "@fest-lib/dom";
var ko = "electronBridge", _o = { fast: {
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
}, ea = {
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
}, ta = (e) => ur(ea[e.toLowerCase()], 6), ra = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, aa = (e) => {
  let t;
  return (t = e.match(ra)) ? ur(parseInt(t[1], 16), t[1].length) : void 0;
}, P = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", $o = `(?:${P}|none)`, te = `${P}%`, zo = `(?:${P}%|none)`, yt = `(?:${P}%|${P})`, ia = `(?:${P}%|${P}|none)`, oa = `(?:${P}(deg|grad|rad|turn)|${P})`, Po = `(?:${P}(deg|grad|rad|turn)|${P}|none)`, j = "\\s*,\\s*", To = new RegExp("^" + ia + "$"), na = new RegExp(`^rgba?\\(\\s*${P}${j}${P}${j}${P}\\s*(?:,\\s*${yt}\\s*)?\\)$`), la = new RegExp(`^rgba?\\(\\s*${te}${j}${te}${j}${te}\\s*(?:,\\s*${yt}\\s*)?\\)$`), sa = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(na))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(la))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, ha = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? ya(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, Mt = (e = "rgb") => (t) => (t = ha(t, e)) !== void 0 ? t.mode === e ? t : S[t.mode][e] ? S[t.mode][e](t) : e === "rgb" ? S[t.mode].rgb(t) : S.rgb[e](S[t.mode].rgb(t)) : void 0, S = {}, fr = {}, ue = [], pr = {}, da = (e) => e, m = (e) => (S[e.mode] = {
  ...S[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  S[t] || (S[t] = {}), S[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = da);
}), fr[e.mode] = e, (e.parse || []).forEach((t) => {
  va(t, e.mode);
}), Mt(e.mode)), ca = (e) => fr[e], va = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    pr[e] = t;
  } else typeof e == "function" && ue.indexOf(e) < 0 && ue.push(e);
}, st = /[^\x00-\x7F]|[a-zA-Z_]/, ua = /[^\x00-\x7F]|[-\w]/, s = {
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
function ht(e) {
  if (u >= e.length) return !1;
  let t = e[u];
  if (st.test(t)) return !0;
  if (t === "-") {
    if (e.length - u < 2) return !1;
    let r = e[u + 1];
    return !!(r === "-" || st.test(r));
  }
  return !1;
}
var fa = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ee(e) {
  let t = "";
  if ((e[u] === "-" || e[u] === "+") && (t += e[u++]), t += se(e), e[u] === "." && /\d/.test(e[u + 1]) && (t += e[u++] + se(e)), (e[u] === "e" || e[u] === "E") && ((e[u + 1] === "-" || e[u + 1] === "+") && /\d/.test(e[u + 2]) ? t += e[u++] + e[u++] + se(e) : /\d/.test(e[u + 1]) && (t += e[u++] + se(e))), ht(e)) {
    let r = fe(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * fa[r]
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
  for (; u < e.length && ua.test(e[u]); ) t += e[u++];
  return t;
}
function pa(e) {
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
function ma(e = "") {
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
      if (ht(t)) {
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
      if (ht(t) && fe(t) === "none") {
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
    if (st.test(a)) {
      u--, r.push(pa(t));
      continue;
    }
    return;
  }
  return r;
}
function ba(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = pr[t.value];
  if (!r) return;
  const a = { mode: r }, i = mr(e, !1);
  if (!i) return;
  const o = ca(r).channels;
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
function ga(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = mr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var ya = (e) => {
  if (typeof e != "string") return;
  const t = ma(e), r = t ? ga(t, !0) : void 0;
  let a, i = 0, o = ue.length;
  for (; i < o; ) if ((a = ue[i++](e, r)) !== void 0) return a;
  return t ? ba(t) : void 0;
};
function Ma(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value / 255 : o.value / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var wa = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, xa = (e, t, r) => e + r * (t - e), ka = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, _a = (e) => (t) => {
  let r = ka(t);
  return (a) => {
    let i = a * r.length, o = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), n = r[o];
    return n === void 0 ? void 0 : e(n[0], n[1], i - o);
  };
}, h = _a(xa), M = (e) => {
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
    Ma,
    aa,
    sa,
    ta,
    wa,
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
}, Oe = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Ot = (e) => {
  let t = Oe(e.r), r = Oe(e.g), a = Oe(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, We = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Wt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: We(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: We(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: We(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, De = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, F = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: De(e),
    g: De(t),
    b: De(r)
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
}, Xe = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, Y = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let o = {
    mode: i,
    r: Xe(e),
    g: Xe(t),
    b: Xe(r)
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
}, $a = {
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
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, za = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let o = _(r);
  return a === 0 || e[a - 1] === void 0 ? o : t(o - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), A = (e) => za(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), x = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], Pa = Math.PI / 180, Ta = 180 / Math.PI, Dt = x[3] * x[4], Xt = x[1] * x[4], jt = x[1] * x[2] - x[0] * x[3], Sa = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (jt * r + e * Dt - t * Xt) / (jt + Dt - Xt), o = r - i, n = (x[4] * (t - i) - x[2] * o) / x[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(o * o + n * n) / (x[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(n, o) * Ta - 120), a !== void 0 && (l.alpha = a), l;
}, Aa = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Pa, r === void 0 && (r = 0);
  let o = t === void 0 ? 0 : t * r * (1 - r), n = Math.cos(e), l = Math.sin(e);
  return i.r = r + o * (x[0] * n + x[1] * l), i.g = r + o * (x[2] * n + x[3] * l), i.b = r + o * (x[4] * n + x[5] * l), a !== void 0 && (i.alpha = a), i;
}, xe = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, Ca = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, ke = (e, t) => {
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
}, Ea = {
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
  fromMode: { rgb: Sa },
  toMode: { rgb: Aa },
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
  difference: { h: xe },
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
}, br = Math.pow(29, 3) / Math.pow(3, 3), gr = Math.pow(6, 3) / Math.pow(29, 3), g = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, X = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, So = Math.pow(29, 3) / Math.pow(3, 3), Ao = Math.pow(6, 3) / Math.pow(29, 3), je = (e) => Math.pow(e, 3) > gr ? Math.pow(e, 3) : (116 * e - 16) / br, yr = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz65",
    x: je(o) * X.X,
    y: je(i) * X.Y,
    z: je(n) * X.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, _e = (e) => W(yr(e)), Be = (e) => e > gr ? Math.cbrt(e) : (br * e + 16) / 116, Mr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Be(e / X.X), o = Be(t / X.Y), n = Be(r / X.Z), l = {
    mode: "lab65",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, $e = (e) => {
  let t = Mr(O(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, re = 26 / 180 * Math.PI, pe = Math.cos(re), me = Math.sin(re), wr = 100 / Math.log(139 / 100), dt = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / wr) - 1) / 39e-4
  }, o = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, n = o * Math.cos(r / 180 * Math.PI - re), l = o * Math.sin(r / 180 * Math.PI - re);
  return i.a = n * pe - l / 0.83 * me, i.b = n * me + l / 0.83 * pe, a !== void 0 && (i.alpha = a), i;
}, ct = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * pe + r * me, o = 0.83 * (r * pe - t * me), n = Math.sqrt(i * i + o * o), l = {
    mode: "dlch",
    l: wr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * n) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(o, i) + re) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, Bt = (e) => dt(I(e, "dlch")), Ft = (e) => R(ct(e), "dlab"), Ia = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Bt,
    rgb: (e) => _e(Bt(e))
  },
  fromMode: {
    lab65: Ft,
    rgb: (e) => Ft($e(e))
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
}, Ra = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: dt,
    dlab: (e) => R(e, "dlab"),
    rgb: (e) => _e(dt(e))
  },
  fromMode: {
    lab65: ct,
    dlab: (e) => I(e, "dlch"),
    rgb: (e) => ct($e(e))
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
  difference: { h: ke },
  average: { h: C }
};
function Na({ h: e, s: t, i: r, alpha: a }) {
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
function La({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * o / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Ha = {
  mode: "hsi",
  toMode: { rgb: Na },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: La },
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
  difference: { h: xe },
  average: { h: C }
};
function qa({ h: e, s: t, l: r, alpha: a }) {
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
function Oa({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsl",
    s: i === o ? 0 : (i - o) / (1 - Math.abs(i + o - 1)),
    l: 0.5 * (i + o)
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Wa = (e, t) => {
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
}, Da = new RegExp(`^hsla?\\(\\s*${oa}${j}${te}${j}${te}\\s*(?:,\\s*${yt}\\s*)?\\)$`), Xa = (e) => {
  let t = e.match(Da);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = Wa(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function ja(e, t) {
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
  toMode: { rgb: qa },
  fromMode: { rgb: Oa },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [ja, Xa],
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
  difference: { h: xe },
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
  difference: { h: xe },
  average: { h: C }
};
function Ba({ h: e, w: t, b: r, alpha: a }) {
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
function Fa(e) {
  let t = _r(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Ya(e, t) {
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
var Za = {
  mode: "hwb",
  toMode: { rgb: Ba },
  fromMode: { rgb: Fa },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Ya],
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
  difference: { h: Ca },
  average: { h: C }
}, ze = 0.1593017578125, zr = 78.84375, Pe = 0.8359375, Te = 18.8515625, Se = 18.6875;
function Fe(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / zr);
  return 1e4 * Math.pow(Math.max(0, t - Pe) / (Te - Se * t), 1 / ze);
}
function Ye(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, ze);
  return Math.pow((Pe + Te * t) / (1 + Se * t), zr);
}
var Ze = (e) => Math.max(e / 203, 0), Yt = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = Fe(e + 0.008609037037932761 * t + 0.11102962500302593 * r), o = Fe(e - 0.00860903703793275 * t - 0.11102962500302599 * r), n = Fe(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: Ze(2.070152218389422 * i - 1.3263473389671556 * o + 0.2066510476294051 * n),
    y: Ze(0.3647385209748074 * i + 0.680566024947227 * o - 0.0453045459220346 * n),
    z: Ze(-0.049747207535812 * i - 0.0492609666966138 * o + 1.1880659249923042 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ue = (e = 0) => Math.max(e * 203, 0), Zt = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = Ue(e), o = Ue(t), n = Ue(r), l = Ye(0.3592832590121217 * i + 0.6976051147779502 * o - 0.0358915932320289 * n), d = Ye(-0.1920808463704995 * i + 1.1004767970374323 * o + 0.0753748658519118 * n), c = Ye(0.0070797844607477 * i + 0.0748396662186366 * o + 0.8433265453898765 * n), v = {
    mode: "itp",
    i: 0.5 * l + 0.5 * d,
    t: 1.61376953125 * l - 3.323486328125 * d + 1.709716796875 * c,
    p: 4.378173828125 * l - 4.24560546875 * d - 0.132568359375 * c
  };
  return a !== void 0 && (v.alpha = a), v;
}, Ua = {
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
}, Ga = 134.03437499999998, Ja = 16295499532821565e-27, Ge = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, ze);
  return Math.pow((Pe + Te * t) / (1 + Se * t), Ga);
}, Je = (e = 0) => Math.max(e * 203, 0), Pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e = Je(e), t = Je(t), r = Je(r);
  let i = 1.15 * e - 0.15 * r, o = 0.66 * t + 0.34 * e, n = Ge(0.41478972 * i + 0.579999 * o + 0.014648 * r), l = Ge(-0.20151 * i + 1.120649 * o + 0.0531008 * r), d = Ge(-0.0166008 * i + 0.2648 * o + 0.6684799 * r), c = (n + l) / 2, v = {
    mode: "jab",
    j: 0.44 * c / (1 - 0.56 * c) - Ja,
    a: 3.524 * n - 4.066708 * l + 0.542708 * d,
    b: 0.199076 * n + 1.096799 * l - 1.295875 * d
  };
  return a !== void 0 && (v.alpha = a), v;
}, Ka = 134.03437499999998, Ut = 16295499532821565e-27, Ke = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Ka);
  return 1e4 * Math.pow((Pe - t) / (Se * t - Te), 1 / ze);
}, Ve = (e) => e / 203, Tr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + Ut) / (0.44 + 0.56 * (e + Ut)), o = Ke(i + 0.13860504 * t + 0.058047316 * r), n = Ke(i - 0.13860504 * t - 0.058047316 * r), l = Ke(i - 0.096019242 * t - 0.8118919 * r), d = {
    mode: "xyz65",
    x: Ve(1.661373024652174 * o - 0.914523081304348 * n + 0.23136208173913045 * l),
    y: Ve(-0.3250758611844533 * o + 1.571847026732543 * n - 0.21825383453227928 * l),
    z: Ve(-0.090982811 * o - 0.31272829 * n + 1.5227666 * l)
  };
  return a !== void 0 && (d.alpha = a), d;
}, Sr = (e) => {
  let t = Pr(O(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ar = (e) => W(Tr(e)), Va = {
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
}, Qa = {
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
  difference: { h: ke },
  average: { h: C }
}, Ae = Math.pow(29, 3) / Math.pow(3, 3), wt = Math.pow(6, 3) / Math.pow(29, 3), Qe = (e) => Math.pow(e, 3) > wt ? Math.pow(e, 3) : (116 * e - 16) / Ae, xt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz50",
    x: Qe(o) * g.X,
    y: Qe(i) * g.Y,
    z: Qe(n) * g.Z
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
}, et = (e) => e > wt ? Math.cbrt(e) : (Ae * e + 16) / 116, kt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = et(e / g.X), o = et(t / g.Y), n = et(r / g.Z), l = {
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
function ei(e, t) {
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
  parse: [ei],
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
}, ti = {
  ..._t,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: yr,
    rgb: _e
  },
  fromMode: {
    xyz65: Mr,
    rgb: $e
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function ri(e, t) {
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
    rgb: (e) => I(Er(e)),
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
  parse: [ri],
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
  difference: { h: ke },
  average: { h: C }
}, ai = {
  ...$t,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => R(e, "lab65"),
    rgb: (e) => _e(R(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => I($e(e), "lch65"),
    lab65: (e) => I(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Ir = ({ l: e, u: t, v: r, alpha: a }) => {
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
}, Nr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Lr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), ii = Nr(g.X, g.Y, g.Z), oi = Lr(g.X, g.Y, g.Z), ni = (e) => e <= wt ? Ae * e : 116 * Math.cbrt(e) - 16, vt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = ni(t / g.Y), o = Nr(e, t, r), n = Lr(e, t, r);
  !isFinite(o) || !isFinite(n) ? i = o = n = 0 : (o = 13 * i * (o - ii), n = 13 * i * (n - oi));
  let l = {
    mode: "luv",
    l: i,
    u: o,
    v: n
  };
  return a !== void 0 && (l.alpha = a), l;
}, li = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), si = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), hi = li(g.X, g.Y, g.Z), di = si(g.X, g.Y, g.Z), ut = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + hi, o = r / (13 * e) + di, n = g.Y * (e <= 8 ? e / Ae : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: n * (9 * i) / (4 * o),
    y: n,
    z: n * (12 - 3 * i - 20 * o) / (4 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, ci = (e) => Ir(vt(oe(e))), vi = (e) => ie(ut(Rr(e))), ui = {
  mode: "lchuv",
  toMode: {
    luv: Rr,
    rgb: vi
  },
  fromMode: {
    rgb: ci,
    luv: Ir
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
  difference: { h: ke },
  average: { h: C }
}, fi = {
  ...B,
  mode: "lrgb",
  toMode: { rgb: Y },
  fromMode: { rgb: F },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, pi = {
  mode: "luv",
  toMode: {
    xyz50: ut,
    rgb: (e) => ie(ut(e))
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
}, Ce = (e) => {
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
}, Ee = (e) => Y(ne(e));
function ft(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function be(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function mi(e, t) {
  let r, a, i, o, n, l, d, c;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, o = 0.75515197, n = 0.56771245, l = 4.0767416621, d = -3.3077115913, c = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, o = 0.1254107, n = 0.14503204, l = -1.2684380046, d = 2.6097574011, c = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, o = -0.50559606, n = 692167e-8, l = -0.0041960863, d = -0.7034186147, c = 1.707614701);
  let v = r + a * e + i * t + o * e * e + n * e * t, f = 0.3963377774 * e + 0.2158037573 * t, p = -0.1055613458 * e - 0.0638541728 * t, b = -0.0894841775 * e - 1.291485548 * t;
  {
    let y = 1 + v * f, k = 1 + v * p, w = 1 + v * b, z = y * y * y, $ = k * k * k, E = w * w * w, Z = 3 * f * y * y, U = 3 * p * k * k, G = 3 * b * w * w, J = 6 * f * f * y, K = 6 * p * p * k, V = 6 * b * b * w, D = l * z + d * $ + c * E, H = l * Z + d * U + c * G, Q = l * J + d * K + c * V;
    v = v - D * H / (H * H - 0.5 * D * Q);
  }
  return v;
}
function zt(e, t) {
  let r = mi(e, t), a = ne({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function bi(e, t, r, a, i, o = null) {
  o || (o = zt(e, t));
  let n;
  if ((r - i) * o[1] - (o[0] - i) * a <= 0) n = o[1] * i / (a * o[0] + o[1] * (i - r));
  else {
    n = o[1] * (i - 1) / (a * (o[0] - 1) + o[1] * (i - r));
    {
      let l = r - i, d = a, c = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, f = -0.0894841775 * e - 1.291485548 * t, p = l + d * c, b = l + d * v, y = l + d * f;
      {
        let k = i * (1 - n) + n * r, w = n * a, z = k + w * c, $ = k + w * v, E = k + w * f, Z = z * z * z, U = $ * $ * $, G = E * E * E, J = 3 * p * z * z, K = 3 * b * $ * $, V = 3 * y * E * E, D = 6 * p * p * z, H = 6 * b * b * $, Q = 6 * y * y * E, It = 4.0767416621 * Z - 3.3077115913 * U + 0.2309699292 * G - 1, Ie = 4.0767416621 * J - 3.3077115913 * K + 0.2309699292 * V, Zr = 4.0767416621 * D - 3.3077115913 * H + 0.2309699292 * Q, Rt = Ie / (Ie * Ie - 0.5 * It * Zr), Re = -It * Rt, Nt = -1.2684380046 * Z + 2.6097574011 * U - 0.3413193965 * G - 1, Ne = -1.2684380046 * J + 2.6097574011 * K - 0.3413193965 * V, Ur = -1.2684380046 * D + 2.6097574011 * H - 0.3413193965 * Q, Lt = Ne / (Ne * Ne - 0.5 * Nt * Ur), Le = -Nt * Lt, Ht = -0.0041960863 * Z - 0.7034186147 * U + 1.707614701 * G - 1, He = -0.0041960863 * J - 0.7034186147 * K + 1.707614701 * V, Gr = -0.0041960863 * D - 0.7034186147 * H + 1.707614701 * Q, qt = He / (He * He - 0.5 * Ht * Gr), qe = -Ht * qt;
        Re = Rt >= 0 ? Re : 1e6, Le = Lt >= 0 ? Le : 1e6, qe = qt >= 0 ? qe : 1e6, n += Math.min(Re, Math.min(Le, qe));
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
  let a = zt(t, r), i = bi(t, r, e, 1, e, a), o = Pt(t, r, a), n = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), d = i / Math.min(e * o[0], (1 - e) * o[1]), c = e * n, v = (1 - e) * l, f = 0.9 * d * Math.sqrt(Math.sqrt(1 / (1 / (c * c * c * c) + 1 / (v * v * v * v))));
  return c = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (c * c) + 1 / (v * v))),
    f,
    i
  ];
}
function Kt(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: ft(t)
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
var gi = {
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
    rgb: (e) => Kt(Ce(e))
  },
  toMode: {
    oklab: Vt,
    rgb: (e) => Ee(Vt(e))
  }
};
function Qt(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), o = i ? r / i : 1, n = i ? a / i : 1, [l, d] = Pt(o, n), c = 0.5, v = 1 - c / l, f = d / (i + t * d), p = f * t, b = f * i, y = be(p), k = b * y / p, w = ne({
    l: y,
    a: o * k,
    b: n * k
  }), z = Math.cbrt(1 / Math.max(w.r, w.g, w.b, 0));
  t = t / z, i = i / z * ft(t) / t, t = ft(t);
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
var yi = {
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
    rgb: (e) => Qt(Ce(e))
  },
  toMode: {
    oklab: er,
    rgb: (e) => Ee(er(e))
  }
};
function Mi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 0.4 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var wi = {
  ..._t,
  mode: "oklab",
  toMode: {
    lrgb: ne,
    rgb: Ee
  },
  fromMode: {
    lrgb: Hr,
    rgb: Ce
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Mi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function xi(e, t) {
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
var ki = {
  ...$t,
  mode: "oklch",
  toMode: {
    oklab: (e) => R(e, "oklab"),
    rgb: (e) => Ee(R(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => I(Ce(e), "oklch"),
    oklab: (e) => I(e, "oklch")
  },
  parse: [xi],
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
}, _i = {
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
}, tt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, ar = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: tt(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: tt(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: tt(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, rt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, ir = (e) => {
  let t = rt(e.r), r = rt(e.g), a = rt(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, $i = {
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
}, zi = 1.09929682680944, Pi = 0.018053968510807, at = (e) => {
  const t = Math.abs(e);
  return t > Pi ? (Math.sign(e) || 1) * (zi * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, or = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: at(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: at(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: at(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, nr = 1.09929682680944, Ti = 0.018053968510807, it = (e = 0) => {
  let t = Math.abs(e);
  return t < Ti * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + nr - 1) / nr, 1 / 0.45);
}, lr = (e) => {
  let t = it(e.r), r = it(e.g), a = it(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Si = {
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
}, q = 0.0037930732552754493, Or = Math.cbrt(q), ot = (e) => Math.cbrt(e) - Or, Ai = (e) => {
  const { r: t, g: r, b: a, alpha: i } = F(e), o = ot(0.3 * t + 0.622 * r + 0.078 * a + q), n = ot(0.23 * t + 0.692 * r + 0.078 * a + q), l = ot(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + q), d = {
    mode: "xyb",
    x: (o - n) / 2,
    y: (o + n) / 2,
    b: l - (o + n) / 2
  };
  return i !== void 0 && (d.alpha = i), d;
}, nt = (e) => Math.pow(e + Or, 3), Ci = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = nt(e + t) - q, o = nt(t - e) - q, n = nt(r + t) - q, l = Y({
    r: 11.031566904639861 * i - 9.866943908131562 * o - 0.16462299650829934 * n,
    g: -3.2541473810744237 * i + 4.418770377582723 * o - 0.16462299650829934 * n,
    b: -3.6588512867136815 * i + 2.7129230459360922 * o + 1.9459282407775895 * n
  });
  return a !== void 0 && (l.alpha = a), l;
}, Ei = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: Ci },
  fromMode: { rgb: Ai },
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
}, Ri = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ni = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Li = {
  mode: "xyz65",
  toMode: {
    rgb: W,
    xyz50: Ri
  },
  fromMode: {
    rgb: O,
    xyz50: Ni
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
}, Hi = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, qi = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Oi = {
  mode: "yiq",
  toMode: { rgb: qi },
  fromMode: { rgb: Hi },
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
}, Wi = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, Di = (e = 4) => (t) => typeof t == "number" ? Wi(t, e) : t, Co = Di(2), Xi = (e) => Math.max(0, Math.min(1, e || 0)), lt = (e) => Math.round(Xi(e) * 255), ji = Mt("rgb"), Eo = Mt("hsl"), Bi = (e) => {
  if (e === void 0) return;
  let t = lt(e.r), r = lt(e.g), a = lt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, Wr = (e) => Bi(ji(e)), Io = m($a), Ro = m(Ea), No = m(Ia), Lo = m(Ra), Ho = m(Ha), qo = m(xr), Oo = m($r), Wo = m(Za), Do = m(Ua), Xo = m(Va), jo = m(Qa), Bo = m(_t), Fo = m(ti), Yo = m($t), Zo = m(ai), Uo = m(ui), Go = m(fi), Jo = m(pi), Ko = m(gi), Vo = m(yi), Qo = m(wi), pt = m(ki), en = m(_i), tn = m($i), rn = m(Si), an = m(B), on = m(Ei), nn = m(Ii), ln = m(Li), sn = m(Oi), Dr = (e, t = "l") => e.sort((r, a) => Math.sign(pt({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - pt({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Tt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), Fi = (e, t) => {
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
}, Yi = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], Zi = (e, t) => {
  let r = Dr(Ui(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const o = Fi(e, r).map((n) => n.points.length > 0 ? Yi(n.points) : null);
    if (o.every((n, l) => n && Tt(n, r[l]) < 1e-3)) break;
    r = o;
  }
  return r;
}, Ui = (e, t) => {
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
}, Gi = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((o) => o?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, Ji = async (e) => {
  const t = await Gi(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
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
}, Ki = async (e) => {
  const t = await Ji(e);
  return Dr(Zi(t, 4), "h");
}, Vi = "rs-wallpaper-theme", Qi = "rs-wallpaper-primary", eo = "rs-wallpaper-theme-src", Xr = Vi, to = Qi, sr = eo, ro = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], ao = (e) => {
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
  const o = pt({
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
}, io = (e) => {
  const t = e.map(ao).filter(Boolean);
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
}, oo = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, no = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, de = (e) => {
  try {
    localStorage.setItem(Xr, JSON.stringify(e)), localStorage.setItem(to, e.primary);
  } catch {
  }
  if (no()) {
    for (const t of oo()) for (const [r, a] of ro) t.style.setProperty(r, e[a]);
    document.querySelectorAll(".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((t) => {
      t.style.setProperty("--color-primary", e.primary), t.style.setProperty("--base-color", e.primary), t.style.setProperty("--color-secondary", e.secondary), t.style.setProperty("--color-tertiary", e.tertiary);
    }), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
      source: "wallpaper",
      seeds: e
    } }));
  }
}, mt = () => {
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
      const a = mt();
      if (a)
        return de(a), a;
    }
  } catch {
  }
  try {
    const a = await Ki(e), i = io(a);
    if (!i) return null;
    de(i);
    try {
      localStorage.setItem(sr, r);
    } catch {
    }
    return i;
  } catch (a) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", a);
    const i = mt();
    return i ? (de(i), i) : null;
  }
}, lo = () => {
  const e = mt();
  return e && de(e), e;
}, he = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new Map([]), hr = Kr(), ce = (e) => e?.naturalWidth || e?.width || 1, ve = (e) => e?.naturalHeight || e?.height || 1, ho = (e) => {
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
}, hn = (e, t) => {
  so.set(e, t);
}, co = (e, t, r = 1, a, i = 0) => {
  const o = e.canvas;
  e.translate(o.width / 2, o.height / 2), e.rotate((-i || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(ce(t) / 2) * r, -(ve(t) / 2) * r);
}, vo = (e) => {
  if (!he.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image)) {
    const t = createImageBitmap(e).catch((r) => {
      throw he.delete(e), r;
    });
    he.set(e, t);
  }
  return he.get(e);
}, jr = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[jr] ??= /* @__PURE__ */ new WeakMap();
var dr = globalThis[jr], uo = (e, t) => {
  const r = dr.get(e);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return dr.set(e, a), a;
}, bt = null;
typeof HTMLCanvasElement < "u" ? bt = class extends HTMLCanvasElement {
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
      this.ctx = ho(t);
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
    const a = t instanceof ImageBitmap ? t : await vo(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const o = this.#i % 2 || 0, n = ce(i) <= ve(i) ? 1 : 0, l = Math.max(r[["height", "width"][o]] / (n ? ve(i) : ce(i)), r[["width", "height"][o]] / (n ? ce(i) : ve(i)));
      a.save(), a.clearRect(0, 0, r.width, r.height), co(a, i, l, n, this.#i), a.drawImage(i, 0, 0, i.width * l, i.height * l), a.restore();
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
    this.image && r && (t == this.#t || !t) && hr?.shedule?.(uo(this.$renderPass, this));
  }
} : bt = class {
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
  customElements.define("ui-canvas", bt, { extends: "canvas" });
} catch {
}
var Br = "rs-wallpaper-image", N = "/assets/wallpaper.jpg", gt = "idb:rs-wallpaper", fo = "cwsp-wallpaper-v1", L = "blobs", St = "current", Fr = 512e3, T = null, At = () => Vr?.[Jr()] ?? 0, ye = () => {
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
  const r = indexedDB.open(fo, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(L) || a.createObjectStore(L);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), po = async (e) => {
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
}, mo = async () => {
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
}, Et = () => {
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
}, bo = (e) => e.startsWith("data:") || e.startsWith("blob:"), Yr = async () => {
  const e = Et();
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
      return ye(), T = URL.createObjectURL(t), Me(gt), T;
  } catch {
  }
  return e || N;
}, vn = () => Et(), vr = (e) => {
  const t = () => {
    const r = At(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), Qr(t);
}, go = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = At(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, un = () => {
  Yr().then((e) => {
    we(e), go();
  });
}, ae = (e) => {
  const t = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim() || "#5b86eb";
  e.style.background = `radial-gradient(circle at 15% 20%, color-mix(in oklab, ${t} 45%, transparent) 0%, transparent 40%), radial-gradient(circle at 75% 72%, color-mix(in oklab, ${t} 35%, transparent) 0%, transparent 43%)`;
}, we = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(At());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, yo = async (e) => (await fetch(e)).blob(), Mo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return wo(N), N;
  ye(), T = URL.createObjectURL(e), we(T), ge(T, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ae);
  });
  try {
    await po(e), Me(gt);
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
      pointer: gt,
      url: T
    } }));
  } catch {
  }
  return T;
}, fn = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "radial-gradient(circle at 18% 12%, #1b2a45 0%, #0f1728 42%, #060910 100%)";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "black", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const i = Et(), o = i === "idb:rs-wallpaper" || i.startsWith("idb:") || i.startsWith("data:") ? N : i;
  a.setAttribute("data-src", o);
  const n = vr(a);
  return lo(), ae(r), Yr().then((l) => (a.setAttribute("data-src", l), vr(a), ge(l).then(() => ae(r)))), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: n
  };
}, wo = (e) => {
  const t = String(e || "").trim() || N;
  if (bo(t) || t.length > Fr) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await yo(t);
        await Mo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r), we(t), ge(t, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(ae);
        });
      }
    })();
    return;
  }
  mo(), ye(), Me(t) || console.warn("[fest/image] wallpaper pointer write failed"), we(t), ge(t, { force: !0 }).then(() => {
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
  bt as UICanvas,
  gt as WALLPAPER_IDB_MARKER,
  Qi as WALLPAPER_PRIMARY_STORAGE_KEY,
  eo as WALLPAPER_THEME_SRC_STORAGE_KEY,
  Vi as WALLPAPER_THEME_STORAGE_KEY,
  ge as applyThemeFromWallpaper,
  de as applyWallpaperThemeSeeds,
  dr as bindCache,
  hn as callByFrame,
  co as cover,
  vo as createImageBitmapCache,
  ko as electronAPI,
  Ki as getDominantColors,
  vn as getWallpaperStoragePointer,
  fn as initializeAppCanvasLayer,
  mt as loadCachedWallpaperTheme,
  _o as qualityMode,
  io as rankWallpaperSeeds,
  un as refreshAppWallpaperPaint,
  Yr as resolveAppWallpaperUrl,
  lo as restoreWallpaperThemeCache,
  wo as setAppWallpaper,
  Mo as setAppWallpaperFromBlob,
  go as syncAppWallpaperOrient,
  vr as syncCanvasOrient,
  oo as themeHosts
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGdldENvcnJlY3RPcmllbnRhdGlvbiwgbWFrZVJBRkN5Y2xlLCBvcmllbnRhdGlvbk51bWJlck1hcCwgd2hlbkFueVNjcmVlbkNoYW5nZXMgfSBmcm9tIFwiQGZlc3QtbGliL2RvbVwiO1xuXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9Db25maWcudHNcbnZhciBlbGVjdHJvbkFQSSA9IFwiZWxlY3Ryb25CcmlkZ2VcIjtcbnZhciBxdWFsaXR5TW9kZSA9IHsgXCJmYXN0XCI6IHtcblx0ZGl2aXNvcjogNCxcblx0ZmlsdGVyOiBcImJsdXIoNHB4KVwiLFxuXHRzYW1wbGluZzogMTI4XG59IH07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU51bWJlci5qc1xudmFyIHBhcnNlTnVtYmVyID0gKGNvbG9yLCBsZW4pID0+IHtcblx0aWYgKHR5cGVvZiBjb2xvciAhPT0gXCJudW1iZXJcIikgcmV0dXJuO1xuXHRpZiAobGVuID09PSAzKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDggJiAxNSB8IGNvbG9yID4+IDQgJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA0ICYgMTUgfCBjb2xvciAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA0KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDEyICYgMTUgfCBjb2xvciA+PiA4ICYgMjQwKSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA2KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA4KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDI0ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGI6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY29sb3JzL25hbWVkLmpzXG52YXIgbmFtZWQgPSB7XG5cdGFsaWNlYmx1ZTogMTU3OTIzODMsXG5cdGFudGlxdWV3aGl0ZTogMTY0NDQzNzUsXG5cdGFxdWE6IDY1NTM1LFxuXHRhcXVhbWFyaW5lOiA4Mzg4NTY0LFxuXHRhenVyZTogMTU3OTQxNzUsXG5cdGJlaWdlOiAxNjExOTI2MCxcblx0YmlzcXVlOiAxNjc3MDI0NCxcblx0YmxhY2s6IDAsXG5cdGJsYW5jaGVkYWxtb25kOiAxNjc3MjA0NSxcblx0Ymx1ZTogMjU1LFxuXHRibHVldmlvbGV0OiA5MDU1MjAyLFxuXHRicm93bjogMTA4MjQyMzQsXG5cdGJ1cmx5d29vZDogMTQ1OTYyMzEsXG5cdGNhZGV0Ymx1ZTogNjI2NjUyOCxcblx0Y2hhcnRyZXVzZTogODM4ODM1Mixcblx0Y2hvY29sYXRlOiAxMzc4OTQ3MCxcblx0Y29yYWw6IDE2NzQ0MjcyLFxuXHRjb3JuZmxvd2VyYmx1ZTogNjU5MTk4MSxcblx0Y29ybnNpbGs6IDE2Nzc1Mzg4LFxuXHRjcmltc29uOiAxNDQyMzEwMCxcblx0Y3lhbjogNjU1MzUsXG5cdGRhcmtibHVlOiAxMzksXG5cdGRhcmtjeWFuOiAzNTcyMyxcblx0ZGFya2dvbGRlbnJvZDogMTIwOTI5MzksXG5cdGRhcmtncmF5OiAxMTExOTAxNyxcblx0ZGFya2dyZWVuOiAyNTYwMCxcblx0ZGFya2dyZXk6IDExMTE5MDE3LFxuXHRkYXJra2hha2k6IDEyNDMzMjU5LFxuXHRkYXJrbWFnZW50YTogOTEwOTY0Myxcblx0ZGFya29saXZlZ3JlZW46IDU1OTc5OTksXG5cdGRhcmtvcmFuZ2U6IDE2NzQ3NTIwLFxuXHRkYXJrb3JjaGlkOiAxMDA0MDAxMixcblx0ZGFya3JlZDogOTEwOTUwNCxcblx0ZGFya3NhbG1vbjogMTUzMDg0MTAsXG5cdGRhcmtzZWFncmVlbjogOTQxOTkxOSxcblx0ZGFya3NsYXRlYmx1ZTogNDczNDM0Nyxcblx0ZGFya3NsYXRlZ3JheTogMzEwMDQ5NSxcblx0ZGFya3NsYXRlZ3JleTogMzEwMDQ5NSxcblx0ZGFya3R1cnF1b2lzZTogNTI5NDUsXG5cdGRhcmt2aW9sZXQ6IDk2OTk1MzksXG5cdGRlZXBwaW5rOiAxNjcxNjk0Nyxcblx0ZGVlcHNreWJsdWU6IDQ5MTUxLFxuXHRkaW1ncmF5OiA2OTA4MjY1LFxuXHRkaW1ncmV5OiA2OTA4MjY1LFxuXHRkb2RnZXJibHVlOiAyMDAzMTk5LFxuXHRmaXJlYnJpY2s6IDExNjc0MTQ2LFxuXHRmbG9yYWx3aGl0ZTogMTY3NzU5MjAsXG5cdGZvcmVzdGdyZWVuOiAyMjYzODQyLFxuXHRmdWNoc2lhOiAxNjcxMTkzNSxcblx0Z2FpbnNib3JvOiAxNDQ3NDQ2MCxcblx0Z2hvc3R3aGl0ZTogMTYzMTY2NzEsXG5cdGdvbGQ6IDE2NzY2NzIwLFxuXHRnb2xkZW5yb2Q6IDE0MzI5MTIwLFxuXHRncmF5OiA4NDIxNTA0LFxuXHRncmVlbjogMzI3NjgsXG5cdGdyZWVueWVsbG93OiAxMTQwMzA1NSxcblx0Z3JleTogODQyMTUwNCxcblx0aG9uZXlkZXc6IDE1Nzk0MTYwLFxuXHRob3RwaW5rOiAxNjczODc0MCxcblx0aW5kaWFucmVkOiAxMzQ1ODUyNCxcblx0aW5kaWdvOiA0OTE1MzMwLFxuXHRpdm9yeTogMTY3NzcyMDAsXG5cdGtoYWtpOiAxNTc4NzY2MCxcblx0bGF2ZW5kZXI6IDE1MTMyNDEwLFxuXHRsYXZlbmRlcmJsdXNoOiAxNjc3MzM2NSxcblx0bGF3bmdyZWVuOiA4MTkwOTc2LFxuXHRsZW1vbmNoaWZmb246IDE2Nzc1ODg1LFxuXHRsaWdodGJsdWU6IDExMzkzMjU0LFxuXHRsaWdodGNvcmFsOiAxNTc2MTUzNixcblx0bGlnaHRjeWFuOiAxNDc0NTU5OSxcblx0bGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDE2NDQ4MjEwLFxuXHRsaWdodGdyYXk6IDEzODgyMzIzLFxuXHRsaWdodGdyZWVuOiA5NDk4MjU2LFxuXHRsaWdodGdyZXk6IDEzODgyMzIzLFxuXHRsaWdodHBpbms6IDE2NzU4NDY1LFxuXHRsaWdodHNhbG1vbjogMTY3NTI3NjIsXG5cdGxpZ2h0c2VhZ3JlZW46IDIxNDI4OTAsXG5cdGxpZ2h0c2t5Ymx1ZTogODkwMDM0Nixcblx0bGlnaHRzbGF0ZWdyYXk6IDc4MzM3NTMsXG5cdGxpZ2h0c2xhdGVncmV5OiA3ODMzNzUzLFxuXHRsaWdodHN0ZWVsYmx1ZTogMTE1ODQ3MzQsXG5cdGxpZ2h0eWVsbG93OiAxNjc3NzE4NCxcblx0bGltZTogNjUyODAsXG5cdGxpbWVncmVlbjogMzMyOTMzMCxcblx0bGluZW46IDE2NDQ1NjcwLFxuXHRtYWdlbnRhOiAxNjcxMTkzNSxcblx0bWFyb29uOiA4Mzg4NjA4LFxuXHRtZWRpdW1hcXVhbWFyaW5lOiA2NzM3MzIyLFxuXHRtZWRpdW1ibHVlOiAyMDUsXG5cdG1lZGl1bW9yY2hpZDogMTIyMTE2NjcsXG5cdG1lZGl1bXB1cnBsZTogOTY2MjY4Myxcblx0bWVkaXVtc2VhZ3JlZW46IDM5NzgwOTcsXG5cdG1lZGl1bXNsYXRlYmx1ZTogODA4Nzc5MCxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IDY0MTU0LFxuXHRtZWRpdW10dXJxdW9pc2U6IDQ3NzIzMDAsXG5cdG1lZGl1bXZpb2xldHJlZDogMTMwNDcxNzMsXG5cdG1pZG5pZ2h0Ymx1ZTogMTY0NDkxMixcblx0bWludGNyZWFtOiAxNjEyMTg1MCxcblx0bWlzdHlyb3NlOiAxNjc3MDI3Myxcblx0bW9jY2FzaW46IDE2NzcwMjI5LFxuXHRuYXZham93aGl0ZTogMTY3Njg2ODUsXG5cdG5hdnk6IDEyOCxcblx0b2xkbGFjZTogMTY2NDM1NTgsXG5cdG9saXZlOiA4NDIxMzc2LFxuXHRvbGl2ZWRyYWI6IDcwNDg3MzksXG5cdG9yYW5nZTogMTY3NTM5MjAsXG5cdG9yYW5nZXJlZDogMTY3MjkzNDQsXG5cdG9yY2hpZDogMTQzMTU3MzQsXG5cdHBhbGVnb2xkZW5yb2Q6IDE1NjU3MTMwLFxuXHRwYWxlZ3JlZW46IDEwMDI1ODgwLFxuXHRwYWxldHVycXVvaXNlOiAxMTUyOTk2Nixcblx0cGFsZXZpb2xldHJlZDogMTQzODEyMDMsXG5cdHBhcGF5YXdoaXA6IDE2NzczMDc3LFxuXHRwZWFjaHB1ZmY6IDE2NzY3NjczLFxuXHRwZXJ1OiAxMzQ2ODk5MSxcblx0cGluazogMTY3NjEwMzUsXG5cdHBsdW06IDE0NTI0NjM3LFxuXHRwb3dkZXJibHVlOiAxMTU5MTkxMCxcblx0cHVycGxlOiA4Mzg4NzM2LFxuXHRyZWJlY2NhcHVycGxlOiA2Njk3ODgxLFxuXHRyZWQ6IDE2NzExNjgwLFxuXHRyb3N5YnJvd246IDEyMzU3NTE5LFxuXHRyb3lhbGJsdWU6IDQyODY5NDUsXG5cdHNhZGRsZWJyb3duOiA5MTI3MTg3LFxuXHRzYWxtb246IDE2NDE2ODgyLFxuXHRzYW5keWJyb3duOiAxNjAzMjg2NCxcblx0c2VhZ3JlZW46IDMwNTAzMjcsXG5cdHNlYXNoZWxsOiAxNjc3NDYzOCxcblx0c2llbm5hOiAxMDUwNjc5Nyxcblx0c2lsdmVyOiAxMjYzMjI1Nixcblx0c2t5Ymx1ZTogODkwMDMzMSxcblx0c2xhdGVibHVlOiA2OTcwMDYxLFxuXHRzbGF0ZWdyYXk6IDczNzI5NDQsXG5cdHNsYXRlZ3JleTogNzM3Mjk0NCxcblx0c25vdzogMTY3NzU5MzAsXG5cdHNwcmluZ2dyZWVuOiA2NTQwNyxcblx0c3RlZWxibHVlOiA0NjIwOTgwLFxuXHR0YW46IDEzODA4NzgwLFxuXHR0ZWFsOiAzMjg5Nixcblx0dGhpc3RsZTogMTQyMDQ4ODgsXG5cdHRvbWF0bzogMTY3MzcwOTUsXG5cdHR1cnF1b2lzZTogNDI1MTg1Nixcblx0dmlvbGV0OiAxNTYzMTA4Nixcblx0d2hlYXQ6IDE2MTEzMzMxLFxuXHR3aGl0ZTogMTY3NzcyMTUsXG5cdHdoaXRlc21va2U6IDE2MTE5Mjg1LFxuXHR5ZWxsb3c6IDE2Nzc2OTYwLFxuXHR5ZWxsb3dncmVlbjogMTAxNDUwNzRcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU5hbWVkLmpzXG52YXIgcGFyc2VOYW1lZCA9IChjb2xvcikgPT4ge1xuXHRyZXR1cm4gcGFyc2VOdW1iZXIobmFtZWRbY29sb3IudG9Mb3dlckNhc2UoKV0sIDYpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlSGV4LmpzXG52YXIgaGV4ID0gL14jPyhbMC05YS1mXXs4fXxbMC05YS1mXXs2fXxbMC05YS1mXXs0fXxbMC05YS1mXXszfSkkL2k7XG52YXIgcGFyc2VIZXggPSAoY29sb3IpID0+IHtcblx0bGV0IG1hdGNoO1xuXHRyZXR1cm4gKG1hdGNoID0gY29sb3IubWF0Y2goaGV4KSkgPyBwYXJzZU51bWJlcihwYXJzZUludChtYXRjaFsxXSwgMTYpLCBtYXRjaFsxXS5sZW5ndGgpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9yZWdleC5qc1xudmFyIG51bSQxID0gXCIoWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcIjtcbnZhciBudW1fbm9uZSA9IGAoPzoke251bSQxfXxub25lKWA7XG52YXIgcGVyID0gYCR7bnVtJDF9JWA7XG52YXIgcGVyX25vbmUgPSBgKD86JHtudW0kMX0lfG5vbmUpYDtcbnZhciBudW1fcGVyID0gYCg/OiR7bnVtJDF9JXwke251bSQxfSlgO1xudmFyIG51bV9wZXJfbm9uZSA9IGAoPzoke251bSQxfSV8JHtudW0kMX18bm9uZSlgO1xudmFyIGh1ZSQxID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfSlgO1xudmFyIGh1ZV9ub25lID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfXxub25lKWA7XG52YXIgYyA9IGBcXFxccyosXFxcXHMqYDtcbnZhciByeF9udW1fcGVyX25vbmUgPSBuZXcgUmVnRXhwKFwiXlwiICsgbnVtX3Blcl9ub25lICsgXCIkXCIpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VSZ2JMZWdhY3kuanNcbnZhciByZ2JfbnVtX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtudW0kMX0ke2N9JHtudW0kMX0ke2N9JHtudW0kMX1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcmdiX3Blcl9vbGQgPSBuZXcgUmVnRXhwKGBecmdiYT9cXFxcKFxcXFxzKiR7cGVyfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlUmdiTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0bGV0IG1hdGNoO1xuXHRpZiAobWF0Y2ggPSBjb2xvci5tYXRjaChyZ2JfbnVtX29sZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCkgcmVzLnIgPSBtYXRjaFsxXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbMl0gIT09IHZvaWQgMCkgcmVzLmcgPSBtYXRjaFsyXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbM10gIT09IHZvaWQgMCkgcmVzLmIgPSBtYXRjaFszXSAvIDI1NTtcblx0fSBlbHNlIGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9wZXJfb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMTAwO1xuXHR9IGVsc2UgcmV0dXJuO1xuXHRpZiAobWF0Y2hbNF0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbWF0Y2hbNF0gLyAxMDApKTtcblx0ZWxzZSBpZiAobWF0Y2hbNV0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgK21hdGNoWzVdKSk7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9fcHJlcGFyZS5qc1xudmFyIHByZXBhcmUgPSAoY29sb3IsIG1vZGUpID0+IGNvbG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0eXBlb2YgY29sb3IgIT09IFwib2JqZWN0XCIgPyBwYXJzZShjb2xvcikgOiBjb2xvci5tb2RlICE9PSB2b2lkIDAgPyBjb2xvciA6IG1vZGUgPyB7XG5cdC4uLmNvbG9yLFxuXHRtb2RlXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb252ZXJ0ZXIuanNcbnZhciBjb252ZXJ0ZXIgPSAodGFyZ2V0X21vZGUgPSBcInJnYlwiKSA9PiAoY29sb3IpID0+IChjb2xvciA9IHByZXBhcmUoY29sb3IsIHRhcmdldF9tb2RlKSkgIT09IHZvaWQgMCA/IGNvbG9yLm1vZGUgPT09IHRhcmdldF9tb2RlID8gY29sb3IgOiBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdW3RhcmdldF9tb2RlXSA/IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdKGNvbG9yKSA6IHRhcmdldF9tb2RlID09PSBcInJnYlwiID8gY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpIDogY29udmVydGVycy5yZ2JbdGFyZ2V0X21vZGVdKGNvbnZlcnRlcnNbY29sb3IubW9kZV0ucmdiKGNvbG9yKSkgOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL21vZGVzLmpzXG52YXIgY29udmVydGVycyA9IHt9O1xudmFyIG1vZGVzID0ge307XG52YXIgcGFyc2VycyA9IFtdO1xudmFyIGNvbG9yUHJvZmlsZXMgPSB7fTtcbnZhciBpZGVudGl0eSA9ICh2KSA9PiB2O1xudmFyIHVzZU1vZGUgPSAoZGVmaW5pdGlvbikgPT4ge1xuXHRjb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0gPSB7XG5cdFx0Li4uY29udmVydGVyc1tkZWZpbml0aW9uLm1vZGVdLFxuXHRcdC4uLmRlZmluaXRpb24udG9Nb2RlXG5cdH07XG5cdE9iamVjdC5rZXlzKGRlZmluaXRpb24uZnJvbU1vZGUgfHwge30pLmZvckVhY2goKGspID0+IHtcblx0XHRpZiAoIWNvbnZlcnRlcnNba10pIGNvbnZlcnRlcnNba10gPSB7fTtcblx0XHRjb252ZXJ0ZXJzW2tdW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uLmZyb21Nb2RlW2tdO1xuXHR9KTtcblx0aWYgKCFkZWZpbml0aW9uLnJhbmdlcykgZGVmaW5pdGlvbi5yYW5nZXMgPSB7fTtcblx0aWYgKCFkZWZpbml0aW9uLmRpZmZlcmVuY2UpIGRlZmluaXRpb24uZGlmZmVyZW5jZSA9IHt9O1xuXHRkZWZpbml0aW9uLmNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwpID0+IHtcblx0XHRpZiAoZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPT09IHZvaWQgMCkgZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPSBbMCwgMV07XG5cdFx0aWYgKCFkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgaW50ZXJwb2xhdG9yIGZvcjogJHtjaGFubmVsfWApO1xuXHRcdGlmICh0eXBlb2YgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSA9PT0gXCJmdW5jdGlvblwiKSBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID0geyB1c2U6IGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gfTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXApIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXAgPSBpZGVudGl0eTtcblx0fSk7XG5cdG1vZGVzW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uO1xuXHQoZGVmaW5pdGlvbi5wYXJzZSB8fCBbXSkuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG5cdFx0dXNlUGFyc2VyKHBhcnNlciwgZGVmaW5pdGlvbi5tb2RlKTtcblx0fSk7XG5cdHJldHVybiBjb252ZXJ0ZXIoZGVmaW5pdGlvbi5tb2RlKTtcbn07XG52YXIgZ2V0TW9kZSA9IChtb2RlKSA9PiBtb2Rlc1ttb2RlXTtcbnZhciB1c2VQYXJzZXIgPSAocGFyc2VyLCBtb2RlKSA9PiB7XG5cdGlmICh0eXBlb2YgcGFyc2VyID09PSBcInN0cmluZ1wiKSB7XG5cdFx0aWYgKCFtb2RlKSB0aHJvdyBuZXcgRXJyb3IoYCdtb2RlJyByZXF1aXJlZCB3aGVuICdwYXJzZXInIGlzIGEgc3RyaW5nYCk7XG5cdFx0Y29sb3JQcm9maWxlc1twYXJzZXJdID0gbW9kZTtcblx0fSBlbHNlIGlmICh0eXBlb2YgcGFyc2VyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRpZiAocGFyc2Vycy5pbmRleE9mKHBhcnNlcikgPCAwKSBwYXJzZXJzLnB1c2gocGFyc2VyKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcGFyc2UuanNcbnZhciBJZGVudFN0YXJ0Q29kZVBvaW50ID0gL1teXFx4MDAtXFx4N0ZdfFthLXpBLVpfXS87XG52YXIgSWRlbnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18Wy1cXHddLztcbnZhciBUb2sgPSB7XG5cdEZ1bmN0aW9uOiBcImZ1bmN0aW9uXCIsXG5cdElkZW50OiBcImlkZW50XCIsXG5cdE51bWJlcjogXCJudW1iZXJcIixcblx0UGVyY2VudGFnZTogXCJwZXJjZW50YWdlXCIsXG5cdFBhcmVuQ2xvc2U6IFwiKVwiLFxuXHROb25lOiBcIm5vbmVcIixcblx0SHVlOiBcImh1ZVwiLFxuXHRBbHBoYTogXCJhbHBoYVwiXG59O1xudmFyIF9pID0gMDtcbmZ1bmN0aW9uIGlzX251bShjaGFycykge1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGxldCBjaDEgPSBjaGFyc1tfaSArIDFdO1xuXHRpZiAoY2ggPT09IFwiLVwiIHx8IGNoID09PSBcIitcIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKSB8fCBjaDEgPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSk7XG5cdGlmIChjaCA9PT0gXCIuXCIpIHJldHVybiAvXFxkLy50ZXN0KGNoMSk7XG5cdHJldHVybiAvXFxkLy50ZXN0KGNoKTtcbn1cbmZ1bmN0aW9uIGlzX2lkZW50KGNoYXJzKSB7XG5cdGlmIChfaSA+PSBjaGFycy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0bGV0IGNoID0gY2hhcnNbX2ldO1xuXHRpZiAoSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoKSkgcmV0dXJuIHRydWU7XG5cdGlmIChjaCA9PT0gXCItXCIpIHtcblx0XHRpZiAoY2hhcnMubGVuZ3RoIC0gX2kgPCAyKSByZXR1cm4gZmFsc2U7XG5cdFx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdFx0aWYgKGNoMSA9PT0gXCItXCIgfHwgSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoMSkpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG52YXIgaHVlbml0cyA9IHtcblx0ZGVnOiAxLFxuXHRyYWQ6IDE4MCAvIE1hdGguUEksXG5cdGdyYWQ6IDkgLyAxMCxcblx0dHVybjogMzYwXG59O1xuZnVuY3Rpb24gbnVtKGNoYXJzKSB7XG5cdGxldCB2YWx1ZSA9IFwiXCI7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLVwiIHx8IGNoYXJzW19pXSA9PT0gXCIrXCIpIHZhbHVlICs9IGNoYXJzW19pKytdO1xuXHR2YWx1ZSArPSBkaWdpdHMoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIi5cIiAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiZVwiIHx8IGNoYXJzW19pXSA9PT0gXCJFXCIpIHtcblx0XHRpZiAoKGNoYXJzW19pICsgMV0gPT09IFwiLVwiIHx8IGNoYXJzW19pICsgMV0gPT09IFwiK1wiKSAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMl0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0XHRlbHNlIGlmICgvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdH1cblx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdGxldCBpZCA9IGlkZW50KGNoYXJzKTtcblx0XHRpZiAoaWQgPT09IFwiZGVnXCIgfHwgaWQgPT09IFwicmFkXCIgfHwgaWQgPT09IFwidHVyblwiIHx8IGlkID09PSBcImdyYWRcIikgcmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5IdWUsXG5cdFx0XHR2YWx1ZTogdmFsdWUgKiBodWVuaXRzW2lkXVxuXHRcdH07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiJVwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLlBlcmNlbnRhZ2UsXG5cdFx0XHR2YWx1ZTogK3ZhbHVlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5OdW1iZXIsXG5cdFx0dmFsdWU6ICt2YWx1ZVxuXHR9O1xufVxuZnVuY3Rpb24gZGlnaXRzKGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKC9cXGQvLnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudChjaGFycykge1xuXHRsZXQgdiA9IFwiXCI7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCAmJiBJZGVudENvZGVQb2ludC50ZXN0KGNoYXJzW19pXSkpIHYgKz0gY2hhcnNbX2krK107XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gaWRlbnRsaWtlKGNoYXJzKSB7XG5cdGxldCB2ID0gaWRlbnQoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIihcIikge1xuXHRcdF9pKys7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5GdW5jdGlvbixcblx0XHRcdHZhbHVlOiB2XG5cdFx0fTtcblx0fVxuXHRpZiAodiA9PT0gXCJub25lXCIpIHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHR2YWx1ZTogdlxuXHR9O1xufVxuZnVuY3Rpb24gdG9rZW5pemUoc3RyID0gXCJcIikge1xuXHRsZXQgY2hhcnMgPSBzdHIudHJpbSgpO1xuXHRsZXQgdG9rZW5zID0gW107XG5cdGxldCBjaDtcblx0X2kgPSAwO1xuXHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGgpIHtcblx0XHRjaCA9IGNoYXJzW19pKytdO1xuXHRcdGlmIChjaCA9PT0gXCJcXG5cIiB8fCBjaCA9PT0gXCJcdFwiIHx8IGNoID09PSBcIiBcIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIixcIikgcmV0dXJuO1xuXHRcdGlmIChjaCA9PT0gXCIpXCIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHsgdHlwZTogVG9rLlBhcmVuQ2xvc2UgfSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIitcIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHRcdFx0XHR2YWx1ZTogaWRlbnQoY2hhcnMpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi5cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi9cIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRsZXQgYWxwaGE7XG5cdFx0XHRpZiAoaXNfbnVtKGNoYXJzKSkge1xuXHRcdFx0XHRhbHBoYSA9IG51bShjaGFycyk7XG5cdFx0XHRcdGlmIChhbHBoYS50eXBlICE9PSBUb2suSHVlKSB7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogVG9rLkFscGhhLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFscGhhXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0aWYgKGlkZW50KGNoYXJzKSA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZvaWQgMFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICgvXFxkLy50ZXN0KGNoKSkge1xuXHRcdFx0X2ktLTtcblx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2goaWRlbnRsaWtlKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBwYXJzZUNvbG9yU3ludGF4KHRva2Vucykge1xuXHR0b2tlbnMuX2kgPSAwO1xuXHRsZXQgdG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAoIXRva2VuIHx8IHRva2VuLnR5cGUgIT09IFRvay5GdW5jdGlvbiB8fCB0b2tlbi52YWx1ZSAhPT0gXCJjb2xvclwiKSByZXR1cm47XG5cdHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKHRva2VuLnR5cGUgIT09IFRvay5JZGVudCkgcmV0dXJuO1xuXHRjb25zdCBtb2RlID0gY29sb3JQcm9maWxlc1t0b2tlbi52YWx1ZV07XG5cdGlmICghbW9kZSkgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGUgfTtcblx0Y29uc3QgY29vcmRzID0gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGZhbHNlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29uc3QgY2hhbm5lbHMgPSBnZXRNb2RlKG1vZGUpLmNoYW5uZWxzO1xuXHRmb3IgKGxldCBpaSA9IDAsIGMsIGNoOyBpaSA8IGNoYW5uZWxzLmxlbmd0aDsgaWkrKykge1xuXHRcdGMgPSBjb29yZHNbaWldO1xuXHRcdGNoID0gY2hhbm5lbHNbaWldO1xuXHRcdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0XHRyZXNbY2hdID0gYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgLyAxMDA7XG5cdFx0XHRpZiAoY2ggPT09IFwiYWxwaGFcIikgcmVzW2NoXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJlc1tjaF0pKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdGNvbnN0IGNvb3JkcyA9IFtdO1xuXHRsZXQgdG9rZW47XG5cdHdoaWxlICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suTm9uZSB8fCB0b2tlbi50eXBlID09PSBUb2suTnVtYmVyIHx8IHRva2VuLnR5cGUgPT09IFRvay5BbHBoYSB8fCB0b2tlbi50eXBlID09PSBUb2suUGVyY2VudGFnZSB8fCBpbmNsdWRlSHVlICYmIHRva2VuLnR5cGUgPT09IFRvay5IdWUpIHtcblx0XHRcdGNvb3Jkcy5wdXNoKHRva2VuKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rLlBhcmVuQ2xvc2UpIHtcblx0XHRcdGlmICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoIDwgMyB8fCBjb29yZHMubGVuZ3RoID4gNCkgcmV0dXJuO1xuXHRpZiAoY29vcmRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdGlmIChjb29yZHNbM10udHlwZSAhPT0gVG9rLkFscGhhKSByZXR1cm47XG5cdFx0Y29vcmRzWzNdID0gY29vcmRzWzNdLnZhbHVlO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSAzKSBjb29yZHMucHVzaCh7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9KTtcblx0cmV0dXJuIGNvb3Jkcy5ldmVyeSgoYykgPT4gYy50eXBlICE9PSBUb2suQWxwaGEpID8gY29vcmRzIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uKSByZXR1cm47XG5cdGxldCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgaW5jbHVkZUh1ZSk7XG5cdGlmICghY29vcmRzKSByZXR1cm47XG5cdGNvb3Jkcy51bnNoaWZ0KHRva2VuLnZhbHVlKTtcblx0cmV0dXJuIGNvb3Jkcztcbn1cbnZhciBwYXJzZSA9IChjb2xvcikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm47XG5cdGNvbnN0IHRva2VucyA9IHRva2VuaXplKGNvbG9yKTtcblx0Y29uc3QgcGFyc2VkID0gdG9rZW5zID8gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCB0cnVlKSA6IHZvaWQgMDtcblx0bGV0IHJlc3VsdCA9IHZvaWQgMDtcblx0bGV0IGkgPSAwO1xuXHRsZXQgbGVuID0gcGFyc2Vycy5sZW5ndGg7XG5cdHdoaWxlIChpIDwgbGVuKSBpZiAoKHJlc3VsdCA9IHBhcnNlcnNbaSsrXShjb2xvciwgcGFyc2VkKSkgIT09IHZvaWQgMCkgcmV0dXJuIHJlc3VsdDtcblx0cmV0dXJuIHRva2VucyA/IHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSA6IHZvaWQgMDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYi5qc1xuZnVuY3Rpb24gcGFyc2VSZ2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwicmdiXCIgJiYgcGFyc2VkWzBdICE9PSBcInJnYmFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0Y29uc3QgWywgciwgZywgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoci50eXBlID09PSBUb2suSHVlIHx8IGcudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKHIudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5yID0gci50eXBlID09PSBUb2suTnVtYmVyID8gci52YWx1ZSAvIDI1NSA6IHIudmFsdWUgLyAxMDA7XG5cdGlmIChnLnR5cGUgIT09IFRvay5Ob25lKSByZXMuZyA9IGcudHlwZSA9PT0gVG9rLk51bWJlciA/IGcudmFsdWUgLyAyNTUgOiBnLnZhbHVlIC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIC8gMjU1IDogYi52YWx1ZSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VUcmFuc3BhcmVudC5qc1xudmFyIHBhcnNlVHJhbnNwYXJlbnQgPSAoYykgPT4gYyA9PT0gXCJ0cmFuc3BhcmVudFwiID8ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiAwLFxuXHRnOiAwLFxuXHRiOiAwLFxuXHRhbHBoYTogMFxufSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaW50ZXJwb2xhdGUvbGVycC5qc1xudmFyIGxlcnAgPSAoYSwgYiwgdCkgPT4gYSArIHQgKiAoYiAtIGEpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9waWVjZXdpc2UuanNcbnZhciBnZXRfY2xhc3NlcyA9IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0bGV0IGEgPSBhcnJbaV07XG5cdFx0bGV0IGIgPSBhcnJbaSArIDFdO1xuXHRcdGlmIChhID09PSB2b2lkIDAgJiYgYiA9PT0gdm9pZCAwKSBjbGFzc2VzLnB1c2godm9pZCAwKTtcblx0XHRlbHNlIGlmIChhICE9PSB2b2lkIDAgJiYgYiAhPT0gdm9pZCAwKSBjbGFzc2VzLnB1c2goW2EsIGJdKTtcblx0XHRlbHNlIGNsYXNzZXMucHVzaChhICE9PSB2b2lkIDAgPyBbYSwgYV0gOiBbYiwgYl0pO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcbnZhciBpbnRlcnBvbGF0b3JQaWVjZXdpc2UgPSAoaW50ZXJwb2xhdG9yKSA9PiAoYXJyKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gZ2V0X2NsYXNzZXMoYXJyKTtcblx0cmV0dXJuICh0KSA9PiB7XG5cdFx0bGV0IGNscyA9IHQgKiBjbGFzc2VzLmxlbmd0aDtcblx0XHRsZXQgaWR4ID0gdCA+PSAxID8gY2xhc3Nlcy5sZW5ndGggLSAxIDogTWF0aC5tYXgoTWF0aC5mbG9vcihjbHMpLCAwKTtcblx0XHRsZXQgcGFpciA9IGNsYXNzZXNbaWR4XTtcblx0XHRyZXR1cm4gcGFpciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJwb2xhdG9yKHBhaXJbMF0sIHBhaXJbMV0sIGNscyAtIGlkeCk7XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9saW5lYXIuanNcbnZhciBpbnRlcnBvbGF0b3JMaW5lYXIgPSBpbnRlcnBvbGF0b3JQaWVjZXdpc2UobGVycCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2FscGhhLmpzXG52YXIgZml4dXBBbHBoYSA9IChhcnIpID0+IHtcblx0bGV0IHNvbWVfZGVmaW5lZCA9IGZhbHNlO1xuXHRsZXQgcmVzID0gYXJyLm1hcCgodikgPT4ge1xuXHRcdGlmICh2ICE9PSB2b2lkIDApIHtcblx0XHRcdHNvbWVfZGVmaW5lZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9XG5cdFx0cmV0dXJuIDE7XG5cdH0pO1xuXHRyZXR1cm4gc29tZV9kZWZpbmVkID8gcmVzIDogYXJyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI3ID0ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiclwiLFxuXHRcdFwiZ1wiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1xuXHRcdHBhcnNlUmdiLFxuXHRcdHBhcnNlSGV4LFxuXHRcdHBhcnNlUmdiTGVnYWN5LFxuXHRcdHBhcnNlTmFtZWQsXG5cdFx0cGFyc2VUcmFuc3BhcmVudCxcblx0XHRcInNyZ2JcIlxuXHRdLFxuXHRzZXJpYWxpemU6IFwic3JnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRnOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRnYW11dDogdHJ1ZSxcblx0d2hpdGU6IHtcblx0XHRyOiAxLFxuXHRcdGc6IDEsXG5cdFx0YjogMVxuXHR9LFxuXHRibGFjazoge1xuXHRcdHI6IDAsXG5cdFx0ZzogMCxcblx0XHRiOiAwXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0QTk4VG9YeXo2NS5qc1xudmFyIGxpbmVhcml6ZSQyID0gKHYgPSAwKSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgNTYzIC8gMjU2KSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0QTk4VG9YeXo2NSA9IChhOTgpID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUkMihhOTgucik7XG5cdGxldCBnID0gbGluZWFyaXplJDIoYTk4LmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQyKGE5OC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjU3NjY2OTA0MjkxMDEzMDUgKiByICsgLjE4NTU1ODIzNzkwNjU0NjMgKiBnICsgLjE4ODIyODY0NjIzNDk5NDcgKiBiLFxuXHRcdHk6IC4yOTczNDQ5NzUyNTA1MzYgKiByICsgLjYyNzM2MzU2NjI1NTQ2NjEgKiBnICsgLjA3NTI5MTQ1ODQ5Mzk5NzkgKiBiLFxuXHRcdHo6IC4wMjcwMzEzNjEzODY0MTIzICogciArIC4wNzA2ODg4NTI1MzU4MjcyICogZyArIC45OTEzMzc1MzY4Mzc2Mzg2ICogYlxuXHR9O1xuXHRpZiAoYTk4LmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGE5OC5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0WHl6NjVUb0E5OC5qc1xudmFyIGdhbW1hJDIgPSAodikgPT4gTWF0aC5wb3coTWF0aC5hYnModiksIDI1NiAvIDU2MykgKiBNYXRoLnNpZ24odik7XG52YXIgY29udmVydFh5ejY1VG9BOTggPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJhOThcIixcblx0XHRyOiBnYW1tYSQyKHggKiAyLjA0MTU4NzkwMzgxMDc0NjUgLSB5ICogLjU2NTAwNjk3NDI3ODg1OTcgLSAuMzQ0NzMxMzUwNzc4MzI5NyAqIHopLFxuXHRcdGc6IGdhbW1hJDIoeCAqIC0uOTY5MjQzNjM2MjgwODc5OCArIHkgKiAxLjg3NTk2NzUwMTUwNzcyMDYgKyAuMDQxNTU1MDU3NDA3MTc1NiAqIHopLFxuXHRcdGI6IGdhbW1hJDIoeCAqIC4wMTM0NDQyODA2MzIwMzEyIC0geSAqIC4xMTgzNjIzOTIyMzEwMTg0ICsgMS4wMTUxNzQ5OTQzOTEyMDU4ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0UmdiVG9McmdiLmpzXG52YXIgZm4kMyA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA8PSAuMDQwNDUpIHJldHVybiBjIC8gMTIuOTI7XG5cdHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogTWF0aC5wb3coKGFicyArIC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59O1xudmFyIGNvbnZlcnRSZ2JUb0xyZ2IgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogZm4kMyhyKSxcblx0XHRnOiBmbiQzKGcpLFxuXHRcdGI6IGZuJDMoYilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFJnYlRvWHl6NjUuanNcbnZhciBjb252ZXJ0UmdiVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQxMjM5MDc5OTI2NTk1OTMgKiByICsgLjM1NzU4NDMzOTM4Mzg3OCAqIGcgKyAuMTgwNDgwNzg4NDAxODM0MyAqIGIsXG5cdFx0eTogLjIxMjYzOTAwNTg3MTUxMDIgKiByICsgLjcxNTE2ODY3ODc2Nzc1NiAqIGcgKyAuMDcyMTkyMzE1MzYwNzMzNyAqIGIsXG5cdFx0ejogLjAxOTMzMDgxODcxNTU5MTggKiByICsgLjExOTE5NDc3OTc5NDYyNiAqIGcgKyAuOTUwNTMyMTUyMjQ5NjYwNyAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0THJnYlRvUmdiLmpzXG52YXIgZm4kMiA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA+IC4wMDMxMzA4KSByZXR1cm4gKE1hdGguc2lnbihjKSB8fCAxKSAqICgxLjA1NSAqIE1hdGgucG93KGFicywgMSAvIDIuNCkgLSAuMDU1KTtcblx0cmV0dXJuIGMgKiAxMi45Mjtcbn07XG52YXIgY29udmVydExyZ2JUb1JnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0sIG1vZGUgPSBcInJnYlwiKSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRyOiBmbiQyKHIpLFxuXHRcdGc6IGZuJDIoZyksXG5cdFx0YjogZm4kMihiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo2NVRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMjQwOTY5OTQxOTA0NTIyNiAtIHkgKiAxLjUzNzM4MzE3NzU3MDA5NCAtIC40OTg2MTA3NjAyOTMwMDM0ICogeixcblx0XHRnOiB4ICogLS45NjkyNDM2MzYyODA4Nzk2ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNCArIC4wNDE1NTUwNTc0MDcxNzU2ICogeixcblx0XHRiOiB4ICogLjA1NTYzMDA3OTY5Njk5MzYgLSB5ICogLjIwMzk3Njk1ODg4ODk3NjUgKyAxLjA1Njk3MTUxNDI0Mjg3ODQgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hOTgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjYgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwiYTk4XCIsXG5cdHBhcnNlOiBbXCJhOTgtcmdiXCJdLFxuXHRzZXJpYWxpemU6IFwiYTk4LXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb0E5OChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0E5OFxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEE5OFRvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydEE5OFRvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9ub3JtYWxpemVIdWUuanNcbnZhciBub3JtYWxpemVIdWUgPSAoaHVlKSA9PiAoaHVlID0gaHVlICUgMzYwKSA8IDAgPyBodWUgKyAzNjAgOiBodWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2h1ZS5qc1xudmFyIGh1ZSA9IChodWVzLCBmbikgPT4ge1xuXHRyZXR1cm4gaHVlcy5tYXAoKGh1ZSwgaWR4LCBhcnIpID0+IHtcblx0XHRpZiAoaHVlID09PSB2b2lkIDApIHJldHVybiBodWU7XG5cdFx0bGV0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIdWUoaHVlKTtcblx0XHRpZiAoaWR4ID09PSAwIHx8IGh1ZXNbaWR4IC0gMV0gPT09IHZvaWQgMCkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdFx0cmV0dXJuIGZuKG5vcm1hbGl6ZWQgLSBub3JtYWxpemVIdWUoYXJyW2lkeCAtIDFdKSk7XG5cdH0pLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG5cdFx0aWYgKCFhY2MubGVuZ3RoIHx8IGN1cnIgPT09IHZvaWQgMCB8fCBhY2NbYWNjLmxlbmd0aCAtIDFdID09PSB2b2lkIDApIHtcblx0XHRcdGFjYy5wdXNoKGN1cnIpO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9XG5cdFx0YWNjLnB1c2goY3VyciArIGFjY1thY2MubGVuZ3RoIC0gMV0pO1xuXHRcdHJldHVybiBhY2M7XG5cdH0sIFtdKTtcbn07XG52YXIgZml4dXBIdWVTaG9ydGVyID0gKGFycikgPT4gaHVlKGFyciwgKGQpID0+IE1hdGguYWJzKGQpIDw9IDE4MCA/IGQgOiBkIC0gMzYwICogTWF0aC5zaWduKGQpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnN0YW50cy5qc1xudmFyIE0gPSBbXG5cdC0uMTQ4NjEsXG5cdDEuNzgyNzcsXG5cdC0uMjkyMjcsXG5cdC0uOTA2NDksXG5cdDEuOTcyOTQsXG5cdDBcbl07XG52YXIgZGVnVG9SYWQgPSBNYXRoLlBJIC8gMTgwO1xudmFyIHJhZFRvRGVnID0gMTgwIC8gTWF0aC5QSTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRSZ2JUb0N1YmVoZWxpeC5qc1xudmFyIERFID0gTVszXSAqIE1bNF07XG52YXIgQkUgPSBNWzFdICogTVs0XTtcbnZhciBCQ0FEID0gTVsxXSAqIE1bMl0gLSBNWzBdICogTVszXTtcbnZhciBjb252ZXJ0UmdiVG9DdWJlaGVsaXggPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBsID0gKEJDQUQgKiBiICsgciAqIERFIC0gZyAqIEJFKSAvIChCQ0FEICsgREUgLSBCRSk7XG5cdGxldCB4ID0gYiAtIGw7XG5cdGxldCB5ID0gKE1bNF0gKiAoZyAtIGwpIC0gTVsyXSAqIHgpIC8gTVszXTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRcdGwsXG5cdFx0czogbCA9PT0gMCB8fCBsID09PSAxID8gdm9pZCAwIDogTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpIC8gKE1bNF0gKiBsICogKDEgLSBsKSlcblx0fTtcblx0aWYgKHJlcy5zKSByZXMuaCA9IE1hdGguYXRhbjIoeSwgeCkgKiByYWRUb0RlZyAtIDEyMDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRDdWJlaGVsaXhUb1JnYi5qc1xudmFyIGNvbnZlcnRDdWJlaGVsaXhUb1JnYiA9ICh7IGgsIHMsIGwsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRoID0gKGggPT09IHZvaWQgMCA/IDAgOiBoICsgMTIwKSAqIGRlZ1RvUmFkO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IGFtcCA9IHMgPT09IHZvaWQgMCA/IDAgOiBzICogbCAqICgxIC0gbCk7XG5cdGxldCBjb3NoID0gTWF0aC5jb3MoaCk7XG5cdGxldCBzaW5oID0gTWF0aC5zaW4oaCk7XG5cdHJlcy5yID0gbCArIGFtcCAqIChNWzBdICogY29zaCArIE1bMV0gKiBzaW5oKTtcblx0cmVzLmcgPSBsICsgYW1wICogKE1bMl0gKiBjb3NoICsgTVszXSAqIHNpbmgpO1xuXHRyZXMuYiA9IGwgKyBhbXAgKiAoTVs0XSAqIGNvc2ggKyBNWzVdICogc2luaCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RpZmZlcmVuY2UuanNcbnZhciBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQucyB8fCAhc21wLnMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5zICogc21wLnMpICogZEg7XG59O1xudmFyIGRpZmZlcmVuY2VIdWVOYWl2ZSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwKSByZXR1cm4gMDtcblx0bGV0IHN0ZF9oID0gbm9ybWFsaXplSHVlKHN0ZC5oKTtcblx0bGV0IHNtcF9oID0gbm9ybWFsaXplSHVlKHNtcC5oKTtcblx0aWYgKE1hdGguYWJzKHNtcF9oIC0gc3RkX2gpID4gMTgwKSByZXR1cm4gc3RkX2ggLSAoc21wX2ggLSAzNjAgKiBNYXRoLnNpZ24oc21wX2ggLSBzdGRfaCkpO1xuXHRyZXR1cm4gc21wX2ggLSBzdGRfaDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZUNocm9tYSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQuYyB8fCAhc21wLmMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5jICogc21wLmMpICogZEg7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hdmVyYWdlLmpzXG52YXIgYXZlcmFnZUFuZ2xlID0gKHZhbCkgPT4ge1xuXHRsZXQgc3VtID0gdmFsLnJlZHVjZSgoc3VtLCB2YWwpID0+IHtcblx0XHRpZiAodmFsICE9PSB2b2lkIDApIHtcblx0XHRcdGxldCByYWQgPSB2YWwgKiBNYXRoLlBJIC8gMTgwO1xuXHRcdFx0c3VtLnNpbiArPSBNYXRoLnNpbihyYWQpO1xuXHRcdFx0c3VtLmNvcyArPSBNYXRoLmNvcyhyYWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VtO1xuXHR9LCB7XG5cdFx0c2luOiAwLFxuXHRcdGNvczogMFxuXHR9KTtcblx0bGV0IGFuZ2xlID0gTWF0aC5hdGFuMihzdW0uc2luLCBzdW0uY29zKSAqIDE4MCAvIE1hdGguUEk7XG5cdHJldHVybiBhbmdsZSA8IDAgPyAzNjAgKyBhbmdsZSA6IGFuZ2xlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI1ID0ge1xuXHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1jdWJlaGVsaXhcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWN1YmVoZWxpeFwiLFxuXHRyYW5nZXM6IHtcblx0XHRoOiBbMCwgMzYwXSxcblx0XHRzOiBbMCwgNC42MTRdLFxuXHRcdGw6IFswLCAxXVxuXHR9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCB9LFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0Q3ViZWhlbGl4VG9SZ2IgfSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMYWJUb0xjaC5qc1xudmFyIGNvbnZlcnRMYWJUb0xjaCA9ICh7IGwsIGEsIGIsIGFscGhhIH0sIG1vZGUgPSBcImxjaFwiKSA9PiB7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMY2hUb0xhYi5qc1xudmFyIGNvbnZlcnRMY2hUb0xhYiA9ICh7IGwsIGMsIGgsIGFscGhhIH0sIG1vZGUgPSBcImxhYlwiKSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGUsXG5cdFx0bCxcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnN0YW50cy5qc1xudmFyIGskMiA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMiA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb25zdGFudHMuanNcbnZhciBENTAgPSB7XG5cdFg6IC4zNDU3IC8gLjM1ODUsXG5cdFk6IDEsXG5cdFo6IC4yOTU4IC8gLjM1ODVcbn07XG52YXIgRDY1ID0ge1xuXHRYOiAuMzEyNyAvIC4zMjksXG5cdFk6IDEsXG5cdFo6IC4zNTgzIC8gLjMyOVxufTtcbnZhciBrJDEgPSBNYXRoLnBvdygyOSwgMykgLyBNYXRoLnBvdygzLCAzKTtcbnZhciBlJDEgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9YeXo2NS5qc1xudmFyIGZuJDEgPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlJDIgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gayQyO1xudmFyIGNvbnZlcnRMYWI2NVRvWHl6NjUgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogZm4kMShmeCkgKiBENjUuWCxcblx0XHR5OiBmbiQxKGZ5KSAqIEQ2NS5ZLFxuXHRcdHo6IGZuJDEoZnopICogRDY1Llpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9SZ2IuanNcbnZhciBjb252ZXJ0TGFiNjVUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRMYWI2NVRvWHl6NjUobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2NvbnZlcnRYeXo2NVRvTGFiNjUuanNcbnZhciBmJDEgPSAodmFsdWUpID0+IHZhbHVlID4gZSQyID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrJDIgKiB2YWx1ZSArIDE2KSAvIDExNjtcbnZhciBjb252ZXJ0WHl6NjVUb0xhYjY1ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmJDEoeCAvIEQ2NS5YKTtcblx0bGV0IGYxID0gZiQxKHkgLyBENjUuWSk7XG5cdGxldCBmMiA9IGYkMSh6IC8gRDY1LlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiNjVcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFJnYlRvTGFiNjUuanNcbnZhciBjb252ZXJ0UmdiVG9MYWI2NSA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo2NVRvTGFiNjUoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29uc3RhbnRzLmpzXG52YXIgzrggPSAyNiAvIDE4MCAqIE1hdGguUEk7XG52YXIgY29zzrggPSBNYXRoLmNvcyjOuCk7XG52YXIgc2luzrggPSBNYXRoLnNpbijOuCk7XG52YXIgZmFjdG9yID0gMTAwIC8gTWF0aC5sb2coMTM5IC8gMTAwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0RGxjaFRvTGFiNjUuanNcbnZhciBjb252ZXJ0RGxjaFRvTGFiNjUgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYyA9PT0gdm9pZCAwKSBjID0gMDtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IChNYXRoLmV4cChsICogMSAvIGZhY3RvcikgLSAxKSAvIC4wMDM5XG5cdH07XG5cdGxldCBHID0gKE1hdGguZXhwKC4wNDM1ICogYyAqIDEgKiAxKSAtIDEpIC8gLjA3NTtcblx0bGV0IGUgPSBHICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdGxldCBmID0gRyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJIC0gzrgpO1xuXHRyZXMuYSA9IGUgKiBjb3POuCAtIGYgLyAuODMgKiBzaW7OuDtcblx0cmVzLmIgPSBlICogc2luzrggKyBmIC8gLjgzICogY29zzrg7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29udmVydExhYjY1VG9EbGNoLmpzXG52YXIgY29udmVydExhYjY1VG9EbGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgZSA9IGEgKiBjb3POuCArIGIgKiBzaW7OuDtcblx0bGV0IGYgPSAuODMgKiAoYiAqIGNvc864IC0gYSAqIHNpbs64KTtcblx0bGV0IEcgPSBNYXRoLnNxcnQoZSAqIGUgKyBmICogZik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJkbGNoXCIsXG5cdFx0bDogZmFjdG9yIC8gMSAqIE1hdGgubG9nKDEgKyAuMDAzOSAqIGwpLFxuXHRcdGM6IE1hdGgubG9nKDEgKyAuMDc1ICogRykgLyAoLjA0MzUgKiAxICogMSlcblx0fTtcblx0aWYgKHJlcy5jKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZSgoTWF0aC5hdGFuMihmLCBlKSArIM64KSAvIE1hdGguUEkgKiAxODApO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGFiL2RlZmluaXRpb24uanNcbnZhciBjb252ZXJ0RGxhYlRvTGFiNjUgPSAoYykgPT4gY29udmVydERsY2hUb0xhYjY1KGNvbnZlcnRMYWJUb0xjaChjLCBcImRsY2hcIikpO1xudmFyIGNvbnZlcnRMYWI2NVRvRGxhYiA9IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoY29udmVydExhYjY1VG9EbGNoKGMpLCBcImRsYWJcIik7XG52YXIgZGVmaW5pdGlvbiQyNCA9IHtcblx0bW9kZTogXCJkbGFiXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sYWJcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGFiVG9MYWI2NSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxhYlRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsYWIoY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstNDAuMDksIDQ1LjUwMV0sXG5cdFx0YjogWy00MC40NjksIDQ0LjM0NF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMyA9IHtcblx0bW9kZTogXCJkbGNoXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sY2hcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGNoVG9MYWI2NSxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwiZGxhYlwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxjaFRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxjaCxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsY2goY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGM6IFswLCA1MS40ODRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2NvbnZlcnRIc2lUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzaVRvUmdiKHsgaCwgcywgaSwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRnOiBpICogKDEgLSBzKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0YjogaSAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydFJnYlRvSHNpLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic2koeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzaVwiLFxuXHRcdHM6IHIgKyBnICsgYiA9PT0gMCA/IDAgOiAxIC0gMyAqIG0gLyAociArIGcgKyBiKSxcblx0XHRpOiAociArIGcgKyBiKSAvIDNcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIyID0ge1xuXHRtb2RlOiBcImhzaVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHNpVG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHNpXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc2lcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic2kgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcImlcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvY29udmVydEhzbFRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNsVG9SZ2IoeyBoLCBzLCBsLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGxldCBtMSA9IGwgKyBzICogKGwgPCAuNSA/IGwgOiAxIC0gbCk7XG5cdGxldCBtMiA9IG0xIC0gKG0xIC0gbCkgKiAyICogTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IG0yLFxuXHRcdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGc6IG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogMiAqIGwgLSBtMSxcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0xLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0UmdiVG9Ic2wuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzbCh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNsXCIsXG5cdFx0czogTSA9PT0gbSA/IDAgOiAoTSAtIG0pIC8gKDEgLSBNYXRoLmFicyhNICsgbSAtIDEpKSxcblx0XHRsOiAuNSAqIChNICsgbSlcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9odWUuanNcbnZhciBodWVUb0RlZyA9ICh2YWwsIHVuaXQpID0+IHtcblx0c3dpdGNoICh1bml0KSB7XG5cdFx0Y2FzZSBcImRlZ1wiOiByZXR1cm4gK3ZhbDtcblx0XHRjYXNlIFwicmFkXCI6IHJldHVybiB2YWwgLyBNYXRoLlBJICogMTgwO1xuXHRcdGNhc2UgXCJncmFkXCI6IHJldHVybiB2YWwgLyAxMCAqIDk7XG5cdFx0Y2FzZSBcInR1cm5cIjogcmV0dXJuIHZhbCAqIDM2MDtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsTGVnYWN5LmpzXG52YXIgaHNsX29sZCA9IG5ldyBSZWdFeHAoYF5oc2xhP1xcXFwoXFxcXHMqJHtodWUkMX0ke2N9JHtwZXJ9JHtjfSR7cGVyfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciBwYXJzZUhzbExlZ2FjeSA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2ggPSBjb2xvci5tYXRjaChoc2xfb2xkKTtcblx0aWYgKCFtYXRjaCkgcmV0dXJuO1xuXHRsZXQgcmVzID0geyBtb2RlOiBcImhzbFwiIH07XG5cdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuaCA9ICttYXRjaFszXTtcblx0ZWxzZSBpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCAmJiBtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuaCA9IGh1ZVRvRGVnKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMucyA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzRdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzVdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs2XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs2XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs3XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbN10pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9wYXJzZUhzbC5qc1xuZnVuY3Rpb24gcGFyc2VIc2woY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHNsXCIgJiYgcGFyc2VkWzBdICE9PSBcImhzbGFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0Y29uc3QgWywgaCwgcywgbCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChzLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKHMudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5zID0gcy52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IGwudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjEgPSB7XG5cdG1vZGU6IFwiaHNsXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2xUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzbCB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdHBhcnNlOiBbcGFyc2VIc2wsIHBhcnNlSHNsTGVnYWN5XSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGhzbCgke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy5zICE9PSB2b2lkIDAgPyBjLnMgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MubCAhPT0gdm9pZCAwID8gYy5sICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2NvbnZlcnRIc3ZUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzdlRvUmdiKHsgaCwgcywgdiwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0Zzogdixcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzICogZiksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiB2ICogKDEgLSBzKSxcblx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0YjogdiAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydFJnYlRvSHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic3YoeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzdlwiLFxuXHRcdHM6IE0gPT09IDAgPyAwIDogMSAtIG0gLyBNLFxuXHRcdHY6IE1cblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIwID0ge1xuXHRtb2RlOiBcImhzdlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHN2VG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc3ZcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic3YgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydEh3YlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHdiVG9SZ2IoeyBoLCB3LCBiLCBhbHBoYSB9KSB7XG5cdGlmICh3ID09PSB2b2lkIDApIHcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0aWYgKHcgKyBiID4gMSkge1xuXHRcdGxldCBzID0gdyArIGI7XG5cdFx0dyAvPSBzO1xuXHRcdGIgLz0gcztcblx0fVxuXHRyZXR1cm4gY29udmVydEhzdlRvUmdiKHtcblx0XHRoLFxuXHRcdHM6IGIgPT09IDEgPyAxIDogMSAtIHcgLyAoMSAtIGIpLFxuXHRcdHY6IDEgLSBiLFxuXHRcdGFscGhhXG5cdH0pO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydFJnYlRvSHdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Id2IocmdiYSkge1xuXHRsZXQgaHN2ID0gY29udmVydFJnYlRvSHN2KHJnYmEpO1xuXHRpZiAoaHN2ID09PSB2b2lkIDApIHJldHVybiB2b2lkIDA7XG5cdGxldCBzID0gaHN2LnMgIT09IHZvaWQgMCA/IGhzdi5zIDogMDtcblx0bGV0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHdiXCIsXG5cdFx0dzogKDEgLSBzKSAqIHYsXG5cdFx0YjogMSAtIHZcblx0fTtcblx0aWYgKGhzdi5oICE9PSB2b2lkIDApIHJlcy5oID0gaHN2Lmg7XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gaHN2LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvcGFyc2VId2IuanNcbmZ1bmN0aW9uIFBhcnNlSHdiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImh3YlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJod2JcIiB9O1xuXHRjb25zdCBbLCBoLCB3LCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHcudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAody50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLncgPSB3LnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5iID0gYi52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOSA9IHtcblx0bW9kZTogXCJod2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEh3YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHdiIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJ3XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtQYXJzZUh3Yl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBod2IoJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSAke2MudyAhPT0gdm9pZCAwID8gYy53ICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHR3OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVOYWl2ZSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oZHIvdHJhbnNmZXIuanNcbnZhciBNMSA9IC4xNTkzMDE3NTc4MTI1O1xudmFyIE0yID0gNzguODQzNzU7XG52YXIgQzEgPSAuODM1OTM3NTtcbnZhciBDMiA9IDE4Ljg1MTU2MjU7XG52YXIgQzMgPSAxOC42ODc1O1xuZnVuY3Rpb24gdHJhbnNmZXJQcURlY29kZSh2KSB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGNvbnN0IGMgPSBNYXRoLnBvdyh2LCAxIC8gTTIpO1xuXHRyZXR1cm4gMWU0ICogTWF0aC5wb3coTWF0aC5tYXgoMCwgYyAtIEMxKSAvIChDMiAtIEMzICogYyksIDEgLyBNMSk7XG59XG5mdW5jdGlvbiB0cmFuc2ZlclBxRW5jb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogYykgLyAoMSArIEMzICogYyksIE0yKTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRJdHBUb1h5ejY1LmpzXG52YXIgdG9SZWwgPSAoYykgPT4gTWF0aC5tYXgoYyAvIDIwMywgMCk7XG52YXIgY29udmVydEl0cFRvWHl6NjUgPSAoeyBpLCB0LCBwLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAodCA9PT0gdm9pZCAwKSB0ID0gMDtcblx0aWYgKHAgPT09IHZvaWQgMCkgcCA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuMDA4NjA5MDM3MDM3OTMyNzYxICogdCArIC4xMTEwMjk2MjUwMDMwMjU5MyAqIHApO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcURlY29kZShpIC0gLjAwODYwOTAzNzAzNzkzMjc1ICogdCAtIC4xMTEwMjk2MjUwMDMwMjU5OSAqIHApO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcURlY29kZShpICsgLjU2MDAzMTMzNTcxMDY3OTEgKiB0IC0gLjMyMDYyNzE3NDk4NzMxODg1ICogcCk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogdG9SZWwoMi4wNzAxNTIyMTgzODk0MjIgKiBsIC0gMS4zMjYzNDczMzg5NjcxNTU2ICogbSArIC4yMDY2NTEwNDc2Mjk0MDUxICogcyksXG5cdFx0eTogdG9SZWwoLjM2NDczODUyMDk3NDgwNzQgKiBsICsgLjY4MDU2NjAyNDk0NzIyNyAqIG0gLSAuMDQ1MzA0NTQ1OTIyMDM0NiAqIHMpLFxuXHRcdHo6IHRvUmVsKC0uMDQ5NzQ3MjA3NTM1ODEyICogbCAtIC4wNDkyNjA5NjY2OTY2MTM4ICogbSArIDEuMTg4MDY1OTI0OTkyMzA0MiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9jb252ZXJ0WHl6NjVUb0l0cC5qc1xudmFyIHRvQWJzID0gKGMgPSAwKSA9PiBNYXRoLm1heChjICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0l0cCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0Y29uc3QgYWJzWCA9IHRvQWJzKHgpO1xuXHRjb25zdCBhYnNZID0gdG9BYnMoeSk7XG5cdGNvbnN0IGFic1ogPSB0b0Ficyh6KTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFFbmNvZGUoLjM1OTI4MzI1OTAxMjEyMTcgKiBhYnNYICsgLjY5NzYwNTExNDc3Nzk1MDIgKiBhYnNZIC0gLjAzNTg5MTU5MzIzMjAyODkgKiBhYnNaKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyUHFFbmNvZGUoLS4xOTIwODA4NDYzNzA0OTk1ICogYWJzWCArIDEuMTAwNDc2Nzk3MDM3NDMyMyAqIGFic1kgKyAuMDc1Mzc0ODY1ODUxOTExOCAqIGFic1opO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcUVuY29kZSguMDA3MDc5Nzg0NDYwNzQ3NyAqIGFic1ggKyAuMDc0ODM5NjY2MjE4NjM2NiAqIGFic1kgKyAuODQzMzI2NTQ1Mzg5ODc2NSAqIGFic1opO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJpdHBcIixcblx0XHRpOiAuNSAqIGwgKyAuNSAqIG0sXG5cdFx0dDogMS42MTM3Njk1MzEyNSAqIGwgLSAzLjMyMzQ4NjMyODEyNSAqIG0gKyAxLjcwOTcxNjc5Njg3NSAqIHMsXG5cdFx0cDogNC4zNzgxNzM4MjgxMjUgKiBsIC0gNC4yNDU2MDU0Njg3NSAqIG0gLSAuMTMyNTY4MzU5Mzc1ICogc1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTggPSB7XG5cdG1vZGU6IFwiaXRwXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJpXCIsXG5cdFx0XCJ0XCIsXG5cdFx0XCJwXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWljdGNwXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1pY3RjcFwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydEl0cFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRJdHBUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9JdHAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvSXRwKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0aTogWzAsIC41ODFdLFxuXHRcdHQ6IFstLjM2OSwgLjI3Ml0sXG5cdFx0cDogWy0uMTY0LCAuMzMxXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR0OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0cDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFh5ejY1VG9KYWIuanNcbnZhciBwJDEgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAkMSA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcUVuY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2biA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogdm4pIC8gKDEgKyBDMyAqIHZuKSwgcCQxKTtcbn07XG52YXIgYWJzID0gKHYgPSAwKSA9PiBNYXRoLm1heCh2ICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0phYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0eCA9IGFicyh4KTtcblx0eSA9IGFicyh5KTtcblx0eiA9IGFicyh6KTtcblx0bGV0IHhwID0gMS4xNSAqIHggLSAuMTUgKiB6O1xuXHRsZXQgeXAgPSAuNjYgKiB5ICsgLjM0ICogeDtcblx0bGV0IGwgPSBqYWJQcUVuY29kZSguNDE0Nzg5NzIgKiB4cCArIC41Nzk5OTkgKiB5cCArIC4wMTQ2NDggKiB6KTtcblx0bGV0IG0gPSBqYWJQcUVuY29kZSgtLjIwMTUxICogeHAgKyAxLjEyMDY0OSAqIHlwICsgLjA1MzEwMDggKiB6KTtcblx0bGV0IHMgPSBqYWJQcUVuY29kZSgtLjAxNjYwMDggKiB4cCArIC4yNjQ4ICogeXAgKyAuNjY4NDc5OSAqIHopO1xuXHRsZXQgaSA9IChsICsgbSkgLyAyO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0ajogLjQ0ICogaSAvICgxIC0gLjU2ICogaSkgLSBkMCQxLFxuXHRcdGE6IDMuNTI0ICogbCAtIDQuMDY2NzA4ICogbSArIC41NDI3MDggKiBzLFxuXHRcdGI6IC4xOTkwNzYgKiBsICsgMS4wOTY3OTkgKiBtIC0gMS4yOTU4NzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9YeXo2NS5qc1xudmFyIHAgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAgPSAxNjI5NTQ5OTUzMjgyMTU2NWUtMjc7XG52YXIgamFiUHFEZWNvZGUgPSAodikgPT4ge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRsZXQgdnAgPSBNYXRoLnBvdyh2LCAxIC8gcCk7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdygoQzEgLSB2cCkgLyAoQzMgKiB2cCAtIEMyKSwgMSAvIE0xKTtcbn07XG52YXIgcmVsID0gKHYpID0+IHYgLyAyMDM7XG52YXIgY29udmVydEphYlRvWHl6NjUgPSAoeyBqLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChqID09PSB2b2lkIDApIGogPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBpID0gKGogKyBkMCkgLyAoLjQ0ICsgLjU2ICogKGogKyBkMCkpO1xuXHRsZXQgbCA9IGphYlBxRGVjb2RlKGkgKyAuMTM4NjA1MDQgKiBhICsgLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgbSA9IGphYlBxRGVjb2RlKGkgLSAuMTM4NjA1MDQgKiBhIC0gLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgcyA9IGphYlBxRGVjb2RlKGkgLSAuMDk2MDE5MjQyICogYSAtIC44MTE4OTE5ICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IHJlbCgxLjY2MTM3MzAyNDY1MjE3NCAqIGwgLSAuOTE0NTIzMDgxMzA0MzQ4ICogbSArIC4yMzEzNjIwODE3MzkxMzA0NSAqIHMpLFxuXHRcdHk6IHJlbCgtLjMyNTA3NTg2MTE4NDQ1MzMgKiBsICsgMS41NzE4NDcwMjY3MzI1NDMgKiBtIC0gLjIxODI1MzgzNDUzMjI3OTI4ICogcyksXG5cdFx0ejogcmVsKC0uMDkwOTgyODExICogbCAtIC4zMTI3MjgyOSAqIG0gKyAxLjUyMjc2NjYgKiBzKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFJnYlRvSmFiLmpzXG52YXIgY29udmVydFJnYlRvSmFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9KYWIoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9SZ2IuanNcbnZhciBjb252ZXJ0SmFiVG9SZ2IgPSAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRKYWJUb1h5ejY1KGNvbG9yKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNyA9IHtcblx0bW9kZTogXCJqYWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tanphemJ6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemF6YnpcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0phYixcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9KYWJcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0SmFiVG9SZ2IsXG5cdFx0eHl6NjU6IGNvbnZlcnRKYWJUb1h5ejY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGo6IFswLCAuMjIyXSxcblx0XHRhOiBbLS4xMDksIC4xMjldLFxuXHRcdGI6IFstLjE4NSwgLjEzNF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamNoL2NvbnZlcnRKYWJUb0pjaC5qc1xudmFyIGNvbnZlcnRKYWJUb0pjaCA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImpjaFwiLFxuXHRcdGosXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEpjaFRvSmFiLmpzXG52YXIgY29udmVydEpjaFRvSmFiID0gKHsgaiwgYywgaCwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImphYlwiLFxuXHRcdGosXG5cdFx0YTogYyA/IGMgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSkgOiAwLFxuXHRcdGI6IGMgPyBjICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpIDogMFxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTYgPSB7XG5cdG1vZGU6IFwiamNoXCIsXG5cdHBhcnNlOiBbXCItLWp6Y3poelwiXSxcblx0c2VyaWFsaXplOiBcIi0tanpjemh6XCIsXG5cdHRvTW9kZToge1xuXHRcdGphYjogY29udmVydEpjaFRvSmFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRKYWJUb1JnYihjb252ZXJ0SmNoVG9KYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvSmNoKGNvbnZlcnRSZ2JUb0phYihjKSksXG5cdFx0amFiOiBjb252ZXJ0SmFiVG9KY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjFdLFxuXHRcdGM6IFswLCAuMTldLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ajogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29uc3RhbnRzLmpzXG52YXIgayA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1h5ejUwLmpzXG52YXIgZm4gPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlID8gTWF0aC5wb3codiwgMykgOiAoMTE2ICogdiAtIDE2KSAvIGs7XG52YXIgY29udmVydExhYlRvWHl6NTAgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogZm4oZngpICogRDUwLlgsXG5cdFx0eTogZm4oZnkpICogRDUwLlksXG5cdFx0ejogZm4oZnopICogRDUwLlpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29udmVydFh5ejUwVG9SZ2IuanNcbnZhciBjb252ZXJ0WHl6NTBUb1JnYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAzLjEzNDEzNTk1Njk5NTg3MDcgLSB5ICogMS42MTczODYzMzIxNjEyNTM4IC0gLjQ5MDY2MTk0NjAwODM1MzIgKiB6LFxuXHRcdGc6IHggKiAtLjk3ODc5NTUwMjkxMjA4OSArIHkgKiAxLjkxNjI1NDU2NzI1OTUyNCArIC4wMzM0NDI3MzExNjEzMTk0OSAqIHosXG5cdFx0YjogeCAqIC4wNzE5NTUzNzk4ODQxMTY3NyAtIHkgKiAuMjI4OTc2ODI2NDE1ODMyMiArIDEuNDA1Mzg2MDU4MzI0MTI1ICogelxuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWJUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMYWJUb1h5ejUwKGxhYikpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0UmdiVG9YeXo1MC5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejUwID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNDM2MDY1NzQyODI0ODExICogciArIC4zODUxNTE0Njg4MzM3OTEyICogZyArIC4xNDMwNzg0NTQ0MjI2NDE5NyAqIGIsXG5cdFx0eTogLjIyMjQ5MzE5MTc1NjIzNzAyICogciArIC43MTY4ODcwNTM4MjM4ODIzICogZyArIC4wNjA2MTk3OTA1MzYxNjUzNyAqIGIsXG5cdFx0ejogLjAxMzkyMzkwNDUwMDk0MzQ2NSAqIHIgKyAuMDk3MDgxMjg1NjY1NzQ2MzQgKiBnICsgLjcxNDA5OTM1ODQwMDUxNTUgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0WHl6NTBUb0xhYi5qc1xudmFyIGYgPSAodmFsdWUpID0+IHZhbHVlID4gZSA/IE1hdGguY2JydCh2YWx1ZSkgOiAoayAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTGFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmKHggLyBENTAuWCk7XG5cdGxldCBmMSA9IGYoeSAvIEQ1MC5ZKTtcblx0bGV0IGYyID0gZih6IC8gRDUwLlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiXCIsXG5cdFx0bDogMTE2ICogZjEgLSAxNixcblx0XHRhOiA1MDAgKiAoZjAgLSBmMSksXG5cdFx0YjogMjAwICogKGYxIC0gZjIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0UmdiVG9MYWIuanNcbnZhciBjb252ZXJ0UmdiVG9MYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NTBUb0xhYihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL3BhcnNlTGFiLmpzXG5mdW5jdGlvbiBwYXJzZUxhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGFiXCIgfTtcblx0Y29uc3QgWywgbCwgYSwgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlID09PSBUb2suSHVlIHx8IGEudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbC52YWx1ZSksIDEwMCk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIDEyNSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTUgPSB7XG5cdG1vZGU6IFwibGFiXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0TGFiVG9YeXo1MCxcblx0XHRyZ2I6IGNvbnZlcnRMYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRhOiBbLTEyNSwgMTI1XSxcblx0XHRiOiBbLTEyNSwgMTI1XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGFiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJsYWI2NVwiLFxuXHRwYXJzZTogW1wiLS1sYWItZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sYWItZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0TGFiNjVUb1h5ejY1LFxuXHRcdHJnYjogY29udmVydExhYjY1VG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9MYWI2NSxcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYjY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9wYXJzZUxjaC5qc1xuZnVuY3Rpb24gcGFyc2VMY2goY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwibGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImxjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0fVxuXHRpZiAoYy50eXBlICE9PSBUb2suTm9uZSkgcmVzLmMgPSBNYXRoLm1heCgwLCBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAqIDE1MCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTMgPSB7XG5cdG1vZGU6IFwibGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjogY29udmVydExjaFRvTGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb1JnYihjb252ZXJ0TGNoVG9MYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYihjKSksXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9MY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0cGFyc2U6IFtwYXJzZUxjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBsY2goJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYyAhPT0gdm9pZCAwID8gYy5jIDogXCJub25lXCJ9ICR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2g2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMiA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJsY2g2NVwiLFxuXHRwYXJzZTogW1wiLS1sY2gtZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2gtZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYjY1VG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYjY1KGMpLCBcImxjaDY1XCIpLFxuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwibGNoNjVcIilcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydEx1dlRvTGNodXYuanNcbnZhciBjb252ZXJ0THV2VG9MY2h1diA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKHUgPT09IHZvaWQgMCkgdSA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydCh1ICogdSArIHYgKiB2KTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxjaHV2XCIsXG5cdFx0bCxcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKHYsIHUpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaHV2L2NvbnZlcnRMY2h1dlRvTHV2LmpzXG52YXIgY29udmVydExjaHV2VG9MdXYgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1OiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0djogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0WHl6NTBUb0x1di5qc1xudmFyIHVfZm4kMSA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4kMSA9ICh4LCB5LCB6KSA9PiA5ICogeSAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHVuJDEgPSB1X2ZuJDEoRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4kMSA9IHZfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBsX2ZuID0gKHZhbHVlKSA9PiB2YWx1ZSA8PSBlID8gayAqIHZhbHVlIDogMTE2ICogTWF0aC5jYnJ0KHZhbHVlKSAtIDE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTHV2ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgbCA9IGxfZm4oeSAvIEQ1MC5ZKTtcblx0bGV0IHUgPSB1X2ZuJDEoeCwgeSwgeik7XG5cdGxldCB2ID0gdl9mbiQxKHgsIHksIHopO1xuXHRpZiAoIWlzRmluaXRlKHUpIHx8ICFpc0Zpbml0ZSh2KSkgbCA9IHUgPSB2ID0gMDtcblx0ZWxzZSB7XG5cdFx0dSA9IDEzICogbCAqICh1IC0gdW4kMSk7XG5cdFx0diA9IDEzICogbCAqICh2IC0gdm4kMSk7XG5cdH1cblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImx1dlwiLFxuXHRcdGwsXG5cdFx0dSxcblx0XHR2XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0THV2VG9YeXo1MC5qc1xudmFyIHVfZm4gPSAoeCwgeSwgeikgPT4gNCAqIHggLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB2X2ZuID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4gPSB1X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIHZuID0gdl9mbihENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBjb252ZXJ0THV2VG9YeXo1MCA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChsID09PSAwKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0ejogMFxuXHR9O1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCB1cCA9IHUgLyAoMTMgKiBsKSArIHVuO1xuXHRsZXQgdnAgPSB2IC8gKDEzICogbCkgKyB2bjtcblx0bGV0IHkgPSBENTAuWSAqIChsIDw9IDggPyBsIC8gayA6IE1hdGgucG93KChsICsgMTYpIC8gMTE2LCAzKSk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IHkgKiAoOSAqIHVwKSAvICg0ICogdnApLFxuXHRcdHksXG5cdFx0ejogeSAqICgxMiAtIDMgKiB1cCAtIDIwICogdnApIC8gKDQgKiB2cClcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xjaHV2ID0gKHJnYikgPT4gY29udmVydEx1dlRvTGNodXYoY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSkpO1xudmFyIGNvbnZlcnRMY2h1dlRvUmdiID0gKGxjaHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChjb252ZXJ0TGNodXZUb0x1dihsY2h1dikpKTtcbnZhciBkZWZpbml0aW9uJDExID0ge1xuXHRtb2RlOiBcImxjaHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdGx1djogY29udmVydExjaHV2VG9MdXYsXG5cdFx0cmdiOiBjb252ZXJ0TGNodXZUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvTGNodXYsXG5cdFx0bHV2OiBjb252ZXJ0THV2VG9MY2h1dlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1sY2h1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbGNodXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE3Ni45NTZdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJscmdiXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRMcmdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9McmdiIH0sXG5cdHBhcnNlOiBbXCJzcmdiLWxpbmVhclwiXSxcblx0c2VyaWFsaXplOiBcInNyZ2ItbGluZWFyXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ5ID0ge1xuXHRtb2RlOiBcImx1dlwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo1MDogY29udmVydEx1dlRvWHl6NTAsXG5cdFx0cmdiOiAobHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChsdXYpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0x1dixcblx0XHRyZ2I6IChyZ2IpID0+IGNvbnZlcnRYeXo1MFRvTHV2KGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJ1XCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWx1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbHV2XCIsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdHU6IFstODQuOTM2LCAxNzUuMDQyXSxcblx0XHR2OiBbLTEyNS44ODIsIDg3LjI0M11cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0dTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydExyZ2JUb09rbGFiLmpzXG52YXIgY29udmVydExyZ2JUb09rbGFiID0gKHsgciwgZywgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGguY2JydCguNDEyMjIxNDY5NDcwNzYzICogciArIC41MzYzMzI1MzcyNjE3MzQ4ICogZyArIC4wNTE0NDU5OTMyNjc1MDIyICogYik7XG5cdGxldCBNID0gTWF0aC5jYnJ0KC4yMTE5MDM0OTU4MTc4MjUyICogciArIC42ODA2OTk1NTA2NDUyMzQ0ICogZyArIC4xMDczOTY5NTM1MzY5NDA2ICogYik7XG5cdGxldCBTID0gTWF0aC5jYnJ0KC4wODgzMDI0NTkxOTAwNTY0ICogciArIC4yODE3MTg4MzkxMzYxMjE1ICogZyArIC42Mjk5Nzg3MDE2NzM4MjIyICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IC4yMTA0NTQyNjgzMDkzMTQgKiBMICsgLjc5MzYxNzc3NDcwMjMwNTQgKiBNIC0gLjAwNDA3MjA0MzAxMTYxOTMgKiBTLFxuXHRcdGE6IDEuOTc3OTk4NTMyNDMxMTY4NCAqIEwgLSAyLjQyODU5MjI0MjA0ODU4ICogTSArIC40NTA1OTM3MDk2MTc0MTEgKiBTLFxuXHRcdGI6IC4wMjU5MDQwNDI0NjU1NDc4ICogTCArIC43ODI3NzE3MTI0NTc1Mjk2ICogTSAtIC44MDg2NzU3NTQ5MjMwNzc0ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0UmdiVG9Pa2xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb09rbGFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb09rbGFiKGNvbnZlcnRSZ2JUb0xyZ2IocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRPa2xhYlRvTHJnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvTHJnYiA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IEwgPSBNYXRoLnBvdyhsICsgLjM5NjMzNzc3NzM3NjE3NDkgKiBhICsgLjIxNTgwMzc1NzMwOTkxMzYgKiBiLCAzKTtcblx0bGV0IE0gPSBNYXRoLnBvdyhsIC0gLjEwNTU2MTM0NTgxNTY1ODYgKiBhIC0gLjA2Mzg1NDE3MjgyNTgxMzMgKiBiLCAzKTtcblx0bGV0IFMgPSBNYXRoLnBvdyhsIC0gLjA4OTQ4NDE3NzUyOTgxMTkgKiBhIC0gMS4yOTE0ODU1NDgwMTk0MDkyICogYiwgMyk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogNC4wNzY3NDE2MzYwNzU5NTcgKiBMIC0gMy4zMDc3MTE1MzkyNTgwNjE2ICogTSArIC4yMzA5Njk5MDMxODIxMDQ0ICogUyxcblx0XHRnOiAtMS4yNjg0Mzc5NzMyODUwMzE3ICogTCArIDIuNjA5NzU3MzQ5Mjg3Njg4NyAqIE0gLSAuMzQxMzE5Mzc2MDAyNjU3MyAqIFMsXG5cdFx0YjogLS4wMDQxOTYwNzYxMzg2NzU2ICogTCAtIC43MDM0MTg2MTc5MzU5MzYyICogTSArIDEuNzA3NjE0Njk0MDc0NjExNyAqIFNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9SZ2IuanNcbnZhciBjb252ZXJ0T2tsYWJUb1JnYiA9IChjKSA9PiBjb252ZXJ0THJnYlRvUmdiKGNvbnZlcnRPa2xhYlRvTHJnYihjKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2hlbHBlcnMuanNcbmZ1bmN0aW9uIHRvZSh4KSB7XG5cdGNvbnN0IGtfMSA9IC4yMDY7XG5cdGNvbnN0IGtfMiA9IC4wMztcblx0Y29uc3Qga18zID0gMS4yMDYgLyAxLjAzO1xuXHRyZXR1cm4gLjUgKiAoa18zICogeCAtIGtfMSArIE1hdGguc3FydCgoa18zICogeCAtIGtfMSkgKiAoa18zICogeCAtIGtfMSkgKyA0ICoga18yICoga18zICogeCkpO1xufVxuZnVuY3Rpb24gdG9lX2ludih4KSB7XG5cdHJldHVybiAoeCAqIHggKyAuMjA2ICogeCkgLyAoMS4yMDYgLyAxLjAzICogKHggKyAuMDMpKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYikge1xuXHRsZXQgazAsIGsxLCBrMiwgazMsIGs0LCB3bCwgd20sIHdzO1xuXHRpZiAoLTEuODgxNzAzMjggKiBhIC0gLjgwOTM2NDkzICogYiA+IDEpIHtcblx0XHRrMCA9IDEuMTkwODYyNzc7XG5cdFx0azEgPSAxLjc2NTc2NzI4O1xuXHRcdGsyID0gLjU5NjYyNjQxO1xuXHRcdGszID0gLjc1NTE1MTk3O1xuXHRcdGs0ID0gLjU2NzcxMjQ1O1xuXHRcdHdsID0gNC4wNzY3NDE2NjIxO1xuXHRcdHdtID0gLTMuMzA3NzExNTkxMztcblx0XHR3cyA9IC4yMzA5Njk5MjkyO1xuXHR9IGVsc2UgaWYgKDEuODE0NDQxMDQgKiBhIC0gMS4xOTQ0NTI3NiAqIGIgPiAxKSB7XG5cdFx0azAgPSAuNzM5NTY1MTU7XG5cdFx0azEgPSAtLjQ1OTU0NDA0O1xuXHRcdGsyID0gLjA4Mjg1NDI3O1xuXHRcdGszID0gLjEyNTQxMDc7XG5cdFx0azQgPSAuMTQ1MDMyMDQ7XG5cdFx0d2wgPSAtMS4yNjg0MzgwMDQ2O1xuXHRcdHdtID0gMi42MDk3NTc0MDExO1xuXHRcdHdzID0gLS4zNDEzMTkzOTY1O1xuXHR9IGVsc2Uge1xuXHRcdGswID0gMS4zNTczMzY1Mjtcblx0XHRrMSA9IC0uMDA5MTU3OTk7XG5cdFx0azIgPSAtMS4xNTEzMDIxO1xuXHRcdGszID0gLS41MDU1OTYwNjtcblx0XHRrNCA9IC4wMDY5MjE2Nztcblx0XHR3bCA9IC0uMDA0MTk2MDg2Mztcblx0XHR3bSA9IC0uNzAzNDE4NjE0Nztcblx0XHR3cyA9IDEuNzA3NjE0NzAxO1xuXHR9XG5cdGxldCBTID0gazAgKyBrMSAqIGEgKyBrMiAqIGIgKyBrMyAqIGEgKiBhICsgazQgKiBhICogYjtcblx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdGxldCBrX3MgPSAtLjA4OTQ4NDE3NzUgKiBhIC0gMS4yOTE0ODU1NDggKiBiO1xuXHR7XG5cdFx0bGV0IGxfID0gMSArIFMgKiBrX2w7XG5cdFx0bGV0IG1fID0gMSArIFMgKiBrX207XG5cdFx0bGV0IHNfID0gMSArIFMgKiBrX3M7XG5cdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0bGV0IHMgPSBzXyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMgPSAzICoga19sICogbF8gKiBsXztcblx0XHRsZXQgbV9kUyA9IDMgKiBrX20gKiBtXyAqIG1fO1xuXHRcdGxldCBzX2RTID0gMyAqIGtfcyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMyID0gNiAqIGtfbCAqIGtfbCAqIGxfO1xuXHRcdGxldCBtX2RTMiA9IDYgKiBrX20gKiBrX20gKiBtXztcblx0XHRsZXQgc19kUzIgPSA2ICoga19zICoga19zICogc187XG5cdFx0bGV0IGYgPSB3bCAqIGwgKyB3bSAqIG0gKyB3cyAqIHM7XG5cdFx0bGV0IGYxID0gd2wgKiBsX2RTICsgd20gKiBtX2RTICsgd3MgKiBzX2RTO1xuXHRcdGxldCBmMiA9IHdsICogbF9kUzIgKyB3bSAqIG1fZFMyICsgd3MgKiBzX2RTMjtcblx0XHRTID0gUyAtIGYgKiBmMSAvIChmMSAqIGYxIC0gLjUgKiBmICogZjIpO1xuXHR9XG5cdHJldHVybiBTO1xufVxuZnVuY3Rpb24gZmluZF9jdXNwKGEsIGIpIHtcblx0bGV0IFNfY3VzcCA9IGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYik7XG5cdGxldCByZ2IgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IDEsXG5cdFx0YTogU19jdXNwICogYSxcblx0XHRiOiBTX2N1c3AgKiBiXG5cdH0pO1xuXHRsZXQgTF9jdXNwID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2IuciwgcmdiLmcsIHJnYi5iKSk7XG5cdHJldHVybiBbTF9jdXNwLCBMX2N1c3AgKiBTX2N1c3BdO1xufVxuZnVuY3Rpb24gZmluZF9nYW11dF9pbnRlcnNlY3Rpb24oYSwgYiwgTDEsIEMxLCBMMCwgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGEsIGIpO1xuXHRsZXQgdDtcblx0aWYgKChMMSAtIEwwKSAqIGN1c3BbMV0gLSAoY3VzcFswXSAtIEwwKSAqIEMxIDw9IDApIHQgPSBjdXNwWzFdICogTDAgLyAoQzEgKiBjdXNwWzBdICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdGVsc2Uge1xuXHRcdHQgPSBjdXNwWzFdICogKEwwIC0gMSkgLyAoQzEgKiAoY3VzcFswXSAtIDEpICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdFx0e1xuXHRcdFx0bGV0IGRMID0gTDEgLSBMMDtcblx0XHRcdGxldCBkQyA9IEMxO1xuXHRcdFx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0XHRcdGxldCBrX20gPSAtLjEwNTU2MTM0NTggKiBhIC0gLjA2Mzg1NDE3MjggKiBiO1xuXHRcdFx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdFx0XHRsZXQgbF9kdCA9IGRMICsgZEMgKiBrX2w7XG5cdFx0XHRsZXQgbV9kdCA9IGRMICsgZEMgKiBrX207XG5cdFx0XHRsZXQgc19kdCA9IGRMICsgZEMgKiBrX3M7XG5cdFx0XHR7XG5cdFx0XHRcdGxldCBMID0gTDAgKiAoMSAtIHQpICsgdCAqIEwxO1xuXHRcdFx0XHRsZXQgQyA9IHQgKiBDMTtcblx0XHRcdFx0bGV0IGxfID0gTCArIEMgKiBrX2w7XG5cdFx0XHRcdGxldCBtXyA9IEwgKyBDICoga19tO1xuXHRcdFx0XHRsZXQgc18gPSBMICsgQyAqIGtfcztcblx0XHRcdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0XHRcdGxldCBtID0gbV8gKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdCA9IDMgKiBsX2R0ICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG1kdCA9IDMgKiBtX2R0ICogbV8gKiBtXztcblx0XHRcdFx0bGV0IHNkdCA9IDMgKiBzX2R0ICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdDIgPSA2ICogbF9kdCAqIGxfZHQgKiBsXztcblx0XHRcdFx0bGV0IG1kdDIgPSA2ICogbV9kdCAqIG1fZHQgKiBtXztcblx0XHRcdFx0bGV0IHNkdDIgPSA2ICogc19kdCAqIHNfZHQgKiBzXztcblx0XHRcdFx0bGV0IHIgPSA0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIC4yMzA5Njk5MjkyICogcyAtIDE7XG5cdFx0XHRcdGxldCByMSA9IDQuMDc2NzQxNjYyMSAqIGxkdCAtIDMuMzA3NzExNTkxMyAqIG1kdCArIC4yMzA5Njk5MjkyICogc2R0O1xuXHRcdFx0XHRsZXQgcjIgPSA0LjA3Njc0MTY2MjEgKiBsZHQyIC0gMy4zMDc3MTE1OTEzICogbWR0MiArIC4yMzA5Njk5MjkyICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfciA9IHIxIC8gKHIxICogcjEgLSAuNSAqIHIgKiByMik7XG5cdFx0XHRcdGxldCB0X3IgPSAtciAqIHVfcjtcblx0XHRcdFx0bGV0IGcgPSAtMS4yNjg0MzgwMDQ2ICogbCArIDIuNjA5NzU3NDAxMSAqIG0gLSAuMzQxMzE5Mzk2NSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgZzEgPSAtMS4yNjg0MzgwMDQ2ICogbGR0ICsgMi42MDk3NTc0MDExICogbWR0IC0gLjM0MTMxOTM5NjUgKiBzZHQ7XG5cdFx0XHRcdGxldCBnMiA9IC0xLjI2ODQzODAwNDYgKiBsZHQyICsgMi42MDk3NTc0MDExICogbWR0MiAtIC4zNDEzMTkzOTY1ICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfZyA9IGcxIC8gKGcxICogZzEgLSAuNSAqIGcgKiBnMik7XG5cdFx0XHRcdGxldCB0X2cgPSAtZyAqIHVfZztcblx0XHRcdFx0bGV0IGIgPSAtLjAwNDE5NjA4NjMgKiBsIC0gLjcwMzQxODYxNDcgKiBtICsgMS43MDc2MTQ3MDEgKiBzIC0gMTtcblx0XHRcdFx0bGV0IGIxID0gLS4wMDQxOTYwODYzICogbGR0IC0gLjcwMzQxODYxNDcgKiBtZHQgKyAxLjcwNzYxNDcwMSAqIHNkdDtcblx0XHRcdFx0bGV0IGIyID0gLS4wMDQxOTYwODYzICogbGR0MiAtIC43MDM0MTg2MTQ3ICogbWR0MiArIDEuNzA3NjE0NzAxICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfYiA9IGIxIC8gKGIxICogYjEgLSAuNSAqIGIgKiBiMik7XG5cdFx0XHRcdGxldCB0X2IgPSAtYiAqIHVfYjtcblx0XHRcdFx0dF9yID0gdV9yID49IDAgPyB0X3IgOiAxZTY7XG5cdFx0XHRcdHRfZyA9IHVfZyA+PSAwID8gdF9nIDogMWU2O1xuXHRcdFx0XHR0X2IgPSB1X2IgPj0gMCA/IHRfYiA6IDFlNjtcblx0XHRcdFx0dCArPSBNYXRoLm1pbih0X3IsIE1hdGgubWluKHRfZywgdF9iKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0O1xufVxuZnVuY3Rpb24gZ2V0X1NUX21heChhXywgYl8sIGN1c3AgPSBudWxsKSB7XG5cdGlmICghY3VzcCkgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgTCA9IGN1c3BbMF07XG5cdGxldCBDID0gY3VzcFsxXTtcblx0cmV0dXJuIFtDIC8gTCwgQyAvICgxIC0gTCldO1xufVxuZnVuY3Rpb24gZ2V0X0NzKEwsIGFfLCBiXykge1xuXHRsZXQgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgQ19tYXggPSBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhXywgYl8sIEwsIDEsIEwsIGN1c3ApO1xuXHRsZXQgU1RfbWF4ID0gZ2V0X1NUX21heChhXywgYl8sIGN1c3ApO1xuXHRsZXQgU19taWQgPSAuMTE1MTY5OTMgKyAxIC8gKDcuNDQ3Nzg5NyArIDQuMTU5MDEyNCAqIGJfICsgYV8gKiAoLTIuMTk1NTczNDcgKyAxLjc1MTk4NDAxICogYl8gKyBhXyAqICgtMi4xMzcwNDk0OCAtIDEwLjAyMzAxMDQzICogYl8gKyBhXyAqICgtNC4yNDg5NDU2MSArIDUuMzg3NzA4MTkgKiBiXyArIDQuNjk4OTEwMTMgKiBhXykpKSk7XG5cdGxldCBUX21pZCA9IC4xMTIzOTY0MiArIDEgLyAoMS42MTMyMDMyIC0gLjY4MTI0Mzc5ICogYl8gKyBhXyAqICguNDAzNzA2MTIgKyAuOTAxNDgxMjMgKiBiXyArIGFfICogKC0uMjcwODc5NDMgKyAuNjEyMjM5OSAqIGJfICsgYV8gKiAoLjAwMjk5MjE1IC0gLjQ1Mzk5NTY4ICogYl8gLSAuMTQ2NjE4NzIgKiBhXykpKSk7XG5cdGxldCBrID0gQ19tYXggLyBNYXRoLm1pbihMICogU1RfbWF4WzBdLCAoMSAtIEwpICogU1RfbWF4WzFdKTtcblx0bGV0IENfYSA9IEwgKiBTX21pZDtcblx0bGV0IENfYiA9ICgxIC0gTCkgKiBUX21pZDtcblx0bGV0IENfbWlkID0gLjkgKiBrICogTWF0aC5zcXJ0KE1hdGguc3FydCgxIC8gKDEgLyAoQ19hICogQ19hICogQ19hICogQ19hKSArIDEgLyAoQ19iICogQ19iICogQ19iICogQ19iKSkpKTtcblx0Q19hID0gTCAqIC40O1xuXHRDX2IgPSAoMSAtIEwpICogLjg7XG5cdHJldHVybiBbXG5cdFx0TWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IpKSksXG5cdFx0Q19taWQsXG5cdFx0Q19tYXhcblx0XTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvY29udmVydE9rbGFiVG9Pa2hzbC5qc1xuZnVuY3Rpb24gY29udmVydE9rbGFiVG9Pa2hzbChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGNvbnN0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRjb25zdCBiID0gbGFiLmIgIT09IHZvaWQgMCA/IGxhYi5iIDogMDtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc2xcIixcblx0XHRsOiB0b2UobClcblx0fTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRpZiAoIWMpIHtcblx0XHRyZXQucyA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhsLCBhIC8gYywgYiAvIGMpO1xuXHRsZXQgcztcblx0aWYgKGMgPCBDX21pZCkge1xuXHRcdGxldCBrXzAgPSAwO1xuXHRcdGxldCBrXzEgPSAuOCAqIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHRcdHMgPSAoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSAqIC44O1xuXHR9IGVsc2Uge1xuXHRcdGxldCBrXzAgPSBDX21pZDtcblx0XHRsZXQga18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0bGV0IGtfMiA9IDEgLSBrXzEgLyAoQ19tYXggLSBDX21pZCk7XG5cdFx0cyA9IC44ICsgLjIgKiAoKGMgLSBrXzApIC8gKGtfMSArIGtfMiAqIChjIC0ga18wKSkpO1xuXHR9XG5cdGlmIChzKSB7XG5cdFx0cmV0LnMgPSBzO1xuXHRcdHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0fVxuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2toc2xUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc2xUb09rbGFiKGhzbCkge1xuXHRsZXQgaCA9IGhzbC5oICE9PSB2b2lkIDAgPyBoc2wuaCA6IDA7XG5cdGxldCBzID0gaHNsLnMgIT09IHZvaWQgMCA/IGhzbC5zIDogMDtcblx0bGV0IGwgPSBoc2wubCAhPT0gdm9pZCAwID8gaHNsLmwgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IHRvZV9pbnYobClcblx0fTtcblx0aWYgKGhzbC5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBoc2wuYWxwaGE7XG5cdGlmICghcyB8fCBsID09PSAxKSB7XG5cdFx0cmV0LmEgPSByZXQuYiA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGxldCBiXyA9IE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IFtDXzAsIENfbWlkLCBDX21heF0gPSBnZXRfQ3MocmV0LmwsIGFfLCBiXyk7XG5cdGxldCB0LCBrXzAsIGtfMSwga18yO1xuXHRpZiAocyA8IC44KSB7XG5cdFx0dCA9IDEuMjUgKiBzO1xuXHRcdGtfMCA9IDA7XG5cdFx0a18xID0gLjggKiBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHR9IGVsc2Uge1xuXHRcdHQgPSA1ICogKHMgLSAuOCk7XG5cdFx0a18wID0gQ19taWQ7XG5cdFx0a18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0fVxuXHRsZXQgQyA9IGtfMCArIHQgKiBrXzEgLyAoMSAtIGtfMiAqIHQpO1xuXHRyZXQuYSA9IEMgKiBhXztcblx0cmV0LmIgPSBDICogYl87XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL21vZGVPa2hzbC5qc1xudmFyIG1vZGVPa2hzbCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyMSxcblx0bW9kZTogXCJva2hzbFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1va2hzbFwiXSxcblx0c2VyaWFsaXplOiBcIi0tb2toc2xcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9rbGFiVG9Pa2hzbCxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb09raHNsKGNvbnZlcnRSZ2JUb09rbGFiKGMpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9raHNsVG9Pa2xhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb1JnYihjb252ZXJ0T2toc2xUb09rbGFiKGMpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2tsYWJUb09raHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHN2KGxhYikge1xuXHRsZXQgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGxldCBhID0gbGFiLmEgIT09IHZvaWQgMCA/IGxhYi5hIDogMDtcblx0bGV0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IGFfID0gYyA/IGEgLyBjIDogMTtcblx0bGV0IGJfID0gYyA/IGIgLyBjIDogMTtcblx0bGV0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGxldCBTXzAgPSAuNTtcblx0bGV0IGsgPSAxIC0gU18wIC8gU19tYXg7XG5cdGxldCB0ID0gVCAvIChjICsgbCAqIFQpO1xuXHRsZXQgTF92ID0gdCAqIGw7XG5cdGxldCBDX3YgPSB0ICogYztcblx0bGV0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGxldCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0bGV0IHJnYl9zY2FsZSA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogTF92dCxcblx0XHRhOiBhXyAqIENfdnQsXG5cdFx0YjogYl8gKiBDX3Z0XG5cdH0pO1xuXHRsZXQgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRsID0gbCAvIHNjYWxlX0w7XG5cdGMgPSBjIC8gc2NhbGVfTCAqIHRvZShsKSAvIGw7XG5cdGwgPSB0b2UobCk7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9raHN2XCIsXG5cdFx0czogYyA/IChTXzAgKyBUKSAqIENfdiAvIChUICogU18wICsgVCAqIGsgKiBDX3YpIDogMCxcblx0XHR2OiBsID8gbCAvIExfdiA6IDBcblx0fTtcblx0aWYgKHJldC5zKSByZXQuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChsYWIuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gbGFiLmFscGhhO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2toc3ZUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc3ZUb09rbGFiKGhzdikge1xuXHRjb25zdCByZXQgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRpZiAoaHN2LmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzdi5hbHBoYTtcblx0Y29uc3QgaCA9IGhzdi5oICE9PSB2b2lkIDAgPyBoc3YuaCA6IDA7XG5cdGNvbnN0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRjb25zdCB2ID0gaHN2LnYgIT09IHZvaWQgMCA/IGhzdi52IDogMDtcblx0Y29uc3QgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRjb25zdCBbU19tYXgsIFRdID0gZ2V0X1NUX21heChhXywgYl8pO1xuXHRjb25zdCBTXzAgPSAuNTtcblx0Y29uc3QgayA9IDEgLSBTXzAgLyBTX21heDtcblx0Y29uc3QgTF92ID0gMSAtIHMgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IENfdiA9IHMgKiBUICogU18wIC8gKFNfMCArIFQgLSBUICogayAqIHMpO1xuXHRjb25zdCBMX3Z0ID0gdG9lX2ludihMX3YpO1xuXHRjb25zdCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0Y29uc3QgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGNvbnN0IHNjYWxlX0wgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYl9zY2FsZS5yLCByZ2Jfc2NhbGUuZywgcmdiX3NjYWxlLmIsIDApKTtcblx0Y29uc3QgTF9uZXcgPSB0b2VfaW52KHYgKiBMX3YpO1xuXHRjb25zdCBDID0gQ192ICogTF9uZXcgLyBMX3Y7XG5cdHJldC5sID0gTF9uZXcgKiBzY2FsZV9MO1xuXHRyZXQuYSA9IEMgKiBhXyAqIHNjYWxlX0w7XG5cdHJldC5iID0gQyAqIGJfICogc2NhbGVfTDtcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc3YvbW9kZU9raHN2LmpzXG52YXIgbW9kZU9raHN2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDIwLFxuXHRtb2RlOiBcIm9raHN2XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzdlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHN2LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc3YoY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc3ZUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzdlRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL3BhcnNlT2tsYWIuanNcbmZ1bmN0aW9uIHBhcnNlT2tsYWIoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwib2tsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHRpZiAoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmEgPSBhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhLnZhbHVlIDogYS52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDggPSB7XG5cdC4uLmRlZmluaXRpb24kMTUsXG5cdG1vZGU6IFwib2tsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHJnYjogY29udmVydE9rbGFiVG9McmdiLFxuXHRcdHJnYjogY29udmVydE9rbGFiVG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0THJnYlRvT2tsYWIsXG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9Pa2xhYlxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YTogWy0uNCwgLjRdLFxuXHRcdGI6IFstLjQsIC40XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlT2tsYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgb2tsYWIoJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYSAhPT0gdm9pZCAwID8gYy5hIDogXCJub25lXCJ9ICR7Yy5iICE9PSB2b2lkIDAgPyBjLmIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvcGFyc2VPa2xjaC5qc1xuZnVuY3Rpb24gcGFyc2VPa2xjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xjaFwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogLjQgLyAxMDApO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNyA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJva2xjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjb252ZXJ0UmdiVG9Pa2xhYihjKSwgXCJva2xjaFwiKSxcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjLCBcIm9rbGNoXCIpXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YzogWzAsIC40XSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0UDNUb1h5ejY1LmpzXG52YXIgY29udmVydFAzVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQ4NjU3MDk0ODY0ODIxNiAqIHIgKyAuMjY1NjY3NjkzMTY5MDkzICogZyArIC4xOTgyMTcyODUyMzQzNjI1ICogYixcblx0XHR5OiAuMjI4OTc0NTY0MDY5NzQ4NyAqIHIgKyAuNjkxNzM4NTIxODM2NTA2MiAqIGcgKyAuMDc5Mjg2OTE0MDkzNzQ1ICogYixcblx0XHR6OiAwICogciArIC4wNDUxMTMzODE4NTg5MDI2ICogZyArIDEuMDQzOTQ0MzY4OTAwOTc2ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0WHl6NjVUb1AzLmpzXG52YXIgY29udmVydFh5ejY1VG9QMyA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAyLjQ5MzQ5NjkxMTk0MTQyNjMgLSB5ICogLjkzMTM4MzYxNzkxOTEyNDIgLSAuNDAyNzEwNzg0NDUwNzE3ICogeixcblx0XHRnOiB4ICogLS44Mjk0ODg5Njk1NjE1NzQ5ICsgeSAqIDEuNzYyNjY0MDYwMzE4MzQ2NSArIC4wMjM2MjQ2ODU4NDE5NDM2ICogeixcblx0XHRiOiB4ICogLjAzNTg0NTgzMDI0Mzc4NDUgLSB5ICogLjA3NjE3MjM4OTI2ODA0MTggKyAuOTU2ODg0NTI0MDA3Njg3MSAqIHpcblx0fSwgXCJwM1wiKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcDMvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJwM1wiLFxuXHRwYXJzZTogW1wiZGlzcGxheS1wM1wiXSxcblx0c2VyaWFsaXplOiBcImRpc3BsYXktcDNcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9QMyhjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1AzXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UDNUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRQM1RvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFh5ejUwVG9Qcm9waG90by5qc1xudmFyIGdhbW1hJDEgPSAodikgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPj0gMSAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMSAvIDEuOCk7XG5cdHJldHVybiAxNiAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo1MFRvUHJvcGhvdG8gPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJwcm9waG90b1wiLFxuXHRcdHI6IGdhbW1hJDEoeCAqIDEuMzQ1Nzg2ODgxNjQ3MTU4NSAtIHkgKiAuMjU1NTcyMDg3Mzc5Nzk0NiAtIC4wNTExMDE4NjQ5NzU1NDUzICogeiksXG5cdFx0ZzogZ2FtbWEkMSh4ICogLS41NDQ2MzA3MDUxMjQ5MDE5ICsgeSAqIDEuNTA4MjQ3NzQyODQ1MTQ2NiArIC4wMjA1Mjc0NDc0MzY0MjE0ICogeiksXG5cdFx0YjogZ2FtbWEkMSh4ICogMCArIHkgKiAwICsgMS4yMTE5Njc1NDU2Mzg5NDUyICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFByb3Bob3RvVG9YeXo1MC5qc1xudmFyIGxpbmVhcml6ZSQxID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxNiAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMS44KTtcblx0cmV0dXJuIHYgLyAxNjtcbn07XG52YXIgY29udmVydFByb3Bob3RvVG9YeXo1MCA9IChwcm9waG90bykgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLnIpO1xuXHRsZXQgZyA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNzk3NzY2NjQ0OTAwNjQyMyAqIHIgKyAuMTM1MTgxMjk3NDAwNTMzMSAqIGcgKyAuMDMxMzQ3NzM0MTI4MzkyMiAqIGIsXG5cdFx0eTogLjI4ODA3NDgyODgxOTQwMTMgKiByICsgLjcxMTgzNTIzNDI0MTg3MzEgKiBnICsgODk5MzY5Mzg3MjU2ZS0xNiAqIGIsXG5cdFx0ejogMCAqIHIgKyAwICogZyArIC44MjUxMDQ2MDI1MTA0NjAyICogYlxuXHR9O1xuXHRpZiAocHJvcGhvdG8uYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gcHJvcGhvdG8uYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ1ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdHBhcnNlOiBbXCJwcm9waG90by1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJwcm9waG90by1yZ2JcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9Qcm9waG90byxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejUwVG9Qcm9waG90byhjb252ZXJ0UmdiVG9YeXo1MChjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwKGNvbG9yKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0WHl6NjVUb1JlYzIwMjAuanNcbnZhciDOsSQxID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiQxID0gLjAxODA1Mzk2ODUxMDgwNztcbnZhciBnYW1tYSA9ICh2KSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID4gzrIkMSkgcmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiAozrEkMSAqIE1hdGgucG93KGFicywgLjQ1KSAtIC4wOTkyOTY4MjY4MDk0NDAwOCk7XG5cdHJldHVybiA0LjUgKiB2O1xufTtcbnZhciBjb252ZXJ0WHl6NjVUb1JlYzIwMjAgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZWMyMDIwXCIsXG5cdFx0cjogZ2FtbWEoeCAqIDEuNzE2NjUxMTg3OTcxMjY4MyAtIHkgKiAuMzU1NjcwNzgzNzc2MzkyNSAtIC4yNTMzNjYyODEzNzM2NTk5ICogeiksXG5cdFx0ZzogZ2FtbWEoeCAqIC0uNjY2Njg0MzUxODMyNDg5MyArIHkgKiAxLjYxNjQ4MTIzNjYzNDkzOTUgKyAuMDE1NzY4NTQ1ODEzOTExMSAqIHopLFxuXHRcdGI6IGdhbW1hKHggKiAuMDE3NjM5ODU3NDQ1MzEwOCAtIHkgKiAuMDQyNzcwNjEzMjU3ODA4NSArIC45NDIxMDMxMjEyMzU0NzM5ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0UmVjMjAyMFRvWHl6NjUuanNcbnZhciDOsSA9IDEuMDk5Mjk2ODI2ODA5NDQ7XG52YXIgzrIgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGxpbmVhcml6ZSA9ICh2ID0gMCkgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPCDOsiAqIDQuNSkgcmV0dXJuIHYgLyA0LjU7XG5cdHJldHVybiAoTWF0aC5zaWduKHYpIHx8IDEpICogTWF0aC5wb3coKGFicyArIM6xIC0gMSkgLyDOsSwgMSAvIC40NSk7XG59O1xudmFyIGNvbnZlcnRSZWMyMDIwVG9YeXo2NSA9IChyZWMyMDIwKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplKHJlYzIwMjAucik7XG5cdGxldCBnID0gbGluZWFyaXplKHJlYzIwMjAuZyk7XG5cdGxldCBiID0gbGluZWFyaXplKHJlYzIwMjAuYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC42MzY5NTgwNDgzMDEyOTExICogciArIC4xNDQ2MTY5MDM1ODYyMDgzICogZyArIC4xNjg4ODA5NzUxNjQxNzIxICogYixcblx0XHR5OiAuMjYyNzAwMjEyMDExMjY3ICogciArIC42Nzc5OTgwNzE1MTg4NzA4ICogZyArIC4wNTkzMDE3MTY0Njk4NjIgKiBiLFxuXHRcdHo6IDAgKiByICsgLjAyODA3MjY5MzA0OTA4NzQgKiBnICsgMS4wNjA5ODUwNTc3MTA3OTA5ICogYlxuXHR9O1xuXHRpZiAocmVjMjAyMC5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSByZWMyMDIwLmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInJlYzIwMjBcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9SZWMyMDIwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFJlYzIwMjBUb1h5ejY1LFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UmVjMjAyMFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRwYXJzZTogW1wicmVjMjAyMFwiXSxcblx0c2VyaWFsaXplOiBcInJlYzIwMjBcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnN0YW50cy5qc1xudmFyIGJpYXMgPSAuMDAzNzkzMDczMjU1Mjc1NDQ5MztcbnZhciBiaWFzX2NicnQgPSBNYXRoLmNicnQoYmlhcyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0UmdiVG9YeWIuanNcbnZhciB0cmFuc2ZlciQxID0gKHYpID0+IE1hdGguY2JydCh2KSAtIGJpYXNfY2JydDtcbnZhciBjb252ZXJ0UmdiVG9YeWIgPSAoY29sb3IpID0+IHtcblx0Y29uc3QgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihjb2xvcik7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlciQxKC4zICogciArIC42MjIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyJDEoLjIzICogciArIC42OTIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcyA9IHRyYW5zZmVyJDEoLjI0MzQyMjY4OTI0NTQ3ODIgKiByICsgLjIwNDc2NzQ0NDI0NDk2ODIgKiBnICsgLjU1MTgwOTg2NjUwOTU1MzUgKiBiICsgYmlhcyk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5YlwiLFxuXHRcdHg6IChsIC0gbSkgLyAyLFxuXHRcdHk6IChsICsgbSkgLyAyLFxuXHRcdGI6IHMgLSAobCArIG0pIC8gMlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29udmVydFh5YlRvUmdiLmpzXG52YXIgdHJhbnNmZXIgPSAodikgPT4gTWF0aC5wb3codiArIGJpYXNfY2JydCwgMyk7XG52YXIgY29udmVydFh5YlRvUmdiID0gKHsgeCwgeSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRjb25zdCBsID0gdHJhbnNmZXIoeCArIHkpIC0gYmlhcztcblx0Y29uc3QgbSA9IHRyYW5zZmVyKHkgLSB4KSAtIGJpYXM7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlcihiICsgeSkgLSBiaWFzO1xuXHRjb25zdCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiAxMS4wMzE1NjY5MDQ2Mzk4NjEgKiBsIC0gOS44NjY5NDM5MDgxMzE1NjIgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRnOiAtMy4yNTQxNDczODEwNzQ0MjM3ICogbCArIDQuNDE4NzcwMzc3NTgyNzIzICogbSAtIC4xNjQ2MjI5OTY1MDgyOTkzNCAqIHMsXG5cdFx0YjogLTMuNjU4ODUxMjg2NzEzNjgxNSAqIGwgKyAyLjcxMjkyMzA0NTkzNjA5MjIgKiBtICsgMS45NDU5MjgyNDA3Nzc1ODk1ICogc1xuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDMgPSB7XG5cdG1vZGU6IFwieHliXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJ4XCIsXG5cdFx0XCJ5XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLXh5YlwiXSxcblx0c2VyaWFsaXplOiBcIi0teHliXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRYeWJUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1h5YiB9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbLS4wMTU0LCAuMDI4MV0sXG5cdFx0eTogWzAsIC44NDUzXSxcblx0XHRiOiBbLS4yNzc4LCAuMzg4XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyID0ge1xuXHRtb2RlOiBcInh5ejUwXCIsXG5cdHBhcnNlOiBbXCJ4eXotZDUwXCJdLFxuXHRzZXJpYWxpemU6IFwieHl6LWQ1MFwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo1MFRvUmdiLFxuXHRcdGxhYjogY29udmVydFh5ejUwVG9MYWJcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb1h5ejUwLFxuXHRcdGxhYjogY29udmVydExhYlRvWHl6NTBcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NjRdLFxuXHRcdHk6IFswLCAuOTk5XSxcblx0XHR6OiBbMCwgLjgyNV1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejY1VG9YeXo1MC5qc1xudmFyIGNvbnZlcnRYeXo2NVRvWHl6NTAgPSAoeHl6NjUpID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejY1O1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAxLjA0NzkyOTgyMDg0MDU0ODggKiB4ICsgLjAyMjk0Njc5MzM0MTAxOTEgKiB5IC0gLjA1MDE5MjIyOTU0MzEzNTYgKiB6LFxuXHRcdHk6IC4wMjk2Mjc4MTU2ODgxNTkzICogeCArIC45OTA0MzQ0ODQ1NzMyNDkgKiB5IC0gLjAxNzA3MzgyNTAyOTM4NTEgKiB6LFxuXHRcdHo6IC0uMDA5MjQzMDU4MTUyNTkxMiAqIHggKyAuMDE1MDU1MTQ0ODk2NTc3OSAqIHkgKyAuNzUxODc0Mjg5OTU4MDAwOCAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejUwVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRYeXo1MFRvWHl6NjUgPSAoeHl6NTApID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejUwO1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuOTU1NDczNDUyNzA0MjE4MiAqIHggLSAuMDIzMDk4NTM2ODc0MjYxNCAqIHkgKyAuMDYzMjU5MzA4NjYxMDIxNyAqIHosXG5cdFx0eTogLS4wMjgzNjk3MDY5NjMyMDgxICogeCArIDEuMDA5OTk1NDU4MDA1ODIyNiAqIHkgKyAuMDIxMDQxMzk4OTY2OTQzICogeixcblx0XHR6OiAuMDEyMzE0MDAxNjg4MzE5OSAqIHggLSAuMDIwNTA3Njk2NDMzNDc3OSAqIHkgKyAxLjMzMDM2NTkzNjYwODA3NTMgKiB6XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEgPSB7XG5cdG1vZGU6IFwieHl6NjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0WHl6NjVUb1JnYixcblx0XHR4eXo1MDogY29udmVydFh5ejY1VG9YeXo1MFxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NjUsXG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NV0sXG5cdFx0eTogWzAsIDFdLFxuXHRcdHo6IFswLCAxLjA4OF1cblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcInh5elwiLCBcInh5ei1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDY1XCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR6OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3lpcS9jb252ZXJ0UmdiVG9ZaXEuanNcbnZhciBjb252ZXJ0UmdiVG9ZaXEgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInlpcVwiLFxuXHRcdHk6IC4yOTg4OTUzMSAqIHIgKyAuNTg2NjIyNDcgKiBnICsgLjExNDQ4MjIzICogYixcblx0XHRpOiAuNTk1OTc3OTkgKiByIC0gLjI3NDE3NjEgKiBnIC0gLjMyMTgwMTg5ICogYixcblx0XHRxOiAuMjExNDcwMTcgKiByIC0gLjUyMjYxNzExICogZyArIC4zMTExNDY5NCAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRZaXFUb1JnYi5qc1xudmFyIGNvbnZlcnRZaXFUb1JnYiA9ICh7IHksIGksIHEsIGFscGhhIH0pID0+IHtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAocSA9PT0gdm9pZCAwKSBxID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogeSArIC45NTYwODQ0NSAqIGkgKyAuNjIwODg4NSAqIHEsXG5cdFx0ZzogeSAtIC4yNzEzNzY2NCAqIGkgLSAuNjQ4NjA1OSAqIHEsXG5cdFx0YjogeSAtIDEuMTA1NjE3MjQgKiBpICsgMS43MDI1MDEyNiAqIHFcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uID0ge1xuXHRtb2RlOiBcInlpcVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0WWlxVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9ZaXEgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInlcIixcblx0XHRcImlcIixcblx0XHRcInFcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teWlxXCJdLFxuXHRzZXJpYWxpemU6IFwiLS15aXFcIixcblx0cmFuZ2VzOiB7XG5cdFx0aTogWy0uNTk1LCAuNTk1XSxcblx0XHRxOiBbLS41MjIsIC41MjJdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRxOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JvdW5kLmpzXG52YXIgciA9ICh2YWx1ZSwgcHJlY2lzaW9uKSA9PiBNYXRoLnJvdW5kKHZhbHVlICogKHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pKSkgLyBwcmVjaXNpb247XG52YXIgcm91bmQgPSAocHJlY2lzaW9uID0gNCkgPT4gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyByKHZhbHVlLCBwcmVjaXNpb24pIDogdmFsdWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2Zvcm1hdHRlci5qc1xudmFyIHR3b0RlY2ltYWxzID0gcm91bmQoMik7XG52YXIgY2xhbXAgPSAodmFsdWUpID0+IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbnZhciBmaXh1cCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZChjbGFtcCh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIHJnYlRvU2FtcGxlID0gKHJnYikgPT4ge1xuXHRjb25zdCBbciwgZywgYl0gPSByZ2I7XG5cdGlmICghW1xuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdF0uZXZlcnkoKG4pID0+IE51bWJlci5pc0Zpbml0ZShuKSkpIHJldHVybiBudWxsO1xuXHRjb25zdCBoZXggPSBmb3JtYXRIZXgoe1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0fSk7XG5cdGlmICghaGV4KSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgb2sgPSBva2xjaCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0cmV0dXJuIHtcblx0XHRyZ2IsXG5cdFx0aGV4LFxuXHRcdGw6IG9rPy5sID8/IC41LFxuXHRcdGM6IG9rPy5jID8/IDAsXG5cdFx0aDogb2s/LmggPz8gMFxuXHR9O1xufTtcbnZhciByYW5rV2FsbHBhcGVyU2VlZHMgPSAoY2VudHJvaWRzKSA9PiB7XG5cdGNvbnN0IHNhbXBsZXMgPSBjZW50cm9pZHMubWFwKHJnYlRvU2FtcGxlKS5maWx0ZXIoQm9vbGVhbik7XG5cdGlmICghc2FtcGxlcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXHRjb25zdCBhY2NlbnRQb29sID0gc2FtcGxlcy5maWx0ZXIoKHMpID0+IHMubCA+PSAuMTggJiYgcy5sIDw9IC44OCAmJiBzLmMgPj0gLjAyKS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMgfHwgTWF0aC5hYnMoYi5sIC0gLjU1KSAtIE1hdGguYWJzKGEubCAtIC41NSkpO1xuXHRjb25zdCBwb29sID0gYWNjZW50UG9vbC5sZW5ndGggPyBhY2NlbnRQb29sIDogWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGIuYyAtIGEuYyk7XG5cdGNvbnN0IHByaW1hcnkgPSBwb29sWzBdO1xuXHRpZiAoIXByaW1hcnkpIHJldHVybiBudWxsO1xuXHRjb25zdCBodWVEaXN0ID0gKGEsIGIpID0+IHtcblx0XHRjb25zdCBkID0gTWF0aC5hYnMoYSAtIGIpICUgMzYwO1xuXHRcdHJldHVybiBkID4gMTgwID8gMzYwIC0gZCA6IGQ7XG5cdH07XG5cdGNvbnN0IHBpY2tOZXh0ID0gKHVzZWQpID0+IHtcblx0XHRjb25zdCByZXN0ID0gcG9vbC5maWx0ZXIoKHMpID0+ICF1c2VkLmluY2x1ZGVzKHMpKTtcblx0XHRpZiAoIXJlc3QubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBiYXNlID0gdXNlZFt1c2VkLmxlbmd0aCAtIDFdID8/IHByaW1hcnk7XG5cdFx0XHRjb25zdCBudWRnZWQgPSBmb3JtYXRIZXgoe1xuXHRcdFx0XHRtb2RlOiBcIm9rbGNoXCIsXG5cdFx0XHRcdGw6IE1hdGgubWluKC44NSwgTWF0aC5tYXgoLjIsIGJhc2UubCArICh1c2VkLmxlbmd0aCA9PT0gMSA/IC0uMTIgOiAuMSkpKSxcblx0XHRcdFx0YzogTWF0aC5tYXgoLjA0LCBiYXNlLmMgKiAuODUpLFxuXHRcdFx0XHRoOiBiYXNlLmhcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uYmFzZSxcblx0XHRcdFx0aGV4OiBudWRnZWQgfHwgYmFzZS5oZXgsXG5cdFx0XHRcdGw6IGJhc2UubFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIFsuLi5yZXN0XS5zb3J0KChhLCBiKSA9PiBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChiLmgsIHUuaCkpKSAtIE1hdGgubWluKC4uLnVzZWQubWFwKCh1KSA9PiBodWVEaXN0KGEuaCwgdS5oKSkpIHx8IGIuYyAtIGEuYylbMF0gPz8gcmVzdFswXTtcblx0fTtcblx0Y29uc3Qgc2Vjb25kYXJ5ID0gcGlja05leHQoW3ByaW1hcnldKTtcblx0Y29uc3QgdGVydGlhcnkgPSBwaWNrTmV4dChbcHJpbWFyeSwgc2Vjb25kYXJ5XSk7XG5cdHJldHVybiB7XG5cdFx0cHJpbWFyeTogcHJpbWFyeS5oZXgsXG5cdFx0c2Vjb25kYXJ5OiBzZWNvbmRhcnkuaGV4LFxuXHRcdHRlcnRpYXJ5OiB0ZXJ0aWFyeS5oZXhcblx0fTtcbn07XG52YXIgdGhlbWVIb3N0cyA9ICgpID0+IHtcblx0Y29uc3Qgbm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRub2Rlcy5hZGQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbnYtc2hlbGwtcm9vdCwgLndmLWRlbW8tcm9vdCwgdWktd2luZG93XCIpLmZvckVhY2goKGVsKSA9PiBub2Rlcy5hZGQoZWwpKTtcblx0cmV0dXJuIFsuLi5ub2Rlc107XG59O1xudmFyIHdhbGxwYXBlclNlZWRzTWF5UGFpbnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB0cnVlO1xuXHRjb25zdCBzcmMgPSBTdHJpbmcoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQuY29sb3JTb3VyY2UgfHwgXCJcIik7XG5cdGlmICghc3JjKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIHNyYyA9PT0gXCJ3YWxscGFwZXJcIiB8fCBzcmMgPT09IFwic3BlZWQtZGlhbFwiIHx8IHNyYyA9PT0gXCJzeXN0ZW0td2FsbHBhcGVyXCI7XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyA9IChzZWVkcykgPT4ge1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzZWVkcykpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBSSU1BUllfU1RPUkFHRV9LRVksIHNlZWRzLnByaW1hcnkpO1xuXHR9IGNhdGNoIHt9XG5cdGlmICghd2FsbHBhcGVyU2VlZHNNYXlQYWludCgpKSByZXR1cm47XG5cdGZvciAoY29uc3QgaG9zdCBvZiB0aGVtZUhvc3RzKCkpIGZvciAoY29uc3QgW3Byb3AsIGtleV0gb2YgU0VFRF9QUk9QUykgaG9zdC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBzZWVkc1trZXldKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXByaW1hcnlcIiwgc2VlZHMucHJpbWFyeSk7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJhc2UtY29sb3JcIiwgc2VlZHMucHJpbWFyeSk7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXNlY29uZGFyeVwiLCBzZWVkcy5zZWNvbmRhcnkpO1xuXHRcdGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci10ZXJ0aWFyeVwiLCBzZWVkcy50ZXJ0aWFyeSk7XG5cdH0pO1xuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInUyLXRoZW1lLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdHNvdXJjZTogXCJ3YWxscGFwZXJcIixcblx0XHRzZWVkc1xuXHR9IH0pKTtcbn07XG52YXIgbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZKTtcblx0XHRpZiAoIXJhdykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpO1xuXHRcdGlmICghcGFyc2VkPy5wcmltYXJ5IHx8ICFwYXJzZWQ/LnNlY29uZGFyeSB8fCAhcGFyc2VkPy50ZXJ0aWFyeSkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgYXBwbHlUaGVtZUZyb21XYWxscGFwZXIgPSBhc3luYyAoaW1nVVJMLCBvcHRzKSA9PiB7XG5cdGNvbnN0IHNyY0tleSA9IHR5cGVvZiBpbWdVUkwgPT09IFwic3RyaW5nXCIgPyBpbWdVUkwuc2xpY2UoMCwgMjA0OCkgOiBgYmxvYjoke2ltZ1VSTC5uYW1lIHx8IFwid2FsbHBhcGVyXCJ9OiR7aW1nVVJMLnNpemV9YDtcblx0aWYgKCFvcHRzPy5mb3JjZSkgdHJ5IHtcblx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1VSTF9LRVkpID09PSBzcmNLZXkpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRjb25zdCBjZW50cm9pZHMgPSBhd2FpdCBnZXREb21pbmFudENvbG9ycyhpbWdVUkwpO1xuXHRcdGNvbnN0IHNlZWRzID0gcmFua1dhbGxwYXBlclNlZWRzKGNlbnRyb2lkcyk7XG5cdFx0aWYgKCFzZWVkcykgcmV0dXJuIG51bGw7XG5cdFx0YXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKHNlZWRzKTtcblx0XHR0cnkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oV0FMTFBBUEVSX1VSTF9LRVksIHNyY0tleSk7XG5cdFx0fSBjYXRjaCB7fVxuXHRcdHJldHVybiBzZWVkcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIGZhaWxlZFwiLCBlcnIpO1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRpZiAoY2FjaGVkKSBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9jYW52YXMvQ2FudmFzLnRzXG52YXIgYmxvYkltYWdlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZGVsYXllZCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKFtdKTtcbnZhciBzaGVkdWxlciA9IG1ha2VSQUZDeWNsZSgpO1xudmFyIGdldEltZ1dpZHRoID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsV2lkdGggfHwgaW1nPy53aWR0aCB8fCAxO1xufTtcbnZhciBnZXRJbWdIZWlnaHQgPSAoaW1nKSA9PiB7XG5cdHJldHVybiBpbWc/Lm5hdHVyYWxIZWlnaHQgfHwgaW1nPy5oZWlnaHQgfHwgMTtcbn07XG52YXIgY3JlYXRlMmRDb250ZXh0ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBiYXNlID0ge1xuXHRcdGFscGhhOiB0cnVlLFxuXHRcdGRlc3luY2hyb25pemVkOiB0cnVlLFxuXHRcdHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlXG5cdH07XG5cdGZvciAoY29uc3QgY29sb3JTcGFjZSBvZiBbXG5cdFx0XCJyZWMyMTAwLWhsZ1wiLFxuXHRcdFwiZGlzcGxheS1wM1wiLFxuXHRcdFwic3JnYlwiXG5cdF0pIHRyeSB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7XG5cdFx0XHQuLi5iYXNlLFxuXHRcdFx0Y29sb3JTcGFjZVxuXHRcdH0pO1xuXHRcdGlmIChjdHgpIHJldHVybiBjdHg7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRyZXR1cm4gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCBiYXNlKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH1cbn07XG52YXIgY2FsbEJ5RnJhbWUgPSAocG9pbnRlcklkLCBjYikgPT4ge1xuXHRkZWxheWVkLnNldChwb2ludGVySWQsIGNiKTtcbn07XG52YXIgY292ZXIgPSAoY3R4LCBpbWcsIHNjYWxlID0gMSwgcG9ydCwgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBjdHguY2FudmFzO1xuXHRjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblx0Y3R4LnJvdGF0ZSgoLW9yaWVudCB8fCAwKSAqIChNYXRoLlBJICogLjUpKTtcblx0Y3R4LnJvdGF0ZSgoMSAtIHBvcnQpICogKE1hdGguUEkgLyAyKSk7XG5cdGN0eC50cmFuc2xhdGUoLShnZXRJbWdXaWR0aChpbWcpIC8gMikgKiBzY2FsZSwgLShnZXRJbWdIZWlnaHQoaW1nKSAvIDIpICogc2NhbGUpO1xufTtcbnZhciBjcmVhdGVJbWFnZUJpdG1hcENhY2hlID0gKGJsb2IpID0+IHtcblx0aWYgKCFibG9iSW1hZ2VNYXAuaGFzKGJsb2IpICYmIChibG9iIGluc3RhbmNlb2YgQmxvYiB8fCBibG9iIGluc3RhbmNlb2YgRmlsZSB8fCBibG9iIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzIHx8IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCB8fCBibG9iIGluc3RhbmNlb2YgSW1hZ2UpKSB7XG5cdFx0Y29uc3QgcGVuZGluZyA9IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGJsb2JJbWFnZU1hcC5kZWxldGUoYmxvYik7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdFx0YmxvYkltYWdlTWFwLnNldChibG9iLCBwZW5kaW5nKTtcblx0fVxuXHRyZXR1cm4gYmxvYkltYWdlTWFwLmdldChibG9iKTtcbn07XG52YXIgYmluZENhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5iaW5kQ2FjaGVcIik7XG5nbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRDYWNoZSA9IGdsb2JhbFRoaXNbYmluZENhY2hlU3ltYm9sXTtcbnZhciBiaW5kQ2FjaGVkID0gKGNiLCBjdHgpID0+IHtcblx0Y29uc3QgY2FjaGVkID0gYmluZENhY2hlLmdldChjYik7XG5cdGlmICh0eXBlb2YgY2FjaGVkID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjYWNoZWQ7XG5cdGNvbnN0IGJvdW5kID0gY2IuYmluZChjdHgpO1xuXHRiaW5kQ2FjaGUuc2V0KGNiLCBib3VuZCk7XG5cdHJldHVybiBib3VuZDtcbn07XG52YXIgVUlDYW52YXMgPSBudWxsO1xuaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiKSBVSUNhbnZhcyA9IGNsYXNzIFVJQ2FudmFzIGV4dGVuZHMgSFRNTENhbnZhc0VsZW1lbnQge1xuXHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xuXHRcdFwiZGF0YS1zcmNcIixcblx0XHRcImRhdGEtb3JpZW50XCIsXG5cdFx0XCJvcmllbnRcIlxuXHRdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG5cdCNzaXplID0gWzEsIDFdO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdGdldCAjb3JpZW50KCkge1xuXHRcdGNvbnN0IHJhdyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPz8gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgPz8gXCIwXCI7XG5cdFx0Y29uc3QgbiA9IE51bWJlci5wYXJzZUludChyYXcsIDEwKTtcblx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG5cdH1cblx0c2V0ICNvcmllbnQodmFsdWUpIHtcblx0XHRjb25zdCBzID0gU3RyaW5nKHZhbHVlKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHR9XG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09IFwiZGF0YS1zcmNcIikgdGhpcy4jcHJlbG9hZChuZXdWYWx1ZSk7XG5cdFx0aWYgKG5hbWUgPT0gXCJkYXRhLW9yaWVudFwiIHx8IG5hbWUgPT0gXCJvcmllbnRcIikgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1pbmxpbmUtc2l6ZVwiLCBcIm1pbigxMDAlLCBtaW4oMTAwY3FpLCAxMDBkdmkpKVwiKTtcblx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxYiwgMTAwZHZiKSlcIik7XG5cdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy53aWR0aCB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy5oZWlnaHQgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0dGhpcy4jcHJlbG9hZCh0aGlzLiNsb2FkaW5nID0gdGhpcy5kYXRhc2V0LnNyYyB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHRpZiAodGhpcy5pbWFnZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy53aWR0aCB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy5oZWlnaHQgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0XHRpZiAob2xkPy5bMF0gIT0gdGhpcy4jc2l6ZVswXSB8fCBvbGQ/LlsxXSAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHRcdH07XG5cdFx0c2hlZHVsZXI/LnNoZWR1bGU/LigoKSA9PiB7XG5cdFx0XHR0aGlzLmN0eCA9IGNyZWF0ZTJkQ29udGV4dChjYW52YXMpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jdHg/LmNvbmZpZ3VyZUhpZ2hEeW5hbWljUmFuZ2U/Lih7IG1vZGU6IFwiZXh0ZW5kZWRcIiB9KTtcblx0XHRcdFx0Y2FudmFzPy5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR0aGlzLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1LWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInUyLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInVpLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxaSwgMTAwZHZpKSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxYiwgMTAwZHZiKSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiZHluYW1pYy1yYW5nZS1saW1pdFwiLCBcIm5vLWxpbWl0XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHRmaXhTaXplKCk7XG5cdFx0XHRuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gZW50cnk/LmRldmljZVBpeGVsQ29udGVudEJveFNpemU/LlswXTtcblx0XHRcdFx0XHRpZiAoYm94KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0XHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1heChib3guaW5saW5lU2l6ZSB8fCB0aGlzLndpZHRoLCAxKSwgTWF0aC5tYXgoYm94LmJsb2NrU2l6ZSB8fCB0aGlzLmhlaWdodCwgMSldO1xuXHRcdFx0XHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLm9ic2VydmUodGhpcywgeyBib3g6IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCIgfSk7XG5cdFx0XHR0aGlzLiNwcmVsb2FkKHRoaXMuI2xvYWRpbmcgPSB0aGlzLmRhdGFzZXQuc3JjIHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHR9KTtcblx0fVxuXHRhc3luYyAkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJlYWR5IHx8PSB0aGlzLiNsb2FkaW5nO1xuXHRcdGNvbnN0IGltZyA9IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCA/IGJsb2IgOiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlKGJsb2IpLmNhdGNoKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHRpZiAoaW1nICYmIHJlYWR5ID09IHRoaXMuI2xvYWRpbmcpIHtcblx0XHRcdHRoaXMuaW1hZ2UgPSBpbWc7XG5cdFx0XHR0aGlzLiNyZW5kZXIocmVhZHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gYmxvYjtcblx0fVxuXHQkcmVuZGVyUGFzcyh3aGF0SXNSZWFkeSkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMsIGN0eCA9IHRoaXMuY3R4LCBpbWcgPSB0aGlzLmltYWdlO1xuXHRcdGlmIChpbWcgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHtcblx0XHRcdGlmICh3aGF0SXNSZWFkeSkgdGhpcy4jcmVhZHkgPSB3aGF0SXNSZWFkeTtcblx0XHRcdGlmICh0aGlzLndpZHRoICE9IHRoaXMuI3NpemVbMF0pIHRoaXMud2lkdGggPSB0aGlzLiNzaXplWzBdO1xuXHRcdFx0aWYgKHRoaXMuaGVpZ2h0ICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuaGVpZ2h0ID0gdGhpcy4jc2l6ZVsxXTtcblx0XHRcdHRoaXMuc3R5bGUuYXNwZWN0UmF0aW8gPSBgJHt0aGlzLndpZHRoIHx8IDF9IC8gJHt0aGlzLmhlaWdodCB8fCAxfWA7XG5cdFx0XHRjb25zdCBveCA9IHRoaXMuI29yaWVudCAlIDIgfHwgMDtcblx0XHRcdGNvbnN0IHBvcnQgPSBnZXRJbWdXaWR0aChpbWcpIDw9IGdldEltZ0hlaWdodChpbWcpID8gMSA6IDA7XG5cdFx0XHRjb25zdCBzY2FsZSA9IE1hdGgubWF4KGNhbnZhc1tbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVtveF1dIC8gKHBvcnQgPyBnZXRJbWdIZWlnaHQoaW1nKSA6IGdldEltZ1dpZHRoKGltZykpLCBjYW52YXNbW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1bb3hdXSAvIChwb3J0ID8gZ2V0SW1nV2lkdGgoaW1nKSA6IGdldEltZ0hlaWdodChpbWcpKSk7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0Y292ZXIoY3R4LCBpbWcsIHNjYWxlLCBwb3J0LCB0aGlzLiNvcmllbnQpO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCAqIHNjYWxlLCBpbWcuaGVpZ2h0ICogc2NhbGUpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0Y29uc3QgcmVhZHkgPSBzcmMgfHwgdGhpcy4jbG9hZGluZztcblx0XHR0aGlzLiNsb2FkaW5nID0gcmVhZHk7XG5cdFx0cmV0dXJuIGZldGNoKHNyYywge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJzcCkgPT4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShhd2FpdCByc3AuYmxvYigpLCByZWFkeSk/LmNhdGNoKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKSk/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjdHggPSB0aGlzLmN0eDtcblx0XHRpZiAodGhpcy5pbWFnZSAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgIXdoYXRJc1JlYWR5KSkgc2hlZHVsZXI/LnNoZWR1bGU/LihiaW5kQ2FjaGVkKHRoaXMuJHJlbmRlclBhc3MsIHRoaXMpKTtcblx0fVxufTtcbmVsc2UgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge31cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHt9XG5cdCR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHt9XG5cdCNvcmllbnQgPSAwO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdCNzaXplID0gWzEsIDFdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG59O1xudHJ5IHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidWktY2FudmFzXCIsIFVJQ2FudmFzLCB7IGV4dGVuZHM6IFwiY2FudmFzXCIgfSk7XG59IGNhdGNoIChlKSB7fVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvY2FudmFzL0NhbnZhcy0yLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciBjdXJyZW50T3JpZW50TnVtYmVyID0gKCkgPT4gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcbnZhciByZXZva2VMaXZlT2JqZWN0VXJsID0gKCkgPT4ge1xuXHRpZiAobGl2ZU9iamVjdFVybCAmJiBsaXZlT2JqZWN0VXJsLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgdHJ5IHtcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKGxpdmVPYmplY3RVcmwpO1xuXHR9IGNhdGNoIHt9XG5cdGxpdmVPYmplY3RVcmwgPSBudWxsO1xufTtcbnZhciBvcGVuV2FsbHBhcGVyRGIgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGlmICh0eXBlb2YgaW5kZXhlZERCID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0cmVqZWN0KC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJpbmRleGVkREIgdW5hdmFpbGFibGVcIikpO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCByZXEgPSBpbmRleGVkREIub3BlbihJREJfTkFNRSwgMSk7XG5cdHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGIgPSByZXEucmVzdWx0O1xuXHRcdGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhJREJfU1RPUkUpKSBkYi5jcmVhdGVPYmplY3RTdG9yZShJREJfU1RPUkUpO1xuXHR9O1xuXHRyZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXEucmVzdWx0KTtcblx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgb3BlbiBmYWlsZWRcIikpO1xufSk7XG52YXIgaWRiUHV0V2FsbHBhcGVyID0gYXN5bmMgKGJsb2IpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHR0eC5vYmplY3RTdG9yZShJREJfU1RPUkUpLnB1dChibG9iLCBJREJfS0VZKTtcblx0XHRcdHR4Lm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG5cdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgcHV0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBpZGJHZXRXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHJlcSA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShJREJfU1RPUkUpLmdldChJREJfS0VZKTtcblx0XHRcdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHYgPSByZXEucmVzdWx0O1xuXHRcdFx0XHRyZXNvbHZlKHYgaW5zdGFuY2VvZiBCbG9iID8gdiA6IG51bGwpO1xuXHRcdFx0fTtcblx0XHRcdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIGdldCBmYWlsZWRcIikpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRiLmNsb3NlKCk7XG5cdH1cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0dHJ5IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXQUxMUEFQRVJfU1RPUkFHRV9LRVksIHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIGlzSW5saW5lUGF5bG9hZCA9ICh1cmwpID0+IHVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikgfHwgdXJsLnN0YXJ0c1dpdGgoXCJibG9iOlwiKTtcbnZhciByZXNvbHZlQXBwV2FsbHBhcGVyVXJsID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwb2ludGVyID0gcmVhZFN0b3JhZ2VQb2ludGVyKCk7XG5cdGlmIChwb2ludGVyID09PSBcImlkYjpycy13YWxscGFwZXJcIiB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJpZGI6XCIpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCBpZGJHZXRXYWxscGFwZXIoKTtcblx0XHRcdGlmIChibG9iKSB7XG5cdFx0XHRcdHJldm9rZUxpdmVPYmplY3RVcmwoKTtcblx0XHRcdFx0bGl2ZU9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHR9XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRpZiAocG9pbnRlci5zdGFydHNXaXRoKFwiZGF0YTpcIikgJiYgcG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMpIHRyeSB7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdGlmIChibG9iKSB7XG5cdFx0XHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdFx0XHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHRcdFx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIgPSAoKSA9PiByZWFkU3RvcmFnZVBvaW50ZXIoKTtcbnZhciBzeW5jQ2FudmFzT3JpZW50ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBhcHBseSA9ICgpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSAhPT0gcykgY2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGlmIChjYW52YXMuZ2V0QXR0cmlidXRlKFwib3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5vcmllbnQgPSBuO1xuXHR9O1xuXHRhcHBseSgpO1xuXHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoYXBwbHkpO1xufTtcbnZhciBzeW5jQXBwV2FsbHBhcGVyT3JpZW50ID0gKCkgPT4ge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXNbaXM9XFxcInVpLWNhbnZhc1xcXCJdLCBbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhcy51aS1jYW52YXNcIikuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y29uc3QgbiA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRjb25zdCBzID0gU3RyaW5nKG4pO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIHMpO1xuXHR9KTtcbn07XG52YXIgcmVmcmVzaEFwcFdhbGxwYXBlclBhaW50ID0gKCkgPT4ge1xuXHRyZXNvbHZlQXBwV2FsbHBhcGVyVXJsKCkudGhlbigodXJsKSA9PiB7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdFx0c3luY0FwcFdhbGxwYXBlck9yaWVudCgpO1xuXHR9KTtcbn07XG52YXIgc3luY0dsb3dUb1RoZW1lID0gKGdsb3cpID0+IHtcblx0Y29uc3QgcHJpbWFyeSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1jb2xvci1wcmltYXJ5XCIpLnRyaW0oKSB8fCBcIiM1Yjg2ZWJcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kID0gYHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDIwJSwgY29sb3ItbWl4KGluIG9rbGFiLCAke3ByaW1hcnl9IDQ1JSwgdHJhbnNwYXJlbnQpIDAlLCB0cmFuc3BhcmVudCA0MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc1JSA3MiUsIGNvbG9yLW1peChpbiBva2xhYiwgJHtwcmltYXJ5fSAzNSUsIHRyYW5zcGFyZW50KSAwJSwgdHJhbnNwYXJlbnQgNDMlKWA7XG59O1xudmFyIHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyA9IChwYWludFVybCkgPT4ge1xuXHRjb25zdCBjYW52YXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKTtcblx0Y29uc3Qgb3JpZW50ID0gU3RyaW5nKGN1cnJlbnRPcmllbnROdW1iZXIoKSk7XG5cdGNhbnZhc2VzLmZvckVhY2goKGNhbnZhcykgPT4ge1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBwYWludFVybCk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBvcmllbnQpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIG9yaWVudCk7XG5cdH0pO1xufTtcbnZhciBkYXRhVXJsVG9CbG9iID0gYXN5bmMgKGRhdGFVcmwpID0+IHtcblx0cmV0dXJuIChhd2FpdCBmZXRjaChkYXRhVXJsKSkuYmxvYigpO1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiA9IGFzeW5jIChibG9iKSA9PiB7XG5cdGlmICghKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkge1xuXHRcdHNldEFwcFdhbGxwYXBlcihERUZBVUxUX1dBTExQQVBFUl9VUkwpO1xuXHRcdHJldHVybiBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdH1cblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKGxpdmVPYmplY3RVcmwpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcihsaXZlT2JqZWN0VXJsLCB7IGZvcmNlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWNhbnZhc19fZ2xvd1wiKS5mb3JFYWNoKHN5bmNHbG93VG9UaGVtZSk7XG5cdH0pO1xuXHR0cnkge1xuXHRcdGF3YWl0IGlkYlB1dFdhbGxwYXBlcihibG9iKTtcblx0XHR3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcGVyc2lzdCBmYWlsZWRcIiwgZXJyKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdGNvbnN0IGRhdGFVcmwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKFN0cmluZyhyZWFkZXIucmVzdWx0IHx8IFwiXCIpKTtcblx0XHRcdFx0cmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVhZGVyLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJyZWFkIGZhaWxlZFwiKSk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoZGF0YVVybCAmJiAhd3JpdGVTdG9yYWdlUG9pbnRlcihkYXRhVXJsKSkgY29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBsb2NhbFN0b3JhZ2UgcGVyc2lzdCBhbHNvIGZhaWxlZCAocXVvdGE/KVwiKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IFdBTExQQVBFUl9JREJfTUFSS0VSLFxuXHRcdFx0dXJsOiBsaXZlT2JqZWN0VXJsXG5cdFx0fSB9KSk7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIGluaXRpYWxpemVBcHBDYW52YXNMYXllciA9IChjb250YWluZXIpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGNvbnRhaW5lcjtcblx0cm9vdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblx0cm9vdC5kYXRhc2V0LmFwcExheWVyID0gXCJjYW52YXNcIjtcblx0cm9vdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0cm9vdC5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRyb290LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAxMiUsICMxYjJhNDUgMCUsICMwZjE3MjggNDIlLCAjMDYwOTEwIDEwMCUpXCI7XG5cdGNvbnN0IGdsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRnbG93LmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fZ2xvd1wiO1xuXHRnbG93LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRnbG93LnN0eWxlLmluc2V0ID0gXCItMjAlXCI7XG5cdGdsb3cuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmQgPSBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDIwJSwgcmdiYSgxNDUsMTg1LDI1NSwwLjQ1KSAwJSwgdHJhbnNwYXJlbnQgNDAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3NSUgNzIlLCByZ2JhKDkxLDEzNCwyMzUsMC4zNSkgMCUsIHRyYW5zcGFyZW50IDQzJSlcIjtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7IGlzOiBcInVpLWNhbnZhc1wiIH0pO1xuXHRjYW52YXMuY2xhc3NOYW1lID0gXCJhcHAtY2FudmFzX19pbWFnZSB1aS1jYW52YXNcIjtcblx0Y2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRjYW52YXMuc3R5bGUuaW5zZXQgPSBcIjBcIjtcblx0Y2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0Y2FudmFzLnN0eWxlLmlubGluZVNpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLmJsb2NrU2l6ZSA9IFwiMTAwJVwiO1xuXHRjYW52YXMuc3R5bGUubWF4SW5saW5lU2l6ZSA9IFwiMTAwJVwiO1xuXHRjYW52YXMuc3R5bGUubWF4QmxvY2tTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cdGNhbnZhcy5zdHlsZS5taXhCbGVuZE1vZGUgPSBcIm5vcm1hbFwiO1xuXHRjYW52YXMuc2V0QXR0cmlidXRlKFwiaXNcIiwgXCJ1aS1jYW52YXNcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImR5bmFtaWMtcmFuZ2UtbGltaXRcIiwgXCJuby1saW1pdFwiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiY29sb3Itc3BhY2VcIiwgXCJkaXNwbGF5LXAzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIiwgXCJpbXBvcnRhbnRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRyb290LmFwcGVuZChnbG93LCBjYW52YXMpO1xuXHRjb25zdCBwb2ludGVyID0gcmVhZFN0b3JhZ2VQb2ludGVyKCk7XG5cdGNvbnN0IGNvbGRVcmwgPSBwb2ludGVyID09PSBcImlkYjpycy13YWxscGFwZXJcIiB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJpZGI6XCIpIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImRhdGE6XCIpID8gREVGQVVMVF9XQUxMUEFQRVJfVVJMIDogcG9pbnRlcjtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIGNvbGRVcmwpO1xuXHRjb25zdCBkaXNwb3NlT3JpZW50ID0gc3luY0NhbnZhc09yaWVudChjYW52YXMpO1xuXHRyZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSgpO1xuXHRzeW5jR2xvd1RvVGhlbWUoZ2xvdyk7XG5cdHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKS50aGVuKCh3YWxscGFwZXIpID0+IHtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgd2FsbHBhcGVyKTtcblx0XHRzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdFx0cmV0dXJuIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKHdhbGxwYXBlcikudGhlbigoKSA9PiBzeW5jR2xvd1RvVGhlbWUoZ2xvdykpO1xuXHR9KTtcblx0cmV0dXJuIHtcblx0XHRyb290LFxuXHRcdGNhbnZhcyxcblx0XHRnbG93LFxuXHRcdGRpc3Bvc2VPcmllbnRcblx0fTtcbn07XG52YXIgc2V0QXBwV2FsbHBhcGVyID0gKHdhbGxwYXBlclVybCkgPT4ge1xuXHRjb25zdCB2YWx1ZSA9IFN0cmluZyh3YWxscGFwZXJVcmwgfHwgXCJcIikudHJpbSgpIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0aWYgKGlzSW5saW5lUGF5bG9hZCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID4gTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTKSB7XG5cdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSB2YWx1ZS5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBhd2FpdCAoYXdhaXQgZmV0Y2godmFsdWUpKS5ibG9iKCkgOiBhd2FpdCBkYXRhVXJsVG9CbG9iKHZhbHVlKTtcblx0XHRcdFx0YXdhaXQgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IoYmxvYik7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHNldEFwcFdhbGxwYXBlciBpbmxpbmUgcGVyc2lzdCBmYWlsZWRcIiwgZXJyKTtcblx0XHRcdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHZhbHVlKTtcblx0XHRcdFx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIodmFsdWUsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWRiQ2xlYXJXYWxscGFwZXIoKTtcblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRpZiAoIXdyaXRlU3RvcmFnZVBvaW50ZXIodmFsdWUpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIHBvaW50ZXIgd3JpdGUgZmFpbGVkXCIpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModmFsdWUpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih2YWx1ZSwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IHZhbHVlLFxuXHRcdFx0dXJsOiB2YWx1ZVxuXHRcdH0gfSkpO1xuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IFVJQ2FudmFzLCBXQUxMUEFQRVJfSURCX01BUktFUiwgV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVksIFdBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVksIFdBTExQQVBFUl9USEVNRV9TVE9SQUdFX0tFWSwgYXBwbHlUaGVtZUZyb21XYWxscGFwZXIsIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcywgYmluZENhY2hlLCBjYWxsQnlGcmFtZSwgY292ZXIsIGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUsIGVsZWN0cm9uQVBJLCBnZXREb21pbmFudENvbG9ycywgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIsIGluaXRpYWxpemVBcHBDYW52YXNMYXllciwgbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lLCBxdWFsaXR5TW9kZSwgcmFua1dhbGxwYXBlclNlZWRzLCByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQsIHJlc29sdmVBcHBXYWxscGFwZXJVcmwsIHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlLCBzZXRBcHBXYWxscGFwZXIsIHNldEFwcFdhbGxwYXBlckZyb21CbG9iLCBzeW5jQXBwV2FsbHBhcGVyT3JpZW50LCBzeW5jQ2FudmFzT3JpZW50LCB0aGVtZUhvc3RzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyx5QkFBQUEsSUFBdUIsZ0JBQUFDLElBQWMsd0JBQUFDLElBQXNCLHdCQUFBQyxVQUE0QjtBQUdoRyxJQUFJQyxLQUFjLGtCQUNkQyxLQUFjLEVBQUUsTUFBUTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFDWCxFQUFFLEdBSUVDLEtBQWMsQ0FBQ0MsR0FBT0MsTUFBUTtBQUNqQyxNQUFJLE9BQU9ELEtBQVUsVUFDckI7QUFBQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsSUFBSSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzFDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxJQUFRLE9BQU87QUFBQSxNQUNyQyxJQUFJQSxJQUFRLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsSUFDdEM7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzNDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzFDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxJQUFRLE9BQU87QUFBQSxNQUNyQyxRQUFRQSxJQUFRLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsSUFDMUM7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUN4QixJQUFJQSxJQUFRLE9BQU87QUFBQSxJQUNwQjtBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDeEIsUUFBUUEsSUFBUSxPQUFPO0FBQUEsSUFDeEI7QUFBQTtBQUNELEdBSUlFLEtBQVE7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLHNCQUFzQjtBQUFBLEVBQ3RCLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFB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QixFQUFlO0FBQUEsUUFDdkUsQ0FBQztBQUFBLE1BQ0Y7QUFBQSxJQUNELEdBQUc7QUFDSDtBQUFBLEVBQ0Q7QUFDQSxFQUFBYixHQUFrQixHQUNsQlQsR0FBb0IsR0FDZlcsR0FBb0I5Z0IsQ0FBSyxLQUFHLFFBQVEsS0FBSyw2Q0FBNkMsR0FDM0Z3aEIsR0FBeUJ4aEIsQ0FBSyxHQUM5QnljLEdBQXdCemMsR0FBTyxFQUFFLE9BQU8sR0FBSyxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzFELGFBQVMsaUJBQWlCLG1CQUFtQixFQUFFLFFBQVF5aEIsRUFBZTtBQUFBLEVBQ3ZFLENBQUM7QUFDRCxNQUFJO0FBQ0gsZUFBVyxnQkFBZ0IsSUFBSSxZQUFZLHlCQUF5QixFQUFFLFFBQVE7QUFBQSxNQUM3RSxTQUFTemhCO0FBQUEsTUFDVCxLQUFLQTtBQUFBLElBQ04sRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUFDO0FBQ1Y7IiwKICAibmFtZXMiOiBbImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJtYWtlUkFGQ3ljbGUiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAiZWxlY3Ryb25BUEkiLCAicXVhbGl0eU1vZGUiLCAicGFyc2VOdW1iZXIiLCAiY29sb3IiLCAibGVuIiwgIm5hbWVkIiwgInBhcnNlTmFtZWQiLCAiaGV4IiwgInBhcnNlSGV4IiwgIm1hdGNoIiwgIm51bSQxIiwgIm51bV9ub25lIiwgInBlciIsICJwZXJfbm9uZSIsICJudW1fcGVyIiwgIm51bV9wZXJfbm9uZSIsICJodWUkMSIsICJodWVfbm9uZSIsICJjIiwgInJ4X251bV9wZXJfbm9uZSIsICJyZ2JfbnVtX29sZCIsICJyZ2JfcGVyX29sZCIsICJwYXJzZVJnYkxlZ2FjeSIsICJyZXMiLCAicHJlcGFyZSIsICJtb2RlIiwgInBhcnNlIiwgImNvbnZlcnRlciIsICJ0YXJnZXRfbW9kZSIsICJjb252ZXJ0ZXJzIiwgIm1vZGVzIiwgInBhcnNlcnMiLCAiY29sb3JQcm9maWxlcyIsICJpZGVudGl0eSIsICJ2IiwgInVzZU1vZGUiLCAiZGVmaW5pdGlvbiIsICJrIiwgImNoYW5uZWwiLCAicGFyc2VyIiwgInVzZVBhcnNlciIsICJnZXRNb2RlIiwgIklkZW50U3RhcnRDb2RlUG9pbnQiLCAiSWRlbnRDb2RlUG9pbnQiLCAiVG9rIiwgIl9pIiwgImlzX251bSIsICJjaGFycyIsICJjaCIsICJjaDEiLCAiaXNfaWRlbnQiLCAiaHVlbml0cyIsICJudW0iLCAidmFsdWUiLCAiZGlnaXRzIiwgImlkIiwgImlkZW50IiwgImlkZW50bGlrZSIsICJ0b2tlbml6ZSIsICJzdHIiLCAidG9rZW5zIiwgImFscGhhIiwgInBhcnNlQ29sb3JTeW50YXgiLCAidG9rZW4iLCAiY29vcmRzIiwgImNvbnN1bWVDb29yZHMiLCAiY2hhbm5lbHMiLCAiaWkiLCAiaW5jbHVkZUh1ZSIsICJwYXJzZU1vZGVyblN5bnRheCIsICJwYXJzZWQiLCAicmVzdWx0IiwgInBhcnNlUmdiIiwgInIiLCAiZyIsICJiIiwgInBhcnNlVHJhbnNwYXJlbnQiLCAibGVycCIsICJhIiwgInQiLCAiZ2V0X2NsYXNzZXMiLCAiYXJyIiwgImNsYXNzZXMiLCAiaSIsICJpbnRlcnBvbGF0b3JQaWVjZXdpc2UiLCAiaW50ZXJwb2xhdG9yIiwgImNscyIsICJpZHgiLCAicGFpciIsICJpbnRlcnBvbGF0b3JMaW5lYXIiLCAiZml4dXBBbHBoYSIsICJzb21lX2RlZmluZWQiLCAiZGVmaW5pdGlvbiQyNyIsICJsaW5lYXJpemUkMiIsICJjb252ZXJ0QTk4VG9YeXo2NSIsICJhOTgiLCAiZ2FtbWEkMiIsICJjb252ZXJ0WHl6NjVUb0E5OCIsICJ4IiwgInkiLCAieiIsICJmbiQzIiwgImFicyIsICJjb252ZXJ0UmdiVG9McmdiIiwgImNvbnZlcnRSZ2JUb1h5ejY1IiwgInJnYiIsICJmbiQyIiwgImNvbnZlcnRMcmdiVG9SZ2IiLCAiY29udmVydFh5ejY1VG9SZ2IiLCAiZGVmaW5pdGlvbiQyNiIsICJub3JtYWxpemVIdWUiLCAiaHVlIiwgImh1ZXMiLCAiZm4iLCAibm9ybWFsaXplZCIsICJhY2MiLCAiY3VyciIsICJmaXh1cEh1ZVNob3J0ZXIiLCAiZCIsICJNIiwgImRlZ1RvUmFkIiwgInJhZFRvRGVnIiwgIkRFIiwgIkJFIiwgIkJDQUQiLCAiY29udmVydFJnYlRvQ3ViZWhlbGl4IiwgImwiLCAiY29udmVydEN1YmVoZWxpeFRvUmdiIiwgImgiLCAicyIsICJhbXAiLCAiY29zaCIsICJzaW5oIiwgImRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIiwgInN0ZCIsICJzbXAiLCAic3RkX2giLCAic21wX2giLCAiZEgiLCAiZGlmZmVyZW5jZUh1ZU5haXZlIiwgImRpZmZlcmVuY2VIdWVDaHJvbWEiLCAiYXZlcmFnZUFuZ2xlIiwgInZhbCIsICJzdW0iLCAicmFkIiwgImFuZ2xlIiwgImRlZmluaXRpb24kMjUiLCAiY29udmVydExhYlRvTGNoIiwgImNvbnZlcnRMY2hUb0xhYiIsICJrJDIiLCAiZSQyIiwgIkQ1MCIsICJENjUiLCAiayQxIiwgImUkMSIsICJmbiQxIiwgImNvbnZlcnRMYWI2NVRvWHl6NjUiLCAiZnkiLCAiZngiLCAiZnoiLCAiY29udmVydExhYjY1VG9SZ2IiLCAibGFiIiwgImYkMSIsICJjb252ZXJ0WHl6NjVUb0xhYjY1IiwgImYwIiwgImYxIiwgImYyIiwgImNvbnZlcnRSZ2JUb0xhYjY1IiwgIs64IiwgImNvc864IiwgInNpbs64IiwgImZhY3RvciIsICJjb252ZXJ0RGxjaFRvTGFiNjUiLCAiRyIsICJlIiwgImYiLCAiY29udmVydExhYjY1VG9EbGNoIiwgImNvbnZlcnREbGFiVG9MYWI2NSIsICJjb252ZXJ0TGFiNjVUb0RsYWIiLCAiZGVmaW5pdGlvbiQyNCIsICJkZWZpbml0aW9uJDIzIiwgImNvbnZlcnRIc2lUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic2kiLCAibSIsICJkZWZpbml0aW9uJDIyIiwgImNvbnZlcnRIc2xUb1JnYiIsICJtMSIsICJtMiIsICJjb252ZXJ0UmdiVG9Ic2wiLCAiaHVlVG9EZWciLCAidW5pdCIsICJoc2xfb2xkIiwgInBhcnNlSHNsTGVnYWN5IiwgInBhcnNlSHNsIiwgImRlZmluaXRpb24kMjEiLCAiY29udmVydEhzdlRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzdiIsICJkZWZpbml0aW9uJDIwIiwgImNvbnZlcnRId2JUb1JnYiIsICJ3IiwgImNvbnZlcnRSZ2JUb0h3YiIsICJyZ2JhIiwgImhzdiIsICJQYXJzZUh3YiIsICJkZWZpbml0aW9uJDE5IiwgIk0xIiwgIk0yIiwgIkMxIiwgIkMyIiwgIkMzIiwgInRyYW5zZmVyUHFEZWNvZGUiLCAidHJhbnNmZXJQcUVuY29kZSIsICJ0b1JlbCIsICJjb252ZXJ0SXRwVG9YeXo2NSIsICJwIiwgInRvQWJzIiwgImNvbnZlcnRYeXo2NVRvSXRwIiwgImFic1giLCAiYWJzWSIsICJhYnNaIiwgImRlZmluaXRpb24kMTgiLCAicCQxIiwgImQwJDEiLCAiamFiUHFFbmNvZGUiLCAidm4iLCAiY29udmVydFh5ejY1VG9KYWIiLCAieHAiLCAieXAiLCAiZDAiLCAiamFiUHFEZWNvZGUiLCAidnAiLCAicmVsIiwgImNvbnZlcnRKYWJUb1h5ejY1IiwgImoiLCAiY29udmVydFJnYlRvSmFiIiwgImNvbnZlcnRKYWJUb1JnYiIsICJkZWZpbml0aW9uJDE3IiwgImNvbnZlcnRKYWJUb0pjaCIsICJjb252ZXJ0SmNoVG9KYWIiLCAiZGVmaW5pdGlvbiQxNiIsICJjb252ZXJ0TGFiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb1JnYiIsICJjb252ZXJ0TGFiVG9SZ2IiLCAiY29udmVydFJnYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9MYWIiLCAiY29udmVydFJnYlRvTGFiIiwgInBhcnNlTGFiIiwgImRlZmluaXRpb24kMTUiLCAiZGVmaW5pdGlvbiQxNCIsICJwYXJzZUxjaCIsICJkZWZpbml0aW9uJDEzIiwgImRlZmluaXRpb24kMTIiLCAiY29udmVydEx1dlRvTGNodXYiLCAidSIsICJjb252ZXJ0TGNodXZUb0x1diIsICJ1X2ZuJDEiLCAidl9mbiQxIiwgInVuJDEiLCAidm4kMSIsICJsX2ZuIiwgImNvbnZlcnRYeXo1MFRvTHV2IiwgInVfZm4iLCAidl9mbiIsICJ1biIsICJjb252ZXJ0THV2VG9YeXo1MCIsICJ1cCIsICJjb252ZXJ0UmdiVG9MY2h1diIsICJjb252ZXJ0TGNodXZUb1JnYiIsICJsY2h1diIsICJkZWZpbml0aW9uJDExIiwgImRlZmluaXRpb24kMTAiLCAiZGVmaW5pdGlvbiQ5IiwgImx1diIsICJjb252ZXJ0THJnYlRvT2tsYWIiLCAiTCIsICJTIiwgImNvbnZlcnRSZ2JUb09rbGFiIiwgImNvbnZlcnRPa2xhYlRvTHJnYiIsICJjb252ZXJ0T2tsYWJUb1JnYiIsICJ0b2UiLCAia18zIiwgInRvZV9pbnYiLCAiY29tcHV0ZV9tYXhfc2F0dXJhdGlvbiIsICJrMCIsICJrMSIsICJrMiIsICJrMyIsICJrNCIsICJ3bCIsICJ3bSIsICJ3cyIsICJrX2wiLCAia19tIiwgImtfcyIsICJsXyIsICJtXyIsICJzXyIsICJsX2RTIiwgIm1fZFMiLCAic19kUyIsICJsX2RTMiIsICJtX2RTMiIsICJzX2RTMiIsICJmaW5kX2N1c3AiLCAiU19jdXNwIiwgIkxfY3VzcCIsICJmaW5kX2dhbXV0X2ludGVyc2VjdGlvbiIsICJMMSIsICJMMCIsICJjdXNwIiwgImRMIiwgImRDIiwgImxfZHQiLCAibV9kdCIsICJzX2R0IiwgIkMiLCAibGR0IiwgIm1kdCIsICJzZHQiLCAibGR0MiIsICJtZHQyIiwgInNkdDIiLCAicjEiLCAicjIiLCAidV9yIiwgInRfciIsICJnMSIsICJnMiIsICJ1X2ciLCAidF9nIiwgImIxIiwgImIyIiwgInVfYiIsICJ0X2IiLCAiZ2V0X1NUX21heCIsICJhXyIsICJiXyIsICJnZXRfQ3MiLCAiQ19tYXgiLCAiU1RfbWF4IiwgIlNfbWlkIiwgIlRfbWlkIiwgIkNfYSIsICJDX2IiLCAiQ19taWQiLCAiY29udmVydE9rbGFiVG9Pa2hzbCIsICJyZXQiLCAiQ18wIiwgImtfMCIsICJrXzEiLCAia18yIiwgImNvbnZlcnRPa2hzbFRvT2tsYWIiLCAiaHNsIiwgIm1vZGVPa2hzbCIsICJjb252ZXJ0T2tsYWJUb09raHN2IiwgIlNfbWF4IiwgIlQiLCAiU18wIiwgIkxfdiIsICJDX3YiLCAiTF92dCIsICJDX3Z0IiwgInJnYl9zY2FsZSIsICJzY2FsZV9MIiwgImNvbnZlcnRPa2hzdlRvT2tsYWIiLCAiTF9uZXciLCAibW9kZU9raHN2IiwgInBhcnNlT2tsYWIiLCAiZGVmaW5pdGlvbiQ4IiwgInBhcnNlT2tsY2giLCAiZGVmaW5pdGlvbiQ3IiwgImNvbnZlcnRQM1RvWHl6NjUiLCAiY29udmVydFh5ejY1VG9QMyIsICJkZWZpbml0aW9uJDYiLCAiZ2FtbWEkMSIsICJjb252ZXJ0WHl6NTBUb1Byb3Bob3RvIiwgImxpbmVhcml6ZSQxIiwgImNvbnZlcnRQcm9waG90b1RvWHl6NTAiLCAicHJvcGhvdG8iLCAiZGVmaW5pdGlvbiQ1IiwgIs6xJDEiLCAizrIkMSIsICJnYW1tYSIsICJjb252ZXJ0WHl6NjVUb1JlYzIwMjAiLCAizrEiLCAizrIiLCAibGluZWFyaXplIiwgImNvbnZlcnRSZWMyMDIwVG9YeXo2NSIsICJyZWMyMDIwIiwgImRlZmluaXRpb24kNCIsICJiaWFzIiwgImJpYXNfY2JydCIsICJ0cmFuc2ZlciQxIiwgImNvbnZlcnRSZ2JUb1h5YiIsICJ0cmFuc2ZlciIsICJjb252ZXJ0WHliVG9SZ2IiLCAiZGVmaW5pdGlvbiQzIiwgImRlZmluaXRpb24kMiIsICJjb252ZXJ0WHl6NjVUb1h5ejUwIiwgInh5ejY1IiwgImNvbnZlcnRYeXo1MFRvWHl6NjUiLCAieHl6NTAiLCAiZGVmaW5pdGlvbiQxIiwgImNvbnZlcnRSZ2JUb1lpcSIsICJjb252ZXJ0WWlxVG9SZ2IiLCAicSIsICJwcmVjaXNpb24iLCAicm91bmQiLCAidHdvRGVjaW1hbHMiLCAiY2xhbXAiLCAiZml4dXAiLCAicmdiJDEiLCAiaHNsJDEiLCAic2VyaWFsaXplSGV4IiwgImZvcm1hdEhleCIsICJjdWJlaGVsaXgiLCAiZGxhYiIsICJkbGNoIiwgImhzaSIsICJod2IiLCAiaXRwIiwgImphYiIsICJqY2giLCAibGFiNjUiLCAibGNoIiwgImxjaDY1IiwgImxyZ2IiLCAib2toc2wiLCAib2toc3YiLCAib2tsYWIiLCAib2tsY2giLCAicDMiLCAieHliIiwgInlpcSIsICJzb3J0Q29sb3JzIiwgImxpc3QiLCAiY3JpdGVyaWEiLCAiZXVjbGlkZWFuRGlzdGFuY2UiLCAiY29sb3IxIiwgImNvbG9yMiIsICJtYWtlQ2x1c3RlcnMiLCAiZGF0YSIsICJjZW50cm9pZHMiLCAiY2x1c3RlcnMiLCAicG9pbnQiLCAibWluRGlzdGFuY2UiLCAibWluRGlzdGFuY2VDbHVzdGVySW5kZXgiLCAiY2VudHJvaWQiLCAiaW5kZXgiLCAiZGlzdGFuY2UiLCAiY29tcHV0ZU1lYW4iLCAicG9pbnRzIiwgImtNZWFucyIsICJpbml0aWFsaXplQ2VudHJvaWRzIiwgIm1heEl0ZXJhdGlvbnMiLCAiaXRlcmF0aW9uIiwgIm5ld0NlbnRyb2lkcyIsICJjbHVzdGVyIiwgIm5ld0NlbnRyb2lkIiwgImRpc3RhbmNlcyIsICJ0b3RhbERpc3RhbmNlIiwgInByb2JhYmlsaXRpZXMiLCAiY3VtdWxhdGl2ZVByb2JhYmlsaXR5IiwgInJhbmRvbVZhbHVlIiwgInByZUJsdXJQaXhlbHMiLCAiaW1nVVJMIiwgImJsb2IiLCAiYml0bWFwIiwgIm9mZnNldCIsICJjdHgiLCAiZ2V0Q2x1c3RlckltYWdlRGF0YSIsICJhbGxDb3VudCIsICJkdiIsICJmcDMyIiwgImk0IiwgImdldERvbWluYW50Q29sb3JzIiwgIldBTExQQVBFUl9USEVNRV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZIiwgIlRIRU1FX1NUT1JBR0VfS0VZIiwgIlBSSU1BUllfU1RPUkFHRV9LRVkiLCAiV0FMTFBBUEVSX1VSTF9LRVkiLCAiU0VFRF9QUk9QUyIsICJyZ2JUb1NhbXBsZSIsICJvayIsICJyYW5rV2FsbHBhcGVyU2VlZHMiLCAic2FtcGxlcyIsICJhY2NlbnRQb29sIiwgInBvb2wiLCAicHJpbWFyeSIsICJodWVEaXN0IiwgInBpY2tOZXh0IiwgInVzZWQiLCAicmVzdCIsICJiYXNlIiwgIm51ZGdlZCIsICJzZWNvbmRhcnkiLCAidGVydGlhcnkiLCAidGhlbWVIb3N0cyIsICJub2RlcyIsICJlbCIsICJ3YWxscGFwZXJTZWVkc01heVBhaW50IiwgInNyYyIsICJhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMiLCAic2VlZHMiLCAiaG9zdCIsICJwcm9wIiwgImtleSIsICJsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUiLCAicmF3IiwgImFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIiwgIm9wdHMiLCAic3JjS2V5IiwgImNhY2hlZCIsICJlcnIiLCAicmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUiLCAiYmxvYkltYWdlTWFwIiwgImRlbGF5ZWQiLCAic2hlZHVsZXIiLCAiZ2V0SW1nV2lkdGgiLCAiaW1nIiwgImdldEltZ0hlaWdodCIsICJjcmVhdGUyZENvbnRleHQiLCAiY2FudmFzIiwgImNvbG9yU3BhY2UiLCAiY2FsbEJ5RnJhbWUiLCAicG9pbnRlcklkIiwgImNiIiwgImNvdmVyIiwgInNjYWxlIiwgInBvcnQiLCAib3JpZW50IiwgImNyZWF0ZUltYWdlQml0bWFwQ2FjaGUiLCAicGVuZGluZyIsICJiaW5kQ2FjaGVTeW1ib2wiLCAiYmluZENhY2hlIiwgImJpbmRDYWNoZWQiLCAiYm91bmQiLCAiVUlDYW52YXMiLCAiI3NpemUiLCAiI2xvYWRpbmciLCAiI3JlYWR5IiwgIiNvcmllbnQiLCAibiIsICJuYW1lIiwgIl8iLCAibmV3VmFsdWUiLCAiI3ByZWxvYWQiLCAiI3JlbmRlciIsICJwYXJlbnQiLCAiZml4U2l6ZSIsICJvbGQiLCAiZW50cmllcyIsICJlbnRyeSIsICJib3giLCAicmVhZHkiLCAid2hhdElzUmVhZHkiLCAib3giLCAicnNwIiwgIldBTExQQVBFUl9TVE9SQUdFX0tFWSIsICJERUZBVUxUX1dBTExQQVBFUl9VUkwiLCAiV0FMTFBBUEVSX0lEQl9NQVJLRVIiLCAiSURCX05BTUUiLCAiSURCX1NUT1JFIiwgIklEQl9LRVkiLCAiTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTIiwgImxpdmVPYmplY3RVcmwiLCAiY3VycmVudE9yaWVudE51bWJlciIsICJyZXZva2VMaXZlT2JqZWN0VXJsIiwgIm9wZW5XYWxscGFwZXJEYiIsICJyZXNvbHZlIiwgInJlamVjdCIsICJyZXEiLCAiZGIiLCAiaWRiUHV0V2FsbHBhcGVyIiwgInR4IiwgImlkYkdldFdhbGxwYXBlciIsICJpZGJDbGVhcldhbGxwYXBlciIsICJyZWFkU3RvcmFnZVBvaW50ZXIiLCAid3JpdGVTdG9yYWdlUG9pbnRlciIsICJpc0lubGluZVBheWxvYWQiLCAidXJsIiwgInJlc29sdmVBcHBXYWxscGFwZXJVcmwiLCAicG9pbnRlciIsICJnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciIsICJzeW5jQ2FudmFzT3JpZW50IiwgImFwcGx5IiwgInN5bmNBcHBXYWxscGFwZXJPcmllbnQiLCAicmVmcmVzaEFwcFdhbGxwYXBlclBhaW50IiwgInBhaW50V2FsbHBhcGVyT25DYW52YXNlcyIsICJzeW5jR2xvd1RvVGhlbWUiLCAiZ2xvdyIsICJwYWludFVybCIsICJjYW52YXNlcyIsICJkYXRhVXJsVG9CbG9iIiwgImRhdGFVcmwiLCAic2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IiLCAic2V0QXBwV2FsbHBhcGVyIiwgInJlYWRlciIsICJpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIiLCAiY29udGFpbmVyIiwgInJvb3QiLCAiY29sZFVybCIsICJkaXNwb3NlT3JpZW50IiwgIndhbGxwYXBlciIsICJ3YWxscGFwZXJVcmwiXQp9Cg==
