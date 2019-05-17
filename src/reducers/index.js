import { combineReducers } from 'redux'

import visibilityReducer from 'reducers/visibilityReducer'
import todosReducer from 'reducers/todosReducer'

const rootReducer = combineReducers({
  filter: visibilityReducer,
  todos: todosReducer
})

export default rootReducer
