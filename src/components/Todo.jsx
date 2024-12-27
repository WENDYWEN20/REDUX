import React, { useState } from "react";
import { useDispatch } from "react-redux";
export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const [edit, setEdit] = useState(false);
  const [newTask, setNewTask] = useState(title);

  const dispatch = useDispatch();

  const deleteById = (id) => {
    console.log("delete");
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const editById = (id) => {
    console.log("edit");
    setEdit(!edit);
  };
  const saveEdit = (id) => {
    dispatch({ type: "EDIT_TODO", payload: { ...todo, title: newTask } });
    setEdit(false);
  };

  return (
    <div key={id}>
      <input type="checkbox" />
      <span>{title}</span>
      <button onClick={() => deleteById(id)}>Delete</button>

      {edit ? (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <button onClick={() => editById(id)}>Edit </button>
      )}
    </div>
  );
}
