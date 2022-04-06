import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Fix car',
            day: 'Apr 10th at 10.00am',
            reminder: true,
        },
        {
            id: 2,
            text: 'Brush teeth',
            day: 'Apr 8th at 10.00am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Sleep',
            day: 'Apr 12th at 10.00pm',
            reminder: true,
        },
    ])

    // Add task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) +1;

      const newTask = {id, ...task};
      setTasks([...tasks, newTask]);
    }

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? {...task, reminder:
                    !task.reminder} : task )
        )
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}/>
        : 'No Tasks To Show'}
        {showAddTask && <AddTask onAdd={addTask}/>}
    </div>
  );
}



export default App;
