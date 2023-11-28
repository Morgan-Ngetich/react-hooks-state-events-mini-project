import React, { useState, useEffect } from "react";

function Task({ tasks }) {
  const [taskDeleted, setTaskDeleted] = useState([]);

  useEffect(() => {
    setTaskDeleted(tasks);
  }, [tasks]);

  const handleDeleteTask = (index) => {
    const updatedTasks = taskDeleted.filter((task, taskIndex) => taskIndex !== index);
    console.log("UpdatedTasks",updatedTasks)
    setTaskDeleted(updatedTasks);
  };

  return (
    <div className="task-list">
      {taskDeleted.map((task, index) => (
        <div key={index} className="task">
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button className="delete" onClick={() => handleDeleteTask(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Task;