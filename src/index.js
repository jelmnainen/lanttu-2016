import 'core-js/shim';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import store from './store';

const history = createBrowserHistory();
const container = document.getElementById('root');
const root = (
  <Provider store={store}>
    <h1>Hello world!</h1>
  </Provider>
);

ReactDOM.render(root, container);
