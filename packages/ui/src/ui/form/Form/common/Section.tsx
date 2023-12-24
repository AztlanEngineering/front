/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import { useMemo } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../useForm.ts'

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
  as: Wrapper,
}) {
  const { inputProps } = useForm()

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <div className="container">
        <h2>
          {index + 1}
          .
          {label}
          {' '}
        </h2>
        {description && <p>{description}</p>}
      </div>
      {inputs.map((input) => (
        <FormInput
          {...input}
          {...inputProps}
          key={input.name}
        />
      ))}
    </Wrapper>
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
  as:'fieldset',
  // someProp:false
}

export default Section
