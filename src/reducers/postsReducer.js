import { fromJS } from 'immutable';

const initialState = fromJS({
    entries: {},
});

export default function (state = initialState, action) {

  switch(action.type) {
    default: return state;
  }
}
