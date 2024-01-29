import log from './log.js'
import TokenStateManager from './TokenStateManager.js'

interface ITokenRefreshResponse {
  accessTokenExpiration :number;
  refreshTokenExpiration:number;
}

const fetchAccessToken = (
  mutation: string,
  url: string,
  extractor: (json: any) => ITokenRefreshResponse,
): Promise<ITokenRefreshResponse> => {
  log(
    '[fetchAccessToken]', 'Refreshing token',
  )

  return fetch(
    url, {
      method     :'POST',
      headers    :{ 'Content-Type': 'application/json' },
      body       :JSON.stringify({ query: mutation }),
      credentials:'include',
    },
  )
    .then((res) => res.json())
    .then((json) => {
      if (json.errors) {
        log(
          '[fetchAccessToken]', 'Failed to refresh tokens', json.errors,
        )
        TokenStateManager.logout()
        throw new Error('Failed to refresh tokens')
      } else {
        const {
          accessTokenExpiration, refreshTokenExpiration,
        } = extractor(json)
        TokenStateManager.saveAccessTokenExpiration(accessTokenExpiration)
        TokenStateManager.saveRefreshTokenExpiration(refreshTokenExpiration)
        return json
      }
    })
    .catch((err) => {
      log(
        '[fetchAccessToken]', 'Error during token refresh:', err,
      )
      throw err
    })
}

export default fetchAccessToken
