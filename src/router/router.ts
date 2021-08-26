import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'button',
    component: () => import( '../stories/Button.vue') 
  },
  {
    path: '/header',
    name: 'header',
    component: () => import( '../stories/header.vue') 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router