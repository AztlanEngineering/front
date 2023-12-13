import * as React from 'react'
import { useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
// @ts-ignore
import { useTheme } from '@aztlan/react-helpers'
import Context from './Context'

// Helper Definitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

function AppContextProvider({
  children,
  initialTheme,
  value,
  initialState,
  // ...otherProps
}) {
  const theme = useTheme(initialTheme)
  const [state, dispatch] = useReducer(reducer, initialState)

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
  children: PropTypes.node,

  /**
   * The initial theme for the website. If undefined, fallbacks on system preference.
   */
  initialTheme: PropTypes.string,

  /**
   * A dictionnary containing settings and preferences to be used application-wide
   */
  value: PropTypes.shape({
    APP: PropTypes.shape({
      NAME: PropTypes.string.isRequired,
      CANONICAL: PropTypes.string.isRequired,
      SUPPORT_EMAIL: PropTypes.string,
      TITLE_SUFFIX: PropTypes.string,
    }),
    SOCIAL: PropTypes.shape({
      FACEBOOK: PropTypes.string,
      INSTAGRAM: PropTypes.string,
      YOUTUBE: PropTypes.string,
    }),
    CONSTANTS: PropTypes.shape({}),
  }).isRequired,

  /**
   * Application context initial state
   */
  initialState: PropTypes.objectOf(PropTypes.string),
}

AppContextProvider.defaultProps = {
  initialState: {},
}

export default AppContextProvider
