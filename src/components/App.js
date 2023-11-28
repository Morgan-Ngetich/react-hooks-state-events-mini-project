import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [displayedTasks, setDisplayedTasks] = useState(TASKS);

  const updateDisplayedTasks = (newTasks) => {
    setDisplayedTasks(newTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={displayedTasks} setDisplayedTasks={setDisplayedTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={(newTask) => setDisplayedTasks([...displayedTasks, newTask])} />
      <TaskList tasks={displayedTasks} />
    </div>
  );
}

export default App;
