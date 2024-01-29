import * as React from 'react'
import * as PropTypes from 'prop-types'

import { useTheme } from '@aztlan/react-hooks'
import Context from './Context.ts'
import useMaintenance from './useMaintenance.ts'

function AppContextProvider({
  children,
  initialTheme,
  value,
  maintenance = false,
  // ...otherProps
}) {
  const theme = useTheme(initialTheme)

  const isMaintenanceMode = useMaintenance(maintenance)

  if (isMaintenanceMode) {
    return <div>This site is currently not available.</div>
  }

  return (
    <Context.Provider
      value={{
        ...value,
        ...theme,
      }}
    >
      {children}
    </Context.Provider>
  )
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
   * A dictionnary containing settings and preferences to be used application-wide
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
}

export default AppContextProvider
