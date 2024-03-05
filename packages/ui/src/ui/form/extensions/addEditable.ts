import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { useFormContext } from 'react-hook-form'
import * as formPropTypes from '../Field/propTypes.js' // Your existing imports
import DefaultEditable from './Editable.js'
import type { UnionInputProps } from '../Field/types.js'

type ComponentProps = InferProps<typeof componentPropTypes>

const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
  stateReducer:PropTypes.func,
}

type EditableProps = {
  setIsEditable:(isEditable: boolean) => void;
  value        :string;
}

/**
 * Enhances a combobox component with GraphQL search capabilities.
 * It fetches options based on user input and updates the combobox's list dynamically.
 *
 * @param {GraphqlComboboxSearchProps} options - The options for configuring the GraphQL query.
 * @returns A higher-order component (HOC) that wraps a Downshift combobox component.
 */
const addEditable = (Editable: React.ComponentType<EditableProps> = DefaultEditable) =>
  /*
  const {
    minLength = 3,
    ...fetchOptions
  } = options
  */
  // somecode
  (WrappedComponent: React.ComponentType<UnionInputProps>) => {
    function ExtendedComponent(props: ComponentProps): React.ReactElement {
      const [
        isEditable,
        setIsEditable,
      ] = useState(true)

      const { name } = props
      const { watch } = useFormContext()

      if (isEditable) {
        const value = watch(name)
        return React.createElement(
          Editable, {
            setIsEditable,
            value,
            ...props,
          },
        )
      }

      return React.createElement(
        WrappedComponent, {
          // options:data,
          ...props,
        },
      )
    }
    return ExtendedComponent
  }

export default addEditable
