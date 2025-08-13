const initialState = {
  counter: 2,
  isShowingToast:false,
  toastMessages: []
}


export default function counter(state =initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      {
        return {...state, counter: state.counter + 1}
      }
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    case 'ADD':
      {
        console.log("Messages: ", state.toastMessages)
        return {...state, toastMessages: [...state.toastMessages, "HOlas"]}
      }
    default:
      return state
  }
}
