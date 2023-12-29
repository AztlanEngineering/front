import { fetchQuery } from 'react-relay'
import {
  Environment, GraphQLTaggedNode,
} from 'relay-runtime'
import { MockEnvironment } from 'relay-test-utils'
import { FieldValidator } from 'formik'
import debounce from 'lodash.debounce'

interface ValidatorOptions {
  invalidMessage?:string;
  errorMessage?  :string;
  minLength?     :number;
  debounceWait?  :number;
}

/**
 * Creates a field validator that checks the input value against a GraphQL query.
 *
 * @deprecated There are two limitations to this approach: formik fires the function on every keystroke and it's not possible to read isValidating except for the whole form (no loading state possible).
 * @param relayEnvironment - The Relay environment for executing the query.
 * @param query - The pre-tagged GraphQL query to be executed.
 * @param accessor - The key to access the boolean value in the query response.
 * @param options - Optional settings including messages, minLength, and debounce settings.
 * @returns A Formik field validator function.
 */
export const createGraphQLFieldValidator = (
  relayEnvironment: Environment | MockEnvironment,
  query: GraphQLTaggedNode,
  accessor: string,
  options: ValidatorOptions = {},
): FieldValidator => {
  const {
    invalidMessage = 'The value provided is invalid',
    errorMessage = 'There was an error communicating with the server',
    minLength = 3,
    debounceWait = 300, // default debounce wait time
  } = options

  const validatorFunction = async (value: string) => {
    if (value.length < minLength) {
      // Not enough characters to check against backend
      return undefined // or return a specific "too short" message if desired
    }

    const variables = { value }
    try {
      const data = await fetchQuery(
        relayEnvironment,
        query,
        variables,
      ).toPromise()
      if (typeof data[accessor] === 'boolean') {
        return data[accessor] ? undefined : invalidMessage
      }
      console.error(
        'Returned value is not a boolean:', data[accessor],
      )
      return errorMessage
    } catch (error) {
      console.error(
        'Error fetching data:', error,
      )
      return errorMessage
    }
  }

  return debounce(
    validatorFunction, debounceWait,
  )
}

/**
 * Validates that a value is not empty.
 * @param value - The value to be validated.
 * @returns An error message if validation fails, or undefined if it passes.
 */
export const validateRequired = (value: string): string | undefined => {
  let error: string | undefined
  if (!value) {
    error = 'Required'
  }
  return error
}

/**
 * Validates that a value is a well-formed email address.
 * @param value - The value to be validated as an email.
 * @returns An error message if validation fails, or undefined if it passes.
 */
export const validateEmail = (value: string): string | undefined => {
  let error: string | undefined
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

/**
 * Validates that a value is a well-formed URL.
 * @param value - The value to be validated as a URL.
 * @returns An error message if validation fails, or undefined if it passes.
 */
export const validateURL = (value: string): string | undefined => {
  let error: string | undefined
  if (!value) {
    error = 'Required'
  } else if (
    !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i.test(value)
  ) {
    error = 'Invalid URL'
  }
  return error
}

/**
 * Validates that a value is a well-formed international phone number.
 * @param value - The value to be validated as a phone number.
 * @returns An error message if validation fails, or undefined if it passes.
 */
export const validatePhoneNumber = (value: string): string | undefined => {
  let error: string | undefined
  if (!value) {
    error = 'Required'
  } else if (!/^(\+|00)[1-9]{1}[0-9]{7,14}$/i.test(value)) {
    error = 'Invalid phone number'
  }
  return error
}
