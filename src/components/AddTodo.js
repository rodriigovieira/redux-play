import React from "react"
import { connect } from "react-redux"

import { createTodo } from "actions/todoActions"

const AddTodo = ({ createTodo }) => {
  const [todoText, setTodoText] = React.useState("")
  const [error, setError] = React.useState(false)

  const handleCreate = () => {
    if (!todoText.trim()) return setError(true)

    createTodo({
      text: todoText,
      completed: false
    })
    setTodoText("")
    setError(false)
  }

  return (
    <>
      <div style={{ flexDirection: "row", margin: "1%" }}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          style={{
            padding: 1,
            margin: 5,
            marginRight: 10,
            border: "none",
            borderBottom: "2px solid rgba(180, 30, 150, .5)",
            outline: "none",
            fontSize: 16
          }}
        />

        <button
          style={{
            borderRadius: 8,
            border: "1px solid rgba(0,0,0, .7)",
            padding: "3px 8px",
            backgroundColor: "rgba(180, 30, 150, .5)",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            cursor: "pointer",
            outline: "none"
          }}
          onClick={handleCreate}
        >
          Add Todo
        </button>
      </div>

      {error && (
        <div
          style={{
            textAlign: "center",
            color: "darkred",
            marginBottom: "1%"
          }}
        >
          Field is empty. Are you sure you don't have nothing to do?
        </div>
      )}
    </>
  )
}

const mapDispatchToProps = { createTodo }

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
