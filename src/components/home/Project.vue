<template>
<!-- 规划路线 -->
  <div>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.id = this.$route.params.id
    console.log(this.id)
  },

  methods: {}
}
</script>
<style lang='less' scoped></style>
