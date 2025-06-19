<template>
     <div  class="backdrop-blur-md bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-75 w-screen h-screen fixed left-0 top-0 py-20 px-80" @click.self="close">
        <div class=" relative bg-gray-300 dark:bg-gray-800 text-black dark:text-white h-full w-full rounded-2xl  overflow-hidden" >
            <img src="@/assets/gear.svg" alt="layered-waves-haikeiUP" class="absolute h-full w-full left-1/2 opacity-10 overflow-hidden transition-all ease-in-out duration-1000 " :style="{ transform: `translate(-20%) scale(150%) rotate(${gearAngle}deg)` }"/>
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