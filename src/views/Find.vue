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
  <van-tab v-for="(item,index) in tablist" :title="item.title" :key="index"  >
    内容 {{ item.title }}
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
      tablist: [
        {
          title: '新晋良铺'
        },
        {
          title: '附近地点'
        },
        {
          title: '色彩空间'
        },
        {
          title: '阳光玻璃房'
        },
        {
          title: '春季好味道'
        },
        {
          title: '面包会有的'
        },
        {
          title: '特调鸡尾酒在这里'
        },
        {
          title: '享受童趣'
        },
        {
          title: '春游好去处'
        },
        {
          title: '吃了会变甜'
        },
        {
          title: '约会加成'
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
