import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入矢量图标
import './assets/font/iconfont.css'
// 引入全局样式
import './assets/css/style.scss'
// 发现页样式
import './assets/css/find.scss'
// 引入移动端适配定义字体大小
import 'amfe-flexible'
import {
  Tabbar,
  TabbarItem,
  Search,
  Field,
  NavBar,
  Button,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tab,
  Tabs
} from 'vant'
// 引入全局样式
// import './assets/css/style.scss'
// 引入移动端适配定义字体大小
// import 'amfe-flexible'
// 发现页样式
// import './assets/css/find.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Swipe)
app.use(SwipeItem)
app.use(Grid)
app.use(GridItem)
app.use(Tab)
app.use(Tabs)
app.use(Field)
app.use(NavBar)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
