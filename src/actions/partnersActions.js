import fetch from 'isomorphic-fetch';

export const PARTNERS_FETCH_SUCCESS = 'PARTNERS_FETCH_SUCCESS';

const partnersSuccess = (data) => ({
  type: PARTNERS_FETCH_SUCCESS,
  payload: data
});

export const partnersFetch = () =>
  (dispatch) => {
    fetch('http://localhost:8080/api/partners')
      .then((response) => response.json())
      .then((json) => {
        dispatch(partnersSuccess(json));
      })
      .catch((err) => {
        console.log('partnersFetchError:', err)
      });
    }
