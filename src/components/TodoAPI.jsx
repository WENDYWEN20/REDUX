import React, { useState, useEffect } from "react";
import { editTodo, deleteTodo } from "../redux/api/todoAPI.js";
import { useDispatch } from "react-redux";
export default function TodoAPI({ todoAPI }) {
  const { id, task, completed } = todoAPI;
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);
  // const [formState, setFormState] = useState({ task, completed });
  const dispatch = useDispatch();
//   useEffect(() => {
//     if (isEdit) {
//       setFormState({ task, completed });
//     }
//   }, [isEdit, task, completed]);
  const editAPI = (id) => {
    setIsEdit(!isEdit);
  };
  const deleteAPI = (id) => {
    dispatch(deleteTodo(id));
  };
  const saveTask = () => {
    const newTodo = { id: id, task: editTask, completed: false };
    dispatch(editTodo(id, newTodo))
      console.log(newTodo);
    setIsEdit(false);
  };

  return (
    <div key={id}>
      <input type="checkbox" />
      <span>{task}</span><button onClick={()=>{deleteAPI(id)}}>Delete</button>
      {isEdit ? (
        <div>
          <input
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button onClick={saveTask}>Save</button>
        </div>
      ) : (
        <div>
          
          <button onClick={()=>editAPI(id)}>Edit</button>
        </div>
      )}
    </div>
  );
}
