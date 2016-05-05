import { fromJS } from 'immutable';
import { NAVIGATION_ITEMS_SUCCESS } from '../actions/navigationActions'

const initialState = fromJS({
    entries: {},
});

export default function (state = initialState, action) {

  switch(action.type) {
    case NAVIGATION_ITEMS_SUCCESS:
      return state.set('entries', action.payload);
    default:
      return state;
  }
}
