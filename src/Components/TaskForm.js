// components/TaskForm.js
import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Please enter both a non-empty title and description");
      return;
    }
    onSubmit({ title, desc });
    setTitle("");
    setDesc("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input text1"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        className="input text1"
        placeholder="enter age"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button className="button">Add Task</button>
    </form>
  );
};

export default TaskForm;
