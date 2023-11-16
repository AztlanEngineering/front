/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import { useApp } from '@aztlan/design-system'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'theme-switcher'

const themes = {
  'dark-theme': 'Dark',
  'light-theme': 'Light',
}

/**
 * This is the component description.
 */
function ThemeSwitcher({
  id,
  className: userClassName,
  style,
  children,
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  const { theme, isTheme, setTheme } = useApp()

  return (
    <div
      id={id}
      className={[baseClassName, componentClassName, userClassName]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <p>
        Current :
        {theme}
      </p>
      <ul className="inline">
        {Object.keys(themes).map((themeName) => (
          <li>
            <a
              onClick={() => setTheme(themeName)}
              className={isTheme(themeName) ? 'bold' : ''}
            >
              {themes[themeName]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

ThemeSwitcher.propTypes = {
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
  children: PropTypes.node,
}

ThemeSwitcher.defaultProps = {
  // someProp:false
}

export default ThemeSwitcher
