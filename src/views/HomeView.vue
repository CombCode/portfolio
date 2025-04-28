<template>
  <div class="transition-all ease-in-out duration-500">
    <Header class=" absolute" @mode="modeSetting"></Header>
    <Body class=" px-60 transition-all ease-in-out duration-500"/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Body from "@/components/body/Body.vue"

export default {
  components: {
    Header, Body
  },
  setup(props, context){

    const modeSetting = (astro) => {
      context.emit('mode', astro)
    }
    
    return{modeSetting}
  }
};
</script>
