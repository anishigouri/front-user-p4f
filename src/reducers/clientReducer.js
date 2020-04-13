export default function clientReducer(state = [], action) {
  if (action.type === 'FETCH_CLIENT') {
    return { ...state, fetchClient: action.data };
  }

  return state;
}
