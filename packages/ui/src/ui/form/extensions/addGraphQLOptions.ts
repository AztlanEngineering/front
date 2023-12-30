import * as React from 'react'
import {
  useEffect, useState, useCallback,
} from 'react'
import PropTypes, { InferProps } from 'prop-types' // For PropTypes to TypeScript inference
import {
  GraphQLTaggedNode, fetchQuery,
} from 'react-relay'
import { useFormContext } from 'react-hook-form'
import { useRelayEnvironment } from 'react-relay/hooks'
import * as formPropTypes from '../Field/propTypes.ts'
import * as messages from '../messages.ts'

const optionsPropType = PropTypes.arrayOf(formPropTypes.optionsShared.options)
const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
}

type Options = InferProps<typeof optionsPropType>
type ComponentProps = InferProps<typeof componentPropTypes>

interface FetchOptions {
  fetchError?   :string;
  responseError?:string;
  variables?    :{ [key: string]: any };
}

const useFetcher = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: FetchOptions = {},
) => {
  const {
    fetchError = messages.fetchError(),
    responseError = messages.responseError(),
    variables = {},
  } = options

  const environment = useRelayEnvironment()
  const [
    data,
    setData,
  ] = useState<Options | null>(null)
  const [
    loading,
    setLoading,
  ] = useState<boolean>(true)
  const [
    error,
    setError,
  ] = useState<string | null>(null)

  const fetchData = useCallback(
    async () => {
      setLoading(true)
      try {
        const response = await fetchQuery(
          environment,
          QUERY,
          variables,
        ).toPromise()
        const result = response[accessor]
        if (!result) {
        // throw new Error(responseError)
          setError(responseError)
        } else {
          setData(result as Options)
          setError(null)
        }
      } catch (err) {
        setError(err.message || fetchError)
      } finally {
        setLoading(false)
      }
    }, [
      QUERY,
      accessor,
      environment,
      options.variables,
    ],
  )

  return {
    fetchData,
    data,
    loading,
    error,
  }
}

const addGraphQLOptions = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: FetchOptions = {},
) => (WrappedComponent: React.ComponentType<InferProps<ComponentProps>>) => {
  function EnhancedComponent(props: InferProps<ComponentProps>) {
    const { name } = props
    const formMethods = useFormContext()
    const {
      setError,
      // clearErrors,
    } = formMethods
    const {
      fetchData, data, loading, error,
    } = useFetcher(
      QUERY,
      accessor,
      options,
    )

    useEffect(
      () => {
        fetchData()
      /* Ideally we would clear errors if formProps.shouldUnmount = true,
         * but there is no way to read access this here.
        return () => {
          clearErrors(props.name);
        }; */
      }, [
        fetchData,
        name,
      // clearErrors,
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
        ...props,
        options:data,
        loading,
      },
    )
  }
  return EnhancedComponent
}

export {
  addGraphQLOptions, useFetcher,
}
