import { fromJS } from 'immutable';

import { INSTRUCTIONS_FETCH_SUCCESS } from '../actions/InstructionsActions';

const initialState = fromJS({
  entries: []
});

export default function (state = initialState, action) {
  switch(action.type) {
    case INSTRUCTIONS_FETCH_SUCCESS:
      return state.set('entries', fromJS(action.payload));
    default: return state;
  }
}
