/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useCallback } from 'react'
import {
  Link, matchPath,
} from 'react-router-dom'
import { useApp } from '../../common/AppContext/index.js' // Adjust the import path as necessary
import useRouteMatch from './useRouteMatch.js'
import usePrefetchQuery from './usePrefetchQuery.js'
import {
  useViewer, useAuth,
} from '../AuthContextProvider/index.js'

const sharedPropTypes = {
  /* The path to link to */
  to:PropTypes.string.isRequired,
}

function PublicPrefetchLink({
  to,
  ...otherProps
}: InferProps<typeof sharedPropTypes>): React.ReactElement {
  const { routes } = useApp()

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
  return (
    <Link
      to={to}
      onMouseOver={prefetchData}
      {...otherProps}
    />
  )
}

function PrivatePrefetchLink({
  to,
  ...otherProps
}: InferProps<typeof sharedPropTypes>): React.ReactElement {
  const { routes } = useApp() // Assuming routes are part of what useApp returns
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
  return (
    <Link
      to={to}
      onMouseOver={prefetchData}
      {...otherProps}
    />
  )
}

function PrefetchLinkWrapper(props: InferProps<typeof sharedPropTypes>): React.ReactElement {
  // This means the prefetch link only works when the user has been fetch
  // Whether it is logged in or not
  const { viewerQueryReference } = useAuth()
  return viewerQueryReference ? (
    <PrivatePrefetchLink {...props} />
  ) : (
    <PublicPrefetchLink {...props} />
  )
}

PublicPrefetchLink.propTypes = sharedPropTypes
PrivatePrefetchLink.propTypes = sharedPropTypes
PrefetchLinkWrapper.propTypes = sharedPropTypes

export default PrefetchLinkWrapper
