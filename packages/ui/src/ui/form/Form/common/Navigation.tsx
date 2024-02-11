/* @aztlan/generator-front 1.1.4 */
import * as React from 'react'
import { useMemo } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { SequentialNavigation } from '../../../common/Navigation/index.js'

import {
  useForm, useFieldsValidity,
} from '../hooks/index.js'

/**
 * description
 * @param {InferProps<typeof Navigation.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Navigation
 */

/*
function FormNavigationHeader(props) {
  // const { previous, next, currentContent: content, fixed, } = useContext(Context)

  return (
    <SequentialNavigation.Header
      previous={previous}
      next={next}
      content={content}
      {...props}
    />
  )
}

function FormNavigationFooter(props) {
  // const { currentContent: content, next, fixed, } = useContext(Context)
  return (
    <SequentialNavigation.Footer
      content={content}
      next={next}
      {...props}
    />
  )
} */

/*
function FormNavigationVerticalMenu(props) {
  // const { items, currentIndex, menuLabel, } = useContext(Context)

  return (
    <SequentialNavigation.VerticalMenu
      items={items}
      currentIndex={currentIndex}
      label={menuLabel}
      {...props}
    />
  )
}
   */

function FormNavigation({
  children,
  ...props
}: InferProps<typeof FormNavigation.propTypes>): React.ReactElement {
  const {
    sectionsState, sectionsMethods,
  } = useForm()

  const {
    sections, previousLink, nextLink,
  } = sectionsState

  const items = useMemo(
    () => sections.map((section) => ({
      label   :section.label,
      url     :section.path,
      disabled:section.disabled,
    })),
    [sections],
  )

  const {
    currentSection, isLast, isFirst,
  } = sectionsState

  const {
    setNext, setPrevious,
  } = sectionsMethods

  const {
    validateFields, isValid: isFormSectionValid,
  } = useFieldsValidity(currentSection.fields)

  const showPreviousButton = useMemo(
    () => !isFirst && !currentSection.hideBack,
    [currentSection],
  )

  const showNextButton = useMemo(
    () => !currentSection.hideNext, [currentSection],
  )

  const submit = useMemo(
    () => React.createElement(
      'button', { type: 'submit' }, 'Submit',
    ),
    [],
  )

  const handlerNext = async (e) => {
    const valid = await validateFields()
    if (valid) {
      setNext()
    }
  }

  return (
    <SequentialNavigation
      {...props}
      items={items}
      handlerNext={handlerNext}
      handlerPrevious={setPrevious}
      hidePreviousButton={!showPreviousButton}
      hideNextButton={!showNextButton}
      submit={submit}
    >
      {children}
    </SequentialNavigation>
  )
}

FormNavigation.propTypes = {
  /* The children of the FormNavigation */
  children:PropTypes.node.isRequired,
}

FormNavigation.Header = SequentialNavigation.Header
FormNavigation.Footer = SequentialNavigation.Footer
FormNavigation.VerticalMenu = SequentialNavigation.VerticalMenu
FormNavigation.Paginator = SequentialNavigation.Paginator

export default FormNavigation
