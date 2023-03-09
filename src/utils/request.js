import axios from 'axios'
import router from '@/router/index'
let service = axios.create({
    baseURL: '',
    timeout: 30000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['shopid'] = 'FK'
        config.headers['access-token'] = 'wtn:3db2984d40483d808fb99b3f0152aa6bShpcJFNX5g16783753782'
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
