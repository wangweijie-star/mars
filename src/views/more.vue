<template>
<div class="more-page">
  <van-nav-bar
    title="全部活动"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-tabs v-model="active" swipeable>
    <van-tab v-for="index in 12" :key="index">
      <template #title>
        <div class="title-top">
        <img src="../assets/imges/feiji.png" alt=""><span>选项</span>
        </div>
      </template>
    </van-tab>
  </van-tabs>

  <van-cell class="now-date" :value="date" @click="show = true" />
  <van-calendar v-model:show="show" @confirm="onConfirm" :round="false" position="top40px" :show-confirm="false" />

  <div class="inner-list">
    <div class="inner-list-img">
      <span></span>
      <img src="" alt="" />
    </div>
    <div class="inner-list-msg">
      <b>1256486798546546543213545648654</b>
      <span class="inner-list-msg-authods">456783546546549</span>
      <span class="inner-list-msg-date">6天后结束</span>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const date = ref('')
    const show = ref(false)
    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
    const onConfirm = (date) => {
      show.value = false
      date.value = formatDate(date)
    }
    return {
      date,
      show,
      onConfirm
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.more-page {
  background-image: url(../assets/imges/more-page-background.jpg);
  height: 800px;
}
.van-tabs {
  margin-right: 100px;
}
.now-date {
  height: 44px;
  width: 100px;
  background: pink;
  position: absolute;
  top: 46px;
  right: 0;
  z-index: 999;
}
.title-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 20px;
  }
}
.inner-list {
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 10px 47px;
  background: #fff;
  height: 90px;
  color: #000;
  .inner-list-msg {
    display: flex;
    flex-direction: column;
    b {
      padding: 10px 0 3px;
      width: 120px;
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
      width: 140px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
    }
    .inner-list-msg-date {
      padding: 7px 0 3px;
      float: left;
      color: #333;
      font-size: 12px;
    }
  }
}
</style>
