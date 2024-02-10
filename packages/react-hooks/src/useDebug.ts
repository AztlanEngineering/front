import { useMemo } from 'react'

/**
 * A React hook to determine if the application is in debug mode.
 * Debug mode is enabled if:
 * - The 'debug' key in localStorage is set to '1'.
 * - A URL parameter 'debug=1' is present.
 *
 * The hook is isomorphic, returning false when executed in a server-side context
 * where `window` is undefined.
 *
 * Utilizes `useMemo` for immediate calculation of the debug status.
 *
 * @returns {boolean} True if debug mode is enabled, otherwise false.
 */
function useDebug(key: string = 'debug'): boolean {
  const isDebugMode = useMemo(
    () => {
    // Check for server-side rendering where `window` is not available
      if (typeof window === 'undefined') {
        return false
      }

      // Attempt to parse the 'debug' key from localStorage
      const localStorageDebug = parseInt(
        window.localStorage.getItem(key) || '0', 10,
      ) === 1

      // Attempt to parse the 'debug' URL parameter
      const urlParams = new URLSearchParams(window.location.search)
      const paramDebug = parseInt(
        urlParams.get(key) || '0', 10,
      ) === 1

      // Return true if either condition is met
      return localStorageDebug || paramDebug
    }, [],
  ) // Empty dependency array means this runs once on mount

  return isDebugMode
}

export default useDebug
