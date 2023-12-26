import { useCallback } from 'react'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'

/**
 * Custom hook to manage fetching of options from a GraphQL query for a field.
 * @param {GraphQLTaggedNode} QUERY - GraphQL query used for fetching options.
 * @param {string} accessor - Key in the GraphQL response containing options data.
 * @param {Function} onSuccess - Callback executed on successful data fetch.
 * @param {Function} onError - Callback executed on fetch error.
 * @param {Object} errorMessages - Object containing error messages for different scenarios.
 */
const useGraphQLFieldOptionsFetcher = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  onSuccess: (options: any) => void,
  onError: (error: string) => void,
  errorMessages: { fetchError: string; responseError: string },
) => {
  const environment = useRelayEnvironment()

  const fetchGraphQLOptionsQuery = useCallback(
    (variables: { [key: string]: any }) => fetchQuery(
      environment, QUERY, variables,
    ).toPromise(),
    [
      environment,
      QUERY,
    ],
  )

  const fetchOptions = useCallback(
    async (variables: { [key: string]: any }) => {
      try {
        const data = await fetchGraphQLOptionsQuery(variables)
        const options = data[accessor]
        if (Array.isArray(options)) {
          onSuccess(options)
          console.log(
            'options', options,
          )
        } else {
          console.error(
            '[useGraphQLFieldOptionsFetcher] Invalid response:',
            data,
          )
          onError(errorMessages.responseError)
        }
      } catch (error) {
        console.error(
          '[useGraphQLFieldOptionsFetcher] Error:', error,
        )
        onError(errorMessages.fetchError)
      }
    },
    [
      onError,
      onSuccess,
      errorMessages,
    ],
  )

  return fetchOptions
}

export default useGraphQLFieldOptionsFetcher
