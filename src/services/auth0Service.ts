import auth0, { AuthorizeOptions, DbSignUpOptions, LoginOptions } from 'auth0-js'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'
import toast from 'react-hot-toast'
import { AuthResult, TSocialProvider } from '../type/auth'
import local from './local-storage/local'
import {ACCESS_TOKEN, EXPIRES_AT, ID_TOKEN, REFRESH_TOKEN} from "../constans/storage";


export const decodeJWT = (accessToken: string) => {
  const decoded = jwt_decode(accessToken) as {
    email: string
  }
  return decoded
}

export const getJWTParse = (idToken?: string) => {
  const jwtDecoded = decodeJWT(idToken || (local.getItem<string>(ID_TOKEN) as string))
  return jwtDecoded
}

const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
  clientID: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID!,
  audience: process.env.NEXT_PUBLIC_AUTH_AUDIENCE!,
  redirectUri: process.env.NEXT_PUBLIC_AUTH_URI!,
  responseType: 'code',
  scope: process.env.NEXT_PUBLIC_AUTH_SCOPE!
}

export class AuthService {
  webAuth = new auth0.WebAuth(auth0Config)
  authenticate = new auth0.Authentication(auth0Config)
  checkSSO() {
    this.authenticate.getSSOData((err, authResult) => {})
  }

  login(params?: AuthorizeOptions) {
    this.webAuth.authorize({ ...params, prompt: 'select_account' })
  }

  loginWithSocial(connection: TSocialProvider) {
    this.webAuth.authorize({
      connection: connection,
      prompt: 'select_account'
    })
  }

  loginWithUser({ username, password }: LoginOptions) {
    return new Promise((resolve, reject) => {
      this.webAuth.client.login(
        {
          username,
          password,
          realm: 'Username-Password-Authentication'
        },
        (err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult)
            resolve(true)
          } else if (err) {
            reject(err)
          }
        }
      )
    })
  }

  register({ email, password }: Pick<DbSignUpOptions, 'email' | 'password'>) {
    return new Promise((resolve, reject) => {
      this.webAuth.signupAndAuthorize(
        {
          email,
          password,
          connection: 'BAM-Users'
        },
        (err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult)
            resolve(true)
          } else if (err) {
            reject(err)
          }
        }
      )
    })
  }

  refreshToken() {
    const options = {
      grantType: 'refresh_token',
      refresh_token: local.getItem<string>(REFRESH_TOKEN),
      client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID!
    }
    this.authenticate.oauthToken(options, (err, authResult) => {
      if (authResult) {
        this.updateStorage(authResult)
      } else {
        this.logout()
      }
    })
  }

  resetPassword({ email }: { email: string }) {
    return new Promise((resolve, reject) => {
      this.webAuth.changePassword(
        {
          email,
          connection: 'BAM-Users'
        },
        (err, authResult) => {
          if (authResult) {
            resolve(true)
            toast.success(authResult)
          } else if (err) {
            reject(err)
          }
        }
      )
    })
  }

  clearAll() {
    // LocalStorage.clear()
    Router.replace('/login')
    return
  }

  setSession(authResult: AuthResult) {
    if (!authResult.accessToken || !authResult.idToken) {
      this.clearAll()
      return
    }

    const dataParse = getJWTParse(authResult.idToken)
    // const isEmailVerify = dataParse?.[urlCheckRole]?.email_verified || false

    if (dataParse) {
      const expiresAt = authResult?.expiresIn ? JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()) : 0
      local.setItem(ACCESS_TOKEN, authResult.accessToken)
      local.setItem(ID_TOKEN, authResult.idToken)
      local.setItem(EXPIRES_AT, expiresAt)
      local.setItem(REFRESH_TOKEN, authResult.refreshToken)
      Router.replace('/')
    }
  }

  updateStorage(authResult: AuthResult) {
    if (!authResult.accessToken || !authResult.idToken) {
      this.clearAll()
      return
    }
    const expiresAt = authResult?.expiresIn ? JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()) : 0
    local.setItem(ACCESS_TOKEN, authResult.accessToken)
    local.setItem(EXPIRES_AT, expiresAt)
  }

  handleAuthentication = () => {
    const searchParams = new URLSearchParams(window.location.search)
    this.webAuth.client.oauthToken(
      {
        code: searchParams.get('code'),
        state: searchParams.get('state'),
        grantType: 'authorization_code',
        redirectUri: auth0Config.redirectUri
      },
      (err, authResult) => {
        if (authResult) {
          this.setSession(authResult)
        } else if (err) {
          console.log(err)
        }
      }
    )
  }

  logout() {
    return new Promise((resolve) => {
      local.clear()
      this.webAuth.logout({
        returnTo: process.env.NEXT_PUBLIC_AUTH_LOGOUT_RETURN!,
        clientID: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID!
      })
      resolve(true)
    })
  }

  isAuthenticated = () => {
    const accessToken = local.getItem<string>(ACCESS_TOKEN)
    return !!accessToken
  }
}

export const handleLogout = () => {
  const authService = new AuthService()
  return authService.logout()
}

export const authService = new AuthService()
