// components/TaskList.js
import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task.title} ({task.desc})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
