import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

export default function TasksInfo({ tasks }) {
  const tasksLen = tasks.length;
  const tasksDone = tasks.filter((f) => f.check === true).length;

  return (
    <div className="tasks-info">
      <div className="tasks-info__count">
        <FontAwesomeIcon icon={faCircle} /> {tasksLen}
      </div>
      <div className="tasks-info__count">
        <FontAwesomeIcon icon={faCircleCheck} /> {tasksDone}
      </div>
    </div>
  );
}
