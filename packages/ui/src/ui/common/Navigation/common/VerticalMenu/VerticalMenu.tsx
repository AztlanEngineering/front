// REF 15.1: VerticalMenu.tsx Adjusted for Recursion and Original className API
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
  useMemo,
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
  appendItems,
  spaced,
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
    (item, // isRoot = false,
    ) => (
      <li
        key={item.key || item.label}
        className={[
          item.disabled && styleNames.modifierDisabled,
          item.url && (location.pathname === item.url) && styleNames.modifierActive,
          !item.url && item.items && styleNames.elementGroup,
          item.className,
        ].filter(Boolean).join(' ')}
        onMouseLeave={() => onItemMouseLeaveHandler?.(item)}
      >
        {item.Component ? <item.Component item={item} /> : item.url ? (
          <Link
            to={item.url}
            onMouseEnter={() => onItemMouseEnterHandler?.(item)}
          >
            {item.label}
          </Link>
        ) : item.label}
        {item.items && !item.url && (
        <ul className="container">{item.items.map(renderItem)}</ul>
        )}
      </li>
    ), [
      location.pathname,
      onItemMouseEnterHandler,
      onItemMouseLeaveHandler,
    ],
  )

  const {
    items:baseItems,
    ...rootItemWithoutItems
  } = rootItem

  const finalItems = useMemo(
    () => (appendItems ? baseItems.concat(appendItems) : rootItem.items), [
      appendItems,
      rootItem.items,
    ],
  )

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        spaced && styleNames.modifierSpaced,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      <ul>
        {renderItem(rootItemWithoutItems)}
        {finalItems.map(renderItem)}
      </ul>
    </Wrapper>
  )
}

VerticalMenu.propTypes = ComponentPropTypes

export default VerticalMenu
