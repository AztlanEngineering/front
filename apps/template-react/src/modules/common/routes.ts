import { loadable } from '../common/utils'

export default [
  {
    path: '/404',
    component: loadable(() => import(/* webpackChunkName: `common` */ './pages/Status404.tsx')),
    exact: true,
  },
  {
    path: '/maintenance',
    component: loadable(() => import(/* webpackChunkName: `common` */ './pages/Maintenance.tsx')),
    exact: true,
  },
]
