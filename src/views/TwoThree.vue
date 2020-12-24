<template>
<!-- 引入头部组件 -->
<go-heart :biaoti="biaoti" />
</template>

<script>
// 引入头部组件
import GoHeart from '../components/home/GoHeart.vue'
export default {
  data () {
    return {
      biaoti: ''
    }
  },
  components: {
    GoHeart
  },

  computed: {},

  watch: {},

  methods: {},

  created () {},

  mounted () {
    // 路由传参接受index传过来的标题
    this.biaoti = this.$route.params.biaoti
  }

}
</script>

<style lang='scss' scoped>

</style>
