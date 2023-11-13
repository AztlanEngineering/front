/* <%= pkg %> <%= version %> */
import { urljoin as _u } from 'utils'

const basePath = '/<%= lower %>/'
//const slugUrlParam = ':slug([0-9a-z-]{3,80})'
//const redeemParam = ':slug([0-9a-f]{24})'

export default {
  HOME   :basePath,
  PROFILE:_u(basePath, 'profile')
}

