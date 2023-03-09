<template>
    <div class="home">
        <img class="active-bg" src="@/assets/img/active-bg.png" />
        <img class="logo-img" src="@/assets/img/logo.png" />
        <div class="regular-floating-window">
            <div class="regular-floating-window-item">
                <i class="iconfont icon-guizeshuoming"></i>
                <span>规则</span>
            </div>
            <div class="line-heaght"></div>
            <div class="regular-floating-window-item">
                <i class="iconfont icon-liwu"></i>
                <span>奖品</span>
            </div>
            <div class="line-heaght"></div>
            <div class="regular-floating-window-item" @click="$router.push('/user-center')">
                <i class="iconfont icon-31wode"></i>
                <span>我的</span>
            </div>
        </div>
        <EggTwistingMachine />
        <div class="bottom-button">
            <button class="bottom-button-vie"><span>分享给好友</span></button>
            <button class="bottom-button-vie follow"><span>关注我们</span></button>
        </div>
    </div>
</template>

<script>
import EggTwistingMachine from '@/components/egg-twisting-machine.vue'
import { activityConfig, activityPerschedule } from '@/api/index.js'

export default {
    name: 'App',
    components: {
        EggTwistingMachine,
    },
    mounted() {
        console.log(this.$router, 'this.$router')
        this.getActivityConfig()
        this.getActivityPerschedule()
    },
    methods: {
        getActivityConfig: async () => {
            const res = await activityConfig({
                atsid: '4',
            })
            console.log(res.data, 'resres')
        },
        getActivityPerschedule: async () => {
            const res = await activityPerschedule({
                atsid: '4',
            })
            console.log(res.data, '122222')
        },
    },
}
</script>

<style lang="less" scoped>
.home {
    width: 100vw;
    height: 100vh;
    min-height: 145vw;
    background-color: #000;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .active-bg {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }
    .logo-img {
        width: 29vw;
        position: fixed;
        top: 8vw;
        left: 8vw;
    }
    .regular-floating-window {
        width: 13vw;
        height: 41vw;
        padding-top: 1vw;
        box-sizing: border-box;
        border-radius: 1.5vw 0 0 1.5vw;
        background: rgba(65, 57, 111, 0.6);
        position: fixed;
        z-index: 1;
        top: 14vw;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .regular-floating-window-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            i {
                font-size: 5vw;
                color: #fff;
            }
            span {
                font-size: 3vw;
                font-weight: 600;
                color: #ffffff;
                margin-top: 1vw;
            }
        }
        .line-heaght {
            width: 10vw;
            height: 1px;
            background: #fff;
            opacity: 0.4;
        }
    }
    .bottom-button {
        width: 100vw;
        min-height: 25vw;
        justify-content: space-around;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 3vw;
        box-sizing: border-box;
        .bottom-button-vie {
            width: 41vw;
            height: 11vw;
            background-color: #1abc9c;
            border-radius: 6px;
            span {
                font-size: 4vw;
                font-weight: 500;
                color: #fffffe;
            }
        }
        .follow {
            width: 36vw;
            background-color: #a20b3b;
        }
    }
}
</style>
