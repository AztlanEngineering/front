import { useContext } from 'react'
import FormContext, { FormContextType } from '../Context.ts'

/**
 * Custom hook for accessing form context values.
 * Utilizes the FormContext created in Context.ts to provide form state and functions.
 * @returns {FormContextType} The current context value of the form.
 */
export default function useForm(): FormContextType {
  return useContext(FormContext)
}
