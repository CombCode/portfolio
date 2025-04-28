<template>
  <div class="p-10 bg-green-500 bg-gradient-to-b from-green-500 via-amber-600 to-amber-600 dark:bg-green-800">

    <h1>TOP 3</h1>
    <div class=" p-20 flex flex-row align-middle justify-center">
      <div class=" bg-red-300 w-full aspect-card mx-5"></div>
      <div class=" bg-red-300 w-full aspect-card mx-5"></div>
      <div class=" bg-red-300 w-full aspect-card mx-5"></div>
    </div>

    <ProjectsSlider></ProjectsSlider>

    <ProjectsTable></ProjectsTable>

  </div>
    
</template>
<script>
import ProjectDescription from '@/components/ProjectsView/ProjectDescription.vue';
import ProjectsSlider from '@/components/ProjectsView/ProjectsSlider.vue';
import ProjectsTable from '@/components/ProjectsView/ProjectsTable.vue';

export default {
  components: {
      ProjectsSlider, ProjectDescription, ProjectsTable
    },
}
</script>
<style>
</style>