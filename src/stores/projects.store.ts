import type { Project } from '@/modules/projects/interfaces/project.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const initialProjects = (): Project[] => {
  return [
    {
      id: '1',
      name: 'Project 1',
      task: [
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
      id: '2',
      name: 'Project 2',
      task: [
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
  const projects = ref<Project[]>(initialProjects());

  return {
    projects,
  };
});
