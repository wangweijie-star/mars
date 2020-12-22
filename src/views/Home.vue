<template>
  <router-view />
  <!-- 底部导航 -->
  <div class="home">
    <van-tabbar v-model="active" router :placeholder="true" inactive-color="#fff" active-color="green">
      <van-tabbar-item v-for="item in state.tabbarList" :key="item.title" :to="item.to">
        <span>{{ item.title }}</span>
        <template #icon>
          <span class="iconfont" :class="item.icon"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 引入vue3.0 setup中用ref定义常量 用reactive用来定义复杂类型
import { ref, reactive } from 'vue'
export default {
  setup () {
    const active = ref(0)
    const state = reactive({
      tabbarList: [
        {
          title: '首页',
          icon: 'icon-didian1',
          to: '/index'
        },
        {
          title: '发现',
          icon: 'icon-wangyuanjing',
          to: '/find'
        },
        {
          title: '发布',
          icon: 'icon-fabu',
          to: '/publish'
        },
        {
          title: '消息',
          icon: 'icon-xiaoxi',
          to: '/message'
        },
        {
          title: '我的',
          icon: 'icon-wode',
          to: '/mine'
        }
      ]
    })
    return { active, state }
  }
}
</script>

<style lang='scss' scoped>
.home{
  .van-tabbar-item{
    background: #000;
    .iconfont{
      font-size: 20px;
    }
  }
}
</style>
