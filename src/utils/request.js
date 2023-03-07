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
        config.headers['access-token'] = 'wtn:2be9da7c2a38f6592fe6341b279b8208SIFNWtCRtk16781919112'
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
