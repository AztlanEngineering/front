/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../hooks/useForm.ts'

const baseClassName = styleNames.base
const componentClassName = styleNames.elementNavigation

/**
 * This is the component description.
 */
function Navigation({
  id,
  className: userClassName,
  style,
  // ...otherProps
}) {
  const {
    setIndex, state,
  } = useForm()

  const {
    sections, currentIndex,
  } = state

  return (
    <nav
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
      <ul>
        {sections.map((
          section, index,
        ) => {
          const payload = section.label
          if (index < currentIndex) {
            return (
              <li
                className={styleNames.modifierPrevious}
                key={payload}
              >
                <button
                  onClick={() => setIndex(index)}
                  type="button"
                >
                  {payload}
                </button>
              </li>
            )
          }
          if (index === currentIndex) {
            return (
              <li
                className={styleNames.modifierActive}
                key={payload}
              >
                {payload}
              </li>
            )
          }
          return (
            <li
              className={styleNames.modifierNext}
              key={payload}
            >
              {payload}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
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

export default React.memo(Navigation)
