<template>
<!-- 这是首页下面的列表 -->
<van-tabs v-model="i"
  animated
  sticky
  swipeable
  color='green'
  line-width='36'
  line-height='3'
  title-active-color='#000000'
  title-inactive-color='#D9D9D9'
>
  <van-tab v-for="(item,index) in label" :title="item.title" :key="index" :to='item.to' title-style="font-size:18px">
    <router-view />
  </van-tab>
</van-tabs>
</template>

<script>
export default {
  data () {
    return {
      i: 0,
      label: [{
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
    }
  },
  mounted () {
    this.label.forEach((elm, index) => {
      if (this.$route.path === elm.to) {
        this.i = index
        // console.log(this.i)
      }
    })
  }
}
</script>
<style lang='scss' scoped>
</style>
