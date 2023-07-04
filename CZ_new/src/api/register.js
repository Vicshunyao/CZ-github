import request from '@/util/request'
export default class {
    // 注册
    static register(data) {
        return request({
            url: "/user/register",
            method: 'post',
            data
        })
    }
    static getSmsVerifyCode(data) {
        return request({
            url: '/sms-record/send/verify/code',
            method: 'post',
            data
        })
    }

}
