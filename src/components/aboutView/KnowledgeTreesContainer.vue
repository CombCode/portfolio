<template>
    <div class=" w-auto h-screen">
        <div class=" flex flex-col justify-center w-full h-full bg-slate-400">
            <div v-for="(item, index) in 4" :key="index" class=" m-2 min-h-0 flex-shrink flex-grow basis-0 hover:basis-10/12 bg-gray-700 transition-all duration-200 ease-in">
                <KnowledgeTree :index="index" class="w-full h-full overflow-scroll"></KnowledgeTree>
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


        return {};
    },
}
</script>