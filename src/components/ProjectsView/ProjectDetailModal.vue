<template>
    <div  class="backdrop-blur-md bg-green-500 bg-opacity-50 w-screen h-screen fixed left-0 top-0 py-20 px-40" @click.self="closeModal">
        <div class="bg-white h-full w-full flex flex-col rounded-xl overflow-auto" >
            <h1>title</h1>
            <p>description</p>
            <div class="flex flex-row overflow-x-scroll"></div>
            <div>links</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        projectData: {
            type: Object,
            required: false
        }
    },
    setup(props, context) {

        const title = props.projectData ? props.projectData.title : "Project Title"
        const description = props.projectData ? props.projectData.description : "Project Description"
        const screenshots = props.projectData ? props.projectData.screenshots : []
        const links = props.projectData ? props.projectData.links : []


        const closeModal = () => {
            console.log("close project modal")
            context.emit('close')
        }

        return { closeModal }
    },
}
</script>