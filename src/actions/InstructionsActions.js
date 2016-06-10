import fetch from 'isomorphic-fetch';

export const INSTRUCTIONS_FETCH_SUCCESS = 'INSTRUCTIONS_FETCH_SUCCESS';

const instructionsSuccess = (data) => ({
  type: INSTRUCTIONS_FETCH_SUCCESS,
  payload: data
});

export const instructionsFetch = () =>
  (dispatch) => {
    fetch('http://localhost:8080/api/instructions')
      .then((response) => response.json())
      .then((json) => {
        dispatch(instructionsSuccess(json));
      });
    }
