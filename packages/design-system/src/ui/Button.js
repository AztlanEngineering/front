"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
require("./button.scss");
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var primary = _a.primary, backgroundColor = _a.backgroundColor, size = _a.size, label = _a.label, props = __rest(_a, ["primary", "backgroundColor", "size", "label"]);
    var mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (<button type="button" className={[
            "borders",
            "storybook-button",
            "storybook-button--".concat(size),
            mode,
        ].join(" ")} style={backgroundColor && { backgroundColor: backgroundColor }} {...props}>
      Hello
      {label}
    </button>);
};
exports.Button = Button;
exports.Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: prop_types_1.default.bool,
    /**
     * What background color to use
     */
    backgroundColor: prop_types_1.default.string,
    /**
     * How large should the button be?
     */
    size: prop_types_1.default.oneOf(["small", "medium", "large"]),
    /**
     * Button contents
     */
    label: prop_types_1.default.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: prop_types_1.default.func,
};
exports.Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: "medium",
    onClick: undefined,
};
