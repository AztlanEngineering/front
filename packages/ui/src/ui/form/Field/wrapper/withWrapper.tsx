import * as React from 'react'
import { useMemo } from 'react'
import DefaultWrapper from './Wrapper.js'
import type { FieldProps } from '../types.js'
import type { TWrapperProps } from './types.js'
import withConditionalDisplay from './withConditionalDisplay.js'

/**
 * A HOC that wraps a raw field and provides the base form methods to it.
 *
 * @param {React.ComponentType<any>} Component - the raw field component
 * @param {Record<string, any>} options - the options object
 * @returns {React.ComponentType<any>} the wrapped field component
 */
const withWrapper = (
  Component: React.ComponentType<any>,
  options?: TWrapperProps, // TODO check consistency with withConditionalDisplay
  Wrapper: React.ComponentType<any> = DefaultWrapper,
) => {
  const MemoizedComponent = React.memo(Component)

  function WrappedComponent({
    extensions = [],
    ...props
  }: FieldProps): React.ReactElement {
    const ExtendedComponent = useMemo(
      () => extensions
        .reverse()
        .reduce<React.ComponentType<any>>(
        (
          AccumulatedComponent, hoc,
        ) => hoc(AccumulatedComponent),
        MemoizedComponent,
      ),
      [
        extensions,
        MemoizedComponent,
      ],
    )

    return (
      <Wrapper
        Component={ExtendedComponent}
        {...props}
        {...options}
      />
    )
  }
  return withConditionalDisplay(WrappedComponent)
}

export default withWrapper
