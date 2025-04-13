import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const addTask = () => {
    if (input.trim()) {
      const newTask = { text: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput("");
      setMessage("Task added successfully!");
      setTimeout(() => setMessage(""), 2000);
    } else {
      setMessage("⚠️ Please enter a task.");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setMessage("Task deleted.");
    setTimeout(() => setMessage(""), 2000);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <section className='py-10'>
      <h1 className='text-4xl font-bold text-indigo-600'>Task Manager</h1>
      <p className='text-sm text-gray-600 mt-1'>Your daily to-do list</p>
      <div className='bg-white max-w-md mx-auto mt-6 p-6 rounded-xl shadow w-full'>
        {message && <div className='mb-4 text-sm text-blue-500'>{message}</div>}
        {tasks.map((task, index) => (
          <div key={index} className='flex items-center justify-between mb-2'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => toggleComplete(index)}
                className='mr-2'
              />
              <span
                className={task.completed ? "line-through text-gray-400" : ""}>
                {task.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(index)}
              className='text-red-500 text-xs hover:underline'>
              ❌ Delete
            </button>
          </div>
        ))}
        <div className='flex mt-4'>
          <input
            type='text'
            className='border w-full p-2 rounded mr-2'
            placeholder='Add new task'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addTask}
            className='bg-indigo-600 text-white px-2 py-2 rounded hover:bg-indigo-700'>
            Add Task
          </button>
        </div>
      </div>
    </section>
  );
};

export default Task;
