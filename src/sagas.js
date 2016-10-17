import { takeEvery } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'
import { SIGN_UP_USER_REQUEST, SIGN_IN_USER_REQUEST, AUTH_USER_SUCCESS } from './actions/types'
import { signupAPI, signinAPI } from './api'
import { browserHistory } from 'react-router'

function* signinUser() {
   const { data } = yield take(SIGN_IN_USER_REQUEST)
   yield call(signinAPI, data)
   yield put({ type: AUTH_USER_SUCCESS })
   yield browserHistory.push('/imports')
}

function* signupUser() {
  const { data } = yield take(SIGN_UP_USER_REQUEST)
  yield call(signupAPI, data)
  yield put({ type: AUTH_USER_SUCCESS })
  yield browserHistory.push('/imports')
}

export default function* rootSaga() {
  yield [
    signinUser(),
    signupUser()
  ]
}
