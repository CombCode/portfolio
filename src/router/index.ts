import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AbooutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/about',
    name: 'about',
    component: AbooutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 200, behavior: 'smooth' } 
  }
})

export default router
