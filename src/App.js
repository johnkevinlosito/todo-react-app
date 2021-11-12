import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from 'react';
import TodoForm from "./components/TodoForm";
import { useSelector, useDispatch } from 'react-redux'
import { toggleShowForm, setIsEditing, cancelForm } from './redux/todoFormSlice'

function App() {

  const { showForm, isEditing } = useSelector(state => state.todoForm)
  const dispatch = useDispatch()

  // add form
  const addTodo = () => {
    if (!isEditing) {
      dispatch(setIsEditing(true))
      dispatch(toggleShowForm())
    }
  }

  return (
    <div className="container mx-auto max-w-4xl p-2 mt-5">
      <div className="shadow-lg p-4">
        <Header onAdd={addTodo} showForm={showForm} onCancel={() => dispatch(cancelForm())} />
        {showForm && <TodoForm />}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
