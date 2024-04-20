import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/views/Login.vue'
import signup from '@/views/SignUp.vue'
import Productpage from '@/views/Productpage.vue'
import AddProject from '@/views/AddProject.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    },{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: 'login',
      },
    },{
      path: '/signup',
      name: 'signup',
      component: signup,
      meta: {
        title: 'signup',
      },
    },{
      path: '/addProject',
      name: 'AddProject',
      component: AddProject,
      meta: {
        title: 'AddProject',
      },
    },
    {
      path: '/cartview',
      name: 'CartView',
      component: CartView,
      meta: {
        title: 'CartView',
      },
    },
    {
      path: '/productpage',
      name: 'Productpage',
      component: Productpage,
      meta: {
        title: 'Productpage',
      },
    },
  ]
})

export default router
