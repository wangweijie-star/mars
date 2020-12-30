<template>
<div v-if="info">
  <div class="top">
  <van-nav-bar
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
  <template #left>
    <img src="http://42.192.148.146:1111/images/otherimg/img-22.png" alt="">
  </template>
  <template #right>
    <img src="http://42.192.148.146:1111/images/otherimg/img-24.png" alt="">
  </template>
  </van-nav-bar>
  </div>
  <div class="section">
    <div @click="goTomaterial()" class="head-photo" >
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
  <van-popup v-model:show="show" position="left" :style="{ width: '65%',height:'100%',background:'#556F48' }" >
    <div>
      <p><span><img src="http://42.192.148.146:1111/images/otherimg/img-26.png" alt=""></span> Favorites</p>
      <van-cell title="收藏夹" is-link />
    </div>
    <div>
      <p><span><img src="http://42.192.148.146:1111/images/otherimg/img-25.png" alt=""></span>mars Artist</p>
      <van-cell title="推荐的地点" is-link />
    </div>
    <div>
      <p><span><img src="http://42.192.148.146:1111/images/otherimg/img-27.png" alt=""></span>mars Points</p>
      <van-cell title="点数兑换" is-link />
      <van-cell title="邀请好友" is-link />
    </div>
    <div>
      <p><span><img src="http://42.192.148.146:1111/images/otherimg/img-26.png" alt=""></span>mars LifeMars</p>
      <van-cell title="潮流好物订单" is-link />
    </div>
    <div>
      <p><span><img src="http://42.192.148.146:1111/images/otherimg/img-28.png" alt=""></span>Setting</p>
      <van-cell title="设置" is-link />
    </div>

  </van-popup >
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { Toast } from 'vant'
import { useStore } from 'vuex'
export default {
  data () {
    return {
      active: 2
    }
  },
  components: {},

  computed: {
  },

  watch: {},

  methods: {
    goTomaterial () {
      this.$router.push('/material')
    }
  },

  created () {
    // this.$forceUpdate()
  },
  mounted () {
    this.$forceUpdate()
    this.$store.dispatch('getMyInforApi', {
      token: localStorage.getItem('token')
    })
    console.log(this.info)
    console.log(this.$store)
  },
  setup () {
    const show = ref(false)
    const store = useStore()
    const info = store.state.Info.info
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
      onClickLeft,
      info
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
  .van-nav-bar__left{
    img{
      width: 24px;
      height: 24px;
    }
  }
  .van-nav-bar__right{
    img{
      width: 24px;
      height: 24px;
    }
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
  /deep/ .van-popup{
    padding-top: 100px;
    div{
      p{
        line-height: 40px;
        font-size: 20px;
        font-family: Bookman;
        color: white;
        font-weight: 900;
        span{
          padding: 5px;
        }
        img{
          width: 25px;
        }
      }
      .van-cell{
       background-color: rgba($color:#fff, $alpha: 0);
       color: white;
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
