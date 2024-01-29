import React from 'react'
import useConditionalDisplay from '../hooks/useConditionalDisplay.js'
import type { FieldProps } from '../types.js'

export type WithConditionalDisplayProps = [
  string[] | undefined, // dependencies
  (depsValues: any[]) => boolean, // conditionFunction
]

/**
 * A higher-order component that conditionally renders the WrappedComponent
 * based on specified form field values and condition.
 * It uses the useConditionalDisplay hook to watch specified fields and
 * determine if the WrappedComponent should be displayed.
 *
 * @param {string[]} dependencies - An array of field names the component depends on.
 * @param {(depsValues: any[]) => boolean} conditionFunction - A function that takes
 * the current values of these fields
 * and returns a boolean indicating if the component should be displayed.
 * @returns {Function} - A higher-order component that conditionally renders the wrapped component.
 */
function withConditionalDisplay(WrappedComponent: React.ComponentType<FieldProps>) {
  function ExtendedComponent(props: FieldProps): React.ReactElement | null {
    const {
      name,
      condition,
      ...otherProps
    } = props

    const {
      ignore, shouldDisplay,
    } = useConditionalDisplay(
      condition?.[0],
      condition?.[1],
      name,
    )

    return ignore || shouldDisplay
      ? React.createElement(
        WrappedComponent,
        {
          name,
          ...otherProps,
        },
      )
      : null
  }
  return ExtendedComponent
}

export default withConditionalDisplay
