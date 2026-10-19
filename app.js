
const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

// Temporary array
let todos = [
  {
    id:1,
    title:"study",
    completed:true
  }
];
let nextId = 1;

// 1. GET 
app.get("/todos", (req, res) => {
  res.json(todos);
});

// 2. POST - Create a task
app.post("/todos", (req, res) => {
  const todo = {
    id: nextId++,
    task: req.body.task,
    completed: false
  };

  todos.push(todo);
  res.status(201).json(todo);
});

// 3. GET - Get one task by ID
app.get("/todos/:id", (req, res) => {
  const todo = todos.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!todo) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(todo);
});

// 4. PUT - Replace a task
app.put("/todos/:id", (req, res) => {
  const todo = todos.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!todo) {
    return res.status(404).json({ message: "Task not found" });
  }

  todo.task = req.body.task;
  todo.completed = req.body.completed;

  res.json(todo);
});

// 5. PATCH - Update 
app.patch("/todos/:id", (req, res) => {
  const todo = todos.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!todo) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (req.body.task !== undefined) {
    todo.task = req.body.task;
  }

  if (req.body.completed !== undefined) {
    todo.completed = req.body.completed;
  }

  res.json(todo);
});

// 6. DELETE - Delete
app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex(
    (item) => item.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  todos.splice(index, 1);

  res.json({ message: "Task deleted successfully" });
});

// Start the server
app.listen(3001, () => {
  console.log("To-Do API running on port 3001");
});
