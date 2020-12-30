<template>
<div class="top">
  <van-nav-bar
    left-text="返回"
    right-text="分享"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</div>
<div class="section">
  <div class="head-photo">
    <img :src="info.img" alt="">
  </div>
  <h2>{{info.name}}</h2>
  <div class="top-text"><span>1关注</span><span class="fen">0粉丝</span></div>
  <van-tabs v-model="active" >
    <van-tab title="mars 城事" style="{background:'#556F48'}"><img src="http://42.192.148.146:1111/images/mine/img2.png" alt=""></van-tab>
    <van-tab title="mark"><img src="http://42.192.148.146:1111/images/mine/img1.png" alt=""></van-tab>
    <van-tab title="路线"><img src="http://42.192.148.146:1111/images/mine/img3.png" alt=""></van-tab>
    <van-tab title="签到"><img src="http://42.192.148.146:1111/images/mine/img2.png" alt=""></van-tab>
  </van-tabs>
  <van-share-sheet
  v-model:show="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
<van-popup v-model:show="show" position="left" :style="{ width: '50%',height:'100%',background:'#556F48' }" >akjlkdlkf</van-popup >
</div>
</template>

<script>
import { ref } from 'vue'
import { Toast } from 'vant'
import { userinfoApi } from '../utils/api'
export default {
  data () {
    return {
      active: 2,
      info: {}
    }
  },
  components: {},

  computed: {},

  watch: {},

  methods: {
    async getMyInforApi () {
      const res = await userinfoApi({
        token: localStorage.getItem('token')
      })
      this.info = res.result
      console.log(res.result)
    }
  },

  created () {},

  mounted () {
    this.getMyInforApi()
  },
  setup () {
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    const onClickLeft = () => {
      show.value = true
      console.log(show.value)
    }
    const showShare = ref(false)
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' }
    ]

    const onSelect = (option) => {
      Toast(option.name)
      showShare.value = false
    }
    const onClickRight = () => {
      showShare.value = true
      console.log(showShare.value)
    }
    return {
      options,
      onSelect,
      showShare,
      onClickRight,
      show,
      showPopup,
      onClickLeft
    }
  }

}
</script>

<style lang='scss' scoped>
.top{
  height: 180px;
  background-color: black;
  background-image:url(http://42.192.148.146:1111/images/mine/img4.png);
  .van-nav-bar{
    background:rgba($color: #000000, $alpha: 0.5);
    border-bottom: 0px;
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0rem;
  }

}
.section{
  position: relative;
  height: 1342px;
  background: #556F48;
  .head-photo{
  border-radius: 50%;
  width: 76px;
  height: 76px;
  background-color: red;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top:-58px
 }
  .top-text{
  text-align: center;
  height: 17px;
  font-size: 12px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #B3B3B3;
  line-height: 17px;
    span{
      width: 50px;
    }
    .fen{
      margin-left: 50px;
    }
  }
  .van-tabs {
    margin-top: 45px;
   /deep/ .van-tabs__nav {
   background: #556F48;
   .van-tab__text {
    color: #B3B3B3;
    font-size: 12px ;
    font-family: Bookman-Demi, Bookman;
    font-weight: 800 ;
   }
  }
  }

}

h2{
    font-size: 30px;
    font-family: Bookman-Demi, Bookman;
    font-weight: normal;
    color: #000000;
    line-height: 36px;
    text-align: center;
    margin-top: 0;
    padding-top:24px ;
  }
</style>
