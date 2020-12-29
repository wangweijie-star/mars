<template>
<!-- 导航栏 -->
  <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
  >
    <template #right>
      <i style="margin-right:8px"><van-icon name="calendar-o" /></i>
      <i style="margin-right:8px"><van-icon name="star-o" /></i>
      <i style="margin-right:8px"><van-icon name="cluster-o" /></i>
    </template>
  </van-nav-bar>
  <van-pull-refresh
    @refresh="onRefresh"
    v-model="loading"
    pulling-text="再往下拉点"
    loosing-text="快点放开我"
  >
    <!-- 第一部分 -->
    <div class="top">
      <div class="top-img" v-if="listDetail.image">
      <img :src="listDetail.image" v-if="!listDetail.image" alt="" />
      </div>
      <div class="top-noimg"></div>
    </div>
    <!-- 中间部分 -->
    <div class="mid">
    <div class="message">
        <img src="../assets/imges/message-2.png" class="images" alt="" />
        <p class="message-title">{{ listDetail.title }}</p>
        <p class="message-intro">"{{ listDetail.intro }}"</p>
        <p class="message-time" v-if="listDetail.time">营业时间：{{ listDetail.time }}</p>
        <p class="message-singal-price">人均消费：{{ listDetail.singalPrice }}</p>
        <p class="message-address">
          <i><van-icon name="location" /></i>
          <span class="left">
            {{ listDetail.address }}
          </span>
          <span class="right">导航 ></span>
        </p>
        <p class="message-tel">
          <i><van-icon name="phone-circle" /></i>
          {{ listDetail.tel }}
        </p>
        <p class="message-suggest">
          <i><van-icon name="warning-o" /></i>
          <span>{{ listDetail.suggest }}</span>
        </p>
        <p class="message-detail">
          {{ listDetail.detail }}
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
      <p>{{ listDetail.msg }}</p>
      <img :src="listDetail.image2" alt="" />
    </div>
  </van-pull-refresh>

</template>

<script>
import { getDetailApi } from '../utils/api'
import { Toast } from 'vant'
export default {
  data () {
    return {
      listDetail: {},
      id: Number,
      loading: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onRefresh() {
      setTimeout(() => {
        this.loading = false
        Toast('刷新成功')
      }, 1000)
    }
  },
  mounted() {
    // 取下ID根据ID请求数据，放在listDetail中,应该还需要传一个二级路由名，好让三个页面对应的数据不相互影响
    this.text = location.href.split('/').pop()
    getDetailApi({ id: location.href.split('/').pop() }).then(res => {
      this.listDetail = res.result.result
      this.$forceUpdate()
    })
  }
}
</script>
<style lang='scss' scoped>
.top-img {
  img {
    width: 100%;
    height: 120px;
  }
}
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  i {
    font-size: 16px;
    line-height: 46px;
  }
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
    top: 66px;
    left: 156px;
    background: #fff;
  }
  p {
    margin: 8px 0;
  }
  .message-title {
    margin: 20px auto 8px;
    font-size: 24px;
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
    i {
      color: #000;
      float: left;
      font-size: 18px;
      margin-top: 5px;
    }
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
    i {
      color: #000;
      float: left;
      font-size: 18px;
    }
  }
  .message-suggest {
    span {
      color: #999;
    }
    i {
      float: left;
      padding-top: 5px;
      font-size: 18px;
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
