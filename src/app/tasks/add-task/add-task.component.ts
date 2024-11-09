import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{
  @Input({required: true}) userId!: string;
  @Input() taskId!: string;
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

  ngOnInit(): void {
    if (this.taskId) {
      const task = this.tasksService.getTask(this.taskId);
      this.enteredTitle = task!.title;
      this.enteredSummary = task!.summary;
      this.enteredDueDate = task!.dueDate;
      this.prioritySelected = task!.priority;
      this.categorySelected = task!.category;
    }
  }

  onCancel() {
    this.close.emit();
  }

  onSubmitTask() {
      const newTaskData: NewTaskData = {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate,
        priority: this.prioritySelected,
        category: this.categorySelected
      }
      
      this.tasksService.submitTask(
        newTaskData,
        this.taskId,
        this.userId,
      );

      this.close.emit();
    }
    
  setCategory(category: string) {
    this.categorySelected = category;
  }
}
