import log from './log'

const storage: Storage = localStorage
const keys = {
  loginState: 'isLoggedIn',
  accessToken: 'accessTokenExpiresAt',
  refreshToken: 'refreshTokenExpiresAt',
}

class TokenStateManager {
  static timeNow(): number {
    return Math.floor(Date.now() / 1000)
  }

  static saveTokenExpiration(key: string, expirationTimestamp: number): void {
    log(`[TokenStateManager] Saving ${key}: ${expirationTimestamp}`)
    storage.setItem(keys.loginState, '1')
    storage.setItem(key, expirationTimestamp.toString())
  }

  static isTokenValid(key: string): boolean {
    const expirationTimestamp = parseInt(storage.getItem(key) ?? '0', 10)
    const now = this.timeNow()
    return expirationTimestamp > now
  }

  static logout(): void {
    Object.values(keys).forEach((key) => storage.removeItem(key))
  }

  static hasValidAccessToken(): boolean {
    return this.isTokenValid(keys.accessToken)
  }

  static hasValidRefreshToken(): boolean {
    return this.isTokenValid(keys.refreshToken)
  }

  static shouldRefetchToken(): boolean {
    return this.hasValidRefreshToken() && !this.hasValidAccessToken()
  }

  static saveAccessTokenExpiration(expirationTimestamp: number): void {
    this.saveTokenExpiration(keys.accessToken, expirationTimestamp)
  }

  static saveRefreshTokenExpiration(expirationTimestamp: number): void {
    this.saveTokenExpiration(keys.refreshToken, expirationTimestamp)
  }
}

export default TokenStateManager
