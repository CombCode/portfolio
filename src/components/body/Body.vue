<template>
<div class="bg-background-Lmode relative">
    <div class="  w-full h-auto p-10">
        <Scene3D></Scene3D>
    </div>

    <div class="flex flex-row justify-between w-full h-full absolute bg-background-Lmode">
        <div id="sideSlidingPanel_left"
            class="border-r-8 border-r-accent-Lmode w-1/5">
        </div>
        <div id="sideSlidingPanel_right"
            class="border-l-8 border-l-accent-Lmode w-1/5">
        </div>
    </div>

    <Transition name="cardsAnimation">
        <div v-if="showProjectSection" class=" relative">
                <ProjectCardVue class=" hover:rotate-3"></ProjectCardVue>
                <ProjectCardVue class=""></ProjectCardVue>
                <ProjectCardVue class=""></ProjectCardVue>
        </div>
    </Transition>
        
    
</div>
</template>

<script>
import Scene3D from "@/components/body/Scene3D.vue"
import ProjectCardVue from './ProjectCard.vue'
import { ref } from 'vue'
export default {
    components: {
        Scene3D, ProjectCardVue
    },
    setup(){
        let showProjectSection = ref(false)

        function handle_showCurrentHomeSection(e){
            if(e.clientX < window.innerWidth/2){
                showProjectSection.value = true
            }
            else{
                showProjectSection.value = false
            }
        }

        document.onmousemove = handle_showCurrentHomeSection

        return {showProjectSection}
    }
}
</script>

<style>
.cardsAnimation-enter-from {
    translate: -100px;
    opacity: 0%;

}
.cardsAnimation-enter-to {
    translate: 0px;
    opacity: 100%;

}
.cardsAnimation-enter-active
 {
  transition: all 1s;
  transition-timing-function: cubic-bezier(0.05, 0.95, 0.05, 1);
}

.cardsAnimation-leave-to {
    opacity: 0%;

}
.cardsAnimation-leave-active{
    transition: all 0.5s;
}
    
</style>