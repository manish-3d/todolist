import createlist from "./models/todo.js";

const testTodo = createlist(
  "Learn Factory Functions",
  "Understand professional JS structure",
  "2026-02-10",
  "high"
);

console.log(testTodo);
