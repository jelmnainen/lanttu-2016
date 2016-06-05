import { combineReducers } from 'redux-immutablejs';

import ingress from './ingressReducer';
import newsfeed from './newsfeedReducer';
import compos from './composReducer';
import partners from './partnersReducer';

const finalReducer = combineReducers({
  ingress,
  newsfeed,
  compos,
  partners,
});

export default finalReducer;
