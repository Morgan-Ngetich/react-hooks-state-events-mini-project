// CategoryFilter.js
import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setDisplayedTasks }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setDisplayedTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.category === category);
      setDisplayedTasks(filteredTasks);
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        onClick={() => handleCategoryClick("All")}
        className={selectedCategory === "All" ? "selected" : ""}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
