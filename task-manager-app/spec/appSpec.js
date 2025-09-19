const taskManager = require('../src/js/taskManager');

describe('Task Manager', () => {
    beforeEach(() => {
        taskManager.resetTasks();
    });

    it('debería agregar una tarea válida', () => {
        taskManager.addTask('Tarea 1');
        expect(taskManager.getTasks().length).toBe(1);
        expect(taskManager.getTasks()[0].description).toBe('Tarea 1');
    });

    it('debería lanzar error al agregar tarea vacía', () => {
        expect(() => taskManager.addTask('')).toThrow();
    });

    it('debería eliminar una tarea', () => {
        taskManager.addTask('Tarea 1');
        taskManager.deleteTask(0);
        expect(taskManager.getTasks().length).toBe(0);
    });

    it('debería marcar una tarea como completada', () => {
        taskManager.addTask('Tarea 1');
        taskManager.completeTask(0);
        expect(taskManager.getTasks()[0].completed).toBe(true);
    });

    it('debería editar una tarea', () => {
        taskManager.addTask('Tarea 1');
        taskManager.editTask(0, 'Tarea Editada');
        expect(taskManager.getTasks()[0].description).toBe('Tarea Editada');
    });
});