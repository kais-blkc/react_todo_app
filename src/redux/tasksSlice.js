import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksList: [
      { id: 1, task: 'one', check: false },
      { id: 2, task: 'two', check: false },
      { id: 3, task: 'three', check: false },
    ],
  },
  reducers: {
    addTask: (state, task) => {
      state.tasksList.push({
        id: state.tasksList.length + 1,
        task: task.payload,
        check: false,
      });
    },
    removeTask: (state, taskId) => {
      const updatedTasks = state.tasksList.filter(
        (f) => f.id !== taskId.payload
      );

      state.tasksList = updatedTasks;
    },
    checkTask: (state, taskId) => {
      const updatedTasks = state.tasksList.map((task) => {
        if (task.id === taskId.payload) task.check = !task.check;
        return task;
      });

      state.tasksList = updatedTasks;
    },
  },
});

export const { addTask, removeTask, checkTask } = tasksSlice.actions;
export default tasksSlice.reducer;
