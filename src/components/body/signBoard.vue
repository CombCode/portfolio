<template>
    <div class=" flex flex-col relative pb-40">
        <div class=" w-40 h-auto bg-secondary-Lmode dark:bg-gray-700 rounded border-2  p-4 text-xl z-10 dark:text-background-Lmode">
            {{ caption }}
        </div>
        <div class=" w-1/12 h-96 bg-primary-Lmode dark:bg-gray-800 absolute mt-2 left-1/2 -translate-x-1/2 z-0"></div>
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