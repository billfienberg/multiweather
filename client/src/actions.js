import fetch from 'isomorphic-fetch';

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST';
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS';

export function fetchCityRequest(city) {
  return dispatch => {
    dispatch({ type: FETCH_CITY_REQUEST, city });
    return fetch('/api/city/', {
      method: 'POST',
      body: JSON.stringify({ city }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({ type: FETCH_CITY_SUCCESS, city, json });
      });
  };
}

export function updateInput(text) {
  return dispatch => {
    dispatch({ type: UPDATE_INPUT, text });
  };
}
