<template>
<!-- 发布页 -->
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
        <img src="https://img.yzcdn.cn/vant/doge-fire.jpg" alt="">
    </div>
  </van-overlay>

</template>

<script>

export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang='scss' scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .van-overlay{
    background-color: rgba(3, 41, 28, 0.4);
  }
  img {
    width: 240px;
  }

</style>
