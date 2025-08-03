<template>
    <div>
        <div class=" cursor-pointer transition relative bg-primary-Lmode dark:bg-accent-Lmode border-2 border-text-Lmode dark:border-background-Lmode rounded-xl hover:scale-110"
        :class="{' border-none hover:scale-100': formIsOpen}">
            <div class="relative flex flex-row items-center justify-center bg-primary-Lmode dark:bg-accent-Lmode border-2 border-text-Lmode dark:border-background-Lmode rounded-md py-1 px-3 transition-all ease-in-out"
            @mousedown="toggle_buttonIsPressed" @mouseup="toggle_buttonIsPressed" 
            :class="{' -translate-x-1 -translate-y-1 ': !buttonIsPressed}">
                <p v-if="!formIsOpen" class=" text-text-Lmode dark:text-background-Lmode font-roboto text-xl select-none">Get in touch</p>
                <p v-if="formIsOpen" class=" text-text-Lmode dark:text-background-Lmode font-roboto text-xl select-none">close</p>
                <p v-if="!formIsOpen"class=" text-accent-Lmode dark:text-secondary-Lmode font-roboto font-bold text-2xl select-none">!</p>
            </div>
            <contacForm class=" absolute top-0 left-0 -z-10 transition-all ease-in-out" :class = "{'scale-0 origin-top-left' : !formIsOpen}"></contacForm>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { computed } from 'vue'
import contacForm from './contacForm.vue'

export default {
    components: { contacForm },
    setup(){
        let buttonIsPressed = ref(false)
        let pressingCounter = ref(2)
        let formIsOpen = computed(() => pressingCounter.value % 4 === 0)
        function toggle_buttonIsPressed(){
            buttonIsPressed.value = !buttonIsPressed.value
            pressingCounter.value ++
        }

        return{buttonIsPressed, toggle_buttonIsPressed, formIsOpen}
    }
}
</script>

<style>
</style>