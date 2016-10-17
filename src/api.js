import { browserHistory } from 'react-router'
import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

export const signinAPI = ({ email, password }) => {
  return axios.post(ROOT_URL + "/signin", { email, password })
    .then(response => {
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/')
    })
}

export const signupAPI = ({ email, password }) => {
  return axios.post(ROOT_URL + "/signup", { email, password })
    .then(response => {
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/')
    })
}
