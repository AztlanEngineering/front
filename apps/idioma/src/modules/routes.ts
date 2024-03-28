import commonRoutes from './common/routes.js'
import baseHomepageRoutes from './base.homepage/routes.js'
import baseTestRoutes from './base.test/routes.js'
import dashboardRoutes, { prefetchRoutes as dashboardPrefetchRoutes } from './dashboard/routes.js'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...dashboardRoutes,
  ...commonRoutes,
]

export const prefetchRoutes = [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...dashboardPrefetchRoutes,
  ...commonRoutes,
]
