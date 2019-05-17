const visibilityReducer = (state = { filterType: "SHOW_ALL" }, action) => {
  switch (action.type) {
    case "SHOW_ONLY_COMPLETED":
      return { ...state, filterType: "ONLY_COMPLETED" }
    case "SHOW_ALL":
      return { ...state, filterType: "SHOW_ALL" }
    case "SHOW_ONLY_ACTIVE":
      return { ...state, filterType: "ONLY_ACTIVE" }
    default:
      return state
  }
}

export default visibilityReducer
