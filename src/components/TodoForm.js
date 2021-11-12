import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { saveTodo, updateTodo } from '../redux/todoSlice';
import { cancelForm } from '../redux/todoFormSlice';

const TodoForm = () => {
  const { itemToEdit } = useSelector(state => state.todoForm)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const saveTodoHandler = (todo) => {
    dispatch(saveTodo(todo))
    dispatch(cancelForm());
  }

  const updateTodoHandler = (item) => {
    dispatch(updateTodo(item))
    dispatch(cancelForm());
  }


  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title)
      setCompleted(itemToEdit.completed)
    }
  }, [itemToEdit])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Please add todo')
      return;
    }
    if (!itemToEdit) {
      const todo = {
        id: uuidv4(),
        title,
        completed
      }
      saveTodoHandler(todo)
      setTitle('')
    }
    if (itemToEdit) {
      const todo = {
        id: itemToEdit.id,
        title,
        completed
      }
      updateTodoHandler(todo)
      setTitle('')
    }


  }
  return (
    <div className="p-2 mb-2">
      <form onSubmit={submitHandler} className="flex flex-row">
        <input type="text" id="title" name="title" value={title} autoFocus onChange={(e) => setTitle(e.target.value)} className="rounded-tl-md rounded-bl-md outline-none w-full p-2 bg-gray-100" />
        <button type="submit" className="rounded-tr-md rounded-br-md p-2 text-white bg-green-500 hover:bg-green-400">Save</button>
      </form>
    </div>

  )
}

export default TodoForm
