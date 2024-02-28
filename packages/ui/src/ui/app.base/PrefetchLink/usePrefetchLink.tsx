import {
  useCallback, useEffect,
} from 'react'
import throttle from 'lodash.throttle'
import { useApplicationContext } from '../../common/index.js'
import useRouteMatch from './useRouteMatch.js'
import usePrefetchQuery from './usePrefetchQuery.js'

export type PrefetchLinkOptions = {
  throttleMs?    :number;
  shouldPrefetch?:(route: any, match: any) => boolean;
}

const defaultOptions: PrefetchLinkOptions = {
  throttleMs    :5000,
  shouldPrefetch:(
    route, match,
  ) => route && route.QUERY && !route.isPrivate && match,
}

function usePrefetchLink(
  to: string, options: PrefetchLinkOptions = {},
) {
  const {
    throttleMs, shouldPrefetch,
  } = {
    ...defaultOptions,
    ...options,
  }
  const { routes } = useApplicationContext()
  const {
    route, match,
  } = useRouteMatch(
    routes, to,
  )
  const prefetchQuery = usePrefetchQuery()

  const prefetchData = useCallback(
    () => {
      if (route && match && shouldPrefetch(
        route, match,
      )) {
        const queryVariables = route.prepareQueryVariables?.(match.params) || match.params
        prefetchQuery(
          route.QUERY, queryVariables,
        )
      }
    }, [
      route,
      match,
      shouldPrefetch,
      prefetchQuery,
    ],
  )

  const throttledPrefetchData = useCallback(
    throttle(
      prefetchData, throttleMs,
    ),
    [prefetchData],
  )

  useEffect(
    () => () => {
      // @ts-ignore
      throttledPrefetchData.cancel()
    },
    [throttledPrefetchData],
  )

  return throttledPrefetchData
}

export default usePrefetchLink
