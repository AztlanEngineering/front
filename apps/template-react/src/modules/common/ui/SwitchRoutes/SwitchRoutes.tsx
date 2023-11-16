import * as React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'
/* eslint-disable react/no-children-prop */

function SwitchRoutes({ items, NotFoundPage }) {
  return (
    <Switch
      children={[
        ...items.map(({ isPrivate, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps} />
        )),
        ...(NotFoundPage ? [<Route component={NotFoundPage} />] : []),
      ]}
    />
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
