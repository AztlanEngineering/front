import * as React from 'react'
import { InferProps } from 'prop-types'
import * as PropTypes from 'prop-types'
import {
  AuthenticationDebugHeader,
  NavigationDebugHeader,
  NavigationHeader,
  NestedNavigation,
} from '@aztlan/ui'
import { graphql } from 'react-relay'
import {
  SelectBoardHeader, SearchBoardHeader,
} from './Board/index.js'

import { debugRouteMap } from './constants.js'

import { FRAGMENT_AUTHENTICATION_DEBUG } from '../../../ApplicationQuery.js'

const FRAGMENT_BOARD_SELECT = graphql`
  fragment HeaderGroupViewerBoardMembershipsFragment on BoardMembershipNodeConnection {
    edges {
      node {
        id
        role
        board {
          id
          name
        }
      }
    }
  }
`

const QUERY_SEARCH_BOARD = graphql`
  query HeaderGroupSearchBoardQuery($value: String!) {
    boards(search: $value) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

function HeaderGroup({
  wireframe,
  before,
  after,
}: InferProps<typeof HeaderGroup.propTypes>): React.ReactElement {
  return (
    <div className="container">
      {before}
      {/* wireframe ? 'Wireframe' : 'MAIN' */}
      <SearchBoardHeader
        QUERY={QUERY_SEARCH_BOARD}
        accessor="boards"
      />
      {!wireframe ? (
        <AuthenticationDebugHeader FRAGMENT={FRAGMENT_AUTHENTICATION_DEBUG} />
      ) : (
        <NavigationHeader left="viewer">User not connected</NavigationHeader>
      )}
      <NavigationDebugHeader
        items={debugRouteMap}
        className="container"
      />
      <SelectBoardHeader FRAGMENT={FRAGMENT_BOARD_SELECT} />
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
