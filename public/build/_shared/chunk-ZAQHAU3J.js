import {
  C,
  D,
  I,
  I2,
  M,
  M2,
  N,
  O,
  R,
  S,
  X,
  b,
  c,
  c2,
  d,
  e,
  e2,
  f,
  j,
  l,
  l2,
  o,
  o2,
  o3,
  p,
  p2,
  r,
  s,
  u,
  y
} from "/build/_shared/chunk-Q5ROM35J.js";
import {
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react = __toESM(require_react(), 1);
function c3(a = 0) {
  let [l4, r2] = (0, import_react.useState)(a), t = f(), o5 = (0, import_react.useCallback)((e4) => {
    t.current && r2((u3) => u3 | e4);
  }, [l4, t]), m4 = (0, import_react.useCallback)((e4) => Boolean(l4 & e4), [l4]), s3 = (0, import_react.useCallback)((e4) => {
    t.current && r2((u3) => u3 & ~e4);
  }, [r2, t]), g = (0, import_react.useCallback)((e4) => {
    t.current && r2((u3) => u3 ^ e4);
  }, [r2]);
  return { flags: l4, addFlag: o5, hasFlag: m4, removeFlag: s3, toggleFlag: g };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react2 = __toESM(require_react(), 1);
var d2 = (0, import_react2.createContext)(null);
function u2() {
  let o5 = (0, import_react2.useContext)(d2);
  if (o5 === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, u2), t;
  }
  return o5;
}
function H() {
  let [o5, t] = (0, import_react2.useState)([]);
  return [o5.length > 0 ? o5.join(" ") : void 0, (0, import_react2.useMemo)(() => function(e4) {
    let s3 = o2((r2) => (t((l4) => [...l4, r2]), () => t((l4) => {
      let n2 = l4.slice(), p4 = n2.indexOf(r2);
      return p4 !== -1 && n2.splice(p4, 1), n2;
    }))), a = (0, import_react2.useMemo)(() => ({ register: s3, slot: e4.slot, name: e4.name, props: e4.props }), [s3, e4.slot, e4.name, e4.props]);
    return import_react2.default.createElement(d2.Provider, { value: a }, e4.children);
  }, [t])];
}
var A = "label";
function h(o5, t) {
  let i = I(), { id: e4 = `headlessui-label-${i}`, passive: s3 = false, ...a } = o5, r2 = u2(), l4 = y(t);
  l(() => r2.register(e4), [e4, r2.register]);
  let n2 = { ref: l4, ...r2.props, id: e4 };
  return s3 && ("onClick" in n2 && (delete n2.htmlFor, delete n2.onClick), "onClick" in a && delete a.onClick), X({ ourProps: n2, theirProps: a, slot: r2.slot || {}, defaultTag: A, name: r2.name || "Label" });
}
var v = D(h);
var M3 = Object.assign(v, {});

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react3 = __toESM(require_react(), 1);
function F({ container: e4, accept: t, walk: r2, enabled: c6 = true }) {
  let o5 = (0, import_react3.useRef)(t), l4 = (0, import_react3.useRef)(r2);
  (0, import_react3.useEffect)(() => {
    o5.current = t, l4.current = r2;
  }, [t, r2]), l(() => {
    if (!e4 || !c6)
      return;
    let n2 = e(e4);
    if (!n2)
      return;
    let f6 = o5.current, p4 = l4.current, d4 = Object.assign((i) => f6(i), { acceptNode: f6 }), u3 = n2.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, d4, false);
    for (; u3.nextNode(); )
      p4(u3.currentNode);
  }, [e4, c6, o5, l4]);
}

