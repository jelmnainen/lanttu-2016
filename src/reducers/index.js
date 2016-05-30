import { combineReducers } from 'redux-immutablejs';

import navigation from './navigationReducer';
import ingress from './ingressReducer';
import newsfeed from './newsfeedReducer';
import compos from './composReducer';

const finalReducer = combineReducers({
  navigation,
  ingress,
  newsfeed,
  compos,
});

export default finalReducer;
