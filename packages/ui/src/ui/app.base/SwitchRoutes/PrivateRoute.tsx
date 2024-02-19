/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'
import {
  useEffect, useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import {
  Route, useHistory, useLocation,
} from 'react-router-dom'
import { useFragment } from 'react-relay'
import {
  useViewer,
  useAuthenticationContext,
} from '../Authentication/index.js'

// Local Definitions

const componentClassName = 'private-route'

/**
 * This is the component description.
 */
function PrivateRoute({
  groups = [], test, ...otherProps
}) {
  // @ts-ignore
  const {
    loginPath, isLogoutInFlight,
  } = useAuthenticationContext()

  useEffect(
    () => {
      if (groups.length === 0) {
        console.warn('PrivateRoute has been used without specifying either groups or permissions')
      }
    }, [groups],
  )

  const {
    data, meetsConditions: userMeetsConditions,
  } = useViewer()

  const history = useHistory()

  const location = useLocation()

  useEffect(
    () => {
    // @ts-ignore
      if (isLogoutInFlight || !data.viewer) {
        if (location.pathname !== loginPath) {
          history.push({
            pathname:loginPath,
            state   :{
              reason:'You must be logged in to view this page.',
              from  :location.pathname,
            },
          })
        }
      }
    // @ts-ignore
    }, [
      data.viewer,
      isLogoutInFlight,
    ],
  )

  const arePermissionsValid = useMemo(
    () => userMeetsConditions({
      groups,
      test,
    }),
    [
      groups,
      test,
    ],
  )

  useEffect(
    () => {
      if (!arePermissionsValid) {
        history.push({
          pathname:loginPath,
          state   :{
            reason:`You do not have permission nor belong to the required groups to view this page. ${
              groups.length ? `Groups allowed are ${groups.join(', ')}.` : ''
            }`,
            from:location.pathname,
          },
        })
      }
    }, [arePermissionsValid],
  )

  return <Route {...otherProps} />
}

PrivateRoute.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

export default PrivateRoute
