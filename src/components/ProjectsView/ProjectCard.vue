<template>
<div>
    <div class="w-full relative aspect-card rounded-xl">
        <img :src="thumbnail" alt="" class=" w-full h-full object-cover rounded-xl">
        <p class=" absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary-Lmode rounded-full p-1">{{ title }}</p>
    </div>

</div>
</template>

<script>
import noImageLogo from "@/assets/noImageLogo.webp"
export default {
    props: {
        projectData: {
            type: Object,
            required: false
        }
    },
    setup(props) {

        const title = props.projectData ? props.projectData.title : "Project Title"
        const thumbnail  = props.projectData ? props.projectData.thumbnail : noImageLogo

        return { title, thumbnail }
    },
}
</script>

<style>

</style>