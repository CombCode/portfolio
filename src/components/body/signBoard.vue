<template>
    <div class=" flex flex-col relative pb-40">
        <div class=" w-40 h-auto bg-orange-300 rounded border-8 border-pink-300 p-2 text-xl z-10">
            {{ caption }}
        </div>
        <div class=" w-1/12 h-96 bg-red-400 absolute mt-2 left-1/2 -translate-x-1/2 z-0"></div>
    </div>
</template>
<script>
    export default {
        name: 'signBoard',
        props: {
            caption: {
                type: String,
                default: 'nothing here'
            }
        },
        setup(props) {
            return { props };
        }
    };
</script>
<style>
</style>