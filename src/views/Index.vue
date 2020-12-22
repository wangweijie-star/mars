<template>
<div class="index">
  <span class="iconfont icon-didian1"></span>
  <p>杭州</p>
  <div class="top">
    <span class="left">mars   |</span>
    <span class="right">生活记录美食</span>
  </div>
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
  height: 30px;
  background: hotpink;
  padding: 5px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .iconfont{
    font-size: 30px;
  }
  p{
    margin-right:15px;
  }
  .top{
    width: 230px;
    height: 100%;
    background: #000;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;

    .left{
      margin-right: 10px;
      font-weight: 900;
    }
  }
}
</style>
