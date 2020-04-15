import callApi from '../utils/callApi';

export default function fetchClient() {
  return function (dispatch) {
    return callApi('users', dispatch)
      .then((res) => dispatch({
        type: 'FETCH_CLIENT',
        data: res,
      }))
      .catch((err) => {
        console.log(err);
      });
  };
}

export function selectClient(clientId) {
  return function (dispatch) {
    return dispatch({
      type: 'SELECT_CLIENT',
      data: clientId,
    });
  };
}

export function fetchPhotos(clientId) {
  return function (dispatch) {
    return callApi(`photos?albumId=${clientId}`, dispatch)
      .then((res) => dispatch({
        type: 'FETCH_PHOTOS',
        data: res,
      }))
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchPosts(clientId) {
  return function (dispatch) {
    return callApi(`posts?userId=${clientId}`, dispatch)
      .then((res) => dispatch({
        type: 'FETCH_POSTS',
        data: res,
      }))
      .catch((err) => {
        console.log(err);
      });
  };
}
