import React, { useState } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDo from "./Components/ToDo";
import "./Css/App.css";

const App = () => {
  const handleClearAll = () => {
    setTodos([]);
  };
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [todoShow, setTodoShow] = useState("all");
  const updateTodoToShow = (s) => {
    setTodoShow(s);
  };
  if (todoShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoShow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <div>
        <ToDoForm onSubmit={addTodo} />
        {todos.map((todo) => (
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
