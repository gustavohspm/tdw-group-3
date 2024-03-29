/*! For license information please see main.9028dd33.js.LICENSE.txt */
(() => {
  var e = {
      540: (e) => {
        "use strict";
        e.exports = function (e, t, n, r, a, o, i, l) {
          if (!e) {
            var s;
            if (void 0 === t)
              s = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
              );
            else {
              var u = [n, r, a, o, i, l],
                c = 0;
              (s = new Error(
                t.replace(/%s/g, function () {
                  return u[c++];
                }),
              )).name = "Invariant Violation";
            }
            throw ((s.framesToPop = 1), s);
          }
        };
      },
      470: (e, t, n) => {
        "use strict";
        var r = n(390),
          a = n(124);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          j = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var D = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
              ? e
              : null;
        }
        var I,
          A = Object.assign;
        function F(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var M = !1;
        function B(e, t) {
          if (!e || M) return "";
          M = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (M = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case j:
              return "Profiler";
            case E:
              return "StrictMode";
            case P:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = A(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ee = null;
        function je(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Se) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function _e() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), je(e), t))
              for (e = 0; e < t.length; e++) je(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Pe() {}
        var Oe = !1;
        function Te(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Oe = !1), (null !== ke || null !== Ee) && (Pe(), _e());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var De = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                De = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            De = !1;
          }
        function ze(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          Ae = null,
          Fe = !1,
          Me = null,
          Be = {
            onError: function (e) {
              (Ie = !0), (Ae = e);
            },
          };
        function Ue(e, t, n, r, a, o, i, l, s) {
          (Ie = !1), (Ae = null), ze.apply(Be, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (We(e) !== e) throw Error(o(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (o &= i) && (r = dt(o));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          St,
          kt,
          Et,
          jt,
          Ct = !1,
          _t = [],
          Nt = null,
          Pt = null,
          Ot = null,
          Tt = new Map(),
          Rt = new Map(),
          Dt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function At(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void jt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Mt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Bt() {
          (Ct = !1),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Ot && Ft(Ot) && (Ot = null),
            Tt.forEach(Mt),
            Rt.forEach(Mt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Wt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < _t.length) {
            Ut(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ut(Nt, e),
              null !== Pt && Ut(Pt, e),
              null !== Ot && Ut(Ot, e),
              Tt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Dt.length;
            n++
          )
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
            At(n), null === n.blockedOn && Dt.shift();
        }
        var $t = x.ReactCurrentBatchConfig,
          Ht = !0;
        function Vt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, qt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = It(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = It(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = It(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Tt.set(o, It(Tt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Rt.set(o, It(Rt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Gt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Gt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = A({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = A({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: jn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(A({}, pn, { dataTransfer: 0 })),
          gn = an(A({}, dn, { relatedTarget: 0 })),
          vn = an(
            A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = A({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(A({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function jn() {
          return En;
        }
        var Cn = A({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? Sn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: jn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          _n = an(Cn),
          Nn = an(
            A({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Pn = an(
            A({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: jn,
            }),
          ),
          On = an(
            A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Tn = A({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Tn),
          Dn = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var In = c && "TextEvent" in window && !zn,
          An = c && (!Ln || (zn && 8 < zn && 11 >= zn)),
          Fn = String.fromCharCode(32),
          Mn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Dn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Ce(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Qn = null;
        function qn(e) {
          Fr(e, 0);
        }
        function Gn(e) {
          if (Q(xa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (Qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Qn)) {
            var t = [];
            Vn(t, Qn, e, we(e)), Te(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Qn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function jr(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Cr = jr("animationend"),
          _r = jr("animationiteration"),
          Nr = jr("animationstart"),
          Pr = jr("transitionend"),
          Or = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Rr(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Dr = 0; Dr < Tr.length; Dr++) {
          var Lr = Tr[Dr];
          Rr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Rr(Cr, "onAnimationEnd"),
          Rr(_r, "onAnimationIteration"),
          Rr(Nr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr),
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((Ue.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(o(198));
                var c = Ae;
                (Ie = !1), (Ae = null), Fe || ((Fe = !0), (Me = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Ar(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ar(a, l, u), (o = s);
                }
            }
          }
          if (Fe) throw ((e = Me), (Fe = !1), (Me = null), e);
        }
        function Mr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !De ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = o,
              a = we(n),
              i = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = _n;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case Cr:
                  case _r:
                  case Nr:
                    s = vn;
                    break;
                  case Pr:
                    s = On;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Nn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Re(h, f)) &&
                        c.push(Vr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : xa(s)),
                  (p = null == u ? l : xa(u)),
                  ((l = new c(m, h + "leave", s, n, a)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(i, l, s, c, !1),
                  null !== u && null !== d && qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? xa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Yn;
              else if (Hn(l))
                if (Xn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Vn(i, g, n, a)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, a);
              }
              var y;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Wn = !0))),
                0 < (v = Kr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Mn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Mn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Ln && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(i, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift(Vr(e, o, a)),
              null != (o = Re(e, t)) && r.push(Vr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Re(n, o)) && i.unshift(Vr(n, s, l))
                : a || (null != (s = Re(n, o)) && i.push(Vr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(la);
                  }
                : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function ja(e) {
          0 > ka || ((e.current = Sa[ka]), (Sa[ka] = null), ka--);
        }
        function Ca(e, t) {
          ka++, (Sa[ka] = e.current), (e.current = t);
        }
        var _a = {},
          Na = Ea(_a),
          Pa = Ea(!1),
          Oa = _a;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Da() {
          ja(Pa), ja(Na);
        }
        function La(e, t, n) {
          if (Na.current !== _a) throw Error(o(168));
          Ca(Na, t), Ca(Pa, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, $(e) || "Unknown", a));
          return A({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (Oa = Na.current),
            Ca(Na, e),
            Ca(Pa, Pa.current),
            !0
          );
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ja(Pa),
              ja(Na),
              Ca(Na, e))
            : ja(Pa),
            Ca(Pa, n);
        }
        var Fa = null,
          Ma = !1,
          Ba = !1;
        function Ua(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Wa() {
          if (!Ba && null !== Fa) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Ma = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Ze, Wa), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var $a = [],
          Ha = 0,
          Va = null,
          Ka = 0,
          Qa = [],
          qa = 0,
          Ga = null,
          Ya = 1,
          Xa = "";
        function Ja(e, t) {
          ($a[Ha++] = Ka), ($a[Ha++] = Va), (Va = e), (Ka = t);
        }
        function Za(e, t, n) {
          (Qa[qa++] = Ya), (Qa[qa++] = Xa), (Qa[qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Va; )
            (Va = $a[--Ha]), ($a[Ha] = null), (Ka = $a[--Ha]), ($a[Ha] = null);
          for (; e === Ga; )
            (Ga = Qa[--qa]),
              (Qa[qa] = null),
              (Xa = Qa[--qa]),
              (Qa[qa] = null),
              (Ya = Qa[--qa]),
              (Qa[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Ru(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ru(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = x.ReactCurrentBatchConfig;
        function vo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = Ea(null),
          bo = null,
          xo = null,
          wo = null;
        function So() {
          wo = xo = bo = null;
        }
        function ko(e) {
          var t = yo.current;
          ja(yo), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function jo(e, t) {
          (bo = e),
            (wo = xo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xo)
            ) {
              if (null === bo) throw Error(o(308));
              (xo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else xo = xo.next = e;
          return t;
        }
        var _o = null;
        function No(e) {
          null === _o ? (_o = [e]) : _o.push(e);
        }
        function Po(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), No(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var To = !1;
        function Ro(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Do(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Lo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), No(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Io(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ao(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fo(e, t, n, r) {
          var a = e.updateQueue;
          To = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = A({}, d, f);
                      break e;
                    case 2:
                      To = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (As |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Mo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Bo = new r.Component().refs;
        function Uo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Wo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              o = Lo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (ru(t, e, a, r), Io(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              o = Lo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (ru(t, e, a, r), Io(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Lo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (ru(t, e, r, n), Io(t, e, r));
          },
        };
        function $o(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = _a,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((a = Ra(t) ? Oa : Na.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : _a)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Vo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Bo), Ro(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = Ra(t) ? Oa : Na.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Uo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Wo.enqueueReplaceState(a, a.state, null),
              Fo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Bo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === R &&
                      Go(o) === t.type))
                ? (((r = a(t, n.props)).ref = Qo(e, t, n)), (r.return = e), r)
                : (((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Mu(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : d(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function m(a, o, l, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), g = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, l[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (o = i(v, o, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === l.length) return n(a, d), ao && Ja(a, m), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(a, l[m], s)) &&
                  ((o = i(d, o, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ao && Ja(a, m), u;
            }
            for (d = r(a, d); m < l.length; m++)
              null !== (g = h(d, a, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (o = i(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              u
            );
          }
          function g(a, l, s, u) {
            var c = z(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = l, g = (l = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = i(b, l, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), ao && Ja(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((l = i(y, l, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ao && Ja(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, g),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Go(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((o = Iu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = zu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = Qo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case S:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Mu(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case R:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, o, i, s);
              if (z(i)) return g(r, o, i, s);
              qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Fu(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Xo = Yo(!0),
          Jo = Yo(!1),
          Zo = {},
          ei = Ea(Zo),
          ti = Ea(Zo),
          ni = Ea(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ca(ni, t), Ca(ti, e), Ca(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          ja(ei), Ca(ei, t);
        }
        function oi() {
          ja(ei), ja(ti), ja(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Ca(ti, e), Ca(ei, n));
        }
        function li(e) {
          ti.current === e && (ja(ei), ja(ti));
        }
        var si = Ea(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = x.ReactCurrentDispatcher,
          pi = x.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          gi = null,
          vi = null,
          yi = !1,
          bi = !1,
          xi = 0,
          wi = 0;
        function Si() {
          throw Error(o(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (xi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (vi = gi = null),
                (t.updateQueue = null),
                (fi.current = ul),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((fi.current = il),
            (t = null !== gi && null !== gi.next),
            (hi = 0),
            (vi = gi = mi = null),
            (yi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function ji() {
          var e = 0 !== xi;
          return (xi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function _i() {
          if (null === gi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gi.next;
          var t = null === vi ? mi.memoizedState : vi.next;
          if (null !== t) (vi = t), (gi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (gi = e).memoizedState,
              baseState: gi.baseState,
              baseQueue: gi.baseQueue,
              queue: gi.queue,
              next: null,
            }),
              null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ni(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Pi(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = gi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                  (mi.lanes |= d),
                  (As |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (As |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oi(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (xl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function Ri(e, t) {
          var n = mi,
            r = _i(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (xl = !0)),
            (r = r.queue),
            Hi(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Mi(9, Li.bind(null, n, r, a, t), void 0, null),
              null === Os)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Di(n, t, a);
          }
          return a;
        }
        function Di(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Li(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ii(t) && Ai(e);
        }
        function zi(e, t, n) {
          return n(function () {
            Ii(t) && Ai(e);
          });
        }
        function Ii(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ai(e) {
          var t = Oo(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ni,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Mi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Bi() {
          return _i().memoizedState;
        }
        function Ui(e, t, n, r) {
          var a = Ci();
          (mi.flags |= e),
            (a.memoizedState = Mi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wi(e, t, n, r) {
          var a = _i();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== gi) {
            var i = gi.memoizedState;
            if (((o = i.destroy), null !== r && ki(r, i.deps)))
              return void (a.memoizedState = Mi(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Mi(1 | t, n, o, r));
        }
        function $i(e, t) {
          return Ui(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return Wi(2048, 8, e, t);
        }
        function Vi(e, t) {
          return Wi(4, 2, e, t);
        }
        function Ki(e, t) {
          return Wi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Gi() {}
        function Yi(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (As |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return _i().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Po(e, t, n, r))) {
            ru(n, e, r, tu()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), No(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Po(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function al(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var il = {
            readContext: Co,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: $i,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ui(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ci();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(o(349));
                0 !== (30 & hi) || Di(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                $i(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Mi(9, Li.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Os.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = xi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Co,
            useCallback: Yi,
            useContext: Co,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Ki,
            useMemo: Xi,
            useReducer: Pi,
            useRef: Bi,
            useState: function () {
              return Pi(Ni);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Ji(_i(), gi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ni)[0], _i().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Ri,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Co,
            useCallback: Yi,
            useContext: Co,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Ki,
            useMemo: Xi,
            useReducer: Oi,
            useRef: Bi,
            useState: function () {
              return Oi(Ni);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = _i();
              return null === gi
                ? (t.memoizedState = e)
                : Ji(t, gi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Ni)[0], _i().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Ri,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Lo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), (Ks = r)), fl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Lo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Lo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function Sl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            jo(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = ji()),
            null === e || xl
              ? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function kl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Du(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Vl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vl(e, t, a);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return _l(e, t, n, r, a);
        }
        function jl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Ls, Ds),
                (Ds |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Ls, Ds),
                  (Ds |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ca(Ls, Ds),
                (Ds |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Ls, Ds),
              (Ds |= r);
          return wl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, a) {
          var o = Ra(n) ? Oa : Na.current;
          return (
            (o = Ta(t, o)),
            jo(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = ji()),
            null === e || xl
              ? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function Nl(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            Ia(t);
          } else o = !1;
          if ((jo(t, a), null === t.stateNode))
            Hl(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Co(u))
              : (u = Ta(t, (u = Ra(n) ? Oa : Na.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Vo(t, i, r, u)),
              (To = !1);
            var f = t.memoizedState;
            (i.state = f),
              Fo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || f !== s || Pa.current || To
                ? ("function" === typeof c &&
                    (Uo(t, n, c, r), (s = t.memoizedState)),
                  (l = To || $o(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Do(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : vo(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Co(s))
                : (s = Ta(t, (s = Ra(n) ? Oa : Na.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && Vo(t, i, r, s)),
              (To = !1),
              (f = t.memoizedState),
              (i.state = f),
              Fo(t, r, i, a);
            var h = t.memoizedState;
            l !== d || f !== h || Pa.current || To
              ? ("function" === typeof p &&
                  (Uo(t, n, p, r), (h = t.memoizedState)),
                (u = To || $o(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, o, a);
        }
        function Pl(e, t, n, r, a, o) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Aa(t, n, !1), Vl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, l, o)))
              : wl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Aa(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Tl(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Rl,
          Dl,
          Ll,
          zl,
          Il = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Al(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fl(e, t, n) {
          var r,
            a = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(si, 1 & i),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Au(s, a, 0, null)),
                      (e = Iu(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Al(n)),
                      (t.memoizedState = Il),
                      e)
                    : Ml(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (r = dl(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (a = t.mode),
                      (r = Au(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((i = Iu(i, a, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Xo(t, e.child, null, l),
                      (t.child.memoizedState = Al(l)),
                      (t.memoizedState = Il),
                      i);
              if (0 === (1 & t.mode)) return Bl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Bl(e, t, l, (r = dl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Oo(e, a), ru(r, e, a, -1));
                }
                return gu(), Bl(e, t, l, (r = dl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[qa++] = Ya),
                    (Qa[qa++] = Xa),
                    (Qa[qa++] = Ga),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = Ml(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Lu(r, l))
                : ((l = Iu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Al(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Il),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Lu(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ml(e, t) {
          return (
            ((t = Au(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Bl(e, t, n, r) {
          return (
            null !== r && mo(r),
            Xo(t, e.child, null, n),
            ((e = Ml(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Wl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function $l(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Wl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ui(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Wl(t, !0, n, null, o);
                break;
              case "together":
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (As |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null;
            case 1:
            case 17:
              return Ra(t.type) && Da(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                ja(Pa),
                ja(Na),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lu(oo), (oo = null)))),
                Dl(e, t),
                Ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ll(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ql(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Mr("cancel", r), Mr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Mr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Mr(zr[a], r);
                      break;
                    case "source":
                      Mr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Mr("error", r), Mr("load", r);
                      break;
                    case "details":
                      Mr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Mr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Mr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Mr("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Mr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      K(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Rl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Mr("cancel", e), Mr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Mr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Mr(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Mr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Mr("error", e), Mr("load", e), (a = r);
                        break;
                      case "details":
                        Mr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Mr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = A({}, r, { value: void 0 })),
                          Mr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Mr("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (c = c ? c.__html : void 0) && de(e, c)
                            : "children" === i
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && fe(e, c)
                                : "number" === typeof c && fe(e, "" + c)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c &&
                                    "onScroll" === i &&
                                    Mr("scroll", e)
                                  : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (ja(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[fa] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== oo && (lu(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === zs && (zs = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                oi(),
                Dl(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                Ql(t),
                null
              );
            case 10:
              return ko(t.type._context), Ql(t), null;
            case 19:
              if ((ja(si), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > $s &&
                    ((t.flags |= 128),
                    (r = !0),
                    Kl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Ql(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > $s &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Kl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = si.current),
                  Ca(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ds) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && Da(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                ja(Pa),
                ja(Na),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (ja(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return ja(si), null;
            case 4:
              return oi(), null;
            case 10:
              return ko(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Rl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Dl = function () {}),
          (Ll = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = A({}, a, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                        ? ("string" !== typeof u && "number" !== typeof u) ||
                          (i = i || []).push(c, "" + u)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != u && "onScroll" === c && Mr("scroll", e),
                              i || s === u || (i = []))
                            : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Xl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ju(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            ju(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && ts(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || es(n, t);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, t, n),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Wt(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  ju(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Xl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(o(160));
                hs(i, l, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ju(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  ju(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                          ? de(a, f)
                          : "children" === d
                            ? fe(a, f)
                            : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    ju(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  ju(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  ju(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), ys(e);
              break;
            case 13:
              gs(t, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Ws = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || d), gs(t, e), (Xl = c))
                  : gs(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (f = Zl = d; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              ju(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : Ss(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        ju(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        ju(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), ys(e), 4 & r && ms(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              ju(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Zl = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Yl;
                var u = Xl;
                if (((Yl = i), (Xl = s) && !u))
                  for (Zl = a; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                          ? ((s.return = i), (Zl = s))
                          : ks(a);
                for (; null !== o; ) (Zl = o), xs(o, t, n), (o = o.sibling);
                (Zl = a), (Yl = l), (Xl = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Mo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Mo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xl || (512 & t.flags && os(t));
              } catch (p) {
                ju(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    ju(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ju(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    ju(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    ju(t, i, s);
                  }
              }
            } catch (s) {
              ju(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Es,
          js = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          _s = x.ReactCurrentOwner,
          Ns = x.ReactCurrentBatchConfig,
          Ps = 0,
          Os = null,
          Ts = null,
          Rs = 0,
          Ds = 0,
          Ls = Ea(0),
          zs = 0,
          Is = null,
          As = 0,
          Fs = 0,
          Ms = 0,
          Bs = null,
          Us = null,
          Ws = 0,
          $s = 1 / 0,
          Hs = null,
          Vs = !1,
          Ks = null,
          Qs = null,
          qs = !1,
          Gs = null,
          Ys = 0,
          Xs = 0,
          Js = null,
          Zs = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ps) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Rs
              ? Rs & -Rs
              : null !== go.transition
                ? (0 === eu && (eu = mt()), eu)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(o(185)));
          vt(e, n, r),
            (0 !== (2 & Ps) && e === Os) ||
              (e === Os && (0 === (2 & Ps) && (Fs |= n), 4 === zs && su(e, Rs)),
              au(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                (($s = Xe() + 500), Ma && Wa()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Os ? Rs : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ma = !0), Ua(e);
                  })(uu.bind(null, e))
                : Ua(uu.bind(null, e)),
                ia(function () {
                  0 === (6 & Ps) && Wa();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Ps))) throw Error(o(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? Rs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = Ps;
            Ps |= 2;
            var i = mu();
            for (
              (Os === e && Rs === t) ||
              ((Hs = null), ($s = Xe() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            So(),
              (Cs.current = i),
              (Ps = a),
              null !== Ts ? (t = 0) : ((Os = null), (Rs = 0), (t = zs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Is), pu(e, 0), su(e, r), au(e, Xe()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Is), pu(e, 0), su(e, r), au(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  Su(e, Us, Hs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Ws + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Su.bind(null, e, Us, Hs), t);
                    break;
                  }
                  Su(e, Us, Hs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * js(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Su.bind(null, e, Us, Hs), r);
                    break;
                  }
                  Su(e, Us, Hs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return au(e, Xe()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Bs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Us), (Us = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e);
        }
        function su(e, t) {
          for (
            t &= ~Ms,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ps)) throw Error(o(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Xe()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Is), pu(e, 0), su(e, t), au(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Us, Hs),
            au(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && (($s = Xe() + 500), Ma && Wa());
          }
        }
        function du(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Ps) && ku();
          var t = Ps;
          Ps |= 1;
          var n = Ns.transition,
            r = bt;
          try {
            if (((Ns.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ns.transition = n), 0 === (6 & (Ps = t)) && Wa();
          }
        }
        function fu() {
          (Ds = Ls.current), ja(Ls);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ts))
            for (n = Ts.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Da();
                  break;
                case 3:
                  oi(), ja(Pa), ja(Na), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  ja(si);
                  break;
                case 10:
                  ko(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ts = e = Lu(e.current, null)),
            (Rs = Ds = t),
            (zs = 0),
            (Is = null),
            (Ms = Fs = As = 0),
            (Us = Bs = null),
            null !== _o)
          ) {
            for (t = 0; t < _o.length; t++)
              if (null !== (r = (n = _o[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            _o = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ts;
            try {
              if ((So(), (fi.current = il), yi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((hi = 0),
                (vi = gi = mi = null),
                (bi = !1),
                (xi = 0),
                (_s.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (Is = t), (Ts = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Rs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, s, 0, t),
                      1 & h.mode && gl(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var v = vl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yl(v, l, s, 0, t),
                      mo(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== zs && (zs = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ao(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ao(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (x) {
              (t = x), Ts === n && null !== n && (Ts = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cs.current;
          return (Cs.current = il), null === e ? il : e;
        }
        function gu() {
          (0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === Os ||
              (0 === (268435455 & As) && 0 === (268435455 & Fs)) ||
              su(Os, Rs);
        }
        function vu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = mu();
          for ((Os === e && Rs === t) || ((Hs = null), pu(e, t)); ; )
            try {
              yu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((So(), (Ps = n), (Cs.current = r), null !== Ts))
            throw Error(o(261));
          return (Os = null), (Rs = 0), zs;
        }
        function yu() {
          for (; null !== Ts; ) xu(Ts);
        }
        function bu() {
          for (; null !== Ts && !Ge(); ) xu(Ts);
        }
        function xu(e) {
          var t = Es(e.alternate, e, Ds);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ts = t),
            (_s.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Ds))) return void (Ts = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Ts = n);
              if (null === e) return (zs = 6), void (Ts = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ts = t);
            Ts = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            a = Ns.transition;
          try {
            (Ns.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Gs);
                if (0 !== (6 & Ps)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Os && ((Ts = Os = null), (Rs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Ou(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ns.transition), (Ns.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (_s.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = l + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === i && ++d === r && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : vo(t.type, g),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              ju(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Ye(),
                    (Ps = s),
                    (bt = l),
                    (Ns.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Gs = e), (Ys = a)),
                  (i = e.pendingLanes),
                  0 === i && (Qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vs) throw ((Vs = !1), (e = Ks), (Ks = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (Ns.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Gs) {
            var e = xt(Ys),
              t = Ns.transition,
              n = bt;
            try {
              if (((Ns.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Ys = 0), 0 !== (6 & Ps)))
                  throw Error(o(331));
                var a = Ps;
                for (Ps |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zl = c; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zl = f);
                          else
                            for (; null !== Zl; ) {
                              var p = (d = Zl).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zl = y);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var x = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Zl = x);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (S) {
                          ju(s, s.return, S);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Zl = w);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  Wa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ns.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = zo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), au(e, t));
        }
        function ju(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = zo(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Rs & n) === n &&
              (4 === zs ||
              (3 === zs && (130023424 & Rs) === Rs && 500 > Xe() - Ws)
                ? pu(e, 0)
                : (Ms |= n)),
            au(e, t);
        }
        function _u(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Oo(e, t)) && (vt(e, t, n), au(e, n));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _u(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), _u(e, n);
        }
        function Ou(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ru(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Du(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zu(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Du(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Iu(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case j:
                return (
                  ((e = Ru(12, n, t, 2 | a)).elementType = j), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Ru(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Ru(19, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case D:
                return Au(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case N:
                      l = 11;
                      break e;
                    case T:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ru(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Ru(7, e, r, t)).lanes = n), e;
        }
        function Au(e, t, n, r) {
          return (
            ((e = Ru(22, e, r, t)).elementType = D),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Ru(6, e, null, t)).lanes = n), e;
        }
        function Mu(e, t, n) {
          return (
            ((t = Ru(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Bu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ru(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ro(o),
            e
          );
        }
        function Wu(e) {
          if (!e) return _a;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return za(e, n, t);
          }
          return t;
        }
        function $u(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Uu(n, r, !0, e, 0, o, 0, l, s)).context = Wu(null)),
            (n = e.current),
            ((o = Lo((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            vt(e, a, r),
            au(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            o = tu(),
            i = nu(a);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Lo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, i)) && (ru(e, a, i, o), Io(e, a, i)),
            i
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ku(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Ku(e, t), (e = e.alternate) && Ku(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ra(t.type) && Ia(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Fl(e, t, n)
                              : (Ca(si, 1 & si.current),
                                null !== (e = Vl(e, t, n)) ? e.sibling : null);
                        Ca(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return $l(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), jl(e, t, n);
                    }
                    return Vl(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = Ta(t, Na.current);
              jo(t, n), (a = Ei(null, t, r, e, a, n));
              var i = ji();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((i = !0), Ia(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ro(t),
                    (a.updater = Wo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Pl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Du(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vo(r, e)),
                  a)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, vo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _l(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Do(e, t),
                  Fo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Tl(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Tl(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Vl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Fl(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Sl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ca(yo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Pa.current) {
                      t = Vl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Lo(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Eo(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                jo(t, n),
                (r = r((a = Co(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vo((r = t.type), t.pendingProps)),
                kl(e, t, r, (a = vo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vo(r, a)),
                Hl(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Ia(t)) : (e = !1),
                jo(t, n),
                Ho(t, r, a),
                Ko(t, r, a, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return $l(e, t, n);
            case 22:
              return jl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Vu(i);
                l.call(e);
              };
            }
            Hu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vu(i);
                    o.call(e);
                  };
                }
                var i = $u(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Vu(s);
                  l.call(e);
                };
              }
              var s = Uu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Vu(i);
        }
        (Yu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Dt.length && 0 !== t && t < Dt[n].priority;
                n++
              );
              Dt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    au(t, Xe()),
                    0 === (6 & Ps) && (($s = Xe() + 500), Wa()));
                }
                break;
              case 13:
                du(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Oo(e, t);
              if (null !== n) ru(n, e, t, tu());
              Qu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (jt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      Q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cu),
          (Pe = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ce, _e, cu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = $u(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      254: (e, t, n) => {
        "use strict";
        var r = n(599);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      599: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(470));
      },
      511: (e, t, n) => {
        "use strict";
        var r = n(390),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      23: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function j(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: k.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + N(s, 0) : o),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(_, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(_, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + N((l = e[u]), u);
              s += P(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += P((l = l.value), t, a, (c = o + N(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          D = { transition: null },
          L = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: D,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = j),
          (t.createFactory = function (e) {
            var t = j.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = D.transition;
            D.transition = {};
            try {
              e();
            } finally {
              D.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      390: (e, t, n) => {
        "use strict";
        e.exports = n(23);
      },
      559: (e, t, n) => {
        "use strict";
        e.exports = n(511);
      },
      17: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), D(S);
            else {
              var t = r(c);
              null !== t && L(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), g && ((g = !1), y(C), (C = -1)), (h = !0);
          var o = p;
          try {
            for (
              x(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !P()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(u) && a(u),
                  x(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && L(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          j = null,
          C = -1,
          _ = 5,
          N = -1;
        function P() {
          return !(t.unstable_now() - N < _);
        }
        function O() {
          if (null !== j) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = j(!0, e);
            } finally {
              n ? k() : ((E = !1), (j = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            R = T.port2;
          (T.port1.onmessage = O),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            v(O, 0);
          };
        function D(e) {
          (j = e), E || ((E = !0), k());
        }
        function L(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), D(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(C), (C = -1)) : (g = !0), L(w, o - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), D(S))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      124: (e, t, n) => {
        "use strict";
        e.exports = n(17);
      },
      679: (e) => {
        e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !1;
          for (
            var l = Object.prototype.hasOwnProperty.bind(t), s = 0;
            s < o.length;
            s++
          ) {
            var u = o[s];
            if (!l(u)) return !1;
            var c = e[u],
              d = t[u];
            if (
              !1 === (a = n ? n.call(r, c, d, u) : void 0) ||
              (void 0 === a && c !== d)
            )
              return !1;
          }
          return !0;
        };
      },
      903: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = i(e, o(n)));
            }
            return e;
          }
          function o(e) {
            if ("string" === typeof e || "number" === typeof e) return e;
            if ("object" !== typeof e) return "";
            if (Array.isArray(e)) return a.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t = "";
            for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
            return t;
          }
          function i(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".7f22e78a.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "tdw-group-3:";
      n.l = (r, a, o, i) => {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4,
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 179: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++)
            (o = i[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunktdw_group_3 = self.webpackChunktdw_group_3 || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(390),
        t = n.t(e, 2),
        r = n(254);
      function a(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          )
        );
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      Object.create;
      function i(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var l = n(679),
        s = n.n(l),
        u = "-ms-",
        c = "-moz-",
        d = "-webkit-",
        f = "comm",
        p = "rule",
        h = "decl",
        m = "@import",
        g = "@keyframes",
        v = "@layer",
        y = Math.abs,
        b = String.fromCharCode,
        x = Object.assign;
      function w(e) {
        return e.trim();
      }
      function S(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function k(e, t, n) {
        return e.replace(t, n);
      }
      function E(e, t, n) {
        return e.indexOf(t, n);
      }
      function j(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function C(e, t, n) {
        return e.slice(t, n);
      }
      function _(e) {
        return e.length;
      }
      function N(e) {
        return e.length;
      }
      function P(e, t) {
        return t.push(e), e;
      }
      function O(e, t) {
        return e.filter(function (e) {
          return !S(e, t);
        });
      }
      var T = 1,
        R = 1,
        D = 0,
        L = 0,
        z = 0,
        I = "";
      function A(e, t, n, r, a, o, i, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: T,
          column: R,
          length: i,
          return: "",
          siblings: l,
        };
      }
      function F(e, t) {
        return x(
          A("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t,
        );
      }
      function M(e) {
        for (; e.root; ) e = F(e.root, { children: [e] });
        P(e, e.siblings);
      }
      function B() {
        return (z = L > 0 ? j(I, --L) : 0), R--, 10 === z && ((R = 1), T--), z;
      }
      function U() {
        return (z = L < D ? j(I, L++) : 0), R++, 10 === z && ((R = 1), T++), z;
      }
      function W() {
        return j(I, L);
      }
      function $() {
        return L;
      }
      function H(e, t) {
        return C(I, e, t);
      }
      function V(e) {
        switch (e) {
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
      function K(e) {
        return (T = R = 1), (D = _((I = e))), (L = 0), [];
      }
      function Q(e) {
        return (I = ""), e;
      }
      function q(e) {
        return w(H(L - 1, X(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function G(e) {
        for (; (z = W()) && z < 33; ) U();
        return V(e) > 2 || V(z) > 3 ? "" : " ";
      }
      function Y(e, t) {
        for (
          ;
          --t &&
          U() &&
          !(z < 48 || z > 102 || (z > 57 && z < 65) || (z > 70 && z < 97));

        );
        return H(e, $() + (t < 6 && 32 == W() && 32 == U()));
      }
      function X(e) {
        for (; U(); )
          switch (z) {
            case e:
              return L;
            case 34:
            case 39:
              34 !== e && 39 !== e && X(z);
              break;
            case 40:
              41 === e && X(e);
              break;
            case 92:
              U();
          }
        return L;
      }
      function J(e, t) {
        for (; U() && e + z !== 57 && (e + z !== 84 || 47 !== W()); );
        return "/*" + H(t, L - 1) + "*" + b(47 === e ? e : U());
      }
      function Z(e) {
        for (; !V(W()); ) U();
        return H(e, L);
      }
      function ee(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function te(e, t, n, r) {
        switch (e.type) {
          case v:
            if (e.children.length) break;
          case m:
          case h:
            return (e.return = e.return || e.value);
          case f:
            return "";
          case g:
            return (e.return = e.value + "{" + ee(e.children, r) + "}");
          case p:
            if (!_((e.value = e.props.join(",")))) return "";
        }
        return _((n = ee(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function ne(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ j(e, 0)
              ? (((((((t << 2) ^ j(e, 0)) << 2) ^ j(e, 1)) << 2) ^ j(e, 2)) <<
                  2) ^
                  j(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return d + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return d + e + e;
          case 4789:
            return c + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return d + e + c + e + u + e + e;
          case 5936:
            switch (j(e, t + 11)) {
              case 114:
                return d + e + u + k(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return d + e + u + k(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return d + e + u + k(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return d + e + u + e + e;
          case 6165:
            return d + e + u + "flex-" + e + e;
          case 5187:
            return (
              d +
              e +
              k(e, /(\w+).+(:[^]+)/, d + "box-$1$2" + u + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              d +
              e +
              u +
              "flex-item-" +
              k(e, /flex-|-self/g, "") +
              (S(e, /flex-|baseline/)
                ? ""
                : u + "grid-row-" + k(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              d +
              e +
              u +
              "flex-line-pack" +
              k(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return d + e + u + k(e, "shrink", "negative") + e;
          case 5292:
            return d + e + u + k(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              d +
              "box-" +
              k(e, "-grow", "") +
              d +
              e +
              u +
              k(e, "grow", "positive") +
              e
            );
          case 4554:
            return d + k(e, /([^-])(transform)/g, "$1" + d + "$2") + e;
          case 6187:
            return (
              k(
                k(k(e, /(zoom-|grab)/, d + "$1"), /(image-set)/, d + "$1"),
                e,
                "",
              ) + e
            );
          case 5495:
          case 3959:
            return k(e, /(image-set\([^]*)/, d + "$1$`$1");
          case 4968:
            return (
              k(
                k(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  d + "box-pack:$3" + u + "flex-pack:$3",
                ),
                /s.+-b[^;]+/,
                "justify",
              ) +
              d +
              e +
              e
            );
          case 4200:
            if (!S(e, /flex-|baseline/))
              return u + "grid-column-align" + C(e, t) + e;
            break;
          case 2592:
          case 3360:
            return u + k(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), S(e.props, /grid-\w+-end/);
              })
              ? ~E(e + (n = n[t].value), "span", 0)
                ? e
                : u +
                  k(e, "-start", "") +
                  e +
                  u +
                  "grid-row-span:" +
                  (~E(n, "span", 0)
                    ? S(n, /\d+/)
                    : +S(n, /\d+/) - +S(e, /\d+/)) +
                  ";"
              : u + k(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return S(e.props, /grid-\w+-start/);
              })
              ? e
              : u + k(k(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return k(e, /(.+)-inline(.+)/, d + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (_(e) - 1 - t > 6)
              switch (j(e, t + 1)) {
                case 109:
                  if (45 !== j(e, t + 4)) break;
                case 102:
                  return (
                    k(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        d +
                        "$2-$3$1" +
                        c +
                        (108 == j(e, t + 3) ? "$3" : "$2-$3"),
                    ) + e
                  );
                case 115:
                  return ~E(e, "stretch", 0)
                    ? ne(k(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return k(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, a, o, i, l) {
                return (
                  u +
                  n +
                  ":" +
                  r +
                  l +
                  (a ? u + n + "-span:" + (o ? i : +i - +r) + l : "") +
                  e
                );
              },
            );
          case 4949:
            if (121 === j(e, t + 6)) return k(e, ":", ":" + d) + e;
            break;
          case 6444:
            switch (j(e, 45 === j(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  k(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      d +
                      (45 === j(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      d +
                      "$2$3$1" +
                      u +
                      "$2box$3",
                  ) + e
                );
              case 100:
                return k(e, ":", ":" + u) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return k(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function re(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case h:
              return void (e.return = ne(e.value, e.length, n));
            case g:
              return ee([F(e, { value: k(e.value, "@", "@" + d) })], r);
            case p:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (S(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      M(F(e, { props: [k(t, /:(read-\w+)/, ":" + c + "$1")] })),
                        M(F(e, { props: [t] })),
                        x(e, { props: O(n, r) });
                      break;
                    case "::placeholder":
                      M(
                        F(e, {
                          props: [k(t, /:(plac\w+)/, ":" + d + "input-$1")],
                        }),
                      ),
                        M(
                          F(e, { props: [k(t, /:(plac\w+)/, ":" + c + "$1")] }),
                        ),
                        M(
                          F(e, { props: [k(t, /:(plac\w+)/, u + "input-$1")] }),
                        ),
                        M(F(e, { props: [t] })),
                        x(e, { props: O(n, r) });
                  }
                  return "";
                });
          }
      }
      function ae(e) {
        return Q(oe("", null, null, null, [""], (e = K(e)), 0, [0], e));
      }
      function oe(e, t, n, r, a, o, i, l, s) {
        for (
          var u = 0,
            c = 0,
            d = i,
            f = 0,
            p = 0,
            h = 0,
            m = 1,
            g = 1,
            v = 1,
            x = 0,
            w = "",
            S = a,
            C = o,
            N = r,
            O = w;
          g;

        )
          switch (((h = x), (x = U()))) {
            case 40:
              if (108 != h && 58 == j(O, d - 1)) {
                -1 !=
                  E((O += k(q(x), "&", "&\f")), "&\f", y(u ? l[u - 1] : 0)) &&
                  (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              O += q(x);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              O += G(h);
              break;
            case 92:
              O += Y($() - 1, 7);
              continue;
            case 47:
              switch (W()) {
                case 42:
                case 47:
                  P(le(J(U(), $()), t, n, s), s);
                  break;
                default:
                  O += "/";
              }
              break;
            case 123 * m:
              l[u++] = _(O) * v;
            case 125 * m:
            case 59:
            case 0:
              switch (x) {
                case 0:
                case 125:
                  g = 0;
                case 59 + c:
                  -1 == v && (O = k(O, /\f/g, "")),
                    p > 0 &&
                      _(O) - d &&
                      P(
                        p > 32
                          ? se(O + ";", r, n, d - 1, s)
                          : se(k(O, " ", "") + ";", r, n, d - 2, s),
                        s,
                      );
                  break;
                case 59:
                  O += ";";
                default:
                  if (
                    (P(
                      (N = ie(
                        O,
                        t,
                        n,
                        u,
                        c,
                        a,
                        l,
                        w,
                        (S = []),
                        (C = []),
                        d,
                        o,
                      )),
                      o,
                    ),
                    123 === x)
                  )
                    if (0 === c) oe(O, t, N, N, S, o, d, l, C);
                    else
                      switch (99 === f && 110 === j(O, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          oe(
                            e,
                            N,
                            N,
                            r &&
                              P(
                                ie(e, N, N, 0, 0, a, l, w, a, (S = []), d, C),
                                C,
                              ),
                            a,
                            C,
                            d,
                            l,
                            r ? S : C,
                          );
                          break;
                        default:
                          oe(O, N, N, N, [""], C, 0, l, C);
                      }
              }
              (u = c = p = 0), (m = v = 1), (w = O = ""), (d = i);
              break;
            case 58:
              (d = 1 + _(O)), (p = h);
            default:
              if (m < 1)
                if (123 == x) --m;
                else if (125 == x && 0 == m++ && 125 == B()) continue;
              switch (((O += b(x)), x * m)) {
                case 38:
                  v = c > 0 ? 1 : ((O += "\f"), -1);
                  break;
                case 44:
                  (l[u++] = (_(O) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === W() && (O += q(U())),
                    (f = W()),
                    (c = d = _((w = O += Z($())))),
                    x++;
                  break;
                case 45:
                  45 === h && 2 == _(O) && (m = 0);
              }
          }
        return o;
      }
      function ie(e, t, n, r, a, o, i, l, s, u, c, d) {
        for (
          var f = a - 1, h = 0 === a ? o : [""], m = N(h), g = 0, v = 0, b = 0;
          g < r;
          ++g
        )
          for (
            var x = 0, S = C(e, f + 1, (f = y((v = i[g])))), E = e;
            x < m;
            ++x
          )
            (E = w(v > 0 ? h[x] + " " + S : k(S, /&\f/g, h[x]))) &&
              (s[b++] = E);
        return A(e, t, n, 0 === a ? p : l, s, u, c, d);
      }
      function le(e, t, n, r) {
        return A(e, t, n, f, b(z), C(e, 2, -2), 0, r);
      }
      function se(e, t, n, r, a) {
        return A(e, t, n, h, C(e, 0, r), C(e, r + 1, -1), r, a);
      }
      const ue = {
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
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      var ce =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        de = "active",
        fe = "data-styled-version",
        pe = "6.1.8",
        he = "/*!sc*/\n",
        me = "undefined" != typeof window && "HTMLElement" in window,
        ge = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
                void 0 !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  } &&
                void 0 !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }.REACT_APP_SC_DISABLE_SPEEDY &&
                "" !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }.REACT_APP_SC_DISABLE_SPEEDY
              ? "false" !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }.REACT_APP_SC_DISABLE_SPEEDY &&
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
              : "undefined" != typeof process &&
                void 0 !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  } &&
                void 0 !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }.SC_DISABLE_SPEEDY &&
                "" !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }.SC_DISABLE_SPEEDY &&
                "false" !==
                  {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }.SC_DISABLE_SPEEDY &&
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY,
        ),
        ve = (new Set(), Object.freeze([])),
        ye = Object.freeze({});
      function be(e, t, n) {
        return (
          void 0 === n && (n = ye),
          (e.theme !== n.theme && e.theme) || t || n.theme
        );
      }
      var xe = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        we = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Se = /(^-|-$)/g;
      function ke(e) {
        return e.replace(we, "-").replace(Se, "");
      }
      var Ee = /(a)(d)/gi,
        je = 52,
        Ce = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function _e(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > je; t = (t / je) | 0) n = Ce(t % je) + n;
        return (Ce(t % je) + n).replace(Ee, "$1-$2");
      }
      var Ne,
        Pe = 5381,
        Oe = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Te = function (e) {
          return Oe(Pe, e);
        };
      function Re(e) {
        return _e(Te(e) >>> 0);
      }
      function De(e) {
        return e.displayName || e.name || "Component";
      }
      function Le(e) {
        return "string" == typeof e && !0;
      }
      var ze = "function" == typeof Symbol && Symbol.for,
        Ie = ze ? Symbol.for("react.memo") : 60115,
        Ae = ze ? Symbol.for("react.forward_ref") : 60112,
        Fe = {
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
          type: !0,
        },
        Me = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        Be = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        Ue =
          (((Ne = {})[Ae] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Ne[Ie] = Be),
          Ne);
      function We(e) {
        return ("type" in (t = e) && t.type.$$typeof) === Ie
          ? Be
          : "$$typeof" in e
            ? Ue[e.$$typeof]
            : Fe;
        var t;
      }
      var $e = Object.defineProperty,
        He = Object.getOwnPropertyNames,
        Ve = Object.getOwnPropertySymbols,
        Ke = Object.getOwnPropertyDescriptor,
        Qe = Object.getPrototypeOf,
        qe = Object.prototype;
      function Ge(e, t, n) {
        if ("string" != typeof t) {
          if (qe) {
            var r = Qe(t);
            r && r !== qe && Ge(e, r, n);
          }
          var a = He(t);
          Ve && (a = a.concat(Ve(t)));
          for (var o = We(e), i = We(t), l = 0; l < a.length; ++l) {
            var s = a[l];
            if (!(s in Me || (n && n[s]) || (i && s in i) || (o && s in o))) {
              var u = Ke(t, s);
              try {
                $e(e, s, u);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function Ye(e) {
        return "function" == typeof e;
      }
      function Xe(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function Je(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function Ze(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function et(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function tt(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !et(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e[r] = tt(e[r], t[r]);
        else if (et(t)) for (var r in t) e[r] = tt(e[r], t[r]);
        return e;
      }
      function nt(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function rt(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
        );
      }
      var at = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                  if ((a <<= 1) < 0) throw rt(16, "".concat(e));
                (this.groupSizes = new Uint32Array(a)),
                  this.groupSizes.set(n),
                  (this.length = a);
                for (var o = r; o < a; o++) this.groupSizes[o] = 0;
              }
              for (
                var i = this.indexOfGroup(e + 1), l = ((o = 0), t.length);
                o < l;
                o++
              )
                this.tag.insertRule(i, t[o]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var a = n; a < r; a++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  a = r + n,
                  o = r;
                o < a;
                o++
              )
                t += "".concat(this.tag.getRule(o)).concat(he);
              return t;
            }),
            e
          );
        })(),
        ot = new Map(),
        it = new Map(),
        lt = 1,
        st = function (e) {
          if (ot.has(e)) return ot.get(e);
          for (; it.has(lt); ) lt++;
          var t = lt++;
          return ot.set(e, t), it.set(t, e), t;
        },
        ut = function (e, t) {
          (lt = t + 1), ot.set(e, t), it.set(t, e);
        },
        ct = "style[".concat(ce, "][").concat(fe, '="').concat(pe, '"]'),
        dt = new RegExp(
          "^".concat(ce, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        ),
        ft = function (e, t, n) {
          for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)
            (r = a[o]) && e.registerName(t, r);
        },
        pt = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                he,
              ),
              a = [],
              o = 0,
              i = r.length;
            o < i;
            o++
          ) {
            var l = r[o].trim();
            if (l) {
              var s = l.match(dt);
              if (s) {
                var u = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== u &&
                  (ut(c, u), ft(e, c, s[3]), e.getTag().insertRules(u, a)),
                  (a.length = 0);
              } else a.push(l);
            }
          }
        };
      function ht() {
        return n.nc;
      }
      var mt = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            a = (function (e) {
              var t = Array.from(e.querySelectorAll("style[".concat(ce, "]")));
              return t[t.length - 1];
            })(n),
            o = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(ce, de), r.setAttribute(fe, pe);
          var i = ht();
          return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r;
        },
        gt = (function () {
          function e(e) {
            (this.element = mt(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var a = t[n];
                  if (a.ownerNode === e) return a;
                }
                throw rt(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        vt = (function () {
          function e(e) {
            (this.element = mt(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        yt = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        bt = me,
        xt = { isServer: !me, useCSSOMInjection: !ge },
        wt = (function () {
          function e(e, t, n) {
            void 0 === e && (e = ye), void 0 === t && (t = {});
            var r = this;
            (this.options = o(o({}, xt), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                me &&
                bt &&
                ((bt = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(ct), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    a &&
                      a.getAttribute(ce) !== de &&
                      (pt(e, a), a.parentNode && a.parentNode.removeChild(a));
                  }
                })(this)),
              nt(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = "",
                      a = function (n) {
                        var a = (function (e) {
                          return it.get(e);
                        })(n);
                        if (void 0 === a) return "continue";
                        var o = e.names.get(a),
                          i = t.getGroup(n);
                        if (void 0 === o || 0 === i.length) return "continue";
                        var l = ""
                            .concat(ce, ".g")
                            .concat(n, '[id="')
                            .concat(a, '"]'),
                          s = "";
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (s += "".concat(e, ","));
                          }),
                          (r += ""
                            .concat(i)
                            .concat(l, '{content:"')
                            .concat(s, '"}')
                            .concat(he));
                      },
                      o = 0;
                    o < n;
                    o++
                  )
                    a(o);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return st(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  o(o({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0,
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new yt(n) : t ? new gt(n) : new vt(n);
                  })(this.options)),
                  new at(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((st(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(st(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(st(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        St = /&/g,
        kt = /^\s*\/\/.*$/gm;
      function Et(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = Et(e.children, t)),
            e
          );
        });
      }
      function jt(e) {
        var t,
          n,
          r,
          a = void 0 === e ? ye : e,
          o = a.options,
          i = void 0 === o ? ye : o,
          l = a.plugins,
          s = void 0 === l ? ve : l,
          u = function (e, r, a) {
            return a.startsWith(n) &&
              a.endsWith(n) &&
              a.replaceAll(n, "").length > 0
              ? ".".concat(t)
              : e;
          },
          c = s.slice();
        c.push(function (e) {
          e.type === p &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(St, n).replace(r, u));
        }),
          i.prefix && c.push(re),
          c.push(te);
        var d = function (e, a, o, l) {
          void 0 === a && (a = ""),
            void 0 === o && (o = ""),
            void 0 === l && (l = "&"),
            (t = l),
            (n = a),
            (r = new RegExp("\\".concat(n, "\\b"), "g"));
          var s = e.replace(kt, ""),
            u = ae(
              o || a ? "".concat(o, " ").concat(a, " { ").concat(s, " }") : s,
            );
          i.namespace && (u = Et(u, i.namespace));
          var d,
            f = [];
          return (
            ee(
              u,
              (function (e) {
                var t = N(e);
                return function (n, r, a, o) {
                  for (var i = "", l = 0; l < t; l++)
                    i += e[l](n, r, a, o) || "";
                  return i;
                };
              })(
                c.concat(
                  ((d = function (e) {
                    return f.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && d(e));
                  }),
                ),
              ),
            ),
            f
          );
        };
        return (
          (d.hash = s.length
            ? s
                .reduce(function (e, t) {
                  return t.name || rt(15), Oe(e, t.name);
                }, Pe)
                .toString()
            : ""),
          d
        );
      }
      var Ct = new wt(),
        _t = jt(),
        Nt = e.createContext({
          shouldForwardProp: void 0,
          styleSheet: Ct,
          stylis: _t,
        }),
        Pt = (Nt.Consumer, e.createContext(void 0));
      function Ot() {
        return (0, e.useContext)(Nt);
      }
      function Tt(t) {
        var n = (0, e.useState)(t.stylisPlugins),
          r = n[0],
          a = n[1],
          o = Ot().styleSheet,
          i = (0, e.useMemo)(
            function () {
              var e = o;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target, o],
          ),
          l = (0, e.useMemo)(
            function () {
              return jt({
                options: {
                  namespace: t.namespace,
                  prefix: t.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [t.enableVendorPrefixes, t.namespace, r],
          );
        (0, e.useEffect)(
          function () {
            s()(r, t.stylisPlugins) || a(t.stylisPlugins);
          },
          [t.stylisPlugins],
        );
        var u = (0, e.useMemo)(
          function () {
            return {
              shouldForwardProp: t.shouldForwardProp,
              styleSheet: i,
              stylis: l,
            };
          },
          [t.shouldForwardProp, i, l],
        );
        return e.createElement(
          Nt.Provider,
          { value: u },
          e.createElement(Pt.Provider, { value: l }, t.children),
        );
      }
      var Rt = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = _t);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              nt(this, function () {
                throw rt(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = _t), this.name + e.hash;
            }),
            e
          );
        })(),
        Dt = function (e) {
          return e >= "A" && e <= "Z";
        };
      function Lt(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && "-" === r && "-" === e[0]) return e;
          Dt(r) ? (t += "-" + r.toLowerCase()) : (t += r);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var zt = function (e) {
          return null == e || !1 === e || "" === e;
        },
        It = function (e) {
          var t,
            n,
            r = [];
          for (var a in e) {
            var o = e[a];
            e.hasOwnProperty(a) &&
              !zt(o) &&
              ((Array.isArray(o) && o.isCss) || Ye(o)
                ? r.push("".concat(Lt(a), ":"), o, ";")
                : et(o)
                  ? r.push.apply(
                      r,
                      i(i(["".concat(a, " {")], It(o), !1), ["}"], !1),
                    )
                  : r.push(
                      ""
                        .concat(Lt(a), ": ")
                        .concat(
                          ((t = a),
                          null == (n = o) || "boolean" == typeof n || "" === n
                            ? ""
                            : "number" != typeof n ||
                                0 === n ||
                                t in ue ||
                                t.startsWith("--")
                              ? String(n).trim()
                              : "".concat(n, "px")),
                          ";",
                        ),
                    ));
          }
          return r;
        };
      function At(e, t, n, r) {
        return zt(e)
          ? []
          : Xe(e)
            ? [".".concat(e.styledComponentId)]
            : Ye(e)
              ? !Ye((a = e)) ||
                (a.prototype && a.prototype.isReactComponent) ||
                !t
                ? [e]
                : At(e(t), t, n, r)
              : e instanceof Rt
                ? n
                  ? (e.inject(n, r), [e.getName(r)])
                  : [e]
                : et(e)
                  ? It(e)
                  : Array.isArray(e)
                    ? Array.prototype.concat.apply(
                        ve,
                        e.map(function (e) {
                          return At(e, t, n, r);
                        }),
                      )
                    : [e.toString()];
        var a;
      }
      function Ft(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (Ye(n) && !Xe(n)) return !1;
        }
        return !0;
      }
      var Mt = Te(pe),
        Bt = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && Ft(e)),
              (this.componentId = t),
              (this.baseHash = Oe(Mt, t)),
              (this.baseStyle = n),
              wt.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  r = Je(r, this.staticRulesId);
                else {
                  var a = Ze(At(this.rules, e, t, n)),
                    o = _e(Oe(this.baseHash, a) >>> 0);
                  if (!t.hasNameForId(this.componentId, o)) {
                    var i = n(a, ".".concat(o), void 0, this.componentId);
                    t.insertRules(this.componentId, o, i);
                  }
                  (r = Je(r, o)), (this.staticRulesId = o);
                }
              else {
                for (
                  var l = Oe(this.baseHash, n.hash), s = "", u = 0;
                  u < this.rules.length;
                  u++
                ) {
                  var c = this.rules[u];
                  if ("string" == typeof c) s += c;
                  else if (c) {
                    var d = Ze(At(c, e, t, n));
                    (l = Oe(l, d + u)), (s += d);
                  }
                }
                if (s) {
                  var f = _e(l >>> 0);
                  t.hasNameForId(this.componentId, f) ||
                    t.insertRules(
                      this.componentId,
                      f,
                      n(s, ".".concat(f), void 0, this.componentId),
                    ),
                    (r = Je(r, f));
                }
              }
              return r;
            }),
            e
          );
        })(),
        Ut = e.createContext(void 0);
      Ut.Consumer;
      var Wt = {};
      new Set();
      function $t(t, n, r) {
        var a = Xe(t),
          i = t,
          l = !Le(t),
          s = n.attrs,
          u = void 0 === s ? ve : s,
          c = n.componentId,
          d =
            void 0 === c
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : ke(e);
                  Wt[n] = (Wt[n] || 0) + 1;
                  var r = "".concat(n, "-").concat(Re(pe + n + Wt[n]));
                  return t ? "".concat(t, "-").concat(r) : r;
                })(n.displayName, n.parentComponentId)
              : c,
          f = n.displayName,
          p =
            void 0 === f
              ? (function (e) {
                  return Le(e)
                    ? "styled.".concat(e)
                    : "Styled(".concat(De(e), ")");
                })(t)
              : f,
          h =
            n.displayName && n.componentId
              ? "".concat(ke(n.displayName), "-").concat(n.componentId)
              : n.componentId || d,
          m = a && i.attrs ? i.attrs.concat(u).filter(Boolean) : u,
          g = n.shouldForwardProp;
        if (a && i.shouldForwardProp) {
          var v = i.shouldForwardProp;
          if (n.shouldForwardProp) {
            var y = n.shouldForwardProp;
            g = function (e, t) {
              return v(e, t) && y(e, t);
            };
          } else g = v;
        }
        var b = new Bt(r, h, a ? i.componentStyle : void 0);
        function x(t, n) {
          return (function (t, n, r) {
            var a = t.attrs,
              i = t.componentStyle,
              l = t.defaultProps,
              s = t.foldedComponentIds,
              u = t.styledComponentId,
              c = t.target,
              d = e.useContext(Ut),
              f = Ot(),
              p = t.shouldForwardProp || f.shouldForwardProp,
              h = be(n, d, l) || ye,
              m = (function (e, t, n) {
                for (
                  var r,
                    a = o(o({}, t), { className: void 0, theme: n }),
                    i = 0;
                  i < e.length;
                  i += 1
                ) {
                  var l = Ye((r = e[i])) ? r(a) : r;
                  for (var s in l)
                    a[s] =
                      "className" === s
                        ? Je(a[s], l[s])
                        : "style" === s
                          ? o(o({}, a[s]), l[s])
                          : l[s];
                }
                return (
                  t.className && (a.className = Je(a.className, t.className)), a
                );
              })(a, n, h),
              g = m.as || c,
              v = {};
            for (var y in m)
              void 0 === m[y] ||
                "$" === y[0] ||
                "as" === y ||
                ("theme" === y && m.theme === h) ||
                ("forwardedAs" === y
                  ? (v.as = m.forwardedAs)
                  : (p && !p(y, g)) || (v[y] = m[y]));
            var b = (function (e, t) {
                var n = Ot();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(i, m),
              x = Je(s, u);
            return (
              b && (x += " " + b),
              m.className && (x += " " + m.className),
              (v[Le(g) && !xe.has(g) ? "class" : "className"] = x),
              (v.ref = r),
              (0, e.createElement)(g, v)
            );
          })(w, t, n);
        }
        x.displayName = p;
        var w = e.forwardRef(x);
        return (
          (w.attrs = m),
          (w.componentStyle = b),
          (w.displayName = p),
          (w.shouldForwardProp = g),
          (w.foldedComponentIds = a
            ? Je(i.foldedComponentIds, i.styledComponentId)
            : ""),
          (w.styledComponentId = h),
          (w.target = a ? i.target : t),
          Object.defineProperty(w, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = a
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var r = 0, a = t; r < a.length; r++) tt(e, a[r], !0);
                    return e;
                  })({}, i.defaultProps, e)
                : e;
            },
          }),
          nt(w, function () {
            return ".".concat(w.styledComponentId);
          }),
          l &&
            Ge(w, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          w
        );
      }
      function Ht(e, t) {
        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      }
      var Vt = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function Kt(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (Ye(e) || et(e)) return Vt(At(Ht(ve, i([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && "string" == typeof r[0]
          ? At(r)
          : Vt(At(Ht(r, t)));
      }
      function Qt(e, t, n) {
        if ((void 0 === n && (n = ye), !t)) throw rt(1, t);
        var r = function (r) {
          for (var a = [], o = 1; o < arguments.length; o++)
            a[o - 1] = arguments[o];
          return e(t, n, Kt.apply(void 0, i([r], a, !1)));
        };
        return (
          (r.attrs = function (r) {
            return Qt(
              e,
              t,
              o(o({}, n), {
                attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
              }),
            );
          }),
          (r.withConfig = function (r) {
            return Qt(e, t, o(o({}, n), r));
          }),
          r
        );
      }
      var qt = function (e) {
          return Qt($t, e);
        },
        Gt = qt;
      xe.forEach(function (e) {
        Gt[e] = qt(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Ft(e)),
            wt.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, t, n, r) {
          var a = r(Ze(At(this.rules, t, n, r)), ""),
            o = this.componentId + e;
          n.insertRules(o, o, a);
        }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && wt.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          });
      })();
      function Yt(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = Ze(Kt.apply(void 0, i([e], t, !1))),
          a = Re(r);
        return new Rt(a, r);
      }
      (function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString(),
              n = ht(),
              r = Ze(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(ce, '="true"'),
                  "".concat(fe, '="').concat(pe, '"'),
                ].filter(Boolean),
                " ",
              );
            return "<style ".concat(r, ">").concat(e, "</style>");
          }),
            (this.getStyleTags = function () {
              if (t.sealed) throw rt(2);
              return t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (t.sealed) throw rt(2);
              var r =
                  (((n = {})[ce] = ""),
                  (n[fe] = pe),
                  (n.dangerouslySetInnerHTML = {
                    __html: t.instance.toString(),
                  }),
                  n),
                a = ht();
              return (
                a && (r.nonce = a),
                [e.createElement("style", o({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new wt({ isServer: !0 })),
            (this.sealed = !1);
        }
        (t.prototype.collectStyles = function (t) {
          if (this.sealed) throw rt(2);
          return e.createElement(Tt, { sheet: this.instance }, t);
        }),
          (t.prototype.interleaveWithNodeStream = function (e) {
            throw rt(3);
          });
      })(),
        "__sc-".concat(ce, "__");
      var Xt,
        Jt = n(599),
        Zt = n.t(Jt, 2);
      function en() {
        return (
          (en = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          en.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(Xt || (Xt = {}));
      const tn = "popstate";
      function nn(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function rn(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function an(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function on(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          en(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? sn(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function ln(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function sn(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function un(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          i = a.history,
          l = Xt.Pop,
          s = null,
          u = c();
        function c() {
          return (i.state || { idx: null }).idx;
        }
        function d() {
          l = Xt.Pop;
          let e = c(),
            t = null == e ? null : e - u;
          (u = e), s && s({ action: l, location: p.location, delta: t });
        }
        function f(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : ln(e);
          return (
            nn(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == u && ((u = 0), i.replaceState(en({}, i.state, { idx: u }), ""));
        let p = {
          get action() {
            return l;
          },
          get location() {
            return e(a, i);
          },
          listen(e) {
            if (s)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(tn, d),
              (s = e),
              () => {
                a.removeEventListener(tn, d), (s = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: f,
          encodeLocation(e) {
            let t = f(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = Xt.Push;
            let r = on(p.location, e, t);
            n && n(r, e), (u = c() + 1);
            let d = an(r, u),
              f = p.createHref(r);
            try {
              i.pushState(d, "", f);
            } catch (h) {
              if (h instanceof DOMException && "DataCloneError" === h.name)
                throw h;
              a.location.assign(f);
            }
            o && s && s({ action: l, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            l = Xt.Replace;
            let r = on(p.location, e, t);
            n && n(r, e), (u = c());
            let a = an(r, u),
              d = p.createHref(r);
            i.replaceState(a, "", d),
              o && s && s({ action: l, location: p.location, delta: 0 });
          },
          go: (e) => i.go(e),
        };
        return p;
      }
      var cn;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(cn || (cn = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function dn(e, t, n) {
        void 0 === n && (n = "/");
        let r = jn(("string" === typeof t ? sn(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = fn(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(a);
        let o = null;
        for (let i = 0; null == o && i < a.length; ++i) o = Sn(a[i], En(r));
        return o;
      }
      function fn(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (nn(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = On([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (nn(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            fn(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: wn(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of pn(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function pn(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = pn(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const hn = /^:[\w-]+$/,
        mn = 3,
        gn = 2,
        vn = 1,
        yn = 10,
        bn = -2,
        xn = (e) => "*" === e;
      function wn(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(xn) && (r += bn),
          t && (r += gn),
          n
            .filter((e) => !xn(e))
            .reduce((e, t) => e + (hn.test(t) ? mn : "" === t ? vn : yn), r)
        );
      }
      function Sn(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          o = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            l = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            u = kn(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              s,
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          o.push({
            params: r,
            pathname: On([a, u.pathname]),
            pathnameBase: Tn(On([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = On([a, u.pathnameBase]));
        }
        return o;
      }
      function kn(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            rn(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] =
                a && !s
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          rn(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ").",
                          ),
                          e
                        );
                      }
                    })(s || "", r)),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function En(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            rn(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function jn(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Cn(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function _n(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function Nn(e, t) {
        let n = _n(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function Pn(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = sn(e))
            : ((a = en({}, e)),
              nn(
                !a.pathname || !a.pathname.includes("?"),
                Cn("?", "pathname", "search", a),
              ),
              nn(
                !a.pathname || !a.pathname.includes("#"),
                Cn("#", "pathname", "hash", a),
              ),
              nn(
                !a.search || !a.search.includes("#"),
                Cn("#", "search", "hash", a),
              ));
        let o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (null == l) o = n;
        else {
          let e = t.length - 1;
          if (!r && l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let s = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? sn(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: Rn(r), hash: Dn(a) };
          })(a, o),
          u = l && "/" !== l && l.endsWith("/"),
          c = (i || "." === l) && n.endsWith("/");
        return s.pathname.endsWith("/") || (!u && !c) || (s.pathname += "/"), s;
      }
      const On = (e) => e.join("/").replace(/\/\/+/g, "/"),
        Tn = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        Rn = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        Dn = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function Ln(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const zn = ["post", "put", "patch", "delete"],
        In = (new Set(zn), ["get", ...zn]);
      new Set(In), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function An() {
        return (
          (An = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          An.apply(this, arguments)
        );
      }
      const Fn = e.createContext(null);
      const Mn = e.createContext(null);
      const Bn = e.createContext(null);
      const Un = e.createContext(null);
      const Wn = e.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1,
      });
      const $n = e.createContext(null);
      function Hn() {
        return null != e.useContext(Un);
      }
      function Vn() {
        return Hn() || nn(!1), e.useContext(Un).location;
      }
      function Kn(t) {
        e.useContext(Bn).static || e.useLayoutEffect(t);
      }
      function Qn() {
        let { isDataRoute: t } = e.useContext(Wn);
        return t
          ? (function () {
              let { router: t } = rr(tr.UseNavigateStable),
                n = or(nr.UseNavigateStable),
                r = e.useRef(!1);
              Kn(() => {
                r.current = !0;
              });
              let a = e.useCallback(
                function (e, a) {
                  void 0 === a && (a = {}),
                    r.current &&
                      ("number" === typeof e
                        ? t.navigate(e)
                        : t.navigate(e, An({ fromRouteId: n }, a)));
                },
                [t, n],
              );
              return a;
            })()
          : (function () {
              Hn() || nn(!1);
              let t = e.useContext(Fn),
                { basename: n, future: r, navigator: a } = e.useContext(Bn),
                { matches: o } = e.useContext(Wn),
                { pathname: i } = Vn(),
                l = JSON.stringify(Nn(o, r.v7_relativeSplatPath)),
                s = e.useRef(!1);
              Kn(() => {
                s.current = !0;
              });
              let u = e.useCallback(
                function (e, r) {
                  if ((void 0 === r && (r = {}), !s.current)) return;
                  if ("number" === typeof e) return void a.go(e);
                  let o = Pn(e, JSON.parse(l), i, "path" === r.relative);
                  null == t &&
                    "/" !== n &&
                    (o.pathname = "/" === o.pathname ? n : On([n, o.pathname])),
                    (r.replace ? a.replace : a.push)(o, r.state, r);
                },
                [n, a, l, i, t],
              );
              return u;
            })();
      }
      function qn(t, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = e.useContext(Bn),
          { matches: o } = e.useContext(Wn),
          { pathname: i } = Vn(),
          l = JSON.stringify(Nn(o, a.v7_relativeSplatPath));
        return e.useMemo(
          () => Pn(t, JSON.parse(l), i, "path" === r),
          [t, l, i, r],
        );
      }
      function Gn(t, n, r, a) {
        Hn() || nn(!1);
        let { navigator: o } = e.useContext(Bn),
          { matches: i } = e.useContext(Wn),
          l = i[i.length - 1],
          s = l ? l.params : {},
          u = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let c,
          d = Vn();
        if (n) {
          var f;
          let e = "string" === typeof n ? sn(n) : n;
          "/" === u ||
            (null == (f = e.pathname) ? void 0 : f.startsWith(u)) ||
            nn(!1),
            (c = e);
        } else c = d;
        let p = c.pathname || "/",
          h = dn(t, { pathname: "/" === u ? p : p.slice(u.length) || "/" });
        let m = er(
          h &&
            h.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: On([
                  u,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? u
                    : On([
                        u,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          i,
          r,
          a,
        );
        return n && m
          ? e.createElement(
              Un.Provider,
              {
                value: {
                  location: An(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    c,
                  ),
                  navigationType: Xt.Pop,
                },
              },
              m,
            )
          : m;
      }
      function Yn() {
        let t = (function () {
            var t;
            let n = e.useContext($n),
              r = ar(nr.UseRouteError),
              a = or(nr.UseRouteError);
            if (void 0 !== n) return n;
            return null == (t = r.errors) ? void 0 : t[a];
          })(),
          n = Ln(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
              ? t.message
              : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("h2", null, "Unexpected Application Error!"),
          e.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? e.createElement("pre", { style: o }, r) : null,
          null,
        );
      }
      const Xn = e.createElement(Yn, null);
      class Jn extends e.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? e.createElement(
                Wn.Provider,
                { value: this.props.routeContext },
                e.createElement($n.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function Zn(t) {
        let { routeContext: n, match: r, children: a } = t,
          o = e.useContext(Fn);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(Wn.Provider, { value: n }, a)
        );
      }
      function er(t, n, r, a) {
        var o;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == t)
        ) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          t = r.matches;
        }
        let l = t,
          s = null == (o = r) ? void 0 : o.errors;
        if (null != s) {
          let e = l.findIndex(
            (e) => e.route.id && (null == s ? void 0 : s[e.route.id]),
          );
          e >= 0 || nn(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (r && a && a.v7_partialHydration)
          for (let e = 0; e < l.length; e++) {
            let t = l[e];
            if (
              ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
                (c = e),
              t.route.id)
            ) {
              let { loaderData: e, errors: n } = r,
                a =
                  t.route.loader &&
                  void 0 === e[t.route.id] &&
                  (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                (u = !0), (l = c >= 0 ? l.slice(0, c + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((t, a, o) => {
          let i,
            d = !1,
            f = null,
            p = null;
          var h;
          r &&
            ((i = s && a.route.id ? s[a.route.id] : void 0),
            (f = a.route.errorElement || Xn),
            u &&
              (c < 0 && 0 === o
                ? ((h = "route-fallback"),
                  !1 || ir[h] || (ir[h] = !0),
                  (d = !0),
                  (p = null))
                : c === o &&
                  ((d = !0), (p = a.route.hydrateFallbackElement || null))));
          let m = n.concat(l.slice(0, o + 1)),
            g = () => {
              let n;
              return (
                (n = i
                  ? f
                  : d
                    ? p
                    : a.route.Component
                      ? e.createElement(a.route.Component, null)
                      : a.route.element
                        ? a.route.element
                        : t),
                e.createElement(Zn, {
                  match: a,
                  routeContext: {
                    outlet: t,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? e.createElement(Jn, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var tr = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(tr || {}),
        nr = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(nr || {});
      function rr(t) {
        let n = e.useContext(Fn);
        return n || nn(!1), n;
      }
      function ar(t) {
        let n = e.useContext(Mn);
        return n || nn(!1), n;
      }
      function or(t) {
        let n = (function (t) {
            let n = e.useContext(Wn);
            return n || nn(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || nn(!1), r.route.id;
      }
      const ir = {};
      t.startTransition;
      function lr(e) {
        nn(!1);
      }
      function sr(t) {
        let {
          basename: n = "/",
          children: r = null,
          location: a,
          navigationType: o = Xt.Pop,
          navigator: i,
          static: l = !1,
          future: s,
        } = t;
        Hn() && nn(!1);
        let u = n.replace(/^\/*/, "/"),
          c = e.useMemo(
            () => ({
              basename: u,
              navigator: i,
              static: l,
              future: An({ v7_relativeSplatPath: !1 }, s),
            }),
            [u, s, i, l],
          );
        "string" === typeof a && (a = sn(a));
        let {
            pathname: d = "/",
            search: f = "",
            hash: p = "",
            state: h = null,
            key: m = "default",
          } = a,
          g = e.useMemo(() => {
            let e = jn(d, u);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: f,
                    hash: p,
                    state: h,
                    key: m,
                  },
                  navigationType: o,
                };
          }, [u, d, f, p, h, m, o]);
        return null == g
          ? null
          : e.createElement(
              Bn.Provider,
              { value: c },
              e.createElement(Un.Provider, { children: r, value: g }),
            );
      }
      function ur(e) {
        let { children: t, location: n } = e;
        return Gn(cr(t), n);
      }
      new Promise(() => {});
      e.Component;
      function cr(t, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          e.Children.forEach(t, (t, a) => {
            if (!e.isValidElement(t)) return;
            let o = [...n, a];
            if (t.type === e.Fragment)
              return void r.push.apply(r, cr(t.props.children, o));
            t.type !== lr && nn(!1),
              t.props.index && t.props.children && nn(!1);
            let i = {
              id: t.props.id || o.join("-"),
              caseSensitive: t.props.caseSensitive,
              element: t.props.element,
              Component: t.props.Component,
              index: t.props.index,
              path: t.props.path,
              loader: t.props.loader,
              action: t.props.action,
              errorElement: t.props.errorElement,
              ErrorBoundary: t.props.ErrorBoundary,
              hasErrorBoundary:
                null != t.props.ErrorBoundary || null != t.props.errorElement,
              shouldRevalidate: t.props.shouldRevalidate,
              handle: t.props.handle,
              lazy: t.props.lazy,
            };
            t.props.children && (i.children = cr(t.props.children, o)),
              r.push(i);
          }),
          r
        );
      }
      function dr() {
        return (
          (dr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          dr.apply(this, arguments)
        );
      }
      function fr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const pr = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      new Map();
      const hr = t.startTransition;
      Zt.flushSync, t.useId;
      function mr(t) {
        let { basename: n, children: r, future: a, window: o } = t,
          i = e.useRef();
        null == i.current &&
          (i.current = (function (e) {
            return (
              void 0 === e && (e = {}),
              un(
                function (e, t) {
                  let { pathname: n, search: r, hash: a } = e.location;
                  return on(
                    "",
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || "default",
                  );
                },
                function (e, t) {
                  return "string" === typeof t ? t : ln(t);
                },
                null,
                e,
              )
            );
          })({ window: o, v5Compat: !0 }));
        let l = i.current,
          [s, u] = e.useState({ action: l.action, location: l.location }),
          { v7_startTransition: c } = a || {},
          d = e.useCallback(
            (e) => {
              c && hr ? hr(() => u(e)) : u(e);
            },
            [u, c],
          );
        return (
          e.useLayoutEffect(() => l.listen(d), [l, d]),
          e.createElement(sr, {
            basename: n,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: l,
            future: a,
          })
        );
      }
      const gr =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        vr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        yr = e.forwardRef(function (t, n) {
          let r,
            {
              onClick: a,
              relative: o,
              reloadDocument: i,
              replace: l,
              state: s,
              target: u,
              to: c,
              preventScrollReset: d,
              unstable_viewTransition: f,
            } = t,
            p = fr(t, pr),
            { basename: h } = e.useContext(Bn),
            m = !1;
          if ("string" === typeof c && vr.test(c) && ((r = c), gr))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                n = jn(t.pathname, h);
              t.origin === e.origin && null != n
                ? (c = n + t.search + t.hash)
                : (m = !0);
            } catch (y) {}
          let g = (function (t, n) {
              let { relative: r } = void 0 === n ? {} : n;
              Hn() || nn(!1);
              let { basename: a, navigator: o } = e.useContext(Bn),
                { hash: i, pathname: l, search: s } = qn(t, { relative: r }),
                u = l;
              return (
                "/" !== a && (u = "/" === l ? a : On([a, l])),
                o.createHref({ pathname: u, search: s, hash: i })
              );
            })(c, { relative: o }),
            v = (function (t, n) {
              let {
                  target: r,
                  replace: a,
                  state: o,
                  preventScrollReset: i,
                  relative: l,
                  unstable_viewTransition: s,
                } = void 0 === n ? {} : n,
                u = Qn(),
                c = Vn(),
                d = qn(t, { relative: l });
              return e.useCallback(
                (e) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(e, r)
                  ) {
                    e.preventDefault();
                    let n = void 0 !== a ? a : ln(c) === ln(d);
                    u(t, {
                      replace: n,
                      state: o,
                      preventScrollReset: i,
                      relative: l,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, d, a, o, r, t, i, l, s],
              );
            })(c, {
              replace: l,
              state: s,
              target: u,
              preventScrollReset: d,
              relative: o,
              unstable_viewTransition: f,
            });
          return e.createElement(
            "a",
            dr({}, p, {
              href: r || g,
              onClick:
                m || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || v(e);
                    },
              ref: n,
              target: u,
            }),
          );
        });
      var br, xr;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(br || (br = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(xr || (xr = {}));
      var wr,
        Sr,
        kr = n(559);
      const Er = Gt.div(
          wr ||
            (wr = a([
              "\n  display: inline-block;\n  height: 29px;\n  margin-right: 16px;\n  position: relative;\n  width: 28px;\n",
            ])),
        ),
        jr = Gt.a(
          Sr ||
            (Sr = a([
              "\n  display: block;\n  width: 28px;\n  height: 16px;\n  cursor: pointer;\n  text-decoration: none;\n\n  &:after,\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    height: 4px;\n    width: 100%;\n    background-color: var(--black-palette-color);\n    transition: all ease-out 0.3s;\n  }\n\n  &:after {\n    top: 8px;\n  }\n\n  i {\n    display: block;\n    text-indent: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    height: 4px;\n    background-color: var(--black-palette-color);\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    transition: all ease-out 0.1s;\n  }\n\n  &.active-menu {\n    &:after {\n      transform: rotate(-45deg);\n      top: 50%;\n    }\n\n    &:before {\n      transform: rotate(45deg);\n      top: 50%;\n    }\n\n    i {\n      opacity: 0;\n    }\n  }\n\n  @media (min-width: 810px) {\n    i {\n      display: none;\n    }\n\n    &:after,\n    &:before {\n      height: 4px;\n    }\n  }\n\n  ",
              "\n",
            ])),
          (e) =>
            e.isMenuOpen &&
            "\n    i {\n      display: none;\n    }\n\n    &:after {\n      transform: rotate(-45deg);\n      top: 50%;\n    }\n\n    &:before {\n      transform: rotate(45deg);\n      top: 50%;\n    }\n  ",
        ),
        Cr = (e) => {
          let { isMenuOpen: t, toggleMenu: n } = e;
          return (0, kr.jsx)(Er, {
            children: (0, kr.jsx)(jr, {
              href: "#main-nav",
              className: t ? "active-menu" : "",
              onClick: n,
              isMenuOpen: t,
              children: (0, kr.jsx)("i", { children: "Menu" }),
            }),
          });
        };
      var _r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Nr = e.createContext && e.createContext(_r),
        Pr = ["attr", "size", "title"];
      function Or(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Tr() {
        return (
          (Tr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Tr.apply(this, arguments)
        );
      }
      function Rr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Dr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Rr(Object(n), !0).forEach(function (t) {
                Lr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Rr(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Lr(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === typeof t ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function zr(t) {
        return (
          t &&
          t.map((t, n) =>
            e.createElement(t.tag, Dr({ key: n }, t.attr), zr(t.child)),
          )
        );
      }
      function Ir(t) {
        return (n) =>
          e.createElement(Ar, Tr({ attr: Dr({}, t.attr) }, n), zr(t.child));
      }
      function Ar(t) {
        var n = (n) => {
          var r,
            { attr: a, size: o, title: i } = t,
            l = Or(t, Pr),
            s = o || n.size || "1em";
          return (
            n.className && (r = n.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            e.createElement(
              "svg",
              Tr(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                l,
                {
                  className: r,
                  style: Dr(
                    Dr({ color: t.color || n.color }, n.style),
                    t.style,
                  ),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              i && e.createElement("title", null, i),
              t.children,
            )
          );
        };
        return void 0 !== Nr
          ? e.createElement(Nr.Consumer, null, (e) => n(e))
          : n(_r);
      }
      function Fr(e) {
        return Ir({
          tag: "svg",
          attr: { viewBox: "0 0 320 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
              },
              child: [],
            },
          ],
        })(e);
      }
      function Mr(e) {
        return Ir({
          tag: "svg",
          attr: { viewBox: "0 0 320 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
              },
              child: [],
            },
          ],
        })(e);
      }
      function Br(e) {
        return Ir({
          tag: "svg",
          attr: { viewBox: "0 0 352 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
              },
              child: [],
            },
          ],
        })(e);
      }
      function Ur(e) {
        return Ir({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
              },
              child: [],
            },
          ],
        })(e);
      }
      const Wr = JSON.parse(
          '{"globalTexts":{"language":"English","flag":"../assets/en.svg","next":"Next","previous":"Previous","search":"Search","myAccount":"My Account"},"splashScreen":{"firstImage":"../assets/firstInfoEN.jpeg","secondImage":"../assets/secondInfoEN.jpeg","thirdImage":"../assets/thirdInfoEN.jpeg"},"menu":{"certifications":{"header":"Certifications","item1":"Organic Material Certification","item2":"Fair Trade and Ethical Manufacturing","item3":"Environmental Impact and Resource Responsibility","item4":"Animal Welfare Certification"},"woman":{"header":"Woman","item0":"View the entire session","item1":"Trousers","item2":"Dresses","item3":"Shoes","item4":"Bags","item5":"Blouses","item6":"Coats"},"man":{"header":"Man"},"kids":{"header":"Kids"},"brands":{"header":"Brands"}},"home":{},"shoppingCart":{},"profile":{},"clothDetails":{},"sustainableCategories":{}}',
        ),
        $r = JSON.parse(
          '{"globalTexts":{"language":"Espa\xf1ol","flag":"../assets/es.svg","next":"Pr\xf3ximo","previous":"Anterior","search":"B\xfasqueda","myAccount":"Mi Cuenta"},"splashScreen":{"firstImage":"../assets/firstInfoES.jpeg","secondImage":"../assets/secondInfoES.jpeg","thirdImage":"../assets/thirdInfoES.jpeg"},"menu":{"certifications":{"header":"Certificaciones","item1":"Certificaci\xf3n de Material Org\xe1nico","item2":"Comercio Justo y Fabricaci\xf3n \xc9tica","item3":"Impacto Ambiental y Responsabilidad con Recursos","item4":"Certificaci\xf3n de Bienestar Animal"},"woman":{"header":"Mujer","item0":"Ver toda la sesi\xf3n","item1":"Pantalones","item2":"Vestidos","item3":"Zapatos","item4":"Bolsos","item5":"Blusas","item6":"Abrigos"},"man":{"header":"Hombre"},"kids":{"header":"Ni\xf1os"},"brands":{"header":"Marcas"}},"home":{},"shoppingCart":{},"profile":{},"clothDetails":{},"sustainableCategories":{}}',
        ),
        Hr = JSON.parse(
          '{"globalTexts":{"language":"Portugu\xeas","flag":"../assets/pt.svg","next":"Pr\xf3ximo","previous":"Anterior","search":"Pesquisar","myAccount":"Minha Conta"},"splashScreen":{"firstImage":"../assets/firstInfoPT.jpeg","secondImage":"../assets/secondInfoPT.jpeg","thirdImage":"../assets/thirdInfoPT.jpeg"},"menu":{"certifications":{"header":"Certifica\xe7\xf5es","item1":"Certifica\xe7\xe3o de Material Org\xe2nico","item2":"Com\xe9rcio Justo e Fabrica\xe7\xe3o \xc9tica","item3":"Impacto Ambiental e Responsabilidade com Recursos","item4":"Certifica\xe7\xe3o de Bem-Estar Animal"},"woman":{"header":"Mulher","item0":"Ver toda a sess\xe3o","item1":"Cal\xe7as","item2":"Vestidos","item3":"Sapatos","item4":"Bolsas","item5":"Camisolas","item6":"Casacos"},"man":{"header":"Homem"},"kids":{"header":"Infantil"},"brands":{"header":"Marcas"}},"home":{},"shoppingCart":{},"profile":{},"clothDetails":{},"sustainableCategories":{}}',
        );
      const Vr = n.p + "static/media/en.4afe1f8078ab8f57c3739b9fa8a3423f.svg";
      const Kr = n.p + "static/media/es.36af038c044fdb72ff7a8b3c53a2cc06.svg";
      const Qr = n.p + "static/media/pt.af3d0a240c96ac4cbd15a20a814d4443.svg",
        qr = (0, e.createContext)(),
        Gr = () => {
          const t = (0, e.useContext)(qr);
          if (!t)
            throw new Error(
              "useLanguage must be used within a LanguageProvider",
            );
          return t;
        },
        Yr = (t) => {
          let { children: n } = t;
          const [r, a] = (0, e.useState)(Wr),
            [o, i] = (0, e.useState)(0),
            l = ["en", "es", "pt"],
            s = (e) => {
              switch (e) {
                case "en":
                default:
                  return { ...Wr, flag: Vr, alt: "English" };
                case "es":
                  return { ...$r, flag: Kr, alt: "Espa\xf1ol" };
                case "pt":
                  return { ...Hr, flag: Qr, alt: "Portugu\xeas" };
              }
            };
          return (
            (0, e.useEffect)(() => {
              const e = navigator.language.split("-")[0],
                t = l.includes(e) ? e : "en",
                n = l.indexOf(t);
              i(n), a(s(t));
            }, []),
            (0, kr.jsx)(qr.Provider, {
              value: {
                language: r,
                changeLanguage: () => {
                  const e = (o + 1) % l.length;
                  i(e);
                  const t = l[e],
                    n = s(t);
                  a(n);
                },
              },
              children: n,
            })
          );
        };
      Yr.defaultProps = { children: null };
      const Xr = Yr;
      const Jr = n.p + "static/media/user.26f3a1e29295f949f1e642fd5202697b.svg";
      var Zr, ea, ta, na, ra, aa, oa, ia, la, sa, ua, ca, da;
      const fa = Gt.div(
          Zr ||
            (Zr = a([
              '\n  position: relative;\n  color: var(--black-palette-color);\n  font-size: 20px;\n  padding: 0.5rem 0;\n  cursor: pointer;\n  font-family: "Century Gothic", sans-serif;\n\n  ',
              '\n    \n  &:hover {\n    color: var(--grey-palette-color-text);\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 0;\n    height: 1px;\n    background: var(--grey-palette-color-text);\n    transition: width 0.3s ease-in-out;\n  }\n\n  &:hover::before {\n    width: 100%;\n    color: var(--grey-palette-color-text);\n  }\n',
            ])),
          (e) => {
            let { currentDisabled: t } = e;
            return (
              t &&
              Kt(
                ea ||
                  (ea = a([
                    "\n      filter: contrast(0.4);\n      pointer-events: none;\n      margin-left: 2rem;\n      &:hover {\n        transform: unset;\n      }\n    ",
                  ])),
              )
            );
          },
        ),
        pa = Gt.div(
          ta ||
            (ta = a([
              "\n  display: none;\n  position: absolute;\n  z-index: 1;\n  background-color: var(--white-palette-color);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  top: 48px;\n  left: 0;\n  width: fit-content;\n\n  ",
              ":hover & {\n    display: block;\n  }\n",
            ])),
          fa,
        ),
        ha = Gt(yr)(
          na ||
            (na = a([
              "\n  color: var(--black-palette-color);\n  text-decoration: none;\n  display: block;\n  padding: 4px 0;\n  transform: none;\n  border-bottom: 1px solid var(--grey-palette-color-background);\n  width: 100%;\n  padding: 1rem 2rem;\n  font-size: 20px;\n\n  &:hover {\n    background-color: var(--grey-palette-color-background);\n  }\n",
            ])),
        ),
        ma = Gt(yr)(
          ra ||
            (ra = a([
              '\n  position: relative;\n  color: var(--black-palette-color);\n  font-size: 20px;\n  padding: 0.5rem 0;\n  cursor: pointer;\n  text-decoration: none;\n  padding-left: 1rem;\n  transform: translateX(20px);\n  font-family: "Century Gothic", sans-serif;\n\n  ',
              "\n",
            ])),
          (e) => {
            let { currentDisabled: t } = e;
            return (
              t &&
              Kt(
                aa ||
                  (aa = a([
                    "\n      filter: contrast(0.4);\n      pointer-events: none;\n    ",
                  ])),
              )
            );
          },
        ),
        ga = Gt(yr)(
          oa ||
            (oa = a([
              "\n    color: var(--black-palette-color);\n\n      &:hover {\n        color: var(--grey-palette-color-text) !important;\n      }\n  }\n",
            ])),
        ),
        va = Gt(fa)(
          ia ||
            (ia = a([
              "\n  @media (max-width: 810px) {\n    display: flex;\n    align-items: unset !important;\n    justify-content: space-between;\n    padding-right: 1rem;\n    transition:\n      transform 0.3s ease-in-out,\n      position 0.3s ease-in-out,\n      top 0.3s ease-in-out;\n    transform: ",
              ";\n    position: ",
              ";\n    top: ",
              ";\n\n    ",
              "\n\n    &:hover {\n      transform: translateX(20px);\n    }\n  }\n\n  @media (max-width: 810px) {\n    justify-content: flex-start;\n    padding-right: 0;\n  }\n",
            ])),
          (e) => {
            let { active: t, index: n } = e;
            return t === n ? "translateX(20px)" : "translateX(0)";
          },
          (e) => {
            let { active: t, index: n } = e;
            return t === n ? "absolute" : "relative";
          },
          (e) => {
            let { active: t, index: n } = e;
            return t === n ? "32px" : "unset";
          },
          (e) => {
            let { currentDisabled: t } = e;
            return (
              t &&
              Kt(
                la ||
                  (la = a([
                    "\n        filter: contrast(0.4);\n        pointer-events: none;\n        &:hover {\n          transform: unset;\n        }\n      ",
                  ])),
              )
            );
          },
        ),
        ya = Gt(pa)(
          sa ||
            (sa = a([
              "\n  @media (max-width: 810px) {\n    display: ",
              ";\n    position: static;\n    width: 100%;\n    box-shadow: none;\n    padding: 0;\n    opacity: ",
              ";\n    visibility: ",
              ";\n    transition:\n      opacity 0.3s ease-in-out,\n      visibility 0.3s ease-in-out;\n    transition-delay: ",
              ";\n  }\n",
            ])),
          (e) => {
            let { isOpenMenu: t } = e;
            return t ? "block" : "none";
          },
          (e) => {
            let { isOpenMenu: t } = e;
            return t ? "1" : "0";
          },
          (e) => {
            let { isOpenMenu: t } = e;
            return t ? "visible" : "hidden";
          },
          (e) => {
            let { isOpenMenu: t } = e;
            return t ? "0s" : "0.3s";
          },
        ),
        ba = Gt.span(
          ua ||
            (ua = a([
              "\n  margin-left: 0.5rem;\n  transition: opacity 0.3s ease-in-out;\n  opacity: ",
              ";\n  padding: 0.5rem;\n",
            ])),
          (e) => {
            let { active: t } = e;
            return t ? 0 : 1;
          },
        ),
        xa = Gt.span(
          ca ||
            (ca = a([
              "\n  margin-right: 0.5rem;\n  transition: opacity 0.3s ease-in-out;\n  opacity: ",
              ";\n  padding: 0.5rem;\n",
            ])),
          (e) => {
            let { active: t } = e;
            return t ? 1 : 0;
          },
        ),
        wa = Gt.img(
          da ||
            (da = a([
              "\n  width: 1.2rem;\n  height: 1.2rem;\n  cursor: pointer;\n",
            ])),
        ),
        Sa = (t) => {
          let {
            categories: n,
            activeCategory: r,
            setActiveCategory: a,
            isMenuOpen: o,
          } = t;
          const [i, l] = (0, e.useState)(window.innerWidth < 810),
            { language: s } = Gr();
          return (
            (0, e.useEffect)(() => {
              const e = () => {
                l(window.innerWidth < 810);
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, e.useEffect)(() => {
              i && null !== r && a(null);
            }, [i]),
            (0, e.useEffect)(
              () => () => {
                a(null);
              },
              [],
            ),
            (0, kr.jsxs)(kr.Fragment, {
              children: [
                n.map((e, t) => {
                  var n, o;
                  return (0, kr.jsx)(
                    "div",
                    {
                      style: { width: "100%" },
                      children: i
                        ? (0, kr.jsx)(
                            va,
                            {
                              currentDisabled: 1 == e.disabled,
                              onClick: () =>
                                i && a((e) => (e === t ? null : t)),
                              style: {
                                display:
                                  !i || (null !== r && r !== t)
                                    ? "none"
                                    : "block",
                                width: "100%",
                                textTransform: "uppercase",
                              },
                              active: r,
                              index: t,
                              children:
                                e.subcategories || e.path
                                  ? (0, kr.jsxs)(kr.Fragment, {
                                      children: [
                                        (0, kr.jsx)(xa, {
                                          active: r === t,
                                          children: (0, kr.jsx)(Fr, {}),
                                        }),
                                        e.name,
                                        (0, kr.jsx)(ba, {
                                          active: r === t,
                                          children: (0, kr.jsx)(Mr, {}),
                                        }),
                                      ],
                                    })
                                  : (0, kr.jsxs)(ma, {
                                      to: e.path,
                                      style: { textTransform: "uppercase" },
                                      currentDisabled: 1 == e.disabled,
                                      children: [
                                        e.image &&
                                          (0, kr.jsx)("img", {
                                            src: e.image,
                                            alt: "Imagem da ".concat(e.name),
                                          }),
                                        e.path &&
                                          !(
                                            null !== (n = e.subcategories) &&
                                            void 0 !== n &&
                                            n.length
                                          ) &&
                                          (0, kr.jsx)(ga, {
                                            style: {
                                              textDecoration: "none",
                                              paddingLeft: "2rem",
                                            },
                                            to: e.path,
                                            children: e.name,
                                          }),
                                        !e.path &&
                                          (0, kr.jsx)("span", {
                                            children: e.name,
                                          }),
                                      ],
                                    }),
                            },
                            "mobile-category-".concat(t),
                          )
                        : (0, kr.jsx)(
                            fa,
                            {
                              currentDisabled: 1 == e.disabled,
                              onMouseEnter: () => !i && a(t),
                              style: {
                                display: i && r === t ? "none" : "block",
                                width: "100%",
                                textTransform: "uppercase",
                              },
                              children:
                                e.subcategories && e.subcategories.length > 0
                                  ? (0, kr.jsxs)(kr.Fragment, {
                                      children: [
                                        e.path
                                          ? (0, kr.jsx)(ga, {
                                              style: {
                                                textDecoration: "none",
                                                margin: "0 1rem",
                                              },
                                              to: e.path,
                                              children: e.name,
                                            })
                                          : (0, kr.jsx)("span", {
                                              children: e.name,
                                            }),
                                        (0, kr.jsx)(pa, {
                                          children: e.subcategories.map(
                                            (t, n) =>
                                              (0, kr.jsx)(
                                                ha,
                                                {
                                                  to: e.path
                                                    ? ""
                                                        .concat(e.path)
                                                        .concat(
                                                          t.path
                                                            ? "".concat(t.path)
                                                            : "",
                                                        )
                                                    : t.path,
                                                  style: {
                                                    textTransform: "capitalize",
                                                  },
                                                  children: t.name,
                                                },
                                                n,
                                              ),
                                          ),
                                        }),
                                      ],
                                    })
                                  : (0, kr.jsxs)(ma, {
                                      to: e.path,
                                      children: [
                                        e.image &&
                                          (0, kr.jsx)("img", {
                                            src: e.image,
                                            alt: "Imagem da ".concat(e.name),
                                          }),
                                        e.path &&
                                          !(
                                            null !== (o = e.subcategories) &&
                                            void 0 !== o &&
                                            o.length
                                          ) &&
                                          (0, kr.jsx)(ga, {
                                            style: { textDecoration: "none" },
                                            to: e.path,
                                            children: e.name,
                                          }),
                                        !e.path &&
                                          (0, kr.jsx)("span", {
                                            children: e.name,
                                          }),
                                      ],
                                    }),
                            },
                            "category-".concat(t),
                          ),
                    },
                    "category-".concat(t),
                  );
                }),
                i &&
                  null !== r &&
                  (0, kr.jsx)(ya, {
                    isOpenMenu: o,
                    children:
                      n[r].subcategories &&
                      n[r].subcategories.map((e, t) =>
                        (0, kr.jsx)(
                          ha,
                          {
                            style: { textTransform: "capitalize" },
                            to: n[r].path
                              ? ""
                                  .concat(n[r].path)
                                  .concat(e.path ? "".concat(e.path) : "")
                              : e.path,
                            children: e.name,
                          },
                          t,
                        ),
                      ),
                  }),
                i &&
                  (0, kr.jsx)("div", {
                    children: (0, kr.jsxs)(ma, {
                      to: "/profile",
                      className: "d-flex align-items-center",
                      children: [
                        (0, kr.jsx)(wa, { src: Jr }),
                        (0, kr.jsx)("span", {
                          className: "ms-2 text-uppercase",
                          children: s.globalTexts.myAccount,
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        },
        ka = n.p + "static/media/leafeel_black.471b9efd31e3708b6bbe.png";
      const Ea =
        n.p + "static/media/shoppingcart.1ad818c1447568a1135c3fd97f5a0cee.svg";
      const ja = n.p + "static/media/star.2814869acdfccb117e6943908ec04748.svg";
      var Ca, _a, Na, Pa, Oa, Ta, Ra, Da, La, za, Ia, Aa;
      const Fa = Gt.div(
          Ca ||
            (Ca = a([
              "\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n  align-items: center;\n  min-height: 60px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  background-color: #ffffff;\n",
            ])),
        ),
        Ma = Gt.div(
          _a ||
            (_a = a([
              "\n  transition: opacity 0.5s ease-in-out;\n  @media (max-width: 810px) {\n    opacity: ",
              ";\n  }\n",
            ])),
          (e) => (e.visible ? "1" : "0"),
        ),
        Ba = Gt.div(
          Na ||
            (Na = a([
              "\n  cursor: pointer;\n  display: none;\n\n  @media (max-width: 810px) {\n    display: block;\n    order: -1;\n    margin-top: 1rem;\n  }\n",
            ])),
        ),
        Ua = Gt.div(
          Pa ||
            (Pa = a([
              "\n  display: flex;\n  gap: 20px;\n  align-items: center;\n\n  @media (max-width: 810px) {\n    flex-direction: column;\n    align-items: flex-start;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 60px;\n    background-color: var(--white-palette-color);\n    width: ",
              ";\n    height: 100vh;\n    transition: width 0.3s ease-in;\n    overflow: hidden;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n    padding-top: 2rem;\n  }\n",
            ])),
          (e) => {
            let { isOpen: t } = e;
            return t ? "270px" : "0px";
          },
        ),
        Wa = Gt.li(
          Oa ||
            (Oa = a([
              "\n  list-style: none;\n  margin: 10px;\n\n  @media (min-width: 900px) {\n    margin: 0;\n  }\n",
            ])),
        ),
        $a = Gt.div(
          Ta ||
            (Ta = a([
              "\n  position: relative;\n  display: inline-block;\n\n  @media (max-width: 810px) {\n    order: -1;\n  }\n",
            ])),
        ),
        Ha = Gt(function (e) {
          return Ir({
            tag: "svg",
            attr: { viewBox: "0 0 512 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
                },
                child: [],
              },
            ],
          })(e);
        })(
          Ra ||
            (Ra = a([
              "\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n",
            ])),
        ),
        Va = Gt.input(
          Da ||
            (Da = a([
              "\n  position: absolute;\n  right: 0;\n  width: ",
              ";\n  opacity: ",
              ";\n  transition:\n    width 0.5s ease-in-out,\n    opacity 0.5s ease-in-out;\n  border-radius: 24px;\n  outline: none;\n  cursor: text;\n\n  @media (max-width: 810px) {\n    right: auto;\n    left: 0;\n  }\n",
            ])),
          (e) => (e.visible ? "180px" : "0"),
          (e) => (e.visible ? "1" : "0"),
        ),
        Ka = Gt.img(
          La ||
            (La = a([
              "\n  width: 1.2rem;\n  height: 1.2rem;\n  cursor: pointer;\n",
            ])),
        ),
        Qa = Gt.img(
          za ||
            (za = a(["\n  width: 1em;\n  height: 1em;\n  cursor: pointer;\n"])),
        ),
        qa = Gt.img(
          Ia ||
            (Ia = a([
              "\n  width: 1.6rem;\n  height: 1.6rem;\n  cursor: pointer;\n",
            ])),
        ),
        Ga = Gt(yr)(
          Aa ||
            (Aa = a([
              "\n  color: var(--black-palette-color);\n  text-decoration: none;\n",
            ])),
        ),
        Ya = () => {
          const [t, n] = (0, e.useState)(!1),
            [r, a] = (0, e.useState)(window.innerWidth),
            [o, i] = (0, e.useState)(null),
            l = (0, e.useRef)(),
            s = (0, e.useRef)(),
            u = (0, e.useRef)(null),
            [c, d] = (0, e.useState)(!1),
            { language: f } = Gr(),
            p = () => {
              d((e) => !e);
            },
            h = [
              {
                name: f.menu.woman.header,
                disabled: !1,
                path: "/woman",
                subcategories: [
                  { name: f.menu.woman.item0, path: "" },
                  { name: f.menu.woman.item1, path: "/trousers" },
                  { name: f.menu.woman.item2, path: "/dresses" },
                  { name: f.menu.woman.item3, path: "/shoes" },
                  { name: f.menu.woman.item4, path: "/bags" },
                  { name: f.menu.woman.item5, path: "/blouses" },
                  { name: f.menu.woman.item6, path: "/coats" },
                ],
              },
              { name: f.menu.man.header, disabled: !0 },
              { name: f.menu.kids.header, disabled: !0 },
              { name: f.menu.brands.header, disabled: !0 },
            ],
            m = () => {
              n(!t);
            },
            g = (e) => {
              l.current &&
                !l.current.contains(e.target) &&
                s.current &&
                !s.current.contains(e.target) &&
                u.current &&
                !u.current.contains(e.target) &&
                (n(!1), d(!1));
            };
          return (
            (0, e.useEffect)(
              () => (
                document.addEventListener("mousedown", g),
                () => {
                  document.removeEventListener("mousedown", g);
                }
              ),
              [],
            ),
            (0, e.useEffect)(() => {
              const e = () => {
                window.innerWidth > 810 && n(!1);
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, kr.jsxs)(Fa, {
              children: [
                (0, kr.jsx)(yr, {
                  className: window.innerWidth > 810 ? "col-3" : "",
                  to: "/",
                  children: (0, kr.jsx)(Ma, {
                    className: "px-4",
                    visible: !c,
                    children: (0, kr.jsx)("img", {
                      src: ka,
                      style: { width: "8rem" },
                    }),
                  }),
                }),
                (0, kr.jsxs)("div", {
                  className: "d-flex align-items-center order-first",
                  children: [
                    (0, kr.jsx)(Ba, {
                      ref: s,
                      onClick: m,
                      children: (0, kr.jsx)(Cr, {
                        isMenuOpen: t,
                        toggleMenu: m,
                      }),
                    }),
                    window.innerWidth < 810 &&
                      (0, kr.jsxs)($a, {
                        ref: u,
                        className: "px-1",
                        children: [
                          (0, kr.jsx)(Ha, { onClick: p }),
                          (0, kr.jsx)(Va, {
                            type: "text",
                            placeholder: f.globalTexts.search,
                            visible: c,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, kr.jsxs)(Ua, {
                  isOpen: t,
                  ref: l,
                  className: window.innerWidth > 810 ? "col-6" : "",
                  children: [
                    (0, kr.jsx)(Sa, {
                      categories: h,
                      activeCategory: o,
                      setActiveCategory: i,
                      isMenuOpen: t,
                    }),
                    (0, kr.jsx)(Wa, {
                      style: {
                        paddingLeft: window.innerWidth < 810 ? "1.4rem" : "0",
                      },
                    }),
                  ],
                }),
                (0, kr.jsxs)("div", {
                  className:
                    window.innerWidth > 810
                      ? "col-3 d-flex align-items-center justify-content-end"
                      : "d-flex align-items-center justify-content-around",
                  children: [
                    window.innerWidth > 810 &&
                      (0, kr.jsxs)($a, {
                        ref: u,
                        className: "px-3",
                        children: [
                          (0, kr.jsx)(Ha, { onClick: p }),
                          (0, kr.jsx)(Va, {
                            type: "text",
                            placeholder: f.globalTexts.search,
                            visible: c,
                          }),
                        ],
                      }),
                    (0, kr.jsx)(Ga, {
                      to: "#",
                      className: window.innerWidth > 810 ? "px-3" : "",
                      children: (0, kr.jsx)(Ka, { src: ja }),
                    }),
                    (0, kr.jsx)(Ga, {
                      to: "/cart",
                      className: window.innerWidth > 810 ? "px-3" : "ps-3",
                      children: (0, kr.jsx)(Qa, { src: Ea }),
                    }),
                    window.innerWidth > 810 &&
                      (0, kr.jsx)(Ga, {
                        to: "/profile",
                        className: "ps-3 pe-4",
                        children: (0, kr.jsx)(qa, { src: Jr }),
                      }),
                  ],
                }),
              ],
            })
          );
        };
      var Xa, Ja, Za, eo, to, no, ro, ao, oo, io, lo;
      const so = Gt.div(
          Xa || (Xa = a(["\n  position: relative;\n  width: 100%;\n"])),
        ),
        uo = Gt.img(
          Ja ||
            (Ja = a([
              "\n  width: 100%;\n  max-height: 72vh;\n  object-fit: cover;\n",
            ])),
        ),
        co = Gt.h3(
          Za ||
            (Za = a([
              "\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: white;\n  margin: 0;\n",
            ])),
        ),
        fo = Gt.div(
          eo ||
            (eo = a([
              "\n  position: absolute;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n",
            ])),
        ),
        po = Gt.p(
          to ||
            (to = a([
              "\n  color: white;\n  margin: 10px;\n  text-align: center;\n",
            ])),
        ),
        ho = Gt.div(
          no ||
            (no = a([
              "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n",
            ])),
        ),
        mo = Gt.div(
          ro ||
            (ro = a([
              "\n  position: absolute;\n  bottom: -8px;\n  width: 100%;\n  text-align: center;\n",
            ])),
        ),
        go = Gt.span(
          ao ||
            (ao = a([
              "\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-color: ",
              ";\n  border-radius: 50%;\n  margin: 0 5px;\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);\n",
            ])),
          (e) => (e.active ? "#fff" : "#999"),
        ),
        vo = Gt.span(
          oo ||
            (oo = a([
              "\n  transition: opacity 0.3s ease-in-out;\n  cursor: pointer;\n  padding: .5rem;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.3);\n",
            ])),
        ),
        yo = Gt.span(
          io ||
            (io = a([
              "\n  transition: opacity 0.3s ease-in-out;\n  cursor: pointer;\n  padding: .5rem;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.3);\n",
            ])),
        ),
        bo = (t) => {
          let { images: n, autoPlay: r } = t;
          const [o, i] = (0, e.useState)(0),
            l = Gt.div(
              lo ||
                (lo = a([
                  "\n    width: 100%;\n    overflow: hidden;\n    position: relative;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin-top: ",
                  ";\n    margin-bottom: 32px;\n  ",
                ])),
              (e) => (e ? "0" : "-24px"),
            );
          (0, e.useEffect)(() => {
            let e;
            return (
              r &&
                (e = setInterval(() => {
                  const e = o >= n.length - 1 ? 0 : o + 1;
                  i(e);
                }, 6e3)),
              () => clearInterval(e)
            );
          }, [o, n.length, r]);
          const s = r ? "50vh" : "unset";
          return (0, kr.jsxs)(so, {
            children: [
              (0, kr.jsx)(l, {
                style: { height: s },
                children:
                  n.length > 0 &&
                  (0, kr.jsxs)(kr.Fragment, {
                    children: [
                      n[o].title && (0, kr.jsx)(co, { children: n[o].title }),
                      (0, kr.jsx)(uo, {
                        src: n[o].url,
                        alt: "Slide ".concat(o),
                      }),
                      n[o].description &&
                        (0, kr.jsx)(fo, {
                          children: (0, kr.jsx)(po, {
                            children: n[o].description,
                          }),
                        }),
                    ],
                  }),
              }),
              (0, kr.jsxs)(ho, {
                children: [
                  (0, kr.jsx)(yo, {
                    onClick: () => {
                      const e = o <= 0 ? n.length - 1 : o - 1;
                      i(e);
                    },
                    children: (0, kr.jsx)(Fr, {
                      style: { fontSize: "xx-large" },
                    }),
                  }),
                  (0, kr.jsx)(vo, {
                    onClick: () => {
                      const e = o >= n.length - 1 ? 0 : o + 1;
                      i(e);
                    },
                    children: (0, kr.jsx)(Mr, {
                      style: { fontSize: "xx-large" },
                    }),
                  }),
                ],
              }),
              n.length > 1 &&
                (0, kr.jsx)(mo, {
                  children: n.map((e, t) =>
                    (0, kr.jsx)(
                      go,
                      {
                        active: t === o,
                        onClick: () =>
                          ((e) => {
                            i(e);
                          })(t),
                      },
                      t,
                    ),
                  ),
                }),
            ],
          });
        };
      bo.defaultProps = { autoPlay: !1 };
      const xo = bo;
      function wo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      var So = (function e(t, n) {
        function r(e, r, a) {
          if ("undefined" !== typeof document) {
            "number" === typeof (a = wo({}, n, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var o = "";
            for (var i in a)
              a[i] &&
                ((o += "; " + i),
                !0 !== a[i] && (o += "=" + a[i].split(";")[0]));
            return (document.cookie = e + "=" + t.write(r, e) + o);
          }
        }
        return Object.create(
          {
            set: r,
            get: function (e) {
              if ("undefined" !== typeof document && (!arguments.length || e)) {
                for (
                  var n = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    a = 0;
                  a < n.length;
                  a++
                ) {
                  var o = n[a].split("="),
                    i = o.slice(1).join("=");
                  try {
                    var l = decodeURIComponent(o[0]);
                    if (((r[l] = t.read(i, l)), e === l)) break;
                  } catch (s) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, t) {
              r(e, "", wo({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, wo({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(wo({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(n) },
            converter: { value: Object.freeze(t) },
          },
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent,
            );
          },
        },
        { path: "/" },
      );
      const ko = n.p + "static/media/firstInfoPT.acf78c2693dca109d25a.jpeg",
        Eo = n.p + "static/media/secondInfoPT.ac28b7adbc9a0dd0c72d.jpeg",
        jo = n.p + "static/media/thirdInfoPT.02ba1f00d22cefe2bb16.jpeg",
        Co = n.p + "static/media/firstInfoES.55daa26b5bfaf53a9d0c.jpeg",
        _o = n.p + "static/media/secondInfoES.2964ed9f19dab5e0fe16.jpeg",
        No = n.p + "static/media/thirdInfoES.6e64e74d6ba40ef20755.jpeg",
        Po = n.p + "static/media/firstInfoEN.27991b07e79ed6e89419.jpeg",
        Oo = n.p + "static/media/secondInfoEN.2964ed9f19dab5e0fe16.jpeg",
        To = n.p + "static/media/thirdInfoEN.e7be098a5dd9c4da62a8.jpeg";
      var Ro, Do, Lo;
      const zo = Gt.div(
          Ro ||
            (Ro = a([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n",
            ])),
        ),
        Io = Gt.div(
          Do ||
            (Do = a([
              "\n  background: #fff;\n  padding: 8px 0 24px 0;\n  border-radius: 8px;\n  max-width: 70vw;\n  //width: 100%;\n  text-align: center;\n  position: relative;\n  //max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n\n  @media (max-width: 810px) {\n    max-width: 90vw;\n  }\n",
            ])),
        ),
        Ao = Gt.button(
          Lo ||
            (Lo = a([
              "\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  background: none;\n",
            ])),
        ),
        Fo = (t) => {
          let { onClose: n } = t;
          const [r, a] = (0, e.useState)("pt"),
            [o, i] = (0, e.useState)(Hr),
            l = { pt: Hr, es: $r, en: Wr };
          (0, e.useEffect)(() => {
            i(l[r] || Hr);
          }, [r]);
          const s =
              {
                pt: { firstImage: ko, secondImage: Eo, thirdImage: jo },
                es: { firstImage: Co, secondImage: _o, thirdImage: No },
                en: { firstImage: Po, secondImage: Oo, thirdImage: To },
              }[r] || {},
            u = [
              { url: s.firstImage },
              { url: s.secondImage },
              { url: s.thirdImage },
            ];
          return (0, kr.jsx)(zo, {
            children: (0, kr.jsxs)(Io, {
              children: [
                (0, kr.jsxs)(Ao, {
                  onClick: n,
                  children: [
                    " ",
                    (0, kr.jsx)(Br, { style: { fontSize: "xx-large" } }),
                  ],
                }),
                (0, kr.jsx)("div", {
                  className: "d-flex justify-content-center flex-column mb-1",
                  children: (0, kr.jsx)("span", {
                    className: "logo-font-text text-center",
                    style: { fontSize: "32px" },
                    children: "Leafeel",
                  }),
                }),
                (0, kr.jsx)(xo, { images: u }),
              ],
            }),
          });
        };
      var Mo = n(903),
        Bo = n.n(Mo);
      const Uo = ["xxl", "xl", "lg", "md", "sm", "xs"],
        Wo = "xs",
        $o = e.createContext({
          prefixes: {},
          breakpoints: Uo,
          minBreakpoint: Wo,
        }),
        { Consumer: Ho, Provider: Vo } = $o;
      function Ko(t, n) {
        const { prefixes: r } = (0, e.useContext)($o);
        return t || r[n] || n;
      }
      function Qo() {
        const { breakpoints: t } = (0, e.useContext)($o);
        return t;
      }
      function qo() {
        const { minBreakpoint: t } = (0, e.useContext)($o);
        return t;
      }
      const Go = e.forwardRef((e, t) => {
        let {
          bsPrefix: n,
          fluid: r = !1,
          as: a = "div",
          className: o,
          ...i
        } = e;
        const l = Ko(n, "container"),
          s = "string" === typeof r ? "-".concat(r) : "-fluid";
        return (0, kr.jsx)(a, {
          ref: t,
          ...i,
          className: Bo()(o, r ? "".concat(l).concat(s) : l),
        });
      });
      Go.displayName = "Container";
      const Yo = Go,
        Xo = e.forwardRef((e, t) => {
          let { bsPrefix: n, className: r, as: a = "div", ...o } = e;
          const i = Ko(n, "row"),
            l = Qo(),
            s = qo(),
            u = "".concat(i, "-cols"),
            c = [];
          return (
            l.forEach((e) => {
              const t = o[e];
              let n;
              delete o[e],
                null != t && "object" === typeof t
                  ? ({ cols: n } = t)
                  : (n = t);
              const r = e !== s ? "-".concat(e) : "";
              null != n && c.push("".concat(u).concat(r, "-").concat(n));
            }),
            (0, kr.jsx)(a, { ref: t, ...o, className: Bo()(r, i, ...c) })
          );
        });
      Xo.displayName = "Row";
      const Jo = Xo;
      const Zo = e.forwardRef((e, t) => {
        const [
          { className: n, ...r },
          { as: a = "div", bsPrefix: o, spans: i },
        ] = (function (e) {
          let { as: t, bsPrefix: n, className: r, ...a } = e;
          n = Ko(n, "col");
          const o = Qo(),
            i = qo(),
            l = [],
            s = [];
          return (
            o.forEach((e) => {
              const t = a[e];
              let r, o, u;
              delete a[e],
                "object" === typeof t && null != t
                  ? ({ span: r, offset: o, order: u } = t)
                  : (r = t);
              const c = e !== i ? "-".concat(e) : "";
              r &&
                l.push(
                  !0 === r
                    ? "".concat(n).concat(c)
                    : "".concat(n).concat(c, "-").concat(r),
                ),
                null != u && s.push("order".concat(c, "-").concat(u)),
                null != o && s.push("offset".concat(c, "-").concat(o));
            }),
            [
              { ...a, className: Bo()(r, ...l, ...s) },
              { as: t, bsPrefix: n, spans: l },
            ]
          );
        })(e);
        return (0, kr.jsx)(a, {
          ...r,
          ref: t,
          className: Bo()(n, !i.length && o),
        });
      });
      Zo.displayName = "Col";
      const ei = Zo;
      const ti = function () {
          return (0, kr.jsx)("footer", {
            className: "custom-footer",
            children: (0, kr.jsx)(Yo, {
              fluid: !0,
              children: (0, kr.jsxs)(Jo, {
                children: [
                  (0, kr.jsx)(ei, {
                    md: 3,
                    className: "d-flex justify-content-center",
                    children: (0, kr.jsx)(yr, {
                      to: "/About",
                      className: "text-light mx-2",
                      children: "About",
                    }),
                  }),
                  (0, kr.jsx)(ei, {
                    md: 3,
                    className: "d-flex justify-content-center",
                    children: (0, kr.jsx)(yr, {
                      to: "/FAQs",
                      className: "text-light mx-2",
                      children: "FAQs",
                    }),
                  }),
                  (0, kr.jsx)(ei, {
                    md: 3,
                    className: "d-flex justify-content-center",
                    children: (0, kr.jsx)(yr, {
                      to: "/terms",
                      className: "text-light mx-2",
                      children: "Terms & Conditions",
                    }),
                  }),
                  (0, kr.jsx)(ei, {
                    md: 3,
                    className: "d-flex justify-content-center",
                    children: (0, kr.jsx)(yr, {
                      to: "/accessibility",
                      className: "text-light mx-2",
                      children: "Accessibility",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        ni = n.p + "static/media/carousel1.1.c90bf7e95dec829436d0.jpeg",
        ri = n.p + "static/media/carousel1.2.fb54f5d44bbd60f3a863.jpeg",
        ai = n.p + "static/media/carousel2.1.52f6983a81df7c9a2f4a.jpeg",
        oi = n.p + "static/media/carousel.2.2.259e9a53489ad525ad23.jpeg",
        ii = () => {
          const t = [{ url: ni }, { url: ri }],
            n = [{ url: ai }, { url: oi }],
            [r, a] = (0, e.useState)(!0);
          (0, e.useEffect)(() => {
            So.get("SeenSplashScreen") && a(!1);
          }, []);
          return (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                className: "mt-5 pt-5",
                children: [
                  r &&
                    (0, kr.jsx)(Fo, {
                      onClose: () => {
                        So.set("SeenSplashScreen", "true", { expires: 30 }),
                          a(!1);
                      },
                    }),
                  (0, kr.jsx)("div", {
                    className: "mb-4",
                    children: (0, kr.jsx)(xo, { images: t, autoPlay: !0 }),
                  }),
                  (0, kr.jsx)("div", {
                    className: "mb-4",
                    children: (0, kr.jsx)(xo, { images: n, autoPlay: !0 }),
                  }),
                ],
              }),
              (0, kr.jsx)(ti, {}),
            ],
          });
        };
      var li, si, ui, ci, di, fi, pi;
      const hi = Yt(
          li ||
            (li = a([
              "\n  from { transform: scale(0.5); }\n  to { transform: scale(1); }\n",
            ])),
        ),
        mi = Gt.p(
          si ||
            (si = a([
              '\n  font-size: 16px;\n  font-family: "Century Gothic", sans-serif;\n  color: var(--black-palette-color);\n',
            ])),
        );
      function gi(e) {
        let { x1: t, y1: n, x2: r, y2: o, color: i, delay: l, animate: s } = e;
        const u = Yt(
            ui ||
              (ui = a([
                "\n    0% { transform: scale(0.5) rotate(0deg); }\n    100% { transform: scale(1) rotate(360deg); }\n  ",
              ])),
          ),
          c = Gt.path(
            ci ||
              (ci = a([
                "\n    fill: ",
                ";\n    transform-origin: center;\n    ",
                "\n  ",
              ])),
            i,
            s &&
              Kt(
                di ||
                  (di = a([
                    "\n      animation: ",
                    " 0.6s ease-out ",
                    "s both;\n    ",
                  ])),
                u,
                l,
              ),
          );
        return (0, kr.jsx)(c, {
          d: "M100,100 L"
            .concat(t, ",")
            .concat(n, " A100,100 0 0,1 ")
            .concat(r, ",")
            .concat(o, " Z"),
        });
      }
      function vi(e) {
        let { data: t, colors: n, size: r } = e,
          a = t.reduce((e, t) => e + t, 0),
          o = (t.length, 0);
        return t
          .map((e) => (e / a) * 100)
          .map((e, t) => {
            const a = (e / 100) * 360,
              i = n[t % n.length],
              {
                x1: l,
                y1: s,
                x2: u,
                y2: c,
              } = (function (e, t, n, r, a) {
                return {
                  x1: r + n * Math.cos((Math.PI * e) / 180),
                  y1: a + n * Math.sin((Math.PI * e) / 180),
                  x2: r + n * Math.cos((Math.PI * t) / 180),
                  y2: a + n * Math.sin((Math.PI * t) / 180),
                };
              })(o, o + a, 100, 100, 100);
            return (
              (o += a),
              (0, kr.jsx)(
                gi,
                {
                  x1: l,
                  y1: s,
                  x2: u,
                  y2: c,
                  color: i,
                  delay: 0.1 * t,
                  animate: r >= 200,
                },
                t,
              )
            );
          });
      }
      function yi(e) {
        return (
          console.log(e),
          e < 4
            ? {
                concept: "Razo\xe1vel",
                conceptText:
                  "Produtos com este conceito, 'Razo\xe1vel' come\xe7am a trilhar o caminho da sustentabilidade, usando uma quantidade m\xednima de materiais org\xe2nicos e implementando algumas medidas de com\xe9rcio justo. Isso reduz o uso de pesticidas e produtos qu\xedmicos que poluem o solo e a \xe1gua, em compara\xe7\xe3o com uma pe\xe7a de roupa comum.",
              }
            : e < 6
              ? {
                  concept: "Bom",
                  conceptText:
                    "Produtos classificados como 'Bom' v\xe3o al\xe9m, usando uma maior propor\xe7\xe3o de materiais org\xe2nicos e aderindo a mais pr\xe1ticas de com\xe9rcio justo. Isso significa que eles t\xeam um impacto ambiental menor e promovem melhores condi\xe7\xf5es de trabalho do que as roupas comuns.",
                }
              : e < 8
                ? {
                    concept: "\xd3timo",
                    conceptText:
                      "Produtos com conceito '\xd3timo' est\xe3o fazendo grandes avan\xe7os na sustentabilidade. Eles usam uma grande quantidade de materiais org\xe2nicos, seguem rigorosas pr\xe1ticas de com\xe9rcio justo e t\xeam medidas significativas para minimizar o impacto ambiental.",
                  }
                : e < 12
                  ? {
                      concept: "Excelente",
                      conceptText:
                        "Produtos classificados como 'Excelente' est\xe3o na vanguarda da sustentabilidade. Eles usam predominantemente materiais org\xe2nicos, seguem as melhores pr\xe1ticas de com\xe9rcio justo e consideram o bem-estar animal.",
                    }
                  : {
                      concept: "Leafeel",
                      conceptText:
                        "Produtos com o conceito 'Leafeel' s\xe3o os mais sustent\xe1veis. Eles usam quase exclusivamente materiais org\xe2nicos, aderem estritamente \xe0s pr\xe1ticas de com\xe9rcio justo, minimizam ao m\xe1ximo o impacto ambiental e priorizam o bem-estar animal. Comparado a uma pe\xe7a de roupa comum, o impacto ambiental de um produto 'Leafeel' \xe9 significativamente menor.",
                    }
        );
      }
      function bi(t) {
        let { sustainableData: n, size: r } = t;
        const [o, i] = (0, e.useState)([]),
          [l, s] = (0, e.useState)([]),
          [u, c] = (0, e.useState)(0),
          d = Gt.div(
            fi ||
              (fi = a([
                "\n    background-color: ",
                ";\n    width: ",
                "px;\n    height: ",
                "px;\n    padding: 0.2rem;\n    border-radius: 50%;\n    transform-origin: 50% 50%;\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: transform 0.3s ease-in-out;\n\n    &:hover {\n      ",
                "\n    }\n  ",
              ])),
            (e) => e.color || "transparent",
            r,
            r,
            r < 200 && "transform: scale(1.2) rotate(45deg);",
          ),
          f = Gt.svg(
            pi ||
              (pi = a([
                "\n    display: inline-block;\n    vertical-align: middle;\n    transform-origin: 50% 50%;\n    animation: ",
                " 0.6s;\n    padding: 0.2rem;\n    border-radius: 50%;\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: transform 0.3s ease-in-out;\n\n    &:hover {\n      ",
                "\n    }\n  ",
              ])),
            hi,
            r < 200 && "transform: scale(1.2) rotate(45deg);",
          );
        return (
          (0, e.useEffect)(() => {
            const e = [],
              t = [];
            let r = 0;
            Object.keys(n).forEach((a) => {
              const o = n[a],
                i = o.length,
                l = i > 0 ? o[i - 1].colorSection : null;
              e.push(i), t.push(l), (r += i);
            }),
              i(e),
              c(r),
              s(t);
          }, [n]),
          (0, kr.jsxs)("div", {
            className:
              "d-flex text-center align-items-center justify-content-center ".concat(
                r >= 200 ? "flex-column" : "",
              ),
            style: { marginRight: "-16px" },
            children: [
              (0, kr.jsx)("div", {
                className:
                  "col-md-6 col-sm-12 p-0  d-flex align-items-center justify-content-center",
                children:
                  1 === l.length
                    ? (0, kr.jsx)(d, { color: l[0] })
                    : (0, kr.jsx)(f, {
                        width: r,
                        height: r,
                        viewBox: "0 0 200 200",
                        children: (0, kr.jsx)(vi, {
                          data: o,
                          colors: l,
                          size: r,
                        }),
                      }),
              }),
              r < 200
                ? (0, kr.jsx)("div", {
                    className:
                      "col-md-12 col-sm-6 p-0 ms-2 d-flex align-items-center",
                    children: (0, kr.jsx)(mi, {
                      className: "mt-2",
                      children: yi(u).concept,
                    }),
                  })
                : (0, kr.jsxs)("div", {
                    className: "col-md-12 col-sm-6 p-0",
                    children: [
                      (0, kr.jsx)(mi, {
                        className: "m-4",
                        children: yi(u).conceptText,
                      }),
                      (0, kr.jsxs)(mi, {
                        children: [
                          "Para saber mais clique ",
                          (0, kr.jsx)(yr, { to: "/FAQs", children: "AQUI" }),
                        ],
                      }),
                    ],
                  }),
            ],
          })
        );
      }
      bi.defaultProps = {
        sustainableData: {
          organic: [],
          fairtrade: [],
          resources: [],
          animalwelfare: [],
          workconditions: [],
          size: 200,
        },
      };
      const xi = bi;
      var wi, Si, ki, Ei;
      const ji = Gt.div(
          wi ||
            (wi = a([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n",
            ])),
        ),
        Ci = Gt.div(
          Si ||
            (Si = a([
              "\n  background: #fff;\n  padding: 32px;\n  border-radius: 8px;\n  max-width: 60vw;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  max-height: 80vh;\n  overflow-y: auto;\n\n  @media (max-width: 810px) {\n    max-width: 90vw;\n  }\n",
            ])),
        ),
        _i = Gt.button(
          ki ||
            (ki = a([
              "\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  background: none;\n",
            ])),
        ),
        Ni = Gt(yr)(Ei || (Ei = a(["\n  text-decoration: none;\n"]))),
        Pi = (t) => {
          let {
            id: n,
            title: r,
            image: a,
            price: o,
            brand: i,
            sustainableData: l,
          } = t;
          const [s, u] = (0, e.useState)(!1),
            [c, d] = (0, e.useState)(!1);
          return (0, kr.jsxs)("div", {
            className: "card card-hover mb-4 rounded-0 border-0 custom-card",
            style: { maxWidth: "300px", height: "350px" },
            children: [
              (0, kr.jsx)(Ni, {
                to: "/product/".concat(n),
                className: "position-relative d-block",
                children: (0, kr.jsx)("img", {
                  src: a,
                  alt: r,
                  className: "card-img-top rounded-0 custom-image",
                }),
              }),
              (0, kr.jsxs)("div", {
                className: "card-body row d-flex justify-content-between",
                children: [
                  (0, kr.jsxs)("div", {
                    className: "col-lg-6 col-sm-12",
                    children: [
                      (0, kr.jsxs)("p", {
                        className: "card-text",
                        children: ["\u20ac ", o, " "],
                      }),
                      (0, kr.jsxs)("h6", {
                        className: "card-title",
                        children: [r, " | ", i],
                      }),
                    ],
                  }),
                  (0, kr.jsx)("div", {
                    className: "col-lg-6 col-sm-12",
                    children:
                      l &&
                      (0, kr.jsx)("button", {
                        onClick: () => d(!0),
                        className: "border-0 bg-transparent",
                        children: (0, kr.jsx)(xi, {
                          sustainableData: l,
                          size: 32,
                        }),
                      }),
                  }),
                ],
              }),
              (0, kr.jsx)("div", {
                className: "card-body",
                children: (0, kr.jsx)("div", {
                  className: "favorite-star ".concat(s ? "favorited" : ""),
                  onClick: () => {
                    u(!s);
                  },
                  children: (0, kr.jsx)("i", { className: "bi bi-star" }),
                }),
              }),
              c &&
                (0, kr.jsx)(ji, {
                  children: (0, kr.jsxs)(Ci, {
                    children: [
                      (0, kr.jsxs)(_i, {
                        onClick: () => {
                          d(!1);
                        },
                        children: [
                          " ",
                          (0, kr.jsx)(Br, { style: { fontSize: "xx-large" } }),
                        ],
                      }),
                      (0, kr.jsxs)("div", {
                        className:
                          "d-flex justify-content-center flex-column mb-1",
                        children: [
                          " ",
                          (0, kr.jsxs)("h5", {
                            className: "text-center",
                            children: [r, " | ", i],
                          }),
                          " ",
                          (0, kr.jsx)(xi, { sustainableData: l, size: 200 }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
        Oi = (e) => {
          let { products: t } = e;
          return (0, kr.jsxs)("div", {
            className: "row mt-5",
            children: [
              (0, kr.jsx)("h3", {
                className: "d-flex justify-content-center mb-4",
                children: "PRODUTOS",
              }),
              t.map((e) =>
                (0, kr.jsx)(
                  "div",
                  {
                    className:
                      "col-md-3 col-6 d-flex justify-content-center align-items-center",
                    children: (0, kr.jsx)(Pi, {
                      id: e.id,
                      title: e.title,
                      image: e.image,
                      price: e.price,
                      brand: e.brand,
                      sustainableData: e.sustainableData || null,
                    }),
                  },
                  e.id,
                ),
              ),
            ],
          });
        },
        Ti = JSON.parse(
          '[{"id":1,"image":"/images/01.jpg","title":"Vestido Floral","price":59.99,"sizes":["S","M","L"],"colors":[{"name":"Floral","hex":"#ffffff"}],"brand":"FashionStyle","category":"feminino","description":"Descri\xe7\xe3o do Vestido Floral.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"fairtrade":["ftts","wrap",{"colorSection":"#EDD57F"}],"resources":["blue","sfa",{"colorSection":"#61BEAD"}],"animalwelfare":["rws","rds",{"colorSection":"#628FC5"}],"workconditions":["fwf",{"colorSection":"#B39AC7"}]}},{"id":2,"image":"/images/02.jpg","title":"Sapato de Salto Alto","price":89.99,"sizes":["36","37","38","39"],"colors":[{"name":"Preto","hex":"#000000"},{"name":"Vermelho","hex":"#ff0000"}],"brand":"Zara","category":"feminino","description":"Descri\xe7\xe3o do Sapato de Salto Alto.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"fairtrade":["ftts","wrap",{"colorSection":"#EDD57F"}],"resources":["blue","sfa",{"colorSection":"#61BEAD"}],"animalwelfare":[],"workconditions":[]}},{"id":3,"image":"/images/03.jpg","title":"Bolsa","price":19.99,"sizes":["\xdanico"],"colors":[{"name":"Marrom","hex":"#8b4513"},{"name":"Caramelo","hex":"#d2691e"}],"brand":"Nalu","category":"feminino","description":"Descri\xe7\xe3o da Bolsa.","sustainableData":{"organic":["gots",{"colorSection":"#EEAD6D"}],"fairtrade":[],"resources":["blue","sfa",{"colorSection":"#61BEAD"}],"animalwelfare":["rws",{"colorSection":"#628FC5"}],"workconditions":["fwf",{"colorSection":"#B39AC7"}]}},{"id":4,"image":"/images/04.jpg","title":"Blusa de Algod\xe3o","price":29.99,"sizes":["S","M","L"],"colors":[{"name":"Rosa","hex":"#ffc0cb"},{"name":"Branco","hex":"#ffffff"}],"brand":"CasualWear","category":"feminino","description":"Descri\xe7\xe3o da Blusa de Algod\xe3o.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"fairtrade":[],"resources":[],"animalwelfare":["rws","rds",{"colorSection":"#628FC5"}],"workconditions":[]}},{"id":5,"image":"/images/05.jpeg","title":"Sand\xe1lia Rasteira","price":39.99,"sizes":["35","36","37","38"],"colors":[{"name":"Preto","hex":"#000000"},{"name":"Branco","hex":"#ffffff"}],"brand":"SummerFootwear","category":"feminino","description":"Descri\xe7\xe3o da Sand\xe1lia Rasteira.","sustainableData":{"workconditions":["fwf",{"colorSection":"#B39AC7"}]}},{"id":6,"image":"/images/06.jpg","title":"Cal\xe7a de Alfaiataria","price":29.99,"sizes":["36","38","40"],"colors":[{"name":"Cinza","hex":"#808080"}],"brand":"DenimStyle","category":"feminino","description":"Descri\xe7\xe3o da Cal\xe7a de Alfaiataria.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"resources":["blue",{"colorSection":"#61BEAD"}],"animalwelfare":["rws",{"colorSection":"#628FC5"}]}},{"id":7,"image":"/images/07.jpg","title":"Camisola de Tric\xf4","price":19.99,"sizes":["S","M","L"],"colors":[{"name":"Branca","hex":"#ffffff"}],"brand":"JewelCraft","category":"feminino","description":"Descri\xe7\xe3o da Camisola de Tric\xf4.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"fairtrade":["ftts","wrap",{"colorSection":"#EDD57F"}],"animalwelfare":["rws","rds",{"colorSection":"#628FC5"}],"workconditions":["fwf",{"colorSection":"#B39AC7"}]}},{"id":8,"image":"/images/08.jpg","title":"Saia Midi","price":54.99,"sizes":["S","M","L"],"colors":[{"name":"Cinza","hex":"#808080"},{"name":"Preto","hex":"#000000"}],"brand":"ElegantFashion","category":"feminino","description":"Descri\xe7\xe3o da Saia Midi.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"fairtrade":["ftts","wrap",{"colorSection":"#EDD57F"}],"resources":["blue",{"colorSection":"#61BEAD"}]}},{"id":9,"image":"/images/09.jpg","title":"Casaco","price":79.99,"sizes":["\xdanico"],"colors":[{"name":"Branco","hex":"#ffffff"}],"brand":"UrbanExplorer","category":"feminino","description":"Descri\xe7\xe3o do Casaco.","sustainableData":{"organic":["gots",{"colorSection":"#EEAD6D"}],"fairtrade":["ftts",{"colorSection":"#EDD57F"}],"animalwelfare":["rds",{"colorSection":"#628FC5"}],"workconditions":["fwf",{"colorSection":"#B39AC7"}]}},{"id":10,"image":"/images/10.jpg","title":"Vestido de Festa Longo","price":129.99,"sizes":["S","M","L"],"colors":[{"name":"Floral","hex":"#ffffff"}],"brand":"GlamourDress","category":"feminino","description":"Descri\xe7\xe3o do Vestido de Festa Longo.","sustainableData":{"organic":["gots","ocs",{"colorSection":"#EEAD6D"}],"fairtrade":["ftts","wrap",{"colorSection":"#EDD57F"}],"workconditions":["fwf",{"colorSection":"#B39AC7"}]}}]',
        ),
        Ri = () =>
          (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                className: "products-heading",
                children: [
                  (0, kr.jsx)("h1", {
                    className: "heading-title",
                    children: "Produtos",
                  }),
                  (0, kr.jsx)(Oi, { products: Ti }),
                ],
              }),
              (0, kr.jsx)(ti, {}),
            ],
          }),
        Di = (0, e.createContext)(),
        Li = (t) => {
          let { children: n } = t;
          const [r, a] = (0, e.useState)([]),
            o = (e) => {
              a((t) => t.filter((t) => t.id !== e));
            },
            i = {
              cart: r,
              addItem: function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
                a((n) =>
                  n.find((t) => t.id === e.id)
                    ? n.map((n) =>
                        n.id === e.id ? { ...n, quantity: n.quantity + t } : n,
                      )
                    : [...n, { ...e, quantity: t }],
                );
              },
              removeItem: o,
              decreaseItemQuantity: (e) => {
                a((t) =>
                  t.map((t) =>
                    t.id === e
                      ? t.quantity <= 1
                        ? (o(e), t)
                        : { ...t, quantity: t.quantity - 1 }
                      : t,
                  ),
                );
              },
              increaseItemQuantity: (e) => {
                a((t) =>
                  t.map((t) =>
                    t.id === e ? { ...t, quantity: t.quantity + 1 } : t,
                  ),
                );
              },
            };
          return (0, kr.jsx)(Di.Provider, { value: i, children: n });
        },
        zi = () => {
          const t = (0, e.useContext)(Di);
          if (!t)
            throw new Error(
              "useShoppingCart deve ser usado dentro de um ShoppingCartProvider",
            );
          return t;
        },
        Ii = () => {
          const { id: t } = (function () {
              let { matches: t } = e.useContext(Wn),
                n = t[t.length - 1];
              return n ? n.params : {};
            })(),
            { addItem: n } = zi(),
            r = Ti.find((e) => e.id === parseInt(t));
          if ((console.log(r), !r))
            return (0, kr.jsx)("div", {
              children: "Produto n\xe3o encontrado.",
            });
          const [a, o] = (0, e.useState)(null),
            [i, l] = (0, e.useState)(null),
            [s, u] = (0, e.useState)(null),
            c = r.colors.reduce((e, t) => ((e[t.name] = t.hex), e), {}),
            d = () => {
              a && s
                ? n({
                    id: r.id,
                    image: r.image,
                    title: r.title,
                    price: r.price,
                    color: a,
                    colorHex: i,
                    size: s,
                    sustainableData: r.sustainableData,
                  })
                : alert(
                    "Selecione a cor e o tamanho antes de adicionar ao carrinho",
                  );
            };
          return (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                className: "product-details-container px-2 py-5 mt-4",
                children: [
                  (0, kr.jsx)("div", {
                    className: "product-image col-lg-6 col-sm-12",
                    children: (0, kr.jsx)("img", {
                      src: r.image,
                      alt: r.title,
                      className: "responsive-image px-2",
                    }),
                  }),
                  (0, kr.jsx)("div", {
                    className: "product-info col-lg-6 col-sm-12 w-100 px-2",
                    children: (0, kr.jsxs)("div", {
                      children: [
                        (0, kr.jsxs)("div", {
                          className:
                            "d-flex align-items-center justify-content-between",
                          children: [
                            (0, kr.jsxs)("h5", {
                              className: "p-2",
                              children: [r.title, " | ", r.brand],
                            }),
                            (0, kr.jsxs)("div", {
                              className: "d-flex flex-column m-2",
                              children: [
                                (0, kr.jsx)("i", {
                                  className: "bi bi-star p-2",
                                  size: "2x",
                                  style: { cursor: "pointer" },
                                }),
                                (0, kr.jsx)("i", {
                                  className: "bi bi-share p-2",
                                  size: "2x",
                                  style: { cursor: "pointer" },
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, kr.jsxs)("h2", {
                          className: "p-2",
                          style: {
                            borderTop: "1px solid #E3D3B2",
                            marginBottom: "32px",
                          },
                          children: ["\u20ac ", r.price],
                        }),
                        (0, kr.jsxs)("div", {
                          className: "d-flex flex-column",
                          children: [
                            (0, kr.jsxs)("p", {
                              className: "mb-1",
                              children: ["Cor: ", a],
                            }),
                            (0, kr.jsx)("div", {
                              className: "d-flex flex-wrap",
                              children: r.colors.map((e) =>
                                (0, kr.jsx)(
                                  "button",
                                  {
                                    className: "color-option ".concat(
                                      a === e.name ? "selected" : "",
                                    ),
                                    style: {
                                      backgroundColor: e.hex,
                                      width: "40px",
                                      height: "40px",
                                      marginRight: "8px",
                                      marginBottom: "8px",
                                      border: "1px solid #ddd",
                                      borderRadius: "4px",
                                      padding: "4px",
                                    },
                                    onClick: () =>
                                      ((e) => {
                                        o(e === a ? null : e), l(c[e]);
                                      })(e.name),
                                    children:
                                      a === e.hex &&
                                      (0, kr.jsx)("span", {
                                        style: {
                                          marginLeft: "4px",
                                          border: "blue",
                                        },
                                        children: e.hex,
                                      }),
                                  },
                                  e.name,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, kr.jsxs)("div", {
                          className: "mt-2",
                          children: [
                            (0, kr.jsx)("p", { children: "Tamanho:" }),
                            (0, kr.jsx)("div", {
                              className: "d-flex",
                              children: r.sizes.map((e, t) =>
                                (0, kr.jsx)(
                                  "button",
                                  {
                                    className:
                                      "btn btn-outline-primary size-button mb-4 ".concat(
                                        s === e ? "selected" : "",
                                      ),
                                    style: {
                                      border: "1px solid ".concat(
                                        s === e ? "#E3D3B2" : "black",
                                      ),
                                      color: "".concat(s === e ? "black" : ""),
                                      backgroundColor: "".concat(
                                        s === e ? "#E3D3B2" : "",
                                      ),
                                      marginRight:
                                        t < r.sizes.length - 1 ? "8px" : "0",
                                    },
                                    onClick: () =>
                                      ((e) => {
                                        u(e === s ? null : e);
                                      })(e),
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, kr.jsx)("button", {
                          onClick: d,
                          className:
                            "btn btn-primary w-100 rounded-2 d-none d-sm-block add-to-cart-button",
                          style: {
                            color: "#000",
                            background: "#A7C7D9",
                            fontSize: "16px",
                            fontWeight: "bold",
                            border: "none",
                          },
                          children: "Adicionar ao carrinho",
                        }),
                        (0, kr.jsx)("div", {
                          className: "mt-4 d-flex justify-content-center",
                          children: (0, kr.jsx)(xi, {
                            sustainableData: r.sustainableData,
                            size: 204,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, kr.jsx)("p", {
                className: "py-2 px-4",
                children: "DETALHES",
              }),
              (0, kr.jsx)("p", {
                className: "py-2 px-4",
                children:
                  "Um excelente exemplo do requintado artesanato italiano, o corte sob medida deste blazer de l\xe3 trespassado da Lemon W \xe9 complementado por lapelas cl\xe1ssicas com entalhes. Confeccionado em ricas fibras de l\xe3, uma silhueta ligeiramente recortada e um logotipo triangular nas costas d\xe3o um toque diferente ao seu fasc\xednio tradicional. Fabricado em: It\xe1lia Cor da marca: A7C7D9 AZUL CLARO Destaques l\xe3 preta design sob medida lapelas entalhadas fecho de bot\xe3o trespassado mangas compridas punhos abotoados dois bolsos frontais com jactos bainha reta cortada Estilo da marca ID: UGM257SOOO11A6",
              }),
              (0, kr.jsx)("button", {
                onClick: d,
                className:
                  "btn btn-primary w-100 mt-3 d-sm-none add-to-cart-button",
                style: {
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  margin: "auto",
                  zIndex: "1000",
                  maxWidth: "95%",
                  marginBottom: "16px",
                  color: "#000",
                  background: "#A7C7D9",
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                },
                children: "Adicionar ao carrinho",
              }),
              (0, kr.jsx)(ti, {}),
            ],
          });
        };
      function Ai() {
        return (
          (Ai = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ai.apply(this, arguments)
        );
      }
      function Fi(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n(540);
      function Mi(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function Bi(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function Ui(t, n) {
        return Object.keys(n).reduce(function (r, a) {
          var o,
            i = r,
            l = i[Mi(a)],
            s = i[a],
            u = Fi(i, [Mi(a), a].map(Bi)),
            c = n[a],
            d = (function (t, n, r) {
              var a = (0, e.useRef)(void 0 !== t),
                o = (0, e.useState)(n),
                i = o[0],
                l = o[1],
                s = void 0 !== t,
                u = a.current;
              return (
                (a.current = s),
                !s && u && i !== n && l(n),
                [
                  s ? t : i,
                  (0, e.useCallback)(
                    function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          a = 1;
                        a < t;
                        a++
                      )
                        n[a - 1] = arguments[a];
                      r && r.apply(void 0, [e].concat(n)), l(e);
                    },
                    [r],
                  ),
                ]
              );
            })(s, l, t[c]),
            f = d[0],
            p = d[1];
          return Ai({}, u, (((o = {})[a] = f), (o[c] = p), o));
        }, t);
      }
      function Wi() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function $i(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this),
        );
      }
      function Hi(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (Wi.__suppressDeprecationWarning = !0),
        ($i.__suppressDeprecationWarning = !0),
        (Hi.__suppressDeprecationWarning = !0);
      function Vi(e) {
        var t = (function (e) {
          return (e && e.ownerDocument) || document;
        })(e);
        return (t && t.defaultView) || window;
      }
      var Ki = /([A-Z])/g;
      var Qi = /^ms-/;
      function qi(e) {
        return (function (e) {
          return e.replace(Ki, "-$1").toLowerCase();
        })(e).replace(Qi, "-ms-");
      }
      var Gi =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const Yi = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t)
          return (
            e.style.getPropertyValue(qi(t)) ||
            (function (e, t) {
              return Vi(e).getComputedStyle(e, t);
            })(e).getPropertyValue(qi(t))
          );
        Object.keys(t).forEach(function (a) {
          var o = t[a];
          o || 0 === o
            ? !(function (e) {
                return !(!e || !Gi.test(e));
              })(a)
              ? (n += qi(a) + ": " + o + ";")
              : (r += a + "(" + o + ") ")
            : e.style.removeProperty(qi(a));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function Xi(e, t) {
        return (
          (Xi = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Xi(e, t)
        );
      }
      const Ji = !1,
        Zi = e.createContext(null);
      var el = "unmounted",
        tl = "exited",
        nl = "entering",
        rl = "entered",
        al = "exiting",
        ol = (function (t) {
          var n, r;
          function a(e, n) {
            var r;
            r = t.call(this, e, n) || this;
            var a,
              o = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? o
                  ? ((a = tl), (r.appearStatus = nl))
                  : (a = rl)
                : (a = e.unmountOnExit || e.mountOnEnter ? el : tl),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (r = t),
            ((n = a).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            Xi(n, r),
            (a.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === el ? { status: tl } : null;
            });
          var o = a.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== nl && n !== rl && (t = nl)
                  : (n !== nl && n !== rl) || (t = al);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === nl)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : Jt.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === tl &&
                  this.setState({ status: el });
            }),
            (o.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [Jt.findDOMNode(this), r],
                o = a[0],
                i = a[1],
                l = this.getTimeouts(),
                s = r ? l.appear : l.enter;
              (!e && !n) || Ji
                ? this.safeSetState({ status: rl }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: nl }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: rl }, function () {
                          t.props.onEntered(o, i);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : Jt.findDOMNode(this);
              t && !Ji
                ? (this.props.onExit(r),
                  this.safeSetState({ status: al }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: tl }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: tl }, function () {
                    e.props.onExited(r);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : Jt.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    o = a[0],
                    i = a[1];
                  this.props.addEndListener(o, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var t = this.state.status;
              if (t === el) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  Fi(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                Zi.Provider,
                { value: null },
                "function" === typeof r
                  ? r(t, a)
                  : e.cloneElement(e.Children.only(r), a),
              );
            }),
            a
          );
        })(e.Component);
      function il() {}
      (ol.contextType = Zi),
        (ol.propTypes = {}),
        (ol.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: il,
          onEntering: il,
          onEntered: il,
          onExit: il,
          onExiting: il,
          onExited: il,
        }),
        (ol.UNMOUNTED = el),
        (ol.EXITED = tl),
        (ol.ENTERING = nl),
        (ol.ENTERED = rl),
        (ol.EXITING = al);
      const ll = ol,
        sl = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var ul = !1,
        cl = !1;
      try {
        var dl = {
          get passive() {
            return (ul = !0);
          },
          get once() {
            return (cl = ul = !0);
          },
        };
        sl &&
          (window.addEventListener("test", dl, dl),
          window.removeEventListener("test", dl, !0));
      } catch (xs) {}
      const fl = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !cl) {
          var a = r.once,
            o = r.capture,
            i = n;
          !cl &&
            a &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, o), n.call(this, r);
              }),
            (n.__once = i)),
            e.addEventListener(t, i, ul ? r : o);
        }
        e.addEventListener(t, n, r);
      };
      const pl = function (e, t, n, r) {
        var a = r && "boolean" !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      const hl = function (e, t, n, r) {
        return (
          fl(e, t, n, r),
          function () {
            pl(e, t, n, r);
          }
        );
      };
      function ml(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          o = hl(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 },
          );
        return function () {
          clearTimeout(a), o();
        };
      }
      function gl(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = Yi(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = ml(e, n, r),
          o = hl(e, "transitionend", t);
        return function () {
          a(), o();
        };
      }
      function vl(e, t) {
        const n = Yi(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function yl(e, t) {
        const n = vl(e, "transitionDuration"),
          r = vl(e, "transitionDelay"),
          a = gl(
            e,
            (n) => {
              n.target === e && (a(), t(n));
            },
            n + r,
          );
      }
      const bl = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter((e) => null != e)
          .reduce((e, t) => {
            if ("function" !== typeof t)
              throw new Error(
                "Invalid Argument Type, must only provide functions, undefined, or null.",
              );
            return null === e
              ? t
              : function () {
                  for (
                    var n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  e.apply(this, r), t.apply(this, r);
                };
          }, null);
      };
      const xl = (e) =>
        e && "function" !== typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const wl = function (t, n) {
        return (0, e.useMemo)(
          () =>
            (function (e, t) {
              const n = xl(e),
                r = xl(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(t, n),
          [t, n],
        );
      };
      const Sl = e.forwardRef((t, n) => {
          let {
            onEnter: r,
            onEntering: a,
            onEntered: o,
            onExit: i,
            onExiting: l,
            onExited: s,
            addEndListener: u,
            children: c,
            childRef: d,
            ...f
          } = t;
          const p = (0, e.useRef)(null),
            h = wl(p, d),
            m = (e) => {
              var t;
              h(
                (t = e) && "setState" in t
                  ? Jt.findDOMNode(t)
                  : null != t
                    ? t
                    : null,
              );
            },
            g = (e) => (t) => {
              e && p.current && e(p.current, t);
            },
            v = (0, e.useCallback)(g(r), [r]),
            y = (0, e.useCallback)(g(a), [a]),
            b = (0, e.useCallback)(g(o), [o]),
            x = (0, e.useCallback)(g(i), [i]),
            w = (0, e.useCallback)(g(l), [l]),
            S = (0, e.useCallback)(g(s), [s]),
            k = (0, e.useCallback)(g(u), [u]);
          return (0, kr.jsx)(ll, {
            ref: n,
            ...f,
            onEnter: v,
            onEntered: b,
            onEntering: y,
            onExit: x,
            onExited: S,
            onExiting: w,
            addEndListener: k,
            nodeRef: p,
            children:
              "function" === typeof c
                ? (e, t) => c(e, { ...t, ref: m })
                : e.cloneElement(c, { ref: m }),
          });
        }),
        kl = {
          height: ["marginTop", "marginBottom"],
          width: ["marginLeft", "marginRight"],
        };
      function El(e, t) {
        const n = t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],
          r = kl[e];
        return n + parseInt(Yi(t, r[0]), 10) + parseInt(Yi(t, r[1]), 10);
      }
      const jl = {
          [tl]: "collapse",
          [al]: "collapsing",
          [nl]: "collapsing",
          [rl]: "collapse show",
        },
        Cl = e.forwardRef((t, n) => {
          let {
            onEnter: r,
            onEntering: a,
            onEntered: o,
            onExit: i,
            onExiting: l,
            className: s,
            children: u,
            dimension: c = "height",
            in: d = !1,
            timeout: f = 300,
            mountOnEnter: p = !1,
            unmountOnExit: h = !1,
            appear: m = !1,
            getDimensionValue: g = El,
            ...v
          } = t;
          const y = "function" === typeof c ? c() : c,
            b = (0, e.useMemo)(
              () =>
                bl((e) => {
                  e.style[y] = "0";
                }, r),
              [y, r],
            ),
            x = (0, e.useMemo)(
              () =>
                bl((e) => {
                  const t = "scroll"
                    .concat(y[0].toUpperCase())
                    .concat(y.slice(1));
                  e.style[y] = "".concat(e[t], "px");
                }, a),
              [y, a],
            ),
            w = (0, e.useMemo)(
              () =>
                bl((e) => {
                  e.style[y] = null;
                }, o),
              [y, o],
            ),
            S = (0, e.useMemo)(
              () =>
                bl((e) => {
                  (e.style[y] = "".concat(g(y, e), "px")),
                    (function (e) {
                      e.offsetHeight;
                    })(e);
                }, i),
              [i, g, y],
            ),
            k = (0, e.useMemo)(
              () =>
                bl((e) => {
                  e.style[y] = null;
                }, l),
              [y, l],
            );
          return (0, kr.jsx)(Sl, {
            ref: n,
            addEndListener: yl,
            ...v,
            "aria-expanded": v.role ? d : null,
            onEnter: b,
            onEntering: x,
            onEntered: w,
            onExit: S,
            onExiting: k,
            childRef: u.ref,
            in: d,
            timeout: f,
            mountOnEnter: p,
            unmountOnExit: h,
            appear: m,
            children: (t, n) =>
              e.cloneElement(u, {
                ...n,
                className: Bo()(
                  s,
                  u.props.className,
                  jl[t],
                  "width" === y && "collapse-horizontal",
                ),
              }),
          });
        }),
        _l = Cl;
      function Nl(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      const Pl = e.createContext({});
      Pl.displayName = "AccordionContext";
      const Ol = Pl,
        Tl = e.forwardRef((t, n) => {
          let {
            as: r = "div",
            bsPrefix: a,
            className: o,
            children: i,
            eventKey: l,
            ...s
          } = t;
          const { activeEventKey: u } = (0, e.useContext)(Ol);
          return (
            (a = Ko(a, "accordion-collapse")),
            (0, kr.jsx)(_l, {
              ref: n,
              in: Nl(u, l),
              ...s,
              className: Bo()(o, a),
              children: (0, kr.jsx)(r, { children: e.Children.only(i) }),
            })
          );
        });
      Tl.displayName = "AccordionCollapse";
      const Rl = Tl,
        Dl = e.createContext({ eventKey: "" });
      Dl.displayName = "AccordionItemContext";
      const Ll = Dl,
        zl = e.forwardRef((t, n) => {
          let {
            as: r = "div",
            bsPrefix: a,
            className: o,
            onEnter: i,
            onEntering: l,
            onEntered: s,
            onExit: u,
            onExiting: c,
            onExited: d,
            ...f
          } = t;
          a = Ko(a, "accordion-body");
          const { eventKey: p } = (0, e.useContext)(Ll);
          return (0, kr.jsx)(Rl, {
            eventKey: p,
            onEnter: i,
            onEntering: l,
            onEntered: s,
            onExit: u,
            onExiting: c,
            onExited: d,
            children: (0, kr.jsx)(r, { ref: n, ...f, className: Bo()(o, a) }),
          });
        });
      zl.displayName = "AccordionBody";
      const Il = zl;
      const Al = e.forwardRef((t, n) => {
        let {
          as: r = "button",
          bsPrefix: a,
          className: o,
          onClick: i,
          ...l
        } = t;
        a = Ko(a, "accordion-button");
        const { eventKey: s } = (0, e.useContext)(Ll),
          u = (function (t, n) {
            const {
              activeEventKey: r,
              onSelect: a,
              alwaysOpen: o,
            } = (0, e.useContext)(Ol);
            return (e) => {
              let i = t === r ? null : t;
              o &&
                (i = Array.isArray(r)
                  ? r.includes(t)
                    ? r.filter((e) => e !== t)
                    : [...r, t]
                  : [t]),
                null == a || a(i, e),
                null == n || n(e);
            };
          })(s, i),
          { activeEventKey: c } = (0, e.useContext)(Ol);
        return (
          "button" === r && (l.type = "button"),
          (0, kr.jsx)(r, {
            ref: n,
            onClick: u,
            ...l,
            "aria-expanded": Array.isArray(c) ? c.includes(s) : s === c,
            className: Bo()(o, a, !Nl(c, s) && "collapsed"),
          })
        );
      });
      Al.displayName = "AccordionButton";
      const Fl = Al,
        Ml = e.forwardRef((e, t) => {
          let {
            as: n = "h2",
            bsPrefix: r,
            className: a,
            children: o,
            onClick: i,
            ...l
          } = e;
          return (
            (r = Ko(r, "accordion-header")),
            (0, kr.jsx)(n, {
              ref: t,
              ...l,
              className: Bo()(a, r),
              children: (0, kr.jsx)(Fl, { onClick: i, children: o }),
            })
          );
        });
      Ml.displayName = "AccordionHeader";
      const Bl = Ml,
        Ul = e.forwardRef((t, n) => {
          let {
            as: r = "div",
            bsPrefix: a,
            className: o,
            eventKey: i,
            ...l
          } = t;
          a = Ko(a, "accordion-item");
          const s = (0, e.useMemo)(() => ({ eventKey: i }), [i]);
          return (0, kr.jsx)(Ll.Provider, {
            value: s,
            children: (0, kr.jsx)(r, { ref: n, ...l, className: Bo()(o, a) }),
          });
        });
      Ul.displayName = "AccordionItem";
      const Wl = Ul,
        $l = e.forwardRef((t, n) => {
          const {
              as: r = "div",
              activeKey: a,
              bsPrefix: o,
              className: i,
              onSelect: l,
              flush: s,
              alwaysOpen: u,
              ...c
            } = Ui(t, { activeKey: "onSelect" }),
            d = Ko(o, "accordion"),
            f = (0, e.useMemo)(
              () => ({ activeEventKey: a, onSelect: l, alwaysOpen: u }),
              [a, l, u],
            );
          return (0, kr.jsx)(Ol.Provider, {
            value: f,
            children: (0, kr.jsx)(r, {
              ref: n,
              ...c,
              className: Bo()(i, d, s && "".concat(d, "-flush")),
            }),
          });
        });
      $l.displayName = "Accordion";
      const Hl = Object.assign($l, {
          Button: Fl,
          Collapse: Rl,
          Item: Wl,
          Header: Bl,
          Body: Il,
        }),
        Vl = n.p + "static/media/chart.aaf7faad9a86db697202.png";
      const Kl = function () {
          const t = {
              height: "50px",
              width: "50px",
              backgroundColor: "#EEAD6D",
              borderRadius: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            },
            n = {
              height: "50px",
              width: "50px",
              backgroundColor: "#EDD57F",
              borderRadius: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            },
            r = {
              height: "50px",
              width: "50px",
              backgroundColor: "#61BEAD",
              borderRadius: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            },
            a = {
              height: "50px",
              width: "50px",
              backgroundColor: "#628FC5",
              borderRadius: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            },
            o = {
              height: "50px",
              width: "50px",
              backgroundColor: "#B39AC7",
              borderRadius: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            },
            [i, l] = (0, e.useState)(null);
          return (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                className: "accordion-container",
                children: [
                  (0, kr.jsx)("h2", {
                    style: { textAlign: "left", marginBottom: "20px" },
                    children:
                      "FAQs - Identifying Sustainable Clothing and Certifications",
                  }),
                  (0, kr.jsx)("div", {
                    style: { textAlign: "center", marginBottom: "20px" },
                    children: (0, kr.jsx)("img", {
                      src: Vl,
                      alt: "Sustainable Clothing Certifications Chart",
                      style: { maxWidth: "50%", height: "auto" },
                    }),
                  }),
                  (0, kr.jsxs)(Hl, {
                    defaultActiveKey: "0",
                    onSelect: (e) => {
                      l(i === e ? null : e);
                    },
                    children: [
                      (0, kr.jsxs)(Hl.Item, {
                        eventKey: "1",
                        children: [
                          (0, kr.jsxs)(Hl.Item, {
                            eventKey: "0",
                            children: [
                              (0, kr.jsx)(Hl.Header, {
                                children: (0, kr.jsx)("div", {
                                  style: {
                                    textAlign: "left",
                                    marginLeft: "10px",
                                  },
                                  children:
                                    "What are these charts and what are they used for? What does each colour mean?",
                                }),
                              }),
                              (0, kr.jsx)(Hl.Body, {
                                children: (0, kr.jsx)("div", {
                                  style: { textAlign: "Left" },
                                  children: (0, kr.jsx)("div", {
                                    children:
                                      "The clothes available on our platform are categorized based on the certifications that represent them and which also identify the clothes through graphics and their respective colors that identify how sustainable a garment is based on the predominance of its colors, as we can see below.",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, kr.jsx)(Hl.Header, {
                            children: (0, kr.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                "1" !== i &&
                                  (0, kr.jsx)("span", {
                                    style: {
                                      ...t,
                                      height: "25px",
                                      width: "25px",
                                      flexShrink: 0,
                                    },
                                  }),
                                (0, kr.jsx)("div", {
                                  style: {
                                    textAlign: "left",
                                    marginLeft: "10px",
                                  },
                                  children: "1. Organic Material Certification",
                                }),
                              ],
                            }),
                          }),
                          (0, kr.jsx)(Hl.Body, {
                            children: (0, kr.jsxs)("div", {
                              style: { textAlign: "Left" },
                              children: [
                                (0, kr.jsx)("span", { style: t }),
                                (0, kr.jsxs)("div", {
                                  children: [
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "GOTS (Global Organic Textiles Standard):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Certifies products with at least 70% organic agriculture contribution.",
                                        (0, kr.jsx)("br", {}),
                                        "Ensures environmentally friendly production, better working conditions, and quality assurance.",
                                        (0, kr.jsx)("br", {}),
                                        "Prohibits hazardous inputs like toxic heavy metals and aromatic solvents.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://global-standard.org/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                    (0, kr.jsx)("br", {}),
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "OCS (Organic Content Standard):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Enables the use of organic material in processing.",
                                        (0, kr.jsx)("br", {}),
                                        "Validates the presence and amount of organic material in the final product.",
                                        (0, kr.jsx)("br", {}),
                                        "Applies to fibers, wool, fabrics, clothes, and upholstery fabrics, excluding leather.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://textileexchange.org/organic-content-standard/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, kr.jsxs)(Hl.Item, {
                        eventKey: "2",
                        children: [
                          (0, kr.jsx)(Hl.Header, {
                            children: (0, kr.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                "2" !== i &&
                                  (0, kr.jsx)("span", {
                                    style: {
                                      ...n,
                                      height: "25px",
                                      width: "25px",
                                      flexShrink: 0,
                                    },
                                  }),
                                (0, kr.jsx)("div", {
                                  style: {
                                    textAlign: "left",
                                    marginLeft: "10px",
                                  },
                                  children:
                                    "2. Fair Trade and Ethical Manufacturing:",
                                }),
                              ],
                            }),
                          }),
                          (0, kr.jsx)(Hl.Body, {
                            children: (0, kr.jsxs)("div", {
                              style: { textAlign: "Left" },
                              children: [
                                (0, kr.jsx)("span", { style: n }),
                                (0, kr.jsxs)("div", {
                                  children: [
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "Fair Trade Textile Standard:",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Facilitates sustainable and equitable trade relationships.",
                                        (0, kr.jsx)("br", {}),
                                        "Applicable for end products exported from developing to developed countries.",
                                        (0, kr.jsx)("br", {}),
                                        "Ensures fair-trade cotton usage and safe working conditions in the supply chain.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://www.fairtrade.net/standard/textile",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                    (0, kr.jsx)("br", {}),
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "WRAP (Worldwide Responsible Apparel Production):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Independent certification fostering safe, lawful, humane, and ethical manufacturing.",
                                        (0, kr.jsx)("br", {}),
                                        "Demonstrates a commitment to social and ethical standards.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://wrapcompliance.org/en/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, kr.jsxs)(Hl.Item, {
                        eventKey: "3",
                        children: [
                          (0, kr.jsx)(Hl.Header, {
                            children: (0, kr.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                "3" !== i &&
                                  (0, kr.jsx)("span", {
                                    style: {
                                      ...r,
                                      height: "25px",
                                      width: "25px",
                                      flexShrink: 0,
                                    },
                                  }),
                                (0, kr.jsx)("div", {
                                  style: {
                                    textAlign: "left",
                                    marginLeft: "10px",
                                  },
                                  children:
                                    "3. Environmental Impact and Resource Responsibility:",
                                }),
                              ],
                            }),
                          }),
                          (0, kr.jsx)(Hl.Body, {
                            children: (0, kr.jsxs)("div", {
                              style: { textAlign: "Left" },
                              children: [
                                (0, kr.jsx)("span", { style: r }),
                                (0, kr.jsxs)("div", {
                                  children: [
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children: "Bluesign:",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Emphasizes responsible resource use and minimal impact on people and the environment.",
                                        (0, kr.jsx)("br", {}),
                                        "Certifies stringent consumer safety requirements and promotes an ideal production process.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://www.bluesign.com/en/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                    (0, kr.jsx)("br", {}),
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "SFA (Sustainable Fibre Alliance):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Tackles sustainability challenges in cashmere production.",
                                        (0, kr.jsx)("br", {}),
                                        "Focuses on the safety and welfare of goats and herders.",
                                        (0, kr.jsx)("br", {}),
                                        "Developed as the world's first holistic sustainability cashmere standard.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://sustainablefibre.org/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, kr.jsxs)(Hl.Item, {
                        eventKey: "4",
                        children: [
                          (0, kr.jsx)(Hl.Header, {
                            children: (0, kr.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                "4" !== i &&
                                  (0, kr.jsx)("span", {
                                    style: {
                                      ...a,
                                      height: "25px",
                                      width: "25px",
                                      flexShrink: 0,
                                    },
                                  }),
                                (0, kr.jsx)("div", {
                                  style: {
                                    textAlign: "left",
                                    marginLeft: "10px",
                                  },
                                  children: "4. Animal Welfare Certification:",
                                }),
                              ],
                            }),
                          }),
                          (0, kr.jsx)(Hl.Body, {
                            children: (0, kr.jsxs)("div", {
                              style: { textAlign: "Left" },
                              children: [
                                (0, kr.jsx)("span", { style: a }),
                                (0, kr.jsxs)("div", {
                                  children: [
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "RWS (Responsible Wool Standard):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Ensures the proper treatment of sheep and maintains the quality of grazing land.",
                                        (0, kr.jsx)("br", {}),
                                        "Provides verification of farm-level practices, allowing brands to claim sustainable wool sourcing.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://textileexchange.org/responsible-wool-standard/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                    (0, kr.jsx)("br", {}),
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "RDS (Responsible Down Standard):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Ensures animal welfare in down and feather products.",
                                        (0, kr.jsx)("br", {}),
                                        "Examines various animal products to guarantee their welfare.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://textileexchange.org/responsible-down-standard/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, kr.jsxs)(Hl.Item, {
                        eventKey: "5",
                        children: [
                          (0, kr.jsx)(Hl.Header, {
                            children: (0, kr.jsxs)("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                "5" !== i &&
                                  (0, kr.jsx)("span", {
                                    style: {
                                      ...o,
                                      height: "25px",
                                      width: "25px",
                                      flexShrink: 0,
                                    },
                                  }),
                                (0, kr.jsx)("div", {
                                  style: {
                                    textAlign: "left",
                                    marginLeft: "10px",
                                  },
                                  children:
                                    "5. Textile Industry Safety and Workplace Conditions:",
                                }),
                              ],
                            }),
                          }),
                          (0, kr.jsx)(Hl.Body, {
                            children: (0, kr.jsxs)("div", {
                              style: { textAlign: "Left" },
                              children: [
                                (0, kr.jsx)("span", { style: o }),
                                (0, kr.jsxs)("div", {
                                  children: [
                                    (0, kr.jsxs)("p", {
                                      children: [
                                        (0, kr.jsx)("strong", {
                                          children:
                                            "FWF (Fair Wear Foundation):",
                                        }),
                                        (0, kr.jsx)("br", {}),
                                        "Works for safer working conditions and sustainable workplace improvements.",
                                        (0, kr.jsx)("br", {}),
                                        "Brands can prioritize manufacturers certified by FWF for safe working conditions.",
                                      ],
                                    }),
                                    (0, kr.jsx)("div", {
                                      className:
                                        "d-flex justify-content-center",
                                      children: (0, kr.jsx)("a", {
                                        href: "https://www.fairwear.org/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "More",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, kr.jsx)("p", {
                    style: { marginTop: "20px" },
                    children:
                      "These categories cover a range of certifications addressing environmental impact, ethical manufacturing, animal welfare, and workplace conditions in the textile industry.",
                  }),
                ],
              }),
              (0, kr.jsx)(ti, {}),
            ],
          });
        },
        Ql = ["as", "disabled"];
      function ql(e) {
        let {
          tagName: t,
          disabled: n,
          href: r,
          target: a,
          rel: o,
          role: i,
          onClick: l,
          tabIndex: s = 0,
          type: u,
        } = e;
        t || (t = null != r || null != a || null != o ? "a" : "button");
        const c = { tagName: t };
        if ("button" === t) return [{ type: u || "button", disabled: n }, c];
        const d = (e) => {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == l || l(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: null != i ? i : "button",
              disabled: void 0,
              tabIndex: n ? void 0 : s,
              href: r,
              target: "a" === t ? a : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? o : void 0,
              onClick: d,
              onKeyDown: (e) => {
                " " === e.key && (e.preventDefault(), d(e));
              },
            },
            c,
          ]
        );
      }
      const Gl = e.forwardRef((e, t) => {
        let { as: n, disabled: r } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Ql);
        const [o, { tagName: i }] = ql(
          Object.assign({ tagName: n, disabled: r }, a),
        );
        return (0, kr.jsx)(i, Object.assign({}, a, o, { ref: t }));
      });
      Gl.displayName = "Button";
      const Yl = e.forwardRef((e, t) => {
        let {
          as: n,
          bsPrefix: r,
          variant: a = "primary",
          size: o,
          active: i = !1,
          disabled: l = !1,
          className: s,
          ...u
        } = e;
        const c = Ko(r, "btn"),
          [d, { tagName: f }] = ql({ tagName: n, disabled: l, ...u }),
          p = f;
        return (0, kr.jsx)(p, {
          ...d,
          ...u,
          ref: t,
          disabled: l,
          className: Bo()(
            s,
            c,
            i && "active",
            a && "".concat(c, "-").concat(a),
            o && "".concat(c, "-").concat(o),
            u.href && l && "disabled",
          ),
        });
      });
      Yl.displayName = "Button";
      const Xl = Yl;
      var Jl, Zl, es;
      Yt(
        Jl ||
          (Jl = a([
            "\n  from { transform: scale(0.5); }\n  to { transform: scale(1); }\n",
          ])),
      ),
        Gt.p(
          Zl ||
            (Zl = a([
              '\n  font-size: 14px;\n  font-family: "Century Gothic", sans-serif;\n',
            ])),
        ),
        Gt.div(
          es ||
            (es = a([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ",
              "px;\n  height: ",
              "px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    ",
              "\n  }\n",
            ])),
          (e) => e.size,
          (e) => e.size,
          (e) => e.size < 200 && "transform: scale(1.2) rotate(45deg);",
        );
      var ts, ns, rs, as, os;
      const is = Gt.div(
          ts ||
            (ts = a([
              "\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  max-width: 100%; /* Ocupa 100% da largura */\n  margin: auto; /* Centraliza o conte\xfado */\n",
            ])),
        ),
        ls = Gt.div(
          ns ||
            (ns = a([
              "\n  width: 48%; /* Ocupa metade da largura */\n  margin-bottom: 20px;\n  margin-top: 80px;\n  @media (max-width: 768px) {\n    width: 100%; /* Em telas pequenas, ocupa 100% da largura */\n  }\n",
            ])),
        ),
        ss = Gt.div(
          rs ||
            (rs = a([
              "\n  text-align: center;\n  margin-top: 80px;\n  font-size: 18px;\n  width: 100%;\n",
            ])),
        ),
        us = Gt.div(
          as ||
            (as = a([
              "\n  width: 48%; /* Ocupa metade da largura */\n  margin-top: 120px;\n  @media (max-width: 768px) {\n    width: 100%; /* Em telas pequenas, ocupa 100% da largura */\n  }\n",
            ])),
        ),
        cs = Gt(Xl)(
          os ||
            (os = a([
              "\n  margin-top: 20px;\n  background-color: #a7c7d9;\n  color: #000;\n  border: none;\n  font-weight: bold;\n  position: relative;\n  @media (max-width: 768px) {\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    background-color: #a7c7d9;\n    color: #000;\n    border: none;\n    font-weight: bold;\n    margin-botton: 'inherit';\n  }\n",
            ])),
        ),
        ds = () => {
          const {
            cart: e,
            addItem: t,
            removeItem: n,
            decreaseItemQuantity: r,
          } = zi();
          let a = 0;
          return (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsx)(is, {
                children:
                  0 === e.length
                    ? (0, kr.jsx)(ss, {
                        children: "Seu carrinho est\xe1 vazio :(",
                      })
                    : (0, kr.jsxs)(kr.Fragment, {
                        children: [
                          (0, kr.jsxs)(ls, {
                            children: [
                              (0, kr.jsx)("h3", { children: "CARRINHO" }),
                              (0, kr.jsx)("ul", {
                                children: e.map(
                                  (o) => (
                                    (a += o.price * o.quantity),
                                    (0, kr.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "d-flex justify-content-between mb-4",
                                        style: {
                                          listStyle: "none",
                                          borderBottom: "1px solid #E3D3B2",
                                        },
                                        children: [
                                          (0, kr.jsxs)("div", {
                                            className: "d-flex flex-column",
                                            children: [
                                              (0, kr.jsx)("img", {
                                                src: o.image,
                                                alt: o.title,
                                                style: { width: "50px" },
                                              }),
                                              o.color,
                                              ", ",
                                              o.size,
                                              " - \u20ac",
                                              o.price,
                                            ],
                                          }),
                                          (0, kr.jsxs)("div", {
                                            className:
                                              "d-flex flex-column align-items-center justify-content-start",
                                            children: [
                                              (0, kr.jsx)(xi, {
                                                sustainableData:
                                                  null === o || void 0 === o
                                                    ? void 0
                                                    : o.sustainableData,
                                                size: 32,
                                                className: "mb-2",
                                              }),
                                              (0, kr.jsxs)("div", {
                                                className:
                                                  "d-flex align-items-center justify-content-start",
                                                children: [
                                                  (0, kr.jsx)("span", {
                                                    className: "me-4 mt-1",
                                                    children: o.quantity,
                                                  }),
                                                  (0, kr.jsx)("button", {
                                                    className:
                                                      "border-0 bg-transparent me-2 px-1",
                                                    onClick: () => {
                                                      return (
                                                        (e = o.id), void n(e)
                                                      );
                                                      var e;
                                                    },
                                                    children: (0, kr.jsx)(
                                                      Ur,
                                                      {},
                                                    ),
                                                  }),
                                                  (0, kr.jsx)("button", {
                                                    className:
                                                      "border-1 rounded-1 bg-transparent me-2 px-2",
                                                    onClick: () => {
                                                      return (
                                                        (e = o.id), void r(e)
                                                      );
                                                      var e;
                                                    },
                                                    children: "-",
                                                  }),
                                                  (0, kr.jsx)("button", {
                                                    className:
                                                      "border-1 rounded-1 bg-transparent px-2",
                                                    onClick: () =>
                                                      ((n) => {
                                                        const r = e.find(
                                                          (e) => e.id === n,
                                                        );
                                                        console.log(r),
                                                          r && t(r, 1);
                                                      })(o.id),
                                                    children: "+",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      o.id,
                                    )
                                  ),
                                ),
                              }),
                              (0, kr.jsxs)("div", {
                                className: "d-flex justify-content-center",
                                children: ["Total: ", a.toFixed(2)],
                              }),
                              (0, kr.jsx)(cs, {
                                variant: "primary",
                                children: "Continuar",
                              }),
                            ],
                          }),
                          (0, kr.jsx)(us, {
                            children: (0, kr.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center justify-content-center",
                              style: {
                                textAlign: "center",
                                marginBottom: "20px",
                              },
                              children: [
                                (0, kr.jsx)("img", {
                                  src: Vl,
                                  alt: "Sustainable Clothing Certifications Chart",
                                  style: { maxWidth: "50%", height: "auto" },
                                }),
                                (0, kr.jsx)("span", {
                                  children: "M\xe9dia: Leafeel!",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
              }),
            ],
          });
        },
        fs = n.p + "static/media/renata.0b166c904a0a27663185.jpg",
        ps = () => {
          const { language: t, changeLanguage: n } = Gr(),
            r = t.flag,
            a = "Flag of ".concat(t.alt),
            [o, i] = (0, e.useState)(window.innerWidth);
          return (
            (0, e.useEffect)(() => {
              const e = () => i(window.innerWidth);
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []),
            (0, kr.jsx)("div", {
              style: { display: "flex", alignItems: "center" },
              children: (0, kr.jsxs)("button", {
                className: "border-0 bg-transparent",
                onClick: n,
                children: [
                  (0, kr.jsx)("img", { src: r, alt: a }),
                  o < 810 &&
                    (0, kr.jsx)("span", {
                      style: {
                        fontSize: "20px",
                        fontFamily: "Century Gothic, sans-serif",
                        textTransform: "uppercase",
                        marginLeft: ".5rem",
                      },
                      children: t.alt,
                    }),
                ],
              }),
            })
          );
        },
        hs = () => {
          const [t, n] = (0, e.useState)("en-GB"),
            [r, a] = (0, e.useState)("GBP");
          return (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                className: "user-profile",
                children: [
                  (0, kr.jsxs)("h1", {
                    children: [
                      (0, kr.jsx)("img", {
                        className: "renata",
                        src: fs,
                        alt: "renata",
                      }),
                      "Welcome, ",
                      (0, kr.jsx)("br", {}),
                      " Renata Vilela!",
                    ],
                  }),
                  (0, kr.jsxs)("ul", {
                    children: [
                      (0, kr.jsx)("li", {
                        children: (0, kr.jsx)(yr, {
                          to: "/my-purchases",
                          children: "My purchases",
                        }),
                      }),
                      (0, kr.jsx)("li", {
                        children: (0, kr.jsx)(yr, {
                          to: "/orders-and-returns",
                          children: "Orders & Returns",
                        }),
                      }),
                      (0, kr.jsx)("li", {
                        children: (0, kr.jsx)(yr, {
                          to: "/details-and-password",
                          children: "Details & Password",
                        }),
                      }),
                      (0, kr.jsx)("li", {
                        children: (0, kr.jsx)(yr, {
                          to: "/address",
                          children: "Address",
                        }),
                      }),
                    ],
                  }),
                  (0, kr.jsxs)("div", {
                    className: "select-container",
                    children: [
                      (0, kr.jsx)("h2", { children: "Region" }),
                      (0, kr.jsxs)("div", {
                        children: [
                          (0, kr.jsx)("label", {
                            htmlFor: "currency",
                            children: "Select Currency",
                          }),
                          (0, kr.jsxs)("select", {
                            id: "currency",
                            value: r,
                            onChange: (e) => {
                              a(e.target.value);
                            },
                            children: [
                              (0, kr.jsx)("option", {
                                value: "GBP",
                                children: "GBP - British Pound",
                              }),
                              (0, kr.jsx)("option", {
                                value: "EUR",
                                children: "EUR - Euro",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, kr.jsxs)("div", {
                    className: "mt-5",
                    children: [
                      (0, kr.jsx)("h2", { children: "Language" }),
                      (0, kr.jsx)(ps, {}),
                    ],
                  }),
                  (0, kr.jsxs)("div", {
                    className: "shop-preferences-section",
                    children: [
                      (0, kr.jsx)("h2", { children: "My Shop Preferences" }),
                      (0, kr.jsx)("div", {
                        children: (0, kr.jsxs)("label", {
                          children: [
                            (0, kr.jsx)("input", {
                              type: "radio",
                              name: "shop-preference",
                              value: "women",
                            }),
                            "Women",
                          ],
                        }),
                      }),
                      (0, kr.jsx)("div", {
                        children: (0, kr.jsxs)("label", {
                          children: [
                            (0, kr.jsx)("input", {
                              type: "radio",
                              name: "shop-preference",
                              value: "men",
                            }),
                            "Men",
                          ],
                        }),
                      }),
                      (0, kr.jsx)("div", {
                        children: (0, kr.jsxs)("label", {
                          children: [
                            (0, kr.jsx)("input", {
                              type: "radio",
                              name: "shop-preference",
                              value: "kids",
                            }),
                            "Kids",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, kr.jsxs)("div", {
                className: "my-settings-section",
                children: [
                  (0, kr.jsx)("h2", { children: "My Settings" }),
                  (0, kr.jsx)("p", {
                    children: (0, kr.jsx)("a", {
                      href: "/communication-preferences",
                      children: "Communication Preferences",
                    }),
                  }),
                ],
              }),
              (0, kr.jsx)(ti, {}),
            ],
          });
        },
        ms = n.p + "static/media/leafeel_logo_black.fe09752af813222c2479.png";
      const gs = function () {
          return (0, kr.jsxs)(kr.Fragment, {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                className: "main-content",
                children: [
                  (0, kr.jsxs)("div", {
                    className: "about-container",
                    children: [
                      (0, kr.jsx)("div", {
                        className: "logo-container",
                        children: (0, kr.jsx)("img", {
                          src: ms,
                          alt: "Logotipo",
                          className: "about-logo",
                        }),
                      }),
                      (0, kr.jsx)("div", {
                        className: "about-text",
                        children: (0, kr.jsxs)("p", {
                          children: [
                            "We are master\u2019s students in Aveiro\u2019s University.",
                            (0, kr.jsx)("p", {}),
                            "We are developing a project for the master's degree in Communication and Web Technologies. For this project, the team has decided to create a digital showcase in the form of a responsive website for the sale of sustainable textile products. The goal is to support sustainability worldwide. People continue to purchase textile products, but in a more conscious and responsible manner. Our website aims to raise awareness among users about the sustainability of the planet, ensuring that the purchased products adhere to sustainability protocols.",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, kr.jsx)(ti, {}),
                ],
              }),
            ],
          });
        },
        vs = () => {
          const [t, n] = (0, e.useState)(""),
            [r, a] = (0, e.useState)(!1),
            [o, i] = (0, e.useState)(!1);
          return (0, kr.jsxs)("div", {
            children: [
              (0, kr.jsx)(Ya, {}),
              (0, kr.jsxs)("div", {
                children: [
                  (0, kr.jsxs)(yr, {
                    to: "/Checkout",
                    className: "back-to-cart",
                    children: [
                      (0, kr.jsx)("span", { children: "\u2190" }),
                      " Back to Shopping Cart",
                    ],
                  }),
                  (0, kr.jsx)("h4", { children: "Shipping Address" }),
                  (0, kr.jsx)("p", { children: "Add a shipping address" }),
                  (0, kr.jsx)("h4", { children: "Delivery Method" }),
                  (0, kr.jsx)("p", { children: "Select a delivery method" }),
                  (0, kr.jsx)("h4", { children: "Payment" }),
                  (0, kr.jsx)("p", { children: "Select a payment method" }),
                  (0, kr.jsxs)("div", {
                    className: "promo-code",
                    children: [
                      (0, kr.jsx)("button", {
                        onClick: () => {
                          a(!r);
                        },
                        children: "Apply Promo Code",
                      }),
                      r &&
                        (0, kr.jsxs)(kr.Fragment, {
                          children: [
                            (0, kr.jsx)("input", {
                              type: "text",
                              placeholder: "Enter Promo Code",
                              value: t,
                              onChange: (e) => n(e.target.value),
                            }),
                            (0, kr.jsx)("button", {
                              onClick: () => {
                                i("leafeel" === t), n("");
                              },
                              children: "Apply",
                            }),
                          ],
                        }),
                      o && (0, kr.jsx)("p", { children: "Applied code! :)" }),
                    ],
                  }),
                  (0, kr.jsxs)("div", {
                    className: "checkout-summary",
                    children: [
                      (0, kr.jsx)("h4", { children: "Summary" }),
                      (0, kr.jsxs)("p", {
                        children: [
                          (0, kr.jsx)("b", { children: "Subtotal (3):" }),
                          " ",
                          "\u20ac 579,97",
                        ],
                      }),
                      (0, kr.jsxs)("p", {
                        children: [
                          (0, kr.jsx)("b", { children: "Delivery:" }),
                          " ",
                          "\u20ac 0",
                        ],
                      }),
                      (0, kr.jsxs)("p", {
                        children: [
                          (0, kr.jsx)("b", { children: "Total:" }),
                          " ",
                          "\u20ac 579,97",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, kr.jsx)(ti, {}),
            ],
          });
        };
      function ys() {
        return (0, kr.jsx)(mr, {
          children: (0, kr.jsxs)(ur, {
            children: [
              (0, kr.jsx)(lr, { path: "/", element: (0, kr.jsx)(ii, {}) }),
              (0, kr.jsx)(lr, { path: "/woman", element: (0, kr.jsx)(Ri, {}) }),
              (0, kr.jsx)(lr, { path: "/FAQs", element: (0, kr.jsx)(Kl, {}) }),
              (0, kr.jsx)(lr, {
                path: "/product/:id",
                element: (0, kr.jsx)(Ii, {}),
              }),
              (0, kr.jsx)(lr, { path: "/cart", element: (0, kr.jsx)(ds, {}) }),
              (0, kr.jsx)(lr, {
                path: "/profile",
                element: (0, kr.jsx)(hs, {}),
              }),
              (0, kr.jsx)(lr, { path: "/About", element: (0, kr.jsx)(gs, {}) }),
              (0, kr.jsx)(lr, { path: "/About", element: (0, kr.jsx)(gs, {}) }),
              (0, kr.jsx)(lr, {
                path: "/Checkout",
                element: (0, kr.jsx)(vs, {}),
              }),
            ],
          }),
        });
      }
      const bs = (e) => {
        e &&
          e instanceof Function &&
          n
            .e(651)
            .then(n.bind(n, 651))
            .then((t) => {
              let {
                getCLS: n,
                getFID: r,
                getFCP: a,
                getLCP: o,
                getTTFB: i,
              } = t;
              n(e), r(e), a(e), o(e), i(e);
            });
      };
      r
        .createRoot(document.getElementById("root"))
        .render(
          (0, kr.jsx)(e.StrictMode, {
            children: (0, kr.jsx)(Li, {
              children: (0, kr.jsx)(Xr, { children: (0, kr.jsx)(ys, {}) }),
            }),
          }),
        ),
        bs();
    })();
})();
//# sourceMappingURL=main.9028dd33.js.map
