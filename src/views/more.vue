<template>
<div class="more-page">
  <div class="top">
    <van-nav-bar
      title="全部活动"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 下拉选项 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="state.value1" :options="option1" />
      <van-dropdown-item v-model="state.value2" :options="defaut" >
        <van-tree-select
          v-model:active-id="state.activeId"
          v-model:main-active-index="state.activeIndex"
          :items="items"
          @click-item="consol"
        />
      </van-dropdown-item>
      <van-dropdown-item v-model="state.value3" :options="option3" />
    </van-dropdown-menu>
    <div class="title">
      <ul>
        <a v-for="(item, index) in option4"
          :key="item"
          :class="{active: index === number}"
          @click="change(index)"
          :to="item.url"
        >
          {{ item.text }}
        </a>
      </ul>
    </div>
  </div>
  <div class="contenr" v-if="isLoad">
  <!-- <p>{{listabc}}</p> -->
  <!-- 日历不要了 -->
    <!-- <van-tabs v-model="active" swipeable class="tabs1" >
      <van-tab v-for="(item,index) in tablist" :title="item.title" :img="item.img" :key="index"  >
        <img :src="item.img" />
      </van-tab>
    </van-tabs> -->
    <div v-for="(item,index) in listabc.result" class="inner-list" :key="index" @click="todetail(item.detailID)">
      <img :src="item.image" alt="" />
      <div class="inner-list-msg">
        <b>{{ item.title }}</b>
        <span class="inner-list-msg-authods">{{ item.address }}</span>
        <span class="inner-list-msg-date">{{ item.intro }}</span>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { getMorePageApi } from '../utils/api'
// import { getDetailApi } from '../utils/api'
import { reactive } from 'vue'
export default {
  setup() {
    const isLoad = false
    const number = 0
    const state = reactive({
      activeId: 1,
      activeIndex: 0,
      value1: 0,
      value2: 'a',
      // defaut: 'a',
      value3: 'A',
      listabc: []
    })
    const option1 = [
      { text: '全部商圈', value: 0 },
      { text: '西湖景区', value: 1 },
      { text: '东信合创园', value: 2 },
      { text: '杭州其他区域及周边', value: 3 },
      { text: '拱墅区', value: 4 },
      { text: '武林广场', value: 5 }
    ]
    const defaut = [
      { text: '全部品类', value: 'a' }
      // { text: '好评排序', value: 'b' },
      // { text: '销量排序', value: 'c' }
    ]
    const option3 = [
      { text: '最新收录', value: 'A' },
      { text: '人气最高', value: 'B' },
      { text: '离我最近', value: 'C' },
      { text: '评分最高', value: 'D' },
      { text: '人均最高', value: 'E' }
    ]
    const option4 = [
      { text: '曲项向天歌' },
      { text: '白毛浮绿水' },
      { text: '红掌拨清波' }
    ]
    const items = [
      {
        text: '全部品类',
        children: [{
          text: '全部',
          id: 1
        }]
      },
      {
        text: 'Experience',
        children: [
          {
            text: '全部',
            id: 1
          },
          {
            text: '酒店一宿',
            id: 2
          },
          {
            text: '运动健身',
            id: 3
          },
          {
            text: '理容悦己',
            id: 4
          }
        ]
      },
      {
        text: 'Local',
        children: [
          {
            text: '全部',
            id: 1
          },
          {
            text: '当地独占',
            id: 2
          }
        ]
      },
      {
        text: 'Play',
        children: [
          {
            text: '全部',
            id: 1
          },
          {
            text: '优质夜蒲',
            id: 2
          },
          {
            text: '展览演出',
            id: 3
          }
        ]
      }
    ]
    return {
      state,
      option1,
      // option2,
      option3,
      option4,
      isLoad,
      number,
      items,
      defaut
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    consol(data) {
      this.defaut[0].text = data.text
      this.$forceUpdate()
    },
    todetail(index) {
      this.$router.push(`/details/${index}`)
    },
    async getlist(idnum) {
      const res = await getMorePageApi(
        { id: idnum })
      this.listabc = res.result
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
      this.listabc = res.result
      this.isLoad = true
      this.$forceUpdate()
    })
    // this.getlist(1)
  }
}
</script>

<style lang='scss' scoped>
.top {
  position: fixed;
  top: 0;
  width: 100%;
  .title {
    height: 70px;
    background: #556F48;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
}
.active {
  background: #F6F6F6 !important;
  color: #88B272 !important;
}
.contenr {
  background: #556F48;
  margin: 162px 0 0 0;
}
.van-dropdown-menu {
  margin-top: -1px;
}
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
