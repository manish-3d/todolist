import createlist from "./models/todo.js";
import {getProjectById,getProjects,addproject,addtodoToproject
} from "./logic/logic.js" ;

const testTodo = createlist(
  "Learn Factory Functions",
  "Understand professional JS structure",
  "2026-02-10",
  "high"
);


console.log(testTodo);
