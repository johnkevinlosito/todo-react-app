import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showForm: false,
  isEditing: false,
  itemToEdit: null
}

export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState,
  reducers: {
    toggleShowForm: (state) => {
      state.showForm = !state.showForm
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload
    },
    setItemToEdit: (state, action) => {
      state.itemToEdit = action.payload
    },
    cancelForm: (state, action) => {
      state.itemToEdit = null
      state.showForm = false
      state.isEditing = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleShowForm, setIsEditing, setItemToEdit, cancelForm } = todoFormSlice.actions

export default todoFormSlice.reducer