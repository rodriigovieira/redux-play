import React from "react"
import { connect } from "react-redux"

import AddTodo from "components/AddTodo"
import TodoList from "components/TodoList"
import VisibilityFilter from "components/VisibilityFilter"

const App = ({ todos, filter }) => {
  return (
    <div
      style={{
        fontSize: 16,
        display: "flex",
        flexDirection: "column",
        margin: "2%",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <AddTodo />

      <TodoList />

      {todos.length > 0 && <VisibilityFilter />}
    </div>
  )
}

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })

export default connect(mapStateToProps)(App)
