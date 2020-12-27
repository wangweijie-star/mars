import http from './http'
// 注册和登录
export const postLoginlApi = params => http.post('/api/user/register', params)
// message 信息组件获取数据
export const getLiApi = params => http.get('api/home/message', params)
// 更多页数据
export const getMoreApi = params => http.get('api/home/moretops', params)
// 更多页数据新（还未上传服务器,需通过点击nav传给后端一个id，后端通过id返回对应的数据）
export const getMorePageApi = params => http.get('api/home/morepages', params)
