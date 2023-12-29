import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'

type UseGraphQLValidatorOptions = {
  minLength    :number;
  debounceWait :number;
  fetchError   :string;
  responseError:string;
}

/**
 * Custom hook to manage execution and refetching of a GraphQL validation query.
 * @param {GraphQLTaggedNode} QUERY - GraphQL query used for validation.
 * @param {string} accessor - Key in the GraphQL response containing validation data.
 * @param {Function} onSuccess - Callback executed on successful validation.
 * @param {Function} onError - Callback executed on validation error.
 * @param {UseGraphQLValidatorOptions} options - Configuration for the validation.
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
    minLength, debounceWait, fetchError, responseError,
  } = options

  const fetchGraphQLValidationQuery = useCallback(
    (value: string) => fetchQuery(
      environment, QUERY, { value },
    ).toPromise(),
    [
      environment,
      QUERY,
    ],
  )

  const validate = debounce(
    async (value: string) => {
      if (value.length < minLength) {
        return
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
          onError(responseError)
        }
      } catch (error) {
        console.error(
          '[useGraphQLValidator] Error:', error,
        )
        onError(fetchError)
      }
    }, debounceWait,
  )

  return validate
}

export default useGraphQLValidator
