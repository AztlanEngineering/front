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
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(Button_exports);
var import_react = __toESM(require("react"));
var import_prop_types = __toESM(require("prop-types"));
var import_button = require("./button.css");
const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
      style: backgroundColor && { backgroundColor },
      ...props
    },
    label
  );
};
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: import_prop_types.default.bool,
  /**
   * What background color to use
   */
  backgroundColor: import_prop_types.default.string,
  /**
   * How large should the button be?
   */
  size: import_prop_types.default.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: import_prop_types.default.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: import_prop_types.default.func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: void 0
};
