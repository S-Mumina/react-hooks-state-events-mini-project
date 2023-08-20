import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App(){

  const [categories, setCategories] = useState(CATEGORIES);
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
   const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

 return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
       categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm  
        categories={categories}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
       <TaskList tasks={tasks} 
          selectedCategory={selectedCategory}
          onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
