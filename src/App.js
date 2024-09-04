import React, { useState } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDo from "./Components/ToDo";
import "./Css/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoShow, setTodoShow] = useState("all");

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoToShow = (s) => {
    setTodoShow(s);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const filteredTodos = () => {
    switch (todoShow) {
      case "active":
        return todos.filter((todo) => !todo.complete);
      case "complete":
        return todos.filter((todo) => todo.complete);
      default:
        return todos;
    }
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <>
      <div>
        <ToDoForm onSubmit={addTodo} />
        {filteredTodos().map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </div>
      <div className="todo">
        <button onClick={() => updateTodoToShow("all")}>All</button>
        <button onClick={() => updateTodoToShow("complete")}>Completed</button>
        <button onClick={() => updateTodoToShow("active")}>Active</button>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </>
  );
};

export default App;
