/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import {
  useEffect, useCallback, useMemo,
} from 'react'
import {
  useMutation, usePreloadedQuery,
} from 'react-relay'

import * as PropTypes from 'prop-types'
import { TokenStateManager } from '@aztlan/react-relay'
// import { graphql } from 'babel-plugin-relay/macro.js'
import Context from './Context.js'
import { useApplicationContext } from '../../common/Application/index.js'

/**
 * This is the component description.
 */
function Provider({
  children,
  loginPath = '/login',
  defaultRedirectionAfterLogin = '/profile',
  MUTATION_LOGOUT,
  FRAGMENT_VIEWER,
  // ...otherProps
}) {
  const { data } = useApplicationContext()

  const [
    commitLogout,
    isLogoutInFlight,
  ] = useMutation(MUTATION_LOGOUT)

  const logout = useCallback(
    () => {
    // @ts-ignore
      commitLogout({
        updater:(store) => {
        // Access the root field of the store
          const root = store.getRoot()
          // Set the viewer to null directly in the store
          root.setValue(
            null, 'viewer',
          )
        },
        optimisticUpdater(store) {
        // Access the root field of the store
          const root = store.getRoot()
          // Set the viewer to null directly in the store
          root.setValue(
            null, 'viewer',
          )
        },
        onCompleted() {
          TokenStateManager.logout()
        // disposeViewerQuery()
        // loadViewerQuery(
        //  {}, { fetchPolicy: 'store-or-network' },
        // )
        // history.go(0)
        },
      })
    }, [commitLogout],
  )

  const value = useMemo(
    () => ({
      logout,
      isLogoutInFlight,
      loginPath,
      defaultRedirectionAfterLogin,

      data,
      FRAGMENT_VIEWER,
    }),
    [
      logout,
      isLogoutInFlight,
      loginPath,
      defaultRedirectionAfterLogin,

      data,
      FRAGMENT_VIEWER,
    ],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  /** The children JSX */
  children:PropTypes.node,

  /** The path to the login page */
  loginPath:PropTypes.string,

  /** The default redirection after login */
  defaultRedirectionAfterLogin:PropTypes.string,
}

export default Provider
