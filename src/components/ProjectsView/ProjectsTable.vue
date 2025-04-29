<template>
    <div class=" w-full h-screen p-10 scale-95 my-20 flex flex-row bg-gray-600 bg- rounded-xl">
        <p class=" m-5 basis-1/3 text-white text-8xl self-center font-bold textShadow">All<br>Projects</p>

        <div :class="activeTag.color" class=" basis-2/3 relative m-5 w-full rounded-xl shadow-black shadow-2xl bg-opacity-50">
        <div id="tagSection" class=" absolute pl-5 -translate-y-full flex flex-row">
                <div v-for="tag in tags" @click="selectTag(tag)" :class="tag.color" class=" p-2 px-8 rounded-t-xl text-white -mr-3 hover:mr-3 transition-all ease-in-out min-w">{{tag.name}}</div>
            </div>
        <div class="grid grid-cols-4 place-content-start gap-4 overflow-scroll p-8 h-full">
            
            <div v-for="project in 7" :key="project">
                <ProjectCard class=" hover:scale-105 transition-all ease-in-out"></ProjectCard>
            </div>
        </div>
        </div>
    </div>
    
</template>
<script>
import ProjectCard from '@/components/ProjectsView/ProjectCard.vue';
import { ref } from 'vue';
export default {
  name: 'ProjectsTable',
  props: {
  },
  components: {
    ProjectCard
  },
  setup() {
    const tags = [
      { name: "All", color: "bg-pink-600" },
      { name: "p5.js", color: "bg-yellow-600" },
      { name: "Web", color: "bg-cyan-600" },
      { name: "Graphic Programming", color: "bg-red-600" },
      { name: "Node", color: "bg-purple-600" }
    ]
    let activeTag = ref(tags[0])
    const selectTag = (tag) =>{       
        activeTag.value = tag
    }

    return { tags, activeTag, selectTag }   
  }
};
</script>
<style>
</style>