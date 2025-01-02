import React from "react";
import { fetchTodos } from "../redux/api/todoAPI";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoAPI from "./TodoAPI";
export default function TodoListAPI() {
  const todosAPI = useSelector((state) => state.apiReducer);
  console.log(todosAPI);
  const dispatch = useDispatch();
  // obtain the store’s dispatch function inside a functional component.
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      <h1>Local Host API Todos</h1>
      {todosAPI?.map((todoAPI) => {
        return <TodoAPI key={todoAPI.id} todoAPI={todoAPI} />;
      })}
    </div>
  );
}
