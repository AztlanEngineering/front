import { useCallback, useState, useEffect } from 'react'

export default function useTheme(initialTheme, options = {}) {
  const {
    storageKey = 'theme',
    defaultMap = {
      dark: 'dark-theme',
      light: 'light-theme',
    },
  } = options
  const isClient = typeof window === 'object'
  // Helper function to get system theme
  const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? defaultMap.dark
    : defaultMap.light)

  // TODO Add isSystemTheme
  // TODO Add proper managed of default system (management of blank storage state)

  const getDefaultTheme = useCallback(() => {
    // Try to get the stored theme, fallback to initialTheme or system theme
    if (isClient) {
      const storedTheme = window.localStorage.getItem(storageKey)
      return storedTheme || getSystemTheme() || initialTheme
    }
    return initialTheme
  })

  const [theme, setTheme] = useState(() => getDefaultTheme())
  // )

  // Effect for syncing theme with localStorage
  useEffect(() => {
    if (isClient) {
      window.localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey])

  // Effect for responding to system theme changes
  useEffect(() => {
    if (isClient) {
      const handleChange = () => {
        const systemTheme = getSystemTheme()
        // Update theme only if the user hasn't set a preferred theme
        if (!window.localStorage.getItem(storageKey)) {
          setTheme(systemTheme)
        }
      }

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [storageKey])

  const isTheme = useCallback((queryTheme) => theme === queryTheme, [theme])

  return {
    theme,
    setTheme,
    isTheme,
  }
}
