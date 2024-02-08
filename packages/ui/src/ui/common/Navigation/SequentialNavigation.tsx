/* @aztlan/generator-front 1.1.4 */
import * as React from 'react'
import {
  useInsertionEffect, useContext, useMemo, useCallback,
} from 'react'

import {
  useLocation, Link,
} from 'react-router-dom'
import Context from './SequentialNavigationContext.js'
import { SequentialNavigationPropTypes } from './types.js'
import type { SequentialNavigationProps } from './types.js'
import type { ItemType } from './SequentialNavigationContext.js'

import {
  Header, Footer, VerticalMenu,
} from './common/index.js'

// const baseClassName = styleNames.base
// const componentClassName = 'navigation'

/**
 * description
 * @param {InferProps<typeof SequentialNavigation.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SequentialNavigation
 */

function SequentialNavigationHeader(props) {
  const {
    previous, next, currentContent: content,
    fixed,
  } = useContext(Context)
  return (
    <Header
      previous={previous}
      next={next}
      content={content}
      {...props}
    />
  )
}

function SequentialNavigationFooter(props) {
  const {
    currentContent: content, next,
    fixed,
  } = useContext(Context)
  return (
    <Footer
      content={content}
      next={next}
      {...props}
    />
  )
}

function SequentialNavigationVerticalMenu(props) {
  const {
    items, currentIndex, menuLabel,
  } = useContext(Context)

  return (
    <VerticalMenu
      items={items}
      currentIndex={currentIndex}
      label={menuLabel}
      {...props}
    />
  )
}

function SequentialNavigation({
  children,
  items,
  canContinue = true,
  menuLabel,
  fixed = false,
}: SequentialNavigationProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const location = useLocation()

  const currentIndex = useMemo(
    () => items.findIndex((item) => item.url === location.pathname),
    [
      items,
      location.pathname,
    ],
  )

  const transformedItems = useMemo(
    () => items.map((
      item, index,
    ) => ({
      ...item,
      disabled:index > currentIndex,
    }) as ItemType),
    [
      items,
      currentIndex,
    ],
  )

  const PreviousComponent = useCallback(
    (props) => {
      const previousIndex = currentIndex - 1
      if (previousIndex < 0) return null
      const previousComponent = React.createElement(
        Link,
        {
          ...props,
          to:items[previousIndex].url,
        },
        items[previousIndex].label,
      )
      return previousComponent
    },
    [
      currentIndex,
      items,
    ],
  )

  const NextComponent = useCallback(
    (props) => {
      if (!canContinue) return null
      const nextIndex = currentIndex + 1
      if (nextIndex >= items.length) return null
      const nextComponent = React.createElement(
        Link,
        {
          ...props,
          to:items[nextIndex].url,
        },
        items[nextIndex].label,
      )
      return nextComponent
    },
    [
      currentIndex,
      items,
      canContinue,
    ],
  )

  const currentContent = useMemo(
    () => items[currentIndex].label,
    [
      items,
      currentIndex,
    ],
  )

  const value = useMemo(
    () => ({
      previous:<PreviousComponent />,
      next    :<NextComponent />,
      currentContent,
      items   :transformedItems,
      menuLabel,
      currentIndex,
      fixed,
    }),
    [
      PreviousComponent,
      NextComponent,
      currentContent,
      transformedItems,
      menuLabel,
      currentIndex,
      fixed,
    ],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

SequentialNavigation.propTypes = SequentialNavigationPropTypes

SequentialNavigation.Header = React.memo(SequentialNavigationHeader)
SequentialNavigation.Footer = React.memo(SequentialNavigationFooter)
SequentialNavigation.VerticalMenu = React.memo(SequentialNavigationVerticalMenu)

export default SequentialNavigation
