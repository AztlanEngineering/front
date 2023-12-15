import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'
import { Label } from './Label/index.ts'
import { Description } from './Description/index.ts'

const span = (defaultSpan, desktopSpan) => {
  const className = []
  if (defaultSpan) className.push(`span-${defaultSpan}`)
  if (desktopSpan) className.push(`md-span-${desktopSpan}`)
  return className
}

const idPrefix = 'form'

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
  ...otherProps
}) {
  const [field, meta] = useField({ name, validate })

  const isError = !!meta.error

  const ariaProps = useMemo(
    () => ({
      field: {
        id: `${idPrefix}.${name}`,
        'aria-labelledby': `${idPrefix}.${name}.label`,
        'aria-describedby': `${idPrefix}.${name}.description${
          isError ? ` ${idPrefix}.${name}.error` : ''
        }`,
      },
      label: {
        id: `${idPrefix}.${name}.label`,
      },
      description: {
        id: `${idPrefix}.${name}.description`,
      },
      state: {
        id: `${idPrefix}.${name}.error`,
      },
    }),
    [name, isError],
  )

  const fieldProps = {
    name,
    // optional,
    type: inputType,
    // validate,
    meta,
    ...ariaProps.field,
    ...field,
    ...otherProps,
  }

  const labelProps = {
    name,
    children: label,
    optional,
    ...ariaProps.label,
  }

  const descriptionProps = {
    name,
    children: description,
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
        className={[...span(spanLabel, spanLabelDesktop)]
          .filter(Boolean)
          .join(' ')}
      >
        <Label {...labelProps} as={mockLabel ? 'p' : undefined} />
      </div>
      <div
        className={[...span(spanContent, spanContentDesktop)]
          .filter(Boolean)
          .join(' ')}
      >
        {description && <Description {...descriptionProps} />}
        <Component {...fieldProps} />
        {meta.error && <Description {...stateProps} />}
      </div>
      {/* Error handling and other common functionalities */}
    </>
  )
}

Wrapper.propTypes = {
  Component: PropTypes.elementType.isRequired,
  label: PropTypes.string,
  spanLabel: PropTypes.number,
  spanLabelDesktop: PropTypes.number,
  spanContent: PropTypes.number,
  spanContentDesktop: PropTypes.number,
  // Add other common PropTypes
}

Wrapper.defaultProps = {
  spanLabel: 8,
  spanLabelDesktop: 8,
  spanContent: 8,
  spanContentDesktop: 9,
  mockLabel: false,
}

const areEqual = (prevProps, nextProps) => {
  if (prevProps.value !== nextProps.value) {
    return false
  }
  if (prevProps.meta !== nextProps.meta) {
    return false
  }
  return true
}

const withInputWrapper = (Component) => function (props) {
  return (
    <Wrapper
      Component={
          React.memo(Component, areEqual)
          // Component
        }
      {...props}
    />
  )
} // TODO add react memp

export default withInputWrapper
