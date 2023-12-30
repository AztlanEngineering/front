/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../hooks/useForm.ts'

import { Field } from '../../Field/index.ts'

const baseClassName = styleNames.base
const componentClassName = 'form'

/**
 * A section of a form that renders a set of fields.
 * @param {InferProps<typeof Section.propTypes>} props -
 * @return {React.ReactElement} - The rendered component
 */
function Section({
  id,
  className: userClassName,
  style,
  as: Element = 'div',
  index,
  label,
  description,
  fields,
}: InferProps<typeof Section.propTypes>): React.ReactElement {
  const { sharedFieldProps } = useForm()

  return (
    <Element
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
      {fields.map((fieldProps) => (
        <Field
          key={fieldProps.name}
          {...fieldProps}
          {...sharedFieldProps}
        />
      ))}
    </Element>
  )
}

Section.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The html tag that acts as an input label */
  as:PropTypes.elementType,

  /** The index of the form section */
  index:PropTypes.number.isRequired,

  /** The label of the form section */
  label:PropTypes.string.isRequired,

  /** The description of the form section */
  description:PropTypes.string,

  /** The fields to be rendered */
  fields:PropTypes.arrayOf(PropTypes.shape(Field.propTypes)).isRequired,
}

export default Section
