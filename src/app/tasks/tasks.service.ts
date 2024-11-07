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
            dueDate: taskData.date
          });
          this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}