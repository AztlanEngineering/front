import { loadable } from '../common/utils'

export default [
  {
    path: '/login',
    component: loadable(() => import(/* webpackChunkName: `common` */ './pages/Login.tsx')),
    exact: true,
  },
]
