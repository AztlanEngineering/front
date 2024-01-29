import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { BUILT_IN_HTML_TYPES } from '../../constants.js'

import * as formPropTypes from '../../propTypes.js'

export const propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,

  /** The type of the input */
  type:PropTypes.oneOf(BUILT_IN_HTML_TYPES),

  /**
   * The autoComplete value that the browser should watch for the input <br>
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autoComplete:PropTypes.string.isRequired,

  /** The placeholder text */
  placeholder:PropTypes.string,
}

export type TProps = InferProps<typeof propTypes>
