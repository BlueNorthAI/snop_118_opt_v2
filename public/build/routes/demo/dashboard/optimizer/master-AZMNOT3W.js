import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-4KNWJ5NN.js";
import {
  $e,
  yt
} from "/build/_shared/chunk-ZAQHAU3J.js";
import {
  TrashIcon_default,
  XMarkIcon_default,
  _t
} from "/build/_shared/chunk-Q5ROM35J.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import {
  PlusIcon_default
} from "/build/_shared/chunk-UOOUQHS5.js";
import {
  Link
} from "/build/_shared/chunk-QMG5EP7N.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/routes/demo/dashboard/optimizer/master.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/optimize/master.js
var invCategories_m = ["50", "100"];
var invSeries_m = [
  {
    name: "Inventory",
    data: [3, 2]
  }
];

// app/data/optimize/masterData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var kpiService_m = [
  {
    Name: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: invCategories_m, series: invSeries_m }, void 0, false, {
      fileName: "app/data/optimize/masterData.js",
      lineNumber: 26,
      columnNumber: 16
    }, this)
  }
];

// app/routes/demo/dashboard/optimizer/master.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
var roll = [
  {
    width: "50",
    inv: "3",
    buy: "$10",
    cut: "$1"
  },
  {
    width: "100",
    inv: "2",
    buy: "$20",
    cut: "$2"
  }
];
function SolutionRoute() {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [selected, setSelected] = (0, import_react.useState)(plans[0]);
  const checkbox = (0, import_react.useRef)();
  const [checked, setChecked] = (0, import_react.useState)(false);
  const [indeterminate, setIndeterminate] = (0, import_react.useState)(false);
  const [selectedroll, setSelectedroll] = (0, import_react.useState)([]);
  (0, import_react.useLayoutEffect)(() => {
    const isIndeterminate = selectedroll.length > 0 && selectedroll.length < roll.length;
    setChecked(selectedroll.length === roll.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedroll]);
  function toggleAll() {
    setSelectedroll(checked || indeterminate ? [] : roll);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Master" }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 76,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900 ", children: "Scenarios" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 border-l sm:ml-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "-mb-px ml-4 flex space-x-8", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 93,
              columnNumber: 21
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 91,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 86,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PlusIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 112,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { role: "list", className: " grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mx-2 mt-2 text-base font-medium text-gray-900", children: "Buing Order" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 rounded-lg border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "relative px-7 sm:w-12 sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "input",
                    {
                      type: "checkbox",
                      className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                      ref: checkbox,
                      checked,
                      onChange: toggleAll
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 138,
                      columnNumber: 27
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 134,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Width"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 146,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Inventory"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 153,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Buying Cost"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 159,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Cutting Cost"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 165,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "relative py-3.5 pl-3 pr-4 text-right sm:pr-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, false, {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 175,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row space-x-2", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
                          onClick: () => setOpen(!open),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            PlusIcon_default,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                              lineNumber: 182,
                              columnNumber: 31
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 177,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
                          onClick: () => setOpen(!open),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            TrashIcon_default,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                              lineNumber: 193,
                              columnNumber: 31
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 188,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 176,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 171,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 133,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 132,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { className: "bg-white", children: roll.map((roll2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "relative px-7 sm:w-12 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                  value: roll2,
                  checked: selectedroll.includes(roll2),
                  onChange: (e) => setSelectedroll(
                    e.target.checked ? [...selectedroll, roll2] : selectedroll.filter((p) => p !== roll2)
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 207,
                  columnNumber: 29
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 206,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll2.width }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 221,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll2.inv }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 224,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm ", children: roll2.buy }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 227,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll2.cut }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 230,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Link,
                {
                  to: "#",
                  className: "text-sky-500 hover:text-sky-600",
                  children: "Edit"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 234,
                  columnNumber: 29
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 233,
                columnNumber: 27
              }, this)
            ] }, roll2, true, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 205,
              columnNumber: 25
            }, this)) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 203,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 131,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 130,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mx-2 mt-2 text-base font-medium text-gray-900", children: "Cutting Operations" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 252,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 lg:grid-cols-1", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "li",
            {
              className: "col-span-1 flex flex-col divide-y divide-white  bg-white",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 263,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 262,
                columnNumber: 21
              }, this)
            },
            kpi.Name,
            false,
            {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 258,
              columnNumber: 19
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 251,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($e.Root, { show: open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 275,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        $e.Child,
        {
          as: import_react.Fragment,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Create Scenario" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 294,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md  text-slate-300 hover:text-white",
                    onClick: () => setOpen(false),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
                        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                        lineNumber: 304,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        XMarkIcon_default,
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 305,
                          columnNumber: 33
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                    lineNumber: 299,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 298,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 293,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 292,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 314,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Blank1" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 319,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 318,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 317,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 313,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 325,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 330,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 329,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 328,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-2 border-b p-2" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 333,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 324,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(yt, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(yt.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 338,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 space-y-4", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  yt.Option,
                  {
                    value: plan,
                    className: ({ checked: checked2, active }) => classNames(
                      checked2 ? "border-transparent" : "border-gray-300",
                      active ? "" : "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked: checked2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex flex-col text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          yt.Label,
                          {
                            as: "span",
                            className: "font-medium text-gray-900",
                            children: plan.name
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                            lineNumber: 360,
                            columnNumber: 43
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          yt.Description,
                          {
                            as: "span",
                            className: "text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block sm:inline", children: plan.description }, void 0, false, {
                                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                                lineNumber: 370,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                            lineNumber: 366,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                        lineNumber: 359,
                        columnNumber: 41
                      }, this) }, void 0, false, {
                        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                        lineNumber: 358,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        "span",
                        {
                          className: classNames(
                            active ? "border" : "border-2",
                            checked2 ? "border-rose-500" : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                          ),
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 377,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 357,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  false,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                    lineNumber: 343,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 341,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 337,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 336,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 291,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600",
                  onClick: () => setOpen(false),
                  children: "Cancel"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 396,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600",
                  children: "Create"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 403,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 395,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 290,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 289,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 280,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 279,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 278,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 277,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 274,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 273,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
export {
  SolutionRoute as default
};
//# sourceMappingURL=/build/routes/demo/dashboard/optimizer/master-AZMNOT3W.js.map
