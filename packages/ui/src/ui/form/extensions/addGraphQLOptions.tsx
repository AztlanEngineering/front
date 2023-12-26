import * as React from 'react'
import {
  useState, useEffect, useCallback,
} from 'react'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'
import { useFormikContext } from 'formik'

type OptionsQueryData = {
  options:Array<{ label: string; value: string; disabled?: boolean }>;
}

type GraphQLOptionsExtensionOptions = {
  variables?   :{ [key: string]: any };
  errorMessage?:string;
}

/**
 * addGraphQLOptions is an extension for form inputs like Select
 * that fetches options from the backend via a GraphQL query.
 * It handles fetching, error, and loading states and provides
 * the fetched options to the WrappedComponent.
 *
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query used to fetch the validation rules.
 * @param {string} accessor - The key in the GraphQL response that contains the validation data.
 * @param {GraphQLOptionsExtensionOptions} options - Optional settings
 * including variables for the query and an error message.
 * @returns {Function} A React HOC returning
 * an enhanced component with additional options fetched from the GraphQL query.
 */
const addGraphQLOptions = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphQLOptionsExtensionOptions = {},
) => {
  const {
    variables = {}, errorMessage = 'Error fetching options',
  } = options

  return (WrappedComponent: React.ComponentType<any>) => function OptionsEnhancedComponent({
    name, ...props
  }: any) {
    const environment = useRelayEnvironment()
    const {
      setStatus, status,
    } = useFormikContext()
    const [
      fieldOptions,
      setFieldOptions,
    ] = useState<
    Array<{ label: string; value: string; disabled?: boolean }>
    >([])
    const [
      loading,
      setLoading,
    ] = useState(true)

    const fetchOptions = useCallback(
      () => {
        setLoading(true)
        fetchQuery<OptionsQueryData>(
          environment, QUERY, variables,
        )
          .toPromise()
          .then((data) => {
            if (data && data[accessor]) {
              setFieldOptions(data[accessor])
              if (status?.refetch && status.refetch[name]) {
                const {
                  [name]: omit, ...restRefetch
                } = status.refetch
                setStatus({
                  ...status,
                  refetch:restRefetch,
                })
              }
            }
            setLoading(false)
          })
          .catch((error) => {
            console.error(
              errorMessage, error,
            )
            setLoading(false)
            setStatus({
              ...status,
              refetch:{
                ...(status?.refetch || {}),
                [name]:fetchOptions,
              },
            })
          })
      }, [
        environment,
        QUERY,
        variables,
        errorMessage,
        name,
        status,
        setStatus,
      ],
    )

    useEffect(
      () => {
        fetchOptions()
      }, [],
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
