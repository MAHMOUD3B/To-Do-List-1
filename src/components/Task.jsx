import React from "react";
import "./task.css";

const Task = ({ info: { task, complete }, deleted, completed }) => {
  return (
    <div className="task">
      <span
        className="data"
        style={{
          textDecoration: complete && "line-through",
          opacity: complete && "0.5",
        }}
        onClick={completed}
      >
        {task}
      </span>
      <span className="del-btn" onClick={deleted}>
        Delete
      </span>
    </div>
  );
};

export default Task;
