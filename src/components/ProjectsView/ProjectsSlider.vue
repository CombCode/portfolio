<template>
        <div class="py-5 rounded-full scale-75 overflow-hidden bg-green-800 border-8 border-green-600 innerShadowCustom">
            <div class=" flex flex-row justify-center scrollRightAnimated my-5">
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <!-- !! the minimum number of div (with this w and mx) to animate smoothly is 8 !! -->
            </div>
            <div class=" flex flex-row justify-center scrollLeftAnimated my-5">
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <div class=" bg-orange-200 w-80 aspect-card rounded-xl relative mx-10 flex-shrink-0 hover:scale-105 transition-all ease-in-out"> box1</div>
                <!-- !! the minimum number of div (with this w and mx) to animate smoothly is 8 !! -->
            </div>
        </div>
</template>

<script>
import { onMounted } from 'vue'
import { ref } from 'vue'
export default {
    setup() {
        let projectsData = ref([])
        const fetchProjectprojectsData = async () => {
            console.log("fetching projectsData")
            try{
                const response = await fetch('https://portfolioprojects-a9f24.web.app/projects.json');
                if(response.status !== 200){
                    throw new Error("Error fetching projects data")
                }
                projectsData.value = await response.json();
            }
            catch (error) {
                console.error("Error fetching projects data", error)
                return
            }
        }

        onMounted(() => {
            fetchProjectprojectsData()
        })
        return { projectsData}
    },
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
    box-shadow: inset 16px 16px 20px rgba(0, 0, 0, 0.4);
  }
</style>