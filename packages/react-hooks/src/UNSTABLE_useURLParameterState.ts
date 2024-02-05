import {
  useState, useCallback, useEffect,
} from 'react'

/**
 * Interface for the options passed to useURLParameterState.
 */
interface UseURLParameterStateOptions<T> {
  initialState? :T;
  parameterName?:string;
}

/**
 * Custom React hook for managing state via URL parameters, offering flexible initialization.
 *
 * @param options - An object containing the optional initialState and parameterName.
 * @returns A tuple with the current state and a setter function, mirroring the useState API.
 */
/* eslint-disable-next-line function-paren-newline, @stylistic/function-paren-newline */
function useURLParameterState<T extends string | object | undefined>(
  options?: UseURLParameterStateOptions<T>,
  /* eslint-disable-next-line function-paren-newline, @stylistic/function-paren-newline */
): [T, (value: T | ((prevState: T) => T)) => void] {
  const {
    initialState, parameterName,
  } = {
    parameterName:'state',
    ...options,
  }

  // Function to get the current URL parameter value or return initialState if not set
  const getParameterValue = useCallback(
    (): T => {
      const params = new URLSearchParams(window.location.search)
      const paramValue = params.get(parameterName)
      if (paramValue !== null) {
        try {
          return JSON.parse(paramValue) as T
        } catch {
          return (paramValue as unknown) as T
        }
      }
      return initialState
    }, [
      initialState,
      parameterName,
    ],
  )

  const [
    state,
    setState,
  ] = useState<T>(getParameterValue)

  // Update URL parameter when state changes
  useEffect(
    () => {
      const params = new URLSearchParams(window.location.search)
      const value = typeof state === 'object' ? JSON.stringify(state) : state

      if (value !== undefined) {
      // Only update URL if state is not undefined
        params.set(
          parameterName,
          // @ts-ignore TODO
          value,
        )
        window.history.replaceState(
          {},
          '',
          `${window.location.pathname}?${params}`,
        )
      }
    }, [
      state,
      parameterName,
    ],
  )

  // Function to update the state, handling both direct values and updater functions
  const setURLParameterState = useCallback(
    (value: T | ((prevState: T) => T)) => {
      setState((prevState) => {
        // Determine the value to set, handling updater functions
        const newValue = value instanceof Function ? value(prevState) : value
        return newValue
      })
    },
    [],
  )

  return [
    state,
    setURLParameterState,
  ]
}

export default useURLParameterState
