import { AUTH_USER_SUCCESS, UN_AUTH_USER } from '../actions/types'

export default function(state={}, action) {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
        return { ...state, error: '', authenticated: true }
    case UN_AUTH_USER:
        return { ...state, error: '', authenticated: false }
    default:
        return state
      }
}
