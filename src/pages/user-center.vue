<template>
    <div class="user-center">
        <div
            class="user-center-top"
            :style="{ border: selectActive == 2 ? '1px solid #f0f1f3' : 'none' }">
            <div
                class="user-center-top-item"
                :class="{ active: selectActive == 1 }"
                @click="selectActive = 1">
                <span>我的礼品</span>
            </div>
            <div
                class="user-center-top-item"
                :class="{ active: selectActive == 2 }"
                @click="selectActive = 2">
                <span>我的分享</span>
            </div>
            <div
                class="user-center-top-line"
                :style="{ left: selectActive == 1 ? '27vw' : '67vw' }"></div>
        </div>
        <div class="user-center-content" v-if="selectActive == 1">
            <div class="product-list-centent">
                <div class="product-item" v-for="item in personalPrizeList">
                    <div class="product-item-prominent">{{ item.levelName }}</div>
                    <div class="product-item-content">
                        <p class="product-item-name">{{ item.name }}</p>
                        <p class="product-item-efftime">有效期至{{ item.effTime }}</p>
                        <i class="product-item-line"></i>
                        <div class="use-rules">
                            <span>使用规则</span>
                            <i class="iconfont icon-below-s"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="no-data-box" v-if="!personalPrizeList || personalPrizeList.length == 0">
                <img class="no-data-box-img" src="@/assets/img/empty-state.png" />
                <p class="no-data-text">空空如也～</p>
                <button class="go-to-raffle" @click="$router.push('/')">
                    <span>前往抽奖</span>
                </button>
            </div>
        </div>
        <div class="my-share-content" v-else-if="selectActive == 2">
            <div class="my-share-content-top">
                <div>
                    <p class="grand-prix">大奖就在眼前，继续努力</p>
                    <p class="grand-prix-vite">已成功分享次数 {{ personalSharNum }} 次</p>
                </div>
                <button class="continue-to-share">
                    <span>继续分享</span>
                </button>
            </div>
            <div class="my-share-item" v-for="item in personalSharList">
                <img class="my-share-item-img" :src="item.headImgUrl" />
                <div>
                    <p class="my-share-item-title">{{ item.nickName }}</p>
                    <p class="my-share-item-vite">邀请时间: {{ item.createTime }}</p>
                </div>
            </div>
        </div>
        <div class="user-center-footer">
            <div class="user-center-footer-item active" @click="$router.push('/')">
                <i class="iconfont icon-liwu"></i>
                <span>抽奖主页</span>
            </div>
            <div class="user-center-footer-item">
                <i class="iconfont icon-kefu"></i>
                <span>抽奖主页</span>
            </div>
        </div>
    </div>
</template>

<script>
import { personalprize, personalShar } from '@/api/index.js'
export default {
    name: 'App',
    components: {},
    data() {
        return {
            selectActive: 2, // 我的礼品，我的分享 顶部切换
            personalPrizeList: [], // 我的奖品列表
            personalSharList: [], // 我的邀请列表
            personalSharNum: 0, // 邀请个数
        }
    },
    mounted() {
        this.getPersonalprize()
        this.getPersonalShar()
    },
    methods: {
        getPersonalprize: async function () {
            const res = await personalprize({
                atsid: '4',
                pageSize: 100000,
                pageNum: 1,
            })
            console.log(res.result?.data || [])
            // this.personalPrizeList = [
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            //     ...res.result.data,
            // ]
            this.personalPrizeList = []
        },
        getPersonalShar: async function () {
            const res = await personalShar({
                atsid: '4',
                pageSize: 100000,
                pageNum: 1,
            })
            console.log(res.result, '09090909090')
            this.personalSharList = res.result?.data || []
            this.personalSharNum = res.result?.totalCount || 0
        },
    },
}
</script>

