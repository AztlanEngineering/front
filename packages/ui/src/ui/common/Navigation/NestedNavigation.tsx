/* @aztlan/generator-front 1.1.4 */
import * as React from 'react'
import {
  useInsertionEffect, useContext, useMemo, useCallback,
  useEffect,
  useReducer,
} from 'react'

import {
  useLocation, Link, useHistory,
} from 'react-router-dom'
import Context from './NestedNavigationContext.js'
import { NestedNavigationPropTypes } from './types.js'
import type { NestedNavigationProps } from './types.js'
import type { ItemType } from './NestedNavigationContext.js'

import {
  Header, Footer, VerticalMenu,
  Paginator,
} from './common/index.js'

// const baseClassName = styleNames.base
// const componentClassName = 'navigation'

/**
 * description
 * @param {InferProps<typeof NestedNavigation.propTypes>} props -
 * @returns {React.ReactElement} - Rendered NestedNavigation
 */

function NestedNavigationHeader(props) {
  const {
    previous = 'Previous',
    content:children = 'children',
    fixed,
  } = useContext(Context)
  return (
    <Header
      fixed={fixed}
      {...props}
    >
      {children}
    </Header>
  )
}

/*
function NestedNavigationFooter(props) {
  const {
    //currentFooterContent:children,
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

function NestedNavigationPaginator(props) {
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
} */

function NestedNavigationVerticalMenu(props) {
  const {
    items,
    currentIndex,
    menuLabel,
    currentTree,
    hoverTree,
    maxLevel,
    selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)

  console.log(
    'JT', hoverTree,
  )

  const map = [
    <VerticalMenu
      items={items}
      label={menuLabel}
      onItemMouseEnterHandler={onItemMouseEnterHandler}
      {...props}
    />,
  ]

  const mapSubject = hoverTree.length ? hoverTree : currentTree

  map.push(...mapSubject.slice(
    0, mapSubject.length,
  ).map(({
    items, menuLabel,
    ...itemProps
  }) => items && (
    <VerticalMenu
      items={items}
      label={menuLabel}
      onItemMouseEnterHandler={onItemMouseEnterHandler}
      {...itemProps}
      {...props}
    />
  )))
  return (
    <div
      onMouseLeave={onMenuMouseLeave}
      className="container grid"
    >
      {map}
    </div>
  )
}

function prepareNavigationData(
  items, currentLevel = 0, urlIndex = {}, parentUrl = null,
) {
  /**
   * Enhances navigation items with depth levels, compiles a URL index for direct item access,
   * and annotates each item with a reference to its parent URL.
   *
   * @param {Array} items - The navigation items to process.
   * @param {number} [currentLevel=0] - The current depth level, starting from 0.
   * @param {Object} [urlIndex={}] - Accumulates mappings from URLs to items.
   * @param {string|null} [parentUrl=null] - The URL of the parent item.
   * @returns {Object} Contains annotated items, the maximum depth, and a URL index.
   */
  let maxLevel = currentLevel

  const preparedItems = items.reduce(
    (
      acc, item,
    ) => {
      const newItem = {
        ...item,
        level:currentLevel,
        parentUrl,
      }
      if (item.url) {
        urlIndex[item.url] = newItem
      }
      if (item.items) {
        const childData = prepareNavigationData(
          item.items, currentLevel + 1, urlIndex, item.url,
        )
        newItem.items = childData.preparedItems
        maxLevel = Math.max(
          maxLevel, childData.maxLevel,
        )
      }
      acc.push(newItem)
      return acc
    }, [],
  )

  return {
    preparedItems,
    maxLevel,
    urlIndex,
  }
}
function findInitialCurrentTree(
  urlIndex, url,
) {
  /**
   * Constructs the initial currentTree based on the current URL.
   *
   * @param {Object} urlIndex - A dictionary mapping URLs to their corresponding items.
   * @param {string} url - The current URL to find in the urlIndex.
   * @returns {Array} The path (array of items) from the root to the item matching the current URL.
   */
  const path = []
  let currentItem = urlIndex[url]

  while (currentItem) {
    path.unshift(currentItem)
    currentItem = urlIndex[currentItem.parentUrl]
  }

  return path
}

