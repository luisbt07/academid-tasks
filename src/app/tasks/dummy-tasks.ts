import { Task } from "./task/task.model";

export const DUMMY_TASKS: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: "Learn Angular",
      dueDate: "2024-11-02",
      priority: "High",
      category: "Work"
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master React',
      summary: "Learn React",
      dueDate: "2024-11-02",
      priority: "High",
      category: "Work"
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Vue',
      summary: "Learn Vue",
      dueDate: "2024-11-02",
      priority: "High",
      category: "Personal",
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Master Svelte',
      summary: "Learn Svelte",
      dueDate: "2024-11-02",
      priority: "High",
      category: "Personal",
    }
  ]