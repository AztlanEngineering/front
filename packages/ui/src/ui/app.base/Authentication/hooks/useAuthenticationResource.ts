import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useApplicationContext, useResource,
} from '../../../common/index.js'
import useAuthenticationContext from './useAuthenticationContext.js'
import type { UseAuthenticationResourceOptions } from '../../../common/Application/hooks/useResource.js'

/**
 * @param {string} [overridePath] - Optional. A string to override the default resource path logic.
 * @returns {string} The full URL to the resource.
 */
function useAuthenticationResource(options:UseAuthenticationResourceOptions = {}): string {
  const {
    redirectLocallyAfterLogin,
    // At the moment we use the default
    // defaultRedirectionAfterLogin,
  } = options

  const {
    hostname,
    defaultRedirectionAfterLogin,
  } = useApplicationContext()

  const resource = useResource(
    hostname, {
      redirectLocallyAfterLogin,
      defaultRedirectionAfterLogin,
    },
  )

  return resource
}

export default useAuthenticationResource
