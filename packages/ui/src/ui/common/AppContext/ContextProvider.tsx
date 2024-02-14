import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'

import {
  useTheme, useFullHostname,
} from '@aztlan/react-hooks'
import Context from './Context.js'
import {
  useSubdomain, useMaintenance,
} from './hooks/index.js'

function AppContextProvider({
  children,
  initialTheme,
  value,
  maintenance = false,
  routes,
  ssrHostname,
  // ...otherProps
}) {
  const theme = useTheme(initialTheme)

  const isMaintenanceMode = useMaintenance(maintenance)

  const hostname = useFullHostname(ssrHostname)
  const subdomain = useSubdomain(hostname)

  if (isMaintenanceMode) {
    return <div>This site is currently not available.</div>
  }

  const contextValue = useMemo(
    () => ({
      ...value,
      ...theme,
      hostname,
      subdomain,
      routes,
    }),
    [
      value,
      theme,
    ],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

AppContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The initial theme for the website. If undefined, fallbacks on system preference.
   */
  initialTheme:PropTypes.string,

  /**
   * A dictionnary containing settings and preferences to be used application-wide TODO Nest ?
   */
  value:PropTypes.shape({
    APP:PropTypes.shape({
      NAME         :PropTypes.string.isRequired,
      CANONICAL    :PropTypes.string.isRequired,
      SUPPORT_EMAIL:PropTypes.string,
      TITLE_SUFFIX :PropTypes.string,
    }),
    SOCIAL:PropTypes.shape({
      FACEBOOK :PropTypes.string,
      INSTAGRAM:PropTypes.string,
      YOUTUBE  :PropTypes.string,
    }),
    CONSTANTS:PropTypes.shape({}),
    locale   :PropTypes.string,
  }).isRequired,

  /**
   * Maintenance mode. If true, the website will be in maintenance mode.
   */
  maintenance:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      start:PropTypes.instanceOf(Date),
      end  :PropTypes.instanceOf(Date),
    }),
  ]),

  /** The routes of the application - this will only be used for prefetch link */
  routes:PropTypes.arrayOf(PropTypes.shape({
    path                 :PropTypes.string.isRequired,
    exact                :PropTypes.bool,
    component            :PropTypes.elementType,
    QUERY                :PropTypes.object,
    prepareQueryVariables:PropTypes.func,
  })),

  /* The hostname, provided in SSR. */
  ssrHostname:PropTypes.string,
}

export default AppContextProvider
