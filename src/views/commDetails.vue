<template>
<!-- 便利店详情页 -->
    <div>
      {{ id }}
    </div>
</template>

<script>
// 引入接口
import { getToCartApi } from '../utils/api.js'
export default {
  data () {
    return {
      id: ''
    }
  },

  components: {},

  computed: {},

  async mounted () {
    this.id = this.$route.params.id
    const res = await getToCartApi({
      id: this.id
    })
    console.log(res)
  },

  methods: {}
}
</script>
<style lang='less' scoped>
</style>
