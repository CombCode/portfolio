<template>
     <div  class="backdrop-blur-md bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-75 w-screen h-screen fixed left-0 top-0 py-10 px-4 md:py-20 md:px-80" @click.self="close">
        <div class=" relative bg-gray-100 dark:bg-gray-800 border-4 border-primary-Lmode text-black dark:text-white h-full w-full rounded-2xl  overflow-hidden" >       
            <div class="flex flex-col p-10 w-full h-full justify-around">
                <div class=""><h1 class=" text-5xl text-accent-Lmode relative z-50"> WORK IN PROGRESS</h1></div>                       
                <p class=" flex-grow py-10 text-xl text-left z-10"> Please keep in mind that this is a personal project and is subject to changes as I change.<br><br>
                    Since it's a portfolio, it's meant to grow and evolve as I gain more experience, learn and build new projects. </p>
                <p class=" flex-grow py-10 text-xl text-left z-10"> This is still a work in progress. Some parts might be incomplete, but I’m on it! </p>
                <hr class=" border-accent-Lmode dark:border-white z-10">
                <p class=" bg-gray-100 z-40 -mx-10 -mb-10 pb-10 pt-4"> Thanks for your understanding! </p>
            </div>
            <img src="@/assets/gear.svg" class="absolute h-full w-full left-1/2 opacity-100 overflow-hidden transition-all ease-in-out duration-1000 z-0" :style="{ transform: `translateX(-100%) translateY(-60%) scale(100%) rotate(${gearAngle}deg)` }"/>
            <img src="@/assets/gear.svg" class="absolute h-full w-full left-1/2 opacity-100 overflow-hidden transition-all ease-in-out duration-1000 z-0" :style="{ transform: `translateX(-20%) translateY(-100%) scale(150%) rotate(${gearAngle}deg)` }"/>

        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { ref } from 'vue';

export default {
    name: "WorkInProgressModal",
    props: {
    },
    setup(props, context) {

        const close = () => {
            clearInterval(gearRotationInterval)
            context.emit('close')
        }

        let gearAngle = ref(0);
        let gearRotationInterval
        let rotateGear = () => {
            gearRotationInterval = setInterval(() => {
                gearAngle.value = gearAngle.value + 12 
                console.log("gearAngle", gearAngle.value)
            }, 1000)
        }
        
        onMounted(() => {
            rotateGear()
        })

        return {
            close, gearAngle
        };
    }
}
</script>