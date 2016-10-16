import { takeEvery } from 'redux-saga';
import { call, put, fork, take } from 'redux-saga/effects';
import { SIGN_IN_USER_REQUEST, SIGN_IN_USER_SUCCESS, SIGN_IN_USER_FAIL } from './actions/types';

function* signinUser() {
  console.log("in generator");

}

// function* watchSignin() {
//   yield takeEvery('AUTH_USER', signinUser);
// }

export default function* rootSaga() {
  yield* takeEvery(SIGN_IN_USER_REQUEST, signinUser);
}
