import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task! : Task
  @Output() editing = new EventEmitter<string>();

  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

  onEditTask() {
    this.editing.emit(this.task.id);
  }
}
