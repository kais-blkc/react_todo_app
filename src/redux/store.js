import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import tasksReducer from './tasksSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});
