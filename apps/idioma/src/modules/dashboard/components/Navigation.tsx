import * as React from 'react'
import { useMemo } from 'react'
import {
  useFragment, graphql,
} from 'react-relay'
import {
  NestedNavigation, useApplicationContext,
  useViewer,
} from '@aztlan/ui'
// import { useOrganizationContext } from '@ldmnet/ui'
import { useParams } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import type { InferProps } from 'prop-types'
import paths from '../paths.js'
// import getRootItem from './navigationConfig.js'
// import type { Item } from '@aztlan/ui/dist/esm/common/Navigation/'

const FRAGMENT = graphql`
  fragment NavigationBoardMembershipsFragment on BoardMembershipNodeConnection {
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

function Navigation({ children }: InferProps<typeof Navigation.propTypes>) {
  const { data } = useViewer()
  const result = useFragment(
    FRAGMENT, data.boardMemberships,
  )
  /*

  const rootItem = useMemo(
    () => getRootItem(result
      ? {
        name           :result.name,
        url            :result.url,
        collectionEdges:result.xOwned?.edges,
      }
      : {}),
    [result],
  ) */

  const rootItem = useMemo(
    () => ({
      label:'Navigation',
      url  :paths.generatePath('HOME'),
      items:[
        {
          label:'Home',
          url  :paths.generatePath('HOME2'),
        },
        {
          label         :'Boards',
          displayItemsAs:'group',
          items         :result?.edges.map((edge) => {
            const { node } = edge
            return {
              label:node.board.name,
              url  :paths.generatePath(
                'BOARD_HOME', { board: node.board.id },
              ),
            }
          }) || [],
        },
        {
          label:'Profile',
          url  :paths.generatePath('PROFILE'),
        },
        /*
        {
          label         :'Themes',
          displayItemsAs:'group',
          items         :[
            {
              label:'Dark',
              url  :'/address2',
            },
            {
              label:'Light',
              url  :'/contact2',
            },
          ],
        }, */
      ],

    }), [],
  )

  return (
    <NestedNavigation
      rootItem={rootItem}
      // key={result?.name}
    >
      {children}
    </NestedNavigation>
  )
}

Navigation.propTypes = {
  children:PropTypes.node,
  rootItem:PropTypes.object,
}

export default Navigation
