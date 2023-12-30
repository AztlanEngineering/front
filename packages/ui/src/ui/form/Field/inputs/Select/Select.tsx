/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

// import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useFormContext } from 'react-hook-form'

// @ts-ignore
import styleNames from '@aztlan/bem'
import withWrapper from '../../wrapper/withWrapper.tsx'
import * as formPropTypes from '../../propTypes.ts'

const baseClassName = styleNames.base

const componentClassName = 'select'

/**
 *
 * @param {InferProps<typeof Select.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Select({
  className: userClassName,
  style,
  name,
  options,
  registerProps,
  ...otherProps
}: InferProps<typeof Select.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

  return (
    <div
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
    >
      <select
        {...register(
          name, registerProps,
        )}
        {...otherProps}
      >
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option?.disabled || false}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,
}

export default withWrapper(Select)
