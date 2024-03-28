/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationFooter, NestedNavigation, SwitchRoutes,
} from '@aztlan/ui'
import { graphql } from 'react-relay'
import {
  debugRouteMap,
  // rootNavigationItem,
} from '../components/constants.js'
import {
  Navigation, BoardProvider, HeaderGroup,
} from '../components/index.js'
import paths from '../paths.js'

const FRAGMENT = graphql`
  fragment MainLayerBoardProviderFragment on Query
    @refetchable(queryName: "MainLayerBoardProviderRefetchQuery")
    @argumentDefinitions(id: { type: "ID" }) {
    board(id: $id) {
      id
      name
      created
      updated
    }
  }
`

function LayerProvider({
  children, wireframe, ...props
}) {
  return (
    <BoardProvider
      FRAGMENT={FRAGMENT}
      basePath={paths.absolute.HOME}
      baseBoardPath={paths.absolute.BOARD_HOME}
    >
      <Navigation {...props}>{children}</Navigation>
    </BoardProvider>
  )
}

function Main({
  title, children, sidebar, wireframe, footer, routes,
}) {
  const [
    InternalWrapper,
    internalWrapperProps,
  ] = useMemo(
    () => {
      if (wireframe) {
        return [
          Navigation,
          {
          // rootItem:rootNavigationItem,
            wireframe,
          },
        ]
      }
      return [
        LayerProvider,
        {
        // rootItem:rootNavigationItem,
          wireframe,
        },
      ]
    }, [wireframe],
  )

  return (
    <InternalWrapper {...internalWrapperProps}>
      <HeaderGroup wireframe={wireframe} />
      <NestedNavigation.Canvas
        className="md-span-10 background near"
        desktopVerticalMenuGroupSpan={4}
        desktopVerticalMenuSingleSpan={2}
        verticalMenuProps={{ hideRootItem: true }}
      >
        <div className="container">
          <SwitchRoutes
            items={routes}
            wireframe={wireframe}
            // NotFoundPage={Status404Page}
            // Wireframe={Wireframe}
          />
        </div>
      </NestedNavigation.Canvas>
      <NavigationFooter
        className="background near container"
        content={footer || 'Footer'}
      />
    </InternalWrapper>
  )
}

Main.propTypes = {
  title   :PropTypes.node,
  children:PropTypes.node,
  sidebar :PropTypes.node,
}
export default Main
