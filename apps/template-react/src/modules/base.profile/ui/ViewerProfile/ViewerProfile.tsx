/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'
import { useRefetchableFragment, useFragment } from 'react-relay'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'viewer-profile'

const FRAGMENT = graphql`
  fragment ViewerProfileFragment on Query
    @refetchable(queryName: "ViewerProfileRefetchableFragment") {
    viewer {
      firstName
      lastName
      createdAt
      updatedAt
      email
      profilePicture
    }
  }
`
const QUERY = graphql`
  query ViewerProfileQuery {
    ...ViewerProfileFragment
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
  data,
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  const [result, refetch] = useRefetchableFragment(FRAGMENT, data)

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
