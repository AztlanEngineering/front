import * as React from 'react'
import {
  useMemo, useCallback, Suspense,
} from 'react'
import * as PropTypes from 'prop-types'

import {
  Switch, Route,
} from 'react-router-dom'
import withPrivateRoute from './withPrivateRoute.js'
import { useAuthenticationContext } from '../Authentication/index.js'
/* eslint-disable react/no-children-prop */

function withWireframe(Component) {
  return function WireframeComponent(props) {
    return (
      <Component
        wireframe
        {...props}
      />
    )
  }
}

function PrivateRoute({
  groups, test, permissions, ...routeProps
}) {
  const { viewerQueryReference } = useAuthenticationContext()
  const PrivateComponent = useCallback(
    withPrivateRoute(
      routeProps.component, {
        groups,
        test,
      },
    ),
    [
      routeProps.component,
      groups,
      test,
    ],
  )

  const { component: Component } = routeProps

  return (
    <Route
      {...routeProps}
      component={(props) => (
        <Suspense fallback={(
          <Component
            wireframe
            {...props}
          />
)}
        >
          {viewerQueryReference && <PrivateComponent {...props} />}
        </Suspense>
      )}
    />
  )
}

function SwitchRoutes({
  items, NotFoundPage, wireframe = false,
}) {
  // @ts-ignore
  const routes = useMemo(
    () => items.map(({
      isPrivate,
      groups,
      permissions,
      test,
      wireframeTitle,
      ...routeProps
    }) => (isPrivate ? (
      <PrivateRoute
        key={routeProps.path}
        groups={groups}
        test={test}
        permissions={permissions}
        component={
                wireframe
                  ? withWireframe(routeProps.component)
                  : routeProps.component
              }
        {...routeProps}
      />
    ) : (
      <Route
        key={routeProps.path}
        component={
                wireframe
                  ? withWireframe(routeProps.component)
                  : routeProps.component
              }
        {...routeProps}
      />
    ))),
    [items],
  )

  return (
    <Switch
      children={[
        ...routes,
        ...(NotFoundPage ? [<Route component={NotFoundPage} />] : []),
      ]}
    />
  )
}

SwitchRoutes.propTypes = {
  /** The routes to render */
  items:PropTypes.arrayOf(PropTypes.shape({
    path:PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.string.isRequired),
    ]).isRequired,
    // title:PropTypes.string.isRequired,
    // state:PropTypes.string.isRequired,
  })).isRequired,

  /**
   * A component to display in case no route was found.
   * In case you're doing SSR, you might want to use
   * a component that returns a 404 code.
   */

  NotFoundPage:PropTypes.elementType,

  /** Whether to render the wireframe or not */
  wireframe:PropTypes.bool,
}

export default SwitchRoutes
