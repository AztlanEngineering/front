import * as React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {
      error:null,
    }
    console.log('DDDD')
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    }
  }

  componentDidCatch(
    error, info,
  ) {
    console.log(
      error, info,
    )
  }

  render() {
    const {
      children, fallback,
    } = this.props
    const {
      error,
    } = this.state
    console.log(
      '>>>>> EB', error, fallback, children,
    )
    if (error) {
      if (typeof fallback === 'function') {
        return fallback({
          error,
        })
      }
      return fallback
    }
    return children
  }
}

export default ErrorBoundary
