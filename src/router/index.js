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
  // 登录页
  {
    path: '/more',
    component: () => import('../views/more.vue'),
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
  },
  // 详情页
  {
    path: '/details',
    component: () => import('../views/details.vue')
  },
  {
    path: '/cities',
    component: () => import('../views/Cities.vue')
  },
  // 规划路线页
  {
    path: '/ToProject',
    component: () => import('../views/index/ToProject.vue'),
    meta: { requiresAuth: true }
  },
  // 便利店组件
  {
    path: '/constore',
    component: () => import('../views/constore.vue')
  },
  // 规划路线的详情页
  {
    path: '/Project/:id',
    component: () => import('../components/home/Project.vue')
  },
  // 便利店详情页
  {
    path: '/commdetails/:id',
    component: () => import('../views/commDetails.vue')
  },
  {
    path: '/material',
    component: () => import('../views/Material.vue')
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
