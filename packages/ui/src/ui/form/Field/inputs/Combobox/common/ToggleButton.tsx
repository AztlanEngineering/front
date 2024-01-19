/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'reset'

/**
 * A button to clear the current selection.
 * @param {InferProps<typeof ToggleButton.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ToggleButton component
 */
function ToggleButton({
  className: userClassName,
  style,
  getToggleButtonProps,
}: InferProps<typeof ToggleButton.propTypes>): React.ReactElement {
  return (
    <button
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      type="button"
      {...getToggleButtonProps()}
      aria-label="toggle menu"
    >
      &#8595;
    </button>
  )
}

ToggleButton.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The downshift getToggleButtonProps for this element. */
  getToggleButtonProps:PropTypes.func.isRequired,
}

export default React.memo(ToggleButton)
