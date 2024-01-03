// REF [41.1]
// useConditionalDisplay.ts
import {
  useState, useEffect,
} from 'react'
import {
  useFormContext, useWatch,
} from 'react-hook-form'

/**
 * Hook to determine if a component should be displayed based on specified
 * form field values and a condition function.
 * It watches the specified fields and evaluates the condition function when their values change.
 * If the condition function returns false, and the field is currently registered,
 * it will unregister the field.
 *
 * @param {string[]} dependencies - An array of field names the component depends on.
 * @param {(depsValues: any[]) => boolean} conditionFunction - A function that takes
 * the current values of these fields
 * and returns a boolean indicating if the component should be displayed.
 * @param {string} name - The name of the field to unregister if`` not displayed
 * (must match the name used in form registration).
 * @returns {{ ignore: boolean, shouldDisplay: boolean }} - A boolean indicating whether
 * to display the component.
 */
function useConditionalDisplay(
  dependencies: string[] | undefined = undefined,
  conditionFunction: ((depsValues: any[]) => boolean) | undefined = undefined,
  name: string | null = null,
): { ignore: boolean; shouldDisplay: boolean | null } {
  const { unregister } = useFormContext()
  const valuesr = useWatch({
    name    :dependencies,
    disabled:!dependencies,
  })

  const values = dependencies && valuesr // watch(dependencies)

  const [
    shouldDisplay,
    setShouldDisplay,
  ] = useState<boolean | null>(values ? conditionFunction(values) : null)

  const ignore = shouldDisplay === null

  useEffect(
    () => {
      if (ignore) {
        return
      }

      const shouldDisplayNew = conditionFunction(values)

      setShouldDisplay((prevShouldDisplay) => {
        if (prevShouldDisplay === true && shouldDisplayNew === false) {
          unregister(name)
        }
        return shouldDisplayNew
      })
    }, [ignore || values],
  )

  return {
    ignore,
    shouldDisplay:!!shouldDisplay,
  }
}

export default useConditionalDisplay
