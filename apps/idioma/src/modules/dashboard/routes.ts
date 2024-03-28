/* @aztlan/generator-front 1.4.1 */
import React from 'react'
import { loadable } from '../common/utils/index.js'

import paths from './paths.js'

import Layer from './layer/Main.js'
// import QUERY_VIEW from './pages/ViewQuery.js'

export const internalRoutes = [
  {
    path:[
      paths.absolute.HOME,
      paths.absolute.HOME2,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Home.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.PROFILE],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Profile.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.NEW_BOARD],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/NewBoard.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.BOARD_SETTINGS],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/BoardSettings.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path:[
      paths.absolute.BOARD_HOME,
      paths.absolute.BOARD_HOME2,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Board.js')),
    exact    :true,
    isPrivate:true,
  },
]

export default [
  {
    path     :[`${paths.absolute.HOME}`],
    component:({
      children, ...props
    }) => React.createElement(
      Layer,
      {
        routes:internalRoutes,
        ...props,
      },
      children,
    ),
    // exact    :true,
    isPrivate:true,
  },
]

export const prefetchRoutes = internalRoutes
