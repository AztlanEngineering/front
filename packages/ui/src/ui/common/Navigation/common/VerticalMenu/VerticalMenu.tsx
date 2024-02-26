// REF 15.1: VerticalMenu.tsx Adjusted for Recursion and Original className API
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'
import {
  Link, useLocation,
} from 'react-router-dom'
import styleNames from '@aztlan/bem'
import { ComponentPropTypes } from './types.js' // Keep original import
import type { ComponentProps } from './types.js' // Keep original import for TypeScript types

const baseClassName = styleNames.base
const componentClassName = 'vertical-menu'

function VerticalMenu({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  rootItem,
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

  const renderItem = useCallback(
    (item) => (
      <li
        key={item.key || item.label}
        className={[
          item.disabled && styleNames.modifierDisabled,
          item.url && (location.pathname === item.url) && styleNames.modifierActive,
          item.displayItemsAs === 'group' && styleNames.elementGroup,
          item.className,
        ].filter(Boolean).join(' ')}
        onMouseEnter={() => onItemMouseEnterHandler?.(item)}
        onMouseLeave={() => onItemMouseLeaveHandler?.(item)}
      >
        {item.Component ? item.Component : item.url ? <Link to={item.url}>{item.label}</Link> : item.label}
        {item.items && item.displayItemsAs === 'group' && (
          <ul>{item.items.map(renderItem)}</ul>
        )}
      </li>
    ), [
      onItemMouseEnterHandler,
      onItemMouseLeaveHandler,
      location.pathname,
    ],
  )

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      {rootItem.label && <span>{rootItem.label}</span>}
      <ul>{rootItem.items.map(renderItem)}</ul>
    </Wrapper>
  )
}

VerticalMenu.propTypes = ComponentPropTypes

export default VerticalMenu
