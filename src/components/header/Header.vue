<template>
  <div class=" md:w-8/12 w-11/12 h-1 py-10 p-3 inset-0 mx-auto mt-5 bg-secondary-Lmode dark:bg-gray-800 flex flex-row justify-around items-center z-20 rounded-full shadow-xl dark:shadow-gray-50 dark:shadow-xl">
  
    <div class=" z-30">
        <Button3D></Button3D>
    </div>
    <div class="-z-10">
      <cloudShape class=" relative active:scale-90 z-30" @click="toggleLightDarkMode" :activeMode=astro></cloudShape>
      <matterJSContainer v-if="show" :astro=astro class=" absolute"></matterJSContainer>
    </div>
  </div>
</template>

<script>
import Button3D from "../Button_3DStyle.vue"
import cloudShape from "./cloudShape.vue"
import matterJSContainer from "./matterJSContainer.vue"
import { ref} from 'vue'
export default {
    components: {Button3D, cloudShape, matterJSContainer},
    setup(props, context) {

        let show = ref(true)
        let astro = ref("sun")

        let toggleLightDarkMode = () => {
          reload_matterJSContainer()
          astro.value = astro.value === "sun" ? "moon" : "sun"
          console.log(astro.value)
          context.emit('mode', astro.value)
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