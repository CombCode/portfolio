<template>
    <div  class="backdrop-blur-md bg-gray-500 dark:bg-black bg-opacity-50 dark:bg-opacity-75 w-screen h-screen fixed left-0 top-0 py-20 px-80" @click.self="closeModal">
        <div class=" bg-background-Lmode dark:bg-gray-800 border-8 border-primary-Lmode dark:border-cyan-900 text-black dark:text-white h-full w-full flex flex-col rounded-xl overflow-auto p-10" >
            <h1 class=" ">title</h1>
            <p>description</p>
            <div class="flex flex-row overflow-x-scroll"></div>
            <p>possibili update e fix</p>
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