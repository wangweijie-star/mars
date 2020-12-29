<template>
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
      <div class="block" />
    </div>
  </van-overlay>

</template>

<script>

export default {
  data () {
    return {
      show: true
    }
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
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
