<template>
  <div class="title">
    <ul>
      <router-link v-for="(item, index) in option4"
        :key="item"
        :class="{active: index === number}"
        @click="change(item.text, index)"
        :to="item.url"
      >
        {{ item.text }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import { getMoreApi } from '../../../utils/api'
export default {
  data() {
    return {
      option4:
      [
        { text: '曲项向天歌', url: '/more' },
        { text: '白毛浮绿水', url: '/moretwo' },
        { text: '红掌拨清波', url: '/morethree' }
      ]
    }
  },
  methods: {
    change(text, i) {
      // 点击之后再次请求数据，传id和name,不用写router-link和option4的url
      this.number = i
      this.getlist(text, i)
      this.$forceUpdate()
    },
    async getlist(text, idnum) {
      const res = await getMoreApi(
        { name: text, id: idnum })
      this.listabc = res.result
      this.isLoad = true
      this.$forceUpdate()
    }
  },
  mounted() {
    // getMoreApi().then(res => {
    //   this.listabc = res.result
    //   this.isLoad = true
    //   this.$forceUpdate()
    // })
    this.getlist('more', 1)
  }
}
</script>
<style lang='scss' scoped>
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
</style>
