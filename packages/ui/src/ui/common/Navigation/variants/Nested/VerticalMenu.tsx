import * as React from 'react'
import { VerticalMenu } from '../../common/index.js'
import { useNestedNavigationContext } from './hooks/index.js'
import { NestedNavigationVerticalMenuPropTypes } from './types.js'
import type { NestedNavigationVerticalMenuProps } from './types.js'

function NestedNavigationVerticalMenu({
  groupClassName: userClassName,
  ...props
}:NestedNavigationVerticalMenuProps) {
  const {
    // root,
    label,
    currentTree,
    hoverTree,
    // currentItem,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useNestedNavigationContext()

  const mapSubject = hoverTree.length ? hoverTree : currentTree
  const map = []
  map.push(...mapSubject
    .slice(
      0, mapSubject.length,
    )
    .map(({
      items: subitems, parentUrl, ...itemProps
    }) => (
      <VerticalMenu
        key={itemProps?.url}
        items={subitems}
        label={label}
        onItemMouseEnterHandler={onItemMouseEnterHandler}
        {...itemProps}
        {...props}
      />
    )))
  return (
    <div
      onMouseLeave={onMenuMouseLeave}
      className={[
        'group grid',
        userClassName,
      ].filter(Boolean).join(' ')}
    >
      {map}
    </div>
  )
}

NestedNavigationVerticalMenu.propTypes = NestedNavigationVerticalMenuPropTypes

export default NestedNavigationVerticalMenu
