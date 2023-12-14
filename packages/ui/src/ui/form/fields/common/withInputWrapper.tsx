import * as React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Label } from './Label/index.ts'

const span = (defaultSpan, desktopSpan) => {
  const className = []
  if (defaultSpan) className.push(`span-${defaultSpan}`)
  if (desktopSpan) className.push(`md-span-${desktopSpan}`)
  return className
}

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
  ...otherProps
}) {
  const [field] = useField({ name, validate })
  const fieldProps = {
    name,
    optional,
    type: inputType,
    validate,
    ...field,
    ...otherProps,
  }
  const labelProps = {
    name,
    children: label,
    optional,
  }
  return (
    <>
      <div
        className={[...span(spanLabel, spanLabelDesktop)]
          .filter(Boolean)
          .join(' ')}
      >
        <Label {...labelProps} />
      </div>
      <div
        className={[...span(spanContent, spanContentDesktop)]
          .filter(Boolean)
          .join(' ')}
      >
        <Component {...fieldProps} />
      </div>
      {/* Error handling and other common functionalities */}
    </>
  )
}

Wrapper.propTypes = {
  Component: PropTypes.node,
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
}

const areEqual = (prevProps, nextProps) => prevProps.value === nextProps.value

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
