import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home.vue'),
    },
    {
        path: '/user-center',
        name: 'user-center',
        component: () => import('@/pages/user-center.vue'),
    },
]

const router = new VueRouter({
    // mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(to) {
//     return VueRouterPush.call(this, to).catch((err) => err)
// }
export default router
