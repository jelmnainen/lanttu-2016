import { fromJS } from 'immutable';

import { INGRESS_FETCH_SUCCESS } from '../actions/ingressActions';

const initialState = fromJS({
    header: '',
    ingress: '',
    paragraph: '',
});

export default function (state = initialState, action) {
  switch(action.type) {
    case INGRESS_FETCH_SUCCESS:
      return state.merge(action.payload);
    default: return state;
  }
}
