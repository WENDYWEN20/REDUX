import React from 'react'
import { useDispatch } from 'react-redux'
const genId = (() => {
    let id = 4;
    return () => id++;
  })();
export default function AddTodo() {
    const [newTodo, setNewTodo]=React.useState('')
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Add')
        dispatch({type:"ADD_TODO", payload:{
            id:genId(),
            title: newTodo,
            completed: false}})
        setNewTodo('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
      <button>Add new Todo</button>
      </form>
    </div>
  )
}
