/* @aztlan/generator-front 0.6.0 */
import * as React from 'react'
import {
  useMemo,
} from 'react'
import * as PropTypes from 'prop-types'

import {
  useField,
} from 'formik'

import {
  Label,
} from '../Label/index.ts'
import {
  Description,
} from '../Description/index.ts'
import Debugger from './Debugger.ts'
import {
  htmlTypes,
} from '../../../constants.ts'

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
  label,
  description,
  error,
  name,
  optional,
  validate,
  type: inputType,
  spanLabel,
  spanLabelDesktop,
  spanContent,
  spanContentDesktop,
  mockLabel,
  debug, // TODO TEMP, will be moved to the Form
  hookOptions,
  ...otherProps
}) {
  const [field, meta] = useField({
    name,
    validate,
    ...hookOptions,
  })

  const isError = !!meta.error

  const ariaProps = useMemo(
    () => ({
      field:{
        id                :`${idPrefix}.${name}`,
        'aria-labelledby' :`${idPrefix}.${name}.label`,
        'aria-describedby':`${idPrefix}.${name}.description${
          isError ? ` ${idPrefix}.${name}.error` : ''
        }`,
      },
      label:{
        id:`${idPrefix}.${name}.label`,
      },
      description:{
        id:`${idPrefix}.${name}.description`,
      },
      state:{
        id:`${idPrefix}.${name}.error`,
      },
    }),
    [name, isError],
  )

  const fieldProps = {
    name,
    // optional,
    type:inputType, // This means the props need to be spread first ! Otherwise type:undefined will override children
    // validate,
    meta,
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
        <Label {...labelProps} as={mockLabel ? 'p' : undefined} />
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
        {meta.error && <Description {...stateProps} />}
        {debug && <Debugger />}
      </div>
      {/* Error handling and other common functionalities */}
    </>
  )
}

Wrapper.propTypes = {
  Component         :PropTypes.elementType.isRequired,
  label             :PropTypes.string,
  spanLabel         :PropTypes.number,
  spanLabelDesktop  :PropTypes.number,
  spanContent       :PropTypes.number,
  spanContentDesktop:PropTypes.number,
  // Add other common PropTypes
}

Wrapper.defaultProps = {
  spanLabel         :8,
  spanLabelDesktop  :8,
  spanContent       :8,
  spanContentDesktop:9,
  mockLabel         :false,
  hookOptions       :{},
}

export default Wrapper