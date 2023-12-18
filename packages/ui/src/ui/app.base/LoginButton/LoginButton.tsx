/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import {
  useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'

import {
  useFragment,
} from 'react-relay'
import {
  graphql,
} from 'relay-runtime'

// Local Definitions
const baseClassName = styleNames.base
const componentClassName = 'login-button'

const FRAGMENT = graphql`
  fragment LoginButtonFragment on Query
    @argumentDefinitions(resource: { type: "String!" }) {
    oAuth2Links(resource: $resource) {
      google
    }
  }
`

const QUERY = graphql`
  query LoginButtonQuery($resource: String!) {
    ...LoginButtonFragment @arguments(resource: $resource)
  }
`

/**
 * This is the LoginButton component description.
 */
function LoginButton({
  id,
  className: userClassName,
  style,
  data,
  ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    oAuth2Links,
  } = useFragment(
    FRAGMENT, data,
  )
  const {
    google,
  } = oAuth2Links

  return (
    <button
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <a href={google}>Login with Google</a>
    </button>
  )
}

LoginButton.propTypes = {
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

LoginButton.defaultProps = {
  // someProp:false
}

LoginButton.FRAGMENT = FRAGMENT
LoginButton.QUERY = QUERY

export default LoginButton
