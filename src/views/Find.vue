
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
  <div class="mars">
    <span>mars专题</span>
    <div class="mars-list"  v-for="(item,index) in marslist.slice(0,12)" :title="item.title" :img="item.img" :text="item.text" :text2="item.text2"  :key='index'>
      <img :src="item.img" alt="">
      <div class="bgcolor">
        <span>{{item.title}}</span>
      </div>
      <span>{{item.text}}</span>
      <span>{{item.text2}}</span>
    </div>
  </div>
</main>
</van-pull-refresh>
</div>
</template>

<script>

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
      marslist: [
        {
          img: require('../assets/mars/car.png'),
          title: '广汽丰田 C-HR x mars 与北广深城市',
          text: '· Vogue Business 评选出中国 新时尚',
          text2: '除了K11的尼尔·贝卢法个展，十二月'
        },
        {
          img: require('../assets/mars/bar.png'),
          title: '到胶片摄影师开的复古咖啡店里，一品',
          text: '· 体育西网红社区里的安静小店，只专注',
          text2: '这间法餐与成都本地味道融合的 bistrc'
        }
      ],
      active: 2,
      count: 0,
      isLoading: false
    }
  },
  components: {},

  computed: {},

  watch: {},

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

  created () {},

  mounted () {}

}
</script>

<style lang='scss' scoped>

</style>
