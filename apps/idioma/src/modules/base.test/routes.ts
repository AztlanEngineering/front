import { loadable } from '../common/utils'
import FormTest from './pages/FormTest.js'

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
    component:loadable(() => import(/* webpackChunkName: `base.homepage` */ './pages/FormTest.js')),
    exact    :true,
    // Ideally we would store the query in a separate file
    // - here it depends on the component which goes against the idea of loading it dynamically
    QUERY    :FormTest.QUERY,
  },
  {
    path     :'/fileupload',
    component:loadable(() => import(/* webpackChunkName: `base.homepage` */ './pages/FileUpload.js')),
    exact    :true,
    // Ideally we would store the query in a separate file
    // - here it depends on the component which goes against the idea of loading it dynamically
    QUERY    :FormTest.QUERY,
  },
]
