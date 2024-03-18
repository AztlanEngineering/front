import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

const propTypes = {
  children:PropTypes.node.isRequired,
  fallback:PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
}

interface ErrorBoundaryProps extends InferProps<typeof propTypes> {}

interface ErrorBoundaryState {
  error:Error | null;
}

class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  /*
  componentDidCatch(
    error, info,
  ) {
    console.log(
      error, info,
    )
  } */

  render() {
    const {
      children, fallback,
    } = this.props
    const { error } = this.state
    if (error) {
      if (typeof fallback === 'function') {
        return fallback({ error })
      }
      return fallback
    }
    return children
  }
}

ErrorBoundary.propTypes = propTypes

export default ErrorBoundary
