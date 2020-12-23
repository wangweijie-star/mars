<template>
<div class="index">
  <span class="iconfont icon-didian1"></span>
  <p>杭州</p>
  <div class="top">
    <span class="left">mars   |</span>
    <span class="right">生活美食记录</span>
  </div>
  <span class="iconfont icon-sangedian"></span>
</div>
</template>

<script>

export default {
  data () {
    return {}
  },
  components: {},

  computed: {},

  watch: {},

  methods: {},

  created () {},

  mounted () {}

}
</script>

<style lang='scss' scoped>
.index{
  height: 44px;
  background: hotpink;
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
</style>
