import {
  useEffect, useRef,
} from 'react'
import { useRefetchableFragment } from 'react-relay'
import type { FetchPolicy } from 'relay-runtime'

function useAutoRefetchableFragment(
  fragmentNode, 
  fragmentRef, 
  params,
  fetchPolicy:FetchPolicy = 'store-and-network',
) {
  const [
    result,
    refetch,
  ] = useRefetchableFragment(
    fragmentNode, fragmentRef,
  )

  const isMounted = useRef(false)

  useEffect(
    () => {
    // Skip refetch on initial load
      if (isMounted.current) {
        refetch(
          params, { fetchPolicy },
        )
      } else {
        isMounted.current = true
      }
    }, [
      params,
      refetch,
    ],
  )

  return [
    result,
    refetch,
  ]
}

export default useAutoRefetchableFragment
