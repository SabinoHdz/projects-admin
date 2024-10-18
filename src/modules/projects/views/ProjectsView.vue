<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Task</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.task.length }}</td>
          <td>
            <progress class="progress progress-primary w-56" value="10" max="100"></progress>
          </td>
        </tr>
        <!-- row 2 -->
      </tbody>
    </table>
    <InputModal
      placeholder="Ingresa el nombre del proyecto"
      title="Nuevo proyecto"
      description="Ingresa el nombre del proyecto"
      :open="modalOpen"
      @close="modalOpen = false"
      @value="projectsStore.addProject"
    />

    <CustomModal :open="customModalOpen">
      <template #header>
        <h3 class="text-lg font-bold">Titulo del modal</h3>
      </template>

      <template #body>
        <p class="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus soluta saepe, fugit
          eos aperiam pariatur et delectus quia laudantium quaerat tenetur culpa iusto sint
          consequuntur modi reiciendis mollitia perferendis at asperiores sunt eum neque earum
          quibusdam fuga. Deleniti ex, quia nisi eius maxime placeat sit rerum repudiandae ipsam sed
          similique.
        </p>
      </template>
      <template #actions>
        <div class="flex justify-end mt-5">
          <button class="btn mr-5" @click="customModalOpen = false">Close</button>
          <button type="submit" @click="customModalOpen = false" class="btn btn-primary">
            Aceptar
          </button>
        </div>
      </template>
    </CustomModal>

    <FabButton @click="modalOpen = true">
      <AddCircle />
    </FabButton>
    <FabButton @click="customModalOpen = true" position="bottom-left">
      <ModalIcon />
    </FabButton>
  </div>
</template>
<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { useProjectsStore } from '@/stores/projects.store';
import { ref } from 'vue';

const projectsStore = useProjectsStore();

// let projects = computed(() => projectsStore.projectList);
// console.log({ proyectos: projects.value });

const modalOpen = ref(false);
const customModalOpen = ref(false);
</script>
