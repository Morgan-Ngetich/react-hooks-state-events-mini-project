// NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskCategory, setNewTaskCategory] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (typeof onTaskFormSubmit === 'function') {
      onTaskFormSubmit({
        text: newTaskDescription,
        category: newTaskCategory,
      });
    }
    setNewTaskDescription("");
    setNewTaskCategory("");
  };

  return (
    <div>
      <form className="new-task-form" onSubmit={addTask}>
        <label>
          Details
          <input
            type="text"
            name="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </label>
        <label>
          Category
          <select
            name="category"
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    </div>
  );
}

export default NewTaskForm;
