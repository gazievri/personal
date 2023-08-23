import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import postReducer from './postSlice';
import activeProjectReducer from './activeProject';

export default configureStore({
  reducer: {
    modal: modalReducer,
    post: postReducer,
    project: activeProjectReducer,
  },
});
