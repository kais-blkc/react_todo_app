import { useSelector } from 'react-redux';
import TasksInfo from './TasksInfo';
import TasksItem from './TasksItem';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks.tasksList);

  let tasksList = (
    <p className="tasks-empty">
      У вас еще нет зарегистрированных задач
      <br />
      Создавайте задачи и организуйте свои дела
    </p>
  );

  if (tasks.length) {
    tasksList = tasks.map((item, index) => (
      <TasksItem
        key={index}
        item={item}
        // checkTask={checkTask}
        // removeTask={removeTask}
      />
    ));
  }

  return (
    <>
      <TasksInfo tasksLen={tasks.length} />
      <div className="tasks-list">{tasksList}</div>
    </>
  );
}
