import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        redirect: '/index',
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/index',
        component: () => import('../views/Index.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/find',
        component: () => import('../views/Find.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/publish',
        component: () => import('../views/Publish.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        // 消息
        path: '/message',
        component: () => import('../views/Message.vue'),
        meta: { requiresAuth: true, keepAlive: true }
      },
      {
        // 我的
        path: '/mine',
        component: () => import('../views/Mine.vue'),
        meta: { requiresAuth: true, keepAlive: true }
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
  // console.log(to.meta)
  if (to.meta.requiresAuth) {
    console.log(to.meta.requiresAuth)
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
