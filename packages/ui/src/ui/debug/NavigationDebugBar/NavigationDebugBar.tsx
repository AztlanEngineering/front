/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import { withDebug } from '@aztlan/react-hooks'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'navigation-debug-bar'

/**
 * Ensure debug=1 in localstorage or url params
 * @param {InferProps<typeof NavigationDebugBar.propTypes>} props -
 * @returns {React.ReactElement} - Rendered NavigationDebugBar
 */
function NavigationDebugBar({
  id,
  className: userClassName,
  style,
  items,
}: // ...otherProps

InferProps<typeof NavigationDebugBar.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <nav
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
        'in-progress',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <ul className="inline">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavigationDebugBar.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** Items of the mock nav */
  items:PropTypes.arrayOf(PropTypes.shape({
    label:PropTypes.string,
    path :PropTypes.string,
  })),
}

export default withDebug(NavigationDebugBar)
