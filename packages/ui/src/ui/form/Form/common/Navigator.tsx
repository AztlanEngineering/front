/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import {
  useMemo, useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../useForm.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'navigator'

/**
 * This is the component description.
 */
function Navigator({
  id,
  className: userClassName,
  style,
  children,
  // ...otherProps
}) {
  const {
    state, setNextSectionIndex, setPrevSectionIndex,
  } = useForm()

  const {
    section, isFirstSection, isLastSection,
  } = state

  const displayBack = useMemo(
    () => !isFirstSection && !section.hideBack, [section],
  )

  const displayNext = useMemo(
    () => !isLastSection && !section.hideNext, [section],
  )

  return (
    <div
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
      {displayBack ? (
        <button onClick={setPrevSectionIndex}>Prev</button>
      ) : (
        <span />
      )}
      {displayNext ? (
        <button onClick={setNextSectionIndex}>Next</button>
      ) : (
        <span />
      )}
    </div>
  )
}

Navigator.propTypes = {
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

Navigator.defaultProps = {
  // someProp:false
}

export default React.memo(Navigator)
