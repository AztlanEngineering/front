/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { Link } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import { VerticalMenuPropTypes } from '../../types.js'
import type { VerticalMenuProps } from '../../types.js'

const baseClassName = styleNames.base
const componentClassName = 'vertical-menu'

/**
 * description
 * @param {InferProps<typeof VerticalMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered VerticalMenu
 */
function VerticalMenu({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  label,
  items,
  desktopOnly = true,
}: VerticalMenuProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        desktopOnly && 'desktop-only',
        'grid work',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {label && <span>{label}</span>}
      <ul className="grid container">
        {items?.map((item) => (
          <li
            key={`${item.label}${item.url || ''}`}
            className={item.disabled ? 'disabled container' : 'container'}
          >
            {item.url && !item.disabled ? (
              <Link to={item.url}>{item.label}</Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

VerticalMenu.propTypes = VerticalMenuPropTypes

export default VerticalMenu
