import { takeEvery } from 'redux-saga'
import { call, put, take, fork } from 'redux-saga/effects'
import { SIGN_UP_USER_REQUEST, SIGN_IN_USER_REQUEST, AUTH_USER_SUCCESS } from './actions/types'
import { signupAPI, signinAPI } from './api'
import { browserHistory } from 'react-router'

function* signinUser(action) {
   yield call(signinAPI, action.data)
   yield put({ type: AUTH_USER_SUCCESS })
   yield browserHistory.push('/imports')
}

function* signupUser(action) {
  yield call(signupAPI, action.data)
  yield put({ type: AUTH_USER_SUCCESS })
  yield browserHistory.push('/imports')
}

function* watchSignin() {
  yield takeEvery(SIGN_IN_USER_REQUEST, signinUser)
}

function* watchSignup() {
  yield takeEvery(SIGN_UP_USER_REQUEST, signupUser)
}

export default function* rootSaga() {
  yield [
    watchSignin(),
    watchSignup()
  ]
}
