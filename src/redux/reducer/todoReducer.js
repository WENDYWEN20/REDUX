const initState = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: false },
    { id: 3, title: "Learn React Native", completed: false },
  ];
export default function todoReducer(state =initState, action){
const {type, payload}=action
switch(type){
    case "DELETE_TODO":
        return   state.filter((todo)=>todo.id!==payload) //payload is the id returned from UI
    case "ADD_TODO":
            return   [...state, payload]
    case "EDIT_TODO":
        return   state.map((todo)=>todo.id===payload.id? {...todo, title: payload.title}:todo )
 default:
    return state}}