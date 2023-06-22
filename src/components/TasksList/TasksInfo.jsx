export default function TasksInfo({ tasks }) {
  const tasksLen = tasks.length;
  const tasksDone = tasks.filter((f) => f.check === true).length;

  return (
    <div className="tasks-info">
      <div className="tasks-info__count">Созданные задачи: {tasksLen}</div>
      <div className="tasks-info__count">Выполненные задачи: {tasksDone}</div>
    </div>
  );
}
