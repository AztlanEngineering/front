/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'

import { useFormContext } from 'react-hook-form'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

import withWrapper from '../../wrapper/withWrapper.js'
import InvisibleWrapper from '../../wrapper/InvisibleWrapper.js'

/**
 *
 * @param {InferProps<typeof Hidden.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Hidden
 */
function Hidden({
  name,
  registerProps,
  // ...otherProps
}: TProps): React.ReactElement {
  const { register } = useFormContext()

  return (
    <input
      type="hidden"
      {...register(
        name, registerProps,
      )}
      // {...otherProps}
    />
  )
}

Hidden.propTypes = propTypes

export default withWrapper(
  Hidden, {}, InvisibleWrapper,
)
