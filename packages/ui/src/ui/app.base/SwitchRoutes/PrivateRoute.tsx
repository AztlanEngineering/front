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
  useViewer, useAuth,
} from '../AuthContextProvider/index.js'

// Local Definitions

const componentClassName = 'private-route'

/**
 * This is the component description.
 */
function PrivateRoute({
  groups = [], testFunction, ...otherProps
}) {
  // @ts-ignore
  const { loginPath } = useAuth()

  useEffect(
    () => {
      if (groups.length === 0) {
        console.warn('PrivateRoute has been used without specifying either groups or permissions')
      }
    }, [groups],
  )

  const {
    data, isInGroups, test,
  } = useViewer()

  const history = useHistory()

  const location = useLocation()

  useEffect(
    () => {
    // @ts-ignore
      if (!data.viewer) {
        history.push({
          pathname:loginPath,
          state   :{
            reason:'You must be logged in to view this page.',
            from  :location.pathname,
          },
        })
      }
    // @ts-ignore
    }, [data.viewer],
  )

  const arePermissionsValid = useMemo(
    () => {
      const conditions = []

      const isViewerInGroups = isInGroups(groups)
      if (groups.length) conditions.push(isViewerInGroups)

      if (testFunction) {
        const additionalTestResult = test(testFunction)
        conditions.push(additionalTestResult)
      }
      return conditions.every(Boolean) // true if length 0
    // @ts-ignore
    }, [
      groups,
      testFunction,
      data.viewer,
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
