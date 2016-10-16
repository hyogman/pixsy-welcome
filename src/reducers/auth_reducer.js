import { SIGN_UP_USER_REQUEST } from '../actions/types'

export default function(state={}, action) {
  switch (action.type) {
    case 'SIGN_UP_USER_SUCCESS':
      console.log("here in reducer")
      return { ...state, error: '', authenticated: true }
    default:
        return state

  }
}
