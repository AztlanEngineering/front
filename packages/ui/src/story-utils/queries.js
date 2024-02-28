import { graphql } from 'react-relay'

export const QUERY_APPLICATION = graphql`
  query queriesApplicationQuery {
    time
    viewer {
      ...ViewerProfileFragment
    }
  }
`
