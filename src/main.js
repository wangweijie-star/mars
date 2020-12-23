import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入矢量图标
import './assets/font/iconfont.css'
// 引入want框架
import {
  Tabbar,
  TabbarItem,
  Search,
  Field,
  NavBar,
  Button
} from 'vant'
// 引入全局样式
import './assets/css/style.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Field)
app.use(NavBar)
app.use(Button)

app.mount('#app')
