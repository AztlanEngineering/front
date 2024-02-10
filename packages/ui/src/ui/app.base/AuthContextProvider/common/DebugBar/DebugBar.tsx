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

import styleNames from '@aztlan/bem'
import {
  DebugBarViewerFragment$data,
  DebugBarViewerFragment$key,
} from './__generated__/DebugBarViewerFragment.graphql.js'
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

/**
 * description
 * @param {InferProps<typeof DebugBar.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DebugBar
 */
function DebugBar({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof DebugBar.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT,
    data.viewer as DebugBarViewerFragment$key,
  ) as DebugBarViewerFragment$data

  const log = useCallback(
    () => {
      console.log(result)
    }, [result],
  )

  const {
    firstName, lastName, email,
  } = result

  const {
    logout, isLogoutInFlight,
  } = useAuth()

  const resource = useAuthenticationResource(true)

  const loginButtonData = useLazyLoadQuery(
    LoginButton.QUERY,
    { resource },
    { fetchPolicy: 'store-or-network' },
  )

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
      {result ? (
        <>
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
        </>
      ) : (
        <>
          <span className="span-4 md-span-2" />
          <React.Suspense fallback="Loading">
            <LoginButton
              data={loginButtonData}
              className="span-4 md-span-2"
            />
          </React.Suspense>
        </>
      )}
    </div>
  )
}

DebugBar.propTypes = {
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

export default DebugBar
