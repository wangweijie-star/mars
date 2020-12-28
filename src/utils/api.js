import http from './http'
// 注册和登录
export const postLoginlApi = params => http.post('/api/user/register', params)
export const userinfoApi = params => http.post('/api/home/userinfo', params)
