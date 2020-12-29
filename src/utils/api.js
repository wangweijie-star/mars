import http from './http'
// 注册和登录
export const postLoginlApi = params => http.post('/api/user/register', params)
export const userinfoApi = params => http.post('/api/home/userinfo', params)
// message 信息组件获取数据
export const getLiApi = params => http.get('api/home/message', params)
