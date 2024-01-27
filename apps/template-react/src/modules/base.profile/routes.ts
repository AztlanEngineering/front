import { loadable } from '../common/utils/index.ts'

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
    path     :'/profile',
    component:loadable(() => import(/* webpackChunkName: `base.homepage` */ './pages/Profile.tsx')),
    exact    :true,
    isPrivate:true,
  },
]
