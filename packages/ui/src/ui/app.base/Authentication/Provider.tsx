/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import {
  useEffect, useCallback,
} from 'react'
import {
  useMutation, useQueryLoader,
} from 'react-relay'

import * as PropTypes from 'prop-types'
import { TokenStateManager } from '@aztlan/react-relay'
// import { graphql } from 'babel-plugin-relay/macro.js'
import { graphql } from 'react-relay'
import Context from './Context.js'
import { ProviderAuthenticationViewerQuery } from './__generated__/ProviderAuthenticationViewerQuery.graphql.js'
import { ProviderAuthenticationViewerLogoutMutation } from './__generated__/ProviderAuthenticationViewerLogoutMutation.graphql.js'

// @ts-ignore

// Local Definitions
const DEFAULT_QUERY_VIEWER = graphql`
  query ProviderAuthenticationViewerQuery {
    viewer {
      ...ViewerProfileFragment
      #...useViewerFragment
    }
  }
`
// @ts-ignore
const DEFAULT_MUTATION_LOGOUT = graphql`
  mutation ProviderAuthenticationViewerLogoutMutation {
    deleteTokenCookie(input: { clientMutationId: "logout-delete-access" }) {
      deleted
      clientMutationId
    }
    deleteRefreshTokenCookie(
      input: { clientMutationId: "logout-delete-refresh" }
    ) {
      deleted
      clientMutationId
    }
  }
`

/**
 * This is the component description.
 */
function Provider({
  children,
  loginPath = '/login',
  defaultRedirectionAfterLogin = '/profile',
  QUERY_VIEWER = DEFAULT_QUERY_VIEWER,
  MUTATION_LOGOUT = DEFAULT_MUTATION_LOGOUT,
  // ...otherProps
}) {
  const [
    viewerQueryReference,
    loadViewerQuery,
    disposeViewerQuery,
  ] = useQueryLoader<ProviderAuthenticationViewerQuery>(QUERY_VIEWER)

  const [
    commitLogout,
    isLogoutInFlight,
  ] = useMutation<
  ProviderAuthenticationViewerLogoutMutation
  >(MUTATION_LOGOUT)

  // const history = useHistory()

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

  useEffect(
    () => {
    // if (window.isAuthReady) {
      loadViewerQuery({})
    // }
    }, [],
  )

  /*
  console.log(
    '[ACP] : Render', viewerQueryReference,
  ) */

  return (
    <Context.Provider
      value={{
        logout,
        isLogoutInFlight,
        loginPath,
        defaultRedirectionAfterLogin,

        viewerQueryReference,
        loadViewerQuery,
        disposeViewerQuery,

        QUERY_VIEWER,
      }}
    >
      {children}
    </Context.Provider>
  )
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
