import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  useFormState, RegisterOptions,
} from 'react-hook-form'
import Label from './Label.tsx'
import Description from './Description.tsx'
import useFieldAriaProps from '../hooks/useFieldAriaProps.ts'
import { WrapperPropTypes } from '../propTypes.ts'
import * as messages from '../../messages.ts'

/**
 * Constructs a className string based on column span parameters.
 * @param {number} defaultSpan - The column span for mobile and general view.
 * @param {number | undefied} desktopSpan - The column span for desktop view.
 * @returns {string[]} An array of className strings.
 */
const span = (
  defaultSpan: number,
  desktopSpan: number | null = null,
): string[] => {
  const className: string[] = [`span-${defaultSpan}`]
  if (desktopSpan) className.push(`md-span-${desktopSpan}`)
  return className
}

/**
 * The Wrapper component is a flexible container
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
 * @param {InferProps<typeof Wrapper.propTypes>} props - Component props including the
 * Component to wrap, label props
 * description props, span props, etc...
 * @returns {React.ReactElement} - Rendered Wrapper component
 */

function Wrapper({
  Component,
  label,
  name,
  description,
  optional,
  spanLabel = 8,
  spanLabelDesktop = 6,
  spanContent = 8,
  spanContentDesktop = 8,
  mockLabel = false,
  registerProps: userRegisterProps = {},
  ...otherProps
}: InferProps<typeof Wrapper.propTypes>) {
  // const { register } = useFormContext()
  const { errors } = useFormState()
  const isError = !!errors[name]
  const ariaProps = useFieldAriaProps(
    name, isError,
  )

  // Todo if !optional add generic required validation to registerprops

  const registerProps = useMemo(
    () => {
      const props: RegisterOptions = {}
      if (!optional) {
        props.required = {
          value  :true,
          message:messages.required(name),
        }
      }
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
    <>
      <div
        className={[
          ...span(
            spanLabel, spanLabelDesktop,
          ),
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Label
          name={name}
          optional={optional}
          as={mockLabel ? 'legend' : undefined}
          {...ariaProps.label}
        >
          {label}
        </Label>
      </div>
      <div
        className={[
          ...span(
            spanContent, spanContentDesktop,
          ),
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Component
          name={name}
          registerProps={registerProps}
          {...ariaProps.input}
          {...otherProps}
        />
        {description && (
          <Description {...ariaProps.description}>{description}</Description>
        )}
        {isError && (
          <Description
            {...ariaProps.error}
            isError
          >
            {errors[name]?.message.toString()}
          </Description>
        )}
      </div>
    </>
  )
}

Wrapper.propTypes = {
  ...WrapperPropTypes,

  /** The front Component for the field */
  Component:PropTypes.elementType.isRequired,

  /** Indicates if a mock label with `<legend>` is used,
   * This is useful when the field renders several `<inputs>`
   * and the "real" HTML labels are next to them. */
  mockLabel:PropTypes.bool,
}

export default Wrapper
