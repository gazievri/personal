import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import postReducer from './postSlice'

export default configureStore({
  reducer: {
    modal: modalReducer,
    post: postReducer 
  },
});
