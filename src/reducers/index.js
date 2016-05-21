import { combineReducers } from 'redux-immutablejs';

import navigation from './navigationReducer';
import ingress from './ingressReducer';
import newsfeed from './newsfeedReducer';

const finalReducer = combineReducers({
  navigation,
  ingress,
  newsfeed,
});

export default finalReducer;
