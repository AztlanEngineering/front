import {
  useState, useCallback, useEffect,
} from 'react'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'
import * as messages from '../messages.ts'

// Combined state interface and default messages
export interface UseFetchQueryOptions {
  fetchError?         :string;
  responseError?      :string;
  initialData?        :any;
  variables?          :{ [key: string]: any };
  deriveErrorFromData?:(data: any) => string | null;
}

/**
 * Custom hook for performing a GraphQL fetch with Relay.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query.
 * @param {string} accessor - Accessor to the result data.
 * @param {FetchOptions} options - Options for the fetch including error handling and variables.
 * @returns {Object} - An object containing the fetched data, loading state, and any error.
 */
const useFetchQuery = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: UseFetchQueryOptions = {},
) => {
  const {
    fetchError = messages.fetchError(),
    responseError = messages.responseError(),
    deriveErrorFromData = () => null,
  } = options

  const environment = useRelayEnvironment()

  const [
    state,
    setState,
  ] = useState({
    data   :options.initialData,
    loading:false,
    error  :null as string | null,
  })

  const fetchData = useCallback(
    async (overrideVariables: { [key: string]: any } = {}) => {
      setState((prev) => ({
        ...prev,
        loading:true,
      }))
      try {
        const variables = {
          ...options.variables,
          ...overrideVariables,
        }
        const response = await fetchQuery(
          environment,
          QUERY,
          variables,
        ).toPromise()
        const result = response[accessor]
        if (result === undefined) {
          setState({
            data   :null,
            loading:false,
            error  :responseError,
          })
        } else {
          setState({
            data   :result,
            loading:false,
            error  :deriveErrorFromData(result),
          })
        }
      } catch (err) {
        setState({
          data   :null,
          loading:false,
          error  :fetchError,
        })
      }
    },
    [
      QUERY,
      accessor,
      environment,
      options,
    ],
  )

  // Cleanup function for the hook
  useEffect(
    () => () => {
      /* any clean up logic here */
    },
    [],
  )

  return {
    ...state,
    fetchData,
  }
}

export default useFetchQuery
