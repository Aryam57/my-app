import React from "react";
import App from "src/App";


function TaskList({ tasks, onDeleteTask}) {
  return(
    <div>
      <h2 className="text-xl font-semibold mb-4"> قائمة المهام</h2>
      <ul>
        {tasks.map((task)=>(
          <li key={task.id} className="mb-2">
            <span>{task.titile}</span>
            <button
            className="ml-2 text-red-500"
            onClick={() => onDeleteTask(task.id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
export default TaskList;