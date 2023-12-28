import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Tasks.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post('http://localhost:8000/tasks/', {
        id: tasks.length + 1,
        description: newTask,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error al agregar tarea:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input"
        />
        <button onClick={addTask} className="task-button">
          Agregar tarea
        </button>
      <ul className="ul-tasks">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}
            <button className="task-button" onClick={() => deleteTask(task.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TaskList;
