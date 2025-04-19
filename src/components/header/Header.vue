<template>
  <div class=" w-10/12 h-1 p-10 inset-0 mx-auto mt-5 bg-secondary-Lmode flex flex-row justify-between items-center z-40 rounded-full">
    <div>
        <p>logo placeholder</p>
    </div>
    <div>
        <Button3D></Button3D>
    </div>
    <cloudShape >
      <div>
        <p>night mode trigger Placeholder</p>
      </div>
    </cloudShape>
   
  </div>
</template>

<script>
import Button3D from "../Button_3DStyle.vue"
import cloudShape from "./cloudShape.vue"
export default {
    components: {Button3D, cloudShape},
}
</script>

<style>

</style>