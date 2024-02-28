/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import {
  useEffect, useCallback,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import throttle from 'lodash.throttle'

import { Link } from 'react-router-dom'
import { useApplicationContext } from '../../common/index.js' // Adjust the import path as necessary
import useRouteMatch from './useRouteMatch.js'
import usePrefetchQuery from './usePrefetchQuery.js'
import {
  useViewer,
  useAuthenticationContext,
} from '../Authentication/index.js'

const sharedPropTypes = {
  /* The path to link to */
  to:PropTypes.string.isRequired,

  /* The minimum wait time before two calls */
  throttleMs:PropTypes.number,
}

const defaultThrottleMs = 5000

function PublicPrefetchLink({
  to,
  throttleMs = defaultThrottleMs,
  ...otherProps
}: InferProps<typeof sharedPropTypes>): React.ReactElement {
  const { routes } = useApplicationContext()

  const {
    route, match,
  } = useRouteMatch(
    routes, to,
  )

  const prefetchQuery = usePrefetchQuery()

  // Prefetch data function wrapped in useCallback
  const prefetchData = useCallback(
    () => {
      if (route && route.QUERY && !route.isPrivate) {
        if (match) {
          const queryVariables = route.prepareQueryVariables?.(match.params) || match.params
          prefetchQuery(
            route.QUERY, queryVariables,
          )
        }
      }
    }, [
      routes,
      to,
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
  return (
    <Link
      to={to}
      onMouseOver={throttledPrefetchData}
      {...otherProps}
    />
  )
}

function PrivatePrefetchLink({
  to,
  throttleMs = defaultThrottleMs,
  ...otherProps
}: InferProps<typeof sharedPropTypes>): React.ReactElement {
  const { routes } = useApplicationContext() // Assuming routes are part of what useApp returns
  const {
    isLoggedIn, meetsConditions,
  } = useViewer()

  const {
    route, match,
  } = useRouteMatch(
    routes, to,
  )

  const prefetchQuery = usePrefetchQuery()

  // Prefetch data function wrapped in useCallback
  const prefetchData = useCallback(
    () => {
      if (route && route.QUERY && (isLoggedIn || !route.isPrivate)) {
        if (isLoggedIn && (route.groups || route.test || route.permissions)) {
          if (
            !meetsConditions({
              groups     :route.groups,
              test       :route.test,
              permissions:route.permissions,
            })
          ) {
            return
          }
        }
        if (match) {
          const queryVariables = route.prepareQueryVariables?.(match.params) || match.params
          prefetchQuery(
            route.QUERY, queryVariables,
          )
        }
      }
    }, [
      routes,
      to,
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

  return (
    <Link
      to={to}
      onMouseOver={throttledPrefetchData}
      {...otherProps}
    />
  )
}

function PrefetchLinkWrapper(props: InferProps<typeof sharedPropTypes>): React.ReactElement {
  // This means the prefetch link only works when the user has been fetch
  // Whether it is logged in or not
  const { data } = useAuthenticationContext()
  return data ? (
    <PrivatePrefetchLink {...props} />
  ) : (
    <PublicPrefetchLink {...props} />
  )
}

PublicPrefetchLink.propTypes = sharedPropTypes
PrivatePrefetchLink.propTypes = sharedPropTypes
PrefetchLinkWrapper.propTypes = sharedPropTypes

export default PrefetchLinkWrapper
