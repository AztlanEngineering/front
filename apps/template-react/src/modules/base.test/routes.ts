import { loadable } from '../common/utils'

export default [
  /*
  {
    path:[
      MODULE_URLS.LIST,
      MODULE_URLS.LIST_PAGINATED,
      MODULE_URLS.LIST_CATEGORY,
      MODULE_URLS.LIST_CATEGORY_PAGINATED,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.blog` * './pages/List')),
    exact    :true,
  }, */
  {
    path     :'/formtest',
    component:loadable(() => import(/* webpackChunkName: `base.homepage` */ './pages/FormTest.tsx')),
    exact    :true,
  },
]
