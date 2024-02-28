import { useCallback } from 'react'
import throttle from 'lodash.throttle'
import usePrefetchQuery from './usePrefetchQuery.js'
import { useApplicationContext } from '../../common/index.js'

type PrefetchRoutesOptions = {
  throttleMs?:number;
}

const defaultOptions: PrefetchRoutesOptions = { throttleMs:5000, // Default throttle milliseconds
}

function usePrefetchRoutes(
  paths: string[], // Paths to prefetch
  options: PrefetchRoutesOptions = {},
) {
  const { throttleMs } = {
    ...defaultOptions,
    ...options,
  }
  const prefetchQuery = usePrefetchQuery()
  const { matchRoute } = useApplicationContext()

  const prefetchRoutes = useCallback(
    () => {
      paths.forEach((path) => {
        const matchResult = matchRoute(path)
        if (matchResult && matchResult.route && matchResult.match) {
        // Assuming route.QUERY exists and matchResult.match.params can be directly used
          const {
            route, match,
          } = matchResult
          if (route.QUERY) {
            const variables = route.prepareQueryVariables
              ? route.prepareQueryVariables(match.params)
              : match.params
            prefetchQuery(
              route.QUERY, variables,
            ).catch(console.error)
          }
        }
      })
    }, [
      paths,
      matchRoute,
      prefetchQuery,
    ],
  )

  // Throttle the prefetchRoutes function
  const throttledPrefetchRoutes = useCallback(
    throttle(
      prefetchRoutes, throttleMs,
    ),
    [
      prefetchRoutes,
      throttleMs,
    ],
  )

  return throttledPrefetchRoutes
}

export default usePrefetchRoutes
