import { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    onAdd(text);
    setText('');
  };

  return (
    <div className="card">
      <h2>TodoInput</h2>
      <input
        className="text-input"
        placeholder="New Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-teal full" onClick={handleAdd}>Add new task</button>
    </div>
  );
}
