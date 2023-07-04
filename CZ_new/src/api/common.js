import request from '@/util/request'
export default class {
    //验证码登录
    static loginByVerifyCode(data) {
        return request({
            url: "/user/login/by/verify/code",
            method: 'post',
            data
        })
    }
    static register(data) {
        return request({
            url: "/user/register",
            method: 'post',
            data
        })
    }
    // 登录
    static login(data) {
        return request({
            url: "/user/loginF",
            data,
            method: 'post'
        })
    }
    // 管理员登录 
    static loginAdmin(params) {
        return request({
            url: "user/login/admin",
            data: params,
            method: 'post'
        })
    }
    // 刷新登录接口
    static refreshToken() {
        return request({
            url: '/refreshToken',
            method: 'post',
           

        })
    }
    static Logout() {
        return request({
            url: '/logout',
            method: 'post',
           

        })
    }
    static getInfo(){
        return request({
            url:"/front/document/getInfo",
            method:"get"
        })
    }
}
