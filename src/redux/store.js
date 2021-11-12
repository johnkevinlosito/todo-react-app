import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import todoFormReducer from './todoFormSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoForm: todoFormReducer
  },
})