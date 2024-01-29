import {
  useState, useEffect, useCallback,
} from 'react'

const isClient = typeof window === 'object'

interface LocaleOptions {
  storageKey?:string;
}

export default function useLocale(
  initialLocale: string,
  loadLocaleData: (string) => Promise<any> | any, // TODO
  options: LocaleOptions = {},
) {
  const { storageKey = 'locale' } = options

  const getBrowserLocale = useCallback(
    () => {
      if (isClient && navigator.language) {
        return navigator.language.slice(
          0, 2,
        ) // Extracts the two-letter locale code
      }
      return initialLocale // Fallback to initialLocale
    }, [initialLocale],
  )

  const getDefaultLocale = useCallback(
    () => {
      if (isClient) {
        const storedLocale = window.localStorage.getItem(storageKey)
        return storedLocale || getBrowserLocale()
      }
      return initialLocale
    }, [
      getBrowserLocale,
      initialLocale,
      storageKey,
    ],
  )

  const [
    locale,
    setLocale,
  ] = useState<string>(getDefaultLocale)
  const [
    messages,
    setMessages,
  ] = useState({})

  const resetLocale = useCallback(
    () => {
      const defaultLocale = getBrowserLocale()
      setLocale(defaultLocale)
      if (isClient) {
        window.localStorage.removeItem(storageKey)
      }
    }, [
      getBrowserLocale,
      storageKey,
    ],
  )

  const isLocale = useCallback(
    (queryLocale: string) => locale === queryLocale,
    [locale],
  )

  useEffect(
    () => {
      if (isClient) {
        window.localStorage.setItem(
          storageKey, locale,
        )
      }
    }, [
      locale,
      storageKey,
    ],
  )

  useEffect(
    () => {
      async function loadLocale() {
        const m = await loadLocaleData(locale)
        setMessages(m.default)
      }

      if (isClient) {
        loadLocale()
      }
    }, [locale],
  )

  return {
    locale,
    setLocale,
    isLocale,
    messages,
    resetLocale,
  }
}
