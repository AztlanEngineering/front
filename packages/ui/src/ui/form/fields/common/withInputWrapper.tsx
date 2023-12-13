import * as React from 'react'
import PropTypes from 'prop-types'

function Wrapper({
  Component,
  label,
  description,
  error,
  spanLabel,
  spanLabelDesktop,
  spanContent,
  spanContentDesktop,
  ...otherProps
}) {
  return (
    <>
      <div>{label && <label>{label}</label>}</div>
      <div>
        <Component {...otherProps} />
      </div>
      {/* Error handling and other common functionalities */}
    </>
  )
}

Wrapper.propTypes = {
  Component: PropTypes.node,
  label: PropTypes.string,
  spanLabel: PropTypes.string,
  spanLabelDesktop: PropTypes.string,
  spanContent: PropTypes.string,
  spanContentDesktop: PropTypes.string,
  // Add other common PropTypes
}

const withInputWrapper = (Component) => function (props) {
  return <Wrapper Component={Component} {...props} />
}

export default withInputWrapper
