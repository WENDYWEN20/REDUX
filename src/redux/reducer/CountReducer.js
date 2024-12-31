const InitialState = { value: 0 };
export default function countReducer(state = InitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return InitialState;
    case "AMOUNT":
      return { value: state.value + payload };
    default:
      return state;
  }
}
export function addByAmount(amount) {
  return { type: "AMOUNT", payload: amount };
}
export function reset() {
  return { type: "RESET" };
}
