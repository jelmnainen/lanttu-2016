import fetch from 'isomorphic-fetch';

export const INGRESS_FETCH_SUCCESS = 'INGRESS_FETCH_SUCCESS';

const ingressSuccess = (data) => ({
  type: INGRESS_FETCH_SUCCESS,
  payload: data
});

export const ingressFetch = () =>
  (dispatch) => {
    fetch('http://localhost:8080/api/frontpage')
      .then((response) => response.json())
      .then((json) => {
        dispatch(ingressSuccess(json));
      });
    }
