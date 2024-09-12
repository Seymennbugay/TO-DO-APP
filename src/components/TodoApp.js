import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "Taste JavaScript", done: true },
    { text: "Code furiously", done: true },
    { text: "Promote Mavo", done: false },
    { text: "Give talks", done: false },
    { text: "Write tutorials", done: true },
    { text: "Have a life!", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <section className="todoapp">
      <TodoHeader newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toggleTodo={() => toggleTodo(index)}
              deleteTodo={() => deleteTodo(index)}
            />
          ))}
        </ul>
      </section>
      <TodoFooter
        todos={todos}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={() =>
          setTodos(todos.filter((todo) => !todo.done))
        }
      />
    </section>
  );
};

export default TodoApp;
