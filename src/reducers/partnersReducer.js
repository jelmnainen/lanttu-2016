import { fromJS } from 'immutable';

import { PARTNERS_FETCH_SUCCESS } from '../actions/partnersActions';

const initialState = fromJS({
  entries: {}
});

export default function (state = initialState, action) {
  switch(action.type) {
    case PARTNERS_FETCH_SUCCESS:
      return state.set('entries', fromJS(action.payload));
    default: return state;
  }
}
