import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({ });

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
