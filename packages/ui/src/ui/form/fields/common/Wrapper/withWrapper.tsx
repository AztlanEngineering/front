import * as React from 'react'
import { useFormikContext } from 'formik'
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
  return true
}

const withWrapper = (
  Component, options = {},
) => {
  const WrappedComponent = React.memo(
    Component, areEqual,
  )

  return function ({
    condition, ...props
  }) {
    const { values } = useFormikContext()

    if (condition && !condition(values)) {
      return null
    }

    return (
      <Wrapper
        Component={WrappedComponent}
        {...options}
        {...props}
      />
    )
  }
}

export default withWrapper
