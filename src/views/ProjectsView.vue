<template>
  <div class=" flex flex-col h-screen">
    <ProjectsTable class=" h-2/3 w-full"></ProjectsTable>
    <ProjectDescription class="w-full"</ProjectDescription>
  </div>
</template>
<script>
import ProjectDescription from '@/components/ProjectsView/ProjectDescription.vue';
import ProjectsTable from '@/components/ProjectsView/ProjectsTable.vue';

export default {
  components: {
      ProjectsTable, ProjectDescription
    },
}
</script>
