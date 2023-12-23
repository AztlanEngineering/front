/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'

import { FormInput } from '../../FormInput/index.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'form'

/**
 * This is the component description.
 */
function Section({
  id,
  className: userClassName,
  style,
  children,
  index,
  label,
  description,
  inputs,
}) {
  //
  return (
    <fieldset
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <h2>
        {index + 1}
        .
        {label}
        {' '}
      </h2>
      {description && <p>{description}</p>}
      {inputs.map((input) => (
        <FormInput
          {...input}
          key={input.name}
        />
      ))}
    </fieldset>
  )
}

Section.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

Section.defaultProps = {
  // someProp:false
}

export default Section
