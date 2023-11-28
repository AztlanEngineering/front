/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { useEffect, useCallback } from 'react'
import { useMutation, useQueryLoader } from 'react-relay'

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
      },
    })
  }, [commitLogout])

  useEffect(() => {
    // if (window.isAuthReady) {
    loadViewerQuery()
    // }
  }, [window.isAuthReady])

  return (
    <AuthContext.Provider
      value={{
        logout,
        isLogoutInFlight,
        viewerQueryReference,
        loadViewerQuery,
        disposeViewerQuery,
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
