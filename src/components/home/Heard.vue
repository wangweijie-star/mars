<template>
<div class="index">
  <span class="iconfont icon-didian1"></span>
  <p>杭州</p>
  <div class="top">
    <span class="left">mars   |</span>
    <span class="right">生活美食记录</span>
  </div>
  <span class="iconfont icon-sangedian" @click="control"></span>
</div>
<!-- 点击头部显示隐藏Div -->
  <div class="toShop" v-if="DivShow">
    <ul>
      <li v-for="(elm,index) in LiItem" :key="index" @click="ToProject(index)">
        <p>{{ elm }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      DivShow: false,
      LiItem: ['mars posints', '我的礼卷', '推荐地点', '提交活动', '邀请好友', '规划玩乐路线', 'mars 便利店']
    }
  },
  methods: {
    control () {
      if (!this.DivShow) {
        this.DivShow = true
      } else {
        this.DivShow = false
      }
    },
    ToProject (idx) {
      if (idx === 5) {
        this.$router.push('/ToProject')
      }
      if (idx === 6) {
        this.$router.push('/constore')
      }
    }
  },

  created () {},

  mounted () {}

}
</script>

<style lang='scss' scoped>
.index{
  height: 44px;
  background: #ffffff;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .iconfont{
    width: 24px;
    height: 24px;
    font-size: 28px;
  }
  p{
    margin-right:10px;
    margin-left: 4px;
    font-size: 18px;
  }
  .top{
    width: 230px;
    height: 28px;
    background: #000;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    .left{
      margin-right: 10px;
      font-size: 14px;
      font-weight: 900;
      font-family: PingFangSC-Regular;
    }
  }
  .icon-sangedian{
    width: 24px;
    height: 24px;
    margin-left: 15px;
  }
}
.toShop{
  width: 100px;
  position: fixed;
  top: 65px;
  right: 3px;
  z-index: 100;
  background: #556F48;
  border-radius:10px 0 0 0px ;
  li{
    height: 35px;
    border-bottom:1px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #ffffff;
  }
}
</style>
