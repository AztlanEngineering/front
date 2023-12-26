import { useCallback } from 'react'
import { useFormikContext } from 'formik'

/**
 * Custom hook to manage registration and cleanup of refetch function in Formik's status.
 * @param {string} name - The name of the field related to the refetch function.
 * @returns {{ registerRefetch: Function, clearRefetch: Function }} Object containing functions to register and clear the refetch function.
 */
const useFieldRefetch = (name: string) => {
  const {
    status, setStatus,
  } = useFormikContext()

  const registerRefetch = useCallback(
    (refetchFn: Function) => {
      if (status?.refetch?.[name] !== refetchFn) {
        setStatus({
          ...status,
          refetch:{
            ...(status?.refetch || {}),
            [name]:refetchFn,
          },
        })
      }
    },
    [
      name,
      status,
      setStatus,
    ],
  )

  const clearRefetch = useCallback(
    () => {
      if (status?.refetch?.[name]) {
        const {
          [name]: omit, ...restRefetch
        } = status.refetch
        setStatus({
          ...status,
          refetch:restRefetch,
        })
      }
    }, [
      name,
      status,
      setStatus,
    ],
  )

  return {
    registerRefetch,
    clearRefetch,
  }
}

export default useFieldRefetch
