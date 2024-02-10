/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql, useLazyLoadQuery,
} from 'react-relay'
import { withDebug } from '@aztlan/react-hooks'

import styleNames from '@aztlan/bem'
import {
  DebugBarViewerFragment$data,
  DebugBarViewerFragment$key,
} from './__generated__/DebugBarViewerFragment.graphql.js'
import { DebugBarViewerQuery$data } from './__generated__/DebugBarViewerQuery.graphql.js'
import useAuth from '../../useAuth.js'
import useAuthenticationResource from '../../useAuthenticationResource.js'
import { LoginButton } from '../../../LoginButton/index.js'

const baseClassName = styleNames.base
const componentClassName = 'debug-bar'

const FRAGMENT = graphql`
  fragment DebugBarViewerFragment on UserNode
    @refetchable(queryName: "DebugBarViewerRefetchQuery") {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
`

const QUERY = graphql`
  query DebugBarViewerQuery($resource: String!) {
    ...LoginButtonFragment @arguments(resource: $resource)
    viewer {
      ...DebugBarViewerFragment
    }
  }
`

/**
 * description
 * @param {InferProps<typeof DebugBar.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DebugBar
 */
function RawLoggedInDebugBar({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof RawLoggedInDebugBar.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT,
    data.viewer as DebugBarViewerFragment$key,
  ) as DebugBarViewerFragment$data

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
  } = useAuth()

  return (
    <div
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
      // {...otherProps}
    >
      <div className="span-8 md-span-10">
        {`User ${email} (${firstName} ${lastName})`}
      </div>
      <button
        className="span-4 md-span-2"
        type="button"
        onClick={log}
      >
        console.log
      </button>
      <button
        className="span-4 md-span-2"
        type="button"
        onClick={logout}
        disabled={isLogoutInFlight}
      >
        Logout
      </button>
    </div>
  )
}

RawLoggedInDebugBar.propTypes = {
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
}

function RawLoggedOutDebugBar({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps
InferProps<typeof RawLoggedOutDebugBar.propTypes>): React.ReactElement {
  return (
    <div
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
      // {...otherProps}
    >
      <div className="span-8 md-span-10">User is not logged in</div>

      <React.Suspense fallback="Loading">
        {/* @ts-ignore */}
        <LoginButton
          data={data}
          className="span-4 md-span-4"
        />
      </React.Suspense>
    </div>
  )
}

RawLoggedOutDebugBar.propTypes = {
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

function DebugBar(props) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const resource = useAuthenticationResource(true)

  const data = useLazyLoadQuery(
    QUERY,
    { resource },
    { fetchPolicy: 'store-or-network' },
  ) as DebugBarViewerQuery$data

  return (
    <React.Suspense fallback="Loading">
      {data.viewer ? (
        <RawLoggedInDebugBar
          data={data}
          {...props}
        />
      ) : (
        <RawLoggedOutDebugBar
          data={data}
          {...props}
        />
      )}
    </React.Suspense>
  )
}

export {
  RawLoggedInDebugBar, RawLoggedOutDebugBar,
}

export default withDebug(DebugBar)
