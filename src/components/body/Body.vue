<template>
    <div class="h-screen w-screen flex flex-col justify-end">
        <div id="hi" class=" w-2/3 h-full p-60">Hi<br>I'm Marco</div>

        <div class=" flex flex-row justify-around pb-40 overflow-clip pt-10">
            <signBoard class=" pt-5 rotate-3 hover:-translate-y-5 transition-all ease-out duration-500"></signBoard>
            <signBoard class=" pt-0 rotate-6 hover:-translate-y-5 transition-all ease-out duration-500"></signBoard>
            <signBoard class=" pt-2 -rotate-12 hover:-translate-y-5 transition-all ease-out duration-500"></signBoard>
            <signBoard class=" pt-0 rotate-12 hover:-translate-y-5 transition-all ease-out duration-500"></signBoard>
        </div>
    </div>
</template>

<script>
import Scene3D from "@/components/body/Scene3D.vue"
import ProjectCardVue from './ProjectCard.vue'
import AboutMeCardVue from './AboutMeCard.vue'
import signBoard from './signBoard.vue'
import { ref } from 'vue'
export default {
    components: {
        Scene3D, ProjectCardVue, AboutMeCardVue, signBoard
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