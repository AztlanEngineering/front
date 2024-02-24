import React, {
  ComponentType, ReactElement, useEffect, useMemo,
} from 'react'
import {
  useHistory, useLocation,
} from 'react-router-dom'
import {
  useViewer,
  useAuthenticationContext,
} from '../Authentication/index.js'

interface WithPrivateRouteOptions {
  groups?:string[];
  test?  :() => boolean;
}

// Define a generic type for the component props, extending an empty object
interface ComponentProps extends Record<string, unknown> {}

function withPrivateRoute<T extends ComponentProps>(
  WrappedComponent: ComponentType<T>,
  options: WithPrivateRouteOptions,
): ComponentType<T> {
  // Return a component that takes props of type T
  function PrivateRouteComponent(props: T): ReactElement | null {
    const {
      loginPath, isLogoutInFlight,
    } = useAuthenticationContext()
    const {
      data, meetsConditions: userMeetsConditions,
    } = useViewer()
    const history = useHistory()
    const location = useLocation()
    const {
      groups = [], test,
    } = options

    useEffect(
      () => {
        if (groups.length === 0 && !test) {
          console.warn('withPrivateRoute has been used without specifying either groups or permissions')
        }
      }, [
        groups,
        test,
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
        userMeetsConditions,
      ],
    )

    useEffect(
      () => {
        if (isLogoutInFlight || !data.viewer || !arePermissionsValid) {
          if (location.pathname !== loginPath) {
            history.push({
              pathname:loginPath,
              state   :{
                reason:!data.viewer
                  ? 'You must be logged in to view this page.'
                  : `You do not have permission nor belong to the required groups to view this page. ${
                    groups.length
                      ? `Groups allowed are ${groups.join(', ')}.`
                      : ''
                  }`,
                from:location.pathname,
              },
            })
          }
        }
      }, [
        isLogoutInFlight,
        data.viewer,
        arePermissionsValid,
        loginPath,
        location,
        history,
      ],
    )

    if (!data.viewer || !arePermissionsValid) {
      return null
    }

    // Correctly passing props to React.createElement
    return React.createElement(
      WrappedComponent, props as T,
    )
  }

  return PrivateRouteComponent
}

export default withPrivateRoute
