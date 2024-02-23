import * as React from 'react'
import { Header } from '../../common/index.js'
import { useNestedNavigationContext } from './hooks/index.js'
import { NestedNavigationHeaderPropTypes } from './types.js'
import type { NestedNavigationHeaderProps } from './types.js'

function NestedNavigationHeader({
  children,
  ...props
}: NestedNavigationHeaderProps) {
  const {
    // previous = 'Previous',
    // title,
    focusParent,
    currentDepth,
    fixed,
  } = useNestedNavigationContext()

  return (
    <Header
      fixed={fixed}
      left={
        currentDepth !== Number(0) ? (
          <button
            onClick={focusParent}
            type="button"
          >
            previous
          </button>
        ) : null
      }
      {...props}
    >
      {JSON.stringify(currentDepth)}
      {children}
    </Header>
  )
}

NestedNavigationHeader.propTypes = NestedNavigationHeaderPropTypes

export default NestedNavigationHeader
