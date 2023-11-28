import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  // console.log("tasks:", tasks.text)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task key={tasks.text} tasks={tasks}/>

    </div>
  );
}

export default TaskList;
