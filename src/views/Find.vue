
<template>

<!-- 头部 -->
<div class="index">
  <span class="iconfont icon-didian1"></span>
  <p>杭州</p>
  <div class="top">
    <span class="left">mars   |</span>
    <span class="right">深夜食堂</span>
  </div>
  <span class="iconfont icon-sangedian"></span>
</div>
<!--  推荐列表 -->
<div class="flush">
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
<div class="icon-list">
 <van-grid :column-num="5" :border="false" >
  <van-grid-item v-for="item in iconlist1" :key="item" :icon="item.img" :text="item.text" :to="item.to" />
</van-grid>
</div>
<!-- 内容 -->
<main>
  <div class="black"></div>
  <div class="content">
  <span>城中好去处</span>
  <span class="more" @click="hrefmore">MORE <span class="skip">></span></span>
  </div>
  <router-view />
 <van-tabs v-model="active" swipeable class="tabs1" >
  <van-tab v-for="(item,index) in tablist" :title="item.title" :img="item.img" :key="index">
    <img :src="item.img" />
  </van-tab>
</van-tabs>
<!-- 近期活动 -->
  <div class="product-title">
  <span>近期活动</span>
  <span class="more" @click="hrefmore">MORE <span class="skip">></span></span>
  </div>
  <div class="product" >
    <div class="ETP-img"  v-for="(item,index) in productlist"  :key="index">
    <ul>
      <li v-for="elm in item" :key="elm.id">
        <img :src="elm.img">
      </li>
    </ul>
    </div>
  </div>

  <!-- mars专题 -->
  <span class="top-title">mars 专题</span>
  <div class="mars">
    <div class="mars-list"  v-for="(item,index) in  marslist" :title="item.title" :img="item.img" :text="item.text" :text1="item.text1" :key='index'>
        <img :src="item.img" alt="" class="list-img">
      <div class="bgcolor">
        <span class="img-titel">{{item.title}}</span>
      </div>
        <span class="text1">{{item.text}}</span>
        <span class="text1">{{item.text1}}</span>
    </div>
  </div>

<!-- 生活玩家 -->
<div class="life-play">
  <!-- <span class="life-title">mars 生活玩家</span> -->
<!-- <div class="life-list">
<van-swipe class="my-swipe" :autoplay="0" indicator-color="white" v-for="item in lifelist" :key='item._id' :width="220" :height='170'>
  <van-swipe-item>
    <img :src="item.img1" alt="">
  </van-swipe-item>
    <van-swipe-item>
    <img :src="item.img2" alt="">
  </van-swipe-item>
    <van-swipe-item>
    <img :src="item.img3" alt="">
  </van-swipe-item>
</van-swipe>
</div> -->

</div>

</main>
</van-pull-refresh>
</div>
</template>

<script>
// import { Form } from 'vant'

// import axios from 'axios'
import { marslistApi, lifelistApi } from '../utils/api'

export default {
  data () {
    return {
      iconlist1: [
        {
          img: require('../assets/find/find  10@2x.png'),
          text: '交赞餐厅',
          to: '/'
        },
        {
          img: require('../assets/find//find 11@2x.png'),
          text: '咖啡茶品',
          to: '/'
        },
        {
          img: require('../assets/find//find 12@2x.png'),
          text: '优质夜蒲',
          to: '/'
        },
        {
          img: require('../assets/find//find 13@2x.png'),
          text: '展览演场',
          to: '/'
        },
        {
          img: require('../assets/find/find  14@2x.png'),
          text: '当地独占',
          to: '/'
        },
        {
          img: require('../assets/find/find  15@2x.png'),
          text: '必逛名所',
          to: '/'
        },
        {
          img: require('../assets/find/find  16@2x.png'),
          text: '书影音享',
          to: '/'
        },
        {
          img: require('../assets/find/find  17@2x.png'),
          text: '酒店一宿',
          to: '/'
        },
        {
          img: require('../assets/find/find  18@2x.png'),
          text: '运动健身',
          to: '/'
        },
        {
          img: require('../assets/find/find 19@2x.png'),
          text: '理容悦己',
          to: '/'
        }
      ],
      tablist: [
        {
          title: '新晋良铺',
          img: require('../assets/imges/find0.jpg')
        },
        {
          title: '附近地点',
          img: require('../assets/imges/find1.jpg')
        },
        {
          title: '色彩空间',
          img: require('../assets/imges/find2.jpg')
        },
        {
          title: '阳光玻璃房',
          img: require('../assets/imges/find3.jpg')
        },
        {
          title: '春季好味道',
          img: require('../assets/imges/find4.jpg')
        },
        {
          title: '面包会有的',
          img: require('../assets/imges/find5.jpg')
        },
        {
          title: '特调鸡尾酒在这里',
          img: require('../assets/imges/find6.jpg')
        },
        {
          title: '享受童趣',
          img: require('../assets/imges/find7.jpg')
        },
        {
          title: '春游好去处',
          img: require('../assets/imges/find8.jpg')
        },
        {
          title: '吃了会变甜',
          img: require('../assets/imges/find9.jpg')
        },
        {
          title: '约会加成',
          img: require('../assets/imges/find10.jpg')
        }
      ],
      productlist: {
        ETP1: [
          {
            img: require('../assets/ETP/ETP1.png'),
            id: 1
          },
          {
            img: require('../assets/ETP/ETP2.png'),
            id: 2
          },
          {
            img: require('../assets/ETP/ETP3.png'),
            id: 3
          }
        ],
        ETP2: [
          {
            img: require('../assets/ETP/ETP4.png'),
            id: 4
          },
          {
            img: require('../assets/ETP/ETP5.png'),
            id: 5
          },
          {
            img: require('../assets/ETP/ETP6.png'),
            id: 6
          }
        ],
        ETP3: [
          {
            img: require('../assets/ETP/ETP1.png'),
            id: 7
          },
          {
            img: require('../assets/ETP/ETP2.png'),
            id: 8
          },
          {
            img: require('../assets/ETP/ETP3.png'),
            id: 9
          }
        ]
      },
      marslist: [],
      lifelist: [],
      active: 2,
      count: 0,
      isLoading: false
    }
  },
  methods: {
    // span跳转
    hrefmore () {
      this.$router.push('/more')
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  },
  async mounted () {
    const res = await marslistApi()
    this.marslist = res.result

    const req = await lifelistApi()
    this.lifelist = req.result
    console.log(this.lifelist)
  }

}
</script>

<style lang='scss' scoped>

</style>
