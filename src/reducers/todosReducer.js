const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo]
    case "TOGGLE_TODO":
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], completed: !state[action.index].completed },
        ...state.slice(action.index + 1)
      ]
    case "REMOVE_TODO":
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case "FILTER_TODOS":
      return action.todos
    default:
      return state
  }
}

export default todosReducer
