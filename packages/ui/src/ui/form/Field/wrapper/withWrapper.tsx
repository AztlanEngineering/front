import * as React from 'react'
import { useMemo } from 'react'
import { InferProps } from 'prop-types'
import Wrapper from './Wrapper.tsx'
import * as formPropTypes from '../propTypes.ts'
import withConditionalDisplay, { WithConditionalDisplayProps } from './withConditionalDisplay.ts'

type Options<T> = {
  [K in keyof T]?: T[K];
}

/**
 * A HOC that wraps a raw field and provides the base form methods to it.
 *
 * @param {React.ComponentType<any>} Component - the raw field component
 * @param {Record<string, any>} options - the options object
 * @returns {React.ComponentType<any>} the wrapped field component
 */
const withWrapper = (
  Component: React.ComponentType<any>,
  options: Options<InferProps<typeof formPropTypes.wrapperShared>> = {},
) => {
  const MemoizedComponent = React.memo(Component)

  function WrappedComponent({
    extensions = [],
    condition,
    ...props
  }: InferProps<typeof formPropTypes.baseShared>): React.ReactElement {
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
  return withConditionalDisplay(
    WrappedComponent,
    options.condition as WithConditionalDisplayProps,
  )
}

export default withWrapper
