/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { useApplicationContext } from '../../common/index.js'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'theme-switcher'

const themes = {
  'dark-theme' :'Dark',
  'light-theme':'Light',
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
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    theme, isTheme, setTheme,
  } = useApplicationContext()

  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'inline',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <li>
        <p>{theme}</p>
      </li>
      {Object.keys(themes).map((themeName) => (
        <li key={themeName}>
          <a
            onClick={() => setTheme(themeName)}
            className={isTheme(themeName) ? 'bold' : ''}
          >
            {themes[themeName]}
          </a>
        </li>
      ))}
    </ul>
  )
}

ThemeSwitcher.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

export default ThemeSwitcher
