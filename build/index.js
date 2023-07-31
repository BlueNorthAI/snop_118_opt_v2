var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/kendo/charts/column/kendoColumnChart.client
var require_kendoColumnChart = __commonJS({
  "empty-module:~/kendo/charts/column/kendoColumnChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/donut/kendoDonutChart.client
var require_kendoDonutChart = __commonJS({
  "empty-module:~/kendo/charts/donut/kendoDonutChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/stackcol/kendoStackColChart.client
var require_kendoStackColChart = __commonJS({
  "empty-module:~/kendo/charts/stackcol/kendoStackColChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = __toESM(require("react")), import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/styles/kendo.css
var kendo_default = "/build/_assets/kendo-2RVBWMQL.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VC7ADXZ6.css";

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }, { rel: "stylesheet", href: kendo_default }], meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
async function loader({ request }) {
  return (0, import_node3.json)({
    user: await getUser(request)
  });
}
function App() {
  return typeof document > "u" && (import_react2.default.useLayoutEffect = import_react2.default.useEffect), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
var loader2 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/index-remix.tsx
var index_remix_exports = {};
__export(index_remix_exports, {
  default: () => Index
});
var import_react6 = require("@remix-run/react");

// app/utils.ts
var import_react4 = require("@remix-run/react"), import_react5 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react4.useMatches)(), route = (0, import_react5.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/index-remix.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "img",
          {
            className: "h-full w-full object-cover",
            src: "https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg",
            alt: "Sonic Youth On Stage"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index-remix.tsx",
            lineNumber: 13,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 18,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-remix.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "Indie Stack" }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl", children: "Check the README.md file for instructions on how to get this project deployed." }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react6.Link,
          {
            to: "/notes",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: [
              "View Notes for ",
              user.email
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index-remix.tsx",
            lineNumber: 32,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react6.Link,
            {
              to: "/join",
              className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
              children: "Sign up"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index-remix.tsx",
              lineNumber: 40,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react6.Link,
            {
              to: "/login",
              className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
              children: "Log In"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index-remix.tsx",
              lineNumber: 46,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 39,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://remix.run", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "img",
          {
            src: "https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg",
            alt: "Remix",
            className: "mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index-remix.tsx",
            lineNumber: 56,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-remix.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-remix.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-remix.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 flex flex-wrap justify-center gap-8", children: [
      {
        src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
        alt: "Fly.io",
        href: "https://fly.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
        alt: "SQLite",
        href: "https://sqlite.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
        alt: "Prisma",
        href: "https://prisma.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
        alt: "Tailwind",
        href: "https://tailwindcss.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
        alt: "Cypress",
        href: "https://www.cypress.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
        alt: "MSW",
        href: "https://mswjs.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
        alt: "Vitest",
        href: "https://vitest.dev"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
        alt: "Testing Library",
        href: "https://testing-library.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
        alt: "Prettier",
        href: "https://prettier.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
        alt: "ESLint",
        href: "https://eslint.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
        alt: "TypeScript",
        href: "https://typescriptlang.org"
      }
    ].map((img) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        href: img.href,
        className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { alt: img.alt, src: img.src, className: "object-contain" }, void 0, !1, {
          fileName: "app/routes/index-remix.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this)
      },
      img.href,
      !1,
      {
        fileName: "app/routes/index-remix.tsx",
        lineNumber: 125,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/index-remix.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-remix.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index-remix.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index-remix.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");
var action = async ({ request }) => logout(request), loader3 = async () => (0, import_node4.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Example
});
var import_react7 = require("react"), import_react8 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), navigation = [
  { name: "Application", to: "/demo/dashboard/optimizer/optimize" },
  { name: "Features", to: "#" },
  { name: "Marketplace", to: "#" },
  { name: "Company", to: "#" }
];
function Example() {
  let user = useOptionalUser(), [mobileMenuOpen, setMobileMenuOpen] = (0, import_react7.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative isolate h-full w-full overflow-hidden bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
        alt: "",
        className: "absolute inset-0 -z-10 h-full w-full object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "svg",
      {
        className: "relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]",
        viewBox: "0 0 1155 678",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "path",
            {
              fill: "url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)",
              fillOpacity: ".2",
              d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 30,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "linearGradient",
            {
              id: "45de2b6b-92d5-4d68-a6a0-9b9b2abad533",
              x1: "1155.49",
              x2: "-78.208",
              y1: ".177",
              y2: "474.645",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("stop", { stopColor: "#9089FC" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 44,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("stop", { offset: 1, stopColor: "#FF80B5" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 45,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 36,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "nav",
        {
          className: "flex items-center justify-between pt-6",
          "aria-label": "Global",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react9.Link, { to: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Tri-GPT" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400",
                onClick: () => setMobileMenuOpen(!0),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 68,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 62,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react9.Link,
              {
                to: item.to,
                className: "text-lg font-semibold leading-6 text-white",
                children: item.name
              },
              item.name,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 73,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react9.Link,
              {
                to: "/notes",
                className: "text-lg font-semibold leading-6 text-white",
                children: [
                  "View ",
                  user.email
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 85,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react9.Link,
                {
                  to: "/join",
                  className: "text-lg font-semibold leading-6 text-white",
                  children: [
                    "Sign up ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 98,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 94,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-6 inline-flex rounded-md shadow-sm" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 101,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react9.Link,
                {
                  to: "/login",
                  className: "text-lg font-semibold leading-6 text-white",
                  children: [
                    "Log in ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 106,
                      columnNumber: 26
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 102,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 51,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Dialog, { as: "div", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Dialog.Panel, { className: "fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react9.Link, { to: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Tri-GPT" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              type: "button",
              className: "-m-2.5 rounded-md p-2.5 text-gray-400",
              onClick: () => setMobileMenuOpen(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 124,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 125,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 119,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/25", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react9.Link,
            {
              to: item.to,
              className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10",
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 132,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react9.Link,
              {
                to: "/join",
                className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10",
                children: "Sign up"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 142,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react9.Link,
              {
                to: "/login",
                className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10",
                children: "Log in"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 148,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden sm:mb-8 sm:flex sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20", children: [
          "Announcing our next round of funding.",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react9.Link, { to: "#", className: "font-semibold text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, this),
            "Read more ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 165,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-white sm:text-6xl", children: "Enterprise AI to transform your business" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-300", children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 173,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react9.Link,
              {
                to: "/demo/dashboard/optimizer/optimize",
                className: "rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
                children: "Get started"
              },
              "start",
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 179,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react9.Link,
              {
                to: "#",
                className: "text-base font-semibold leading-7 text-white",
                children: [
                  "Learn more ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 190,
                    columnNumber: 28
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 186,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "svg",
      {
        className: "relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]",
        viewBox: "0 0 1155 678",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "path",
            {
              fill: "url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)",
              fillOpacity: ".2",
              d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 201,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "linearGradient",
            {
              id: "ecb5b0c9-546c-4772-8c71-4d3f06d544bc",
              x1: "1155.49",
              x2: "-78.208",
              y1: ".177",
              y2: "474.645",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("stop", { stopColor: "#9089FC" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 215,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("stop", { offset: 1, stopColor: "#FF80B5" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 216,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 207,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 206,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 197,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader4,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_react11 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => await getUserId(request) ? (0, import_node5.redirect)("/") : (0, import_node5.json)({}), action2 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node5.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node5.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node5.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node5.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta2 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react10.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react10.useActionData)(), emailRef = (0, import_react11.useRef)(null), passwordRef = (0, import_react11.useRef)(null);
  return (0, import_react11.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 90,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 111,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 137,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 151,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react10.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 160,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/demo.jsx
var demo_exports = {};
__export(demo_exports, {
  default: () => Sidebar
});
var import_react12 = require("react"), import_solid = require("@heroicons/react/20/solid"), import_react13 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), menus = [
  {
    name: "Optimizer",
    to: "/demo/dashboard/optimizer/optimize",
    icon: import_solid.CpuChipIcon,
    current: !0
  },
  {
    name: "Input",
    to: "/demo/dashboard/optimizer/input",
    icon: import_solid.InboxArrowDownIcon,
    current: !1
  },
  {
    name: "Master",
    to: "/demo/dashboard/optimizer/master",
    icon: import_solid.ChartBarIcon,
    current: !1
  },
  {
    name: "Solution",
    to: "/demo/dashboard/optimizer/solution",
    icon: import_solid.BookOpenIcon,
    current: !1
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar() {
  let [open, setOpen] = (0, import_react12.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        className: `bg-blue-900  ${open ? "w-28" : "w-16"} flex flex-col text-gray-100 duration-500 `,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center bg-white py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "img",
              {
                className: "cursor-poniter mx-auto h-14 w-14 justify-center ",
                src: "/assets/logo-4.png",
                alt: "logo",
                onClick: () => setOpen(!open)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo.jsx",
                lineNumber: 57,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/demo.jsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { "aria-label": "Sidebar", className: "flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "static mt-3 w-full flex-1 space-y-1 px-2", children: menus == null ? void 0 : menus.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_react13.NavLink,
              {
                to: item.to,
                className: ({ isActive }) => classNames(
                  isActive ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white",
                  "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(item.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/routes/demo.jsx",
                    lineNumber: 80,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "h2",
                    {
                      style: {
                        transitionDelay: `${item + 3}00ms`
                      },
                      className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"}`,
                      children: item == null ? void 0 : item.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/demo.jsx",
                      lineNumber: 81,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "h2",
                    {
                      className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `,
                      children: item == null ? void 0 : item.name
                    },
                    void 0,
                    !1,
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
              !0,
              {
                fileName: "app/routes/demo.jsx",
                lineNumber: 68,
                columnNumber: 17
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/demo.jsx",
              lineNumber: 66,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo.jsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo.jsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-2 flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react13.NavLink,
            {
              className: ({ isActive }) => classNames(
                isActive ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_solid.Squares2X2Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/demo.jsx",
                  lineNumber: 114,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "h2",
                  {
                    className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"}`,
                    children: "Appbar"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/demo.jsx",
                    lineNumber: 115,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "h2",
                  {
                    className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `,
                    children: "Appbar"
                  },
                  void 0,
                  !1,
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
            !0,
            {
              fileName: "app/routes/demo.jsx",
              lineNumber: 104,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/demo.jsx",
            lineNumber: 103,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/demo.jsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-1 flex-col overflow-y-auto bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/demo.jsx",
      lineNumber: 136,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.jsx",
      lineNumber: 135,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/demo/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => SCMDashboardRoute
});
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SCMDashboardRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
    fileName: "app/routes/demo/dashboard.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/dashboard.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/dashboard.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/demo/dashboard/optimizer/optimize.jsx
var optimize_exports = {};
__export(optimize_exports, {
  default: () => InputRoute
});
var import_react15 = require("react"), import_react16 = require("@headlessui/react"), import_solid2 = require("@heroicons/react/20/solid"), import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
var tabs = [
  { name: "Scenarios 1", href: "#", current: !0 },
  { name: "Scenarios 2", href: "#", current: !1 }
], plans = [
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
function InputRoute() {
  let [open, setOpen] = (0, import_react15.useState)(!1), [selected, setSelected] = (0, import_react15.useState)(plans[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Dashboard" }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 40,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900", children: "Scenarios" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-4 border-l sm:ml-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "-mb-px ml-4 flex space-x-8", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "a",
            {
              href: tab.href,
              className: classNames2(
                tab.current ? "border-rose-500 text-rose-500" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: tab.name
            },
            tab.name,
            !1,
            {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 57,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-lg hover:bg-rose-600 ",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_solid2.PlusIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 76,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { role: "list", className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "m-2 text-base font-medium text-gray-900", children: "Optimization" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "m-2 rounded-lg border px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "my-2 space-y-2", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative block cursor-pointer rounded-lg border px-6 py-3 shadow-sm sm:flex sm:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex flex-col text-sm font-semibold text-gray-900", children: [
              plan.name,
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "block text-gray-500 sm:inline", children: plan.description }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 102,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 99,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 98,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 97,
              columnNumber: 21
            }, this)) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-center  pt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-5 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600",
                  onClick: () => setOpen(!1),
                  children: "LOG"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 112,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600",
                  children: "OPTIMIZE"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 119,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 111,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 89,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "m-2 text-base font-medium text-gray-900", children: "Parameters" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "m-2 flex flex-row justify-start rounded-lg border ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-4 my-4 flex flex-1 flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "label",
              {
                htmlFor: "name",
                className: "block text-sm font-medium leading-6 text-gray-400",
                children: "Spare threshold"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 138,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "name",
                  id: "name",
                  className: "peer block w-full border-0 bg-gray-50 py-1.5 pr-4 text-right text-gray-900 focus:ring-0 sm:text-sm sm:leading-6",
                  placeholder: "20"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 145,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "div",
                {
                  className: "absolute inset-x-0 bottom-0 border-t border-gray-300 ",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 152,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "label",
                {
                  htmlFor: "name",
                  className: "block text-sm font-medium leading-6 text-gray-400",
                  children: "Number of Knives"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 158,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative mt-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "name",
                    id: "name",
                    className: "peer block w-full border-0 bg-gray-50 py-1.5 pr-4 text-right text-gray-900 focus:ring-0 sm:text-sm sm:leading-6",
                    placeholder: "7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                    lineNumber: 165,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "div",
                  {
                    className: "absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 ",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                    lineNumber: 172,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 164,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 157,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 137,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 131,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.Transition.Root, { show: open, as: import_react15.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "fixed inset-0" }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react16.Transition.Child,
        {
          as: import_react15.Fragment,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.Dialog.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Create Scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 206,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md  text-slate-300 hover:text-white",
                    onClick: () => setOpen(!1),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                        lineNumber: 216,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                        import_outline2.XMarkIcon,
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                          lineNumber: 217,
                          columnNumber: 33
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                    lineNumber: 211,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 210,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 205,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 204,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 226,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Blank1" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 231,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 230,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 229,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 225,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 237,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 242,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 240,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-2 border-b p-2" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 245,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 236,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.RadioGroup, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react16.RadioGroup.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 250,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2 space-y-4", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  import_react16.RadioGroup.Option,
                  {
                    value: plan,
                    className: ({ checked, active }) => classNames2(
                      checked ? "border-transparent" : "border-gray-300",
                      "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex flex-col text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                          import_react16.RadioGroup.Label,
                          {
                            as: "span",
                            className: "font-medium text-gray-900",
                            children: plan.name
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                            lineNumber: 272,
                            columnNumber: 43
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                          import_react16.RadioGroup.Description,
                          {
                            as: "span",
                            className: "text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "block sm:inline", children: plan.description }, void 0, !1, {
                                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                                lineNumber: 282,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                            lineNumber: 278,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                        lineNumber: 271,
                        columnNumber: 41
                      }, this) }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                        lineNumber: 270,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                        "span",
                        {
                          className: classNames2(
                            active ? "border" : "border-2",
                            checked ? "border-rose-500" : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                          ),
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                          lineNumber: 289,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                      lineNumber: 269,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  !1,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                    lineNumber: 255,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 253,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 249,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                lineNumber: 248,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 203,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600",
                  onClick: () => setOpen(!1),
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 308,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600",
                  children: "Create"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
                  lineNumber: 315,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
              lineNumber: 307,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 202,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
            lineNumber: 201,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
          lineNumber: 192,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
        lineNumber: 191,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
        lineNumber: 190,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo/dashboard/optimizer/optimize.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/demo/dashboard/optimizer/solution.jsx
var solution_exports = {};
__export(solution_exports, {
  default: () => SolutionRoute
});
var import_react17 = require("react"), import_react18 = require("@headlessui/react"), import_solid3 = require("@heroicons/react/20/solid"), import_outline3 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
var tabs2 = [
  { name: "Scenarios 1", href: "#", current: !0 },
  { name: "Scenarios 2", href: "#", current: !1 }
], plans2 = [
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
], order = [
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
  let [open, setOpen] = (0, import_react17.useState)(!1), [selected, setSelected] = (0, import_react17.useState)(plans2[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Solution" }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 52,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900 ", children: "Scenarios" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-4 border-l sm:ml-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("nav", { className: "-mb-px ml-4 flex space-x-8", children: tabs2.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "a",
            {
              href: tab.href,
              className: classNames3(
                tab.current ? "border-rose-500 text-rose-500" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: tab.name
            },
            tab.name,
            !1,
            {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 69,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_solid3.PlusIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 92,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { role: "list", className: " grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "mt-2 text-base font-medium text-gray-900", children: "Cutting Operations" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "m-2 rounded-lg border p-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my-2 space-y-2", children: plans2.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative block cursor-pointer rounded-lg border px-6 py-3 shadow-sm sm:flex sm:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex flex-col text-sm font-semibold text-gray-900", children: [
              plan.name,
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "block text-gray-500 sm:inline", children: plan.description }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 113,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 110,
              columnNumber: 23
            }, this) }, plan, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 109,
              columnNumber: 21
            }, this)) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 106,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-5 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600",
                  onClick: () => setOpen(!1),
                  children: "LOG"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 122,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 ",
                  children: "OPTIMIZE"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 129,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 121,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 105,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "mx-2 mt-2 text-base font-medium text-gray-900", children: "Buing Order" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "m-2 rounded-lg border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("table", { className: "mx-auto min-w-full divide-y divide-gray-300", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { className: "bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Roll Width"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 150,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Quantity"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 156,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 149,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 148,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tbody", { className: "bg-white", children: order.map((order2) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: order2.width }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 168,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: order2.quantity }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 171,
                columnNumber: 27
              }, this)
            ] }, order2, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 167,
              columnNumber: 25
            }, this)) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 165,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 147,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 146,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 141,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.Transition.Root, { show: open, as: import_react17.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed inset-0" }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react18.Transition.Child,
        {
          as: import_react17.Fragment,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.Dialog.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Create Scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 206,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md  text-slate-300 hover:text-white",
                    onClick: () => setOpen(!1),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                        lineNumber: 216,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        import_outline3.XMarkIcon,
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
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
                  !0,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                    lineNumber: 211,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 210,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 205,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 204,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 226,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Blank1" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 231,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 230,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 229,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 225,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 237,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 242,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 240,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mb-2 border-b p-2" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 245,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 236,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.RadioGroup, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react18.RadioGroup.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 250,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-2 space-y-4", children: plans2.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_react18.RadioGroup.Option,
                  {
                    value: plan,
                    className: ({ checked, active }) => classNames3(
                      checked ? "border-transparent" : "border-gray-300",
                      "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex flex-col text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                          import_react18.RadioGroup.Label,
                          {
                            as: "span",
                            className: "font-medium text-gray-900",
                            children: plan.name
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                            lineNumber: 274,
                            columnNumber: 43
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                          import_react18.RadioGroup.Description,
                          {
                            as: "span",
                            className: "text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "block sm:inline", children: plan.description }, void 0, !1, {
                                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                                lineNumber: 284,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                            lineNumber: 280,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                        lineNumber: 273,
                        columnNumber: 41
                      }, this) }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                        lineNumber: 272,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        "span",
                        {
                          className: classNames3(
                            active ? "border" : "border-2",
                            checked ? "border-rose-500" : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                          ),
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                          lineNumber: 291,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                      lineNumber: 271,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  !1,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                    lineNumber: 255,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 253,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 249,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                lineNumber: 248,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 203,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white hover:bg-indigo-600 shadow-sm",
                  onClick: () => setOpen(!1),
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 310,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600",
                  children: "Create"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
                  lineNumber: 317,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
              lineNumber: 309,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 202,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
            lineNumber: 201,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
          lineNumber: 192,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 191,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 190,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo/dashboard/optimizer/solution.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/demo/dashboard/optimizer/master.jsx
var master_exports = {};
__export(master_exports, {
  default: () => SolutionRoute2
});
var import_react19 = require("react"), import_react20 = require("@headlessui/react"), import_solid4 = require("@heroicons/react/20/solid"), import_outline4 = require("@heroicons/react/24/outline");

// app/kendo/charts/column/WrapperColumnChart.jsx
var import_kendoColumnChart = __toESM(require_kendoColumnChart()), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Fallback = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 8,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
  lineNumber: 7,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
  lineNumber: 6,
  columnNumber: 12
}, this);
function WrapperMultiColumnChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_kendoColumnChart.MultiColumnChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 20,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Fallback, {}, void 0, !1, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 20,
    columnNumber: 116
  }, this);
}

// app/kendo/charts/donut/WrapperDonutChart.jsx
var import_kendoDonutChart = __toESM(require_kendoDonutChart()), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Fallback2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { width: 20, height: 20, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 0,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperDonutChart({ series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_kendoDonutChart.DonutChartContainer, { series }, void 0, !1, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 20,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Fallback2, {}, void 0, !1, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 20,
    columnNumber: 88
  }, this);
}

// app/kendo/charts/stackcol/WrapperStackColChart.jsx
var import_kendoStackColChart = __toESM(require_kendoStackColChart()), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), Fallback3 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperMultiStackColChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_kendoStackColChart.MultiStackColChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
    lineNumber: 19,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Fallback3, {}, void 0, !1, {
    fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
    lineNumber: 19,
    columnNumber: 116
  }, this);
}

// app/kendo/rawData/optimize/master.js
var invCategories_m = ["50", "100"], invSeries_m = [
  {
    name: "Inventory",
    data: [3, 2]
  }
];

// app/data/optimize/masterData.js
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
var kpiService_m = [
  {
    Name: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WrapperMultiColumnChart, { category: invCategories_m, series: invSeries_m }, void 0, !1, {
      fileName: "app/data/optimize/masterData.js",
      lineNumber: 26,
      columnNumber: 16
    }, this)
  }
];

// app/routes/demo/dashboard/optimizer/master.jsx
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function classNames4(...classes) {
  return classes.filter(Boolean).join(" ");
}
var tabs3 = [
  { name: "Scenarios 1", href: "#", current: !0 },
  { name: "Scenarios 2", href: "#", current: !1 }
], plans3 = [
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
], roll = [
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
function SolutionRoute2() {
  let [open, setOpen] = (0, import_react19.useState)(!1), [selected, setSelected] = (0, import_react19.useState)(plans3[0]), checkbox = (0, import_react19.useRef)(), [checked, setChecked] = (0, import_react19.useState)(!1), [indeterminate, setIndeterminate] = (0, import_react19.useState)(!1), [selectedroll, setSelectedroll] = (0, import_react19.useState)([]);
  (0, import_react19.useLayoutEffect)(() => {
    let isIndeterminate = selectedroll.length > 0 && selectedroll.length < roll.length;
    setChecked(selectedroll.length === roll.length), setIndeterminate(isIndeterminate), checkbox.current.indeterminate = isIndeterminate;
  }, [selectedroll]);
  function toggleAll() {
    setSelectedroll(checked || indeterminate ? [] : roll), setChecked(!checked && !indeterminate), setIndeterminate(!1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Master" }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 76,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900 ", children: "Scenarios" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-4 border-l sm:ml-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("nav", { className: "-mb-px ml-4 flex space-x-8", children: tabs3.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "a",
            {
              href: tab.href,
              className: classNames4(
                tab.current ? "border-rose-500 text-rose-500" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: tab.name
            },
            tab.name,
            !1,
            {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 93,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 91,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 86,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_solid4.PlusIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 112,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { role: "list", className: " grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "mx-2 mt-2 text-base font-medium text-gray-900", children: "Buing Order" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "m-2 rounded-lg border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { className: "bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "relative px-7 sm:w-12 sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                    "input",
                    {
                      type: "checkbox",
                      className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                      ref: checkbox,
                      checked,
                      onChange: toggleAll
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 138,
                      columnNumber: 27
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 134,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Width"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 146,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Inventory"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 153,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Buying Cost"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 159,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                  children: "Cutting Cost"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 165,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "th",
                {
                  scope: "col",
                  className: "relative py-3.5 pl-3 pr-4 text-right sm:pr-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, !1, {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 175,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row space-x-2", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
                          onClick: () => setOpen(!open),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_solid4.PlusIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                              lineNumber: 182,
                              columnNumber: 31
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 177,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
                          onClick: () => setOpen(!open),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_outline4.TrashIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                              lineNumber: 193,
                              columnNumber: 31
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 188,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 176,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 171,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 133,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 132,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tbody", { className: "bg-white", children: roll.map((roll3) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "relative px-7 sm:w-12 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                  value: roll3,
                  checked: selectedroll.includes(roll3),
                  onChange: (e) => setSelectedroll(
                    e.target.checked ? [...selectedroll, roll3] : selectedroll.filter((p) => p !== roll3)
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 207,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 206,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll3.width }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 221,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll3.inv }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 224,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm ", children: roll3.buy }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 227,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll3.cut }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 230,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                import_react21.Link,
                {
                  to: "#",
                  className: "text-sky-500 hover:text-sky-600",
                  children: "Edit"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 234,
                  columnNumber: 29
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 233,
                columnNumber: 27
              }, this)
            ] }, roll3, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 205,
              columnNumber: 25
            }, this)) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 203,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 131,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 130,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "mx-2 mt-2 text-base font-medium text-gray-900", children: "Cutting Operations" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 252,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 lg:grid-cols-1", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "li",
            {
              className: "col-span-1 flex flex-col divide-y divide-white  bg-white",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: kpi.container }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 263,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 262,
                columnNumber: 21
              }, this)
            },
            kpi.Name,
            !1,
            {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 258,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 251,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Transition.Root, { show: open, as: import_react19.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "fixed inset-0" }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 275,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react20.Transition.Child,
        {
          as: import_react19.Fragment,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.Dialog.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Create Scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 294,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md  text-slate-300 hover:text-white",
                    onClick: () => setOpen(!1),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                        lineNumber: 304,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                        import_outline4.XMarkIcon,
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
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
                  !0,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                    lineNumber: 299,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 298,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 293,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 292,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 314,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Blank1" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 319,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 318,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 317,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 313,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 325,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 330,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 329,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 328,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-2 border-b p-2" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 333,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 324,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.RadioGroup, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react20.RadioGroup.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 338,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2 space-y-4", children: plans3.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                  import_react20.RadioGroup.Option,
                  {
                    value: plan,
                    className: ({ checked: checked2, active }) => classNames4(
                      checked2 ? "border-transparent" : "border-gray-300",
                      "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked: checked2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "flex flex-col text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                          import_react20.RadioGroup.Label,
                          {
                            as: "span",
                            className: "font-medium text-gray-900",
                            children: plan.name
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                            lineNumber: 360,
                            columnNumber: 43
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                          import_react20.RadioGroup.Description,
                          {
                            as: "span",
                            className: "text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "block sm:inline", children: plan.description }, void 0, !1, {
                                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                                lineNumber: 370,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                            lineNumber: 366,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                        lineNumber: 359,
                        columnNumber: 41
                      }, this) }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                        lineNumber: 358,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                        "span",
                        {
                          className: classNames4(
                            active ? "border" : "border-2",
                            checked2 ? "border-rose-500" : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                          ),
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                          lineNumber: 377,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                      lineNumber: 357,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  !1,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                    lineNumber: 343,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 341,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 337,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                lineNumber: 336,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 291,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600",
                  onClick: () => setOpen(!1),
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 396,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600",
                  children: "Create"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
                  lineNumber: 403,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
              lineNumber: 395,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 290,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
            lineNumber: 289,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
          lineNumber: 280,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 279,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 278,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
        lineNumber: 277,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 274,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
      lineNumber: 273,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo/dashboard/optimizer/master.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// app/routes/demo/dashboard/optimizer/input.jsx
var input_exports = {};
__export(input_exports, {
  default: () => InputRoute2
});
var import_react22 = require("react"), import_react23 = require("@headlessui/react");

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
var consumptionCategories_m = ["Jan", "Feb"], consumptionTrendSeries_m = [
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
], invCategories_m2 = ["", ""], invSeries_m2 = [
  {
    name: "Inventory Efficiency",
    data: [100, 95]
  }
], capCategories_m = ["", ""], capSeries_m = [
  {
    name: "Capacity Utilization",
    data: [100, 100]
  }
], consuCategories_m = [""], consuSeries_m = [
  {
    name: "Consumption Inefficiency",
    data: [4.4]
  }
];

// app/data/optimize/inputData.js
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
var kpiService_m2 = [
  {
    Name: "Overall KPIs",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperDonutChart, { series: overallData }, void 0, !1, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 27,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Consumption Efficiency by Width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiStackColChart, { category: consumptionCategories_m, series: consumptionTrendSeries_m }, void 0, !1, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 31,
      columnNumber: 16
    }, this)
  }
], kpiCost_m = [
  {
    Name: "Inventory Efficiency by width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiColumnChart, { category: invCategories_m2, series: invSeries_m2 }, void 0, !1, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 41,
      columnNumber: 20
    }, this)
  },
  {
    Name: "Capacity Utilization by Width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiColumnChart, { category: capCategories_m, series: capSeries_m }, void 0, !1, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 46,
      columnNumber: 20
    }, this)
  },
  {
    Name: "Consumption Inefficiency by width",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiColumnChart, { category: consuCategories_m, series: consuSeries_m }, void 0, !1, {
      fileName: "app/data/optimize/inputData.js",
      lineNumber: 50,
      columnNumber: 20
    }, this)
  }
];

// app/routes/demo/dashboard/optimizer/input.jsx
var import_solid5 = require("@heroicons/react/20/solid"), import_outline5 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function classNames5(...classes) {
  return classes.filter(Boolean).join(" ");
}
var roll2 = [
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
], tabs4 = [
  { name: "Scenarios 1", href: "#", current: !0 },
  { name: "Scenarios 2", href: "#", current: !1 }
], plans4 = [
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
function InputRoute2() {
  let [open, setOpen] = (0, import_react22.useState)(!1), [selected, setSelected] = (0, import_react22.useState)(plans4[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Optimizer Input" }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " border-b border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "p-2 sm:flex sm:items-baseline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900 ", children: "Scenarios" }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-4 border-l sm:ml-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("nav", { className: "-mb-px ml-4 flex space-x-8", children: tabs4.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "a",
            {
              href: tab.href,
              className: classNames5(
                tab.current ? "border-rose-500 text-rose-500" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
              ),
              "aria-current": tab.current ? "page" : void 0,
              children: tab.name
            },
            tab.name,
            !1,
            {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 81,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 74,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mr-2 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full bg-rose-500 p-2 text-white shadow-sm hover:bg-rose-600",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_solid5.PlusIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 100,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { className: " grid grid-cols-1 gap-6 lg:grid-cols-2", children: kpiService_m2.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "li",
        {
          className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "mt-2 text-base font-medium text-gray-900", children: kpi.Name }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 119,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: kpi.container }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        },
        kpi.Name,
        !1,
        {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 113,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { className: "my-4 grid grid-cols-1 gap-6 lg:grid-cols-3", children: kpiCost_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "li",
        {
          className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "mt-2 text-base font-medium text-gray-900", children: kpi.Name }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 138,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: kpi.container }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 143,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        },
        kpi.Name,
        !1,
        {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 132,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "my-2 bg-white p-4 shadow-xl shadow-slate-900/10 ring-1 ring-gray-200 sm:mx-0 sm:rounded-lg ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "my-2 text-base  font-medium text-gray-900", children: "Master Roll KPIs" }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tr", { className: "bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Roll Width"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 157,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Capacity Utilization"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 163,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Inventory Efficiency"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 169,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Consumption Inefficiency"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 175,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10",
                children: "Scrap"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 181,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 156,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tbody", { className: "bg-white", children: roll2.map((roll3) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll3.roll }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 193,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll3.cap }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 196,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm ", children: roll3.inv }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 199,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: roll3.cons }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 202,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm font-medium sm:pr-0", children: roll3.scrap }, void 0, !1, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 205,
              columnNumber: 21
            }, this)
          ] }, roll3, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 192,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 190,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 154,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react23.Transition.Root, { show: open, as: import_react22.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react23.Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-0" }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_react23.Transition.Child,
        {
          as: import_react22.Fragment,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react23.Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react23.Dialog.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Create Scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 237,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md  text-slate-300 hover:text-white",
                    onClick: () => setOpen(!1),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                        lineNumber: 247,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                        import_outline5.XMarkIcon,
                        {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
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
                  !0,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                    lineNumber: 242,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 236,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 235,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Name" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 257,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Blank1" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 262,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 261,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 260,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 256,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 268,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Blank scenario with default settings" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 273,
                  columnNumber: 31
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 272,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 271,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "p-2 border-b mb-2" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 276,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 267,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react23.RadioGroup, { value: selected, onChange: setSelected, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react23.RadioGroup.Label, { className: "text-md block font-medium leading-6 text-gray-900", children: "Select a type of scenario" }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 282,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "space-y-4 mt-2", children: plans4.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                  import_react23.RadioGroup.Option,
                  {
                    value: plan,
                    className: ({ checked, active }) => classNames5(
                      checked ? "border-transparent" : "border-gray-300",
                      "",
                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
                    ),
                    children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "flex flex-col text-sm", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                          import_react23.RadioGroup.Label,
                          {
                            as: "span",
                            className: "font-medium text-gray-900",
                            children: plan.name
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                            lineNumber: 306,
                            columnNumber: 43
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                          import_react23.RadioGroup.Description,
                          {
                            as: "span",
                            className: "text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "block sm:inline", children: plan.description }, void 0, !1, {
                                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                                lineNumber: 316,
                                columnNumber: 45
                              }, this),
                              " "
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                            lineNumber: 312,
                            columnNumber: 43
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                        lineNumber: 305,
                        columnNumber: 41
                      }, this) }, void 0, !1, {
                        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                        lineNumber: 304,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                        "span",
                        {
                          className: classNames5(
                            active ? "border" : "border-2",
                            checked ? "border-rose-500" : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                          ),
                          "aria-hidden": "true"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                          lineNumber: 323,
                          columnNumber: 39
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                      lineNumber: 303,
                      columnNumber: 37
                    }, this)
                  },
                  plan.name,
                  !1,
                  {
                    fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                    lineNumber: 287,
                    columnNumber: 33
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 285,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 281,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                lineNumber: 279,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 234,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-center p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "text-md rounded-md border bg-indigo-500 hover:bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm",
                  onClick: () => setOpen(!1),
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 343,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900",
                  children: "Create"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
                  lineNumber: 350,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
              lineNumber: 342,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 233,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
            lineNumber: 232,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
          lineNumber: 223,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 222,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 221,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
        lineNumber: 220,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 217,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
      lineNumber: 216,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo/dashboard/optimizer/input.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action3,
  default: () => Join,
  loader: () => loader5,
  meta: () => meta3
});
var import_node6 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), import_react25 = require("react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => await getUserId(request) ? (0, import_node6.redirect)("/") : (0, import_node6.json)({}), action3 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node6.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node6.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node6.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node6.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta3 = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react24.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react24.useActionData)(), emailRef = (0, import_react25.useRef)(null), passwordRef = (0, import_react25.useRef)(null);
  return (0, import_react25.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react24.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_react24.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 151,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YDQZ54U3.js", imports: ["/build/_shared/chunk-6DAQMQYB.js", "/build/_shared/chunk-QMG5EP7N.js", "/build/_shared/chunk-JR7JHID7.js", "/build/_shared/chunk-4D7IJTTE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IGDIFY4R.js", imports: ["/build/_shared/chunk-WA2U3LPD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-PMKWHXTJ.js", imports: ["/build/_shared/chunk-UOOUQHS5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/dashboard": { id: "routes/demo/dashboard", parentId: "routes/demo", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/dashboard-SNU3ANGT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/dashboard/optimizer/input": { id: "routes/demo/dashboard/optimizer/input", parentId: "routes/demo/dashboard", path: "optimizer/input", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/dashboard/optimizer/input-FVZPYZ34.js", imports: ["/build/_shared/chunk-4KNWJ5NN.js", "/build/_shared/chunk-ZAQHAU3J.js", "/build/_shared/chunk-Q5ROM35J.js", "/build/_shared/chunk-UOOUQHS5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/dashboard/optimizer/master": { id: "routes/demo/dashboard/optimizer/master", parentId: "routes/demo/dashboard", path: "optimizer/master", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/dashboard/optimizer/master-AZMNOT3W.js", imports: ["/build/_shared/chunk-4KNWJ5NN.js", "/build/_shared/chunk-ZAQHAU3J.js", "/build/_shared/chunk-Q5ROM35J.js", "/build/_shared/chunk-UOOUQHS5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/dashboard/optimizer/optimize": { id: "routes/demo/dashboard/optimizer/optimize", parentId: "routes/demo/dashboard", path: "optimizer/optimize", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/dashboard/optimizer/optimize-KSRSGJRQ.js", imports: ["/build/_shared/chunk-ZAQHAU3J.js", "/build/_shared/chunk-Q5ROM35J.js", "/build/_shared/chunk-UOOUQHS5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/dashboard/optimizer/solution": { id: "routes/demo/dashboard/optimizer/solution", parentId: "routes/demo/dashboard", path: "optimizer/solution", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/dashboard/optimizer/solution-4NZCETUQ.js", imports: ["/build/_shared/chunk-ZAQHAU3J.js", "/build/_shared/chunk-Q5ROM35J.js", "/build/_shared/chunk-UOOUQHS5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-PW2J63UE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-L4ZU5YQX.js", imports: ["/build/_shared/chunk-Q5ROM35J.js", "/build/_shared/chunk-MZUHDMO4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index-remix": { id: "routes/index-remix", parentId: "root", path: "index-remix", index: void 0, caseSensitive: void 0, module: "/build/routes/index-remix-5VHJ3LQQ.js", imports: ["/build/_shared/chunk-MZUHDMO4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-QX5J3I3G.js", imports: ["/build/_shared/chunk-TZ6OKVZU.js", "/build/_shared/chunk-MZUHDMO4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-IKRBGHVS.js", imports: ["/build/_shared/chunk-TZ6OKVZU.js", "/build/_shared/chunk-MZUHDMO4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-RPFIZTEJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "2f5dae16", hmr: void 0, url: "/build/manifest-2F5DAE16.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/index-remix": {
    id: "routes/index-remix",
    parentId: "root",
    path: "index-remix",
    index: void 0,
    caseSensitive: void 0,
    module: index_remix_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/demo": {
    id: "routes/demo",
    parentId: "root",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: demo_exports
  },
  "routes/demo/dashboard": {
    id: "routes/demo/dashboard",
    parentId: "routes/demo",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/demo/dashboard/optimizer/optimize": {
    id: "routes/demo/dashboard/optimizer/optimize",
    parentId: "routes/demo/dashboard",
    path: "optimizer/optimize",
    index: void 0,
    caseSensitive: void 0,
    module: optimize_exports
  },
  "routes/demo/dashboard/optimizer/solution": {
    id: "routes/demo/dashboard/optimizer/solution",
    parentId: "routes/demo/dashboard",
    path: "optimizer/solution",
    index: void 0,
    caseSensitive: void 0,
    module: solution_exports
  },
  "routes/demo/dashboard/optimizer/master": {
    id: "routes/demo/dashboard/optimizer/master",
    parentId: "routes/demo/dashboard",
    path: "optimizer/master",
    index: void 0,
    caseSensitive: void 0,
    module: master_exports
  },
  "routes/demo/dashboard/optimizer/input": {
    id: "routes/demo/dashboard/optimizer/input",
    parentId: "routes/demo/dashboard",
    path: "optimizer/input",
    index: void 0,
    caseSensitive: void 0,
    module: input_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
