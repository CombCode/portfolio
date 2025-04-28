<template>
  <div class="p-10 bg-green-500 dark:bg-green-800">
    <div class="p-10 rounded-full overflow-clip bg-green-800 innerShadowCustom">
      <ProjectsSlider></ProjectsSlider>
    </div>
  </div>
</template>
<script>
import ProjectDescription from '@/components/ProjectsView/ProjectDescription.vue';
import ProjectsSlider from '@/components/ProjectsView/ProjectsSlider.vue';

export default {
  components: {
      ProjectsSlider, ProjectDescription
    },
}
</script>
<style>
  .innerShadowCustom {
    box-shadow: inset 0 18px 25px rgba(0, 0, 0, 0.5);
  }
</style>