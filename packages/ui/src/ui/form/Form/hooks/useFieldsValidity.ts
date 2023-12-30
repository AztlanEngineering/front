// useFormValidity.ts
import {
  useMemo, useCallback,
} from 'react'
import { useFormContext } from 'react-hook-form'

interface MemoizedState {
  fieldsToBeValidated:string[];
  fieldsWithErrors   :string[];
}

export interface UseFormValidityReturnType extends MemoizedState {
  isValid       :boolean;
  validateFields:() => Promise<null | boolean>;
}

/**
 * Custom hook to manage form field validity and perform validations using react-hook-form.
 * @param {Array} fields - Array of field configurations.
 * @returns {Object} Object containing validity state and a function to validate fields.
 */
const useFormValidity = (
  fields: any[],
  shouldFocus: boolean = true,
): UseFormValidityReturnType => {
  const {
    formState, trigger,
  } = useFormContext()

  const {
    errors, touchedFields,
  } = formState

  let isValid = true

  const state = useMemo(
    (): MemoizedState => {
      const fieldsWithErrors: string[] = []
      const fieldsToBeValidated: string[] = []

      fields.forEach((field) => {
        const isVisible = true // TODO !field.condition || field.condition();
        const isRequired = !field.optional
        const isTouched = touchedFields[field.name]
        const hasError = errors[field.name]

        if (isVisible && isRequired && (!isTouched || hasError)) {
          if (hasError) {
            fieldsWithErrors.push(field.name)
          }
          if (!isTouched) {
            fieldsToBeValidated.push(field.name)
          }
          isValid = false
        }
      })

      return {
        fieldsToBeValidated,
        fieldsWithErrors,
      }
    }, [
      fields,
      formState,
    ],
  )

  const validateFields = useCallback(
    (): Promise<null | boolean> => {
      if (!state.fieldsToBeValidated.length) return Promise.resolve(true)
      return trigger(
        state.fieldsToBeValidated, { shouldFocus },
      )
    }, [
      formState,
      trigger,
    ],
  )

  return {
    isValid,
    validateFields,
    ...state,
  }
}

export default useFormValidity
