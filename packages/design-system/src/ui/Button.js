"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
// @ts-ignore
const exports_scss_1 = __importDefault(require("@aztlan/bem/exports.scss"));
const react_helpers_1 = require("@aztlan/react-helpers");
// @ts-ignore
import('./button.scss');
const name = react_helpers_1.Example;
/**
 * Primary UI component for user interaction
 */
function Button({ primary, backgroundColor, size, label, ...props }) {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
    return (react_1.default.createElement("button", { type: "button", className: [
            'borders',
            'storybook-button',
            `storybook-button--${size}`,
            mode,
        ].join(' '), style: backgroundColor && { backgroundColor }, ...props },
        "Hello",
        exports_scss_1.default.modifierGhost,
        ' ',
        name,
        label));
}
exports.Button = Button;
Button.propTypes = {
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
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: prop_types_1.default.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: prop_types_1.default.func,
};
Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
