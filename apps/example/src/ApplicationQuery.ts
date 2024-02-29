import { graphql } from 'react-relay'

// Local Definitions
export const QUERY_APPLICATION = graphql`
  query ApplicationQuery($loginRequestedResource: String!) {
    viewer {
      id
      ...ApplicationQueryViewerFragment
    }
    ...LoginButtonFragment
      @arguments(loginRequestedResource: $loginRequestedResource)
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
    ...BaseAuthenticationDebugFragment
  }
`
