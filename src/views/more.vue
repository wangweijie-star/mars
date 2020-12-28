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
    <more-title></more-title>
  </div>
  <more-page></more-page>
  <!-- <router-view></router-view> -->
</div>
</template>

<script>
import { reactive } from 'vue'
import MorePage from '../components/home/morePage/MorePage'
import MoreTitle from '../components/home/morePage/MoreTitle'
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
      this.$router.push(`/details/${index + 1}`)
    }
  },
  components: {
    MorePage,
    MoreTitle
  }
}
</script>

<style lang='scss' scoped>
.top {
  position: fixed;
  top: 0;
  width: 100%;
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
