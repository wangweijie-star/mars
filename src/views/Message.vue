<template>
<!-- 信息页面 -->
<div class="warp">
  <van-nav-bar title="信息" />
  <div class="mescontent">
    <!-- <img src="../assets/imges/message-1.png" alt=""> -->
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
          <h3>{{ item.title }}</h3>
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
</template>

<script>
// 请求数据
import { getLiApi } from '../utils/api.js'

export default {
  data () {
    return {
      shuju: [],
      shijianchuo: ''
    }
  },
  async mounted () {
    const res = await getLiApi()
    this.shuju = res.result
    const currentTime = Date.parse(new Date())
    const beforeTime = Date.parse(res.time)
    const interval = currentTime - beforeTime
    const hour = Math.floor((interval / 1000) / 60)
    if (hour >= 24) {
      this.shijianchuo = '昨天'
    } else {
      this.shijianchuo = hour + '分钟前'
    }
  }

}
</script>

<style lang='scss' scoped>
  .warp{
    width: 100%;
    height: 900px;
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
            font-size: 12px;
            font-weight:800 ;
          }
        }
      }
    }
    .message{
      margin-top: 10px;
      background-color: #ffffff;
      width: 100%;
      height: 200px;
      font-size:14px;
      li {
        width: 100%;
        height: 50px;
        border: 1px solid #ccc;
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
