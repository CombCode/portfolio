<template>
<div class="bg-background-Lmode relative">
    <div class="  w-full h-auto p-10">
        <Scene3D></Scene3D>
    </div>

    <div class="flex flex-row justify-between w-full h-full absolute bg-background-Lmode">
        <div class="border-r-8 border-r-accent-Lmode w-1/5"></div>
        <div class="border-l-8 border-l-accent-Lmode w-1/5"></div>
    </div>

    <div class=" grid grid-cols-1 grid-rows-1">
        <Transition name="rightCards_Animation">
            <div v-if="showAboutMeSection" class=" relative col-start-1 row-start-1 flex justify-end"> 
                <AboutMeCardVue class=" hover:rotate-3 duration-200 drop-shadow-2xl"></AboutMeCardVue>
            </div>
        </Transition>

        <Transition name="leftCards_Animation">
            <div v-if="showProjectSection" class=" relative col-start-1 row-start-1">
                    <ProjectCardVue class=" hover:rotate-3 duration-200 drop-shadow-2xl"></ProjectCardVue>
                    <ProjectCardVue class=" hover:rotate-3 duration-200 drop-shadow-2xl"></ProjectCardVue>
                    <ProjectCardVue class=" hover:rotate-3 duration-200 drop-shadow-2xl"></ProjectCardVue>
            </div>
        </Transition>
    </div>

   
    
</div>
</template>

<script>
import Scene3D from "@/components/body/Scene3D.vue"
import ProjectCardVue from './ProjectCard.vue'
import AboutMeCardVue from './AboutMeCard.vue'
import { ref } from 'vue'
export default {
    components: {
        Scene3D, ProjectCardVue, AboutMeCardVue
    },
    setup(){
        let showProjectSection = ref(false)

        function handle_showCurrentHomeSection(e){
            if(e.clientX < window.innerWidth/2){
                showProjectSection.value = true
                showAboutMeSection.value = false
            }
            else{
                showProjectSection.value = false
                showAboutMeSection.value = true
            }
        }

        let showAboutMeSection = ref(false)

        document.onmousemove = handle_showCurrentHomeSection

        return {showProjectSection, showAboutMeSection}
    }
}
</script>

<style>
.leftCards_Animation-enter-from {
    translate: -100px;
    opacity: 0%;

}
.rightCards_Animation-enter-from {
    translate: 100px;
    opacity: 0%;
}

.leftCards_Animation-enter-to,
.rightCards_Animation-enter-to {
    translate: 0px;
    opacity: 100%;

}
.leftCards_Animation-enter-active,
.rightCards_Animation-enter-active
 {
  transition: all 1s;
  transition-timing-function: cubic-bezier(0.05, 0.95, 0.05, 1);
}

.leftCards_Animation-leave-to,
.rightCards_Animation-leave-to {
    opacity: 0%;

}
.leftCards_Animation-leave-active,
.rightCards_Animation-leave-active{
    transition: all 0.5s;
}
    
</style>