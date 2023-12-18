import * as React from 'react'
import {
  Suspense,
} from 'react'
import * as PropTypes from 'prop-types'

import {
  Switch, Route,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute.tsx'
import {
  useAuth,
} from '../AuthContextProvider/index.ts'
/* eslint-disable react/no-children-prop */

function SwitchRoutes({
  items, Wireframe, NotFoundPage,
}) {
  // @ts-ignore
  const {
    viewerQueryReference,
  } = useAuth()
  console.log('SR')

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
          <Route key={routeProps.path} {...routeProps} />
        ))),
        ...(NotFoundPage ? [<Route component={NotFoundPage} />] : []),
      ]}
    />
  )
}

SwitchRoutes.propTypes = {
  /**
   * The routes to render
   */

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

  NotFound:PropTypes.node,
}

SwitchRoutes.defaultProps = {
  Wireframe:() => <h1>Loading user</h1>,
}

export default SwitchRoutes
