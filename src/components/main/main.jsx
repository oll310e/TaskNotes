import React from "react";
import "./main.css";

//features
import taskCreationToggle from "./features/taskCreationToggle.js";

const main = () => {
  return (
    <div className="main__container">
      <div className="main__container-taskmenu">
        <button onClick={taskCreationToggle} id="addTaskButton">
          Add Task
        </button>
      </div>
      <div className="main__container-taskbar"></div>
    </div>
  );
};

export default main;
