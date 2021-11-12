import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    saveTodo: (state, todo) => {
      state.todos = [...state.todos, todo.payload]
    },
    updateTodo: (state, todo) => {
      state.todos = state.todos.map((todoItem) => todoItem.id === todo.payload.id ? todo.payload : todoItem)
    },
    toggleTodo: (state, id) => {
      state.todos = state.todos.map((todoItem) => todoItem.id === id.payload ? { ...todoItem, completed: !todoItem.completed } : todoItem)
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveTodo, updateTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer