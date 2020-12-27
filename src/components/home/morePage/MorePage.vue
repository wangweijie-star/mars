<template>
  <div class="contenr" v-if="isLoad">
  <!-- <p>{{listabc}}</p> -->
  <!-- 日历不要了 -->
    <!-- <van-tabs v-model="active" swipeable class="tabs1" >
      <van-tab v-for="(item,index) in tablist" :title="item.title" :img="item.img" :key="index"  >
        <img :src="item.img" />
      </van-tab>
    </van-tabs> -->
    <div v-for="(item,index) in listabc" class="inner-list" :key="index" @click="todetail(index)">
      <img :src="item.image" alt="" />
      <div class="inner-list-msg">
        <b>{{ item.title }}</b>
        <span class="inner-list-msg-authods">{{ item.address }}</span>
        <span class="inner-list-msg-date">{{ item.intro }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getMoreApi } from '../../../utils/api'
export default {
  data() {
    return {
      listabc: []
    }
  },
  methods: {
    todetail(index) {
      this.$router.push(`/details/${index + 1}`)
    }
  },
  mounted() {
    getMoreApi().then(res => {
      this.listabc = res.result
      this.isLoad = true
      this.$forceUpdate()
    })
  }
}
</script>

<style lang='scss' scoped>
.inner-list {
  margin: 10px 20px 0 20px;
  background: #fff;
  height: 100px;
  color: #000;
  img {
    float: left;
    width: 100px;
  }
  .inner-list-msg {
    float: left;
    display: flex;
    flex-direction: column;
    b {
      padding: 10px 0 3px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 16px;
    }
    span {
      padding: 7px 0 3px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
    }
    .inner-list-msg-date {
      padding: 5px 5px;
      float: left;
      color: #333;
      font-size: 12px;
      color: #384;
      background: rgba($color: #391, $alpha: 0.3);
      border-radius: 3px;
    }
  }
}
</style>
