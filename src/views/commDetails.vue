<template>
<!-- 便利店详情页 -->
    <van-nav-bar
      fixed
      :title="dataDetail.detailTitle"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 图片 -->
    <div class="img-big-tilte">
      <div class="img-big">
        <img :src="dataDetail.img" alt="">
      </div>
      <!-- 标题 -->
      <div class="detitle">
        {{ dataDetail.detailTitle }}
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="shopmessage">
      <div class="title">
        <div class="sm-title">
          <h5>商品信息</h5>
          <span>{{ dataDetail.message }}</span>
        </div>
      </div>
      <!-- 编号 颜色 性别 -->
      <div class="mes">
        <div class="num sty pad">
          编号 ： {{ dataDetail.num }}
        </div>
        <div class="color sty">
          颜色 ： {{ dataDetail.color }}
        </div>
        <div class="sex sty">
          性别 ： {{ dataDetail.性别 }}
        </div>
      </div>
      <!-- 商品介绍 -->
      <div class="shoppresentation" v-if="dataDetail.synopsis">
          {{ dataDetail.synopsis }}
        </div>
    </div>
    <!-- 尺码信息 -->
      <div class="shopmessage drop" v-if="dataDetail.long">
      <div class="title">
        <div class="sm-title">
          <h5>尺码信息</h5>
          <span>DETAILS</span>
        </div>
      </div>
      <!-- 吊牌 长 宽 厚-->
      <div class="drop">
        <div class="common dro">吊牌信息</div>
        <div class="long common">长</div>
        <div class="wid common">宽</div>
        <div class="thick common">厚</div>
        <div class="common dro">{{ dataDetail.DropSize }}</div>
        <div class="long common">{{ dataDetail.long }}</div>
        <div class="wid common">{{ dataDetail.width }}</div>
        <div class="thick common">{{ dataDetail.thickness }}</div>
      </div>
    </div>

</template>

<script>
// 引入接口
import { getToCartApi } from '../utils/api.js'
export default {

  data () {
    return {
      id: '',
      dataDetail: []
    }
  },
  async mounted () {
    this.id = this.$route.params.id
    const res = await getToCartApi({
      id: this.id
    })
    this.dataDetail = res.result
    console.log(this.dataDetail)
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss' scoped>
.img-big-tilte {
  width: 100%;
  .img-big{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
     height: 300px;
    }
  }
  .detitle{
    width: 100%;
    height: 80px;
    background-color: #9c9b9b;
    padding: 0 8px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #1A1A1A;
    display: flex;
    align-items: center;
  }
}
// 商品信息
.shopmessage{
  width: 100%;
  padding: 8px;
  .title{
    width: 100%;
    height: 60px;
    border-bottom:1px solid #ccc;
    display: flex;
    align-items: center;
    .sm-title{
      width: 100%;
      display: flex;
      align-items: flex-end;
      h5{
        padding-right:5px;
        font-weight: 300;
        font-size: 18px;
      }
      span{
        font-size: 10px;
      }
    }
  }
  .mes{
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    .sty{
      width: 182px;
      height: 30px;
      background-color:#9c9b9b;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pad{
      margin:0 10px 10px 0;
    }
  }
  .shoppresentation{
    width: 100%;
    background: #9c9b9b;
    font-size: 14px;
  }
}
// 尺码信息
.drop {
  width: 100%;
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  .dro {
    width: 110px;
    margin:5px 5px 5px 0;
  }
  .long{
    width: 90px;
    margin: 5px 5px 5px 0;
  }
  .wid{
    width: 70px;
    margin: 5px 5px 5px 0;
  }
  .thick{
    width: 50px;
    margin:5px 0;
  }
  .common {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background: #9c9b9b;
    margin-right:5px;
  }
}
</style>
