import { fromJS } from 'immutable';

import { COMPOS_FETCH_SUCCESS } from '../actions/composActions';

const initialState = fromJS({
  entries: {}
});

export default function (state = initialState, action) {
  switch(action.type) {
    case COMPOS_FETCH_SUCCESS:
      return state.set('entries', fromJS(action.payload));
    default: return state;
  }
}
