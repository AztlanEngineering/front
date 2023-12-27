import { useCallback } from 'react'
import { useFormikContext } from 'formik'
import { rerenderAllowedStatusKey as statusKey } from '../constants.ts'

/**
 * Custom hook to manage registration and cleanup of refetch function in Formik's status.
 * @param {string} name - The name of the field related to the refetch function.
 * @returns {{ registerRefetch: Function, clearRefetch: Function }} Object containing
 * functions to register and clear the refetch function.
 */
const useFieldRefetch = (name: string) => {
  const {
    status, setStatus,
  } = useFormikContext()

  const registerRefetch = useCallback(
    () => {
      if (!status?.[statusKey]?.[name] === true) {
        setStatus({
          ...status,
          [statusKey]:{
            ...(status?.[statusKey] || {}),
            [name]:true,
          },
        })
      }
    }, [
      name,
      status,
      setStatus,
    ],
  )

  const clearRefetch = useCallback(
    () => {
      if (status?.[statusKey]?.[name]) {
        const {
          [name]: omit, ...restRefetch
        } = status[statusKey]
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
