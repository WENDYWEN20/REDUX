export default function apiReducer(state = [], action) {
    const { type, payload } = action;

    switch (type) {
      case 'SET_TODOS':
        return payload;
  
      case 'ADD_TODO':
        return [...state, payload];
  
      case 'EDIT_TODO':
        const { id, newToDo } = payload;
        return state.map((todo) =>
          todo.id === id ? { ...todo, ...newToDo } : todo
        );
  
      case 'DELETE_TODO':
        return state.filter((todo) => todo.id !== payload);
  
      default:
        return state;
    }
  };