import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import styles from "@aztlan/bem/exports.scss";
import { Example } from "@aztlan/react-helpers";
const name = Example;
function Button({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: [
        "borders",
        "storybook-button",
        `storybook-button--${size}`,
        mode
      ].join(" "),
      style: backgroundColor && { backgroundColor },
      ...props
    },
    "Hello",
    styles.modifierGhost,
    " ",
    name,
    label
  );
}
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: void 0
};
export {
  Button
};
