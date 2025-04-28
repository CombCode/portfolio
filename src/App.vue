<template>
  <div :class="{ 'dark': darkMode }">
    <HomeView @mode="modeSetting" />
    <router-view></router-view>
  </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";
import { ref } from 'vue'

export default{
  components: {
    HomeView,
  },
  setup() {
    const darkMode = ref(false)

    const modeSetting = (astro) => {
      if(astro === "moon"){
        darkMode.value = true
      }
      else if(astro === "sun"){
        darkMode.value = false
      }
    }
    return{darkMode, modeSetting}
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
