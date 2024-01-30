var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/modules/common/templates/Base.tsx
function Navigation() {
  return /* @__PURE__ */ React.createElement("ul", { className: "inline" }, routeMap.map(({
    path,
    title: routeTitle
  }) => /* @__PURE__ */ React.createElement("li", { key: path }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, { to: path }, routeTitle))));
}
function Base({
  title,
  wireframe,
  wireframeTitle,
  children
}) {
  const {
    logout,
    isLogoutInFlight
  } = (0, import_ui.useAuth)();
  if (wireframe) {
    return /* @__PURE__ */ React.createElement("main", { className: "grid" }, /* @__PURE__ */ React.createElement("div", { className: "background near span-3 fit-content" }, /* @__PURE__ */ React.createElement("h1", null, wireframeTitle || title), /* @__PURE__ */ React.createElement("a", { onClick: logout }, /* @__PURE__ */ React.createElement("h2", null, "Logout", isLogoutInFlight && "..."))), /* @__PURE__ */ React.createElement("div", { className: "background near span-5 md-start-6 md-span-8 fit-content grid" }, /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement("div", { style: { minHeight: "300px" } }, "WF")));
  }
  return /* @__PURE__ */ React.createElement("main", { className: "grid" }, /* @__PURE__ */ React.createElement("div", { className: "background near span-4 fit-content" }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(import_ui.ThemeSwitcher, null), /* @__PURE__ */ React.createElement(import_ui.LocaleSwitcher, null), /* @__PURE__ */ React.createElement("a", { onClick: logout }, /* @__PURE__ */ React.createElement("h2", null, "Logout", isLogoutInFlight && "..."))), /* @__PURE__ */ React.createElement("div", { className: "background near span-5 md-start-6 md-span-8 fit-content grid container" }, /* @__PURE__ */ React.createElement(Navigation, null), children));
}
var React, PropTypes, import_react_router_dom, import_ui, routeMap, Base_default;
var init_Base = __esm({
  "src/modules/common/templates/Base.tsx"() {
    React = __toESM(require("react"), 1);
    PropTypes = __toESM(require("prop-types"), 1);
    import_react_router_dom = require("react-router-dom");
    import_ui = require("@aztlan/ui");
    routeMap = [
      {
        path: "",
        title: "Homepage"
      },
      {
        path: "maintenance",
        title: "Maintenance"
      },
      {
        path: "login",
        title: "Login"
      },
      {
        path: "profile",
        title: "Profile"
      },
      {
        path: "formtest",
        title: "Form Test"
      },
      {
        path: "404",
        title: "Test 404"
      }
    ];
    Base.propTypes = {
      title: PropTypes.node,
      wireframe: PropTypes.node,
      wireframeTitle: PropTypes.node,
      children: PropTypes.node
    };
    Base_default = Base;
  }
});

// src/modules/common/pages/Status404.tsx
var Status404_exports = {};
__export(Status404_exports, {
  default: () => Status404_default
});
function Status404() {
  const { formatMessage } = (0, import_react_intl.useIntl)();
  return /* @__PURE__ */ React3.createElement(Base_default, { title: "Error 404" }, /* @__PURE__ */ React3.createElement("p", { className: "container" }, formatMessage(m.notFound)));
}
var React3, import_react_intl, m, Status404_default;
var init_Status404 = __esm({
  "src/modules/common/pages/Status404.tsx"() {
    React3 = __toESM(require("react"), 1);
    import_react_intl = require("react-intl");
    init_Base();
    m = (0, import_react_intl.defineMessages)({ notFound: { defaultMessage: "The page you requested is not found." } });
    Status404_default = Status404;
  }
});

// src/modules/common/pages/Maintenance.tsx
var Maintenance_exports = {};
__export(Maintenance_exports, {
  default: () => Maintenance_default
});
function Maintenance() {
  const { formatMessage } = (0, import_react_intl2.useIntl)();
  return /* @__PURE__ */ React4.createElement(Base_default, { title: "Maintenance" }, /* @__PURE__ */ React4.createElement("p", { className: "container" }, formatMessage(m2.notAvailable)));
}
var React4, import_react_intl2, m2, Maintenance_default;
var init_Maintenance = __esm({
  "src/modules/common/pages/Maintenance.tsx"() {
    React4 = __toESM(require("react"), 1);
    import_react_intl2 = require("react-intl");
    init_Base();
    m2 = (0, import_react_intl2.defineMessages)({ notAvailable: { defaultMessage: "This website is currently not available" } });
    Maintenance_default = Maintenance;
  }
});

