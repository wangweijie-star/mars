<template>
<!-- index 便利店组件 -->
 <van-nav-bar title="mars LifeMark 便利店" left-arrow  @click-left="onClickLeft">
  <template #right>
      <img src="http://42.192.148.146:1111/images/otherimg/img-24.png" alt="">
  </template>
</van-nav-bar>
<!-- 渲染数据 -->
<ul>
  <li v-for="item in LiItem" :key="item._id" @click="goTodetail(item._id)">
    <!-- 渲染的图片 -->
    <div class="imgWarp">
      <img :src="item.img" alt="">
    </div>
    <!-- 渲染标题 价格 -->
    <div class="itemIntroduce">
      <h5>{{ item.title }}</h5>
      <h5>{{ item.address }}</h5>
      <div class="price">
        <p>CNY</p>
        <span>{{ item.price }}</span>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
// 引入接口
import { getToConStoreApi } from '../utils/api.js'
export default {
  data () {
    return {
      LiItem: []
    }
  },

  components: {},

  computed: {},

  async mounted () {
    const res = await getToConStoreApi()
    this.LiItem = res.result
    console.log(this.LiItem)
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    goTodetail (id) {
      this.$router.push({
        path: `/commdetails/${id}`
      })
    }
  }
}
</script>
<style lang='scss' scoped>
ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width:175px;
    height: 259px;
    display: flex;
    flex-direction: column;
    imgWarp{
      width: 100%;
      height: 175px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .itemIntroduce {
      width: 100%;
      height: 84px;
      padding-left:8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h5{
        font-size: 14px;
        font-family: ArialMT;
        color: #0D0D0D;
      }
      .price{
        font-size: 10px;
        display: flex;
        P{
          color: #0D0D0D;
          margin-right: 5px;
        }
        span{
          color: #909C8C;
        }
      }
    }
  }
}
</style>
