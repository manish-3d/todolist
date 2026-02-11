import projectfactory from "../models/project";
import createlist from "../models/todo";
import { saveProjects, loadProjects } from "../storage/storage";

let projects = loadProjects() || [];
const project = projectfactory("default");
projects.push(project);

function addproject(name){
  const newproject = projectfactory(name);
  project.push(newproject);
}
function addtodoToproject(projectId,title,description,dueDate,priority) => {
    const project = projects.find(p => p.id === projectId);
    if(!project) return;
    const newtodo = createlist(title,description,dueDate,priority);
    project.todos.push(newTodo);
}    
function getProjects(){
    return projects ;
}

function getProjectById(projectId){
    for(let value of projects.projectId){
        if (value === projectId){
            return projects.totos;
        }
    }
    return undefined;
    
};
const deleteTodoFromProject = (projectId, todoId) => {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  project.todos = project.todos.filter(todo => todo.id !== todoId);
};
const toggleTodoComplete = (projectId, todoId) => {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const todo = project.todos.find(t => t.id === todoId);
  if (!todo) return;

  todo.completed = !todo.completed;
};

export {
   toggleTodoComplete,deleteTodoFromProject, getProjectById,getProjects,addproject,addtodoToproject
}
