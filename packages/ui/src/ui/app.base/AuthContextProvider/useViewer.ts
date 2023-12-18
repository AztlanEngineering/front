import {
  useCallback,
} from 'react'
import {
  usePreloadedQuery,
} from 'react-relay'
import {
  graphql,
} from 'relay-runtime'

import useAuth from './useAuth.ts'

const FRAGMENT = graphql`
  fragment useViewerFragment on UserNode
    @refetchable(queryName: "useViewerRefetchableFragment") {
    firstName
    lastName
    createdAt
    updatedAt
    email
    profilePicture
    isActive
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
  const {
    viewerQueryReference, QUERY_VIEWER,
  } = useAuth()

  const data = usePreloadedQuery(
    QUERY_VIEWER, viewerQueryReference,
  )

  const hasPermissions = useCallback(
    (permissions) => {
      const viewerPermissions = data?.viewer?.permissions?.edges
      return permissions.some((permission) => viewerPermissions.includes(permission))
    },
    [data],
  )

  const isInGroups = useCallback(
    (groups) => {
      const viewerGroups = data?.viewer?.groups?.edges
      return viewerGroups
        ? viewerGroups.some((edge) => groups?.includes(edge?.node?.name))
        : false
    },
    [data],
  )

  const test = useCallback(
    (fn) => (data ? fn(data.viewer) : false), [data],
  )

  return {
    data,
    hasPermissions,
    isInGroups,
    test,
  }
}

export default useViewer
