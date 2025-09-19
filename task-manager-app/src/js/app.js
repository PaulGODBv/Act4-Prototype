const taskManager = require('./taskManager');

const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Function to render tasks to the UI
function renderTasks() {
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `
            <span class="${task.completed ? 'text-decoration-line-through' : ''}">${task.description}</span>
            <div>
                <button class="btn btn-success btn-sm" onclick="completeTaskUI(${index})">✔</button>
                <button class="btn btn-warning btn-sm" onclick="editTaskUI(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTaskUI(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTaskUI() {
    try {
        taskManager.addTask(taskInput.value);
        taskInput.value = '';
        renderTasks();
    } catch (e) {
        alert(e.message);
    }
}

// Function to edit an existing task
function editTaskUI(index) {
    const newTaskValue = prompt('Edit task:', taskManager.getTasks()[index].description);
    if (newTaskValue !== null) {
        try {
            taskManager.editTask(index, newTaskValue);
            renderTasks();
        } catch (e) {
            alert(e.message);
        }
    }
}

// Function to delete a task
function deleteTaskUI(index) {
    try {
        taskManager.deleteTask(index);
        renderTasks();
    } catch (e) {
        alert(e.message);
    }
}

// Function to mark a task as complete
function completeTaskUI(index) {
    try {
        taskManager.completeTask(index);
        renderTasks();
    } catch (e) {
        alert(e.message);
    }
}

// Event listener for the add task button
addTaskButton.addEventListener('click', addTaskUI);

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTaskUI();
    }
});

// Inicializa la lista
renderTasks();

// Haz las funciones accesibles globalmente para los botones inline
window.editTaskUI = editTaskUI;
window.deleteTaskUI = deleteTaskUI;
window.completeTaskUI = completeTaskUI;