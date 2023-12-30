import * as React from 'react'
import { useFormContext } from 'react-hook-form'

/**
 * ErrorBoundary is a React class component that catches JavaScript errors
 * anywhere in its child component tree.
 */
class BaseErrorBoundary extends React.Component<
{
  onError :(error: Error, info: React.ErrorInfo) => void;
  children:React.ReactNode;
},
{ hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  static getDerivedStateFromError(_: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(
    error: Error, errorInfo: React.ErrorInfo,
  ) {
    /* eslint-disable-next-line react/destructuring-assignment */
    this.props.onError(
      error, errorInfo,
    )
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // Return children as the error handling is managed through onError
      return children
    }

    return children
  }
}

/**
 * FieldErrorBoundary is a wrapper component that uses ErrorBoundary specifically
 * for handling errors with react-hook-form for a specific field.
 */
function ErrorBoundary({
  children,
  name,
}: {
  children:React.ReactNode;
  name    :string;
}) {
  const { setError } = useFormContext()
  console.log(
    'ErrorBoundary', name, setError,
  )

  const handleError = (error: Error) => {
    // Convert the JavaScript error into a form error
    setError(
      name, {
        type   :'manual',
        message:error.message || 'An unknown error occurred',
      },
    )
  }

  return (
    <BaseErrorBoundary onError={handleError}>{children}</BaseErrorBoundary>
  )
}

export default ErrorBoundary
