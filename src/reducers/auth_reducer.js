import { AUTH_USER } from '../actions/index'

export default function(state={}, action) {
  switch (action.type) {
    case AUTH_USER:
      console.log("here");
      return state;
    default:
        return state;

  }
}
