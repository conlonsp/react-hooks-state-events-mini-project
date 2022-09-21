import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  function handleTextChange(event) {
    console.log(event.target.value)
    setText(event.target.value)
  }

  function handleCatChange(event) {
    console.log(event.target.value)
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: text,
      category: category,
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text} 
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={handleCatChange}
        >
          {categories.map(category => {
            return <option key={category + 2}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
