<template>
<!-- 信息页面 -->
<van-nav-bar title="信息" />
<van-pull-refresh style="min-height: 100vh;" v-model="isLoading" :head-height="100" @refresh="onRefresh" loosing-text='加载中...' success-text='刷新成功😊' >
  <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <div class="warp">
      <div class="mescontent">
        <ul>
          <li>
            <img src="../assets/imges/message-1.png" alt="">
            <span>赞 & mark</span>
          </li>
          <li>
            <img src="../assets/imges/message-2.png" alt="">
            <span>新增关注</span>
          </li>
          <li>
            <img src="../assets/imges/message-3.png" alt="">
            <span>评论 & @</span>
          </li>
        </ul>
      </div>
      <div class="message">
        <ul>
          <li v-for="item in shuju" :key="item._id">
            <div class="img-warp"></div>
            <div class="message-text">
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </div>
            <div class="shijian">
              <p>{{ shijianchuo }}</p>
              <p class="advance">></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</van-pull-refresh>
</template>

<script>
// 请求数据
import { getLiApi } from '../utils/api.js'

export default {
  data () {
    return {
      shuju: [],
      shijianchuo: '',
      isLoading: true
    }
  },
  async mounted () {
    const res = await getLiApi()
    this.shuju = res.result
    const currentTime = Date.parse(new Date())
    const beforeTime = Date.parse(res.time)
    const interval = currentTime - beforeTime
    // 分钟
    const hour = Math.floor((interval / 1000) / 60)
    // 小时
    // const day = Math.floor((interval / 1000) / 60 / 60)
    if (hour >= 60) {
      // console.log(hour / 60)
      this.shijianchuo = Math.floor(hour % 60) + '小时前'
      // console.log(this.shijianchuo)
    } else {
      this.shijianchuo = hour + '分钟前'
    }
  },
  methods: {
    onRefresh () {
      this.isLoading = false
      getLiApi()
    }
  }

}
</script>

<style lang='scss' scoped>
    .doge {
      width: 140px;
      height: 72px;
      margin-top: 8px;
      border-radius: 4px;
    }
  .warp{
    width: 100%;
    height: 700px;
    background-color: #556F48;
    .mescontent {
      width: 100%;
      height: 120px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;

      ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          width: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
          }
          span{
            font-size: 11px;
            font-weight:800 ;
          }
        }
      }
    }
    .message{
      margin-top: 10px;
      background-color: #ffffff;
      width: 100%;
      // height: 100%;
      font-size:14px;
      li {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .img-warp {
          width: 40px;
          height: 40px;
          background-color:#556F48;
          border-radius:50%;
          overflow: hidden;

        }
        .message-text {
          height: 30px;
          margin-top: -10px;
          h4{
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #000000;
          }
          p{
            width: 200px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
        .shijian{
          position: relative;
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .advance {
            position: absolute;
            right: 0;
            bottom: 0;
            font-weight: 900;
            // padding-top: 5px;
          }
        }
      }
    }
  }

</style>
