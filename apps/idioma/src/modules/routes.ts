import commonRoutes from './common/routes.js'
import baseHomepageRoutes from './base.homepage/routes.js'
import baseTestRoutes from './base.test/routes.js'
import dashboardRoutes from './dashboard/routes.js'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...dashboardRoutes,
  ...commonRoutes,
]
