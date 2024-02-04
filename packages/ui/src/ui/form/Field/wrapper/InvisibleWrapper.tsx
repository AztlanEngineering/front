import * as React from 'react'
import { useMemo } from 'react'
import {
  useFormState, RegisterOptions,
} from 'react-hook-form'
import { InvisibleWrapperPropTypes } from './types.js'
import type { TInvisibleWrapperProps } from './types.js'

import useFieldAriaProps from '../hooks/useFieldAriaProps.js'

const defaultObject = {}

/**
 * The InvisibleWrapper component is a flexible container
 * for form elements, providing consistent
 * layout and accessibility features.
 * It wraps a specified input component,
 * supplementing it with a label, optional description, or error message.
 * This component supports dynamic layout
 * adjustments for responsive designs and integrates ARIA attributes
 * for enhanced accessibility.
 * Additional features include customizable autoComplete settings and an option for a mock label,
 * making it adaptable to various scenarios.
 *
 * @param {InferProps<typeof InvisibleWrapper.propTypes>} props - Component props including the
 * Component to wrap, label props
 * description props, span props, etc...
 * @returns {React.ReactElement} - Rendered InvisibleWrapper component
 */
function InvisibleWrapper({
  Component,
  label,
  name,
  description,
  optional,
  registerProps: userRegisterProps = defaultObject,
  ...otherProps
}: TInvisibleWrapperProps): React.ReactElement {
  // const { register } = useFormContext()
  // const { errors } = useFormState({ name })
  // const isError = !!errors[name]

  const registerProps = useMemo(
    () => {
      const props: RegisterOptions = {}
      /*
      if ((otherProps?.type !== 'hidden') && !optional) {
        props.required = {
          value  :true,
          message:messages.required(name),
        }
      } */
      return {
        ...props,
        ...userRegisterProps,
      }
    }, [
      name,
      userRegisterProps,
      optional,
    ],
  )

  return (
    <Component
      name={name}
      registerProps={registerProps}
      {...otherProps}
    />
  )
}

InvisibleWrapper.propTypes = InvisibleWrapperPropTypes

export default InvisibleWrapper
