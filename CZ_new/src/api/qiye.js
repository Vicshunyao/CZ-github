import request from '@/util/request'
export default class {
    // 注册
    static enterpriseInfo(data) {
        return request({
            url: "/enterprise/findByInfo",
            method: 'post',
            data
        })
    }
    // 列表
    static enterpriseList(data) {
        return request({
            url: "/enterprise/audit/list",
            method: 'post',
            data
        })
    }
   
    static enterpriseUpadte(data) {
        return request({
            url: "/enterprise/update",
            method: 'post',
            data
        })
    }
    static enterpriseUpadteAudit(data) {
        return request({
            url: "/enterprise/updateAudit",
            method: 'post',
            data
        })
    }
    static enterpriseFind(data) {
        return request({
            url: "/enterprise/find",
            method: 'post',
            data
        })
    }
    static enterpriseFindById(data) {
        return request({
            url: "/enterprise/findById",
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
