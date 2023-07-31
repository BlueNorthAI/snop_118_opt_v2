import {
  BookOpenIcon_default,
  ChartBarIcon_default,
  CpuChipIcon_default,
  InboxArrowDownIcon_default,
  Squares2X2Icon_default
} from "/build/_shared/chunk-UOOUQHS5.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-QMG5EP7N.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/routes/demo.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var menus = [
  {
    name: "Optimizer",
    to: "/demo/dashboard/optimizer/optimize",
    icon: CpuChipIcon_default,
    current: true
  },
  {
    name: "Input",
    to: "/demo/dashboard/optimizer/input",
    icon: InboxArrowDownIcon_default,
    current: false
  },
  {
    name: "Master",
    to: "/demo/dashboard/optimizer/master",
    icon: ChartBarIcon_default,
    current: false
  },
  {
    name: "Solution",
    to: "/demo/dashboard/optimizer/solution",
    icon: BookOpenIcon_default,
    current: false
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar() {
  const [open, setOpen] = (0, import_react.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `bg-blue-900  ${open ? "w-28" : "w-16"} flex flex-col text-gray-100 duration-500 `,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center bg-white py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "cursor-poniter mx-auto h-14 w-14 justify-center ",
                src: "/assets/logo-4.png",
                alt: "logo",
                onClick: () => setOpen(!open)
              },
              void 0,
              false,
              {
                fileName: "app/routes/demo.jsx",
                lineNumber: 57,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/demo.jsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { "aria-label": "Sidebar", className: "flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "static mt-3 w-full flex-1 space-y-1 px-2", children: menus == null ? void 0 : menus.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              NavLink,
              {
                to: item.to,
                className: ({ isActive }) => classNames(
                  isActive ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white",
                  "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/demo.jsx",
                    lineNumber: 80,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h2",
                    {
                      style: {
                        transitionDelay: `${item + 3}00ms`
                      },
                      className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"}`,
                      children: item == null ? void 0 : item.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/demo.jsx",
                      lineNumber: 81,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h2",
                    {
                      className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `,
                      children: item == null ? void 0 : item.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/demo.jsx",
                      lineNumber: 91,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              item.name,
              true,
              {
                fileName: "app/routes/demo.jsx",
                lineNumber: 68,
                columnNumber: 17
              },
              this
            )) }, void 0, false, {
              fileName: "app/routes/demo.jsx",
              lineNumber: 66,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/routes/demo.jsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo.jsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2 flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            NavLink,
            {
              className: ({ isActive }) => classNames(
                isActive ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Squares2X2Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/demo.jsx",
                  lineNumber: 114,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"}`,
                    children: "Appbar"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/demo.jsx",
                    lineNumber: 115,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `,
                    children: "Appbar"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/demo.jsx",
                    lineNumber: 122,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/demo.jsx",
              lineNumber: 104,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/demo.jsx",
            lineNumber: 103,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/demo.jsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col overflow-y-auto bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/demo.jsx",
      lineNumber: 136,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.jsx",
      lineNumber: 135,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demo.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Sidebar as default
};
//# sourceMappingURL=/build/routes/demo-PMKWHXTJ.js.map
