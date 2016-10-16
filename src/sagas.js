import { takeEvery } from 'redux-saga';
import { call, put, fork, take } from 'redux-saga/effects';
import { SIGN_UP_USER_REQUEST, SIGN_IN_USER_SUCCESS, SIGN_IN_USER_FAIL } from './actions/types';

function* signupUser() {
  console.log("in generator");

}

// function* watchSignin() {
//   yield takeEvery('AUTH_USER', signinUser);
// }

export default function* rootSaga() {
  yield* takeEvery(SIGN_UP_USER_REQUEST, signupUser);
}
