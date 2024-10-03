export interface Project {
  id: string;
  name: string;
  task: Task[];
}

export interface Task {
  id: string;
  name: string;
  completed?: Date;
}
