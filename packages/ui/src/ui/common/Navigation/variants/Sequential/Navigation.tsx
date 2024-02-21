/* @aztlan/generator-front 1.1.4 */
import * as React from 'react'
import {
  useInsertionEffect, useContext, useMemo,
} from 'react'

import {
  useLocation, Link,
} from 'react-router-dom'
import Context from './Context.js'
import { propTypes } from './types.js'
import type {
  Props, ItemType,
} from './types.js'

import {
  Header, Footer, VerticalMenu,
  Paginator,
} from '../../common/index.js'

// const baseClassName = styleNames.base
// const componentClassName = 'navigation'

/**
 * description
 * @param {InferProps<typeof SequentialNavigation.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SequentialNavigation
 */

function SequentialNavigationHeader(props) {
  const {
    previous, next, currentContent: children,
    fixed,
    hidePreviousButton,
    hideNextButton,
  } = useContext(Context)
  return (
    <Header
      left={!hidePreviousButton && previous}
      right={!hideNextButton && next}
      fixed={fixed}
      {...props}
    >
      {children}
    </Header>
  )
}

function SequentialNavigationFooter(props) {
  const {
    currentFooterContent:children,
    next,
    fixed,
    hideNextButton,
  } = useContext(Context)
  return (
    <Footer
      right={!hideNextButton && next}
      fixed={fixed}
      {...props}
    >
      {children}
    </Footer>
  )
}

function SequentialNavigationPaginator(props) {
  const {
    previous, next,
    hidePreviousButton,
    hideNextButton,
  } = useContext(Context)
  return (
    <Paginator
      left={!hidePreviousButton && previous}
      right={!hideNextButton && next}
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
  menuLabel,
  fixed = false,
  handlerNext,
  handlerPrevious,
  hideNextButton = false,
  hidePreviousButton = false,
  currentFooterContent:userCurrentFooterContent,
  submit,
}: Props): React.ReactElement {
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

  const previous = useMemo(
    () => {
      const previousIndex = currentIndex - 1
      if (previousIndex < 0) return null

      const previousItem = items[previousIndex]
      const previousComponent = handlerPrevious
        ? React.createElement(
          'button',
          {
            type   :'button',
            onClick:handlerPrevious,
          },
          previousItem.label,
        )
        : React.createElement(
          Link,
          { to: previousItem.url },
          previousItem.label,
        )
      return previousComponent
    },
    [
      handlerPrevious,
      currentIndex,
      items,
    ],
  )

  const next = useMemo(
    () => {
      const nextIndex = currentIndex + 1
      if (nextIndex > items.length) return null
      if (nextIndex === items.length) {
        if (!submit) return null
        return submit
      }

      const nextItem = items[nextIndex]

      const nextComponent = handlerNext
        ? React.createElement(
          'button',
          {
            type   :'button',
            onClick:handlerNext,
          },
          nextItem.label,
        )
        : React.createElement(
          Link,
          { to: nextItem.url },
          nextItem.label,
        )
      return nextComponent
    },
    [
      handlerNext,
      currentIndex,
      items,
    ],
  )

  const currentContent = useMemo(
    () => items[currentIndex].label,
    [
      items,
      currentIndex,
    ],
  )

  const currentFooterContent = useMemo(
    // UNSTABLE - unsure whether the userCurrentFooterContent should be the default or the item one
    () => ((typeof userCurrentFooterContent !== undefined)
      ? userCurrentFooterContent
      : items[currentIndex].footerContent
    ),
    [
      items,
      currentIndex,
      userCurrentFooterContent,
    ],
  )

  const value = useMemo(
    () => ({
      previous,
      next,
      currentContent,
      currentFooterContent,
      items:transformedItems,
      menuLabel,
      currentIndex,
      fixed,
      hidePreviousButton,
      hideNextButton,
    }),
    [
      previous,
      next,
      currentContent,
      currentFooterContent,
      transformedItems,
      menuLabel,
      currentIndex,
      fixed,
    ],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

SequentialNavigation.propTypes = propTypes

SequentialNavigation.Header = React.memo(SequentialNavigationHeader)
SequentialNavigation.Footer = React.memo(SequentialNavigationFooter)
SequentialNavigation.Paginator = React.memo(SequentialNavigationPaginator)
SequentialNavigation.VerticalMenu = React.memo(SequentialNavigationVerticalMenu)

export default SequentialNavigation
