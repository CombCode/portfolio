<template>
    <div  class="backdrop-blur-md bg-gray-500 dark:bg-black bg-opacity-50 dark:bg-opacity-75 w-screen h-screen fixed left-0 top-0 py-20 px-80" @click.self="closeModal">
        <div class=" bg-[#fefae0] dark:bg-gray-800 border-8 border-primary-Lmode dark:border-cyan-900 text-black dark:text-white h-full w-full flex flex-col justify-start rounded-xl overflow-auto p-10" >
            <h1 class=" text-4xl py-10">{{title}}</h1>
            <p class=" py-10 self-start">{{description}}</p>
            <div class=" py-10 w-full h-auto p-2 border-r-8 border-l-8 border-primary-Lmode bg-gray-600 rounded-xl">
                <div class=" flex flex-row flex-grow overflow-x-scroll w-full h-auto">
                    <div v-for="(screenshot, index) in screenshots" :key="index" tabindex="0" class="h-96 aspect-square focus:aspect-card cursor-pointer border border-gray-600 rounded flex-shrink-0 p-1 m-2">
                        <img :src="screenshot" alt="" class=" w-full h-full object-cover">
                    </div>
                </div>
            </div>
            
            <hr class=" border-gray-600 mt-16">
            <div class=" pt-5 flex flex-row">
                <p class="px-8">Links:</p>
                <div v-for="(link, index) in links" :key="index">
                    <div v-for="(value, key) in link" :key="key" class="flex flex-row px-2">
                        <Code v-if="key == 'github'" class="text-white bg-orange-500 rounded p-1" size="24" stroke-width="1.5"  />
                        <PanelsTopLeft v-if="key == 'url'" class="text-white bg-orange-500 rounded p-1" size="24" stroke-width="1.5"  />
                        <a :href="value" class="text-yellow-600 hover:text-yellow-800 hover:underline px-1"> {{key}}</a>
                    </div>
                </div>
            </div>
            
        </div> 
    </div>
</template>
<script>
import { Code } from 'lucide-vue-next'
import { PanelsTopLeft } from 'lucide-vue-next';
export default {
    components: {
        Code, PanelsTopLeft
    },
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
        console.log("screenshots", screenshots)


        const closeModal = () => {
            context.emit('close')
        }

        return { closeModal, title, description, screenshots, links }
    },
}
</script>
<style>

</style>