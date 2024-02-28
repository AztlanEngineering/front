/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'

import {
  useFragment, graphql,
} from 'react-relay'
import { LoginButtonFragment$data } from './__generated__/LoginButtonFragment.graphql.js'

// Local Definitions
const baseClassName = styleNames.base
const componentClassName = 'login-button'

/**
 * This is the LoginButton component description.
 */
function LoginButton({
  id,
  className: userClassName,
  style,
  FRAGMENT,
  data,
  ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { oAuth2Links } = useFragment(
    FRAGMENT,
    data,
  ) as LoginButtonFragment$data
  const { google } = oAuth2Links

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

export default LoginButton
