<template>
    <div>
        <div class="transition relative bg-primary-Lmode border-2 border-text-Lmode rounded-xl hover:scale-110">
            <div class="relative flex flex-row items-center justify-center bg-primary-Lmode border-2 border-text-Lmode rounded-md py-1 px-3"
             @mousedown="toggle_buttonIsPressed" @mouseup="toggle_buttonIsPressed" :class="{' -translate-x-1 -translate-y-1 ': !buttonIsPressed}">
                <p class=" text-text-Lmode font-roboto text-xl">Get in touch</p>
                <p class=" text-accent-Lmode font-roboto font-bold">!</p>
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