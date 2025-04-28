<template>
    <div class=" flex flex-row justify-around content-around">
        <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative scrollRigntAnimated mx-20"> box1</div>
        <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative scrollRigntAnimated mx-20"> box1</div>
        
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @keyframes scrollRignt {
    0% {left: -65%;}
    100% {left: 65%}
}
    .scrollRigntAnimated {
        animation: scrollRignt 5s linear infinite;
    }
</style>