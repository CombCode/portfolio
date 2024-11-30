<template>
<div class="bg-background-Lmode relative -z-20">
    <div class="  w-full h-auto p-10">
        <Scene3D></Scene3D>
    </div>

    <div class="flex flex-row justify-between w-full h-full absolute bg-background-Lmode -z-10">
        <div id="sideSlidingPanel_left"
            class="border-r-8 border-r-accent-Lmode w-1/5">
        </div>
        <div id="sideSlidingPanel_right"
            class="border-l-8 border-l-accent-Lmode w-1/5">
        </div>
    </div>

    <div>
        <ProjectCardVue></ProjectCardVue>
        <ProjectCardVue></ProjectCardVue>
        <ProjectCardVue></ProjectCardVue>
    </div>

        
    
</div>
</template>

<script>
import Scene3D from "@/components/body/Scene3D.vue"
import ProjectCardVue from './ProjectCard.vue'
export default {
    components: {
        Scene3D, ProjectCardVue
    },
}
</script>

<style>

</style>