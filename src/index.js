import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga'

import App from './components/app'
import Signup from './components/signup'
import Signin from './components/signin'
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

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      </Route>
    </Router>
    </Provider>
  , document.querySelector('.container'))
