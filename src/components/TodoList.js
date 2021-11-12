import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {

  const { todos } = useSelector((state) => state.todo)
  return (
    <div className="p-2 space-y-2 ">
      {todos.length === 0 && <p className="text-gray-700 text-center">No todos yet.</p>}
      {todos.length > 0 && todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
