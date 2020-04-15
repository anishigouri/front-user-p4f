import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import clientReducer from '../reducers/clientReducer';
import loadingReducer from '../reducers/loadingReducer';

const reducers = combineReducers({ clientReducer, loadingReducer });

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
