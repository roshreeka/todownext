"use client";

import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

type Section = "list" | "add";

export default function Home() {
  const [section, setSection] = useState<Section>("list");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks((previousTasks) => [...previousTasks, task]);
    setSection("list");
  }

  function deleteTask(indexToDelete: number) {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (_, index) => index !== indexToDelete
      )
    );
  }

  return (
    <main className="home">
      <header className="top">
        <h1>To-Do App</h1>
        <p>A little plan for getting things done.</p>
      </header>

      <section className="todo-box">
        <nav className="tabs">
          <button
            type="button"
            className={section === "list" ? "active" : ""}
            onClick={() => setSection("list")}
          >
            List ({tasks.length})
          </button>

          <button
            type="button"
            className={section === "add" ? "active" : ""}
            onClick={() => setSection("add")}
          >
            + Add
          </button>
        </nav>

        <div className="content">
          {section === "add" ? (
            <AddTask onAdd={addTask} />
          ) : (
            <>
              <h2>Your tasks</h2>
              <TaskList
                tasks={tasks}
                onDelete={deleteTask}
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
