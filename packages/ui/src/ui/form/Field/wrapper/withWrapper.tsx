import * as React from 'react'
import Wrapper from './Wrapper.tsx'

type Options<T> = {
  [K in keyof T]?: T[K];
}

/**
 * @description a HOC that wraps a raw field and provides the base form methods to it.
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
  return function (props: any) {
    // const { register } = useFormContext()

    return (
      <Wrapper
        Component={MemoizedComponent}
        {...props}
        {...options}
      />
    )
  }
}

export default withWrapper
