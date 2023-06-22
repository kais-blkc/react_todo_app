/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
/* Icons */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkTask, removeTask, updateTask } from '../../redux/tasksSlice';
import { Draggable } from 'react-beautiful-dnd';

export default function TasksItem({ item, index }) {
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
    if (editable === true) {
      dispatch(updateTask({ id, taskVal }));
    }
    setEditable(!editable);
  }

  function taskChangeHandler(e) {
    setTaskVal(e.target.value);
  }

  function taskKeyDownHandler(e, itemId) {
    if (e.key === 'Enter') editHandler(itemId);
  }

  let taskListItemClasses = item.check ? ' task-done' : '';
  let taskListItemContent = editable ? (
    <input
      type="text"
      value={taskVal}
      readOnly={!editable}
      onChange={taskChangeHandler}
      onKeyDown={(e) => taskKeyDownHandler(e, item.id)}
    />
  ) : (
    item.task
  );

  return (
    <Draggable
      draggableId={item.id}
      key={item.id}
      index={index}
    >
      {(provided) => (
        <div
          className={'tasks-list__item ' + taskListItemClasses}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="tasks-list__item-left">
            <FontAwesomeIcon icon={faGripLines} />

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

            <div className="tasks-list__item-text">{taskListItemContent}</div>
          </div>

          <div className="tasks-list__item-right">
            {!item.check && (
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
            )}

            <button
              className="tasks-list__item-delete"
              onClick={() => removeHandler(item.id)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
