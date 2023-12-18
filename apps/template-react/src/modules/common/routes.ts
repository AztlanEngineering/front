import {
  loadable,
} from './utils'

export default [
  {
    path     :'/404',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Status404.tsx')),
    exact    :true,
  },
  {
    path     :'/maintenance',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Maintenance.tsx')),
    exact    :true,
  },
  {
    path     :'/login',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Login.tsx')),
    exact    :true,
  },
  {
    path     :'/profile',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Profile.tsx')),
    exact    :true,
    isPrivate:true,
  },
]
