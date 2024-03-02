// useFormValidity.js
import {
  useMemo, useCallback, useState, useEffect,
} from 'react'
import {
  useFormContext, useWatch,
} from 'react-hook-form'

interface MemoizedState {
  fieldsToBeTouched:string[];
  fieldsWithErrors :string[];
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
    formState, trigger, watch,
  } = useFormContext()

  const {
    errors, touchedFields,
  } = formState

  const [
    isValid,
    setIsValid,
  ] = useState(true)

  const fieldInfo = useMemo(
    () => fields.reduce(
      (
        a, field,
      ) => {
        let isVisible
        if (field.condition) {
          const watchedValues = watch(field.condition[0])
          isVisible = field.condition[1](watchedValues)
        } else {
          isVisible = true
        }
        const isRequired = field.type !== 'hidden' && !field.optional
        const isTouched = touchedFields[field.name]
        const isDisabled = field.disabled
        const hasError = errors[field.name]

        if (isVisible && isRequired && !isDisabled) {
          a.fieldsToBeValidated.push(field.name)
          if (hasError) {
            a.fieldsWithErrors.push(field.name)
          }
          if (!isTouched) {
            a.fieldsToBeTouched.push(field.name)
          }
        }
        return a
      },
      {
        fieldsWithErrors   :[],
        fieldsToBeTouched  :[],
        fieldsToBeValidated:[],
      },
    ),
    [
      formState,
      fields,
      touchedFields,
      errors,
    ],
  )

  useEffect(
    () => {
      if (fieldInfo.fieldsToBeValidated.length) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }, [
      fieldInfo.fieldsWithErrors,
      setIsValid,
    ],
  )

  const validateFields = useCallback(
    (): Promise<boolean | null> => {
      if (fieldInfo.fieldsToBeValidated.length) {
        return trigger(
          fieldInfo.fieldsToBeValidated, { shouldFocus },
        )
      }
      return Promise.resolve(null)
    }, [
      fieldInfo.fieldsToBeValidated,
      formState,
      trigger,
    ],
  )

  return {
    isValid,
    validateFields,
    ...fieldInfo,
  }
}

export default useFormValidity
