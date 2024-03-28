import * as React from 'react'
import styleNames from '@aztlan/bem'

import { NestedNavigationCanvasPropTypes } from './types.js'
import type { NestedNavigationCanvasProps } from './types.js'
import VerticalMenu from './VerticalMenu.js'

const baseClassName = styleNames.base
const componentCanvasClassName = 'canvas'

function NestedNavigationCanvas({
  id,
  className: userClassName,
  style,
  children,
  desktopVerticalMenuGroupSpan = 9,
  desktopVerticalMenuSingleSpan = 3,
  verticalMenuProps,
}:NestedNavigationCanvasProps) {
  /*
  const {
    root,
    // currentIndex,
    //label,
    currentTree,
    hoverTree,
    // maxDepth,
    // selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)
   */

  return (
    <div className="main-row container grid">
      <VerticalMenu
        groupClassName={`
      md-span-${desktopVerticalMenuGroupSpan}`}
        className={[
          `md-span-${desktopVerticalMenuSingleSpan}`,
          'background near',
        ]
          .filter(Boolean)
          .join(' ')}
        {...verticalMenuProps}
      />
      <div
        id={id}
        style={style}
        className={[
          'grid',
          baseClassName,
          componentCanvasClassName,
          userClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    </div>
  )
}

NestedNavigationCanvas.propTypes = NestedNavigationCanvasPropTypes

export default NestedNavigationCanvas
