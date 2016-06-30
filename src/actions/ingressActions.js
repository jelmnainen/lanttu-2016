import fetch from 'isomorphic-fetch';

export const INGRESS_FETCH_SUCCESS = 'INGRESS_FETCH_SUCCESS';

const ingressSuccess = (data) => ({
  type: INGRESS_FETCH_SUCCESS,
  payload: data
});

export const ingressFetch = () =>
  (dispatch) => {
    fetch('/api/frontpage')
      .then((response) => response.json())
      .then((json) => {
        dispatch(ingressSuccess(json));
      });
    }
