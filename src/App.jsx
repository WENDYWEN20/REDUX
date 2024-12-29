import {useDispatch, useSelector} from 'react-redux'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
function App() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>
//   the argument state is the global state
//   the return value is the return value of the callback function
  {  console.log('global state', state)
    return state.countReducer}) // count.value indicate state has a value property
// reading state from the UI useSelector  
const theme=useSelector((state)=>
    {return state.themeReducer})
  const todos = useSelector((state) => state.todoReducer);
  
  const increment=()=>{
    dispatch({type:'INCREMENT'})
  }
  const decrement=()=>{
    dispatch({type:'DECREMENT'})
  }
  const increaseAmount=()=>{
    dispatch({type: 'AMOUNT', payload:4})
  }
  const toggleTheme=()=>{
    dispatch({type: "TOGGLE_THEME"})
  }


  return (
    <>
      <h1 className={theme==="light"? 'app---light': 'app---dark'}>Count + Theme + Redux</h1>
       <div>Count: {count.value}</div> 
       <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> 
      <button onClick={increaseAmount}>Increase 4</button>
      <button onClick={toggleTheme}>Theme</button>
      <TodoList />
      <AddTodo/>
      <h3>Remaining todos: {todos.length}</h3>
    </>
  );
}

export default App;
