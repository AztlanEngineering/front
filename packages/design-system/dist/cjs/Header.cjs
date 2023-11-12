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
var Header_exports = {};
__export(Header_exports, {
  Header: () => Header
});
module.exports = __toCommonJS(Header_exports);
var import_react = __toESM(require("react"));
var import_prop_types = __toESM(require("prop-types"));
var import_Button = require("./Button");
var import_header = require("./header.css");
const Header = ({ user, onLogin, onLogout, onCreateAccount }) => /* @__PURE__ */ import_react.default.createElement("header", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "storybook-header" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react.default.createElement(
  "path",
  {
    d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
    fill: "#FFF"
  }
), /* @__PURE__ */ import_react.default.createElement(
  "path",
  {
    d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
    fill: "#555AB9"
  }
), /* @__PURE__ */ import_react.default.createElement(
  "path",
  {
    d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
    fill: "#91BAF8"
  }
))), /* @__PURE__ */ import_react.default.createElement("h1", null, "Acme")), /* @__PURE__ */ import_react.default.createElement("div", null, user ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("span", { className: "welcome" }, "Welcome, ", /* @__PURE__ */ import_react.default.createElement("b", null, user.name), "!"), /* @__PURE__ */ import_react.default.createElement(import_Button.Button, { size: "small", onClick: onLogout, label: "Log out" })) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_Button.Button, { size: "small", onClick: onLogin, label: "Log in" }), /* @__PURE__ */ import_react.default.createElement(import_Button.Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })))));
Header.propTypes = {
  user: import_prop_types.default.shape({
    name: import_prop_types.default.string.isRequired
  }),
  onLogin: import_prop_types.default.func.isRequired,
  onLogout: import_prop_types.default.func.isRequired,
  onCreateAccount: import_prop_types.default.func.isRequired
};
Header.defaultProps = {
  user: null
};
