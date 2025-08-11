<template>
<div class=" flex flex-row">
    
        <div id="img-container" class=" basis-1/3 w-full h-full rounded-full z-10">
            <img src="@/assets/noImageLogo.webp" alt="" class=" w-full h-full object-cover rounded-full"> 
        </div>
        
        <transition name="appearFormLeft">
        <div class="basis-2/3 w-full h-full flex flex-col items-start justify-center pl-5" v-if="showName">
            <p class=" md:text-9xl text-6xl text-text-Lmode dark:text-background-Lmode">Hi</p>
            <p class=" md:text-6xl text-4xl text-text-Lmode dark:text-background-Lmode">I'm Marco</p>
        </div>
        </transition>
</div>
</template>

<script>
import { ref, onMounted} from 'vue'
export default {
    setup() {
        const showName = ref(false)

        onMounted( () => {
            setTimeout(() => {
                showName.value = true
            }, 2000)
        })

        return { showName }
    },  
    
    
}
</script>

<style>
    .appearFormLeft-enter-active,
    .appearFormLeft-leave-active {
    @apply transition-all duration-500 ease-in-out;
    }

    .appearFormLeft-enter-from{
        @apply -translate-x-20 opacity-0
    }
</style>