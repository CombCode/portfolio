<template>
  <div :class="{ 'dark': darkMode }">
    <HomeView @mode="modeSetting">
      <div class=" bg-green-500 py-40"></div>
    </HomeView>
    <router-view></router-view>
    <div id="projectModal"></div>
    <WorkInProgressModal v-if="showProvModal_state" class=" z-50 " @close = "showProvModal"></WorkInProgressModal>
  </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";
import WorkInProgressModal from "./components/WorkInProgressModal.vue";
import { ref } from 'vue'

export default{
  components: {
    HomeView, WorkInProgressModal
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
    
    let showProvModal_state = ref(false)
    const showProvModal = () =>{
      showProvModal_state.value = !showProvModal_state.value
      console.log("showProvModal_state")
    }

    setTimeout(showProvModal, 2000)

    return{darkMode, modeSetting, showProvModal_state, showProvModal}
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
