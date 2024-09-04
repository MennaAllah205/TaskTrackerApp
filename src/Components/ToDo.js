import React from "react";
import "../Css/ToDo.css";

const ToDo = (props) => {
  return (
    <div className="todo-item">
      <div
        className="todo-text"
        style={{
          textDecoration: props.todo.complete ? "line-through" : "none",
          cursor: "pointer",
          color: props.todo.complete ? "gray" : "black",
        }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button onClick={props.onDelete} className="delete-btn">
        x
      </button>
    </div>
  );
};

export default ToDo;
