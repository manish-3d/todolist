function createlist(title, description, dueDate, priority){
    return {
    id: Date.now(),
    title,
    description,
    dueDate,
    priority,
    completed: false
    }
}
export default createlist;