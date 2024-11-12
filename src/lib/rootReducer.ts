import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice'

export const rootReducer = combineReducers({
  tasks: taskReducer,
})