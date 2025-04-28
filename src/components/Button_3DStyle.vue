<template>
    <div>
        <div class="transition relative bg-primary-Lmode dark:bg-accent-Lmode border-2 border-text-Lmode dark:border-background-Lmode rounded-xl hover:scale-110">
            <div class="relative flex flex-row items-center justify-center bg-primary-Lmode dark:bg-accent-Lmode border-2 border-text-Lmode dark:border-background-Lmode rounded-md py-1 px-3"
             @mousedown="toggle_buttonIsPressed" @mouseup="toggle_buttonIsPressed" :class="{' -translate-x-1 -translate-y-1 ': !buttonIsPressed}">
                <p class=" text-text-Lmode dark:text-background-Lmode font-roboto text-xl">Get in touch&nbsp;</p>
                <p class=" text-accent-Lmode dark:text-secondary-Lmode font-roboto font-bold text-2xl">!</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let buttonIsPressed = ref(false)
        function toggle_buttonIsPressed(){
            buttonIsPressed.value = !buttonIsPressed.value
        }

        return{buttonIsPressed, toggle_buttonIsPressed}
    }
}
</script>

<style>
</style>