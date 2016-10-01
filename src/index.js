import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import App from './components/app';
import Signup from './components/signup';
import Signin from './components/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App}/>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Router>
    </Provider>
  , document.querySelector('.container'));
