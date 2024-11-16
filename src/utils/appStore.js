import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/slice/userSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
