import React, { useState } from "react";
import "../Css/ToDoForm.css";
import shortid from "shortid";

const ToDoForm = (props) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });
    setText("");
  };
  return (
    <div className="container">
      <form className="to-do-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Set Your To Do For Today !"
        />
        <button>Add To List</button>
      </form>
    </div>
  );
};

export default ToDoForm;
