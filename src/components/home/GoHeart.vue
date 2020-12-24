<template>
<div class="goheart">
  <van-nav-bar :title="biaoti" left-arrow @click-left="onClickLeft" :placeholder="true"></van-nav-bar>
  <div class="one">
    <van-dropdown-menu>
      <van-dropdown-item v-model="state.value1" :options="option1" />
      <van-dropdown-item v-model="state.value2" :options="option2" />
      <van-dropdown-item v-model="state.value3" :options="option3" />
    </van-dropdown-menu>
  </div>
  <div class="two">
    <van-tabs v-model="active" swipeable line-height="0px">
      <van-tab v-for="(item, index) in twolist" :title="item.title" :key="index" >
        内容 {{ item.title }}
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: ['biaoti'],
  data () {
    return {
      twolist: [
        {
          title: '春季好味道'
        },
        {
          title: '吃了会变甜'
        },
        {
          title: '春游好去处'
        },
        {
          title: '享受童趣'
        },
        {
          title: '色彩空间'
        },
        {
          title: '约会加成'
        },
        {
          title: '面包会有的'
        },
        {
          title: '阳光玻璃房'
        },
        {
          title: '热门排队中'
        },
        {
          title: '深夜好去处'
        },
        {
          title: '周末去这玩'
        }
      ]
    }
  },
  setup () {
    const onClickLeft = () => {
      window.history.go(-1)
    }
    const state = reactive({
      value1: 0,
      value2: 0,
      value3: 0
    })
    const option1 = [
      { text: '全部商圈', value: 0 },
      { text: '西湖景区', value: 1 },
      { text: '东信和创园', value: 2 },
      { text: '杭州其他区域及周边', value: 3 },
      { text: '拱墅区', value: 4 },
      { text: '武林广场', value: 5 },
      { text: '湖滨', value: 6 },
      { text: '吴山广场', value: 7 },
      { text: '西溪湿地', value: 8 },
      { text: '滨江', value: 9 }
    ]
    const option2 = [
      { text: '全部', value: 0 },
      { text: '优质夜蒲', value: 1 },
      { text: '展览演场', value: 2 }
    ]
    const option3 = [
      { text: '人气最高', value: 0 },
      { text: '离我最近', value: 1 },
      { text: '最新收录', value: 2 },
      { text: '评分最高', value: 3 },
      { text: '人均最低', value: 4 },
      { text: '人均最高', value: 5 }
    ]
    return {
      state,
      option1,
      option2,
      option3,
      onClickLeft
    }
  }
}
</script>

<style lang='scss' scoped>
.goheart{
  .two{
    width: 100%;
    height: 573px;
    background: #556F48;
    .van-tabs{
      height: 44px;
    }
  }
}
</style>
