<template>
<!-- 导航栏 -->
  <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
  >
    <template #right>
      <i style="margin-right:5px">123</i>
      <i style="margin-right:5px">456</i>
      <i style="margin-right:5px">789</i>
    </template>
  </van-nav-bar>
  <!-- 第一部分 -->
  <div class="top">
    <div class="top-img" v-if="listDetail.image">
    <img :src="listDetail.image" alt="" />
    </div>
    <div class="top-noimg"></div>
  </div>
  <!-- 中间部分 -->
  <div class="mid">
   <div class="message">
      <img src="../assets/imges/message-2.png" class="images" alt="" />
      <p class="message-title">WOODLAND</p>
      <p class="message-intro">"美式复古杂货铺"</p>
      <p class="message-time">营业时间：Thu-Tue14:00-20:00</p>
      <p class="message-singal-price">人均消费：CNY 1000/人</p>
      <p class="message-address">
        <i><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3386955826,3014082847&fm=15&gp=0.jpg" alt="" />
        </i>
        <span class="left">
          杭州 拱墅区珠儿潭巷10号元谷创意园湖墅园5-103
        </span>
        <span class="right">导航 ></span>
      </p>
      <p class="message-tel">
        <i><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3386955826,3014082847&fm=15&gp=0.jpg" alt="" /></i>
        +86-571-8696550
      </p>
      <p class="message-suggest">
        <i><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3386955826,3014082847&fm=15&gp=0.jpg" alt="" /></i>
        <span>商家可能会调整营业时间或闭店，建议您前往前联系商家确认（点击右上角按钮可报错）</span>
      </p>
      <p class="message-detail">
        WOODLAND是位于元谷创意园的一家美式复古杂货铺，店主是美式复古爱好者，在服装行业耕耘数十年后终于在杭州开出了这个线下体验馆。读懂的店铺门口想着醒目的弥红灯招牌，店铺一共有两层，陈列写几慢慢，墙上挂着的老牛仔裤是老板上大学时第一条养的牛仔裤。店内正规代理了不少复古服饰品牌，以英伦、日系和美式复古为主，达到衣服、鞋履，小道背带、帽子等配件这里都有售卖，是喜欢服务风格的男生女生的天堂。
      </p>
    </div>
    <div class="message-green"></div>
    <div class="message-bigword">
      <h3>WHY WE LIKE IT</h3>
    </div>
      <div class="message-light">
        <div class="message-light-left"></div>
        <span class="message-light-mid">探索亮点</span>
      <div class="message-light-right"></div>
    </div>
  </div>
  <!-- 第二部分 -->
  <div class="bot">
    <p>WOODLAND是开在元谷创意园的一家独门独栋的美式复古杂货铺。</p>
    <img src="" alt="" />
  </div>

</template>

<script>
import { getDetailApi } from '../utils/api'
export default {
  data () {
    return {
      listDetail: {},
      id: Number
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  mounted() {
    // 取下ID根据ID请求数据，放在listDetail中,应该还需要传一个二级路由名，好让三个页面对应的数据不相互影响
    this.text = location.href.split('/').pop()
    getDetailApi({ id: location.href.split('/').pop() }).then(res => {
      this.$forceUpdate()
    })
  }
}
</script>
<style lang='scss' scoped>
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
}
.top {
  margin-top: 45px;
  .top-noimg {
    height: 120px;
    background-color: #556F48;
  }
}
.message {
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .images {
    width: 70px;
    position: absolute;
    top: 116px;
    left: 156px;
    background: #fff;
  }
  p {
    margin: 8px 0;
  }
  .message-title {
    margin: 20px auto 8px;
    font-size: 34px;
    font-weight: 900;
  }
  .message-intro {
    margin: 8px auto;
    font-size: 16px;
  }
  .message-time {
    margin: 8px auto;
    font-size: 12px;
  }
  .message-singal-price {
    margin: 8px auto;
    font-size: 12px;
  }
  .message-address {
    color: #88B272;
    .left {
      width: 250px;
      float: left;
    }
    .right {
      float: right;
    }
    img {
      float: left;
      margin-top: 9px;
      width: 18px;
    }
  }
  .message-tel {
    color: #88B272;
    img {
      float: left;
      width: 18px;
    }
  }
  .message-suggest {
    span {
      color: #999;
    }
    img {
      float: left;
      margin-top: 9px;
      width: 18px;
    }
  }
  .message-detail {
    line-height: 22px;
  }
}
.mid {
  .message-green {
    margin: 10px 0;
    height: 20px;
    background: #556F48;
  }
  .message-bigword {
    display: flex;
    justify-content: center;
    h3 {
        display: inline-block;
      }
  }
  .message-light {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    .message-light-left {
      background: #000;
      width: 155px;
    }
    .message-light-mid {
      font-size: 12px;
    }
    .message-light-right {
      background: #000;
      width: 155px;
    }
  }
}
.bot {
  margin: 0 12px;
  p {
    margin: 20px 0 12px 0;
  }
  img {
    width: 100%;
  }
}
</style>
