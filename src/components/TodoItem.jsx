import { useState } from 'react';

export default function TodoItem({ todo, onComplete, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const startEdit = () => { setDraft(todo.text); setIsEditing(true); };
  const confirmEdit = () => { onEdit(todo.id, draft); setIsEditing(false); };
  const cancelEdit = () => { setDraft(todo.text); setIsEditing(false); };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) onDelete(todo.id);
  };

  if (isEditing) {
    return (
      <li className="item">
        <input className="text-input edit-input" value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button className="btn-edit" onClick={cancelEdit}>Cancel</button>
        <button className="btn-teal" onClick={confirmEdit}>Confirm</button>
      </li>
    );
  }

  return (
    <li className="item">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        disabled={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      <span className={todo.completed ? 'text done' : 'text'}>{todo.text}</span>
      <button className="btn-edit" disabled={todo.completed} onClick={startEdit}>Edit</button>
      <button className="btn-delete" disabled={!todo.completed} onClick={handleDelete}>Delete</button>
    </li>
  );
}
