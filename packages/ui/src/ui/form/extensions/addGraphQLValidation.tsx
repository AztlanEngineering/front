// REF 4: addGraphQLValidation.tsx
import * as React from 'react'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import {
  fetchQuery, GraphQLTaggedNode,
} from 'react-relay' // Ensure correct import
import { useFormikContext } from 'formik'
import { useRelayEnvironment } from 'react-relay/hooks'

type ValidatorOptions = {
  invalidMessage:string;
  errorMessage  :string;
  minLength     :number;
  debounceWait  :number;
}

const addGraphQLValidation = (
  query: GraphQLTaggedNode,
  accessor: string,
  options: ValidatorOptions,
) => (WrappedComponent: React.ComponentType<any>) => function ValidatedComponent({
  name, value, ...props
}: any) {
  const environment = useRelayEnvironment()
  const { setFieldError } = useFormikContext()

  const setError = useCallback(
    (error) => setFieldError(
      name, error,
    ), [name],
  )

  const {
    invalidMessage = 'Invalid input',
    errorMessage = 'Error during validation',
    minLength = 3,
    debounceWait = 300,
  } = options

  const validate = debounce(
    async (currentValue: string) => {
      if (currentValue.length < minLength) {
        return
      }
      try {
        const data = await fetchQuery(
          environment, query, { value: currentValue },
        ).toPromise()
        const isValid = data[accessor]
        if (typeof isValid === 'boolean') {
          setError(isValid ? undefined : invalidMessage)
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

  React.useEffect(
    () => {
      validate(value)
    }, [value],
  )

  return (
    <WrappedComponent
      name={name}
      value={value}
      {...props}
    />
  )
}

export default addGraphQLValidation
