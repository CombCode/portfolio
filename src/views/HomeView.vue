<template>
  <div>
    <Header class=" fixed"></Header>
    <Body class=" px-60"/>
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
