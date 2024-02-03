// withPreloadedQuery.tsx
import React, { ElementType } from 'react'
import {
  usePreloadedQuery,
  GraphQLTaggedNode,
  PreloadedQuery,
} from 'react-relay/hooks'

/**
 * Type definitions for the HOC inputs
 */
interface WithPreloadedQueryOptions {
  WrappedComponent:ElementType;
  QUERY           :GraphQLTaggedNode;
  accessor?       :string;
}

/**
 * Type definition for the props expected by the HOC returned component
 */
interface WithPreloadedQueryProps {
  queryRef     :PreloadedQuery<any>;
  [key: string]:any; // Additional props
}

/**
 * A Higher-Order Component (HOC) that provides preloaded query data to the wrapped component.
 *
 * @param {ElementType} WrappedComponent - The React component to wrap.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query.
 * @returns A new component that fetches data and renders the WrappedComponent with that data.
 */
function withPreloadedQuery({
  WrappedComponent,
  QUERY,
  accessor,
}: WithPreloadedQueryOptions) {
  return function ComponentWithPreloadedQuery(props: WithPreloadedQueryProps) {
    const {
      queryRef, ...otherProps
    } = props
    const result = usePreloadedQuery(
      QUERY, queryRef,
    )
    const data = accessor ? result[accessor] : result

    // Use React.createElement instead of JSX
    return React.createElement(
      WrappedComponent, {
        data,
        ...otherProps,
      },
    )
  }
}

export default withPreloadedQuery
