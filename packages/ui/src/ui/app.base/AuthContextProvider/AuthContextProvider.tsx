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
import AuthContext from './Context.js'
import { AuthContextProviderViewerQuery } from './__generated__/AuthContextProviderViewerQuery.graphql.js'
import { AuthContextProviderViewerLogoutMutation } from './__generated__/AuthContextProviderViewerLogoutMutation.graphql.js'

// @ts-ignore

// Local Definitions
const DEFAULT_QUERY_VIEWER = graphql`
  query AuthContextProviderViewerQuery {
    viewer {
      ...ViewerProfileFragment
      #...useViewerFragment
    }
  }
`
// @ts-ignore
const DEFAULT_MUTATION_LOGOUT = graphql`
  mutation AuthContextProviderViewerLogoutMutation {
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
function AuthContextProvider({
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
  ] = useQueryLoader<AuthContextProviderViewerQuery>(QUERY_VIEWER)

  const [
    commitLogout,
    isLogoutInFlight,
  ] = useMutation<
  AuthContextProviderViewerLogoutMutation
  >(MUTATION_LOGOUT)

  // const history = useHistory()

  const logout = useCallback(
    () => {
    // @ts-ignore
      commitLogout({
        onCompleted() {
          TokenStateManager.logout()
          // disposeViewerQuery()
          loadViewerQuery(
            {}, { fetchPolicy: 'network-only' },
          )
        // history.go(0)
        },
      /*
      updater(store) {
        console.log(
          'ACP - before',
          getRoot().getLinkedRecord("viewer")updating store',
          store,
        )
        const record = store.getRoot().getLinkedRecord('viewer')
        store.delete(record._dataId)
        console.log('ACP - 2', record._dataId, record, store.getRoot())
      }, */
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
    <AuthContext.Provider
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
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  /** The children JSX */
  children:PropTypes.node,

  /** The path to the login page */
  loginPath:PropTypes.string,

  /** The default redirection after login */
  defaultRedirectionAfterLogin:PropTypes.string,
}

export default AuthContextProvider
