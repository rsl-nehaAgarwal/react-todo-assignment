import Filters from './Filters';
import TodoItem from './TodoItem';

export default function TodoList({ allCount, todos, filter, onFilterChange, onComplete, onEdit, onDelete }) {
  return (
    <div>
      <h2>TodoList</h2>

      {allCount > 0 && <Filters filter={filter} onChange={onFilterChange} />}

      {allCount === 0 && <p className="empty">No todo is available</p>}

      <ul className="list">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onComplete={onComplete} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
