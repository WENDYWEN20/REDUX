import {createStore, combineReducers} from 'redux'
import rootReducer from './reducer/index.js';
const store=createStore(rootReducer)
console.log(store.getState())

export default store

