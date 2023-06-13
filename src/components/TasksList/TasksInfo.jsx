export default function TasksInfo({ tasksLen }) {
  return (
    <div className="tasks-info">
      <div className="tasks-info__count">Созданные задачи: {tasksLen}</div>
    </div>
  );
}
