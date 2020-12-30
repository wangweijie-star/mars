import http from './http'
// 注册和登录
export const postLoginlApi = params => http.post('/api/user/register', params)
export const userinfoApi = params => http.post('/api/home/userinfo', params)
// message 信息组件获取数据
export const getLiApi = params => http.get('api/home/message', params)
// index 推荐列表

export const getRecommendApi = params => http.get('api/home/recommend', params)

// 首页index 规划路线
export const getToProjectApi = params => http.get('api/home/ToProjects', params)

// 首页index 便利店
export const getToConStoreApi = params => http.get('/api/home/constores', params)
// 便利店 详情页
export const getToCartApi = params => http.get('/api/home/gotocart', params)
// 更多页数据
export const getMoreApi = params => http.get('api/home/moretops', params)
// 更多页数据新（还未上传服务器,需通过点击nav传给后端一个id，后端通过id返回对应的数据）
export const getMorePageApi = params => http.get('api/home/morepages', params)
// 详情页数据
export const getDetailApi = params => http.get('api/home/detail', params)
