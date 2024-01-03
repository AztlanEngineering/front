import React, { ReactElement } from 'react'
import { useFormContext } from 'react-hook-form'

/**
 * A factory function to create a higher-order component that conditionally displays a component
 * based on the specified condition.
 * @param {string[]} dependencies  - An array of field names that the component depends on.
 * @param {(depsValues: any[]) => boolean} conditionFunction  - A function that takes the current
 * values of these fields and returns a boolean indicating if the component should be displayed.
 * @returns {Function} A HOC function that conditionally renders the wrapped component.
 */
function addConditionalDisplay(
  dependencies: string[],
  conditionFunction: (depsValues: any[]) => boolean,
) {
  return (WrappedComponent: React.ComponentType<any>) => {
    function ExtendedComponent(props: any): ReactElement | null {
      const { watch } = useFormContext()
      const depsValues = watch(dependencies)

      const shouldDisplay = conditionFunction(depsValues)

      if (shouldDisplay) {
        return React.createElement(
          WrappedComponent, props,
        )
      }
      return null
    }
    return ExtendedComponent
  }
}

export default addConditionalDisplay
