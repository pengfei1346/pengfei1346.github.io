import { getCurrentScope, onScopeDispose, unref, computed, toRef as toRef$1, readonly, customRef, ref, watch, onMounted, nextTick, getCurrentInstance, isRef, shallowRef, watchEffect, inject, onUnmounted, reactive, markRaw, defineComponent, h, toRaw, mergeProps, useSSRContext, watchPostEffect, onUpdated, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString as toDisplayString$1, openBlock, createBlock, createCommentVNode, Fragment, renderList, defineAsyncComponent, provide, toHandlers, withKeys, useSlots, createElementBlock, createSlots, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import { ElButton, ElLink, ElTag, ElAvatar, ElPagination, ElAffix, ElImageViewer, ElIcon, ElAlert, ElCarousel, ElCarouselItem, ElImage } from "element-plus";
import { Comment, EditPen, AlarmClock, UserFilled, Clock, CollectionTag, Flag, CircleCloseFilled } from "@element-plus/icons-vue";
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str2) {
    var matches = str2.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
        var _a2, _b;
        return (_b = (_a2 = match.match(/[\t ]/g)) === null || _a2 === void 0 ? void 0 : _a2.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str2) {
      return str2.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value;
    if (typeof value === "string" && value.includes("\n")) {
      indentedValue = String(value).split("\n").map(function(str2, i2) {
        return i2 === 0 ? str2 : "" + endentation + str2;
      }).join("\n");
    }
    string += indentedValue + strings[i + 1];
  });
  return string;
}
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t, e) {
    module2.exports = e();
  }(commonjsGlobal$1, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h2 = "quarter", c = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d2, h: u, m: s, s: i, ms: r, Q: h2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D = {};
    D[g] = M;
    var p = function(t2) {
      return t2 instanceof _2;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _2(n2);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _2 = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return /* @__PURE__ */ new Date(NaN);
          if (O.u(e2))
            return /* @__PURE__ */ new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l2);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h22 = O.p(t2), l22 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (h22) {
          case c:
            return r2 ? l22(1, 0) : l22(31, 11);
          case f:
            return r2 ? l22(1, M3) : l22(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l22(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d2:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h22 = "set" + (this.$u ? "UTC" : ""), l22 = (n2 = {}, n2[a] = h22 + "Date", n2[d2] = h22 + "Date", n2[f] = h22 + "Month", n2[c] = h22 + "FullYear", n2[u] = h22 + "Hours", n2[s] = h22 + "Minutes", n2[i] = h22 + "Seconds", n2[r] = h22 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d2, 1);
          y2.$d[l22]($2), y2.init(), this.$d = y2.set(d2, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l22 && this.$d[l22]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h22) {
        var d22, l22 = this;
        r2 = Number(r2);
        var $2 = O.p(h22), y2 = function(t2) {
          var e2 = w(l22);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l22);
        };
        if ($2 === f)
          return this.set(f, this.$M + r2);
        if ($2 === c)
          return this.set(c, this.$y + r2);
        if ($2 === a)
          return y2(1);
        if ($2 === o)
          return y2(7);
        var M3 = (d22 = {}, d22[s] = e, d22[u] = n, d22[i] = t, d22)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l2;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h22 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d22 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h22(n2.monthsShort, a2, f2, 3), MMMM: h22(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h22(n2.weekdaysMin, this.$W, o2, 2), ddd: h22(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d22(s2, u2, true), A: d22(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || $2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d22, l22) {
        var $2, y2 = O.p(d22), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
        return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h2] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l22 ? g2 : O.a(g2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), T = _2.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d2]].forEach(function(t2) {
      T[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _2, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
const LEVELS = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
const log$1 = {
  trace: (..._args) => {
  },
  debug: (..._args) => {
  },
  info: (..._args) => {
  },
  warn: (..._args) => {
  },
  error: (..._args) => {
  },
  fatal: (..._args) => {
  }
};
const setLogLevel$1 = function(level = "fatal") {
  let numericLevel = LEVELS.fatal;
  if (typeof level === "string") {
    level = level.toLowerCase();
    if (level in LEVELS) {
      numericLevel = LEVELS[level];
    }
  } else if (typeof level === "number") {
    numericLevel = level;
  }
  log$1.trace = () => {
  };
  log$1.debug = () => {
  };
  log$1.info = () => {
  };
  log$1.warn = () => {
  };
  log$1.error = () => {
  };
  log$1.fatal = () => {
  };
  if (numericLevel <= LEVELS.fatal) {
    log$1.fatal = console.error ? console.error.bind(console, format("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", format("FATAL"));
  }
  if (numericLevel <= LEVELS.error) {
    log$1.error = console.error ? console.error.bind(console, format("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", format("ERROR"));
  }
  if (numericLevel <= LEVELS.warn) {
    log$1.warn = console.warn ? console.warn.bind(console, format("WARN"), "color: orange") : console.log.bind(console, `\x1B[33m`, format("WARN"));
  }
  if (numericLevel <= LEVELS.info) {
    log$1.info = console.info ? console.info.bind(console, format("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", format("INFO"));
  }
  if (numericLevel <= LEVELS.debug) {
    log$1.debug = console.debug ? console.debug.bind(console, format("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("DEBUG"));
  }
  if (numericLevel <= LEVELS.trace) {
    log$1.trace = console.debug ? console.debug.bind(console, format("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("TRACE"));
  }
};
const format = (level) => {
  const time = dayjs().format("ss.SSS");
  return `%c${time} : ${level} : `;
};
var dist = {};
Object.defineProperty(dist, "__esModule", { value: true });
var sanitizeUrl_1 = dist.sanitizeUrl = void 0;
var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
var htmlCtrlEntityRegex = /&(newline|tab);/gi;
var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var urlSchemeRegex = /^.+(:|&colon;)/gim;
var relativeFirstCharacters = [".", "/"];
function isRelativeUrlWithoutProtocol(url) {
  return relativeFirstCharacters.indexOf(url[0]) > -1;
}
function decodeHtmlCharacters(str2) {
  return str2.replace(htmlEntitiesRegex, function(match, dec) {
    return String.fromCharCode(dec);
  });
}
function sanitizeUrl(url) {
  var sanitizedUrl = decodeHtmlCharacters(url || "").replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
  if (!sanitizedUrl) {
    return "about:blank";
  }
  if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
    return sanitizedUrl;
  }
  var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
  if (!urlSchemeParseResults) {
    return sanitizedUrl;
  }
  var urlScheme = urlSchemeParseResults[0];
  if (invalidProtocolRegex.test(urlScheme)) {
    return "about:blank";
  }
  return sanitizedUrl;
}
sanitizeUrl_1 = dist.sanitizeUrl = sanitizeUrl;
var noop$1$1 = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _2 = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _2 || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _2[t] = [];
  }
  return new Dispatch(_2);
}
function Dispatch(_2) {
  this._ = _2;
}
function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name2 = "", i = t.indexOf(".");
    if (i >= 0)
      name2 = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: name2 };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _2 = this._, T = parseTypenames$1(typename + "", _2), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1(_2[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _2[t] = set$2(_2[t], typename.name, callback);
      else if (callback == null)
        for (t in _2)
          _2[t] = set$2(_2[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _2 = this._;
    for (var t in _2)
      copy[t] = _2[t].slice();
    return new Dispatch(copy);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1(type2, name2) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name2) {
      return c.value;
    }
  }
}
function set$2(type2, name2, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name2) {
      type2[i] = noop$1$1, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name: name2, value: callback });
  return type2;
}
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name2) {
  var prefix = name2 += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name2.slice(0, i)) !== "xmlns")
    name2 = name2.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name2 } : name2;
}
function creatorInherit(name2) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name2) : document2.createElementNS(uri, name2);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name2) {
  var fullname = namespace(name2);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select) {
  if (typeof select !== "function")
    select = selector(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selection_selectAll(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        subgroups.push(select.call(node2, node2.__data__, i, group));
        parents.push(node2);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node2) {
    return node2.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next2) {
    return this._parent.insertBefore(child, next2);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$2(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node2, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node2 = group[i]) {
      node2.__data__ = data[i];
      update[i] = node2;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node2 = group[i]) {
      exit[i] = node2;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node2, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node2 = group[i]) {
      keyValues[i] = keyValue = key.call(node2, node2.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node2;
      } else {
        nodeByKeyValue.set(keyValue, node2);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node2 = nodeByKeyValue.get(keyValue)) {
      update[i] = node2;
      node2.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node2 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node2) {
      exit[i] = node2;
    }
  }
}
function datum(node2) {
  return node2.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$2(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next2; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next2 = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next2 || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge2[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next2 = group[i], node2; --i >= 0; ) {
      if (node2 = group[i]) {
        if (next2 && node2.compareDocumentPosition(next2) ^ 4)
          next2.parentNode.insertBefore(node2, next2);
        next2 = node2;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        sortgroup[i] = node2;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node2 = group[i];
      if (node2)
        return node2;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node2 of this)
    ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i])
        callback.call(node2, node2.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name2) {
  return function() {
    this.removeAttribute(name2);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name2, value) {
  return function() {
    this.setAttribute(name2, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name2);
    else
      this.setAttribute(name2, v);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr(name2, value) {
  var fullname = namespace(name2);
  if (arguments.length < 2) {
    var node2 = this.node();
    return fullname.local ? node2.getAttributeNS(fullname.space, fullname.local) : node2.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node2) {
  return node2.ownerDocument && node2.ownerDocument.defaultView || node2.document && node2 || node2.defaultView;
}
function styleRemove$1(name2) {
  return function() {
    this.style.removeProperty(name2);
  };
}
function styleConstant$1(name2, value, priority) {
  return function() {
    this.style.setProperty(name2, value, priority);
  };
}
function styleFunction$1(name2, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name2);
    else
      this.style.setProperty(name2, v, priority);
  };
}
function selection_style(name2, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name2, value, priority == null ? "" : priority)) : styleValue(this.node(), name2);
}
function styleValue(node2, name2) {
  return node2.style.getPropertyValue(name2) || defaultView(node2).getComputedStyle(node2, null).getPropertyValue(name2);
}
function propertyRemove(name2) {
  return function() {
    delete this[name2];
  };
}
function propertyConstant(name2, value) {
  return function() {
    this[name2] = value;
  };
}
function propertyFunction(name2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name2];
    else
      this[name2] = v;
  };
}
function selection_property(name2, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name2, value)) : this.node()[name2];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node2) {
  return node2.classList || new ClassList(node2);
}
function ClassList(node2) {
  this._node = node2;
  this._names = classArray(node2.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name2) {
    var i = this._names.indexOf(name2);
    if (i < 0) {
      this._names.push(name2);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name2) {
    var i = this._names.indexOf(name2);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name2) {
    return this._names.indexOf(name2) >= 0;
  }
};
function classedAdd(node2, names) {
  var list = classList(node2), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node2, names) {
  var list = classList(node2), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name2, value) {
  var names = classArray(name2 + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name2) {
  var create2 = typeof name2 === "function" ? name2 : creator(name2);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name2, before) {
  var create2 = typeof name2 === "function" ? name2 : creator(name2), select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
function remove$1() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove$1);
}
function selection_cloneShallow() {
  var clone2 = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone2, this.nextSibling) : clone2;
}
function selection_cloneDeep() {
  var clone2 = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone2, this.nextSibling) : clone2;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name2 = "", i = t.indexOf(".");
    if (i >= 0)
      name2 = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name: name2 };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent(node2, type2, params) {
  var window2 = defaultView(node2), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node2.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function selection_dispatch(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
      if (node2 = group[i])
        yield node2;
    }
  }
}
var root$2 = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root$2);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function d3select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root$2);
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend$1(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color$2() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
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
};
define(Color$2, color, {
  copy(channels2) {
    return Object.assign(new this.constructor(), this, channels2);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l2;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l2 = m[1].length, m = parseInt(m[1], 16), l2 === 6 ? rgbn(m) : l2 === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l2 === 8 ? rgba$2(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l2 === 4 ? rgba$2(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba$2(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba$2(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba$2(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color$2))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend$1(Color$2, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s, l2, a) {
  if (a <= 0)
    h2 = s = l2 = NaN;
  else if (l2 <= 0 || l2 >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl(h2, s, l2, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color$2))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h2 = NaN, s = max2 - min2, l2 = (max2 + min2) / 2;
  if (s) {
    if (r === max2)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max2)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l2 < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h2 *= 60;
  } else {
    s = l2 > 0 && l2 < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l2, o.opacity);
}
function hsl(h2, s, l2, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l2, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l2, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l2;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend$1(Color$2, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l2 = this.l, m2 = l2 + (l2 < 0.5 ? l2 : 1 - l2) * s, m1 = 2 * l2 - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant$1 = (x) => () => x;
function linear(a, d2) {
  return function(t) {
    return a + t * d2;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function hue(a, b) {
  var d2 = b - a;
  return d2 ? linear(a, d2 > 180 || d2 < -180 ? d2 - 360 * Math.round(d2 / 360) : d2) : constant$1(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d2 = b - a;
  return d2 ? linear(a, d2) : constant$1(isNaN(a) ? b : a);
}
const interpolateRgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb$1(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1.gamma = rgbGamma;
  return rgb$1;
}(1);
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
var degrees = 180 / Math.PI;
var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d2, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d2)
    c -= a * skewX, d2 -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d2 * d2))
    c /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a * d2 < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity$1;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse2, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse2(a), b = parse2(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout$1)
    timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node2, name2, id2, index2, group, timing) {
  var schedules = node2.__transition;
  if (!schedules)
    node2.__transition = {};
  else if (id2 in schedules)
    return;
  create$1(node2, id2, {
    name: name2,
    index: index2,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init$1(node2, id2) {
  var schedule2 = get(node2, id2);
  if (schedule2.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set$1(node2, id2) {
  var schedule2 = get(node2, id2);
  if (schedule2.state > STARTED)
    throw new Error("too late; already running");
  return schedule2;
}
function get(node2, id2) {
  var schedule2 = node2.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create$1(node2, id2, self2) {
  var schedules = node2.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule2, 0, self2.time);
  function schedule2(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name)
        continue;
      if (o.state === STARTED)
        return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node2, node2.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node2, node2.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node2, t);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node2, node2.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node2.__transition;
  }
}
function interrupt(node2, name2) {
  var schedules = node2.__transition, schedule2, active2, empty2 = true, i;
  if (!schedules)
    return;
  name2 = name2 == null ? null : name2 + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name2) {
      empty2 = false;
      continue;
    }
    active2 = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active2 ? "interrupt" : "cancel", node2, node2.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node2.__transition;
}
function selection_interrupt(name2) {
  return this.each(function() {
    interrupt(this, name2);
  });
}
function tweenRemove(id2, name2) {
  var tween0, tween1;
  return function() {
    var schedule2 = set$1(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name2) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name2, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set$1(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name: name2, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name2) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name2, value) {
  var id2 = this._id;
  name2 += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name2) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name2, value));
}
function tweenValue(transition, name2, value) {
  var id2 = transition._id;
  transition.each(function() {
    var schedule2 = set$1(this, id2);
    (schedule2.value || (schedule2.value = {}))[name2] = value.apply(this, arguments);
  });
  return function(node2) {
    return get(node2, id2).value[name2];
  };
}
function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove(name2) {
  return function() {
    this.removeAttribute(name2);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name2, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name2);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name2, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name2);
    string0 = this.getAttribute(name2);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name2, value) {
  var fullname = namespace(name2), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name2, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name2, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name2, i) {
  return function(t) {
    this.setAttribute(name2, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name2, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name2, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name2, value) {
  var key = "attr." + name2;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace(name2);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init$1(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init$1(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set$1(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set$1(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set$1(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set$1(this, id2).ease = v;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && match.call(node2, node2.__data__, i, group)) {
        subgroup.push(node2);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
  if (transition._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge2[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name2) {
  return (name2 + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name2, listener) {
  var on0, on1, sit = start(name2) ? init$1 : set$1;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name2, listener);
    schedule2.on = on1;
  };
}
function transition_on(name2, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name2) : this.each(onFunction(id2, name2, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select) {
  var name2 = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group[i]) && (subnode = select.call(node2, node2.__data__, i, group))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name2, id2, i, subgroup, get(node2, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name2, id2);
}
function transition_selectAll(select) {
  var name2 = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        for (var children2 = select.call(node2, node2.__data__, i, group), child, inherit2 = get(node2, id2), k = 0, l2 = children2.length; k < l2; ++k) {
          if (child = children2[k]) {
            schedule(child, name2, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node2);
      }
    }
  }
  return new Transition(subgroups, parents, name2, id2);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name2, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name2), string1 = (this.style.removeProperty(name2), styleValue(this, name2));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name2) {
  return function() {
    this.style.removeProperty(name2);
  };
}
function styleConstant(name2, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name2);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name2, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name2), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name2), styleValue(this, name2));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name2) {
  var on0, on1, listener0, key = "style." + name2, event = "end." + key, remove2;
  return function() {
    var schedule2 = set$1(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name2)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name2, value, priority) {
  var i = (name2 += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name2, styleNull(name2, i)).on("end.style." + name2, styleRemove(name2)) : typeof value === "function" ? this.styleTween(name2, styleFunction(name2, i, tweenValue(this, "style." + name2, value))).each(styleMaybeRemove(this._id, name2)) : this.styleTween(name2, styleConstant(name2, i, value), priority).on("end.style." + name2, null);
}
function styleInterpolate(name2, i, priority) {
  return function(t) {
    this.style.setProperty(name2, i.call(this, t), priority);
  };
}
function styleTween(name2, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name2, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name2, value, priority) {
  var key = "style." + (name2 += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name2, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name2 = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        var inherit2 = get(node2, id0);
        schedule(node2, name2, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name2, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set$1(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id$l = 0;
function Transition(groups, parents, name2, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name2;
  this._id = id2;
}
function newId() {
  return ++id$l;
}
var selection_prototype = selection.prototype;
Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node2, id2) {
  var timing;
  while (!(timing = node2.__transition) || !(timing = timing[id2])) {
    if (!(node2 = node2.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name2) {
  var id2, timing;
  if (name2 instanceof Transition) {
    id2 = name2._id, name2 = name2._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name2 = name2 == null ? null : name2 + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
      if (node2 = group[i]) {
        schedule(node2, name2, id2, i, group, timing || inherit(node2, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name2, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
const abs$1 = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x, y);
        break;
    }
  }
};
function curveLinear(context) {
  return new Linear(context);
}
class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line)
          this._context.lineTo(x, y);
        else
          this._context.moveTo(x, y);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        if (this._x)
          this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
        else
          this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
        break;
      }
    }
    this._x0 = x, this._y0 = y;
  }
}
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}
function noop$2() {
}
function point$3(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point$3(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point$3(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
function curveBasis(context) {
  return new Basis(context);
}
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x, this._y2 = y;
        break;
      case 1:
        this._point = 2;
        this._x3 = x, this._y3 = y;
        break;
      case 2:
        this._point = 3;
        this._x4 = x, this._y4 = y;
        this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
        break;
      default:
        point$3(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
function curveBasisClosed(context) {
  return new BasisClosed(context);
}
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point$3(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
function curveBasisOpen(context) {
  return new BasisOpen(context);
}
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x, y = this._y, j = x.length - 1;
    if (j > 0) {
      var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};
const curveBundle = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);
function point$2(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point$2(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        this._x1 = x, this._y1 = y;
        break;
      case 2:
        this._point = 3;
      default:
        point$2(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
const curveCardinal = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x, this._y3 = y;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x, this._y4 = y);
        break;
      case 2:
        this._point = 3;
        this._x5 = x, this._y5 = y;
        break;
      default:
        point$2(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
const curveCardinalClosed = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point$2(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
const curveCardinalOpen = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);
function point$1(that, x, y) {
  var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
  if (that._l01_a > epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) {
      var x23 = this._x2 - x, y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point$1(this, x, y);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
const curveCatmullRom = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) {
      var x23 = this._x2 - x, y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x, this._y3 = y;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x, this._y4 = y);
        break;
      case 2:
        this._point = 3;
        this._x5 = x, this._y5 = y;
        break;
      default:
        point$1(this, x, y);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
const curveCatmullRomClosed = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) {
      var x23 = this._x2 - x, y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point$1(this, x, y);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
const curveCatmullRomOpen = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point)
      this._context.lineTo(x, y);
    else
      this._point = 1, this._context.moveTo(x, y);
  }
};
function curveLinearClosed(context) {
  return new LinearClosed(context);
}
function sign(x) {
  return x < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h2 = that._x1 - that._x0;
  return h2 ? (3 * (that._y1 - that._y0) / h2 - t) / 2 : t;
}
function point(that, t0, t1) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;
    x = +x, y = +y;
    if (x === this._x1 && y === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t1 = slope3(this, x, y)), t1);
        break;
      default:
        point(this, this._t0, t1 = slope3(this, x, y));
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x, y) {
    this._context.moveTo(y, x);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x, y) {
    this._context.lineTo(y, x);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x, y = this._y, n = x.length;
    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x), py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};
function controlPoints(x) {
  var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i)
    a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i)
    m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}
function curveNatural(context) {
  return new Natural(context);
}
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};
function curveStep(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point2) {
    return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Transform.prototype;
/*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply: apply$1,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!apply$1) {
  apply$1 = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply$1(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set2, array2, transformCaseFunc) {
  var _transformCaseFunc;
  transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set2, null);
  }
  let l2 = array2.length;
  while (l2--) {
    let element = array2[l2];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array2)) {
          array2[l2] = lcElement;
        }
        element = lcElement;
      }
    }
    set2[element] = true;
  }
  return set2;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    newObject[property] = value;
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue(element) {
    console.warn("fallback value for", element);
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR,
  ERB_EXPR,
  TMPLIT_EXPR,
  DATA_ATTR,
  ARIA_ATTR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  ATTR_WHITESPACE,
  DOCTYPE_NAME
});
const getGlobal = () => typeof window === "undefined" ? null : window;
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root2) => createDOMPurify(root2);
  DOMPurify.version = "3.0.5";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== 9) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  const originalDocument = window2.document;
  const currentScript = originalDocument.currentScript;
  let {
    document: document2
  } = window2;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = {};
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let PARSER_MEDIA_TYPE;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
      clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
      clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [...text]);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  const ALL_SVG_TAGS = addToSet({}, svg$1);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  const ALL_MATHML_TAGS = addToSet({}, mathMl$1);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node2) {
    arrayPush(DOMPurify.removed, {
      element: node2
    });
    try {
      node2.parentNode.removeChild(node2);
    } catch (_2) {
      node2.remove();
    }
  };
  const _removeAttribute = function _removeAttribute2(name2, node2) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node2.getAttributeNode(name2),
        from: node2
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node2
      });
    }
    node2.removeAttribute(name2);
    if (name2 === "is" && !ALLOWED_ATTR[name2]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node2);
        } catch (_2) {
        }
      } else {
        try {
          node2.setAttribute(name2, "");
        } catch (_2) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc;
    let leadingWhitespace;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createIterator = function _createIterator2(root2) {
    return createNodeIterator.call(
      root2.ownerDocument || root2,
      root2,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
      null,
      false
    );
  };
  const _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(object) {
    return typeof Node === "object" ? object instanceof Node : object && typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
  };
  const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
          return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
          return false;
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR2, " ");
      content = stringReplace(content, ERB_EXPR2, " ");
      content = stringReplace(content, TMPLIT_EXPR2, " ");
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
      ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
      ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      )
        ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName])
      ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
      ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if (value) {
      return false;
    } else
      ;
    return true;
  };
  const _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
    return tagName.indexOf("-") > 0;
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    let attr;
    let value;
    let lcName;
    let l2;
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l2 = attributes.length;
    while (l2--) {
      attr = attributes[l2];
      const {
        name: name2,
        namespaceURI
      } = attr;
      value = name2 === "value" ? attr.value : stringTrim(attr.value);
      lcName = transformCaseFunc(name2);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name2, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name2, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR2, " ");
        value = stringReplace(value, ERB_EXPR2, " ");
        value = stringReplace(value, TMPLIT_EXPR2, " ");
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name2, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI)
          ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name2, value);
        } else {
          currentNode.setAttribute(name2, value);
        }
        arrayPop(DOMPurify.removed);
      } catch (_2) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode;
    const shadowIterator = _createIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body;
    let importedNode;
    let currentNode;
    let returnNode;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR2, " ");
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR2, " ");
      serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR2, " ");
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function(cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
const lineBreakRegex = /<br\s*\/?>/gi;
const getRows = (s) => {
  if (!s) {
    return [""];
  }
  const str2 = breakToPlaceholder(s).replace(/\\n/g, "#br#");
  return str2.split("#br#");
};
const removeScript = (txt) => {
  const TEMPORARY_ATTRIBUTE = "data-temp-href-target";
  purify.addHook("beforeSanitizeAttributes", (node2) => {
    if (node2.tagName === "A" && node2.hasAttribute("target")) {
      node2.setAttribute(TEMPORARY_ATTRIBUTE, node2.getAttribute("target") || "");
    }
  });
  const sanitizedText = purify.sanitize(txt);
  purify.addHook("afterSanitizeAttributes", (node2) => {
    if (node2.tagName === "A" && node2.hasAttribute(TEMPORARY_ATTRIBUTE)) {
      node2.setAttribute("target", node2.getAttribute(TEMPORARY_ATTRIBUTE) || "");
      node2.removeAttribute(TEMPORARY_ATTRIBUTE);
      if (node2.getAttribute("target") === "_blank") {
        node2.setAttribute("rel", "noopener");
      }
    }
  });
  return sanitizedText;
};
const sanitizeMore = (text2, config2) => {
  var _a2;
  if (((_a2 = config2.flowchart) == null ? void 0 : _a2.htmlLabels) !== false) {
    const level = config2.securityLevel;
    if (level === "antiscript" || level === "strict") {
      text2 = removeScript(text2);
    } else if (level !== "loose") {
      text2 = breakToPlaceholder(text2);
      text2 = text2.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      text2 = text2.replace(/=/g, "&equals;");
      text2 = placeholderToBreak(text2);
    }
  }
  return text2;
};
const sanitizeText$2 = (text2, config2) => {
  if (!text2) {
    return text2;
  }
  if (config2.dompurifyConfig) {
    text2 = purify.sanitize(sanitizeMore(text2, config2), config2.dompurifyConfig).toString();
  } else {
    text2 = purify.sanitize(sanitizeMore(text2, config2), {
      FORBID_TAGS: ["style"]
    }).toString();
  }
  return text2;
};
const sanitizeTextOrArray = (a, config2) => {
  if (typeof a === "string") {
    return sanitizeText$2(a, config2);
  }
  return a.flat().map((x) => sanitizeText$2(x, config2));
};
const hasBreaks = (text2) => {
  return lineBreakRegex.test(text2);
};
const splitBreaks = (text2) => {
  return text2.split(lineBreakRegex);
};
const placeholderToBreak = (s) => {
  return s.replace(/#br#/g, "<br/>");
};
const breakToPlaceholder = (s) => {
  return s.replace(lineBreakRegex, "#br#");
};
const getUrl = (useAbsolute) => {
  let url = "";
  if (useAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replaceAll(/\(/g, "\\(");
    url = url.replaceAll(/\)/g, "\\)");
  }
  return url;
};
const evaluate = (val) => val === false || ["false", "null", "0"].includes(String(val).trim().toLowerCase()) ? false : true;
const getMax = function(...values) {
  const newValues = values.filter((value) => {
    return !isNaN(value);
  });
  return Math.max(...newValues);
};
const getMin = function(...values) {
  const newValues = values.filter((value) => {
    return !isNaN(value);
  });
  return Math.min(...newValues);
};
const parseGenericTypes = function(input) {
  const inputSets = input.split(/(,)/);
  const output = [];
  for (let i = 0; i < inputSets.length; i++) {
    let thisSet = inputSets[i];
    if (thisSet === "," && i > 0 && i + 1 < inputSets.length) {
      const previousSet = inputSets[i - 1];
      const nextSet = inputSets[i + 1];
      if (shouldCombineSets(previousSet, nextSet)) {
        thisSet = previousSet + "," + nextSet;
        i++;
        output.pop();
      }
    }
    output.push(processSet(thisSet));
  }
  return output.join("");
};
const countOccurrence = (string, substring) => {
  return Math.max(0, string.split(substring).length - 1);
};
const shouldCombineSets = (previousSet, nextSet) => {
  const prevCount = countOccurrence(previousSet, "~");
  const nextCount = countOccurrence(nextSet, "~");
  return prevCount === 1 && nextCount === 1;
};
const processSet = (input) => {
  const tildeCount = countOccurrence(input, "~");
  let hasStartingTilde = false;
  if (tildeCount <= 1) {
    return input;
  }
  if (tildeCount % 2 !== 0 && input.startsWith("~")) {
    input = input.substring(1);
    hasStartingTilde = true;
  }
  const chars = [...input];
  let first = chars.indexOf("~");
  let last = chars.lastIndexOf("~");
  while (first !== -1 && last !== -1 && first !== last) {
    chars[first] = "<";
    chars[last] = ">";
    first = chars.indexOf("~");
    last = chars.lastIndexOf("~");
  }
  if (hasStartingTilde) {
    chars.unshift("~");
  }
  return chars.join("");
};
const common$1 = {
  getRows,
  sanitizeText: sanitizeText$2,
  sanitizeTextOrArray,
  hasBreaks,
  splitBreaks,
  lineBreakRegex,
  removeScript,
  getUrl,
  evaluate,
  getMax,
  getMin
};
const Channel = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (r) => r >= 255 ? 255 : r < 0 ? 0 : r,
    g: (g) => g >= 255 ? 255 : g < 0 ? 0 : g,
    b: (b) => b >= 255 ? 255 : b < 0 ? 0 : b,
    h: (h2) => h2 % 360,
    s: (s) => s >= 100 ? 100 : s < 0 ? 0 : s,
    l: (l2) => l2 >= 100 ? 100 : l2 < 0 ? 0 : l2,
    a: (a) => a >= 1 ? 1 : a < 0 ? 0 : a
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (c) => {
    const n = c / 255;
    return c > 0.03928 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (p, q, t) => {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  },
  hsl2rgb: ({ h: h2, s, l: l2 }, channel2) => {
    if (!s)
      return l2 * 2.55;
    h2 /= 360;
    s /= 100;
    l2 /= 100;
    const q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    const p = 2 * l2 - q;
    switch (channel2) {
      case "r":
        return Channel.hue2rgb(p, q, h2 + 1 / 3) * 255;
      case "g":
        return Channel.hue2rgb(p, q, h2) * 255;
      case "b":
        return Channel.hue2rgb(p, q, h2 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r, g, b }, channel2) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max2 = Math.max(r, g, b);
    const min2 = Math.min(r, g, b);
    const l2 = (max2 + min2) / 2;
    if (channel2 === "l")
      return l2 * 100;
    if (max2 === min2)
      return 0;
    const d2 = max2 - min2;
    const s = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
    if (channel2 === "s")
      return s * 100;
    switch (max2) {
      case r:
        return ((g - b) / d2 + (g < b ? 6 : 0)) * 60;
      case g:
        return ((b - r) / d2 + 2) * 60;
      case b:
        return ((r - g) / d2 + 4) * 60;
      default:
        return -1;
    }
  }
};
const channel = Channel;
const Lang = {
  /* API */
  clamp: (number, lower2, upper) => {
    if (lower2 > upper)
      return Math.min(lower2, Math.max(upper, number));
    return Math.min(upper, Math.max(lower2, number));
  },
  round: (number) => {
    return Math.round(number * 1e10) / 1e10;
  }
};
const lang = Lang;
const Unit = {
  /* API */
  dec2hex: (dec) => {
    const hex2 = Math.round(dec).toString(16);
    return hex2.length > 1 ? hex2 : `0${hex2}`;
  }
};
const unit = Unit;
const Utils = {
  channel,
  lang,
  unit
};
const _ = Utils;
const DEC2HEX = {};
for (let i = 0; i <= 255; i++)
  DEC2HEX[i] = _.unit.dec2hex(i);
const TYPE = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Type {
  constructor() {
    this.type = TYPE.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(type2) {
    if (this.type && this.type !== type2)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = type2;
  }
  reset() {
    this.type = TYPE.ALL;
  }
  is(type2) {
    return this.type === type2;
  }
}
const Type$2 = Type;
class Channels {
  /* CONSTRUCTOR */
  constructor(data, color2) {
    this.color = color2;
    this.changed = false;
    this.data = data;
    this.type = new Type$2();
  }
  /* API */
  set(data, color2) {
    this.color = color2;
    this.changed = false;
    this.data = data;
    this.type.type = TYPE.ALL;
    return this;
  }
  /* HELPERS */
  _ensureHSL() {
    const data = this.data;
    const { h: h2, s, l: l2 } = data;
    if (h2 === void 0)
      data.h = _.channel.rgb2hsl(data, "h");
    if (s === void 0)
      data.s = _.channel.rgb2hsl(data, "s");
    if (l2 === void 0)
      data.l = _.channel.rgb2hsl(data, "l");
  }
  _ensureRGB() {
    const data = this.data;
    const { r, g, b } = data;
    if (r === void 0)
      data.r = _.channel.hsl2rgb(data, "r");
    if (g === void 0)
      data.g = _.channel.hsl2rgb(data, "g");
    if (b === void 0)
      data.b = _.channel.hsl2rgb(data, "b");
  }
  /* GETTERS */
  get r() {
    const data = this.data;
    const r = data.r;
    if (!this.type.is(TYPE.HSL) && r !== void 0)
      return r;
    this._ensureHSL();
    return _.channel.hsl2rgb(data, "r");
  }
  get g() {
    const data = this.data;
    const g = data.g;
    if (!this.type.is(TYPE.HSL) && g !== void 0)
      return g;
    this._ensureHSL();
    return _.channel.hsl2rgb(data, "g");
  }
  get b() {
    const data = this.data;
    const b = data.b;
    if (!this.type.is(TYPE.HSL) && b !== void 0)
      return b;
    this._ensureHSL();
    return _.channel.hsl2rgb(data, "b");
  }
  get h() {
    const data = this.data;
    const h2 = data.h;
    if (!this.type.is(TYPE.RGB) && h2 !== void 0)
      return h2;
    this._ensureRGB();
    return _.channel.rgb2hsl(data, "h");
  }
  get s() {
    const data = this.data;
    const s = data.s;
    if (!this.type.is(TYPE.RGB) && s !== void 0)
      return s;
    this._ensureRGB();
    return _.channel.rgb2hsl(data, "s");
  }
  get l() {
    const data = this.data;
    const l2 = data.l;
    if (!this.type.is(TYPE.RGB) && l2 !== void 0)
      return l2;
    this._ensureRGB();
    return _.channel.rgb2hsl(data, "l");
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(r) {
    this.type.set(TYPE.RGB);
    this.changed = true;
    this.data.r = r;
  }
  set g(g) {
    this.type.set(TYPE.RGB);
    this.changed = true;
    this.data.g = g;
  }
  set b(b) {
    this.type.set(TYPE.RGB);
    this.changed = true;
    this.data.b = b;
  }
  set h(h2) {
    this.type.set(TYPE.HSL);
    this.changed = true;
    this.data.h = h2;
  }
  set s(s) {
    this.type.set(TYPE.HSL);
    this.changed = true;
    this.data.s = s;
  }
  set l(l2) {
    this.type.set(TYPE.HSL);
    this.changed = true;
    this.data.l = l2;
  }
  set a(a) {
    this.changed = true;
    this.data.a = a;
  }
}
const Channels$1 = Channels;
const channels = new Channels$1({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
const ChannelsReusable = channels;
const Hex = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (color2) => {
    if (color2.charCodeAt(0) !== 35)
      return;
    const match = color2.match(Hex.re);
    if (!match)
      return;
    const hex2 = match[1];
    const dec = parseInt(hex2, 16);
    const length2 = hex2.length;
    const hasAlpha = length2 % 4 === 0;
    const isFullLength = length2 > 4;
    const multiplier = isFullLength ? 1 : 17;
    const bits = isFullLength ? 8 : 4;
    const bitsOffset = hasAlpha ? 0 : -1;
    const mask = isFullLength ? 255 : 15;
    return ChannelsReusable.set({
      r: (dec >> bits * (bitsOffset + 3) & mask) * multiplier,
      g: (dec >> bits * (bitsOffset + 2) & mask) * multiplier,
      b: (dec >> bits * (bitsOffset + 1) & mask) * multiplier,
      a: hasAlpha ? (dec & mask) * multiplier / 255 : 1
    }, color2);
  },
  stringify: (channels2) => {
    const { r, g, b, a } = channels2;
    if (a < 1) {
      return `#${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(g)]}${DEC2HEX[Math.round(b)]}${DEC2HEX[Math.round(a * 255)]}`;
    } else {
      return `#${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(g)]}${DEC2HEX[Math.round(b)]}`;
    }
  }
};
const Hex$1 = Hex;
const HSL = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (hue2) => {
    const match = hue2.match(HSL.hueRe);
    if (match) {
      const [, number, unit2] = match;
      switch (unit2) {
        case "grad":
          return _.channel.clamp.h(parseFloat(number) * 0.9);
        case "rad":
          return _.channel.clamp.h(parseFloat(number) * 180 / Math.PI);
        case "turn":
          return _.channel.clamp.h(parseFloat(number) * 360);
      }
    }
    return _.channel.clamp.h(parseFloat(hue2));
  },
  /* API */
  parse: (color2) => {
    const charCode = color2.charCodeAt(0);
    if (charCode !== 104 && charCode !== 72)
      return;
    const match = color2.match(HSL.re);
    if (!match)
      return;
    const [, h2, s, l2, a, isAlphaPercentage] = match;
    return ChannelsReusable.set({
      h: HSL._hue2deg(h2),
      s: _.channel.clamp.s(parseFloat(s)),
      l: _.channel.clamp.l(parseFloat(l2)),
      a: a ? _.channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, color2);
  },
  stringify: (channels2) => {
    const { h: h2, s, l: l2, a } = channels2;
    if (a < 1) {
      return `hsla(${_.lang.round(h2)}, ${_.lang.round(s)}%, ${_.lang.round(l2)}%, ${a})`;
    } else {
      return `hsl(${_.lang.round(h2)}, ${_.lang.round(s)}%, ${_.lang.round(l2)}%)`;
    }
  }
};
const HSL$1 = HSL;
const Keyword = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (color2) => {
    color2 = color2.toLowerCase();
    const hex2 = Keyword.colors[color2];
    if (!hex2)
      return;
    return Hex$1.parse(hex2);
  },
  stringify: (channels2) => {
    const hex2 = Hex$1.stringify(channels2);
    for (const name2 in Keyword.colors) {
      if (Keyword.colors[name2] === hex2)
        return name2;
    }
    return;
  }
};
const Keyword$1 = Keyword;
const RGB = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (color2) => {
    const charCode = color2.charCodeAt(0);
    if (charCode !== 114 && charCode !== 82)
      return;
    const match = color2.match(RGB.re);
    if (!match)
      return;
    const [, r, isRedPercentage, g, isGreenPercentage, b, isBluePercentage, a, isAlphaPercentage] = match;
    return ChannelsReusable.set({
      r: _.channel.clamp.r(isRedPercentage ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: _.channel.clamp.g(isGreenPercentage ? parseFloat(g) * 2.55 : parseFloat(g)),
      b: _.channel.clamp.b(isBluePercentage ? parseFloat(b) * 2.55 : parseFloat(b)),
      a: a ? _.channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, color2);
  },
  stringify: (channels2) => {
    const { r, g, b, a } = channels2;
    if (a < 1) {
      return `rgba(${_.lang.round(r)}, ${_.lang.round(g)}, ${_.lang.round(b)}, ${_.lang.round(a)})`;
    } else {
      return `rgb(${_.lang.round(r)}, ${_.lang.round(g)}, ${_.lang.round(b)})`;
    }
  }
};
const RGB$1 = RGB;
const Color = {
  /* VARIABLES */
  format: {
    keyword: Keyword$1,
    hex: Hex$1,
    rgb: RGB$1,
    rgba: RGB$1,
    hsl: HSL$1,
    hsla: HSL$1
  },
  /* API */
  parse: (color2) => {
    if (typeof color2 !== "string")
      return color2;
    const channels2 = Hex$1.parse(color2) || RGB$1.parse(color2) || HSL$1.parse(color2) || Keyword$1.parse(color2);
    if (channels2)
      return channels2;
    throw new Error(`Unsupported color format: "${color2}"`);
  },
  stringify: (channels2) => {
    if (!channels2.changed && channels2.color)
      return channels2.color;
    if (channels2.type.is(TYPE.HSL) || channels2.data.r === void 0) {
      return HSL$1.stringify(channels2);
    } else if (channels2.a < 1 || !Number.isInteger(channels2.r) || !Number.isInteger(channels2.g) || !Number.isInteger(channels2.b)) {
      return RGB$1.stringify(channels2);
    } else {
      return Hex$1.stringify(channels2);
    }
  }
};
const Color$1 = Color;
const change = (color2, channels2) => {
  const ch = Color$1.parse(color2);
  for (const c in channels2) {
    ch[c] = _.channel.clamp[c](channels2[c]);
  }
  return Color$1.stringify(ch);
};
const change$1 = change;
const rgba = (r, g, b = 0, a = 1) => {
  if (typeof r !== "number")
    return change$1(r, { a: g });
  const channels2 = ChannelsReusable.set({
    r: _.channel.clamp.r(r),
    g: _.channel.clamp.g(g),
    b: _.channel.clamp.b(b),
    a: _.channel.clamp.a(a)
  });
  return Color$1.stringify(channels2);
};
const rgba$1 = rgba;
const luminance = (color2) => {
  const { r, g, b } = Color$1.parse(color2);
  const luminance2 = 0.2126 * _.channel.toLinear(r) + 0.7152 * _.channel.toLinear(g) + 0.0722 * _.channel.toLinear(b);
  return _.lang.round(luminance2);
};
const luminance$1 = luminance;
const isLight = (color2) => {
  return luminance$1(color2) >= 0.5;
};
const isLight$1 = isLight;
const isDark = (color2) => {
  return !isLight$1(color2);
};
const isDark$1 = isDark;
const adjustChannel = (color2, channel2, amount) => {
  const channels2 = Color$1.parse(color2);
  const amountCurrent = channels2[channel2];
  const amountNext = _.channel.clamp[channel2](amountCurrent + amount);
  if (amountCurrent !== amountNext)
    channels2[channel2] = amountNext;
  return Color$1.stringify(channels2);
};
const adjustChannel$1 = adjustChannel;
const lighten = (color2, amount) => {
  return adjustChannel$1(color2, "l", amount);
};
const lighten$1 = lighten;
const darken = (color2, amount) => {
  return adjustChannel$1(color2, "l", -amount);
};
const darken$1 = darken;
const adjust = (color2, channels2) => {
  const ch = Color$1.parse(color2);
  const changes = {};
  for (const c in channels2) {
    if (!channels2[c])
      continue;
    changes[c] = ch[c] + channels2[c];
  }
  return change$1(color2, changes);
};
const adjust$1 = adjust;
const mix = (color1, color2, weight = 50) => {
  const { r: r1, g: g1, b: b1, a: a1 } = Color$1.parse(color1);
  const { r: r2, g: g2, b: b2, a: a2 } = Color$1.parse(color2);
  const weightScale = weight / 100;
  const weightNormalized = weightScale * 2 - 1;
  const alphaDelta = a1 - a2;
  const weight1combined = weightNormalized * alphaDelta === -1 ? weightNormalized : (weightNormalized + alphaDelta) / (1 + weightNormalized * alphaDelta);
  const weight1 = (weight1combined + 1) / 2;
  const weight2 = 1 - weight1;
  const r = r1 * weight1 + r2 * weight2;
  const g = g1 * weight1 + g2 * weight2;
  const b = b1 * weight1 + b2 * weight2;
  const a = a1 * weightScale + a2 * (1 - weightScale);
  return rgba$1(r, g, b, a);
};
const mix$1 = mix;
const invert = (color2, weight = 100) => {
  const inverse = Color$1.parse(color2);
  inverse.r = 255 - inverse.r;
  inverse.g = 255 - inverse.g;
  inverse.b = 255 - inverse.b;
  return mix$1(inverse, color2, weight);
};
const invert$1 = invert;
const mkBorder = (col, darkMode) => darkMode ? adjust$1(col, { s: -40, l: 10 }) : adjust$1(col, { s: -40, l: -10 });
const oldAttributeBackgroundColorOdd = "#ffffff";
const oldAttributeBackgroundColorEven = "#f2f2f2";
let Theme$4 = class Theme {
  constructor() {
    this.background = "#f4f4f4";
    this.primaryColor = "#fff4dd";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "#333";
    this.THEME_COLOR_LIMIT = 12;
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
  }
  updateColors() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
    this.secondaryColor = this.secondaryColor || adjust$1(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust$1(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#333";
    this.secondaryTextColor = this.secondaryTextColor || invert$1(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert$1(this.tertiaryColor);
    this.lineColor = this.lineColor || invert$1(this.background);
    this.arrowheadColor = this.arrowheadColor || invert$1(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken$1(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || "grey";
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken$1(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert$1(this.lineColor);
    this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
    this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || this.primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten$1(this.primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || this.tertiaryColor;
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust$1(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust$1(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust$1(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust$1(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust$1(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust$1(this.primaryColor, { h: 210, l: 150 });
    this.cScale9 = this.cScale9 || adjust$1(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust$1(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust$1(this.primaryColor, { h: 330 });
    if (this.darkMode) {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken$1(this["cScale" + i], 75);
      }
    } else {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken$1(this["cScale" + i], 25);
      }
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert$1(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten$1(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken$1(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust$1(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust$1(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    this.fillType0 = this.fillType0 || this.primaryColor;
    this.fillType1 = this.fillType1 || this.secondaryColor;
    this.fillType2 = this.fillType2 || adjust$1(this.primaryColor, { h: 64 });
    this.fillType3 = this.fillType3 || adjust$1(this.secondaryColor, { h: 64 });
    this.fillType4 = this.fillType4 || adjust$1(this.primaryColor, { h: -64 });
    this.fillType5 = this.fillType5 || adjust$1(this.secondaryColor, { h: -64 });
    this.fillType6 = this.fillType6 || adjust$1(this.primaryColor, { h: 128 });
    this.fillType7 = this.fillType7 || adjust$1(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || this.tertiaryColor;
    this.pie4 = this.pie4 || adjust$1(this.primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust$1(this.secondaryColor, { l: -10 });
    this.pie6 = this.pie6 || adjust$1(this.tertiaryColor, { l: -10 });
    this.pie7 = this.pie7 || adjust$1(this.primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust$1(this.primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust$1(this.primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust$1(this.primaryColor, { h: 60, l: -20 });
    this.pie11 = this.pie11 || adjust$1(this.primaryColor, { h: -60, l: -20 });
    this.pie12 = this.pie12 || adjust$1(this.primaryColor, { h: 120, l: -10 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust$1(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust$1(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust$1(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust$1(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust$1(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust$1(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || isDark$1(this.quadrant1Fill) ? lighten$1(this.quadrant1Fill) : darken$1(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
      titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken$1(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust$1(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust$1(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust$1(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust$1(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust$1(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten$1(this.git0, 25);
      this.git1 = lighten$1(this.git1, 25);
      this.git2 = lighten$1(this.git2, 25);
      this.git3 = lighten$1(this.git3, 25);
      this.git4 = lighten$1(this.git4, 25);
      this.git5 = lighten$1(this.git5, 25);
      this.git6 = lighten$1(this.git6, 25);
      this.git7 = lighten$1(this.git7, 25);
    } else {
      this.git0 = darken$1(this.git0, 25);
      this.git1 = darken$1(this.git1, 25);
      this.git2 = darken$1(this.git2, 25);
      this.git3 = darken$1(this.git3, 25);
      this.git4 = darken$1(this.git4, 25);
      this.git5 = darken$1(this.git5, 25);
      this.git6 = darken$1(this.git6, 25);
      this.git7 = darken$1(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert$1(this.git0);
    this.gitInv1 = this.gitInv1 || invert$1(this.git1);
    this.gitInv2 = this.gitInv2 || invert$1(this.git2);
    this.gitInv3 = this.gitInv3 || invert$1(this.git3);
    this.gitInv4 = this.gitInv4 || invert$1(this.git4);
    this.gitInv5 = this.gitInv5 || invert$1(this.git5);
    this.gitInv6 = this.gitInv6 || invert$1(this.git6);
    this.gitInv7 = this.gitInv7 || invert$1(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys = Object.keys(overrides);
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
const getThemeVariables$4 = (userOverrides) => {
  const theme2 = new Theme$4();
  theme2.calculate(userOverrides);
  return theme2;
};
let Theme$3 = class Theme2 {
  constructor() {
    this.background = "#333";
    this.primaryColor = "#1f2020";
    this.secondaryColor = lighten$1(this.primaryColor, 16);
    this.tertiaryColor = adjust$1(this.primaryColor, { h: -160 });
    this.primaryBorderColor = invert$1(this.background);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert$1(this.primaryColor);
    this.secondaryTextColor = invert$1(this.secondaryColor);
    this.tertiaryTextColor = invert$1(this.tertiaryColor);
    this.lineColor = invert$1(this.background);
    this.textColor = invert$1(this.background);
    this.mainBkg = "#1f2020";
    this.secondBkg = "calculated";
    this.mainContrastColor = "lightgrey";
    this.darkTextColor = lighten$1(invert$1("#323D47"), 10);
    this.lineColor = "calculated";
    this.border1 = "#81B1DB";
    this.border2 = rgba$1(255, 255, 255, 0.25);
    this.arrowheadColor = "calculated";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.labelBackground = "#181818";
    this.textColor = "#ccc";
    this.THEME_COLOR_LIMIT = 12;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "#F9FFFE";
    this.edgeLabelBackground = "calculated";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "calculated";
    this.actorLineColor = "calculated";
    this.signalColor = "calculated";
    this.signalTextColor = "calculated";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "calculated";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "calculated";
    this.activationBkgColor = "calculated";
    this.sequenceNumberColor = "black";
    this.sectionBkgColor = darken$1("#EAE8D9", 30);
    this.altSectionBkgColor = "calculated";
    this.sectionBkgColor2 = "#EAE8D9";
    this.excludeBkgColor = darken$1(this.sectionBkgColor, 10);
    this.taskBorderColor = rgba$1(255, 255, 255, 70);
    this.taskBkgColor = "calculated";
    this.taskTextColor = "calculated";
    this.taskTextLightColor = "calculated";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = rgba$1(255, 255, 255, 50);
    this.activeTaskBkgColor = "#81B1DB";
    this.gridColor = "calculated";
    this.doneTaskBkgColor = "calculated";
    this.doneTaskBorderColor = "grey";
    this.critBorderColor = "#E83737";
    this.critBkgColor = "#E83737";
    this.taskTextDarkColor = "calculated";
    this.todayLineColor = "#DB5757";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.labelColor = "calculated";
    this.errorBkgColor = "#a44141";
    this.errorTextColor = "#ddd";
  }
  updateColors() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.secondBkg = lighten$1(this.mainBkg, 16);
    this.lineColor = this.mainContrastColor;
    this.arrowheadColor = this.mainContrastColor;
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.edgeLabelBackground = lighten$1(this.labelBackground, 25);
    this.actorBorder = this.border1;
    this.actorBkg = this.mainBkg;
    this.actorTextColor = this.mainContrastColor;
    this.actorLineColor = this.mainContrastColor;
    this.signalColor = this.mainContrastColor;
    this.signalTextColor = this.mainContrastColor;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.mainContrastColor;
    this.loopTextColor = this.mainContrastColor;
    this.noteBorderColor = this.secondaryBorderColor;
    this.noteBkgColor = this.secondBkg;
    this.noteTextColor = this.secondaryTextColor;
    this.activationBorderColor = this.border1;
    this.activationBkgColor = this.secondBkg;
    this.altSectionBkgColor = this.background;
    this.taskBkgColor = lighten$1(this.mainBkg, 23);
    this.taskTextColor = this.darkTextColor;
    this.taskTextLightColor = this.mainContrastColor;
    this.taskTextOutsideColor = this.taskTextLightColor;
    this.gridColor = this.mainContrastColor;
    this.doneTaskBkgColor = this.mainContrastColor;
    this.taskTextDarkColor = this.darkTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#555";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = "#f4f4f4";
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust$1(this.primaryColor, { h: 64 });
    this.fillType3 = adjust$1(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust$1(this.primaryColor, { h: -64 });
    this.fillType5 = adjust$1(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust$1(this.primaryColor, { h: 128 });
    this.fillType7 = adjust$1(this.secondaryColor, { h: 128 });
    this.cScale1 = this.cScale1 || "#0b0000";
    this.cScale2 = this.cScale2 || "#4d1037";
    this.cScale3 = this.cScale3 || "#3f5258";
    this.cScale4 = this.cScale4 || "#4f2f1b";
    this.cScale5 = this.cScale5 || "#6e0a0a";
    this.cScale6 = this.cScale6 || "#3b0048";
    this.cScale7 = this.cScale7 || "#995a01";
    this.cScale8 = this.cScale8 || "#154706";
    this.cScale9 = this.cScale9 || "#161722";
    this.cScale10 = this.cScale10 || "#00296f";
    this.cScale11 = this.cScale11 || "#01629c";
    this.cScale12 = this.cScale12 || "#010029";
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust$1(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust$1(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust$1(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust$1(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust$1(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust$1(this.primaryColor, { h: 210 });
    this.cScale9 = this.cScale9 || adjust$1(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust$1(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust$1(this.primaryColor, { h: 330 });
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert$1(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScalePeer" + i] = this["cScalePeer" + i] || lighten$1(this["cScale" + i], 10);
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust$1(this.mainBkg, { h: 30, s: -30, l: -(-10 + i * 4) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust$1(this.mainBkg, { h: 30, s: -30, l: -(-7 + i * 4) });
    }
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["pie" + i] = this["cScale" + i];
    }
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust$1(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust$1(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust$1(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust$1(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust$1(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust$1(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || isDark$1(this.quadrant1Fill) ? lighten$1(this.quadrant1Fill) : darken$1(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
      titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    };
    this.classText = this.primaryTextColor;
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken$1(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = lighten$1(this.secondaryColor, 20);
    this.git1 = lighten$1(this.pie2 || this.secondaryColor, 20);
    this.git2 = lighten$1(this.pie3 || this.tertiaryColor, 20);
    this.git3 = lighten$1(this.pie4 || adjust$1(this.primaryColor, { h: -30 }), 20);
    this.git4 = lighten$1(this.pie5 || adjust$1(this.primaryColor, { h: -60 }), 20);
    this.git5 = lighten$1(this.pie6 || adjust$1(this.primaryColor, { h: -90 }), 10);
    this.git6 = lighten$1(this.pie7 || adjust$1(this.primaryColor, { h: 60 }), 10);
    this.git7 = lighten$1(this.pie8 || adjust$1(this.primaryColor, { h: 120 }), 20);
    this.gitInv0 = this.gitInv0 || invert$1(this.git0);
    this.gitInv1 = this.gitInv1 || invert$1(this.git1);
    this.gitInv2 = this.gitInv2 || invert$1(this.git2);
    this.gitInv3 = this.gitInv3 || invert$1(this.git3);
    this.gitInv4 = this.gitInv4 || invert$1(this.git4);
    this.gitInv5 = this.gitInv5 || invert$1(this.git5);
    this.gitInv6 = this.gitInv6 || invert$1(this.git6);
    this.gitInv7 = this.gitInv7 || invert$1(this.git7);
    this.gitBranchLabel0 = this.gitBranchLabel0 || invert$1(this.labelTextColor);
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || invert$1(this.labelTextColor);
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || lighten$1(this.background, 12);
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || lighten$1(this.background, 2);
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys = Object.keys(overrides);
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
const getThemeVariables$3 = (userOverrides) => {
  const theme2 = new Theme$3();
  theme2.calculate(userOverrides);
  return theme2;
};
let Theme$2 = class Theme3 {
  constructor() {
    this.background = "#f4f4f4";
    this.primaryColor = "#ECECFF";
    this.secondaryColor = adjust$1(this.primaryColor, { h: 120 });
    this.secondaryColor = "#ffffde";
    this.tertiaryColor = adjust$1(this.primaryColor, { h: -160 });
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert$1(this.primaryColor);
    this.secondaryTextColor = invert$1(this.secondaryColor);
    this.tertiaryTextColor = invert$1(this.tertiaryColor);
    this.lineColor = invert$1(this.background);
    this.textColor = invert$1(this.background);
    this.background = "white";
    this.mainBkg = "#ECECFF";
    this.secondBkg = "#ffffde";
    this.lineColor = "#333333";
    this.border1 = "#9370DB";
    this.border2 = "#aaaa33";
    this.arrowheadColor = "#333333";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.labelBackground = "#e8e8e8";
    this.textColor = "#333";
    this.THEME_COLOR_LIMIT = 12;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "calculated";
    this.edgeLabelBackground = "calculated";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "black";
    this.actorLineColor = "grey";
    this.signalColor = "calculated";
    this.signalTextColor = "calculated";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "calculated";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "#666";
    this.activationBkgColor = "#f4f4f4";
    this.sequenceNumberColor = "white";
    this.sectionBkgColor = "calculated";
    this.altSectionBkgColor = "calculated";
    this.sectionBkgColor2 = "calculated";
    this.excludeBkgColor = "#eeeeee";
    this.taskBorderColor = "calculated";
    this.taskBkgColor = "calculated";
    this.taskTextLightColor = "calculated";
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextDarkColor = "calculated";
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.taskTextClickableColor = "calculated";
    this.activeTaskBorderColor = "calculated";
    this.activeTaskBkgColor = "calculated";
    this.gridColor = "calculated";
    this.doneTaskBkgColor = "calculated";
    this.doneTaskBorderColor = "calculated";
    this.critBorderColor = "calculated";
    this.critBkgColor = "calculated";
    this.todayLineColor = "calculated";
    this.sectionBkgColor = rgba$1(102, 102, 255, 0.49);
    this.altSectionBkgColor = "white";
    this.sectionBkgColor2 = "#fff400";
    this.taskBorderColor = "#534fbc";
    this.taskBkgColor = "#8a90dd";
    this.taskTextLightColor = "white";
    this.taskTextColor = "calculated";
    this.taskTextDarkColor = "black";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = "#534fbc";
    this.activeTaskBkgColor = "#bfc7ff";
    this.gridColor = "lightgrey";
    this.doneTaskBkgColor = "lightgrey";
    this.doneTaskBorderColor = "grey";
    this.critBorderColor = "#ff8888";
    this.critBkgColor = "red";
    this.todayLineColor = "red";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.labelColor = "black";
    this.errorBkgColor = "#552222";
    this.errorTextColor = "#552222";
    this.updateColors();
  }
  updateColors() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust$1(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust$1(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust$1(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust$1(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust$1(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust$1(this.primaryColor, { h: 210 });
    this.cScale9 = this.cScale9 || adjust$1(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust$1(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust$1(this.primaryColor, { h: 330 });
    this["cScalePeer1"] = this["cScalePeer1"] || darken$1(this.secondaryColor, 45);
    this["cScalePeer2"] = this["cScalePeer2"] || darken$1(this.tertiaryColor, 40);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScale" + i] = darken$1(this["cScale" + i], 10);
      this["cScalePeer" + i] = this["cScalePeer" + i] || darken$1(this["cScale" + i], 25);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || adjust$1(this["cScale" + i], { h: 180 });
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust$1(this.mainBkg, { h: 30, l: -(5 + i * 5) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust$1(this.mainBkg, { h: 30, l: -(7 + i * 5) });
    }
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    if (this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || invert$1(this.labelTextColor);
      this.cScaleLabel3 = this.cScaleLabel3 || invert$1(this.labelTextColor);
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.labelTextColor;
      }
    }
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.titleColor = this.textColor;
    this.edgeLabelBackground = this.labelBackground;
    this.actorBorder = lighten$1(this.border1, 23);
    this.actorBkg = this.mainBkg;
    this.labelBoxBkgColor = this.actorBkg;
    this.signalColor = this.textColor;
    this.signalTextColor = this.textColor;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.actorTextColor;
    this.loopTextColor = this.actorTextColor;
    this.noteBorderColor = this.border2;
    this.noteTextColor = this.actorTextColor;
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.specialStateColor = this.lineColor;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.classText = this.primaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust$1(this.primaryColor, { h: 64 });
    this.fillType3 = adjust$1(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust$1(this.primaryColor, { h: -64 });
    this.fillType5 = adjust$1(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust$1(this.primaryColor, { h: 128 });
    this.fillType7 = adjust$1(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || adjust$1(this.tertiaryColor, { l: -40 });
    this.pie4 = this.pie4 || adjust$1(this.primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust$1(this.secondaryColor, { l: -30 });
    this.pie6 = this.pie6 || adjust$1(this.tertiaryColor, { l: -20 });
    this.pie7 = this.pie7 || adjust$1(this.primaryColor, { h: 60, l: -20 });
    this.pie8 = this.pie8 || adjust$1(this.primaryColor, { h: -60, l: -40 });
    this.pie9 = this.pie9 || adjust$1(this.primaryColor, { h: 120, l: -40 });
    this.pie10 = this.pie10 || adjust$1(this.primaryColor, { h: 60, l: -40 });
    this.pie11 = this.pie11 || adjust$1(this.primaryColor, { h: -90, l: -40 });
    this.pie12 = this.pie12 || adjust$1(this.primaryColor, { h: 120, l: -30 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust$1(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust$1(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust$1(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust$1(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust$1(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust$1(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || isDark$1(this.quadrant1Fill) ? lighten$1(this.quadrant1Fill) : darken$1(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
      titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust$1(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust$1(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust$1(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust$1(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust$1(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten$1(this.git0, 25);
      this.git1 = lighten$1(this.git1, 25);
      this.git2 = lighten$1(this.git2, 25);
      this.git3 = lighten$1(this.git3, 25);
      this.git4 = lighten$1(this.git4, 25);
      this.git5 = lighten$1(this.git5, 25);
      this.git6 = lighten$1(this.git6, 25);
      this.git7 = lighten$1(this.git7, 25);
    } else {
      this.git0 = darken$1(this.git0, 25);
      this.git1 = darken$1(this.git1, 25);
      this.git2 = darken$1(this.git2, 25);
      this.git3 = darken$1(this.git3, 25);
      this.git4 = darken$1(this.git4, 25);
      this.git5 = darken$1(this.git5, 25);
      this.git6 = darken$1(this.git6, 25);
      this.git7 = darken$1(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || darken$1(invert$1(this.git0), 25);
    this.gitInv1 = this.gitInv1 || invert$1(this.git1);
    this.gitInv2 = this.gitInv2 || invert$1(this.git2);
    this.gitInv3 = this.gitInv3 || invert$1(this.git3);
    this.gitInv4 = this.gitInv4 || invert$1(this.git4);
    this.gitInv5 = this.gitInv5 || invert$1(this.git5);
    this.gitInv6 = this.gitInv6 || invert$1(this.git6);
    this.gitInv7 = this.gitInv7 || invert$1(this.git7);
    this.gitBranchLabel0 = this.gitBranchLabel0 || invert$1(this.labelTextColor);
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || invert$1(this.labelTextColor);
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys = Object.keys(overrides);
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
const getThemeVariables$2 = (userOverrides) => {
  const theme2 = new Theme$2();
  theme2.calculate(userOverrides);
  return theme2;
};
let Theme$1 = class Theme4 {
  constructor() {
    this.background = "#f4f4f4";
    this.primaryColor = "#cde498";
    this.secondaryColor = "#cdffb2";
    this.background = "white";
    this.mainBkg = "#cde498";
    this.secondBkg = "#cdffb2";
    this.lineColor = "green";
    this.border1 = "#13540c";
    this.border2 = "#6eaa49";
    this.arrowheadColor = "green";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.tertiaryColor = lighten$1("#cde498", 10);
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert$1(this.primaryColor);
    this.secondaryTextColor = invert$1(this.secondaryColor);
    this.tertiaryTextColor = invert$1(this.primaryColor);
    this.lineColor = invert$1(this.background);
    this.textColor = invert$1(this.background);
    this.THEME_COLOR_LIMIT = 12;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "#333";
    this.edgeLabelBackground = "#e8e8e8";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "black";
    this.actorLineColor = "grey";
    this.signalColor = "#333";
    this.signalTextColor = "#333";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "#326932";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "#666";
    this.activationBkgColor = "#f4f4f4";
    this.sequenceNumberColor = "white";
    this.sectionBkgColor = "#6eaa49";
    this.altSectionBkgColor = "white";
    this.sectionBkgColor2 = "#6eaa49";
    this.excludeBkgColor = "#eeeeee";
    this.taskBorderColor = "calculated";
    this.taskBkgColor = "#487e3a";
    this.taskTextLightColor = "white";
    this.taskTextColor = "calculated";
    this.taskTextDarkColor = "black";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = "calculated";
    this.activeTaskBkgColor = "calculated";
    this.gridColor = "lightgrey";
    this.doneTaskBkgColor = "lightgrey";
    this.doneTaskBorderColor = "grey";
    this.critBorderColor = "#ff8888";
    this.critBkgColor = "red";
    this.todayLineColor = "red";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.labelColor = "black";
    this.errorBkgColor = "#552222";
    this.errorTextColor = "#552222";
  }
  updateColors() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.actorBorder = darken$1(this.mainBkg, 20);
    this.actorBkg = this.mainBkg;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelTextColor = this.actorTextColor;
    this.loopTextColor = this.actorTextColor;
    this.noteBorderColor = this.border2;
    this.noteTextColor = this.actorTextColor;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust$1(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust$1(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust$1(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust$1(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust$1(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust$1(this.primaryColor, { h: 210 });
    this.cScale9 = this.cScale9 || adjust$1(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust$1(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust$1(this.primaryColor, { h: 330 });
    this["cScalePeer1"] = this["cScalePeer1"] || darken$1(this.secondaryColor, 45);
    this["cScalePeer2"] = this["cScalePeer2"] || darken$1(this.tertiaryColor, 40);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScale" + i] = darken$1(this["cScale" + i], 10);
      this["cScalePeer" + i] = this["cScalePeer" + i] || darken$1(this["cScale" + i], 25);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || adjust$1(this["cScale" + i], { h: 180 });
    }
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust$1(this.mainBkg, { h: 30, s: -30, l: -(5 + i * 5) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust$1(this.mainBkg, { h: 30, s: -30, l: -(8 + i * 5) });
    }
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.taskBorderColor = this.border1;
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.activeTaskBorderColor = this.taskBorderColor;
    this.activeTaskBkgColor = this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = this.lineColor;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.classText = this.primaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust$1(this.primaryColor, { h: 64 });
    this.fillType3 = adjust$1(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust$1(this.primaryColor, { h: -64 });
    this.fillType5 = adjust$1(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust$1(this.primaryColor, { h: 128 });
    this.fillType7 = adjust$1(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || this.tertiaryColor;
    this.pie4 = this.pie4 || adjust$1(this.primaryColor, { l: -30 });
    this.pie5 = this.pie5 || adjust$1(this.secondaryColor, { l: -30 });
    this.pie6 = this.pie6 || adjust$1(this.tertiaryColor, { h: 40, l: -40 });
    this.pie7 = this.pie7 || adjust$1(this.primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust$1(this.primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust$1(this.primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust$1(this.primaryColor, { h: 60, l: -50 });
    this.pie11 = this.pie11 || adjust$1(this.primaryColor, { h: -60, l: -50 });
    this.pie12 = this.pie12 || adjust$1(this.primaryColor, { h: 120, l: -50 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust$1(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust$1(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust$1(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust$1(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust$1(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust$1(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || isDark$1(this.quadrant1Fill) ? lighten$1(this.quadrant1Fill) : darken$1(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
      titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust$1(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust$1(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust$1(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust$1(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust$1(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten$1(this.git0, 25);
      this.git1 = lighten$1(this.git1, 25);
      this.git2 = lighten$1(this.git2, 25);
      this.git3 = lighten$1(this.git3, 25);
      this.git4 = lighten$1(this.git4, 25);
      this.git5 = lighten$1(this.git5, 25);
      this.git6 = lighten$1(this.git6, 25);
      this.git7 = lighten$1(this.git7, 25);
    } else {
      this.git0 = darken$1(this.git0, 25);
      this.git1 = darken$1(this.git1, 25);
      this.git2 = darken$1(this.git2, 25);
      this.git3 = darken$1(this.git3, 25);
      this.git4 = darken$1(this.git4, 25);
      this.git5 = darken$1(this.git5, 25);
      this.git6 = darken$1(this.git6, 25);
      this.git7 = darken$1(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert$1(this.git0);
    this.gitInv1 = this.gitInv1 || invert$1(this.git1);
    this.gitInv2 = this.gitInv2 || invert$1(this.git2);
    this.gitInv3 = this.gitInv3 || invert$1(this.git3);
    this.gitInv4 = this.gitInv4 || invert$1(this.git4);
    this.gitInv5 = this.gitInv5 || invert$1(this.git5);
    this.gitInv6 = this.gitInv6 || invert$1(this.git6);
    this.gitInv7 = this.gitInv7 || invert$1(this.git7);
    this.gitBranchLabel0 = this.gitBranchLabel0 || invert$1(this.labelTextColor);
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || invert$1(this.labelTextColor);
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys = Object.keys(overrides);
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
const getThemeVariables$1 = (userOverrides) => {
  const theme2 = new Theme$1();
  theme2.calculate(userOverrides);
  return theme2;
};
class Theme5 {
  constructor() {
    this.primaryColor = "#eee";
    this.contrast = "#707070";
    this.secondaryColor = lighten$1(this.contrast, 55);
    this.background = "#ffffff";
    this.tertiaryColor = adjust$1(this.primaryColor, { h: -160 });
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert$1(this.primaryColor);
    this.secondaryTextColor = invert$1(this.secondaryColor);
    this.tertiaryTextColor = invert$1(this.tertiaryColor);
    this.lineColor = invert$1(this.background);
    this.textColor = invert$1(this.background);
    this.mainBkg = "#eee";
    this.secondBkg = "calculated";
    this.lineColor = "#666";
    this.border1 = "#999";
    this.border2 = "calculated";
    this.note = "#ffa";
    this.text = "#333";
    this.critical = "#d42";
    this.done = "#bbb";
    this.arrowheadColor = "#333333";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.THEME_COLOR_LIMIT = 12;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "calculated";
    this.edgeLabelBackground = "white";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "calculated";
    this.actorLineColor = "calculated";
    this.signalColor = "calculated";
    this.signalTextColor = "calculated";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "calculated";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "calculated";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "#666";
    this.activationBkgColor = "#f4f4f4";
    this.sequenceNumberColor = "white";
    this.sectionBkgColor = "calculated";
    this.altSectionBkgColor = "white";
    this.sectionBkgColor2 = "calculated";
    this.excludeBkgColor = "#eeeeee";
    this.taskBorderColor = "calculated";
    this.taskBkgColor = "calculated";
    this.taskTextLightColor = "white";
    this.taskTextColor = "calculated";
    this.taskTextDarkColor = "calculated";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = "calculated";
    this.activeTaskBkgColor = "calculated";
    this.gridColor = "calculated";
    this.doneTaskBkgColor = "calculated";
    this.doneTaskBorderColor = "calculated";
    this.critBkgColor = "calculated";
    this.critBorderColor = "calculated";
    this.todayLineColor = "calculated";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.labelColor = "black";
    this.errorBkgColor = "#552222";
    this.errorTextColor = "#552222";
  }
  updateColors() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.secondBkg = lighten$1(this.contrast, 55);
    this.border2 = this.contrast;
    this.actorBorder = lighten$1(this.border1, 23);
    this.actorBkg = this.mainBkg;
    this.actorTextColor = this.text;
    this.actorLineColor = this.lineColor;
    this.signalColor = this.text;
    this.signalTextColor = this.text;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.text;
    this.loopTextColor = this.text;
    this.noteBorderColor = "#999";
    this.noteBkgColor = "#666";
    this.noteTextColor = "#fff";
    this.cScale0 = this.cScale0 || "#555";
    this.cScale1 = this.cScale1 || "#F4F4F4";
    this.cScale2 = this.cScale2 || "#555";
    this.cScale3 = this.cScale3 || "#BBB";
    this.cScale4 = this.cScale4 || "#777";
    this.cScale5 = this.cScale5 || "#999";
    this.cScale6 = this.cScale6 || "#DDD";
    this.cScale7 = this.cScale7 || "#FFF";
    this.cScale8 = this.cScale8 || "#DDD";
    this.cScale9 = this.cScale9 || "#BBB";
    this.cScale10 = this.cScale10 || "#999";
    this.cScale11 = this.cScale11 || "#777";
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert$1(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten$1(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken$1(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this["cScaleLabel0"] = this["cScaleLabel0"] || this.cScale1;
    this["cScaleLabel2"] = this["cScaleLabel2"] || this.cScale1;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust$1(this.mainBkg, { l: -(5 + i * 5) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust$1(this.mainBkg, { l: -(8 + i * 5) });
    }
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.titleColor = this.text;
    this.sectionBkgColor = lighten$1(this.contrast, 30);
    this.sectionBkgColor2 = lighten$1(this.contrast, 30);
    this.taskBorderColor = darken$1(this.contrast, 10);
    this.taskBkgColor = this.contrast;
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextDarkColor = this.text;
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.activeTaskBorderColor = this.taskBorderColor;
    this.activeTaskBkgColor = this.mainBkg;
    this.gridColor = lighten$1(this.border1, 30);
    this.doneTaskBkgColor = this.done;
    this.doneTaskBorderColor = this.lineColor;
    this.critBkgColor = this.critical;
    this.critBorderColor = darken$1(this.critBkgColor, 10);
    this.todayLineColor = this.critBkgColor;
    this.transitionColor = this.transitionColor || "#000";
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f4f4f4";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.stateBorder = this.stateBorder || "#000";
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = "#222";
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.classText = this.primaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust$1(this.primaryColor, { h: 64 });
    this.fillType3 = adjust$1(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust$1(this.primaryColor, { h: -64 });
    this.fillType5 = adjust$1(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust$1(this.primaryColor, { h: 128 });
    this.fillType7 = adjust$1(this.secondaryColor, { h: 128 });
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["pie" + i] = this["cScale" + i];
    }
    this.pie12 = this.pie0;
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust$1(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust$1(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust$1(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust$1(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust$1(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust$1(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || isDark$1(this.quadrant1Fill) ? lighten$1(this.quadrant1Fill) : darken$1(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
      titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = darken$1(this.pie1, 25) || this.primaryColor;
    this.git1 = this.pie2 || this.secondaryColor;
    this.git2 = this.pie3 || this.tertiaryColor;
    this.git3 = this.pie4 || adjust$1(this.primaryColor, { h: -30 });
    this.git4 = this.pie5 || adjust$1(this.primaryColor, { h: -60 });
    this.git5 = this.pie6 || adjust$1(this.primaryColor, { h: -90 });
    this.git6 = this.pie7 || adjust$1(this.primaryColor, { h: 60 });
    this.git7 = this.pie8 || adjust$1(this.primaryColor, { h: 120 });
    this.gitInv0 = this.gitInv0 || invert$1(this.git0);
    this.gitInv1 = this.gitInv1 || invert$1(this.git1);
    this.gitInv2 = this.gitInv2 || invert$1(this.git2);
    this.gitInv3 = this.gitInv3 || invert$1(this.git3);
    this.gitInv4 = this.gitInv4 || invert$1(this.git4);
    this.gitInv5 = this.gitInv5 || invert$1(this.git5);
    this.gitInv6 = this.gitInv6 || invert$1(this.git6);
    this.gitInv7 = this.gitInv7 || invert$1(this.git7);
    this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
    this.gitBranchLabel0 = this.branchLabelColor;
    this.gitBranchLabel1 = "white";
    this.gitBranchLabel2 = this.branchLabelColor;
    this.gitBranchLabel3 = "white";
    this.gitBranchLabel4 = this.branchLabelColor;
    this.gitBranchLabel5 = this.branchLabelColor;
    this.gitBranchLabel6 = this.branchLabelColor;
    this.gitBranchLabel7 = this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys = Object.keys(overrides);
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
  }
}
const getThemeVariables = (userOverrides) => {
  const theme2 = new Theme5();
  theme2.calculate(userOverrides);
  return theme2;
};
const theme$1 = {
  base: {
    getThemeVariables: getThemeVariables$4
  },
  dark: {
    getThemeVariables: getThemeVariables$3
  },
  default: {
    getThemeVariables: getThemeVariables$2
  },
  forest: {
    getThemeVariables: getThemeVariables$1
  },
  neutral: {
    getThemeVariables
  }
};
const defaultConfigJson = {
  "flowchart": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "diagramPadding": 8,
    "htmlLabels": true,
    "nodeSpacing": 50,
    "rankSpacing": 50,
    "curve": "basis",
    "padding": 15,
    "defaultRenderer": "dagre-wrapper",
    "wrappingWidth": 200
  },
  "sequence": {
    "useMaxWidth": true,
    "hideUnusedParticipants": false,
    "activationWidth": 10,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "actorMargin": 50,
    "width": 150,
    "height": 65,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35,
    "messageAlign": "center",
    "mirrorActors": true,
    "forceMenus": false,
    "bottomMarginAdj": 1,
    "rightAngles": false,
    "showSequenceNumbers": false,
    "actorFontSize": 14,
    "actorFontFamily": '"Open Sans", sans-serif',
    "actorFontWeight": 400,
    "noteFontSize": 14,
    "noteFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
    "noteFontWeight": 400,
    "noteAlign": "center",
    "messageFontSize": 16,
    "messageFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
    "messageFontWeight": 400,
    "wrap": false,
    "wrapPadding": 10,
    "labelBoxWidth": 50,
    "labelBoxHeight": 20
  },
  "gantt": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "barHeight": 20,
    "barGap": 4,
    "topPadding": 50,
    "rightPadding": 75,
    "leftPadding": 75,
    "gridLineStartPadding": 35,
    "fontSize": 11,
    "sectionFontSize": 11,
    "numberSectionStyles": 4,
    "axisFormat": "%Y-%m-%d",
    "topAxis": false,
    "displayMode": "",
    "weekday": "sunday"
  },
  "journey": {
    "useMaxWidth": true,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "leftMargin": 150,
    "width": 150,
    "height": 50,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35,
    "messageAlign": "center",
    "bottomMarginAdj": 1,
    "rightAngles": false,
    "taskFontSize": 14,
    "taskFontFamily": '"Open Sans", sans-serif',
    "taskMargin": 50,
    "activationWidth": 10,
    "textPlacement": "fo",
    "actorColours": [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    "sectionFills": [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    "sectionColours": [
      "#fff"
    ]
  },
  "class": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "arrowMarkerAbsolute": false,
    "dividerMargin": 10,
    "padding": 5,
    "textHeight": 10,
    "defaultRenderer": "dagre-wrapper",
    "htmlLabels": false
  },
  "state": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "dividerMargin": 10,
    "sizeUnit": 5,
    "padding": 8,
    "textHeight": 10,
    "titleShift": -15,
    "noteMargin": 10,
    "forkWidth": 70,
    "forkHeight": 7,
    "miniPadding": 2,
    "fontSizeFactor": 5.02,
    "fontSize": 24,
    "labelHeight": 16,
    "edgeLengthFactor": "20",
    "compositTitleSize": 35,
    "radius": 5,
    "defaultRenderer": "dagre-wrapper"
  },
  "er": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "diagramPadding": 20,
    "layoutDirection": "TB",
    "minEntityWidth": 100,
    "minEntityHeight": 75,
    "entityPadding": 15,
    "stroke": "gray",
    "fill": "honeydew",
    "fontSize": 12
  },
  "pie": {
    "useMaxWidth": true,
    "textPosition": 0.75
  },
  "quadrantChart": {
    "useMaxWidth": true,
    "chartWidth": 500,
    "chartHeight": 500,
    "titleFontSize": 20,
    "titlePadding": 10,
    "quadrantPadding": 5,
    "xAxisLabelPadding": 5,
    "yAxisLabelPadding": 5,
    "xAxisLabelFontSize": 16,
    "yAxisLabelFontSize": 16,
    "quadrantLabelFontSize": 16,
    "quadrantTextTopPadding": 5,
    "pointTextPadding": 5,
    "pointLabelFontSize": 12,
    "pointRadius": 5,
    "xAxisPosition": "top",
    "yAxisPosition": "left",
    "quadrantInternalBorderStrokeWidth": 1,
    "quadrantExternalBorderStrokeWidth": 2
  },
  "xyChart": {
    "useMaxWidth": true,
    "width": 700,
    "height": 500,
    "titleFontSize": 20,
    "titlePadding": 10,
    "showTitle": true,
    "xAxis": {
      "$ref": "#/$defs/XYChartAxisConfig",
      "showLabel": true,
      "labelFontSize": 14,
      "labelPadding": 5,
      "showTitle": true,
      "titleFontSize": 16,
      "titlePadding": 5,
      "showTick": true,
      "tickLength": 5,
      "tickWidth": 2,
      "showAxisLine": true,
      "axisLineWidth": 2
    },
    "yAxis": {
      "$ref": "#/$defs/XYChartAxisConfig",
      "showLabel": true,
      "labelFontSize": 14,
      "labelPadding": 5,
      "showTitle": true,
      "titleFontSize": 16,
      "titlePadding": 5,
      "showTick": true,
      "tickLength": 5,
      "tickWidth": 2,
      "showAxisLine": true,
      "axisLineWidth": 2
    },
    "chartOrientation": "vertical",
    "plotReservedSpacePercent": 50
  },
  "requirement": {
    "useMaxWidth": true,
    "rect_fill": "#f9f9f9",
    "text_color": "#333",
    "rect_border_size": "0.5px",
    "rect_border_color": "#bbb",
    "rect_min_width": 200,
    "rect_min_height": 200,
    "fontSize": 14,
    "rect_padding": 10,
    "line_height": 20
  },
  "mindmap": {
    "useMaxWidth": true,
    "padding": 10,
    "maxNodeWidth": 200
  },
  "timeline": {
    "useMaxWidth": true,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "leftMargin": 150,
    "width": 150,
    "height": 50,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35,
    "messageAlign": "center",
    "bottomMarginAdj": 1,
    "rightAngles": false,
    "taskFontSize": 14,
    "taskFontFamily": '"Open Sans", sans-serif',
    "taskMargin": 50,
    "activationWidth": 10,
    "textPlacement": "fo",
    "actorColours": [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    "sectionFills": [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    "sectionColours": [
      "#fff"
    ],
    "disableMulticolor": false
  },
  "gitGraph": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "diagramPadding": 8,
    "nodeLabel": {
      "width": 75,
      "height": 100,
      "x": -25,
      "y": 0
    },
    "mainBranchName": "main",
    "mainBranchOrder": 0,
    "showCommitLabel": true,
    "showBranches": true,
    "rotateCommitLabel": true,
    "arrowMarkerAbsolute": false
  },
  "c4": {
    "useMaxWidth": true,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "c4ShapeMargin": 50,
    "c4ShapePadding": 20,
    "width": 216,
    "height": 60,
    "boxMargin": 10,
    "c4ShapeInRow": 4,
    "nextLinePaddingX": 0,
    "c4BoundaryInRow": 2,
    "personFontSize": 14,
    "personFontFamily": '"Open Sans", sans-serif',
    "personFontWeight": "normal",
    "external_personFontSize": 14,
    "external_personFontFamily": '"Open Sans", sans-serif',
    "external_personFontWeight": "normal",
    "systemFontSize": 14,
    "systemFontFamily": '"Open Sans", sans-serif',
    "systemFontWeight": "normal",
    "external_systemFontSize": 14,
    "external_systemFontFamily": '"Open Sans", sans-serif',
    "external_systemFontWeight": "normal",
    "system_dbFontSize": 14,
    "system_dbFontFamily": '"Open Sans", sans-serif',
    "system_dbFontWeight": "normal",
    "external_system_dbFontSize": 14,
    "external_system_dbFontFamily": '"Open Sans", sans-serif',
    "external_system_dbFontWeight": "normal",
    "system_queueFontSize": 14,
    "system_queueFontFamily": '"Open Sans", sans-serif',
    "system_queueFontWeight": "normal",
    "external_system_queueFontSize": 14,
    "external_system_queueFontFamily": '"Open Sans", sans-serif',
    "external_system_queueFontWeight": "normal",
    "boundaryFontSize": 14,
    "boundaryFontFamily": '"Open Sans", sans-serif',
    "boundaryFontWeight": "normal",
    "messageFontSize": 12,
    "messageFontFamily": '"Open Sans", sans-serif',
    "messageFontWeight": "normal",
    "containerFontSize": 14,
    "containerFontFamily": '"Open Sans", sans-serif',
    "containerFontWeight": "normal",
    "external_containerFontSize": 14,
    "external_containerFontFamily": '"Open Sans", sans-serif',
    "external_containerFontWeight": "normal",
    "container_dbFontSize": 14,
    "container_dbFontFamily": '"Open Sans", sans-serif',
    "container_dbFontWeight": "normal",
    "external_container_dbFontSize": 14,
    "external_container_dbFontFamily": '"Open Sans", sans-serif',
    "external_container_dbFontWeight": "normal",
    "container_queueFontSize": 14,
    "container_queueFontFamily": '"Open Sans", sans-serif',
    "container_queueFontWeight": "normal",
    "external_container_queueFontSize": 14,
    "external_container_queueFontFamily": '"Open Sans", sans-serif',
    "external_container_queueFontWeight": "normal",
    "componentFontSize": 14,
    "componentFontFamily": '"Open Sans", sans-serif',
    "componentFontWeight": "normal",
    "external_componentFontSize": 14,
    "external_componentFontFamily": '"Open Sans", sans-serif',
    "external_componentFontWeight": "normal",
    "component_dbFontSize": 14,
    "component_dbFontFamily": '"Open Sans", sans-serif',
    "component_dbFontWeight": "normal",
    "external_component_dbFontSize": 14,
    "external_component_dbFontFamily": '"Open Sans", sans-serif',
    "external_component_dbFontWeight": "normal",
    "component_queueFontSize": 14,
    "component_queueFontFamily": '"Open Sans", sans-serif',
    "component_queueFontWeight": "normal",
    "external_component_queueFontSize": 14,
    "external_component_queueFontFamily": '"Open Sans", sans-serif',
    "external_component_queueFontWeight": "normal",
    "wrap": true,
    "wrapPadding": 10,
    "person_bg_color": "#08427B",
    "person_border_color": "#073B6F",
    "external_person_bg_color": "#686868",
    "external_person_border_color": "#8A8A8A",
    "system_bg_color": "#1168BD",
    "system_border_color": "#3C7FC0",
    "system_db_bg_color": "#1168BD",
    "system_db_border_color": "#3C7FC0",
    "system_queue_bg_color": "#1168BD",
    "system_queue_border_color": "#3C7FC0",
    "external_system_bg_color": "#999999",
    "external_system_border_color": "#8A8A8A",
    "external_system_db_bg_color": "#999999",
    "external_system_db_border_color": "#8A8A8A",
    "external_system_queue_bg_color": "#999999",
    "external_system_queue_border_color": "#8A8A8A",
    "container_bg_color": "#438DD5",
    "container_border_color": "#3C7FC0",
    "container_db_bg_color": "#438DD5",
    "container_db_border_color": "#3C7FC0",
    "container_queue_bg_color": "#438DD5",
    "container_queue_border_color": "#3C7FC0",
    "external_container_bg_color": "#B3B3B3",
    "external_container_border_color": "#A6A6A6",
    "external_container_db_bg_color": "#B3B3B3",
    "external_container_db_border_color": "#A6A6A6",
    "external_container_queue_bg_color": "#B3B3B3",
    "external_container_queue_border_color": "#A6A6A6",
    "component_bg_color": "#85BBF0",
    "component_border_color": "#78A8D8",
    "component_db_bg_color": "#85BBF0",
    "component_db_border_color": "#78A8D8",
    "component_queue_bg_color": "#85BBF0",
    "component_queue_border_color": "#78A8D8",
    "external_component_bg_color": "#CCCCCC",
    "external_component_border_color": "#BFBFBF",
    "external_component_db_bg_color": "#CCCCCC",
    "external_component_db_border_color": "#BFBFBF",
    "external_component_queue_bg_color": "#CCCCCC",
    "external_component_queue_border_color": "#BFBFBF"
  },
  "sankey": {
    "useMaxWidth": true,
    "width": 600,
    "height": 400,
    "linkColor": "gradient",
    "nodeAlignment": "justify",
    "showValues": true,
    "prefix": "",
    "suffix": ""
  },
  "theme": "default",
  "maxTextSize": 5e4,
  "maxEdges": 500,
  "darkMode": false,
  "fontFamily": '"trebuchet ms", verdana, arial, sans-serif;',
  "logLevel": 5,
  "securityLevel": "strict",
  "startOnLoad": true,
  "arrowMarkerAbsolute": false,
  "secure": [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "maxEdges"
  ],
  "deterministicIds": false,
  "fontSize": 16
};
const config = {
  ...defaultConfigJson,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: theme$1["default"].getThemeVariables(),
  sequence: {
    ...defaultConfigJson.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...defaultConfigJson.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...defaultConfigJson.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...defaultConfigJson.pie,
    useWidth: 984
  },
  xyChart: {
    ...defaultConfigJson.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...defaultConfigJson.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...defaultConfigJson.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: false
  },
  sankey: {
    ...defaultConfigJson.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: false
  }
};
const keyify = (obj, prefix = "") => Object.keys(obj).reduce((res, el) => {
  if (Array.isArray(obj[el])) {
    return res;
  } else if (typeof obj[el] === "object" && obj[el] !== null) {
    return [...res, prefix + el, ...keyify(obj[el], "")];
  }
  return [...res, prefix + el];
}, []);
const configKeys = new Set(keyify(config, ""));
const defaultConfig$2 = config;
const sanitizeDirective = (args) => {
  log$1.debug("sanitizeDirective called with", args);
  if (typeof args !== "object" || args == null) {
    return;
  }
  if (Array.isArray(args)) {
    args.forEach((arg) => sanitizeDirective(arg));
    return;
  }
  for (const key of Object.keys(args)) {
    log$1.debug("Checking key", key);
    if (key.startsWith("__") || key.includes("proto") || key.includes("constr") || !configKeys.has(key) || args[key] == null) {
      log$1.debug("sanitize deleting key: ", key);
      delete args[key];
      continue;
    }
    if (typeof args[key] === "object") {
      log$1.debug("sanitizing object", key);
      sanitizeDirective(args[key]);
      continue;
    }
    const cssMatchers = ["themeCSS", "fontFamily", "altFontFamily"];
    for (const cssKey of cssMatchers) {
      if (key.includes(cssKey)) {
        log$1.debug("sanitizing css option", key);
        args[key] = sanitizeCss(args[key]);
      }
    }
  }
  if (args.themeVariables) {
    for (const k of Object.keys(args.themeVariables)) {
      const val = args.themeVariables[k];
      if ((val == null ? void 0 : val.match) && !val.match(/^[\d "#%(),.;A-Za-z]+$/)) {
        args.themeVariables[k] = "";
      }
    }
  }
  log$1.debug("After sanitization", args);
};
const sanitizeCss = (str2) => {
  let startCnt = 0;
  let endCnt = 0;
  for (const element of str2) {
    if (startCnt < endCnt) {
      return "{ /* ERROR: Unbalanced CSS */ }";
    }
    if (element === "{") {
      startCnt++;
    } else if (element === "}") {
      endCnt++;
    }
  }
  if (startCnt !== endCnt) {
    return "{ /* ERROR: Unbalanced CSS */ }";
  }
  return str2;
};
const frontMatterRegex = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
const directiveRegex = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const anyCommentRegex = /\s*%%.*\n/gm;
class UnknownDiagramError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnknownDiagramError";
  }
}
const detectors = {};
const detectType = function(text2, config2) {
  text2 = text2.replace(frontMatterRegex, "").replace(directiveRegex, "").replace(anyCommentRegex, "\n");
  for (const [key, { detector: detector2 }] of Object.entries(detectors)) {
    const diagram2 = detector2(text2, config2);
    if (diagram2) {
      return key;
    }
  }
  throw new UnknownDiagramError(
    `No diagram type detected matching given configuration for text: ${text2}`
  );
};
const registerLazyLoadedDiagrams = (...diagrams2) => {
  for (const { id: id2, detector: detector2, loader: loader2 } of diagrams2) {
    addDetector(id2, detector2, loader2);
  }
};
const addDetector = (key, detector2, loader2) => {
  if (detectors[key]) {
    log$1.error(`Detector with key ${key} already exists`);
  } else {
    detectors[key] = { detector: detector2, loader: loader2 };
  }
  log$1.debug(`Detector with key ${key} added${loader2 ? " with loader" : ""}`);
};
const getDiagramLoader = (key) => {
  return detectors[key].loader;
};
const assignWithDepth = (dst, src, { depth = 2, clobber = false } = {}) => {
  const config2 = { depth, clobber };
  if (Array.isArray(src) && !Array.isArray(dst)) {
    src.forEach((s) => assignWithDepth(dst, s, config2));
    return dst;
  } else if (Array.isArray(src) && Array.isArray(dst)) {
    src.forEach((s) => {
      if (!dst.includes(s)) {
        dst.push(s);
      }
    });
    return dst;
  }
  if (dst === void 0 || depth <= 0) {
    if (dst !== void 0 && dst !== null && typeof dst === "object" && typeof src === "object") {
      return Object.assign(dst, src);
    } else {
      return src;
    }
  }
  if (src !== void 0 && typeof dst === "object" && typeof src === "object") {
    Object.keys(src).forEach((key) => {
      if (typeof src[key] === "object" && (dst[key] === void 0 || typeof dst[key] === "object")) {
        if (dst[key] === void 0) {
          dst[key] = Array.isArray(src[key]) ? [] : {};
        }
        dst[key] = assignWithDepth(dst[key], src[key], { depth: depth - 1, clobber });
      } else if (clobber || typeof dst[key] !== "object" && typeof src[key] !== "object") {
        dst[key] = src[key];
      }
    });
  }
  return dst;
};
const assignWithDepth$1 = assignWithDepth;
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
function isObject$1$1(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$1$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$a = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1$1(value) || isMasked(value)) {
    return false;
  }
  var pattern2 = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern2.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries2) {
  var index2 = -1, length2 = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array2, key) {
  var length2 = array2.length;
  while (length2--) {
    if (eq(array2[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries2) {
  var index2 = -1, length2 = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries2) {
  var index2 = -1, length2 = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs2 = data.__data__;
    if (!Map$2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
      pairs2.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs2);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries2) {
  var data = this.__data__ = new ListCache(entries2);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length2 = props.length;
    while (length2--) {
      var key = props[fromRight ? length2 : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
const baseFor$1 = baseFor;
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
  buffer.copy(result);
  return result;
}
var Uint8Array$1 = root$1.Uint8Array;
const Uint8Array$2 = Uint8Array$1;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array2) {
  var index2 = -1, length2 = source.length;
  array2 || (array2 = Array(length2));
  while (++index2 < length2) {
    array2[index2] = source[index2];
  }
  return array2;
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
const baseCreate$1 = baseCreate;
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
const getPrototype$1 = getPrototype;
var objectProto$7 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$7;
  return value === proto;
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
const isArguments$1 = isArguments;
var isArray$1 = Array.isArray;
const isArray$1$1 = isArray$1;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$2(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var objectTag$2 = "[object Object]";
var funcProto = Function.prototype, objectProto$5 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$2) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag$2 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length2 = props.length;
  while (++index2 < length2) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length2) {
  var type2 = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
  return !!length2 && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length2)))) {
      result.push(key);
    }
  }
  return result;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$1(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$1$1(objValue) || isFunction$2(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$1$1(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function identity$2(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index2 = -1, length2 = nativeMax(args.length - start2, 0), array2 = Array(length2);
    while (++index2 < length2) {
      array2[index2] = args[start2 + index2];
    }
    index2 = -1;
    var otherArgs = Array(start2 + 1);
    while (++index2 < start2) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start2] = transform(array2);
    return apply(func, this, otherArgs);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty$1 ? identity$2 : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
function baseRest(func, start2) {
  return setToString$1(overRest(func, start2, identity$2), func + "");
}
function isIterateeCall(value, index2, object) {
  if (!isObject$1$1(object)) {
    return false;
  }
  var type2 = typeof index2;
  if (type2 == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type2 == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard = length2 > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length2 < 3 ? void 0 : customizer;
      length2 = 1;
    }
    object = Object(object);
    while (++index2 < length2) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var merge$1 = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
const merge$2 = merge$1;
const ZERO_WIDTH_SPACE = "​";
const d3CurveTypes = {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveBumpX: bumpX,
  curveBumpY: bumpY,
  curveBundle,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCardinal,
  curveCatmullRomClosed,
  curveCatmullRomOpen,
  curveCatmullRom,
  curveLinear,
  curveLinearClosed,
  curveMonotoneX: monotoneX,
  curveMonotoneY: monotoneY,
  curveNatural,
  curveStep,
  curveStepAfter: stepAfter,
  curveStepBefore: stepBefore
};
const directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const detectInit = function(text2, config2) {
  const inits = detectDirective(text2, /(?:init\b)|(?:initialize\b)/);
  let results = {};
  if (Array.isArray(inits)) {
    const args = inits.map((init2) => init2.args);
    sanitizeDirective(args);
    results = assignWithDepth$1(results, [...args]);
  } else {
    results = inits.args;
  }
  if (!results) {
    return;
  }
  let type2 = detectType(text2, config2);
  const prop = "config";
  if (results[prop] !== void 0) {
    if (type2 === "flowchart-v2") {
      type2 = "flowchart";
    }
    results[type2] = results[prop];
    delete results[prop];
  }
  return results;
};
const detectDirective = function(text2, type2 = null) {
  try {
    const commentWithoutDirectives = new RegExp(
      `[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    text2 = text2.trim().replace(commentWithoutDirectives, "").replace(/'/gm, '"');
    log$1.debug(
      `Detecting diagram directive${type2 !== null ? " type:" + type2 : ""} based on the text:${text2}`
    );
    let match;
    const result = [];
    while ((match = directiveRegex.exec(text2)) !== null) {
      if (match.index === directiveRegex.lastIndex) {
        directiveRegex.lastIndex++;
      }
      if (match && !type2 || type2 && match[1] && match[1].match(type2) || type2 && match[2] && match[2].match(type2)) {
        const type22 = match[1] ? match[1] : match[2];
        const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
        result.push({ type: type22, args });
      }
    }
    if (result.length === 0) {
      return { type: text2, args: null };
    }
    return result.length === 1 ? result[0] : result;
  } catch (error) {
    log$1.error(
      `ERROR: ${error.message} - Unable to parse directive type: '${type2}' based on the text: '${text2}'`
    );
    return { type: void 0, args: null };
  }
};
const removeDirectives = function(text2) {
  return text2.replace(directiveRegex, "");
};
const isSubstringInArray = function(str2, arr) {
  for (const [i, element] of arr.entries()) {
    if (element.match(str2)) {
      return i;
    }
  }
  return -1;
};
function interpolateToCurve(interpolate2, defaultCurve) {
  if (!interpolate2) {
    return defaultCurve;
  }
  const curveName = `curve${interpolate2.charAt(0).toUpperCase() + interpolate2.slice(1)}`;
  return d3CurveTypes[curveName] ?? defaultCurve;
}
function formatUrl(linkStr, config2) {
  const url = linkStr.trim();
  if (!url) {
    return void 0;
  }
  if (config2.securityLevel !== "loose") {
    return sanitizeUrl_1(url);
  }
  return url;
}
const runFunc = (functionName, ...params) => {
  const arrPaths = functionName.split(".");
  const len = arrPaths.length - 1;
  const fnName = arrPaths[len];
  let obj = window;
  for (let i = 0; i < len; i++) {
    obj = obj[arrPaths[i]];
    if (!obj) {
      log$1.error(`Function name: ${functionName} not found in window`);
      return;
    }
  }
  obj[fnName](...params);
};
function distance(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function traverseEdge(points) {
  let prevPoint;
  let totalDistance = 0;
  points.forEach((point2) => {
    totalDistance += distance(point2, prevPoint);
    prevPoint = point2;
  });
  const remainingDistance = totalDistance / 2;
  return calculatePoint(points, remainingDistance);
}
function calcLabelPosition(points) {
  if (points.length === 1) {
    return points[0];
  }
  return traverseEdge(points);
}
const roundNumber = (num, precision = 2) => {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
};
const calculatePoint = (points, distanceToTraverse) => {
  let prevPoint = void 0;
  let remainingDistance = distanceToTraverse;
  for (const point2 of points) {
    if (prevPoint) {
      const vectorDistance = distance(point2, prevPoint);
      if (vectorDistance < remainingDistance) {
        remainingDistance -= vectorDistance;
      } else {
        const distanceRatio = remainingDistance / vectorDistance;
        if (distanceRatio <= 0) {
          return prevPoint;
        }
        if (distanceRatio >= 1) {
          return { x: point2.x, y: point2.y };
        }
        if (distanceRatio > 0 && distanceRatio < 1) {
          return {
            x: roundNumber((1 - distanceRatio) * prevPoint.x + distanceRatio * point2.x, 5),
            y: roundNumber((1 - distanceRatio) * prevPoint.y + distanceRatio * point2.y, 5)
          };
        }
      }
    }
    prevPoint = point2;
  }
  throw new Error("Could not find a suitable point for the given distance");
};
const calcCardinalityPosition = (isRelationTypePresent, points, initialPosition) => {
  log$1.info(`our points ${JSON.stringify(points)}`);
  if (points[0] !== initialPosition) {
    points = points.reverse();
  }
  const distanceToCardinalityPoint = 25;
  const center = calculatePoint(points, distanceToCardinalityPoint);
  const d2 = isRelationTypePresent ? 10 : 5;
  const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
  const cardinalityPosition = { x: 0, y: 0 };
  cardinalityPosition.x = Math.sin(angle) * d2 + (points[0].x + center.x) / 2;
  cardinalityPosition.y = -Math.cos(angle) * d2 + (points[0].y + center.y) / 2;
  return cardinalityPosition;
};
function calcTerminalLabelPosition(terminalMarkerSize, position2, _points) {
  const points = structuredClone(_points);
  log$1.info("our points", points);
  if (position2 !== "start_left" && position2 !== "start_right") {
    points.reverse();
  }
  const distanceToCardinalityPoint = 25 + terminalMarkerSize;
  const center = calculatePoint(points, distanceToCardinalityPoint);
  const d2 = 10 + terminalMarkerSize * 0.5;
  const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
  const cardinalityPosition = { x: 0, y: 0 };
  if (position2 === "start_left") {
    cardinalityPosition.x = Math.sin(angle + Math.PI) * d2 + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle + Math.PI) * d2 + (points[0].y + center.y) / 2;
  } else if (position2 === "end_right") {
    cardinalityPosition.x = Math.sin(angle - Math.PI) * d2 + (points[0].x + center.x) / 2 - 5;
    cardinalityPosition.y = -Math.cos(angle - Math.PI) * d2 + (points[0].y + center.y) / 2 - 5;
  } else if (position2 === "end_left") {
    cardinalityPosition.x = Math.sin(angle) * d2 + (points[0].x + center.x) / 2 - 5;
    cardinalityPosition.y = -Math.cos(angle) * d2 + (points[0].y + center.y) / 2 - 5;
  } else {
    cardinalityPosition.x = Math.sin(angle) * d2 + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle) * d2 + (points[0].y + center.y) / 2;
  }
  return cardinalityPosition;
}
function getStylesFromArray(arr) {
  let style2 = "";
  let labelStyle = "";
  for (const element of arr) {
    if (element !== void 0) {
      if (element.startsWith("color:") || element.startsWith("text-align:")) {
        labelStyle = labelStyle + element + ";";
      } else {
        style2 = style2 + element + ";";
      }
    }
  }
  return { style: style2, labelStyle };
}
let cnt = 0;
const generateId = () => {
  cnt++;
  return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
};
function makeRandomHex(length2) {
  let result = "";
  const characters2 = "0123456789abcdef";
  const charactersLength = characters2.length;
  for (let i = 0; i < length2; i++) {
    result += characters2.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const random = (options) => {
  return makeRandomHex(options.length);
};
const getTextObj = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
};
const drawSimpleText = function(elem, textData) {
  const nText = textData.text.replace(common$1.lineBreakRegex, " ");
  const [, _fontSizePx] = parseFontSize(textData.fontSize);
  const textElem = elem.append("text");
  textElem.attr("x", textData.x);
  textElem.attr("y", textData.y);
  textElem.style("text-anchor", textData.anchor);
  textElem.style("font-family", textData.fontFamily);
  textElem.style("font-size", _fontSizePx);
  textElem.style("font-weight", textData.fontWeight);
  textElem.attr("fill", textData.fill);
  if (textData.class !== void 0) {
    textElem.attr("class", textData.class);
  }
  const span = textElem.append("tspan");
  span.attr("x", textData.x + textData.textMargin * 2);
  span.attr("fill", textData.fill);
  span.text(nText);
  return textElem;
};
const wrapLabel = memoize(
  (label, maxWidth, config2) => {
    if (!label) {
      return label;
    }
    config2 = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      config2
    );
    if (common$1.lineBreakRegex.test(label)) {
      return label;
    }
    const words = label.split(" ");
    const completedLines = [];
    let nextLine = "";
    words.forEach((word, index2) => {
      const wordLength = calculateTextWidth(`${word} `, config2);
      const nextLineLength = calculateTextWidth(nextLine, config2);
      if (wordLength > maxWidth) {
        const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, "-", config2);
        completedLines.push(nextLine, ...hyphenatedStrings);
        nextLine = remainingWord;
      } else if (nextLineLength + wordLength >= maxWidth) {
        completedLines.push(nextLine);
        nextLine = word;
      } else {
        nextLine = [nextLine, word].filter(Boolean).join(" ");
      }
      const currentWord = index2 + 1;
      const isLastWord = currentWord === words.length;
      if (isLastWord) {
        completedLines.push(nextLine);
      }
    });
    return completedLines.filter((line2) => line2 !== "").join(config2.joinWith);
  },
  (label, maxWidth, config2) => `${label}${maxWidth}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}${config2.joinWith}`
);
const breakString = memoize(
  (word, maxWidth, hyphenCharacter = "-", config2) => {
    config2 = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      config2
    );
    const characters2 = [...word];
    const lines = [];
    let currentLine = "";
    characters2.forEach((character2, index2) => {
      const nextLine = `${currentLine}${character2}`;
      const lineWidth = calculateTextWidth(nextLine, config2);
      if (lineWidth >= maxWidth) {
        const currentCharacter = index2 + 1;
        const isLastLine = characters2.length === currentCharacter;
        const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
        lines.push(isLastLine ? nextLine : hyphenatedNextLine);
        currentLine = "";
      } else {
        currentLine = nextLine;
      }
    });
    return { hyphenatedStrings: lines, remainingWord: currentLine };
  },
  (word, maxWidth, hyphenCharacter = "-", config2) => `${word}${maxWidth}${hyphenCharacter}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}`
);
function calculateTextHeight(text2, config2) {
  return calculateTextDimensions(text2, config2).height;
}
function calculateTextWidth(text2, config2) {
  return calculateTextDimensions(text2, config2).width;
}
const calculateTextDimensions = memoize(
  (text2, config2) => {
    const { fontSize = 12, fontFamily = "Arial", fontWeight = 400 } = config2;
    if (!text2) {
      return { width: 0, height: 0 };
    }
    const [, _fontSizePx] = parseFontSize(fontSize);
    const fontFamilies = ["sans-serif", fontFamily];
    const lines = text2.split(common$1.lineBreakRegex);
    const dims = [];
    const body = d3select("body");
    if (!body.remove) {
      return { width: 0, height: 0, lineHeight: 0 };
    }
    const g = body.append("svg");
    for (const fontFamily2 of fontFamilies) {
      let cHeight = 0;
      const dim = { width: 0, height: 0, lineHeight: 0 };
      for (const line2 of lines) {
        const textObj = getTextObj();
        textObj.text = line2 || ZERO_WIDTH_SPACE;
        const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
        const bBox = (textElem._groups || textElem)[0][0].getBBox();
        if (bBox.width === 0 && bBox.height === 0) {
          throw new Error("svg element not in render tree");
        }
        dim.width = Math.round(Math.max(dim.width, bBox.width));
        cHeight = Math.round(bBox.height);
        dim.height += cHeight;
        dim.lineHeight = Math.round(Math.max(dim.lineHeight, cHeight));
      }
      dims.push(dim);
    }
    g.remove();
    const index2 = isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1;
    return dims[index2];
  },
  (text2, config2) => `${text2}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}`
);
class InitIDGenerator {
  constructor(deterministic = false, seed) {
    this.count = 0;
    this.count = seed ? seed.length : 0;
    this.next = deterministic ? () => this.count++ : () => Date.now();
  }
}
let decoder;
const entityDecode = function(html2) {
  decoder = decoder || document.createElement("div");
  html2 = escape(html2).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
  decoder.innerHTML = html2;
  return unescape(decoder.textContent);
};
function isDetailedError(error) {
  return "str" in error;
}
const insertTitle = (parent, cssClass, titleTopMargin, title) => {
  var _a2;
  if (!title) {
    return;
  }
  const bounds = (_a2 = parent.node()) == null ? void 0 : _a2.getBBox();
  if (!bounds) {
    return;
  }
  parent.append("text").text(title).attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
};
const parseFontSize = (fontSize) => {
  if (typeof fontSize === "number") {
    return [fontSize, fontSize + "px"];
  }
  const fontSizeNumber = parseInt(fontSize ?? "", 10);
  if (Number.isNaN(fontSizeNumber)) {
    return [void 0, void 0];
  } else if (fontSize === String(fontSizeNumber)) {
    return [fontSizeNumber, fontSize + "px"];
  } else {
    return [fontSizeNumber, fontSize];
  }
};
function cleanAndMerge(defaultData, data) {
  return merge$2({}, defaultData, data);
}
const utils$1 = {
  assignWithDepth: assignWithDepth$1,
  wrapLabel,
  calculateTextHeight,
  calculateTextWidth,
  calculateTextDimensions,
  cleanAndMerge,
  detectInit,
  detectDirective,
  isSubstringInArray,
  interpolateToCurve,
  calcLabelPosition,
  calcCardinalityPosition,
  calcTerminalLabelPosition,
  formatUrl,
  getStylesFromArray,
  generateId,
  random,
  runFunc,
  entityDecode,
  insertTitle,
  parseFontSize,
  InitIDGenerator
};
const encodeEntities = function(text2) {
  let txt = text2;
  txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
    return s.substring(0, s.length - 1);
  });
  txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
    return s.substring(0, s.length - 1);
  });
  txt = txt.replace(/#\w+;/g, function(s) {
    const innerTxt = s.substring(1, s.length - 1);
    const isInt = /^\+?\d+$/.test(innerTxt);
    if (isInt) {
      return "ﬂ°°" + innerTxt + "¶ß";
    } else {
      return "ﬂ°" + innerTxt + "¶ß";
    }
  });
  return txt;
};
const decodeEntities = function(text2) {
  return text2.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern2, replacement) {
  return value.replace(pattern2, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array2) {
  return array2.push(value), value;
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type2, props, children2, length2) {
  return { value, root: root2, parent, type: type2, props, children: children2, line, column, length: length2, return: "" };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type2) {
  switch (type2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type2) {
  return trim(slice(position - 1, delimiter(type2 === 91 ? type2 + 2 : type2 === 40 ? type2 + 1 : type2)));
}
function whitespace(type2) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type2) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type2) {
  while (next())
    switch (character) {
      case type2:
        return position;
      case 34:
      case 39:
        if (type2 !== 34 && type2 !== 39)
          delimiter(character);
        break;
      case 40:
        if (type2 === 41)
          delimiter(type2);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type2, index2) {
  while (next())
    if (type2 + character === 47 + 10)
      break;
    else if (type2 + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type2 === 47 ? type2 : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse$2("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse$2(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type2 = "";
  var props = rules;
  var children2 = rulesets;
  var reference = rule;
  var characters2 = type2;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index2, offset, rules, points, type2, props = [], children2 = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse$2(characters2, root2, reference, reference, props, rulesets, length2, points, children2);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse$2(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type2, rules, props = [], length2), children2), rules, children2, length2, points, rule ? props : children2);
                    break;
                  default:
                    parse$2(characters2, reference, reference, reference, [""], children2, 0, points, children2);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type2 = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type2 = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index2, offset, rules, points, type2, props, children2, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root2, parent, offset === 0 ? RULESET : type2, props, children2, length2);
}
function comment(value, root2, parent) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root2, parent, length2) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children2, callback) {
  var output = "";
  var length2 = sizeof(children2);
  for (var i = 0; i < length2; i++)
    output += callback(children2[i], i, children2, callback) || "";
  return output;
}
function stringify(element, index2, children2, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children2 = serialize(element.children, callback)) ? element.return = element.value + "{" + children2 + "}" : "";
}
const version$1 = "10.7.0";
const defaultConfig$1 = Object.freeze(defaultConfig$2);
let siteConfig = assignWithDepth$1({}, defaultConfig$1);
let configFromInitialize;
let directives = [];
let currentConfig = assignWithDepth$1({}, defaultConfig$1);
const updateCurrentConfig = (siteCfg, _directives) => {
  let cfg = assignWithDepth$1({}, siteCfg);
  let sumOfDirectives = {};
  for (const d2 of _directives) {
    sanitize(d2);
    sumOfDirectives = assignWithDepth$1(sumOfDirectives, d2);
  }
  cfg = assignWithDepth$1(cfg, sumOfDirectives);
  if (sumOfDirectives.theme && sumOfDirectives.theme in theme$1) {
    const tmpConfigFromInitialize = assignWithDepth$1({}, configFromInitialize);
    const themeVariables = assignWithDepth$1(
      tmpConfigFromInitialize.themeVariables || {},
      sumOfDirectives.themeVariables
    );
    if (cfg.theme && cfg.theme in theme$1) {
      cfg.themeVariables = theme$1[cfg.theme].getThemeVariables(themeVariables);
    }
  }
  currentConfig = cfg;
  checkConfig(currentConfig);
  return currentConfig;
};
const setSiteConfig = (conf) => {
  siteConfig = assignWithDepth$1({}, defaultConfig$1);
  siteConfig = assignWithDepth$1(siteConfig, conf);
  if (conf.theme && theme$1[conf.theme]) {
    siteConfig.themeVariables = theme$1[conf.theme].getThemeVariables(conf.themeVariables);
  }
  updateCurrentConfig(siteConfig, directives);
  return siteConfig;
};
const saveConfigFromInitialize = (conf) => {
  configFromInitialize = assignWithDepth$1({}, conf);
};
const updateSiteConfig = (conf) => {
  siteConfig = assignWithDepth$1(siteConfig, conf);
  updateCurrentConfig(siteConfig, directives);
  return siteConfig;
};
const getSiteConfig = () => {
  return assignWithDepth$1({}, siteConfig);
};
const setConfig$1 = (conf) => {
  checkConfig(conf);
  assignWithDepth$1(currentConfig, conf);
  return getConfig$1();
};
const getConfig$1 = () => {
  return assignWithDepth$1({}, currentConfig);
};
const sanitize = (options) => {
  if (!options) {
    return;
  }
  ["secure", ...siteConfig.secure ?? []].forEach((key) => {
    if (Object.hasOwn(options, key)) {
      log$1.debug(`Denied attempt to modify a secure key ${key}`, options[key]);
      delete options[key];
    }
  });
  Object.keys(options).forEach((key) => {
    if (key.startsWith("__")) {
      delete options[key];
    }
  });
  Object.keys(options).forEach((key) => {
    if (typeof options[key] === "string" && (options[key].includes("<") || options[key].includes(">") || options[key].includes("url(data:"))) {
      delete options[key];
    }
    if (typeof options[key] === "object") {
      sanitize(options[key]);
    }
  });
};
const addDirective = (directive) => {
  sanitizeDirective(directive);
  if (directive.fontFamily && (!directive.themeVariables || !directive.themeVariables.fontFamily)) {
    directive.themeVariables = { fontFamily: directive.fontFamily };
  }
  directives.push(directive);
  updateCurrentConfig(siteConfig, directives);
};
const reset = (config2 = siteConfig) => {
  directives = [];
  updateCurrentConfig(config2, directives);
};
const ConfigWarning = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
const issuedWarnings = {};
const issueWarning = (warning) => {
  if (issuedWarnings[warning]) {
    return;
  }
  log$1.warn(ConfigWarning[warning]);
  issuedWarnings[warning] = true;
};
const checkConfig = (config2) => {
  if (!config2) {
    return;
  }
  if (config2.lazyLoadedDiagrams || config2.loadExternalDiagramsAtStartup) {
    issueWarning("LAZY_LOAD_DEPRECATED");
  }
};
const id$k = "c4";
const detector$k = (txt) => {
  return /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(txt);
};
const loader$l = async () => {
  const { diagram: diagram2 } = await import("./c4Diagram-c82ee324.a0d9828b.js");
  return { id: id$k, diagram: diagram2 };
};
const plugin$i = {
  id: id$k,
  detector: detector$k,
  loader: loader$l
};
const c4 = plugin$i;
const id$j = "flowchart";
const detector$j = (txt, config2) => {
  var _a2, _b;
  if (((_a2 = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a2.defaultRenderer) === "dagre-wrapper" || ((_b = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") {
    return false;
  }
  return /^\s*graph/.test(txt);
};
const loader$k = async () => {
  const { diagram: diagram2 } = await import("./flowDiagram-962873e1.e119f60d.js");
  return { id: id$j, diagram: diagram2 };
};
const plugin$h = {
  id: id$j,
  detector: detector$j,
  loader: loader$k
};
const flowchart = plugin$h;
const id$i = "flowchart-v2";
const detector$i = (txt, config2) => {
  var _a2, _b, _c;
  if (((_a2 = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a2.defaultRenderer) === "dagre-d3" || ((_b = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") {
    return false;
  }
  if (/^\s*graph/.test(txt) && ((_c = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _c.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  return /^\s*flowchart/.test(txt);
};
const loader$j = async () => {
  const { diagram: diagram2 } = await import("./flowDiagram-v2-10567f5e.6acce14e.js");
  return { id: id$i, diagram: diagram2 };
};
const plugin$g = {
  id: id$i,
  detector: detector$i,
  loader: loader$j
};
const flowchartV2 = plugin$g;
const id$h = "er";
const detector$h = (txt) => {
  return /^\s*erDiagram/.test(txt);
};
const loader$i = async () => {
  const { diagram: diagram2 } = await import("./erDiagram-a72da23d.4f4ddac9.js");
  return { id: id$h, diagram: diagram2 };
};
const plugin$f = {
  id: id$h,
  detector: detector$h,
  loader: loader$i
};
const er = plugin$f;
const id$g = "gitGraph";
const detector$g = (txt) => {
  return /^\s*gitGraph/.test(txt);
};
const loader$h = async () => {
  const { diagram: diagram2 } = await import("./gitGraphDiagram-f715787e.3f3b9105.js");
  return { id: id$g, diagram: diagram2 };
};
const plugin$e = {
  id: id$g,
  detector: detector$g,
  loader: loader$h
};
const git = plugin$e;
const id$f = "gantt";
const detector$f = (txt) => {
  return /^\s*gantt/.test(txt);
};
const loader$g = async () => {
  const { diagram: diagram2 } = await import("./ganttDiagram-18b41033.3d37dad4.js");
  return { id: id$f, diagram: diagram2 };
};
const plugin$d = {
  id: id$f,
  detector: detector$f,
  loader: loader$g
};
const gantt = plugin$d;
const id$e = "info";
const detector$e = (txt) => {
  return /^\s*info/.test(txt);
};
const loader$f = async () => {
  const { diagram: diagram2 } = await import("./infoDiagram-111ef34f.c5e4c511.js");
  return { id: id$e, diagram: diagram2 };
};
const info = {
  id: id$e,
  detector: detector$e,
  loader: loader$f
};
const id$d = "pie";
const detector$d = (txt) => {
  return /^\s*pie/.test(txt);
};
const loader$e = async () => {
  const { diagram: diagram2 } = await import("./pieDiagram-0a51d72a.6ca58a7f.js");
  return { id: id$d, diagram: diagram2 };
};
const pie = {
  id: id$d,
  detector: detector$d,
  loader: loader$e
};
const id$c = "quadrantChart";
const detector$c = (txt) => {
  return /^\s*quadrantChart/.test(txt);
};
const loader$d = async () => {
  const { diagram: diagram2 } = await import("./quadrantDiagram-31813e83.cbb85d81.js");
  return { id: id$c, diagram: diagram2 };
};
const plugin$c = {
  id: id$c,
  detector: detector$c,
  loader: loader$d
};
const quadrantChart = plugin$c;
const id$b = "xychart";
const detector$b = (txt) => {
  return /^\s*xychart-beta/.test(txt);
};
const loader$c = async () => {
  const { diagram: diagram2 } = await import("./xychartDiagram-ca967019.6589d1c8.js");
  return { id: id$b, diagram: diagram2 };
};
const plugin$b = {
  id: id$b,
  detector: detector$b,
  loader: loader$c
};
const xychart = plugin$b;
const id$a = "requirement";
const detector$a = (txt) => {
  return /^\s*requirement(Diagram)?/.test(txt);
};
const loader$b = async () => {
  const { diagram: diagram2 } = await import("./requirementDiagram-6d08cb88.b4a87741.js");
  return { id: id$a, diagram: diagram2 };
};
const plugin$a = {
  id: id$a,
  detector: detector$a,
  loader: loader$b
};
const requirement = plugin$a;
const id$9 = "sequence";
const detector$9 = (txt) => {
  return /^\s*sequenceDiagram/.test(txt);
};
const loader$a = async () => {
  const { diagram: diagram2 } = await import("./sequenceDiagram-62b9e65a.5db65259.js");
  return { id: id$9, diagram: diagram2 };
};
const plugin$9 = {
  id: id$9,
  detector: detector$9,
  loader: loader$a
};
const sequence = plugin$9;
const id$8 = "class";
const detector$8 = (txt, config2) => {
  var _a2;
  if (((_a2 = config2 == null ? void 0 : config2.class) == null ? void 0 : _a2.defaultRenderer) === "dagre-wrapper") {
    return false;
  }
  return /^\s*classDiagram/.test(txt);
};
const loader$9 = async () => {
  const { diagram: diagram2 } = await import("./classDiagram-5d49202d.68457b6f.js");
  return { id: id$8, diagram: diagram2 };
};
const plugin$8 = {
  id: id$8,
  detector: detector$8,
  loader: loader$9
};
const classDiagram = plugin$8;
const id$7 = "classDiagram";
const detector$7 = (txt, config2) => {
  var _a2;
  if (/^\s*classDiagram/.test(txt) && ((_a2 = config2 == null ? void 0 : config2.class) == null ? void 0 : _a2.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  return /^\s*classDiagram-v2/.test(txt);
};
const loader$8 = async () => {
  const { diagram: diagram2 } = await import("./classDiagram-v2-5328fc73.3b8149be.js");
  return { id: id$7, diagram: diagram2 };
};
const plugin$7 = {
  id: id$7,
  detector: detector$7,
  loader: loader$8
};
const classDiagramV2 = plugin$7;
const id$6 = "state";
const detector$6 = (txt, config2) => {
  var _a2;
  if (((_a2 = config2 == null ? void 0 : config2.state) == null ? void 0 : _a2.defaultRenderer) === "dagre-wrapper") {
    return false;
  }
  return /^\s*stateDiagram/.test(txt);
};
const loader$7 = async () => {
  const { diagram: diagram2 } = await import("./stateDiagram-03b49db1.7d466127.js");
  return { id: id$6, diagram: diagram2 };
};
const plugin$6 = {
  id: id$6,
  detector: detector$6,
  loader: loader$7
};
const state = plugin$6;
const id$5 = "stateDiagram";
const detector$5 = (txt, config2) => {
  var _a2;
  if (/^\s*stateDiagram-v2/.test(txt)) {
    return true;
  }
  if (/^\s*stateDiagram/.test(txt) && ((_a2 = config2 == null ? void 0 : config2.state) == null ? void 0 : _a2.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  return false;
};
const loader$6 = async () => {
  const { diagram: diagram2 } = await import("./stateDiagram-v2-a86a5ce4.1f594931.js");
  return { id: id$5, diagram: diagram2 };
};
const plugin$5 = {
  id: id$5,
  detector: detector$5,
  loader: loader$6
};
const stateV2 = plugin$5;
const id$4 = "journey";
const detector$4 = (txt) => {
  return /^\s*journey/.test(txt);
};
const loader$5 = async () => {
  const { diagram: diagram2 } = await import("./journeyDiagram-30ac10e6.88dcafd4.js");
  return { id: id$4, diagram: diagram2 };
};
const plugin$4 = {
  id: id$4,
  detector: detector$4,
  loader: loader$5
};
const journey = plugin$4;
const d3Attrs = function(d3Elem, attrs) {
  for (let attr of attrs) {
    d3Elem.attr(attr[0], attr[1]);
  }
};
const calculateSvgSizeAttrs = function(height, width, useMaxWidth) {
  let attrs = /* @__PURE__ */ new Map();
  if (useMaxWidth) {
    attrs.set("width", "100%");
    attrs.set("style", `max-width: ${width}px;`);
  } else {
    attrs.set("height", height);
    attrs.set("width", width);
  }
  return attrs;
};
const configureSvgSize = function(svgElem, height, width, useMaxWidth) {
  const attrs = calculateSvgSizeAttrs(height, width, useMaxWidth);
  d3Attrs(svgElem, attrs);
};
const setupGraphViewbox$1 = function(graph, svgElem, padding, useMaxWidth) {
  const svgBounds = svgElem.node().getBBox();
  const sWidth = svgBounds.width;
  const sHeight = svgBounds.height;
  log$1.info(`SVG bounds: ${sWidth}x${sHeight}`, svgBounds);
  let width = 0;
  let height = 0;
  log$1.info(`Graph bounds: ${width}x${height}`, graph);
  width = sWidth + padding * 2;
  height = sHeight + padding * 2;
  log$1.info(`Calculated bounds: ${width}x${height}`);
  configureSvgSize(svgElem, height, width, useMaxWidth);
  const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${svgBounds.width + 2 * padding} ${svgBounds.height + 2 * padding}`;
  svgElem.attr("viewBox", vBox);
};
const themes = {};
const getStyles = (type2, userStyles, options) => {
  let diagramStyles = "";
  if (type2 in themes && themes[type2]) {
    diagramStyles = themes[type2](options);
  } else {
    log$1.warn(`No theme found for ${type2}`);
  }
  return ` & {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
    fill: ${options.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${options.errorBkgColor};
  }
  & .error-text {
    fill: ${options.errorTextColor};
    stroke: ${options.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${options.lineColor};
    stroke: ${options.lineColor};
  }
  & .marker.cross {
    stroke: ${options.lineColor};
  }

  & svg {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
  }

  ${diagramStyles}

  ${userStyles}
`;
};
const addStylesForDiagram = (type2, diagramTheme) => {
  if (diagramTheme !== void 0) {
    themes[type2] = diagramTheme;
  }
};
const getStyles$1 = getStyles;
let accTitle = "";
let diagramTitle = "";
let accDescription = "";
const sanitizeText$1 = (txt) => sanitizeText$2(txt, getConfig$1());
const clear = () => {
  accTitle = "";
  accDescription = "";
  diagramTitle = "";
};
const setAccTitle = (txt) => {
  accTitle = sanitizeText$1(txt).replace(/^\s+/g, "");
};
const getAccTitle = () => accTitle;
const setAccDescription = (txt) => {
  accDescription = sanitizeText$1(txt).replace(/\n\s+/g, "\n");
};
const getAccDescription = () => accDescription;
const setDiagramTitle = (txt) => {
  diagramTitle = sanitizeText$1(txt);
};
const getDiagramTitle = () => diagramTitle;
const commonDb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear,
  getAccDescription,
  getAccTitle,
  getDiagramTitle,
  setAccDescription,
  setAccTitle,
  setDiagramTitle
}, Symbol.toStringTag, { value: "Module" }));
const log = log$1;
const setLogLevel = setLogLevel$1;
const getConfig = getConfig$1;
const setConfig = setConfig$1;
const defaultConfig = defaultConfig$1;
const sanitizeText = (text2) => sanitizeText$2(text2, getConfig());
const setupGraphViewbox = setupGraphViewbox$1;
const getCommonDb = () => {
  return commonDb;
};
const diagrams = {};
const registerDiagram = (id2, diagram2, detector2) => {
  var _a2;
  if (diagrams[id2]) {
    throw new Error(`Diagram ${id2} already registered.`);
  }
  diagrams[id2] = diagram2;
  if (detector2) {
    addDetector(id2, detector2);
  }
  addStylesForDiagram(id2, diagram2.styles);
  (_a2 = diagram2.injectUtils) == null ? void 0 : _a2.call(
    diagram2,
    log,
    setLogLevel,
    getConfig,
    sanitizeText,
    setupGraphViewbox,
    getCommonDb(),
    () => {
    }
  );
};
const getDiagram = (name2) => {
  if (name2 in diagrams) {
    return diagrams[name2];
  }
  throw new DiagramNotFoundError(name2);
};
class DiagramNotFoundError extends Error {
  constructor(name2) {
    super(`Diagram ${name2} not found.`);
  }
}
const selectSvgElement = (id2) => {
  var _a2;
  const { securityLevel } = getConfig();
  let root2 = d3select("body");
  if (securityLevel === "sandbox") {
    const sandboxElement = d3select(`#i${id2}`);
    const doc = ((_a2 = sandboxElement.node()) == null ? void 0 : _a2.contentDocument) ?? document;
    root2 = d3select(doc.body);
  }
  const svg2 = root2.select(`#${id2}`);
  return svg2;
};
const draw = (_text, id2, version2) => {
  log$1.debug("renering svg for syntax error\n");
  const svg2 = selectSvgElement(id2);
  svg2.attr("viewBox", "0 0 2412 512");
  configureSvgSize(svg2, 100, 512, true);
  const g = svg2.append("g");
  g.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  );
  g.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  );
  g.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  );
  g.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  );
  g.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  );
  g.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  );
  g.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text");
  g.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${version2}`);
};
const renderer = { draw };
const errorRenderer = renderer;
const diagram = {
  db: {},
  renderer,
  parser: {
    parser: { yy: {} },
    parse: () => {
      return;
    }
  }
};
const errorDiagram = diagram;
const id$3 = "flowchart-elk";
const detector$3 = (txt, config2) => {
  var _a2;
  if (
    // If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(txt) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(txt) && ((_a2 = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a2.defaultRenderer) === "elk"
  ) {
    return true;
  }
  return false;
};
const loader$4 = async () => {
  const { diagram: diagram2 } = await import("./flowchart-elk-definition-b97a4072.f562ba49.js");
  return { id: id$3, diagram: diagram2 };
};
const plugin$3 = {
  id: id$3,
  detector: detector$3,
  loader: loader$4
};
const flowchartElk = plugin$3;
const id$2 = "timeline";
const detector$2 = (txt) => {
  return /^\s*timeline/.test(txt);
};
const loader$3 = async () => {
  const { diagram: diagram2 } = await import("./timeline-definition-54d0bf3a.0f9167fc.js");
  return { id: id$2, diagram: diagram2 };
};
const plugin$2 = {
  id: id$2,
  detector: detector$2,
  loader: loader$3
};
const timeline = plugin$2;
const id$1 = "mindmap";
const detector$1 = (txt) => {
  return /^\s*mindmap/.test(txt);
};
const loader$2 = async () => {
  const { diagram: diagram2 } = await import("./mindmap-definition-83493066.dd2851d0.js");
  return { id: id$1, diagram: diagram2 };
};
const plugin$1 = {
  id: id$1,
  detector: detector$1,
  loader: loader$2
};
const mindmap = plugin$1;
const id$m = "sankey";
const detector = (txt) => {
  return /^\s*sankey-beta/.test(txt);
};
const loader$1 = async () => {
  const { diagram: diagram2 } = await import("./sankeyDiagram-ff1543cb.02ccc98b.js");
  return { id: id$m, diagram: diagram2 };
};
const plugin = {
  id: id$m,
  detector,
  loader: loader$1
};
const sankey = plugin;
let hasLoadedDiagrams = false;
const addDiagrams = () => {
  if (hasLoadedDiagrams) {
    return;
  }
  hasLoadedDiagrams = true;
  registerDiagram("error", errorDiagram, (text2) => {
    return text2.toLowerCase().trim() === "error";
  });
  registerDiagram(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (text2) => {
      return text2.toLowerCase().trimStart().startsWith("---");
    }
  );
  registerLazyLoadedDiagrams(
    c4,
    classDiagramV2,
    classDiagram,
    er,
    gantt,
    info,
    pie,
    requirement,
    sequence,
    flowchartElk,
    flowchartV2,
    flowchart,
    mindmap,
    timeline,
    git,
    stateV2,
    state,
    journey,
    quadrantChart,
    sankey,
    xychart
  );
};
class Diagram {
  constructor(text2, metadata = {}) {
    this.text = text2;
    this.metadata = metadata;
    this.type = "graph";
    this.text = encodeEntities(text2);
    this.text += "\n";
    const cnf = getConfig$1();
    try {
      this.type = detectType(text2, cnf);
    } catch (e) {
      this.type = "error";
      this.detectError = e;
    }
    const diagram2 = getDiagram(this.type);
    log$1.debug("Type " + this.type);
    this.db = diagram2.db;
    this.renderer = diagram2.renderer;
    this.parser = diagram2.parser;
    this.parser.parser.yy = this.db;
    this.init = diagram2.init;
    this.parse();
  }
  parse() {
    var _a2, _b, _c, _d, _e;
    if (this.detectError) {
      throw this.detectError;
    }
    (_b = (_a2 = this.db).clear) == null ? void 0 : _b.call(_a2);
    const config2 = getConfig$1();
    (_c = this.init) == null ? void 0 : _c.call(this, config2);
    if (this.metadata.title) {
      (_e = (_d = this.db).setDiagramTitle) == null ? void 0 : _e.call(_d, this.metadata.title);
    }
    this.parser.parse(this.text);
  }
  async render(id2, version2) {
    await this.renderer.draw(this.text, id2, version2, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}
const getDiagramFromText$1 = async (text2, metadata = {}) => {
  const type2 = detectType(text2, getConfig$1());
  try {
    getDiagram(type2);
  } catch (error) {
    const loader2 = getDiagramLoader(type2);
    if (!loader2) {
      throw new UnknownDiagramError(`Diagram ${type2} not found.`);
    }
    const { id: id2, diagram: diagram2 } = await loader2();
    registerDiagram(id2, diagram2);
  }
  return new Diagram(text2, metadata);
};
let interactionFunctions = [];
const addFunction = (func) => {
  interactionFunctions.push(func);
};
const attachFunctions = () => {
  interactionFunctions.forEach((f) => {
    f();
  });
  interactionFunctions = [];
};
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
const WeakMap$1$1 = WeakMap$1;
var mapTag$1 = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$1$1 && getTag(new WeakMap$1$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var mapTag = "[object Map]", setTag = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty$b = objectProto.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray$1$1(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer$1(value) || isTypedArray$1(value) || isArguments$1(value))) {
    return !value.length;
  }
  var tag = getTag$1(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$b.call(value, key)) {
      return false;
    }
  }
  return true;
}
const SVG_ROLE = "graphics-document document";
function setA11yDiagramInfo(svg2, diagramType) {
  svg2.attr("role", SVG_ROLE);
  if (diagramType !== "") {
    svg2.attr("aria-roledescription", diagramType);
  }
}
function addSVGa11yTitleDescription(svg2, a11yTitle, a11yDesc, baseId) {
  if (svg2.insert === void 0) {
    return;
  }
  if (a11yDesc) {
    const descId = `chart-desc-${baseId}`;
    svg2.attr("aria-describedby", descId);
    svg2.insert("desc", ":first-child").attr("id", descId).text(a11yDesc);
  }
  if (a11yTitle) {
    const titleId = `chart-title-${baseId}`;
    svg2.attr("aria-labelledby", titleId);
    svg2.insert("title", ":first-child").attr("id", titleId).text(a11yTitle);
  }
}
const cleanupComments = (text2) => {
  return text2.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject$2(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence2) {
  if (Array.isArray(sequence2))
    return sequence2;
  else if (isNothing(sequence2))
    return [];
  return [sequence2];
}
function extend$2(target, source) {
  var index2, length2, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index2 = 0, length2 = sourceKeys.length; index2 < length2; index2 += 1) {
      key = sourceKeys[index2];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject$2;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend$2;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message = exception2.reason || "(unknown reason)";
  if (!exception2.mark)
    return message;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position2, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position2 - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position2 - maxHalfLength + head.length;
  }
  if (lineEnd - position2 > maxHalfLength) {
    tail = " ...";
    lineEnd = position2 + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
    pos: position2 - lineStart + head.length
    // relative position
  };
}
function padStart(string, max2) {
  return common.repeat(" ", max2 - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer)
    return null;
  if (!options.maxLength)
    options.maxLength = 79;
  if (typeof options.indent !== "number")
    options.indent = 1;
  if (typeof options.linesBefore !== "number")
    options.linesBefore = 3;
  if (typeof options.linesAfter !== "number")
    options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0)
    foundLineNo = lineStarts.length - 1;
  var result = "", i, line2;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0)
      break;
    line2 = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line2.str + "\n" + result;
  }
  line2 = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line2.str + "\n";
  result += common.repeat("-", options.indent + lineNoLength + 3 + line2.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length)
      break;
    line2 = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line2.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style2) {
      map2[style2].forEach(function(alias) {
        result[String(alias)] = style2;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name2) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name2) === -1) {
      throw new exception('Unknown option "' + name2 + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name2) {
  var result = [];
  schema2[name2].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index2, length2;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index2 = 0, length2 = arguments.length; index2 < length2; index2 += 1) {
    arguments[index2].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit)
      implicit = implicit.concat(definition.implicit);
    if (definition.explicit)
      explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data) {
  if (data === null)
    return true;
  var max2 = data.length;
  return max2 === 1 && data === "~" || max2 === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
  if (data === null)
    return false;
  var max2 = data.length;
  return max2 === 4 && (data === "true" || data === "True" || data === "TRUE") || max2 === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null)
    return false;
  var max2 = data.length, index2 = 0, hasDigits = false, ch;
  if (!max2)
    return false;
  ch = data[index2];
  if (ch === "-" || ch === "+") {
    ch = data[++index2];
  }
  if (ch === "0") {
    if (index2 + 1 === max2)
      return true;
    ch = data[++index2];
    if (ch === "b") {
      index2++;
      for (; index2 < max2; index2++) {
        ch = data[index2];
        if (ch === "_")
          continue;
        if (ch !== "0" && ch !== "1")
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index2++;
      for (; index2 < max2; index2++) {
        ch = data[index2];
        if (ch === "_")
          continue;
        if (!isHexCode(data.charCodeAt(index2)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index2++;
      for (; index2 < max2; index2++) {
        ch = data[index2];
        if (ch === "_")
          continue;
        if (!isOctCode(data.charCodeAt(index2)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_")
    return false;
  for (; index2 < max2; index2++) {
    ch = data[index2];
    if (ch === "_")
      continue;
    if (!isDecCode(data.charCodeAt(index2))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_")
    return false;
  return true;
}
function constructYamlInteger(data) {
  var value = data, sign2 = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-")
      sign2 = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0")
    return 0;
  if (ch === "0") {
    if (value[1] === "b")
      return sign2 * parseInt(value.slice(2), 2);
    if (value[1] === "x")
      return sign2 * parseInt(value.slice(2), 16);
    if (value[1] === "o")
      return sign2 * parseInt(value.slice(2), 8);
  }
  return sign2 * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data) {
  if (data === null)
    return false;
  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign2;
  value = data.replace(/_/g, "").toLowerCase();
  sign2 = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign2 === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign2 * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style2) {
  var res;
  if (isNaN(object)) {
    switch (style2) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style2) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style2) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data) {
  if (data === null)
    return false;
  if (YAML_DATE_REGEXP.exec(data) !== null)
    return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
    return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null)
    match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null)
    throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-")
      delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta)
    date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null)
    return false;
  var code, idx, bitlen = 0, max2 = data.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max2; idx++) {
    code = map2.indexOf(data.charAt(idx));
    if (code > 64)
      continue;
    if (code < 0)
      return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max2 = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max2; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max2 % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max2 = object.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max2; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max2 % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null)
    return true;
  var objectKeys = [], index2, length2, pair, pairKey, pairHasKey, object = data;
  for (index2 = 0, length2 = object.length; index2 < length2; index2 += 1) {
    pair = object[index2];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]")
      return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey)
          pairHasKey = true;
        else
          return false;
      }
    }
    if (!pairHasKey)
      return false;
    if (objectKeys.indexOf(pairKey) === -1)
      objectKeys.push(pairKey);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null)
    return true;
  var index2, length2, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index2 = 0, length2 = object.length; index2 < length2; index2 += 1) {
    pair = object[index2];
    if (_toString$1.call(pair) !== "[object Object]")
      return false;
    keys = Object.keys(pair);
    if (keys.length !== 1)
      return false;
    result[index2] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null)
    return [];
  var index2, length2, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index2 = 0, length2 = object.length; index2 < length2; index2 += 1) {
    pair = object[index2];
    keys = Object.keys(pair);
    result[index2] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null)
    return true;
  var key, object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null)
        return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? " " : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state2, message) {
  var mark = {
    name: state2.filename,
    buffer: state2.input.slice(0, -1),
    // omit trailing \0
    position: state2.position,
    line: state2.line,
    column: state2.position - state2.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state2, message) {
  throw generateError(state2, message);
}
function throwWarning(state2, message) {
  if (state2.onWarning) {
    state2.onWarning.call(null, generateError(state2, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state2, name2, args) {
    var match, major, minor;
    if (state2.version !== null) {
      throwError(state2, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state2, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state2, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state2, "unacceptable YAML version of the document");
    }
    state2.version = args[0];
    state2.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state2, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state2, name2, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state2, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state2, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state2.tagMap, handle)) {
      throwError(state2, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state2, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state2, "tag prefix is malformed: " + prefix);
    }
    state2.tagMap[handle] = prefix;
  }
};
function captureSegment(state2, start2, end, checkJson) {
  var _position, _length, _character, _result;
  if (start2 < end) {
    _result = state2.input.slice(start2, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state2, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state2, "the stream contains non-printable characters");
    }
    state2.result += _result;
  }
}
function mergeMappings(state2, destination, source, overridableKeys) {
  var sourceKeys, key, index2, quantity;
  if (!common.isObject(source)) {
    throwError(state2, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index2 = 0, quantity = sourceKeys.length; index2 < quantity; index2 += 1) {
    key = sourceKeys[index2];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index2, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index2 = 0, quantity = keyNode.length; index2 < quantity; index2 += 1) {
      if (Array.isArray(keyNode[index2])) {
        throwError(state2, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index2]) === "[object Object]") {
        keyNode[index2] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index2 = 0, quantity = valueNode.length; index2 < quantity; index2 += 1) {
        mergeMappings(state2, _result, valueNode[index2], overridableKeys);
      }
    } else {
      mergeMappings(state2, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state2.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state2.line = startLine || state2.line;
      state2.lineStart = startLineStart || state2.lineStart;
      state2.position = startPos || state2.position;
      throwError(state2, "duplicated mapping key");
    }
    if (keyNode === "__proto__") {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state2) {
  var ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch === 10) {
    state2.position++;
  } else if (ch === 13) {
    state2.position++;
    if (state2.input.charCodeAt(state2.position) === 10) {
      state2.position++;
    }
  } else {
    throwError(state2, "a line break is expected");
  }
  state2.line += 1;
  state2.lineStart = state2.position;
  state2.firstTabInLine = -1;
}
function skipSeparationSpace(state2, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state2.input.charCodeAt(state2.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state2.firstTabInLine === -1) {
        state2.firstTabInLine = state2.position;
      }
      ch = state2.input.charCodeAt(++state2.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state2.input.charCodeAt(++state2.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state2);
      ch = state2.input.charCodeAt(state2.position);
      lineBreaks++;
      state2.lineIndent = 0;
      while (ch === 32) {
        state2.lineIndent++;
        ch = state2.input.charCodeAt(++state2.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state2.lineIndent < checkIndent) {
    throwWarning(state2, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state2) {
  var _position = state2.position, ch;
  ch = state2.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state2.input.charCodeAt(_position + 1) && ch === state2.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state2.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state2, count) {
  if (count === 1) {
    state2.result += " ";
  } else if (count > 1) {
    state2.result += common.repeat("\n", count - 1);
  }
}
function readPlainScalar(state2, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state2.kind, _result = state2.result, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state2.input.charCodeAt(state2.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state2.kind = "scalar";
  state2.result = "";
  captureStart = captureEnd = state2.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state2.input.charCodeAt(state2.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state2.input.charCodeAt(state2.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state2.position === state2.lineStart && testDocumentSeparator(state2) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state2.line;
      _lineStart = state2.lineStart;
      _lineIndent = state2.lineIndent;
      skipSeparationSpace(state2, false, -1);
      if (state2.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state2.input.charCodeAt(state2.position);
        continue;
      } else {
        state2.position = captureEnd;
        state2.line = _line;
        state2.lineStart = _lineStart;
        state2.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state2, captureStart, captureEnd, false);
      writeFoldedLines(state2, state2.line - _line);
      captureStart = captureEnd = state2.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state2.position + 1;
    }
    ch = state2.input.charCodeAt(++state2.position);
  }
  captureSegment(state2, captureStart, captureEnd, false);
  if (state2.result) {
    return true;
  }
  state2.kind = _kind;
  state2.result = _result;
  return false;
}
function readSingleQuotedScalar(state2, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state2.input.charCodeAt(state2.position);
  if (ch !== 39) {
    return false;
  }
  state2.kind = "scalar";
  state2.result = "";
  state2.position++;
  captureStart = captureEnd = state2.position;
  while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state2, captureStart, state2.position, true);
      ch = state2.input.charCodeAt(++state2.position);
      if (ch === 39) {
        captureStart = state2.position;
        state2.position++;
        captureEnd = state2.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state2, captureStart, captureEnd, true);
      writeFoldedLines(state2, skipSeparationSpace(state2, false, nodeIndent));
      captureStart = captureEnd = state2.position;
    } else if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
      throwError(state2, "unexpected end of the document within a single quoted scalar");
    } else {
      state2.position++;
      captureEnd = state2.position;
    }
  }
  throwError(state2, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state2, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch !== 34) {
    return false;
  }
  state2.kind = "scalar";
  state2.result = "";
  state2.position++;
  captureStart = captureEnd = state2.position;
  while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state2, captureStart, state2.position, true);
      state2.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state2, captureStart, state2.position, true);
      ch = state2.input.charCodeAt(++state2.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state2, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state2.result += simpleEscapeMap[ch];
        state2.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state2.input.charCodeAt(++state2.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state2, "expected hexadecimal character");
          }
        }
        state2.result += charFromCodepoint(hexResult);
        state2.position++;
      } else {
        throwError(state2, "unknown escape sequence");
      }
      captureStart = captureEnd = state2.position;
    } else if (is_EOL(ch)) {
      captureSegment(state2, captureStart, captureEnd, true);
      writeFoldedLines(state2, skipSeparationSpace(state2, false, nodeIndent));
      captureStart = captureEnd = state2.position;
    } else if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
      throwError(state2, "unexpected end of the document within a double quoted scalar");
    } else {
      state2.position++;
      captureEnd = state2.position;
    }
  }
  throwError(state2, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state2, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state2.tag, _result, _anchor = state2.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state2.anchor !== null) {
    state2.anchorMap[state2.anchor] = _result;
  }
  ch = state2.input.charCodeAt(++state2.position);
  while (ch !== 0) {
    skipSeparationSpace(state2, true, nodeIndent);
    ch = state2.input.charCodeAt(state2.position);
    if (ch === terminator) {
      state2.position++;
      state2.tag = _tag;
      state2.anchor = _anchor;
      state2.kind = isMapping ? "mapping" : "sequence";
      state2.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state2, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state2, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state2.input.charCodeAt(state2.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state2.position++;
        skipSeparationSpace(state2, true, nodeIndent);
      }
    }
    _line = state2.line;
    _lineStart = state2.lineStart;
    _pos = state2.position;
    composeNode(state2, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state2.tag;
    keyNode = state2.result;
    skipSeparationSpace(state2, true, nodeIndent);
    ch = state2.input.charCodeAt(state2.position);
    if ((isExplicitPair || state2.line === _line) && ch === 58) {
      isPair = true;
      ch = state2.input.charCodeAt(++state2.position);
      skipSeparationSpace(state2, true, nodeIndent);
      composeNode(state2, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state2.result;
    }
    if (isMapping) {
      storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state2, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state2, true, nodeIndent);
    ch = state2.input.charCodeAt(state2.position);
    if (ch === 44) {
      readNext = true;
      ch = state2.input.charCodeAt(++state2.position);
    } else {
      readNext = false;
    }
  }
  throwError(state2, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state2, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state2.kind = "scalar";
  state2.result = "";
  while (ch !== 0) {
    ch = state2.input.charCodeAt(++state2.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state2, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state2, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state2, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state2.input.charCodeAt(++state2.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state2.input.charCodeAt(++state2.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state2);
    state2.lineIndent = 0;
    ch = state2.input.charCodeAt(state2.position);
    while ((!detectedIndent || state2.lineIndent < textIndent) && ch === 32) {
      state2.lineIndent++;
      ch = state2.input.charCodeAt(++state2.position);
    }
    if (!detectedIndent && state2.lineIndent > textIndent) {
      textIndent = state2.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state2.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state2.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state2.result += common.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state2.result += " ";
        }
      } else {
        state2.result += common.repeat("\n", emptyLines);
      }
    } else {
      state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state2.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state2.input.charCodeAt(++state2.position);
    }
    captureSegment(state2, captureStart, state2.position, false);
  }
  return true;
}
function readBlockSequence(state2, nodeIndent) {
  var _line, _tag = state2.tag, _anchor = state2.anchor, _result = [], following, detected = false, ch;
  if (state2.firstTabInLine !== -1)
    return false;
  if (state2.anchor !== null) {
    state2.anchorMap[state2.anchor] = _result;
  }
  ch = state2.input.charCodeAt(state2.position);
  while (ch !== 0) {
    if (state2.firstTabInLine !== -1) {
      state2.position = state2.firstTabInLine;
      throwError(state2, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state2.input.charCodeAt(state2.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state2.position++;
    if (skipSeparationSpace(state2, true, -1)) {
      if (state2.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state2.input.charCodeAt(state2.position);
        continue;
      }
    }
    _line = state2.line;
    composeNode(state2, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state2.result);
    skipSeparationSpace(state2, true, -1);
    ch = state2.input.charCodeAt(state2.position);
    if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state2, "bad indentation of a sequence entry");
    } else if (state2.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state2.tag = _tag;
    state2.anchor = _anchor;
    state2.kind = "sequence";
    state2.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state2, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state2.tag, _anchor = state2.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state2.firstTabInLine !== -1)
    return false;
  if (state2.anchor !== null) {
    state2.anchorMap[state2.anchor] = _result;
  }
  ch = state2.input.charCodeAt(state2.position);
  while (ch !== 0) {
    if (!atExplicitKey && state2.firstTabInLine !== -1) {
      state2.position = state2.firstTabInLine;
      throwError(state2, "tab characters must not be used in indentation");
    }
    following = state2.input.charCodeAt(state2.position + 1);
    _line = state2.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state2, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state2.position += 1;
      ch = following;
    } else {
      _keyLine = state2.line;
      _keyLineStart = state2.lineStart;
      _keyPos = state2.position;
      if (!composeNode(state2, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state2.line === _line) {
        ch = state2.input.charCodeAt(state2.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state2.input.charCodeAt(++state2.position);
        }
        if (ch === 58) {
          ch = state2.input.charCodeAt(++state2.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state2, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state2.tag;
          keyNode = state2.result;
        } else if (detected) {
          throwError(state2, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state2.tag = _tag;
          state2.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state2, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state2.tag = _tag;
        state2.anchor = _anchor;
        return true;
      }
    }
    if (state2.line === _line || state2.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state2.line;
        _keyLineStart = state2.lineStart;
        _keyPos = state2.position;
      }
      if (composeNode(state2, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state2.result;
        } else {
          valueNode = state2.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state2, true, -1);
      ch = state2.input.charCodeAt(state2.position);
    }
    if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state2, "bad indentation of a mapping entry");
    } else if (state2.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state2.tag = _tag;
    state2.anchor = _anchor;
    state2.kind = "mapping";
    state2.result = _result;
  }
  return detected;
}
function readTagProperty(state2) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch !== 33)
    return false;
  if (state2.tag !== null) {
    throwError(state2, "duplication of a tag property");
  }
  ch = state2.input.charCodeAt(++state2.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state2.input.charCodeAt(++state2.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state2.input.charCodeAt(++state2.position);
  } else {
    tagHandle = "!";
  }
  _position = state2.position;
  if (isVerbatim) {
    do {
      ch = state2.input.charCodeAt(++state2.position);
    } while (ch !== 0 && ch !== 62);
    if (state2.position < state2.length) {
      tagName = state2.input.slice(_position, state2.position);
      ch = state2.input.charCodeAt(++state2.position);
    } else {
      throwError(state2, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state2.input.slice(_position - 1, state2.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state2, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state2.position + 1;
        } else {
          throwError(state2, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state2.input.charCodeAt(++state2.position);
    }
    tagName = state2.input.slice(_position, state2.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state2, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state2, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state2, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state2.tag = tagName;
  } else if (_hasOwnProperty$1.call(state2.tagMap, tagHandle)) {
    state2.tag = state2.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state2.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state2.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state2, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state2) {
  var _position, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch !== 38)
    return false;
  if (state2.anchor !== null) {
    throwError(state2, "duplication of an anchor property");
  }
  ch = state2.input.charCodeAt(++state2.position);
  _position = state2.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state2.input.charCodeAt(++state2.position);
  }
  if (state2.position === _position) {
    throwError(state2, "name of an anchor node must contain at least one character");
  }
  state2.anchor = state2.input.slice(_position, state2.position);
  return true;
}
function readAlias(state2) {
  var _position, alias, ch;
  ch = state2.input.charCodeAt(state2.position);
  if (ch !== 42)
    return false;
  ch = state2.input.charCodeAt(++state2.position);
  _position = state2.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state2.input.charCodeAt(++state2.position);
  }
  if (state2.position === _position) {
    throwError(state2, "name of an alias node must contain at least one character");
  }
  alias = state2.input.slice(_position, state2.position);
  if (!_hasOwnProperty$1.call(state2.anchorMap, alias)) {
    throwError(state2, 'unidentified alias "' + alias + '"');
  }
  state2.result = state2.anchorMap[alias];
  skipSeparationSpace(state2, true, -1);
  return true;
}
function composeNode(state2, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state2.listener !== null) {
    state2.listener("open", state2);
  }
  state2.tag = null;
  state2.anchor = null;
  state2.kind = null;
  state2.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state2, true, -1)) {
      atNewLine = true;
      if (state2.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state2.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state2.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state2) || readAnchorProperty(state2)) {
      if (skipSeparationSpace(state2, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state2.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state2.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state2.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state2.position - state2.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state2, blockIndent) || readBlockMapping(state2, blockIndent, flowIndent)) || readFlowCollection(state2, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state2, flowIndent) || readSingleQuotedScalar(state2, flowIndent) || readDoubleQuotedScalar(state2, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state2)) {
          hasContent = true;
          if (state2.tag !== null || state2.anchor !== null) {
            throwError(state2, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state2, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state2.tag === null) {
            state2.tag = "?";
          }
        }
        if (state2.anchor !== null) {
          state2.anchorMap[state2.anchor] = state2.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state2, blockIndent);
    }
  }
  if (state2.tag === null) {
    if (state2.anchor !== null) {
      state2.anchorMap[state2.anchor] = state2.result;
    }
  } else if (state2.tag === "?") {
    if (state2.result !== null && state2.kind !== "scalar") {
      throwError(state2, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state2.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state2.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state2.implicitTypes[typeIndex];
      if (type2.resolve(state2.result)) {
        state2.result = type2.construct(state2.result);
        state2.tag = type2.tag;
        if (state2.anchor !== null) {
          state2.anchorMap[state2.anchor] = state2.result;
        }
        break;
      }
    }
  } else if (state2.tag !== "!") {
    if (_hasOwnProperty$1.call(state2.typeMap[state2.kind || "fallback"], state2.tag)) {
      type2 = state2.typeMap[state2.kind || "fallback"][state2.tag];
    } else {
      type2 = null;
      typeList = state2.typeMap.multi[state2.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state2.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state2, "unknown tag !<" + state2.tag + ">");
    }
    if (state2.result !== null && type2.kind !== state2.kind) {
      throwError(state2, "unacceptable node kind for !<" + state2.tag + '> tag; it should be "' + type2.kind + '", not "' + state2.kind + '"');
    }
    if (!type2.resolve(state2.result, state2.tag)) {
      throwError(state2, "cannot resolve a node with !<" + state2.tag + "> explicit tag");
    } else {
      state2.result = type2.construct(state2.result, state2.tag);
      if (state2.anchor !== null) {
        state2.anchorMap[state2.anchor] = state2.result;
      }
    }
  }
  if (state2.listener !== null) {
    state2.listener("close", state2);
  }
  return state2.tag !== null || state2.anchor !== null || hasContent;
}
function readDocument(state2) {
  var documentStart = state2.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state2.version = null;
  state2.checkLineBreaks = state2.legacy;
  state2.tagMap = /* @__PURE__ */ Object.create(null);
  state2.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
    skipSeparationSpace(state2, true, -1);
    ch = state2.input.charCodeAt(state2.position);
    if (state2.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state2.input.charCodeAt(++state2.position);
    _position = state2.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state2.input.charCodeAt(++state2.position);
    }
    directiveName = state2.input.slice(_position, state2.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state2, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state2.input.charCodeAt(++state2.position);
      }
      if (ch === 35) {
        do {
          ch = state2.input.charCodeAt(++state2.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch))
        break;
      _position = state2.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state2.input.charCodeAt(++state2.position);
      }
      directiveArgs.push(state2.input.slice(_position, state2.position));
    }
    if (ch !== 0)
      readLineBreak(state2);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state2, directiveName, directiveArgs);
    } else {
      throwWarning(state2, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state2, true, -1);
  if (state2.lineIndent === 0 && state2.input.charCodeAt(state2.position) === 45 && state2.input.charCodeAt(state2.position + 1) === 45 && state2.input.charCodeAt(state2.position + 2) === 45) {
    state2.position += 3;
    skipSeparationSpace(state2, true, -1);
  } else if (hasDirectives) {
    throwError(state2, "directives end mark is expected");
  }
  composeNode(state2, state2.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state2, true, -1);
  if (state2.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state2.input.slice(documentStart, state2.position))) {
    throwWarning(state2, "non-ASCII line breaks are interpreted as content");
  }
  state2.documents.push(state2.result);
  if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
    if (state2.input.charCodeAt(state2.position) === 46) {
      state2.position += 3;
      skipSeparationSpace(state2, true, -1);
    }
    return;
  }
  if (state2.position < state2.length - 1) {
    throwError(state2, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += "\n";
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state2 = new State$1(input, options);
  var nullpos = input.indexOf("\0");
  if (nullpos !== -1) {
    state2.position = nullpos;
    throwError(state2, "null byte is not allowed in input");
  }
  state2.input += "\0";
  while (state2.input.charCodeAt(state2.position) === 32) {
    state2.lineIndent += 1;
    state2.position += 1;
  }
  while (state2.position < state2.length - 1) {
    readDocument(state2);
  }
  return state2.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index2 = 0, length2 = documents.length; index2 < length2; index2 += 1) {
    iterator(documents[index2]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var JSON_SCHEMA = json;
var load = loader.load;
function extractFrontMatter(text2) {
  const matches = text2.match(frontMatterRegex);
  if (!matches) {
    return {
      text: text2,
      metadata: {}
    };
  }
  let parsed = load(matches[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: JSON_SCHEMA
  }) ?? {};
  parsed = typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  const metadata = {};
  if (parsed.displayMode) {
    metadata.displayMode = parsed.displayMode.toString();
  }
  if (parsed.title) {
    metadata.title = parsed.title.toString();
  }
  if (parsed.config) {
    metadata.config = parsed.config;
  }
  return {
    text: text2.slice(matches[0].length),
    metadata
  };
}
const cleanupText = (code) => {
  return code.replace(/\r\n?/g, "\n").replace(
    /<(\w+)([^>]*)>/g,
    (match, tag, attributes) => "<" + tag + attributes.replace(/="([^"]*)"/g, "='$1'") + ">"
  );
};
const processFrontmatter = (code) => {
  const { text: text2, metadata } = extractFrontMatter(code);
  const { displayMode, title, config: config2 = {} } = metadata;
  if (displayMode) {
    if (!config2.gantt) {
      config2.gantt = {};
    }
    config2.gantt.displayMode = displayMode;
  }
  return { title, config: config2, text: text2 };
};
const processDirectives = (code) => {
  const initDirective = utils$1.detectInit(code) ?? {};
  const wrapDirectives = utils$1.detectDirective(code, "wrap");
  if (Array.isArray(wrapDirectives)) {
    initDirective.wrap = wrapDirectives.some(({ type: type2 }) => {
    });
  } else if ((wrapDirectives == null ? void 0 : wrapDirectives.type) === "wrap") {
    initDirective.wrap = true;
  }
  return {
    text: removeDirectives(code),
    directive: initDirective
  };
};
function preprocessDiagram(code) {
  const cleanedCode = cleanupText(code);
  const frontMatterResult = processFrontmatter(cleanedCode);
  const directiveResult = processDirectives(frontMatterResult.text);
  const config2 = cleanAndMerge(frontMatterResult.config, directiveResult.directive);
  code = cleanupComments(directiveResult.text);
  return {
    code,
    title: frontMatterResult.title,
    config: config2
  };
}
const MAX_TEXTLENGTH = 5e4;
const MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
const SECURITY_LVL_SANDBOX = "sandbox";
const SECURITY_LVL_LOOSE = "loose";
const XMLNS_SVG_STD = "http://www.w3.org/2000/svg";
const XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink";
const XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml";
const IFRAME_WIDTH = "100%";
const IFRAME_HEIGHT = "100%";
const IFRAME_STYLES = "border:0;margin:0;";
const IFRAME_BODY_STYLE = "margin:0";
const IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups";
const IFRAME_NOT_SUPPORTED_MSG = 'The "iframe" tag is not supported by your browser.';
const DOMPURIFY_TAGS = ["foreignobject"];
const DOMPURIFY_ATTR = ["dominant-baseline"];
function processAndSetConfigs(text2) {
  const processed = preprocessDiagram(text2);
  reset();
  addDirective(processed.config ?? {});
  return processed;
}
async function parse$1(text2, parseOptions) {
  addDiagrams();
  text2 = processAndSetConfigs(text2).code;
  try {
    await getDiagramFromText(text2);
  } catch (error) {
    if (parseOptions == null ? void 0 : parseOptions.suppressErrors) {
      return false;
    }
    throw error;
  }
  return true;
}
const cssImportantStyles = (cssClass, element, cssClasses = []) => {
  return `
.${cssClass} ${element} { ${cssClasses.join(" !important; ")} !important; }`;
};
const createCssStyles = (config2, classDefs = {}) => {
  var _a2;
  let cssStyles = "";
  if (config2.themeCSS !== void 0) {
    cssStyles += `
${config2.themeCSS}`;
  }
  if (config2.fontFamily !== void 0) {
    cssStyles += `
:root { --mermaid-font-family: ${config2.fontFamily}}`;
  }
  if (config2.altFontFamily !== void 0) {
    cssStyles += `
:root { --mermaid-alt-font-family: ${config2.altFontFamily}}`;
  }
  if (!isEmpty(classDefs)) {
    const htmlLabels = config2.htmlLabels || ((_a2 = config2.flowchart) == null ? void 0 : _a2.htmlLabels);
    const cssHtmlElements = ["> *", "span"];
    const cssShapeElements = ["rect", "polygon", "ellipse", "circle", "path"];
    const cssElements = htmlLabels ? cssHtmlElements : cssShapeElements;
    for (const classId in classDefs) {
      const styleClassDef = classDefs[classId];
      if (!isEmpty(styleClassDef.styles)) {
        cssElements.forEach((cssElement) => {
          cssStyles += cssImportantStyles(styleClassDef.id, cssElement, styleClassDef.styles);
        });
      }
      if (!isEmpty(styleClassDef.textStyles)) {
        cssStyles += cssImportantStyles(styleClassDef.id, "tspan", styleClassDef.textStyles);
      }
    }
  }
  return cssStyles;
};
const createUserStyles = (config2, graphType, classDefs, svgId) => {
  const userCSSstyles = createCssStyles(config2, classDefs);
  const allStyles = getStyles$1(graphType, userCSSstyles, config2.themeVariables);
  return serialize(compile(`${svgId}{${allStyles}}`), stringify);
};
const cleanUpSvgCode = (svgCode = "", inSandboxMode, useArrowMarkerUrls) => {
  let cleanedUpSvg = svgCode;
  if (!useArrowMarkerUrls && !inSandboxMode) {
    cleanedUpSvg = cleanedUpSvg.replace(
      /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
      'marker-end="url(#'
    );
  }
  cleanedUpSvg = decodeEntities(cleanedUpSvg);
  cleanedUpSvg = cleanedUpSvg.replace(/<br>/g, "<br/>");
  return cleanedUpSvg;
};
const putIntoIFrame = (svgCode = "", svgElement) => {
  var _a2, _b;
  const height = ((_b = (_a2 = svgElement == null ? void 0 : svgElement.viewBox) == null ? void 0 : _a2.baseVal) == null ? void 0 : _b.height) ? svgElement.viewBox.baseVal.height + "px" : IFRAME_HEIGHT;
  const base64encodedSrc = btoa('<body style="' + IFRAME_BODY_STYLE + '">' + svgCode + "</body>");
  return `<iframe style="width:${IFRAME_WIDTH};height:${height};${IFRAME_STYLES}" src="data:text/html;base64,${base64encodedSrc}" sandbox="${IFRAME_SANDBOX_OPTS}">
  ${IFRAME_NOT_SUPPORTED_MSG}
</iframe>`;
};
const appendDivSvgG = (parentRoot, id2, enclosingDivId, divStyle, svgXlink) => {
  const enclosingDiv = parentRoot.append("div");
  enclosingDiv.attr("id", enclosingDivId);
  if (divStyle) {
    enclosingDiv.attr("style", divStyle);
  }
  const svgNode2 = enclosingDiv.append("svg").attr("id", id2).attr("width", "100%").attr("xmlns", XMLNS_SVG_STD);
  if (svgXlink) {
    svgNode2.attr("xmlns:xlink", svgXlink);
  }
  svgNode2.append("g");
  return parentRoot;
};
function sandboxedIframe(parentNode, iFrameId) {
  return parentNode.append("iframe").attr("id", iFrameId).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const removeExistingElements = (doc, id2, divId, iFrameId) => {
  var _a2, _b, _c;
  (_a2 = doc.getElementById(id2)) == null ? void 0 : _a2.remove();
  (_b = doc.getElementById(divId)) == null ? void 0 : _b.remove();
  (_c = doc.getElementById(iFrameId)) == null ? void 0 : _c.remove();
};
const render$1$1 = async function(id2, text2, svgContainingElement) {
  var _a2, _b, _c, _d, _e, _f;
  addDiagrams();
  const processed = processAndSetConfigs(text2);
  text2 = processed.code;
  const config2 = getConfig$1();
  log$1.debug(config2);
  if (text2.length > ((config2 == null ? void 0 : config2.maxTextSize) ?? MAX_TEXTLENGTH)) {
    text2 = MAX_TEXTLENGTH_EXCEEDED_MSG;
  }
  const idSelector = "#" + id2;
  const iFrameID = "i" + id2;
  const iFrameID_selector = "#" + iFrameID;
  const enclosingDivID = "d" + id2;
  const enclosingDivID_selector = "#" + enclosingDivID;
  let root2 = d3select("body");
  const isSandboxed = config2.securityLevel === SECURITY_LVL_SANDBOX;
  const isLooseSecurityLevel = config2.securityLevel === SECURITY_LVL_LOOSE;
  const fontFamily = config2.fontFamily;
  if (svgContainingElement !== void 0) {
    if (svgContainingElement) {
      svgContainingElement.innerHTML = "";
    }
    if (isSandboxed) {
      const iframe = sandboxedIframe(d3select(svgContainingElement), iFrameID);
      root2 = d3select(iframe.nodes()[0].contentDocument.body);
      root2.node().style.margin = 0;
    } else {
      root2 = d3select(svgContainingElement);
    }
    appendDivSvgG(root2, id2, enclosingDivID, `font-family: ${fontFamily}`, XMLNS_XLINK_STD);
  } else {
    removeExistingElements(document, id2, enclosingDivID, iFrameID);
    if (isSandboxed) {
      const iframe = sandboxedIframe(d3select("body"), iFrameID);
      root2 = d3select(iframe.nodes()[0].contentDocument.body);
      root2.node().style.margin = 0;
    } else {
      root2 = d3select("body");
    }
    appendDivSvgG(root2, id2, enclosingDivID);
  }
  let diag;
  let parseEncounteredException;
  try {
    diag = await getDiagramFromText(text2, { title: processed.title });
  } catch (error) {
    diag = new Diagram("error");
    parseEncounteredException = error;
  }
  const element = root2.select(enclosingDivID_selector).node();
  const diagramType = diag.type;
  const svg2 = element.firstChild;
  const firstChild = svg2.firstChild;
  const diagramClassDefs = (_b = (_a2 = diag.renderer).getClasses) == null ? void 0 : _b.call(_a2, text2, diag);
  const rules = createUserStyles(config2, diagramType, diagramClassDefs, idSelector);
  const style1 = document.createElement("style");
  style1.innerHTML = rules;
  svg2.insertBefore(style1, firstChild);
  try {
    await diag.renderer.draw(text2, id2, version$1, diag);
  } catch (e) {
    errorRenderer.draw(text2, id2, version$1);
    throw e;
  }
  const svgNode2 = root2.select(`${enclosingDivID_selector} svg`);
  const a11yTitle = (_d = (_c = diag.db).getAccTitle) == null ? void 0 : _d.call(_c);
  const a11yDescr = (_f = (_e = diag.db).getAccDescription) == null ? void 0 : _f.call(_e);
  addA11yInfo(diagramType, svgNode2, a11yTitle, a11yDescr);
  root2.select(`[id="${id2}"]`).selectAll("foreignobject > *").attr("xmlns", XMLNS_XHTML_STD);
  let svgCode = root2.select(enclosingDivID_selector).node().innerHTML;
  log$1.debug("config.arrowMarkerAbsolute", config2.arrowMarkerAbsolute);
  svgCode = cleanUpSvgCode(svgCode, isSandboxed, evaluate(config2.arrowMarkerAbsolute));
  if (isSandboxed) {
    const svgEl = root2.select(enclosingDivID_selector + " svg").node();
    svgCode = putIntoIFrame(svgCode, svgEl);
  } else if (!isLooseSecurityLevel) {
    svgCode = purify.sanitize(svgCode, {
      ADD_TAGS: DOMPURIFY_TAGS,
      ADD_ATTR: DOMPURIFY_ATTR
    });
  }
  attachFunctions();
  if (parseEncounteredException) {
    throw parseEncounteredException;
  }
  const tmpElementSelector = isSandboxed ? iFrameID_selector : enclosingDivID_selector;
  const node2 = d3select(tmpElementSelector).node();
  if (node2 && "remove" in node2) {
    node2.remove();
  }
  return {
    svg: svgCode,
    bindFunctions: diag.db.bindFunctions
  };
};
function initialize$1(options = {}) {
  var _a2;
  if ((options == null ? void 0 : options.fontFamily) && !((_a2 = options.themeVariables) == null ? void 0 : _a2.fontFamily)) {
    if (!options.themeVariables) {
      options.themeVariables = {};
    }
    options.themeVariables.fontFamily = options.fontFamily;
  }
  saveConfigFromInitialize(options);
  if ((options == null ? void 0 : options.theme) && options.theme in theme$1) {
    options.themeVariables = theme$1[options.theme].getThemeVariables(
      options.themeVariables
    );
  } else if (options) {
    options.themeVariables = theme$1.default.getThemeVariables(options.themeVariables);
  }
  const config2 = typeof options === "object" ? setSiteConfig(options) : getSiteConfig();
  setLogLevel$1(config2.logLevel);
  addDiagrams();
}
const getDiagramFromText = (text2, metadata = {}) => {
  const { code } = preprocessDiagram(text2);
  return getDiagramFromText$1(code, metadata);
};
function addA11yInfo(diagramType, svgNode2, a11yTitle, a11yDescr) {
  setA11yDiagramInfo(svgNode2, diagramType);
  addSVGa11yTitleDescription(svgNode2, a11yTitle, a11yDescr, svgNode2.attr("id"));
}
const mermaidAPI = Object.freeze({
  render: render$1$1,
  parse: parse$1,
  getDiagramFromText,
  initialize: initialize$1,
  getConfig: getConfig$1,
  setConfig: setConfig$1,
  getSiteConfig,
  updateSiteConfig,
  reset: () => {
    reset();
  },
  globalReset: () => {
    reset(defaultConfig$1);
  },
  defaultConfig: defaultConfig$1
});
setLogLevel$1(getConfig$1().logLevel);
reset(getConfig$1());
const loadRegisteredDiagrams = async () => {
  log$1.debug(`Loading registered diagrams`);
  const results = await Promise.allSettled(
    Object.entries(detectors).map(async ([key, { detector: detector2, loader: loader2 }]) => {
      if (loader2) {
        try {
          getDiagram(key);
        } catch (error) {
          try {
            const { diagram: diagram2, id: id2 } = await loader2();
            registerDiagram(id2, diagram2, detector2);
          } catch (err) {
            log$1.error(`Failed to load external diagram with key ${key}. Removing from detectors.`);
            delete detectors[key];
            throw err;
          }
        }
      }
    })
  );
  const failed = results.filter((result) => result.status === "rejected");
  if (failed.length > 0) {
    log$1.error(`Failed to load ${failed.length} external diagrams`);
    for (const res of failed) {
      log$1.error(res);
    }
    throw new Error(`Failed to load ${failed.length} external diagrams`);
  }
};
const handleError = (error, errors, parseError) => {
  log$1.warn(error);
  if (isDetailedError(error)) {
    if (parseError) {
      parseError(error.str, error.hash);
    }
    errors.push({ ...error, message: error.str, error });
  } else {
    if (parseError) {
      parseError(error);
    }
    if (error instanceof Error) {
      errors.push({
        str: error.message,
        message: error.message,
        hash: error.name,
        error
      });
    }
  }
};
const run = async function(options = {
  querySelector: ".mermaid"
}) {
  try {
    await runThrowsErrors(options);
  } catch (e) {
    if (isDetailedError(e)) {
      log$1.error(e.str);
    }
    if (mermaid.parseError) {
      mermaid.parseError(e);
    }
    if (!options.suppressErrors) {
      log$1.error("Use the suppressErrors option to suppress these errors");
      throw e;
    }
  }
};
const runThrowsErrors = async function({ postRenderCallback, querySelector, nodes } = {
  querySelector: ".mermaid"
}) {
  const conf = mermaidAPI.getConfig();
  log$1.debug(`${!postRenderCallback ? "No " : ""}Callback function found`);
  let nodesToProcess;
  if (nodes) {
    nodesToProcess = nodes;
  } else if (querySelector) {
    nodesToProcess = document.querySelectorAll(querySelector);
  } else {
    throw new Error("Nodes and querySelector are both undefined");
  }
  log$1.debug(`Found ${nodesToProcess.length} diagrams`);
  if ((conf == null ? void 0 : conf.startOnLoad) !== void 0) {
    log$1.debug("Start On Load: " + (conf == null ? void 0 : conf.startOnLoad));
    mermaidAPI.updateSiteConfig({ startOnLoad: conf == null ? void 0 : conf.startOnLoad });
  }
  const idGenerator = new utils$1.InitIDGenerator(conf.deterministicIds, conf.deterministicIDSeed);
  let txt;
  const errors = [];
  for (const element of Array.from(nodesToProcess)) {
    log$1.info("Rendering diagram: " + element.id);
    /*! Check if previously processed */
    if (element.getAttribute("data-processed")) {
      continue;
    }
    element.setAttribute("data-processed", "true");
    const id2 = `mermaid-${idGenerator.next()}`;
    txt = element.innerHTML;
    txt = dedent(utils$1.entityDecode(txt)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const init2 = utils$1.detectInit(txt);
    if (init2) {
      log$1.debug("Detected early reinit: ", init2);
    }
    try {
      const { svg: svg2, bindFunctions } = await render$2(id2, txt, element);
      element.innerHTML = svg2;
      if (postRenderCallback) {
        await postRenderCallback(id2);
      }
      if (bindFunctions) {
        bindFunctions(element);
      }
    } catch (error) {
      handleError(error, errors, mermaid.parseError);
    }
  }
  if (errors.length > 0) {
    throw errors[0];
  }
};
const initialize = function(config2) {
  mermaidAPI.initialize(config2);
};
const init$2 = async function(config2, nodes, callback) {
  log$1.warn("mermaid.init is deprecated. Please use run instead.");
  if (config2) {
    initialize(config2);
  }
  const runOptions = { postRenderCallback: callback, querySelector: ".mermaid" };
  if (typeof nodes === "string") {
    runOptions.querySelector = nodes;
  } else if (nodes) {
    if (nodes instanceof HTMLElement) {
      runOptions.nodes = [nodes];
    } else {
      runOptions.nodes = nodes;
    }
  }
  await run(runOptions);
};
const registerExternalDiagrams = async (diagrams2, {
  lazyLoad = true
} = {}) => {
  registerLazyLoadedDiagrams(...diagrams2);
  if (lazyLoad === false) {
    await loadRegisteredDiagrams();
  }
};
const contentLoaded = function() {
  if (mermaid.startOnLoad) {
    const { startOnLoad } = mermaidAPI.getConfig();
    if (startOnLoad) {
      mermaid.run().catch((err) => log$1.error("Mermaid failed to initialize", err));
    }
  }
};
if (typeof document !== "undefined") {
  /*!
   * Wait for document loaded before starting the execution
   */
  window.addEventListener("load", contentLoaded, false);
}
const setParseErrorHandler = function(parseErrorHandler) {
  mermaid.parseError = parseErrorHandler;
};
const executionQueue = [];
let executionQueueRunning = false;
const executeQueue = async () => {
  if (executionQueueRunning) {
    return;
  }
  executionQueueRunning = true;
  while (executionQueue.length > 0) {
    const f = executionQueue.shift();
    if (f) {
      try {
        await f();
      } catch (e) {
        log$1.error("Error executing queue", e);
      }
    }
  }
  executionQueueRunning = false;
};
const parse = async (text2, parseOptions) => {
  return new Promise((resolve, reject) => {
    const performCall = () => new Promise((res, rej) => {
      mermaidAPI.parse(text2, parseOptions).then(
        (r) => {
          res(r);
          resolve(r);
        },
        (e) => {
          var _a2;
          log$1.error("Error parsing", e);
          (_a2 = mermaid.parseError) == null ? void 0 : _a2.call(mermaid, e);
          rej(e);
          reject(e);
        }
      );
    });
    executionQueue.push(performCall);
    executeQueue().catch(reject);
  });
};
const render$2 = (id2, text2, container) => {
  return new Promise((resolve, reject) => {
    const performCall = () => new Promise((res, rej) => {
      mermaidAPI.render(id2, text2, container).then(
        (r) => {
          res(r);
          resolve(r);
        },
        (e) => {
          var _a2;
          log$1.error("Error parsing", e);
          (_a2 = mermaid.parseError) == null ? void 0 : _a2.call(mermaid, e);
          rej(e);
          reject(e);
        }
      );
    });
    executionQueue.push(performCall);
    executeQueue().catch(reject);
  });
};
const mermaid = {
  startOnLoad: true,
  mermaidAPI,
  parse,
  render: render$2,
  init: init$2,
  run,
  registerExternalDiagrams,
  initialize,
  parseError: void 0,
  contentLoaded,
  setParseErrorHandler,
  detectType
};
const init = async (externalDiagrams) => {
  try {
    if (mermaid.registerExternalDiagrams)
      await mermaid.registerExternalDiagrams(externalDiagrams);
  } catch (e) {
    console.error(e);
  }
};
const render$1 = async (id2, code, config2) => {
  mermaid.initialize(config2);
  const { svg: svg2 } = await mermaid.render(id2, code);
  return svg2;
};
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"zh-cn","dir":"ltr","title":"笔记","description":"个人博客，记录随笔与学习笔记","base":"/","head":[],"appearance":true,"themeConfig":{"blog":{"pagesData":[{"route":"/2023","meta":{"title":"2023年终总结 与 未来计划","date":"2023-12-28 00:00:00","tags":["年终总结"],"tag":["年终总结"],"description":"\\r\\n\\r\\n2023年应该是我整体 变化和成长比较大的一年。期间经历了 年龄焦虑 -\\r\\n\\r\\n中间也有过一段时间特别焦虑，觉得运气不好赶上了经济寒冬，万一xxx怎么办，后来听到一句话：\'环境和你有什么关系，","cover":""}},{"route":"/about","meta":{"title":"关于自己","date":"2021-12-11 00:00:00","tags":["其它"],"tag":["其它"],"description":"\\r\\n巩固自己的基础知识，提升技术深度\\r\\n\\r\\n\\r\\n 目录\\r\\n* 2023年终总结 与 未来计划\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n 初衷\\r\\n\\r\\n之前也有在学习，但是知识点比较零碎，而且看过后过一段时间就忘记了，所以想记","cover":""}},{"route":"/browser/history","meta":{"title":"路由基础-history","date":"2023-11-14 00:00:00","tags":["浏览器","todo"],"tag":["浏览器","todo"],"description":"\\r\\n 网页url组成部分\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n history 新增 api\\r\\n\\r\\n\\r\\n\\r\\n history 详解\\r\\n\\r\\ntodo\\r\\n\\r\\nhttps://blog.csdn.net/caseywei/a","cover":""}},{"route":"/browser/index","meta":{"hidden":true,"title":"简介","date":"2024-01-25 17:35:34","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n* 回流和重绘\\r\\n* 详解输入url发生了什么\\r\\n* 路由基础-history\\r\\n\\r\\n\\r\\n浏览器内核分类\\r\\n\\r\\n渲染引擎和JS引擎（⚠️注意：我们常说的浏览器内核就是指渲染引擎）\\r\\n","cover":""}},{"route":"/browser/url","meta":{"sidebar":null,"group":null,"title":"详解输入url后发生了什么","date":"2023-11-14 00:00:00","isTimeLine":true,"tags":["浏览器"],"tag":["浏览器"],"description":"\\r\\nhttps://juejin.cn/post/7028385332391477255\\r\\n\\r\\nhttps://juejin.cn/post/6952560222472765448\\r\\n\\r\\n 过程\\r\\n\\r","cover":""}},{"route":"/browser/回流和重绘","meta":{"sidebar":null,"group":null,"title":"回流和重绘","date":"2023-11-14 00:00:00","sticky":1,"tag":[],"description":"\\r\\n 页面渲染过程\\r\\n\\r\\n\\r\\n\\r\\n* 解析HTML构建DOM Tree\\r\\n* 解析CSS构建CSSOM Tree\\r\\n* 构建渲染树（Render Tree），渲染树🌲只包含渲染网页所需的节点\\r\\n\\r\\n","cover":""}},{"route":"/browser/常见攻击方式","meta":{"title":"常见攻击方式","date":"2023-11-21 00:00:00","tags":null,"tag":[],"description":"\\r\\n XSS攻击\\r\\n\\r\\n 什么是XSS？\\r\\n\\r\\nXSS 全称是 Cross Site Scripting，跨站脚本\\r\\n\\r\\nXSS是指黑客往页面中注入恶意脚本，从而在用户浏览页面时利用恶意脚本对用户实施","cover":""}},{"route":"/browser/浏览器同源策略","meta":{"title":"浏览器同源策略","date":"2023-11-21 00:00:00","tags":null,"tag":[],"description":"\\r\\n 浏览器同源策略?\\r\\n\\r\\n同源策略是浏览器的一种自我保护行为。所谓的同源指的是：协议，域名，端口均要相同\\r\\n\\r\\n特殊： 以下三个标签不受同源策略限制：\\r\\n\\r\\n```text\\r\\n<img src=\\"","cover":""}},{"route":"/browser/浏览器是如何解析代码的","meta":{"sidebar":null,"group":null,"title":"浏览器是如何解析代码的","date":"2023-11-14 00:00:00","isTimeLine":true,"tags":["浏览器"],"tag":["浏览器"],"description":"\\r\\n\\r\\n\\r\\n解析HTML\\r\\n\\r\\nHTML是逐行解析的，浏览器的渲染引擎会将HTML文档解析并转换成DOM节点。\\r\\n\\r\\n* 将HTML解析成许多Tokens\\r\\n* 将Tokens解析成object\\r\\n*","cover":""}},{"route":"/browser/浏览器缓存","meta":{"title":"浏览器的缓存机制","date":"2023-11-21 00:00:00","tags":null,"tag":[],"description":"\\r\\n 认识浏览器缓存\\r\\n\\r\\n当浏览器请求一个网站时，会加载各种资源，对于一些不经常变动的资源，浏览器会将他们保存在本地内存中，下次访问时直接加载这些资源，提高访问速度。\\r\\n\\r\\n\\r\\n* disk cac","cover":""}},{"route":"/browser/浏览器详解","meta":{"title":"","date":"2023-12-11 09:58:18","tag":[],"cover":""}},{"route":"/internet/CSRF攻击","meta":{"sidebar":null,"group":null,"title":"CSRF攻击","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\nCSRF 跨站请求伪造\\r\\nCross Site Request Forgery，是指攻击者可以在用户不知情的情况下，窃用其身份在对应的网站进行操作\\r\\n\\r\\n原理：攻击者诱导受害者进入第三方网站，在第","cover":""}},{"route":"/internet/http-请求头","meta":{"sidebar":null,"group":null,"title":"http-请求头","isTimeLine":true,"date":"2023-11-28 00:00:00","tag":[],"description":"\\r\\n\\r\\n X-Frame-Options\\r\\n\\r\\n\\r\\nX-Frame-Options有以下三种配置：\\r\\n\\r\\n* DENY：完全禁止该页面被嵌入到任何框架中，无论嵌入页面的来源是什么。\\r\\n* SAMEOR","cover":""}},{"route":"/internet/http","meta":{"sidebar":null,"group":null,"title":"http","isTimeLine":true,"date":"2023-11-28 00:00:00","tag":[],"description":"\\r\\nhttps://zhuanlan.zhihu.com/p/488681676\\r\\n\\r\\n http 历程\\r\\n\\r\\n\\r\\n http1.0\\r\\n\\r\\n每次请求都需要重新建立tcp连接，请求完后立即断开与服务器连","cover":""}},{"route":"/internet/index","meta":{"hidden":true,"title":"记录一下项目中一些关键的点和一些细节实现","date":"2023-11-29 11:40:58","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n* http\\r\\n* XSS攻击\\r\\n* CSRF攻击\\r\\n\\r","cover":""}},{"route":"/internet/XSS攻击","meta":{"sidebar":null,"group":null,"title":"xss攻击","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n XSS 跨站脚本攻击\\r\\n\\r\\n指攻击者在网页中注入恶意代码，在用户浏览网页的时候进行攻击。\\r\\n\\r\\n类型：\\r\\n\\r\\n反射型（非持久性）\\r\\n\\r\\n原理：将攻击代码放在 url 地址的请求参数中，其他用户访","cover":""}},{"route":"/mapping/all","meta":{"isTimeLine":true,"title":"思维导图汇总","date":"2021-11-21 00:00:00","tags":["思维导图"],"tag":["思维导图"],"description":"\\r\\n\\r\\n> 下载过很多思维导图软件，有的限制节点数，有的限制文件数（心累），我觉得这个用起来还是比较顺手的。\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/mapping/index","meta":{"hidden":true,"title":"简介","date":"2023-11-10 17:19:38","tag":[],"description":"\\r\\n\\r","cover":""}},{"route":"/note/bugs","meta":{"title":"问题记录","date":"2025-04-10 16:00:00","tags":["bugs"],"tag":["bugs"],"description":"\\r\\n问题记录整理\\r\\n\\r\\n 1、node-sass安装失败\\r\\n\\r\\nNode-sass安装失败解决\\r\\n\\r\\n```text\\r\\nyarn config set sass_binary_site https:/","cover":""}},{"route":"/expand/manpower/bpo","meta":{"isTimeLine":true,"title":"bpo","date":"2024-04-03 15:00:31","tag":[],"description":"\\r\\n bpo\\r\\n\\r\\n企业将一些重复性的非核心或核心业务流程外包给供应商，以降低成本，同时提高服务质量\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/expand/manpower/index","meta":{"hidden":true,"title":"简介","date":"2024-04-03 15:00:31","tag":[],"description":"\\r\\n业务学习，拓展一下自己的知识面。\\r\\n\\r\\n 目录\\r\\n\\r\\n* bpo-业务流程外包\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/frame/nodejs/index","meta":{"hidden":true,"title":"简介","date":"2024-09-18 10:49:48","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n* 洋葱模型\\r\\n* nodejs框架对比\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/frame/nodejs/nestjs初探","meta":{"title":"","date":"2024-09-18 10:49:48","tag":[],"cover":""}},{"route":"/frame/nodejs/nodejs框架对比","meta":{"sidebar":null,"title":"nodejs框架对比","date":"2024-09-18 10:49:48","tag":[],"description":"\\r\\n 框架\\r\\n\\r\\n* express\\r\\n* koa\\r\\n* egg\\r\\n* midway\\r\\n* nest\\r\\n* ...\\r\\n\\r\\n express\\r\\n\\r\\nExpress 是一个保持最小规模的灵活的 Node.","cover":""}},{"route":"/frame/nodejs/洋葱模型","meta":{"sidebar":null,"title":"洋葱模型","date":"2022-09-14 00:00:00","tags":["nodejs"],"tag":["nodejs"],"description":"\\r\\n洋葱圈模型的执行顺序是从外层中间件进入，然后依次经过内层中间件，最后再从外层中间件返回。\\r\\n\\r\\n```js\\r\\n// demo\\r\\nconst Koa = require(\\"koa\\")\\r\\nconst ","cover":""}},{"route":"/frame/react/index","meta":{"hidden":true,"title":"简介","date":"2024-08-21 10:17:21","tag":[],"description":"\\r\\nvue3笔记，只记录一些关键点或者自己觉得容易忘记的，基础知识不记录。\\r\\n\\r\\n 常看常新的图\\r\\n\\r\\n进阶\\r\\n\\r\\n* 状态管理\\r\\n* 中间件 Middleware \\r\\n* 中间件 redux-sag","cover":""}},{"route":"/frame/react/Middleware","meta":{"sidebar":null,"title":"middleware","date":"2023-09-14 00:00:00","tags":["react","middleware"],"tag":["react","middleware"],"description":"\\r\\n Middleware是什么?\\r\\n\\r\\n一个框架的middleware，就是指这个框架允许我们在某个流程的执行中间插入我们自定义的一段代码。\\r\\n\\r\\nRedux的middleware特性：\\r\\n\\r\\n* ","cover":""}},{"route":"/frame/react/redux-saga","meta":{"sidebar":null,"title":"redux-saga","date":"2023-09-14 00:00:00","tags":["react","redux-saga"],"tag":["react","redux-saga"],"description":"\\r\\ntodo: 不是很理解\\r\\n\\r\\n```js\\r\\n// yarn add redux-saga\\r\\n\\r\\nimport { createStore, applyMiddleware } from \'redu","cover":""}},{"route":"/frame/react/redux-thunk","meta":{"sidebar":null,"title":"redux-thunk","date":"2023-09-14 00:00:00","tags":["react","redux-thunk"],"tag":["react","redux-thunk"],"description":"\\r\\nredux-thunk主要的功能就是可以让我们dispatch一个函数，而不只是普通的 Object\\r\\n\\r\\n让 dispatch 支持函数\\r\\n\\r\\n 用法\\r\\n\\r\\n```js\\r\\n// 注册\\r\\nimpo","cover":""}},{"route":"/frame/react/router","meta":{"title":"","date":"2024-08-02 10:44:05","tag":[],"cover":""}},{"route":"/frame/react/状态管理","meta":{"sidebar":null,"title":"状态管理","date":"2023-09-14 00:00:00","tags":["react","状态管理"],"tag":["react","状态管理"],"description":"\\r\\n\\r\\n Flux\\r\\n\\r\\nFlux最大特点是数据单向流动\\r\\n\\r\\n\\r\\n\\r\\n* View 视图层\\r\\n* Action 动作 （视图层发来的消息）\\r\\n* Dispacher 派发器（用来接收\\r\\n* Stor","cover":""}},{"route":"/frame/vue2/diff","meta":{"sidebar":null,"title":"虚拟dom和diff算法 - 双端diff","date":"2022-09-14 00:00:00","tags":["vue2"],"tag":["vue2"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/frame/vue2/index","meta":{"hidden":true,"title":"简介","date":"2024-02-27 09:21:52","tag":[],"description":"\\r\\nvue3笔记，只记录一些关键点或者自己觉得容易忘记的，基础知识不记录。\\r\\n\\r\\n 常看常新的图\\r\\n\\r\\n\\r\\n\\r\\n 目录\\r\\n\\r\\n进阶\\r\\n\\r\\n* 虚拟dom和diff算法 - 双端diff\\r\\n\\r\\n\\r\\n 源","cover":""}},{"route":"/frame/vue2/数据挟持","meta":{"sidebar":null,"title":"数据挟持","date":"2022-09-14 00:00:00","tags":["vue2"],"tag":["vue2"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/frame/vue3/complier","meta":{"sidebar":null,"title":"complier","date":"2022-09-14 00:00:00","tags":["vue2"],"tag":["vue2"],"description":"\\r\\n\\r\\n complier\\r\\n\\r\\n用于解析模版，生成渲染模版的render，render的作用就是生成 vnode\\r\\n\\r\\n\\r\\n分三个过程\\r\\n\\r\\n* parse：接收temaplate原始模版，按照模版","cover":""}},{"route":"/frame/vue3/diff","meta":{"sidebar":null,"title":"虚拟dom和diff算法 - 快速diff-最长递增子序列","date":"2023-09-14 00:00:00","tags":["vue3","todo"],"tag":["vue3","todo"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/frame/vue3/hooks","meta":{"sidebar":null,"title":"组合式函数","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n 组合式函数\\r\\n\\r\\n推荐使用 vue-use\\r\\n\\r\\n 示例\\r\\n\\r\\napp.vue\\r\\n```vue\\r\\n<script setup\\r\\nimport { ref, computed } from \'vu","cover":""}},{"route":"/frame/vue3/index","meta":{"hidden":true,"title":"简介","date":"2024-02-27 09:21:52","tag":[],"description":"\\r\\nvue3笔记，只记录一些关键点或者自己觉得容易忘记的，基础知识不记录。\\r\\n\\r\\n 常看常新的图\\r\\n\\r\\n\\r\\n\\r\\n 目录\\r\\n\\r\\n响应式\\r\\n* 响应式基础\\r\\n* 响应式核心\\r\\n\\r\\n组件\\r\\n\\r\\n* hook","cover":""}},{"route":"/frame/vue3/plugin","meta":{"sidebar":null,"title":"插件","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n\\r\\n 插件\\r\\n\\r\\n```js\\r\\n// plugins/i18n.js\\r\\nexport default {\\r\\n  install: (app, options) =\\r\\n    // 注入一个全局可用","cover":""}},{"route":"/frame/vue3/reactive","meta":{"title":"","date":"2024-02-21 16:19:58","tag":[],"cover":""}},{"route":"/frame/vue3/ref","meta":{"title":"","date":"2024-02-21 16:19:58","tag":[],"cover":""}},{"route":"/frame/vue3/Suspense","meta":{"sidebar":null,"title":"内置组件 - Suspense","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n 解决什么问题？\\r\\n\\r\\n假如组件树中有多个嵌套组件，每个子组件都需要处理自己的加载、报错和完成状态。在最坏的情况下，我们可能会在页面上看到三个旋转的加载态，在不同的时间显示出内容。\\r\\n\\r\\n--》\\r","cover":""}},{"route":"/frame/vue3/v-model","meta":{"sidebar":null,"title":"v-model","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n 修饰符\\r\\n\\r\\n.lazy\\r\\n\\r\\n默认情况下，v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 lazy 修饰符来改为在每次 change 事件后更","cover":""}},{"route":"/frame/vue3/事件","meta":{"sidebar":null,"title":"事件","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n\\r\\n 事件修饰符\\r\\n\\r\\n在处理事件时调用 event.preventDefault() 或 event.stopPropagation()  =》 不处理dom事件，使用vue内置修饰符，简化代码","cover":""}},{"route":"/frame/vue3/列表渲染","meta":{"sidebar":null,"title":"列表渲染","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n\\r\\n 经典问题 - v-for和v-if优先级\\r\\n\\r\\nvue2和vue3的表现是不一致的，原因在于diff算法的更新\\r\\n\\r\\n key的作用\\r\\n\\r\\n需要结合diff算法\\r\\n\\r\\n“就地更新”策略 =》","cover":""}},{"route":"/frame/vue3/响应式基础","meta":{"sidebar":null,"title":"响应式基础","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n\\r\\n ref\\r\\n\\r\\n\\r\\n> \\r\\n> ref不止可以用于基本数据类型，引用数据类型也是可以的。\\r\\n\\r\\n为什么ref需要.value赋值，proxy监听的是对象，检测基础类型的访问或修改是不行的，因此","cover":""}},{"route":"/frame/vue3/响应式核心","meta":{"sidebar":null,"title":"响应式核心","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n\\r\\n watch和watchEffect区别\\r\\n\\r\\nwatch需要明确指定要监视的数据源，watchEffect而则可以自动收集其使用的响应式数据，因此代码会更简洁，但是，它的回调函数无法获得旧值","cover":""}},{"route":"/frame/vue3/异步组件","meta":{"sidebar":null,"title":"异步组件","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n 异步组件 - defineAsyncComponent\\r\\n\\r\\n 基本用法\\r\\n\\r\\n\\r\\n```ts\\r\\nimport { defineAsyncComponent } from \'vue\'\\r\\n\\r\\nco","cover":""}},{"route":"/frame/vue3/模板引用","meta":{"sidebar":null,"title":"模板引用","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n\\r\\n ref\\r\\n\\r\\n```vue\\r\\n<script setup\\r\\nimport { ref,onMounted } from \'vue\'\\r\\n\\r\\n// 声明一个 ref 来存放该元素的引用\\r\\n// ","cover":""}},{"route":"/frame/vue3/组件","meta":{"sidebar":null,"title":"组件","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n* defineProps\\r\\n* defineEmits\\r\\n* v-model\\r\\n* 透传\\r\\n* 插槽\\r\\n* 注入\\r\\n* 异步组件\\r\\n\\r\\ndefineProps\\r\\n\\r\\n```js\\r\\ndefineP","cover":""}},{"route":"/frame/vue3/自定义指令","meta":{"sidebar":null,"title":"自定义指令","date":"2022-09-14 00:00:00","tags":["vue3"],"tag":["vue3"],"description":"\\r\\n 钩子\\r\\n\\r\\n```js\\r\\n// el - 指令绑定到的元素\\r\\n//  binding：一个对象\\r\\n//      value oldValue arg modifiers instance di","cover":""}},{"route":"/front/CICD/docker-jenkins","meta":{"title":"docker","isTimeLine":true,"date":"2023-11-15 16:00:00","tag":[],"description":"\\r\\n 部署gitlab\\r\\n\\r\\n* gitlab部署最小需要4G内存\\r\\n\\r\\n```js\\r\\nweb:  \\r\\n\\timage: \'gitlab/gitlab-ee:latest\' \\r\\n    restart:","cover":""}},{"route":"/front/CICD/index","meta":{"hidden":true,"title":"简介","date":"2024-08-21 16:26:22","tag":[],"description":"\\r\\n\\r\\n记录项目中一些工程化的实现和总结\\r\\n\\r\\n工程化基石 - AST抽象语法树\\r\\n\\r\\nhttps://juejin.cn/post/7155151377013047304\\r\\n\\r\\n 目录\\r\\n\\r\\n* v","cover":""}},{"route":"/front/CICD/monorepo","meta":{"sidebar":null,"title":"monorepo项目管理方式","step":6,"isTimeLine":true,"date":"2023-09-14 00:00:00","tags":["CI/CD"],"categories":["工程化"],"tag":["工程化","CI/CD"],"description":"\\r\\n\\r\\n monorepo项目管理方式 --单仓库多模块\\r\\n\\r\\n痛点： 多个项目运维成本、维护成本、公共代码无法通用\\r\\n\\r\\n\\r\\n搭建过程： 选型 -\\r\\n\\r\\n构建效率 ， 依赖优化\\r\\n\\r\\n每个子项目都可","cover":""}},{"route":"/front/CICD/sentry接入全流程记录","meta":{"sidebar":null,"title":"sentry","isTimeLine":true,"date":"2024-03-14 00:00:00","tags":["工程化","CI/CD"],"categories":["工程化"],"tag":["工程化","CI/CD"],"description":"\\r\\n sentry 私有部署搭建\\r\\n\\r\\n 使用docker\\r\\n1. docker、docker compose安装 - 略\\r\\n2. sentry部署安装 - sentry 私有化部署\\r\\n\\r\\n sent","cover":""}},{"route":"/front/CICD/vite.config.js注释","meta":{"sidebar":null,"title":"vite.config.js注释","isTimeLine":true,"date":"2024-03-14 00:00:00","tags":["工程化","CI/CD"],"categories":["工程化"],"tag":["工程化","CI/CD"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/front/CICD/vite","meta":{"isTimeLine":true,"title":"vite","date":"2023-11-21 00:00:00","tags":["vite"],"tag":["vite"],"description":"\\r\\n\\r\\n vite 特点\\r\\n\\r\\n\\r\\n\\r\\n* 冷启动/冷服务 =》 开发状态不出包\\r\\n* 热更新 =》 更新源文件视图的直接更新\\r\\n* 按需更新，不刷新所有节点，只更新改动部分\\r\\n* 预编译：npm 包","cover":""}},{"route":"/front/CICD/webpack","meta":{"isTimeLine":true,"title":"webpack","date":"2023-11-21 00:00:00","tags":["webpack"],"tag":["webpack"],"description":"\\r\\n\\r\\n\\r\\nWebpack 慢的原因\\r\\nWebpack 启动后会做一堆事情，经历一条很长的编译打包链条，从入口开始需要逐步经历语法解析、依赖收集、代码转译、打包合并、代码优化，最终将高版本的、离散的源","cover":""}},{"route":"/front/CICD/前端测试","meta":{"isTimeLine":true,"title":"前端测试","date":"2023-11-21 00:00:00","tags":["前端测试"],"tag":["前端测试"],"description":"\\r\\n\\r\\n 单元测试 \\r\\n\\r\\n1、覆盖率\\r\\n\\r\\n```js\\r\\nfunction top10(num,sun) {\\r\\n    if(num < 10) {\\r\\n        return sum += n","cover":""}},{"route":"/front/CICD/前端监控系统","meta":{"sidebar":null,"title":"前端监控系统","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["工程化","CI/CD"],"categories":["工程化"],"tag":["工程化","CI/CD"],"description":"\\r\\n 前端监控系统包括哪些？\\r\\n\\r\\n对于前端监控来说，大致可以分成三个方向：数据监控、性能监控、异常监控。\\r\\n\\r\\n数据监控 / 埋点\\r\\n\\r\\n\\r\\n\\r\\n数据监控即通过数据分析用户行为，常见的监控数据包括：","cover":""}},{"route":"/front/CICD/发布流程","meta":{"sidebar":null,"title":"发布流程","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["工程化","CI/CD"],"categories":["工程化"],"tag":["工程化","CI/CD"],"description":"\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/front/CICD/系统划分","meta":{"sidebar":null,"title":"系统划分","date":"2024-02-20 16:22:48","tag":[],"description":"\\r\\n\\r\\n公司的内部系统通常是由公司自行开发或委托第三方开发的软件系统，用于管理企业内部的各种业务和流程。系统的名称可能因公司和具体功能而异，但常见的内部系统包括：\\r\\n\\r\\n* 办公自动化系统（OA）：主","cover":""}},{"route":"/front/coding/async、await","meta":{"title":"手写async、await","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 手写async、await\\r\\n\\r\\nhttps://juejin.cn/post/6844904102053281806\\r\\n\\r\\n```js\\r\\nfunction generatorToAsync(g","cover":""}},{"route":"/front/coding/call、apply、bind","meta":{"sidebar":null,"group":null,"title":"call、apply、bind","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n* call、apply、bind 异同\\r\\n\\r\\n call\\r\\n\\r\\n```js\\r\\n\\r\\nFunction.prototype.myCall = function (context) {\\r\\n    //","cover":""}},{"route":"/front/coding/compose","meta":{"title":"compose","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n compose\\r\\n\\r\\n在函数式编程当中有一个很重要的概念就是函数组合，实际上就是把处理数据的函数像管道一样连接起来，然后让数据穿过管道得到最终的结果\\r\\n\\r\\n在多个框架源码中都有用到，比如redu","cover":""}},{"route":"/front/coding/dom2vnode","meta":{"sidebar":null,"group":null,"title":"dom To vnode","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n dom To vnode\\r\\n\\r\\n真实dom转化为虚拟dom\\r\\n\\r\\n```js\\r\\n // 将真实dom转化为虚拟dom\\r\\nfunction domToJson(node) {\\r\\n  let obj","cover":""}},{"route":"/front/coding/es6模板字符串","meta":{"sidebar":null,"group":null,"title":"es6模板字符串","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n es6模板字符串\\r\\n\\r\\nreplace函数，第二个参数是函数的情况说明：每个匹配都调用该函数，它返回的字符串将替换文本使用\\r\\n\\r\\n```js\\r\\nlet name = \\"小明\\";\\r\\nlet age","cover":""}},{"route":"/front/coding/index","meta":{"hidden":true,"title":"简介","date":"2023-11-21 10:13:17","tag":[],"description":"整理面试所遇到的相关算法题\\r\\n\\r\\n 目录\\r\\n* async、await\\r\\n* call、apply、bind\\r\\n* instanceOf\\r\\n* new\\r\\n* 深浅拷贝\\r\\n* 防抖和节流\\r\\n* 斐波那契","cover":""}},{"route":"/front/coding/instanceOf","meta":{"sidebar":null,"group":null,"title":"instanceOf","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 代码\\r\\n\\r\\n不多bb，直接上代码\\r\\n\\r\\n```js\\r\\n function isInstanceOf(instance, klass) {\\r\\n    let proto = instance.__","cover":""}},{"route":"/front/coding/LazyMan","meta":{"title":"图片懒加载","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n LazyMan\\r\\n\\r\\n考察：事件轮询机制、链式调用、队列\\r\\n\\r\\n\\r\\n```js\\r\\nclass LazyMan {\\r\\n  constructor(name) {\\r\\n    this.name = ","cover":""}},{"route":"/front/coding/map","meta":{"sidebar":null,"group":null,"title":"map 函数","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n map 函数\\r\\n\\r\\n写法一：\\r\\n\\r\\n\\r\\n\\r\\n注意：需要判断稀疏数组，跳过稀疏数组中的空值\\r\\n\\r\\n```js\\r\\n// fn 接受3个参数，element 当前正在处理的元素、index 正在处理的","cover":""}},{"route":"/front/coding/new","meta":{"sidebar":null,"group":null,"title":"new","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 代码\\r\\n\\r\\n```js\\r\\nfunction _new(constructor, ...args) {\\r\\n        // 构造函数类型合法判断\\r\\n        if(typeof cons","cover":""}},{"route":"/front/coding/reduce","meta":{"sidebar":null,"group":null,"title":"reduce函数","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n reduce函数参数说明\\r\\n\\r\\n\\r\\n> \\r\\n> 1）callbackFn接收4个参数，reduce((pre,cur, index, array) => {})  \\r\\n> pre累加器、cur当","cover":""}},{"route":"/front/coding/render函数","meta":{"sidebar":null,"group":null,"title":"render函数","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n render函数\\r\\n\\r\\n虚拟dom转化为真实dom\\r\\n\\r\\n```js\\r\\n// 虚拟dom转化为真实dom\\r\\nfunction render(node) {\\r\\n    if (typeof nod","cover":""}},{"route":"/front/coding/sleep函数","meta":{"sidebar":null,"group":null,"title":"sleep函数","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n sleep函数\\r\\n\\r\\nJS没有语言内置的休眠（sleep or wait）函数，所谓的sleep只是实现一种延迟执行的效果\\r\\n\\r\\n等待指定时间后再执行对应方法\\r\\n\\r\\n\\r\\n```js\\r\\n// 方法","cover":""}},{"route":"/front/coding/some","meta":{"sidebar":null,"group":null,"title":"some","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n some\\r\\n\\r\\nsome()方法用于检测数组中的元素是否满足指定条件（函数提供）\\r\\n\\r\\n如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测；如果没有满足条件的元素，则返回","cover":""}},{"route":"/front/coding/发布订阅模式","meta":{"sidebar":null,"title":"发布订阅模式","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["手写代码","算法与数据结构"],"categories":["面试系列"],"tag":["面试系列","手写代码","算法与数据结构"],"description":"\\r\\n 代码\\r\\n\\r\\n```js\\r\\n\\r\\nclass EventEmitter {\\r\\n    constructor() {\\r\\n        // 定义事件中心\\r\\n        this.events ","cover":""}},{"route":"/front/coding/图片懒加载","meta":{"sidebar":null,"group":null,"title":"图片懒加载","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 图片懒加载原理\\r\\n\\r\\n当图片元素出现在屏幕中时，才给图片的src赋值对应的链接，去加载对应的图片\\r\\n使用IntersectionObserver监听元素来判断是否出现在视口，当图片出现在视口时，","cover":""}},{"route":"/front/coding/数据类型判断","meta":{"sidebar":null,"group":null,"title":"数据类型判断","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 数据类型判断\\r\\n\\r\\n```js\\r\\nfunction getDataType(target) {\\r\\n  return Object.prototype.toString.call(target).","cover":""}},{"route":"/front/coding/数组扁平化","meta":{"sidebar":null,"group":null,"title":"数组扁平化","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 数组扁平化\\r\\n\\r\\n```js\\r\\n    // 方案 1\\r\\n    //flat(infinity)\\r\\n\\r\\n    // 方案 2\\r\\n    function recursionFlat(ary ","cover":""}},{"route":"/front/coding/斐波那契数列","meta":{"isTimeLine":true,"title":"斐波那契数列","date":"2021-11-21 00:00:00","sidebar":"手写代码","tags":["手写代码","面试"],"tag":["手写代码","面试"],"description":"\\r\\n 什么是斐波那契数列\\r\\n\\r\\n\\r\\n> \\r\\n> f(1) = 1\\r\\n> \\r\\n> f(2) = 1\\r\\n> \\r\\n> f(n) = f(n-1) + f(n-2) (n >= 3, n为正整数)\\r\\n\\r\\n 代","cover":""}},{"route":"/front/coding/最大并发数","meta":{"sidebar":null,"group":null,"title":"最大并发数","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 最大并发数\\r\\n控制请求最大并发数，前面的请求成功后，再发起新的请求\\r\\n\\r\\n```js\\r\\n/*\\r\\n * 控制并发数\\r\\n * @param {array} list - 请求列表\\r\\n * @para","cover":""}},{"route":"/front/coding/柯里化","meta":{"sidebar":null,"group":null,"title":"柯里化","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 什么是柯里化\\r\\n\\r\\n函数柯里化： 将使用多个参数的一个函数，转换成一系列使用一个参数的函数\\r\\n\\r\\n函数柯里化的原理： 用闭包把参数保存起来，当参数的长度等于原函数时，就开始执行原函数\\r\\n\\r\\nad","cover":""}},{"route":"/front/coding/深浅拷贝","meta":{"sidebar":null,"group":null,"title":"深浅拷贝","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 预备知识\\r\\n\\r\\n- 基本数据类型，\\r\\n\\r\\n\\r\\n\\r\\n- 引用数据类型，\\r\\n\\r\\n> 名字存在栈内存中，值存在堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值\\r\\n\\r\\n 浅拷贝\\r\\n\\r\\n浅拷贝有哪","cover":""}},{"route":"/front/coding/防抖和节流","meta":{"sidebar":null,"group":null,"title":"防抖和节流","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 什么是防抖\\r\\n\\r\\n假设你用手压住一个弹簧，那么弹簧不会弹起来，除非你松手。\\r\\n\\r\\n防抖是触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。适用于可以**\\r\\n多次","cover":""}},{"route":"/front/css/background详解","meta":{"isTimeLine":true,"title":"css-background","date":"2021-11-21 00:00:00","tags":["css"],"tag":["css"],"description":"\\r\\n\\r\\n 系列属性\\r\\n\\r\\n背景系列属性，共包含9种属性，除了background-blend-mode属性以外，其他8种属性全都支持通过background属性进行简写。\\r\\n\\r\\n* backgroun","cover":""}},{"route":"/front/css/base","meta":{"isTimeLine":true,"title":"基础","date":"2021-11-21 00:00:00","sidebar":null,"tags":["css"],"tag":["css"],"description":"\\r\\n\\r\\n link style @import及三者的区别\\r\\n\\r\\n 区别\\r\\n\\r\\n加载顺序的差别\\r\\n\\r\\n1. 当一个页面被加载的时候，link引用的CSS会同时被加载\\r\\n2. 而@import引用的CS","cover":""}},{"route":"/front/css/BEM规范","meta":{"isTimeLine":true,"title":"BEM规范","date":"2021-11-21 00:00:00","tags":["css"],"tag":["css"],"description":"\\r\\n BEM规范\\r\\n\\r\\nBEM代表 块（block）、元素（element）、修饰符（modifier），三个部分结合使用，生成一套具有唯一性的class命名规范，起到样式隔离，避免css样式污染的作","cover":""}},{"route":"/front/css/index","meta":{"hidden":true,"title":"简介","date":"2024-09-23 13:32:30","tag":[],"description":"\\r\\ncss整理\\r\\n\\r\\n css\\r\\n\\r\\n 目录\\r\\n* BEM规范\\r\\n* 基础\\r\\n* rem+vw 布局\\r\\n* sticky 粘性布局\\r\\n* animation 动画\\r\\n* 媒体查询常见设备断点\\r\\n\\r\\n\\r","cover":""}},{"route":"/front/css/rem+vw布局","meta":{"isTimeLine":true,"title":"rem+vw布局","date":"2021-11-21 00:00:00","sidebar":null,"tags":["css"],"tag":["css"],"description":"\\r\\n rem布局\\r\\n\\r\\n\\r\\n> \\r\\n> 需要加视口\\r\\n\\r\\n缺点:\\r\\n\\r\\n字体并不合适使用rem, 字体的大小和字体宽度，并不成线性关系，会出现随着屏幕的变大，字体变的越来越大，所以需要结合媒体查询来调","cover":""}},{"route":"/front/css/动画","meta":{"isTimeLine":true,"title":"animation 动画","date":"2021-11-21 00:00:00","sidebar":null,"tags":["css"],"tag":["css"],"description":"\\r\\n\\r\\n animation 动画\\r\\n\\r\\nanimation：动画名称 + 动画时间 + 速度曲线 + 是否延迟 + 动画次数 + 是否逆向播放\\r\\n\\r\\n```css\\r\\n/*// linear 线性的 ","cover":""}},{"route":"/front/css/媒体查询","meta":{"sidebar":null,"title":"媒体查询常见设备断点","isTimeLine":true,"date":"2022-09-14 00:00:00","tag":[],"description":"\\r\\n  媒体查询常见设备断点 \\r\\n\\r\\n\\r\\n```css\\r\\n/*region SmartPhones */\\r\\n\\r\\n/* SmartPhones */\\r\\n@media only screen and (m","cover":""}},{"route":"/front/css/粘性布局","meta":{"isTimeLine":true,"title":"sticky 粘性布局","date":"2021-11-21 00:00:00","sidebar":null,"tags":["css"],"tag":["css"],"description":"\\r\\n sticky 粘性布局\\r\\n\\r\\n应用：吸顶效果的实现\\r\\n\\r\\n\\r\\n当元素在屏幕内，表现为relative，当就要滚出屏幕的时候，表现为fixed\\r\\n\\r\\n随着页面的滚动，将元素固定在设置的位置（固定效","cover":""}},{"route":"/front/design/index","meta":{"hidden":true,"title":"简介","date":"2023-11-21 10:13:17","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n* 单例模式\\r\\n* 策略模式\\r\\n* 代理模式\\r\\n* 装饰者模式\\r\\n* 组合模式\\r\\n* 工厂模式\\r\\n* 访问者模式\\r\\n* 发布订阅模式\\r\\n* 观察者模式\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/front/design/代理模式","meta":{"isTimeLine":true,"title":"代理模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n应用案例：图片预加载\\r\\n\\r\\n```js\\r\\n// 代理模式\\r\\nlet relImage = (function() {\\r\\n    let imgNode = document.creat","cover":""}},{"route":"/front/design/单例模式","meta":{"isTimeLine":true,"title":"单例模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n应用案例：弹框\\r\\n\\r\\n```js\\r\\nclass Single {\\r\\n  constructor(name) {\\r\\n    this.name = name;\\r\\n  }\\r\\n  static ","cover":""}},{"route":"/front/design/发布订阅模式","meta":{"isTimeLine":true,"title":"发布订阅模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n应用案例： EventBus、 vue实现原理\\r\\n\\r\\n```js\\r\\n\\r\\n// 发布订阅模式\\r\\nclass EventBus {\\r\\n  constructor() {\\r\\n    this.t","cover":""}},{"route":"/front/design/工厂模式","meta":{"isTimeLine":true,"title":"工厂模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n>  不暴露创建对象的具体逻辑，而是将逻辑封装在一个函数中，这个函数就可以被视为一个工厂\\r\\n\\r\\n应用案例：jquery中的window.$\\r\\n\\r\\n```js\\r\\n\\r\\nclass Car {\\r\\n ","cover":""}},{"route":"/front/design/策略模式","meta":{"isTimeLine":true,"title":"策略模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n应用案例：表单验证\\r\\n\\r\\n```js\\r\\n// 策略对象\\r\\nconst strategies = {\\r\\n    // 验证是否为空\\r\\n    isNoEmpty: function(valu","cover":""}},{"route":"/front/design/组合模式","meta":{"isTimeLine":true,"title":"代理模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n> 组合模式中基本对象和组合对象被一致对待  \\r\\n> 无须关心对象有多少层, 调用时只需在根部进行调用\\r\\n\\r\\n应用案例：打印文件目录\\r\\n\\r\\n```js\\r\\nclass Combine {\\r\\n","cover":""}},{"route":"/front/design/装饰者模式","meta":{"isTimeLine":true,"title":"装饰者模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n应用案例：在函数执行前后添加新的方法\\r\\n\\r\\n```js\\r\\nfunction fuc() {\\r\\n    console.log(2);\\r\\n}\\r\\nFunction.prototype.be","cover":""}},{"route":"/front/design/观察者模式","meta":{"isTimeLine":true,"title":"观察者模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n应用案例：vue 双向绑定\\r\\n\\r\\n```js\\r\\nlet data = {\\r\\n  name: \\"ming\\",\\r\\n  age: 18\\r\\n};\\r\\nObject.keys(data).forEac","cover":""}},{"route":"/front/design/访问者模式","meta":{"isTimeLine":true,"title":"访问者模式","date":"2021-11-21 00:00:00","tags":["设计模式"],"tag":["设计模式"],"description":"\\r\\n\\r\\n\\r\\n\\r\\n应用案例：babel插件\\r\\n\\r\\n```js\\r\\n// 元素类\\r\\nclass Student {\\r\\n  constructor(name, chinese, math, english) ","cover":""}},{"route":"/front/javascript/call、apply、bind异同","meta":{"isTimeLine":true,"title":"call、apply、bind异同","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 相同点\\r\\n\\r\\n1. 三者都可以显式绑定函数的this指向\\r\\n2. 三者第一个参数都是this要指向的对象，若该参数为undefined或null，this则默认指向全局window\\r\\n\\r\\n```","cover":""}},{"route":"/front/javascript/eventloop","meta":{"sidebar":null,"group":null,"title":"事件轮询机制 Event Loop","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 什么是event loop（事件轮询机制）？\\r\\n\\r\\n一种事件循环机制。\\r\\n\\r\\nJS 语言的一大特点就是单线程，因此需要这种机制来处理各种事件的有序执行。\\r\\n\\r\\n任务分为同步任务和异步任务，异步任","cover":"https://img.cdn.sugarat.top/mdImg/MTU4NDMzOTU2ODEwMw==584339568103"}},{"route":"/front/javascript/index","meta":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"},"title":"简介","date":"2024-02-21 16:19:58","tag":[],"description":"\\r\\n此部分记载学习与业务开发中所遇问题及解法和了解到的一些语言特性\\r\\n\\r\\nhttps://juejin.cn/post/7146973901166215176heading-1\\r\\n\\r\\n 目录\\r\\n\\r\\n*","cover":""}},{"route":"/front/javascript/JS 的二进制数据","meta":{"isTimeLine":true,"title":"JS 的二进制家族(base64、File、Blob、ArrayBuffer)","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 一、File对象\\r\\n\\r\\n定义： 一个FileList 对象通常来自于一个 HTML input 元素的 files 属性,你可以通过这个对象访问到用户所选择的文件，或者拖拽文件\\r\\n\\r\\n\\r\\n\\r\\ni","cover":""}},{"route":"/front/javascript/JS沙箱","meta":{"isTimeLine":true,"title":"沙箱","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 沙箱\\r\\n\\r\\n沙箱(Sandbox)，就是让你的程序跑在一个隔离的环境下，不对外界的其他程序造成影响.\\r\\n\\r\\nChrome浏览器打开的每个页面就是一个沙箱，保证彼此独立互不影响\\r\\n\\r\\n 应用：\\r\\n","cover":""}},{"route":"/front/javascript/let","meta":{"isTimeLine":true,"title":"let 实现原理","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n var与let的经典案例\\r\\n\\r\\n```js\\r\\n// 案例1\\r\\n// i是var声明的，在全局范围内都有效，全局只有一个变量i，输出的是最后一轮的i值，也就是 10\\r\\n\\r\\nvar a = [];\\r","cover":""}},{"route":"/front/javascript/mutationObserver","meta":{"isTimeLine":true,"title":"沙箱","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n MutationObserver\\r\\n\\r\\nMutationObserver 是 HTML5 引入的一种用于监听 DOM 树变化的接口\\r\\n\\r\\n\\r\\n>\\r\\n> 1, 它等待所有脚本任务完成后，才会运行（","cover":""}},{"route":"/front/javascript/new","meta":{"sidebar":null,"group":null,"title":"var、let、const的区别?","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n new一个对象，到底发生什么？\\r\\n\\r\\n1）创建一个对象，该对象的原型指向构造函数的原型\\r\\n\\r\\n2）调用该构造函数，构造函数的this指向新生成的对象\\r\\n\\r\\n3）判断构造函数是否有返回值，如果有返","cover":""}},{"route":"/front/javascript/promise","meta":{"sidebar":null,"group":null,"title":"promise","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n promise\\r\\n\\r\\n链式调用\\r\\n\\r\\n1）promise的回调只能被捕获一次\\r\\n\\r\\n2）在then函数加上return，后面的then函数才能继续捕获到\\r\\n\\r\\n链式调用示例\\r\\n```js\\r\\n//","cover":""}},{"route":"/front/javascript/this","meta":{"isTimeLine":true,"title":"this","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n this\\r\\n\\r\\nthis的5种绑定方式\\r\\n\\r\\n1. 默认绑定(非严格模式下this指向全局对象，严格模式下函数内的this指向undefined)\\r\\n2. 隐式绑定(当函数引用有上下文对象时, ","cover":""}},{"route":"/front/javascript/var、let、const的区别","meta":{"sidebar":null,"group":null,"title":"var、let、const的区别?","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n\\r\\n var、let、const的区别?\\r\\n\\r\\n1. var定义的变量，没有块的概念，可以跨块访问, 可以变量提升\\r\\n2. let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，","cover":""}},{"route":"/front/javascript/作用域","meta":{"isTimeLine":true,"title":"作用域","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 什么是作用域？\\r\\n\\r\\n\\r\\n\\r\\n* 作用域指程序源代码中定义变量的区域\\r\\n* 规定了如何查找变量,确定当前执行代码对变量的访问权限\\r\\n* js使用词法作用域(静态作用域):函数的作用域在函数定义的","cover":""}},{"route":"/front/javascript/作用域链","meta":{"isTimeLine":true,"title":"作用域链","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 作用域链是什么？\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/front/javascript/内存泄漏","meta":{"title":"内存泄漏","date":"2023-11-21 00:00:00","tags":null,"tag":[],"description":"\\r\\n 什么是内存泄漏?\\r\\n\\r\\n\\r\\n\\r\\n JavaScript 常见的四种内存泄漏\\r\\n\\r\\n* 1：全局变量\\r\\n* 2：被忘记的定时器或者回调函数\\r\\n* 3：闭包\\r\\n* 4: DOM 的过度引用\\r\\n\\r\\n\\r","cover":""}},{"route":"/front/javascript/副作用&纯函数","meta":{"isTimeLine":true,"title":"副作用&纯函数","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 什么是副作用?什么是纯函数?\\r\\n\\r\\n副作用\\r\\n\\r\\n副作用指函数执行过程对函数外部可观察的状态产生的影响,如修改全局变量、修改参数、打印日志等都是副作用。\\r\\n\\r\\n纯函数\\r\\n\\r\\n纯函数可以避免外部状","cover":""}},{"route":"/front/javascript/原型和原型链","meta":{"isTimeLine":true,"title":"原型和原型链","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 原型和原型链\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n 原型的作用\\r\\n\\r\\n原型被定义为给其它对象提供共享属性的对象，函数的实例可以共享原型上的属性和方法\\r\\n\\r\\n 原型链\\r\\n\\r\\n它的作用就是当你在访问一个对","cover":""}},{"route":"/front/javascript/垃圾回收机制","meta":{"isTimeLine":true,"title":"垃圾回收机制","date":"2021-11-21 00:00:00","tags":["todo"],"tag":["todo"],"description":"\\r\\n\\r\\n\\r\\n> 需要注意的是，自动的意思是浏览器可以自动帮助我们回收内存垃圾，但并不代表我们不用关心内存管理，如果操作不当，JavaScript中仍然会出现内存溢出的情况，造成系统崩溃。\\r\\n\\r\\n标记清","cover":""}},{"route":"/front/javascript/定时器","meta":{"sidebar":null,"group":null,"title":"定时器","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 定时器是什么？\\r\\n\\r\\nJS提供了一些原生方法来实现延时去执行某一段代码，setTimeout / setInterval\\r\\n\\r\\n* setTimeout固定时长后执行\\r\\n* setInterva","cover":""}},{"route":"/front/javascript/执行上下文和执行栈","meta":{"isTimeLine":true,"title":"执行上下文和执行栈","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 什么是执行上下文？\\r\\n\\r\\nhttps://juejin.cn/post/6844903983438381069\\r\\n\\r\\n\\r\\n>\\r\\n> 执行上下文： 指当前执行环境中的变量、函数声明、作用域链、th","cover":""}},{"route":"/front/javascript/数据判断类型","meta":{"sidebar":{"title":"判断数据类型的方案","step":3},"isTimeLine":true,"title":"判断数据类型的方案","date":"2020-04-14 00:00:00","tags":["大前端","javascript"],"categories":["大前端"],"tag":["大前端","javascript"],"description":"\\r\\n 判断变量类型的方案\\r\\n 1. typeof\\r\\n* 对于原始值类型除了null外都可以准确判断\\r\\n* 对于对象来说，除了函数都会显示 object\\r\\n  * ``null``不是对象\\r\\n:::ti","cover":""}},{"route":"/front/javascript/深拷贝","meta":{"sidebar":null,"group":null,"title":"深拷贝","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 深拷贝\\r\\n\\r\\n深拷贝的方式\\r\\n\\r\\n1）JSON.parse(JSON.stringify())\\r\\n\\r\\n缺点： 无法拷贝 函数、正则、时间格式、原型上的属性和方法等\\r\\n\\r\\n2）递归实现深拷贝\\r\\n\\r","cover":""}},{"route":"/front/javascript/箭头函数","meta":{"isTimeLine":true,"title":"箭头函数","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n 箭头函数与普通函数的区别\\r\\n\\r\\n1）this 绑定：箭头函数没有自己的 this 绑定，它会捕获所在上下文的 this 值。而普通函数的 this 值根据函数的调用方式动态绑定。\\r\\n\\r\\n在箭头函","cover":""}},{"route":"/front/javascript/继承","meta":{"sidebar":null,"group":null,"title":"继承","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 多种继承方式\\r\\n\\r\\n 1）原型链继承，缺点：引用类型的属性被所有实例共享\\r\\n\\r\\n```js\\r\\nfunction Person() {\\r\\n  this.head = 1\\r\\n  this.hand ","cover":""}},{"route":"/front/javascript/闭包","meta":{"isTimeLine":true,"title":"闭包","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n\\r\\n 什么是闭包？\\r\\n\\r\\n\\r\\n\\r\\n闭包常见的两种情况：\\r\\n一是函数作为返回值； 另一个是函数作为参数传递\\r\\n\\r\\n闭包的作用：\\r\\n可以让局部变量的值始终保持在内存中；对内部变量进行保护，使外部访问不","cover":""}},{"route":"/front/performance/index","meta":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"},"title":"简介","date":"2024-02-27 09:21:52","tag":[],"description":"\\r\\n此部分记载学习与业务开发中所遇问题及解法和了解到的一些语言特性\\r\\n\\r\\nhttps://juejin.cn/post/7146973901166215176heading-1\\r\\n\\r\\nhttps://","cover":""}},{"route":"/front/performance/优化手段","meta":{"sidebar":null,"group":null,"title":"优化手段","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n一、资源请求过程优化\\r\\n\\r\\n浏览器缓存\\r\\n\\r\\n强缓存\\r\\n协商缓存\\r\\nlocalstorage缓存\\r\\nservice workers\\r\\n\\r\\n\\r\\n减少 DNS 查找次数\\r\\n配置多个域名\\r\\nhttp 改","cover":""}},{"route":"/front/performance/性能上报方式","meta":{"sidebar":null,"group":null,"title":"性能上报方式","isTimeLine":true,"date":"2023-11-17 00:00:00","tag":[],"description":"\\r\\n 性能上报方式\\r\\n\\r\\n\\r\\n 1、sendbeacon\\r\\n\\r\\n\\r\\n\\r\\n 2、gif\\r\\n\\r\\n 使用GIF上报的原因\\r\\n\\r\\n向服务器端上报数据，可以通过请求接口，请求普通文件，或者请求图片资源的方式进行","cover":""}},{"route":"/front/performance/性能指标","meta":{"sidebar":null,"group":null,"title":"性能标准","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 评测工具\\r\\n\\r\\n工具\\r\\n1,performance\\r\\n2,lighthouse\\r\\n\\r\\n 性能标准\\r\\n\\r\\n官方地址：(https://developer.mozilla.org/en-US/doc","cover":""}},{"route":"/front/typescript/as","meta":{"sidebar":null,"group":null,"title":"断言","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n类型声明、转换\\r\\n\\r\\n* 编译时作用\\r\\n\\r\\n类型断言有两种形式。\\r\\n\\r\\n* 1、“尖括号”语法\\r\\n\\r\\n```ts\\r\\n  let someValue: any = \\"this is a string","cover":""}},{"route":"/front/typescript/base","meta":{"sidebar":null,"group":null,"title":"基础","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n ts和js的区别\\r\\n\\r\\n* JavaScript 属于动态编程语言，而ts 属于静态编程语言。\\r\\n  * js：边解释边执行，错误只有在运行的时候才能发现\\r\\n  * ts：先编译再执行，在写的时","cover":""}},{"route":"/front/typescript/index","meta":{"hidden":true,"title":"简介","date":"2023-11-21 10:13:17","tag":[],"description":"\\r\\n 什么是ts\\r\\n\\r\\n背景： js是一门动态类型语言，只有运行的时候才能确定类型，灵活的同时意味着受到的约束更少，容易产生难追溯的bug。\\r\\n\\r\\n概念： ts是js的超集，在代码编译阶段就确定类型，","cover":""}},{"route":"/front/typescript/other","meta":{"sidebar":null,"group":null,"title":"补充","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 补充\\r\\n\\r\\n 1、函数重载\\r\\n\\r\\n为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用\\r\\n\\r\\n```ts\\r\\n\\r\\nlet suits = [\\"hearts\\", \\"","cover":""}},{"route":"/front/typescript/类型守卫","meta":{"sidebar":null,"group":null,"title":"类型守卫","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n* 多态 - \\r\\n\\r\\n```ts\\r\\ninterface Sale {\\r\\n    name: string,\\r\\n    speak: string[]\\r\\n}\\r\\ninterface Front {\\r\\n","cover":""}},{"route":"/front/Web-Worker/index","meta":{"hidden":true,"title":"Web Worker","date":"2024-09-20 13:32:49","tag":[],"description":"\\r\\n Web Worker\\r\\n\\r\\nWeb Worker 有三种类型：\\r\\n\\r\\n* Dedicated Worker（专用 Worker）：由主线程实例化且只能与它通信，不能访问别的环境。\\r\\n* Shar","cover":""}},{"route":"/front/混合开发/hybird混合开发","meta":{"sidebar":null,"group":null,"title":"hybird混合开发","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n参考：\\r\\nhttps://juejin.cn/post/7102292121893879821?searchId=202311281138374895558C8ACF1A3D8C55\\r\\n\\r\\n Hy","cover":""}},{"route":"/front/混合开发/index","meta":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"},"title":"简介","date":"2023-11-28 14:59:13","tag":[],"description":"\\r\\n此部分记载学习与业务开发中所遇问题及解法和了解到的一些语言特性\\r\\n\\r\\nhttps://juejin.cn/post/7146973901166215176heading-1\\r\\n\\r\\n 目录\\r\\n\\r\\n*","cover":""}},{"route":"/front/混合开发/JSBridge","meta":{"isTimeLine":true,"title":"JSBridge","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n JSBridge\\r\\n\\r\\n跨端通信\\r\\n\\r\\n应用场景：\\r\\n* 微信小程序\\r\\n* 混合开发（Hybrid）应用\\r\\n* React-Native\\r\\n* ...\\r\\n\\r\\n JSBridge作用?\\r\\n\\r\\n通过","cover":""}},{"route":"/interview/algorithm/7-整数反转","meta":{"sidebar":null,"group":null,"title":"整数反转 leetcode-7","isTimeLine":true,"date":"2023-11-27 00:00:00","tag":[],"description":"\\r\\n给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。\\r\\n\\r\\n如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。\\r\\n\\r\\n假设环境","cover":""}},{"route":"/interview/algorithm/index","meta":{"hidden":false,"sidebar":{"title":"简介"},"group":{"title":"Javascript"},"title":"简介","date":"2024-05-06 10:42:37","tag":[],"description":"\\r\\n此部分记载学习算法过程中的笔记\\r\\n\\r\\n 大纲:\\r\\n\\r\\n算法：\\r\\n\\r\\n1. 排序算法：快速排序、归并排序、计数排序\\r\\n2. 搜索算法：回溯、递归、剪枝\\r\\n3. 图论：最短路径、最小生成树、网络流建模","cover":""}},{"route":"/interview/algorithm/LRUCache函数","meta":{"isTimeLine":true,"title":"LRUCache函数","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n LRUCache函数\\r\\n\\r\\n```js\\r\\n// 一个普通的两数相加函数\\r\\nfunction add(a, b) {\\r\\n    console.log(`执行了， 参数为 ${a}, ${b}`,","cover":""}},{"route":"/interview/algorithm/LRU函数","meta":{"isTimeLine":true,"title":"LRU函数","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n\\r\\n LRU函数\\r\\n\\r\\n\\r\\n```js\\r\\n class LRUCache {\\r\\n        constructor(maxLen) {\\r\\n            this.maxLen = m","cover":""}},{"route":"/interview/algorithm/tree","meta":{"sidebar":null,"group":null,"title":"树的遍历","isTimeLine":true,"date":"2023-11-16 16:00:00","tag":[],"description":"\\r\\n 树的类型\\r\\n\\r\\n\\r\\n* 满⼆叉树\\r\\n\\r\\n\\r\\n>\\r\\n> 深度为k，有2^k-1个节点的⼆叉树\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n* 完全⼆叉树\\r\\n\\r\\n> 在完全⼆叉树中，除了最底层节点可能没填满外，其余每层节点数","cover":""}},{"route":"/interview/algorithm/两数之和","meta":{"sidebar":null,"group":null,"title":"两数之和 leetcode-1","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 问题\\r\\n\\r\\n```text\\r\\n给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\\r\\n你可以假设每","cover":""}},{"route":"/interview/algorithm/冒泡排序","meta":{"isTimeLine":true,"title":"冒泡排序","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n 冒泡排序\\r\\n\\r\\n这个真的一看就明白。\\r\\n\\r\\n冒泡排序的原理：\\r\\n\\r\\n\\r\\n如果元素大小关系不正确，交换这两个数（在本例中为a\\r\\n\\r\\n比较一对相邻元素（a，b），\\r\\n\\r\\n重复步骤1和2，直到我们到达","cover":""}},{"route":"/interview/algorithm/反转链表","meta":{"title":"","date":"2023-11-21 15:47:16","tag":[],"cover":""}},{"route":"/interview/algorithm/字节一面笔试题-轮询","meta":{"sidebar":null,"group":null,"title":"字节一面笔试题-轮询","isTimeLine":true,"date":"2023-11-27 00:00:00","tag":[],"cover":""}},{"route":"/interview/algorithm/对象扁平化","meta":{"sidebar":null,"group":null,"title":"对象扁平化","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 对象扁平化?\\r\\n\\r\\n```js\\r\\n// 实现一个 flatten 函数，实现如下的转换功能\\r\\nconst obj = {\\r\\n    a: 1,\\r\\n    b: [1, 2, {c: true}]","cover":""}},{"route":"/interview/algorithm/对象数组去重","meta":{"isTimeLine":true,"title":"对象数组去重","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\nreduce实现\\r\\n\\r\\n```js\\r\\nconst unique = (arr) =\\r\\n    let map = new Map();\\r\\n    return arr.reduce((prev, ","cover":""}},{"route":"/interview/algorithm/快慢指针","meta":{"isTimeLine":true,"title":"双指针-快慢指针","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n\\r\\n LeetCode  26\\r\\n\\r\\n```text\\r\\n26. 删除有序数组中的重复项 | 力扣  | LeetCode  |\\r\\n给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的","cover":""}},{"route":"/interview/algorithm/快速排序","meta":{"isTimeLine":true,"title":"快速排序","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n\\r\\n 快速排序\\r\\n\\r\\n快排的过程简单的说只有三步：\\r\\n\\r\\n⾸先从序列中选取⼀个数作为基准数\\r\\n将⽐这个数⼤的数全部放到它的右边，把⼩于或者等于它的数全部放到它的左边 （⼀次快排\\r\\npartitio","cover":""}},{"route":"/interview/algorithm/最长子字符串","meta":{"sidebar":null,"group":null,"title":"最长回文子串 leetcode-5","isTimeLine":true,"date":"2023-11-27 00:00:00","tag":[],"description":"\\r\\n\\r\\n 最长回文子串\\r\\n\\r\\n给你一个字符串 s，找到 s 中最长的回文子串。\\r\\n\\r\\n如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。\\r\\n\\r\\n示例 1：\\r\\n\\r\\n输入：s = \\"babad\\"","cover":""}},{"route":"/interview/algorithm/最长递增子序列","meta":{"sidebar":null,"group":null,"title":"最长递增子序列 leetcode-300","isTimeLine":true,"date":"2023-11-27 00:00:00","tag":[],"description":"\\r\\n给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。\\r\\n\\r\\n子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,","cover":""}},{"route":"/interview/algorithm/树结构转换","meta":{"title":"","date":"2023-11-21 10:13:17","tag":[],"cover":""}},{"route":"/interview/algorithm/求所有的字符串子串","meta":{"isTimeLine":true,"title":"求所有的字符串子串","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n\\r\\n```js\\r\\n// 输入：ABCD，\\r\\n// 返回：ABCD，ABC，BCD，AB，BC，CD，A，B，C，D\\r\\nconst getAllStr = (str) =\\r\\n  let result","cover":""}},{"route":"/interview/algorithm/版本号判断","meta":{"isTimeLine":true,"title":"版本号判断","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n 版本号判断\\r\\n\\r\\n```js\\r\\n// \'10.2.1.6001\' \'10.2.1.5001\'   1\\r\\n// \'10.2.1.4001\' \'10.2.1.5001\'   -1\\r\\n// \'10.2","cover":""}},{"route":"/interview/algorithm/生成二维数组","meta":{"isTimeLine":true,"title":"生成二维数组","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n\\r\\n 生成二维数组\\r\\n\\r\\n```text\\r\\n// 输入 column 和 target ；生成如下的 二维数组：\\r\\n// 1.column: 4 target: 6\\r\\n//     result:","cover":""}},{"route":"/interview/algorithm/算法","meta":{"isTimeLine":true,"title":"五大算法设计思想","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n 五大算法\\r\\n\\r\\n 分治法\\r\\n概念：\\r\\n将一个难以直接解决的大问题，分割成一些规模较小的相同问题，以便各个击破，分而治之。\\r\\n\\r\\n思想策略：\\r\\n对于一个规模为n的问题，若该问题可以容易地解决（比如","cover":""}},{"route":"/interview/algorithm/统计字符串出现频率","meta":{"sidebar":null,"group":null,"title":"统计字符串出现频率","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 问题\\r\\n\\r\\n```text\\r\\n统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率\\r\\n1. 不限制 key 的顺序\\r\\n2. 输入的字符串参数不会为空","cover":""}},{"route":"/interview/algorithm/老鼠试药","meta":{"sidebar":null,"group":null,"title":"老鼠试药","isTimeLine":true,"date":"2023-09-30 16:00:00","tag":[],"cover":""}},{"route":"/interview/algorithm/获取随机数","meta":{"sidebar":null,"group":null,"title":"获取随机数","isTimeLine":true,"date":"2023-11-10 00:00:00","tag":[],"cover":""}},{"route":"/interview/algorithm/计算字母数量","meta":{"sidebar":null,"group":null,"title":"计算字母数量","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 计算字母数量?\\r\\n描述：输入一串字符串，根据字符串求出每个字母的数量并返回结果对象。（数字为1时可省略）\\r\\n示例一：输入：A3B2，输出：{\\"A\\": 3, \\"B\\": 2}\\r\\n示例二：输入：A(A","cover":""}},{"route":"/interview/algorithm/链表","meta":{"sidebar":null,"group":null,"title":"链表","isTimeLine":true,"date":"2023-09-30 16:00:00","tag":[],"cover":""}},{"route":"/interview/algorithm/驼峰转换","meta":{"isTimeLine":true,"title":"驼峰转换","date":"2021-11-21 00:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n\\r\\n 驼峰转换\\r\\n\\r\\n主要问题在于正则\\r\\n不会正则也可以字符串分割，比较麻烦\\r\\n\\r\\n```js\\r\\nfunction converter(obj) {\\r\\n  let newObj = {};\\r\\n  ","cover":""}},{"route":"/interview/questions/http缓存","meta":{"isTimeLine":true,"title":"http缓存","date":"2021-11-21 00:00:00","tags":["http"],"tag":["http"],"description":"\\r\\n http缓存\\r\\n\\r\\n 缓存类型\\r\\n\\r\\n强缓存\\r\\n\\r\\n* expires\\r\\n* cache-control\\r\\n\\r\\n字段解释\\r\\n\\r\\n- Cache-Control  \\r\\n  缓存的最大有效期(max","cover":""}},{"route":"/interview/questions/index","meta":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"},"title":"简介","date":"2024-09-19 10:54:50","tag":[],"description":"\\r\\n此部分记载一些常见的面试题\\r\\n\\r\\n 目录\\r\\n\\r\\n* this\\r\\n* 异步\\r\\n* 异步并发、缓存\\r\\n* http缓存\\r\\n* 项目相关\\r\\n* 输入url发生了什么\\r\\n* var、let、const的区","cover":""}},{"route":"/interview/questions/js中精度损失问题","meta":{"sidebar":null,"group":null,"title":"js中精度损失问题.md","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n js中精度损失是什么？\\r\\n\\r\\njs中精度损失问题： 0.1 + 0.2 === 0.3 =\\r\\n\\r\\n js中精度损失原因\\r\\n\\r\\n精度损失原因: \\r\\n\\r\\njs采用双精度存储，1位用来表示符号位 11","cover":""}},{"route":"/interview/questions/less&sass","meta":{"sidebar":null,"group":null,"title":"less和sass区别","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 预处理器的作用\\r\\n* 可读性强 嵌套语法：反映层级关系和约束\\r\\n* 逻辑复用\\r\\n  * Extend和Mixin代码片段\\r\\n  * 变量和计算： 减少重复代码\\r\\n  * 循环 用于负复杂有规律的","cover":""}},{"route":"/interview/questions/promise","meta":{"isTimeLine":true,"title":"promise","date":"2021-11-21 00:00:00","tags":["异步"],"tag":["异步"],"description":"\\r\\n\\r\\n```js\\r\\nfunction MyPromise(fn) {\\r\\n  this.cbs = [];\\r\\n\\r\\n  const resolve = (value) =\\r\\n    setTimeout","cover":""}},{"route":"/interview/questions/react和vue中hooks的区别","meta":{"sidebar":null,"group":null,"title":"react和vue中hooks的区别","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n vue hook\\r\\n\\r\\nVue hook 只会被注册调用一次，因为它是声明在 setup 里，一次组件实例化只调用一次 setup，Vue 之所以能避开这些问题，主要还是得益于数据响应式，不需要","cover":""}},{"route":"/interview/questions/script标签中async和defer的区别是什么","meta":{"sidebar":null,"group":null,"title":"script标签中async和defer的区别?","isTimeLine":true,"date":"2023-11-09 16:00:00","tags":["算法","面试"],"tag":["算法","面试"],"description":"\\r\\n script标签中async和defer的区别\\r\\n\\r\\n如果没有async和defer标签，浏览器会立即加载并执行相应的脚本。读取到就开始加载和执行，会阻塞后续文档的加载。\\r\\n\\r\\n 相同点\\r\\n\\r\\n","cover":""}},{"route":"/interview/questions/this","meta":{"isTimeLine":true,"title":"this","date":"2021-11-21 00:00:00","tags":["js基础"],"tag":["js基础"],"description":"\\r\\n this\\r\\n\\r\\nthis的5种绑定方式\\r\\n\\r\\n1. 默认绑定(非严格模式下this指向全局对象，严格模式下函数内的this指向undefined)\\r\\n2. 隐式绑定(当函数引用有上下文对象时, ","cover":""}},{"route":"/interview/questions/url-loader和file-loader的区别","meta":{"sidebar":null,"group":null,"title":"url-loader和file-loader的区别?","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n url-loader和file-loader的区别?\\r\\n\\r\\nfile-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图","cover":""}},{"route":"/interview/questions/var、let、const的区别","meta":{"sidebar":null,"group":null,"title":"var、let、const的区别?","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n var、let、const的区别?\\r\\n\\r\\n1. var定义的变量，没有块的概念，可以跨块访问, 可以变量提升\\r\\n2. let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变","cover":""}},{"route":"/interview/questions/webpack","meta":{"isTimeLine":true,"title":"webpack相关","date":"2021-11-21 00:00:00","tags":["工程化","webpack"],"tag":["工程化","webpack"],"description":"\\r\\n webpack是什么？有什么作用？\\r\\n\\r\\n基于tapalble 的微内核打包工具。用来打包 js和 css。\\r\\n\\r\\n webpack有哪几部分？\\r\\n\\r\\nentry 、 output 、 load","cover":""}},{"route":"/interview/questions/字节js面试题","meta":{"sidebar":null,"group":null,"title":"字节js面试题","date":"2024-09-19 10:54:50","tag":[],"description":"\\r\\n 面试题：如何让 var [a, b] = {a: 1, b: 2} 解构赋值成功？\\r\\n\\r\\n 浏览器打印\\r\\n\\r\\n\\r\\n\\r\\n```js\\r\\nvar [a, b] = {a: 1, b: 2}\\r\\n// T","cover":""}},{"route":"/interview/questions/常见的基础题","meta":{"isTimeLine":true,"title":"常见的基础题","date":"2021-11-21 00:00:00","tags":["面试"],"tag":["面试"],"description":"\\r\\n 常见的基础题\\r\\n\\r\\n {} 、new Object()和Object.create()创建对象的区别\\r\\n\\r\\nnew Object()\\r\\n\\r\\n\\r\\n\\r\\nnew 关键字会进行如下的操作\\r\\n\\r\\n* 创建","cover":""}},{"route":"/interview/questions/异步","meta":{"sidebar":null,"group":null,"title":"异步","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 测试题\\r\\n\\r\\n```js\\r\\nconsole.log(1);\\r\\n\\r\\nsetTimeout(() =\\r\\n  console.log(2);\\r\\n  Promise.resolve().then(() ","cover":""}},{"route":"/interview/questions/异步并发、缓存","meta":{"sidebar":null,"group":null,"title":"异步并发、缓存","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n\\r\\n```js\\r\\n/**\\r\\n * 1.限制请求并发数\\r\\n * 2.请求结果缓存（相同url接口使用同一返回结果）\\r\\n * 3.定时释放缓存结果内存\\r\\n */\\r\\n\\r\\nexport default c","cover":""}},{"route":"/interview/questions/浏览器相关","meta":{"sidebar":null,"group":null,"title":"浏览器相关面试题","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"cover":""}},{"route":"/interview/questions/说说 Vue 和 React 的区别","meta":{"sidebar":null,"group":null,"title":"说说 Vue 和 React 的区别","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 说说 Vue 和 React 的区别\\r\\n\\r\\n 青铜级\\r\\n只要真正了解一些，或者用过两个框架开发，就一定能说上来的一些语法层面：\\r\\n\\r\\nVue API 多，React API 少\\r\\nVue 双向绑","cover":""}},{"route":"/interview/questions/面经收集","meta":{"sidebar":null,"group":null,"title":"面经收集","isTimeLine":true,"date":"2024-01-24 00:00:00","tag":[],"description":"\\r\\n\\r\\n1. 天学网\\r\\n\\r\\n```text\\r\\n// 一面\\r\\n自我介绍\\r\\n介绍一下你在上家公司的主要工作\\r\\n介绍一个你之前过往工作中最满意的一个项目\\r\\n你在这个项目中做的性能优化的事情有哪些？\\r\\nweb","cover":""}},{"route":"/interview/questions/项目相关","meta":{"sidebar":null,"group":null,"title":"项目相关","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 组件库\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/interview/quick/index","meta":{"hidden":true,"title":"简介","date":"2023-11-30 14:52:18","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n\\r\\n\\r\\n 闲聊\\r\\n\\r\\n角色的转变 = 架构、流程把控等  -》 更偏向团队 \\r\\n\\r\\n\\r\\n\\r\\n 面试流程\\r\\n\\r\\n\\r\\nhr介入时机\\r\\n\\r\\n技术面之前 = hr地位没有那么高，一般技术面过","cover":""}},{"route":"/interview/quick/vue","meta":{"sidebar":null,"group":null,"title":"vue必知必考","date":"2023-11-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n 框架\\r\\n\\r\\n1-2年 使用上\\r\\n\\r\\n3-5年 \\r\\n思想、方案、封装、亮点\\r\\n\\r\\n5-7年\\r\\n框架无关- 核心思想\\r\\n\\r\\n\\r\\n\\r\\n 问题\\r\\n\\r\\ndata为什么建议是一个函数，而不是一个对象？\\r","cover":""}},{"route":"/interview/scene/index","meta":{"hidden":true,"sidebar":{"title":"简介"},"group":{"title":"Javascript"},"title":"简介","date":"2025-04-20 23:24:43","tag":[],"description":"\\r\\n场景面试题\\r\\n\\r\\n 目录\\r\\n\\r\\n* 大文件上传\\r\\n* 虚拟列表实现\\r\\n* 设计一个全栈请求耗时统计工具\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/case/index","meta":{"hidden":true,"title":"简介","date":"2024-09-18 10:49:48","tag":[],"description":"\\r\\n 目录\\r\\n* 可视化大屏适配方案\\r\\n* 监控实现方案\\r\\n* 表单解决方案-formily\\r\\n\\r","cover":""}},{"route":"/note/case/screen_fit","meta":{"sidebar":null,"title":"可视化大屏适配方案","isTimeLine":true,"date":"2024-01-14 00:00:00","tags":null,"tag":[],"description":"\\r\\n\\r\\n 三大常用方式\\r\\n\\r\\n* vw/vh方案\\r\\n\\r\\n概述：按照设计稿的尺寸，将px按比例计算转为vw和vh\\r\\n\\r\\n优点：可以动态计算图表的宽高，字体等，灵活性较高，当屏幕比例跟 ui 稿不一致时，","cover":""}},{"route":"/note/case/vedio","meta":{"sidebar":null,"title":"监控实现","isTimeLine":true,"date":"2024-01-14 00:00:00","tags":null,"tag":[],"description":"\\r\\n 监控实现-视频文件流\\r\\n\\r\\nvideo.js + videojs-contrib-hls\\r\\n\\r\\n```text\\r\\nnpm i video.js -save -D  \\r\\nnpm i videojs","cover":""}},{"route":"/note/case/前置知识-json schema","meta":{"sidebar":null,"title":"前置知识-json schema","isTimeLine":true,"date":"2024-09-10 00:00:00","tags":null,"tag":[],"description":"\\r\\n 什么是 Schema？\\r\\n\\r\\nJSON Schema 是用于验证 JSON 数据结构的强大工具，Schema可以理解为模式或者规则。\\r\\n\\r\\nJSON Schema是一种用于描述JSON数据的规范","cover":""}},{"route":"/note/case/表单解决方案","meta":{"sidebar":null,"title":"formily 表单解决方案","isTimeLine":true,"date":"2024-09-10 00:00:00","tags":null,"tag":[],"description":"\\r\\n 核心 @formily/core\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n 桥接库\\r\\n\\r\\n@formily/react\\r\\n@formily/vue\\r\\n\\r\\n 组件库\\r\\n\\r\\n@formily/ element ant","cover":""}},{"route":"/note/case/部署更新通知","meta":{"sidebar":null,"title":"部署更新通知","isTimeLine":true,"date":"2024-01-14 00:00:00","tags":null,"tag":[],"description":"\\r\\n 部署更新通知\\r\\n\\r\\n前端的静态资源会缓存在浏览器内存中，且在整个使用过程中通常不会自动重新加载。这种特性意味着如果应用有新的版本发布，用户可能仍在使用旧版本，无法立即获得最新的功能、修复或安全更","cover":""}},{"route":"/note/components/desc","meta":{"sidebar":null,"title":"组件库使用","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n 方式一\\r\\n需要在根目录下新增.npmrc文件，更改依赖安装地址。这种方式不用手动切换镜像源地址。\\r\\n\\r\\n```\\r\\nregistry=http://192.168.110.109:4873/\\r\\n`","cover":""}},{"route":"/note/components/index","meta":{"hidden":true,"title":"简介","date":"2024-01-25 10:41:26","tag":[],"description":"\\r\\n 目录\\r\\n* 组件库搭建\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/components/interview","meta":{"sidebar":null,"title":"组件库相关问题汇总","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["组件库"],"tag":["组件库"],"description":"\\r\\n Q: 为什么需要二次封装组件库？\\r\\n\\r\\n实际工作中，我们在项目中需要自定义主题色，更改按钮样式，自定义图标,自定义table组件等等，这些都可以基于antd组件库进行二次封装，减少重复工作，提升","cover":""}},{"route":"/note/components/project_components","meta":{"sidebar":null,"title":"组件库设计","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["组件库"],"tag":["组件库"],"description":"\\r\\n 目录结构\\r\\n\\r\\npnpm + vite\\r\\n\\r\\n```text\\r\\nproject\\r\\n├─.husky            github配置\\r\\n│  └─workflows       自动构建部","cover":""}},{"route":"/note/components/release-it","meta":{"sidebar":null,"group":null,"title":"release-it","isTimeLine":true,"date":"2023-11-15 16:00:00","tag":[],"description":"\\r\\n\\r\\n release-it能干什么\\r\\n\\r\\n* 我们先正常提交我们自己的代码，需求或bug以及其他\\r\\n* 自动根据上一个版本标签（Tag）与最新历史进行对比并产出日志\\r\\n* conventional","cover":""}},{"route":"/note/concept/index","meta":{"hidden":true,"title":"简介","date":"2023-11-21 11:25:22","tag":[],"description":"\\r\\n 概念性知识\\r\\n\\r\\n 目录\\r\\n\\r\\n* 假死\\r\\n* 死锁\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/concept/假死","meta":{"sidebar":null,"group":null,"title":"假死","isTimeLine":true,"date":"2023-11-09 16:00:00","tag":[],"description":"\\r\\n 什么是假死？\\r\\n\\r\\n浏览器有GUI渲染线程与JS引擎线程，这两个线程是互斥的关系\\r\\n\\r\\n当js有大量计算时，会造成 UI 阻塞，出现界面卡顿、掉帧等情况，严重时会出现页面卡死的情况，俗称假死\\r\\n","cover":""}},{"route":"/note/concept/死锁","meta":{"sidebar":null,"group":null,"title":"死锁","isTimeLine":true,"date":"2023-11-09 16:00:00","tags":["todo"],"categories":null,"tag":["todo"],"description":"\\r\\n 什么是死锁？\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/docker/docker","meta":{"sidebar":null,"title":"docker基础","date":"2024-04-24 15:39:03","tag":[],"description":"\\r\\n docker基础\\r\\n\\r\\nhttps://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP\\r","cover":""}},{"route":"/note/docker/index","meta":{"hidden":true,"title":"简介","date":"2024-04-24 15:39:03","tag":[],"description":"\\r\\n 目录\\r\\n* docker基础\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/h5/index","meta":{"hidden":true,"title":"简介","date":"2023-11-29 09:38:26","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\nh5 坑点盘点\\r\\n\\r\\nhttps://juejin.cn/post/6921886428158754829?searchId=202311281504567D709A03D72805","cover":""}},{"route":"/note/microapp/index","meta":{"hidden":true,"title":"简介","date":"2023-12-28 14:54:26","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n* 微前端qiankun项目改造\\r\\n\\r\\n\\r\\n 微前端能解决什么问题？\\r\\n\\r\\n单体应用规模扩大后难以维护和升级的问题，同时避免了微服务可能带来的复杂性\\r\\n\\r\\n常见微前端框架的对比\\r\\n\\r","cover":""}},{"route":"/note/microapp/Mirco-App","meta":{"sidebar":null,"title":"Micro App","step":6,"isTimeLine":true,"date":"2022-09-14 00:00:00","tag":[],"description":"\\r\\n Micro App\\r\\n\\r\\nMicro App 是京东出的一款基于 Web Component 原生组件进行渲染的微前端框架，不同于目前流行的开源框架，它从组件化的思维实现微前端，旨在降低上手难度","cover":""}},{"route":"/note/microapp/pushState&popstate","meta":{"title":"history之popState和pushState","date":"2023-09-14 00:00:00","tag":[],"description":"\\r\\n history\\r\\n\\r\\n\\r\\n\\r\\n使用 history.pushState() 可以改变referrer，它在用户发送XMLHttpRequest请求时在HTTP头部使用，改变state后创建的XM","cover":""}},{"route":"/note/microapp/qiankun","meta":{"sidebar":null,"title":"qiankun深入","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n* 生命周期篇；\\r\\n* IE 兼容篇；\\r\\n* 生产环境部署篇；\\r\\n* 性能优化、缓存方案篇；\\r\\n\\r\\n\\r\\nqiankun基于single-spa\\r\\n\\r\\nQianKun 基于 single-spa","cover":""}},{"route":"/note/microapp/qiankun通信实现","meta":{"sidebar":null,"title":"qiankun通信实现","isTimeLine":true,"date":"2022-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n qiankun通信实现\\r\\n\\r\\n两种方式\\r\\n\\r\\n* qiankun 官方提供的通信方式 ---- Actions 通信，适合业务划分清晰，比较简单的微前端应用，一般来说使用第一种方案就可以满足","cover":""}},{"route":"/note/microapp/qiankun项目改造","meta":{"sidebar":null,"title":"微前端qiankun项目改造","isTimeLine":true,"date":"2023-09-14 00:00:00","tag":[],"description":"\\r\\n 什么是微前端\\r\\n\\r\\n 微前端选型指南\\r\\n\\r\\n 项目实现\\r\\n\\r\\n 存在的问题\\r\\n\\r\\n路由模式如何抉择\\r\\n\\r\\n最终选用了 主应用 history ，子应用history 模式\\r\\n\\r\\n\\r\\n 主应用改造","cover":""}},{"route":"/note/microapp/实现方式","meta":{"sidebar":null,"title":"微前端实现方式","date":"2023-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n\\r\\n微前端在小米 CRM 系统的实践\\r\\n\\r\\n 路由分发式微前端 -nginx \\r\\n\\r\\nNginx服务器的反向代理来将请求分发到不同的微应用\\r\\n\\r\\n```text\\r\\nhttp {\\r\\n  serv","cover":""}},{"route":"/note/microapp/微前端","meta":{"sidebar":null,"title":"微前端","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["微前端"],"tag":["微前端"],"description":"\\r\\n微前端的概念是由ThoughtWorks在2016年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，将多个可以独立开发、独立运行、独立部署的小型应用融合","cover":""}},{"route":"/note/node/chalk","meta":{"sidebar":null,"title":"chalk","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n 说明\\r\\n\\r\\nprompts 是一个 Node.js npm 包，用来实现命令行问答程序，通常被一些 CLI 程序使用，比如 create-vite 就是使用 prompts 让用户选择哪种模板创","cover":""}},{"route":"/note/node/commander","meta":{"sidebar":null,"title":"commander","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n 使用说明\\r\\n\\r\\n```js\\r\\nconst commander = require(\\"commander\\"); // 第三方包\\r\\nconst chalk = require(\\"chalk\\");","cover":""}},{"route":"/note/node/index","meta":{"hidden":true,"title":"简介","date":"2023-12-19 15:03:58","tag":[],"description":"\\r\\n此部分记载一些node笔记\\r\\n\\r\\n 目录\\r\\n* 从npm -\\r\\n* commander\\r\\n* chalk\\r\\n* prompts\\r","cover":""}},{"route":"/note/node/npm&yarn&pnpm","meta":{"title":"npm、yarn、pnpm","date":"2024-01-23 14:58:01","tag":[],"description":"\\r\\n npm\\r\\n\\r\\n\\r\\nv3版本一下采用的是嵌套解构，v3以上采用了尽量扁平解构\\r\\nv5增加了package-lock.json。\\r\\n\\r\\n\\r\\n 嵌套的 node_modules 结构\\r\\nnpm 在早期","cover":""}},{"route":"/note/node/prompts","meta":{"sidebar":null,"title":"prompts","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n 说明\\r\\n\\r\\nprompts 是一个 Node.js npm 包，用来实现命令行问答程序，通常被一些 CLI 程序使用，比如 create-vite 就是使用 prompts 让用户选择哪种模板创","cover":""}},{"route":"/note/other/H5踩坑记录","meta":{"sidebar":null,"title":"H5踩坑记录","date":"2024-09-18 10:49:48","tag":[],"description":"\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nH5踩坑记录\\r","cover":""}},{"route":"/note/other/index","meta":{"hidden":true,"title":"简介","date":"2025-02-18 17:29:50","tag":[],"description":"\\r\\n添加useraaa用户，切换用户，并进入到用户目录\\r\\nuseradd useraaa\\r\\nsu useraaa\\r\\ncd /home/useraaa\\r\\n添加.ssh目录和authorized_keys","cover":""}},{"route":"/note/other/java","meta":{"sidebar":null,"title":"mac搭建java开发环境","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n 安装jdk@17\\r\\n\\r\\n```text\\r\\ncd \\"$(brew --repo)\\"\\r\\ngit fetch\\r\\ngit reset --hard origin/master\\r\\nbrew updat","cover":""}},{"route":"/note/other/jenkins1","meta":{"sidebar":null,"title":"jenkins搭建（一）","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n gitlab+jenkins+docker自动化部署前端项目\\r\\n\\r\\n\\r\\n由于公司已经自行部署gitlab和nginx，只需要部署jenkins即可。\\r\\n\\r\\n1、背景\\r\\n\\r\\n之前公司采用是本地打包","cover":""}},{"route":"/note/other/Shadcn UI","meta":{"sidebar":null,"title":"Shadcn UI","isTimeLine":true,"date":"2025-02-18 00:00:00","tag":[],"description":"\\r\\n Shadcn UI\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/other/URLScheme","meta":{"sidebar":null,"title":"URLScheme","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\nalipays://platformapi/startapp?appId=20000003支付宝账单\\r\\n\\r\\nalipays://platformapi/startapp?appId=20000","cover":""}},{"route":"/note/other/公众号H5调试","meta":{"sidebar":null,"title":"公众号H5调试","isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n 公众号H5本地调试\\r\\n\\r\\n背景\\r\\n\\r\\n公众号网页需要授权，微信通过oauth2机制回调域名，本地开发的时候会报错。\\r\\n\\r\\n本地调试\\r\\n\\r\\n背景： 微信公众号oauth2授权机制，本地需要获取co","cover":""}},{"route":"/note/other/前沿技术盘点","meta":{"sidebar":null,"title":"前沿技术盘点","isTimeLine":true,"date":"2024-08-14 00:00:00","tag":[],"description":"\\r\\n 前沿技术盘点\\r\\n\\r\\n\\r\\n 服务端渲染：Nuxt.js、Next.js 和 Nest.js\\r\\n\\r\\n* Nuxt.js 适合构建 Vue.js 应用程序的服务端渲染和静态站点生成，\\r\\n* Next.","cover":""}},{"route":"/note/other/添加用户配置免登","meta":{"title":"","date":"2023-12-28 14:54:26","tag":[],"cover":""}},{"route":"/note/ps/index","meta":{"hidden":true,"title":"简介","date":"2025-04-15 11:07:46","tag":[],"description":"\\r\\n\\r\\n\\r\\n\\r\\n 目录\\r\\n* 人物美白\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/ps/人物美白","meta":{"sidebar":null,"title":"人物美白","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n1、人物变亮：类型改成滤色\\r\\n2、磨皮：\\r\\n新建两个图层： 高频 、 低频\\r\\n低频： 滤镜-模糊-高斯模糊- 半径调整至模糊能看清楚之间（参考半径2.1）\\r\\n高频：图像-应用图像   图层选择","cover":""}},{"route":"/note/resource/index","meta":{"hidden":true,"title":"简介","date":"2024-05-11 10:33:08","tag":[],"description":"\\r\\n 资源列表\\r\\n\\r\\n\\r\\n低代码\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/resource/低代码","meta":{"sidebar":null,"title":"低代码","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n* 阿里巴巴-开源  \\r\\n  - 低代码引擎 (LowCodeEngine)  \\r\\n  - 宜搭（基于低代码引擎的商业产品）\\r\\n  \\r\\n\\r\\n* 百度-开源  \\r\\n  - amis - 后端友好型低","cover":""}},{"route":"/note/resource/项目模版","meta":{"sidebar":null,"title":"项目模版","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n vue\\r\\n\\r\\n 后台管理 - element plus\\r\\n\\r\\n* pure-admin：https://pure-admin.github.io/\\r\\n* element-plus-admin","cover":""}},{"route":"/note/standard/index","meta":{"hidden":true,"title":"简介","date":"2024-07-29 14:36:37","tag":[],"description":"\\r\\n 目录\\r\\n\\r\\n* 规范\\r\\n* restful规范\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/standard/restful","meta":{"sidebar":null,"title":"restful规范","date":"2024-05-14 00:00:00","tags":["前端规范","restful"],"categories":["规范"],"tag":["规范","前端规范","restful"],"description":"\\r\\n\\r\\n 什么是RESTful？\\r\\n\\r\\nRESTful,简称REST。\\r\\n1. 英文：Representational State Transfer。\\r\\n2. 直译：表现层状态转化。\\r\\n3. 本质：用","cover":""}},{"route":"/note/standard/规范","meta":{"sidebar":null,"title":"前端规范","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tags":["前端规范","CI/CD"],"categories":["工程化"],"tag":["工程化","前端规范","CI/CD"],"description":"\\r\\n开发流程规范\\r\\n代码规范\\r\\ngit commit规范\\r\\n项目文件结构规范\\r\\nUI设计规范\\r\\n\\r\\n 为什么需要规范\\r\\n规范能给我们带来什么好处，如果没有规范会造成什么后果？这里主要拿代码规范来说。\\r","cover":""}},{"route":"/note/system/blog_github","meta":{"sidebar":null,"title":"vitepress搭建博客","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n 说明\\r\\n\\r\\n今天学习了github + vitepress搭建博客\\r\\n\\r\\n\\r\\n vitepress创建项目\\r\\n\\r\\n\\r\\n\\r\\n 创建GitHub仓库\\r\\n\\r\\n1、 在GitHub上创建仓库，对于名","cover":""}},{"route":"/note/system/dokcer私有仓库搭建","meta":{"sidebar":null,"title":"dokcer私有仓库搭建","date":"2024-04-15 15:22:41","tag":[],"description":"\\r\\nhttps://blog.csdn.net/wlddhj/article/details/135412806\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r","cover":""}},{"route":"/note/system/index","meta":{"hidden":true,"title":"简介","date":"2024-04-25 14:34:23","tag":[],"cover":""}},{"route":"/note/system/jenkins1","meta":{"sidebar":null,"title":"jenkins搭建（一）","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n jenkins 简介\\r\\n\\r\\n文档--https://www.jenkins.io/zh/doc/book/pipeline/jenkinsfile/\\r\\n\\r\\n 功能特点\\r\\n\\r\\n* 开源免费\\r\\n* ","cover":""}},{"route":"/note/system/jenkins2","meta":{"sidebar":null,"title":"jenkins搭建（二）","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\nhttps://juejin.cn/post/6939812008082538504?from=search-suggestheading-5\\r\\nhttps://juejin.cn/post/","cover":""}},{"route":"/note/system/Jenkinsfile编写","meta":{"title":"","date":"2024-04-22 16:57:52","tag":[],"cover":""}},{"route":"/note/system/npm","meta":{"sidebar":null,"title":"npm私有仓库","step":6,"isTimeLine":true,"date":"2020-09-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n 说明\\r\\n\\r\\n\\r\\n\\r\\n 部署\\r\\n\\r\\n参考1\\r\\n参考2\\r\\n\\r\\ndocker-compose基本命令\\r\\n\\r\\n```shell\\r\\n后台构建\\r\\ndocker-compose up -d\\r\\ndocker","cover":""}},{"route":"/note/system/stable diffusion部署","meta":{"sidebar":null,"group":null,"title":"stable diffusion部署","date":"2023-12-10 00:00:00","sticky":1,"tag":[],"description":"\\r\\n\\r\\n 前言\\r\\n\\r\\n最近在看ai方面的知识，工具主要有 mj、sd、lora等，因为mj收费的原因，所以决定先本地部署一个sd试一下，这里记录一下本地部署的过程。\\r\\n\\r\\n sd本地部署\\r\\n\\r\\n本地部","cover":""}},{"route":"/note/system/低代码平台搭建（一）","meta":{"sidebar":null,"group":null,"title":"低代码平台搭建（一）","date":"2023-12-10 00:00:00","sticky":1,"tag":[],"description":"\\r\\n\\r\\n意义： 降本增效\\r\\n\\r\\n降低前端、运营的开发成本\\r\\n\\r\\n运营- 前端变化： 针对组件交付，不针对业务交付\\r\\n\\r\\n关键词： 数据驱动、所见即所得、\\r\\n\\r\\n\\r\\n参考：有赞\\r\\n\\r\\n架构能力：经验、技","cover":""}},{"route":"/note/system/前端docker部署","meta":{"sidebar":null,"title":"前端docker部署","date":"2024-03-14 00:00:00","tag":[],"description":"\\r\\n\\r\\n docker基础\\r\\n\\r\\n\\r\\n\\r\\n镜像是静态模板，容器是镜像的实例化，是从镜像启动的一个可写、运行时环境，同一镜像可以启动多个容器，每个容器可以根据需要独立地进行个性化配置和操作。\\r\\n\\r\\nDo","cover":""}},{"route":"/note/system/前端监控","meta":{"sidebar":null,"title":"前端监控","date":"2024-04-22 16:27:48","tag":[],"description":"\\r\\n* 15个UI测试工具\\r\\n* 自己搭建前端监控\\r\\n* 使用 Sentry 做性能监控 - 原理篇\\r\\n* 使用Sentry错误监控实践\\r\\n* 线上问题监控 Sentry 接入全过程\\r\\n\\r\\n 方案选择","cover":""}},{"route":"/note/system/接口管理","meta":{"sidebar":null,"title":"接口管理","date":"2024-08-21 10:17:21","tag":[],"description":"\\r\\n\\r\\n API 管理\\r\\n\\r\\n\\r\\n\\r\\nAPI 管理的过程是在逐步完善的，从以工程师视角管理到更规范化的基于管理工具的管理；“口口相传”会随着工程师的更替而逐渐失去管控，直到无法追溯； 基于文档的管理，","cover":""}},{"route":"/note/system/系统设计","meta":{"title":"设计复杂系统需要考虑什么","date":"2023-12-10 00:00:00","tag":[],"description":"\\r\\nhttps://juejin.cn/post/7226933611265343525?searchId=202312121343273949AA2476C32D06411A\\r\\n\\r\\nhttps://","cover":""}},{"route":"/note/问题解决记录/index","meta":{"hidden":true,"title":"简介","date":"2024-02-27 09:21:52","tag":[],"description":"\\r\\n\\r\\n Parsing error: require() of ES Module Desktop/Projects/MealsToGo/node_modules/eslint-scope/lib/","cover":""}},{"route":"/note/问题解决记录/update","meta":{"sidebar":null,"title":"vue2.x -> vue2.7升级记录","tags":["vue"],"date":"2024-07-31 15:18:54","tag":["vue"],"description":"\\r\\n 1、 vue upgrade\\r\\n\\r\\n```text\\r\\nvue upgrade\\r\\n```\\r\\n\\r\\n 2\\r\\nvue-template-compiler 可以删掉了，因为 vue 2.7 中不再需要它\\r","cover":""}},{"route":"/front/performance/assets/index","meta":{"hidden":true,"title":"性能优化","date":"2023-11-30 18:07:18","tag":[],"description":"\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n 目录\\r\\n\\r\\n\\r\\n* 性能指标\\r\\n* 优化手段\\r\\n* 性能上报方式\\r\\n\\r\\n\\r\\n\\r\\n 性能优化常见的场景\\r\\n\\r\\n* 大型虚拟列表 - 虚拟滚动\\r\\n* 减少大型不可变数据的响应性开销\\r","cover":""}}],"themeColor":"el-blue","author":"cpf","search":false,"recommend":{"showSelf":true,"nextText":"下一页","style":"sidebar"},"mermaid":true},"sidebar":[{"text":"","items":[]}],"search":{"provider":"local"},"lastUpdatedText":"上次更新于","logo":"","nav":[{"text":"关于","link":"/about"},{"text":"思维导图","link":"/mapping/"},{"text":"拓展学习","items":[{"text":"人力资源","link":"/expand/manpower/"}]},{"text":"笔记","items":[{"text":"系统搭建","link":"/note/system/"},{"text":"规范","link":"/note/standard/"},{"text":"资源","link":"/note/resource/"},{"text":"h5","link":"/note/h5/"},{"text":"node","link":"/note/node/"},{"text":"组件库搭建","link":"/note/components/"},{"text":"微前端","link":"/note/microapp/"},{"text":"概念性知识","link":"/note/concept/"},{"text":"实现方案","link":"/note/case/"},{"text":"docker","link":"/note/docker/"},{"text":"其他","link":"/note/other/"},{"text":"坑点记录","link":"/note/bugs"},{"text":"ps","link":"/note/ps/"}]},{"text":"前端","items":[{"text":"javascript","link":"/front/javascript/"},{"text":"typescript","link":"/front/typescript/"},{"text":"css","link":"/front/css/"},{"text":"设计模式","link":"/front/design/"},{"text":"手写代码","link":"/front/coding/"},{"text":"性能优化","link":"/front/performance/"},{"text":"工程化","link":"/front/CICD/"},{"text":"混合开发","link":"/front/混合开发/"},{"text":"Web Worker","link":"/front/Web-Worker/"}]},{"text":"框架","items":[{"text":"vue2","link":"/frame/vue2/"},{"text":"vue3","link":"/frame/vue3/"},{"text":"react","link":"/frame/react/"}]},{"text":"浏览器","items":[{"text":"浏览器","link":"/browser/"}]},{"text":"计算机基础","items":[{"text":"计算机网络","link":"/internet/"}]},{"text":"面试系列","items":[{"text":"算法与数据结构","link":"/interview/algorithm/"},{"text":"常见面试题","link":"/interview/questions/"},{"text":"场景面试题","link":"/interview/scene/"},{"text":"综合问题","link":"/interview/other/"},{"text":"突击课程","link":"/interview/quick/"}]}],"socialLinks":[{"icon":"github","link":"https://github.com/pengfei1346/pengfei1346.github.io"}]},"locales":{},"scrollOffset":90,"cleanUrls":false}'));
function tryOnScopeDispose$1(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
function reactify(fn, options) {
  const unrefFn = (options == null ? void 0 : options.computedGetter) === false ? unref : toValue;
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}
const isClient$1 = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString2 = Object.prototype.toString;
const isObject$1 = (val) => toString2.call(val) === "[object Object]";
const noop$1 = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a2, _b;
  return isClient$1 && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper$1(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter$1 = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer2;
  let maxTimer;
  let lastRejector = noop$1;
  const _clearTimeout = (timer22) => {
    clearTimeout(timer22);
    lastRejector();
    lastRejector = noop$1;
  };
  const filter2 = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer2)
      _clearTimeout(timer2);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer2)
            _clearTimeout(timer2);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer2 = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter2;
}
function pausableFilter$1(extendFilter = bypassFilter$1) {
  const isActive2 = ref(true);
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop$1 }))) : ref(r);
}
function watchWithFilter$1(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter$1,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper$1(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable$1(source, cb, options = {}) {
  const {
    eventFilter: filter2,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter$1(filter2);
  const stop = watchWithFilter$1(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive: isActive2 };
}
function tryOnMounted$1(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function watchDebounced(source, cb, options = {}) {
  const {
    debounce = 0,
    maxWait = void 0,
    ...watchOptions
  } = options;
  return watchWithFilter$1(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: debounceFilter(debounce, { maxWait })
    }
  );
}
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    shallow = true,
    onError = noop$1
  } = options;
  const started = ref(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}
function unrefElement$1(elRef) {
  var _a2;
  const plain = toValue(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow$1 = isClient$1 ? window : void 0;
function useEventListener$1(...args) {
  let target;
  let events;
  let listeners2;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners2, options] = args;
    target = defaultWindow$1;
  } else {
    [target, events, listeners2, options] = args;
  }
  if (!target)
    return noop$1;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners2))
    listeners2 = [listeners2];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement$1(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject$1(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners2.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose$1(stop);
  return stop;
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow$1,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener$1(target, eventName, listener, passive);
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported$1(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery$1(query, options = {}) {
  const { window: window2 = defaultWindow$1 } = options;
  const isSupported = useSupported$1(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose$1(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__vueuse_ssr_handlers__";
const handlers$1 = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey$1 in _global$1))
    _global$1[globalKey$1] = _global$1[globalKey$1] || {};
  return _global$1[globalKey$1];
}
function getSSRHandler$1(key, fallback) {
  return handlers$1[key] || fallback;
}
function guessSerializerType$1(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers$1 = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName$1 = "vueuse-storage";
function useStorage$1(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow$1,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler$1("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow$1) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type2 = guessSerializerType$1(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers$1[type2];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable$1(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted$1(() => {
      useEventListener$1(window2, "storage", update);
      useEventListener$1(window2, customStorageEventName$1, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName$1, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type2 === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark$1(options) {
  return useMediaQuery$1("(prefers-color-scheme: dark)", options);
}
function useColorMode$1(options = {}) {
  const {
    selector: selector2 = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow$1,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark$1({ window: window2 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage$1(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state2 = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler$1(
    "updateHTMLAttrs",
    (selector22, attribute2, value) => {
      const el = typeof selector22 === "string" ? window2 == null ? void 0 : window2.document.querySelector(selector22) : unrefElement$1(selector22);
      if (!el)
        return;
      let style2;
      if (disableTransition) {
        style2 = window2.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style2.appendChild(document.createTextNode(styleString));
        window2.document.head.appendChild(style2);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute2, value);
      }
      if (disableTransition) {
        window2.getComputedStyle(style2).opacity;
        document.head.removeChild(style2);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a2;
    updateHTMLAttrs(selector2, attribute, (_a2 = modes[mode]) != null ? _a2 : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state2, onChanged, { flush: "post", immediate: true });
  tryOnMounted$1(() => onChanged(state2.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state2.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state: state2 });
  } catch (e) {
    return auto;
  }
}
function useDark$1(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow$1
  } = options;
  const mode = useColorMode$1({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a2;
      if (options.onChanged)
        (_a2 = options.onChanged) == null ? void 0 : _a2.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => {
    if (mode.system) {
      return mode.system.value;
    } else {
      const preferredDark = usePreferredDark$1({ window: window2 });
      return preferredDark.value ? "dark" : "light";
    }
  });
  const isDark2 = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark2;
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow$1 } = options;
  return useStorage$1(key, initialValue, window2 == null ? void 0 : window2.localStorage, options);
}
function checkOverflowScroll(ele) {
  const style2 = window.getComputedStyle(ele);
  if (style2.overflowX === "scroll" || style2.overflowY === "scroll" || style2.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style2.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, initialOverflow);
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener$1(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    var _a2;
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = (_a2 = elInitialOverflow.get(el)) != null ? _a2 : "";
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose$1(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow$1 } = options;
  return useStorage$1(key, initialValue, window2 == null ? void 0 : window2.sessionStorage, options);
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow$1, behavior = "auto" } = options;
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window2.scrollX);
  const internalY = ref(window2.scrollY);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo({ left: x2, behavior });
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo({ top: y2, behavior });
    }
  });
  useEventListener$1(
    window2,
    "scroll",
    () => {
      internalX.value = window2.scrollX;
      internalY.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser$1 = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser$1 ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a2, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a2 = siteData2.locales[localeIndex]) == null ? void 0 : _a2.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type2, attrs]) => type2 === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev2, curr) {
  return [...prev2.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name2) {
  const match = DRIVE_LETTER_REGEX.exec(name2);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name2.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark2 = appearance === "force-dark" ? ref(true) : appearance ? useDark$1({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: isDark2
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser$1) {
      const base2 = "/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base2}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser$1 ? location.href : "/") {
    var _a2, _b;
    href = normalizeHref(href);
    if (await ((_a2 = router.onBeforeRouteChange) == null ? void 0 : _a2.call(router, href)) === false)
      return;
    updateHistory(href);
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a2;
    if (await ((_a2 = router.onBeforePageLoad) == null ? void 0 : _a2.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser$1) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo$1(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
            }
            if (hash) {
              scrollTo$1(link2, hash, link2.classList.contains("header-anchor"));
            } else {
              updateHistory(href);
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo$1(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    let scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    let padding = 24;
    if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
      padding = scrollOffset.padding;
      scrollOffset = scrollOffset.selector;
    }
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset, padding);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector2 of scrollOffset) {
        const res = tryOffsetSelector(selector2, padding);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector2, padding) {
  const el = document.querySelector(selector2);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
function updateHistory(href) {
  if (inBrowser$1 && href !== normalizeHref(location.href)) {
    history.replaceState({ scrollPosition: window.scrollY }, document.title);
    history.pushState(null, "", href);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData$1();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const _sfc_main$1E = {
  __name: "Mermaid",
  __ssrInlineRender: true,
  props: {
    graph: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const pluginSettings = ref({
      securityLevel: "loose",
      startOnLoad: false,
      externalDiagrams: []
    });
    const { page } = useData$1();
    const { frontmatter } = toRaw(page.value);
    const mermaidPageTheme = frontmatter.mermaidTheme || "";
    const props = __props;
    const svg2 = ref(null);
    let mut = null;
    onMounted(async () => {
      var _a2;
      await init(pluginSettings.value.externalDiagrams);
      let settings = await import("./virtual_mermaid-config.e9a94820.js");
      if (settings == null ? void 0 : settings.default)
        pluginSettings.value = settings.default;
      mut = new MutationObserver(async () => await renderChart());
      mut.observe(document.documentElement, { attributes: true });
      await renderChart();
      const hasImages = ((_a2 = /<img([\w\W]+?)>/.exec(decodeURIComponent(props.graph))) == null ? void 0 : _a2.length) > 0;
      if (hasImages)
        setTimeout(() => {
          let imgElements = document.getElementsByTagName("img");
          let imgs = Array.from(imgElements);
          if (imgs.length) {
            Promise.all(
              imgs.filter((img) => !img.complete).map(
                (img) => new Promise((resolve) => {
                  img.onload = img.onerror = resolve;
                })
              )
            ).then(async () => {
              await renderChart();
            });
          }
        }, 100);
    });
    onUnmounted(() => mut.disconnect());
    const renderChart = async () => {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      let mermaidConfig = {
        ...pluginSettings.value
      };
      if (mermaidPageTheme)
        mermaidConfig.theme = mermaidPageTheme;
      if (hasDarkClass)
        mermaidConfig.theme = "dark";
      let svgCode = await render$1(
        props.id,
        decodeURIComponent(props.graph),
        mermaidConfig
      );
      const salt = Math.random().toString(36).substring(7);
      svg2.value = `${svgCode} <span style="display: none">${salt}</span>`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mermaid" }, _attrs))}>${svg2.value}</div>`);
    };
  }
};
const _sfc_setup$1E = _sfc_main$1E.setup;
_sfc_main$1E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress-plugin-mermaid@2.0.13_mermaid@10.7.0_vitepress@1.0.0-rc.24/node_modules/vitepress-plugin-mermaid/dist/Mermaid.vue");
  return _sfc_setup$1E ? _sfc_setup$1E(props, ctx) : void 0;
};
const index$1 = "";
const index = "";
const cssVars = "";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpCodeGroup = "";
const vpDoc = "";
const vpSponsor = "";
const _sfc_main$1D = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type]
      }, _attrs))} data-v-b7564698>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const VPBadge_vue_vue_type_style_index_0_scoped_b7564698_lang = "";
const _sfc_setup$1D = _sfc_main$1D.setup;
_sfc_main$1D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$1D ? _sfc_setup$1D(props, ctx) : void 0;
};
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["__scopeId", "data-v-b7564698"]]);
const _sfc_main$1C = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-552cc16d></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_552cc16d_lang = "";
const _sfc_setup$1C = _sfc_main$1C.setup;
_sfc_main$1C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1C ? _sfc_setup$1C(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["__scopeId", "data-v-552cc16d"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || /\.(?!html|md)\w+($|\?)/i.test(url))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a2, _b;
    return {
      label: (_a2 = site.value.locales[localeIndex.value]) == null ? void 0 : _a2.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$1B = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root2 = ref("/");
    onMounted(() => {
      var _a2;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root2.value = ((_a2 = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a2.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-a5a6d5a3><p class="code" data-v-a5a6d5a3>${ssrInterpolate(((_a2 = unref(theme2).notFound) == null ? void 0 : _a2.code) ?? "404")}</p><h1 class="title" data-v-a5a6d5a3>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-a5a6d5a3></div><blockquote class="quote" data-v-a5a6d5a3>${ssrInterpolate(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-a5a6d5a3><a class="link"${ssrRenderAttr("href", unref(withBase)(root2.value))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-a5a6d5a3>${ssrInterpolate(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_a5a6d5a3_lang = "";
const _sfc_setup$1B = _sfc_main$1B.setup;
_sfc_main$1B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$1B ? _sfc_setup$1B(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["__scopeId", "data-v-a5a6d5a3"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index2 in sidebar) {
    const item = sidebar[index2];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base2 = item.base || _base;
    if (base2 && item.link)
      item.link = base2 + item.link;
    if (item.items)
      item.items = addBase(item.items, base2);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery$1("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next2, prev2) => {
    if (JSON.stringify(next2) !== JSON.stringify(prev2))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
const hashRef = ref(inBrowser$1 ? location.hash : "");
if (inBrowser$1) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hashRef], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery$1("(min-width: 960px)");
  const is1280 = useMediaQuery$1("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 71;
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range2) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range2);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node2 of h2.childNodes) {
    if (node2.nodeType === 1) {
      if (node2.classList.contains("VPBadge") || node2.classList.contains("header-anchor")) {
        continue;
      }
      ret += node2.textContent;
    } else if (node2.nodeType === 3) {
      ret += node2.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range2) {
  if (range2 === false) {
    return [];
  }
  const levelsRange = (typeof range2 === "object" && !Array.isArray(range2) ? range2.level : range2) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev2 = headers[j];
          if (prev2.level < cur.level) {
            (prev2.children || (prev2.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor$1(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$1A = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: _ctx.root ? "root" : "nested"
      }, _attrs))} data-v-3acdd583><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children: children2, link: link2, title }) => {
        _push(`<li data-v-3acdd583><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-3acdd583>${ssrInterpolate(title)}</a>`);
        if (children2 == null ? void 0 : children2.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children2 }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_3acdd583_lang = "";
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["__scopeId", "data-v-3acdd583"]]);
const _sfc_main$1z = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor$1(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container,
        role: "navigation"
      }, _attrs))} data-v-6f21719b><div class="content" data-v-6f21719b><div class="outline-marker" data-v-6f21719b></div><div class="outline-title" role="heading" aria-level="2" data-v-6f21719b>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-6f21719b><span class="visually-hidden" id="doc-outline-aria-label" data-v-6f21719b> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_6f21719b_lang = "";
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$1z, [["__scopeId", "data-v-6f21719b"]]);
const _sfc_main$1y = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-4f3c8b44>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-4f3c8b44></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$1y, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_4f3c8b44_lang = "";
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["__scopeId", "data-v-4f3c8b44"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text: text2 = "Edit this page", pattern: pattern2 = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern2 === "function") {
      url = pattern2(page.value);
    } else {
      url = pattern2.replace(/:path/g, page.value.filePath);
    }
    return { url, text: text2 };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index2 = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a2 = theme2.value.docFooter) == null ? void 0 : _a2.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index2 - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index2 - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index2 - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index2 + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index2 + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index2 + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
const _sfc_main$1w = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$1v = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const _sfc_main$1u = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter, lang: lang2 } = useData();
    const date = computed(
      () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a2, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a2 = theme2.value.lastUpdated) == null ? void 0 : _a2.formatOptions) == null ? void 0 : _b.forceLocale) ? lang2.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-45911b56>${ssrInterpolate(((_a2 = unref(theme2).lastUpdated) == null ? void 0 : _a2.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-45911b56>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_45911b56_lang = "";
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["__scopeId", "data-v-45911b56"]]);
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-4e9a31d4>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-4e9a31d4>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-4e9a31d4>`);
            _push(ssrRenderComponent(_sfc_main$1v, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString$1(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-4e9a31d4>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a2 = unref(control).prev) == null ? void 0 : _a2.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" data-v-4e9a31d4><div class="pager" data-v-4e9a31d4>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).prev.link))} data-v-4e9a31d4><span class="desc" data-v-4e9a31d4>${((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"}</span><span class="title" data-v-4e9a31d4>${unref(control).prev.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-4e9a31d4>`);
          if ((_e = unref(control).next) == null ? void 0 : _e.link) {
            _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).next.link))} data-v-4e9a31d4><span class="desc" data-v-4e9a31d4>${((_f = unref(theme2).docFooter) == null ? void 0 : _f.next) || "Next page"}</span><span class="title" data-v-4e9a31d4>${unref(control).next.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_4e9a31d4_lang = "";
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["__scopeId", "data-v-4e9a31d4"]]);
const _sfc_main$1s = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const open = ref(false);
    onContentUpdated(() => {
      open.value = false;
    });
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (headers.value.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocOutlineDropdown" }, _attrs))} data-v-e029296d><button class="${ssrRenderClass({ open: open.value })}" data-v-e029296d>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
        if (open.value) {
          _push(`<div class="items" data-v-e029296d>`);
          _push(ssrRenderComponent(VPDocOutlineItem, { headers: headers.value }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocOutlineDropdown_vue_vue_type_style_index_0_scoped_e029296d_lang = "";
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineDropdown.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const VPDocOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["__scopeId", "data-v-e029296d"]]);
const _sfc_main$1q = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-420135ba>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-420135ba>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-420135ba><div class="aside-curtain" data-v-420135ba></div><div class="aside-container" data-v-420135ba><div class="aside-content" data-v-420135ba>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-420135ba><div class="content-container" data-v-420135ba>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocOutlineDropdown, null, null, _parent));
      _push(`<main class="main" data-v-420135ba>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_420135ba_lang = "";
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["__scopeId", "data-v-420135ba"]]);
const _sfc_main$1p = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [_ctx.size, _ctx.theme]],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString$1(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_7d397cd4_lang = "";
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["__scopeId", "data-v-7d397cd4"]]);
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-5ac1770f>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_5ac1770f_lang = "";
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["__scopeId", "data-v-5ac1770f"]]);
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-fcb1ffe8><div class="container" data-v-fcb1ffe8><div class="main" data-v-fcb1ffe8>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-fcb1ffe8><span class="clip" data-v-fcb1ffe8>${_ctx.name}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-fcb1ffe8>${_ctx.text}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-fcb1ffe8>${_ctx.tagline}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-fcb1ffe8><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-fcb1ffe8>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-fcb1ffe8><div class="image-container" data-v-fcb1ffe8><div class="image-bg" data-v-fcb1ffe8></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_fcb1ffe8_lang = "";
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["__scopeId", "data-v-fcb1ffe8"]]);
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const _sfc_main$1l = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1v, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-33b7a51e${_scopeId}>`);
            if (typeof _ctx.icon === "object" && _ctx.icon.wrap) {
              _push2(`<div class="icon" data-v-33b7a51e${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-33b7a51e${_scopeId}>${_ctx.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-33b7a51e${_scopeId}>${_ctx.title}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-33b7a51e${_scopeId}>${_ctx.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-33b7a51e${_scopeId}><p class="link-text-value" data-v-33b7a51e${_scopeId}>${ssrInterpolate(_ctx.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon"
                }, [
                  createVNode(VPImage, {
                    image: _ctx.icon,
                    alt: _ctx.icon.alt,
                    height: _ctx.icon.height || 48,
                    width: _ctx.icon.width || 48
                  }, null, 8, ["image", "alt", "height", "width"])
                ])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 1,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height || 48,
                  width: _ctx.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString$1(_ctx.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_33b7a51e_lang = "";
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["__scopeId", "data-v-33b7a51e"]]);
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length2 = props.features.length;
      if (!length2) {
        return;
      } else if (length2 === 2) {
        return "grid-2";
      } else if (length2 === 3) {
        return "grid-3";
      } else if (length2 % 3 === 0) {
        return "grid-6";
      } else if (length2 > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-a93f4e6a><div class="container" data-v-a93f4e6a><div class="items" data-v-a93f4e6a><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-a93f4e6a>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_a93f4e6a_lang = "";
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-a93f4e6a"]]);
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-770580a0>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1m, null, {
        "home-hero-info": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1i, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_770580a0_lang = "";
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-770580a0"]]);
const _sfc_main$1g = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-4a0612c0>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_4a0612c0_lang = "";
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-4a0612c0"]]);
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-da73407f><div class="container" data-v-da73407f>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-da73407f>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-da73407f>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_da73407f_lang = "";
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-da73407f"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    ref();
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" }
      }, _attrs))} data-v-cffc4115>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-cffc4115>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-cffc4115>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-cffc4115><div class="header" data-v-cffc4115><a class="top-link" href="#" data-v-cffc4115>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-cffc4115>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_cffc4115_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-cffc4115"]]);
const _sfc_main$1c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { y } = useWindowScroll();
    const headers = shallowRef([]);
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty2 = computed(() => {
      return headers.value.length === 0 && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        fixed: empty2.value,
        "reached-top": y.value >= navHeight.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!empty2.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-e9b66a70>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-e9b66a70>`);
          _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
          _push(`<span class="menu-text" data-v-e9b66a70>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: headers.value,
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_e9b66a70_lang = "";
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-e9b66a70"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const VPSwitch_vue_vue_type_style_index_0_scoped_54ce4e0d_lang = "";
const _sfc_main$1a = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-54ce4e0d><span class="check" data-v-54ce4e0d>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-54ce4e0d>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-54ce4e0d"]]);
const _sfc_main$19 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$18 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark: isDark2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark2.value = !isDark2.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: "toggle dark mode",
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark2),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_5a6bcb61_lang = "";
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-5a6bcb61"]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-1b1ed3c8>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_1b1ed3c8_lang = "";
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-1b1ed3c8"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser$1) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b, _c;
      if (el === options.el.value || ((_a2 = options.el.value) == null ? void 0 : _a2.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$15 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$14 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-2136d464>`);
      _push(ssrRenderComponent(_sfc_main$1v, {
        class: { active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString$1(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_2136d464_lang = "";
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-2136d464"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-71650531>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-71650531>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_71650531_lang = "";
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-71650531"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-378bfd55>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-378bfd55><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_378bfd55_lang = "";
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-378bfd55"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-337a7712><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-337a7712>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-337a7712>`);
        if (_ctx.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-337a7712>${_ctx.button}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-337a7712>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_337a7712_lang = "";
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-337a7712"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
  x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg2 = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-9c3581fb>${svg2.value}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_9c3581fb_lang = "";
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-9c3581fb"]]);
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-448a3a88><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_448a3a88_lang = "";
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-448a3a88"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-afc1c55d${_scopeId}><p class="trans-title" data-v-afc1c55d${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance) {
                _push2(`<div class="group" data-v-afc1c55d${_scopeId}><div class="item appearance" data-v-afc1c55d${_scopeId}><p class="label" data-v-afc1c55d${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-afc1c55d${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-afc1c55d${_scopeId}><div class="item social-links" data-v-afc1c55d${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString$1(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString$1(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_afc1c55d_lang = "";
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-afc1c55d"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-90059cac><span class="container" data-v-90059cac><span class="top" data-v-90059cac></span><span class="middle" data-v-90059cac></span><span class="bottom" data-v-90059cac></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_90059cac_lang = "";
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-90059cac"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1v, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-7490aa2e${_scopeId}>${_ctx.item.text}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_7490aa2e_lang = "";
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-7490aa2e"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      } else {
        return navItem.items.some(isChildActive);
      }
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          ) || childrenActive.value
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-a605cf1d><span id="main-nav-aria-label" class="visually-hidden" data-v-a605cf1d>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$W, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_a605cf1d_lang = "";
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-a605cf1d"]]);
const style$1 = "";
function createTranslate(themeObject, defaultTranslations) {
  const { localeIndex } = useData();
  function translate(key) {
    var _a2, _b;
    const keyPath = key.split(".");
    const isObject2 = themeObject && typeof themeObject === "object";
    const locales = isObject2 && ((_b = (_a2 = themeObject.locales) == null ? void 0 : _a2[localeIndex.value]) == null ? void 0 : _b.translations) || null;
    const translations = isObject2 && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const $t = reactify(createTranslate)(
      toRef$1(() => {
        var _a2;
        return (_a2 = theme2.value.search) == null ? void 0 : _a2.options;
      }),
      defaultTranslations
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref($t)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref($t)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const VPNavBarSearchButton_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => import("./VPLocalSearchBox.caa7b83f.js"));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load2() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local";
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$U, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a2 = unref(theme2).search) == null ? void 0 : _a2.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$U, { onClick: load2 }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_09c8bb6b_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-09c8bb6b"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-7dca9515><a class="title"${ssrRenderAttr("href", unref(theme2).logoLink ?? unref(normalizeLink$1)(unref(currentLang).link))} data-v-7dca9515>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_7dca9515_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-7dca9515"]]);
const _sfc_main$Q = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-5de90e3c${_scopeId}><p class="title" data-v-5de90e3c${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString$1(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_5de90e3c_lang = "";
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-5de90e3c"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        top: frontmatter.value.layout === "home" && y.value === 0
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-4a21b558><div class="container" data-v-4a21b558><div class="title" data-v-4a21b558>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-4a21b558><div class="curtain" data-v-4a21b558></div><div class="content-body" data-v-4a21b558>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$T, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_4a21b558_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-4a21b558"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-5fac6000><p class="text" data-v-5fac6000>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_5fac6000_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-5fac6000"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1v, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString$1(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_0198ba23_lang = "";
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-0198ba23"]]);
const _sfc_main$L = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1v, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString$1(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_15ca39f9_lang = "";
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-15ca39f9"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-03841137>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-03841137>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_03841137_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-03841137"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-99e191f4><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-99e191f4><span class="button-text" data-v-99e191f4>${ssrInterpolate(_ctx.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-99e191f4><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-99e191f4>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-99e191f4>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_99e191f4_lang = "";
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-99e191f4"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-d8fe67e6><button class="title" data-v-d8fe67e6>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-d8fe67e6><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-d8fe67e6>`);
          _push(ssrRenderComponent(_sfc_main$1v, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_d8fe67e6_lang = "";
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-d8fe67e6"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser$1 ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-b4cac81d><div class="container" data-v-b4cac81d>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$H, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$G, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_b4cac81d_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-b4cac81d"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser$1) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-8457170b>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_8457170b_lang = "";
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-8457170b"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-bef6ed63${_scopeId}><div class="indicator" data-v-bef6ed63${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$1v, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-bef6ed63${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-bef6ed63${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(
                _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
                true
              ), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$1v, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 32)) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPSidebarItem_vue_vue_type_style_index_0_scoped_bef6ed63_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-bef6ed63"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser$1 ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a2;
        if (props.open) {
          isLocked.value = true;
          (_a2 = navEl.value) == null ? void 0 : _a2.focus();
        } else
          isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-aedc61fa><div class="curtain" data-v-aedc61fa></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-aedc61fa><span class="visually-hidden" id="sidebar-aria-label" data-v-aedc61fa> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-aedc61fa>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_aedc61fa_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-aedc61fa"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-5a71e30f></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-5a71e30f> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_5a71e30f_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-5a71e30f"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-96f6ae70>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_96f6ae70_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-96f6ae70"]]);
const _sfc_main$y = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$2]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [_ctx.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: { default: "normal" },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index2) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$x, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: { default: "Become a sponsor" },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-dadad0a4><div class="container" data-v-dadad0a4><div class="header" data-v-dadad0a4><div class="love" data-v-dadad0a4>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-dadad0a4>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-dadad0a4>`);
      _push(ssrRenderComponent(_sfc_main$w, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-dadad0a4>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText,
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_dadad0a4_lang = "";
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$w, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_a4cd664f_lang = "";
const _sfc_main$t = {};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_ab692826_lang = "";
const _sfc_main$s = {};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_6041dce4_lang = "";
const _sfc_main$r = {};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size]]
      }, _attrs))} data-v-b0388a7d><div class="profile" data-v-b0388a7d><figure class="avatar" data-v-b0388a7d><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-b0388a7d></figure><div class="data" data-v-b0388a7d><h1 class="name" data-v-b0388a7d>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-b0388a7d>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-b0388a7d>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-b0388a7d> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$1v, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-b0388a7d>${_ctx.member.desc}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-b0388a7d>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-b0388a7d>`);
        _push(ssrRenderComponent(_sfc_main$1v, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_b0388a7d_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-b0388a7d"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-5cd8c94a><div class="container" data-v-5cd8c94a><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-5cd8c94a>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_5cd8c94a_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-rc.24_@algolia+client-search@4.22.1_axios@0.27.2_sass@1.70.0_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
const useStabilizeScrollPosition = (targetEle) => {
  if (typeof document === "undefined") {
    const mock = (f) => async (...args) => f(...args);
    return { stabilizeScrollPosition: mock };
  }
  const scrollableEleVal = document.documentElement;
  const stabilizeScrollPosition = (func) => async (...args) => {
    const result = func(...args);
    const eleVal = targetEle.value;
    if (!eleVal)
      return result;
    const offset = eleVal.offsetTop - scrollableEleVal.scrollTop;
    await nextTick();
    scrollableEleVal.scrollTop = eleVal.offsetTop - offset;
    return result;
  };
  return { stabilizeScrollPosition };
};
const injectionKey = Symbol();
const ls = typeof localStorage !== "undefined" ? localStorage : null;
const localStorageKey = "vitepress:tabsSharedState";
const getLocalStorageValue = () => {
  const rawValue = ls == null ? void 0 : ls.getItem(localStorageKey);
  if (rawValue) {
    try {
      return JSON.parse(rawValue);
    } catch {
    }
  }
  return {};
};
const setLocalStorageValue = (v) => {
  if (!ls)
    return;
  ls.setItem(localStorageKey, JSON.stringify(v));
};
const provideTabsSharedState = (app) => {
  const state2 = reactive(getLocalStorageValue());
  watch(state2, (newState) => {
    setLocalStorageValue(newState);
  });
  app.provide(injectionKey, state2);
};
const useTabs = (acceptValues, sharedStateKey) => {
  const sharedState = inject(injectionKey);
  if (!sharedState) {
    throw new Error(
      "[vitepress-plugin-tabs] TabsSharedState should be injected"
    );
  }
  const nonSharedState = ref();
  const selected = computed({
    get() {
      const key = sharedStateKey.value;
      const acceptVals = acceptValues.value;
      if (key) {
        const value = sharedState[key];
        if (value && acceptVals.includes(value)) {
          return value;
        }
      } else {
        const nonSharedStateVal = nonSharedState.value;
        if (nonSharedStateVal) {
          return nonSharedStateVal;
        }
      }
      return acceptVals[0];
    },
    set(v) {
      const key = sharedStateKey.value;
      if (key) {
        sharedState[key] = v;
      } else {
        nonSharedState.value = v;
      }
    }
  });
  const select = (newValue) => {
    selected.value = newValue;
  };
  return { selected, select };
};
let id = 0;
const useUid = () => {
  id++;
  return "" + id;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "PluginTabs",
  __ssrInlineRender: true,
  props: {
    tabLabels: {},
    sharedStateKey: {}
  },
  setup(__props) {
    const props = __props;
    const { selected, select } = useTabs(
      toRef$1(props, "tabLabels"),
      toRef$1(props, "sharedStateKey")
    );
    const tablist = ref();
    const { stabilizeScrollPosition } = useStabilizeScrollPosition(tablist);
    stabilizeScrollPosition(select);
    ref([]);
    const uid = useUid();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "plugin-tabs" }, _attrs))}><div class="plugin-tabs--tab-list" role="tablist"><!--[-->`);
      ssrRenderList(_ctx.tabLabels, (tabLabel) => {
        _push(`<button${ssrRenderAttr("id", `tab-${tabLabel}-${unref(uid)}`)} role="tab" class="plugin-tabs--tab"${ssrRenderAttr("aria-selected", tabLabel === unref(selected))}${ssrRenderAttr("aria-controls", `panel-${tabLabel}-${unref(uid)}`)}${ssrRenderAttr("tabindex", tabLabel === unref(selected) ? 0 : -1)}>${ssrInterpolate(tabLabel)}</button>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(_ctx.tabLabels, (tabLabel) => {
        _push(`<!--[-->`);
        if (tabLabel === unref(selected)) {
          _push(`<div${ssrRenderAttr("id", `panel-${tabLabel}-${unref(uid)}`)} class="plugin-tabs--content" role="tabpanel" tabindex="0"${ssrRenderAttr("aria-labelledby", `tab-${tabLabel}-${unref(uid)}`)}>`);
          ssrRenderSlot(_ctx.$slots, tabLabel, {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const PluginTabs_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress-plugin-tabs@0.2.0_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/vitepress-plugin-tabs/src/client/PluginTabs.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const enhanceAppWithTabs = (app) => {
  provideTabsSharedState(app);
  app.component("PluginTabs", _sfc_main$o);
};
var _a;
const isClient = typeof window !== "undefined";
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive2 = ref(true);
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function resolveRef(r) {
  return typeof r === "function" ? computed(r) : ref(r);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter2
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter2);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive: isActive2 };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners2;
  let options;
  if (isString$1(args[0]) || Array.isArray(args[0])) {
    [events, listeners2, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners2, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners2))
    listeners2 = [listeners2];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners2.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
function useBrowserLocation({ window: window2 = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state22, length: length2 } = (window2 == null ? void 0 : window2.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window2 == null ? void 0 : window2.location) || {};
    return {
      trigger,
      state: state22,
      length: length2,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state2 = ref(buildState("load"));
  if (window2) {
    useEventListener(window2, "popstate", () => state2.value = buildState("popstate"), { passive: true });
    useEventListener(window2, "hashchange", () => state2.value = buildState("hashchange"), { passive: true });
  }
  return state2;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$m.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b)) {
      if (__propIsEnum$m.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type2 = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type2];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction$1(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type2 === "object" && !Array.isArray(value))
        return __spreadValues$k(__spreadValues$k({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector: selector2 = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto
  } = options;
  const modes = __spreadValues$j({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window: window2 });
  const preferredMode = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? ref(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state2 = computed({
    get() {
      return store.value === "auto" && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector22, attribute2, value) => {
    const el = window2 == null ? void 0 : window2.document.querySelector(selector22);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a2;
    const resolvedMode = mode === "auto" ? preferredMode.value : mode;
    updateHTMLAttrs(selector2, attribute, (_a2 = modes[resolvedMode]) != null ? _a2 : resolvedMode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state2, onChanged, { flush: "post", immediate: true });
  if (emitAuto)
    watch(preferredMode, () => onChanged(state2.value), { flush: "post" });
  tryOnMounted(() => onChanged(state2.value));
  return state2;
}
var __defProp$i = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$i({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a2;
      if (options.onChanged)
        (_a2 = options.onChanged) == null ? void 0 : _a2.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window: window2 });
  const isDark2 = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark2;
}
function useElementVisibility(element, { window: window2 = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window2)
      return;
    const document2 = window2.document;
    const el = unrefElement(element);
    if (!el) {
      elementIsVisible.value = false;
    } else {
      const rect = el.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window2.innerHeight || document2.documentElement.clientHeight) && rect.left <= (window2.innerWidth || document2.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  watch(() => unrefElement(element), () => testBounding(), { immediate: true, flush: "post" });
  if (window2) {
    useEventListener(scrollTarget || window2, "scroll", testBounding, {
      capture: false,
      passive: true
    });
  }
  return elementIsVisible;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation)
    useEventListener("orientationchange", update, { passive: true });
  return { width, height };
}
const configSymbol = Symbol("theme-config");
const activeTagSymbol = Symbol("active-tag");
const currentPageNum = Symbol("home-page-num");
const userWorks = Symbol("user-works");
const homeFooter = Symbol("home-footer");
function withConfigProvider(App) {
  return defineComponent({
    name: "ConfigProvider",
    setup(_2, { slots }) {
      var _a2, _b, _c;
      const { theme: theme2 } = useData$1();
      const config2 = computed(() => resolveConfig(theme2.value));
      provide(homeFooter, (_a2 = config2.value.blog) == null ? void 0 : _a2.footer);
      provide(configSymbol, config2);
      provide(
        userWorks,
        ref(
          ((_b = config2.value.blog) == null ? void 0 : _b.works) || {
            title: "",
            description: "",
            list: []
          }
        )
      );
      const activeTag = ref({
        label: "",
        type: ""
      });
      provide(activeTagSymbol, activeTag);
      const pageNum = ref(1);
      provide(currentPageNum, pageNum);
      const mode = useColorMode({
        attribute: "theme",
        modes: {
          // 内置的颜色主题
          "vp-default": "vp-default",
          "vp-green": "vp-green",
          "vp-yellow": "vp-yellow",
          "vp-red": "vp-red",
          "el-blue": "el-blue",
          "el-yellow": "el-yellow",
          "el-green": "el-green",
          "el-red": "el-red"
        }
      });
      mode.value = ((_c = config2.value.blog) == null ? void 0 : _c.themeColor) ?? "vp-default";
      return () => h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: inject(configSymbol).value
  };
}
function useBlogConfig() {
  return inject(configSymbol).value.blog;
}
function useBlogThemeMode() {
  var _a2, _b;
  return ((_b = (_a2 = inject(configSymbol).value) == null ? void 0 : _a2.blog) == null ? void 0 : _b.blog) ?? true;
}
function useGiscusConfig() {
  var _a2, _b;
  const blogConfig = useConfig();
  return (_b = (_a2 = blogConfig.config) == null ? void 0 : _a2.blog) == null ? void 0 : _b.comment;
}
function useArticles() {
  const blogConfig = useConfig();
  const articles = computed(() => {
    var _a2, _b;
    return ((_b = (_a2 = blogConfig.config) == null ? void 0 : _a2.blog) == null ? void 0 : _b.pagesData) || [];
  });
  return articles;
}
function useActiveTag() {
  return inject(activeTagSymbol);
}
function useCurrentPageNum() {
  return inject(currentPageNum);
}
function useCurrentArticle() {
  const blogConfig = useConfig();
  const route = useRoute();
  const docs = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = blogConfig.config) == null ? void 0 : _a2.blog) == null ? void 0 : _b.pagesData;
  });
  const currentArticle = computed(() => {
    var _a2;
    const currentPath = route.path.replace(/.html$/, "");
    const okPaths = [currentPath, decodeURIComponent(currentPath)];
    if (currentPath.endsWith("/")) {
      okPaths.push(
        ...[`${currentPath}index`, `${decodeURIComponent(currentPath)}index`]
      );
    }
    return (_a2 = docs.value) == null ? void 0 : _a2.find((v) => okPaths.includes(withBase(v.route)));
  });
  return currentArticle;
}
function useUserWorks() {
  return inject(userWorks);
}
function resolveConfig(config2) {
  var _a2;
  return {
    ...config2,
    blog: {
      ...config2 == null ? void 0 : config2.blog,
      pagesData: ((_a2 = config2 == null ? void 0 : config2.blog) == null ? void 0 : _a2.pagesData) || []
    }
  };
}
function useActiveAnchor() {
  const el = ref(null);
  onMounted(() => {
    const { hash } = window.location;
    if (hash) {
      el.value = document.querySelector(decodeURIComponent(hash));
    }
  });
  return el;
}
function useAutoUpdateAnchor() {
  const currentAnchor = reactive({
    id: "",
    top: -1
  });
  const calculateCurrentAnchor = () => {
    const anchors = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (let i = 0; i < anchors.length; i += 1) {
      const anchor = anchors[i];
      const rect = anchor.getBoundingClientRect();
      if (rect.top <= 100 && anchor.id !== currentAnchor.id) {
        currentAnchor.id = anchor.id;
        currentAnchor.top = rect.top;
      }
    }
  };
  const onScroll = () => {
    calculateCurrentAnchor();
  };
  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  return currentAnchor;
}
function useHomeFooterConfig() {
  return inject(homeFooter);
}
function formatDate(d2, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!(d2 instanceof Date)) {
    d2 = new Date(d2);
  }
  const o = {
    "M+": d2.getMonth() + 1,
    // 月份
    "d+": d2.getDate(),
    // 日
    "h+": d2.getHours(),
    // 小时
    "m+": d2.getMinutes(),
    // 分
    "s+": d2.getSeconds(),
    // 秒
    "q+": Math.floor((d2.getMonth() + 3) / 3),
    // 季度
    "S": d2.getMilliseconds()
    // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      `${d2.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
  }
  return fmt;
}
function isCurrentWeek(date, target) {
  const now2 = target || /* @__PURE__ */ new Date();
  const today = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate());
  const oneDay = 1e3 * 60 * 60 * 24;
  const nowWeek = today.getDay();
  const startWeek = today.getTime() - (nowWeek === 0 ? 6 : nowWeek - 1) * oneDay;
  return +date >= startWeek && +date <= startWeek + 7 * oneDay;
}
function formatShowDate(date) {
  const source = date ? +new Date(date) : +/* @__PURE__ */ new Date();
  const now2 = +/* @__PURE__ */ new Date();
  const diff = now2 - source;
  const oneSeconds = 1e3;
  const oneMinute = oneSeconds * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  if (diff < oneMinute) {
    return `${Math.floor(diff / oneSeconds)}秒前`;
  }
  if (diff < oneHour) {
    return `${Math.floor(diff / oneMinute)}分钟前`;
  }
  if (diff < oneDay) {
    return `${Math.floor(diff / oneHour)}小时前`;
  }
  if (diff < oneWeek) {
    return `${Math.floor(diff / oneDay)}天前`;
  }
  return formatDate(new Date(date), "yyyy-MM-dd");
}
const pattern = /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g;
function countWord(data) {
  const m = data.match(pattern);
  let count = 0;
  if (!m) {
    return 0;
  }
  for (let i = 0; i < m.length; i += 1) {
    if (m[i].charCodeAt(0) >= 19968) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}
function getGithubUpdateTime(url) {
  const match = url.match(/github.com\/(.+)/);
  if (!(match == null ? void 0 : match[1])) {
    return Promise.reject(new Error("Github地址格式错误"));
  }
  const [owner, repo] = match[1].split("/");
  return fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) => res.json()).then((res) => {
    return res.updated_at;
  });
}
function getGithubDirUpdateTime(owner, repo, dir, branch) {
  let baseUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;
  if (branch) {
    baseUrl += `/${branch}`;
  }
  if (dir) {
    baseUrl += `?path=${dir}`;
  }
  return fetch(baseUrl).then((res) => res.json()).then((res) => {
    return [res].flat()[0].commit.committer.date;
  });
}
function getImageUrl(image, isDarkMode) {
  if (typeof image === "string") {
    return image;
  }
  if ("src" in image) {
    return image.src;
  }
  if ("light" in image && "dark" in image) {
    return isDarkMode ? image.dark : image.light;
  }
  return "";
}
const BlogAuthor_vue_vue_type_style_index_0_scoped_f5ef5e62_lang = "";
const _sfc_main$n = {
  __name: "BlogAuthor",
  __ssrInlineRender: true,
  setup(__props) {
    const { home } = useBlogConfig();
    const { frontmatter, site } = useData$1();
    const author2 = computed(
      () => {
        var _a2, _b, _c, _d;
        return frontmatter.value.author ?? ((_b = (_a2 = frontmatter.value) == null ? void 0 : _a2.blog) == null ? void 0 : _b.author) ?? (home == null ? void 0 : home.author) ?? ((_d = (_c = site.value.themeConfig) == null ? void 0 : _c.blog) == null ? void 0 : _d.author);
      }
    );
    const logo = computed(
      () => {
        var _a2, _b;
        return frontmatter.value.logo ?? ((_b = (_a2 = frontmatter.value) == null ? void 0 : _a2.blog) == null ? void 0 : _b.logo) ?? (home == null ? void 0 : home.logo) ?? site.value.themeConfig.logo;
      }
    );
    const show = computed(() => author2.value || logo.value);
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-author" }, _attrs))} data-v-f5ef5e62>`);
        if (logo.value) {
          _push(`<img${ssrRenderAttr("src", logo.value)} alt="avatar" data-v-f5ef5e62>`);
        } else {
          _push(`<!---->`);
        }
        if (author2.value) {
          _push(`<p data-v-f5ef5e62>${ssrInterpolate(author2.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogAuthor.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const BlogAuthor = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-f5ef5e62"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const { home } = useBlogConfig();
    const { frontmatter } = useData$1();
    const avatarMode = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = frontmatter.value) == null ? void 0 : _a2.blog) == null ? void 0 : _b.avatarMode) || (home == null ? void 0 : home.avatarMode) || "card";
    });
    const showCardAvatar = computed(() => avatarMode.value === "card");
    const showSplitCard = computed(() => avatarMode.value === "split");
    const docs = useArticles();
    const notHiddenArticles = computed(() => {
      return docs.value.filter((v) => {
        var _a2;
        return ((_a2 = v.meta) == null ? void 0 : _a2.publish) !== false;
      });
    });
    const nowMonth = (/* @__PURE__ */ new Date()).getMonth();
    const nowYear = (/* @__PURE__ */ new Date()).getFullYear();
    const currentMonth = computed(() => {
      return notHiddenArticles.value.filter((v) => {
        var _a2;
        const pubDate = new Date((_a2 = v.meta) == null ? void 0 : _a2.date);
        return (pubDate == null ? void 0 : pubDate.getMonth()) === nowMonth && pubDate.getFullYear() === nowYear;
      });
    });
    const currentWeek = computed(() => {
      return notHiddenArticles.value.filter((v) => {
        var _a2;
        const pubDate = new Date((_a2 = v.meta) == null ? void 0 : _a2.date);
        return isCurrentWeek(pubDate);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      _push(`<!--[-->`);
      if (showSplitCard.value) {
        _push(ssrRenderComponent(BlogAuthor, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card" data-v-142fe005>`);
      if (showCardAvatar.value) {
        _push(ssrRenderComponent(BlogAuthor, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="overview-data" data-v-142fe005><div class="overview-item" data-v-142fe005><span class="count" data-v-142fe005>${ssrInterpolate(notHiddenArticles.value.length)}</span><span class="label" data-v-142fe005>博客文章</span></div><div class="split" data-v-142fe005></div><div class="overview-item" data-v-142fe005><span class="count" data-v-142fe005>+${ssrInterpolate((_a2 = currentMonth.value) == null ? void 0 : _a2.length)}</span><span class="label" data-v-142fe005>本月更新</span></div><div class="split" data-v-142fe005></div><div class="overview-item" data-v-142fe005><span class="count" data-v-142fe005>+${ssrInterpolate((_b = currentWeek.value) == null ? void 0 : _b.length)}</span><span class="label" data-v-142fe005>本周更新</span></div></div></div><!--]-->`);
    };
  }
});
const BlogHomeOverview_vue_vue_type_style_index_0_scoped_142fe005_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogHomeOverview.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const BlogHomeOverview = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-142fe005"]]);
const fireSVG = `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
    <stop offset=".314" stop-color="#FF9800"/>
    <stop offset=".662" stop-color="#FF6D00"/>
    <stop offset=".972" stop-color="#F44336"/>
</radialGradient>
<path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"/>
<radialGradient id="notoFire1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse">
    <stop offset=".214" stop-color="#FFF176"/>
    <stop offset=".328" stop-color="#FFF27D"/>
    <stop offset=".487" stop-color="#FFF48F"/>
    <stop offset=".672" stop-color="#FFF7AD"/>
    <stop offset=".793" stop-color="#FFF9C4"/>
    <stop offset=".822" stop-color="#FFF8BD" stop-opacity=".804"/>
    <stop offset=".863" stop-color="#FFF6AB" stop-opacity=".529"/>
    <stop offset=".91" stop-color="#FFF38D" stop-opacity=".209"/>
    <stop offset=".941" stop-color="#FFF176" stop-opacity="0"/>
</radialGradient>
<path fill="url(#notoFire1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"/>
</svg>`;
const recommendSVG = `<svg width="512" height="512" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<radialGradient id="notoFaceWithMonocle0" cx="63.6" cy="-2088.9" r="56.96" gradientTransform="matrix(1 0 0 -1 0 -2026)" gradientUnits="userSpaceOnUse">
    <stop offset=".5" stop-color="#FDE030"/>
    <stop offset=".919" stop-color="#F7C02B"/>
    <stop offset="1" stop-color="#F4A223"/>
</radialGradient>
<path fill="url(#notoFaceWithMonocle0)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z"/>
<path fill="#EB8F00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37.04-7.35-48.18-22.94c10.76 17.66 30.99 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z"/>
<path fill="#422B0D" d="M74.3 24.5c.9-.8 1.8-1.5 2.8-2.2s2.1-1.2 3.1-1.8c2.2-1 4.6-2 7.5-2.1c.7-.1 1.4.1 2.2.1c.7 0 1.5.3 2.2.5c.2.1.4.1.5.2l.5.3l1 .5c.6.4 1.2.9 1.8 1.4c1.1 1 1.8 2.3 2.4 3.5c.3.6.5 1.2.7 1.8c.2.6.3 1.2.4 1.6l.1.3c.2 1.2-.6 2.4-1.8 2.6c-1 .2-1.9-.3-2.4-1.1c-.3-.6-.6-1.1-.8-1.5c-.2-.4-.5-.8-.7-1.2c-.5-.7-1.1-1.3-1.7-1.8c-.1-.1-.3-.2-.5-.3c-.2-.1-.3-.2-.4-.3c-.2-.1-.3-.1-.5-.2l-.2-.1h-.3c-.7-.2-1.4-.3-2.2-.2c-1.6 0-3.5.6-5.4 1.3c-.9.4-1.9.8-2.8 1.2c-.9.5-1.9.9-2.9 1.3l-.2.1c-1.2.5-2.5-.1-2.9-1.2c-.5-1-.2-2.1.5-2.7zm-28.7 14c-.8.2-1.3.3-2 .3c-.6 0-1.3.1-1.9 0c-1.3 0-2.6-.2-3.8-.6c-2-.5-4-.8-5.7-.8c-.8 0-1.6.1-2.2.3s-1.1.5-1.6 1c-1 1-2 2.8-3 4.6c-.6 1.1-2 1.5-3.1.9c-.9-.5-1.3-1.5-1.2-2.4c.2-1.1.5-2.3.9-3.5c.5-1.2 1-2.4 2-3.6c1-1.2 2.3-2.2 3.8-2.7s2.9-.7 4.3-.7c2.7.1 5 .8 7.2 1.6c.9.3 1.8.6 2.7.8c.5.1.9.2 1.4.2c.4 0 1 .1 1.3.1h.4c1.2 0 2.2 1.1 2.1 2.3c.1 1.2-.6 2-1.6 2.2zM44 91.3c1.8-2 6.6-4.3 13.3-4.2c8.9.2 13.7 4.2 13.7 4.2c2.9 2.4 1.6 6.1-1.5 5.8c-5-.6-4.7-1.5-13.7-1.7c-6.5-.1-9.6.9-9.9.9c-1.8.1-2.5-.6-2.8-1.8c-.3-1 0-2.3.9-3.2zm38.3-47.5c4.4 0 8.4 3.7 8.4 9.9s-4 9.9-8.4 9.9s-8.4-3.7-8.4-9.9s4-9.9 8.4-9.9zm-45.1 1.7c-4.2 0-8 3.5-8 9.4s3.8 9.4 8 9.4s8-3.5 8-9.4s-3.8-9.4-8-9.4z"/>
<path fill="#896024" d="M81.37 48.35c-1.03-.72-2.58-.49-3.58.95c-1 1.45-.67 2.97.36 3.69c1.03.72 2.58.49 3.58-.95c1.01-1.45.67-2.98-.36-3.69z"/>
<path fill="#404040" d="M106.5 49.9h-5.6v9h5.6c2.7 0 5.4-1.7 5.4-4.3v-.4c0-2.7-2.7-4.3-5.4-4.3zm-.5 7.7c-1.9 0-3.4-1.5-3.4-3.3s1.5-3.3 3.4-3.3s3.4 1.5 3.4 3.3s-1.5 3.3-3.4 3.3zm.1 13.2c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .2-.2.5-.5.5zm0 7.6c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5V81c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5z"/>
<path fill="#404040" d="M106.1 62.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .2-.2.5-.5.5z"/>
<circle cx="106.1" cy="64.1" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="71.8" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="79.4" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="87.1" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="94.7" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="102.4" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="110" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="117.7" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="79.6" cy="53.7" r="20.6" fill="#CCC" fill-opacity=".5" stroke="#404040" stroke-miterlimit="10" stroke-width="3.5"/>
<path fill="#FFF" d="M94.8 52.5c-.4-3.8-2.1-7.3-4.9-9.7s-6.4-3.7-10-3.7c-3.7 0-7.3 1.2-10.1 3.5s-4.6 5.8-4.9 9.6c0 .3-.3.5-.5.4c-.2 0-.4-.2-.4-.5c-.1-2 .3-4.1 1.1-6c.8-1.9 2-3.6 3.5-5.1c3-2.9 7.3-4.3 11.4-4.3c4.2 0 8.3 1.6 11.3 4.5c1.5 1.5 2.7 3.2 3.5 5.1c.8 1.9 1.1 4 1 6c0 .3-.2.5-.5.5c-.3.1-.5-.1-.5-.3z"/>
<path fill="#896024" d="M37.01 49.35c-1.03-.72-2.58-.49-3.58.95s-.67 2.97.36 3.69c1.03.72 2.58.49 3.58-.95c1.01-1.45.68-2.98-.36-3.69z"/>
</svg>`;
const themeSVG = `<svg width="128" height="128" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title>主题</title>
<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 0 0 2.5-2.5c0-.61-.23-1.2-.64-1.67a.528.528 0 0 1-.13-.33c0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6c0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13S5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5z"/>
</svg>`;
const icpSVG = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-2f084f89=""><title data-v-2f084f89="">ICP备案号</title><path d="M778.24 163.84c-76.8-40.96-165.888-61.44-269.312-61.44s-192.512 20.48-269.312 61.44h-133.12l23.552 337.92c8.192 113.664 67.584 217.088 162.816 280.576l215.04 144.384 215.04-144.384c96.256-63.488 155.648-166.912 163.84-280.576l23.552-337.92H778.24z m47.104 333.824c-7.168 94.208-56.32 181.248-135.168 233.472l-181.248 120.832L327.68 731.136c-78.848-53.248-129.024-139.264-135.168-233.472L173.056 225.28h136.192v-26.624c58.368-23.552 124.928-34.816 199.68-34.816s141.312 12.288 199.68 34.816V225.28H844.8l-19.456 272.384z" data-v-2f084f89=""></path><path d="M685.056 328.704v-46.08H455.68c2.048-4.096 6.144-9.216 11.264-15.36 5.12-7.168 9.216-12.288 11.264-15.36L419.84 240.64c-31.744 46.08-75.776 87.04-133.12 123.904 4.096 4.096 10.24 11.264 18.432 21.504l17.408 17.408c23.552-15.36 45.056-31.744 63.488-50.176 26.624 25.6 49.152 43.008 67.584 51.2-46.08 15.36-104.448 27.648-175.104 35.84 2.048 5.12 6.144 13.312 9.216 24.576 4.096 11.264 6.144 19.456 7.168 24.576l39.936-7.168v218.112H389.12V680.96h238.592v19.456h54.272V481.28H348.16c60.416-12.288 114.688-27.648 163.84-46.08 49.152 19.456 118.784 34.816 210.944 46.08 5.12-17.408 10.24-34.816 17.408-51.2-62.464-4.096-116.736-12.288-161.792-24.576 38.912-20.48 74.752-46.08 106.496-76.8z m-150.528 194.56h94.208v41.984h-94.208v-41.984z m0 78.848h94.208v41.984h-94.208v-41.984z m-144.384-78.848h94.208v41.984H390.144v-41.984z m0 78.848h94.208v41.984H390.144v-41.984zM424.96 326.656h182.272c-26.624 22.528-57.344 41.984-94.208 57.344-31.744-15.36-61.44-34.816-88.064-57.344z" data-v-2f084f89=""></path></svg>';
const copyrightSVG = '<svg t="1695543755857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="89399" width="200" height="200"><path d="M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m234.268 693.506c-3.184 3.734-79.552 91.462-219.702 91.462-169.384 0-288.968-126.52-288.968-291.134 0-162.606 124.008-286.802 287.524-286.802 133.914 0 203.93 74.63 206.844 77.808a24 24 0 0 1 2.476 29.246l-44.76 69.31c-8.098 12.534-25.548 14.702-36.468 4.59-0.466-0.428-53.058-47.76-123.76-47.76-92.232 0-147.832 67.15-147.832 152.164 0 79.204 51.028 159.384 148.554 159.384 77.394 0 130.56-56.676 131.088-57.25 10.264-11.13 28.118-10.066 37.016 2.106l49.094 67.144a24.002 24.002 0 0 1-1.106 29.732z" p-id="89400"></path></svg>';
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "BlogHotArticle",
  __ssrInlineRender: true,
  setup(__props) {
    const { hotArticle } = useBlogConfig();
    const title = computed(() => (hotArticle == null ? void 0 : hotArticle.title) || `<span class="svg-icon">${fireSVG}</span> 精选文章`);
    const nextText = computed(() => (hotArticle == null ? void 0 : hotArticle.nextText) || "换一组");
    const pageSize = computed(() => (hotArticle == null ? void 0 : hotArticle.pageSize) || 9);
    const empty2 = computed(() => (hotArticle == null ? void 0 : hotArticle.empty) ?? "暂无精选内容");
    const docs = useArticles();
    const recommendList = computed(() => {
      const data = docs.value.filter((v) => v.meta.sticky);
      data.sort((a, b) => b.meta.sticky - a.meta.sticky);
      return [...data];
    });
    const currentPage = ref(1);
    function changePage() {
      const newIdx = currentPage.value % Math.ceil(recommendList.value.length / pageSize.value);
      currentPage.value = newIdx + 1;
    }
    const currentWikiData = computed(() => {
      const startIdx = (currentPage.value - 1) * pageSize.value;
      const endIdx = startIdx + pageSize.value;
      return recommendList.value.slice(startIdx, endIdx);
    });
    const showChangeBtn = computed(() => {
      return recommendList.value.length > pageSize.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (recommendList.value.length || empty2.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "card recommend",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-0f10fd2a><div class="card-header" data-v-0f10fd2a><span class="title" data-v-0f10fd2a>${title.value}</span>`);
        if (showChangeBtn.value) {
          _push(ssrRenderComponent(unref(ElButton), {
            size: "small",
            type: "primary",
            text: "",
            onClick: changePage
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(nextText.value)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(nextText.value), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (currentWikiData.value.length) {
          _push(`<ol class="recommend-container" data-v-0f10fd2a><!--[-->`);
          ssrRenderList(currentWikiData.value, (v, idx) => {
            _push(`<li data-v-0f10fd2a><i class="num" data-v-0f10fd2a>${ssrInterpolate(idx + 1)}</i><div class="des" data-v-0f10fd2a>`);
            _push(ssrRenderComponent(unref(ElLink), {
              type: "info",
              class: "title",
              href: unref(withBase)(v.route)
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(v.meta.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString$1(v.meta.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="suffix" data-v-0f10fd2a><span class="tag" data-v-0f10fd2a>${ssrInterpolate(unref(formatShowDate)(v.meta.date))}</span></div></div></li>`);
          });
          _push(`<!--]--></ol>`);
        } else {
          _push(`<div class="empty-text" data-v-0f10fd2a>${ssrInterpolate(empty2.value)}</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogHotArticle_vue_vue_type_style_index_0_scoped_0f10fd2a_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogHotArticle.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const BlogHotArticle = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-0f10fd2a"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeTags",
  __ssrInlineRender: true,
  setup(__props) {
    const docs = useArticles();
    const tags = computed(() => {
      return [...new Set(docs.value.map((v) => v.meta.tag || []).flat(3))];
    });
    const activeTag = useActiveTag();
    const isDark2 = useDark({
      storageKey: "vitepress-theme-appearance"
    });
    const colorMode = computed(() => isDark2.value ? "light" : "dark");
    const tagType = ["", "info", "success", "warning", "danger"];
    const currentPage = useCurrentPageNum();
    const router = useRouter();
    function handleCloseTag() {
      activeTag.value.label = "";
      activeTag.value.type = "";
      currentPage.value = 1;
      router.go(`${window.location.origin}${router.route.path}`);
    }
    const location2 = useBrowserLocation();
    function handleTagClick(tag, type2) {
      if (tag === activeTag.value.label) {
        handleCloseTag();
        return;
      }
      activeTag.value.type = type2;
      activeTag.value.label = tag;
      currentPage.value = 1;
      router.go(
        `${location2.value.origin}${router.route.path}?tag=${tag}&type=${type2}`
      );
    }
    watch(
      location2,
      () => {
        if (location2.value.href) {
          const url = new URL(location2.value.href);
          activeTag.value.type = url.searchParams.get("type") || "";
          activeTag.value.label = url.searchParams.get("tag") || "";
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (tags.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "card tags",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-fe90307e><div class="card-header" data-v-fe90307e><span class="title svg-icon" data-v-fe90307e><svg t="1695048840129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4290" width="200" height="200" data-v-fe90307e><path d="M810.88 245.888a118.432 118.432 0 1 0 0 236.864 118.432 118.432 0 0 0 0-236.864z m-151.008 118.432a151.008 151.008 0 1 1 302.016 0 151.008 151.008 0 0 1-302.016 0z" fill="#D3D3D3" p-id="4291" data-v-fe90307e></path><path d="M774.08 565.6l61.76-160.64c6.4-16.64 2.56-35.84-10.24-48.64l-151.04-151.04c-12.8-12.8-31.68-16.64-48.64-10.24l-160.64 61.76c-12.16 4.8-23.36 11.84-32.64 21.12l-355.2 355.2c-17.92 17.92-17.92 46.72 0 64.32l256 256c17.92 17.92 46.72 17.92 64.32 0l355.2-355.2c9.28-9.28 16.32-20.16 21.12-32.64z m-159.36-149.12c-22.08-22.08-22.08-57.6 0-79.68 22.08-22.08 57.6-22.08 79.68 0 22.08 22.08 22.08 57.6 0 79.68-22.08 21.76-57.92 21.76-79.68 0z" fill="#FCD53F" p-id="4292" data-v-fe90307e></path><path d="M654.4 320.48c14.4 0 28.8 5.44 39.68 16.64 22.08 22.08 22.08 57.6 0 79.68-10.88 10.88-25.28 16.64-39.68 16.64-14.4 0-28.8-5.44-39.68-16.64-22.08-22.08-22.08-57.6 0-79.68 10.88-11.2 25.28-16.64 39.68-16.64z m0-30.08c-23.04 0-44.8 8.96-61.12 25.28a86.72 86.72 0 0 0 0 122.24c16.32 16.32 38.08 25.28 61.12 25.28s44.8-8.96 61.12-25.28a86.72 86.72 0 0 0 0-122.24c-16.32-16.32-38.08-25.28-61.12-25.28z" fill="#F8312F" p-id="4293" data-v-fe90307e></path><path d="M676.16 348.032c8.992 0 16.288 7.296 16.288 16.288a118.144 118.144 0 0 0 64.288 105.44h0.064c22.24 11.296 47.36 15.264 71.68 11.84a16.288 16.288 0 0 1 4.48 32.32 154.24 154.24 0 0 1-90.848-15.04 150.72 150.72 0 0 1-82.24-134.56c0-8.992 7.296-16.288 16.288-16.288z" fill="#D3D3D3" p-id="4294" data-v-fe90307e></path></svg> 标签</span>`);
        if (unref(activeTag).label) {
          _push(ssrRenderComponent(unref(ElTag), {
            type: unref(activeTag).type,
            effect: colorMode.value,
            closable: "",
            onClose: handleCloseTag
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(activeTag).label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(unref(activeTag).label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul class="tag-list" data-v-fe90307e><!--[-->`);
        ssrRenderList(tags.value, (tag, idx) => {
          _push(`<li data-v-fe90307e>`);
          _push(ssrRenderComponent(unref(ElTag), {
            type: tagType[idx % tagType.length],
            effect: colorMode.value,
            onClick: ($event) => handleTagClick(tag, tagType[idx % tagType.length])
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogHomeTags_vue_vue_type_style_index_0_scoped_fe90307e_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogHomeTags.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const BlogHomeTags = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-fe90307e"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "BlogFriendLink",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark2 = useDark({
      storageKey: "vitepress-theme-appearance"
    });
    const { friend } = useBlogConfig();
    const friendList = computed(() => {
      return friend == null ? void 0 : friend.map((v) => {
        const { avatar, nickname } = v;
        const avatarUrl = getImageUrl(avatar, isDark2.value);
        let alt = nickname;
        if (typeof avatar !== "string") {
          alt = avatar.alt || "";
        }
        return {
          ...v,
          avatar: avatarUrl,
          alt
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      if ((_a2 = friendList.value) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "card friend-wrapper" }, _attrs))} data-v-fc30ac9b><div class="card-header" data-v-fc30ac9b><span class="title svg-icon" data-v-fc30ac9b><svg width="512" height="512" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-v-fc30ac9b><path fill="#EF9645" d="M16.428 30.331a2.31 2.31 0 0 0 3.217-.568a.798.798 0 0 0-.197-1.114l-1.85-1.949l4.222 2.955a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-3.596-3.305l5.375 3.763a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-4.766-4.073l5.864 4.105a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089L4.733 11.194l-3.467 5.521c-.389.6-.283 1.413.276 1.891l7.786 6.671c.355.304.724.591 1.107.859l5.993 4.195z" data-v-fc30ac9b></path><path fill="#FFDC5D" d="M29.802 21.752L18.5 13.601l-.059-.08l.053-.08l.053-.053l.854.469c.958.62 3.147 1.536 4.806 1.536c1.135 0 1.815-.425 2.018-1.257a1.409 1.409 0 0 0-1.152-1.622a6.788 6.788 0 0 1-2.801-1.091l-.555-.373c-.624-.421-1.331-.898-1.853-1.206c-.65-.394-1.357-.585-2.163-.585c-1.196 0-2.411.422-3.585.83l-1.266.436a5.18 5.18 0 0 1-1.696.271c-1.544 0-3.055-.586-4.516-1.152l-.147-.058a1.389 1.389 0 0 0-1.674.56L1.35 15.669a1.357 1.357 0 0 0 .257 1.761l7.785 6.672c.352.301.722.588 1.1.852l6.165 4.316a2 2 0 0 0 2.786-.491a.803.803 0 0 0-.196-1.115l-1.833-1.283a.424.424 0 0 1-.082-.618a.422.422 0 0 1 .567-.075l3.979 2.785a1.4 1.4 0 0 0 1.606-2.294l-3.724-2.606a.424.424 0 0 1-.082-.618a.423.423 0 0 1 .567-.075l5.132 3.593a1.4 1.4 0 0 0 1.606-2.294l-4.868-3.407a.42.42 0 0 1-.081-.618a.377.377 0 0 1 .506-.066l5.656 3.959a1.4 1.4 0 0 0 1.606-2.295z" data-v-fc30ac9b></path><path fill="#EF9645" d="M16.536 27.929c-.07.267-.207.498-.389.681l-1.004.996a1.494 1.494 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.494 1.494 0 0 1 1.437-.396a1.502 1.502 0 0 1 1.072 1.831zM5.992 23.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.495 1.495 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.496 1.496 0 0 0 1.673-.31zm5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 23.94a1.5 1.5 0 1 0 2.122 2.118l3.002-2.998zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.489 1.489 0 0 0-1.173.44L9.323 25.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44l2.005-1.996zm16.555-4.137l.627-.542l-6.913-10.85l-12.27 1.985a1.507 1.507 0 0 0-1.235 1.737c.658 2.695 6.003.693 8.355-.601l11.436 8.271z" data-v-fc30ac9b></path><path fill="#FFCC4D" d="M16.536 26.929c-.07.267-.207.498-.389.681l-1.004.996a1.494 1.494 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.494 1.494 0 0 1 1.437-.396a1.502 1.502 0 0 1 1.072 1.831zM5.992 22.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.497 1.497 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.496 1.496 0 0 0 1.673-.31zm5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 22.94a1.5 1.5 0 1 0 2.122 2.118l3.002-2.998zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.489 1.489 0 0 0-1.173.44L9.323 24.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44l2.005-1.996zm21.557-7.456a1.45 1.45 0 0 0 .269-1.885l-.003-.005l-3.467-6.521a1.488 1.488 0 0 0-1.794-.6c-1.992.771-4.174 1.657-6.292.937l-1.098-.377c-1.948-.675-4.066-1.466-6-.294c-.695.409-1.738 1.133-2.411 1.58a6.873 6.873 0 0 1-2.762 1.076a1.502 1.502 0 0 0-1.235 1.737c.613 2.512 5.3.908 7.838-.369a.968.968 0 0 1 1.002.081l11.584 8.416l4.369-3.776z" data-v-fc30ac9b></path></svg> 友情链接</span></div><ol class="friend-list" data-v-fc30ac9b><!--[-->`);
        ssrRenderList(friendList.value, (v) => {
          _push(`<li data-v-fc30ac9b><a${ssrRenderAttr("href", v.url)} target="_blank" data-v-fc30ac9b>`);
          _push(ssrRenderComponent(unref(ElAvatar), {
            size: 50,
            src: v.avatar,
            alt: v.alt
          }, null, _parent));
          _push(`<div data-v-fc30ac9b><span class="nickname" data-v-fc30ac9b>${ssrInterpolate(v.nickname)}</span><p class="des" data-v-fc30ac9b>${ssrInterpolate(v.des)}</p></div></a></li>`);
        });
        _push(`<!--]--></ol></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogFriendLink_vue_vue_type_style_index_0_scoped_fc30ac9b_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogFriendLink.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const BlogFriendLink = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-fc30ac9b"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "blog-info",
        "data-pagefind-ignore": "all"
      }, _attrs))} data-v-549b91a5>`);
      _push(ssrRenderComponent(BlogHomeOverview, null, null, _parent));
      _push(ssrRenderComponent(BlogHotArticle, null, null, _parent));
      _push(ssrRenderComponent(BlogFriendLink, null, null, _parent));
      _push(ssrRenderComponent(BlogHomeTags, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const BlogHomeInfo_vue_vue_type_style_index_0_scoped_549b91a5_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogHomeInfo.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const BlogHomeInfo = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-549b91a5"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, frontmatter } = useData$1();
    const { home } = useBlogConfig();
    const name2 = computed(
      () => {
        var _a2;
        return (((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.name) ?? site.value.title) || (home == null ? void 0 : home.name) || "";
      }
    );
    const motto = computed(() => {
      var _a2;
      return ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.motto) || (home == null ? void 0 : home.motto) || "";
    });
    const inspiring = ref("");
    const inspiringList = computed(() => {
      var _a2;
      return [
        ...new Set(
          [(_a2 = frontmatter.value.blog) == null ? void 0 : _a2.inspiring, home == null ? void 0 : home.inspiring].flat().filter((v) => !!v)
        )
      ];
    });
    const inspiringIndex = ref(-1);
    const inspiringTimeout = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.inspiringTimeout) || (home == null ? void 0 : home.inspiringTimeout) || 0;
      }
    );
    watch(inspiringTimeout, () => {
      startTimer();
    });
    const timer2 = ref(0);
    function startTimer() {
      if (timer2.value) {
        clearTimeout(timer2.value);
      }
      if (inspiringTimeout.value > 0) {
        timer2.value = setTimeout(() => {
          changeSlogan();
        }, inspiringTimeout.value);
      }
    }
    onMounted(() => {
      changeSlogan();
    });
    onUnmounted(() => {
      if (timer2.value) {
        clearTimeout(timer2.value);
      }
    });
    async function changeSlogan() {
      startTimer();
      if (inspiringList.value.length < 1)
        return;
      inspiringIndex.value = (inspiringIndex.value + 1) % inspiringList.value.length;
      const newValue = inspiringList.value[inspiringIndex.value];
      if (newValue === inspiring.value)
        return;
      inspiring.value = "";
      setTimeout(() => {
        inspiring.value = newValue;
      }, 100);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9ffe9e06><h1 data-v-9ffe9e06><span class="name" data-v-9ffe9e06>${ssrInterpolate(name2.value)}</span><span style="${ssrRenderStyle(motto.value ? null : { display: "none" })}" class="motto" data-v-9ffe9e06>${ssrInterpolate(motto.value)}</span></h1><div class="inspiring-wrapper" data-v-9ffe9e06><h2 style="${ssrRenderStyle(!!inspiring.value ? null : { display: "none" })}" data-v-9ffe9e06>${ssrInterpolate(inspiring.value)}</h2></div></div>`);
    };
  }
});
const BlogHomeBanner_vue_vue_type_style_index_0_scoped_9ffe9e06_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogHomeBanner.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const BlogHomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-9ffe9e06"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "BlogItem",
  __ssrInlineRender: true,
  props: {
    route: {},
    title: {},
    date: {},
    sticky: {},
    description: {},
    descriptionHTML: {},
    tag: {},
    author: {},
    cover: { type: [String, Boolean] },
    pin: {}
  },
  setup(__props) {
    const props = __props;
    const { width } = useWindowSize();
    const inMobile = computed(() => width.value <= 500);
    const showTime = computed(() => {
      return formatShowDate(props.date);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "blog-item",
        href: unref(withBase)(_ctx.route)
      }, _attrs))} data-v-b39ef957>`);
      if (!!_ctx.pin) {
        _push(`<i class="pin" data-v-b39ef957></i>`);
      } else {
        _push(`<!---->`);
      }
      if (inMobile.value) {
        _push(`<p class="title" data-v-b39ef957>${ssrInterpolate(_ctx.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="info-container" data-v-b39ef957><div class="info-part" data-v-b39ef957>`);
      if (!inMobile.value) {
        _push(`<p class="title" data-v-b39ef957>${ssrInterpolate(_ctx.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.descriptionHTML && !!_ctx.description) {
        _push(`<p class="description" data-v-b39ef957>${ssrInterpolate(_ctx.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.descriptionHTML) {
        _push(`<div class="description-html" data-v-b39ef957>${_ctx.descriptionHTML}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!inMobile.value) {
        _push(`<div class="badge-list" data-v-b39ef957>`);
        if (_ctx.author) {
          _push(`<span class="split" data-v-b39ef957>${ssrInterpolate(_ctx.author)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="split" data-v-b39ef957>${ssrInterpolate(showTime.value)}</span>`);
        if ((_a2 = _ctx.tag) == null ? void 0 : _a2.length) {
          _push(`<span class="split" data-v-b39ef957>${ssrInterpolate(_ctx.tag.join(" · "))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.cover) {
        _push(`<div class="cover-img" style="${ssrRenderStyle(`background-image: url(${_ctx.cover});`)}" data-v-b39ef957></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (inMobile.value) {
        _push(`<div class="badge-list" data-v-b39ef957>`);
        if (_ctx.author) {
          _push(`<span class="split" data-v-b39ef957>${ssrInterpolate(_ctx.author)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="split" data-v-b39ef957>${ssrInterpolate(showTime.value)}</span>`);
        if ((_b = _ctx.tag) == null ? void 0 : _b.length) {
          _push(`<span class="split" data-v-b39ef957>${ssrInterpolate(_ctx.tag.join(" · "))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const BlogItem_vue_vue_type_style_index_0_scoped_b39ef957_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const BlogItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-b39ef957"]]);
const queryPageNumKey = "pageNum";
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "BlogList",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData$1();
    const globalAuthor = computed(() => {
      var _a2;
      return ((_a2 = theme2.value.blog) == null ? void 0 : _a2.author) || "";
    });
    const docs = useArticles();
    const activeTag = useActiveTag();
    const activeTagLabel = computed(() => activeTag.value.label);
    const wikiList = computed(() => {
      const topList = docs.value.filter((v) => !v.meta.hidden && !!v.meta.top);
      topList.sort((a, b) => {
        var _a2;
        const aTop = (_a2 = a == null ? void 0 : a.meta) == null ? void 0 : _a2.top;
        const bTop = b == null ? void 0 : b.meta.top;
        return Number(aTop) - Number(bTop);
      });
      const data = docs.value.filter(
        (v) => v.meta.date && v.meta.title && !v.meta.top && !v.meta.hidden
      );
      data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
      return topList.concat(data);
    });
    const filterData = computed(() => {
      if (!activeTagLabel.value)
        return wikiList.value;
      return wikiList.value.filter(
        (v) => {
          var _a2, _b;
          return (_b = (_a2 = v.meta) == null ? void 0 : _a2.tag) == null ? void 0 : _b.includes(activeTagLabel.value);
        }
      );
    });
    const { home } = useBlogConfig();
    const pageSize = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.pageSize) || (home == null ? void 0 : home.pageSize) || 6;
      }
    );
    const currentPage = useCurrentPageNum();
    const currentWikiData = computed(() => {
      const startIdx = (currentPage.value - 1) * pageSize.value;
      const endIdx = startIdx + pageSize.value;
      return filterData.value.slice(startIdx, endIdx);
    });
    const router = useRouter();
    const location2 = useBrowserLocation();
    function handleUpdatePageNum(current) {
      if (currentPage.value === current) {
        return;
      }
      currentPage.value = current;
      const { searchParams } = new URL(window.location.href);
      searchParams.delete(queryPageNumKey);
      searchParams.append(queryPageNumKey, String(current));
      router.go(
        `${location2.value.origin}${router.route.path}?${searchParams.toString()}`
      );
    }
    watch(
      location2,
      () => {
        if (location2.value.href) {
          const { searchParams } = new URL(location2.value.href);
          if (searchParams.has(queryPageNumKey)) {
            currentPage.value = Number(searchParams.get(queryPageNumKey));
          } else {
            currentPage.value = 1;
          }
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[--><ul data-pagefind-ignore="all" data-v-59d4a614><!--[-->`);
      ssrRenderList(currentWikiData.value, (v) => {
        _push(`<li data-v-59d4a614>`);
        _push(ssrRenderComponent(BlogItem, {
          route: v.route,
          title: v.meta.title,
          description: v.meta.description,
          "description-h-t-m-l": v.meta.descriptionHTML,
          date: v.meta.date,
          tag: v.meta.tag,
          cover: v.meta.cover,
          author: v.meta.author || globalAuthor.value,
          pin: v.meta.top
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="el-pagination-wrapper" data-v-59d4a614${_scopeId}>`);
            if (wikiList.value.length >= pageSize.value) {
              _push2(ssrRenderComponent(unref(ElPagination), {
                small: "",
                background: "",
                "default-current-page": 1,
                "current-page": unref(currentPage),
                "page-size": pageSize.value,
                total: filterData.value.length,
                layout: "prev, pager, next, jumper",
                "onUpdate:currentPage": handleUpdatePageNum
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "el-pagination-wrapper" }, [
                wikiList.value.length >= pageSize.value ? (openBlock(), createBlock(unref(ElPagination), {
                  key: 0,
                  small: "",
                  background: "",
                  "default-current-page": 1,
                  "current-page": unref(currentPage),
                  "page-size": pageSize.value,
                  total: filterData.value.length,
                  layout: "prev, pager, next, jumper",
                  "onUpdate:currentPage": handleUpdatePageNum
                }, null, 8, ["current-page", "page-size", "total"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const BlogList_vue_vue_type_style_index_0_scoped_59d4a614_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogList.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const BlogList = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-59d4a614"]]);
const d = ["id", "host", "repo", "repoid", "category", "categoryid", "mapping", "term", "strict", "reactionsenabled", "emitmetadata", "inputposition", "theme", "lang", "loading"], l = /* @__PURE__ */ defineComponent({
  __name: "Giscus",
  props: {
    id: {},
    host: {},
    repo: {},
    repoId: {},
    category: {},
    categoryId: {},
    mapping: {},
    term: {},
    theme: {},
    strict: {},
    reactionsEnabled: {},
    emitMetadata: {},
    inputPosition: {},
    lang: {},
    loading: {}
  },
  setup(s) {
    const t = ref(false);
    return onMounted(() => {
      t.value = true, import("./giscus-aTimukGI.17457579.js");
    }), (e, m) => t.value ? (openBlock(), createElementBlock("giscus-widget", {
      key: 0,
      id: e.id,
      host: e.host,
      repo: e.repo,
      repoid: e.repoId,
      category: e.category,
      categoryid: e.categoryId,
      mapping: e.mapping,
      term: e.term,
      strict: e.strict,
      reactionsenabled: e.reactionsEnabled,
      emitmetadata: e.emitMetadata,
      inputposition: e.inputPosition,
      theme: e.theme,
      lang: e.lang,
      loading: e.loading
    }, null, 8, d)) : createCommentVNode("", true);
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BlogComment",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    const commentEl = ref(null);
    const commentIsVisible = useElementVisibility(commentEl);
    function handleScrollToComment() {
      var _a2;
      (_a2 = document.querySelector("#giscus-comment")) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    const giscusConfig = useGiscusConfig();
    const commentConfig = computed(() => {
      if (!giscusConfig) {
        return {};
      }
      return giscusConfig;
    });
    const show = computed(() => {
      if (frontmatter.value.comment === false) {
        return frontmatter.value.comment;
      }
      if (!giscusConfig) {
        return giscusConfig;
      }
      return giscusConfig.repo && giscusConfig.repoId && giscusConfig.category && giscusConfig.categoryId;
    });
    const { isDark: isDark2 } = useData$1();
    const route = useRoute();
    const showComment = ref(true);
    watch(
      () => route.path,
      () => {
        showComment.value = false;
        setTimeout(() => {
          showComment.value = true;
        }, 200);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "giscus-comment",
          ref_key: "commentEl",
          ref: commentEl,
          class: "comment",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-360b7662>`);
        _push(ssrRenderComponent(unref(ElAffix), {
          class: [{ hidden: unref(commentIsVisible) }, "comment-btn"],
          target: "main",
          position: "bottom",
          offset: 40
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ElButton), {
                plain: "",
                icon: unref(Comment),
                type: "primary",
                onClick: handleScrollToComment
              }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 评论 `);
                  } else {
                    return [
                      createTextVNode(" 评论 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ElButton), {
                  plain: "",
                  icon: unref(Comment),
                  type: "primary",
                  onClick: handleScrollToComment
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 评论 ")
                  ]),
                  _: 1
                }, 8, ["icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (showComment.value) {
          _push(ssrRenderComponent(unref(l), {
            repo: commentConfig.value.repo,
            "repo-id": commentConfig.value.repoId,
            category: commentConfig.value.category,
            "category-id": commentConfig.value.categoryId,
            mapping: commentConfig.value.mapping || "pathname",
            "reactions-enabled": "1",
            "emit-metadata": "0",
            "input-position": commentConfig.value.inputPosition || "top",
            theme: unref(isDark2) ? "dark" : "light",
            lang: commentConfig.value.lang || "zh-CN",
            loading: commentConfig.value.loading || "eager"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogComment_vue_vue_type_style_index_0_scoped_360b7662_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogComment.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const BlogComment = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-360b7662"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BlogRecommendArticle",
  __ssrInlineRender: true,
  setup(__props) {
    const { recommend: _recommend } = useBlogConfig();
    const sidebarStyle = computed(
      () => _recommend && (_recommend == null ? void 0 : _recommend.style) ? _recommend.style : "sidebar"
    );
    const recommendPadding = computed(
      () => sidebarStyle.value === "card" ? "10px" : "0px"
    );
    const recommend = computed(
      () => _recommend === false ? void 0 : _recommend
    );
    const title = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.title) ?? `<span class="svg-icon">${recommendSVG}</span>相关文章`;
    });
    const pageSize = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.pageSize) || 9;
    });
    const nextText = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.nextText) || "换一组";
    });
    const emptyText = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.empty) ?? "暂无相关文章";
    });
    const docs = useArticles();
    const route = useRoute();
    const recommendList = computed(() => {
      var _a2;
      const paths = decodeURIComponent(route.path).split("/");
      const origin = docs.value.map((v) => ({ ...v, route: withBase(v.route) })).filter(
        (v) => v.route.split("/").length === paths.length && v.route.startsWith(paths.slice(0, paths.length - 1).join("/"))
      ).filter((v) => !!v.meta.title).filter(
        (v) => {
          var _a3;
          return (((_a3 = recommend.value) == null ? void 0 : _a3.showSelf) ?? true) || v.route !== decodeURIComponent(route.path).replace(/.html$/, "");
        }
      ).filter((v) => v.meta.recommend !== false).filter((v) => {
        var _a3, _b;
        return ((_b = (_a3 = recommend.value) == null ? void 0 : _a3.filter) == null ? void 0 : _b.call(_a3, v)) ?? true;
      });
      const topList = origin.filter((v) => {
        var _a3;
        return (_a3 = v.meta) == null ? void 0 : _a3.recommend;
      });
      topList.sort((a, b) => Number(a.meta.recommend) - Number(b.meta.recommend));
      const normalList = origin.filter((v) => {
        var _a3;
        return !((_a3 = v.meta) == null ? void 0 : _a3.recommend);
      });
      const sortMode = ((_a2 = recommend.value) == null ? void 0 : _a2.sort) ?? "date";
      let compareFn = (a, b) => +new Date(b.meta.date) - +new Date(a.meta.date);
      if (sortMode === "filename") {
        compareFn = (a, b) => {
          const aName = a.route.split("/").pop();
          const bName = b.route.split("/").pop();
          return aName.localeCompare(bName);
        };
      }
      if (typeof sortMode === "function") {
        compareFn = sortMode;
      }
      normalList.sort(compareFn);
      return topList.concat(normalList);
    });
    function isCurrentDoc(value) {
      return value === decodeURIComponent(route.path).replace(/.html$/, "");
    }
    const currentPage = ref(1);
    function changePage() {
      const newIdx = currentPage.value % Math.ceil(recommendList.value.length / pageSize.value);
      currentPage.value = newIdx + 1;
    }
    const startIdx = computed(() => (currentPage.value - 1) * pageSize.value);
    const currentWikiData = computed(() => {
      const startIdx2 = (currentPage.value - 1) * pageSize.value;
      const endIdx = startIdx2 + pageSize.value;
      return recommendList.value.slice(startIdx2, endIdx);
    });
    const showChangeBtn = computed(() => {
      return recommendList.value.length > pageSize.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--e1368d30": recommendPadding.value
      } };
      if (unref(_recommend) !== false && (recommendList.value.length || emptyText.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["recommend", { card: sidebarStyle.value === "card" }],
          "data-pagefind-ignore": "all"
        }, _attrs, _cssVars))} data-v-d0cddf3a><div class="card-header" data-v-d0cddf3a>`);
        if (title.value) {
          _push(`<span class="title" data-v-d0cddf3a>${title.value}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (showChangeBtn.value) {
          _push(ssrRenderComponent(unref(ElButton), {
            size: "small",
            type: "primary",
            text: "",
            onClick: changePage
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(nextText.value)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(nextText.value), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (currentWikiData.value.length) {
          _push(`<ol class="recommend-container" data-v-d0cddf3a><!--[-->`);
          ssrRenderList(currentWikiData.value, (v, idx) => {
            _push(`<li data-v-d0cddf3a><i class="num" data-v-d0cddf3a>${ssrInterpolate(startIdx.value + idx + 1)}</i><div class="des" data-v-d0cddf3a>`);
            _push(ssrRenderComponent(unref(ElLink), {
              type: "info",
              class: ["title", {
                current: isCurrentDoc(v.route)
              }],
              href: v.route
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(v.meta.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString$1(v.meta.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="suffix" data-v-d0cddf3a><span class="tag" data-v-d0cddf3a>${ssrInterpolate(unref(formatShowDate)(v.meta.date))}</span></div></div></li>`);
          });
          _push(`<!--]--></ol>`);
        } else {
          _push(`<div class="empty-text" data-v-d0cddf3a>${ssrInterpolate(emptyText.value)}</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogRecommendArticle_vue_vue_type_style_index_0_scoped_d0cddf3a_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogRecommendArticle.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const BlogRecommendArticle = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-d0cddf3a"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BlogSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const { recommend: _recommend } = useBlogConfig();
    const sidebarStyle = computed(
      () => _recommend && (_recommend == null ? void 0 : _recommend.style) ? _recommend.style : "card"
    );
    const marginTop = computed(
      () => sidebarStyle.value === "card" ? "40px" : "0px"
    );
    const marginTopMini = computed(
      () => sidebarStyle.value === "card" ? "60px" : "0px"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--f1299ede": marginTop.value,
        "--f319cef0": marginTopMini.value
      } };
      if (unref(_recommend) !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "sidebar",
          "data-pagefind-ignore": "all"
        }, _attrs, _cssVars))} data-v-2c7042a9>`);
        _push(ssrRenderComponent(BlogRecommendArticle, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogSidebar_vue_vue_type_style_index_0_scoped_2c7042a9_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogSidebar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const BlogSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-2c7042a9"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BlogImagePreview",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const previewImageInfo = reactive(
      {
        url: "",
        list: [],
        idx: 0
      }
    );
    function previewImage(e) {
      const target = e.target;
      const currentTarget = e.currentTarget;
      if (target.tagName.toLowerCase() === "img") {
        const imgs = currentTarget.querySelectorAll(
          ".content-container .main img"
        );
        const idx = Array.from(imgs).findIndex((el) => el === target);
        const urls = Array.from(imgs).map((el) => el.src);
        const url = target.getAttribute("src");
        previewImageInfo.url = url;
        previewImageInfo.list = urls;
        previewImageInfo.idx = idx;
        if (idx === -1 && url) {
          previewImageInfo.list.push(url);
          previewImageInfo.idx = previewImageInfo.list.length - 1;
        }
        show.value = true;
      }
    }
    onMounted(() => {
      const docDomContainer = document.querySelector("#VPContent");
      docDomContainer == null ? void 0 : docDomContainer.addEventListener("click", previewImage);
    });
    onUnmounted(() => {
      const docDomContainer = document.querySelector("#VPContent");
      docDomContainer == null ? void 0 : docDomContainer.removeEventListener("click", previewImage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(ssrRenderComponent(unref(ElImageViewer), mergeProps({
          infinite: false,
          "hide-on-click-modal": "",
          teleported: "",
          "url-list": previewImageInfo.list,
          "initial-index": previewImageInfo.idx,
          onClose: ($event) => show.value = false
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogImagePreview.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BlogDocCover",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    const cover = computed(() => frontmatter.value.cover);
    const { article } = useBlogConfig();
    const hiddenCover = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value) == null ? void 0 : _a2.hiddenCover) ?? (article == null ? void 0 : article.hiddenCover) ?? false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (cover.value && !hiddenCover.value) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "blog-doc-cover",
          src: cover.value
        }, _attrs))} data-v-92d4b08f>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogDocCover_vue_vue_type_style_index_0_scoped_92d4b08f_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogDocCover.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BlogDocCover = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-92d4b08f"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BlogArticleAnalyze",
  __ssrInlineRender: true,
  setup(__props) {
    const { article, authorList } = useBlogConfig();
    const { frontmatter } = useData$1();
    const tags = computed(() => {
      const { tag, tags: tags2, categories } = frontmatter.value;
      return [
        ...new Set(
          [].concat(tag, tags2, categories).flat().filter((v) => !!v)
        )
      ];
    });
    const showAnalyze = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value) == null ? void 0 : _a2.readingTime) ?? (article == null ? void 0 : article.readingTime) ?? true;
      }
    );
    const wordCount = ref(0);
    const imageCount = ref(0);
    const wordTime = computed(() => {
      return ~~(wordCount.value / 275 * 60);
    });
    const imageTime = computed(() => {
      const n = imageCount.value;
      if (imageCount.value <= 10) {
        return n * 13 + n * (n - 1) / 2;
      }
      return 175 + (n - 10) * 3;
    });
    const readTime = computed(() => {
      return Math.ceil((wordTime.value + imageTime.value) / 60);
    });
    const route = useRoute();
    const $des = ref();
    function analyze() {
      var _a2, _b;
      if (!$des.value) {
        return;
      }
      document.querySelectorAll(".meta-des").forEach((v) => v.remove());
      const docDomContainer = window.document.querySelector("#VPContent");
      const imgs = docDomContainer == null ? void 0 : docDomContainer.querySelectorAll(
        ".content-container .main img"
      );
      imageCount.value = (imgs == null ? void 0 : imgs.length) || 0;
      const words = ((_a2 = docDomContainer == null ? void 0 : docDomContainer.querySelector(".content-container .main")) == null ? void 0 : _a2.textContent) || "";
      wordCount.value = countWord(words);
      (_b = docDomContainer == null ? void 0 : docDomContainer.querySelector("h1")) == null ? void 0 : _b.after($des.value);
    }
    onMounted(() => {
      const observer = new MutationObserver(() => {
        const targetInstance = document.querySelector("#hack-article-des");
        if (!targetInstance) {
          analyze();
        }
      });
      observer.observe(document.body, {
        childList: true,
        // 观察目标子节点的变化，是否有添加或者删除
        subtree: true
        // 观察后代节点，默认为 false
      });
      analyze();
    });
    const pv = ref(6666);
    const currentArticle = useCurrentArticle();
    const publishDate = computed(() => {
      var _a2, _b;
      return formatShowDate(((_b = (_a2 = currentArticle.value) == null ? void 0 : _a2.meta) == null ? void 0 : _b.date) || "");
    });
    const timeTitle = computed(
      () => frontmatter.value.date ? "发布时间" : "最近修改时间"
    );
    const hiddenTime = computed(() => frontmatter.value.date === false);
    const { theme: theme2 } = useData$1();
    const globalAuthor = computed(() => {
      var _a2;
      return ((_a2 = theme2.value.blog) == null ? void 0 : _a2.author) || "";
    });
    const author2 = computed(
      () => {
        var _a2;
        return (frontmatter.value.author || ((_a2 = currentArticle.value) == null ? void 0 : _a2.meta.author)) ?? globalAuthor.value;
      }
    );
    const currentAuthorInfo = computed(
      () => authorList == null ? void 0 : authorList.find((v) => author2.value === v.nickname)
    );
    const hiddenAuthor = computed(() => frontmatter.value.author === false);
    watch(
      () => route.path,
      () => {
        pv.value = 123;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[-->`);
      if (showAnalyze.value) {
        _push(`<div class="doc-analyze" data-pagefind-ignore="all" data-v-789ef137><span data-v-789ef137>`);
        _push(ssrRenderComponent(unref(ElIcon), null, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(EditPen), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(EditPen))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` 字数：${ssrInterpolate(wordCount.value)} 个字 </span><span data-v-789ef137>`);
        _push(ssrRenderComponent(unref(ElIcon), null, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(AlarmClock), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(AlarmClock))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` 预计：${ssrInterpolate(readTime.value)} 分钟 </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="hack-article-des" class="meta-des" data-v-789ef137>`);
      if (author2.value && !hiddenAuthor.value) {
        _push(`<span class="author" data-v-789ef137>`);
        _push(ssrRenderComponent(unref(ElIcon), { title: "本文作者" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(UserFilled), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(UserFilled))
              ];
            }
          }),
          _: 1
        }, _parent));
        if (currentAuthorInfo.value) {
          _push(`<a class="link"${ssrRenderAttr("href", currentAuthorInfo.value.url)}${ssrRenderAttr("title", currentAuthorInfo.value.des)} data-v-789ef137>${ssrInterpolate(currentAuthorInfo.value.nickname)}</a>`);
        } else {
          _push(`<!--[-->${ssrInterpolate(author2.value)}<!--]-->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (publishDate.value && !hiddenTime.value) {
        _push(`<span class="publishDate" data-v-789ef137>`);
        _push(ssrRenderComponent(unref(ElIcon), { title: timeTitle.value }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Clock), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Clock))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` ${ssrInterpolate(publishDate.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (tags.value.length) {
        _push(`<span class="tags" data-v-789ef137>`);
        _push(ssrRenderComponent(unref(ElIcon), { title: timeTitle.value }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(CollectionTag), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(CollectionTag))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(tags.value, (tag) => {
          _push(`<a class="link"${ssrRenderAttr("href", `/?tag=${tag}`)} data-v-789ef137>${ssrInterpolate(tag)}</a>`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BlogDocCover, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BlogDocCover)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const BlogArticleAnalyze_vue_vue_type_style_index_0_scoped_789ef137_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogArticleAnalyze.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const BlogArticleAnalyze = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-789ef137"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BlogAlert",
  __ssrInlineRender: true,
  setup(__props) {
    const { alert: alertProps } = useBlogConfig();
    const show = ref(false);
    onMounted(() => {
      const storageKey = "theme-blog-alert";
      const oldValue = localStorage.getItem(storageKey);
      const newValue = JSON.stringify(alertProps);
      localStorage.setItem(storageKey, newValue);
      if (Number(alertProps == null ? void 0 : alertProps.duration) >= 0) {
        show.value = true;
        if (alertProps == null ? void 0 : alertProps.duration) {
          setTimeout(() => {
            show.value = false;
          }, alertProps == null ? void 0 : alertProps.duration);
        }
      }
      if (oldValue !== newValue && (alertProps == null ? void 0 : alertProps.duration) === -1) {
        show.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "global-alert",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-8ef47f74>`);
        _push(ssrRenderComponent(unref(ElAlert), {
          title: (_a2 = unref(alertProps)) == null ? void 0 : _a2.title,
          type: (_b = unref(alertProps)) == null ? void 0 : _b.type,
          "show-icon": (_c = unref(alertProps)) == null ? void 0 : _c.showIcon,
          center: (_d = unref(alertProps)) == null ? void 0 : _d.center,
          closable: (_e = unref(alertProps)) == null ? void 0 : _e.closable,
          "close-text": (_f = unref(alertProps)) == null ? void 0 : _f.closeText,
          description: (_g = unref(alertProps)) == null ? void 0 : _g.description
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            var _a3, _b2, _c2, _d2;
            if (_push2) {
              if ((_a3 = unref(alertProps)) == null ? void 0 : _a3.html) {
                _push2(`<div data-v-8ef47f74${_scopeId}>${(_b2 = unref(alertProps)) == null ? void 0 : _b2.html}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ((_c2 = unref(alertProps)) == null ? void 0 : _c2.html) ? (openBlock(), createBlock("div", {
                  key: 0,
                  innerHTML: (_d2 = unref(alertProps)) == null ? void 0 : _d2.html
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogAlert_vue_vue_type_style_index_0_scoped_8ef47f74_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogAlert.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const BlogAlert = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8ef47f74"]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var shared_cjs_prod = {};
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str2, expectsLowerCase) {
  const set2 = new Set(str2.split(","));
  return expectsLowerCase ? (val) => set2.has(val.toLowerCase()) : (val) => set2.has(val);
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str2) => {
    const hit = cache[str2];
    return hit || (cache[str2] = fn(str2));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str2) => {
  return str2.replace(camelizeRE, (_2, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str2) => str2.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str2) => {
  return str2.charAt(0).toUpperCase() + str2.slice(1);
});
const toHandlerKey = cacheStringFunction((str2) => {
  const s = str2 ? `on${capitalize(str2)}` : ``;
  return s;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name2) {
  return identRE.test(name2) ? `__props.${name2}` : `__props[${JSON.stringify(name2)}]`;
}
const PatchFlags = {
  "TEXT": 1,
  "1": "TEXT",
  "CLASS": 2,
  "2": "CLASS",
  "STYLE": 4,
  "4": "STYLE",
  "PROPS": 8,
  "8": "PROPS",
  "FULL_PROPS": 16,
  "16": "FULL_PROPS",
  "NEED_HYDRATION": 32,
  "32": "NEED_HYDRATION",
  "STABLE_FRAGMENT": 64,
  "64": "STABLE_FRAGMENT",
  "KEYED_FRAGMENT": 128,
  "128": "KEYED_FRAGMENT",
  "UNKEYED_FRAGMENT": 256,
  "256": "UNKEYED_FRAGMENT",
  "NEED_PATCH": 512,
  "512": "NEED_PATCH",
  "DYNAMIC_SLOTS": 1024,
  "1024": "DYNAMIC_SLOTS",
  "DEV_ROOT_FRAGMENT": 2048,
  "2048": "DEV_ROOT_FRAGMENT",
  "HOISTED": -1,
  "-1": "HOISTED",
  "BAIL": -2,
  "-2": "BAIL"
};
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `NEED_HYDRATION`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const ShapeFlags = {
  "ELEMENT": 1,
  "1": "ELEMENT",
  "FUNCTIONAL_COMPONENT": 2,
  "2": "FUNCTIONAL_COMPONENT",
  "STATEFUL_COMPONENT": 4,
  "4": "STATEFUL_COMPONENT",
  "TEXT_CHILDREN": 8,
  "8": "TEXT_CHILDREN",
  "ARRAY_CHILDREN": 16,
  "16": "ARRAY_CHILDREN",
  "SLOTS_CHILDREN": 32,
  "32": "SLOTS_CHILDREN",
  "TELEPORT": 64,
  "64": "TELEPORT",
  "SUSPENSE": 128,
  "128": "SUSPENSE",
  "COMPONENT_SHOULD_KEEP_ALIVE": 256,
  "256": "COMPONENT_SHOULD_KEEP_ALIVE",
  "COMPONENT_KEPT_ALIVE": 512,
  "512": "COMPONENT_KEPT_ALIVE",
  "COMPONENT": 6,
  "6": "COMPONENT"
};
const SlotFlags = {
  "STABLE": 1,
  "1": "STABLE",
  "DYNAMIC": 2,
  "2": "DYNAMIC",
  "FORWARDED": 3,
  "3": "FORWARDED"
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start2 = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_2, idx) => idx % 2 === 1);
  lines = lines.filter((_2, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start2) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line2 = j + 1;
        res.push(
          `${line2}${" ".repeat(Math.max(3 - String(line2).length, 0))}|  ${lines[j]}`
        );
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start2 - (count - (lineLength + newLineSeqLength));
          const length2 = Math.max(
            1,
            end > count ? lineLength - pad : end - start2
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length2));
        } else if (j > i) {
          if (end > count) {
            const length2 = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length2));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number") {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name2 in value) {
      if (value[name2]) {
        res += name2 + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style: style2 } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style2) {
    props.style = normalizeStyle(style2);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name2) {
  if (attrValidationCache.hasOwnProperty(name2)) {
    return attrValidationCache[name2];
  }
  const isUnsafe = unsafeAttrCharRE.test(name2);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name2}`);
  }
  return attrValidationCache[name2] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type2 = typeof value;
  return type2 === "string" || type2 === "number" || type2 === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str2 = "" + string;
  const match = escapeRE.exec(str2);
  if (!match) {
    return str2;
  }
  let html2 = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str2.length; index2++) {
    switch (str2.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html2 += str2.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html2 += escaped;
  }
  return lastIndex !== index2 ? html2 + str2.slice(lastIndex, index2) : html2;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries2, [key, val2], i) => {
          entries2[stringifySymbol(key, i) + " =>"] = val2;
          return entries2;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a2;
  return isSymbol(v) ? `Symbol(${(_a2 = v.description) != null ? _a2 : i})` : v;
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.PatchFlags = PatchFlags;
shared_cjs_prod.ShapeFlags = ShapeFlags;
shared_cjs_prod.SlotFlags = SlotFlags;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyAllowed = isGloballyAllowed;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isMathMLTag = isMathMLTag;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isObject = isObject;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isRegExp = isRegExp;
shared_cjs_prod.isRenderableAttrValue = isRenderableAttrValue;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.looseToNumber = looseToNumber;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
var parseStringStyle_1 = shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BlogPopover",
  __ssrInlineRender: true,
  setup(__props) {
    const { popover: popoverProps } = useBlogConfig();
    const show = ref(false);
    const bodyContent = computed(() => {
      return (popoverProps == null ? void 0 : popoverProps.body) || [];
    });
    const footerContent = computed(() => {
      return (popoverProps == null ? void 0 : popoverProps.footer) || [];
    });
    onMounted(() => {
      if (!(popoverProps == null ? void 0 : popoverProps.title)) {
        return;
      }
      const storageKey = "theme-blog-popover";
      const oldValue = localStorage.getItem(storageKey);
      const newValue = JSON.stringify(popoverProps);
      localStorage.setItem(storageKey, newValue);
      if (Number((popoverProps == null ? void 0 : popoverProps.duration) ?? "") >= 0) {
        show.value = true;
        if (popoverProps == null ? void 0 : popoverProps.duration) {
          setTimeout(() => {
            show.value = false;
          }, popoverProps == null ? void 0 : popoverProps.duration);
        }
      }
      if (oldValue !== newValue && (popoverProps == null ? void 0 : popoverProps.duration) === -1) {
        show.value = true;
      }
    });
    function PopoverValue(props, { slots }) {
      const { key, item } = props;
      if (item.type === "title") {
        return h(
          "h4",
          {
            style: parseStringStyle_1(item.style || "")
          },
          item.content
        );
      }
      if (item.type === "text") {
        return h(
          "p",
          {
            style: parseStringStyle_1(item.style || "")
          },
          item.content
        );
      }
      if (item.type === "image") {
        return h("img", {
          src: item.src,
          style: parseStringStyle_1(item.style || "")
        });
      }
      if (item.type === "button") {
        return h(
          ElButton,
          {
            type: "primary",
            onClick: () => {
              window.open(item.link, "_self");
            },
            style: parseStringStyle_1(item.style || ""),
            ...item.props
          },
          slots
        );
      }
      return h(
        "div",
        {
          key
        },
        ""
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      _push(`<!--[--><div style="${ssrRenderStyle(show.value ? null : { display: "none" })}" class="theme-blog-popover" data-pagefind-ignore="all" data-v-4f8ac536><div class="header" data-v-4f8ac536><div class="title-wrapper" data-v-4f8ac536>`);
      _push(ssrRenderComponent(unref(ElIcon), { size: "20px" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Flag), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Flag))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="title" data-v-4f8ac536>${ssrInterpolate((_a2 = unref(popoverProps)) == null ? void 0 : _a2.title)}</span></div>`);
      _push(ssrRenderComponent(unref(ElIcon), {
        class: "close-icon",
        size: "20px",
        onClick: ($event) => show.value = false
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CircleCloseFilled), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CircleCloseFilled))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (bodyContent.value.length) {
        _push(`<div class="body content" data-v-4f8ac536><!--[-->`);
        ssrRenderList(bodyContent.value, (v, idx) => {
          _push(ssrRenderComponent(PopoverValue, {
            key: idx,
            item: v
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(v.type !== "image" ? v.content : "")}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(v.type !== "image" ? v.content : ""), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (footerContent.value.length) {
          _push(`<hr data-v-4f8ac536>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer content" data-v-4f8ac536><!--[-->`);
      ssrRenderList(footerContent.value, (v, idx) => {
        _push(ssrRenderComponent(PopoverValue, {
          key: idx,
          item: v
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(v.type !== "image" ? v.content : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString$1(v.type !== "image" ? v.content : ""), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div style="${ssrRenderStyle(!show.value && (((_b = unref(popoverProps)) == null ? void 0 : _b.reopen) ?? true) && ((_c = unref(popoverProps)) == null ? void 0 : _c.title) ? null : { display: "none" })}" class="theme-blog-popover-close" data-v-4f8ac536>`);
      _push(ssrRenderComponent(unref(ElIcon), { size: "20px" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Flag), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Flag))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const BlogPopover_vue_vue_type_style_index_0_scoped_4f8ac536_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogPopover.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const BlogPopover = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4f8ac536"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQjSURBVHjaVNNZbFRlGIDh95w525zpdGa6TVtbykBbyiICxQY0AhYTJUCiiYqGqEEiJhKQmBg0ESPeeCGRENEYb4jhBr0gNQrRlCBiSgyLaSlSaKEs3Wemy+xnzuqFYdD/6rt6ku/N9wue55EcPwWArCgIgkx5ZRuYVxsnJ801Z05f3jY1MRnb/HxHV+uSph9RKq4mhkdwbZVgdQ2SHkPTwgj/h1QUWWi8/tfg/hM/XN/Y2zfaZnkSnuRDtLMsXhBOvrJtya/LlrcdMs1Qb1lVRQmSAEDAsU1kxpgamXp3y+azu1esreK9dyRqs9PIjkW6OsLx7lTV1ld/237s8HRV57MbnvO8CA+e9GCQFTk6Mza+4/0P+t9a9VSEI3uyTH/eR27aB2Ed31Q/Hx1sI6BHOPT13c5Frd0HW9p3HPUQEwAigJW9RDp+bstrOy981nVGLN/7RpHUV70YfXnEAtjxFPasxPDBQXatjzNTdOQXtg983H/51AFFy1KCIg2bNIdC+8270NwmUmelsXqSqHkDK5PDl8iCW0QcnEW+lqCjvcjQuMZ4YnQRTkotQUZu4GkjcfZNv19G011kXw4vayNYNvqCCvSVTciOgABgeuhBGwhgz5zbkI2ff7HUqJiNR2QktbbSYnBYYqbMT/ilKI4SIbT/GcRylbnvLmJ2X8N7tJ7rR8OE/BbliqEYea81WIotmOs02WFpc55Lf0f5/mSI3dsamOgxSX7ZjaALuBmB6M6FnB+S+POCwmOLk1QFFAqZyQWl1YrpiRZJLvDkygyC5NJ1XCax7xYNiTQVEYVIuUulayIcGeLkpw6WK7GuPY/fb2CkhleXIFFe8XPGaKBj9QxLW1Ik0bg8EuT2zRCJYZvZIYepe0EGbvi4bQUJVZhs2phADFYj+df0lBqJUnaekS4SUHXe3jrOnoE2PhSewHfRpfZGgcryIvfHdQruQlLo7Ns6QizqkJ31CIUlqwQJXuWUpDXj6qOsW32HT3YNImll9FwJsb4jyaLmWQ4fa6a+2sQw0ry8YZSiHcPxxXBtMfCv4XkUCrfliWs/fTE31rtTVfv9vsIorvQIniMhqXM4popVcJFVMHMpfMEaLPdxR1Tnna1b1vl6tGntpAjgCTNWONZyIFBR8Ydtr6EgrCI3VySfzZPLBDHyIq5gkpmzcOUmTGMF+bh7M9LYulfWzMmHBzk7Fpq9deWEYxjrtaCMXjWfstp6BCGNXZzBdYqYhogWqkMum4+oBVD0YnP63u/fFqbv1D+M7VSlBbmmK5uYaLYLYwslfwFVAyXQiOfcx3XyyGIM8DDn0lgWyGokHogu/0UJxpL/+f2e569s/CZQZ53OpzJr0+NXludUfb5jVdf7VUGXJUPIZast1S9PeII6jFDT5xMjFwO1S4c8zwTgnwEAxufYSzA67PMAAAAASUVORK5CYII=";
const name = "@sugarat/theme";
const version = "0.2.6";
const description = "简约风的 Vitepress 博客主题，sugarat vitepress blog theme";
const author = "sugar";
const license = "MIT";
const homepage = "https://theme.sugarat.top";
const repository = {
  type: "git",
  url: "git+https://github.com/ATQQ/sugar-blog.git"
};
const bugs = {
  url: "https://github.com/ATQQ/sugar-blog/issues"
};
const keywords = [
  "vitepress",
  "theme",
  "粥里有勺糖"
];
const exports$1 = {
  "./node": {
    types: "./node.d.ts",
    "default": "./node.js"
  },
  "./package.json": "./package.json",
  ".": "./src/index.ts"
};
const main = "src/index.ts";
const files = [
  "node.d.ts",
  "node.js",
  "src",
  "types"
];
const dependencies = {
  "@giscus/vue": "^2.3.0",
  "@mdit-vue/shared": "^0.12.0",
  "@mermaid-js/mermaid-mindmap": "^9.3.0",
  "@vue/shared": "^3.2.45",
  "@vueuse/core": "^9.6.0",
  "fast-glob": "^3.2.12",
  "gray-matter": "^4.0.3",
  mermaid: "^10.2.4",
  "vitepress-plugin-mermaid": "2.0.13",
  "vitepress-plugin-pagefind": "0.2.10",
  "vitepress-plugin-rss": "0.1.3",
  "vitepress-plugin-tabs": "0.2.0"
};
const devDependencies = {
  "@documate/documate": "^0.2.1",
  "@documate/vue": "^0.3.1",
  "@element-plus/icons-vue": "^2.1.0",
  "element-plus": "^2.3.4",
  pagefind: "1.0.3",
  sass: "^1.56.1",
  typescript: "^4.8.2",
  vitepress: "1.0.0-rc.20",
  vue: "^3.3.4"
};
const scripts = {
  dev: "npm run build:node && npm run dev:docs",
  "dev:docs": "vitepress dev docs",
  "dev:node": "npx tsup",
  build: "npm run build:node && npm run build:docs",
  "build:docs": "vitepress build docs",
  "build:node": "npx tsup",
  serve: "vitepress serve docs",
  "documate:upload": "documate upload"
};
const packageJSON = {
  name,
  version,
  description,
  author,
  license,
  homepage,
  repository,
  bugs,
  keywords,
  exports: exports$1,
  main,
  files,
  dependencies,
  devDependencies,
  scripts
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BlogFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const footerData = useHomeFooterConfig();
    const renderData = computed(() => {
      if (!footerData) {
        return [];
      }
      const flatData = [footerData].flat();
      return flatData.flat().map((footer, idx) => {
        const { icpRecord, securityRecord, copyright, version: version2, message } = footer;
        const data = [];
        const messageData = [message || []].flat();
        const isLast = idx === flatData.length - 1;
        if (version2 !== false && isLast || version2 === true) {
          data.push({
            name: `@sugarat/theme@${packageJSON.version}`,
            link: "https://theme.sugarat.top/",
            icon: themeSVG
          });
        }
        if (typeof copyright === "string") {
          data.push({
            name: copyright,
            icon: copyrightSVG
          });
        }
        if (copyright instanceof Object) {
          data.push({
            icon: copyrightSVG,
            name: copyright.message,
            ...copyright
          });
        }
        if (icpRecord) {
          data.push({
            icon: icpSVG,
            ...icpRecord
          });
        }
        if (securityRecord) {
          data.push({
            icon: "security",
            ...securityRecord
          });
        }
        return {
          data,
          messageData
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (renderData.value.length) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "blog-footer" }, _attrs))} data-v-67ba3877><!--[-->`);
        ssrRenderList(renderData.value, ({ data, messageData }) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(messageData, (message) => {
            _push(`<p data-v-67ba3877>${message}</p>`);
          });
          _push(`<!--]--><p class="footer-item-list" data-v-67ba3877><!--[-->`);
          ssrRenderList(data, (item) => {
            _push(`<span class="footer-item" data-v-67ba3877>`);
            if (item.icon === "security") {
              _push(`<i data-v-67ba3877><img${ssrRenderAttr("src", _imports_0)} alt="公网安备" data-v-67ba3877></i>`);
            } else if (item.icon) {
              _push(`<i data-v-67ba3877>${item.icon}</i>`);
            } else {
              _push(`<!---->`);
            }
            if (item.link) {
              _push(`<a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer" data-v-67ba3877>${ssrInterpolate(item.name)}</a>`);
            } else {
              _push(`<span data-v-67ba3877>${ssrInterpolate(item.name)}</span>`);
            }
            _push(`</span>`);
          });
          _push(`<!--]--></p><!--]-->`);
        });
        _push(`<!--]--></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogFooter_vue_vue_type_style_index_0_scoped_67ba3877_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogFooter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BlogFooter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-67ba3877"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeHeaderAvatar",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const inMiniScreen = computed(() => width.value <= 767);
    const { home } = useBlogConfig();
    const { frontmatter, site } = useData$1();
    const logo = computed(
      () => {
        var _a2, _b;
        return frontmatter.value.logo ?? ((_b = (_a2 = frontmatter.value) == null ? void 0 : _a2.blog) == null ? void 0 : _b.logo) ?? (home == null ? void 0 : home.logo) ?? site.value.themeConfig.logo;
      }
    );
    const alwaysHide = computed(() => {
      var _a2;
      return ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.minScreenAvatar) === false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: inMiniScreen.value && !alwaysHide.value ? null : { display: "none" },
        class: "blog-home-header-avatar"
      }, _attrs))} data-v-9d958891><img${ssrRenderAttr("src", logo.value)} alt="avatar" data-v-9d958891></div>`);
    };
  }
});
const BlogHomeHeaderAvatar_vue_vue_type_style_index_0_scoped_9d958891_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogHomeHeaderAvatar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BlogHomeHeaderAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9d958891"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BlogApp",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    const layout = computed(() => frontmatter.value.layout);
    const isBlogTheme = useBlogThemeMode();
    const { Layout: Layout2 } = theme;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(unref(Layout2), _attrs, createSlots({
        "layout-top": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(BlogAlert, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(BlogPopover, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "layout-top", {}, void 0, true),
              createVNode(BlogAlert),
              createVNode(BlogPopover)
            ];
          }
        }),
        "doc-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BlogArticleAnalyze, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BlogArticleAnalyze)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(BlogArticleAnalyze)
                ]),
                _: 1
              }),
              createVNode(_sfc_main$b)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "doc-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(BlogComment, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true),
              createVNode(BlogComment)
            ];
          }
        }),
        "layout-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (layout.value === "home") {
              _push2(ssrRenderComponent(BlogFooter, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              layout.value === "home" ? (openBlock(), createBlock(BlogFooter, { key: 0 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        "sidebar-nav-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
            ];
          }
        }),
        "page-top": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
            ];
          }
        }),
        "page-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
            ];
          }
        }),
        "not-found": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        "home-hero-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
            ];
          }
        }),
        "home-features-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
            ];
          }
        }),
        "home-features-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
            ];
          }
        }),
        "doc-footer-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        "doc-top": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
            ];
          }
        }),
        "doc-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
            ];
          }
        }),
        "aside-top": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
            ];
          }
        }),
        "aside-bottom": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-before": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-after": withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
            ];
          }
        }),
        _: 2
      }, [
        unref(isBlogTheme) ? {
          name: "home-hero-before",
          fn: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
              _push2(`<div class="home" data-v-5ce568c0${_scopeId}>`);
              _push2(ssrRenderComponent(BlogHomeHeaderAvatar, null, null, _parent2, _scopeId));
              _push2(`<div class="header-banner" data-v-5ce568c0${_scopeId}>`);
              _push2(ssrRenderComponent(BlogHomeBanner, null, null, _parent2, _scopeId));
              _push2(`</div><div class="content-wrapper" data-v-5ce568c0${_scopeId}><div class="blog-list-wrapper" data-v-5ce568c0${_scopeId}>`);
              _push2(ssrRenderComponent(BlogList, null, null, _parent2, _scopeId));
              _push2(`</div><div class="blog-info-wrapper" data-v-5ce568c0${_scopeId}>`);
              _push2(ssrRenderComponent(BlogHomeInfo, null, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true),
                createVNode("div", { class: "home" }, [
                  createVNode(BlogHomeHeaderAvatar),
                  createVNode("div", { class: "header-banner" }, [
                    createVNode(BlogHomeBanner)
                  ]),
                  createVNode("div", { class: "content-wrapper" }, [
                    createVNode("div", { class: "blog-list-wrapper" }, [
                      createVNode(BlogList)
                    ]),
                    createVNode("div", { class: "blog-info-wrapper" }, [
                      createVNode(BlogHomeInfo)
                    ])
                  ])
                ])
              ];
            }
          }),
          key: "0"
        } : void 0,
        unref(isBlogTheme) ? {
          name: "sidebar-nav-after",
          fn: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(BlogSidebar, null, null, _parent2, _scopeId));
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true),
                createVNode(BlogSidebar)
              ];
            }
          }),
          key: "1"
        } : void 0
      ]), _parent));
    };
  }
});
const BlogApp_vue_vue_type_style_index_0_scoped_5ce568c0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/BlogApp.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BlogApp = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5ce568c0"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>时间线页面</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/TimelinePage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TimelinePage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
const slugify = (str2) => str2.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const currentAnchor = useAutoUpdateAnchor();
    watch(
      () => currentAnchor.id,
      (val) => {
        if (val) {
          window.history.replaceState(null, "", `#${val}`);
        }
      }
    );
    const mountActiveAnchorEl = useActiveAnchor();
    watch(mountActiveAnchorEl, () => {
      const { value } = mountActiveAnchorEl;
      if (value) {
        value.scroll({
          behavior: "smooth"
        });
      }
    });
    const works = useUserWorks();
    const workList = reactive([]);
    watch(
      works,
      (val) => {
        const sortDate = [...val.list].map((v) => {
          const { time } = v;
          const metaInfo = typeof time === "string" ? {
            startTime: time,
            endTime: "",
            lastUpdate: ""
          } : {
            startTime: time.start,
            endTime: time.end,
            lastUpdate: time.lastupdate
          };
          const covers = [];
          let coverLayout = "swiper";
          if (typeof v.cover === "string") {
            covers.push(v.cover);
          } else if (Array.isArray(v.cover)) {
            covers.push(...v.cover);
          } else if (typeof v.cover === "object") {
            covers.push(...v.cover.urls);
            coverLayout = v.cover.layout ?? coverLayout;
          }
          return {
            ...v,
            ...metaInfo,
            covers,
            coverLayout
          };
        });
        const topDate = sortDate.filter((v) => v.top !== void 0);
        const normalDate = sortDate.filter((v) => v.top === void 0);
        topDate.sort((a, b) => a.top - b.top);
        normalDate.sort((a, b) => +new Date(b.startTime) - +new Date(a.startTime));
        if (topDate.length) {
          topDate[0].year = works.value.topTitle ?? "置顶";
        }
        const groupDate = normalDate.reduce((prev2, cur) => {
          const { startTime } = cur;
          const year = new Date(startTime).getFullYear();
          const data = { ...cur };
          if (!prev2[year]) {
            prev2[year] = [];
            data.year = year;
          }
          prev2[year].push(data);
          return prev2;
        }, {});
        workList.push(...topDate, ...Object.values(groupDate).reverse().flat());
      },
      { immediate: true }
    );
    const init2 = ref(true);
    watchEffect(() => {
      if (workList.length && init2.value) {
        init2.value = false;
        workList.forEach((data) => {
          if (!data.lastUpdate && data.github) {
            data.lastUpdate = "获取中...";
            const { github } = data;
            if (typeof github === "string") {
              getGithubUpdateTime(github).then((time) => {
                data.lastUpdate = formatDate(time, "yyyy-MM-dd");
              }).catch(() => {
                data.lastUpdate = "地址解析失败";
              });
            } else {
              const { owner, repo, path, branch } = github;
              let githubUrl = `https://github.com/${owner}/${repo}`;
              if (path) {
                githubUrl += `/tree/${branch || "master"}/${path}`;
              } else if (branch) {
                githubUrl += `/tree/${branch}`;
              }
              data.github = githubUrl;
              getGithubDirUpdateTime(owner, repo, path ?? "", branch).then((time) => {
                data.lastUpdate = formatDate(time, "yyyy-MM-dd");
              }).catch(() => {
                data.lastUpdate = "地址解析失败";
              });
            }
          }
        });
      }
    });
    const { width } = useWindowSize();
    const isCardMode = computed(() => width.value > 768);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-works-page VPDoc" }, _attrs))} data-v-0ae2f69d><div class="aside-container" data-v-0ae2f69d><div class="filter" data-v-0ae2f69d><div data-v-0ae2f69d></div><div data-v-0ae2f69d></div></div></div><div class="works" data-v-0ae2f69d><h1 data-v-0ae2f69d>${ssrInterpolate(unref(works).title)}</h1>`);
      if (unref(works).description) {
        _push(`<p class="description" data-v-0ae2f69d>${ssrInterpolate(unref(works).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(workList, (work, idx) => {
        var _a2, _b, _c, _d, _e;
        _push(`<div class="work" data-v-0ae2f69d>`);
        if (work.year) {
          _push(`<h2${ssrRenderAttr("id", `work_${work.year}`)} data-v-0ae2f69d><a${ssrRenderAttr("href", `#work_${work.year}`)} data-v-0ae2f69d>${ssrInterpolate(work.year)}</a></h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3${ssrRenderAttr("id", unref(slugify)(work.title))} class="title" data-v-0ae2f69d><a class="pin"${ssrRenderAttr("href", `#${unref(slugify)(work.title)}`)} data-v-0ae2f69d></a>`);
        if (work.url) {
          _push(`<a rel="noopener" target="_blank"${ssrRenderAttr("href", work.url)} data-v-0ae2f69d>${ssrInterpolate(work.title)}</a>`);
        } else {
          _push(`<span data-v-0ae2f69d>${ssrInterpolate(work.title)}</span>`);
        }
        if (work.status) {
          _push(ssrRenderComponent(_component_Badge, {
            type: ((_a2 = work.status) == null ? void 0 : _a2.type) || "tip"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(work.status.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString$1(work.status.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><div class="info" data-v-0ae2f69d><div class="times" data-v-0ae2f69d><span class="icon" data-v-0ae2f69d><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" data-v-0ae2f69d><title data-v-0ae2f69d>上线时间</title><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" fill="currentColor" data-v-0ae2f69d></path></svg></span><span data-v-0ae2f69d>${ssrInterpolate(work.startTime)}</span>`);
        if (work.endTime) {
          _push(`<span data-v-0ae2f69d> - ${ssrInterpolate(work.endTime)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (work.github) {
          _push(`<div class="links" data-v-0ae2f69d>`);
          if (work.github) {
            _push(`<a class="github-link"${ssrRenderAttr("href", work.github)} target="_blank" rel="noopener" data-v-0ae2f69d><i class="icon" data-v-0ae2f69d><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512" data-v-0ae2f69d><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z" fill="currentColor" data-v-0ae2f69d></path></svg></i>`);
            if (work.lastUpdate) {
              _push(`<span class="lastupdate" data-v-0ae2f69d>最后更新时间：${ssrInterpolate(work.lastUpdate)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = work.links) == null ? void 0 : _b.length) {
          _push(`<div class="links" data-v-0ae2f69d>`);
          if ((_c = work.links) == null ? void 0 : _c.length) {
            _push(`<i class="icon" data-v-0ae2f69d><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" data-v-0ae2f69d><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0ae2f69d><path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5" data-v-0ae2f69d></path><path d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5" data-v-0ae2f69d></path></g></svg></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(work.links || [], (link2) => {
            _push(`<a class="link"${ssrRenderAttr("href", link2.url)}${ssrRenderAttr("title", link2.title)} target="_blank" rel="noopener" data-v-0ae2f69d>${ssrInterpolate(link2.title)}</a>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = work.tags) == null ? void 0 : _d.length) {
          _push(`<div class="tags" data-v-0ae2f69d><i class="icon" data-v-0ae2f69d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-d328c40a="" data-v-0ae2f69d><path fill="currentColor" d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z" data-v-0ae2f69d></path></svg></i><!--[-->`);
          ssrRenderList(work.tags, (tag) => {
            _push(`<span class="tag" data-v-0ae2f69d>${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_e = work.covers) == null ? void 0 : _e.length) {
          _push(`<div class="images" data-v-0ae2f69d>`);
          if (work.coverLayout === "swiper") {
            _push(`<div class="swiper-mode" data-v-0ae2f69d>`);
            _push(ssrRenderComponent(unref(ElCarousel), {
              autoplay: "",
              height: "260px",
              type: isCardMode.value && work.covers.length >= 3 ? "card" : ""
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(work.covers, (url, idx2) => {
                    _push2(ssrRenderComponent(unref(ElCarouselItem), {
                      key: url,
                      style: { "text-align": "center" }
                    }, {
                      default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(ElImage), {
                            key: url,
                            "preview-teleported": "",
                            src: url,
                            loading: "lazy",
                            "preview-src-list": work.covers,
                            "initial-index": idx2,
                            "hide-on-click-modal": "",
                            alt: `${work.title}-${idx2}`
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            (openBlock(), createBlock(unref(ElImage), {
                              key: url,
                              "preview-teleported": "",
                              src: url,
                              loading: "lazy",
                              "preview-src-list": work.covers,
                              "initial-index": idx2,
                              "hide-on-click-modal": "",
                              alt: `${work.title}-${idx2}`
                            }, null, 8, ["src", "preview-src-list", "initial-index", "alt"]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(work.covers, (url, idx2) => {
                      return openBlock(), createBlock(unref(ElCarouselItem), {
                        key: url,
                        style: { "text-align": "center" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(unref(ElImage), {
                            key: url,
                            "preview-teleported": "",
                            src: url,
                            loading: "lazy",
                            "preview-src-list": work.covers,
                            "initial-index": idx2,
                            "hide-on-click-modal": "",
                            alt: `${work.title}-${idx2}`
                          }, null, 8, ["src", "preview-src-list", "initial-index", "alt"]))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (work.coverLayout === "list") {
            _push(`<div class="list-mode" data-v-0ae2f69d><!--[-->`);
            ssrRenderList(work.covers, (url, idx2) => {
              _push(ssrRenderComponent(unref(ElImage), {
                key: url,
                src: url,
                loading: "lazy",
                "preview-src-list": work.covers,
                "initial-index": idx2,
                "hide-on-click-modal": ""
              }, null, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="description" data-v-0ae2f69d>${work.description}</div></div>`);
      });
      _push(`<!--]--></div><div class="aside-container" data-v-0ae2f69d><div class="aside-outline-container" data-v-0ae2f69d>`);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const UserWorks_vue_vue_type_style_index_0_scoped_0ae2f69d_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@sugarat+theme@0.2.6_vitepress@1.0.0-rc.24_vue@3.4.15/node_modules/@sugarat/theme/src/components/UserWorks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UserWorksPage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0ae2f69d"]]);
const inlineTheme_var = "";
const BlogTheme = {
  ...theme,
  Layout: withConfigProvider(BlogApp),
  enhanceApp(ctx) {
    enhanceAppWithTabs(ctx.app);
    theme.enhanceApp(ctx);
    ctx.app.component("TimelinePage", TimelinePage);
    ctx.app.component("UserWorksPage", UserWorksPage);
  }
};
const style = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "redirectBtn",
  __ssrInlineRender: true,
  props: {
    href: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "action" }, _attrs))} data-v-0d36b1b6><a${ssrRenderAttr("href", _ctx.href)} data-v-0d36b1b6>`);
      _push(ssrRenderComponent(unref(ElButton), {
        type: "success",
        round: "",
        size: "large"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`戳我 ${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode("戳我 " + toDisplayString$1(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></p>`);
    };
  }
});
const redirectBtn_vue_vue_type_style_index_0_scoped_0d36b1b6_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/src/components/redirectBtn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const redirectBtn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d36b1b6"]]);
const solve_vue_vue_type_style_index_0_scoped_e69ae82e_lang = "";
const _sfc_main = {
  name: "Solve",
  props: {
    ok: {
      default: false,
      type: Boolean
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<p${ssrRenderAttrs(mergeProps({ class: "solve" }, _attrs))} data-v-e69ae82e>`);
  if ($props.ok) {
    _push(`<i class="ok" data-v-e69ae82e>✅</i>`);
  } else {
    _push(`<i class="wait" data-v-e69ae82e>❌</i>`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/src/components/solve.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Solve = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e69ae82e"]]);
const inBrowser = typeof window !== "undefined";
const RawTheme = {
  ...BlogTheme,
  enhanceApp: (ctx) => {
    const { app } = ctx;
    app.component("redirectBtn", redirectBtn);
    app.component("solve", Solve);
    if (inBrowser) {
      ctx.router.onBeforeRouteChange = (to) => {
        var _a2;
        const url = new URL(to, window.location.origin);
        const pattern2 = /(categories|tag)\/(.*)\/$/;
        if (pattern2.test(url.pathname)) {
          const tagName = (_a2 = url.pathname.match(pattern2)) == null ? void 0 : _a2[2];
          if (tagName) {
            window.location.replace(
              `${window.location.origin}${ctx.router.route.path}?tag=${tagName}`
            );
          }
        }
      };
    }
  }
};
const ClientOnly = defineComponent({
  setup(_2, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      var _a2;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a2 = el.parentElement) == null ? void 0 : _a2.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next2 = blocks.children[i];
        if (!next2 || current === next2)
          return;
        current.classList.remove("active");
        next2.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser$1) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a2;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a2 = el.nextElementSibling) == null ? void 0 : _a2.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text2 = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node2) => text2 += (node2.textContent || "") + "\n");
        text2 = text2.slice(0, -1);
        if (isShell) {
          text2 = text2.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text2).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text2) {
  try {
    return navigator.clipboard.writeText(text2);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text2;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection2 = document.getSelection();
    const originalRange = selection2 ? selection2.rangeCount > 0 && selection2.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text2.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection2.removeAllRanges();
      selection2.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadElements = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData2, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description2 = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description2) {
        metaDescriptionElement.setAttribute("content", description2);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description2 }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries2) => {
      entries2.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base2 = resolveThemeExtends(theme2.extends);
    return {
      ...base2,
      ...theme2,
      async enhanceApp(ctx) {
        if (base2.enhanceApp)
          await base2.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme6 = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme6.setup)
      Theme6.setup();
    return () => h(Theme6.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Mermaid", _sfc_main$1E);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme6.enhanceApp) {
    await Theme6.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      pageModule = import(
        /*@vite-ignore*/
        pageFilePath
      );
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme6.NotFound);
}
if (inBrowser$1) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  getTag$1 as $,
  nodeUtil$1 as A,
  baseRest as B,
  isIterateeCall as C,
  keysIn as D,
  eq as E,
  Set$2 as F,
  constant as G,
  isFunction$2 as H,
  isArrayLike as I,
  arrayLikeKeys as J,
  baseKeys as K,
  memoize as L,
  setToString$1 as M,
  overRest as N,
  identity$2 as O,
  isArrayLikeObject as P,
  merge$2 as Q,
  MapCache as R,
  Symbol$2 as S,
  isLength as T,
  isIndex as U,
  isArray$1$1 as V,
  isArguments$1 as W,
  baseUnary as X,
  isEmpty as Y,
  isObject$1$1 as Z,
  copyArray as _,
  getAccDescription as a,
  getConfig$1 as a$,
  isBuffer$1 as a0,
  cloneBuffer as a1,
  initCloneObject as a2,
  Stack as a3,
  assignValue as a4,
  baseFor$1 as a5,
  root$1 as a6,
  baseAssignValue as a7,
  isObjectLike as a8,
  baseGetTag as a9,
  getDefaultExportFromCjs as aA,
  rgbConvert as aB,
  nogamma as aC,
  hue as aD,
  interpolateNumber as aE,
  constant$1 as aF,
  color as aG,
  interpolateRgb as aH,
  interpolateString as aI,
  selectSvgElement as aJ,
  defaultConfig$2 as aK,
  cleanAndMerge as aL,
  parseFontSize as aM,
  tau as aN,
  pi as aO,
  cos as aP,
  sin as aQ,
  halfPi as aR,
  epsilon as aS,
  sqrt as aT,
  min as aU,
  abs$1 as aV,
  atan2 as aW,
  asin as aX,
  acos as aY,
  max as aZ,
  getThemeVariables$2 as a_,
  copyObject as aa,
  cloneTypedArray as ab,
  cloneArrayBuffer as ac,
  isTypedArray$1 as ad,
  getPrototype$1 as ae,
  Uint8Array$2 as af,
  Selection$1 as ag,
  root$2 as ah,
  array as ai,
  rgba$1 as aj,
  isPlainObject$1 as ak,
  _ as al,
  Color$1 as am,
  decodeEntities as an,
  curveBasis as ao,
  dedent as ap,
  setConfig as aq,
  parseGenericTypes as ar,
  setupGraphViewbox as as,
  random as at,
  define as au,
  extend$1 as av,
  Rgb as aw,
  Color$2 as ax,
  commonjsGlobal$1 as ay,
  dayjs as az,
  setAccDescription as b,
  addFunction as b0,
  ZERO_WIDTH_SPACE as b1,
  generateId as b2,
  commonDb as b3,
  isDark$1 as b4,
  lighten$1 as b5,
  darken$1 as b6,
  unrefElement$1 as b7,
  tryOnScopeDispose$1 as b8,
  useData as b9,
  computedAsync as ba,
  useSessionStorage as bb,
  useLocalStorage as bc,
  watchDebounced as bd,
  onKeyStroke as be,
  useRouter as bf,
  reactify as bg,
  useEventListener$1 as bh,
  useScrollLock as bi,
  dataSymbol as bj,
  pathToFile as bk,
  createTranslate as bl,
  inBrowser$1 as bm,
  getConfig as c,
  sanitizeText$2 as d,
  assignWithDepth$1 as e,
  calculateTextWidth as f,
  getAccTitle as g,
  d3select as h,
  configureSvgSize as i,
  common$1 as j,
  calculateTextHeight as k,
  log$1 as l,
  sanitizeUrl_1 as m,
  lineBreakRegex as n,
  getStylesFromArray as o,
  evaluate as p,
  interpolateToCurve as q,
  curveLinear as r,
  render,
  setAccTitle as s,
  setupGraphViewbox$1 as t,
  defaultConfig as u,
  setDiagramTitle as v,
  wrapLabel as w,
  getDiagramTitle as x,
  utils$1 as y,
  clear as z
};
