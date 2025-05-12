import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../../shared/pages/HomeComponent.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    // otras rutas...
  ]
})

export default router