import React, {
  useState, useCallback,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { useCombobox } from 'downshift'
import { GraphQLTaggedNode } from 'react-relay'
import debounce from 'lodash.debounce'
import useFetchQuery, { UseFetchQueryOptions } from './useFetchQuery.js'
import * as formPropTypes from '../Field/propTypes.js' // Your existing imports

type ComponentProps = InferProps<typeof componentPropTypes>

const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
  stateReducer:PropTypes.func,
}

interface GraphqlComboboxSearchProps {
  variables?   :Record<string, any>;
  debounceWait?:number;
  minLength?   :number;
}

/**
 * Enhances a combobox component with GraphQL search capabilities.
 * It fetches options based on user input and updates the combobox's list dynamically.
 *
 * @param {GraphqlComboboxSearchProps} options - The options for configuring the GraphQL query.
 * @returns A higher-order component (HOC) that wraps a Downshift combobox component.
 */
const addGraphqlComboboxSearch = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphqlComboboxSearchProps = {},
) => {
  const {
    variables,
    debounceWait = 100,
    minLength = 3,
    ...fetchOptions
  } = options
  // somecode
  return (WrappedComponent: React.ComponentType<ComponentProps>) => {
    function ExtendedComponent(props: ComponentProps): React.ReactElement {
      /*
    const [
      options,
      setOptions,
    ] = useState<any[]>([])
     */

      const {
        fetchData, data, loading, error,
      } = useFetchQuery(
        QUERY,
        accessor,
        {
          ...fetchOptions,
          // deriveErrorFromData,
        },
      )
      const debouncedFetchData = useCallback(
        debounce(
          (fetchVariables) => {
            fetchData(fetchVariables)
          }, debounceWait,
        ),
        [
          fetchData,
          debounceWait,
        ],
      )

      const stateReducer = useCallback(
        (
          state: any, actionAndChanges: any,
        ) => {
          if (
            actionAndChanges.type === useCombobox.stateChangeTypes.InputChange
          ) {
            const { inputValue } = actionAndChanges.changes
            console.log(inputValue)
            /*
      if (inputValue.length > 2) {
        // Adjust based on requirements
        fetchData(
          QUERY,
          variables ? variables(inputValue) : {},
          (data: any) => {
            const fetchedOptions = data[accessor]
            setOptions(fetchedOptions)
          },
        )
      } */
          }
          return actionAndChanges.changes
        },
        [fetchData],
      )

      return React.createElement(
        WrappedComponent, {
          loading,
          stateReducer,
          ...props,
        },
      )
    }
    return ExtendedComponent
  }
}

export default addGraphqlComboboxSearch
