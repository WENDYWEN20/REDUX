import { applyMiddleware } from "@reduxjs/toolkit";

const TODOS_API = 'http://localhost:3000/todos';

export const fetchTodos = () => async (dispatch, getState) => {
  const response = await fetch(TODOS_API);
  const data = await response.json();
  console.log(data)
  const {api}=getState()
  console.log(applyMiddleware)
  dispatch({ type: 'SET_TODOS', payload: data });
};

export const addTodo = (newTodo) => async (dispatch) => {
  const response = await fetch(TODOS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  const data = await response.json();
  console.log(data)
  dispatch({ type: 'ADD_TODO', payload: data });
};

export const editTodo = (id, updatedTodo) => async (dispatch) => {
  await fetch(`${TODOS_API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTodo),
  });
  dispatch({ type: 'EDIT_TODO', payload: { id, task: updatedTodo, completed: false} });
};

export const deleteTodo = (id) => async (dispatch) => {
  await fetch(`${TODOS_API}/${id}`, { method: 'DELETE' });
  dispatch({ type: 'DELETE_TODO', payload: id });
};

  