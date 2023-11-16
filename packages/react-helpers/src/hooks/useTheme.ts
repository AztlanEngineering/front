import { useCallback, useState, useEffect } from 'react'

export default function useTheme(initialTheme, storageKey = 'theme') {
  const isClient = typeof window === 'object'
  // Helper function to get system theme
  const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light')

  const [theme, setTheme] = useState(() => {
    if (isClient) {
      const storedTheme = window.localStorage.getItem(storageKey)
      return storedTheme || getSystemTheme() || initialTheme
    }
    return initialTheme
    // Try to get the stored theme, fallback to initialTheme or system theme
  })

  // Effect for syncing theme with localStorage
  useEffect(() => {
    if (isClient) {
      window.localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey])

  // Effect for responding to system theme changes
  useEffect(() => {
    if (isClient) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        const systemTheme = getSystemTheme()
        // Update theme only if the user hasn't set a preferred theme
        if (!window.localStorage.getItem(storageKey)) {
          setTheme(systemTheme)
        }
      }

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
