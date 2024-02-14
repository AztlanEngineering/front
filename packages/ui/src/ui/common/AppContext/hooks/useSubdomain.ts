import { useMemo } from 'react'

/**
 * Hook to extract the subdomain from a full URL hostname.
 * @returns The subdomain as a string or null if no subdomain is present.
 */
const useSubdomain = (fullHostname): string | null => {
  const result = useMemo(
    () => {
    // Define regex for localhost (optionally including port) and regular domains
      const localhostRegex = /^(?:http[s]?:\/\/)?([^\.]+)\.localhost(?::\d+)?$/
      const domainRegex = /^(?:http[s]?:\/\/)?(?:([^\.]+)\.)+[^\.]+\.[^\.]+(?::\d+)?$/

      let subdomain: string | null = null

      if (localhostRegex.test(fullHostname)) {
      // Extract subdomain from localhost URL
        const match = fullHostname.match(localhostRegex)
        subdomain = match ? match[1] : null
      } else if (domainRegex.test(fullHostname)) {
      // Extract subdomain from regular domain URL
        const match = fullHostname.match(domainRegex)
        subdomain = match ? match[1] : null
      }

      return subdomain
    }, [fullHostname],
  )

  return result
}

export default useSubdomain
