const projectfactory = (name) =>{
    return{
    id: Date.now(),
    name,
    todos: []
  };
};

export default projectfactory;
