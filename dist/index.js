import { jsx as T, jsxs as oe, Fragment as Nt } from "react/jsx-runtime";
import * as B from "react";
import Ne, { useRef as ve, useContext as Re, useLayoutEffect as Sn, useMemo as $e, useDebugValue as Ft, createElement as tr, createContext as $n, useState as pe, useCallback as me, useEffect as fe, forwardRef as nr } from "react";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ze = {}, rr = {
  get exports() {
    return Ze;
  },
  set exports(e) {
    Ze = e;
  }
}, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function or() {
  if (Vt)
    return ne;
  Vt = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function N(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case n:
          switch (h = h.type, h) {
            case l:
            case c:
            case r:
            case s:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case u:
                case g:
                case v:
                case i:
                  return h;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  function D(h) {
    return N(h) === c;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = c, ne.ContextConsumer = a, ne.ContextProvider = i, ne.Element = n, ne.ForwardRef = u, ne.Fragment = r, ne.Lazy = g, ne.Memo = v, ne.Portal = t, ne.Profiler = s, ne.StrictMode = o, ne.Suspense = p, ne.isAsyncMode = function(h) {
    return D(h) || N(h) === l;
  }, ne.isConcurrentMode = D, ne.isContextConsumer = function(h) {
    return N(h) === a;
  }, ne.isContextProvider = function(h) {
    return N(h) === i;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === n;
  }, ne.isForwardRef = function(h) {
    return N(h) === u;
  }, ne.isFragment = function(h) {
    return N(h) === r;
  }, ne.isLazy = function(h) {
    return N(h) === g;
  }, ne.isMemo = function(h) {
    return N(h) === v;
  }, ne.isPortal = function(h) {
    return N(h) === t;
  }, ne.isProfiler = function(h) {
    return N(h) === s;
  }, ne.isStrictMode = function(h) {
    return N(h) === o;
  }, ne.isSuspense = function(h) {
    return N(h) === p;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === c || h === s || h === o || h === p || h === f || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === v || h.$$typeof === i || h.$$typeof === a || h.$$typeof === u || h.$$typeof === C || h.$$typeof === _ || h.$$typeof === I || h.$$typeof === M);
  }, ne.typeOf = N, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function sr() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function N(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === c || y === s || y === o || y === p || y === f || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === v || y.$$typeof === i || y.$$typeof === a || y.$$typeof === u || y.$$typeof === C || y.$$typeof === _ || y.$$typeof === I || y.$$typeof === M);
    }
    function D(y) {
      if (typeof y == "object" && y !== null) {
        var se = y.$$typeof;
        switch (se) {
          case n:
            var ce = y.type;
            switch (ce) {
              case l:
              case c:
              case r:
              case s:
              case o:
              case p:
                return ce;
              default:
                var K = ce && ce.$$typeof;
                switch (K) {
                  case a:
                  case u:
                  case g:
                  case v:
                  case i:
                    return K;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var h = l, S = c, E = a, W = i, z = n, R = u, Q = r, U = g, A = v, w = t, m = s, L = o, b = p, Z = !1;
    function H(y) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(y) || D(y) === l;
    }
    function X(y) {
      return D(y) === c;
    }
    function ee(y) {
      return D(y) === a;
    }
    function $(y) {
      return D(y) === i;
    }
    function k(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }
    function O(y) {
      return D(y) === u;
    }
    function P(y) {
      return D(y) === r;
    }
    function d(y) {
      return D(y) === g;
    }
    function F(y) {
      return D(y) === v;
    }
    function x(y) {
      return D(y) === t;
    }
    function J(y) {
      return D(y) === s;
    }
    function V(y) {
      return D(y) === o;
    }
    function q(y) {
      return D(y) === p;
    }
    re.AsyncMode = h, re.ConcurrentMode = S, re.ContextConsumer = E, re.ContextProvider = W, re.Element = z, re.ForwardRef = R, re.Fragment = Q, re.Lazy = U, re.Memo = A, re.Portal = w, re.Profiler = m, re.StrictMode = L, re.Suspense = b, re.isAsyncMode = H, re.isConcurrentMode = X, re.isContextConsumer = ee, re.isContextProvider = $, re.isElement = k, re.isForwardRef = O, re.isFragment = P, re.isLazy = d, re.isMemo = F, re.isPortal = x, re.isProfiler = J, re.isStrictMode = V, re.isSuspense = q, re.isValidElementType = N, re.typeOf = D;
  }()), re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = or() : e.exports = sr();
})(rr);
function ir(e) {
  function n($, k, O, P, d) {
    for (var F = 0, x = 0, J = 0, V = 0, q, y, se = 0, ce = 0, K, he = K = q = 0, te = 0, le = 0, Ue = 0, ue = 0, et = O.length, Xe = et - 1, we, G = "", ie = "", ht = "", ft = "", _e; te < et; ) {
      if (y = O.charCodeAt(te), te === Xe && x + V + J + F !== 0 && (x !== 0 && (y = x === 47 ? 10 : 47), V = J = F = 0, et++, Xe++), x + V + J + F === 0) {
        if (te === Xe && (0 < le && (G = G.replace(f, "")), 0 < G.trim().length)) {
          switch (y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += O.charAt(te);
          }
          y = 59;
        }
        switch (y) {
          case 123:
            for (G = G.trim(), q = G.charCodeAt(0), K = 1, ue = ++te; te < et; ) {
              switch (y = O.charCodeAt(te)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (y = O.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = te + 1; he < Xe; ++he)
                          switch (O.charCodeAt(he)) {
                            case 47:
                              if (y === 42 && O.charCodeAt(he - 1) === 42 && te + 2 !== he) {
                                te = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (y === 47) {
                                te = he + 1;
                                break e;
                              }
                          }
                        te = he;
                      }
                  }
                  break;
                case 91:
                  y++;
                case 40:
                  y++;
                case 34:
                case 39:
                  for (; te++ < Xe && O.charCodeAt(te) !== y; )
                    ;
              }
              if (K === 0)
                break;
              te++;
            }
            switch (K = O.substring(ue, te), q === 0 && (q = (G = G.replace(p, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < le && (G = G.replace(f, "")), y = G.charCodeAt(1), y) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = k;
                    break;
                  default:
                    le = L;
                }
                if (K = n(k, le, K, y, d + 1), ue = K.length, 0 < Z && (le = t(L, G, Ue), _e = a(3, K, le, k, A, U, ue, y, d, P), G = le.join(""), _e !== void 0 && (ue = (K = _e.trim()).length) === 0 && (y = 0, K = "")), 0 < ue)
                  switch (y) {
                    case 115:
                      G = G.replace(S, i);
                    case 100:
                    case 109:
                    case 45:
                      K = G + "{" + K + "}";
                      break;
                    case 107:
                      G = G.replace(I, "$1 $2"), K = G + "{" + K + "}", K = m === 1 || m === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = G + K, P === 112 && (K = (ie += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = n(k, t(k, G, Ue), K, P, d + 1);
            }
            ht += K, K = Ue = le = he = q = 0, G = "", y = O.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (G = (0 < le ? G.replace(f, "") : G).trim(), 1 < (ue = G.length))
              switch (he === 0 && (q = G.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (ue = (G = G.replace(" ", ":")).length), 0 < Z && (_e = a(1, G, k, $, A, U, ie.length, P, d, P)) !== void 0 && (ue = (G = _e.trim()).length) === 0 && (G = "\0\0"), q = G.charCodeAt(0), y = G.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (y === 105 || y === 99) {
                    ft += G + O.charAt(te);
                    break;
                  }
                default:
                  G.charCodeAt(ue - 1) !== 58 && (ie += o(G, q, y, G.charCodeAt(2)));
              }
            Ue = le = he = q = 0, G = "", y = O.charCodeAt(++te);
        }
      }
      switch (y) {
        case 13:
        case 10:
          x === 47 ? x = 0 : 1 + q === 0 && P !== 107 && 0 < G.length && (le = 1, G += "\0"), 0 < Z * X && a(0, G, k, $, A, U, ie.length, P, d, P), U = 1, A++;
          break;
        case 59:
        case 125:
          if (x + V + J + F === 0) {
            U++;
            break;
          }
        default:
          switch (U++, we = O.charAt(te), y) {
            case 9:
            case 32:
              if (V + F + x === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    we = "";
                    break;
                  default:
                    y !== 32 && (we = " ");
                }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              V + x + F === 0 && (le = Ue = 1, we = "\f" + we);
              break;
            case 108:
              if (V + x + F + w === 0 && 0 < he)
                switch (te - he) {
                  case 2:
                    se === 112 && O.charCodeAt(te - 3) === 58 && (w = se);
                  case 8:
                    ce === 111 && (w = ce);
                }
              break;
            case 58:
              V + x + F === 0 && (he = te);
              break;
            case 44:
              x + J + V + F === 0 && (le = 1, we += "\r");
              break;
            case 34:
            case 39:
              x === 0 && (V = V === y ? 0 : V === 0 ? y : V);
              break;
            case 91:
              V + x + J === 0 && F++;
              break;
            case 93:
              V + x + J === 0 && F--;
              break;
            case 41:
              V + x + F === 0 && J--;
              break;
            case 40:
              if (V + x + F === 0) {
                if (q === 0)
                  switch (2 * se + 3 * ce) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                J++;
              }
              break;
            case 64:
              x + J + V + F + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + F + J))
                switch (x) {
                  case 0:
                    switch (2 * y + 3 * O.charCodeAt(te + 1)) {
                      case 235:
                        x = 47;
                        break;
                      case 220:
                        ue = te, x = 42;
                    }
                    break;
                  case 42:
                    y === 47 && se === 42 && ue + 2 !== te && (O.charCodeAt(ue + 2) === 33 && (ie += O.substring(ue, te + 1)), we = "", x = 0);
                }
          }
          x === 0 && (G += we);
      }
      ce = se, se = y, te++;
    }
    if (ue = ie.length, 0 < ue) {
      if (le = k, 0 < Z && (_e = a(2, ie, le, $, A, U, ue, P, d, P), _e !== void 0 && (ie = _e).length === 0))
        return ft + ie + ht;
      if (ie = le.join(",") + "{" + ie + "}", m * w !== 0) {
        switch (m !== 2 || s(ie, 2) || (w = 0), w) {
          case 111:
            ie = ie.replace(D, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(N, "::-webkit-input-$1") + ie.replace(N, "::-moz-$1") + ie.replace(N, ":-ms-input-$1") + ie;
        }
        w = 0;
      }
    }
    return ft + ie + ht;
  }
  function t($, k, O) {
    var P = k.trim().split(C);
    k = P;
    var d = P.length, F = $.length;
    switch (F) {
      case 0:
      case 1:
        var x = 0;
        for ($ = F === 0 ? "" : $[0] + " "; x < d; ++x)
          k[x] = r($, k[x], O).trim();
        break;
      default:
        var J = x = 0;
        for (k = []; x < d; ++x)
          for (var V = 0; V < F; ++V)
            k[J++] = r($[V] + " ", P[x], O).trim();
    }
    return k;
  }
  function r($, k, O) {
    var P = k.charCodeAt(0);
    switch (33 > P && (P = (k = k.trim()).charCodeAt(0)), P) {
      case 38:
        return k.replace(_, "$1" + $.trim());
      case 58:
        return $.trim() + k.replace(_, "$1" + $.trim());
      default:
        if (0 < 1 * O && 0 < k.indexOf("\f"))
          return k.replace(_, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim());
    }
    return $ + k;
  }
  function o($, k, O, P) {
    var d = $ + ";", F = 2 * k + 3 * O + 4 * P;
    if (F === 944) {
      $ = d.indexOf(":", 9) + 1;
      var x = d.substring($, d.length - 1).trim();
      return x = d.substring(0, $).trim() + x + ";", m === 1 || m === 2 && s(x, 1) ? "-webkit-" + x + x : x;
    }
    if (m === 0 || m === 2 && !s(d, 1))
      return d;
    switch (F) {
      case 1015:
        return d.charCodeAt(10) === 97 ? "-webkit-" + d + d : d;
      case 951:
        return d.charCodeAt(3) === 116 ? "-webkit-" + d + d : d;
      case 963:
        return d.charCodeAt(5) === 110 ? "-webkit-" + d + d : d;
      case 1009:
        if (d.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + d + d;
      case 978:
        return "-webkit-" + d + "-moz-" + d + d;
      case 1019:
      case 983:
        return "-webkit-" + d + "-moz-" + d + "-ms-" + d + d;
      case 883:
        if (d.charCodeAt(8) === 45)
          return "-webkit-" + d + d;
        if (0 < d.indexOf("image-set(", 11))
          return d.replace(Q, "$1-webkit-$2") + d;
        break;
      case 932:
        if (d.charCodeAt(4) === 45)
          switch (d.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + d.replace("-grow", "") + "-webkit-" + d + "-ms-" + d.replace("grow", "positive") + d;
            case 115:
              return "-webkit-" + d + "-ms-" + d.replace("shrink", "negative") + d;
            case 98:
              return "-webkit-" + d + "-ms-" + d.replace("basis", "preferred-size") + d;
          }
        return "-webkit-" + d + "-ms-" + d + d;
      case 964:
        return "-webkit-" + d + "-ms-flex-" + d + d;
      case 1023:
        if (d.charCodeAt(8) !== 99)
          break;
        return x = d.substring(d.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + x + "-webkit-" + d + "-ms-flex-pack" + x + d;
      case 1005:
        return g.test(d) ? d.replace(v, ":-webkit-") + d.replace(v, ":-moz-") + d : d;
      case 1e3:
        switch (x = d.substring(13).trim(), k = x.indexOf("-") + 1, x.charCodeAt(0) + x.charCodeAt(k)) {
          case 226:
            x = d.replace(h, "tb");
            break;
          case 232:
            x = d.replace(h, "tb-rl");
            break;
          case 220:
            x = d.replace(h, "lr");
            break;
          default:
            return d;
        }
        return "-webkit-" + d + "-ms-" + x + d;
      case 1017:
        if (d.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (k = (d = $).length - 10, x = (d.charCodeAt(k) === 33 ? d.substring(0, k) : d).substring($.indexOf(":", 7) + 1).trim(), F = x.charCodeAt(0) + (x.charCodeAt(7) | 0)) {
          case 203:
            if (111 > x.charCodeAt(8))
              break;
          case 115:
            d = d.replace(x, "-webkit-" + x) + ";" + d;
            break;
          case 207:
          case 102:
            d = d.replace(x, "-webkit-" + (102 < F ? "inline-" : "") + "box") + ";" + d.replace(x, "-webkit-" + x) + ";" + d.replace(x, "-ms-" + x + "box") + ";" + d;
        }
        return d + ";";
      case 938:
        if (d.charCodeAt(5) === 45)
          switch (d.charCodeAt(6)) {
            case 105:
              return x = d.replace("-items", ""), "-webkit-" + d + "-webkit-box-" + x + "-ms-flex-" + x + d;
            case 115:
              return "-webkit-" + d + "-ms-flex-item-" + d.replace(W, "") + d;
            default:
              return "-webkit-" + d + "-ms-flex-line-pack" + d.replace("align-content", "").replace(W, "") + d;
          }
        break;
      case 973:
      case 989:
        if (d.charCodeAt(3) !== 45 || d.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (R.test($) === !0)
          return (x = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? o($.replace("stretch", "fill-available"), k, O, P).replace(":fill-available", ":stretch") : d.replace(x, "-webkit-" + x) + d.replace(x, "-moz-" + x.replace("fill-", "")) + d;
        break;
      case 962:
        if (d = "-webkit-" + d + (d.charCodeAt(5) === 102 ? "-ms-" + d : "") + d, O + P === 211 && d.charCodeAt(13) === 105 && 0 < d.indexOf("transform", 10))
          return d.substring(0, d.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + d;
    }
    return d;
  }
  function s($, k) {
    var O = $.indexOf(k === 1 ? ":" : "{"), P = $.substring(0, k !== 3 ? O : 10);
    return O = $.substring(O + 1, $.length - 1), H(k !== 2 ? P : P.replace(z, "$1"), O, k);
  }
  function i($, k) {
    var O = o(k, k.charCodeAt(0), k.charCodeAt(1), k.charCodeAt(2));
    return O !== k + ";" ? O.replace(E, " or ($1)").substring(4) : "(" + k + ")";
  }
  function a($, k, O, P, d, F, x, J, V, q) {
    for (var y = 0, se = k, ce; y < Z; ++y)
      switch (ce = b[y].call(u, $, se, O, P, d, F, x, J, V, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = ce;
      }
    if (se !== k)
      return se;
  }
  function l($) {
    switch ($) {
      case void 0:
      case null:
        Z = b.length = 0;
        break;
      default:
        if (typeof $ == "function")
          b[Z++] = $;
        else if (typeof $ == "object")
          for (var k = 0, O = $.length; k < O; ++k)
            l($[k]);
        else
          X = !!$ | 0;
    }
    return l;
  }
  function c($) {
    return $ = $.prefix, $ !== void 0 && (H = null, $ ? typeof $ != "function" ? m = 1 : (m = 2, H = $) : m = 0), c;
  }
  function u($, k) {
    var O = $;
    if (33 > O.charCodeAt(0) && (O = O.trim()), ee = O, O = [ee], 0 < Z) {
      var P = a(-1, k, O, O, A, U, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (k = P);
    }
    var d = n(L, O, k, 0, 0);
    return 0 < Z && (P = a(-2, d, O, O, A, U, d.length, 0, 0, 0), P !== void 0 && (d = P)), ee = "", w = 0, U = A = 1, d;
  }
  var p = /^\0+/g, f = /[\0\r\f]/g, v = /: */g, g = /zoo|gra/, M = /([,: ])(transform)/g, C = /,\r+?/g, _ = /([\t\r\n ])*\f?&/g, I = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, D = /:(read-only)/g, h = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, W = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, R = /stretch|:\s*\w+\-(?:conte|avail)/, Q = /([^-])(image-set\()/, U = 1, A = 1, w = 0, m = 1, L = [], b = [], Z = 0, H = null, X = 0, ee = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var ar = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function cr(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var lr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ut = /* @__PURE__ */ cr(
  function(e) {
    return lr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Lt = Ze, ur = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, dr = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, hr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, kn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zt = {};
Zt[Lt.ForwardRef] = hr;
Zt[Lt.Memo] = kn;
function Xt(e) {
  return Lt.isMemo(e) ? kn : Zt[e.$$typeof] || ur;
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyNames, Jt = Object.getOwnPropertySymbols, mr = Object.getOwnPropertyDescriptor, vr = Object.getPrototypeOf, qt = Object.prototype;
function En(e, n, t) {
  if (typeof n != "string") {
    if (qt) {
      var r = vr(n);
      r && r !== qt && En(e, r, t);
    }
    var o = pr(n);
    Jt && (o = o.concat(Jt(n)));
    for (var s = Xt(e), i = Xt(n), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!dr[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = mr(n, l);
        try {
          fr(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var yr = En;
function xe() {
  return (xe = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Kt = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, wt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ze.typeOf(e);
}, it = Object.freeze([]), Ae = Object.freeze({});
function We(e) {
  return typeof e == "function";
}
function xt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Wt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ye = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Yt = typeof window < "u" && "HTMLElement" in window, gr = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), wr = {}, xr = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function br() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ee(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(br.apply(void 0, [xr[e]].concat(t)).trim());
}
var Cr = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Ee(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var a = s; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = 0, u = r.length; c < u; c++)
      this.tag.insertRule(l, r[c]) && (this.groupSizes[t]++, l++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, a = s; a < i; a++)
      r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Ke = 1, tt = function(e) {
  if (ot.has(e))
    return ot.get(e);
  for (; at.has(Ke); )
    Ke++;
  var n = Ke++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Ee(16, "" + n), ot.set(e, n), at.set(n, e), n;
}, Sr = function(e) {
  return at.get(e);
}, $r = function(e, n) {
  n >= Ke && (Ke = n + 1), ot.set(e, n), at.set(n, e);
}, kr = "style[" + Ye + '][data-styled-version="5.3.8"]', Er = new RegExp("^" + Ye + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Mr = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, _r = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var a = i.match(Er);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && ($r(c, l), Mr(e, c, a[3]), e.getTag().insertRules(l, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, Or = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Mn = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var u = l[c];
      if (u && u.nodeType === 1 && u.hasAttribute(Ye))
        return u;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Ye, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = Or();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Ar = function() {
  function e(t) {
    var r = this.element = Mn(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, a = s.length; i < a; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ee(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), Pr = function() {
  function e(t) {
    var r = this.element = Mn(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Tr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Qt = Yt, Rr = { isServer: !Yt, useCSSOMInjection: !gr }, ct = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ae), r === void 0 && (r = {}), this.options = xe({}, Rr, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Yt && Qt && (Qt = !1, function(s) {
      for (var i = document.querySelectorAll(kr), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(Ye) !== "active" && (_r(s, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(t) {
    return tt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(xe({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Tr(i) : s ? new Ar(i) : new Pr(i), new Cr(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (tt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(tt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(tt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var a = Sr(i);
        if (a !== void 0) {
          var l = t.names.get(a), c = r.getGroup(i);
          if (l && c && l.size) {
            var u = Ye + ".g" + i + '[id="' + a + '"]', p = "";
            l !== void 0 && l.forEach(function(f) {
              f.length > 0 && (p += f + ",");
            }), s += "" + c + u + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Dr = /(a)(d)/gi, en = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function bt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = en(n % 52) + t;
  return (en(n % 52) + t).replace(Dr, "$1-$2");
}
var De = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, _n = function(e) {
  return De(5381, e);
};
function On(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (We(t) && !Wt(t))
      return !1;
  }
  return !0;
}
var Ir = _n("5.3.8"), Nr = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && On(n), this.componentId = t, this.baseHash = De(Ir, t), this.baseStyle = r, ct.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Le(this.rules, n, t, r).join(""), a = bt(De(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var l = r(i, "." + a, void 0, o);
          t.insertRules(o, a, l);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, u = De(this.baseHash, r.hash), p = "", f = 0; f < c; f++) {
        var v = this.rules[f];
        if (typeof v == "string")
          p += v, process.env.NODE_ENV !== "production" && (u = De(u, v + f));
        else if (v) {
          var g = Le(v, n, t, r), M = Array.isArray(g) ? g.join("") : g;
          u = De(u, M + f), p += M;
        }
      }
      if (p) {
        var C = bt(u >>> 0);
        if (!t.hasNameForId(o, C)) {
          var _ = r(p, "." + C, void 0, o);
          t.insertRules(o, C, _);
        }
        s.push(C);
      }
    }
    return s.join(" ");
  }, e;
}(), Lr = /^\s*\/\/.*$/gm, Zr = [":", "[", ".", "#"];
function Wr(e) {
  var n, t, r, o, s = e === void 0 ? Ae : e, i = s.options, a = i === void 0 ? Ae : i, l = s.plugins, c = l === void 0 ? it : l, u = new ir(a), p = [], f = function(M) {
    function C(_) {
      if (_)
        try {
          M(_ + "}");
        } catch {
        }
    }
    return function(_, I, N, D, h, S, E, W, z, R) {
      switch (_) {
        case 1:
          if (z === 0 && I.charCodeAt(0) === 64)
            return M(I + ";"), "";
          break;
        case 2:
          if (W === 0)
            return I + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return M(N[0] + I), "";
            default:
              return I + (R === 0 ? "/*|*/" : "");
          }
        case -2:
          I.split("/*|*/}").forEach(C);
      }
    };
  }(function(M) {
    p.push(M);
  }), v = function(M, C, _) {
    return C === 0 && Zr.indexOf(_[t.length]) !== -1 || _.match(o) ? M : "." + n;
  };
  function g(M, C, _, I) {
    I === void 0 && (I = "&");
    var N = M.replace(Lr, ""), D = C && _ ? _ + " " + C + " { " + N + " }" : N;
    return n = I, t = C, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), u(_ || !C ? "" : C, D);
  }
  return u.use([].concat(c, [function(M, C, _) {
    M === 2 && _.length && _[0].lastIndexOf(t) > 0 && (_[0] = _[0].replace(r, v));
  }, f, function(M) {
    if (M === -2) {
      var C = p;
      return p = [], C;
    }
  }])), g.hash = c.length ? c.reduce(function(M, C) {
    return C.name || Ee(15), De(M, C.name);
  }, 5381).toString() : "", g;
}
var An = Ne.createContext();
An.Consumer;
var Pn = Ne.createContext(), Yr = (Pn.Consumer, new ct()), Ct = Wr();
function Tn() {
  return Re(An) || Yr;
}
function Rn() {
  return Re(Pn) || Ct;
}
var Dn = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ct);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ee(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ct), this.name + n.hash;
  }, e;
}(), zr = /([A-Z])/, Hr = /([A-Z])/g, Br = /^ms-/, jr = function(e) {
  return "-" + e.toLowerCase();
};
function tn(e) {
  return zr.test(e) ? e.replace(Hr, jr).replace(Br, "-ms-") : e;
}
var nn = function(e) {
  return e == null || e === !1 || e === "";
};
function Le(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, a = e.length; i < a; i += 1)
      (o = Le(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (nn(e))
    return "";
  if (Wt(e))
    return "." + e.styledComponentId;
  if (We(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !n)
      return e;
    var l = e(n);
    return process.env.NODE_ENV !== "production" && Ze.isElement(l) && console.warn(xt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Le(l, n, t, r);
  }
  var c;
  return e instanceof Dn ? t ? (e.inject(t, r), e.getName(r)) : e : wt(e) ? function u(p, f) {
    var v, g, M = [];
    for (var C in p)
      p.hasOwnProperty(C) && !nn(p[C]) && (Array.isArray(p[C]) && p[C].isCss || We(p[C]) ? M.push(tn(C) + ":", p[C], ";") : wt(p[C]) ? M.push.apply(M, u(p[C], C)) : M.push(tn(C) + ": " + (v = C, (g = p[C]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || v in ar ? String(g).trim() : g + "px") + ";"));
    return f ? [f + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var rn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function zt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return We(e) || wt(e) ? rn(Le(Kt(it, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : rn(Le(Kt(e, t)));
}
var on = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), In = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (on.test(s))
          o = !1, nt.delete(t);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          r.apply(void 0, [s].concat(a));
        }
      }, ve(), o && !nt.has(t) && (console.warn(t), nt.add(t));
    } catch (s) {
      on.test(s.message) && nt.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Nn = function(e, n, t) {
  return t === void 0 && (t = Ae), e.theme !== t.theme && e.theme || n || t.theme;
}, Fr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vr = /(^-|-$)/g;
function pt(e) {
  return e.replace(Fr, "-").replace(Vr, "");
}
var Ht = function(e) {
  return bt(_n(e) >>> 0);
};
function rt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var St = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Gr = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ur(e, n, t) {
  var r = e[t];
  St(n) && St(r) ? Ln(r, n) : e[t] = n;
}
function Ln(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (St(i))
      for (var a in i)
        Gr(a) && Ur(e, i[a], a);
  }
  return e;
}
var ze = Ne.createContext();
ze.Consumer;
function Xr(e) {
  var n = Re(ze), t = $e(function() {
    return function(r, o) {
      if (!r)
        return Ee(14);
      if (We(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ee(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Ee(8) : o ? xe({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? Ne.createElement(ze.Provider, { value: t }, e.children) : null;
}
var mt = {};
function Zn(e, n, t) {
  var r = Wt(e), o = !rt(e), s = n.attrs, i = s === void 0 ? it : s, a = n.componentId, l = a === void 0 ? function(I, N) {
    var D = typeof I != "string" ? "sc" : pt(I);
    mt[D] = (mt[D] || 0) + 1;
    var h = D + "-" + Ht("5.3.8" + D + mt[D]);
    return N ? N + "-" + h : h;
  }(n.displayName, n.parentComponentId) : a, c = n.displayName, u = c === void 0 ? function(I) {
    return rt(I) ? "styled." + I : "Styled(" + xt(I) + ")";
  }(e) : c, p = n.displayName && n.componentId ? pt(n.displayName) + "-" + n.componentId : n.componentId || l, f = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = n.shouldForwardProp;
  r && e.shouldForwardProp && (v = n.shouldForwardProp ? function(I, N, D) {
    return e.shouldForwardProp(I, N, D) && n.shouldForwardProp(I, N, D);
  } : e.shouldForwardProp);
  var g, M = new Nr(t, p, r ? e.componentStyle : void 0), C = M.isStatic && i.length === 0, _ = function(I, N) {
    return function(D, h, S, E) {
      var W = D.attrs, z = D.componentStyle, R = D.defaultProps, Q = D.foldedComponentIds, U = D.shouldForwardProp, A = D.styledComponentId, w = D.target;
      process.env.NODE_ENV !== "production" && Ft(A);
      var m = function(P, d, F) {
        P === void 0 && (P = Ae);
        var x = xe({}, d, { theme: P }), J = {};
        return F.forEach(function(V) {
          var q, y, se, ce = V;
          for (q in We(ce) && (ce = ce(x)), ce)
            x[q] = J[q] = q === "className" ? (y = J[q], se = ce[q], y && se ? y + " " + se : y || se) : ce[q];
        }), [x, J];
      }(Nn(h, Re(ze), R) || Ae, h, W), L = m[0], b = m[1], Z = function(P, d, F, x) {
        var J = Tn(), V = Rn(), q = d ? P.generateAndInjectStyles(Ae, J, V) : P.generateAndInjectStyles(F, J, V);
        return process.env.NODE_ENV !== "production" && Ft(q), process.env.NODE_ENV !== "production" && !d && x && x(q), q;
      }(z, E, L, process.env.NODE_ENV !== "production" ? D.warnTooManyClasses : void 0), H = S, X = b.$as || h.$as || b.as || h.as || w, ee = rt(X), $ = b !== h ? xe({}, h, {}, b) : h, k = {};
      for (var O in $)
        O[0] !== "$" && O !== "as" && (O === "forwardedAs" ? k.as = $[O] : (U ? U(O, Ut, X) : !ee || Ut(O)) && (k[O] = $[O]));
      return h.style && b.style !== h.style && (k.style = xe({}, h.style, {}, b.style)), k.className = Array.prototype.concat(Q, A, Z !== A ? Z : null, h.className, b.className).filter(Boolean).join(" "), k.ref = H, tr(X, k);
    }(g, I, N, C);
  };
  return _.displayName = u, (g = Ne.forwardRef(_)).attrs = f, g.componentStyle = M, g.displayName = u, g.shouldForwardProp = v, g.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : it, g.styledComponentId = p, g.target = r ? e.target : e, g.withComponent = function(I) {
    var N = n.componentId, D = function(S, E) {
      if (S == null)
        return {};
      var W, z, R = {}, Q = Object.keys(S);
      for (z = 0; z < Q.length; z++)
        W = Q[z], E.indexOf(W) >= 0 || (R[W] = S[W]);
      return R;
    }(n, ["componentId"]), h = N && N + "-" + (rt(I) ? I : pt(xt(I)));
    return Zn(I, xe({}, D, { attrs: f, componentId: h }), t);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(I) {
    this._foldedDefaultProps = r ? Ln({}, e.defaultProps, I) : I;
  } }), process.env.NODE_ENV !== "production" && (In(u, p), g.warnTooManyClasses = function(I, N) {
    var D = {}, h = !1;
    return function(S) {
      if (!h && (D[S] = !0, Object.keys(D).length >= 200)) {
        var E = N ? ' with the id of "' + N + '"' : "";
        console.warn("Over 200 classes were generated for component " + I + E + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), h = !0, D = {};
      }
    };
  }(u, p)), g.toString = function() {
    return "." + g.styledComponentId;
  }, o && yr(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var $t = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Ae), !Ze.isValidElementType(r))
      return Ee(1, String(r));
    var s = function() {
      return t(r, o, zt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, xe({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, xe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Zn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  $t[e] = $t(e);
});
var Jr = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = On(t), ct.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(Le(this.rules, r, o, s).join(""), ""), a = this.componentId + t;
    o.insertRules(a, a, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && ct.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function qr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = zt.apply(void 0, [e].concat(t)), s = "sc-global-" + Ht(JSON.stringify(o)), i = new Jr(o, s);
  function a(c) {
    var u = Tn(), p = Rn(), f = Re(ze), v = ve(u.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ne.Children.count(c.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(g) {
      return typeof g == "string" && g.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.server && l(v, c, u, f, p), Sn(function() {
      if (!u.server)
        return l(v, c, u, f, p), function() {
          return i.removeStyles(v, u);
        };
    }, [v, c, u, f, p]), null;
  }
  function l(c, u, p, f, v) {
    if (i.isStatic)
      i.renderStyles(c, wr, p, v);
    else {
      var g = xe({}, u, { theme: Nn(u, f, a.defaultProps) });
      i.renderStyles(c, g, p, v);
    }
  }
  return process.env.NODE_ENV !== "production" && In(s), Ne.memo(a);
}
function Kr(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = zt.apply(void 0, [e].concat(t)).join(""), s = Ht(o);
  return new Dn(s, o);
}
var Bt = function() {
  return Re(ze);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Y = $t, Je = "reactSchedulerOutsideWrapper", Qr = qr`

  #${Je} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Je} *,
 #${Je} *:before,
 #${Je} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ae = {
  navHeight: "44px",
  colors: {
    black: "#1C222F",
    grey400: "#D2D2D2",
    grey600: "#777777",
    blue900: "#3B3C5F",
    blue100: "#F8F8FD",
    blue300: "#C9E5FF",
    blue400: "#0A11EB",
    blue200: "#E6F3FF",
    red400: "#EF4444",
    white: "#FFFFFF"
  }
}, Be = `
margin: 0;
padding: 0;
`, Wn = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
Y.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const de = 50, Me = 24, je = 16, Ie = 40, He = Ie + je + Me, Se = 84, ge = 56, Pe = 196, ke = 12, sn = 52, an = ae.colors.blue100, Te = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, be = 3, eo = 1.6, to = 4.5, kt = 12, no = "reactSchedulerCanvasHeaderWrapper", Yn = "reactSchedulerCanvasWrapper", jt = Je, ro = 4, zn = 48, Oe = 5, Hn = Me / 2 + 2, Bn = je / 2 + Me + 1, cn = 2, ln = 4, qe = 60, oo = "rgb(114,141,226)";
var lt = {}, so = {
  get exports() {
    return lt;
  },
  set exports(e) {
    lt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", l = "hour", c = "day", u = "week", p = "month", f = "quarter", v = "year", g = "date", M = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var w = ["th", "st", "nd", "rd"], m = A % 100;
      return "[" + A + (w[(m - 20) % 10] || w[m] || w[0]) + "]";
    } }, N = function(A, w, m) {
      var L = String(A);
      return !L || L.length >= w ? A : "" + Array(w + 1 - L.length).join(m) + A;
    }, D = { s: N, z: function(A) {
      var w = -A.utcOffset(), m = Math.abs(w), L = Math.floor(m / 60), b = m % 60;
      return (w <= 0 ? "+" : "-") + N(L, 2, "0") + ":" + N(b, 2, "0");
    }, m: function A(w, m) {
      if (w.date() < m.date())
        return -A(m, w);
      var L = 12 * (m.year() - w.year()) + (m.month() - w.month()), b = w.clone().add(L, p), Z = m - b < 0, H = w.clone().add(L + (Z ? -1 : 1), p);
      return +(-(L + (m - b) / (Z ? b - H : H - b)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: p, y: v, w: u, d: c, D: g, h: l, m: a, s: i, ms: s, Q: f }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, h = "en", S = {};
    S[h] = I;
    var E = function(A) {
      return A instanceof Q;
    }, W = function A(w, m, L) {
      var b;
      if (!w)
        return h;
      if (typeof w == "string") {
        var Z = w.toLowerCase();
        S[Z] && (b = Z), m && (S[Z] = m, b = Z);
        var H = w.split("-");
        if (!b && H.length > 1)
          return A(H[0]);
      } else {
        var X = w.name;
        S[X] = w, b = X;
      }
      return !L && b && (h = b), b || !L && h;
    }, z = function(A, w) {
      if (E(A))
        return A.clone();
      var m = typeof w == "object" ? w : {};
      return m.date = A, m.args = arguments, new Q(m);
    }, R = D;
    R.l = W, R.i = E, R.w = function(A, w) {
      return z(A, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
    };
    var Q = function() {
      function A(m) {
        this.$L = W(m.locale, null, !0), this.parse(m);
      }
      var w = A.prototype;
      return w.parse = function(m) {
        this.$d = function(L) {
          var b = L.date, Z = L.utc;
          if (b === null)
            return new Date(NaN);
          if (R.u(b))
            return new Date();
          if (b instanceof Date)
            return new Date(b);
          if (typeof b == "string" && !/Z$/i.test(b)) {
            var H = b.match(C);
            if (H) {
              var X = H[2] - 1 || 0, ee = (H[7] || "0").substring(0, 3);
              return Z ? new Date(Date.UTC(H[1], X, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee)) : new Date(H[1], X, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee);
            }
          }
          return new Date(b);
        }(m), this.$x = m.x || {}, this.init();
      }, w.init = function() {
        var m = this.$d;
        this.$y = m.getFullYear(), this.$M = m.getMonth(), this.$D = m.getDate(), this.$W = m.getDay(), this.$H = m.getHours(), this.$m = m.getMinutes(), this.$s = m.getSeconds(), this.$ms = m.getMilliseconds();
      }, w.$utils = function() {
        return R;
      }, w.isValid = function() {
        return this.$d.toString() !== M;
      }, w.isSame = function(m, L) {
        var b = z(m);
        return this.startOf(L) <= b && b <= this.endOf(L);
      }, w.isAfter = function(m, L) {
        return z(m) < this.startOf(L);
      }, w.isBefore = function(m, L) {
        return this.endOf(L) < z(m);
      }, w.$g = function(m, L, b) {
        return R.u(m) ? this[L] : this.set(b, m);
      }, w.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, w.valueOf = function() {
        return this.$d.getTime();
      }, w.startOf = function(m, L) {
        var b = this, Z = !!R.u(L) || L, H = R.p(m), X = function(x, J) {
          var V = R.w(b.$u ? Date.UTC(b.$y, J, x) : new Date(b.$y, J, x), b);
          return Z ? V : V.endOf(c);
        }, ee = function(x, J) {
          return R.w(b.toDate()[x].apply(b.toDate("s"), (Z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), b);
        }, $ = this.$W, k = this.$M, O = this.$D, P = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case v:
            return Z ? X(1, 0) : X(31, 11);
          case p:
            return Z ? X(1, k) : X(0, k + 1);
          case u:
            var d = this.$locale().weekStart || 0, F = ($ < d ? $ + 7 : $) - d;
            return X(Z ? O - F : O + (6 - F), k);
          case c:
          case g:
            return ee(P + "Hours", 0);
          case l:
            return ee(P + "Minutes", 1);
          case a:
            return ee(P + "Seconds", 2);
          case i:
            return ee(P + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, w.endOf = function(m) {
        return this.startOf(m, !1);
      }, w.$set = function(m, L) {
        var b, Z = R.p(m), H = "set" + (this.$u ? "UTC" : ""), X = (b = {}, b[c] = H + "Date", b[g] = H + "Date", b[p] = H + "Month", b[v] = H + "FullYear", b[l] = H + "Hours", b[a] = H + "Minutes", b[i] = H + "Seconds", b[s] = H + "Milliseconds", b)[Z], ee = Z === c ? this.$D + (L - this.$W) : L;
        if (Z === p || Z === v) {
          var $ = this.clone().set(g, 1);
          $.$d[X](ee), $.init(), this.$d = $.set(g, Math.min(this.$D, $.daysInMonth())).$d;
        } else
          X && this.$d[X](ee);
        return this.init(), this;
      }, w.set = function(m, L) {
        return this.clone().$set(m, L);
      }, w.get = function(m) {
        return this[R.p(m)]();
      }, w.add = function(m, L) {
        var b, Z = this;
        m = Number(m);
        var H = R.p(L), X = function(k) {
          var O = z(Z);
          return R.w(O.date(O.date() + Math.round(k * m)), Z);
        };
        if (H === p)
          return this.set(p, this.$M + m);
        if (H === v)
          return this.set(v, this.$y + m);
        if (H === c)
          return X(1);
        if (H === u)
          return X(7);
        var ee = (b = {}, b[a] = r, b[l] = o, b[i] = t, b)[H] || 1, $ = this.$d.getTime() + m * ee;
        return R.w($, this);
      }, w.subtract = function(m, L) {
        return this.add(-1 * m, L);
      }, w.format = function(m) {
        var L = this, b = this.$locale();
        if (!this.isValid())
          return b.invalidDate || M;
        var Z = m || "YYYY-MM-DDTHH:mm:ssZ", H = R.z(this), X = this.$H, ee = this.$m, $ = this.$M, k = b.weekdays, O = b.months, P = function(J, V, q, y) {
          return J && (J[V] || J(L, Z)) || q[V].slice(0, y);
        }, d = function(J) {
          return R.s(X % 12 || 12, J, "0");
        }, F = b.meridiem || function(J, V, q) {
          var y = J < 12 ? "AM" : "PM";
          return q ? y.toLowerCase() : y;
        }, x = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: $ + 1, MM: R.s($ + 1, 2, "0"), MMM: P(b.monthsShort, $, O, 3), MMMM: P(O, $), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: P(b.weekdaysMin, this.$W, k, 2), ddd: P(b.weekdaysShort, this.$W, k, 3), dddd: k[this.$W], H: String(X), HH: R.s(X, 2, "0"), h: d(1), hh: d(2), a: F(X, ee, !0), A: F(X, ee, !1), m: String(ee), mm: R.s(ee, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: H };
        return Z.replace(_, function(J, V) {
          return V || x[J] || H.replace(":", "");
        });
      }, w.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, w.diff = function(m, L, b) {
        var Z, H = R.p(L), X = z(m), ee = (X.utcOffset() - this.utcOffset()) * r, $ = this - X, k = R.m(this, X);
        return k = (Z = {}, Z[v] = k / 12, Z[p] = k, Z[f] = k / 3, Z[u] = ($ - ee) / 6048e5, Z[c] = ($ - ee) / 864e5, Z[l] = $ / o, Z[a] = $ / r, Z[i] = $ / t, Z)[H] || $, b ? k : R.a(k);
      }, w.daysInMonth = function() {
        return this.endOf(p).$D;
      }, w.$locale = function() {
        return S[this.$L];
      }, w.locale = function(m, L) {
        if (!m)
          return this.$L;
        var b = this.clone(), Z = W(m, L, !0);
        return Z && (b.$L = Z), b;
      }, w.clone = function() {
        return R.w(this.$d, this);
      }, w.toDate = function() {
        return new Date(this.valueOf());
      }, w.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, w.toISOString = function() {
        return this.$d.toISOString();
      }, w.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), U = Q.prototype;
    return z.prototype = U, [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", p], ["$y", v], ["$D", g]].forEach(function(A) {
      U[A[1]] = function(w) {
        return this.$g(w, A[0], A[1]);
      };
    }), z.extend = function(A, w) {
      return A.$i || (A(w, Q, z), A.$i = !0), z;
    }, z.locale = W, z.isDayjs = E, z.unix = function(A) {
      return z(1e3 * A);
    }, z.en = S[h], z.Ls = S, z.p = {}, z;
  });
})(so);
const j = lt, un = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, jn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, Fn = (e, n) => j(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), Vn = (e) => ({
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: jn(e),
  isCurrentDay: e.isSame(j(), "day"),
  year: parseInt(e.format("YYYY"))
}), Gn = (e, n, t, r, o, s) => {
  e.strokeStyle = ae.colors.grey400, s ? e.fillStyle = ae.colors.blue200 : o ? e.fillStyle = "transparent" : e.fillStyle = ae.colors.blue100, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, ge), e.strokeRect(n + 0.5, t + 0.5, r, ge);
}, io = (e, n, t, r) => {
  for (let o = 0; o < n; o++)
    for (let s = 0; s <= t; s++) {
      const i = j(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        s,
        "days"
      ), a = i.isSame(j(), "day");
      Gn(e, s * de, o * ge, de, jn(i), a);
    }
}, ao = (e, n, t) => {
  e.setLineDash([5, 5]), e.strokeStyle = ae.colors.grey400, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, co = (e, n, t, r) => {
  let o = 0, s = -(r.dayOfMonth - 1) * ke;
  for (let i = 0; i <= t; i++) {
    const l = j(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      i,
      "weeks"
    ).isSame(j(), "week");
    for (let c = 0; c < n; c++)
      Gn(e, o, c * ge, Se, !0, l);
    o += Se;
  }
  for (let i = 0; i < t; i++) {
    const a = Fn(r, i) * ke;
    ao(e, s, n * ge), s += a;
  }
}, lo = (e, n, t, r, o) => {
  e.clearRect(0, 0, e.canvas.width, e.canvas.height), document.getElementById(Yn) && (n === 1 ? io(e, t, r, o) : co(e, t, r, o));
};
var Et = {}, uo = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = "week", r = "year";
    return function(o, s, i) {
      var a = s.prototype;
      a.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = i(this).startOf(r).add(1, r).date(c), p = i(this).endOf(t);
          if (u.isBefore(p))
            return 1;
        }
        var f = i(this).startOf(r).date(c).startOf(t).subtract(1, "millisecond"), v = this.diff(f, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, a.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(uo);
const ho = Et;
var Mt = {}, fo = {
  get exports() {
    return Mt;
  },
  set exports(e) {
    Mt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(fo);
const po = Mt;
var _t = {}, mo = {
  get exports() {
    return _t;
  },
  set exports(e) {
    _t = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = "day";
    return function(r, o, s) {
      var i = function(c) {
        return c.add(4 - c.isoWeekday(), t);
      }, a = o.prototype;
      a.isoWeekYear = function() {
        return i(this).year();
      }, a.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), t);
        var u, p, f, v, g = i(this), M = (u = this.isoWeekYear(), p = this.$u, f = (p ? s.utc : s)().year(u).startOf("year"), v = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (v += 7), f.add(v, t));
        return g.diff(M, "week") + 1;
      }, a.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var l = a.startOf;
      a.startOf = function(c, u) {
        var p = this.$utils(), f = !!p.u(u) || u;
        return p.p(c) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, u);
      };
    };
  });
})(mo);
const vo = _t;
var Ot = {}, yo = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, a, l) {
        var c = o(s), u = o(i), p = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (p ? this.isAfter(c, a) : !this.isBefore(c, a)) && (f ? this.isBefore(u, a) : !this.isAfter(u, a)) || (p ? this.isBefore(c, a) : !this.isAfter(c, a)) && (f ? this.isAfter(u, a) : !this.isBefore(u, a));
      };
    };
  });
})(yo);
const go = Ot;
var At = {}, wo = {
  get exports() {
    return At;
  },
  set exports(e) {
    At = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, u = 2592e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: c, months: u, days: a, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(h) {
      return h instanceof D;
    }, g = function(h, S, E) {
      return new D(h, E, S.$l);
    }, M = function(h) {
      return r.p(h) + "s";
    }, C = function(h) {
      return h < 0;
    }, _ = function(h) {
      return C(h) ? Math.ceil(h) : Math.floor(h);
    }, I = function(h) {
      return Math.abs(h);
    }, N = function(h, S) {
      return h ? C(h) ? { negative: !0, format: "" + I(h) + S } : { negative: !1, format: "" + h + S } : { negative: !1, format: "" };
    }, D = function() {
      function h(E, W, z) {
        var R = this;
        if (this.$d = {}, this.$l = z, E === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), W)
          return g(E * f[M(W)], this);
        if (typeof E == "number")
          return this.$ms = E, this.parseFromMilliseconds(), this;
        if (typeof E == "object")
          return Object.keys(E).forEach(function(A) {
            R.$d[M(A)] = E[A];
          }), this.calMilliseconds(), this;
        if (typeof E == "string") {
          var Q = E.match(p);
          if (Q) {
            var U = Q.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = U[0], this.$d.months = U[1], this.$d.weeks = U[2], this.$d.days = U[3], this.$d.hours = U[4], this.$d.minutes = U[5], this.$d.seconds = U[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var S = h.prototype;
      return S.calMilliseconds = function() {
        var E = this;
        this.$ms = Object.keys(this.$d).reduce(function(W, z) {
          return W + (E.$d[z] || 0) * f[z];
        }, 0);
      }, S.parseFromMilliseconds = function() {
        var E = this.$ms;
        this.$d.years = _(E / c), E %= c, this.$d.months = _(E / u), E %= u, this.$d.days = _(E / a), E %= a, this.$d.hours = _(E / i), E %= i, this.$d.minutes = _(E / s), E %= s, this.$d.seconds = _(E / o), E %= o, this.$d.milliseconds = E;
      }, S.toISOString = function() {
        var E = N(this.$d.years, "Y"), W = N(this.$d.months, "M"), z = +this.$d.days || 0;
        this.$d.weeks && (z += 7 * this.$d.weeks);
        var R = N(z, "D"), Q = N(this.$d.hours, "H"), U = N(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3);
        var w = N(A, "S"), m = E.negative || W.negative || R.negative || Q.negative || U.negative || w.negative, L = Q.format || U.format || w.format ? "T" : "", b = (m ? "-" : "") + "P" + E.format + W.format + R.format + L + Q.format + U.format + w.format;
        return b === "P" || b === "-P" ? "P0D" : b;
      }, S.toJSON = function() {
        return this.toISOString();
      }, S.format = function(E) {
        var W = E || "YYYY-MM-DDTHH:mm:ss", z = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return W.replace(l, function(R, Q) {
          return Q || String(z[R]);
        });
      }, S.as = function(E) {
        return this.$ms / f[M(E)];
      }, S.get = function(E) {
        var W = this.$ms, z = M(E);
        return z === "milliseconds" ? W %= 1e3 : W = z === "weeks" ? _(W / f[z]) : this.$d[z], W === 0 ? 0 : W;
      }, S.add = function(E, W, z) {
        var R;
        return R = W ? E * f[M(W)] : v(E) ? E.$ms : g(E, this).$ms, g(this.$ms + R * (z ? -1 : 1), this);
      }, S.subtract = function(E, W) {
        return this.add(E, W, !0);
      }, S.locale = function(E) {
        var W = this.clone();
        return W.$l = E, W;
      }, S.clone = function() {
        return g(this.$ms, this);
      }, S.humanize = function(E) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!E);
      }, S.milliseconds = function() {
        return this.get("milliseconds");
      }, S.asMilliseconds = function() {
        return this.as("milliseconds");
      }, S.seconds = function() {
        return this.get("seconds");
      }, S.asSeconds = function() {
        return this.as("seconds");
      }, S.minutes = function() {
        return this.get("minutes");
      }, S.asMinutes = function() {
        return this.as("minutes");
      }, S.hours = function() {
        return this.get("hours");
      }, S.asHours = function() {
        return this.as("hours");
      }, S.days = function() {
        return this.get("days");
      }, S.asDays = function() {
        return this.as("days");
      }, S.weeks = function() {
        return this.get("weeks");
      }, S.asWeeks = function() {
        return this.as("weeks");
      }, S.months = function() {
        return this.get("months");
      }, S.asMonths = function() {
        return this.as("months");
      }, S.years = function() {
        return this.get("years");
      }, S.asYears = function() {
        return this.as("years");
      }, h;
    }();
    return function(h, S, E) {
      t = E, r = E().$utils(), E.duration = function(R, Q) {
        var U = E.locale();
        return g(R, { $l: U }, Q);
      }, E.isDuration = v;
      var W = S.prototype.add, z = S.prototype.subtract;
      S.prototype.add = function(R, Q) {
        return v(R) && (R = R.asMilliseconds()), W.bind(this)(R, Q);
      }, S.prototype.subtract = function(R, Q) {
        return v(R) && (R = R.asMilliseconds()), z.bind(this)(R, Q);
      };
    };
  });
})(wo);
const xo = At;
var bo = "Expected a function", dn = 0 / 0, Co = "[object Symbol]", So = /^\s+|\s+$/g, $o = /^[-+]0x[0-9a-f]+$/i, ko = /^0b[01]+$/i, Eo = /^0o[0-7]+$/i, Mo = parseInt, _o = typeof ye == "object" && ye && ye.Object === Object && ye, Oo = typeof self == "object" && self && self.Object === Object && self, Ao = _o || Oo || Function("return this")(), Po = Object.prototype, To = Po.toString, Ro = Math.max, Do = Math.min, vt = function() {
  return Ao.Date.now();
};
function Io(e, n, t) {
  var r, o, s, i, a, l, c = 0, u = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(bo);
  n = hn(n) || 0, Pt(t) && (u = !!t.leading, p = "maxWait" in t, s = p ? Ro(hn(t.maxWait) || 0, n) : s, f = "trailing" in t ? !!t.trailing : f);
  function v(S) {
    var E = r, W = o;
    return r = o = void 0, c = S, i = e.apply(W, E), i;
  }
  function g(S) {
    return c = S, a = setTimeout(_, n), u ? v(S) : i;
  }
  function M(S) {
    var E = S - l, W = S - c, z = n - E;
    return p ? Do(z, s - W) : z;
  }
  function C(S) {
    var E = S - l, W = S - c;
    return l === void 0 || E >= n || E < 0 || p && W >= s;
  }
  function _() {
    var S = vt();
    if (C(S))
      return I(S);
    a = setTimeout(_, M(S));
  }
  function I(S) {
    return a = void 0, f && r ? v(S) : (r = o = void 0, i);
  }
  function N() {
    a !== void 0 && clearTimeout(a), c = 0, r = l = o = a = void 0;
  }
  function D() {
    return a === void 0 ? i : I(vt());
  }
  function h() {
    var S = vt(), E = C(S);
    if (r = arguments, o = this, l = S, E) {
      if (a === void 0)
        return g(l);
      if (p)
        return a = setTimeout(_, n), v(l);
    }
    return a === void 0 && (a = setTimeout(_, n)), i;
  }
  return h.cancel = N, h.flush = D, h;
}
function Pt(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function No(e) {
  return !!e && typeof e == "object";
}
function Lo(e) {
  return typeof e == "symbol" || No(e) && To.call(e) == Co;
}
function hn(e) {
  if (typeof e == "number")
    return e;
  if (Lo(e))
    return dn;
  if (Pt(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pt(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(So, "");
  var t = ko.test(e);
  return t || Eo.test(e) ? Mo(e.slice(2), t ? 2 : 8) : $o.test(e) ? dn : +e;
}
var Tt = Io;
const st = [0, 1], Zo = (e) => st.includes(e), dt = (e, n) => {
  const t = n === 0 ? Math.ceil(window.innerWidth / Se) * 3 : Math.ceil(window.innerWidth / de) * 3, r = n === 0 ? e.subtract(t / 3 + 3, "weeks").set("day", 1) : e.subtract(t / 3 + 3, "days"), o = n === 0 ? r.add(t, "weeks") : r.add(t, "days");
  return {
    startDate: r,
    endDate: o
  };
}, Wo = (e, n) => {
  const t = dt(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, yt = (e) => e === 0 ? Math.ceil(window.innerWidth / Se) * be : Math.ceil(window.innerWidth / de) * be, Un = $n({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: j(),
  isLoading: !1,
  cols: 0,
  startDate: {
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
j.extend(ho);
j.extend(po);
j.extend(vo);
j.extend(go);
j.extend(xo);
const Yo = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = j(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: a
}) => {
  const { zoom: l, maxRecordsPerPage: c = 50 } = r, [u, p] = pe(l), [f, v] = pe(j()), [g, M] = pe(!1), [C, _] = pe(yt(u)), I = st[u] !== st[st.length - 1], N = u !== 0, D = $e(() => Wo(f, u), [f, u]), h = dt(f, u).startDate, S = j(h).dayOfYear(), E = Vn(h), W = ve(null), [z, R] = pe([{ x: 0, y: 0 }]), Q = 2, U = me(
    (P, d = "smooth") => {
      var F, x, J, V;
      switch (P) {
        case "back":
          return (F = W.current) == null ? void 0 : F.scrollTo({
            behavior: d,
            left: u === 0 ? Se * be : de * be
          });
        case "forward":
          return (x = W.current) == null ? void 0 : x.scrollTo({
            behavior: d,
            left: u === 0 ? window.innerWidth + (C / be - be + Q) * Se : window.innerWidth + (C / be - be + Q) * de
          });
        case "middle":
          return (J = W.current) == null ? void 0 : J.scrollTo({
            behavior: d,
            left: window.innerWidth
          });
        default:
          return (V = W.current) == null ? void 0 : V.scrollTo({
            behavior: d,
            left: window.innerWidth
          });
      }
    },
    [C, u]
  ), A = (P) => {
    R(P);
  }, w = me(
    (P) => {
      Tt(() => {
        switch (P) {
          case "back":
            v((F) => F.subtract(ln, "weeks"));
            break;
          case "forward":
            v((F) => F.add(ln, "weeks"));
            break;
          case "middle":
            v(j());
            break;
        }
        s == null || s(D);
      }, 300)();
    },
    [s, D]
  );
  fe(() => {
    W.current = document.getElementById(jt);
  }, []), fe(() => {
    const P = () => _(yt(u));
    return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
  }, [u]), fe(() => {
    s == null || s(D);
  }, [s, D]), fe(() => {
    M(!1);
  }, [o]), fe(() => {
    g || (U("middle", "auto"), M(!0), v(o));
  }, [o, g, U]);
  const m = () => {
    t || (v((P) => P.add(cn, "weeks")), s == null || s(D));
  }, L = me(() => {
    t || (w("forward"), U("forward"));
  }, [t, w, U]), b = () => {
    t || (v((P) => P.subtract(cn, "weeks")), s == null || s(D));
  }, Z = me(() => {
    !g || t || (w("back"), U("back"));
  }, [g, t, w, U]), H = me(() => {
    t || (w("middle"), U("middle"));
  }, [t, w, U]), X = () => $(u + 1), ee = () => $(u - 1), $ = (P) => {
    Zo(P) && (p(P), _(yt(P)), s == null || s(D));
  }, k = () => i == null ? void 0 : i(), { Provider: O } = Un;
  return /* @__PURE__ */ T(
    O,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: m,
        handleScrollNext: L,
        handleGoPrev: b,
        handleScrollPrev: Z,
        handleGoToday: H,
        zoomIn: X,
        zoomOut: ee,
        zoom: u,
        isNextZoom: I,
        isPrevZoom: N,
        date: f,
        isLoading: t,
        cols: C,
        startDate: E,
        dayOfYear: S,
        handleFilterData: k,
        tilesCoords: z,
        updateTilesCoords: A,
        recordsThreshold: c,
        onClearFilterData: a
      },
      children: n
    }
  );
}, Fe = () => Re(Un), Xn = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, zo = Y.div`
  height: calc(100vh - headerHeight);
`, Ho = Y.div`
  position: relative;
`, Bo = Y.canvas``;
Y.canvas``;
const fn = Y.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, jo = nr(function({ zoom: n, rows: t, data: r, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: a, date: l, isLoading: c, cols: u, startDate: p } = Fe(), f = ve(null), v = ve(null), g = ve(null), M = me(
    (C) => {
      const _ = window.innerWidth * be, I = t * ge + 1;
      Xn(C, _, I), lo(C, n, t, u, p);
    },
    [u, p, t, n]
  );
  return fe(() => {
    if (!f.current)
      return;
    const C = f.current.getContext("2d");
    if (!C)
      return;
    const _ = () => M(C);
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [M]), fe(() => {
    const C = f.current;
    if (!C)
      return;
    C.style.letterSpacing = "1px";
    const _ = C.getContext("2d");
    _ && M(_);
  }, [l, t, n, M]), fe(() => {
    if (!v.current)
      return;
    const C = new IntersectionObserver(
      (_) => _[0].isIntersecting ? i() : null
    );
    return C.observe(v.current), () => C.disconnect();
  }, [i]), fe(() => {
    if (!g.current)
      return;
    const C = new IntersectionObserver(
      (_) => _[0].isIntersecting ? a() : null,
      { rootMargin: `0px 0px 0px -${Pe}px` }
    );
    return C.observe(g.current), () => C.disconnect();
  }, [a]), /* @__PURE__ */ T(zo, { id: Yn, children: /* @__PURE__ */ oe(Ho, { ref: s, children: [
    /* @__PURE__ */ T(fn, { position: "left", ref: g }),
    /* @__PURE__ */ T(gn, { isLoading: c, position: "left" }),
    /* @__PURE__ */ T(Bo, { ref: f }),
    /* @__PURE__ */ T(Ci, { data: r, zoom: n, onTileClick: o }),
    /* @__PURE__ */ T(fn, { ref: v, position: "right" }),
    /* @__PURE__ */ T(gn, { isLoading: c, position: "right" })
  ] }) });
}), ut = (e) => {
  const n = j.duration(e, "seconds"), t = n.days() * 24 + n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, Jn = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / qe);
    t += o.hours + s, r += n % qe, r >= qe && (t++, r -= qe);
  }), { hours: t, minutes: r };
}, qn = (e, n) => {
  const t = () => {
    let o = n.hours - e.hours, s = n.minutes - e.minutes;
    return s === qe && (o++, s = 0), { hours: Math.max(0, o), minutes: o < 0 ? 0 : s };
  }, r = () => {
    const o = e.hours - n.hours, s = e.minutes - n.minutes;
    return { hours: Math.max(0, o), minutes: o < 0 ? 0 : s };
  };
  return {
    free: t(),
    overtime: r()
  };
}, Fo = (e, n, t) => {
  const r = t.isoWeek(), o = e.map((p) => {
    const f = j(p.startDate).isoWeek(), v = j(p.startDate).isoWeekday(), g = j(p.endDate).isoWeek(), M = j(p.endDate).isoWeekday(), { hours: C, minutes: _ } = ut(p.occupancy);
    if (r === f) {
      const I = (Oe + 1 - v) * C, N = (Oe + 1 - v) * _;
      return { hours: Math.max(0, I), minutes: N };
    } else if (r === g) {
      const I = M > Oe ? Oe * C : M * C, N = M > Oe ? Oe * _ : M * _;
      return { hours: I, minutes: N };
    } else if (j(t).isBetween(p.startDate, p.endDate))
      return { hours: Oe * C, minutes: Oe * _ };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Jn(o), { hours: a, minutes: l } = ut(n), { free: c, overtime: u } = qn(
    { hours: s, minutes: i },
    { hours: a, minutes: l }
  );
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: u
  };
}, Vo = (e, n, t, r) => {
  const o = t.isoWeekday(), s = e.map((v) => {
    const { hours: g, minutes: M } = ut(v.occupancy);
    return o <= (r ? 7 : 5) ? { hours: g, minutes: M } : { hours: 0, minutes: 0 };
  }), i = (v) => o <= (r ? 7 : 5) ? ut(
    r ? v / 7 : v / 5
  ) : { hours: 0, minutes: 0 }, { hours: a, minutes: l } = Jn(s), { hours: c, minutes: u } = i(n), { free: p, overtime: f } = qn(
    { hours: a, minutes: l },
    { hours: c, minutes: u }
  );
  return {
    taken: { hours: Math.max(0, a), minutes: Math.max(0, l) },
    free: p,
    overtime: f
  };
}, Go = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.label.maxOccupancy, i = e.data.flat(2).filter((a) => r === 0 ? j(a.startDate).isBetween(
    j(t),
    j(t).add(6, "days"),
    "day",
    "[]"
  ) || j(t).isBetween(j(a.startDate), j(a.endDate), "day", "[]") : j(t).isBetween(a.startDate, a.endDate, "day", "[]"));
  return r === 0 ? Fo(i, s, t) : Vo(i, s, t, o);
}, Uo = (e, n, t, r, o, s = !1) => {
  const i = o === 0 ? Se : de, a = Math.ceil(n.x / i), l = j(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
    a - 1,
    o === 0 ? "weeks" : "days"
  ), c = Math.ceil(n.y / ge), u = t.findIndex((g, M, C) => C.slice(0, M + 1).reduce((I, N) => I + N, 0) >= c), p = a * i, f = (c - 1) * ge + ge, v = Go(
    r[u],
    u,
    l,
    o,
    s
  );
  return { coords: { x: p, y: f }, resourceIndex: u, disposition: v };
}, Xo = (e, n, t, r) => {
  const o = [];
  let s = 0, i = [], a = 0;
  return n.length > r ? (n.forEach((l, c) => {
    const u = {
      id: e[c].id,
      label: e[c].label,
      data: l
    };
    a >= r && (o.push(i), s += i.length, i = [], a = 0), a++, i.push(u);
  }), t.slice(s).length <= r && (i = [], n.slice(s).forEach((l, c) => {
    const u = {
      id: e[c + s].id,
      label: e[c + s].label,
      data: l
    };
    i.push(u), c === n.length - s - 1 && o.push(i);
  })), o) : (n.forEach((l, c) => {
    const u = {
      id: e[c].id,
      label: e[c].label,
      data: l
    };
    i.push(u);
  }), o.push(i), o);
}, Jo = (e, n) => {
  const t = [];
  for (const r of e) {
    let o = !1;
    if (t.length)
      for (const s of t) {
        let i = !1;
        for (let a = 0; a < s.length; a++) {
          if (j(r.startDate).isBetween(s[a].startDate, s[a].endDate, null, "[]") || j(r.endDate).isBetween(s[a].startDate, s[a].endDate, null, "[]")) {
            i = !0;
            break;
          }
          if (j(r.startDate).isBefore(n.startDate, "day") && j(r.endDate).isAfter(n.endDate, "day")) {
            i = !0;
            break;
          }
        }
        if (!i) {
          s.push(r), o = !0;
          break;
        }
      }
    o || t.push([r]);
  }
  return t;
}, qo = (e, n) => {
  const t = [[], []], [r, o] = e.reduce((s, i) => {
    const a = Jo(i.data, n);
    return s[0].push(a), s[1].push(Math.max(a.length, 1)), s;
  }, t);
  return { projectsPerPerson: r, rowsPerPerson: o };
}, Ko = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Qo = (e, n) => {
  const { recordsThreshold: t } = Fe(), [r, o] = pe(0), [s, i] = pe(0), a = ve(null);
  fe(() => {
    a.current = document.getElementById(jt);
  }, []);
  const { projectsPerPerson: l, rowsPerPerson: c } = $e(
    () => qo(e, n),
    [e, n]
  ), u = $e(
    () => Xo(e, l, c, t),
    [e, l, t, c]
  ), p = me(() => {
    u[s].length && a.current && (a.current.scroll({ top: 0 }), o((_) => _ + u[Math.max(s, 0)].length), i((_) => Math.min(_ + 1, u.length - 1)), window.scroll({ top: 0 }));
  }, [s, u]), f = me(() => {
    u[s].length && (o((_) => Math.max(_ - u[s - 1].length, 0)), i((_) => Math.max(_ - 1, 0)));
  }, [s, u]), v = me(() => {
    o(0), i(0);
  }, []), g = r + u[s].length, M = $e(
    () => c.slice(r, g),
    [g, c, r]
  ), C = $e(
    () => l.slice(r, g),
    [g, l, r]
  );
  return {
    page: u[s],
    currentPageNum: s,
    pagesAmount: u.length,
    projectsPerPerson: C,
    rowsPerItem: M,
    totalRowsPerPage: Ko(u[s]),
    next: p,
    previous: f,
    reset: v
  };
};
var Rt = {}, es = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(es);
const ts = Rt;
var Dt = {}, ns = {
  get exports() {
    return Dt;
  },
  set exports(e) {
    Dt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(lt);
  })(ye, function(t) {
    function r(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var o = r(t);
    function s(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function i(f, v, g) {
      var M = f + " ";
      switch (g) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return M + (s(f) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return M + (s(f) ? "godziny" : "godzin");
        case "MM":
          return M + (s(f) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(f) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, u = function(f, v) {
      return c.test(v) ? a[f.month()] : l[f.month()];
    };
    u.s = l, u.f = a;
    var p = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(p, null, !0), p;
  });
})(ns);
const rs = Dt, os = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, ss = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Qe = [
  {
    id: "en",
    name: "ENGLISH",
    lang: os,
    translateCode: "en-GB"
  },
  {
    id: "pl",
    name: "POLISH",
    lang: ss,
    translateCode: "pl-PL"
  }
], Kn = $n({
  locales: Qe,
  currentLocale: Qe[0],
  setCurrentLocale: () => {
  }
}), is = ({ children: e, lang: n }) => {
  const [t, r] = pe("en"), o = me(() => {
    const c = Qe.find((u) => u.id === t);
    return (c == null ? void 0 : c.id) === "en" ? j.locale({ ...ts }) : j.locale({ ...rs }), c || Qe[0];
  }, [t]), [s, i] = pe(o()), a = (c) => {
    localStorage.setItem("locale", c.translateCode), i(c);
  };
  fe(() => {
    const c = localStorage.getItem("locale"), u = n ?? c ?? "en";
    localStorage.setItem("locale", u), r(u), i(o());
  }, [o, n]);
  const { Provider: l } = Kn;
  return /* @__PURE__ */ T(l, { value: { currentLocale: s, locales: Qe, setCurrentLocale: a }, children: e });
}, Ve = () => Re(Kn).currentLocale.lang, as = (e) => /* @__PURE__ */ B.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ B.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ B.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ B.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ B.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ B.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ B.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ B.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ B.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), cs = Y.div`
  position: absolute;
  height: 440px;
  width: 514px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`, ls = Y.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
`, us = () => {
  const { feelingEmpty: e } = Ve();
  return /* @__PURE__ */ oe(cs, { children: [
    /* @__PURE__ */ T(as, {}),
    /* @__PURE__ */ T(ls, { children: e })
  ] });
}, ds = Y.div`
  position: relative;
  display: flex;
`, hs = Y.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, pn = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, fs = ({ data: e, onTileClick: n, onItemClick: t, topBarWidth: r }) => {
  const [o, s] = pe(pn), [i, a] = pe(e), [l, c] = pe(!1), [u, p] = pe(""), {
    zoom: f,
    startDate: v,
    date: g,
    config: { includeTakenHoursOnWeekendsInDayView: M }
  } = Fe(), C = ve(null), _ = $e(() => dt(g, f), [g, f]), {
    page: I,
    totalRowsPerPage: N,
    rowsPerItem: D,
    currentPageNum: h,
    pagesAmount: S,
    next: E,
    previous: W,
    reset: z
  } = Qo(i, _), R = ve(
    Tt(
      (w, m, L, b, Z) => {
        if (!C.current)
          return;
        const { left: H, top: X } = C.current.getBoundingClientRect(), ee = { x: w.clientX - H, y: w.clientY - X }, {
          coords: { x: $, y: k },
          resourceIndex: O,
          disposition: P
        } = Uo(
          m,
          ee,
          L,
          b,
          Z,
          M
        );
        s({ coords: { x: $, y: k }, resourceIndex: O, disposition: P }), c(!0);
      },
      300
    )
  ), Q = ve(
    Tt((w, m) => {
      z(), a(
        w.filter(
          (L) => L.label.title.toLowerCase().includes(m.toLowerCase())
        )
      );
    }, 500)
  ), U = (w) => {
    const m = w.target.value;
    p(m), Q.current.cancel(), Q.current(e, m);
  }, A = me(() => {
    R.current.cancel(), c(!1), s(pn);
  }, []);
  return fe(() => {
    const w = (L) => R.current(L, v, D, I, f), m = C.current;
    if (m)
      return m.addEventListener("mousemove", w), m.addEventListener("mouseleave", A), () => {
        m.removeEventListener("mousemove", w), m.removeEventListener("mouseleave", A);
      };
  }, [R, A, I, D, v, f]), fe(() => {
    u || a(e);
  }, [e, u]), /* @__PURE__ */ oe(ds, { children: [
    /* @__PURE__ */ T(
      Js,
      {
        data: I,
        pageNum: h,
        pagesAmount: S,
        rows: D,
        onLoadNext: E,
        onLoadPrevious: W,
        searchInputValue: u,
        onSearchInputChange: U,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ oe(hs, { children: [
      /* @__PURE__ */ T(hi, { zoom: f, topBarWidth: r }),
      e.length ? /* @__PURE__ */ T(
        jo,
        {
          data: I,
          zoom: f,
          rows: N,
          ref: C,
          onTileClick: n
        }
      ) : /* @__PURE__ */ T(us, {}),
      l && (o == null ? void 0 : o.resourceIndex) > -1 && /* @__PURE__ */ T(_i, { tooltipData: o, zoom: f })
    ] })
  ] });
}, Qn = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, ps = Y.div`
  width: calc(${({ width: e }) => e}px - ${Pe}px);
  position: sticky;
  top: 0;
  left: ${Pe}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, ms = Y.div`
  display: flex;
  gap: 1.875rem;
`, mn = Y.button`
  ${Qn};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  :not(:disabled) {
    cursor: pointer;
  }
`, vs = Y.button`
  ${Qn};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.blue900};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, ys = Y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`, gs = Y.div`
  display: flex;
`, ws = ({ width: e }) => {
  const { topbar: n } = Ve(), {
    data: t,
    config: r,
    handleGoNext: o,
    handleGoPrev: s,
    handleGoToday: i,
    zoomIn: a,
    zoomOut: l,
    isNextZoom: c,
    isPrevZoom: u,
    handleFilterData: p,
    onClearFilterData: f
  } = Fe(), { colors: v } = Bt(), { filterButtonState: g = -1 } = r, M = (C) => {
    C.stopPropagation(), f == null || f();
  };
  return /* @__PURE__ */ oe(ps, { width: e, children: [
    /* @__PURE__ */ T(gs, { children: g >= 0 && /* @__PURE__ */ oe(
      gt,
      {
        variant: g ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: p,
        children: [
          n.filters,
          !!g && /* @__PURE__ */ T("span", { onClick: M, children: /* @__PURE__ */ T(Ce, { iconName: "close", height: "16", width: "16" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ oe(ms, { children: [
      /* @__PURE__ */ oe(mn, { disabled: !(t != null && t.length), onClick: s, children: [
        /* @__PURE__ */ T(Ce, { iconName: "arrowLeft", height: "15", fill: "#3B3C5F" }),
        n.prev
      ] }),
      /* @__PURE__ */ T(vs, { onClick: i, children: n.today }),
      /* @__PURE__ */ oe(mn, { disabled: !(t != null && t.length), onClick: o, children: [
        n.next,
        /* @__PURE__ */ T(Ce, { iconName: "arrowRight", height: "15", fill: v.blue900 })
      ] })
    ] }),
    /* @__PURE__ */ oe(ys, { children: [
      n.view,
      /* @__PURE__ */ T(
        gt,
        {
          isDisabled: !u,
          onClick: l,
          isFullRounded: !0,
          iconName: "subtract",
          width: "14"
        }
      ),
      /* @__PURE__ */ T(
        gt,
        {
          isDisabled: !c,
          onClick: a,
          isFullRounded: !0,
          iconName: "add",
          width: "14"
        }
      )
    ] })
  ] });
}, xs = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), bs = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Cs = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), Ss = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), $s = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), ks = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Es = (e) => /* @__PURE__ */ B.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Ms = (e) => /* @__PURE__ */ B.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), _s = (e) => /* @__PURE__ */ B.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z", fill: "#0A11EB" })), Os = (e) => /* @__PURE__ */ B.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z", fill: "#0A11EB" })), As = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ps = (e) => /* @__PURE__ */ B.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z", fill: "white" })), Ts = {
  add: xs,
  subtract: bs,
  filter: Cs,
  arrowLeft: Ss,
  arrowRight: $s,
  defaultAvatar: ks,
  calendarWarning: Es,
  calendarFree: Ms,
  arrowDown: Os,
  arrowUp: _s,
  search: As,
  close: Ps
}, Ce = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = Bt(), i = Ts[e];
  return i ? /* @__PURE__ */ T(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.blue400,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, Rs = Y.button`
  outline: none;
  background: ${({ theme: e, variant: n }) => n === "filled" ? e.colors.blue400 : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid
    ${({ theme: e, disabled: n }) => n ? e.colors.grey600 : e.colors.blue400};
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: pointer;
  color: ${({ theme: e, variant: n }) => n === "filled" ? e.colors.white : e.colors.blue400};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
`, gt = ({
  iconName: e,
  width: n,
  height: t,
  fill: r,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: a,
  isDisabled: l,
  variant: c = "outlined"
}) => {
  const { colors: u } = Bt();
  return /* @__PURE__ */ oe(
    Rs,
    {
      onClick: s,
      isFullRounded: a,
      hasChildren: !!i,
      disabled: l,
      variant: c,
      children: [
        /* @__PURE__ */ T(
          Ce,
          {
            iconName: e,
            width: n,
            height: t,
            fill: l ? u.grey600 : r,
            className: o
          }
        ),
        i
      ]
    }
  );
}, Ds = Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: white;
`, Is = Y.div`
  position: relative;
`, Pi = ({
  data: e,
  config: n,
  startDate: t,
  onRangeChange: r,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: a,
  isLoading: l
}) => {
  var g;
  const c = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      ...n
    }),
    [n]
  ), u = ve(null), [p, f] = pe((g = u.current) == null ? void 0 : g.clientWidth), v = $e(() => j(t), [t]);
  return fe(() => {
    const M = () => {
      u.current && f(u.current.clientWidth);
    };
    return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, []), u.current, /* @__PURE__ */ oe(Nt, { children: [
    /* @__PURE__ */ T(Qr, {}),
    /* @__PURE__ */ T(Xr, { theme: ae, children: /* @__PURE__ */ T(is, { lang: c.lang, children: /* @__PURE__ */ T(
      Yo,
      {
        data: e,
        isLoading: !!l,
        config: c,
        onRangeChange: r,
        defaultStartDate: v,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ T(
          Ds,
          {
            showScroll: !!e.length,
            id: jt,
            ref: u,
            children: /* @__PURE__ */ T(Is, { children: /* @__PURE__ */ T(
              fs,
              {
                data: e,
                onTileClick: o,
                topBarWidth: p ?? 0,
                onItemClick: a
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, Ns = Y.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.grey400}` : "none"};
`, Ls = Y.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme: e }) => e.colors.white};
  border: 1px solid ${({ theme: e }) => e.colors.blue400};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.blue400};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, Zs = Y.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ws = Y.p`
  ${Be}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, vn = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: a } = Ve(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${a} ${o}/${s}`;
  return /* @__PURE__ */ T(Ns, { intent: e, children: /* @__PURE__ */ oe(Ls, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ T(Zs, { children: t }),
    /* @__PURE__ */ T(Ws, { children: l })
  ] }) });
}, Ys = Y.div`
  min-width: ${Pe + "px"};
  max-width: ${Pe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.white};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, zs = Y.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Pe}px;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, Hs = Y.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.grey600};
  }
`, Bs = Y.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.blue100};
  border: 1px solid
    ${({ theme: e, isFocused: n }) => n ? e.colors.blue400 : e.colors.grey400};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, js = Y.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ge}px;
  height: calc(${ge}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, Fs = Y.div`
  display: flex;
  align-items: center;
`, Vs = Y.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Gs = Y.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Us = Y.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, yn = Y.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e }) => e ? ae.colors.black : ae.colors.grey600};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Xs = ({ id: e, item: n, rows: t, onItemClick: r }) => /* @__PURE__ */ T(
  js,
  {
    title: n.title + " | " + n.subtitle,
    clickable: typeof r == "function",
    rows: t,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ oe(Fs, { children: [
      /* @__PURE__ */ T(Vs, { children: n.icon ? /* @__PURE__ */ T(Gs, { src: n.icon, alt: "Icon" }) : /* @__PURE__ */ T(Ce, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ oe(Us, { children: [
        /* @__PURE__ */ T(yn, { isMain: !0, children: n.title }),
        /* @__PURE__ */ T(yn, { children: n.subtitle })
      ] })
    ] })
  }
), Js = ({
  data: e,
  rows: n,
  onLoadNext: t,
  onLoadPrevious: r,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: a,
  onItemClick: l
}) => {
  const [c, u] = pe(!1), { search: p } = Ve(), f = () => u((v) => !v);
  return /* @__PURE__ */ oe(Ys, { children: [
    /* @__PURE__ */ oe(zs, { children: [
      /* @__PURE__ */ oe(Bs, { isFocused: c, children: [
        /* @__PURE__ */ T(
          Hs,
          {
            placeholder: p,
            value: i,
            onChange: a,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ T(Ce, { iconName: "search" })
      ] }),
      /* @__PURE__ */ T(
        vn,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: r,
          icon: /* @__PURE__ */ T(Ce, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((v, g) => /* @__PURE__ */ T(
      Xs,
      {
        id: v.id,
        item: v.label,
        rows: n[g],
        onItemClick: l
      },
      v.id
    )),
    /* @__PURE__ */ T(
      vn,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ T(Ce, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, qs = Y.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.blue200};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Ks = Kr`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Qs = Y.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ks} 1s infinite;
`, ei = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ T(qs, { position: n, children: /* @__PURE__ */ T(Qs, {}) }) : null, gn = ei, ti = ae.colors.white, Ge = (e) => {
  const {
    ctx: n,
    x: t,
    y: r,
    width: o,
    height: s,
    textYPos: i,
    label: a,
    font: l,
    isBottomRow: c,
    fillStyle: u,
    topText: p,
    bottomText: f
  } = e;
  if (n.beginPath(), n.strokeStyle = ae.colors.grey400, n.setLineDash([]), a && l && i) {
    n.fillStyle = ti, n.fillRect(t, r, o, s), n.strokeRect(t + 0.5, r + 0.5, o, s), n.font = l;
    const v = t + o / 2 - n.measureText(a).width / 2;
    n.textBaseline = "middle", n.fillStyle = ae.colors.grey600, n.fillText(a, v, i);
  }
  if (c && u && p && f) {
    n.fillStyle = u, n.fillRect(t, r, o, s), n.strokeRect(t + 0.5, r + 0.5, o, s), n.font = p.font;
    const v = t + o / 2 - n.measureText(p.label).width / 2;
    n.fillStyle = p.color, n.fillText(p.label, v, p.y), n.font = f.font;
    const g = t + o / 2 - n.measureText(f.label).width / 2;
    n.fillStyle = f.color, n.fillText(f.label, g, f.y);
  }
}, er = (e) => {
  const { isCurrent: n, isBusinessDay: t, variant: r } = e;
  return r === "yearView" ? n ? ae.colors.blue300 : an : n ? ae.colors.blue300 : t ? an : ae.colors.blue200;
}, It = (e) => {
  const { isCurrent: n, isBusinessDay: t, variant: r } = e;
  return n ? r === "bottomRow" ? ae.colors.grey600 : ae.colors.blue400 : t ? r === "bottomRow" ? ae.colors.grey600 : ae.colors.black : ae.colors.grey600;
}, ni = (e, n, t) => {
  const r = He - Ie / eo, o = He - Ie / to, s = Me + je;
  let i = 0;
  for (let a = 0; a < n; a++) {
    const l = Vn(
      j(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    );
    Ge({
      ctx: e,
      x: i,
      y: s,
      width: de,
      height: Ie,
      isBottomRow: !0,
      fillStyle: er({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay }),
      topText: {
        y: r,
        label: l.dayName.toUpperCase(),
        font: Te.bottomRow.name,
        color: It({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay })
      },
      bottomText: {
        y: o,
        label: `${l.dayOfMonth}`,
        font: Te.bottomRow.number,
        color: It({
          isCurrent: l.isCurrentDay,
          isBusinessDay: l.isBusinessDay,
          variant: "bottomRow"
        })
      }
    }), i += de;
  }
}, ri = (e, n, t) => {
  let r = -(t.dayOfMonth - 1) * ke;
  const o = Me;
  let i = t.month;
  for (let a = 0; a < n; a++) {
    i >= kt && (i = 0);
    const l = Fn(t, a) * ke;
    Ge({
      ctx: e,
      x: r,
      y: o,
      width: l,
      height: je,
      textYPos: Bn,
      label: j().month(i).format("MMMM").toUpperCase(),
      font: Te.bottomRow.number
    }), r += l, i++;
  }
}, oi = (e, n) => {
  let r = 0, o = 0, s = 0, i = j(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  r = -n.dayOfMonth * de + de;
  for (let a = 0; a < kt; a++)
    i > kt - 1 && (i = 0, s++), o = j(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(a, "months").daysInMonth() * de, Ge({
      ctx: e,
      x: r,
      y: 0,
      width: o,
      height: Me,
      textYPos: Hn,
      label: j(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + ` ${j(`${n.year + s}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("YYYY")}`,
      font: Te.topRow
    }), r += o, i++;
}, si = (e, n, t) => {
  const r = 7 * de, o = Me, s = e.canvas.width / r + r, i = n.weekOfYear;
  let a = 0;
  for (let l = 0; l < s; l++) {
    const c = j(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let u = (i + l) % sn;
    u <= 0 && (u += sn), c !== 1 && l === 0 && (a = -c * de + de), Ge({
      ctx: e,
      x: a,
      y: o,
      width: r,
      height: je,
      textYPos: Bn,
      label: `${t.toUpperCase()} ${u}`,
      font: Te.middleRow
    }), a += r;
  }
}, ii = (e, n, t, r) => {
  const o = He - Ie / 1.6, s = He - Ie / 4.5, i = Me + je;
  let a = 0;
  for (let l = 0; l < n; l++) {
    const c = j(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), u = c.isSame(j(), "week");
    Ge({
      ctx: e,
      x: a,
      y: i,
      width: Se,
      height: Ie,
      isBottomRow: !0,
      fillStyle: er({ isCurrent: u, variant: "yearView" }),
      topText: {
        y: o,
        label: c.isoWeek().toString(),
        font: Te.bottomRow.name,
        color: It({ isCurrent: u })
      },
      bottomText: {
        y: s,
        label: r.toUpperCase(),
        font: Te.middleRow,
        color: ae.colors.grey600
      }
    }), a += Se;
  }
}, ai = (e, n, t) => {
  const o = n.year, s = e.canvas.width * 2;
  let i = 0, a = 0, l = (un(o) - t + 1) * ke, c = 0;
  for (; i + c <= s; )
    a > 0 && (l = un(o + a) * ke), c + l > s && a > 0 && (l = Math.ceil((s - c) / ke) * ke), Ge({
      ctx: e,
      x: i,
      y: 0,
      width: l,
      height: Me,
      textYPos: Hn,
      label: (o + a).toString(),
      font: Te.topRow
    }), i += l, c += l, a++;
}, ci = (e, n, t, r, o, s) => {
  n === 0 ? (ai(e, r, s), ri(e, t, r), ii(e, t, r, o)) : (oi(e, r), si(e, r, o), ni(e, t, r));
}, li = Y.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, ui = Y.div`
  height: ${He}px;
  display: block;
`, di = Y.canvas``, hi = ({ zoom: e, topBarWidth: n }) => {
  const { week: t } = Ve(), { date: r, cols: o, dayOfYear: s, startDate: i } = Fe(), a = ve(null), l = me(
    (c) => {
      const u = window.innerWidth * be, p = He + 1;
      Xn(c, u, p), ci(c, e, o, i, t, s);
    },
    [o, s, i, t, e]
  );
  return fe(() => {
    if (!a.current)
      return;
    const c = a.current.getContext("2d");
    if (!c)
      return;
    const u = () => l(c);
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [l]), fe(() => {
    const c = a.current;
    if (!c)
      return;
    c.style.letterSpacing = "1px";
    const u = c.getContext("2d");
    u && l(u);
  }, [r, e, l]), /* @__PURE__ */ oe(li, { children: [
    /* @__PURE__ */ T(ws, { width: n }),
    /* @__PURE__ */ T(ui, { id: no, children: /* @__PURE__ */ T(di, { ref: a }) })
  ] });
}, fi = (e, n, t) => {
  const r = t === 0 ? ke : de, o = () => {
    const s = (e.startDate.diff(n.startDate, "day") + 1) * r;
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(n.startDate) && e.endDate.isBefore(n.endDate)) {
    const s = e.endDate.diff(e.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isBefore(n.endDate)) {
    const s = e.endDate.diff(n.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(n.startDate) && e.endDate.isAfter(n.endDate)) {
    const s = n.endDate.diff(e.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isAfter(n.endDate)) {
    const s = n.endDate.diff(n.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, pi = (e, n, t, r, o, s, i) => {
  const a = zn, l = e * ge + ro, c = j(r).hour(0).minute(0), u = j(o).hour(23).minute(59);
  return {
    ...fi(
      { startDate: c, endDate: u },
      { startDate: n, endDate: t },
      i
    ),
    y: l,
    height: a
  };
}, mi = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, vi = Y.button`
  ${Be}
  height: ${zn}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`, yi = Y.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, wn = Y.p`
  ${Be}
  ${Wn}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, gi = Y.p`
  ${Be}
  ${Wn}
`, wi = Y.div`
  position: sticky;
  left: ${Pe + 16}px;
  overflow: hidden;
`, xi = ({ row: e, data: n, zoom: t, onTileClick: r }) => {
  const { date: o } = Fe(), s = dt(o, t), { y: i, x: a, width: l, height: c } = pi(
    e,
    s.startDate,
    s.endDate,
    n.startDate,
    n.endDate,
    n.occupancy,
    t
  );
  return /* @__PURE__ */ T(
    vi,
    {
      style: {
        left: `${a}px`,
        top: `${i}px`,
        backgroundColor: `${n.bgColor ?? oo}`,
        width: `${l}px`,
        height: `${c}px`,
        color: mi(n.bgColor ?? "")
      },
      onClick: () => r == null ? void 0 : r(n),
      children: /* @__PURE__ */ T(yi, { children: /* @__PURE__ */ oe(wi, { children: [
        /* @__PURE__ */ T(wn, { bold: !0, children: n.title }),
        /* @__PURE__ */ T(wn, { children: n.subtitle }),
        /* @__PURE__ */ T(gi, { children: n.description })
      ] }) })
    }
  );
}, bi = ({ data: e, zoom: n, onTileClick: t }) => {
  const r = me(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (a, l) => a.map((c) => /* @__PURE__ */ T(
        xi,
        {
          row: l + o,
          data: c,
          zoom: n,
          onTileClick: t
        },
        c.id
      ))
    ))).flat(2);
  }, [e, t, n]);
  return /* @__PURE__ */ T(Nt, { children: r() });
}, Ci = bi;
Y.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
Y.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
Y.label`
  font-size: 14px;
`;
Y.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
Y.input`
  height: 18px;
  width: 18px;
`;
Y.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
Y.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const Si = Y.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.blue900};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, $i = Y.div`
  width: 100%;
`, ki = Y.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.blue900};
`, Ei = Y.div``, xn = Y.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, bn = Y.div`
  ${Be}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.white};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Cn = Y.p`
  ${Be}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.white};
`, Mi = Y.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.red400};
`, _i = ({ tooltipData: e, zoom: n }) => {
  const { taken: t, free: r, over: o } = Ve(), { coords: s, disposition: i } = e, a = ve(null), l = n === 0 ? Se : de;
  return Sn(() => {
    if (!a.current)
      return;
    const { width: c } = a.current.getBoundingClientRect(), u = c / 2 + l / 2;
    a.current.style.left = `${s.x - u}px`, a.current.style.top = `${s.y + 8}px`;
  }, [s.x, l, i.overtime, s.y]), /* @__PURE__ */ oe(Si, { ref: a, children: [
    /* @__PURE__ */ T($i, { children: /* @__PURE__ */ oe(Ei, { children: [
      /* @__PURE__ */ oe(xn, { children: [
        /* @__PURE__ */ T(Ce, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ oe(bn, { children: [
          /* @__PURE__ */ T(Cn, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ oe(Nt, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ T(Mi, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ oe(xn, { children: [
        /* @__PURE__ */ T(Ce, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ T(bn, { children: /* @__PURE__ */ T(Cn, { children: `${r}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ T(ki, {})
  ] });
};
export {
  Pi as Scheduler
};