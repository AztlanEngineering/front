/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import { useMemo } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  useForm, useFieldsValidity,
} from '../hooks/index.js'
import * as messages from '../../messages.js'

const baseClassName = styleNames.base
const componentClassName = 'paginator'

/**
 * A simple paginator to navigate between form sections.
 * @param {InferProps<typeof Paginator.propTypes>} props -
 * @return {React.ReactElement} - The rendered component
 */
function Paginator({
  id,
  className: userClassName,
  style,
}: InferProps<typeof Paginator.propTypes>): React.ReactElement {
  const {
    sectionsState, sectionsMethods,
  } = useForm()

  const {
    setNext, setPrevious,
  } = sectionsMethods

  const {
    currentSection, isFirst, isLast,
  } = sectionsState

  const displayBack = useMemo(
    () => !isFirst && !currentSection.hideBack, [currentSection],
  )

  const displayNext = useMemo(
    () => !isLast && !currentSection.hideNext, [currentSection],
  )

  const {
    validateFields, isValid: isFormSectionValid,
  } = useFieldsValidity(currentSection.fields)

  const onClickNext = () => {
    if (isFormSectionValid) {
      setNext()
    } else {
      validateFields()
    }
  }

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {displayBack ? (
        <button
          onClick={setPrevious}
          type="button"
        >
          {messages.back()}
        </button>
      ) : (
        <span />
      )}
      {displayNext ? (
        <button
          onClick={onClickNext}
          type="button"
        >
          {messages.next()}
        </button>
      ) : (
        <span />
      )}
    </div>
  )
}

Paginator.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export default React.memo(Paginator)
