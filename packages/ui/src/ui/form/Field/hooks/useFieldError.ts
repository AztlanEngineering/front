import { useMemo } from 'react'
import {
  useFormState,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form'

/**
 * Custom hook for accessing the error state of a form field.
 * @param {string} name - The name of the field.
 * @returns {FieldError | Merge<FieldError, FieldErrorsImpl>} - The error state of the field.
 */
function useFieldError(name: string) {
  const { errors } = useFormState({ name })

  const fieldTree = name.split('.')

  const fieldError = useMemo(
    (): FieldError | Merge<FieldError, FieldErrorsImpl> => fieldTree.reduce(
      (
        acc, key,
      ) => {
        if (acc) {
          return acc[key]
        }
        return undefined
      }, errors,
    ),
    [
      errors[fieldTree[0]],
      errors[fieldTree[0]]?.[fieldTree[1]],
      errors[fieldTree[0]]?.[fieldTree[1]]?.[fieldTree[2]],
      name,
    ],
  )
  return fieldError
}

export default useFieldError
