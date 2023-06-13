import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

export default function TasksItem({ item, checkTask, removeTask }) {
  function checkHandler(id) {
    checkTask(id);
  }

  function removeHandler(id) {
    removeTask(id);
  }

  function editHandler(id) {
    console.log(id);
  }

  const checkBtn = item.check ? (
    <button className="tasks-list__item-checked">
      <FontAwesomeIcon
        icon={faCircleCheck}
        onClick={() => checkHandler(item.id)}
      />
    </button>
  ) : (
    <button
      className="tasks-list__item-check"
      onClick={() => checkHandler(item.id)}
    >
      <FontAwesomeIcon icon={faCircle} />
    </button>
  );

  return (
    <div className="tasks-list__item group">
      {checkBtn}
      <div className="tasks-list__item-text">{item.task}</div>

      <button
        className="tasks-list__item-edit group-hover:opacity-100"
        onClick={() => editHandler(item.id)}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button
        className="tasks-list__item-delete"
        onClick={() => removeHandler(item.id)}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
}
