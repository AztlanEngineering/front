import {
  useCallback, useState, useEffect,
} from 'react'

interface ThemeOptions {
  storageKey?:string;
  defaultMap?: {
    dark :string;
    light:string;
  };
}

export default function useTheme(
  initialTheme, options: ThemeOptions = {},
) {
  const {
    storageKey = 'theme',
    defaultMap = {
      dark :'dark-theme',
      light:'light-theme',
    },
  } = options
  const isClient = typeof window === 'object'
  // Helper function to get system theme
  const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? defaultMap.dark
    : defaultMap.light)

  const [
    isSystemTheme,
    setIsSystemTheme,
  ] = useState(isClient ? window.localStorage.getItem(storageKey) && true : false)

  const getDefaultTheme = useCallback(
    () => {
      if (isClient) {
        const storedTheme = window.localStorage.getItem(storageKey)
        if (storedTheme) {
          setIsSystemTheme(false)
          return storedTheme
        }
        setIsSystemTheme(true)
        return getSystemTheme() || initialTheme
      }
      return initialTheme || defaultMap.light
    }, [
      initialTheme,
      isClient,
      storageKey,
    ],
  )

  const [
    theme,
    setTheme,
  ] = useState(() => getDefaultTheme())
  // )

  // Effect for syncing theme with localStorage
  useEffect(
    () => {
      if (isClient && theme) {
        window.localStorage.setItem(
          storageKey, theme,
        )
      }
    }, [
      theme,
      storageKey,
    ],
  )

  // Effect for responding to system theme changes
  useEffect(
    () => {
      if (isClient) {
        const handleChange = () => {
          const systemTheme = getSystemTheme()
          // Update theme only if the user hasn't set a preferred theme
          if (!window.localStorage.getItem(storageKey)) {
            setIsSystemTheme(true)
            setTheme(systemTheme)
          }
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addListener(handleChange)
        return () => mediaQuery.removeListener(handleChange)
      }
    }, [storageKey],
  )

  const resetTheme = useCallback(
    () => {
      setTheme(undefined)
      if (isClient) {
        window.localStorage.removeItem(storageKey)
        setIsSystemTheme(true) // Assuming reset to system theme as default
      }
    }, [
      initialTheme,
      isClient,
      storageKey,
    ],
  )

  const isTheme = useCallback(
    (queryTheme) => theme === queryTheme, [theme],
  )

  return {
    theme,
    setTheme,
    isTheme,
    isSystemTheme,
    resetTheme,
  }
}
