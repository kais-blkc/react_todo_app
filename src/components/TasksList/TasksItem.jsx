/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faPenToSquare,
  faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faCheck,
  faCircleCheck,
  faGripLines,
} from '@fortawesome/free-solid-svg-icons';
/* Icons */
/* Sounds */
import soundActive from '../../sounds/pop-down.mp3';
import soundOn from '../../sounds/pop-up-on.mp3';
import soundOff from '../../sounds/pop-up-off.mp3';
/* Sounds */
import useSound from 'use-sound';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkTask, removeTask, updateTask } from '../../redux/tasksSlice';
import { Draggable } from 'react-beautiful-dnd';

export default function TasksItem({ item, index }) {
  const [taskVal, setTaskVal] = useState(item.task);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const [playActive] = useSound(soundActive);
  const [playOn] = useSound(soundOn);
  const [playOff] = useSound(soundOff);

  function checkHandler(id) {
    if (editable) return;
    dispatch(checkTask(id));
  }

  function removeHandler(id) {
    dispatch(removeTask(id));
  }

  function editHandler(id) {
    if (item.check) return;

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

  function onMouseUpHandler() {
    if (item.check) {
      playOn();
    } else {
      playOff();
    }
  }

  let taskListItemClasses = item.check ? ' task-done' : '';
  taskListItemClasses += editable ? ' task-edit-mode' : '';

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
              onMouseDown={playActive}
              onMouseUp={onMouseUpHandler}
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
                onChange={taskChangeHandler}
                onKeyDown={(e) => taskKeyDownHandler(e, item.id)}
              />
              <p>{item.task}</p>
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
      )}
    </Draggable>
  );
}
