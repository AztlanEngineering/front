import * as React from 'react'
import { Suspense } from 'react'
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

  return (
    <Switch
      children={[
        ...items.map(({
          isPrivate,
          groups,
          testFunction,
          wireframeTitle,
          ...routeProps
        }) => (isPrivate ? (
          <Suspense
            fallback={(
              <Wireframe
                    // @ts-ignore TODO
                groups={groups}
                testFunction={testFunction}
                wireframeTitle={wireframeTitle}
                {...routeProps}
              />
                )}
          >
            {viewerQueryReference && (
            <PrivateRoute
              key={routeProps.path}
              groups={groups}
              testFunction={testFunction}
              {...routeProps}
            />
            )}
          </Suspense>
        ) : (
          <Route
            key={routeProps.path}
            {...routeProps}
          />
        ))),
        ...(NotFoundPage ? [<Route component={NotFoundPage} />] : []),
      ]}
    />
  )
}

SwitchRoutes.propTypes = {
  /** The routes to render */
  items:PropTypes.arrayOf(PropTypes.shape({
    path:PropTypes.string.isRequired,
    // title:PropTypes.string.isRequired,
    // state:PropTypes.string.isRequired,
  })).isRequired,

  /**
   * A component to display in case no route was found.
   * In case you're doing SSR, you might want to use
   * a component that returns a 404 code.
   */

  NotFoundPage:PropTypes.node,

  /** A component to display while the user is being fetched */
  Wireframe:PropTypes.node,
}

export default SwitchRoutes
