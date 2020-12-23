<template>
  <van-nav-bar title="登录" left-arrow @click="left" />
  <div class="from-warp">
    <van-field v-model="text" label="文本" />
  </div>
  <div class="from-warp">
    <van-field v-model="password" type="password" label="密码" />
  </div>
  <!-- 提交按钮 -->
  <van-button type="primary" block @click='submit(text,password)'>登录</van-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup (props, { root }) {
    // 使用提交数据函数
    const { text, password, submit } = submitFrom()

    return { text, password, submit }
  },
  methods: {
    left () {
      this.$router.go(-1)
    }
  }
})
// 提交数据函数
function submitFrom () {
  const text = ref('')
  const password = ref('')
  function submit (name, pass) {
    console.log(name)
    console.log(pass)
  }
  return { text, password, submit }
}

</script>
<style lang='scss' scoped>
.from-warp {
  position: relative;
  top: 100px;
  left: 0;
}
.van-button {
  position: relative;
  top: 150px;
  left: 0;
}
</style>
