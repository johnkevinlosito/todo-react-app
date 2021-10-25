import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from 'react';
import TodoForm from "./components/TodoForm";

function App() {

  const [todos, setTodos] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const cancelForm = () => {
    setItemToEdit(null)
    setIsEditing(false)
    setShowForm(!showForm)
  }

  const saveTodo = (todo) => {
    setTodos([...todos, todo])
    cancelForm();
  }

  const updateTodo = (item) => {
    setTodos(todos.map((todo) => todo.id === item.id ? item : todo))
    cancelForm();
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // toggle todo to completed/vice-versa
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  // add form
  const addTodo = () => {
    if (!isEditing) {
      setIsEditing(true)
      toggleForm()
    }
  }

  // edit form
  const editTodo = (todo) => {
    setItemToEdit(todo)
    if (!isEditing) {
      setIsEditing(true)
      toggleForm()
    }
  }

  return (
    <div className="container mx-auto max-w-4xl p-2 mt-5">
      <div className="shadow-lg p-4">
        <Header onAdd={addTodo} showForm={showForm} onCancel={cancelForm} />
        {showForm && <TodoForm onSave={saveTodo} onUpdate={updateTodo} editItem={itemToEdit} />}
        <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
