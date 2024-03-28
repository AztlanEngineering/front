import * as React from 'react'
import { InferProps } from 'prop-types'
import * as PropTypes from 'prop-types'
import {
  AuthenticationDebugHeader,
  NavigationDebugHeader,
  NavigationHeader,
  NestedNavigation,
} from '@aztlan/ui'
import {
  SelectOrganizationHeader, SearchOrganizationHeader,
} from '@ldmnet/ui'

import { graphql } from 'react-relay'
import { debugRouteMap } from './constants.js'

import { FRAGMENT_AUTHENTICATION_DEBUG } from '../../../ApplicationQuery.js'

/*
const FRAGMENT_ORGANIZATION_SELECT = graphql`
  fragment HeaderGroupViewerOrganizationMembershipsFragment on OrganizationMembershipNodeConnection {
    edges {
      node {
        id
        role
        organization {
          id
          name
          url
        }
      }
    }
  }
`

const QUERY_SEARCH_ORGANIZATION = graphql`
  query HeaderGroupSearchOrganizationQuery($value: String!) {
    organizations(search: $value) {
      edges {
        node {
          id
          name
          url
        }
      }
    }
  }
` */

function HeaderGroup({
  wireframe,
  before,
  after,
}: InferProps<typeof HeaderGroup.propTypes>): React.ReactElement {
  return (
    <div className="container">
      {before}
      {/* wireframe ? 'Wireframe' : 'MAIN' */}
      {/*
      <SearchOrganizationHeader
        QUERY={QUERY_SEARCH_ORGANIZATION}
        accessor="organizations"
      />
    */}
      {!wireframe ? (
        <AuthenticationDebugHeader FRAGMENT={FRAGMENT_AUTHENTICATION_DEBUG} />
      ) : (
        <NavigationHeader left="viewer">User not connected</NavigationHeader>
      )}
      <NavigationDebugHeader
        items={debugRouteMap}
        className="container"
      />
      {/*
      <SelectOrganizationHeader FRAGMENT={FRAGMENT_ORGANIZATION_SELECT} />
        */}
      <NestedNavigation.Header />
      {after}
    </div>
  )
}

HeaderGroup.propTypes = {
  wireframe:PropTypes.bool,
  before   :PropTypes.node,
  after    :PropTypes.node,
}

export default HeaderGroup
