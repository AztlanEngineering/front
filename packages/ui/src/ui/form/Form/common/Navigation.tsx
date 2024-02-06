/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { Link } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import useForm from '../hooks/useForm.js'

const baseClassName = styleNames.base
const componentClassName = styleNames.elementNavigation

const propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export type TProps = InferProps<typeof propTypes>
/**
 * This is the component description.
 */
function Navigation({
  id, className: userClassName, style,
}: TProps) {
  const { sectionsState } = useForm()

  const {
    sections, currentIndex, previousLink, nextLink,
  } = sectionsState

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
                <Link to={section.path}>{payload}</Link>
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

Navigation.propTypes = propTypes

export { Navigation }

export default React.memo(Navigation)
