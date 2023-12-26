import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'

type UseGraphQLValidatorOptions = {
  minLength   :number;
  debounceWait:number;
}

/**
 * Custom hook to manage execution and refetching of a GraphQL validation query.
 * @param QUERY {GraphQLTaggedNode} - GraphQL query used for validation.
 * @param accessor {string} - Key in the GraphQL response containing validation data.
 * @param onSuccess {Function} - Callback executed on successful validation.
 * @param onError {Function} - Callback executed on validation error.
 * @param options {UseGraphQLValidatorOptions} - Configuration for the validation.
 * @returns {Function} - A callback function to trigger the validation.
 */
const useGraphQLValidator = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  onSuccess: (isValid: boolean) => void,
  onError: (error: string) => void,
  options: UseGraphQLValidatorOptions,
) => {
  const environment = useRelayEnvironment()
  const {
    minLength, debounceWait,
  } = options

  const fetchGraphQLValidationQuery = useCallback(
    (value) => fetchQuery(
      environment, QUERY, { value },
    ).toPromise(),
    [
      environment,
      QUERY,
    ],
  )

  const validate = debounce(
    async (value) => {
      console.log(
        'validating, db', value,
      )
      if (value.length < minLength) {
        return // Do not validate if value is shorter than minLength
      }
      try {
        const data = await fetchGraphQLValidationQuery(value)
        const isValid = data[accessor]
        if (typeof isValid === 'boolean') {
          onSuccess(isValid)
        } else {
          console.error(
            '[useGraphQLValidator] Invalid response:', data,
          )
          onError('Invalid response from server')
        }
      } catch (error) {
        console.error(
          '[useGraphQLValidator] Error:', error,
        )
        onError('Error during validation')
      }
    }, debounceWait,
  )

  return validate
}

export default useGraphQLValidator
