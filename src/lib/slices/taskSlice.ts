import { TasksState } from "@/types/task";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TasksState = {
  value: [],
  filter: 'All',
}

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload)
    },
    setTasks: (state, action) => {
      state.value = action.payload
    },
    addTask: (state, action) => {
      state.value.push(action.payload)
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload
      const updatedTasks = state.value.map(task => task.id === updatedTask.id ? updatedTask : task)
      state.value = updatedTasks
    },
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  },
})

export const { addTask, updateTask, changeFilter, setTasks, deleteTask } = taskSlice.actions
export default taskSlice.reducer