// node_modules/@headlessui/react/dist/utils/form.js
function e3(n2 = {}, r2 = null, t = []) {
  for (let [i, o5] of Object.entries(n2))
    f4(t, s2(r2, i), o5);
  return t;
}
function s2(n2, r2) {
  return n2 ? n2 + "[" + r2 + "]" : r2;
}
function f4(n2, r2, t) {
  if (Array.isArray(t))
    for (let [i, o5] of t.entries())
      f4(n2, s2(r2, i.toString()), o5);
  else
    t instanceof Date ? n2.push([r2, t.toISOString()]) : typeof t == "boolean" ? n2.push([r2, t ? "1" : "0"]) : typeof t == "string" ? n2.push([r2, t]) : typeof t == "number" ? n2.push([r2, `${t}`]) : t == null ? n2.push([r2, ""]) : e3(t, r2, n2);
}
function p3(n2) {
  var t;
  let r2 = (t = n2 == null ? void 0 : n2.form) != null ? t : n2.closest("form");
  if (r2) {
    for (let i of r2.elements)
      if (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image") {
        i.click();
        return;
      }
  }
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react4 = __toESM(require_react(), 1);
function T(l4, r2, c6) {
  let [i, s3] = (0, import_react4.useState)(c6), e4 = l4 !== void 0, t = (0, import_react4.useRef)(e4), u3 = (0, import_react4.useRef)(false), d4 = (0, import_react4.useRef)(false);
  return e4 && !t.current && !u3.current ? (u3.current = true, t.current = e4, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e4 && t.current && !d4.current && (d4.current = true, t.current = e4, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e4 ? l4 : i, o2((n2) => (e4 || s3(n2), r2 == null ? void 0 : r2(n2)))];
}

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var Ce = ((t) => (t[t.RegisterOption = 0] = "RegisterOption", t[t.UnregisterOption = 1] = "UnregisterOption", t))(Ce || {});
var ke = { [0](r2, o5) {
  let t = [...r2.options, { id: o5.id, element: o5.element, propsRef: o5.propsRef }];
  return { ...r2, options: I2(t, (p4) => p4.element.current) };
}, [1](r2, o5) {
  let t = r2.options.slice(), p4 = r2.options.findIndex((T2) => T2.id === o5.id);
  return p4 === -1 ? r2 : (t.splice(p4, 1), { ...r2, options: t });
} };
var B = (0, import_react5.createContext)(null);
B.displayName = "RadioGroupDataContext";
function oe(r2) {
  let o5 = (0, import_react5.useContext)(B);
  if (o5 === null) {
    let t = new Error(`<${r2} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, oe), t;
  }
  return o5;
}
var $ = (0, import_react5.createContext)(null);
$.displayName = "RadioGroupActionsContext";
function ne(r2) {
  let o5 = (0, import_react5.useContext)($);
  if (o5 === null) {
    let t = new Error(`<${r2} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, ne), t;
  }
  return o5;
}
function Le(r2, o5) {
  return u(o5.type, ke, r2, o5);
}
var he = "div";
function Fe(r2, o5) {
  let t = I(), { id: p4 = `headlessui-radiogroup-${t}`, value: T2, defaultValue: v3, form: S2, name: m4, onChange: M5, by: G = (e4, i) => e4 === i, disabled: C2 = false, ...H2 } = r2, y4 = o2(typeof G == "string" ? (e4, i) => {
    let n2 = G;
    return (e4 == null ? void 0 : e4[n2]) === (i == null ? void 0 : i[n2]);
  } : G), [P, h2] = (0, import_react5.useReducer)(Le, { options: [] }), a = P.options, [N2, R2] = H(), [k, U] = M2(), L2 = (0, import_react5.useRef)(null), W2 = y(L2, o5), [l4, s3] = T(T2, M5, v3), b3 = (0, import_react5.useMemo)(() => a.find((e4) => !e4.propsRef.current.disabled), [a]), F3 = (0, import_react5.useMemo)(() => a.some((e4) => y4(e4.propsRef.current.value, l4)), [a, l4]), d4 = o2((e4) => {
    var n2;
    if (C2 || y4(e4, l4))
      return false;
    let i = (n2 = a.find((f6) => y4(f6.propsRef.current.value, e4))) == null ? void 0 : n2.propsRef.current;
    return i != null && i.disabled ? false : (s3 == null || s3(e4), true);
  });
  F({ container: L2.current, accept(e4) {
    return e4.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e4) {
    e4.setAttribute("role", "none");
  } });
  let x2 = o2((e4) => {
    let i = L2.current;
    if (!i)
      return;
    let n2 = e(i), f6 = a.filter((u3) => u3.propsRef.current.disabled === false).map((u3) => u3.element.current);
    switch (e4.key) {
      case o3.Enter:
        p3(e4.currentTarget);
        break;
      case o3.ArrowLeft:
      case o3.ArrowUp:
        if (e4.preventDefault(), e4.stopPropagation(), O(f6, M.Previous | M.WrapAround) === N.Success) {
          let g = a.find((K) => K.element.current === (n2 == null ? void 0 : n2.activeElement));
          g && d4(g.propsRef.current.value);
        }
        break;
      case o3.ArrowRight:
      case o3.ArrowDown:
        if (e4.preventDefault(), e4.stopPropagation(), O(f6, M.Next | M.WrapAround) === N.Success) {
          let g = a.find((K) => K.element.current === (n2 == null ? void 0 : n2.activeElement));
          g && d4(g.propsRef.current.value);
        }
        break;
      case o3.Space:
        {
          e4.preventDefault(), e4.stopPropagation();
          let u3 = a.find((g) => g.element.current === (n2 == null ? void 0 : n2.activeElement));
          u3 && d4(u3.propsRef.current.value);
        }
        break;
    }
  }), c6 = o2((e4) => (h2({ type: 0, ...e4 }), () => h2({ type: 1, id: e4.id }))), _2 = (0, import_react5.useMemo)(() => ({ value: l4, firstOption: b3, containsCheckedOption: F3, disabled: C2, compare: y4, ...P }), [l4, b3, F3, C2, y4, P]), ie2 = (0, import_react5.useMemo)(() => ({ registerOption: c6, change: d4 }), [c6, d4]), ae = { ref: W2, id: p4, role: "radiogroup", "aria-labelledby": N2, "aria-describedby": k, onKeyDown: x2 }, pe = (0, import_react5.useMemo)(() => ({ value: l4 }), [l4]), w = (0, import_react5.useRef)(null), le = p();
  return (0, import_react5.useEffect)(() => {
    w.current && v3 !== void 0 && le.addEventListener(w.current, "reset", () => {
      d4(v3);
    });
  }, [w, d4]), import_react5.default.createElement(U, { name: "RadioGroup.Description" }, import_react5.default.createElement(R2, { name: "RadioGroup.Label" }, import_react5.default.createElement($.Provider, { value: ie2 }, import_react5.default.createElement(B.Provider, { value: _2 }, m4 != null && l4 != null && e3({ [m4]: l4 }).map(([e4, i], n2) => import_react5.default.createElement(c, { features: p2.Hidden, ref: n2 === 0 ? (f6) => {
    var u3;
    w.current = (u3 = f6 == null ? void 0 : f6.closest("form")) != null ? u3 : null;
  } : void 0, ...R({ key: e4, as: "input", type: "radio", checked: i != null, hidden: true, readOnly: true, form: S2, name: e4, value: i }) })), X({ ourProps: ae, theirProps: H2, slot: pe, defaultTag: he, name: "RadioGroup" })))));
}
var xe = ((t) => (t[t.Empty = 1] = "Empty", t[t.Active = 2] = "Active", t))(xe || {});
var _e = "div";
function we(r2, o5) {
  var x2;
  let t = I(), { id: p4 = `headlessui-radiogroup-option-${t}`, value: T2, disabled: v3 = false, ...S2 } = r2, m4 = (0, import_react5.useRef)(null), M5 = y(m4, o5), [G, C2] = H(), [H2, y4] = M2(), { addFlag: P, removeFlag: h2, hasFlag: a } = c3(1), N2 = s({ value: T2, disabled: v3 }), R2 = oe("RadioGroup.Option"), k = ne("RadioGroup.Option");
  l(() => k.registerOption({ id: p4, element: m4, propsRef: N2 }), [p4, k, m4, r2]);
  let U = o2((c6) => {
    var _2;
    if (r(c6.currentTarget))
      return c6.preventDefault();
    k.change(T2) && (P(2), (_2 = m4.current) == null || _2.focus());
  }), L2 = o2((c6) => {
    if (r(c6.currentTarget))
      return c6.preventDefault();
    P(2);
  }), W2 = o2(() => h2(2)), l4 = ((x2 = R2.firstOption) == null ? void 0 : x2.id) === p4, s3 = R2.disabled || v3, b3 = R2.compare(R2.value, T2), F3 = { ref: M5, id: p4, role: "radio", "aria-checked": b3 ? "true" : "false", "aria-labelledby": G, "aria-describedby": H2, "aria-disabled": s3 ? true : void 0, tabIndex: (() => s3 ? -1 : b3 || !R2.containsCheckedOption && l4 ? 0 : -1)(), onClick: s3 ? void 0 : U, onFocus: s3 ? void 0 : L2, onBlur: s3 ? void 0 : W2 }, d4 = (0, import_react5.useMemo)(() => ({ checked: b3, disabled: s3, active: a(2) }), [b3, s3, a]);
  return import_react5.default.createElement(y4, { name: "RadioGroup.Description" }, import_react5.default.createElement(C2, { name: "RadioGroup.Label" }, X({ ourProps: F3, theirProps: S2, slot: d4, defaultTag: _e, name: "RadioGroup.Option" })));
}
var Ie = D(Fe);
var Se = D(we);
var yt = Object.assign(Ie, { Option: Se, Label: M3, Description: b });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l3(r2) {
  let e4 = { called: false };
  return (...t) => {
    if (!e4.called)
      return e4.called = true, r2(...t);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d3(t, ...e4) {
  t && e4.length > 0 && t.classList.add(...e4);
}
function v2(t, ...e4) {
  t && e4.length > 0 && t.classList.remove(...e4);
}
function F2(t, e4) {
  let n2 = o();
  if (!t)
    return n2.dispose;
  let { transitionDuration: m4, transitionDelay: o5 } = getComputedStyle(t), [u3, p4] = [m4, o5].map((a) => {
    let [r2 = 0] = a.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, f6) => f6 - i);
    return r2;
  }), l4 = u3 + p4;
  if (l4 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e4(), r2.dispose();
      }, l4), r2.addEventListener(t, "transitionrun", (i) => {
        i.target === i.currentTarget && r2.dispose();
      });
    });
    let a = n2.addEventListener(t, "transitionend", (r2) => {
      r2.target === r2.currentTarget && (e4(), a());
    });
  } else
    e4();
  return n2.add(() => e4()), n2.dispose;
}
function y2(t, e4, n2, m4) {
  let o5 = n2 ? "enter" : "leave", u3 = o(), p4 = m4 !== void 0 ? l3(m4) : () => {
  };
  o5 === "enter" && (t.removeAttribute("hidden"), t.style.display = "");
  let l4 = u(o5, { enter: () => e4.enter, leave: () => e4.leave }), a = u(o5, { enter: () => e4.enterTo, leave: () => e4.leaveTo }), r2 = u(o5, { enter: () => e4.enterFrom, leave: () => e4.leaveFrom });
  return v2(t, ...e4.enter, ...e4.enterTo, ...e4.enterFrom, ...e4.leave, ...e4.leaveFrom, ...e4.leaveTo, ...e4.entered), d3(t, ...l4, ...r2), u3.nextFrame(() => {
    v2(t, ...r2), d3(t, ...a), F2(t, () => (v2(t, ...l4), d3(t, ...e4.entered), p4()));
  }), u3.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D2({ container: i, direction: t, classes: o5, onStart: s3, onStop: u3 }) {
  let a = f(), c6 = p(), r2 = s(t);
  l(() => {
    let e4 = o();
    c6.add(e4.dispose);
    let n2 = i.current;
    if (n2 && r2.current !== "idle" && a.current)
      return e4.dispose(), s3.current(r2.current), e4.add(y2(n2, o5.current, r2.current === "enter", () => {
        e4.dispose(), u3.current(r2.current);
      })), e4.dispose;
  }, [t]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x(t = "") {
  return t.split(" ").filter((n2) => n2.trim().length > 1);
}
var I3 = (0, import_react6.createContext)(null);
I3.displayName = "TransitionContext";
var Ce2 = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(Ce2 || {});
function Ee() {
  let t = (0, import_react6.useContext)(I3);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
function be() {
  let t = (0, import_react6.useContext)(_);
  if (t === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
var _ = (0, import_react6.createContext)(null);
_.displayName = "NestingContext";
function M4(t) {
  return "children" in t ? M4(t.children) : t.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
}
function re(t, n2) {
  let r2 = s(t), o5 = (0, import_react6.useRef)([]), N2 = f(), H2 = p(), p4 = o2((s3, e4 = j.Hidden) => {
    let a = o5.current.findIndex(({ el: i }) => i === s3);
    a !== -1 && (u(e4, { [j.Unmount]() {
      o5.current.splice(a, 1);
    }, [j.Hidden]() {
      o5.current[a].state = "hidden";
    } }), H2.microTask(() => {
      var i;
      !M4(o5) && N2.current && ((i = r2.current) == null || i.call(r2));
    }));
  }), P = o2((s3) => {
    let e4 = o5.current.find(({ el: a }) => a === s3);
    return e4 ? e4.state !== "visible" && (e4.state = "visible") : o5.current.push({ el: s3, state: "visible" }), () => p4(s3, j.Unmount);
  }), h2 = (0, import_react6.useRef)([]), v3 = (0, import_react6.useRef)(Promise.resolve()), T2 = (0, import_react6.useRef)({ enter: [], leave: [], idle: [] }), g = o2((s3, e4, a) => {
    h2.current.splice(0), n2 && (n2.chains.current[e4] = n2.chains.current[e4].filter(([i]) => i !== s3)), n2 == null || n2.chains.current[e4].push([s3, new Promise((i) => {
      h2.current.push(i);
    })]), n2 == null || n2.chains.current[e4].push([s3, new Promise((i) => {
      Promise.all(T2.current[e4].map(([l4, R2]) => R2)).then(() => i());
    })]), e4 === "enter" ? v3.current = v3.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a(e4)) : a(e4);
  }), f6 = o2((s3, e4, a) => {
    Promise.all(T2.current[e4].splice(0).map(([i, l4]) => l4)).then(() => {
      var i;
      (i = h2.current.shift()) == null || i();
    }).then(() => a(e4));
  });
  return (0, import_react6.useMemo)(() => ({ children: o5, register: P, unregister: p4, onStart: g, onStop: f6, wait: v3, chains: T2 }), [P, p4, o5, g, f6, T2, v3]);
}
function Se2() {
}
var xe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(t) {
  var r2;
  let n2 = {};
  for (let o5 of xe2)
    n2[o5] = (r2 = t[o5]) != null ? r2 : Se2;
  return n2;
}
function Pe(t) {
  let n2 = (0, import_react6.useRef)(ie(t));
  return (0, import_react6.useEffect)(() => {
    n2.current = ie(t);
  }, [t]), n2;
}
var Re = "div";
var oe2 = S.RenderStrategy;
function ye(t, n2) {
  let { beforeEnter: r2, afterEnter: o5, beforeLeave: N2, afterLeave: H2, enter: p4, enterFrom: P, enterTo: h2, entered: v3, leave: T2, leaveFrom: g, leaveTo: f6, ...s3 } = t, e4 = (0, import_react6.useRef)(null), a = y(e4, n2), i = s3.unmount ? j.Unmount : j.Hidden, { show: l4, appear: R2, initial: d4 } = Ee(), [u3, U] = (0, import_react6.useState)(l4 ? "visible" : "hidden"), K = be(), { register: L2, unregister: w } = K, j3 = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => L2(e4), [L2, e4]), (0, import_react6.useEffect)(() => {
    if (i === j.Hidden && e4.current) {
      if (l4 && u3 !== "visible") {
        U("visible");
        return;
      }
      return u(u3, { ["hidden"]: () => w(e4), ["visible"]: () => L2(e4) });
    }
  }, [u3, e4, L2, w, l4, i]);
  let k = s({ enter: x(p4), enterFrom: x(P), enterTo: x(h2), entered: x(v3), leave: x(T2), leaveFrom: x(g), leaveTo: x(f6) }), O3 = Pe({ beforeEnter: r2, afterEnter: o5, beforeLeave: N2, afterLeave: H2 }), G = l2();
  (0, import_react6.useEffect)(() => {
    if (G && u3 === "visible" && e4.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e4, u3, G]);
  let B2 = d4 && !R2, ae = (() => !G || B2 || j3.current === l4 ? "idle" : l4 ? "enter" : "leave")(), D3 = c3(0), le = o2((C2) => u(C2, { enter: () => {
    D3.addFlag(d.Opening), O3.current.beforeEnter();
  }, leave: () => {
    D3.addFlag(d.Closing), O3.current.beforeLeave();
  }, idle: () => {
  } })), ue2 = o2((C2) => u(C2, { enter: () => {
    D3.removeFlag(d.Opening), O3.current.afterEnter();
  }, leave: () => {
    D3.removeFlag(d.Closing), O3.current.afterLeave();
  }, idle: () => {
  } })), V2 = re(() => {
    U("hidden"), w(e4);
  }, K);
  D2({ container: e4, classes: k, direction: ae, onStart: s((C2) => {
    V2.onStart(e4, C2, le);
  }), onStop: s((C2) => {
    V2.onStop(e4, C2, ue2), C2 === "leave" && !M4(V2) && (U("hidden"), w(e4));
  }) }), (0, import_react6.useEffect)(() => {
    B2 && (i === j.Hidden ? j3.current = null : j3.current = l4);
  }, [l4, B2, u3]);
  let J2 = s3, Te = { ref: a };
  return R2 && l4 && d4 && (J2 = { ...J2, className: e2(s3.className, ...k.current.enter, ...k.current.enterFrom) }), import_react6.default.createElement(_.Provider, { value: V2 }, import_react6.default.createElement(c2, { value: u(u3, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | D3.flags }, X({ ourProps: Te, theirProps: J2, defaultTag: Re, features: oe2, visible: u3 === "visible", name: "Transition.Child" })));
}
function Ne(t, n2) {
  let { show: r2, appear: o5 = false, unmount: N2, ...H2 } = t, p4 = (0, import_react6.useRef)(null), P = y(p4, n2);
  l2();
  let h2 = C();
  if (r2 === void 0 && h2 !== null && (r2 = (h2 & d.Open) === d.Open), ![true, false].includes(r2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, T2] = (0, import_react6.useState)(r2 ? "visible" : "hidden"), g = re(() => {
    T2("hidden");
  }), [f6, s3] = (0, import_react6.useState)(true), e4 = (0, import_react6.useRef)([r2]);
  l(() => {
    f6 !== false && e4.current[e4.current.length - 1] !== r2 && (e4.current.push(r2), s3(false));
  }, [e4, r2]);
  let a = (0, import_react6.useMemo)(() => ({ show: r2, appear: o5, initial: f6 }), [r2, o5, f6]);
  (0, import_react6.useEffect)(() => {
    if (r2)
      T2("visible");
    else if (!M4(g))
      T2("hidden");
    else {
      let d4 = p4.current;
      if (!d4)
        return;
      let u3 = d4.getBoundingClientRect();
      u3.x === 0 && u3.y === 0 && u3.width === 0 && u3.height === 0 && T2("hidden");
    }
  }, [r2, g]);
  let i = { unmount: N2 }, l4 = o2(() => {
    var d4;
    f6 && s3(false), (d4 = t.beforeEnter) == null || d4.call(t);
  }), R2 = o2(() => {
    var d4;
    f6 && s3(false), (d4 = t.beforeLeave) == null || d4.call(t);
  });
  return import_react6.default.createElement(_.Provider, { value: g }, import_react6.default.createElement(I3.Provider, { value: a }, X({ ourProps: { ...i, as: import_react6.Fragment, children: import_react6.default.createElement(se2, { ref: P, ...i, ...H2, beforeEnter: l4, beforeLeave: R2 }) }, theirProps: {}, defaultTag: import_react6.Fragment, features: oe2, visible: v3 === "visible", name: "Transition" })));
}
function He(t, n2) {
  let r2 = (0, import_react6.useContext)(I3) !== null, o5 = C() !== null;
  return import_react6.default.createElement(import_react6.default.Fragment, null, !r2 && o5 ? import_react6.default.createElement(z, { ref: n2, ...t }) : import_react6.default.createElement(se2, { ref: n2, ...t }));
}
var z = D(Ne);
var se2 = D(ye);
var De = D(He);
var $e = Object.assign(z, { Child: De, Root: z });

export {
  yt,
  $e
};
//# sourceMappingURL=/build/_shared/chunk-ZAQHAU3J.js.map
