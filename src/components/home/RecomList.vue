<template>
<!-- 这是首页下面的列表 -->
  <van-tabs v-model:active="active"
  animated
  sticky
  color='green'
  line-width='36'
  line-height='3'
  title-active-color='#000000'
  title-inactive-color='#D9D9D9'
>
  <van-tab
    v-for="(item,index) in label.labelArr"
    :title="item.title"
    :key="index" :to='item.to'
    title-style="font-size:18px"
  >
    <router-view />
  </van-tab>
</van-tabs>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup () {
    const active = ref(0)
    const label = reactive({
      labelArr: [{
        title: '推荐',
        to: '/recommend'
      },
      {
        title: '关注',
        to: '/attention'
      },
      {
        title: '本地',
        to: '/locality'
      }]
    })
    return { active, label }
  },
  mounted () {
    this.label.labelArr.forEach((elm, index) => {
      if (this.$route.path === elm.to) {
        this.active = index
      }
    })
  }
}
</script>
<style lang='scss' scoped>
</style>
