/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { useEffect, useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'
import { useRefetchableFragment, useFragment } from 'react-relay'
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
function ViewerProfile({
  id,
  className: userClassName,
  style,
  children,
  // data,
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])
  const { data } = useViewer()
  const result = useFragment(FRAGMENT, data.viewer)

  console.log('[VPR] : Render', result, data)

  return (
    <div
      id={id}
      className={[baseClassName, componentClassName, userClassName]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {JSON.stringify(result)}
    </div>
  )
}

ViewerProfile.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node,
}

ViewerProfile.defaultProps = {
  // someProp:false
}

ViewerProfile.QUERY = QUERY
ViewerProfile.FRAGMENT = FRAGMENT

export default ViewerProfile