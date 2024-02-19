import { loadable } from './utils/index.js'

export default [
  {
    path     :'/404',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Status404.js')),
    exact    :true,
  },
  {
    path     :'/maintenance',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Maintenance.js')),
    exact    :true,
  },
  {
    path     :'/login',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Login.js')),
    exact    :true,
  },
  {
    path     :'/profile',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Profile.js')),
    exact    :true,
    isPrivate:true,
  },
]
