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
import {
  HeaderViewerFragment$data,
  HeaderViewerFragment$key,
} from './__generated__/HeaderViewerFragment.graphql.js'
import { HeaderViewerQuery$data } from './__generated__/HeaderViewerQuery.graphql.js'
/* Exceptional cross dependency _ UNSTABLE */

const baseClassName = styleNames.base
const componentClassName = 'debug-bar'

const DEFAULT_FRAGMENT = graphql`
  fragment HeaderViewerFragment on UserNode
    @refetchable(queryName: "HeaderViewerRefetchQuery") {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
`

const QUERY = graphql`
  query HeaderViewerQuery {
    viewer {
      ...HeaderViewerFragment
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Header.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Header
 */
function RawLoggedInHeader({
  id,
  className: userClassName,
  style,
  FRAGMENT = DEFAULT_FRAGMENT,
  data,
}: // ...otherProps

InferProps<typeof RawLoggedInHeader.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT,
    data.viewer as HeaderViewerFragment$key,
  ) as HeaderViewerFragment$data

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
  data,
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
      <div className="span-8 md-span-10">Not logged in</div>
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

  return (
    <React.Suspense fallback="Loading">
      {data.viewer ? (
        <RawLoggedInHeader
          data={data}
          {...props}
        />
      ) : (
        <RawLoggedOutHeader
          data={data}
          {...props}
        />
      )}
    </React.Suspense>
  )
}

export {
  RawLoggedInHeader, RawLoggedOutHeader,
}

export default withDebug(Header)
