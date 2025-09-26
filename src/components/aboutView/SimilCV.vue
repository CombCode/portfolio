<template>
    <div ref="tiltBg" class="md:m-20 bg-white dark:bg-gray-600 dark:bg-opacity-70 dark:text-white bg-opacity-50 m-6 my-20  p-5 pb-10 rounded-3xl overflow-y-scroll ">
        <div class=" flex flex-col gap-10">
            <div id="title" class=" text-8xl p-10">Me in a nutshell</div>
            
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

export default {
    setup(){
        let cardsData = [
            {
                title: "Who I am",
                content: "I'm a passionate developer with a knack for creating dynamic and responsive web applications. With a background in computer science, I thrive on solving complex problems and turning ideas into reality through code."
            },
            {
                title: "What I'm doing",
                content: "Currently, I'm focused on expanding my expertise in full-stack development, working on exciting projects that leverage modern technologies like Vue.js, Node.js, and cloud services. I'm also contributing to open-source projects and collaborating with other developers to enhance my skills."
            },
            {
                title: "Where I'm going",
                content: "My goal is to become a lead developer, guiding teams to build innovative solutions that make a difference. I'm committed to continuous learning and staying updated with the latest industry trends to ensure I can deliver top-notch applications."
            },
            {
                title: "Also find me at @",
                content: "You can connect with me on LinkedIn, GitHub, and Twitter where I share insights about web development, programming tips, and my latest projects."
            }
        ]

        let tiltCard = ref(null)
        let tiltBg = ref(null)

        onMounted(() => {
            VanillaTilt.init(tiltBg.value, {
                max: 5,
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
        })


        return {cardsData, tiltCard, tiltBg}
    }
}
</script>
<style>
   
</style>