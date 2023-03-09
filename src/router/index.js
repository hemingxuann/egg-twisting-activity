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
        meta: {
            title: '心愿扭蛋机',
        },
    },
    {
        path: '/user-center',
        name: 'user-center',
        component: () => import('@/pages/user-center.vue'),
        meta: {
            title: '个人中心',
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router
