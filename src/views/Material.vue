<template>
<div class="bianji">
  <van-nav-bar
    title="编辑资料"
    right-text="确定"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <div class="touxiang">
    <img :src="info.img" alt="">
    <button>编辑头像</button>
  </div>
  <div class="name">
    <p class="text">昵称</p>
    <!-- <p class="n">{{info.name}}</p> -->
    <input type="text" class="na" v-model="n">
  </div>
</div>
</template>

<script>
import { getMaterialApi } from '../utils/api'
export default {
  data () {
    return {
      n: ''
    }
  },

  components: {},

  computed: {
    info () {
      return this.$store.state.Info.info
    }
  },

  mounted () {
    console.log(this.info)
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async onClickRight () {
      const res = await getMaterialApi({ id: localStorage.getItem('token'), name: this.n, img: this.info.img })
      console.log(this.n)
      console.log(res)
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss' scoped>
 .bianji {
  height: 100vh;
  background: #556F48;
  /deep/ .van-nav-bar__text{
    color: yellowgreen;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
    font-size: 25px;
   }
   .touxiang{
     margin: 10px;
     border-bottom: white 1px solid;
     position: relative;
     button{
       background-color: rgba($color: #000000, $alpha: 0.6);
       color: #fff;
       font-size: 16px;
       border: 0;
       width: 90px;
       height: 40px;
       position: absolute;
       top: 50%;
       transform: translateY(-50%);
       margin-left:20px ;
     }
   }
   .name{
    margin: 10px;
    height: 80px;
    border-bottom: white 1px solid;
    .text{
      line-height: 30px;
      color: #52ad24;
    }
    .na{
      line-height: 50px;
      font-size: 20px;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0);
      border: 0;
    }
   }
  }
</style>
