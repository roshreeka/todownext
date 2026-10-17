
export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="empty">
        Nothing here yet. Add your first task!
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <span className="task-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{task}</span>

          <button onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
