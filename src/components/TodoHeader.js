import React from "react";

const TodoHeader = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
        autoFocus
      />
    </header>
  );
};

export default TodoHeader;
