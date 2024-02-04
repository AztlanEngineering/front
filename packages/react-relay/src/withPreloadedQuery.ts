import React, { ElementType } from 'react'
import {
  usePreloadedQuery,
  GraphQLTaggedNode,
  PreloadedQuery,
} from 'react-relay/hooks'

/**
 * Type definition for the props expected by the HOC returned component
 */
interface WithPreloadedQueryProps {
  queryReference:PreloadedQuery<any>;
  [key: string] :any; // Additional props
}

/**
 * A Higher-Order Component (HOC) that provides preloaded query data to the wrapped component.
 *
 * @param {ElementType} WrappedComponent - The React component to wrap.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query.
 * @returns A new component that fetches data and renders the WrappedComponent with that data.
 */
const withPreloadedQuery = (
  Component: ElementType,
  query: GraphQLTaggedNode,
  accessor?: string,
) => function ({
  queryReference, ...props
}: WithPreloadedQueryProps) {
  const result = usePreloadedQuery(
    query, queryReference,
  )

  const data = accessor ? result[accessor] : result

  return React.createElement(
    Component, {
      data,
      QUERY:query,
      ...props,
    },
  )
}

export default withPreloadedQuery
