import { Q as Pr } from "@fest-lib/lure";
import { setStyleProperty as T } from "@fest-lib/style-lib";
import { getCorrectOrientation as pa, makeRAFCycle as ma, orientationNumberMap as ga, whenAnyScreenChanges as ba } from "@fest-lib/dom";
var rn = "electronBridge", an = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, zr = (e, t) => {
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
}, ya = {
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
}, Ma = (e) => zr(ya[e.toLowerCase()], 6), wa = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, xa = (e) => {
  let t;
  return (t = e.match(wa)) ? zr(parseInt(t[1], 16), t[1].length) : void 0;
}, S = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", on = `(?:${S}|none)`, ne = `${S}%`, nn = `(?:${S}%|none)`, zt = `(?:${S}%|${S})`, ka = `(?:${S}%|${S}|none)`, _a = `(?:${S}(deg|grad|rad|turn)|${S})`, ln = `(?:${S}(deg|grad|rad|turn)|${S}|none)`, Y = "\\s*,\\s*", sn = new RegExp("^" + ka + "$"), Pa = new RegExp(`^rgba?\\(\\s*${S}${Y}${S}${Y}${S}\\s*(?:,\\s*${zt}\\s*)?\\)$`), za = new RegExp(`^rgba?\\(\\s*${ne}${Y}${ne}${Y}${ne}\\s*(?:,\\s*${zt}\\s*)?\\)$`), $a = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(Pa))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(za))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, Sa = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Cr(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, $t = (e = "rgb") => (t) => (t = Sa(t, e)) !== void 0 ? t.mode === e ? t : C[t.mode][e] ? C[t.mode][e](t) : e === "rgb" ? C[t.mode].rgb(t) : C.rgb[e](C[t.mode].rgb(t)) : void 0, C = {}, $r = {}, ye = [], Sr = {}, Ta = (e) => e, g = (e) => (C[e.mode] = {
  ...C[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  C[t] || (C[t] = {}), C[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Ta);
}), $r[e.mode] = e, (e.parse || []).forEach((t) => {
  Aa(t, e.mode);
}), $t(e.mode)), Ca = (e) => $r[e], Aa = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    Sr[e] = t;
  } else typeof e == "function" && ye.indexOf(e) < 0 && ye.push(e);
}, pt = /[^\x00-\x7F]|[a-zA-Z_]/, Ia = /[^\x00-\x7F]|[-\w]/, s = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, f = 0;
function ue(e) {
  let t = e[f], r = e[f + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[f + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function mt(e) {
  if (f >= e.length) return !1;
  let t = e[f];
  if (pt.test(t)) return !0;
  if (t === "-") {
    if (e.length - f < 2) return !1;
    let r = e[f + 1];
    return !!(r === "-" || pt.test(r));
  }
  return !1;
}
var Ea = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ae(e) {
  let t = "";
  if ((e[f] === "-" || e[f] === "+") && (t += e[f++]), t += fe(e), e[f] === "." && /\d/.test(e[f + 1]) && (t += e[f++] + fe(e)), (e[f] === "e" || e[f] === "E") && ((e[f + 1] === "-" || e[f + 1] === "+") && /\d/.test(e[f + 2]) ? t += e[f++] + e[f++] + fe(e) : /\d/.test(e[f + 1]) && (t += e[f++] + fe(e))), mt(e)) {
    let r = Me(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: s.Hue,
      value: t * Ea[r]
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
function fe(e) {
  let t = "";
  for (; /\d/.test(e[f]); ) t += e[f++];
  return t;
}
function Me(e) {
  let t = "";
  for (; f < e.length && Ia.test(e[f]); ) t += e[f++];
  return t;
}
function Na(e) {
  let t = Me(e);
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
function Ra(e = "") {
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
      if (f--, ue(t)) {
        r.push(ae(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (f--, ue(t)) {
        r.push(ae(t));
        continue;
      }
      if (mt(t)) {
        r.push({
          type: s.Ident,
          value: Me(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (f--, ue(t)) {
        r.push(ae(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; f < t.length && (t[f] === `
` || t[f] === "	" || t[f] === " "); ) f++;
      let i;
      if (ue(t) && (i = ae(t), i.type !== s.Hue)) {
        r.push({
          type: s.Alpha,
          value: i
        });
        continue;
      }
      if (mt(t) && Me(t) === "none") {
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
      f--, r.push(ae(t));
      continue;
    }
    if (pt.test(a)) {
      f--, r.push(Na(t));
      continue;
    }
    return;
  }
  return r;
}
function La(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== s.Function || t.value !== "color" || (t = e[e._i++], t.type !== s.Ident)) return;
  const r = Sr[t.value];
  if (!r) return;
  const a = { mode: r }, i = Tr(e, !1);
  if (!i) return;
  const o = Ca(r).channels;
  for (let n = 0, l, h; n < o.length; n++)
    l = i[n], h = o[n], l.type !== s.None && (a[h] = l.type === s.Number ? l.value : l.value / 100, h === "alpha" && (a[h] = Math.max(0, Math.min(1, a[h]))));
  return a;
}
function Tr(e, t) {
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
function Ha(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== s.Function) return;
  let a = Tr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var Cr = (e) => {
  if (typeof e != "string") return;
  const t = Ra(e), r = t ? Ha(t, !0) : void 0;
  let a, i = 0, o = ye.length;
  for (; i < o; ) if ((a = ye[i++](e, r)) !== void 0) return a;
  return t ? La(t) : void 0;
};
function Wa(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.r = a.type === s.Number ? a.value / 255 : a.value / 100), i.type !== s.None && (r.g = i.type === s.Number ? i.value / 255 : i.value / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value / 255 : o.value / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var Oa = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, qa = (e, t, r) => e + r * (t - e), Ba = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], i = e[r + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, Da = (e) => (t) => {
  let r = Ba(t);
  return (a) => {
    let i = a * r.length, o = a >= 1 ? r.length - 1 : Math.max(Math.floor(i), 0), n = r[o];
    return n === void 0 ? void 0 : e(n[0], n[1], i - o);
  };
}, d = Da(qa), w = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, Z = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    Wa,
    xa,
    $a,
    Ma,
    Oa,
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
}, Ye = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Kt = (e) => {
  let t = Ye(e.r), r = Ye(e.g), a = Ye(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ze = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Qt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "a98",
    r: Ze(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Ze(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Ze(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Ue = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, U = ({ r: e, g: t, b: r, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: Ue(e),
    g: Ue(t),
    b: Ue(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, D = (e) => {
  let { r: t, g: r, b: a, alpha: i } = U(e), o = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ge = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, G = ({ r: e, g: t, b: r, alpha: a }, i = "rgb") => {
  let o = {
    mode: i,
    r: Ge(e),
    g: Ge(t),
    b: Ge(r)
  };
  return a !== void 0 && (o.alpha = a), o;
}, X = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = G({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Xa = {
  ...Z,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Qt(D(e)),
    xyz65: Qt
  },
  toMode: {
    rgb: (e) => X(Kt(e)),
    xyz65: Kt
  }
}, _ = (e) => (e = e % 360) < 0 ? e + 360 : e, ja = (e, t) => e.map((r, a, i) => {
  if (r === void 0) return r;
  let o = _(r);
  return a === 0 || e[a - 1] === void 0 ? o : t(o - _(i[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), E = (e) => ja(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), k = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], Fa = Math.PI / 180, Ya = 180 / Math.PI, Vt = k[3] * k[4], er = k[1] * k[4], tr = k[1] * k[2] - k[0] * k[3], Za = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (tr * r + e * Vt - t * er) / (tr + Vt - er), o = r - i, n = (k[4] * (t - i) - k[2] * o) / k[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(o * o + n * n) / (k[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(n, o) * Ya - 120), a !== void 0 && (l.alpha = a), l;
}, Ua = ({ h: e, s: t, l: r, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Fa, r === void 0 && (r = 0);
  let o = t === void 0 ? 0 : t * r * (1 - r), n = Math.cos(e), l = Math.sin(e);
  return i.r = r + o * (k[0] * n + k[1] * l), i.g = r + o * (k[2] * n + k[3] * l), i.b = r + o * (k[4] * n + k[5] * l), a !== void 0 && (i.alpha = a), i;
}, Te = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, Ga = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = _(e.h), a = _(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, Ce = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = _(e.h), a = _(t.h), i = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, N = (e) => {
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
}, Ja = {
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
  fromMode: { rgb: Za },
  toMode: { rgb: Ua },
  interpolate: {
    h: {
      use: d,
      fixup: E
    },
    s: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Te },
  average: { h: N }
}, L = ({ l: e, a: t, b: r, alpha: a }, i = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let o = Math.sqrt(t * t + r * r), n = {
    mode: i,
    l: e,
    c: o
  };
  return o && (n.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (n.alpha = a), n;
}, H = ({ l: e, c: t, h: r, alpha: a }, i = "lab") => {
  r === void 0 && (r = 0);
  let o = {
    mode: i,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (o.alpha = a), o;
}, Ar = Math.pow(29, 3) / Math.pow(3, 3), Ir = Math.pow(6, 3) / Math.pow(29, 3), M = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, F = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, hn = Math.pow(29, 3) / Math.pow(3, 3), dn = Math.pow(6, 3) / Math.pow(29, 3), Je = (e) => Math.pow(e, 3) > Ir ? Math.pow(e, 3) : (116 * e - 16) / Ar, Er = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz65",
    x: Je(o) * F.X,
    y: Je(i) * F.Y,
    z: Je(n) * F.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ae = (e) => X(Er(e)), Ke = (e) => e > Ir ? Math.cbrt(e) : (Ar * e + 16) / 116, Nr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Ke(e / F.X), o = Ke(t / F.Y), n = Ke(r / F.Z), l = {
    mode: "lab65",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ie = (e) => {
  let t = Nr(D(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, se = 26 / 180 * Math.PI, we = Math.cos(se), xe = Math.sin(se), Rr = 100 / Math.log(139 / 100), gt = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * 1 / Rr) - 1) / 39e-4
  }, o = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, n = o * Math.cos(r / 180 * Math.PI - se), l = o * Math.sin(r / 180 * Math.PI - se);
  return i.a = n * we - l / 0.83 * xe, i.b = n * xe + l / 0.83 * we, a !== void 0 && (i.alpha = a), i;
}, bt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t * we + r * xe, o = 0.83 * (r * we - t * xe), n = Math.sqrt(i * i + o * o), l = {
    mode: "dlch",
    l: Rr / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * n) / (0.0435 * 1 * 1)
  };
  return l.c && (l.h = _((Math.atan2(o, i) + se) / Math.PI * 180)), a !== void 0 && (l.alpha = a), l;
}, rr = (e) => gt(L(e, "dlch")), ar = (e) => H(bt(e), "dlab"), Ka = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: rr,
    rgb: (e) => Ae(rr(e))
  },
  fromMode: {
    lab65: ar,
    rgb: (e) => ar(Ie(e))
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
}, Qa = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: gt,
    dlab: (e) => H(e, "dlab"),
    rgb: (e) => Ae(gt(e))
  },
  fromMode: {
    lab65: bt,
    dlab: (e) => L(e, "dlch"),
    rgb: (e) => bt(Ie(e))
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
      fixup: E
    },
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Ce },
  average: { h: N }
};
function Va({ h: e, s: t, i: r, alpha: a }) {
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
function ei({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * o / (e + t + r),
    i: (e + t + r) / 3
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var ti = {
  mode: "hsi",
  toMode: { rgb: Va },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: ei },
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
      fixup: E
    },
    s: d,
    i: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Te },
  average: { h: N }
};
function ri({ h: e, s: t, l: r, alpha: a }) {
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
function ai({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsl",
    s: i === o ? 0 : (i - o) / (1 - Math.abs(i + o - 1)),
    l: 0.5 * (i + o)
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var ii = (e, t) => {
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
}, oi = new RegExp(`^hsla?\\(\\s*${_a}${Y}${ne}${Y}${ne}\\s*(?:,\\s*${zt}\\s*)?\\)$`), ni = (e) => {
  let t = e.match(oi);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = ii(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function li(e, t) {
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
var Lr = {
  mode: "hsl",
  toMode: { rgb: ri },
  fromMode: { rgb: ai },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [li, ni],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: E
    },
    s: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Te },
  average: { h: N }
};
function Hr({ h: e, s: t, v: r, alpha: a }) {
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
function Wr({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.max(e, t, r), o = Math.min(e, t, r), n = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - o / i,
    v: i
  };
  return i - o !== 0 && (n.h = (i === e ? (t - r) / (i - o) + (t < r) * 6 : i === t ? (r - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), a !== void 0 && (n.alpha = a), n;
}
var Or = {
  mode: "hsv",
  toMode: { rgb: Hr },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Wr },
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
      fixup: E
    },
    s: d,
    v: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Te },
  average: { h: N }
};
function si({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let i = t + r;
    t /= i, r /= i;
  }
  return Hr({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function hi(e) {
  let t = Wr(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function di(e, t) {
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
var ci = {
  mode: "hwb",
  toMode: { rgb: si },
  fromMode: { rgb: hi },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [di],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: E
    },
    w: d,
    b: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Ga },
  average: { h: N }
}, Ee = 0.1593017578125, qr = 78.84375, Ne = 0.8359375, Re = 18.8515625, Le = 18.6875;
function Qe(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / qr);
  return 1e4 * Math.pow(Math.max(0, t - Ne) / (Re - Le * t), 1 / Ee);
}
function Ve(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Ee);
  return Math.pow((Ne + Re * t) / (1 + Le * t), qr);
}
var et = (e) => Math.max(e / 203, 0), ir = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = Qe(e + 0.008609037037932761 * t + 0.11102962500302593 * r), o = Qe(e - 0.00860903703793275 * t - 0.11102962500302599 * r), n = Qe(e + 0.5600313357106791 * t - 0.32062717498731885 * r), l = {
    mode: "xyz65",
    x: et(2.070152218389422 * i - 1.3263473389671556 * o + 0.2066510476294051 * n),
    y: et(0.3647385209748074 * i + 0.680566024947227 * o - 0.0453045459220346 * n),
    z: et(-0.049747207535812 * i - 0.0492609666966138 * o + 1.1880659249923042 * n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, tt = (e = 0) => Math.max(e * 203, 0), or = ({ x: e, y: t, z: r, alpha: a }) => {
  const i = tt(e), o = tt(t), n = tt(r), l = Ve(0.3592832590121217 * i + 0.6976051147779502 * o - 0.0358915932320289 * n), h = Ve(-0.1920808463704995 * i + 1.1004767970374323 * o + 0.0753748658519118 * n), c = Ve(0.0070797844607477 * i + 0.0748396662186366 * o + 0.8433265453898765 * n), u = {
    mode: "itp",
    i: 0.5 * l + 0.5 * h,
    t: 1.61376953125 * l - 3.323486328125 * h + 1.709716796875 * c,
    p: 4.378173828125 * l - 4.24560546875 * h - 0.132568359375 * c
  };
  return a !== void 0 && (u.alpha = a), u;
}, vi = {
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
    xyz65: ir,
    rgb: (e) => X(ir(e))
  },
  fromMode: {
    xyz65: or,
    rgb: (e) => or(D(e))
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
}, ui = 134.03437499999998, fi = 16295499532821565e-27, rt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Ee);
  return Math.pow((Ne + Re * t) / (1 + Le * t), ui);
}, at = (e = 0) => Math.max(e * 203, 0), Br = ({ x: e, y: t, z: r, alpha: a }) => {
  e = at(e), t = at(t), r = at(r);
  let i = 1.15 * e - 0.15 * r, o = 0.66 * t + 0.34 * e, n = rt(0.41478972 * i + 0.579999 * o + 0.014648 * r), l = rt(-0.20151 * i + 1.120649 * o + 0.0531008 * r), h = rt(-0.0166008 * i + 0.2648 * o + 0.6684799 * r), c = (n + l) / 2, u = {
    mode: "jab",
    j: 0.44 * c / (1 - 0.56 * c) - fi,
    a: 3.524 * n - 4.066708 * l + 0.542708 * h,
    b: 0.199076 * n + 1.096799 * l - 1.295875 * h
  };
  return a !== void 0 && (u.alpha = a), u;
}, pi = 134.03437499999998, nr = 16295499532821565e-27, it = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / pi);
  return 1e4 * Math.pow((Ne - t) / (Le * t - Re), 1 / Ee);
}, ot = (e) => e / 203, Dr = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + nr) / (0.44 + 0.56 * (e + nr)), o = it(i + 0.13860504 * t + 0.058047316 * r), n = it(i - 0.13860504 * t - 0.058047316 * r), l = it(i - 0.096019242 * t - 0.8118919 * r), h = {
    mode: "xyz65",
    x: ot(1.661373024652174 * o - 0.914523081304348 * n + 0.23136208173913045 * l),
    y: ot(-0.3250758611844533 * o + 1.571847026732543 * n - 0.21825383453227928 * l),
    z: ot(-0.090982811 * o - 0.31272829 * n + 1.5227666 * l)
  };
  return a !== void 0 && (h.alpha = a), h;
}, Xr = (e) => {
  let t = Br(D(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, jr = (e) => X(Dr(e)), mi = {
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
    rgb: Xr,
    xyz65: Br
  },
  toMode: {
    rgb: jr,
    xyz65: Dr
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
}, lr = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, sr = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, gi = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: sr,
    rgb: (e) => jr(sr(e))
  },
  fromMode: {
    rgb: (e) => lr(Xr(e)),
    jab: lr
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
      fixup: E
    },
    c: d,
    j: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Ce },
  average: { h: N }
}, He = Math.pow(29, 3) / Math.pow(3, 3), St = Math.pow(6, 3) / Math.pow(29, 3), nt = (e) => Math.pow(e, 3) > St ? Math.pow(e, 3) : (116 * e - 16) / He, Tt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = (e + 16) / 116, o = t / 500 + i, n = i - r / 200, l = {
    mode: "xyz50",
    x: nt(o) * M.X,
    y: nt(i) * M.Y,
    z: nt(n) * M.Z
  };
  return a !== void 0 && (l.alpha = a), l;
}, de = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = G({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (i.alpha = a), i;
}, Fr = (e) => de(Tt(e)), ce = (e) => {
  let { r: t, g: r, b: a, alpha: i } = U(e), o = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, lt = (e) => e > St ? Math.cbrt(e) : (He * e + 16) / 116, Ct = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = lt(e / M.X), o = lt(t / M.Y), n = lt(r / M.Z), l = {
    mode: "lab",
    l: 116 * o - 16,
    a: 500 * (i - o),
    b: 200 * (o - n)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Yr = (e) => {
  let t = Ct(ce(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function bi(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.value), 100)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 125 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 125 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var At = {
  mode: "lab",
  toMode: {
    xyz50: Tt,
    rgb: Fr
  },
  fromMode: {
    xyz50: Ct,
    rgb: Yr
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
  parse: [bi],
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
}, yi = {
  ...At,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Er,
    rgb: Ae
  },
  fromMode: {
    xyz65: Nr,
    rgb: Ie
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Mi(e, t) {
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
var It = {
  mode: "lch",
  toMode: {
    lab: H,
    rgb: (e) => Fr(H(e))
  },
  fromMode: {
    rgb: (e) => L(Yr(e)),
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
  parse: [Mi],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: d,
      fixup: E
    },
    c: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Ce },
  average: { h: N }
}, wi = {
  ...It,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => H(e, "lab65"),
    rgb: (e) => Ae(H(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => L(Ie(e), "lch65"),
    lab65: (e) => L(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Zr = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (o.h = _(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, Ur = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Gr = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Jr = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), xi = Gr(M.X, M.Y, M.Z), ki = Jr(M.X, M.Y, M.Z), _i = (e) => e <= St ? He * e : 116 * Math.cbrt(e) - 16, yt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = _i(t / M.Y), o = Gr(e, t, r), n = Jr(e, t, r);
  !isFinite(o) || !isFinite(n) ? i = o = n = 0 : (o = 13 * i * (o - xi), n = 13 * i * (n - ki));
  let l = {
    mode: "luv",
    l: i,
    u: o,
    v: n
  };
  return a !== void 0 && (l.alpha = a), l;
}, Pi = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), zi = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), $i = Pi(M.X, M.Y, M.Z), Si = zi(M.X, M.Y, M.Z), Mt = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = t / (13 * e) + $i, o = r / (13 * e) + Si, n = M.Y * (e <= 8 ? e / He : Math.pow((e + 16) / 116, 3)), l = {
    mode: "xyz50",
    x: n * (9 * i) / (4 * o),
    y: n,
    z: n * (12 - 3 * i - 20 * o) / (4 * o)
  };
  return a !== void 0 && (l.alpha = a), l;
}, Ti = (e) => Zr(yt(ce(e))), Ci = (e) => de(Mt(Ur(e))), Ai = {
  mode: "lchuv",
  toMode: {
    luv: Ur,
    rgb: Ci
  },
  fromMode: {
    rgb: Ti,
    luv: Zr
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
      fixup: E
    },
    c: d,
    l: d,
    alpha: {
      use: d,
      fixup: w
    }
  },
  difference: { h: Ce },
  average: { h: N }
}, Ii = {
  ...Z,
  mode: "lrgb",
  toMode: { rgb: G },
  fromMode: { rgb: U },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Ei = {
  mode: "luv",
  toMode: {
    xyz50: Mt,
    rgb: (e) => de(Mt(e))
  },
  fromMode: {
    xyz50: yt,
    rgb: (e) => yt(ce(e))
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
}, Kr = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), o = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), n = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * o - 0.0040720430116193 * n,
    a: 1.9779985324311684 * i - 2.42859224204858 * o + 0.450593709617411 * n,
    b: 0.0259040424655478 * i + 0.7827717124575296 * o - 0.8086757549230774 * n
  };
  return a !== void 0 && (l.alpha = a), l;
}, We = (e) => {
  let t = Kr(U(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ve = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), o = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), n = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * o + 0.2309699031821044 * n,
    g: -1.2684379732850317 * i + 2.6097573492876887 * o - 0.3413193760026573 * n,
    b: -0.0041960761386756 * i - 0.7034186179359362 * o + 1.7076146940746117 * n
  };
  return a !== void 0 && (l.alpha = a), l;
}, Oe = (e) => G(ve(e));
function wt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function ke(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function Ni(e, t) {
  let r, a, i, o, n, l, h, c;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, i = 0.59662641, o = 0.75515197, n = 0.56771245, l = 4.0767416621, h = -3.3077115913, c = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, i = 0.08285427, o = 0.1254107, n = 0.14503204, l = -1.2684380046, h = 2.6097574011, c = -0.3413193965) : (r = 1.35733652, a = -915799e-8, i = -1.1513021, o = -0.50559606, n = 692167e-8, l = -0.0041960863, h = -0.7034186147, c = 1.707614701);
  let u = r + a * e + i * t + o * e * e + n * e * t, v = 0.3963377774 * e + 0.2158037573 * t, p = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t;
  {
    let b = 1 + u * v, y = 1 + u * p, x = 1 + u * m, $ = b * b * b, P = y * y * y, R = x * x * x, J = 3 * v * b * b, K = 3 * p * y * y, Q = 3 * m * x * x, V = 6 * v * v * b, ee = 6 * p * p * y, te = 6 * m * m * x, j = l * $ + h * P + c * R, O = l * J + h * K + c * Q, re = l * V + h * ee + c * te;
    u = u - j * O / (O * O - 0.5 * j * re);
  }
  return u;
}
function Et(e, t) {
  let r = Ni(e, t), a = ve({
    l: 1,
    a: r * e,
    b: r * t
  }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [i, i * r];
}
function Ri(e, t, r, a, i, o = null) {
  o || (o = Et(e, t));
  let n;
  if ((r - i) * o[1] - (o[0] - i) * a <= 0) n = o[1] * i / (a * o[0] + o[1] * (i - r));
  else {
    n = o[1] * (i - 1) / (a * (o[0] - 1) + o[1] * (i - r));
    {
      let l = r - i, h = a, c = 0.3963377774 * e + 0.2158037573 * t, u = -0.1055613458 * e - 0.0638541728 * t, v = -0.0894841775 * e - 1.291485548 * t, p = l + h * c, m = l + h * u, b = l + h * v;
      {
        let y = i * (1 - n) + n * r, x = n * a, $ = y + x * c, P = y + x * u, R = y + x * v, J = $ * $ * $, K = P * P * P, Q = R * R * R, V = 3 * p * $ * $, ee = 3 * m * P * P, te = 3 * b * R * R, j = 6 * p * p * $, O = 6 * m * m * P, re = 6 * b * b * R, Ft = 4.0767416621 * J - 3.3077115913 * K + 0.2309699292 * Q - 1, qe = 4.0767416621 * V - 3.3077115913 * ee + 0.2309699292 * te, va = 4.0767416621 * j - 3.3077115913 * O + 0.2309699292 * re, Yt = qe / (qe * qe - 0.5 * Ft * va), Be = -Ft * Yt, Zt = -1.2684380046 * J + 2.6097574011 * K - 0.3413193965 * Q - 1, De = -1.2684380046 * V + 2.6097574011 * ee - 0.3413193965 * te, ua = -1.2684380046 * j + 2.6097574011 * O - 0.3413193965 * re, Ut = De / (De * De - 0.5 * Zt * ua), Xe = -Zt * Ut, Gt = -0.0041960863 * J - 0.7034186147 * K + 1.707614701 * Q - 1, je = -0.0041960863 * V - 0.7034186147 * ee + 1.707614701 * te, fa = -0.0041960863 * j - 0.7034186147 * O + 1.707614701 * re, Jt = je / (je * je - 0.5 * Gt * fa), Fe = -Gt * Jt;
        Be = Yt >= 0 ? Be : 1e6, Xe = Ut >= 0 ? Xe : 1e6, Fe = Jt >= 0 ? Fe : 1e6, n += Math.min(Be, Math.min(Xe, Fe));
      }
    }
  }
  return n;
}
function Nt(e, t, r = null) {
  r || (r = Et(e, t));
  let a = r[0], i = r[1];
  return [i / a, i / (1 - a)];
}
function Qr(e, t, r) {
  let a = Et(t, r), i = Ri(t, r, e, 1, e, a), o = Nt(t, r, a), n = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), h = i / Math.min(e * o[0], (1 - e) * o[1]), c = e * n, u = (1 - e) * l, v = 0.9 * h * Math.sqrt(Math.sqrt(1 / (1 / (c * c * c * c) + 1 / (u * u * u * u))));
  return c = e * 0.4, u = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (c * c) + 1 / (u * u))),
    v,
    i
  ];
}
function hr(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = {
    mode: "okhsl",
    l: wt(t)
  };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let o = Math.sqrt(r * r + a * a);
  if (!o)
    return i.s = 0, i;
  let [n, l, h] = Qr(t, r / o, a / o), c;
  if (o < l) {
    let u = 0, v = 0.8 * n, p = 1 - v / l;
    c = (o - u) / (v + p * (o - u)) * 0.8;
  } else {
    let u = l, v = 0.2 * l * l * 1.25 * 1.25 / n, p = 1 - v / (h - l);
    c = 0.8 + 0.2 * ((o - u) / (v + p * (o - u)));
  }
  return c && (i.s = c, i.h = _(Math.atan2(a, r) * 180 / Math.PI)), i;
}
function dr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = {
    mode: "oklab",
    l: ke(a)
  };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !r || a === 1)
    return i.a = i.b = 0, i;
  let o = Math.cos(t / 180 * Math.PI), n = Math.sin(t / 180 * Math.PI), [l, h, c] = Qr(i.l, o, n), u, v, p, m;
  r < 0.8 ? (u = 1.25 * r, v = 0, p = 0.8 * l, m = 1 - p / h) : (u = 5 * (r - 0.8), v = h, p = 0.2 * h * h * 1.25 * 1.25 / l, m = 1 - p / (c - h));
  let b = v + u * p / (1 - m * u);
  return i.a = b * o, i.b = b * n, i;
}
var Li = {
  ...Lr,
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
    oklab: hr,
    rgb: (e) => hr(We(e))
  },
  toMode: {
    oklab: dr,
    rgb: (e) => Oe(dr(e))
  }
};
function cr(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(r * r + a * a), o = i ? r / i : 1, n = i ? a / i : 1, [l, h] = Nt(o, n), c = 0.5, u = 1 - c / l, v = h / (i + t * h), p = v * t, m = v * i, b = ke(p), y = m * b / p, x = ve({
    l: b,
    a: o * y,
    b: n * y
  }), $ = Math.cbrt(1 / Math.max(x.r, x.g, x.b, 0));
  t = t / $, i = i / $ * wt(t) / t, t = wt(t);
  const P = {
    mode: "okhsv",
    s: i ? (c + h) * m / (h * c + h * u * m) : 0,
    v: t ? t / p : 0
  };
  return P.s && (P.h = _(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && (P.alpha = e.alpha), P;
}
function vr(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, o = Math.cos(r / 180 * Math.PI), n = Math.sin(r / 180 * Math.PI), [l, h] = Nt(o, n), c = 0.5, u = 1 - c / l, v = 1 - a * c / (c + h - h * u * a), p = a * h * c / (c + h - h * u * a), m = ke(v), b = p * m / v, y = ve({
    l: m,
    a: o * b,
    b: n * b
  }), x = Math.cbrt(1 / Math.max(y.r, y.g, y.b, 0)), $ = ke(i * v), P = p * $ / v;
  return t.l = $ * x, t.a = P * o * x, t.b = P * n * x, t;
}
var Hi = {
  ...Or,
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
    oklab: cr,
    rgb: (e) => cr(We(e))
  },
  toMode: {
    oklab: vr,
    rgb: (e) => Oe(vr(e))
  }
};
function Wi(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, i, o, n] = t;
  if (!(a.type === s.Hue || i.type === s.Hue || o.type === s.Hue))
    return a.type !== s.None && (r.l = Math.min(Math.max(0, a.type === s.Number ? a.value : a.value / 100), 1)), i.type !== s.None && (r.a = i.type === s.Number ? i.value : i.value * 0.4 / 100), o.type !== s.None && (r.b = o.type === s.Number ? o.value : o.value * 0.4 / 100), n.type !== s.None && (r.alpha = Math.min(1, Math.max(0, n.type === s.Number ? n.value : n.value / 100))), r;
}
var Oi = {
  ...At,
  mode: "oklab",
  toMode: {
    lrgb: ve,
    rgb: Oe
  },
  fromMode: {
    lrgb: Kr,
    rgb: We
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Wi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function qi(e, t) {
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
var Bi = {
  ...It,
  mode: "oklch",
  toMode: {
    oklab: (e) => H(e, "oklab"),
    rgb: (e) => Oe(H(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => L(We(e), "oklch"),
    oklab: (e) => L(e, "oklch")
  },
  parse: [qi],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, ur = (e) => {
  let { r: t, g: r, b: a, alpha: i } = U(e), o = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, fr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = G({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (i.alpha = a), i;
}, Di = {
  ...Z,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => fr(D(e)),
    xyz65: fr
  },
  toMode: {
    rgb: (e) => X(ur(e)),
    xyz65: ur
  }
}, st = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "prophoto",
    r: st(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: st(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: st(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, ht = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, mr = (e) => {
  let t = ht(e.r), r = ht(e.g), a = ht(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Xi = {
  ...Z,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: pr,
    rgb: (e) => pr(ce(e))
  },
  toMode: {
    xyz50: mr,
    rgb: (e) => de(mr(e))
  }
}, ji = 1.09929682680944, Fi = 0.018053968510807, dt = (e) => {
  const t = Math.abs(e);
  return t > Fi ? (Math.sign(e) || 1) * (ji * Math.pow(t, 0.45) - 0.09929682680944008) : 4.5 * e;
}, gr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = {
    mode: "rec2020",
    r: dt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: dt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: dt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, br = 1.09929682680944, Yi = 0.018053968510807, ct = (e = 0) => {
  let t = Math.abs(e);
  return t < Yi * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + br - 1) / br, 1 / 0.45);
}, yr = (e) => {
  let t = ct(e.r), r = ct(e.g), a = ct(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Zi = {
  ...Z,
  mode: "rec2020",
  fromMode: {
    xyz65: gr,
    rgb: (e) => gr(D(e))
  },
  toMode: {
    xyz65: yr,
    rgb: (e) => X(yr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, B = 0.0037930732552754493, Vr = Math.cbrt(B), vt = (e) => Math.cbrt(e) - Vr, Ui = (e) => {
  const { r: t, g: r, b: a, alpha: i } = U(e), o = vt(0.3 * t + 0.622 * r + 0.078 * a + B), n = vt(0.23 * t + 0.692 * r + 0.078 * a + B), l = vt(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + B), h = {
    mode: "xyb",
    x: (o - n) / 2,
    y: (o + n) / 2,
    b: l - (o + n) / 2
  };
  return i !== void 0 && (h.alpha = i), h;
}, ut = (e) => Math.pow(e + Vr, 3), Gi = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = ut(e + t) - B, o = ut(t - e) - B, n = ut(r + t) - B, l = G({
    r: 11.031566904639861 * i - 9.866943908131562 * o - 0.16462299650829934 * n,
    g: -3.2541473810744237 * i + 4.418770377582723 * o - 0.16462299650829934 * n,
    b: -3.6588512867136815 * i + 2.7129230459360922 * o + 1.9459282407775895 * n
  });
  return a !== void 0 && (l.alpha = a), l;
}, Ji = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: Gi },
  fromMode: { rgb: Ui },
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
}, Ki = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: de,
    lab: Ct
  },
  fromMode: {
    rgb: ce,
    lab: Tt
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
}, Qi = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, Vi = (e) => {
  let { x: t, y: r, z: a, alpha: i } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let o = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, eo = {
  mode: "xyz65",
  toMode: {
    rgb: X,
    xyz50: Qi
  },
  fromMode: {
    rgb: D,
    xyz50: Vi
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
}, to = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, ro = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, ao = {
  mode: "yiq",
  toMode: { rgb: ro },
  fromMode: { rgb: to },
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
}, io = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, oo = (e = 4) => (t) => typeof t == "number" ? io(t, e) : t, cn = oo(2), no = (e) => Math.max(0, Math.min(1, e || 0)), ft = (e) => Math.round(no(e) * 255), lo = $t("rgb"), vn = $t("hsl"), so = (e) => {
  if (e === void 0) return;
  let t = ft(e.r), r = ft(e.g), a = ft(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, Rt = (e) => so(lo(e)), un = g(Xa), fn = g(Ja), pn = g(Ka), mn = g(Qa), gn = g(ti), bn = g(Lr), yn = g(Or), Mn = g(ci), wn = g(vi), xn = g(mi), kn = g(gi), _n = g(At), Pn = g(yi), zn = g(It), $n = g(wi), Sn = g(Ai), Tn = g(Ii), Cn = g(Ei), An = g(Li), In = g(Hi), En = g(Oi), _e = g(Bi), Nn = g(Di), Rn = g(Xi), Ln = g(Zi), Hn = g(Z), Wn = g(Ji), On = g(Ki), qn = g(eo), Bn = g(ao), ea = (e, t = "l") => e.sort((r, a) => Math.sign(_e({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - _e({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Lt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), ho = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((a) => {
    let i = 1e4, o = 0;
    t.forEach((n, l) => {
      const h = Lt(a, n);
      (typeof i > "u" || i > h) && (i = h, o = l);
    }), r[o].points.push(a);
  }), r;
}, co = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], vo = (e, t) => {
  let r = ea(uo(e, t));
  const a = 10;
  for (let i = 0; i < a; i++) {
    const o = ho(e, r).map((n) => n.points.length > 0 ? co(n.points) : null);
    if (o.every((n, l) => n && Lt(n, r[l]) < 1e-3)) break;
    r = o;
  }
  return r;
}, uo = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((h) => Math.min(...r.map((c) => Lt(h, c)))), i = a.reduce((h, c) => h + c, 0), o = a.map((h) => h / i);
    let n = 0;
    const l = Math.random();
    for (let h = 0; h < o.length; h++)
      if (n += o[h], l < n) {
        r.push(e[h]);
        break;
      }
  }
  return r;
}, fo = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((o) => o?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), i = a.getContext("2d");
  return i.filter = "blur(16px)", i?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, po = async (e) => {
  const t = await fo(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const i = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, o = r.width * r.height || 0, n = 1 / 255, l = [];
  for (let h = 0; h < o; h++) {
    const c = h * 4;
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
}, mo = async (e) => {
  const t = await po(e);
  return ea(vo(t, 4), "h");
}, go = "rs-wallpaper-theme", bo = "rs-wallpaper-primary", yo = "rs-wallpaper-theme-src", Ht = go, Mo = bo, Mr = yo, Wt = 0.52, wo = 0.025, le = {
  underlying: "#16161a",
  contrast: "#f7f7f8"
}, A = null, xo = 0.03, ko = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], _o = (e, t, r) => Math.min(r, Math.max(t, e)), wr = (e, t, r, a) => Rt({
  mode: "oklch",
  l: e,
  c: t,
  h: r
}) || a, Po = (e) => {
  const [t, r, a] = e;
  if (![
    t,
    r,
    a
  ].every((n) => Number.isFinite(n))) return null;
  const i = Rt({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  if (!i) return null;
  const o = _e({
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
}, zo = (e) => _e(e)?.l ?? 0.4, $o = (e) => e ? {
  shadow: "rgb(0 0 0 / 0.88)",
  glow: "rgb(0 0 0 / 0.45)"
} : {
  shadow: "rgb(255 255 255 / 0.72)",
  glow: "rgb(255 255 255 / 0.35)"
}, Ot = (e) => Number.isFinite(e) && e >= xo && e <= 1, So = (e, t) => {
  if (!e.length && t == null) return { ...le };
  const r = e.map((u) => u.l).sort((u, v) => u - v), a = e.length ? e.reduce((u, v) => u + v.l, 0) / e.length : t, i = r.length ? r[Math.floor(r.length / 2)] : a, o = _o(t != null && Ot(t) ? t : Math.max(a, i), 0.08, 0.94), n = e.length ? [...e].sort((u, v) => u.c - v.c || Math.abs(u.l - o) - Math.abs(v.l - o))[0] : null, l = n ? Math.min(wo, Math.max(0, n.c * 0.2)) : 0, h = n?.h || 0, c = o < Wt;
  return {
    underlying: wr(o, l, h, c ? le.underlying : "#e8e6e2"),
    contrast: wr(c ? 0.93 : 0.16, 8e-3, h, c ? le.contrast : "#141416")
  };
}, To = async (e) => {
  try {
    const t = e instanceof Blob ? e : await (await fetch(e)).blob();
    if (!t || t.size <= 0) return null;
    const r = await createImageBitmap(t), a = 48, i = Math.max(1, Math.round(r.height / Math.max(1, r.width) * a)), o = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(a, i) : Object.assign(document.createElement("canvas"), {
      width: a,
      height: i
    });
    o instanceof OffscreenCanvas || (o.width = a, o.height = i);
    const n = o.getContext("2d");
    if (!n)
      return r.close?.(), null;
    n.drawImage(r, 0, 0, a, i), r.close?.();
    const l = n.getImageData(0, 0, a, i).data;
    let h = 0, c = 0;
    for (let v = 0; v < l.length; v += 16) {
      if ((l[v + 3] ?? 255) < 16) continue;
      const p = l[v] / 255, m = l[v + 1] / 255, b = l[v + 2] / 255;
      h += 0.2126 * p + 0.7152 * m + 0.0722 * b, c++;
    }
    if (c < 8) return null;
    const u = h / c;
    return Ot(u) ? u : null;
  } catch {
    return null;
  }
}, Co = (e) => e <= Wt ? { ...le } : {
  underlying: "#e8e6e2",
  contrast: "#141416"
}, Ao = (e) => !!(e.underlying && e.contrast), Io = (e, t) => {
  const r = e.map(Po).filter(Boolean);
  if (!r.length) return null;
  const a = r.filter((v) => v.l >= 0.18 && v.l <= 0.88 && v.c >= 0.02).sort((v, p) => p.c - v.c || Math.abs(p.l - 0.55) - Math.abs(v.l - 0.55)), i = a.length ? a : [...r].sort((v, p) => p.c - v.c), o = i[0];
  if (!o) return null;
  const n = (v, p) => {
    const m = Math.abs(v - p) % 360;
    return m > 180 ? 360 - m : m;
  }, l = (v) => {
    const p = i.filter((m) => !v.includes(m));
    if (!p.length) {
      const m = v[v.length - 1] ?? o, b = Rt({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, m.l + (v.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, m.c * 0.85),
        h: m.h
      });
      return {
        ...m,
        hex: b || m.hex,
        l: m.l
      };
    }
    return [...p].sort((m, b) => Math.min(...v.map((y) => n(b.h, y.h))) - Math.min(...v.map((y) => n(m.h, y.h))) || b.c - m.c)[0] ?? p[0];
  }, h = l([o]), c = l([o, h]), u = So(r, t);
  return {
    primary: o.hex,
    secondary: h.hex,
    tertiary: c.hex,
    ...u
  };
}, ta = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, Eo = () => {
  if (typeof document > "u") return !0;
  const e = String(document.documentElement.dataset.colorSource || "");
  return e ? e === "wallpaper" || e === "speed-dial" || e === "system-wallpaper" : !0;
}, q = (e) => !!Cr(e), xt = (e, t = []) => {
  if (typeof document > "u") return;
  const r = zo(e.underlying) < Wt, { shadow: a, glow: i } = $o(r), o = new Set(ta());
  for (const l of t) o.add(l);
  if (!q(e.underlying) || !q(e.contrast) || !q(a) || !q(i)) return;
  ie("--wallpaper-underlying-color", e.underlying), ie("--wallpaper-contrast-color", e.contrast), ie("--env-launcher-fg", e.contrast), ie("--env-launcher-fg-shadow", a), ie("--env-launcher-fg-glow", i);
  for (const l of o)
    T(l, "--wallpaper-underlying-color", e.underlying), T(l, "--wallpaper-contrast-color", e.contrast), T(l, "--env-launcher-fg", e.contrast), T(l, "--env-launcher-fg-shadow", a), T(l, "--env-launcher-fg-glow", i);
  const n = Pr("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  n.style.setProperty("--wallpaper-underlying-color", e.underlying), n.style.setProperty("--wallpaper-contrast-color", e.contrast), n.style.setProperty("--env-launcher-fg", e.contrast), n.style.setProperty("--env-launcher-fg-shadow", a), n.style.setProperty("--env-launcher-fg-glow", i);
}, ie = (e, t = "#5a9ec8") => {
  try {
    CSS?.registerProperty?.({
      name: e,
      syntax: "<color>",
      inherits: !0,
      initialValue: t
    });
  } catch (r) {
    console.debug(r);
  }
}, No = (e) => {
  try {
    const t = Pe();
    if (!t) return;
    localStorage.setItem(Ht, JSON.stringify({
      ...t,
      underlying: e.underlying,
      contrast: e.contrast
    }));
  } catch {
  }
}, Ro = (e, t = []) => {
  if (!Ot(e))
    return A ? (xt(A, t), A) : { ...le };
  const r = Co(e);
  return A = r, xt(r, t), No(r), r;
}, me = (e) => {
  const t = A ? {
    ...e,
    ...A
  } : e;
  try {
    localStorage.setItem(Ht, JSON.stringify(t)), localStorage.setItem(Mo, t.primary);
  } catch {
  }
  if (Ao(t) && xt(t), !Eo()) return;
  for (const a of ta()) for (const [i, o] of ko) T(a, i, t[o]);
  if (!q(t.primary) || !q(t.secondary) || !q(t.tertiary)) return;
  document.querySelectorAll("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host").forEach((a) => {
    T(a, "--color-primary", t.primary), T(a, "--base-color", t.primary), T(a, "--color-secondary", t.secondary), T(a, "--color-tertiary", t.tertiary);
  });
  const r = Pr("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
  r.style.setProperty("--color-primary", t.primary), r.style.setProperty("--base-color", t.primary), r.style.setProperty("--color-secondary", t.secondary), r.style.setProperty("--color-tertiary", t.tertiary), document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
    source: "wallpaper",
    seeds: t
  } }));
}, Pe = () => {
  try {
    const e = localStorage.getItem(Ht);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, ze = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`, a = await To(e);
  if (a != null && Ro(a), !t?.force) try {
    if (localStorage.getItem(Mr) === r) {
      const i = Pe();
      if (i)
        return me(i), A ? {
          ...i,
          ...A
        } : i;
    }
  } catch {
  }
  try {
    const i = await mo(e), o = Io(i, a ?? void 0);
    if (!o) return null;
    me(o);
    try {
      localStorage.setItem(Mr, r);
    } catch {
    }
    return A ? {
      ...o,
      ...A
    } : o;
  } catch (i) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", i);
    const o = Pe();
    return o ? (me(o), o) : null;
  }
}, Lo = () => {
  const e = Pe();
  return e && me(e), e;
}, ra = "rs-wallpaper-image", I = "/assets/wallpaper.jpg", kt = "idb:rs-wallpaper", Ho = "cwsp-wallpaper-v1", W = "blobs", qt = "current", aa = 512e3, z = null, Bt = 0, Dt = () => ga?.[pa()] ?? 0, _t = (e) => e === "idb:rs-wallpaper" || e.startsWith("idb:"), Wo = (e) => e.startsWith("blob:") || e.startsWith("data:") && e.length > aa, ia = () => {
  if (Bt += 1, z && z.startsWith("blob:")) try {
    URL.revokeObjectURL(z);
  } catch {
  }
  z = null;
}, Oo = (e, t) => (t !== Bt || z || (z = URL.createObjectURL(e)), z), Xt = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(Ho, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(W) || a.createObjectStore(W);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), qo = async (e) => {
  const t = await Xt();
  try {
    await new Promise((r, a) => {
      const i = t.transaction(W, "readwrite");
      i.objectStore(W).put(e, qt), i.oncomplete = () => r(), i.onerror = () => a(i.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, oa = async () => {
  const e = await Xt();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(W, "readonly").objectStore(W).get(qt);
      a.onsuccess = () => {
        const i = a.result;
        t(i instanceof Blob ? i : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, Bo = async () => {
  try {
    const e = await Xt();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(W, "readwrite");
        a.objectStore(W).delete(qt), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, jt = () => {
  try {
    const e = localStorage.getItem(ra);
    return e && e.trim() ? e.trim() : I;
  } catch {
    return I;
  }
}, $e = (e) => {
  if (e.startsWith("blob:")) return !1;
  try {
    return localStorage.setItem(ra, e), !0;
  } catch {
    return !1;
  }
}, Do = async () => {
  if (z) return z;
  const e = Bt;
  try {
    const t = await oa();
    return t ? Oo(t, e) : null;
  } catch (t) {
    return console.warn("[fest/image] wallpaper IDB restore failed", t), null;
  }
}, Xo = (e) => e.startsWith("data:") || e.startsWith("blob:"), na = async () => {
  const e = jt();
  if (_t(e) || Wo(e)) {
    const t = await Do();
    return t ? (_t(e) || $e(kt), t) : I;
  }
  return e || I;
}, Dn = () => jt(), xr = (e) => {
  const t = () => {
    const r = Dt(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), ba(t);
}, jo = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = Dt(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, Xn = () => {
  na().then((e) => {
    Se(e), jo();
  });
}, he = (e) => {
  getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(), e.style.background = "none", e.style.backgroundColor = "transparent";
}, Se = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(Dt());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, Fo = async (e) => (await fetch(e)).blob(), Yo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return Zo(I), I;
  ia(), z = URL.createObjectURL(e), Se(z), ze(e, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(he);
  });
  try {
    await qo(e), $e(kt);
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((i, o) => {
        r.onload = () => i(String(r.result || "")), r.onerror = () => o(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !$e(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: kt,
      url: z
    } }));
  } catch {
  }
  return z;
}, jn = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "none", t.style.backgroundColor = "transparent";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "none", r.style.backgroundColor = "transparent";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "transparent", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const i = jt(), o = _t(i) || i.startsWith("data:") || i.startsWith("blob:") ? I : i;
  a.setAttribute("data-src", o);
  const n = xr(a);
  return Lo(), he(r), (async () => {
    const l = await na();
    a.setAttribute("data-src", l), xr(a);
    const h = l.startsWith("blob:") && await oa() || l;
    await ze(h), he(r);
  })(), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: n
  };
}, Zo = (e) => {
  const t = String(e || "").trim() || I;
  if (Xo(t) || t.length > aa) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await Fo(t);
        await Yo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r);
        const a = t.startsWith("blob:") ? I : t;
        Se(a), ze(a, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(he);
        });
      }
    })();
    return;
  }
  Bo(), ia(), $e(t) || console.warn("[fest/image] wallpaper pointer write failed"), Se(t), ze(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(he);
  });
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: t,
      url: t
    } }));
  } catch {
  }
}, la = /* @__PURE__ */ Symbol.for("image.canvas.blob");
globalThis[la] ??= /* @__PURE__ */ new WeakMap();
var pe = globalThis[la], sa = /* @__PURE__ */ Symbol.for("image.canvas.delayed");
globalThis[sa] ??= /* @__PURE__ */ new Map([]);
var Uo = globalThis[sa], ha = /* @__PURE__ */ Symbol.for("image.canvas.sheduler");
globalThis[ha] ??= ma();
var kr = globalThis[ha], da = /* @__PURE__ */ Symbol.for("image.canvas.failedWallpaperSrc");
globalThis[da] ??= /* @__PURE__ */ new Set();
var oe = globalThis[da], ge = (e) => e?.naturalWidth || e?.width || 1, be = (e) => e?.naturalHeight || e?.height || 1, Go = (e) => {
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
}, Fn = (e, t) => {
  Uo.set(e, t);
}, Jo = (e, t, r = 1, a, i = 0) => {
  const o = e.canvas;
  e.translate(o.width / 2, o.height / 2), e.rotate((-i || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(ge(t) / 2) * r, -(be(t) / 2) * r);
}, Ko = (e) => {
  if (!pe.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image)) {
    const t = createImageBitmap(e).catch((r) => {
      throw pe.delete(e), r;
    });
    pe.set(e, t);
  }
  return pe.get(e);
}, ca = /* @__PURE__ */ Symbol.for("image.canvas.bindCache");
globalThis[ca] ??= /* @__PURE__ */ new WeakMap();
var _r = globalThis[ca], Qo = (e, t) => {
  const r = _r.get(e);
  if (typeof r == "function") return r;
  const a = e.bind(t);
  return _r.set(e, a), a;
}, Pt = null;
typeof HTMLCanvasElement < "u" ? Pt = class extends HTMLCanvasElement {
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
    kr?.shedule?.(() => {
      this.ctx = Go(t);
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
    const a = t instanceof ImageBitmap ? t : await Ko(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, i = this.image;
    if (i && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const o = this.#i % 2 || 0, n = ge(i) <= be(i) ? 1 : 0, l = Math.max(r[["height", "width"][o]] / (n ? be(i) : ge(i)), r[["width", "height"][o]] / (n ? ge(i) : be(i)));
      a.save(), a.clearRect(0, 0, r.width, r.height), Jo(a, i, l, n, this.#i), a.drawImage(i, 0, 0, i.width * l, i.height * l), a.restore();
    }
  }
  #o(t) {
    const r = t || this.#t;
    return this.#t = r, !r || typeof r != "string" || oe.has(r) ? Promise.resolve() : fetch(r, {
      cache: "force-cache",
      mode: "same-origin"
    })?.then?.(async (a) => {
      if (!a.ok) {
        oe.add(r);
        return;
      }
      const i = await a.blob();
      if (!i?.size || i.type && !i.type.startsWith("image/")) {
        oe.add(r);
        return;
      }
      return this.$useImageAsSource(i, r)?.catch?.(() => {
        oe.add(r);
      });
    })?.catch?.(() => {
      oe.add(r);
    });
  }
  #a(t) {
    const r = this.ctx;
    this.image && r && (t == this.#t || !t) && kr?.shedule?.(Qo(this.$renderPass, this));
  }
} : Pt = class {
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
  customElements.define("ui-canvas", Pt, { extends: "canvas" });
} catch {
}
export {
  Pt as UICanvas,
  kt as WALLPAPER_IDB_MARKER,
  bo as WALLPAPER_PRIMARY_STORAGE_KEY,
  yo as WALLPAPER_THEME_SRC_STORAGE_KEY,
  go as WALLPAPER_THEME_STORAGE_KEY,
  ze as applyThemeFromWallpaper,
  Ro as applyWallpaperPaperFromLuma,
  xt as applyWallpaperPaperTokens,
  me as applyWallpaperThemeSeeds,
  _r as bindCache,
  pe as blobImageMap,
  Fn as callByFrame,
  Jo as cover,
  Ko as createImageBitmapCache,
  Uo as delayed,
  Co as deriveWallpaperPaperTokensFromLuma,
  rn as electronAPI,
  oe as failedWallpaperSrc,
  mo as getDominantColors,
  Dn as getWallpaperStoragePointer,
  jn as initializeAppCanvasLayer,
  Pe as loadCachedWallpaperTheme,
  an as qualityMode,
  Io as rankWallpaperSeeds,
  Xn as refreshAppWallpaperPaint,
  ie as registerColorProperty,
  na as resolveAppWallpaperUrl,
  Lo as restoreWallpaperThemeCache,
  Zo as setAppWallpaper,
  Yo as setAppWallpaperFromBlob,
  kr as sheduler,
  jo as syncAppWallpaperOrient,
  xr as syncCanvasOrient,
  ta as themeHosts
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaW1hZ2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFEgfSBmcm9tIFwiQGZlc3QtbGliL2x1cmVcIjtcbmltcG9ydCB7IHNldFN0eWxlUHJvcGVydHkgfSBmcm9tIFwiQGZlc3QtbGliL3N0eWxlLWxpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBtYWtlUkFGQ3ljbGUsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCB3aGVuQW55U2NyZWVuQ2hhbmdlcyB9IGZyb20gXCJAZmVzdC1saWIvZG9tXCI7XG5cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0NvbmZpZy50c1xudmFyIGVsZWN0cm9uQVBJID0gXCJlbGVjdHJvbkJyaWRnZVwiO1xudmFyIHF1YWxpdHlNb2RlID0geyBcImZhc3RcIjoge1xuXHRkaXZpc29yOiA0LFxuXHRmaWx0ZXI6IFwiYmx1cig0cHgpXCIsXG5cdHNhbXBsaW5nOiAxMjhcbn0gfTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlTnVtYmVyLmpzXG52YXIgcGFyc2VOdW1iZXIgPSAoY29sb3IsIGxlbikgPT4ge1xuXHRpZiAodHlwZW9mIGNvbG9yICE9PSBcIm51bWJlclwiKSByZXR1cm47XG5cdGlmIChsZW4gPT09IDMpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gOCAmIDE1IHwgY29sb3IgPj4gNCAmIDI0MCkgLyAyNTUsXG5cdFx0ZzogKGNvbG9yID4+IDQgJiAxNSB8IGNvbG9yICYgMjQwKSAvIDI1NSxcblx0XHRiOiAoY29sb3IgJiAxNSB8IGNvbG9yIDw8IDQgJiAyNDApIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDQpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMTIgJiAxNSB8IGNvbG9yID4+IDggJiAyNDApIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA4ICYgMTUgfCBjb2xvciA+PiA0ICYgMjQwKSAvIDI1NSxcblx0XHRiOiAoY29sb3IgPj4gNCAmIDE1IHwgY29sb3IgJiAyNDApIC8gMjU1LFxuXHRcdGFscGhhOiAoY29sb3IgJiAxNSB8IGNvbG9yIDw8IDQgJiAyNDApIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDYpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcblx0XHRiOiAoY29sb3IgJiAyNTUpIC8gMjU1XG5cdH07XG5cdGlmIChsZW4gPT09IDgpIHJldHVybiB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiAoY29sb3IgPj4gMjQgJiAyNTUpIC8gMjU1LFxuXHRcdGc6IChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXG5cdFx0YjogKGNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxuXHRcdGFscGhhOiAoY29sb3IgJiAyNTUpIC8gMjU1XG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jb2xvcnMvbmFtZWQuanNcbnZhciBuYW1lZCA9IHtcblx0YWxpY2VibHVlOiAxNTc5MjM4Myxcblx0YW50aXF1ZXdoaXRlOiAxNjQ0NDM3NSxcblx0YXF1YTogNjU1MzUsXG5cdGFxdWFtYXJpbmU6IDgzODg1NjQsXG5cdGF6dXJlOiAxNTc5NDE3NSxcblx0YmVpZ2U6IDE2MTE5MjYwLFxuXHRiaXNxdWU6IDE2NzcwMjQ0LFxuXHRibGFjazogMCxcblx0YmxhbmNoZWRhbG1vbmQ6IDE2NzcyMDQ1LFxuXHRibHVlOiAyNTUsXG5cdGJsdWV2aW9sZXQ6IDkwNTUyMDIsXG5cdGJyb3duOiAxMDgyNDIzNCxcblx0YnVybHl3b29kOiAxNDU5NjIzMSxcblx0Y2FkZXRibHVlOiA2MjY2NTI4LFxuXHRjaGFydHJldXNlOiA4Mzg4MzUyLFxuXHRjaG9jb2xhdGU6IDEzNzg5NDcwLFxuXHRjb3JhbDogMTY3NDQyNzIsXG5cdGNvcm5mbG93ZXJibHVlOiA2NTkxOTgxLFxuXHRjb3Juc2lsazogMTY3NzUzODgsXG5cdGNyaW1zb246IDE0NDIzMTAwLFxuXHRjeWFuOiA2NTUzNSxcblx0ZGFya2JsdWU6IDEzOSxcblx0ZGFya2N5YW46IDM1NzIzLFxuXHRkYXJrZ29sZGVucm9kOiAxMjA5MjkzOSxcblx0ZGFya2dyYXk6IDExMTE5MDE3LFxuXHRkYXJrZ3JlZW46IDI1NjAwLFxuXHRkYXJrZ3JleTogMTExMTkwMTcsXG5cdGRhcmtraGFraTogMTI0MzMyNTksXG5cdGRhcmttYWdlbnRhOiA5MTA5NjQzLFxuXHRkYXJrb2xpdmVncmVlbjogNTU5Nzk5OSxcblx0ZGFya29yYW5nZTogMTY3NDc1MjAsXG5cdGRhcmtvcmNoaWQ6IDEwMDQwMDEyLFxuXHRkYXJrcmVkOiA5MTA5NTA0LFxuXHRkYXJrc2FsbW9uOiAxNTMwODQxMCxcblx0ZGFya3NlYWdyZWVuOiA5NDE5OTE5LFxuXHRkYXJrc2xhdGVibHVlOiA0NzM0MzQ3LFxuXHRkYXJrc2xhdGVncmF5OiAzMTAwNDk1LFxuXHRkYXJrc2xhdGVncmV5OiAzMTAwNDk1LFxuXHRkYXJrdHVycXVvaXNlOiA1Mjk0NSxcblx0ZGFya3Zpb2xldDogOTY5OTUzOSxcblx0ZGVlcHBpbms6IDE2NzE2OTQ3LFxuXHRkZWVwc2t5Ymx1ZTogNDkxNTEsXG5cdGRpbWdyYXk6IDY5MDgyNjUsXG5cdGRpbWdyZXk6IDY5MDgyNjUsXG5cdGRvZGdlcmJsdWU6IDIwMDMxOTksXG5cdGZpcmVicmljazogMTE2NzQxNDYsXG5cdGZsb3JhbHdoaXRlOiAxNjc3NTkyMCxcblx0Zm9yZXN0Z3JlZW46IDIyNjM4NDIsXG5cdGZ1Y2hzaWE6IDE2NzExOTM1LFxuXHRnYWluc2Jvcm86IDE0NDc0NDYwLFxuXHRnaG9zdHdoaXRlOiAxNjMxNjY3MSxcblx0Z29sZDogMTY3NjY3MjAsXG5cdGdvbGRlbnJvZDogMTQzMjkxMjAsXG5cdGdyYXk6IDg0MjE1MDQsXG5cdGdyZWVuOiAzMjc2OCxcblx0Z3JlZW55ZWxsb3c6IDExNDAzMDU1LFxuXHRncmV5OiA4NDIxNTA0LFxuXHRob25leWRldzogMTU3OTQxNjAsXG5cdGhvdHBpbms6IDE2NzM4NzQwLFxuXHRpbmRpYW5yZWQ6IDEzNDU4NTI0LFxuXHRpbmRpZ286IDQ5MTUzMzAsXG5cdGl2b3J5OiAxNjc3NzIwMCxcblx0a2hha2k6IDE1Nzg3NjYwLFxuXHRsYXZlbmRlcjogMTUxMzI0MTAsXG5cdGxhdmVuZGVyYmx1c2g6IDE2NzczMzY1LFxuXHRsYXduZ3JlZW46IDgxOTA5NzYsXG5cdGxlbW9uY2hpZmZvbjogMTY3NzU4ODUsXG5cdGxpZ2h0Ymx1ZTogMTEzOTMyNTQsXG5cdGxpZ2h0Y29yYWw6IDE1NzYxNTM2LFxuXHRsaWdodGN5YW46IDE0NzQ1NTk5LFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogMTY0NDgyMTAsXG5cdGxpZ2h0Z3JheTogMTM4ODIzMjMsXG5cdGxpZ2h0Z3JlZW46IDk0OTgyNTYsXG5cdGxpZ2h0Z3JleTogMTM4ODIzMjMsXG5cdGxpZ2h0cGluazogMTY3NTg0NjUsXG5cdGxpZ2h0c2FsbW9uOiAxNjc1Mjc2Mixcblx0bGlnaHRzZWFncmVlbjogMjE0Mjg5MCxcblx0bGlnaHRza3libHVlOiA4OTAwMzQ2LFxuXHRsaWdodHNsYXRlZ3JheTogNzgzMzc1Myxcblx0bGlnaHRzbGF0ZWdyZXk6IDc4MzM3NTMsXG5cdGxpZ2h0c3RlZWxibHVlOiAxMTU4NDczNCxcblx0bGlnaHR5ZWxsb3c6IDE2Nzc3MTg0LFxuXHRsaW1lOiA2NTI4MCxcblx0bGltZWdyZWVuOiAzMzI5MzMwLFxuXHRsaW5lbjogMTY0NDU2NzAsXG5cdG1hZ2VudGE6IDE2NzExOTM1LFxuXHRtYXJvb246IDgzODg2MDgsXG5cdG1lZGl1bWFxdWFtYXJpbmU6IDY3MzczMjIsXG5cdG1lZGl1bWJsdWU6IDIwNSxcblx0bWVkaXVtb3JjaGlkOiAxMjIxMTY2Nyxcblx0bWVkaXVtcHVycGxlOiA5NjYyNjgzLFxuXHRtZWRpdW1zZWFncmVlbjogMzk3ODA5Nyxcblx0bWVkaXVtc2xhdGVibHVlOiA4MDg3NzkwLFxuXHRtZWRpdW1zcHJpbmdncmVlbjogNjQxNTQsXG5cdG1lZGl1bXR1cnF1b2lzZTogNDc3MjMwMCxcblx0bWVkaXVtdmlvbGV0cmVkOiAxMzA0NzE3Myxcblx0bWlkbmlnaHRibHVlOiAxNjQ0OTEyLFxuXHRtaW50Y3JlYW06IDE2MTIxODUwLFxuXHRtaXN0eXJvc2U6IDE2NzcwMjczLFxuXHRtb2NjYXNpbjogMTY3NzAyMjksXG5cdG5hdmFqb3doaXRlOiAxNjc2ODY4NSxcblx0bmF2eTogMTI4LFxuXHRvbGRsYWNlOiAxNjY0MzU1OCxcblx0b2xpdmU6IDg0MjEzNzYsXG5cdG9saXZlZHJhYjogNzA0ODczOSxcblx0b3JhbmdlOiAxNjc1MzkyMCxcblx0b3JhbmdlcmVkOiAxNjcyOTM0NCxcblx0b3JjaGlkOiAxNDMxNTczNCxcblx0cGFsZWdvbGRlbnJvZDogMTU2NTcxMzAsXG5cdHBhbGVncmVlbjogMTAwMjU4ODAsXG5cdHBhbGV0dXJxdW9pc2U6IDExNTI5OTY2LFxuXHRwYWxldmlvbGV0cmVkOiAxNDM4MTIwMyxcblx0cGFwYXlhd2hpcDogMTY3NzMwNzcsXG5cdHBlYWNocHVmZjogMTY3Njc2NzMsXG5cdHBlcnU6IDEzNDY4OTkxLFxuXHRwaW5rOiAxNjc2MTAzNSxcblx0cGx1bTogMTQ1MjQ2MzcsXG5cdHBvd2RlcmJsdWU6IDExNTkxOTEwLFxuXHRwdXJwbGU6IDgzODg3MzYsXG5cdHJlYmVjY2FwdXJwbGU6IDY2OTc4ODEsXG5cdHJlZDogMTY3MTE2ODAsXG5cdHJvc3licm93bjogMTIzNTc1MTksXG5cdHJveWFsYmx1ZTogNDI4Njk0NSxcblx0c2FkZGxlYnJvd246IDkxMjcxODcsXG5cdHNhbG1vbjogMTY0MTY4ODIsXG5cdHNhbmR5YnJvd246IDE2MDMyODY0LFxuXHRzZWFncmVlbjogMzA1MDMyNyxcblx0c2Vhc2hlbGw6IDE2Nzc0NjM4LFxuXHRzaWVubmE6IDEwNTA2Nzk3LFxuXHRzaWx2ZXI6IDEyNjMyMjU2LFxuXHRza3libHVlOiA4OTAwMzMxLFxuXHRzbGF0ZWJsdWU6IDY5NzAwNjEsXG5cdHNsYXRlZ3JheTogNzM3Mjk0NCxcblx0c2xhdGVncmV5OiA3MzcyOTQ0LFxuXHRzbm93OiAxNjc3NTkzMCxcblx0c3ByaW5nZ3JlZW46IDY1NDA3LFxuXHRzdGVlbGJsdWU6IDQ2MjA5ODAsXG5cdHRhbjogMTM4MDg3ODAsXG5cdHRlYWw6IDMyODk2LFxuXHR0aGlzdGxlOiAxNDIwNDg4OCxcblx0dG9tYXRvOiAxNjczNzA5NSxcblx0dHVycXVvaXNlOiA0MjUxODU2LFxuXHR2aW9sZXQ6IDE1NjMxMDg2LFxuXHR3aGVhdDogMTYxMTMzMzEsXG5cdHdoaXRlOiAxNjc3NzIxNSxcblx0d2hpdGVzbW9rZTogMTYxMTkyODUsXG5cdHllbGxvdzogMTY3NzY5NjAsXG5cdHllbGxvd2dyZWVuOiAxMDE0NTA3NFxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlTmFtZWQuanNcbnZhciBwYXJzZU5hbWVkID0gKGNvbG9yKSA9PiB7XG5cdHJldHVybiBwYXJzZU51bWJlcihuYW1lZFtjb2xvci50b0xvd2VyQ2FzZSgpXSwgNik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvcGFyc2VIZXguanNcbnZhciBoZXggPSAvXiM/KFswLTlhLWZdezh9fFswLTlhLWZdezZ9fFswLTlhLWZdezR9fFswLTlhLWZdezN9KSQvaTtcbnZhciBwYXJzZUhleCA9IChjb2xvcikgPT4ge1xuXHRsZXQgbWF0Y2g7XG5cdHJldHVybiAobWF0Y2ggPSBjb2xvci5tYXRjaChoZXgpKSA/IHBhcnNlTnVtYmVyKHBhcnNlSW50KG1hdGNoWzFdLCAxNiksIG1hdGNoWzFdLmxlbmd0aCkgOiB2b2lkIDA7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL3JlZ2V4LmpzXG52YXIgbnVtJDEgPSBcIihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVwiO1xudmFyIG51bV9ub25lID0gYCg/OiR7bnVtJDF9fG5vbmUpYDtcbnZhciBwZXIgPSBgJHtudW0kMX0lYDtcbnZhciBwZXJfbm9uZSA9IGAoPzoke251bSQxfSV8bm9uZSlgO1xudmFyIG51bV9wZXIgPSBgKD86JHtudW0kMX0lfCR7bnVtJDF9KWA7XG52YXIgbnVtX3Blcl9ub25lID0gYCg/OiR7bnVtJDF9JXwke251bSQxfXxub25lKWA7XG52YXIgaHVlJDEgPSBgKD86JHtudW0kMX0oZGVnfGdyYWR8cmFkfHR1cm4pfCR7bnVtJDF9KWA7XG52YXIgaHVlX25vbmUgPSBgKD86JHtudW0kMX0oZGVnfGdyYWR8cmFkfHR1cm4pfCR7bnVtJDF9fG5vbmUpYDtcbnZhciBjID0gYFxcXFxzKixcXFxccypgO1xudmFyIHJ4X251bV9wZXJfbm9uZSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBudW1fcGVyX25vbmUgKyBcIiRcIik7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVJnYkxlZ2FjeS5qc1xudmFyIHJnYl9udW1fb2xkID0gbmV3IFJlZ0V4cChgXnJnYmE/XFxcXChcXFxccyoke251bSQxfSR7Y30ke251bSQxfSR7Y30ke251bSQxfVxcXFxzKig/OixcXFxccyoke251bV9wZXJ9XFxcXHMqKT9cXFxcKSRgKTtcbnZhciByZ2JfcGVyX29sZCA9IG5ldyBSZWdFeHAoYF5yZ2JhP1xcXFwoXFxcXHMqJHtwZXJ9JHtjfSR7cGVyfSR7Y30ke3Blcn1cXFxccyooPzosXFxcXHMqJHtudW1fcGVyfVxcXFxzKik/XFxcXCkkYCk7XG52YXIgcGFyc2VSZ2JMZWdhY3kgPSAoY29sb3IpID0+IHtcblx0bGV0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRsZXQgbWF0Y2g7XG5cdGlmIChtYXRjaCA9IGNvbG9yLm1hdGNoKHJnYl9udW1fb2xkKSkge1xuXHRcdGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwKSByZXMuciA9IG1hdGNoWzFdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFsyXSAhPT0gdm9pZCAwKSByZXMuZyA9IG1hdGNoWzJdIC8gMjU1O1xuXHRcdGlmIChtYXRjaFszXSAhPT0gdm9pZCAwKSByZXMuYiA9IG1hdGNoWzNdIC8gMjU1O1xuXHR9IGVsc2UgaWYgKG1hdGNoID0gY29sb3IubWF0Y2gocmdiX3Blcl9vbGQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdICE9PSB2b2lkIDApIHJlcy5yID0gbWF0Y2hbMV0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5nID0gbWF0Y2hbMl0gLyAxMDA7XG5cdFx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5iID0gbWF0Y2hbM10gLyAxMDA7XG5cdH0gZWxzZSByZXR1cm47XG5cdGlmIChtYXRjaFs0XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBtYXRjaFs0XSAvIDEwMCkpO1xuXHRlbHNlIGlmIChtYXRjaFs1XSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCArbWF0Y2hbNV0pKTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL19wcmVwYXJlLmpzXG52YXIgcHJlcGFyZSA9IChjb2xvciwgbW9kZSkgPT4gY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR5cGVvZiBjb2xvciAhPT0gXCJvYmplY3RcIiA/IHBhcnNlKGNvbG9yKSA6IGNvbG9yLm1vZGUgIT09IHZvaWQgMCA/IGNvbG9yIDogbW9kZSA/IHtcblx0Li4uY29sb3IsXG5cdG1vZGVcbn0gOiB2b2lkIDA7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnZlcnRlci5qc1xudmFyIGNvbnZlcnRlciA9ICh0YXJnZXRfbW9kZSA9IFwicmdiXCIpID0+IChjb2xvcikgPT4gKGNvbG9yID0gcHJlcGFyZShjb2xvciwgdGFyZ2V0X21vZGUpKSAhPT0gdm9pZCAwID8gY29sb3IubW9kZSA9PT0gdGFyZ2V0X21vZGUgPyBjb2xvciA6IGNvbnZlcnRlcnNbY29sb3IubW9kZV1bdGFyZ2V0X21vZGVdID8gY29udmVydGVyc1tjb2xvci5tb2RlXVt0YXJnZXRfbW9kZV0oY29sb3IpIDogdGFyZ2V0X21vZGUgPT09IFwicmdiXCIgPyBjb252ZXJ0ZXJzW2NvbG9yLm1vZGVdLnJnYihjb2xvcikgOiBjb252ZXJ0ZXJzLnJnYlt0YXJnZXRfbW9kZV0oY29udmVydGVyc1tjb2xvci5tb2RlXS5yZ2IoY29sb3IpKSA6IHZvaWQgMDtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbW9kZXMuanNcbnZhciBjb252ZXJ0ZXJzID0ge307XG52YXIgbW9kZXMgPSB7fTtcbnZhciBwYXJzZXJzID0gW107XG52YXIgY29sb3JQcm9maWxlcyA9IHt9O1xudmFyIGlkZW50aXR5ID0gKHYpID0+IHY7XG52YXIgdXNlTW9kZSA9IChkZWZpbml0aW9uKSA9PiB7XG5cdGNvbnZlcnRlcnNbZGVmaW5pdGlvbi5tb2RlXSA9IHtcblx0XHQuLi5jb252ZXJ0ZXJzW2RlZmluaXRpb24ubW9kZV0sXG5cdFx0Li4uZGVmaW5pdGlvbi50b01vZGVcblx0fTtcblx0T2JqZWN0LmtleXMoZGVmaW5pdGlvbi5mcm9tTW9kZSB8fCB7fSkuZm9yRWFjaCgoaykgPT4ge1xuXHRcdGlmICghY29udmVydGVyc1trXSkgY29udmVydGVyc1trXSA9IHt9O1xuXHRcdGNvbnZlcnRlcnNba11bZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb24uZnJvbU1vZGVba107XG5cdH0pO1xuXHRpZiAoIWRlZmluaXRpb24ucmFuZ2VzKSBkZWZpbml0aW9uLnJhbmdlcyA9IHt9O1xuXHRpZiAoIWRlZmluaXRpb24uZGlmZmVyZW5jZSkgZGVmaW5pdGlvbi5kaWZmZXJlbmNlID0ge307XG5cdGRlZmluaXRpb24uY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuXHRcdGlmIChkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9PT0gdm9pZCAwKSBkZWZpbml0aW9uLnJhbmdlc1tjaGFubmVsXSA9IFswLCAxXTtcblx0XHRpZiAoIWRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0pIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBpbnRlcnBvbGF0b3IgZm9yOiAke2NoYW5uZWx9YCk7XG5cdFx0aWYgKHR5cGVvZiBkZWZpbml0aW9uLmludGVycG9sYXRlW2NoYW5uZWxdID09PSBcImZ1bmN0aW9uXCIpIGRlZmluaXRpb24uaW50ZXJwb2xhdGVbY2hhbm5lbF0gPSB7IHVzZTogZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXSB9O1xuXHRcdGlmICghZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCkgZGVmaW5pdGlvbi5pbnRlcnBvbGF0ZVtjaGFubmVsXS5maXh1cCA9IGlkZW50aXR5O1xuXHR9KTtcblx0bW9kZXNbZGVmaW5pdGlvbi5tb2RlXSA9IGRlZmluaXRpb247XG5cdChkZWZpbml0aW9uLnBhcnNlIHx8IFtdKS5mb3JFYWNoKChwYXJzZXIpID0+IHtcblx0XHR1c2VQYXJzZXIocGFyc2VyLCBkZWZpbml0aW9uLm1vZGUpO1xuXHR9KTtcblx0cmV0dXJuIGNvbnZlcnRlcihkZWZpbml0aW9uLm1vZGUpO1xufTtcbnZhciBnZXRNb2RlID0gKG1vZGUpID0+IG1vZGVzW21vZGVdO1xudmFyIHVzZVBhcnNlciA9IChwYXJzZXIsIG1vZGUpID0+IHtcblx0aWYgKHR5cGVvZiBwYXJzZXIgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoIW1vZGUpIHRocm93IG5ldyBFcnJvcihgJ21vZGUnIHJlcXVpcmVkIHdoZW4gJ3BhcnNlcicgaXMgYSBzdHJpbmdgKTtcblx0XHRjb2xvclByb2ZpbGVzW3BhcnNlcl0gPSBtb2RlO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJzZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGlmIChwYXJzZXJzLmluZGV4T2YocGFyc2VyKSA8IDApIHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wYXJzZS5qc1xudmFyIElkZW50U3RhcnRDb2RlUG9pbnQgPSAvW15cXHgwMC1cXHg3Rl18W2EtekEtWl9dLztcbnZhciBJZGVudENvZGVQb2ludCA9IC9bXlxceDAwLVxceDdGXXxbLVxcd10vO1xudmFyIFRvayA9IHtcblx0RnVuY3Rpb246IFwiZnVuY3Rpb25cIixcblx0SWRlbnQ6IFwiaWRlbnRcIixcblx0TnVtYmVyOiBcIm51bWJlclwiLFxuXHRQZXJjZW50YWdlOiBcInBlcmNlbnRhZ2VcIixcblx0UGFyZW5DbG9zZTogXCIpXCIsXG5cdE5vbmU6IFwibm9uZVwiLFxuXHRIdWU6IFwiaHVlXCIsXG5cdEFscGhhOiBcImFscGhhXCJcbn07XG52YXIgX2kgPSAwO1xuZnVuY3Rpb24gaXNfbnVtKGNoYXJzKSB7XG5cdGxldCBjaCA9IGNoYXJzW19pXTtcblx0bGV0IGNoMSA9IGNoYXJzW19pICsgMV07XG5cdGlmIChjaCA9PT0gXCItXCIgfHwgY2ggPT09IFwiK1wiKSByZXR1cm4gL1xcZC8udGVzdChjaDEpIHx8IGNoMSA9PT0gXCIuXCIgJiYgL1xcZC8udGVzdChjaGFyc1tfaSArIDJdKTtcblx0aWYgKGNoID09PSBcIi5cIikgcmV0dXJuIC9cXGQvLnRlc3QoY2gxKTtcblx0cmV0dXJuIC9cXGQvLnRlc3QoY2gpO1xufVxuZnVuY3Rpb24gaXNfaWRlbnQoY2hhcnMpIHtcblx0aWYgKF9pID49IGNoYXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRsZXQgY2ggPSBjaGFyc1tfaV07XG5cdGlmIChJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGNoID09PSBcIi1cIikge1xuXHRcdGlmIChjaGFycy5sZW5ndGggLSBfaSA8IDIpIHJldHVybiBmYWxzZTtcblx0XHRsZXQgY2gxID0gY2hhcnNbX2kgKyAxXTtcblx0XHRpZiAoY2gxID09PSBcIi1cIiB8fCBJZGVudFN0YXJ0Q29kZVBvaW50LnRlc3QoY2gxKSkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cbnZhciBodWVuaXRzID0ge1xuXHRkZWc6IDEsXG5cdHJhZDogMTgwIC8gTWF0aC5QSSxcblx0Z3JhZDogOSAvIDEwLFxuXHR0dXJuOiAzNjBcbn07XG5mdW5jdGlvbiBudW0oY2hhcnMpIHtcblx0bGV0IHZhbHVlID0gXCJcIjtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCItXCIgfHwgY2hhcnNbX2ldID09PSBcIitcIikgdmFsdWUgKz0gY2hhcnNbX2krK107XG5cdHZhbHVlICs9IGRpZ2l0cyhjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiLlwiICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0aWYgKGNoYXJzW19pXSA9PT0gXCJlXCIgfHwgY2hhcnNbX2ldID09PSBcIkVcIikge1xuXHRcdGlmICgoY2hhcnNbX2kgKyAxXSA9PT0gXCItXCIgfHwgY2hhcnNbX2kgKyAxXSA9PT0gXCIrXCIpICYmIC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAyXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgY2hhcnNbX2krK10gKyBkaWdpdHMoY2hhcnMpO1xuXHRcdGVsc2UgaWYgKC9cXGQvLnRlc3QoY2hhcnNbX2kgKyAxXSkpIHZhbHVlICs9IGNoYXJzW19pKytdICsgZGlnaXRzKGNoYXJzKTtcblx0fVxuXHRpZiAoaXNfaWRlbnQoY2hhcnMpKSB7XG5cdFx0bGV0IGlkID0gaWRlbnQoY2hhcnMpO1xuXHRcdGlmIChpZCA9PT0gXCJkZWdcIiB8fCBpZCA9PT0gXCJyYWRcIiB8fCBpZCA9PT0gXCJ0dXJuXCIgfHwgaWQgPT09IFwiZ3JhZFwiKSByZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkh1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSAqIGh1ZW5pdHNbaWRdXG5cdFx0fTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNoYXJzW19pXSA9PT0gXCIlXCIpIHtcblx0XHRfaSsrO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBUb2suUGVyY2VudGFnZSxcblx0XHRcdHZhbHVlOiArdmFsdWVcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLk51bWJlcixcblx0XHR2YWx1ZTogK3ZhbHVlXG5cdH07XG59XG5mdW5jdGlvbiBkaWdpdHMoY2hhcnMpIHtcblx0bGV0IHYgPSBcIlwiO1xuXHR3aGlsZSAoL1xcZC8udGVzdChjaGFyc1tfaV0pKSB2ICs9IGNoYXJzW19pKytdO1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGlkZW50KGNoYXJzKSB7XG5cdGxldCB2ID0gXCJcIjtcblx0d2hpbGUgKF9pIDwgY2hhcnMubGVuZ3RoICYmIElkZW50Q29kZVBvaW50LnRlc3QoY2hhcnNbX2ldKSkgdiArPSBjaGFyc1tfaSsrXTtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBpZGVudGxpa2UoY2hhcnMpIHtcblx0bGV0IHYgPSBpZGVudChjaGFycyk7XG5cdGlmIChjaGFyc1tfaV0gPT09IFwiKFwiKSB7XG5cdFx0X2krKztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogVG9rLkZ1bmN0aW9uLFxuXHRcdFx0dmFsdWU6IHZcblx0XHR9O1xuXHR9XG5cdGlmICh2ID09PSBcIm5vbmVcIikgcmV0dXJuIHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH07XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdHZhbHVlOiB2XG5cdH07XG59XG5mdW5jdGlvbiB0b2tlbml6ZShzdHIgPSBcIlwiKSB7XG5cdGxldCBjaGFycyA9IHN0ci50cmltKCk7XG5cdGxldCB0b2tlbnMgPSBbXTtcblx0bGV0IGNoO1xuXHRfaSA9IDA7XG5cdHdoaWxlIChfaSA8IGNoYXJzLmxlbmd0aCkge1xuXHRcdGNoID0gY2hhcnNbX2krK107XG5cdFx0aWYgKGNoID09PSBcIlxcblwiIHx8IGNoID09PSBcIlx0XCIgfHwgY2ggPT09IFwiIFwiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLFwiKSByZXR1cm47XG5cdFx0aWYgKGNoID09PSBcIilcIikge1xuXHRcdFx0dG9rZW5zLnB1c2goeyB0eXBlOiBUb2suUGFyZW5DbG9zZSB9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiK1wiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLVwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0dHlwZTogVG9rLklkZW50LFxuXHRcdFx0XHRcdHZhbHVlOiBpZGVudChjaGFycylcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiLlwiKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0aWYgKGlzX251bShjaGFycykpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoY2ggPT09IFwiL1wiKSB7XG5cdFx0XHR3aGlsZSAoX2kgPCBjaGFycy5sZW5ndGggJiYgKGNoYXJzW19pXSA9PT0gXCJcXG5cIiB8fCBjaGFyc1tfaV0gPT09IFwiXHRcIiB8fCBjaGFyc1tfaV0gPT09IFwiIFwiKSkgX2krKztcblx0XHRcdGxldCBhbHBoYTtcblx0XHRcdGlmIChpc19udW0oY2hhcnMpKSB7XG5cdFx0XHRcdGFscGhhID0gbnVtKGNoYXJzKTtcblx0XHRcdFx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5IdWUpIHtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR0eXBlOiBUb2suQWxwaGEsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWxwaGFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX2lkZW50KGNoYXJzKSkge1xuXHRcdFx0XHRpZiAoaWRlbnQoY2hhcnMpID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IFRvay5BbHBoYSxcblx0XHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFRvay5Ob25lLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdm9pZCAwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKC9cXGQvLnRlc3QoY2gpKSB7XG5cdFx0XHRfaS0tO1xuXHRcdFx0dG9rZW5zLnB1c2gobnVtKGNoYXJzKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKElkZW50U3RhcnRDb2RlUG9pbnQudGVzdChjaCkpIHtcblx0XHRcdF9pLS07XG5cdFx0XHR0b2tlbnMucHVzaChpZGVudGxpa2UoY2hhcnMpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0cmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHBhcnNlQ29sb3JTeW50YXgodG9rZW5zKSB7XG5cdHRva2Vucy5faSA9IDA7XG5cdGxldCB0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gVG9rLkZ1bmN0aW9uIHx8IHRva2VuLnZhbHVlICE9PSBcImNvbG9yXCIpIHJldHVybjtcblx0dG9rZW4gPSB0b2tlbnNbdG9rZW5zLl9pKytdO1xuXHRpZiAodG9rZW4udHlwZSAhPT0gVG9rLklkZW50KSByZXR1cm47XG5cdGNvbnN0IG1vZGUgPSBjb2xvclByb2ZpbGVzW3Rva2VuLnZhbHVlXTtcblx0aWYgKCFtb2RlKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZSB9O1xuXHRjb25zdCBjb29yZHMgPSBjb25zdW1lQ29vcmRzKHRva2VucywgZmFsc2UpO1xuXHRpZiAoIWNvb3JkcykgcmV0dXJuO1xuXHRjb25zdCBjaGFubmVscyA9IGdldE1vZGUobW9kZSkuY2hhbm5lbHM7XG5cdGZvciAobGV0IGlpID0gMCwgYywgY2g7IGlpIDwgY2hhbm5lbHMubGVuZ3RoOyBpaSsrKSB7XG5cdFx0YyA9IGNvb3Jkc1tpaV07XG5cdFx0Y2ggPSBjaGFubmVsc1tpaV07XG5cdFx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRcdHJlc1tjaF0gPSBjLnR5cGUgPT09IFRvay5OdW1iZXIgPyBjLnZhbHVlIDogYy52YWx1ZSAvIDEwMDtcblx0XHRcdGlmIChjaCA9PT0gXCJhbHBoYVwiKSByZXNbY2hdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmVzW2NoXSkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gY29uc3VtZUNvb3Jkcyh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0Y29uc3QgY29vcmRzID0gW107XG5cdGxldCB0b2tlbjtcblx0d2hpbGUgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHR0b2tlbiA9IHRva2Vuc1t0b2tlbnMuX2krK107XG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRvay5Ob25lIHx8IHRva2VuLnR5cGUgPT09IFRvay5OdW1iZXIgfHwgdG9rZW4udHlwZSA9PT0gVG9rLkFscGhhIHx8IHRva2VuLnR5cGUgPT09IFRvay5QZXJjZW50YWdlIHx8IGluY2x1ZGVIdWUgJiYgdG9rZW4udHlwZSA9PT0gVG9rLkh1ZSkge1xuXHRcdFx0Y29vcmRzLnB1c2godG9rZW4pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2suUGFyZW5DbG9zZSkge1xuXHRcdFx0aWYgKHRva2Vucy5faSA8IHRva2Vucy5sZW5ndGgpIHJldHVybjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPCAzIHx8IGNvb3Jkcy5sZW5ndGggPiA0KSByZXR1cm47XG5cdGlmIChjb29yZHMubGVuZ3RoID09PSA0KSB7XG5cdFx0aWYgKGNvb3Jkc1szXS50eXBlICE9PSBUb2suQWxwaGEpIHJldHVybjtcblx0XHRjb29yZHNbM10gPSBjb29yZHNbM10udmFsdWU7XG5cdH1cblx0aWYgKGNvb3Jkcy5sZW5ndGggPT09IDMpIGNvb3Jkcy5wdXNoKHtcblx0XHR0eXBlOiBUb2suTm9uZSxcblx0XHR2YWx1ZTogdm9pZCAwXG5cdH0pO1xuXHRyZXR1cm4gY29vcmRzLmV2ZXJ5KChjKSA9PiBjLnR5cGUgIT09IFRvay5BbHBoYSkgPyBjb29yZHMgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIGluY2x1ZGVIdWUpIHtcblx0dG9rZW5zLl9pID0gMDtcblx0bGV0IHRva2VuID0gdG9rZW5zW3Rva2Vucy5faSsrXTtcblx0aWYgKCF0b2tlbiB8fCB0b2tlbi50eXBlICE9PSBUb2suRnVuY3Rpb24pIHJldHVybjtcblx0bGV0IGNvb3JkcyA9IGNvbnN1bWVDb29yZHModG9rZW5zLCBpbmNsdWRlSHVlKTtcblx0aWYgKCFjb29yZHMpIHJldHVybjtcblx0Y29vcmRzLnVuc2hpZnQodG9rZW4udmFsdWUpO1xuXHRyZXR1cm4gY29vcmRzO1xufVxudmFyIHBhcnNlID0gKGNvbG9yKSA9PiB7XG5cdGlmICh0eXBlb2YgY29sb3IgIT09IFwic3RyaW5nXCIpIHJldHVybjtcblx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemUoY29sb3IpO1xuXHRjb25zdCBwYXJzZWQgPSB0b2tlbnMgPyBwYXJzZU1vZGVyblN5bnRheCh0b2tlbnMsIHRydWUpIDogdm9pZCAwO1xuXHRsZXQgcmVzdWx0ID0gdm9pZCAwO1xuXHRsZXQgaSA9IDA7XG5cdGxldCBsZW4gPSBwYXJzZXJzLmxlbmd0aDtcblx0d2hpbGUgKGkgPCBsZW4pIGlmICgocmVzdWx0ID0gcGFyc2Vyc1tpKytdKGNvbG9yLCBwYXJzZWQpKSAhPT0gdm9pZCAwKSByZXR1cm4gcmVzdWx0O1xuXHRyZXR1cm4gdG9rZW5zID8gcGFyc2VDb2xvclN5bnRheCh0b2tlbnMpIDogdm9pZCAwO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcmdiL3BhcnNlUmdiLmpzXG5mdW5jdGlvbiBwYXJzZVJnYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJyZ2JcIiAmJiBwYXJzZWRbMF0gIT09IFwicmdiYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJyZ2JcIiB9O1xuXHRjb25zdCBbLCByLCBnLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChyLnR5cGUgPT09IFRvay5IdWUgfHwgZy50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAoci50eXBlICE9PSBUb2suTm9uZSkgcmVzLnIgPSByLnR5cGUgPT09IFRvay5OdW1iZXIgPyByLnZhbHVlIC8gMjU1IDogci52YWx1ZSAvIDEwMDtcblx0aWYgKGcudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5nID0gZy50eXBlID09PSBUb2suTnVtYmVyID8gZy52YWx1ZSAvIDI1NSA6IGcudmFsdWUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgLyAyNTUgOiBiLnZhbHVlIC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3JnYi9wYXJzZVRyYW5zcGFyZW50LmpzXG52YXIgcGFyc2VUcmFuc3BhcmVudCA9IChjKSA9PiBjID09PSBcInRyYW5zcGFyZW50XCIgPyB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IDAsXG5cdGc6IDAsXG5cdGI6IDAsXG5cdGFscGhhOiAwXG59IDogdm9pZCAwO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbnRlcnBvbGF0ZS9sZXJwLmpzXG52YXIgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgdCAqIChiIC0gYSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL3BpZWNld2lzZS5qc1xudmFyIGdldF9jbGFzc2VzID0gKGFycikgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRsZXQgYSA9IGFycltpXTtcblx0XHRsZXQgYiA9IGFycltpICsgMV07XG5cdFx0aWYgKGEgPT09IHZvaWQgMCAmJiBiID09PSB2b2lkIDApIGNsYXNzZXMucHVzaCh2b2lkIDApO1xuXHRcdGVsc2UgaWYgKGEgIT09IHZvaWQgMCAmJiBiICE9PSB2b2lkIDApIGNsYXNzZXMucHVzaChbYSwgYl0pO1xuXHRcdGVsc2UgY2xhc3Nlcy5wdXNoKGEgIT09IHZvaWQgMCA/IFthLCBhXSA6IFtiLCBiXSk7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xudmFyIGludGVycG9sYXRvclBpZWNld2lzZSA9IChpbnRlcnBvbGF0b3IpID0+IChhcnIpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBnZXRfY2xhc3NlcyhhcnIpO1xuXHRyZXR1cm4gKHQpID0+IHtcblx0XHRsZXQgY2xzID0gdCAqIGNsYXNzZXMubGVuZ3RoO1xuXHRcdGxldCBpZHggPSB0ID49IDEgPyBjbGFzc2VzLmxlbmd0aCAtIDEgOiBNYXRoLm1heChNYXRoLmZsb29yKGNscyksIDApO1xuXHRcdGxldCBwYWlyID0gY2xhc3Nlc1tpZHhdO1xuXHRcdHJldHVybiBwYWlyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnRlcnBvbGF0b3IocGFpclswXSwgcGFpclsxXSwgY2xzIC0gaWR4KTtcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2ludGVycG9sYXRlL2xpbmVhci5qc1xudmFyIGludGVycG9sYXRvckxpbmVhciA9IGludGVycG9sYXRvclBpZWNld2lzZShsZXJwKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvYWxwaGEuanNcbnZhciBmaXh1cEFscGhhID0gKGFycikgPT4ge1xuXHRsZXQgc29tZV9kZWZpbmVkID0gZmFsc2U7XG5cdGxldCByZXMgPSBhcnIubWFwKCh2KSA9PiB7XG5cdFx0aWYgKHYgIT09IHZvaWQgMCkge1xuXHRcdFx0c29tZV9kZWZpbmVkID0gdHJ1ZTtcblx0XHRcdHJldHVybiB2O1xuXHRcdH1cblx0XHRyZXR1cm4gMTtcblx0fSk7XG5cdHJldHVybiBzb21lX2RlZmluZWQgPyByZXMgOiBhcnI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZ2IvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjcgPSB7XG5cdG1vZGU6IFwicmdiXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJyXCIsXG5cdFx0XCJnXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXG5cdFx0cGFyc2VSZ2IsXG5cdFx0cGFyc2VIZXgsXG5cdFx0cGFyc2VSZ2JMZWdhY3ksXG5cdFx0cGFyc2VOYW1lZCxcblx0XHRwYXJzZVRyYW5zcGFyZW50LFxuXHRcdFwic3JnYlwiXG5cdF0sXG5cdHNlcmlhbGl6ZTogXCJzcmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0cjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGdhbXV0OiB0cnVlLFxuXHR3aGl0ZToge1xuXHRcdHI6IDEsXG5cdFx0ZzogMSxcblx0XHRiOiAxXG5cdH0sXG5cdGJsYWNrOiB7XG5cdFx0cjogMCxcblx0XHRnOiAwLFxuXHRcdGI6IDBcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRBOThUb1h5ejY1LmpzXG52YXIgbGluZWFyaXplJDIgPSAodiA9IDApID0+IE1hdGgucG93KE1hdGguYWJzKHYpLCA1NjMgLyAyNTYpICogTWF0aC5zaWduKHYpO1xudmFyIGNvbnZlcnRBOThUb1h5ejY1ID0gKGE5OCkgPT4ge1xuXHRsZXQgciA9IGxpbmVhcml6ZSQyKGE5OC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUkMihhOTguZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDIoYTk4LmIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNTc2NjY5MDQyOTEwMTMwNSAqIHIgKyAuMTg1NTU4MjM3OTA2NTQ2MyAqIGcgKyAuMTg4MjI4NjQ2MjM0OTk0NyAqIGIsXG5cdFx0eTogLjI5NzM0NDk3NTI1MDUzNiAqIHIgKyAuNjI3MzYzNTY2MjU1NDY2MSAqIGcgKyAuMDc1MjkxNDU4NDkzOTk3OSAqIGIsXG5cdFx0ejogLjAyNzAzMTM2MTM4NjQxMjMgKiByICsgLjA3MDY4ODg1MjUzNTgyNzIgKiBnICsgLjk5MTMzNzUzNjgzNzYzODYgKiBiXG5cdH07XG5cdGlmIChhOTguYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYTk4LmFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvYTk4L2NvbnZlcnRYeXo2NVRvQTk4LmpzXG52YXIgZ2FtbWEkMiA9ICh2KSA9PiBNYXRoLnBvdyhNYXRoLmFicyh2KSwgMjU2IC8gNTYzKSAqIE1hdGguc2lnbih2KTtcbnZhciBjb252ZXJ0WHl6NjVUb0E5OCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImE5OFwiLFxuXHRcdHI6IGdhbW1hJDIoeCAqIDIuMDQxNTg3OTAzODEwNzQ2NSAtIHkgKiAuNTY1MDA2OTc0Mjc4ODU5NyAtIC4zNDQ3MzEzNTA3NzgzMjk3ICogeiksXG5cdFx0ZzogZ2FtbWEkMih4ICogLS45NjkyNDM2MzYyODA4Nzk4ICsgeSAqIDEuODc1OTY3NTAxNTA3NzIwNiArIC4wNDE1NTUwNTc0MDcxNzU2ICogeiksXG5cdFx0YjogZ2FtbWEkMih4ICogLjAxMzQ0NDI4MDYzMjAzMTIgLSB5ICogLjExODM2MjM5MjIzMTAxODQgKyAxLjAxNTE3NDk5NDM5MTIwNTggKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRSZ2JUb0xyZ2IuanNcbnZhciBmbiQzID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzIDw9IC4wNDA0NSkgcmV0dXJuIGMgLyAxMi45Mjtcblx0cmV0dXJuIChNYXRoLnNpZ24oYykgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbn07XG52YXIgY29udmVydFJnYlRvTHJnYiA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiBmbiQzKHIpLFxuXHRcdGc6IGZuJDMoZyksXG5cdFx0YjogZm4kMyhiKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0UmdiVG9YeXo2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDEyMzkwNzk5MjY1OTU5MyAqIHIgKyAuMzU3NTg0MzM5MzgzODc4ICogZyArIC4xODA0ODA3ODg0MDE4MzQzICogYixcblx0XHR5OiAuMjEyNjM5MDA1ODcxNTEwMiAqIHIgKyAuNzE1MTY4Njc4NzY3NzU2ICogZyArIC4wNzIxOTIzMTUzNjA3MzM3ICogYixcblx0XHR6OiAuMDE5MzMwODE4NzE1NTkxOCAqIHIgKyAuMTE5MTk0Nzc5Nzk0NjI2ICogZyArIC45NTA1MzIxNTIyNDk2NjA3ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2NvbnZlcnRMcmdiVG9SZ2IuanNcbnZhciBmbiQyID0gKGMgPSAwKSA9PiB7XG5cdGNvbnN0IGFicyA9IE1hdGguYWJzKGMpO1xuXHRpZiAoYWJzID4gLjAwMzEzMDgpIHJldHVybiAoTWF0aC5zaWduKGMpIHx8IDEpICogKDEuMDU1ICogTWF0aC5wb3coYWJzLCAxIC8gMi40KSAtIC4wNTUpO1xuXHRyZXR1cm4gYyAqIDEyLjkyO1xufTtcbnZhciBjb252ZXJ0THJnYlRvUmdiID0gKHsgciwgZywgYiwgYWxwaGEgfSwgbW9kZSA9IFwicmdiXCIpID0+IHtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdHI6IGZuJDIociksXG5cdFx0ZzogZm4kMihnKSxcblx0XHRiOiBmbiQyKGIpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejY1L2NvbnZlcnRYeXo2NVRvUmdiLmpzXG52YXIgY29udmVydFh5ejY1VG9SZ2IgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvUmdiKHtcblx0XHRyOiB4ICogMy4yNDA5Njk5NDE5MDQ1MjI2IC0geSAqIDEuNTM3MzgzMTc3NTcwMDk0IC0gLjQ5ODYxMDc2MDI5MzAwMzQgKiB6LFxuXHRcdGc6IHggKiAtLjk2OTI0MzYzNjI4MDg3OTYgKyB5ICogMS44NzU5Njc1MDE1MDc3MjA0ICsgLjA0MTU1NTA1NzQwNzE3NTYgKiB6LFxuXHRcdGI6IHggKiAuMDU1NjMwMDc5Njk2OTkzNiAtIHkgKiAuMjAzOTc2OTU4ODg4OTc2NSArIDEuMDU2OTcxNTE0MjQyODc4NCAqIHpcblx0fSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2E5OC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyNiA9IHtcblx0Li4uZGVmaW5pdGlvbiQyNyxcblx0bW9kZTogXCJhOThcIixcblx0cGFyc2U6IFtcImE5OC1yZ2JcIl0sXG5cdHNlcmlhbGl6ZTogXCJhOTgtcmdiXCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvQTk4KGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvQTk4XG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1JnYihjb252ZXJ0QTk4VG9YeXo2NShjb2xvcikpLFxuXHRcdHh5ejY1OiBjb252ZXJ0QTk4VG9YeXo2NVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL25vcm1hbGl6ZUh1ZS5qc1xudmFyIG5vcm1hbGl6ZUh1ZSA9IChodWUpID0+IChodWUgPSBodWUgJSAzNjApIDwgMCA/IGh1ZSArIDM2MCA6IGh1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZml4dXAvaHVlLmpzXG52YXIgaHVlID0gKGh1ZXMsIGZuKSA9PiB7XG5cdHJldHVybiBodWVzLm1hcCgoaHVlLCBpZHgsIGFycikgPT4ge1xuXHRcdGlmIChodWUgPT09IHZvaWQgMCkgcmV0dXJuIGh1ZTtcblx0XHRsZXQgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUh1ZShodWUpO1xuXHRcdGlmIChpZHggPT09IDAgfHwgaHVlc1tpZHggLSAxXSA9PT0gdm9pZCAwKSByZXR1cm4gbm9ybWFsaXplZDtcblx0XHRyZXR1cm4gZm4obm9ybWFsaXplZCAtIG5vcm1hbGl6ZUh1ZShhcnJbaWR4IC0gMV0pKTtcblx0fSkucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcblx0XHRpZiAoIWFjYy5sZW5ndGggfHwgY3VyciA9PT0gdm9pZCAwIHx8IGFjY1thY2MubGVuZ3RoIC0gMV0gPT09IHZvaWQgMCkge1xuXHRcdFx0YWNjLnB1c2goY3Vycik7XG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH1cblx0XHRhY2MucHVzaChjdXJyICsgYWNjW2FjYy5sZW5ndGggLSAxXSk7XG5cdFx0cmV0dXJuIGFjYztcblx0fSwgW10pO1xufTtcbnZhciBmaXh1cEh1ZVNob3J0ZXIgPSAoYXJyKSA9PiBodWUoYXJyLCAoZCkgPT4gTWF0aC5hYnMoZCkgPD0gMTgwID8gZCA6IGQgLSAzNjAgKiBNYXRoLnNpZ24oZCkpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29uc3RhbnRzLmpzXG52YXIgTSA9IFtcblx0LS4xNDg2MSxcblx0MS43ODI3Nyxcblx0LS4yOTIyNyxcblx0LS45MDY0OSxcblx0MS45NzI5NCxcblx0MFxuXTtcbnZhciBkZWdUb1JhZCA9IE1hdGguUEkgLyAxODA7XG52YXIgcmFkVG9EZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydFJnYlRvQ3ViZWhlbGl4LmpzXG52YXIgREUgPSBNWzNdICogTVs0XTtcbnZhciBCRSA9IE1bMV0gKiBNWzRdO1xudmFyIEJDQUQgPSBNWzFdICogTVsyXSAtIE1bMF0gKiBNWzNdO1xudmFyIGNvbnZlcnRSZ2JUb0N1YmVoZWxpeCA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGwgPSAoQkNBRCAqIGIgKyByICogREUgLSBnICogQkUpIC8gKEJDQUQgKyBERSAtIEJFKTtcblx0bGV0IHggPSBiIC0gbDtcblx0bGV0IHkgPSAoTVs0XSAqIChnIC0gbCkgLSBNWzJdICogeCkgLyBNWzNdO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdFx0bCxcblx0XHRzOiBsID09PSAwIHx8IGwgPT09IDEgPyB2b2lkIDAgOiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgLyAoTVs0XSAqIGwgKiAoMSAtIGwpKVxuXHR9O1xuXHRpZiAocmVzLnMpIHJlcy5oID0gTWF0aC5hdGFuMih5LCB4KSAqIHJhZFRvRGVnIC0gMTIwO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvY29udmVydEN1YmVoZWxpeFRvUmdiLmpzXG52YXIgY29udmVydEN1YmVoZWxpeFRvUmdiID0gKHsgaCwgcywgbCwgYWxwaGEgfSkgPT4ge1xuXHRsZXQgcmVzID0geyBtb2RlOiBcInJnYlwiIH07XG5cdGggPSAoaCA9PT0gdm9pZCAwID8gMCA6IGggKyAxMjApICogZGVnVG9SYWQ7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRsZXQgYW1wID0gcyA9PT0gdm9pZCAwID8gMCA6IHMgKiBsICogKDEgLSBsKTtcblx0bGV0IGNvc2ggPSBNYXRoLmNvcyhoKTtcblx0bGV0IHNpbmggPSBNYXRoLnNpbihoKTtcblx0cmVzLnIgPSBsICsgYW1wICogKE1bMF0gKiBjb3NoICsgTVsxXSAqIHNpbmgpO1xuXHRyZXMuZyA9IGwgKyBhbXAgKiAoTVsyXSAqIGNvc2ggKyBNWzNdICogc2luaCk7XG5cdHJlcy5iID0gbCArIGFtcCAqIChNWzRdICogY29zaCArIE1bNV0gKiBzaW5oKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGlmZmVyZW5jZS5qc1xudmFyIGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5zIHx8ICFzbXAucykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLnMgKiBzbXAucykgKiBkSDtcbn07XG52YXIgZGlmZmVyZW5jZUh1ZU5haXZlID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDApIHJldHVybiAwO1xuXHRsZXQgc3RkX2ggPSBub3JtYWxpemVIdWUoc3RkLmgpO1xuXHRsZXQgc21wX2ggPSBub3JtYWxpemVIdWUoc21wLmgpO1xuXHRpZiAoTWF0aC5hYnMoc21wX2ggLSBzdGRfaCkgPiAxODApIHJldHVybiBzdGRfaCAtIChzbXBfaCAtIDM2MCAqIE1hdGguc2lnbihzbXBfaCAtIHN0ZF9oKSk7XG5cdHJldHVybiBzbXBfaCAtIHN0ZF9oO1xufTtcbnZhciBkaWZmZXJlbmNlSHVlQ2hyb21hID0gKHN0ZCwgc21wKSA9PiB7XG5cdGlmIChzdGQuaCA9PT0gdm9pZCAwIHx8IHNtcC5oID09PSB2b2lkIDAgfHwgIXN0ZC5jIHx8ICFzbXAuYykgcmV0dXJuIDA7XG5cdGxldCBzdGRfaCA9IG5vcm1hbGl6ZUh1ZShzdGQuaCk7XG5cdGxldCBzbXBfaCA9IG5vcm1hbGl6ZUh1ZShzbXAuaCk7XG5cdGxldCBkSCA9IE1hdGguc2luKChzbXBfaCAtIHN0ZF9oICsgMzYwKSAvIDIgKiBNYXRoLlBJIC8gMTgwKTtcblx0cmV0dXJuIDIgKiBNYXRoLnNxcnQoc3RkLmMgKiBzbXAuYykgKiBkSDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2F2ZXJhZ2UuanNcbnZhciBhdmVyYWdlQW5nbGUgPSAodmFsKSA9PiB7XG5cdGxldCBzdW0gPSB2YWwucmVkdWNlKChzdW0sIHZhbCkgPT4ge1xuXHRcdGlmICh2YWwgIT09IHZvaWQgMCkge1xuXHRcdFx0bGV0IHJhZCA9IHZhbCAqIE1hdGguUEkgLyAxODA7XG5cdFx0XHRzdW0uc2luICs9IE1hdGguc2luKHJhZCk7XG5cdFx0XHRzdW0uY29zICs9IE1hdGguY29zKHJhZCk7XG5cdFx0fVxuXHRcdHJldHVybiBzdW07XG5cdH0sIHtcblx0XHRzaW46IDAsXG5cdFx0Y29zOiAwXG5cdH0pO1xuXHRsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHN1bS5zaW4sIHN1bS5jb3MpICogMTgwIC8gTWF0aC5QSTtcblx0cmV0dXJuIGFuZ2xlIDwgMCA/IDM2MCArIGFuZ2xlIDogYW5nbGU7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9jdWJlaGVsaXgvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjUgPSB7XG5cdG1vZGU6IFwiY3ViZWhlbGl4XCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWN1YmVoZWxpeFwiXSxcblx0c2VyaWFsaXplOiBcIi0tY3ViZWhlbGl4XCIsXG5cdHJhbmdlczoge1xuXHRcdGg6IFswLCAzNjBdLFxuXHRcdHM6IFswLCA0LjYxNF0sXG5cdFx0bDogWzAsIDFdXG5cdH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvQ3ViZWhlbGl4IH0sXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRDdWJlaGVsaXhUb1JnYiB9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExhYlRvTGNoLmpzXG52YXIgY29udmVydExhYlRvTGNoID0gKHsgbCwgYSwgYiwgYWxwaGEgfSwgbW9kZSA9IFwibGNoXCIpID0+IHtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlLFxuXHRcdGwsXG5cdFx0Y1xuXHR9O1xuXHRpZiAoYykgcmVzLmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2gvY29udmVydExjaFRvTGFiLmpzXG52YXIgY29udmVydExjaFRvTGFiID0gKHsgbCwgYywgaCwgYWxwaGEgfSwgbW9kZSA9IFwibGFiXCIpID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZSxcblx0XHRsLFxuXHRcdGE6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHRiOiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvY29uc3RhbnRzLmpzXG52YXIgayQyID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSQyID0gTWF0aC5wb3coNiwgMykgLyBNYXRoLnBvdygyOSwgMyk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2NvbnN0YW50cy5qc1xudmFyIEQ1MCA9IHtcblx0WDogLjM0NTcgLyAuMzU4NSxcblx0WTogMSxcblx0WjogLjI5NTggLyAuMzU4NVxufTtcbnZhciBENjUgPSB7XG5cdFg6IC4zMTI3IC8gLjMyOSxcblx0WTogMSxcblx0WjogLjM1ODMgLyAuMzI5XG59O1xudmFyIGskMSA9IE1hdGgucG93KDI5LCAzKSAvIE1hdGgucG93KDMsIDMpO1xudmFyIGUkMSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1h5ejY1LmpzXG52YXIgZm4kMSA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUkMiA/IE1hdGgucG93KHYsIDMpIDogKDExNiAqIHYgLSAxNikgLyBrJDI7XG52YXIgY29udmVydExhYjY1VG9YeXo2NSA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiBmbiQxKGZ4KSAqIEQ2NS5YLFxuXHRcdHk6IGZuJDEoZnkpICogRDY1LlksXG5cdFx0ejogZm4kMShmeikgKiBENjUuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0TGFiNjVUb1JnYi5qc1xudmFyIGNvbnZlcnRMYWI2NVRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydExhYjY1VG9YeXo2NShsYWIpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiNjUvY29udmVydFh5ejY1VG9MYWI2NS5qc1xudmFyIGYkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlJDIgPyBNYXRoLmNicnQodmFsdWUpIDogKGskMiAqIHZhbHVlICsgMTYpIC8gMTE2O1xudmFyIGNvbnZlcnRYeXo2NVRvTGFiNjUgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYkMSh4IC8gRDY1LlgpO1xuXHRsZXQgZjEgPSBmJDEoeSAvIEQ2NS5ZKTtcblx0bGV0IGYyID0gZiQxKHogLyBENjUuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWI2NVwiLFxuXHRcdGw6IDExNiAqIGYxIC0gMTYsXG5cdFx0YTogNTAwICogKGYwIC0gZjEpLFxuXHRcdGI6IDIwMCAqIChmMSAtIGYyKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWI2NS9jb252ZXJ0UmdiVG9MYWI2NS5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYjY1ID0gKHJnYikgPT4ge1xuXHRsZXQgcmVzID0gY29udmVydFh5ejY1VG9MYWI2NShjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb25zdGFudHMuanNcbnZhciDOuCA9IDI2IC8gMTgwICogTWF0aC5QSTtcbnZhciBjb3POuCA9IE1hdGguY29zKM64KTtcbnZhciBzaW7OuCA9IE1hdGguc2luKM64KTtcbnZhciBmYWN0b3IgPSAxMDAgLyBNYXRoLmxvZygxMzkgLyAxMDApO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2NvbnZlcnREbGNoVG9MYWI2NS5qc1xudmFyIGNvbnZlcnREbGNoVG9MYWI2NSA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChjID09PSB2b2lkIDApIGMgPSAwO1xuXHRpZiAoaCA9PT0gdm9pZCAwKSBoID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxhYjY1XCIsXG5cdFx0bDogKE1hdGguZXhwKGwgKiAxIC8gZmFjdG9yKSAtIDEpIC8gLjAwMzlcblx0fTtcblx0bGV0IEcgPSAoTWF0aC5leHAoLjA0MzUgKiBjICogMSAqIDEpIC0gMSkgLyAuMDc1O1xuXHRsZXQgZSA9IEcgKiBNYXRoLmNvcyhoIC8gMTgwICogTWF0aC5QSSAtIM64KTtcblx0bGV0IGYgPSBHICogTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkgLSDOuCk7XG5cdHJlcy5hID0gZSAqIGNvc864IC0gZiAvIC44MyAqIHNpbs64O1xuXHRyZXMuYiA9IGUgKiBzaW7OuCArIGYgLyAuODMgKiBjb3POuDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZGxjaC9jb252ZXJ0TGFiNjVUb0RsY2guanNcbnZhciBjb252ZXJ0TGFiNjVUb0RsY2ggPSAoeyBsLCBhLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChsID09PSB2b2lkIDApIGwgPSAwO1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBlID0gYSAqIGNvc864ICsgYiAqIHNpbs64O1xuXHRsZXQgZiA9IC44MyAqIChiICogY29zzrggLSBhICogc2luzrgpO1xuXHRsZXQgRyA9IE1hdGguc3FydChlICogZSArIGYgKiBmKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImRsY2hcIixcblx0XHRsOiBmYWN0b3IgLyAxICogTWF0aC5sb2coMSArIC4wMDM5ICogbCksXG5cdFx0YzogTWF0aC5sb2coMSArIC4wNzUgKiBHKSAvICguMDQzNSAqIDEgKiAxKVxuXHR9O1xuXHRpZiAocmVzLmMpIHJlcy5oID0gbm9ybWFsaXplSHVlKChNYXRoLmF0YW4yKGYsIGUpICsgzrgpIC8gTWF0aC5QSSAqIDE4MCk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2RsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGNvbnZlcnREbGFiVG9MYWI2NSA9IChjKSA9PiBjb252ZXJ0RGxjaFRvTGFiNjUoY29udmVydExhYlRvTGNoKGMsIFwiZGxjaFwiKSk7XG52YXIgY29udmVydExhYjY1VG9EbGFiID0gKGMpID0+IGNvbnZlcnRMY2hUb0xhYihjb252ZXJ0TGFiNjVUb0RsY2goYyksIFwiZGxhYlwiKTtcbnZhciBkZWZpbml0aW9uJDI0ID0ge1xuXHRtb2RlOiBcImRsYWJcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxhYlwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsYWJUb0xhYjY1LFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGFiVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxhYihjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy00MC4wOSwgNDUuNTAxXSxcblx0XHRiOiBbLTQwLjQ2OSwgNDQuMzQ0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9kbGNoL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIzID0ge1xuXHRtb2RlOiBcImRsY2hcIixcblx0cGFyc2U6IFtcIi0tZGluOTlvLWxjaFwiXSxcblx0c2VyaWFsaXplOiBcIi0tZGluOTlvLWxjaFwiLFxuXHR0b01vZGU6IHtcblx0XHRsYWI2NTogY29udmVydERsY2hUb0xhYjY1LFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJkbGFiXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvUmdiKGNvbnZlcnREbGNoVG9MYWI2NShjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRsYWI2NTogY29udmVydExhYjY1VG9EbGNoLFxuXHRcdGRsYWI6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJkbGNoXCIpLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRMYWI2NVRvRGxjaChjb252ZXJ0UmdiVG9MYWI2NShjKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcImNcIixcblx0XHRcImhcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YzogWzAsIDUxLjQ4NF0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvY29udmVydEhzaVRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHNpVG9SZ2IoeyBoLCBzLCBpLCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzICogKDEgLSBmKSAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGI6IGkgKiAoMSAtIHMpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxICsgcyAqICgzIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0YjogaSAqICgxIC0gcylcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRnOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogaSAqICgxIC0gcyksXG5cdFx0XHRcdGc6IGkgKiAoMSArIHMgKiAoMyAqICgxIC0gZikgLyAoMiAtIGYpIC0gMSkpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgLyAoMiAtIGYpIC0gMSkpXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKSxcblx0XHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRcdGI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSlcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IGkgKiAoMSArIHMgKiAoMyAvICgyIC0gZikgLSAxKSksXG5cdFx0XHRcdGc6IGkgKiAoMSAtIHMpLFxuXHRcdFx0XHRiOiBpICogKDEgKyBzICogKDMgKiAoMSAtIGYpIC8gKDIgLSBmKSAtIDEpKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IGkgKiAoMSAtIHMpLFxuXHRcdFx0ZzogaSAqICgxIC0gcyksXG5cdFx0XHRiOiBpICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzaS9jb252ZXJ0UmdiVG9Ic2kuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzaSh7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHNpXCIsXG5cdFx0czogciArIGcgKyBiID09PSAwID8gMCA6IDEgLSAzICogbSAvIChyICsgZyArIGIpLFxuXHRcdGk6IChyICsgZyArIGIpIC8gM1xuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2kvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjIgPSB7XG5cdG1vZGU6IFwiaHNpXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc2lUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc2lcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzaVwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzaSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwiaVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9jb252ZXJ0SHNsVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRIc2xUb1JnYih7IGgsIHMsIGwsIGFscGhhIH0pIHtcblx0aCA9IG5vcm1hbGl6ZUh1ZShoICE9PSB2b2lkIDAgPyBoIDogMCk7XG5cdGlmIChzID09PSB2b2lkIDApIHMgPSAwO1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0bGV0IG0xID0gbCArIHMgKiAobCA8IC41ID8gbCA6IDEgLSBsKTtcblx0bGV0IG0yID0gbTEgLSAobTEgLSBsKSAqIDIgKiBNYXRoLmFicyhoIC8gNjAgJSAyIC0gMSk7XG5cdGxldCByZXM7XG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoIC8gNjApKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiBtMSxcblx0XHRcdFx0ZzogbTIsXG5cdFx0XHRcdGI6IDIgKiBsIC0gbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiBtMSxcblx0XHRcdFx0YjogMiAqIGwgLSBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdFx0ZzogbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmVzID0ge1xuXHRcdFx0XHRyOiAyICogbCAtIG0xLFxuXHRcdFx0XHRnOiBtMixcblx0XHRcdFx0YjogbTFcblx0XHRcdH07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXMgPSB7XG5cdFx0XHRcdHI6IG0yLFxuXHRcdFx0XHRnOiAyICogbCAtIG0xLFxuXHRcdFx0XHRiOiBtMVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogbTEsXG5cdFx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRcdGI6IG0yXG5cdFx0XHR9O1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogcmVzID0ge1xuXHRcdFx0cjogMiAqIGwgLSBtMSxcblx0XHRcdGc6IDIgKiBsIC0gbTEsXG5cdFx0XHRiOiAyICogbCAtIG0xXG5cdFx0fTtcblx0fVxuXHRyZXMubW9kZSA9IFwicmdiXCI7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL2NvbnZlcnRSZ2JUb0hzbC5qc1xuZnVuY3Rpb24gY29udmVydFJnYlRvSHNsKHsgciwgZywgYiwgYWxwaGEgfSkge1xuXHRpZiAociA9PT0gdm9pZCAwKSByID0gMDtcblx0aWYgKGcgPT09IHZvaWQgMCkgZyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTSA9IE1hdGgubWF4KHIsIGcsIGIpLCBtID0gTWF0aC5taW4ociwgZywgYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJoc2xcIixcblx0XHRzOiBNID09PSBtID8gMCA6IChNIC0gbSkgLyAoMSAtIE1hdGguYWJzKE0gKyBtIC0gMSkpLFxuXHRcdGw6IC41ICogKE0gKyBtKVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy91dGlsL2h1ZS5qc1xudmFyIGh1ZVRvRGVnID0gKHZhbCwgdW5pdCkgPT4ge1xuXHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRjYXNlIFwiZGVnXCI6IHJldHVybiArdmFsO1xuXHRcdGNhc2UgXCJyYWRcIjogcmV0dXJuIHZhbCAvIE1hdGguUEkgKiAxODA7XG5cdFx0Y2FzZSBcImdyYWRcIjogcmV0dXJuIHZhbCAvIDEwICogOTtcblx0XHRjYXNlIFwidHVyblwiOiByZXR1cm4gdmFsICogMzYwO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc2wvcGFyc2VIc2xMZWdhY3kuanNcbnZhciBoc2xfb2xkID0gbmV3IFJlZ0V4cChgXmhzbGE/XFxcXChcXFxccyoke2h1ZSQxfSR7Y30ke3Blcn0ke2N9JHtwZXJ9XFxcXHMqKD86LFxcXFxzKiR7bnVtX3Blcn1cXFxccyopP1xcXFwpJGApO1xudmFyIHBhcnNlSHNsTGVnYWN5ID0gKGNvbG9yKSA9PiB7XG5cdGxldCBtYXRjaCA9IGNvbG9yLm1hdGNoKGhzbF9vbGQpO1xuXHRpZiAoIW1hdGNoKSByZXR1cm47XG5cdGxldCByZXMgPSB7IG1vZGU6IFwiaHNsXCIgfTtcblx0aWYgKG1hdGNoWzNdICE9PSB2b2lkIDApIHJlcy5oID0gK21hdGNoWzNdO1xuXHRlbHNlIGlmIChtYXRjaFsxXSAhPT0gdm9pZCAwICYmIG1hdGNoWzJdICE9PSB2b2lkIDApIHJlcy5oID0gaHVlVG9EZWcobWF0Y2hbMV0sIG1hdGNoWzJdKTtcblx0aWYgKG1hdGNoWzRdICE9PSB2b2lkIDApIHJlcy5zID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNF0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzVdICE9PSB2b2lkIDApIHJlcy5sID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgbWF0Y2hbNV0gLyAxMDApLCAxKTtcblx0aWYgKG1hdGNoWzZdICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG1hdGNoWzZdIC8gMTAwKSk7XG5cdGVsc2UgaWYgKG1hdGNoWzddICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICttYXRjaFs3XSkpO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHNsL3BhcnNlSHNsLmpzXG5mdW5jdGlvbiBwYXJzZUhzbChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJoc2xcIiAmJiBwYXJzZWRbMF0gIT09IFwiaHNsYVwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJoc2xcIiB9O1xuXHRjb25zdCBbLCBoLCBzLCBsLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKHMudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAocy50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLnMgPSBzLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRcdHJlcy5sID0gbC52YWx1ZSAvIDEwMDtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzbC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQyMSA9IHtcblx0bW9kZTogXCJoc2xcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydEhzbFRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvSHNsIH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczogeyBoOiBbMCwgMzYwXSB9LFxuXHRnYW11dDogXCJyZ2JcIixcblx0cGFyc2U6IFtwYXJzZUhzbCwgcGFyc2VIc2xMZWdhY3ldLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgaHNsKCR7Yy5oICE9PSB2b2lkIDAgPyBjLmggOiBcIm5vbmVcIn0gJHtjLnMgIT09IHZvaWQgMCA/IGMucyAqIDEwMCArIFwiJVwiIDogXCJub25lXCJ9ICR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0czogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlU2F0dXJhdGlvbiB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvY29udmVydEhzdlRvUmdiLmpzXG5mdW5jdGlvbiBjb252ZXJ0SHN2VG9SZ2IoeyBoLCBzLCB2LCBhbHBoYSB9KSB7XG5cdGggPSBub3JtYWxpemVIdWUoaCAhPT0gdm9pZCAwID8gaCA6IDApO1xuXHRpZiAocyA9PT0gdm9pZCAwKSBzID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBmID0gTWF0aC5hYnMoaCAvIDYwICUgMiAtIDEpO1xuXHRsZXQgcmVzO1xuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaCAvIDYwKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2LFxuXHRcdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYsXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyksXG5cdFx0XHRcdGc6IHYgKiAoMSAtIHMgKiBmKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdiAqICgxIC0gcyAqIGYpLFxuXHRcdFx0XHRnOiB2ICogKDEgLSBzKSxcblx0XHRcdFx0YjogdlxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJlcyA9IHtcblx0XHRcdFx0cjogdixcblx0XHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRcdGI6IHYgKiAoMSAtIHMgKiBmKVxuXHRcdFx0fTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6IHJlcyA9IHtcblx0XHRcdHI6IHYgKiAoMSAtIHMpLFxuXHRcdFx0ZzogdiAqICgxIC0gcyksXG5cdFx0XHRiOiB2ICogKDEgLSBzKVxuXHRcdH07XG5cdH1cblx0cmVzLm1vZGUgPSBcInJnYlwiO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hzdi9jb252ZXJ0UmdiVG9Ic3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0hzdih7IHIsIGcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IE0gPSBNYXRoLm1heChyLCBnLCBiKSwgbSA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiaHN2XCIsXG5cdFx0czogTSA9PT0gMCA/IDAgOiAxIC0gbSAvIE0sXG5cdFx0djogTVxuXHR9O1xuXHRpZiAoTSAtIG0gIT09IDApIHJlcy5oID0gKE0gPT09IHIgPyAoZyAtIGIpIC8gKE0gLSBtKSArIChnIDwgYikgKiA2IDogTSA9PT0gZyA/IChiIC0gcikgLyAoTSAtIG0pICsgMiA6IChyIC0gZykgLyAoTSAtIG0pICsgNCkgKiA2MDtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9oc3YvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMjAgPSB7XG5cdG1vZGU6IFwiaHN2XCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRIc3ZUb1JnYiB9LFxuXHRwYXJzZTogW1wiLS1oc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWhzdlwiLFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0hzdiB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwiaFwiLFxuXHRcdFwic1wiLFxuXHRcdFwidlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHsgaDogWzAsIDM2MF0gfSxcblx0Z2FtdXQ6IFwicmdiXCIsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aDoge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBIdWVTaG9ydGVyXG5cdFx0fSxcblx0XHRzOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9LFxuXHRkaWZmZXJlbmNlOiB7IGg6IGRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0SHdiVG9SZ2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRId2JUb1JnYih7IGgsIHcsIGIsIGFscGhhIH0pIHtcblx0aWYgKHcgPT09IHZvaWQgMCkgdyA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRpZiAodyArIGIgPiAxKSB7XG5cdFx0bGV0IHMgPSB3ICsgYjtcblx0XHR3IC89IHM7XG5cdFx0YiAvPSBzO1xuXHR9XG5cdHJldHVybiBjb252ZXJ0SHN2VG9SZ2Ioe1xuXHRcdGgsXG5cdFx0czogYiA9PT0gMSA/IDEgOiAxIC0gdyAvICgxIC0gYiksXG5cdFx0djogMSAtIGIsXG5cdFx0YWxwaGFcblx0fSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9jb252ZXJ0UmdiVG9Id2IuanNcbmZ1bmN0aW9uIGNvbnZlcnRSZ2JUb0h3YihyZ2JhKSB7XG5cdGxldCBoc3YgPSBjb252ZXJ0UmdiVG9Ic3YocmdiYSk7XG5cdGlmIChoc3YgPT09IHZvaWQgMCkgcmV0dXJuIHZvaWQgMDtcblx0bGV0IHMgPSBoc3YucyAhPT0gdm9pZCAwID8gaHN2LnMgOiAwO1xuXHRsZXQgdiA9IGhzdi52ICE9PSB2b2lkIDAgPyBoc3YudiA6IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJod2JcIixcblx0XHR3OiAoMSAtIHMpICogdixcblx0XHRiOiAxIC0gdlxuXHR9O1xuXHRpZiAoaHN2LmggIT09IHZvaWQgMCkgcmVzLmggPSBoc3YuaDtcblx0aWYgKGhzdi5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBoc3YuYWxwaGE7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2h3Yi9wYXJzZUh3Yi5qc1xuZnVuY3Rpb24gUGFyc2VId2IoY29sb3IsIHBhcnNlZCkge1xuXHRpZiAoIXBhcnNlZCB8fCBwYXJzZWRbMF0gIT09IFwiaHdiXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcImh3YlwiIH07XG5cdGNvbnN0IFssIGgsIHcsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAody50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmICh3LnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMudyA9IHcudmFsdWUgLyAxMDA7XG5cdH1cblx0aWYgKGIudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdFx0cmVzLmIgPSBiLnZhbHVlIC8gMTAwO1xuXHR9XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaHdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE5ID0ge1xuXHRtb2RlOiBcImh3YlwiLFxuXHR0b01vZGU6IHsgcmdiOiBjb252ZXJ0SHdiVG9SZ2IgfSxcblx0ZnJvbU1vZGU6IHsgcmdiOiBjb252ZXJ0UmdiVG9Id2IgfSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcIndcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cmFuZ2VzOiB7IGg6IFswLCAzNjBdIH0sXG5cdGdhbXV0OiBcInJnYlwiLFxuXHRwYXJzZTogW1BhcnNlSHdiXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGh3Yigke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9ICR7Yy53ICE9PSB2b2lkIDAgPyBjLncgKiAxMDAgKyBcIiVcIiA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iICogMTAwICsgXCIlXCIgOiBcIm5vbmVcIn0ke2MuYWxwaGEgPCAxID8gYCAvICR7Yy5hbHBoYX1gIDogXCJcIn0pYCxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdHc6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZU5haXZlIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2hkci90cmFuc2Zlci5qc1xudmFyIE0xID0gLjE1OTMwMTc1NzgxMjU7XG52YXIgTTIgPSA3OC44NDM3NTtcbnZhciBDMSA9IC44MzU5Mzc1O1xudmFyIEMyID0gMTguODUxNTYyNTtcbnZhciBDMyA9IDE4LjY4NzU7XG5mdW5jdGlvbiB0cmFuc2ZlclBxRGVjb2RlKHYpIHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0Y29uc3QgYyA9IE1hdGgucG93KHYsIDEgLyBNMik7XG5cdHJldHVybiAxZTQgKiBNYXRoLnBvdyhNYXRoLm1heCgwLCBjIC0gQzEpIC8gKEMyIC0gQzMgKiBjKSwgMSAvIE0xKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZmVyUHFFbmNvZGUodikge1xuXHRpZiAodiA8IDApIHJldHVybiAwO1xuXHRjb25zdCBjID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiBjKSAvICgxICsgQzMgKiBjKSwgTTIpO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pdHAvY29udmVydEl0cFRvWHl6NjUuanNcbnZhciB0b1JlbCA9IChjKSA9PiBNYXRoLm1heChjIC8gMjAzLCAwKTtcbnZhciBjb252ZXJ0SXRwVG9YeXo2NSA9ICh7IGksIHQsIHAsIGFscGhhIH0pID0+IHtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmICh0ID09PSB2b2lkIDApIHQgPSAwO1xuXHRpZiAocCA9PT0gdm9pZCAwKSBwID0gMDtcblx0Y29uc3QgbCA9IHRyYW5zZmVyUHFEZWNvZGUoaSArIC4wMDg2MDkwMzcwMzc5MzI3NjEgKiB0ICsgLjExMTAyOTYyNTAwMzAyNTkzICogcCk7XG5cdGNvbnN0IG0gPSB0cmFuc2ZlclBxRGVjb2RlKGkgLSAuMDA4NjA5MDM3MDM3OTMyNzUgKiB0IC0gLjExMTAyOTYyNTAwMzAyNTk5ICogcCk7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRGVjb2RlKGkgKyAuNTYwMDMxMzM1NzEwNjc5MSAqIHQgLSAuMzIwNjI3MTc0OTg3MzE4ODUgKiBwKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiB0b1JlbCgyLjA3MDE1MjIxODM4OTQyMiAqIGwgLSAxLjMyNjM0NzMzODk2NzE1NTYgKiBtICsgLjIwNjY1MTA0NzYyOTQwNTEgKiBzKSxcblx0XHR5OiB0b1JlbCguMzY0NzM4NTIwOTc0ODA3NCAqIGwgKyAuNjgwNTY2MDI0OTQ3MjI3ICogbSAtIC4wNDUzMDQ1NDU5MjIwMzQ2ICogcyksXG5cdFx0ejogdG9SZWwoLS4wNDk3NDcyMDc1MzU4MTIgKiBsIC0gLjA0OTI2MDk2NjY5NjYxMzggKiBtICsgMS4xODgwNjU5MjQ5OTIzMDQyICogcylcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvaXRwL2NvbnZlcnRYeXo2NVRvSXRwLmpzXG52YXIgdG9BYnMgPSAoYyA9IDApID0+IE1hdGgubWF4KGMgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSXRwID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRjb25zdCBhYnNYID0gdG9BYnMoeCk7XG5cdGNvbnN0IGFic1kgPSB0b0Ficyh5KTtcblx0Y29uc3QgYWJzWiA9IHRvQWJzKHopO1xuXHRjb25zdCBsID0gdHJhbnNmZXJQcUVuY29kZSguMzU5MjgzMjU5MDEyMTIxNyAqIGFic1ggKyAuNjk3NjA1MTE0Nzc3OTUwMiAqIGFic1kgLSAuMDM1ODkxNTkzMjMyMDI4OSAqIGFic1opO1xuXHRjb25zdCBtID0gdHJhbnNmZXJQcUVuY29kZSgtLjE5MjA4MDg0NjM3MDQ5OTUgKiBhYnNYICsgMS4xMDA0NzY3OTcwMzc0MzIzICogYWJzWSArIC4wNzUzNzQ4NjU4NTE5MTE4ICogYWJzWik7XG5cdGNvbnN0IHMgPSB0cmFuc2ZlclBxRW5jb2RlKC4wMDcwNzk3ODQ0NjA3NDc3ICogYWJzWCArIC4wNzQ4Mzk2NjYyMTg2MzY2ICogYWJzWSArIC44NDMzMjY1NDUzODk4NzY1ICogYWJzWik7XG5cdGNvbnN0IHJlcyA9IHtcblx0XHRtb2RlOiBcIml0cFwiLFxuXHRcdGk6IC41ICogbCArIC41ICogbSxcblx0XHR0OiAxLjYxMzc2OTUzMTI1ICogbCAtIDMuMzIzNDg2MzI4MTI1ICogbSArIDEuNzA5NzE2Nzk2ODc1ICogcyxcblx0XHRwOiA0LjM3ODE3MzgyODEyNSAqIGwgLSA0LjI0NTYwNTQ2ODc1ICogbSAtIC4xMzI1NjgzNTkzNzUgKiBzXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2l0cC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxOCA9IHtcblx0bW9kZTogXCJpdHBcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImlcIixcblx0XHRcInRcIixcblx0XHRcInBcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0taWN0Y3BcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWljdGNwXCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0SXRwVG9YeXo2NSxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEl0cFRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0l0cCxcblx0XHRyZ2I6IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9JdHAoY29udmVydFJnYlRvWHl6NjUoY29sb3IpKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbMCwgLjU4MV0sXG5cdFx0dDogWy0uMzY5LCAuMjcyXSxcblx0XHRwOiBbLS4xNjQsIC4zMzFdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHQ6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRwOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0WHl6NjVUb0phYi5qc1xudmFyIHAkMSA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCQxID0gMTYyOTU0OTk1MzI4MjE1NjVlLTI3O1xudmFyIGphYlBxRW5jb2RlID0gKHYpID0+IHtcblx0aWYgKHYgPCAwKSByZXR1cm4gMDtcblx0bGV0IHZuID0gTWF0aC5wb3codiAvIDFlNCwgTTEpO1xuXHRyZXR1cm4gTWF0aC5wb3coKEMxICsgQzIgKiB2bikgLyAoMSArIEMzICogdm4pLCBwJDEpO1xufTtcbnZhciBhYnMgPSAodiA9IDApID0+IE1hdGgubWF4KHYgKiAyMDMsIDApO1xudmFyIGNvbnZlcnRYeXo2NVRvSmFiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHR4ID0gYWJzKHgpO1xuXHR5ID0gYWJzKHkpO1xuXHR6ID0gYWJzKHopO1xuXHRsZXQgeHAgPSAxLjE1ICogeCAtIC4xNSAqIHo7XG5cdGxldCB5cCA9IC42NiAqIHkgKyAuMzQgKiB4O1xuXHRsZXQgbCA9IGphYlBxRW5jb2RlKC40MTQ3ODk3MiAqIHhwICsgLjU3OTk5OSAqIHlwICsgLjAxNDY0OCAqIHopO1xuXHRsZXQgbSA9IGphYlBxRW5jb2RlKC0uMjAxNTEgKiB4cCArIDEuMTIwNjQ5ICogeXAgKyAuMDUzMTAwOCAqIHopO1xuXHRsZXQgcyA9IGphYlBxRW5jb2RlKC0uMDE2NjAwOCAqIHhwICsgLjI2NDggKiB5cCArIC42Njg0Nzk5ICogeik7XG5cdGxldCBpID0gKGwgKyBtKSAvIDI7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJqYWJcIixcblx0XHRqOiAuNDQgKiBpIC8gKDEgLSAuNTYgKiBpKSAtIGQwJDEsXG5cdFx0YTogMy41MjQgKiBsIC0gNC4wNjY3MDggKiBtICsgLjU0MjcwOCAqIHMsXG5cdFx0YjogLjE5OTA3NiAqIGwgKyAxLjA5Njc5OSAqIG0gLSAxLjI5NTg3NSAqIHNcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1h5ejY1LmpzXG52YXIgcCA9IDEzNC4wMzQzNzQ5OTk5OTk5ODtcbnZhciBkMCA9IDE2Mjk1NDk5NTMyODIxNTY1ZS0yNztcbnZhciBqYWJQcURlY29kZSA9ICh2KSA9PiB7XG5cdGlmICh2IDwgMCkgcmV0dXJuIDA7XG5cdGxldCB2cCA9IE1hdGgucG93KHYsIDEgLyBwKTtcblx0cmV0dXJuIDFlNCAqIE1hdGgucG93KChDMSAtIHZwKSAvIChDMyAqIHZwIC0gQzIpLCAxIC8gTTEpO1xufTtcbnZhciByZWwgPSAodikgPT4gdiAvIDIwMztcbnZhciBjb252ZXJ0SmFiVG9YeXo2NSA9ICh7IGosIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGogPT09IHZvaWQgMCkgaiA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGkgPSAoaiArIGQwKSAvICguNDQgKyAuNTYgKiAoaiArIGQwKSk7XG5cdGxldCBsID0gamFiUHFEZWNvZGUoaSArIC4xMzg2MDUwNCAqIGEgKyAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBtID0gamFiUHFEZWNvZGUoaSAtIC4xMzg2MDUwNCAqIGEgLSAuMDU4MDQ3MzE2ICogYik7XG5cdGxldCBzID0gamFiUHFEZWNvZGUoaSAtIC4wOTYwMTkyNDIgKiBhIC0gLjgxMTg5MTkgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogcmVsKDEuNjYxMzczMDI0NjUyMTc0ICogbCAtIC45MTQ1MjMwODEzMDQzNDggKiBtICsgLjIzMTM2MjA4MTczOTEzMDQ1ICogcyksXG5cdFx0eTogcmVsKC0uMzI1MDc1ODYxMTg0NDUzMyAqIGwgKyAxLjU3MTg0NzAyNjczMjU0MyAqIG0gLSAuMjE4MjUzODM0NTMyMjc5MjggKiBzKSxcblx0XHR6OiByZWwoLS4wOTA5ODI4MTEgKiBsIC0gLjMxMjcyODI5ICogbSArIDEuNTIyNzY2NiAqIHMpXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2phYi9jb252ZXJ0UmdiVG9KYWIuanNcbnZhciBjb252ZXJ0UmdiVG9KYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0WHl6NjVUb0phYihjb252ZXJ0UmdiVG9YeXo2NShyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2NvbnZlcnRKYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRKYWJUb1JnYiA9IChjb2xvcikgPT4gY29udmVydFh5ejY1VG9SZ2IoY29udmVydEphYlRvWHl6NjUoY29sb3IpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvamFiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE3ID0ge1xuXHRtb2RlOiBcImphYlwiLFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiYVwiLFxuXHRcdFwiYlwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS1qemF6YnpcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWp6YXpielwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvSmFiLFxuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0phYlxuXHR9LFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRKYWJUb1JnYixcblx0XHR4eXo2NTogY29udmVydEphYlRvWHl6NjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0ajogWzAsIC4yMjJdLFxuXHRcdGE6IFstLjEwOSwgLjEyOV0sXG5cdFx0YjogWy0uMTg1LCAuMTM0XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YjogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9qY2gvY29udmVydEphYlRvSmNoLmpzXG52YXIgY29udmVydEphYlRvSmNoID0gKHsgaiwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoYSA9PT0gdm9pZCAwKSBhID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamNoXCIsXG5cdFx0aixcblx0XHRjXG5cdH07XG5cdGlmIChjKSByZXMuaCA9IG5vcm1hbGl6ZUh1ZShNYXRoLmF0YW4yKGIsIGEpICogMTgwIC8gTWF0aC5QSSk7XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9jb252ZXJ0SmNoVG9KYWIuanNcbnZhciBjb252ZXJ0SmNoVG9KYWIgPSAoeyBqLCBjLCBoLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChoID09PSB2b2lkIDApIGggPSAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwiamFiXCIsXG5cdFx0aixcblx0XHRhOiBjID8gYyAqIE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKSA6IDAsXG5cdFx0YjogYyA/IGMgKiBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSkgOiAwXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2pjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNiA9IHtcblx0bW9kZTogXCJqY2hcIixcblx0cGFyc2U6IFtcIi0tanpjemh6XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1qemN6aHpcIixcblx0dG9Nb2RlOiB7XG5cdFx0amFiOiBjb252ZXJ0SmNoVG9KYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydEphYlRvUmdiKGNvbnZlcnRKY2hUb0phYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0SmFiVG9KY2goY29udmVydFJnYlRvSmFiKGMpKSxcblx0XHRqYWI6IGNvbnZlcnRKYWJUb0pjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwialwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRqOiBbMCwgLjIyMV0sXG5cdFx0YzogWzAsIC4xOV0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRqOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb25zdGFudHMuanNcbnZhciBrID0gTWF0aC5wb3coMjksIDMpIC8gTWF0aC5wb3coMywgMyk7XG52YXIgZSA9IE1hdGgucG93KDYsIDMpIC8gTWF0aC5wb3coMjksIDMpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvWHl6NTAuanNcbnZhciBmbiA9ICh2KSA9PiBNYXRoLnBvdyh2LCAzKSA+IGUgPyBNYXRoLnBvdyh2LCAzKSA6ICgxMTYgKiB2IC0gMTYpIC8gaztcbnZhciBjb252ZXJ0TGFiVG9YeXo1MCA9ICh7IGwsIGEsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKGwgPT09IHZvaWQgMCkgbCA9IDA7XG5cdGlmIChhID09PSB2b2lkIDApIGEgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0bGV0IGZ5ID0gKGwgKyAxNikgLyAxMTY7XG5cdGxldCBmeCA9IGEgLyA1MDAgKyBmeTtcblx0bGV0IGZ6ID0gZnkgLSBiIC8gMjAwO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NTBcIixcblx0XHR4OiBmbihmeCkgKiBENTAuWCxcblx0XHR5OiBmbihmeSkgKiBENTAuWSxcblx0XHR6OiBmbihmeikgKiBENTAuWlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo1MC9jb252ZXJ0WHl6NTBUb1JnYi5qc1xudmFyIGNvbnZlcnRYeXo1MFRvUmdiID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDMuMTM0MTM1OTU2OTk1ODcwNyAtIHkgKiAxLjYxNzM4NjMzMjE2MTI1MzggLSAuNDkwNjYxOTQ2MDA4MzUzMiAqIHosXG5cdFx0ZzogeCAqIC0uOTc4Nzk1NTAyOTEyMDg5ICsgeSAqIDEuOTE2MjU0NTY3MjU5NTI0ICsgLjAzMzQ0MjczMTE2MTMxOTQ5ICogeixcblx0XHRiOiB4ICogLjA3MTk1NTM3OTg4NDExNjc3IC0geSAqIC4yMjg5NzY4MjY0MTU4MzIyICsgMS40MDUzODYwNTgzMjQxMjUgKiB6XG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvY29udmVydExhYlRvUmdiLmpzXG52YXIgY29udmVydExhYlRvUmdiID0gKGxhYikgPT4gY29udmVydFh5ejUwVG9SZ2IoY29udmVydExhYlRvWHl6NTAobGFiKSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2NvbnZlcnRSZ2JUb1h5ejUwLmpzXG52YXIgY29udmVydFJnYlRvWHl6NTAgPSAocmdiKSA9PiB7XG5cdGxldCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKHJnYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC40MzYwNjU3NDI4MjQ4MTEgKiByICsgLjM4NTE1MTQ2ODgzMzc5MTIgKiBnICsgLjE0MzA3ODQ1NDQyMjY0MTk3ICogYixcblx0XHR5OiAuMjIyNDkzMTkxNzU2MjM3MDIgKiByICsgLjcxNjg4NzA1MzgyMzg4MjMgKiBnICsgLjA2MDYxOTc5MDUzNjE2NTM3ICogYixcblx0XHR6OiAuMDEzOTIzOTA0NTAwOTQzNDY1ICogciArIC4wOTcwODEyODU2NjU3NDYzNCAqIGcgKyAuNzE0MDk5MzU4NDAwNTE1NSAqIGJcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRYeXo1MFRvTGFiLmpzXG52YXIgZiA9ICh2YWx1ZSkgPT4gdmFsdWUgPiBlID8gTWF0aC5jYnJ0KHZhbHVlKSA6IChrICogdmFsdWUgKyAxNikgLyAxMTY7XG52YXIgY29udmVydFh5ejUwVG9MYWIgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBmMCA9IGYoeCAvIEQ1MC5YKTtcblx0bGV0IGYxID0gZih5IC8gRDUwLlkpO1xuXHRsZXQgZjIgPSBmKHogLyBENTAuWik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsYWJcIixcblx0XHRsOiAxMTYgKiBmMSAtIDE2LFxuXHRcdGE6IDUwMCAqIChmMCAtIGYxKSxcblx0XHRiOiAyMDAgKiAoZjEgLSBmMilcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGFiL2NvbnZlcnRSZ2JUb0xhYi5qc1xudmFyIGNvbnZlcnRSZ2JUb0xhYiA9IChyZ2IpID0+IHtcblx0bGV0IHJlcyA9IGNvbnZlcnRYeXo1MFRvTGFiKGNvbnZlcnRSZ2JUb1h5ejUwKHJnYikpO1xuXHRpZiAocmdiLnIgPT09IHJnYi5iICYmIHJnYi5iID09PSByZ2IuZykgcmVzLmEgPSByZXMuYiA9IDA7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sYWIvcGFyc2VMYWIuanNcbmZ1bmN0aW9uIHBhcnNlTGFiKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcImxhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJsYWJcIiB9O1xuXHRjb25zdCBbLCBsLCBhLCBiLCBhbHBoYV0gPSBwYXJzZWQ7XG5cdGlmIChsLnR5cGUgPT09IFRvay5IdWUgfHwgYS50eXBlID09PSBUb2suSHVlIHx8IGIudHlwZSA9PT0gVG9rLkh1ZSkgcmV0dXJuO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkgcmVzLmwgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsLnZhbHVlKSwgMTAwKTtcblx0aWYgKGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hID0gYS50eXBlID09PSBUb2suTnVtYmVyID8gYS52YWx1ZSA6IGEudmFsdWUgKiAxMjUgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogMTI1IC8gMTAwO1xuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYi9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxNSA9IHtcblx0bW9kZTogXCJsYWJcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRMYWJUb1h5ejUwLFxuXHRcdHJnYjogY29udmVydExhYlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTGFiLFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiXG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJhXCIsXG5cdFx0XCJiXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxMDBdLFxuXHRcdGE6IFstMTI1LCAxMjVdLFxuXHRcdGI6IFstMTI1LCAxMjVdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VMYWJdLFxuXHRzZXJpYWxpemU6IChjKSA9PiBgbGFiKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmEgIT09IHZvaWQgMCA/IGMuYSA6IFwibm9uZVwifSAke2MuYiAhPT0gdm9pZCAwID8gYy5iIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdGludGVycG9sYXRlOiB7XG5cdFx0bDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xhYjY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDE0ID0ge1xuXHQuLi5kZWZpbml0aW9uJDE1LFxuXHRtb2RlOiBcImxhYjY1XCIsXG5cdHBhcnNlOiBbXCItLWxhYi1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxhYi1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NjU6IGNvbnZlcnRMYWI2NVRvWHl6NjUsXG5cdFx0cmdiOiBjb252ZXJ0TGFiNjVUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb0xhYjY1LFxuXHRcdHJnYjogY29udmVydFJnYlRvTGFiNjVcblx0fSxcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0YTogWy0xMjUsIDEyNV0sXG5cdFx0YjogWy0xMjUsIDEyNV1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNoL3BhcnNlTGNoLmpzXG5mdW5jdGlvbiBwYXJzZUxjaChjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJsY2hcIikgcmV0dXJuO1xuXHRjb25zdCByZXMgPSB7IG1vZGU6IFwibGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudmFsdWUpLCAxMDApO1xuXHR9XG5cdGlmIChjLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYyA9IE1hdGgubWF4KDAsIGMudHlwZSA9PT0gVG9rLk51bWJlciA/IGMudmFsdWUgOiBjLnZhbHVlICogMTUwIC8gMTAwKTtcblx0aWYgKGgudHlwZSAhPT0gVG9rLk5vbmUpIHtcblx0XHRpZiAoaC50eXBlID09PSBUb2suUGVyY2VudGFnZSkgcmV0dXJuO1xuXHRcdHJlcy5oID0gaC52YWx1ZTtcblx0fVxuXHRpZiAoYWxwaGEudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhLnR5cGUgPT09IFRvay5OdW1iZXIgPyBhbHBoYS52YWx1ZSA6IGFscGhhLnZhbHVlIC8gMTAwKSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQxMyA9IHtcblx0bW9kZTogXCJsY2hcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiOiBjb252ZXJ0TGNoVG9MYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvUmdiKGNvbnZlcnRMY2hUb0xhYihjKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiKGMpKSxcblx0XHRsYWI6IGNvbnZlcnRMYWJUb0xjaFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwibFwiLFxuXHRcdFwiY1wiLFxuXHRcdFwiaFwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9LFxuXHRwYXJzZTogW3BhcnNlTGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYGxjaCgke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5jICE9PSB2b2lkIDAgPyBjLmMgOiBcIm5vbmVcIn0gJHtjLmggIT09IHZvaWQgMCA/IGMuaCA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgLFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGg6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwSHVlU2hvcnRlclxuXHRcdH0sXG5cdFx0YzogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fSxcblx0ZGlmZmVyZW5jZTogeyBoOiBkaWZmZXJlbmNlSHVlQ2hyb21hIH0sXG5cdGF2ZXJhZ2U6IHsgaDogYXZlcmFnZUFuZ2xlIH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL2xjaDY1L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEyID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcImxjaDY1XCIsXG5cdHBhcnNlOiBbXCItLWxjaC1kNjVcIl0sXG5cdHNlcmlhbGl6ZTogXCItLWxjaC1kNjVcIixcblx0dG9Nb2RlOiB7XG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSxcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiNjVUb1JnYihjb252ZXJ0TGNoVG9MYWIoYywgXCJsYWI2NVwiKSlcblx0fSxcblx0ZnJvbU1vZGU6IHtcblx0XHRyZ2I6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goY29udmVydFJnYlRvTGFiNjUoYyksIFwibGNoNjVcIiksXG5cdFx0bGFiNjU6IChjKSA9PiBjb252ZXJ0TGFiVG9MY2goYywgXCJsY2g2NVwiKVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTUwXSxcblx0XHRoOiBbMCwgMzYwXVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9jb252ZXJ0THV2VG9MY2h1di5qc1xudmFyIGNvbnZlcnRMdXZUb0xjaHV2ID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAodSA9PT0gdm9pZCAwKSB1ID0gMDtcblx0aWYgKHYgPT09IHZvaWQgMCkgdiA9IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KHUgKiB1ICsgdiAqIHYpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibGNodXZcIixcblx0XHRsLFxuXHRcdGNcblx0fTtcblx0aWYgKGMpIHJlcy5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIodiwgdSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbGNodXYvY29udmVydExjaHV2VG9MdXYuanNcbnZhciBjb252ZXJ0TGNodXZUb0x1diA9ICh7IGwsIGMsIGgsIGFscGhhIH0pID0+IHtcblx0aWYgKGggPT09IHZvaWQgMCkgaCA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJsdXZcIixcblx0XHRsLFxuXHRcdHU6IGMgPyBjICogTWF0aC5jb3MoaCAvIDE4MCAqIE1hdGguUEkpIDogMCxcblx0XHR2OiBjID8gYyAqIE1hdGguc2luKGggLyAxODAgKiBNYXRoLlBJKSA6IDBcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRYeXo1MFRvTHV2LmpzXG52YXIgdV9mbiQxID0gKHgsIHksIHopID0+IDQgKiB4IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdl9mbiQxID0gKHgsIHksIHopID0+IDkgKiB5IC8gKHggKyAxNSAqIHkgKyAzICogeik7XG52YXIgdW4kMSA9IHVfZm4kMShENTAuWCwgRDUwLlksIEQ1MC5aKTtcbnZhciB2biQxID0gdl9mbiQxKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGxfZm4gPSAodmFsdWUpID0+IHZhbHVlIDw9IGUgPyBrICogdmFsdWUgOiAxMTYgKiBNYXRoLmNicnQodmFsdWUpIC0gMTY7XG52YXIgY29udmVydFh5ejUwVG9MdXYgPSAoeyB4LCB5LCB6LCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCBsID0gbF9mbih5IC8gRDUwLlkpO1xuXHRsZXQgdSA9IHVfZm4kMSh4LCB5LCB6KTtcblx0bGV0IHYgPSB2X2ZuJDEoeCwgeSwgeik7XG5cdGlmICghaXNGaW5pdGUodSkgfHwgIWlzRmluaXRlKHYpKSBsID0gdSA9IHYgPSAwO1xuXHRlbHNlIHtcblx0XHR1ID0gMTMgKiBsICogKHUgLSB1biQxKTtcblx0XHR2ID0gMTMgKiBsICogKHYgLSB2biQxKTtcblx0fVxuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwibHV2XCIsXG5cdFx0bCxcblx0XHR1LFxuXHRcdHZcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2NvbnZlcnRMdXZUb1h5ejUwLmpzXG52YXIgdV9mbiA9ICh4LCB5LCB6KSA9PiA0ICogeCAvICh4ICsgMTUgKiB5ICsgMyAqIHopO1xudmFyIHZfZm4gPSAoeCwgeSwgeikgPT4gOSAqIHkgLyAoeCArIDE1ICogeSArIDMgKiB6KTtcbnZhciB1biA9IHVfZm4oRDUwLlgsIEQ1MC5ZLCBENTAuWik7XG52YXIgdm4gPSB2X2ZuKEQ1MC5YLCBENTAuWSwgRDUwLlopO1xudmFyIGNvbnZlcnRMdXZUb1h5ejUwID0gKHsgbCwgdSwgdiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGwgPT09IDApIHJldHVybiB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH07XG5cdGlmICh1ID09PSB2b2lkIDApIHUgPSAwO1xuXHRpZiAodiA9PT0gdm9pZCAwKSB2ID0gMDtcblx0bGV0IHVwID0gdSAvICgxMyAqIGwpICsgdW47XG5cdGxldCB2cCA9IHYgLyAoMTMgKiBsKSArIHZuO1xuXHRsZXQgeSA9IEQ1MC5ZICogKGwgPD0gOCA/IGwgLyBrIDogTWF0aC5wb3coKGwgKyAxNikgLyAxMTYsIDMpKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejUwXCIsXG5cdFx0eDogeSAqICg5ICogdXApIC8gKDQgKiB2cCksXG5cdFx0eSxcblx0XHR6OiB5ICogKDEyIC0gMyAqIHVwIC0gMjAgKiB2cCkgLyAoNCAqIHZwKVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9sY2h1di9kZWZpbml0aW9uLmpzXG52YXIgY29udmVydFJnYlRvTGNodXYgPSAocmdiKSA9PiBjb252ZXJ0THV2VG9MY2h1dihjb252ZXJ0WHl6NTBUb0x1dihjb252ZXJ0UmdiVG9YeXo1MChyZ2IpKSk7XG52YXIgY29udmVydExjaHV2VG9SZ2IgPSAobGNodXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGNvbnZlcnRMY2h1dlRvTHV2KGxjaHV2KSkpO1xudmFyIGRlZmluaXRpb24kMTEgPSB7XG5cdG1vZGU6IFwibGNodXZcIixcblx0dG9Nb2RlOiB7XG5cdFx0bHV2OiBjb252ZXJ0TGNodXZUb0x1dixcblx0XHRyZ2I6IGNvbnZlcnRMY2h1dlRvUmdiXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9MY2h1dixcblx0XHRsdXY6IGNvbnZlcnRMdXZUb0xjaHV2XG5cdH0sXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJsXCIsXG5cdFx0XCJjXCIsXG5cdFx0XCJoXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLWxjaHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sY2h1dlwiLFxuXHRyYW5nZXM6IHtcblx0XHRsOiBbMCwgMTAwXSxcblx0XHRjOiBbMCwgMTc2Ljk1Nl0sXG5cdFx0aDogWzAsIDM2MF1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHRoOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEh1ZVNob3J0ZXJcblx0XHR9LFxuXHRcdGM6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRsOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH0sXG5cdGRpZmZlcmVuY2U6IHsgaDogZGlmZmVyZW5jZUh1ZUNocm9tYSB9LFxuXHRhdmVyYWdlOiB7IGg6IGF2ZXJhZ2VBbmdsZSB9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9scmdiL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDEwID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcImxyZ2JcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydExyZ2JUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb0xyZ2IgfSxcblx0cGFyc2U6IFtcInNyZ2ItbGluZWFyXCJdLFxuXHRzZXJpYWxpemU6IFwic3JnYi1saW5lYXJcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvbHV2L2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDkgPSB7XG5cdG1vZGU6IFwibHV2XCIsXG5cdHRvTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0THV2VG9YeXo1MCxcblx0XHRyZ2I6IChsdXYpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRMdXZUb1h5ejUwKGx1dikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRYeXo1MFRvTHV2LFxuXHRcdHJnYjogKHJnYikgPT4gY29udmVydFh5ejUwVG9MdXYoY29udmVydFJnYlRvWHl6NTAocmdiKSlcblx0fSxcblx0Y2hhbm5lbHM6IFtcblx0XHRcImxcIixcblx0XHRcInVcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tbHV2XCJdLFxuXHRzZXJpYWxpemU6IFwiLS1sdXZcIixcblx0cmFuZ2VzOiB7XG5cdFx0bDogWzAsIDEwMF0sXG5cdFx0dTogWy04NC45MzYsIDE3NS4wNDJdLFxuXHRcdHY6IFstMTI1Ljg4MiwgODcuMjQzXVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdGw6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR1OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0djogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0THJnYlRvT2tsYWIuanNcbnZhciBjb252ZXJ0THJnYlRvT2tsYWIgPSAoeyByLCBnLCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmIChyID09PSB2b2lkIDApIHIgPSAwO1xuXHRpZiAoZyA9PT0gdm9pZCAwKSBnID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGxldCBMID0gTWF0aC5jYnJ0KC40MTIyMjE0Njk0NzA3NjMgKiByICsgLjUzNjMzMjUzNzI2MTczNDggKiBnICsgLjA1MTQ0NTk5MzI2NzUwMjIgKiBiKTtcblx0bGV0IE0gPSBNYXRoLmNicnQoLjIxMTkwMzQ5NTgxNzgyNTIgKiByICsgLjY4MDY5OTU1MDY0NTIzNDQgKiBnICsgLjEwNzM5Njk1MzUzNjk0MDYgKiBiKTtcblx0bGV0IFMgPSBNYXRoLmNicnQoLjA4ODMwMjQ1OTE5MDA1NjQgKiByICsgLjI4MTcxODgzOTEzNjEyMTUgKiBnICsgLjYyOTk3ODcwMTY3MzgyMjIgKiBiKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogLjIxMDQ1NDI2ODMwOTMxNCAqIEwgKyAuNzkzNjE3Nzc0NzAyMzA1NCAqIE0gLSAuMDA0MDcyMDQzMDExNjE5MyAqIFMsXG5cdFx0YTogMS45Nzc5OTg1MzI0MzExNjg0ICogTCAtIDIuNDI4NTkyMjQyMDQ4NTggKiBNICsgLjQ1MDU5MzcwOTYxNzQxMSAqIFMsXG5cdFx0YjogLjAyNTkwNDA0MjQ2NTU0NzggKiBMICsgLjc4Mjc3MTcxMjQ1NzUyOTYgKiBNIC0gLjgwODY3NTc1NDkyMzA3NzQgKiBTXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29rbGFiL2NvbnZlcnRSZ2JUb09rbGFiLmpzXG52YXIgY29udmVydFJnYlRvT2tsYWIgPSAocmdiKSA9PiB7XG5cdGxldCByZXMgPSBjb252ZXJ0THJnYlRvT2tsYWIoY29udmVydFJnYlRvTHJnYihyZ2IpKTtcblx0aWYgKHJnYi5yID09PSByZ2IuYiAmJiByZ2IuYiA9PT0gcmdiLmcpIHJlcy5hID0gcmVzLmIgPSAwO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvY29udmVydE9rbGFiVG9McmdiLmpzXG52YXIgY29udmVydE9rbGFiVG9McmdiID0gKHsgbCwgYSwgYiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAobCA9PT0gdm9pZCAwKSBsID0gMDtcblx0aWYgKGEgPT09IHZvaWQgMCkgYSA9IDA7XG5cdGlmIChiID09PSB2b2lkIDApIGIgPSAwO1xuXHRsZXQgTCA9IE1hdGgucG93KGwgKyAuMzk2MzM3Nzc3Mzc2MTc0OSAqIGEgKyAuMjE1ODAzNzU3MzA5OTEzNiAqIGIsIDMpO1xuXHRsZXQgTSA9IE1hdGgucG93KGwgLSAuMTA1NTYxMzQ1ODE1NjU4NiAqIGEgLSAuMDYzODU0MTcyODI1ODEzMyAqIGIsIDMpO1xuXHRsZXQgUyA9IE1hdGgucG93KGwgLSAuMDg5NDg0MTc3NTI5ODExOSAqIGEgLSAxLjI5MTQ4NTU0ODAxOTQwOTIgKiBiLCAzKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcImxyZ2JcIixcblx0XHRyOiA0LjA3Njc0MTYzNjA3NTk1NyAqIEwgLSAzLjMwNzcxMTUzOTI1ODA2MTYgKiBNICsgLjIzMDk2OTkwMzE4MjEwNDQgKiBTLFxuXHRcdGc6IC0xLjI2ODQzNzk3MzI4NTAzMTcgKiBMICsgMi42MDk3NTczNDkyODc2ODg3ICogTSAtIC4zNDEzMTkzNzYwMDI2NTczICogUyxcblx0XHRiOiAtLjAwNDE5NjA3NjEzODY3NTYgKiBMIC0gLjcwMzQxODYxNzkzNTkzNjIgKiBNICsgMS43MDc2MTQ2OTQwNzQ2MTE3ICogU1xuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xhYi9jb252ZXJ0T2tsYWJUb1JnYi5qc1xudmFyIGNvbnZlcnRPa2xhYlRvUmdiID0gKGMpID0+IGNvbnZlcnRMcmdiVG9SZ2IoY29udmVydE9rbGFiVG9McmdiKGMpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvaGVscGVycy5qc1xuZnVuY3Rpb24gdG9lKHgpIHtcblx0Y29uc3Qga18xID0gLjIwNjtcblx0Y29uc3Qga18yID0gLjAzO1xuXHRjb25zdCBrXzMgPSAxLjIwNiAvIDEuMDM7XG5cdHJldHVybiAuNSAqIChrXzMgKiB4IC0ga18xICsgTWF0aC5zcXJ0KChrXzMgKiB4IC0ga18xKSAqIChrXzMgKiB4IC0ga18xKSArIDQgKiBrXzIgKiBrXzMgKiB4KSk7XG59XG5mdW5jdGlvbiB0b2VfaW52KHgpIHtcblx0cmV0dXJuICh4ICogeCArIC4yMDYgKiB4KSAvICgxLjIwNiAvIDEuMDMgKiAoeCArIC4wMykpO1xufVxuZnVuY3Rpb24gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKSB7XG5cdGxldCBrMCwgazEsIGsyLCBrMywgazQsIHdsLCB3bSwgd3M7XG5cdGlmICgtMS44ODE3MDMyOCAqIGEgLSAuODA5MzY0OTMgKiBiID4gMSkge1xuXHRcdGswID0gMS4xOTA4NjI3Nztcblx0XHRrMSA9IDEuNzY1NzY3Mjg7XG5cdFx0azIgPSAuNTk2NjI2NDE7XG5cdFx0azMgPSAuNzU1MTUxOTc7XG5cdFx0azQgPSAuNTY3NzEyNDU7XG5cdFx0d2wgPSA0LjA3Njc0MTY2MjE7XG5cdFx0d20gPSAtMy4zMDc3MTE1OTEzO1xuXHRcdHdzID0gLjIzMDk2OTkyOTI7XG5cdH0gZWxzZSBpZiAoMS44MTQ0NDEwNCAqIGEgLSAxLjE5NDQ1Mjc2ICogYiA+IDEpIHtcblx0XHRrMCA9IC43Mzk1NjUxNTtcblx0XHRrMSA9IC0uNDU5NTQ0MDQ7XG5cdFx0azIgPSAuMDgyODU0Mjc7XG5cdFx0azMgPSAuMTI1NDEwNztcblx0XHRrNCA9IC4xNDUwMzIwNDtcblx0XHR3bCA9IC0xLjI2ODQzODAwNDY7XG5cdFx0d20gPSAyLjYwOTc1NzQwMTE7XG5cdFx0d3MgPSAtLjM0MTMxOTM5NjU7XG5cdH0gZWxzZSB7XG5cdFx0azAgPSAxLjM1NzMzNjUyO1xuXHRcdGsxID0gLS4wMDkxNTc5OTtcblx0XHRrMiA9IC0xLjE1MTMwMjE7XG5cdFx0azMgPSAtLjUwNTU5NjA2O1xuXHRcdGs0ID0gLjAwNjkyMTY3O1xuXHRcdHdsID0gLS4wMDQxOTYwODYzO1xuXHRcdHdtID0gLS43MDM0MTg2MTQ3O1xuXHRcdHdzID0gMS43MDc2MTQ3MDE7XG5cdH1cblx0bGV0IFMgPSBrMCArIGsxICogYSArIGsyICogYiArIGszICogYSAqIGEgKyBrNCAqIGEgKiBiO1xuXHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRsZXQga19tID0gLS4xMDU1NjEzNDU4ICogYSAtIC4wNjM4NTQxNzI4ICogYjtcblx0bGV0IGtfcyA9IC0uMDg5NDg0MTc3NSAqIGEgLSAxLjI5MTQ4NTU0OCAqIGI7XG5cdHtcblx0XHRsZXQgbF8gPSAxICsgUyAqIGtfbDtcblx0XHRsZXQgbV8gPSAxICsgUyAqIGtfbTtcblx0XHRsZXQgc18gPSAxICsgUyAqIGtfcztcblx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRsZXQgbSA9IG1fICogbV8gKiBtXztcblx0XHRsZXQgcyA9IHNfICogc18gKiBzXztcblx0XHRsZXQgbF9kUyA9IDMgKiBrX2wgKiBsXyAqIGxfO1xuXHRcdGxldCBtX2RTID0gMyAqIGtfbSAqIG1fICogbV87XG5cdFx0bGV0IHNfZFMgPSAzICoga19zICogc18gKiBzXztcblx0XHRsZXQgbF9kUzIgPSA2ICoga19sICoga19sICogbF87XG5cdFx0bGV0IG1fZFMyID0gNiAqIGtfbSAqIGtfbSAqIG1fO1xuXHRcdGxldCBzX2RTMiA9IDYgKiBrX3MgKiBrX3MgKiBzXztcblx0XHRsZXQgZiA9IHdsICogbCArIHdtICogbSArIHdzICogcztcblx0XHRsZXQgZjEgPSB3bCAqIGxfZFMgKyB3bSAqIG1fZFMgKyB3cyAqIHNfZFM7XG5cdFx0bGV0IGYyID0gd2wgKiBsX2RTMiArIHdtICogbV9kUzIgKyB3cyAqIHNfZFMyO1xuXHRcdFMgPSBTIC0gZiAqIGYxIC8gKGYxICogZjEgLSAuNSAqIGYgKiBmMik7XG5cdH1cblx0cmV0dXJuIFM7XG59XG5mdW5jdGlvbiBmaW5kX2N1c3AoYSwgYikge1xuXHRsZXQgU19jdXNwID0gY29tcHV0ZV9tYXhfc2F0dXJhdGlvbihhLCBiKTtcblx0bGV0IHJnYiA9IGNvbnZlcnRPa2xhYlRvTHJnYih7XG5cdFx0bDogMSxcblx0XHRhOiBTX2N1c3AgKiBhLFxuXHRcdGI6IFNfY3VzcCAqIGJcblx0fSk7XG5cdGxldCBMX2N1c3AgPSBNYXRoLmNicnQoMSAvIE1hdGgubWF4KHJnYi5yLCByZ2IuZywgcmdiLmIpKTtcblx0cmV0dXJuIFtMX2N1c3AsIExfY3VzcCAqIFNfY3VzcF07XG59XG5mdW5jdGlvbiBmaW5kX2dhbXV0X2ludGVyc2VjdGlvbihhLCBiLCBMMSwgQzEsIEwwLCBjdXNwID0gbnVsbCkge1xuXHRpZiAoIWN1c3ApIGN1c3AgPSBmaW5kX2N1c3AoYSwgYik7XG5cdGxldCB0O1xuXHRpZiAoKEwxIC0gTDApICogY3VzcFsxXSAtIChjdXNwWzBdIC0gTDApICogQzEgPD0gMCkgdCA9IGN1c3BbMV0gKiBMMCAvIChDMSAqIGN1c3BbMF0gKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0ZWxzZSB7XG5cdFx0dCA9IGN1c3BbMV0gKiAoTDAgLSAxKSAvIChDMSAqIChjdXNwWzBdIC0gMSkgKyBjdXNwWzFdICogKEwwIC0gTDEpKTtcblx0XHR7XG5cdFx0XHRsZXQgZEwgPSBMMSAtIEwwO1xuXHRcdFx0bGV0IGRDID0gQzE7XG5cdFx0XHRsZXQga19sID0gLjM5NjMzNzc3NzQgKiBhICsgLjIxNTgwMzc1NzMgKiBiO1xuXHRcdFx0bGV0IGtfbSA9IC0uMTA1NTYxMzQ1OCAqIGEgLSAuMDYzODU0MTcyOCAqIGI7XG5cdFx0XHRsZXQga19zID0gLS4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYjtcblx0XHRcdGxldCBsX2R0ID0gZEwgKyBkQyAqIGtfbDtcblx0XHRcdGxldCBtX2R0ID0gZEwgKyBkQyAqIGtfbTtcblx0XHRcdGxldCBzX2R0ID0gZEwgKyBkQyAqIGtfcztcblx0XHRcdHtcblx0XHRcdFx0bGV0IEwgPSBMMCAqICgxIC0gdCkgKyB0ICogTDE7XG5cdFx0XHRcdGxldCBDID0gdCAqIEMxO1xuXHRcdFx0XHRsZXQgbF8gPSBMICsgQyAqIGtfbDtcblx0XHRcdFx0bGV0IG1fID0gTCArIEMgKiBrX207XG5cdFx0XHRcdGxldCBzXyA9IEwgKyBDICoga19zO1xuXHRcdFx0XHRsZXQgbCA9IGxfICogbF8gKiBsXztcblx0XHRcdFx0bGV0IG0gPSBtXyAqIG1fICogbV87XG5cdFx0XHRcdGxldCBzID0gc18gKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0ID0gMyAqIGxfZHQgKiBsXyAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0ID0gMyAqIG1fZHQgKiBtXyAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0ID0gMyAqIHNfZHQgKiBzXyAqIHNfO1xuXHRcdFx0XHRsZXQgbGR0MiA9IDYgKiBsX2R0ICogbF9kdCAqIGxfO1xuXHRcdFx0XHRsZXQgbWR0MiA9IDYgKiBtX2R0ICogbV9kdCAqIG1fO1xuXHRcdFx0XHRsZXQgc2R0MiA9IDYgKiBzX2R0ICogc19kdCAqIHNfO1xuXHRcdFx0XHRsZXQgciA9IDQuMDc2NzQxNjYyMSAqIGwgLSAzLjMwNzcxMTU5MTMgKiBtICsgLjIzMDk2OTkyOTIgKiBzIC0gMTtcblx0XHRcdFx0bGV0IHIxID0gNC4wNzY3NDE2NjIxICogbGR0IC0gMy4zMDc3MTE1OTEzICogbWR0ICsgLjIzMDk2OTkyOTIgKiBzZHQ7XG5cdFx0XHRcdGxldCByMiA9IDQuMDc2NzQxNjYyMSAqIGxkdDIgLSAzLjMwNzcxMTU5MTMgKiBtZHQyICsgLjIzMDk2OTkyOTIgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9yID0gcjEgLyAocjEgKiByMSAtIC41ICogciAqIHIyKTtcblx0XHRcdFx0bGV0IHRfciA9IC1yICogdV9yO1xuXHRcdFx0XHRsZXQgZyA9IC0xLjI2ODQzODAwNDYgKiBsICsgMi42MDk3NTc0MDExICogbSAtIC4zNDEzMTkzOTY1ICogcyAtIDE7XG5cdFx0XHRcdGxldCBnMSA9IC0xLjI2ODQzODAwNDYgKiBsZHQgKyAyLjYwOTc1NzQwMTEgKiBtZHQgLSAuMzQxMzE5Mzk2NSAqIHNkdDtcblx0XHRcdFx0bGV0IGcyID0gLTEuMjY4NDM4MDA0NiAqIGxkdDIgKyAyLjYwOTc1NzQwMTEgKiBtZHQyIC0gLjM0MTMxOTM5NjUgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9nID0gZzEgLyAoZzEgKiBnMSAtIC41ICogZyAqIGcyKTtcblx0XHRcdFx0bGV0IHRfZyA9IC1nICogdV9nO1xuXHRcdFx0XHRsZXQgYiA9IC0uMDA0MTk2MDg2MyAqIGwgLSAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMgLSAxO1xuXHRcdFx0XHRsZXQgYjEgPSAtLjAwNDE5NjA4NjMgKiBsZHQgLSAuNzAzNDE4NjE0NyAqIG1kdCArIDEuNzA3NjE0NzAxICogc2R0O1xuXHRcdFx0XHRsZXQgYjIgPSAtLjAwNDE5NjA4NjMgKiBsZHQyIC0gLjcwMzQxODYxNDcgKiBtZHQyICsgMS43MDc2MTQ3MDEgKiBzZHQyO1xuXHRcdFx0XHRsZXQgdV9iID0gYjEgLyAoYjEgKiBiMSAtIC41ICogYiAqIGIyKTtcblx0XHRcdFx0bGV0IHRfYiA9IC1iICogdV9iO1xuXHRcdFx0XHR0X3IgPSB1X3IgPj0gMCA/IHRfciA6IDFlNjtcblx0XHRcdFx0dF9nID0gdV9nID49IDAgPyB0X2cgOiAxZTY7XG5cdFx0XHRcdHRfYiA9IHVfYiA+PSAwID8gdF9iIDogMWU2O1xuXHRcdFx0XHR0ICs9IE1hdGgubWluKHRfciwgTWF0aC5taW4odF9nLCB0X2IpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCA9IG51bGwpIHtcblx0aWYgKCFjdXNwKSBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBMID0gY3VzcFswXTtcblx0bGV0IEMgPSBjdXNwWzFdO1xuXHRyZXR1cm4gW0MgLyBMLCBDIC8gKDEgLSBMKV07XG59XG5mdW5jdGlvbiBnZXRfQ3MoTCwgYV8sIGJfKSB7XG5cdGxldCBjdXNwID0gZmluZF9jdXNwKGFfLCBiXyk7XG5cdGxldCBDX21heCA9IGZpbmRfZ2FtdXRfaW50ZXJzZWN0aW9uKGFfLCBiXywgTCwgMSwgTCwgY3VzcCk7XG5cdGxldCBTVF9tYXggPSBnZXRfU1RfbWF4KGFfLCBiXywgY3VzcCk7XG5cdGxldCBTX21pZCA9IC4xMTUxNjk5MyArIDEgLyAoNy40NDc3ODk3ICsgNC4xNTkwMTI0ICogYl8gKyBhXyAqICgtMi4xOTU1NzM0NyArIDEuNzUxOTg0MDEgKiBiXyArIGFfICogKC0yLjEzNzA0OTQ4IC0gMTAuMDIzMDEwNDMgKiBiXyArIGFfICogKC00LjI0ODk0NTYxICsgNS4zODc3MDgxOSAqIGJfICsgNC42OTg5MTAxMyAqIGFfKSkpKTtcblx0bGV0IFRfbWlkID0gLjExMjM5NjQyICsgMSAvICgxLjYxMzIwMzIgLSAuNjgxMjQzNzkgKiBiXyArIGFfICogKC40MDM3MDYxMiArIC45MDE0ODEyMyAqIGJfICsgYV8gKiAoLS4yNzA4Nzk0MyArIC42MTIyMzk5ICogYl8gKyBhXyAqICguMDAyOTkyMTUgLSAuNDUzOTk1NjggKiBiXyAtIC4xNDY2MTg3MiAqIGFfKSkpKTtcblx0bGV0IGsgPSBDX21heCAvIE1hdGgubWluKEwgKiBTVF9tYXhbMF0sICgxIC0gTCkgKiBTVF9tYXhbMV0pO1xuXHRsZXQgQ19hID0gTCAqIFNfbWlkO1xuXHRsZXQgQ19iID0gKDEgLSBMKSAqIFRfbWlkO1xuXHRsZXQgQ19taWQgPSAuOSAqIGsgKiBNYXRoLnNxcnQoTWF0aC5zcXJ0KDEgLyAoMSAvIChDX2EgKiBDX2EgKiBDX2EgKiBDX2EpICsgMSAvIChDX2IgKiBDX2IgKiBDX2IgKiBDX2IpKSkpO1xuXHRDX2EgPSBMICogLjQ7XG5cdENfYiA9ICgxIC0gTCkgKiAuODtcblx0cmV0dXJuIFtcblx0XHRNYXRoLnNxcnQoMSAvICgxIC8gKENfYSAqIENfYSkgKyAxIC8gKENfYiAqIENfYikpKSxcblx0XHRDX21pZCxcblx0XHRDX21heFxuXHRdO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzbC9jb252ZXJ0T2tsYWJUb09raHNsLmpzXG5mdW5jdGlvbiBjb252ZXJ0T2tsYWJUb09raHNsKGxhYikge1xuXHRjb25zdCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0Y29uc3QgYSA9IGxhYi5hICE9PSB2b2lkIDAgPyBsYWIuYSA6IDA7XG5cdGNvbnN0IGIgPSBsYWIuYiAhPT0gdm9pZCAwID8gbGFiLmIgOiAwO1xuXHRjb25zdCByZXQgPSB7XG5cdFx0bW9kZTogXCJva2hzbFwiLFxuXHRcdGw6IHRvZShsKVxuXHR9O1xuXHRpZiAobGFiLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGxhYi5hbHBoYTtcblx0bGV0IGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdGlmICghYykge1xuXHRcdHJldC5zID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBbQ18wLCBDX21pZCwgQ19tYXhdID0gZ2V0X0NzKGwsIGEgLyBjLCBiIC8gYyk7XG5cdGxldCBzO1xuXHRpZiAoYyA8IENfbWlkKSB7XG5cdFx0bGV0IGtfMCA9IDA7XG5cdFx0bGV0IGtfMSA9IC44ICogQ18wO1xuXHRcdGxldCBrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdFx0cyA9IChjIC0ga18wKSAvIChrXzEgKyBrXzIgKiAoYyAtIGtfMCkpICogLjg7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IGtfMCA9IENfbWlkO1xuXHRcdGxldCBrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRsZXQga18yID0gMSAtIGtfMSAvIChDX21heCAtIENfbWlkKTtcblx0XHRzID0gLjggKyAuMiAqICgoYyAtIGtfMCkgLyAoa18xICsga18yICogKGMgLSBrXzApKSk7XG5cdH1cblx0aWYgKHMpIHtcblx0XHRyZXQucyA9IHM7XG5cdFx0cmV0LmggPSBub3JtYWxpemVIdWUoTWF0aC5hdGFuMihiLCBhKSAqIDE4MCAvIE1hdGguUEkpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHNsL2NvbnZlcnRPa2hzbFRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzbFRvT2tsYWIoaHNsKSB7XG5cdGxldCBoID0gaHNsLmggIT09IHZvaWQgMCA/IGhzbC5oIDogMDtcblx0bGV0IHMgPSBoc2wucyAhPT0gdm9pZCAwID8gaHNsLnMgOiAwO1xuXHRsZXQgbCA9IGhzbC5sICE9PSB2b2lkIDAgPyBoc2wubCA6IDA7XG5cdGNvbnN0IHJldCA9IHtcblx0XHRtb2RlOiBcIm9rbGFiXCIsXG5cdFx0bDogdG9lX2ludihsKVxuXHR9O1xuXHRpZiAoaHNsLmFscGhhICE9PSB2b2lkIDApIHJldC5hbHBoYSA9IGhzbC5hbHBoYTtcblx0aWYgKCFzIHx8IGwgPT09IDEpIHtcblx0XHRyZXQuYSA9IHJldC5iID0gMDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdGxldCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0bGV0IGJfID0gTWF0aC5zaW4oaCAvIDE4MCAqIE1hdGguUEkpO1xuXHRsZXQgW0NfMCwgQ19taWQsIENfbWF4XSA9IGdldF9DcyhyZXQubCwgYV8sIGJfKTtcblx0bGV0IHQsIGtfMCwga18xLCBrXzI7XG5cdGlmIChzIDwgLjgpIHtcblx0XHR0ID0gMS4yNSAqIHM7XG5cdFx0a18wID0gMDtcblx0XHRrXzEgPSAuOCAqIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gQ19taWQ7XG5cdH0gZWxzZSB7XG5cdFx0dCA9IDUgKiAocyAtIC44KTtcblx0XHRrXzAgPSBDX21pZDtcblx0XHRrXzEgPSAuMiAqIENfbWlkICogQ19taWQgKiAxLjI1ICogMS4yNSAvIENfMDtcblx0XHRrXzIgPSAxIC0ga18xIC8gKENfbWF4IC0gQ19taWQpO1xuXHR9XG5cdGxldCBDID0ga18wICsgdCAqIGtfMSAvICgxIC0ga18yICogdCk7XG5cdHJldC5hID0gQyAqIGFfO1xuXHRyZXQuYiA9IEMgKiBiXztcblx0cmV0dXJuIHJldDtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2toc2wvbW9kZU9raHNsLmpzXG52YXIgbW9kZU9raHNsID0ge1xuXHQuLi5kZWZpbml0aW9uJDIxLFxuXHRtb2RlOiBcIm9raHNsXCIsXG5cdGNoYW5uZWxzOiBbXG5cdFx0XCJoXCIsXG5cdFx0XCJzXCIsXG5cdFx0XCJsXCIsXG5cdFx0XCJhbHBoYVwiXG5cdF0sXG5cdHBhcnNlOiBbXCItLW9raHNsXCJdLFxuXHRzZXJpYWxpemU6IFwiLS1va2hzbFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2tsYWJUb09raHNsLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvT2toc2woY29udmVydFJnYlRvT2tsYWIoYykpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiBjb252ZXJ0T2toc2xUb09rbGFiLFxuXHRcdHJnYjogKGMpID0+IGNvbnZlcnRPa2xhYlRvUmdiKGNvbnZlcnRPa2hzbFRvT2tsYWIoYykpXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2xhYlRvT2toc3YuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2xhYlRvT2toc3YobGFiKSB7XG5cdGxldCBsID0gbGFiLmwgIT09IHZvaWQgMCA/IGxhYi5sIDogMDtcblx0bGV0IGEgPSBsYWIuYSAhPT0gdm9pZCAwID8gbGFiLmEgOiAwO1xuXHRsZXQgYiA9IGxhYi5iICE9PSB2b2lkIDAgPyBsYWIuYiA6IDA7XG5cdGxldCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRsZXQgYV8gPSBjID8gYSAvIGMgOiAxO1xuXHRsZXQgYl8gPSBjID8gYiAvIGMgOiAxO1xuXHRsZXQgW1NfbWF4LCBUXSA9IGdldF9TVF9tYXgoYV8sIGJfKTtcblx0bGV0IFNfMCA9IC41O1xuXHRsZXQgayA9IDEgLSBTXzAgLyBTX21heDtcblx0bGV0IHQgPSBUIC8gKGMgKyBsICogVCk7XG5cdGxldCBMX3YgPSB0ICogbDtcblx0bGV0IENfdiA9IHQgKiBjO1xuXHRsZXQgTF92dCA9IHRvZV9pbnYoTF92KTtcblx0bGV0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRsZXQgcmdiX3NjYWxlID0gY29udmVydE9rbGFiVG9McmdiKHtcblx0XHRsOiBMX3Z0LFxuXHRcdGE6IGFfICogQ192dCxcblx0XHRiOiBiXyAqIENfdnRcblx0fSk7XG5cdGxldCBzY2FsZV9MID0gTWF0aC5jYnJ0KDEgLyBNYXRoLm1heChyZ2Jfc2NhbGUuciwgcmdiX3NjYWxlLmcsIHJnYl9zY2FsZS5iLCAwKSk7XG5cdGwgPSBsIC8gc2NhbGVfTDtcblx0YyA9IGMgLyBzY2FsZV9MICogdG9lKGwpIC8gbDtcblx0bCA9IHRvZShsKTtcblx0Y29uc3QgcmV0ID0ge1xuXHRcdG1vZGU6IFwib2toc3ZcIixcblx0XHRzOiBjID8gKFNfMCArIFQpICogQ192IC8gKFQgKiBTXzAgKyBUICogayAqIENfdikgOiAwLFxuXHRcdHY6IGwgPyBsIC8gTF92IDogMFxuXHR9O1xuXHRpZiAocmV0LnMpIHJldC5oID0gbm9ybWFsaXplSHVlKE1hdGguYXRhbjIoYiwgYSkgKiAxODAgLyBNYXRoLlBJKTtcblx0aWYgKGxhYi5hbHBoYSAhPT0gdm9pZCAwKSByZXQuYWxwaGEgPSBsYWIuYWxwaGE7XG5cdHJldHVybiByZXQ7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL29raHN2L2NvbnZlcnRPa2hzdlRvT2tsYWIuanNcbmZ1bmN0aW9uIGNvbnZlcnRPa2hzdlRvT2tsYWIoaHN2KSB7XG5cdGNvbnN0IHJldCA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGlmIChoc3YuYWxwaGEgIT09IHZvaWQgMCkgcmV0LmFscGhhID0gaHN2LmFscGhhO1xuXHRjb25zdCBoID0gaHN2LmggIT09IHZvaWQgMCA/IGhzdi5oIDogMDtcblx0Y29uc3QgcyA9IGhzdi5zICE9PSB2b2lkIDAgPyBoc3YucyA6IDA7XG5cdGNvbnN0IHYgPSBoc3YudiAhPT0gdm9pZCAwID8gaHN2LnYgOiAwO1xuXHRjb25zdCBhXyA9IE1hdGguY29zKGggLyAxODAgKiBNYXRoLlBJKTtcblx0Y29uc3QgYl8gPSBNYXRoLnNpbihoIC8gMTgwICogTWF0aC5QSSk7XG5cdGNvbnN0IFtTX21heCwgVF0gPSBnZXRfU1RfbWF4KGFfLCBiXyk7XG5cdGNvbnN0IFNfMCA9IC41O1xuXHRjb25zdCBrID0gMSAtIFNfMCAvIFNfbWF4O1xuXHRjb25zdCBMX3YgPSAxIC0gcyAqIFNfMCAvIChTXzAgKyBUIC0gVCAqIGsgKiBzKTtcblx0Y29uc3QgQ192ID0gcyAqIFQgKiBTXzAgLyAoU18wICsgVCAtIFQgKiBrICogcyk7XG5cdGNvbnN0IExfdnQgPSB0b2VfaW52KExfdik7XG5cdGNvbnN0IENfdnQgPSBDX3YgKiBMX3Z0IC8gTF92O1xuXHRjb25zdCByZ2Jfc2NhbGUgPSBjb252ZXJ0T2tsYWJUb0xyZ2Ioe1xuXHRcdGw6IExfdnQsXG5cdFx0YTogYV8gKiBDX3Z0LFxuXHRcdGI6IGJfICogQ192dFxuXHR9KTtcblx0Y29uc3Qgc2NhbGVfTCA9IE1hdGguY2JydCgxIC8gTWF0aC5tYXgocmdiX3NjYWxlLnIsIHJnYl9zY2FsZS5nLCByZ2Jfc2NhbGUuYiwgMCkpO1xuXHRjb25zdCBMX25ldyA9IHRvZV9pbnYodiAqIExfdik7XG5cdGNvbnN0IEMgPSBDX3YgKiBMX25ldyAvIExfdjtcblx0cmV0LmwgPSBMX25ldyAqIHNjYWxlX0w7XG5cdHJldC5hID0gQyAqIGFfICogc2NhbGVfTDtcblx0cmV0LmIgPSBDICogYl8gKiBzY2FsZV9MO1xuXHRyZXR1cm4gcmV0O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2hzdi9tb2RlT2toc3YuanNcbnZhciBtb2RlT2toc3YgPSB7XG5cdC4uLmRlZmluaXRpb24kMjAsXG5cdG1vZGU6IFwib2toc3ZcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcImhcIixcblx0XHRcInNcIixcblx0XHRcInZcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0tb2toc3ZcIl0sXG5cdHNlcmlhbGl6ZTogXCItLW9raHN2XCIsXG5cdGZyb21Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2xhYlRvT2toc3YsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9Pa2hzdihjb252ZXJ0UmdiVG9Pa2xhYihjKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0b2tsYWI6IGNvbnZlcnRPa2hzdlRvT2tsYWIsXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydE9raHN2VG9Pa2xhYihjKSlcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvcGFyc2VPa2xhYi5qc1xuZnVuY3Rpb24gcGFyc2VPa2xhYihjb2xvciwgcGFyc2VkKSB7XG5cdGlmICghcGFyc2VkIHx8IHBhcnNlZFswXSAhPT0gXCJva2xhYlwiKSByZXR1cm47XG5cdGNvbnN0IHJlcyA9IHsgbW9kZTogXCJva2xhYlwiIH07XG5cdGNvbnN0IFssIGwsIGEsIGIsIGFscGhhXSA9IHBhcnNlZDtcblx0aWYgKGwudHlwZSA9PT0gVG9rLkh1ZSB8fCBhLnR5cGUgPT09IFRvay5IdWUgfHwgYi50eXBlID09PSBUb2suSHVlKSByZXR1cm47XG5cdGlmIChsLnR5cGUgIT09IFRvay5Ob25lKSByZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdGlmIChhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYSA9IGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGEudmFsdWUgOiBhLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChiLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYiA9IGIudHlwZSA9PT0gVG9rLk51bWJlciA/IGIudmFsdWUgOiBiLnZhbHVlICogLjQgLyAxMDA7XG5cdGlmIChhbHBoYS50eXBlICE9PSBUb2suTm9uZSkgcmVzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEudHlwZSA9PT0gVG9rLk51bWJlciA/IGFscGhhLnZhbHVlIDogYWxwaGEudmFsdWUgLyAxMDApKTtcblx0cmV0dXJuIHJlcztcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvb2tsYWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kOCA9IHtcblx0Li4uZGVmaW5pdGlvbiQxNSxcblx0bW9kZTogXCJva2xhYlwiLFxuXHR0b01vZGU6IHtcblx0XHRscmdiOiBjb252ZXJ0T2tsYWJUb0xyZ2IsXG5cdFx0cmdiOiBjb252ZXJ0T2tsYWJUb1JnYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdGxyZ2I6IGNvbnZlcnRMcmdiVG9Pa2xhYixcblx0XHRyZ2I6IGNvbnZlcnRSZ2JUb09rbGFiXG5cdH0sXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRhOiBbLS40LCAuNF0sXG5cdFx0YjogWy0uNCwgLjRdXG5cdH0sXG5cdHBhcnNlOiBbcGFyc2VPa2xhYl0sXG5cdHNlcmlhbGl6ZTogKGMpID0+IGBva2xhYigke2MubCAhPT0gdm9pZCAwID8gYy5sIDogXCJub25lXCJ9ICR7Yy5hICE9PSB2b2lkIDAgPyBjLmEgOiBcIm5vbmVcIn0gJHtjLmIgIT09IHZvaWQgMCA/IGMuYiA6IFwibm9uZVwifSR7Yy5hbHBoYSA8IDEgPyBgIC8gJHtjLmFscGhhfWAgOiBcIlwifSlgXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9wYXJzZU9rbGNoLmpzXG5mdW5jdGlvbiBwYXJzZU9rbGNoKGNvbG9yLCBwYXJzZWQpIHtcblx0aWYgKCFwYXJzZWQgfHwgcGFyc2VkWzBdICE9PSBcIm9rbGNoXCIpIHJldHVybjtcblx0Y29uc3QgcmVzID0geyBtb2RlOiBcIm9rbGNoXCIgfTtcblx0Y29uc3QgWywgbCwgYywgaCwgYWxwaGFdID0gcGFyc2VkO1xuXHRpZiAobC50eXBlICE9PSBUb2suTm9uZSkge1xuXHRcdGlmIChsLnR5cGUgPT09IFRvay5IdWUpIHJldHVybjtcblx0XHRyZXMubCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGwudHlwZSA9PT0gVG9rLk51bWJlciA/IGwudmFsdWUgOiBsLnZhbHVlIC8gMTAwKSwgMSk7XG5cdH1cblx0aWYgKGMudHlwZSAhPT0gVG9rLk5vbmUpIHJlcy5jID0gTWF0aC5tYXgoMCwgYy50eXBlID09PSBUb2suTnVtYmVyID8gYy52YWx1ZSA6IGMudmFsdWUgKiAuNCAvIDEwMCk7XG5cdGlmIChoLnR5cGUgIT09IFRvay5Ob25lKSB7XG5cdFx0aWYgKGgudHlwZSA9PT0gVG9rLlBlcmNlbnRhZ2UpIHJldHVybjtcblx0XHRyZXMuaCA9IGgudmFsdWU7XG5cdH1cblx0aWYgKGFscGhhLnR5cGUgIT09IFRvay5Ob25lKSByZXMuYWxwaGEgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYS50eXBlID09PSBUb2suTnVtYmVyID8gYWxwaGEudmFsdWUgOiBhbHBoYS52YWx1ZSAvIDEwMCkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9va2xjaC9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ3ID0ge1xuXHQuLi5kZWZpbml0aW9uJDEzLFxuXHRtb2RlOiBcIm9rbGNoXCIsXG5cdHRvTW9kZToge1xuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIiksXG5cdFx0cmdiOiAoYykgPT4gY29udmVydE9rbGFiVG9SZ2IoY29udmVydExjaFRvTGFiKGMsIFwib2tsYWJcIikpXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGNvbnZlcnRSZ2JUb09rbGFiKGMpLCBcIm9rbGNoXCIpLFxuXHRcdG9rbGFiOiAoYykgPT4gY29udmVydExhYlRvTGNoKGMsIFwib2tsY2hcIilcblx0fSxcblx0cGFyc2U6IFtwYXJzZU9rbGNoXSxcblx0c2VyaWFsaXplOiAoYykgPT4gYG9rbGNoKCR7Yy5sICE9PSB2b2lkIDAgPyBjLmwgOiBcIm5vbmVcIn0gJHtjLmMgIT09IHZvaWQgMCA/IGMuYyA6IFwibm9uZVwifSAke2MuaCAhPT0gdm9pZCAwID8gYy5oIDogXCJub25lXCJ9JHtjLmFscGhhIDwgMSA/IGAgLyAke2MuYWxwaGF9YCA6IFwiXCJ9KWAsXG5cdHJhbmdlczoge1xuXHRcdGw6IFswLCAxXSxcblx0XHRjOiBbMCwgLjRdLFxuXHRcdGg6IFswLCAzNjBdXG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRQM1RvWHl6NjUuanNcbnZhciBjb252ZXJ0UDNUb1h5ejY1ID0gKHJnYikgPT4ge1xuXHRsZXQgeyByLCBnLCBiLCBhbHBoYSB9ID0gY29udmVydFJnYlRvTHJnYihyZ2IpO1xuXHRsZXQgcmVzID0ge1xuXHRcdG1vZGU6IFwieHl6NjVcIixcblx0XHR4OiAuNDg2NTcwOTQ4NjQ4MjE2ICogciArIC4yNjU2Njc2OTMxNjkwOTMgKiBnICsgLjE5ODIxNzI4NTIzNDM2MjUgKiBiLFxuXHRcdHk6IC4yMjg5NzQ1NjQwNjk3NDg3ICogciArIC42OTE3Mzg1MjE4MzY1MDYyICogZyArIC4wNzkyODY5MTQwOTM3NDUgKiBiLFxuXHRcdHo6IDAgKiByICsgLjA0NTExMzM4MTg1ODkwMjYgKiBnICsgMS4wNDM5NDQzNjg5MDA5NzYgKiBiXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3AzL2NvbnZlcnRYeXo2NVRvUDMuanNcbnZhciBjb252ZXJ0WHl6NjVUb1AzID0gKHsgeCwgeSwgeiwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcblx0aWYgKHkgPT09IHZvaWQgMCkgeSA9IDA7XG5cdGlmICh6ID09PSB2b2lkIDApIHogPSAwO1xuXHRsZXQgcmVzID0gY29udmVydExyZ2JUb1JnYih7XG5cdFx0cjogeCAqIDIuNDkzNDk2OTExOTQxNDI2MyAtIHkgKiAuOTMxMzgzNjE3OTE5MTI0MiAtIC40MDI3MTA3ODQ0NTA3MTcgKiB6LFxuXHRcdGc6IHggKiAtLjgyOTQ4ODk2OTU2MTU3NDkgKyB5ICogMS43NjI2NjQwNjAzMTgzNDY1ICsgLjAyMzYyNDY4NTg0MTk0MzYgKiB6LFxuXHRcdGI6IHggKiAuMDM1ODQ1ODMwMjQzNzg0NSAtIHkgKiAuMDc2MTcyMzg5MjY4MDQxOCArIC45NTY4ODQ1MjQwMDc2ODcxICogelxuXHR9LCBcInAzXCIpO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wMy9kZWZpbml0aW9uLmpzXG52YXIgZGVmaW5pdGlvbiQ2ID0ge1xuXHQuLi5kZWZpbml0aW9uJDI3LFxuXHRtb2RlOiBcInAzXCIsXG5cdHBhcnNlOiBbXCJkaXNwbGF5LXAzXCJdLFxuXHRzZXJpYWxpemU6IFwiZGlzcGxheS1wM1wiLFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NjVUb1AzKGNvbnZlcnRSZ2JUb1h5ejY1KGNvbG9yKSksXG5cdFx0eHl6NjU6IGNvbnZlcnRYeXo2NVRvUDNcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRQM1RvWHl6NjUoY29sb3IpKSxcblx0XHR4eXo2NTogY29udmVydFAzVG9YeXo2NVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0WHl6NTBUb1Byb3Bob3RvLmpzXG52YXIgZ2FtbWEkMSA9ICh2KSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA+PSAxIC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxIC8gMS44KTtcblx0cmV0dXJuIDE2ICogdjtcbn07XG52YXIgY29udmVydFh5ejUwVG9Qcm9waG90byA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInByb3Bob3RvXCIsXG5cdFx0cjogZ2FtbWEkMSh4ICogMS4zNDU3ODY4ODE2NDcxNTg1IC0geSAqIC4yNTU1NzIwODczNzk3OTQ2IC0gLjA1MTEwMTg2NDk3NTU0NTMgKiB6KSxcblx0XHRnOiBnYW1tYSQxKHggKiAtLjU0NDYzMDcwNTEyNDkwMTkgKyB5ICogMS41MDgyNDc3NDI4NDUxNDY2ICsgLjAyMDUyNzQ0NzQzNjQyMTQgKiB6KSxcblx0XHRiOiBnYW1tYSQxKHggKiAwICsgeSAqIDAgKyAxLjIxMTk2NzU0NTYzODk0NTIgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9wcm9waG90by9jb252ZXJ0UHJvcGhvdG9Ub1h5ejUwLmpzXG52YXIgbGluZWFyaXplJDEgPSAodiA9IDApID0+IHtcblx0bGV0IGFicyA9IE1hdGguYWJzKHYpO1xuXHRpZiAoYWJzID49IDE2IC8gNTEyKSByZXR1cm4gTWF0aC5zaWduKHYpICogTWF0aC5wb3coYWJzLCAxLjgpO1xuXHRyZXR1cm4gdiAvIDE2O1xufTtcbnZhciBjb252ZXJ0UHJvcGhvdG9Ub1h5ejUwID0gKHByb3Bob3RvKSA9PiB7XG5cdGxldCByID0gbGluZWFyaXplJDEocHJvcGhvdG8ucik7XG5cdGxldCBnID0gbGluZWFyaXplJDEocHJvcGhvdG8uZyk7XG5cdGxldCBiID0gbGluZWFyaXplJDEocHJvcGhvdG8uYik7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IC43OTc3NjY2NDQ5MDA2NDIzICogciArIC4xMzUxODEyOTc0MDA1MzMxICogZyArIC4wMzEzNDc3MzQxMjgzOTIyICogYixcblx0XHR5OiAuMjg4MDc0ODI4ODE5NDAxMyAqIHIgKyAuNzExODM1MjM0MjQxODczMSAqIGcgKyA4OTkzNjkzODcyNTZlLTE2ICogYixcblx0XHR6OiAwICogciArIDAgKiBnICsgLjgyNTEwNDYwMjUxMDQ2MDIgKiBiXG5cdH07XG5cdGlmIChwcm9waG90by5hbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBwcm9waG90by5hbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3Byb3Bob3RvL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDUgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicHJvcGhvdG9cIixcblx0cGFyc2U6IFtcInByb3Bob3RvLXJnYlwiXSxcblx0c2VyaWFsaXplOiBcInByb3Bob3RvLXJnYlwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvLFxuXHRcdHJnYjogKGNvbG9yKSA9PiBjb252ZXJ0WHl6NTBUb1Byb3Bob3RvKGNvbnZlcnRSZ2JUb1h5ejUwKGNvbG9yKSlcblx0fSxcblx0dG9Nb2RlOiB7XG5cdFx0eHl6NTA6IGNvbnZlcnRQcm9waG90b1RvWHl6NTAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo1MFRvUmdiKGNvbnZlcnRQcm9waG90b1RvWHl6NTAoY29sb3IpKVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRYeXo2NVRvUmVjMjAyMC5qc1xudmFyIM6xJDEgPSAxLjA5OTI5NjgyNjgwOTQ0O1xudmFyIM6yJDEgPSAuMDE4MDUzOTY4NTEwODA3O1xudmFyIGdhbW1hID0gKHYpID0+IHtcblx0Y29uc3QgYWJzID0gTWF0aC5hYnModik7XG5cdGlmIChhYnMgPiDOsiQxKSByZXR1cm4gKE1hdGguc2lnbih2KSB8fCAxKSAqICjOsSQxICogTWF0aC5wb3coYWJzLCAuNDUpIC0gLjA5OTI5NjgyNjgwOTQ0MDA4KTtcblx0cmV0dXJuIDQuNSAqIHY7XG59O1xudmFyIGNvbnZlcnRYeXo2NVRvUmVjMjAyMCA9ICh7IHgsIHksIHosIGFscGhhIH0pID0+IHtcblx0aWYgKHggPT09IHZvaWQgMCkgeCA9IDA7XG5cdGlmICh5ID09PSB2b2lkIDApIHkgPSAwO1xuXHRpZiAoeiA9PT0gdm9pZCAwKSB6ID0gMDtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInJlYzIwMjBcIixcblx0XHRyOiBnYW1tYSh4ICogMS43MTY2NTExODc5NzEyNjgzIC0geSAqIC4zNTU2NzA3ODM3NzYzOTI1IC0gLjI1MzM2NjI4MTM3MzY1OTkgKiB6KSxcblx0XHRnOiBnYW1tYSh4ICogLS42NjY2ODQzNTE4MzI0ODkzICsgeSAqIDEuNjE2NDgxMjM2NjM0OTM5NSArIC4wMTU3Njg1NDU4MTM5MTExICogeiksXG5cdFx0YjogZ2FtbWEoeCAqIC4wMTc2Mzk4NTc0NDUzMTA4IC0geSAqIC4wNDI3NzA2MTMyNTc4MDg1ICsgLjk0MjEwMzEyMTIzNTQ3MzkgKiB6KVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2NvbnZlcnRSZWMyMDIwVG9YeXo2NS5qc1xudmFyIM6xID0gMS4wOTkyOTY4MjY4MDk0NDtcbnZhciDOsiA9IC4wMTgwNTM5Njg1MTA4MDc7XG52YXIgbGluZWFyaXplID0gKHYgPSAwKSA9PiB7XG5cdGxldCBhYnMgPSBNYXRoLmFicyh2KTtcblx0aWYgKGFicyA8IM6yICogNC41KSByZXR1cm4gdiAvIDQuNTtcblx0cmV0dXJuIChNYXRoLnNpZ24odikgfHwgMSkgKiBNYXRoLnBvdygoYWJzICsgzrEgLSAxKSAvIM6xLCAxIC8gLjQ1KTtcbn07XG52YXIgY29udmVydFJlYzIwMjBUb1h5ejY1ID0gKHJlYzIwMjApID0+IHtcblx0bGV0IHIgPSBsaW5lYXJpemUocmVjMjAyMC5yKTtcblx0bGV0IGcgPSBsaW5lYXJpemUocmVjMjAyMC5nKTtcblx0bGV0IGIgPSBsaW5lYXJpemUocmVjMjAyMC5iKTtcblx0bGV0IHJlcyA9IHtcblx0XHRtb2RlOiBcInh5ejY1XCIsXG5cdFx0eDogLjYzNjk1ODA0ODMwMTI5MTEgKiByICsgLjE0NDYxNjkwMzU4NjIwODMgKiBnICsgLjE2ODg4MDk3NTE2NDE3MjEgKiBiLFxuXHRcdHk6IC4yNjI3MDAyMTIwMTEyNjcgKiByICsgLjY3Nzk5ODA3MTUxODg3MDggKiBnICsgLjA1OTMwMTcxNjQ2OTg2MiAqIGIsXG5cdFx0ejogMCAqIHIgKyAuMDI4MDcyNjkzMDQ5MDg3NCAqIGcgKyAxLjA2MDk4NTA1NzcxMDc5MDkgKiBiXG5cdH07XG5cdGlmIChyZWMyMDIwLmFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IHJlYzIwMjAuYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9yZWMyMDIwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDQgPSB7XG5cdC4uLmRlZmluaXRpb24kMjcsXG5cdG1vZGU6IFwicmVjMjAyMFwiLFxuXHRmcm9tTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0WHl6NjVUb1JlYzIwMjAsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmVjMjAyMChjb252ZXJ0UmdiVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHRvTW9kZToge1xuXHRcdHh5ejY1OiBjb252ZXJ0UmVjMjAyMFRvWHl6NjUsXG5cdFx0cmdiOiAoY29sb3IpID0+IGNvbnZlcnRYeXo2NVRvUmdiKGNvbnZlcnRSZWMyMDIwVG9YeXo2NShjb2xvcikpXG5cdH0sXG5cdHBhcnNlOiBbXCJyZWMyMDIwXCJdLFxuXHRzZXJpYWxpemU6IFwicmVjMjAyMFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvY29uc3RhbnRzLmpzXG52YXIgYmlhcyA9IC4wMDM3OTMwNzMyNTUyNzU0NDkzO1xudmFyIGJpYXNfY2JydCA9IE1hdGguY2JydChiaWFzKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHliL2NvbnZlcnRSZ2JUb1h5Yi5qc1xudmFyIHRyYW5zZmVyJDEgPSAodikgPT4gTWF0aC5jYnJ0KHYpIC0gYmlhc19jYnJ0O1xudmFyIGNvbnZlcnRSZ2JUb1h5YiA9IChjb2xvcikgPT4ge1xuXHRjb25zdCB7IHIsIGcsIGIsIGFscGhhIH0gPSBjb252ZXJ0UmdiVG9McmdiKGNvbG9yKTtcblx0Y29uc3QgbCA9IHRyYW5zZmVyJDEoLjMgKiByICsgLjYyMiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBtID0gdHJhbnNmZXIkMSguMjMgKiByICsgLjY5MiAqIGcgKyAuMDc4ICogYiArIGJpYXMpO1xuXHRjb25zdCBzID0gdHJhbnNmZXIkMSguMjQzNDIyNjg5MjQ1NDc4MiAqIHIgKyAuMjA0NzY3NDQ0MjQ0OTY4MiAqIGcgKyAuNTUxODA5ODY2NTA5NTUzNSAqIGIgKyBiaWFzKTtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieHliXCIsXG5cdFx0eDogKGwgLSBtKSAvIDIsXG5cdFx0eTogKGwgKyBtKSAvIDIsXG5cdFx0YjogcyAtIChsICsgbSkgLyAyXG5cdH07XG5cdGlmIChhbHBoYSAhPT0gdm9pZCAwKSByZXMuYWxwaGEgPSBhbHBoYTtcblx0cmV0dXJuIHJlcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5Yi9jb252ZXJ0WHliVG9SZ2IuanNcbnZhciB0cmFuc2ZlciA9ICh2KSA9PiBNYXRoLnBvdyh2ICsgYmlhc19jYnJ0LCAzKTtcbnZhciBjb252ZXJ0WHliVG9SZ2IgPSAoeyB4LCB5LCBiLCBhbHBoYSB9KSA9PiB7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGIgPT09IHZvaWQgMCkgYiA9IDA7XG5cdGNvbnN0IGwgPSB0cmFuc2Zlcih4ICsgeSkgLSBiaWFzO1xuXHRjb25zdCBtID0gdHJhbnNmZXIoeSAtIHgpIC0gYmlhcztcblx0Y29uc3QgcyA9IHRyYW5zZmVyKGIgKyB5KSAtIGJpYXM7XG5cdGNvbnN0IHJlcyA9IGNvbnZlcnRMcmdiVG9SZ2Ioe1xuXHRcdHI6IDExLjAzMTU2NjkwNDYzOTg2MSAqIGwgLSA5Ljg2Njk0MzkwODEzMTU2MiAqIG0gLSAuMTY0NjIyOTk2NTA4Mjk5MzQgKiBzLFxuXHRcdGc6IC0zLjI1NDE0NzM4MTA3NDQyMzcgKiBsICsgNC40MTg3NzAzNzc1ODI3MjMgKiBtIC0gLjE2NDYyMjk5NjUwODI5OTM0ICogcyxcblx0XHRiOiAtMy42NTg4NTEyODY3MTM2ODE1ICogbCArIDIuNzEyOTIzMDQ1OTM2MDkyMiAqIG0gKyAxLjk0NTkyODI0MDc3NzU4OTUgKiBzXG5cdH0pO1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eWIvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMyA9IHtcblx0bW9kZTogXCJ4eWJcIixcblx0Y2hhbm5lbHM6IFtcblx0XHRcInhcIixcblx0XHRcInlcIixcblx0XHRcImJcIixcblx0XHRcImFscGhhXCJcblx0XSxcblx0cGFyc2U6IFtcIi0teHliXCJdLFxuXHRzZXJpYWxpemU6IFwiLS14eWJcIixcblx0dG9Nb2RlOiB7IHJnYjogY29udmVydFh5YlRvUmdiIH0sXG5cdGZyb21Nb2RlOiB7IHJnYjogY29udmVydFJnYlRvWHliIH0sXG5cdHJhbmdlczoge1xuXHRcdHg6IFstLjAxNTQsIC4wMjgxXSxcblx0XHR5OiBbMCwgLjg0NTNdLFxuXHRcdGI6IFstLjI3NzgsIC4zODhdXG5cdH0sXG5cdGludGVycG9sYXRlOiB7XG5cdFx0eDogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHk6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRiOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0YWxwaGE6IHtcblx0XHRcdHVzZTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdFx0Zml4dXA6IGZpeHVwQWxwaGFcblx0XHR9XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jdWxvcmkvc3JjL3h5ejUwL2RlZmluaXRpb24uanNcbnZhciBkZWZpbml0aW9uJDIgPSB7XG5cdG1vZGU6IFwieHl6NTBcIixcblx0cGFyc2U6IFtcInh5ei1kNTBcIl0sXG5cdHNlcmlhbGl6ZTogXCJ4eXotZDUwXCIsXG5cdHRvTW9kZToge1xuXHRcdHJnYjogY29udmVydFh5ejUwVG9SZ2IsXG5cdFx0bGFiOiBjb252ZXJ0WHl6NTBUb0xhYlxuXHR9LFxuXHRmcm9tTW9kZToge1xuXHRcdHJnYjogY29udmVydFJnYlRvWHl6NTAsXG5cdFx0bGFiOiBjb252ZXJ0TGFiVG9YeXo1MFxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk2NF0sXG5cdFx0eTogWzAsIC45OTldLFxuXHRcdHo6IFswLCAuODI1XVxuXHR9LFxuXHRpbnRlcnBvbGF0ZToge1xuXHRcdHg6IGludGVycG9sYXRvckxpbmVhcixcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0ejogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdGFscGhhOiB7XG5cdFx0XHR1c2U6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRcdGZpeHVwOiBmaXh1cEFscGhhXG5cdFx0fVxuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NjVUb1h5ejUwLmpzXG52YXIgY29udmVydFh5ejY1VG9YeXo1MCA9ICh4eXo2NSkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NjU7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo1MFwiLFxuXHRcdHg6IDEuMDQ3OTI5ODIwODQwNTQ4OCAqIHggKyAuMDIyOTQ2NzkzMzQxMDE5MSAqIHkgLSAuMDUwMTkyMjI5NTQzMTM1NiAqIHosXG5cdFx0eTogLjAyOTYyNzgxNTY4ODE1OTMgKiB4ICsgLjk5MDQzNDQ4NDU3MzI0OSAqIHkgLSAuMDE3MDczODI1MDI5Mzg1MSAqIHosXG5cdFx0ejogLS4wMDkyNDMwNTgxNTI1OTEyICogeCArIC4wMTUwNTUxNDQ4OTY1Nzc5ICogeSArIC43NTE4NzQyODk5NTgwMDA4ICogelxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy94eXo2NS9jb252ZXJ0WHl6NTBUb1h5ejY1LmpzXG52YXIgY29udmVydFh5ejUwVG9YeXo2NSA9ICh4eXo1MCkgPT4ge1xuXHRsZXQgeyB4LCB5LCB6LCBhbHBoYSB9ID0geHl6NTA7XG5cdGlmICh4ID09PSB2b2lkIDApIHggPSAwO1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKHogPT09IHZvaWQgMCkgeiA9IDA7XG5cdGxldCByZXMgPSB7XG5cdFx0bW9kZTogXCJ4eXo2NVwiLFxuXHRcdHg6IC45NTU0NzM0NTI3MDQyMTgyICogeCAtIC4wMjMwOTg1MzY4NzQyNjE0ICogeSArIC4wNjMyNTkzMDg2NjEwMjE3ICogeixcblx0XHR5OiAtLjAyODM2OTcwNjk2MzIwODEgKiB4ICsgMS4wMDk5OTU0NTgwMDU4MjI2ICogeSArIC4wMjEwNDEzOTg5NjY5NDMgKiB6LFxuXHRcdHo6IC4wMTIzMTQwMDE2ODgzMTk5ICogeCAtIC4wMjA1MDc2OTY0MzM0Nzc5ICogeSArIDEuMzMwMzY1OTM2NjA4MDc1MyAqIHpcblx0fTtcblx0aWYgKGFscGhhICE9PSB2b2lkIDApIHJlcy5hbHBoYSA9IGFscGhhO1xuXHRyZXR1cm4gcmVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveHl6NjUvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24kMSA9IHtcblx0bW9kZTogXCJ4eXo2NVwiLFxuXHR0b01vZGU6IHtcblx0XHRyZ2I6IGNvbnZlcnRYeXo2NVRvUmdiLFxuXHRcdHh5ejUwOiBjb252ZXJ0WHl6NjVUb1h5ejUwXG5cdH0sXG5cdGZyb21Nb2RlOiB7XG5cdFx0cmdiOiBjb252ZXJ0UmdiVG9YeXo2NSxcblx0XHR4eXo1MDogY29udmVydFh5ejUwVG9YeXo2NVxuXHR9LFxuXHRyYW5nZXM6IHtcblx0XHR4OiBbMCwgLjk1XSxcblx0XHR5OiBbMCwgMV0sXG5cdFx0ejogWzAsIDEuMDg4XVxuXHR9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieFwiLFxuXHRcdFwieVwiLFxuXHRcdFwielwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wieHl6XCIsIFwieHl6LWQ2NVwiXSxcblx0c2VyaWFsaXplOiBcInh5ei1kNjVcIixcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR4OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0eTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHo6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMveWlxL2NvbnZlcnRSZ2JUb1lpcS5qc1xudmFyIGNvbnZlcnRSZ2JUb1lpcSA9ICh7IHIsIGcsIGIsIGFscGhhIH0pID0+IHtcblx0aWYgKHIgPT09IHZvaWQgMCkgciA9IDA7XG5cdGlmIChnID09PSB2b2lkIDApIGcgPSAwO1xuXHRpZiAoYiA9PT0gdm9pZCAwKSBiID0gMDtcblx0Y29uc3QgcmVzID0ge1xuXHRcdG1vZGU6IFwieWlxXCIsXG5cdFx0eTogLjI5ODg5NTMxICogciArIC41ODY2MjI0NyAqIGcgKyAuMTE0NDgyMjMgKiBiLFxuXHRcdGk6IC41OTU5Nzc5OSAqIHIgLSAuMjc0MTc2MSAqIGcgLSAuMzIxODAxODkgKiBiLFxuXHRcdHE6IC4yMTE0NzAxNyAqIHIgLSAuNTIyNjE3MTEgKiBnICsgLjMxMTE0Njk0ICogYlxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvY29udmVydFlpcVRvUmdiLmpzXG52YXIgY29udmVydFlpcVRvUmdiID0gKHsgeSwgaSwgcSwgYWxwaGEgfSkgPT4ge1xuXHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcblx0aWYgKGkgPT09IHZvaWQgMCkgaSA9IDA7XG5cdGlmIChxID09PSB2b2lkIDApIHEgPSAwO1xuXHRjb25zdCByZXMgPSB7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyOiB5ICsgLjk1NjA4NDQ1ICogaSArIC42MjA4ODg1ICogcSxcblx0XHRnOiB5IC0gLjI3MTM3NjY0ICogaSAtIC42NDg2MDU5ICogcSxcblx0XHRiOiB5IC0gMS4xMDU2MTcyNCAqIGkgKyAxLjcwMjUwMTI2ICogcVxuXHR9O1xuXHRpZiAoYWxwaGEgIT09IHZvaWQgMCkgcmVzLmFscGhhID0gYWxwaGE7XG5cdHJldHVybiByZXM7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy95aXEvZGVmaW5pdGlvbi5qc1xudmFyIGRlZmluaXRpb24gPSB7XG5cdG1vZGU6IFwieWlxXCIsXG5cdHRvTW9kZTogeyByZ2I6IGNvbnZlcnRZaXFUb1JnYiB9LFxuXHRmcm9tTW9kZTogeyByZ2I6IGNvbnZlcnRSZ2JUb1lpcSB9LFxuXHRjaGFubmVsczogW1xuXHRcdFwieVwiLFxuXHRcdFwiaVwiLFxuXHRcdFwicVwiLFxuXHRcdFwiYWxwaGFcIlxuXHRdLFxuXHRwYXJzZTogW1wiLS15aXFcIl0sXG5cdHNlcmlhbGl6ZTogXCItLXlpcVwiLFxuXHRyYW5nZXM6IHtcblx0XHRpOiBbLS41OTUsIC41OTVdLFxuXHRcdHE6IFstLjUyMiwgLjUyMl1cblx0fSxcblx0aW50ZXJwb2xhdGU6IHtcblx0XHR5OiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0aTogaW50ZXJwb2xhdG9yTGluZWFyLFxuXHRcdHE6IGludGVycG9sYXRvckxpbmVhcixcblx0XHRhbHBoYToge1xuXHRcdFx0dXNlOiBpbnRlcnBvbGF0b3JMaW5lYXIsXG5cdFx0XHRmaXh1cDogZml4dXBBbHBoYVxuXHRcdH1cblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvcm91bmQuanNcbnZhciByID0gKHZhbHVlLCBwcmVjaXNpb24pID0+IE1hdGgucm91bmQodmFsdWUgKiAocHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbikpKSAvIHByZWNpc2lvbjtcbnZhciByb3VuZCA9IChwcmVjaXNpb24gPSA0KSA9PiAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHIodmFsdWUsIHByZWNpc2lvbikgOiB2YWx1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2N1bG9yaS9zcmMvZm9ybWF0dGVyLmpzXG52YXIgdHdvRGVjaW1hbHMgPSByb3VuZCgyKTtcbnZhciBjbGFtcCQxID0gKHZhbHVlKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSB8fCAwKSk7XG52YXIgZml4dXAgPSAodmFsdWUpID0+IE1hdGgucm91bmQoY2xhbXAkMSh2YWx1ZSkgKiAyNTUpO1xudmFyIHJnYiQxID0gY29udmVydGVyKFwicmdiXCIpO1xudmFyIGhzbCQxID0gY29udmVydGVyKFwiaHNsXCIpO1xudmFyIHNlcmlhbGl6ZUhleCA9IChjb2xvcikgPT4ge1xuXHRpZiAoY29sb3IgPT09IHZvaWQgMCkgcmV0dXJuO1xuXHRsZXQgciA9IGZpeHVwKGNvbG9yLnIpO1xuXHRsZXQgZyA9IGZpeHVwKGNvbG9yLmcpO1xuXHRsZXQgYiA9IGZpeHVwKGNvbG9yLmIpO1xuXHRyZXR1cm4gXCIjXCIgKyAoMSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59O1xudmFyIGZvcm1hdEhleCA9IChjKSA9PiBzZXJpYWxpemVIZXgocmdiJDEoYykpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3Vsb3JpL3NyYy9pbmRleC5qc1xudmFyIGE5OCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyNik7XG52YXIgY3ViZWhlbGl4ID0gdXNlTW9kZShkZWZpbml0aW9uJDI1KTtcbnZhciBkbGFiID0gdXNlTW9kZShkZWZpbml0aW9uJDI0KTtcbnZhciBkbGNoID0gdXNlTW9kZShkZWZpbml0aW9uJDIzKTtcbnZhciBoc2kgPSB1c2VNb2RlKGRlZmluaXRpb24kMjIpO1xudmFyIGhzbCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyMSk7XG52YXIgaHN2ID0gdXNlTW9kZShkZWZpbml0aW9uJDIwKTtcbnZhciBod2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMTkpO1xudmFyIGl0cCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxOCk7XG52YXIgamFiID0gdXNlTW9kZShkZWZpbml0aW9uJDE3KTtcbnZhciBqY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kMTYpO1xudmFyIGxhYiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxNSk7XG52YXIgbGFiNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTQpO1xudmFyIGxjaCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxMyk7XG52YXIgbGNoNjUgPSB1c2VNb2RlKGRlZmluaXRpb24kMTIpO1xudmFyIGxjaHV2ID0gdXNlTW9kZShkZWZpbml0aW9uJDExKTtcbnZhciBscmdiID0gdXNlTW9kZShkZWZpbml0aW9uJDEwKTtcbnZhciBsdXYgPSB1c2VNb2RlKGRlZmluaXRpb24kOSk7XG52YXIgb2toc2wgPSB1c2VNb2RlKG1vZGVPa2hzbCk7XG52YXIgb2toc3YgPSB1c2VNb2RlKG1vZGVPa2hzdik7XG52YXIgb2tsYWIgPSB1c2VNb2RlKGRlZmluaXRpb24kOCk7XG52YXIgb2tsY2ggPSB1c2VNb2RlKGRlZmluaXRpb24kNyk7XG52YXIgcDMgPSB1c2VNb2RlKGRlZmluaXRpb24kNik7XG52YXIgcHJvcGhvdG8gPSB1c2VNb2RlKGRlZmluaXRpb24kNSk7XG52YXIgcmVjMjAyMCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQ0KTtcbnZhciByZ2IgPSB1c2VNb2RlKGRlZmluaXRpb24kMjcpO1xudmFyIHh5YiA9IHVzZU1vZGUoZGVmaW5pdGlvbiQzKTtcbnZhciB4eXo1MCA9IHVzZU1vZGUoZGVmaW5pdGlvbiQyKTtcbnZhciB4eXo2NSA9IHVzZU1vZGUoZGVmaW5pdGlvbiQxKTtcbnZhciB5aXEgPSB1c2VNb2RlKGRlZmluaXRpb24pO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL0tNZWFuLnRzXG52YXIgc29ydENvbG9ycyA9IChsaXN0LCBjcml0ZXJpYSA9IFwibFwiKSA9PiBsaXN0LnNvcnQoKGEsIGIpID0+IE1hdGguc2lnbihva2xjaCh7XG5cdG1vZGU6IFwicmdiXCIsXG5cdHI6IGFbMF0sXG5cdGc6IGFbMV0sXG5cdGI6IGFbMl1cbn0pPy5bY3JpdGVyaWFdIC0gb2tsY2goe1xuXHRtb2RlOiBcInJnYlwiLFxuXHRyOiBiWzBdLFxuXHRnOiBiWzFdLFxuXHRiOiBiWzJdXG59KT8uW2NyaXRlcmlhXSkgfHwgMCk7XG52YXIgZXVjbGlkZWFuRGlzdGFuY2UgPSAoY29sb3IxLCBjb2xvcjIpID0+IE1hdGguaHlwb3QoY29sb3IxWzBdIC0gY29sb3IyWzBdLCBjb2xvcjFbMV0gLSBjb2xvcjJbMV0sIGNvbG9yMVsyXSAtIGNvbG9yMlsyXSk7XG52YXIgbWFrZUNsdXN0ZXJzID0gKGRhdGEsIGNlbnRyb2lkcykgPT4ge1xuXHRsZXQgY2x1c3RlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZW50cm9pZHMubGVuZ3RoIH0sICgpID0+ICh7XG5cdFx0cG9pbnRzOiBbXSxcblx0XHRtZWFuOiBudWxsXG5cdH0pKTtcblx0ZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xuXHRcdGxldCBtaW5EaXN0YW5jZSA9IDFlNDtcblx0XHRsZXQgbWluRGlzdGFuY2VDbHVzdGVySW5kZXggPSAwO1xuXHRcdGNlbnRyb2lkcy5mb3JFYWNoKChjZW50cm9pZCwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gZXVjbGlkZWFuRGlzdGFuY2UocG9pbnQsIGNlbnRyb2lkKTtcblx0XHRcdGlmICh0eXBlb2YgbWluRGlzdGFuY2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuXHRcdFx0XHRtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNsdXN0ZXJzW21pbkRpc3RhbmNlQ2x1c3RlckluZGV4XS5wb2ludHMucHVzaChwb2ludCk7XG5cdH0pO1xuXHRyZXR1cm4gY2x1c3RlcnM7XG59O1xudmFyIGNvbXB1dGVNZWFuID0gKHBvaW50cykgPT4ge1xuXHRyZXR1cm4gcG9pbnRzPy5sZW5ndGggPiAwID8gcG9pbnRzLnJlZHVjZSgoYWNjLCBwb2ludCkgPT4gW1xuXHRcdHBvaW50WzBdICsgYWNjWzBdLFxuXHRcdHBvaW50WzFdICsgYWNjWzFdLFxuXHRcdHBvaW50WzJdICsgYWNjWzJdXG5cdF0sIFtcblx0XHQwLFxuXHRcdDAsXG5cdFx0MFxuXHRdKS5tYXAoKHZhbCkgPT4gdmFsIC8gcG9pbnRzLmxlbmd0aCkgOiBbXG5cdFx0MCxcblx0XHQwLFxuXHRcdDBcblx0XTtcbn07XG52YXIga01lYW5zID0gKGRhdGEsIGspID0+IHtcblx0bGV0IGNlbnRyb2lkcyA9IHNvcnRDb2xvcnMoaW5pdGlhbGl6ZUNlbnRyb2lkcyhkYXRhLCBrKSk7XG5cdGNvbnN0IG1heEl0ZXJhdGlvbnMgPSAxMDtcblx0Zm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgbWF4SXRlcmF0aW9uczsgaXRlcmF0aW9uKyspIHtcblx0XHRjb25zdCBuZXdDZW50cm9pZHMgPSBtYWtlQ2x1c3RlcnMoZGF0YSwgY2VudHJvaWRzKS5tYXAoKGNsdXN0ZXIpID0+IGNsdXN0ZXIucG9pbnRzLmxlbmd0aCA+IDAgPyBjb21wdXRlTWVhbihjbHVzdGVyLnBvaW50cykgOiBudWxsKTtcblx0XHRpZiAobmV3Q2VudHJvaWRzLmV2ZXJ5KChuZXdDZW50cm9pZCwgaW5kZXgpID0+IG5ld0NlbnRyb2lkICYmIGV1Y2xpZGVhbkRpc3RhbmNlKG5ld0NlbnRyb2lkLCBjZW50cm9pZHNbaW5kZXhdKSA8IC4wMDEpKSBicmVhaztcblx0XHRjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG5cdH1cblx0cmV0dXJuIGNlbnRyb2lkcztcbn07XG52YXIgaW5pdGlhbGl6ZUNlbnRyb2lkcyA9IChkYXRhLCBrKSA9PiB7XG5cdGNvbnN0IGNlbnRyb2lkcyA9IFtkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV1dO1xuXHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRjb25zdCBkaXN0YW5jZXMgPSBkYXRhLm1hcCgocG9pbnQpID0+IE1hdGgubWluKC4uLmNlbnRyb2lkcy5tYXAoKGNlbnRyb2lkKSA9PiBldWNsaWRlYW5EaXN0YW5jZShwb2ludCwgY2VudHJvaWQpKSkpO1xuXHRcdGNvbnN0IHRvdGFsRGlzdGFuY2UgPSBkaXN0YW5jZXMucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuXHRcdGNvbnN0IHByb2JhYmlsaXRpZXMgPSBkaXN0YW5jZXMubWFwKChkKSA9PiBkIC8gdG90YWxEaXN0YW5jZSk7XG5cdFx0bGV0IGN1bXVsYXRpdmVQcm9iYWJpbGl0eSA9IDA7XG5cdFx0Y29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmFiaWxpdGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXRpZXNbaV07XG5cdFx0XHRpZiAocmFuZG9tVmFsdWUgPCBjdW11bGF0aXZlUHJvYmFiaWxpdHkpIHtcblx0XHRcdFx0Y2VudHJvaWRzLnB1c2goZGF0YVtpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2VudHJvaWRzO1xufTtcbnZhciBwcmVCbHVyUGl4ZWxzID0gYXN5bmMgKGltZ1VSTCkgPT4ge1xuXHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiB8fCBpbWdVUkwgaW5zdGFuY2VvZiBGaWxlID8gaW1nVVJMIDogYXdhaXQgZmV0Y2goaW1nVVJMKT8udGhlbj8uKChyKSA9PiByPy5ibG9iPy4oKSk7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xuXHRjb25zdCBvZmZzZXQgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eC5maWx0ZXIgPSBcImJsdXIoMTZweClcIjtcblx0Y3R4Py5kcmF3SW1hZ2U/LihiaXRtYXAsIDAsIDAsIG9mZnNldC53aWR0aCwgb2Zmc2V0LmhlaWdodCk7XG5cdHJldHVybiBvZmZzZXQ7XG59O1xudmFyIGdldENsdXN0ZXJJbWFnZURhdGEgPSBhc3luYyAoaW1nVVJMKSA9PiB7XG5cdGNvbnN0IGJpdG1hcCA9IGF3YWl0IHByZUJsdXJQaXhlbHMoaW1nVVJMKTtcblx0Y29uc3Qgb2Zmc2V0ID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhiaXRtYXAud2lkdGggKiAuMTI1LCBiaXRtYXAuaGVpZ2h0ICogLjEyNSk7XG5cdGNvbnN0IGN0eCA9IG9mZnNldC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGN0eD8uZHJhd0ltYWdlPy4oYml0bWFwLCAwLCAwLCBvZmZzZXQud2lkdGgsIG9mZnNldC5oZWlnaHQpO1xuXHRjb25zdCBkYXRhID0gKGN0eD8uZ2V0SW1hZ2VEYXRhPy4oMCwgMCwgb2Zmc2V0LndpZHRoLCBvZmZzZXQuaGVpZ2h0LCB7XG5cdFx0c3RvcmFnZUZvcm1hdDogXCJmbG9hdDMyXCIsXG5cdFx0cGl4ZWxGb3JtYXQ6IFwicmdiYS1mbG9hdDMyXCIsXG5cdFx0Y29sb3JTcGFjZTogXCJzcmdiXCJcblx0fSkpLmRhdGE7XG5cdGNvbnN0IGFsbENvdW50ID0gb2Zmc2V0LndpZHRoICogb2Zmc2V0LmhlaWdodCB8fCAwO1xuXHRjb25zdCBkdiA9IDEgLyAyNTU7XG5cdGNvbnN0IGZwMzIgPSBbXTtcblx0Zm9yIChsZXQgcyA9IDA7IHMgPCBhbGxDb3VudDsgcysrKSB7XG5cdFx0Y29uc3QgaTQgPSBzICogNDtcblx0XHRmcDMyLnB1c2goZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBkYXRhIGluc3RhbmNlb2YgRmxvYXQxNkFycmF5ID8gW1xuXHRcdFx0ZGF0YT8uW2k0ICsgMF0gfHwgMCxcblx0XHRcdGRhdGE/LltpNCArIDFdIHx8IDAsXG5cdFx0XHRkYXRhPy5baTQgKyAyXSB8fCAwXG5cdFx0XSA6IFtcblx0XHRcdChkYXRhPy5baTQgKyAwXSB8fCAwKSAqIGR2LFxuXHRcdFx0KGRhdGE/LltpNCArIDFdIHx8IDApICogZHYsXG5cdFx0XHQoZGF0YT8uW2k0ICsgMl0gfHwgMCkgKiBkdlxuXHRcdF0pO1xuXHR9XG5cdHJldHVybiBmcDMyO1xufTtcbnZhciBnZXREb21pbmFudENvbG9ycyA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENsdXN0ZXJJbWFnZURhdGEoaW1nVVJMKTtcblx0cmV0dXJuIHNvcnRDb2xvcnMoa01lYW5zKGRhdGEsIDQpLCBcImhcIik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZW5naW5lL1dhbGxwYXBlclRoZW1lLnRzXG52YXIgV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWVcIjtcbnZhciBXQUxMUEFQRVJfUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFwicnMtd2FsbHBhcGVyLXByaW1hcnlcIjtcbnZhciBXQUxMUEFQRVJfVEhFTUVfU1JDX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItdGhlbWUtc3JjXCI7XG52YXIgVEhFTUVfU1RPUkFHRV9LRVkgPSBXQUxMUEFQRVJfVEhFTUVfU1RPUkFHRV9LRVk7XG52YXIgUFJJTUFSWV9TVE9SQUdFX0tFWSA9IFdBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZO1xudmFyIFdBTExQQVBFUl9VUkxfS0VZID0gV0FMTFBBUEVSX1RIRU1FX1NSQ19TVE9SQUdFX0tFWTtcbnZhciBQQVBFUl9MX1NQTElUID0gLjUyO1xudmFyIFBBUEVSX0NIUk9NQV9DQVAgPSAuMDI1O1xudmFyIEZBTExCQUNLX1BBUEVSID0ge1xuXHR1bmRlcmx5aW5nOiBcIiMxNjE2MWFcIixcblx0Y29udHJhc3Q6IFwiI2Y3ZjdmOFwiXG59O1xudmFyIGxhc3RMaXZlUGFwZXIgPSBudWxsO1xudmFyIFVTQUJMRV9MVU1BX01JTiA9IC4wMztcbnZhciBTRUVEX1BST1BTID0gW1xuXHRbXCItLWNvbG9yLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLWNvbG9yLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS1jb2xvci10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdLFxuXHRbXCItLWJhc2UtY29sb3JcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXdmLW1kLXNlZWRcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXByaW1hcnlcIiwgXCJwcmltYXJ5XCJdLFxuXHRbXCItLXNlY29uZGFyeVwiLCBcInNlY29uZGFyeVwiXSxcblx0W1wiLS10ZXJ0aWFyeVwiLCBcInRlcnRpYXJ5XCJdXG5dO1xudmFyIGNsYW1wID0gKG4sIGxvLCBoaSkgPT4gTWF0aC5taW4oaGksIE1hdGgubWF4KGxvLCBuKSk7XG52YXIgaGV4T2tsY2ggPSAobCwgYywgaCwgZmFsbGJhY2spID0+IGZvcm1hdEhleCh7XG5cdG1vZGU6IFwib2tsY2hcIixcblx0bCxcblx0Yyxcblx0aFxufSkgfHwgZmFsbGJhY2s7XG52YXIgcmdiVG9TYW1wbGUgPSAocmdiKSA9PiB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IHJnYjtcblx0aWYgKCFbXG5cdFx0cixcblx0XHRnLFxuXHRcdGJcblx0XS5ldmVyeSgobikgPT4gTnVtYmVyLmlzRmluaXRlKG4pKSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGhleCA9IGZvcm1hdEhleCh7XG5cdFx0bW9kZTogXCJyZ2JcIixcblx0XHRyLFxuXHRcdGcsXG5cdFx0YlxuXHR9KTtcblx0aWYgKCFoZXgpIHJldHVybiBudWxsO1xuXHRjb25zdCBvayA9IG9rbGNoKHtcblx0XHRtb2RlOiBcInJnYlwiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHJnYixcblx0XHRoZXgsXG5cdFx0bDogb2s/LmwgPz8gLjUsXG5cdFx0Yzogb2s/LmMgPz8gMCxcblx0XHRoOiBvaz8uaCA/PyAwXG5cdH07XG59O1xudmFyIHBhcGVyTEZyb21IZXggPSAoaGV4KSA9PiBva2xjaChoZXgpPy5sID8/IC40O1xudmFyIGhhbG9Gb3JQYXBlciA9IChkYXJrUGFwZXIpID0+IGRhcmtQYXBlciA/IHtcblx0c2hhZG93OiBcInJnYigwIDAgMCAvIDAuODgpXCIsXG5cdGdsb3c6IFwicmdiKDAgMCAwIC8gMC40NSlcIlxufSA6IHtcblx0c2hhZG93OiBcInJnYigyNTUgMjU1IDI1NSAvIDAuNzIpXCIsXG5cdGdsb3c6IFwicmdiKDI1NSAyNTUgMjU1IC8gMC4zNSlcIlxufTtcbnZhciBpc1VzYWJsZVBhcGVyTHVtYSA9IChsdW1hKSA9PiBOdW1iZXIuaXNGaW5pdGUobHVtYSkgJiYgbHVtYSA+PSBVU0FCTEVfTFVNQV9NSU4gJiYgbHVtYSA8PSAxO1xudmFyIGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMgPSAoc2FtcGxlcywgcGl4ZWxMdW1hKSA9PiB7XG5cdGlmICghc2FtcGxlcy5sZW5ndGggJiYgcGl4ZWxMdW1hID09IG51bGwpIHJldHVybiB7IC4uLkZBTExCQUNLX1BBUEVSIH07XG5cdGNvbnN0IGxzID0gc2FtcGxlcy5tYXAoKHMpID0+IHMubCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXHRjb25zdCBtZWFuTCA9IHNhbXBsZXMubGVuZ3RoID8gc2FtcGxlcy5yZWR1Y2UoKHN1bSwgcykgPT4gc3VtICsgcy5sLCAwKSAvIHNhbXBsZXMubGVuZ3RoIDogcGl4ZWxMdW1hO1xuXHRjb25zdCBtZWRpYW5MID0gbHMubGVuZ3RoID8gbHNbTWF0aC5mbG9vcihscy5sZW5ndGggLyAyKV0gOiBtZWFuTDtcblx0Y29uc3QgcGFwZXJMID0gY2xhbXAocGl4ZWxMdW1hICE9IG51bGwgJiYgaXNVc2FibGVQYXBlckx1bWEocGl4ZWxMdW1hKSA/IHBpeGVsTHVtYSA6IE1hdGgubWF4KG1lYW5MLCBtZWRpYW5MKSwgLjA4LCAuOTQpO1xuXHRjb25zdCBwYXBlciA9IHNhbXBsZXMubGVuZ3RoID8gWy4uLnNhbXBsZXNdLnNvcnQoKGEsIGIpID0+IGEuYyAtIGIuYyB8fCBNYXRoLmFicyhhLmwgLSBwYXBlckwpIC0gTWF0aC5hYnMoYi5sIC0gcGFwZXJMKSlbMF0gOiBudWxsO1xuXHRjb25zdCBwYXBlckMgPSBwYXBlciA/IE1hdGgubWluKFBBUEVSX0NIUk9NQV9DQVAsIE1hdGgubWF4KDAsIHBhcGVyLmMgKiAuMikpIDogMDtcblx0Y29uc3QgaCA9IHBhcGVyPy5oIHx8IDA7XG5cdGNvbnN0IGRhcmtQYXBlciA9IHBhcGVyTCA8IFBBUEVSX0xfU1BMSVQ7XG5cdHJldHVybiB7XG5cdFx0dW5kZXJseWluZzogaGV4T2tsY2gocGFwZXJMLCBwYXBlckMsIGgsIGRhcmtQYXBlciA/IEZBTExCQUNLX1BBUEVSLnVuZGVybHlpbmcgOiBcIiNlOGU2ZTJcIiksXG5cdFx0Y29udHJhc3Q6IGhleE9rbGNoKGRhcmtQYXBlciA/IC45MyA6IC4xNiwgLjAwOCwgaCwgZGFya1BhcGVyID8gRkFMTEJBQ0tfUEFQRVIuY29udHJhc3QgOiBcIiMxNDE0MTZcIilcblx0fTtcbn07XG52YXIgc2FtcGxlSW1hZ2VNZWFuTHVtYSA9IGFzeW5jIChpbWdVUkwpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gaW1nVVJMIGluc3RhbmNlb2YgQmxvYiA/IGltZ1VSTCA6IGF3YWl0IChhd2FpdCBmZXRjaChpbWdVUkwpKS5ibG9iKCk7XG5cdFx0aWYgKCFibG9iIHx8IGJsb2Iuc2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblx0XHRjb25zdCB3ID0gNDg7XG5cdFx0Y29uc3QgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoYml0bWFwLmhlaWdodCAvIE1hdGgubWF4KDEsIGJpdG1hcC53aWR0aCkgKiB3KSk7XG5cdFx0Y29uc3QgY2FudmFzID0gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBPZmZzY3JlZW5DYW52YXModywgaCkgOiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHtcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoXG5cdFx0fSk7XG5cdFx0aWYgKCEoY2FudmFzIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSkge1xuXHRcdFx0Y2FudmFzLndpZHRoID0gdztcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBoO1xuXHRcdH1cblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGlmICghY3R4KSB7XG5cdFx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCB3LCBoKTtcblx0XHRiaXRtYXAuY2xvc2U/LigpO1xuXHRcdGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGE7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0bGV0IG4gPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTYpIHtcblx0XHRcdGlmICgoZGF0YVtpICsgM10gPz8gMjU1KSA8IDE2KSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHIgPSBkYXRhW2ldIC8gMjU1O1xuXHRcdFx0Y29uc3QgZyA9IGRhdGFbaSArIDFdIC8gMjU1O1xuXHRcdFx0Y29uc3QgYiA9IGRhdGFbaSArIDJdIC8gMjU1O1xuXHRcdFx0c3VtICs9IC4yMTI2ICogciArIC43MTUyICogZyArIC4wNzIyICogYjtcblx0XHRcdG4rKztcblx0XHR9XG5cdFx0aWYgKG4gPCA4KSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBsdW1hID0gc3VtIC8gbjtcblx0XHRyZXR1cm4gaXNVc2FibGVQYXBlckx1bWEobHVtYSkgPyBsdW1hIDogbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYSA9IChsdW1hKSA9PiB7XG5cdHJldHVybiBsdW1hIDw9IFBBUEVSX0xfU1BMSVQgPyB7IC4uLkZBTExCQUNLX1BBUEVSIH0gOiB7XG5cdFx0dW5kZXJseWluZzogXCIjZThlNmUyXCIsXG5cdFx0Y29udHJhc3Q6IFwiIzE0MTQxNlwiXG5cdH07XG59O1xudmFyIGhhc1dhbGxwYXBlclBhcGVyID0gKHNlZWRzKSA9PiBCb29sZWFuKHNlZWRzLnVuZGVybHlpbmcgJiYgc2VlZHMuY29udHJhc3QpO1xudmFyIHJhbmtXYWxscGFwZXJTZWVkcyA9IChjZW50cm9pZHMsIHBpeGVsTHVtYSkgPT4ge1xuXHRjb25zdCBzYW1wbGVzID0gY2VudHJvaWRzLm1hcChyZ2JUb1NhbXBsZSkuZmlsdGVyKEJvb2xlYW4pO1xuXHRpZiAoIXNhbXBsZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYWNjZW50UG9vbCA9IHNhbXBsZXMuZmlsdGVyKChzKSA9PiBzLmwgPj0gLjE4ICYmIHMubCA8PSAuODggJiYgcy5jID49IC4wMikuc29ydCgoYSwgYikgPT4gYi5jIC0gYS5jIHx8IE1hdGguYWJzKGIubCAtIC41NSkgLSBNYXRoLmFicyhhLmwgLSAuNTUpKTtcblx0Y29uc3QgcG9vbCA9IGFjY2VudFBvb2wubGVuZ3RoID8gYWNjZW50UG9vbCA6IFsuLi5zYW1wbGVzXS5zb3J0KChhLCBiKSA9PiBiLmMgLSBhLmMpO1xuXHRjb25zdCBwcmltYXJ5ID0gcG9vbFswXTtcblx0aWYgKCFwcmltYXJ5KSByZXR1cm4gbnVsbDtcblx0Y29uc3QgaHVlRGlzdCA9IChhLCBiKSA9PiB7XG5cdFx0Y29uc3QgZCA9IE1hdGguYWJzKGEgLSBiKSAlIDM2MDtcblx0XHRyZXR1cm4gZCA+IDE4MCA/IDM2MCAtIGQgOiBkO1xuXHR9O1xuXHRjb25zdCBwaWNrTmV4dCA9ICh1c2VkKSA9PiB7XG5cdFx0Y29uc3QgcmVzdCA9IHBvb2wuZmlsdGVyKChzKSA9PiAhdXNlZC5pbmNsdWRlcyhzKSk7XG5cdFx0aWYgKCFyZXN0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgYmFzZSA9IHVzZWRbdXNlZC5sZW5ndGggLSAxXSA/PyBwcmltYXJ5O1xuXHRcdFx0Y29uc3QgbnVkZ2VkID0gZm9ybWF0SGV4KHtcblx0XHRcdFx0bW9kZTogXCJva2xjaFwiLFxuXHRcdFx0XHRsOiBNYXRoLm1pbiguODUsIE1hdGgubWF4KC4yLCBiYXNlLmwgKyAodXNlZC5sZW5ndGggPT09IDEgPyAtLjEyIDogLjEpKSksXG5cdFx0XHRcdGM6IE1hdGgubWF4KC4wNCwgYmFzZS5jICogLjg1KSxcblx0XHRcdFx0aDogYmFzZS5oXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmJhc2UsXG5cdFx0XHRcdGhleDogbnVkZ2VkIHx8IGJhc2UuaGV4LFxuXHRcdFx0XHRsOiBiYXNlLmxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBbLi4ucmVzdF0uc29ydCgoYSwgYikgPT4gTWF0aC5taW4oLi4udXNlZC5tYXAoKHUpID0+IGh1ZURpc3QoYi5oLCB1LmgpKSkgLSBNYXRoLm1pbiguLi51c2VkLm1hcCgodSkgPT4gaHVlRGlzdChhLmgsIHUuaCkpKSB8fCBiLmMgLSBhLmMpWzBdID8/IHJlc3RbMF07XG5cdH07XG5cdGNvbnN0IHNlY29uZGFyeSA9IHBpY2tOZXh0KFtwcmltYXJ5XSk7XG5cdGNvbnN0IHRlcnRpYXJ5ID0gcGlja05leHQoW3ByaW1hcnksIHNlY29uZGFyeV0pO1xuXHRjb25zdCBwYXBlciA9IGRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMoc2FtcGxlcywgcGl4ZWxMdW1hKTtcblx0cmV0dXJuIHtcblx0XHRwcmltYXJ5OiBwcmltYXJ5LmhleCxcblx0XHRzZWNvbmRhcnk6IHNlY29uZGFyeS5oZXgsXG5cdFx0dGVydGlhcnk6IHRlcnRpYXJ5LmhleCxcblx0XHQuLi5wYXBlclxuXHR9O1xufTtcbnZhciB0aGVtZUhvc3RzID0gKCkgPT4ge1xuXHRjb25zdCBub2RlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdG5vZGVzLmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVudi1zaGVsbC1yb290LCAud2YtZGVtby1yb290LCB1aS13aW5kb3dcIikuZm9yRWFjaCgoZWwpID0+IG5vZGVzLmFkZChlbCkpO1xuXHRyZXR1cm4gWy4uLm5vZGVzXTtcbn07XG52YXIgd2FsbHBhcGVyU2VlZHNNYXlQYWludCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHNyYyA9IFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jb2xvclNvdXJjZSB8fCBcIlwiKTtcblx0aWYgKCFzcmMpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gc3JjID09PSBcIndhbGxwYXBlclwiIHx8IHNyYyA9PT0gXCJzcGVlZC1kaWFsXCIgfHwgc3JjID09PSBcInN5c3RlbS13YWxscGFwZXJcIjtcbn07XG52YXIgaXNWYWxpZENvbG9yID0gKGNvbG9yKSA9PiBCb29sZWFuKHBhcnNlKGNvbG9yKSk7XG52YXIgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucyA9IChwYXBlciwgZXh0cmFIb3N0cyA9IFtdKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgZGFya1BhcGVyID0gcGFwZXJMRnJvbUhleChwYXBlci51bmRlcmx5aW5nKSA8IFBBUEVSX0xfU1BMSVQ7XG5cdGNvbnN0IHsgc2hhZG93LCBnbG93IH0gPSBoYWxvRm9yUGFwZXIoZGFya1BhcGVyKTtcblx0Y29uc3QgaG9zdHMgPSBuZXcgU2V0KHRoZW1lSG9zdHMoKSk7XG5cdGZvciAoY29uc3QgZWwgb2YgZXh0cmFIb3N0cykgaG9zdHMuYWRkKGVsKTtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIudW5kZXJseWluZykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IocGFwZXIuY29udHJhc3QpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKHNoYWRvdykpIHJldHVybjtcblx0aWYgKCFpc1ZhbGlkQ29sb3IoZ2xvdykpIHJldHVybjtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0cmVnaXN0ZXJDb2xvclByb3BlcnR5KFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRyZWdpc3RlckNvbG9yUHJvcGVydHkoXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHRmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS13YWxscGFwZXItY29udHJhc3QtY29sb3JcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZ1wiLCBwYXBlci5jb250cmFzdCk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWVudi1sYXVuY2hlci1mZy1nbG93XCIsIGdsb3cpO1xuXHR9XG5cdGNvbnN0IGdsb2JhbFF1ZXJ5ID0gUShcImJvZHksIGh0bWwsIC53Zi1kZW1vLXJvb3QsIHVpLXdpbmRvdywgLnZpZXctZXhwbG9yZXIsIFtkYXRhLXZpZXc9J2V4cGxvcmVyJ10sIC52aWV3LXZpZXdlciwgW2RhdGEtdmlldz0ndmlld2VyJ10sIC52aWV3LXNldHRpbmdzLCBbZGF0YS12aWV3PSdzZXR0aW5ncyddLCAuY3ctbmV0d29yay12aWV3LCAuY3ctbmV0d29yay12aWV3LWhvc3RcIik7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS13YWxscGFwZXItdW5kZXJseWluZy1jb2xvclwiLCBwYXBlci51bmRlcmx5aW5nKTtcblx0Z2xvYmFsUXVlcnkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdhbGxwYXBlci1jb250cmFzdC1jb2xvclwiLCBwYXBlci5jb250cmFzdCk7XG5cdGdsb2JhbFF1ZXJ5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1lbnYtbGF1bmNoZXItZmdcIiwgcGFwZXIuY29udHJhc3QpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLXNoYWRvd1wiLCBzaGFkb3cpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZW52LWxhdW5jaGVyLWZnLWdsb3dcIiwgZ2xvdyk7XG59O1xudmFyIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSA9IChuYW1lLCBpbml0aWFsVmFsdWUgPSBcIiM1YTllYzhcIikgPT4ge1xuXHR0cnkge1xuXHRcdENTUz8ucmVnaXN0ZXJQcm9wZXJ0eT8uKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRzeW50YXg6IFwiPGNvbG9yPlwiLFxuXHRcdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0XHRpbml0aWFsVmFsdWVcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmRlYnVnKGVycm9yKTtcblx0fVxufTtcbnZhciBwZXJzaXN0TGl2ZVBhcGVyID0gKHBhcGVyKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0aWYgKCFjYWNoZWQpIHJldHVybjtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0Li4uY2FjaGVkLFxuXHRcdFx0dW5kZXJseWluZzogcGFwZXIudW5kZXJseWluZyxcblx0XHRcdGNvbnRyYXN0OiBwYXBlci5jb250cmFzdFxuXHRcdH0pKTtcblx0fSBjYXRjaCB7fVxufTtcbnZhciBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEgPSAobHVtYSwgZXh0cmFIb3N0cyA9IFtdKSA9PiB7XG5cdGlmICghaXNVc2FibGVQYXBlckx1bWEobHVtYSkpIHtcblx0XHRpZiAobGFzdExpdmVQYXBlcikge1xuXHRcdFx0YXBwbHlXYWxscGFwZXJQYXBlclRva2VucyhsYXN0TGl2ZVBhcGVyLCBleHRyYUhvc3RzKTtcblx0XHRcdHJldHVybiBsYXN0TGl2ZVBhcGVyO1xuXHRcdH1cblx0XHRyZXR1cm4geyAuLi5GQUxMQkFDS19QQVBFUiB9O1xuXHR9XG5cdGNvbnN0IHBhcGVyID0gZGVyaXZlV2FsbHBhcGVyUGFwZXJUb2tlbnNGcm9tTHVtYShsdW1hKTtcblx0bGFzdExpdmVQYXBlciA9IHBhcGVyO1xuXHRhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zKHBhcGVyLCBleHRyYUhvc3RzKTtcblx0cGVyc2lzdExpdmVQYXBlcihwYXBlcik7XG5cdHJldHVybiBwYXBlcjtcbn07XG52YXIgYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzID0gKHNlZWRzKSA9PiB7XG5cdGNvbnN0IG5leHQgPSBsYXN0TGl2ZVBhcGVyID8ge1xuXHRcdC4uLnNlZWRzLFxuXHRcdC4uLmxhc3RMaXZlUGFwZXJcblx0fSA6IHNlZWRzO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShuZXh0KSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJJTUFSWV9TVE9SQUdFX0tFWSwgbmV4dC5wcmltYXJ5KTtcblx0fSBjYXRjaCB7fVxuXHRpZiAoaGFzV2FsbHBhcGVyUGFwZXIobmV4dCkpIGFwcGx5V2FsbHBhcGVyUGFwZXJUb2tlbnMobmV4dCk7XG5cdGlmICghd2FsbHBhcGVyU2VlZHNNYXlQYWludCgpKSByZXR1cm47XG5cdGZvciAoY29uc3QgaG9zdCBvZiB0aGVtZUhvc3RzKCkpIGZvciAoY29uc3QgW3Byb3AsIGtleV0gb2YgU0VFRF9QUk9QUykgc2V0U3R5bGVQcm9wZXJ0eShob3N0LCBwcm9wLCBuZXh0W2tleV0pO1xuXHRpZiAoIWlzVmFsaWRDb2xvcihuZXh0LnByaW1hcnkpKSByZXR1cm47XG5cdGlmICghaXNWYWxpZENvbG9yKG5leHQuc2Vjb25kYXJ5KSkgcmV0dXJuO1xuXHRpZiAoIWlzVmFsaWRDb2xvcihuZXh0LnRlcnRpYXJ5KSkgcmV0dXJuO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSwgaHRtbCwgLndmLWRlbW8tcm9vdCwgdWktd2luZG93LCAudmlldy1leHBsb3JlciwgW2RhdGEtdmlldz0nZXhwbG9yZXInXSwgLnZpZXctdmlld2VyLCBbZGF0YS12aWV3PSd2aWV3ZXInXSwgLnZpZXctc2V0dGluZ3MsIFtkYXRhLXZpZXc9J3NldHRpbmdzJ10sIC5jdy1uZXR3b3JrLXZpZXcsIC5jdy1uZXR3b3JrLXZpZXctaG9zdFwiKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdHNldFN0eWxlUHJvcGVydHkoZWwsIFwiLS1jb2xvci1wcmltYXJ5XCIsIG5leHQucHJpbWFyeSk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShlbCwgXCItLWJhc2UtY29sb3JcIiwgbmV4dC5wcmltYXJ5KTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGVsLCBcIi0tY29sb3Itc2Vjb25kYXJ5XCIsIG5leHQuc2Vjb25kYXJ5KTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGVsLCBcIi0tY29sb3ItdGVydGlhcnlcIiwgbmV4dC50ZXJ0aWFyeSk7XG5cdH0pO1xuXHRjb25zdCBnbG9iYWxRdWVyeSA9IFEoXCJib2R5LCBodG1sLCAud2YtZGVtby1yb290LCB1aS13aW5kb3csIC52aWV3LWV4cGxvcmVyLCBbZGF0YS12aWV3PSdleHBsb3JlciddLCAudmlldy12aWV3ZXIsIFtkYXRhLXZpZXc9J3ZpZXdlciddLCAudmlldy1zZXR0aW5ncywgW2RhdGEtdmlldz0nc2V0dGluZ3MnXSwgLmN3LW5ldHdvcmstdmlldywgLmN3LW5ldHdvcmstdmlldy1ob3N0XCIpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3ItcHJpbWFyeVwiLCBuZXh0LnByaW1hcnkpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmFzZS1jb2xvclwiLCBuZXh0LnByaW1hcnkpO1xuXHRnbG9iYWxRdWVyeS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3Itc2Vjb25kYXJ5XCIsIG5leHQuc2Vjb25kYXJ5KTtcblx0Z2xvYmFsUXVlcnkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLXRlcnRpYXJ5XCIsIG5leHQudGVydGlhcnkpO1xuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInUyLXRoZW1lLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdHNvdXJjZTogXCJ3YWxscGFwZXJcIixcblx0XHRzZWVkczogbmV4dFxuXHR9IH0pKTtcbn07XG52YXIgbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX1NUT1JBR0VfS0VZKTtcblx0XHRpZiAoIXJhdykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpO1xuXHRcdGlmICghcGFyc2VkPy5wcmltYXJ5IHx8ICFwYXJzZWQ/LnNlY29uZGFyeSB8fCAhcGFyc2VkPy50ZXJ0aWFyeSkgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgYXBwbHlUaGVtZUZyb21XYWxscGFwZXIgPSBhc3luYyAoaW1nVVJMLCBvcHRzKSA9PiB7XG5cdGNvbnN0IHNyY0tleSA9IHR5cGVvZiBpbWdVUkwgPT09IFwic3RyaW5nXCIgPyBpbWdVUkwuc2xpY2UoMCwgMjA0OCkgOiBgYmxvYjoke2ltZ1VSTC5uYW1lIHx8IFwid2FsbHBhcGVyXCJ9OiR7aW1nVVJMLnNpemV9YDtcblx0Y29uc3QgbGl2ZUx1bWEgPSBhd2FpdCBzYW1wbGVJbWFnZU1lYW5MdW1hKGltZ1VSTCk7XG5cdGlmIChsaXZlTHVtYSAhPSBudWxsKSBhcHBseVdhbGxwYXBlclBhcGVyRnJvbUx1bWEobGl2ZUx1bWEpO1xuXHRpZiAoIW9wdHM/LmZvcmNlKSB0cnkge1xuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXQUxMUEFQRVJfVVJMX0tFWSkgPT09IHNyY0tleSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lKCk7XG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdFx0XHQuLi5jYWNoZWQsXG5cdFx0XHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdFx0XHR9IDogY2FjaGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdGNvbnN0IGNlbnRyb2lkcyA9IGF3YWl0IGdldERvbWluYW50Q29sb3JzKGltZ1VSTCk7XG5cdFx0Y29uc3Qgc2VlZHMgPSByYW5rV2FsbHBhcGVyU2VlZHMoY2VudHJvaWRzLCBsaXZlTHVtYSA/PyB2b2lkIDApO1xuXHRcdGlmICghc2VlZHMpIHJldHVybiBudWxsO1xuXHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhzZWVkcyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9VUkxfS0VZLCBzcmNLZXkpO1xuXHRcdH0gY2F0Y2gge31cblx0XHRyZXR1cm4gbGFzdExpdmVQYXBlciA/IHtcblx0XHRcdC4uLnNlZWRzLFxuXHRcdFx0Li4ubGFzdExpdmVQYXBlclxuXHRcdH0gOiBzZWVkcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyIGZhaWxlZFwiLCBlcnIpO1xuXHRcdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdGFwcGx5V2FsbHBhcGVyVGhlbWVTZWVkcyhjYWNoZWQpO1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNhY2hlZCA9IGxvYWRDYWNoZWRXYWxscGFwZXJUaGVtZSgpO1xuXHRpZiAoY2FjaGVkKSBhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMoY2FjaGVkKTtcblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9jYW52YXMvQ2FudmFzLnRzXG52YXIgV0FMTFBBUEVSX1NUT1JBR0VfS0VZID0gXCJycy13YWxscGFwZXItaW1hZ2VcIjtcbnZhciBERUZBVUxUX1dBTExQQVBFUl9VUkwgPSBcIi9hc3NldHMvd2FsbHBhcGVyLmpwZ1wiO1xudmFyIFdBTExQQVBFUl9JREJfTUFSS0VSID0gXCJpZGI6cnMtd2FsbHBhcGVyXCI7XG52YXIgSURCX05BTUUgPSBcImN3c3Atd2FsbHBhcGVyLXYxXCI7XG52YXIgSURCX1NUT1JFID0gXCJibG9ic1wiO1xudmFyIElEQl9LRVkgPSBcImN1cnJlbnRcIjtcbnZhciBMT0NBTF9TVE9SQUdFX1NBRkVfQ0hBUlMgPSA1MTJlMztcbnZhciBsaXZlT2JqZWN0VXJsID0gbnVsbDtcbnZhciB3YWxscGFwZXJFcG9jaCA9IDA7XG52YXIgY3VycmVudE9yaWVudE51bWJlciA9ICgpID0+IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG52YXIgaXNJZGJQb2ludGVyID0gKHBvaW50ZXIpID0+IHBvaW50ZXIgPT09IFwiaWRiOnJzLXdhbGxwYXBlclwiIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImlkYjpcIik7XG52YXIgaXNVbnVzYWJsZVN0b3JlZFVybCA9IChwb2ludGVyKSA9PiBwb2ludGVyLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fCBwb2ludGVyLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSAmJiBwb2ludGVyLmxlbmd0aCA+IExPQ0FMX1NUT1JBR0VfU0FGRV9DSEFSUztcbnZhciByZXZva2VMaXZlT2JqZWN0VXJsID0gKCkgPT4ge1xuXHR3YWxscGFwZXJFcG9jaCArPSAxO1xuXHRpZiAobGl2ZU9iamVjdFVybCAmJiBsaXZlT2JqZWN0VXJsLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgdHJ5IHtcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKGxpdmVPYmplY3RVcmwpO1xuXHR9IGNhdGNoIHt9XG5cdGxpdmVPYmplY3RVcmwgPSBudWxsO1xufTtcbnZhciBhZG9wdFdhbGxwYXBlckJsb2IgPSAoYmxvYiwgZXBvY2gpID0+IHtcblx0aWYgKGVwb2NoICE9PSB3YWxscGFwZXJFcG9jaCkgcmV0dXJuIGxpdmVPYmplY3RVcmw7XG5cdGlmIChsaXZlT2JqZWN0VXJsKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0bGl2ZU9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdHJldHVybiBsaXZlT2JqZWN0VXJsO1xufTtcbnZhciBvcGVuV2FsbHBhcGVyRGIgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGlmICh0eXBlb2YgaW5kZXhlZERCID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0cmVqZWN0KC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJpbmRleGVkREIgdW5hdmFpbGFibGVcIikpO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCByZXEgPSBpbmRleGVkREIub3BlbihJREJfTkFNRSwgMSk7XG5cdHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGIgPSByZXEucmVzdWx0O1xuXHRcdGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhJREJfU1RPUkUpKSBkYi5jcmVhdGVPYmplY3RTdG9yZShJREJfU1RPUkUpO1xuXHR9O1xuXHRyZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXEucmVzdWx0KTtcblx0cmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgb3BlbiBmYWlsZWRcIikpO1xufSk7XG52YXIgaWRiUHV0V2FsbHBhcGVyID0gYXN5bmMgKGJsb2IpID0+IHtcblx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHR0eC5vYmplY3RTdG9yZShJREJfU1RPUkUpLnB1dChibG9iLCBJREJfS0VZKTtcblx0XHRcdHR4Lm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG5cdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgcHV0IGZhaWxlZFwiKSk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0ZGIuY2xvc2UoKTtcblx0fVxufTtcbnZhciBpZGJHZXRXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGRiID0gYXdhaXQgb3BlbldhbGxwYXBlckRiKCk7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHJlcSA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShJREJfU1RPUkUpLmdldChJREJfS0VZKTtcblx0XHRcdHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHYgPSByZXEucmVzdWx0O1xuXHRcdFx0XHRyZXNvbHZlKHYgaW5zdGFuY2VvZiBCbG9iID8gdiA6IG51bGwpO1xuXHRcdFx0fTtcblx0XHRcdHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvciB8fCAvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKFwiSURCIGdldCBmYWlsZWRcIikpO1xuXHRcdH0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRiLmNsb3NlKCk7XG5cdH1cbn07XG52YXIgaWRiQ2xlYXJXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGIgPSBhd2FpdCBvcGVuV2FsbHBhcGVyRGIoKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKElEQl9TVE9SRSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0XHRcdHR4Lm9iamVjdFN0b3JlKElEQl9TVE9SRSkuZGVsZXRlKElEQl9LRVkpO1xuXHRcdFx0XHR0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHRcdFx0XHR0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRXJyb3IoXCJJREIgZGVsZXRlIGZhaWxlZFwiKSk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZGIuY2xvc2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG52YXIgcmVhZFN0b3JhZ2VQb2ludGVyID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV0FMTFBBUEVSX1NUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudHJpbSgpID8gdmFsdWUudHJpbSgpIDogREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xuXHR9XG59O1xudmFyIHdyaXRlU3RvcmFnZVBvaW50ZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdBTExQQVBFUl9TVE9SQUdFX0tFWSwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgcmVzdG9yZVdhbGxwYXBlckJsb2JVcmwgPSBhc3luYyAoKSA9PiB7XG5cdGlmIChsaXZlT2JqZWN0VXJsKSByZXR1cm4gbGl2ZU9iamVjdFVybDtcblx0Y29uc3QgZXBvY2ggPSB3YWxscGFwZXJFcG9jaDtcblx0dHJ5IHtcblx0XHRjb25zdCBibG9iID0gYXdhaXQgaWRiR2V0V2FsbHBhcGVyKCk7XG5cdFx0aWYgKCFibG9iKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gYWRvcHRXYWxscGFwZXJCbG9iKGJsb2IsIGVwb2NoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHdhbGxwYXBlciBJREIgcmVzdG9yZSBmYWlsZWRcIiwgZXJyKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBpc0lubGluZVBheWxvYWQgPSAodXJsKSA9PiB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHVybC5zdGFydHNXaXRoKFwiYmxvYjpcIik7XG52YXIgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRpZiAoaXNJZGJQb2ludGVyKHBvaW50ZXIpIHx8IGlzVW51c2FibGVTdG9yZWRVcmwocG9pbnRlcikpIHtcblx0XHRjb25zdCB1cmwgPSBhd2FpdCByZXN0b3JlV2FsbHBhcGVyQmxvYlVybCgpO1xuXHRcdGlmICh1cmwpIHtcblx0XHRcdGlmICghaXNJZGJQb2ludGVyKHBvaW50ZXIpKSB3cml0ZVN0b3JhZ2VQb2ludGVyKFdBTExQQVBFUl9JREJfTUFSS0VSKTtcblx0XHRcdHJldHVybiB1cmw7XG5cdFx0fVxuXHRcdHJldHVybiBERUZBVUxUX1dBTExQQVBFUl9VUkw7XG5cdH1cblx0cmV0dXJuIHBvaW50ZXIgfHwgREVGQVVMVF9XQUxMUEFQRVJfVVJMO1xufTtcbnZhciBnZXRXYWxscGFwZXJTdG9yYWdlUG9pbnRlciA9ICgpID0+IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xudmFyIHN5bmNDYW52YXNPcmllbnQgPSAoY2FudmFzKSA9PiB7XG5cdGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG4gPSBjdXJyZW50T3JpZW50TnVtYmVyKCk7XG5cdFx0Y29uc3QgcyA9IFN0cmluZyhuKTtcblx0XHRpZiAoY2FudmFzLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpICE9PSBzKSBjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgcyk7XG5cdFx0aWYgKGNhbnZhcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgIT09IHMpIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLm9yaWVudCA9IG47XG5cdH07XG5cdGFwcGx5KCk7XG5cdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcyhhcHBseSk7XG59O1xudmFyIHN5bmNBcHBXYWxscGFwZXJPcmllbnQgPSAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHAtbGF5ZXI9XFxcImNhbnZhc1xcXCJdIGNhbnZhc1tpcz1cXFwidWktY2FudmFzXFxcIl0sIFtkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzLnVpLWNhbnZhc1wiKS5mb3JFYWNoKChjYW52YXMpID0+IHtcblx0XHRjb25zdCBuID0gY3VycmVudE9yaWVudE51bWJlcigpO1xuXHRcdGNvbnN0IHMgPSBTdHJpbmcobik7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgcyk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgcyk7XG5cdH0pO1xufTtcbnZhciByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQgPSAoKSA9PiB7XG5cdHJlc29sdmVBcHBXYWxscGFwZXJVcmwoKS50aGVuKCh1cmwpID0+IHtcblx0XHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModXJsKTtcblx0XHRzeW5jQXBwV2FsbHBhcGVyT3JpZW50KCk7XG5cdH0pO1xufTtcbnZhciBzeW5jR2xvd1RvVGhlbWUgPSAoZ2xvdykgPT4ge1xuXHRnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY29sb3ItcHJpbWFyeVwiKS50cmltKCk7XG5cdGdsb3cuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbn07XG52YXIgcGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzID0gKHBhaW50VXJsKSA9PiB7XG5cdGNvbnN0IGNhbnZhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFwcC1sYXllcj1cXFwiY2FudmFzXFxcIl0gY2FudmFzW2lzPVxcXCJ1aS1jYW52YXNcXFwiXSwgW2RhdGEtYXBwLWxheWVyPVxcXCJjYW52YXNcXFwiXSBjYW52YXMudWktY2FudmFzXCIpO1xuXHRjb25zdCBvcmllbnQgPSBTdHJpbmcoY3VycmVudE9yaWVudE51bWJlcigpKTtcblx0Y2FudmFzZXMuZm9yRWFjaCgoY2FudmFzKSA9PiB7XG5cdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIHBhaW50VXJsKTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgb3JpZW50KTtcblx0XHRjYW52YXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG9yaWVudCk7XG5cdFx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRcIiwgb3JpZW50KTtcblx0fSk7XG59O1xudmFyIGRhdGFVcmxUb0Jsb2IgPSBhc3luYyAoZGF0YVVybCkgPT4ge1xuXHRyZXR1cm4gKGF3YWl0IGZldGNoKGRhdGFVcmwpKS5ibG9iKCk7XG59O1xudmFyIHNldEFwcFdhbGxwYXBlckZyb21CbG9iID0gYXN5bmMgKGJsb2IpID0+IHtcblx0aWYgKCEoYmxvYiBpbnN0YW5jZW9mIEJsb2IpIHx8IGJsb2Iuc2l6ZSA8PSAwKSB7XG5cdFx0c2V0QXBwV2FsbHBhcGVyKERFRkFVTFRfV0FMTFBBUEVSX1VSTCk7XG5cdFx0cmV0dXJuIERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0fVxuXHRyZXZva2VMaXZlT2JqZWN0VXJsKCk7XG5cdGxpdmVPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXMobGl2ZU9iamVjdFVybCk7XG5cdGFwcGx5VGhlbWVGcm9tV2FsbHBhcGVyKGJsb2IsIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaWRiUHV0V2FsbHBhcGVyKGJsb2IpO1xuXHRcdHdyaXRlU3RvcmFnZVBvaW50ZXIoV0FMTFBBUEVSX0lEQl9NQVJLRVIpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIElEQiBwZXJzaXN0IGZhaWxlZFwiLCBlcnIpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0Y29uc3QgZGF0YVVybCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQgfHwgXCJcIikpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChyZWFkZXIuZXJyb3IgfHwgLyogQF9fUFVSRV9fICovIG5ldyBFcnJvcihcInJlYWQgZmFpbGVkXCIpKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChkYXRhVXJsICYmICF3cml0ZVN0b3JhZ2VQb2ludGVyKGRhdGFVcmwpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIGxvY2FsU3RvcmFnZSBwZXJzaXN0IGFsc28gZmFpbGVkIChxdW90YT8pXCIpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXHR0cnkge1xuXHRcdGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudD8uKG5ldyBDdXN0b21FdmVudChcImN3c3Atd2FsbHBhcGVyLWNoYW5nZVwiLCB7IGRldGFpbDoge1xuXHRcdFx0cG9pbnRlcjogV0FMTFBBUEVSX0lEQl9NQVJLRVIsXG5cdFx0XHR1cmw6IGxpdmVPYmplY3RVcmxcblx0XHR9IH0pKTtcblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gbGl2ZU9iamVjdFVybDtcbn07XG52YXIgaW5pdGlhbGl6ZUFwcENhbnZhc0xheWVyID0gKGNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCByb290ID0gY29udGFpbmVyO1xuXHRyb290LnJlcGxhY2VDaGlsZHJlbigpO1xuXHRyb290LmRhdGFzZXQuYXBwTGF5ZXIgPSBcImNhbnZhc1wiO1xuXHRyb290LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRyb290LnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRyb290LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0cm9vdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGdsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRnbG93LmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19fZ2xvd1wiO1xuXHRnbG93LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRnbG93LnN0eWxlLmluc2V0ID0gXCItMjAlXCI7XG5cdGdsb3cuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRnbG93LnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xuXHRnbG93LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcblx0Z2xvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwgeyBpczogXCJ1aS1jYW52YXNcIiB9KTtcblx0Y2FudmFzLmNsYXNzTmFtZSA9IFwiYXBwLWNhbnZhc19faW1hZ2UgdWktY2FudmFzXCI7XG5cdGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Y2FudmFzLnN0eWxlLmluc2V0ID0gXCIwXCI7XG5cdGNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdGNhbnZhcy5zdHlsZS5pbmxpbmVTaXplID0gXCIxMDAlXCI7XG5cdGNhbnZhcy5zdHlsZS5ibG9ja1NpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLm1heElubGluZVNpemUgPSBcIjEwMCVcIjtcblx0Y2FudmFzLnN0eWxlLm1heEJsb2NrU2l6ZSA9IFwiMTAwJVwiO1xuXHRjYW52YXMuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXHRjYW52YXMuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJub3JtYWxcIjtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImlzXCIsIFwidWktY2FudmFzXCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJkeW5hbWljLXJhbmdlLWxpbWl0XCIsIFwibm8tbGltaXRcIik7XG5cdGNhbnZhcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0Y2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIsIFwiaW1wb3J0YW50XCIpO1xuXHRjYW52YXMuc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMVwiLCBcImltcG9ydGFudFwiKTtcblx0cm9vdC5hcHBlbmQoZ2xvdywgY2FudmFzKTtcblx0Y29uc3QgcG9pbnRlciA9IHJlYWRTdG9yYWdlUG9pbnRlcigpO1xuXHRjb25zdCBjb2xkVXJsID0gaXNJZGJQb2ludGVyKHBvaW50ZXIpIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImRhdGE6XCIpIHx8IHBvaW50ZXIuc3RhcnRzV2l0aChcImJsb2I6XCIpID8gREVGQVVMVF9XQUxMUEFQRVJfVVJMIDogcG9pbnRlcjtcblx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIGNvbGRVcmwpO1xuXHRjb25zdCBkaXNwb3NlT3JpZW50ID0gc3luY0NhbnZhc09yaWVudChjYW52YXMpO1xuXHRyZXN0b3JlV2FsbHBhcGVyVGhlbWVDYWNoZSgpO1xuXHRzeW5jR2xvd1RvVGhlbWUoZ2xvdyk7XG5cdChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgd2FsbHBhcGVyID0gYXdhaXQgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCgpO1xuXHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiLCB3YWxscGFwZXIpO1xuXHRcdHN5bmNDYW52YXNPcmllbnQoY2FudmFzKTtcblx0XHRjb25zdCB0aGVtZVNyYyA9IHdhbGxwYXBlci5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBhd2FpdCBpZGJHZXRXYWxscGFwZXIoKSB8fCB3YWxscGFwZXIgOiB3YWxscGFwZXI7XG5cdFx0YXdhaXQgYXBwbHlUaGVtZUZyb21XYWxscGFwZXIodGhlbWVTcmMpO1xuXHRcdHN5bmNHbG93VG9UaGVtZShnbG93KTtcblx0fSkoKTtcblx0cmV0dXJuIHtcblx0XHRyb290LFxuXHRcdGNhbnZhcyxcblx0XHRnbG93LFxuXHRcdGRpc3Bvc2VPcmllbnRcblx0fTtcbn07XG52YXIgc2V0QXBwV2FsbHBhcGVyID0gKHdhbGxwYXBlclVybCkgPT4ge1xuXHRjb25zdCB2YWx1ZSA9IFN0cmluZyh3YWxscGFwZXJVcmwgfHwgXCJcIikudHJpbSgpIHx8IERFRkFVTFRfV0FMTFBBUEVSX1VSTDtcblx0aWYgKGlzSW5saW5lUGF5bG9hZCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID4gTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTKSB7XG5cdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSB2YWx1ZS5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBhd2FpdCAoYXdhaXQgZmV0Y2godmFsdWUpKS5ibG9iKCkgOiBhd2FpdCBkYXRhVXJsVG9CbG9iKHZhbHVlKTtcblx0XHRcdFx0YXdhaXQgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IoYmxvYik7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW2Zlc3QvaW1hZ2VdIHNldEFwcFdhbGxwYXBlciBpbmxpbmUgcGVyc2lzdCBmYWlsZWRcIiwgZXJyKTtcblx0XHRcdFx0Y29uc3QgZmFsbGJhY2sgPSB2YWx1ZS5zdGFydHNXaXRoKFwiYmxvYjpcIikgPyBERUZBVUxUX1dBTExQQVBFUl9VUkwgOiB2YWx1ZTtcblx0XHRcdFx0cGFpbnRXYWxscGFwZXJPbkNhbnZhc2VzKGZhbGxiYWNrKTtcblx0XHRcdFx0YXBwbHlUaGVtZUZyb21XYWxscGFwZXIoZmFsbGJhY2ssIHsgZm9yY2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcHAtY2FudmFzX19nbG93XCIpLmZvckVhY2goc3luY0dsb3dUb1RoZW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWRiQ2xlYXJXYWxscGFwZXIoKTtcblx0cmV2b2tlTGl2ZU9iamVjdFVybCgpO1xuXHRpZiAoIXdyaXRlU3RvcmFnZVBvaW50ZXIodmFsdWUpKSBjb25zb2xlLndhcm4oXCJbZmVzdC9pbWFnZV0gd2FsbHBhcGVyIHBvaW50ZXIgd3JpdGUgZmFpbGVkXCIpO1xuXHRwYWludFdhbGxwYXBlck9uQ2FudmFzZXModmFsdWUpO1xuXHRhcHBseVRoZW1lRnJvbVdhbGxwYXBlcih2YWx1ZSwgeyBmb3JjZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcC1jYW52YXNfX2dsb3dcIikuZm9yRWFjaChzeW5jR2xvd1RvVGhlbWUpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQ/LihuZXcgQ3VzdG9tRXZlbnQoXCJjd3NwLXdhbGxwYXBlci1jaGFuZ2VcIiwgeyBkZXRhaWw6IHtcblx0XHRcdHBvaW50ZXI6IHZhbHVlLFxuXHRcdFx0dXJsOiB2YWx1ZVxuXHRcdH0gfSkpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGJsb2JJbWFnZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJpbWFnZS5jYW52YXMuYmxvYlwiKTtcbmdsb2JhbFRoaXNbYmxvYkltYWdlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmxvYkltYWdlTWFwID0gZ2xvYmFsVGhpc1tibG9iSW1hZ2VTeW1ib2xdO1xudmFyIGRlbGF5ZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLmRlbGF5ZWRcIik7XG5nbG9iYWxUaGlzW2RlbGF5ZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbXSk7XG52YXIgZGVsYXllZCA9IGdsb2JhbFRoaXNbZGVsYXllZFN5bWJvbF07XG52YXIgc2hlZHVsZXJTeW1ib2wgPSBTeW1ib2wuZm9yKFwiaW1hZ2UuY2FudmFzLnNoZWR1bGVyXCIpO1xuZ2xvYmFsVGhpc1tzaGVkdWxlclN5bWJvbF0gPz89IG1ha2VSQUZDeWNsZSgpO1xudmFyIHNoZWR1bGVyID0gZ2xvYmFsVGhpc1tzaGVkdWxlclN5bWJvbF07XG52YXIgZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5mYWlsZWRXYWxscGFwZXJTcmNcIik7XG5nbG9iYWxUaGlzW2ZhaWxlZFdhbGxwYXBlclNyY1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgZmFpbGVkV2FsbHBhcGVyU3JjID0gZ2xvYmFsVGhpc1tmYWlsZWRXYWxscGFwZXJTcmNTeW1ib2xdO1xudmFyIGdldEltZ1dpZHRoID0gKGltZykgPT4ge1xuXHRyZXR1cm4gaW1nPy5uYXR1cmFsV2lkdGggfHwgaW1nPy53aWR0aCB8fCAxO1xufTtcbnZhciBnZXRJbWdIZWlnaHQgPSAoaW1nKSA9PiB7XG5cdHJldHVybiBpbWc/Lm5hdHVyYWxIZWlnaHQgfHwgaW1nPy5oZWlnaHQgfHwgMTtcbn07XG52YXIgY3JlYXRlMmRDb250ZXh0ID0gKGNhbnZhcykgPT4ge1xuXHRjb25zdCBiYXNlID0ge1xuXHRcdGFscGhhOiB0cnVlLFxuXHRcdGRlc3luY2hyb25pemVkOiB0cnVlLFxuXHRcdHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlXG5cdH07XG5cdGZvciAoY29uc3QgY29sb3JTcGFjZSBvZiBbXG5cdFx0XCJyZWMyMTAwLWhsZ1wiLFxuXHRcdFwiZGlzcGxheS1wM1wiLFxuXHRcdFwic3JnYlwiXG5cdF0pIHRyeSB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7XG5cdFx0XHQuLi5iYXNlLFxuXHRcdFx0Y29sb3JTcGFjZVxuXHRcdH0pO1xuXHRcdGlmIChjdHgpIHJldHVybiBjdHg7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRyZXR1cm4gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCBiYXNlKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH1cbn07XG52YXIgY2FsbEJ5RnJhbWUgPSAocG9pbnRlcklkLCBjYikgPT4ge1xuXHRkZWxheWVkLnNldChwb2ludGVySWQsIGNiKTtcbn07XG52YXIgY292ZXIgPSAoY3R4LCBpbWcsIHNjYWxlID0gMSwgcG9ydCwgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBjdHguY2FudmFzO1xuXHRjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblx0Y3R4LnJvdGF0ZSgoLW9yaWVudCB8fCAwKSAqIChNYXRoLlBJICogLjUpKTtcblx0Y3R4LnJvdGF0ZSgoMSAtIHBvcnQpICogKE1hdGguUEkgLyAyKSk7XG5cdGN0eC50cmFuc2xhdGUoLShnZXRJbWdXaWR0aChpbWcpIC8gMikgKiBzY2FsZSwgLShnZXRJbWdIZWlnaHQoaW1nKSAvIDIpICogc2NhbGUpO1xufTtcbnZhciBjcmVhdGVJbWFnZUJpdG1hcENhY2hlID0gKGJsb2IpID0+IHtcblx0aWYgKCFibG9iSW1hZ2VNYXAuaGFzKGJsb2IpICYmIChibG9iIGluc3RhbmNlb2YgQmxvYiB8fCBibG9iIGluc3RhbmNlb2YgRmlsZSB8fCBibG9iIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzIHx8IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCB8fCBibG9iIGluc3RhbmNlb2YgSW1hZ2UpKSB7XG5cdFx0Y29uc3QgcGVuZGluZyA9IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGJsb2JJbWFnZU1hcC5kZWxldGUoYmxvYik7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdFx0YmxvYkltYWdlTWFwLnNldChibG9iLCBwZW5kaW5nKTtcblx0fVxuXHRyZXR1cm4gYmxvYkltYWdlTWFwLmdldChibG9iKTtcbn07XG52YXIgYmluZENhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImltYWdlLmNhbnZhcy5iaW5kQ2FjaGVcIik7XG5nbG9iYWxUaGlzW2JpbmRDYWNoZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRDYWNoZSA9IGdsb2JhbFRoaXNbYmluZENhY2hlU3ltYm9sXTtcbnZhciBiaW5kQ2FjaGVkID0gKGNiLCBjdHgpID0+IHtcblx0Y29uc3QgY2FjaGVkID0gYmluZENhY2hlLmdldChjYik7XG5cdGlmICh0eXBlb2YgY2FjaGVkID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjYWNoZWQ7XG5cdGNvbnN0IGJvdW5kID0gY2IuYmluZChjdHgpO1xuXHRiaW5kQ2FjaGUuc2V0KGNiLCBib3VuZCk7XG5cdHJldHVybiBib3VuZDtcbn07XG52YXIgVUlDYW52YXMgPSBudWxsO1xuaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiKSBVSUNhbnZhcyA9IGNsYXNzIFVJQ2FudmFzIGV4dGVuZHMgSFRNTENhbnZhc0VsZW1lbnQge1xuXHRzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xuXHRcdFwiZGF0YS1zcmNcIixcblx0XHRcImRhdGEtb3JpZW50XCIsXG5cdFx0XCJvcmllbnRcIlxuXHRdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG5cdCNzaXplID0gWzEsIDFdO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdGdldCAjb3JpZW50KCkge1xuXHRcdGNvbnN0IHJhdyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPz8gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcmllbnRcIikgPz8gXCIwXCI7XG5cdFx0Y29uc3QgbiA9IE51bWJlci5wYXJzZUludChyYXcsIDEwKTtcblx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG5cdH1cblx0c2V0ICNvcmllbnQodmFsdWUpIHtcblx0XHRjb25zdCBzID0gU3RyaW5nKHZhbHVlKTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIHMpO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIHMpO1xuXHR9XG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09IFwiZGF0YS1zcmNcIikgdGhpcy4jcHJlbG9hZChuZXdWYWx1ZSk7XG5cdFx0aWYgKG5hbWUgPT0gXCJkYXRhLW9yaWVudFwiIHx8IG5hbWUgPT0gXCJvcmllbnRcIikgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1pbmxpbmUtc2l6ZVwiLCBcIm1pbigxMDAlLCBtaW4oMTAwY3FpLCAxMDBkdmkpKVwiKTtcblx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxYiwgMTAwZHZiKSlcIik7XG5cdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy53aWR0aCB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy5oZWlnaHQgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0dGhpcy4jcHJlbG9hZCh0aGlzLiNsb2FkaW5nID0gdGhpcy5kYXRhc2V0LnNyYyB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHRpZiAodGhpcy5pbWFnZSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXHRcdGNvbnN0IGZpeFNpemUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudFdpZHRoIHx8IHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSwgMSksIHBhcmVudD8uY2xpZW50V2lkdGggfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy53aWR0aCB8fCAxKSAqIChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLCBNYXRoLm1pbihNYXRoLm1pbihNYXRoLm1heCh0aGlzLmNsaWVudEhlaWdodCB8fCBwYXJlbnQ/LmNsaWVudEhlaWdodCB8fCAxLCAxKSwgcGFyZW50Py5jbGllbnRIZWlnaHQgfHwgMSkgKiAodGhpcy5jdXJyZW50Q1NTWm9vbSB8fCAxKSwgc2NyZWVuPy5oZWlnaHQgfHwgMSkgKiAoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKV07XG5cdFx0XHRpZiAob2xkPy5bMF0gIT0gdGhpcy4jc2l6ZVswXSB8fCBvbGQ/LlsxXSAhPSB0aGlzLiNzaXplWzFdKSB0aGlzLiNyZW5kZXIodGhpcy4jcmVhZHkpO1xuXHRcdH07XG5cdFx0c2hlZHVsZXI/LnNoZWR1bGU/LigoKSA9PiB7XG5cdFx0XHR0aGlzLmN0eCA9IGNyZWF0ZTJkQ29udGV4dChjYW52YXMpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jdHg/LmNvbmZpZ3VyZUhpZ2hEeW5hbWljUmFuZ2U/Lih7IG1vZGU6IFwiZXh0ZW5kZWRcIiB9KTtcblx0XHRcdFx0Y2FudmFzPy5jb25maWd1cmVIaWdoRHluYW1pY1JhbmdlPy4oeyBtb2RlOiBcImV4dGVuZGVkXCIgfSk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR0aGlzLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0dGhpcy5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ1LWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInUyLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChcInVpLWNhbnZhc1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxaSwgMTAwZHZpKSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWJsb2NrLXNpemVcIiwgXCJtaW4oMTAwJSwgbWluKDEwMGNxYiwgMTAwZHZiKSlcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiZHluYW1pYy1yYW5nZS1saW1pdFwiLCBcIm5vLWxpbWl0XCIpO1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNwYWNlXCIsIFwiZGlzcGxheS1wM1wiKTtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHRmaXhTaXplKCk7XG5cdFx0XHRuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gZW50cnk/LmRldmljZVBpeGVsQ29udGVudEJveFNpemU/LlswXTtcblx0XHRcdFx0XHRpZiAoYm94KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvbGQgPSB0aGlzLiNzaXplO1xuXHRcdFx0XHRcdFx0dGhpcy4jc2l6ZSA9IFtNYXRoLm1heChib3guaW5saW5lU2l6ZSB8fCB0aGlzLndpZHRoLCAxKSwgTWF0aC5tYXgoYm94LmJsb2NrU2l6ZSB8fCB0aGlzLmhlaWdodCwgMSldO1xuXHRcdFx0XHRcdFx0aWYgKG9sZD8uWzBdICE9IHRoaXMuI3NpemVbMF0gfHwgb2xkPy5bMV0gIT0gdGhpcy4jc2l6ZVsxXSkgdGhpcy4jcmVuZGVyKHRoaXMuI3JlYWR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pLm9ic2VydmUodGhpcywgeyBib3g6IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCIgfSk7XG5cdFx0XHR0aGlzLiNwcmVsb2FkKHRoaXMuI2xvYWRpbmcgPSB0aGlzLmRhdGFzZXQuc3JjIHx8IHRoaXMuI2xvYWRpbmcpO1xuXHRcdFx0aWYgKHRoaXMuaW1hZ2UpIHRoaXMuI3JlbmRlcih0aGlzLiNyZWFkeSB8fCB0aGlzLiNsb2FkaW5nKTtcblx0XHR9KTtcblx0fVxuXHRhc3luYyAkdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSkge1xuXHRcdHJlYWR5IHx8PSB0aGlzLiNsb2FkaW5nO1xuXHRcdGNvbnN0IGltZyA9IGJsb2IgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCA/IGJsb2IgOiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlKGJsb2IpLmNhdGNoKGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpKTtcblx0XHRpZiAoaW1nICYmIHJlYWR5ID09IHRoaXMuI2xvYWRpbmcpIHtcblx0XHRcdHRoaXMuaW1hZ2UgPSBpbWc7XG5cdFx0XHR0aGlzLiNyZW5kZXIocmVhZHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gYmxvYjtcblx0fVxuXHQkcmVuZGVyUGFzcyh3aGF0SXNSZWFkeSkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMsIGN0eCA9IHRoaXMuY3R4LCBpbWcgPSB0aGlzLmltYWdlO1xuXHRcdGlmIChpbWcgJiYgY3R4ICYmICh3aGF0SXNSZWFkeSA9PSB0aGlzLiNsb2FkaW5nIHx8ICF3aGF0SXNSZWFkeSkpIHtcblx0XHRcdGlmICh3aGF0SXNSZWFkeSkgdGhpcy4jcmVhZHkgPSB3aGF0SXNSZWFkeTtcblx0XHRcdGlmICh0aGlzLndpZHRoICE9IHRoaXMuI3NpemVbMF0pIHRoaXMud2lkdGggPSB0aGlzLiNzaXplWzBdO1xuXHRcdFx0aWYgKHRoaXMuaGVpZ2h0ICE9IHRoaXMuI3NpemVbMV0pIHRoaXMuaGVpZ2h0ID0gdGhpcy4jc2l6ZVsxXTtcblx0XHRcdHRoaXMuc3R5bGUuYXNwZWN0UmF0aW8gPSBgJHt0aGlzLndpZHRoIHx8IDF9IC8gJHt0aGlzLmhlaWdodCB8fCAxfWA7XG5cdFx0XHRjb25zdCBveCA9IHRoaXMuI29yaWVudCAlIDIgfHwgMDtcblx0XHRcdGNvbnN0IHBvcnQgPSBnZXRJbWdXaWR0aChpbWcpIDw9IGdldEltZ0hlaWdodChpbWcpID8gMSA6IDA7XG5cdFx0XHRjb25zdCBzY2FsZSA9IE1hdGgubWF4KGNhbnZhc1tbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVtveF1dIC8gKHBvcnQgPyBnZXRJbWdIZWlnaHQoaW1nKSA6IGdldEltZ1dpZHRoKGltZykpLCBjYW52YXNbW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1bb3hdXSAvIChwb3J0ID8gZ2V0SW1nV2lkdGgoaW1nKSA6IGdldEltZ0hlaWdodChpbWcpKSk7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdFx0Y292ZXIoY3R4LCBpbWcsIHNjYWxlLCBwb3J0LCB0aGlzLiNvcmllbnQpO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCAqIHNjYWxlLCBpbWcuaGVpZ2h0ICogc2NhbGUpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0Y29uc3QgcmVhZHkgPSBzcmMgfHwgdGhpcy4jbG9hZGluZztcblx0XHR0aGlzLiNsb2FkaW5nID0gcmVhZHk7XG5cdFx0aWYgKCFyZWFkeSB8fCB0eXBlb2YgcmVhZHkgIT09IFwic3RyaW5nXCIpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZiAoZmFpbGVkV2FsbHBhcGVyU3JjLmhhcyhyZWFkeSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRyZXR1cm4gZmV0Y2gocmVhZHksIHtcblx0XHRcdGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG5cdFx0XHRtb2RlOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KT8udGhlbj8uKGFzeW5jIChyc3ApID0+IHtcblx0XHRcdGlmICghcnNwLm9rKSB7XG5cdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBibG9iID0gYXdhaXQgcnNwLmJsb2IoKTtcblx0XHRcdGlmICghYmxvYj8uc2l6ZSB8fCBibG9iLnR5cGUgJiYgIWJsb2IudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG5cdFx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy4kdXNlSW1hZ2VBc1NvdXJjZShibG9iLCByZWFkeSk/LmNhdGNoPy4oKCkgPT4ge1xuXHRcdFx0XHRmYWlsZWRXYWxscGFwZXJTcmMuYWRkKHJlYWR5KTtcblx0XHRcdH0pO1xuXHRcdH0pPy5jYXRjaD8uKCgpID0+IHtcblx0XHRcdGZhaWxlZFdhbGxwYXBlclNyYy5hZGQocmVhZHkpO1xuXHRcdH0pO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHtcblx0XHRjb25zdCBjdHggPSB0aGlzLmN0eDtcblx0XHRpZiAodGhpcy5pbWFnZSAmJiBjdHggJiYgKHdoYXRJc1JlYWR5ID09IHRoaXMuI2xvYWRpbmcgfHwgIXdoYXRJc1JlYWR5KSkgc2hlZHVsZXI/LnNoZWR1bGU/LihiaW5kQ2FjaGVkKHRoaXMuJHJlbmRlclBhc3MsIHRoaXMpKTtcblx0fVxufTtcbmVsc2UgVUlDYW52YXMgPSBjbGFzcyBVSUNhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge31cblx0JHJlbmRlclBhc3Mod2hhdElzUmVhZHkpIHt9XG5cdCR1c2VJbWFnZUFzU291cmNlKGJsb2IsIHJlYWR5KSB7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cblx0I3ByZWxvYWQoc3JjKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cdCNyZW5kZXIod2hhdElzUmVhZHkpIHt9XG5cdCNvcmllbnQgPSAwO1xuXHQjbG9hZGluZyA9IFwiXCI7XG5cdCNyZWFkeSA9IFwiXCI7XG5cdCNzaXplID0gWzEsIDFdO1xuXHRjdHggPSBudWxsO1xuXHRpbWFnZSA9IG51bGw7XG59O1xudHJ5IHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidWktY2FudmFzXCIsIFVJQ2FudmFzLCB7IGV4dGVuZHM6IFwiY2FudmFzXCIgfSk7XG59IGNhdGNoIChlKSB7fVxuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IFVJQ2FudmFzLCBXQUxMUEFQRVJfSURCX01BUktFUiwgV0FMTFBBUEVSX1BSSU1BUllfU1RPUkFHRV9LRVksIFdBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVksIFdBTExQQVBFUl9USEVNRV9TVE9SQUdFX0tFWSwgYXBwbHlUaGVtZUZyb21XYWxscGFwZXIsIGFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSwgYXBwbHlXYWxscGFwZXJQYXBlclRva2VucywgYXBwbHlXYWxscGFwZXJUaGVtZVNlZWRzLCBiaW5kQ2FjaGUsIGJsb2JJbWFnZU1hcCwgY2FsbEJ5RnJhbWUsIGNvdmVyLCBjcmVhdGVJbWFnZUJpdG1hcENhY2hlLCBkZWxheWVkLCBkZXJpdmVXYWxscGFwZXJQYXBlclRva2Vuc0Zyb21MdW1hLCBlbGVjdHJvbkFQSSwgZmFpbGVkV2FsbHBhcGVyU3JjLCBnZXREb21pbmFudENvbG9ycywgZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIsIGluaXRpYWxpemVBcHBDYW52YXNMYXllciwgbG9hZENhY2hlZFdhbGxwYXBlclRoZW1lLCBxdWFsaXR5TW9kZSwgcmFua1dhbGxwYXBlclNlZWRzLCByZWZyZXNoQXBwV2FsbHBhcGVyUGFpbnQsIHJlZ2lzdGVyQ29sb3JQcm9wZXJ0eSwgcmVzb2x2ZUFwcFdhbGxwYXBlclVybCwgcmVzdG9yZVdhbGxwYXBlclRoZW1lQ2FjaGUsIHNldEFwcFdhbGxwYXBlciwgc2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IsIHNoZWR1bGVyLCBzeW5jQXBwV2FsbHBhcGVyT3JpZW50LCBzeW5jQ2FudmFzT3JpZW50LCB0aGVtZUhvc3RzIH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxLQUFBQSxVQUFTO0FBQ2xCLFNBQVMsb0JBQUFDLFNBQXdCO0FBQ2pDLFNBQVMseUJBQUFDLElBQXVCLGdCQUFBQyxJQUFjLHdCQUFBQyxJQUFzQix3QkFBQUMsVUFBNEI7QUFHaEcsSUFBSUMsS0FBYyxrQkFDZEMsS0FBYyxFQUFFLE1BQVE7QUFBQSxFQUMzQixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQ1gsRUFBRSxHQUlFQyxLQUFjLENBQUNDLEdBQU9DLE1BQVE7QUFDakMsTUFBSSxPQUFPRCxLQUFVLFVBQ3JCO0FBQUEsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLElBQUksS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMxQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsSUFBUSxPQUFPO0FBQUEsTUFDckMsSUFBSUEsSUFBUSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLElBQ3RDO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMzQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsS0FBUyxJQUFJLE9BQU87QUFBQSxNQUMxQyxJQUFJQSxLQUFTLElBQUksS0FBS0EsSUFBUSxPQUFPO0FBQUEsTUFDckMsUUFBUUEsSUFBUSxLQUFLQSxLQUFTLElBQUksT0FBTztBQUFBLElBQzFDO0FBQ0EsUUFBSUMsTUFBUSxFQUFHLFFBQU87QUFBQSxNQUNyQixNQUFNO0FBQUEsTUFDTixJQUFJRCxLQUFTLEtBQUssT0FBTztBQUFBLE1BQ3pCLElBQUlBLEtBQVMsSUFBSSxPQUFPO0FBQUEsTUFDeEIsSUFBSUEsSUFBUSxPQUFPO0FBQUEsSUFDcEI7QUFDQSxRQUFJQyxNQUFRLEVBQUcsUUFBTztBQUFBLE1BQ3JCLE1BQU07QUFBQSxNQUNOLElBQUlELEtBQVMsS0FBSyxPQUFPO0FBQUEsTUFDekIsSUFBSUEsS0FBUyxLQUFLLE9BQU87QUFBQSxNQUN6QixJQUFJQSxLQUFTLElBQUksT0FBTztBQUFBLE1BQ3hCLFFBQVFBLElBQVEsT0FBTztBQUFBLElBQ3hCO0FBQUE7QUFDRCxHQUlJRSxLQUFRO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixh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R0FBSztBQUNiLFdBQU8sUUFBUSxRQUFRO0FBQUEsRUFDeEI7QUFBQSxFQUNBbUgsR0FBUVEsR0FBYTtBQUFBLEVBQUM7QUFBQSxFQUN0QlosS0FBVTtBQUFBLEVBQ1ZGLEtBQVc7QUFBQSxFQUNYQyxLQUFTO0FBQUEsRUFDVEYsS0FBUSxDQUFDLEdBQUcsQ0FBQztBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNUO0FBQ0EsSUFBSTtBQUNILGlCQUFlLE9BQU8sYUFBYUQsSUFBVSxFQUFFLFNBQVMsU0FBUyxDQUFDO0FBQ25FLFFBQVk7QUFBQzsiLAogICJuYW1lcyI6IFsiUSIsICJzZXRTdHlsZVByb3BlcnR5IiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJtYWtlUkFGQ3ljbGUiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAiZWxlY3Ryb25BUEkiLCAicXVhbGl0eU1vZGUiLCAicGFyc2VOdW1iZXIiLCAiY29sb3IiLCAibGVuIiwgIm5hbWVkIiwgInBhcnNlTmFtZWQiLCAiaGV4IiwgInBhcnNlSGV4IiwgIm1hdGNoIiwgIm51bSQxIiwgIm51bV9ub25lIiwgInBlciIsICJwZXJfbm9uZSIsICJudW1fcGVyIiwgIm51bV9wZXJfbm9uZSIsICJodWUkMSIsICJodWVfbm9uZSIsICJjIiwgInJ4X251bV9wZXJfbm9uZSIsICJyZ2JfbnVtX29sZCIsICJyZ2JfcGVyX29sZCIsICJwYXJzZVJnYkxlZ2FjeSIsICJyZXMiLCAicHJlcGFyZSIsICJtb2RlIiwgInBhcnNlIiwgImNvbnZlcnRlciIsICJ0YXJnZXRfbW9kZSIsICJjb252ZXJ0ZXJzIiwgIm1vZGVzIiwgInBhcnNlcnMiLCAiY29sb3JQcm9maWxlcyIsICJpZGVudGl0eSIsICJ2IiwgInVzZU1vZGUiLCAiZGVmaW5pdGlvbiIsICJrIiwgImNoYW5uZWwiLCAicGFyc2VyIiwgInVzZVBhcnNlciIsICJnZXRNb2RlIiwgIklkZW50U3RhcnRDb2RlUG9pbnQiLCAiSWRlbnRDb2RlUG9pbnQiLCAiVG9rIiwgIl9pIiwgImlzX251bSIsICJjaGFycyIsICJjaCIsICJjaDEiLCAiaXNfaWRlbnQiLCAiaHVlbml0cyIsICJudW0iLCAidmFsdWUiLCAiZGlnaXRzIiwgImlkIiwgImlkZW50IiwgImlkZW50bGlrZSIsICJ0b2tlbml6ZSIsICJzdHIiLCAidG9rZW5zIiwgImFscGhhIiwgInBhcnNlQ29sb3JTeW50YXgiLCAidG9rZW4iLCAiY29vcmRzIiwgImNvbnN1bWVDb29yZHMiLCAiY2hhbm5lbHMiLCAiaWkiLCAiaW5jbHVkZUh1ZSIsICJwYXJzZU1vZGVyblN5bnRheCIsICJwYXJzZWQiLCAicmVzdWx0IiwgInBhcnNlUmdiIiwgInIiLCAiZyIsICJiIiwgInBhcnNlVHJhbnNwYXJlbnQiLCAibGVycCIsICJhIiwgInQiLCAiZ2V0X2NsYXNzZXMiLCAiYXJyIiwgImNsYXNzZXMiLCAiaSIsICJpbnRlcnBvbGF0b3JQaWVjZXdpc2UiLCAiaW50ZXJwb2xhdG9yIiwgImNscyIsICJpZHgiLCAicGFpciIsICJpbnRlcnBvbGF0b3JMaW5lYXIiLCAiZml4dXBBbHBoYSIsICJzb21lX2RlZmluZWQiLCAiZGVmaW5pdGlvbiQyNyIsICJsaW5lYXJpemUkMiIsICJjb252ZXJ0QTk4VG9YeXo2NSIsICJhOTgiLCAiZ2FtbWEkMiIsICJjb252ZXJ0WHl6NjVUb0E5OCIsICJ4IiwgInkiLCAieiIsICJmbiQzIiwgImFicyIsICJjb252ZXJ0UmdiVG9McmdiIiwgImNvbnZlcnRSZ2JUb1h5ejY1IiwgInJnYiIsICJmbiQyIiwgImNvbnZlcnRMcmdiVG9SZ2IiLCAiY29udmVydFh5ejY1VG9SZ2IiLCAiZGVmaW5pdGlvbiQyNiIsICJub3JtYWxpemVIdWUiLCAiaHVlIiwgImh1ZXMiLCAiZm4iLCAibm9ybWFsaXplZCIsICJhY2MiLCAiY3VyciIsICJmaXh1cEh1ZVNob3J0ZXIiLCAiZCIsICJNIiwgImRlZ1RvUmFkIiwgInJhZFRvRGVnIiwgIkRFIiwgIkJFIiwgIkJDQUQiLCAiY29udmVydFJnYlRvQ3ViZWhlbGl4IiwgImwiLCAiY29udmVydEN1YmVoZWxpeFRvUmdiIiwgImgiLCAicyIsICJhbXAiLCAiY29zaCIsICJzaW5oIiwgImRpZmZlcmVuY2VIdWVTYXR1cmF0aW9uIiwgInN0ZCIsICJzbXAiLCAic3RkX2giLCAic21wX2giLCAiZEgiLCAiZGlmZmVyZW5jZUh1ZU5haXZlIiwgImRpZmZlcmVuY2VIdWVDaHJvbWEiLCAiYXZlcmFnZUFuZ2xlIiwgInZhbCIsICJzdW0iLCAicmFkIiwgImFuZ2xlIiwgImRlZmluaXRpb24kMjUiLCAiY29udmVydExhYlRvTGNoIiwgImNvbnZlcnRMY2hUb0xhYiIsICJrJDIiLCAiZSQyIiwgIkQ1MCIsICJENjUiLCAiayQxIiwgImUkMSIsICJmbiQxIiwgImNvbnZlcnRMYWI2NVRvWHl6NjUiLCAiZnkiLCAiZngiLCAiZnoiLCAiY29udmVydExhYjY1VG9SZ2IiLCAibGFiIiwgImYkMSIsICJjb252ZXJ0WHl6NjVUb0xhYjY1IiwgImYwIiwgImYxIiwgImYyIiwgImNvbnZlcnRSZ2JUb0xhYjY1IiwgIs64IiwgImNvc864IiwgInNpbs64IiwgImZhY3RvciIsICJjb252ZXJ0RGxjaFRvTGFiNjUiLCAiRyIsICJlIiwgImYiLCAiY29udmVydExhYjY1VG9EbGNoIiwgImNvbnZlcnREbGFiVG9MYWI2NSIsICJjb252ZXJ0TGFiNjVUb0RsYWIiLCAiZGVmaW5pdGlvbiQyNCIsICJkZWZpbml0aW9uJDIzIiwgImNvbnZlcnRIc2lUb1JnYiIsICJjb252ZXJ0UmdiVG9Ic2kiLCAibSIsICJkZWZpbml0aW9uJDIyIiwgImNvbnZlcnRIc2xUb1JnYiIsICJtMSIsICJtMiIsICJjb252ZXJ0UmdiVG9Ic2wiLCAiaHVlVG9EZWciLCAidW5pdCIsICJoc2xfb2xkIiwgInBhcnNlSHNsTGVnYWN5IiwgInBhcnNlSHNsIiwgImRlZmluaXRpb24kMjEiLCAiY29udmVydEhzdlRvUmdiIiwgImNvbnZlcnRSZ2JUb0hzdiIsICJkZWZpbml0aW9uJDIwIiwgImNvbnZlcnRId2JUb1JnYiIsICJ3IiwgImNvbnZlcnRSZ2JUb0h3YiIsICJyZ2JhIiwgImhzdiIsICJQYXJzZUh3YiIsICJkZWZpbml0aW9uJDE5IiwgIk0xIiwgIk0yIiwgIkMxIiwgIkMyIiwgIkMzIiwgInRyYW5zZmVyUHFEZWNvZGUiLCAidHJhbnNmZXJQcUVuY29kZSIsICJ0b1JlbCIsICJjb252ZXJ0SXRwVG9YeXo2NSIsICJwIiwgInRvQWJzIiwgImNvbnZlcnRYeXo2NVRvSXRwIiwgImFic1giLCAiYWJzWSIsICJhYnNaIiwgImRlZmluaXRpb24kMTgiLCAicCQxIiwgImQwJDEiLCAiamFiUHFFbmNvZGUiLCAidm4iLCAiY29udmVydFh5ejY1VG9KYWIiLCAieHAiLCAieXAiLCAiZDAiLCAiamFiUHFEZWNvZGUiLCAidnAiLCAicmVsIiwgImNvbnZlcnRKYWJUb1h5ejY1IiwgImoiLCAiY29udmVydFJnYlRvSmFiIiwgImNvbnZlcnRKYWJUb1JnYiIsICJkZWZpbml0aW9uJDE3IiwgImNvbnZlcnRKYWJUb0pjaCIsICJjb252ZXJ0SmNoVG9KYWIiLCAiZGVmaW5pdGlvbiQxNiIsICJjb252ZXJ0TGFiVG9YeXo1MCIsICJjb252ZXJ0WHl6NTBUb1JnYiIsICJjb252ZXJ0TGFiVG9SZ2IiLCAiY29udmVydFJnYlRvWHl6NTAiLCAiY29udmVydFh5ejUwVG9MYWIiLCAiY29udmVydFJnYlRvTGFiIiwgInBhcnNlTGFiIiwgImRlZmluaXRpb24kMTUiLCAiZGVmaW5pdGlvbiQxNCIsICJwYXJzZUxjaCIsICJkZWZpbml0aW9uJDEzIiwgImRlZmluaXRpb24kMTIiLCAiY29udmVydEx1dlRvTGNodXYiLCAidSIsICJjb252ZXJ0TGNodXZUb0x1diIsICJ1X2ZuJDEiLCAidl9mbiQxIiwgInVuJDEiLCAidm4kMSIsICJsX2ZuIiwgImNvbnZlcnRYeXo1MFRvTHV2IiwgInVfZm4iLCAidl9mbiIsICJ1biIsICJjb252ZXJ0THV2VG9YeXo1MCIsICJ1cCIsICJjb252ZXJ0UmdiVG9MY2h1diIsICJjb252ZXJ0TGNodXZUb1JnYiIsICJsY2h1diIsICJkZWZpbml0aW9uJDExIiwgImRlZmluaXRpb24kMTAiLCAiZGVmaW5pdGlvbiQ5IiwgImx1diIsICJjb252ZXJ0THJnYlRvT2tsYWIiLCAiTCIsICJTIiwgImNvbnZlcnRSZ2JUb09rbGFiIiwgImNvbnZlcnRPa2xhYlRvTHJnYiIsICJjb252ZXJ0T2tsYWJUb1JnYiIsICJ0b2UiLCAia18zIiwgInRvZV9pbnYiLCAiY29tcHV0ZV9tYXhfc2F0dXJhdGlvbiIsICJrMCIsICJrMSIsICJrMiIsICJrMyIsICJrNCIsICJ3bCIsICJ3bSIsICJ3cyIsICJrX2wiLCAia19tIiwgImtfcyIsICJsXyIsICJtXyIsICJzXyIsICJsX2RTIiwgIm1fZFMiLCAic19kUyIsICJsX2RTMiIsICJtX2RTMiIsICJzX2RTMiIsICJmaW5kX2N1c3AiLCAiU19jdXNwIiwgIkxfY3VzcCIsICJmaW5kX2dhbXV0X2ludGVyc2VjdGlvbiIsICJMMSIsICJMMCIsICJjdXNwIiwgImRMIiwgImRDIiwgImxfZHQiLCAibV9kdCIsICJzX2R0IiwgIkMiLCAibGR0IiwgIm1kdCIsICJzZHQiLCAibGR0MiIsICJtZHQyIiwgInNkdDIiLCAicjEiLCAicjIiLCAidV9yIiwgInRfciIsICJnMSIsICJnMiIsICJ1X2ciLCAidF9nIiwgImIxIiwgImIyIiwgInVfYiIsICJ0X2IiLCAiZ2V0X1NUX21heCIsICJhXyIsICJiXyIsICJnZXRfQ3MiLCAiQ19tYXgiLCAiU1RfbWF4IiwgIlNfbWlkIiwgIlRfbWlkIiwgIkNfYSIsICJDX2IiLCAiQ19taWQiLCAiY29udmVydE9rbGFiVG9Pa2hzbCIsICJyZXQiLCAiQ18wIiwgImtfMCIsICJrXzEiLCAia18yIiwgImNvbnZlcnRPa2hzbFRvT2tsYWIiLCAiaHNsIiwgIm1vZGVPa2hzbCIsICJjb252ZXJ0T2tsYWJUb09raHN2IiwgIlNfbWF4IiwgIlQiLCAiU18wIiwgIkxfdiIsICJDX3YiLCAiTF92dCIsICJDX3Z0IiwgInJnYl9zY2FsZSIsICJzY2FsZV9MIiwgImNvbnZlcnRPa2hzdlRvT2tsYWIiLCAiTF9uZXciLCAibW9kZU9raHN2IiwgInBhcnNlT2tsYWIiLCAiZGVmaW5pdGlvbiQ4IiwgInBhcnNlT2tsY2giLCAiZGVmaW5pdGlvbiQ3IiwgImNvbnZlcnRQM1RvWHl6NjUiLCAiY29udmVydFh5ejY1VG9QMyIsICJkZWZpbml0aW9uJDYiLCAiZ2FtbWEkMSIsICJjb252ZXJ0WHl6NTBUb1Byb3Bob3RvIiwgImxpbmVhcml6ZSQxIiwgImNvbnZlcnRQcm9waG90b1RvWHl6NTAiLCAicHJvcGhvdG8iLCAiZGVmaW5pdGlvbiQ1IiwgIs6xJDEiLCAizrIkMSIsICJnYW1tYSIsICJjb252ZXJ0WHl6NjVUb1JlYzIwMjAiLCAizrEiLCAizrIiLCAibGluZWFyaXplIiwgImNvbnZlcnRSZWMyMDIwVG9YeXo2NSIsICJyZWMyMDIwIiwgImRlZmluaXRpb24kNCIsICJiaWFzIiwgImJpYXNfY2JydCIsICJ0cmFuc2ZlciQxIiwgImNvbnZlcnRSZ2JUb1h5YiIsICJ0cmFuc2ZlciIsICJjb252ZXJ0WHliVG9SZ2IiLCAiZGVmaW5pdGlvbiQzIiwgImRlZmluaXRpb24kMiIsICJjb252ZXJ0WHl6NjVUb1h5ejUwIiwgInh5ejY1IiwgImNvbnZlcnRYeXo1MFRvWHl6NjUiLCAieHl6NTAiLCAiZGVmaW5pdGlvbiQxIiwgImNvbnZlcnRSZ2JUb1lpcSIsICJjb252ZXJ0WWlxVG9SZ2IiLCAicSIsICJwcmVjaXNpb24iLCAicm91bmQiLCAidHdvRGVjaW1hbHMiLCAiY2xhbXAkMSIsICJmaXh1cCIsICJyZ2IkMSIsICJoc2wkMSIsICJzZXJpYWxpemVIZXgiLCAiZm9ybWF0SGV4IiwgImN1YmVoZWxpeCIsICJkbGFiIiwgImRsY2giLCAiaHNpIiwgImh3YiIsICJpdHAiLCAiamFiIiwgImpjaCIsICJsYWI2NSIsICJsY2giLCAibGNoNjUiLCAibHJnYiIsICJva2hzbCIsICJva2hzdiIsICJva2xhYiIsICJva2xjaCIsICJwMyIsICJ4eWIiLCAieWlxIiwgInNvcnRDb2xvcnMiLCAibGlzdCIsICJjcml0ZXJpYSIsICJldWNsaWRlYW5EaXN0YW5jZSIsICJjb2xvcjEiLCAiY29sb3IyIiwgIm1ha2VDbHVzdGVycyIsICJkYXRhIiwgImNlbnRyb2lkcyIsICJjbHVzdGVycyIsICJwb2ludCIsICJtaW5EaXN0YW5jZSIsICJtaW5EaXN0YW5jZUNsdXN0ZXJJbmRleCIsICJjZW50cm9pZCIsICJpbmRleCIsICJkaXN0YW5jZSIsICJjb21wdXRlTWVhbiIsICJwb2ludHMiLCAia01lYW5zIiwgImluaXRpYWxpemVDZW50cm9pZHMiLCAibWF4SXRlcmF0aW9ucyIsICJpdGVyYXRpb24iLCAibmV3Q2VudHJvaWRzIiwgImNsdXN0ZXIiLCAibmV3Q2VudHJvaWQiLCAiZGlzdGFuY2VzIiwgInRvdGFsRGlzdGFuY2UiLCAicHJvYmFiaWxpdGllcyIsICJjdW11bGF0aXZlUHJvYmFiaWxpdHkiLCAicmFuZG9tVmFsdWUiLCAicHJlQmx1clBpeGVscyIsICJpbWdVUkwiLCAiYmxvYiIsICJiaXRtYXAiLCAib2Zmc2V0IiwgImN0eCIsICJnZXRDbHVzdGVySW1hZ2VEYXRhIiwgImFsbENvdW50IiwgImR2IiwgImZwMzIiLCAiaTQiLCAiZ2V0RG9taW5hbnRDb2xvcnMiLCAiV0FMTFBBUEVSX1RIRU1FX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9QUklNQVJZX1NUT1JBR0VfS0VZIiwgIldBTExQQVBFUl9USEVNRV9TUkNfU1RPUkFHRV9LRVkiLCAiVEhFTUVfU1RPUkFHRV9LRVkiLCAiUFJJTUFSWV9TVE9SQUdFX0tFWSIsICJXQUxMUEFQRVJfVVJMX0tFWSIsICJQQVBFUl9MX1NQTElUIiwgIlBBUEVSX0NIUk9NQV9DQVAiLCAiRkFMTEJBQ0tfUEFQRVIiLCAibGFzdExpdmVQYXBlciIsICJVU0FCTEVfTFVNQV9NSU4iLCAiU0VFRF9QUk9QUyIsICJjbGFtcCIsICJuIiwgImxvIiwgImhpIiwgImhleE9rbGNoIiwgImZhbGxiYWNrIiwgInJnYlRvU2FtcGxlIiwgIm9rIiwgInBhcGVyTEZyb21IZXgiLCAiaGFsb0ZvclBhcGVyIiwgImRhcmtQYXBlciIsICJpc1VzYWJsZVBhcGVyTHVtYSIsICJsdW1hIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbVNhbXBsZXMiLCAic2FtcGxlcyIsICJwaXhlbEx1bWEiLCAibHMiLCAibWVhbkwiLCAibWVkaWFuTCIsICJwYXBlckwiLCAicGFwZXIiLCAicGFwZXJDIiwgInNhbXBsZUltYWdlTWVhbkx1bWEiLCAiY2FudmFzIiwgImRlcml2ZVdhbGxwYXBlclBhcGVyVG9rZW5zRnJvbUx1bWEiLCAiaGFzV2FsbHBhcGVyUGFwZXIiLCAic2VlZHMiLCAicmFua1dhbGxwYXBlclNlZWRzIiwgImFjY2VudFBvb2wiLCAicG9vbCIsICJwcmltYXJ5IiwgImh1ZURpc3QiLCAicGlja05leHQiLCAidXNlZCIsICJyZXN0IiwgImJhc2UiLCAibnVkZ2VkIiwgInNlY29uZGFyeSIsICJ0ZXJ0aWFyeSIsICJ0aGVtZUhvc3RzIiwgIm5vZGVzIiwgImVsIiwgIndhbGxwYXBlclNlZWRzTWF5UGFpbnQiLCAic3JjIiwgImlzVmFsaWRDb2xvciIsICJhcHBseVdhbGxwYXBlclBhcGVyVG9rZW5zIiwgImV4dHJhSG9zdHMiLCAic2hhZG93IiwgImdsb3ciLCAiaG9zdHMiLCAicmVnaXN0ZXJDb2xvclByb3BlcnR5IiwgImhvc3QiLCAiZ2xvYmFsUXVlcnkiLCAibmFtZSIsICJpbml0aWFsVmFsdWUiLCAiZXJyb3IiLCAicGVyc2lzdExpdmVQYXBlciIsICJjYWNoZWQiLCAibG9hZENhY2hlZFdhbGxwYXBlclRoZW1lIiwgImFwcGx5V2FsbHBhcGVyUGFwZXJGcm9tTHVtYSIsICJhcHBseVdhbGxwYXBlclRoZW1lU2VlZHMiLCAibmV4dCIsICJwcm9wIiwgImtleSIsICJyYXciLCAiYXBwbHlUaGVtZUZyb21XYWxscGFwZXIiLCAib3B0cyIsICJzcmNLZXkiLCAibGl2ZUx1bWEiLCAiZXJyIiwgInJlc3RvcmVXYWxscGFwZXJUaGVtZUNhY2hlIiwgIldBTExQQVBFUl9TVE9SQUdFX0tFWSIsICJERUZBVUxUX1dBTExQQVBFUl9VUkwiLCAiV0FMTFBBUEVSX0lEQl9NQVJLRVIiLCAiSURCX05BTUUiLCAiSURCX1NUT1JFIiwgIklEQl9LRVkiLCAiTE9DQUxfU1RPUkFHRV9TQUZFX0NIQVJTIiwgImxpdmVPYmplY3RVcmwiLCAid2FsbHBhcGVyRXBvY2giLCAiY3VycmVudE9yaWVudE51bWJlciIsICJpc0lkYlBvaW50ZXIiLCAicG9pbnRlciIsICJpc1VudXNhYmxlU3RvcmVkVXJsIiwgInJldm9rZUxpdmVPYmplY3RVcmwiLCAiYWRvcHRXYWxscGFwZXJCbG9iIiwgImVwb2NoIiwgIm9wZW5XYWxscGFwZXJEYiIsICJyZXNvbHZlIiwgInJlamVjdCIsICJyZXEiLCAiZGIiLCAiaWRiUHV0V2FsbHBhcGVyIiwgInR4IiwgImlkYkdldFdhbGxwYXBlciIsICJpZGJDbGVhcldhbGxwYXBlciIsICJyZWFkU3RvcmFnZVBvaW50ZXIiLCAid3JpdGVTdG9yYWdlUG9pbnRlciIsICJyZXN0b3JlV2FsbHBhcGVyQmxvYlVybCIsICJpc0lubGluZVBheWxvYWQiLCAidXJsIiwgInJlc29sdmVBcHBXYWxscGFwZXJVcmwiLCAiZ2V0V2FsbHBhcGVyU3RvcmFnZVBvaW50ZXIiLCAic3luY0NhbnZhc09yaWVudCIsICJhcHBseSIsICJzeW5jQXBwV2FsbHBhcGVyT3JpZW50IiwgInJlZnJlc2hBcHBXYWxscGFwZXJQYWludCIsICJwYWludFdhbGxwYXBlck9uQ2FudmFzZXMiLCAic3luY0dsb3dUb1RoZW1lIiwgInBhaW50VXJsIiwgImNhbnZhc2VzIiwgIm9yaWVudCIsICJkYXRhVXJsVG9CbG9iIiwgImRhdGFVcmwiLCAic2V0QXBwV2FsbHBhcGVyRnJvbUJsb2IiLCAic2V0QXBwV2FsbHBhcGVyIiwgInJlYWRlciIsICJpbml0aWFsaXplQXBwQ2FudmFzTGF5ZXIiLCAiY29udGFpbmVyIiwgInJvb3QiLCAiY29sZFVybCIsICJkaXNwb3NlT3JpZW50IiwgIndhbGxwYXBlciIsICJ0aGVtZVNyYyIsICJ3YWxscGFwZXJVcmwiLCAiYmxvYkltYWdlU3ltYm9sIiwgImJsb2JJbWFnZU1hcCIsICJkZWxheWVkU3ltYm9sIiwgImRlbGF5ZWQiLCAic2hlZHVsZXJTeW1ib2wiLCAic2hlZHVsZXIiLCAiZmFpbGVkV2FsbHBhcGVyU3JjU3ltYm9sIiwgImZhaWxlZFdhbGxwYXBlclNyYyIsICJnZXRJbWdXaWR0aCIsICJpbWciLCAiZ2V0SW1nSGVpZ2h0IiwgImNyZWF0ZTJkQ29udGV4dCIsICJjb2xvclNwYWNlIiwgImNhbGxCeUZyYW1lIiwgInBvaW50ZXJJZCIsICJjYiIsICJjb3ZlciIsICJzY2FsZSIsICJwb3J0IiwgImNyZWF0ZUltYWdlQml0bWFwQ2FjaGUiLCAicGVuZGluZyIsICJiaW5kQ2FjaGVTeW1ib2wiLCAiYmluZENhY2hlIiwgImJpbmRDYWNoZWQiLCAiYm91bmQiLCAiVUlDYW52YXMiLCAiI3NpemUiLCAiI2xvYWRpbmciLCAiI3JlYWR5IiwgIiNvcmllbnQiLCAiXyIsICJuZXdWYWx1ZSIsICIjcHJlbG9hZCIsICIjcmVuZGVyIiwgInBhcmVudCIsICJmaXhTaXplIiwgIm9sZCIsICJlbnRyaWVzIiwgImVudHJ5IiwgImJveCIsICJyZWFkeSIsICJ3aGF0SXNSZWFkeSIsICJveCIsICJyc3AiXQp9Cg==
