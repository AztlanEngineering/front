import * as React from 'react'
import ErrorBoundary from '../Field/ErrorBoundary.tsx'

/**
 * Higher-order component that wraps a given component with FieldErrorBoundary
 * for centralized error handling in forms using react-hook-form.
 * @param {React.ComponentType<any>} The component to be extended with error handling
 * @returns {React.ComponentType<any>} The extended component
 */
function withErrorHandling(WrappedComponent: React.ComponentType<any>) {
  return function ExtendedComponent(props: any) {
    const { name } = props

    return (
      <ErrorBoundary name={name}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    )
  }
}

export default withErrorHandling
