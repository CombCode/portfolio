<template>
    <div class=" w-auto h-auto bg-primary-Lmode rounded-xl shadow">
        <div class="flex flex-col p-10">
            <form name="messagesForm" method="POST" data-netlify="true" netlify class="group">
                <input type="hidden" name="form-name" value="messagesForm">
                <div v-for="(field, index) in fields" :key="index">
                    <div class=" py-5">
                        <label :for="field.name" class=" block text-sm text-text-Lmode text-left w-full">{{ field.name }}</label>
                        <textarea :name="field.name"  v-if="field.type === 'textarea'"
                        class=" w-full h-32 rounded-md shadow p-2 align-top text-left resize-none"
                        ></textarea>
                        <input v-else :type="field.type" :name="field.name" :placeholder="field.placeholder" class=" rounded-md shadow p-2 w-64">                    
                    </div>
                </div>
                <button class="md:group overflow-hidden p-2 flex flex-row align-middle justify-center mt-10 w-auto mx-auto px-10 rounded sendShadows border-b-2 border-black hover:scale-110 active:scale-100 transition-all ease-in-out cursor-pointer"
                @click="submitAnimation"
                type="submit">
                    <p class=" font-bold text-black translate-x-2 group-hover:translate-x-0 group-focus-within:translate-x-0 transition-all ease-in-out"
                    :class="{'translate-x-0':sendIconanimationIsActive}">Send</p>
                    <Send color="black" stroke-width="2" class=" transition-all ease-in-out duration-500 translate-y-20 -translate-x-20  group-focus-within:translate-y-0  group-focus-within:translate-x-0"
                    :class="{
                        'group-hover:translate-y-0 group-hover:translate-x-0':!sendIconanimationIsActive&&!resetIconPosition,
                        '-translate-y-20 translate-x-20':sendIconanimationIsActive,
                        'translate-y-20 -translate-x-20 transition-none': resetIconPosition
                    }"/>  
                </button>
            </form>
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

        let sendIconanimationIsActive = ref(false);
        let resetIconPosition = ref(false);
        const submitAnimation = () => {
            sendIconanimationIsActive.value = true;
            setTimeout(() => {
                resetIconPosition.value = true;
                setTimeout(() => {
                    resetIconPosition.value = false;
                }, 500); // Reset position after 0.5 seconds
                sendIconanimationIsActive.value = false;
            }, 1000); // Reset after 1 second
            console.log('Form submitted');
            context.emit('close'); // Emit an event to close the form
        };

        return { fields, submitAnimation, sendIconanimationIsActive, resetIconPosition};
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