// src/modules/common/pages/Login.tsx
var Login_exports = {};
__export(Login_exports, {
  default: () => Login_default
});
function Login() {
  const location = (0, import_react_router_dom2.useLocation)();
  let fullHostname;
  if (typeof process === "undefined") {
    const { protocol } = window.location;
    const { hostname } = window.location;
    const { port } = window.location;
    fullHostname = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
  } else {
    fullHostname = "http://test.com";
  }
  const resource = `${fullHostname}${location.state?.from ? location.state.from : DEFAULT_REDIRECT}`;
  const data = (0, import_react_relay.useLazyLoadQuery)(
    import_ui2.LoginButton.QUERY,
    { resource },
    { fetchPolicy: "store-or-network" }
  );
  const { formatMessage } = (0, import_react_intl3.useIntl)();
  return /* @__PURE__ */ React5.createElement(Base_default, { title: formatMessage(m3.title) }, /* @__PURE__ */ React5.createElement("div", { className: "container" }, location.state?.reason && /* @__PURE__ */ React5.createElement("p", null, " ", location.state.reason), /* @__PURE__ */ React5.createElement(React5.Suspense, { fallback: "Loading" }, /* @__PURE__ */ React5.createElement(import_ui2.LoginButton, { data })), /* @__PURE__ */ React5.createElement("p", null, formatMessage(m3.login)), /* @__PURE__ */ React5.createElement("p", null, "After login you will be redirected to", resource)));
}
var React5, import_react_router_dom2, import_react_relay, import_react_intl3, import_ui2, m3, DEFAULT_REDIRECT, Login_default;
var init_Login = __esm({
  "src/modules/common/pages/Login.tsx"() {
    React5 = __toESM(require("react"), 1);
    import_react_router_dom2 = require("react-router-dom");
    import_react_relay = require("react-relay");
    import_react_intl3 = require("react-intl");
    import_ui2 = require("@aztlan/ui");
    init_Base();
    m3 = (0, import_react_intl3.defineMessages)({
      title: {
        // id: `${messagesPrefix}.title`,
        description: "Message to greet the user.",
        defaultMessage: "Login"
      },
      login: {
        description: "Message to greet the user.",
        defaultMessage: "Please click on the button to log in."
      }
    });
    DEFAULT_REDIRECT = "/profile";
    Login_default = Login;
  }
});

// src/modules/common/pages/Profile.tsx
var Profile_exports = {};
__export(Profile_exports, {
  default: () => Profile_default
});
function Profile() {
  return /* @__PURE__ */ React6.createElement(Base_default, { title: "Profile" }, /* @__PURE__ */ React6.createElement("p", { className: "span-8" }, "Welcome to the profile page"), /* @__PURE__ */ React6.createElement(import_ui3.ViewerProfile, null));
}
var React6, import_ui3, Profile_default;
var init_Profile = __esm({
  "src/modules/common/pages/Profile.tsx"() {
    React6 = __toESM(require("react"), 1);
    import_ui3 = require("@aztlan/ui");
    init_Base();
    Profile_default = Profile;
  }
});

// src/modules/base.homepage/ui/QueryTester/QueryTester.tsx
function QueryTester({
  id,
  className: userClassName,
  style,
  children,
  data
  // ...otherProps
}) {
  (0, import_react2.useInsertionEffect)(
    () => {
    },
    []
  );
  const { time } = (0, import_react_relay2.useFragment)(
    FRAGMENT,
    data
  );
  return /* @__PURE__ */ React7.createElement(
    "div",
    {
      id,
      className: [
        "container",
        baseClassName,
        componentClassName,
        userClassName
      ].filter((e) => e).join(" "),
      style
    },
    /* @__PURE__ */ React7.createElement("p", null, "TIME IS", " ", time, children)
  );
}
var React7, import_react2, PropTypes2, import_bem, import_react_relay2, baseClassName, componentClassName, FRAGMENT, QUERY, QueryTester_default;
var init_QueryTester = __esm({
  "src/modules/base.homepage/ui/QueryTester/QueryTester.tsx"() {
    React7 = __toESM(require("react"), 1);
    import_react2 = require("react");
    PropTypes2 = __toESM(require("prop-types"), 1);
    import_bem = __toESM(require("@aztlan/bem"), 1);
    import_react_relay2 = require("react-relay");
    baseClassName = import_bem.default.base;
    componentClassName = "query-tester";
    FRAGMENT = graphql`
  fragment QueryTesterFragment on Query {
    time
  }
`;
    QUERY = graphql`
  query QueryTesterQuery {
    ...QueryTesterFragment
  }
`;
    QueryTester.propTypes = {
      /** The HTML id for this element */
      id: PropTypes2.string,
      /** The HTML class names for this element */
      className: PropTypes2.string,
      /** The React-written, css properties for this element. */
      style: PropTypes2.objectOf(PropTypes2.string),
      /** The children JSX */
      children: PropTypes2.node,
      /** The data for this component */
      /* eslint-disable-next-line react/forbid-prop-types */
      data: PropTypes2.objectOf(PropTypes2.any)
    };
    QueryTester.QUERY = QUERY;
    QueryTester.FRAGMENT = FRAGMENT;
    QueryTester_default = QueryTester;
  }
});

// src/modules/base.homepage/ui/QueryTester/index.ts
var init_QueryTester2 = __esm({
  "src/modules/base.homepage/ui/QueryTester/index.ts"() {
    init_QueryTester();
  }
});

// src/modules/base.homepage/ui/index.ts
var init_ui = __esm({
  "src/modules/base.homepage/ui/index.ts"() {
    init_QueryTester2();
  }
});

