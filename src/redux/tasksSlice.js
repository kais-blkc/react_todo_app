import { createSlice } from '@reduxjs/toolkit';
const localStorageList = JSON.parse(localStorage.getItem('tasks')) || [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksList: localStorageList,
  },
  reducers: {
    addTask: (state, task) => {
      state.tasksList.push({
        id: String(state.tasksList.length + 1),
        task: task.payload,
        check: false,
      });
      tasksSlice.caseReducers.updateLocalStorageTasks(state);
    },
    removeTask: (state, taskId) => {
      state.tasksList = state.tasksList.filter((f) => f.id !== taskId.payload);
      tasksSlice.caseReducers.updateLocalStorageTasks(state);
    },
    updateTask: (state, curTask) => {
      state.tasksList.forEach((t) => {
        if (t.id === curTask.payload.id) t.task = curTask.payload.taskVal;
      });
      tasksSlice.caseReducers.updateLocalStorageTasks(state);
    },
    checkTask: (state, taskId) => {
      state.tasksList.forEach((t) => {
        if (t.id === taskId.payload) t.check = !t.check;
      });
      tasksSlice.caseReducers.updateLocalStorageTasks(state);
    },
    updateLocalStorageTasks: (state) => {
      localStorage.setItem('tasks', JSON.stringify(state.tasksList));
    },
    updateTasksList: (state, newTasksList) => {
      state.tasksList = newTasksList.payload;
      tasksSlice.caseReducers.updateLocalStorageTasks(state);
    },
  },
});

export const { addTask, removeTask, updateTask, checkTask, updateTasksList } =
  tasksSlice.actions;
export default tasksSlice.reducer;
