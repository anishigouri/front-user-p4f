export default function clientReducer(state = [], action) {
  if (action.type === 'FETCH_CLIENT') {
    return { ...state, fetchClient: action.data };
  }

  if (action.type === 'SELECT_CLIENT') {
    return { ...state, selectClient: action.data };
  }

  if (action.type === 'FETCH_PHOTOS') {
    return { ...state, fetchPhotos: action.data };
  }

  if (action.type === 'FETCH_POSTS') {
    return { ...state, fetchPosts: action.data };
  }

  return state;
}
