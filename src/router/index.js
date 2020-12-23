import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/find',
        component: () => import('../views/Find.vue')
      },
      {
        path: '/more',
        component: () => import('../views/more.vue')
      },

      {
        path: '/publish',
        component: () => import('../views/Publish.vue')
      },
      {
        path: '/message',
        component: () => import('../views/Message.vue')
      },
      {
        path: '/mine',
        component: () => import('../views/Mine.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
