import fetch from 'isomorphic-fetch';

export const NEWSFEED_FETCH_SUCCESS = 'NEWSFEED_FETCH_SUCCESS';

const newsfeedSuccess = (data) => ({
  type: NEWSFEED_FETCH_SUCCESS,
  payload: data
});

export const newsfeedFetch = () =>
  (dispatch) => {
    fetch('http://localhost:8080/api/news')
      .then((response) => response.json())
      .then((json) => {
        dispatch(newsfeedSuccess(json));
      })
      .catch((err) => {
        console.log('newsfeedFetchError:', err)
      });
    }
