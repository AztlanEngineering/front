import { useCallback } from 'react'
import { usePreloadedQuery } from 'react-relay'

import useAuth from './useAuth'

const FRAGMENT = graphql`
  fragment useViewerFragment on viewer
    @refetchable(queryName: "useViewerRefetchableFragment") {
    firstName
    lastName
    createdAt
    updatedAt
    email
    profilePicture
    groups {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const useViewer = () => {
  const { viewerQueryReference, QUERY_VIEWER } = useAuth()

  const data = usePreloadedQuery(QUERY_VIEWER, viewerQueryReference)

  const hasPermissions = useCallback(
    (permissions) => {
      const viewerPermissions = data?.viewer.permissions?.edges
      return permissions.some((permission) => viewerPermissions.includes(permission))
    },
    [data],
  )

  const isInGroups = useCallback(
    (groups) => {
      const viewerGroups = data?.viewer.groups.edges
      return viewerGroups.some((edge) => groups?.includes(edge?.node?.name))
    },
    [data],
  )

  // console.log('(UPV)', viewerQueryReference, data)

  return {
    data,
    hasPermissions,
    isInGroups,
  }
}

export default useViewer
