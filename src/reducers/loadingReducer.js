export default function loadingReducer(state = [], action) {
  if (action.type === 'LOADING') {
    return { ...state, loading: action.data };
  }

  return state;
}