// src/modules/base.homepage/pages/Home.tsx
var Home_exports = {};
__export(Home_exports, {
  default: () => Home_default
});
function Home() {
  const data = (0, import_react_relay3.useLazyLoadQuery)(
    QueryTester_default.QUERY,
    {},
    { fetchPolicy: "store-or-network" }
  );
  const { formatMessage } = (0, import_react_intl4.useIntl)();
  return /* @__PURE__ */ React8.createElement(Base_default, { title: formatMessage(m4.title) }, /* @__PURE__ */ React8.createElement(React8.Suspense, { fallback: "Loading" }, /* @__PURE__ */ React8.createElement(QueryTester_default, { data })), /* @__PURE__ */ React8.createElement("p", { className: "container" }, formatMessage(
    m4.welcome,
    { name: "pg3" }
  )));
}
var React8, import_react_relay3, import_react_intl4, m4, Home_default;
var init_Home = __esm({
  "src/modules/base.homepage/pages/Home.tsx"() {
    React8 = __toESM(require("react"), 1);
    import_react_relay3 = require("react-relay");
    import_react_intl4 = require("react-intl");
    init_Base();
    init_ui();
    m4 = (0, import_react_intl4.defineMessages)({
      title: {
        // id: `${messagesPrefix}.title`,
        defaultMessage: "Homepage"
      },
      welcome: {
        description: "Message to greet the user.",
        defaultMessage: "Welcome to the site, {name}!!!"
      }
    });
    Home_default = Home;
  }
});

// src/modules/base.test/pages/FormTest.tsx
var FormTest_exports = {};
__export(FormTest_exports, {
  default: () => FormTest_default
});
function Home2() {
  const { formatMessage } = (0, import_react_intl5.useIntl)();
  return /* @__PURE__ */ React9.createElement(Base_default, { title: formatMessage(m5.title) }, /* @__PURE__ */ React9.createElement("h2", { className: "container" }, "Form Test"), /* @__PURE__ */ React9.createElement(
    import_ui5.SimpleForm,
    {
      className: "container",
      defaultValues: { fruits2: "watermelon" },
      fieldProps: {
        spanLabel: 6,
        spanLabelDesktop: 3,
        spanContent: 8,
        spanContentDesktop: 5
      },
      fields: [
        {
          name: "name",
          label: "Your name",
          autoComplete: "name"
        },
        {
          name: "email",
          label: "Your email",
          autoComplete: "email"
        },
        {
          name: "username",
          label: "Username",
          autoComplete: "email",
          extensions: [
            (0, import_ui5.addGraphQLValidation)(
              import_relay_runtime.graphql`
                  query FormTestValidationQuery($value: String!) {
                    isUsernameAvailable(value: $value)
                  }
                `,
              "isUsernameAvailable",
              {
                invalidError: "This username is already taken",
                fetchError: "There was an error while checking the username availability",
                responseError: "The server didn't return a valid response",
                minLength: 4
              }
            )
          ]
        },
        {
          name: "fruits",
          label: "What's your favorite fruit?",
          autoComplete: "off",
          type: "select",
          /*
          options     :[
            {
              label   :'Apple',
              value   :'apple',
              disabled:false,
            },
            {
              label   :'Banana',
              value   :'banana',
              disabled:false,
            },
            {
              label   :'Orange',
              value   :'orange',
              disabled:false,
            },
            {
              label   :'Pineapple',
              value   :'pineapple',
              disabled:true,
            },
          ], */
          extensions: [
            import_ui5.withErrorHandling,
            (0, import_ui5.addGraphQLOptions)(
              import_relay_runtime.graphql`
                  query FormTestFruitsQuery {
                    fruits {
                      value
                      label
                      disabled
                    }
                  }
                `,
              "fruits"
            ),
            import_ui5.withErrorHandling
          ]
        },
        {
          name: "fruits2",
          label: "What's your favorite fruit?",
          type: "combobox",
          extensions: [
            import_ui5.withErrorHandling,
            (0, import_ui5.addGraphQLOptions)(
              import_relay_runtime.graphql`
                  query FormTestFruits2Query {
                    fruits {
                      value
                      label
                      disabled
                    }
                  }
                `,
              "fruits"
            )
          ]
        }
      ]
    }
  ));
}
var React9, import_react_intl5, import_ui5, import_relay_runtime, m5, FormTest_default;
var init_FormTest = __esm({
  "src/modules/base.test/pages/FormTest.tsx"() {
    React9 = __toESM(require("react"), 1);
    import_react_intl5 = require("react-intl");
    import_ui5 = require("@aztlan/ui");
    import_relay_runtime = require("relay-runtime");
    init_Base();
    m5 = (0, import_react_intl5.defineMessages)({
      title: {
        // id: `${messagesPrefix}.title`,
        defaultMessage: "Homepage"
      },
      welcome: {
        description: "Message to greet the user.",
        defaultMessage: "Welcome to the site, {name}!!!"
      }
    });
    FormTest_default = Home2;
  }
});

