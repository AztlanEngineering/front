import {
  fetchQuery,
  useRelayEnvironment,
  GraphQLTaggedNode,
} from 'react-relay'

function usePrefetchQuery(): (
  QUERY: GraphQLTaggedNode,
  variables: Record<string, any>
) => Promise<any> {
  const environment = useRelayEnvironment()
  return (
    QUERY, variables,
  ) => fetchQuery(
    environment, QUERY, variables,
  ).toPromise()
}

export default usePrefetchQuery
