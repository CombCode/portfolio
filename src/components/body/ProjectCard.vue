<template>
<div class=" grid grid-cols-1 grid-rows-1 m-10">
    <div class=" bg-secondary-Lmode border rounded-xl p-2 h-64 aspect-card translate-x-5 translate-y-5 -z-10 col-start-1 row-start-1"></div> 

    <div class=" bg-secondary-Lmode border rounded-xl p-2 grid grid-cols-3 grid-rows-1 h-64 aspect-card col-start-1 row-start-1">
        <div id="img-container" class=" p-2 col-span-1 w-full h-full">
            <img src="@/assets/noImageLogo.webp" alt=""
            class="w-full h-full object-cover "
            > 
        </div>
        
        <div class="col-span-2 flex flex-col items-start p-4 relative">
            <p class=" font-roboto text-4xl">Title holder</p>
            <p class=" p-2 font-roboto text-left mb-10 overflow-hidden text-text-Lmode/50"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quos sequi maiores, illo vero voluptates dolores ut iusto quae vitae quasi? Totam omnis cum architecto facere, ex fuga error repellendus!</p>
            <router-link id="seeMore" class=" underline text-accent-Lmode text-right self-end"> See more &nbsp <p class=" p-1 -rotate-45 border-b border-r mt-4 inline-block border-accent-Lmode absolute -translate-x-2"></p> </router-link>
        </div>
        
       
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>