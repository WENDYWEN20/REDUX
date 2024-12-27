import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo.jsx'
export default function TodoList() {

    const todos=useSelector((state)=> state.todoReducer)
  return (
    <div>
      <h1> TODO-List </h1>
      {todos?.map((todo)=>{return <Todo key={todo.id} todo={todo}/>})}
    </div>
  )
}
