import * as React from 'react'
import { Suspense } from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../PrivateRoute'
import { useAuth } from '../AuthContextProvider'
import ErrorBoundary from '../ErrorBoundary'
/* eslint-disable react/no-children-prop */

function SwitchRoutes({ items, NotFoundPage }) {
  const { viewerQueryReference } = useAuth()
  console.log('SR')

  return (
    <Suspense fallback={<h1>Loading user</h1>}>
      <Switch
        children={[
          ...items.map(({
            isPrivate, groups, testFunction, ...routeProps
          }) => (isPrivate ? (
            viewerQueryReference && (
            <PrivateRoute
              key={routeProps.path}
              groups={groups}
              testFunction={testFunction}
              {...routeProps}
            />
            )
          ) : (
            <Route key={routeProps.path} {...routeProps} />
          ))),
          ...(NotFoundPage ? [<Route component={NotFoundPage} />] : []),
        ]}
      />
    </Suspense>
  )
}

SwitchRoutes.propTypes = {
  /**
   * The routes to render
   */

  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      // title:PropTypes.string.isRequired,
      // state:PropTypes.string.isRequired,
    }),
  ).isRequired,

  /**
   * A component to display in case no route was found.
   * In case you're doing SSR, you might want to use
   * a component that returns a 404 code.
   */

  NotFound: PropTypes.node,
}

export default SwitchRoutes
