<template>
  <div class=" flex flex-row overflow-scroll w-screen ">
    <SimilCV class=" w-2/3 bg-green-400"></SimilCV>
    <KnowledgeTreesContainer class=" w-1/3"></KnowledgeTreesContainer>
  </div>
</template>
<script>
import SimilCV from '@/components/aboutView/SimilCV.vue';
import KnowledgeTreesContainer from '@/components/aboutView/KnowledgeTreesContainer.vue';

export default {
  components: {
        SimilCV, KnowledgeTreesContainer
    },
    setup() {
        return {
        };
    },
}
</script>
