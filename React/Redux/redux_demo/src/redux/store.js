import {createStore, applyMiddleware } from 'redux';
import rootReducers from './rootReducer';
import {logger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger)));

export default store;