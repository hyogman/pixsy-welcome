import { takeEvery } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'
import { SIGN_UP_USER_REQUEST, SIGN_IN_USER_SUCCESS } from './actions/types'
import { browserHistory } from 'react-router'
import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

const signupAPI = ({ email, password }) => {
  return axios.post(ROOT_URL + "/signup", {email, password})
    .then(response => {
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/')
    })
    .catch(response => console.log("*Account already created: ", response))
}

function* signupUser() {
  const { payload } = yield take(SIGN_UP_USER_REQUEST)
  try {
    yield call(signupAPI, payload)
    yield put({ type: 'SIGN_UP_USER_SUCCESS' })
  } catch (err) {
    console.log("Account already created: ", err)
  }
}

export default function* rootSaga() {
  yield takeEvery(SIGN_UP_USER_REQUEST, signupUser)
}
