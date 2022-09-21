import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  function handleDelete(deletedTask) {
    const updatedTasks = tasks.filter(task => task.text !== deletedTask)
    setTasks(updatedTasks)
  }

  function handleAddTask(newTaskObj) {
    console.log('newTaskObj:', newTaskObj)
    setTasks([...tasks, newTaskObj])
  }

  const showTasks = tasks.filter(task => task.category === category || category === 'All')

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== 'All')}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList
        tasks={showTasks}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
