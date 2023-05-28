import React from "react";

//features
import addTask from "./features/addTask.js";

const main = () => {
  return (
    <div className="main__container">
      <div className="main__container-taskmenu"></div>
      <div className="main__container-taskbar">
        <button onClick={addTask} id="addTaskButton">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default main;