// src/locales/es.json
var require_es = __commonJS({
  "src/locales/es.json"(exports2, module2) {
    module2.exports = {
      IEmYNF: [
        {
          type: 0,
          value: "Este sitio web actualmente no est\xE1 disponible"
        }
      ],
      "M/1qd7": [
        {
          type: 0,
          value: "La p\xE1gina que solicitaste no se encuentra."
        }
      ],
      dUEMP6: [
        {
          type: 0,
          value: "\xA1Bienvenido al sitio, "
        },
        {
          type: 1,
          value: "name"
        },
        {
          type: 0,
          value: "!!!"
        }
      ],
      rxNddi: [
        {
          type: 0,
          value: "P\xE1gina principal"
        }
      ]
    };
  }
});

// src/locales/en.json
var require_en = __commonJS({
  "src/locales/en.json"(exports2, module2) {
    module2.exports = {
      IEmYNF: [
        {
          type: 0,
          value: "This website is currently not available"
        }
      ],
      "M/1qd7": [
        {
          type: 0,
          value: "The page you requested is not found."
        }
      ],
      dUEMP6: [
        {
          type: 0,
          value: "Welcome to the site, "
        },
        {
          type: 1,
          value: "name"
        },
        {
          type: 0,
          value: "!!!"
        }
      ],
      rxNddi: [
        {
          type: 0,
          value: "Homepage"
        }
      ]
    };
  }
});

// src/ssr/renderer.ts
var renderer_exports = {};
__export(renderer_exports, {
  default: () => renderer_default
});
module.exports = __toCommonJS(renderer_exports);
var import_react_relay5 = require("@aztlan/react-relay");
var import_react_ssr = require("@aztlan/react-ssr");

// src/ssr/Base.tsx
var React11 = __toESM(require("react"), 1);
var import_react_relay4 = require("react-relay");
var import_react_router_dom3 = require("react-router-dom");
var import_react_helmet_async = require("react-helmet-async");
var import_react_hooks = require("@aztlan/react-hooks");
var import_ui7 = require("@aztlan/ui");
var import_react_intl6 = require("react-intl");

// src/App.tsx
var React10 = __toESM(require("react"), 1);
var import_ui6 = require("@aztlan/ui");

// src/modules/common/utils/loadable.tsx
var import_react = __toESM(require("react"), 1);
var import_component = __toESM(require("@loadable/component"), 1);
init_Base();
function loadable(func) {
  return (0, import_component.default)(
    func,
    {
      fallback: /* @__PURE__ */ import_react.default.createElement(
        Base_default,
        {
          wireframe: true,
          wireframeTitle: "Loading"
        }
      )
    }
  );
}

// src/modules/common/routes.ts
var routes_default = [
  {
    path: "/404",
    component: loadable(() => Promise.resolve().then(() => (init_Status404(), Status404_exports))),
    exact: true
  },
  {
    path: "/maintenance",
    component: loadable(() => Promise.resolve().then(() => (init_Maintenance(), Maintenance_exports))),
    exact: true
  },
  {
    path: "/login",
    component: loadable(() => Promise.resolve().then(() => (init_Login(), Login_exports))),
    exact: true
  },
  {
    path: "/profile",
    component: loadable(() => Promise.resolve().then(() => (init_Profile(), Profile_exports))),
    exact: true,
    isPrivate: true
  }
];

// src/modules/base.homepage/routes.ts
var routes_default2 = [
  /*
  {
    path:[
      MODULE_URLS.LIST,
      MODULE_URLS.LIST_PAGINATED,
      MODULE_URLS.LIST_CATEGORY,
      MODULE_URLS.LIST_CATEGORY_PAGINATED,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.blog` * './pages/List')),
    exact    :true,
  }, */
  {
    path: "/",
    component: loadable(() => Promise.resolve().then(() => (init_Home(), Home_exports))),
    exact: true
  }
];

// src/modules/base.test/routes.ts
var routes_default3 = [
  /*
  {
    path:[
      MODULE_URLS.LIST,
      MODULE_URLS.LIST_PAGINATED,
      MODULE_URLS.LIST_CATEGORY,
      MODULE_URLS.LIST_CATEGORY_PAGINATED,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.blog` * './pages/List')),
    exact    :true,
  }, */
  {
    path: "/formtest",
    component: loadable(() => Promise.resolve().then(() => (init_FormTest(), FormTest_exports))),
    exact: true
  }
];

// src/modules/routes.ts
var routes_default4 = [
  ...routes_default2,
  ...routes_default3,
  ...routes_default
];

// src/App.tsx
init_Status404();
init_Base();
function Wireframe({
  wireframeTitle
  // groups,
  // testFunction,
  // wireframeTitle,
  // ...routeProps,
}) {
  return /* @__PURE__ */ React10.createElement(
    Base_default,
    {
      title: wireframeTitle || "Loading",
      wireframe: true
    },
    "Loading user"
  );
}
function App() {
  const { theme } = (0, import_ui6.useApp)();
  return /* @__PURE__ */ React10.createElement(import_ui6.AuthContextProvider, null, /* @__PURE__ */ React10.createElement("main", { className: `${theme || ""} background far` }, /* @__PURE__ */ React10.createElement(
    import_ui6.SwitchRoutes,
    {
      items: routes_default4,
      NotFoundPage: Status404_default,
      Wireframe
    }
  )));
}
var App_default = App;

