var Mo = "electronBridge", wo = { fast: {
  divisor: 4,
  filter: "blur(4px)",
  sampling: 128
} }, qr = (e, t) => {
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
}, Ta = {
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
}, $a = (e) => qr(Ta[e.toLowerCase()], 6), Ca = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Aa = (e) => {
  let t;
  return (t = e.match(Ca)) ? qr(parseInt(t[1], 16), t[1].length) : void 0;
}, T = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", xo = `(?:${T}|none)`, le = `${T}%`, So = `(?:${T}%|none)`, Vt = `(?:${T}%|${T})`, Na = `(?:${T}%|${T}|none)`, La = `(?:${T}(deg|grad|rad|turn)|${T})`, ko = `(?:${T}(deg|grad|rad|turn)|${T}|none)`, Z = "\\s*,\\s*", Eo = new RegExp("^" + Na + "$"), Ia = new RegExp(`^rgba?\\(\\s*${T}${Z}${T}${Z}${T}\\s*(?:,\\s*${Vt}\\s*)?\\)$`), Ra = new RegExp(`^rgba?\\(\\s*${le}${Z}${le}${Z}${le}\\s*(?:,\\s*${Vt}\\s*)?\\)$`), ja = (e) => {
  let t = { mode: "rgb" }, r;
  if (r = e.match(Ia))
    r[1] !== void 0 && (t.r = r[1] / 255), r[2] !== void 0 && (t.g = r[2] / 255), r[3] !== void 0 && (t.b = r[3] / 255);
  else if (r = e.match(Ra))
    r[1] !== void 0 && (t.r = r[1] / 100), r[2] !== void 0 && (t.g = r[2] / 100), r[3] !== void 0 && (t.b = r[3] / 100);
  else return;
  return r[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, r[4] / 100)) : r[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +r[5]))), t;
}, Ha = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Ua(e) : e.mode !== void 0 ? e : t ? {
  ...e,
  mode: t
} : void 0, Dt = (e = "rgb") => (t) => (t = Ha(t, e)) !== void 0 ? t.mode === e ? t : C[t.mode][e] ? C[t.mode][e](t) : e === "rgb" ? C[t.mode].rgb(t) : C.rgb[e](C[t.mode].rgb(t)) : void 0, C = {}, Wr = {}, ke = [], Vr = {}, Oa = (e) => e, y = (e) => (C[e.mode] = {
  ...C[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  C[t] || (C[t] = {}), C[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Oa);
}), Wr[e.mode] = e, (e.parse || []).forEach((t) => {
  Wa(t, e.mode);
}), Dt(e.mode)), qa = (e) => Wr[e], Wa = (e, t) => {
  if (typeof e == "string") {
    if (!t) throw new Error("'mode' required when 'parser' is a string");
    Vr[e] = t;
  } else typeof e == "function" && ke.indexOf(e) < 0 && ke.push(e);
}, Pt = /[^\x00-\x7F]|[a-zA-Z_]/, Va = /[^\x00-\x7F]|[-\w]/, u = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
}, g = 0;
function pe(e) {
  let t = e[g], r = e[g + 1];
  return t === "-" || t === "+" ? /\d/.test(r) || r === "." && /\d/.test(e[g + 2]) : t === "." ? /\d/.test(r) : /\d/.test(t);
}
function _t(e) {
  if (g >= e.length) return !1;
  let t = e[g];
  if (Pt.test(t)) return !0;
  if (t === "-") {
    if (e.length - g < 2) return !1;
    let r = e[g + 1];
    return !!(r === "-" || Pt.test(r));
  }
  return !1;
}
var Da = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function oe(e) {
  let t = "";
  if ((e[g] === "-" || e[g] === "+") && (t += e[g++]), t += me(e), e[g] === "." && /\d/.test(e[g + 1]) && (t += e[g++] + me(e)), (e[g] === "e" || e[g] === "E") && ((e[g + 1] === "-" || e[g + 1] === "+") && /\d/.test(e[g + 2]) ? t += e[g++] + e[g++] + me(e) : /\d/.test(e[g + 1]) && (t += e[g++] + me(e))), _t(e)) {
    let r = Ee(e);
    return r === "deg" || r === "rad" || r === "turn" || r === "grad" ? {
      type: u.Hue,
      value: t * Da[r]
    } : void 0;
  }
  return e[g] === "%" ? (g++, {
    type: u.Percentage,
    value: +t
  }) : {
    type: u.Number,
    value: +t
  };
}
function me(e) {
  let t = "";
  for (; /\d/.test(e[g]); ) t += e[g++];
  return t;
}
function Ee(e) {
  let t = "";
  for (; g < e.length && Va.test(e[g]); ) t += e[g++];
  return t;
}
function Fa(e) {
  let t = Ee(e);
  return e[g] === "(" ? (g++, {
    type: u.Function,
    value: t
  }) : t === "none" ? {
    type: u.None,
    value: void 0
  } : {
    type: u.Ident,
    value: t
  };
}
function Xa(e = "") {
  let t = e.trim(), r = [], a;
  for (g = 0; g < t.length; ) {
    if (a = t[g++], a === `
` || a === "	" || a === " ") {
      for (; g < t.length && (t[g] === `
` || t[g] === "	" || t[g] === " "); ) g++;
      continue;
    }
    if (a === ",") return;
    if (a === ")") {
      r.push({ type: u.ParenClose });
      continue;
    }
    if (a === "+") {
      if (g--, pe(t)) {
        r.push(oe(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (g--, pe(t)) {
        r.push(oe(t));
        continue;
      }
      if (_t(t)) {
        r.push({
          type: u.Ident,
          value: Ee(t)
        });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (g--, pe(t)) {
        r.push(oe(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; g < t.length && (t[g] === `
` || t[g] === "	" || t[g] === " "); ) g++;
      let n;
      if (pe(t) && (n = oe(t), n.type !== u.Hue)) {
        r.push({
          type: u.Alpha,
          value: n
        });
        continue;
      }
      if (_t(t) && Ee(t) === "none") {
        r.push({
          type: u.Alpha,
          value: {
            type: u.None,
            value: void 0
          }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(a)) {
      g--, r.push(oe(t));
      continue;
    }
    if (Pt.test(a)) {
      g--, r.push(Fa(t));
      continue;
    }
    return;
  }
  return r;
}
function Ba(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== u.Function || t.value !== "color" || (t = e[e._i++], t.type !== u.Ident)) return;
  const r = Vr[t.value];
  if (!r) return;
  const a = { mode: r }, n = Dr(e, !1);
  if (!n) return;
  const i = qa(r).channels;
  for (let o = 0, s, l; o < i.length; o++)
    s = n[o], l = i[o], s.type !== u.None && (a[l] = s.type === u.Number ? s.value : s.value / 100, l === "alpha" && (a[l] = Math.max(0, Math.min(1, a[l]))));
  return a;
}
function Dr(e, t) {
  const r = [];
  let a;
  for (; e._i < e.length; ) {
    if (a = e[e._i++], a.type === u.None || a.type === u.Number || a.type === u.Alpha || a.type === u.Percentage || t && a.type === u.Hue) {
      r.push(a);
      continue;
    }
    if (a.type === u.ParenClose) {
      if (e._i < e.length) return;
      continue;
    }
    return;
  }
  if (!(r.length < 3 || r.length > 4)) {
    if (r.length === 4) {
      if (r[3].type !== u.Alpha) return;
      r[3] = r[3].value;
    }
    return r.length === 3 && r.push({
      type: u.None,
      value: void 0
    }), r.every((n) => n.type !== u.Alpha) ? r : void 0;
  }
}
function Ya(e, t) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== u.Function) return;
  let a = Dr(e, t);
  if (a)
    return a.unshift(r.value), a;
}
var Ua = (e) => {
  if (typeof e != "string") return;
  const t = Xa(e), r = t ? Ya(t, !0) : void 0;
  let a, n = 0, i = ke.length;
  for (; n < i; ) if ((a = ke[n++](e, r)) !== void 0) return a;
  return t ? Ba(t) : void 0;
};
function Za(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
  const r = { mode: "rgb" }, [, a, n, i, o] = t;
  if (!(a.type === u.Hue || n.type === u.Hue || i.type === u.Hue))
    return a.type !== u.None && (r.r = a.type === u.Number ? a.value / 255 : a.value / 100), n.type !== u.None && (r.g = n.type === u.Number ? n.value / 255 : n.value / 100), i.type !== u.None && (r.b = i.type === u.Number ? i.value / 255 : i.value / 100), o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Ja = (e) => e === "transparent" ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0, Ga = (e, t, r) => e + r * (t - e), Ka = (e) => {
  let t = [];
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r], n = e[r + 1];
    a === void 0 && n === void 0 ? t.push(void 0) : a !== void 0 && n !== void 0 ? t.push([a, n]) : t.push(a !== void 0 ? [a, a] : [n, n]);
  }
  return t;
}, Qa = (e) => (t) => {
  let r = Ka(t);
  return (a) => {
    let n = a * r.length, i = a >= 1 ? r.length - 1 : Math.max(Math.floor(n), 0), o = r[i];
    return o === void 0 ? void 0 : e(o[0], o[1], n - i);
  };
}, h = Qa(Ga), S = (e) => {
  let t = !1, r = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? r : e;
}, J = {
  mode: "rgb",
  channels: [
    "r",
    "g",
    "b",
    "alpha"
  ],
  parse: [
    Za,
    Aa,
    ja,
    $a,
    Ja,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: h,
    g: h,
    b: h,
    alpha: {
      use: h,
      fixup: S
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
}, Ke = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), ur = (e) => {
  let t = Ke(e.r), r = Ke(e.g), a = Ke(e.b), n = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * r + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * r + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * r + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Qe = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), cr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = {
    mode: "a98",
    r: Qe(e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * r),
    g: Qe(e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * r),
    b: Qe(e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, et = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, G = ({ r: e, g: t, b: r, alpha: a }) => {
  let n = {
    mode: "lrgb",
    r: et(e),
    g: et(t),
    b: et(r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, V = (e) => {
  let { r: t, g: r, b: a, alpha: n } = G(e), i = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * a
  };
  return n !== void 0 && (i.alpha = n), i;
}, tt = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, K = ({ r: e, g: t, b: r, alpha: a }, n = "rgb") => {
  let i = {
    mode: n,
    r: tt(e),
    g: tt(t),
    b: tt(r)
  };
  return a !== void 0 && (i.alpha = a), i;
}, D = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = K({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r
  });
  return a !== void 0 && (n.alpha = a), n;
}, en = {
  ...J,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => cr(V(e)),
    xyz65: cr
  },
  toMode: {
    rgb: (e) => D(ur(e)),
    xyz65: ur
  }
}, E = (e) => (e = e % 360) < 0 ? e + 360 : e, tn = (e, t) => e.map((r, a, n) => {
  if (r === void 0) return r;
  let i = E(r);
  return a === 0 || e[a - 1] === void 0 ? i : t(i - E(n[a - 1]));
}).reduce((r, a) => !r.length || a === void 0 || r[r.length - 1] === void 0 ? (r.push(a), r) : (r.push(a + r[r.length - 1]), r), []), A = (e) => tn(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), k = [
  -0.14861,
  1.78277,
  -0.29227,
  -0.90649,
  1.97294,
  0
], rn = Math.PI / 180, an = 180 / Math.PI, hr = k[3] * k[4], vr = k[1] * k[4], fr = k[1] * k[2] - k[0] * k[3], nn = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = (fr * r + e * hr - t * vr) / (fr + hr - vr), i = r - n, o = (k[4] * (t - n) - k[2] * i) / k[3], s = {
    mode: "cubehelix",
    l: n,
    s: n === 0 || n === 1 ? void 0 : Math.sqrt(i * i + o * o) / (k[4] * n * (1 - n))
  };
  return s.s && (s.h = Math.atan2(o, i) * an - 120), a !== void 0 && (s.alpha = a), s;
}, on = ({ h: e, s: t, l: r, alpha: a }) => {
  let n = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * rn, r === void 0 && (r = 0);
  let i = t === void 0 ? 0 : t * r * (1 - r), o = Math.cos(e), s = Math.sin(e);
  return n.r = r + i * (k[0] * o + k[1] * s), n.g = r + i * (k[2] * o + k[3] * s), n.b = r + i * (k[4] * o + k[5] * s), a !== void 0 && (n.alpha = a), n;
}, Le = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
  let r = E(e.h), a = E(t.h), n = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * n;
}, sn = (e, t) => {
  if (e.h === void 0 || t.h === void 0) return 0;
  let r = E(e.h), a = E(t.h);
  return Math.abs(a - r) > 180 ? r - (a - 360 * Math.sign(a - r)) : a - r;
}, Ie = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
  let r = E(e.h), a = E(t.h), n = Math.sin((a - r + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * n;
}, N = (e) => {
  let t = e.reduce((a, n) => {
    if (n !== void 0) {
      let i = n * Math.PI / 180;
      a.sin += Math.sin(i), a.cos += Math.cos(i);
    }
    return a;
  }, {
    sin: 0,
    cos: 0
  }), r = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return r < 0 ? 360 + r : r;
}, ln = {
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
  fromMode: { rgb: nn },
  toMode: { rgb: on },
  interpolate: {
    h: {
      use: h,
      fixup: A
    },
    s: h,
    l: h,
    alpha: {
      use: h,
      fixup: S
    }
  },
  difference: { h: Le },
  average: { h: N }
}, R = ({ l: e, a: t, b: r, alpha: a }, n = "lch") => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let i = Math.sqrt(t * t + r * r), o = {
    mode: n,
    l: e,
    c: i
  };
  return i && (o.h = E(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, j = ({ l: e, c: t, h: r, alpha: a }, n = "lab") => {
  r === void 0 && (r = 0);
  let i = {
    mode: n,
    l: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Fr = Math.pow(29, 3) / Math.pow(3, 3), Xr = Math.pow(6, 3) / Math.pow(29, 3), x = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: 0.2958 / 0.3585
}, Y = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: 0.3583 / 0.329
}, zo = Math.pow(29, 3) / Math.pow(3, 3), Po = Math.pow(6, 3) / Math.pow(29, 3), rt = (e) => Math.pow(e, 3) > Xr ? Math.pow(e, 3) : (116 * e - 16) / Fr, Br = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = (e + 16) / 116, i = t / 500 + n, o = n - r / 200, s = {
    mode: "xyz65",
    x: rt(i) * Y.X,
    y: rt(n) * Y.Y,
    z: rt(o) * Y.Z
  };
  return a !== void 0 && (s.alpha = a), s;
}, Re = (e) => D(Br(e)), at = (e) => e > Xr ? Math.cbrt(e) : (Fr * e + 16) / 116, Yr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = at(e / Y.X), i = at(t / Y.Y), o = at(r / Y.Z), s = {
    mode: "lab65",
    l: 116 * i - 16,
    a: 500 * (n - i),
    b: 200 * (i - o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, je = (e) => {
  let t = Yr(V(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, de = 26 / 180 * Math.PI, ze = Math.cos(de), Pe = Math.sin(de), Ur = 100 / Math.log(139 / 100), Tt = ({ l: e, c: t, h: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = {
    mode: "lab65",
    l: (Math.exp(e * 1 / Ur) - 1) / 39e-4
  }, i = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075, o = i * Math.cos(r / 180 * Math.PI - de), s = i * Math.sin(r / 180 * Math.PI - de);
  return n.a = o * ze - s / 0.83 * Pe, n.b = o * Pe + s / 0.83 * ze, a !== void 0 && (n.alpha = a), n;
}, $t = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = t * ze + r * Pe, i = 0.83 * (r * ze - t * Pe), o = Math.sqrt(n * n + i * i), s = {
    mode: "dlch",
    l: Ur / 1 * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * 1 * 1)
  };
  return s.c && (s.h = E((Math.atan2(i, n) + de) / Math.PI * 180)), a !== void 0 && (s.alpha = a), s;
}, pr = (e) => Tt(R(e, "dlch")), mr = (e) => j($t(e), "dlab"), dn = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: pr,
    rgb: (e) => Re(pr(e))
  },
  fromMode: {
    lab65: mr,
    rgb: (e) => mr(je(e))
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
      fixup: S
    }
  }
}, un = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Tt,
    dlab: (e) => j(e, "dlab"),
    rgb: (e) => Re(Tt(e))
  },
  fromMode: {
    lab65: $t,
    dlab: (e) => R(e, "dlch"),
    rgb: (e) => $t(je(e))
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
      fixup: S
    }
  },
  difference: { h: Ie },
  average: { h: N }
};
function cn({ h: e, s: t, i: r, alpha: a }) {
  e = E(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.abs(e / 60 % 2 - 1), i;
  switch (Math.floor(e / 60)) {
    case 0:
      i = {
        r: r * (1 + t * (3 / (2 - n) - 1)),
        g: r * (1 + t * (3 * (1 - n) / (2 - n) - 1)),
        b: r * (1 - t)
      };
      break;
    case 1:
      i = {
        r: r * (1 + t * (3 * (1 - n) / (2 - n) - 1)),
        g: r * (1 + t * (3 / (2 - n) - 1)),
        b: r * (1 - t)
      };
      break;
    case 2:
      i = {
        r: r * (1 - t),
        g: r * (1 + t * (3 / (2 - n) - 1)),
        b: r * (1 + t * (3 * (1 - n) / (2 - n) - 1))
      };
      break;
    case 3:
      i = {
        r: r * (1 - t),
        g: r * (1 + t * (3 * (1 - n) / (2 - n) - 1)),
        b: r * (1 + t * (3 / (2 - n) - 1))
      };
      break;
    case 4:
      i = {
        r: r * (1 + t * (3 * (1 - n) / (2 - n) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 / (2 - n) - 1))
      };
      break;
    case 5:
      i = {
        r: r * (1 + t * (3 / (2 - n) - 1)),
        g: r * (1 - t),
        b: r * (1 + t * (3 * (1 - n) / (2 - n) - 1))
      };
      break;
    default:
      i = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return i.mode = "rgb", a !== void 0 && (i.alpha = a), i;
}
function hn({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.max(e, t, r), i = Math.min(e, t, r), o = {
    mode: "hsi",
    s: e + t + r === 0 ? 0 : 1 - 3 * i / (e + t + r),
    i: (e + t + r) / 3
  };
  return n - i !== 0 && (o.h = (n === e ? (t - r) / (n - i) + (t < r) * 6 : n === t ? (r - e) / (n - i) + 2 : (e - t) / (n - i) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var vn = {
  mode: "hsi",
  toMode: { rgb: cn },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: hn },
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
      fixup: S
    }
  },
  difference: { h: Le },
  average: { h: N }
};
function fn({ h: e, s: t, l: r, alpha: a }) {
  e = E(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = r + t * (r < 0.5 ? r : 1 - r), i = n - (n - r) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: n,
        g: i,
        b: 2 * r - n
      };
      break;
    case 1:
      o = {
        r: i,
        g: n,
        b: 2 * r - n
      };
      break;
    case 2:
      o = {
        r: 2 * r - n,
        g: n,
        b: i
      };
      break;
    case 3:
      o = {
        r: 2 * r - n,
        g: i,
        b: n
      };
      break;
    case 4:
      o = {
        r: i,
        g: 2 * r - n,
        b: n
      };
      break;
    case 5:
      o = {
        r: n,
        g: 2 * r - n,
        b: i
      };
      break;
    default:
      o = {
        r: 2 * r - n,
        g: 2 * r - n,
        b: 2 * r - n
      };
  }
  return o.mode = "rgb", a !== void 0 && (o.alpha = a), o;
}
function pn({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.max(e, t, r), i = Math.min(e, t, r), o = {
    mode: "hsl",
    s: n === i ? 0 : (n - i) / (1 - Math.abs(n + i - 1)),
    l: 0.5 * (n + i)
  };
  return n - i !== 0 && (o.h = (n === e ? (t - r) / (n - i) + (t < r) * 6 : n === t ? (r - e) / (n - i) + 2 : (e - t) / (n - i) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var mn = (e, t) => {
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
}, gn = new RegExp(`^hsla?\\(\\s*${La}${Z}${le}${Z}${le}\\s*(?:,\\s*${Vt}\\s*)?\\)$`), bn = (e) => {
  let t = e.match(gn);
  if (!t) return;
  let r = { mode: "hsl" };
  return t[3] !== void 0 ? r.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (r.h = mn(t[1], t[2])), t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? r.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (r.alpha = Math.max(0, Math.min(1, +t[7]))), r;
};
function yn(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
  const r = { mode: "hsl" }, [, a, n, i, o] = t;
  if (a.type !== u.None) {
    if (a.type === u.Percentage) return;
    r.h = a.value;
  }
  if (n.type !== u.None) {
    if (n.type === u.Hue) return;
    r.s = n.value / 100;
  }
  if (i.type !== u.None) {
    if (i.type === u.Hue) return;
    r.l = i.value / 100;
  }
  return o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Zr = {
  mode: "hsl",
  toMode: { rgb: fn },
  fromMode: { rgb: pn },
  channels: [
    "h",
    "s",
    "l",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [yn, bn],
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
      fixup: S
    }
  },
  difference: { h: Le },
  average: { h: N }
};
function Jr({ h: e, s: t, v: r, alpha: a }) {
  e = E(e !== void 0 ? e : 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.abs(e / 60 % 2 - 1), i;
  switch (Math.floor(e / 60)) {
    case 0:
      i = {
        r,
        g: r * (1 - t * n),
        b: r * (1 - t)
      };
      break;
    case 1:
      i = {
        r: r * (1 - t * n),
        g: r,
        b: r * (1 - t)
      };
      break;
    case 2:
      i = {
        r: r * (1 - t),
        g: r,
        b: r * (1 - t * n)
      };
      break;
    case 3:
      i = {
        r: r * (1 - t),
        g: r * (1 - t * n),
        b: r
      };
      break;
    case 4:
      i = {
        r: r * (1 - t * n),
        g: r * (1 - t),
        b: r
      };
      break;
    case 5:
      i = {
        r,
        g: r * (1 - t),
        b: r * (1 - t * n)
      };
      break;
    default:
      i = {
        r: r * (1 - t),
        g: r * (1 - t),
        b: r * (1 - t)
      };
  }
  return i.mode = "rgb", a !== void 0 && (i.alpha = a), i;
}
function Gr({ r: e, g: t, b: r, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.max(e, t, r), i = Math.min(e, t, r), o = {
    mode: "hsv",
    s: n === 0 ? 0 : 1 - i / n,
    v: n
  };
  return n - i !== 0 && (o.h = (n === e ? (t - r) / (n - i) + (t < r) * 6 : n === t ? (r - e) / (n - i) + 2 : (e - t) / (n - i) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
var Kr = {
  mode: "hsv",
  toMode: { rgb: Jr },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Gr },
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
      fixup: S
    }
  },
  difference: { h: Le },
  average: { h: N }
};
function Mn({ h: e, w: t, b: r, alpha: a }) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 0), t + r > 1) {
    let n = t + r;
    t /= n, r /= n;
  }
  return Jr({
    h: e,
    s: r === 1 ? 1 : 1 - t / (1 - r),
    v: 1 - r,
    alpha: a
  });
}
function wn(e) {
  let t = Gr(e);
  if (t === void 0) return;
  let r = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, n = {
    mode: "hwb",
    w: (1 - r) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (n.h = t.h), t.alpha !== void 0 && (n.alpha = t.alpha), n;
}
function xn(e, t) {
  if (!t || t[0] !== "hwb") return;
  const r = { mode: "hwb" }, [, a, n, i, o] = t;
  if (a.type !== u.None) {
    if (a.type === u.Percentage) return;
    r.h = a.value;
  }
  if (n.type !== u.None) {
    if (n.type === u.Hue) return;
    r.w = n.value / 100;
  }
  if (i.type !== u.None) {
    if (i.type === u.Hue) return;
    r.b = i.value / 100;
  }
  return o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Sn = {
  mode: "hwb",
  toMode: { rgb: Mn },
  fromMode: { rgb: wn },
  channels: [
    "h",
    "w",
    "b",
    "alpha"
  ],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [xn],
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
      fixup: S
    }
  },
  difference: { h: sn },
  average: { h: N }
}, He = 0.1593017578125, Qr = 78.84375, Oe = 0.8359375, qe = 18.8515625, We = 18.6875;
function nt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Qr);
  return 1e4 * Math.pow(Math.max(0, t - Oe) / (qe - We * t), 1 / He);
}
function it(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, He);
  return Math.pow((Oe + qe * t) / (1 + We * t), Qr);
}
var ot = (e) => Math.max(e / 203, 0), gr = ({ i: e, t, p: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const n = nt(e + 0.008609037037932761 * t + 0.11102962500302593 * r), i = nt(e - 0.00860903703793275 * t - 0.11102962500302599 * r), o = nt(e + 0.5600313357106791 * t - 0.32062717498731885 * r), s = {
    mode: "xyz65",
    x: ot(2.070152218389422 * n - 1.3263473389671556 * i + 0.2066510476294051 * o),
    y: ot(0.3647385209748074 * n + 0.680566024947227 * i - 0.0453045459220346 * o),
    z: ot(-0.049747207535812 * n - 0.0492609666966138 * i + 1.1880659249923042 * o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, st = (e = 0) => Math.max(e * 203, 0), br = ({ x: e, y: t, z: r, alpha: a }) => {
  const n = st(e), i = st(t), o = st(r), s = it(0.3592832590121217 * n + 0.6976051147779502 * i - 0.0358915932320289 * o), l = it(-0.1920808463704995 * n + 1.1004767970374323 * i + 0.0753748658519118 * o), d = it(0.0070797844607477 * n + 0.0748396662186366 * i + 0.8433265453898765 * o), v = {
    mode: "itp",
    i: 0.5 * s + 0.5 * l,
    t: 1.61376953125 * s - 3.323486328125 * l + 1.709716796875 * d,
    p: 4.378173828125 * s - 4.24560546875 * l - 0.132568359375 * d
  };
  return a !== void 0 && (v.alpha = a), v;
}, kn = {
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
    xyz65: gr,
    rgb: (e) => D(gr(e))
  },
  fromMode: {
    xyz65: br,
    rgb: (e) => br(V(e))
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
      fixup: S
    }
  }
}, En = 134.03437499999998, zn = 16295499532821565e-27, lt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, He);
  return Math.pow((Oe + qe * t) / (1 + We * t), En);
}, dt = (e = 0) => Math.max(e * 203, 0), ea = ({ x: e, y: t, z: r, alpha: a }) => {
  e = dt(e), t = dt(t), r = dt(r);
  let n = 1.15 * e - 0.15 * r, i = 0.66 * t + 0.34 * e, o = lt(0.41478972 * n + 0.579999 * i + 0.014648 * r), s = lt(-0.20151 * n + 1.120649 * i + 0.0531008 * r), l = lt(-0.0166008 * n + 0.2648 * i + 0.6684799 * r), d = (o + s) / 2, v = {
    mode: "jab",
    j: 0.44 * d / (1 - 0.56 * d) - zn,
    a: 3.524 * o - 4.066708 * s + 0.542708 * l,
    b: 0.199076 * o + 1.096799 * s - 1.295875 * l
  };
  return a !== void 0 && (v.alpha = a), v;
}, Pn = 134.03437499999998, yr = 16295499532821565e-27, ut = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Pn);
  return 1e4 * Math.pow((Oe - t) / (We * t - qe), 1 / He);
}, ct = (e) => e / 203, ta = ({ j: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = (e + yr) / (0.44 + 0.56 * (e + yr)), i = ut(n + 0.13860504 * t + 0.058047316 * r), o = ut(n - 0.13860504 * t - 0.058047316 * r), s = ut(n - 0.096019242 * t - 0.8118919 * r), l = {
    mode: "xyz65",
    x: ct(1.661373024652174 * i - 0.914523081304348 * o + 0.23136208173913045 * s),
    y: ct(-0.3250758611844533 * i + 1.571847026732543 * o - 0.21825383453227928 * s),
    z: ct(-0.090982811 * i - 0.31272829 * o + 1.5227666 * s)
  };
  return a !== void 0 && (l.alpha = a), l;
}, ra = (e) => {
  let t = ea(V(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, aa = (e) => D(ta(e)), _n = {
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
    rgb: ra,
    xyz65: ea
  },
  toMode: {
    rgb: aa,
    xyz65: ta
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
      fixup: S
    }
  }
}, Mr = ({ j: e, a: t, b: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.sqrt(t * t + r * r), i = {
    mode: "jch",
    j: e,
    c: n
  };
  return n && (i.h = E(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (i.alpha = a), i;
}, wr = ({ j: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let n = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (n.alpha = a), n;
}, Tn = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: wr,
    rgb: (e) => aa(wr(e))
  },
  fromMode: {
    rgb: (e) => Mr(ra(e)),
    jab: Mr
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
      fixup: S
    }
  },
  difference: { h: Ie },
  average: { h: N }
}, Ve = Math.pow(29, 3) / Math.pow(3, 3), Ft = Math.pow(6, 3) / Math.pow(29, 3), ht = (e) => Math.pow(e, 3) > Ft ? Math.pow(e, 3) : (116 * e - 16) / Ve, Xt = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = (e + 16) / 116, i = t / 500 + n, o = n - r / 200, s = {
    mode: "xyz50",
    x: ht(i) * x.X,
    y: ht(n) * x.Y,
    z: ht(o) * x.Z
  };
  return a !== void 0 && (s.alpha = a), s;
}, he = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = K({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * r,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * r,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * r
  });
  return a !== void 0 && (n.alpha = a), n;
}, na = (e) => he(Xt(e)), ve = (e) => {
  let { r: t, g: r, b: a, alpha: n } = G(e), i = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * r + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * r + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * r + 0.7140993584005155 * a
  };
  return n !== void 0 && (i.alpha = n), i;
}, vt = (e) => e > Ft ? Math.cbrt(e) : (Ve * e + 16) / 116, Bt = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = vt(e / x.X), i = vt(t / x.Y), o = vt(r / x.Z), s = {
    mode: "lab",
    l: 116 * i - 16,
    a: 500 * (n - i),
    b: 200 * (i - o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, ia = (e) => {
  let t = Bt(ve(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function $n(e, t) {
  if (!t || t[0] !== "lab") return;
  const r = { mode: "lab" }, [, a, n, i, o] = t;
  if (!(a.type === u.Hue || n.type === u.Hue || i.type === u.Hue))
    return a.type !== u.None && (r.l = Math.min(Math.max(0, a.value), 100)), n.type !== u.None && (r.a = n.type === u.Number ? n.value : n.value * 125 / 100), i.type !== u.None && (r.b = i.type === u.Number ? i.value : i.value * 125 / 100), o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Yt = {
  mode: "lab",
  toMode: {
    xyz50: Xt,
    rgb: na
  },
  fromMode: {
    xyz50: Bt,
    rgb: ia
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
  parse: [$n],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: h,
    a: h,
    b: h,
    alpha: {
      use: h,
      fixup: S
    }
  }
}, Cn = {
  ...Yt,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Br,
    rgb: Re
  },
  fromMode: {
    xyz65: Yr,
    rgb: je
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function An(e, t) {
  if (!t || t[0] !== "lch") return;
  const r = { mode: "lch" }, [, a, n, i, o] = t;
  if (a.type !== u.None) {
    if (a.type === u.Hue) return;
    r.l = Math.min(Math.max(0, a.value), 100);
  }
  if (n.type !== u.None && (r.c = Math.max(0, n.type === u.Number ? n.value : n.value * 150 / 100)), i.type !== u.None) {
    if (i.type === u.Percentage) return;
    r.h = i.value;
  }
  return o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Ut = {
  mode: "lch",
  toMode: {
    lab: j,
    rgb: (e) => na(j(e))
  },
  fromMode: {
    rgb: (e) => R(ia(e)),
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
  parse: [An],
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
      fixup: S
    }
  },
  difference: { h: Ie },
  average: { h: N }
}, Nn = {
  ...Ut,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => j(e, "lab65"),
    rgb: (e) => Re(j(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => R(je(e), "lch65"),
    lab65: (e) => R(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, oa = ({ l: e, u: t, v: r, alpha: a }) => {
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.sqrt(t * t + r * r), i = {
    mode: "lchuv",
    l: e,
    c: n
  };
  return n && (i.h = E(Math.atan2(r, t) * 180 / Math.PI)), a !== void 0 && (i.alpha = a), i;
}, sa = ({ l: e, c: t, h: r, alpha: a }) => {
  r === void 0 && (r = 0);
  let n = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(r / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(r / 180 * Math.PI) : 0
  };
  return a !== void 0 && (n.alpha = a), n;
}, la = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), da = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), Ln = la(x.X, x.Y, x.Z), In = da(x.X, x.Y, x.Z), Rn = (e) => e <= Ft ? Ve * e : 116 * Math.cbrt(e) - 16, Ct = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Rn(t / x.Y), i = la(e, t, r), o = da(e, t, r);
  !isFinite(i) || !isFinite(o) ? n = i = o = 0 : (i = 13 * n * (i - Ln), o = 13 * n * (o - In));
  let s = {
    mode: "luv",
    l: n,
    u: i,
    v: o
  };
  return a !== void 0 && (s.alpha = a), s;
}, jn = (e, t, r) => 4 * e / (e + 15 * t + 3 * r), Hn = (e, t, r) => 9 * t / (e + 15 * t + 3 * r), On = jn(x.X, x.Y, x.Z), qn = Hn(x.X, x.Y, x.Z), At = ({ l: e, u: t, v: r, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0) return {
    mode: "xyz50",
    x: 0,
    y: 0,
    z: 0
  };
  t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = t / (13 * e) + On, i = r / (13 * e) + qn, o = x.Y * (e <= 8 ? e / Ve : Math.pow((e + 16) / 116, 3)), s = {
    mode: "xyz50",
    x: o * (9 * n) / (4 * i),
    y: o,
    z: o * (12 - 3 * n - 20 * i) / (4 * i)
  };
  return a !== void 0 && (s.alpha = a), s;
}, Wn = (e) => oa(Ct(ve(e))), Vn = (e) => he(At(sa(e))), Dn = {
  mode: "lchuv",
  toMode: {
    luv: sa,
    rgb: Vn
  },
  fromMode: {
    rgb: Wn,
    luv: oa
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
      fixup: S
    }
  },
  difference: { h: Ie },
  average: { h: N }
}, Fn = {
  ...J,
  mode: "lrgb",
  toMode: { rgb: K },
  fromMode: { rgb: G },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Xn = {
  mode: "luv",
  toMode: {
    xyz50: At,
    rgb: (e) => he(At(e))
  },
  fromMode: {
    xyz50: Ct,
    rgb: (e) => Ct(ve(e))
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
      fixup: S
    }
  }
}, ua = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.cbrt(0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * r), i = Math.cbrt(0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * r), o = Math.cbrt(0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * r), s = {
    mode: "oklab",
    l: 0.210454268309314 * n + 0.7936177747023054 * i - 0.0040720430116193 * o,
    a: 1.9779985324311684 * n - 2.42859224204858 * i + 0.450593709617411 * o,
    b: 0.0259040424655478 * n + 0.7827717124575296 * i - 0.8086757549230774 * o
  };
  return a !== void 0 && (s.alpha = a), s;
}, De = (e) => {
  let t = ua(G(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, fe = ({ l: e, a: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * r, 3), i = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * r, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * r, 3), s = {
    mode: "lrgb",
    r: 4.076741636075957 * n - 3.3077115392580616 * i + 0.2309699031821044 * o,
    g: -1.2684379732850317 * n + 2.6097573492876887 * i - 0.3413193760026573 * o,
    b: -0.0041960761386756 * n - 0.7034186179359362 * i + 1.7076146940746117 * o
  };
  return a !== void 0 && (s.alpha = a), s;
}, Fe = (e) => K(fe(e));
function Nt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function _e(e) {
  return (e * e + 0.206 * e) / (1.206 / 1.03 * (e + 0.03));
}
function Bn(e, t) {
  let r, a, n, i, o, s, l, d;
  -1.88170328 * e - 0.80936493 * t > 1 ? (r = 1.19086277, a = 1.76576728, n = 0.59662641, i = 0.75515197, o = 0.56771245, s = 4.0767416621, l = -3.3077115913, d = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (r = 0.73956515, a = -0.45954404, n = 0.08285427, i = 0.1254107, o = 0.14503204, s = -1.2684380046, l = 2.6097574011, d = -0.3413193965) : (r = 1.35733652, a = -915799e-8, n = -1.1513021, i = -0.50559606, o = 692167e-8, s = -0.0041960863, l = -0.7034186147, d = 1.707614701);
  let v = r + a * e + n * t + i * e * e + o * e * t, f = 0.3963377774 * e + 0.2158037573 * t, c = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t;
  {
    let p = 1 + v * f, b = 1 + v * c, M = 1 + v * m, P = p * p * p, z = b * b * b, L = M * M * M, Q = 3 * f * p * p, ee = 3 * c * b * b, te = 3 * m * M * M, re = 6 * f * f * p, ae = 6 * c * c * b, ne = 6 * m * m * M, F = s * P + l * z + d * L, q = s * Q + l * ee + d * te, ie = s * re + l * ae + d * ne;
    v = v - F * q / (q * q - 0.5 * F * ie);
  }
  return v;
}
function Zt(e, t) {
  let r = Bn(e, t), a = fe({
    l: 1,
    a: r * e,
    b: r * t
  }), n = Math.cbrt(1 / Math.max(a.r, a.g, a.b));
  return [n, n * r];
}
function Yn(e, t, r, a, n, i = null) {
  i || (i = Zt(e, t));
  let o;
  if ((r - n) * i[1] - (i[0] - n) * a <= 0) o = i[1] * n / (a * i[0] + i[1] * (n - r));
  else {
    o = i[1] * (n - 1) / (a * (i[0] - 1) + i[1] * (n - r));
    {
      let s = r - n, l = a, d = 0.3963377774 * e + 0.2158037573 * t, v = -0.1055613458 * e - 0.0638541728 * t, f = -0.0894841775 * e - 1.291485548 * t, c = s + l * d, m = s + l * v, p = s + l * f;
      {
        let b = n * (1 - o) + o * r, M = o * a, P = b + M * d, z = b + M * v, L = b + M * f, Q = P * P * P, ee = z * z * z, te = L * L * L, re = 3 * c * P * P, ae = 3 * m * z * z, ne = 3 * p * L * L, F = 6 * c * c * P, q = 6 * m * m * z, ie = 6 * p * p * L, nr = 4.0767416621 * Q - 3.3077115913 * ee + 0.2309699292 * te - 1, Be = 4.0767416621 * re - 3.3077115913 * ae + 0.2309699292 * ne, za = 4.0767416621 * F - 3.3077115913 * q + 0.2309699292 * ie, ir = Be / (Be * Be - 0.5 * nr * za), Ye = -nr * ir, or = -1.2684380046 * Q + 2.6097574011 * ee - 0.3413193965 * te - 1, Ue = -1.2684380046 * re + 2.6097574011 * ae - 0.3413193965 * ne, Pa = -1.2684380046 * F + 2.6097574011 * q - 0.3413193965 * ie, sr = Ue / (Ue * Ue - 0.5 * or * Pa), Ze = -or * sr, lr = -0.0041960863 * Q - 0.7034186147 * ee + 1.707614701 * te - 1, Je = -0.0041960863 * re - 0.7034186147 * ae + 1.707614701 * ne, _a = -0.0041960863 * F - 0.7034186147 * q + 1.707614701 * ie, dr = Je / (Je * Je - 0.5 * lr * _a), Ge = -lr * dr;
        Ye = ir >= 0 ? Ye : 1e6, Ze = sr >= 0 ? Ze : 1e6, Ge = dr >= 0 ? Ge : 1e6, o += Math.min(Ye, Math.min(Ze, Ge));
      }
    }
  }
  return o;
}
function Jt(e, t, r = null) {
  r || (r = Zt(e, t));
  let a = r[0], n = r[1];
  return [n / a, n / (1 - a)];
}
function ca(e, t, r) {
  let a = Zt(t, r), n = Yn(t, r, e, 1, e, a), i = Jt(t, r, a), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * r + t * (-2.19557347 + 1.75198401 * r + t * (-2.13704948 - 10.02301043 * r + t * (-4.24894561 + 5.38770819 * r + 4.69891013 * t)))), s = 0.11239642 + 1 / (1.6132032 - 0.68124379 * r + t * (0.40370612 + 0.90148123 * r + t * (-0.27087943 + 0.6122399 * r + t * (299215e-8 - 0.45399568 * r - 0.14661872 * t)))), l = n / Math.min(e * i[0], (1 - e) * i[1]), d = e * o, v = (1 - e) * s, f = 0.9 * l * Math.sqrt(Math.sqrt(1 / (1 / (d * d * d * d) + 1 / (v * v * v * v))));
  return d = e * 0.4, v = (1 - e) * 0.8, [
    Math.sqrt(1 / (1 / (d * d) + 1 / (v * v))),
    f,
    n
  ];
}
function xr(e) {
  const t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, n = {
    mode: "okhsl",
    l: Nt(t)
  };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  let i = Math.sqrt(r * r + a * a);
  if (!i)
    return n.s = 0, n;
  let [o, s, l] = ca(t, r / i, a / i), d;
  if (i < s) {
    let v = 0, f = 0.8 * o, c = 1 - f / s;
    d = (i - v) / (f + c * (i - v)) * 0.8;
  } else {
    let v = s, f = 0.2 * s * s * 1.25 * 1.25 / o, c = 1 - f / (l - s);
    d = 0.8 + 0.2 * ((i - v) / (f + c * (i - v)));
  }
  return d && (n.s = d, n.h = E(Math.atan2(a, r) * 180 / Math.PI)), n;
}
function Sr(e) {
  let t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const n = {
    mode: "oklab",
    l: _e(a)
  };
  if (e.alpha !== void 0 && (n.alpha = e.alpha), !r || a === 1)
    return n.a = n.b = 0, n;
  let i = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, l, d] = ca(n.l, i, o), v, f, c, m;
  r < 0.8 ? (v = 1.25 * r, f = 0, c = 0.8 * s, m = 1 - c / l) : (v = 5 * (r - 0.8), f = l, c = 0.2 * l * l * 1.25 * 1.25 / s, m = 1 - c / (d - l));
  let p = f + v * c / (1 - m * v);
  return n.a = p * i, n.b = p * o, n;
}
var Un = {
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
    oklab: xr,
    rgb: (e) => xr(De(e))
  },
  toMode: {
    oklab: Sr,
    rgb: (e) => Fe(Sr(e))
  }
};
function kr(e) {
  let t = e.l !== void 0 ? e.l : 0, r = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, n = Math.sqrt(r * r + a * a), i = n ? r / n : 1, o = n ? a / n : 1, [s, l] = Jt(i, o), d = 0.5, v = 1 - d / s, f = l / (n + t * l), c = f * t, m = f * n, p = _e(c), b = m * p / c, M = fe({
    l: p,
    a: i * b,
    b: o * b
  }), P = Math.cbrt(1 / Math.max(M.r, M.g, M.b, 0));
  t = t / P, n = n / P * Nt(t) / t, t = Nt(t);
  const z = {
    mode: "okhsv",
    s: n ? (d + l) * m / (l * d + l * v * m) : 0,
    v: t ? t / c : 0
  };
  return z.s && (z.h = E(Math.atan2(a, r) * 180 / Math.PI)), e.alpha !== void 0 && (z.alpha = e.alpha), z;
}
function Er(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const r = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, n = e.v !== void 0 ? e.v : 0, i = Math.cos(r / 180 * Math.PI), o = Math.sin(r / 180 * Math.PI), [s, l] = Jt(i, o), d = 0.5, v = 1 - d / s, f = 1 - a * d / (d + l - l * v * a), c = a * l * d / (d + l - l * v * a), m = _e(f), p = c * m / f, b = fe({
    l: m,
    a: i * p,
    b: o * p
  }), M = Math.cbrt(1 / Math.max(b.r, b.g, b.b, 0)), P = _e(n * f), z = c * P / f;
  return t.l = P * M, t.a = z * i * M, t.b = z * o * M, t;
}
var Zn = {
  ...Kr,
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
    oklab: kr,
    rgb: (e) => kr(De(e))
  },
  toMode: {
    oklab: Er,
    rgb: (e) => Fe(Er(e))
  }
};
function Jn(e, t) {
  if (!t || t[0] !== "oklab") return;
  const r = { mode: "oklab" }, [, a, n, i, o] = t;
  if (!(a.type === u.Hue || n.type === u.Hue || i.type === u.Hue))
    return a.type !== u.None && (r.l = Math.min(Math.max(0, a.type === u.Number ? a.value : a.value / 100), 1)), n.type !== u.None && (r.a = n.type === u.Number ? n.value : n.value * 0.4 / 100), i.type !== u.None && (r.b = i.type === u.Number ? i.value : i.value * 0.4 / 100), o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Gn = {
  ...Yt,
  mode: "oklab",
  toMode: {
    lrgb: fe,
    rgb: Fe
  },
  fromMode: {
    lrgb: ua,
    rgb: De
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Jn],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Kn(e, t) {
  if (!t || t[0] !== "oklch") return;
  const r = { mode: "oklch" }, [, a, n, i, o] = t;
  if (a.type !== u.None) {
    if (a.type === u.Hue) return;
    r.l = Math.min(Math.max(0, a.type === u.Number ? a.value : a.value / 100), 1);
  }
  if (n.type !== u.None && (r.c = Math.max(0, n.type === u.Number ? n.value : n.value * 0.4 / 100)), i.type !== u.None) {
    if (i.type === u.Percentage) return;
    r.h = i.value;
  }
  return o.type !== u.None && (r.alpha = Math.min(1, Math.max(0, o.type === u.Number ? o.value : o.value / 100))), r;
}
var Qn = {
  ...Ut,
  mode: "oklch",
  toMode: {
    oklab: (e) => j(e, "oklab"),
    rgb: (e) => Fe(j(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => R(De(e), "oklch"),
    oklab: (e) => R(e, "oklch")
  },
  parse: [Kn],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, zr = (e) => {
  let { r: t, g: r, b: a, alpha: n } = G(e), i = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * a
  };
  return n !== void 0 && (i.alpha = n), i;
}, Pr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = K({
    r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
    g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
    b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r
  }, "p3");
  return a !== void 0 && (n.alpha = a), n;
}, ei = {
  ...J,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Pr(V(e)),
    xyz65: Pr
  },
  toMode: {
    rgb: (e) => D(zr(e)),
    xyz65: zr
  }
}, ft = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, _r = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = {
    mode: "prophoto",
    r: ft(e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * r),
    g: ft(e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * r),
    b: ft(e * 0 + t * 0 + 1.2119675456389452 * r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, pt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, Tr = (e) => {
  let t = pt(e.r), r = pt(e.g), a = pt(e.b), n = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * r + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * r + 899369387256e-16 * a,
    z: 0 * t + 0 * r + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, ti = {
  ...J,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: _r,
    rgb: (e) => _r(ve(e))
  },
  toMode: {
    xyz50: Tr,
    rgb: (e) => he(Tr(e))
  }
}, $r = 1.09929682680944, ri = 0.018053968510807, mt = (e) => {
  const t = Math.abs(e);
  return t > ri ? (Math.sign(e) || 1) * ($r * Math.pow(t, 0.45) - ($r - 1)) : 4.5 * e;
}, Cr = ({ x: e, y: t, z: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let n = {
    mode: "rec2020",
    r: mt(e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * r),
    g: mt(e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * r),
    b: mt(e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * r)
  };
  return a !== void 0 && (n.alpha = a), n;
}, Ar = 1.09929682680944, ai = 0.018053968510807, gt = (e = 0) => {
  let t = Math.abs(e);
  return t < ai * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Ar - 1) / Ar, 1 / 0.45);
}, Nr = (e) => {
  let t = gt(e.r), r = gt(e.g), a = gt(e.b), n = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * r + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * r + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, ni = {
  ...J,
  mode: "rec2020",
  fromMode: {
    xyz65: Cr,
    rgb: (e) => Cr(V(e))
  },
  toMode: {
    xyz65: Nr,
    rgb: (e) => D(Nr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, W = 0.0037930732552754493, ha = Math.cbrt(W), bt = (e) => Math.cbrt(e) - ha, ii = (e) => {
  const { r: t, g: r, b: a, alpha: n } = G(e), i = bt(0.3 * t + 0.622 * r + 0.078 * a + W), o = bt(0.23 * t + 0.692 * r + 0.078 * a + W), s = bt(0.2434226892454782 * t + 0.2047674442449682 * r + 0.5518098665095535 * a + W), l = {
    mode: "xyb",
    x: (i - o) / 2,
    y: (i + o) / 2,
    b: s - (i + o) / 2
  };
  return n !== void 0 && (l.alpha = n), l;
}, yt = (e) => Math.pow(e + ha, 3), oi = ({ x: e, y: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const n = yt(e + t) - W, i = yt(t - e) - W, o = yt(r + t) - W, s = K({
    r: 11.031566904639861 * n - 9.866943908131562 * i - 0.16462299650829934 * o,
    g: -3.2541473810744237 * n + 4.418770377582723 * i - 0.16462299650829934 * o,
    b: -3.6588512867136815 * n + 2.7129230459360922 * i + 1.9459282407775895 * o
  });
  return a !== void 0 && (s.alpha = a), s;
}, si = {
  mode: "xyb",
  channels: [
    "x",
    "y",
    "b",
    "alpha"
  ],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: { rgb: oi },
  fromMode: { rgb: ii },
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
      fixup: S
    }
  }
}, li = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: he,
    lab: Bt
  },
  fromMode: {
    rgb: ve,
    lab: Xt
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
      fixup: S
    }
  }
}, di = (e) => {
  let { x: t, y: r, z: a, alpha: n } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let i = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * r - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * r - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * r + 0.7518742899580008 * a
  };
  return n !== void 0 && (i.alpha = n), i;
}, ui = (e) => {
  let { x: t, y: r, z: a, alpha: n } = e;
  t === void 0 && (t = 0), r === void 0 && (r = 0), a === void 0 && (a = 0);
  let i = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * r + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * r + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * r + 1.3303659366080753 * a
  };
  return n !== void 0 && (i.alpha = n), i;
}, ci = {
  mode: "xyz65",
  toMode: {
    rgb: D,
    xyz50: di
  },
  fromMode: {
    rgb: V,
    xyz50: ui
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
      fixup: S
    }
  }
}, hi = ({ r: e, g: t, b: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const n = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * r,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * r,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * r
  };
  return a !== void 0 && (n.alpha = a), n;
}, vi = ({ y: e, i: t, q: r, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  const n = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * r,
    g: e - 0.27137664 * t - 0.6486059 * r,
    b: e - 1.10561724 * t + 1.70250126 * r
  };
  return a !== void 0 && (n.alpha = a), n;
}, fi = {
  mode: "yiq",
  toMode: { rgb: vi },
  fromMode: { rgb: hi },
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
      fixup: S
    }
  }
}, pi = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, mi = (e = 4) => (t) => typeof t == "number" ? pi(t, e) : t, _o = mi(2), gi = (e) => Math.max(0, Math.min(1, e || 0)), Mt = (e) => Math.round(gi(e) * 255), bi = Dt("rgb"), To = Dt("hsl"), yi = (e) => {
  if (e === void 0) return;
  let t = Mt(e.r), r = Mt(e.g), a = Mt(e.b);
  return "#" + (1 << 24 | t << 16 | r << 8 | a).toString(16).slice(1);
}, va = (e) => yi(bi(e)), $o = y(en), Co = y(ln), Ao = y(dn), No = y(un), Lo = y(vn), Io = y(Zr), Ro = y(Kr), jo = y(Sn), Ho = y(kn), Oo = y(_n), qo = y(Tn), Wo = y(Yt), Vo = y(Cn), Do = y(Ut), Fo = y(Nn), Xo = y(Dn), Bo = y(Fn), Yo = y(Xn), Uo = y(Un), Zo = y(Zn), Jo = y(Gn), Lt = y(Qn), Go = y(ei), Ko = y(ti), Qo = y(ni), es = y(J), ts = y(si), rs = y(li), as = y(ci), ns = y(fi), fa = (e, t = "l") => e.sort((r, a) => Math.sign(Lt({
  mode: "rgb",
  r: r[0],
  g: r[1],
  b: r[2]
})?.[t] - Lt({
  mode: "rgb",
  r: a[0],
  g: a[1],
  b: a[2]
})?.[t]) || 0), Gt = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]), Mi = (e, t) => {
  let r = Array.from({ length: t.length }, () => ({
    points: [],
    mean: null
  }));
  return e.forEach((a) => {
    let n = 1e4, i = 0;
    t.forEach((o, s) => {
      const l = Gt(a, o);
      (typeof n > "u" || n > l) && (n = l, i = s);
    }), r[i].points.push(a);
  }), r;
}, wi = (e) => e?.length > 0 ? e.reduce((t, r) => [
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
], xi = (e, t) => {
  let r = fa(Si(e, t));
  const a = 10;
  for (let n = 0; n < a; n++) {
    const i = Mi(e, r).map((o) => o.points.length > 0 ? wi(o.points) : null);
    if (i.every((o, s) => o && Gt(o, r[s]) < 1e-3)) break;
    r = i;
  }
  return r;
}, Si = (e, t) => {
  const r = [e[Math.floor(Math.random() * e.length)]];
  for (; r.length < t; ) {
    const a = e.map((l) => Math.min(...r.map((d) => Gt(l, d)))), n = a.reduce((l, d) => l + d, 0), i = a.map((l) => l / n);
    let o = 0;
    const s = Math.random();
    for (let l = 0; l < i.length; l++)
      if (o += i[l], s < o) {
        r.push(e[l]);
        break;
      }
  }
  return r;
}, ki = async (e) => {
  const t = e instanceof Blob || e instanceof File ? e : await fetch(e)?.then?.((i) => i?.blob?.()), r = await createImageBitmap(t), a = new OffscreenCanvas(r.width, r.height), n = a.getContext("2d");
  return n.filter = "blur(16px)", n?.drawImage?.(r, 0, 0, a.width, a.height), a;
}, Ei = async (e) => {
  const t = await ki(e), r = new OffscreenCanvas(t.width * 0.125, t.height * 0.125), a = r.getContext("2d");
  a?.drawImage?.(t, 0, 0, r.width, r.height);
  const n = (a?.getImageData?.(0, 0, r.width, r.height, {
    storageFormat: "float32",
    pixelFormat: "rgba-float32",
    colorSpace: "srgb"
  })).data, i = r.width * r.height || 0, o = 1 / 255, s = [];
  for (let l = 0; l < i; l++) {
    const d = l * 4;
    s.push(n instanceof Float32Array || n instanceof Float16Array ? [
      n?.[d + 0] || 0,
      n?.[d + 1] || 0,
      n?.[d + 2] || 0
    ] : [
      (n?.[d + 0] || 0) * o,
      (n?.[d + 1] || 0) * o,
      (n?.[d + 2] || 0) * o
    ]);
  }
  return s;
}, zi = async (e) => {
  const t = await Ei(e);
  return fa(xi(t, 4), "h");
}, Pi = "rs-wallpaper-theme", _i = "rs-wallpaper-primary", Ti = "rs-wallpaper-theme-src", pa = Pi, $i = _i, Lr = Ti, Ci = [
  ["--color-primary", "primary"],
  ["--color-secondary", "secondary"],
  ["--color-tertiary", "tertiary"],
  ["--base-color", "primary"],
  ["--wf-md-primary", "primary"],
  ["--wf-md-seed", "primary"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--tertiary", "tertiary"]
], Ai = (e) => {
  const [t, r, a] = e;
  if (![
    t,
    r,
    a
  ].every((o) => Number.isFinite(o))) return null;
  const n = va({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  if (!n) return null;
  const i = Lt({
    mode: "rgb",
    r: t,
    g: r,
    b: a
  });
  return {
    rgb: e,
    hex: n,
    l: i?.l ?? 0.5,
    c: i?.c ?? 0,
    h: i?.h ?? 0
  };
}, Ni = (e) => {
  const t = e.map(Ai).filter(Boolean);
  if (!t.length) return null;
  const r = t.filter((d) => d.l >= 0.18 && d.l <= 0.88 && d.c >= 0.02).sort((d, v) => v.c - d.c || Math.abs(v.l - 0.55) - Math.abs(d.l - 0.55)), a = r.length ? r : [...t].sort((d, v) => v.c - d.c), n = a[0];
  if (!n) return null;
  const i = (d, v) => {
    const f = Math.abs(d - v) % 360;
    return f > 180 ? 360 - f : f;
  }, o = (d) => {
    const v = a.filter((f) => !d.includes(f));
    if (!v.length) {
      const f = d[d.length - 1] ?? n, c = va({
        mode: "oklch",
        l: Math.min(0.85, Math.max(0.2, f.l + (d.length === 1 ? -0.12 : 0.1))),
        c: Math.max(0.04, f.c * 0.85),
        h: f.h
      });
      return {
        ...f,
        hex: c || f.hex,
        l: f.l
      };
    }
    return [...v].sort((f, c) => Math.min(...d.map((m) => i(c.h, m.h))) - Math.min(...d.map((m) => i(f.h, m.h))) || c.c - f.c)[0] ?? v[0];
  }, s = o([n]), l = o([n, s]);
  return {
    primary: n.hex,
    secondary: s.hex,
    tertiary: l.hex
  };
}, Li = () => {
  const e = /* @__PURE__ */ new Set();
  return e.add(document.documentElement), document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window").forEach((t) => e.add(t)), [...e];
}, ye = (e) => {
  for (const t of Li()) for (const [r, a] of Ci) t.style.setProperty(r, e[a]);
  document.querySelectorAll(".view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings']").forEach((t) => {
    t.style.setProperty("--color-primary", e.primary), t.style.setProperty("--base-color", e.primary), t.style.setProperty("--color-secondary", e.secondary), t.style.setProperty("--color-tertiary", e.tertiary);
  });
  try {
    localStorage.setItem(pa, JSON.stringify(e)), localStorage.setItem($i, e.primary);
  } catch {
  }
  document.dispatchEvent(new CustomEvent("u2-theme-change", { detail: {
    source: "wallpaper",
    seeds: e
  } }));
}, It = () => {
  try {
    const e = localStorage.getItem(pa);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t?.primary || !t?.secondary || !t?.tertiary ? null : t;
  } catch {
    return null;
  }
}, Te = async (e, t) => {
  const r = typeof e == "string" ? e.slice(0, 2048) : `blob:${e.name || "wallpaper"}:${e.size}`;
  if (!t?.force) try {
    if (localStorage.getItem(Lr) === r) {
      const a = It();
      if (a)
        return ye(a), a;
    }
  } catch {
  }
  try {
    const a = await zi(e), n = Ni(a);
    if (!n) return null;
    ye(n);
    try {
      localStorage.setItem(Lr, r);
    } catch {
    }
    return n;
  } catch (a) {
    console.warn("[fest/image] applyThemeFromWallpaper failed", a);
    const n = It();
    return n ? (ye(n), n) : null;
  }
}, Ii = () => {
  const e = It();
  return e && ye(e), e;
}, Ir = /* @__PURE__ */ new Set();
[
  {
    name: "--screen-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--screen-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--clip-ampl",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--clip-freq",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--avail-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--avail-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--pixel-ratio",
    syntax: "<number>",
    inherits: !0,
    initialValue: "1"
  },
  {
    name: "--percent",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-x",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-y",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-left",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-top",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--drag-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--drag-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--resize-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--resize-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--cs-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-x",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-y",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  }
].forEach((e) => {
  if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
  const t = String(e?.name || "").trim();
  if (!(!t || Ir.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (r) {
      String(r?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(r);
    } finally {
      Ir.add(t);
    }
});
function Ri() {
  const e = globalThis;
  if (typeof e.HTMLElement == "function") return;
  const t = class {
  }, r = (a) => {
    typeof e[a] != "function" && (e[a] = t);
  };
  r("EventTarget"), r("Node"), r("Element"), r("HTMLElement"), r("SVGElement"), r("Text"), r("Comment"), r("DocumentFragment"), r("ShadowRoot"), r("HTMLDocument"), r("Document"), r("HTMLBodyElement"), r("HTMLHeadElement"), r("HTMLCanvasElement"), r("HTMLInputElement"), r("HTMLLinkElement"), r("HTMLStyleElement"), r("HTMLPreElement"), r("HTMLDivElement"), r("CSSStyleRule"), r("CSSLayerBlockRule");
}
var ji = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), ma = (e) => ji(e, "value"), ga = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ba = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const r = parseFloat(t[0][0]);
  return !Number.isNaN(r) && Number.isFinite(r) ? r : null;
};
Ri();
var Hi = () => {
  const e = {
    canceled: !1,
    rAFs: /* @__PURE__ */ new Set(),
    last: null,
    cancel() {
      return this.canceled = !0, cancelAnimationFrame(this.last), this;
    },
    shedule(t) {
      return this.rAFs.add(t), this;
    }
  };
  return (async () => {
    for (; !e?.canceled; )
      await Promise.all((e?.rAFs?.values?.() ?? [])?.map?.((t) => Promise.try(t)?.catch?.(console.warn.bind(console)))), e.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((t) => {
        e.last = requestAnimationFrame(t);
      }) : await new Promise((t) => {
        setTimeout(t, 16);
      });
  })(), e;
}, is = typeof document < "u" ? document?.documentElement : null, Oi = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Oi.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var qi = {};
function w(e, t, r, a = qi) {
  e?.addEventListener?.(t, r, a);
  const n = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => n?.deref?.()?.removeEventListener?.(t, r, a);
}
var Wi = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), ya = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, r = t ? {
    "--vv-width": `${t.width}px`,
    "--vv-height": `${t.height}px`,
    "--vv-offset-left": `${t.offsetLeft}px`,
    "--vv-offset-top": `${t.offsetTop}px`,
    "--vv-scale": String(t.scale ?? 1)
  } : {
    "--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
    "--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
    "--vv-offset-left": "0px",
    "--vv-offset-top": "0px",
    "--vv-scale": "1"
  };
  if (typeof screen < "u") {
    const a = screen?.availWidth + "px", n = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? n : a,
      "--avail-height": e ? a : n,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...r
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...r
  };
}, Rr = ya(), Vi = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, Di = (e) => {
  const t = document.documentElement;
  Object.assign(Rr, ya()), Object.entries(Rr).forEach(([r, a]) => {
    const n = t?.style?.getPropertyValue(r);
    (!n || n != a) && t?.style?.setProperty?.(r, a || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Fi = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, wt = { passive: !0 }, Xi = (e) => {
  let t = !1;
  const r = () => {
    t || (requestAnimationFrame(() => {
      Di(), e(), t = !1;
    }), t = !0);
  }, a = [];
  return a.push(w(navigator?.virtualKeyboard, "geometrychange", r, wt)), a.push(w(window?.visualViewport, "scroll", r, wt)), a.push(w(window?.visualViewport, "resize", r, wt)), a.push(w(screen?.orientation, "change", r)), a.push(w(window, "resize", r)), a.push(w(document?.documentElement, "fullscreenchange", r)), a.push(w(document, "DOMContentLoaded", r)), a.push(w(matchMedia("(orientation: portrait)"), "change", r)), a.push(w(matchMedia("(orientation: landscape)"), "change", r)), r(), Wi(() => r(), 100), () => a.forEach((n) => n());
}, os = new OffscreenCanvas(1, 1).getContext("2d"), Ma = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Bi = (e, t, r, a) => {
  const n = new Set([...r.split(",") || [r]].map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const l of o) if (l.type == "childList") {
      const d = Array.from(l.addedNodes) || [], v = Array.from(l.removedNodes) || [];
      d.push(...Array.from(l.addedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), v.push(...Array.from(l.removedNodes || []).flatMap((f) => Array.from(f?.querySelectorAll?.(t) || []))), [...new Set(d)].filter((f) => f?.matches?.(t))?.map?.((f) => {
        n.forEach((c) => {
          a({
            target: f,
            type: "attributes",
            attributeName: c,
            oldValue: f?.getAttribute?.(c)
          }, s);
        });
      });
    } else l.target?.matches?.(t) && l.attributeName && n.has(l.attributeName) && a(l, s);
  });
  return i.observe(e = Ma(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...n],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((o) => n.forEach((s) => a({
    target: o,
    type: "attributes",
    attributeName: s,
    oldValue: o?.getAttribute?.(s)
  }, i))), i;
}, Yi = (e, t = "*", r = (a, n) => {
}) => {
  const a = (c) => {
    const m = Array.from(c || []) || [];
    return m.push(...Array.from(c || []).flatMap((p) => Array.from(p?.querySelectorAll?.(t) || []))), [...Array.from(new Set(m).values())].filter((p) => p?.matches?.(t));
  }, n = (c) => {
    const m = v?.deref?.(), p = a(c.addedNodes), b = a(c.removedNodes);
    (p.length > 0 || b.length > 0) && r?.({
      type: c.type,
      target: c.target,
      attributeName: c.attributeName,
      attributeNamespace: c.attributeNamespace,
      nextSibling: c.nextSibling,
      oldValue: c.oldValue,
      previousSibling: c.previousSibling,
      addedNodes: p,
      removedNodes: b
    }, m);
  }, i = (c) => {
    n({
      addedNodes: [c?.target].filter((m) => !!m),
      removedNodes: [c?.relatedTarget].filter((m) => !!m),
      type: "childList",
      target: c?.currentTarget
    });
  }, o = (c) => {
    n({
      addedNodes: [c?.relatedTarget].filter((m) => !!m),
      removedNodes: [c?.target].filter((m) => !!m),
      type: "childList",
      target: c?.currentTarget
    });
  }, s = (c) => {
    n({
      addedNodes: [c?.target].filter((m) => !!m),
      removedNodes: [c?.relatedTarget || document?.activeElement].filter((m) => !!m),
      type: "childList",
      target: c?.currentTarget
    });
  }, l = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active"))
    return e.addEventListener("pointerover", i, l), e.addEventListener("pointerout", o, l), e.addEventListener("pointerdown", i, l), e.addEventListener("pointerup", o, l), e.addEventListener("pointercancel", o, l), { disconnect: () => {
      e.removeEventListener("pointerover", i, l), e.removeEventListener("pointerout", o, l), e.removeEventListener("pointerdown", i, l), e.removeEventListener("pointerup", o, l), e.removeEventListener("pointercancel", o, l);
    } };
  if (t?.includes?.(":hover"))
    return e.addEventListener("pointerover", i, l), e.addEventListener("pointerout", o, l), { disconnect: () => {
      e.removeEventListener("pointerover", i, l), e.removeEventListener("pointerout", o, l);
    } };
  if (t?.includes?.(":active"))
    return e.addEventListener("pointerdown", i, l), e.addEventListener("pointerup", o, l), e.addEventListener("pointercancel", o, l), { disconnect: () => {
      e.removeEventListener("pointerdown", i, l), e.removeEventListener("pointerup", o, l), e.removeEventListener("pointercancel", o, l);
    } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", i, l), e.addEventListener("focusout", o, l), e.addEventListener("click", s, l), { disconnect: () => {
      e.removeEventListener("focusin", i, l), e.removeEventListener("focusout", o, l), e.removeEventListener("click", s, l);
    } };
  const d = new MutationObserver((c, m) => {
    for (const p of c) p.type == "childList" && n(p);
  }), v = new WeakRef(d);
  (e?.element ?? e) instanceof Node && d.observe(e = Ma(e), {
    childList: !0,
    subtree: !0
  });
  const f = Array.from(e.querySelectorAll(t));
  return f.length > 0 && r?.({
    addedNodes: f,
    removedNodes: []
  }, d), d;
}, Ui = "DOM", xt = typeof document < "u" ? document.createElement("style") : null;
xt && (typeof document < "u" && document.querySelector("head")?.appendChild?.(xt), xt.dataset.owner = Ui);
var Xe = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", U = (e) => Xe && e instanceof CSSStyleValue, B = (e) => Xe && e instanceof CSSUnitValue, I = (e, t, r, a = "") => {
  if (!(!e || !t)) {
    if (r == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== r && e.setProperty(t, r, a);
  }
}, Zi = (e, t, r, a = "") => {
  if (!e || !t) return e;
  const n = ga(t), i = e.style, o = e.attributeStyleMap ?? e.styleMap;
  if (!Xe || !o) return wa(e, t, r, a);
  let s = ma(r) && !(U(r) || B(r)) ? r?.value : r;
  if (s == null)
    return o.delete?.(n), i && I(i, n, null, a), e;
  if (U(s)) {
    const l = o.get(n);
    if (B(s) && B(l)) {
      if (l.value === s.value && l.unit === s.unit) return e;
    } else if (l === s) return e;
    return o.set(n, s), e;
  }
  if (typeof s == "number") if (CSS?.number && !n.startsWith("--")) {
    const l = CSS.number(s), d = o.get(n);
    return B(d) && d.value === l.value && d.unit === l.unit || o.set(n, l), e;
  } else
    return I(i, n, String(s), a), e;
  if (typeof s == "string" && !U(s)) {
    const l = ba(s);
    if (typeof l == "number" && CSS?.number && !n.startsWith("--")) {
      const d = CSS.number(l), v = o.get(n);
      return B(v) && v.value === d.value && v.unit === d.unit || o.set(n, d), e;
    } else
      return I(i, n, s, a), e;
  }
  return I(i, n, String(s), a), e;
}, wa = (e, t, r, a = "") => {
  if (!e || !t) return e;
  const n = ga(t), i = e.style;
  if (!i) return e;
  let o = ma(r) && !(U(r) || B(r)) ? r?.value : r;
  return typeof o == "string" && !U(o) && (o = ba(o) ?? o), o == null ? (I(i, n, null, a), e) : (U(o) || typeof o == "number", I(i, n, String(o), a), e);
}, ge = (e, t, r, a = "") => Xe ? Zi(e, t, r, a) : wa(e, t, r, a), Ji = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new Map(), Gi = (e, t) => {
  const r = [...e.entries() || []];
  return new Map(r?.map?.(([a, n]) => [a, n?.get?.(t)])?.filter?.(([a, n]) => !!n) || []);
}, Me = (e) => ({
  storeSet: Gi(Rt, e),
  mixinSet: we?.get?.(e),
  behaviorSet: Ji?.get?.(e)
}), we = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new WeakMap(), xa = (e, t) => {
  typeof t == "string" && (t = ue?.get?.(t));
  const r = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), a = new Set([...r].map((o) => ue?.get?.(o)).filter((o) => !!o)), n = we?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  se?.has?.(t) || se?.set?.(t, /* @__PURE__ */ new WeakSet()), we?.has?.(e) || we?.set?.(e, n);
  const i = new WeakRef(e);
  n?.has?.(t) || (a.has(t) || t?.disconnect?.(i, t, Me(e)), (a.has(t) || !se?.get?.(t)?.has?.(e)) && (t?.connect?.(i, t, Me(e)), r.add($e?.get?.(t)), n?.add?.(t), e?.setAttribute?.("data-mixin", [...r].filter((o) => !!o).join(" "))), se?.get?.(t)?.add?.(e)), n?.has?.(t) && (a.has(t) || (n?.delete?.(t), t?.disconnect?.(i, t, Me(e))));
}, jt = /* @__PURE__ */ new Set(), Ki = (e = typeof document < "u" ? document : null) => {
  if (e)
    return jt?.has?.(e) || (jt?.add?.(e), Bi(e, "*", "data-mixin", (t) => Ht(t.target)), Yi(e, "[data-mixin]", (t) => {
      for (const r of t.addedNodes) r instanceof HTMLElement && Ht(r);
    })), e;
}, Ht = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((r) => ue?.get?.(r)).filter((r) => !!r))].map?.((r) => xa(e, r));
}, Qi = (e, t) => {
  e.forEach((r) => t ? xa(r, t) : Ht(r));
}, eo = (e) => {
  for (const t of jt) Qi(t?.querySelectorAll?.("[data-mixin]"), e);
}, to = new FinalizationRegistry((e) => {
  ue?.delete?.(e);
}), ro = (e, t) => {
  if (!$e?.has?.(t)) {
    const r = e?.trim?.();
    r && ($e?.set?.(t, r), ue?.set?.(r, t), to?.register?.(t, r), eo(t));
  }
};
Ki(typeof document < "u" ? document : null);
var Kt = class {
  constructor(e = null) {
    e && ro(e, this);
  }
  connect(e, t, r) {
    return this;
  }
  disconnect(e, t, r) {
    return this;
  }
  storeForElement(e) {
    return Rt.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return Me(e);
  }
  get elements() {
    return se?.get?.(this);
  }
  get storage() {
    return Rt?.get?.(this.name || "");
  }
  get name() {
    return $e?.get?.(this);
  }
};
function St(e, t) {
  const r = Math.min(e.x, t.x), a = Math.min(e.y, t.y), n = Math.max(e.x, t.x), i = Math.max(e.y, t.y);
  return {
    left: r,
    top: a,
    right: n,
    bottom: i,
    width: n - r,
    height: i - a
  };
}
var be = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, kt = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, Et = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Ce = /* @__PURE__ */ new WeakMap(), _ = (e, t, r) => {
  const a = Ce.get(e) ?? /* @__PURE__ */ new Map(), n = a.get(t) ?? [];
  n.push(r), a.set(t, n), Ce.set(e, a);
}, Qt = (e, t) => {
  const r = Ce.get(e), a = r?.get(t);
  if (a) {
    for (const n of a) try {
      n();
    } catch {
    }
    r.delete(t), r.size === 0 && Ce.delete(e);
  }
}, X = (e, t) => {
  const r = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", a = parseFloat(r);
  return Number.isFinite(a) ? a : 0;
}, Sa = (e, t, r) => {
  const a = e.getAttribute(t)?.trim();
  if (!a) return r;
  const n = e.querySelector(a);
  return n instanceof HTMLElement ? n : r;
}, ao = class extends Kt {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const r = document.createElement("div");
    r.className = "ui-junction-select-overlay", r.setAttribute("data-junction-overlay", ""), r.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(r);
    let n = !1, i = {
      x: 0,
      y: 0
    }, o = {
      x: 0,
      y: 0
    };
    const s = (p) => {
      const b = t.getBoundingClientRect();
      return {
        x: p.clientX - b.left,
        y: p.clientY - b.top
      };
    }, l = () => {
      const p = St(i, o);
      if (p.width < 1 && p.height < 1) {
        r.style.display = "none";
        return;
      }
      r.style.display = "block", r.style.left = `${p.left}px`, r.style.top = `${p.top}px`, r.style.width = `${p.width}px`, r.style.height = `${p.height}px`;
    }, d = (p) => {
      p.button === 0 && (p.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (p.target === t || t.contains(p.target)) && (n = !0, i = s(p), o = { ...i }, t.setPointerCapture(p.pointerId), t.dispatchEvent(new CustomEvent(be.start, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...o },
          host: t
        }
      })), l()));
    }, v = (p) => {
      if (!n) return;
      o = s(p), l();
      const b = St(i, o);
      t.dispatchEvent(new CustomEvent(be.move, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...o },
          box: b,
          host: t
        }
      }));
    }, f = (p) => {
      if (!n) return;
      n = !1;
      try {
        t.releasePointerCapture(p.pointerId);
      } catch {
      }
      const b = St(i, o);
      t.dispatchEvent(new CustomEvent(be.end, {
        bubbles: !0,
        detail: {
          a: { ...i },
          b: { ...o },
          box: b,
          host: t
        }
      }));
    }, c = (p) => {
      n && f(p);
    }, m = (p) => {
      if (n) {
        n = !1, r.style.display = "none";
        try {
          t.releasePointerCapture(p.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(be.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return _(t, "ui-junction-select", () => {
      r.remove();
    }), _(t, "ui-junction-select", w(t, "pointerdown", d)), _(t, "ui-junction-select", w(t, "pointermove", v)), _(t, "ui-junction-select", w(t, "pointerup", c)), _(t, "ui-junction-select", w(t, "pointercancel", m)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Qt(t, "ui-junction-select"), this;
  }
}, no = class extends Kt {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    ge(t, "--jx-drag-x", X(t, "--jx-drag-x")), ge(t, "--jx-drag-y", X(t, "--jx-drag-y"));
    const r = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const a = Sa(t, "data-junction-drag-handle", t);
    let n = !1, i = 0, o = 0, s = 0, l = 0;
    const d = (c) => {
      c.button === 0 && (c.target !== a && !a.contains(c.target) || (n = !0, i = c.clientX, o = c.clientY, s = X(t, "--jx-drag-x"), l = X(t, "--jx-drag-y"), a.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(kt.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: c.clientX,
          clientY: c.clientY,
          baseX: s,
          baseY: l
        }
      }))));
    }, v = (c) => {
      if (!n) return;
      const m = c.clientX - i, p = c.clientY - o, b = s + m, M = l + p;
      ge(t, "--jx-drag-x", b), ge(t, "--jx-drag-y", M), t.dispatchEvent(new CustomEvent(kt.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: m,
          dy: p,
          x: b,
          y: M
        }
      }));
    }, f = (c) => {
      if (n) {
        n = !1;
        try {
          a.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(kt.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: X(t, "--jx-drag-x"),
            y: X(t, "--jx-drag-y")
          }
        }));
      }
    };
    return _(t, "ui-junction-drag", () => {
      t.style.transform = r;
    }), _(t, "ui-junction-drag", w(a, "pointerdown", d)), _(t, "ui-junction-drag", w(a, "pointermove", v)), _(t, "ui-junction-drag", w(a, "pointerup", f)), _(t, "ui-junction-drag", w(a, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Qt(t, "ui-junction-drag"), this;
  }
}, io = class extends Kt {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const r = Sa(t, "data-junction-resize-handle", t);
    let a = !1, n = 0, i = 0, o = 0, s = 0;
    const l = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), d = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), v = (m) => {
      m.button === 0 && (m.target !== r && !r.contains(m.target) || (a = !0, n = m.clientX, i = m.clientY, o = t.offsetWidth, s = t.offsetHeight, r.setPointerCapture(m.pointerId), t.dispatchEvent(new CustomEvent(Et.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: o,
          height: s
        }
      }))));
    }, f = (m) => {
      if (!a) return;
      const p = Math.max(l, o + (m.clientX - n)), b = Math.max(d, s + (m.clientY - i));
      t.style.width = `${p}px`, t.style.height = `${b}px`, t.dispatchEvent(new CustomEvent(Et.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: p,
          height: b
        }
      }));
    }, c = (m) => {
      if (a) {
        a = !1;
        try {
          r.releasePointerCapture(m.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(Et.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return _(t, "ui-junction-resize", w(r, "pointerdown", v)), _(t, "ui-junction-resize", w(r, "pointermove", f)), _(t, "ui-junction-resize", w(r, "pointerup", c)), _(t, "ui-junction-resize", w(r, "pointercancel", c)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Qt(t, "ui-junction-resize"), this;
  }
};
new ao();
new no();
new io();
var zt = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new Map([]), jr = Hi(), xe = (e) => e?.naturalWidth || e?.width || 1, Se = (e) => e?.naturalHeight || e?.height || 1, ss = (e, t) => {
  oo.set(e, t);
}, so = (e, t, r = 1, a, n = 0) => {
  const i = e.canvas;
  e.translate(i.width / 2, i.height / 2), e.rotate((-n || 0) * (Math.PI * 0.5)), e.rotate((1 - a) * (Math.PI / 2)), e.translate(-(xe(t) / 2) * r, -(Se(t) / 2) * r);
}, lo = (e) => (!zt.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image) && zt.set(e, createImageBitmap(e)), zt.get(e)), uo = /* @__PURE__ */ new WeakMap(), co = (e, t) => uo?.getOrInsertComputed?.(e, () => e?.bind?.(t)), Ot = null;
typeof HTMLCanvasElement < "u" ? Ot = class extends HTMLCanvasElement {
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
  get #n() {
    const t = this.getAttribute("data-orient") ?? this.getAttribute("orient") ?? "0", r = Number.parseInt(t, 10);
    return Number.isFinite(r) ? r : 0;
  }
  set #n(t) {
    const r = String(t);
    this.setAttribute("data-orient", r), this.setAttribute("orient", r);
  }
  attributeChangedCallback(t, r, a) {
    t == "data-src" && this.#i(a), (t == "data-orient" || t == "orient") && this.#a(this.#r);
  }
  connectedCallback() {
    const t = this.parentNode;
    this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || t?.clientWidth || 1, 1), t?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || t?.clientHeight || 1, 1), t?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], this.#i(this.#t = this.dataset.src || this.#t), this.image && this.#a(this.#r);
  }
  constructor() {
    super();
    const t = this, r = this.parentNode, a = () => {
      const n = this.#e;
      this.#e = [Math.min(Math.min(Math.max(this.clientWidth || r?.clientWidth || 1, 1), r?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || r?.clientHeight || 1, 1), r?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], (n?.[0] != this.#e[0] || n?.[1] != this.#e[1]) && this.#a(this.#r);
    };
    jr?.shedule?.(() => {
      this.ctx = t.getContext("2d", {
        alpha: !0,
        desynchronized: !0,
        powerPreference: "high-performance",
        preserveDrawingBuffer: !0,
        colorSpace: "rec2100-hlg"
      }), this.ctx?.configureHighDynamicRange?.({ mode: "extended" }), t?.configureHighDynamicRange?.({ mode: "extended" }), this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.style.setProperty("dynamic-range-limit", "no-limit"), this.style.setProperty("color-space", "display-p3"), this.style.setProperty("background-color", "black", "important"), this.style.setProperty("opacity", "1", "important"), a(), new ResizeObserver((n) => {
        for (const i of n) {
          const o = i?.devicePixelContentBoxSize?.[0];
          if (o) {
            const s = this.#e;
            this.#e = [Math.max(o.inlineSize || this.width, 1), Math.max(o.blockSize || this.height, 1)], (s?.[0] != this.#e[0] || s?.[1] != this.#e[1]) && this.#a(this.#r);
          }
        }
      }).observe(this, { box: "device-pixel-content-box" }), this.#i(this.#t = this.dataset.src || this.#t);
    });
  }
  async $useImageAsSource(t, r) {
    r ||= this.#t;
    const a = t instanceof ImageBitmap ? t : await lo(t).catch(console.warn.bind(console));
    return a && r == this.#t && (this.image = a, this.#a(r)), t;
  }
  $renderPass(t) {
    const r = this, a = this.ctx, n = this.image;
    if (n && a && (t == this.#t || !t)) {
      t && (this.#r = t), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
      const i = this.#n % 2 || 0, o = xe(n) <= Se(n) ? 1 : 0, s = Math.max(r[["height", "width"][i]] / (o ? Se(n) : xe(n)), r[["width", "height"][i]] / (o ? xe(n) : Se(n)));
      a.save(), a.clearRect(0, 0, r.width, r.height), so(a, n, s, o, this.#n), a.drawImage(n, 0, 0, n.width * s, n.height * s), a.restore();
    }
  }
  #i(t) {
    const r = t || this.#t;
    return this.#t = r, fetch(t, {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (a) => this.$useImageAsSource(await a.blob(), r)?.catch(console.warn.bind(console)))?.catch?.(console.warn.bind(console));
  }
  #a(t) {
    const r = this.ctx;
    this.image && r && (t == this.#t || !t) && jr?.shedule?.(co(this.$renderPass, this));
  }
} : Ot = class {
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
  #n = "";
  #i = "";
  #a = [1, 1];
  ctx = null;
  image = null;
};
try {
  customElements.define("ui-canvas", Ot, { extends: "canvas" });
} catch {
}
var ka = "rs-wallpaper-image", H = "/assets/wallpaper.jpg", qt = "idb:rs-wallpaper", ho = "cwsp-wallpaper-v1", O = "blobs", er = "current", Ea = 512e3, $ = null, tr = () => Vi?.[Fi()] ?? 0, Ae = () => {
  if ($ && $.startsWith("blob:")) try {
    URL.revokeObjectURL($);
  } catch {
  }
  $ = null;
}, rr = () => new Promise((e, t) => {
  if (typeof indexedDB > "u") {
    t(/* @__PURE__ */ new Error("indexedDB unavailable"));
    return;
  }
  const r = indexedDB.open(ho, 1);
  r.onupgradeneeded = () => {
    const a = r.result;
    a.objectStoreNames.contains(O) || a.createObjectStore(O);
  }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error || /* @__PURE__ */ new Error("IDB open failed"));
}), vo = async (e) => {
  const t = await rr();
  try {
    await new Promise((r, a) => {
      const n = t.transaction(O, "readwrite");
      n.objectStore(O).put(e, er), n.oncomplete = () => r(), n.onerror = () => a(n.error || /* @__PURE__ */ new Error("IDB put failed"));
    });
  } finally {
    t.close();
  }
}, Hr = async () => {
  const e = await rr();
  try {
    return await new Promise((t, r) => {
      const a = e.transaction(O, "readonly").objectStore(O).get(er);
      a.onsuccess = () => {
        const n = a.result;
        t(n instanceof Blob ? n : null);
      }, a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB get failed"));
    });
  } finally {
    e.close();
  }
}, fo = async () => {
  try {
    const e = await rr();
    try {
      await new Promise((t, r) => {
        const a = e.transaction(O, "readwrite");
        a.objectStore(O).delete(er), a.oncomplete = () => t(), a.onerror = () => r(a.error || /* @__PURE__ */ new Error("IDB delete failed"));
      });
    } finally {
      e.close();
    }
  } catch {
  }
}, ar = () => {
  try {
    const e = localStorage.getItem(ka);
    return e && e.trim() ? e.trim() : H;
  } catch {
    return H;
  }
}, Ne = (e) => {
  try {
    return localStorage.setItem(ka, e), !0;
  } catch {
    return !1;
  }
}, po = (e) => e.startsWith("data:") || e.startsWith("blob:"), mo = async () => {
  const e = ar();
  if (e === "idb:rs-wallpaper" || e.startsWith("idb:")) {
    try {
      const t = await Hr();
      if (t)
        return Ae(), $ = URL.createObjectURL(t), $;
    } catch (t) {
      console.warn("[fest/image] wallpaper IDB restore failed", t);
    }
    return H;
  }
  if (e.startsWith("data:") && e.length > Ea) try {
    const t = await Hr();
    if (t)
      return Ae(), $ = URL.createObjectURL(t), Ne(qt), $;
  } catch {
  }
  return e || H;
}, us = () => ar(), Or = (e) => {
  const t = () => {
    const r = tr(), a = String(r);
    e.getAttribute("data-orient") !== a && e.setAttribute("data-orient", a), e.getAttribute("orient") !== a && e.setAttribute("orient", a), e.style.setProperty("--orient", a), e.orient = r;
  };
  return t(), Xi(t);
}, cs = () => {
  document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas').forEach((e) => {
    const t = tr(), r = String(t);
    e.setAttribute("data-orient", r), e.setAttribute("orient", r), e.style.setProperty("--orient", r);
  });
}, ce = (e) => {
  const t = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim() || "#5b86eb";
  e.style.background = `radial-gradient(circle at 15% 20%, color-mix(in oklab, ${t} 45%, transparent) 0%, transparent 40%), radial-gradient(circle at 75% 72%, color-mix(in oklab, ${t} 35%, transparent) 0%, transparent 43%)`;
}, Wt = (e) => {
  const t = document.querySelectorAll('[data-app-layer="canvas"] canvas[is="ui-canvas"], [data-app-layer="canvas"] canvas.ui-canvas'), r = String(tr());
  t.forEach((a) => {
    a.setAttribute("data-src", e), a.setAttribute("data-orient", r), a.setAttribute("orient", r), a.style.setProperty("--orient", r);
  });
}, go = async (e) => (await fetch(e)).blob(), bo = async (e) => {
  if (!(e instanceof Blob) || e.size <= 0)
    return yo(H), H;
  Ae(), $ = URL.createObjectURL(e), Wt($), Te($, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ce);
  });
  try {
    await vo(e), Ne(qt);
  } catch (t) {
    console.warn("[fest/image] wallpaper IDB persist failed", t);
    try {
      const r = new FileReader(), a = await new Promise((n, i) => {
        r.onload = () => n(String(r.result || "")), r.onerror = () => i(r.error || /* @__PURE__ */ new Error("read failed")), r.readAsDataURL(e);
      });
      a && !Ne(a) && console.warn("[fest/image] wallpaper localStorage persist also failed (quota?)");
    } catch {
    }
  }
  try {
    globalThis.dispatchEvent?.(new CustomEvent("cwsp-wallpaper-change", { detail: {
      pointer: qt,
      url: $
    } }));
  } catch {
  }
  return $;
}, hs = (e) => {
  const t = e;
  t.replaceChildren(), t.dataset.appLayer = "canvas", t.style.position = "absolute", t.style.inset = "0", t.style.overflow = "hidden", t.style.background = "radial-gradient(circle at 18% 12%, #1b2a45 0%, #0f1728 42%, #060910 100%)";
  const r = document.createElement("div");
  r.className = "app-canvas__glow", r.style.position = "absolute", r.style.inset = "-20%", r.style.pointerEvents = "none", r.style.opacity = "0.7", r.style.background = "radial-gradient(circle at 15% 20%, rgba(145,185,255,0.45) 0%, transparent 40%), radial-gradient(circle at 75% 72%, rgba(91,134,235,0.35) 0%, transparent 43%)";
  const a = document.createElement("canvas", { is: "ui-canvas" });
  a.className = "app-canvas__image ui-canvas", a.style.position = "absolute", a.style.inset = "0", a.style.pointerEvents = "none", a.style.inlineSize = "100%", a.style.blockSize = "100%", a.style.maxInlineSize = "100%", a.style.maxBlockSize = "100%", a.style.opacity = "1", a.style.mixBlendMode = "normal", a.setAttribute("is", "ui-canvas"), a.style.setProperty("dynamic-range-limit", "no-limit"), a.style.setProperty("color-space", "display-p3"), a.style.setProperty("background-color", "black", "important"), a.style.setProperty("opacity", "1", "important"), t.append(r, a);
  const n = ar(), i = n === "idb:rs-wallpaper" || n.startsWith("idb:") || n.startsWith("data:") ? H : n;
  a.setAttribute("data-src", i);
  const o = Or(a);
  return Ii(), ce(r), mo().then((s) => (a.setAttribute("data-src", s), Or(a), Te(s).then(() => ce(r)))), {
    root: t,
    canvas: a,
    glow: r,
    disposeOrient: o
  };
}, yo = (e) => {
  const t = String(e || "").trim() || H;
  if (po(t) || t.length > Ea) {
    (async () => {
      try {
        const r = t.startsWith("blob:") ? await (await fetch(t)).blob() : await go(t);
        await bo(r);
      } catch (r) {
        console.warn("[fest/image] setAppWallpaper inline persist failed", r), Wt(t), Te(t, { force: !0 }).then(() => {
          document.querySelectorAll(".app-canvas__glow").forEach(ce);
        });
      }
    })();
    return;
  }
  fo(), Ae(), Ne(t) || console.warn("[fest/image] wallpaper pointer write failed"), Wt(t), Te(t, { force: !0 }).then(() => {
    document.querySelectorAll(".app-canvas__glow").forEach(ce);
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
  Ot as UICanvas,
  qt as WALLPAPER_IDB_MARKER,
  _i as WALLPAPER_PRIMARY_STORAGE_KEY,
  Ti as WALLPAPER_THEME_SRC_STORAGE_KEY,
  Pi as WALLPAPER_THEME_STORAGE_KEY,
  Te as applyThemeFromWallpaper,
  ye as applyWallpaperThemeSeeds,
  ss as callByFrame,
  so as cover,
  lo as createImageBitmapCache,
  Mo as electronAPI,
  zi as getDominantColors,
  us as getWallpaperStoragePointer,
  hs as initializeAppCanvasLayer,
  It as loadCachedWallpaperTheme,
  wo as qualityMode,
  Ni as rankWallpaperSeeds,
  mo as resolveAppWallpaperUrl,
  Ii as restoreWallpaperThemeCache,
  yo as setAppWallpaper,
  bo as setAppWallpaperFromBlob,
  cs as syncAppWallpaperOrient,
  Or as syncCanvasOrient,
  Li as themeHosts
};
