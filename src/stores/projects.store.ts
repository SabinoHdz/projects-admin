import type { Project, Task } from '@/modules/projects/interfaces/project.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';
const initialProjects = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [
        {
          id: '1',
          name: 'Task 1',
        },
        {
          id: '2',
          name: 'Task 2',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [
        {
          id: '1',
          name: 'Task 1',
        },
        {
          id: '2',
          name: 'Task 2',
        },
      ],
    },
  ];
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', initialProjects()));

  const addProject = (name: string) => {
    if (name.trim().length === 0) return;
    projects.value.push({
      id: uuidv4(),
      name,
      tasks: [],
    });
  };

  const addTaskToProject = (id: string, taskName: string) => {
    if (taskName.trim().length === 0) return;
    const addTask = {
      id: uuidv4(),
      name: taskName,
    };
    const project = projects.value.find((project) => project.id === id);
    if (!project) return;
    project?.tasks.push(addTask);
  };

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((project) => project.id === projectId);
    if (!project) return;
    const task = project.tasks.find((task) => task.id === taskId);
    if (!task) return;
    task.completed = task.completed ? undefined : new Date();
  };

  return {
    //properties
    projects,

    //getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    //actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
