<template>
<div class="index">
  <span class="iconfont icon-didian1"></span>
  <p @click="gocities">{{ city.name }}</p>
  <div class="top">
    <span class="left">mars   |</span>
    <span class="right">生活美食记录</span>
  </div>
  <span class="iconfont icon-sangedian"></span>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('moduleCity')
export default {
  data () {
    return {}
  },
  methods: {
    gocities () {
      this.$router.push('/cities')
    }
  },
  computed: mapState(['city'])
}
</script>

<style lang='scss' scoped>
.index{
  height: 44px;
  // background: hotpink;
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
    // width: 36px;
    height: 27px;
    line-height: 27px;
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
    padding: 0;
    margin-left: 15px;
  }
}
</style>
