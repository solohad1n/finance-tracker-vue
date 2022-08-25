import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Login from '@/views/Login/Login.vue'
import SignUp from '@/views/SignUp/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
