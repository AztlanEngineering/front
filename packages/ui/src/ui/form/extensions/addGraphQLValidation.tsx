import * as React from 'react'
import {
  useEffect, useRef,
} from 'react'
import { useFormikContext } from 'formik'
import { GraphQLTaggedNode } from 'react-relay'
import useGraphQLValidator from './useGraphQLFieldValidator.tsx'
import useFieldError from './useFieldError.ts' // Adjust the import path as necessary

type GraphQLValidationExtensionOptions = {
  invalidMessage?:string;
  errorMessage?  :string;
  minLength?     :number;
  debounceWait?  :number;
}

/**
 * Creates a Higher-Order Component (HOC) that adds GraphQL validation to a wrapped component.
 * Dynamically validates the component's value against a GraphQL query and manages the validation
 * state using Formik context.
 *
 * @param QUERY {GraphQLTaggedNode} - GraphQL query used to fetch validation rules.
 * @param accessor {string} - Key in the GraphQL response containing the validation data.
 * @param options {GraphQLValidationExtensionOptions} - Configuration for the validation.
 * @returns {React.ComponentType} - A React component enhanced with GraphQL validation logic.
 */
const addGraphQLValidation = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphQLValidationExtensionOptions = {},
) => {
  const {
    invalidMessage = 'Invalid input',
    errorMessage = 'Error during validation',
    minLength = 3,
    debounceWait = 300,
  } = options

  return (WrappedComponent: React.ComponentType<any>) => function ValidatedComponent({
    name, ...props
  }: any) {
    const { values } = useFormikContext()
    const value = values[name]
    const setError = useFieldError(name)
    const validateRef = useRef<Function>()

    const onSuccess = (isValid: boolean) => {
      if (isValid) {
        setError(undefined) // Clear error for valid case without passing refetch reference
      } else {
        setError(
          invalidMessage, validateRef,
        ) // Set error for invalid case and pass refetch reference
      }
    }
    const onError = () => setError(
      errorMessage, validateRef,
    )

    const validate = useGraphQLValidator(
      QUERY,
      accessor,
      onSuccess,
      onError,
      {
        minLength,
        debounceWait,
      },
    )

    // Function hoisting to avoid stale closure
    // And pass the refetch reference to the formik context
    validateRef.current = () => validate(value)

    useEffect(
      () => {
        validate(value)
        return validate.cancel
      }, [value],
    ) // Dependency on the value changes

    return (
      <WrappedComponent
        name={name}
        {...props}
      />
    )
  }
}

export default addGraphQLValidation
