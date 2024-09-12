import React from "react";

const TodoFooter = ({ todos, setFilter, filter, clearCompleted }) => {
  const activeTodos = todos.filter((todo) => !todo.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {activeTodos} {activeTodos === 1 ? "item" : "items"} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
