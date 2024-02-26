/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import {
  Link, useLocation,
} from 'react-router-dom'
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
  groups,
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
  const location = useLocation()

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
      {groups.map((group) => (
        <ul
          key={group.key || group.label}
          className="container"
        >
          {group.label && <li className="group-label">{group.label}</li>}
          {group.items.map((
            item, index,
          ) => (
            <li
              key={item.key || item.label || index}
              className={[
                item.disabled && styleNames.modifierDisabled,
                location.pathname === item.url && styleNames.modifierSelected,
                'item',
                item.className,
              ].filter(Boolean).join(' ')}
              onMouseEnter={() => onItemMouseEnterHandler?.(item)}
              onMouseLeave={() => onItemMouseLeaveHandler?.(item)}
            >
              {item.Component ? (
                item.Component
              ) : (
                <Link to={item.url}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      ))}
    </Wrapper>
  )
}

VerticalMenu.propTypes = ComponentPropTypes

export default VerticalMenu
