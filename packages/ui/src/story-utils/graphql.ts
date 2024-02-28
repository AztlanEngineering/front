import { graphql } from 'react-relay'

export const FRAGMENT_VIEWER = graphql`
  fragment graphqlStoryUtilsViewerFragment on UserNode {
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
  }
`

export const MUTATION_LOGOUT = graphql`
  mutation graphqlStoryUtilsLogoutMutation {
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
