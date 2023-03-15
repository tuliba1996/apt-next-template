export type AuthResult = {
  accessToken?: string | undefined
  idToken?: string | undefined
  idTokenPayload?: any
  refreshToken?: string | undefined
  expiresIn?: number | undefined
  scope?: string | undefined
}
export type TSocialProvider = 'twitter' | 'google-oauth2' | 'facebook' | 'linkedin' | 'github'
