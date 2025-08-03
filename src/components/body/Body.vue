<template>
    <div class="h-screen w-screen relative flex flex-col justify-end bg-cyan-200 dark:bg-cyan-900">
        <div>
            <MeCardVue class=" w-2/3 h-60 mb-10"/>
        </div>

        
        <div class=" flex flex-row justify-around overflow-clip pt-10 z-10">
            <signBoard class=" mt-5 -rotate-3 hover:-translate-y-2 transition-all ease-out duration-500" caption="About me"></signBoard>
            <signBoard class=" mt-0 rotate-6 hover:-translate-y-2 transition-all ease-out duration-500" caption="Projects"></signBoard>
        </div>
        
        <img src="@/assets/layered-waves-haikeiUP.svg" alt="layered-waves-haikeiUP" class="absolute w-full left-1/2 -translate-x-1/2"/>
        <img src="@/assets/bushessvg2.svg" alt="bushessvg" class="absolute w-full left-1/2 -translate-x-1/2 translate-y-1/4 z-50 scale-x-110 drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)]"/>

        
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
    .grassSpacerUp {
    width: 100%;
    height: 100%;
   
    background-image: url('@/assets/layered-waves-haikeiUP.svg');
    background-repeat: no-repeat;
  }
</style>