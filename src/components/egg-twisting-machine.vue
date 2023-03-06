<template>
    <div class="egg-twisting-machine">
        <img class="egg-twisting-machine-img" src="@/assets/img/egg-twisting.png" />
        <div class="egg-twisting-machine-box">
            <img class="egg-box" src="@/assets/img/egg-box.png" />
            <img class="egg-item egg-item1" ref="eggItem1" src="@/assets/img/egg1.png" />
            <img class="egg-item egg-item2" ref="eggItem2" src="@/assets/img/egg2.png" alt="" />
            <img class="egg-item egg-item3" ref="eggItem3" src="@/assets/img/egg3.png" alt="" />
            <img class="egg-item egg-item4" ref="eggItem4" src="@/assets/img/egg4.png" alt="" />
            <img class="egg-item egg-item5" ref="eggItem5" src="@/assets/img/egg5.png" alt="" />
            <img class="egg-item egg-item6" ref="eggItem6" src="@/assets/img/egg6.png" alt="" />
            <img class="egg-item egg-item7" ref="eggItem7" src="@/assets/img/egg7.png" alt="" />
            <img class="egg-item egg-item8" ref="eggItem8" src="@/assets/img/egg8.png" alt="" />
        </div>
        <div class="lottery-opportunity">
            <span>剩余 1 次抽奖机会</span>
        </div>
        <div class="twist" :class="{ 'twist-revolve': detonateContact }" @click="onTwist">
            <img class="egg-twist1" src="@/assets/img/egg-twist1.png" />
            <img class="egg-twist2" src="@/assets/img/egg-twist2.png" />
        </div>
        <div class="egg-prizewinning" v-if="eggPrizewinning">
            <img class="egg-separate3" src="@/assets/img/egg2-separate3.png" />
        </div>
        <div class="prizewinning-pop-mark" v-if="prizewinningPopMark">
            <div class="prizewinning-pop">
                <div class="egg-separate-box">
                    <img class="egg-separate1" src="@/assets/img/egg2-separate1.png" />
                    <div class="prizewinning-pop-content"></div>
                    <img class="egg-separate2" src="@/assets/img/egg2-separate2.png" />
                </div>
                <div class="once-more" @click="onceMore"><span>再来一次</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'egg-twisting-machine',
    components: {},
    data() {
        return {
            detonateContact: false, // 按钮动画
            eggPrizewinning: false, // 弹珠弹出
            prizewinningPopMark: false, // 中奖弹窗
        }
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        onTwist() {
            // 开始扭蛋
            this.detonateContact = true
            this.$refs.eggItem1.style.animationName = 'move1'
            this.$refs.eggItem2.style.animationName = 'move2'
            setTimeout(() => {
                this.detonateContact = false
            }, 1000)
            setTimeout(() => {
                this.eggPrizewinning = true
            }, 3000)
            setTimeout(() => {
                this.prizewinningPopMark = true
            }, 5000)
        },
        onceMore() {
            this.$refs.eggItem1.style.animationName = ''
            this.$refs.eggItem2.style.animationName = ''
            this.eggPrizewinning = false
            this.prizewinningPopMark = false
        },
    },
}
</script>

