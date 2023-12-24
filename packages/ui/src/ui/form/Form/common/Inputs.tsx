/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../useForm.ts'
import Section from './Section.tsx'
import Navigator from './Navigator.tsx'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'form-inputs'

/**
 * This is the component description.
 */
function Inputs({
  id,
  className: userClassName,
  style,
  children,
  // ...otherProps
}) {
  const {
    state, type: formType,
  } = useForm()

  const {
    currentSection, currentIndex, sections,
  } = state

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {formType === 'default' ? (
        sections.map((
          section, index,
        ) => (
          <Section
            key={section.label}
            index={index}
            {...section}
          />
        ))
      ) : (
        <>
          <Section
            index={currentIndex}
            {...currentSection}
          />
          <Navigator />
        </>
      )}
    </div>
  )
}

Inputs.propTypes = {
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

Inputs.defaultProps = {
  // someProp:false
}

export default Inputs
