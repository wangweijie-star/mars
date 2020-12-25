<template>
<!-- 首页 -->
  <div class="index-wrap">
    <!-- 组件插入头部 -->
    <heard />
    <!-- 第二块内容 -->
    <div class="main">
      <div class="main-one">
        <!-- 第二块中的第一块左边部分 -->
        <div class="main-one-left">
          <div class="main-one-left-div">
            <img src="../assets/imges/feiji.png" alt="">
            <p>Flight Info</p>
          </div>
          <div class="main-one-left-div">
            <img src="../assets/imges/rili.png" alt="">
            <p>Dec.23</p>
          </div>
          <div class="main-one-left-div">
            <img src="../assets/imges/yunduo.png" alt="">
            <van-swipe :autoplay="1500" :show-indicators="false" vertical>
              <van-swipe-item>11℃</van-swipe-item>
              <van-swipe-item>5℃</van-swipe-item>
            </van-swipe>
          </div>
          <div class="main-one-left-div">
            <van-swipe :autoplay="1500" :show-indicators="false" vertical>
              <van-swipe-item>
                <img src="../assets/imges/wode.png" alt="">
                <p>912052</p>
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/imges/liebiao.png" alt="">
                <p>65335</p>
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/imges/shouye.png" alt="">
                <p>943</p>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <!-- 第二块中的第一块右边部分 -->
        <div class="main-one-right">
          <van-swipe vertical autoplay="1000">
            <van-swipe-item v-for="item in swiperOne" :key="item">
              <img :src="item" alt="">
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="main-two">
        <van-swipe :autoplay="1500" :show-indicators="false" vertical>
          <van-swipe-item>
            <div class="kuang">24h 热议</div>
            <div class="right">comeehere cafe/LiQuid Garden 是有...</div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="kuang">附近发生</div>
            <div class="right">高碳水带来的满足感</div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="kuang">大家在 mark</div>
            <div class="right">杭州甜品店👉浅绿🍃超级可爱的...</div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="main-three">
        <van-grid column-num='6' :border="false">
          <van-grid-item v-for="(item, index) in mainthresslist" :key="index" @click="gotwothree(index)" >
            <img :src="item.url" alt="">
            <span>{{ item.title}}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 第三块内容 -->
    <div class="hot">
      <div class="hot-one">
        <img :src="urlList.url1" alt="" class="img1">
        <div class="hot-one-right">
          <img :src="urlList.url2" alt="" class="img2">
          <img :src="urlList.url3" alt="" class="img3">
        </div>
      </div>
      <div class="hot-two">
        <img :src="urlList.url4" alt="" class="img4">
        <img :src="urlList.url5" alt="" class="img5">
      </div>
    </div>
  </div>
  <!-- //首页列表 -->
  <recom-list />
</template>

<script>
// 引入头部组件
import Heard from '../components/home/Heard'
// 引入首页列表
import RecomList from '../components/home/RecomList'
import axios from 'axios'
// 引入图片地址
import url1 from '../assets/imges/hot1.png'
import url2 from '../assets/imges/hot2.png'
import url3 from '../assets/imges/hot3.png'
import url4 from '../assets/imges/hot4.png'
import url5 from '../assets/imges/hot5.png'
import url6 from '../assets/imges/shouye.png'
import url7 from '../assets/imges/yingshi.png'
import url8 from '../assets/imges/mingsuo.png'
import url9 from '../assets/imges/wanle.png'
import url10 from '../assets/imges/dangdi.png'
import url11 from '../assets/imges/tiyan.png'
export default {
  props: ['id'],
  data () {
    return {
      swiperOne: [],
      urlList: {
        url1: url1,
        url2: url2,
        url3: url3,
        url4: url4,
        url5: url5
      },
      mainthresslist: [
        {
          url: url6,
          title: '附近地点',
          biaoti: '全部品类'
        },
        {
          url: url7,
          title: '交赞饮食',
          biaoti: 'Eat'
        },
        {
          url: url8,
          title: '买物名所',
          biaoti: 'Buy'
        },
        {
          url: url9,
          title: '玩乐胜地',
          biaoti: 'Play'
        },
        {
          url: url10,
          title: '当地独占',
          biaoti: 'Local'
        },
        {
          url: url11,
          title: '优挚体验',
          biaoti: 'Experience'
        }
      ]
    }
  },
  components: {
    Heard,
    RecomList
  },
  methods: {
    getOneList () {
      axios
        .get('https://mock.yonyoucloud.com/mock/16547/home/banner')
        .then(res => {
          if (res.data.status === 0) {
            this.swiperOne = res.data.reslut
          }
        })
    },
    gotwothree (i) {
      this.$router.push({ name: 'twothree', params: { biaoti: this.mainthresslist[i].biaoti } })
    }
  },
  mounted () {
    this.getOneList()
  }

}
</script>

<style lang='scss' scoped>
@import "../assets/css/var.scss";
.index-wrap{
  background: #556F48;
}
.main{
  height: 280px;
  background: #000;
  padding: 10px;
  margin-top: 59px;
  // overflow: hidden;

  .main-one{
    height: 135px;
    // background: hotpink;
    display: flex;

    .main-one-left{
      height: 135px;
      width: 85px;
      padding-right: 5px;
      // background: indianred;

      .main-one-left-div{
        width: 80px;
        height: 19px;
        margin-top: 10px;
        // background: lawngreen;
        display: flex;
        img{
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        p{
          width: 56px;
          height: 19px;
          line-height: 19px;
          font-size: 12px;
          color: #fff;
          margin: 0;
          background: rgba(255, 255, 255, 0.2);
        }
      }
      .main-one-left-div:nth-child(1){
        margin-top: 9px;
      }
      .main-one-left-div:nth-child(2){
        margin-top: 16px;
      }
    }
    .main-one-right{
      height: 135px;
      width: 274px;
      // background: khaki;
      .van-swipe{
        width: 274px;
        height: 135px;
      }
    }
  }

  .main-two{
    width: 355px;
    height: 20px;
    margin-top: 20px;
    margin-bottom: 8px;
    // background: lawngreen;
  }
  .main-three{
    width: 355px;
    height: 93px;
    padding-top: 7px;
    overflow: auto;
    background: #1a1a1a;
  }
}
.hot{
  width: 353px;
  height: 285px;
  border: 1px solid #979797;
  margin-top: 15px;
  padding: 18px 10px 0;
  background: #f6f6f6;
  .hot-one{
    width: 353px;
    height: 176px;
    margin-bottom: 30PX;
    display: flex;
    .img1{
      width: 176px;
      height: 176px;
    }
    .hot-one-right{
      width: 176px;
      height: 176px;
      margin-left: 3px;
      display: flex;
      flex-direction: column;
      .img2{
        width: 176px;
        height: 86px;
        margin-bottom: 4px;
      }
      .img3{
        width: 176px;
        height: 86px;
      }
    }
  }
  .hot-two{
    width: 353px;
    height: 50px;
    display: flex;
    overflow: hidden;
    .img5{
      width: 176px;
      height: 50px;
    }
    .img4{
      margin-right: 3px;
      width: 176px;
      height: 50px;
    }
  }
}

</style>
