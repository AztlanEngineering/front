import { usePreloadedQuery } from 'react-relay'

import useAuth from './useAuth'

const usePreloadedViewer = () => {
  const { viewerQueryReference, QUERY_VIEWER } = useAuth()

  const { viewer } = usePreloadedQuery(QUERY_VIEWER, viewerQueryReference)
  console.log('(UPV)', viewerQueryReference, viewer)

  return viewer
}

export default usePreloadedViewer
