<template>
  <div class="title">
    <ul>
      <a v-for="(item, index) in option4"
        :key="item"
        :class="{active: index === number}"
        @click="change(index)"
      >
        {{ item.text }}
      </a>
    </ul>
  </div>
  <div class="contenr" v-if="isLoad">
  <!-- <p>{{listabc}}</p> -->
  <!-- 日历不要了 -->
    <!-- <van-tabs v-model="active" swipeable class="tabs1" >
      <van-tab v-for="(item,index) in tablist" :title="item.title" :img="item.img" :key="index"  >
        <img :src="item.img" />
      </van-tab>
    </van-tabs> -->
    <div v-for="(item,index) in listabc" class="inner-list" :key="index" @click="todetail(item.detailID)">
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
import { getMorePageApi } from '../../../utils/api'
import { reactive } from 'vue'
export default {
  setup() {
    const isLoad = false
    const number = 0
    const state = reactive({
      listabc: []
    })
    const option4 = [
      { text: '曲项向天歌' },
      { text: '白毛浮绿水' },
      { text: '红掌拨清波' }
    ]
    return {
      state,
      option4,
      isLoad,
      number
    }
  },
  methods: {
    todetail(index) {
      this.$router.push(`/details/${index}`)
    },
    async getlist(idnum) {
      const res = await getMorePageApi(
        { id: idnum })
      this.listabc = res.result.result
      this.isLoad = true
      this.$forceUpdate()
    },
    change(i) {
      // 点击之后再次请求数据，传id和name
      this.number = i
      this.getlist(i + 1)
      this.$forceUpdate()
    }
  },
  mounted() {
    getMorePageApi({ id: 1 }).then(res => {
      this.listabc = res.result.result
      this.isLoad = true
      this.$forceUpdate()
    })
  }
}
</script>

<style lang='scss' scoped>
.title {
  width: 100%;
  height: 70px;
  background: #556F48;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 92px;
  z-index: 0;
  ul {
    margin-top: -10px;
    display: flex;
    justify-content: space-evenly;

    a {
      background: #88B272;
      font-size: 16px;
      color: #F6F6F6;
      width: 85px;
      height: 31px;
      border-radius: 4px;
      line-height: 31px;
    }
  }
}
.active {
  background: #F6F6F6 !important;
  color: #88B272 !important;
}
.contenr {
  margin-top: 163px;
  background: #556F48;
  z-index: 0;
}
.inner-list {
  margin: 10px 20px 0 20px;
  background: #fff;
  height: 100px;
  color: #000;
  &:first-child {
    margin: -1px 20px 0 20px;
  }
  img {
    float: left;
    width: 100px;
  }
  .inner-list-msg {
    float: left;
    margin-left: 8px;
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
