import React,{useState} from 'react';
import TaskList from '../../components/TaskList';
import TaskForm from '..components/TaskForm';



function App () {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) =>{
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4" > مدير المهام</h1>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </div>
  );

}
export default App;