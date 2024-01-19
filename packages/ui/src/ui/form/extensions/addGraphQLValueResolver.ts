import * as React from 'react'
import {
  useCallback, useEffect,
} from 'react'
import { useFormContext } from 'react-hook-form'
import { GraphQLTaggedNode } from 'react-relay'
import PropTypes, { InferProps } from 'prop-types'
import {
  useFetchQuery, UseFetchQueryOptions,
} from './useFetchQuery.ts' // Ensure correct path
import * as formPropTypes from '../Field/propTypes.ts' // Ensure correct path

type ComponentProps = InferProps<typeof componentPropTypes>

const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
  ...formPropTypes.comboboxShared,
}

/**
 * A higher-order component factory that enhances a combobox
 * component with GraphQLValueResolver functionality.
 * It fetches the corresponding item based on a provided string value from a GraphQL source.
 *
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query for fetching the item.
 * @param {string} accessor - The key in the GraphQL response to access the data.
 * @param {UseFetchQueryOptions} options - Params for fetch behavior and error handling.
 * @returns {Function} - A higher-order component that enhances the wrapped component
 * with GraphQLValueResolver functionality.
 */
export const addGraphQLValueResolver = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: UseFetchQueryOptions,
) => (WrappedComponent: React.ComponentType<ComponentProps>) => {
  function ExtendedComponent(props: ComponentProps): React.ReactElement {
    const { name } = props
    const { setError } = useFormContext()
    const {
      fetchData, data, loading, error,
    } = useFetchQuery(
      QUERY,
      accessor,
      options,
    )

    const convertValueToItem = useCallback(
      async (value: string) => {
        await fetchData({ value })
        return data
      },
      [
        fetchData,
        data,
      ],
    )

    useEffect(
      () => {
        if (error) {
          setError(
            name, {
              type   :'manual',
              message:error,
            },
          )
        }
      }, [
        error,
        setError,
        name,
      ],
    )

    return React.createElement(
      WrappedComponent, {
        convertValueToItem,
        loading,
        ...props,
      },
    )
  }

  return ExtendedComponent
}

export default addGraphQLValueResolver
