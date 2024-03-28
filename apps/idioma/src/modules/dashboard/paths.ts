import { getRoutes as getPaths } from '@aztlan/ui'

export const BOARD_PARAM = ':board([0-9a-z-=.]{3,80})'
export const GLOBAL_ID_PARAM = ':globalId([0-9a-z-.=]{15,100})'
export const SLUG_PARAM = ':slug([0-9a-z_-]{0,14})'

export default getPaths(
  '/d', {
    HOME          :'/',
    HOME2         :'/home',
    PROFILE       :'/profile',
    NEW_BOARD     :'/new-board',
    BOARD_HOME    :`/${BOARD_PARAM}`,
    BOARD_HOME2   :`/${BOARD_PARAM}/home`,
    BOARD_SETTINGS:`/${BOARD_PARAM}/settings`,
  },
)
