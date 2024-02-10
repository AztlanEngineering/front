import { useMemo } from 'react'

/**
 * A React hook that returns the full hostname of the application.
 * It constructs the full hostname from window.location on the client side,
 * and defaults to a predetermined hostname in a server-side environment.
 *
 * This hook is isomorphic, working in both server-side and client-side contexts.
 *
 * @returns {string} The full hostname (protocol, hostname, and port if available).
 */
function useFullHostname(): string {
  const fullHostname = useMemo(
    () => {
      if (typeof process === 'undefined') {
      // Client-side logic
        const {
          protocol, hostname, port,
        } = window.location
        return `${protocol}//${hostname}${port ? `:${port}` : ''}`
      }
      // Server-side logic
      return 'http://test.com'
    }, [],
  ) // Dependencies are empty because the output doesn't depend on props or state.

  return fullHostname
}

export default useFullHostname
