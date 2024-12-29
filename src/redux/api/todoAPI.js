const TODOS_API='http://localhost:3000/todos'
export const fetchTodos=()=>async(dispatch)=>{
    try{const response=await fetch(TODOS_API)
    const data=await response.json()
    dispatch({type: "SET_TODOS", payload: data})}
    catch(error){console.log(error)}
}
export const addTodo=(newTodo)=>async(dispatch)=>{
    const response=await fetch(TODOS_API,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newTodo)
    })
    const data=await response.json();
    dispatch({type:'ADD_TODO', payload: data})
}
export const editTodo=(id, updatedTodo)=>async(dispatch)=>{
    await fetch(`${TODOS_API}/${id}`, {
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(updatedTodo)
    });
    dispatch({type:'EDIT_TODO', payload: {id, newTodo, updatedTodo}})
};
export const deleteTodo=(id)=>async(dispatch)=>{
    await fetch(`${TODOS_API}/${id}`, {method:'DELETE'})
    dispatch({type: 'DELETE_TODO', payload: id})
}