<template>
<div>
    <div class="w-full relative aspect-card rounded-xl" @click="toggleProjectModal">
        <img :src="thumbnail" alt="" class=" w-full h-full object-cover rounded-xl">
        <p class=" absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary-Lmode rounded-full p-1">{{ title }}</p>
    </div>

    <teleport to='#modal'>
        <ProjectDetailModal v-if="showModal" projectData ="projectData" @close="toggleProjectModal"></ProjectDetailModal>
    </teleport>

</div>
</template>

<script>
import noImageLogo from "@/assets/noImageLogo.webp"
import ProjectDetailModal from "@/components/ProjectsView/ProjectDetailModal.vue"
import { ref } from 'vue'
export default {
    props: {
        projectData: {
            type: Object,
            required: false
        }
    },
    components: {
        ProjectDetailModal
    },
    setup(props) {
        console.log("ProjectCard props", props)
        const title = props.projectData.title ? props.projectData.title : "Project Title"
        const thumbnail  = props.projectData.thumbnail ? props.projectData.thumbnail : noImageLogo

        const showModal = ref(false)

        const toggleProjectModal = () => {
            console.log("toggle project modal")
            showModal.value = !showModal.value
            console.log("showModal", showModal.value)
            document.body.style.overflow = showModal.value ? "hidden" : "auto"
        }

        return { title, thumbnail, toggleProjectModal, showModal }   
    },
}
</script>

<style>

</style>