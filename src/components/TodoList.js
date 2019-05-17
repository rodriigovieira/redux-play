import React from "react"
import { connect } from "react-redux"

import Todo from "components/Todo"

const TodoList = ({ todos, filter }) => {
  return todos.length > 0 ? (
    <ul>
      {todos.map(({ text, completed }, index) => (
        <Todo key={index} text={text} index={index} completed={completed} />
      ))}
    </ul>
  ) : (
    "No todo created. Come on, get busy!"
  )
}

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })

export default connect(mapStateToProps)(TodoList)
