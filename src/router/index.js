import { createRouter, createWebHashHistory } from 'vue-router'
// 引入vant ui
import { Toast } from 'vant'

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
        component: () => import('../views/Index.vue'),
        children: [
          {
            path: '/recommend',
            component: () => import('../components/home/indexList/recommend')
          },
          {
            path: '/attention',
            component: () => import('../components/home/indexList/attention')
          },
          {
            path: '/locality',
            component: () => import('../components/home/indexList/locality')
          }
        ]
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
  },
  {
    path: '/details.vue',
    component: () => import('../views/details.vue')
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
      Toast({
        message: '请先登录',
        position: 'bottom'
      })
      setTimeout(() => {
        next('/login')
      }, 500)
    }
  } else {
    next()
  }
})

export default router
