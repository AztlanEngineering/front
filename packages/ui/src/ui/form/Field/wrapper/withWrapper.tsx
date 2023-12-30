import * as React from 'react'
import { useMemo } from 'react'
import Wrapper from './Wrapper.tsx'

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
  options: Options<React.ComponentProps<typeof Wrapper>> = {},
) => {
  const MemoizedComponent = React.memo(Component)
  return function ({
    extensions = [], ...props
  }) {
    // const { register } = useFormContext()
    const ExtendedComponent = useMemo(
      () => extensions
        .reverse()
        .reduce<React.ComponentType<any>>(
        (
          AccumulatedComponent, hoc,
        ) => hoc(AccumulatedComponent),
        MemoizedComponent,
      ),
      [extensions],
    )

    return (
      <Wrapper
        Component={ExtendedComponent}
        {...props}
        {...options}
      />
    )
  }
}

export default withWrapper
