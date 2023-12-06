/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { useEffect, useCallback } from 'react'
import { useMutation, useQueryLoader } from 'react-relay'
import { useHistory } from 'react-router'

import PropTypes from 'prop-types'
import { TokenStateManager } from '@aztlan/react-helpers/relay/auth'
import AuthContext from './Context.ts'

// @ts-ignore

// Local Definitions

/**
 * This is the component description.
 */
function AuthContextProvider({
  children,
  QUERY_VIEWER,
  MUTATION_LOGOUT,
  // ...otherProps
}) {
  const [
    viewerQueryReference,
    loadViewerQuery,
    disposeViewerQuery,
  ] = useQueryLoader(QUERY_VIEWER)

  const [commitLogout, isLogoutInFlight] = useMutation(MUTATION_LOGOUT)

  const logout = useCallback(() => {
    commitLogout({
      onCompleted() {
        TokenStateManager.logout()
        disposeViewerQuery()
        history.go(0)
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
  }, [commitLogout])

  useEffect(() => {
    // if (window.isAuthReady) {
    loadViewerQuery()
    // }
  }, [window.isAuthReady])

  console.log(
    '[ACP] : Render',
    viewerQueryReference,
    viewerQueryReference?.viewer,
  )

  return (
    <AuthContext.Provider
      value={{
        logout,
        isLogoutInFlight,

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
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node,
}

AuthContextProvider.defaultProps = {
  // someProp:false
}

export default AuthContextProvider
