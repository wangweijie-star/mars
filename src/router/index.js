import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/more',
    component: () => import('../views/More.vue'),
    children: []
  },
  {
    path: '/details/:id',
    component: () => import('../views/details.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  // 跳转首页第二块内容的第三部分
  {
    path: '/twothree/:biaoti',
    name: 'twothree',
    component: () => import('../views/TwoThree.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
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
