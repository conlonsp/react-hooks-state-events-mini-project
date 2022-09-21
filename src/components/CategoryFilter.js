import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button
            className={selectedCategory == category ? 'selected' : ''}
            key={category}
            onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
