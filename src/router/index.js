import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/todo',
      component: () => import('../views/todo/index.vue')
    },
    {
      path: '/table',
      component: () => import('../views/table/index.vue')
    }
  ]
})
