<template>
    <div class=" w-full h-screen p-5 scale-95 my-20 flex md:flex-row flex-col bg-gray-500 bg- rounded-xl md:pt-5">
        <p class=" my-5 md:m-5 basis-1/3 text-white md:text-8xl text-6xl self-center font-bold textShadow">All<br>Projects</p>

        <div :class="activeTag.color" class=" basis-2/3 relative md:m-5 w-full rounded-xl shadow-black shadow-2xl bg-opacity-50">

            <div id="tagSection" class=" absolute pl-5 -translate-y-full flex flex-row -translate-x-2 md:translate-x-0">
                <div v-for="tag in tags" @click="selectTag(tag)" :class="tag.color" class=" pb-6 p-2 px-2 md:px-8 rounded-t-xl text-white -mr-3 hover:mr-3 focus:mr-3 transition-all ease-in-out min-w" tabindex="0">{{tag.name}}</div>
            </div>

            <div class="grid md:grid-cols-4 grid-cols-1 place-content-start gap-4 overflow-scroll p-8 h-full">
                <div v-for="(project, index) in projectsData" :key="index">
                    <ProjectCard v-if="activeTag.name == 'All' || project.tags.includes(activeTag.name)" :projectData="project" class=" hover:scale-105 transition-all ease-in-out"></ProjectCard>
                </div>
            </div>

        </div>
    </div>
    
</template>
<script>
import ProjectCard from '@/components/ProjectsView/ProjectCard.vue';
import { onMounted } from 'vue';
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
      { name: "Generative Art", color: "bg-yellow-600" },
      { name: "Web", color: "bg-cyan-600" },
      { name: "Graphic", color: "bg-red-600" },
      { name: "Node", color: "bg-purple-600" }
    ]
    let activeTag = ref(tags[0])
    const selectTag = (tag) =>{       
        activeTag.value = tag
    }

    let projectsData = ref([])
    const fetchProjectprojectsData = async () => {
        console.log("fetching projectsData")
        try{
            const response = await fetch('https://portfolioprojects-a9f24.web.app/projects.json');
            if(response.status !== 200){
                throw new Error("Error fetching projects data")
            }
            projectsData.value = await response.json()
        }
        catch (error) {
            console.error("Error fetching projects data", error)
            return
        }
    }

    onMounted(() => {
        fetchProjectprojectsData()
    })

    return { tags, activeTag, selectTag, projectsData }   
  }
};
</script>
<style>
</style>