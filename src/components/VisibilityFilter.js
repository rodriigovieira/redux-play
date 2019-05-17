import React from "react"
import { connect } from "react-redux"

import { showCompleted, showAll, showActive } from "actions/filterActions"
import { filterTodos } from "actions/todoActions"

const VisibilityFilter = ({
  showCompleted,
  showAll,
  showActive,
  filterTodos,
  filter,
  todos
}) => {
  React.useEffect(() => {
    if (filter.filterType === "ONLY_COMPLETED") {
      const newTodos = todos.filter((todo) => todo.completed)

      filterTodos(newTodos)
    }

    if (filter.filterType === "SHOW_ALL") {
      filterTodos(todos)
    }

    if (filter.filterType === "ONLY_ACTIVE") {
      const newTodos = todos.filter((todo) => todo.completed === false)

      filterTodos(newTodos)
    }
  }, [filter.filterType, filterTodos, todos])

  return (
    <div style={{ display: 'flex' }}>
      <button
        onClick={showAll}
        style={{
          border: "none",
          padding: 0,
          color: "black",
          fontSize: 16,
          outline: "none",
          cursor: "pointer",
          margin: "2%",
          textDecoration: filter.filterType === "SHOW_ALL" && "underline"
        }}
      >
        all
      </button>
      <button
        onClick={showCompleted}
        style={{
          border: "none",
          padding: 0,
          color: "black",
          fontSize: 16,
          outline: "none",
          cursor: "pointer",
          margin: "2%",
          textDecoration: filter.filterType === "ONLY_COMPLETED" && "underline"
        }}
      >
        completed
      </button>
      <button
        onClick={showActive}
        style={{
          border: "none",
          padding: 0,
          color: "black",
          fontSize: 16,
          outline: "none",
          cursor: "pointer",
          margin: "2%",
          textDecoration: filter.filterType === "ONLY_ACTIVE" && "underline"
        }}
      >
        active
      </button>
    </div>
  )
}

const mapStateToProps = ({ filter, todos }) => ({ filter, todos })

const mapDispatchToProps = {
  showAll,
  showCompleted,
  showActive,
  filterTodos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilter)
