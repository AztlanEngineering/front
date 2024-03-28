import { graphql } from 'react-relay'

// Local Definitions
export const QUERY_APPLICATION = graphql`
  query ApplicationQuery($loginRequestedResource: String!, $board: ID) {
    viewer {
      id
      ...ApplicationQueryViewerFragment
    }
    ...MainLayerBoardProviderFragment @arguments(id: $board)
    ...LoginButtonFragment @arguments(resource: $loginRequestedResource)
    time
    ...LoginButtonViewerFragment
  }
`

export const FRAGMENT_VIEWER = graphql`
  fragment ApplicationQueryViewerFragment on UserNode {
    id
    firstName
    lastName
    created
    updated
    email
    profilePicture
    isActive
    isSuperuser
    #groups {
    #  edges {
    #    node {
    #      id
    #      name
    #    }
    #  }
    #}
    ...ProfileFragment
    ...ProfileDashboardFragment
    ...ApplicationQueryAuthenticationDebugFragment
    boardMemberships {
      ...HeaderGroupViewerBoardMembershipsFragment
      ...HomeBoardMembershipsFragment
      ...NavigationBoardMembershipsFragment
    }
  }
`

export const FRAGMENT_AUTHENTICATION_DEBUG = graphql`
  fragment ApplicationQueryAuthenticationDebugFragment on UserNode {
    id
    firstName
    lastName
    email
  }
`

export const MUTATION_LOGOUT = graphql`
  mutation ApplicationQueryLogoutMutation {
    deleteTokenCookie(input: { clientMutationId: "logout-delete-access" }) {
      deleted
      clientMutationId
    }
    deleteRefreshTokenCookie(
      input: { clientMutationId: "logout-delete-refresh" }
    ) {
      deleted
      clientMutationId
    }
  }
`
