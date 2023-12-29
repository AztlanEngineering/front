/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useFormContext } from 'react-hook-form'

import styleNames from '@aztlan/bem'
import withWrapper from '../../wrapper/withWrapper.tsx'
import { sharedPropTypes } from '../../propTypes.ts'
import useOptionAriaProps from '../../hooks/useOptionAriaProps.ts'

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
        {...register(name)}
        {...ariaProps.input}
        // {...otherProps}
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
  register:PropTypes.func,
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
}: // ...otherProps
InferProps<typeof Choices.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

  const type = multiple ? 'checkbox' : 'radio'

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
      {options.map((option) => (
        <Option
          key={option.value}
          name={name}
          type={type}
          register={register}
          value={option.value}
          label={option.label}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  )
}

Choices.propTypes = {
  ...sharedPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** Whether the input can have multiple values */
  multiple:PropTypes.bool,

  /** Whether the input is disabled */
  disabled:PropTypes.bool,

  /** The choice options */
  options:PropTypes.arrayOf(PropTypes.shape({
    value   :PropTypes.string,
    label   :PropTypes.string,
    disabled:PropTypes.bool,
  }).isRequired),
}

export default withWrapper(
  Choices, { mockLabel: true },
)
