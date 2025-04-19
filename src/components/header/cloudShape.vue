<template>
    <div class=" w-40 h-14 bg-cyan-500 rounded-full border-2 border-background-Lmode flex items-center hover:scale-105 shadow-2xl transition-all ease-in-out duration-300">
        <div class=" justify-start w-20 h-20 -mr-5 bg-cyan-500 rounded-full border-t-2 border-background-Lmode  clippingCloud"></div>
        <div class=" justify-center w-28 h-28 -mx-5 bg-cyan-500 rounded-full border-t-2 border-b-2 border-background-Lmode clippingCloud"></div>
        <div class=" justify-end w-16 h-16 -ml-5 bg-cyan-500 rounded-full border-t-2 border-background-Lmode  clippingCloud"></div>
    </div>
</template>
  
<script>

</script>
  
<style>
    .clippingCloud{
        clip-path: inset(0 0 50% 0);
    } 
</style>