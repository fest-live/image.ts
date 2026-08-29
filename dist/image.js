import { getCorrectOrientation as oa, makeRAFCycle as la, orientationNumberMap as sa, whenAnyScreenChanges as ha } from "@fest-lib/dom";
var Yn = "electronBridge", Zn = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, xr = (e, t) => {
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
}, da = {
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
}, ca = (e) => xr(da[e.toLowerCase()], 6), ua = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, va = (e) => {
  let t;
  return (t = e.match(ua)) ? xr(parseInt(t[1], 16), t[1].length) : void 0;
}, S = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Un = `(?:${S}|none)`, ae = `${S}%`, Gn = `(?:${S}%|none)`, kt = `(?:${S}%|${S})`, fa = `(?:${S}%|${S}|none)`, pa = `(?:${S}(deg|grad|rad|turn)|${S})`, Jn = `(?:${S}(deg|grad|rad|turn)|${S}|none)`, j = "\\s*,\\s*", Kn = new RegExp("^" + fa + "$"), ma = new RegExp(`^rgba?\\(\\s*${S}${j}${S}${j}${S}\\s*(?:,\\s*${kt}\\s*)?\\)$`), ga = new RegExp(`^rgba?\\(\\s*${ae}${j}${ae}${j}${ae}\\s*(?:,\\s*${kt}\\s*)?\\)$`), ba = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(ma))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(ga))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, ya = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Ta(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, _t = (e = "rgb") => (t) => (t = ya(t, e)) !== void 0 ? t.mode === e ? t : T[t.mode][e] ? T[t.mode][e](t) : e === "rgb" ? T[t.mode].rgb(t) : T.rgb[e](T[t.mode].rgb(t)) : void 0, T = {}, kr = {}, me = [], _r = {}, Ma = (e) => e, g = (e) => (T[e.mode] = {
  ...T[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  T[t] || (T[t] = {}), T[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Ma);
}), kr[e.mode] = e, (e.parse || []).forEach((t) => {
  xa(t, e.mode);
}), _t(e.mode)), wa = (e) => kr[e], xa = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    _r[e] = t;
  } else typeof e == "function" && me.indexOf(e) < 0 && me.push(e);
}, ut = /[^\x00-\x7F]|[a-zA-Z_]/, ka = /[^\x00-\x7F]|[-\w]/, s = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, f = 0;
function de(e) {
  let t = e[f], r = e[f + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[f + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function vt(e) {
  if (f >= e.length) return !1;
  let t = e[f];
  if (ut.test(t)) return !0;
  if (t === "-") {
    if (e.length - f < 2) return !1;
    let r = e[f + 1];
    return !!(r === "-" || ut.test(r));
  }
  return !1;
}
var _a = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function te(e) {
  let t = "";
  if ((e[f] === "-" || e[f] === "+") && (t += e[f++]), t += ce(e), e[f] === "." && /\d/.test(e[f + 1]) && (t += e[f++] + ce(e)), (e[f] === "e" || e[f] === "E") && ((e[f + 1] === "-" || e[f + 1] === "+") && /\d/.test(e[f + 2]) ? t += e[f++] + e[f++] + ce(e) : /\d/.test(e[f + 1]) && (t += e[f++] + ce(e))), vt(e)) {
    let r = ge(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * _a[r]
    } : void 0;
  }
  return e[f] === "%" ? (f++, {
    type: s.Percentage,
    value: +t
  }) : {
    type: s.Number,
    value: +t
  };
}
function ce(e) {
  let t = "";
  for (; /\d/.test(e[f]); ) t += e[f++];
  return t;
}
function ge(e) {
  let t = "";
  for (; f < e.length && ka.test(e[f]); ) t += e[f++];
  return t;
}
function Pa(e) {
  let t = ge(e);
  return e[f] === "(" ? (f++, {
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
function za(e = "") {
  let t = e.trim(), r = [], a;
  for (f = 0; f < t.length; ) {
    if (a = t[f++], a === `
` || a === "	" || a === " ") {
      for (; f < t.length && (t[f] === `
` || t[f] === "	" || t[f] === " "); ) f++;
      continue;
    }
    if (a === ",") return;
    if (a === ")") {
      r.push({ type: s.ParenClose });
      continue;
    }
    if (a === "+") {
      if (f--, de(t)) {
        r.push(te(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (f--, de(t)) {
        r.push(te(t));
        continue;
      }
      if (vt(t)) {
        r.push({
          type: s.Ident,
          value: ge(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (f--, de(t)) {
        r.push(te(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; f < t.length && (t[f] === `
` || t[f] === "	" || t[f] === " "); ) f++;
      let i;
      if (de(t) && (i = te(t), i.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: i
        });
        continue;
      }
      if (vt(t) && ge(t) === "none") {
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
      f--, r.push(te(t));
      continue;
    }
    if (ut.test(a)) {
      f--, r.push(Pa(t));
      continue;
    }
    return;
  }
  return r;
}
function $a(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = _r[t.value];
  if (!r) return;
  const a = { mode: r }, i = Pr(e, !1);
  if (!i) return;
  const n = wa(r).channels;
  for (let o = 0, l, h; o < n.length; o++)
    l = i[o], h = n[o], l.type !== s.None && (a[h] = l.type === s.Number ? l.value : l.value / 100, h === "alpha" && (a[h] = Math.max(0, Math.min(1, a[h]))));
  return a;
}
function Pr(e, t) {
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
function Sa(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = Pr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var Ta = (e) => {
  if (typeof e != "string") return;
  const t = za(e), r = t ? Sa(t, !0) : void 0;
  let a, i = 0, n = me.length;
  for (; i < n; ) if ((a = me[i++](e, r)) !== void 0) return a;
  return t ? $a(t) : void 0;
};
function Ca(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value / 255 : n.value / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Aa = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, Ia = (e, t, r) => e + r * (t - e), Ea = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, Na = (e) => (t) => {
  let r = Ea(t);
  return (a) => {
    let i = a * r.length, n = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), o = r[n];
    return o === void 0 ? void 0 : e(o[0], o[1], i - n);
  };
}, d = Na(Ia), w = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, F = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    Ca,
    va,
    ba,
    ca,
    Aa,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: d,
    g: d,
    b: d,
    alpha: {
      use: d,
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
}, Xe = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Ut = (e) => {
  let t = Xe(e.r), r = Xe(e.g), a = Xe(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, je = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Gt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: je(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: je(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: je(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Fe = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, Y = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: Fe(e),
    g: Fe(t),
    b: Fe(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, q = (e) => {
  let { r: t, g: r, b: a, alpha: i } = Y(e), n = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Ye = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, Z = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let n = {
    mode: i,
    r: Ye(e),
    g: Ye(t),
    b: Ye(r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, D = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Z({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Ra = {
  ...F,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Gt(q(e)),
    xyz65: Gt
  },
  toMode: {
    rgb: (e) => D(Ut(e)),
    xyz65: Ut
  }
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, La = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let n = _(r);
  return a === 0 || e[a - 1] === void 0 ? n : t(n - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), I = (e) => La(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), k = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], Ha = Math.PI / 180, Wa = 180 / Math.PI, Jt = k[3] * k[4], Kt = k[1] * k[4], Vt = k[1] * k[2] - k[0] * k[3], Oa = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (Vt * r + e * Jt - t * Kt) / (Vt + Jt - Kt), n = r - i, o = (k[4] * (t - i) - k[2] * n) / k[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(n * n + o * o) / (k[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(o, n) * Wa - 120), a !== void 0 && (l.alpha = a), l;
}, qa = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Ha, r === void 0 && (r = 0);
  let n = t === void 0 ? 0 : t * r * (1 - r), o = Math.cos(e), l = Math.sin(e);
  return i.r = r + n * (k[0] * o + k[1] * l), i.g = r + n * (k[2] * o + k[3] * l), i.b = r + n * (k[4] * o + k[5] * l), a !== void 0 && (i.alpha = a), i;
}, ze = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, Da = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, $e = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, E = (e) => {
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
}, Ba = {
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
  fromMode: { rgb: Oa },
  toMode: { rgb: qa },
  interpolate: {
    h: {
      use: d,
      fixup: I
    },
    s: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: ze },
  average: { h: E }
}, R = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.sqrt(t * t + r * r), o = {
    mode: i,
    l: e,
    c: n
  };
  return n && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, L = ({ l: e, c: t, h: r, alpha: a }, i = "lab") => {
  r === void 0 && (r = 0);
  let n = {
    mode: i,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (n.alpha = a), n;
}, zr = Math.pow(29, 3) / Math.pow(3, 3), $r = Math.pow(6, 3) / Math.pow(29, 3), M = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, X = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, Vn = Math.pow(29, 3) / Math.pow(3, 3), Qn = Math.pow(6, 3) / Math.pow(29, 3), Ze = (e) => Math.pow(e, 3) > $r ? Math.pow(e, 3) : (116 * e - 16) / zr, Sr = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, n = t / 500 + i, o = i - r / 200, l = {
    mode: "xyz65",
    x: Ze(n) * X.X,
    y: Ze(i) * X.Y,
    z: Ze(o) * X.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, Se = (e) => D(Sr(e)), Ue = (e) => e > $r ? Math.cbrt(e) : (zr * e + 16) / 116, Tr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Ue(e / X.X), n = Ue(t / X.Y), o = Ue(r / X.Z), l = {
    mode: "lab65",
    l: 116 * n - 16,
    a: 500 * (i - n),
    b: 200 * (n - o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Te = (e) => {
  let t = Tr(q(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ne = 26 / 180 * Math.PI, be = Math.cos(ne), ye = Math.sin(ne), Cr = 100 / Math.log(139 / 100), ft = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / Cr) - 1) / 39e-4
  }, n = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, o = n * Math.cos(r / 180 * Math.PI - ne), l = n * Math.sin(r / 180 * Math.PI - ne);
  return i.a = o * be - l / 0.83 * ye, i.b = o * ye + l / 0.83 * be, a !== void 0 && (i.alpha = a), i;
}, pt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * be + r * ye, n = 0.83 * (r * be - t * ye), o = Math.sqrt(i * i + n * n), l = {
    mode: "dlch",
    l: Cr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(n, i) + ne) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, Qt = (e) => ft(R(e, "dlch")), er = (e) => L(pt(e), "dlab"), Xa = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Qt,
    rgb: (e) => Se(Qt(e))
  },
  fromMode: {
    lab65: er,
    rgb: (e) => er(Te(e))
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
      fixup: w
    }
  }
}, ja = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: ft,
    dlab: (e) => L(e, "dlab"),
    rgb: (e) => Se(ft(e))
  },
  fromMode: {
    lab65: pt,
    dlab: (e) => R(e, "dlch"),
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
      fixup: I
    },
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: $e },
  average: { h: E }
};
function Fa({ h: e, s: t, i: r, alpha: a }) {
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
function Ya({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * n / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var Za = {
  mode: "hsi",
  toMode: { rgb: Fa },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: Ya },
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
      fixup: I
    },
    s: d,
    i: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: ze },
  average: { h: E }
};
function Ua({ h: e, s: t, l: r, alpha: a }) {
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
function Ga({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsl",
    s: i === n ? 0 : (i - n) / (1 - Math.abs(i + n - 1)),
    l: 0.5 * (i + n)
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var Ja = (e, t) => {
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
}, Ka = new RegExp(`^hsla?\\(\\s*${pa}${j}${ae}${j}${ae}\\s*(?:,\\s*${kt}\\s*)?\\)$`), Va = (e) => {
  let t = e.match(Ka);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = Ja(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function Qa(e, t) {
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
var Ar = {
  mode: "hsl",
  toMode: { rgb: Ua },
  fromMode: { rgb: Ga },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Qa, Va],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: I
    },
    s: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: ze },
  average: { h: E }
};
function Ir({ h: e, s: t, v: r, alpha: a }) {
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
function Er({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), n = Math.min(e, t, r), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - n / i,
    v: i
  };
  return i - n !== 0 && (o.h = (i === e ? (t - r) / (i - n) + (t < r) * 6 : i === t ? (r - e) / (i - n) + 2 : (e - t) / (i - n) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var Nr = {
  mode: "hsv",
  toMode: { rgb: Ir },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Er },
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
      fixup: I
    },
    s: d,
    v: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: ze },
  average: { h: E }
};
function ei({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let i = t + r;
    t /= i, r /= i;
  }
  return Ir({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function ti(e) {
  let t = Er(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function ri(e, t) {
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
var ai = {
  mode: "hwb",
  toMode: { rgb: ei },
  fromMode: { rgb: ti },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [ri],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: I
    },
    w: d,
    b: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Da },
  average: { h: E }
}, Ce = 0.1593017578125, Rr = 78.84375, Ae = 0.8359375, Ie = 18.8515625, Ee = 18.6875;
function Ge(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Rr);
  return 1e4 * Math.pow(Math.max(0, t - Ae) / (Ie - Ee * t), 1 / Ce);
}
function Je(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Ce);
  return Math.pow((Ae + Ie * t) / (1 + Ee * t), Rr);
}
var Ke = (e) => Math.max(e / 203, 0), tr = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = Ge(e + 0.008609037037932761 * t + 0.11102962500302593 * r), n = Ge(e - 0.00860903703793275 * t - 0.11102962500302599 * r), o = Ge(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: Ke(2.070152218389422 * i - 1.3263473389671556 * n + 0.2066510476294051 * o),
    y: Ke(0.3647385209748074 * i + 0.680566024947227 * n - 0.0453045459220346 * o),
    z: Ke(-0.049747207535812 * i - 0.0492609666966138 * n + 1.1880659249923042 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ve = (e = 0) => Math.max(e * 203, 0), rr = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = Ve(e), n = Ve(t), o = Ve(r), l = Je(0.3592832590121217 * i + 0.6976051147779502 * n - 0.0358915932320289 * o), h = Je(-0.1920808463704995 * i + 1.1004767970374323 * n + 0.0753748658519118 * o), c = Je(0.0070797844607477 * i + 0.0748396662186366 * n + 0.8433265453898765 * o), v = {
    mode: "itp",
    i: 0.5 * l + 0.5 * h,
    t: 1.61376953125 * l - 3.323486328125 * h + 1.709716796875 * c,
    p: 4.378173828125 * l - 4.24560546875 * h - 0.132568359375 * c
  };
  return a !== void 0 && (v.alpha = a), v;
}, ii = {
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
    xyz65: tr,
    rgb: (e) => D(tr(e))
  },
  fromMode: {
    xyz65: rr,
    rgb: (e) => rr(q(e))
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
      fixup: w
    }
  }
}, ni = 134.03437499999998, oi = 16295499532821565e-27, Qe = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Ce);
  return Math.pow((Ae + Ie * t) / (1 + Ee * t), ni);
}, et = (e = 0) => Math.max(e * 203, 0), Lr = ({ x: e, y: t, z: r, alpha: a }) => {
  e = et(e), t = et(t), r = et(r);
  let i = 1.15 * e - 0.15 * r, n = 0.66 * t + 0.34 * e, o = Qe(0.41478972 * i + 0.579999 * n + 0.014648 * r), l = Qe(-0.20151 * i + 1.120649 * n + 0.0531008 * r), h = Qe(-0.0166008 * i + 0.2648 * n + 0.6684799 * r), c = (o + l) / 2, v = {
    mode: "jab",
    j: 0.44 * c / (1 - 0.56 * c) - oi,
    a: 3.524 * o - 4.066708 * l + 0.542708 * h,
    b: 0.199076 * o + 1.096799 * l - 1.295875 * h
  };
  return a !== void 0 && (v.alpha = a), v;
}, li = 134.03437499999998, ar = 16295499532821565e-27, tt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / li);
  return 1e4 * Math.pow((Ae - t) / (Ee * t - Ie), 1 / Ce);
}, rt = (e) => e / 203, Hr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + ar) / (0.44 + 0.56 * (e + ar)), n = tt(i + 0.13860504 * t + 0.058047316 * r), o = tt(i - 0.13860504 * t - 0.058047316 * r), l = tt(i - 0.096019242 * t - 0.8118919 * r), h = {
    mode: "xyz65",
    x: rt(1.661373024652174 * n - 0.914523081304348 * o + 0.23136208173913045 * l),
    y: rt(-0.3250758611844533 * n + 1.571847026732543 * o - 0.21825383453227928 * l),
    z: rt(-0.090982811 * n - 0.31272829 * o + 1.5227666 * l)
  };
  return a !== void 0 && (h.alpha = a), h;
}, Wr = (e) => {
  let t = Lr(q(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Or = (e) => D(Hr(e)), si = {
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
    rgb: Wr,
    xyz65: Lr
  },
  toMode: {
    rgb: Or,
    xyz65: Hr
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
      fixup: w
    }
  }
}, ir = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), n = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, nr = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, hi = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: nr,
    rgb: (e) => Or(nr(e))
  },
  fromMode: {
    rgb: (e) => ir(Wr(e)),
    jab: ir
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
      fixup: I
    },
    c: d,
    j: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: $e },
  average: { h: E }
}, Ne = Math.pow(29, 3) / Math.pow(3, 3), Pt = Math.pow(6, 3) / Math.pow(29, 3), at = (e) => Math.pow(e, 3) > Pt ? Math.pow(e, 3) : (116 * e - 16) / Ne, zt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, n = t / 500 + i, o = i - r / 200, l = {
    mode: "xyz50",
    x: at(n) * M.X,
    y: at(i) * M.Y,
    z: at(o) * M.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, le = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Z({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, qr = (e) => le(zt(e)), se = (e) => {
  let { r: t, g: r, b: a, alpha: i } = Y(e), n = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, it = (e) => e > Pt ? Math.cbrt(e) : (Ne * e + 16) / 116, $t = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = it(e / M.X), n = it(t / M.Y), o = it(r / M.Z), l = {
    mode: "lab",
    l: 116 * n - 16,
    a: 500 * (i - n),
    b: 200 * (n - o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Dr = (e) => {
  let t = $t(se(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function di(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 125 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var St = {
  mode: "lab",
  toMode: {
    xyz50: zt,
    rgb: qr
  },
  fromMode: {
    xyz50: $t,
    rgb: Dr
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
  parse: [di],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: d,
    a: d,
    b: d,
    alpha: {
      use: d,
      fixup: w
    }
  }
}, ci = {
  ...St,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Sr,
    rgb: Se
  },
  fromMode: {
    xyz65: Tr,
    rgb: Te
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function ui(e, t) {
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
var Tt = {
  mode: "lch",
  toMode: {
    lab: L,
    rgb: (e) => qr(L(e))
  },
  fromMode: {
    rgb: (e) => R(Dr(e)),
    lab: R
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
  parse: [ui],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: I
    },
    c: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: $e },
  average: { h: E }
}, vi = {
  ...Tt,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => L(e, "lab65"),
    rgb: (e) => Se(L(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => R(Te(e), "lch65"),
    lab65: (e) => R(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Br = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), n = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, Xr = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, jr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Fr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), fi = jr(M.X, M.Y, M.Z), pi = Fr(M.X, M.Y, M.Z), mi = (e) => e <= Pt ? Ne * e : 116 * Math.cbrt(e) - 16, mt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = mi(t / M.Y), n = jr(e, t, r), o = Fr(e, t, r);
  !isFinite(n) || !isFinite(o) ? i = n = o = 0 : (n = 13 * i * (n - fi), o = 13 * i * (o - pi));
  let l = {
    mode: "luv",
    l: i,
    u: n,
    v: o
  };
  return a !== void 0 && (l.alpha = a), l;
}, gi = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), bi = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), yi = gi(M.X, M.Y, M.Z), Mi = bi(M.X, M.Y, M.Z), gt = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + yi, n = r / (13 * e) + Mi, o = M.Y * (e <= 8 ? e / Ne : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: o * (9 * i) / (4 * n),
    y: o,
    z: o * (12 - 3 * i - 20 * n) / (4 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, wi = (e) => Br(mt(se(e))), xi = (e) => le(gt(Xr(e))), ki = {
  mode: "lchuv",
  toMode: {
    luv: Xr,
    rgb: xi
  },
  fromMode: {
    rgb: wi,
    luv: Br
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
      fixup: I
    },
    c: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: $e },
  average: { h: E }
}, _i = {
  ...F,
  mode: "lrgb",
  toMode: { rgb: Z },
  fromMode: { rgb: Y },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Pi = {
  mode: "luv",
  toMode: {
    xyz50: gt,
    rgb: (e) => le(gt(e))
  },
  fromMode: {
    xyz50: mt,
    rgb: (e) => mt(se(e))
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
      fixup: w
    }
  }
}, Yr = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), n = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * n - 0.0040720430116193 * o,
    a: 1.9779985324311684 * i - 2.42859224204858 * n + 0.450593709617411 * o,
    b: 0.0259040424655478 * i + 0.7827717124575296 * n - 0.8086757549230774 * o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Re = (e) => {
  let t = Yr(Y(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, he = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), n = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * n + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * n - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * n + 1.7076146940746117 * o
  };
  return a !== void 0 && (l.alpha = a), l;
}, Le = (e) => Z(he(e));
function bt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function Me(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function zi(e, t) {
  let r, a, i, n, o, l, h, c;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, n = 0.75515197, o = 0.56771245, l = 4.0767416621, h = -3.3077115913, c = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, n = 0.1254107, o = 0.14503204, l = -1.2684380046, h = 2.6097574011, c = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, n = -0.50559606, o = 692167e-8, l = -0.0041960863, h = -0.7034186147, c = 1.707614701);
  let v = r + a * e + i * t + n * e * e + o * e * t, u = 0.3963377774 * e + 0.2158037573 * t, p = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t;
  {
    let b = 1 + v * u, y = 1 + v * p, x = 1 + v * m, $ = b * b * b, P = y * y * y, N = x * x * x, U = 3 * u * b * b, G = 3 * p * y * y, J = 3 * m * x * x, K = 6 * u * u * b, V = 6 * p * p * y, Q = 6 * m * m * x, B = l * $ + h * P + c * N, W = l * U + h * G + c * J, ee = l * K + h * V + c * Q;
    v = v - B * W / (W * W - 0.5 * B * ee);
  }
  return v;
}
function Ct(e, t) {
  let r = zi(e, t), a = he({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function $i(e, t, r, a, i, n = null) {
  n || (n = Ct(e, t));
  let o;
  if ((r - i) * n[1] - (n[0] - i) * a <= 0) o = n[1] * i / (a * n[0] + n[1] * (i - r));
  else {
    o = n[1] * (i - 1) / (a * (n[0] - 1) + n[1] * (i - r));
    {
      let l = r - i, h = a, c = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, u = -0.0894841775 * e - 1.291485548 * t, p = l + h * c, m = l + h * v, b = l + h * u;
      {
        let y = i * (1 - o) + o * r, x = o * a, $ = y + x * c, P = y + x * v, N = y + x * u, U = $ * $ * $, G = P * P * P, J = N * N * N, K = 3 * p * $ * $, V = 3 * m * P * P, Q = 3 * b * N * N, B = 6 * p * p * $, W = 6 * m * m * P, ee = 6 * b * b * N, Bt = 4.0767416621 * U - 3.3077115913 * G + 0.2309699292 * J - 1, He = 4.0767416621 * K - 3.3077115913 * V + 0.2309699292 * Q, aa = 4.0767416621 * B - 3.3077115913 * W + 0.2309699292 * ee, Xt = He / (He * He - 0.5 * Bt * aa), We = -Bt * Xt, jt = -1.2684380046 * U + 2.6097574011 * G - 0.3413193965 * J - 1, Oe = -1.2684380046 * K + 2.6097574011 * V - 0.3413193965 * Q, ia = -1.2684380046 * B + 2.6097574011 * W - 0.3413193965 * ee, Ft = Oe / (Oe * Oe - 0.5 * jt * ia), qe = -jt * Ft, Yt = -0.0041960863 * U - 0.7034186147 * G + 1.707614701 * J - 1, De = -0.0041960863 * K - 0.7034186147 * V + 1.707614701 * Q, na = -0.0041960863 * B - 0.7034186147 * W + 1.707614701 * ee, Zt = De / (De * De - 0.5 * Yt * na), Be = -Yt * Zt;
        We = Xt >= 0 ? We : 1e6, qe = Ft >= 0 ? qe : 1e6, Be = Zt >= 0 ? Be : 1e6, o += Math.min(We, Math.min(qe, Be));
      }
    }
  }
  return o;
}
function At(e, t, r = null) {
  r || (r = Ct(e, t));
  let a = r[0], i = r[1];
  return [i / a, i / (1 - a)];
}
function Zr(e, t, r) {
  let a = Ct(t, r), i = $i(t, r, e, 1, e, a), n = At(t, r, a), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), h = i / Math.min(e * n[0], (1 - e) * n[1]), c = e * o, v = (1 - e) * l, u = 0.9 * h * Math.sqrt(Math.sqrt(1 / (1 / (c * c * c * c) + 1 / (v * v * v * v))));
  return c = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (c * c) + 1 / (v * v))),
    u,
    i
  ];
}
function or(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: bt(t)
  };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let n = Math.sqrt(r * r + a * a);
  if (!n)
    return i.s = 0, i;
  let [o, l, h] = Zr(t, r / n, a / n), c;
  if (n < l) {
    let v = 0, u = 0.8 * o, p = 1 - u / l;
    c = (n - v) / (u + p * (n - v)) * 0.8;
  } else {
    let v = l, u = 0.2 * l * l * 1.25 * 1.25 / o, p = 1 - u / (h - l);
    c = 0.8 + 0.2 * ((n - v) / (u + p * (n - v)));
  }
  return c && (i.s = c, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function lr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: Me(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let n = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [l, h, c] = Zr(i.l, n, o), v, u, p, m;
  r < 0.8 ? (v = 1.25 * r, u = 0, p = 0.8 * l, m = 1 - p / h) : (v = 5 * (r - 0.8), u = h, p = 0.2 * h * h * 1.25 * 1.25 / l, m = 1 - p / (c - h));
  let b = u + v * p / (1 - m * v);
  return i.a = b * n, i.b = b * o, i;
}
var Si = {
  ...Ar,
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
    oklab: or,
    rgb: (e) => or(Re(e))
  },
  toMode: {
    oklab: lr,
    rgb: (e) => Le(lr(e))
  }
};
function sr(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), n = i ? r / i : 1, o = i ? a / i : 1, [l, h] = At(n, o), c = 0.5, v = 1 - c / l, u = h / (i + t * h), p = u * t, m = u * i, b = Me(p), y = m * b / p, x = he({
    l: b,
    a: n * y,
    b: o * y
  }), $ = Math.cbrt(1 / Math.max(x.r, x.g, x.b, 0));
  t = t / $, i = i / $ * bt(t) / t, t = bt(t);
  const P = {
    mode: "okhsv",
    s: i ? (c + h) * m / (h * c + h * v * m) : 0,
    v: t ? t / p : 0
  };
  return P.s && (P.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && (P.alpha = e.alpha), P;
}
function hr(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, n = Math.cos(r / 180 * Math.PI), o = Math.sin(r / 180 * Math.PI), [l, h] = At(n, o), c = 0.5, v = 1 - c / l, u = 1 - a * c / (c + h - h * v * a), p = a * h * c / (c + h - h * v * a), m = Me(u), b = p * m / u, y = he({
    l: m,
    a: n * b,
    b: o * b
  }), x = Math.cbrt(1 / Math.max(y.r, y.g, y.b, 0)), $ = Me(i * u), P = p * $ / u;
  return t.l = $ * x, t.a = P * n * x, t.b = P * o * x, t;
}
var Ti = {
  ...Nr,
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
    oklab: sr,
    rgb: (e) => sr(Re(e))
  },
  toMode: {
    oklab: hr,
    rgb: (e) => Le(hr(e))
  }
};
function Ci(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, n, o] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || n.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), n.type !== s.None && (r.b = n.type === s.Number ? n.value : n.value * 0.4 / 100), o.type !== s.None && (r.alpha = Math.min(1, Math.max(0, o.type === s.Number ? o.value : o.value / 100))), r;
}
var Ai = {
  ...St,
  mode: "oklab",
  toMode: {
    lrgb: he,
    rgb: Le
  },
  fromMode: {
    lrgb: Yr,
    rgb: Re
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Ci],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Ii(e, t) {
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
var Ei = {
  ...Tt,
  mode: "oklch",
  toMode: {
    oklab: (e) => L(e, "oklab"),
    rgb: (e) => Le(L(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => R(Re(e), "oklch"),
    oklab: (e) => R(e, "oklch")
  },
  parse: [Ii],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, dr = (e) => {
  let { r: t, g: r, b: a, alpha: i } = Y(e), n = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, cr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Z({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (i.alpha = a), i;
}, Ni = {
  ...F,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => cr(q(e)),
    xyz65: cr
  },
  toMode: {
    rgb: (e) => D(dr(e)),
    xyz65: dr
  }
}, nt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, ur = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: nt(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: nt(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: nt(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, ot = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, vr = (e) => {
  let t = ot(e.r), r = ot(e.g), a = ot(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ri = {
  ...F,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: ur,
    rgb: (e) => ur(se(e))
  },
  toMode: {
    xyz50: vr,
    rgb: (e) => le(vr(e))
  }
}, Li = 1.09929682680944, Hi = 0.018053968510807, lt = (e) => {
  const t = Math.abs(e);
  return t > Hi ? (Math.sign(e) || 1) * (Li * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, fr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: lt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: lt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: lt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, pr = 1.09929682680944, Wi = 0.018053968510807, st = (e = 0) => {
  let t = Math.abs(e);
  return t < Wi * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + pr - 1) / pr, 1 / 0.45);
}, mr = (e) => {
  let t = st(e.r), r = st(e.g), a = st(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Oi = {
  ...F,
  mode: "rec2020",
  fromMode: {
    xyz65: fr,
    rgb: (e) => fr(q(e))
  },
  toMode: {
    xyz65: mr,
    rgb: (e) => D(mr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, O = 0.0037930732552754493, Ur = Math.cbrt(O), ht = (e) => Math.cbrt(e) - Ur, qi = (e) => {
  const { r: t, g: r, b: a, alpha: i } = Y(e), n = ht(0.3 * t + 0.622 * r + 0.078 * a + O), o = ht(0.23 * t + 0.692 * r + 0.078 * a + O), l = ht(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + O), h = {
    mode: "xyb",
    x: (n - o) / 2,
    y: (n + o) / 2,
    b: l - (n + o) / 2
  };
  return i !== void 0 && (h.alpha = i), h;
}, dt = (e) => Math.pow(e + Ur, 3), Di = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = dt(e + t) - O, n = dt(t - e) - O, o = dt(r + t) - O, l = Z({
    r: 11.031566904639861 * i - 9.866943908131562 * n - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * n - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * n + 1.9459282407775895 * o
  });
  return a !== void 0 && (l.alpha = a), l;
}, Bi = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: Di },
  fromMode: { rgb: qi },
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
      fixup: w
    }
  }
}, Xi = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: le,
    lab: $t
  },
  fromMode: {
    rgb: se,
    lab: zt
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
      fixup: w
    }
  }
}, ji = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let n = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Fi = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let n = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (n.alpha = i), n;
}, Yi = {
  mode: "xyz65",
  toMode: {
    rgb: D,
    xyz50: ji
  },
  fromMode: {
    rgb: q,
    xyz50: Fi
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
      fixup: w
    }
  }
}, Zi = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Ui = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Gi = {
  mode: "yiq",
  toMode: { rgb: Ui },
  fromMode: { rgb: Zi },
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
      fixup: w
    }
  }
}, Ji = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, Ki = (e = 4) => (t) => typeof t == "number" ? Ji(t, e) : t, eo = Ki(2), Vi = (e) => Math.max(0, Math.min(1, e || 0)), ct = (e) => Math.round(Vi(e) * 255), Qi = _t("rgb"), to = _t("hsl"), en = (e) => {
  if (e === void 0) return;
  let t = ct(e.r), r = ct(e.g), a = ct(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, It = (e) => en(Qi(e)), ro = g(Ra), ao = g(Ba), io = g(Xa), no = g(ja), oo = g(Za), lo = g(Ar), so = g(Nr), ho = g(ai), co = g(ii), uo = g(si), vo = g(hi), fo = g(St), po = g(ci), mo = g(Tt), go = g(vi), bo = g(ki), yo = g(_i), Mo = g(Pi), wo = g(Si), xo = g(Ti), ko = g(Ai), we = g(Ei), _o = g(Ni), Po = g(Ri), zo = g(Oi), $o = g(F), So = g(Bi), To = g(Xi), Co = g(Yi), Ao = g(Gi), Gr = (e, t = "l") => e.sort((r, a) => Math.sign(we({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - we({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Et = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), tn = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((a) => {
    let i = 1e4, n = 0;
    t.forEach((o, l) => {
      const h = Et(a, o);
      (typeof i > "u" || i > h) && (i = h, n = l);
    }), r[n].points.push(a);
  }), r;
}, rn = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], an = (e, t) => {
  let r = Gr(nn(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const n = tn(e, r).map((o) => o.points.length > 0 ? rn(o.points) : null);
    if (n.every((o, l) => o && Et(o, r[l]) < 1e-3)) break;
    r = n;
  }
  return r;
}, nn = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((h) => Math.min(...r.map((c) => Et(h, c)))), i = a.reduce((h, c) => h + c, 0), n = a.map((h) => h / i);
    let o = 0;
    const l = Math.random();
    for (let h = 0; h < n.length; h++)
      if (o += n[h], l < o) {
        r.push(e[h]);
        break;
      }
  }
  return r;
}, on = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((n) => n?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, ln = async (e) => {
  const t = await on(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const i = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, n = r.width * r.height || 0, o = 1 / 255, l = [];
  for (let h = 0; h < n; h++) {
    const c = h * 4;
    l.push(i instanceof Float32Array || i instanceof Float16Array ? [
      i?.[c + 0] || 0,
      i?.[c + 1] || 0,
      i?.[c + 2] || 0
    ] : [
      (i?.[c + 0] || 0) * o,
      (i?.[c + 1] || 0) * o,
      (i?.[c + 2] || 0) * o
    ]);
  }
  return l;
}, sn = async (e) => {
  const t = await ln(e);
  return Gr(an(t, 4), "h");
}, hn = "rs-wallpaper-theme", dn = "rs-wallpaper-primary", cn = "rs-wallpaper-theme-src", Nt = hn, un = dn, gr = cn, Rt = 0.52, vn = 0.025, ie = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, C = null, fn = 0.03, pn = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], mn = (e, t, r) => Math.min(r, Math.max(t, e)), br = (e, t, r, a) => It({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || a, gn = (e) => {
  const [t, r, a] = e;
  if (![
    t,
    r,
    a
  ].every((o) => Number.isFinite(o))) return null;
  const i = It({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  if (!i) return null;
  const n = we({
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
}, bn = (e) => we(e)?.l ?? 0.4, yn = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, Lt = (e) => Number.isFinite(e) && e >= fn && e <= 1, Mn = (e, t) => {
  if (!e.length && t == null) return { ...ie };
  const r = e.map((v) => v.l).sort((v, u) => v - u), a = e.length ? e.reduce((v, u) => v + u.l, 0) / e.length : t, i = r.length ? r[Math.floor(r.length / 2)] : a, n = mn(t != null && Lt(t) ? t : Math.max(a, i), 0.08, 0.94), o = e.length ? [...e].sort((v, u) => v.c - u.c || Math.abs(v.l - n) - Math.abs(u.l - n))[0] : null, l = o ? Math.min(vn, Math.max(0, o.c * 0.2)) : 0, h = o?.h || 0, c = n < Rt;
  return {
    underlying: br(n, l, h, c ? ie.underlying : "#e8e6e2"),
    contrast: br(c ? 0.93 : 0.16, 8e-3, h, c ? ie.contrast : "#141416")
  };
}, wn = async (e) => {
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
    let h = 0, c = 0;
    for (let u = 0; u < l.length; u += 16) {
      if ((l[u + 3] ?? 255) < 16) continue;
      const p = l[u] / 255, m = l[u + 1] / 255, b = l[u + 2] / 255;
      h += 0.2126 * p + 0.7152 * m + 0.0722 * b, c++;
    }
    if (c < 8) return null;
    const v = h / c;
    return Lt(v) ? v : null;
  } catch {
    return null;
  }
}, xn = (e) => e <= Rt ? { ...ie } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, kn = (e) => !!(e.underlying && e.contrast), _n = (e, t) => {
  const r = e.map(gn).filter(Boolean);
  if (!r.length) return null;
  const a = r.filter((u) => u.l >= 0.18 && u.l <= 0.88 && u.c >= 0.02).sort((u, p) => p.c - u.c || Math.abs(p.l - 0.55) - Math.abs(u.l - 0.55)), i = a.length ? a : [...r].sort((u, p) => p.c - u.c), n = i[0];
  if (!n) return null;
  const o = (u, p) => {
    const m = Math.abs(u - p) % 360;
    return m > 180 ? 360 - m : m;
  }, l = (u) => {
    const p = i.filter((m) => !u.includes(m));
    if (!p.length) {
      const m = u[u.length - 1] ?? n, b = It({
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
    return [...p].sort((m, b) => Math.min(...u.map((y) => o(b.h, y.h))) - Math.min(...u.map((y) => o(m.h, y.h))) || b.c - m.c)[0] ?? p[0];
  }, h = l([n]), c = l([n, h]), v = Mn(r, t);
  return {
    primary: n.hex,
    secondary: h.hex,
    tertiary: c.hex,
    ...v
  };
}, Jr = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, Pn = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, yt = (e, t = []) => {
  if (typeof document > "u") return;
  const r = bn(e.underlying) < Rt, { shadow: a, glow: i } = yn(r), n = new Set(Jr());
  for (const o of t) n.add(o);
  for (const o of n)
    o.style.setProperty("--wallpaper-underlying-color", e.underlying), o.style.setProperty("--wallpaper-contrast-color", e.contrast), o.style.setProperty("--env-launcher-fg", e.contrast), o.style.setProperty("--env-launcher-fg-shadow", a), o.style.setProperty("--env-launcher-fg-glow", i);
}, zn = (e) => {
  try {
    const t = xe();
    if (!t) return;
    localStorage.setItem(Nt, JSON.stringify({
      ...t,
      underlying: e.underlying,
      contrast: e.contrast
    }));
  } catch {
  }
}, $n = (e, t = []) => {
  if (!Lt(e))
    return C ? (yt(C, t), C) : { ...ie };
  const r = xn(e);
  return C = r, yt(r, t), zn(r), r;
}, ve = (e) => {
  const t = C ? {
    ...e,
    ...C
  } : e;
  try {
    localStorage.setItem(Nt, JSON.stringify(t)), localStorage.setItem(un, t.primary);
  } catch {
  }
  if (kn(t) && yt(t), !!Pn()) {
    for (const r of Jr()) for (const [a, i] of pn) r.style.setProperty(a, t[i]);
    document.querySelectorAll(".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((r) => {
      r.style.setProperty("--color-primary", t.primary), r.style.setProperty("--base-color", t.primary), r.style.setProperty("--color-secondary", t.secondary), r.style.setProperty("--color-tertiary", t.tertiary);
    }), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
      source: "wallpaper",
      seeds: t
    } }));
  }
}, xe = () => {
  try {
    const e = localStorage.getItem(Nt);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, ke = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`, a = await wn(e);
  if (a != null && $n(a), !t?.force) try {
    if (localStorage.getItem(gr) === r) {
      const i = xe();
      if (i)
        return ve(i), C ? {
          ...i,
          ...C
        } : i;
    }
  } catch {
  }
  try {
    const i = await sn(e), n = _n(i, a ?? void 0);
    if (!n) return null;
    ve(n);
    try {
      localStorage.setItem(gr, r);
    } catch {
    }
    return C ? {
      ...n,
      ...C
    } : n;
  } catch (i) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", i);
    const n = xe();
    return n ? (ve(n), n) : null;
  }
}, Sn = () => {
  const e = xe();
  return e && ve(e), e;
}, ue = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new Map([]), yr = la(), re = /* @__PURE__ */ new Set(), fe = (e) => e?.naturalWidth || e?.width || 1, pe = (e) => e?.naturalHeight || e?.height || 1, Cn = (e) => {
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
}, Io = (e, t) => {
  Tn.set(e, t);
}, An = (e, t, r = 1, a, i = 0) => {
  const n = e.canvas;
  e.translate(n.width / 2, n.height / 2), e.rotate((-i || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(fe(t) / 2) * r, -(pe(t) / 2) * r);
}, In = (e) => {
  if (!ue.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image)) {
    const t = createImageBitmap(e).catch((r) => {
      throw ue.delete(e), r;
    });
    ue.set(e, t);
  }
  return ue.get(e);
}, Kr = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[Kr] ??= /* @__PURE__ */ new WeakMap();
var Mr = globalThis[Kr], En = (e, t) => {
  const r = Mr.get(e);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return Mr.set(e, a), a;
}, Mt = null;
typeof HTMLCanvasElement < "u" ? Mt = class extends HTMLCanvasElement {
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
    t == "data-src" && this.#n(a), (t == "data-orient" || t == "orient") && this.#a(this.#r);
  }
  connectedCallback() {
    const t = this.parentNode;
    this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || t?.clientWidth || 1, 1), t?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || t?.clientHeight || 1, 1), t?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], this.#n(this.#t = this.dataset.src || this.#t), this.image && this.#a(this.#r);
  }
  constructor() {
    super();
    const t = this, r = this.parentNode, a = () => {
      const i = this.#e;
      this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], (i?.[0] != this.#e[0] || i?.[1] != this.#e[1]) && this.#a(this.#r);
    };
    yr?.shedule?.(() => {
      this.ctx = Cn(t);
      try {
        this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" });
      } catch {
      }
      this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", "display-p3"), this.style.setProperty("background-color", "transparent", "important"), this.style.setProperty("opacity", "1", "important"), a(), new ResizeObserver((i) => {
        for (const n of i) {
          const o = n?.devicePixelContentBoxSize?.[0];
          if (o) {
            const l = this.#e;
            this.#e = [Math.max(o.inlineSize || this.width, 1), Math.max(o.blockSize || this.height, 1)], (l?.[0] != this.#e[0] || l?.[1] != this.#e[1]) && this.#a(this.#r);
          }
        }
      }).observe(this, { box: "device-pixel-content-box" }), this.#n(this.#t = this.dataset.src || this.#t), this.image && this.#a(this.#r || this.#t);
    });
  }
  async $useImageAsSource(t, r) {
    r ||= this.#t;
    const a = t instanceof ImageBitmap ? t : await In(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const n = this.#i % 2 || 0, o = fe(i) <= pe(i) ? 1 : 0, l = Math.max(r[["height", "width"][n]] / (o ? pe(i) : fe(i)), r[["width", "height"][n]] / (o ? fe(i) : pe(i)));
      a.save(), a.clearRect(0, 0, r.width, r.height), An(a, i, l, o, this.#i), a.drawImage(i, 0, 0, i.width * l, i.height * l), a.restore();
    }
  }
  #n(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || re.has(r) ? Promise.resolve() : fetch(r, {
      cache: "force-cache",
      mode: "same-origin"
    })?.then?.(async (a) => {
      if (!a.ok) {
        re.add(r);
        return;
      }
      const i = await a.blob();
      if (!i?.size || i.type && !i.type.startsWith("image/")) {
        re.add(r);
        return;
      }
      return this.$useImageAsSource(i, r)?.catch?.(() => {
        re.add(r);
      });
    })?.catch?.(() => {
      re.add(r);
    });
  }
  #a(t) {
    const r = this.ctx;
    this.image && r && (t == this.#t || !t) && yr?.shedule?.(En(this.$renderPass, this));
  }
} : Mt = class {
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
  #n = "";
  #a = [1, 1];
  ctx = null;
  image = null;
};
try {
  customElements.define("ui-canvas", Mt, { extends: "canvas" });
} catch {
}
var Vr = "rs-wallpaper-image", A = "/assets/wallpaper.jpg", wt = "idb:rs-wallpaper", Nn = "cwsp-wallpaper-v1", H = "blobs", Ht = "current", Qr = 512e3, z = null, Wt = 0, Ot = () => sa?.[oa()] ?? 0, xt = (e) => e === "idb:rs-wallpaper" || e.startsWith("idb:"), Rn = (e) => e.startsWith("blob:") || e.startsWith("data:") && e.length > Qr, ea = () => {
  if (Wt += 1, z && z.startsWith("blob:")) try {
    URL.revokeObjectURL(z);
  } catch {
  }
  z = null;
}, Ln = (e, t) => (t !== Wt || z || (z = URL.createObjectURL(e)), z), qt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(Nn, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(H) || a.createObjectStore(H);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), Hn = async (e) => {
  const t = await qt();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(H, "readwrite");
      i.objectStore(H).put(e, Ht), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, ta = async () => {
  const e = await qt();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(H, "readonly").objectStore(H).get(Ht);
      a.onsuccess = () => {
        const i = a.result;
        t(i instanceof Blob ? i : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, Wn = async () => {
  try {
    const e = await qt();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(H, "readwrite");
        a.objectStore(H).delete(Ht), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, Dt = () => {
  try {
    const e = localStorage.getItem(Vr);
    return e && e.trim() ? e.trim() : A;
  } catch {
    return A;
  }
}, _e = (e) => {
  if (e.startsWith("blob:")) return !1;
  try {
    return localStorage.setItem(Vr, e), !0;
  } catch {
    return !1;
  }
}, On = async () => {
  if (z) return z;
  const e = Wt;
  try {
    const t = await ta();
    return t ? Ln(t, e) : null;
  } catch (t) {
    return console.warn("[fest/image] wallpaper IDB restore failed", t), null;
  }
}, qn = (e) => e.startsWith("data:") || e.startsWith("blob:"), ra = async () => {
  const e = Dt();
  if (xt(e) || Rn(e)) {
    const t = await On();
    return t ? (xt(e) || _e(wt), t) : A;
  }
  return e || A;
}, Ro = () => Dt(), wr = (e) => {
  const t = () => {
    const r = Ot(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), ha(t);
}, Dn = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = Ot(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, Lo = () => {
  ra().then((e) => {
    Pe(e), Dn();
  });
}, oe = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, Pe = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(Ot());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, Bn = async (e) => (await fetch(e)).blob(), Xn = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return jn(A), A;
  ea(), z = URL.createObjectURL(e), Pe(z), ke(e, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(oe);
  });
  try {
    await Hn(e), _e(wt);
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, n) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => n(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !_e(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: wt,
      url: z
    } }));
  } catch {
  }
  return z;
}, Ho = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "none", t.style.backgroundColor = "transparent";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "none", r.style.backgroundColor = "transparent";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "transparent", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const i = Dt(), n = xt(i) || i.startsWith("data:") || i.startsWith("blob:") ? A : i;
  a.setAttribute("data-src", n);
  const o = wr(a);
  return Sn(), oe(r), (async () => {
    const l = await ra();
    a.setAttribute("data-src", l), wr(a);
    const h = l.startsWith("blob:") && await ta() || l;
    await ke(h), oe(r);
  })(), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: o
  };
}, jn = (e) => {
  const t = String(e || "").trim() || A;
  if (qn(t) || t.length > Qr) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await Bn(t);
        await Xn(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r);
        const a = t.startsWith("blob:") ? A : t;
        Pe(a), ke(a, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(oe);
        });
      }
    })();
    return;
  }
  Wn(), ea(), _e(t) || console.warn("[fest/image] wallpaper pointer write failed"), Pe(t), ke(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(oe);
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
  Mt as UICanvas,
  wt as WALLPAPER_IDB_MARKER,
  dn as WALLPAPER_PRIMARY_STORAGE_KEY,
  cn as WALLPAPER_THEME_SRC_STORAGE_KEY,
  hn as WALLPAPER_THEME_STORAGE_KEY,
  ke as applyThemeFromWallpaper,
  $n as applyWallpaperPaperFromLuma,
  yt as applyWallpaperPaperTokens,
  ve as applyWallpaperThemeSeeds,
  Mr as bindCache,
  Io as callByFrame,
  An as cover,
  In as createImageBitmapCache,
  xn as deriveWallpaperPaperTokensFromLuma,
  Yn as electronAPI,
  sn as getDominantColors,
  Ro as getWallpaperStoragePointer,
  Ho as initializeAppCanvasLayer,
  xe as loadCachedWallpaperTheme,
  Zn as qualityMode,
  _n as rankWallpaperSeeds,
  Lo as refreshAppWallpaperPaint,
  ra as resolveAppWallpaperUrl,
  Sn as restoreWallpaperThemeCache,
  jn as setAppWallpaper,
  Xn as setAppWallpaperFromBlob,
  Dn as syncAppWallpaperOrient,
  wr as syncCanvasOrient,
  Jr as themeHosts
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGdldENvcnJlY3RPcmllbnRhdGlvbiwgbWFrZVJBRkN5Y2xlLCBvcmllbnRhdGlvbk51bWJlck1hcCwgd2hlbkFueVNjcmVlbkNoYW5nZXMgfSBmcm9tIFwiQGZlc3QtbGliL2RvbVwiO1xuXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9Db25maWcudHNcbnZhciBlbGVjdHJvbkFQSSA9IFwiZWxlY3Ryb25CcmlkZ2VcIjtcbnZhciBxdWFsaXR5TW9kZSA9IHsgXCJmYXN0XCI6IHtcblx0ZGl2aXNvcjogNCxcblx0ZmlsdGVyOiBcImJsdXIoNHB4KVwiLFxuXHRzYW1wbGluZzogMTI4XG59IH07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU51bWJlci5qc1xudmFyIHBhcnNlTnVtYmVyID0gKGNvbG9yLCBsZW4pID0+IHtcblx0aWYgKHR5cGVvZiBjb2xvciAhPT0gXCJudW1iZXJcIikgcmV0dXJuO1xuXHRpZiAobGVuID09PSAzKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDggJiAxNSB8IGNvbG9yID4+IDQgJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA0ICYgMTUgfCBjb2xvciAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA0KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDEyICYgMTUgfCBjb2xvciA+PiA4ICYgMjQwKSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMTUgfCBjb2xvciA8PCA0ICYgMjQwKSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA2KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xuXHRpZiAobGVuID09PSA4KSByZXR1cm4ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogKGNvbG9yID4+IDI0ICYgMjU1KSAvIDI1NSxcblx0XHRnOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGI6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRhbHBoYTogKGNvbG9yICYgMjU1KSAvIDI1NVxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY29sb3JzL25hbWVkLmpzXG52YXIgbmFtZWQgPSB7XG5cdGFsaWNlYmx1ZTogMTU3OTIzODMsXG5cdGFudGlxdWV3aGl0ZTogMTY0NDQzNzUsXG5cdGFxdWE6IDY1NTM1LFxuXHRhcXVhbWFyaW5lOiA4Mzg4NTY0LFxuXHRhenVyZTogMTU3OTQxNzUsXG5cdGJlaWdlOiAxNjExOTI2MCxcblx0YmlzcXVlOiAxNjc3MDI0NCxcblx0YmxhY2s6IDAsXG5cdGJsYW5jaGVkYWxtb25kOiAxNjc3MjA0NSxcblx0Ymx1ZTogMjU1LFxuXHRibHVldmlvbGV0OiA5MDU1MjAyLFxuXHRicm93bjogMTA4MjQyMzQsXG5cdGJ1cmx5d29vZDogMTQ1OTYyMzEsXG5cdGNhZGV0Ymx1ZTogNjI2NjUyOCxcblx0Y2hhcnRyZXVzZTogODM4ODM1Mixcblx0Y2hvY29sYXRlOiAxMzc4OTQ3MCxcblx0Y29yYWw6IDE2NzQ0MjcyLFxuXHRjb3JuZmxvd2VyYmx1ZTogNjU5MTk4MSxcblx0Y29ybnNpbGs6IDE2Nzc1Mzg4LFxuXHRjcmltc29uOiAxNDQyMzEwMCxcblx0Y3lhbjogNjU1MzUsXG5cdGRhcmtibHVlOiAxMzksXG5cdGRhcmtjeWFuOiAzNTcyMyxcblx0ZGFya2dvbGRlbnJvZDogMTIwOTI5MzksXG5cdGRhcmtncmF5OiAxMTExOTAxNyxcblx0ZGFya2dyZWVuOiAyNTYwMCxcblx0ZGFya2dyZXk6IDExMTE5MDE3LFxuXHRkYXJra2hha2k6IDEyNDMzMjU5LFxuXHRkYXJrbWFnZW50YTogOTEwOTY0Myxcblx0ZGFya29saXZlZ3JlZW46IDU1OTc5OTksXG5cdGRhcmtvcmFuZ2U6IDE2NzQ3NTIwLFxuXHRkYXJrb3JjaGlkOiAxMDA0MDAxMixcblx0ZGFya3JlZDogOTEwOTUwNCxcblx0ZGFya3NhbG1vbjogMTUzMDg0MTAsXG5cdGRhcmtzZWFncmVlbjogOTQxOTkxOSxcblx0ZGFya3NsYXRlYmx1ZTogNDczNDM0Nyxcblx0ZGFya3NsYXRlZ3JheTogMzEwMDQ5NSxcblx0ZGFya3NsYXRlZ3JleTogMzEwMDQ5NSxcblx0ZGFya3R1cnF1b2lzZTogNTI5NDUsXG5cdGRhcmt2aW9sZXQ6IDk2OTk1MzksXG5cdGRlZXBwaW5rOiAxNjcxNjk0Nyxcblx0ZGVlcHNreWJsdWU6IDQ5MTUxLFxuXHRkaW1ncmF5OiA2OTA4MjY1LFxuXHRkaW1ncmV5OiA2OTA4MjY1LFxuXHRkb2RnZXJibHVlOiAyMDAzMTk5LFxuXHRmaXJlYnJpY2s6IDExNjc0MTQ2LFxuXHRmbG9yYWx3aGl0ZTogMTY3NzU5MjAsXG5cdGZvcmVzdGdyZWVuOiAyMjYzODQyLFxuXHRmdWNoc2lhOiAxNjcxMTkzNSxcblx0Z2FpbnNib3JvOiAxNDQ3NDQ2MCxcblx0Z2hvc3R3aGl0ZTogMTYzMTY2NzEsXG5cdGdvbGQ6IDE2NzY2NzIwLFxuXHRnb2xkZW5yb2Q6IDE0MzI5MTIwLFxuXHRncmF5OiA4NDIxNTA0LFxuXHRncmVlbjogMzI3NjgsXG5cdGdyZWVueWVsbG93OiAxMTQwMzA1NSxcblx0Z3JleTogODQyMTUwNCxcblx0aG9uZXlkZXc6IDE1Nzk0MTYwLFxuXHRob3RwaW5rOiAxNjczODc0MCxcblx0aW5kaWFucmVkOiAxMzQ1ODUyNCxcblx0aW5kaWdvOiA0OTE1MzMwLFxuXHRpdm9yeTogMTY3NzcyMDAsXG5cdGtoYWtpOiAxNTc4NzY2MCxcblx0bGF2ZW5kZXI6IDE1MTMyNDEwLFxuXHRsYXZlbmRlcmJsdXNoOiAxNjc3MzM2NSxcblx0bGF3bmdyZWVuOiA4MTkwOTc2LFxuXHRsZW1vbmNoaWZmb246IDE2Nzc1ODg1LFxuXHRsaWdodGJsdWU6IDExMzkzMjU0LFxuXHRsaWdodGNvcmFsOiAxNTc2MTUzNixcblx0bGlnaHRjeWFuOiAxNDc0NTU5OSxcblx0bGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDE2NDQ4MjEwLFxuXHRsaWdodGdyYXk6IDEzODgyMzIzLFxuXHRsaWdodGdyZWVuOiA5NDk4MjU2LFxuXHRsaWdodGdyZXk6IDEzODgyMzIzLFxuXHRsaWdodHBpbms6IDE2NzU4NDY1LFxuXHRsaWdodHNhbG1vbjogMTY3NTI3NjIsXG5cdGxpZ2h0c2VhZ3JlZW46IDIxNDI4OTAsXG5cdGxpZ2h0c2t5Ymx1ZTogODkwMDM0Nixcblx0bGlnaHRzbGF0ZWdyYXk6IDc4MzM3NTMsXG5cdGxpZ2h0c2xhdGVncmV5OiA3ODMzNzUzLFxuXHRsaWdodHN0ZWVsYmx1ZTogMTE1ODQ3MzQsXG5cdGxpZ2h0eWVsbG93OiAxNjc3NzE4NCxcblx0bGltZTogNjUyODAsXG5cdGxpbWVncmVlbjogMzMyOTMzMCxcblx0bGluZW46IDE2NDQ1NjcwLFxuXHRtYWdlbnRhOiAxNjcxMTkzNSxcblx0bWFyb29uOiA4Mzg4NjA4LFxuXHRtZWRpdW1hcXVhbWFyaW5lOiA2NzM3MzIyLFxuXHRtZWRpdW1ibHVlOiAyMDUsXG5cdG1lZGl1bW9yY2hpZDogMTIyMTE2NjcsXG5cdG1lZGl1bXB1cnBsZTogOTY2MjY4Myxcblx0bWVkaXVtc2VhZ3JlZW46IDM5NzgwOTcsXG5cdG1lZGl1bXNsYXRlYmx1ZTogODA4Nzc5MCxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IDY0MTU0LFxuXHRtZWRpdW10dXJxdW9pc2U6IDQ3NzIzMDAsXG5cdG1lZGl1bXZpb2xldHJlZDogMTMwNDcxNzMsXG5cdG1pZG5pZ2h0Ymx1ZTogMTY0NDkxMixcblx0bWludGNyZWFtOiAxNjEyMTg1MCxcblx0bWlzdHlyb3NlOiAxNjc3MDI3Myxcblx0bW9jY2FzaW46IDE2NzcwMjI5LFxuXHRuYXZham93aGl0ZTogMTY3Njg2ODUsXG5cdG5hdnk6IDEyOCxcblx0b2xkbGFjZTogMTY2NDM1NTgsXG5cdG9saXZlOiA4NDIxMzc2LFxuXHRvbGl2ZWRyYWI6IDcwNDg3MzksXG5cdG9yYW5nZTogMTY3NTM5MjAsXG5cdG9yYW5nZXJlZDogMTY3MjkzNDQsXG5cdG9yY2hpZDogMTQzMTU3MzQsXG5cdHBhbGVnb2xkZW5yb2Q6IDE1NjU3MTMwLFxuXHRwYWxlZ3JlZW46IDEwMDI1ODgwLFxuXHRwYWxldHVycXVvaXNlOiAxMTUyOTk2Nixcblx0cGFsZXZpb2xldHJlZDogMTQzODEyMDMsXG5cdHBhcGF5YXdoaXA6IDE2NzczMDc3LFxuXHRwZWFjaHB1ZmY6IDE2NzY3NjczLFxuXHRwZXJ1OiAxMzQ2ODk5MSxcblx0cGluazogMTY3NjEwMzUsXG5cdHBsdW06IDE0NTI0NjM3LFxuXHRwb3dkZXJibHVlOiAxMTU5MTkxMCxcblx0cHVycGxlOiA4Mzg4NzM2LFxuXHRyZWJlY2NhcHVycGxlOiA2Njk3ODgxLFxuXHRyZWQ6IDE2NzExNjgwLFxuXHRyb3N5YnJvd246IDEyMzU3NTE5LFxuXHRyb3lhbGJsdWU6IDQyODY5NDUsXG5cdHNhZGRsZWJyb3duOiA5MTI3MTg3LFxuXHRzYWxtb246IDE2NDE2ODgyLFxuXHRzYW5keWJyb3duOiAxNjAzMjg2NCxcblx0c2VhZ3JlZW46IDMwNTAzMjcsXG5cdHNlYXNoZWxsOiAxNjc3NDYzOCxcblx0c2llbm5hOiAxMDUwNjc5Nyxcblx0c2lsdmVyOiAxMjYzMjI1Nixcblx0c2t5Ymx1ZTogODkwMDMzMSxcblx0c2xhdGVibHVlOiA2OTcwMDYxLFxuXHRzbGF0ZWdyYXk6IDczNzI5NDQsXG5cdHNsYXRlZ3JleTogNzM3Mjk0NCxcblx0c25vdzogMTY3NzU5MzAsXG5cdHNwcmluZ2dyZWVuOiA2NTQwNyxcblx0c3RlZWxibHVlOiA0NjIwOTgwLFxuXHR0YW46IDEzODA4NzgwLFxuXHR0ZWFsOiAzMjg5Nixcblx0dGhpc3RsZTogMTQyMDQ4ODgsXG5cdHRvbWF0bzogMTY3MzcwOTUsXG5cdHR1cnF1b2lzZTogNDI1MTg1Nixcblx0dmlvbGV0OiAxNTYzMTA4Nixcblx0d2hlYXQ6IDE2MTEzMzMxLFxuXHR3aGl0ZTogMTY3NzcyMTUsXG5cdHdoaXRlc21va2U6IDE2MTE5Mjg1LFxuXHR5ZWxsb3c6IDE2Nzc2OTYwLFxuXHR5ZWxsb3dncmVlbjogMTAxNDUwNzRcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZU5hbWVkLmpzXG52YXIgcGFyc2VOYW1lZCA9IChjb2xvcikgPT4ge1xuXHRyZXR1cm4gcGFyc2VOdW1iZXIobmFtZWRbY29sb3IudG9Mb3dlckNhc2UoKV0sIDYpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlSGV4LmpzXG52YXIgaGV4ID0gL14jPyhbMC05YS1mXXs4fXxbMC05YS1mXXs2fXxbMC05YS1mXXs0fXxbMC05YS1mXXszfSkkL2k7XG52YXIgcGFyc2VIZXggPSAoY29sb3IpID0+IHtcblx0bGV0IG1hdGNoO1xuXHRyZXR1cm4gKG1hdGNoID0gY29sb3IubWF0Y2goaGV4KSkgPyBwYXJzZU51bWJlcihwYXJzZUludChtYXRjaFsxXSwgMTYpLCBtYXRjaFsxXS5sZW5ndGgpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9yZWdleC5qc1xudmFyIG51bSQxID0gXCIoWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcIjtcbnZhciBudW1fbm9uZSA9IGAoPzoke251bSQxfXxub25lKWA7XG52YXIgcGVyID0gYCR7bnVtJDF9JWA7XG52YXIgcGVyX25vbmUgPSBgKD86JHtudW0kMX0lfG5vbmUpYDtcbnZhciBudW1fcGVyID0gYCg/OiR7bnVtJDF9JXwke251bSQxfSlgO1xudmFyIG51bV9wZXJfbm9uZSA9IGAoPzoke251bSQxfSV8JHtudW0kMX18bm9uZSlgO1xudmFyIGh1ZSQxID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfSlgO1xudmFyIGh1ZV9ub25lID0gYCg/OiR7bnVtJDF9KGRlZ3xncmFkfHJhZHx0dXJuKXwke251bSQxfXxub25lKWA7XG52YXIgYyA9IGBcXFxccyosXFxcXHMqYDtcbnZhciByeF9udW1fcGVyX25vbmUgPSBuZXcgUmVnRXhwKFwiXlwiICsgbnVtX3Blcl9ub25lICsgXCIkXCIpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VSZ2JMZWdhY3kuanNcbnZhciByZ2JfbnVtX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtudW0kMX0ke2N9JHtudW0kMX0ke2N9JHtudW0kMX1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcmdiX3Blcl9vbGQgPSBuZXcgUmVnRXhwKGBecmdiYT9cXFxcKFxcXFxzKiR7cGVyfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlUmdiTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0bGV0IG1hdGNoO1xuXHRpZiAobWF0Y2ggPSBjb2xvci5tYXRjaChyZ2JfbnVtX29sZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCkgcmVzLnIgPSBtYXRjaFsxXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbMl0gIT09IHZvaWQgMCkgcmVzLmcgPSBtYXRjaFsyXSAvIDI1NTtcblx0XHRpZiAobWF0Y2hbM10gIT09IHZvaWQgMCkgcmVzLmIgPSBtYXRjaFszXSAvIDI1NTtcblx0fSBlbHNlIGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9wZXJfb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMTAwO1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMTAwO1xuXHR9IGVsc2UgcmV0dXJuO1xuXHRpZiAobWF0Y2hbNF0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbWF0Y2hbNF0gLyAxMDApKTtcblx0ZWxzZSBpZiAobWF0Y2hbNV0gIT09IHZvaWQgMCkgcmVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgK21hdGNoWzVdKSk7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9fcHJlcGFyZS5qc1xudmFyIHByZXBhcmUgPSAoY29sb3IsIG1vZGUpID0+IGNvbG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0eXBlb2YgY29sb3IgIT09IFwib2JqZWN0XCIgPyBwYXJzZShjb2xvcikgOiBjb2xvci5tb2RlICE9PSB2b2lkIDAgPyBjb2xvciA6IG1vZGUgPyB7XG5cdC4uLmNvbG9yLFxuXHRtb2RlXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb252ZXJ0ZXIuanNcbnZhciBjb252ZXJ0ZXIgPSAodGFyZ2V0X21vZGUgPSBcInJnYlwiKSA9PiAoY29sb3IpID0+IChjb2xvciA9IHByZXBhcmUoY29sb3IsIHRhcmdldF9tb2RlKSkgIT09IHZvaWQgMCA/IGNvbG9yLm1vZGUgPT09IHRhcmdldF9tb2RlID8gY29sb3IgOiBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdW3RhcmdldF9tb2RlXSA/IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdKGNvbG9yKSA6IHRhcmdldF9tb2RlID09PSBcInJnYlwiID8gY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpIDogY29udmVydGVycy5yZ2JbdGFyZ2V0X21vZGVdKGNvbnZlcnRlcnNbY29sb3IubW9kZV0ucmdiKGNvbG9yKSkgOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL21vZGVzLmpzXG52YXIgY29udmVydGVycyA9IHt9O1xudmFyIG1vZGVzID0ge307XG52YXIgcGFyc2VycyA9IFtdO1xudmFyIGNvbG9yUHJvZmlsZXMgPSB7fTtcbnZhciBpZGVudGl0eSA9ICh2KSA9PiB2O1xudmFyIHVzZU1vZGUgPSAoZGVmaW5pdGlvbikgPT4ge1xuXHRjb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0gPSB7XG5cdFx0Li4uY29udmVydGVyc1tkZWZpbml0aW9uLm1vZGVdLFxuXHRcdC4uLmRlZmluaXRpb24udG9Nb2RlXG5cdH07XG5cdE9iamVjdC5rZXlzKGRlZmluaXRpb24uZnJvbU1vZGUgfHwge30pLmZvckVhY2goKGspID0+IHtcblx0XHRpZiAoIWNvbnZlcnRlcnNba10pIGNvbnZlcnRlcnNba10gPSB7fTtcblx0XHRjb252ZXJ0ZXJzW2tdW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uLmZyb21Nb2RlW2tdO1xuXHR9KTtcblx0aWYgKCFkZWZpbml0aW9uLnJhbmdlcykgZGVmaW5pdGlvbi5yYW5nZXMgPSB7fTtcblx0aWYgKCFkZWZpbml0aW9uLmRpZmZlcmVuY2UpIGRlZmluaXRpb24uZGlmZmVyZW5jZSA9IHt9O1xuXHRkZWZpbml0aW9uLmNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwpID0+IHtcblx0XHRpZiAoZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPT09IHZvaWQgMCkgZGVmaW5pdGlvbi5yYW5nZXNbY2hhbm5lbF0gPSBbMCwgMV07XG5cdFx0aWYgKCFkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgaW50ZXJwb2xhdG9yIGZvcjogJHtjaGFubmVsfWApO1xuXHRcdGlmICh0eXBlb2YgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSA9PT0gXCJmdW5jdGlvblwiKSBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID0geyB1c2U6IGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gfTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXApIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0uZml4dXAgPSBpZGVudGl0eTtcblx0fSk7XG5cdG1vZGVzW2RlZmluaXRpb24ubW9kZV0gPSBkZWZpbml0aW9uO1xuXHQoZGVmaW5pdGlvbi5wYXJzZSB8fCBbXSkuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG5cdFx0dXNlUGFyc2VyKHBhcnNlciwgZGVmaW5pdGlvbi5tb2RlKTtcblx0fSk7XG5cdHJldHVybiBjb252ZXJ0ZXIoZGVmaW5pdGlvbi5tb2RlKTtcbn07XG52YXIgZ2V0TW9kZSA9IChtb2RlKSA9PiBtb2Rlc1ttb2RlXTtcbnZhciB1c2VQYXJzZXIgPSAocGFyc2VyLCBtb2RlKSA9PiB7XG5cdGlmICh0eXBlb2YgcGFyc2VyID09PSBcInN0cmluZ1wiKSB7XG5cdFx0aWYgKCFtb2RlKSB0aHJvdyBuZXcgRXJyb3IoYCdtb2RlJyByZXF1aXJlZCB3aGVuICdwYXJzZXInIGlzIGEgc3RyaW5nYCk7XG5cdFx0Y29sb3JQcm9maWxlc1twYXJzZXJdID0gbW9kZTtcblx0fSBlbHNlIGlmICh0eXBlb2YgcGFyc2VyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRpZiAocGFyc2Vycy5pbmRleE9mKHBhcnNlcikgPCAwKSBwYXJzZXJzLnB1c2gocGFyc2VyKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcGFyc2UuanNcbnZhciBJZGVudFN0YXJ0Q29kZVBvaW50ID0gL1teXFx4MDAtXFx4N0ZdfFthLXpBLVpfXS87XG52YXIgSWRlbnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18Wy1cXHddLztcbnZhciBUb2sgPSB7XG5cdEZ1bmN0aW9uOiBcImZ1bmN0aW9uXCIsXG5cdElkZW50OiBcImlkZW50XCIsXG5cdE51bWJlcjogXCJudW1iZXJcIixcblx0UGVyY2VudGFnZTogXCJwZXJjZW50YWdlXCIsXG5cdFBhcmVuQ2xvc2U6IFwiKVwiLFxuXHROb25lOiBcIm5vbmVcIixcblx0SHVlOiBcImh1ZVwiLFxuXHRBbHBoYTogXCJhbHBoYVwiXG59O1xudmFyIF9pID0gMDtcbmZ1bmN0aW9uIGlzX251bShjaGFycykge1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGxldCBjaDEgPSBjaGFyc1tfaSArIDFdO1xuXHRpZiAoY2ggPT09IFwiLVwiIHx8IGNoID09PSBcIitcIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKSB8fCBjaDEgPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSk7XG5cdGlmIChjaCA9PT0gXCIuXCIpIHJldHVybiAvXFxkLy50ZXN0KGNoMSk7XG5cdHJldHVybiAvXFxkLy50ZXN0KGNoKTtcbn1cbmZ1bmN0aW9uIGlzX2lkZW50KGNoYXJzKSB7XG5cdGlmIChfaSA+PSBjaGFycy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0bGV0IGNoID0gY2hhcnNbX2ldO1xuXHRpZiAoSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoKSkgcmV0dXJuIHRydWU7XG5cdGlmIChjaCA9PT0gXCItXCIpIHtcblx0XHRpZiAoY2hhcnMubGVuZ3RoIC0gX2kgPCAyKSByZXR1cm4gZmFsc2U7XG5cdFx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdFx0aWYgKGNoMSA9PT0gXCItXCIgfHwgSWRlbnRTdGFydENvZGVQb2ludC50ZXN0KGNoMSkpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG52YXIgaHVlbml0cyA9IHtcblx0ZGVnOiAxLFxuXHRyYWQ6IDE4MCAvIE1hdGguUEksXG5cdGdyYWQ6IDkgLyAxMCxcblx0dHVybjogMzYwXG59O1xuZnVuY3Rpb24gbnVtKGNoYXJzKSB7XG5cdGxldCB2YWx1ZSA9IFwiXCI7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLVwiIHx8IGNoYXJzW19pXSA9PT0gXCIrXCIpIHZhbHVlICs9IGNoYXJzW19pKytdO1xuXHR2YWx1ZSArPSBkaWdpdHMoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIi5cIiAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiZVwiIHx8IGNoYXJzW19pXSA9PT0gXCJFXCIpIHtcblx0XHRpZiAoKGNoYXJzW19pICsgMV0gPT09IFwiLVwiIHx8IGNoYXJzW19pICsgMV0gPT09IFwiK1wiKSAmJiAvXFxkLy50ZXN0KGNoYXJzW19pICsgMl0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0XHRlbHNlIGlmICgvXFxkLy50ZXN0KGNoYXJzW19pICsgMV0pKSB2YWx1ZSArPSBjaGFyc1tfaSsrXSArIGRpZ2l0cyhjaGFycyk7XG5cdH1cblx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdGxldCBpZCA9IGlkZW50KGNoYXJzKTtcblx0XHRpZiAoaWQgPT09IFwiZGVnXCIgfHwgaWQgPT09IFwicmFkXCIgfHwgaWQgPT09IFwidHVyblwiIHx8IGlkID09PSBcImdyYWRcIikgcmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5IdWUsXG5cdFx0XHR2YWx1ZTogdmFsdWUgKiBodWVuaXRzW2lkXVxuXHRcdH07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiJVwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLlBlcmNlbnRhZ2UsXG5cdFx0XHR2YWx1ZTogK3ZhbHVlXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5OdW1iZXIsXG5cdFx0dmFsdWU6ICt2YWx1ZVxuXHR9O1xufVxuZnVuY3Rpb24gZGlnaXRzKGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKC9cXGQvLnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudChjaGFycykge1xuXHRsZXQgdiA9IFwiXCI7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCAmJiBJZGVudENvZGVQb2ludC50ZXN0KGNoYXJzW19pXSkpIHYgKz0gY2hhcnNbX2krK107XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gaWRlbnRsaWtlKGNoYXJzKSB7XG5cdGxldCB2ID0gaWRlbnQoY2hhcnMpO1xuXHRpZiAoY2hhcnNbX2ldID09PSBcIihcIikge1xuXHRcdF9pKys7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFRvay5GdW5jdGlvbixcblx0XHRcdHZhbHVlOiB2XG5cdFx0fTtcblx0fVxuXHRpZiAodiA9PT0gXCJub25lXCIpIHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHR2YWx1ZTogdlxuXHR9O1xufVxuZnVuY3Rpb24gdG9rZW5pemUoc3RyID0gXCJcIikge1xuXHRsZXQgY2hhcnMgPSBzdHIudHJpbSgpO1xuXHRsZXQgdG9rZW5zID0gW107XG5cdGxldCBjaDtcblx0X2kgPSAwO1xuXHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGgpIHtcblx0XHRjaCA9IGNoYXJzW19pKytdO1xuXHRcdGlmIChjaCA9PT0gXCJcXG5cIiB8fCBjaCA9PT0gXCJcdFwiIHx8IGNoID09PSBcIiBcIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIixcIikgcmV0dXJuO1xuXHRcdGlmIChjaCA9PT0gXCIpXCIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHsgdHlwZTogVG9rLlBhcmVuQ2xvc2UgfSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIitcIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHR5cGU6IFRvay5JZGVudCxcblx0XHRcdFx0XHR2YWx1ZTogaWRlbnQoY2hhcnMpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi5cIikge1xuXHRcdFx0X2ktLTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGNoID09PSBcIi9cIikge1xuXHRcdFx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIChjaGFyc1tfaV0gPT09IFwiXFxuXCIgfHwgY2hhcnNbX2ldID09PSBcIlx0XCIgfHwgY2hhcnNbX2ldID09PSBcIiBcIikpIF9pKys7XG5cdFx0XHRsZXQgYWxwaGE7XG5cdFx0XHRpZiAoaXNfbnVtKGNoYXJzKSkge1xuXHRcdFx0XHRhbHBoYSA9IG51bShjaGFycyk7XG5cdFx0XHRcdGlmIChhbHBoYS50eXBlICE9PSBUb2suSHVlKSB7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogVG9rLkFscGhhLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFscGhhXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChpc19pZGVudChjaGFycykpIHtcblx0XHRcdFx0aWYgKGlkZW50KGNoYXJzKSA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZvaWQgMFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICgvXFxkLy50ZXN0KGNoKSkge1xuXHRcdFx0X2ktLTtcblx0XHRcdHRva2Vucy5wdXNoKG51bShjaGFycykpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2goaWRlbnRsaWtlKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBwYXJzZUNvbG9yU3ludGF4KHRva2Vucykge1xuXHR0b2tlbnMuX2kgPSAwO1xuXHRsZXQgdG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAoIXRva2VuIHx8IHRva2VuLnR5cGUgIT09IFRvay5GdW5jdGlvbiB8fCB0b2tlbi52YWx1ZSAhPT0gXCJjb2xvclwiKSByZXR1cm47XG5cdHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKHRva2VuLnR5cGUgIT09IFRvay5JZGVudCkgcmV0dXJuO1xuXHRjb25zdCBtb2RlID0gY29sb3JQcm9maWxlc1t0b2tlbi52YWx1ZV07XG5cdGlmICghbW9kZSkgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGUgfTtcblx0Y29uc3QgY29vcmRzID0gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGZhbHNlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29uc3QgY2hhbm5lbHMgPSBnZXRNb2RlKG1vZGUpLmNoYW5uZWxzO1xuXHRmb3IgKGxldCBpaSA9IDAsIGMsIGNoOyBpaSA8IGNoYW5uZWxzLmxlbmd0aDsgaWkrKykge1xuXHRcdGMgPSBjb29yZHNbaWldO1xuXHRcdGNoID0gY2hhbm5lbHNbaWldO1xuXHRcdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0XHRyZXNbY2hdID0gYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgLyAxMDA7XG5cdFx0XHRpZiAoY2ggPT09IFwiYWxwaGFcIikgcmVzW2NoXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJlc1tjaF0pKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdGNvbnN0IGNvb3JkcyA9IFtdO1xuXHRsZXQgdG9rZW47XG5cdHdoaWxlICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suTm9uZSB8fCB0b2tlbi50eXBlID09PSBUb2suTnVtYmVyIHx8IHRva2VuLnR5cGUgPT09IFRvay5BbHBoYSB8fCB0b2tlbi50eXBlID09PSBUb2suUGVyY2VudGFnZSB8fCBpbmNsdWRlSHVlICYmIHRva2VuLnR5cGUgPT09IFRvay5IdWUpIHtcblx0XHRcdGNvb3Jkcy5wdXNoKHRva2VuKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rLlBhcmVuQ2xvc2UpIHtcblx0XHRcdGlmICh0b2tlbnMuX2kgPCB0b2tlbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoIDwgMyB8fCBjb29yZHMubGVuZ3RoID4gNCkgcmV0dXJuO1xuXHRpZiAoY29vcmRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdGlmIChjb29yZHNbM10udHlwZSAhPT0gVG9rLkFscGhhKSByZXR1cm47XG5cdFx0Y29vcmRzWzNdID0gY29vcmRzWzNdLnZhbHVlO1xuXHR9XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSAzKSBjb29yZHMucHVzaCh7XG5cdFx0dHlwZTogVG9rLk5vbmUsXG5cdFx0dmFsdWU6IHZvaWQgMFxuXHR9KTtcblx0cmV0dXJuIGNvb3Jkcy5ldmVyeSgoYykgPT4gYy50eXBlICE9PSBUb2suQWxwaGEpID8gY29vcmRzIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCBpbmNsdWRlSHVlKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uKSByZXR1cm47XG5cdGxldCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgaW5jbHVkZUh1ZSk7XG5cdGlmICghY29vcmRzKSByZXR1cm47XG5cdGNvb3Jkcy51bnNoaWZ0KHRva2VuLnZhbHVlKTtcblx0cmV0dXJuIGNvb3Jkcztcbn1cbnZhciBwYXJzZSA9IChjb2xvcikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm47XG5cdGNvbnN0IHRva2VucyA9IHRva2VuaXplKGNvbG9yKTtcblx0Y29uc3QgcGFyc2VkID0gdG9rZW5zID8gcGFyc2VNb2Rlcm5TeW50YXgodG9rZW5zLCB0cnVlKSA6IHZvaWQgMDtcblx0bGV0IHJlc3VsdCA9IHZvaWQgMDtcblx0bGV0IGkgPSAwO1xuXHRsZXQgbGVuID0gcGFyc2Vycy5sZW5ndGg7XG5cdHdoaWxlIChpIDwgbGVuKSBpZiAoKHJlc3VsdCA9IHBhcnNlcnNbaSsrXShjb2xvciwgcGFyc2VkKSkgIT09IHZvaWQgMCkgcmV0dXJuIHJlc3VsdDtcblx0cmV0dXJuIHRva2VucyA/IHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSA6IHZvaWQgMDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYi5qc1xuZnVuY3Rpb24gcGFyc2VSZ2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwicmdiXCIgJiYgcGFyc2VkWzBdICE9PSBcInJnYmFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwicmdiXCIgfTtcblx0Y29uc3QgWywgciwgZywgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoci50eXBlID09PSBUb2suSHVlIHx8IGcudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKHIudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5yID0gci50eXBlID09PSBUb2suTnVtYmVyID8gci52YWx1ZSAvIDI1NSA6IHIudmFsdWUgLyAxMDA7XG5cdGlmIChnLnR5cGUgIT09IFRvay5Ob25lKSByZXMuZyA9IGcudHlwZSA9PT0gVG9rLk51bWJlciA/IGcudmFsdWUgLyAyNTUgOiBnLnZhbHVlIC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIC8gMjU1IDogYi52YWx1ZSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VUcmFuc3BhcmVudC5qc1xudmFyIHBhcnNlVHJhbnNwYXJlbnQgPSAoYykgPT4gYyA9PT0gXCJ0cmFuc3BhcmVudFwiID8ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiAwLFxuXHRnOiAwLFxuXHRiOiAwLFxuXHRhbHBoYTogMFxufSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaW50ZXJwb2xhdGUvbGVycC5qc1xudmFyIGxlcnAgPSAoYSwgYiwgdCkgPT4gYSArIHQgKiAoYiAtIGEpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9waWVjZXdpc2UuanNcbnZhciBnZXRfY2xhc3NlcyA9IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0bGV0IGEgPSBhcnJbaV07XG5cdFx0bGV0IGIgPSBhcnJbaSArIDFdO1xuXHRcdGlmIChhID09PSB2b2lkIDAgJiYgYiA9PT0gdm9pZCAwKSBjbGFzc2VzLnB1c2godm9pZCAwKTtcblx0XHRlbHNlIGlmIChhICE9PSB2b2lkIDAgJiYgYiAhPT0gdm9pZCAwKSBjbGFzc2VzLnB1c2goW2EsIGJdKTtcblx0XHRlbHNlIGNsYXNzZXMucHVzaChhICE9PSB2b2lkIDAgPyBbYSwgYV0gOiBbYiwgYl0pO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcbnZhciBpbnRlcnBvbGF0b3JQaWVjZXdpc2UgPSAoaW50ZXJwb2xhdG9yKSA9PiAoYXJyKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gZ2V0X2NsYXNzZXMoYXJyKTtcblx0cmV0dXJuICh0KSA9PiB7XG5cdFx0bGV0IGNscyA9IHQgKiBjbGFzc2VzLmxlbmd0aDtcblx0XHRsZXQgaWR4ID0gdCA+PSAxID8gY2xhc3Nlcy5sZW5ndGggLSAxIDogTWF0aC5tYXgoTWF0aC5mbG9vcihjbHMpLCAwKTtcblx0XHRsZXQgcGFpciA9IGNsYXNzZXNbaWR4XTtcblx0XHRyZXR1cm4gcGFpciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJwb2xhdG9yKHBhaXJbMF0sIHBhaXJbMV0sIGNscyAtIGlkeCk7XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9saW5lYXIuanNcbnZhciBpbnRlcnBvbGF0b3JMaW5lYXIgPSBpbnRlcnBvbGF0b3JQaWVjZXdpc2UobGVycCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2FscGhhLmpzXG52YXIgZml4dXBBbHBoYSA9IChhcnIpID0+IHtcblx0bGV0IHNvbWVfZGVmaW5lZCA9IGZhbHNlO1xuXHRsZXQgcmVzID0gYXJyLm1hcCgodikgPT4ge1xuXHRcdGlmICh2ICE9PSB2b2lkIDApIHtcblx0XHRcdHNvbWVfZGVmaW5lZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9XG5cdFx0cmV0dXJuIDE7XG5cdH0pO1xuXHRyZXR1cm4gc29tZV9kZWZpbmVkID8gcmVzIDogYXJyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI3ID0ge1xuXHRtb2RlOiBcInJnYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiclwiLFxuXHRcdFwiZ1wiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1xuXHRcdHBhcnNlUmdiLFxuXHRcdHBhcnNlSGV4LFxuXHRcdHBhcnNlUmdiTGVnYWN5LFxuXHRcdHBhcnNlTmFtZWQsXG5cdFx0cGFyc2VUcmFuc3BhcmVudCxcblx0XHRcInNyZ2JcIlxuXHRdLFxuXHRzZXJpYWxpemU6IFwic3JnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRnOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRnYW11dDogdHJ1ZSxcblx0d2hpdGU6IHtcblx0XHRyOiAxLFxuXHRcdGc6IDEsXG5cdFx0YjogMVxuXHR9LFxuXHRibGFjazoge1xuXHRcdHI6IDAsXG5cdFx0ZzogMCxcblx0XHRiOiAwXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0QTk4VG9YeXo2NS5qc1xudmFyIGxpbmVhcml6ZSQyID0gKHYgPSAwKSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgNTYzIC8gMjU2KSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0QTk4VG9YeXo2NSA9IChhOTgpID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUkMihhOTgucik7XG5cdGxldCBnID0gbGluZWFyaXplJDIoYTk4LmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQyKGE5OC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjU3NjY2OTA0MjkxMDEzMDUgKiByICsgLjE4NTU1ODIzNzkwNjU0NjMgKiBnICsgLjE4ODIyODY0NjIzNDk5NDcgKiBiLFxuXHRcdHk6IC4yOTczNDQ5NzUyNTA1MzYgKiByICsgLjYyNzM2MzU2NjI1NTQ2NjEgKiBnICsgLjA3NTI5MTQ1ODQ5Mzk5NzkgKiBiLFxuXHRcdHo6IC4wMjcwMzEzNjEzODY0MTIzICogciArIC4wNzA2ODg4NTI1MzU4MjcyICogZyArIC45OTEzMzc1MzY4Mzc2Mzg2ICogYlxuXHR9O1xuXHRpZiAoYTk4LmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGE5OC5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9jb252ZXJ0WHl6NjVUb0E5OC5qc1xudmFyIGdhbW1hJDIgPSAodikgPT4gTWF0aC5wb3coTWF0aC5hYnModiksIDI1NiAvIDU2MykgKiBNYXRoLnNpZ24odik7XG52YXIgY29udmVydFh5ejY1VG9BOTggPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJhOThcIixcblx0XHRyOiBnYW1tYSQyKHggKiAyLjA0MTU4NzkwMzgxMDc0NjUgLSB5ICogLjU2NTAwNjk3NDI3ODg1OTcgLSAuMzQ0NzMxMzUwNzc4MzI5NyAqIHopLFxuXHRcdGc6IGdhbW1hJDIoeCAqIC0uOTY5MjQzNjM2MjgwODc5OCArIHkgKiAxLjg3NTk2NzUwMTUwNzcyMDYgKyAuMDQxNTU1MDU3NDA3MTc1NiAqIHopLFxuXHRcdGI6IGdhbW1hJDIoeCAqIC4wMTM0NDQyODA2MzIwMzEyIC0geSAqIC4xMTgzNjIzOTIyMzEwMTg0ICsgMS4wMTUxNzQ5OTQzOTEyMDU4ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0UmdiVG9McmdiLmpzXG52YXIgZm4kMyA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA8PSAuMDQwNDUpIHJldHVybiBjIC8gMTIuOTI7XG5cdHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogTWF0aC5wb3coKGFicyArIC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59O1xudmFyIGNvbnZlcnRSZ2JUb0xyZ2IgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogZm4kMyhyKSxcblx0XHRnOiBmbiQzKGcpLFxuXHRcdGI6IGZuJDMoYilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFJnYlRvWHl6NjUuanNcbnZhciBjb252ZXJ0UmdiVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQxMjM5MDc5OTI2NTk1OTMgKiByICsgLjM1NzU4NDMzOTM4Mzg3OCAqIGcgKyAuMTgwNDgwNzg4NDAxODM0MyAqIGIsXG5cdFx0eTogLjIxMjYzOTAwNTg3MTUxMDIgKiByICsgLjcxNTE2ODY3ODc2Nzc1NiAqIGcgKyAuMDcyMTkyMzE1MzYwNzMzNyAqIGIsXG5cdFx0ejogLjAxOTMzMDgxODcxNTU5MTggKiByICsgLjExOTE5NDc3OTc5NDYyNiAqIGcgKyAuOTUwNTMyMTUyMjQ5NjYwNyAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9jb252ZXJ0THJnYlRvUmdiLmpzXG52YXIgZm4kMiA9IChjID0gMCkgPT4ge1xuXHRjb25zdCBhYnMgPSBNYXRoLmFicyhjKTtcblx0aWYgKGFicyA+IC4wMDMxMzA4KSByZXR1cm4gKE1hdGguc2lnbihjKSB8fCAxKSAqICgxLjA1NSAqIE1hdGgucG93KGFicywgMSAvIDIuNCkgLSAuMDU1KTtcblx0cmV0dXJuIGMgKiAxMi45Mjtcbn07XG52YXIgY29udmVydExyZ2JUb1JnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0sIG1vZGUgPSBcInJnYlwiKSA9PiB7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRyOiBmbiQyKHIpLFxuXHRcdGc6IGZuJDIoZyksXG5cdFx0YjogZm4kMihiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo2NVRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMjQwOTY5OTQxOTA0NTIyNiAtIHkgKiAxLjUzNzM4MzE3NzU3MDA5NCAtIC40OTg2MTA3NjAyOTMwMDM0ICogeixcblx0XHRnOiB4ICogLS45NjkyNDM2MzYyODA4Nzk2ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNCArIC4wNDE1NTUwNTc0MDcxNzU2ICogeixcblx0XHRiOiB4ICogLjA1NTYzMDA3OTY5Njk5MzYgLSB5ICogLjIwMzk3Njk1ODg4ODk3NjUgKyAxLjA1Njk3MTUxNDI0Mjg3ODQgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hOTgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjYgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwiYTk4XCIsXG5cdHBhcnNlOiBbXCJhOTgtcmdiXCJdLFxuXHRzZXJpYWxpemU6IFwiYTk4LXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb0E5OChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0E5OFxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEE5OFRvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydEE5OFRvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9ub3JtYWxpemVIdWUuanNcbnZhciBub3JtYWxpemVIdWUgPSAoaHVlKSA9PiAoaHVlID0gaHVlICUgMzYwKSA8IDAgPyBodWUgKyAzNjAgOiBodWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ZpeHVwL2h1ZS5qc1xudmFyIGh1ZSA9IChodWVzLCBmbikgPT4ge1xuXHRyZXR1cm4gaHVlcy5tYXAoKGh1ZSwgaWR4LCBhcnIpID0+IHtcblx0XHRpZiAoaHVlID09PSB2b2lkIDApIHJldHVybiBodWU7XG5cdFx0bGV0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIdWUoaHVlKTtcblx0XHRpZiAoaWR4ID09PSAwIHx8IGh1ZXNbaWR4IC0gMV0gPT09IHZvaWQgMCkgcmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdFx0cmV0dXJuIGZuKG5vcm1hbGl6ZWQgLSBub3JtYWxpemVIdWUoYXJyW2lkeCAtIDFdKSk7XG5cdH0pLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG5cdFx0aWYgKCFhY2MubGVuZ3RoIHx8IGN1cnIgPT09IHZvaWQgMCB8fCBhY2NbYWNjLmxlbmd0aCAtIDFdID09PSB2b2lkIDApIHtcblx0XHRcdGFjYy5wdXNoKGN1cnIpO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9XG5cdFx0YWNjLnB1c2goY3VyciArIGFjY1thY2MubGVuZ3RoIC0gMV0pO1xuXHRcdHJldHVybiBhY2M7XG5cdH0sIFtdKTtcbn07XG52YXIgZml4dXBIdWVTaG9ydGVyID0gKGFycikgPT4gaHVlKGFyciwgKGQpID0+IE1hdGguYWJzKGQpIDw9IDE4MCA/IGQgOiBkIC0gMzYwICogTWF0aC5zaWduKGQpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnN0YW50cy5qc1xudmFyIE0gPSBbXG5cdC0uMTQ4NjEsXG5cdDEuNzgyNzcsXG5cdC0uMjkyMjcsXG5cdC0uOTA2NDksXG5cdDEuOTcyOTQsXG5cdDBcbl07XG52YXIgZGVnVG9SYWQgPSBNYXRoLlBJIC8gMTgwO1xudmFyIHJhZFRvRGVnID0gMTgwIC8gTWF0aC5QSTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRSZ2JUb0N1YmVoZWxpeC5qc1xudmFyIERFID0gTVszXSAqIE1bNF07XG52YXIgQkUgPSBNWzFdICogTVs0XTtcbnZhciBCQ0FEID0gTVsxXSAqIE1bMl0gLSBNWzBdICogTVszXTtcbnZhciBjb252ZXJ0UmdiVG9DdWJlaGVsaXggPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBsID0gKEJDQUQgKiBiICsgciAqIERFIC0gZyAqIEJFKSAvIChCQ0FEICsgREUgLSBCRSk7XG5cdGxldCB4ID0gYiAtIGw7XG5cdGxldCB5ID0gKE1bNF0gKiAoZyAtIGwpIC0gTVsyXSAqIHgpIC8gTVszXTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRcdGwsXG5cdFx0czogbCA9PT0gMCB8fCBsID09PSAxID8gdm9pZCAwIDogTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpIC8gKE1bNF0gKiBsICogKDEgLSBsKSlcblx0fTtcblx0aWYgKHJlcy5zKSByZXMuaCA9IE1hdGguYXRhbjIoeSwgeCkgKiByYWRUb0RlZyAtIDEyMDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2NvbnZlcnRDdWJlaGVsaXhUb1JnYi5qc1xudmFyIGNvbnZlcnRDdWJlaGVsaXhUb1JnYiA9ICh7IGgsIHMsIGwsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRoID0gKGggPT09IHZvaWQgMCA/IDAgOiBoICsgMTIwKSAqIGRlZ1RvUmFkO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IGFtcCA9IHMgPT09IHZvaWQgMCA/IDAgOiBzICogbCAqICgxIC0gbCk7XG5cdGxldCBjb3NoID0gTWF0aC5jb3MoaCk7XG5cdGxldCBzaW5oID0gTWF0aC5zaW4oaCk7XG5cdHJlcy5yID0gbCArIGFtcCAqIChNWzBdICogY29zaCArIE1bMV0gKiBzaW5oKTtcblx0cmVzLmcgPSBsICsgYW1wICogKE1bMl0gKiBjb3NoICsgTVszXSAqIHNpbmgpO1xuXHRyZXMuYiA9IGwgKyBhbXAgKiAoTVs0XSAqIGNvc2ggKyBNWzVdICogc2luaCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RpZmZlcmVuY2UuanNcbnZhciBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQucyB8fCAhc21wLnMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5zICogc21wLnMpICogZEg7XG59O1xudmFyIGRpZmZlcmVuY2VIdWVOYWl2ZSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwKSByZXR1cm4gMDtcblx0bGV0IHN0ZF9oID0gbm9ybWFsaXplSHVlKHN0ZC5oKTtcblx0bGV0IHNtcF9oID0gbm9ybWFsaXplSHVlKHNtcC5oKTtcblx0aWYgKE1hdGguYWJzKHNtcF9oIC0gc3RkX2gpID4gMTgwKSByZXR1cm4gc3RkX2ggLSAoc21wX2ggLSAzNjAgKiBNYXRoLnNpZ24oc21wX2ggLSBzdGRfaCkpO1xuXHRyZXR1cm4gc21wX2ggLSBzdGRfaDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZUNocm9tYSA9IChzdGQsIHNtcCkgPT4ge1xuXHRpZiAoc3RkLmggPT09IHZvaWQgMCB8fCBzbXAuaCA9PT0gdm9pZCAwIHx8ICFzdGQuYyB8fCAhc21wLmMpIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRsZXQgZEggPSBNYXRoLnNpbigoc21wX2ggLSBzdGRfaCArIDM2MCkgLyAyICogTWF0aC5QSSAvIDE4MCk7XG5cdHJldHVybiAyICogTWF0aC5zcXJ0KHN0ZC5jICogc21wLmMpICogZEg7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9hdmVyYWdlLmpzXG52YXIgYXZlcmFnZUFuZ2xlID0gKHZhbCkgPT4ge1xuXHRsZXQgc3VtID0gdmFsLnJlZHVjZSgoc3VtLCB2YWwpID0+IHtcblx0XHRpZiAodmFsICE9PSB2b2lkIDApIHtcblx0XHRcdGxldCByYWQgPSB2YWwgKiBNYXRoLlBJIC8gMTgwO1xuXHRcdFx0c3VtLnNpbiArPSBNYXRoLnNpbihyYWQpO1xuXHRcdFx0c3VtLmNvcyArPSBNYXRoLmNvcyhyYWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VtO1xuXHR9LCB7XG5cdFx0c2luOiAwLFxuXHRcdGNvczogMFxuXHR9KTtcblx0bGV0IGFuZ2xlID0gTWF0aC5hdGFuMihzdW0uc2luLCBzdW0uY29zKSAqIDE4MCAvIE1hdGguUEk7XG5cdHJldHVybiBhbmdsZSA8IDAgPyAzNjAgKyBhbmdsZSA6IGFuZ2xlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvY3ViZWhlbGl4L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDI1ID0ge1xuXHRtb2RlOiBcImN1YmVoZWxpeFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1jdWJlaGVsaXhcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWN1YmVoZWxpeFwiLFxuXHRyYW5nZXM6IHtcblx0XHRoOiBbMCwgMzYwXSxcblx0XHRzOiBbMCwgNC42MTRdLFxuXHRcdGw6IFswLCAxXVxuXHR9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCB9LFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0Q3ViZWhlbGl4VG9SZ2IgfSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMYWJUb0xjaC5qc1xudmFyIGNvbnZlcnRMYWJUb0xjaCA9ICh7IGwsIGEsIGIsIGFscGhhIH0sIG1vZGUgPSBcImxjaFwiKSA9PiB7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL2NvbnZlcnRMY2hUb0xhYi5qc1xudmFyIGNvbnZlcnRMY2hUb0xhYiA9ICh7IGwsIGMsIGgsIGFscGhhIH0sIG1vZGUgPSBcImxhYlwiKSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGUsXG5cdFx0bCxcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnN0YW50cy5qc1xudmFyIGskMiA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMiA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb25zdGFudHMuanNcbnZhciBENTAgPSB7XG5cdFg6IC4zNDU3IC8gLjM1ODUsXG5cdFk6IDEsXG5cdFo6IC4yOTU4IC8gLjM1ODVcbn07XG52YXIgRDY1ID0ge1xuXHRYOiAuMzEyNyAvIC4zMjksXG5cdFk6IDEsXG5cdFo6IC4zNTgzIC8gLjMyOVxufTtcbnZhciBrJDEgPSBNYXRoLnBvdygyOSwgMykgLyBNYXRoLnBvdygzLCAzKTtcbnZhciBlJDEgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9YeXo2NS5qc1xudmFyIGZuJDEgPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlJDIgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gayQyO1xudmFyIGNvbnZlcnRMYWI2NVRvWHl6NjUgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogZm4kMShmeCkgKiBENjUuWCxcblx0XHR5OiBmbiQxKGZ5KSAqIEQ2NS5ZLFxuXHRcdHo6IGZuJDEoZnopICogRDY1Llpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydExhYjY1VG9SZ2IuanNcbnZhciBjb252ZXJ0TGFiNjVUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRMYWI2NVRvWHl6NjUobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2NvbnZlcnRYeXo2NVRvTGFiNjUuanNcbnZhciBmJDEgPSAodmFsdWUpID0+IHZhbHVlID4gZSQyID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrJDIgKiB2YWx1ZSArIDE2KSAvIDExNjtcbnZhciBjb252ZXJ0WHl6NjVUb0xhYjY1ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmJDEoeCAvIEQ2NS5YKTtcblx0bGV0IGYxID0gZiQxKHkgLyBENjUuWSk7XG5cdGxldCBmMiA9IGYkMSh6IC8gRDY1LlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiNjVcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFJnYlRvTGFiNjUuanNcbnZhciBjb252ZXJ0UmdiVG9MYWI2NSA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo2NVRvTGFiNjUoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29uc3RhbnRzLmpzXG52YXIgzrggPSAyNiAvIDE4MCAqIE1hdGguUEk7XG52YXIgY29zzrggPSBNYXRoLmNvcyjOuCk7XG52YXIgc2luzrggPSBNYXRoLnNpbijOuCk7XG52YXIgZmFjdG9yID0gMTAwIC8gTWF0aC5sb2coMTM5IC8gMTAwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0RGxjaFRvTGFiNjUuanNcbnZhciBjb252ZXJ0RGxjaFRvTGFiNjUgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYyA9PT0gdm9pZCAwKSBjID0gMDtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IChNYXRoLmV4cChsICogMSAvIGZhY3RvcikgLSAxKSAvIC4wMDM5XG5cdH07XG5cdGxldCBHID0gKE1hdGguZXhwKC4wNDM1ICogYyAqIDEgKiAxKSAtIDEpIC8gLjA3NTtcblx0bGV0IGUgPSBHICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdGxldCBmID0gRyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJIC0gzrgpO1xuXHRyZXMuYSA9IGUgKiBjb3POuCAtIGYgLyAuODMgKiBzaW7OuDtcblx0cmVzLmIgPSBlICogc2luzrggKyBmIC8gLjgzICogY29zzrg7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsY2gvY29udmVydExhYjY1VG9EbGNoLmpzXG52YXIgY29udmVydExhYjY1VG9EbGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgZSA9IGEgKiBjb3POuCArIGIgKiBzaW7OuDtcblx0bGV0IGYgPSAuODMgKiAoYiAqIGNvc864IC0gYSAqIHNpbs64KTtcblx0bGV0IEcgPSBNYXRoLnNxcnQoZSAqIGUgKyBmICogZik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJkbGNoXCIsXG5cdFx0bDogZmFjdG9yIC8gMSAqIE1hdGgubG9nKDEgKyAuMDAzOSAqIGwpLFxuXHRcdGM6IE1hdGgubG9nKDEgKyAuMDc1ICogRykgLyAoLjA0MzUgKiAxICogMSlcblx0fTtcblx0aWYgKHJlcy5jKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZSgoTWF0aC5hdGFuMihmLCBlKSArIM64KSAvIE1hdGguUEkgKiAxODApO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGFiL2RlZmluaXRpb24uanNcbnZhciBjb252ZXJ0RGxhYlRvTGFiNjUgPSAoYykgPT4gY29udmVydERsY2hUb0xhYjY1KGNvbnZlcnRMYWJUb0xjaChjLCBcImRsY2hcIikpO1xudmFyIGNvbnZlcnRMYWI2NVRvRGxhYiA9IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoY29udmVydExhYjY1VG9EbGNoKGMpLCBcImRsYWJcIik7XG52YXIgZGVmaW5pdGlvbiQyNCA9IHtcblx0bW9kZTogXCJkbGFiXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sYWJcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGFiVG9MYWI2NSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxhYlRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsYWIoY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstNDAuMDksIDQ1LjUwMV0sXG5cdFx0YjogWy00MC40NjksIDQ0LjM0NF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMyA9IHtcblx0bW9kZTogXCJkbGNoXCIsXG5cdHBhcnNlOiBbXCItLWRpbjk5by1sY2hcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWRpbjk5by1sY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnREbGNoVG9MYWI2NSxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwiZGxhYlwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0RGxjaFRvTGFiNjUoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0bGFiNjU6IGNvbnZlcnRMYWI2NVRvRGxjaCxcblx0XHRkbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb0RsY2goY29udmVydFJnYlRvTGFiNjUoYykpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGM6IFswLCA1MS40ODRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2NvbnZlcnRIc2lUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzaVRvUmdiKHsgaCwgcywgaSwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRnOiBpICogKDEgLSBzKSxcblx0XHRcdFx0YjogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiBpICogKDEgLSBzKSxcblx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0YjogaSAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydFJnYlRvSHNpLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic2koeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzaVwiLFxuXHRcdHM6IHIgKyBnICsgYiA9PT0gMCA/IDAgOiAxIC0gMyAqIG0gLyAociArIGcgKyBiKSxcblx0XHRpOiAociArIGcgKyBiKSAvIDNcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNpL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIyID0ge1xuXHRtb2RlOiBcImhzaVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHNpVG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHNpXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc2lcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic2kgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcImlcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvY29udmVydEhzbFRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNsVG9SZ2IoeyBoLCBzLCBsLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGxldCBtMSA9IGwgKyBzICogKGwgPCAuNSA/IGwgOiAxIC0gbCk7XG5cdGxldCBtMiA9IG0xIC0gKG0xIC0gbCkgKiAyICogTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IG0yLFxuXHRcdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGc6IG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IG0xXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMixcblx0XHRcdFx0ZzogMiAqIGwgLSBtMSxcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0xLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IDIgKiBsIC0gbTEsXG5cdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0UmdiVG9Ic2wuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzbCh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNsXCIsXG5cdFx0czogTSA9PT0gbSA/IDAgOiAoTSAtIG0pIC8gKDEgLSBNYXRoLmFicyhNICsgbSAtIDEpKSxcblx0XHRsOiAuNSAqIChNICsgbSlcblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvdXRpbC9odWUuanNcbnZhciBodWVUb0RlZyA9ICh2YWwsIHVuaXQpID0+IHtcblx0c3dpdGNoICh1bml0KSB7XG5cdFx0Y2FzZSBcImRlZ1wiOiByZXR1cm4gK3ZhbDtcblx0XHRjYXNlIFwicmFkXCI6IHJldHVybiB2YWwgLyBNYXRoLlBJICogMTgwO1xuXHRcdGNhc2UgXCJncmFkXCI6IHJldHVybiB2YWwgLyAxMCAqIDk7XG5cdFx0Y2FzZSBcInR1cm5cIjogcmV0dXJuIHZhbCAqIDM2MDtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsTGVnYWN5LmpzXG52YXIgaHNsX29sZCA9IG5ldyBSZWdFeHAoYF5oc2xhP1xcXFwoXFxcXHMqJHtodWUkMX0ke2N9JHtwZXJ9JHtjfSR7cGVyfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciBwYXJzZUhzbExlZ2FjeSA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2ggPSBjb2xvci5tYXRjaChoc2xfb2xkKTtcblx0aWYgKCFtYXRjaCkgcmV0dXJuO1xuXHRsZXQgcmVzID0geyBtb2RlOiBcImhzbFwiIH07XG5cdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuaCA9ICttYXRjaFszXTtcblx0ZWxzZSBpZiAobWF0Y2hbMV0gIT09IHZvaWQgMCAmJiBtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuaCA9IGh1ZVRvRGVnKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMucyA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzRdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIG1hdGNoWzVdIC8gMTAwKSwgMSk7XG5cdGlmIChtYXRjaFs2XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs2XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs3XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbN10pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9wYXJzZUhzbC5qc1xuZnVuY3Rpb24gcGFyc2VIc2woY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHNsXCIgJiYgcGFyc2VkWzBdICE9PSBcImhzbGFcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0Y29uc3QgWywgaCwgcywgbCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChzLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKHMudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5zID0gcy52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IGwudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjEgPSB7XG5cdG1vZGU6IFwiaHNsXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2xUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzbCB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdHBhcnNlOiBbcGFyc2VIc2wsIHBhcnNlSHNsTGVnYWN5XSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGhzbCgke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy5zICE9PSB2b2lkIDAgPyBjLnMgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MubCAhPT0gdm9pZCAwID8gYy5sICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZVNhdHVyYXRpb24gfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2NvbnZlcnRIc3ZUb1JnYi5qc1xuZnVuY3Rpb24gY29udmVydEhzdlRvUmdiKHsgaCwgcywgdiwgYWxwaGEgfSkge1xuXHRoID0gbm9ybWFsaXplSHVlKGggIT09IHZvaWQgMCA/IGggOiAwKTtcblx0aWYgKHMgPT09IHZvaWQgMCkgcyA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgZiA9IE1hdGguYWJzKGggLyA2MCAlIDIgLSAxKTtcblx0bGV0IHJlcztcblx0c3dpdGNoIChNYXRoLmZsb29yKGggLyA2MCkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0Zzogdixcblx0XHRcdFx0YjogdiAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzICogZiksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHZcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IHYsXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzICogZilcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OiByZXMgPSB7XG5cdFx0XHRyOiB2ICogKDEgLSBzKSxcblx0XHRcdGc6IHYgKiAoMSAtIHMpLFxuXHRcdFx0YjogdiAqICgxIC0gcylcblx0XHR9O1xuXHR9XG5cdHJlcy5tb2RlID0gXCJyZ2JcIjtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydFJnYlRvSHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Ic3YoeyByLCBnLCBiLCBhbHBoYSB9KSB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBNID0gTWF0aC5tYXgociwgZywgYiksIG0gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImhzdlwiLFxuXHRcdHM6IE0gPT09IDAgPyAwIDogMSAtIG0gLyBNLFxuXHRcdHY6IE1cblx0fTtcblx0aWYgKE0gLSBtICE9PSAwKSByZXMuaCA9IChNID09PSByID8gKGcgLSBiKSAvIChNIC0gbSkgKyAoZyA8IGIpICogNiA6IE0gPT09IGcgPyAoYiAtIHIpIC8gKE0gLSBtKSArIDIgOiAociAtIGcpIC8gKE0gLSBtKSArIDQpICogNjA7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHN2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIwID0ge1xuXHRtb2RlOiBcImhzdlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHN2VG9SZ2IgfSxcblx0cGFyc2U6IFtcIi0taHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1oc3ZcIixcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Ic3YgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydEh3YlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHdiVG9SZ2IoeyBoLCB3LCBiLCBhbHBoYSB9KSB7XG5cdGlmICh3ID09PSB2b2lkIDApIHcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0aWYgKHcgKyBiID4gMSkge1xuXHRcdGxldCBzID0gdyArIGI7XG5cdFx0dyAvPSBzO1xuXHRcdGIgLz0gcztcblx0fVxuXHRyZXR1cm4gY29udmVydEhzdlRvUmdiKHtcblx0XHRoLFxuXHRcdHM6IGIgPT09IDEgPyAxIDogMSAtIHcgLyAoMSAtIGIpLFxuXHRcdHY6IDEgLSBiLFxuXHRcdGFscGhhXG5cdH0pO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvY29udmVydFJnYlRvSHdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0UmdiVG9Id2IocmdiYSkge1xuXHRsZXQgaHN2ID0gY29udmVydFJnYlRvSHN2KHJnYmEpO1xuXHRpZiAoaHN2ID09PSB2b2lkIDApIHJldHVybiB2b2lkIDA7XG5cdGxldCBzID0gaHN2LnMgIT09IHZvaWQgMCA/IGhzdi5zIDogMDtcblx0bGV0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHdiXCIsXG5cdFx0dzogKDEgLSBzKSAqIHYsXG5cdFx0YjogMSAtIHZcblx0fTtcblx0aWYgKGhzdi5oICE9PSB2b2lkIDApIHJlcy5oID0gaHN2Lmg7XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gaHN2LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9od2IvcGFyc2VId2IuanNcbmZ1bmN0aW9uIFBhcnNlSHdiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImh3YlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJod2JcIiB9O1xuXHRjb25zdCBbLCBoLCB3LCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHcudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAody50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLncgPSB3LnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5iID0gYi52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOSA9IHtcblx0bW9kZTogXCJod2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEh3YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHdiIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJ3XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtQYXJzZUh3Yl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBod2IoJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSAke2MudyAhPT0gdm9pZCAwID8gYy53ICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHR3OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVOYWl2ZSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oZHIvdHJhbnNmZXIuanNcbnZhciBNMSA9IC4xNTkzMDE3NTc4MTI1O1xudmFyIE0yID0gNzguODQzNzU7XG52YXIgQzEgPSAuODM1OTM3NTtcbnZhciBDMiA9IDE4Ljg1MTU2MjU7XG52YXIgQzMgPSAxOC42ODc1O1xuZnVuY3Rpb24gdHJhbnNmZXJQcURlY29kZSh2KSB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGNvbnN0IGMgPSBNYXRoLnBvdyh2LCAxIC8gTTIpO1xuXHRyZXR1cm4gMWU0ICogTWF0aC5wb3coTWF0aC5tYXgoMCwgYyAtIEMxKSAvIChDMiAtIEMzICogYyksIDEgLyBNMSk7XG59XG5mdW5jdGlvbiB0cmFuc2ZlclBxRW5jb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogYykgLyAoMSArIEMzICogYyksIE0yKTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRJdHBUb1h5ejY1LmpzXG52YXIgdG9SZWwgPSAoYykgPT4gTWF0aC5tYXgoYyAvIDIwMywgMCk7XG52YXIgY29udmVydEl0cFRvWHl6NjUgPSAoeyBpLCB0LCBwLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAodCA9PT0gdm9pZCAwKSB0ID0gMDtcblx0aWYgKHAgPT09IHZvaWQgMCkgcCA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuMDA4NjA5MDM3MDM3OTMyNzYxICogdCArIC4xMTEwMjk2MjUwMDMwMjU5MyAqIHApO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcURlY29kZShpIC0gLjAwODYwOTAzNzAzNzkzMjc1ICogdCAtIC4xMTEwMjk2MjUwMDMwMjU5OSAqIHApO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcURlY29kZShpICsgLjU2MDAzMTMzNTcxMDY3OTEgKiB0IC0gLjMyMDYyNzE3NDk4NzMxODg1ICogcCk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogdG9SZWwoMi4wNzAxNTIyMTgzODk0MjIgKiBsIC0gMS4zMjYzNDczMzg5NjcxNTU2ICogbSArIC4yMDY2NTEwNDc2Mjk0MDUxICogcyksXG5cdFx0eTogdG9SZWwoLjM2NDczODUyMDk3NDgwNzQgKiBsICsgLjY4MDU2NjAyNDk0NzIyNyAqIG0gLSAuMDQ1MzA0NTQ1OTIyMDM0NiAqIHMpLFxuXHRcdHo6IHRvUmVsKC0uMDQ5NzQ3MjA3NTM1ODEyICogbCAtIC4wNDkyNjA5NjY2OTY2MTM4ICogbSArIDEuMTg4MDY1OTI0OTkyMzA0MiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9jb252ZXJ0WHl6NjVUb0l0cC5qc1xudmFyIHRvQWJzID0gKGMgPSAwKSA9PiBNYXRoLm1heChjICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0l0cCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0Y29uc3QgYWJzWCA9IHRvQWJzKHgpO1xuXHRjb25zdCBhYnNZID0gdG9BYnMoeSk7XG5cdGNvbnN0IGFic1ogPSB0b0Ficyh6KTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFFbmNvZGUoLjM1OTI4MzI1OTAxMjEyMTcgKiBhYnNYICsgLjY5NzYwNTExNDc3Nzk1MDIgKiBhYnNZIC0gLjAzNTg5MTU5MzIzMjAyODkgKiBhYnNaKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyUHFFbmNvZGUoLS4xOTIwODA4NDYzNzA0OTk1ICogYWJzWCArIDEuMTAwNDc2Nzk3MDM3NDMyMyAqIGFic1kgKyAuMDc1Mzc0ODY1ODUxOTExOCAqIGFic1opO1xuXHRjb25zdCBzID0gdHJhbnNmZXJQcUVuY29kZSguMDA3MDc5Nzg0NDYwNzQ3NyAqIGFic1ggKyAuMDc0ODM5NjY2MjE4NjM2NiAqIGFic1kgKyAuODQzMzI2NTQ1Mzg5ODc2NSAqIGFic1opO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJpdHBcIixcblx0XHRpOiAuNSAqIGwgKyAuNSAqIG0sXG5cdFx0dDogMS42MTM3Njk1MzEyNSAqIGwgLSAzLjMyMzQ4NjMyODEyNSAqIG0gKyAxLjcwOTcxNjc5Njg3NSAqIHMsXG5cdFx0cDogNC4zNzgxNzM4MjgxMjUgKiBsIC0gNC4yNDU2MDU0Njg3NSAqIG0gLSAuMTMyNTY4MzU5Mzc1ICogc1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTggPSB7XG5cdG1vZGU6IFwiaXRwXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJpXCIsXG5cdFx0XCJ0XCIsXG5cdFx0XCJwXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWljdGNwXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1pY3RjcFwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydEl0cFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRJdHBUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9JdHAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvSXRwKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSlcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0aTogWzAsIC41ODFdLFxuXHRcdHQ6IFstLjM2OSwgLjI3Ml0sXG5cdFx0cDogWy0uMTY0LCAuMzMxXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR0OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0cDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFh5ejY1VG9KYWIuanNcbnZhciBwJDEgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAkMSA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcUVuY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2biA9IE1hdGgucG93KHYgLyAxZTQsIE0xKTtcblx0cmV0dXJuIE1hdGgucG93KChDMSArIEMyICogdm4pIC8gKDEgKyBDMyAqIHZuKSwgcCQxKTtcbn07XG52YXIgYWJzID0gKHYgPSAwKSA9PiBNYXRoLm1heCh2ICogMjAzLCAwKTtcbnZhciBjb252ZXJ0WHl6NjVUb0phYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0eCA9IGFicyh4KTtcblx0eSA9IGFicyh5KTtcblx0eiA9IGFicyh6KTtcblx0bGV0IHhwID0gMS4xNSAqIHggLSAuMTUgKiB6O1xuXHRsZXQgeXAgPSAuNjYgKiB5ICsgLjM0ICogeDtcblx0bGV0IGwgPSBqYWJQcUVuY29kZSguNDE0Nzg5NzIgKiB4cCArIC41Nzk5OTkgKiB5cCArIC4wMTQ2NDggKiB6KTtcblx0bGV0IG0gPSBqYWJQcUVuY29kZSgtLjIwMTUxICogeHAgKyAxLjEyMDY0OSAqIHlwICsgLjA1MzEwMDggKiB6KTtcblx0bGV0IHMgPSBqYWJQcUVuY29kZSgtLjAxNjYwMDggKiB4cCArIC4yNjQ4ICogeXAgKyAuNjY4NDc5OSAqIHopO1xuXHRsZXQgaSA9IChsICsgbSkgLyAyO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0ajogLjQ0ICogaSAvICgxIC0gLjU2ICogaSkgLSBkMCQxLFxuXHRcdGE6IDMuNTI0ICogbCAtIDQuMDY2NzA4ICogbSArIC41NDI3MDggKiBzLFxuXHRcdGI6IC4xOTkwNzYgKiBsICsgMS4wOTY3OTkgKiBtIC0gMS4yOTU4NzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9YeXo2NS5qc1xudmFyIHAgPSAxMzQuMDM0Mzc0OTk5OTk5OTg7XG52YXIgZDAgPSAxNjI5NTQ5OTUzMjgyMTU2NWUtMjc7XG52YXIgamFiUHFEZWNvZGUgPSAodikgPT4ge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRsZXQgdnAgPSBNYXRoLnBvdyh2LCAxIC8gcCk7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdygoQzEgLSB2cCkgLyAoQzMgKiB2cCAtIEMyKSwgMSAvIE0xKTtcbn07XG52YXIgcmVsID0gKHYpID0+IHYgLyAyMDM7XG52YXIgY29udmVydEphYlRvWHl6NjUgPSAoeyBqLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChqID09PSB2b2lkIDApIGogPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBpID0gKGogKyBkMCkgLyAoLjQ0ICsgLjU2ICogKGogKyBkMCkpO1xuXHRsZXQgbCA9IGphYlBxRGVjb2RlKGkgKyAuMTM4NjA1MDQgKiBhICsgLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgbSA9IGphYlBxRGVjb2RlKGkgLSAuMTM4NjA1MDQgKiBhIC0gLjA1ODA0NzMxNiAqIGIpO1xuXHRsZXQgcyA9IGphYlBxRGVjb2RlKGkgLSAuMDk2MDE5MjQyICogYSAtIC44MTE4OTE5ICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IHJlbCgxLjY2MTM3MzAyNDY1MjE3NCAqIGwgLSAuOTE0NTIzMDgxMzA0MzQ4ICogbSArIC4yMzEzNjIwODE3MzkxMzA0NSAqIHMpLFxuXHRcdHk6IHJlbCgtLjMyNTA3NTg2MTE4NDQ1MzMgKiBsICsgMS41NzE4NDcwMjY3MzI1NDMgKiBtIC0gLjIxODI1MzgzNDUzMjI3OTI4ICogcyksXG5cdFx0ejogcmVsKC0uMDkwOTgyODExICogbCAtIC4zMTI3MjgyOSAqIG0gKyAxLjUyMjc2NjYgKiBzKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qYWIvY29udmVydFJnYlRvSmFiLmpzXG52YXIgY29udmVydFJnYlRvSmFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9KYWIoY29udmVydFJnYlRvWHl6NjUocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0SmFiVG9SZ2IuanNcbnZhciBjb252ZXJ0SmFiVG9SZ2IgPSAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRKYWJUb1h5ejY1KGNvbG9yKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNyA9IHtcblx0bW9kZTogXCJqYWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tanphemJ6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemF6YnpcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0phYixcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9KYWJcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0SmFiVG9SZ2IsXG5cdFx0eHl6NjU6IGNvbnZlcnRKYWJUb1h5ejY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGo6IFswLCAuMjIyXSxcblx0XHRhOiBbLS4xMDksIC4xMjldLFxuXHRcdGI6IFstLjE4NSwgLjEzNF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGI6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamNoL2NvbnZlcnRKYWJUb0pjaC5qc1xudmFyIGNvbnZlcnRKYWJUb0pjaCA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImpjaFwiLFxuXHRcdGosXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEpjaFRvSmFiLmpzXG52YXIgY29udmVydEpjaFRvSmFiID0gKHsgaiwgYywgaCwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImphYlwiLFxuXHRcdGosXG5cdFx0YTogYyA/IGMgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSkgOiAwLFxuXHRcdGI6IGMgPyBjICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpIDogMFxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTYgPSB7XG5cdG1vZGU6IFwiamNoXCIsXG5cdHBhcnNlOiBbXCItLWp6Y3poelwiXSxcblx0c2VyaWFsaXplOiBcIi0tanpjemh6XCIsXG5cdHRvTW9kZToge1xuXHRcdGphYjogY29udmVydEpjaFRvSmFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRKYWJUb1JnYihjb252ZXJ0SmNoVG9KYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvSmNoKGNvbnZlcnRSZ2JUb0phYihjKSksXG5cdFx0amFiOiBjb252ZXJ0SmFiVG9KY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImpcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjFdLFxuXHRcdGM6IFswLCAuMTldLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ajogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29uc3RhbnRzLmpzXG52YXIgayA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUgPSBNYXRoLnBvdyg2LCAzKSAvIE1hdGgucG93KDI5LCAzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1h5ejUwLmpzXG52YXIgZm4gPSAodikgPT4gTWF0aC5wb3codiwgMykgPiBlID8gTWF0aC5wb3codiwgMykgOiAoMTE2ICogdiAtIDE2KSAvIGs7XG52YXIgY29udmVydExhYlRvWHl6NTAgPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBmeSA9IChsICsgMTYpIC8gMTE2O1xuXHRsZXQgZnggPSBhIC8gNTAwICsgZnk7XG5cdGxldCBmeiA9IGZ5IC0gYiAvIDIwMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogZm4oZngpICogRDUwLlgsXG5cdFx0eTogZm4oZnkpICogRDUwLlksXG5cdFx0ejogZm4oZnopICogRDUwLlpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NTAvY29udmVydFh5ejUwVG9SZ2IuanNcbnZhciBjb252ZXJ0WHl6NTBUb1JnYiA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAzLjEzNDEzNTk1Njk5NTg3MDcgLSB5ICogMS42MTczODYzMzIxNjEyNTM4IC0gLjQ5MDY2MTk0NjAwODM1MzIgKiB6LFxuXHRcdGc6IHggKiAtLjk3ODc5NTUwMjkxMjA4OSArIHkgKiAxLjkxNjI1NDU2NzI1OTUyNCArIC4wMzM0NDI3MzExNjEzMTk0OSAqIHosXG5cdFx0YjogeCAqIC4wNzE5NTUzNzk4ODQxMTY3NyAtIHkgKiAuMjI4OTc2ODI2NDE1ODMyMiArIDEuNDA1Mzg2MDU4MzI0MTI1ICogelxuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRMYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWJUb1JnYiA9IChsYWIpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMYWJUb1h5ejUwKGxhYikpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0UmdiVG9YeXo1MC5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejUwID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNDM2MDY1NzQyODI0ODExICogciArIC4zODUxNTE0Njg4MzM3OTEyICogZyArIC4xNDMwNzg0NTQ0MjI2NDE5NyAqIGIsXG5cdFx0eTogLjIyMjQ5MzE5MTc1NjIzNzAyICogciArIC43MTY4ODcwNTM4MjM4ODIzICogZyArIC4wNjA2MTk3OTA1MzYxNjUzNyAqIGIsXG5cdFx0ejogLjAxMzkyMzkwNDUwMDk0MzQ2NSAqIHIgKyAuMDk3MDgxMjg1NjY1NzQ2MzQgKiBnICsgLjcxNDA5OTM1ODQwMDUxNTUgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0WHl6NTBUb0xhYi5qc1xudmFyIGYgPSAodmFsdWUpID0+IHZhbHVlID4gZSA/IE1hdGguY2JydCh2YWx1ZSkgOiAoayAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTGFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgZjAgPSBmKHggLyBENTAuWCk7XG5cdGxldCBmMSA9IGYoeSAvIEQ1MC5ZKTtcblx0bGV0IGYyID0gZih6IC8gRDUwLlopO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGFiXCIsXG5cdFx0bDogMTE2ICogZjEgLSAxNixcblx0XHRhOiA1MDAgKiAoZjAgLSBmMSksXG5cdFx0YjogMjAwICogKGYxIC0gZjIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9jb252ZXJ0UmdiVG9MYWIuanNcbnZhciBjb252ZXJ0UmdiVG9MYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NTBUb0xhYihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL3BhcnNlTGFiLmpzXG5mdW5jdGlvbiBwYXJzZUxhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGFiXCIgfTtcblx0Y29uc3QgWywgbCwgYSwgYiwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlID09PSBUb2suSHVlIHx8IGEudHlwZSA9PT0gVG9rLkh1ZSB8fCBiLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbC52YWx1ZSksIDEwMCk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIDEyNSAvIDEwMDtcblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTUgPSB7XG5cdG1vZGU6IFwibGFiXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0TGFiVG9YeXo1MCxcblx0XHRyZ2I6IGNvbnZlcnRMYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRhOiBbLTEyNSwgMTI1XSxcblx0XHRiOiBbLTEyNSwgMTI1XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGFiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJsYWI2NVwiLFxuXHRwYXJzZTogW1wiLS1sYWItZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sYWItZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0TGFiNjVUb1h5ejY1LFxuXHRcdHJnYjogY29udmVydExhYjY1VG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9MYWI2NSxcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb0xhYjY1XG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9wYXJzZUxjaC5qc1xuZnVuY3Rpb24gcGFyc2VMY2goY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwibGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImxjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0fVxuXHRpZiAoYy50eXBlICE9PSBUb2suTm9uZSkgcmVzLmMgPSBNYXRoLm1heCgwLCBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAqIDE1MCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMTMgPSB7XG5cdG1vZGU6IFwibGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjogY29udmVydExjaFRvTGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb1JnYihjb252ZXJ0TGNoVG9MYWIoYykpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYihjKSksXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9MY2hcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0cGFyc2U6IFtwYXJzZUxjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBsY2goJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYyAhPT0gdm9pZCAwID8gYy5jIDogXCJub25lXCJ9ICR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2g2NS9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMiA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJsY2g2NVwiLFxuXHRwYXJzZTogW1wiLS1sY2gtZDY1XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2gtZDY1XCIsXG5cdHRvTW9kZToge1xuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYjY1VG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwibGFiNjVcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb0xhYjY1KGMpLCBcImxjaDY1XCIpLFxuXHRcdGxhYjY1OiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwibGNoNjVcIilcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE1MF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydEx1dlRvTGNodXYuanNcbnZhciBjb252ZXJ0THV2VG9MY2h1diA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKHUgPT09IHZvaWQgMCkgdSA9IDA7XG5cdGlmICh2ID09PSB2b2lkIDApIHYgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydCh1ICogdSArIHYgKiB2KTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxjaHV2XCIsXG5cdFx0bCxcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKHYsIHUpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaHV2L2NvbnZlcnRMY2h1dlRvTHV2LmpzXG52YXIgY29udmVydExjaHV2VG9MdXYgPSAoeyBsLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1OiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0djogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0WHl6NTBUb0x1di5qc1xudmFyIHVfZm4kMSA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4kMSA9ICh4LCB5LCB6KSA9PiA5ICogeSAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHVuJDEgPSB1X2ZuJDEoRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4kMSA9IHZfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBsX2ZuID0gKHZhbHVlKSA9PiB2YWx1ZSA8PSBlID8gayAqIHZhbHVlIDogMTE2ICogTWF0aC5jYnJ0KHZhbHVlKSAtIDE2O1xudmFyIGNvbnZlcnRYeXo1MFRvTHV2ID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgbCA9IGxfZm4oeSAvIEQ1MC5ZKTtcblx0bGV0IHUgPSB1X2ZuJDEoeCwgeSwgeik7XG5cdGxldCB2ID0gdl9mbiQxKHgsIHksIHopO1xuXHRpZiAoIWlzRmluaXRlKHUpIHx8ICFpc0Zpbml0ZSh2KSkgbCA9IHUgPSB2ID0gMDtcblx0ZWxzZSB7XG5cdFx0dSA9IDEzICogbCAqICh1IC0gdW4kMSk7XG5cdFx0diA9IDEzICogbCAqICh2IC0gdm4kMSk7XG5cdH1cblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImx1dlwiLFxuXHRcdGwsXG5cdFx0dSxcblx0XHR2XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9jb252ZXJ0THV2VG9YeXo1MC5qc1xudmFyIHVfZm4gPSAoeCwgeSwgeikgPT4gNCAqIHggLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB2X2ZuID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4gPSB1X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIHZuID0gdl9mbihENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciBjb252ZXJ0THV2VG9YeXo1MCA9ICh7IGwsIHUsIHYsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChsID09PSAwKSByZXR1cm4ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0ejogMFxuXHR9O1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCB1cCA9IHUgLyAoMTMgKiBsKSArIHVuO1xuXHRsZXQgdnAgPSB2IC8gKDEzICogbCkgKyB2bjtcblx0bGV0IHkgPSBENTAuWSAqIChsIDw9IDggPyBsIC8gayA6IE1hdGgucG93KChsICsgMTYpIC8gMTE2LCAzKSk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IHkgKiAoOSAqIHVwKSAvICg0ICogdnApLFxuXHRcdHksXG5cdFx0ejogeSAqICgxMiAtIDMgKiB1cCAtIDIwICogdnApIC8gKDQgKiB2cClcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xjaHV2ID0gKHJnYikgPT4gY29udmVydEx1dlRvTGNodXYoY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSkpO1xudmFyIGNvbnZlcnRMY2h1dlRvUmdiID0gKGxjaHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChjb252ZXJ0TGNodXZUb0x1dihsY2h1dikpKTtcbnZhciBkZWZpbml0aW9uJDExID0ge1xuXHRtb2RlOiBcImxjaHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdGx1djogY29udmVydExjaHV2VG9MdXYsXG5cdFx0cmdiOiBjb252ZXJ0TGNodXZUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvTGNodXYsXG5cdFx0bHV2OiBjb252ZXJ0THV2VG9MY2h1dlxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1sY2h1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbGNodXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDE3Ni45NTZdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRjOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVDaHJvbWEgfSxcblx0YXZlcmFnZTogeyBoOiBhdmVyYWdlQW5nbGUgfVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHJnYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJscmdiXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRMcmdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9McmdiIH0sXG5cdHBhcnNlOiBbXCJzcmdiLWxpbmVhclwiXSxcblx0c2VyaWFsaXplOiBcInNyZ2ItbGluZWFyXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2x1di9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ5ID0ge1xuXHRtb2RlOiBcImx1dlwiLFxuXHR0b01vZGU6IHtcblx0XHR4eXo1MDogY29udmVydEx1dlRvWHl6NTAsXG5cdFx0cmdiOiAobHV2KSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0THV2VG9YeXo1MChsdXYpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb0x1dixcblx0XHRyZ2I6IChyZ2IpID0+IGNvbnZlcnRYeXo1MFRvTHV2KGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJ1XCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWx1dlwiXSxcblx0c2VyaWFsaXplOiBcIi0tbHV2XCIsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdHU6IFstODQuOTM2LCAxNzUuMDQyXSxcblx0XHR2OiBbLTEyNS44ODIsIDg3LjI0M11cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0dTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHY6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydExyZ2JUb09rbGFiLmpzXG52YXIgY29udmVydExyZ2JUb09rbGFiID0gKHsgciwgZywgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGguY2JydCguNDEyMjIxNDY5NDcwNzYzICogciArIC41MzYzMzI1MzcyNjE3MzQ4ICogZyArIC4wNTE0NDU5OTMyNjc1MDIyICogYik7XG5cdGxldCBNID0gTWF0aC5jYnJ0KC4yMTE5MDM0OTU4MTc4MjUyICogciArIC42ODA2OTk1NTA2NDUyMzQ0ICogZyArIC4xMDczOTY5NTM1MzY5NDA2ICogYik7XG5cdGxldCBTID0gTWF0aC5jYnJ0KC4wODgzMDI0NTkxOTAwNTY0ICogciArIC4yODE3MTg4MzkxMzYxMjE1ICogZyArIC42Mjk5Nzg3MDE2NzM4MjIyICogYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IC4yMTA0NTQyNjgzMDkzMTQgKiBMICsgLjc5MzYxNzc3NDcwMjMwNTQgKiBNIC0gLjAwNDA3MjA0MzAxMTYxOTMgKiBTLFxuXHRcdGE6IDEuOTc3OTk4NTMyNDMxMTY4NCAqIEwgLSAyLjQyODU5MjI0MjA0ODU4ICogTSArIC40NTA1OTM3MDk2MTc0MTEgKiBTLFxuXHRcdGI6IC4wMjU5MDQwNDI0NjU1NDc4ICogTCArIC43ODI3NzE3MTI0NTc1Mjk2ICogTSAtIC44MDg2NzU3NTQ5MjMwNzc0ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0UmdiVG9Pa2xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb09rbGFiID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb09rbGFiKGNvbnZlcnRSZ2JUb0xyZ2IocmdiKSk7XG5cdGlmIChyZ2IuciA9PT0gcmdiLmIgJiYgcmdiLmIgPT09IHJnYi5nKSByZXMuYSA9IHJlcy5iID0gMDtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRPa2xhYlRvTHJnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvTHJnYiA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IEwgPSBNYXRoLnBvdyhsICsgLjM5NjMzNzc3NzM3NjE3NDkgKiBhICsgLjIxNTgwMzc1NzMwOTkxMzYgKiBiLCAzKTtcblx0bGV0IE0gPSBNYXRoLnBvdyhsIC0gLjEwNTU2MTM0NTgxNTY1ODYgKiBhIC0gLjA2Mzg1NDE3MjgyNTgxMzMgKiBiLCAzKTtcblx0bGV0IFMgPSBNYXRoLnBvdyhsIC0gLjA4OTQ4NDE3NzUyOTgxMTkgKiBhIC0gMS4yOTE0ODU1NDgwMTk0MDkyICogYiwgMyk7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJscmdiXCIsXG5cdFx0cjogNC4wNzY3NDE2MzYwNzU5NTcgKiBMIC0gMy4zMDc3MTE1MzkyNTgwNjE2ICogTSArIC4yMzA5Njk5MDMxODIxMDQ0ICogUyxcblx0XHRnOiAtMS4yNjg0Mzc5NzMyODUwMzE3ICogTCArIDIuNjA5NzU3MzQ5Mjg3Njg4NyAqIE0gLSAuMzQxMzE5Mzc2MDAyNjU3MyAqIFMsXG5cdFx0YjogLS4wMDQxOTYwNzYxMzg2NzU2ICogTCAtIC43MDM0MTg2MTc5MzU5MzYyICogTSArIDEuNzA3NjE0Njk0MDc0NjExNyAqIFNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9SZ2IuanNcbnZhciBjb252ZXJ0T2tsYWJUb1JnYiA9IChjKSA9PiBjb252ZXJ0THJnYlRvUmdiKGNvbnZlcnRPa2xhYlRvTHJnYihjKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2hlbHBlcnMuanNcbmZ1bmN0aW9uIHRvZSh4KSB7XG5cdGNvbnN0IGtfMSA9IC4yMDY7XG5cdGNvbnN0IGtfMiA9IC4wMztcblx0Y29uc3Qga18zID0gMS4yMDYgLyAxLjAzO1xuXHRyZXR1cm4gLjUgKiAoa18zICogeCAtIGtfMSArIE1hdGguc3FydCgoa18zICogeCAtIGtfMSkgKiAoa18zICogeCAtIGtfMSkgKyA0ICoga18yICoga18zICogeCkpO1xufVxuZnVuY3Rpb24gdG9lX2ludih4KSB7XG5cdHJldHVybiAoeCAqIHggKyAuMjA2ICogeCkgLyAoMS4yMDYgLyAxLjAzICogKHggKyAuMDMpKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYikge1xuXHRsZXQgazAsIGsxLCBrMiwgazMsIGs0LCB3bCwgd20sIHdzO1xuXHRpZiAoLTEuODgxNzAzMjggKiBhIC0gLjgwOTM2NDkzICogYiA+IDEpIHtcblx0XHRrMCA9IDEuMTkwODYyNzc7XG5cdFx0azEgPSAxLjc2NTc2NzI4O1xuXHRcdGsyID0gLjU5NjYyNjQxO1xuXHRcdGszID0gLjc1NTE1MTk3O1xuXHRcdGs0ID0gLjU2NzcxMjQ1O1xuXHRcdHdsID0gNC4wNzY3NDE2NjIxO1xuXHRcdHdtID0gLTMuMzA3NzExNTkxMztcblx0XHR3cyA9IC4yMzA5Njk5MjkyO1xuXHR9IGVsc2UgaWYgKDEuODE0NDQxMDQgKiBhIC0gMS4xOTQ0NTI3NiAqIGIgPiAxKSB7XG5cdFx0azAgPSAuNzM5NTY1MTU7XG5cdFx0azEgPSAtLjQ1OTU0NDA0O1xuXHRcdGsyID0gLjA4Mjg1NDI3O1xuXHRcdGszID0gLjEyNTQxMDc7XG5cdFx0azQgPSAuMTQ1MDMyMDQ7XG5cdFx0d2wgPSAtMS4yNjg0MzgwMDQ2O1xuXHRcdHdtID0gMi42MDk3NTc0MDExO1xuXHRcdHdzID0gLS4zNDEzMTkzOTY1O1xuXHR9IGVsc2Uge1xuXHRcdGswID0gMS4zNTczMzY1Mjtcblx0XHRrMSA9IC0uMDA5MTU3OTk7XG5cdFx0azIgPSAtMS4xNTEzMDIxO1xuXHRcdGszID0gLS41MDU1OTYwNjtcblx0XHRrNCA9IC4wMDY5MjE2Nztcblx0XHR3bCA9IC0uMDA0MTk2MDg2Mztcblx0XHR3bSA9IC0uNzAzNDE4NjE0Nztcblx0XHR3cyA9IDEuNzA3NjE0NzAxO1xuXHR9XG5cdGxldCBTID0gazAgKyBrMSAqIGEgKyBrMiAqIGIgKyBrMyAqIGEgKiBhICsgazQgKiBhICogYjtcblx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdGxldCBrX3MgPSAtLjA4OTQ4NDE3NzUgKiBhIC0gMS4yOTE0ODU1NDggKiBiO1xuXHR7XG5cdFx0bGV0IGxfID0gMSArIFMgKiBrX2w7XG5cdFx0bGV0IG1fID0gMSArIFMgKiBrX207XG5cdFx0bGV0IHNfID0gMSArIFMgKiBrX3M7XG5cdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0bGV0IHMgPSBzXyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMgPSAzICoga19sICogbF8gKiBsXztcblx0XHRsZXQgbV9kUyA9IDMgKiBrX20gKiBtXyAqIG1fO1xuXHRcdGxldCBzX2RTID0gMyAqIGtfcyAqIHNfICogc187XG5cdFx0bGV0IGxfZFMyID0gNiAqIGtfbCAqIGtfbCAqIGxfO1xuXHRcdGxldCBtX2RTMiA9IDYgKiBrX20gKiBrX20gKiBtXztcblx0XHRsZXQgc19kUzIgPSA2ICoga19zICoga19zICogc187XG5cdFx0bGV0IGYgPSB3bCAqIGwgKyB3bSAqIG0gKyB3cyAqIHM7XG5cdFx0bGV0IGYxID0gd2wgKiBsX2RTICsgd20gKiBtX2RTICsgd3MgKiBzX2RTO1xuXHRcdGxldCBmMiA9IHdsICogbF9kUzIgKyB3bSAqIG1fZFMyICsgd3MgKiBzX2RTMjtcblx0XHRTID0gUyAtIGYgKiBmMSAvIChmMSAqIGYxIC0gLjUgKiBmICogZjIpO1xuXHR9XG5cdHJldHVybiBTO1xufVxuZnVuY3Rpb24gZmluZF9jdXNwKGEsIGIpIHtcblx0bGV0IFNfY3VzcCA9IGNvbXB1dGVfbWF4X3NhdHVyYXRpb24oYSwgYik7XG5cdGxldCByZ2IgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IDEsXG5cdFx0YTogU19jdXNwICogYSxcblx0XHRiOiBTX2N1c3AgKiBiXG5cdH0pO1xuXHRsZXQgTF9jdXNwID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2IuciwgcmdiLmcsIHJnYi5iKSk7XG5cdHJldHVybiBbTF9jdXNwLCBMX2N1c3AgKiBTX2N1c3BdO1xufVxuZnVuY3Rpb24gZmluZF9nYW11dF9pbnRlcnNlY3Rpb24oYSwgYiwgTDEsIEMxLCBMMCwgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGEsIGIpO1xuXHRsZXQgdDtcblx0aWYgKChMMSAtIEwwKSAqIGN1c3BbMV0gLSAoY3VzcFswXSAtIEwwKSAqIEMxIDw9IDApIHQgPSBjdXNwWzFdICogTDAgLyAoQzEgKiBjdXNwWzBdICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdGVsc2Uge1xuXHRcdHQgPSBjdXNwWzFdICogKEwwIC0gMSkgLyAoQzEgKiAoY3VzcFswXSAtIDEpICsgY3VzcFsxXSAqIChMMCAtIEwxKSk7XG5cdFx0e1xuXHRcdFx0bGV0IGRMID0gTDEgLSBMMDtcblx0XHRcdGxldCBkQyA9IEMxO1xuXHRcdFx0bGV0IGtfbCA9IC4zOTYzMzc3Nzc0ICogYSArIC4yMTU4MDM3NTczICogYjtcblx0XHRcdGxldCBrX20gPSAtLjEwNTU2MTM0NTggKiBhIC0gLjA2Mzg1NDE3MjggKiBiO1xuXHRcdFx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdFx0XHRsZXQgbF9kdCA9IGRMICsgZEMgKiBrX2w7XG5cdFx0XHRsZXQgbV9kdCA9IGRMICsgZEMgKiBrX207XG5cdFx0XHRsZXQgc19kdCA9IGRMICsgZEMgKiBrX3M7XG5cdFx0XHR7XG5cdFx0XHRcdGxldCBMID0gTDAgKiAoMSAtIHQpICsgdCAqIEwxO1xuXHRcdFx0XHRsZXQgQyA9IHQgKiBDMTtcblx0XHRcdFx0bGV0IGxfID0gTCArIEMgKiBrX2w7XG5cdFx0XHRcdGxldCBtXyA9IEwgKyBDICoga19tO1xuXHRcdFx0XHRsZXQgc18gPSBMICsgQyAqIGtfcztcblx0XHRcdFx0bGV0IGwgPSBsXyAqIGxfICogbF87XG5cdFx0XHRcdGxldCBtID0gbV8gKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdCA9IDMgKiBsX2R0ICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG1kdCA9IDMgKiBtX2R0ICogbV8gKiBtXztcblx0XHRcdFx0bGV0IHNkdCA9IDMgKiBzX2R0ICogc18gKiBzXztcblx0XHRcdFx0bGV0IGxkdDIgPSA2ICogbF9kdCAqIGxfZHQgKiBsXztcblx0XHRcdFx0bGV0IG1kdDIgPSA2ICogbV9kdCAqIG1fZHQgKiBtXztcblx0XHRcdFx0bGV0IHNkdDIgPSA2ICogc19kdCAqIHNfZHQgKiBzXztcblx0XHRcdFx0bGV0IHIgPSA0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIC4yMzA5Njk5MjkyICogcyAtIDE7XG5cdFx0XHRcdGxldCByMSA9IDQuMDc2NzQxNjYyMSAqIGxkdCAtIDMuMzA3NzExNTkxMyAqIG1kdCArIC4yMzA5Njk5MjkyICogc2R0O1xuXHRcdFx0XHRsZXQgcjIgPSA0LjA3Njc0MTY2MjEgKiBsZHQyIC0gMy4zMDc3MTE1OTEzICogbWR0MiArIC4yMzA5Njk5MjkyICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfciA9IHIxIC8gKHIxICogcjEgLSAuNSAqIHIgKiByMik7XG5cdFx0XHRcdGxldCB0X3IgPSAtciAqIHVfcjtcblx0XHRcdFx0bGV0IGcgPSAtMS4yNjg0MzgwMDQ2ICogbCArIDIuNjA5NzU3NDAxMSAqIG0gLSAuMzQxMzE5Mzk2NSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgZzEgPSAtMS4yNjg0MzgwMDQ2ICogbGR0ICsgMi42MDk3NTc0MDExICogbWR0IC0gLjM0MTMxOTM5NjUgKiBzZHQ7XG5cdFx0XHRcdGxldCBnMiA9IC0xLjI2ODQzODAwNDYgKiBsZHQyICsgMi42MDk3NTc0MDExICogbWR0MiAtIC4zNDEzMTkzOTY1ICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfZyA9IGcxIC8gKGcxICogZzEgLSAuNSAqIGcgKiBnMik7XG5cdFx0XHRcdGxldCB0X2cgPSAtZyAqIHVfZztcblx0XHRcdFx0bGV0IGIgPSAtLjAwNDE5NjA4NjMgKiBsIC0gLjcwMzQxODYxNDcgKiBtICsgMS43MDc2MTQ3MDEgKiBzIC0gMTtcblx0XHRcdFx0bGV0IGIxID0gLS4wMDQxOTYwODYzICogbGR0IC0gLjcwMzQxODYxNDcgKiBtZHQgKyAxLjcwNzYxNDcwMSAqIHNkdDtcblx0XHRcdFx0bGV0IGIyID0gLS4wMDQxOTYwODYzICogbGR0MiAtIC43MDM0MTg2MTQ3ICogbWR0MiArIDEuNzA3NjE0NzAxICogc2R0Mjtcblx0XHRcdFx0bGV0IHVfYiA9IGIxIC8gKGIxICogYjEgLSAuNSAqIGIgKiBiMik7XG5cdFx0XHRcdGxldCB0X2IgPSAtYiAqIHVfYjtcblx0XHRcdFx0dF9yID0gdV9yID49IDAgPyB0X3IgOiAxZTY7XG5cdFx0XHRcdHRfZyA9IHVfZyA+PSAwID8gdF9nIDogMWU2O1xuXHRcdFx0XHR0X2IgPSB1X2IgPj0gMCA/IHRfYiA6IDFlNjtcblx0XHRcdFx0dCArPSBNYXRoLm1pbih0X3IsIE1hdGgubWluKHRfZywgdF9iKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0O1xufVxuZnVuY3Rpb24gZ2V0X1NUX21heChhXywgYl8sIGN1c3AgPSBudWxsKSB7XG5cdGlmICghY3VzcCkgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgTCA9IGN1c3BbMF07XG5cdGxldCBDID0gY3VzcFsxXTtcblx0cmV0dXJuIFtDIC8gTCwgQyAvICgxIC0gTCldO1xufVxuZnVuY3Rpb24gZ2V0X0NzKEwsIGFfLCBiXykge1xuXHRsZXQgY3VzcCA9IGZpbmRfY3VzcChhXywgYl8pO1xuXHRsZXQgQ19tYXggPSBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhXywgYl8sIEwsIDEsIEwsIGN1c3ApO1xuXHRsZXQgU1RfbWF4ID0gZ2V0X1NUX21heChhXywgYl8sIGN1c3ApO1xuXHRsZXQgU19taWQgPSAuMTE1MTY5OTMgKyAxIC8gKDcuNDQ3Nzg5NyArIDQuMTU5MDEyNCAqIGJfICsgYV8gKiAoLTIuMTk1NTczNDcgKyAxLjc1MTk4NDAxICogYl8gKyBhXyAqICgtMi4xMzcwNDk0OCAtIDEwLjAyMzAxMDQzICogYl8gKyBhXyAqICgtNC4yNDg5NDU2MSArIDUuMzg3NzA4MTkgKiBiXyArIDQuNjk4OTEwMTMgKiBhXykpKSk7XG5cdGxldCBUX21pZCA9IC4xMTIzOTY0MiArIDEgLyAoMS42MTMyMDMyIC0gLjY4MTI0Mzc5ICogYl8gKyBhXyAqICguNDAzNzA2MTIgKyAuOTAxNDgxMjMgKiBiXyArIGFfICogKC0uMjcwODc5NDMgKyAuNjEyMjM5OSAqIGJfICsgYV8gKiAoLjAwMjk5MjE1IC0gLjQ1Mzk5NTY4ICogYl8gLSAuMTQ2NjE4NzIgKiBhXykpKSk7XG5cdGxldCBrID0gQ19tYXggLyBNYXRoLm1pbihMICogU1RfbWF4WzBdLCAoMSAtIEwpICogU1RfbWF4WzFdKTtcblx0bGV0IENfYSA9IEwgKiBTX21pZDtcblx0bGV0IENfYiA9ICgxIC0gTCkgKiBUX21pZDtcblx0bGV0IENfbWlkID0gLjkgKiBrICogTWF0aC5zcXJ0KE1hdGguc3FydCgxIC8gKDEgLyAoQ19hICogQ19hICogQ19hICogQ19hKSArIDEgLyAoQ19iICogQ19iICogQ19iICogQ19iKSkpKTtcblx0Q19hID0gTCAqIC40O1xuXHRDX2IgPSAoMSAtIEwpICogLjg7XG5cdHJldHVybiBbXG5cdFx0TWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IpKSksXG5cdFx0Q19taWQsXG5cdFx0Q19tYXhcblx0XTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvY29udmVydE9rbGFiVG9Pa2hzbC5qc1xuZnVuY3Rpb24gY29udmVydE9rbGFiVG9Pa2hzbChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGNvbnN0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRjb25zdCBiID0gbGFiLmIgIT09IHZvaWQgMCA/IGxhYi5iIDogMDtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc2xcIixcblx0XHRsOiB0b2UobClcblx0fTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRpZiAoIWMpIHtcblx0XHRyZXQucyA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhsLCBhIC8gYywgYiAvIGMpO1xuXHRsZXQgcztcblx0aWYgKGMgPCBDX21pZCkge1xuXHRcdGxldCBrXzAgPSAwO1xuXHRcdGxldCBrXzEgPSAuOCAqIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHRcdHMgPSAoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSAqIC44O1xuXHR9IGVsc2Uge1xuXHRcdGxldCBrXzAgPSBDX21pZDtcblx0XHRsZXQga18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0bGV0IGtfMiA9IDEgLSBrXzEgLyAoQ19tYXggLSBDX21pZCk7XG5cdFx0cyA9IC44ICsgLjIgKiAoKGMgLSBrXzApIC8gKGtfMSArIGtfMiAqIChjIC0ga18wKSkpO1xuXHR9XG5cdGlmIChzKSB7XG5cdFx0cmV0LnMgPSBzO1xuXHRcdHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0fVxuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2toc2xUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc2xUb09rbGFiKGhzbCkge1xuXHRsZXQgaCA9IGhzbC5oICE9PSB2b2lkIDAgPyBoc2wuaCA6IDA7XG5cdGxldCBzID0gaHNsLnMgIT09IHZvaWQgMCA/IGhzbC5zIDogMDtcblx0bGV0IGwgPSBoc2wubCAhPT0gdm9pZCAwID8gaHNsLmwgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2xhYlwiLFxuXHRcdGw6IHRvZV9pbnYobClcblx0fTtcblx0aWYgKGhzbC5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBoc2wuYWxwaGE7XG5cdGlmICghcyB8fCBsID09PSAxKSB7XG5cdFx0cmV0LmEgPSByZXQuYiA9IDA7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRsZXQgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGxldCBiXyA9IE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IFtDXzAsIENfbWlkLCBDX21heF0gPSBnZXRfQ3MocmV0LmwsIGFfLCBiXyk7XG5cdGxldCB0LCBrXzAsIGtfMSwga18yO1xuXHRpZiAocyA8IC44KSB7XG5cdFx0dCA9IDEuMjUgKiBzO1xuXHRcdGtfMCA9IDA7XG5cdFx0a18xID0gLjggKiBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIENfbWlkO1xuXHR9IGVsc2Uge1xuXHRcdHQgPSA1ICogKHMgLSAuOCk7XG5cdFx0a18wID0gQ19taWQ7XG5cdFx0a18xID0gLjIgKiBDX21pZCAqIENfbWlkICogMS4yNSAqIDEuMjUgLyBDXzA7XG5cdFx0a18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0fVxuXHRsZXQgQyA9IGtfMCArIHQgKiBrXzEgLyAoMSAtIGtfMiAqIHQpO1xuXHRyZXQuYSA9IEMgKiBhXztcblx0cmV0LmIgPSBDICogYl87XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL21vZGVPa2hzbC5qc1xudmFyIG1vZGVPa2hzbCA9IHtcblx0Li4uZGVmaW5pdGlvbiQyMSxcblx0bW9kZTogXCJva2hzbFwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwibFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1va2hzbFwiXSxcblx0c2VyaWFsaXplOiBcIi0tb2toc2xcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9rbGFiVG9Pa2hzbCxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb09raHNsKGNvbnZlcnRSZ2JUb09rbGFiKGMpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogY29udmVydE9raHNsVG9Pa2xhYixcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0T2tsYWJUb1JnYihjb252ZXJ0T2toc2xUb09rbGFiKGMpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2tsYWJUb09raHN2LmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHN2KGxhYikge1xuXHRsZXQgbCA9IGxhYi5sICE9PSB2b2lkIDAgPyBsYWIubCA6IDA7XG5cdGxldCBhID0gbGFiLmEgIT09IHZvaWQgMCA/IGxhYi5hIDogMDtcblx0bGV0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IGFfID0gYyA/IGEgLyBjIDogMTtcblx0bGV0IGJfID0gYyA/IGIgLyBjIDogMTtcblx0bGV0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGxldCBTXzAgPSAuNTtcblx0bGV0IGsgPSAxIC0gU18wIC8gU19tYXg7XG5cdGxldCB0ID0gVCAvIChjICsgbCAqIFQpO1xuXHRsZXQgTF92ID0gdCAqIGw7XG5cdGxldCBDX3YgPSB0ICogYztcblx0bGV0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGxldCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0bGV0IHJnYl9zY2FsZSA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogTF92dCxcblx0XHRhOiBhXyAqIENfdnQsXG5cdFx0YjogYl8gKiBDX3Z0XG5cdH0pO1xuXHRsZXQgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRsID0gbCAvIHNjYWxlX0w7XG5cdGMgPSBjIC8gc2NhbGVfTCAqIHRvZShsKSAvIGw7XG5cdGwgPSB0b2UobCk7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9raHN2XCIsXG5cdFx0czogYyA/IChTXzAgKyBUKSAqIENfdiAvIChUICogU18wICsgVCAqIGsgKiBDX3YpIDogMCxcblx0XHR2OiBsID8gbCAvIExfdiA6IDBcblx0fTtcblx0aWYgKHJldC5zKSByZXQuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChsYWIuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gbGFiLmFscGhhO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9jb252ZXJ0T2toc3ZUb09rbGFiLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2toc3ZUb09rbGFiKGhzdikge1xuXHRjb25zdCByZXQgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRpZiAoaHN2LmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzdi5hbHBoYTtcblx0Y29uc3QgaCA9IGhzdi5oICE9PSB2b2lkIDAgPyBoc3YuaCA6IDA7XG5cdGNvbnN0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRjb25zdCB2ID0gaHN2LnYgIT09IHZvaWQgMCA/IGhzdi52IDogMDtcblx0Y29uc3QgYV8gPSBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRjb25zdCBbU19tYXgsIFRdID0gZ2V0X1NUX21heChhXywgYl8pO1xuXHRjb25zdCBTXzAgPSAuNTtcblx0Y29uc3QgayA9IDEgLSBTXzAgLyBTX21heDtcblx0Y29uc3QgTF92ID0gMSAtIHMgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IENfdiA9IHMgKiBUICogU18wIC8gKFNfMCArIFQgLSBUICogayAqIHMpO1xuXHRjb25zdCBMX3Z0ID0gdG9lX2ludihMX3YpO1xuXHRjb25zdCBDX3Z0ID0gQ192ICogTF92dCAvIExfdjtcblx0Y29uc3QgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGNvbnN0IHNjYWxlX0wgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYl9zY2FsZS5yLCByZ2Jfc2NhbGUuZywgcmdiX3NjYWxlLmIsIDApKTtcblx0Y29uc3QgTF9uZXcgPSB0b2VfaW52KHYgKiBMX3YpO1xuXHRjb25zdCBDID0gQ192ICogTF9uZXcgLyBMX3Y7XG5cdHJldC5sID0gTF9uZXcgKiBzY2FsZV9MO1xuXHRyZXQuYSA9IEMgKiBhXyAqIHNjYWxlX0w7XG5cdHJldC5iID0gQyAqIGJfICogc2NhbGVfTDtcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc3YvbW9kZU9raHN2LmpzXG52YXIgbW9kZU9raHN2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDIwLFxuXHRtb2RlOiBcIm9raHN2XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJ2XCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHN2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzdlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHN2LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc3YoY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc3ZUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzdlRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL3BhcnNlT2tsYWIuanNcbmZ1bmN0aW9uIHBhcnNlT2tsYWIoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwib2tsYWJcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwib2tsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHRpZiAoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmEgPSBhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhLnZhbHVlIDogYS52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYi50eXBlICE9PSBUb2suTm9uZSkgcmVzLmIgPSBiLnR5cGUgPT09IFRvay5OdW1iZXIgPyBiLnZhbHVlIDogYi52YWx1ZSAqIC40IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDggPSB7XG5cdC4uLmRlZmluaXRpb24kMTUsXG5cdG1vZGU6IFwib2tsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHJnYjogY29udmVydE9rbGFiVG9McmdiLFxuXHRcdHJnYjogY29udmVydE9rbGFiVG9SZ2Jcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0THJnYlRvT2tsYWIsXG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9Pa2xhYlxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YTogWy0uNCwgLjRdLFxuXHRcdGI6IFstLjQsIC40XVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlT2tsYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgb2tsYWIoJHtjLmwgIT09IHZvaWQgMCA/IGMubCA6IFwibm9uZVwifSAke2MuYSAhPT0gdm9pZCAwID8gYy5hIDogXCJub25lXCJ9ICR7Yy5iICE9PSB2b2lkIDAgPyBjLmIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvcGFyc2VPa2xjaC5qc1xuZnVuY3Rpb24gcGFyc2VPa2xjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xjaFwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xjaFwiIH07XG5cdGNvbnN0IFssIGwsIGMsIGgsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAobC50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnR5cGUgPT09IFRvay5OdW1iZXIgPyBsLnZhbHVlIDogbC52YWx1ZSAvIDEwMCksIDEpO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogLjQgLyAxMDApO1xuXHRpZiAoaC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChoLnR5cGUgPT09IFRvay5QZXJjZW50YWdlKSByZXR1cm47XG5cdFx0cmVzLmggPSBoLnZhbHVlO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsY2gvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNyA9IHtcblx0Li4uZGVmaW5pdGlvbiQxMyxcblx0bW9kZTogXCJva2xjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjLCBcIm9rbGFiXCIpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjb252ZXJ0UmdiVG9Pa2xhYihjKSwgXCJva2xjaFwiKSxcblx0XHRva2xhYjogKGMpID0+IGNvbnZlcnRMYWJUb0xjaChjLCBcIm9rbGNoXCIpXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xjaF0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMV0sXG5cdFx0YzogWzAsIC40XSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0UDNUb1h5ejY1LmpzXG52YXIgY29udmVydFAzVG9YeXo2NSA9IChyZ2IpID0+IHtcblx0bGV0IHsgciwgZywgYiwgYWxwaGEgfSA9IGNvbnZlcnRSZ2JUb0xyZ2IocmdiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjQ4NjU3MDk0ODY0ODIxNiAqIHIgKyAuMjY1NjY3NjkzMTY5MDkzICogZyArIC4xOTgyMTcyODUyMzQzNjI1ICogYixcblx0XHR5OiAuMjI4OTc0NTY0MDY5NzQ4NyAqIHIgKyAuNjkxNzM4NTIxODM2NTA2MiAqIGcgKyAuMDc5Mjg2OTE0MDkzNzQ1ICogYixcblx0XHR6OiAwICogciArIC4wNDUxMTMzODE4NTg5MDI2ICogZyArIDEuMDQzOTQ0MzY4OTAwOTc2ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9jb252ZXJ0WHl6NjVUb1AzLmpzXG52YXIgY29udmVydFh5ejY1VG9QMyA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IHggKiAyLjQ5MzQ5NjkxMTk0MTQyNjMgLSB5ICogLjkzMTM4MzYxNzkxOTEyNDIgLSAuNDAyNzEwNzg0NDUwNzE3ICogeixcblx0XHRnOiB4ICogLS44Mjk0ODg5Njk1NjE1NzQ5ICsgeSAqIDEuNzYyNjY0MDYwMzE4MzQ2NSArIC4wMjM2MjQ2ODU4NDE5NDM2ICogeixcblx0XHRiOiB4ICogLjAzNTg0NTgzMDI0Mzc4NDUgLSB5ICogLjA3NjE3MjM4OTI2ODA0MTggKyAuOTU2ODg0NTI0MDA3Njg3MSAqIHpcblx0fSwgXCJwM1wiKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcDMvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJwM1wiLFxuXHRwYXJzZTogW1wiZGlzcGxheS1wM1wiXSxcblx0c2VyaWFsaXplOiBcImRpc3BsYXktcDNcIixcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9QMyhjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1AzXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UDNUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRQM1RvWHl6NjVcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFh5ejUwVG9Qcm9waG90by5qc1xudmFyIGdhbW1hJDEgPSAodikgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPj0gMSAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMSAvIDEuOCk7XG5cdHJldHVybiAxNiAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo1MFRvUHJvcGhvdG8gPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJwcm9waG90b1wiLFxuXHRcdHI6IGdhbW1hJDEoeCAqIDEuMzQ1Nzg2ODgxNjQ3MTU4NSAtIHkgKiAuMjU1NTcyMDg3Mzc5Nzk0NiAtIC4wNTExMDE4NjQ5NzU1NDUzICogeiksXG5cdFx0ZzogZ2FtbWEkMSh4ICogLS41NDQ2MzA3MDUxMjQ5MDE5ICsgeSAqIDEuNTA4MjQ3NzQyODQ1MTQ2NiArIC4wMjA1Mjc0NDc0MzY0MjE0ICogeiksXG5cdFx0YjogZ2FtbWEkMSh4ICogMCArIHkgKiAwICsgMS4yMTE5Njc1NDU2Mzg5NDUyICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcHJvcGhvdG8vY29udmVydFByb3Bob3RvVG9YeXo1MC5qc1xudmFyIGxpbmVhcml6ZSQxID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxNiAvIDUxMikgcmV0dXJuIE1hdGguc2lnbih2KSAqIE1hdGgucG93KGFicywgMS44KTtcblx0cmV0dXJuIHYgLyAxNjtcbn07XG52YXIgY29udmVydFByb3Bob3RvVG9YeXo1MCA9IChwcm9waG90bykgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLnIpO1xuXHRsZXQgZyA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmcpO1xuXHRsZXQgYiA9IGxpbmVhcml6ZSQxKHByb3Bob3RvLmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAuNzk3NzY2NjQ0OTAwNjQyMyAqIHIgKyAuMTM1MTgxMjk3NDAwNTMzMSAqIGcgKyAuMDMxMzQ3NzM0MTI4MzkyMiAqIGIsXG5cdFx0eTogLjI4ODA3NDgyODgxOTQwMTMgKiByICsgLjcxMTgzNTIzNDI0MTg3MzEgKiBnICsgODk5MzY5Mzg3MjU2ZS0xNiAqIGIsXG5cdFx0ejogMCAqIHIgKyAwICogZyArIC44MjUxMDQ2MDI1MTA0NjAyICogYlxuXHR9O1xuXHRpZiAocHJvcGhvdG8uYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gcHJvcGhvdG8uYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ1ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdHBhcnNlOiBbXCJwcm9waG90by1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJwcm9waG90by1yZ2JcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9Qcm9waG90byxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejUwVG9Qcm9waG90byhjb252ZXJ0UmdiVG9YeXo1MChjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1JnYihjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwKGNvbG9yKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0WHl6NjVUb1JlYzIwMjAuanNcbnZhciDOsSQxID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiQxID0gLjAxODA1Mzk2ODUxMDgwNztcbnZhciBnYW1tYSA9ICh2KSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID4gzrIkMSkgcmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiAozrEkMSAqIE1hdGgucG93KGFicywgLjQ1KSAtIC4wOTkyOTY4MjY4MDk0NDAwOCk7XG5cdHJldHVybiA0LjUgKiB2O1xufTtcbnZhciBjb252ZXJ0WHl6NjVUb1JlYzIwMjAgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZWMyMDIwXCIsXG5cdFx0cjogZ2FtbWEoeCAqIDEuNzE2NjUxMTg3OTcxMjY4MyAtIHkgKiAuMzU1NjcwNzgzNzc2MzkyNSAtIC4yNTMzNjYyODEzNzM2NTk5ICogeiksXG5cdFx0ZzogZ2FtbWEoeCAqIC0uNjY2Njg0MzUxODMyNDg5MyArIHkgKiAxLjYxNjQ4MTIzNjYzNDkzOTUgKyAuMDE1NzY4NTQ1ODEzOTExMSAqIHopLFxuXHRcdGI6IGdhbW1hKHggKiAuMDE3NjM5ODU3NDQ1MzEwOCAtIHkgKiAuMDQyNzcwNjEzMjU3ODA4NSArIC45NDIxMDMxMjEyMzU0NzM5ICogeilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9jb252ZXJ0UmVjMjAyMFRvWHl6NjUuanNcbnZhciDOsSA9IDEuMDk5Mjk2ODI2ODA5NDQ7XG52YXIgzrIgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGxpbmVhcml6ZSA9ICh2ID0gMCkgPT4ge1xuXHRsZXQgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPCDOsiAqIDQuNSkgcmV0dXJuIHYgLyA0LjU7XG5cdHJldHVybiAoTWF0aC5zaWduKHYpIHx8IDEpICogTWF0aC5wb3coKGFicyArIM6xIC0gMSkgLyDOsSwgMSAvIC40NSk7XG59O1xudmFyIGNvbnZlcnRSZWMyMDIwVG9YeXo2NSA9IChyZWMyMDIwKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplKHJlYzIwMjAucik7XG5cdGxldCBnID0gbGluZWFyaXplKHJlYzIwMjAuZyk7XG5cdGxldCBiID0gbGluZWFyaXplKHJlYzIwMjAuYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC42MzY5NTgwNDgzMDEyOTExICogciArIC4xNDQ2MTY5MDM1ODYyMDgzICogZyArIC4xNjg4ODA5NzUxNjQxNzIxICogYixcblx0XHR5OiAuMjYyNzAwMjEyMDExMjY3ICogciArIC42Nzc5OTgwNzE1MTg4NzA4ICogZyArIC4wNTkzMDE3MTY0Njk4NjIgKiBiLFxuXHRcdHo6IDAgKiByICsgLjAyODA3MjY5MzA0OTA4NzQgKiBnICsgMS4wNjA5ODUwNTc3MTA3OTA5ICogYlxuXHR9O1xuXHRpZiAocmVjMjAyMC5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSByZWMyMDIwLmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmVjMjAyMC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInJlYzIwMjBcIixcblx0ZnJvbU1vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFh5ejY1VG9SZWMyMDIwLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHR4eXo2NTogY29udmVydFJlYzIwMjBUb1h5ejY1LFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0UmVjMjAyMFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRwYXJzZTogW1wicmVjMjAyMFwiXSxcblx0c2VyaWFsaXplOiBcInJlYzIwMjBcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnN0YW50cy5qc1xudmFyIGJpYXMgPSAuMDAzNzkzMDczMjU1Mjc1NDQ5MztcbnZhciBiaWFzX2NicnQgPSBNYXRoLmNicnQoYmlhcyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0UmdiVG9YeWIuanNcbnZhciB0cmFuc2ZlciQxID0gKHYpID0+IE1hdGguY2JydCh2KSAtIGJpYXNfY2JydDtcbnZhciBjb252ZXJ0UmdiVG9YeWIgPSAoY29sb3IpID0+IHtcblx0Y29uc3QgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihjb2xvcik7XG5cdGNvbnN0IGwgPSB0cmFuc2ZlciQxKC4zICogciArIC42MjIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgbSA9IHRyYW5zZmVyJDEoLjIzICogciArIC42OTIgKiBnICsgLjA3OCAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcyA9IHRyYW5zZmVyJDEoLjI0MzQyMjY4OTI0NTQ3ODIgKiByICsgLjIwNDc2NzQ0NDI0NDk2ODIgKiBnICsgLjU1MTgwOTg2NjUwOTU1MzUgKiBiICsgYmlhcyk7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5YlwiLFxuXHRcdHg6IChsIC0gbSkgLyAyLFxuXHRcdHk6IChsICsgbSkgLyAyLFxuXHRcdGI6IHMgLSAobCArIG0pIC8gMlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29udmVydFh5YlRvUmdiLmpzXG52YXIgdHJhbnNmZXIgPSAodikgPT4gTWF0aC5wb3codiArIGJpYXNfY2JydCwgMyk7XG52YXIgY29udmVydFh5YlRvUmdiID0gKHsgeCwgeSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRjb25zdCBsID0gdHJhbnNmZXIoeCArIHkpIC0gYmlhcztcblx0Y29uc3QgbSA9IHRyYW5zZmVyKHkgLSB4KSAtIGJpYXM7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlcihiICsgeSkgLSBiaWFzO1xuXHRjb25zdCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiAxMS4wMzE1NjY5MDQ2Mzk4NjEgKiBsIC0gOS44NjY5NDM5MDgxMzE1NjIgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRnOiAtMy4yNTQxNDczODEwNzQ0MjM3ICogbCArIDQuNDE4NzcwMzc3NTgyNzIzICogbSAtIC4xNjQ2MjI5OTY1MDgyOTkzNCAqIHMsXG5cdFx0YjogLTMuNjU4ODUxMjg2NzEzNjgxNSAqIGwgKyAyLjcxMjkyMzA0NTkzNjA5MjIgKiBtICsgMS45NDU5MjgyNDA3Nzc1ODk1ICogc1xuXHR9KTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDMgPSB7XG5cdG1vZGU6IFwieHliXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJ4XCIsXG5cdFx0XCJ5XCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLXh5YlwiXSxcblx0c2VyaWFsaXplOiBcIi0teHliXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRYeWJUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1h5YiB9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbLS4wMTU0LCAuMDI4MV0sXG5cdFx0eTogWzAsIC44NDUzXSxcblx0XHRiOiBbLS4yNzc4LCAuMzg4XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyID0ge1xuXHRtb2RlOiBcInh5ejUwXCIsXG5cdHBhcnNlOiBbXCJ4eXotZDUwXCJdLFxuXHRzZXJpYWxpemU6IFwieHl6LWQ1MFwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo1MFRvUmdiLFxuXHRcdGxhYjogY29udmVydFh5ejUwVG9MYWJcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb1h5ejUwLFxuXHRcdGxhYjogY29udmVydExhYlRvWHl6NTBcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NjRdLFxuXHRcdHk6IFswLCAuOTk5XSxcblx0XHR6OiBbMCwgLjgyNV1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejY1VG9YeXo1MC5qc1xudmFyIGNvbnZlcnRYeXo2NVRvWHl6NTAgPSAoeHl6NjUpID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejY1O1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiAxLjA0NzkyOTgyMDg0MDU0ODggKiB4ICsgLjAyMjk0Njc5MzM0MTAxOTEgKiB5IC0gLjA1MDE5MjIyOTU0MzEzNTYgKiB6LFxuXHRcdHk6IC4wMjk2Mjc4MTU2ODgxNTkzICogeCArIC45OTA0MzQ0ODQ1NzMyNDkgKiB5IC0gLjAxNzA3MzgyNTAyOTM4NTEgKiB6LFxuXHRcdHo6IC0uMDA5MjQzMDU4MTUyNTkxMiAqIHggKyAuMDE1MDU1MTQ0ODk2NTc3OSAqIHkgKyAuNzUxODc0Mjg5OTU4MDAwOCAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29udmVydFh5ejUwVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRYeXo1MFRvWHl6NjUgPSAoeHl6NTApID0+IHtcblx0bGV0IHsgeCwgeSwgeiwgYWxwaGEgfSA9IHh5ejUwO1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuOTU1NDczNDUyNzA0MjE4MiAqIHggLSAuMDIzMDk4NTM2ODc0MjYxNCAqIHkgKyAuMDYzMjU5MzA4NjYxMDIxNyAqIHosXG5cdFx0eTogLS4wMjgzNjk3MDY5NjMyMDgxICogeCArIDEuMDA5OTk1NDU4MDA1ODIyNiAqIHkgKyAuMDIxMDQxMzk4OTY2OTQzICogeixcblx0XHR6OiAuMDEyMzE0MDAxNjg4MzE5OSAqIHggLSAuMDIwNTA3Njk2NDMzNDc3OSAqIHkgKyAxLjMzMDM2NTkzNjYwODA3NTMgKiB6XG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEgPSB7XG5cdG1vZGU6IFwieHl6NjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0WHl6NjVUb1JnYixcblx0XHR4eXo1MDogY29udmVydFh5ejY1VG9YeXo1MFxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NjUsXG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0eDogWzAsIC45NV0sXG5cdFx0eTogWzAsIDFdLFxuXHRcdHo6IFswLCAxLjA4OF1cblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcInpcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcInh5elwiLCBcInh5ei1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDY1XCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR6OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3lpcS9jb252ZXJ0UmdiVG9ZaXEuanNcbnZhciBjb252ZXJ0UmdiVG9ZaXEgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcInlpcVwiLFxuXHRcdHk6IC4yOTg4OTUzMSAqIHIgKyAuNTg2NjIyNDcgKiBnICsgLjExNDQ4MjIzICogYixcblx0XHRpOiAuNTk1OTc3OTkgKiByIC0gLjI3NDE3NjEgKiBnIC0gLjMyMTgwMTg5ICogYixcblx0XHRxOiAuMjExNDcwMTcgKiByIC0gLjUyMjYxNzExICogZyArIC4zMTExNDY5NCAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRZaXFUb1JnYi5qc1xudmFyIGNvbnZlcnRZaXFUb1JnYiA9ICh7IHksIGksIHEsIGFscGhhIH0pID0+IHtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmIChpID09PSB2b2lkIDApIGkgPSAwO1xuXHRpZiAocSA9PT0gdm9pZCAwKSBxID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cjogeSArIC45NTYwODQ0NSAqIGkgKyAuNjIwODg4NSAqIHEsXG5cdFx0ZzogeSAtIC4yNzEzNzY2NCAqIGkgLSAuNjQ4NjA1OSAqIHEsXG5cdFx0YjogeSAtIDEuMTA1NjE3MjQgKiBpICsgMS43MDI1MDEyNiAqIHFcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uID0ge1xuXHRtb2RlOiBcInlpcVwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0WWlxVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9ZaXEgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcInlcIixcblx0XHRcImlcIixcblx0XHRcInFcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teWlxXCJdLFxuXHRzZXJpYWxpemU6IFwiLS15aXFcIixcblx0cmFuZ2VzOiB7XG5cdFx0aTogWy0uNTk1LCAuNTk1XSxcblx0XHRxOiBbLS41MjIsIC41MjJdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRxOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JvdW5kLmpzXG52YXIgciA9ICh2YWx1ZSwgcHJlY2lzaW9uKSA9PiBNYXRoLnJvdW5kKHZhbHVlICogKHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pKSkgLyBwcmVjaXNpb247XG52YXIgcm91bmQgPSAocHJlY2lzaW9uID0gNCkgPT4gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyByKHZhbHVlLCBwcmVjaXNpb24pIDogdmFsdWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2Zvcm1hdHRlci5qc1xudmFyIHR3b0RlY2ltYWxzID0gcm91bmQoMik7XG52YXIgY2xhbXAkMSA9ICh2YWx1ZSkgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUgfHwgMCkpO1xudmFyIGZpeHVwID0gKHZhbHVlKSA9PiBNYXRoLnJvdW5kKGNsYW1wJDEodmFsdWUpICogMjU1KTtcbnZhciByZ2IkMSA9IGNvbnZlcnRlcihcInJnYlwiKTtcbnZhciBoc2wkMSA9IGNvbnZlcnRlcihcImhzbFwiKTtcbnZhciBzZXJpYWxpemVIZXggPSAoY29sb3IpID0+IHtcblx0aWYgKGNvbG9yID09PSB2b2lkIDApIHJldHVybjtcblx0bGV0IHIgPSBmaXh1cChjb2xvci5yKTtcblx0bGV0IGcgPSBmaXh1cChjb2xvci5nKTtcblx0bGV0IGIgPSBmaXh1cChjb2xvci5iKTtcblx0cmV0dXJuIFwiI1wiICsgKDEgPDwgMjQgfCByIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xufTtcbnZhciBmb3JtYXRIZXggPSAoYykgPT4gc2VyaWFsaXplSGV4KHJnYiQxKGMpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaW5kZXguanNcbnZhciBhOTggPSB1c2VNb2RlKGRlZmluaXRpb24kMjYpO1xudmFyIGN1YmVoZWxpeCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNSk7XG52YXIgZGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNCk7XG52YXIgZGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMyk7XG52YXIgaHNpID0gdXNlTW9kZShkZWZpbml0aW9uJDIyKTtcbnZhciBoc2wgPSB1c2VNb2RlKGRlZmluaXRpb24kMjEpO1xudmFyIGhzdiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMCk7XG52YXIgaHdiID0gdXNlTW9kZShkZWZpbml0aW9uJDE5KTtcbnZhciBpdHAgPSB1c2VNb2RlKGRlZmluaXRpb24kMTgpO1xudmFyIGphYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNyk7XG52YXIgamNoID0gdXNlTW9kZShkZWZpbml0aW9uJDE2KTtcbnZhciBsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kMTUpO1xudmFyIGxhYjY1ID0gdXNlTW9kZShkZWZpbml0aW9uJDE0KTtcbnZhciBsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTMpO1xudmFyIGxjaDY1ID0gdXNlTW9kZShkZWZpbml0aW9uJDEyKTtcbnZhciBsY2h1diA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMSk7XG52YXIgbHJnYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMCk7XG52YXIgbHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDkpO1xudmFyIG9raHNsID0gdXNlTW9kZShtb2RlT2toc2wpO1xudmFyIG9raHN2ID0gdXNlTW9kZShtb2RlT2toc3YpO1xudmFyIG9rbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDgpO1xudmFyIG9rbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDcpO1xudmFyIHAzID0gdXNlTW9kZShkZWZpbml0aW9uJDYpO1xudmFyIHByb3Bob3RvID0gdXNlTW9kZShkZWZpbml0aW9uJDUpO1xudmFyIHJlYzIwMjAgPSB1c2VNb2RlKGRlZmluaXRpb24kNCk7XG52YXIgcmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDI3KTtcbnZhciB4eWIgPSB1c2VNb2RlKGRlZmluaXRpb24kMyk7XG52YXIgeHl6NTAgPSB1c2VNb2RlKGRlZmluaXRpb24kMik7XG52YXIgeHl6NjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMSk7XG52YXIgeWlxID0gdXNlTW9kZShkZWZpbml0aW9uKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9LTWVhbi50c1xudmFyIHNvcnRDb2xvcnMgPSAobGlzdCwgY3JpdGVyaWEgPSBcImxcIikgPT4gbGlzdC5zb3J0KChhLCBiKSA9PiBNYXRoLnNpZ24ob2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBhWzBdLFxuXHRnOiBhWzFdLFxuXHRiOiBhWzJdXG59KT8uW2NyaXRlcmlhXSAtIG9rbGNoKHtcblx0bW9kZTogXCJyZ2JcIixcblx0cjogYlswXSxcblx0ZzogYlsxXSxcblx0YjogYlsyXVxufSk/Lltjcml0ZXJpYV0pIHx8IDApO1xudmFyIGV1Y2xpZGVhbkRpc3RhbmNlID0gKGNvbG9yMSwgY29sb3IyKSA9PiBNYXRoLmh5cG90KGNvbG9yMVswXSAtIGNvbG9yMlswXSwgY29sb3IxWzFdIC0gY29sb3IyWzFdLCBjb2xvcjFbMl0gLSBjb2xvcjJbMl0pO1xudmFyIG1ha2VDbHVzdGVycyA9IChkYXRhLCBjZW50cm9pZHMpID0+IHtcblx0bGV0IGNsdXN0ZXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogY2VudHJvaWRzLmxlbmd0aCB9LCAoKSA9PiAoe1xuXHRcdHBvaW50czogW10sXG5cdFx0bWVhbjogbnVsbFxuXHR9KSk7XG5cdGRhdGEuZm9yRWFjaCgocG9pbnQpID0+IHtcblx0XHRsZXQgbWluRGlzdGFuY2UgPSAxZTQ7XG5cdFx0bGV0IG1pbkRpc3RhbmNlQ2x1c3RlckluZGV4ID0gMDtcblx0XHRjZW50cm9pZHMuZm9yRWFjaCgoY2VudHJvaWQsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IGV1Y2xpZGVhbkRpc3RhbmNlKHBvaW50LCBjZW50cm9pZCk7XG5cdFx0XHRpZiAodHlwZW9mIG1pbkRpc3RhbmNlID09PSBcInVuZGVmaW5lZFwiIHx8IG1pbkRpc3RhbmNlID4gZGlzdGFuY2UpIHtcblx0XHRcdFx0bWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSBpbmRleDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjbHVzdGVyc1ttaW5EaXN0YW5jZUNsdXN0ZXJJbmRleF0ucG9pbnRzLnB1c2gocG9pbnQpO1xuXHR9KTtcblx0cmV0dXJuIGNsdXN0ZXJzO1xufTtcbnZhciBjb21wdXRlTWVhbiA9IChwb2ludHMpID0+IHtcblx0cmV0dXJuIHBvaW50cz8ubGVuZ3RoID4gMCA/IHBvaW50cy5yZWR1Y2UoKGFjYywgcG9pbnQpID0+IFtcblx0XHRwb2ludFswXSArIGFjY1swXSxcblx0XHRwb2ludFsxXSArIGFjY1sxXSxcblx0XHRwb2ludFsyXSArIGFjY1syXVxuXHRdLCBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XSkubWFwKCh2YWwpID0+IHZhbCAvIHBvaW50cy5sZW5ndGgpIDogW1xuXHRcdDAsXG5cdFx0MCxcblx0XHQwXG5cdF07XG59O1xudmFyIGtNZWFucyA9IChkYXRhLCBrKSA9PiB7XG5cdGxldCBjZW50cm9pZHMgPSBzb3J0Q29sb3JzKGluaXRpYWxpemVDZW50cm9pZHMoZGF0YSwgaykpO1xuXHRjb25zdCBtYXhJdGVyYXRpb25zID0gMTA7XG5cdGZvciAobGV0IGl0ZXJhdGlvbiA9IDA7IGl0ZXJhdGlvbiA8IG1heEl0ZXJhdGlvbnM7IGl0ZXJhdGlvbisrKSB7XG5cdFx0Y29uc3QgbmV3Q2VudHJvaWRzID0gbWFrZUNsdXN0ZXJzKGRhdGEsIGNlbnRyb2lkcykubWFwKChjbHVzdGVyKSA9PiBjbHVzdGVyLnBvaW50cy5sZW5ndGggPiAwID8gY29tcHV0ZU1lYW4oY2x1c3Rlci5wb2ludHMpIDogbnVsbCk7XG5cdFx0aWYgKG5ld0NlbnRyb2lkcy5ldmVyeSgobmV3Q2VudHJvaWQsIGluZGV4KSA9PiBuZXdDZW50cm9pZCAmJiBldWNsaWRlYW5EaXN0YW5jZShuZXdDZW50cm9pZCwgY2VudHJvaWRzW2luZGV4XSkgPCAuMDAxKSkgYnJlYWs7XG5cdFx0Y2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuXHR9XG5cdHJldHVybiBjZW50cm9pZHM7XG59O1xudmFyIGluaXRpYWxpemVDZW50cm9pZHMgPSAoZGF0YSwgaykgPT4ge1xuXHRjb25zdCBjZW50cm9pZHMgPSBbZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCldXTtcblx0d2hpbGUgKGNlbnRyb2lkcy5sZW5ndGggPCBrKSB7XG5cdFx0Y29uc3QgZGlzdGFuY2VzID0gZGF0YS5tYXAoKHBvaW50KSA9PiBNYXRoLm1pbiguLi5jZW50cm9pZHMubWFwKChjZW50cm9pZCkgPT4gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKSkpKTtcblx0XHRjb25zdCB0b3RhbERpc3RhbmNlID0gZGlzdGFuY2VzLnJlZHVjZSgoc3VtLCBkKSA9PiBzdW0gKyBkLCAwKTtcblx0XHRjb25zdCBwcm9iYWJpbGl0aWVzID0gZGlzdGFuY2VzLm1hcCgoZCkgPT4gZCAvIHRvdGFsRGlzdGFuY2UpO1xuXHRcdGxldCBjdW11bGF0aXZlUHJvYmFiaWxpdHkgPSAwO1xuXHRcdGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2JhYmlsaXRpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1bXVsYXRpdmVQcm9iYWJpbGl0eSArPSBwcm9iYWJpbGl0aWVzW2ldO1xuXHRcdFx0aWYgKHJhbmRvbVZhbHVlIDwgY3VtdWxhdGl2ZVByb2JhYmlsaXR5KSB7XG5cdFx0XHRcdGNlbnRyb2lkcy5wdXNoKGRhdGFbaV0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgcHJlQmx1clBpeGVscyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgYmxvYiA9IGltZ1VSTCBpbnN0YW5jZW9mIEJsb2IgfHwgaW1nVVJMIGluc3RhbmNlb2YgRmlsZSA/IGltZ1VSTCA6IGF3YWl0IGZldGNoKGltZ1VSTCk/LnRoZW4/LigocikgPT4gcj8uYmxvYj8uKCkpO1xuXHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGgsIGJpdG1hcC5oZWlnaHQpO1xuXHRjb25zdCBjdHggPSBvZmZzZXQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRjdHguZmlsdGVyID0gXCJibHVyKDE2cHgpXCI7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRyZXR1cm4gb2Zmc2V0O1xufTtcbnZhciBnZXRDbHVzdGVySW1hZ2VEYXRhID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBiaXRtYXAgPSBhd2FpdCBwcmVCbHVyUGl4ZWxzKGltZ1VSTCk7XG5cdGNvbnN0IG9mZnNldCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoYml0bWFwLndpZHRoICogLjEyNSwgYml0bWFwLmhlaWdodCAqIC4xMjUpO1xuXHRjb25zdCBjdHggPSBvZmZzZXQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRjdHg/LmRyYXdJbWFnZT8uKGJpdG1hcCwgMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0KTtcblx0Y29uc3QgZGF0YSA9IChjdHg/LmdldEltYWdlRGF0YT8uKDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCwge1xuXHRcdHN0b3JhZ2VGb3JtYXQ6IFwiZmxvYXQzMlwiLFxuXHRcdHBpeGVsRm9ybWF0OiBcInJnYmEtZmxvYXQzMlwiLFxuXHRcdGNvbG9yU3BhY2U6IFwic3JnYlwiXG5cdH0pKS5kYXRhO1xuXHRjb25zdCBhbGxDb3VudCA9IG9mZnNldC53aWR0aCAqIG9mZnNldC5oZWlnaHQgfHwgMDtcblx0Y29uc3QgZHYgPSAxIC8gMjU1O1xuXHRjb25zdCBmcDMyID0gW107XG5cdGZvciAobGV0IHMgPSAwOyBzIDwgYWxsQ291bnQ7IHMrKykge1xuXHRcdGNvbnN0IGk0ID0gcyAqIDQ7XG5cdFx0ZnAzMi5wdXNoKGRhdGEgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHwgZGF0YSBpbnN0YW5jZW9mIEZsb2F0MTZBcnJheSA/IFtcblx0XHRcdGRhdGE/LltpNCArIDBdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAxXSB8fCAwLFxuXHRcdFx0ZGF0YT8uW2k0ICsgMl0gfHwgMFxuXHRcdF0gOiBbXG5cdFx0XHQoZGF0YT8uW2k0ICsgMF0gfHwgMCkgKiBkdixcblx0XHRcdChkYXRhPy5baTQgKyAxXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDJdIHx8IDApICogZHZcblx0XHRdKTtcblx0fVxuXHRyZXR1cm4gZnAzMjtcbn07XG52YXIgZ2V0RG9taW5hbnRDb2xvcnMgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDbHVzdGVySW1hZ2VEYXRhKGltZ1VSTCk7XG5cdHJldHVybiBzb3J0Q29sb3JzKGtNZWFucyhkYXRhLCA0KSwgXCJoXCIpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2VuZ2luZS9XYWxscGFwZXJUaGVtZS50c1xudmFyIFdBTExQQVBFUl9USEVNRV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXRoZW1lXCI7XG52YXIgV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVkgPSBcInJzLXdhbGxwYXBlci1wcmltYXJ5XCI7XG52YXIgV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXRoZW1lLXNyY1wiO1xudmFyIFRIRU1FX1NUT1JBR0VfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZO1xudmFyIFBSSU1BUllfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWTtcbnZhciBXQUxMUEFQRVJfVVJMX0tFWSA9IFdBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVk7XG52YXIgUEFQRVJfTF9TUExJVCA9IC41MjtcbnZhciBQQVBFUl9DSFJPTUFfQ0FQID0gLjAyNTtcbnZhciBGQUxMQkFDS19QQVBFUiA9IHtcblx0dW5kZXJseWluZzogXCIjMTYxNjFhXCIsXG5cdGNvbnRyYXN0OiBcIiNmN2Y3ZjhcIlxufTtcbnZhciBsYXN0TGl2ZVBhcGVyID0gbnVsbDtcbnZhciBVU0FCTEVfTFVNQV9NSU4gPSAuMDM7XG52YXIgU0VFRF9QUk9QUyA9IFtcblx0W1wiLS1jb2xvci1wcmltYXJ5XCIsIFwicHJpbWFyeVwiXSxcblx0W1wiLS1jb2xvci1zZWNvbmRhcnlcIiwgXCJzZWNvbmRhcnlcIl0sXG5cdFtcIi0tY29sb3ItdGVydGlhcnlcIiwgXCJ0ZXJ0aWFyeVwiXSxcblx0W1wiLS1iYXNlLWNvbG9yXCIsIFwicHJpbWFyeVwiXSxcblx0W1wiLS13Zi1tZC1wcmltYXJ5XCIsIFwicHJpbWFyeVwiXSxcblx0W1wiLS13Zi1tZC1zZWVkXCIsIFwicHJpbWFyeVwiXSxcblx0W1wiLS1wcmltYXJ5XCIsIFwicHJpbWFyeVwiXSxcblx0W1wiLS1zZWNvbmRhcnlcIiwgXCJzZWNvbmRhcnlcIl0sXG5cdFtcIi0tdGVydGlhcnlcIiwgXCJ0ZXJ0aWFyeVwiXVxuXTtcbnZhciBjbGFtcCA9IChuLCBsbywgaGkpID0+IE1hdGgubWluKGhpLCBNYXRoLm1heChsbywgbikpO1xudmFyIGhleE9rbGNoID0gKGwsIGMsIGgsIGZhbGxiYWNrKSA9PiBmb3JtYXRIZXgoe1xuXHRtb2RlOiBcIm9rbGNoXCIsXG5cdGwsXG5cdGMsXG5cdGhcbn0pIHx8IGZhbGxiYWNrO1xudmFyIHJnYlRvU2FtcGxlID0gKHJnYikgPT4ge1xuXHRjb25zdCBbciwgZywgYl0gPSByZ2I7XG5cdGlmICghW1xuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdF0uZXZlcnkoKG4pID0+IE51bWJlci5pc0Zpbml0ZShuKSkpIHJldHVybiBudWxsO1xuXHRjb25zdCBoZXggPSBmb3JtYXRIZXgoe1xuXHRcdG1vZGU6IFwicmdiXCIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0fSk7XG5cdGlmICghaGV4KSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgb2sgPSBva2xjaCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0cmV0dXJuIHtcblx0XHRyZ2IsXG5cdFx0aGV4LFxuXHRcdGw6IG9rPy5sID8/IC41LFxuXHRcdGM6IG9rPy5jID8/IDAsXG5cdFx0aDogb2s/LmggPz8gMFxuXHR9O1xufTtcbnZhciBwYXBlckxGcm9tSGV4ID0gKGhleCkgPT4gb2tsY2goaGV4KT8ubCA/PyAuNDtcbnZhciBoYWxvRm9yUGFwZXIgPSAoZGFya1BhcGVyKSA9PiBkYXJrUGFwZXIgPyB7XG5cdHNoYWRvdzogXCJyZ2IoMCAwIDAgLyAwLjg4KVwiLFxuXHRnbG93OiBcInJnYigwIDAgMCAvIDAuNDUpXCJcbn0gOiB7XG5cdHNoYWRvdzogXCJyZ2IoMjU1IDI1NSAyNTUgLyAwLjcyKVwiLFxuXHRnbG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuMzUpXCJcbn07XG52YXIgaXNVc2FibGVQYXBlckx1bWEgPSAobHVtYSkgPT4gTnVtYmVyLmlzRmluaXRlKGx1bWEpICYmIGx1bWEgPj0gVVNBQkxFX0xVTUFfTUlOICYmIGx1bWEgPD0gMTtcbnZhciBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21TYW1wbGVzID0gKHNhbXBsZXMsIHBpeGVsTHVtYSkgPT4ge1xuXHRpZiAoIXNhbXBsZXMubGVuZ3RoICYmIHBpeGVsTHVtYSA9PSBudWxsKSByZXR1cm4geyAuLi5GQUxMQkFDS19QQVBFUiB9O1xuXHRjb25zdCBscyA9IHNhbXBsZXMubWFwKChzKSA9PiBzLmwpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblx0Y29uc3QgbWVhbkwgPSBzYW1wbGVzLmxlbmd0aCA/IHNhbXBsZXMucmVkdWNlKChzdW0sIHMpID0+IHN1bSArIHMubCwgMCkgLyBzYW1wbGVzLmxlbmd0aCA6IHBpeGVsTHVtYTtcblx0Y29uc3QgbWVkaWFuTCA9IGxzLmxlbmd0aCA/IGxzW01hdGguZmxvb3IobHMubGVuZ3RoIC8gMildIDogbWVhbkw7XG5cdGNvbnN0IHBhcGVyTCA9IGNsYW1wKHBpeGVsTHVtYSAhPSBudWxsICYmIGlzVXNhYmxlUGFwZXJMdW1hKHBpeGVsTHVtYSkgPyBwaXhlbEx1bWEgOiBNYXRoLm1heChtZWFuTCwgbWVkaWFuTCksIC4wOCwgLjk0KTtcblx0Y29uc3QgcGFwZXIgPSBzYW1wbGVzLmxlbmd0aCA/IFsuLi5zYW1wbGVzXS5zb3J0KChhLCBiKSA9PiBhLmMgLSBiLmMgfHwgTWF0aC5hYnMoYS5sIC0gcGFwZXJMKSAtIE1hdGguYWJzKGIubCAtIHBhcGVyTCkpWzBdIDogbnVsbDtcblx0Y29uc3QgcGFwZXJDID0gcGFwZXIgPyBNYXRoLm1pbihQQVBFUl9DSFJPTUFfQ0FQLCBNYXRoLm1heCgwLCBwYXBlci5jICogLjIpKSA6IDA7XG5cdGNvbnN0IGggPSBwYXBlcj8uaCB8fCAwO1xuXHRjb25zdCBkYXJrUGFwZXIgPSBwYXBlckwgPCBQQVBFUl9MX1NQTElUO1xuXHRyZXR1cm4ge1xuXHRcdHVuZGVybHlpbmc6IGhleE9rbGNoKHBhcGVyTCwgcGFwZXJDLCBoLCBkYXJrUGFwZXIgPyBGQUxMQkFDS19QQVBFUi51bmRlcmx5aW5nIDogXCIjZThlNmUyXCIpLFxuXHRcdGNvbnRyYXN0OiBoZXhPa2xjaChkYXJrUGFwZXIgPyAuOTMgOiAuMTYsIC4wMDgsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLmNvbnRyYXN0IDogXCIjMTQxNDE2XCIpXG5cdH07XG59O1xudmFyIHNhbXBsZUltYWdlTWVhbkx1bWEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYmxvYiA9IGltZ1VSTCBpbnN0YW5jZW9mIEJsb2IgPyBpbWdVUkwgOiBhd2FpdCAoYXdhaXQgZmV0Y2goaW1nVVJMKSkuYmxvYigpO1xuXHRcdGlmICghYmxvYiB8fCBibG9iLnNpemUgPD0gMCkgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgYml0bWFwID0gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYik7XG5cdFx0Y29uc3QgdyA9IDQ4O1xuXHRcdGNvbnN0IGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGJpdG1hcC5oZWlnaHQgLyBNYXRoLm1heCgxLCBiaXRtYXAud2lkdGgpICogdykpO1xuXHRcdGNvbnN0IGNhbnZhcyA9IHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgIT09IFwidW5kZWZpbmVkXCIgPyBuZXcgT2Zmc2NyZWVuQ2FudmFzKHcsIGgpIDogT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCB7XG5cdFx0XHR3aWR0aDogdyxcblx0XHRcdGhlaWdodDogaFxuXHRcdH0pO1xuXHRcdGlmICghKGNhbnZhcyBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcykpIHtcblx0XHRcdGNhbnZhcy53aWR0aCA9IHc7XG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gaDtcblx0XHR9XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRpZiAoIWN0eCkge1xuXHRcdFx0Yml0bWFwLmNsb3NlPy4oKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjdHguZHJhd0ltYWdlKGJpdG1hcCwgMCwgMCwgdywgaCk7XG5cdFx0Yml0bWFwLmNsb3NlPy4oKTtcblx0XHRjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3LCBoKS5kYXRhO1xuXHRcdGxldCBzdW0gPSAwO1xuXHRcdGxldCBuID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDE2KSB7XG5cdFx0XHRpZiAoKGRhdGFbaSArIDNdID8/IDI1NSkgPCAxNikgY29udGludWU7XG5cdFx0XHRjb25zdCByID0gZGF0YVtpXSAvIDI1NTtcblx0XHRcdGNvbnN0IGcgPSBkYXRhW2kgKyAxXSAvIDI1NTtcblx0XHRcdGNvbnN0IGIgPSBkYXRhW2kgKyAyXSAvIDI1NTtcblx0XHRcdHN1bSArPSAuMjEyNiAqIHIgKyAuNzE1MiAqIGcgKyAuMDcyMiAqIGI7XG5cdFx0XHRuKys7XG5cdFx0fVxuXHRcdGlmIChuIDwgOCkgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgbHVtYSA9IHN1bSAvIG47XG5cdFx0cmV0dXJuIGlzVXNhYmxlUGFwZXJMdW1hKGx1bWEpID8gbHVtYSA6IG51bGw7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEgPSAobHVtYSkgPT4ge1xuXHRyZXR1cm4gbHVtYSA8PSBQQVBFUl9MX1NQTElUID8geyAuLi5GQUxMQkFDS19QQVBFUiB9IDoge1xuXHRcdHVuZGVybHlpbmc6IFwiI2U4ZTZlMlwiLFxuXHRcdGNvbnRyYXN0OiBcIiMxNDE0MTZcIlxuXHR9O1xufTtcbnZhciBoYXNXYWxscGFwZXJQYXBlciA9IChzZWVkcykgPT4gQm9vbGVhbihzZWVkcy51bmRlcmx5aW5nICYmIHNlZWRzLmNvbnRyYXN0KTtcbnZhciByYW5rV2FsbHBhcGVyU2VlZHMgPSAoY2VudHJvaWRzLCBwaXhlbEx1bWEpID0+IHtcblx0Y29uc3Qgc2FtcGxlcyA9IGNlbnRyb2lkcy5tYXAocmdiVG9TYW1wbGUpLmZpbHRlcihCb29sZWFuKTtcblx0aWYgKCFzYW1wbGVzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGFjY2VudFBvb2wgPSBzYW1wbGVzLmZpbHRlcigocykgPT4gcy5sID49IC4xOCAmJiBzLmwgPD0gLjg4ICYmIHMuYyA+PSAuMDIpLnNvcnQoKGEsIGIpID0+IGIuYyAtIGEuYyB8fCBNYXRoLmFicyhiLmwgLSAuNTUpIC0gTWF0aC5hYnMoYS5sIC0gLjU1KSk7XG5cdGNvbnN0IHBvb2wgPSBhY2NlbnRQb29sLmxlbmd0aCA/IGFjY2VudFBvb2wgOiBbLi4uc2FtcGxlc10uc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jKTtcblx0Y29uc3QgcHJpbWFyeSA9IHBvb2xbMF07XG5cdGlmICghcHJpbWFyeSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGh1ZURpc3QgPSAoYSwgYikgPT4ge1xuXHRcdGNvbnN0IGQgPSBNYXRoLmFicyhhIC0gYikgJSAzNjA7XG5cdFx0cmV0dXJuIGQgPiAxODAgPyAzNjAgLSBkIDogZDtcblx0fTtcblx0Y29uc3QgcGlja05leHQgPSAodXNlZCkgPT4ge1xuXHRcdGNvbnN0IHJlc3QgPSBwb29sLmZpbHRlcigocykgPT4gIXVzZWQuaW5jbHVkZXMocykpO1xuXHRcdGlmICghcmVzdC5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGJhc2UgPSB1c2VkW3VzZWQubGVuZ3RoIC0gMV0gPz8gcHJpbWFyeTtcblx0XHRcdGNvbnN0IG51ZGdlZCA9IGZvcm1hdEhleCh7XG5cdFx0XHRcdG1vZGU6IFwib2tsY2hcIixcblx0XHRcdFx0bDogTWF0aC5taW4oLjg1LCBNYXRoLm1heCguMiwgYmFzZS5sICsgKHVzZWQubGVuZ3RoID09PSAxID8gLS4xMiA6IC4xKSkpLFxuXHRcdFx0XHRjOiBNYXRoLm1heCguMDQsIGJhc2UuYyAqIC44NSksXG5cdFx0XHRcdGg6IGJhc2UuaFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5iYXNlLFxuXHRcdFx0XHRoZXg6IG51ZGdlZCB8fCBiYXNlLmhleCxcblx0XHRcdFx0bDogYmFzZS5sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gWy4uLnJlc3RdLnNvcnQoKGEsIGIpID0+IE1hdGgubWluKC4uLnVzZWQubWFwKCh1KSA9PiBodWVEaXN0KGIuaCwgdS5oKSkpIC0gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYS5oLCB1LmgpKSkgfHwgYi5jIC0gYS5jKVswXSA/PyByZXN0WzBdO1xuXHR9O1xuXHRjb25zdCBzZWNvbmRhcnkgPSBwaWNrTmV4dChbcHJpbWFyeV0pO1xuXHRjb25zdCB0ZXJ0aWFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5LCBzZWNvbmRhcnldKTtcblx0Y29uc3QgcGFwZXIgPSBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21TYW1wbGVzKHNhbXBsZXMsIHBpeGVsTHVtYSk7XG5cdHJldHVybiB7XG5cdFx0cHJpbWFyeTogcHJpbWFyeS5oZXgsXG5cdFx0c2Vjb25kYXJ5OiBzZWNvbmRhcnkuaGV4LFxuXHRcdHRlcnRpYXJ5OiB0ZXJ0aWFyeS5oZXgsXG5cdFx0Li4ucGFwZXJcblx0fTtcbn07XG52YXIgdGhlbWVIb3N0cyA9ICgpID0+IHtcblx0Y29uc3Qgbm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRub2Rlcy5hZGQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbnYtc2hlbGwtcm9vdCwgLndmLWRlbW8tcm9vdCwgdWktd2luZG93XCIpLmZvckVhY2goKGVsKSA9PiBub2Rlcy5hZGQoZWwpKTtcblx0cmV0dXJuIFsuLi5ub2Rlc107XG59O1xudmFyIHdhbGxwYXBlclNlZWRzTWF5UGFpbnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB0cnVlO1xuXHRjb25zdCBzcmMgPSBTdHJpbmcoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQuY29sb3JTb3VyY2UgfHwgXCJcIik7XG5cdGlmICghc3JjKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIHNyYyA9PT0gXCJ3YWxscGFwZXJcIiB8fCBzcmMgPT09IFwic3BlZWQtZGlhbFwiIHx8IHNyYyA9PT0gXCJzeXN0ZW0td2FsbHBhcGVyXCI7XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMgPSAocGFwZXIsIGV4dHJhSG9zdHMgPSBbXSkgPT4ge1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTEZyb21IZXgocGFwZXIudW5kZXJseWluZykgPCBQQVBFUl9MX1NQTElUO1xuXHRjb25zdCB7IHNoYWRvdywgZ2xvdyB9ID0gaGFsb0ZvclBhcGVyKGRhcmtQYXBlcik7XG5cdGNvbnN0IGhvc3RzID0gbmV3IFNldCh0aGVtZUhvc3RzKCkpO1xuXHRmb3IgKGNvbnN0IGVsIG9mIGV4dHJhSG9zdHMpIGhvc3RzLmFkZChlbCk7XG5cdGZvciAoY29uc3QgaG9zdCBvZiBob3N0cykge1xuXHRcdGhvc3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci11bmRlcmx5aW5nLWNvbG9yXCIsIHBhcGVyLnVuZGVybHlpbmcpO1xuXHRcdGhvc3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci1jb250cmFzdC1jb2xvclwiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0aG9zdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnXCIsIHBhcGVyLmNvbnRyYXN0KTtcblx0XHRob3N0LnN0eWxlLnNldFByb3BlcnR5KFwiLS1lbnYtbGF1bmNoZXItZmctc2hhZG93XCIsIHNoYWRvdyk7XG5cdFx0aG9zdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLWdsb3dcIiwgZ2xvdyk7XG5cdH1cbn07XG52YXIgcGVyc2lzdExpdmVQYXBlciA9IChwYXBlcikgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmICghY2FjaGVkKSByZXR1cm47XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdC4uLmNhY2hlZCxcblx0XHRcdHVuZGVybHlpbmc6IHBhcGVyLnVuZGVybHlpbmcsXG5cdFx0XHRjb250cmFzdDogcGFwZXIuY29udHJhc3Rcblx0XHR9KSk7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgYXBwbHlXYWxscGFwZXJQYXBlckZyb21MdW1hID0gKGx1bWEsIGV4dHJhSG9zdHMgPSBbXSkgPT4ge1xuXHRpZiAoIWlzVXNhYmxlUGFwZXJMdW1hKGx1bWEpKSB7XG5cdFx0aWYgKGxhc3RMaXZlUGFwZXIpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMobGFzdExpdmVQYXBlciwgZXh0cmFIb3N0cyk7XG5cdFx0XHRyZXR1cm4gbGFzdExpdmVQYXBlcjtcblx0XHR9XG5cdFx0cmV0dXJuIHsgLi4uRkFMTEJBQ0tfUEFQRVIgfTtcblx0fVxuXHRjb25zdCBwYXBlciA9IGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEobHVtYSk7XG5cdGxhc3RMaXZlUGFwZXIgPSBwYXBlcjtcblx0YXBwbHlXYWxscGFwZXJQYXBlclRva2VucyhwYXBlciwgZXh0cmFIb3N0cyk7XG5cdHBlcnNpc3RMaXZlUGFwZXIocGFwZXIpO1xuXHRyZXR1cm4gcGFwZXI7XG59O1xudmFyIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyA9IChzZWVkcykgPT4ge1xuXHRjb25zdCBuZXh0ID0gbGFzdExpdmVQYXBlciA/IHtcblx0XHQuLi5zZWVkcyxcblx0XHQuLi5sYXN0TGl2ZVBhcGVyXG5cdH0gOiBzZWVkcztcblx0dHJ5IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkobmV4dCkpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBSSU1BUllfU1RPUkFHRV9LRVksIG5leHQucHJpbWFyeSk7XG5cdH0gY2F0Y2gge31cblx0aWYgKGhhc1dhbGxwYXBlclBhcGVyKG5leHQpKSBhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKG5leHQpO1xuXHRpZiAoIXdhbGxwYXBlclNlZWRzTWF5UGFpbnQoKSkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgdGhlbWVIb3N0cygpKSBmb3IgKGNvbnN0IFtwcm9wLCBrZXldIG9mIFNFRURfUFJPUFMpIGhvc3Quc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgbmV4dFtrZXldKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXByaW1hcnlcIiwgbmV4dC5wcmltYXJ5KTtcblx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmFzZS1jb2xvclwiLCBuZXh0LnByaW1hcnkpO1xuXHRcdGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1zZWNvbmRhcnlcIiwgbmV4dC5zZWNvbmRhcnkpO1xuXHRcdGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci10ZXJ0aWFyeVwiLCBuZXh0LnRlcnRpYXJ5KTtcblx0fSk7XG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidTItdGhlbWUtY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0c291cmNlOiBcIndhbGxwYXBlclwiLFxuXHRcdHNlZWRzOiBuZXh0XG5cdH0gfSkpO1xufTtcbnZhciBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfU1RPUkFHRV9LRVkpO1xuXHRcdGlmICghcmF3KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0aWYgKCFwYXJzZWQ/LnByaW1hcnkgfHwgIXBhcnNlZD8uc2Vjb25kYXJ5IHx8ICFwYXJzZWQ/LnRlcnRpYXJ5KSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gcGFyc2VkO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBhcHBseVRoZW1lRnJvbVdhbGxwYXBlciA9IGFzeW5jIChpbWdVUkwsIG9wdHMpID0+IHtcblx0Y29uc3Qgc3JjS2V5ID0gdHlwZW9mIGltZ1VSTCA9PT0gXCJzdHJpbmdcIiA/IGltZ1VSTC5zbGljZSgwLCAyMDQ4KSA6IGBibG9iOiR7aW1nVVJMLm5hbWUgfHwgXCJ3YWxscGFwZXJcIn06JHtpbWdVUkwuc2l6ZX1gO1xuXHRjb25zdCBsaXZlTHVtYSA9IGF3YWl0IHNhbXBsZUltYWdlTWVhbkx1bWEoaW1nVVJMKTtcblx0aWYgKGxpdmVMdW1hICE9IG51bGwpIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYShsaXZlTHVtYSk7XG5cdGlmICghb3B0cz8uZm9yY2UpIHRyeSB7XG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZKSA9PT0gc3JjS2V5KSB7XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBsb2FkQ2FjaGVkV2FsbHBhcGVyVGhlbWUoKTtcblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0YXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKGNhY2hlZCk7XG5cdFx0XHRcdHJldHVybiBsYXN0TGl2ZVBhcGVyID8ge1xuXHRcdFx0XHRcdC4uLmNhY2hlZCxcblx0XHRcdFx0XHQuLi5sYXN0TGl2ZVBhcGVyXG5cdFx0XHRcdH0gOiBjYWNoZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2VudHJvaWRzID0gYXdhaXQgZ2V0RG9taW5hbnRDb2xvcnMoaW1nVVJMKTtcblx0XHRjb25zdCBzZWVkcyA9IHJhbmtXYWxscGFwZXJTZWVkcyhjZW50cm9pZHMsIGxpdmVMdW1hID8/IHZvaWQgMCk7XG5cdFx0aWYgKCFzZWVkcykgcmV0dXJuIG51bGw7XG5cdFx0YXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKHNlZWRzKTtcblx0XHR0cnkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oV0FMTFBBUEVSX1VSTF9LRVksIHNyY0tleSk7XG5cdFx0fSBjYXRjaCB7fVxuXHRcdHJldHVybiBsYXN0TGl2ZVBhcGVyID8ge1xuXHRcdFx0Li4uc2VlZHMsXG5cdFx0XHQuLi5sYXN0TGl2ZVBhcGVyXG5cdFx0fSA6IHNlZWRzO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gYXBwbHlUaGVtZUZyb21XYWxscGFwZXIgZmFpbGVkXCIsIGVycik7XG5cdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0YXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzKGNhY2hlZCk7XG5cdFx0XHRyZXR1cm4gY2FjaGVkO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciByZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSA9ICgpID0+IHtcblx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdGlmIChjYWNoZWQpIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRyZXR1cm4gY2FjaGVkO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2NhbnZhcy9DYW52YXMudHNcbnZhciBibG9iSW1hZ2VNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBkZWxheWVkID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoW10pO1xudmFyIHNoZWR1bGVyID0gbWFrZVJBRkN5Y2xlKCk7XG52YXIgZmFpbGVkV2FsbHBhcGVyU3JjID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBnZXRJbWdXaWR0aCA9IChpbWcpID0+IHtcblx0cmV0dXJuIGltZz8ubmF0dXJhbFdpZHRoIHx8IGltZz8ud2lkdGggfHwgMTtcbn07XG52YXIgZ2V0SW1nSGVpZ2h0ID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsSGVpZ2h0IHx8IGltZz8uaGVpZ2h0IHx8IDE7XG59O1xudmFyIGNyZWF0ZTJkQ29udGV4dCA9IChjYW52YXMpID0+IHtcblx0Y29uc3QgYmFzZSA9IHtcblx0XHRhbHBoYTogdHJ1ZSxcblx0XHRkZXN5bmNocm9uaXplZDogdHJ1ZSxcblx0XHRwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuXHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZVxuXHR9O1xuXHRmb3IgKGNvbnN0IGNvbG9yU3BhY2Ugb2YgW1xuXHRcdFwicmVjMjEwMC1obGdcIixcblx0XHRcImRpc3BsYXktcDNcIixcblx0XHRcInNyZ2JcIlxuXHRdKSB0cnkge1xuXHRcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwge1xuXHRcdFx0Li4uYmFzZSxcblx0XHRcdGNvbG9yU3BhY2Vcblx0XHR9KTtcblx0XHRpZiAoY3R4KSByZXR1cm4gY3R4O1xuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwgYmFzZSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG59O1xudmFyIGNhbGxCeUZyYW1lID0gKHBvaW50ZXJJZCwgY2IpID0+IHtcblx0ZGVsYXllZC5zZXQocG9pbnRlcklkLCBjYik7XG59O1xudmFyIGNvdmVyID0gKGN0eCwgaW1nLCBzY2FsZSA9IDEsIHBvcnQsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3QgY2FudmFzID0gY3R4LmNhbnZhcztcblx0Y3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG5cdGN0eC5yb3RhdGUoKC1vcmllbnQgfHwgMCkgKiAoTWF0aC5QSSAqIC41KSk7XG5cdGN0eC5yb3RhdGUoKDEgLSBwb3J0KSAqIChNYXRoLlBJIC8gMikpO1xuXHRjdHgudHJhbnNsYXRlKC0oZ2V0SW1nV2lkdGgoaW1nKSAvIDIpICogc2NhbGUsIC0oZ2V0SW1nSGVpZ2h0KGltZykgLyAyKSAqIHNjYWxlKTtcbn07XG52YXIgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSA9IChibG9iKSA9PiB7XG5cdGlmICghYmxvYkltYWdlTWFwLmhhcyhibG9iKSAmJiAoYmxvYiBpbnN0YW5jZW9mIEJsb2IgfHwgYmxvYiBpbnN0YW5jZW9mIEZpbGUgfHwgYmxvYiBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCBibG9iIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXAgfHwgYmxvYiBpbnN0YW5jZW9mIEltYWdlKSkge1xuXHRcdGNvbnN0IHBlbmRpbmcgPSBjcmVhdGVJbWFnZUJpdG1hcChibG9iKS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRibG9iSW1hZ2VNYXAuZGVsZXRlKGJsb2IpO1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH0pO1xuXHRcdGJsb2JJbWFnZU1hcC5zZXQoYmxvYiwgcGVuZGluZyk7XG5cdH1cblx0cmV0dXJuIGJsb2JJbWFnZU1hcC5nZXQoYmxvYik7XG59O1xudmFyIGJpbmRDYWNoZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmluZENhY2hlXCIpO1xuZ2xvYmFsVGhpc1tiaW5kQ2FjaGVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQ2FjaGUgPSBnbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF07XG52YXIgYmluZENhY2hlZCA9IChjYiwgY3R4KSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGJpbmRDYWNoZS5nZXQoY2IpO1xuXHRpZiAodHlwZW9mIGNhY2hlZCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY2FjaGVkO1xuXHRjb25zdCBib3VuZCA9IGNiLmJpbmQoY3R4KTtcblx0YmluZENhY2hlLnNldChjYiwgYm91bmQpO1xuXHRyZXR1cm4gYm91bmQ7XG59O1xudmFyIFVJQ2FudmFzID0gbnVsbDtcbmlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIikgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyBleHRlbmRzIEhUTUxDYW52YXNFbGVtZW50IHtcblx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcblx0XHRcImRhdGEtc3JjXCIsXG5cdFx0XCJkYXRhLW9yaWVudFwiLFxuXHRcdFwib3JpZW50XCJcblx0XTtcblx0Y3R4ID0gbnVsbDtcblx0aW1hZ2UgPSBudWxsO1xuXHQjc2l6ZSA9IFsxLCAxXTtcblx0I2xvYWRpbmcgPSBcIlwiO1xuXHQjcmVhZHkgPSBcIlwiO1xuXHRnZXQgI29yaWVudCgpIHtcblx0XHRjb25zdCByYXcgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID8/IHRoaXMuZ2V0QXR0cmlidXRlKFwib3JpZW50XCIpID8/IFwiMFwiO1xuXHRcdGNvbnN0IG4gPSBOdW1iZXIucGFyc2VJbnQocmF3LCAxMCk7XG5cdFx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xuXHR9XG5cdHNldCAjb3JpZW50KHZhbHVlKSB7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBzKTtcblx0fVxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgXywgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSBcImRhdGEtc3JjXCIpIHRoaXMuI3ByZWxvYWQobmV3VmFsdWUpO1xuXHRcdGlmIChuYW1lID09IFwiZGF0YS1vcmllbnRcIiB8fCBuYW1lID09IFwib3JpZW50XCIpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdH1cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxaSwgMTAwZHZpKSlcIik7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMCUsIG1pbigxMDBjcWIsIDEwMGR2YikpXCIpO1xuXHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8ud2lkdGggfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSwgTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRIZWlnaHQgfHwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSwgMSksIHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8uaGVpZ2h0IHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdHRoaXMuI3ByZWxvYWQodGhpcy4jbG9hZGluZyA9IHRoaXMuZGF0YXNldC5zcmMgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBjYW52YXMgPSB0aGlzO1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblx0XHRjb25zdCBmaXhTaXplID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgb2xkID0gdGhpcy4jc2l6ZTtcblx0XHRcdHRoaXMuI3NpemUgPSBbTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRXaWR0aCB8fCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEsIDEpLCBwYXJlbnQ/LmNsaWVudFdpZHRoIHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8ud2lkdGggfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSwgTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodGhpcy5jbGllbnRIZWlnaHQgfHwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSwgMSksIHBhcmVudD8uY2xpZW50SGVpZ2h0IHx8IDEpICogKHRoaXMuY3VycmVudENTU1pvb20gfHwgMSksIHNjcmVlbj8uaGVpZ2h0IHx8IDEpICogKGRldmljZVBpeGVsUmF0aW8gfHwgMSldO1xuXHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHR9O1xuXHRcdHNoZWR1bGVyPy5zaGVkdWxlPy4oKCkgPT4ge1xuXHRcdFx0dGhpcy5jdHggPSBjcmVhdGUyZENvbnRleHQoY2FudmFzKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY3R4Py5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHRcdGNhbnZhcz8uY29uZmlndXJlSGlnaER5bmFtaWNSYW5nZT8uKHsgbW9kZTogXCJleHRlbmRlZFwiIH0pO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0dGhpcy5pbmVydCA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0UG9zaXRpb24gPSBcImNlbnRlclwiO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwidS1jYW52YXNcIik7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1Mi1jYW52YXNcIik7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1aS1jYW52YXNcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWlubGluZS1zaXplXCIsIFwibWluKDEwMCUsIG1pbigxMDBjcWksIDEwMGR2aSkpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1ibG9jay1zaXplXCIsIFwibWluKDEwMCUsIG1pbigxMDBjcWIsIDEwMGR2YikpXCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImR5bmFtaWMtcmFuZ2UtbGltaXRcIiwgXCJuby1saW1pdFwiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zcGFjZVwiLCBcImRpc3BsYXktcDNcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0Zml4U2l6ZSgpO1xuXHRcdFx0bmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdFx0XHRcdGNvbnN0IGJveCA9IGVudHJ5Py5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplPy5bMF07XG5cdFx0XHRcdFx0aWYgKGJveCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb2xkID0gdGhpcy4jc2l6ZTtcblx0XHRcdFx0XHRcdHRoaXMuI3NpemUgPSBbTWF0aC5tYXgoYm94LmlubGluZVNpemUgfHwgdGhpcy53aWR0aCwgMSksIE1hdGgubWF4KGJveC5ibG9ja1NpemUgfHwgdGhpcy5oZWlnaHQsIDEpXTtcblx0XHRcdFx0XHRcdGlmIChvbGQ/LlswXSAhPSB0aGlzLiNzaXplWzBdIHx8IG9sZD8uWzFdICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KS5vYnNlcnZlKHRoaXMsIHsgYm94OiBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiIH0pO1xuXHRcdFx0dGhpcy4jcHJlbG9hZCh0aGlzLiNsb2FkaW5nID0gdGhpcy5kYXRhc2V0LnNyYyB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHRcdGlmICh0aGlzLmltYWdlKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkgfHwgdGhpcy4jbG9hZGluZyk7XG5cdFx0fSk7XG5cdH1cblx0YXN5bmMgJHVzZUltYWdlQXNTb3VyY2UoYmxvYiwgcmVhZHkpIHtcblx0XHRyZWFkeSB8fD0gdGhpcy4jbG9hZGluZztcblx0XHRjb25zdCBpbWcgPSBibG9iIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXAgPyBibG9iIDogYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZShibG9iKS5jYXRjaChjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0aWYgKGltZyAmJiByZWFkeSA9PSB0aGlzLiNsb2FkaW5nKSB7XG5cdFx0XHR0aGlzLmltYWdlID0gaW1nO1xuXHRcdFx0dGhpcy4jcmVuZGVyKHJlYWR5KTtcblx0XHR9XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjYW52YXMgPSB0aGlzLCBjdHggPSB0aGlzLmN0eCwgaW1nID0gdGhpcy5pbWFnZTtcblx0XHRpZiAoaW1nICYmIGN0eCAmJiAod2hhdElzUmVhZHkgPT0gdGhpcy4jbG9hZGluZyB8fCAhd2hhdElzUmVhZHkpKSB7XG5cdFx0XHRpZiAod2hhdElzUmVhZHkpIHRoaXMuI3JlYWR5ID0gd2hhdElzUmVhZHk7XG5cdFx0XHRpZiAodGhpcy53aWR0aCAhPSB0aGlzLiNzaXplWzBdKSB0aGlzLndpZHRoID0gdGhpcy4jc2l6ZVswXTtcblx0XHRcdGlmICh0aGlzLmhlaWdodCAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLmhlaWdodCA9IHRoaXMuI3NpemVbMV07XG5cdFx0XHR0aGlzLnN0eWxlLmFzcGVjdFJhdGlvID0gYCR7dGhpcy53aWR0aCB8fCAxfSAvICR7dGhpcy5oZWlnaHQgfHwgMX1gO1xuXHRcdFx0Y29uc3Qgb3ggPSB0aGlzLiNvcmllbnQgJSAyIHx8IDA7XG5cdFx0XHRjb25zdCBwb3J0ID0gZ2V0SW1nV2lkdGgoaW1nKSA8PSBnZXRJbWdIZWlnaHQoaW1nKSA/IDEgOiAwO1xuXHRcdFx0Y29uc3Qgc2NhbGUgPSBNYXRoLm1heChjYW52YXNbW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1bb3hdXSAvIChwb3J0ID8gZ2V0SW1nSGVpZ2h0KGltZykgOiBnZXRJbWdXaWR0aChpbWcpKSwgY2FudmFzW1tcIndpZHRoXCIsIFwiaGVpZ2h0XCJdW294XV0gLyAocG9ydCA/IGdldEltZ1dpZHRoKGltZykgOiBnZXRJbWdIZWlnaHQoaW1nKSkpO1xuXHRcdFx0Y3R4LnNhdmUoKTtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblx0XHRcdGNvdmVyKGN0eCwgaW1nLCBzY2FsZSwgcG9ydCwgdGhpcy4jb3JpZW50KTtcblx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGggKiBzY2FsZSwgaW1nLmhlaWdodCAqIHNjYWxlKTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9XG5cdCNwcmVsb2FkKHNyYykge1xuXHRcdGNvbnN0IHJlYWR5ID0gc3JjIHx8IHRoaXMuI2xvYWRpbmc7XG5cdFx0dGhpcy4jbG9hZGluZyA9IHJlYWR5O1xuXHRcdGlmICghcmVhZHkgfHwgdHlwZW9mIHJlYWR5ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0aWYgKGZhaWxlZFdhbGxwYXBlclNyYy5oYXMocmVhZHkpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0cmV0dXJuIGZldGNoKHJlYWR5LCB7XG5cdFx0XHRjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxuXHRcdFx0bW9kZTogXCJzYW1lLW9yaWdpblwiXG5cdFx0fSk/LnRoZW4/Lihhc3luYyAocnNwKSA9PiB7XG5cdFx0XHRpZiAoIXJzcC5vaykge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJzcC5ibG9iKCk7XG5cdFx0XHRpZiAoIWJsb2I/LnNpemUgfHwgYmxvYi50eXBlICYmICFibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuJHVzZUltYWdlQXNTb3VyY2UoYmxvYiwgcmVhZHkpPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdFx0ZmFpbGVkV2FsbHBhcGVyU3JjLmFkZChyZWFkeSk7XG5cdFx0XHR9KTtcblx0XHR9KT8uY2F0Y2g/LigoKSA9PiB7XG5cdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHR9KTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7XG5cdFx0Y29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cdFx0aWYgKHRoaXMuaW1hZ2UgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHNoZWR1bGVyPy5zaGVkdWxlPy4oYmluZENhY2hlZCh0aGlzLiRyZW5kZXJQYXNzLCB0aGlzKSk7XG5cdH1cbn07XG5lbHNlIFVJQ2FudmFzID0gY2xhc3MgVUlDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cdCRyZW5kZXJQYXNzKHdoYXRJc1JlYWR5KSB7fVxuXHQkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJldHVybiBibG9iO1xuXHR9XG5cdCNwcmVsb2FkKHNyYykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXHQjcmVuZGVyKHdoYXRJc1JlYWR5KSB7fVxuXHQjb3JpZW50ID0gMDtcblx0I2xvYWRpbmcgPSBcIlwiO1xuXHQjcmVhZHkgPSBcIlwiO1xuXHQjc2l6ZSA9IFsxLCAxXTtcblx0Y3R4ID0gbnVsbDtcblx0aW1hZ2UgPSBudWxsO1xufTtcbnRyeSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZShcInVpLWNhbnZhc1wiLCBVSUNhbnZhcywgeyBleHRlbmRzOiBcImNhbnZhc1wiIH0pO1xufSBjYXRjaCAoZSkge31cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2NhbnZhcy9DYW52YXMtMi50c1xudmFyIFdBTExQQVBFUl9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLWltYWdlXCI7XG52YXIgREVGQVVMVF9XQUxMUEFQRVJfVVJMID0gXCIvYXNzZXRzL3dhbGxwYXBlci5qcGdcIjtcbnZhciBXQUxMUEFQRVJfSURCX01BUktFUiA9IFwiaWRiOnJzLXdhbGxwYXBlclwiO1xudmFyIElEQl9OQU1FID0gXCJjd3NwLXdhbGxwYXBlci12MVwiO1xudmFyIElEQl9TVE9SRSA9IFwiYmxvYnNcIjtcbnZhciBJREJfS0VZID0gXCJjdXJyZW50XCI7XG52YXIgTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTID0gNTEyZTM7XG52YXIgbGl2ZU9iamVjdFVybCA9IG51bGw7XG52YXIgd2FsbHBhcGVyRXBvY2ggPSAwO1xudmFyIGN1cnJlbnRPcmllbnROdW1iZXIgPSAoKSA9PiBvcmllbnRhdGlvbk51bWJlck1hcD8uW2dldENvcnJlY3RPcmllbnRhdGlvbigpXSA/PyAwO1xudmFyIGlzSWRiUG9pbnRlciA9IChwb2ludGVyKSA9PiBwb2ludGVyID09PSBcImlkYjpycy13YWxscGFwZXJcIiB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJpZGI6XCIpO1xudmFyIGlzVW51c2FibGVTdG9yZWRVcmwgPSAocG9pbnRlcikgPT4gcG9pbnRlci5zdGFydHNXaXRoKFwiYmxvYjpcIikgfHwgcG9pbnRlci5zdGFydHNXaXRoKFwiZGF0YTpcIikgJiYgcG9pbnRlci5sZW5ndGggPiBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlM7XG52YXIgcmV2b2tlTGl2ZU9iamVjdFVybCA9ICgpID0+IHtcblx0d2FsbHBhcGVyRXBvY2ggKz0gMTtcblx0aWYgKGxpdmVPYmplY3RVcmwgJiYgbGl2ZU9iamVjdFVybC5zdGFydHNXaXRoKFwiYmxvYjpcIikpIHRyeSB7XG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChsaXZlT2JqZWN0VXJsKTtcblx0fSBjYXRjaCB7fVxuXHRsaXZlT2JqZWN0VXJsID0gbnVsbDtcbn07XG52YXIgYWRvcHRXYWxscGFwZXJCbG9iID0gKGJsb2IsIGVwb2NoKSA9PiB7XG5cdGlmIChlcG9jaCAhPT0gd2FsbHBhcGVyRXBvY2gpIHJldHVybiBsaXZlT2JqZWN0VXJsO1xuXHRpZiAobGl2ZU9iamVjdFVybCkgcmV0dXJuIGxpdmVPYmplY3RVcmw7XG5cdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcbn07XG52YXIgb3BlbldhbGxwYXBlckRiID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRpZiAodHlwZW9mIGluZGV4ZWREQiA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHJlamVjdCgvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiaW5kZXhlZERCIHVuYXZhaWxhYmxlXCIpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oSURCX05BTUUsIDEpO1xuXHRyZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRiID0gcmVxLnJlc3VsdDtcblx0XHRpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoSURCX1NUT1JFKSkgZGIuY3JlYXRlT2JqZWN0U3RvcmUoSURCX1NUT1JFKTtcblx0fTtcblx0cmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCk7XG5cdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIG9wZW4gZmFpbGVkXCIpKTtcbn0pO1xudmFyIGlkYlB1dFdhbGxwYXBlciA9IGFzeW5jIChibG9iKSA9PiB7XG5cdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihJREJfU1RPUkUsIFwicmVhZHdyaXRlXCIpO1xuXHRcdFx0dHgub2JqZWN0U3RvcmUoSURCX1NUT1JFKS5wdXQoYmxvYiwgSURCX0tFWSk7XG5cdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0dHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIHB1dCBmYWlsZWRcIikpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRiLmNsb3NlKCk7XG5cdH1cbn07XG52YXIgaWRiR2V0V2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBkYiA9IGF3YWl0IG9wZW5XYWxscGFwZXJEYigpO1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCByZXEgPSBkYi50cmFuc2FjdGlvbihJREJfU1RPUkUsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoSURCX1NUT1JFKS5nZXQoSURCX0tFWSk7XG5cdFx0XHRyZXEub25zdWNjZXNzID0gKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2ID0gcmVxLnJlc3VsdDtcblx0XHRcdFx0cmVzb2x2ZSh2IGluc3RhbmNlb2YgQmxvYiA/IHYgOiBudWxsKTtcblx0XHRcdH07XG5cdFx0XHRyZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcIklEQiBnZXQgZmFpbGVkXCIpKTtcblx0XHR9KTtcblx0fSBmaW5hbGx5IHtcblx0XHRkYi5jbG9zZSgpO1xuXHR9XG59O1xudmFyIGlkYkNsZWFyV2FsbHBhcGVyID0gYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihJREJfU1RPUkUsIFwicmVhZHdyaXRlXCIpO1xuXHRcdFx0XHR0eC5vYmplY3RTdG9yZShJREJfU1RPUkUpLmRlbGV0ZShJREJfS0VZKTtcblx0XHRcdFx0dHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcblx0XHRcdFx0dHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIGRlbGV0ZSBmYWlsZWRcIikpO1xuXHRcdFx0fSk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGRiLmNsb3NlKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xudmFyIHJlYWRTdG9yYWdlUG9pbnRlciA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSk7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRyaW0oKSA/IHZhbHVlLnRyaW0oKSA6IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxufTtcbnZhciB3cml0ZVN0b3JhZ2VQb2ludGVyID0gKHZhbHVlKSA9PiB7XG5cdGlmICh2YWx1ZS5zdGFydHNXaXRoKFwiYmxvYjpcIikpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXQUxMUEFQRVJfU1RPUkFHRV9LRVksIHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlc3RvcmVXYWxscGFwZXJCbG9iVXJsID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAobGl2ZU9iamVjdFVybCkgcmV0dXJuIGxpdmVPYmplY3RVcmw7XG5cdGNvbnN0IGVwb2NoID0gd2FsbHBhcGVyRXBvY2g7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGlkYkdldFdhbGxwYXBlcigpO1xuXHRcdGlmICghYmxvYikgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIGFkb3B0V2FsbHBhcGVyQmxvYihibG9iLCBlcG9jaCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSB3YWxscGFwZXIgSURCIHJlc3RvcmUgZmFpbGVkXCIsIGVycik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgaXNJbmxpbmVQYXlsb2FkID0gKHVybCkgPT4gdXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSB8fCB1cmwuc3RhcnRzV2l0aChcImJsb2I6XCIpO1xudmFyIHJlc29sdmVBcHBXYWxscGFwZXJVcmwgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBvaW50ZXIgPSByZWFkU3RvcmFnZVBvaW50ZXIoKTtcblx0aWYgKGlzSWRiUG9pbnRlcihwb2ludGVyKSB8fCBpc1VudXNhYmxlU3RvcmVkVXJsKHBvaW50ZXIpKSB7XG5cdFx0Y29uc3QgdXJsID0gYXdhaXQgcmVzdG9yZVdhbGxwYXBlckJsb2JVcmwoKTtcblx0XHRpZiAodXJsKSB7XG5cdFx0XHRpZiAoIWlzSWRiUG9pbnRlcihwb2ludGVyKSkgd3JpdGVTdG9yYWdlUG9pbnRlcihXQUxMUEFQRVJfSURCX01BUktFUik7XG5cdFx0XHRyZXR1cm4gdXJsO1xuXHRcdH1cblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG5cdHJldHVybiBwb2ludGVyIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcbn07XG52YXIgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIgPSAoKSA9PiByZWFkU3RvcmFnZVBvaW50ZXIoKTtcbnZhciBzeW5jQ2FudmFzT3JpZW50ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBhcHBseSA9ICgpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSAhPT0gcykgY2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGlmIChjYW52YXMuZ2V0QXR0cmlidXRlKFwib3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5vcmllbnQgPSBuO1xuXHR9O1xuXHRhcHBseSgpO1xuXHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoYXBwbHkpO1xufTtcbnZhciBzeW5jQXBwV2FsbHBhcGVyT3JpZW50ID0gKCkgPT4ge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXNbaXM9XFxcInVpLWNhbnZhc1xcXCJdLCBbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhcy51aS1jYW52YXNcIikuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y29uc3QgbiA9IGN1cnJlbnRPcmllbnROdW1iZXIoKTtcblx0XHRjb25zdCBzID0gU3RyaW5nKG4pO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBzKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIHMpO1xuXHR9KTtcbn07XG52YXIgcmVmcmVzaEFwcFdhbGxwYXBlclBhaW50ID0gKCkgPT4ge1xuXHRyZXNvbHZlQXBwV2FsbHBhcGVyVXJsKCkudGhlbigodXJsKSA9PiB7XG5cdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHVybCk7XG5cdFx0c3luY0FwcFdhbGxwYXBlck9yaWVudCgpO1xuXHR9KTtcbn07XG52YXIgc3luY0dsb3dUb1RoZW1lID0gKGdsb3cpID0+IHtcblx0Z2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCItLWNvbG9yLXByaW1hcnlcIikudHJpbSgpO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG59O1xudmFyIHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyA9IChwYWludFVybCkgPT4ge1xuXHRjb25zdCBjYW52YXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKTtcblx0Y29uc3Qgb3JpZW50ID0gU3RyaW5nKGN1cnJlbnRPcmllbnROdW1iZXIoKSk7XG5cdGNhbnZhc2VzLmZvckVhY2goKGNhbnZhcykgPT4ge1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBwYWludFVybCk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBvcmllbnQpO1xuXHRcdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50XCIsIG9yaWVudCk7XG5cdH0pO1xufTtcbnZhciBkYXRhVXJsVG9CbG9iID0gYXN5bmMgKGRhdGFVcmwpID0+IHtcblx0cmV0dXJuIChhd2FpdCBmZXRjaChkYXRhVXJsKSkuYmxvYigpO1xufTtcbnZhciBzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiA9IGFzeW5jIChibG9iKSA9PiB7XG5cdGlmICghKGJsb2IgaW5zdGFuY2VvZiBCbG9iKSB8fCBibG9iLnNpemUgPD0gMCkge1xuXHRcdHNldEFwcFdhbGxwYXBlcihERUZBVUxUX1dBTExQQVBFUl9VUkwpO1xuXHRcdHJldHVybiBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdH1cblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRsaXZlT2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKGxpdmVPYmplY3RVcmwpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcihibG9iLCB7IGZvcmNlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWNhbnZhc19fZ2xvd1wiKS5mb3JFYWNoKHN5bmNHbG93VG9UaGVtZSk7XG5cdH0pO1xuXHR0cnkge1xuXHRcdGF3YWl0IGlkYlB1dFdhbGxwYXBlcihibG9iKTtcblx0XHR3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcGVyc2lzdCBmYWlsZWRcIiwgZXJyKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdGNvbnN0IGRhdGFVcmwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKFN0cmluZyhyZWFkZXIucmVzdWx0IHx8IFwiXCIpKTtcblx0XHRcdFx0cmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVhZGVyLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJyZWFkIGZhaWxlZFwiKSk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoZGF0YVVybCAmJiAhd3JpdGVTdG9yYWdlUG9pbnRlcihkYXRhVXJsKSkgY29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBsb2NhbFN0b3JhZ2UgcGVyc2lzdCBhbHNvIGZhaWxlZCAocXVvdGE/KVwiKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IFdBTExQQVBFUl9JREJfTUFSS0VSLFxuXHRcdFx0dXJsOiBsaXZlT2JqZWN0VXJsXG5cdFx0fSB9KSk7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIGxpdmVPYmplY3RVcmw7XG59O1xudmFyIGluaXRpYWxpemVBcHBDYW52YXNMYXllciA9IChjb250YWluZXIpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGNvbnRhaW5lcjtcblx0cm9vdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblx0cm9vdC5kYXRhc2V0LmFwcExheWVyID0gXCJjYW52YXNcIjtcblx0cm9vdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0cm9vdC5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRyb290LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG5cdHJvb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXHRjb25zdCBnbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Z2xvdy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2dsb3dcIjtcblx0Z2xvdy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Z2xvdy5zdHlsZS5pbnNldCA9IFwiLTIwJVwiO1xuXHRnbG93LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHsgaXM6IFwidWktY2FudmFzXCIgfSk7XG5cdGNhbnZhcy5jbGFzc05hbWUgPSBcImFwcC1jYW52YXNfX2ltYWdlIHVpLWNhbnZhc1wiO1xuXHRjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdGNhbnZhcy5zdHlsZS5pbnNldCA9IFwiMFwiO1xuXHRjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRjYW52YXMuc3R5bGUuaW5saW5lU2l6ZSA9IFwiMTAwJVwiO1xuXHRjYW52YXMuc3R5bGUuYmxvY2tTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhJbmxpbmVTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5tYXhCbG9ja1NpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0Y2FudmFzLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwibm9ybWFsXCI7XG5cdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpc1wiLCBcInVpLWNhbnZhc1wiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiZHluYW1pYy1yYW5nZS1saW1pdFwiLCBcIm5vLWxpbWl0XCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvci1zcGFjZVwiLCBcImRpc3BsYXktcDNcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImltcG9ydGFudFwiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIiwgXCJpbXBvcnRhbnRcIik7XG5cdHJvb3QuYXBwZW5kKGdsb3csIGNhbnZhcyk7XG5cdGNvbnN0IHBvaW50ZXIgPSByZWFkU3RvcmFnZVBvaW50ZXIoKTtcblx0Y29uc3QgY29sZFVybCA9IGlzSWRiUG9pbnRlcihwb2ludGVyKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSA/IERFRkFVTFRfV0FMTFBBUEVSX1VSTCA6IHBvaW50ZXI7XG5cdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCBjb2xkVXJsKTtcblx0Y29uc3QgZGlzcG9zZU9yaWVudCA9IHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0cmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUoKTtcblx0c3luY0dsb3dUb1RoZW1lKGdsb3cpO1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IHdhbGxwYXBlciA9IGF3YWl0IHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIiwgd2FsbHBhcGVyKTtcblx0XHRzeW5jQ2FudmFzT3JpZW50KGNhbnZhcyk7XG5cdFx0Y29uc3QgdGhlbWVTcmMgPSB3YWxscGFwZXIuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCkgfHwgd2FsbHBhcGVyIDogd2FsbHBhcGVyO1xuXHRcdGF3YWl0IGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKHRoZW1lU3JjKTtcblx0XHRzeW5jR2xvd1RvVGhlbWUoZ2xvdyk7XG5cdH0pKCk7XG5cdHJldHVybiB7XG5cdFx0cm9vdCxcblx0XHRjYW52YXMsXG5cdFx0Z2xvdyxcblx0XHRkaXNwb3NlT3JpZW50XG5cdH07XG59O1xudmFyIHNldEFwcFdhbGxwYXBlciA9ICh3YWxscGFwZXJVcmwpID0+IHtcblx0Y29uc3QgdmFsdWUgPSBTdHJpbmcod2FsbHBhcGVyVXJsIHx8IFwiXCIpLnRyaW0oKSB8fCBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdGlmIChpc0lubGluZVBheWxvYWQodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IExPQ0FMX1NUT1JBR0VfU0FGRV9DSEFSUykge1xuXHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBibG9iID0gdmFsdWUuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gYXdhaXQgKGF3YWl0IGZldGNoKHZhbHVlKSkuYmxvYigpIDogYXdhaXQgZGF0YVVybFRvQmxvYih2YWx1ZSk7XG5cdFx0XHRcdGF3YWl0IHNldEFwcFdhbGxwYXBlckZyb21CbG9iKGJsb2IpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIltmZXN0L2ltYWdlXSBzZXRBcHBXYWxscGFwZXIgaW5saW5lIHBlcnNpc3QgZmFpbGVkXCIsIGVycik7XG5cdFx0XHRcdGNvbnN0IGZhbGxiYWNrID0gdmFsdWUuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gREVGQVVMVF9XQUxMUEFQRVJfVVJMIDogdmFsdWU7XG5cdFx0XHRcdHBhaW50V2FsbHBhcGVyT25DYW52YXNlcyhmYWxsYmFjayk7XG5cdFx0XHRcdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKGZhbGxiYWNrLCB7IGZvcmNlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWNhbnZhc19fZ2xvd1wiKS5mb3JFYWNoKHN5bmNHbG93VG9UaGVtZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlkYkNsZWFyV2FsbHBhcGVyKCk7XG5cdHJldm9rZUxpdmVPYmplY3RVcmwoKTtcblx0aWYgKCF3cml0ZVN0b3JhZ2VQb2ludGVyKHZhbHVlKSkgY29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBwb2ludGVyIHdyaXRlIGZhaWxlZFwiKTtcblx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKHZhbHVlKTtcblx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIodmFsdWUsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0Z2xvYmFsVGhpcy5kaXNwYXRjaEV2ZW50Py4obmV3IEN1c3RvbUV2ZW50KFwiY3dzcC13YWxscGFwZXItY2hhbmdlXCIsIHsgZGV0YWlsOiB7XG5cdFx0XHRwb2ludGVyOiB2YWx1ZSxcblx0XHRcdHVybDogdmFsdWVcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxufTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBVSUNhbnZhcywgV0FMTFBBUEVSX0lEQl9NQVJLRVIsIFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZLCBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVksIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyLCBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEsIGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMsIGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcywgYmluZENhY2hlLCBjYWxsQnlGcmFtZSwgY292ZXIsIGNyZWF0ZUltYWdlQml0bWFwQ2FjaGUsIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEsIGVsZWN0cm9uQVBJLCBnZXREb21pbmFudENvbG9ycywgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIsIGluaXRpYWxpemVBcHBDYW52YXNMYXllciwgbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lLCBxdWFsaXR5TW9kZSwgcmFua1dhbGxwYXBlclNlZWRzLCByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQsIHJlc29sdmVBcHBXYWxscGFwZXJVcmwsIHJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlLCBzZXRBcHBXYWxscGFwZXIsIHNldEFwcFdhbGxwYXBlckZyb21CbG9iLCBzeW5jQXBwV2FsbHBhcGVyT3JpZW50LCBzeW5jQ2FudmFzT3JpZW50LCB0aGVtZUhvc3RzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyx5QkFBQUEsSUFBdUIsZ0JBQUFDLElBQWMsd0JBQUFDLElBQXNCLHdCQUFBQyxVQUE0QjtBQUdoRyxJQUFJQyxLQUFjLGtCQUNkQyxLQUFjLEVBQUUsTUFBUTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFDWCxFQUFFLEdBSUVDLEtBQWMsQ0FBQ0MsR0FBT0MsTUFBUTtBQUNqQyxNQUFJLE9BQU9ELEtBQVUsVUFDckI7QUFBQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsSUFBSSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzFDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxJQUFRLE9BQU87QUFBQSxNQUNyQyxJQUFJQSxJQUFRLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsSUFDdEM7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzNDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQzFDLElBQUlBLEtBQVMsSUFBSSxLQUFLQSxJQUFRLE9BQU87QUFBQSxNQUNyQyxRQUFRQSxJQUFRLEtBQUtBLEtBQVMsSUFBSSxPQUFPO0FBQUEsSUFDMUM7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUN4QixJQUFJQSxJQUFRLE9BQU87QUFBQSxJQUNwQjtBQUNBLFFBQUlDLE1BQVEsRUFBRyxRQUFPO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sSUFBSUQsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDeEIsUUFBUUEsSUFBUSxPQUFPO0FBQUEsSUFDeEI7QUFBQTtBQUNELEdBSUlFLEtBQVE7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLHNCQUFzQjtBQUFBLEVBQ3RCLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLG1CQUFtQjtBQUFBLEVB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LE1BQ25DLFNBQVNxRixHQUFLO0FBQ2IsZ0JBQVEsS0FBSyxzREFBc0RBLENBQUc7QUFDdEUsY0FBTTFELElBQVd4YixFQUFNLFdBQVcsT0FBTyxJQUFJK2hCLElBQXdCL2hCO0FBQ3JFLFFBQUFra0IsR0FBeUIxSSxDQUFRLEdBQ2pDc0QsR0FBd0J0RCxHQUFVLEVBQUUsT0FBTyxHQUFLLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDN0QsbUJBQVMsaUJBQWlCLG1CQUFtQixFQUFFLFFBQVEySSxFQUFlO0FBQUEsUUFDdkUsQ0FBQztBQUFBLE1BQ0Y7QUFBQSxJQUNELEdBQUc7QUFDSDtBQUFBLEVBQ0Q7QUFDQSxFQUFBYixHQUFrQixHQUNsQlgsR0FBb0IsR0FDZmEsR0FBb0J4akIsQ0FBSyxLQUFHLFFBQVEsS0FBSyw2Q0FBNkMsR0FDM0Zra0IsR0FBeUJsa0IsQ0FBSyxHQUM5QjhlLEdBQXdCOWUsR0FBTyxFQUFFLE9BQU8sR0FBSyxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzFELGFBQVMsaUJBQWlCLG1CQUFtQixFQUFFLFFBQVFta0IsRUFBZTtBQUFBLEVBQ3ZFLENBQUM7QUFDRCxNQUFJO0FBQ0gsZUFBVyxnQkFBZ0IsSUFBSSxZQUFZLHlCQUF5QixFQUFFLFFBQVE7QUFBQSxNQUM3RSxTQUFTbmtCO0FBQUEsTUFDVCxLQUFLQTtBQUFBLElBQ04sRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUFDO0FBQ1Y7IiwKICAibmFtZXMiOiBbImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJtYWtlUkFGQ3ljbGUiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAiZWxlY3Ryb25BUEkiLCAicXVhbGl0eU1vZGUiLCAicGFyc2VOdW1iZXIiLCAiY29sb3IiLCAibGVuIiwgIm5hbWVkIiwgInBhcnNlTmFtZWQiLCAiaGV4IiwgInBhcnNlSGV4IiwgIm1hdGNoIiwgIm51bSQxIiwgIm51bV9ub25lIiwgInBlciIsICJwZXJfbm9uZSIsICJudW1fcGVyIiwgIm51bV9wZXJfbm9uZSIsICJodWUkMSIsICJodWVfbm9uZSIsICJjIiwgInJ4X251bV9wZXJfbm9uZSIsICJyZ2JfbnVtX29sZCIsICJyZ2JfcGVyX29sZCIsICJwYXJzZVJnYkxlZ2FjeSIsICJyZXMiLCAicHJlcGFyZSIsICJtb2RlIiwgInBhcnNlIiwgImNvbnZlcnRlciIsICJ0YXJnZXRfbW9kZSIsICJjb252ZXJ0ZXJzIiwgIm1vZGVzIiwgInBhcnNlcnMiLCAiY29sb3JQcm9maWxlcyIsICJpZGVudGl0eSIsICJ2IiwgInVzZU1vZGUiLCAiZGVmaW5pdGlvbiIsICJrIiwgImNoYW5uZWwiLCAicGFyc2VyIiwgInVzZVBhcnNlciIsICJnZXRNb2RlIiwgIklkZW50U3RhcnRDb2RlUG9pbnQiLCAiSWRlbnRDb2RlUG9pbnQiLCAiVG9rIiwgIl9pIiwgImlzX251bSIsICJjaGFycyIsICJjaCIsICJjaDEiLCAiaXNfaWRlbnQiLCAiaHVlbml0cyIsICJudW0iLCAidmFsdWUiLCAiZGlnaXRzIiwgImlkIiwgImlkZW50IiwgImlkZW50bGlrZSIsICJ0b2tlbml6ZSIsICJzdHIiLCAidG9rZW5zIiwgImFscGhhIiwgInBhcnNlQ29sb3JTeW50YXgiLCAidG9rZW4iLCAiY29vcmRzIiwgImNvbnN1bWVDb29yZHMiLCAiY2hhbm5lbHMiLCAiaWkiLCAiaW5jbHVkZUh1ZSIsICJwYXJzZU1vZGVyblN5bnRheCIsICJwYXJzZWQiLCAicmVzdWx0IiwgInBhcnNlUmdiIiwgInIiLCAiZyIsICJiIiwgInBhcnNlVHJhbnNwYXJlbnQiLCAibGVycCIsICJhIiwgInQiLCAiZ2V0X2NsYXNzZXMiLCAiYXJyIiwgImNsYXNzZXMiLCAiaSIsICJpbnRlcnBvbGF0b3JQaWVjZXdpc2UiLCAiaW50ZXJwb2xhdG9yIiwgImNscyIsICJpZHgiLCAicGFpciIsICJpbnRlcnBvbGF0b3JMaW5lYXIiLCAiZml4dXBBbHBoYSIsICJzb21lX2RlZmluZWQiLCAiZGVmaW5pdGlvbiQyNyIsICJsaW5lYXJpemUkMiIsICJjb252ZXJ0QTk4VG9YeXo2NSIsICJhOTgiLCAiZ2FtbWEkMiIsICJjb252ZXJ0WHl6NjVUb0E5OCIsICJ4IiwgInkiLCAieiIsICJmbiQzIiwgImFicyIsICJjb252ZXJ0UmdiVG9McmdiIiwgImNvbnZlcnRSZ2JUb1h5ejY1IiwgInJnYiIsICJmbiQyIiwgImNvbnZlcnRMcmdiVG9SZ2IiLCAiY29udmVydFh5ejY1VG9SZ2IiLCAiZGVmaW5pdGlvbiQyNiIsICJub3JtYWxpemVIdWUiLCAiaHVlIiwgImh1ZXMiLCAiZm4iLCAibm9ybWFsaXplZCIsICJhY2MiLCAiY3VyciIsICJmaXh1cEh1ZVNob3J0ZXIiLCAiZCIsICJNIiwgImRlZ1RvUmFkIiwgInJhZFRvRGVnIiwgIkRFIiwgIkJFIiwgIkJDQUQiLCAiY29udmVydFJnYlRvQ3ViZWhlbGl4IiwgImwiLCAiY29udmVydEN1YmVoZWxpeFRvUmdiIiwgImgiLCAicyIsICJhbXAiLCAiY29zaCIsICJzaW5oIiwgImRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIiwgInN0ZCIsICJzbXAiLCAic3RkX2giLCAic21wX2giLCAiZEgiLCAiZGlmZmVyZW5jZUh1ZU5haXZlIiwgImRpZmZlcmVuY2VIdWVDaHJvbWEiLCAiYXZlcmFnZUFuZ2xlIiwgInZhbCIsICJzdW0iLCAicmFkIiwgImFuZ2xlIiwgImRlZmluaXRpb24kMjUiLCAiY29udmVydExhYlRvTGNoIiwgImNvbnZlcnRMY2hUb0xhYiIsICJrJDIiLCAiZSQyIiwgIkQ1MCIsICJENjUiLCAiayQxIiwgImUkMSIsICJmbiQxIiwgImNvbnZlcnRMYWI2NVRvWHl6NjUiLCAiZnkiLCAiZngiLCAiZnoiLCAiY29udmVydExhYjY1VG9SZ2IiLCAibGFiIiwgImYkMSIsICJjb252ZXJ0WHl6NjVUb0xhYjY1IiwgImYwIiwgImYxIiwgImYyIiwgImNvbnZlcnRSZ2JUb0xhYjY1IiwgIs64IiwgImNvc864IiwgInNpbs64IiwgImZhY3RvciIsICJjb252ZXJ0RGxjaFRvTGFiNjUiLCAiRyIsICJlIiwgImYiLCAiY29udmVydExhYjY1VG9EbGNoIiwgImNvbnZlcnREbGFiVG9MYWI2NSIsICJjb252ZXJ0TGFiNjVUb0RsYWIiLCAiZGVmaW5pdGlvbiQyNCIsICJkZWZpbml0aW9uJDIzIiwgImNvbnZlcnRIc2lUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic2kiLCAibSIsICJkZWZpbml0aW9uJDIyIiwgImNvbnZlcnRIc2xUb1JnYiIsICJtMSIsICJtMiIsICJjb252ZXJ0UmdiVG9Ic2wiLCAiaHVlVG9EZWciLCAidW5pdCIsICJoc2xfb2xkIiwgInBhcnNlSHNsTGVnYWN5IiwgInBhcnNlSHNsIiwgImRlZmluaXRpb24kMjEiLCAiY29udmVydEhzdlRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzdiIsICJkZWZpbml0aW9uJDIwIiwgImNvbnZlcnRId2JUb1JnYiIsICJ3IiwgImNvbnZlcnRSZ2JUb0h3YiIsICJyZ2JhIiwgImhzdiIsICJQYXJzZUh3YiIsICJkZWZpbml0aW9uJDE5IiwgIk0xIiwgIk0yIiwgIkMxIiwgIkMyIiwgIkMzIiwgInRyYW5zZmVyUHFEZWNvZGUiLCAidHJhbnNmZXJQcUVuY29kZSIsICJ0b1JlbCIsICJjb252ZXJ0SXRwVG9YeXo2NSIsICJwIiwgInRvQWJzIiwgImNvbnZlcnRYeXo2NVRvSXRwIiwgImFic1giLCAiYWJzWSIsICJhYnNaIiwgImRlZmluaXRpb24kMTgiLCAicCQxIiwgImQwJDEiLCAiamFiUHFFbmNvZGUiLCAidm4iLCAiY29udmVydFh5ejY1VG9KYWIiLCAieHAiLCAieXAiLCAiZDAiLCAiamFiUHFEZWNvZGUiLCAidnAiLCAicmVsIiwgImNvbnZlcnRKYWJUb1h5ejY1IiwgImoiLCAiY29udmVydFJnYlRvSmFiIiwgImNvbnZlcnRKYWJUb1JnYiIsICJkZWZpbml0aW9uJDE3IiwgImNvbnZlcnRKYWJUb0pjaCIsICJjb252ZXJ0SmNoVG9KYWIiLCAiZGVmaW5pdGlvbiQxNiIsICJjb252ZXJ0TGFiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb1JnYiIsICJjb252ZXJ0TGFiVG9SZ2IiLCAiY29udmVydFJnYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9MYWIiLCAiY29udmVydFJnYlRvTGFiIiwgInBhcnNlTGFiIiwgImRlZmluaXRpb24kMTUiLCAiZGVmaW5pdGlvbiQxNCIsICJwYXJzZUxjaCIsICJkZWZpbml0aW9uJDEzIiwgImRlZmluaXRpb24kMTIiLCAiY29udmVydEx1dlRvTGNodXYiLCAidSIsICJjb252ZXJ0TGNodXZUb0x1diIsICJ1X2ZuJDEiLCAidl9mbiQxIiwgInVuJDEiLCAidm4kMSIsICJsX2ZuIiwgImNvbnZlcnRYeXo1MFRvTHV2IiwgInVfZm4iLCAidl9mbiIsICJ1biIsICJjb252ZXJ0THV2VG9YeXo1MCIsICJ1cCIsICJjb252ZXJ0UmdiVG9MY2h1diIsICJjb252ZXJ0TGNodXZUb1JnYiIsICJsY2h1diIsICJkZWZpbml0aW9uJDExIiwgImRlZmluaXRpb24kMTAiLCAiZGVmaW5pdGlvbiQ5IiwgImx1diIsICJjb252ZXJ0THJnYlRvT2tsYWIiLCAiTCIsICJTIiwgImNvbnZlcnRSZ2JUb09rbGFiIiwgImNvbnZlcnRPa2xhYlRvTHJnYiIsICJjb252ZXJ0T2tsYWJUb1JnYiIsICJ0b2UiLCAia18zIiwgInRvZV9pbnYiLCAiY29tcHV0ZV9tYXhfc2F0dXJhdGlvbiIsICJrMCIsICJrMSIsICJrMiIsICJrMyIsICJrNCIsICJ3bCIsICJ3bSIsICJ3cyIsICJrX2wiLCAia19tIiwgImtfcyIsICJsXyIsICJtXyIsICJzXyIsICJsX2RTIiwgIm1fZFMiLCAic19kUyIsICJsX2RTMiIsICJtX2RTMiIsICJzX2RTMiIsICJmaW5kX2N1c3AiLCAiU19jdXNwIiwgIkxfY3VzcCIsICJmaW5kX2dhbXV0X2ludGVyc2VjdGlvbiIsICJMMSIsICJMMCIsICJjdXNwIiwgImRMIiwgImRDIiwgImxfZHQiLCAibV9kdCIsICJzX2R0IiwgIkMiLCAibGR0IiwgIm1kdCIsICJzZHQiLCAibGR0MiIsICJtZHQyIiwgInNkdDIiLCAicjEiLCAicjIiLCAidV9yIiwgInRfciIsICJnMSIsICJnMiIsICJ1X2ciLCAidF9nIiwgImIxIiwgImIyIiwgInVfYiIsICJ0X2IiLCAiZ2V0X1NUX21heCIsICJhXyIsICJiXyIsICJnZXRfQ3MiLCAiQ19tYXgiLCAiU1RfbWF4IiwgIlNfbWlkIiwgIlRfbWlkIiwgIkNfYSIsICJDX2IiLCAiQ19taWQiLCAiY29udmVydE9rbGFiVG9Pa2hzbCIsICJyZXQiLCAiQ18wIiwgImtfMCIsICJrXzEiLCAia18yIiwgImNvbnZlcnRPa2hzbFRvT2tsYWIiLCAiaHNsIiwgIm1vZGVPa2hzbCIsICJjb252ZXJ0T2tsYWJUb09raHN2IiwgIlNfbWF4IiwgIlQiLCAiU18wIiwgIkxfdiIsICJDX3YiLCAiTF92dCIsICJDX3Z0IiwgInJnYl9zY2FsZSIsICJzY2FsZV9MIiwgImNvbnZlcnRPa2hzdlRvT2tsYWIiLCAiTF9uZXciLCAibW9kZU9raHN2IiwgInBhcnNlT2tsYWIiLCAiZGVmaW5pdGlvbiQ4IiwgInBhcnNlT2tsY2giLCAiZGVmaW5pdGlvbiQ3IiwgImNvbnZlcnRQM1RvWHl6NjUiLCAiY29udmVydFh5ejY1VG9QMyIsICJkZWZpbml0aW9uJDYiLCAiZ2FtbWEkMSIsICJjb252ZXJ0WHl6NTBUb1Byb3Bob3RvIiwgImxpbmVhcml6ZSQxIiwgImNvbnZlcnRQcm9waG90b1RvWHl6NTAiLCAicHJvcGhvdG8iLCAiZGVmaW5pdGlvbiQ1IiwgIs6xJDEiLCAizrIkMSIsICJnYW1tYSIsICJjb252ZXJ0WHl6NjVUb1JlYzIwMjAiLCAizrEiLCAizrIiLCAibGluZWFyaXplIiwgImNvbnZlcnRSZWMyMDIwVG9YeXo2NSIsICJyZWMyMDIwIiwgImRlZmluaXRpb24kNCIsICJiaWFzIiwgImJpYXNfY2JydCIsICJ0cmFuc2ZlciQxIiwgImNvbnZlcnRSZ2JUb1h5YiIsICJ0cmFuc2ZlciIsICJjb252ZXJ0WHliVG9SZ2IiLCAiZGVmaW5pdGlvbiQzIiwgImRlZmluaXRpb24kMiIsICJjb252ZXJ0WHl6NjVUb1h5ejUwIiwgInh5ejY1IiwgImNvbnZlcnRYeXo1MFRvWHl6NjUiLCAieHl6NTAiLCAiZGVmaW5pdGlvbiQxIiwgImNvbnZlcnRSZ2JUb1lpcSIsICJjb252ZXJ0WWlxVG9SZ2IiLCAicSIsICJwcmVjaXNpb24iLCAicm91bmQiLCAidHdvRGVjaW1hbHMiLCAiY2xhbXAkMSIsICJmaXh1cCIsICJyZ2IkMSIsICJoc2wkMSIsICJzZXJpYWxpemVIZXgiLCAiZm9ybWF0SGV4IiwgImN1YmVoZWxpeCIsICJkbGFiIiwgImRsY2giLCAiaHNpIiwgImh3YiIsICJpdHAiLCAiamFiIiwgImpjaCIsICJsYWI2NSIsICJsY2giLCAibGNoNjUiLCAibHJnYiIsICJva2hzbCIsICJva2hzdiIsICJva2xhYiIsICJva2xjaCIsICJwMyIsICJ4eWIiLCAieWlxIiwgInNvcnRDb2xvcnMiLCAibGlzdCIsICJjcml0ZXJpYSIsICJldWNsaWRlYW5EaXN0YW5jZSIsICJjb2xvcjEiLCAiY29sb3IyIiwgIm1ha2VDbHVzdGVycyIsICJkYXRhIiwgImNlbnRyb2lkcyIsICJjbHVzdGVycyIsICJwb2ludCIsICJtaW5EaXN0YW5jZSIsICJtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCIsICJjZW50cm9pZCIsICJpbmRleCIsICJkaXN0YW5jZSIsICJjb21wdXRlTWVhbiIsICJwb2ludHMiLCAia01lYW5zIiwgImluaXRpYWxpemVDZW50cm9pZHMiLCAibWF4SXRlcmF0aW9ucyIsICJpdGVyYXRpb24iLCAibmV3Q2VudHJvaWRzIiwgImNsdXN0ZXIiLCAibmV3Q2VudHJvaWQiLCAiZGlzdGFuY2VzIiwgInRvdGFsRGlzdGFuY2UiLCAicHJvYmFiaWxpdGllcyIsICJjdW11bGF0aXZlUHJvYmFiaWxpdHkiLCAicmFuZG9tVmFsdWUiLCAicHJlQmx1clBpeGVscyIsICJpbWdVUkwiLCAiYmxvYiIsICJiaXRtYXAiLCAib2Zmc2V0IiwgImN0eCIsICJnZXRDbHVzdGVySW1hZ2VEYXRhIiwgImFsbENvdW50IiwgImR2IiwgImZwMzIiLCAiaTQiLCAiZ2V0RG9taW5hbnRDb2xvcnMiLCAiV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVkiLCAiVEhFTUVfU1RPUkFHRV9LRVkiLCAiUFJJTUFSWV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfVVJMX0tFWSIsICJQQVBFUl9MX1NQTElUIiwgIlBBUEVSX0NIUk9NQV9DQVAiLCAiRkFMTEJBQ0tfUEFQRVIiLCAibGFzdExpdmVQYXBlciIsICJVU0FCTEVfTFVNQV9NSU4iLCAiU0VFRF9QUk9QUyIsICJjbGFtcCIsICJuIiwgImxvIiwgImhpIiwgImhleE9rbGNoIiwgImZhbGxiYWNrIiwgInJnYlRvU2FtcGxlIiwgIm9rIiwgInBhcGVyTEZyb21IZXgiLCAiaGFsb0ZvclBhcGVyIiwgImRhcmtQYXBlciIsICJpc1VzYWJsZVBhcGVyTHVtYSIsICJsdW1hIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMiLCAic2FtcGxlcyIsICJwaXhlbEx1bWEiLCAibHMiLCAibWVhbkwiLCAibWVkaWFuTCIsICJwYXBlckwiLCAicGFwZXIiLCAicGFwZXJDIiwgInNhbXBsZUltYWdlTWVhbkx1bWEiLCAiY2FudmFzIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEiLCAiaGFzV2FsbHBhcGVyUGFwZXIiLCAic2VlZHMiLCAicmFua1dhbGxwYXBlclNlZWRzIiwgImFjY2VudFBvb2wiLCAicG9vbCIsICJwcmltYXJ5IiwgImh1ZURpc3QiLCAicGlja05leHQiLCAidXNlZCIsICJyZXN0IiwgImJhc2UiLCAibnVkZ2VkIiwgInNlY29uZGFyeSIsICJ0ZXJ0aWFyeSIsICJ0aGVtZUhvc3RzIiwgIm5vZGVzIiwgImVsIiwgIndhbGxwYXBlclNlZWRzTWF5UGFpbnQiLCAic3JjIiwgImFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMiLCAiZXh0cmFIb3N0cyIsICJzaGFkb3ciLCAiZ2xvdyIsICJob3N0cyIsICJob3N0IiwgInBlcnNpc3RMaXZlUGFwZXIiLCAiY2FjaGVkIiwgImxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSIsICJhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEiLCAiYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzIiwgIm5leHQiLCAicHJvcCIsICJrZXkiLCAicmF3IiwgImFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIiwgIm9wdHMiLCAic3JjS2V5IiwgImxpdmVMdW1hIiwgImVyciIsICJyZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSIsICJibG9iSW1hZ2VNYXAiLCAiZGVsYXllZCIsICJzaGVkdWxlciIsICJmYWlsZWRXYWxscGFwZXJTcmMiLCAiZ2V0SW1nV2lkdGgiLCAiaW1nIiwgImdldEltZ0hlaWdodCIsICJjcmVhdGUyZENvbnRleHQiLCAiY29sb3JTcGFjZSIsICJjYWxsQnlGcmFtZSIsICJwb2ludGVySWQiLCAiY2IiLCAiY292ZXIiLCAic2NhbGUiLCAicG9ydCIsICJvcmllbnQiLCAiY3JlYXRlSW1hZ2VCaXRtYXBDYWNoZSIsICJwZW5kaW5nIiwgImJpbmRDYWNoZVN5bWJvbCIsICJiaW5kQ2FjaGUiLCAiYmluZENhY2hlZCIsICJib3VuZCIsICJVSUNhbnZhcyIsICIjc2l6ZSIsICIjbG9hZGluZyIsICIjcmVhZHkiLCAiI29yaWVudCIsICJuYW1lIiwgIl8iLCAibmV3VmFsdWUiLCAiI3ByZWxvYWQiLCAiI3JlbmRlciIsICJwYXJlbnQiLCAiZml4U2l6ZSIsICJvbGQiLCAiZW50cmllcyIsICJlbnRyeSIsICJib3giLCAicmVhZHkiLCAid2hhdElzUmVhZHkiLCAib3giLCAicnNwIiwgIldBTExQQVBFUl9TVE9SQUdFX0tFWSIsICJERUZBVUxUX1dBTExQQVBFUl9VUkwiLCAiV0FMTFBBUEVSX0lEQl9NQVJLRVIiLCAiSURCX05BTUUiLCAiSURCX1NUT1JFIiwgIklEQl9LRVkiLCAiTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTIiwgImxpdmVPYmplY3RVcmwiLCAid2FsbHBhcGVyRXBvY2giLCAiY3VycmVudE9yaWVudE51bWJlciIsICJpc0lkYlBvaW50ZXIiLCAicG9pbnRlciIsICJpc1VudXNhYmxlU3RvcmVkVXJsIiwgInJldm9rZUxpdmVPYmplY3RVcmwiLCAiYWRvcHRXYWxscGFwZXJCbG9iIiwgImVwb2NoIiwgIm9wZW5XYWxscGFwZXJEYiIsICJyZXNvbHZlIiwgInJlamVjdCIsICJyZXEiLCAiZGIiLCAiaWRiUHV0V2FsbHBhcGVyIiwgInR4IiwgImlkYkdldFdhbGxwYXBlciIsICJpZGJDbGVhcldhbGxwYXBlciIsICJyZWFkU3RvcmFnZVBvaW50ZXIiLCAid3JpdGVTdG9yYWdlUG9pbnRlciIsICJyZXN0b3JlV2FsbHBhcGVyQmxvYlVybCIsICJpc0lubGluZVBheWxvYWQiLCAidXJsIiwgInJlc29sdmVBcHBXYWxscGFwZXJVcmwiLCAiZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIiLCAic3luY0NhbnZhc09yaWVudCIsICJhcHBseSIsICJzeW5jQXBwV2FsbHBhcGVyT3JpZW50IiwgInJlZnJlc2hBcHBXYWxscGFwZXJQYWludCIsICJwYWludFdhbGxwYXBlck9uQ2FudmFzZXMiLCAic3luY0dsb3dUb1RoZW1lIiwgInBhaW50VXJsIiwgImNhbnZhc2VzIiwgImRhdGFVcmxUb0Jsb2IiLCAiZGF0YVVybCIsICJzZXRBcHBXYWxscGFwZXJGcm9tQmxvYiIsICJzZXRBcHBXYWxscGFwZXIiLCAicmVhZGVyIiwgImluaXRpYWxpemVBcHBDYW52YXNMYXllciIsICJjb250YWluZXIiLCAicm9vdCIsICJjb2xkVXJsIiwgImRpc3Bvc2VPcmllbnQiLCAid2FsbHBhcGVyIiwgInRoZW1lU3JjIiwgIndhbGxwYXBlclVybCJdCn0K