function navigationReducer(
  state, action,
) {
  switch (action.type) {
    case 'SELECT_URL': {
      const url = action.payload
      const item = state.urlIndex[url]
      if (!item) return state // URL not found

      // Calculate new currentTree based on the item's level
      const updatedCurrentTree = [
        ...state.currentTree.slice(
          0, item.level,
        ),
        item,
      ]

      return {
        ...state,
        currentItem:item,
        focus      :item.items ? item.level + 1 : 0,
        currentTree:updatedCurrentTree,
      }
    }
    case 'HOVER_ITEM': {
      const url = action.payload
      const item = state.urlIndex[url]
      if (!item) return state

      const isDifferentItem = state.hoverTree[state.hoverTree.length - 1]?.url !== url
      const needsUpdate = isDifferentItem || state.hoverTree.length !== item.level + 1

      if (needsUpdate) {
        const updatedHoverTree = [
          ...state.hoverTree.slice(
            0, item.level,
          ),
          item,
        ]

        return {
          ...state,
          hoverTree:updatedHoverTree,
        }
      }

      return state
    }
    case 'LEAVE_ITEM': {
      return {
        ...state,
        hoverTree:[], // Clear hoverTree when mouse leaves the navigation menu
      }
    }
    case 'RESET':
      return {
        ...state,
        focus      :0,
        currentItem:null,
        currentTree:[],
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function NestedNavigation({
  children, items,
  menuLabel,
}) {
  const {
    preparedItems, maxLevel, urlIndex,
  } = useMemo(
    () => prepareNavigationData(items), [items],
  )

  const location = useLocation()

  const initialCurrentTree = useMemo(
    () => findInitialCurrentTree(
      urlIndex, location.pathname,
    ), [
      urlIndex,
      location.pathname,
    ],
  )

  const initialStateWithPreparedItems = {
    focus      :0,
    items      :preparedItems,
    currentTree:initialCurrentTree,
    currentItem:urlIndex[location.pathname],
    urlIndex,
    hoverTree  :[],
  }

  const [
    state,
    dispatch,
  ] = useReducer(
    navigationReducer, initialStateWithPreparedItems,
  )

  const selectUrl = useCallback(
    (url) => {
      dispatch({
        type   :'SELECT_URL',
        payload:url,
      })
    }, [],
  )
  const onItemMouseEnterHandler = useCallback(
    (item) => (e) => {
      console.log(
        'onItemMouseEnterHandler', item.url,
      )
      dispatch({
        type   :'HOVER_ITEM',
        payload:item.url,
      })
    }, [],
  )
  const onMenuMouseLeave = useCallback(
    () => {
      console.log('onMenuMouseLeave')
      dispatch({ type: 'LEAVE_ITEM' })
    }, [],
  )

  useEffect(
    () => {
      if (location.pathname !== state.currentItem.url) {
        selectUrl(location.pathname)
      }
    },
    [location.pathname],
  )

  const resetNavigation = useCallback(
    () => {
      dispatch({ type: 'RESET' })
    }, [],
  )

  const value = useMemo(
    () => ({
      ...state,
      selectUrl,
      resetNavigation,
      onItemMouseEnterHandler,
      onMenuMouseLeave,
      menuLabel,
      items:preparedItems,
      maxLevel,
    }), [
      state,
      selectUrl,
      menuLabel,
      onItemMouseEnterHandler,
      onMenuMouseLeave,
      preparedItems,
      maxLevel,
    ],
  )

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

NestedNavigation.propTypes = NestedNavigationPropTypes

NestedNavigation.Header = React.memo(NestedNavigationHeader)
// NestedNavigation.Footer = React.memo(NestedNavigationFooter)
// NestedNavigation.Paginator = React.memo(NestedNavigationPaginator)
NestedNavigation.VerticalMenu = React.memo(NestedNavigationVerticalMenu)

export default NestedNavigation
