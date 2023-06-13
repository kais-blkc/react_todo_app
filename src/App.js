import './App.css';
import { useState } from 'react';
import InputTask from './components/InputTask/InputTask';
import TasksList from './components/TasksList/TasksList';

function App() {
  const testTasks = [
    { id: 1, task: 'one', check: false },
    { id: 2, task: 'two', check: false },
    { id: 3, task: 'three', check: false },
  ];
  const [tasks, setTasks] = useState(testTasks);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  function removeTask(taskId) {
    const updatedTasks = tasks.filter((f) => f.id !== taskId);
    setTasks(updatedTasks);
  }

  function checkTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) task.check = !task.check;
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <div className="container mx-auto text-left">
        <h1>Список задач</h1>
        <InputTask
          tasks={tasks}
          addTask={addTask}
        />
        <TasksList
          tasks={tasks}
          checkTask={checkTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
