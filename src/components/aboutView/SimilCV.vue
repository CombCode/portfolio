<template>
    <div ref="tiltBg" class=" relative md:m-20 bg-white dark:bg-gray-600 dark:bg-opacity-70 dark:text-white bg-opacity-80 border-2 m-6 my-20 py-20 rounded-3xl overflow-y-scroll ">
        <div id="blobbyBGCanvasContainer" class="blobbyBGCanvasContainer pointer-events-none -z-40 sticky -my-[300px] inset-0 flex flex-row justify-center items-center opacity-50 w-full h-full"></div>
        <div class=" flex flex-col gap-10">
            <div id="title" class=" text-8xl">Me in a nutshell</div>
            
            <div v-for="card in cardsData" ref="tiltCard" id="tiltCard" class=" shadow-lg p-8 mx-40 bg-white bg-opacity-50 dark:bg-gray-600 dark:bg-opacity-70 rounded-2xl transition-all ease-out duration-500 border-2 border-white dark:border-accent-Lmode hover:scale-125 hover:shadow-2xl">
                <h2 class=" text-3xl">{{card.title}}</h2>
                <p class="mb-5">{{card.content}}</p>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import { onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import { ref } from 'vue'
import p5 from 'p5'
import blobSketch from './blobbyBG/sketch.js'

export default {
    setup(){
        let cardsData = [
            {
                title: "Who I am",
                content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "What I'm doing",
                content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ."
            },
            {
                title: "Where I'm going",
                content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "Also find me at @",
                content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]

        let tiltCard = ref(null)
        let tiltBg = ref(null)

        onMounted(() => {
            VanillaTilt.init(tiltBg.value, {
                max: 10,
                speed: 3000,
                glare: false,
                reset: false,
                perspective: 2000,
                "max-glare": 0.3,
            })
            VanillaTilt.init(tiltCard.value, {
                max: 5,
                speed: 20,
                glare: true,
                reset: true,
                perspective: 4000,
                "max-glare": 0.5,  
            })

            const containers = document.getElementsByClassName('blobbyBGCanvasContainer')
            for (let i = 0; i < containers.length; i++) {
                new p5(blobSketch, containers[i])
            }

        })


        return {cardsData, tiltCard, tiltBg}
    }
}
</script>
<style>
   
</style>