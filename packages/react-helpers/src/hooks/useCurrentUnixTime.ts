import { useState } from 'react'

/**
 * Custom React hook to manage and update the current time in Unix format.
 * @returns {[number, Function]} A tuple containing the current time in Unix format and a function to update it.
 */
const useCurrentUnixTime = (): [number, () => void] => {
  // Initialize state with current time in Unix format
  const [
    currentTime,
    setCurrentTime,
  ] = useState<number>(new Date().getTime())

  // Wrapper function to update state with the current time in Unix format
  const updateCurrentTime = () => {
    setCurrentTime(new Date().getTime())
  }

  return [
    currentTime,
    updateCurrentTime,
  ]
}

export default useCurrentUnixTime
