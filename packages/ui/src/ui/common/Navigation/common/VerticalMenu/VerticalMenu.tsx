/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { Link } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import { ComponentPropTypes } from './types.js'
import type { ComponentProps } from './types.js'

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
  extras,
  onItemMouseEnterHandler,
  onItemMouseLeaveHandler,
  ...otherProps
}: ComponentProps): React.ReactElement {
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
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      {label && <span className="container">{label}</span>}
      <ul className="container">
        {items?.map((item) => (
          <li
            key={`${item.label}${item.url || ''}`}
            className={item.disabled ? 'disabled container' : 'container'}
            // onMouseLeave={onItemMouseLeaveHandler?.(item)}
          >
            {item.url && !item.disabled ? (
              <Link
                to={item.url}
                onMouseEnter={onItemMouseEnterHandler?.(item)}
              >
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
      { extras
      && (
      <ul className="container">
        {extras.map((
          extra, i,
        ) => (
          <li
            key={extra.key || i}
            className={extra.disabled ? 'disabled' : ''}
          >
            {extra.Component}
          </li>
        ))}
      </ul>
      )}
    </Wrapper>
  )
}

VerticalMenu.propTypes = ComponentPropTypes

export default VerticalMenu
