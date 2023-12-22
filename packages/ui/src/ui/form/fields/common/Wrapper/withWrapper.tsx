import * as React from 'react'
import { useEffect } from 'react'
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
  Component, options = {
  },
) => function (props) {
  return (
    <Wrapper
      Component={
          React.memo(
            Component, areEqual,
          )
          // Component
        }
      {...options}
      {...props}
    />
  )
} // TODO add react memp

export default withWrapper
