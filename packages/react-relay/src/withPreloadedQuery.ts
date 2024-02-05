import * as React from 'react'
import {
  useEffect, ElementType, ComponentType,
} from 'react'

import {
  usePreloadedQuery,
  GraphQLTaggedNode,
  PreloadedQuery,
} from 'react-relay/hooks'

interface WithPreloadedQueryOptions {
  accessor?:string;
  callback?:(data: any) => void;
}

interface WithPreloadedQueryProps {
  queryReference:PreloadedQuery<any>;
  QUERY         :GraphQLTaggedNode;
  [key: string] :any; // Additional props
}

/**
 * A Higher-Order Component (HOC) that provides preloaded query data to the wrapped component.
 *
 * @param {ComponentType<any>} Component - The React component to wrap.
 * @param {GraphQLTaggedNode} query - The GraphQL query.
 * @param {WithPreloadedQueryOptions} options - Optional parameters including
 * an accessor and a callback function.
 * @returns A new component that fetches data and renders the WrappedComponent with that data.
 */
const withPreloadedQuery = (
  Component: ComponentType<any>,
  options: WithPreloadedQueryOptions = {},
) => function WithPreloadedQueryComponent({
  queryReference,
  QUERY,
  ...props
}: WithPreloadedQueryProps) {
  const result = usePreloadedQuery(
    QUERY, queryReference,
  )
  const data = options.accessor ? result[options.accessor] : result

  useEffect(
    () => {
      if (options.callback) {
        options.callback(data)
      }
    }, [data],
  )

  return React.createElement(
    Component, {
      data,
      QUERY,
      ...props,
    },
  )
}

export default withPreloadedQuery
