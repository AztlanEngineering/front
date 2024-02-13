import { useCallback } from 'react'
import { usePreloadedQuery } from 'react-relay'
import useAuth from './useAuth.js'

/*
const FRAGMENT = graphql`
  fragment useViewerFragment on UserNode
    @refetchable(queryName: "useViewerRefetchableFragment") {
    firstName
    lastName
    created
    updated
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
` */

/**
 * A hook to interact with the viewer's data.
 * Provides functionalities to check viewer's permissions and group memberships.
 */
const useViewer = () => {
  const {
    viewerQueryReference, QUERY_VIEWER,
  } = useAuth()

  const data = usePreloadedQuery(
    QUERY_VIEWER, viewerQueryReference,
  )

  /**
   * Checks if the viewer has any of the specified permissions.
   * @param permissions - Array of permissions to check against.
   * @returns True if the viewer has any of the specified permissions.
   */
  const hasPermissions = useCallback(
    (permissions: string[]) => {
      // @ts-ignore TODO
      const viewerPermissions = data?.viewer?.userPermissions?.edges.map((edge) => edge?.node?.name)
      return permissions.some((permission) => viewerPermissions?.includes(permission))
    },
    [data],
  )

  /**
   * Checks if the viewer is part of any of the specified groups.
   * @param groups - Array of group names to check against.
   * @returns True if the viewer is in any of the specified groups.
   */
  const isInGroups = useCallback(
    (groups: string[]) => {
      // @ts-ignore TODO
      const viewerGroups = data?.viewer?.groups?.edges.map((edge) => edge?.node?.name)
      return viewerGroups
        ? viewerGroups.some((groupName) => groups.includes(groupName))
        : false
    },
    [data],
  )

  /**
   * Executes a test function against the viewer data.
   * @param fn - A function to execute with the viewer data.
   * @returns The result of the function execution or false if no data.
   */
  const test = useCallback(
    (fn: (viewer: any) => boolean) => (data ? fn(data.viewer) : false),
    [data],
  )

  /**
   * Checks if the viewer meets the specified conditions.
   * @param options - Object with the conditions to check against.
   * @param options.permissions - Array of permissions to check against.
   * @param options.groups - Array of group names to check against.
   * @param options.test - A function to execute with the viewer data.
   * @returns True if the viewer meets all the specified conditions.
   */
  const meetsConditions = useCallback(
    ({
      permissions = [], groups = [], test: testFn = null,
    } = {}): boolean => {
      if (!data?.viewer) return false
      const conditions = []
      if (permissions.length) conditions.push(hasPermissions(permissions))
      if (groups.length) conditions.push(isInGroups(groups))
      if (testFn) conditions.push(test(testFn))
      return conditions.every(Boolean)
    },
    [
      data,
      hasPermissions,
      isInGroups,
      test,
    ],
  )

  return {
    data,
    isLoggedIn:!!data?.viewer,
    hasPermissions,
    isInGroups,
    test,
    meetsConditions,
  }
}

export default useViewer
