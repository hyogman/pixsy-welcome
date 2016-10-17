import { takeEvery } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'
import { SIGN_UP_USER_REQUEST, SIGN_IN_USER_REQUEST, SIGN_IN_USER_SUCCESS } from './actions/types'
import { signupAPI, signinAPI } from './api'

function* signinUser() {
   const { user } = yield take(SIGN_IN_USER_REQUEST)
   console.log("in sign in generator: ", user)
   try {
     yield call(signinAPI, user)
   } catch(err) {
     console.log("Credentials don't match", err)
   }
}

function* signupUser() {
  const { user } = yield take(SIGN_UP_USER_REQUEST)
  console.log("in sign up generator", user)
  try {
    yield call(signupAPI, user)
    yield put({ type: 'SIGN_UP_USER_SUCCESS' })
  } catch (err) {
    console.log("Account already created: ", err)
  }
}

export default function* rootSaga() {
  // yield takeEvery(SIGN_IN_USER_REQUEST, signinUser)
  // yield takeEvery(SIGN_UP_USER_REQUEST, signupUser)
  yield [
    signinUser(),
    signupUser()
  ]
}
