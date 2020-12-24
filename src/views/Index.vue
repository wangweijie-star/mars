<template>
  <heard />
  <div class="main">
    <div class="main-one">
      <div class="main-one-left"></div>
      <div class="main-one-right">
        <van-swipe style="height: 150px;" vertical autoplay="1000">
          <van-swipe-item v-for="item in swiperOne" :key="item">
            <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="main-two"></div>
    <div class="main-three"></div>
  </div>
  <!-- //首页列表 -->
  <recom-list />
</template>

<script>
import Heard from '../components/home/Heard'
// 引入首页列表
import RecomList from '../components/home/RecomList'
import axios from 'axios'
export default {
  data () {
    return {
      swiperOne: []
    }
  },
  components: {
    Heard,
    RecomList
  },

  computed: {},

  watch: {},

  methods: {
    getOneList () {
      axios
        .get('https://mock.yonyoucloud.com/mock/16547/home/banner')
        .then(res => {
          if (res.data.status === 0) {
            this.swiperOne = res.data.reslut
          }
        })
    }
  },

  created () {},

  mounted () {
    this.getOneList()
  }

}
</script>

<style lang='scss' scoped>
@import "../assets/css/var.scss";
.main{
  height: 300px;
  background: #000;

  .main-one{
    height: 150px;
    background: hotpink;
    display: flex;

    .main-one-left{
      height: 100%;
      width: 25%;
      background: indianred;
    }
    .main-one-right{
      height: 100%;
      width: 75%;
      background: khaki;
      .van-swipe-item{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }

    }
  }

  .main-two{
    height: 50px;
    background: lawngreen;
  }
  .main-three{
    height: 100px;
    background: #ccc;
  }
}
</style>
