<template>
    <router-link :to="linkPath()">
        <div class=" flex flex-col relative pb-40">
            <div class=" w-40 h-auto bg-secondary-Lmode dark:bg-gray-700 rounded border-2  p-4 text-xl z-10 dark:text-background-Lmode">
                {{ caption }}
            </div>
            <div class=" w-1/12 h-96 bg-primary-Lmode dark:bg-gray-800 absolute mt-2 left-1/2 -translate-x-1/2 z-0"></div>
        </div>
    </router-link>

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

            const linkPath = () => {
                if (props.caption == 'About me') {
                    return '/about'
                } else if (props.caption == 'Projects') {
                    return '/projects'
                /* } else if (props.caption == 'Not-tech things') {
                    return '/not-tech-things'
                } else if (props.caption == 'How is this made?') {
                    return '/how-is-this-made'*/  
                }else {
                    return '/'
                }
            }
            return { props, linkPath };
        }
    };
</script>
<style>
</style>