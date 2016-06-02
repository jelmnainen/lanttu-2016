import { combineReducers } from 'redux-immutablejs';

import navigation from './navigationReducer';
import ingress from './ingressReducer';
import newsfeed from './newsfeedReducer';
import compos from './composReducer';
import partners from './partnersReducer';

const finalReducer = combineReducers({
  navigation,
  ingress,
  newsfeed,
  compos,
  partners,
});

export default finalReducer;
