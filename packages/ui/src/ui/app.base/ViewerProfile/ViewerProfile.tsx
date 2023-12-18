/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import {
  useEffect, useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  useRefetchableFragment, useFragment,
} from 'react-relay'
import { graphql } from 'relay-runtime'
import { useViewer } from '../AuthContextProvider/index.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'viewer-profile'

const FRAGMENT = graphql`
  fragment ViewerProfileFragment on UserNode
    @refetchable(queryName: "ViewerProfileRefetchableFragment") {
    firstName
    lastName
    createdAt
    updatedAt
    email
    profilePicture
  }
`
const QUERY = graphql`
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
  children,
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
    FRAGMENT, data.viewer,
  )

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
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

RawViewerProfile.defaultProps = {
  // someProp:false
}

RawViewerProfile.QUERY = QUERY
RawViewerProfile.FRAGMENT = FRAGMENT

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
