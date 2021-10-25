import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, toggleTodo, onEdit }) => {
  return (
    <div className="p-2 space-y-2 ">
      {todos.length === 0 && <p className="text-gray-700 text-center">No todos yet.</p>}
      {todos.length > 0 && todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onDelete={onDelete} onToggle={toggleTodo} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default TodoList
