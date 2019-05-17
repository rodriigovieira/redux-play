import React from "react"
import { connect } from "react-redux"

import { toggleTodo } from "actions/todoActions"

const Todo = ({ text, completed, toggleTodo, index }) => {
  return (
    <li
      onClick={() => toggleTodo(index)}
      style={{
        textDecoration: !completed ? "none" : "line-through",
        color: !completed ? "black" : "darkgrey"
      }}
    >
      {text}
    </li>
  )
}

const mapDispatchToProps = { toggleTodo }

export default connect(
  null,
  mapDispatchToProps
)(Todo)
