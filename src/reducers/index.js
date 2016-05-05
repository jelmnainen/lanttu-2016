import { combineReducers } from 'redux-immutablejs';

import navigation from './navigationReducer';
import posts from './postsReducer';

const finalReducer = combineReducers({
  navigation,
  posts,
});

export default finalReducer;