// src/locales/loadMessages.ts
function loadMessages(locale) {
  switch (locale) {
    case "es":
      return Promise.resolve().then(() => __toESM(require_es(), 1));
    default:
      return Promise.resolve().then(() => __toESM(require_en(), 1));
  }
}

// src/config.ts
var config = {
  /*
  maintenance:{
    start:new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000),
    end:new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
  }, */
};
var config_default = config;

// src/ssr/Base.tsx
function Base_default2({
  environment,
  routerContext,
  location,
  helmetContext,
  locale,
  messages
}) {
  const {
    locale: locale2,
    messages: messages2,
    ...useLocaleProps
  } = (0, import_react_hooks.useLocale)(
    "es",
    loadMessages
  );
  return /* @__PURE__ */ React11.createElement(import_react_helmet_async.HelmetProvider, { context: helmetContext }, /* @__PURE__ */ React11.createElement(import_react_relay4.RelayEnvironmentProvider, { environment }, /* @__PURE__ */ React11.createElement(
    import_react_router_dom3.StaticRouter,
    {
      location,
      context: routerContext
    },
    /* @__PURE__ */ React11.createElement(
      import_react_intl6.IntlProvider,
      {
        locale,
        messages
      },
      /* @__PURE__ */ React11.createElement(import_react_helmet_async.HelmetProvider, null, /* @__PURE__ */ React11.createElement(
        import_ui7.AppContextProvider,
        {
          value: {
            locale,
            ...useLocaleProps
          },
          maintenance: config_default.maintenance
        },
        /* @__PURE__ */ React11.createElement(App_default, null)
      ))
    )
  )), ",");
}

// src/assets/html/index.html
var html_default = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <!--\n    <style>\n      html {\n        --loader-bg: var(--main);\n      }\n\n      @keyframes hide-loader {\n        0% {\n          opacity: 1;\n        }\n        99% {\n          opacity: 0;\n          z-index: 99;\n        }\n        100% {\n          z-index: -99;\n        }\n      }\n\n      #loader {\n        height: 100%;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 99;\n        background: var(--loader-bg);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      #loader-icon {\n        max-height: 5em;\n      }\n\n      #loader.loaded {\n        opacity: 0;\n        animation: hide-loader 0.2s linear 1 forwards;\n      }\n    </style>-->\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="icon" href="/favicon-light.svg" data-rh="true" />\n    <title></title>\n  </head>\n  <body>\n    <!--\n    <div id="loader">\n      Loading\n    </div>\n    -->\n    <div id="main"></div>\n  </body>\n</html>\n';

