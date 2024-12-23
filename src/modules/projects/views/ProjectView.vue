<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th class="w-14">Completada</th>
            <th>Tarea</th>
            <th>Completada en</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="hover" v-for="(task, index) in project?.tasks ?? []" :key="task.id">
            <th>
              <input
                type="checkbox"
                :checked="!!task.completed"
                class="checkbox checkbox-primary"
                @change="projectStore.toggleTask(project?.id ?? '', task.id)"
              />
            </th>
            <td>{{ task.name }}</td>
            <td class="">{{ task.completed ?? '----' }}</td>
          </tr>

          <tr class="hover">
            <th></th>
            <td>
              <input
                type="text"
                class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:bg-opacity-100"
                placeholder="Nueva tarea"
                v-model="taskName"
                @keyup.enter="addTaskToProject"
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <section></section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '@/stores/projects.store';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Project } from '../interfaces/project.interface';
const router = useRouter();
const route = useRoute();
const projectStore = useProjectsStore();
const project = ref<Project | null>();
const taskName = ref('');

const addTaskToProject = () => {
  if (!project.value) return;
  projectStore.addTaskToProject(project.value?.id, taskName.value);
  taskName.value = '';
};

watch(
  () => route.params.id,
  () => {
    const id = route.params.id;
    project.value = projectStore.projectList.find((project) => project.id === id);

    if (!project.value) {
      router.replace('/projects');
    }
  },
  { immediate: true },
);
</script>

<style></style>
