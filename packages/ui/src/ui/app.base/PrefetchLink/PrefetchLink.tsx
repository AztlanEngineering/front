/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useCallback } from 'react'
import {
  Link, matchPath,
} from 'react-router-dom'
import {
  fetchQuery, useRelayEnvironment,
} from 'react-relay'
import { useApp } from '../../common/AppContext/index.js' // Adjust the import path as necessary
import { useViewer } from '../AuthContextProvider/index.js'

/**
 * description
 * @param {InferProps<typeof PrefetchLink.propTypes>} props -
 * @returns {React.ReactElement} - Rendered PrefetchLink
 */
function PrefetchLink({
  to,
  ...otherProps
}: InferProps<typeof PrefetchLink.propTypes>): React.ReactElement {
  const { routes } = useApp() // Assuming routes are part of what useApp returns
  const {
    isLoggedIn, meetsConditions,
  } = useViewer()

  const environment = useRelayEnvironment()

  // Prefetch data function wrapped in useCallback
  const prefetchData = useCallback(
    () => {
      const route = routes.find((routeConfig) => matchPath(
        to.toString(), {
          path :routeConfig.path,
          exact:routeConfig.exact,
        },
      ))

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
        const match = matchPath(
          to.toString(), {
            path :route.path,
            exact:route.exact,
          },
        )
        if (match) {
          const queryVariables = route.prepareQueryVariables?.(match.params) || match.params
          fetchQuery(
            environment, route.QUERY, queryVariables,
          ).toPromise()
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

PrefetchLink.propTypes = {
  /* The path to link to */
  to:PropTypes.string.isRequired,
}

export default PrefetchLink
