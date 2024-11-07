import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService)
  // or constructor(private tasksService: TasksService) {}
  priorities: string[] = ['Low', 'Medium', 'High'];
  categories: string[] = ['Personal', 'Domestic', 'Work'];
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  prioritySelected = '';
  categorySelected = '';

  onCancel() {
    this.close.emit();
  }

  onSubmitNewTask() {
    console.log("Hello "+ this.prioritySelected)
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate,
        priority: this.prioritySelected,
        category: this.categorySelected
      },
      this.userId
    );
    this.close.emit();
  }

  setCategory(category: string) {
    this.categorySelected = category;
  }
}
