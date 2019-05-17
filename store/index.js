import { createStore } from "redux"

import { todosReducer, visibilityReducer } from "reducers"

const store = createStore({
  todosReducer,
  visibilityReducer
})

export default store
