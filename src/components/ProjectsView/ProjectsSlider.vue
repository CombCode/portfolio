<template>
        <div class="py-5 rounded-full overflow-hidden bg-green-800 innerShadowCustom">
            <div class=" flex flex-row justify-center scrollRightAnimated my-5">
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <!-- !! the minimum number of div (with this w and mx) to animate smoothly is 8 !! -->
            </div>
            <div class=" flex flex-row justify-center scrollLeftAnimated my-5">
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-60 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <!-- !! the minimum number of div (with this w and mx) to animate smoothly is 8 !! -->
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style>

    @keyframes scrollRight {
        0% {transform: translateX(0%);}
        100% {transform: translateX(55%);}
    }
    @keyframes scrollLeft {
        0% {transform: translateX(0%);}
        100% {transform: translateX(-55%);}
    }
    
    .scrollRightAnimated {
        animation: scrollRight 10s linear infinite;
    }

    .scrollLeftAnimated {
        animation: scrollLeft 10s linear infinite;
    }

    .innerShadowCustom {
    box-shadow: inset 0 18px 25px rgba(0, 0, 0, 0.5);
  }
</style>