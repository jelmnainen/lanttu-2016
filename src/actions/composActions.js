import fetch from 'isomorphic-fetch';

export const COMPOS_FETCH_SUCCESS = 'COMPOS_FETCH_SUCCESS';

const composSuccess = (data) => ({
  type: COMPOS_FETCH_SUCCESS,
  payload: data
});

export const composFetch = () =>
  (dispatch) => {
    fetch('/api/compos')
      .then((response) => response.json())
      .then((json) => {
        dispatch(composSuccess(json));
      })
      .catch((err) => {
        console.log('composFetchError:', err)
      });
    }
