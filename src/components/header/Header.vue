<template>
  <div class=" w-10/12 h-1 p-10 inset-0 mx-auto mt-5 bg-secondary-Lmode flex flex-row justify-between items-center z-40 rounded-full">
    <div>
        <p>logo placeholder</p>
    </div>
    <div>
        <Button3D></Button3D>
    </div>
    <div>
      <cloudShape class=" relative"></cloudShape>
      <matterJSContainer class=" fixed"></matterJSContainer>
    </div>
  </div>
</template>

<script>
import Button3D from "../Button_3DStyle.vue"
import cloudShape from "./cloudShape.vue"
import matterJSContainer from "./matterJSContainer.vue"
export default {
    components: {Button3D, cloudShape, matterJSContainer},
}
</script>

<style>

</style>