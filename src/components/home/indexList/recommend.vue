<template>
<!-- 首页推荐组件 -->
  <div class="recomm-warp">
    <div class="conent" v-for="item in recommendLi" :key="item._id">
        <div class="imgs">
          <img :src="item.img" alt="">
        </div>
        <div class="synopsis">
          <div class="adress">
            <img src="../../../../public/img/index-tuijian/recommend-address.png" alt="">
            <span>{{ item.address }}</span>
          </div>
          <!-- 简介 -->
          <div class="troduce">
            {{ item.title }}
          </div>
          <!-- 个人信息 -->
          <div class="personalDetails">
            <div class="photoName">
              <div class="photo"></div>
              <span>{{ item.username }}</span>
            </div>
              <!-- 点赞 -->
            <div class="like">
              <span>点赞</span>
              <p class="likeNum">1</p>
            </div>
          </div>

        </div>
    </div>
    <p class="NaNnum">数据有限！我们是有底线的</p>
    </div>
  <!-- </div> -->
</template>

<script>
import { getRecommendApi } from '../../../utils/api'
// 推荐图片
export default {
  data () {
    return {
      recommendLi: []
    }
  },
  async mounted () {
    const res = await getRecommendApi()
    console.log(res)
    this.recommendLi = res.result
  }
}
</script>
<style lang='scss' scoped>
.recomm-warp{
  width: 100%;
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
  padding: 0 6px;
  .conent{
    width: 180px;
    height: 336px;
    padding-right: 5px;
    // 放图片的div
    .imgs{
      width: 100%;
      height: 238px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    // 下面的div
    .synopsis{
    width: 173px;
    height: 83px;
    padding: 12px 5px 3px 2px;
    display: flex;
    flex-direction: column;
    .adress{
      width: 100%;
      height: 17px;
      display: flex;
      align-items : flex-end;
      img{
        width: 15px;
        height: 15px;
        background: #D8D8D8;
        margin-right: 6px;
      }
      span{
        height: 17px;
        color: #B1B1B1;
        font-size: 12px;
      }
    }
    .troduce{
      width: 130px;
      height: 36px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #0D0D0D;
      line-height: 18px;
    }
    // 最后的个人信息
      .personalDetails{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .photoName{
          width: 75px;
          height: 20px;
          display: flex;
          justify-content: space-between;
          align-items : flex-end;
          .photo{
            width: 19px;
            height: 19px;
            border-radius:50%;
            background-color: #556F48;
          }
          span{
            font-size:12px;
          }
        }
        .like{
          height: 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          span {
            font-size: 12px;
            margin-right:2px;
            color: #556F48;
          }
          .likeNum{
            font-size: 12px;
            color: #0D0D0D;
          }
        }
      }
    }
  }
  .NaNnum{
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    color: #556F48;
  }
}
</style>
