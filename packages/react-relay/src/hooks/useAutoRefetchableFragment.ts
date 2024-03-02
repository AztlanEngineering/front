import {
  useEffect, useRef,
} from 'react'
import { useRefetchableFragment } from 'react-relay'

function useAutoRefetchableFragment(
  fragmentNode,
  fragmentRef,
  params,
  fetchPolicy = 'store-and-network',
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