<style lang="less" scoped>
.egg-twisting-machine {
    width: 100vw;
    position: relative;
    .egg-twisting-machine-img {
        width: 100%;
        display: block;
    }
    .egg-twisting-machine-box {
        width: 67vw;
        height: 40vw;
        position: absolute;
        top: 45.8vw;
        left: 17vw;
        .egg-box {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
        }
        .egg-item {
            width: 17vw;
            position: absolute;
            z-index: 2;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: 3;
        }
        // top 0vw-22vw
        // left 1vw-49vw
        .egg-item1 {
            top: 21.87vw;
            left: 4.67vw;
            z-index: 3;
            // animation-name: move1;
        }
        .egg-item2 {
            top: 10vw;
            left: 11vw;
        }
        .egg-item3 {
            top: 22vw;
            left: 20vw;
        }
        .egg-item4 {
            top: 13vw;
            left: 34vw;
        }
        .egg-item5 {
            width: 12.4vw;
            height: 12.4vw;
            top: 26vw;
            left: 35vw;
            z-index: 1;
        }
        .egg-item6 {
            top: 2vw;
            left: 46vw;
        }
        .egg-item7 {
            width: 12.4vw;
            height: 12.4vw;
            top: 18vw;
            left: 52vw;
            z-index: 1;
        }
        .egg-item8 {
            top: 23vw;
            left: 47vw;
            z-index: 3;
        }
    }
    .lottery-opportunity {
        position: absolute;
        top: 99vw;
        left: 51vw;
        padding: 0.4vw 2.4vw;
        background-color: #e3496e;
        border-radius: 3vw;
        display: flex;
        span {
            font-size: 3vw;
            color: #fff;
        }
    }
    .twist {
        width: 20vw;
        height: 20vw;
        position: absolute;
        top: 107.8vw;
        left: 55vw;
        transition: 0.8s;
        transform: rotate(0deg);
        .egg-twist1 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        .egg-twist2 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .twist-revolve {
        transform: rotate(360deg);
    }
    .egg-prizewinning {
        width: 11vw;
        height: 11vw;
        position: absolute;
        top: 107vw;
        left: 32vw;
        z-index: 12;
        animation-duration: 2s;
        animation-name: winningAnimation;
        animation-fill-mode: forwards;
        .egg-separate3 {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
        }
    }
    .prizewinning-pop-mark {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-bottom: 12vw;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 14;
        animation-duration: 0.5s;
        animation-name: popAnimation;
        animation-fill-mode: forwards;
        .prizewinning-pop {
            width: 100vw;
            height: 128vw;
            background: url('../assets/img/prizewinning-pop-bg.png');
            background-size: 120% 120%;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            .egg-separate-box {
                display: inline-block;
                position: relative;
                transform: scale(0.4, 0.4);
                animation-delay: 0.5s;
                animation-duration: 0.5s;
                animation-name: eggSeparateBox;
                animation-fill-mode: forwards;
                .egg-separate1 {
                    width: 57vw;
                    height: 31vw;
                    position: absolute;
                    top: -13vw;
                    left: 50%;
                    transform: translateX(-50%);
                    animation-delay: 1s;
                    animation-duration: 0.5s;
                    animation-name: eggSeparate1;
                    animation-fill-mode: forwards;
                }
                .prizewinning-pop-content {
                    width: 50vw;
                    height: 36vw;
                    background: url('../assets/img/prizewinning-pop-content.png');
                    background-size: 100% 100%;
                    background-position: center;
                    position: relative;
                    z-index: 1;
                    transform: scale(0, 0);
                    animation-delay: 1s;
                    animation-duration: 1s;
                    animation-name: prizewinningPopContent;
                    animation-fill-mode: forwards;
                }
                .egg-separate2 {
                    width: 57vw;
                    height: 31vw;
                    position: absolute;
                    top: 13vw;
                    left: 50%;
                    transform: translateX(-50%);
                    animation-delay: 1s;
                    animation-duration: 0.5s;
                    animation-name: eggSeparate2;
                    animation-fill-mode: forwards;
                }
            }
            .once-more {
                width: 33vw;
                height: 12vw;
                border-radius: 10vw;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(#d73c61, #a62740);
                position: absolute;
                bottom: -5vw;
                span {
                    font-size: 4vw;
                    font-weight: 500;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>
<style>
/* 中奖动画 */
@keyframes winningAnimation {
    0% {
        opacity: 0;
        transform: translate(0vw, -6vw) scale(1, 1);
    }
    60% {
        opacity: 1;
        transform: translate(0vw, 13vw) scale(1, 1);
    }
    90% {
        opacity: 1;
        transform: translate(12vw, -48vw) scale(2, 2);
    }
    100% {
        transform: translate(12vw, -48vw) scale(2, 2);
        opacity: 0;
    }
}
/* 弹窗动画 */
@keyframes popAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
/* 蛋放大动画动画 */
@keyframes eggSeparateBox {
    0% {
        transform: scale(0.4, 0.4);
    }
    100% {
        transform: scale(1, 1);
    }
}
/* 卡片放大 */
@keyframes prizewinningPopContent {
    0% {
        transform: scale(0, 0);
    }
    100% {
        transform: scale(1, 1);
    }
}
/* 上半蛋 */
@keyframes eggSeparate1 {
    0% {
        top: -13vw;
    }
    100% {
        top: -28vw;
    }
}
/* 上半蛋 */
@keyframes eggSeparate2 {
    0% {
        top: 13vw;
    }
    100% {
        top: 33vw;
    }
}
/* 蛋滚动 */
@keyframes move1 {
    0% {
        transform: rotate(-30deg);
        top: 21.87vw;
        left: 4.67vw;
    }

    25% {
        transform: rotate(60deg);
        top: 0vw;
        left: 25vw;
    }

    50% {
        transform: rotate(-110deg);
        top: 13vw;
        left: 49vw;
    }

    75% {
        transform: rotate(56deg);
        top: 5vw;
        left: 1vw;
    }

    100% {
        transform: rotate(0deg);
        top: 21.87vw;
        left: 4.67vw;
    }
}
@keyframes move2 {
    0% {
        transform: rotate(-30deg);
        top: 10vw;
        left: 11vw;
    }

    20% {
        transform: rotate(60deg);
        top: 0vw;
        left: 1vw;
    }

    40% {
        transform: rotate(-110deg);
        top: 22vw;
        left: 26vw;
    }

    60% {
        transform: rotate(56deg);
        top: 0vw;
        left: 33vw;
    }
    80% {
        transform: rotate(180deg);
        top: 10vw;
        left: 48vw;
    }
    100% {
        transform: rotate(0deg);
        top: 10vw;
        left: 11vw;
    }
}
</style>
