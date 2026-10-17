
export default function AddTask({ onAdd }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const task = form.task.value.trim();

    if (task === "") return;

    onAdd(task);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="task">What do you need to do?</label>

      <input
        id="task"
        name="task"
        type="text"
        required
      />

      <button type="submit">Save task</button>
    </form>
  );
}
