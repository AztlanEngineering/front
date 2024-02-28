/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'
import { withDebug } from '@aztlan/react-hooks'
import { Link } from 'react-router-dom'

import styleNames from '@aztlan/bem'
import {
  useViewer,
  useAuthenticationResource,
  useAuthenticationContext,
} from '../hooks/index.js'
import { NavigationHeader } from '../../../common/Navigation/index.js'

const baseClassName = styleNames.base
const componentClassName = 'debug-bar'

/**
 * description
 * @param {InferProps<typeof Header.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Header
 */
function RawLoggedInHeader({
  id, className: userClassName, style, FRAGMENT, data,
}, // ...otherProps
): // InferProps<typeof RawLoggedInHeader.propTypes>
  React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  console.log(
    'data', data,
  )

  const result = useFragment(
    FRAGMENT, data,
  ) as any

  const log = useCallback(
    () => {
    /* eslint-disable-next-line no-console */
      console.log(result)
    }, [result],
  )

  const {
    firstName, lastName, email,
  } = result

  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()

  return (
    <NavigationHeader
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      left="viewer"
      desktop
      right={(
        <button
          type="button"
          onClick={log}
        >
          console.log
        </button>
      )}
      // {...otherProps}
    >
      <div className="grid container">
        <div className="span-4 md-span-5">
          {`${email} (${firstName} ${lastName})`}
        </div>
        <span className="span-2 md-span-3">
          <button
            type="button"
            onClick={logout}
            disabled={isLogoutInFlight}
          >
            Logout
          </button>
        </span>
      </div>
    </NavigationHeader>
  )
}

RawLoggedInHeader.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this component */
  data:PropTypes.shape({
    viewer:PropTypes.shape({
      firstName     :PropTypes.string,
      lastName      :PropTypes.string,
      created       :PropTypes.string,
      updated       :PropTypes.string,
      email         :PropTypes.string,
      profilePicture:PropTypes.string,
    }),
  }),

  /** The fragment to use */
  FRAGMENT:PropTypes.any,
}

function RawLoggedOutHeader({
  id,
  className: userClassName,
  style,
  // data,
  wireframe,
}: // ...otherProps
InferProps<typeof RawLoggedOutHeader.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const { loginPath } = useAuthenticationContext()
  return (
    <NavigationHeader
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      desktop
      right={<Link to={loginPath}>Login</Link>}
      // {...otherProps}
    >
      {wireframe ? (
        <div className="span-8 md-span-10">Loading User</div>
      ) : (
        <div className="span-8 md-span-10">Not logged in</div>
      )}
    </NavigationHeader>
  )
}

RawLoggedOutHeader.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this component */
  data:PropTypes.any,

  /** The wireframe mode */
  wireframe:PropTypes.bool,
  /*
  data:PropTypes.shape({
    viewer:PropTypes.shape({
      firstName     :PropTypes.string,
      lastName      :PropTypes.string,
      created       :PropTypes.string,
      updated       :PropTypes.string,
      email         :PropTypes.string,
      profilePicture:PropTypes.string,
    }),
  }), */
}

function Header(props) {
  const resource = useAuthenticationResource(true)

  const { data } = useViewer()

  if (data) {
    return (
      <RawLoggedInHeader
        data={data}
        {...props}
      />
    )
  }
  return <RawLoggedOutHeader {...props} />
}

export {
  RawLoggedInHeader, RawLoggedOutHeader,
}

export default withDebug(Header)
