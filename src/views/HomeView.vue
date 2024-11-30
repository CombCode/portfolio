<template>
  <div class="header">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Body from "@/components/body/Body.vue"

export default {
  components: {
    Header, Body
  },
  setup(){
    return{}
  }
};
</script>
