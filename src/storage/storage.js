const STORAGE_KEY = "todoAppData";

// SAVE projects to localStorage
const saveProjects = (projects) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

// LOAD projects from localStorage
const loadProjects = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;

  return JSON.parse(data);
};

export { saveProjects, loadProjects };
