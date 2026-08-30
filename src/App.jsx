import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todo-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (event) => {
    event.preventDefault();

    const trimmedTask = taskInput.trim();

    if (!trimmedTask) {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: trimmedTask,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const clearCompleted = () => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }

    if (filter === 'completed') {
      return task.completed;
    }

    return true;
  });

  const activeTaskCount = tasks.filter((task) => !task.completed).length;

  return (
    <main className="app">
      <section className="todo-container">
        <header className="todo-header">
          <p className="eyebrow">Stay organized</p>
          <h1>My Todo List</h1>
          <p className="subtitle">
            Keep track of your tasks and get things done.
          </p>
        </header>

        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            placeholder="What needs to be done?"
            aria-label="New task"
          />

          <button type="submit">Add Task</button>
        </form>

        <div className="task-summary">
          <span>
            {activeTaskCount} {activeTaskCount === 1 ? 'item' : 'items'} left
          </span>

          {tasks.some((task) => task.completed) && (
            <button
              className="clear-button"
              type="button"
              onClick={clearCompleted}
            >
              Clear completed
            </button>
          )}
        </div>

        <div className="filters" role="group" aria-label="Task filters">
          <button
            type="button"
            className={filter === 'all' ? 'filter active' : 'filter'}
            onClick={() => setFilter('all')}
          >
            All
          </button>

          <button
            type="button"
            className={filter === 'active' ? 'filter active' : 'filter'}
            onClick={() => setFilter('active')}
          >
            Active
          </button>

          <button
            type="button"
            className={filter === 'completed' ? 'filter active' : 'filter'}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        <ul className="task-list">
          {filteredTasks.length === 0 ? (
            <li className="empty-state">
              {tasks.length === 0
                ? 'No tasks yet. Add your first task!'
                : 'No tasks match this filter.'}
            </li>
          ) : (
            filteredTasks.map((task) => (
              <li
                className={task.completed ? 'task completed' : 'task'}
                key={task.id}
              >
                <label className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />

                  <span>{task.text}</span>
                </label>

                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Delete ${task.text}`}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;