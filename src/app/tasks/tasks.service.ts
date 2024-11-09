import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "./dummy-tasks";
import { NewTaskData } from "./task/task.model";


@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = DUMMY_TASKS

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks); // In localStorage we can't store objects, only strings. So we need to parse it back to an object.
                                            // Its an alternative since we don't have a backend to store the data.
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: Math.random().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            priority: taskData.priority,
            category: taskData.category,
          });
    }

    submitTask(taskData: NewTaskData, taskId: string, userId: string) {
        // If there is a taskId we're updating an existing one
        if (taskId) {
            this.updateTask(taskData, taskId);
        }
        else {
            this.addTask(taskData, userId);
        }
        
        this.saveTasks();
    }

    updateTask(taskData: NewTaskData, taskId: string) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        const task = this.tasks[taskIndex];
        this.tasks[taskIndex] = {
            id: task.id,
            userId: task.userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            priority: taskData.priority,
            category: taskData.category,
        };
    }
    getTask(id: string) {
        return this.tasks.find((task) => task.id === id);
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}