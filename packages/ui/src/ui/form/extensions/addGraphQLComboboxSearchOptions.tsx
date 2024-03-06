import React, {
  useState, useCallback,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { useCombobox } from 'downshift'
import { GraphQLTaggedNode } from 'react-relay'
import debounceAsync from './debounceAsync.js'
import useFetchQuery, { UseFetchQueryOptions } from './useFetchQuery.js'
import * as formPropTypes from '../Field/propTypes.js' // Your existing imports
import type { UnionInputProps } from '../Field/types.js'

type ComponentProps = InferProps<typeof componentPropTypes>

const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
  stateReducer:PropTypes.func,
}

type Item = {
  label    :string;
  value    :string;
  disabled?:boolean;
}

interface GraphqlComboboxSearchProps {
  variables?   :Record<string, any>;
  debounceWait?:number;
  minLength?   :number;
  transform?   :(data: any) => Item[];
}

/**
 * Enhances a combobox component with GraphQL search capabilities.
 * It fetches options based on user input and updates the combobox's list dynamically.
 *
 * @param {GraphqlComboboxSearchProps} options - The options for configuring the GraphQL query.
 * @returns A higher-order component (HOC) that wraps a Downshift combobox component.
 */
const addGraphQLComboboxSearch = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: GraphqlComboboxSearchProps = {},
) => {
  const {
    variables,
    debounceWait = 100,
    minLength = 3,
    transform,
    ...fetchOptions
  } = options
  // somecode
  return (WrappedComponent: React.ComponentType<UnionInputProps>) => {
    function ExtendedComponent(props: ComponentProps): React.ReactElement {
      const {
        fetchData,
        // data,
        loading,
        // error,
      } = useFetchQuery(
        QUERY,
        accessor,
        {
          ...fetchOptions,
          // deriveErrorFromData,
        },
      )

      const debouncedFetchData = useCallback(
        debounceAsync(
          (fetchVariables) => fetchData(fetchVariables), debounceWait,
        ), [debounceWait],
      )

      const onInputValueChangeFactory = useCallback(
        (setItems) => async ({ inputValue }: any) => {
          if (inputValue.length >= minLength) {
            const result = await debouncedFetchData({
              value:inputValue,
              ...variables,
            })
            if (!result.length) {
              setItems([
                {
                  label:'No results found',
                  value:'',
                },
              ])
            }
            const finalItems = transform ? transform(result) : result
            console.log(
              'ADD', result, finalItems,
            )
            setItems(finalItems)
          }
        },
        [
          fetchData,
          minLength,
        ],
      )

      return React.createElement(
        WrappedComponent, {
          loading,
          onInputValueChangeFactory,
          // options:data,
          ...props,
        },
      )
    }
    return ExtendedComponent
  }
}

export default addGraphQLComboboxSearch
