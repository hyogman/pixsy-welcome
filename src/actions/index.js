import { SIGN_IN_USER_REQUEST, SIGN_UP_USER_REQUEST } from './types';

const ROOT_URL = 'http://localhost:3090';

export const signinUser = (data) => {
  console.log("in action: ", data);
  return {
    type: SIGN_IN_USER_REQUEST,
    payload: data
  };
}

export const signupUser = (data) => {
  console.log("in signup action", data);
  return {
    type: SIGN_UP_USER_REQUEST,
    payload: data
  }
}
