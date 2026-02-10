import {getProjectById,getProjects,addproject,addtodoToproject
} from "./logic/logic.js" ;

let selectedProjectId = null;

const renderProjects = () => {
    const projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML ="";
    const projects = getProjects();

projects.forEach(element => {
    const projectBtn = document.createElement("button");
    projectBtn.textContent = projectBtn.name;
    projectBtn.addEventListener("click", () => {
      selectedProjectId = project.id;
      renderTodos(selectedProjectId);
    });

    projectsDiv.appendChild(projectBtn);
});
}
// ---------- RENDER TODOS ----------
const renderTodos = (projectId) => {
  const todosDiv = document.getElementById("todos");
  todosDiv.innerHTML = "";
   const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = todo.completed;

checkbox.addEventListener("change", () => {
  toggleTodoComplete(projectId, todo.id);
  renderTodos(projectId);
});
   if (todo.completed) {
  todoDiv.style.textDecoration = "line-through";
  todoDiv.style.opacity = "0.6";
}

  const project = getProjectById(projectId);
  if (!project) return;

  project.todos.forEach(todo => {
    const todoDiv = document.createElement("div");

    todoDiv.textContent = `${todo.title} - ${todo.dueDate}`;

    // priority color
    if (todo.priority === "high") {
      todoDiv.style.color = "red";
    } else if (todo.priority === "medium") {
      todoDiv.style.color = "orange";
    } else {
      todoDiv.style.color = "green";
    }
    todoDiv.prepend(checkbox);

    todosDiv.appendChild(todoDiv);
  });
};

// ---------- EXPORT ----------
export { renderProjects };
const titleInput = document.getElementById("todo-title");
const dateInput = document.getElementById("todo-date");
const prioritySelect = document.getElementById("todo-priority");
const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", () => {
  if (!selectedProjectId) return;

  const title = titleInput.value;
  const dueDate = dateInput.value;
  const priority = prioritySelect.value;

  if (!title) return;

  addTodoToProject(
    selectedProjectId,
    title,
    "",
    dueDate,
    priority
  );

  
  renderTodos(selectedProjectId);
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

  titleInput.value = "";
  dateInput.value = "";
  prioritySelect.value = "low";
});
