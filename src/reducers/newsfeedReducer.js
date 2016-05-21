import { fromJS } from 'immutable';

import { NEWSFEED_FETCH_SUCCESS } from '../actions/newsfeedActions';

const initialState = fromJS({
  entries: {}
});

export default function (state = initialState, action) {
  switch(action.type) {
    case NEWSFEED_FETCH_SUCCESS:
      return state.set('entries', fromJS(action.payload));
    default: return state;
  }
}
