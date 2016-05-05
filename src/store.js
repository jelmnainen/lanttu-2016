import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fromJS, Map } from 'immutable';

import reducer from './reducers/index';

const store = applyMiddleware(thunk)(createStore);

if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    const nextReducer = require('./reducers/index').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
