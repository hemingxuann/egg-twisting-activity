import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import { getQueryString } from '@/utils/common.js'
import '@/assets/css/style.less'

Vue.config.productionTip = false
setTimeout(() => {
    console.log(window.location.search, getQueryString('shopid'), 'ssss')
}, 200)
if (getQueryString('shopid') == 'PK') {
    // 红色
    document.getElementsByTagName('body')[0].style.setProperty('--theme-color', '#a20b3b')
} else {
    // 绿色
    document.getElementsByTagName('body')[0].style.setProperty('--theme-color', '#1ABC9C')
}
new Vue({
    router,
    render: function (h) {
        return h(App)
    },
}).$mount('#app')
