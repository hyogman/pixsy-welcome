import { SIGN_IN_USER_SUBMIT, SIGN_IN_USER_REQUEST, SIGN_IN_USER_SUCCESS, SIGN_IN_USER_FAIL } from '../actions/types'

export default function(state={}, action) {
  switch (action.type) {
    case 'SIGN_IN_USER_SUCCESS':
      console.log("here");
      return { ...state, error: '', authenticated: true };
    default:
        return state;

  }
}
