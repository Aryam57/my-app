import React, {useState} from "react";
import App from "../src/App";

function TaskForm({onAddTask}) {
  const [task, setTask] = useState('');

  const handleAddTask =() =>{
    if (task.trim() !== ''){
      onAddTask({id: DataTransfer.now(), title:task});
      setTask('')
    }
  };

  return(
    <div className="mb-4">
      <input 
      type="text"
      className="px-4 py-2 rounded w-full"
      placeholder="اضف مهمة جديدة "
      value={task}
      onChange={(e)=> setTask(e.target.value)}
      />
        <button
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
        onClick={handleAddTask}>اضف مهمة جديدة</button>
    </div>
  );
  
}
export default TaskForm;