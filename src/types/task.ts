export interface TasksState {
  value: TaskState[];
  filter: TaskFilters;
}

export interface TaskState {
  id: string;
  text: string;
  completed: boolean;
  createdDate: number;
  completedDate: number;
}

export type TaskFilters = 'All' | 'Active' | 'Completed'