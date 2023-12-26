// REF 4: addGraphQLValidation.tsx
import * as React from 'react'
import {
  useEffect, useCallback,
} from 'react'
import debounce from 'lodash.debounce'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay'
import { useFormikContext } from 'formik'
import { useRelayEnvironment } from 'react-relay/hooks'

type GraphQLValidationExtensionOptions = {
  invalidMessage?:string;
  errorMessage?  :string;
  minLength?     :number;
  debounceWait?  :number;
}

/**
 * Creates a Higher-Order Component (HOC) that adds GraphQL validation to a wrapped component.
 *
 * This HOC provides dynamic validation by fetching validation rules from a GraphQL server
 * and applying them to the wrapped component. It uses the Formik context to manage validation
 * state and provides a method to handle re-fetching or retrying the validation if needed.
 *
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query used to fetch the validation rules.
 * @param {string} accessor - The key in the GraphQL response that contains the validation data.
 * @param {GraphQLValidationExtensionOptions} configuration options for the validation,
 * including messages, minimum length for validation to occur, and debounce wait time.
 * @returns {Function} A React HOC returning
 *  an enhanced component that validates its value against a GraphQL query.
 */
const addGraphQLValidation = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphQLValidationExtensionOptions = {},
) => {
  // Destructuring options one level up with defaults
  const {
    invalidMessage = 'Invalid input',
    errorMessage = 'Error during validation',
    minLength = 3,
    debounceWait = 300,
  } = options

  return (WrappedComponent: React.ComponentType<any>) => function ValidatedComponent({
    name, value, ...props
  }: any) {
    const environment = useRelayEnvironment()
    const {
      errors, setFieldError, setStatus, status,
    } = useFormikContext()

    const setError = useCallback(
      (error) => {
        setFieldError(
          name, error,
        )
        if (error) {
          // Set refetch in status for error handling
          setStatus({
            ...status,
            refetch:{
              ...(status?.refetch || {}),
              [name]:validate, // Provide a way to refetch
            },
          })
        } else if (status?.refetch && status.refetch[name]) {
          // Clear any refetch request from status if successful
          const {
            [name]: omit, ...restRefetch
          } = status.refetch
          setStatus({
            ...status,
            refetch:restRefetch,
          })
        }
      },
      [
        name,
        status,
        setStatus,
        setFieldError,
      ],
    )

    const validate = debounce(
      async (currentValue: string) => {
        if (currentValue.length < minLength) {
          return
        }
        try {
          const data = await fetchQuery(
            environment, QUERY, { value: currentValue },
          ).toPromise()
          const isValid = data[accessor]
          if (typeof isValid === 'boolean') {
            if (!isValid) setError(invalidMessage)
            else if (errors[name]) setError(undefined)
          } else {
            console.error(
              '[addGraphQLValidation] Returned value is not a boolean:',
              isValid,
            )
            setError(errorMessage)
          }
        } catch (error) {
          console.error(
            '[addGraphQLValidation] Error fetching data:', error,
          )
          setError(errorMessage)
        }
      }, debounceWait,
    )

    useEffect(
      () => {
        validate(value)
      }, [
        value,
        validate,
      ],
    )

    return (
      <WrappedComponent
        name={name}
        value={value}
        {...props}
      />
    )
  }
}

export default addGraphQLValidation
