export default function fetchClient() {
  return function (dispatch) {
    return dispatch({
      type: 'FETCH_CLIENT',
      data: [],
    });
  };
}
