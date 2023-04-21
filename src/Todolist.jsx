import React, { useState } from "react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.length > 0) {
      setTaskList([...taskList, task]);
      setTask("");
    } else {
      alert("Please type your task!");
    }
  };

  const handleRemoveTask = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-10 items-center justify-center">
      <input
        className=" border-6 p-2 text-blue-500 text-2xl font-bold border border-gray-500"
        type="text"
        placeholder="enter you task"
        value={task}
        onChange={handleTaskChange}
      />
      <button
        className="border-6 p-2  border border-gray-500 p-4 w-[150px] font-bold rounded-lg"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul>
        {taskList.map((task, index) => (
          <li className="flex flex-row gap-6 m-6" key={index}>
            <div className="flex items-center gap-6">
              <p className="font-bold text-2xl">
                Task {index + 1}: <span className="text-red-500">{task}</span>
              </p>
              <button
                onClick={() => handleRemoveTask(index)}
                className="bg-blue-400 text-white p-2 font-semibold rounded-full"
              >
                Remove task {index + 1}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
