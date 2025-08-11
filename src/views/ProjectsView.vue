<template>

  <div class=" h-20 w-full bg-green-400 drop-shadow-[0_20px_10px_rgba(0,0,0,0.30)] shadow-black"></div>
  <div class=" h-10 w-full bg-green-500"></div>

  <div class=" bg-neutral-200  dark:bg-green-800 relative overflow-hidden">
    <div class=" overflow-hidden w-full h-full absolute">
      <svg class=" bgPattern scale-150"></svg>
    </div>

    <div class=" absolute grassSpacer w-full"></div>

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