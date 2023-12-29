import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'description'

/**
 * Description component for form fields, displaying either
 * additional information or error messages.
 * @param {InferProps<typeof Description.propTypes>} props - Component props.
 * @returns {React.ReactElement} - Rendered component.
 */
function Description({
  className: userClassName,
  style,
  children,
  isError,
  ...otherProps
}: InferProps<typeof Description.propTypes>): React.ReactElement {
  return (
    <div
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        isError && styleNames.modifierError,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      role={isError ? 'alert' : undefined}
      {...otherProps}
    >
      <p>{children}</p>
    </div>
  )
}

Description.propTypes = {
  /** The HTML class names for this element. */
  className:PropTypes.string,

  /** The React-written, CSS properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX. */
  children:PropTypes.node,

  /** Whether the input is in an error state. */
  isError:PropTypes.bool,
}

export default React.memo(Description)
