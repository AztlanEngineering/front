import * as React from 'react'
import {
  useCallback, useEffect,
} from 'react'
import { useFormContext } from 'react-hook-form'
import { InferProps } from 'prop-types'
import { GraphQLTaggedNode } from 'react-relay'
import debounce from 'lodash.debounce'
import useFetchQuery, { UseFetchQueryOptions } from './useFetchQuery.ts'
import * as formPropTypes from '../Field/propTypes.ts' // Your existing imports

type ComponentProps = InferProps<typeof componentPropTypes>

const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
}

interface Options extends UseFetchQueryOptions {
  invalidError?:string;
  minLength?   :number;
  debounceWait?:number;
}

type DeriveErrorFunction = (data: any) => string | null

/**
 * Adds GraphQL validation to a component by wrapping it with validation logic.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query for validation.
 * @param {string} accessor - The key within the GraphQL response to access the validation data.
 * @param {Options} options - Customizable options for validation behavior,
 * including error messages, iminimum length, and debounce wait time.
 *
 * @returns {Function} A higher-order component that provides validation to the wrapped component.
 */
const addGraphQLValidation = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: Options = {},
) => {
  const {
    invalidError = 'The value entered is invalid',
    minLength = 3,
    debounceWait = 100,
    ...fetchOptions
  } = options

  return (WrappedComponent: React.ComponentType<ComponentProps>) => {
    function ExtendedComponent(props: ComponentProps): React.ReactElement {
      const { name } = props
      const {
        setError, clearErrors, watch,
      } = useFormContext()

      const value = watch(name)
      const deriveErrorFromData = useCallback<DeriveErrorFunction>(
        (data) => (data === false ? invalidError : null),
        [invalidError],
      )

      const {
        fetchData, data, loading, error,
      } = useFetchQuery(
        QUERY,
        accessor,
        {
          ...fetchOptions,
          deriveErrorFromData,
        },
      )

      const debouncedFetchData = useCallback(
        debounce(
          (overrideVariables) => {
            fetchData(overrideVariables)
          }, debounceWait,
        ),
        [
          fetchData,
          debounceWait,
        ],
      )

      const setFieldError = useCallback(
        (message: string) => {
          setError(
            name, {
              type:'manual',
              message,
            },
          )
        },
        [
          setError,
          name,
        ],
      )

      useEffect(
        () => {
          if (value && value.length >= minLength) {
            debouncedFetchData({ value })
          }

          return () => {
            debouncedFetchData.cancel()
          }
        }, [
          value,
          minLength,
        ],
      )

      useEffect(
        () => {
          if (!loading) {
            if (data) {
              clearErrors(name)
            } else if (error) {
              setFieldError(error)
            } else {
              setFieldError(invalidError)
            }
          }
        }, [
          loading,
          data,
          error,
          name,
          clearErrors,
          setFieldError,
          invalidError,
        ],
      )

      console.log(
        'RETURN', loading,
      )

      return (
        <WrappedComponent
          loading={loading}
          {...props}
        />
      )
    }
    return ExtendedComponent
  }
}

export default addGraphQLValidation
