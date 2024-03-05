/**
 * Creates a debounced version of the provided async function.
 * @param func The async function to debounce.
 * @param waitFor The number of milliseconds to wait before executing the function.
 * @returns A debounced version of the provided function that returns a promise.
 */
function debounceAsync<T extends (
  ...args: any[]) => Promise<any>>(
  func: T,
  waitFor: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let resultPromise: Promise<ReturnType<T>>
  let resolveOuter: (value: ReturnType<T> | PromiseLike<ReturnType<T>>) => void

  return function (...args: Parameters<T>): Promise<ReturnType<T>> {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    resultPromise = new Promise((resolve) => {
      resolveOuter = resolve
    })

    timeoutId = setTimeout(
      async () => {
        const result = await func(...args)
        resolveOuter(result)
      }, waitFor,
    )

    return resultPromise
  }
}

export default debounceAsync
