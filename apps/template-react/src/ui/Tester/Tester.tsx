/* @aztlan/generator-front 0.0.22 */
import * as React from "react";

import { useInsertionEffect } from "react";

import PropTypes from "prop-types";

import styleNames from "@aztlan/bem/exports.scss";

// Local Definitions

const baseClassName = styleNames.base;

const componentClassName = "tester";

/**
 * This is the component description.
 */
function Tester({
  id,
  className: userClassName,
  style,
  children
  // ...otherProps
}) {
  useInsertionEffect(() => {
    import("./styles.scss");
  }, []);

  return (
    <div
      id={id}
      className={[baseClassName, componentClassName, userClassName]
        .filter(e => e)
        .join(" ")}
      style={style}
      // {...otherProps}
    >
      >This is the testeri2
      {children}
    </div>
  );
}

Tester.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node
};

Tester.defaultProps = {
  // someProp:false
};

export default Tester;
