import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/todoSlice'
import { toggleShowForm, setIsEditing, setItemToEdit } from '../redux/todoFormSlice'

const TodoItem = ({ todo }) => {

  const { isEditing } = useSelector(state => state.todoForm)
  const dispatch = useDispatch()

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id))
  }

  // toggle todo to completed/vice-versa
  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id))
  }

  // edit form
  const editTodo = (todo) => {
    dispatch(setItemToEdit(todo))
    if (!isEditing) {
      dispatch(setIsEditing(true))
      dispatch(toggleShowForm())
    }
  }

  return (
    <div className={`flex flex-row justify-between items-center p-2  rounded-md shadow-sm ${todo.completed ? 'bg-gray-300 line-through' : 'bg-gray-100'}`}>
      <div className="flex flex-row items-center gap-2">
        <input type="checkbox" className="cursor-pointer" onChange={() => toggleTodoHandler(todo.id)} />
        <p>{todo.title}</p>
      </div>
      <div className="flex flex-row gap-1">
        <button className="text-blue-700 hover:bg-gray-200 p-1 rounded-sm" onClick={() => { editTodo(todo) }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="text-red-700 hover:bg-gray-200 p-1 rounded-sm" onClick={() => { deleteTodoHandler(todo.id) }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
