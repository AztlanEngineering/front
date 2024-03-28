/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationFooter, NestedNavigation, SwitchRoutes,
} from '@aztlan/ui'
import {
  debugRouteMap,
  // rootNavigationItem,
} from '../components/constants.js'
import {
  Navigation,
  // OrganizationProvider,
  HeaderGroup,
} from '../components/index.js'

const OrganizationProvider = React.Fragment

function LayerProvider({
  children, wireframe, ...props
}) {
  return <Navigation {...props}>{children}</Navigation>
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
