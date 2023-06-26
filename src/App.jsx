import InputTask from './components/InputTask/InputTask';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <div className="app-container ">
        <h1>Список задач</h1>
        <InputTask />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
