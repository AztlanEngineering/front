import { graphql } from 'react-relay'

// Local Definitions
export const QUERY_APPLICATION = graphql`
  query ApplicationQuery($resource: String!) {
    viewer {
      id
      ...ApplicationQueryViewerFragment
    }
    ...LoginButtonFragment @arguments(resource: $resource)
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
