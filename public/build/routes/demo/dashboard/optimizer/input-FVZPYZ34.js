import {
  WrapperDonutChart,
  WrapperMultiColumnChart,
  WrapperMultiStackColChart
} from "/build/_shared/chunk-4KNWJ5NN.js";
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

// app/routes/demo/dashboard/optimizer/input.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/optimize/inputOpti.js
var overallData = [
  {
    category: "Inventory Utilization",
    value: 96.9
  },
  {
    category: "Reusable Spare",
    value: 0
  },
  {
    category: "Scrap",
    value: 3.1
  }
];
var consumptionCategories_m = ["Jan", "Feb"];
var consumptionTrendSeries_m = [
  {
    name: "Consumption Efficiency",
    data: [100, 95]
  },
  {
    name: "reusable",
    data: [0, 0]
  },
  {
    name: "scrap",
    data: [0, 4]
  }
];
var invCategories_m = ["", ""];
var invSeries_m = [
  {
    name: "Inventory Efficiency",
    data: [100, 95]
  }
];
var capCategories_m = ["", ""];
var capSeries_m = [
  {
    name: "Capacity Utilization",
    data: [100, 100]
  }
];
var consuCategories_m = [""];
var consuSeries_m = [
  {
    name: "Consumption Inefficiency",
    data: [4.4]
  }
];

// app/data/optimize/inputData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var kpiService_m = [
  {
    Name: "Overall KPIs",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperDonutChart, { series: overallData }, void 0, false, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 27,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Consumption Efficiency by Width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiStackColChart, { category: consumptionCategories_m, series: consumptionTrendSeries_m }, void 0, false, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 31,
      columnNumber: 16
    }, this)
  }
];
var kpiCost_m = [
  {
    Name: "Inventory Efficiency by width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: invCategories_m, series: invSeries_m }, void 0, false, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 41,
      columnNumber: 20
    }, this)
  },
  {
    Name: "Capacity Utilization by Width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: capCategories_m, series: capSeries_m }, void 0, false, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 46,
      columnNumber: 20
    }, this)
  },
  {
    Name: "Consumption Inefficiency by width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: consuCategories_m, series: consuSeries_m }, void 0, false, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 50,
      columnNumber: 20
    }, this)
  }
];

// app/routes/demo/dashboard/optimizer/input.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var roll = [
  {
    roll: "50",
    cap: "100%",
    inv: "95.6%",
    cons: "4.4%",
    scrap: "4.4%"
  },
  {
    roll: "100",
    cap: "100%",
    inv: "100%",
    cons: "N/A",
    scrap: "0%"
  }
];
var tabs = [
  { name: "Scenarios 1", href: "#", current: true },
  { name: "Scenarios 2", href: "#", current: false }
];
var plans = [
  { name: "Blank", description: "Blank scenario with default settings" },
  {
    name: "Default_Scenario",
    description: "Multiple master rolls and multiple finals."
  },
  {
    name: "Big_Discrepancy",
    description: "Big discrepancy on the size of the master roll."
  },
  {
    name: "Small_Discrepancy",
    description: "Small discrepancy on the master roll sizes."
  },
  {
    name: "Real_Life_Example",
    description: "Source: 'An effective solution for a real cutting stock problem in manufacturing plastic rolls.'"
  }
];
function InputRoute() {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [selected, setSelected] = (0, import_react.useState)(plans[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Input" }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900 ", children: "Scenarios" }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 75,
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
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 81,
              columnNumber: 21
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 74,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PlusIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 100,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: " grid grid-cols-1 gap-6 lg:grid-cols-2", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "li",
        {
          className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mt-2 text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 119,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        },
        kpi.Name,
        false,
        {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 113,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "my-4 grid grid-cols-1 gap-6 lg:grid-cols-3", children: kpiCost_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "li",
        {
          className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mt-2 text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 138,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 143,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        },
        kpi.Name,
        false,
        {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 132,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "my-2 bg-white p-4 shadow-xl shadow-slate-900/10 ring-1 ring-gray-200 sm:mx-0 sm:rounded-lg ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "my-2 text-base  font-medium text-gray-900", children: "Master Roll KPIs" }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Roll Width"
              },
              void 0,
              false,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 157,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Capacity Utilization"
              },
              void 0,
              false,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 163,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Inventory Efficiency"
              },
              void 0,
              false,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 169,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Consumption Inefficiency"
              },
              void 0,
              false,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 175,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Scrap"
              },
              void 0,
              false,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 181,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 156,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { className: "bg-white", children: roll.map((roll2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll2.roll }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 193,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll2.cap }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 196,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm ", children: roll2.inv }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 199,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll2.cons }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 202,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm font-medium sm:pr-0", children: roll2.scrap }, void 0, false, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 205,
              columnNumber: 21
            }, this)
          ] }, roll2, true, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 192,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 190,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 154,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($e.Root, { show: open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 218,
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
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 237,
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
                        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                        lineNumber: 247,
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
                          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                          lineNumber: 248,
                          columnNumber: 33
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                    lineNumber: 242,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 236,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 235,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 257,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Blank1" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 262,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 261,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 260,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 256,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 268,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 273,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 272,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 271,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 border-b mb-2" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 276,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 267,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(yt, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(yt.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 282,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4 mt-2", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  yt.Option,
                  {
                    value: plan,
                    className: ({ checked, active }) => classNames(
                      checked ? "border-transparent" : "border-gray-300",
                      active ? "" : "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
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
                            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                            lineNumber: 306,
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
                                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                                lineNumber: 316,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                            lineNumber: 312,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                        lineNumber: 305,
                        columnNumber: 41
                      }, this) }, void 0, false, {
                        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                        lineNumber: 304,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                          lineNumber: 323,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                      lineNumber: 303,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  false,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                    lineNumber: 287,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, false, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 285,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 281,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 279,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 234,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 hover:bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm",
                  onClick: () => setOpen(false),
                  children: "Cancel"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 343,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900",
                  children: "Create"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 350,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 342,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 233,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 232,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 223,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 222,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 221,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 220,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 217,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 216,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  InputRoute as default
};
//# sourceMappingURL=/build/routes/demo/dashboard/optimizer/input-FVZPYZ34.js.map
