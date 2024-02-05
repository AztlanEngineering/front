/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import useForm from '../hooks/useForm.js'
import Section from './Section.js'
import Paginator from './Paginator.js'

const baseClassName = styleNames.base
const componentClassName = 'form-inputs'

const propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export type TProps = InferProps<typeof propTypes>

/**
 * The content of the form that should be displayed. It is a simple wrapper around Section
 * that consumes the Sections api state management.
 * @param {InferProps<typeof Content.propTypes>} props -
 * @return {React.ReactElement} - The rendered component
 */
function Content({
  id,
  className: userClassName,
  style,
}: TProps): React.ReactElement {
  const {
    sectionsState, type: formType,
  } = useForm()

  const {
    currentSection, currentIndex, sections,
  } = sectionsState

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
          <Paginator />
        </>
      )}
    </div>
  )
}

Content.propTypes = propTypes

export { Content }

export default React.memo(Content)
