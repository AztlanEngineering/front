import * as React from 'react'
import { useMemo } from 'react'
import {
  useFormikContext, FormikHelpers,
} from 'formik'
import { useCurrentUnixTime } from '@aztlan/react-helpers'
import Wrapper from './Wrapper.tsx'

const areEqual = (
  prevProps, nextProps,
) => {
  if (prevProps.value !== nextProps.value) {
    return false
  }
  if (prevProps.meta !== nextProps.meta) {
    return false
  }
  if (prevProps.loading !== nextProps.loading) {
    return false
  }
  return true // Props are equal, no need to rerender
}

type WithWrapperOptions = { [key: string]: any }

/*
type Extension = (
  Component: React.ComponentType<any>
) => React.ComponentType<any>
type WithWrapperOptions = {}
   */

/**
 * This wrapper does three things :
 * - Wraps the given component with additional functionalities provided by extensions.
 * - Conditionally renders the component based on the condition prop.
 * - Memoizes the component to avoid unnecessary re-renders.
 * @param Component - The component to be wrapped.
 * @param options - Configuration options for the wrapper.
 * @returns A new component with the applied extensions and wrapping behavior.
 */
const withWrapper = (
  Component: React.ComponentType<any>,
  options: WithWrapperOptions = {},
) => {
  // It is crucial that the memorization happens here.
  // Providing a wrapper in the HOC will cause the component to be re-rendered
  const WrappedComponent = React.memo(
    Component, areEqual,
  )

  return function ({
    condition, extensions = [], ...props
  }) {
    const { values } = useFormikContext()

    if (condition && !condition(values)) {
      return null
    }

    // Again, it is crucial that the memorization happens here.
    // Without it, the component will be re-rendered, which will cause the inputs to loose focus.
    const ExtendedComponent = useMemo(
      () => extensions
        .reverse()
        .reduce<React.ComponentType<any>>(
        (
          AccumulatedComponent, hoc,
        ) => hoc(AccumulatedComponent),
        WrappedComponent,
      ),
      [extensions],
    )

    const [
      key,
      rerender,
    ] = useCurrentUnixTime()

    return (
      <Wrapper
        Component={ExtendedComponent}
        key={key}
        rerender={rerender}
        {...options}
        {...props}
      />
    )
  }
}

export default withWrapper
