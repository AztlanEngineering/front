import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useFullHostname } from '@aztlan/react-hooks'
import useAuth from './useAuth.js'

/**
 * A React hook to generate a resource URL combining the full hostname with
 * a resource path determined by the current location state or a default redirect.
 * An optional override path can be provided to replace the default logic.
 *
 * @param {string} [overridePath] - Optional. A string to override the default resource path logic.
 * @returns {string} The full URL to the resource.
 */
function useAuthenticationResource(redirectLocally: boolean = false): string {
  const location = useLocation()
  const fullHostname = useFullHostname()
  const { defaultRedirectionAfterLogin } = useAuth()

  const resource = useMemo(
    () => {
    // Determine the path based on the override, location state, or default redirect
      const path = redirectLocally
        ? location.pathname
        : location.state?.from || defaultRedirectionAfterLogin
      return `${fullHostname}${path}`
    }, [
      fullHostname,
      location.state,
      defaultRedirectionAfterLogin,
      redirectLocally,
    ],
  ) // Recompute if any of these dependencies change

  return resource
}

export default useAuthenticationResource
