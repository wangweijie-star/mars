<template>
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-cell is-link @click="showPopup">展示弹出层</van-cell>
<van-popup v-model="show"  position="top" :style="{ height: '30%' }">内容</van-popup>
</template>

<script>
// import { reactive,ref } from 'vue'
import { Toast } from 'vant'
export default {
  data () {
    return {
     show: false,
    }
  },
  components: {},

  computed: {},

  watch: {},

  methods: {
     onClickLeft() {
      Toast('按钮');
    },
    onClickRight() {
      Toast('按钮');
    },
     showPopup() {
      this.show = true;
    },
  },

  created () {},

  mounted () {}
  // setup(){
  // }

}
</script>

<style lang='scss' scoped>

</style>
