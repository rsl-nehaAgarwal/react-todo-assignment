const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'completed', label: 'Done' },
  { key: 'pending', label: 'Todo' },
];

export default function Filters({ filter, onChange }) {
  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className="btn-teal"
          style={{ opacity: filter === f.key ? 0.6 : 1 }}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
