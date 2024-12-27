import {createStore, combineReducers} from 'redux'
import countReducer from './CountReducer';
import themeReducer from './themeReducer'
import todoReducer from './todoReducer'
const rootReducer=combineReducers({
   countReducer,
    themeReducer,
    todoReducer,
})

export default rootReducer