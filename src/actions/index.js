import { SIGN_IN_USER_REQUEST, SIGN_UP_USER_REQUEST, UNAUTH_USER} from './types'

const ROOT_URL = 'http://localhost:3090'

export const signinUser = (data) => ({
    type: SIGN_IN_USER_REQUEST,
    data
  })

export const signupUser = (data) => ({
    type: SIGN_UP_USER_REQUEST,
    data
  })

export const logoutUser = () => {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}
