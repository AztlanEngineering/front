import * as React from 'react'
import {
  useMemo, useCallback, Suspense,
} from 'react'
import * as PropTypes from 'prop-types'

import {
  Switch, Route,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute.js'
import { useAuth } from '../AuthContextProvider/index.js'
/* eslint-disable react/no-children-prop */

function SwitchRoutes({
  items,
  NotFoundPage,
  Wireframe = () => <h1>Loading user</h1>,
}) {
  // @ts-ignore
  const { viewerQueryReference } = useAuth()

  const PrivateRouteWrapper = useCallback(
    ({
      groups, test, wireframeTitle, permissions, ...routeProps
    }) => (
      <Suspense
        fallback={(
          <Wireframe
            // @ts-ignore TODO
            groups={groups}
            test={test}
            wireframeTitle={wireframeTitle}
            {...routeProps}
          />
        )}
      >
        {viewerQueryReference && (
        <PrivateRoute
          groups={groups}
          permissions={permissions}
          test={test}
          {...routeProps}
        />
        )}
      </Suspense>
    ),
    [viewerQueryReference],
  )

  const routes = useMemo(
    () => items.map(({
      isPrivate,
      groups,
      permissions,
      test,
      wireframeTitle,
      ...routeProps
    }) => (isPrivate ? (
      <PrivateRouteWrapper
        key={routeProps.path}
        groups={groups}
        test={test}
        permissions={permissions}
        wireframeTitle={wireframeTitle}
        {...routeProps}
      />
    ) : (
      <Route
        key={routeProps.path}
        {...routeProps}
      />
    ))),
    [
      items,
      viewerQueryReference,
    ],
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

  /** A component to display while the user is being fetched */
  Wireframe:PropTypes.elementType,
}

export default SwitchRoutes
