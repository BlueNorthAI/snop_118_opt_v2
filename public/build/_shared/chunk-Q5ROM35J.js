import {
  require_react_dom
} from "/build/_shared/chunk-6DAQMQYB.js";
import {
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react25 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r8, n5, ...a9) {
  if (r8 in n5) {
    let e5 = n5[r8];
    return typeof e5 == "function" ? e5(...a9) : e5;
  }
  let t13 = new Error(`Tried to handle "${r8}" but there is no handler defined. Only defined handlers are: ${Object.keys(n5).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t13, u), t13;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n5) {
  return n5.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a9) => (a9[a9.None = 0] = "None", a9[a9.RenderStrategy = 1] = "RenderStrategy", a9[a9.Static = 2] = "Static", a9))(S || {});
var j = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(j || {});
function X({ ourProps: r8, theirProps: t13, slot: e5, defaultTag: a9, features: s12, visible: n5 = true, name: f7 }) {
  let o8 = N(t13, r8);
  if (n5)
    return c(o8, e5, a9, f7);
  let u8 = s12 != null ? s12 : 0;
  if (u8 & 2) {
    let { static: l9 = false, ...p8 } = o8;
    if (l9)
      return c(p8, e5, a9, f7);
  }
  if (u8 & 1) {
    let { unmount: l9 = true, ...p8 } = o8;
    return u(l9 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c({ ...p8, hidden: true, style: { display: "none" } }, e5, a9, f7);
    } });
  }
  return c(o8, e5, a9, f7);
}
function c(r8, t13 = {}, e5, a9) {
  let { as: s12 = e5, children: n5, refName: f7 = "ref", ...o8 } = g(r8, ["unmount", "static"]), u8 = r8.ref !== void 0 ? { [f7]: r8.ref } : {}, l9 = typeof n5 == "function" ? n5(t13) : n5;
  "className" in o8 && o8.className && typeof o8.className == "function" && (o8.className = o8.className(t13));
  let p8 = {};
  if (t13) {
    let i5 = false, m8 = [];
    for (let [y6, d11] of Object.entries(t13))
      typeof d11 == "boolean" && (i5 = true), d11 === true && m8.push(y6);
    i5 && (p8["data-headlessui-state"] = m8.join(" "));
  }
  if (s12 === import_react.Fragment && Object.keys(R(o8)).length > 0) {
    if (!(0, import_react.isValidElement)(l9) || Array.isArray(l9) && l9.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a9} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o8).map((d11) => `  - ${d11}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d11) => `  - ${d11}`).join(`
`)].join(`
`));
    let i5 = l9.props, m8 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d11) => e(i5 == null ? void 0 : i5.className(...d11), o8.className) : e(i5 == null ? void 0 : i5.className, o8.className), y6 = m8 ? { className: m8 } : {};
    return (0, import_react.cloneElement)(l9, Object.assign({}, N(l9.props, R(g(o8, ["ref"]))), p8, u8, w(l9.ref, u8.ref), y6));
  }
  return (0, import_react.createElement)(s12, Object.assign({}, g(o8, ["ref"]), s12 !== import_react.Fragment && u8, s12 !== import_react.Fragment && p8), l9);
}
function w(...r8) {
  return { ref: r8.every((t13) => t13 == null) ? void 0 : (t13) => {
    for (let e5 of r8)
      e5 != null && (typeof e5 == "function" ? e5(t13) : e5.current = t13);
  } };
}
function N(...r8) {
  var a9;
  if (r8.length === 0)
    return {};
  if (r8.length === 1)
    return r8[0];
  let t13 = {}, e5 = {};
  for (let s12 of r8)
    for (let n5 in s12)
      n5.startsWith("on") && typeof s12[n5] == "function" ? ((a9 = e5[n5]) != null || (e5[n5] = []), e5[n5].push(s12[n5])) : t13[n5] = s12[n5];
  if (t13.disabled || t13["aria-disabled"])
    return Object.assign(t13, Object.fromEntries(Object.keys(e5).map((s12) => [s12, void 0])));
  for (let s12 in e5)
    Object.assign(t13, { [s12](n5, ...f7) {
      let o8 = e5[s12];
      for (let u8 of o8) {
        if ((n5 instanceof Event || (n5 == null ? void 0 : n5.nativeEvent) instanceof Event) && n5.defaultPrevented)
          return;
        u8(n5, ...f7);
      }
    } });
  return t13;
}
function D(r8) {
  var t13;
  return Object.assign((0, import_react.forwardRef)(r8), { displayName: (t13 = r8.displayName) != null ? t13 : r8.name });
}
function R(r8) {
  let t13 = Object.assign({}, r8);
  for (let e5 in t13)
    t13[e5] === void 0 && delete t13[e5];
  return t13;
}
function g(r8, t13 = []) {
  let e5 = Object.assign({}, r8);
  for (let a9 of t13)
    a9 in e5 && delete e5[a9];
  return e5;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t13, e5, n5) => e5 in t13 ? i(t13, e5, { enumerable: true, configurable: true, writable: true, value: n5 }) : t13[e5] = n5;
