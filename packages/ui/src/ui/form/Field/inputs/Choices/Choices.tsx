/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { useFormContext } from 'react-hook-form'
import styleNames from '@aztlan/bem'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

import withWrapper from '../../wrapper/withWrapper.js'
import * as formPropTypes from '../../propTypes.js'
import useOptionAriaProps from '../../hooks/useOptionAriaProps.js'

// Local Definitions

const baseClassName = styleNames.base
const componentClassName = 'choices'

function Option({
  name,
  value,
  label,
  disabled,
  type,
  register,
  registerProps,
  // ...otherProps
}) {
  const ariaProps = useOptionAriaProps(
    name, value,
  )
  return (
    <>
      <input
        value={value}
        disabled={disabled || false}
        type={type}
        {...register(
          name, registerProps,
        )}
        {...ariaProps.input}
      />
      <label {...ariaProps.label}>{label}</label>
    </>
  )
}

Option.propTypes = {
  name    :PropTypes.string,
  value   :PropTypes.string,
  label   :PropTypes.string,
  disabled:PropTypes.bool,
  type    :PropTypes.oneOf([
    'checkbox',
    'radio',
  ]),
  register     :PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  registerProps:PropTypes.object,
}

/**
 * This is the component description.
 */
function Choices({
  name,
  className: userClassName,
  style,
  multiple = false,
  disabled,
  options,
  registerProps,
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

  const type = multiple ? 'checkbox' : 'radio'

  return (
    <fieldset
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
    >
      {options.map((option) => (
        <Option
          key={option.value}
          name={name}
          type={type}
          register={register}
          registerProps={registerProps}
          value={option.value}
          label={option.label}
          disabled={disabled || option.disabled}
        />
      ))}
    </fieldset>
  )
}

Choices.propTypes = propTypes

export default withWrapper(
  Choices, { mockLabel: true },
)
