export default function countReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return  state + 1 ;
    case "DECREMENT":
      return  state - 1 ;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
