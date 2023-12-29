import {
  useMemo, useCallback,
} from 'react'
import { useFormikContext } from 'formik'

const useFormValidity = (inputs) => {
  const {
    values, errors, touched, setTouched,
  } = useFormikContext()
  let isValid = true

  const state = useMemo(
    () => {
      const fieldsWithErrors = []
      const fieldsToBeTouched = []

      inputs.forEach((input) => {
        const isVisible = !input.condition || input.condition(values)
        const isTouched = touched[input.name]
        const hasError = errors[input.name]

        if (isVisible && !input.optional && (!isTouched || hasError)) {
          isValid = false
          if (hasError) {
            fieldsWithErrors.push(input.name)
          }
          if (!isTouched) {
            fieldsToBeTouched.push(input.name)
          }
        }
      })
      return {
        fieldsToBeTouched,
        fieldsWithErrors,
      }
    }, [
      inputs,
      errors,
      touched,
    ],
  )

  const touchInputs = useCallback(
    () => {
      if (!state.fieldsToBeTouched.length) return
      const touchedUpdates = state.fieldsToBeTouched.reduce(
        (
          acc, fieldName,
        ) => ({
          ...acc,
          [fieldName]:true,
        }),
        {},
      )
      setTouched(touchedUpdates)
    }, [state.fieldsToBeTouched],
  )

  return {
    isValid,
    touchInputs,
    ...state,
  }
}

export default useFormValidity
