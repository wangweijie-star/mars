<template>
<!-- 头部 -->
<div class="index">
  <span class="iconfont icon-didian1"></span>
  <p>杭州</p>
  <div class="top">
    <span class="left">mars   |</span>
    <span class="right">深夜食堂</span>
  </div>
  <span class="iconfont icon-sangedian"></span>
</div>
<!--  推荐列表 -->
<div class="icon-list">
 <van-grid :column-num="5" :border="false" >
  <van-grid-item v-for="item in iconlist1" :key="item" :icon="item.icon" :text="item.text" :to="item.to" />
</van-grid>
</div>
<!-- 内容 -->
<main>
  <div class="black"></div>
  <div class="content">
  <span>城中好去处</span>
  <span class="more" @click="hrefmore">MORE <span class="skip">></span></span>
  </div>
  <router-view />
 <van-tabs v-model="active" swipeable class="tabs1" >
  <van-tab v-for="index in 11" :title="'选项 ' + index" :key="index" >
    内容 {{ index }}
  </van-tab>
</van-tabs>
</main>
</template>

<script>

export default {
  data () {
    return {
      iconlist1: [
        {
          icon: 'photo-o',
          text: '交赞餐厅',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '咖啡茶品',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '优质夜蒲',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '展览演场',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '当地独占',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '必逛名所',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '书影音享',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '酒店一宿',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '运动健身',
          to: '/'
        },
        {
          icon: 'photo-o',
          text: '理容悦己',
          to: '/'
        }
      ],
      active: 2
    }
  },
  components: {},

  computed: {},

  watch: {},

  methods: {
    // span跳转
    hrefmore () {
      this.$router.push('/more')
    }

  },

  created () {},

  mounted () {}

}
</script>

<style lang='scss' scoped>

</style>
