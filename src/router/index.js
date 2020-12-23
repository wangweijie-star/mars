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
        path: '/publish',
        component: () => import('../views/Publish.vue')
      },
      {
        // 消息
        path: '/message',
        component: () => import('../views/Message.vue'),
        meta: { requiresAuth: true }
      },
      {
        // 我的
        path: '/mine',
        component: () => import('../views/Mine.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
