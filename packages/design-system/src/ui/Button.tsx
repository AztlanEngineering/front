import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import styles from '@aztlan/bem/exports.scss'

import { Example } from '@aztlan/react-helpers'

const name = Example

/**
 * Primary UI component for user interaction
 */
export function Button({
  primary, backgroundColor, size, label, ...props
}) {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={[
        'borders',
        'storybook-button',
        `storybook-button--${size}`,
        mode,
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      Hello
      {styles.modifierGhost}
      {' '}
      {name}
      {label}
    </button>
  )
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary        :PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor:PropTypes.string,
  /**
   * How large should the button be?
   */
  size           :PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label          :PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick        :PropTypes.func,
}

Button.defaultProps = {
  backgroundColor:null,
  primary        :false,
  size           :'medium',
  onClick        :undefined,
}
