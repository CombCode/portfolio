<template>
  <div class="transition-all ease-in-out duration-500">
    <Header class=" absolute" @mode="modeSetting"></Header>
    <Body class=" md:px-60 transition-all ease-in-out duration-500 overflow-hidden"/>
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
<style>
  .grassSpacer {
    aspect-ratio: 1920 / 1080;
    background-size: 100% 100%;
    background-image: url('@/assets/layered-waves-haikei.svg');
    background-repeat: no-repeat;
  }

  .bgPattern {
    aspect-ratio: 100 / 100;
    background-size: 10% 10%;
    background-image: url('@/assets/pattern1SVG.svg');
    background-repeat:repeat;
    rotate: 30deg;
    opacity: 1;
  }
</style>
