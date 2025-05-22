import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../../shared/pages/HomeComponent.vue'
import DashboardComponent from '../../shared/pages/DashboardComponent.vue'
import { useAuth } from '../store/useAuth';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          component: DashboardComponent, // Página principal del dashboard
        }]
    },
  ]
});

router.beforeEach((to, _from, next) => {
  const { user } = useAuth();

  if (to.meta.requiresAuth && (user==null|| user==undefined)) {
    next({ name: 'Home' }); 
  } else {
    next();
  }
})

export default router