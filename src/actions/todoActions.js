const createTodo = (todo) => ({
  type: "ADD_TODO",
  todo
})

const removeTodo = (index) => ({
  type: "REMOVE_TODO",
  index
})

const toggleTodo = (index) => ({
  type: "TOGGLE_TODO",
  index
})

const filterTodos = (todos) => ({
  type: "FILTER_TODOS",
  todos
})

export { createTodo, toggleTodo, removeTodo, filterTodos }
