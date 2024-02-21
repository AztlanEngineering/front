/* @aztlan/generator-front 1.1.4 */
import * as React from 'react'
import {
  useInsertionEffect, useContext, useMemo, useCallback,
  useEffect,
  useReducer,
} from 'react'

import { useLocation } from 'react-router-dom'
import Context from './Context.js'
import { propTypes } from './types.js'
import type { Props } from './types.js'
import {
  findInitialCurrentTree, prepareNavigationData,
} from './utils.js'
import reducer from './reducer.js'
import {
  Header,
  // Footer,
  VerticalMenu,
  // Paginator,
} from '../../common/index.js'

// const baseClassName = styleNames.base
// const componentClassName = 'navigation'

/**
 * description
 * @param {InferProps<typeof NestedNavigation.propTypes>} props -
 * @returns {React.ReactElement} - Rendered NestedNavigation
 */

function NestedNavigationHeader(props) {
  const {
    // previous = 'Previous',
    title:children = 'children',
    focusParent,
    focus,
    fixed,
  } = useContext(Context)

  return (
    <Header
      fixed={fixed}
      left={focus > Number(0) ? (
        <button
          onClick={focusParent}
          type="button"
        >
          previous
        </button>
      ) : null}
      {...props}
    >
      {JSON.stringify(focus)}
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
    // currentIndex,
    menuLabel,
    currentTree,
    hoverTree,
    // maxLevel,
    // selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)

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
    items:subitems,
    ...itemProps
  }) => subitems && (
    <VerticalMenu
      items={subitems}
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

function NestedNavigation({
  children,
  items,
  menuLabel,
}:Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
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
    reducer, initialStateWithPreparedItems,
  )

  const selectUrl = useCallback(
    (url) => {
      dispatch({
        type   :'SELECT_URL',
        payload:url,
      })
    }, [],
  )
  const focusParent = useCallback(
    () => {
      dispatch({ type: 'FOCUS_PARENT' })
    }, [],
  )
  const onItemMouseEnterHandler = useCallback(
    (item) => () => {
      if (item.items) {
        dispatch({
          type   :'HOVER_ITEM',
          payload:item.url,
        })
      }
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
      focusParent,
      onItemMouseEnterHandler,
      onMenuMouseLeave,
      menuLabel,
      items:preparedItems,
      maxLevel,
    }), [
      state,
      selectUrl,
      menuLabel,
      focusParent,
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

NestedNavigation.propTypes = propTypes

NestedNavigation.Header = React.memo(NestedNavigationHeader)
// NestedNavigation.Footer = React.memo(NestedNavigationFooter)
// NestedNavigation.Paginator = React.memo(NestedNavigationPaginator)
NestedNavigation.VerticalMenu = React.memo(NestedNavigationVerticalMenu)

export default NestedNavigation
