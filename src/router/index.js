import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/views/Login.vue'
import signup from '@/views/SignUp.vue'
import Productpage from '@/views/Productpage.vue'
import AddProduct from '@/views/AddProduct.vue'
import CartView from '@/views/CartView.vue'
import Dashboard from '@/views/dashboard.vue'
import err from '@/views/404.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
      meta: {
        title: 'Signup',
      },
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct,
      meta: {
        title: 'Add Product',
      },
    },
    {
      path: '/cartview',
      name: 'CartView',
      component: CartView,
      meta: {
        title: 'Cart',
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/:product_id',
      name: 'Productpage',
      component: Productpage,
      meta: {
        title: 'Product',
      },
    },
    {
      path: '/404',
      name: '404',
      component: err,
      meta: { title: '404' }
    },
  ]
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - QuikGone`
  next()
});

export default router
