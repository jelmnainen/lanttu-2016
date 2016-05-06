import 'core-js/shim';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, browserHistory } from 'react-router';

import store from './store';
import routes from './routes';

const container = document.getElementById('root');
const root = (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
);

ReactDOM.render(root, container);