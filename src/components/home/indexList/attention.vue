<template>
<!-- 首页关注 -->
    <div class="index-attention">
      <van-empty description="速速识别为mars居民才能看到你关注的消息哟" v-if="islogin">
        <van-button plain hairline mini color='green' type="primary" to='/login'>登录</van-button>
      </van-empty>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    let islogin = true

    if (localStorage.getItem('token')) {
      islogin = false
    }
    return { islogin }
  }
})
</script>
<style lang='scss' scoped>
  .index-attention{
    width: 100%;
    background: #556F48;
    height: 500px;
  }
</style>
