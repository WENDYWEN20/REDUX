import { useState } from "react";
import store from './redux/store'
import {useDispatch, useSelector, Provider} from 'react-redux'
function App() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>
//   the argument state is the global state
//   the return value is the return value of the callback function
  {return state})
// //reading state from the UI useSelector  
  const increment=()=>{
    dispatch({type:'INCREMENT'})
  }
  const decrement=()=>{
    dispatch({type:'DECREMENT'})
  }
  return (
    <>
      <h1>Vite + React + Redux</h1>
       <div>Count: {count}</div>
       <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> 
    </>
  );
}

export default App;
