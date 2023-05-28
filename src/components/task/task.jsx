import React from "react";
import "./task.css";

const task = (title, info) => {
  return (
    <div className="task">
      <p className="task_title">{title}</p>
      <p className="task-info">{info}</p>
    </div>
  );
};

export default task;
