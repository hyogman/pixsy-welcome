import { AUTH_USER_SUCCESS, UNAUTH_USER } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
        return { ...state, error: '', authenticated: true }
    case UNAUTH_USER:
        return { ...state, error: '', authenticated: false }
    default:
        return state
      }
}
