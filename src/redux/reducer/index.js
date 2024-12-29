import {createStore, combineReducers} from 'redux'
import countReducer from './CountReducer';
import themeReducer from './themeReducer'
import todoReducer from './todoReducer'
// import todoAPIReducer from './todoAPIReducer'
const rootReducer=combineReducers({
   countReducer,
    themeReducer,
    todoReducer,
    // todoAPIReducer
})

export default rootReducer