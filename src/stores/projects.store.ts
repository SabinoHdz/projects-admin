import type { Project } from '@/modules/projects/interfaces/project.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const initialProjects = (): Project[] => {
  return [
    {
      id: uuidv4(),
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
      id: uuidv4(),
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

  const addProject = (name: string) => {
    if (name.trim().length === 0) return;
    projects.value.push({
      id: uuidv4(),
      name,
      task: [],
    });
  };

  return {
    //properties
    projects,

    //getters
    projectList: computed(() => [...projects.value]),

    //actions
    addProject,
  };
});
