import * as React from 'react'
import {
  useEffect, useRef, useState,
} from 'react'
import { GraphQLTaggedNode } from 'react-relay'
import useGraphQLFieldOptionsFetcher from './useGraphQLFieldOptionsFetcher.ts' // Adjust the import path as necessary
import useFieldError from './useFieldError.ts' // Adjust the import path as necessary

type GraphQLOptionsExtensionOptions = {
  fetchError?   :string;
  responseError?:string;
  variables?    :{ [key: string]: any };
}

/**
 * Creates a Higher-Order Component (HOC) that fetches options for form inputs like Select
 * from the backend via a GraphQL query.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query used to fetch options.
 * @param {string} accessor - The key in the GraphQL response that contains the options.
 * @param {GraphQLOptionsExtensionOptions} options - Settings including custom error messages.
 * @returns {Function} - A React HOC returning an enhanced component
 * with additional options fetched from the GraphQL query.
 */
const addGraphQLOptions = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphQLOptionsExtensionOptions = {},
) => {
  // Destructure options with defaults in the function body.
  const {
    fetchError = 'Error fetching options from the server',
    responseError = 'Invalid response from the server',
    variables = {},
  } = options

  return (WrappedComponent: React.ComponentType<any>) => function OptionsEnhancedComponent({
    name, ...props
  }: any) {
    const setError = useFieldError(name)
    const refetchRef = useRef<Function>()
    const [
      fieldOptions,
      setFieldOptions,
    ] = useState<any[]>([])

    const [
      loading,
      setLoading,
    ] = useState(true)

    // onSuccess and onError callbacks
    const onSuccess = (fetchedFieldOptions: any[]) => {
      setFieldOptions(fetchedFieldOptions)
      setLoading(false)
      setError(undefined)
    }

    const onError = (errorMessage: string) => {
      setError(
        errorMessage, refetchRef,
      )
      setLoading(false)
    }

    const fetchOptions = useGraphQLFieldOptionsFetcher(
      QUERY,
      accessor,
      onSuccess,
      onError,
      {
        fetchError,
        responseError,
      },
    )

    useEffect(
      () => {
        refetchRef.current = () => fetchOptions(variables)
        fetchOptions(variables)
      }, [variables],
    )

    return (
      <WrappedComponent
        {...props}
        name={name}
        options={fieldOptions}
        loading={loading}
      />
    )
  }
}

export default addGraphQLOptions
