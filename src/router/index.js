import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/CheckOut/1'
  },
  {
    path: '/CheckOut/1',
    name: 'check-out-step1',
    component: () => import('../views/CheckOut.vue')
 
  },
  {
    path: '/CheckOut/2',
    name: 'check-out-step2',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/CheckOut/3',
    name: 'check-out-step3',
    component: () => import('../views/CheckOut.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
