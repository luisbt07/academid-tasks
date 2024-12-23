import { Component, Input } from '@angular/core';
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  taskId!: string;
  isAddingTask = false;
  isEditingTask = false;

  constructor(private tasksService: TasksService) {}
                                    // Dependency Injection 
              // automatically creates a property called tasksService
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onAddingTask() {
    this.isAddingTask = true;
  }
  onEditingTask(taskId: string) {
    this.taskId = taskId;
    this.isEditingTask = true;
  }
  onCloseAddingTask() {
    this.isAddingTask = false;
    this.isEditingTask = false;
  }

}