<style lang="less" scoped>
.user-center {
    min-height: 100vh;
    background-color: #f0f1f3;
    padding: 14vw 0;
    padding-bottom: 20vw;
    box-sizing: border-box;

    .user-center-top {
        width: 100vw;
        height: 14vw;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        padding: 0 10vw;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        .user-center-top-item {
            font-size: 4vw;
            font-weight: 500;
            color: #333333;
            transition: 0.3s;
        }
        .active {
            color: var(--theme-color);
        }
        .user-center-top-line {
            width: 6vw;
            height: 0.6vw;
            background-color: var(--theme-color);
            position: absolute;
            left: 27vw;
            bottom: 2vw;
            transition: 0.3s;
        }
    }
    .user-center-content {
        padding-top: 2vw;
        .product-list-centent {
            margin: auto;
            .product-item {
                width: 93vw;
                height: 25vw;
                margin: auto;
                margin-top: 3vw;
                border-radius: 8px;
                overflow: hidden;
                background-color: #fff;
                box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
                display: flex;
                align-items: center;
                .product-item-prominent {
                    width: 25vw;
                    height: 25vw;
                    background: linear-gradient(
                        var(--theme-linear-gradient-color-i),
                        var(--theme-linear-gradient-color-ii)
                    );
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 5vw;
                    font-weight: 500;
                    color: #ffffff;
                }
                .product-item-content {
                    padding: 4vw 3vw;
                    box-sizing: border-box;
                    .product-item-name {
                        font-size: 4vw;
                        font-weight: 500;
                        color: #000000;
                    }
                    .product-item-efftime {
                        font-size: 3vw;
                        font-weight: 400;
                        color: #999999;
                        margin-top: 0.8vw;
                    }
                    .product-item-line {
                        display: block;
                        width: 61vw;
                        height: 1px;
                        background-color: #ccc;
                        margin: 2.5vw 0;
                    }
                    .use-rules {
                        display: flex;
                        align-items: center;
                        span {
                            font-size: 3vw;
                            font-weight: 400;
                            color: var(--theme-color);
                        }
                        i {
                            font-size: 4vw;
                            color: var(--theme-color);
                            margin-left: 1.5vw;
                        }
                    }
                }
            }
        }
        .no-data-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 35vw;
            .no-data-box-img {
                width: 30vw;
                height: 30vw;
            }
            .no-data-text {
                font-size: 3vw;
                font-weight: 400;
                color: #999999;
                margin-top: 7vw;
            }
            .go-to-raffle {
                width: 29vw;
                height: 9vw;
                background-color: var(--theme-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 1.5vw;
                margin-top: 7vw;
                span {
                    font-size: 4vw;
                    font-weight: 400;
                    color: #ffffff;
                }
            }
        }
    }
    .my-share-content {
        border-top: 1px solid #f0f1f3;
        padding: 0 5vw;
        background-color: #fff;

        .my-share-content-top {
            height: 28vw;
            background: url(../assets/img/my-share-fk.png);
            background-size: 100% 100%;
            border: 8px;
            overflow: hidden;
            margin-top: 3vw;
            padding-left: 7vw;
            padding-right: 3vw;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .grand-prix {
                font-size: 4vw;
                font-weight: bold;
                color: #333333;
            }
            .grand-prix-vite {
                font-size: 3vw;
                font-weight: 400;
                color: #666666;
                margin-top: 2vw;
            }
            .continue-to-share {
                width: 18vw;
                height: 7vw;
                display: flex;
                background: #fff;
                align-items: center;
                justify-content: center;
                border-radius: 4vw;
                span {
                    font-size: 3vw;
                    font-weight: 400;
                    color: var(--theme-color);
                }
            }
        }
        .my-share-item {
            width: 100%;
            height: 17vw;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #d6d6d6;

            .my-share-item-img {
                width: 11vw;
                height: 11vw;
                border-radius: 50%;
                display: block;
                background-color: var(--theme-color);
                margin-right: 3vw;
            }
            .my-share-item-title {
                font-size: 4vw;
                font-weight: 500;
                color: #000000;
            }
            .my-share-item-vite {
                font-size: 3vw;
                font-weight: 400;
                color: #999999;
                margin-top: 1vw;
            }
        }
        .my-share-item:nth-child(2) {
            margin-top: 2vw;
        }
    }
    .user-center-footer {
        width: 100vw;
        height: 15vw;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        position: fixed;
        left: 0;
        bottom: 0;
        .user-center-footer-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 3vw;
            i {
                font-size: 5vw;
            }
            span {
                margin-top: 0.4vw;
            }
        }
        .active {
            color: var(--theme-color);
        }
    }
}
</style>
