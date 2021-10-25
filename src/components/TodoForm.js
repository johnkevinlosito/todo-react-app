import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ onSave, editItem, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setCompleted(editItem.completed)
    }
  }, [editItem])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Please add todo')
      return;
    }
    if (!editItem) {
      const todo = {
        id: uuidv4(),
        title,
        completed
      }
      onSave(todo)
      setTitle('')
    }
    if (editItem) {
      const todo = {
        id: editItem.id,
        title,
        completed
      }
      onUpdate(todo)
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
