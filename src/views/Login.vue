<template>
<!-- 登录页面 -->
  <van-nav-bar title="登录" left-arrow @click="left" />
  <div class="from-warp">
    <van-field v-model="text" label="用户名" />
  </div>
  <div class="from-warp">
    <van-field v-model="password" type="password" label="密码" />
  </div>
  <!-- 提交按钮 -->
  <van-button type="primary" block @click='submit(text,password)'>登录</van-button>
</template>

<script>
// 引入请求数据
import { postLoginlApi } from '../utils/api'
import { defineComponent, ref } from 'vue'
import { Toast } from 'vant'
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
  async function submit (name, mima) {
    const res = await postLoginlApi({ name, mima })
    // console.log(res.result._id)
    localStorage.setItem('token', res.result._id)
    if (localStorage.getItem('token')) {
      Toast({
        message: '登录成功',
        position: 'bottom'
      })
      setTimeout(() => {
        this.$router.back(1)
      }, 1000)
    }
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
