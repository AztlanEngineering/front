import * as React from 'react'
import Wrapper from './Wrapper.tsx'
// import { useFormContext } from 'react-hook-form'

/**
 * @description a HOC that wraps a raw field and provides the base form methods to it.
 *
 * @param {React.ComponentType<any>} Component - the raw field component
 * @param {Record<string, any>} options - the options object
 * @returns {React.ComponentType<any>} the wrapped field component
 */
const withWrapper = (
  Component: React.ComponentType<any>,
  options: Record<string, any> = {},
) =>
  // const { name } = options
  function (props: any) {
    // const { register } = useFormContext()

    return (
      <Wrapper
        Component={Component}
        {...props}
      />
    )
  }

export default withWrapper
