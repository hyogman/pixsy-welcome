import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import createSagaMiddleware from 'redux-saga'

import App from './components/app'
import Signup from './components/signup'
import Signin from './components/signin'
import Imports from './components/imports'
import Landing from './components/landing'
import RequireAuth from './components/require_auth'

import { AUTH_USER_SUCCESS } from './actions/types'

import reducers from './reducers'
import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
// then run the saga
sagaMiddleware.run(rootSaga)

const token = localStorage.getItem('token');
// if we have token consider user to be signed in
if (token) {
  // update app state
  store.dispatch({ type: AUTH_USER_SUCCESS });
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/imports" component={RequireAuth(Imports)} />
      </Route>
    </Router>
    </Provider>
  , document.querySelector('.container'))
