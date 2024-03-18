import commonRoutes from './common/routes.js'
import baseHomepageRoutes from './base.homepage/routes.js'
import baseTestRoutes from './base.test/routes.js'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...commonRoutes,
]
