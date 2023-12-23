/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../useForm.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'form-menu'

/**
 * This is the component description.
 */
function Menu({
  id,
  className: userClassName,
  style,
  children,
  // ...otherProps
}) {
  const {
    setSectionIndex, state,
  } = useForm()

  const {
    sections, sectionIndex,
  } = state

  return (
    <ul
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
      {sections.map((
        section, index,
      ) => {
        if (index < sectionIndex) {
          return (
            <li className={styleNames.modifierPrevious}>
              <button onClick={() => setSectionIndex(index)}>
                {section.label}
              </button>
            </li>
          )
        }
        if (index === sectionIndex) {
          return <li className={styleNames.modifierActive}>{section.label}</li>
        }
        return <li className={styleNames.modifierNext}>{section.label}</li>
      })}
    </ul>
  )
}

Menu.propTypes = {
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

Menu.defaultProps = {
  // someProp:false
}

export default Menu
