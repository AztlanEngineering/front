/* @aztlan/generator-front 0.4.0 */
import * as React from "react";

import { useInsertionEffect } from "react";

import PropTypes from "prop-types";

// @ts-ignore
import styleNames from "@aztlan/bem";

import { useApp } from "../../common/index.ts";

// Local Definitions

const baseClassName = styleNames.base;

const componentClassName = "locale-switcher";

const locales = {
  en: "English",
  es: "Spanish"
};

/**
 * This is the component description.
 */
function LocaleSwitcher({
  id,
  className: userClassName,
  style,
  children
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import("./styles.scss");
  }, []);

  const { locale, isLocale, setLocale } = useApp();

  return (
    <ul
      id={id}
      className={[baseClassName, componentClassName, userClassName, "inline"]
        .filter(e => e)
        .join(" ")}
      style={style}
      // {...otherProps}
    >
      {Object.keys(locales).map(localeName => (
        <li>
          <a
            onClick={() => setLocale(localeName)}
            className={isLocale(localeName) ? "bold" : ""}
          >
            {locales[localeName]}
          </a>
        </li>
      ))}
    </ul>
  );
}

LocaleSwitcher.propTypes = {
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

LocaleSwitcher.defaultProps = {
  // someProp:false
};

export default LocaleSwitcher;
