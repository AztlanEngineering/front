import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export type UseAuthenticationResourceOptions = {
  defaultRedirectionAfterLogin?:string;
  redirectLocallyAfterLogin?   :boolean;
}
/**
 * A React hook to generate a resource URL combining the full hostname with
 * a resource path determined by the current location state or a default redirect.
 * An optional override path can be provided to replace the default logic.
 *
 * @param {string} [overridePath] - Optional. A string to override the default resource path logic.
 * @returns {string} The full URL to the resource.
 */
function useResource(
  hostname: string,
  options: UseAuthenticationResourceOptions = {},
): string {
  const {
    redirectLocallyAfterLogin = false,
    defaultRedirectionAfterLogin,
  } = options
  const location = useLocation()

  const resource = useMemo(
    () => {
    // Determine the path based on the override, location state, or default redirect
      const path = redirectLocallyAfterLogin
        ? location.pathname
        : location.state?.from || defaultRedirectionAfterLogin
      return `${hostname}${path}`
    }, [
      hostname,
      location.state,
      defaultRedirectionAfterLogin,
      redirectLocallyAfterLogin,
    ],
  ) // Recompute if any of these dependencies change

  return resource
}

export default useResource
