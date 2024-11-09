export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
    priority: string;
    category: string;
  }

export interface NewTaskData {
  title: string,
  summary: string,
  date: string,
  priority: string,
  category: string,
}