import * as React from 'react'
import {
  useEffect, useRef, useCallback,
} from 'react'
import { useFormikContext } from 'formik'
import { GraphQLTaggedNode } from 'react-relay'
import useGraphQLValidator from './useGraphQLFieldValidator.ts'
import useFieldError from './useFieldError.ts'

type GraphQLValidationExtensionOptions = {
  invalidError? :string;
  responseError?:string;
  fetchError?   :string;
  minLength?    :number;
  debounceWait? :number;
}

const addGraphQLValidation = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphQLValidationExtensionOptions = {},
) => {
  const {
    invalidError = 'The value entered is invalid',
    responseError = 'The validation response is not a boolean',
    fetchError = 'Error fetching validation data',
    minLength = 3,
    debounceWait = 300,
  } = options

  return (WrappedComponent: React.ComponentType<any>) => function ValidatedComponent({
    name, ...props
  }: any) {
    const { values } = useFormikContext()
    const value = values[name]
    const setError = useFieldError(name)
    const refetchRef = useRef<Function>()

    const onSuccess = useCallback(
      (isValid: boolean) => {
        if (isValid) {
          setError(undefined)
        } else {
          setError(invalidError)
        }
      },
      [setError],
    )

    const onError = useCallback(
      (errorMessage) => setError(
        errorMessage, refetchRef,
      ),
      [setError],
    )

    const validate = useGraphQLValidator(
      QUERY,
      accessor,
      onSuccess,
      onError,
      {
        minLength,
        debounceWait,
        fetchError,
        responseError,
      },
    )

    useEffect(
      () => {
        refetchRef.current = validate // Set refetch function
        validate(value)
      }, [
        value,
        validate,
      ],
    )

    return (
      <WrappedComponent
        name={name}
        {...props}
      />
    )
  }
}

export default addGraphQLValidation
