<template>
    <div class=" w-auto h-screen">
        <div class=" flex flex-col justify-center w-full h-full bg-gray-300">
            <div v-for="(item, index) in 4" :key="index"
                :class="colorArray[index]"
                class=" relative m-2 min-h-0 flex-shrink flex-grow basis-0 hover:bg-opacity-70 hover:basis-10/12 transition-all duration-200 ease-in">
                <p class=" absolute text-7xl">{{ treeNames[index] }}</p>
                <div class=" w-full h-full overflow-hidden hover:overflow-scroll blur-sm hover:blur-none">
                <KnowledgeTree :index="index"></KnowledgeTree>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KnowledgeTree from './KnowledgeTree.vue';


export default {
    name: "KnowledgeTreesContainer",
    components: { KnowledgeTree},
    setup() {

        const colorArray = [
            "bg-red-500",
            "bg-blue-500",
            "bg-yellow-500",
            "bg-pink-500",
        ]
        const treeNames = [
            "Frontend",
            "Backend",
            "Graphics",
            "Versioning"
        ]

        return { colorArray, treeNames};
    },
}
</script>