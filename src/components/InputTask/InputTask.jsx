import { useState } from 'react';

export default function InputTask({ tasks, addTask }) {
  const inputPlaceholderText = 'Добавить новую задачу';
  const [inputVal, setInputVal] = useState('');
  const [inputClasses, setInputClasses] = useState('');
  const [inputPlaceholder, setInputPlaceholder] =
    useState(inputPlaceholderText);

  function inputChangeHandler(e) {
    setInputVal(e.target.value);
  }

  function buttonHandler() {
    if (!inputValid()) return;

    addTask({ id: tasks.length + 1, task: inputVal, check: false });
    setInputVal('');
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
