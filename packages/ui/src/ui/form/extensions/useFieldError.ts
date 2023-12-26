import { useCallback } from 'react'
import { useFormikContext } from 'formik'
import useFieldRefetch from './useFieldRefetch.ts' // Make sure path is correct

/**
 * Custom hook to manage setting and clearing error for a field in Formik's context,
 * including handling the registration and cleanup of the refetch function.
 * @param {string} name - The name of the field.
 * @returns {Function} A function to set or clear the error for the field.
 */
const useFieldError = (name: string) => {
  const {
    errors, setFieldError,
  } = useFormikContext()

  const {
    registerRefetch, clearRefetch,
  } = useFieldRefetch(name)

  const setError = useCallback(
    (
      error: string | undefined, refetchRef?: React.RefObject<Function>,
    ) => {
      if (error !== errors[name]) {
        setFieldError(
          name, error,
        )
        if (error && refetchRef?.current) {
          registerRefetch(refetchRef.current)
        } else if (!error) {
          clearRefetch()
        }
      }
    },
    [
      name,
      errors,
      setFieldError,
      registerRefetch,
      clearRefetch,
    ],
  )

  return setError
}

export default useFieldError
