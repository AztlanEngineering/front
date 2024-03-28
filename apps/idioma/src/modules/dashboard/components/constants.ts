import paths from '../paths.js'

/*
export const rootNavigationItem = {
  label:'Menu',
  url  :paths.absolute.HOME,
  items:[
    {
      label         :'Actions',
      priority      :1,
      displayItemsAs:'group',
      items         :[],
    },
    {
      label:'Collections',
      url  :`${paths.base}/collections`,
      items:[
        {
          label:'Collection 1',
          url  :`${paths.base}/collections/collection1`,
        },
        {
          label:'Collection 2',
          url  :`${paths.base}/collections/collection2`,
        },
      ],
    },
    {
      label:'Profile',
      url  :paths.absolute.PROFILE,
    },
    {
      label:'Settings',
      url  :paths.absolute.SETTINGS,
    },
  ],
} */

export const debugRouteMap = [
  {
    url  :'/',
    label:'Homepage',
  },
  {
    url  :'/login',
    label:'Login',
  },
  {
    url  :'/profile',
    label:'Profile',
  },
  {
    url  :'/d',
    label:'Dashboard',
  },
  {
    url  :'/maintenance',
    label:'Maintenance',
  },
  {
    url  :'/formtest',
    label:'DebugForm',
  },
  {
    url  :'/404',
    label:'Status404',
  },
]
