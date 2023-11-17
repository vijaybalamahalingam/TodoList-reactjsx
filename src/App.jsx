
import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTask = () => {
    if (!taskName.trim()) {
      alert('Task Not Mentioned!');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const newTask = {
        name: taskName,
        description: taskDescription,
        time: taskTime,
        timestamp: new Date().toLocaleString(),
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
      setTaskTime('');
      setIsLoading(false);
    }, 3000); 
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="todo-container">
      <h1>Todo-List</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Scheduled Time (eg. 12:00 PM)"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />
        <button onClick={handleAddTask} disabled={isLoading}>
          {isLoading ? 'Adding Task...' : 'Add Task'}
        </button>
      </div>
      {tasks.length > 0 && ( 
        <div className="tasks-container">
          {tasks.map((task, index) => (
            <div className="task" key={index}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Scheduled Time: {task.time}</p>
              <p>Added on: {task.timestamp}</p>
            </div>
          ))}
        </div>
      )}
      {tasks.length > 0 && ( 
        <button className="print-button" onClick={handlePrint}>
          Print
        </button>
      )}
    </div>
  );
};

export default TodoList;
