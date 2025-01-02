import {createStore, combineReducers} from 'redux'
import countReducer from './CountReducer';
import themeReducer from './themeReducer'
import todoReducer from './todoReducer'
import apiReducer from './apiReducer'
const rootReducer=combineReducers({
   countReducer,
    themeReducer,
    todoReducer,
    apiReducer
})

export default rootReducer