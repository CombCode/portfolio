<template>
    <div class="relative w-40 h-14 bg-cyan-500 rounded-full border-2 border-background-Lmode flex items-center hover:scale-105 shadow-2xl transition-all ease-in-out duration-300">
        <div class=" justify-start w-20 h-20 -mr-5 bg-cyan-500 rounded-full border-t-2 border-background-Lmode  clippingCloud"></div>
        <div class=" justify-center w-28 h-28 -mx-5 bg-cyan-500 rounded-full border-t-2 border-b-2 border-background-Lmode clippingCloud"></div>
        <div class=" justify-end w-16 h-16 -ml-5 bg-cyan-500 rounded-full border-t-2 border-background-Lmode  clippingCloud"></div>
        <div class=" absolute left-1/2 -translate-x-1/2 bg-cyan-500 p-2 rounded-full shadow">
            <div class="flex flex-row" v-if="activeMode == 'sun'">
                <Sun color="white" stroke-width="2"/>
                <ChevronsRight  color="white" size="24" class=" my-auto"/>
                <Moon color="white" stroke-width="1"/>  
            </div>
            <div class="flex flex-row" v-if="activeMode == 'moon'">
                <Moon color="white" stroke-width="1"/> 
                <ChevronsRight  color="white" size="24" class=" my-auto"/>
                <Sun color="white" stroke-width="2"/> 
            </div>
            
        </div>
    </div>

</template>
  
<script>
import { Moon, Sun, ChevronsRight  } from 'lucide-vue-next';
export default {
    name: 'CloudShape',
    components: { Moon, Sun, ChevronsRight },
    props: [ "activeMode" ],

    setup(props) {

    return { props }
    } 

}
</script>
  
<style>
    .clippingCloud{
        clip-path: inset(0 0 50% 0);
    } 
</style>