<template>

  <div class=" h-20 w-full bg-green-400 drop-shadow-[0_20px_10px_rgba(0,0,0,0.30)] shadow-black"></div>
  <div class=" h-10 w-full bg-green-500"></div>

  
  <div class=" relative w-screen h-screen overflow-hidden bg-neutral-200 dark:bg-green-800">
    <svg class=" bgPattern absolute"></svg>
    <svg class=" absolute grassSpacer w-full"></svg>

    <div class=" flex flex-row w-full h-full ">
      <SimilCV class=" w-4/5 z-10 "></SimilCV>
      <KnowledgeTreesContainer class=" flex-grow w-1/5 md:hover:w-1/3 focus-within:w-full duration-200 transition-all z-10" tabindex="0"></KnowledgeTreesContainer>
    </div>
    
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
<style >

</style>

