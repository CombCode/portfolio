<template>
  <div class=" w-10/12 h-1 p-10 inset-0 mx-auto mt-5 bg-secondary-Lmode flex flex-row justify-between items-center z-40 rounded-full">
    <div>
        <p>logo placeholder</p>
    </div>
    <div>
        <Button3D></Button3D>
    </div>
    <div>
      <cloudShape class=" relative active:scale-90 z-20" @click="toggleLightDarkMode"></cloudShape>
      <matterJSContainer v-if="show" :astro=astro class=" fixed z-10"></matterJSContainer>
    </div>
  </div>
</template>

<script>
import Button3D from "../Button_3DStyle.vue"
import cloudShape from "./cloudShape.vue"
import matterJSContainer from "./matterJSContainer.vue"
import { ref } from 'vue'
export default {
    components: {Button3D, cloudShape, matterJSContainer},
    setup() {

        let show = ref(true)
        let astro = ref("sun")

        let toggleLightDarkMode = () => {
          reload_matterJSContainer()
          astro.value = astro.value === "sun" ? "moon" : "sun"
          console.log(astro.value)  
        }

        let reload_matterJSContainer = () => {
          show.value = !show.value
          setTimeout(() => {
            show.value = !show.value
          }, 100)
        }

        return {show, toggleLightDarkMode, astro}
    }
}
</script>

<style>

</style>