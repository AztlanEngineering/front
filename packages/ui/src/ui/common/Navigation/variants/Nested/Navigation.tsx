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
import Canvas from './Canvas.js'
import Header from './Header.js'
import VerticalMenu from './VerticalMenu.js'

const baseClassName = styleNames.base
const componentClassName = 'nested-navigation'

/**
 * description
 * @param {InferProps<typeof NestedNavigation.propTypes>} props -
 * @returns {React.ReactElement} - Rendered NestedNavigation
 */

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
    ), [urlIndex],
  )

  const initialStateWithPreparedItems = useMemo(
    () => ({
      currentDepth:0,
      // items       :preparedRoot.items,
      currentTree :[...initialCurrentTree],
      currentItem :urlIndex[location.pathname],
      urlIndex,
      hoverTree   :[],
    }), [initialCurrentTree],
  )

  console.log(
    'INITIAL STATE', initialStateWithPreparedItems,
  )

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
      // items:preparedRoot.items,
      maxDepth,
    }), [
      state,
      selectUrl,
      label,
      focusParent,
      onItemMouseEnterHandler,
      onMenuMouseLeave,
      // preparedRoot.items,
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

NestedNavigation.Header = React.memo(Header)
// NestedNavigation.Footer = React.memo(Footer)
// NestedNavigation.Paginator = React.memo(Paginator)
NestedNavigation.VerticalMenu = React.memo(VerticalMenu)
NestedNavigation.Canvas = React.memo(Canvas)

export default NestedNavigation

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