// public/loadable-stats.json
var loadable_stats_default = {
  hash: "84f359dfad3d4593fd19",
  publicPath: "/",
  outputPath: "/home/adrian/code/aztlan/front/apps/template-react/public",
  assetsByChunkName: {
    main: [
      "main.css",
      "main.js?8567c"
    ],
    common: [
      "common.js?6a436"
    ],
    "base.homepage": [
      "base.homepage.js?e194b"
    ],
    "index.js": [
      "index.js.js?b7714"
    ],
    "tslib.es6.mjs": [
      "tslib.es6.mjs.js?7d86b"
    ],
    "index.esm.mjs": [
      "index.esm.mjs.js?e8698"
    ],
    "loadable.esm.mjs": [
      "loadable.esm.mjs.js?d2135"
    ],
    "exports.module.scss|0|||}}": [
      "exports.module.scss|0|||}}.css"
    ],
    "RelayResponseNormalizer.js": [
      "RelayResponseNormalizer.js.js?63ba6"
    ],
    "RelayReader.js": [
      "RelayReader.js.js?376af"
    ],
    "RelayModernStore.js": [
      "RelayModernStore.js.js?49319"
    ],
    "RelayModernRecord.js": [
      "RelayModernRecord.js.js?83486"
    ],
    "OperationExecutor.js": [
      "OperationExecutor.js.js?190f3"
    ],
    "DataChecker.js": [
      "DataChecker.js.js?c4ae8"
    ],
    "react-router.js": [
      "react-router.js.js?ac80a"
    ],
    "FragmentResource.js": [
      "FragmentResource.js.js?28376"
    ],
    "ReactRelayPaginationContainer.js": [
      "ReactRelayPaginationContainer.js.js?f52f4"
    ],
    "index.esm.js": [
      "index.esm.js.js?51780"
    ],
    "react-dom.production.min.js": [
      "react-dom.production.min.js.js?bee8e"
    ],
    "history.js": [
      "history.js.js?efe86"
    ],
    "downshift.esm.js": [
      "downshift.esm.js.js?de1b4"
    ],
    "parser.js": [
      "parser.js.js?d2108"
    ]
  },
  assets: [
    {
      type: "asset",
      name: "main.js?8567c",
      size: 306673,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "8567c",
        javascriptModule: false,
        minimized: true,
        related: {
          license: "main.js.LICENSE.txt",
          sourceMap: "main.js.map?8567c"
        }
      },
      chunkNames: [
        "main"
      ],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 2,
      chunks: [
        179
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "react-dom.production.min.js.js?bee8e",
      size: 129185,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "bee8e",
        javascriptModule: false,
        minimized: true,
        related: {
          license: "react-dom.production.min.js.js.LICENSE.txt",
          sourceMap: "react-dom.production.min.js.js.map?bee8e"
        }
      },
      chunkNames: [
        "react-dom.production.min.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 2,
      chunks: [
        417
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.book.italic.ttf",
      size: 48612,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.book.italic.ttf"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.bold.italic.ttf",
      size: 47736,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.bold.italic.ttf"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.book.ttf",
      size: 46264,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.book.ttf"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.bold.ttf",
      size: 45048,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.bold.ttf"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "s.italic.ttf",
      size: 43692,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/s.italic.ttf"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "s.regular.ttf",
      size: 35772,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/s.regular.ttf"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "index.esm.mjs.js?e8698",
      size: 22789,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "e8698",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "index.esm.mjs.js.map?e8698"
        }
      },
      chunkNames: [
        "index.esm.mjs"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        988
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.book.italic.woff",
      size: 21984,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.book.italic.woff"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.bold.italic.woff",
      size: 21788,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.bold.italic.woff"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.book.woff",
      size: 20984,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.book.woff"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.bold.woff",
      size: 20696,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.bold.woff"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "main.css",
      size: 19968,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        related: {
          sourceMap: "main.css.map"
        }
      },
      chunkNames: [
        "main"
      ],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        179
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "s.italic.woff",
      size: 19924,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/s.italic.woff"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "OperationExecutor.js.js?190f3",
      size: 18951,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "190f3",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "OperationExecutor.js.js.map?190f3"
        }
      },
      chunkNames: [
        "OperationExecutor.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        342
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "downshift.esm.js.js?de1b4",
      size: 18727,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "de1b4",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "downshift.esm.js.js.map?de1b4"
        }
      },
      chunkNames: [
        "downshift.esm.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        579
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "index.js.js?b7714",
      size: 17752,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "b7714",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "index.js.js.map?b7714"
        }
      },
      chunkNames: [
        "index.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        976
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "s.regular.woff",
      size: 17176,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/s.regular.woff"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "parser.js.js?d2108",
      size: 16751,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "d2108",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "parser.js.js.map?d2108"
        }
      },
      chunkNames: [
        "parser.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        226
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "s.italic.woff2",
      size: 15364,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/s.italic.woff2"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.book.italic.woff2",
      size: 14904,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.book.italic.woff2"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.bold.italic.woff2",
      size: 14744,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.bold.italic.woff2"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.book.woff2",
      size: 14328,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.book.woff2"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "RelayReader.js.js?376af",
      size: 14308,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "376af",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "RelayReader.js.js.map?376af"
        }
      },
      chunkNames: [
        "RelayReader.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        101
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "m.bold.woff2",
      size: 14048,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/m.bold.woff2"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "s.regular.woff2",
      size: 13516,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        copied: true,
        sourceFilename: "../../packages/assets/fonts/s.regular.woff2"
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "FragmentResource.js.js?28376",
      size: 9441,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "28376",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "FragmentResource.js.js.map?28376"
        }
      },
      chunkNames: [
        "FragmentResource.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        37
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "history.js.js?efe86",
      size: 8604,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "efe86",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "history.js.js.map?efe86"
        }
      },
      chunkNames: [
        "history.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        319
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "RelayModernStore.js.js?49319",
      size: 8221,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "49319",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "RelayModernStore.js.js.map?49319"
        }
      },
      chunkNames: [
        "RelayModernStore.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        577
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "RelayResponseNormalizer.js.js?63ba6",
      size: 8124,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "63ba6",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "RelayResponseNormalizer.js.js.map?63ba6"
        }
      },
      chunkNames: [
        "RelayResponseNormalizer.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        54
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "ReactRelayPaginationContainer.js.js?f52f4",
      size: 8053,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "f52f4",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "ReactRelayPaginationContainer.js.js.map?f52f4"
        }
      },
      chunkNames: [
        "ReactRelayPaginationContainer.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        394
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "index.esm.js.js?51780",
      size: 7899,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "51780",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "index.esm.js.js.map?51780"
        }
      },
      chunkNames: [
        "index.esm.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        567
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "DataChecker.js.js?c4ae8",
      size: 7229,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "c4ae8",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "DataChecker.js.js.map?c4ae8"
        }
      },
      chunkNames: [
        "DataChecker.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        586
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "base.homepage.js?e194b",
      size: 6887,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "e194b",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "base.homepage.js.map?e194b"
        }
      },
      chunkNames: [
        "base.homepage"
      ],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        300
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "loadable.esm.mjs.js?d2135",
      size: 5639,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "d2135",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "loadable.esm.mjs.js.map?d2135"
        }
      },
      chunkNames: [
        "loadable.esm.mjs"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        727
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "react-router.js.js?ac80a",
      size: 5417,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "ac80a",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "react-router.js.js.map?ac80a"
        }
      },
      chunkNames: [
        "react-router.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        88
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "RelayModernRecord.js.js?83486",
      size: 3554,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "83486",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "RelayModernRecord.js.js.map?83486"
        }
      },
      chunkNames: [
        "RelayModernRecord.js"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        134
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "common.js?6a436",
      size: 1803,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "6a436",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "common.js.map?6a436"
        }
      },
      chunkNames: [
        "common"
      ],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        592
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "index.html",
      size: 1583,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "tslib.es6.mjs.js?7d86b",
      size: 1476,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "7d86b",
        javascriptModule: false,
        minimized: true,
        related: {
          sourceMap: "tslib.es6.mjs.js.map?7d86b"
        }
      },
      chunkNames: [
        "tslib.es6.mjs"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        670
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "563.js?e1a4d",
      size: 447,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "e1a4d",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        563
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "790.js?d41f9",
      size: 421,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "d41f9",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        790
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "583.css",
      size: 253,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        related: {
          sourceMap: "583.css.map"
        }
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        583
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "182.css",
      size: 128,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        related: {
          sourceMap: "182.css.map"
        }
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        182
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "112.js?ee57e",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "ee57e",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        112
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "182.js?462e2",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "462e2",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        182
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "214.js?53b1b",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "53b1b",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        214
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "320.js?9e6a3",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "9e6a3",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        320
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "353.js?c7507",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "c7507",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        353
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "402.js?a7421",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "a7421",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        402
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "485.js?b9e1d",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "b9e1d",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        485
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "583.js?b172d",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "b172d",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        583
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "851.js?49b0c",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "49b0c",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        851
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "852.js?0ca5b",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "0ca5b",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        852
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "862.js?2ef9f",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "2ef9f",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        862
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "939.js?5e630",
      size: 122,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "5e630",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        939
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "18.js?946ad",
      size: 121,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "946ad",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        18
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "63.js?bacdd",
      size: 121,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        immutable: true,
        chunkhash: "bacdd",
        javascriptModule: false,
        minimized: true
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        63
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "214.css",
      size: 82,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        related: {
          sourceMap: "214.css.map"
        }
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        214
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "862.css",
      size: 65,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        related: {
          sourceMap: "862.css.map"
        }
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        862
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "402.css",
      size: 62,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {
        related: {
          sourceMap: "402.css.map"
        }
      },
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      filteredRelated: 1,
      chunks: [
        402
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "112.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        112
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "18.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        18
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "320.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        320
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "353.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        353
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "485.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        485
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "63.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        63
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "851.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        851
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "852.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        852
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "939.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [],
      chunkIdHints: [],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        939
      ],
      auxiliaryChunks: []
    },
    {
      type: "asset",
      name: "exports.module.scss|0|||}}.css",
      size: 1,
      emitted: false,
      comparedForEmit: false,
      cached: true,
      info: {},
      chunkNames: [
        "exports.module.scss|0|||}}"
      ],
      chunkIdHints: [
        "vendors"
      ],
      auxiliaryChunkNames: [],
      auxiliaryChunkIdHints: [],
      chunks: [
        429
      ],
      auxiliaryChunks: []
    }
  ],
  namedChunkGroups: {
    main: {
      name: "main",
      chunks: [
        976,
        670,
        988,
        727,
        429,
        54,
        101,
        577,
        134,
        342,
        586,
        88,
        37,
        394,
        567,
        417,
        319,
        579,
        226,
        179
      ],
      assets: [
        {
          name: "index.js.js?b7714"
        },
        {
          name: "tslib.es6.mjs.js?7d86b"
        },
        {
          name: "index.esm.mjs.js?e8698"
        },
        {
          name: "loadable.esm.mjs.js?d2135"
        },
        {
          name: "exports.module.scss|0|||}}.css"
        },
        {
          name: "RelayResponseNormalizer.js.js?63ba6"
        },
        {
          name: "RelayReader.js.js?376af"
        },
        {
          name: "RelayModernStore.js.js?49319"
        },
        {
          name: "RelayModernRecord.js.js?83486"
        },
        {
          name: "OperationExecutor.js.js?190f3"
        },
        {
          name: "DataChecker.js.js?c4ae8"
        },
        {
          name: "react-router.js.js?ac80a"
        },
        {
          name: "FragmentResource.js.js?28376"
        },
        {
          name: "ReactRelayPaginationContainer.js.js?f52f4"
        },
        {
          name: "index.esm.js.js?51780"
        },
        {
          name: "react-dom.production.min.js.js?bee8e"
        },
        {
          name: "history.js.js?efe86"
        },
        {
          name: "downshift.esm.js.js?de1b4"
        },
        {
          name: "parser.js.js?d2108"
        },
        {
          name: "main.css"
        },
        {
          name: "main.js?8567c"
        }
      ],
      filteredAssets: 0,
      assetsSize: null,
      filteredAuxiliaryAssets: 20,
      auxiliaryAssetsSize: null,
      children: {
        prefetch: [
          {
            name: null,
            chunks: [
              790
            ],
            assets: [
              {
                name: "790.js?d41f9"
              }
            ],
            filteredAssets: 0,
            filteredAuxiliaryAssets: 0
          },
          {
            name: null,
            chunks: [
              563
            ],
            assets: [
              {
                name: "563.js?e1a4d"
              }
            ],
            filteredAssets: 0,
            filteredAuxiliaryAssets: 0
          }
        ]
      },
      childAssets: {
        prefetch: [
          "790.js?d41f9",
          "563.js?e1a4d"
        ]
      }
    },
    common: {
      name: "common",
      chunks: [
        592
      ],
      assets: [
        {
          name: "common.js?6a436"
        }
      ],
      filteredAssets: 0,
      assetsSize: null,
      filteredAuxiliaryAssets: 1,
      auxiliaryAssetsSize: null,
      children: {},
      childAssets: {}
    },
    "base.homepage": {
      name: "base.homepage",
      chunks: [
        300
      ],
      assets: [
        {
          name: "base.homepage.js?e194b"
        }
      ],
      filteredAssets: 0,
      assetsSize: null,
      filteredAuxiliaryAssets: 1,
      auxiliaryAssetsSize: null,
      children: {},
      childAssets: {}
    }
  },
  generator: "loadable-components",
  chunks: [
    {
      id: 179,
      files: [
        "main.css",
        "main.js?8567c"
      ]
    },
    {
      id: 852,
      files: [
        "852.css",
        "852.js?0ca5b"
      ]
    },
    {
      id: 485,
      files: [
        "485.css",
        "485.js?b9e1d"
      ]
    },
    {
      id: 939,
      files: [
        "939.css",
        "939.js?5e630"
      ]
    },
    {
      id: 320,
      files: [
        "320.css",
        "320.js?9e6a3"
      ]
    },
    {
      id: 18,
      files: [
        "18.css",
        "18.js?946ad"
      ]
    },
    {
      id: 402,
      files: [
        "402.css",
        "402.js?a7421"
      ]
    },
    {
      id: 182,
      files: [
        "182.css",
        "182.js?462e2"
      ]
    },
    {
      id: 862,
      files: [
        "862.css",
        "862.js?2ef9f"
      ]
    },
    {
      id: 63,
      files: [
        "63.css",
        "63.js?bacdd"
      ]
    },
    {
      id: 583,
      files: [
        "583.css",
        "583.js?b172d"
      ]
    },
    {
      id: 112,
      files: [
        "112.css",
        "112.js?ee57e"
      ]
    },
    {
      id: 214,
      files: [
        "214.css",
        "214.js?53b1b"
      ]
    },
    {
      id: 353,
      files: [
        "353.css",
        "353.js?c7507"
      ]
    },
    {
      id: 592,
      files: [
        "common.js?6a436"
      ]
    },
    {
      id: 300,
      files: [
        "base.homepage.js?e194b"
      ]
    },
    {
      id: 563,
      files: [
        "563.js?e1a4d"
      ]
    },
    {
      id: 790,
      files: [
        "790.js?d41f9"
      ]
    },
    {
      id: 851,
      files: [
        "851.css",
        "851.js?49b0c"
      ]
    },
    {
      id: 976,
      files: [
        "index.js.js?b7714"
      ]
    },
    {
      id: 670,
      files: [
        "tslib.es6.mjs.js?7d86b"
      ]
    },
    {
      id: 988,
      files: [
        "index.esm.mjs.js?e8698"
      ]
    },
    {
      id: 727,
      files: [
        "loadable.esm.mjs.js?d2135"
      ]
    },
    {
      id: 429,
      files: [
        "exports.module.scss|0|||}}.css"
      ]
    },
    {
      id: 54,
      files: [
        "RelayResponseNormalizer.js.js?63ba6"
      ]
    },
    {
      id: 101,
      files: [
        "RelayReader.js.js?376af"
      ]
    },
    {
      id: 577,
      files: [
        "RelayModernStore.js.js?49319"
      ]
    },
    {
      id: 134,
      files: [
        "RelayModernRecord.js.js?83486"
      ]
    },
    {
      id: 342,
      files: [
        "OperationExecutor.js.js?190f3"
      ]
    },
    {
      id: 586,
      files: [
        "DataChecker.js.js?c4ae8"
      ]
    },
    {
      id: 88,
      files: [
        "react-router.js.js?ac80a"
      ]
    },
    {
      id: 37,
      files: [
        "FragmentResource.js.js?28376"
      ]
    },
    {
      id: 394,
      files: [
        "ReactRelayPaginationContainer.js.js?f52f4"
      ]
    },
    {
      id: 567,
      files: [
        "index.esm.js.js?51780"
      ]
    },
    {
      id: 417,
      files: [
        "react-dom.production.min.js.js?bee8e"
      ]
    },
    {
      id: 319,
      files: [
        "history.js.js?efe86"
      ]
    },
    {
      id: 579,
      files: [
        "downshift.esm.js.js?de1b4"
      ]
    },
    {
      id: 226,
      files: [
        "parser.js.js?d2108"
      ]
    }
  ]
};

// src/ssr/renderer.ts
var renderer = new import_react_ssr.JSXRenderer(
  Base_default2,
  html_default,
  loadable_stats_default,
  {
    getServerEnvironment: import_react_relay5.getServerEnvironment,
    defaultLocale: "en",
    loadMessages
  }
);
var renderer_default = renderer.render;
