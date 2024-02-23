/* @aztlan/generator-front 1.1.4 */
import * as React from 'react'
import {
  useInsertionEffect, useContext, useMemo, useCallback,
  useEffect,
  useReducer,
} from 'react'

import {
  useHistory, useLocation,
} from 'react-router-dom'
import styleNames from '@aztlan/bem'
import Context from './Context.js'
import { propTypes } from './types.js'
import type {
  Item, Props,
} from './types.js'
import {
  findCurrentTree, prepareNavigationData,
} from './utils.js'
import reducer from './reducer.js'
import {
  Header,
  // Footer,
  VerticalMenu,
  // Paginator,
} from '../../common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'nested-navigation'

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
    currentDepth,
    fixed,
  } = useContext(Context)

  return (
    <Header
      fixed={fixed}
      left={currentDepth !== Number(0) ? (
        <button
          onClick={focusParent}
          type="button"
        >
          previous
        </button>
      ) : null}
      {...props}
    >
      {JSON.stringify(currentDepth)}
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
    root,
    // currentIndex,
    label,
    currentTree,
    hoverTree,
    currentItem,
    // maxDepth,
    // selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)

  /*
  const map = [
    <VerticalMenu
      key={currentItem?.url}
      items={items}
      label={menuLabel}
      onItemMouseEnterHandler={onItemMouseEnterHandler}
      {...props}
    />,
  ] */

  const mapSubject = hoverTree.length ? hoverTree : currentTree
  const map = []
  map.push(...mapSubject.slice(
    0, mapSubject.length,
  ).map(({
    items:subitems,
    ...itemProps
  }) => subitems && (
    <VerticalMenu
      key={itemProps?.url}
      items={subitems}
      label={label}
      onItemMouseEnterHandler={onItemMouseEnterHandler}
      {...itemProps}
      {...props}
    />
  )))
  return (
    <div
      onMouseLeave={onMenuMouseLeave}
      className="group grid container"
    >
      {map}
    </div>
  )
}

const componentCanvasClassName = 'canvas'

function NestedNavigationCanvas({
  children, ...props
}) {
  /*
  const {
    root,
    // currentIndex,
    //label,
    currentTree,
    hoverTree,
    // maxDepth,
    // selectUrl,
    onItemMouseEnterHandler,
    onMenuMouseLeave,
  } = useContext(Context)
   */

  return (
    <div className={[
      'grid container',
      baseClassName,
      componentCanvasClassName,
      props.className,
    ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

function NestedNavigation({
  id,
  className:userClassName,
  style,
  children,
  items,
  label,
  url,
}:Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const root = {
    label,
    items,
    url,
  } as Item

  const {
    preparedRoot, maxDepth, urlIndex,
  } = useMemo(
    () => prepareNavigationData(root), [items],
  )

  const location = useLocation()

  const initialCurrentTree = useMemo(
    () => findCurrentTree(
      urlIndex, location.pathname,
    ), [
      urlIndex,
      location.pathname,
    ],
  )

  const initialStateWithPreparedItems = {
    currentDepth:0,
    items       :preparedRoot.items,
    currentTree :[...initialCurrentTree],
    currentItem :urlIndex[location.pathname],
    urlIndex,
    hoverTree   :[],
  }

  const [
    state,
    dispatch,
  ] = useReducer(
    reducer, initialStateWithPreparedItems,
  )

  const history = useHistory()

  const selectUrl = useCallback(
    (u) => {
      dispatch({
        type   :'SELECT_URL',
        payload:u,
      })
    }, [],
  )
  const focusParent = useCallback(
    () => {
      history.push(state.currentItem.parentUrl)
      dispatch({ type: 'FOCUS_PARENT' })
    }, [state.currentItem],
  )
  const onItemMouseEnterHandler = useCallback(
    (item) => () => {
      // if (item.items) {
      dispatch({
        type   :'HOVER_ITEM',
        payload:item.url,
      })
      // }
    }, [],
  )
  const onMenuMouseLeave = useCallback(
    () => {
      dispatch({ type: 'LEAVE_MENU' })
    }, [],
  )

  const focusMenu = useCallback(
    () => {
      dispatch({ type: 'FOCUS_MENU' })
    }, [],
  )

  const focusCanvas = useCallback(
    () => {
      dispatch({ type: 'FOCUS_CANVAS' })
    }, [],
  )

  useEffect(
    () => {
      if (location.pathname !== state.currentItem?.url) {
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
      focusMenu,
      focusCanvas,
      onItemMouseEnterHandler,
      onMenuMouseLeave,
      label,
      items:preparedRoot.items,
      maxDepth,
    }), [
      state,
      selectUrl,
      label,
      focusParent,
      onItemMouseEnterHandler,
      onMenuMouseLeave,
      preparedRoot.items,
      maxDepth,
    ],
  )

  return (
    <Context.Provider value={value}>
      <div
        id={id}
        className={[
          baseClassName,
          componentClassName,
          userClassName,
          'grid container',
          state.currentDepth === -1 && 'focus-canvas',
        ]
          .filter((e) => e)
          .join(' ')}
        style={{
          '--tree-depth':state.currentTree.length - 1,
          '--offset'    :state.currentDepth === -1
            ? state.currentTree.length
            : state.currentDepth,
          ...style,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </Context.Provider>
  )
}

NestedNavigation.propTypes = propTypes

NestedNavigation.Header = React.memo(NestedNavigationHeader)
// NestedNavigation.Footer = React.memo(NestedNavigationFooter)
// NestedNavigation.Paginator = React.memo(NestedNavigationPaginator)
NestedNavigation.VerticalMenu = React.memo(NestedNavigationVerticalMenu)
NestedNavigation.Canvas = React.memo(NestedNavigationCanvas)

export default NestedNavigation
