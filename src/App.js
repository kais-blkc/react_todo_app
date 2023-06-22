import './App.css';
import InputTask from './components/InputTask/InputTask';
import TasksList from './components/TasksList/TasksList';
import TestDnd from './components/TestDnd';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto text-left">
        <h1>Список задач</h1>
        <InputTask />
        <TasksList />
      </div>

      {/* <TestDnd /> */}
    </div>
  );
}

export default App;
