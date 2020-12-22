import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入矢量图标
import './assets/font/iconfont.css'
// 引入want框架
import { Tabbar, TabbarItem, Search } from 'vant'
// 引入全局样式
import './assets/css/style.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.mount('#app')
