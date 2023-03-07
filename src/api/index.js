import service from '@/utils/request.js'
import { objToUrl } from '@/utils/common.js'

// 活动信息
export const activityConfig = (data) => {
    return service({
        url: `activities/activity/config${objToUrl(data)}`,
        method: 'get',
    })
}
// 个人进展
export const activityPerschedule = (data) => {
    return service({
        url: `/activities/activity/perschedule${objToUrl(data)}`,
        method: 'get',
    })
}
// 发起抽奖
export const activityLottery = (data) => {
    return service({
        url: `/activities/activity/lottery`,
        method: 'post',
        data,
    })
}
