<template>
    <div class="h-screen w-screen flex flex-col justify-end bg-cyan-200 dark:bg-cyan-900">
        <div>
            <MeCardVue class=" w-2/3 h-60 mb-10"/>
        </div>

        
        <div class=" flex flex-row justify-around overflow-clip pt-10 z-10">
            <signBoard class=" mt-5 rotate-3 hover:-translate-y-2 transition-all ease-out duration-500" caption="About me"></signBoard>
            <signBoard class=" mt-0 rotate-6 hover:-translate-y-2 transition-all ease-out duration-500" caption="Projects"></signBoard>
            <signBoard class=" mt-2 -rotate-12 hover:-translate-y-2 transition-all ease-out duration-500" caption="Not-tech things"></signBoard>
            <signBoard class=" mt-0 rotate-12 hover:-translate-y-2 transition-all ease-out duration-500" caption="How is this made?"></signBoard>
        </div>
        <div class=" absolute w-screen h-20 bg-green-700 dark:bg-green-950 -translate-x-60"></div>
        <div class=" absolute w-screen h-16 bg-green-600 dark:bg-green-900 -translate-x-60"></div>
        <div class=" absolute w-screen h-12 bg-green-500 dark:bg-green-800 -translate-x-60"></div>
        
    </div>
</template>

<script>
import MeCardVue from './MeCard.vue'
import signBoard from './signBoard.vue'
import { ref } from 'vue'
export default {
    components: {
        MeCardVue, signBoard
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