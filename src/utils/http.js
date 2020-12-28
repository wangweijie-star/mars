// 引入轻提示
import { Toast } from 'vant'
// 引入axios
import axios from 'axios'

// 创建实例
var instance = axios.create({
  // ‘baseURL' 将自动加载'url'前面,除非'url'是一个绝对url
  baseURL: 'http://10.31.162.16:3000',
  // 设置超时时间
  timeout: 10000
})

// 添加请求拦截器(每次发送请求前统一做的事情)
instance.interceptors.request.use(
  (config) => {
    // console.log(config)
    if (localStorage.getItem('token')) {
      if (config.method === 'get') {
        config.params.token = localStorage.getItem('token')
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器(每次请求成功以后统一做的事情)
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // console.log(response)
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

const http = {
  get (url, params) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
        params: params || {}
      })
        .then(res => {
          if (res.status === 0) {
            resolve(res)
          } else {
            Toast(res.mag)
          }
        })
        .catch(err => {
          Toast(err.message)
          reject(err)
        })
    })
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      instance.post(url, params)
        .then(res => {
          // resolve(res)
          if (res.status === 0) {
            resolve(res)
          } else {
            Toast(res.msg)
          }
        })
        .catch(err => {
          Toast(err.message)
          reject(err)
        })
    })
  }
}

export default http
