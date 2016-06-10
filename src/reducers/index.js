import { combineReducers } from 'redux-immutablejs';

import ingress from './ingressReducer';
import newsfeed from './newsfeedReducer';
import compos from './composReducer';
import partners from './partnersReducer';
import instructions from './instructionsReducer'

const finalReducer = combineReducers({
  ingress,
  newsfeed,
  compos,
  partners,
  instructions,
});

export default finalReducer;
