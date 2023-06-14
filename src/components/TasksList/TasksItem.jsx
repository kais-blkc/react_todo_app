import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkTask, removeTask, tasksRemove } from '../../redux/tasksSlice';

export default function TasksItem({ item }) {
  const [taskVal, setTaskVal] = useState(item.task);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  function checkHandler(id) {
    dispatch(checkTask(id));
  }

  function removeHandler(id) {
    dispatch(removeTask(id));
  }

  function editHandler(id) {
    setEditable(!editable);
  }

  function taskChangeHandler(e) {
    setTaskVal(e.target.value);
  }

  function taskKeyDownHandler(e) {
    if (e.key === 'Enter') setEditable(false);
  }

  let taskListItemClasses = item.check ? ' task-done' : '';

  return (
    <div className={'tasks-list__item ' + taskListItemClasses}>
      <div className="tasks-list__item-left">
        <button
          className="tasks-list__item-checked"
          onClick={() => checkHandler(item.id)}
        >
          {item.check ? (
            <FontAwesomeIcon icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </button>

        <div className="tasks-list__item-text">
          <input
            type="text"
            value={taskVal}
            readOnly={!editable}
            onChange={taskChangeHandler}
            onKeyDown={taskKeyDownHandler}
          />
        </div>
      </div>

      <div className="tasks-list__item-right">
        <button
          className="tasks-list__item-edit"
          onClick={() => editHandler(item.id)}
        >
          {editable ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faPenToSquare} />
          )}
        </button>

        <button
          className="tasks-list__item-delete"
          onClick={() => removeHandler(item.id)}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
}
