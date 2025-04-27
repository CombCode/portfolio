<template>
  <div :class="{ 'dark': darkMode }" class="transition-all ease-in-out duration-500">
    <Header class=" absolute" @mode="modeSetting"></Header>
    <Body class=" px-60 transition-all ease-in-out duration-500"/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Body from "@/components/body/Body.vue"

import { ref } from 'vue'

export default {
  components: {
    Header, Body
  },
  setup(){

    const darkMode = ref(false)

    const modeSetting = (astro) => {
      if(astro === "moon"){
        darkMode.value = true
      }
      else if(astro === "sun"){
        darkMode.value = false
      }
    }
    return{darkMode, modeSetting}
  }
};
</script>
