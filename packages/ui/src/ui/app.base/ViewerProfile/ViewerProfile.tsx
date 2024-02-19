/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useViewer } from '../Authentication/index.js'
import { ViewerProfileFragment$key } from './__generated__/ViewerProfileFragment.graphql.js'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'viewer-profile'

const DEFAULT_FRAGMENT = graphql`
  fragment ViewerProfileFragment on UserNode
    @refetchable(queryName: "ViewerProfileRefetchableFragment") {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
`
const DEFAULT_QUERY = graphql`
  query ViewerProfileQuery {
    viewer {
      ...ViewerProfileFragment
    }
  }
`

/**
 * This is the component description.
 */
function RawViewerProfile({
  id,
  className: userClassName,
  style,
  FRAGMENT = DEFAULT_FRAGMENT,
  data,
  // ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const result = useFragment(
    FRAGMENT,
    data.viewer,
  ) as ViewerProfileFragment$key

  return (
    <div
      id={id}
      className={[
        'grid container',
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {result
        && Object.keys(result).map((k) => (
          <>
            <div className="span-3">
              <h2>{k}</h2>
            </div>
            <div className="span-5">
              <p>{result[k]}</p>
            </div>
          </>
        ))}
    </div>
  )
}

RawViewerProfile.propTypes = {
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

  /** The fragment for this component */
  FRAGMENT:PropTypes.any,
}

RawViewerProfile.QUERY = DEFAULT_QUERY
RawViewerProfile.FRAGMENT = DEFAULT_FRAGMENT

function ViewerProfile(props) {
  const { data } = useViewer()
  return (
    <RawViewerProfile
      data={data}
      {...props}
    />
  )
}

export { RawViewerProfile }

export default ViewerProfile
