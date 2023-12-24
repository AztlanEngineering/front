/* @aztlan/generator-front 0.6.0 */
import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'

import { useField } from 'formik'

import { Label } from '../Label/index.ts'
import { Description } from '../Description/index.ts'
import { htmlTypes } from '../../../constants.ts'

const span = (
  defaultSpan, desktopSpan,
) => {
  const className = []
  if (defaultSpan) className.push(`span-${defaultSpan}`)
  if (desktopSpan) className.push(`md-span-${desktopSpan}`)
  return className
}

const idPrefix = 'form'

/**
 * This is the component description.
 */
function Wrapper({
  Component,
  name,
  label,
  description,
  optional = false,
  disabled = false,
  validate,
  spanLabel = 8,
  spanLabelDesktop = 6,
  spanContent = 8,
  spanContentDesktop = 8,
  mockLabel = false,
  hookOptions,
  autoComplete,
  ...otherProps
}) {
  const [
    field,
    meta,
  ] = useField({
    name,
    validate,
    ...hookOptions,
  })

  const isError = !!meta.error

  const ariaProps = useMemo(
    () => ({
      field:!mockLabel
        ? {
          id                :`${idPrefix}.${name}`,
          'aria-labelledby' :`${idPrefix}.${name}.label`,
          'aria-describedby':`${idPrefix}.${name}.description${
            isError ? ` ${idPrefix}.${name}.error` : ''
          }`,
        }
        : {
          getOptionInputId  :(option) => `${idPrefix}.${name}-${option.value}`,
          getOptionLabelId  :(option) => `${idPrefix}.${name}-${option.value}.label`,
          'aria-describedby':`${idPrefix}.${name}.description${
            isError ? ` ${idPrefix}.${name}.error` : ''
          }`,
        },
      label      :{ id: `${idPrefix}.${name}.label` },
      description:{ id: `${idPrefix}.${name}.description` },
      state      :{ id: `${idPrefix}.${name}.error` },
    }),
    [
      name,
      isError,
    ],
  )

  const fieldProps = {
    name,
    meta,
    disabled,
    autoComplete,
    ...ariaProps.field,
    ...field,
    ...otherProps,
  }

  const labelProps = {
    name,
    children:label,
    optional,
    ...ariaProps.label,
  }

  const descriptionProps = {
    name,
    children:description,
    ...ariaProps.description,
  }

  const stateProps = {
    name,
    meta,
    ...ariaProps.state,
  }

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
          {...labelProps}
          as={mockLabel ? 'p' : undefined}
        />
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
        {description && <Description {...descriptionProps} />}
        <Component {...fieldProps} />
        {meta.error && meta.touched && <Description {...stateProps} />}
      </div>
      {/* Error handling and other common functionalities */}
    </>
  )
}

Wrapper.propTypes = {
  Component:PropTypes.elementType.isRequired,

  /** Name attribute for the input */
  name:PropTypes.string.isRequired,

  /** Label content for the input, defaults to component name */
  label:PropTypes.string,

  /** Description or additional information below the input */
  description:PropTypes.string,

  /** Whether the input is optional or not */
  optional:PropTypes.bool,

  /** Whether the text input should be disabled */
  disabled:PropTypes.bool,

  /** Validation function for the input, passed to formik `useField` */
  validate:PropTypes.func,

  /** Column span for the label */
  spanLabel:PropTypes.number,

  /** Desktop column span for the label */
  spanLabelDesktop:PropTypes.number,

  /** Column span for the content */
  spanContent:PropTypes.number,

  /** Desktop column span for the content */
  spanContentDesktop:PropTypes.number,

  /** Indicates if a mock label with `<p>` is used,
   * This is useful when the field renders several `<inputs>`
   * and the "real" HTML labels are next to them. */
  mockLabel:PropTypes.bool,

  /** Options that will be passed to the `useField` hook in the wrapper. */
  hookOptions:PropTypes.instanceOf(Object),

  /**
   * The autoComplete value that the browser should watch for the input <br>
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autoComplete:PropTypes.string.isRequired,
}

export default Wrapper
