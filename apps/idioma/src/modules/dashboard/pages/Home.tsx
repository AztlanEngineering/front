/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  NestedNavigation, NavigationFooter, useViewer,
} from '@aztlan/ui'
import {
  useFragment, graphql,
} from 'react-relay'
import {
  // BoardProvider,
  // HeaderGroup,
  Navigation,
} from '../components/index.js'

const FRAGMENT = graphql`
  fragment HomeBoardMembershipsFragment on BoardMembershipNodeConnection {
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

function Home({
  wireframe, ...props
}) {
  const { data } = useViewer()

  const result = useFragment(
    FRAGMENT, data.boardMemberships,
  )

  const boardMemberships = result?.edges || {}

  return (
    <div className="container">
      <ul>
        {boardMemberships.map((membership) => {
          const { node } = membership
          return (
            <li key={node.board.url}>
              <Link
                to={`/d/${node.board.id}`}
                key={node.id}
              >
                {node.role}
                {' '}
                {' - '}
                {node.board.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/*
function Wrapper({
  wireframe, ...props
}) {
  const rootItem = {
    name :'Home',
    url  :'home',
    items:[
      {
        label:'Dashboard',
        url  :'dashboard',
      },
      {
        label:'Board',
        url  :'board',
      },
    ],
  }
  return (
    <BoardProvider>
      <Navigation rootItem={rootItem}>
        <Home
          {...props}
          wireframe={wireframe}
        />
      </Navigation>
    </BoardProvider>
  )
} */

// export default Wrapper
export default Home
