let tasks = [];

function getTasks() {
    return tasks;
}

function addTask(description) {
    if (!description || !description.trim()) {
        throw new Error("La descripción de la tarea no puede estar vacía.");
    }
    tasks.push({
        description: description.trim(),
        completed: false
    });
}

function editTask(index, newDescription) {
    if (!newDescription || !newDescription.trim()) {
        throw new Error("La descripción de la tarea no puede estar vacía.");
    }
    if (index < 0 || index >= tasks.length) {
        throw new Error("Índice de tarea no válido.");
    }
    tasks[index].description = newDescription.trim();
}

function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        throw new Error("Índice de tarea no válido.");
    }
    tasks.splice(index, 1);
}

function completeTask(index) {
    if (index < 0 || index >= tasks.length) {
        throw new Error("Índice de tarea no válido.");
    }
    tasks[index].completed = true;
}

function resetTasks() {
    tasks = [];
}

module.exports = {
    getTasks,
    addTask,
    editTask,
    deleteTask,
    completeTask,
    resetTasks
};