<template>
  <van-nav-bar
    title="选择城市"
    left-arrow
    @click-left="onClickLeft"
  />
  <ul v-if="project.length">
    <li
      v-for="elm in project"
      :key="elm._id" class="LiProject"
      @click="goToProject(elm._id)"

    >
      <img
      :src="elm.img"
      alt=""
      >
    </li>
  </ul>
  <!-- 如果没有请求过来 -->
  <ul v-else v-for="(ceshi,index) in project.length" :key="index">
    <li>
      <img
      :src="ceshi"
      alt=""
    >
    </li>
  </ul>
</template>
<script>
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
      project: [],
      ceshi: 'img/index-tujian/Recommen-1.png'
    }
  },
  computed: {},
  methods: {
    onClickLeft () {
      this.$router.push('/mine')
    },
    goToProject (id) {
      this.$router.push({
        path: `/Project/${id}`
      })
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
