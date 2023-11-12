var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var Page_exports = {};
__export(Page_exports, {
  Page: () => Page
});
module.exports = __toCommonJS(Page_exports);
var import_react = __toESM(require("react"));
var import_Header = require("./Header");
var import_page = require("./page.css");
const Page = () => {
  const [user, setUser] = import_react.default.useState();
  return /* @__PURE__ */ import_react.default.createElement("article", null, /* @__PURE__ */ import_react.default.createElement(
    import_Header.Header,
    {
      user,
      onLogin: () => setUser({ name: "Jane Doe" }),
      onLogout: () => setUser(void 0),
      onCreateAccount: () => setUser({ name: "Jane Doe" })
    }
  ), /* @__PURE__ */ import_react.default.createElement("section", { className: "storybook-page" }, /* @__PURE__ */ import_react.default.createElement("h2", null, "Pages in Storybook"), /* @__PURE__ */ import_react.default.createElement("p", null, "We recommend building UIs with a", " ", /* @__PURE__ */ import_react.default.createElement("a", { href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ import_react.default.createElement("strong", null, "component-driven")), " ", "process starting with atomic components and ending with pages."), /* @__PURE__ */ import_react.default.createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"), /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, 'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'), /* @__PURE__ */ import_react.default.createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")), /* @__PURE__ */ import_react.default.createElement("p", null, "Get a guided tutorial on component-driven development at", " ", /* @__PURE__ */ import_react.default.createElement("a", { href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer" }, "Storybook tutorials"), ". Read more in the", " ", /* @__PURE__ */ import_react.default.createElement("a", { href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, "docs"), "."), /* @__PURE__ */ import_react.default.createElement("div", { className: "tip-wrapper" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "tip" }, "Tip"), " Adjust the width of the canvas with the", " ", /* @__PURE__ */ import_react.default.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react.default.createElement(
    "path",
    {
      d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
      id: "a",
      fill: "#999"
    }
  ))), "Viewports addon in the toolbar")));
};
