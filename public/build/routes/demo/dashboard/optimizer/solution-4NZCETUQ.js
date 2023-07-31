import {
  $e,
  yt
} from "/build/_shared/chunk-ZAQHAU3J.js";
import {
  XMarkIcon_default,
  _t
} from "/build/_shared/chunk-Q5ROM35J.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import {
  PlusIcon_default
} from "/build/_shared/chunk-UOOUQHS5.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/routes/demo/dashboard/optimizer/solution.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var tabs = [
  { name: "Scenarios 1", href: "#", current: true },
  { name: "Scenarios 2", href: "#", current: false }
];
var plans = [
  { name: "Optimization completed", description: "1:51:32 PM - 2/23/2021" },
  {
    name: "Scenario modified",
    description: "1:21:17 PM - 6/6/2023"
  },
  {
    name: "Solve status",
    description: "OPTIMAL"
  },
  {
    name: "CS Job ID",
    description: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed"
  }
];
var order = [
  {
    width: "50",
    quantity: "12"
  },
  {
    width: "100",
    quantity: "1"
  }
];
function SolutionRoute() {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [selected, setSelected] = (0, import_react.useState)(plans[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Solution" }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 52,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900 ", children: "Scenarios" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 border-l sm:ml-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "-mb-px ml-4 flex space-x-8", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: tab.href,
              className: classNames(
                tab.current ? "border-rose-500 text-rose-500" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: tab.name
            },
            tab.name,
            false,
            {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 69,
              columnNumber: 21
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 92,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "list", className: " grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-base font-medium text-gray-900", children: "Cutting Operations" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 rounded-lg border p-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 space-y-2", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative block cursor-pointer rounded-lg border px-6 py-3 shadow-sm sm:flex sm:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex flex-col text-sm font-semibold text-gray-900", children: [
              plan.name,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "block text-gray-500 sm:inline", children: plan.description }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 113,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 110,
              columnNumber: 23
            }, this) }, plan, false, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 109,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 106,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-5 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600",
                  onClick: () => setOpen(false),
                  children: "LOG"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 122,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 ",
                  children: "OPTIMIZE"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 129,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 121,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 105,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mx-2 mt-2 text-base font-medium text-gray-900", children: "Buing Order" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 rounded-lg border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "mx-auto min-w-full divide-y divide-gray-300", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Roll Width"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 150,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Quantity"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 156,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 149,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 148,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white", children: order.map((order2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: order2.width }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 168,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: order2.quantity }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 171,
                columnNumber: 27
              }, this)
            ] }, order2, true, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 167,
              columnNumber: 25
            }, this)) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 165,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 147,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 146,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 141,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.Root, { show: open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $e.Child,
        {
          as: import_react.Fragment,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Create Scenario" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 206,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md  text-slate-300 hover:text-white",
                    onClick: () => setOpen(false),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
                        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                        lineNumber: 216,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        XMarkIcon_default,
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                          lineNumber: 217,
                          columnNumber: 33
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                    lineNumber: 211,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 210,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 205,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 204,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 226,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Blank1" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 231,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 230,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 229,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 225,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 237,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 242,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 240,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2 border-b p-2" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 245,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 236,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(yt.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 250,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 space-y-4", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  yt.Option,
                  {
                    value: plan,
                    className: ({ checked, active }) => classNames(
                      checked ? "border-transparent" : "border-gray-300",
                      active ? "" : "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex flex-col text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          yt.Label,
                          {
                            as: "span",
                            className: "font-medium text-gray-900",
                            children: plan.name
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                            lineNumber: 274,
                            columnNumber: 43
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          yt.Description,
                          {
                            as: "span",
                            className: "text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block sm:inline", children: plan.description }, void 0, false, {
                                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                                lineNumber: 284,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                            lineNumber: 280,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                        lineNumber: 273,
                        columnNumber: 41
                      }, this) }, void 0, false, {
                        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                        lineNumber: 272,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "span",
                        {
                          className: classNames(
                            active ? "border" : "border-2",
                            checked ? "border-rose-500" : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                          ),
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                          lineNumber: 291,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                      lineNumber: 271,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  false,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                    lineNumber: 255,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 253,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 249,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 248,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 203,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white hover:bg-indigo-600 shadow-sm",
                  onClick: () => setOpen(false),
                  children: "Cancel"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 310,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600",
                  children: "Create"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 317,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 309,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 202,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 201,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 192,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 191,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 190,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  SolutionRoute as default
};
//# sourceMappingURL=/build/routes/demo/dashboard/optimizer/solution-4NZCETUQ.js.map
