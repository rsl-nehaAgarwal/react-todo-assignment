import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all' | 'completed' | 'pending'

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);

  const completeTodo = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: true } : t)));

  const editTodo = (id, text) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const visible = todos.filter((t) =>
    filter === 'completed' ? t.completed : filter === 'pending' ? !t.completed : true
  );
  const ordered = [...visible.filter((t) => t.completed), ...visible.filter((t) => !t.completed)];

  return (
    <div className="app">
      <TodoInput onAdd={addTodo} />
      <TodoList
        allCount={todos.length}
        todos={ordered}
        filter={filter}
        onFilterChange={setFilter}
        onComplete={completeTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
