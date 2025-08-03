<template>
    <div class=" w-auto h-auto bg-primary-Lmode rounded-xl shadow">
        <div class="flex flex-col p-10 ml-40">
            <div v-for="(field, index) in fields" :key="index">
                <div class=" py-5">
                    <label :for="field.name" class=" block text-sm text-text-Lmode text-left w-full">{{ field.name }}</label>
                    <textarea  v-if="field.type === 'textarea'"
                    class=" w-full h-32 rounded-md shadow p-2 align-top text-left resize-none"
                    ></textarea>
                    <input v-else :type="field.type" :name="field.name" :placeholder="field.placeholder" class=" rounded-md shadow p-2">                    
                </div>
            </div>
            <div class=" flex flex-row align-middle justify-center mt-10 w-auto rounded sendShadows border-b-2 border-black hover:scale-110 active:scale-100 transition-all ease-in-out cursor-pointer">
                <p class=" font-bold text-black">Send</p>
                <Send color="black" stroke-width="2"/>  
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Send } from 'lucide-vue-next';

export default {
    props: {
    },
    components: { Send },
    setup(props, context) {

        const fields = ref([
            { name: 'Name', type: 'text', placeholder: 'Your Name' },
            { name: 'Email', type: 'email', placeholder: 'Your Email' },
            { name: 'Message', type: 'textarea', placeholder: 'Your Message' }
        ]);

        return { fields };
    }
}
</script>

<style scoped>
.sendShadows {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
}
.sendShadows:active {
  box-shadow: none;
}

</style>