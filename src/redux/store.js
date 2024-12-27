import {createStore} from 'redux'
import countReducer from './reducer/CountReducer';
const store=createStore(countReducer)
export default store

