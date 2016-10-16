import { takeEvery } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'
import { SIGN_UP_USER_REQUEST, SIGN_IN_USER_SUCCESS } from './actions/types'
import { browserHistory } from 'react-router'
import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

const signup = ({ email, password }) => {
  return axios.post(ROOT_URL + "/signup", {email, password})
    .then(response => {
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/')
    })
    .catch(response => console.log("axios err: ", response))
}

function* signupUser() {
  const { payload } = yield take(SIGN_UP_USER_REQUEST)
  console.log(payload)
  try {
    yield call(signup, payload)
    yield put({ type: 'SIGN_IN_USER_SUCCESS' })
  } catch (err) {
    console.log("gen err: ", err)
  }
}

export default function* rootSaga() {
  yield takeEvery(SIGN_UP_USER_REQUEST, signupUser)
}
