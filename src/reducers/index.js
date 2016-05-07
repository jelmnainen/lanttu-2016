import { combineReducers } from 'redux-immutablejs';

import navigation from './navigationReducer';
import ingress from './ingressReducer';

const finalReducer = combineReducers({
  navigation,
  ingress,
});

export default finalReducer;