var r = (t13, e5, n5) => (d(t13, typeof e5 != "symbol" ? e5 + "" : e5, n5), n5);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f7) => {
  s.isServer ? (0, import_react2.useEffect)(e5, f7) : (0, import_react2.useLayoutEffect)(e5, f7);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s2(e5) {
  let r8 = (0, import_react3.useRef)(e5);
  return l(() => {
    r8.current = e5;
  }, [e5]), r8;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o2 = function(t13) {
  let e5 = s2(t13);
  return import_react4.default.useCallback((...r8) => e5.current(...r8), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t13, n5 = true) {
  return Object.assign(t13, { [u2]: n5 });
}
function y(...t13) {
  let n5 = (0, import_react5.useRef)(t13);
  (0, import_react5.useEffect)(() => {
    n5.current = t13;
  }, [t13]);
  let c12 = o2((e5) => {
    for (let o8 of n5.current)
      o8 != null && (typeof o8 == "function" ? o8(e5) : o8.current = e5);
  });
  return t13.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c12;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o3 = ((r8) => (r8.Space = " ", r8.Enter = "Enter", r8.Escape = "Escape", r8.Backspace = "Backspace", r8.Delete = "Delete", r8.ArrowLeft = "ArrowLeft", r8.ArrowUp = "ArrowUp", r8.ArrowRight = "ArrowRight", r8.ArrowDown = "ArrowDown", r8.Home = "Home", r8.End = "End", r8.PageUp = "PageUp", r8.PageDown = "PageDown", r8.Tab = "Tab", r8))(o3 || {});

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n5) {
  let e5 = n5.parentElement, l9 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l9 = e5), e5 = e5.parentElement;
  let t13 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t13 && i3(l9) ? false : t13;
}
function i3(n5) {
  if (!n5)
    return false;
  let e5 = n5.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e5, f7] = (0, import_react6.useState)(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && f7(false), (0, import_react6.useEffect)(() => {
    e5 !== true && f7(true);
  }, [e5]), (0, import_react6.useEffect)(() => s.handoff(), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o5;
var I = (o5 = import_react7.default.useId) != null ? o5 : function() {
  let n5 = l3(), [e5, u8] = import_react7.default.useState(n5 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u8(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(p || {});
function s3(t13, o8) {
  let { features: n5 = 1, ...e5 } = t13, d11 = { ref: o8, "aria-hidden": (n5 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n5 & 4) === 4 && (n5 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d11, theirProps: e5, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c3 = D(s3);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t4(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o6() {
  let n5 = [], r8 = { addEventListener(e5, t13, s12, a9) {
    return e5.addEventListener(t13, s12, a9), r8.add(() => e5.removeEventListener(t13, s12, a9));
  }, requestAnimationFrame(...e5) {
    let t13 = requestAnimationFrame(...e5);
    return r8.add(() => cancelAnimationFrame(t13));
  }, nextFrame(...e5) {
    return r8.requestAnimationFrame(() => r8.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t13 = setTimeout(...e5);
    return r8.add(() => clearTimeout(t13));
  }, microTask(...e5) {
    let t13 = { current: true };
    return t4(() => {
      t13.current && e5[0]();
    }), r8.add(() => {
      t13.current = false;
    });
  }, style(e5, t13, s12) {
    let a9 = e5.style.getPropertyValue(t13);
    return Object.assign(e5.style, { [t13]: s12 }), this.add(() => {
      Object.assign(e5.style, { [t13]: a9 });
    });
  }, group(e5) {
    let t13 = o6();
    return e5(t13), this.add(() => t13.dispose());
  }, add(e5) {
    return n5.push(e5), () => {
      let t13 = n5.indexOf(e5);
      if (t13 >= 0)
        for (let s12 of n5.splice(t13, 1))
          s12();
    };
  }, dispose() {
    for (let e5 of n5.splice(0))
      e5();
  } };
  return r8;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r8) {
  return s.isServer ? null : r8 instanceof Node ? r8.ownerDocument : r8 != null && r8.hasOwnProperty("current") && r8.current instanceof Node ? r8.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c4 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var M = ((n5) => (n5[n5.First = 1] = "First", n5[n5.Previous = 2] = "Previous", n5[n5.Next = 4] = "Next", n5[n5.Last = 8] = "Last", n5[n5.WrapAround = 16] = "WrapAround", n5[n5.NoScroll = 32] = "NoScroll", n5))(M || {});
var N2 = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N2 || {});
var F = ((t13) => (t13[t13.Previous = -1] = "Previous", t13[t13.Next = 1] = "Next", t13))(F || {});
function f(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(c4)).sort((r8, t13) => Math.sign((r8.tabIndex || Number.MAX_SAFE_INTEGER) - (t13.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T3 = ((t13) => (t13[t13.Strict = 0] = "Strict", t13[t13.Loose = 1] = "Loose", t13))(T3 || {});
function h2(e5, r8 = 0) {
  var t13;
  return e5 === ((t13 = e2(e5)) == null ? void 0 : t13.body) ? false : u(r8, { [0]() {
    return e5.matches(c4);
  }, [1]() {
    let l9 = e5;
    for (; l9 !== null; ) {
      if (l9.matches(c4))
        return true;
      l9 = l9.parentElement;
    }
    return false;
  } });
}
var w2 = ((t13) => (t13[t13.Keyboard = 0] = "Keyboard", t13[t13.Mouse = 1] = "Mouse", t13))(w2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var S2 = ["textarea", "input"].join(",");
function H(e5) {
  var r8, t13;
  return (t13 = (r8 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r8.call(e5, S2)) != null ? t13 : false;
}
function I2(e5, r8 = (t13) => t13) {
  return e5.slice().sort((t13, l9) => {
    let o8 = r8(t13), i5 = r8(l9);
    if (o8 === null || i5 === null)
      return 0;
    let n5 = o8.compareDocumentPosition(i5);
    return n5 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n5 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e5, r8, { sorted: t13 = true, relativeTo: l9 = null, skipElements: o8 = [] } = {}) {
  let i5 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, n5 = Array.isArray(e5) ? t13 ? I2(e5) : e5 : f(e5);
  o8.length > 0 && n5.length > 1 && (n5 = n5.filter((s12) => !o8.includes(s12))), l9 = l9 != null ? l9 : i5.activeElement;
  let E5 = (() => {
    if (r8 & 5)
      return 1;
    if (r8 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r8 & 1)
      return 0;
    if (r8 & 2)
      return Math.max(0, n5.indexOf(l9)) - 1;
    if (r8 & 4)
      return Math.max(0, n5.indexOf(l9)) + 1;
    if (r8 & 8)
      return n5.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p8 = r8 & 32 ? { preventScroll: true } : {}, d11 = 0, a9 = n5.length, u8;
  do {
    if (d11 >= a9 || d11 + a9 <= 0)
      return 0;
    let s12 = x3 + d11;
    if (r8 & 16)
      s12 = (s12 + a9) % a9;
    else {
      if (s12 < 0)
        return 3;
      if (s12 >= a9)
        return 1;
    }
    u8 = n5[s12], u8 == null || u8.focus(p8), d11 += E5;
  } while (u8 !== i5.activeElement);
  return r8 & 6 && H(u8) && u8.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react8 = __toESM(require_react(), 1);
function s4(e5, r8, n5) {
  let o8 = s2(r8);
  (0, import_react8.useEffect)(() => {
    function t13(i5) {
      o8.current(i5);
    }
    return window.addEventListener(e5, t13, n5), () => window.removeEventListener(e5, t13, n5);
  }, [e5, n5]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s5 = ((r8) => (r8[r8.Forwards = 0] = "Forwards", r8[r8.Backwards = 1] = "Backwards", r8))(s5 || {});
function n() {
  let e5 = (0, import_react9.useRef)(0);
  return s4("keydown", (o8) => {
    o8.key === "Tab" && (e5.current = o8.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react10 = __toESM(require_react(), 1);
function f2() {
  let e5 = (0, import_react10.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react11 = __toESM(require_react(), 1);
function n2(...e5) {
  return (0, import_react11.useMemo)(() => e2(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react12 = __toESM(require_react(), 1);
function E2(n5, e5, a9, t13) {
  let i5 = s2(a9);
  (0, import_react12.useEffect)(() => {
    n5 = n5 != null ? n5 : window;
    function r8(o8) {
      i5.current(o8);
    }
    return n5.addEventListener(e5, r8, t13), () => n5.removeEventListener(e5, r8, t13);
  }, [n5, e5, t13]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react13 = __toESM(require_react(), 1);
function m(u8, t13) {
  let e5 = (0, import_react13.useRef)([]), r8 = o2(u8);
  (0, import_react13.useEffect)(() => {
    let o8 = [...e5.current];
    for (let [n5, a9] of t13.entries())
      if (e5.current[n5] !== a9) {
        let l9 = r8(t13, o8);
        return e5.current = t13, l9;
      }
  }, [r8, ...t13]);
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react14 = __toESM(require_react(), 1);
function p2() {
  let [e5] = (0, import_react14.useState)(o6);
  return (0, import_react14.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t7(n5) {
  function e5() {
    document.readyState !== "loading" && (n5(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react15 = __toESM(require_react(), 1);
function c5(t13) {
  let r8 = o2(t13), e5 = (0, import_react15.useRef)(false);
  (0, import_react15.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t4(() => {
      e5.current && r8();
    });
  }), [r8]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t13) {
  if (!t13)
    return /* @__PURE__ */ new Set();
  if (typeof t13 == "function")
    return new Set(t13());
  let r8 = /* @__PURE__ */ new Set();
  for (let e5 of t13.current)
    e5.current instanceof HTMLElement && r8.add(e5.current);
  return r8;
}
var J = "div";
var h3 = ((n5) => (n5[n5.None = 1] = "None", n5[n5.InitialFocus = 2] = "InitialFocus", n5[n5.TabLock = 4] = "TabLock", n5[n5.FocusLock = 8] = "FocusLock", n5[n5.RestoreFocus = 16] = "RestoreFocus", n5[n5.All = 30] = "All", n5))(h3 || {});
function X2(t13, r8) {
  let e5 = (0, import_react16.useRef)(null), o8 = y(e5, r8), { initialFocus: u8, containers: i5, features: n5 = 30, ...l9 } = t13;
  l3() || (n5 = 1);
  let m8 = n2(e5);
  Y({ ownerDocument: m8 }, Boolean(n5 & 16));
  let c12 = Z({ ownerDocument: m8, container: e5, initialFocus: u8 }, Boolean(n5 & 2));
  $({ ownerDocument: m8, container: e5, containers: i5, previousActiveElement: c12 }, Boolean(n5 & 8));
  let v2 = n(), y6 = o2((s12) => {
    let T6 = e5.current;
    if (!T6)
      return;
    ((B) => B())(() => {
      u(v2.current, { [s5.Forwards]: () => {
        O(T6, M.First, { skipElements: [s12.relatedTarget] });
      }, [s5.Backwards]: () => {
        O(T6, M.Last, { skipElements: [s12.relatedTarget] });
      } });
    });
  }), _ = p2(), b4 = (0, import_react16.useRef)(false), j4 = { ref: o8, onKeyDown(s12) {
    s12.key == "Tab" && (b4.current = true, _.requestAnimationFrame(() => {
      b4.current = false;
    }));
  }, onBlur(s12) {
    let T6 = P(i5);
    e5.current instanceof HTMLElement && T6.add(e5.current);
    let d11 = s12.relatedTarget;
    d11 instanceof HTMLElement && d11.dataset.headlessuiFocusGuard !== "true" && (S3(T6, d11) || (b4.current ? O(e5.current, u(v2.current, { [s5.Forwards]: () => M.Next, [s5.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s12.target }) : s12.target instanceof HTMLElement && y2(s12.target)));
  } };
  return import_react16.default.createElement(import_react16.default.Fragment, null, Boolean(n5 & 4) && import_react16.default.createElement(c3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p.Focusable }), X({ ourProps: j4, theirProps: l9, defaultTag: J, name: "FocusTrap" }), Boolean(n5 & 4) && import_react16.default.createElement(c3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p.Focusable }));
}
var z = D(X2);
var ge = Object.assign(z, { features: h3 });
var a3 = [];
t7(() => {
  function t13(r8) {
    r8.target instanceof HTMLElement && r8.target !== document.body && a3[0] !== r8.target && (a3.unshift(r8.target), a3 = a3.filter((e5) => e5 != null && e5.isConnected), a3.splice(10));
  }
  window.addEventListener("click", t13, { capture: true }), window.addEventListener("mousedown", t13, { capture: true }), window.addEventListener("focus", t13, { capture: true }), document.body.addEventListener("click", t13, { capture: true }), document.body.addEventListener("mousedown", t13, { capture: true }), document.body.addEventListener("focus", t13, { capture: true });
});
function Q(t13 = true) {
  let r8 = (0, import_react16.useRef)(a3.slice());
  return m(([e5], [o8]) => {
    o8 === true && e5 === false && t4(() => {
      r8.current.splice(0);
    }), o8 === false && e5 === true && (r8.current = a3.slice());
  }, [t13, a3, r8]), o2(() => {
    var e5;
    return (e5 = r8.current.find((o8) => o8 != null && o8.isConnected)) != null ? e5 : null;
  });
}
function Y({ ownerDocument: t13 }, r8) {
  let e5 = Q(r8);
  m(() => {
    r8 || (t13 == null ? void 0 : t13.activeElement) === (t13 == null ? void 0 : t13.body) && y2(e5());
  }, [r8]), c5(() => {
    r8 && y2(e5());
  });
}
function Z({ ownerDocument: t13, container: r8, initialFocus: e5 }, o8) {
  let u8 = (0, import_react16.useRef)(null), i5 = f2();
  return m(() => {
    if (!o8)
      return;
    let n5 = r8.current;
    n5 && t4(() => {
      if (!i5.current)
        return;
      let l9 = t13 == null ? void 0 : t13.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l9) {
          u8.current = l9;
          return;
        }
      } else if (n5.contains(l9)) {
        u8.current = l9;
        return;
      }
      e5 != null && e5.current ? y2(e5.current) : O(n5, M.First) === N2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u8.current = t13 == null ? void 0 : t13.activeElement;
    });
  }, [o8]), u8;
}
function $({ ownerDocument: t13, container: r8, containers: e5, previousActiveElement: o8 }, u8) {
  let i5 = f2();
  E2(t13 == null ? void 0 : t13.defaultView, "focus", (n5) => {
    if (!u8 || !i5.current)
      return;
    let l9 = P(e5);
    r8.current instanceof HTMLElement && l9.add(r8.current);
    let m8 = o8.current;
    if (!m8)
      return;
    let c12 = n5.target;
    c12 && c12 instanceof HTMLElement ? S3(l9, c12) ? (o8.current = c12, y2(c12)) : (n5.preventDefault(), n5.stopPropagation(), y2(m8)) : y2(o8.current);
  }, true);
}
function S3(t13, r8) {
  for (let e5 of t13)
    if (e5.contains(r8))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react18 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react17 = __toESM(require_react(), 1);
var e3 = (0, import_react17.createContext)(false);
function l4() {
  return (0, import_react17.useContext)(e3);
}
function P2(o8) {
  return import_react17.default.createElement(e3.Provider, { value: o8.force }, o8.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F2(p8) {
  let l9 = l4(), n5 = (0, import_react18.useContext)(v), e5 = n2(p8), [a9, o8] = (0, import_react18.useState)(() => {
    if (!l9 && n5 !== null || s.isServer)
      return null;
    let t13 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t13)
      return t13;
    if (e5 === null)
      return null;
    let r8 = e5.createElement("div");
    return r8.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r8);
  });
  return (0, import_react18.useEffect)(() => {
    a9 !== null && (e5 != null && e5.body.contains(a9) || e5 == null || e5.body.appendChild(a9));
  }, [a9, e5]), (0, import_react18.useEffect)(() => {
    l9 || n5 !== null && o8(n5.current);
  }, [n5, o8, l9]), a9;
}
var U = import_react18.Fragment;
function N3(p8, l9) {
  let n5 = p8, e5 = (0, import_react18.useRef)(null), a9 = y(T2((u8) => {
    e5.current = u8;
  }), l9), o8 = n2(e5), t13 = F2(e5), [r8] = (0, import_react18.useState)(() => {
    var u8;
    return s.isServer ? null : (u8 = o8 == null ? void 0 : o8.createElement("div")) != null ? u8 : null;
  }), i5 = (0, import_react18.useContext)(f4), C2 = l3();
  return l(() => {
    !t13 || !r8 || t13.contains(r8) || (r8.setAttribute("data-headlessui-portal", ""), t13.appendChild(r8));
  }, [t13, r8]), l(() => {
    if (r8 && i5)
      return i5.register(r8);
  }, [i5, r8]), c5(() => {
    var u8;
    !t13 || !r8 || (r8 instanceof Node && t13.contains(r8) && t13.removeChild(r8), t13.childNodes.length <= 0 && ((u8 = t13.parentElement) == null || u8.removeChild(t13)));
  }), C2 ? !t13 || !r8 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a9 }, theirProps: n5, defaultTag: U, name: "Portal" }), r8) : null;
}
var S4 = import_react18.Fragment;
var v = (0, import_react18.createContext)(null);
function j2(p8, l9) {
  let { target: n5, ...e5 } = p8, o8 = { ref: y(l9) };
  return import_react18.default.createElement(v.Provider, { value: n5 }, X({ ourProps: o8, theirProps: e5, defaultTag: S4, name: "Popover.Group" }));
}
var f4 = (0, import_react18.createContext)(null);
function ae() {
  let p8 = (0, import_react18.useContext)(f4), l9 = (0, import_react18.useRef)([]), n5 = o2((o8) => (l9.current.push(o8), p8 && p8.register(o8), () => e5(o8))), e5 = o2((o8) => {
    let t13 = l9.current.indexOf(o8);
    t13 !== -1 && l9.current.splice(t13, 1), p8 && p8.unregister(o8);
  }), a9 = (0, import_react18.useMemo)(() => ({ register: n5, unregister: e5, portals: l9 }), [n5, e5, l9]);
  return [l9, (0, import_react18.useMemo)(() => function({ children: t13 }) {
    return import_react18.default.createElement(f4.Provider, { value: a9 }, t13);
  }, [a9])];
}
var D2 = D(N3);
var I3 = D(j2);
var pe = Object.assign(D2, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react19 = __toESM(require_react(), 1);
var d5 = (0, import_react19.createContext)(null);
function f5() {
  let r8 = (0, import_react19.useContext)(d5);
  if (r8 === null) {
    let t13 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t13, f5), t13;
  }
  return r8;
}
function M2() {
  let [r8, t13] = (0, import_react19.useState)([]);
  return [r8.length > 0 ? r8.join(" ") : void 0, (0, import_react19.useMemo)(() => function(e5) {
    let i5 = o2((s12) => (t13((o8) => [...o8, s12]), () => t13((o8) => {
      let p8 = o8.slice(), c12 = p8.indexOf(s12);
      return c12 !== -1 && p8.splice(c12, 1), p8;
    }))), n5 = (0, import_react19.useMemo)(() => ({ register: i5, slot: e5.slot, name: e5.name, props: e5.props }), [i5, e5.slot, e5.name, e5.props]);
    return import_react19.default.createElement(d5.Provider, { value: n5 }, e5.children);
  }, [t13])];
}
var S5 = "p";
function h4(r8, t13) {
  let a9 = I(), { id: e5 = `headlessui-description-${a9}`, ...i5 } = r8, n5 = f5(), s12 = y(t13);
  l(() => n5.register(e5), [e5, n5.register]);
  let o8 = { ref: s12, ...n5.props, id: e5 };
  return X({ ourProps: o8, theirProps: i5, slot: n5.slot || {}, defaultTag: S5, name: n5.name || "Description" });
}
var y3 = D(h4);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react20 = __toESM(require_react(), 1);
var n4 = (0, import_react20.createContext)(null);
n4.displayName = "OpenClosedContext";
var d6 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d6 || {});
function C() {
  return (0, import_react20.useContext)(n4);
}
function c7({ value: o8, children: r8 }) {
  return import_react20.default.createElement(n4.Provider, { value: o8 }, r8);
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react21 = __toESM(require_react(), 1);
var a4 = (0, import_react21.createContext)(() => {
});
a4.displayName = "StackContext";
var s9 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s9 || {});
function x2() {
  return (0, import_react21.useContext)(a4);
}
function M3({ children: i5, onUpdate: r8, type: e5, element: n5, enabled: u8 }) {
  let l9 = x2(), o8 = o2((...t13) => {
    r8 == null || r8(...t13), l9(...t13);
  });
  return l(() => {
    let t13 = u8 === void 0 || u8 === true;
    return t13 && o8(0, e5, n5), () => {
      t13 && o8(1, e5, n5);
    };
  }, [o8, e5, n5, u8]), import_react21.default.createElement(a4.Provider, { value: o8 }, i5);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react23 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react22 = __toESM(require_react(), 1);
function d8(e5, r8, n5) {
  let o8 = s2(r8);
  (0, import_react22.useEffect)(() => {
    function t13(u8) {
      o8.current(u8);
    }
    return document.addEventListener(e5, t13, n5), () => document.removeEventListener(e5, t13, n5);
  }, [e5, n5]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function H3(s12, m8, i5 = true) {
  let l9 = (0, import_react23.useRef)(false);
  (0, import_react23.useEffect)(() => {
    requestAnimationFrame(() => {
      l9.current = i5;
    });
  }, [i5]);
  function a9(e5, o8) {
    if (!l9.current || e5.defaultPrevented)
      return;
    let n5 = o8(e5);
    if (n5 === null || !n5.getRootNode().contains(n5))
      return;
    let E5 = function r8(t13) {
      return typeof t13 == "function" ? r8(t13()) : Array.isArray(t13) || t13 instanceof Set ? t13 : [t13];
    }(s12);
    for (let r8 of E5) {
      if (r8 === null)
        continue;
      let t13 = r8 instanceof HTMLElement ? r8 : r8.current;
      if (t13 != null && t13.contains(n5) || e5.composed && e5.composedPath().includes(t13))
        return;
    }
    return !h2(n5, T3.Loose) && n5.tabIndex !== -1 && e5.preventDefault(), m8(e5, n5);
  }
  let u8 = (0, import_react23.useRef)(null);
  d8("mousedown", (e5) => {
    var o8, n5;
    l9.current && (u8.current = ((n5 = (o8 = e5.composedPath) == null ? void 0 : o8.call(e5)) == null ? void 0 : n5[0]) || e5.target);
  }, true), d8("click", (e5) => {
    u8.current && (a9(e5, () => u8.current), u8.current = null);
  }, true), s4("blur", (e5) => a9(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i4(e5, t13) {
  return e5 === t13 && (e5 !== 0 || 1 / e5 === 1 / t13) || e5 !== e5 && t13 !== t13;
}
var d10 = typeof Object.is == "function" ? Object.is : i4;
var { useState: u5, useEffect: h5, useLayoutEffect: f6, useDebugValue: p4 } = l7;
function y4(e5, t13, c12) {
  const a9 = t13(), [{ inst: n5 }, o8] = u5({ inst: { value: a9, getSnapshot: t13 } });
  return f6(() => {
    n5.value = a9, n5.getSnapshot = t13, r6(n5) && o8({ inst: n5 });
  }, [e5, a9, t13]), h5(() => (r6(n5) && o8({ inst: n5 }), e5(() => {
    r6(n5) && o8({ inst: n5 });
  })), [e5]), p4(a9), a9;
}
function r6(e5) {
  const t13 = e5.getSnapshot, c12 = e5.value;
  try {
    const a9 = t13();
    return !d10(c12, a9);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t10(r8, e5, n5) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s10 = !r7;
var c10 = s10 ? t10 : y4;
var a5 = "useSyncExternalStore" in e4 ? ((n5) => n5.useSyncExternalStore)(e4) : c10;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t13) {
  return a5(t13.subscribe, t13.getSnapshot, t13.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o8, r8) {
  let t13 = o8(), n5 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t13;
  }, subscribe(e5) {
    return n5.add(e5), () => n5.delete(e5);
  }, dispatch(e5, ...s12) {
    let i5 = r8[e5].call(t13, ...s12);
    i5 && (t13 = i5, n5.forEach((c12) => c12()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c11() {
  let o8;
  return { before({ doc: e5 }) {
    var l9;
    let n5 = e5.documentElement;
    o8 = ((l9 = e5.defaultView) != null ? l9 : window).innerWidth - n5.clientWidth;
  }, after({ doc: e5, d: n5 }) {
    let t13 = e5.documentElement, l9 = t13.clientWidth - t13.offsetWidth, r8 = o8 - l9;
    n5.style(t13, "paddingRight", `${r8}px`);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t11() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t11())
    return {};
  let o8;
  return { before() {
    o8 = window.pageYOffset;
  }, after({ doc: r8, d: l9, meta: s12 }) {
    function i5(e5) {
      return s12.containers.flatMap((t13) => t13()).some((t13) => t13.contains(e5));
    }
    l9.style(r8.body, "marginTop", `-${o8}px`), window.scrollTo(0, 0);
    let n5 = null;
    l9.addEventListener(r8, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t13 = e5.target.closest("a");
          if (!t13)
            return;
          let { hash: c12 } = new URL(t13.href), a9 = r8.querySelector(c12);
          a9 && !i5(a9) && (n5 = a9);
        } catch {
        }
    }, true), l9.addEventListener(r8, "touchmove", (e5) => {
      e5.target instanceof HTMLElement && !i5(e5.target) && e5.preventDefault();
    }, { passive: false }), l9.add(() => {
      window.scrollTo(0, window.pageYOffset + o8), n5 && n5.isConnected && (n5.scrollIntoView({ block: "nearest" }), n5 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e5, d: o8 }) {
    o8.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m6(e5) {
  let n5 = {};
  for (let t13 of e5)
    Object.assign(n5, t13(n5));
  return n5;
}
var a7 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e5, n5) {
  var o8;
  let t13 = (o8 = this.get(e5)) != null ? o8 : { doc: e5, count: 0, d: o6(), meta: /* @__PURE__ */ new Set() };
  return t13.count++, t13.meta.add(n5), this.set(e5, t13), this;
}, POP(e5, n5) {
  let t13 = this.get(e5);
  return t13 && (t13.count--, t13.meta.delete(n5)), this;
}, SCROLL_PREVENT({ doc: e5, d: n5, meta: t13 }) {
  let o8 = { doc: e5, d: n5, meta: m6(t13) }, c12 = [p5(), c11(), l8()];
  c12.forEach(({ before: r8 }) => r8 == null ? void 0 : r8(o8)), c12.forEach(({ after: r8 }) => r8 == null ? void 0 : r8(o8));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a7.subscribe(() => {
  let e5 = a7.getSnapshot(), n5 = /* @__PURE__ */ new Map();
  for (let [t13] of e5)
    n5.set(t13, t13.documentElement.style.overflow);
  for (let t13 of e5.values()) {
    let o8 = n5.get(t13.doc) === "hidden", c12 = t13.count !== 0;
    (c12 && !o8 || !c12 && o8) && a7.dispatch(t13.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t13), t13.count === 0 && a7.dispatch("TEARDOWN", t13);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r8, n5) {
  let f7 = S6(a7), o8 = e5 ? f7.get(e5) : void 0, i5 = o8 ? o8.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r8))
      return a7.dispatch("PUSH", e5, n5), () => a7.dispatch("POP", e5, n5);
  }, [r8, e5]), i5;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t12 = /* @__PURE__ */ new Map();
function h6(r8, l9 = true) {
  l(() => {
    var o8;
    if (!l9)
      return;
    let e5 = typeof r8 == "function" ? r8() : r8.current;
    if (!e5)
      return;
    function a9() {
      var d11;
      if (!e5)
        return;
      let i5 = (d11 = t12.get(e5)) != null ? d11 : 1;
      if (i5 === 1 ? t12.delete(e5) : t12.set(e5, i5 - 1), i5 !== 1)
        return;
      let n5 = u6.get(e5);
      n5 && (n5["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", n5["aria-hidden"]), e5.inert = n5.inert, u6.delete(e5));
    }
    let f7 = (o8 = t12.get(e5)) != null ? o8 : 0;
    return t12.set(e5, f7 + 1), f7 !== 0 || (u6.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a9;
  }, [r8, l9]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react24 = __toESM(require_react(), 1);
function p7({ defaultContainers: f7 = [], portals: o8 } = {}) {
  let t13 = (0, import_react24.useRef)(null), i5 = n2(t13), u8 = o2(() => {
    var r8;
    let n5 = [];
    for (let e5 of f7)
      e5 !== null && (e5 instanceof HTMLElement ? n5.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && n5.push(e5.current));
    if (o8 != null && o8.current)
      for (let e5 of o8.current)
        n5.push(e5);
    for (let e5 of (r8 = i5 == null ? void 0 : i5.querySelectorAll("html > *, body > *")) != null ? r8 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (e5.contains(t13.current) || n5.some((c12) => e5.contains(c12)) || n5.push(e5));
    return n5;
  });
  return { resolveContainers: u8, contains: o2((n5) => u8().some((r8) => r8.contains(n5))), mainTreeNodeRef: t13, MainTreeNode: (0, import_react24.useMemo)(() => function() {
    return import_react24.default.createElement(c3, { features: p.Hidden, ref: t13 });
  }, [t13]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o8) => (o8[o8.Open = 0] = "Open", o8[o8.Closed = 1] = "Closed", o8))(_e || {});
var Ie = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Ie || {});
var Me = { [0](t13, e5) {
  return t13.titleId === e5.id ? t13 : { ...t13, titleId: e5.id };
} };
var I4 = (0, import_react25.createContext)(null);
I4.displayName = "DialogContext";
function b3(t13) {
  let e5 = (0, import_react25.useContext)(I4);
  if (e5 === null) {
    let o8 = new Error(`<${t13} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o8, b3), o8;
  }
  return e5;
}
function we(t13, e5, o8 = () => [document.body]) {
  p6(t13, e5, (i5) => {
    var n5;
    return { containers: [...(n5 = i5.containers) != null ? n5 : [], o8] };
  });
}
function Be(t13, e5) {
  return u(e5.type, Me, t13, e5);
}
var He = "div";
var Ge = S.RenderStrategy | S.Static;
function Ne(t13, e5) {
  var X3;
  let o8 = I(), { id: i5 = `headlessui-dialog-${o8}`, open: n5, onClose: l9, initialFocus: s12, __demoMode: g3 = false, ...T6 } = t13, [m8, h7] = (0, import_react25.useState)(0), a9 = C();
  n5 === void 0 && a9 !== null && (n5 = (a9 & d6.Open) === d6.Open);
  let D4 = (0, import_react25.useRef)(null), Q2 = y(D4, e5), f7 = n2(D4), N4 = t13.hasOwnProperty("open") || a9 !== null, U2 = t13.hasOwnProperty("onClose");
  if (!N4 && !U2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N4)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n5 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n5}`);
  if (typeof l9 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l9}`);
  let p8 = n5 ? 0 : 1, [S7, Z2] = (0, import_react25.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react25.createRef)() }), P4 = o2(() => l9(false)), W = o2((r8) => Z2({ type: 0, id: r8 })), L2 = l3() ? g3 ? false : p8 === 0 : false, F3 = m8 > 1, Y2 = (0, import_react25.useContext)(I4) !== null, [ee, te] = ae(), { resolveContainers: M4, mainTreeNodeRef: k, MainTreeNode: oe } = p7({ portals: ee, defaultContainers: [(X3 = S7.panelRef.current) != null ? X3 : D4.current] }), re = F3 ? "parent" : "leaf", $2 = a9 !== null ? (a9 & d6.Closing) === d6.Closing : false, ne = (() => Y2 || $2 ? false : L2)(), le = (0, import_react25.useCallback)(() => {
    var r8, c12;
    return (c12 = Array.from((r8 = f7 == null ? void 0 : f7.querySelectorAll("body > *")) != null ? r8 : []).find((d11) => d11.id === "headlessui-portal-root" ? false : d11.contains(k.current) && d11 instanceof HTMLElement)) != null ? c12 : null;
  }, [k]);
  h6(le, ne);
  let ae2 = (() => F3 ? true : L2)(), ie = (0, import_react25.useCallback)(() => {
    var r8, c12;
    return (c12 = Array.from((r8 = f7 == null ? void 0 : f7.querySelectorAll("[data-headlessui-portal]")) != null ? r8 : []).find((d11) => d11.contains(k.current) && d11 instanceof HTMLElement)) != null ? c12 : null;
  }, [k]);
  h6(ie, ae2);
  let se = (() => !(!L2 || F3))();
  H3(M4, P4, se);
  let pe2 = (() => !(F3 || p8 !== 0))();
  E2(f7 == null ? void 0 : f7.defaultView, "keydown", (r8) => {
    pe2 && (r8.defaultPrevented || r8.key === o3.Escape && (r8.preventDefault(), r8.stopPropagation(), P4()));
  });
  let de = (() => !($2 || p8 !== 0 || Y2))();
  we(f7, de, M4), (0, import_react25.useEffect)(() => {
    if (p8 !== 0 || !D4.current)
      return;
    let r8 = new ResizeObserver((c12) => {
      for (let d11 of c12) {
        let x3 = d11.target.getBoundingClientRect();
        x3.x === 0 && x3.y === 0 && x3.width === 0 && x3.height === 0 && P4();
      }
    });
    return r8.observe(D4.current), () => r8.disconnect();
  }, [p8, D4, P4]);
  let [ue, fe] = M2(), ge2 = (0, import_react25.useMemo)(() => [{ dialogState: p8, close: P4, setTitleId: W }, S7], [p8, S7, P4, W]), J2 = (0, import_react25.useMemo)(() => ({ open: p8 === 0 }), [p8]), Te = { ref: Q2, id: i5, role: "dialog", "aria-modal": p8 === 0 ? true : void 0, "aria-labelledby": S7.titleId, "aria-describedby": ue };
  return import_react25.default.createElement(M3, { type: "Dialog", enabled: p8 === 0, element: D4, onUpdate: o2((r8, c12) => {
    c12 === "Dialog" && u(r8, { [s9.Add]: () => h7((d11) => d11 + 1), [s9.Remove]: () => h7((d11) => d11 - 1) });
  }) }, import_react25.default.createElement(P2, { force: true }, import_react25.default.createElement(pe, null, import_react25.default.createElement(I4.Provider, { value: ge2 }, import_react25.default.createElement(pe.Group, { target: D4 }, import_react25.default.createElement(P2, { force: false }, import_react25.default.createElement(fe, { slot: J2, name: "Dialog.Description" }, import_react25.default.createElement(ge, { initialFocus: s12, containers: M4, features: L2 ? u(re, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react25.default.createElement(te, null, X({ ourProps: Te, theirProps: T6, slot: J2, defaultTag: He, features: Ge, visible: p8 === 0, name: "Dialog" }))))))))), import_react25.default.createElement(oe, null));
}
var Ue = "div";
function We(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-overlay-${o8}`, ...n5 } = t13, [{ dialogState: l9, close: s12 }] = b3("Dialog.Overlay"), g3 = y(e5), T6 = o2((a9) => {
    if (a9.target === a9.currentTarget) {
      if (r2(a9.currentTarget))
        return a9.preventDefault();
      a9.preventDefault(), a9.stopPropagation(), s12();
    }
  }), m8 = (0, import_react25.useMemo)(() => ({ open: l9 === 0 }), [l9]);
  return X({ ourProps: { ref: g3, id: i5, "aria-hidden": true, onClick: T6 }, theirProps: n5, slot: m8, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-backdrop-${o8}`, ...n5 } = t13, [{ dialogState: l9 }, s12] = b3("Dialog.Backdrop"), g3 = y(e5);
  (0, import_react25.useEffect)(() => {
    if (s12.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s12.panelRef]);
  let T6 = (0, import_react25.useMemo)(() => ({ open: l9 === 0 }), [l9]);
  return import_react25.default.createElement(P2, { force: true }, import_react25.default.createElement(pe, null, X({ ourProps: { ref: g3, id: i5, "aria-hidden": true }, theirProps: n5, slot: T6, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-panel-${o8}`, ...n5 } = t13, [{ dialogState: l9 }, s12] = b3("Dialog.Panel"), g3 = y(e5, s12.panelRef), T6 = (0, import_react25.useMemo)(() => ({ open: l9 === 0 }), [l9]), m8 = o2((a9) => {
    a9.stopPropagation();
  });
  return X({ ourProps: { ref: g3, id: i5, onClick: m8 }, theirProps: n5, slot: T6, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-title-${o8}`, ...n5 } = t13, [{ dialogState: l9, setTitleId: s12 }] = b3("Dialog.Title"), g3 = y(e5);
  (0, import_react25.useEffect)(() => (s12(i5), () => s12(null)), [i5, s12]);
  let T6 = (0, import_react25.useMemo)(() => ({ open: l9 === 0 }), [l9]);
  return X({ ourProps: { ref: g3, id: i5 }, theirProps: n5, slot: T6, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D(Ne);
var qe = D($e);
var ze = D(Xe);
var Qe = D(We);
var Ze = D(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/TrashIcon.js
var React2 = __toESM(require_react(), 1);
function TrashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  }));
}
var ForwardRef2 = React2.forwardRef(TrashIcon);
var TrashIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React3 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef3 = React3.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef3;

export {
  l,
  s2 as s,
  o6 as o,
  p2 as p,
  o2,
  l3 as l2,
  I,
  u,
  e2 as e,
  M,
  N2 as N,
  I2,
  O,
  y,
  e as e2,
  S,
  j,
  X,
  D,
  R,
  r2 as r,
  p as p2,
  c3 as c,
  d6 as d,
  C,
  c7 as c2,
  o3,
  f2 as f,
  M2,
  b2 as b,
  _t,
  Bars3Icon_default,
  TrashIcon_default,
  XMarkIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-Q5ROM35J.js.map
