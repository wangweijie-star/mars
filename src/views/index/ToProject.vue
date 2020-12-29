<template>
  <van-nav-bar
    title="选择城市"
    left-arrow
    @click-left="onClickLeft"
  />
  <ul>
    <li v-for="elm in project" :key="elm._id" class="LiProject" @click="goToProject(elm._id)">
      <img :src="elm.img" alt="">
    </li>
  </ul>
</template>

<script>
// import { Form } from 'vant'
// 引入接口
import { getToProjectApi } from '../../utils/api.js'
export default {
  beforeRouteEnter (to, from, next) {
    next(async (vm) => {
      const res = await getToProjectApi()
      vm.project = res.result
    })
  },
  data () {
    return {
      project: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/mine')
    },
    goToProject (id) {
      console.log(id)
    }
  }
}
</script>
<style lang='scss' scoped>
ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .LiProject{
  width: 187px;
  height: 130px;
  background: rgba(22, 49, 61, 0.12);
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
}
}
</style>
