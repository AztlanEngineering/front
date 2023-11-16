"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* @aztlan/generator-front 0.0.22 */
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
// Local Definitions
const baseClassName = 'd1'; // styleNames.base
const componentClassName = 'tester';
// @ts-ignore
import('./styles.scss');
/**
 * This is the component description.
 */
function Tester({ id, className: userClassName, style, children,
// ...otherProps
 }) {
    (0, react_1.useInsertionEffect)(() => { }, []);
    return (React.createElement("div", { id: id, className: [baseClassName, componentClassName, userClassName]
            .filter((e) => e)
            .join(' '), style: style },
        "This is the testedd2",
        children));
}
Tester.propTypes = {
    /**
     * The HTML id for this element
     */
    id: prop_types_1.default.string,
    /**
     * The HTML class names for this element
     */
    className: prop_types_1.default.string,
    /**
     * The React-written, css properties for this element.
     */
    style: prop_types_1.default.objectOf(prop_types_1.default.string),
    /**
     *  The children JSX
     */
    children: prop_types_1.default.node,
};
Tester.defaultProps = {
// someProp:false
};
exports.default = Tester;
