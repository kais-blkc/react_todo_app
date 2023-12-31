import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import soundOff from '../../sounds/pop-up-off.mp3';
import useSound from 'use-sound';

export default function InputTask() {
  const dispatch = useDispatch();
  const inputPlaceholderText = 'Добавить новую задачу';
  const [inputVal, setInputVal] = useState('');
  const [inputClasses, setInputClasses] = useState('');
  const [inputPlaceholder, setInputPlaceholder] =
    useState(inputPlaceholderText);
  const [playOff] = useSound(soundOff);

  function inputChangeHandler(e) {
    setInputVal(e.target.value);
  }

  function buttonHandler() {
    if (!inputValid()) return;

    dispatch(addTask(inputVal));
    setInputVal('');
    playOff();
  }

  function keyDownHandler(e) {
    if (e.key === 'Enter') buttonHandler();
  }

  function inputValid() {
    if (inputVal.length < 1) {
      setInputPlaceholder('Введите задачу в поле');
      setInputClasses(
        ' border-red-500 focus:ring-red-200 placeholder:text-red-400'
      );
      return false;
    }

    setInputPlaceholder(inputPlaceholderText);
    setInputClasses('');
    return true;
  }

  return (
    <div className="input-task">
      <input
        type="text"
        className={'sky-input ' + inputClasses}
        placeholder={inputPlaceholder}
        onChange={inputChangeHandler}
        value={inputVal}
        onKeyDown={keyDownHandler}
      />
      <button
        className="sky-btn"
        onClick={buttonHandler}
      >
        Добавить
      </button>
    </div>
  );
}
