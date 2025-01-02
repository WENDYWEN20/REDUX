import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/api/todoAPI";
import { v4 as uuidv4 } from 'uuid';

export default function AddTodoAPI() {
    const genId = (() => {
        let id = 4;
        return () => id++;
      })();
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo={id:uuidv4(), task:newTask, completed: false}
    dispatch(addTodo(newTodo));
        setNewTask("");
    console.log(newTask)
  };

  return (
    <div>
      <>API Form</>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button>Add API todos</button></form>
    </div>
  );
}
