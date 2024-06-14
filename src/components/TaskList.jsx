import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasksRequest,
  addTaskRequest,
  updateTaskRequest,
  removeTaskRequest,
} from "../actions/taskActions";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const [newTask, setNewTask] = React.useState("");

  useEffect(() => {
   dispatch(fetchTasksRequest());
  }, [tasks]);


  const addTask = () => {
    const taskToAdd = { title: newTask };
    dispatch(addTaskRequest(taskToAdd));
    setNewTask("");
  };

  const updateTask = (task) => {
    dispatch(updateTaskRequest({ ...task, completed: !task.completed }));
    
  };

  const removeTask = (taskId) => {
    dispatch(removeTaskRequest(taskId));
    
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tasks :</h1>
      </div>
      <div className="flex justify-between items-center py-1 px-4 bg-gray-200 rounded-full shadow">
        <input
          className="w-3/4 bg-gray-200 py-1 px-4 focus:outline-none"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="border-t w-full"></div>
      {tasks.map((task, index) => (
        <div className="flex px-4 justify-between items-center" key={index}>
          <h2>{task.title}</h2>
          <div className="flex gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => updateTask(task)}
          />
            <button onClick={() => removeTask(task._id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
