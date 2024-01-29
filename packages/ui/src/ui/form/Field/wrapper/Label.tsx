import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import * as messages from '../../messages.js'

/**
 * Label component for form inputs, supporting optional styling and custom HTML tags.
 * @param {InferProps<typeof Label.propTypes>} props - Component props including
 * children, style, and optional flag.
 * @returns {React.ReactElement} - Rendered Label component.
 */
function Label({
  className: userClassName,
  style,
  children,
  name,
  optional = false,
  as: Element = 'label',
  ...otherProps
}: InferProps<typeof Label.propTypes>) {
  return (
    <Element
      htmlFor={Element === 'label' ? `form-${name}` : undefined}
      className={[
        styleNames.base,
        'label',
        userClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      {children || name}
      {optional && (
      <span>
        {' '}
        (
        {messages.optional()}
        )
      </span>
      )}
    </Element>
  )
}

Label.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The html tag that acts as an input label */
  as:PropTypes.elementType,

  /** The name of the input */
  name:PropTypes.string,

  /** Whether the input should have an optional tag */
  optional:PropTypes.bool,
}

export default React.memo(Label)
