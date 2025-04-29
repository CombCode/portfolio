<template>
  <div class="p-10 bg-green-500 bg-gradient-to-b from-green-500 dark:bg-green-800">

    <ProjectsSlider></ProjectsSlider>

    <ProjectsTable></ProjectsTable>

  </div>
    
</template>
<script>
import ProjectsSlider from '@/components/ProjectsView/ProjectsSlider.vue';
import ProjectsTable from '@/components/ProjectsView/ProjectsTable.vue';

export default {
  components: {
      ProjectsSlider, ProjectsTable
    },
}
</script>
<style>
</style>